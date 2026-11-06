# UI / interaction redesign — 2026-11-06

Scope: global chrome, page layouts, topic reading chrome, practice, formulas, and mindmap presentation/interaction. No content, figure-library, registry, or data edits.

## Tour findings (baseline)

- Desktop header showed the mobile `菜单` button at 1280px (`.hit-target` overrode `display:none`).
- Header search disappeared on topic/map/practice, so search behaviour depended on the route; the palette only searched modules/pages, not knowledge points.
- Mobile drawer links rendered as an inline row; at 390px search wrapped to a second row. The drawer was laid out inside the backdrop-filtered header, so it could not become a full-height panel.
- Start page used a generic three-step strip and boxed entry rows (cards).
- Subject page mixed prep and AP units in one grid; unit metadata dominated the rows.
- Topic pages were a single dense column with a tiny breadcrumb, no outline, no prev/next, and no practice/map/formula actions until the bottom.
- Practice filters had no active state or counts; set filtering could leave an empty stimulus container; checking was instant and ambiguous; no question movement.
- Formula TOC anchors used `#group-…`, which collides with the hash router (clicking sent the app to the start page).
- Mindmap: prep stages spread evenly across the left half while the 12-unit calculus cluster was compressed on the right; unit labels near `复合/隐函数/反函数` collided; left-drag rotated instead of panning; search opened a panel but did not move the camera to the hit.
- A late “polish” CSS block re-introduced borders/background boxes on rows and cards.

## What changed

### Chrome and navigation
- New 60px sticky header, neutral editorial type scale, 44px nav/menu/theme/search targets, subject-coloured active underlines.
- One search trigger on every route opens the same command palette. Palette indexes pages, chapters, knowledge points (lazy-loaded from `data/*/index.js`), and modules; `Ctrl/Cmd+K`, `/`, Esc, arrows and Enter work; background is inert while open; focus is restored.
- Mega menus are click/hover/focus driven, clamp inside the viewport, close on outside click/Esc, and expose a direct subject/chapter index. Touch never depends on hover.
- Mobile drawer is now a full-height fixed panel outside the header; scroll lock only while open; Esc/close/link click restore the page and focus correctly.
- Added the footer navigation and rewrote `404.html` in the same visual language (it still redirects immediately).

### Pages
- Start: editorial hero, last-experiment row, four-subject index with real unit/topic/module counts, secondary links.
- Subject: prep vs AP sections, topic-level progress, clearer start/map/formula/past-paper actions.
- Chapter: topic index with status, experiment list, prev/next unit, practice action.
- Catalog: three-column balanced index (2 → 1 at narrower widths), no card chrome.
- Paths/past papers/credits: shared breadcrumbs, hero, filter chip states, paper rows instead of boxed cards.
- Legacy module shell: shared breadcrumb, topic-coloured kicker, sidebar/tree, canvas and controls preserved.

### Topic reading
- Two-column reading layout: sticky unit/outline rail + prose column on desktop; compact “本页目录” details on mobile.
- Added prev/next knowledge point, unit practice/map/formula actions, section anchors (as buttons, no router hash collision), and an active outline state.
- KaTeX and both figure mounts (`renderFigures`, `mountTopicExamFigures`) still target the article content; figures/captions were left intact.

### Practice
- Sticky question index with completion state and keyboard/tap-accessible numbers.
- Filter chips with active state, visible count, and correct shared-set hiding.
- MCQ now has select → check → feedback (instead of instantly marking choices), arrow-key navigation, completion state.
- Numeric/symbolic answers submit with Enter/check, feedback is announced, and correct answers lock consistently.
- “答案与解析” and per-card previous/next movement are retained; mobile shows previous/next at the end of each card.

### Formulas
- Sticky group rail on desktop; horizontally scrollable tab row on mobile.
- Group counts, numbered headings, scan-friendly equation rows, expanded symbols/conditions/derivation.
- All in-page jumps are buttons, so `#/math/formulas`, `#/mech/formulas`, `#/em/formulas` and legacy `#/physics/formulas` no longer break the hash router.

### Mindmap
- Content-proportional layout: prep stages form a compact 1–2 column block; AP units sit in a deterministic grid (6×2 for calculus BC, 4×2 for biology AP). No new relation data.
- Deterministic topic clouds; camera fit includes label padding; labels are measured once and collision-placed with stage priority; unit labels hide only below 720px so stage names remain readable on phones.
- Stage/unit tinting still resolves through `unitByChapter` and `nodeBaseColor`; midpoint handles remain radius 0.085 with the generous invisible hit area.
- Left-drag pans (Shift/Alt-drag rotates), wheel/pinch/buttons zoom, “适应” resets, search Enter flies to the hit, node hits take priority over relation dots, and the panel/close/Esc flow works on touch.
- Map scene disposes geometries/materials and cancels its animation frame on route change; theme changes redraw background/edges.

## Self-check fixes found during verification

- Desktop `菜单` leak: root cause was specificity from `button.hit-target`; replaced the default with a zero-specificity `:where()` rule so class-level `display` wins.
- Mobile drawer clipped: root cause was the header’s `backdrop-filter` making it the containing block for a fixed child; moved `#mobile-nav` outside the header on the base height, then removed the legacy max-height.
- Formula page intrinsic width on phones: long KaTeX expanded the grid track; changed mobile grids to `minmax(0, 1fr)` and added `min-width: 0` to formula rows/groups. This also prevents the document from silently clipping wide content.
- Formula TOC on phones squeezed labels; buttons now keep intrinsic width and scroll horizontally.
- Practice set filtering could leave an empty group; set wrappers now hide when every nested question is filtered out.
- `markVisited` no longer overwrites the “continue last experiment” slot with `topic:` / `practice:` keys.
- Adjusted small-text tokens and subject accents for AA contrast in both themes (`--text-dim`, light bio/physics/warn).
- Tightened `entry-row`/`topic-row`/`module-row` resets so the no-card rule holds and row alignment matches the page grid.

## Verification

- Targeted Playwright smoke: 16 routes × light/dark on desktop (32 checks) + 8 mobile routes, `#/m/...`, legacy `#/physics/formulas` and `#/bio/practice/...`; **0 console/page errors**, no horizontal overflow, all main headings present, KaTeX and topic figures mounted, practice banks load 52–68 questions.
- Maps: all four subjects × light/dark at 1280px plus math/bio at 360/390/768px; **0 label overlaps, 0 labels outside the stage**; 16/11/12/8 stage+unit labels at desktop; 5 stage labels at phone width.
- Hit targets: all visible `a/button/summary/input/select` across 13 representative routes at 1280 and 390 are ≥44×44 and carry `hit-target` where relevant.
- Functional checks: mega menu, palette search → topic navigation, formula TOC jump (hash stays), topic outline jump (hash stays), practice filter/count, MCQ feedback/completion persistence, map fly-to/search/pan/zoom/panel/tap, mobile drawer open/close/scroll lock.
- Contrast and visual checks: tokens adjusted; screenshots reviewed in both themes.
- Screenshots: `screenshots/ui-redesign/` (home, subject, topic, topic figures, practice, practice answer, formulas, math/bio maps, catalog, palette, mobile header/drawer/topic/practice/map; light and dark).

## Remaining

- The required targeted pass was used instead of the full 481-route × 3 viewport × 2 theme sweep.
- The mind map is still a wide curriculum map on a 390px screen, so the fitted overview letterboxes vertically; pinch/zoom and search remain available, and only stage labels are shown there.
- Other sessions’ pending content/figure edits were left untouched.
