# Physics C 考试图示覆盖清单（Mechanics + E&M，含先修）

图示库：`modules/physics/exam-figures.js`（107 张原创 SVG + 4 张公开授权参考图，共 111 张；挂载到 14 个物理模块与 83 个 topic）。
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

## 扩充图示（2026-11-06）

本轮把高频 topic 从 1–4 张扩到 3–6 张，优先补充互补视角：受力图、图像、能量/动量条形图、特殊情形与公开授权参考图。

| Topic | 原 | 现 | 新增 |
|---|---:|---:|---|
| 1.1 一维运动学 | 1 | 3 | `motion-diagram`, `free-fall` |
| 1.2 二维运动学 | 2 | 3 | `projectile-range` |
| 2.3 牛顿定律 | 4 | 6 | `elevator`, `friction-graph` |
| 2.4 圆周运动 | 4 | 6 | `flat-curve`, `circular-vectors` |
| 2.5 牛顿第三定律 | 2 | 3 | `atwood-apparatus` |
| 2.6 万有引力 | 2 | 5 | `kepler-ellipse`, `gravitational-potential`, `orbit-energy` |
| 3.1 动能定理 | 2 | 5 | `energy-bars`, `work-incline`, `work-angle` |
| 3.3 机械能守恒 | 2 | 3 | `energy-bars` |
| 3.4 功率 | 0 | 1 | `power-graph` |
| 4.1 冲量与动量 | 2 | 3 | `momentum-bars` |
| 4.2 碰撞 | 4 | 6 | `momentum-bars`, `explosion` |
| 5.1 力矩与静力学 | 2 | 3 | `seesaw` |
| 5.2 转动运动学 | 1 | 2 | `angular-graphs` |
| 5.3 转动动力学 | 3 | 6 | `moment-of-inertia`, `rolling-race`, `angular-momentum-skater` |
| 6.1 / 6.2 / 6.3 | 2 | 3 | `rolling-race` / `angular-momentum-skater` / `rolling-race` |
| 6.4 轨道 | 1 | 2 | `orbit-energy` |
| 7.1 周期运动 | 3 | 5 | `shm-energy`, `shm-phase` |
| 7.2 单摆 | 2 | 4 | `pendulum-period`, `pendulum-apparatus` |
| 7.3 复摆 | 2 | 3 | `physical-pendulum-fbd` |
| 8.1 电荷与力 | 1 | 2 | `coulomb-force` |
| 8.2 / 8.3 电场 | 2 | 4 | `field-vectors`, `field-superposition`, `field-lines-equipotentials` |
| 8.4 电通量 | 3 | 4 | `flux-angle` |
| 8.5 高斯定律 | 4 | 6 | `gauss-shell`, `line-charge` |
| 9.1 / 9.2 / 9.3 / 9.4 | 1–2 | 2–4 | `potential-energy-sign`, `potential-point-charge`, `charge-in-field` |
| 10.1 / 10.2 导体 | 2 / 1 | 3 / 2 | `gauss-shell` |
| 10.3 / 10.4 电容器 | 1 / 2 | 3 / 3 | `capacitor-combinations`, `capacitor-energy` |
| 11.2 简单电路 | 2 | 4 | `circuit-equivalent`, `ammeter-voltmeter` |
| 11.3 电阻 | 2 | 3 | `ohmic-nonohmic` |
| 11.8 RC 电路 | 3 | 4 | `rc-energy` |
| 12.2 运动电荷 | 1 | 5 | `magnetic-force-rhr`, `cathode-ray-tube`, `velocity-selector`, `mass-spectrometer` |
| 12.3 毕奥–萨伐尔 | 2 | 3 | `biot-savart` |
| 12.4 安培定律 | 3 | 4 | `line-charge` |
| 13.1 磁通量 | 1 | 2 | `magnetic-flux-angle` |
| 13.2 电磁感应 | 2 | 3 | `flux-emf-graph` |
| 13.4 / 13.5 电感 | 2 / 1 | 3 / 2 | `inductor-energy` |
| 13.6 LC 电路 | 1 | 2 | `lc-energy` |

## 第二轮补充（2026-11-06：E&M 11.4 / 11.6 / 11.7）

本轮为电功率与基尔霍夫两个薄主题补第二视角图示，均为原创 SVG，固定 `400×260` viewBox，容器契约不变。新图同时加入 `rc-circuit` 模块图示库。

| Topic | 原 | 现 | 新增 |
|---|---:|---:|---|
| 11.4 电功率 | 1 | 2 | `power-series-parallel`（串联 I 相同 / 并联 V 相同，功率与 R 的比例关系） |
| 11.6 基尔霍夫环路 | 1 | 2 | `kirchhoff-loop-signs`（绕行方向、电池与电阻的电压符号） |
| 11.7 基尔霍夫结点 | 2 | 3 | `kirchhoff-junction`（四支路结点，流入 = 流出） |

图注使用 KaTeX `\dfrac`；含叠式分式或深下标的图注追加 `CAP_DESCENT`，避免图注容器底部裁切。自检见 `screenshots/figures-physics/em-11/`：1280×900 与 390×844、light/dark 共 12 次页面检查，新增图 0 console/page error、0 KaTeX error、0 横向溢出、0 SVG 文本越界或重叠，图注完整可见。

## 公开授权参考图

下载文件位于 `modules/physics/media/`，完整来源与许可证见 `modules/physics/media/ATTRIBUTION.md`。

| 图示 id | 文件 | 作者 | 许可证 |
|---|---|---|---|
| `atwood-apparatus` | `atwood-machine.svg` | MikeRun | CC BY-SA 4.0 |
| `pendulum-apparatus` | `simple-pendulum.svg` | Chetvorno | Public domain |
| `field-lines-equipotentials` | `field-lines-equipotentials.svg` | Sjlegg | Public domain |
| `cathode-ray-tube` | `cathode-ray-tube.svg` | Interiot, Theresa Knott | CC BY-SA 3.0 |

图注中显示作者 + 许可证 + Wikimedia Commons；未对原文件裁剪、改色或改写。

## 扩充自检（2026-11-06）

- 在 light/dark 两套主题、1440×1000 与 390×844 两种视口下复检扩充后的 29 个 topic：图数符合预期，0 console/page error，0 KaTeX error，0 图注横向溢出，0 SVG 文本重叠或出界，图片均加载成功。
- `node scripts/check-math-notation.mjs` 通过；新增图注无单层 `\frac` / `\tfrac`，指数分式统一为 `\dfrac`。
- 自检中修正：库仑力曲线裁切、电梯视重箭头越界、球壳标签重叠、电势曲线裁切、LC 图例重叠、动量条形图标签压线、细杆转动惯量斜杠分数、轨道能量曲线裁切、功率图轴标碰撞，以及既有 projectile / incline / SHM 图的少量标签碰撞。
- 新增 4 张公开授权参考图的 credit 行在明暗两套主题均可读；未改 `css/main.css`、`js/**` 或其他 session 文件。
- 对应提交：web `74ae379` / app `a2df169`。

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

- 复核已推送提交 web `d88ae70` / app `55b7ce0`；自检运行于 web `2a27135`，首条记录提交 `5f6cef3`，app 同步 `955d075`。
- Playwright 复检（1440×1000，light/dark，2×）：`conical-pendulum`、`rolling-incline`、`disk-string`、`force-position`、`rc-circuit`、`rc-charging`、`rc-discharging`、`rl-circuit`；16 个图实例，0 console/page error，0 KaTeX error，0 图注溢出，0 SVG 文本重叠或出界，400×260 比例保持。
- 公式复核：conical 周期 `T_0` / 张力 `T`；rolling / disk 嵌套分母；force-position `F_app = kx` 与 `F_s = −dU/dx = −kx`；RC / RL 指数 `e^{−t/RC}`、`e^{−t/τ}` 均为 `\dfrac`；目标图 `tex` 无单层 `\frac`。
- 与已提交 PNG 逐张比对：图形内容一致；后续无关页面改动只带来 0–2px 截图偏移/高度差，无视觉回归。明暗两套标签均可读，无新对比度问题。
- 关键力学变体计数：2.3 力/斜面 4、2.4 圆周 4、3.1 功–能 2、4.2 碰撞 4、5.3 转动 3、6.1 滚动 2、7.1 SHM 3；明暗两套均 0 error。
- 结论：未发现新的公式、标签重叠、溢出或对比度问题；未改图，仅追加本记录。
