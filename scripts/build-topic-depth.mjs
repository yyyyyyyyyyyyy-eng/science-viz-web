#!/usr/bin/env node
/**
 * Build audit/topic-depth.json: a reproducible depth ranking used to pick
 * the next enrichment batch.
 *
 * words = Chinese characters + English word tokens across the fields a
 * student actually reads on a topic page (excluding figures/practice links).
 */
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SUBJECTS = ['bio', 'math', 'mech', 'em'];

function readText(t) {
  return [
    t.definition,
    t.intuition,
    t.intuitionDetailed,
    t.summary,
    ...(t.keyPoints || []),
    ...(t.development || []),
    ...(t.checks || []),
  ]
    .filter((x) => typeof x === 'string')
    .join(' ');
}

function countWords(text) {
  const cn = (text.match(/[\u4e00-\u9fff]/g) || []).length;
  const en = (text.replace(/[\u4e00-\u9fff]/g, ' ').match(/[A-Za-z]+/g) || []).length;
  return cn + en;
}

const enriched = new Set();
for (const f of ['batch1.js', 'batch2.js']) {
  try {
    const mod = await import(`../data/enrichments/${f}`);
    for (const k of Object.keys(mod.ENRICHMENTS || {})) enriched.add(k);
  } catch (_) { /* optional */ }
}

const rows = [];
for (const subject of SUBJECTS) {
  const mod = await import(`../data/${subject}/index.js`);
  for (const t of mod.allTopics()) {
    rows.push({
      id: t.id,
      subject,
      chapterId: t.chapterId,
      code: t.code,
      titleZh: t.titleZh,
      layer: t.layer,
      words: countWords(readText(t)),
      enriched: enriched.has(t.id),
    });
  }
}
rows.sort((a, b) => a.words - b.words || a.id.localeCompare(b.id));

const out = {
  generatedAt: new Date().toISOString(),
  method: 'Chinese chars + English word tokens in definition/intuition/intuitionDetailed/summary/keyPoints/development/checks',
  total: rows.length,
  enrichedCount: rows.filter((r) => r.enriched).length,
  rows,
};
fs.mkdirSync(join(ROOT, 'audit'), { recursive: true });
fs.writeFileSync(join(ROOT, 'audit/topic-depth.json'), JSON.stringify(out, null, 2));
console.log(`topics=${rows.length} enriched=${out.enrichedCount} -> audit/topic-depth.json`);
console.log(rows.filter((r) => !r.enriched).slice(0, 12).map((r) => `${r.words}\t${r.id}\t${r.titleZh}`).join('\n'));
