# Interactive figure pass — AP Biology & AP Calculus BC (+ prerequisites)

Date: 2026-11-08
Scope: `data/math/figlib.js`, `data/bio/figures.js`, `data/math/figures.js` only (plus this audit and
`screenshots/figures-interact-bio-math/`). No physics figure files, page chrome, `js/**`, `css/**`,
enrichment data or practice files were touched.

## Result

| module | unique figures | interactive | left static |
| --- | ---: | ---: | ---: |
| AP Biology | 147 | 21 | 126 |
| AP Math (Algebra/Geometry/Precalc/Calc BC) | 202 | 34 | 168 |
| **total** | **349** | **55** | **294** |

The section title is unchanged: exactly `AP 考试常见图示`.

## Interaction layer

`data/math/figlib.js` now supports figures that declare:

- `controls` — range sliders, selects or button groups, each with a stable key and a default value;
- `defaults` — the values that reproduce the old static figure;
- `rebuild(values)` — returns a complete SVG from the same math as the static build;
- optional `captionFor(values)` — refreshes the KaTeX caption after a parameter change.

`renderFigures` mounts a control bar between the SVG box and the caption. The bar:

- is square-cornered (including the range track/thumb pseudo-elements, injected once from `figlib.js`),
  uses only theme tokens (`--text`, `--text-muted`, `--border`, `--bg-elev`, `--bg-soft`,
  `--subject-accent`) and therefore works in light and dark;
- puts every range/button/select on a hit target at least 44px high;
- wraps into `repeat(auto-fit, minmax(150px, 1fr))` columns and stays inside the figure width, so it
  cannot overlap the SVG or caption and does not cause horizontal overflow at 390px;
- keeps keyboard access: native range/select controls, buttons with `aria-pressed`, labelled groups.

A default state is rebuilt with the declared defaults. The old static SVG string is unchanged in 49 of
the 55 cases; four highlight figures add only an `opacity="1"` wrapper (visually identical). Two
figures carry deliberate content corrections, listed below.

## Converted figures

### AP Biology (21)

- Enzymes/metabolism: `enz-temp` (human Tm, thermophile Tm), `enz-ph` (amylase optimum and width),
  `enz-substrate` (Km, Vmax), `enz-inhibition` ([I]/Ki), `activation-energy` (enzyme Ea reduction),
  `metabolic-temp` (Q10), `pcr` (cycle efficiency).
- Chemistry/water/equilibrium: `c14-decay` (half-life), `titration` (acid volume), `rate-equilibrium`
  (kf, kr), `water-potential` (temperature).
- Transport/photosynthesis: `diffusion-rate` (Jmax, K), `photo-rate-light` (high-CO2 Pmax, half-saturation
  light K).
- Genetics/evolution: `hw-curves` (allele frequency p), `selection-response` (heritability h²),
  `phenotype-matrix` (focus one environment; other columns dim).
- Ecology: `pop-growth` (r, K), `pop-oscillation` (discrete r), `predator-prey` (a, d),
  `competition` (α, β).
- Experimental design: `error-bars` (sample size n; ±2 SEM bars rescale as 1/√n).

### AP Math (34)

- Calculus: `riemann-left`, `riemann-right`, `riemann-mid`, `riemann-trap` (n = 1…16), `diff-quotient`
  (h), `ladder` (x, dx/dt), `cone-tank` (water depth h), `linearization` (tangent point a),
  `optimization` (cut x), `optimization-diagram` (cut x), `logistic` (k, M, P0),
  `taylor-sin` (highest odd degree), `taylor-exp` (highest degree), `maclaurin-cos` (highest even degree).
- Precalculus/trig/vectors: `sinusoid` (A, B, phase, D), `vector-motion` (parameter t),
  `polar-basic` (θ), `polar-limacon` (coefficient a), `unit-circle-trig` (θ), `arc-sector` (r, θ),
  `identity-derivation` (θ), `vector-components` (u and v components).
- Algebra: `quadratic` (a, b, c), `vertex-form` (a, h, k), `compound-interest` (P, r, t),
  `matrix-transform` (four entries), `matrix-rot` (θ).
- Geometry/comparison: `angles` (acute angle), `parallel-transversal` (corresponding angle),
  `similar-tri` (scale factor k), `special-right-triangles` (focus 45° or 30° panel),
  `congruence-tests` (focus SSS/SAS/ASA), `similarity-tests` (focus AA/SAS/SSS),
  `solid-scaling` (similarity ratio k).

## What stayed static

The remaining 294 figures are structure/pathway/anatomy diagrams, comparison tables, particle views,
or plots whose teaching point is already the fixed labels (for example `fluid-mosaic`,
`translation`, `krebs-cycle`, `functional-groups`, `conic-standard`, `proof-template`,
`character-matrix`, `leaf-anatomy`). They were left static rather than receiving a control that would
not change the mathematical content. No existing figure was removed or given a fake parameter.

## Deliberate default-state corrections

Two old static figures were internally inconsistent. Converting them exposed the mismatch, so the
interactive version uses one coherent model:

1. `enz-inhibition`: the old caption/competitive curve used `[I]/Ki = 2` (apparent Km 6), but the old
   noncompetitive curve used `Vmax = 5`, which is the value for `[I]/Ki = 1`. The interactive figure
   uses `[I]/Ki = 2` for both mechanisms, so the default noncompetitive Vmax is `10/3 ≈ 3.33`, not 5.
   Both curves and the caption now follow the same stated parameter.
2. `solid-scaling`: the old large cylinder was drawn with r = 2, h = 4 (volume `16π`) but the table and
   caption said `8π`. The table/caption now say `16π` (still ×8), and the default label line reports the
   three scale factors explicitly.

Apart from these two, the default curve geometry, labels and data are unchanged.

## Checks

- `node --check data/math/figlib.js`, `data/bio/figures.js`, `data/math/figures.js` — pass.
- Rebuilt all 349 figures in Node: no missing/empty SVG, no `NaN` in SVG or captions.
- Exercised every control at both endpoints (and every button option) for all 55 interactive figures:
  no throw, no `NaN`, no stale caption.
- Playwright, 44 topic routes containing interactive figures, 1280px light:
  - every interactive figure mounts a control bar;
  - every slider/button changes the SVG;
  - 0 console/page errors, 0 `.katex-error`, 0 page/SVG overflow;
  - 0 control/SVG or caption/SVG overlap.
- Playwright, same 44 routes, 390px light **and** dark:
  - 0 horizontal page overflow;
  - 0 controls outside the figure / page;
  - every input, select and button ≥ 44px high;
  - 0 console/page errors, 0 `.katex-error`.
- `node scripts/check-math-notation.mjs` → `MATH_NOTATION_OK`.
- Screenshots: `screenshots/figures-interact-bio-math/` — 12 representative cases × before/after
  (24 PNGs), covering 8+ figures, light and dark, 1280px and 390px:
  - `01-enz-substrate-light` (Km/Vmax)
  - `02-phenotype-matrix-light` (environment focus)
  - `03-c14-decay-light` (half-life)
  - `04-pop-growth-light` (r/K)
  - `05-riemann-left-light` (n)
  - `06-compound-interest-light` (P/r/t)
  - `07-vector-components-light` (components)
  - `08-unit-circle-trig-light` (angle)
  - `09-matrix-transform-dark` (matrix entries, dark desktop)
  - `10-error-bars-mobile` (n, 390px)
  - `11-arc-sector-dark-mobile` (r/θ, dark 390px)
  - `12-solid-scaling-light` (k, corrected volume)

## Files changed

- `data/math/figlib.js` — interactive metadata + control bar renderer.
- `data/bio/figures.js` — 21 interactive figure definitions.
- `data/math/figures.js` — 34 interactive figure definitions.
- `audit/figure-interact-bio-math.md` — this record.
- `screenshots/figures-interact-bio-math/*.png` — before/after captures.
