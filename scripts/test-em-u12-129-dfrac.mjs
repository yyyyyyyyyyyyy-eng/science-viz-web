#!/usr/bin/env node
/**
 * Targeted regression test for the 12.9 finite-wire bilingual note
 * (data/em/em-u12.js, TOPICS["12.9"].derivationNotes, "Element field ->
 * Finite-wire integral"), the string that produced the live katex_error on
 * #/t/em/em-u12/12.9 at 8130551.
 *
 * What the note's runtime string must satisfy (standing visible-math policy,
 * re-confirmed 2026-11-19):
 *   1. NO JS-escape-destroyed TeX: no control byte 0x08/0x09/0x0B/0x0C/0x0D
 *      anywhere in the note. (A single-backslash "\f"/"\t"/"\r"/"\b"/"\v" in
 *      these JS data strings becomes exactly such a byte before KaTeX runs;
 *      the original bug made KaTeX throw "Unexpected character: '\f'".
 *      Prose newlines 0x0A remain allowed as intentional line breaks.)
 *   2. BOTH bilingual integral snippets present, each with the exponent as
 *      runtime \dfrac{3}{2} -- NOT \frac{3}{2}. History: the original bug was
 *      a raw single-backslash "\frac" (0x0C at runtime); the interim fix
 *      merely doubled the backslash, leaving runtime \frac{3}{2}; the policy
 *      requires \dfrac. KaTeX happily parses \frac{3}{2}, so only this
 *      policy assertion catches it.
 *   3. Each snippet renders under the vendored KaTeX (0.16.11) with no parse
 *      error in both throwOnError modes (the app renders throwOnError:false).
 *
 * The real module is imported and its PARSED strings are inspected (runtime
 * truth: exactly what the app hands to KaTeX). Self-test controls gate the
 * checker first; each control note is bilingual (both halves, like the real
 * note) and its span is written the way the corresponding broken DATA SOURCE
 * evaluated, so JS itself performs the escape-eating:
 *   - BUG_RAW_FRAC_SPAN contains a literal \f escape -> 0x0C + "rac" (the
 *     exact original 12.9 bug value) -> MUST fail;
 *   - BUG_RAW_DFrac_SPAN contains a literal \d escape -> backslash dropped,
 *     "dfrac" without backslash -> MUST fail;
 *   - POLICY_WRONG_FRAC_SPAN is fully escaped but runtime \frac{3}{2}
 *     (KaTeX parses it, policy forbids it) -> MUST fail;
 *   - CORRECT_SPAN (runtime \dfrac{3}{2}) -> MUST pass.
 * A broken checker exits 2 (CONTROL_FAILED) so it can never look green.
 *
 * Exit codes: 0 = note is clean; 1 = real-data violations; 2 = control
 * failure. Node built-ins + the repo's vendored KaTeX only.
 */
import { copyFileSync, mkdtempSync, rmSync } from 'node:fs';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

// Resolve repo files from this script's location so cwd does not matter.
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DATA = join(ROOT, 'data/em/em-u12.js');
const KATEX = join(ROOT, 'vendor/katex/katex.min.js');
const INTEGRAL_MARK = '\\int\\dfrac{r\\,\\mathrm{d}x}'; // runtime form
const CTRL_BYTES = [
  [0x08, 'BS'], [0x09, 'TAB'], [0x0b, 'VT'], [0x0c, 'FF'], [0x0d, 'CR'],
];

function requireKatex() {
  const req = createRequire(import.meta.url);
  const katex = req(KATEX);
  if (typeof katex?.renderToString !== 'function') {
    console.error(`FATAL: vendored KaTeX at ${KATEX} did not load`);
    process.exit(1);
  }
  return katex;
}

function rendersClean(katex, tex, throwOnError) {
  try {
    const html = katex.renderToString(tex, { throwOnError, displayMode: false });
    return { threw: false, errored: html.includes('katex-error') };
  } catch (e) {
    return { threw: true, errored: true, msg: String(e.message).slice(0, 120) };
  }
}

/** Extract the \( ... \) math spans of a runtime note string. */
function inlineMath(note) {
  return [...note.matchAll(/\\\(([\s\S]+?)\\\)/g)].map((m) => m[1]);
}

/**
 * Check one bilingual note's runtime value. Returns violation strings.
 * @param {string} note @param {object} katex @param {string} label
 */
export function checkNote(note, katex, label) {
  const v = [];
  for (const [code, name] of CTRL_BYTES) {
    if (note.includes(String.fromCharCode(code))) {
      v.push(`${label}: control byte 0x${code.toString(16).padStart(2, '0')} (${name}) in runtime string -- a JS-eaten backslash destroyed TeX`);
    }
  }
  const integrals = inlineMath(note).filter((t) => t.includes(INTEGRAL_MARK));
  if (integrals.length !== 2) {
    v.push(`${label}: expected 2 bilingual integral snippets containing ${INTEGRAL_MARK}, found ${integrals.length}`);
  }
  for (const [i, tex] of integrals.entries()) {
    if (!tex.includes('\\dfrac{3}{2}')) {
      v.push(`${label}: integral #${i + 1} exponent is not runtime \\dfrac{3}{2}: ${JSON.stringify(tex)}`);
    }
    if (tex.includes('\\frac{3}{2}')) {
      v.push(`${label}: integral #${i + 1} uses runtime \\frac{3}{2} (standing policy requires \\dfrac): ${JSON.stringify(tex)}`);
    }
    const soft = rendersClean(katex, tex, false);
    const hard = rendersClean(katex, tex, true);
    if (soft.errored || hard.errored) {
      v.push(`${label}: integral #${i + 1} fails KaTeX render: ${JSON.stringify(soft)} / ${JSON.stringify(hard)}`);
    }
  }
  return v;
}

/* ------------------------------------------------------------------ */
/* Self-test controls. Each span is a normal string literal written so */
/* that JS evaluation reproduces the broken data's runtime value.      */
/* ------------------------------------------------------------------ */
// The original 12.9 bug: raw "\f" in the data source -> JS form feed.
// ('\frac' below is a single backslash + f, exactly as the pre-fix file had it.)
const BUG_RAW_FRAC_SPAN = '\\(\\int\\dfrac{r\\,\\mathrm{d}x}{(x^{2}+r^{2})^{\frac{3}{2}}}\\)';
// The same bug with dfrac: raw "\d" in a data source -> JS drops the backslash.
const BUG_RAW_DFrac_SPAN = '\\(\\int\\dfrac{r\\,\\mathrm{d}x}{(x^{2}+r^{2})^{\dfrac{3}{2}}}\\)';
// Fully escaped (KaTeX-valid) but policy-wrong: runtime \frac{3}{2}.
const POLICY_WRONG_FRAC_SPAN = '\\(\\int\\dfrac{r\\,\\mathrm{d}x}{(x^{2}+r^{2})^{\\frac{3}{2}}}\\)';
// The corrected runtime span the data must evaluate to.
const CORRECT_SPAN = '\\(\\int\\dfrac{r\\,\\mathrm{d}x}{(x^{2}+r^{2})^{\\dfrac{3}{2}}}\\)';

// The real note carries the integral in BOTH bilingual halves; model that.
const bilingual = (span) => `把角度积分 ${span} 得 · integrate ${span} to obtain`;

export function selfTest(katex) {
  const failures = [];
  const cases = [
    { name: 'raw single-backslash \\frac (0x0C form feed at runtime, the original 12.9 bug)', note: bilingual(BUG_RAW_FRAC_SPAN), must: 'fail' },
    { name: 'raw single-backslash \\dfrac (JS drops the backslash at runtime)', note: bilingual(BUG_RAW_DFrac_SPAN), must: 'fail' },
    { name: 'escaped-but-policy-wrong runtime \\frac{3}{2} (KaTeX parses it; policy must fail it)', note: bilingual(POLICY_WRONG_FRAC_SPAN), must: 'fail' },
    { name: 'corrected runtime \\dfrac{3}{2}', note: bilingual(CORRECT_SPAN), must: 'pass' },
  ];
  for (const c of cases) {
    const v = checkNote(c.note, katex, `control[${c.name}]`);
    if (c.must === 'fail' && v.length === 0) failures.push(`MISSED (must flag): ${c.name}`);
    if (c.must === 'pass' && v.length !== 0) failures.push(`OVERFLAGGED (must pass): ${c.name} -> ${JSON.stringify(v)}`);
  }
  return failures;
}

/* ------------------------------------------------------------------ */
/* Real-data check                                                     */
/* ------------------------------------------------------------------ */
async function loadRealNote() {
  const dir = mkdtempSync(join(tmpdir(), 'emu12-129-dfrac-'));
  const tmp = join(dir, 'em-u12-under-test.mjs');
  copyFileSync(DATA, tmp);
  try {
    const mod = await import(pathToFileURL(tmp).href);
    const notes = mod.TOPICS['12.9'].derivationNotes ?? [];
    const hit = notes.filter((d) => typeof d?.note === 'string' && d.note.includes(INTEGRAL_MARK));
    return { notes: hit, total: notes.length };
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}

async function main() {
  const katex = requireKatex();
  const controlFailures = selfTest(katex);
  if (controlFailures.length) {
    console.error('CONTROL_FAILED');
    for (const f of controlFailures) console.error('  ' + f);
    console.error('The checker itself is broken; refusing to mark the note green.');
    process.exit(2);
  }
  console.log('SELFTEST_OK (raw \\frac -> 0x0C, raw \\dfrac -> dropped backslash, and policy-wrong \\frac{3}{2} all flagged; corrected value passes)');

  const { notes, total } = await loadRealNote();
  if (notes.length !== 1) {
    console.error('EMU12_129_DFRAC_HITS 1');
    console.error(`expected exactly 1 derivation note in 12.9 containing the integral ${INTEGRAL_MARK}, found ${notes.length} (of ${total} notes)`);
    process.exit(1);
  }
  const violations = checkNote(notes[0].note, katex, 'data/em/em-u12.js 12.9 derivationNotes.note');
  if (violations.length) {
    console.error(`EMU12_129_DFRAC_HITS ${violations.length}`);
    for (const v of violations) console.error('  ' + v);
    process.exit(1);
  }
  console.log('EMU12_129_DFRAC_OK (no control bytes; both bilingual integrals use runtime \\dfrac{3}{2}; KaTeX render clean)');
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main();
}
