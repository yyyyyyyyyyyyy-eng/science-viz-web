# UI / layout bug sweep — 2026-11-08

Scope: visual, layout, theme and page-behavior bugs in `science-viz-web` (`js/`, `css/`, `index.html` only if needed) while two other sessions were adding exam-figure interactivity. Their files (`data/bio/figures.js`, `data/math/figures.js`, `data/math/figlib.js`, `modules/physics/exam-figures.js`, `data/enrichments/batch2.js`, math practice banks) were not edited.

- Start HEAD observed: `8f75254` (web)
- Scan HEAD: `e560aaf` (other sessions committed physics/bio/math figure work during the sweep)
- Server: `python3 scripts/serve-dev.py . 8766` (not `python3 -m http.server`)
- Full 481 × 3 × 2 sweep: **not run** (per instructions). A 52-route × 2 viewport × 2 theme sample (208 loads) plus supplementary targeted scans were used.

## Coverage

Primary sample (208 loads):

- Home, catalog, paths, credits, past papers, legacy `#/physics/formulas`
- Four subject hubs, four mindmaps, math/mech/em formula pages
- Chapters: bio-u1/u2/u7, math calc-u0/u1/u10, mech-u5/u7, em-u11/u13
- Topics: `#/t/bio/bio-u1/1.4`, `#/t/bio/bio-u2/2.1`, `#/t/bio/bio-u7/7.1`, `#/t/math/calc-u1/1.1`, `#/t/math/calc-u6/6.1`, `#/t/math/calc-u10/10.1`, `#/t/mech/mech-u5/5.3`, `#/t/mech/mech-u7/7.1`, `#/t/em/em-u11/11.6`, `#/t/em/em-u13/13.1`
- Practice: bio-u1/u7, math calc-u1/u10, mech-u5, em-u11
- Modules: enzyme-activity, function-graph, projectile, electric-field
- Past papers: all subjects + `#/pastpapers/bio/2024`
- 1280×800 and 390×844, light + dark for every route

Supplementary scans:

- All 42 chapters + 42 practice units at 1280/390 (168 loads)
- All 182 bio/mech/em topic pages at 1280/390; all 158 math topic pages at 1280/390 after the interactive-figure commits
- All 340 topic pages at 390 for element-level horizontal clipping
- All 35 simulation module pages for select-control labeling
- All 42 practice units at 390 with a live light→dark toggle
- Palette open / search / close at 1280, 390 and 320 in both themes
- Mindmap interaction at 1280/390

Checks: console/page errors, HTTP ≥400, document horizontal overflow, element-level horizontal clipping (ignoring the root `#main` clip but respecting intentional scrollers), clipped text/figcaption overflow, `.katex-error`, broken images, visible hit targets <44×44, header control overlap, duplicate IDs, unlabeled links/buttons/form controls, and runtime theme changes (not just cold-load theme).

## Fixed

### 1. Mobile command palette had a 330px empty area

`css/main.css`

The palette panel stretches to `100dvh` at ≤640px, but the legacy `.palette-list { max-height: min(55vh, 420px) }` still capped the result list. At 390×844 the list stopped at 420px and the hint bar sat at y≈478, leaving the rest of the full-screen panel blank.

Fix: reset `.palette-list { max-height: none; }` in the mobile block. The flex list now fills the panel and the hint is pinned to the bottom; desktop keeps the existing compact 420px list.

### 2. Mobile palette had no touch close control

`js/palette.js`, `css/main.css`

On phones the palette covers the full viewport. The header only showed a non-interactive `Esc` badge, and the backdrop was fully covered by the panel, so a touch user could only leave by choosing a result.

Fix: added a 44px `关闭` button to the palette header, hidden on desktop and shown at ≤640px; hid the `Esc` badge on phones. `closePalette()` restores focus to `#search-trigger` and resets `aria-expanded`.

### 3. Practice stimulus graphs kept stale theme colours

`js/practice.js`

`.stim-graph` canvases were drawn once from live CSS variables. A runtime light↔dark toggle left a light graph block on the dark page (and vice versa), and a viewport resize left the bitmap at the old CSS width.

Fix: store the graph data on the canvas and redraw all visible `.stim-graph` canvases on `themechange` and `resize` (rAF-throttled, cleanup on route dispose). Also redraw after practice filter changes so a card hidden during a theme change catches up when shown.

### 4. Practice SVG diagrams froze the light-theme text colour

`js/diagrams.js`

`svgRoot()` wrote `color:#131311` inline at render time. After a live switch to dark theme, diagram strokes and labels stayed near-black on the dark page.

Fix: `color: inherit`; the host `.stim-svg` already sets `color: var(--text)`, so diagrams now follow the theme.

### 5. Shared select control had no accessible label

`js/ui.js`

`select()` created a visual label but never associated it with the `<select>`, so module controls had no accessible name.

Fix: generate a unique id and set the label's `for` attribute. Verified all 35 module pages: every control-panel select resolves its label and clicking the label focuses the select.

## Self-check

- Re-read all diffs; `node --check` passes for `js/palette.js`, `js/practice.js`, `js/ui.js`, `js/diagrams.js`.
- Re-ran the 208-load sample at 1280/390 light/dark: **0 console errors, 0 page errors, 0 HTTP errors, 0 `.katex-error`, 0 horizontal page overflow**; the only remaining reports are the outside-scope caption clips below.
- Re-ran all 42 chapters + 42 practice units at 1280/390: 0 issues.
- Re-ran all 158 math topic pages at 1280/390 after the interactive-figure commits: 0 layout/console/KaTeX issues.
- Runtime theme test on all 42 practice units at 390: every graph pixel matches `--canvas-plot` and every diagram SVG colour matches its host after light→dark; filter hide→toggle→show is also correct.
- Palette: 1280/390/320 × light/dark; mobile close 50×44, focus restored, list fills the panel, 0 overflow. Desktop list remains 420px.
- Selects: all 35 module pages labeled.
- Mindmap: left-drag changed the view (rotate), right-drag changed the view (pan), synthetic two-finger pointer pan changed the view, desktop hint `拖拽旋转 · 右键拖平移 · 滚轮缩放 · 点击查看`, mobile hint `拖拽旋转 · 双指拖平移 · 双指缩放 · 点按查看`, context menu suppressed. Interaction unchanged.
- Screenshots: `screenshots/bug-sweep-ui/` (home, hub, topics, figures, practice, formulas, map, catalog, module, palette before/after, practice graph/diagram before/after, light/dark and 1280/390).

## Leftovers outside this session’s scope

### Exam figure caption clipping (owner: figure sessions)

`.exam-figure-cap` uses `overflow-x: auto`, which computes `overflow-y: auto`; caption content is 4–7px taller than the box, so descenders/denominators can clip. At 390px this was found on 5/89 bio topic pages and on at least one caption of 172/251 mech+em+math topic pages, plus `#/m/projectile` and `#/m/electric-field`.

Examples: `#/t/bio/bio-prep-hs/P2.9`, `#/t/bio/bio-u3/3.1`, `#/t/bio/bio-u5/5.4`, `#/t/math/calc-u6/6.1`, `#/t/mech/mech-u5/5.3`, `#/t/mech/mech-u7/7.1`, `#/t/em/em-u11/11.6`, `#/t/em/em-u13/13.1`.

Not changed: `modules/physics/exam-figures.js`, `data/math/figures.js`, `data/math/figlib.js` are owned by the interactive-figure sessions, and the shared `.exam-figures` / `.exam-figure` / `.exam-figure-box` / `.exam-figure-cap` layout rules were explicitly off-limits. Suggested owner-side fix: a caption descent strut/phantom (as already used on some physics captions) or `overflow-y: visible` once their interactive work settles.

### Duplicate SVG marker IDs (low risk)

`data/math/figlib.js` emits `<marker id="ah">` once per figure; `js/diagrams.js` uses fixed `fbd`/`pul`/`pw`/`fw` ids. Multi-figure pages therefore contain duplicate IDs (e.g. `fbd` ×11 on `#/mech/practice/mech-u5`). Markers are visually identical today, so no visible break was observed, but IDs should be unique per instance. `js/diagrams.js` was touched only for the theme colour fix; marker-id refactoring was left alone while the figure sessions are active.

### Small attribution link (low risk)

`#/m/electric-field` has a 256×15px Wikimedia attribution link inside the figure media, below the 44px touch-target guideline. Owner: `modules/physics/exam-figures.js`.

### Coordination note

An intermediate uncommitted math-figure revision briefly threw `Cannot access 'D2R' before initialization` and blanked math topic/map pages. The owning session fixed it before the final scans; final math checks are clean. No out-of-scope files were modified by this session.
