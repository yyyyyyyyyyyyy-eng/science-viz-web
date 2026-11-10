#!/usr/bin/env node
/**
 * Visible-math notation checker.
 *
 * Visible math means:
 *   - latex-like fields (`latex`, `stemLatex`, `answerLatex`, `solutionLatex`,
 *     `textLatex`, …), including practice banks and figure `tex` arguments;
 *   - KaTeX delimiters \(...\), \[...\] and $$...$$ in prose and captions;
 *   - the raw `tex` argument of physics figure definitions.
 *
 * Slash fractions in those strings must be written with \dfrac{...}{...}
 * (or \frac{...}{...} inside an exponent / tight inline sub-expression).
 *
 * Allowed slashes (documented allowlist):
 *   - units and rates: m/s, m/s^2, m/s^{2}, km/h, km/s, ft/s, J/kg, J/mol,
 *     N/m, N/C, N/kg, C/s, C/kg, kg/m^3, kg/m, g/L, mg/dL, mol/L, A/m, V/m,
 *     W/m^2, rad/s, rad/s^2, °C, kcal/m^2/yr, E/MSY and similar SI-style
 *     compound unit expressions (also when wrapped in \mathrm{...});
 *   - chemical alternatives / species pairs: NH_3/NH_4^+, N_2O/N_2,
 *     O_2/CO_2, K^+/Na^+, NAD^+/NADH, ATP/ADP, …;
 *   - relative-motion notation in a subscript, e.g. \vec v_{A/B}.
 *
 * Lab-track files are skipped (modules/physics/lab/**, scripts/test-physics-lab*)
 * so that track can fix its own notation independently.
 *
 * Node built-ins only; no dependencies.
 */
import { readdirSync, readFileSync, statSync } from 'fs';
import { join } from 'path';

const SKIP_PATH = /(^|\/)(node_modules|lab)(\/|$)|scripts\/test-physics-lab[^/]*\.mjs$/;
const hits = [];

function walk(dir) {
  let names;
  try { names = readdirSync(dir); } catch { return; }
  for (const name of names) {
    const p = join(dir, name);
    if (SKIP_PATH.test(p)) continue;
    const st = statSync(p);
    if (st.isDirectory()) walk(p);
    else if (/\.js$/.test(name)) scan(p);
  }
}
function lineAt(text, idx) { return text.slice(0, idx).split('\n').length; }

/** Extract JS string literals, skipping comments and replacing ${...} with X. */
function literals(text) {
  const out = [];
  for (let i = 0; i < text.length; i++) {
    if (text[i] === '/' && text[i + 1] === '/') {
      while (i < text.length && text[i] !== '\n') i++;
      continue;
    }
    if (text[i] === '/' && text[i + 1] === '*') {
      i += 2;
      while (i < text.length && !(text[i] === '*' && text[i + 1] === '/')) i++;
      i++;
      continue;
    }
    const q = text[i];
    if (q !== '"' && q !== "'" && q !== '`') continue;
    const start = i;
    i++;
    let raw = '';
    while (i < text.length) {
      const ch = text[i];
      if (ch === '\\') { raw += text[i] + (text[i + 1] ?? ''); i += 2; continue; }
      if (ch === q) break;
      if (q === '`' && ch === '$' && text[i + 1] === '{') {
        let depth = 1;
        i += 2;
        while (i < text.length && depth > 0) {
          if (text[i] === '{') depth++;
          else if (text[i] === '}') depth--;
          else if (text[i] === '"' || text[i] === "'" || text[i] === '`') {
            const qq = text[i];
            i++;
            while (i < text.length) {
              if (text[i] === '\\') { i += 2; continue; }
              if (text[i] === qq) { i++; break; }
              i++;
            }
            continue;
          }
          i++;
        }
        raw += 'X';
        continue;
      }
      raw += ch;
      i++;
    }
    out.push({ raw, start, end: i });
  }
  return out;
}
function keyBefore(text, start) {
  const pre = text.slice(Math.max(0, start - 240), start);
  const m = pre.match(/["']?([A-Za-z0-9_$]+)["']?\s*:\s*$/);
  return m ? m[1] : null;
}
/** Ranges (start, end) of a call argument, used for figure `tex` fields. */
function callArgRanges(text, names, argIndex) {
  const ranges = [];
  const re = new RegExp('\\b(?:' + names.join('|') + ')\\s*\\(', 'g');
  let m;
  while ((m = re.exec(text))) {
    let i = m.index + m[0].length;
    let depth = 1;
    let cur = i;
    let idx = 0;
    while (i < text.length && depth > 0) {
      const ch = text[i];
      if (ch === '"' || ch === "'" || ch === '`') {
        const q = ch;
        i++;
        while (i < text.length) {
          if (text[i] === '\\') { i += 2; continue; }
          if (text[i] === q) { i++; break; }
          i++;
        }
        continue;
      }
      if (ch === '(') depth++;
      else if (ch === ')') { depth--; if (!depth) break; }
      else if (ch === ',' && depth === 1) {
        if (idx === argIndex) ranges.push([cur, i]);
        idx++;
        cur = i + 1;
      }
      i++;
    }
    if (idx === argIndex) ranges.push([cur, i]);
  }
  return ranges;
}

/* ---------- unit / chemical / notation allowlists ---------- */
const BASE_UNITS = [
  'mol', 'cd', 'Hz', 'Pa', 'Gy', 'Sv', 'kat', 'eV', 'bar', 'atm', 'Torr',
  'psi', 'rpm', 'kcal', 'cal', 'Wh', 'Da', 'bp', 'kb', 'Mb', 'GB', 'MB',
  'KB', 'kB', 'bit', 'dpi', 'min', 'hr', 'yr', 'rad', 'sr', 'lm', 'lx',
  'Bq', 'px', 'dp', 'm', 's', 'g', 'A', 'K', 'N', 'J', 'W', 'C', 'V', 'F',
  'Ω', 'S', 'Wb', 'T', 'H', 'L', 'l', 'B', 'M', 'd', 'h', 'u', 'E', 'MSY',
  'ft', 'mi', 'in', 'yd', 'lb', 'oz', 'c', '°C', '°F', '℃', '%', '‰',
];
const PREFIX = '(?:Y|Z|E|P|T|G|M|k|h|da|d|c|m|µ|μ|n|p|f|a|z|y)?';
const UNIT_ATOM = new RegExp(
  '^' + PREFIX + '(?:' + BASE_UNITS.map((u) => u.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + ')[0-9]*$',
  'i',
);
function isUnitAtom(s) {
  s = s.replace(/[{}^_\s\\,;:!·×()\[\]]/g, '').replace(/cdot/g, '');
  if (!s) return false;
  if (s === 'E/MSY') return true;
  return UNIT_ATOM.test(s);
}
function isUnitExpr(s) {
  s = s.replace(/\\[,;:! ]/g, '·').replace(/\\cdot/g, '·').replace(/\\times/g, '×').trim();
  if (!s) return false;
  if (/^E\/MSY$/i.test(s)) return true;
  const parts = s.split(/[/·×]/);
  return parts.length > 1 && parts.every((p) => isUnitAtom(p));
}
/** Expand around a slash to a contiguous unit-ish expression (kcal/m^2/yr). */
function unitSpan(s, i) {
  const ok = /[A-Za-z0-9°µμΩÅ{}^_\\,;:!·×/()%‰]/;
  let a = i;
  let b = i + 1;
  while (a > 0 && ok.test(s[a - 1])) a--;
  while (b < s.length && ok.test(s[b])) b++;
  return s.slice(a, b);
}
function normalizeChem(s) {
  return s.replace(/\\mathrm\{/g, '').replace(/\\text\{/g, '').replace(/[{}^_\s\\,]/g, '');
}
const ELEMENTS = 'H|He|Li|Be|B|C|N|O|F|Ne|Na|Mg|Al|Si|P|S|Cl|Ar|K|Ca|Sc|Ti|V|Cr|Mn|Fe|Co|Ni|Cu|Zn|Ga|Ge|As|Se|Br|Kr|Rb|Sr|Y|Zr|Nb|Mo|Tc|Ru|Rh|Pd|Ag|Cd|In|Sn|Sb|Te|I|Xe|Cs|Ba|La|Ce|Pr|Nd|Pm|Sm|Eu|Gd|Tb|Dy|Ho|Er|Tm|Yb|Lu|Hf|Ta|W|Re|Os|Ir|Pt|Au|Hg|Tl|Pb|Bi|Po|At|Rn|Fr|Ra|Ac|Th|Pa|U|Np|Pu|Am|Cm|Bk|Cf|Es|Fm|Md|No|Lr';
const CHEM_RE = new RegExp('^(?:' + ELEMENTS + ')(?:[0-9]*[A-Z][a-z]?[0-9]*|[0-9]+|[+-])*$');
const CHEM_ABBR = new Set(['ATP', 'ADP', 'AMP', 'NAD', 'NADH', 'NADP', 'NADPH', 'FAD', 'FADH', 'DNA', 'RNA', 'mRNA', 'tRNA', 'GTP', 'GDP', 'CoA', 'PGA', 'G3P', 'RuBP', 'PQ', 'PC', 'Q']);
function isChem(s) {
  const t = normalizeChem(s);
  if (!t || t.length > 24) return false;
  if (CHEM_ABBR.has(t.replace(/[+-]+$/, ''))) return true;
  if (!/^[A-Z]/.test(t)) return false;
  if (!CHEM_RE.test(t)) return false;
  const letters = t.replace(/[0-9+\-]/g, '');
  // A bare single letter is normally a math variable, not a species.
  if (letters.length === 1 && !/[0-9+\-]/.test(t)) return false;
  return true;
}

/* ---------- brace-aware helpers ---------- */
function stripText(s) {
  let out = '';
  let i = 0;
  while (i < s.length) {
    const cmd = s.startsWith('\\text{', i) ? 6 : s.startsWith('\\operatorname{', i) ? 14 : 0;
    if (cmd) {
      i += cmd;
      let d = 1;
      while (i < s.length && d > 0) {
        if (s[i] === '{') d++;
        else if (s[i] === '}') d--;
        i++;
      }
      out += 'TXT';
      continue;
    }
    out += s[i++];
  }
  return out;
}
function stripUnitMathrm(s) {
  let out = '';
  let i = 0;
  while (i < s.length) {
    if (s.startsWith('\\mathrm{', i)) {
      let j = i + 8;
      let d = 1;
      let content = '';
      while (j < s.length && d > 0) {
        if (s[j] === '{') { d++; content += '{'; }
        else if (s[j] === '}') { d--; if (!d) break; content += '}'; }
        else content += s[j];
        j++;
      }
      out += isUnitExpr(content) ? 'UNIT' : s.slice(i, j + 1);
      i = j + 1;
      continue;
    }
    out += s[i++];
  }
  return out;
}
function insideSubscriptRelative(s, slash) {
  let d = 0;
  for (let i = slash - 1; i >= 0; i--) {
    if (s[i] === '}') d++;
    else if (s[i] === '{') {
      if (d === 0) {
        const pre = s.slice(Math.max(0, i - 2), i);
        if (pre !== '_{' && pre !== '^{') return false;
        const close = s.indexOf('}', slash);
        const content = s.slice(i + 1, close < 0 ? s.length : close);
        return /^[A-Z]\/[A-Z]$/.test(content);
      }
      d--;
    }
  }
  return false;
}
function tokenLeft(s, i) {
  let j = i - 1;
  while (j >= 0 && /\s/.test(s[j])) j--;
  if (j < 0) return '';
  if (s[j] === ')') {
    let d = 0;
    let k = j;
    for (; k >= 0; k--) {
      if (s[k] === ')') d++;
      else if (s[k] === '(') { d--; if (!d) break; }
    }
    let st = k;
    while (st > 0 && /[A-Za-z0-9]/.test(s[st - 1])) st--;
    return s.slice(st, j + 1);
  }
  if (s[j] === '}') {
    let d = 0;
    let k = j;
    for (; k >= 0; k--) {
      if (s[k] === '}') d++;
      else if (s[k] === '{') { d--; if (!d) break; }
    }
    let st = k;
    while (st > 0 && /[A-Za-z]/.test(s[st - 1])) st--;
    if (st > 0 && s[st - 1] === '\\') st--;
    return s.slice(st, j + 1);
  }
  let k = j;
  while (k >= 0 && !/[\s{}()\[\],;:='"]/.test(s[k])) k--;
  return s.slice(k + 1, j + 1);
}
function tokenRight(s, i) {
  let j = i + 1;
  while (j < s.length && /\s/.test(s[j])) j++;
  if (j >= s.length) return '';
  if (s[j] === '\\') {
    let k = j + 1;
    while (k < s.length && /[A-Za-z]/.test(s[k])) k++;
    if (s[k] === '{') {
      let d = 1;
      let e = k + 1;
      while (e < s.length && d > 0) {
        if (s[e] === '{') d++;
        else if (s[e] === '}') d--;
        e++;
      }
      return s.slice(j, e);
    }
    return s.slice(j, k);
  }
  if (s[j] === '(') {
    let d = 0;
    let k = j;
    for (; k < s.length; k++) {
      if (s[k] === '(') d++;
      else if (s[k] === ')') { d--; if (!d) break; }
    }
    return s.slice(j, k + 1);
  }
  if (s[j] === '{') {
    let d = 0;
    let k = j;
    for (; k < s.length; k++) {
      if (s[k] === '{') d++;
      else if (s[k] === '}') { d--; if (!d) break; }
    }
    return s.slice(j, k + 1);
  }
  let k = j;
  while (k < s.length && !/[\s{}()\[\],;:=+\-]/.test(s[k])) {
    if (s[k] === '}' && s[k - 1] !== '\\') break;
    k++;
  }
  return s.slice(j, k);
}

function checkMath(original, file, line, kind) {
  const s = stripUnitMathrm(stripText(original));
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== '/') continue;
    if (i > 0 && s[i - 1] === '\\') continue;
    const left = tokenLeft(s, i).trim();
    const right = tokenRight(s, i).trim();
    if (!left || !right) continue;
    if (/^(?:https?|#|\.{0,2}\/)/.test(left + '/' + right)) continue;
    if (s.slice(Math.max(0, i - 10), i + 10).includes('://')) continue;
    if (isUnitExpr(unitSpan(s, i)) || isUnitExpr(left + '/' + right) || (isUnitAtom(left) && isUnitAtom(right))) continue;
    if (isChem(left) && isChem(right)) continue;
    if (insideSubscriptRelative(s, i)) continue;
    hits.push({
      file,
      line,
      kind,
      token: `${left}/${right}`,
      sample: original.slice(0, 180).replace(/\n/g, ' '),
    });
  }
}

function scan(file) {
  const text = readFileSync(file, 'utf8');
  const isExamFigures = /modules\/physics\/exam-figures\.js$/.test(file);
  const examTex = isExamFigures
    ? callArgRanges(text, ['def', 'defI', 'defH', 'defImg'], 2)
    : [];
  const formulaTex = callArgRanges(text, ['formula'], 1);
  for (const lit of literals(text)) {
    const key = keyBefore(text, lit.start);
    const line = lineAt(text, lit.start);
    const s = lit.raw.replace(/\\\\/g, '\\');
    if (key && /latex$/i.test(key)) {
      checkMath(s, file, line, `key:${key}`);
      continue;
    }
    if (examTex.some(([a, b]) => lit.start >= a && lit.end <= b)) {
      checkMath(s, file, line, 'figure-tex');
      continue;
    }
    if (formulaTex.some(([a, b]) => lit.start >= a && lit.end <= b)) {
      checkMath(s, file, line, 'formula-tex');
      continue;
    }
    // Math regions are extracted from every string, so prose fields,
    // figure captions (def/idef/setCap/FIGURE_ZH) and labels are covered.
    const re = /\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]|\$\$([\s\S]*?)\$\$/g;
    let m;
    while ((m = re.exec(s))) {
      checkMath(m[1] ?? m[2] ?? m[3], file, line, 'prose-math');
    }
  }
}

walk('data');
walk('modules');
if (hits.length) {
  console.error('SLASH_FRACTION_HITS', hits.length);
  for (const h of hits.slice(0, 80)) {
    console.error(`${h.file}:${h.line} [${h.kind}] ${h.token} :: ${h.sample}`);
  }
  process.exit(1);
}
console.log('MATH_NOTATION_OK');
