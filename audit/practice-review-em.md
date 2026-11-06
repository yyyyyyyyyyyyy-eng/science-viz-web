# Practice review — AP Physics C Electricity & Magnetism

Date: 2026-11-06
Scope: `data/em/practice/` — 7 banks, 540 items (`em-prep-found`, `em-u8`…`u13`).
Method: parsed every bank, reviewed every distinct template and worked solution, recomputed field/current values, checked the shared-stimulus tables against the diagrams, and checked fraction formatting. The historical audit `/workspace/audit-coding2.md` (items A, G3, G4, M4) was used as a checklist and each finding was re-verified against the current files.

## Summary

| Severity | Pattern | Count |
|---|---|---:|
| Critical | Capacitor unit had no capacitor; shared circuit set presented \(I=\varepsilon/R\) without the DC steady-state caveat | 1 set + 21 set items |
| High | Field/Gauss sets asked for a current from an \(\varepsilon,R\) table while showing a field/Gauss diagram | 14 set items |
| High | “Core law” in every set was Kirchhoff, including field and Gauss sets | 21 set items |
| High | Point-charge E result in `answerLatex` was historically \(1.8\times10^5\); current files already contain \(1.8\times10^6\) | 89 verified |
| Moderate | Slash fractions `I=\varepsilon/R`, `Q_{\mathrm{enc}}/\varepsilon_0` | 136 |
| Moderate | Float-noise `expected` values (`1799999.9999999995`, `899999.9999999998`) | 136 |
| Moderate | Circuit/point-charge templates repeated in magnetism, induction, and capacitor units | ~400 |
| Moderate | “Doubling” example used Ohm's law in point-charge field sets | 7 |
| Moderate | Vacuous MCQs with “场线密度” distractors | ~90 |

No arithmetic error remains in the numeric E&M items: \(E=kq/r^2=1.8\times10^6\ \mathrm{N/C}\), \(E=kQ/r^2=9.0\times10^5\ \mathrm{N/C}\), \(I=\varepsilon/R=2.00\ \mathrm{A}\), and the capacitor steady-state current is \(0\).

## Findings and fixes

### 1. Critical — capacitor steady-state current

Before the fix, `em-u10` (Conductors and Capacitors) began with a pure-resistor circuit and used `I = ε/R = 2 A` as the model answer. That is the exact class of bug called out in the task: for a capacitor in series with a DC source, the steady-state current is zero, not \(2\ \mathrm{A}\).

Fix in `em-u10-set1` (`em-u10-q001`, `em-u10-q002`):

- Stimulus changed to “理想电池、电阻与电容串联，开关闭合足够长时间”.
- Table now `ε = 12 V`, `R = 6 Ω`, `C = 50 μF`; circuit diagram now includes the capacitor element.
- `q001` core law: \(\varepsilon=IR+Q/C,\ I=dQ/dt\).
- `q002` asks for the steady current; `expected: 0`; answer \(I_\infty=0\); solution states the capacitor is an open circuit at DC steady state.

### 2. High — field/Gauss sets were not answerable from their tables

Representative IDs: `em-u8-q005`, `em-u8-q009`, `em-u10-q005`, `em-u10-q009`, `em-u12-q005`, `em-u12-q009`, `em-u13-q005`, `em-u13-q009`.

Before: set 2/3 showed a point-charge or Gaussian-surface diagram, but the table was still `ε = 12 V`, `R = 6 Ω`, and the answer was `I = ε/R = 2 A`. The target quantity was undefined and the model was from a different unit.

Fix applied to all 14 field/Gauss set items:

- Set 2 table: `q = 2.0 μC`, `r = 0.10 m`, `k = 9.0×10⁹`; question asks for \(E\); expected `1.8×10⁶ N/C`; solution \(E=kq/r^2\).
- Set 3 table: `Q = 1.0 μC`, `r = 0.10 m`; question asks for the field outside the spherical Gaussian surface; expected `9.0×10⁵ N/C`; solution \(E=kQ/r^2\).

### 3. High — wrong core law in set questions

Before: every first set question answered \(\sum I=0,\ \sum\Delta V=0\) (Kirchhoff), including sets whose diagram was a point charge or a Gaussian surface.

Fix applied to 21 set items, matched to the diagram:

| Set | Core law now shown |
|---|---|
| Circuit set | \(I=\dfrac{\varepsilon}{R}\) (pure resistor); `em-u10` uses \(\varepsilon=IR+Q/C,\ I=dQ/dt\) |
| Point-charge set | \(\vec E=\dfrac{1}{4\pi\varepsilon_0}\dfrac{q}{r^2}\hat r\) |
| Gauss set | \(\oint\vec E\cdot d\vec A=\dfrac{Q_{\mathrm{enc}}}{\varepsilon_0}\) |

### 4. High — electric-field order of magnitude (re-verified)

The historical audit reported 89 `answerLatex` fields as \(1.8\times10^5\) instead of \(1.8\times10^6\). In the current tree the display answer was already `1.8\times10^6`, so no magnitude correction was needed. I re-derived every field item:

\[
E=\dfrac{kq}{r^2}
=\dfrac{(9.0\times10^9)(2.0\times10^{-6})}{(0.10)^2}
=1.8\times10^6\ \mathrm{N/C}.
\]

The Gaussian-sphere items are also correct:

\[
E=\dfrac{kQ}{r^2}
=\dfrac{(9.0\times10^9)(1.0\times10^{-6})}{(0.10)^2}
=9.0\times10^5\ \mathrm{N/C}.
\]

I did clean the binary-float noise: `1799999.9999999995 → 1800000` and `899999.9999999998 → 900000` (136 fields), and added `solutionLatex` with `\dfrac` and explicit \(r^2\).

### 5. Moderate — slash fractions

- `I=\varepsilon/R` appeared as an `answerLatex` in 83 standalone circuit parts; changed to \(I=\dfrac{\varepsilon}{R}\).
- `Q_{\mathrm{enc}}/\varepsilon_0` appeared 47 times; changed to \(\dfrac{Q_{\mathrm{enc}}}{\varepsilon_0}\).
- Added `solutionLatex` for circuit and field calculations, e.g. \(I=\dfrac{12}{6}=2.00\ \mathrm{A}\), so the worked solution uses stacked fractions rather than slash arithmetic.

### 6. Moderate — capacitor note in every pure-resistor item

For the non-capacitor circuit sets, the answer now says explicitly “纯电阻回路；若串联电容，直流稳态 \(I=0\)”. This keeps the correct resistor result \(2\ \mathrm{A}\) while preventing the old misconception from being taught in the capacitor/RC units.

### 7. Moderate — wrong-domain “doubling” example in field sets

`em-u8-q007` (and the equivalent set-2 item in every E&M bank, 7 total) answered “若某一参数加倍…” with the Ohm's-law example \(R\uparrow\Rightarrow I\downarrow\), even though the set is a point-charge field. Replaced with the field relation: \(E=kq/r^2\); doubling \(q\) doubles \(E\), doubling \(r\) makes \(E\) one quarter.

## Verification

- Parsed all 7 banks after editing; item counts unchanged: 57/72/101/72/87/79/72.
- Recomputed the field and current answers above; capacitor steady state is `expected: 0`.
- Checked that no `answerLatex` contains a slash fraction; remaining `/` characters are units (`N/C`).
- Checked that no `expected` values with float noise remain.
- Playwright smoke test at `#/em/practice/em-u10` and `#/em/practice/em-u8` (1280×900): 0 console errors, 0 KaTeX errors; `em-u10` set 1 shows the capacitor symbol, \(C=50\ \mu F\), and solution \(I_\infty=0\) renders correctly.

## Remaining issues

1. **Unit alignment is still weak.** `em-u11` (circuits), `em-u12` (magnetism), and `em-u13` (induction) still contain point-charge and Gauss sets, and the standalone point-charge/circuit templates repeat across all units. Fixing this needs unit-specific stimuli and questions (e.g. series/parallel/RC for u11, Lorentz/Ampere for u12, Faraday/Lenz/LR for u13), not a one-line correction.
2. **No capacitor/dielectric numerical items.** `em-u10` now has the correct steady-state concept, but no \(C=Q/\Delta V\), dielectric, or energy-storage calculation.
3. **MCQs remain generic** (`em-u8-q012`, `em-u11-q012`, etc.); correct option is “适用定律有明确条件…” and options mention field-line density even in circuit units.
4. The generator `scripts/build-practice-v9.mjs` still emits the old cross-unit templates and the `I=\varepsilon/R` example. It was out of scope here; if the banks are regenerated, the generator must be fixed first.
