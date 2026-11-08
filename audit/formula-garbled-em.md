# Formula delimiter sweep — E&M and physics source files

Date: 2026-11-08
Scope: `data/em/**`, `data/physics/**`, `data/shared/**`, `data/courses.js`,
`data/practice-index.js`.

## Result

- Single-backslash `\(` / `\)` / `\[` / `\]` identity escapes: **0 hits**.
- Real garbled-formula bugs fixed: **4** plain-text derivation strings in
  `data/physics/formulas.js`.
- Files changed: `data/physics/formulas.js` only.

## Delimiter scan

Source-level scan of all 22 scoped files:

| Check | Result |
| --- | ---: |
| Single-backslash `\(` / `\)` / `\[` / `\]` | 0 |
| Scoped files | 22 |
| `data/em` strings parsed | 14,319 |
| `data/em` non-LaTeX strings containing a backslash | 0 |
| Direct KaTeX fields (`latex` / `solutionLatex` / `answerLatex`) | 837 |

All 17 `data/em` unit/practice files parse as strict JSON, which independently
confirms there is no invalid JS escape such as `\(` or `\d` anywhere in them.
`data/shared/credits.js` and `data/shared/pastpapers.js` contain no backslashes;
`data/courses.js` and `data/practice-index.js` are indexes with no student-facing
LaTeX.

No correctly escaped `\\(` sequence was changed.

## Fixed: physics formula-sheet derivations

`js/formulas-page.js` renders the `derivation` field as plain text
(`textContent`), not through `appendMathText`. Four derivations still carried
LaTeX syntax, so the expanded rows showed raw commands or raw `\(` / `\)`:

| Row | Before | After |
| --- | --- | --- |
| `c-k` Coulomb constant | `由 \(\varepsilon_0\) 定义。` | `由真空介电常量 ε₀ 定义。` |
| `m-v` kinematics | `a=\dfrac{\mathrm{d}v}{\mathrm{d}t} 积分。` | `加速度对时间积分。` |
| `m-shm` SHM | `解微分方程 \(\ddot x=-\omega^2 x\)。` | `解微分方程 x″ = −ω²x。` |
| `m-pend` pendulum | `\(\sin\theta\approx\theta\)。` | `小角近似 sin θ ≈ θ。` |

Escaping these strings would not help: the field is plain text, so the source
must be plain text. This matches the existing `data/math/formulas.js`
derivations, which already use Unicode prose. Direct formula fields
(`latex`, `example.q`, `example.a`, symbol `s`) still use KaTeX and are
unchanged.

## Verification

Served with `python3 scripts/serve-dev.py . 8777`, desktop 1280, light theme,
all `<details>` rows expanded.

| Page | `.katex-error` | Console errors | Visible raw `\dfrac` / `\mathrm` / `\Delta` / `\(` |
| --- | ---: | ---: | ---: |
| `#/em/formulas` | 0 | 0 | 0 |
| `#/physics/formulas` | 0 | 0 | 0 |
| `#/mech/formulas` | 0 | 0 | 0 |
| `#/t/em/em-u8/8.1` | 0 | 0 | 0 |
| `#/t/em/em-u11/11.8` | 0 | 0 | 0 |
| `#/t/em/em-u12/12.3` | 0 | 0 | 0 |
| `#/em/practice/em-u8` | 0 | 0 | 0 |
| `#/em/practice/em-u13` | 0 | 0 | 0 |

The full 52-route E&M sweep (topics, practice banks, subject, map, and formula
pages) reported no KaTeX errors and no raw LaTeX. The only console message was
a headless-Chromium WebGL context failure on `#/em/map`, unrelated to content
and reproducible before the change.

Screenshots:

- `screenshots/formula-garbled-em/em-formulas-coulomb-derivation-clean.png`
- `screenshots/formula-garbled-em/physics-formulas-m-v-derivation-clean.png`
- `screenshots/formula-garbled-em/physics-formulas-m-shm-derivation-clean.png`
- `screenshots/formula-garbled-em/physics-formulas-m-pend-derivation-clean.png`
- `screenshots/formula-garbled-em/em-u8-8.1-formulas-clean.png`
- `screenshots/formula-garbled-em/em-u8-practice-clean.png`

## Locked-file leftovers

Read-only scan of `data/enrichments/batch1.js`, `data/enrichments/batch2.js`,
`data/math/calc-u1.js` … `data/math/calc-u10.js`, and `js/topic-page.js`:
no single-backslash `\(` / `\)` / `\[` / `\]` identity escapes. The only
delimiter-looking text is the explanatory comment in `js/topic-page.js`.

`data/math/formulas.js` derivation and condition fields were also checked: they
are already plain Unicode text, with no raw LaTeX left to edit.

## Git

Commit: `Fix unescaped KaTeX delimiters in E&M and physics source topics`
