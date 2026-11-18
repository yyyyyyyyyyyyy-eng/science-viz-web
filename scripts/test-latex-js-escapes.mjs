#!/usr/bin/env node
/**
 * JS-escape / TeX-control regression check for every data/*.js string.
 *
 * Bug class (seen live twice):
 *   - #/t/em/em-u12/12.9, data/em/em-u12.js:1868: a TeX control written with
 *     a SINGLE backslash inside a JS string literal. The JS parser eats the
 *     backslash before KaTeX ever sees it:
 *       - \f \n \t \r \b \v become control bytes (e.g. "\frac" -> FF + "rac");
 *       - any other "\<letter>" (e.g. "\dfrac", "\mu", "\sin") silently drops
 *         the backslash ("dfrac", "mu", "sin").
 *   - #/t/math/calc-u9/9.7, data/enrichments/batch2.js:10267 (keyPoints):
 *     four single-backslash \theta inside otherwise doubled \\( ... \\) math.
 *     JS parsed "\t" as TAB, so KaTeX received "x(<TAB>heta)" and silently
 *     rendered "x(heta)" with NO .katex-error (KaTeX 0.16 tolerates TAB).
 *
 * Either way the TeX control is destroyed; KaTeX throws on FF but TOLERATES
 * tab/CR/LF, so the tab and LF variants are invisible at runtime -- only a
 * source-level scan can catch every variant. That is this script's job.
 *
 * Scope: every .js file under data/ (recursively): topic units, practice
 * banks, enrichments, figures. No file is silently exempted. Top-level code
 * directories (e.g. modules/) are NOT scanned: their regex word-boundaries
 * (\b) are code, not data strings.
 *
 * FAILURES:
 *   - unpaired backslash before a letter, except the documented allowances
 *     below. TeX control sequences start with a letter, so this is exactly
 *     the destroyed-TeX class (form-feed \frac, tab \theta, dropped \dfrac).
 *   - unpaired \n INSIDE an inline \( ... \) span. Intentional line breaks
 *     in prose and inside display \[ ... \] spans are legal (the app renders
 *     them; KaTeX accepts newlines there), but inline spans in this repo
 *     are single-line, and a single "\nu"/"\neq" inside one becomes
 *     LF + "u"/"eq".
 * ALLOWED (not failures):
 *   - \" or \' matching the enclosing quote (escaped quote);
 *   - valid JS \xHH, \uHHHH, \u{H...} escapes;
 *   - unpaired \n outside inline \( ... \) spans (intentional line breaks,
 *     including inside display \[ ... \] spans);
 *   - unpaired backslash before a non-letter (e.g. JSON-style "\/", digits,
 *     punctuation): not the start of any TeX control sequence.
 *
 * Self-test controls run BEFORE the tree scan and gate the checker itself:
 *   - raw "\frac" (byte-exact em-u12 bug), raw "\theta" (byte-exact
 *     pre-fix batch2.js:10267 keyPoint), a raw in-span "\nu" and a raw
 *     "\dfrac" fixture MUST each be flagged;
 *   - correctly doubled TeX (including \theta and ^{\dfrac{3}{2}}), the
 *     byte-exact POST-FIX batch2.js:10267 keyPoint, intentional prose "\n",
 *     display-span "\n" and a valid "\u4e2d" MUST NOT be flagged.
 * A broken checker exits 2 (CONTROL_FAILED) so it can never masquerade as a
 * green run; nothing unknown is marked green. A scan that finds no data
 * files at all also exits 2 rather than reporting a vacuous green.
 *
 * Exit codes: 0 = clean; 1 = findings in data/; 2 = self-control failure.
 * Node built-ins only; no dependencies.
 *
 * Note: this script guards backslash PARITY (JS-escape correctness) across
 * all data files. The 12.9 note additionally requires runtime
 * \dfrac{3}{2} (standing fraction policy, not merely \frac{3}{2}); that
 * policy-level and KaTeX-render regression is guarded by the companion
 * script test-em-u12-129-dfrac.mjs.
 */
import { readdirSync, readFileSync, statSync } from 'fs';
import { join } from 'path';
import { pathToFileURL } from 'url';

const HEX2 = /^[0-9a-fA-F]{2}/;
const HEX4 = /^[0-9a-fA-F]{4}(?![0-9a-fA-F])/;
const HEXBRACE = /^\{[0-9a-fA-F]{1,6}\}/;
const INLINE_SPAN = /\\\\\(([\s\S]*?)\\\\\)/g; // raw \\( ... \\) in source

/**
 * Extract top-level string literals from JS source, skipping line and block
 * comments. Inside template literals, ${ ... } interpolation regions are
 * skipped (brace-depth counted) so embedded code is never mistaken for
 * literal content.
 * @yields {{raw: string, quote: string, start: number}}
 */
export function* literals(text) {
  let i = 0;
  let litStart = -1;
  let quote = '';
  while (i < text.length) {
    const c = text[i];
    if (litStart === -1) {
      if (c === '/' && text[i + 1] === '/') {
        while (i < text.length && text[i] !== '\n') i++;
        continue;
      }
      if (c === '/' && text[i + 1] === '*') {
        i += 2;
        while (i < text.length && !(text[i] === '*' && text[i + 1] === '/')) i++;
        i += 2;
        continue;
      }
      if (c === '"' || c === "'" || c === '`') {
        litStart = i;
        quote = c;
      }
    } else if (quote === '`' && c === '$' && text[i + 1] === '{') {
      let depth = 1;
      i += 2;
      while (i < text.length && depth > 0) {
        if (text[i] === '{') depth++;
        else if (text[i] === '}') depth--;
        i++;
      }
      continue;
    } else if (c === '\\') {
      i += 2;
      continue;
    } else if (c === quote) {
      yield { raw: text.slice(litStart + 1, i), quote, start: litStart };
      litStart = -1;
    }
    i++;
  }
}

/**
 * Scan one literal's raw source text for unpaired-backslash TeX damage.
 * @returns {Array<{letter: string, at: number, snippet: string, rule: string}>}
 */
export function classifyLiteral(raw, quote) {
  const out = [];
  // Inline \( ... \) span ranges, in raw coordinates.
  const spans = [];
  for (const m of raw.matchAll(INLINE_SPAN)) {
    spans.push([m.index + 3, m.index + 3 + m[1].length]);
  }
  for (let i = 0; i < raw.length; i++) {
    if (raw[i] !== '\\') continue;
    let j = i;
    let run = 0;
    while (j < raw.length && raw[j] === '\\') { run++; j++; }
    if (run % 2 === 1) {
      const next = raw[j];
      if (next === quote) { i = j - 1; continue; } // \" inside its own literal
      if (/[A-Za-z]/.test(next)) {
        const rest = raw.slice(j + 1);
        if (next === 'x' && HEX2.test(rest)) { i = j - 1; continue; } // JS \xHH
        if (next === 'u' && (HEX4.test(rest) || HEXBRACE.test(rest))) { i = j - 1; continue; } // JS \uHHHH
        if (next === 'n') {
          const inInline = spans.some(([a, b]) => i >= a && i < b);
          if (!inInline) { i = j - 1; continue; } // intentional line break
          out.push({ letter: next, at: i, snippet: raw.slice(j, j + 16), rule: 'single \\n inside inline \\(...\\) span (eaten \\nu/\\neq-class TeX)' });
        } else {
          out.push({ letter: next, at: i, snippet: raw.slice(j, j + 16), rule: `single backslash before '${next}': JS eats it before KaTeX (control byte or dropped backslash)` });
        }
      }
    }
    i = j - 1;
  }
  return out;
}

/** Scan one file's text; returns findings with file-relative line numbers. */
export function scanText(text, file) {
  const hits = [];
  for (const lit of literals(text)) {
    for (const f of classifyLiteral(lit.raw, lit.quote)) {
      const line = text.slice(0, lit.start + 1 + f.at).split('\n').length;
      hits.push({ file, line, ...f });
    }
  }
  return hits;
}

/* ------------------------------------------------------------------ */
/* Self-test controls: the checker must catch the real bug signatures  */
/* and must stay quiet on legitimate escapes, or it is broken.         */
/* ------------------------------------------------------------------ */
const CONTROL_MUST_FAIL = [
  {
    name: 'em-u12 bug: raw \\frac in exponent (form feed at runtime)',
    // Byte-exact copy of the pre-fix em-u12.js:1868 math segment.
    raw: String.raw`\\(\\int\\dfrac{r\\,\\mathrm{d}x}{(x^{2}+r^{2})^{\frac{3}{2}}}\\)`,
    quote: '"',
  },
  {
    name: 'raw \\theta (tab at runtime, silent "heta")',
    // Byte-exact copy of the pre-fix batch2.js:10267 keyPoint
    // ('math/calc-u9/9.7', keyPoints[0]): four single-backslash \theta.
    raw: String.raw`先写 \\(x(\theta)\\)、\\(y(\theta)\\)，再求 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\) · Write \\(x(\theta)\\) and \\(y(\theta)\\) first, then find \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\)`,
    quote: "'",
  },
  {
    name: 'raw \\nu inside inline span (LF at runtime)',
    raw: String.raw`动量为 \\(\nu = mv\\)`,
    quote: '"',
  },
  {
    name: 'raw \\dfrac (JS drops the backslash; bare "dfrac" reaches KaTeX)',
    raw: String.raw`\\(\\int\\dfrac{r\\,\\mathrm{d}x}{(x^{2}+r^{2})^{\dfrac{3}{2}}}\\)`,
    quote: '"',
  },
];
const CONTROL_MUST_PASS = [
  {
    name: 'correctly doubled TeX (incl. \\dfrac and ^{\\dfrac{3}{2}})',
    raw: String.raw`\\(\\int\\dfrac{r\\,\\mathrm{d}x}{(x^{2}+r^{2})^{\\dfrac{3}{2}}}\\)`,
    quote: '"',
  },
  {
    name: 'correctly doubled \\theta (byte-exact post-fix batch2.js keyPoint)',
    raw: String.raw`先写 \\(x(\\theta)\\)、\\(y(\\theta)\\)，再求 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\) · Write \\(x(\\theta)\\) and \\(y(\\theta)\\) first, then find \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\)`,
    quote: "'",
  },
  {
    name: 'intentional prose line break',
    raw: String.raw`第一行\n第二行 A reference frame is ...`,
    quote: '"',
  },
  {
    name: 'line break inside display \\[ ... \\] span',
    raw: String.raw`text \\[\n  I = \\int i\\,\\mathrm{d}t\n\\] more`,
    quote: '"',
  },
  {
    name: 'valid JS unicode escape',
    raw: String.raw`value \u4e2d here`,
    quote: '"',
  },
  {
    name: 'JSON-style escaped slash and quotes',
    raw: String.raw`a\/b \"quoted\" c\\d`,
    quote: '"',
  },
];

export function selfTest() {
  const failures = [];
  for (const c of CONTROL_MUST_FAIL) {
    const hits = classifyLiteral(c.raw, c.quote);
    if (hits.length === 0) failures.push(`MISSED (must flag): ${c.name}`);
  }
  for (const c of CONTROL_MUST_PASS) {
    const hits = classifyLiteral(c.raw, c.quote);
    if (hits.length !== 0) failures.push(`OVERFLAGGED (must pass): ${c.name} -> ${JSON.stringify(hits)}`);
  }
  return failures;
}

/* ------------------------------------------------------------------ */
/* Tree scan                                                           */
/* ------------------------------------------------------------------ */
function walk(dir, out = []) {
  let names;
  try { names = readdirSync(dir); } catch { return out; }
  for (const name of names) {
    const p = join(dir, name);
    let st;
    try { st = statSync(p); } catch { continue; }
    if (st.isDirectory()) walk(p, out);
    else if (name.endsWith('.js')) out.push(p);
  }
  return out;
}

function main() {
  const controlFailures = selfTest();
  if (controlFailures.length) {
    console.error('CONTROL_FAILED');
    for (const f of controlFailures) console.error('  ' + f);
    console.error('The checker itself is broken; refusing to mark anything green.');
    process.exit(2);
  }
  console.log('SELFTEST_OK (raw \\frac / \\dfrac / \\theta / in-span \\nu fixtures all flagged; clean fixtures incl. doubled \\theta and prose \\n all pass)');

  const files = walk('data');
  if (files.length === 0) {
    console.error('CONTROL_FAILED');
    console.error('  No .js files found under data/ -- wrong working directory?');
    console.error('Refusing to report a vacuous green.');
    process.exit(2);
  }

  const hits = [];
  for (const file of files) {
    hits.push(...scanText(readFileSync(file, 'utf8'), file));
  }
  if (hits.length) {
    console.error(`LATEX_JS_ESCAPE_HITS ${hits.length}`);
    for (const h of hits) {
      console.error(`${h.file}:${h.line} [\\${h.letter}] ${h.rule}`);
      console.error(`  context: ${JSON.stringify(h.snippet)}`);
    }
    console.error('Each hit is a TeX control written with a single JS-eaten backslash; double it (\\\\) in the source.');
    process.exit(1);
  }
  console.log(`LATEX_JS_ESCAPES_OK (${files.length} data .js files scanned, 0 destroyed-TeX escapes)`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main();
}
