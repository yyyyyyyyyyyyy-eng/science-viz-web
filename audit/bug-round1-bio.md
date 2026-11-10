# Bug audit round 1 — AP Biology and bio prep

Date: 2026-11-10  
Repo: `/workspace/science-viz-web` @ `af68b0f`  
Scope: `data/bio/**`, bio overlays in `data/enrichments/batch1.js` / `batch2.js`, bio practice banks, bio topic/chapter/map pages, bio exam figures and their controls, bio mind-map labels/links.

Result: **0 P0, 10 P1, 10 P2**. No broken route, console error, KaTeX error, horizontal overflow, sub-44px hit target, or broken figure was found. The defects are content validity, template residue, bilingual coverage, and a few science/notation errors.

## Top 10 (P1)

| ID | Severity | Route | File:line | What is wrong | Suggested fix |
|---|---|---|---|---|---|
| BIO-01 | P1 | `#/t/bio/bio-prep-chem/P1.1`…`P1.12`, `#/t/bio/bio-prep-hs/P2.1`–`P2.4`, `P2.6`–`P2.14` (25 topics) | `data/bio/bio-prep-chem.js:21,28,36`; `data/bio/bio-prep-hs.js:21,28,36` | All 25 bio-prep topics are still generic template records. Definition says “X 是本单元的核心知识点…”, objectives are “能陈述…/能在符号、图像、数值三种表征间转换”, examples ask for a definition rather than the named science, and `summary` is only the title (e.g. P1.1 summary = “科学测量与有效数字 · Measurement and Significant Figures”). | Add batch2-style topic-specific overlays for the 25 prep topics: real definition, objectives, formulas, worked examples, misconceptions, summary. |
| BIO-02 | P1 | `#/t/bio/bio-u1/1.3`, `/2.2`, `/3.4`, `/4.2`, `/5.3`, `/7.4`, `/8.2` (49 topics total) | `data/enrichments/batch2.js:6787` (1.3), `:1037` (2.2), `:529` (3.4), `:7153` (4.2), `:7229` (5.3), `:1606` (7.4), `:847` (8.2) | 49 of the 64 overlaid bio topics contain only Chinese teaching text; only 15 overlaid topics use the required “Chinese first · English second” format. The 25 template-only prep topics and all 10 practice banks are also Chinese-only. Example 1.3: every essential-knowledge bullet and learning objective has no English counterpart. | Append English translations after ` · ` field by field, following the 6.7 / 7.11 pattern. This is 2,338 Chinese-only strings in the overlaid topics alone. |
| BIO-03 | P1 | all `#/bio/practice/*` | `data/bio/practice/bio-u1.js:181` (generic FRQ answer), `:202` (generic MCQ choices); same pattern in all 10 banks | The practice bank is template filler. All 108 MCQs have only two distinct correct options: 78 × “图示结构/关系支持该知识点的核心机制” and 30 × “仅改变自变量，其余条件恒定”. All 448 FRQs share 8 distinct answers and only 89 distinct stems. The item named for a topic does not test that topic’s mechanism. | Rewrite per-topic MCQs and FRQs with topic-specific stems, correct mechanisms, distractors, and rubrics. The checker itself works (all 108 MCQs were tested). |
| BIO-04 | P1 | all `#/bio/practice/*` | `data/bio/practice/bio-prep-chem.js:11`; `data/bio/practice/bio-u1.js:11`; `data/bio/practice/bio-u7.js:35` (30 shared sets) | Shared stimuli are mismatched to the topic and sometimes duplicated. P1.1 “科学测量与有效数字” and U1 “水与生命” use an enzyme v–[S] table plus two copies of the same saturation graph; P1.3 “元素周期表” uses a gel; P2.2 “生物大分子” uses a pedigree; P2.3 “细胞结构” uses a Punnett square; U7.3 “人工选择” uses a food web. | Assign a topic-appropriate diagram/table per set, and render either the diagram graph or the `graph` canvas, not both. |
| BIO-05 | P1 | `#/t/bio/bio-u4/4.2`, `#/bio/bio-u4`, `#/bio/map` | `data/bio/bio-u4.js:148,166`; `data/enrichments/batch2.js:7177,7226`; `modules/syllabus.js:83`; `data/bio/relations.js:1338`; `data/bio/index.js:15` | The topic is titled “信号导引导论” (uses 导引 instead of 转导) and the definition uses “信号导引” instead of the standard term “信号转导”. The typo propagates to the chapter page, map relation panel, and graph data. | Rename to “信号转导导论” (or “信号转导入门”) and replace “信号导引” with “信号转导” in topic data, syllabus, GRAPH, and relations. |
| BIO-06 | P1 | `#/bio/bio-u6`, `#/bio/bio-u7`, `#/bio/map` | `modules/syllabus.js:110,129`; `data/bio/index.js:15`; `data/bio/relations.js:1832,2222` | Chapter and map labels are stale. 6.6 shows “基因突变” while the topic page is “基因表达与细胞特化”; 7.12 shows “生命起源多样性” while the topic page is “种群变异”. This also creates duplicate-looking labels with 6.7 “突变” and 7.13 “生命起源”. | Sync the 6.6 and 7.12 titles from `data/bio/bio-u6.js` / `bio-u7.js` into `modules/syllabus.js`, `data/bio/index.js` GRAPH, and `data/bio/relations.js`. |
| BIO-07 | P1 | `#/t/bio/bio-u7/7.3` | `data/enrichments/batch2.js:1582` | Example 2’s answer says dog breeds differ because of “多代人工选择 + 生殖隔离倾向”. Dog breeds are the same species and interbreed; there is no reproductive isolation. | Remove “生殖隔离倾向”; say “多代人工选择 + 品种形成（仍属同一物种，可杂交）”. |
| BIO-08 | P1 | `#/t/bio/bio-u7/7.4` | `data/enrichments/batch2.js:1616,1620,1628` | The page calls nonrandom mating one of the “五种进化力量” that changes allele frequencies. Nonrandom mating changes genotype frequencies, not allele frequencies; only mutation, selection, drift, and gene flow change allele frequencies. | Say “四种改变等位基因频率的力量 + 非随机交配改变基因型频率（HWE 假设偏离）”; update definition, key points, and development. |
| BIO-09 | P1 | `#/t/bio/bio-u8/8.2` | `data/enrichments/batch2.js:858` | Essential knowledge says decomposers “回收有机物中的化学能”. Energy is not recycled; decomposers recycle matter/nutrients, while energy is lost as heat. | Change to “分解者回收有机物中的物质（养分），能量最终以热的形式散失”. |
| BIO-10 | P1 | `#/t/bio/bio-u1/1.1`, `#/t/bio/bio-u3/3.1`, `#/t/bio/bio-u4/4.6`, `#/t/bio/bio-u5/5.1`, `#/t/bio/bio-u6/6.2` | `data/enrichments/batch1.js:631,689,736,785,838`; base `data/bio/bio-u1.js:22,27,121`, `bio-u3.js:22,27,121`, `bio-u4.js:705,710,816`, `bio-u5.js:22,27,121`, `bio-u6.js:157,162,268` | The five batch1 bio overlays replace definition/examples but leave the base template `learningObjectives`, `essentialKnowledge`, and `connections`. These pages show “能陈述…的准确定义” and “上游/下游/跨学科” filler next to otherwise good AP content. | Add topic-specific `learningObjectives`, `essentialKnowledge`, and `connections` to the five batch1 entries. |

## Additional P2 findings

| ID | Severity | Route | File:line | What is wrong | Suggested fix |
|---|---|---|---|---|---|
| BIO-11 | P2 | `#/t/bio/bio-u5/5.3` | `data/enrichments/batch2.js:7274,7275,7282` | Example steps/solutions use inline slash fractions `\(1/2\)`, `\(1/4\)`, `\(9/16\)` instead of stacked fractions. | Use `\dfrac{1}{2}`, `\dfrac{1}{4}`, `\dfrac{9}{16}`. |
| BIO-12 | P2 | `#/t/bio/bio-u5/5.1` | `data/enrichments/batch1.js:699` | Key point says “产物 4 个遗传不同的单倍体细胞（精细胞）或 1 卵+极体”. Oogenesis produces 1 ovum + 3 polar bodies (which degenerate), not “1 egg + polar body”; “4 genetically different cells” applies to spermatogenesis. | Write “精子发生：4 个精细胞；卵发生：1 个卵细胞 + 3 个极体（退化）”. |
| BIO-13 | P2 | `#/t/bio/bio-u1/1.3` | `data/enrichments/batch2.js:6787` | Definition says all four macromolecule classes “都由较小的单体通过脱水缩合连成聚合物”; the same page later correctly says lipids are usually not monomer polymers. | Limit the polymerization statement to carbohydrates, proteins, and nucleic acids; describe lipids as assembled from glycerol/fatty acids and other precursors. |
| BIO-14 | P2 | `#/t/bio/bio-u3/3.4`, `#/t/bio/bio-u7/7.4`, `#/t/bio/bio-u8/8.2` (52/57 topics) | `data/bio/bio-u3.js:453,543`; `data/bio/bio-u7.js:453,542` | 52 topics still show generic derivation notes “定义/公理/实验事实 → 核心关系 → 特例”; 57 topics show generic connections “上游：本单元前置主题 / 下游：本主题结论 / 跨学科”. These remain on otherwise enriched AP pages. | Replace with the actual derivation chain and specific upstream/downstream/application links for each topic. |
| BIO-15 | P2 | `#/t/bio/bio-u8/8.4` | `data/bio/figures.js:847` | The `pop-oscillation` caption always says the population oscillates around K “(damped)”. At the slider maximum r = 2.2 the discrete logistic model settles into a persistent 2-cycle (≈476 ↔ 521), not a damped return. | Make the caption conditional (`r < 2` damped; `r ≥ 2` stable 2-cycle/chaos) or cap the slider at 1.9. |
| BIO-16 | P2 | `#/t/bio/bio-u5/5.3` | `data/bio/figures.js:584` | The `punnett-di` caption uses `\tfrac14`; displayed math is required to use `\dfrac`. | Use `\dfrac{1}{4}`. |
| BIO-17 | P2 | `#/t/bio/bio-u8/8.2` | `data/bio/figures.js:870`; `data/enrichments/batch2.js:898` | The exam tip says “宽度表示能量”, but the energy-pyramid bar width is computed from `log10(energy)` (460/360/260/160 for 10,000/1,000/100/10), so width is not proportional to energy. | Use a linear width scale, or change the tip to “width is schematic; labels give the energy values”. |
| BIO-18 | P2 | `#/t/bio/bio-u7/7.2` | `data/enrichments/batch2.js:1494` | The definition says natural selection is “不具定向性”, while the same page teaches directional selection and its example says “方向性选择”. This reads as a direct contradiction. | Say “不预设目标或终点” instead of “不具定向性”. |
| BIO-19 | P2 | all bio topic pages with figures (147 figures) | `data/bio/figures.js:94` (representative); every `caption` in the file | All 147 bio exam-figure captions are English-only (titles and captions), while the surrounding student text is Chinese-first; they do not meet the required “Chinese first · English second” format. | Prepend a Chinese caption/translation and join with ` · `, or explicitly exempt AP-style figure captions in the content rules. |
| BIO-20 | P2 | `#/bio/map` relation panels | `data/bio/relations.js:1338` (87 occurrences) | 87 map relation panels use the same template: “掌握「X」是学习「Y」的前提：前者提供定义、符号或基本关系…”, with the same generic `why` and `example`. The panel does not explain the actual relation. | Write topic-specific relation summaries, or remove the generic `summary`/`why`/`example` fields from the map panel. |

## Verification performed

- **All 89 bio topic routes** at 1280×900 light: 0 console errors, 0 page errors, 0 failed requests, 0 `.katex-error`, 0 raw LaTeX text, 0 horizontal overflow, 0 broken images.
- **All 10 bio practice routes** at 1280 light: 0 console/KaTeX errors, 0 overflow. All 108 MCQs were exercised: a wrong choice + “检查答案” gives “再试一次”; the marked correct choice gives “正确”. No checker rejection/acceptance bug found.
- **All 12 subject/chapter/map routes** plus all 10 practice routes at 390×844 light and dark: 0 horizontal overflow, 0 visible hit targets under 44 px, 0 console errors.
- **21 interactive bio figures** across 18 topic pages: every range slider and button changed the SVG; captions updated where `captionFor` exists; 0 control errors; all control heights ≥ 44 px.
- **Figure inventory**: 147 figure IDs, all 147 referenced by `TOPIC_FIGURES`; 89/89 bio topics render at least 2 figures; no missing figure ID.
- **Dark theme sample** (3.4 photosynthesis, 8.5 community ecology): SVG labels use theme tokens (`--text`, `--text-muted`, `--fig-*`); no unreadable labels or contrast failure observed.
- **Mind map labels**: `data/bio/index.js` GRAPH and `modules/syllabus.js` were compared node-by-node against `TOPICS`; only 6.6 and 7.12 mismatch (BIO-06). Map/relation links use the correct topic IDs; no broken topic link found.

## Screenshots

`screenshots/bug-round1-bio/`

- `p11-template-1280.png` — BIO-01 prep template filler (P1.1).
- `u13-chinese-only-1280.png` — BIO-02 Chinese-only essential knowledge (1.3).
- `u1-practice-generic-1280.png` — BIO-03 generic MCQ correct option and distractors.
- `u1-practice-stimulus-mismatch-1280.png` — BIO-04 water topic with enzyme v–[S] table and duplicate graph.
- `u42-title-typo-1280.png` — BIO-05 “信号导引导论” title/definition.
- `u6-chapter-stale-label-1280.png` — BIO-06 6.6 stale “基因突变” label.
- `u7-chapter-stale-label-1280.png` — BIO-06 7.12 stale “生命起源多样性” label.
- `u73-dog-reproductive-isolation-1280.png` — BIO-07 dog “生殖隔离倾向”.
- `u74-five-forces-1280.png` — BIO-08 “五种进化力量…非随机交配”.
- `u82-decomposer-energy-1280.png` — BIO-09 “分解者回收有机物中的化学能”.
- `u53-slash-fractions-1280.png` — BIO-11 `1/2`, `1/4`, `9/16` in example text.
- `u51-oogenesis-1280.png` — BIO-12 “1 卵+极体”.
- `u84-pop-oscillation-r2.2.png` — BIO-15 persistent 2-cycle at r = 2.2 while caption says damped.
- `u85-1280-dark-fig.png` — dark-theme figure sample (no defect; shows theme labels are readable).

## Out-of-scope notes

- No product file was edited. Only this audit and `screenshots/bug-round1-bio/` were written.
- Other subjects, the full 2886-job sweep, desktop app packaging, and app sync were not touched.
- The generic practice bank and the 25 template-only prep topics are large editorial jobs; they should be scheduled as content work, not patched with one-line fixes.
