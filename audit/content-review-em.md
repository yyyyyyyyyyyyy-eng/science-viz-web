# Content review — AP Physics C E&M (`data/em/`)

Date: 2026-11-06  
Reviewer: isolated content-accuracy session  
Scope: `data/em/` topic sources only (not `data/em/practice/`, not `data/physics/` figure modules, not `data/enrichments/batch2.js`).

## Method

Read all 9 E&M modules and all 40 topic objects: 9 foundational prep topics, AP Units 8–13 (31 topics). Checked formulas, notes, conditions, examples, and the 13 enrichment overlays that are displayed (2 batch1, 11 batch2).

Checks:

- `node scripts/check-math-notation.mjs` → `MATH_NOTATION_OK`.
- KaTeX render of every topic formula and `solutionLatex` (138 strings) → 0 errors.
- Import check on `data/em/index.js` → 40 topics.
- Cross-check of batch1 E&M entries and spot-check of batch2 overlays.

## Executive summary

The E&M base records were populated with a small set of formulas copied across unrelated topics:

| Formula shown at review start | Topics |
|---|---:|
| Point-charge field `E=\frac{1}{4\pi\varepsilon_0}\frac{|q|}{r^2}` | 13 |
| Ampère’s law | 5 |
| Faraday’s law | 5 |
| Parallel-plate capacitance | 4 |
| Gauss’s law | 4 |
| `I=\varepsilon/R` | 3 |
| `K=\frac12mv^2` | 2 |
| RC charging | 2 |
| Riemann-sum integral | 1 |
| Duplicate point-charge field | 1 |

31 of 40 topics displayed a formula from a different topic or only a partial relation. Examples: Electric Power showed kinetic energy; Kirchhoff’s rules showed `I=\varepsilon/R`; LR and LC circuits showed a point-charge field; Electric Potential showed an electric-field formula; Magnetic Flux showed Faraday’s law. Nine topics already had a relevant formula but still needed conditions/notes.

I replaced all 40 formula blocks with topic-appropriate formulas, conditions, and corrected example-2 `solutionLatex` values. This is a formula/accuracy correction; the generic prose and examples remain template-level.

Enrichment coverage is 13/40 topics (2 batch1 + 11 batch2); 27 topics still show template-only prose. Batch1 E&M content was checked and is correct. Batch2 is another session’s file; spot-checked and not edited.

## Critical errors fixed

| Topic | Old formula / issue | Corrected core relation | Severity |
|---|---|---|---|
| `em-u11/11.4` Electric Power | `K=\frac12mv^2` | `P=IV`, `P=I^2R=V^2/R`, `E=Pt` | blocker |
| `em-u11/11.6` Kirchhoff Loop Rule | `I=\varepsilon/R` | `\sum\Delta V=0` | blocker |
| `em-u11/11.7` Kirchhoff Junction Rule | `I=\varepsilon/R` | `\sum I_{\rm in}=\sum I_{\rm out}` | blocker |
| `em-u13/13.5` LR Circuits | point-charge field | `\tau=L/R`, `I(t)=\frac{\varepsilon}{R}(1-e^{-t/\tau})` | blocker |
| `em-u13/13.6` LC Circuits | duplicate point-charge field | `\omega=1/\sqrt{LC}`, `T=2\pi\sqrt{LC}` | blocker |
| `em-u9/9.1` Electric Potential Energy | point-charge field | `U=kq_1q_2/r`, `U=qV`, `W_{\rm field}=-\Delta U` | blocker |
| `em-u9/9.2` Electric Potential | point-charge field | `V=U/q`, `V=kq/r`, `E_x=-dV/dx` | blocker |
| `em-u9/9.3` Potential of Distributions | point-charge field | `V=k\int dq/r`, `V_{\rm total}=\sum V_i` | blocker |
| `em-u10/10.1` Conductors | capacitor formula | `E_{\rm inside}=0`, conductor is equipotential | blocker |
| `em-u11/11.2` Simple Circuits | RC charging | `\varepsilon=I(R+r)`, series/parallel | blocker |
| `em-u12/12.2` Moving Charges | Ampère’s law | `F=qv\times B`, `r=mv/(|q|B)`, `T=2\pi m/(|q|B)` | blocker |
| `em-u12/12.3` Biot–Savart | Ampère’s law | `dB=\frac{\mu_0}{4\pi}\frac{I\,d\ell\times\hat r}{r^2}`, long-wire/solenoid results | blocker |
| `em-u13/13.1` Magnetic Flux | Faraday’s law | `\Phi_B=\int B\cdot dA=BA\cos\theta` | blocker |
| `em-u13/13.4` Inductance | Faraday’s law | `L=N\Phi_B/I`, `\varepsilon_L=-L\,dI/dt`, `U=\frac12LI^2` | blocker |
| Prep `P1.1` Coulomb’s Law | point-charge field | `F=k|q_1q_2|/r^2`, force pair | blocker |
| Prep `P1.3` Electric Potential | point-charge field | `V=U/q`, `V=kq/r` | blocker |
| Prep `P1.5` Ohm’s Law and Circuits | point-charge field | `V=IR`, `P=IV`, series/parallel | blocker |
| Prep `P1.6` Lorentz Force | Ampère’s law | `F=qv\times B`, `F=IL\times B` | blocker |
| Prep `P1.7` Magnetic Flux | Faraday’s law | `\Phi_B=BA\cos\theta`, flux integral | blocker |

The remaining topics had relevant-but-incomplete formulas; they were completed with the standard relations and conditions. Examples: `8.4` now starts from `\Phi_E=\int E\cdot dA` (Gauss remains in 8.5), `8.1` uses Coulomb/charge quantization, `10.2` uses charge conservation + equal final potential, `11.3` uses `R=\rho L/A`, `12.1` uses Lorentz/current force, `13.3` uses Faraday + `I=\varepsilon/R` + `F=IL\times B`.

## Per-unit audit

| Unit | Topics | Findings / representative fixes |
|---|---:|---|
| `em-prep-found` | 9 | P1.1 Coulomb, P1.2 field, P1.3 potential, P1.4 capacitance, P1.5 circuits, P1.6 Lorentz, P1.7 flux, P1.8 vector flux, P1.9 calc tools. Only P1.2/P1.4/P1.9 were already appropriate; others corrected. |
| `em-u8` | 5 | 8.1 Coulomb/quantization; 8.2 field/superposition; 8.3 `dE=k\,dq/r^2`; 8.4 electric flux; 8.5 Gauss. Old 8.1/8.4 used Gauss, 8.3 used point charge. |
| `em-u9` | 4 | 9.1 potential energy; 9.2 potential/gradient; 9.3 potential integral; 9.4 energy conservation. Old 9.1–9.3 used field formulas. |
| `em-u10` | 4 | 10.1 conductor electrostatics; 10.2 charge redistribution; 10.3 capacitors; 10.4 dielectrics. Old 10.1 used capacitance, 10.2 used field. |
| `em-u11` | 8 | 11.1 current; 11.2 simple circuits; 11.3 resistivity; 11.4 power; 11.5 compound circuits; 11.6 loop; 11.7 junction; 11.8 RC. Old 11.4 used kinetic energy; 11.6/11.7 used `I=\varepsilon/R`. |
| `em-u12` | 4 | 12.1 magnetic fields; 12.2 moving charges; 12.3 Biot–Savart; 12.4 Ampère. Old 12.2/12.3 used Ampère; 12.1 was partial. |
| `em-u13` | 6 | 13.1 flux; 13.2 Faraday; 13.3 induced current/force; 13.4 inductance; 13.5 LR; 13.6 LC. Old 13.5/13.6 used point-charge fields; 13.6 duplicated the array. |

## Enrichment check

- Batch1: `em/em-u10/10.3` capacitors and `em/em-u11/11.1` current. Definitions, formulas, conditions, and examples were read; no factual error found.
- Batch2: 11 E&M overlays were scanned for definitions, formulas, conditions, and key points. Representative checks:
  - Capacitor `C=Q/V`, `C=\kappa\varepsilon_0A/d`, `U=\frac12CV^2` correct.
  - Inductance `L=N\Phi_B/I`, `\varepsilon_L=-L\,dI/dt`, `U=\frac12LI^2` correct.
  - LR/RC time constants and exponential forms correct.
  - Gauss/Faraday/Ampère forms and sign conventions correct.
  - Energy-density and power conditions correct.
- No batch2 edit was made (outside write scope).

## Verification

- `check-math-notation.mjs` → `MATH_NOTATION_OK`; no slash-fraction hits in E&M topic data.
- KaTeX render of 138 topic formula/solution strings → 0 errors.
- Import of `data/em/index.js` → 40 topics.
- `git diff --check` clean.

## Remaining issues

1. **Template depth (blocker for self-study).** 27 of 40 topics have no enrichment overlay; most still use generic prose/examples. This needs enrichment, not an accuracy patch.
2. **Batch2 ownership.** Batch2 E&M overlays are another session’s file; this review did not edit them. Spot-checks found no factual errors, but coverage may change concurrently.
3. **Conditions.** All 40 base topics now have topic-specific conditions; the generic examples/key points remain template-level.
4. **Figure modules.** `data/physics/` and the physics figure library are outside this review; no edits were made there.

## Self-check (E&M)

- Re-read the seven changed E&M files (all 40 topic formula/condition blocks) and this report.
- Re-ran `node scripts/check-math-notation.mjs` → `MATH_NOTATION_OK`.
- Re-ran KaTeX on all 138 E&M formula/`solutionLatex` strings → 0 errors; imported `data/em/index.js` → 40 topics.
- Scanned for leftover pH, kinetic-energy, dy/dx, `I=\varepsilon/R` contamination, duplicate formulas, wrong solutionLatex, raw LaTeX in conditions, broken braces, and slash fractions. No leftovers; all conditions are plain text.
- Checked the physics of the corrected relations: Coulomb/Gauss/Ampère/Faraday signs, capacitor and inductor energy, RC/LR/LC time constants, Biot–Savart, and Kirchhoff rules.
- Found and fixed during self-check: `em-prep-found/P1.7` example `solutionLatex` now matches the full vector flux formula; the report’s 8.4 wording now points Gauss’s law to 8.5.
- No further issues found. E&M is ready to commit.
