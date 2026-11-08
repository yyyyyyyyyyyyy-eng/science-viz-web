# Formula delimiter sweep — batch1

Date: 2026-11-08
Scope: `data/enrichments/batch1.js` only.

## Root cause

In JavaScript string literals, `\(`, `\)`, `\[`, and `\]` are identity escapes:
the backslash is discarded. The topic renderer (`appendMathText`) only converts
runtime `\(...\)` / `\[...\]` pairs into KaTeX, so any single-backslash delimiter
in the source produced plain text plus raw LaTeX commands.

Fix: write `\\(`, `\\)`, `\\[`, `\\]` in the JS source so the runtime string still
contains the delimiters.

## Fixed overlays

| Overlay key | Strings fixed | Delimiter characters fixed | Math spans restored |
| --- | ---: | ---: | ---: |
| `math/math-prep-alg1/P1.9` | 15 | 40 | 20 |
| `mech/mech-u3/3.1` | 2 | 7 | 4 |
| **Total** | **17** | **47** | **24** |

The 47 characters are 23 complete inline pairs plus the missing opening delimiter
in the 3.1 `definition` (its closing `\)` was already escaped correctly).

### `mech/mech-u3/3.1` — 3.1 before / after

Before (runtime after JS identity escapes):

`由牛顿第二定律 (F=ma) 与链式法则 (a=v\dfrac{\mathrm{d}v}{\mathrm{d}x})，积分得 (W=\Delta K)。`

After (source):

```js
'由牛顿第二定律 \\(F=ma\\) 与链式法则 \\(a=v\\dfrac{\\mathrm{d}v}{\\mathrm{d}x}\\)，积分得 \\(W=\\Delta K\\)。'
```

The `definition` also now keeps its inline delimiter around
`\\(W=\int\mathbf{F}\cdot\mathrm{d}\mathbf{r}\\)`; the surrounding `\[...\]`
display formula was already correct.

### `math/math-prep-alg1/P1.9`

The definition, misconceptions, examples, and checks all had single-backslash
delimiters. They now render as KaTeX instead of plain text such as
`(ax^2+bx+c)` or `((x-2)(x-3))`.

## Verification

Served with `python3 scripts/serve-dev.py . 8899`, desktop 1280 light.

| Page | `.katex-error` | Console errors | Raw `\dfrac` / `\mathrm` / `\Delta` visible |
| --- | ---: | ---: | --- |
| `#/t/mech/mech-u3/3.1` | 0 | 0 | none |
| `#/t/math/math-prep-alg1/P1.9` | 0 | 0 | none |

All 14 overlays in `batch1.js` were also loaded at 1280 light:
0 `.katex-error`, 0 console errors, and no visible raw LaTeX markers.

Screenshots:

- `screenshots/formula-garbled/mech-u3-3.1-intuition-fixed.png`
- `screenshots/formula-garbled/mech-u3-3.1-intuition-fixed-block.png`
- `screenshots/formula-garbled/math-prep-alg1-P1.9-fixed.png`

## Leftovers in conflict files

Scanned read-only during this session:

- `data/enrichments/batch2.js`
- `data/math/calc-u1.js` through `data/math/calc-u10.js`

No single-backslash `\(` / `\)` / `\[` / `\]` identity escapes were found in those
files at scan time, so there are no leftovers for this exact delimiter bug to
edit in a later pass.
