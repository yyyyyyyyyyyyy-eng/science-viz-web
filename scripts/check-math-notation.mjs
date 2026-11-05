#!/usr/bin/env node
import { readdirSync, readFileSync, statSync } from 'fs';
import { join } from 'path';

const hits = [];
function walk(dir) {
  let names;
  try { names = readdirSync(dir); } catch { return; }
  for (const name of names) {
    if (name === 'node_modules' || name === 'practice') continue;
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p);
    else if (/\.js$/.test(name)) scan(p);
  }
}
function scan(file) {
  const text = readFileSync(file, 'utf8');
  const keys = ['"latex"', '"stemLatex"', '"answerLatex"', '"solutionLatex"'];
  for (const key of keys) {
    let idx = 0;
    while ((idx = text.indexOf(key, idx)) >= 0) {
      const q1 = text.indexOf('"', idx + key.length);
      if (q1 < 0) break;
      let i = q1 + 1;
      let raw = '';
      while (i < text.length) {
        const ch = text[i];
        if (ch === '\\\\') { raw += text[i]+text[i+1]; i += 2; continue; }
        if (ch === '"') break;
        raw += ch; i++;
      }
      const s = raw.replace(/\\\\/g, '\\');
      const stripped = s
        .replace(/\\mathrm\{[^}]*\}/g, '')
        .replace(/\\text\{[^}]*\}/g, '')
        .replace(/\\dfrac\{[^}]*\}\{[^}]*\}/g, 'FRAC')
        .replace(/\\frac\{[^}]*\}\{[^}]*\}/g, 'FRAC');
      if (/[A-Za-z0-9]\/[A-Za-z0-9]/.test(stripped)) {
        hits.push({ file, sample: s.slice(0, 140) });
      }
      idx = i + 1;
    }
  }
}
walk('data');
walk('modules');
if (hits.length) {
  console.error('SLASH_FRACTION_HITS', hits.length);
  for (const h of hits.slice(0, 50)) console.error(h.file, '::', h.sample);
  process.exit(1);
}
console.log('MATH_NOTATION_OK');
