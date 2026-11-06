# Content review — AP Calculus BC (`data/math/`)

Date: 2026-11-06  
Reviewer: isolated content-accuracy session  
Scope: `data/math/` topic sources and formula sheet only (not `data/math/practice/`, not figure libraries, not `data/enrichments/batch2.js`).

## Method

Read all 15 math modules and all 158 topic objects: 45 pre-calculus topics (algebra 1, geometry, algebra 2, precalculus) and 113 calculus topics (`calc-u0` plus AP Units 1–10). Checked formulas, notes, conditions, example `solutionLatex`, and the separate formula sheet `data/math/formulas.js`.

Checks run:

- `node scripts/check-math-notation.mjs` → `MATH_NOTATION_OK` (no slash-fraction hits in math topic data).
- KaTeX `renderToString` on every topic formula and `solutionLatex` (320 strings) → 0 errors.
- KaTeX render on all 36 formula-sheet rows → 0 errors.
- Import check on `data/math/index.js` → 158 topics load.

## Executive summary

The base topic records are almost entirely a shared placeholder template. The formula block is usually the same generic line regardless of topic:

| Formula shown at review start | Topics |
|---|---:|
| `\dfrac{\mathrm{d}y}{\mathrm{d}x}=f'(x)` | 93 |
| `f'(a)=\lim_{h\to0}\dfrac{f(a+h)-f(a)}{h}` | 31 |
| `\int_a^b f(x)\,\mathrm{d}x=\lim...` (Riemann sum) | 19 |
| `\lim_{x\to a}f(x)=L` | 12 |
| `\cos^2\theta+\sin^2\theta=1` | 2 |
| chain rule | 1 |

Thus algebra, geometry, sequences, matrices, area/volume, series tests, differential equations, and optimization pages frequently show a derivative/limit/integral definition instead of the named topic. Only 8 of 158 topics have enrichment overlays (5 batch1, 3 batch2); 150 still show template-only prose.

Unlike mechanics, most of these generic formulas are *true but off-topic*, not mathematically false. I therefore fixed the objective errors and the worst missing core formulas, and recorded the remaining formula/depth gaps for enrichment rather than rewriting all 158 pages.

## Findings and fixes

### 1. Wrong parametric arc-length formula — blocker (fixed)

- Topic: `math/calc-u9/9.3` “Finding Arc Lengths of Curves Given by Parametric Equations”.
- Wrong: `L=\int_a^b\sqrt{1+(y')^2}\,\mathrm{d}x` — this is the Cartesian arc-length formula, not the parametric one. The page’s own formula sheet (`data/math/formulas.js`, row `p-arc`) has the correct parametric formula.
- Corrected to: `L=\int_{t_1}^{t_2}\sqrt{[x'(t)]^2+[y'(t)]^2}\,\mathrm{d}t`.
- Also corrected the example-2 `solutionLatex`, which was `\cos^2\theta+\sin^2\theta=1` (unrelated trig identity).

### 2. Duplicate formula entries with pH note — important (fixed)

- `math/calc-u1/1.3`: two identical `\lim_{x\to a}f(x)=L` entries; the second note was “pH 定义”.
- `math/calc-u6/6.5`: integral formula plus a duplicate limit entry with “pH 定义”.
- Removed the duplicates, rewrote notes, and added the correct `A(x)=∫_a^x f(t)dt, A'(x)=f(x)` for 6.5.

### 3. Contaminated formula notes — important (fixed)

Eleven topics carried notes copied from other subjects:

- pH note (5): `math-prep-alg1/P1.4`, `calc-u0/0.1`, `calc-u1/1.3`, `calc-u5/5.8`, `calc-u6/6.5`.
- RC-exponent note (6): `math-prep-geo/P2.6`, `math-prep-precalc/P4.3`, `calc-u0/0.2`, `calc-u8/8.8`, `calc-u8/8.13`, `calc-u9/9.3`.

All were replaced with topic-appropriate notes. Where the formula itself was unrelated to the page (P1.4 functions, P2.6 circles, 0.1 functions), the formula was also replaced with the actual topic relation.

### 4. Wrong/unrelated example `solutionLatex` — important (fixed)

Seven topics had example 2 ending in a formula unrelated to the page:

- `P1.4`, `c0.1`, `5.8`: limit formula on derivative/function pages.
- `P2.6`, `8.8`, `8.13`, `9.3`: trig identity on geometry/volume/arc-length pages.

All were replaced with the topic’s corrected core formula.

### 5. Formula-sheet example differentiated a constant — important (fixed)

`data/math/formulas.js`, row `d-arcsin`:

- Wrong: `\dfrac{\mathrm{d}}{\mathrm{d}x}[\arcsin(0.5)]=\dfrac{2}{\sqrt3}`. `arcsin(0.5)` is a constant, so its derivative is 0.
- Corrected question to: `\left.\dfrac{\mathrm{d}}{\mathrm{d}x}[\arcsin x]\right|_{x=0.5}`, whose value is `\dfrac{2}{\sqrt3}`.

Also added the missing inconclusive case to `s-ratio`: “L=1 时无法判定”.

### 6. Missing core formulas / conditions — important, mostly not rewritten

These pages still show a generic definition rather than the named formula. This is the template-depth issue, not a false statement. Examples:

- Unit 2: power, product, quotient, and specific trig/exp/log derivative rules (2.5–2.10) show only the definition.
- Unit 3: implicit differentiation, inverse functions, inverse trig, higher-order derivatives (3.2–3.6).
- Unit 4: related rates, linearization, L’Hôpital (4.4–4.7).
- Unit 5: MVT, EVT, first/second derivative tests, optimization (5.1–5.12).
- Unit 6: FTC (6.4/6.7), substitution, parts, partial fractions, improper integrals (6.4–6.14).
- Unit 7: slope fields, Euler, separation of variables, exponential/logistic models (7.1–7.9).
- Unit 8: area between curves and disc/washer volumes (8.4–8.12).
- Unit 9: parametric/vector derivatives, polar derivatives (9.1–9.7).
- Unit 10: geometric series, tests, Taylor polynomials, error bounds, radius of convergence (10.1–10.15).
- Prep: most algebra/geometry/algebra-2/precalculus topics still show `dy/dx=f'(x)`.

Representative suggested statements are listed in the per-unit table below. These are recorded rather than blanket-patched because replacing every formula block would be a course-wide rewrite, which the shared rules reserve for enrichment.

## Per-unit audit

### Prep-algebra 1 (`math-prep-alg1`, 12 topics)

- P1.1–P1.3, P1.5–P1.8, P1.10–P1.12 show `dy/dx` on linear equations, inequalities, slope, systems, exponents, polynomials, factoring, quadratics, exponential growth, and data models. Off-topic template formula; **important**.
- P1.4 functions: formula changed to `y=f(x)`; note/solution corrected. **important**.
- P1.9 factoring: batch1 enrichment; checked, formulas `a^2-b^2`, `a^2\pm2ab+b^2` and examples correct. No edit.

### Prep-geometry (`math-prep-geo`, 11 topics)

- P2.1–P2.5, P2.7–P2.11 show `dy/dx` on points/lines/angles, congruence, similarity, right triangles, trig ratios, area, surface area/volume, coordinate geometry, transformations, proof. Off-topic; **important**.
- P2.6 circles: formula changed to `A=\pi r^2`, `C=2\pi r`, `s=r\theta`; note/solution corrected; conditions added. **important**.
- P2.10 transformations: batch2 enrichment; spot-checked, correct. No edit.

### Prep-algebra 2 (`math-prep-alg2`, 12 topics)

- All 12 topics (families of functions, quadratics, polynomials, rationals, radicals, exponentials, logs, sequences, probability, matrices, conics, trig identities) show `dy/dx`. This is especially misleading for sequences/probability/matrices; **important**.
- Suggested replacements include vertex form for P3.2, log laws for P3.7, arithmetic/geometric sums for P3.8, and counting formulas for P3.9.

### Prep-precalculus (`math-prep-precalc`, 10 topics)

- P4.1, P4.2, P4.4–P4.8 show `dy/dx` on polynomial/rational analysis, exponential/log models, trig equations, polar/parametric/vector/matrix topics. Off-topic; **important**.
- P4.3 unit circle: trig identity is correct; note fixed.
- P4.9 limit intuition: `lim` notation correct.
- P4.10 rate of change: derivative definition correct.

### `calc-u0` (2 topics)

- 0.1 functions: formula changed to `y=f(x)`; pH note and limit-formula solution corrected. **important**.
- 0.2 unit circle: trig identity correct; RC note fixed.

### AP Unit 1 — Limits and Continuity (`calc-u1`, 16 topics)

- 1.2 batch1 enrichment: checked, limit definition and examples correct.
- 1.3 duplicate limit entry removed; `f(a)`/left-right conditions added. **important**.
- 1.4–1.9 limit notation is appropriate but generic.
- 1.10–1.13 (discontinuities, continuity, removing discontinuities) and 1.16 (IVT) show `dy/dx` or `lim` but do not state the continuity/IVT conditions. **important**.
- Suggested: `f` continuous at `a` iff `lim_{x→a}f(x)=f(a)`; IVT: continuous on `[a,b]`, `f(a)<k<f(b)` ⇒ ∃c with `f(c)=k`.

### AP Unit 2 — Differentiation (`calc-u2`, 10 topics)

- 2.2 and 2.5 batch1 enrichments: checked, correct.
- 2.1/2.4 derivative definition appropriate. 2.3 generic `dy/dx` (estimation) acceptable.
- 2.6–2.10: sum/product/quotient/power/trig-exp-log rules are missing; pages show only the definition. **important**.
- Suggested: `(uv)'=u'v+uv'`, `(u/v)'=(u'v-uv')/v^2`, `d/dx x^n=nx^{n-1}`, and the standard sin/cos/exp/ln derivatives.

### AP Unit 3 — Composite, Implicit, Inverse (`calc-u3`, 6 topics)

- 3.1 chain rule correct.
- 3.2–3.6 show the derivative definition; implicit differentiation, inverse-function theorem, inverse trig derivatives, and higher-order notation are missing. **important**.
- Suggested: `dy/dx=-F_x/F_y`; `(f^{-1})'(y)=1/f'(x)`; `d/dx[arcsin x]=1/\sqrt{1-x^2}`; `d^ny/dx^n`.

### AP Unit 4 — Contextual Applications (`calc-u4`, 7 topics)

- 4.1–4.6 show derivative definition/generic dy/dx; related rates and linearization formulas are missing. **important**.
- 4.7 L’Hôpital shows only `lim f(x)=L`; the rule and its `0/0`/`∞/∞` conditions are absent. **important**.
- Suggested: `lim f/g = lim f'/g'` when the original limit is `0/0` or `∞/∞` and the latter limit exists; linearization `L(x)=f(a)+f'(a)(x-a)`.

### AP Unit 5 — Analytical Applications (`calc-u5`, 12 topics)

- 5.1 MVT, 5.2 EVT, 5.3–5.7 derivative tests, 5.9–5.12 optimization/sketching show only generic derivative definitions. **important**.
- 5.8 note fixed from “pH 定义” to a derivative/sketching note.
- Suggested: MVT `f'(c)=(f(b)-f(a))/(b-a)`; first derivative test sign change; second derivative test `f''>0`/`<0`; candidates test at critical points and endpoints.

### AP Unit 6 — Integration (`calc-u6`, 14 topics)

- 6.2/6.3 Riemann-sum formula appropriate.
- 6.4 batch1 FTC enrichment: checked, correct.
- 6.5 duplicate removed; now `A(x)=∫_a^x f(t)dt, A'(x)=f(x)`.
- 6.6–6.14 show only the Riemann-sum definition; properties, FTC, substitution, parts, partial fractions, improper integrals, and technique selection are missing. **important**.
- Suggested: `∫_a^b f=F(b)-F(a)`; `∫u dv=uv-∫v du`; `∫f(g(x))g'(x)dx=∫f(u)du`; improper integral as a limit.

### AP Unit 7 — Differential Equations (`calc-u7`, 9 topics)

- 7.2 and 7.9 batch2 enrichments: spot-checked content is correct, but see the batch2 escaping issue below.
- 7.1, 7.3–7.8 show derivative definitions/generic dy/dx; slope fields, Euler’s method, separation of variables, and exponential models are missing. **important**.
- Suggested: Euler `y_{n+1}=y_n+F(x_n,y_n)Δx`; separation `g(y)dy=f(x)dx`; exponential model `dy/dt=ky ⇒ y=y0e^{kt}`; logistic `dP/dt=kP(1-P/L)`.

### AP Unit 8 — Applications of Integration (`calc-u8`, 13 topics)

- 8.1–8.3 average value/position/accumulation generally show only the integral definition. **important**.
- 8.4–8.6 area between curves show `dy/dx`; area formulas absent. **important**.
- 8.7–8.12 volumes show `dy/dx` except 8.8; disc/washer formulas absent. **important**.
- 8.8 volume: formula `V=∫A(x)dx` correct; note and trig-identity solution corrected.
- 8.13 arc length: Cartesian formula correct; note and trig-identity solution corrected.
- Suggested: `A=∫(f-g)dx`; `V=π∫R^2dx`; `V=π∫(R^2-r^2)dx`.

### AP Unit 9 — Parametric, Vector, Polar (`calc-u9`, 9 topics)

- 9.3 parametric arc length corrected from Cartesian to `∫√(x'^2+y'^2)dt`; example solution fixed. **blocker fixed**.
- 9.8/9.9 polar area: corrected to `A=1/2∫r^2dθ` and `A=1/2∫(r_outer^2-r_inner^2)dθ`; conditions added. **important**.
- 9.1/9.2/9.4–9.7 still show generic derivative definitions; parametric/vector derivatives and polar `dy/dx` are missing. **important**.
- Suggested: `dy/dx=(dy/dt)/(dx/dt)`; `d^2y/dx^2=(d/dt(dy/dx))/(dx/dt)`; polar `dy/dx=(r'sinθ+r cosθ)/(r'cosθ-r sinθ)`.

### AP Unit 10 — Infinite Sequences and Series (`calc-u10`, 15 topics)

- All 15 topics show a generic derivative/integral definition; no series test, Taylor polynomial, error bound, or radius-of-convergence formula is present. **important**.
- The formula sheet already has correct geometric-series, Maclaurin, and ratio-test rows; the topic pages are not using them.
- Suggested: geometric `Σar^n=a/(1-r)`, `|r|<1`; p-series converges iff `p>1`; ratio test `L=lim|a_{n+1}/a_n|`; alternating error `|R_N|≤b_{N+1}`; Taylor `P_n=Σf^{(k)}(a)(x-a)^k/k!`; Lagrange `|R_n|≤M|x-a|^{n+1}/(n+1)!`; radius `R=1/L`.

## Fixes applied

Topic files changed:

- `data/math/calc-u9.js` (9.3, 9.8, 9.9)
- `data/math/calc-u8.js` (8.8, 8.13)
- `data/math/calc-u1.js` (1.3)
- `data/math/calc-u6.js` (6.5)
- `data/math/calc-u5.js` (5.8)
- `data/math/calc-u0.js` (0.1, 0.2)
- `data/math/math-prep-alg1.js` (P1.4)
- `data/math/math-prep-geo.js` (P2.6)
- `data/math/math-prep-precalc.js` (P4.3)

Formula sheet changed:

- `data/math/formulas.js` (`d-arcsin` example; `s-ratio` L=1 condition)

No practice files, figure libraries, batch2, or other sessions’ files were touched.

## Verification

- `check-math-notation.mjs` → `MATH_NOTATION_OK`.
- KaTeX render of 320 topic formula/solution strings → 0 errors.
- KaTeX render of 36 formula-sheet rows → 0 errors.
- Import of `data/math/index.js` → 158 topics.
- `git diff --check` clean.

## Additional issues found but not edited

1. **Batch1 inline math escaping (important, formatting).** The five batch1 math entries use single-escaped `\(...\)` inside JavaScript strings (e.g. `definition: '设函数 \(f\) ...'`). JavaScript drops the backslash, so the app receives `(f)` and renders plain parentheses/raw math instead of KaTeX. The separate `formulas` arrays render correctly. This affects `math/calc-u1/1.2`, `2.2`, `2.5`, `6.4`, and `math-prep-alg1/P1.9`. I did not mass-edit batch1 because the task permits only factual sentence corrections there, not a formatting rewrite.
2. **Batch2 `math/calc-u7/7.9` literal `dfrac` (important, other session’s file).** One formula is `P=dfrac{L}{2}` and one note is `A=dfrac{...}` with the backslash missing, so they will display “dfrac” as variables/text. `batch2.js` is outside my write scope; flagged for its owner.
3. **Systemic formula/depth gap (blocker for self-study).** 150 of 158 topics have no enrichment overlay; most prep/calculus pages still show a generic derivative/limit/integral line instead of the named rule. This is an enrichment task, not an accuracy patch.
4. **Formula sheet is the better source.** `data/math/formulas.js` already has correct rows for power/product/quotient/chain/implicit, basic integrals, substitution/parts/partial fractions, geometric series, ratio test, parametric derivative/arc length, and polar area. Aligning topic pages to those rows would fix many of the “missing formula” cases mechanically.
5. **Condition arrays remain generic on 146 topics** (“满足定理/定律条件 / 注意理想化假设”). I corrected conditions for 12 of the 13 edited topics (P4.3 only needed a note correction); the rest need per-topic assumptions (e.g. L’Hôpital’s `0/0`/`∞/∞`, alternating-series monotonicity, p-series `p>1`).

## Self-check (Calculus)

- Re-opened the committed calculus diff (`2a27135`) and re-read the 13 changed topic blocks plus `data/math/formulas.js`.
- Re-ran `node scripts/check-math-notation.mjs` → `MATH_NOTATION_OK`.
- Re-ran KaTeX on all 320 math formula/`solutionLatex` strings → 0 errors; imported `data/math/index.js` → 158 topics; KaTeX on all 36 formula-sheet rows → 0 errors.
- Checked the changed topics for wrong `solutionLatex`: 0 mismatches. Confirmed the 9.3 parametric formula is the parametric integral, not the Cartesian one, and that 9.8/9.9 use `1/2∫r²dθ` and the outer-minus-inner form.
- Confirmed no pH/RC notes, broken braces, raw LaTeX in conditions, or slash fractions remain in the changed topics.
- The 88 topics still showing `dy/dx=f'(x)` are the documented template-depth gap in “Remaining issues”, not accidental leftovers from this pass; replacing all of them would be the course-wide enrichment rewrite the task excludes.
- No further issues found in the calculus work. Self-check complete.
