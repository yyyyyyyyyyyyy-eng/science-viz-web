# Math bug audit — round 1 (2026-11-10)

Repo: `/workspace/science-viz-web` at `main af68b0f` (same code as the live site).
Scope: AP Calculus `calc-u0`…`calc-u10`, math prep (`math-prep-*`), math formula sheet, math figures, math practice banks/checkers, vocabulary rendering.
Read-only audit. No product file was edited. Findings below were reproduced against `python3 scripts/serve-dev.py . 8702`.

## Verdict

| Severity | Count |
|---|---:|
| P0 broken | 0 |
| P1 wrong content | 8 |
| P2 polish | 3 |
| **Total** | **11** |

All 158 math topic routes, 15 chapter routes, 15 practice routes, `#/math`, `#/math/formulas` and `#/math/map` were loaded at 1280 light. A 15-route sample was loaded at 390 light and 390 dark; all 15 practice pages were loaded at 390 light, 390 dark and 1280 dark; the formula sheet was checked at 1280/390 in both themes with all 36 rows expanded.

Runtime result: **0 console errors, 0 page errors, 0 failed requests, 0 `.katex-error`, 0 raw LaTeX in rendered text, 0 page-level horizontal overflow, 0 visible hit targets under 44px**. The bugs are content, grading and figure/notation bugs, not broken rendering.

## Top 10

| ID | Severity | Route | File:line | What is wrong | Suggested fix |
|---|---|---|---|---|---|
| MATH-01 | P1 | `#/t/math/calc-u7/7.1` (representative; 120 routes) | `data/math/calc-u7.js:23,37,84,90` | 120 of 158 math topics have no enrichment overlay and still render one generic placeholder block. Objectives are “能陈述「…」的准确定义…”; intuition is “先确认物理/生物/数学设定…”; example 1 says conditions are “准静态、理想绝缘、连续可微、种群封闭”; example 2 prints the derivative definition on algebra, geometry, precalculus and differential-equation pages. This is template filler and contains wrong physics/bio science for math topics. | Write topic-specific overlays for the 120 topics, as already done for 38 topics, or hide the template blocks until they are written. Remove all physics/bio assumptions from math examples. |
| MATH-02 | P1 | `#/t/math/calc-u6/6.8`, `#/t/math/calc-u8/8.1`, `#/t/math/calc-u9/9.2`, `#/t/math/calc-u2/2.9` | `data/math/calc-u2.js:1442`; `data/math/calc-u6.js:1093`; `data/math/calc-u8.js:208`; `data/math/calc-u9.js:212` | 27 AP Calculus topics show a formula from a different topic as their only formula. 15 show the derivative definition, 9 show the Riemann-sum definition, 2.9 (quotient rule) shows the power rule, 8.7 (cross sections) shows the disc formula, and 10.1 (series) shows a sequence limit. Examples: 6.8 “求原函数” has only the definite-integral limit; 8.1 “积分求平均” has the same limit instead of the average-value formula; 9.2 “参数二阶导数” has only `f'(a)=lim…`; 2.9 has only `d/dx[x^n]=nx^(n-1)`. | Replace each with the topic formula (or hide the formula block when no topic formula exists). Full pattern list is in the MATH-02 detail table. |
| MATH-03 | P1 | `#/t/math/calc-u2/2.7` (representative; 11 routes) | `data/math/calc-u2.js:1070`; `modules/syllabus.js:184` (full list in detail table) | 11 topic titles contradict the English/AP CED title shown on the same page. Examples: 2.7 says “eˣ 与 aˣ 导数” but the English title is “Derivatives of cos x, sin x, eˣ, and ln x”; 2.8 says “积商法则” but the English title is “The Product Rule”; 2.9 says “积商法则续” but the English title is “The Quotient Rule”; 7.2 says “斜率场” but the English title is “Verifying Solutions for Differential Equations”; 8.7 says “旋转体体积盘法” but the English title is cross sections; 10.1 says “序列收敛” but the English title is series convergence. The same wrong titles are duplicated in `modules/syllabus.js`, so chapter lists and navigation show them too. | Rename in both `data/math/*.js` and `modules/syllabus.js`; see MATH-03 detail table for the 11 corrected Chinese titles. |
| MATH-04 | P1 | `#/t/math/calc-u8/8.7` | `data/math/calc-u8.js:1047,1069`; `data/math/figures.js:1191` | 8.7 contradicts itself. The Chinese title and only formula are the disc method (`V=π∫R²dx`, note “绕 x 轴旋转的圆盘法”), while the English title, vocabulary and figures are “Volumes with Cross Sections: Squares and Rectangles”. The second figure is `xsec-tri` (equilateral triangles), which belongs to 8.8; there is no rectangles figure. | Rename 8.7 to “截面法：正方形与矩形”, change the formula to `V=∫_a^b A(x) dx`, and map a rectangles/square figure instead of `xsec-tri`. Leave triangles on 8.8. |
| MATH-05 | P1 | `#/math/practice/calc-u2`, `#/math/practice/calc-u10` | `data/math/practice/calc-u2.js:228-245`; `data/math/practice/calc-u10.js:283-300` | All 201 MCQs use the same “关于「TOPIC」，下列正确的是？” template and the same three absurd distractors. The correct answer is index 0 in all 201, and the correct statement is generic rather than topic-specific. Example: `calc-u2-q012` is labelled 2.8 积商法则 but its correct answer is “可导 ⇒ 连续；连续 ⇏ 可导”. A student can answer every MCQ by choosing A without reading the topic. | Replace the MCQ pool with topic-specific items, at least four plausible options, and a shuffled answer key. Do not reuse one meta-statement across unrelated topics. |
| MATH-06 | P1 | `#/math/practice/calc-u10` | `data/math/practice/calc-u10.js:313,394`; `data/math/practice/calc-u1.js:320,413` | The practice banks are 70–87% duplicate stems. `calc-u10` has 87 items but only 14 unique non-generator stems; `calc-u1` has 84 items but only 11 unique non-generator stems. Examples: 19 copies of the same geometric partial-sum item and 20 copies of `∫_0^2 3x² dx`. The hero still says “84 题”, which overstates the amount of unique practice. | Deduplicate, or label repeated items as variants and report the unique count. Add genuinely different items instead of repeating the same four symbolic drills. |
| MATH-07 | P1 | `#/math/practice/calc-u10` | `data/math/practice/calc-u10.js:123-131`; `js/practice.js:68-85` | `calc-u10-q002` expects `1/64` with `tol: 0.01`. `checkNumeric` applies an absolute tolerance scaled by `max(1, abs(expected))`, so entering `1/128` (0.0078125) or `0.02` returns “正确”. The actual error is `abs(S−S₃) ≈ 0.01049`, so `1/128` is not even an upper bound. Reproduced in the browser; screenshot `practice-calc-u10-q002-accepts-1-128-1280.png`. | Use a much tighter tolerance for exact-value items (e.g. `0.0005` or relative), or let the item declare “exact” and reject anything but `1/64` within a small epsilon. |
| MATH-08 | P1 | `#/t/math/calc-u7/7.1` (representative; 121 routes) | `data/math/calc-u7.js:23,37,84` | 121 of 158 topic pages have Chinese-only intuition and learning objectives; 76 have Chinese-only examples. Enriched pages use the required “中文 · English” pairing, but these pages do not. Example 7.1: “先确认物理/生物/数学设定与已知量…” and “能陈述「微分方程建模」的准确定义…” have no English counterpart. | Add the English half to intuition/objectives/examples, following the enriched pages. At minimum, pair every student-facing prose field with English separated by “ · ” or a newline. |
| MATH-09 | P2 | `#/math/practice/calc-u1` | `data/math/practice/calc-u1.js:108-131`; `js/practice.js:131-178` | The stimulus says “函数 f 在 x=2 处无定义”, but the graph connects the points 1.9…2.1 across x=2 and sets `ymin=0`, so it renders as a nearly flat continuous line at the top with no hole and no y-axis ticks. It visually contradicts the text. Screenshot `practice-calc-u1-stimulus-1280.png`. | Support an explicit open-circle/undefined point, add axes and y ticks, and pad the y-range around the data (e.g. 3.8–4.2) instead of starting at 0. |
| MATH-10 | P2 | `#/t/math/calc-u2/2.7`, `#/t/math/math-prep-alg2/P3.7` | `data/math/figures.js:54,66,793,812` | Displayed math in figures does not follow the `\dfrac`-only rule. 17 math figure captions contain `\tfrac`/`\frac` (24 occurrences), e.g. `limit-jump` uses `\tfrac12`, `geo-series` uses `\tfrac12` and `\frac12`; 12 prep-figure label lines use `÷` or inline slash fractions, e.g. “a ÷ b with b ≠ 0”, “bᵐ ÷ bⁿ”, “1 ÷ bⁿ”, “θ × π ÷ 180”. | Convert caption fractions to `\dfrac`; use the existing SVG `frac()` helper (or stacked numerator/denominator) for figure labels; replace `÷` with stacked fractions. |

## Additional verified finding

| ID | Severity | Route | File:line | What is wrong | Suggested fix |
|---|---|---|---|---|---|
| MATH-11 | P2 | `#/math/formulas`, `#/t/math/calc-u7/7.1` | `data/math/formulas.js:8`; `data/math/figures.js:66`; `data/math/practice/calc-u1.js:118` | Bilingual pairing is missing on reference surfaces. All 339 math figure titles/captions are English-only; 80 of 84 formula-sheet prose fields (conditions, derivations, symbol meanings) are Chinese-only; 808 of 938 practice answer/solution fields are Chinese-only. No surface is broken, but none follows the “Chinese first, then English” rule. | Add paired translations to figure captions and formula-sheet prose; for practice answers/solutions, add an English line or explicitly mark the bank as Chinese-only. |

## MATH-02 detail — formula belongs to another topic (27)

| Current formula pattern | Topics |
|---|---|
| Derivative definition used as the only formula | `calc-u2:2.6`, `calc-u2:2.7`, `calc-u2:2.10`, `calc-u3:3.3`, `calc-u3:3.4`, `calc-u3:3.5`, `calc-u3:3.6`, `calc-u4:4.3`, `calc-u4:4.5`, `calc-u5:5.7`, `calc-u5:5.9`, `calc-u7:7.1`, `calc-u7:7.8`, `calc-u9:9.2`, `calc-u9:9.4` |
| Riemann-sum / definite-integral definition used as the only formula | `calc-u6:6.6`, `calc-u6:6.7`, `calc-u6:6.8`, `calc-u6:6.13`, `calc-u8:8.1`, `calc-u8:8.2`, `calc-u9:9.5` |
| Both generic formulas shown (two formulas, neither topic-specific) | `calc-u6:6.14`, `calc-u8:8.3` |
| Power rule shown on the quotient-rule page | `calc-u2:2.9` |
| Disc formula shown on the cross-section page | `calc-u8:8.7` |
| Sequence limit shown on the series-convergence page | `calc-u10:10.1` |

Verified examples in the browser: 6.8 “求原函数” renders `∫_a^b f = lim Σ f(x_i*)Δx`; 8.1 “积分求平均” renders the same; 9.2 “参数二阶导数” renders `f'(a)=lim_{h→0}…`; 2.9 “商法则” renders `d/dx[x^n]=nx^{n-1}`.

## MATH-03 detail — 11 wrong titles

| Topic | Current Chinese title | English/AP CED title on the same page | Suggested Chinese title |
|---|---|---|---|
| `calc-u1:1.9` | 连通间断类型 | Connecting Multiple Representations of Limits | 极限多种表示的联结 |
| `calc-u2:2.3` | 可微性估计 | Estimating Derivatives of a Function at a Point | 估计函数在某点处的导数 |
| `calc-u2:2.7` | eˣ 与 aˣ 导数 | Derivatives of cos x, sin x, eˣ, and ln x | cos x、sin x、eˣ 与 ln x 的导数 |
| `calc-u2:2.8` | 积商法则 | The Product Rule | 乘积法则 |
| `calc-u2:2.9` | 积商法则续 | The Quotient Rule | 商法则 |
| `calc-u3:3.5` | 高阶导数选讲 | Selecting Procedures for Calculating Derivatives | 求导程序的选择 |
| `calc-u6:6.6` | 微积分基本定理应用 | Applying Properties of Definite Integrals | 定积分性质的应用 |
| `calc-u7:7.2` | 斜率场 | Verifying Solutions for Differential Equations | 验证微分方程的解 |
| `calc-u8:8.7` | 旋转体体积盘法 | Volumes with Cross Sections: Squares and Rectangles | 截面法：正方形与矩形 |
| `calc-u10:10.1` | 序列收敛 | Defining Convergent and Divergent Infinite Series | 无穷级数的收敛与发散 |
| `calc-u10:10.15` | 幂级数运算 | Representing Functions as Power Series | 函数表示为幂级数 |

Two more titles are vague rather than contradictory and are not counted above: `calc-u5:5.2` “极值定理” omits global/local extrema and critical points; `calc-u6:6.13` “积分技巧选择” omits linear partial fractions. They are lower priority but should be fixed with the same batch.

## MATH-06 detail — duplicate practice banks

| Bank | Items | Unique non-generator stems | Duplicate share |
|---|---:|---:|---:|
| `calc-u0` | 40 | 7 | 82% |
| `calc-u1` | 84 | 11 | 84% |
| `calc-u2` | 75 | 11 | 82% |
| `calc-u3` | 56 | 8 | 82% |
| `calc-u4` | 63 | 11 | 83% |
| `calc-u5` | 83 | 11 | 87% |
| `calc-u6` | 87 | 11 | 87% |
| `calc-u7` | 71 | 14 | 80% |
| `calc-u8` | 87 | 11 | 87% |
| `calc-u9` | 71 | 14 | 80% |
| `calc-u10` | 87 | 14 | 84% |
| `math-prep-alg1` | 40 | 12 | 70% |
| `math-prep-alg2` | 40 | 8 | 80% |
| `math-prep-geo` | 40 | 8 | 80% |
| `math-prep-precalc` | 38 | 8 | 79% |

“Unique non-generator stems” excludes `GEN` items whose stem is created at runtime; it is the right measure of how many distinct written items a student sees.

## Verification

### Static counts

- 158 topics imported from `data/math/index.js`; 38 have batch1/batch2 overlays; 120 do not.
- 11 title mismatches checked against the English title on the same page and against `modules/syllabus.js`.
- 27 formula-mismatch topics checked by importing the merged topic data and printing the formula set.
- 201 MCQs: all have `correct: true` on choice index 0; all share the same three distractors.
- 339 figure placements / 202 unique math figures; every topic mounts at least two figures.
- 17 figure captions contain `\tfrac` or `\frac` (24 occurrences); 12 prep-figure lines contain `÷` or inline slash fractions.
- Formula sheet: 6 groups / 36 rows; 84 prose fields, 80 with no English.
- Practice: 962 items, 501 with `numeric`/`symbolic` checkers; 938 answer/solution fields, 808 Chinese-only.

### Playwright checks

- 191 routes at 1280×800 light: 158 topic + 15 chapter + 15 practice + `#/math` + `#/math/formulas` + `#/math/map`.
- 18 routes at 390×844 light and dark (one topic per unit + math + formulas + map).
- 45 practice-page loads at 390×844 light, 390×844 dark and 1280×800 dark.
- Formula sheet at 1280/390, light/dark, all 36 rows expanded.
- Result: 0 console errors, 0 page errors, 0 failed requests, 0 `.katex-error`, 0 raw LaTeX, 0 page horizontal overflow, 0 visible hit targets under 44px.
- External College Board PDFs sampled (2023/2024/2026 FRQ and scoring guides) returned HTTP 200.

### Checker tests (browser)

- `calc-u10-q002` + `1/128` → “正确” (wrong; expected `1/64`). Also `0.02` → “正确”.
- `calc-u10-q002` + `1/64` → “正确”.
- `calc-u10-q006` + `1/e`, `1/E`, `0.368` → “等价正确”; correct.
- `calc-u10-q003` + missing `x³/6` in a fresh form → rejected; correct.
- `calc-u10-q003` + full `1+x+x²/2+x³/6` → accepted; correct.

### Screenshots

`screenshots/bug-round1-math/`:

- `topic-7.1-1280-light.png` — generic template and derivative example on a differential-equation page.
- `topic-2.9-1280-light.png` — quotient-rule page with power-rule formula.
- `topic-2.7-1280-light.png` — wrong title and derivative-definition formula.
- `topic-1.9-1280-light.png` — “连通间断类型” title.
- `topic-3.5-1280-light.png` — “高阶导数选讲” title.
- `topic-6.6-1280-light.png` — FTC title vs integral-properties content.
- `topic-7.2-1280-light.png` — “斜率场” title vs verifying-solutions content.
- `topic-8.7-1280-light.png` — disc title/formula vs cross-section figures.
- `topic-P1.1-1280-light.png` — prep template.
- `practice-calc-u1-stimulus-1280.png` — graph connects across the hole.
- `practice-calc-u1-graph-closeup-1280.png` — graph close-up.
- `practice-calc-u2-q012-mcq-1280.png` — generic MCQ with unrelated correct answer.
- `practice-calc-u10-q002-accepts-1-128-1280.png` — 1/128 marked correct.
- `practice-calc-u1-390-dark.png` — practice page mobile/dark.
- `formulas-1280-light-allopen.png`, `formulas-1280-dark-allopen.png`, `formulas-390-light-allopen.png`, `formulas-390-dark-allopen.png` — formula sheet, all rows open.
- `390-dark-*.png` — 18 mobile/dark topic/formula/map screenshots.

## Out of scope / notes

- `data/enrichments/batch2.js` is shared with another session; it was read only. No other subject (bio/mech/em) was audited here.
- `data/math/math-prep-alg.js`, `math-prep-fn.js` and `math-prep-trig.js` are unused older duplicates (not imported by `data/math/index.js`); they do not render, but they are dead content in the repo.
- No P0, console, KaTeX, overflow or hit-target bug was found on any math route.
