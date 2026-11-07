# Mindmap and simulation UX review — 2026-11-07

Scope: the four knowledge maps (bio, math, mech, em) in light and dark, and the standalone simulation panels in `modules/physics/`, `modules/mech/`, and `modules/em/`. This is a report-only review: no application file, mindmap interaction, visual token, or content was changed.

Reviewed against the working tree around `8f75254`. The exam-figure galleries were being edited by another session during this pass; their content and interactivity were not judged. The gallery's effect on simulation control placement is reported because it changes where the simulation controls land on narrow screens.

## Method

- Served with `python3 scripts/serve-dev.py . 8772`.
- Playwright Chromium (`chromium-1248`), 1440×900 desktop, 390×844 mobile, plus 1280×800, 1024×768, 820×1180, and 768×1024 for map label checks.
- Mindmaps: 4 subjects × light/dark screenshots, plus mobile bio and interaction states.
- Simulations: `projectile`, `electric-field`, `shm`, `newton-incline`, `work-energy`, `collision-momentum`, `rc-circuit`, `gauss-law`; desktop light/dark and four mobile full-page captures.
- Every run collected console and page errors; all runs ended with **0 console errors and 0 page errors**.

## Mindmap control verification

Tested on `#/bio/map` at 1440×900; the same interaction code is shared by all four subjects.

| Gesture | Observed result | Interpretation |
|---|---|---|
| Left-drag 140 px right / 20 px down | Label displacements had mixed signs and magnitudes (e.g. `预备化学` +200 px, `AP 生物` −21 px; spread 69.4 px). | Rotation, not translation. |
| Right-drag 140 px right / 60 px down | Label positions translated with the pointer (mean +206.5 px x, +37 px spread). | Pan. |
| Two-finger drag, synthetic pointer events | All 11 labels moved together: dx 100.4–106.0 px, dy 41.9–44.2 px. | Two-finger pan. |
| Wheel `deltaY = −300` | All labels moved away from the canvas centre (distance ratios ≈1.38–1.79). | Zoom in. |
| Two-finger pinch, synthetic pointer events | Label geometry changed and spread; no errors. | Pinch zoom. |

- Hint text matches actual behaviour: desktop `拖拽旋转 · 右键拖平移 · 滚轮缩放 · 点击查看`; touch `拖拽旋转 · 双指拖平移 · 双指缩放 · 点按查看`.
- Toolbar controls are 44 px high: zoom − / + (44×44), 适应 (47×44), 多选 (64×44), search (220×44). Hidden 清除 is 0×0 only while hidden.
- Search + Enter flies to the first hit and opens its detail panel (`细胞` → `P2.3 细胞结构`).
- Midpoint relation panels open for all relation kinds tested: 先修, 应用于, 联结, 同概念, 考点联结. The panel exposes 为何连接 / 共享概念 / 联结例 and two 打开 links.
- At 1440, 1280, and 1024 px there were no label overlaps and no labels outside the stage for any subject.

## Findings

| # | Severity | Area | Finding |
|---|---|---|---|
| 1 | High | `work-energy` simulation | At the bottom of the incline the simulation zeroes velocity, so U, K, and E all collapse to 0 J while `E₀=49.0 J` is still displayed. |
| 2 | High | Mobile/tablet simulation layout | On one-column layouts the control panel sits after the entire exam-figure gallery; at 390 px the controls begin ~1,876 px below the simulation canvas. |
| 3 | Medium | `gauss-law` simulation | The E(r) plot is effectively invisible: a fixed 0.05 y-range is ~100× larger than the plotted values, and the 4-decimal readout collapses most slider settings to the same `0.0001`. |
| 4 | Medium | Simple mech/em modules | Eleven modules return an empty `destroy()` while their `requestAnimationFrame` loop and ResizeObserver keep running after navigation. |
| 5 | Low | Mobile/tablet mindmap | Unit labels are all suppressed below 720 px; between 720 and 900 px one to three unit labels can disappear when collision placement finds no slot. |
| 6 | Low | `projectile` simulation | The 阻力系数 k slider remains active when 空气阻力 is unchecked; k has no effect but gives no disabled-state cue. |
| 7 | Low | Mindmap relation panel | The hover tooltip stays visible over the graph after a midpoint click opens the relation panel. |
| 8 | Low | `collision-momentum` simulation | The module goal says `读动量条`, but the simulation only shows a text momentum readout; there is no momentum bar. |

### 1. High — `work-energy` loses all energy at the end of the track

Path: `modules/mech/work-energy.js`.

Evidence (fresh page, light theme):

- At ~120 ms: `U=47.9 J K=1.0 J | E=48.9 J W_f=0.0 J | E+W_f≈48.9 (E₀=49.0)`.
- After ~2.6 s: `U=0.0 J K=0.0 J | E=0.0 J W_f=0.0 J | E+W_f≈0.0 (E₀=49.0)`.

The last state is physically wrong: with `μ=0`, the initial 49 J should finish as kinetic energy at the bottom. Code inspection confirms the cause: `if (s > track) { s = track; v = 0; }` sets velocity to zero at the same moment `height` reaches zero. The K/U bars therefore empty out and the module contradicts its own learning goal `读 K/U 条形图`.

Screenshots: `screenshots/ux-explore/sim-work-energy-start-light.png`, `sim-work-energy-end-light.png` (also `sim-work-energy-light.png`, `sim-work-energy-dark.png`).

Recommended fix: clamp `s` to `track` without destroying `v` (or compute the final K from `E₀ − W_f`), then stop the block while keeping the final energy visible. Add an explicit restart/pause control so the exchange can be inspected after the block reaches the bottom. This file was not edited by this session.

### 2. High — mobile simulation controls are separated from the canvas by the exam-figure gallery

At 390×844 for `#/m/projectile`:

- `.canvas-wrap`: top 859 px, bottom 1,298 px.
- `#control-panel`: top 3,174 px.
- Gap from canvas bottom to controls: 1,876 px; full page height 4,209 px.

The same order was measured for `electric-field` (canvas top 774, controls top 3,289), `shm` (canvas 859, controls 4,513), and `rc-circuit` (canvas 756, controls 4,545). `.control-panel` is a sibling after `.viz-panel`; `mountExamFigures()` appends the gallery inside `.viz-panel` after the canvas/readouts. On desktop the two-column grid keeps controls beside the canvas, but on the one-column mobile/tablet layout the user must scroll past the entire gallery to reach a slider and then scroll back to see its effect. This is a simulation layout issue; the galleries' content was not reviewed.

Screenshots: `screenshots/ux-explore/sim-projectile-mobile-light.png`, `sim-electric-field-mobile-light.png`, `sim-shm-mobile-light.png`, `sim-rc-circuit-mobile-light.png`.

Recommended fix (owned by the layout/gallery work): on narrow screens place the control panel immediately after the canvas and readouts, before the exam figures (move the gallery outside the module layout, or reorder the two blocks). If moving blocks is too large, make the control panel a sticky/collapsible section that remains adjacent to the canvas. Do not change the gallery content to work around this.

### 3. Medium — `gauss-law` E(r) plot and readout cannot show the field variation

Path: `modules/em/gauss-law.js`.

- The graph maps `E` with `Math.min(e, 0.05) / 0.05 * ph`. Typical values are ~10⁻⁴, so the curve sits on the bottom axis in both themes; the plot looks empty.
- The readout uses 4 decimals. Moving 高斯面 r through 20, 60, 120, 180 produced `0.0001`, `0.0002`, `0.0001`, `0.0001`, so several physically different states look identical.
- The solid charged-sphere outline uses `T.border`, which is nearly invisible against the dark canvas; only the dashed Gaussian surface stands out.

Screenshots: `screenshots/ux-explore/sim-gauss-law-light.png`, `sim-gauss-law-dark.png`, `sim-gauss-law-inside-light.png`.

Recommended fix: auto-scale the plot to the maximum E sampled over the current plot range (or use a log axis with a clear label), show 3 significant digits or scientific notation in the readout, and draw the charged sphere with a stronger token than `--border`. Keep the dashed Gaussian surface visually distinct.

### 4. Medium — simple mech/em loops and observers survive navigation

Affected files: `modules/mech/newton-incline.js`, `work-energy.js`, `collision-momentum.js`, `gravity-orbit.js`, `rigid-rotation.js`, and `modules/em/gauss-law.js`, `rc-circuit.js`, `capacitor.js`, `electric-potential.js`, `charged-particle-B.js`, `faraday-induction.js`.

Each runs `const loop = () => { draw(); requestAnimationFrame(loop); }` and returns `{ destroy() {} }`; `observeSize(wrap, draw)` is also called without keeping its unsubscribe function. A probe that patched `CanvasRenderingContext2D.fillRect` counted **126 draws into a detached canvas in 1 s** after navigating from `#/m/newton-incline` to `#/m/projectile`. Browsing several simulations therefore accumulates animation loops and layout reads, even though the page has already been disposed.

Recommended fix: retain the rAF handle and the `observeSize()` return value, and return a real cleanup function that cancels the frame and disconnects the observer. A shared helper would prevent this recurring in new modules.

### 5. Low — mobile/tablet mindmaps hide unit labels

- At 390×844 (`#/bio/map`) only the 3 stage labels are visible of 11 stage+unit labels; all 8 unit labels are suppressed by the `compact` rule.
- At 768×1024, `#/bio/map` hides `基因表达与调控`; `#/math/map` hides `微分` and `微分方程`. At 820 px the math map hides one unit label.
- At 1024 px and above, all labels were placed with no overlaps or clipping.

The stage-only phone view preserves the clustered macaron look, but the pastel clusters become unidentifiable without tapping each one.

Screenshot: `screenshots/ux-explore/mindmap-bio-mobile-light.png`.

Recommended fix: keep stage labels as the primary tier, but let a unit label appear for the hovered/tapped cluster or once the user zooms past a threshold. A short unit abbreviation is an alternative. This would be a label-reveal change, not a change to rotate/pan/zoom controls.

### 6. Low — projectile `k` slider looks active when air resistance is off

Path: `modules/physics/projectile.js`.

With 空气阻力 unchecked, firing with `k=0.02` and `k=0.60` produced identical readouts at t=0.90 s (`x=15.91`, `y=11.92`, `|v|=19.77`). The slider still accepts input and shows a value, so the control appears broken rather than conditional.

Recommended fix: disable/dim the k slider while 空气阻力 is off, with a one-line note such as `开启空气阻力后生效`, or move k beside the checkbox.

### 7. Low — stale map tooltip remains over an open relation panel

After hovering a midpoint handle and clicking it, the tooltip is still visible (`hidden=false`, text `1.1 水与生命 — 1.2 元素与大分子`) while the relation panel is open (`1.1 → 1.2（先修）`). It floats over the graph and can overlap the panel on a narrow viewport.

Screenshot: `screenshots/ux-explore/mindmap-bio-relation-panel.png`.

Recommended fix: hide the tooltip and clear the hover highlight in `openRelationPanel()` / `openDetail()` (and when the multi-select panel opens). No control or layout change is needed.

### 8. Low — `collision-momentum` goal promises a momentum bar that does not exist

The registry goal is `读动量条`, but `modules/mech/collision-momentum.js` only renders a text readout (`p=6.00`) and two blocks. There is no bar or per-body momentum graphic, so the stated learning action cannot be performed.

Screenshot: `screenshots/ux-explore/sim-collision-momentum-light.png`.

Recommended fix: either add compact `p₁`/`p₂`/`p_total` bars consistent with the work-energy bars, or change the goal to `读动量读数`. This is a content/registry decision; no change was made.

## What worked

- Mindmap controls and hints match the required vocabulary: left-drag rotates, right-drag/two-finger pans, wheel/pinch zooms; tinted spheres, gray edges, midpoint dots, and the clustered layout are unchanged.
- Relation panel content is usable for 先修 / 应用于 / 联结 / 同概念 / 考点联结; links are ≥48 px high and the close button is 44 px.
- Simulation sliders, electric-charge dragging, projectile firing, RC charge/discharge switching, and the generated reset control all worked. No horizontal overflow at 390, 768, 1024, 1280, or 1440 px.
- No sub-44 px actionable control was found. The 22 px checkbox itself sits inside a 44 px `.checkbox-row` label, so the effective target is compliant.
- Light/dark canvas colours read correctly except for the `gauss-law` sphere outline noted above.

## Screenshots

Required mindmaps (4 subjects × light/dark):

- `screenshots/ux-explore/mindmap-bio-light.png`, `mindmap-bio-dark.png`
- `screenshots/ux-explore/mindmap-math-light.png`, `mindmap-math-dark.png`
- `screenshots/ux-explore/mindmap-mech-light.png`, `mindmap-mech-dark.png`
- `screenshots/ux-explore/mindmap-em-light.png`, `mindmap-em-dark.png`

Mindmap interaction and panel evidence:

- `mindmap-bio-mobile-light.png`
- `mindmap-bio-after-left-drag.png`, `mindmap-bio-after-right-drag.png`, `mindmap-bio-after-wheel-zoom.png`, `mindmap-bio-after-two-finger-pan.png`, `mindmap-bio-after-pinch.png`
- `mindmap-bio-relation-panel.png`, `mindmap-bio-search-result.png`
- `mindmap-math-relation-same-concept.png`, `mindmap-math-relation-exam-link.png`

Simulations (desktop light/dark; mobile where relevant):

- All eight: `sim-{projectile,electric-field,shm,newton-incline,work-energy,collision-momentum,rc-circuit,gauss-law}-{light,dark}.png`
- Evidence: `sim-projectile-running-light.png`, `sim-electric-field-drag-light.png`, `sim-work-energy-start-light.png`, `sim-work-energy-end-light.png`, `sim-gauss-law-inside-light.png`, `sim-rc-circuit-discharge-light.png`
- Mobile: `sim-{projectile,electric-field,shm,rc-circuit}-mobile-light.png`

## Self-check

- Re-opened the worst issues in a fresh browser pass:
  - `work-energy` after 2.6 s still reports `U=0.0 J K=0.0 J E=0.0 J (E₀=49.0)`.
  - `gauss-law` still reports `0.0001` / `0.0002` across r=20/60/120/180.
  - Mobile `projectile`: canvas bottom 1,298 px, controls top 3,174 px, gap 1,876 px.
  - Bio map midpoint click still leaves the tooltip visible over the open relation panel.
- Re-read this report against the captured screenshots and measured values.
- No application file was edited; only `audit/ux-explore.md` and `screenshots/ux-explore/` are new.
