# Practice review — AP Physics C Mechanics

Date: 2026-11-06
Scope: `data/mech/practice/` — 10 banks, 418 items (`mech-prep-ap1/hs/math`, `mech-u1`…`u7`).
Method: parsed every bank, reviewed every distinct item template and its worked solution, recomputed all numeric answers, and checked formula/unit/placement consistency. The banks are template-generated, so a small number of templates account for nearly all items.

## Summary

| Severity | Pattern | Count |
|---|---|---:|
| High | Shared-stimulus numeric items were underdetermined or used the wrong model | 30 |
| High | Kinetic-energy items were placed in kinematics, momentum, rotation, and oscillation units | 65 |
| Moderate | Terminology error “动能摩擦” (should be “动摩擦”) | 102 |
| Moderate | Slash/ASCII fractions in worked solutions instead of `\dfrac` | 151 |
| Moderate | “Doubling” example used Ohm's law instead of a mechanics relation | 10 |
| Moderate | Vacuous MCQs that can be answered without the unit content | ~90 |
| Low | Duplicated identical items inside each bank | ~300 |

No wrong numerical formula or order-of-magnitude error was found in the mechanics bank: the friction result \(a=3.04\ \mathrm{m/s^2}\), the frictionless result \(a=5.0\ \mathrm{m/s^2}\), and \(K=16\ \mathrm{J}\) are arithmetically correct. The confirmed defects were framing, placement, and notation.

## Findings and fixes

### 1. High — shared-stimulus items were not answerable from the stimulus

Representative IDs (same pattern in every mechanics bank):
`mech-u1-q002`, `mech-u1-q005`, `mech-u1-q009`; also `mech-u2-q002/q005/q009`, …, `mech-u7-q002/q005/q009`; and the three set versions in `mech-prep-*`.

Before the fix:

- Set 1 table had `m`, `μ_k`, `θ` but no applied force `F`, yet `mech-u1-q002` expected `3` from \(a=(F-\mu_k mg)/m\).
- Set 2 used a pulley diagram but the table still contained the block-on-surface values, so the requested acceleration could not be computed.
- Set 3 showed a \(v\)-\(t\) graph but asked for the same friction acceleration and expected `3`.

Fix applied to all 30 items:

- Set 1: added `F = 10 N` and `g = 9.8 m/s²`; asked explicitly for the block acceleration; expected `3.04`, tolerance `0.01`; solution now derives \(a=(F-\mu_k mg)/m=3.04\ \mathrm{m/s^2}\).
- Set 2: replaced the table with `m₁ = 2.0 kg`, `m₂ = 1.0 kg`, `g = 9.8 m/s²`; rewrote the text as an Atwood machine (both masses hanging, \(m_1>m_2\)) so it matches the pulley diagram; expected `3.27`, tolerance `0.01`; solution \(a=(m_1-m_2)g/(m_1+m_2)=3.27\ \mathrm{m/s^2}\).
- Set 3: removed the irrelevant mass/friction table; asked for the slope of the \(v\)-\(t\) graph over \(0\)–\(1\ \mathrm{s}\); expected `3.0`, tolerance `0.01`; solution \(\Delta v/\Delta t=3.0\ \mathrm{m/s^2}\).

### 2. High — kinetic-energy items were attached to non-energy units

Representative IDs: `mech-u1-q013`, `mech-u2-q013`, `mech-u4-q013`, `mech-u5-q013`, `mech-u6-q013`, `mech-u7-q013` (and their repeated copies).

`K = ½mv² = 16 J` is correct but belongs to `mech-u3` (work–energy). In kinematics, momentum, torque, rotation, and oscillation banks it displaced unit-specific practice. The audit in `/workspace/audit-coding2.md` flagged this as G7.

Fix applied to 65 items: each unit now has a numeric item from its own unit, with matching formula, answer, solution, and `topicLinks`:

| Unit | New item | Answer |
|---|---|---|
| `mech-u1` | \(v=v_0+at\), \(v_0=0,\ a=2.0,\ t=3.0\) | \(6.0\ \mathrm{m/s}\) |
| `mech-u2` | \(a_c=v^2/r\), \(v=4.0,\ r=2.0\) | \(8.0\ \mathrm{m/s^2}\) |
| `mech-u4` | \(p=mv\), \(m=2.0,\ v=4.0\) | \(8.0\ \mathrm{kg\,m/s}\) |
| `mech-u5` | \(\tau=rF\), \(r=0.50,\ F=10\) | \(5.0\ \mathrm{N\,m}\) |
| `mech-u6` | \(L=I\omega\), \(I=0.50,\ \omega=4.0\) | \(2.0\ \mathrm{kg\,m^2/s}\) |
| `mech-u7` | \(T=2\pi\sqrt{m/k}\), \(m=0.50,\ k=50\) | \(0.628\ \mathrm{s}\) |

`mech-u3` keeps the kinetic-energy item, where it belongs.

### 3. Moderate — “动能摩擦” terminology

`solution: "N=mg，动能摩擦与运动反向。"` appeared 102 times across all 10 banks (inside `parts`). Correct term is 动摩擦 (kinetic friction). Replaced with “动摩擦（kinetic friction）”.

### 4. Moderate — slash / ASCII fractions in worked solutions

The following solution strings used inline slash arithmetic and did not render as LaTeX:

- `a=(F-μ_k mg)/m=(10-0.2*2*9.8)/2=3.0400.` (102 friction parts)
- `a=F/m=5.0 m/s²。` (49 items)
- `K=½·2·16=16 J.` (70 items)
- `I=…` etc. in the E&M pass

Each now has a plain-language `solution` plus a `solutionLatex` using `\dfrac`, e.g.

\[
a=\dfrac{F-\mu_k mg}{m}
=\dfrac{10-(0.20)(2.0)(9.8)}{2.0}=3.04\ \mathrm{m/s^2}.
\]

### 5. Moderate — wrong-domain proportion example

`mech-u1-q007` (and the equivalent item in every mechanics bank, 10 total) answered “若某一参数加倍…” with “R↑⇒I↓ 成反比（欧姆情形）”. Ohm's law is not a mechanics model. Replaced with the actual mechanics relation: \(a=F/m\); at fixed \(m\), doubling \(F\) doubles \(a\), and at fixed \(F\), doubling \(m\) halves \(a\).

### 6. Moderate — vacuous MCQs (not changed)

Representative: `mech-u1-q012`, `mech-u2-q012`, `mech-u3-q018`, all `mech-prep-*` concept MCQs. The correct option is “适用定律有明确条件，矢量/符号必须一致”; distractors include “场线密度与物理强度无关”, which is not a mechanics concept. These are not factually false, but they test no mechanics content and can be answered from exam-taking heuristics. Replacing them requires per-topic editorial content, which is outside a factual-fix pass; see Remaining issues.

### 7. Low — duplicated items

Each bank contains the same 9–13 templates repeated many times (e.g. ten copies of the friction block, ten copies of the \(a=F/m\) item). Counts are inflated without adding coverage. This is a content-production issue, not an accuracy bug.

## Verification

- Parsed every bank after editing with Node `vm`; all banks load and all item counts are unchanged (34/40/28/40/52/44/40/40/44/40).
- Recomputed new answers:
  - \(a=(10-0.2\cdot2\cdot9.8)/2=3.04\)
  - \(a=(2.0-1.0)(9.8)/(2.0+1.0)=3.27\)
  - slope \((3-0)/(1-0)=3.0\)
  - \(a_c=4^2/2=8.0\)
  - \(T=2\pi\sqrt{0.50/50}=0.628\)
- Checked there are no remaining `动能摩擦`, no remaining generic “代入表中数据求一个目标量” stems, and no numeric `expected` without a matching answer.
- Playwright smoke test at `#/mech/practice/mech-u1` and `#/mech/practice/mech-u7` (1280×900): 0 console errors, 0 KaTeX errors, 40 cards each; state table shows `F = 10 N`, and expanded solution renders the stacked fraction correctly.

## Remaining issues

1. **Unit alignment is still weak.** The set-1 friction/Atwood items are dynamics content even in `mech-u1` (kinematics), `mech-u3` (energy), `mech-u4` (momentum), `mech-u5`–`u7`. Making every item belong to its unit needs a per-unit curated set (new questions/stimuli), not a one-line factual fix.
2. **MCQs need editorial rewrite** (G6). Recommend one specific correct proposition plus three misconception-based distractors per topic.
3. **Deduplication.** A curated bank of ~12–20 distinct items per unit would be better than 40–52 mostly repeated items.
4. The generator `scripts/build-practice-v9.mjs` still produces the old cross-unit templates. It was out of scope for this review and should be changed if these banks are ever regenerated.

## Self-check (2026-11-06)

Re-read the shipped commits (`e327e5e`, `7fb3b56`) and every mechanics practice file; verified the current files are unchanged after `bf2a022`.

Re-ran:

- Node `vm` parse of all 10 banks: all load; item/card counts unchanged.
- Greps for `动能摩擦`, `R↑⇒I↓`, generic “代入表中数据求一个目标量”, float-noise `expected`: 0 remaining.
- Playwright on all 27 practice routes at 390×844 and 1280×900, light and dark: 0 console errors, 0 KaTeX errors, no horizontal page overflow, no card overlap, all visible controls ≥44 px, minimum text contrast 5.1 (light) / 7.6 (dark).
- Recomputed the new answers: 3.04, 3.27, 3.0, 6.0, 8.0, 5.0, 2.0, 0.628.

Found and fixed one real self-check issue: the set-2 pulley diagram shows an Atwood machine (both masses hanging), while the text and solution described “\(m_1\) on a smooth table, \(m_2\) hanging”. Changed the text and solution to the Atwood model; the numeric answer remains \(3.27\ \mathrm{m/s^2}\).

No other factual, notation, or layout issue found in the mechanics files. Known remaining issue unchanged: some sets are still dynamics content in non-dynamics units; that needs a curated rewrite, not a one-line fix.

Base SHAs before this self-check: web `bf2a022`, app `72faec1`. The self-check commit SHA is listed in the final session report.
