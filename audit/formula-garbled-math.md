# Formula sweep — remaining math files

Date: 2026-11-08
Scope: `data/math/**` except `calc-u1.js` through `calc-u10.js` and the locked
`data/enrichments/*`, `data/mech/**`, `data/bio/**`, `data/em/**`, and
`js/**` files. `js/topic-page.js` was not edited.

## Scan

1. **Source-level identity escapes.** Scanned every allowed `data/math/**/*.js`
   for a single backslash before `(`, `)`, `[`, `]`, not already doubled.
   **0 hits.** All delimiter runs before brackets are already 2 or 3 source
   backslashes, so the runtime strings still contain `\(...\)` / `\[...\]`.
2. **Leaked LaTeX outside delimiters.** Imported every allowed data module and
   walked all exported strings. Topic data, practice banks, figures, relations,
   and cross-links had **0** LaTeX commands outside `\(...\)` / `\[...\]`.
   The formula sheet had 14 such strings in fields rendered as plain text.
3. **Browser sweep.** Served with `python3 scripts/serve-dev.py . 8971`,
   desktop 1280 light. Crawled all 174 math topic routes plus
   `#/math/formulas` (all rows expanded).

## Finding and fix

`data/math/formulas.js` stores `conditions`, `derivation`, and `symbols[].m`
as plain text; `js/formulas-page.js` renders those fields with `textContent`,
not `appendMathText`. Inline LaTeX in them therefore appeared literally, e.g.
`x\neq 0`, `\(\cos x\neq 0\)`, and
`由极限定义 \(\lim_{h\to 0}\dfrac{e^h-1}{h}=1\)。`.

Converted the affected fields to plain-text notation:

- 8 conditions: `x ≠ 0`, `x > 0, a > 0, a ≠ 1`, `cos x ≠ 0`, `v ≠ 0`,
  `F_y ≠ 0`, `n ≠ −1`, `x'(t) ≠ 0`.
- 1 symbol description: `正底且 a ≠ 1`.
- 6 derivations: limit statements in prose, `e^(x ln a)`,
  `sin x 与 cos x 之比`, `y = arcsin x ⇒ sin y = x`, and `u v⁻¹`.

12 formula rows / 16 plain-text fields were edited (15 replaced LaTeX markup,
1 normalized `a>0` to `a > 0`). Formula `latex`, example `q`/`a`, and all other
data fields were left unchanged.

## Verification

| Page | Raw backslash-LaTeX visible | `.katex-error` | Console errors |
| --- | ---: | ---: | ---: |
| `#/math/formulas`, all rows open | 0 | 0 | 0 |
| All 174 math topic routes | 0 on allowed pages | 0 | 0 |

`node scripts/check-math-notation.mjs` → `MATH_NOTATION_OK`.

Screenshots:

- `screenshots/formula-garbled-math/formulas-fixed.png`
- `screenshots/formula-garbled-math/formulas-deriv-group-fixed.png`

## Leftovers in locked files

- `data/enrichments/batch2.js` line 5241,
  `ENRICHMENTS["math/calc-u2/2.8"].checks[0]`: the second and third bilingual
  segments contain plain-text `((uv)'\neq u'v')` without `\(...\)` delimiters,
  so they still show raw `\neq` on `#/t/math/calc-u2/2.8`. The first segment is
  correctly delimited. `batch2.js` is owned by another session, so it was not
  edited.
- `data/math/calc-u1.js` through `calc-u10.js`: no single-backslash delimiter
  identity escapes found at scan time.
- `data/enrichments/batch1.js`: read-only scan found no identity-escape or
  outside-delimiter LaTeX hits; not edited.
