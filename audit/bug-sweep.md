# Bug sweep report

- Generated: 2026-11-06T13:03:13.782Z
- Mode: `full`
- Routes: 481
- Elapsed: 755.8 s
- Issues: **0**

## By kind

| Kind | Count |
|---|---:|

## Issues

_None reported by this run._

## Coverage

- Route list rebuilt with `node scripts/build-routes.mjs`: **481 routes**.
- **2,886 page loads** = 481 routes × 3 viewports × 2 themes (canvas 210, maps 42, topics 2,040, rest 594).
- Viewports: `1280×800`, `1440×900`, `390×844`.
- Themes: `light`, `dark`.
- Run after the UI redesign commits `5d6f63d` (chrome/pages/interactions) and `84c33f5` (mindmap), so the old 2026-11-05 report is superseded.
- Checks: console errors, page errors, HTTP ≥400, canvas/SVG size growth, horizontal overflow, KaTeX errors, empty in-page anchors.

## Manual caption check (mechanics Unit 5.3)

The sweep does not inspect `figcaption` clipping, so `#/t/mech/mech-u5/5.3` was checked separately in light and dark at 1280×800 and 390×844.

- **Found:** stacked-fraction captions touched the bottom of `.exam-figure-cap`; because that element computes `overflow-y: auto` from `overflow-x: auto`, the denominator row was visibly cut (for example `rolling-race`, `rod-pivot`, `disk-string`, `rolling-incline`, `moment-of-inertia`).
- **Fix:** `modules/physics/exam-figures.js` only — appended an invisible KaTeX descent phantom to those five figure captions so the fraction clears the caption edge. Formula text is unchanged; no shared `.exam-figures` CSS was touched.
- **Result:** all six captions on the page are complete in both themes; `scrollWidth - clientWidth = 0`; no console/page errors.

## Self-check

- Re-read `modules/physics/exam-figures.js` and this report after the run.
- `node --check modules/physics/exam-figures.js` passed.
- Targeted Playwright pass on `#/t/mech/mech-u5/5.3` at 1280×800 and 390×844, light + dark: 0 console/page errors, 0 horizontal overflow, all captions complete.
- Post-fix subset re-run with `SWEEP_ROUTES` limited to `#/t/mech/mech-u5/5.3`: 6 jobs (3 viewports × 2 themes), **0 issues**, 4.4 s.
- Before/after screenshots: `screenshots/bug-sweep/mech-5.3-{1280x800,390x844}-{light,dark}-{before,after}.png`, `...-figures-{before,after}.png`, and `...caption-*-{before,after}-zoom.png`.
