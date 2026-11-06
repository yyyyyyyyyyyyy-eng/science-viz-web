# TODO — 科学可视化平台（2026-11-05 Asia/Shanghai 收工）

## 今日已完成

1. **生物 / 微积分考试图接入 topic 页**
   - `data/math/figlib.js` 的 `renderFigures` 与物理侧共用 `.exam-figures` CSS
   - `js/topic-page.js`：bio/math 在正文后调用 `renderFigures(root, topic.figures)`
   - `getTopic()` 已带 `figures`（math 174 + bio 125 = 299；checklist 覆盖 247 topics）
   - 抽检 `#/t/math/...`、`#/t/bio/...`：有图、0 console error、scrollHeight 无增长

2. **物理 figure-audit 修复**（`modules/physics/exam-figures.js`）
   - conical-pendulum：周期用 \(T_0\)，张力用 \(T\)
   - rolling-incline / disk-string：主公式嵌套堆叠分母（`nestedDen`）
   - force-position：\(F_{\mathrm{app}}=kx\) vs \(F_s=-dU/dx=-kx\)
   - RC / RL：指数改为 `exp(−t/RC)` + KaTeX `\dfrac`
   - 文案「接着电源」→「接上电源」；若干次要 slash / orbit 标注

3. **favicon.ico**
   - 根目录 `favicon.ico` + `index.html` link；消除 `/favicon.ico` 404
   - app `scripts/sync-web.sh` 已包含 ico

4. **数学练习库按单元族重写**
   - `scripts/math-practice-templates.mjs` + `build-practice-v9.mjs`（`MATH_ONLY=1`）
   - 去掉跨单元复制的「瞬时与平均变化率」污染题干；符号检查 + `\dfrac`
   - 15 个 math bank，约 898 题已重生并推送

5. **收工前关键路由抽检**：首页 / 四科 / 典型 topic / math practice / map — **0 console errors**；favicon 200

6. **思维导图灰色节点修复（item 1，2026-11-06 完成）**
   - 根因：关系边中点手柄（半径 0.28、纯灰 `0x9a9a9a`）与知识点球（0.32）尺寸接近，被误认为未上色的灰色知识点
   - 修复：手柄缩至 0.085 中性小点（保留 1.4 命中区），关系点仍可 hover/点击/Shift 多选；知识点颜色经父单元 `unitByChapter` 解析，unitIndex 缺失时按 chapterId 稳定回退
   - 验证：四科 × 明暗 8 张 `screenshots/mindmap-colors/{bio,math,mech,em}-{light,dark}.png`；全部 topic 非灰，标签 0 重叠 / 0 越界、节点 0 裁剪、0 console error

7. **全站 Playwright bug sweep**
   - 新增 `scripts/build-routes.mjs`（481 routes）与 `scripts/serve-dev.py`（keep-alive + backlog 256）
   - `SWEEP_CONCURRENCY=8 node scripts/bug-sweep.mjs full`：481 routes × 3 viewports × 2 themes，**0 issue**
   - 报告：`audit/bug-sweep.json` / `audit/bug-sweep.md`
   - 注意：`python3 -m http.server` 在 6+ 并发下会出现 `ERR_CONNECTION_RESET`，属测试服问题，不是页面 bug

8. **Enrichment 映射修复 + batch2 起步**
   - batch1 修正 7 处 key 错位：bio 3.1 / 1.1 / 4.6、mech 3.1 / 2.5、em 11.1；电容器 10.3 内容重写
   - 同步修正相关链接（酶、水、细胞周期、功–能、牛顿第三、电流）
   - `data/enrichments/batch2.js` 新增 27 条：P2.5 酶、4.4 反馈、6.4 翻译、2.3 质膜、6.7 突变、7.11 灭绝、1.5 核酸、2.5 膜运输、3.4 光合作用、3.5 细胞呼吸、4.7 有丝分裂、7.10 物种形成、2.9 区隔化、8.2 能量流、6.8 生物技术、7.9 系统发生、2.2 细胞大小、2.4 膜通透性、2.6 促进扩散、3.3 细胞能量、4.1 细胞通讯、4.3 信号转导、4.5 细胞周期、7.2 自然选择、7.3 人工选择、7.4 群体遗传、7.7 共同祖先
   - 验证：41 条 enrichment 的 key/related 全部命中；41 个 topic 页 0 error、0 KaTeX error

### 已推送 SHA（截至收工）

| 仓库 | SHA | 说明 |
|------|-----|------|
| science-viz（本地） | `ba3a3d2` | 含 figures 接线 + math practice |
| science-viz-web `main` | `05e3672` | 含 bio/math round2 第二变体；见下方 §4 |
| science-viz-app `main` | `02f7fba` | sync 自 web；见下方 §4 |

（web `05e3672` / app `02f7fba`：bio/math round2 第二变体。）

---

## 未完成与下一步

### 1. 全站 Playwright bug sweep（✅ 已完成 2026-11-06）
- **结果**：UI 重设计（`5d6f63d` / `84c33f5`）后重跑 481 routes × 3 viewports × 2 themes（2886 jobs），**0 issue**；报告见 `audit/bug-sweep.json` / `audit/bug-sweep.md`（2026-11-06T13:03Z）。
- **额外修复**：`#/t/mech/mech-u5/5.3` 图注分数底部被 `figcaption` 裁切；仅在 `modules/physics/exam-figures.js` 为 5 个含堆叠分数的图注追加不可见 descent phantom，未改共享 CSS；明暗/桌面/手机复核通过，截图见 `screenshots/bug-sweep/`。
- **复跑步骤**：
  1. `node scripts/build-routes.mjs`
  2. `python3 scripts/serve-dev.py . 8765`
  3. `SWEEP_CONCURRENCY=8 node scripts/bug-sweep.mjs full`
- **注意**：不要用默认 `python3 -m http.server` 跑高并发 sweep，其 backlog=5 会导致 `ERR_CONNECTION_RESET` 假阳性。

### 2. 内容 enrichment（batch 续写）
- **状态**：batch1 已修正 7 处 key 错位（bio 3.1 / 1.1 / 4.6、mech 3.1 / 2.5、em 11.1），电容器 10.3 重写；batch2 已写 27 条（P2.5 酶、4.4 反馈、6.4 翻译、2.3 质膜、6.7 突变、7.11 灭绝、1.5 核酸、2.5 膜运输、3.4 光合作用、3.5 细胞呼吸、4.7 有丝分裂、7.10 物种形成、2.9 区隔化、8.2 能量流、6.8 生物技术、7.9 系统发生、2.2 细胞大小、2.4 膜通透性、2.6 促进扩散、3.3 细胞能量、4.1 细胞通讯、4.3 信号转导、4.5 细胞周期、7.2 自然选择、7.3 人工选择、7.4 群体遗传、7.7 共同祖先）。
- **下一步**：按 `audit/topic-depth.json` 的 `rows` 以 `words` 升序继续写 batch2（当前 41/340 已 enrichment），经 `wrapCourseData` 挂载；每批后抽检 topic 页 KaTeX。
- **注意**：`audit/topic-depth.json` 已由 `scripts/build-topic-depth.mjs` 重新生成（340 topics，含 enriched 标记）。

### 3. 数学练习（可选加深）
- **状态**：已修复 `calc-u10-q006` 比值极限（`1/e`）与 198 条泛化 FRQ 答案；`x^{1}` 已归一。新增 8 组原创 AP Calc BC FRQ（24 题）：切线、相关变化率、优化、平均值/FTC、分离变量、截面体积、极坐标面积、级数收敛区间。
- **下一步**：可选替换泛化 meta-MCQ；继续按 CED 去重同族符号题；保持 `\dfrac`、禁止 slash 分式。

### 4. 生物/数学图（维护）
- **状态**：✅ round2 完成（2026-11-06）。原先 38 个单图 topic（bio 11 / math 27）均已补上第二张考试风格变体；`TOPIC_FIGURES` 现为 bio 89 topics / 0 singles / 89 multi，math 158 / 0 / 158。新增图例包括 macromolecule-compare、nucleotide-anatomy、endosymbiosis-evidence、isolation-barriers、extinction-rates、chnops-table、stoich-particles、polymer-linkages、phenotype-matrix、selection-response、error-bars，以及 27 个 math round2 stem（angle-pairs、arc-sector、congruence-tests、vector-components 等）。
- **验证**：`node --check` 逐个通过 `data/bio/figures.js`、`data/math/figures.js`、`data/math/figlib.js`；`MATH_NOTATION_OK`。placements 219（bio）+ 339（math）= 558；mounted unique 147 + 202 = 349。全量 remount 247 topics × 明暗 = 494 loads（1280×900 与 380×800 各一轮）：558 figures，0 empty/overflow/KaTeX/console/page error；38 张新图 bbox sweep 0 出界、0 文字重叠。明暗截图 76 张：`screenshots/figures-bio-math/round2/`。审计：`audit/figure-gaps-bio-math.md`、`audit/figure-coverage-bio-math.md`（均改为 0 singles）。
- **下一步**：单图 gap 已清零；round2 topic remount 已完成；E&M 11.4/11.6/11.7 补图见第 5 项（只改 `modules/physics/exam-figures.js`）。

### 5. 物理 figure-audit（收尾）
- **状态**：主 finding 已修并完成明暗两套页面复检；物理图示已扩充到 108 张（104 张原创 SVG + 4 张公开授权参考图），高频 topic 达到 3–6 张（2.3 / 2.4 / 4.2 / 5.3 / 8.5 为 6 张）。
- **新增**：运动图、能量/动量条形图、电梯视重、摩擦力图、平弯道、开普勒椭圆、力矩、转动惯量、纯滚动比赛、角动量、SHM 能量/相位、库仑力、场叠加、高斯球壳、电势能、电容器组合/储能、等效电路、电表接法、RC 储能、洛伦兹力、速度选择器、质谱仪、毕奥–萨伐尔、磁通量、感应电动势、电感/LC 能量等；4 张 Wikimedia Commons 参考图已在 `modules/physics/media/ATTRIBUTION.md` 记录来源与许可证。
- **下一步**：可选补 11.4 电功率、11.6/11.7 基尔霍夫单图 topic；Mac 打包见第 6 项。

### 6. Mac 桌面打包与 Release
- **状态**：app 仅 README stamp + `app/` 本地 sync；未跑 `npm run dist` / GitHub Release。
- **下一步**：
  1. `cd science-viz-app && npm run sync && npm run dist:mac`
  2. 真机打开冒烟（topic 图、练习、map）
  3. 打 tag / Release 上传 zip（arm64/x64）
  4. README stamp 写明 web SHA

---

### 7. UI / 交互重设计（2026-11-06）
- **状态**：完成（全局 chrome、导航/命令面板、首页/学科/章节、topic 阅读栏、练习、公式、mindmap、移动端）。
- **范围**：header/mega menu/移动抽屉；统一命令面板（页面 / 章节 / 知识点 / 实验）；首页索引与学科单元分组；topic 粘性目录与上一/下一；practice 题号栏、筛选计数、选择→检查→反馈；公式分组目录；四科知识图谱布局与交互。
- **关键修复**：桌面误显示“菜单”；移动抽屉被 header `backdrop-filter` 截断；公式目录 `#group-…` 与 hash router 冲突；公式页移动端长公式撑宽 grid；mindmap prep 区块过散、BC 标签碰撞、bio AP 过密、左拖旋转；topic/practice 访问污染“最近实验”。
- **交互回调（2026-11-06）**：按 owner 要求恢复默认左键/单指拖拽旋转、右键/双指拖拽平移；滚轮/双指缩放、点击查看、Shift/⌘ 多选不变；地图提示与 aria-label 已同步。
- **验证**：targeted Playwright 16 routes × light/dark + 8 mobile routes，0 console/page error；四科 map light/dark 标签重叠 0 / 越界 0；360/390/768/1024/1440 无横向溢出；可见交互元素均 ≥44×44；截图在 `screenshots/ui-redesign/`，设计记录见 `audit/ui-redesign.md`。
- **限制**：未重跑 481 路由全量 sweep；390px map 仍为宽图 overview（双指缩放与搜索可用）。

## 已知问题

- ~~**全量 5s sweep 未完成**~~ → 已完成：481 routes × 3 viewports × 2 themes，0 issue（`audit/bug-sweep.md`）。
- **enrichment 覆盖仍薄**：41/340 已 enrichment；多数 bio topic 仍为模板正文，需继续按 CED 续写。
- **math practice**：同族题干循环复用，深度仍不如手写题库。
- **web 仓**：本地可能有未跟踪的 `desktop/`、旧 `verify-*.py`（勿误提交无关大文件）。
- **本地 `science-viz` 无 remote**：以 web/app 的 GitHub 为准。

---

## 相关审计 / 清单路径

| 文件 | 用途 |
|------|------|
| `audit/figure-coverage-bio-math.md` | bio/math 图覆盖勾选 |
| `audit/figure-preview-bio-math.html` | bio/math 图 Playwright 预览页 |
| `audit/figure-coverage-physics.md` | 物理图覆盖 |
| `audit/topic-depth.json` | 340 topics 深度排序（含 enriched 标记） |
| `scripts/build-topic-depth.mjs` | 重新生成 topic-depth.json |
| `audit/bug-sweep.json` | 全量 sweep 原始结果（0 issue） |
| `audit/bug-sweep.md` | 全量 sweep 可读报告 |
| `scripts/build-routes.mjs` | 生成 481 条全站路由（`/tmp/routes.json`） |
| `scripts/serve-dev.py` | 高并发本地静态服（keep-alive + backlog 256） |
| `/workspace/audit-figures-coding2.md` | 物理 figure-audit 原报告（工作区） |
| `/workspace/audit-coding2.md` | 内容准确度审计（E latex 等，已修过一批） |
| `data/enrichments/batch1.js` / `batch2.js` |  enrichment 覆盖层 |
| `scripts/bug-sweep-full.py` | 全路由 5s × 多 viewport/主题 |
| `scripts/math-practice-templates.mjs` | 数学练习单元族模板 |

---

## 建议明日顺序

1. 继续 enrichment batch2（按 `audit/topic-depth.json` 升序选题）  
2. 物理 figure-audit 页面复检勾选  
3. Mac dist + Release

- [x] 思维导图灰色节点修复：关系中点缩小为中性小点，知识点按父单元浅色着色（2026-11-06 完成，见上）
