# Physics C 考试图示覆盖清单（Mechanics + E&M，含先修）

图示库：`modules/physics/exam-figures.js`（56 张独立 SVG 图示，挂载到 14 个物理模块中，共 59 处显示）。
每个模块页 `#/m/<id>` 底部有一个“AP 考试常见图示”区块。知识点页通过 `data/` 里的 `modules` 链接跳转过去。

尺寸约束：每张图都是固定 400×260 viewBox 的 SVG，放在 `width:100%; max-width:min(100%,480px); aspect-ratio:400/260; contain:size layout paint` 的容器里。宽度不会超过所在列，也不会超过 480px，比例固定，窗口变宽时不会继续变大（已用 Playwright 在 380 / 1280 / 1900px 宽度下验证）。
数学标签：图内用 SVG 绘制上下堆叠的分数；图注用 KaTeX `\dfrac`。
颜色约定：力 = 主题强调色，速度/动量 = 蓝，加速度 = 绿，E = 红，B = 紫，电流 = 橙。

## 必须覆盖的变体

| # | 主题 | 变体 | 图示 id | 所在模块 | 状态 |
|---|------|------|---------|----------|------|
| 1 | SHM | 水平弹簧振子 | `shm-horizontal` | shm | ✅ |
| 2 | SHM | 竖直弹簧振子（Δy = mg/k） | `shm-vertical` | shm | ✅ |
| 3 | SHM | 单摆（带 mg sinθ / mg cosθ 分量） | `pendulum-simple` | shm | ✅ |
| 4 | SHM | 物理摆 | `pendulum-physical` | shm | ✅ |
| 5 | SHM | x、v、a 随 t 图（三图对齐） | `shm-graphs` | shm | ✅ |
| 6 | 斜面 | 光滑斜面 | `incline-frictionless` | newton-incline | ✅ |
| 7 | 斜面 | 有摩擦：下滑（动摩擦） | `incline-kinetic` | newton-incline | ✅ |
| 8 | 斜面 | 有摩擦：静止（静摩擦） | `incline-static` | newton-incline | ✅ |
| 9 | 斜面 | 斜面 + 滑轮 + 悬挂物 | `incline-pulley` | newton-incline | ✅ |
| 10 | 阿特伍德机 | 竖直阿特伍德机 | `atwood` | newton-incline | ✅ |
| 11 | 阿特伍德机 | 桌面滑块 + 桌边滑轮 | `table-pulley` | newton-incline | ✅ |
| 12 | 圆周运动 | 倾斜弯道（无摩擦） | `banked-frictionless` | newton-incline | ✅ |
| 13 | 圆周运动 | 倾斜弯道（有摩擦，v_max） | `banked-friction` | newton-incline | ✅ |
| 14 | 圆周运动 | 圆锥摆 | `conical-pendulum` | newton-incline, gravity-orbit | ✅ |
| 15 | 圆周运动 | 竖直圆环（顶部 / 底部 / 侧点） | `vertical-loop` | newton-incline, work-energy | ✅ |
| 16 | 转动 | 纯滚动下坡（f_s 沿坡向上） | `rolling-incline` | rigid-rotation | ✅ |
| 17 | 转动 | 纯滚动各点速度（0 / v / 2v） | `rolling-velocity` | rigid-rotation | ✅ |
| 18 | 转动 | 端点转轴细杆 | `rod-pivot` | rigid-rotation | ✅ |
| 19 | 转动 | 圆盘 + 绕绳悬挂物 | `disk-string` | rigid-rotation | ✅ |
| 20 | 碰撞 | 一维弹性碰撞 | `collision-elastic` | collision-momentum | ✅ |
| 21 | 碰撞 | 完全非弹性碰撞 | `collision-inelastic` | collision-momentum | ✅ |
| 22 | 碰撞 | 二维碰撞 | `collision-2d` | collision-momentum | ✅ |
| 23 | 碰撞 | 冲击摆 | `ballistic-pendulum` | collision-momentum | ✅ |
| 24 | 动量图像 | F–t 冲量图 | `impulse-graph` | collision-momentum | ✅ |
| 25 | 动量图像 | p–t 图（两车碰撞） | `momentum-graph` | collision-momentum | ✅ |
| 26 | 高斯面 | 球面 | `gauss-sphere` | gauss-law | ✅ |
| 27 | 高斯面 | 圆柱面 | `gauss-cylinder` | gauss-law | ✅ |
| 28 | 高斯面 | 平面（柱形盒） | `gauss-plane` | gauss-law | ✅ |
| 29 | 电路 | 串联 | `circuit-series` | rc-circuit | ✅ |
| 30 | 电路 | 并联 | `circuit-parallel` | rc-circuit | ✅ |
| 31 | 电路 | RC 电路图（a 充电 / b 放电） | `rc-circuit` | rc-circuit | ✅ |
| 32 | 电路 | RC 充电 q(t)、I(t) | `rc-charging` | rc-circuit | ✅ |
| 33 | 电路 | RC 放电 q(t)、\|I(t)\| | `rc-discharging` | rc-circuit | ✅ |
| 34 | 电路 | RL 电路 + I(t) | `rl-circuit` | faraday-induction | ✅ |
| 35 | 电路 | LC 电路 + q(t)、I(t) | `lc-circuit` | faraday-induction | ✅ |
| 36 | 电容器 | 充满电介质 | `capacitor-dielectric` | capacitor | ✅ |
| 37 | 电容器 | 部分填充（并联型 / 串联型） | `capacitor-dielectric-partial` | capacitor | ✅ |
| 38 | 磁场 | 长直导线（俯视 + 侧视 ⊙/×） | `wire-field` | charged-particle-B | ✅ |
| 39 | 磁场 | 圆形电流环 | `loop-field` | charged-particle-B | ✅ |
| 40 | 磁场 | 螺线管 | `solenoid-field` | charged-particle-B | ✅ |
| 41 | 法拉第 | 导轨上滑动导体棒 | `faraday-rod` | faraday-induction | ✅ |
| 42 | 法拉第 | 变化磁场中的线圈 | `faraday-changing-B` | faraday-induction | ✅ |
| 43 | 安培环路 | 长直导线外圆形环路 | `ampere-wire` | charged-particle-B | ✅ |
| 44 | 安培环路 | 粗导线内部（r < R）+ B(r) 图 | `ampere-thick-wire` | charged-particle-B | ✅ |
| 45 | 安培环路 | 螺线管矩形环路 | `solenoid-field` | charged-particle-B | ✅ |

## 额外补充的常考图示
`kin-graphs`（x/v/a–t）、`projectile`、`orbit`、`force-position`（F–x 面积、U(x)）、`ladder`（转动静力学）、`point-charge-field`、`dipole-field`（逐点由库仑定律计算）、`parallel-plate-potential`、`gauss-conductor`、`capacitor-plate`、`circuit-kirchhoff`、`particle-in-B`。

## 知识点 → 模块（图示）映射

力学：1.1–1.2 → projectile；2.1–2.5 → newton-incline（2.4 另链 gravity-orbit）；2.6 → gravity-orbit；3.1–3.4 → work-energy；4.1–4.2 → collision-momentum；5.1–5.3、6.1–6.3 → rigid-rotation；6.4 → gravity-orbit；7.1–7.3 → shm。
电磁：8.1–8.3 → electric-field；8.4–8.5、10.1–10.2 → gauss-law；9.1–9.4 → electric-potential；10.3–10.4 → capacitor；11.1–11.8 → rc-circuit；12.1–12.4 → charged-particle-B；13.1–13.6 → faraday-induction。
先修（mech-prep-hs / mech-prep-ap1 / mech-prep-found / mech-prep-math / em-prep-found）：每个先修知识点都链接到对应模块（例如 P1.12 SHM → shm，P1.15 电路 → rc-circuit，P1.8 通量 → gauss-law，P3.4 微分方程 → rc-circuit，P3.5 小角近似 → shm）。
唯一没有加链接的是 mech-prep-found P1.1“Measurement and Units”，因为它没有对应的考试图示变体。

## 物理方向核对（关键点）
- 斜面：N ⊥ 斜面；mg 竖直向下；分量 mg sinθ 沿斜面向下、mg cosθ 垂直斜面向内；f_k 与滑动方向相反；静止时 f_s = mg sinθ，沿斜面向上。
- 倾斜弯道 / 圆锥摆：a_c 水平指向圆心；无摩擦时 tanθ = v²/(rg)；以 v_max 运动时 f_s 沿坡面向下。
- 竖直圆环：顶部 N 和 mg 都向下；底部 N 向上；侧点 N 指向圆心。
- 纯滚动下坡：f_s 沿坡向上，ω 顺时针（向右下滚动），接触点 v = 0，顶点 2v_cm。
- 导线：I 向上时，右侧 B 入纸面（×）、左侧出纸面（⊙）；I 出纸面时 B 逆时针。
- 螺线管：上排 ⊙、下排 × ⇒ 管内 B 向右（已按 Biot–Savart 叉积核对）。
- 滑杆：B 入纸面、v 向右 ⇒ Φ 增大 ⇒ I 逆时针（杆中向上），F = IL×B 向左。
- 变化 B：B 出纸面且增大 ⇒ I 顺时针。
- 磁场中 +q：v 向右、B 入纸面 ⇒ F 向上 ⇒ 逆时针圆周。
- RC / RL：在 t = τ 处标出 63% / 37%；LC 中 q = Q₀cos ωt，I = −Q₀ω sin ωt。

## 自检记录（2026-11-06）

- 复核已推送提交 web `d88ae70` / app `55b7ce0`，在 web `2a27135` 之上追加本记录。
- Playwright 复检（1440×1000，light/dark，2×）：`conical-pendulum`、`rolling-incline`、`disk-string`、`force-position`、`rc-circuit`、`rc-charging`、`rc-discharging`、`rl-circuit`；16 个图实例，0 console/page error，0 KaTeX error，0 图注溢出，0 SVG 文本重叠或出界，400×260 比例保持。
- 公式复核：conical 周期 `T_0` / 张力 `T`；rolling / disk 嵌套分母；force-position `F_app = kx` 与 `F_s = −dU/dx = −kx`；RC / RL 指数 `e^{−t/RC}`、`e^{−t/τ}` 均为 `\dfrac`；目标图 `tex` 无单层 `\frac`。
- 与已提交 PNG 逐张比对：图形内容一致；后续无关页面改动只带来 0–2px 截图偏移/高度差，无视觉回归。明暗两套标签均可读，无新对比度问题。
- 关键力学变体计数：2.3 力/斜面 4、2.4 圆周 4、3.1 功–能 2、4.2 碰撞 4、5.3 转动 3、6.1 滚动 2、7.1 SHM 3；明暗两套均 0 error。
- 结论：未发现新的公式、标签重叠、溢出或对比度问题；未改图，仅追加本记录。
