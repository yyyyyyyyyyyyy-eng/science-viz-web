# Content review — AP Physics C Mechanics (`data/mech/`)

Date: 2026-11-06  
Reviewer: isolated content-accuracy session  
Scope: `data/mech/` topic sources only (not `data/mech/practice/`, not `data/enrichments/batch2.js`, not physics figure modules).

## Method

Read all 11 mechanics topic modules, all 58 topic objects (53 mounted + 5 in `mech-prep-found.js`), including formulas, notes, conditions, examples, misconceptions, and unit-level edges. Checked every unit: prep-found, prep-hs (P1), prep-ap1 (P2), prep-math (P3), AP Units 1–7.

Additional checks:

- `node scripts/check-math-notation.mjs` → `MATH_NOTATION_OK`.
- KaTeX render check on every formula and `solutionLatex` in the subject (209 strings) → 0 errors.
- Import check on `data/mech/index.js` and every edited module → no syntax/import failures.

## Executive summary

The mechanics pages are not merely thin: most base topic records are filled with a shared placeholder template. The formula block is the worst part — 39 of 58 topics used `\sum \vec F=m\vec a` as the only formula, including kinematics, energy, momentum, rotation, oscillations, waves, electrostatics, and magnetism. Four topics used only `K=\dfrac{1}{2}mv^2`, two used only the RC charging formula, one used the work–energy theorem for a potential-energy topic, and Unit 7.3 (physical pendulum) displayed the **pH definition**.

I fixed the formula and condition blocks for all 58 topics, plus the one wrong `solutionLatex` in each topic where it repeated the old formula. I did **not** rewrite the generic prose (definition, intuition, examples, key points). That is the enrichment session's job, and the shared rules explicitly reserve it.

Enrichment coverage changed while this review was running. `batch1.js` has two mechanics topics (`mech/mech-u2/2.5`, `mech/mech-u3/3.1`); another session added nine mechanics overlays to `batch2.js` (`2.1`, `2.2`, `2.6`, `3.4`, `6.2`, `6.3`, `6.4`, `7.2`, `7.3`). Both batch1 entries were checked line by line; no factual error found, so `batch1.js` was not edited. Batch2 is outside my write scope; I spot-checked it for consistency with the corrected base formulas and did not modify it.

## Systemic findings

### S1 — Placeholder topic bodies (blocker for self-study; not rewritten here)

Every base topic follows the same template:

- `definition` = “X 是本单元的核心知识点。要求：（1）准确定义…” — does not define X.
- `intuition` = generic “先确认物理/生物/数学设定…” — no physics content.
- `examples` 1–4 are generic prompts (“写出定义…”, “从核心关系出发…”), with no numbers except in the two enriched topics.
- `keyPoints`, `derivationNotes`, `checks` are generic.

A student cannot learn most mechanics topics from these pages alone. This is a depth/enrichment problem, not a formula typo, so it is recorded rather than rewritten. At the time of writing, enrichment covers 11/53 mounted topics (2 in batch1, 9 in batch2); the other 42 still show template-only prose.

### S2 — Formula blocks were populated with unrelated formulas (blocker; fixed)

Original counts across the 58 topic objects (59 formula records; prep-found P1.2 carried two):

| Original formula record | Count | Verdict |
|---|---:|---|
| `\sum \vec F=m\vec a` | 39 | appropriate only for Newton’s 1st/2nd law, dynamics/FBD; off-topic for the other ~36 |
| `K=\dfrac{1}{2}mv^2` | 4 | appropriate as a component for work–energy and work–KE; wrong as the only formula for power and rotational KE |
| `\tau=RC,\ q(t)=CE(1-e^{-t/\tau})` | 2 | valid RC result, but incomplete for “Basic DC Circuits” (no Ohm’s law, power, series/parallel) |
| `W_{\mathrm{net}}=\Delta K` | 1 | wrong topic for “Forces and Potential Energy” |
| `f'(a)=\lim...` | 2 | correct for derivative topic; wrong topic for differential equations |
| `\int_a^b...` | 1 | correct |
| `F=Gm_1m_2/r^2` | 1 | correct but incomplete for circular motion + gravitation |
| `a_c=v^2/r` | 2 | correct but incomplete |
| vector components | 1 | correct but incomplete |
| `\text{核心关系见定义}` | 5 | placeholder |
| pH definition | 1 | **flatly wrong** |

At topic level: 39 topics had a clearly wrong or off-topic formula, 4 had only a placeholder (a fifth placeholder sat alongside the correct vector formula in prep-found P1.2), 10 had a correct-but-incomplete formula, and 5 were appropriate. All 58 were corrected.

### S3 — Formula notes were copy-paste contamination (important; fixed)

Examples found in the original data:

- `mech-u3/3.2` (`W_{\mathrm{net}}=\Delta K`) note: “注意指数中写 -t/τ 在 KaTeX 用 …” — RC note on a work–energy formula.
- `mech-prep-hs/P1.5` (friction) and `P1.6` (circular motion) carried the same RC note.
- `mech-u6/6.1` (rotational KE) carried “动能；叠式分式” while displaying translational KE.
- `mech-u7/7.3` carried “pH 定义”.
- `mech-u3/3.4` (power) carried the translational KE note.

Every note was rewritten with the corrected formula.

### S4 — Missing conditions (important; fixed in formula/condition block)

The old condition arrays were “满足定理/定律条件 / 注意理想化假设”, which is vacuous. Conditions now state the actual assumptions, e.g.:

- 1D/2D kinematics: constant acceleration, fixed positive axis, projectile ignores air resistance.
- Friction: `N` is not necessarily `mg`; static friction adjusts up to `\mu_s N`.
- Energy conservation: only conservative forces do work; zero of potential is fixed per problem.
- Momentum conservation: net external impulse zero (or negligible vs. internal impulse), direction by direction.
- Circular motion: centripetal force is a radial component, not an extra force.
- SHM/pendulums: `F=-kx`, small-angle approximation, `I` about the pivot for physical pendulum.
- Rolling: no-slip condition; static friction does no work.
- Orbits: circular orbit, `M \gg m`, `r` measured from the central body’s center.

### S5 — Cross-domain template text (important; partially fixed)

The generic example solution said “条件例如准静态、理想绝缘、连续可微、种群封闭等” on mechanics pages. I replaced that sentence with a domain-neutral instruction to check the actual law/model assumptions. The generic misconception “回路方向与方程符号不一致” (circuit direction) also appeared on mechanics pages; replaced with “受力图漏力或把内力当作外力”.

Remaining generic prose still contains cross-domain phrasing (for example “能画出对应的受力图/电路图/场示意图” on wave topics). This is template depth, not a false equation; left for enrichment.

### S6 — Orphaned prep module (integration issue, not fixed)

`data/mech/mech-prep-found.js` contains 5 topics (P1.1–P1.5), but `data/mech/index.js` never imports it and no graph/relation file references `mech-prep-found`. The file is dead code, so its pages are unreachable. I corrected its formulas for consistency, but the mounted course is 53 topics, not 58. Product decision: either mount this unit (add import + graph nodes + routes) or delete/merge the file. I did not change `index.js` because adding it would collide with `mech-prep-hs` codes P1.1–P1.5 in the flattened `TOPICS` object.

## Per-unit audit and fixes

The table describes the base topic records. Where a batch1/batch2 overlay exists, the app renders the overlay instead of the base formula; the base record is still the fallback and was wrong.

Severity: **blocker** = the page teaches a false/unrelated relation; **important** = incomplete relation or missing conditions; **nit** = presentation/wording.

### Prep-found (`mech-prep-found`, orphan — corrected but not mounted)

| Topic | Finding | Corrected core relation | Severity |
|---|---|---|---|
| P1.1 Measurement and Units | placeholder `核心关系见定义` | SI base units `m, kg, s, A, K, mol, cd`; unit/dimension checks | important |
| P1.2 Vector Basics | only `\vec a=a_x\hat i+a_y\hat j` | added `|\vec A|=\sqrt{A_x^2+A_y^2}`, `\tan\theta=A_y/A_x` | important |
| P1.3 Intro 1D Motion | placeholder | average/instantaneous definitions + constant-acceleration equations | blocker |
| P1.4 Intro to Forces | placeholder | `\sum\vec F=m\vec a`, `f_k=\mu_kN` | blocker |
| P1.5 Energy Intuition | placeholder | `K`, `U_g`, `E=K+U` | important |

### Prep-high-school (`mech-prep-hs`, P1.1–P1.16 — mounted)

| Topic | Old formula / issue | Corrected core relation | Severity |
|---|---|---|---|
| P1.1 Measurement, Units, and Vectors | `\sum\vec F=m\vec a` | vector components/magnitude; unit and significant-figure conditions | blocker |
| P1.2 1D Kinematics | `\sum\vec F=m\vec a` | `v=v_0+at`, `x=x_0+v_0t+\frac12at^2`, `v^2=v_0^2+2a\Delta x` | blocker |
| P1.3 2D Motion and Projectiles | `\sum\vec F=m\vec a` | `x=x_0+v_{0x}t`, `y=y_0+v_{0y}t-\frac12gt^2`, velocity components | blocker |
| P1.4 Newton’s Laws | `\sum\vec F=m\vec a` (correct, incomplete) | added equilibrium `\sum\vec F=0`; inertial-frame condition | important |
| P1.5 Applied Forces and Friction | `\sum\vec F=m\vec a` | `f_k=\mu_kN`, `f_s\le\mu_sN`, force balance | blocker |
| P1.6 Circular Motion | formula correct; note was RC | `a_c=v^2/r=\omega^2r`, radial force equation, `v=2\pi r/T` | important |
| P1.7 Intro Gravitation | `\sum\vec F=m\vec a` | `F=Gm_1m_2/r^2`, `g=GM/r^2`, `U=-GMm/r` | blocker |
| P1.8 Work and Kinetic Energy | only `K=\frac12mv^2` | `W_{\mathrm{net}}=\Delta K`, `K`, constant-force work | important |
| P1.9 Potential Energy and Conservation | `\sum\vec F=m\vec a` | `\Delta U=-W_{\mathrm{cons}}`, `U_g=mgh`, `E=K+U=\text{const}` | blocker |
| P1.10 Momentum and Collisions | `\sum\vec F=m\vec a` | `\vec p=m\vec v`, `\vec J=\int\vec F dt=\Delta\vec p`, momentum conservation | blocker |
| P1.11 Intro Rotation | `\sum\vec F=m\vec a` | `\tau=rF\sin\theta`, `\sum\tau=I\alpha`, `v=r\omega` | blocker |
| P1.12 Simple Harmonic Motion | `\sum\vec F=m\vec a` | `a=-\omega^2x`, `x=A\cos(\omega t+\phi)`, `T=2\pi\sqrt{m/k}` | blocker |
| P1.13 Mechanical Waves and Sound | `\sum\vec F=m\vec a` | `v=f\lambda`, `v=\sqrt{T/\mu}` | blocker |
| P1.14 Intro Electrostatics | `\sum\vec F=m\vec a` | Coulomb law, `E=F/q`, `V=kq/r` | blocker |
| P1.15 Basic DC Circuits | only RC charging | `V=IR`, `P=IV=I^2R=V^2/R`, series/parallel, RC charging | important |
| P1.16 Intro Magnetism and Induction | `\sum\vec F=m\vec a` | `\vec F=q\vec v\times\vec B`, `\Phi_B=BA\cos\theta`, `\varepsilon=-d\Phi_B/dt` | blocker |

### Prep-AP1 (`mech-prep-ap1`, P2.1–P2.8 — mounted)

| Topic | Old formula / issue | Corrected core relation | Severity |
|---|---|---|---|
| P2.1 Kinematics Modeling | `\sum\vec F=m\vec a` | derivative definitions and constant-acceleration vector equation | blocker |
| P2.2 Dynamics and Free-Body Diagrams | `\sum\vec F=m\vec a` (correct, incomplete) | component equations and equilibrium; FBD conditions | important |
| P2.3 Circular Motion and Gravitation | only gravity | `a_c=v^2/r`, radial force, `F_g=Gm_1m_2/r^2`, `v_{\mathrm{circ}}=\sqrt{GM/r}` | important |
| P2.4 Energy Systems | `\sum\vec F=m\vec a` | `W_{\mathrm{nc}}=\Delta E`, `E=K+U`, `P=dW/dt` | blocker |
| P2.5 Momentum Systems | `\sum\vec F=m\vec a` | `p=mv`, impulse–momentum, momentum conservation | blocker |
| P2.6 SHM and Waves | `\sum\vec F=m\vec a` | SHM equations, spring period, `v=f\lambda` | blocker |
| P2.7 Basic Circuits | only RC charging | Ohm’s law, equivalent resistance, RC charging | important |
| P2.8 Intro Rotational Dynamics | `\sum\vec F=m\vec a` | torque, `\sum\tau=I\alpha`, angular momentum | blocker |

### Prep-math (`mech-prep-math`, P3.1–P3.5 — mounted)

| Topic | Old formula / issue | Corrected core relation | Severity |
|---|---|---|---|
| P3.1 Vector Components and Dot Product | `\sum\vec F=m\vec a` | `\vec A\cdot\vec B=AB\cos\theta=A_xB_x+A_yB_y`, magnitude, components | blocker |
| P3.2 Derivative as Rate of Change | formula correct; conditions generic | difference-quotient definition, differentiability conditions | nit |
| P3.3 Integral as Accumulation | formula correct; conditions generic | Riemann sum + FTC, signed-area conditions | nit |
| P3.4 Differential Equation Intuition | derivative definition (wrong topic) | `dy/dt=ky \Rightarrow y=y_0e^{kt}` | important |
| P3.5 Small-Angle Approximation | `\sum\vec F=m\vec a` | `\sin\theta\approx\theta`, `\cos\theta\approx1-\theta^2/2`, `\tan\theta\approx\theta`; radians | blocker |

### AP Unit 1 — Kinematics (`mech-u1`)

| Topic | Old formula / issue | Corrected core relation | Severity |
|---|---|---|---|
| 1.1 Kinematics in One Dimension | `\sum\vec F=m\vec a` | instantaneous definitions + constant-acceleration equations | blocker |
| 1.2 Kinematics in Two Dimensions | `\sum\vec F=m\vec a` | vector derivatives + projectile component equations | blocker |

### AP Unit 2 — Force and Translational Dynamics (`mech-u2`)

| Topic | Old formula / issue | Corrected core relation | Severity |
|---|---|---|---|
| 2.1 Center of Mass | `\sum\vec F=m\vec a` | `r_cm=\sum m_ir_i/\sum m_i`, `v_cm`, `\sum F_{\mathrm{ext}}=Ma_{\mathrm{cm}}` | blocker |
| 2.2 Systems | `\sum\vec F=m\vec a` (partial) | system momentum/impulse and center-of-mass theorem | important |
| 2.3 Newton’s First and Second Law | `\sum\vec F=m\vec a` (correct) | added equilibrium form; inertial-frame conditions | nit |
| 2.4 Circular Motion | formula correct; note was RC | `a_c=v^2/r=\omega^2r`, radial force, `v=2\pi r/T` | important |
| 2.5 Newton’s Third Law | `\sum\vec F=m\vec a` | `\vec F_{AB}=-\vec F_{BA}`; different-body condition | blocker |
| 2.6 Gravitation | `\sum\vec F=m\vec a` | Newton’s law, `g=GM/r^2`, gravitational potential energy | blocker |

### AP Unit 3 — Work, Energy, and Power (`mech-u3`)

| Topic | Old formula / issue | Corrected core relation | Severity |
|---|---|---|---|
| 3.1 Work–Energy Theorem | only `K=\frac12mv^2` | `W_{\mathrm{net}}=\Delta K`, `K`, variable-force work | important |
| 3.2 Forces and Potential Energy | `W_{\mathrm{net}}=\Delta K` (wrong topic) | `F_x=-dU/dx`, `\Delta U=-W_{\mathrm{cons}}`, `U_g`, `U_s` | blocker |
| 3.3 Conservation of Energy | `\sum\vec F=m\vec a` | `E=K+U`, `K_i+U_i+W_{\mathrm{nc}}=K_f+U_f` | blocker |
| 3.4 Power | only `K=\frac12mv^2` (wrong topic) | `P=dW/dt`, `P=\vec F\cdot\vec v`, average power | blocker |

### AP Unit 4 — Linear Momentum (`mech-u4`)

| Topic | Old formula / issue | Corrected core relation | Severity |
|---|---|---|---|
| 4.1 Impulse and Momentum | `\sum\vec F=m\vec a` | `p=mv`, `J=\int F dt=\Delta p`, average-force impulse | blocker |
| 4.2 Conservation of Linear Momentum, Collisions | `\sum\vec F=m\vec a` | `\sum p_i=\sum p_f`, 1D collision equation, elastic `K_i=K_f` | blocker |

### AP Unit 5 — Torque and Rotation (`mech-u5`)

| Topic | Old formula / issue | Corrected core relation | Severity |
|---|---|---|---|
| 5.1 Torque and Rotational Statics | `\sum\vec F=m\vec a` | `\tau=rF\sin\theta`, `\sum\tau=0` + `\sum F=0` | blocker |
| 5.2 Rotational Kinematics | `\sum\vec F=m\vec a` | constant-α equations for `ω`, `θ`, `ω^2` | blocker |
| 5.3 Rotational Dynamics and Energy | `\sum\vec F=m\vec a` | `\tau_{\mathrm{net}}=I\alpha`, `K_{\mathrm{rot}}=\frac12I\omega^2`, work by torque | blocker |

### AP Unit 6 — Rotation, Angular Momentum, Orbits (`mech-u6`)

| Topic | Old formula / issue | Corrected core relation | Severity |
|---|---|---|---|
| 6.1 Rotational Kinetic Energy | `K=\frac12mv^2` (translational) | `K_{\mathrm{rot}}=\frac12I\omega^2`, `I=\sum m_ir_i^2`, parallel-axis theorem | blocker |
| 6.2 Angular Momentum | `\sum\vec F=m\vec a` | `L=r\times p=I\omega`, `\tau_{\mathrm{ext}}=dL/dt`, conservation | blocker |
| 6.3 Rolling | `\sum\vec F=m\vec a` | `v_{\mathrm{cm}}=R\omega`, total kinetic energy, `a_{\mathrm{cm}}=R\alpha` | blocker |
| 6.4 Orbits | `\sum\vec F=m\vec a` | `F_g=GMm/r^2`, `v_{\mathrm{circ}}=\sqrt{GM/r}`, `T^2=4\pi^2r^3/GM` | blocker |

### AP Unit 7 — Oscillations (`mech-u7`)

| Topic | Old formula / issue | Corrected core relation | Severity |
|---|---|---|---|
| 7.1 Periodic Motion | `\sum\vec F=m\vec a` | `x=A\cos(\omega t+\phi)`, `T=2\pi/\omega`, `a=-\omega^2x` | blocker |
| 7.2 Pendulums | `\sum\vec F=m\vec a` | `T=2\pi\sqrt{L/g}`, small-angle condition | blocker |
| 7.3 Physical Pendulums | **`\mathrm{pH}=-\log_{10}[\mathrm{H}^+]`** | `T=2\pi\sqrt{I/(mgd)}`, `\omega=\sqrt{mgd/I}`; `I` about pivot | blocker |

## Fixes applied

Files changed (all within `data/mech/`):

- `data/mech/mech-prep-found.js` (5 topics; orphan file, corrected for consistency)
- `data/mech/mech-prep-hs.js` (16 topics)
- `data/mech/mech-prep-ap1.js` (8 topics)
- `data/mech/mech-prep-math.js` (5 topics)
- `data/mech/mech-u1.js` (2 topics)
- `data/mech/mech-u2.js` (6 topics)
- `data/mech/mech-u3.js` (4 topics)
- `data/mech/mech-u4.js` (2 topics)
- `data/mech/mech-u5.js` (3 topics)
- `data/mech/mech-u6.js` (4 topics)
- `data/mech/mech-u7.js` (3 topics)

For each topic I replaced `formulas`, `conditions`, and the stale `solutionLatex` in example 2. I did not rewrite definitions, intuitions, examples 1/3/4, key points, or derivation notes.

## Verification

- `node scripts/check-math-notation.mjs` → `MATH_NOTATION_OK` (stacked fractions).
- KaTeX `renderToString` over all 209 formula/solutionLatex strings → 0 errors.
- Imported `data/mech/index.js` and each edited module → no syntax/import failures; 53 mounted topics load.
- `git diff --stat` before commit: only the 11 mechanics topic files changed.

## Remaining issues / product decisions

1. **Template depth (blocker for self-study).** 42 of 53 mounted mechanics topics still have generic prose and generic examples. Eleven have overlays (batch1: `2.5`, `3.1`; batch2: `2.1`, `2.2`, `2.6`, `3.4`, `6.2`, `6.3`, `6.4`, `7.2`, `7.3`). Batch2 is another session's file and may change; this needs enrichment, not an accuracy patch.
2. **Orphan `mech-prep-found.js`.** Decide whether to mount the five foundational topics (import + graph + routes) or remove the file. Mounting as-is would collide with `mech-prep-hs` P1.1–P1.5 in the flattened `TOPICS` map.
3. **Generic examples remain cross-domain in places.** Example 3/4 and `keyPoints` still use template language; I only removed the clearest cross-domain sentence and the circuit misconception bullet.
4. **Module mapping mismatches (reported, not changed).** A few topic pages mount a simulation that does not match the topic, e.g. `P1.1` (measurement) → `projectile`, `P1.2` (1D kinematics) → `projectile`, `1.1` (1D kinematics) → `projectile`, `P3.3` (integral) → `collision-momentum`, `P3.2` (derivative) → `projectile`. These are figure/module assignments, not formulas; changing them may collide with the physics-figures session.
5. **`mech-prep-math/P3.2` and `P3.3`** already had correct formulas; I only added conditions. Their generic prose is still thin.
6. **Enrichments:** batch1 `mech/mech-u2/2.5` and `mech/mech-u3/3.1` were checked line by line; no factual errors found, so no edit was made. Batch2 mechanics overlays were spot-checked for consistency but not edited (another session owns the file).
