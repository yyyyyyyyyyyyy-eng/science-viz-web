# Content / correctness bug hunt — 2026-11-08

Scope: `data/enrichments/batch2.js`, `data/math/practice/**`,
`scripts/math-practice-templates.mjs`, `scripts/build-practice-v9.mjs`,
`data/shared/practice-build-summary.json`, and topic-body fixes in
`data/bio/**`, `data/math/**`, `data/mech/**`, `data/em/**` (figure files
excluded). Baseline: web `768aa75` / app `12e4841`; work landed on top of
web `914fe0a`.

## Findings and fixes

### 1. Batch 2 still showed template teaching blocks on 52 pages

`data/enrichments/batch2.js` had 106 entries; 52 of them omitted both
`learningObjectives` and `essentialKnowledge`, so the base-topic template
(including `准确陈述定义、适用范围与符号约定。`) still rendered on those
enriched pages.

- Added topic-specific `learningObjectives` (3 each) and
  `essentialKnowledge` (5 each) to all 52 entries, using the entry's own
  definition, formulas and conditions.
- Batch 2 now has 106/106 entries with both fields and **zero** hits for
  the generic slogan.
- Verified KaTeX rendering for all inline math in the new blocks and for
  every batch-2 formula: 701 strings, 0 errors.

### 2. Calc BC practice checker mismatches (`calc-u7`)

18 symbolic items had `expected` strings that mathjs cannot parse, so
"检查等价" could never accept a correct answer:

| Item(s) | Old `expected` | New handling |
|---|---|---|
| `calc-u7-q006` | `y'=1=y-x` | verification item is now answer-only (no fake symbolic input) |
| `calc-u7-q007` | `y=Ce^{kx}` | `C*e^(k*x)` |
| `calc-u7-q008`, `q012`, `q016`, `q020`, `q024`, `q028`, `q032`, `q036`, `q040`, `q044`, `q048`, `q052`, `q056`, `q060`, `q064`, `q068` | `Ce^{2x}` | `C*e^(2*x)` |

Also fixed the same sources in `scripts/math-practice-templates.mjs`, plus
a latent template item ("黎曼和极限定义") whose `expected` was English
prose rather than a mathjs expression; it is now answer-only.

All 15 banks now have parseable symbolic `expected` values (0 failures).
Verified in Playwright on `#/math/practice/calc-u7`:

- `q006` (“特解检验”) has no input field.
- `q007` accepts `C*e^(k*x)` → 等价正确.
- `q008` accepts `C e^(2x)` → 等价正确.
- `q012` accepts `C*e^(2*x)` → 等价正确.

### 3. Raw LaTeX leaked into example titles (8 entries)

Example `title` fields are rendered as plain text, but eight batch-2
titles contained `\(...\)`, so students saw literal backslashes. Replaced
with plain titles, e.g. `例 1 · 斜率为 x`, `例 3 · 对 y 积分`,
`例 1 · 绕 x 轴`.

### 4. Off-topic / placeholder formulas across math topic bodies

89 formula blocks in indexed math topics still showed the generic
`\dfrac{\mathrm{d}y}{\mathrm{d}x}=f'(x)` (or a Riemann-sum definition on
an integral-test page). Replaced with the named topic's core relation:

- `calc-u1` 6, `calc-u2` 3, `calc-u4` 2, `calc-u5` 8, `calc-u6` 1,
  `calc-u7` 5, `calc-u8` 8, `calc-u9` 1, `calc-u10` 15.
- `math-prep-alg1` 11, `math-prep-alg2` 12, `math-prep-geo` 10,
  `math-prep-precalc` 7.

Examples: MVT `f'(c)=...`, Euler step, separation of variables, washer
method, series tests (geometric / p-series / ratio / alternating error),
Taylor and Lagrange remainder, vertex and quadratic formula, matrix
multiplication, polar/parametric conversions.

All 178 math topic formulas render in KaTeX (0 errors), and
`node scripts/check-math-notation.mjs` reports `MATH_NOTATION_OK`.

### 5. Wrong-topic formula on a bio prep page

`data/bio/bio-prep-cell.js` P2.5 “光合与呼吸入门” displayed the pH
formula and a generic placeholder. Replaced with the photosynthesis and
aerobic-respiration summary equations (and fixed the matching
`solutionLatex`). All 188 bio topic formulas render in KaTeX.

### 6. Unicode vulgar fractions in cross-link text

Replaced four `½` occurrences in `data/mech/cross-links.js` and
`data/em/cross-links.js` with `0.5` in plain-text summaries/examples.

### 7. Practice-bank notation sweep

- 15 banks / 962 items; `practice-build-summary.json` still matches
  (15 banks, 962 items, 804 AP + 158 prep). No rebuild was needed.
- No `÷`, no unicode vulgar fractions, and no slash fractions in
  student-facing stems/solutions. Remaining `/` uses are valid notation
  (`(f/g)′(1)`, `dy/dx`, unit strings such as `m/s`).
- No `\frac`/`\tfrac` in practice banks; displayed math uses `\dfrac`.
- Numeric `expected` values reviewed against answers; the flagged items
  were LaTeX fractions or symbolic answers, not checker errors.

## Leftovers / not changed (out of this session's scope)

- `data/enrichments/batch1.js`: 14 entries still omit
  `essentialKnowledge`/`learningObjectives`, so those pages keep the base
  template block. Batch 1 was outside the allowed file scope.
- Base (unenriched) topics still carry generic template prose on many
  pages; e.g. `math/calc-u10/10.1` still shows the template
  `准确陈述定义、适用范围与符号约定。`. Prior content audits documented
  this as a depth issue rather than a false statement; fixing it would
  require enriching ~220 topics.
- Two `related` labels in batch1 bio `bio-u5/5.1` are stale but resolve:
  `bio-u4/4.6` is titled “细胞周期调控” (label says “有丝分裂”) and
  `bio-u5/5.2` is titled “减数分裂与遗传多样性” (label says
  “减数分裂细节”). Batch 1 is out of scope.
- `js/practice.js` appends `prob.answer` twice in the solution `<details>`
  (around the answer/solution rendering block), so FRQ answer text is
  duplicated on every practice page. `js/**` is out of scope; recorded
  for the UI session.
- Legacy unindexed `data/math/math-prep-{trig,fn,alg}.js` and non-P2.5
  `bio-prep-cell` topics still contain generic placeholder formulas;
  they are not imported by `data/*/index.js`.

## Verification

- `node --check` on every edited JS file: OK.
- `node scripts/check-math-notation.mjs`: `MATH_NOTATION_OK`.
- KaTeX `renderToString` (display mode) for all changed formulas and
  inline math: 0 errors (batch2 701, math 178, bio 188, calc-u7 bank 93).
- mathjs parse of every symbolic `expected` in the 15 banks: 0 failures.
- Targeted Playwright (port 8767, no other server touched), 15 routes:
  0 console errors, 0 raw-LaTeX leaks on enriched/changed pages.
- Screenshots: `screenshots/bug-content/`
  (`bio-u3-3.4.png`, `em-u10-10.4.png`, `mech-u6-6.3.png`,
  `calc-u7-7.2.png`, `calc-u10-10.1.png`, `practice-calc-u7.png`).
