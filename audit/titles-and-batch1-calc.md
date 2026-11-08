# Bio title fixes + batch1 calc teaching blocks (2026-11-08)

## 起点

- web: `a8c0616762b1f261ce98acdd775bf8ed4a05caea`
- app: `212910314f2b0f838240af73af7d89b22b18b24c`
- 未修改 `data/enrichments/batch2.js`（另一会话为该文件唯一写者）。

## Part A — 生物标题

- `data/bio/bio-u6.js`：`6.6` 的 `titleZh` 由 `基因突变` 改为 `基因表达与细胞特化`；`summary` 同步为 `基因表达与细胞特化 · Gene Expression and Cell Specialization`；两处指向 `6.6` 的 `related` 标题同步更新（位于 6.5、6.7 页面）。
- `data/bio/bio-u7.js`：`7.12` 的 `titleZh` 由 `生命起源多样性` 改为 `种群变异`；`summary` 同步为 `种群变异 · Variations in Populations`；指向 `7.12` 的 `related` 标题同步更新（位于 7.11、7.13 页面）。
- 未改写这些 topic 页的 `definition`、`learningObjectives`、`essentialKnowledge`、`examples`、`intuition` 等教学正文字段；`titleEn` 未变。

### 7.13 related 显示的已知范围外问题

`data/bio/bio-u7.js` 中 7.13 的先修 `related` 已改为 `7.12 种群变异`。但当前真实页面 `#/t/bio/bio-u7/7.13` 的相关知识点仍显示 `先修 · 7.12 生命起源多样性`，原因是 `data/enrichments/batch2.js` 的 `bio/bio-u7/7.13` 条目会用旧标题整体替换 `related` 数组。该文件由另一会话维护，本会话按约束未修改。把 batch2 的 `batch2.js` 请求临时阻断后，页面已显示 `7.12 种群变异`，证明 `bio-u7.js` 源数据修复正确；需要 batch2 的写者在自己的条目中把该 `related` 标题改为 `种群变异`。

## Part B — 四个 batch1 教学块

在 `data/enrichments/batch1.js` 中只改以下四个 key，补入非空、主题化的 `learningObjectives` 与 `essentialKnowledge`：

- `math/calc-u1/1.2` 极限定义与记号：极限的趋势含义、左右极限判据、有限/无穷/不存在三类情形、极限与连续的关系。
- `math/calc-u2/2.2` 导数定义：两种等价定义、差商化简、切线与瞬时率、左右导数与连续/可导关系、单位与高阶导数。
- `math/calc-u2/2.5` 幂函数导数：幂法则适用域、根式与负指数改写、与常数倍/和差法则联用、边界点可导性。
- `math/calc-u6/6.4` 微积分基本定理：FTC1/FTC2、变上限与上下限均含变量的链式法则、累积函数增减与极值、定积分与不定积分的区别。

同时只在这四个对象内做了两项显示修正（未改写正文含义）：

1. 原有行内公式使用单反斜杠 `\(...\)`，JS 解析后会丢掉反斜杠，页面显示原始 LaTeX；已统一为 `\\(...\\)`，使定义、条件、例题与答案正常渲染 KaTeX。
2. 原有 `\frac` 统一为 `\dfrac`，保持叠式分式。

未改动 P1.9、mechanics、E&M、bio 等其它 batch1 条目；未新增 key；未生成模板 MCQ。

## 自检

- `node --check data/bio/bio-u6.js`、`node --check data/bio/bio-u7.js`、`node --check data/enrichments/batch1.js` 均通过。
- `node scripts/check-math-notation.mjs` → `MATH_NOTATION_OK`。
- 针对性 Playwright（`python3 scripts/serve-dev.py . 8932`，1280×900 与 390×844）：
  - 生物 `6.6`、`7.12`、`7.13` 三页：0 console/page error、0 `.katex-error`、0 横向 overflow；`6.6` 标题为 `基因表达与细胞特化`，`7.12` 标题为 `种群变异`。
  - 四个 calc 页面在 1280 与 390 下共 8 次加载：0 console/page error、0 `.katex-error`、0 横向 overflow；标题均正确；四个页面都显示真实 LO/EK，未出现 `准确陈述定义、适用范围与符号约定`。
  - 四个 calc 页面另做 dark 主题 smoke check：0 console/page error、0 `.katex-error`。
  - `6.5`、`6.7` 的 related 已显示 `6.6 基因表达与细胞特化`；`7.11` 的 related 已显示 `7.12 种群变异`；7.13 的范围外覆盖问题见上。
- LO/EK 渲染文本长度（1280，innerText）：1.2 = 425/573；2.2 = 468/599；2.5 = 314/421；6.4 = 340/1024。

## 截图

`screenshots/titles-and-batch1-calc/`：

- `bio-u6-6.6-1280.png`
- `bio-u7-7.12-1280.png`
- `bio-u7-7.13-1280.png`
- `calc-u1-1.2-1280.png` / `calc-u1-1.2-390.png`
- `calc-u2-2.2-1280.png` / `calc-u2-2.2-390.png`
- `calc-u2-2.5-1280.png` / `calc-u2-2.5-390.png`
- `calc-u6-6.4-1280.png` / `calc-u6-6.4-390.png`
