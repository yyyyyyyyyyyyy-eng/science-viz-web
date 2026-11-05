# Accuracy & Delivery Audit Report

**Date:** 2026-11-05 (Asia/Shanghai)  
**Scope:** `/workspace/science-viz` practice banks, diagrams, topics, formulas, maps, past papers

## Checks run

| Suite | Result |
|-------|--------|
| Numeric recomputation / FBD–KE consistency / vague answers | **0 issues** after rebuild (`audit/issues-post-fix.json`) |
| MCQ unique correct option | Covered in audit walk |
| Math notation (stacked fractions) | `MATH_NOTATION_OK` via `scripts/check-math-notation.mjs` |
| Physics C / Calc formula sheet constants & core equations | Present (g, G, k, ε₀, μ₀, e, ΣF=ma, Gauss, Ohm, power rule, …) |
| College Board FRQ PDF HEAD probe | Verified 2021–2026 bio/calc; mech/em with set URLs 2023–24; **2020 direct PDFs missing** (hub only) |
| Playwright v9 (errors, overflow, shift-click, diagrams) | Prior run VERIFY_OK; edge-handle tests added in v9b |

## Issues found & fixed

| Category | Found | Fixed | Notes |
|----------|------:|------:|-------|
| Illustrative / vague numeric (“见解析中的数量级”) | ~194 | 194 | Regenerated physics/EM banks with exact `expected` from parameters |
| FBD diagram vs KE target mismatch | ~51 | 51 | Split FBD friction problems vs kinetic-energy problems |
| Gauss `kind` conflict (`kind:'gauss'` vs surface type) | 1 | 1 | Use `surface` / `gaussKind` |
| Router `#/credits` nested under subject IDs | 1 | 1 | Credits/pastpapers parsed before subject branch |
| Mind map layout | — | Redesigned | Concentric Fibonacci shells; edges primary; midpoint handles |
| Edge relationship content | 0 → 364 | Written | `data/*/relations.js` for all graph edges |

## Past papers index

- Entries: **166** (bio/math/mech/em, 2020–2026; AB shared FRQs included under math)
- With verified PDF: **144**
- Missing direct PDF: **2020** all courses (link to official past-exam hub)
- Route: `#/pastpapers` (+ subject/year filters); topic & unit pages link in

## Diagram kinds (practice)

fbd, circuit, field, gauss, pulley, motionGraph, pedigree, punnett, phylo, cell, pathway, foodWeb, gel, enzyme — data-driven SVG; FBD arrow lengths scale with force magnitudes when provided.

## Unverifiable / remaining gaps

- **2020 FRQ media URLs** not found via HEAD; use College Board hub pages
- **2023–2024 Physics C** use set-1/set-2 PDF names (documented)
- Chief Reader Report URLs not exhaustively verified for every year
- Topic self-study text is systematic teaching rewrite, not a verbatim CED dump
- Past-paper paraphrases are **archetypal** (by FRQ slot), not year-specific spoilers of prompt content
- Module canvas physics simulations: not all re-validated numerically this pass
- Full visual design refresh deferred (modest CSS only)

## Artifacts

- `audit/issues-post-fix.json`, `audit/pastpapers-stats.json`, `audit/cb-url-probe.json`
- Screenshots: `screenshots/v9/`
