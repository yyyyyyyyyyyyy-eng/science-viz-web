# Math practice fixes — session A log

Date: 2026-11-06
Scope: `data/math/practice/`, `scripts/math-practice-templates.mjs`, `scripts/build-practice-v9.mjs`.

## Batch 1 — confirmed errors and generic FRQ answers

### `calc-u10-q006` ratio test

- `expected`: `"0"` → `"1/E"` (mathjs accepts `1/E` as `1/e`).
- `answerLatex`: `0` → `\dfrac{1}{e}`.
- Solution: now states the ratio limit is `\dfrac{1}{e}<1`, so the series is absolutely convergent.
- Added `solutionLatex` so the displayed solution renders the limit correctly.

Stem retained: \(a_n=\dfrac{n!}{n^n}\), \(\lim \dfrac{|a_{n+1}|}{|a_n|}\).

### Generic FRQ answers

Found exactly 198 items carrying the template answer:

> 结合本单元定义与定理作答；写出关键公式时使用堆叠分式。

and the template solution:

> 评分看定义准确性与推理链。

The generator (`math-practice-templates.mjs`) now has a prompt-specific model-answer table keyed by the actual prompt. All 198 items were regenerated from it; none of the template strings remain. Each family answer directly responds to its prompt, including:

- conditionally convergent example: \(\sum (-1)^n/n\);
- related rates: circular ripple, \(A=\pi r^2\), \(A'(t)=2\pi r\,r'(t)\);
- Euler step: \(y_{n+1}=y_n+h\,y'(x_n,y_n)\);
- removable discontinuity: \(\lim_{x\to2}(x^2-4)/(x-2)=4\) with an \(\varepsilon\)-\(\delta\) argument;
- chain rule, derivative signs, net vs total area, parametric slope, average vs instantaneous rate, algebra/geometry/precalc prompts.

### `x^{1}` notation

`polyExpandLatex` in `build-practice-v9.mjs` now emits \(x\) for exponent 1. `math-prep-alg1` answers read \(x^{2}+x+1\), \(x^{3}+x^{2}+x+1\), etc. Zero `x^{1}` remain in the banks.

### Verification (batch 1)

- Rebuilt all 15 math banks with `MATH_ONLY=1 node scripts/build-practice-v9.mjs`; build exits 0.
- Grep for the template answer/solution: 0 hits.
- Grep for `x^{1}`: 0 hits.
- All 198 previously generic items now have prompt-specific answers (14 prompt families).
- `node scripts/check-math-notation.mjs` → `MATH_NOTATION_OK` (the checker skips practice banks; practice banks also grepped for `\frac`, `\tfrac`, and slash fractions).

## Batch 2 — original AP Calc BC FRQs

Added 8 original FRQ sets (24 items total) as high-frequency AP Calc BC practice. They are appended after the generated bank with stable explicit ids (`calc-uN-frq1-qN`), so existing item ids never move.

| Unit | Topic | Items |
|---|---|---:|
| `calc-u2` | 切线与法线（三次函数，水平/平行切线） | 3 |
| `calc-u4` | 相关变化率（靠墙梯子，顶端速度与面积变化率） | 3 |
| `calc-u5` | 优化（抛物线下内接矩形） | 3 |
| `calc-u6` | 平均值、积分中值定理、累积函数与 FTC | 3 |
| `calc-u7` | 分离变量（指数增长与倍增时间） | 3 |
| `calc-u8` | 已知截面体积（正方形/等边三角形/半圆） | 3 |
| `calc-u9` | 极坐标面积（心脏线） | 3 |
| `calc-u10` | `ln(1+x)` 级数、数值估计与收敛区间 | 3 |

All displayed math uses KaTeX and `\dfrac`; no template MCQs were added.

### Verification (batch 2)

- Rebuilt all 15 math banks (`MATH_ONLY=1 node scripts/build-practice-v9.mjs`), exit 0; total items 938 → 962.
- Confirmed each new set has 3 questions and a unique stable id.
- Manual re-derivation of every new item: tangent/normal, ladder rates, optimization, average value, exponential doubling, cross-section volumes, cardioid area, log series/error/interval.
- Playwright on `127.0.0.1:9123` (new server, no existing server touched):
  - `calc-u1`, `calc-u4`, `calc-u8`, `calc-u9`, `calc-u10`: 0 console errors, 0 KaTeX errors.
  - All 8 new FRQ sets load, show 3 cards, and open their solutions: 0 console errors, 0 KaTeX errors.
  - `calc-u10-q006`: entering `1/e` gives “等价正确” (`form[data-state="ok"]`).
  - `calc-u10-q011` solution names \(\sum(-1)^n/n\) and explains conditional convergence.
- Screenshots: `screenshots/practice-fix-math/` (`calc-u10.png`, `calc-u10-q006-correct.png`, and one `*-new-frq.png` per new set).

## Self-check (final)

- Re-read the changed generator sections and all 8 new FRQ sets; re-ran the build and the Playwright checks above.
- Grep: 0 remaining `结合本单元定义与定理作答`, 0 `评分看定义准确性` in banks, 0 `x^{1}`, 0 `\frac`/`\tfrac` in practice banks and generator scripts.
- No broken LaTeX, slash fractions in displayed answers, overflow, or console errors found in the sampled pages.
- Re-ran `MATH_ONLY=1 node scripts/build-practice-v9.mjs` after the commit: 962 items, no diff against the committed banks.
- Final Playwright pass (`calc-u10`, `calc-u1`, `calc-u2`, `calc-u4`, `calc-u6`, `calc-u8`): 0 console errors, 0 KaTeX errors; `calc-u10-q006` still accepts `1/e`.
- One cosmetic redundancy in `calc-u10-q006`: the answer shows \(\dfrac{1}{e}\) and the solution repeats the limit. It is correct and legible, so left as is.
