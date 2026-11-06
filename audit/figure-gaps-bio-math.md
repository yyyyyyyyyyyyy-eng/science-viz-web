# Figure gap table — AP Biology & Math

Updated 2026-11-06 after the photosynthesis/respiration enrichment pass. Source: `data/{bio,math}/figures.js` (`TOPIC_FIGURES`) and `data/{bio,math}/index.js`.

Definition of a variant: a distinct visual representation that teaches the same topic from another angle — graph, diagram, data table, labeled structure, or worked-example figure. One figure per topic is not automatically a gap; the suggested variants below are the canonical alternatives an AP exam or textbook usually pairs with the current figure.

## Summary

| Subject | Topics | 0 figures | 1 figure | 2+ figures | Placements | Unique figures |
|---|---:|---:|---:|---:|---:|---:|
| bio | 89 | 0 | 11 | 78 | 208 | 136 |
| math | 158 | 0 | 27 | 131 | 312 | 175 |
| **total** | **247** | **0** | **38** | **209** | **520** | **311** |

- No topic mounts zero figures. Every `TOPIC_FIGURES` key matches a real topic; no unused figure IDs; every SVG/`<img>` builds.
- 38 topics still have one variant. They are listed below; filling them is a later task.
- The 2026-11-06 batch added 12 new figures (11 original SVGs plus one public-domain leaf image), and cross-mounted existing variants across many math and biology topics. See `audit/figure-coverage-bio-math.md` for the topic-level changes.

## Mount scan

- 247 routes × light/dark = 494 Playwright page loads.
- Every route mounted exactly one `.exam-figures` section, with `figure count === topic.figures.length`.
- Section title is exactly `AP 考试常见图示` on every route.
- 0 empty mounts, 0 zero-size figures, 0 overflow, 0 KaTeX errors, 0 console/page errors.
- 0 horizontal page overflow at 1280×900.

## bio — single-variant topics (11)

| Topic | Current figure | Missing variants to consider | P |
|---|---|---|---|
| `bio-prep-chem:P1.6` Stoichiometry | `stoich` mole-ratio bars | limiting-reagent particle diagram; mass → mol → mol flow; percent-yield example | P2 |
| `bio-prep-chem:P1.10` Functional groups | `functional-groups` reference table | polymer-linkage (dehydration) map; group → macromolecule matrix | P3 |
| `bio-prep-hs:P2.1` Scientific method | `experiment-design` control vs treatment | variables/control schematic; replication and error-bar interpretation | P2 |
| `bio-u1:1.2` Elements of life | `body-elements` body-mass bars | CHNOPS trace-element view; dry mass vs whole-body composition | P3 |
| `bio-u1:1.3` Biological macromolecules | `macromolecules` dehydration/hydrolysis | four-class comparison chart; monomer/polymer table | P2 |
| `bio-u1:1.5` Nucleic acids | `dna-structure` double helix | nucleotide anatomy; DNA vs RNA comparison table | P2 |
| `bio-u2:2.10` Endosymbiosis | `endosymbiosis` origin diagram | evidence table (DNA, ribosomes, double membrane); host-cell timeline | P2 |
| `bio-u5:5.5` Environment and phenotype | `env-phenotype` reaction norm | norm-of-reaction plot; identical-genotype / different-environment example | P2 |
| `bio-u7:7.3` Artificial selection | `artificial-selection` Brassica | selection differential/response graph; second domestication example | P3 |
| `bio-u7:7.10` Speciation | `speciation` allopatric/sympatric | reproductive-isolation mechanisms table; polyploidy example | P2 |
| `bio-u7:7.11` Extinction | `extinction` Big Five | background vs mass-extinction rate; current extinction-risk data | P2 |

## math — single-variant topics (27)

### math-prep-alg1

| Topic | Current figure | Missing variants to consider | P |
|---|---|---|---|
| `P1.1` Expressions and real numbers | `numline` real number line | number-classification tree; inequality/interval notation on a line | P2 |
| `P1.2` Linear equations | `lin-eq` graphical solution | balance-scale/algebraic steps; no-solution and identity cases | P2 |
| `P1.7` Exponent rules | `exp-rules` 2ˣ and (1/2)ˣ | rule/example table; negative and fractional exponents | P2 |
| `P1.8` Polynomial operations | `area-model` multiplication | box vs distributive comparison; degree/leading-coefficient table | P3 |
| `P1.9` Factoring | `factor-roots` roots link | GCF / difference-of-squares / trinomial example set; zero-product step | P2 |
| `P1.11` Exponential growth | `lin-vs-exp` growth comparison | compound-interest table; doubling-time graph | P2 |
| `P1.12` Linear models | `scatter-fit` least squares | residual plot; correlation vs causation | P2 |

### math-prep-geo

| Topic | Current figure | Missing variants to consider | P |
|---|---|---|---|
| `P2.1` Points, lines, angles | `angles` angle pairs | angle-pair reference table; parallel-line angle names | P3 |
| `P2.2` Parallel lines and congruence | `parallel-transversal` | SSS/SAS/ASA congruence diagrams; proof flow | P2 |
| `P2.3` Similar triangles | `similar-tri` scale 1.5 | AA/SAS/SSS similarity; area/volume scale factors | P2 |
| `P2.4` Pythagorean theorem | `pythagoras` 3-4-5 | converse; coordinate distance; special right triangles | P2 |
| `P2.5` Trigonometric ratios | `trig-ratios` SOH-CAH-TOA | unit-circle link; inverse-trig table | P2 |
| `P2.6` Circle properties | `circle-angles` central/inscribed | arc length/sector area; tangent-chord angle | P2 |
| `P2.7` Area and perimeter | `area-perim` composite figure | decomposition method; unit conversion | P3 |
| `P2.8` Surface area and volume | `solids` volumes | net diagrams; scaling of similar solids | P2 |
| `P2.9` Coordinate geometry | `dist-mid` distance/midpoint | slope criteria; partition point; perpendicular bisector | P2 |
| `P2.10` Transformations | `transformations` rigid motions | composition of transformations; symmetry classification | P3 |
| `P2.11` Basics of proof | `isosceles-proof` | two-column/paragraph proof template; CPCTC example | P3 |

### math-prep-alg2

| Topic | Current figure | Missing variants to consider | P |
|---|---|---|---|
| `P3.1` Families of functions | `parent-fns` | transformation summary table; domain/range chart | P2 |
| `P3.3` Polynomial functions | `poly-mult` zeros/multiplicity | end-behavior chart; sign chart and graph sketch | P2 |
| `P3.5` Radicals and rational exponents | `radical-fns` √x and ∛x | domain/range table; extraneous-root example | P2 |
| `P3.6` Exponential functions | `exp-family` | parameter table (growth/decay/transformations); asymptote view | P3 |
| `P3.7` Logarithmic functions | `log-inverse` | log-property table; solving log equations | P2 |
| `P3.10` Intro matrices | `matrix-transform` | determinant/area; inverse matrix | P2 |
| `P3.11` Intro conic sections | `conics` | standard-form table; completing-the-square example | P2 |
| `P3.12` Trig identity prep | `pythag-id` | unit-circle derivation; other identities summary | P3 |

### math-prep-precalc

| Topic | Current figure | Missing variants to consider | P |
|---|---|---|---|
| `P4.7` Intro vectors | `vectors` addition | component/magnitude/direction; dot-product projection | P2 |

## Highest-value next additions

1. `bio-u7:7.10` Speciation — reproductive-isolation mechanisms table.
2. `bio-u7:7.11` Extinction — background vs mass-extinction rates.
3. `bio-u1:1.3` Macromolecules — four-class comparison chart.
4. `bio-u2:2.10` Endosymbiosis — evidence table.
5. `math-prep-geo:P2.2` — SSS/SAS/ASA congruence diagrams.
6. `math-prep-geo:P2.4` — Pythagorean converse and special right triangles.
7. `math-prep-alg2:P3.3` — polynomial end-behavior/sign chart.
8. `math-prep-geo:P2.6` — arc length and sector area.
9. `math-prep-alg1:P1.9` — factoring worked-example set.
10. `math-prep-precalc:P4.7` — vector components and projection.

## Verification commands / leftovers

- Figure build audit: all 311 unique figures build; no unused IDs, no mapping keys without a topic.
- Full mount scan: 494 loads, 0 issues (see `audit/figure-coverage-bio-math.md`).
- Contrast scan: 6,112 SVG text nodes checked against their computed background; 0 failures after fixes (plus the raster leaf image).
- Screenshots: `screenshots/figures-bio-math/enrichment/` (photosynthesis, respiration, leaf anatomy, derivative limit; light + dark).
- Leftover: 38 single-variant topics; no missing mounts or contrast failures remain in the bio/math set.
