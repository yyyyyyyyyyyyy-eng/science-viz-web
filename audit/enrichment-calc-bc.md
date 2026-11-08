# Calc BC enrichments + batch2 polish / 微积分 BC 强化与 batch2 润色

Session date: 2026-11-08. Base web HEAD: `a8c0616`. Base app HEAD: `2129103`.

All new teaching strings are bilingual: Chinese first, then English, on the same page. Formulas remain a single LaTeX copy.

## Part A — polish / 润色

1. `bio/bio-u5/5.6`, 例 3 title: changed from `例 3 · 不分离` to `例 3 · 不分离时期与异常配子 · Nondisjunction Timing and Abnormal Gametes`. Prompt, steps, solution, and teaching content are unchanged. The new title distinguishes it from `bio/bio-u5/5.2` and matches the example's actual comparison of meiosis I versus meiosis II nondisjunction.
2. `bio/bio-u7/7.12`: removed the duplicated Shannon formula from the `formulas` array and added a bilingual pointer in `intuitionDetailed` to `8.6` for the full definition, evenness, and computation. The population-variation teaching (allele frequency, heterozygosity, selection, drift, gene flow) is untouched. Added a bilingual `8.6` related link.
3. Related-title fixes requested during the session:
   - `bio/bio-u7/7.13` → `7.12`: `种群变异 · Variations in Populations`
   - `bio/bio-u6/6.5` → `6.6`: `基因表达与细胞特化 · Gene Expression and Cell Specialization`
   - `bio/bio-u5/5.5` → `6.6`: `基因表达与细胞特化 · Gene Expression and Cell Specialization`

## Part B — 15 new Calc BC overlays / 15 个微积分 BC 教学覆盖

| Key | Topic / 主题 | Teaching focus / 教学内容 |
| --- | --- | --- |
| `math/calc-u10/10.2` | 几何级数 · Working with Geometric Series | Partial sums, ratio criterion, sum formula, index shifts, repeating decimals |
| `math/calc-u10/10.5` | 调和级数与 p 级数 · Harmonic Series and p-Series | Integral-test derivation, p > 1 criterion, harmonic counterexample, radicals |
| `math/calc-u10/10.7` | 交替级数 · Alternating Series Test | Three AST conditions, why alternation alone fails, error bound, conditional convergence |
| `math/calc-u10/10.8` | 比值检验 · Ratio Test | Ratio limit, factorial and exponential simplification, L = 1 is inconclusive |
| `math/calc-u10/10.13` | 半径与区间 · Radius and Interval of Convergence | Radius from ratios, center shift, endpoint checks, interval notation |
| `math/calc-u10/10.14` | 函数表示为幂级数 · Taylor or Maclaurin Series | Coefficient formula, common expansions, substitution/multiplication/integration, remainder caveat |
| `math/calc-u9/9.3` | 参数弧长 · Parametric Arc Length | Speed integral, arc element, circle/line/polynomial examples, parameter limits |
| `math/calc-u9/9.7` | 极坐标导数 · Polar Coordinates and Differentiation | Polar–rectangular conversion, dy/dx formula, horizontal/vertical tangents, pole |
| `math/calc-u9/9.8` | 极坐标面积 · Area of a Polar Region | Sector area element, angle range, symmetry, circle/cardioid checks |
| `math/calc-u6/6.11` | 部分分式 · Linear Partial Fractions | Proper fractions, distinct and repeated linear factors, undetermined coefficients, logs |
| `math/calc-u6/6.12` | 反常积分 · Improper Integrals | Infinite intervals, endpoint and interior singularities, both p-criteria, comparison |
| `math/calc-u8/8.11` | 垫圈法 · Washer Method | Annulus cross sections, outer/inner radii, x- and y-axis setups, disk limit |
| `math/calc-u8/8.13` | 弧长 · Planar Arc Length and Distance | ds derivation, y = f(x) and x = g(y) forms, distance versus displacement |
| `math/calc-u5/5.4` | 一阶导数检验 · First Derivative Test | Sign charts, + to − and − to +, f′ DNE points, comparison with second-derivative test |
| `math/calc-u5/5.6` | 凹性与拐点 · Concavity and Inflection Points | f″ sign, inflection sign change, why f″ = 0 is not enough, graph connections |

Each entry includes topic-specific `learningObjectives`, `essentialKnowledge`, definition, intuition, KaTeX formulas, conditions, key points, misconceptions, three worked examples, AP tips, resolving related links, development sequence, self-checks, and summary.

## Verification / 验证

- `node --check data/enrichments/batch2.js`: pass.
- `node scripts/check-math-notation.mjs`: `MATH_NOTATION_OK`.
- All 15 new keys present with non-empty topic-specific objectives and essential knowledge; no slogan text or slash fractions.
- Related links resolve against the loaded math/bio course data (0 unresolved).
- Targeted Playwright at 1280×900 on all 15 calc routes and the five bio spot-check routes: 0 console errors, 0 page errors, 0 `.katex-error`, 0 horizontal overflow, 0 forbidden slogan hits.
- Mobile 390×844 check on `math/calc-u10/10.2`: same zero-error result.
- Screenshots: `screenshots/enrichment-calc-bc/` (15 calc desktop pages, one calc mobile page, five bio spot-check pages).
- Part A rendered checks: `5.6` shows the bilingual new title; `7.12` shows the bilingual Shannon pointer to `8.6`; `7.13`, `6.5`, and `5.5` show the corrected bilingual related titles.

## Leftovers / 遗留

None for this scope. The other session's files (`data/bio/bio-u6.js`, `data/bio/bio-u7.js`, `data/enrichments/batch1.js`) were not edited. No E&M work, no template MCQs, no full sweep, no Mac packaging.
