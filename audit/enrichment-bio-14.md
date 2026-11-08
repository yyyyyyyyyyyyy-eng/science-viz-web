# Enrichment audit — remaining 14 AP Biology topics

Date: 2026-11-08
Scope: `data/enrichments/batch2.js`, this audit, `screenshots/enrichment-bio-14/`.
Starting web HEAD: `8fa9deb`.

## Result

All 14 previously template-only AP Biology topics now have topic-specific overlays in `data/enrichments/batch2.js`. Each entry has `enrichedAt: 'batch2'`, real `learningObjectives` and `essentialKnowledge`, a definition, intuition and detailed intuition, KaTeX formulas, conditions, key points, misconceptions, three worked examples with steps and solutions, exam tips, resolving `related` links, `derivationNotes`, `connections`, development, checks, and a summary.

No template MCQ or practice item was generated. No subject topic-body file was edited.

## Topics taught

| Key | Page title | What the overlay teaches |
|---|---|---|
| `bio/bio-u1/1.2` | 元素与大分子 / Elements of Life | CHNOPS and trace elements; carbon tetravalence; monomers vs polymers; dehydration synthesis and hydrolysis; functional groups; structure–function links in carbohydrates, lipids, proteins, and nucleic acids. |
| `bio/bio-u2/2.10` | 细胞区隔起源 / Origins of Cell Compartmentalization | Membrane infolding as the origin of the endomembrane system; endosymbiotic origin of mitochondria and chloroplasts; double membranes, circular DNA, 70S ribosomes, independent division, gene transfer; why compartmentalization raises metabolic efficiency. |
| `bio/bio-u3/3.6` | 适应与能量 / Fitness | Relative and absolute fitness; selection coefficient `s = 1 − w`; energy allocation among maintenance, growth, storage, and reproduction; life-history trade-offs; environment-dependent fitness. |
| `bio/bio-u5/5.2` | 减数分裂与遗传多样性 / Meiosis and Genetic Diversity | Meiosis I vs II chromosome behavior; crossing over between non-sister chromatids; independent assortment and `2^n` gamete combinations; random fertilization; nondisjunction. |
| `bio/bio-u5/5.5` | 环境影响表型 / Environmental Effects on Phenotype | Phenotype as genotype + environment + interaction; reaction norms and phenotypic plasticity; temperature-sensitive pigment, soil pH and flower color, identical twins; epigenetic marks vs DNA mutations; heritable vs somatic changes. |
| `bio/bio-u5/5.6` | 染色体遗传 / Chromosomal Inheritance | Linked genes and recombination frequency; map units and the 50% ceiling; X-linked recessive inheritance; nondisjunction and aneuploidy; deletion, duplication, inversion, translocation; maternal inheritance. |
| `bio/bio-u6/6.6` | 基因突变 (page label) / Gene Expression and Cell Specialization | CED 6.6 content: same genome, different transcriptomes; differential gene expression; transcription factors and enhancers; signaling and morphogens; stem cells and reprogramming; epigenetic stabilization; apoptosis. Explicitly avoids a mutations essay because `6.7` covers mutations. |
| `bio/bio-u7/7.6` | 进化证据 / Evidence of Evolution | Fossil, comparative anatomy, embryology, biogeography, molecular, and direct-observation evidence; homologous vs analogous vs vestigial structures; molecular clocks and calibration; convergence of independent evidence. |
| `bio/bio-u7/7.8` | 延续与变化 / Continuing Evolution | Contemporary evolution as allele-frequency change; antibiotic and pesticide resistance, Darwin's finches, fishing-induced life-history change; human selection pressures; drift and gene flow; microevolution vs speciation; no goal-directed progress. |
| `bio/bio-u7/7.12` | 生命起源多样性 (page label) / Variations in Populations | Genetic vs environmental variation; mutation as the ultimate source; recombination and gene flow; discrete vs continuous traits; allele frequency, heterozygosity, polymorphism; heterozygote advantage and frequency-dependent selection; drift in small populations. Content follows CED 7.12 (Variations in Populations), not the page label. |
| `bio/bio-u7/7.13` | 生命起源 / Origins of Life on Earth | Chemical evolution vs biological evolution; early Earth conditions; Miller–Urey synthesis; RNA world; protocells and lipid vesicles; hydrothermal vents and clay surfaces; first prokaryotes and the oxygen revolution; testability of origin hypotheses. |
| `bio/bio-u8/8.1` | 环境响应 / Responses to the Environment | Behavioral vs physiological responses; taxis vs kinesis; biological clocks and photoperiod; migration, diapause, hibernation; plant tropisms, photoperiodism, vernalization; acclimation vs adaptation; cost–benefit trade-offs. |
| `bio/bio-u8/8.6` | 生物多样性 / Biodiversity | Genetic, species, and ecosystem diversity; richness vs evenness; Shannon, Simpson, and evenness indices; ecosystem services; hotspots; genetic diversity as a basis for adaptation; biodiversity–stability nuance. |
| `bio/bio-u8/8.7` | 生态系统扰动 / Disruptions to Ecosystems | Natural vs anthropogenic disturbance; resistance vs resilience; invasive species; eutrophication and hypoxic dead zones; biomagnification; habitat fragmentation; climate change; trophic cascades; restoration and monitoring. |

## Verification

- `node --check data/enrichments/batch2.js` → OK.
- `batch2.js` now has 120 keys; all 14 target keys present with non-empty `learningObjectives`, `essentialKnowledge`, `derivationNotes`, and `connections`.
- 0 hits of `准确陈述定义` or `本质知识` slogan text inside the 14 new entries.
- All `related` links in the 14 entries resolve to real biology topic ids; titles match the current topic records.
- `node scripts/check-math-notation.mjs` → `MATH_NOTATION_OK`.
- Targeted KaTeX render of 123 formula / inline-math / `solutionLatex` strings in the 14 entries → 0 errors. `\dfrac` used throughout; no slash fractions, no `÷`.
- Targeted Playwright at 1280×900 and 390×844, light theme, all 14 routes (28 loads):
  - 0 console errors, 0 page errors, 0 HTTP failures
  - 0 `.katex-error`
  - 0 horizontal overflow
  - 0 hits of `准确陈述定义、适用范围与符号约定`, `本单元的核心知识点`, `定性关系：输入`, `上游：本单元前置主题`, or `定义/公理/实验事实` in rendered teaching blocks
- Screenshots: `screenshots/enrichment-bio-14/bio-<chapter>-<code>-desktop.png` and `-mobile.png` (28 files).

## Leftovers

None among these 14 AP Biology topics. The page labels for `bio/bio-u6/6.6` (“基因突变”) and `bio/bio-u7/7.12` (“生命起源多样性”) still come from subject topic-body files outside this session’s write scope; the overlay teaching content follows the English CED titles (Gene Expression and Cell Specialization; Variations in Populations).
