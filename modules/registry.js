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
      concepts: u.topics.slice(0, 6).map((t) => t.code),
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
    title: '酶活性与温度/pH',
    summary: '温度与 pH 如何改变酶反应速率。',
    explanation: '酶有最适温度与最适 pH；偏离会导致活性下降，过高温度可使酶变性。',
    goals: ['观察温度/pH 对速率的影响', '识别最适条件'],
    tags: ['酶', '温度', 'pH'],
    load: () => import('./biology/enzyme-activity.js'),
  },
  {
    id: 'membrane-transport',
    subject: 'bio', chapterId: 'bio-u2', topicCodes: ['2.5', '2.7', '2.4'],
    title: '膜运输与渗透',
    summary: '扩散、渗透与水势下的净流动。',
    explanation: '水顺水势梯度扩散；溶质浓度差驱动渗透，细胞可胀大或皱缩。',
    goals: ['区分等渗/低渗/高渗', '观察净水流动方向'],
    tags: ['渗透', '扩散', '膜'],
    load: () => import('./biology/membrane-transport.js'),
  },
  {
    id: 'energy-flow',
    subject: 'bio', chapterId: 'bio-u3', topicCodes: ['3.4', '3.5', '3.3'],
    title: '光合与呼吸能量流',
    summary: '光能 → 糖 → ATP 的能量流动示意。',
    explanation: '光合作用固定能量，细胞呼吸释放 ATP；二者通过葡萄糖与 O₂/CO₂ 循环连接。',
    goals: ['追踪能量载体', '对比输入输出'],
    tags: ['光合', '呼吸', 'ATP'],
    load: () => import('./biology/energy-flow.js'),
  },
  {
    id: 'mitosis',
    subject: 'bio', chapterId: 'bio-u4', topicCodes: ['4.5', '4.7', '4.6'],
    title: '有丝分裂',
    summary: '前期至末期的染色体行为。',
    explanation: '有丝分裂产生两个遗传相同的子细胞。',
    goals: ['辨认各阶段', '理解纺锤体牵引'],
    tags: ['细胞周期', '染色体'],
    load: () => import('./biology/mitosis.js'),
  },
  {
    id: 'mendel-punnett',
    subject: 'bio', chapterId: 'bio-u5', topicCodes: ['5.3', '5.4'],
    title: '孟德尔遗传与庞纳特方格',
    summary: '单基因杂交的基因型与表型比例。',
    explanation: '减数分裂分离等位基因；庞纳特方格给出子代概率。',
    goals: ['计算基因型比例', '区分显隐性表型'],
    tags: ['孟德尔', 'Punnett'],
    load: () => import('./biology/mendel-punnett.js'),
  },
  {
    id: 'dna-replication',
    subject: 'bio', chapterId: 'bio-u6', topicCodes: ['6.2', '6.1'],
    title: 'DNA 复制',
    summary: '半保守复制与复制叉。',
    explanation: '两条链解开后各自作为模板，合成互补新链。',
    goals: ['理解半保守', '识别复制方向'],
    tags: ['DNA', '复制'],
    load: () => import('./biology/dna-replication.js'),
  },
  {
    id: 'hardy-weinberg',
    subject: 'bio', chapterId: 'bio-u7', topicCodes: ['7.5', '7.2', '7.4'],
    title: '哈代–温伯格与选择',
    summary: '平衡条件下的基因型频率，以及选择如何打破它。',
    explanation: 'p²+2pq+q²=1；选择改变等位基因频率。',
    goals: ['计算平衡频率', '观察选择效应'],
    tags: ['H-W', '选择'],
    load: () => import('./biology/hardy-weinberg.js'),
  },
  {
    id: 'lotka-volterra',
    subject: 'bio', chapterId: 'bio-u8', topicCodes: ['8.3', '8.4', '8.5'],
    title: '捕食者–猎物模型',
    summary: 'Lotka–Volterra 种群振荡。',
    explanation: '捕食者与猎物相互制约，产生相位延迟的周期振荡。',
    goals: ['读相平面', '调参数看振荡'],
    tags: ['生态', '种群'],
    load: () => import('./biology/lotka-volterra.js'),
  },

  // —— Calc ——
  {
    id: 'function-graph',
    subject: 'math', chapterId: 'calc-u0', topicCodes: ['0.1'],
    title: '函数图像',
    summary: '参数化观察函数变换。',
    explanation: '平移、伸缩改变图像形态。',
    goals: ['识别 a、h、k 的作用'],
    tags: ['函数', '变换'],
    load: () => import('./math/function-graph.js'),
  },
  {
    id: 'unit-circle',
    subject: 'math', chapterId: 'calc-u0', topicCodes: ['0.2'],
    title: '单位圆',
    summary: '角与正弦、余弦的几何关系。',
    explanation: '单位圆上点的坐标即 (cos θ, sin θ)。',
    goals: ['联系角与坐标'],
    tags: ['三角', '单位圆'],
    load: () => import('./math/unit-circle.js'),
  },
  {
    id: 'limit-epsilon',
    subject: 'math', chapterId: 'calc-u1', topicCodes: ['1.2', '1.3', '1.7'],
    title: '极限与 ε-δ',
    summary: '用 ε 邻域与 δ 邻域直观理解极限。',
    explanation: '若 lim f(x)=L，则对任意 ε>0 存在 δ>0，使 0<|x−a|<δ ⇒ |f(x)−L|<ε。',
    goals: ['调节 ε 观察 δ', '区分逼近与到达'],
    tags: ['极限', 'ε-δ'],
    load: () => import('./math/limit-epsilon.js'),
  },
  {
    id: 'derivative-tangent',
    subject: 'math', chapterId: 'calc-u2', topicCodes: ['2.1', '2.2', '2.3'],
    title: '导数与切线',
    summary: '切线斜率即瞬时变化率。',
    explanation: '导数是割线斜率的极限。',
    goals: ['拖动切点', '读 f′(x₀)'],
    tags: ['导数', '切线'],
    load: () => import('./math/derivative-tangent.js'),
  },
  {
    id: 'chain-rule',
    subject: 'math', chapterId: 'calc-u3', topicCodes: ['3.1'],
    title: '链式法则',
    summary: '复合函数导数：外导数 × 内导数。',
    explanation: '(f∘g)′(x)=f′(g(x))·g′(x)。',
    goals: ['分解内外函数', '观察乘积关系'],
    tags: ['链式法则'],
    load: () => import('./math/chain-rule.js'),
  },
  {
    id: 'motion-sva',
    subject: 'math', chapterId: 'calc-u4', topicCodes: ['4.2', '4.1'],
    title: '位置·速度·加速度',
    summary: '直线运动中 s、v、a 的导数关系。',
    explanation: 'v=s′，a=v′=s″。',
    goals: ['对照三图', '判断加速减速'],
    tags: ['运动', '导数应用'],
    load: () => import('./math/motion-sva.js'),
  },
  {
    id: 'extrema-concavity',
    subject: 'math', chapterId: 'calc-u5', topicCodes: ['5.3', '5.6', '5.7'],
    title: '极值与凹性',
    summary: '一阶/二阶导数检验与拐点。',
    explanation: 'f′=0 的临界点结合 f″ 判断极值；f″ 变号处为拐点。',
    goals: ['标临界点', '辨凹凸'],
    tags: ['极值', '凹性'],
    load: () => import('./math/extrema-concavity.js'),
  },
  {
    id: 'riemann-sum',
    subject: 'math', chapterId: 'calc-u6', topicCodes: ['6.2', '6.3', '6.4'],
    title: '黎曼和与定积分',
    summary: '用矩形逼近曲线下面积。',
    explanation: 'n→∞ 时黎曼和趋于定积分。',
    goals: ['增 n 看收敛', '对比左/右/中点'],
    tags: ['积分', '黎曼和'],
    load: () => import('./math/riemann-sum.js'),
  },
  {
    id: 'slope-field-euler',
    subject: 'math', chapterId: 'calc-u7', topicCodes: ['7.3', '7.5', '7.2'],
    title: '斜率场与欧拉法',
    summary: '差分方程的几何图像与数值步进。',
    explanation: '斜率场给出每点切线方向；欧拉法沿方向场近似解曲线。',
    goals: ['读斜率场', '调步长看误差'],
    tags: ['微分方程', '欧拉'],
    load: () => import('./math/slope-field-euler.js'),
  },
  {
    id: 'solid-revolution',
    subject: 'math', chapterId: 'calc-u8', topicCodes: ['8.9', '8.11'],
    title: '旋转体体积',
    summary: '圆盘/垫圈法绕轴旋转求体积。',
    explanation: 'V=π∫[R(x)]² dx（圆盘）；垫圈为外半径²−内半径²。',
    goals: ['观察截面圆盘', '调区间看体积'],
    tags: ['体积', '旋转体'],
    load: () => import('./math/solid-revolution.js'),
  },
  {
    id: 'polar-parametric',
    subject: 'math', chapterId: 'calc-u9', topicCodes: ['9.1', '9.7', '9.8'],
    title: '极坐标与参数曲线',
    summary: 'r(θ) 与 (x(t),y(t)) 的轨迹。',
    explanation: '极坐标 x=r cosθ，y=r sinθ；参数曲线由独立参数驱动。',
    goals: ['切换曲线类型', '观察扫过面积感'],
    tags: ['极坐标', '参数'],
    load: () => import('./math/polar-parametric.js'),
  },
  {
    id: 'series-convergence',
    subject: 'math', chapterId: 'calc-u10', topicCodes: ['10.2', '10.5', '10.8'],
    title: '级数收敛',
    summary: '几何级数与部分和逼近。',
    explanation: '|r|<1 时几何级数收敛到 a/(1−r)；部分和趋近和。',
    goals: ['调公比看收敛发散', '读部分和'],
    tags: ['级数', '收敛'],
    load: () => import('./math/series-convergence.js'),
  },
  {
    id: 'taylor-series',
    subject: 'math', chapterId: 'calc-u10', topicCodes: ['10.11', '10.14', '10.15'],
    title: '泰勒级数',
    summary: '多项式局部逼近函数。',
    explanation: '在展开点附近，高阶泰勒多项式逼近原函数。',
    goals: ['增阶数看逼近', '换展开点'],
    tags: ['泰勒', '逼近'],
    load: () => import('./math/taylor-series.js'),
  },

  // —— Mech ——
  {
    id: 'projectile',
    subject: 'mech', chapterId: 'mech-u1', topicCodes: ['1.2', '1.1'],
    title: '抛体运动',
    summary: '二维抛体轨迹与射程。',
    explanation: '水平匀速、竖直匀变速；可含空气阻力。',
    goals: ['调角度与初速', '读射程'],
    tags: ['运动学', '抛体'],
    load: () => import('./physics/projectile.js'),
  },
  {
    id: 'newton-incline',
    subject: 'mech', chapterId: 'mech-u2', topicCodes: ['2.3', '2.5'],
    title: '牛顿第二定律与斜面',
    summary: '斜面上的重力分解与加速度。',
    explanation: '沿斜面 net F = mg sinθ − μN；a = F_net/m。',
    goals: ['分解重力', '观察 a 随 θ、μ 变化'],
    tags: ['牛顿', '斜面'],
    load: () => import('./mech/newton-incline.js'),
  },
  {
    id: 'work-energy',
    subject: 'mech', chapterId: 'mech-u3', topicCodes: ['3.1', '3.3', '3.4'],
    title: '功与机械能',
    summary: '滑块下滑中动能与势能交换。',
    explanation: '无摩擦时机械能守恒；功率 P=Fv。',
    goals: ['读 K/U 条形图', '对比有无摩擦'],
    tags: ['功', '能量'],
    load: () => import('./mech/work-energy.js'),
  },
  {
    id: 'collision-momentum',
    subject: 'mech', chapterId: 'mech-u4', topicCodes: ['4.1', '4.2'],
    title: '动量守恒碰撞',
    summary: '一维弹性/非弹性碰撞。',
    explanation: '系统外力为零时动量守恒；弹性还守恒动能。',
    goals: ['对比弹性与完全非弹性', '读动量条'],
    tags: ['动量', '碰撞'],
    load: () => import('./mech/collision-momentum.js'),
  },
  {
    id: 'rigid-rotation',
    subject: 'mech', chapterId: 'mech-u5', topicCodes: ['5.1', '5.2', '5.3'],
    title: '刚体转动与转动惯量',
    summary: '力矩、角加速度与 I。',
    explanation: 'τ_net = Iα；质量分布离轴越远 I 越大。',
    goals: ['调质量分布', '观察 α'],
    tags: ['转动', '力矩'],
    load: () => import('./mech/rigid-rotation.js'),
  },
  {
    id: 'gravity-orbit',
    subject: 'mech', chapterId: 'mech-u6', topicCodes: ['6.4', '2.6'],
    title: '万有引力轨道',
    summary: '中心引力下的开普勒轨道。',
    explanation: 'F=GMm/r²；合适初速产生椭圆/圆/双曲线轨。',
    goals: ['调初速看轨型', '观察近地点'],
    tags: ['引力', '轨道'],
    load: () => import('./mech/gravity-orbit.js'),
  },
  {
    id: 'shm',
    subject: 'mech', chapterId: 'mech-u7', topicCodes: ['7.1', '7.2'],
    title: '简谐振动',
    summary: '弹簧–质量系统与能量交换。',
    explanation: 'ω=√(k/m)；动能与弹性势能周期性互换。',
    goals: ['调 k、m、阻尼', '读能量'],
    tags: ['SHM', '弹簧'],
    load: () => import('./physics/shm.js'),
  },

  // —— E&M ——
  {
    id: 'electric-field',
    subject: 'em', chapterId: 'em-u8', topicCodes: ['8.2', '8.3', '8.1'],
    title: '电场线与等势',
    summary: '点电荷的电场与等势线。',
    explanation: '电场强度叠加；等势面与场线正交。',
    goals: ['放置电荷', '读场强方向'],
    tags: ['电场'],
    load: () => import('./physics/electric-field.js'),
  },
  {
    id: 'gauss-law',
    subject: 'em', chapterId: 'em-u8', topicCodes: ['8.4', '8.5'],
    title: '高斯定律',
    summary: '对称电荷分布的电通量与封闭曲面。',
    explanation: '∮E·dA = Q_enc/ε₀；球对称时 E=kQ/r²（面外）。',
    goals: ['调高斯面半径', '对比面内外场'],
    tags: ['高斯', '通量'],
    load: () => import('./em/gauss-law.js'),
  },
  {
    id: 'electric-potential',
    subject: 'em', chapterId: 'em-u9', topicCodes: ['9.1', '9.2', '9.4'],
    title: '电势与电势能',
    summary: '点电荷电势与试探电荷势能。',
    explanation: 'V=kQ/r；U=qV；电势差对应场做功。',
    goals: ['读等势圆', '调电荷看 V'],
    tags: ['电势'],
    load: () => import('./em/electric-potential.js'),
  },
  {
    id: 'capacitor',
    subject: 'em', chapterId: 'em-u10', topicCodes: ['10.3', '10.4'],
    title: '平行板电容器',
    summary: '电容、电场与电介质。',
    explanation: 'C=κε₀A/d；插入电介质增大 C。',
    goals: ['调间距与面积', '观察 κ 效应'],
    tags: ['电容', '电介质'],
    load: () => import('./em/capacitor.js'),
  },
  {
    id: 'rc-circuit',
    subject: 'em', chapterId: 'em-u11', topicCodes: ['11.8', '11.2', '11.3'],
    title: 'RC 电路',
    summary: '电容充放电的指数过程。',
    explanation: 'τ=RC；充电 q=CE(1−e^(−t/τ))。',
    goals: ['调 R、C 看时间常数', '切换充/放'],
    tags: ['RC', '电路'],
    load: () => import('./em/rc-circuit.js'),
  },
  {
    id: 'charged-particle-B',
    subject: 'em', chapterId: 'em-u12', topicCodes: ['12.2', '12.1'],
    title: '磁场中的带电粒子',
    summary: '洛伦兹力导致圆周/螺旋运动。',
    explanation: 'F=qvB（v⊥B）；r=mv/(qB)。',
    goals: ['调 v、B、q', '观察半径'],
    tags: ['洛伦兹力', '磁场'],
    load: () => import('./em/charged-particle-B.js'),
  },
  {
    id: 'faraday-induction',
    subject: 'em', chapterId: 'em-u13', topicCodes: ['13.1', '13.2', '13.3'],
    title: '法拉第电磁感应',
    summary: '磁通量变化产生感应电动势。',
    explanation: 'ε=−dΦ_B/dt；楞次定律决定感应电流方向。',
    goals: ['移动磁体/改变面积', '读感应电流方向'],
    tags: ['法拉第', '感应'],
    load: () => import('./em/faraday-induction.js'),
  },
];

export const PATHS = [
  {
    id: 'ap-bio',
    title: 'AP Biology 通览',
    summary: '从分子到生态的八单元主线。',
    moduleIds: [
      'enzyme-activity', 'membrane-transport', 'energy-flow', 'mitosis',
      'mendel-punnett', 'dna-replication', 'hardy-weinberg', 'lotka-volterra',
    ],
  },
  {
    id: 'ap-calc-bc',
    title: 'AP Calculus BC 主线',
    summary: '极限 → 导数 → 积分 → 级数。',
    moduleIds: [
      'limit-epsilon', 'derivative-tangent', 'chain-rule', 'motion-sva',
      'extrema-concavity', 'riemann-sum', 'slope-field-euler', 'solid-revolution',
      'polar-parametric', 'series-convergence', 'taylor-series',
    ],
  },
  {
    id: 'ap-mech',
    title: 'AP Physics C 力学',
    summary: '运动学到振动的力学链。',
    moduleIds: [
      'projectile', 'newton-incline', 'work-energy', 'collision-momentum',
      'rigid-rotation', 'gravity-orbit', 'shm',
    ],
  },
  {
    id: 'ap-em',
    title: 'AP Physics C 电磁',
    summary: '从电场到电磁感应。',
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
