import { el, clear, breadcrumb, SUBJECT_LABEL } from './ui-shared.js';
import { markVisited, markCompleted, clearCompleted, isCompleted, progressForIds } from './progress.js';
import { renderDiagram } from './diagrams.js';

/**
 * Per-bank answer marks and the last viewed card position. This is separate
 * from science-viz-completed so a wrong item can keep its own state until a
 * later correct attempt replaces it.
 */
export const PRACTICE_STORE_KEY = 'science-viz-practice-v1';
const PRACTICE_STYLE_ID = 'practice-extras-style';
const PRACTICE_STORE_VERSION = 2;
const DAY_MS = 86400000;
const REVIEW_INTERVAL_DAYS = [1, 3, 7];
const PRACTICE_SUBJECTS = [
  ['bio', '生物', 'Biology'],
  ['math', '微积分', 'Calculus'],
  ['mech', '力学', 'Mechanics'],
  ['em', '电磁', 'E&M'],
];

function ensurePracticeStyle() {
  if (document.getElementById(PRACTICE_STYLE_ID)) return;
  const link = document.createElement('link');
  link.id = PRACTICE_STYLE_ID;
  link.rel = 'stylesheet';
  link.href = 'css/practice-extras.css';
  document.head.appendChild(link);
}

function emptyPracticeBank() {
  return { answers: {}, lastIndex: 0 };
}

function isRecordObject(value) {
  return !!value && typeof value === 'object' && !Array.isArray(value);
}

/**
 * Answer records gain optional spaced-review fields:
 *   intervalDays: 1 | 3 | 7 (days until the next review)
 *   dueAt: epoch ms; <= now means the item belongs in 今日复习
 *   reps: successful review count
 * Legacy wrong records without a schedule become due immediately at interval 1.
 * Legacy right records stay out of the queue until a schedule exists.
 */
function migrateAnswerRecord(record) {
  if (!isRecordObject(record)) return record;
  const out = { ...record };
  if (out.status === 'wrong') {
    if (!Number.isFinite(out.intervalDays)) out.intervalDays = 1;
    if (!Number.isFinite(out.dueAt)) out.dueAt = 0;
    if (!Number.isFinite(out.reps)) out.reps = 0;
  }
  return out;
}

/** Pure, additive migration. Never throws and never drops banks or answers. */
export function migratePracticeStore(raw) {
  let source = raw;
  if (typeof source === 'string') {
    try {
      source = JSON.parse(source);
    } catch (_) {
      return { v: PRACTICE_STORE_VERSION, banks: {} };
    }
  }
  if (!isRecordObject(source)) return { v: PRACTICE_STORE_VERSION, banks: {} };
  const sourceBanks = isRecordObject(source.banks) ? source.banks : {};
  const banks = {};
  for (const [bankKey, bank] of Object.entries(sourceBanks)) {
    if (!isRecordObject(bank)) {
      banks[bankKey] = bank;
      continue;
    }
    const nextBank = { ...bank };
    const answers = {};
    if (isRecordObject(bank.answers)) {
      for (const [answerId, record] of Object.entries(bank.answers)) {
        answers[answerId] = migrateAnswerRecord(record);
      }
    }
    nextBank.answers = answers;
    if (!Number.isInteger(nextBank.lastIndex) || nextBank.lastIndex < 0) nextBank.lastIndex = 0;
    banks[bankKey] = nextBank;
  }
  return { ...source, v: PRACTICE_STORE_VERSION, banks };
}

/**
 * Update one answer record after an attempt.
 * - wrong: interval 1, due immediately (a wrong review also resets to this).
 * - correct review: 1 -> 3 -> 7 -> 7, due after intervalDays.
 * - correct first attempt: stays out of the review queue (no schedule fields).
 */
export function scheduleAfterAttempt(record, ok, now = Date.now()) {
  const base = isRecordObject(record) ? { ...record } : {};
  const at = Number.isFinite(now) ? now : Date.now();
  if (!ok) {
    return { ...base, status: 'wrong', intervalDays: 1, dueAt: at, reps: 0 };
  }
  const hasSchedule = Number.isFinite(base.dueAt) || Number.isFinite(base.intervalDays);
  if (!hasSchedule) {
    const out = { ...base, status: 'right' };
    delete out.intervalDays;
    delete out.dueAt;
    delete out.reps;
    return out;
  }
  const previous = Number(base.intervalDays);
  const intervalDays = !Number.isFinite(previous) || previous < 3
    ? REVIEW_INTERVAL_DAYS[1]
    : REVIEW_INTERVAL_DAYS[2];
  const reps = (Number.isFinite(base.reps) ? base.reps : 0) + 1;
  return {
    ...base,
    status: 'right',
    intervalDays,
    dueAt: at + intervalDays * DAY_MS,
    reps,
  };
}

/** True when an answer record carries a schedule that is due at `now`. */
export function isReviewDue(record, now = Date.now()) {
  if (!isRecordObject(record)) return false;
  const dueAt = Number(record.dueAt);
  return Number.isFinite(dueAt) && dueAt <= (Number.isFinite(now) ? now : Date.now());
}

/** All due records across every bank in the store. */
export function dueReviews(store, now = Date.now()) {
  const migrated = migratePracticeStore(store);
  const at = Number.isFinite(now) ? now : Date.now();
  const due = [];
  for (const [bankKey, bank] of Object.entries(migrated.banks)) {
    if (!isRecordObject(bank) || !isRecordObject(bank.answers)) continue;
    for (const [id, record] of Object.entries(bank.answers)) {
      if (isReviewDue(record, at)) due.push({ bankKey, id, record });
    }
  }
  due.sort((a, b) => (
    a.record.dueAt - b.record.dueAt
    || a.bankKey.localeCompare(b.bankKey)
    || a.id.localeCompare(b.id)
  ));
  return due;
}

export function readPracticeStore() {
  try {
    const raw = localStorage.getItem(PRACTICE_STORE_KEY);
    if (!raw) return migratePracticeStore(null);
    return migratePracticeStore(JSON.parse(raw));
  } catch (_) {
    return migratePracticeStore(null);
  }
}

function writePracticeStore(store) {
  try {
    localStorage.setItem(PRACTICE_STORE_KEY, JSON.stringify(migratePracticeStore(store)));
    return true;
  } catch (_) {
    // Storage may be unavailable; never let a failed write break practice.
    return false;
  }
}

/**
 * Draft writes must not replace good bytes with an empty store. A malformed or
 * non-object payload therefore aborts the write instead of falling back to the
 * empty migration result that readPracticeStore() returns for reading.
 */
function readPracticeStoreForWrite() {
  let raw;
  try {
    raw = localStorage.getItem(PRACTICE_STORE_KEY);
  } catch (_) {
    return null;
  }
  if (!raw) return migratePracticeStore(null);
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (_) {
    return null;
  }
  if (!isRecordObject(parsed)) return null;
  return migratePracticeStore(parsed);
}

/** Saved quiz time is whole, non-negative seconds; 0 means time is up. */
export function clampQuizRemainingSec(value) {
  const number = Number(value);
  if (!Number.isFinite(number) || number <= 0) return 0;
  return Math.ceil(number);
}

function normalizeQuizDraft(raw, bankKey) {
  if (!isRecordObject(raw) || raw.bankKey !== bankKey) return null;
  if (!Array.isArray(raw.entries) || !raw.entries.length) return null;
  const entries = [];
  for (const entry of raw.entries) {
    if (!isRecordObject(entry) || !isRecordObject(entry.grading) || !entry.progressId) return null;
    entries.push({
      progressId: String(entry.progressId),
      title: String(entry.title || '题目 · Question'),
      typeLabel: String(entry.typeLabel || ''),
      difficulty: String(entry.difficulty || '中'),
      source: isRecordObject(entry.source) ? entry.source : entry.grading,
      grading: entry.grading,
      state: {
        selected: Number.isInteger(entry.state?.selected) ? entry.state.selected : -1,
        text: String(entry.state?.text ?? ''),
      },
    });
  }
  const timerRaw = isRecordObject(raw.timer) ? raw.timer : {};
  const totalSec = clampQuizRemainingSec(timerRaw.totalSec);
  const on = timerRaw.on === true && totalSec > 0;
  return {
    v: 1,
    bankKey,
    subject: String(raw.subject || ''),
    unitId: String(raw.unitId || ''),
    savedAt: Number.isFinite(raw.savedAt) ? raw.savedAt : Date.now(),
    timer: {
      on,
      remainingSec: on ? clampQuizRemainingSec(timerRaw.remainingSec) : 0,
      totalSec: on ? totalSec : 0,
    },
    entries,
  };
}

/** Persist an unsubmitted quiz draft into this bank, keeping every other field. */
export function savePracticeQuizDraft(bankKey, draft) {
  if (!bankKey) return false;
  const normalized = normalizeQuizDraft({ ...draft, bankKey }, bankKey);
  if (!normalized) return false;
  const store = readPracticeStoreForWrite();
  if (!store) return false;
  if (!isRecordObject(store.banks)) store.banks = {};
  const current = store.banks[bankKey];
  if (current !== undefined && !isRecordObject(current)) return false;
  const bank = isRecordObject(current) ? current : { answers: {}, lastIndex: 0 };
  if (!isRecordObject(bank.answers)) bank.answers = {};
  bank.draft = normalized;
  store.banks[bankKey] = bank;
  return writePracticeStore(store);
}

/** The saved draft for exactly this bank, or null when there is none/valid one. */
export function loadPracticeQuizDraft(bankKey) {
  if (!bankKey) return null;
  const store = readPracticeStore();
  const bank = store.banks[bankKey];
  if (!isRecordObject(bank)) return null;
  return normalizeQuizDraft(bank.draft, bankKey);
}

/** Remove only the quiz draft; scored attempts and all other banks stay intact. */
export function clearPracticeQuizDraft(bankKey) {
  if (!bankKey) return false;
  const store = readPracticeStoreForWrite();
  if (!store) return false;
  const bank = store.banks[bankKey];
  if (!isRecordObject(bank) || !('draft' in bank)) return true;
  delete bank.draft;
  return writePracticeStore(store);
}

function getPracticeBankState(bankKey) {
  if (!bankKey) return emptyPracticeBank();
  const bank = readPracticeStore().banks[bankKey];
  if (!bank || typeof bank !== 'object') return emptyPracticeBank();
  return {
    answers: bank.answers && typeof bank.answers === 'object' ? bank.answers : {},
    lastIndex: Number.isInteger(bank.lastIndex) && bank.lastIndex > 0 ? bank.lastIndex : 0,
  };
}

function updatePracticeBankState(bankKey, mutate) {
  if (!bankKey) return;
  const store = readPracticeStore();
  if (!store.banks || typeof store.banks !== 'object') store.banks = {};
  const current = store.banks[bankKey];
  const bank = current && typeof current === 'object' ? current : {};
  if (!bank.answers || typeof bank.answers !== 'object') bank.answers = {};
  if (!Number.isInteger(bank.lastIndex) || bank.lastIndex < 0) bank.lastIndex = 0;
  mutate(bank);
  store.banks[bankKey] = bank;
  writePracticeStore(store);
}

export function recordPracticeAttempt(bankKey, id, ok, lastAnswer, now = Date.now()) {
  if (!bankKey || !id) return null;
  const at = Number.isFinite(now) ? now : Date.now();
  let nextRecord = null;
  updatePracticeBankState(bankKey, (bank) => {
    nextRecord = scheduleAfterAttempt(bank.answers[id], ok, at);
    nextRecord.lastAnswer = String(lastAnswer ?? '').slice(0, 240);
    nextRecord.at = at;
    bank.answers[id] = nextRecord;
  });
  return nextRecord;
}

/**
 * UI snapshot of a stored answer. Legacy records without solOpen stay valid and
 * default the solution expander to closed; unknown fields remain in the store.
 */
export function practiceAttemptSnapshot(record) {
  if (!isRecordObject(record)) {
    return { hasAttempt: false, status: null, lastAnswer: '', solOpen: false };
  }
  const status = record.status === 'right' || record.status === 'wrong' ? record.status : null;
  return {
    hasAttempt: !!status,
    status,
    lastAnswer: String(record.lastAnswer ?? ''),
    solOpen: record.solOpen === true,
  };
}

/** Persist only the expander state; never creates an answer record by itself. */
export function setPracticeSolutionOpen(bankKey, id, open) {
  if (!bankKey || !id) return null;
  let updated = null;
  updatePracticeBankState(bankKey, (bank) => {
    const current = bank.answers[id];
    if (!isRecordObject(current)) return;
    updated = { ...current, solOpen: !!open };
    bank.answers[id] = updated;
  });
  return updated;
}

function clearPracticeAttempt(bankKey, id) {
  if (!bankKey || !id) return;
  updatePracticeBankState(bankKey, (bank) => {
    for (const key of Object.keys(bank.answers)) {
      if (key === id || key.startsWith(`${id}:`)) delete bank.answers[key];
    }
  });
}

function practiceAnswerMap(bankKey) {
  return getPracticeBankState(bankKey).answers;
}

function readPracticeLastIndex(bankKey) {
  return getPracticeBankState(bankKey).lastIndex;
}

function savePracticeLastIndex(bankKey, index) {
  if (!bankKey || !Number.isInteger(index) || index < 0) return;
  if (readPracticeLastIndex(bankKey) === index) return;
  updatePracticeBankState(bankKey, (bank) => {
    bank.lastIndex = index;
  });
}

function hashText(input) {
  let hash = 2166136261;
  const text = String(input || '');
  for (let i = 0; i < text.length; i++) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(36);
}

/** Stable fallback for a problem without an id; bank + card index + stem hash. */
function fallbackQuestionId(prob, idx, bankKey) {
  const seed = prob.generator
    ? `gen:${prob.generator}`
    : `${prob.stemLatex || ''}|${prob.stem || ''}|${prob.title || ''}`;
  return `auto-${idx + 1}-${hashText(`${bankKey}|${seed}`)}`;
}

function tex(latex, display = false) {
  const span = el('span', { className: display ? 'tex' : 'tex-inline' });
  if (window.katex) {
    try {
      window.katex.render(latex, span, { throwOnError: false, displayMode: display });
      return span;
    } catch (_) {}
  }
  span.textContent = latex;
  return span;
}

function mathEngine() {
  return window.math || null;
}

const RESERVED_SYMBOLS = new Set(['e', 'pi', 'E', 'PI', 'i', 'tau', 'phi', 'Infinity', 'NaN', 'true', 'false', 'null']);

const FUNCTION_NAMES = new Set([
  'sin', 'cos', 'tan', 'cot', 'sec', 'csc',
  'asin', 'acos', 'atan', 'acot', 'asec', 'acsc',
  'arcsin', 'arccos', 'arctan', 'arccot', 'arcsec', 'arccsc',
  'sinh', 'cosh', 'tanh', 'coth', 'sech', 'csch',
  'asinh', 'acosh', 'atanh', 'log', 'ln', 'lg', 'log10', 'sqrt', 'cbrt',
  'exp', 'abs', 'sign', 'floor', 'ceil', 'round', 'trunc', 'factorial',
  'gamma', 'erf', 'min', 'max', 'mod', 'gcd', 'lcm', 'hypot', 'nthRoot', 'pow',
]);

function isFunctionName(name) {
  if (FUNCTION_NAMES.has(name)) return true;
  const m = mathEngine();
  return !!m && typeof m[name] === 'function';
}

function startsWithFunctionName(word) {
  for (let cut = word.length - 1; cut >= 2; cut--) {
    if (isFunctionName(word.slice(0, cut))) return true;
  }
  return false;
}

/**
 * Split glued identifiers students commonly type:
 *   sinx -> sin x, sinhx -> sinh x, lnx -> log x (tokenizer maps ln),
 *   Ce^(2x) -> C * e^(2x), Cx -> C * x.
 * Only known function names and the arbitrary constant C are split.
 */
function splitIdentifierToken(value) {
  if (isFunctionName(value) || RESERVED_SYMBOLS.has(value)) {
    return [{ type: 'id', value }];
  }
  for (let cut = value.length - 1; cut >= 2; cut--) {
    const rest = value.slice(cut);
    if (rest.length === 1 && /[A-Za-z]/.test(rest) && isFunctionName(value.slice(0, cut))) {
      const fn = value.slice(0, cut);
      return [{ type: 'id', value: fn === 'ln' ? 'log' : fn }, ...splitIdentifierToken(rest)];
    }
  }
  const rest = value.slice(1);
  const splitC = value.length > 1
    && value[0] === 'C'
    && (/^[A-Za-z]$/.test(rest) || rest === 'pi' || rest === 'PI' || startsWithFunctionName(rest));
  if (splitC) {
    return [{ type: 'id', value: 'C' }, ...splitIdentifierToken(rest)];
  }
  return [{ type: 'id', value }];
}

function splitIdentifierTokens(tokens) {
  return tokens.flatMap((tok) => (tok.type === 'id' ? splitIdentifierToken(tok.value) : [tok]));
}

function isOp(tok, value) {
  return !!tok && tok.type === 'op' && tok.value === value;
}

/**
 * Tokenize student math without trusting mathjs's implicit-call parsing.
 * `ln` is normalised to mathjs's natural-log `log`.
 */
function tokenizeExpr(src) {
  const tokens = [];
  let i = 0;
  while (i < src.length) {
    const c = src[i];
    if (/\s/.test(c)) { i += 1; continue; }
    const rest = src.slice(i);
    const number = rest.match(/^(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?/);
    if (number) {
      tokens.push({ type: 'num', value: number[0] });
      i += number[0].length;
      continue;
    }
    const ident = rest.match(/^[A-Za-z_][A-Za-z0-9_]*/);
    if (ident) {
      const value = ident[0] === 'ln' ? 'log' : ident[0];
      tokens.push({ type: 'id', value });
      i += ident[0].length;
      continue;
    }
    if ('+-*/^(),'.includes(c)) {
      tokens.push({ type: 'op', value: c });
      i += 1;
      continue;
    }
    tokens.push({ type: 'other', value: c });
    i += 1;
  }
  return tokens;
}

function matchParen(tokens, openIndex) {
  let depth = 0;
  for (let i = openIndex; i < tokens.length; i++) {
    if (isOp(tokens[i], '(')) depth += 1;
    else if (isOp(tokens[i], ')')) {
      depth -= 1;
      if (depth === 0) return i;
    }
  }
  return -1;
}

function parseAtomEnd(tokens, start) {
  let i = start;
  const tok = tokens[i];
  if (!tok) return start;
  if (tok.type === 'num') {
    i += 1;
  } else if (tok.type === 'id') {
    i += 1;
    if (isFunctionName(tok.value)) {
      if (isOp(tokens[i], '(')) {
        const close = matchParen(tokens, i);
        if (close > i) i = close + 1;
      } else {
        const argEnd = parseFunctionArgEnd(tokens, i);
        if (argEnd > i) i = argEnd;
      }
    }
  } else if (isOp(tok, '(')) {
    const close = matchParen(tokens, start);
    if (close < 0) return start;
    i = close + 1;
  } else if (isOp(tok, '+') || isOp(tok, '-')) {
    const after = parseAtomEnd(tokens, i + 1);
    if (after <= i + 1) return start;
    i = after;
  } else {
    return start;
  }
  while (isOp(tokens[i], '^')) {
    const after = parseAtomEnd(tokens, i + 1);
    if (after <= i + 1) break;
    i = after;
  }
  return i;
}

/** Parse the unparenthesised argument of `sin x`, `ln 2x`, `cot t`, ... */
function parseFunctionArgEnd(tokens, start) {
  let i = start;
  let consumed = false;
  while (i < tokens.length) {
    if (!consumed && (isOp(tokens[i], '+') || isOp(tokens[i], '-'))) {
      i += 1;
      if (!tokens[i] || !(tokens[i].type === 'num' || tokens[i].type === 'id' || isOp(tokens[i], '('))) return start;
    }
    if (!(tokens[i] && (tokens[i].type === 'num' || tokens[i].type === 'id' || isOp(tokens[i], '(')))) break;
    if (consumed && tokens[i].type === 'id' && isFunctionName(tokens[i].value)) break;
    const end = parseAtomEnd(tokens, i);
    if (end <= i) break;
    i = end;
    consumed = true;
  }
  return consumed ? i : start;
}

function applyFunctionApplication(tokens) {
  const out = [];
  for (let i = 0; i < tokens.length; i++) {
    const tok = tokens[i];
    if (tok.type === 'id' && isFunctionName(tok.value) && !isOp(tokens[i + 1], '(')) {
      const argEnd = parseFunctionArgEnd(tokens, i + 1);
      if (argEnd > i + 1) {
        const arg = applyFunctionApplication(tokens.slice(i + 1, argEnd));
        out.push({ type: 'id', value: tok.value }, { type: 'op', value: '(' }, ...arg, { type: 'op', value: ')' });
        i = argEnd - 1;
        continue;
      }
    }
    out.push(tok);
  }
  return out;
}

function insertImplicitMultiplication(tokens) {
  const out = [];
  for (const cur of tokens) {
    const prev = out[out.length - 1];
    let multiply = false;
    if (prev) {
      if (prev.type === 'num') {
        multiply = cur.type === 'id' || isOp(cur, '(');
      } else if (prev.type === 'id') {
        if (cur.type === 'num') multiply = true;
        else if (cur.type === 'id') multiply = !isFunctionName(prev.value);
        else if (isOp(cur, '(')) multiply = !isFunctionName(prev.value);
      } else if (isOp(prev, ')')) {
        multiply = cur.type === 'num' || cur.type === 'id' || isOp(cur, '(');
      }
    }
    if (multiply) out.push({ type: 'op', value: '*' });
    out.push(cur);
  }
  return out;
}

/** Make student-friendly symbolic input parse the way a student means it. */
export function normalizeExpression(raw) {
  const text = String(raw || '')
    .replace(/[−–—]/g, '-')
    .replace(/[×·⋅]/g, '*')
    .replace(/÷/g, '/')
    .replace(/（/g, '(')
    .replace(/）/g, ')');
  const tokens = insertImplicitMultiplication(applyFunctionApplication(splitIdentifierTokens(tokenizeExpr(text))));
  return tokens.map((t) => t.value).join('');
}

/** Collect only true variables: skip constants, function callees, and names that would shadow mathjs functions. */
function collectSymbolicVariables(m, expr, vars) {
  try {
    m.parse(expr).traverse((n, _path, parent) => {
      if (!n.isSymbolNode) return;
      const name = n.name;
      if (RESERVED_SYMBOLS.has(name)) return;
      // FunctionNode callee names are functions, not variables (sqrt, cos, cot, ...).
      if (parent && parent.isFunctionNode && parent.fn === n) return;
      // Never shadow a mathjs function with a random sample value.
      if (typeof m[name] === 'function') return;
      vars.add(name);
    });
  } catch (_) {}
}

/** Symbolic equivalence via simplify + random-point numeric sampling */
export function checkSymbolic(userRaw, expectedRaw, opts = {}) {
  const m = mathEngine();
  const user = normalizeExpression(userRaw);
  const expected = normalizeExpression(expectedRaw);
  if (!user || !expected) return false;
  if (user === expected) return true;
  if (!m) return checkNumeric(user, expected, opts.tol ?? 0.02);
  try {
    const su = m.simplify(user).toString();
    const se = m.simplify(expected).toString();
    if (su === se) return true;
    const diff = m.simplify(`(${user})-(${expected})`).toString();
    if (diff === '0' || diff === '0.0') return true;
    const vars = new Set();
    collectSymbolicVariables(m, user, vars);
    collectSymbolicVariables(m, expected, vars);
    const names = [...vars];
    if (names.length === 0) {
      const vu = m.evaluate(user);
      const ve = m.evaluate(expected);
      return Math.abs(Number(vu) - Number(ve)) <= (opts.tol ?? 1e-6) * Math.max(1, Math.abs(Number(ve)));
    }
    let ok = 0;
    const trials = opts.trials ?? 8;
    for (let t = 0; t < trials; t++) {
      const scope = {};
      for (const n of names) scope[n] = (Math.random() * 4 - 2) || 0.37;
      try {
        const vu = Number(m.evaluate(user, scope));
        const ve = Number(m.evaluate(expected, scope));
        if (!Number.isFinite(vu) || !Number.isFinite(ve)) continue;
        if (Math.abs(vu - ve) <= (opts.tol ?? 1e-4) * Math.max(1, Math.abs(ve))) ok++;
      } catch (_) {}
    }
    return ok >= Math.ceil(trials * 0.7);
  } catch (_) {
    return false;
  }
}

export function checkNumeric(user, expected, tol = 0.02) {
  const raw = String(user ?? '').trim();
  if (!raw) return false;
  const e = Number(expected);
  if (!Number.isFinite(e)) return false;
  let u;
  const fraction = raw.match(/^([+-]?)(\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)$/);
  if (fraction) {
    const den = Number(fraction[3]);
    if (!Number.isFinite(den) || den === 0) return false;
    u = (fraction[1] === '-' ? -1 : 1) * (Number(fraction[2]) / den);
  } else {
    if (!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(raw)) return false;
    u = Number(raw);
  }
  if (!Number.isFinite(u)) return false;
  // Relative tolerance; a tiny floor keeps expected ≈ 0 from becoming an absolute-tolerance pass.
  const scale = Math.max(Math.abs(e), 1e-12);
  return Math.abs(u - e) <= tol * scale;
}

function normalizeGraphPoints(g) {
  const pts = Array.isArray(g?.points) ? g.points : [];
  return pts
    .map((p) => (Array.isArray(p) ? [Number(p[0]), Number(p[1])] : [Number(p?.x), Number(p?.y)]))
    .filter(([x, y]) => Number.isFinite(x) && Number.isFinite(y))
    .sort((a, b) => a[0] - b[0]);
}

function interpolateGraphY(pts, x) {
  const exact = pts.find((p) => Math.abs(p[0] - x) < 1e-9);
  if (exact) return exact[1];
  let left = null;
  let right = null;
  for (const p of pts) {
    if (p[0] < x) left = p;
    else if (p[0] > x && !right) right = p;
  }
  if (left && right && right[0] !== left[0]) {
    const t = (x - left[0]) / (right[0] - left[0]);
    return left[1] + t * (right[1] - left[1]);
  }
  return left ? left[1] : right ? right[1] : NaN;
}

/** `holes: [[2, 4]]`, `holes: [{ x: 2, y: 4 }]` or `holes: [2]` (y inferred). */
function normalizeGraphHoles(g, pts) {
  const raw = Array.isArray(g?.holes) ? g.holes : Array.isArray(g?.openCircles) ? g.openCircles : [];
  const holes = [];
  for (const h of raw) {
    let x;
    let y;
    if (Array.isArray(h)) {
      x = Number(h[0]);
      y = h.length > 1 ? Number(h[1]) : NaN;
    } else if (typeof h === 'number') {
      x = Number(h);
      y = NaN;
    } else if (h && typeof h === 'object') {
      x = Number(h.x);
      y = Number(h.y);
    }
    if (!Number.isFinite(x)) continue;
    if (!Number.isFinite(y)) y = interpolateGraphY(pts, x);
    if (Number.isFinite(y)) holes.push({ x, y });
  }
  return holes;
}

function formatTick(v) {
  if (!Number.isFinite(v)) return '';
  const abs = Math.abs(v);
  if (abs !== 0 && (abs >= 1e5 || abs < 1e-3)) return v.toExponential(1);
  return String(Number(v.toPrecision(3)));
}

function niceStep(span, target = 4) {
  if (!Number.isFinite(span) || span <= 0) return 1;
  const raw = span / target;
  const mag = 10 ** Math.floor(Math.log10(raw));
  const norm = raw / mag;
  const step = norm <= 1 ? 1 : norm <= 2 ? 2 : norm <= 5 ? 5 : 10;
  return step * mag;
}

function graphAriaLabel(g) {
  const pts = normalizeGraphPoints(g);
  const holes = normalizeGraphHoles(g, pts);
  const xl = g?.xLabel || 'x';
  const yl = g?.yLabel || 'y';
  const xs = pts.map((p) => p[0]);
  const ys = pts.map((p) => p[1]);
  const range = pts.length
    ? `，x ${formatTick(Math.min(...xs))}–${formatTick(Math.max(...xs))}，y ${formatTick(Math.min(...ys))}–${formatTick(Math.max(...ys))}`
    : '';
  const holeZh = holes.length ? `，${holes.length} 个空心点表示无定义` : '';
  const holeEn = holes.length ? `, ${holes.length} open hole${holes.length > 1 ? 's' : ''}` : '';
  return `数据图：横轴 ${xl}，纵轴 ${yl}，${pts.length} 个数据点${range}${holeZh} · Graph: ${xl} vs ${yl}, ${pts.length} data points${holeEn}`;
}

function renderStimulus(stim) {
  if (!stim) return null;
  const box = el('div', { className: 'stim-box' });
  if (stim.title) box.appendChild(el('h3', { text: stim.title }));
  if (stim.text) box.appendChild(el('p', { text: stim.text }));
  if (stim.textLatex) box.appendChild(tex(stim.textLatex, true));
  if (stim.table) {
    const table = el('table', { className: 'stim-table' });
    const thead = el('thead');
    const hr = el('tr');
    stim.table.headers.forEach((h) => hr.appendChild(el('th', { text: h })));
    thead.appendChild(hr);
    table.appendChild(thead);
    const tb = el('tbody');
    stim.table.rows.forEach((row) => {
      const tr = el('tr');
      row.forEach((c) => tr.appendChild(el('td', { text: String(c) })));
      tb.appendChild(tr);
    });
    table.appendChild(tb);
    box.appendChild(table);
  }
  const svgHtml = stim.diagram ? renderDiagram(stim.diagram) : stim.svg;
  if (svgHtml) {
    const wrap = el('div', { className: 'stim-svg', html: svgHtml });
    box.appendChild(wrap);
  }
  if (stim.graph) {
    const canvas = el('canvas', {
      className: 'stim-graph',
      role: 'img',
      'aria-label': graphAriaLabel(stim.graph),
    });
    box.appendChild(canvas);
    requestAnimationFrame(() => drawGraph(canvas, stim.graph));
  }
  if (stim.source) {
    box.appendChild(
      el('p', {
        className: 'practice-source muted',
        text: `来源：${stim.source}${stim.license ? ' · ' + stim.license : ''}${stim.sourceNote ? ' — ' + stim.sourceNote : ''}`,
      }),
    );
  }
  return box;
}

function drawGraph(canvas, g) {
  canvas._graph = g;
  const dpr = Math.min(devicePixelRatio || 1, 2);
  const w = canvas.clientWidth || 320;
  const h = canvas.clientHeight || 160;
  const bw = Math.floor(w * dpr);
  const bh = Math.floor(h * dpr);
  if (canvas.width !== bw) canvas.width = bw;
  if (canvas.height !== bh) canvas.height = bh;
  canvas.style.width = '';
  canvas.style.height = '';
  const ctx = canvas.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const style = getComputedStyle(document.documentElement);
  const bg = style.getPropertyValue('--canvas-plot').trim() || '#f7f5f0';
  const border = style.getPropertyValue('--border').trim() || '#ccc';
  const borderSoft = style.getPropertyValue('--border-soft').trim() || border;
  const muted = style.getPropertyValue('--text-muted').trim() || '#888';
  const accent = style.getPropertyValue('--accent').trim() || '#c45c26';
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);

  const pts = normalizeGraphPoints(g);
  const holes = normalizeGraphHoles(g, pts);
  const left = 46;
  const right = w - 10;
  const top = 10;
  const bottom = h - 26;

  if (pts.length < 2) {
    if (g?.xLabel || g?.yLabel) {
      ctx.fillStyle = muted;
      ctx.font = '12px sans-serif';
      ctx.fillText([g?.xLabel, g?.yLabel].filter(Boolean).join(' / '), left, h / 2);
    }
    return;
  }

  const xs = pts.map((p) => p[0]);
  const ys = pts.map((p) => p[1]).concat(holes.map((p) => p.y));
  const xminRaw = Math.min(...xs);
  const xmaxRaw = Math.max(...xs);
  const yminRaw = Math.min(...ys);
  const ymaxRaw = Math.max(...ys);
  const xSpan = xmaxRaw - xminRaw || Math.max(1, Math.abs(xmaxRaw) * 0.1);
  const ySpan = ymaxRaw - yminRaw || Math.max(1, Math.abs(ymaxRaw) * 0.1);
  const xmin = xminRaw - xSpan * 0.04;
  const xmax = xmaxRaw + xSpan * 0.04;
  const ymin = yminRaw - ySpan * 0.14;
  const ymax = ymaxRaw + ySpan * 0.14;
  const mapX = (x) => left + ((x - xmin) / (xmax - xmin || 1)) * (right - left);
  const mapY = (y) => bottom - ((y - ymin) / (ymax - ymin || 1)) * (bottom - top);

  // Horizontal grid + y ticks.
  const yStep = niceStep(ymax - ymin, 4);
  ctx.font = '10px sans-serif';
  ctx.textAlign = 'right';
  ctx.textBaseline = 'middle';
  const yTickVals = [];
  for (let v = Math.ceil(ymin / yStep) * yStep; v <= ymax + yStep * 1e-6; v += yStep) {
    yTickVals.push(Math.round(v * 1e9) / 1e9);
  }
  yTickVals.forEach((v) => {
    const Y = mapY(v);
    ctx.strokeStyle = borderSoft;
    ctx.beginPath();
    ctx.moveTo(left, Y);
    ctx.lineTo(right, Y);
    ctx.stroke();
    ctx.strokeStyle = border;
    ctx.beginPath();
    ctx.moveTo(left - 3, Y);
    ctx.lineTo(left, Y);
    ctx.stroke();
    ctx.fillStyle = muted;
    ctx.fillText(formatTick(v), left - 6, Y);
  });

  // x ticks (marks only; the axis label sits below them).
  const xStep = niceStep(xmax - xmin, 4);
  ctx.strokeStyle = border;
  ctx.beginPath();
  for (let v = Math.ceil(xmin / xStep) * xStep; v <= xmax + xStep * 1e-6; v += xStep) {
    const X = mapX(v);
    ctx.moveTo(X, bottom);
    ctx.lineTo(X, bottom + 3);
  }
  ctx.stroke();

  // Axes.
  ctx.strokeStyle = border;
  ctx.beginPath();
  ctx.moveTo(left, top);
  ctx.lineTo(left, bottom);
  ctx.lineTo(right, bottom);
  ctx.stroke();

  // Data line, broken across open holes so nothing is drawn through an undefined x.
  const crossesHole = (a, b) => holes.some((hole) => {
    const lo = Math.min(a[0], b[0]);
    const hi = Math.max(a[0], b[0]);
    return hole.x >= lo - 1e-9 && hole.x <= hi + 1e-9;
  });
  ctx.strokeStyle = accent;
  ctx.lineWidth = 1.6;
  ctx.beginPath();
  pts.forEach((p, i) => {
    const X = mapX(p[0]);
    const Y = mapY(p[1]);
    if (i === 0) {
      ctx.moveTo(X, Y);
    } else if (crossesHole(pts[i - 1], p)) {
      ctx.moveTo(X, Y);
    } else {
      ctx.lineTo(X, Y);
    }
  });
  ctx.stroke();

  // Open circles for undefined points.
  holes.forEach((hole) => {
    const X = mapX(hole.x);
    const Y = mapY(hole.y);
    ctx.beginPath();
    ctx.arc(X, Y, 4, 0, Math.PI * 2);
    ctx.fillStyle = bg;
    ctx.fill();
    ctx.strokeStyle = accent;
    ctx.lineWidth = 2;
    ctx.stroke();
  });

  ctx.fillStyle = muted;
  ctx.font = '12px sans-serif';
  if (g.xLabel) {
    ctx.textAlign = 'center';
    ctx.textBaseline = 'alphabetic';
    ctx.fillText(g.xLabel, left + (right - left) / 2, h - 6);
  }
  if (g.yLabel) {
    ctx.save();
    ctx.translate(12, top + (bottom - top) / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(g.yLabel, 0, 0);
    ctx.restore();
  }
}

function typeLabel(prob) {
  if (prob.type === 'mcq') return 'MCQ';
  if (prob.generator) return 'GEN';
  return 'FRQ';
}

function cardState(card, done) {
  const state = card.querySelector('.practice-state');
  card.dataset.done = done ? 'true' : 'false';
  if (state) {
    state.textContent = done ? '完成' : '';
    state.classList.toggle('done', !!done);
  }
}

function practiceSubjectLabels(subject) {
  const entry = PRACTICE_SUBJECTS.find(([key]) => key === subject);
  if (entry) return { zh: entry[1], en: entry[2] };
  return { zh: SUBJECT_LABEL[subject] || subject, en: subject };
}

function parsePracticeBankKey(bankKey) {
  const text = String(bankKey || '');
  const slash = text.indexOf('/');
  if (slash < 0) return { subject: text, unitId: '' };
  return { subject: text.slice(0, slash), unitId: text.slice(slash + 1) };
}

function questionIdFromProgressId(id) {
  const parts = String(id || '').split('/');
  return parts[parts.length - 1] || String(id || '');
}

function renderPracticeProgress(section) {
  clear(section);
  const store = readPracticeStore();
  const stats = new Map(PRACTICE_SUBJECTS.map(([key]) => [key, { attempted: 0, correct: 0 }]));
  for (const [bankKey, bank] of Object.entries(store.banks)) {
    const { subject } = parsePracticeBankKey(bankKey);
    const stat = stats.get(subject);
    if (!stat || !isRecordObject(bank) || !isRecordObject(bank.answers)) continue;
    for (const record of Object.values(bank.answers)) {
      if (!isRecordObject(record)) continue;
      if (record.status !== 'right' && record.status !== 'wrong') continue;
      stat.attempted += 1;
      if (record.status === 'right') stat.correct += 1;
    }
  }

  section.appendChild(
    el('div', { className: 'practice-progress-head' }, [
      el('h2', { text: '进度总览 · Progress' }),
      el('p', { className: 'practice-progress-note', text: '按练习作答统计 · From practice attempts' }),
    ]),
  );

  const maxAttempted = Math.max(1, ...[...stats.values()].map((stat) => stat.attempted));
  PRACTICE_SUBJECTS.forEach(([key, zh, en]) => {
    const stat = stats.get(key);
    const accuracy = stat.attempted ? Math.round((stat.correct / stat.attempted) * 100) : 0;
    const attemptedWidth = Math.round((stat.attempted / maxAttempted) * 100);
    const row = el('div', { className: 'practice-progress-row', 'data-subject': key });
    row.appendChild(
      el('div', { className: 'practice-progress-course' }, [
        el('span', { className: 'practice-progress-zh', text: zh }),
        el('span', { className: 'practice-progress-course-sep', text: '·' }),
        el('span', { className: 'practice-progress-en', text: en }),
      ]),
    );
    const data = el('div', { className: 'practice-progress-data' });
    data.appendChild(
      el('p', { className: 'practice-progress-stat' }, [
        el('span', { className: 'practice-progress-stat-zh', text: `已答 ${stat.attempted} · 正确 ${stat.correct} · 正确率 ${accuracy}%` }),
        el('span', { className: 'practice-progress-stat-sep', text: '·' }),
        el('span', { className: 'practice-progress-stat-en', text: `${stat.attempted} answered · ${stat.correct} correct · ${accuracy}% accuracy` }),
      ]),
    );
    const addBar = (label, width, kind) => {
      const track = el('span', {
        className: `practice-bar practice-bar-${kind}`,
        'aria-hidden': 'true',
      }, [
        el('span', { className: 'practice-bar-fill', style: `width:${Math.max(0, Math.min(100, width))}%` }),
      ]);
      data.appendChild(
        el('div', { className: 'practice-bar-line' }, [
          el('span', { className: 'practice-bar-label', text: label }),
          track,
        ]),
      );
    };
    addBar('已答 · Attempted', attemptedWidth, 'attempted');
    addBar('正确率 · Accuracy', accuracy, 'accuracy');
    row.appendChild(data);
    section.appendChild(row);
  });
}

function isQuizGradable(prob) {
  if (!isRecordObject(prob) || (Array.isArray(prob.parts) && prob.parts.length)) return false;
  if (prob.type === 'mcq' && Array.isArray(prob.choices) && prob.choices.length) return true;
  if (prob.check === 'numeric') return Number.isFinite(Number(prob.expected)) && String(prob.expected).trim() !== '';
  if (prob.check === 'symbolic') {
    return (prob.expected != null && String(prob.expected).trim() !== '')
      || (prob.answerLatex != null && String(prob.answerLatex).trim() !== '')
      || (prob.answer != null && String(prob.answer).trim() !== '');
  }
  return false;
}

/**
 * Flatten a bank into auto-gradable quiz candidates while keeping the same
 * progress ids as normal cards. Generated items are frozen to one instance.
 */
function buildQuizPool(bank, bankKey, subject, unitId) {
  const pool = [];
  let flatIndex = 0;
  const pid = (id) => `practice:${subject}/${unitId}/${id}`;
  for (const item of bank.problems || []) {
    if (item.kind === 'set') {
      const setStimulus = item.stimulus || item._stimulus || null;
      for (const q of item.questions || []) {
        const qid = q.id || fallbackQuestionId(q, flatIndex, bankKey);
        flatIndex += 1;
        if (!isQuizGradable(q)) continue;
        pool.push({
          grading: q,
          source: { ...q, stimulus: q.stimulus || setStimulus },
          progressId: pid(qid),
          title: q.title || '题目 · Question',
          typeLabel: typeLabel(q),
          difficulty: q.difficulty || '中',
        });
      }
    } else {
      const qid = item.id || fallbackQuestionId(item, flatIndex, bankKey);
      flatIndex += 1;
      let instance = item;
      if (typeof item.generate === 'function') {
        instance = {
          ...item.generate(),
          id: item.id,
          title: item.title,
          difficulty: item.difficulty || undefined,
        };
      }
      if (!isQuizGradable(instance)) continue;
      pool.push({
        grading: instance,
        source: instance,
        progressId: pid(qid),
        title: item.title || instance.title || '题目 · Question',
        typeLabel: item.generator ? 'GEN' : typeLabel(instance),
        difficulty: instance.difficulty || item.difficulty || '中',
      });
    }
  }
  return pool;
}

function sampleQuizPool(pool, count) {
  const shuffled = pool.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, Math.max(0, Math.min(count, shuffled.length)));
}

function formatQuizCountdown(ms) {
  const total = Math.max(0, Math.ceil(ms / 1000));
  const minutes = Math.floor(total / 60);
  const seconds = total % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function quizAnswerText(entry) {
  const prob = entry.grading;
  if (prob.type === 'mcq' && prob.choices) {
    if (entry.state.selected < 0) return '';
    const choice = prob.choices[entry.state.selected] || {};
    return `${String.fromCharCode(65 + entry.state.selected)}. ${choice.text || ''}`;
  }
  return String(entry.state.text || '').trim();
}

function quizEntryCorrect(entry) {
  const prob = entry.grading;
  if (prob.type === 'mcq' && prob.choices) {
    if (entry.state.selected < 0) return false;
    return !!(prob.choices[entry.state.selected]?.correct || entry.state.selected === prob.answerIndex);
  }
  const raw = String(entry.state.text || '').trim();
  if (!raw) return false;
  if (prob.check === 'numeric') return checkNumeric(raw, prob.expected, prob.tol ?? 0.02);
  if (prob.check === 'symbolic') {
    return checkSymbolic(raw, prob.expected || prob.answerLatex || prob.answer, { tol: prob.tol });
  }
  return false;
}

function createPracticeQuiz({ panel, page, bankKey, subject, unitId, bank, onGraded, onDraftChange }) {
  let active = false;
  let quiz = null;

  function stopTimer() {
    if (quiz && quiz.timerId) {
      clearInterval(quiz.timerId);
      quiz.timerId = 0;
    }
  }

  function isActive() {
    return active;
  }

  function persistDraft() {
    if (!quiz || quiz.submitted) return false;
    const timer = quiz.minutes
      ? {
        on: true,
        remainingSec: clampQuizRemainingSec((quiz.endsAt - Date.now()) / 1000),
        totalSec: quiz.totalSec,
      }
      : { on: false, remainingSec: 0, totalSec: 0 };
    return savePracticeQuizDraft(bankKey, {
      subject,
      unitId,
      savedAt: Date.now(),
      timer,
      entries: quiz.entries.map((entry) => ({
        progressId: entry.progressId,
        title: entry.title,
        typeLabel: entry.typeLabel,
        difficulty: entry.difficulty,
        source: entry.source,
        grading: entry.grading,
        state: {
          selected: Number.isInteger(entry.state.selected) ? entry.state.selected : -1,
          text: String(entry.state.text || ''),
        },
      })),
    });
  }

  const onPageHide = () => {
    persistDraft();
  };
  window.addEventListener('pagehide', onPageHide);
  window.addEventListener('beforeunload', onPageHide);

  function leave() {
    if (quiz && !quiz.submitted) persistDraft();
    stopTimer();
    quiz = null;
    active = false;
    clear(panel);
    panel.hidden = true;
    page.classList.remove('is-quizzing');
    onDraftChange?.();
  }

  function showSetup() {
    stopTimer();
    quiz = null;
    active = true;
    page.classList.add('is-quizzing');
    panel.hidden = false;
    clear(panel);
    const pool = buildQuizPool(bank, bankKey, subject, unitId);

    const head = el('div', { className: 'practice-quiz-head' }, [
      el('div', {}, [
        el('h2', { text: '单元小测 · Unit quiz' }),
        el('p', { className: 'practice-quiz-lead', text: '从本单元题库随机抽题，提交后统一显示分数与解析。 · Random questions from this unit; answers and score appear only after you submit.' }),
      ]),
    ]);
    panel.appendChild(head);

    if (!pool.length) {
      panel.appendChild(el('p', {
        className: 'practice-quiz-empty',
        text: '本单元暂无可自动判分的题目 · No auto-graded questions in this unit',
      }));
      const actions = el('div', { className: 'practice-quiz-actions' });
      const back = el('button', { type: 'button', className: 'btn hit-target', text: '返回练习列表 · Back to practice' });
      back.addEventListener('click', leave);
      actions.appendChild(back);
      panel.appendChild(actions);
      return;
    }

    const counts = [...new Set([Math.min(5, pool.length), Math.min(10, pool.length), pool.length])]
      .filter((n) => n > 0)
      .sort((a, b) => a - b);
    let selectedCount = counts[0];
    let selectedTimer = 0;

    const setup = el('div', { className: 'practice-quiz-setup' });
    const countGroup = el('fieldset', { className: 'practice-quiz-group' });
    countGroup.appendChild(el('legend', { text: '题数 · Questions' }));
    const countOptions = el('div', { className: 'practice-quiz-options', role: 'group', 'aria-label': '题数 · Questions' });
    const countButtons = new Map();
    counts.forEach((count) => {
      const label = count === pool.length ? `全部 ${count} 题 · All ${count}` : `${count} 题 · ${count} questions`;
      const btn = el('button', {
        type: 'button',
        className: 'practice-quiz-option hit-target',
        text: label,
        'aria-pressed': count === selectedCount ? 'true' : 'false',
      });
      btn.addEventListener('click', () => {
        selectedCount = count;
        countButtons.forEach((b, value) => b.setAttribute('aria-pressed', value === count ? 'true' : 'false'));
      });
      countButtons.set(count, btn);
      countOptions.appendChild(btn);
    });
    countGroup.appendChild(countOptions);
    setup.appendChild(countGroup);

    const timerGroup = el('fieldset', { className: 'practice-quiz-group' });
    timerGroup.appendChild(el('legend', { text: '计时 · Timer' }));
    const timerOptions = el('div', { className: 'practice-quiz-options', role: 'group', 'aria-label': '计时 · Timer' });
    const timerButtons = new Map();
    [[0, '不计时 · Off'], [10, '10 分钟 · 10 min'], [20, '20 分钟 · 20 min']].forEach(([minutes, label]) => {
      const btn = el('button', {
        type: 'button',
        className: 'practice-quiz-option hit-target',
        text: label,
        'aria-pressed': minutes === selectedTimer ? 'true' : 'false',
      });
      btn.addEventListener('click', () => {
        selectedTimer = minutes;
        timerButtons.forEach((b, value) => b.setAttribute('aria-pressed', value === minutes ? 'true' : 'false'));
      });
      timerButtons.set(minutes, btn);
      timerOptions.appendChild(btn);
    });
    timerGroup.appendChild(timerOptions);
    setup.appendChild(timerGroup);
    panel.appendChild(setup);

    const actions = el('div', { className: 'practice-quiz-actions' });
    const start = el('button', { type: 'button', className: 'btn primary hit-target', text: '开始小测 · Start quiz' });
    start.addEventListener('click', () => startQuiz(selectedCount, selectedTimer));
    const cancel = el('button', { type: 'button', className: 'btn hit-target', text: '返回练习列表 · Back to practice' });
    cancel.addEventListener('click', leave);
    actions.append(start, cancel);
    panel.appendChild(actions);
  }

  function startQuiz(count, minutes) {
    const pool = buildQuizPool(bank, bankKey, subject, unitId);
    if (!pool.length) {
      showSetup();
      return;
    }
    const entries = sampleQuizPool(pool, count).map((entry) => ({
      ...entry,
      state: { selected: -1, text: '' },
      ok: null,
      itemEl: null,
      resultEl: null,
    }));
    if (!entries.length) return;
    presentQuiz(entries, { minutes, remainingSec: minutes * 60 });
  }

  function presentQuiz(entries, { minutes, remainingSec }) {
    stopTimer();
    const totalSec = minutes ? minutes * 60 : 0;
    const leftSec = minutes ? clampQuizRemainingSec(remainingSec ?? totalSec) : 0;
    quiz = {
      entries,
      minutes,
      totalSec,
      endsAt: minutes ? Date.now() + leftSec * 1000 : 0,
      timerId: 0,
      submitted: false,
      timerEl: null,
    };

    active = true;
    page.classList.add('is-quizzing');
    panel.hidden = false;
    clear(panel);

    const leaveBtn = el('button', { type: 'button', className: 'btn hit-target', text: '退出小测 · Leave quiz' });
    leaveBtn.addEventListener('click', leave);
    const timerEl = el('span', {
      className: 'practice-quiz-timer',
      text: minutes ? `剩余 ${formatQuizCountdown(leftSec * 1000)} · Time left` : '不计时 · Untimed',
    });
    quiz.timerEl = timerEl;
    panel.appendChild(
      el('div', { className: 'practice-quiz-head' }, [
        el('div', {}, [
          el('h2', { text: '单元小测 · Unit quiz' }),
          el('p', {
            className: 'practice-quiz-lead',
            text: `共 ${entries.length} 题 · ${entries.length} questions · ${minutes ? `${minutes} 分钟 · ${minutes} min` : '不计时 · Untimed'}`,
          }),
        ]),
        el('div', { className: 'practice-quiz-head-actions' }, [timerEl, leaveBtn]),
      ]),
    );

    const summary = el('div', { className: 'practice-quiz-summary', hidden: true });
    panel.appendChild(summary);

    const list = el('div', { className: 'practice-quiz-list' });
    entries.forEach((entry, index) => {
      list.appendChild(renderQuizItem(entry, index));
    });
    panel.appendChild(list);

    const actions = el('div', { className: 'practice-quiz-actions' });
    const submitBtn = el('button', { type: 'button', className: 'btn primary hit-target', text: '提交小测 · Submit quiz' });
    submitBtn.addEventListener('click', () => submitQuiz(false));
    actions.appendChild(submitBtn);
    panel.appendChild(actions);
    quiz.actionsEl = actions;
    quiz.summaryEl = summary;

    if (minutes) {
      if (leftSec <= 0) {
        // A saved draft at 0 seconds resumes as an expired attempt: show the
        // restored answers, then auto-submit them instead of secretly resetting.
        timerEl.textContent = '00:00';
        timerEl.classList.add('is-urgent');
        queueMicrotask(() => submitQuiz(true));
      } else {
        let lastSecond = leftSec;
        quiz.timerId = setInterval(() => {
          if (!quiz || quiz.submitted) return;
          const left = quiz.endsAt - Date.now();
          if (left <= 0) {
            timerEl.textContent = '00:00';
            timerEl.classList.add('is-urgent');
            submitQuiz(true);
            return;
          }
          timerEl.textContent = `剩余 ${formatQuizCountdown(left)} · Time left`;
          timerEl.classList.toggle('is-urgent', left <= 60000);
          const second = clampQuizRemainingSec(left / 1000);
          if (second !== lastSecond) {
            lastSecond = second;
            persistDraft();
          }
        }, 250);
      }
    }
    persistDraft();
  }

  function resume(draft) {
    const normalized = normalizeQuizDraft(draft, bankKey);
    if (!normalized) return false;
    const minutes = normalized.timer.on
      ? Math.max(1, Math.round(normalized.timer.totalSec / 60))
      : 0;
    const entries = normalized.entries.map((entry) => ({
      ...entry,
      state: { ...entry.state },
      ok: null,
      itemEl: null,
      resultEl: null,
    }));
    presentQuiz(entries, { minutes, remainingSec: normalized.timer.remainingSec });
    return true;
  }

  function renderQuizItem(entry, index) {
    const prob = entry.source;
    const item = el('article', {
      className: 'practice-quiz-item',
      'data-qid': entry.progressId,
      'data-index': String(index),
    });
    const resultEl = el('span', { className: 'practice-quiz-result' });
    item.appendChild(
      el('header', { className: 'practice-quiz-item-head' }, [
        el('span', { className: 'practice-quiz-number', text: String(index + 1).padStart(2, '0') }),
        el('div', { className: 'practice-quiz-item-title' }, [
          el('h3', { text: entry.title }),
          el('div', { className: 'practice-tags' }, [
            el('span', { className: 'tag', text: entry.typeLabel }),
            el('span', { className: 'tag', text: entry.difficulty }),
          ]),
        ]),
        resultEl,
      ]),
    );
    const body = el('div', { className: 'practice-quiz-item-body' });
    if (prob.stimulus) body.appendChild(renderStimulus(prob.stimulus));
    if (prob.stem || prob.stemLatex) {
      const stem = el('div', { className: 'practice-stem' });
      if (prob.stemLatex) stem.appendChild(tex(prob.stemLatex, true));
      if (prob.stem) stem.appendChild(el('p', { text: prob.stem }));
      body.appendChild(stem);
    }
    body.appendChild(renderQuizAnswer(entry));
    item.appendChild(body);
    entry.itemEl = item;
    entry.resultEl = resultEl;
    return item;
  }

  function renderQuizAnswer(entry) {
    const box = el('div', { className: 'practice-answer-ui' });
    const prob = entry.grading;
    if (prob.type === 'mcq' && prob.choices) {
      const group = el('div', { className: 'mcq-group', role: 'radiogroup', 'aria-label': '选项 · Choices' });
      const buttons = [];
      prob.choices.forEach((choice, index) => {
        const isSelected = entry.state.selected === index;
        const btn = el('button', {
          type: 'button',
          className: `mcq-choice hit-target${isSelected ? ' is-selected' : ''}`,
          role: 'radio',
          'aria-checked': isSelected ? 'true' : 'false',
          tabIndex: isSelected || (entry.state.selected < 0 && index === 0) ? 0 : -1,
        }, [
          el('span', { className: 'mcq-letter', text: String.fromCharCode(65 + index) }),
          el('span', { className: 'mcq-text', text: choice.text }),
        ]);
        const select = () => {
          entry.state.selected = index;
          buttons.forEach((b, i) => {
            b.classList.toggle('is-selected', i === index);
            b.setAttribute('aria-checked', i === index ? 'true' : 'false');
            b.tabIndex = i === index ? 0 : -1;
          });
          persistDraft();
        };
        btn.addEventListener('click', select);
        btn.addEventListener('keydown', (e) => {
          if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
          e.preventDefault();
          const next = e.key === 'ArrowDown'
            ? (index + 1) % buttons.length
            : (index - 1 + buttons.length) % buttons.length;
          entry.state.selected = next;
          buttons.forEach((b, i) => {
            b.classList.toggle('is-selected', i === next);
            b.setAttribute('aria-checked', i === next ? 'true' : 'false');
            b.tabIndex = i === next ? 0 : -1;
          });
          buttons[next].focus();
          persistDraft();
        });
        buttons.push(btn);
        group.appendChild(btn);
      });
      box.appendChild(group);
      return box;
    }

    const symbolic = prob.check === 'symbolic';
    let preview = null;
    const input = el('input', {
      className: 'hit-target value-edit',
      type: 'text',
      placeholder: symbolic ? '符号答案，如 2*x · Symbolic answer, e.g. 2*x' : '数值答案 · Numeric answer',
      'aria-label': symbolic ? '符号答案 · Symbolic answer' : '数值答案 · Numeric answer',
      autocomplete: 'off',
    });
    input.value = entry.state.text || '';
    input.addEventListener('input', () => {
      entry.state.text = input.value;
      if (symbolic) renderPracticePreview(preview, input.value);
      persistDraft();
    });
    const form = el('div', { className: 'answer-form practice-quiz-answer-form' }, [input]);
    box.appendChild(form);
    if (symbolic) {
      preview = createPracticePreview();
      box.appendChild(preview);
      if (entry.state.text) renderPracticePreview(preview, entry.state.text);
    }
    return box;
  }

  function submitQuiz(auto) {
    if (!quiz || quiz.submitted) return;
    quiz.submitted = true;
    stopTimer();
    if (quiz.timerEl) {
      quiz.timerEl.classList.remove('is-urgent');
      quiz.timerEl.textContent = auto ? '时间到 · Time is up' : '已提交 · Submitted';
    }
    let correct = 0;
    for (const entry of quiz.entries) {
      const ok = quizEntryCorrect(entry);
      entry.ok = ok;
      if (ok) correct += 1;
      const answerText = quizAnswerText(entry);
      recordPracticeAttempt(bankKey, entry.progressId, ok, answerText);
      if (ok) markCompleted(entry.progressId);
      lockQuizEntry(entry);
      const resultText = !answerText && !ok
        ? '未作答 · Unanswered'
        : ok ? '正确 · Correct' : '答错 · Incorrect';
      entry.resultEl.textContent = resultText;
      entry.resultEl.className = `practice-quiz-result ${ok ? 'ok' : 'bad'}`;
      const solution = el('div', { className: 'practice-quiz-solution' });
      if (solutionHasContent(entry.grading)) {
        solution.appendChild(buildSolutionBody(entry.grading));
      } else {
        solution.appendChild(el('p', {
          className: 'practice-sol-empty',
          text: '暂无解析 · No solution provided',
        }));
      }
      entry.itemEl.appendChild(solution);
    }
    clearPracticeQuizDraft(bankKey);
    onDraftChange?.();

    const total = quiz.entries.length;
    const percent = total ? Math.round((correct / total) * 100) : 0;
    const summary = quiz.summaryEl;
    clear(summary);
    summary.hidden = false;
    summary.appendChild(el('p', { className: 'practice-quiz-score-label', text: '得分 · Score' }));
    summary.appendChild(el('p', {
      className: 'practice-quiz-score',
      role: 'status',
      'aria-live': 'polite',
      text: `${correct} / ${total} · ${percent}%`,
    }));
    if (auto) {
      summary.appendChild(el('p', {
        className: 'practice-quiz-note',
        text: '时间到，已自动提交；未作答按错误计入。 · Time is up; unanswered items count as incorrect.',
      }));
    }

    const actions = quiz.actionsEl;
    clear(actions);
    const back = el('button', { type: 'button', className: 'btn hit-target', text: '返回练习列表 · Back to practice' });
    back.addEventListener('click', leave);
    const retake = el('button', { type: 'button', className: 'btn hit-target', text: '再测一次 · Retake quiz' });
    retake.addEventListener('click', showSetup);
    actions.append(back, retake);

    onGraded?.(quiz.entries);
  }

  function lockQuizEntry(entry) {
    entry.itemEl.querySelectorAll('input, button').forEach((node) => {
      node.disabled = true;
    });
  }

  return {
    open: showSetup,
    resume,
    leave,
    isActive,
    destroy() {
      if (quiz && !quiz.submitted) persistDraft();
      stopTimer();
      quiz = null;
      active = false;
      window.removeEventListener('pagehide', onPageHide);
      window.removeEventListener('beforeunload', onPageHide);
    },
  };
}

export function renderPracticeUnit(main, { subject, unit, bank }) {
  clear(main);
  ensurePracticeStyle();
  const bankKey = `${subject}/${unit.id}`;
  const flatIds = [];
  const setsCount = bank.problems.filter((p) => p.kind === 'set').length;
  let flatIndex = 0;
  for (const item of bank.problems) {
    if (item.kind === 'set') {
      item.questions.forEach((q) => {
        flatIds.push(`practice:${subject}/${unit.id}/${q.id || fallbackQuestionId(q, flatIndex, bankKey)}`);
        flatIndex += 1;
      });
    } else {
      flatIds.push(`practice:${subject}/${unit.id}/${item.id || fallbackQuestionId(item, flatIndex, bankKey)}`);
      flatIndex += 1;
    }
  }
  const prog = progressForIds(flatIds);

  const page = el('div', { className: 'practice-page' });
  main.appendChild(page);
  page.appendChild(
    breadcrumb([
      { href: '#/', label: '首页' },
      { href: `#/${subject}`, label: SUBJECT_LABEL[subject] },
      { href: `#/${subject}/${unit.id}`, label: unit.titleZh || unit.name },
      { label: '练习', current: true },
    ]),
  );

  const heroProgress = el('span', { className: 'practice-hero-progress', text: `完成 ${prog.label}` });
  page.appendChild(
    el('header', { className: `page-hero compact practice-hero ${subject}` }, [
      el('p', { className: 'page-kicker', text: `Unit ${unit.unitCode || ''} · 练习` }),
      el('h1', { text: unit.titleZh || unit.name }),
      el('p', { className: 'lead' }, [`${flatIds.length} 题 · ${setsCount} 组共享刺激 · `, heroProgress]),
      el('div', { className: 'hero-actions' }, [
        el('a', { className: 'btn hit-target', href: `#/${subject}/${unit.id}`, text: '返回单元' }),
        el('a', { className: 'btn hit-target', href: `#/${subject}/map`, text: '知识图谱' }),
      ]),
    ]),
  );

  const reviewCount = el('span', { className: 'practice-tool-count', hidden: true });
  const reviewBtn = el('button', {
    type: 'button',
    className: 'practice-tool-btn hit-target',
    'aria-expanded': 'false',
    'aria-controls': 'practice-review-panel',
  }, [
    el('span', { text: '今日复习 · Review today' }),
    reviewCount,
  ]);
  const quizBtn = el('button', {
    type: 'button',
    className: 'practice-tool-btn hit-target',
    'aria-controls': 'practice-quiz-panel',
    text: '单元小测 · Unit quiz',
  });
  page.appendChild(
    el('div', {
      className: 'practice-quickbar',
      role: 'group',
      'aria-label': '练习工具 · Practice tools',
    }, [reviewBtn, quizBtn]),
  );

  const resumePanel = el('section', {
    className: 'practice-quiz-resume',
    hidden: true,
    'aria-label': '未提交的小测 · Unsubmitted quiz',
  });
  page.appendChild(resumePanel);

  const reviewPanel = el('section', {
    id: 'practice-review-panel',
    className: 'practice-review',
    hidden: true,
    tabindex: '-1',
    'aria-label': '今日复习 · Review today',
  });
  page.appendChild(reviewPanel);

  const progressSection = el('section', {
    className: 'practice-progress',
    'aria-label': '进度总览 · Progress',
  });
  page.appendChild(progressSection);

  const quizPanel = el('section', {
    id: 'practice-quiz-panel',
    className: 'practice-quiz',
    hidden: true,
    'aria-label': '单元小测 · Unit quiz',
  });
  page.appendChild(quizPanel);

  let quizCtl = null;
  let reviewOpen = false;

  const layout = el('div', { className: 'practice-layout' });
  const rail = el('aside', { className: 'practice-rail', 'aria-label': '题目导航' });
  const mainCol = el('div', { className: 'practice-main' });
  layout.append(rail, mainCol);
  page.appendChild(layout);

  const filterWrap = el('div', { className: 'practice-toolbar' });
  const filters = el('div', { className: 'practice-filters', role: 'group', 'aria-label': '筛选题目' });
  const countEl = el('span', { className: 'filter-count', 'aria-live': 'polite' });
  filterWrap.append(filters, countEl);
  mainCol.appendChild(filterWrap);

  const list = el('div', { className: 'practice-list' });
  mainCol.appendChild(list);
  const empty = el('div', { className: 'empty-state', hidden: true, text: '该筛选下没有题目 · No questions match this filter' });
  mainCol.appendChild(empty);

  const savedLastIndex = readPracticeLastIndex(bankKey);
  const ctx = {
    bankKey,
    cards: [],
    sets: [],
    onDone: null,
  };
  let idx = 0;
  bank.problems.forEach((item) => {
    if (item.kind === 'set') {
      list.appendChild(renderSharedSet(item, idx, subject, unit, (id) => `practice:${subject}/${unit.id}/${id}`, ctx));
      idx += item.questions.length;
    } else {
      list.appendChild(renderProblemCard(item, idx, subject, unit, (id) => `practice:${subject}/${unit.id}/${id}`, ctx));
      idx += 1;
    }
  });

  quizCtl = createPracticeQuiz({
    panel: quizPanel,
    page,
    bankKey,
    subject,
    unitId: unit.id,
    bank,
    onGraded(entries) {
      const correctIds = new Set(entries.filter((entry) => entry.ok).map((entry) => entry.progressId));
      ctx.cards.forEach((item) => {
        if (correctIds.has(item.progressId)) cardState(item.card, true);
      });
      updateProgress();
      refreshReviewButton();
      renderPracticeProgress(progressSection);
    },
    onDraftChange: refreshResumeBanner,
  });

  function refreshResumeBanner() {
    const draft = loadPracticeQuizDraft(bankKey);
    clear(resumePanel);
    resumePanel.hidden = !draft;
    if (!draft) return;
    const count = draft.entries.length;
    const timeText = draft.timer.on
      ? draft.timer.remainingSec <= 0
        ? '已超时 · Time is up'
        : `剩余 ${formatQuizCountdown(draft.timer.remainingSec * 1000)} · ${formatQuizCountdown(draft.timer.remainingSec * 1000)} left`
      : '不计时 · Untimed';
    const copy = el('div', { className: 'practice-quiz-resume-copy' }, [
      el('p', { className: 'practice-quiz-resume-title', text: '未提交的小测 · Unsubmitted quiz' }),
      el('p', {
        className: 'practice-quiz-resume-meta',
        text: `${count} 题 · ${count} questions · ${timeText}`,
      }),
    ]);
    const actions = el('div', { className: 'practice-quiz-resume-actions' });
    const resumeBtn = el('button', {
      type: 'button',
      className: 'btn primary hit-target',
      text: '继续小测 · Resume quiz',
    });
    resumeBtn.addEventListener('click', () => {
      const latest = loadPracticeQuizDraft(bankKey);
      if (!latest) {
        refreshResumeBanner();
        return;
      }
      if (reviewOpen) setReviewOpen(false);
      quizCtl?.resume(latest);
    });
    const discardBtn = el('button', {
      type: 'button',
      className: 'btn hit-target',
      text: '放弃草稿 · Discard draft',
    });
    discardBtn.addEventListener('click', () => {
      const confirmed = window.confirm('放弃未提交的小测草稿？ · Discard the saved quiz draft?');
      if (!confirmed) return;
      clearPracticeQuizDraft(bankKey);
      refreshResumeBanner();
    });
    actions.append(resumeBtn, discardBtn);
    resumePanel.append(copy, actions);
  }
  refreshResumeBanner();

  // Build the rail after cards so numbers, types and states are known.
  const railInner = el('div', { className: 'practice-rail-inner' });
  railInner.appendChild(el('p', { className: 'rail-kicker', text: '题目' }));
  const railProgressText = el('p', { className: 'rail-progress-text' });
  const railTrack = el('div', { className: 'rail-track' });
  const railFill = el('div', { className: 'rail-fill' });
  railTrack.appendChild(railFill);
  const jumpGrid = el('div', { className: 'practice-jump-grid' });
  ctx.cards.forEach((item) => {
    const b = el('button', {
      type: 'button',
      className: 'practice-jump hit-target',
      text: String(item.number + 1).padStart(2, '0'),
      'aria-label': `第 ${item.number + 1} 题`,
      'data-qid': item.progressId,
      'data-index': String(item.number),
    });
    b.addEventListener('click', () => jumpTo(item));
    if (isCompleted(item.progressId)) b.classList.add('is-done');
    jumpGrid.appendChild(b);
  });
  railInner.append(railProgressText, railTrack, jumpGrid);
  rail.appendChild(railInner);

  function updateProgress() {
    const done = ctx.cards.filter((item) => item.card.dataset.done === 'true').length;
    railProgressText.textContent = `完成 ${done} / ${ctx.cards.length}`;
    heroProgress.textContent = `完成 ${done} / ${ctx.cards.length}`;
    railFill.style.width = `${ctx.cards.length ? Math.round((done / ctx.cards.length) * 100) : 0}%`;
    ctx.cards.forEach((item) => {
      const jump = jumpGrid.querySelector(`[data-index="${item.number}"]`);
      jump?.classList.toggle('is-done', item.card.dataset.done === 'true');
    });
  }
  updateProgress();

  ctx.onDone = (card) => {
    updateProgress();
  };

  function reviewItemFor(answerId) {
    return ctx.cards.find((item) => (
      item.progressId === answerId || (item.answerIds || []).includes(answerId)
    )) || null;
  }

  function renderReviewPanel() {
    clear(reviewPanel);
    const due = dueReviews(readPracticeStore(), Date.now());
    const current = due.filter((entry) => entry.bankKey === bankKey);
    const others = due.filter((entry) => entry.bankKey !== bankKey);
    const ordered = [...current, ...others];
    reviewPanel.appendChild(
      el('div', { className: 'practice-review-head' }, [
        el('h2', { text: '今日复习 · Review today' }),
        el('span', {
          className: 'practice-review-count',
          text: `${ordered.length} 道待复习 · ${ordered.length} due`,
        }),
      ]),
    );
    if (!ordered.length) {
      reviewPanel.appendChild(
        el('p', {
          className: 'practice-review-empty',
          text: '今天没有待复习的题目 · No items are due for review today',
        }),
      );
      return;
    }
    const listEl = el('ul', { className: 'practice-review-list' });
    ordered.forEach(({ bankKey: entryBankKey, id, record }) => {
      const parsed = parsePracticeBankKey(entryBankKey);
      const labels = practiceSubjectLabels(parsed.subject);
      const href = `#/${parsed.subject}/practice/${parsed.unitId}`;
      const cardItem = entryBankKey === bankKey ? reviewItemFor(id) : null;
      let title;
      let meta;
      if (cardItem) {
        title = cardItem.card.querySelector('.practice-card-title h2')?.textContent?.trim()
          || `第 ${cardItem.number + 1} 题 · Question ${cardItem.number + 1}`;
        meta = `本单元第 ${cardItem.number + 1} 题 · This unit, Q${cardItem.number + 1}`;
      } else {
        title = `${labels.zh} · ${parsed.unitId}`;
        meta = `${questionIdFromProgressId(id)} · ${record.status === 'right'
          ? '到期复习 · Due review'
          : '上次答错 · Last answer wrong'}`;
      }
      const link = el('a', {
        className: 'practice-review-item hit-target',
        href,
        'data-qid': id,
      }, [
        el('span', { className: 'practice-review-title', text: title }),
        el('span', { className: 'practice-review-meta', text: meta }),
        el('span', { className: 'practice-review-go', text: '复习 · Review' }),
      ]);
      if (cardItem) {
        link.addEventListener('click', (event) => {
          event.preventDefault();
          jumpTo(cardItem);
        });
      }
      listEl.appendChild(el('li', {}, [link]));
    });
    reviewPanel.appendChild(listEl);
  }

  function refreshReviewButton() {
    const due = dueReviews(readPracticeStore(), Date.now());
    reviewCount.textContent = due.length ? String(due.length) : '';
    reviewCount.hidden = due.length === 0;
    reviewBtn.classList.toggle('has-due', due.length > 0);
    reviewBtn.setAttribute(
      'aria-label',
      due.length
        ? `今日复习 · Review today，${due.length} 道待复习 · ${due.length} due`
        : '今日复习 · Review today',
    );
    if (reviewOpen) renderReviewPanel();
  }

  function setReviewOpen(open) {
    reviewOpen = open;
    reviewPanel.hidden = !open;
    reviewBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) {
      renderReviewPanel();
      reviewPanel.focus({ preventScroll: true });
    }
  }

  reviewBtn.addEventListener('click', () => setReviewOpen(!reviewOpen));
  quizBtn.addEventListener('click', () => {
    if (reviewOpen) setReviewOpen(false);
    quizCtl?.open();
  });
  ctx.onAttempt = () => {
    refreshReviewButton();
    renderPracticeProgress(progressSection);
  };
  refreshReviewButton();
  renderPracticeProgress(progressSection);

  // Add previous / next movement at the end of every card (used on narrow screens).
  ctx.cards.forEach((item, i) => {
    const foot = el('div', { className: 'practice-card-foot' });
    if (i > 0) {
      const prevBtn = el('button', { type: 'button', className: 'btn hit-target', text: '上一题' });
      prevBtn.addEventListener('click', () => jumpTo(ctx.cards[i - 1]));
      foot.appendChild(prevBtn);
    }
    if (i < ctx.cards.length - 1) {
      const nextBtn = el('button', { type: 'button', className: 'btn hit-target', text: '下一题' });
      nextBtn.addEventListener('click', () => jumpTo(ctx.cards[i + 1]));
      foot.appendChild(nextBtn);
    }
    item.card.appendChild(foot);
  });

  function jumpTo(item) {
    if (item.card.hidden) setFilter('all');
    savePracticeLastIndex(bankKey, item.number);
    const top = item.card.getBoundingClientRect().top + window.scrollY - 84;
    window.scrollTo({ top, behavior: 'smooth' });
    setTimeout(() => item.card.querySelector('.practice-stem, h2')?.focus?.({ preventScroll: true }), 420);
  }

  const filterDefs = [
    ['all', '全部'],
    ['mcq', 'MCQ'],
    ['frq', 'FRQ'],
    ['gen', 'GEN'],
    ['易', '易'],
    ['中', '中'],
    ['难', '难'],
    ['wrong', '只看错题 · Wrong only'],
  ];
  const filterButtons = new Map();
  let activeFilter = 'all';
  function setFilter(key) {
    activeFilter = key;
    filterButtons.forEach((b, k) => {
      const on = k === key;
      b.classList.toggle('active', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    const answers = practiceAnswerMap(bankKey);
    ctx.cards.forEach((item) => {
      const card = item.card;
      const type = card.dataset.type || '';
      const diff = card.dataset.diff || '';
      let show = true;
      if (key === 'wrong') {
        const ids = item.answerIds && item.answerIds.length ? item.answerIds : [item.progressId];
        show = ids.some((id) => answers[id]?.status === 'wrong');
      } else if (key !== 'all') {
        show = type === key || diff === key;
      }
      card.hidden = !show;
    });
    ctx.sets.forEach((set) => {
      const any = [...set.querySelectorAll('.practice-card')].some((c) => !c.hidden);
      set.hidden = !any;
    });
    const visible = ctx.cards.filter((item) => !item.card.hidden).length;
    countEl.textContent = `${visible} / ${ctx.cards.length} 题`;
    empty.hidden = visible !== 0;
    ctx.cards.forEach((item) => {
      jumpGrid.querySelector(`[data-index="${item.number}"]`)?.classList.toggle('is-hidden', item.card.hidden);
    });
    // Graphs in cards that were hidden while the theme changed need a redraw now.
    requestAnimationFrame(() => {
      if (!page.isConnected) return;
      paintActive();
      main.querySelectorAll('.stim-graph').forEach((canvas) => {
        if (canvas._graph && canvas.clientWidth > 0) drawGraph(canvas, canvas._graph);
      });
    });
  }
  filterDefs.forEach(([key, label]) => {
    const b = el('button', { type: 'button', className: 'filter-chip hit-target', text: label, 'data-filter': key });
    b.setAttribute('aria-pressed', key === 'all' ? 'true' : 'false');
    b.addEventListener('click', () => setFilter(key));
    filterButtons.set(key, b);
    filters.appendChild(b);
  });
  setFilter('all');

  // Keep the rail question highlighted while scrolling.
  let activeIndex = -1;
  let raf = 0;
  let positionRestored = savedLastIndex <= 0;
  function paintActive() {
    let current = -1;
    for (let i = 0; i < ctx.cards.length; i++) {
      if (ctx.cards[i].card.hidden) continue;
      const top = ctx.cards[i].card.getBoundingClientRect().top;
      if (top <= 140) current = i;
      else if (current === -1) current = i;
      else break;
    }
    if (current === activeIndex) return;
    activeIndex = current;
    if (positionRestored) {
      const focusedCard = document.activeElement instanceof Element
        ? document.activeElement.closest('.practice-card')
        : null;
      const focusedItem = focusedCard ? ctx.cards.find((entry) => entry.card === focusedCard) : null;
      savePracticeLastIndex(bankKey, focusedItem ? focusedItem.number : current);
    }
    jumpGrid.querySelectorAll('.practice-jump').forEach((b, i) => {
      b.classList.toggle('active', i === current);
    });
  }
  const onScroll = () => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      raf = 0;
      paintActive();
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  paintActive();

  const onCardFocus = (e) => {
    const cardEl = e.target instanceof Element ? e.target.closest('.practice-card') : null;
    if (!cardEl) return;
    const item = ctx.cards.find((entry) => entry.card === cardEl);
    if (item) savePracticeLastIndex(bankKey, item.number);
  };
  mainCol.addEventListener('focusin', onCardFocus);

  // Restore the last viewed card in this bank, after the route has scrolled to top.
  if (savedLastIndex > 0 && savedLastIndex < ctx.cards.length) {
    requestAnimationFrame(() => {
      if (!page.isConnected) return;
      const target = ctx.cards[savedLastIndex];
      if (target && !target.card.hidden) {
        const top = target.card.getBoundingClientRect().top + window.scrollY - 84;
        try {
          window.scrollTo({ top: Math.max(0, top), left: 0, behavior: 'instant' });
        } catch (_) {
          window.scrollTo(0, Math.max(0, top));
        }
      }
      positionRestored = true;
      paintActive();
    });
  } else {
    positionRestored = true;
  }

  function activeVisiblePosition() {
    const list = ctx.cards.filter((item) => !item.card.hidden);
    if (!list.length) return { list, index: -1 };
    if (list[0].card.getBoundingClientRect().top > 160) return { list, index: -1 };
    let index = 0;
    for (let i = 0; i < list.length; i++) {
      if (list[i].card.getBoundingClientRect().top <= 160) index = i;
      else break;
    }
    return { list, index };
  }

  function isEditableNode(node) {
    if (!(node instanceof Element)) return false;
    if (node.isContentEditable) return true;
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(node.tagName)) return true;
    return !!node.closest('input, textarea, select, [contenteditable], [role="textbox"]');
  }

  const onKeyDown = (e) => {
    if (quizCtl?.isActive()) return;
    if (e.defaultPrevented || e.isComposing) return;
    if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    const dialogOpen = [...document.querySelectorAll('[role="dialog"][aria-modal="true"], dialog[open]')]
      .some((node) => !node.hidden && node.getClientRects().length > 0);
    if (dialogOpen) return;
    if (document.documentElement.classList.contains('nav-mobile-open')) return;
    if (isEditableNode(e.target) || isEditableNode(document.activeElement)) return;
    const { list, index } = activeVisiblePosition();
    if (!list.length) return;
    let next = index;
    if (e.key === 'ArrowLeft') {
      if (index <= 0) return;
      next = index - 1;
    } else {
      next = index < 0 ? 0 : index + 1;
      if (next >= list.length) return;
    }
    e.preventDefault();
    jumpTo(list[next]);
  };
  window.addEventListener('keydown', onKeyDown);

  // Stimulus graphs are drawn once from live theme tokens; redraw them when the
  // theme changes or the viewport resizes so the bitmap stays in sync.
  let graphRaf = 0;
  const redrawGraphs = () => {
    if (graphRaf) return;
    graphRaf = requestAnimationFrame(() => {
      graphRaf = 0;
      main.querySelectorAll('.stim-graph').forEach((canvas) => {
        if (canvas._graph && canvas.isConnected && canvas.clientWidth > 0) {
          drawGraph(canvas, canvas._graph);
        }
      });
    });
  };
  window.addEventListener('themechange', redrawGraphs);
  window.addEventListener('resize', redrawGraphs);

  return () => {
    quizCtl?.destroy();
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('keydown', onKeyDown);
    mainCol.removeEventListener('focusin', onCardFocus);
    window.removeEventListener('themechange', redrawGraphs);
    window.removeEventListener('resize', redrawGraphs);
    if (raf) cancelAnimationFrame(raf);
    if (graphRaf) cancelAnimationFrame(graphRaf);
  };
}

function renderSharedSet(set, startIdx, subject, unit, pidFn, ctx) {
  const wrap = el('section', { className: 'practice-set' });
  const head = el('div', { className: 'practice-set-head' }, [
    el('h2', { text: set.title || '共享刺激题组' }),
    el('span', { className: 'section-count', text: `${set.questions.length} 题` }),
  ]);
  wrap.appendChild(head);
  let stimObj = set.stimulus;
  if (!stimObj && set.sharedStimulus) stimObj = set._stimulus;
  if (stimObj) wrap.appendChild(renderStimulus(stimObj));
  set.questions.forEach((q, i) => {
    const card = renderProblemCard({ ...q, stimulus: null }, startIdx + i, subject, unit, pidFn, ctx);
    card.classList.add('practice-card-nested');
    wrap.appendChild(card);
  });
  ctx.sets.push(wrap);
  return wrap;
}

function renderProblemCard(prob, idx, subject, unit, pidFn, ctx) {
  const qid = prob.id || fallbackQuestionId(prob, idx, ctx.bankKey);
  const progressId = pidFn(qid);
  markVisited(progressId);
  const answerIds = [];
  const type = prob.type || (prob.generator ? 'gen' : 'frq');
  const card = el('article', {
    className: 'practice-card',
    id: `practice-q-${idx + 1}`,
    'data-type': type,
    'data-diff': prob.difficulty || '中',
    'data-qid': progressId,
  });
  const done = isCompleted(progressId);
  card.dataset.done = done ? 'true' : 'false';
  const stateEl = el('span', { className: 'practice-state' + (done ? ' done' : ''), text: done ? '完成' : '' });

  const head = el('header', { className: 'practice-card-head' }, [
    el('span', { className: 'practice-number', text: String(idx + 1).padStart(2, '0') }),
    el('div', { className: 'practice-card-title' }, [
      el('h2', { text: prob.title || '题目', tabindex: '-1' }),
      el('div', { className: 'practice-tags' }, [
        el('span', { className: 'tag', text: typeLabel(prob) }),
        el('span', { className: 'tag', text: prob.difficulty || '中' }),
        prob.calculator === false ? el('span', { className: 'tag', text: '无计算器' }) : null,
        prob.calculator === true ? el('span', { className: 'tag', text: '可用计算器' }) : null,
      ]),
    ]),
    stateEl,
  ]);
  card.appendChild(head);

  const body = el('div', { className: 'practice-card-body' });
  if (prob.source) {
    body.appendChild(
      el('p', {
        className: 'practice-source muted',
        text: `来源：${prob.source}${prob.license ? ' · ' + prob.license : ''}`,
      }),
    );
  }
  if (prob.stimulus) body.appendChild(renderStimulus(prob.stimulus));
  if (prob.stem || prob.stemLatex) {
    const stem = el('div', { className: 'practice-stem' });
    if (prob.stemLatex) stem.appendChild(tex(prob.stemLatex, true));
    if (prob.stem) stem.appendChild(el('p', { text: prob.stem }));
    body.appendChild(stem);
  }

  const markDone = () => {
    markCompleted(progressId);
    cardState(card, true);
    ctx.onDone?.(card);
  };
  const attemptOpts = {
    bankKey: ctx.bankKey,
    answerIds,
    onAttempt: (ok, id) => ctx.onAttempt?.(ok, id),
  };

  if (typeof prob.generate === 'function') {
    let instance = prob.generate();
    const regen = el('button', { type: 'button', className: 'btn hit-target', text: '换一组数据' });
    const mount = el('div', { className: 'practice-gen-mount' });
    const resetDone = () => {
      clearCompleted(progressId);
      clearPracticeAttempt(ctx.bankKey, progressId);
      cardState(card, false);
      ctx.onDone?.(card);
      ctx.onAttempt?.(false, progressId);
    };
    const redraw = () => {
      clear(mount);
      instance = prob.generate();
      clear(answerIds);
      resetDone();
      mount.appendChild(renderInstanceBody(instance, progressId, markDone, { ...attemptOpts, instanceStem: true }));
    };
    regen.addEventListener('click', redraw);
    body.append(regen, mount);
    mount.appendChild(renderInstanceBody(instance, progressId, markDone, { ...attemptOpts, instanceStem: true }));
  } else {
    body.appendChild(renderInstanceBody(prob, progressId, markDone, attemptOpts));
  }
  card.appendChild(body);

  ctx.cards.push({ card, number: idx, progressId, answerIds });
  return card;
}

function renderInstanceBody(prob, progressId, onDone, opts = {}) {
  const wrap = el('div', { className: 'practice-instance' });
  if (prob.parts) {
    prob.parts.forEach((part, i) => {
      const partWrap = el('div', { className: 'practice-part' });
      const partId = `${progressId}:${i}`;
      opts.answerIds?.push(partId);
      partWrap.appendChild(el('h3', { text: `(${String.fromCharCode(97 + i)})` }));
      if (part.stem) partWrap.appendChild(el('p', { text: part.stem }));
      if (part.stemLatex) partWrap.appendChild(tex(part.stemLatex, true));
      partWrap.appendChild(
        renderAnswerUI(
          { ...prob, ...part, type: part.type || prob.type, parts: undefined },
          partId,
          onDone,
          opts,
        ),
      );
      wrap.appendChild(partWrap);
    });
    return wrap;
  }
  if (opts.instanceStem && (prob.stem || prob.stemLatex)) {
    const stem = el('div', { className: 'practice-stem' });
    if (prob.stemLatex) stem.appendChild(tex(prob.stemLatex, true));
    if (prob.stem) stem.appendChild(el('p', { text: prob.stem }));
    wrap.appendChild(stem);
  }
  opts.answerIds?.push(progressId);
  wrap.appendChild(renderAnswerUI(prob, progressId, onDone, opts));
  return wrap;
}

function hasStepsContent(steps) {
  if (Array.isArray(steps)) return steps.length > 0;
  return steps != null && String(steps).trim() !== '';
}

function solutionHasContent(prob) {
  return !!(
    prob.hint
    || prob.solution
    || prob.solutionLatex
    || hasStepsContent(prob.steps)
    || prob.answer
    || prob.answerLatex
  );
}

function appendSolutionText(body, value, display = true) {
  if (value == null || value === '') return;
  if (typeof value === 'string' || typeof value === 'number') {
    body.appendChild(el('p', { text: String(value) }));
    return;
  }
  if (typeof value !== 'object') return;
  const text = value.text ?? value.zh ?? value.en;
  if (text) body.appendChild(el('p', { text: String(text) }));
  if (value.latex) body.appendChild(tex(String(value.latex), display));
}

function renderSolutionSteps(steps) {
  const items = Array.isArray(steps) ? steps : [steps];
  const ol = el('ol', { className: 'practice-sol-steps' });
  items.forEach((step) => {
    if (step == null || step === '') return;
    const li = el('li');
    if (typeof step === 'string' || typeof step === 'number') {
      li.textContent = String(step);
    } else if (typeof step === 'object') {
      if (step.latex) li.appendChild(tex(String(step.latex), false));
      const text = step.text ?? step.zh ?? step.en ?? step.title;
      if (text) {
        if (li.firstChild) li.appendChild(document.createTextNode(' '));
        li.appendChild(document.createTextNode(String(text)));
      }
    }
    if (li.firstChild) ol.appendChild(li);
  });
  return ol.childNodes.length ? ol : null;
}

function buildSolutionBody(prob) {
  const body = el('div', { className: 'practice-sol-body' });
  const addLabel = (text) => body.appendChild(el('p', { className: 'practice-sol-label', text }));
  if (prob.hint) {
    addLabel('提示 · Hint');
    appendSolutionText(body, prob.hint);
  }
  const steps = renderSolutionSteps(prob.steps);
  if (steps) {
    addLabel('步骤 · Steps');
    body.appendChild(steps);
  }
  if (prob.answer || prob.answerLatex) {
    addLabel('答案 · Answer');
    if (prob.answerLatex) body.appendChild(tex(prob.answerLatex, true));
    if (prob.answer) body.appendChild(el('p', { text: prob.answer }));
  }
  if (prob.solution || prob.solutionLatex) {
    addLabel('解析 · Solution');
    if (prob.solution) body.appendChild(el('p', { text: prob.solution }));
    if (prob.solutionLatex) body.appendChild(tex(prob.solutionLatex, true));
  }
  return body;
}

/**
 * The expander is hidden until the first checked answer when the item has a
 * checker. Items without a checker keep the old collapsed-but-available peek.
 */
function createSolutionDetails(prob, gated) {
  const hasContent = solutionHasContent(prob);
  if (!hasContent && !gated) return null;
  const details = el('details', { className: 'practice-sol' });
  details.appendChild(el('summary', {
    className: 'hit-target',
    text: gated ? '查看解析 · View solution' : '答案与解析 · Answer & solution',
  }));
  let built = false;
  const build = () => {
    if (built) return;
    built = true;
    details.appendChild(
      hasContent
        ? buildSolutionBody(prob)
        : el('div', { className: 'practice-sol-body' }, [
          el('p', { className: 'practice-sol-empty', text: '暂无解析 · No solution provided' }),
        ]),
    );
  };
  details.addEventListener('toggle', () => {
    if (details.open) build();
  });
  if (gated) details.hidden = true;
  else build();
  return {
    details,
    reveal() {
      build();
      details.hidden = false;
    },
  };
}

function createPracticePreview() {
  return el('div', {
    className: 'practice-preview',
    hidden: true,
    'aria-label': '答案预览 · Answer preview',
  });
}

/** Display-only KaTeX preview; invalid TeX falls back to muted raw text. */
function renderPracticePreview(target, raw) {
  if (!target || !target.isConnected) return;
  const text = String(raw || '').trim();
  clear(target);
  target.classList.remove('is-raw');
  if (!text) {
    target.hidden = true;
    return;
  }
  target.hidden = false;
  const label = el('span', { className: 'practice-preview-label', text: '预览 · Preview' });
  const content = el('span', { className: 'practice-preview-tex' });
  let rendered = false;
  if (window.katex && typeof window.katex.renderToString === 'function') {
    try {
      content.innerHTML = window.katex.renderToString(text, {
        throwOnError: true,
        displayMode: false,
        strict: 'ignore',
        trust: false,
      });
      rendered = true;
    } catch (_) { /* incomplete TeX falls through to raw text */ }
  }
  if (!rendered) {
    target.classList.add('is-raw');
    content.textContent = text;
  }
  target.append(label, content);
}

/** Map a stored MCQ answer (`B. choice text` or the raw text) back to its index. */
function mcqChoiceIndexFromAnswer(raw, choices) {
  const text = String(raw ?? '').trim();
  if (!text || !Array.isArray(choices) || !choices.length) return -1;
  const letter = text.match(/^([A-Za-z])(?:[.)、:：\s]|$)/);
  if (letter) {
    const index = letter[1].toUpperCase().charCodeAt(0) - 65;
    if (index >= 0 && index < choices.length) return index;
  }
  return choices.findIndex((choice) => String(choice?.text ?? '').trim() === text);
}

function renderAnswerUI(prob, progressId, onDone, opts = {}) {
  const box = el('div', { className: 'practice-answer-ui' });
  const gated = (prob.type === 'mcq' && prob.choices) || prob.check === 'numeric' || prob.check === 'symbolic';
  const solution = createSolutionDetails(prob, gated);
  const snapshot = practiceAttemptSnapshot(practiceAnswerMap(opts.bankKey)[progressId]);
  const recordAttempt = (ok, answerText) => {
    recordPracticeAttempt(opts.bankKey, progressId, ok, answerText);
    opts.onAttempt?.(ok, progressId);
  };

  if (prob.type === 'mcq' && prob.choices) {
    const group = el('div', { className: 'mcq-group', role: 'radiogroup', 'aria-label': '选项' });
    const fb = el('p', { className: 'practice-feedback', role: 'status', 'aria-live': 'polite' });
    let selected = -1;
    const buttons = [];
    prob.choices.forEach((c, i) => {
      const btn = el('button', {
        type: 'button',
        className: 'mcq-choice hit-target',
        role: 'radio',
        'aria-checked': 'false',
        tabIndex: i === 0 ? 0 : -1,
      }, [
        el('span', { className: 'mcq-letter', text: String.fromCharCode(65 + i) }),
        el('span', { className: 'mcq-text', text: c.text }),
      ]);
      btn.addEventListener('click', () => {
        if (group.dataset.locked === 'true') return;
        selectChoice(i);
      });
      btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          if (group.dataset.locked === 'true') return;
          selectChoice(i);
          checkSelection();
          return;
        }
        if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
        e.preventDefault();
        const next = e.key === 'ArrowDown'
          ? (i + 1) % buttons.length
          : (i - 1 + buttons.length) % buttons.length;
        buttons[next].focus();
        buttons[next].click();
      });
      buttons.push(btn);
      group.appendChild(btn);
    });
    const checkBtn = el('button', { type: 'button', className: 'btn hit-target', text: '检查答案', disabled: true });
    function selectChoice(i) {
      selected = i;
      buttons.forEach((b, j) => {
        b.classList.toggle('is-selected', j === i);
        b.classList.remove('is-wrong');
        b.setAttribute('aria-checked', j === i ? 'true' : 'false');
        b.tabIndex = j === i ? 0 : -1;
      });
      fb.textContent = '';
      fb.className = 'practice-feedback';
      checkBtn.disabled = false;
    }
    function checkSelection() {
      if (selected < 0) return;
      const ok = prob.choices[selected].correct || selected === prob.answerIndex;
      const choiceText = prob.choices[selected].text || '';
      recordAttempt(ok, `${String.fromCharCode(65 + selected)}. ${choiceText}`);
      buttons.forEach((b) => b.classList.remove('is-correct', 'is-wrong'));
      if (ok) {
        buttons[selected].classList.add('is-correct');
        group.dataset.locked = 'true';
        buttons.forEach((b) => { b.disabled = true; });
        checkBtn.disabled = true;
        checkBtn.textContent = '已答对';
        fb.textContent = '正确';
        fb.className = 'practice-feedback ok';
        onDone?.();
      } else {
        buttons[selected].classList.add('is-wrong');
        fb.textContent = '再试一次';
        fb.className = 'practice-feedback bad';
        checkBtn.disabled = false;
      }
      solution?.reveal();
    }

    if (snapshot.hasAttempt) {
      const restoredIndex = mcqChoiceIndexFromAnswer(snapshot.lastAnswer, prob.choices);
      if (restoredIndex >= 0) {
        selectChoice(restoredIndex);
        if (snapshot.status === 'right') {
          buttons[restoredIndex].classList.add('is-correct');
          group.dataset.locked = 'true';
          buttons.forEach((b) => { b.disabled = true; });
          checkBtn.disabled = true;
          checkBtn.textContent = '已答对';
          fb.textContent = '正确';
          fb.className = 'practice-feedback ok';
          onDone?.();
        } else {
          buttons[restoredIndex].classList.add('is-wrong');
          fb.textContent = '再试一次';
          fb.className = 'practice-feedback bad';
        }
      } else if (snapshot.status === 'right') {
        group.dataset.locked = 'true';
        buttons.forEach((b) => { b.disabled = true; });
        checkBtn.disabled = true;
        checkBtn.textContent = '已答对';
        fb.textContent = '正确';
        fb.className = 'practice-feedback ok';
        onDone?.();
      } else {
        fb.textContent = '未作答 · Unanswered';
        fb.className = 'practice-feedback bad';
        checkBtn.disabled = true;
      }
    }

    checkBtn.addEventListener('click', checkSelection);
    box.append(group, el('div', { className: 'answer-actions' }, [checkBtn]), fb);
  } else if (prob.check === 'symbolic') {
    const form = el('form', { className: 'answer-form', novalidate: true });
    const input = el('input', {
      className: 'hit-target value-edit',
      type: 'text',
      placeholder: '符号答案，如 2*x 或 (x^2-1)/(x-1)',
      'aria-label': '符号答案 · Symbolic answer',
      autocomplete: 'off',
    });
    const btn = el('button', { type: 'submit', className: 'btn hit-target', text: '检查等价' });
    const fb = el('p', { className: 'practice-feedback', role: 'status', 'aria-live': 'polite' });
    const preview = createPracticePreview();
    let previewTimer = 0;
    input.addEventListener('input', () => {
      if (previewTimer) clearTimeout(previewTimer);
      previewTimer = setTimeout(() => {
        previewTimer = 0;
        renderPracticePreview(preview, input.value);
      }, 90);
    });
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (previewTimer) {
        clearTimeout(previewTimer);
        previewTimer = 0;
      }
      renderPracticePreview(preview, input.value);
      const raw = input.value.trim();
      if (!raw) {
        fb.textContent = '请先输入答案 · Enter an answer first';
        fb.className = 'practice-feedback';
        form.dataset.state = '';
        input.focus();
        return;
      }
      const ok = checkSymbolic(raw, prob.expected || prob.answerLatex || prob.answer, { tol: prob.tol });
      recordAttempt(ok, raw);
      fb.textContent = ok ? '等价正确' : '与标准形式不等价，请化简后再试';
      fb.className = `practice-feedback ${ok ? 'ok' : 'bad'}`;
      form.dataset.state = ok ? 'ok' : 'bad';
      if (ok) {
        input.disabled = true;
        btn.disabled = true;
        onDone?.();
      }
      solution?.reveal();
    });
    if (snapshot.hasAttempt) {
      input.value = snapshot.lastAnswer;
      queueMicrotask(() => renderPracticePreview(preview, input.value));
      const ok = snapshot.status === 'right';
      const answered = snapshot.lastAnswer.trim() !== '';
      fb.textContent = ok ? '等价正确' : answered ? '与标准形式不等价，请化简后再试' : '未作答 · Unanswered';
      fb.className = `practice-feedback ${ok ? 'ok' : 'bad'}`;
      form.dataset.state = ok ? 'ok' : 'bad';
      if (ok) {
        input.disabled = true;
        btn.disabled = true;
        onDone?.();
      }
    }
    form.append(input, btn);
    box.append(form, preview, fb);
  } else if (prob.check === 'numeric') {
    const form = el('form', { className: 'answer-form', novalidate: true });
    const input = el('input', {
      className: 'hit-target value-edit',
      type: 'text',
      placeholder: '数值答案',
      'aria-label': '数值答案 · Numeric answer',
      autocomplete: 'off',
    });
    const btn = el('button', { type: 'submit', className: 'btn hit-target', text: '检查' });
    const fb = el('p', { className: 'practice-feedback', role: 'status', 'aria-live': 'polite' });
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const raw = input.value.trim();
      if (!raw) {
        fb.textContent = '请先输入答案 · Enter an answer first';
        fb.className = 'practice-feedback';
        form.dataset.state = '';
        input.focus();
        return;
      }
      const ok = checkNumeric(raw, prob.expected, prob.tol ?? 0.02);
      recordAttempt(ok, raw);
      fb.textContent = ok ? '正确' : '不在容差内';
      fb.className = `practice-feedback ${ok ? 'ok' : 'bad'}`;
      form.dataset.state = ok ? 'ok' : 'bad';
      if (ok) {
        input.disabled = true;
        btn.disabled = true;
        onDone?.();
      }
      solution?.reveal();
    });
    if (snapshot.hasAttempt) {
      input.value = snapshot.lastAnswer;
      const ok = snapshot.status === 'right';
      const answered = snapshot.lastAnswer.trim() !== '';
      fb.textContent = ok ? '正确' : answered ? '不在容差内' : '未作答 · Unanswered';
      fb.className = `practice-feedback ${ok ? 'ok' : 'bad'}`;
      form.dataset.state = ok ? 'ok' : 'bad';
      if (ok) {
        input.disabled = true;
        btn.disabled = true;
        onDone?.();
      }
    }
    form.append(input, btn);
    box.append(form, fb);
  }

  if (solution) {
    box.appendChild(solution.details);
    if (snapshot.hasAttempt) {
      solution.reveal();
      if (snapshot.solOpen) solution.details.open = true;
    }
    solution.details.addEventListener('toggle', () => {
      const current = practiceAttemptSnapshot(practiceAnswerMap(opts.bankKey)[progressId]);
      if (!current.hasAttempt) return;
      setPracticeSolutionOpen(opts.bankKey, progressId, solution.details.open);
    });
  }
  return box;
}

function expandGenerators(problems) {
  return problems.map((p) => {
    if (!p.generator) return p;
    if (p.generator === 'power') {
      return {
        ...p,
        type: p.type || 'gen',
        generate() {
          const n = 2 + Math.floor(Math.random() * 5);
          const c = 1 + Math.floor(Math.random() * 6);
          return {
            type: 'frq',
            difficulty: p.difficulty || '易',
            calculator: false,
            check: 'symbolic',
            stemLatex: `\\text{若 }f(x)=${c}x^{${n}}\\text{，求 }f'(x)`,
            expected: `${c * n}*x^${n - 1}`,
            answerLatex: `f'(x)=${c * n}x^{${n - 1}}`,
            solution: '幂法则：系数乘指数、指数减一。',
          };
        },
      };
    }
    if (p.generator === 'chain') {
      return {
        ...p,
        type: p.type || 'gen',
        generate() {
          const a = 2 + Math.floor(Math.random() * 4);
          return {
            type: 'mcq',
            difficulty: p.difficulty || '中',
            calculator: false,
            stemLatex: `\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left[\\sin(${a}x)\\right]=`,
            choices: [
              { text: `${a} cos(${a}x)`, correct: true },
              { text: `cos(${a}x)`, correct: false },
              { text: `${a} sin(${a}x)`, correct: false },
              { text: `-sin(${a}x)`, correct: false },
            ],
            answerLatex: `${a}\\cos(${a}x)`,
            solution: '链式法则：外层余弦乘以内层导数。',
          };
        },
      };
    }
    if (p.generator === 'product') {
      return {
        ...p,
        type: p.type || 'gen',
        generate() {
          const a = 1 + Math.floor(Math.random() * 4);
          const b = 1 + Math.floor(Math.random() * 4);
          return {
            type: 'frq',
            calculator: false,
            check: 'symbolic',
            stemLatex: `\\text{求 }\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left[(${a}x+1)(${b}x^{2})\\right]`,
            expected: `${a * b}*x^2+${2 * b}*(${a}*x+1)*x`.replace(/\+\-/g, '-'),
            answerLatex: `${a * b}x^{2}+${2 * b}x(${a}x+1)`,
            solution: '乘积法则 u\'v+uv\'。',
          };
        },
      };
    }
    if (p.generator === 'limit') {
      return {
        ...p,
        type: p.type || 'gen',
        generate() {
          const a = 1 + Math.floor(Math.random() * 5);
          return {
            type: 'frq',
            calculator: false,
            check: 'numeric',
            stemLatex: `\\displaystyle\\lim_{x\\to ${a}}\\dfrac{x^{2}-${a * a}}{x-${a}}`,
            expected: 2 * a,
            tol: 0.01,
            answerLatex: String(2 * a),
            solution: `因式分解得 x+${a}，代入得 ${2 * a}。`,
          };
        },
      };
    }
    if (p.generator === 'integral') {
      return {
        ...p,
        type: p.type || 'gen',
        generate() {
          const n = 1 + Math.floor(Math.random() * 4);
          const c = 1 + Math.floor(Math.random() * 5);
          return {
            type: 'frq',
            calculator: false,
            check: 'symbolic',
            stemLatex: `\\displaystyle\\int ${c}x^{${n}}\\,\\mathrm{d}x`,
            expected: `${c}/${n + 1}*x^${n + 1}+C`,
            answerLatex: `\\dfrac{${c}}{${n + 1}}x^{${n + 1}}+C`,
            solution: '幂积分公式，别忘了 +C。',
          };
        },
      };
    }
    return p;
  });
}

function attachSharedStimuli(bank) {
  const stimuli = bank.stimuli || {};
  const problems = (bank.problems || []).map((item) => {
    if (item.kind === 'set') {
      const stim = item.stimulus || stimuli[item.sharedStimulus] || null;
      return { ...item, _stimulus: stim, stimulus: stim };
    }
    if (item.sharedStimulus && stimuli[item.sharedStimulus]) {
      return { ...item, stimulus: item.stimulus || stimuli[item.sharedStimulus] };
    }
    return item;
  });
  return { ...bank, problems };
}

export async function loadPracticeBank(subject, unitId) {
  try {
    const mod = await import(`../data/${subject}/practice/${unitId}.js`);
    const raw = {
      UNIT_REF: mod.UNIT_REF,
      stimuli: mod.stimuli || {},
      problems: expandGenerators(mod.problems || []),
    };
    return attachSharedStimuli(raw);
  } catch (_) {
    return null;
  }
}
