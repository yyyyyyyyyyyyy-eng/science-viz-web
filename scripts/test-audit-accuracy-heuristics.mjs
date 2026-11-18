#!/usr/bin/env node
/**
 * Regression tests for the audit-accuracy heuristics.
 *
 * Covers the three auditor false-positive mechanisms triaged in
 * /tmp/selfcheck-8130551/accuracy-triage/TRIAGE.md (all 21 flags at
 * 8130551 were classified false_positive_auditor), plus the optional
 * parts-walking coverage:
 *
 *   1. Graph vs table — columns come from stim.table.headers via the
 *      graph xLabel/yLabel (calc-u9 "t,x,y" plots columns 1,2).
 *   2. a=F/m — only asserted frictionless; with μ_k in the table the
 *      auditor asserts a=(F−μ_k·m·g)/m (mech-*-q002, expected 3.04).
 *   3. E=kq/r² — table values parse unit-aware (em-*-q005: q=2.0 μC
 *      is 2e-6 C, so E=1.8e6, not 1.8e12).
 *   4. walkProblems descends into `parts` (ids `<parent>#partN`).
 *
 * True-detection controls (fixtures that really disagree) MUST keep
 * flagging — this test fails if the heuristics were silenced instead of
 * fixed. A failure of the "real data reports 0 issues" check means either
 * a new auditor false positive (fix the heuristic) or a genuine content
 * bug surfaced by the auditor (fix the data, not this test).
 *
 * Run: node scripts/test-audit-accuracy-heuristics.mjs
 */
import assert from 'node:assert/strict';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseNumericValue, runAudit } from './audit-accuracy.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const TMP_BASE = '/tmp/opencode';

let passed = 0;
function ok(name, actual, expected = true) {
  assert.deepEqual(actual, expected, name);
  passed += 1;
  console.log(`ok ${passed} - ${name}`);
}
function okIncludes(name, haystack, needle) {
  assert.ok(
    String(haystack).includes(needle),
    `${name}\nexpected to include: ${needle}\nactual: ${haystack}`,
  );
  passed += 1;
  console.log(`ok ${passed} - ${name}`);
}
function near(actual, expected, tol) {
  return Math.abs(actual - expected) <= tol;
}

/** The 21 flags at 8130551, all triaged false_positive_auditor. */
const KNOWN_FALSE_POSITIVES = [
  'calc-u9-q001', 'calc-u9-q002', 'calc-u9-q003', 'calc-u9-q004',
  'mech-prep-ap1-q002', 'mech-prep-hs-q002', 'mech-prep-math-q002',
  'mech-u1-q002', 'mech-u2-q002', 'mech-u3-q002', 'mech-u4-q002',
  'mech-u5-q002', 'mech-u6-q002', 'mech-u7-q002',
  'em-prep-found-q005', 'em-u8-q005', 'em-u9-q005', 'em-u10-q005',
  'em-u11-q005', 'em-u12-q005', 'em-u13-q005',
];

// ---------------------------------------------------------------------------
console.log('\nUnit-aware table value parsing (parseNumericValue)');
// ---------------------------------------------------------------------------
ok('parseNumericValue("2.0 μC") = 2e-6', near(parseNumericValue('2.0 μC'), 2e-6, 1e-18));
ok('parseNumericValue("1.0 μC") = 1e-6', near(parseNumericValue('1.0 μC'), 1e-6, 1e-18));
ok('parseNumericValue("0.10 m") stays 0.10 (bare m is metres)', near(parseNumericValue('0.10 m'), 0.1, 1e-12));
ok('parseNumericValue("2.0 kg") stays 2.0 (kg is the SI base unit)', parseNumericValue('2.0 kg'), 2);
ok('parseNumericValue("10 N") = 10', parseNumericValue('10 N'), 10);
ok('parseNumericValue("9.8 m/s²") = 9.8', parseNumericValue('9.8 m/s²'), 9.8);
ok('parseNumericValue("0.20") = 0.2', parseNumericValue('0.20'), 0.2);
ok('parseNumericValue("9.0×10⁹ N·m²/C²") = 9e9', near(parseNumericValue('9.0×10⁹ N·m²/C²'), 9e9, 1));
ok('parseNumericValue("1.8×10⁶") = 1.8e6', near(parseNumericValue('1.8×10⁶'), 1.8e6, 1));
ok('parseNumericValue("5.0×10⁻³") = 5e-3', near(parseNumericValue('5.0×10⁻³'), 5e-3, 1e-15));
ok('parseNumericValue("−1.969") keeps the Unicode-minus sign', parseNumericValue('−1.969'), -1.969);
ok('parseNumericValue("3.0 mm") = 3e-3', near(parseNumericValue('3.0 mm'), 3e-3, 1e-15));
ok('parseNumericValue("2.5 cm") = 2.5e-2', near(parseNumericValue('2.5 cm'), 2.5e-2, 1e-15));
ok('parseNumericValue("9.8") bare number', parseNumericValue('9.8'), 9.8);

// ---------------------------------------------------------------------------
console.log('\nFixture controls: true detection must survive the fixes');
// ---------------------------------------------------------------------------
// Faithful structural copies of the real stimuli (mech-u1 friction set,
// em-u8 point-charge set, calc-u9 parametric set) with deliberately wrong
// `expected` values for the disagree controls.
const FRICTION_STIM = {
  text: '水平面上一物块受水平拉力 F，动摩擦因数 μ_k。取 g=9.8 m/s²。求加速度。',
  diagram: {
    kind: 'fbd',
    surface: true,
    massLabel: 'm',
    forces: [
      { label: 'N', dx: 0, dy: -50 },
      { label: 'mg', dx: 0, dy: 55 },
      { label: 'F', dx: 55, dy: 0 },
      { label: 'f', dx: -40, dy: 0 },
    ],
  },
  table: {
    headers: ['量', '值'],
    rows: [
      ['m', '2.0 kg'],
      ['F', '10 N'],
      ['μ_k', '0.20'],
      ['g', '9.8 m/s²'],
    ],
  },
};
const SMOOTH_STIM = {
  text: '光滑水平面上一物块受水平拉力 F。求加速度。',
  diagram: {
    kind: 'fbd',
    surface: true,
    massLabel: 'm',
    forces: [
      { label: 'N', dx: 0, dy: -50 },
      { label: 'mg', dx: 0, dy: 55 },
      { label: 'F', dx: 55, dy: 0 },
    ],
  },
  table: {
    headers: ['量', '值'],
    rows: [
      ['m', '2.0 kg'],
      ['F', '10 N'],
    ],
  },
};
const EFIELD_STIM = {
  text: '点电荷位于原点，求距原点 r 处的电场大小。',
  diagram: { kind: 'field', charges: [{ x: 140, y: 90, q: '+q' }], pointP: { x: 200, y: 50 } },
  table: {
    headers: ['量', '值'],
    rows: [
      ['q', '2.0 μC'],
      ['r', '0.10 m'],
      ['k', '9.0×10⁹ N·m²/C²'],
    ],
  },
};
const PARAM_TABLE = {
  headers: ['t', 'x', 'y'],
  rows: [
    ['0', '0', '0'],
    ['1', '2', '−2'],
    ['2', '6', '2'],
    ['3', '12', '18'],
  ],
};

const FIXTURES = {
  'mech/practice/fixture-mech.js': `export const problems = [
  {
    kind: 'set',
    id: 'fx-mech-friction-set',
    title: '摩擦物块（控制组）',
    stimulus: ${JSON.stringify(FRICTION_STIM)},
    questions: [
      { id: 'fx-mech-friction-agree', type: 'frq', check: 'numeric', stem: '求物块加速度 a（m/s²）。', expected: 3.04, tol: 0.01 },
      { id: 'fx-mech-friction-disagree', type: 'frq', check: 'numeric', stem: '求物块加速度 a（m/s²）。', expected: 99, tol: 0.01 }
    ]
  },
  {
    kind: 'set',
    id: 'fx-mech-smooth-set',
    title: '光滑物块（控制组）',
    stimulus: ${JSON.stringify(SMOOTH_STIM)},
    questions: [
      { id: 'fx-mech-smooth-agree', type: 'frq', check: 'numeric', stem: '求物块加速度 a（m/s²）。', expected: 5, tol: 0.01 },
      { id: 'fx-mech-smooth-disagree', type: 'frq', check: 'numeric', stem: '求物块加速度 a（m/s²）。', expected: 99, tol: 0.01 }
    ]
  },
  {
    id: 'fx-mech-parts-item',
    title: '多小问（控制组）',
    type: 'frq',
    stimulus: ${JSON.stringify(FRICTION_STIM)},
    parts: [
      { stem: '沿水平方向写出牛顿第二定律。', type: 'frq', answerLatex: 'F-f_k=ma,\\\\quad f_k=\\\\mu_k mg' },
      { stem: '求加速度 a（m/s²）。', type: 'frq', check: 'numeric', expected: 3.04, tol: 0.02 }
    ]
  },
  {
    id: 'fx-mech-parts-item2',
    title: '多小问（真阳性控制）',
    type: 'frq',
    stimulus: ${JSON.stringify(FRICTION_STIM)},
    parts: [
      { stem: '沿水平方向写出牛顿第二定律。', type: 'frq', answerLatex: 'F-f_k=ma,\\\\quad f_k=\\\\mu_k mg' },
      { stem: '求加速度 a（m/s²）。', type: 'frq', check: 'numeric', expected: 99, tol: 0.02 }
    ]
  }
];
`,
  'em/practice/fixture-em.js': `export const problems = [
  {
    kind: 'set',
    id: 'fx-em-efield-set',
    title: '点电荷电场（控制组）',
    stimulus: ${JSON.stringify(EFIELD_STIM)},
    questions: [
      { id: 'fx-em-efield-agree', type: 'frq', check: 'numeric', stem: '求距点电荷 0.10 m 处的电场大小 E（N/C）。', expected: 1800000, tol: 0.01 },
      { id: 'fx-em-efield-disagree', type: 'frq', check: 'numeric', stem: '求距点电荷 0.10 m 处的电场大小 E（N/C）。', expected: 9000000, tol: 0.01 }
    ]
  }
];
`,
  'math/practice/fixture-calc.js': `export const problems = [
  {
    kind: 'set',
    id: 'fx-calc-param-set',
    title: '参数路径（与真实 calc-u9-extra1 一致）',
    stimulus: {
      text: '粒子路径为 x(t)=t²+t，y(t)=t³−3t（t≥0）。',
      table: ${JSON.stringify(PARAM_TABLE)},
      graph: { points: [[0, 0], [2, -2], [6, 2], [12, 18]], xLabel: 'x', yLabel: 'y' }
    },
    questions: [
      { id: 'fx-calc-graph-agree', type: 'frq', check: 'numeric', stem: '求 t=1 时粒子的速率。', expected: 3, tol: 0.01 }
    ]
  },
  {
    kind: 'set',
    id: 'fx-calc-param-bad-set',
    title: '参数路径（真阳性控制：图形 y 被改错）',
    stimulus: {
      text: '粒子路径为 x(t)=t²+t，y(t)=t³−3t（t≥0）。',
      table: ${JSON.stringify(PARAM_TABLE)},
      graph: { points: [[0, 0], [2, -2], [6, 2], [12, 99]], xLabel: 'x', yLabel: 'y' }
    },
    questions: [
      { id: 'fx-calc-graph-disagree', type: 'frq', check: 'numeric', stem: '求 t=1 时粒子的速率。', expected: 3, tol: 0.01 }
    ]
  },
  {
    kind: 'set',
    id: 'fx-calc-xy-set',
    title: '普通 (x,y) 表（真阳性控制）',
    stimulus: {
      text: '直线上取点。',
      table: { headers: ['x', 'y'], rows: [['1', '2'], ['3', '4']] },
      graph: { points: [[1, 2], [3, 5]], xLabel: 'x', yLabel: 'y' }
    },
    questions: [
      { id: 'fx-calc-xy-disagree', type: 'frq', check: 'numeric', stem: '求 y。', expected: 5, tol: 0.01 }
    ]
  }
];
`,
};

mkdirSync(TMP_BASE, { recursive: true });
const fixtureRoot = mkdtempSync(join(TMP_BASE, 'audit-heuristics-'));
let fixtureIssues = [];
try {
  for (const subj of ['bio', 'math', 'mech', 'em']) {
    mkdirSync(join(fixtureRoot, subj, 'practice'), { recursive: true });
  }
  writeFileSync(join(fixtureRoot, 'package.json'), '{"type":"module"}\n');
  for (const [rel, body] of Object.entries(FIXTURES)) {
    writeFileSync(join(fixtureRoot, rel), body);
  }
  const fixtureRun = await runAudit({ dataRoot: fixtureRoot, scope: 'practice' });
  fixtureIssues = fixtureRun.issues;
  const byId = (id) => fixtureIssues.filter((i) => i.id === id);
  const idsFlagged = new Set(fixtureIssues.map((i) => i.id));

  console.log('\nFixture controls: a=F/m and a=(F−μ_k·m·g)/m');
  ok('friction item with expected 3.04 is NOT flagged (mech-*-q002 regression)', byId('fx-mech-friction-agree'), []);
  const frictionFlags = byId('fx-mech-friction-disagree');
  ok('friction item with wrong expected 99 still flags', frictionFlags.length, 1);
  okIncludes(
    'friction flag names the friction model and recomputed a=3.04',
    frictionFlags[0].msg,
    'a=(F−μ_k·m·g)/m=3.04 but expected=99',
  );
  ok('frictionless item with expected 5 is NOT flagged (mech-prep-*-q015 regression)', byId('fx-mech-smooth-agree'), []);
  const smoothFlags = byId('fx-mech-smooth-disagree');
  ok('frictionless item with wrong expected 99 still flags', smoothFlags.length, 1);
  okIncludes('frictionless flag keeps the a=F/m model', smoothFlags[0].msg, 'a=F/m=5 but expected=99');
  ok('parts: friction part with expected 3.04 is NOT flagged', byId('fx-mech-parts-item#part2'), []);
  const partFlags = byId('fx-mech-parts-item2#part2');
  ok('parts: friction part with wrong expected 99 still flags', partFlags.length, 1);
  okIncludes('parts flag carries the synthetic <parent>#partN id', partFlags[0].msg, 'a=(F−μ_k·m·g)/m=3.04 but expected=99');

  console.log('\nFixture controls: E=kq/r² with unit-aware parse');
  ok('E with q=2.0 μC, expected 1.8e6 is NOT flagged (em-*-q005 regression)', byId('fx-em-efield-agree'), []);
  const eFlags = byId('fx-em-efield-disagree');
  ok('E with expected 9e6 still flags', eFlags.length, 1);
  const eExpected = 9e9 * Math.abs(2e-6) / (0.1 * 0.1);
  okIncludes(
    'E flag is computed in SI (E≈1.8e6, not the pre-fix 1.8e12)',
    eFlags[0].msg,
    `E=kq/r²=${eExpected} but expected=9000000`,
  );

  console.log('\nFixture controls: graph vs table columns');
  ok('calc-u9-style parametric table with matching (x,y) graph is NOT flagged', byId('fx-calc-graph-agree'), []);
  const paramFlags = byId('fx-calc-graph-disagree');
  ok('parametric graph with a genuinely wrong y still flags', paramFlags.length, 1);
  okIncludes(
    'parametric flag compares the table x,y columns (1,2)',
    paramFlags[0].msg,
    'graph point (12) y=99 != table 18',
  );
  const xyFlags = byId('fx-calc-xy-disagree');
  ok('plain (x,y) table with wrong graph y still flags', xyFlags.length, 1);
  okIncludes('plain (x,y) flag keeps the legacy message shape', xyFlags[0].msg, 'graph point (3) y=5 != table 4');
  ok(
    'fixtures flag exactly the six disagree controls',
    [...idsFlagged].sort(),
    ['fx-calc-graph-disagree', 'fx-calc-xy-disagree', 'fx-em-efield-disagree', 'fx-mech-friction-disagree', 'fx-mech-parts-item2#part2', 'fx-mech-smooth-disagree'],
  );
} finally {
  rmSync(fixtureRoot, { recursive: true, force: true });
}

// ---------------------------------------------------------------------------
console.log('\nReal data regression (full corpus at the current worktree)');
// ---------------------------------------------------------------------------
const real = await runAudit();
const flaggedIds = new Set(real.issues.map((i) => i.id));
console.log(`# real-data audit: checks=${real.summary.checks} issues=${real.summary.issues} (baseline before fix: 21 issues / 1798 checks)`);

ok(
  'none of the 21 triaged false-positive IDs are re-reported',
  KNOWN_FALSE_POSITIVES.filter((id) => flaggedIds.has(id)),
  [],
);
ok(
  'parts-walking adds no flags on the friction/E-field parts families',
  real.issues.filter((i) => /^mech-(u1|u7|prep-ap1)-q011#part/.test(i.id) || /^em-(u8|u9)-q011#part/.test(i.id)),
  [],
);
ok(
  'frictionless mech-prep-ap1-q015 still passes the a=F/m recomputation',
  flaggedIds.has('mech-prep-ap1-q015'),
  false,
);
ok(
  'real-data audit reports 0 issues (was 21; a non-empty list here is a new auditor false positive or a genuine content bug — investigate, do not silence)',
  real.issues,
  [],
);

console.log(`\nAll ${passed} checks passed.`);
