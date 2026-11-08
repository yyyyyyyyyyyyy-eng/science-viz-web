# Topic vocabulary — recent calc batch

## Rendering

`js/topic-page.js` renders a vocabulary block when `topic.vocabulary?.length` is non-empty.

- Placement: after the 定义 block (`topic.definition` and optional `topic.intuition`) and before 本质知识.
- Heading: `重要词汇 · Key Vocabulary` via the existing `block()` helper.
- List: existing `topic-list` class; each item is appended with `appendMathLi`, so `\(...\)` / `\[...\]` KaTeX works.
- Item format: `${termZh} · ${termEn}：${defZh} · ${defEn}`.
- No CSS changes, no new cards, emoji, or rounding. Topics without `vocabulary` show no section.

`data/enrichments/merge.js` now includes `vocabulary` in the array-replacement list, so an overlay replaces the field only when it actually supplies it.

## Data shape

```js
vocabulary: [
  {
    termZh: "几何级数",
    termEn: "geometric series",
    defZh: "形如 \\(a+ar+ar^2+\\cdots\\) 的级数。",
    defEn: "A series of the form \\(a+ar+ar^2+\\cdots\\)."
  }
]
```

Source topic objects only; no enrichment data was edited.

## Coverage

37 topics gained vocabulary in this batch (4–8 terms each, **223** terms total; `math/calc-u6/6.12` has 7 items rather than 6, which explains the earlier 222 miscount):

| File | Topics |
| --- | --- |
| `data/math/calc-u1.js` | 1.2 |
| `data/math/calc-u2.js` | 2.2, 2.5, 2.8 |
| `data/math/calc-u3.js` | 3.1, 3.2 |
| `data/math/calc-u4.js` | 4.4, 4.7 |
| `data/math/calc-u5.js` | 5.1, 5.4, 5.6, 5.11 |
| `data/math/calc-u6.js` | 6.4, 6.9, 6.10, 6.11, 6.12 |
| `data/math/calc-u7.js` | 7.2, 7.6, 7.9 |
| `data/math/calc-u8.js` | 8.4, 8.9, 8.11, 8.13 |
| `data/math/calc-u9.js` | 9.1, 9.3, 9.7, 9.8 |
| `data/math/calc-u10.js` | 10.2, 10.5, 10.7, 10.8, 10.11, 10.12, 10.13, 10.14 |
| `data/math/math-prep-geo.js` | P2.10 |

Files touched: the 11 source files above, `js/topic-page.js`, `data/enrichments/merge.js`, this audit, and `screenshots/topic-vocabulary/`.

## Checks

- `node --check` passed for both renderer/merge files and all 11 source files.
- Script audit: every listed topic has 4–8 items; every item has non-empty `termZh`, `termEn`, `defZh`, `defEn`; no duplicate `termZh` within a topic; no forbidden slogan phrases; no `\frac` (only `\dfrac`); no `÷`.
- Diff review: source-file diffs are additions only (vocabulary arrays); existing teaching prose, examples, formulas, and titles unchanged.
- Targeted Playwright (light theme) on `math/calc-u1/1.2`, `math/calc-u10/10.2`, `math/calc-u6/6.11`, `math/calc-u8/8.11`, `math/calc-u9/9.8`, `math/calc-u5/5.6`, `math/math-prep-geo/P2.10`, plus `math/calc-u1/1.1` as a no-vocabulary control.
  - Desktop 1280×900 and mobile 390×844.
  - Section visible and correctly ordered on all listed topics; hidden on 1.1.
  - Chinese and English both present, 6 items each.
  - 0 console errors, 0 page errors, 0 `.katex-error`, 0 horizontal overflow.
- Screenshots: `screenshots/topic-vocabulary/`.

## Remaining AP Calc batch (`calc-u1` … `calc-u10`)

75 more topics gained vocabulary: 423 new terms, 4–8 per topic. Every topic object in `data/math/calc-u1.js` … `calc-u10.js` now has a `vocabulary` array. `data/math/calc-u0.js` (prep) was not edited and still renders no vocabulary section.

| File | Topics |
| --- | --- |
| `data/math/calc-u1.js` | 1.1, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13, 1.14, 1.15, 1.16 |
| `data/math/calc-u2.js` | 2.1, 2.3, 2.4, 2.6, 2.7, 2.9, 2.10 |
| `data/math/calc-u3.js` | 3.3, 3.4, 3.5, 3.6 |
| `data/math/calc-u4.js` | 4.1, 4.2, 4.3, 4.5, 4.6 |
| `data/math/calc-u5.js` | 5.2, 5.3, 5.5, 5.7, 5.8, 5.9, 5.10, 5.12 |
| `data/math/calc-u6.js` | 6.1, 6.2, 6.3, 6.5, 6.6, 6.7, 6.8, 6.13, 6.14 |
| `data/math/calc-u7.js` | 7.1, 7.3, 7.4, 7.5, 7.7, 7.8 |
| `data/math/calc-u8.js` | 8.1, 8.2, 8.3, 8.5, 8.6, 8.7, 8.8, 8.10, 8.12 |
| `data/math/calc-u9.js` | 9.2, 9.4, 9.5, 9.6, 9.9 |
| `data/math/calc-u10.js` | 10.1, 10.3, 10.4, 10.6, 10.9, 10.10, 10.15 |

Totals after this batch:

- `calc-u1` … `calc-u10`: 111 topics with vocabulary, 640 terms.
- All course source topics including `math/math-prep-geo.js` P2.10: 646 terms (223 from the first batch + 423 from this batch).

Files touched this round: the ten `data/math/calc-u*.js` files, this audit, and `screenshots/topic-vocabulary-calc-rest/`. `js/topic-page.js`, `data/enrichments/merge.js`, `data/enrichments/batch1.js`, `data/enrichments/batch2.js`, simulators, CSS, exam figures, mindmap, and practice files were not touched.

### Checks

- `node --check` passed for all ten edited JS files.
- Script audit on the 75 new topics: every topic has 4–8 items; every item has non-empty `termZh`, `termEn`, `defZh`, `defEn`; no duplicate `termZh` within a topic; no `\frac` (only `\dfrac`); no `÷`; no slogan text.
- Diff review: `git diff --numstat` shows 2,688 insertions and 0 deletions across the ten files; vocabulary arrays are the only additions, with existing prose, examples, formulas, and titles unchanged.
- Targeted Playwright (light theme, desktop 1280×900) on `math/calc-u1/1.1`, `math/calc-u1/1.2` (previously covered control), `math/calc-u2/2.1`, `math/calc-u3/3.3`, `math/calc-u4/4.1`, `math/calc-u5/5.2`, `math/calc-u6/6.1`, `math/calc-u7/7.1`, `math/calc-u8/8.1`, `math/calc-u9/9.2`, `math/calc-u10/10.1`, and `math/calc-u10/10.15`.
  - `#topic-sec-vocabulary` appears after `#topic-sec-definition` and before `#topic-sec-essential` on all twelve pages.
  - Heading text is `重要词汇 · Key Vocabulary`; every item follows `termZh · termEn：defZh · defEn`; each page shows 4–8 items.
  - 0 console errors, 0 page errors, 0 `.katex-error`, 0 horizontal overflow.
  - `math/calc-u0/0.1` and `math/calc-u0/0.2` were checked as no-vocabulary controls and show no section.
- A scripted sweep of all 75 newly covered topics found 0 missing sections, 0 item-count/order/heading failures, 0 KaTeX errors, 0 console errors, and 0 horizontal overflow.
- Screenshots: `screenshots/topic-vocabulary-calc-rest/`.

## Leftovers

None for the remaining AP Calc batch. No topic in `calc-u1` … `calc-u10` lacks vocabulary. `calc-u0.js`, the bio/physics/E&M/prep source files, `data/enrichments/batch1.js`, and `data/enrichments/batch2.js` were not touched; batch2 belongs to another session.
