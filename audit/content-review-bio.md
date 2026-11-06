# Content review — AP Biology (`data/bio/`)

Date: 2026-11-06  
Reviewer: isolated content-accuracy session  
Scope: `data/bio/` topic sources only (not `data/bio/practice/`, not figure libraries, not `data/enrichments/batch2.js`).

## Method

Read all 9 biology modules and all 89 topic objects: 12 chemistry prep, 14 high-school biology prep, and AP Units 1–8 (63 topics). Checked formulas, notes, conditions, examples, and the 34 enrichment overlays that are actually displayed (5 batch1, 29 batch2).

Checks:

- `node scripts/check-math-notation.mjs` → `MATH_NOTATION_OK`.
- KaTeX render of every topic formula and `solutionLatex` (179 strings) → 0 errors.
- Import check on `data/bio/index.js` → 89 topics load.
- Cross-check of batch1 bio entries against the base topics.

## Executive summary

The base biology records are a generic template. Most pages use the same qualitative formula:

- 81 topics: `\text{定性关系：输入}\to\text{机制}\to\text{输出}`.
- 5 topics: pH definition (one is legitimately “Acids, Bases, and pH”; four are wrong-topic contamination).
- 2 topics: `K=\dfrac{1}{2}mv^2` — kinetic energy on a kinetics/equilibrium page and an enzyme-structure page.
- 1 topic: Hardy–Weinberg `p^2+2pq+q^2=1`.

The qualitative placeholder is not false, but it is too generic to teach any specific mechanism. The pH and kinetic-energy entries are objectively wrong for their topics and were fixed.

Enrichment coverage is 34/89 topics (5 batch1 + 29 batch2); 55 topics still show template-only prose. Batch1 biology content was checked and is correct. Batch2 is another session’s file; it was spot-checked for consistency and not edited.

## Wrong formulas fixed

| Topic | Wrong formula | Corrected core relation | Severity |
|---|---|---|---|
| `bio-prep-chem/P1.12` Intro Kinetics and Equilibrium | `K=\frac12mv^2` | `v=k[A]^m[B]^n`; `K_c=\frac{[C]^c[D]^d}{[A]^a[B]^b}` | blocker |
| `bio-prep-hs/P2.6` Photosynthesis Overview | pH formula | `6CO_2+6H_2O \xrightarrow{\text{light}} C_6H_{12}O_6+6O_2` | blocker |
| `bio-u1/1.6` Structure and Function of Enzymes | `K=\frac12mv^2` | `E+S\rightleftharpoons ES\rightarrow E+P` | blocker |
| `bio-u3/3.4` Photosynthesis | pH formula | balanced photosynthesis equation | blocker |
| `bio-u5/5.5` Environmental Effects on Phenotype | pH formula | `P=G+E` (simplified quantitative-genetics model) | blocker |
| `bio-u7/7.9` Phylogeny | pH formula | “closer common ancestor ⇒ closer relationship” with tree assumptions | blocker |

Each corresponding example-2 `solutionLatex` was corrected too. Conditions were replaced with topic-specific assumptions (rate/equilibrium, photosynthesis, enzyme active site, P=G+E limits, tree inference).

## Correct formulas retained / conditions strengthened

- `bio-prep-chem/P1.8` Acids, Bases, and pH: pH formula is correct. Added conditions: 25 °C dilute aqueous solution, activity approximated by concentration, the monoprotic strong-acid limit, and the 10× change per pH unit.
- `bio-u7/7.5` Hardy–Weinberg: `p^2+2pq+q^2=1` is correct. Added conditions: large population, random mating, no mutation/selection/migration, and interpretation of departures.

## Per-unit audit

| Unit | Topics | Findings |
|---|---:|---|
| `bio-prep-chem` | 12 | P1.8 pH correct; P1.12 kinetics/equilibrium had `K=1/2mv²`, fixed. Other topics use the qualitative placeholder. |
| `bio-prep-hs` | 14 | P2.6 photosynthesis had pH, fixed. Others qualitative; P2.5 enzyme has a batch2 overlay (correct). |
| `bio-u1` | 6 | 1.1 and 1.5 enriched (batch1/batch2); 1.6 had `K=1/2mv²`, fixed. |
| `bio-u2` | 10 | 2.2–2.6, 2.9 enriched with correct transport/SA:V content; remaining topics qualitative. |
| `bio-u3` | 6 | 3.1 batch1 enzyme content correct; 3.3/3.4/3.5 enriched; 3.4 pH formula fixed. 3.6 fitness qualitative. |
| `bio-u4` | 7 | 4.1, 4.3, 4.4, 4.5, 4.6, 4.7 enriched; 4.2 qualitative. Signal/cell-cycle content spot-checked. |
| `bio-u5` | 6 | 5.1 batch1 meiosis correct; 5.5 phenotype pH formula fixed; 5.3/5.4/5.6 qualitative. |
| `bio-u6` | 8 | 6.2 batch1 replication correct; 6.4/6.7/6.8 enriched; 6.1/6.3/6.5/6.6 qualitative. |
| `bio-u7` | 13 | 7.2/7.3/7.4/7.7/7.9/7.10/7.11 enriched; 7.9 pH formula fixed; 7.5 HW conditions strengthened; 7.1/7.6/7.8/7.12/7.13 qualitative. |
| `bio-u8` | 7 | 8.2/8.3/8.5 enriched; 8.1/8.4/8.6/8.7 qualitative. |

## Content checked in enrichments

- Batch1: `bio-u3/3.1`, `bio-u5/5.1`, `bio-u4/4.6`, `bio-u6/6.2`, `bio-u1/1.1`. Definitions, formulas, examples, and claims were read; no factual error found.
- Batch2: all 29 biology overlays were scanned for definitions, formulas, conditions, and key points. Representative sensitive claims checked:
  - SA/V scaling (`SA ∝ L²`, `V ∝ L³`, `SA/V ∝ 1/L`) correct.
  - Photosynthesis/respiration equations and O₂ source correct.
  - Translation codon/reading-frame statements correct.
  - Hardy–Weinberg and population-growth formulas correct.
  - Mark–recapture `N=MC/R` correct.
  - Shannon index and 10% energy-transfer caveat correct.
- No batch2 edit was made (outside write scope).

## Verification

- `check-math-notation.mjs` → `MATH_NOTATION_OK`; no slash-fraction hits in biology topic data.
- KaTeX render of 179 topic formula/solution strings → 0 errors.
- Import of `data/bio/index.js` → 89 topics.
- `git diff --check` clean.

## Remaining issues

1. **Template depth (blocker for self-study).** 55 of 89 topics have no enrichment overlay; most still use “input → mechanism → output” as their only formula and generic examples. This needs enrichment, not an accuracy patch.
2. **Batch2 ownership.** Batch2 biology overlays are another session’s file; this review did not edit them. Spot-checks found no factual errors, but coverage and wording may change concurrently.
3. **Qualitative formulas.** The 81 qualitative placeholders are not mathematically wrong, but they do not give a student a usable relation. Many could be replaced with pathway equations (e.g. photosynthesis/respiration, transport, Hardy–Weinberg) by enrichment.
4. **Conditions.** Only the topics above have topic-specific conditions; the remaining base topics still use “满足定理/定律条件 / 注意理想化假设.”

## Self-check (Biology)

- Re-read the eight changed topic blocks across six files (`P1.12`, `P1.8`, `P2.6`, `1.6`, `3.4`, `5.5`, `7.5`, `7.9`) and this report.
- Re-ran `node scripts/check-math-notation.mjs` → `MATH_NOTATION_OK`.
- Re-ran KaTeX on all 179 biology formula/`solutionLatex` strings → 0 errors; imported `data/bio/index.js` → 89 topics.
- Scanned for leftover `pH`, `K=\frac12mv^2`, `F=ma`, `dy/dx`, Cartesian/parametric mixups, broken LaTeX, and slash fractions. Only intentional pH formula is `bio-prep-chem/P1.8`; no other contamination found.
- Found and fixed during self-check: `P1.8` condition now specifies “一元强酸” rather than generic “强酸”; the report’s `bio-u4` enrichment row was corrected (4.4 is enriched, not qualitative).
- No further issues found. Biology is ready to commit.
