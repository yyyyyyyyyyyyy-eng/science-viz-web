# Enrichment batch2 self-check（2026-11-06）

## 复核范围

- 复核已发布 web `2ac72f0`：`data/enrichments/batch2.js` 中新增的 25 条 enrichment（mechanics 9、E&M 11、calculus 3、bio 2）。
- 仅修改 `data/enrichments/batch2.js`；未重新生成 `audit/topic-depth.json`。

## 发现并修复

1. **`math/calc-u7/7.9` Logistic 例题数值错误**：`P(10)=\dfrac{1000}{1+9e^{-5}}` 应为 `≈943`，原文写成 `≈993`。已修正步骤、solution 与 `solutionLatex`。
2. **`em/em-u8/8.4` 电通量角度表述歧义**：题干写“面与电场成 60°”，但公式中的 `θ` 是电场与面法线的夹角。已把题干改为“面法线与电场成 0° 和 60°”，并在定义中明确 `θ` 为法线夹角。
3. **分式记法统一**：新条目中残留的 `\tfrac` 全部改为 `\dfrac`，保持叠式分式、无斜线分式。

## 复核结果

- `node --check data/enrichments/batch2.js` 通过。
- batch2 共 52 条；25 个新 key 与全部 `related` 链接均命中真实 topic；0 bad；66/340 enriched。
- 25 个新 topic 页 Playwright：0 console error、0 `.katex-error`。
- 1280 px / 390 px：0 横向 overflow。
- 明/暗主题正文与标题对比度 spot-check（light `#0f0f0e` on `#f7f7f5`；dark `#f4f4f0` on `#0c0c0b`），无失败。
- 新条目未发现模板公式、错位公式、off-topic 内容或剩余斜线分式。

## SHAs

- 原发布 web：`2ac72f0`
- 本次 self-check 修复 web：`3320e9a`
- web HEAD（含后续 physics self-check）：`5f6cef3`
- app：`bbdae02`（README stamp 为 `5f6cef3`）
