/**
 * AP CED-aligned registry: subject (course) > unit (chapter) > topic / module.
 */
import { COURSES, ALL_UNITS as UNITS } from './syllabus.js';

export const SUBJECTS = {
  bio: { ...COURSES.bio, color: 'bio', overview: 'AP Biology · 8 units', learn: '' },
  math: { ...COURSES.math, color: 'math', overview: 'AP Calculus BC · 10 units', learn: '' },
  mech: { ...COURSES.mech, color: 'physics', overview: 'AP Physics C Mechanics · 7 units', learn: '' },
  em: { ...COURSES.em, color: 'physics', overview: 'AP Physics C E&M · Units 8–13', learn: '' },
};

export const SUBJECT_ORDER = ['bio', 'math', 'mech', 'em'];

/** Build CHAPTERS from official units. */
export const CHAPTERS = Object.fromEntries(
  SUBJECT_ORDER.map((sid) => [
    sid,
    (UNITS[sid] || []).map((u) => ({
      id: u.id,
      subject: sid,
      name: `Unit ${u.code} · ${u.titleZh}`,
      unitCode: u.code,
      titleZh: u.titleZh,
      titleEn: u.titleEn,
      summary: u.titleEn,
      overview: `${u.titleZh} · ${u.titleEn}`,
      prerequisites: '',
      concepts: u.topics.map((t) => t.code),
      topics: u.topics,
      layer: u.layer || 'ap',
    })),
  ]),
);

/** @typedef {{
 *  id: string,
 *  subject: string,
 *  chapterId: string,
 *  topicCodes: string[],
 *  title: string,
 *  summary: string,
 *  explanation: string,
 *  goals?: string[],
 *  tags: string[],
 *  load: () => Promise<{ create: Function }>
 * }} ModuleDef
 */

/** @type {ModuleDef[]} */
export const MODULES = [
  // —— Bio ——
  {
    id: 'enzyme-activity',
    subject: 'bio', chapterId: 'bio-u1', topicCodes: ['1.6', '3.2'],
    title: '酶活性与温度/pH · Enzyme Activity vs Temperature/pH',
    summary: '温度与 pH 如何改变酶反应速率。 · How temperature and pH change enzyme reaction rates.',
    explanation: '酶有最适温度与最适 pH；偏离会导致活性下降，过高温度可使酶变性。 · Enzymes have optimal temperature and pH; deviations lower activity, and excessive heat can denature them.',
    goals: ['观察温度/pH 对速率的影响 · Observe how temperature and pH affect rate', '识别最适条件 · Identify optimal conditions'],
    tags: ['酶', '温度', 'pH'],
    load: () => import('./biology/enzyme-activity.js'),
  },
  {
    id: 'membrane-transport',
    subject: 'bio', chapterId: 'bio-u2', topicCodes: ['2.5', '2.7', '2.4'],
    title: '膜运输与渗透 · Membrane Transport and Osmosis',
    summary: '扩散、渗透与水势下的净流动。 · Diffusion, osmosis, and net flow under water potential.',
    explanation: '水顺水势梯度扩散；溶质浓度差驱动渗透，细胞可胀大或皱缩。 · Water diffuses down its water-potential gradient; solute concentration differences drive osmosis, so cells can swell or shrink.',
    goals: ['区分等渗/低渗/高渗 · Distinguish isotonic, hypotonic, and hypertonic', '观察净水流动方向 · Observe the direction of net water flow'],
    tags: ['渗透', '扩散', '膜'],
    load: () => import('./biology/membrane-transport.js'),
  },
  {
    id: 'energy-flow',
    subject: 'bio', chapterId: 'bio-u3', topicCodes: ['3.4', '3.5', '3.3'],
    title: '光合与呼吸能量流 · Energy Flow in Photosynthesis and Respiration',
    summary: '光能 → 糖 → ATP 的能量流动示意。 · Energy flow from light to sugar to ATP.',
    explanation: '光合作用固定能量，细胞呼吸释放 ATP；二者通过葡萄糖与 O₂/CO₂ 循环连接。 · Photosynthesis captures energy and cellular respiration releases ATP; glucose and the O₂/CO₂ cycle link them.',
    goals: ['追踪能量载体 · Trace energy carriers', '对比输入输出 · Compare inputs and outputs'],
    tags: ['光合', '呼吸', 'ATP'],
    load: () => import('./biology/energy-flow.js'),
  },
  {
    id: 'mitosis',
    subject: 'bio', chapterId: 'bio-u4', topicCodes: ['4.5', '4.7', '4.6'],
    title: '有丝分裂 · Mitosis',
    summary: '前期至末期的染色体行为。 · Chromosome behavior from prophase to telophase.',
    explanation: '有丝分裂产生两个遗传相同的子细胞。 · Mitosis produces two genetically identical daughter cells.',
    goals: ['辨认各阶段 · Identify each phase', '理解纺锤体牵引 · Understand spindle pulling'],
    tags: ['细胞周期', '染色体'],
    load: () => import('./biology/mitosis.js'),
  },
  {
    id: 'mendel-punnett',
    subject: 'bio', chapterId: 'bio-u5', topicCodes: ['5.3', '5.4'],
    title: '孟德尔遗传与庞纳特方格 · Mendelian Genetics and Punnett Squares',
    summary: '单基因杂交的基因型与表型比例。 · Genotype and phenotype ratios in single-gene crosses.',
    explanation: '减数分裂分离等位基因；庞纳特方格给出子代概率。 · Meiosis separates alleles; a Punnett square gives offspring probabilities.',
    goals: ['计算基因型比例 · Calculate genotype ratios', '区分显隐性表型 · Distinguish dominant and recessive phenotypes'],
    tags: ['孟德尔', 'Punnett'],
    load: () => import('./biology/mendel-punnett.js'),
  },
  {
    id: 'dna-replication',
    subject: 'bio', chapterId: 'bio-u6', topicCodes: ['6.2', '6.1'],
    title: 'DNA 复制 · DNA Replication',
    summary: '半保守复制与复制叉。 · Semiconservative replication and the replication fork.',
    explanation: '两条链解开后各自作为模板，合成互补新链。 · The two strands unwind and each serves as a template for a complementary new strand.',
    goals: ['理解半保守 · Understand semiconservative replication', '识别复制方向 · Identify replication direction'],
    tags: ['DNA', '复制'],
    load: () => import('./biology/dna-replication.js'),
  },
  {
    id: 'hardy-weinberg',
    subject: 'bio', chapterId: 'bio-u7', topicCodes: ['7.5', '7.2', '7.4'],
    title: '哈代–温伯格与选择 · Hardy–Weinberg and Selection',
    summary: '平衡条件下的基因型频率，以及选择如何打破它。 · Genotype frequencies at equilibrium and how selection disrupts them.',
    explanation: 'p²+2pq+q²=1；选择改变等位基因频率。 · p² + 2pq + q² = 1; selection changes allele frequencies.',
    goals: ['计算平衡频率 · Calculate equilibrium frequencies', '观察选择效应 · Observe the effect of selection'],
    tags: ['H-W', '选择'],
    load: () => import('./biology/hardy-weinberg.js'),
  },
  {
    id: 'lotka-volterra',
    subject: 'bio', chapterId: 'bio-u8', topicCodes: ['8.3', '8.4', '8.5'],
    title: '捕食者–猎物模型 · Predator–Prey Model',
    summary: 'Lotka–Volterra 种群振荡。 · Lotka–Volterra population oscillations.',
    explanation: '捕食者与猎物相互制约，产生相位延迟的周期振荡。 · Predators and prey regulate each other, producing phase-lagged oscillations.',
    goals: ['读相平面 · Read the phase plane', '调参数看振荡 · Adjust parameters to see oscillations'],
    tags: ['生态', '种群'],
    load: () => import('./biology/lotka-volterra.js'),
  },

  // —— Calc ——
  {
    id: 'function-graph',
    subject: 'math', chapterId: 'calc-u0', topicCodes: ['0.1'],
    title: '函数图像 · Function Graphs',
    summary: '参数化观察函数变换。 · Explore function transformations with parameters.',
    explanation: '平移、伸缩改变图像形态。 · Shifts and stretches change the shape of a graph.',
    goals: ['识别 a、h、k 的作用 · Identify the roles of a, h, and k'],
    tags: ['函数', '变换'],
    load: () => import('./math/function-graph.js'),
  },
  {
    id: 'unit-circle',
    subject: 'math', chapterId: 'calc-u0', topicCodes: ['0.2'],
    title: '单位圆 · Unit Circle',
    summary: '角与正弦、余弦的几何关系。 · Geometric relationship between angles, sine, and cosine.',
    explanation: '单位圆上点的坐标即 (cos θ, sin θ)。 · A point on the unit circle has coordinates (cos θ, sin θ).',
    goals: ['联系角与坐标 · Connect angles to coordinates'],
    tags: ['三角', '单位圆'],
    load: () => import('./math/unit-circle.js'),
  },
  {
    id: 'limit-epsilon',
    subject: 'math', chapterId: 'calc-u1', topicCodes: ['1.2', '1.3', '1.7'],
    title: '极限与 ε-δ · Limits and ε-δ',
    summary: '用 ε 邻域与 δ 邻域直观理解极限。 · Build intuition for limits with ε and δ neighborhoods.',
    explanation: '若 lim f(x)=L，则对任意 ε>0 存在 δ>0，使 0<|x−a|<δ ⇒ |f(x)−L|<ε。 · If lim f(x) = L, then for every ε > 0 there is a δ > 0 such that 0 < |x − a| < δ implies |f(x) − L| < ε.',
    goals: ['调节 ε 观察 δ · Adjust ε to see δ', '区分逼近与到达 · Distinguish approaching from reaching'],
    tags: ['极限', 'ε-δ'],
    load: () => import('./math/limit-epsilon.js'),
  },
  {
    id: 'derivative-tangent',
    subject: 'math', chapterId: 'calc-u2', topicCodes: ['2.1', '2.2', '2.3'],
    title: '导数与切线 · Derivatives and Tangent Lines',
    summary: '切线斜率即瞬时变化率。 · Tangent slope as instantaneous rate of change.',
    explanation: '导数是割线斜率的极限。 · The derivative is the limit of secant slopes.',
    goals: ['拖动切点 · Drag the tangent point', '读 f′(x₀) · Read f′(x₀)'],
    tags: ['导数', '切线'],
    load: () => import('./math/derivative-tangent.js'),
  },
  {
    id: 'chain-rule',
    subject: 'math', chapterId: 'calc-u3', topicCodes: ['3.1'],
    title: '链式法则 · Chain Rule',
    summary: '复合函数导数：外导数 × 内导数。 · Derivative of a composition: outer derivative times inner derivative.',
    explanation: '(f∘g)′(x)=f′(g(x))·g′(x)。 · (f∘g)′(x) = f′(g(x))·g′(x).',
    goals: ['分解内外函数 · Decompose inner and outer functions', '观察乘积关系 · Observe the product relationship'],
    tags: ['链式法则'],
    load: () => import('./math/chain-rule.js'),
  },
  {
    id: 'motion-sva',
    subject: 'math', chapterId: 'calc-u4', topicCodes: ['4.2', '4.1'],
    title: '位置·速度·加速度 · Position, Velocity, Acceleration',
    summary: '直线运动中 s、v、a 的导数关系。 · Derivative relationships among s, v, and a in linear motion.',
    explanation: 'v=s′，a=v′=s″。 · v = s′, a = v′ = s″.',
    goals: ['对照三图 · Compare the three graphs', '判断加速减速 · Decide speeding up or slowing down'],
    tags: ['运动', '导数应用'],
    load: () => import('./math/motion-sva.js'),
  },
  {
    id: 'extrema-concavity',
    subject: 'math', chapterId: 'calc-u5', topicCodes: ['5.3', '5.6', '5.7'],
    title: '极值与凹性 · Extrema and Concavity',
    summary: '一阶/二阶导数检验与拐点。 · First/second derivative tests and inflection points.',
    explanation: 'f′=0 的临界点结合 f″ 判断极值；f″ 变号处为拐点。 · Critical points with f′ = 0 and the sign of f″ classify extrema; sign changes of f″ mark inflection points.',
    goals: ['标临界点 · Mark critical points', '辨凹凸 · Identify concavity'],
    tags: ['极值', '凹性'],
    load: () => import('./math/extrema-concavity.js'),
  },
  {
    id: 'riemann-sum',
    subject: 'math', chapterId: 'calc-u6', topicCodes: ['6.2', '6.3', '6.4'],
    title: '黎曼和与定积分 · Riemann Sums and Definite Integrals',
    summary: '用矩形逼近曲线下面积。 · Approximate area under a curve with rectangles.',
    explanation: 'n→∞ 时黎曼和趋于定积分。 · As n → ∞, Riemann sums approach the definite integral.',
    goals: ['增 n 看收敛 · Increase n to see convergence', '对比左/右/中点 · Compare left, right, and midpoint'],
    tags: ['积分', '黎曼和'],
    load: () => import('./math/riemann-sum.js'),
  },
  {
    id: 'slope-field-euler',
    subject: 'math', chapterId: 'calc-u7', topicCodes: ['7.3', '7.5', '7.2'],
    title: '斜率场与欧拉法 · Slope Fields and Euler’s Method',
    summary: '差分方程的几何图像与数值步进。 · Geometric picture of a differential equation and numerical stepping.',
    explanation: '斜率场给出每点切线方向；欧拉法沿方向场近似解曲线。 · A slope field gives the tangent direction at each point; Euler’s method follows the field to approximate a solution.',
    goals: ['读斜率场 · Read the slope field', '调步长看误差 · Adjust step size to see error'],
    tags: ['微分方程', '欧拉'],
    load: () => import('./math/slope-field-euler.js'),
  },
  {
    id: 'solid-revolution',
    subject: 'math', chapterId: 'calc-u8', topicCodes: ['8.9', '8.11'],
    title: '旋转体体积 · Volumes of Solids of Revolution',
    summary: '圆盘/垫圈法绕轴旋转求体积。 · Disk/washer volumes of revolution.',
    explanation: 'V=π∫[R(x)]² dx（圆盘）；垫圈为外半径²−内半径²。 · V = π∫[R(x)]² dx for disks; washers use outer radius squared minus inner radius squared.',
    goals: ['观察截面圆盘 · Observe cross-section disks', '调区间看体积 · Adjust the interval to see volume'],
    tags: ['体积', '旋转体'],
    load: () => import('./math/solid-revolution.js'),
  },
  {
    id: 'polar-parametric',
    subject: 'math', chapterId: 'calc-u9', topicCodes: ['9.1', '9.7', '9.8'],
    title: '极坐标与参数曲线 · Polar and Parametric Curves',
    summary: 'r(θ) 与 (x(t),y(t)) 的轨迹。 · Traces of r(θ) and (x(t), y(t)).',
    explanation: '极坐标 x=r cosθ，y=r sinθ；参数曲线由独立参数驱动。 · Polar coordinates: x = r cos θ, y = r sin θ; parametric curves are driven by an independent parameter.',
    goals: ['切换曲线类型 · Switch curve types', '观察扫过面积感 · Observe the swept-area intuition'],
    tags: ['极坐标', '参数'],
    load: () => import('./math/polar-parametric.js'),
  },
  {
    id: 'series-convergence',
    subject: 'math', chapterId: 'calc-u10', topicCodes: ['10.2', '10.5', '10.8'],
    title: '级数收敛 · Series Convergence',
    summary: '几何级数与部分和逼近。 · Geometric series and partial-sum convergence.',
    explanation: '|r|<1 时几何级数收敛到 a(1−r)⁻¹；部分和趋近和。 · For |r| < 1 the geometric series converges to a(1 − r)⁻¹; partial sums approach the sum.',
    goals: ['调公比看收敛发散 · Adjust the ratio to see convergence or divergence', '读部分和 · Read partial sums'],
    tags: ['级数', '收敛'],
    load: () => import('./math/series-convergence.js'),
  },
  {
    id: 'taylor-series',
    subject: 'math', chapterId: 'calc-u10', topicCodes: ['10.11', '10.14', '10.15'],
    title: '泰勒级数 · Taylor Series',
    summary: '多项式局部逼近函数。 · Polynomials approximating a function locally.',
    explanation: '在展开点附近，高阶泰勒多项式逼近原函数。 · Near the expansion point, higher-order Taylor polynomials approximate the function.',
    goals: ['增阶数看逼近 · Increase the degree to see convergence', '换展开点 · Change the expansion point'],
    tags: ['泰勒', '逼近'],
    load: () => import('./math/taylor-series.js'),
  },

  // —— Mech ——
  {
    id: 'projectile',
    subject: 'mech', chapterId: 'mech-u1', topicCodes: ['1.2', '1.1'],
    title: '抛体运动 · Projectile Motion',
    summary: '二维抛体轨迹与射程。 · 2D projectile trajectory and range.',
    explanation: '水平匀速、竖直匀变速；可含空气阻力。 · Uniform horizontal motion and constant vertical acceleration; air resistance is optional.',
    goals: ['调角度与初速 · Adjust angle and initial speed', '读射程 · Read the range'],
    tags: ['运动学', '抛体'],
    load: () => import('./physics/projectile.js'),
  },
  {
    id: 'newton-incline',
    subject: 'mech', chapterId: 'mech-u2', topicCodes: ['2.3', '2.5'],
    title: '牛顿第二定律与斜面 · Newton’s Second Law and Inclines',
    summary: '斜面上的重力分解与加速度。 · Gravity components and acceleration on an incline.',
    explanation: '沿斜面合力 Fₙₑₜ = mg sinθ − μN；加速度等于合力除以质量。 · Along the incline, the net force is mg sinθ − μN; acceleration equals net force divided by mass.',
    goals: ['分解重力 · Resolve gravity', '观察 a 随 θ、μ 变化 · Observe how a changes with θ and μ'],
    tags: ['牛顿', '斜面'],
    load: () => import('./mech/newton-incline.js'),
  },
  {
    id: 'work-energy',
    subject: 'mech', chapterId: 'mech-u3', topicCodes: ['3.1', '3.3', '3.4'],
    title: '功与机械能 · Work and Mechanical Energy',
    summary: '滑块下滑中动能与势能交换。 · Kinetic–potential energy exchange as a block slides down.',
    explanation: '无摩擦时机械能守恒；功率 P=Fv。 · Mechanical energy is conserved without friction; power P = Fv.',
    goals: ['读 K/U 条形图 · Read the K/U bars', '对比有无摩擦 · Compare with and without friction'],
    tags: ['功', '能量'],
    load: () => import('./mech/work-energy.js'),
  },
  {
    id: 'collision-momentum',
    subject: 'mech', chapterId: 'mech-u4', topicCodes: ['4.1', '4.2'],
    title: '动量守恒碰撞 · Momentum-Conserving Collisions',
    summary: '一维弹性/非弹性碰撞。 · One-dimensional elastic and inelastic collisions.',
    explanation: '系统外力为零时动量守恒；弹性还守恒动能。 · Momentum is conserved when external forces are zero; elastic collisions also conserve kinetic energy.',
    goals: ['对比弹性与完全非弹性 · Compare elastic and perfectly inelastic', '读动量条 · Read the momentum bars'],
    tags: ['动量', '碰撞'],
    load: () => import('./mech/collision-momentum.js'),
  },
  {
    id: 'rigid-rotation',
    subject: 'mech', chapterId: 'mech-u5', topicCodes: ['5.1', '5.2', '5.3'],
    title: '刚体转动与转动惯量 · Rigid-Body Rotation and Moment of Inertia',
    summary: '力矩、角加速度与 I。 · Torque, angular acceleration, and moment of inertia.',
    explanation: '合力矩 τ = Iα；质量分布离轴越远 I 越大。 · Net torque τ = Iα; the farther mass is from the axis, the larger I.',
    goals: ['调质量分布 · Adjust mass distribution', '观察 α · Observe α'],
    tags: ['转动', '力矩'],
    load: () => import('./mech/rigid-rotation.js'),
  },
  {
    id: 'gravity-orbit',
    subject: 'mech', chapterId: 'mech-u6', topicCodes: ['6.4', '2.6'],
    title: '万有引力轨道 · Gravitational Orbits',
    summary: '中心引力下的开普勒轨道。 · Kepler orbits under a central gravitational force.',
    explanation: 'F = GMm·r⁻²；合适初速产生椭圆/圆/双曲线轨。 · F = GMm·r⁻²; a suitable initial speed gives an elliptical, circular, or hyperbolic orbit.',
    goals: ['调初速看轨型 · Adjust initial speed to see orbit type', '观察近地点 · Observe periapsis'],
    tags: ['引力', '轨道'],
    load: () => import('./mech/gravity-orbit.js'),
  },
  {
    id: 'shm',
    subject: 'mech', chapterId: 'mech-u7', topicCodes: ['7.1', '7.2'],
    title: '简谐振动 · Simple Harmonic Motion',
    summary: '弹簧–质量系统与能量交换。 · Spring–mass system and energy exchange.',
    explanation: '角频率由 k 与 m 决定；动能与弹性势能周期性互换。 · Angular frequency depends on k and m; kinetic and elastic potential energy exchange periodically.',
    goals: ['调 k、m、阻尼 · Adjust k, m, and damping', '读能量 · Read the energy'],
    tags: ['SHM', '弹簧'],
    load: () => import('./physics/shm.js'),
  },

  // —— E&M ——
  {
    id: 'electric-field',
    subject: 'em', chapterId: 'em-u8', topicCodes: ['8.2', '8.3', '8.1', '8.7'],
    title: '电场线与等势 · Electric Field Lines and Equipotentials',
    summary: '点电荷的电场与等势线。 · Electric fields and equipotential lines of point charges.',
    explanation: '电场强度叠加；等势面与场线正交。 · Electric fields superpose; equipotential surfaces are perpendicular to field lines.',
    goals: ['放置电荷 · Place charges', '读场强方向 · Read field direction'],
    tags: ['电场'],
    load: () => import('./physics/electric-field.js'),
  },
  {
    id: 'gauss-law',
    subject: 'em', chapterId: 'em-u8', topicCodes: ['8.4', '8.5'],
    title: '高斯定律 · Gauss’s Law',
    summary: '对称电荷分布的电通量与封闭曲面。 · Electric flux and closed surfaces for symmetric charge distributions.',
    explanation: '通过闭合曲面的电通量等于包围电荷除以 ε₀；球对称时面外场按 r⁻² 衰减。 · Electric flux through a closed surface equals enclosed charge divided by ε₀; outside a spherically symmetric charge the field falls off as r⁻².',
    goals: ['调高斯面半径 · Adjust the Gaussian surface radius', '对比面内外场 · Compare fields inside and outside'],
    tags: ['高斯', '通量'],
    load: () => import('./em/gauss-law.js'),
  },
  {
    id: 'electric-potential',
    subject: 'em', chapterId: 'em-u9', topicCodes: ['9.1', '9.2', '9.4'],
    title: '电势与电势能 · Electric Potential and Potential Energy',
    summary: '点电荷电势与试探电荷势能。 · Point-charge potential and test-charge potential energy.',
    explanation: 'V = kQ·r⁻¹；U = qV；电势差对应场做功。 · V = kQ·r⁻¹; U = qV; a potential difference corresponds to work done by the field.',
    goals: ['读等势圆 · Read equipotential circles', '调电荷看 V · Adjust charge to see V'],
    tags: ['电势'],
    load: () => import('./em/electric-potential.js'),
  },
  {
    id: 'capacitor',
    subject: 'em', chapterId: 'em-u10', topicCodes: ['10.3', '10.4'],
    title: '平行板电容器 · Parallel-Plate Capacitor',
    summary: '电容、电场与电介质。 · Capacitance, electric field, and dielectrics.',
    explanation: 'C = κε₀A·d⁻¹；插入电介质增大 C。 · C = κε₀A·d⁻¹; inserting a dielectric increases C.',
    goals: ['调间距与面积 · Adjust spacing and area', '观察 κ 效应 · Observe the κ effect'],
    tags: ['电容', '电介质'],
    load: () => import('./em/capacitor.js'),
  },
  {
    id: 'rc-circuit',
    subject: 'em', chapterId: 'em-u11', topicCodes: ['11.8', '11.2', '11.3'],
    title: 'RC 电路 · RC Circuits',
    summary: '电容充放电的指数过程。 · Exponential charging and discharging of a capacitor.',
    explanation: '时间常数 τ = RC；充电指数趋近最大电荷，放电指数衰减。 · The time constant is τ = RC; charging approaches the maximum charge exponentially and discharging decays exponentially.',
    goals: ['调 R、C 看时间常数 · Adjust R and C to see the time constant', '切换充/放 · Switch charge/discharge'],
    tags: ['RC', '电路'],
    load: () => import('./em/rc-circuit.js'),
  },
  {
    id: 'charged-particle-B',
    subject: 'em', chapterId: 'em-u12', topicCodes: ['12.2', '12.1'],
    title: '磁场中的带电粒子 · Charged Particle in a Magnetic Field',
    summary: '洛伦兹力导致圆周/螺旋运动。 · Circular and helical motion from the Lorentz force.',
    explanation: '洛伦兹力 F = qvB（v 垂直 B）；轨道半径 r = mv·(|q|B)⁻¹。 · Lorentz force F = qvB for v perpendicular to B; orbital radius r = mv·(|q|B)⁻¹.',
    goals: ['调 v、B、q · Adjust v, B, and q', '观察半径 · Observe the radius'],
    tags: ['洛伦兹力', '磁场'],
    load: () => import('./em/charged-particle-B.js'),
  },
  {
    id: 'faraday-induction',
    subject: 'em', chapterId: 'em-u13', topicCodes: ['13.1', '13.2', '13.3', '13.7'],
    title: '法拉第电磁感应 · Faraday’s Law of Induction',
    summary: '磁通量变化产生感应电动势。 · Changing magnetic flux induces an emf.',
    explanation: '感应电动势 ε = −dΦ/dt，等于磁通量变化率的负值；楞次定律决定感应电流方向。 · The induced emf ε = −dΦ/dt is the negative rate of change of magnetic flux; Lenz’s law sets the current direction.',
    goals: ['移动磁体/改变面积 · Move the magnet or change the area', '读感应电流方向 · Read the induced current direction'],
    tags: ['法拉第', '感应'],
    load: () => import('./em/faraday-induction.js'),
  },
];

export const PATHS = [
  {
    id: 'ap-bio',
    title: '生物学通览 · AP Biology Overview',
    summary: '从分子到生态的八单元主线。 · Eight units from molecules to ecosystems.',
    moduleIds: [
      'enzyme-activity', 'membrane-transport', 'energy-flow', 'mitosis',
      'mendel-punnett', 'dna-replication', 'hardy-weinberg', 'lotka-volterra',
    ],
  },
  {
    id: 'ap-calc-bc',
    title: '微积分 BC 主线 · AP Calculus BC Path',
    summary: '极限 → 导数 → 积分 → 级数。 · Limits → derivatives → integrals → series.',
    moduleIds: [
      'limit-epsilon', 'derivative-tangent', 'chain-rule', 'motion-sva',
      'extrema-concavity', 'riemann-sum', 'slope-field-euler', 'solid-revolution',
      'polar-parametric', 'series-convergence', 'taylor-series',
    ],
  },
  {
    id: 'ap-mech',
    title: '力学 · AP Physics C Mechanics',
    summary: '运动学到振动的力学链。 · A mechanics chain from kinematics to oscillations.',
    moduleIds: [
      'projectile', 'newton-incline', 'work-energy', 'collision-momentum',
      'rigid-rotation', 'gravity-orbit', 'shm',
    ],
  },
  {
    id: 'ap-em',
    title: '电磁学 · AP Physics C E&M',
    summary: '从电场到电磁感应。 · From electric fields to electromagnetic induction.',
    moduleIds: [
      'electric-field', 'gauss-law', 'electric-potential', 'capacitor',
      'rc-circuit', 'charged-particle-B', 'faraday-induction',
    ],
  },
];

const byId = new Map(MODULES.map((m) => [m.id, m]));

export function getModule(id) {
  return byId.get(id) || null;
}

export function getModulesBySubject(subject) {
  return MODULES.filter((m) => m.subject === subject);
}

export function getModulesByChapter(subject, chapterId) {
  return MODULES.filter((m) => m.subject === subject && m.chapterId === chapterId);
}

export function getChapter(subject, chapterId) {
  return (CHAPTERS[subject] || []).find((c) => c.id === chapterId) || null;
}

export function getChapterName(subject, chapterId) {
  const c = getChapter(subject, chapterId);
  return c ? c.name : '';
}

export function getChapterBySubjectAndId(subject, chapterId) {
  return getChapter(subject, chapterId);
}

export function getChaptersForSubject(subject) {
  return CHAPTERS[subject] || [];
}

export function getSubjectTree(subject) {
  return getChaptersForSubject(subject).map((ch) => ({
    ...ch,
    modules: getModulesByChapter(subject, ch.id),
  }));
}

export function getOrderedModules(subject) {
  const out = [];
  for (const ch of getChaptersForSubject(subject)) {
    out.push(...getModulesByChapter(subject, ch.id));
  }
  return out.length ? out : getModulesBySubject(subject);
}

export function getPrevNext(id) {
  const mod = getModule(id);
  if (!mod) return { prev: null, next: null };
  const list = getOrderedModules(mod.subject);
  const i = list.findIndex((m) => m.id === id);
  return {
    prev: i > 0 ? list[i - 1] : null,
    next: i >= 0 && i < list.length - 1 ? list[i + 1] : null,
  };
}

export function getNextInChapter(id) {
  const mod = getModule(id);
  if (!mod) return null;
  const list = getModulesByChapter(mod.subject, mod.chapterId);
  const i = list.findIndex((m) => m.id === id);
  return i >= 0 && i < list.length - 1 ? list[i + 1] : null;
}

export function getPath(id) {
  return PATHS.find((p) => p.id === id) || null;
}

export function getPathModules(pathOrId) {
  const p = typeof pathOrId === 'string' ? getPath(pathOrId) : pathOrId;
  if (!p) return [];
  return p.moduleIds.map((id) => getModule(id)).filter(Boolean);
}

export function getNextInPath(moduleId) {
  for (const p of PATHS) {
    const i = p.moduleIds.indexOf(moduleId);
    if (i >= 0 && i < p.moduleIds.length - 1) {
      return { path: p, module: getModule(p.moduleIds[i + 1]) };
    }
  }
  return null;
}

export function getFirstModuleOfSubject(subject) {
  const list = getOrderedModules(subject);
  return list[0] || null;
}

export function getFirstModuleOfChapter(subject, chapterId) {
  const list = getModulesByChapter(subject, chapterId);
  return list[0] || null;
}

export function withChapterLabel(mod) {
  return { ...mod, chapterName: getChapterName(mod.subject, mod.chapterId) };
}

/** Topics for a chapter annotated with covering modules (or 待上线). */
export function getChapterTopicRows(subject, chapterId) {
  const ch = getChapter(subject, chapterId);
  if (!ch) return [];
  const mods = getModulesByChapter(subject, chapterId);
  return (ch.topics || []).map((t) => {
    const covering = mods.filter((m) => (m.topicCodes || []).includes(t.code));
    return {
      ...t,
      modules: covering,
      pending: covering.length === 0,
    };
  });
}

export function searchGrouped(q) {
  const needle = (q || '').trim().toLowerCase();
  const groups = [];
  for (const sid of SUBJECT_ORDER) {
    const items = getModulesBySubject(sid).filter((m) => {
      if (!needle) return true;
      const blob = [m.title, m.summary, m.explanation, ...(m.tags || []), ...(m.topicCodes || [])]
        .join(' ')
        .toLowerCase();
      return blob.includes(needle);
    });
    if (items.length) {
      groups.push({ subject: sid, name: SUBJECTS[sid].name, modules: items });
    }
  }
  return groups;
}

export function coverageTable() {
  return SUBJECT_ORDER.map((sid) => {
    const units = getChaptersForSubject(sid).map((ch) => {
      const mods = getModulesByChapter(sid, ch.id);
      const topics = ch.topics || [];
      const covered = topics.filter((t) =>
        mods.some((m) => (m.topicCodes || []).includes(t.code)),
      ).length;
      return {
        unit: ch.name,
        unitCode: ch.unitCode,
        topicCount: topics.length,
        modulesLive: mods.length,
        topicsCovered: covered,
        moduleTitles: mods.map((m) => m.title),
      };
    });
    return { subject: sid, name: SUBJECTS[sid].name, en: SUBJECTS[sid].en, units };
  });
}

export function searchModules(q, subject = 'all') {
  const needle = (q || '').trim().toLowerCase();
  let list = subject && subject !== 'all' ? getModulesBySubject(subject) : MODULES.slice();
  if (!needle) return list;
  return list.filter((m) => {
    const blob = [m.title, m.summary, m.explanation, ...(m.tags || []), ...(m.topicCodes || [])]
      .join(' ')
      .toLowerCase();
    return blob.includes(needle);
  });
}
