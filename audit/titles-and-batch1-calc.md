# Bio titles + bilingual calc teaching blocks (2026-11-08)

## 起点

- 上一轮 web：`0e25846`（Chinese-only batch1 blocks + title fixes）
- 上一轮 app：`2bf29bb`
- 本会话未修改 `data/enrichments/batch2.js`（另一会话为该文件唯一写者）。

## Part A — 生物标题与 related

- `data/bio/bio-u6.js`：保留 `6.6` 的 `titleZh = 基因表达与细胞特化`；`titleEn = Gene Expression and Cell Specialization` 核对正确。
- `data/bio/bio-u7.js`：保留 `7.12` 的 `titleZh = 种群变异`；`titleEn = Variations in Populations` 核对正确。`7.13` 的 `titleEn = Origins of Life on Earth` 未改。
- 两文件的 `summary` 已是 `中文标题 · English title` 形式。
- 指向 `6.6` / `7.12` 的 related `title` 单字段改为双语：
  - `基因表达与细胞特化 · Gene Expression and Cell Specialization`（6.5→6.6、6.7→6.6）
  - `种群变异 · Variations in Populations`（7.11→7.12、7.13→7.12）
- 未回退 `titleZh` 修复，未改写这些 topic 页原有的教学正文。

### related 的真实页面覆盖说明

`bio-u6.js` / `bio-u7.js` 源文件的 related 标题已是双语。但 `batch2.js` 的 6.5、6.7、7.11 overlay 会用旧的单语 related 数组覆盖页面，因此这三页的真实页面仍显示旧中文标题；临时阻断 `batch2.js` 后页面显示双语，证明源文件正确。该文件不在本会话写权限内。7.13 的 batch2 overlay 由另一会话更新后，真实页面已显示 `7.12 种群变异 · Variations in Populations`。

## Part B — 四个 batch1 对象全量双语

范围仅限 `data/enrichments/batch1.js` 的四个对象：

- `math/calc-u1/1.2`
- `math/calc-u2/2.2`
- `math/calc-u2/2.5`
- `math/calc-u6/6.4`

四个对象内 **245 条 student-facing 字符串**全部改为“中文 · English”：

- `learningObjectives`、`essentialKnowledge`
- `definition`、`intuition`、`intuitionDetailed`
- `formulas[].note`
- `derivationNotes[].from`、`.to`、`.note`
- `conditions`、`keyPoints`、`misconceptions`
- `examples[].title`、`.prompt`、`.steps[]`、`.solution`
- `examTips`
- `related[].title`、`.relation`
- `development`、`checks`、`summary`

公式处理：

- `latex` 与 `solutionLatex` 保持单份，不翻译、不复制。
- 英文解释引用“shown above / the formula above”等，避免把主公式再写一遍。
- 四个对象内 `\frac` 已统一为 `\dfrac`；`\dfrac` 计数：1.2 = 11，2.2 = 26，2.5 = 18，6.4 = 5；`÷` = 0。
- 未改动 P1.9、mechanics、E&M、bio 等其它 batch1 对象；未新增 batch1 key；未生成模板 MCQ。

## 自检

- `node --check data/enrichments/batch1.js`、`node --check data/bio/bio-u6.js`、`node --check data/bio/bio-u7.js` 均通过。
- `node scripts/check-math-notation.mjs` → `MATH_NOTATION_OK`。
- 245/245 student-facing 字符串均检测到英文；0 条漏翻。
- 针对性 Playwright（`python3 scripts/serve-dev.py . 8932`）：
  - 生物 `6.6`、`7.12`、`7.13` 三页（1280）：0 console/page error、0 `.katex-error`、0 横向 overflow；标题正确。
  - 四个 calc 页面在 1280 与 390 下共 8 次加载：0 console/page error、0 `.katex-error`、0 横向 overflow；definition、essential、objectives、examples、related、summary 六个区段均含英文；未出现 `准确陈述定义、适用范围与符号约定`。
  - 四个 calc 页面 dark 主题 smoke check：0 console/page error、0 `.katex-error`。
  - related 源数据：6.5、6.7、7.11、7.13 阻断 batch2 后均显示双语标题；7.13 真实页面也已显示双语。
- 截图：
  - 生物 3 张 full-page（1280）。
  - 每个 calc 页面：full-page 1280、full-page 390，以及 1280 的 definition+essential+objectives 双语块特写。

## 截图

`screenshots/titles-and-batch1-calc/`：

- `bio-u6-6.6-1280.png`
- `bio-u7-7.12-1280.png`
- `bio-u7-7.13-1280.png`
- `calc-u1-1.2-1280.png` / `calc-u1-1.2-390.png` / `calc-u1-1.2-1280-blocks.png`
- `calc-u2-2.2-1280.png` / `calc-u2-2.2-390.png` / `calc-u2-2.2-1280-blocks.png`
- `calc-u2-2.5-1280.png` / `calc-u2-2.5-390.png` / `calc-u2-2.5-1280-blocks.png`
- `calc-u6-6.4-1280.png` / `calc-u6-6.4-390.png` / `calc-u6-6.4-1280-blocks.png`
