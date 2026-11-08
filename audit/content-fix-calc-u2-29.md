# Calc 2.9 vocabulary fix — quotient-rule formula

**Date:** 2026-11-09  
**Baseline:** `613f82e` (`science-viz-web`)  
**Scope:** `data/math/calc-u2.js` only (plus this audit and screenshots)

## Change

Topic 2.9 「积商法则续 · The Quotient Rule」, vocabulary item 「商的导数 · derivative of a quotient」.

Before, both definitions stopped at the numerator and omitted division by the square of the denominator:

- zh: 「由分子导数乘分母减去分子乘分母导数得到。」
- en: “Obtained from numerator derivative times denominator minus numerator times denominator derivative.”

After, both sides state the full quotient rule:

- zh: 「由分子导数乘分母减去分子乘分母导数，再除以分母的平方：\(\dfrac{f'(x)g(x)-f(x)g'(x)}{[g(x)]^{2}}\)。」
- en: “Obtained from numerator derivative times denominator minus numerator times denominator derivative, then divided by the square of the denominator: \(\dfrac{f'(x)g(x)-f(x)g'(x)}{[g(x)]^{2}}\).”

The entry keeps the `{ termZh, termEn, defZh, defEn }` shape. The adjacent complete 「商法则 · quotient rule」 entry (lines 1550–1553) was already correct and was left untouched. No other topic, vocabulary item, or file was edited by this session.

## Checks

| Check | Result |
|---|---|
| `node --check data/math/calc-u2.js` | passed |
| `node scripts/check-math-notation.mjs` | `MATH_NOTATION_OK` |
| Diff scope | single 2-line replacement in `data/math/calc-u2.js` |
| Formula form | `\dfrac` on both zh/en sides; no `\frac`, slash fraction, or `÷` |
| Vocabulary totals | calc-u1…calc-u10: 111 topics / 640 terms; all source topics: 646 terms; 6.12: 7 terms — unchanged |
| Targeted route | `#/t/math/calc-u2/2.9`, desktop 1280×1000, light theme, `scripts/serve-dev.py` |
| Rendered item | 2 `.katex` instances and 2 `.mfrac` fraction bars in the vocab line; no raw `\dfrac` visible |
| Console/page errors on this route | none |

Screenshot: `screenshots/content-fix-calc-u2-29/2-9-vocabulary-quotient-rule-desktop-light.png` (element crop) and `2-9-topic-desktop-light.png` (full page).

Note: `data/enrichments/batch2.js` was already modified in the working tree by the parallel 2.8 / 6.7 session; it was not staged or committed here. No broad “0 KaTeX/console errors” claim is made for formula sheets or all E&M routes.
