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

6. **思维导图灰色节点修复**
   - 根因：关系边中点手柄（半径 0.28、纯灰 `0x9a9a9a`）与知识点球（0.32）尺寸接近，被误认为未上色的灰色知识点
   - 修复：手柄缩至 0.11，改取两端知识点的单元色混色；点击热区 1.4 → 0.62，减少误触
   - 抽检 bio/math/mech/em 浅色 + bio 深色：灰色节点消失，关系点仍可辨识/点击

7. **全站 Playwright bug sweep**
   - 新增 `scripts/build-routes.mjs`（481 routes）与 `scripts/serve-dev.py`（keep-alive + backlog 256）
   - `SWEEP_CONCURRENCY=8 node scripts/bug-sweep.mjs full`：481 routes × 3 viewports × 2 themes，**0 issue**
   - 报告：`audit/bug-sweep.json` / `audit/bug-sweep.md`
   - 注意：`python3 -m http.server` 在 6+ 并发下会出现 `ERR_CONNECTION_RESET`，属测试服问题，不是页面 bug

8. **Enrichment 映射修复 + batch2 起步**
   - batch1 修正 7 处 key 错位：bio 3.1 / 1.1 / 4.6、mech 3.1 / 2.5、em 11.1；电容器 10.3 内容重写
   - 同步修正相关链接（酶、水、细胞周期、功–能、牛顿第三、电流）
   - `data/enrichments/batch2.js` 新增 9 条：P2.5 酶、4.4 反馈、6.4 翻译、2.3 质膜、6.7 突变、7.11 灭绝、1.5 核酸、2.5 膜运输、3.4 光合作用
   - 验证：23 条 enrichment 的 key/related 全部命中；23 个 topic 页 0 error、0 KaTeX error

### 已推送 SHA（截至收工）

| 仓库 | SHA | 说明 |
|------|-----|------|
| science-viz（本地） | `ba3a3d2` | 含 figures 接线 + math practice |
| science-viz-web `main` | `838af10` | 已 push |
| science-viz-app `main` | `83d4430` | stamp + sync；另有 `89aa930` favicon sync 脚本 |

（本 TODO 提交后 web/app SHA 会再前进一次。）

---

## 未完成与下一步

### 1. 全站 Playwright bug sweep（✅ 已完成 2026-11-05）
- **结果**：481 routes × 3 viewports × 2 themes（2886 jobs），**0 issue**；报告见 `audit/bug-sweep.json` / `audit/bug-sweep.md`。
- **复跑步骤**：
  1. `node scripts/build-routes.mjs`
  2. `python3 scripts/serve-dev.py . 8765`
  3. `SWEEP_CONCURRENCY=8 node scripts/bug-sweep.mjs full`
- **注意**：不要用默认 `python3 -m http.server` 跑高并发 sweep，其 backlog=5 会导致 `ERR_CONNECTION_RESET` 假阳性。

### 2. 内容 enrichment（batch 续写）
- **状态**：batch1 已修正 7 处 key 错位（bio 3.1 / 1.1 / 4.6、mech 3.1 / 2.5、em 11.1），电容器 10.3 重写；batch2 已写 9 条（P2.5 酶、4.4 反馈、6.4 翻译、2.3 质膜、6.7 突变、7.11 灭绝、1.5 核酸、2.5 膜运输、3.4 光合作用）。
- **下一步**：按 `audit/topic-depth.json` 的 `rows` 以 `words` 升序继续写 batch2（当前 23/340 已 enrichment），经 `wrapCourseData` 挂载；每批后抽检 topic 页 KaTeX。
- **注意**：`audit/topic-depth.json` 已由 `scripts/build-topic-depth.mjs` 重新生成（340 topics，含 enriched 标记）。

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

- ~~**全量 5s sweep 未完成**~~ → 已完成：481 routes × 3 viewports × 2 themes，0 issue（`audit/bug-sweep.md`）。
- **enrichment 覆盖仍薄**：23/340 已 enrichment；多数 bio topic 仍为模板正文，需继续按 CED 续写。
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

- [x] 思维导图灰色节点修复：关系中点已缩小并着单元色（2026-11-05）
