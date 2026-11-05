# 科学可视化平台

纯前端（HTML / CSS / JS ES Modules）的多学科交互可视化站点，覆盖生物、数学、物理核心知识点。默认浅色主题（Claude 暖奶油色 + Apple 编辑索引风：直角、无卡片、无阴影），支持深浅色切换；中文界面、响应式布局，无需构建工具与外部 CDN。

## 设计参考

UI 依据 GitHub [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) 中的设计规格：

- [design-md/claude/DESIGN.md](https://github.com/VoltAgent/awesome-design-md/blob/main/design-md/claude/DESIGN.md) — 暖奶油画布、coral 点缀、暖色深色表面
- [design-md/apple/DESIGN.md](https://github.com/VoltAgent/awesome-design-md/blob/main/design-md/apple/DESIGN.md) — SF 系统字体、大留白、细边框、胶囊按钮、克制阴影

画布配色通过 CSS 变量（`js/theme.js` → `themeColors()`）读取，随主题切换同步。

视觉约束（v2）：直角（`border-radius: 0`）、无卡片浮层、无阴影、无 emoji；首页为编号索引列表（发丝分割线）。

## 功能

- 首页按学科浏览知识点卡片，支持搜索过滤
- Hash 路由：`#/` 起始页、`#/all` 索引、`#/paths` 学习路径、`#/<学科>`、`#/<学科>/<章节>`、`#/m/<模块id>`
- 每个模块：中文说明、交互画布、参数滑块、实时读数 / 图表
- 右上角深浅色主题切换（记忆在 `localStorage`）
- 顶栏学科悬停/触控展开二级目录（章节 → 模块）
- 学科页：左侧章节导航 + 滚动高亮；模块页：侧栏目录、面包屑、上一/下一模块
- 快捷键：`←` `→` 切换模块，`/` 聚焦搜索，`Ctrl/Cmd+K` 命令面板，`Esc` 关闭菜单
- 记忆上次访问模块（`localStorage`）
- 模块统一在 `modules/registry.js` 注册，便于扩展

## 目录结构

```
science-viz/
├── index.html              # 入口
├── css/main.css            # 全局样式（浅/深主题）
├── js/
│   ├── app.js              # 应用启动与路由绑定
│   ├── router.js           # Hash 路由
│   ├── theme.js            # 主题切换与画布色板
│   └── ui.js               # DOM / 控件 / Canvas 辅助
├── modules/
│   ├── registry.js         # 模块注册表（学科 > 章节 > 模块）
│   ├── biology/            # 生物模块
│   ├── math/               # 数学模块
│   └── physics/            # 物理模块
├── screenshots/            # 验证截图
│   ├── redesign/           # 重设计验收截图
│   ├── redesign-v2/
│   ├── v3/
│   └── v4/                 # 起始页与学习路径验收截图
└── README.md
```

## 首批模块（10）

| 学科 | ID | 标题 |
|------|-----|------|
| 生物 | `mitosis` | 细胞有丝分裂 |
| 生物 | `dna-replication` | DNA 复制 |
| 生物 | `lotka-volterra` | 种群动态 |
| 数学 | `function-graph` | 函数图像 |
| 数学 | `derivative-tangent` | 导数与切线 |
| 数学 | `taylor-series` | 泰勒级数 |
| 数学 | `unit-circle` | 单位圆与三角函数 |
| 物理 | `projectile` | 抛体运动 |
| 物理 | `shm` | 简谐振动 |
| 物理 | `electric-field` | 电场线 |

## 如何运行

必须通过本地 HTTP 服务打开（ES Module 无法用 `file://`）：

```bash
cd science-viz
python3 -m http.server 8765
# 浏览器访问 http://127.0.0.1:8765/
```

或：

```bash
npx --yes serve -l 8765
```

## 如何新增模块

1. 在 `modules/<学科>/` 下新建文件，例如 `modules/math/my-module.js`。
2. 导出 `create(viz, controls, opts)`：在 `viz` 中放入画布，在 `controls` 中放入滑块/按钮；返回清理函数（取消 `requestAnimationFrame`、断开 `ResizeObserver` 等）。
3. 绘制颜色请使用 `import { themeColors, rgba } from '../../js/theme.js'`，在 `draw` 内调用 `themeColors()`，以便适配浅/深主题。
4. 在 `modules/registry.js` 的 `MODULES` 数组追加一项：

```js
{
  id: 'my-module',
  subject: 'math', // bio | math | physics
  title: '我的模块',
  chapter: '章节名',
  summary: '卡片摘要',
  explanation: '模块页顶部说明（准确、简洁）',
  tags: ['关键词'],
  load: () => import('./math/my-module.js'),
}
```

5. 刷新页面即可在首页看到新卡片；路由为 `#/m/my-module`。

可复用 `js/ui.js` 中的 `slider`、`button`、`checkbox`、`select`、`fitCanvas`、`observeSize`、`readoutBar` 等。

## 技术说明

- 无打包、无框架；原生 ES modules
- Canvas 2D 绘制为主；按设备像素比适配
- 数值方法：RK4（Lotka–Volterra）、欧拉 / 半隐式欧拉（抛体、阻尼振动）等
- 设计 token 以 CSS 自定义属性维护；`data-theme="light|dark"` 切换

## 许可

教学演示用途，可自由修改与扩展。

## v7 · AP CED 知识体系

课程（含预备层）：

- **生物**：化学基础 + 高中生物基础 → AP Biology（8 units）
- **微积分**：代数 / 函数 / 三角 / 预备微积分 → AP Calculus BC（含 Unit 0 预备 + 10 units）
- **力学**：物理基础 + AP Physics 1 核心 + 物理用数学 → AP Physics C: Mechanics（7 units，2024–25 CED）
- **电磁**：电磁预备 → AP Physics C: E&M（Units 8–13）

每个官方 topic 都有可点击详解页（定义、公式、条件、误解、例题、AP 提示）；有可视化的 topic 另挂交互模块。学科页提供 3D 知识图谱 `#/<subject>/map`（预备节点灰色，AP 按 unit 着色）。

### 本地预览（Web / GitHub Pages）

纯静态，相对路径。任意静态服务器即可：

```bash
python3 -m http.server 8080
# 打开 http://127.0.0.1:8080/index.html
```

部署到 GitHub Pages 时使用仓库根或 `/docs`；已提供 `404.html` 将未知路径导回 `index.html`（hash 路由）。

### macOS 桌面应用（Electron）

产物在 `dist/`：

- `科学可视化-1.0.0-mac.zip`（Intel x64）
- `科学可视化-1.0.0-arm64-mac.zip`（Apple Silicon）

**打开未签名应用**：解压后，若 Gatekeeper 拦截，请对 `科学可视化.app` **右键 → 打开**（或系统设置 → 隐私与安全性 → 仍要打开）。不要双击两次忽略提示。

重新打包：

```bash
cd desktop
npm install
npx electron-builder --mac zip --x64 --arm64 --publish never
```

### 交互约定

控件命中区域 ≥ 44×44px；滑块支持指针捕获拖出轨道、键盘微调（Shift 大步）、双击标签/数值复位；Playwright `verify-v7.py` 会审计命中框。

### 验证

```bash
python3 verify-v7.py
```

截图：`screenshots/v7/`。

## Delivery notes (2026-11-05 Asia/Shanghai)

- Maps: 3-tier stage→unit→topic organic hierarchy; capsule stages; 59 curated cross-topic edges
- Past papers: year-specific verified FRQ paraphrases for 2023–2026 (104 rows); 2020 hub-only; 2021–22 omitted (unverifiable PDFs)
- Module numeric audit: 31/31 — see `audit/REPORT.md`
- Screenshots: `screenshots/final/`
- Private delivery repo — do not push unless the owner asks
