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

## Batch 3 — AP Biology (12 topics)

Added CED-aligned entries across Units 1–7:

- `bio-u1/1.3` 生物大分子导论
- `bio-u1/1.6` 酶结构与功能
- `bio-u2/2.7` 渗透与水势
- `bio-u2/2.8` 主动运输
- `bio-u3/3.2` 环境影响酶
- `bio-u4/4.2` 信号导引导论
- `bio-u5/5.3` 孟德尔遗传
- `bio-u5/5.4` 非孟德尔遗传
- `bio-u6/6.1` DNA 与 RNA 结构
- `bio-u6/6.3` 转录与 RNA 加工
- `bio-u6/6.5` 基因表达调控
- `bio-u7/7.5` 哈代–温伯格

Each has definition, intuition, formulas, conditions, key points, misconceptions, three worked examples, exam tips, related links, development, checks, and summary.

### Verification (Biology)

- `node --check data/enrichments/batch2.js` → OK.
- 89 current keys resolve; all `related` links resolve (0 bad).
- KaTeX render of 437 formula/`solutionLatex` strings → 0 errors (fixed escaped-prime notation in `6.3` during self-check).
- `check-math-notation.mjs` → `MATH_NOTATION_OK`.
- Playwright on 12 new topic pages × desktop 1280 / mobile 390 (24 loads): 0 console errors, 0 page errors, 0 `.katex-error`, 0 horizontal overflow, 0 template-phrase hits.
- Screenshots: `screenshots/enrichment-next/bio-*.png`.

## Batch 3b — AP Biology completion (2026-11-07)

The parallel Bio pass above added the 12 core Bio entries. This session added four more Bio overlays and completed the teaching blocks of all 12 existing Bio entries.

New Bio overlays:

- `bio/bio-u1/1.4` 蛋白质性质
- `bio/bio-u2/2.1` 细胞器与区隔化
- `bio/bio-u7/7.1` 自然选择导论
- `bio/bio-u8/8.4` 密度效应

Completed the 12 parallel Bio entries (`1.3`, `1.6`, `2.7`, `2.8`, `3.2`, `4.2`, `5.3`, `5.4`, `6.1`, `6.3`, `6.5`, `7.5`) by adding topic-specific `learningObjectives`, `essentialKnowledge`, `derivationNotes`, and `connections`. The generic “准确陈述定义、适用范围与符号约定” blocks are now replaced on every one of these pages with topic-specific teaching points (monomers/peptide bonds, water potential, Na⁺/K⁺ stoichiometry, inhibitor kinetics, cAMP amplification, Mendelian ratios/chi-square, base pairing, transcription direction, operons, selection, Hardy–Weinberg, logistic growth).

Bio status: **50/89 enriched** (AP Bio **49/63**; 1 prep topic).

Leftover AP Bio (14): `1.2`, `2.10`, `3.6`, `5.2`, `5.5`, `5.6`, `6.6`, `7.6`, `7.8`, `7.12`, `7.13`, `8.1`, `8.6`, `8.7`.

## Batch 4 — AP Calculus BC continuation

Added three CED-aligned Calc BC overlays:

- `math/calc-u3/3.1` 链式法则
- `math/calc-u8/8.9` 圆盘法
- `math/calc-u10/10.12` 拉格朗日误差界

Also fixed the named `math/calc-u10/10.11` page by replacing its generic teaching block with Taylor-specific objectives, essential knowledge, derivation notes, and connections. Same fix applied to `mech/mech-u5/5.3`.

Calc status: **23/158 enriched** (AP Calc **21/113**; 92 AP Calc topics still lack overlays). Largest remaining clusters: Unit 1 limits/continuity, Unit 2 derivative rules, Unit 5 curve analysis, Unit 6 integration techniques, Unit 8 volumes, Unit 9 polar/parametric, Unit 10 series tests.

## Batch 5 — AP Physics C E&M

Added two E&M overlays:

- `em/em-u8/8.5` 高斯定律
- `em/em-u11/11.6` 基尔霍夫环路

A parallel E&M pass had already placed eight entries in `batch2.js` (`9.3`, `10.1`, `11.3`, `11.7`, `12.4`, `13.2`, `13.5`, `13.6`). This session added their missing `derivationNotes` and `connections` so their pages no longer show generic “上游/下游/跨学科” template text, and included them in the targeted Playwright check.

E&M status: **23/40 enriched** (AP E&M **23/31**). Leftover AP E&M (8): `8.1`, `8.3`, `9.4`, `10.2`, `11.5`, `12.2`, `12.3`, `13.3`.

## Verification (this round)

- `node --check data/enrichments/batch2.js` → OK.
- `batch2.js`: 106 keys, 0 duplicate keys; merged batch1+batch2: 120 keys, all resolve to real topics; all `related` links resolve (0 bad).
- KaTeX render of 506 `formula` / `solutionLatex` strings → 0 errors.
- `node scripts/check-math-notation.mjs` → `MATH_NOTATION_OK`.
- `node scripts/build-topic-depth.mjs` → **120/340 enriched**.
- Targeted Playwright on 31 new/changed topic pages × desktop 1280 / mobile 390 = **62 loads**:
  - 0 console errors, 0 page errors, 0 HTTP ≥ 400
  - 0 `.katex-error`
  - 0 horizontal overflow
  - 0 hits for generic template phrases (`准确陈述定义`, `适用范围与符号约定`, `四种表征`, `定义/公理/实验事实`, `上游：本单元前置主题`, etc.)
  - all 31 pages render the essential-knowledge, derivation, and connections blocks from the overlay.
- Screenshots: `screenshots/enrichment-next/<subject>-<chapter>-<code>.png` and `...-mobile.png` for all 31 pages.

## Final session-B self-check (2026-11-07)

- Added topic-specific `learningObjectives`, `essentialKnowledge`, and `connections` to the 23 Mechanics/Calculus overlays that still lacked them, so their pages no longer show the generic “准确陈述定义 / 四种表征 / 上游—下游” teaching block. Content is derived from each entry’s own key points, formula notes, misconceptions, and related links.
- Re-ran the all-field KaTeX scan (not just formula/solutionLatex): **3,280 math snippets, 0 errors**. This caught and fixed single-backslash LaTeX in inherited entries (`\vec`, `\varepsilon`, `\%`, `\sumdfrac`), plus escaped-prime issues in transcription notation.
- Fixed a numeric error in `math/calc-u5/5.11` example 2: the minimum open-box surface area is \(48\,\mathrm{cm^{2}}\), not 80.
- Re-ran `node --check`, key/related resolution (106 batch2 keys, 120 merged, 0 bad), `check-math-notation.mjs` (`MATH_NOTATION_OK`), and `build-topic-depth.mjs` (**120/340**).
- Re-ran Playwright on the 10 E&M pages plus a 13-page cross-subject sample (Mechanics, Calculus, Biology, E&M; desktop 1280 + mobile 390): 0 console errors, 0 page errors, 0 `.katex-error`, 0 horizontal overflow, 0 generic-template hits.
- Screenshots refreshed for the rechecked pages under `screenshots/enrichment-next/`.
