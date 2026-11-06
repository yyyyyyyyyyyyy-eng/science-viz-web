# Figure gap table — AP Biology & Math

Generated 2026-11-06 from `data/{bio,math}/figures.js` (`TOPIC_FIGURES`) and `data/{bio,math}/index.js`.
Scope: all 247 bio/math topic routes (bio 89, math 158).

Definition of a variant: a distinct visual representation that teaches the same topic from another angle — graph, diagram, data table, labeled structure, or worked-example figure. One figure per topic is not automatically a gap; the suggested variants below are the canonical alternatives an AP exam or textbook usually pairs with the current figure.

## Summary

| Subject | Topics | 0 figures | 1 figure | 2+ figures | Placements | Unique figures |
|---|---:|---:|---:|---:|---:|---:|
| bio | 89 | 0 | 24 | 65 | 183 | 125 |
| math | 158 | 0 | 106 | 52 | 229 | 174 |
| **total** | **247** | **0** | **130** | **117** | **412** | **299** |

- No topic currently mounts zero figures. Every `TOPIC_FIGURES` key matches a real topic; no unmapped figure IDs; every figure builds a non-empty SVG.
- 130 topics have a single variant. They are listed below; filling them is deliberately deferred to a later session.
- Example of "enough coverage" from physics, for comparison: SHM has horizontal spring, vertical spring, simple pendulum, physical pendulum, and companion graphs. A bio/math topic reaching that level should cover the diagram, the graph/data view, and the common exam variation, not just one hero figure.

## Mount scan

- 247 routes × light/dark = 494 Playwright page loads.
- Every route mounted exactly one `.exam-figures` section, with `figure count === topic.figures.length`.
- Section title is exactly `AP 考试常见图示` on every route.
- 0 empty mounts, 0 zero-size SVGs, 0 SVG/box overflow, 0 KaTeX errors, 0 console/page errors.
- 0 horizontal page overflow at 1280×900.

## bio — single-variant topics (24)

| Topic | Current figure | Missing variants to consider | P |
|---|---|---|---|
| `bio-prep-chem:P1.6` Stoichiometry | `stoich` mole-ratio bars | limiting-reagent particle diagram; mass → mol → mol flow; percent-yield example | P2 |
| `bio-prep-chem:P1.10` Functional groups | `functional-groups` reference table | polymer-linkage (dehydration) map; group → macromolecule matrix | P3 |
| `bio-prep-hs:P2.1` Scientific method | `experiment-design` control vs treatment | variables/control schematic; replication and error-bar interpretation | P2 |
| `bio-prep-hs:P2.3` Cell structure | `cell-structure` animal vs plant | prokaryote vs eukaryote; organelle-function table | P2 |
| `bio-u1:1.2` Elements of life | `body-elements` body-mass bars | CHNOPS trace-element view; dry mass vs whole-body composition | P3 |
| `bio-u1:1.3` Biological macromolecules | `macromolecules` dehydration/hydrolysis | four-class comparison chart; monomer/polymer table | P2 |
| `bio-u1:1.5` Nucleic acids | `dna-structure` double helix | nucleotide anatomy; DNA vs RNA comparison table | P2 |
| `bio-u2:2.2` Cell size | `sa-volume` SA:V curve | cube/radius data table; exchange-rate graph; why cells stay small | P2 |
| `bio-u2:2.3` Plasma membranes | `fluid-mosaic` membrane model | membrane-component table; cholesterol/fluidity graph | P3 |
| `bio-u2:2.4` Membrane permeability | `permeability` bilayer selectivity | molecule-size/charge permeability ranking; transport comparison | P2 |
| `bio-u2:2.10` Endosymbiosis | `endosymbiosis` origin diagram | evidence table (DNA, ribosomes, double membrane); host-cell timeline | P2 |
| `bio-u3:3.6` Fitness and metabolism | `metabolic-temp` endotherm vs ectotherm | Q10 / metabolic-rate calculation; activity vs temperature trade-off | P3 |
| `bio-u4:4.1` Cell communication | `signal-types` signaling modes | local vs long-distance table; contact-dependent example | P2 |
| `bio-u4:4.2` Signal transduction | `signal-transduction` GPCR → cAMP | receptor-class overview (GPCR, RTK, ion channel); amplification link | P2 |
| `bio-u5:5.5` Environment and phenotype | `env-phenotype` reaction norm | norm-of-reaction plot; identical-genotype / different-environment example | P2 |
| `bio-u6:6.1` DNA and RNA structure | `dna-structure` helix | RNA secondary structure; DNA/RNA sugar and base table | P3 |
| `bio-u6:6.2` Replication | `replication-fork` fork | leading vs lagging strand detail; telomere/proofreading inset | P2 |
| `bio-u6:6.4` Translation | `translation` ribosome | tRNA charging; polyribosome; codon → amino-acid table | P2 |
| `bio-u6:6.7` Mutations | `mutations` mutation types | substitution vs frameshift consequence; sickle-cell example | P2 |
| `bio-u7:7.3` Artificial selection | `artificial-selection` Brassica | selection differential/response graph; second domestication example | P3 |
| `bio-u7:7.8` Continuing evolution | `antibiotic-resistance` resistance | allele-frequency time series; treatment-compliance scenario | P2 |
| `bio-u7:7.10` Speciation | `speciation` allopatric/sympatric | reproductive-isolation mechanisms table; polyploidy example | P2 |
| `bio-u7:7.11` Extinction | `extinction` Big Five | background vs mass-extinction rate; current extinction-risk data | P2 |
| `bio-u7:7.13` Origins of life | `origins-life` timeline | Miller–Urey / RNA-world experiment schematic; evidence table | P2 |

## math — single-variant topics (106)

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

### calc-u1

| Topic | Current figure | Missing variants to consider | P |
|---|---|---|---|
| `1.1` Instantaneous change | `secant-tangent` | average vs instantaneous rate table; shrinking-interval sequence | P2 |
| `1.2` Limit notation | `limit-1sided` one-sided graph | notation/one-sided vs two-sided table; DNE cases | P2 |
| `1.4` Limits from tables | `limit-table` | table → graph link; numerical vs graphical estimate | P3 |
| `1.5` Limit algebra | `limit-algebra` f/g graph | limit-law table; composition example | P3 |
| `1.8` Squeeze theorem | `limit-squeeze` | second squeeze example (sin x / x); inequality chain table | P2 |
| `1.11` Continuity at a point | `cont-3cond` | three-condition checklist; jump/removable examples | P2 |
| `1.12` Continuity on an interval | `cont-interval` | open/closed interval types; IVT link | P3 |
| `1.13` Removing discontinuities | `cont-remove` | piecewise redefinition; limit vs value table | P3 |
| `1.14` Infinite limits / VA | `limit-va` | one-sided behavior table; rational-function asymptote map | P2 |
| `1.15` Limits at infinity / HA | `limit-ha` | end-behavior table; degree comparison cases | P2 |
| `1.16` Intermediate Value Theorem | `ivt` | sign-change table; bisection/root approximation | P2 |

### calc-u2

| Topic | Current figure | Missing variants to consider | P |
|---|---|---|---|
| `2.2` Definition of derivative | `diff-quotient` | notation summary; secant → tangent sequence | P2 |
| `2.3` Estimating derivatives | `deriv-table` | symmetric difference quotient; units interpretation | P2 |
| `2.4` Differentiability and continuity | `nondiff` | corner/cusp/vertical-tangent/discontinuity gallery | P2 |
| `2.5` Power rule | `power-rule` x³ | rule table incl. negative/fractional powers; tangent line | P3 |
| `2.6` Constant/sum/difference rules | `sum-rule` | worked rule examples; polynomial derivative flow | P3 |
| `2.8` Product rule | `product-rule` area model | algebraic vs area-model proof; three-factor example | P2 |
| `2.9` Quotient rule | `quotient-rule` | second worked example; common-error comparison | P3 |
| `2.10` tan/cot/sec/csc derivatives | `tan-sec` | derivative cycle chart for all six trig functions | P2 |

### calc-u3

| Topic | Current figure | Missing variants to consider | P |
|---|---|---|---|
| `3.1` Chain rule | `chain-rule` sin(x²) | composition diagram; rate/unit chain example | P2 |
| `3.3` Inverse function derivative | `inverse-deriv` | reflection across y = x; reciprocal-slope example | P2 |
| `3.4` Inverse trig derivatives | `inverse-trig` | derivative table with domain restrictions; worked example | P2 |

### calc-u4

| Topic | Current figure | Missing variants to consider | P |
|---|---|---|---|
| `4.1` Derivative in context | `context-rate` | units/meaning table; sign interpretation | P2 |
| `4.2` Straight-line motion | `motion-svt` | stacked s/v/a graphs; speed vs velocity | P2 |
| `4.3` Rates in applied contexts | `marginal` cost | marginal vs average cost graph; units table | P2 |
| `4.4` Intro related rates | `ladder` | setup checklist; second geometry (shadow/volume) variant | P2 |
| `4.6` Local linearity | `linearization` | over/underestimate cases; error graph | P2 |

### calc-u5

| Topic | Current figure | Missing variants to consider | P |
|---|---|---|---|
| `5.1` Mean Value Theorem | `mvt` | parallel secant/tangent lines; Rolle's theorem case | P2 |
| `5.2` Extreme Value Theorem | `evt` | closed-interval candidates; local vs absolute table | P3 |
| `5.3` Increasing/decreasing | `inc-dec` | sign chart paired with f graph; interval notation | P2 |
| `5.5` Candidates test | `candidates` | endpoint/critical-point table; closed-interval checklist | P3 |
| `5.6` Concavity | `concavity` | f / f′ / f″ stacked panels; inflection sign chart | P2 |
| `5.7` Second derivative test | `sdt` | three-case decision chart; inconclusive example | P3 |
| `5.11` Solving optimization | `optimization` | constraint/objective flowchart; domain-check examples | P2 |
| `5.12` Implicit relations | `implicit-behavior` | tangent/normal line example; second-derivative sign | P3 |

### calc-u6

| Topic | Current figure | Missing variants to consider | P |
|---|---|---|---|
| `6.1` Accumulation of change | `accum-velocity` | net vs total area; units interpretation | P2 |
| `6.3` Riemann sums and notation | `riemann-converge` | n vs error table; sigma-notation worked example | P2 |
| `6.4` FTC and accumulation | `ftc-accum` | g, g′, g″ sign table; accumulation function | P2 |
| `6.5` Behavior of accumulation functions | `accum-graph` | g′/g″ sign chart; max/min from area | P2 |
| `6.6` Properties of integrals | `integral-props` | property table; worked reversal/zero-length examples | P3 |
| `6.7` FTC and definite integrals | `ftc-area` | signed vs geometric area; evaluation steps | P2 |
| `6.8` Antiderivatives | `antideriv-family` | slope-field family; +C and initial condition | P2 |
| `6.9` Integration by substitution | `u-sub` | substitution flow; bounds-change example | P2 |
| `6.10` Integration by parts | `ibp` | LIATE selection chart; tabular method | P2 |
| `6.11` Partial fractions | `partial-frac` | decomposition-case table; repeated/irreducible cases | P3 |
| `6.12` Improper integrals | `improper` | convergence comparison table; p-test summary | P2 |

### calc-u7

| Topic | Current figure | Missing variants to consider | P |
|---|---|---|---|
| `7.2` Verifying differential equations | `de-verify` | verify-vs-solve flow; initial-condition check | P2 |
| `7.6` Separation of variables | `separable` | separation steps; slope-field overlay | P2 |
| `7.8` Exponential models | `exp-model` | doubling/half-life table; parameter interpretation | P2 |

### calc-u8

| Topic | Current figure | Missing variants to consider | P |
|---|---|---|---|
| `8.1` Average value | `avg-value` | MVT-for-integrals view; rectangle vs curve | P3 |
| `8.2` Position/velocity/acceleration | `disp-dist` | net vs total distance stacked; sign analysis | P2 |
| `8.3` Accumulation in context | `rate-in-out` | net-change graph; units interpretation | P2 |
| `8.4` Area between curves (dx) | `area-x` | dx vs dy comparison; top/bottom identification | P2 |
| `8.5` Area between curves (dy) | `area-y` | horizontal slices; inverse-function setup | P2 |
| `8.6` Multiple intersections | `area-multi` | intersection/sign split; total area vs net area | P2 |
| `8.7` Cross sections: squares | `xsec-square` | perspective view; side-length from region | P3 |
| `8.9` Disc method (x/y) | `disc-x` | disc vs washer; axis-choice table | P2 |
| `8.10` Disc method (other axes) | `disc-other` | shifted axis; radius expression | P2 |
| `8.11` Washer method (x/y) | `washer-x` | outer/inner radius diagram; setup table | P2 |
| `8.12` Washer method (other axes) | `washer-other` | shifted axis; radius difference | P2 |
| `8.13` Arc length | `arc-length` | ds derivation; one-arch computed example | P3 |

### calc-u9

| Topic | Current figure | Missing variants to consider | P |
|---|---|---|---|
| `9.1` Parametric derivatives | `param-curve` | parameter table and direction; dy/dx at a point | P2 |
| `9.2` Second parametric derivative | `param-concavity` | d²y/dx² sign chart; concavity example | P3 |
| `9.3` Parametric arc length | `cycloid` | arc-length setup; one-arch computation | P2 |
| `9.4` Vector-valued functions | `vector-motion` | component graphs; speed vs velocity | P2 |
| `9.5` Integrating vector functions | `vector-integral` | position from velocity; constant-vector example | P2 |
| `9.8` Polar area | `polar-area` | sector-area derivation; symmetry shortcut | P2 |
| `9.9` Area between polar curves | `polar-two` | intersection points; outer/inner identification | P2 |

### calc-u10

| Topic | Current figure | Missing variants to consider | P |
|---|---|---|---|
| `10.2` Geometric series | `geo-series` | convergence condition; partial-sum table | P2 |
| `10.3` nth-term test | `nth-term` | necessary vs sufficient; harmonic counterexample | P2 |
| `10.4` Integral test | `integral-test` | Riemann-sum comparison; p-series reference | P2 |
| `10.6` Comparison tests | `comparison` | direct vs limit comparison table; bound choice | P2 |
| `10.7` Alternating series test | `alt-series` | error bound; alternating-harmonic partial sums | P2 |
| `10.8` Ratio test | `ratio-test` | inconclusive cases; factorial growth | P2 |
| `10.9` Absolute/conditional convergence | `abs-cond` | decision flowchart; examples table | P2 |
| `10.10` Alternating series error | `alt-series` | error interval; lower/upper partial-sum bounds | P2 |
| `10.12` Lagrange error bound | `lagrange` | remainder-bound graph; error envelope | P2 |
| `10.13` Radius/interval of convergence | `interval-conv` | endpoint-test table; radius vs interval | P2 |
| `10.15` Power series operations | `power-geo` | differentiation/integration of series; index shift | P3 |

## Highest-value next additions

These are the 0/1-variant topics where a second representation most directly matches an AP exam task. This is a recommendation for the next session, not work done here.

1. `bio-u6:6.2` Replication — leading vs lagging strand detail.
2. `bio-u6:6.4` Translation — tRNA charging plus a codon/amino-acid table.
3. `bio-u2:2.2` Cell size — SA:V curve with a cube/radius data table.
4. `bio-u7:7.10` Speciation — reproductive-isolation mechanisms table.
5. `calc-u4:4.4` Related rates — setup checklist plus a second geometry.
6. `calc-u6:6.9` u-substitution — bounds-change worked example.
7. `calc-u6:6.10` Integration by parts — LIATE selection chart.
8. `calc-u8:8.11` Washer method — outer/inner radius diagram.
9. `calc-u10:10.12` Lagrange error — error envelope graph.
10. `calc-u1:1.14` / `1.15` — asymptote behavior tables paired with the graphs.

## Verification commands / leftovers

- Figure build audit: all 299 unique figures build; no unused IDs; no mapping keys without a topic.
- Full mount scan: 494 loads, 0 issues (see `audit/figure-coverage-bio-math.md`).
- Contrast scan: 6,025 SVG text nodes checked against their computed background; 0 failures after the fixes in this session.
- Screenshots: `screenshots/figures-bio-math/before/` and `screenshots/figures-bio-math/after/` (light + dark).
- Leftover: 130 single-variant topics remain; no missing figure mounts or contrast failures remain in the bio/math set.
