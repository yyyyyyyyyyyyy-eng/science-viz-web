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

### 已推送 SHA（截至收工）

| 仓库 | SHA | 说明 |
|------|-----|------|
| science-viz（本地） | `ba3a3d2` | 含 figures 接线 + math practice |
| science-viz-web `main` | `838af10` | 已 push |
| science-viz-app `main` | `83d4430` | stamp + sync；另有 `89aa930` favicon sync 脚本 |

（本 TODO 提交后 web/app SHA 会再前进一次。）

---

## 未完成与下一步

### 1. 全站 Playwright bug sweep（优先）
- **状态**：`scripts/bug-sweep-full.py` 已写好；今日跑到约 **120/442 × 6 workers ≈ 27%**（watch=5s，issues=0），收工时已停止，**未写出最终报告**。
- **下一步**：
  1. `python3 -m http.server 8765`（或现有静态服）
  2. `SWEEP_WORKERS=6 nohup python3 scripts/bug-sweep-full.py > /tmp/full-sweep.log 2>&1 &`
  3. 跑完后确认 `audit/bug-sweep.json` + **`audit/bug-sweep.md`**
  4. 修严重项 → 再全量/抽检 → commit/push
- **注意**：旧的 `audit/bug-sweep.json`（21:21）是更早短扫，勿当本次全量结果。

### 2. 内容 enrichment（batch 续写）
- **状态**：`data/enrichments/batch1.js` 约 14 个知识点；`batch2.js` 仍是空占位。
- **下一步**：按 `audit/topic-depth.json` 的 `rows` 以 `words` 升序继续写 batch2（大量 bio 仍 ~56–59 词），经 `wrapCourseData` 挂载；每批后抽检 topic 页 KaTeX。

### 3. 数学练习（可选加深）
- **状态**：单元族模板已替换污染；题干仍有模板重复（同族内旋转），非跨单元错误拷贝。
- **下一步**：按 CED 为高频 topic 加更多原创 FRQ/刺激；核对 generator（power/chain/…）与单元匹配；继续禁止 slash 分式。

### 4. 生物/数学图（维护）
- **状态**：接线完成；预览 `audit/figure-preview-bio-math.html`，清单 `audit/figure-coverage-bio-math.md`。
- **下一步**：全量 topic 路由扫一遍图挂载；暗色主题对比度；与物理图标题「AP 考试常见图示」已对齐。

### 5. 物理 figure-audit（收尾）
- **状态**：主 finding 已修；审计原文见 `/workspace/audit-figures-coding2.md`（及仓内相关笔记）。
- **下一步**：对 conical-pendulum / rolling-incline / disk-string / force-position / rc / rl 做 PNG 或页面复检后勾掉清单。

### 6. Mac 桌面打包与 Release
- **状态**：app 仅 README stamp + `app/` 本地 sync；未跑 `npm run dist` / GitHub Release。
- **下一步**：
  1. `cd science-viz-app && npm run sync && npm run dist:mac`
  2. 真机打开冒烟（topic 图、练习、map）
  3. 打 tag / Release 上传 zip（arm64/x64）
  4. README stamp 写明 web SHA

---

## 已知问题

- **全量 5s sweep 未完成** → 无权威 `bug-sweep.md`；潜在溢出/死链/控件问题未清点。
- **enrichment 覆盖仍薄**：多数 topic 仍短正文；batch1 未覆盖全部最薄项。
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
| `audit/topic-depth.json` | 340 topics 深度（enrichment 排序） |
| `audit/bug-sweep.json` | 上次短扫（非今日全量） |
| `audit/bug-sweep.md` | **待全量 sweep 生成** |
| `/workspace/audit-figures-coding2.md` | 物理 figure-audit 原报告（工作区） |
| `/workspace/audit-coding2.md` | 内容准确度审计（E latex 等，已修过一批） |
| `data/enrichments/batch1.js` / `batch2.js` |  enrichment 覆盖层 |
| `scripts/bug-sweep-full.py` | 全路由 5s × 多 viewport/主题 |
| `scripts/math-practice-templates.mjs` | 数学练习单元族模板 |

---

## 建议明日顺序

1. 跑完 bug-sweep-full → 写 `audit/bug-sweep.md` → 修严重项并 push  
2. enrichment batch2（先 bio 最薄 CED 点）  
3. 物理 figure-audit 页面复检勾选  
4. Mac dist + Release  
