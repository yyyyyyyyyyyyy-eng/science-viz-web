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

Pending.
