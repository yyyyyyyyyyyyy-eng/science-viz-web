# Figure gap table — AP Biology & Math

Updated 2026-11-06 after the round-2 second-variant pass for the remaining single-figure topics. Source: working-tree `data/{bio,math}/figures.js` (`TOPIC_FIGURES`) and `data/math/figlib.js`.

Definition of a variant: a distinct visual representation that teaches the same topic from another angle — graph, diagram, data table, labeled structure, or worked-example figure.

## Summary

| Subject | Topics | 0 figures | 1 figure | 2+ figures | Placements | Unique figures (mounted) |
|---|---:|---:|---:|---:|---:|---:|
| bio | 89 | 0 | 0 | 89 | 219 | 147 |
| math | 158 | 0 | 0 | 158 | 339 | 202 |
| **total** | **247** | **0** | **0** | **247** | **558** | **349** |

- No topic mounts zero figures. Every former single-variant topic now has a second exam-style variant.
- Counts above were recomputed from `TOPIC_FIGURES` in the working tree (brace-matched object; keys whose array has 0 / 1 / 2+ string IDs).
- Round-2 screenshots (38 topics × light/dark = 76 PNGs): `screenshots/figures-bio-math/round2/`.

## Mount scan (prior pass; still the last full bio/math mount audit)

- 247 routes × light/dark = 494 Playwright page loads (recorded before round 2).
- Every route mounted exactly one `.exam-figures` section, with `figure count === topic.figures.length`.
- Section title is exactly `AP 考试常见图示` on every route.
- 0 empty mounts, 0 zero-size figures, 0 overflow, 0 KaTeX errors, 0 console/page errors.
- 0 horizontal page overflow at 1280×900.
- Round-2 figure JS passed `node --check`; a full remount sweep was not re-run for this commit (targeted checks only).

## Round 2 — former bio single-variant topics (11 → 0)

Each topic below previously had one figure; a second variant was added in this pass.

| Topic | Figures now | New second variant |
|---|---|---|
| `bio-prep-chem:P1.6` Stoichiometry | `stoich`, `stoich-particles` | limiting-reagent particle view |
| `bio-prep-chem:P1.10` Functional groups | `functional-groups`, `polymer-linkages` | polymer classes and linkages table |
| `bio-prep-hs:P2.1` Scientific method | `experiment-design`, `error-bars` | replication / mean ± 2 SEM bars |
| `bio-u1:1.2` Elements of life | `body-elements`, `chnops-table` | CHNOPS + trace-element roles |
| `bio-u1:1.3` Biological macromolecules | `macromolecules`, `macromolecule-compare` | four-class comparison chart |
| `bio-u1:1.5` Nucleic acids | `dna-structure`, `nucleotide-anatomy` | nucleotide anatomy + DNA vs RNA |
| `bio-u2:2.10` Endosymbiosis | `endosymbiosis`, `endosymbiosis-evidence` | evidence table vs free-living bacteria |
| `bio-u5:5.5` Environment and phenotype | `env-phenotype`, `phenotype-matrix` | same genotype, three environments |
| `bio-u7:7.3` Artificial selection | `artificial-selection`, `selection-response` | response-to-selection graph |
| `bio-u7:7.10` Speciation | `speciation`, `isolation-barriers` | reproductive-isolation mechanisms |
| `bio-u7:7.11` Extinction | `extinction`, `extinction-rates` | background vs mass-extinction rates |

## Round 2 — former math single-variant topics (27 → 0)

### math-prep-alg1

| Topic | Figures now | New second variant |
|---|---|---|
| `P1.1` Expressions and real numbers | `numline`, `number-classes` | number-classification tree |
| `P1.2` Linear equations | `lin-eq`, `lin-eq-balance` | balance-scale algebraic steps |
| `P1.7` Exponent rules | `exp-rules`, `exponent-rules` | rule / example table |
| `P1.8` Polynomial operations | `area-model`, `poly-ops-table` | degree / leading-coefficient table |
| `P1.9` Factoring | `factor-roots`, `factoring-patterns` | GCF / difference-of-squares / trinomial set |
| `P1.11` Exponential growth | `lin-vs-exp`, `compound-interest` | compound-interest table |
| `P1.12` Linear models | `scatter-fit`, `residual-plot` | residual plot |

### math-prep-geo

| Topic | Figures now | New second variant |
|---|---|---|
| `P2.1` Points, lines, angles | `angles`, `angle-pairs` | angle-pair reference |
| `P2.2` Parallel lines and congruence | `parallel-transversal`, `congruence-tests` | SSS/SAS/ASA congruence |
| `P2.3` Similar triangles | `similar-tri`, `similarity-tests` | AA/SAS/SSS similarity |
| `P2.4` Pythagorean theorem | `pythagoras`, `special-right-triangles` | special right triangles |
| `P2.5` Trigonometric ratios | `trig-ratios`, `unit-circle-trig` | unit-circle link |
| `P2.6` Circle properties | `circle-angles`, `arc-sector` | arc length / sector area |
| `P2.7` Area and perimeter | `area-perim`, `area-decompose` | decomposition method |
| `P2.8` Surface area and volume | `solids`, `solid-scaling` | similar-solids scaling |
| `P2.9` Coordinate geometry | `dist-mid`, `perp-bisector` | perpendicular bisector |
| `P2.10` Transformations | `transformations`, `symmetry-types` | symmetry classification |
| `P2.11` Basics of proof | `isosceles-proof`, `proof-template` | two-column / CPCTC template |

### math-prep-alg2

| Topic | Figures now | New second variant |
|---|---|---|
| `P3.1` Families of functions | `parent-fns`, `function-transformations` | transformation summary table |
| `P3.3` Polynomial functions | `poly-mult`, `poly-sign-chart` | sign chart and end behavior |
| `P3.5` Radicals and rational exponents | `radical-fns`, `radical-equation` | extraneous-root example |
| `P3.6` Exponential functions | `exp-family`, `exp-parameters` | growth/decay/parameter table |
| `P3.7` Logarithmic functions | `log-inverse`, `log-properties` | log-property table + worked equation |
| `P3.10` Intro matrices | `matrix-transform`, `matrix-inverse` | determinant / inverse |
| `P3.11` Intro conic sections | `conics`, `conic-standard` | standard-form table |
| `P3.12` Trig identity prep | `pythag-id`, `identity-derivation` | unit-circle derivation |

### math-prep-precalc

| Topic | Figures now | New second variant |
|---|---|---|
| `P4.7` Intro vectors | `vectors`, `vector-components` | component / magnitude / direction |

## Highest-value next additions

Single-variant bio/math topics are cleared. Optional follow-ups (not blockers):

1. Physics E&M single-variant topics `11.4` / `11.6` / `11.7` (separate file: `modules/physics/exam-figures.js` only).
2. Targeted remount of the 38 round-2 topic pages (light/dark) if page JS/CSS changes.
3. Third variants only where an AP exam commonly pairs a third angle (not required for gap closure).

## Verification commands / leftovers

- `node --check data/bio/figures.js data/math/figures.js data/math/figlib.js` — pass (round 2).
- `TOPIC_FIGURES` recount — bio 89/0/89 and math 158/0/158 (topics / singles / multi).
- Screenshots: `screenshots/figures-bio-math/round2/` (76 PNGs; stems match the 38 new second variants above).
- Prior enrichment screenshots remain at `screenshots/figures-bio-math/enrichment/`.
- Leftover: none for bio/math single-variant gaps; do not treat the outdated “38 singles remain” wording as current.
