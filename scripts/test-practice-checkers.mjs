#!/usr/bin/env node
/**
 * Regression tests for the practice checkers.
 *
 * Covers:
 *   UI-02  symbolic equivalence must not shadow math functions
 *   MATH-07 numeric tolerance must be relative for exact-value items
 *   Review scheduling migration (1/3/7-day due queue) and store writes
 *   Restore snapshots (lastAnswer / solution-open state) across reloads
 *
 * Run: node scripts/test-practice-checkers.mjs
 */
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { PAST_PAPERS } from '../data/shared/pastpapers.js';
import { CHAPTERS } from '../modules/registry.js';

/**
 * Load the vendored UMD bundle on Node 24+ without extra flags.
 * createRequire handles the normal CJS path; the Function fallback keeps the
 * script working if Node's loader treats this repo or vendor/*.js as ESM.
 */
function loadVendoredMath() {
  const require = createRequire(import.meta.url);
  try {
    const loaded = require('../vendor/mathjs/math.min.js');
    if (loaded && typeof loaded.evaluate === 'function') return loaded;
  } catch (_) { /* fall through to the direct UMD evaluation */ }
  const bundlePath = fileURLToPath(new URL('../vendor/mathjs/math.min.js', import.meta.url));
  const source = readFileSync(bundlePath, 'utf8');
  const bundle = { exports: {} };
  const evaluateBundle = new Function('module', 'exports', 'define', 'require', source);
  evaluateBundle(bundle, bundle.exports, undefined, createRequire(bundlePath));
  if (!bundle.exports || typeof bundle.exports.evaluate !== 'function') {
    throw new Error('Failed to load vendor/mathjs/math.min.js');
  }
  return bundle.exports;
}

const math = loadVendoredMath();

// js/practice.js reads window.math. Set it before importing the module.
globalThis.window = { math };
const {
  checkSymbolic,
  checkNumeric,
  migratePracticeStore,
  scheduleAfterAttempt,
  isReviewDue,
  dueReviews,
  readPracticeStore,
  recordPracticeAttempt,
  practiceAttemptSnapshot,
  setPracticeSolutionOpen,
  PRACTICE_STORE_KEY,
} = await import('../js/practice.js');

function createStorage(initial = {}) {
  const data = new Map(Object.entries(initial));
  let writes = 0;
  return {
    getItem(key) {
      return data.has(key) ? data.get(key) : null;
    },
    setItem(key, value) {
      writes += 1;
      data.set(key, String(value));
    },
    removeItem(key) {
      data.delete(key);
    },
    clear() {
      data.clear();
    },
    resetWrites() {
      writes = 0;
    },
    get writes() {
      return writes;
    },
  };
}

// Deterministic random samples keep the equivalence checks reproducible.
let seed = 0x2f6e2b1;
const realRandom = Math.random;
Math.random = () => {
  seed = (seed * 1664525 + 1013904223) >>> 0;
  return seed / 0x100000000;
};

let passed = 0;
function ok(name, actual, expected = true) {
  assert.equal(actual, expected, name);
  passed += 1;
  console.log(`ok ${passed} - ${name}`);
}

console.log('\nUI-02 symbolic checker');
ok('calc-u2 q011 accepts 3x^2*e^x+x^3*e^x', checkSymbolic('3x^2*e^x+x^3*e^x', 'e^x*(3x^2+x^3)'));
ok('calc-u2 q011 accepts explicit e^x*(x^3+3x^2)', checkSymbolic('e^x*(x^3+3*x^2)', 'e^x*(3x^2+x^3)'));
ok('calc-u2 q011 rejects 3*x^2*e^x', checkSymbolic('3*x^2*e^x', 'e^x*(3x^2+x^3)'), false);
ok('calc-u2 q011 rejects e^x*(3x^2+x^4)', checkSymbolic('e^x*(3x^2+x^4)', 'e^x*(3x^2+x^3)'), false);

ok('calc-u9 q008 accepts -cot(t)', checkSymbolic('-cot(t)', '-cot(t)'));
ok('calc-u9 q008 accepts -cos(t)/sin(t)', checkSymbolic('-cos(t)/sin(t)', '-cot(t)'));
ok('calc-u9 q008 rejects cot(t)', checkSymbolic('cot(t)', '-cot(t)'), false);

ok('calc-u8 q003 accepts (1+4*x^2)^(1/2)', checkSymbolic('(1+4*x^2)^(1/2)', 'sqrt(1+4*x^2)'));
ok('calc-u8 q003 accepts sqrt(4*x^2+1)', checkSymbolic('sqrt(4*x^2+1)', 'sqrt(1+4*x^2)'));
ok('calc-u8 q003 accepts exp/log form', checkSymbolic('exp(0.5*log(1+4*x^2))', 'sqrt(1+4*x^2)'));
ok('calc-u8 q003 rejects sqrt(1+4*x)', checkSymbolic('sqrt(1+4*x)', 'sqrt(1+4*x^2)'), false);

ok('function-only expression cos(pi/6) equals sqrt(3)/2', checkSymbolic('cos(pi/6)', 'sqrt(3)/2'));
ok('function names are not sampled as variables', checkSymbolic('sqrt(x^2+1)', 'sqrt(x^2+1)'));

console.log('\nStudent-friendly symbolic input (UI-02 leftover)');
ok('calc-u2 q011 accepts implicit product e^x(3x^2+x^3)', checkSymbolic('e^x(3x^2+x^3)', 'e^x*(3x^2+x^3)'));
ok('calc-u2 q011 accepts explicit e^x*(3x^2+x^3)', checkSymbolic('e^x*(3x^2+x^3)', 'e^x*(3x^2+x^3)'));
ok('calc-u2 q011 still rejects a missing term with implicit product', checkSymbolic('e^x(3x^2)', 'e^x*(3x^2+x^3)'), false);
ok('accepts -cot t without parentheses', checkSymbolic('-cot t', '-cot(t)'));
ok('accepts -cot(t)', checkSymbolic('-cot(t)', '-cot(t)'));
ok('accepts sin x without parentheses', checkSymbolic('sin x', 'sin(x)'));
ok('accepts ln x as natural log', checkSymbolic('ln x', 'log(x)'));
ok('accepts -ln x as negative natural log', checkSymbolic('-ln x', '-log(x)'));
ok('accepts sin 2x as sin(2x)', checkSymbolic('sin 2x', 'sin(2*x)'));
ok('treats x(x+1) as multiplication, not a call', checkSymbolic('x(x+1)', 'x^2+x'));
ok('still rejects cot(t) when -cot(t) is expected', checkSymbolic('cot(t)', '-cot(t)'), false);
ok('still rejects sin x when cos(x) is expected', checkSymbolic('sin x', 'cos(x)'), false);

console.log('\nGlued functions and arbitrary constant C');
ok('accepts sinx without a space', checkSymbolic('sinx', 'sin(x)'));
ok('accepts 2sinx without a space', checkSymbolic('2sinx', '2*sin(x)'));
ok('accepts cosx and tanx without spaces', checkSymbolic('cosx+tanx', 'cos(x)+tan(x)'));
ok('accepts sinhx with the longer function name', checkSymbolic('sinhx', 'sinh(x)'));
ok('accepts lnx as natural log', checkSymbolic('lnx', 'log(x)'));
ok('still rejects sinx when cosx is expected', checkSymbolic('sinx', 'cos(x)'), false);
ok('accepts Ce^(2x) for C*e^(2*x)', checkSymbolic('Ce^(2x)', 'C*e^(2*x)'));
ok('accepts C e^(2x) with a space', checkSymbolic('C e^(2x)', 'C*e^(2*x)'));
ok('accepts Ce^(0.05t) for C*e^(0.05*t)', checkSymbolic('Ce^(0.05t)', 'C*e^(0.05*t)'));
ok('accepts x^3+C', checkSymbolic('x^3+C', 'x^3+C'));
ok('rejects Ce^(2x) when the key has no C', checkSymbolic('Ce^(2x)', 'e^(2*x)'), false);
ok('rejects C*e^(2x) when the key has no C', checkSymbolic('C*e^(2x)', 'e^(2*x)'), false);
ok('rejects a leading C on x^3 when the key has no C', checkSymbolic('Cx^3', 'x^3'), false);
ok('rejects x^3+C when the key has no C', checkSymbolic('x^3+C', 'x^3'), false);

console.log('\nMATH-07 numeric tolerance (calc-u10-q002, expected 1/64, tol 0.01)');
ok('1/128 is rejected', checkNumeric('1/128', 0.015625, 0.01), false);
ok('0.02 is rejected', checkNumeric('0.02', 0.015625, 0.01), false);
ok('1/64 is accepted', checkNumeric('1/64', 0.015625, 0.01));
ok('0.015625 is accepted', checkNumeric('0.015625', 0.015625, 0.01));
ok('1.5625e-2 is accepted', checkNumeric('1.5625e-2', 0.015625, 0.01));
ok('relative tolerance still accepts a 0.8% miss for 0.5', checkNumeric('0.504', 0.5, 0.01));
ok('relative tolerance rejects a 2% miss for 0.5', checkNumeric('0.51', 0.5, 0.01), false);
ok('expected 0 accepts exact 0', checkNumeric('0', 0, 0.01));
ok('expected 0 rejects a non-tiny absolute error', checkNumeric('0.001', 0, 0.01), false);

console.log('\nPractice store migration and review scheduling');
const NOW = 1_800_000_000_000;
const DAY = 86400000;
const legacyStore = {
  v: 1,
  keptTop: 'yes',
  banks: {
    'bio/bio-u1': {
      answers: {
        'practice:bio/bio-u1/q1': { status: 'wrong', lastAnswer: 'A', at: 11, note: 'keep' },
        'practice:bio/bio-u1/q2': { status: 'right', lastAnswer: 'B', at: 12, custom: 7 },
      },
      lastIndex: 3,
      keptBank: 'yes',
    },
    'math/calc-u2': {
      answers: {
        'practice:math/calc-u2/q1': { status: 'right', lastAnswer: 'C', at: 13 },
      },
      lastIndex: 2,
    },
  },
};

const migrated = migratePracticeStore(legacyStore);
ok('migration bumps the store version', migrated.v, 2);
ok('migration keeps every bank', Object.keys(migrated.banks).sort().join(','), 'bio/bio-u1,math/calc-u2');
ok('migration keeps every answer', Object.keys(migrated.banks['bio/bio-u1'].answers).length, 2);
ok('migration keeps lastIndex', migrated.banks['bio/bio-u1'].lastIndex, 3);
ok('migration keeps unknown top-level fields', migrated.keptTop, 'yes');
ok('migration keeps unknown bank fields', migrated.banks['bio/bio-u1'].keptBank, 'yes');
ok('migration keeps unknown answer fields', migrated.banks['bio/bio-u1'].answers['practice:bio/bio-u1/q1'].note, 'keep');
ok('migration keeps lastAnswer and at', migrated.banks['bio/bio-u1'].answers['practice:bio/bio-u1/q1'].lastAnswer, 'A');
ok('legacy wrong becomes interval 1', migrated.banks['bio/bio-u1'].answers['practice:bio/bio-u1/q1'].intervalDays, 1);
ok('legacy wrong is due now', isReviewDue(migrated.banks['bio/bio-u1'].answers['practice:bio/bio-u1/q1'], NOW));
ok('legacy right is not due', isReviewDue(migrated.banks['bio/bio-u1'].answers['practice:bio/bio-u1/q2'], NOW), false);
ok('legacy right gains no schedule', 'dueAt' in migrated.banks['bio/bio-u1'].answers['practice:bio/bio-u1/q2'], false);

for (const bad of ['{broken', 'null', null, 42, [], true]) {
  const safe = migratePracticeStore(bad);
  ok(`migration does not throw or invent banks for ${JSON.stringify(bad)}`, Object.keys(safe.banks).length, 0);
}

const corruptStorage = createStorage();
globalThis.localStorage = corruptStorage;
corruptStorage.setItem(PRACTICE_STORE_KEY, '{not valid json');
corruptStorage.resetWrites();
const corruptRead = readPracticeStore();
ok('corrupt local store reads as empty', Object.keys(corruptRead.banks).length, 0);
ok('corrupt local store is not written back', corruptStorage.writes, 0);
ok('corrupt local store keeps its bytes', corruptStorage.getItem(PRACTICE_STORE_KEY), '{not valid json');

const scheduleWrong = scheduleAfterAttempt(undefined, false, NOW);
ok('wrong attempt is status wrong', scheduleWrong.status, 'wrong');
ok('wrong attempt has interval 1', scheduleWrong.intervalDays, 1);
ok('wrong attempt is due immediately', scheduleWrong.dueAt, NOW);
ok('wrong attempt appears in the due list', isReviewDue(scheduleWrong, NOW));

const review1 = scheduleAfterAttempt(scheduleWrong, true, NOW);
ok('first correct review advances 1 -> 3', review1.intervalDays, 3);
ok('first correct review is not due yet', isReviewDue(review1, NOW), false);
ok('first correct review dueAt is now + 3 days', review1.dueAt, NOW + 3 * DAY);
const review2 = scheduleAfterAttempt(review1, true, NOW);
ok('second correct review advances 3 -> 7', review2.intervalDays, 7);
const review3 = scheduleAfterAttempt(review2, true, NOW);
ok('third correct review stays at 7', review3.intervalDays, 7);
ok('correct reviews keep unknown fields', scheduleAfterAttempt({ ...scheduleWrong, note: 'kept' }, true, NOW).note, 'kept');

const reviewReset = scheduleAfterAttempt(review3, false, NOW + 5 * DAY);
ok('wrong review resets status to wrong', reviewReset.status, 'wrong');
ok('wrong review resets interval to 1', reviewReset.intervalDays, 1);
ok('wrong review is due immediately', reviewReset.dueAt, NOW + 5 * DAY);
ok('wrong review resets reps', reviewReset.reps, 0);

const firstRight = scheduleAfterAttempt(undefined, true, NOW);
ok('first correct attempt is status right', firstRight.status, 'right');
ok('first correct attempt stays out of the queue', 'dueAt' in firstRight, false);
ok('first correct attempt is not due', isReviewDue(firstRight, NOW + 365 * DAY), false);

const dueStore = {
  v: 1,
  banks: {
    'bio/bio-u1': {
      answers: {
        dueWrong: { status: 'wrong', lastAnswer: 'A', at: 1 },
        futureRight: { status: 'right', lastAnswer: 'B', at: 2, intervalDays: 3, dueAt: NOW + 1000, reps: 1 },
        dueRight: { status: 'right', lastAnswer: 'C', at: 3, intervalDays: 3, dueAt: NOW - 1, reps: 1 },
      },
    },
    'math/calc-u2': {
      answers: {
        otherWrong: { status: 'wrong', lastAnswer: 'D', at: 4 },
      },
    },
  },
};
const due = dueReviews(dueStore, NOW);
ok('due list includes due records from every bank', due.length, 3);
ok('due list excludes future dueAt', due.some((entry) => entry.id === 'futureRight'), false);
ok('due list includes dueAt <= now', due.some((entry) => entry.id === 'dueRight'));
ok('due list includes migrated legacy wrongs', due.some((entry) => entry.id === 'dueWrong' && entry.bankKey === 'bio/bio-u1'));
ok('due list carries the bank key', due.find((entry) => entry.id === 'otherWrong')?.bankKey, 'math/calc-u2');

const writeStorage = createStorage();
globalThis.localStorage = writeStorage;
writeStorage.setItem(PRACTICE_STORE_KEY, JSON.stringify(legacyStore));
writeStorage.resetWrites();
recordPracticeAttempt('math/calc-u2', 'practice:math/calc-u2/q9', true, 'new answer', NOW);
const persisted = JSON.parse(writeStorage.getItem(PRACTICE_STORE_KEY));
ok('write after migration keeps the other bank', Object.keys(persisted.banks).sort().join(','), 'bio/bio-u1,math/calc-u2');
ok('write after migration keeps that bank answers', Object.keys(persisted.banks['bio/bio-u1'].answers).length, 2);
ok('write after migration keeps legacy wrong schedule', persisted.banks['bio/bio-u1'].answers['practice:bio/bio-u1/q1'].dueAt, 0);
ok('write after migration keeps unknown fields', persisted.banks['bio/bio-u1'].keptBank, 'yes');
ok('write after migration records the new right answer', persisted.banks['math/calc-u2'].answers['practice:math/calc-u2/q9'].status, 'right');
ok('write after migration keeps right first attempts out of the queue', 'dueAt' in persisted.banks['math/calc-u2'].answers['practice:math/calc-u2/q9'], false);
recordPracticeAttempt('bio/bio-u1', 'practice:bio/bio-u1/new', false, 'wrong', NOW);
const persistedWrong = JSON.parse(writeStorage.getItem(PRACTICE_STORE_KEY));
ok('a newly recorded wrong is due now', persistedWrong.banks['bio/bio-u1'].answers['practice:bio/bio-u1/new'].dueAt, NOW);
ok('a newly recorded wrong has interval 1', persistedWrong.banks['bio/bio-u1'].answers['practice:bio/bio-u1/new'].intervalDays, 1);

console.log('\nPractice restore snapshots');
const legacySnapshot = practiceAttemptSnapshot({
  status: 'wrong',
  lastAnswer: '0.5',
  at: 5,
  note: 'keep',
});
ok('legacy attempt snapshot has an attempt', legacySnapshot.hasAttempt);
ok('legacy attempt snapshot keeps status', legacySnapshot.status, 'wrong');
ok('legacy attempt snapshot keeps lastAnswer', legacySnapshot.lastAnswer, '0.5');
ok('legacy attempt snapshot defaults the expander closed', legacySnapshot.solOpen, false);

const openSnapshot = practiceAttemptSnapshot({
  status: 'right',
  lastAnswer: '3x^2',
  at: 6,
  solOpen: true,
  custom: 1,
});
ok('open attempt snapshot round-trips lastAnswer', openSnapshot.lastAnswer, '3x^2');
ok('open attempt snapshot round-trips solOpen', openSnapshot.solOpen, true);
ok('empty snapshot has no attempt', practiceAttemptSnapshot(undefined).hasAttempt, false);
ok('non-object snapshot has no attempt', practiceAttemptSnapshot('nope').hasAttempt, false);

const restoreStorage = createStorage();
globalThis.localStorage = restoreStorage;
restoreStorage.setItem(PRACTICE_STORE_KEY, JSON.stringify({
  v: 1,
  keptTop: 'yes',
  banks: {
    'bio/bio-u1': {
      answers: {
        answerA: { status: 'wrong', lastAnswer: 'x', at: 1, note: 'keep' },
      },
      lastIndex: 2,
      keptBank: 'yes',
    },
    'math/calc-u2': {
      answers: {
        answerB: { status: 'right', lastAnswer: 'y', at: 2, solOpen: false },
      },
      lastIndex: 0,
    },
  },
}));
restoreStorage.resetWrites();
setPracticeSolutionOpen('bio/bio-u1', 'answerA', true);
const restoreSaved = JSON.parse(restoreStorage.getItem(PRACTICE_STORE_KEY));
ok('solution toggle keeps the other bank', Object.keys(restoreSaved.banks).sort().join(','), 'bio/bio-u1,math/calc-u2');
ok('solution toggle keeps unknown top-level fields', restoreSaved.keptTop, 'yes');
ok('solution toggle keeps unknown bank fields', restoreSaved.banks['bio/bio-u1'].keptBank, 'yes');
ok('solution toggle keeps unknown answer fields', restoreSaved.banks['bio/bio-u1'].answers.answerA.note, 'keep');
ok('solution toggle keeps lastAnswer', restoreSaved.banks['bio/bio-u1'].answers.answerA.lastAnswer, 'x');
ok('solution toggle keeps the legacy wrong schedule', restoreSaved.banks['bio/bio-u1'].answers.answerA.dueAt, 0);
ok('solution toggle persists solOpen true', restoreSaved.banks['bio/bio-u1'].answers.answerA.solOpen, true);
ok('solution toggle round-trips through the snapshot', practiceAttemptSnapshot(restoreSaved.banks['bio/bio-u1'].answers.answerA).solOpen, true);
ok('solution toggle leaves the other answer alone', restoreSaved.banks['math/calc-u2'].answers.answerB.solOpen, false);

setPracticeSolutionOpen('bio/bio-u1', 'missingAnswer', true);
const restoreAfterMissing = JSON.parse(restoreStorage.getItem(PRACTICE_STORE_KEY));
ok('solution toggle never invents an answer record', Object.keys(restoreAfterMissing.banks['bio/bio-u1'].answers).length, 1);

const practiceDir = new URL('../data/math/practice/', import.meta.url);
const banks = [];
for (const file of readdirSync(fileURLToPath(practiceDir)).filter((f) => f.endsWith('.js')).sort()) {
  const mod = await import(pathToFileURL(fileURLToPath(new URL(file, practiceDir))).href);
  banks.push({ file, items: (mod.problems || []).flatMap((p) => (p.kind === 'set' ? p.questions : [p])) });
}
const items = banks.flatMap((b) => b.items.map((item) => ({ ...item, file: b.file })));
const mathFunctionNames = new Set(Object.keys(math).filter((k) => typeof math[k] === 'function'));

console.log('\nSymbolic expected scan');
const symbolicExpected = new Set();
for (const item of items) {
  if (item.check === 'symbolic' && item.expected != null) symbolicExpected.add(String(item.expected));
}
const parseProblems = [];
for (const expr of symbolicExpected) {
  try {
    math.parse(expr).traverse((node, _path, parent) => {
      if (node.isFunctionNode && node.fn?.isSymbolNode && !mathFunctionNames.has(node.fn.name)) {
        parseProblems.push(`${expr}: unknown function ${node.fn.name}`);
      }
      if (node.isSymbolNode && !(parent?.isFunctionNode && parent.fn === node)) {
        if (mathFunctionNames.has(node.name)) parseProblems.push(`${expr}: function ${node.name} parsed as a variable`);
      }
    });
  } catch (err) {
    parseProblems.push(`${expr}: parse error ${err.message}`);
  }
}
ok(`${symbolicExpected.size} unique symbolic expected expressions parse cleanly`, parseProblems.length, 0);
if (parseProblems.length) console.log(parseProblems.join('\n'));

console.log('\nNumeric collateral scan');
const smallNumeric = items.filter(
  (item) => item.check === 'numeric' && Number.isFinite(Number(item.expected)) && Math.abs(Number(item.expected)) < 1,
);
const rejected = smallNumeric.filter((item) => {
  const expected = Number(item.expected);
  const rounded = Number(expected.toPrecision(3));
  return !checkNumeric(String(rounded), expected, item.tol ?? 0.02);
});
ok(`${smallNumeric.length} numeric items with |expected| < 1 still accept 3-s.f. values`, rejected.length, 0);
if (rejected.length) console.log(rejected.map((item) => `${item.file} ${item.id} expected=${item.expected}`).join('\n'));

console.log('\nPast-paper topic links');
const validTopics = new Set();
for (const [subject, chapters] of Object.entries(CHAPTERS)) {
  for (const chapter of chapters) for (const topic of chapter.topics || []) validTopics.add(`${subject}/${chapter.id}/${topic.code}`);
}
const paperHrefs = new Set();
const collectPaperLink = (href) => {
  if (href && href.startsWith('#/t/')) paperHrefs.add(href);
};
for (const entry of PAST_PAPERS.entries) {
  for (const step of entry.solutionOutline?.steps || []) {
    const stepLinks = (typeof step === 'object' && step.links) || entry.solutionOutline.topicLinks || [];
    for (const link of stepLinks) collectPaperLink(link.href);
  }
  for (const topicId of entry.topics || []) {
    const [chapter, code] = String(topicId).split(':');
    collectPaperLink(`#/t/${entry.course}/${chapter}/${code}`);
  }
}
const missingHrefs = [...paperHrefs].filter((href) => {
  const match = href.match(/^#\/t\/([^/]+)\/([^/]+)\/(.+)$/);
  return !match || !validTopics.has(`${match[1]}/${match[2]}/${match[3]}`);
});
ok(`${paperHrefs.size} unique rendered past-paper topic hrefs resolve`, missingHrefs.length, 0);
if (missingHrefs.length) console.log(missingHrefs.join('\n'));
const repaired = [
  ['math-2023-q4', 'calc-u5:5.3'],
  ['mathAb-2023-q4', 'calc-u5:5.3'],
  ['mech-2024-s1-q3', 'mech-u5:5.3'],
].map(([id, topicId]) => ({ entry: PAST_PAPERS.entries.find((e) => e.id === id), topicId }));
ok(
  'three repaired past-paper entries point at topic 5.3',
  repaired.every(({ entry, topicId }) => entry
    && entry.topics.includes(topicId)
    && entry.solutionOutline.topicLinks.some((link) => link.topicId === topicId && link.href.endsWith('/5.3'))),
);

Math.random = realRandom;
console.log(`\nAll ${passed} checks passed.`);
