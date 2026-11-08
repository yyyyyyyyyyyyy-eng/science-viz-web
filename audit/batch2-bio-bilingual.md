# batch2 Bio bilingual sweep (2026-11-08)

Scope: `data/enrichments/batch2.js` only, plus this audit and targeted screenshots.
Base: web `97f975e`.

## What changed

All 14 Bio overlays listed for this round now render Chinese first and English second on the same page:

`bio/bio-u6/6.7`, `bio/bio-u7/7.11`, `bio/bio-u1/1.2`, `bio/bio-u2/2.10`,
`bio/bio-u3/3.6`, `bio/bio-u5/5.2`, `bio/bio-u5/5.5`, `bio/bio-u6/6.6`,
`bio/bio-u7/7.6`, `bio/bio-u7/7.8`, `bio/bio-u7/7.13`, `bio/bio-u8/8.1`,
`bio/bio-u8/8.6`, `bio/bio-u8/8.7`.

Covered fields: learning objectives, essential knowledge, definition, intuition,
intuition detail, formula notes, derivation notes, connections, conditions, key
points, misconceptions, example titles/prompts/steps/solutions, exam tips,
related titles and relations, development, checks, and summary.

### 6.7 and 7.11 leftovers

- `bio/bio-u6/6.7`: examples (sickle cell, frameshift, silent mutation) and exam
  tips are bilingual. Related links keep `6.6`, `6.2`, `6.4`, `6.8`, `7.1`;
  `6.2`, `6.4`, and `7.1` now have English titles and relations.
- `bio/bio-u7/7.11`: examples (K–Pg, background vs mass extinction, habitat
  protection) and exam tips are bilingual. Related links keep `7.9`, `7.10`,
  `7.12`, `8.6`; `7.9` and `7.10` now have English titles and relations.
- Both overlays gained a topic-specific bilingual `connections` array that
  replaces the generic source slogan in the shallow merge. Mutation connections
  cover replication/translation, selection/population genetics, and
  biotechnology/medicine; extinction connections cover phylogeny/speciation,
  biodiversity, and conservation priorities.

No examples were invented. The existing three examples per overlay were
extended in place.

### Related titles

Every related link pointing at `8.6` stays `生物多样性 · Biodiversity`.
`5.6` and `7.12` were already bilingual and were not rewritten.

## Validation

1. `node --check data/enrichments/batch2.js` — pass.
2. Key count unchanged at 135; key order unchanged; no key added or removed.
   Field sets unchanged except the two required `connections` additions on
   `6.7` and `7.11`. No `vocabulary` field was added.
3. Student-facing string sweep over the 14 overlays: 0 Chinese-only and 0
   English-only strings (formula `latex` / `solutionLatex` values excluded as
   language-neutral single copies). No banned slogan lines. No `÷`.
4. Formula check: every added or changed fraction uses `\dfrac`; no slash
   fractions were introduced.
5. Targeted Playwright (`python3 scripts/serve-dev.py . 8904`), desktop
   1280×900, light theme:
   - 6.7, 7.11, 1.2, 5.5, 6.6, 7.13, 8.6, 8.7.
   - All pages: Chinese and English visible together, 0 `.katex-error`,
     0 console/page errors, 0 horizontal overflow.
6. Screenshots: `screenshots/batch2-bio-bilingual/` (8 PNGs).

## Files touched

- `data/enrichments/batch2.js`
- `audit/batch2-bio-bilingual.md`
- `screenshots/batch2-bio-bilingual/`

No changes to `batch1.js`, source topic files, `js/topic-page.js`,
`data/enrichments/merge.js`, simulators, CSS, exam figures, mindmap, the
practice bank, or `desktop/`.
