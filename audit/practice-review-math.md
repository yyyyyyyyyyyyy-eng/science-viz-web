# Practice review — AP Calculus BC (report only)

Date: 2026-11-06
Scope: `data/math/practice/` — 15 banks (Calc BC `calc-u0`…`u10` plus `math-prep-alg1/alg2/geo/precalc`), read-only.
Constraint: another session owns the math practice files (`scripts/math-practice-templates.mjs`, `scripts/build-practice-v9.mjs`, `data/math/practice/`). This report records findings only; no math practice file was edited.

## Summary

| Severity | Pattern | Count |
|---|---|---:|
| High | `calc-u10-q006` ratio-test limit is wrong: answer `0`, correct limit `1/e` | 1 |
| High | “Give an example / explain” FRQs have a generic template answer that does not answer the prompt | 198 |
| High | Same generic MCQ template across all units; correct option is unit-independent | ~200 |
| Moderate | `x^{1}` remains in polynomial answers instead of `x` | 7 |
| Low | Heavy duplication of the same symbolic item within each bank | large |
| — | Wrong order of magnitude / impossible units | 0 confirmed |

All other sampled calculations were correct, including the related-rates cone, washer volume, Taylor remainder, logistic model, parametric derivatives, trapezoid estimate, and the standard derivatives/integrals.

## Findings

### 1. High — wrong ratio-test limit (`calc-u10-q006`)

Path: `data/math/practice/calc-u10.js`, item `calc-u10-q006` (title “比值审敛”).

Current item:

\[
a_n=\dfrac{n!}{n^n},\qquad
\lim_{n\to\infty}\dfrac{|a_{n+1}|}{|a_n|}=?
\]

Current answer: `0`; current `expected: "0"`; current solution “→0，绝对收敛。”

Correct calculation:

\[
\frac{|a_{n+1}|}{|a_n|}
=\frac{(n+1)!}{(n+1)^{n+1}}\cdot\frac{n^n}{n!}
=\frac{n^n}{(n+1)^n}
=\left(\frac{n}{n+1}\right)^n
=\frac{1}{(1+1/n)^n}
\longrightarrow \frac{1}{e}\approx0.368.
\]

The series is still absolutely convergent because \(1/e<1\), so the final conclusion “绝对收敛” is correct, but the displayed limit and symbolic answer are wrong. A student who enters \(1/e\) is marked wrong by the symbolic checker. This is the only wrong formula/value confirmed in the math bank.

Recommended correction (owned by the math session): `expected: "1/E"` or `"e^(-1)"`, `answerLatex: "\\dfrac{1}{e}"`, solution “比值极限 \(1/e<1\)，故绝对收敛。”

### 2. High — generic answers do not match the specific FRQ

198 items use the answer:

> “结合本单元定义与定理作答；写出关键公式时使用堆叠分式。”

with solution “评分看定义准确性与推理链。” This answer is used even when the stem asks for a concrete example or a specific comparison. Representative cases:

- `calc-u10-q011`, `calc-u10-q015`, `calc-u10-q019`, … (19 copies): stem “举一个条件收敛但不绝对收敛的级数例子（名称即可）”; the answer does not name a series. Correct example: \(\sum (-1)^n/n\).
- `calc-u4-q008`, `calc-u4-q012`, …: stem asks for a real related-rates example and an equation; the answer gives no example.
- `calc-u7-q011`, `calc-u7-q019`, …: stem asks how one Euler step advances an approximate solution; the answer is generic.
- `calc-u1-q012`, `calc-u1-q017`, …: stem asks for an ε-δ/intuition explanation of a removable discontinuity; the answer is generic.

This is the “solution does not match the prompt” class. It cannot be fixed by a global substitution; each template needs a real answer or a narrower prompt.

### 3. High — generic MCQs

Representative: `calc-u1-q010`, `calc-u5-q006`, `calc-u10-q009`, `math-prep-alg1-q010`, `math-prep-geo-q009`.

Each unit reuses one of a handful of correct options such as:

- “极限存在不要求 f(a) 有定义，但连续要求三者一致”
- “一阶导数符号决定增减，二阶导数符号决定凹凸”
- “可导 ⇒ 连续；连续 ⇏ 可导”

The distractors are always the same four meta-statements (“代数变形可以随意除以可能为零的因式…”, “图像与符号表达式可以互相矛盾…”, etc.). The items test generic mathematical hygiene, not the unit topic. This is the same G6 pattern as the physics/bio banks.

### 4. Moderate — `x^{1}` notation

`math-prep-alg1-q009/q014/q019/q024` (7 occurrences with repeats) display answers such as \(x^{2}+x^{1}+1\). The value is correct, but the conventional form is \(x^{2}+x+1\). This is a notation issue, not a wrong answer.

### 5. No confirmed order-of-magnitude/unit errors

I recomputed the sampled numeric items:

- Cone: \(r=h/3\), \(V=\pi h^3/27\), \(dh/dt=2/\pi\approx0.637\) at \(h=3\).
- Washer volume: \(\pi\int_0^2(4x^2-x^4)\,dx=64\pi/15\).
- Taylor remainder: \(e^{0.2}(0.2)^4/4!\approx8.14\times10^{-5}\).
- Logistic: \(P(t)=1200/(1+5e^{-0.4t})\), \(P(2)\approx370\), \(t_{\max}=\ln5/0.4\approx4.02\).
- Parametric: \(dy/dx=(3t^2-3)/(2t+1)\), \(d^2y/dx^2(1)=2/3\).
- Trapezoid: \((2+4)/2+(4+3)/2=6.5\).
- Standard derivatives/integrals and geometry items checked out.

## Verification and scope note

- Read-only parse of all 15 banks; no files under `data/math/practice/` were modified.
- Confirmed current item counts: 40/84/84/72/56/60/80/84/68/84/68 and 40/40/40/38 (Calc + prep).
- Confirmed `calc-u10-q006` is not a display-only issue: `expected` is the string `"0"`, so symbolic grading would reject the correct \(1/e\).
- Because another session is actively editing these files, line numbers are omitted; item IDs are stable and sufficient.

## Recommended follow-up (math session)

1. Fix `calc-u10-q006` immediately; it is a one-line data change.
2. Replace the 198 generic “定义与定理” answers with prompt-specific answers, starting with `calc-u10` (19 example requests) and the “argumentation” items in each unit.
3. Replace the meta-MCQ pools with unit-specific propositions.
4. Normalize `x^{1}` → `x`.
5. Deduplicate: each unit repeats the same symbolic derivative/integral item 10–20 times.

## Self-check (2026-11-06)

Re-read the current math practice banks after the later math-session commits (`014b593`, `2a27135`) and rechecked the report-only findings.

- `calc-u10-q006` is still wrong: `expected: "0"`, but \((n/(n+1))^n\to1/e\); this was not changed by the later math commits.
- 198 generic “结合本单元定义与定理作答” answers remain.
- 19 `calc-u10` prompts still ask for a conditionally convergent example without naming one.
- 7 `x^{1}` notation occurrences remain.

No math practice file was edited (out of scope). No new wrong formula/order-of-magnitude issue was found in the sampled items; the report above remains current.

Base SHA: web `bf2a022`. The self-check commit SHA is listed in the final session report; app sync follows the final web commit.
