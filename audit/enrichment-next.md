# Enrichment next — session B work log

Date: 2026-11-06
Scope: `data/enrichments/batch2.js`, `audit/topic-depth.json`, this log, `screenshots/enrichment-next/`, TODO §2.

Starting point: web `4d1c4db`; batch2 had 52 entries; 66/340 topics enriched.

## Batch 1 — AP Physics C Mechanics (13 topics)

Completed the remaining AP Mechanics core so all 24 AP Mechanics topics now have an enrichment overlay:

- `mech-u1/1.1` 一维运动学
- `mech-u1/1.2` 二维运动学
- `mech-u2/2.3` 牛顿第一与第二定律
- `mech-u2/2.4` 圆周运动
- `mech-u3/3.2` 力与势能
- `mech-u3/3.3` 机械能守恒
- `mech-u4/4.1` 冲量与动量
- `mech-u4/4.2` 动量守恒与碰撞
- `mech-u5/5.1` 力矩与静力学
- `mech-u5/5.2` 转动运动学
- `mech-u5/5.3` 转动动力学
- `mech-u6/6.1` 转动动能
- `mech-u7/7.1` 周期运动

Each entry has a real definition, CED-aligned formulas, conditions/assumptions, key points, misconceptions, three worked examples with numeric answers, exam tips, resolving related links, development sequence, checks, and summary.

### Verification (Mechanics)

- `node --check data/enrichments/batch2.js` → OK.
- All 65 current keys resolve to real topics; all `related` links resolve (0 bad).
- KaTeX render of 325 formula/`solutionLatex` strings → 0 errors.
- `node scripts/check-math-notation.mjs` → `MATH_NOTATION_OK` (no slash fractions).
- Playwright on 13 new topic pages × desktop 1280 / mobile 390 (26 loads): 0 console errors, 0 page errors, 0 `.katex-error`, 0 horizontal overflow, 0 template-phrase hits.
- Screenshots: `screenshots/enrichment-next/mech-*.png`.

## Batch 2 — AP Calculus BC (12 topics)

Added CED-aligned entries across Units 2–10:

- `calc-u2/2.8` 积商法则
- `calc-u3/3.2` 隐函数求导
- `calc-u4/4.4` 相关变化率
- `calc-u4/4.7` 洛必达法则
- `calc-u5/5.1` 中值定理
- `calc-u5/5.11` 优化求解
- `calc-u6/6.9` 换元积分法
- `calc-u6/6.10` 分部积分
- `calc-u7/7.6` 可分离变量
- `calc-u8/8.4` 曲线间面积
- `calc-u9/9.1` 参数运动导数
- `calc-u10/10.11` 泰勒多项式导论

Each has definition, intuition, formulas, conditions, key points, misconceptions, three worked examples, exam tips, related links, development, checks, and summary.

### Verification (Calculus)

- `node --check data/enrichments/batch2.js` → OK.
- 77 current keys resolve; all `related` links resolve (0 bad).
- KaTeX render of 399 formula/`solutionLatex` strings → 0 errors.
- `check-math-notation.mjs` → `MATH_NOTATION_OK`.
- Playwright on 12 new topic pages × desktop 1280 / mobile 390 (24 loads): 0 console errors, 0 page errors, 0 `.katex-error`, 0 horizontal overflow, 0 template-phrase hits.
- Screenshots: `screenshots/enrichment-next/math-*.png`.

## Batch 3 — AP Biology

Pending.

## Batch 4 — AP Physics C E&M

Pending.
