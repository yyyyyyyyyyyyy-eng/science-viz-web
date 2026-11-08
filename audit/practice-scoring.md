# Practice scoring / generated-stem fixes

Date: 2026-11-08
Starting commits: web `8fa9deb`, app `d1773e3`.
Scope: `js/practice.js`, `js/progress.js` (small unmark helper only).

## Changes

### UX-01 — generated questions render their stem

`renderInstanceBody` now accepts `opts.instanceStem`. When set and the instance has
no `parts`, it renders the instance `stem` / `stemLatex` in a `.practice-stem`
wrapper before `renderAnswerUI` (`js/practice.js:529-556`). Both the first paint
and every `换一组数据` redraw pass `{ instanceStem: true }`, so the stem updates
with the new instance.

The flag is only set for generated cards, so ordinary problems (whose stem is
already painted by `renderProblemCard`) do not get a duplicate stem. Part-based
items keep rendering their per-part stems exactly as before.

Verified: all 16 `calc-u1`, 14 `calc-u2`, and 11 `calc-u3` GEN cards now have a
non-empty `.practice-stem`; `calc-u2-q005` has exactly one stem and its text
changes across regeneration.

### UX-02 — numeric parser

`checkNumeric` (`js/practice.js:68-88`) no longer strips every non-numeric
character out of the input. It now:

- trims the input and rejects empty / whitespace-only values before conversion;
- accepts a simple fraction (`1/2`, `-1/2`, `1 / 2`) by parsing numerator and
  denominator and rejecting division by zero;
- accepts ordinary integers, decimals (including `.5`, `5.`), and scientific
  notation (`1e-3`, `-3.333e-1`) through a strict numeric regex;
- rejects arbitrary text/algebra (`abc`, `1/2/3`, `1/0`, `--1`);
- keeps the existing relative tolerance `tol * max(1, |expected|)` (default
  tolerance `0.02`).

Verified in the browser: `calc-u6-q003` (expected `0.5`) accepts `1/2` and marks
the card done; `-1/2` is rejected there; `calc-u3-q002` (expected
`-0.3333333333333333`) accepts `-1/3` and `-3.333e-1`; `em-u10-q002` (expected
`0`) rejects empty, whitespace-only, and `abc` without persisting completion.

### UX-04 — opening “答案与解析” no longer completes the card

Removed the `toggle` listener that called `onDone` whenever the solution
`<details>` was opened (`js/practice.js:558-690`). Answer input checkers (MCQ,
numeric, symbolic) remain the only paths that call `onDone` / `markCompleted`.
No new completion control was added; no-input FRQs simply no longer complete
from a solution peek.

Verified on `calc-u6-q004` and on a generated `calc-u1` card: opening the
solution leaves `data-done="false"`, the state label blank, and the card absent
from `science-viz-completed`.

### UX-05 — “换一组数据” clears completion and refreshes progress

Added `clearCompleted(id)` to `js/progress.js:57-61` (inverse of
`markCompleted`, only removes the id from the completed set). Generated-card
regeneration now calls a `resetDone` helper (`js/practice.js:506-518`) that:

1. clears the stored completion for the card's `progressId`;
2. calls `cardState(card, false)`;
3. calls `ctx.onDone(card)` to refresh the hero count, rail count/fill, and jump
   grid (`updateProgress`).

Verified with a generated MCQ in `calc-u3`: after a correct answer the card,
hero (`完成 1 / 56`), rail, and jump-grid state show completed and
`science-viz-completed` contains the id; after `换一组数据` all four leave the
completed state and the stored id is gone.

### FRQ answer duplication

Inspected `renderAnswerUI`: `answerLatex`, `answer`, `solution`, and
`solutionLatex` are each appended once (`js/practice.js:679-682`). The earlier
double-append is not present in this HEAD; left the single-render behavior as
is. Browser check on `calc-u6-q004` counted the answer paragraph exactly once
inside the open solution.

## Self-check

- Re-read the full diff; `node --check js/practice.js` and
  `node --check js/progress.js` both exit 0.
- Targeted Playwright on a fresh server (`python3 scripts/serve-dev.py . 44435`,
  temporary local port): 38 assertions, 0 failures.
  - GEN stems: 41/41 cards across `calc-u1`, `calc-u2`, `calc-u3` have
    `.practice-stem`; `calc-u2-q005` stem changes after regeneration.
  - Numeric: fraction, negative fraction, scientific notation, empty,
    whitespace-only, and junk cases above.
  - Solution peek does not complete an unanswered card (plain and generated).
  - Regeneration clears card/hero/rail/jump-grid completion and storage.
  - Solution answer paragraph appears once.
  - Light + dark; 1280 and 390 spot checks on `calc-u1` / `calc-u2` /
    `calc-u6`: 0 console errors, 0 page errors, 0 `.katex-error`, 0 horizontal
    overflow.
- Screenshots: `screenshots/practice-scoring/` (`gen-stem-light.png`,
  `gen-stem-dark.png`, `gen-stem-regenerated.png`, `numeric-fraction-ok.png`,
  `numeric-junk-rejected.png`, `solution-no-autocomplete.png`,
  `gen-completed.png`, `regen-clears-done.png`, `mobile-390-dark.png`).

## Leftovers / notes

- `clearCompleted` only removes completion; visit history is intentionally kept.
- The strict numeric parser now rejects unit suffixes (`5 m/s`) and other text
  that the old character-stripping parser silently accepted. This matches the
  numeric-checker scope; symbolic/expression answers use the `symbolic` checker.
- No changes to `js/topic-page.js` dwell completion, practice banks, CSS, or
  hydration/enrichment files.
