# Learning-flow UX review

**Date:** 2026-11-07 (Asia/Shanghai)  
**Scope:** `/workspace/science-viz-web` at `8f75254` (starting point `768aa75`) — home → subject → chapter → topic → practice, plus formulas TOC.  
**Method:** Playwright/Chromium, `python3 scripts/serve-dev.py . 8771`, 1440×900 and 390×844, light and dark, fresh `localStorage` per context. Review only: no feature files were edited. Figure sections were opened but not interaction-judged (owned by the bio/math and physics figure sessions); no mid-edit figure was visible.

## What I opened

| Route | Purpose | Viewports / themes |
|---|---|---|
| `#/` | home hero, subject index, resume row, search | 1440 and 390, light/dark |
| `#/bio` | subject hub, prep/AP grouping, start CTA, progress | 1440 and 390, light/dark |
| `#/bio/bio-u1` | chapter page, topic rows, practice/map actions, unit pager | 1440, light |
| `#/t/bio/bio-u1/1.6` | enriched reading topic, 18-section outline, examples, related links, pager, figures | 1440 and 390, light/dark |
| `#/t/math/calc-u2/2.1` | KaTeX topic, formulas, action row | 1440 and 390, light/dark |
| `#/t/mech/mech-u1/1.2` | physics topic shell and exam-figure section | 1440, light/dark |
| `#/math/formulas` | 6-group TOC, row expand/collapse, jumps | 1440 and 390, light/dark |
| `#/bio/practice/bio-u1` | 52-question bank, filters, rail, MCQ, FRQ, sets | 1440 and 390, light/dark |
| `#/math/practice/calc-u2` | generator cards, numeric/symbolic inputs | 1440, light/dark |
| `#/math/practice/calc-u6` | numeric answer check | 1280, light |
| `#/em/practice/em-u10` | numeric answer check with expected 0 | 1280, light |

## Summary

| ID | Severity | Issue |
|---|---|---|
| UX-01 | **High** | Generated practice items render no question stem at all (41 cards in `calc-u1`/`u2`/`u3`) |
| UX-02 | **High** | Numeric checker rejects correct fractions (`1/2`) and accepts empty/non-numeric input when the expected value is 0 |
| UX-03 | **Medium** | Mobile practice has no question index or jump control; a 52-question page is 29,029px tall |
| UX-04 | **Medium** | Opening “答案与解析” marks an FRQ complete; 656 of 2,248 practice items have no answer input, so progress mostly measures solution views |
| UX-05 | **Medium** | “换一组数据” resets the card UI but leaves the rail/hero completed |
| UX-06 | **Low–Medium** | Last item in formula TOC / practice rail cannot become active; topic outline’s active item can sit outside the rail |
| UX-07 | **Low–Medium** | Focus is dropped or left off-screen after correct answers, SPA pager changes, and mobile outline jumps |

## Findings

### UX-01 — Generated practice cards have no visible prompt (High)

**Repro:** open `#/math/practice/calc-u2`, scroll to card 05 “2.1 瞬时变化率 · 变式” (`GEN`), or open `#/math/practice/calc-u1` and inspect any `GEN` card.

**Observed:** the card contains only the title, tags, source, “换一组数据”, the answer form and “答案与解析”. There is no question text. The answer/solution reveals `f'(x)=18x^5`, but the student never sees “若 f(x)=6x^6，求 f'(x)”. Result: `document.querySelectorAll('.practice-stem').length === 0` on this card; the full card text is `05 … GEN … 换一组数据 … 检查等价 … 答案与解析`.

**Cause:** in `js/practice.js`, `renderProblemCard` renders `prob.stem`/`prob.stemLatex` only for the outer problem (lines 450–455), while generated instances go through `renderInstanceBody` → `renderAnswerUI` (lines 485–506, 508–639), which renders answer controls and solution but not `stemLatex`. Every generated instance is therefore stemless, both on first mount and after “换一组数据”.

**Scope:** 41 generator cards: `data/math/practice/calc-u1.js` (16), `calc-u2.js` (14), `calc-u3.js` (11). This blocks the main task on those cards.

**Suggested fix:** render instance stem (and any stimulus) in `renderInstanceBody` before `renderAnswerUI`; use the same path on regenerate. Add a Playwright assertion that a generated card contains a non-empty prompt and that the prompt changes after “换一组数据”.

**Evidence:** `screenshots/ux-learn/practice-desktop-generator-card.png`

### UX-02 — Numeric answer parsing rejects correct answers and accepts non-answers (High)

**Repro A:** `#/math/practice/calc-u6`, card “二阶导数” (expected `0.5`), enter `1/2` → “不在容差内”.
**Repro B:** `#/em/practice/em-u10`, card “电容器稳态电流” (expected `0`), submit an empty field → “正确”, input disabled, card marked 完成. Entering `abc` does the same.

**Cause:** `checkNumeric` in `js/practice.js:68–74` strips everything except digits, `.`, `+`, `-`, `e`, `E`. `1/2` becomes `12`; `abc` becomes `''`, and `Number('') === 0`. This affects 467 numeric items; 143 have non-integer expected values where a fraction or scientific notation is natural.

**Suggested fix:** parse fractions (`1/2`), scientific notation (`1.5e3`, `1.5×10^3`), and optional units; reject empty/non-numeric strings explicitly; add `inputmode="decimal"` for numeric inputs and a short “可输入小数、分数或科学计数法” hint. Add unit tests for empty, `abc`, `1/2`, `1.5e3`, unit-suffixed answers, and Unicode minus.

**Evidence:** `screenshots/ux-learn/practice-desktop-numeric-empty-accepted.png`

### UX-03 — Mobile practice has no question index (Medium)

**Repro:** open `#/bio/practice/bio-u1` at 390px. The page renders 52 cards in one column (29,029px tall). The desktop question rail is hidden (`css/main.css:4212–4215`) and no alternate index is rendered: 0 visible `.practice-jump` buttons. The only way forward is the “下一题” button at the bottom of each card, or filtering to a type/difficulty at the top.

**Impact:** a student returning to question 37, or reviewing a specific missed item, must scroll through the whole bank. On a 390px phone the first question’s stimulus alone can fill more than a screen.

**Suggested fix:** add a compact mobile “题目” control (bottom sheet, sticky select, or collapsible 4-column grid) that reuses the existing `ctx.cards` and `jumpTo`; keep filters, and make the control reflect filtered/hidden state. Alternatively paginate the mobile bank.

**Evidence:** `screenshots/ux-learn/practice-bio-u1-mobile-light.png`, `practice-mobile-dark-feedback.png`

### UX-04 — Opening the solution marks an FRQ complete (Medium)

**Repro:** open `#/bio/practice/bio-u1`, open “答案与解析” on question 01. Progress goes `完成 0 / 52` → `完成 1 / 52`; the card shows 完成. The card has no input (`inputs === 0`). The same toggle handler exists for every FRQ and for each part of a multi-part FRQ.

**Scope:** 656 of 2,248 practice items have no answer UI and rely on “答案与解析”. In `bio-u1`, 42 of 52 questions are FRQ. Topic pages also auto-mark “已完成” after 2.5s of dwell (`js/topic-page.js:112–117`).

**Impact:** “完成” measures whether the answer was revealed, not whether the student attempted or understood the item. Unit progress therefore overstates mastery and makes the completion state hard to trust.

**Suggested fix:** do not call `onDone` from the `details` toggle; add an explicit post-solution choice (“已掌握 / 需要复习”) or a self-check textarea compared with the model answer. Keep “已读” and “已完成” distinct; if dwell-based completion stays, label it “已读” rather than “已完成”.

**Evidence:** `screenshots/ux-learn/practice-desktop-frq-solution-open.png`

### UX-05 — Regenerate leaves progress out of sync (Medium)

**Repro:** in `#/math/practice/calc-u2`, open the solution of generator card `calc-u2-q005` (progress becomes `完成 1 / 75`, rail button gets `is-done`), then press “换一组数据”. The card’s `data-done` becomes `false`, but the hero still shows `完成 1 / 75`, the rail progress text still shows `完成 1 / 75`, and the rail button still has `is-done`.

**Cause:** `redraw()` in `js/practice.js:463–475` calls `cardState(card, false)` but not `ctx.onDone`/`updateProgress` (`js/practice.js:173–180`, 273–287).

**Suggested fix:** after regenerating, update progress consistently (either keep the completion and leave the card marked done, or clear `data-done`, the rail button and the hero count). Add a test for both paths. This is currently masked by UX-01 because the generated prompt is blank.

**Evidence:** `screenshots/ux-learn/practice-desktop-generator-regen.png`

### UX-06 — Last TOC/rail item cannot become active; outline active can be off-screen (Low–Medium)

**Formula repro:** at 1440×900, open `#/math/formulas` and click the last TOC item “06 参数与极坐标”. At maximum scroll (`y = 4003`), the section top is 287px and the TOC highlights “05 级数与麦克劳林”. On 390px the TOC also scrolls back to 05, hiding the item just tapped. Cause: `paintActive` in `js/formulas-page.js:119–140` uses a `navHeight() + 140` threshold, but the last section cannot reach it because the document cannot scroll further. The same pattern in `js/practice.js:361–374` leaves the rail on “50” after tapping “52” (target top 493px).

**Topic outline repro:** on `#/t/bio/bio-u1/1.6`, scroll naturally to the bottom. The active “图示” button is at `top=756`, below the rail viewport bottom `724`, while `rail.scrollTop=0`; the active item is invisible.

**Suggested fix:** set the active item immediately on click; after smooth scrolling, choose the nearest section rather than only sections above the threshold; add bottom padding to the last section (or scroll the target to center); scroll the active rail button into the rail’s own scroll container with `scrollIntoView({block:'nearest'})` scoped to the rail.

**Evidence:** `screenshots/ux-learn/formulas-desktop-jump-06.png`, `formulas-mobile-jump-06.png`, `practice-desktop-last-question-active.png`, `topic-desktop-outline-last-active.png`

### UX-07 — Focus handling after actions (Low–Medium)

Three reproducible cases:

1. **Correct MCQ:** focus the check button, answer correctly, press Enter. The button becomes disabled and focus drops to `BODY`; the next Tab lands on an unrelated “答案与解析” summary lower on the page. `js/practice.js:552–573`.
2. **SPA pager:** focus “下一知识点” and press Enter. The new topic opens at `scrollY=0` (good), but `document.activeElement` is `BODY`; no heading focus or route announcement. `js/app.js:89–99` blurs the old active element and never focuses `h1`/`main`.
3. **Mobile outline:** tap “本页目录” → “例题” on `#/t/bio/bio-u1/1.6`. The page jumps to the target, but focus remains on the collapsed summary at `y=-2513`; the next Tab moves to a related link at `y=434`. `js/topic-page.js:153–159`.

**Suggested fix:** after a correct answer, focus the feedback or the next question control; after a route change, focus the page `h1` (`tabindex="-1"`) or add an `aria-live` route announcement; after a mobile outline jump, focus the target heading rather than the closed summary.

## What worked

- Home → subject → chapter → topic → practice navigation is coherent; breadcrumbs are present at every level and the chapter crumb returns to `#/bio/bio-u1`.
- Topic pager resets scroll to top on route change; previous/next topic and “单元练习” / “知识图谱” links resolve.
- Desktop topic outline jump lands the section 20px below the sticky header; the mobile outline closes on selection and lands at `top=76` (header bottom 56).
- All interactive targets measured ≥44px on the pages opened, including filters, MCQ choices (52px), formula summaries, breadcrumb links and mobile drawer links.
- No horizontal page overflow at 390px on bio, math, mech, formulas or practice routes; long KaTeX lines scroll inside their own containers (`overflow-x:auto`).
- Light and dark themes are both legible on the pages opened; theme toggle updates its label and ARIA label.
- MCQ flow works: select → “检查答案” → wrong feedback “再试一次” with red border → correct choice → “正确” and “已答对”; filters return the expected counts (MCQ 10/52, 易 18/52).
- Mobile drawer opens full-height, expands a subject in place, navigates, restores scroll and closes; search palette opens with Ctrl+K and returns results.
- No mid-edit figure was encountered; figure sections were left to their owning sessions.

## Targeted Playwright notes

- Probe covered 32 route/viewport/theme combinations: **0 console errors, 0 page errors, 0 request failures**.
- Self-check covered `#/`, `#/bio`, `#/bio/bio-u1`, `#/t/bio/bio-u1/1.6`, `#/t/math/calc-u2/2.1`, `#/math/formulas`, `#/bio/practice/bio-u1`: **0 errors, 0 KaTeX errors, 0 horizontal overflow, 0 targets under 44px**.
- Mobile probe at 390px covered home, subject, chapter, two topics, formulas, practice: all `scrollWidth === innerWidth`; practice document height 29,029px with 0 visible jump buttons.

## Self-check (worst issues re-opened)

| Check | Result |
|---|---|
| Generator card `calc-u2-q005` | `.practice-stem` count **0**; answer form present; card text omits the prompt |
| `calc-u6` question, expected `0.5`, input `1/2` | Feedback “不在容差内” |
| `em-u10` question, expected `0`, empty input | Feedback “正确”; input disabled; card marked 完成 |
| Formulas last TOC item | Active stays “05 级数与麦克劳林”; last section “参数与极坐标” top 287px at `max scroll 4003` |
| Formula row expand | Opens correctly; symbol/condition/example/related body renders, KaTeX intact |
| Read a topic for 3s | Status changes to “已完成” without interaction |
| Mobile practice | 52 cards, 29,029px, rail `display:none`, 0 visible jump buttons |
| FRQ solution open | Progress `0/52` → `1/52`; no input in card; `data-done=true` |

**Recommendation order:** fix UX-01 first (blocks 41 cards), then UX-02 (correct answers rejected), then UX-03 and UX-04 (mobile navigation and trustworthy progress). UX-05–07 are smaller but all have straightforward fixes and should get regression tests.

## Screenshot index

All under `screenshots/ux-learn/`:

- Home/subject: `home-desktop-light.png`, `home-desktop-dark.png`, `home-mobile-light.png`, `home-mobile-menu-bio-open.png`, `home-search-palette.png`, `subject-bio-desktop-light.png`, `subject-bio-mobile-light.png`
- Chapter/topic: `chapter-bio-u1-desktop-light.png`, `topic-bio-1.6-desktop-light.png`, `topic-bio-1.6-desktop-dark.png`, `topic-bio-1.6-mobile-light.png`, `topic-bio-1.6-mobile-dark.png`, `topic-mobile-outline-open.png`, `topic-desktop-outline-last-active.png`, `topic-math-2.1-desktop-light.png`, `topic-math-2.1-mobile-light.png`
- Practice: `practice-bio-u1-desktop-light.png`, `practice-bio-u1-desktop-dark.png`, `practice-bio-u1-mobile-light.png`, `practice-mobile-dark-feedback.png`, `practice-desktop-wrong-check.png`, `practice-desktop-mcq-correct.png`, `practice-desktop-frq-solution-open.png`, `practice-desktop-generator-card.png`, `practice-desktop-generator-regen.png`, `practice-desktop-numeric-empty-accepted.png`, `practice-desktop-last-question-active.png`
- Formulas: `formulas-math-desktop-light.png`, `formulas-math-desktop-dark.png`, `formulas-math-mobile-light.png`, `formulas-desktop-row-open.png`, `formulas-desktop-jump-06.png`, `formulas-mobile-jump-06.png`
