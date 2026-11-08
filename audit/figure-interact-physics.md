# Physics exam figures — interaction pass (2026-11-08)

Scope: `modules/physics/exam-figures.js` + sibling `modules/physics/exam-figure-interact.js`, plus the screenshots in `screenshots/figures-interact-physics/`. No changes to `js/**`, `css/**`, bio/math figure data, enrichment data, or the standalone simulation modules.

## Contract kept

- Every figure is still a fixed `400 × 260` SVG (`width:100%`, existing `.exam-figure-box` wrapper, no layout CSS edits).
- The SVG is rendered by the existing `draw()` function. Controls pass parameters into the same function; there is no second “interactive” geometry.
- Control defaults are the old static constants. For every changed figure on the checked topics, the load-time SVG is pixel-identical to the pre-change static SVG (comparison against web `3c851b1`, see QA below).
- Controls are injected between the SVG and the caption from JS. Hit targets are 44 px (range tracks/thumb hit area, choice buttons). No cards, no rounding, no emoji; colours come from the existing theme variables.
- `CAP_DESCENT` and the shared caption/layout CSS are unchanged. Section title remains exactly `AP 考试常见图示`.
- Slider/choice changes only expose extra state after the first user input (`__dirty`), so the initial view has no extra markers or readouts inside the figure.
- Hover/click schematics dim the other labelled parts and update the hint line; click pins a part, keyboard Enter/Space works too.

## Coverage — 72 interactive figures

### Parametric mechanics (32)

| Figure | Controls |
|---|---|
| `projectile` | 发射角 θ 20–70° (55)；初速度 v₀ 40–80 (60) |
| `incline-frictionless` | 倾角 θ 15–45° (30) |
| `incline-kinetic` | θ；动摩擦 μk 0.05–0.65 (0.385) |
| `incline-static` | θ；静摩擦 μs 0.1–0.9 (0.6) |
| `incline-pulley` | θ；m₂/m₁ 0.5–2.5 (1.5) |
| `atwood` | m₁、m₂ 0.5–6 kg (2、3)；方向/加速度箭头随大小关系翻转 |
| `table-pulley` | 动摩擦 μk 0–0.8 (0.4)；f_k 长度与 a 值同步 |
| `banked-frictionless` | 倾角 θ 15–40° (25) |
| `banked-friction` | θ；静摩擦 μs 0.1–0.55 (0.37)；v_max 因子实时计算 |
| `conical-pendulum` | 摆角 θ 20–45° (35)；摆长 L 130–160 (160) |
| `vertical-loop` | 半径 R 60–100 (95)；v_min 读数 |
| `orbit` | 轨道半径 r 70–110 (95) |
| `force-position` | 劲度 k 0.3–1 (1)；F–x 面积和 U(x) 曲线同步 |
| `collision-elastic` | m₂/m₁ 0.3–3 (1.25)；碰后箭头在反弹/同向/静止间切换 |
| `collision-inelastic` | m₂/m₁ 0.3–3 (1.25)；v_f 箭头长度随质量比变化 |
| `ballistic-pendulum` | 上摆角 θ 20–55° (32)；h 实时计算 |
| `impulse-graph` | 作用时间 Δt 0.3–0.9 (0.6)；峰值 F 0.4–1 (1) |
| `rolling-incline` | 倾角 θ 15–33° (28)；刚体 实心球/圆盘/圆环；a 系数切换 |
| `rolling-velocity` | v_cm 1–5 (3)；顶端/圆心/边缘箭头成比例 |
| `rod-pivot` | 杆长 L 180–300 (280)；α 读数 |
| `disk-string` | M/m 0.5–4 (2)；α 弧长与 a 读数同步 |
| `shm-horizontal` | 位置 x −70–70 (50)；弹簧、F=−kx 箭头方向/长度同步 |
| `pendulum-simple` | 摆角 θ 5–35° (25)；摆长 L 120–175 (170) |
| `friction-graph` | μs 0.2–0.8 (0.55)；μk 0.05–0.8 (0.45)；临界点与动摩擦平台移动 |
| `flat-curve` | 弯道半径 r 55–95 (80)；μs 0.2–0.8 (0.5)；v_max 与箭头长度 |
| `circular-vectors` | 半径 r 55–85 (75) |
| `work-incline` | 倾角 θ 15–32° (25)；动摩擦 μk 0.1–0.8 (0.585) |
| `power-graph` | 恒力 F 0.3–1 (1) |
| `seesaw` | m₂/m₁ 0.7–2 (1)；m₂ 位置按力矩平衡移动 |
| `rolling-race` | 倾角 θ 15–30° (22) |
| `shm-phase` | 相位 φ 0–360° (60)；参考圆投影同步 |
| `physical-pendulum-fbd` | 摆角 θ 5–40° (20) |

### Parametric E&M (28)

| Figure | Controls |
|---|---|
| `point-charge-field` | 电荷 q −2–2 (1)；场线数量/方向随大小和符号变化 |
| `dipole-field` | 电荷间距 d 50–140 (120)；逐点重算场向量 |
| `coulomb-force` | 间距 r 60–150 (100)；异号相吸/同号相斥 |
| `field-vectors` | 电荷 +q / −q；箭头方向翻转 |
| `parallel-plate-potential` | 板间距 d 80–170 (150)；等势线与 E 箭头同步 |
| `gauss-sphere` | 高斯面半径 r 55–105 (88) |
| `gauss-cylinder` | 高斯面半径 r 30–65 (50) |
| `capacitor-plate` | 板间距 d 60–130 (120) |
| `circuit-series` | R₁/R₂/R₃ 1–8 Ω (2/3/4)；电流箭头长度随 R_eq |
| `circuit-parallel` | R₁/R₂ 1–8 Ω (3/6)；I/I₁/I₂ 箭头长度随分流 |
| `circuit-kirchhoff` | ε₁ 3–20 V (12)；ε₂ 3–20 V (9)；R₂ 1–8 Ω (3)；解出 I₁/I₂/I₃，箭头随方向/大小 |
| `power-series-parallel` | R₂/R₁ 0.5–3 (2)；两半功率比文字同步 |
| `kirchhoff-loop-signs` | 绕行方向 顺时针/逆时针；电池与电阻符号及方程同步翻转 |
| `kirchhoff-junction` | I₁、I₂、I₃ 0–5 A (2/1/1.5)；I₄ 计算，箭头长度同步 |
| `rc-charging` | t/τ 0–5 (1)；两条曲线加时间标记 |
| `rc-discharging` | t/τ 0–5 (1) |
| `rc-energy` | t/τ 0–5 (1)；U_C 标记 |
| `rl-circuit` | t/τ 0–5 (1)；I(t) 标记 |
| `lc-circuit` | t/T 0–1.25 (0)；q、I 同步标记 |
| `lc-energy` | t/T 0–1.25 (0)；U_C/U_L 标记 |
| `wire-field` | 电流 出纸面 ⊙ / 入纸面 ⊗；俯视与侧视一起翻转 |
| `loop-field` | 半径 R 50–100 (80) |
| `solenoid-field` | 匝密度 n 5–20 (10)；点/叉间距重排 |
| `particle-in-B` | 磁感应 B 0.7–1.5 (1)；r ∝ 1/B |
| `faraday-rod` | 速度 v 0.5–2.5 (1)；B 0.5–2 (1)；v/F_B 箭头同步 |
| `faraday-changing-B` | dB/dt 0.5–2.5 (1)；感应电流箭头长度同步 |
| `charge-in-field` | 板间距 d 80–150 (150) |
| `velocity-selector` | 入射速度 v/(E/B) 0.5–2 (1)；v≠E/B 时轨迹偏转 |

### Highlight-on-hover/click schematics (13)

`gauss-conductor` (surface charges / external field / Gaussian surface) · `gauss-shell` (cavity charge / inner surface / outer surface / Gaussian surface) · `capacitor-dielectric` (plates / dielectric / bound charges / field) · `capacitor-combinations` (series / parallel) · `power-series-parallel` (series / parallel halves) · `energy-bars` (initial / middle / final) · `momentum-bars` (before / after) · `moment-of-inertia` (hoop / disk / sphere / rod) · `flux-angle` (area / normal / field) · `magnetic-flux-angle` (area / normal / field) · `magnetic-force-rhr` (+q / −q) · `biot-savart` (current / dl / r / θ / dB) · `mass-spectrometer` (beam / light ion / heavy ion / field).

## Left static (39)

These remain unchanged because a meaningful parameter is not available or the figure is a graph-only/normalised view. Recording them keeps the interactive/static split explicit.

- Graph-only / normalised: `kin-graphs`, `momentum-graph`, `shm-graphs`, `flux-emf-graph`, `angular-graphs`, `projectile-range`, `shm-energy`, `orbit-energy`, `pendulum-period`, `gravitational-potential`, `potential-energy-sign`, `potential-point-charge`, `ohmic-nonohmic`.
- Schematic variants already represented by an interactive sibling: `collision-2d`, `ladder`, `shm-vertical`, `pendulum-physical`, `gauss-plane`, `capacitor-dielectric-partial`, `rc-circuit`, `ampere-wire`, `ampere-thick-wire`, `capacitor-energy`, `field-superposition`, `line-charge`, `circuit-equivalent`, `ammeter-voltmeter`, `inductor-energy`.
- Motion/elevator/rotation sketches: `motion-diagram`, `free-fall`, `elevator`, `kepler-ellipse`, `work-angle`, `explosion`, `angular-momentum-skater`.
- Openly licensed reference images (kept as images with credits): `atwood-apparatus`, `pendulum-apparatus`, `field-lines-equipotentials`, `cathode-ray-tube`.

## QA

- `node --check modules/physics/exam-figures.js` and `node --check modules/physics/exam-figure-interact.js`: pass.
- `node scripts/check-math-notation.mjs`: `MATH_NOTATION_OK` in a clean worktree at base `3c851b1` with only the two physics modules copied in. (The shared working tree also contains the parallel bio/math session’s in-flight data edits, which are excluded from this commit and are not touched here.)
- Default-SVG parity: for 25 representative topic pages, the load-time SVG of every figure was compared against base `3c851b1` at `400 × 260`; all changed figures were pixel-identical. Extra time markers/readouts are suppressed until the first control input.
- Playwright target sweep: 27 topics × 2 viewports (1280×900, 390×844) × light/dark = 108 page states; 0 console/page errors, 0 `.katex-error`, 0 horizontal page overflow, 0 SVG outside its wrapper, 0 control/SVG/caption overlap, 0 sub-44 px control targets, 0 failed redraws, 0 failed part highlights. Caption horizontal overflow is 0; `moment-of-inertia` caption spacing was tightened so its KaTeX line fits at 390 px.
- Screenshots (`screenshots/figures-interact-physics/`): 15 representative states covering projectile, SHM, collisions, rolling, power series/parallel (hover), Kirchhoff loop/junction (including dark mobile), Faraday rod, RC charging, particle in B, capacitor dielectric hover, and moment-of-inertia hover.

## Notes

- `power-series-parallel`, `kirchhoff-loop-signs`, and `kirchhoff-junction` are all interactive, including the second-view figures added for 11.4 / 11.6 / 11.7.
- The highlight groups use transparent hit rectangles and a focus ring; clicking pins a part, hovering previews it, and the hint line states the part’s meaning.
- Controls only rebuild the SVG inside the existing `.exam-figure-box`; wrappers, caption KaTeX, `CAP_DESCENT`, and gallery grid CSS are untouched.
