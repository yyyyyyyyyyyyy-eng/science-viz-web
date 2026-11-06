# Practice review — AP Biology

Date: 2026-11-06
Scope: `data/bio/practice/` — 10 banks, 634 items (`bio-prep-chem`, `bio-prep-hs`, `bio-u1`…`u8`).
Method: parsed every bank, reviewed all distinct item templates and choices, checked topic/unit labels, checked diagrams and tables against the stated topic, and looked for factual/quantitative errors. Bio items are all text/diagram based; there are no numeric formulas or unit conversions in this bank.

## Summary

| Severity | Pattern | Count |
|---|---|---:|
| High | Generic FRQ prompts that can be answered without the stated biology | ~300 |
| High | Generic MCQ correct option (“图示结构/关系支持该知识点的核心机制”) with non-specific distractors | ~120 |
| Moderate | Shared-stimulus diagrams copied by rotation across unrelated units | 30 sets |
| — | Factual/numeric errors | 0 confirmed |

No incorrect biological statement was confirmed in the current bank. The problem is the opposite: most items are too generic to test a specific fact, mechanism, or data interpretation. This is an assessment-validity issue, not a wrong-fact issue, so I did not invent replacement content.

## Findings and fixes

### 1. High — generic FRQ prompts (not changed)

Examples: `bio-u2-q001`, `bio-u3-q001`, `bio-u7-q001`.

- Stem: “指出刺激中与「X」最直接相关的趋势，并给出机制解释。”
- Answer: “需联系结构—功能或选择压力；见刺激图/表。”
- Solution: “AP Bio FRQ：主张 + 证据 + 推理。”

The same answer is used for “water and life”, “enzymes”, “natural selection”, and “ecology”. A student can copy the generic answer without reading the stimulus. This is a content-depth defect; fixing it properly requires a per-topic question and rubric, which is outside a factual-fix pass and would violate the “no large new template batch” instruction.

### 2. High — generic MCQs (not changed)

Representative: `bio-u2-q012`, `bio-u5-q012`, `bio-u7-q012`, `bio-u8-q018`.

- Correct choice: “图示结构/关系支持该知识点的核心机制”.
- Distractors: “图示与基因表达无关且无信息”, “自然选择从不改变等位基因频率”, “所有性状均由单基因完全决定”.

The distractors are biologically false, but they are false for every topic, so the item tests test-taking rather than the unit. Same editorial limitation as above.

### 3. Moderate — shared-stimulus diagrams were rotated across unrelated units

Before the fix, every bio unit received the same diagram sequence regardless of topic:

- `bio-u1` (Chemistry of Life): enzyme → pedigree → Punnett square.
- `bio-u2` (Cell Structure): enzyme → pedigree → Punnett square.
- `bio-u3` (Cellular Energetics): enzyme → pedigree → Punnett square.
- `bio-u7` (Natural Selection): enzyme → pedigree → Punnett square.

A Punnett square under “质膜” and a pedigree under “细胞大小” are not merely generic; they are the wrong representation for the topic. I did not change any question text, but I aligned the shared stimuli to the unit:

| Bank | Set 1 | Set 2 | Set 3 |
|---|---|---|---|
| `bio-prep-chem` | enzyme | pathway | gel |
| `bio-prep-hs` | cell | pedigree | punnett |
| `bio-u1` | enzyme | pathway | cell |
| `bio-u2` | cell | cell | pathway |
| `bio-u3` | enzyme | pathway | cell |
| `bio-u4` | pathway | cell | pathway |
| `bio-u5` | pedigree | punnett | pedigree |
| `bio-u6` | gel | pathway | cell |
| `bio-u7` | phylo | pedigree | foodWeb |
| `bio-u8` | foodWeb | foodWeb | phylo |

For non-enzyme sets I removed the leftover enzyme \(v\) vs \([S]\) table/graph; for enzyme sets it remains. This is a stimulus-level factual fix, not a new question batch.

### 4. No confirmed numerical/unit errors

There are no calculations, concentrations, or genetic ratios in the current bank. The only quantitative content is the enzyme table \([S]\) vs \(v\), which is qualitatively consistent (saturating curve); it is not used by a specific question, so no answer depends on it.

## Verification

- Parsed all 10 banks after editing; item counts unchanged: 45/45/59/78/59/64/59/69/92/64.
- Checked each of the 30 set stimuli reports the intended diagram kind and that non-enzyme sets no longer contain an enzyme table.
- Playwright smoke test at `#/bio/practice/bio-u2` (1280×900): 68 cards, 0 console errors, 0 KaTeX errors; set 2 now renders a cell diagram rather than a pedigree.
- No bio practice file contains a numeric `expected`/formula field to recheck.

## Remaining issues / product decision

1. **Rewrite the question layer.** The bank needs one specific claim/evidence/reasoning prompt per topic, with a rubric, plus MCQs whose correct answer states a real mechanism (e.g. “减数分裂 I 的同源染色体分离增加遗传多样性”). That is a large editorial batch; I did not generate it.
2. **Some units still share generic stimuli.** The mapping above is topic-appropriate at the level of diagram type, but the question text remains generic.
3. If the product goal is “exam-accurate practice”, these banks should be treated as placeholders, not as AP Bio practice.

## Self-check (2026-11-06)

Re-read the shipped commit (`dbe96f5`) and all 10 bio practice files; verified the current files are unchanged after `bf2a022`.

Re-ran:

- Node `vm` parse of all 10 banks: all load; item counts unchanged (45/45/59/78/59/64/59/69/92/64).
- Checked all 30 shared sets still have the intended diagram kind and that non-enzyme sets no longer carry the enzyme \(v\)–\([S]\) table.
- Playwright on all 27 practice routes at 390×844 and 1280×900, light and dark: 0 console errors, 0 KaTeX errors, no horizontal page overflow, no card overlap, minimum text contrast 5.1 (light) / 7.6 (dark).
- Rechecked the MCQ choices and FRQ answers: no new incorrect biological statement found.

No new factual or layout issue found in the bio practice files. The mapping remains at unit level, not per-topic; for example “科学测量” still uses a generic enzyme data table and “自然选择” uses a pedigree/food-web diagram. That is a known content-depth limitation, not a new factual error, and remains documented above.

Base SHAs before this self-check: web `bf2a022`, app `72faec1`. The self-check commit SHA is listed in the final session report.
