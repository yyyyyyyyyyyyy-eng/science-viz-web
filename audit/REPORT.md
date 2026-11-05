# Accuracy & Delivery Audit Report

**Date:** 2026-11-05 (Asia/Shanghai)  
**Scope:** `/workspace/science-viz` — past papers, module sims, visual redesign, final QA, delivery sync

## Checks run

| Suite | Result |
|-------|--------|
| Numeric module simulation audit (`scripts/audit-simulations.mjs`) | **31/31 passed** → `audit/sim-results.json` |
| Math notation (stacked fractions) | `MATH_NOTATION_OK` |
| Past papers year-specific PDF paraphrase rebuild | **104 verified FRQs** + 1 hub-only 2020 marker → `audit/pastpapers-stats.json` |
| Playwright final QA (`verify-final.py`) | **VERIFY_OK** → `audit/final-qa.json` |
| Radius / cards / emoji constraints | radius forced `0px`; nonzero radius sample 0 |
| Overflow (375 / 768 / 1280 / 1920) | none |
| Map edge midpoints + Shift multi-select | tip + panel OK; shift_sel=2 |
| 44px hit areas (home chrome) | 0 violations |
| KaTeX fractions on topic page | present |

## Simulation audit highlights

- `mech/work-energy`: rewritten with consistent incline (`sinθ=h₀/L`); μ=0 energy conserved; μ>0 satisfies `E + W_f ≈ E₀`
- `physics/shm`: undamped energy + period `2π√(m/k)`; numeric vs analytic within tolerance
- `physics/projectile`: range & apex match analytic
- `mech/collision-momentum`: elastic p & K conserved
- `mech/gravity-orbit`: readout now shows specific energy `E` and `v_circ` (units GM=1)
- `em/*`: Gauss, RC τ, capacitor `ε₀A/d`, Faraday, cyclotron radius
- `math/slope-field-euler`: truncation error shrinks with step (educational)
- `bio`: Hardy–Weinberg identity; Lotka–Volterra equilibrium

## Past papers (verified only)

| Course | 2023 | 2024 | 2025 | 2026 | Notes |
|--------|-----:|-----:|-----:|-----:|-------|
| Biology | 6 | 6 | 6 | 6 | PDF extract paraphrases |
| Calculus (BC + AB shared rows) | 10 | 10 | 10 | 10 | BC Q1–6; AB rows only when `abShared` |
| Physics C Mech | 6 | 6 | 4 | 4 | 2023–24 include Set 1+2 |
| Physics C E&M | 6 | 6 | 4 | 4 | 2023–24 include Set 1+2 |
| **Total FRQ rows** | | | | **104** | |

**Verification status**
- 2023–2026: `verification: pdf-text-extract`, direct media PDF + scoring guideline links
- 2021–2022: **removed** (media URLs returned ~38KB HTML stubs — not verifiable PDFs)
- 2020: **hub-only** single marker (online admin); links to official past-exam hubs; no guessed FRQ paraphrases

## Visual redesign

- Palette: cool neutrals + indigo accent (`#5b6cff`), bio green / physics coral
- Frosted sticky nav (`blur(20px)`), refined Inter/SF type scale, premium hero radial glow
- Micro-interactions on nav/buttons/tiles; brand mark gradient
- Spherical maps: updated unit colors, softer PBR spheres, fill light, denser shell wireframes
- Constraints held: **radius 0**, no card shadows, no emoji
- Screenshots: `screenshots/redesign-final-r1/` (round 1), `screenshots/final/` (round 2 / delivery)

## Issues found & fixed this pass

| Item | Action |
|------|--------|
| Archetypal past-paper paraphrases | Replaced with year-specific originals from PDFs |
| Unverifiable 2021–22 | Removed rather than guess |
| work-energy energy model | Consistent incline + friction work readout |
| gravity-orbit | Specific energy + circular-orbit speed readout |
| Map palette dated | Retuned to match redesign accent |

## Remaining gaps

- 2020: no stable media PDF direct links found; hub-only
- 2021–2022: not indexed (PDFs not downloadable via known media URLs)
- Chief Reader Report URLs not exhaustively linked
- Electron macOS zips built cross-platform from Linux (unsigned)

## Artifacts

- `audit/sim-results.json`, `audit/pastpapers-stats.json`, `audit/final-qa.json`
- `screenshots/final/`, `screenshots/redesign-final-r1/`
- Source of truth: `/workspace/science-viz`
- Delivery: `/workspace/science-viz-web`, `/workspace/science-viz-app` (no push)

## Map visual correction (2026-11-05 Asia/Shanghai)

- Removed all concentric shell wireframe spheres / rings from `js/mindmap.js`
- Spherical layout retained via node positions only (basic inside → advanced outside)
- Visible scene = node points + edge lines (+ small edge midpoint handles for interaction)
- CSS map radial glow flattened to solid canvas background
- Re-verified: edge handles, Shift multi-select, zero errors → `audit/map-only-qa.json`
- Reshot: `screenshots/final/map-{bio,math,mech,em}.png`

## Map layout correction (organic)

- Replaced Fibonacci/shell-normalized layout with offline **force-directed 3D** (repulsion + edge springs + soft radial depth bias + weak unit clustering + seeded jitter)
- Per-unit distinct colors + compact legend; prep muted grey
- Still **points + lines only** (no shell rings); edge midpoint handles retained
- Screenshots: `screenshots/final/map-{bio,math,mech,em}.png`, `map-edge-relation.png`

## Kumu-style map restyle

- Compact per-unit clusters, distinct colors, cluster name labels, short intra-cluster edges
- Two-phase layout (force + pack); points+lines only; fit viewport on load
- Screenshots: `screenshots/final/map-{bio,math,mech,em}.png`, `map-edge-relation.png`
- QA: `audit/map-only-qa.json` VERIFY_OK
