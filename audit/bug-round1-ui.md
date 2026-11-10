# Bug audit round 1 — UI / navigation / practice / mind map / formulas

- Date: 2026-11-10
- Repo: `science-viz-web` at `af68b0f` (audit-only; no product files edited)
- Server: `python3 scripts/serve-dev.py . 8704`
- Scope: site chrome, router, nav, palette/search, theme switching, progress tracking, practice flow, mind map, formula pages, home/subject/chapter/catalog pages, keyboard/touch behaviour, accessibility, overflow. Light/dark at 1280/768/390.
- Other audit sessions ran in parallel; out-of-scope items are listed at the end.

## Top 10

| # | ID | Severity | Route | What is wrong |
|---|----|----------|-------|----------------|
| 1 | UI-01 | P0 | `#/pastpapers` (entries `math-2023-q4`, `mech-2024-s1-q3`) | Two internal topic links point at nonexistent topic codes (`calc-u5/3`, `mech-u5/3`); clicking lands on “未找到该知识点”. |
| 2 | UI-02 | P1 | `#/math/practice/calc-u2`, `calc-u9`, `calc-u8` | Symbolic checker rejects mathematically correct answers (`3x^2*e^x+x^3*e^x`, `-cot(t)`, `(1+4*x^2)^(1/2)`). |
| 3 | UI-03 | P1 | `#/mech/formulas`, `#/em/formulas`, `#/physics/formulas` | All three routes render the same 8-group/33-row combined Physics C sheet; the EM page starts with constants/mechanics groups and the mechanics page contains E&M groups. |
| 4 | UI-04 | P1 | `#/mech/formulas` → row `ε₀` (`c-e0`) | Displayed example answer is `C=ε₀ A/d`, a slash fraction, instead of `\dfrac`. |
| 5 | UI-05 | P2 | Global overlays (Ctrl/Cmd+K, mobile 菜单) | Palette and mobile drawer do not trap focus; drawer Tab reaches footer links while the drawer is still open. |
| 6 | UI-06 | P2 | `#/` command palette | Group counts exceed the rendered list (query `a`: 章节 36 but 12 items; query `1`: 交互实验 23 but 20 items) with no “more” indication. |
| 7 | UI-07 | P2 | Mobile menu after route change | Drawer open state is captured only at startup; reopening the drawer on another subject leaves the previous subject expanded and does not expand the current one. |
| 8 | UI-08 | P2 | Mobile header | `#nav-mobile-toggle` keeps `aria-label="打开菜单"` when the drawer is open (`aria-expanded=true`). |
| 9 | UI-09 | P2 | Practice stimulus graphs (`#/bio/practice/bio-u1` etc.) | Graph renderer ignores `yLabel` from the bank, canvas has no accessible name, and the x-axis label uses undefined `--muted`. |
| 10 | UI-10 | P2 | `#/` at 390px | Home always shows “Ctrl / Cmd + K 搜索知识点与模块” on phones. |

## Findings

| ID | Severity | Route | File:line | What is wrong | Suggested fix |
|----|----------|-------|-----------|----------------|----------------|
| UI-01 | P0 | `#/pastpapers`, entries `math-2023-q4` and `mech-2024-s1-q3` | `data/shared/pastpapers.js:801`, `:811`, `:825`, `:6433`, `:6443`, `:6457` | The “原创解题提纲” links and the bottom “知识点” links use `#/t/math/calc-u5/3` and `#/t/mech/mech-u5/3`. `calc-u5` and `mech-u5` only contain codes `5.1`–`5.12` / `5.1`–`5.3`; both URLs render “未找到该知识点”. The visible labels are also the invalid strings `calc-u5:3` / `mech-u5:3`. | Replace `3` with `5.3` in `topics`, `solutionOutline.steps[].links`, and `solutionOutline.topicLinks` for both entries; add an internal link check over rendered past-paper topic links. |
| UI-02 | P1 | `#/math/practice/calc-u2` card q011; `#/math/practice/calc-u9` card q008; `#/math/practice/calc-u8` card q003 | `js/practice.js:22-63` (sampling at `:35-60`); expected values at `data/math/practice/calc-u2.js:125`, `data/math/practice/calc-u9.js:267`, `data/math/practice/calc-u8.js:95` | `checkSymbolic` adds every `SymbolNode` to the random-variable scope, including function names (`sqrt`, `cos`, `cot`). The random scope then shadows those functions, so equivalent answers throw during numeric sampling and are reported as “与标准形式不等价”. Ambiguous implicit multiplication makes it worse: `e^x(3x^2+x^3)` parses as a call to `x`, and `-cot t` parses as the symbol `cot` times `t`. Verified: `3x^2*e^x+x^3*e^x` is rejected on q011, `-cot(t)` is rejected on q008, and `(1+4*x^2)^(1/2)` is rejected on q003 even though all are correct. | Normalize expected strings to explicit mathjs syntax (`e^x*(...)`, `-cot(t)`), and exclude function names/`FunctionNode` names from the random-variable scope (or use a proper CAS equivalence check). Add regression tests for these three cards plus `exp(...)`/`sqrt(...)` alternatives. |
| UI-03 | P1 | `#/mech/formulas`, `#/em/formulas`, `#/physics/formulas` | `js/app.js:217-243`; `data/physics/formulas.js:2-92` | `showFormulas` ignores `kind` for physics and always passes the complete `PHYSICS_FORMULA_GROUPS`. All three routes have identical content: 8 groups / 33 rows, with constants + four mechanics groups followed by three E&M groups. `#/em/formulas` therefore starts with constants/mechanics content and `#/mech/formulas` contains E&M; document titles and palette labels (“力学公式表” / “电磁公式表”) imply route-specific sheets. `#/physics/formulas` is a third duplicate. | Either filter groups by prefix (`mech-` / `em-`) for the two routes, or intentionally use one combined “AP Physics C 公式表” and make `#/mech/formulas` and `#/em/formulas` redirect to the same canonical route with matching labels. |
| UI-04 | P1 | `#/mech/formulas` → constants row `c-e0` | `data/physics/formulas.js:11` | Expanded example shows `答：C=ε₀ A/d` (screenshot). The project rule requires displayed fractions to use `\dfrac`; this is an algebraic slash fraction, not a unit. | Change the answer to `C=\dfrac{\varepsilon_0 A}{d}` (or `C=\varepsilon_0\dfrac{A}{d}`) and check the data with `scripts/check-math-notation.mjs`. |
| UI-05 | P2 | Global: `Ctrl/Cmd+K` palette and mobile `菜单` drawer | `js/palette.js:271-309`; `js/nav.js:18-24`, `js/nav.js:26-42` | Palette sets `aria-modal="true"` but has no focus trap; desktop Tab from the active result goes to `BODY`. Drawer only sets `#main` inert, so Tab from the last drawer link reaches the footer links (`索引`, `路径`, `历年真题`, `来源与许可`) while the drawer is open. These are modal overlays and focus should stay inside. | Trap Tab/Shift+Tab in both overlays, mark the drawer as a dialog with an accessible name, inert the footer as well (or inert `#app` and move the overlay outside it), and restore focus on close. |
| UI-06 | P2 | `#/` → search palette | `js/palette.js:215-218`, `:221-239` | Chapter group uses the full `chapterHits.length` as its badge but renders only `slice(0,12)`; module group uses the full total but stops at 20. Query `a` displays “章节 36” with 12 children; query `1` displays “交互实验 23” with 20. There is no “more results” hint, so the count is misleading. | Use the number actually rendered (`Math.min(total, limit)`) or keep the total but add a “显示更多/还有 N 条” affordance. Prefer rendering all matches in the scrollable list. |
| UI-07 | P2 | Mobile menu after navigating between subjects | `js/nav.js:171-260` (especially `:206-211`) | `buildMobileNav()` snapshots `const here = location.hash` once at startup and never refreshes it. After navigating from `#/mech/mech-u1` to bio and reopening the drawer, 力学 remains `open` (and bio is not auto-opened unless the user opened it). Verified `[生物 true, 力学 true]` after reopening on bio. | Set `details.open` from the current hash whenever the drawer opens (or rebuild/reconcile the drawer on route changes), and close all other subjects. |
| UI-08 | P2 | 390px header, when mobile menu open | `js/nav.js:26-42` | `setMobile()` updates `aria-expanded` but never updates `aria-label`. Both closed and open states report `aria-label="打开菜单"`; a screen reader announces the wrong action when the drawer is open. | Set the label to `关闭菜单` when `open` is true and `打开菜单` when closed; keep `aria-expanded` in sync. |
| UI-09 | P2 | Practice graphs, e.g. `#/bio/practice/bio-u1`, `#/bio/practice/bio-u3` | `js/practice.js:110-177`, especially `:116` and `:173-177`; data e.g. `data/bio/practice/bio-u1.js:74` | `drawGraph()` draws `g.xLabel` but never reads `g.yLabel`, although banks provide `yLabel` (e.g. `"v"`). `renderStimulus()` creates `<canvas class="stim-graph">` with no `role`/`aria-label`; all eight graphs on bio-u1 have `aria-label=null`. The x-axis label uses `style.getPropertyValue('--muted')`, but the CSS token is `--text-muted`, so it falls back to `#888` in both themes. | Draw a rotated y-axis label, add `role="img"` plus an accessible description derived from the graph data, and use `--text-muted` (or a token that exists) for the label color. |
| UI-10 | P2 | `#/` at 390px | `js/pages.js:118` | `.home-hint` always says “Ctrl / Cmd + K 搜索知识点与模块”, including on phones with no keyboard. It is visible at the bottom of the 390px home page. | Hide the keyboard hint at ≤640px/touch devices, or change it to “点按右上角搜索”. |
| UI-11 | P2 | `#/pastpapers` filters | `js/pages.js:434-558` (filter handlers at `:537-554`) | Course/year filter clicks only update local variables and never update the URL. After loading `#/pastpapers/bio/2024` and selecting 微积分 + 2026, the URL remains `#/pastpapers/bio/2024`; reload or sharing the URL restores the old filters. | Update the hash (e.g. `navigate('#/pastpapers/${curSub || ''}/${curYear || ''}')`) when filters change, and keep the current route parameters in sync. |
| UI-12 | P2 | `#/mech/map` (all maps) | `js/mindmap.js:122` (panel); `js/mindmap.js:813-875` (`openDetail`) | `#map-panel` is an `<aside>` with no `role` or accessible name. After pressing Enter in the search box, the panel opens but focus remains on `.map-search`; screen-reader/keyboard users are not told a detail panel opened and focus is not moved to it. | Give the panel `role="dialog"`/`aria-labelledby`, move focus to its close button or heading when it opens, and return focus to the search input or map on close. |
| UI-13 | P2 | `#/pastpapers` (topic rows and solution outlines) | `js/pages.js:503-521` | Topic links render the raw internal id as text: `bio-u4:4.1`, `bio-u1:1.4`, `calc-u5:5.1`. The solution-outline links also show `calc-u5:5.1`/`mech-u5:5.1` rather than the localized topic title. This is student-facing chrome and is not bilingual/readable. | Resolve the chapter/topic from the registry and render `5.1 中值定理` (or the existing `topicLinks[].label`) while keeping the valid href; use the same display label in the solution outline. |

## Severity counts

| Severity | Count |
|----------|-------|
| P0 broken | 1 |
| P1 wrong content | 3 |
| P2 polish | 9 |
| **Total** | **13** |

## Verification performed

- Core chrome sample: 42 routes × 3 viewports (1280/768/390) × 2 themes = **252 loads**. 0 console errors, 0 page errors, 0 HTTP ≥400, 0 `.katex-error`, 0 broken images, 0 page-level horizontal overflow.
- All **42 practice units** at 390px: 0 console/page errors and 0 page overflow.
- All **42 chapter pages** at 390px: 0 console/page errors and 0 page overflow.
- All **4 mind maps** at 1280/768/390: 0 console/page errors and 0 overflow; on the mech map, left-drag rotate, right-drag pan, wheel/button zoom, search→detail, Escape close, theme toggle, and mobile two-finger pan were exercised.
- Formula pages: all three kinds plus legacy `#/physics/formulas` at 1280/768/390 light/dark; TOC jumps and mobile sticky rail verified; no KaTeX errors.
- Internal link crawl over the 441 non-module routes: **497 unique hash links tested; 2 invalid** (UI-01).
- Symbolic checker directly tested against the expected values and against equivalent student forms for q011/q008/q003 (UI-02).
- Palette counts/focus, drawer focus/stale state, mobile aria label, home hint, graph DOM, and past-paper URL state were verified with targeted Playwright checks.

## Screenshots

All in `screenshots/bug-round1-ui/`:

- `home-1280.png`, `home-390.png`, `home-mobile-hint-390.png`
- `catalog-1280.png`, `catalog-390.png`, `chapter-390.png`
- `practice-math-1280.png`, `practice-math-390.png`, `practice-bio-390.png`, `practice-card-390.png`, `practice-card-open-390.png`
- `practice-symbolic-reject.png` (q011 correct expanded derivative rejected), `practice-cot-reject.png` (q008 correct `-cot(t)` rejected), `practice-sqrt-reject.png` (q003 correct exponent form rejected)
- `practice-graph-ylabel-768.png` (missing y label / unlabeled canvas)
- `formulas-math-1280.png`, `formulas-math-390-view.png`, `formulas-math-open-1280.png`
- `formula-c-e0-open.png` (slash fraction), `formulas-em-shows-mechanics.png` (EM page begins with mechanics), `formula-eF-open2.png` (mechanics page contains E&M)
- `map-mech-390-view.png`, `map-mech-mobile-after.png`, `map-mech-desktop-after.png`
- `mega-bio-1280.png`, `mobile-drawer-390.png`, `mobile-drawer-stale-390.png`
- `palette-mobile-calc.png`, `palette-truncated-counts.png`
- `pastpaper-broken-link.png`, `papers-390.png`
- `dark-practice-bio-390.png`, `dark-formula-1280.png`, `dark-palette-1280.png`

## Out of scope / notes for other sessions

- Topic-body content, bilingual coverage, formula-text accuracy outside the formula pages, exam-figure nitpicks, and practice question wording/science were not audited here; they belong to the content/figure sessions.
- `#/mech/practice/mech-u5` still has duplicate SVG marker id `fbd` (from `js/diagrams.js`) on multiple diagrams. The markers are visually identical today; flagged only as a low-risk out-of-scope observation.
- `js/diagrams.js`'s unused `muted()` helper also reads the nonexistent `--muted` token; same token issue as UI-09 but not currently rendered by that helper.
- The prior untracked audit files (`audit/formula-garbled-bio.md`, `audit/formula-garbled-mech.md`) and the untracked `screenshots/formula-garbled-bio/` were not touched.
