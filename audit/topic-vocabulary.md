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

37 topics gained vocabulary in this batch (4–8 terms each, 222 terms total):

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

## Leftovers

None for this batch. The broader all-course vocabulary expansion was descoped by the follow-up instruction. `data/enrichments/batch1.js` and `batch2.js` were not touched; batch2 belongs to another session.
