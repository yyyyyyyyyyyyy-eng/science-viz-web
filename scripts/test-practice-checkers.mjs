#!/usr/bin/env node
/**
 * Regression tests for the practice checkers.
 *
 * Covers:
 *   UI-02  symbolic equivalence must not shadow math functions
 *   MATH-07 numeric tolerance must be relative for exact-value items
 *
 * Run: node scripts/test-practice-checkers.mjs
 */
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { readdirSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { PAST_PAPERS } from '../data/shared/pastpapers.js';
import { CHAPTERS } from '../modules/registry.js';

const require = createRequire(import.meta.url);
const math = require('../vendor/mathjs/math.min.js');

// js/practice.js reads window.math. Set it before importing the module.
globalThis.window = { math };
const { checkSymbolic, checkNumeric } = await import('../js/practice.js');

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
