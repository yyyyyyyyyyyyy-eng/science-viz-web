/** Unit-family-specific math practice templates (no cross-unit AROC copies). */

export function mathFamily(unitId) {
  if (!unitId) return 'limits';
  if (unitId.startsWith('math-prep-alg1')) return 'prep-alg1';
  if (unitId.startsWith('math-prep-geo')) return 'prep-geo';
  if (unitId.startsWith('math-prep-alg2')) return 'prep-alg2';
  if (unitId.startsWith('math-prep-precalc')) return 'prep-precalc';
  if (unitId === 'calc-u0') return 'calc-prep';
  if (unitId === 'calc-u1') return 'limits';
  if (unitId === 'calc-u2' || unitId === 'calc-u3') return 'derivatives';
  if (unitId === 'calc-u4' || unitId === 'calc-u5') return 'deriv-apps';
  if (unitId === 'calc-u6' || unitId === 'calc-u8') return 'integrals';
  if (unitId === 'calc-u7') return 'diff-eq';
  if (unitId === 'calc-u9') return 'parametric';
  if (unitId === 'calc-u10') return 'series';
  return 'limits';
}

function pick(arr, i) { return arr[i % arr.length]; }
function diff(i) { return ['易', '中', '难'][i % 3]; }

/** Generator variants are assigned per CED unit, not per broad family. */
const UNIT_GENERATORS = {
  'calc-u1': ['limit'],
  'calc-u2': ['power', 'product'],
  'calc-u3': ['chain'],
};

/** Unit-specific overrides keep shared-family practice from drifting across units. */
const UNIT_SYMBOLIC = {
  'calc-u3': {
    stemLatex: String.raw`\dfrac{\mathrm{d}}{\mathrm{d}x}\sin\left(x^{2}\right)=`,
    expected: '2x cos(x^2)',
    answerLatex: String.raw`2x\cos\left(x^{2}\right)`,
    solution: '链式法则：外层余弦乘以内层导数 2x。',
  },
  'calc-u5': {
    stemLatex: String.raw`f(x)=x^{3}-3x\text{：}f'(x)=`,
    expected: '3x^2-3',
    answerLatex: String.raw`3x^{2}-3`,
    solution: '逐项使用幂法则。',
  },
  'calc-u8': {
    stemLatex: String.raw`\int_0^1\left(x-x^{2}\right)\mathrm{d}x=`,
    expected: 1 / 6,
    tol: 0.01,
    check: 'numeric',
    answerLatex: String.raw`\dfrac{1}{6}`,
    solution: '两曲线间面积：∫₀¹(x−x²)dx=⅙。',
  },
  'calc-prep': {
    stemLatex: String.raw`f(x)=x^{2}+1\text{：}f(2)=`,
    expected: 5,
    answerLatex: '5',
    solution: '代入 x=2 得 4+1=5。',
  },
};

const UNIT_IDEAS = {
  'calc-u3': '链式法则把复合函数的导数分解为外层导数与内层导数之积',
  'calc-u5': '一阶导数符号决定增减，二阶导数符号决定凹凸',
  'calc-prep': '单位圆把角与坐标 (cos θ, sin θ) 对应起来',
};

const UNIT_DRILLS = {
  'calc-u3': {
    stemLatex: String.raw`f(x)=\left(x^{2}+1\right)^{3},\;f'(1)=`,
    expected: 24,
    answerLatex: '24',
    solution: '链式法则：3(x²+1)²·2x，在 x=1 得 24。',
  },
  'calc-u5': {
    stemLatex: String.raw`f(x)=x^{3}-3x\text{ 在 }(0,2)\text{ 内的临界点 }x=`,
    expected: 1,
    answerLatex: '1',
    solution: 'f′(x)=3x²−3=0，取 (0,2) 内的 x=1。',
  },
  'calc-u8': {
    stemLatex: String.raw`\pi\int_0^1 x^{4}\,\mathrm{d}x=`,
    expected: Math.PI / 5,
    answerLatex: String.raw`\dfrac{\pi}{5}`,
    solution: '圆盘法：π∫₀¹(x²)²dx=π/5。',
  },
  'calc-prep': {
    stemLatex: String.raw`\cos\dfrac{\pi}{3}=`,
    expected: 0.5,
    answerLatex: String.raw`\dfrac{1}{2}`,
    solution: '单位圆上 π/3 的横坐标为 ½。',
  },
};

const UNIT_PROMPTS = {
  'calc-u3': '用链式法则解释复合函数求导的顺序，并举一个例子。',
  'calc-u5': '说明一阶导数与二阶导数的符号分别能提供什么图像信息。',
  'calc-prep': '说明 y=f(x−a) 的图像与 y=f(x) 的图像之间的平移关系。',
};

/** AP units omit the generic algebra-factorization mode; it is not a CED topic there. */
const AP_MODES_NO_FACTOR = [1, 3, 4, 5];
const UNIT_MODES = {
  'calc-u1': [0, 1, 3, 4, 5],
  'calc-u2': [0, 1, 3, 4, 5],
  'calc-u3': [0, 1, 3, 4, 5],
  'calc-u4': AP_MODES_NO_FACTOR,
  'calc-u5': AP_MODES_NO_FACTOR,
  'calc-u6': AP_MODES_NO_FACTOR,
  'calc-u7': AP_MODES_NO_FACTOR,
  'calc-u8': AP_MODES_NO_FACTOR,
  'calc-u9': AP_MODES_NO_FACTOR,
  'calc-u10': AP_MODES_NO_FACTOR,
  'calc-u0': AP_MODES_NO_FACTOR,
  'math-prep-alg2': AP_MODES_NO_FACTOR,
  'math-prep-geo': AP_MODES_NO_FACTOR,
  'math-prep-precalc': AP_MODES_NO_FACTOR,
};

export function mathStimulus(unit, topic, s, srcLine) {
  const title = topic?.titleZh || unit.titleZh || '函数';
  const fam = mathFamily(unit.id);
  const base = { ...srcLine('openstax_calc', 'Unit-specific stimulus; OpenStax Calculus pedagogy aligned; data original.') };
  if (fam === 'limits' || fam === 'derivatives' || fam === 'calc-prep') {
    return {
      title: `${title} · 数值—图像—符号`,
      text: '下表给出 f 在若干点的值；图像为同一函数示意。用三种表征回答。',
      table: { headers: ['x', 'f(x)'], rows: [['0', '1'], ['1', '2'], ['2', '5'], ['3', '10']] },
      graph: { points: [[0, 1], [1, 2], [2, 5], [3, 10]], xLabel: 'x', yLabel: 'f' },
      ...base,
    };
  }
  if (fam === 'deriv-apps') {
    return {
      title: `${title} · 直线运动数据`,
      text: '质点沿直线运动；表给出位置 s(t)（米），t 以秒计。',
      table: { headers: ['t', 's(t)'], rows: [['0', '0'], ['1', '3'], ['2', '8'], ['3', '15']] },
      graph: { points: [[0, 0], [1, 3], [2, 8], [3, 15]], xLabel: 't', yLabel: 's' },
      ...base,
    };
  }
  if (fam === 'integrals') {
    return {
      title: `${title} · 速率表与黎曼和`,
      text: '下表给出速率 v(t)（m/s）。用左/右端点或梯形估计位移。',
      table: { headers: ['t', 'v(t)'], rows: [['0', '2'], ['1', '3'], ['2', '5'], ['3', '4'], ['4', '6']] },
      graph: { points: [[0, 2], [1, 3], [2, 5], [3, 4], [4, 6]], xLabel: 't', yLabel: 'v' },
      ...base,
    };
  }
  if (fam === 'diff-eq') {
    return {
      title: `${title} · 斜率场要点`,
      text: '微分方程 dy/dx = y − x 的斜率场在若干格点给出方向。',
      table: { headers: ['点', '斜率'], rows: [['(0,0)', '0'], ['(1,0)', '−1'], ['(0,1)', '1'], ['(1,1)', '0']] },
      ...base,
    };
  }
  if (fam === 'parametric') {
    return {
      title: `${title} · 参数路径`,
      text: '粒子路径 x(t)=t², y(t)=t³ − 3t（t≥0）。',
      table: { headers: ['t', 'x', 'y'], rows: [['0', '0', '0'], ['1', '1', '−2'], ['2', '4', '2']] },
      ...base,
    };
  }
  if (fam === 'series') {
    return {
      title: `${title} · 部分和`,
      text: '考察级数 ∑ a_n 的部分和 S_n（几何型 a_n=(½)^{n−1}）。',
      table: { headers: ['n', 'a_n', 'S_n'], rows: [['1', '1', '1'], ['2', '½', '1.5'], ['3', '¼', '1.75'], ['4', '⅛', '1.875']] },
      ...base,
    };
  }
  if (fam === 'prep-alg1' || fam === 'prep-alg2') {
    return {
      title: `${title} · 代数表`,
      text: '根据表中输入—输出关系，建立并检验代数模型。',
      table: { headers: ['x', 'y'], rows: [['−1', '1'], ['0', '3'], ['1', '5'], ['2', '7']] },
      graph: { points: [[-1, 1], [0, 3], [1, 5], [2, 7]], xLabel: 'x', yLabel: 'y' },
      ...base,
    };
  }
  if (fam === 'prep-geo') {
    return {
      title: `${title} · 几何量`,
      text: '直角三角形腿长 3、4；斜边与三角比如下文小题所用。',
      table: { headers: ['量', '值'], rows: [['a', '3'], ['b', '4'], ['c', '5']] },
      ...base,
    };
  }
  return {
    title: `${title} · 三角/函数值`,
    text: '单位圆上角 θ 的坐标与三角值。',
    table: { headers: ['θ', 'cos θ', 'sin θ'], rows: [['0', '1', '0'], ['π/6', '0.866', '0.5'], ['π/4', '0.707', '0.707'], ['π/3', '0.5', '0.866']] },
    ...base,
  };
}

export function mathSetQuestion(unit, topics, qid, j, stim, s, srcLine) {
  const fam = mathFamily(unit.id);
  const t = topics[j % Math.max(1, topics.length)] || { titleZh: unit.titleZh };
  const d = diff(j);
  const banks = {
    integrals: [
      { title: '左黎曼和', type: 'frq', check: 'numeric', stem: '用左端点、Δt=1，估计 ∫₀⁴ v(t) dt。', expected: 14, tol: 0.05, answerLatex: '14', solution: 'v(0)+v(1)+v(2)+v(3)=2+3+5+4=14。' },
      { title: '平均速率', type: 'frq', check: 'numeric', stem: '若位移近似 14，求 [0,4] 上平均速率。', expected: 3.5, tol: 0.05, answerLatex: String.raw`\dfrac{14}{4}=3.5`, solution: '位移/时间。' },
      { title: '定积分符号', type: 'frq', check: 'symbolic', calculator: false, stemLatex: String.raw`\text{写出 }\int_0^4 v(t)\,\mathrm{d}t\text{ 的黎曼和极限定义（符号）}`, expected: 'lim n->inf sum v(t_i*) Delta t', answerLatex: String.raw`\lim_{n\to\infty}\sum_{i=1}^{n}v(t_i^{*})\Delta t`, solution: '定积分定义。' },
      { title: '累积解释', type: 'frq', stem: `结合「${t.titleZh}」，说明定积分在本题中的单位与意义。`, answer: '∫v dt 的单位是米，表示净位移（有向）。', solution: '单位分析。' },
    ],
    'diff-eq': [
      { title: '斜率读取', type: 'frq', check: 'numeric', stem: '在点 (1,0) 处 dy/dx = y−x 的斜率是？', expected: -1, tol: 0.01, answerLatex: '-1', solution: '0−1=−1。' },
      { title: '特解检验', type: 'frq', check: 'symbolic', calculator: false, stemLatex: String.raw`\text{验证 }y=x+1\text{ 是否满足 }\dfrac{\mathrm{d}y}{\mathrm{d}x}=y-x`, expected: "y'=1=y-x", answerLatex: String.raw`y'=1=y-x`, solution: '两边同为 1。' },
      { title: '分离变量', type: 'frq', check: 'symbolic', calculator: false, stemLatex: String.raw`\dfrac{\mathrm{d}y}{\mathrm{d}x}=ky\text{ 的通解（C 任意）}`, expected: 'y=Ce^{kx}', answerLatex: String.raw`y=Ce^{kx}`, solution: '分离变量。' },
      { title: '斜率场叙述', type: 'frq', stem: `就「${t.titleZh}」说明斜率场如何帮助画出特解曲线。`, answer: '沿格点方向作短线，从初值点顺着场画曲线。', solution: '定性解。' },
    ],
    parametric: [
      { title: '速度分量', type: 'frq', check: 'symbolic', calculator: false, stemLatex: String.raw`x=t^{2},\;y=t^{3}-3t\text{：求 }\dfrac{\mathrm{d}y}{\mathrm{d}x}\text{（用 }t\text{ 表示）}`, expected: '(3t^2-3)/(2t)', answerLatex: String.raw`\dfrac{3t^{2}-3}{2t}`, solution: '(dy/dt)/(dx/dt)。' },
      { title: '水平切线', type: 'frq', check: 'numeric', stem: 'dy/dt=0 且 dx/dt≠0 时 t 的一个正解？', expected: 1, tol: 0.01, answerLatex: '1', solution: '3t²−3=0 ⇒ t=±1。' },
      { title: '弧长被积', type: 'frq', check: 'symbolic', calculator: false, stemLatex: String.raw`\text{弧长元 }\sqrt{(x')^{2}+(y')^{2}}\text{（}x=t^{2},y=t^{3}-3t\text{）}`, expected: 'sqrt(4t^2+(3t^2-3)^2)', answerLatex: String.raw`\sqrt{4t^{2}+(3t^{2}-3)^{2}}`, solution: '定义。' },
      { title: '概念', type: 'frq', stem: `说明「${t.titleZh}」中参数 t 与轨迹几何的关系。`, answer: '同一轨迹可不同参数化；速度沿切向。', solution: '参数化。' },
    ],
    series: [
      { title: '几何级数', type: 'frq', check: 'symbolic', calculator: false, stemLatex: String.raw`\sum_{n=0}^{\infty}\left(\dfrac{1}{2}\right)^{n}\text{ 的和}`, expected: '2', answerLatex: '2', solution: '1÷(1−½)=2。' },
      { title: '比值审敛', type: 'frq', check: 'symbolic', calculator: false, stemLatex: String.raw`a_n=\dfrac{n!}{n^{n}}\text{：}\lim\dfrac{|a_{n+1}|}{|a_n|}`, expected: '1/E', answerLatex: String.raw`\dfrac{1}{e}`, solution: '比值极限为 e 的倒数（约 0.368），小于 1，故绝对收敛。', solutionLatex: String.raw`\lim_{n\to\infty}\dfrac{|a_{n+1}|}{|a_n|}=\dfrac{1}{e}<1\Rightarrow\text{绝对收敛}` },
      { title: '部分和', type: 'frq', check: 'numeric', stem: '几何级数首项 1、公比 ½：S_4=？', expected: 1.875, tol: 0.01, answerLatex: String.raw`\dfrac{15}{8}`, solution: '1+½+¼+⅛=1.875。' },
      { title: '收敛叙述', type: 'frq', stem: `就「${t.titleZh}」区分序列收敛与级数收敛。`, answer: '序列看 a_n→L；级数看部分和 S_n→S。', solution: '必要条件 a_n→0。' },
    ],
    'prep-geo': [
      { title: '勾股', type: 'frq', check: 'numeric', stem: '腿 3、4 的直角三角形斜边？', expected: 5, tol: 0.01, answerLatex: '5', solution: '√(9+16)=5。' },
      { title: '三角比', type: 'frq', check: 'symbolic', calculator: false, stemLatex: String.raw`\text{对边 }3\text{、邻边 }4\text{：}\tan\theta=`, expected: '3/4', answerLatex: String.raw`\dfrac{3}{4}`, solution: '定义。' },
      { title: '面积', type: 'frq', check: 'numeric', stem: '直角三角形腿 3、4 的面积？', expected: 6, tol: 0.01, answerLatex: '6', solution: '½·3·4=6。' },
      { title: '相似', type: 'frq', stem: `说明「${t.titleZh}」中相似比如何缩放面积。`, answer: '长度比 k ⇒ 面积比 k²。', solution: '二维缩放。' },
    ],
    'prep-alg1': null,
    'prep-alg2': null,
    'prep-precalc': [
      { title: '特殊角', type: 'frq', check: 'symbolic', calculator: false, stemLatex: String.raw`\sin\dfrac{\pi}{6}=`, expected: '1/2', answerLatex: String.raw`\dfrac{1}{2}`, solution: '单位圆。' },
      { title: '恒等式', type: 'frq', check: 'symbolic', calculator: false, stemLatex: String.raw`\sin^{2}\theta+\cos^{2}\theta=`, expected: '1', answerLatex: '1', solution: '毕达哥拉斯恒等式。' },
      { title: '对数', type: 'frq', check: 'numeric', stem: 'log₂ 8 =？', expected: 3, tol: 0.01, answerLatex: '3', solution: '2³=8。' },
      { title: '概念', type: 'frq', stem: `说明「${t.titleZh}」中单位圆如何定义三角值。`, answer: '终边与单位圆交点 (x,y)=(cos θ, sin θ)。', solution: '定义。' },
    ],
    'deriv-apps': [
      { title: '平均速度', type: 'frq', check: 'numeric', stem: '用表估计 t∈[1,2] 的平均速度。', expected: 5, tol: 0.05, answerLatex: '5', solution: '(8-3)/(2-1)=5 m/s。' },
      { title: '瞬时速度符号', type: 'frq', check: 'symbolic', calculator: false, stemLatex: String.raw`v(t)=s'(t)=\lim_{h\to 0}\dfrac{s(t+h)-s(t)}{h}`, expected: "s'(t)", answerLatex: String.raw`s'(t)`, solution: '定义。' },
      { title: '相关变化率', type: 'frq', check: 'symbolic', calculator: false, stemLatex: String.raw`A=\pi r^{2}\Rightarrow\dfrac{\mathrm{d}A}{\mathrm{d}t}=`, expected: '2*pi*r*dr/dt', answerLatex: String.raw`2\pi r\dfrac{\mathrm{d}r}{\mathrm{d}t}`, solution: '链式法则。' },
      { title: '单位', type: 'frq', stem: `在「${t.titleZh}」中说明 ds/dt 的单位。`, answer: '若 s 为米、t 为秒，则 m/s。', solution: '单位随情境。' },
    ],
    derivatives: [
      { title: '幂法则', type: 'frq', check: 'symbolic', calculator: false, stemLatex: String.raw`\dfrac{\mathrm{d}}{\mathrm{d}x}x^{4}=`, expected: '4x^3', answerLatex: '4x^{3}', solution: '幂法则。' },
      { title: '差分商', type: 'frq', check: 'symbolic', calculator: false, stemLatex: String.raw`f(x)=x^{2}+1:\ \dfrac{f(x)-f(1)}{x-1}\ (x\neq 1)`, expected: 'x+1', answerLatex: 'x+1', solution: '因式分解。' },
      { title: '链式', type: 'frq', check: 'symbolic', calculator: false, stemLatex: String.raw`\dfrac{\mathrm{d}}{\mathrm{d}x}\sin(3x)=`, expected: '3cos(3x)', answerLatex: String.raw`3\cos(3x)`, solution: '链式法则。' },
      { title: '可微性', type: 'frq', stem: `结合「${t.titleZh}」，说明尖点处为何不可导。`, answer: '左右导数不相等（或差分商极限不存在）。', solution: '定义。' },
    ],
    limits: [
      { title: '平均变化率', type: 'frq', check: 'numeric', stem: '根据表中数据，估计 f 在 x=1 与 x=2 之间的平均变化率。', expected: 3, tol: 0.05, answerLatex: '3', solution: '(5-2)/(2-1)=3。' },
      { title: '符号极限', type: 'frq', check: 'symbolic', calculator: false, stemLatex: String.raw`\lim_{x\to 1}\dfrac{x^{2}-1}{x-1}`, expected: '2', answerLatex: '2', solution: '(x-1)(x+1)/(x-1)→2。' },
      { title: '图像极限', type: 'frq', stem: '说明图像上哪一段斜率最大，并与表中差分商对照。', answer: 'x∈[2,3] 差分商最大（约 5），与最陡段一致。', solution: '多表征对齐。' },
      { title: '连续', type: 'frq', stem: `就「${t.titleZh}」陈述连续的三点定义。`, answer: 'f(a) 有定义；极限存在；极限等于 f(a)。', solution: '定义。' },
    ],
  };
  banks['prep-alg1'] = [
    { title: '斜率', type: 'frq', check: 'numeric', stem: '过 (0,3)、(2,7) 的直线斜率？', expected: 2, tol: 0.01, answerLatex: '2', solution: '(7−3)÷(2−0)=2。' },
    { title: '线性模型', type: 'frq', check: 'symbolic', calculator: false, stemLatex: String.raw`\text{斜率 }2\text{、过 }(0,3)\text{：}y=`, expected: '2x+3', answerLatex: '2x+3', solution: '斜截式。' },
    { title: '求根', type: 'frq', check: 'numeric', stem: '2x+3=0 的根？', expected: -1.5, tol: 0.01, answerLatex: String.raw`-\dfrac{3}{2}`, solution: 'x=−1.5。' },
    { title: '表征', type: 'frq', stem: `用「${t.titleZh}」语言解释表、式、图像三者一致性。`, answer: '同一线性关系的三种表示；差分商恒为斜率。', solution: '多表征。' },
  ];
  banks['prep-alg2'] = [
    { title: '二次方程', type: 'frq', check: 'numeric', stem: 'x²−5x+6=0 的较大根？', expected: 3, tol: 0.01, answerLatex: '3', solution: '(x−2)(x−3)=0。' },
    { title: '顶点', type: 'frq', check: 'numeric', stem: 'y=(x−2)²+1 的最小值？', expected: 1, tol: 0.01, answerLatex: '1', solution: '平方项最小为 0，故最小值为 1。' },
    { title: '复合函数', type: 'frq', check: 'numeric', stem: 'f(x)=x+1，g(x)=x²，求 (f∘g)(2)。', expected: 5, tol: 0.01, answerLatex: '5', solution: 'g(2)=4，f(4)=5。' },
    { title: '定义域', type: 'frq', stem: '求 f(x)=1÷(x−3) 的定义域。', answer: 'x≠3，即 (−∞,3)∪(3,∞)。', solution: '分母不能为零。' },
  ];
  banks['calc-prep'] = [
    { title: '函数值', type: 'frq', check: 'numeric', stem: 'f(x)=x²−2x，求 f(3)。', expected: 3, tol: 0.01, answerLatex: '3', solution: '9−6=3。' },
    { title: '图像平移', type: 'frq', stem: '说明 y=(x−2)² 的图像与 y=x² 的图像之间的变换关系。', answer: '把 y=x² 的图像向右平移 2 个单位。', solution: 'x 替换为 x−2 对应右移。' },
    { title: '单位圆', type: 'frq', check: 'symbolic', calculator: false, stemLatex: String.raw`\sin\dfrac{\pi}{3}=`, expected: 'sqrt(3)/2', answerLatex: String.raw`\dfrac{\sqrt{3}}{2}`, solution: '单位圆上 π/3 的纵坐标为 √3÷2。' },
    { title: '三角值', type: 'frq', check: 'numeric', calculator: false, stemLatex: String.raw`\cos\pi=`, expected: -1, tol: 0.01, answerLatex: '-1', solution: '单位圆上 π 对应 (−1,0)。' },
  ];
  const bank = banks[fam] || banks.limits;
  const p = bank[j % bank.length];
  return { id: qid, difficulty: d, calculator: p.calculator !== false && p.check === 'numeric', ...p, ...srcLine('openstax_calc') };
}

function polyExpand(n) {
  const terms = [];
  for (let k = n - 1; k >= 1; k--) terms.push(`x^${k}`);
  terms.push('1');
  return terms.join('+');
}
function polyExpandLatex(n) {
  const terms = [];
  for (let k = n - 1; k >= 1; k--) {
    terms.push(k === 1 ? 'x' : `x^{${k}}`);
  }
  terms.push('1');
  return terms.join('+');
}

/** Prompt-specific model answers for the argumentative FRQs. */
const FRQ_MODEL_ANSWERS = {
  '用 ε-δ 直觉或图像说明为何去掉一点仍可有极限。': {
    answerLatex: String.raw`\lim_{x\to2}\dfrac{x^{2}-4}{x-2}=4`,
    answer: '极限只由 x 在 a 附近（但 x≠a）的取值决定，与 f(a) 是否有定义无关。例如 f(x)=(x²−4)÷(x−2) 在 x=2 无定义，但 x≠2 时 f(x)=x+2，故极限为 4。按 ε-δ：任给 ε>0，取 δ=ε，当 0<|x−2|<δ 时 |f(x)−4|=|x−2|<ε。',
    solution: '可去间断处函数值可以缺失或被改写；只要去心邻域内函数值趋近同一数，极限就存在。',
  },
  '解释差分商极限如何从平均变化率过渡到瞬时变化率。': {
    answerLatex: String.raw`f'(a)=\lim_{h\to0}\dfrac{f(a+h)-f(a)}{h}`,
    answer: '平均变化率是区间上的割线斜率 [f(a+h)−f(a)]÷h；让 h→0，割线趋近切线，差商极限就是瞬时变化率 f′(a)。例如 f(x)=x² 时差商为 (2ah+h²)÷h=2a+h→2a，即 f′(a)=2a。',
    solution: '先从两点割线求平均变化率，再令两点间距趋于零取极限。',
  },
  '用链式法则解释复合函数求导的顺序，并举一个例子。': {
    answerLatex: String.raw`\dfrac{\mathrm{d}}{\mathrm{d}x}f(g(x))=f'(g(x))g'(x)`,
    answer: '复合函数 y=f(g(x)) 的导数是外层导数在 g(x) 处的值乘以内层导数：y′=f′(g(x))g′(x)。先对外层求导（内层保持不变），再乘内层导数。例如 y=(3x²+1)⁵，y′=5(3x²+1)⁴·6x=30x(3x²+1)⁴。',
    solution: '由外向内逐层求导，每一层都乘以下一层的导数；不要漏掉内层导数。',
  },
  '举一个相关变化率的实际例子并写出等式。': {
    answerLatex: String.raw`A=\pi r^{2}\Rightarrow\dfrac{\mathrm{d}A}{\mathrm{d}t}=2\pi r\dfrac{\mathrm{d}r}{\mathrm{d}t}`,
    answer: '例：圆形水波的半径 r 以 2 cm·s⁻¹ 增大，面积 A=πr²。对时间 t 求导得 A′(t)=2πr·r′(t)；当 r=5 cm 时 A′(t)=2π·5·2=20π cm²·s⁻¹。',
    solution: '先写出联系各变量的几何关系，再对同一时间变量用链式法则求导。',
  },
  '说明一阶导数与二阶导数的符号分别能提供什么图像信息。': {
    answer: 'f′>0 时函数递增，f′<0 时递减，f′=0 且变号处为局部极值；f″>0 时图像凹向上，f″<0 时凹向下，f″=0 且变号处为拐点。',
    solution: '一阶导数控制增减与极值，二阶导数控制凹凸与拐点；两者合起来才能较完整地描出图像。',
  },
  '说明净面积与总面积（绝对值）在应用中的区别。': {
    answerLatex: String.raw`\int_0^{2\pi}\sin x\,\mathrm{d}x=0,\qquad \int_0^{2\pi}|\sin x|\,\mathrm{d}x=4`,
    answer: '净面积按有向面积相加，曲线在 x 轴下方时积分为负；总面积取 |f(x)| 再积分，恒为非负。例如 ∫₀^{2π}sin x dx=0 是净面积，而 ∫₀^{2π}|sin x|dx=4 是总面积。',
    solution: '净面积回答位移与净变化，总面积回答实际经过的量；只有函数不变号时二者才相等。',
  },
  '解释欧拉法一步如何用斜率推进近似解。': {
    answerLatex: String.raw`y_{n+1}=y_n+h\,y'(x_n,y_n),\qquad x_{n+1}=x_n+h`,
    answer: '欧拉法从已知点 (x_n,y_n) 出发，用该点斜率场给出的斜率 m=y′(x_n,y_n) 作切线，沿切线前进步长 h：y_{n+1}=y_n+h·m，x_{n+1}=x_n+h。也就是用一步线性近似代替真实解曲线，步长越小通常越接近。',
    solution: '一步欧拉法把局部切线当作解曲线的近似；每步都在新点重新读取斜率。',
  },
  '说明同一曲线不同参数化时 dy/dx 不变的原因。': {
    answerLatex: String.raw`\dfrac{\mathrm{d}y}{\mathrm{d}x}=\dfrac{\mathrm{d}y}{\mathrm{d}t}\div\dfrac{\mathrm{d}x}{\mathrm{d}t}`,
    answer: '因为曲线的切线斜率是几何量，与参数选取无关。若换参数 t=t(s) 且 dt÷ds≠0，则 (dy÷ds)÷(dx÷ds)=[(dy÷dt)(dt÷ds)]÷[(dx÷dt)(dt÷ds)]=(dy÷dt)÷(dx÷dt)。只要 dx÷dt≠0，商不变。',
    solution: '参数化只是描述曲线的不同“走法”；链式法则使参数变化率在商中约去。',
  },
  '举一个条件收敛但不绝对收敛的级数例子（名称即可）。': {
    answerLatex: String.raw`\sum_{n=1}^{\infty}\dfrac{(-1)^{n}}{n}`,
    answer: '∑_{n=1}^{∞}(−1)ⁿ÷n（交错调和级数）。它按交错级数判别法收敛，但取绝对值后为调和级数 ∑(1÷n)，发散，所以条件收敛而不绝对收敛。',
    solution: '条件收敛就是原级数收敛而绝对值级数发散；交错调和级数是标准例子。',
  },
  '说明为何解方程时移项与两边同加是等价变形。': {
    answer: '等式两边同加（或同减）同一个数仍相等；移项本质是两边同加该项的相反数。例如由 x+3=7 两边同加 −3 得 x=4，所以移项与两边同加是同一等价变形，不会改变解集。',
    solution: '等式性质保证同加同一个数后解集不变；移项只是把这一步写成更快的简写。',
  },
  '解释函数复合 (f∘g)(x) 的求值顺序。': {
    answer: '(f∘g)(x) 表示先算内层 g(x)，再把结果作为外层 f 的输入，即 f(g(x))，从右向左求值。例如 f(x)=x+1、g(x)=x² 时，(f∘g)(2)=f(g(2))=f(4)=5。',
    solution: '记号 f∘g 先作用 g 再作用 f；顺序反了通常会得到不同结果。',
  },
  '说明为何 AAA 相似但不能推出全等。': {
    answer: 'AAA 只保证三个角对应相等，因而形状相同、对应边成比例，是相似；全等还要求对应边长度相等（比例因子为 1）。例如边长 3、4、5 与 6、8、10 的两个三角形 AAA 相似但不全等。',
    solution: '角度决定形状，边长决定大小；AAA 缺少边长信息，所以不能推出全等。',
  },
  '说明弧度制下单位圆弧长与圆心角的关系。': {
    answer: '弧度制用弧长与半径之比定义圆心角：θ=s÷r（θ 以弧度计）。单位圆 r=1 时，θ 就等于所夹弧长 s；一整圈对应 2π 弧度。',
    solution: '弧度是“弧长除以半径”的无量纲比值；单位圆使弧长与角度的数值相同。',
  },
  '对照说明平均变化率与瞬时变化率。': {
    answer: '平均变化率是区间 [a,b] 上割线斜率 [f(b)−f(a)]÷(b−a)；瞬时变化率是 b→a 时割线斜率的极限，即切线斜率 f′(a)。例如 f(x)=x² 在 [1,3] 上平均变化率为 (9−1)÷(3−1)=4，而 f′(1)=2。',
    solution: '平均变化率描述一段区间，瞬时变化率描述一点；后者是前者在区间长度趋于零时的极限。',
  },
};

export function mathStandalone(unit, topic, qid, i, srcLine) {
  const title = topic.titleZh || unit.titleZh || '练习';
  const code = topic.code || '';
  const fam = mathFamily(unit.id);
  const gens = UNIT_GENERATORS[unit.id] || null;
  const modes = UNIT_MODES[unit.id] || (gens ? [0, 1, 2, 3, 4, 5] : [1, 2, 3, 4, 5]);
  const mode = modes[i % modes.length];
  if (mode === 0 && gens) {
    return { id: qid, title: `${code} ${title} · 变式`, difficulty: diff(i), generator: gens[i % gens.length], calculator: i % 2 === 0, ...srcLine('original') };
  }
  if (mode === 1) {
    const sym = {
      limits: { stemLatex: String.raw`\lim_{x\to 0}\dfrac{\sin x}{x}`, expected: '1', answerLatex: '1', solution: '标准极限。' },
      derivatives: { stemLatex: String.raw`\dfrac{\mathrm{d}}{\mathrm{d}x}\left(x^{3}e^{x}\right)`, expected: 'e^x(3x^2+x^3)', answerLatex: String.raw`e^{x}(3x^{2}+x^{3})`, solution: '乘积法则。' },
      'deriv-apps': { stemLatex: String.raw`\text{若 }v(t)=3t^{2}\text{，}a(t)=`, expected: '6t', answerLatex: '6t', solution: 'a=v′。' },
      integrals: { stemLatex: String.raw`\int 3x^{2}\,\mathrm{d}x`, expected: 'x^3+C', answerLatex: 'x^{3}+C', solution: '幂法则逆运算。' },
      'diff-eq': { stemLatex: String.raw`\dfrac{\mathrm{d}y}{\mathrm{d}x}=2y\Rightarrow y=`, expected: 'Ce^{2x}', answerLatex: String.raw`Ce^{2x}`, solution: '分离变量。' },
      parametric: { stemLatex: String.raw`x=\cos t,\;y=\sin t:\ \dfrac{\mathrm{d}y}{\mathrm{d}x}=`, expected: '-cot t', answerLatex: String.raw`-\cot t`, solution: '(cos t)/(-sin t)。' },
      series: { stemLatex: String.raw`\sum_{n=0}^{\infty}x^{n}\ (|x|<1)`, expected: '1/(1-x)', answerLatex: String.raw`\dfrac{1}{1-x}`, solution: '几何级数。' },
      'prep-alg1': { stemLatex: String.raw`\text{解 }3x-6=0`, expected: '2', answerLatex: '2', solution: 'x=2。' },
      'prep-alg2': { stemLatex: String.raw`\text{化简 }(x-1)(x+1)`, expected: 'x^2-1', answerLatex: 'x^{2}-1', solution: '平方差。' },
      'prep-geo': { stemLatex: String.raw`\text{圆面积 }r=2:\ A=`, expected: '4pi', answerLatex: String.raw`4\pi`, solution: 'πr²。' },
      'prep-precalc': { stemLatex: String.raw`\cos\dfrac{\pi}{3}=`, expected: '1/2', answerLatex: String.raw`\dfrac{1}{2}`, solution: '特殊角。' },
      'calc-prep': { stemLatex: String.raw`\lim_{x\to a}\dfrac{f(x)-f(a)}{x-a}`, expected: "f'(a)", answerLatex: String.raw`f'(a)`, solution: '导数定义。' },
    };
    const s = UNIT_SYMBOLIC[unit.id] || sym[fam] || sym.limits;
    return { id: qid, title: `${code} ${s.check === 'numeric' ? '计算' : '符号'}`, type: 'frq', difficulty: diff(i), calculator: false, check: 'symbolic', ...s, ...srcLine('openstax_calc') };
  }
  if (mode === 2) {
    const n = 2 + (i % 4);
    return {
      id: qid, title: `${code} 因式化简`, type: 'frq', difficulty: diff(i), calculator: false, check: 'symbolic',
      stemLatex: String.raw`\text{化简 }\dfrac{x^{${n}}-1}{x-1}\ (x\neq 1)`,
      expected: polyExpand(n), answerLatex: polyExpandLatex(n), solution: '几何级数求和或因式分解。',
      ...srcLine('openstax_calc'),
    };
  }
  if (mode === 3) {
    const ideas = {
      limits: '极限存在不要求 f(a) 有定义，但连续要求三者一致',
      derivatives: '可导 ⇒ 连续；连续 ⇏ 可导',
      'deriv-apps': '相关变化率必须用链式把各变量对同一自变量求导',
      integrals: '定积分是黎曼和的极限，可表示净变化量',
      'diff-eq': '斜率场给出每个点的解曲线切线方向',
      parametric: 'dy/dx=(dy/dt)/(dx/dt)（dx/dt≠0）',
      series: 'a_n→0 是级数收敛的必要条件而非充分条件',
      'prep-alg1': '线性方程的解使左右两边相等',
      'prep-alg2': '函数是每个输入至多一个输出的对应',
      'prep-geo': '全等保留长度与角度；相似保留角度与比例',
      'prep-precalc': '单位圆定义使三角函数对任意实角有意义',
      'calc-prep': '平均变化率是割线斜率，瞬时是切线斜率',
    };
    return {
      id: qid, title: `${code} 概念`, type: 'mcq', difficulty: diff(i),
      stem: `关于「${title}」，下列正确的是？`,
      choices: [
        { text: UNIT_IDEAS[unit.id] || ideas[fam] || ideas.limits, correct: true },
        { text: '代数变形可以随意除以可能为零的因式而不作讨论', correct: false },
        { text: '图像与符号表达式可以互相矛盾仍都正确', correct: false },
        { text: '单位与量纲在数学建模中可以忽略', correct: false },
      ],
      ...srcLine('original'),
    };
  }
  if (mode === 4) {
    const drills = {
      limits: { stemLatex: String.raw`\lim_{x\to 2}(3x+1)`, expected: 7, answerLatex: '7', solution: '代入得 7。' },
      derivatives: { stemLatex: String.raw`f(x)=x^{3},\;f'(2)=`, expected: 12, answerLatex: '12', solution: '3x² ⇒ 12。' },
      'deriv-apps': { stemLatex: String.raw`s=t^{2}\text{（米）},\;v(3)=`, expected: 6, answerLatex: String.raw`6\,\mathrm{m/s}`, solution: 'v=2t。' },
      integrals: { stemLatex: String.raw`\int_0^{2} 3x^{2}\,\mathrm{d}x`, expected: 8, answerLatex: '8', solution: '[x³]_0^2=8。' },
      'diff-eq': { stemLatex: String.raw`y'=2y,\;y(0)=3\Rightarrow y(1)=`, expected: Number((3 * Math.exp(2)).toFixed(6)), answerLatex: String.raw`3e^{2}`, solution: 'y=3e^{2t}。' },
      parametric: { stemLatex: String.raw`x=t^{2},y=t^{3}\text{ 在 }t=1\text{ 的 }\dfrac{dy}{dx}`, expected: 1.5, answerLatex: String.raw`\dfrac{3}{2}`, solution: '(3t²)÷(2t)=1.5。' },
      series: { stemLatex: String.raw`\sum_{n=0}^{3}\left(\dfrac{1}{2}\right)^{n}`, expected: 1.875, answerLatex: String.raw`\dfrac{15}{8}`, solution: '几何部分和。' },
      'prep-alg1': { stemLatex: String.raw`\text{化简 }2(x-3)+4`, expected: '2x-2', answerLatex: '2x-2', check: 'symbolic', solution: '分配。' },
      'prep-alg2': { stemLatex: String.raw`x^{2}-5x+6=0\text{ 的较大根}`, expected: 3, answerLatex: '3', solution: '(x-2)(x-3)。' },
      'prep-geo': { stemLatex: String.raw`\text{周长：边 }3,4,5`, expected: 12, answerLatex: '12', solution: '3+4+5。' },
      'prep-precalc': { stemLatex: String.raw`\log_{10} 1000`, expected: 3, answerLatex: '3', solution: '10³=1000。' },
      'calc-prep': { stemLatex: String.raw`\dfrac{f(2)-f(0)}{2-0},\;f(x)=x^{2}`, expected: 2, answerLatex: '2', solution: '(4-0)/2=2。' },
    };
    const d = UNIT_DRILLS[unit.id] || drills[fam] || drills.limits;
    return {
      id: qid, title: `${code} 计算`, type: 'frq', difficulty: diff(i), calculator: false,
      check: d.check || 'numeric', stemLatex: d.stemLatex, expected: d.expected, tol: d.tol ?? 0.02,
      answerLatex: d.answerLatex, solution: d.solution, ...srcLine('openstax_calc'),
    };
  }
  const prompts = {
    limits: '用 ε-δ 直觉或图像说明为何去掉一点仍可有极限。',
    derivatives: '解释差分商极限如何从平均变化率过渡到瞬时变化率。',
    'deriv-apps': '举一个相关变化率的实际例子并写出等式。',
    integrals: '说明净面积与总面积（绝对值）在应用中的区别。',
    'diff-eq': '解释欧拉法一步如何用斜率推进近似解。',
    parametric: '说明同一曲线不同参数化时 dy/dx 不变的原因。',
    series: '举一个条件收敛但不绝对收敛的级数例子（名称即可）。',
    'prep-alg1': '说明为何解方程时移项与两边同加是等价变形。',
    'prep-alg2': '解释函数复合 (f∘g)(x) 的求值顺序。',
    'prep-geo': '说明为何 AAA 相似但不能推出全等。',
    'prep-precalc': '说明弧度制下单位圆弧长与圆心角的关系。',
    'calc-prep': '对照说明平均变化率与瞬时变化率。',
  };
  const prompt = UNIT_PROMPTS[unit.id] || prompts[fam] || prompts.limits;
  const model = FRQ_MODEL_ANSWERS[prompt] || {
    answer: '先写出本单元的关键定义或定理，再代入本题条件完成推理。',
    solution: '评分看定义准确性与推理链。',
  };
  return {
    id: qid,
    title: `${code} 论述 · ${title}`,
    type: 'frq',
    difficulty: diff(i),
    calculator: false,
    stem: `关于「${title}」：${prompt}`,
    ...model,
    ...srcLine('original'),
  };
}

/**
 * Curated AP-style FRQ sets, one per high-frequency CED unit.
 * Every prompt, datum, and answer below is original to this project and is
 * scoped to the unit that owns the stimulus. These replace the old
 * family-template sets for units whose shared stems could drift across units.
 */
const SUPPLEMENTAL = {
  'calc-u1': [
    {
      title: '极限与可去间断',
      stimulus: {
        title: '有理函数在 x=2 附近',
        text: '函数 f 在 x=2 处无定义；下表与图像给出其局部取值。',
        textLatex: String.raw`f(x)=\dfrac{x^{2}-4}{x-2}\quad(x\neq 2)`,
        table: {
          headers: ['x', 'f(x)'],
          rows: [['1.9', '3.9'], ['1.99', '3.99'], ['1.999', '3.999'], ['2.001', '4.001'], ['2.01', '4.01'], ['2.1', '4.1']],
        },
        graph: { points: [[1.9, 3.9], [1.99, 3.99], [1.999, 3.999], [2.001, 4.001], [2.01, 4.01], [2.1, 4.1]], xLabel: 'x', yLabel: 'f' },
      },
      questions: [
        {
          title: '由表估极限', difficulty: '易', check: 'numeric', calculator: false,
          stem: '根据表中左右两侧的取值，估计 f 在 x→2 时的极限。',
          expected: 4, tol: 0.01,
          answerLatex: '4',
          solution: '左右函数值都趋近 4。',
        },
        {
          title: '代数化简', difficulty: '易', check: 'symbolic', calculator: false,
          stemLatex: String.raw`f(x)=\dfrac{x^{2}-4}{x-2}\ (x\neq 2)\text{，化简后 }f(x)=`,
          expected: 'x+2', answerLatex: 'x+2',
          solution: '平方差分解后约去 x−2。',
        },
        {
          title: '可去间断', difficulty: '中',
          stem: '若补充定义 f(2)=4，判断 f 在 x=2 处是否连续，并说明理由。',
          answer: '连续。因为补充后 f(2)=4，且 x→2 时 f(x)→4，极限值等于函数值。',
          solution: '连续定义要求函数值、极限值存在且相等。',
        },
        {
          title: '极限与连续的区别', difficulty: '中',
          stem: '“极限存在”与“在该点连续”有何区别？结合 f 在 x=2 处的原定义说明。',
          answer: '原函数在 x=2 无定义，所以不连续；但极限存在且为 4。连续还要求该点函数值等于极限。',
          solution: '极限只看去心邻域；连续还要看该点函数值。',
        },
      ],
    },
  ],
  'calc-u2': [
    {
      title: '导数定义与积商法则',
      stimulus: {
        title: '可微函数 f、g 的局部数据',
        text: '下表给出可微函数 f、g 在 x=1 附近的取值与导数。',
        table: {
          headers: ['x', 'f(x)', 'g(x)', "f'(x)", "g'(x)"],
          rows: [['1', '−2', '2', '0', '2'], ['1.1', '−1.969', '2.21', '—', '—']],
        },
      },
      questions: [
        {
          title: '差分商估计', difficulty: '易', check: 'numeric', calculator: true,
          stem: '用 x=1 与 x=1.1 的差分商估计 f′(1)。',
          expected: 0.31, tol: 0.01,
          answerLatex: '0.31',
          solution: '(−1.969−(−2))÷0.1=0.31，为割线斜率。',
        },
        {
          title: '乘积法则', difficulty: '中', check: 'numeric', calculator: false,
          stem: '求 (fg)′(1)。',
          expected: -4, tol: 0.01,
          answerLatex: '-4',
          solution: 'f′(1)g(1)+f(1)g′(1)=0·2+(−2)·2=−4。',
        },
        {
          title: '商法则', difficulty: '中', check: 'numeric', calculator: false,
          stem: '求 (f/g)′(1)。',
          expected: 1, tol: 0.01,
          answerLatex: '1',
          solution: '商法则：分子为 0·2−(−2)·2=4，分母为 2²=4，故为 1。',
        },
        {
          title: '切线方程', difficulty: '中', check: 'symbolic', calculator: false,
          stem: '求曲线 y=g(x) 在 x=1 处的切线方程，写成 y=… 右侧的表达式。',
          expected: '2*x', answerLatex: 'y=2x',
          solution: 'g(1)=2，g′(1)=2，所以 y−2=2(x−1)，即 y=2x。',
        },
      ],
    },
  ],
  'calc-u3': [
    {
      title: '链式、反函数与隐函数导数',
      stimulus: {
        title: '函数数据与隐式曲线',
        text: '可微函数 f 满足下表数据；另有一条隐式曲线 C。',
        table: {
          headers: ['x', 'f(x)', "f'(x)"],
          rows: [['2', '5', '−3'], ['4', '1', '2']],
        },
        graph: { points: [[2, 5], [4, 1]], xLabel: 'x', yLabel: 'f' },
      },
      questions: [
        {
          title: '链式法则', difficulty: '中', check: 'numeric', calculator: false,
          stemLatex: String.raw`\text{求 }\dfrac{\mathrm{d}}{\mathrm{d}x}\left[f\left(x^{2}\right)\right]\text{ 在 }x=2\text{ 处的值}`,
          expected: 8, tol: 0.01,
          answerLatex: '8',
          solution: 'f′(x²)·2x，在 x=2 时为 f′(4)·4=2·4=8。',
        },
        {
          title: '反函数导数', difficulty: '中', check: 'numeric', calculator: false,
          stemLatex: String.raw`\text{求 }\left(f^{-1}\right)'(5)`,
          expected: -1 / 3, tol: 0.01,
          answerLatex: String.raw`-\dfrac{1}{3}`,
          solution: '由反函数定理，等于 f′(2) 的倒数，即 −⅓。',
        },
        {
          title: '隐函数求导', difficulty: '中', check: 'numeric', calculator: false,
          stem: '曲线 C 由 x²+xy+y²=7 给出。求 C 在点 (1,2) 处的 dy/dx。',
          expected: -0.8, tol: 0.01,
          answerLatex: String.raw`-\dfrac{4}{5}`,
          solution: '隐式求导得 (2x+y)+(x+2y)y′=0，代入 (1,2) 得 y′=−⅘。',
        },
        {
          title: '隐式切线', difficulty: '难', check: 'symbolic', calculator: false,
          stem: '求曲线 C 在点 (1,2) 处的切线方程，写成 y=… 右侧的表达式。',
          expected: '-4/5*x+14/5',
          answerLatex: String.raw`y=-\dfrac{4}{5}x+\dfrac{14}{5}`,
          solution: '斜率为 −⅘，过 (1,2)，所以 y−2=−⅘(x−1)。',
        },
      ],
    },
  ],
  'calc-u4': [
    {
      title: '相关变化率：圆锥水箱',
      stimulus: {
        title: '倒圆锥水箱',
        text: '倒圆锥水箱高 6 m、顶部半径 2 m。水面高度为 h(t)，体积为 V(t)，水以 2 m³/min 注入。',
        table: {
          headers: ['量', '值'],
          rows: [['水箱高 H', '6 m'], ['顶部半径 R', '2 m'], ['注入速率 dV/dt', '2 m³/min'], ['目标水深 h', '3 m']],
        },
      },
      questions: [
        {
          title: '相似三角形', difficulty: '易', check: 'symbolic', calculator: false,
          stemLatex: String.raw`\text{由相似三角形，用 }h\text{ 表示水面半径 }r`,
          expected: 'h/3', answerLatex: String.raw`r=\dfrac{h}{3}`,
          solution: 'r÷h=R÷H=2÷6=⅓。',
        },
        {
          title: '体积关系', difficulty: '中', check: 'symbolic', calculator: false,
          stemLatex: String.raw`\text{用 }h\text{ 表示体积 }V`,
          expected: 'pi*h^3/27', answerLatex: String.raw`V=\dfrac{\pi h^{3}}{27}`,
          solution: 'V=⅓πr²h=⅓π(h÷3)²h=πh³÷27。',
        },
        {
          title: '求 dh/dt', difficulty: '难', check: 'numeric', calculator: true,
          stem: '当 h=3 m 时，求 dh/dt（单位：m/min）。',
          expected: 2 / Math.PI, tol: 0.005,
          answerLatex: String.raw`\dfrac{2}{\pi}`,
          solution: 'dV/dt=(πh²÷9)dh/dt；h=3 时 π·dh/dt=2，所以 dh/dt=2÷π。',
        },
        {
          title: '单位与符号', difficulty: '中',
          stem: '解释 dh/dt 的单位与正负号在此情境中的含义。',
          answer: '单位是 m/min；因为水在注入，h 增大，所以 dh/dt 为正。',
          solution: '变化率的单位是“输出单位每输入单位”。',
        },
      ],
    },
  ],
  'calc-u5': [
    {
      title: '中值定理与导数符号',
      stimulus: {
        title: 'f′ 的部分取值',
        text: 'f 在 [0,4] 上可微，f(0)=2，f(4)=10；f′ 连续，且在 [0,4] 上仅在 x=2 处为零。下表给出 f′ 的部分值。',
        table: {
          headers: ['x', '0', '1', '2', '3', '4'],
          rows: [["f'(x)", '3', '2', '0', '−2', '−1']],
        },
      },
      questions: [
        {
          title: '平均变化率', difficulty: '易', check: 'numeric', calculator: false,
          stem: '求 f 在 [0,4] 上的平均变化率。',
          expected: 2, tol: 0.01,
          answerLatex: '2',
          solution: '(f(4)−f(0))÷(4−0)=(10−2)÷4=2。',
        },
        {
          title: '中值定理', difficulty: '中', check: 'numeric', calculator: false,
          stem: '由中值定理，存在 c∈(0,4) 使 f′(c) 等于平均变化率。表中哪个 x 可作为这样的 c？',
          expected: 1, tol: 0.01,
          answerLatex: '1',
          solution: '表中 f′(1)=2，等于平均变化率。',
        },
        {
          title: '单调性与极值', difficulty: '中',
          stem: '确定 f 的单调区间与局部极值，并说明理由。',
          answer: 'f′>0 于 [0,2)，f′<0 于 (2,4]，所以 f 在 (0,2) 上递增、在 (2,4) 上递减；x=2 为局部极大值点。',
          solution: 'f′ 连续且仅在 x=2 处为零，符号由正变负。',
        },
        {
          title: 'MVT 的结论', difficulty: '难',
          stem: '中值定理保证存在 c 使 f′(c)=2。这是否意味着 f 在 [0,4] 上处处以斜率 2 增长？解释。',
          answer: '不是。中值定理只保证至少一个内点的瞬时变化率等于平均变化率；表中其他点的 f′ 并不都等于 2。',
          solution: '区分“存在一点”与“处处成立”。',
        },
      ],
    },
  ],
  'calc-u6': [
    {
      title: '微积分基本定理与累积',
      stimulus: {
        title: '速度 v(t) 的部分数据',
        text: '质点沿直线运动，速度 v(t)（m/s）如下表。定义累积函数 F(x)=∫₀ˣ v(t)dt。',
        table: {
          headers: ['t', '0', '1', '2', '3', '4'],
          rows: [['v(t)', '2', '4', '3', '5', '1']],
        },
        graph: { points: [[0, 2], [1, 4], [2, 3], [3, 5], [4, 1]], xLabel: 't', yLabel: 'v' },
      },
      questions: [
        {
          title: '梯形法估累积', difficulty: '中', check: 'numeric', calculator: false,
          stem: '用梯形法估计 F(2)。',
          expected: 6.5, tol: 0.01,
          answerLatex: '6.5',
          solution: '(2+4)÷2+(4+3)÷2=3+3.5=6.5。',
        },
        {
          title: 'FTC 求导', difficulty: '易', check: 'numeric', calculator: false,
          stem: '求 F′(3)。',
          expected: 5, tol: 0.01,
          answerLatex: '5',
          solution: '由微积分基本定理，F′(t)=v(t)，所以 F′(3)=v(3)=5。',
        },
        {
          title: '二阶导数', difficulty: '难', check: 'numeric', calculator: false,
          stem: '用 t=1 与 t=3 的中心差商估计 F″(2)。',
          expected: 0.5, tol: 0.01,
          answerLatex: '0.5',
          solution: 'F″=v′，中心差商为 (v(3)−v(1))÷(3−1)=(5−4)÷2=0.5。',
        },
        {
          title: '累积的解释', difficulty: '中',
          stem: '解释 F(4)−F(0) 的物理意义与单位。',
          answer: '它等于 ∫₀⁴v(t)dt，表示 0 到 4 秒内的净位移，单位为米。',
          solution: '速度对时间积分给出位移；注意“净”位移。',
        },
      ],
    },
  ],
  'calc-u7': [
    {
      title: 'Logistic 模型',
      stimulus: {
        title: '种群增长',
        text: '某种群数量 P(t) 满足右侧微分方程，初始 P(0)=200。下表与图像给出部分时刻的数量。',
        textLatex: String.raw`\dfrac{\mathrm{d}P}{\mathrm{d}t}=0.4P\left(1-\dfrac{P}{1200}\right)`,
        table: {
          headers: ['t', '0', '2', '4', '6'],
          rows: [['P(t)', '200', '370', '597', '826']],
        },
        graph: { points: [[0, 200], [2, 370], [4, 597], [6, 826]], xLabel: 't', yLabel: 'P' },
      },
      questions: [
        {
          title: '求解模型', difficulty: '难', check: 'symbolic', calculator: false,
          stem: '求 P(t) 的表达式。',
          expected: '1200/(1+5*e^(-0.4*t))',
          answerLatex: String.raw`P(t)=\dfrac{1200}{1+5e^{-0.4t}}`,
          solution: '分离变量得 P(t)=L/(1+Ce^{−kt})；由 P(0)=200 得 C=5。',
        },
        {
          title: '模型求值', difficulty: '中', check: 'numeric', calculator: true,
          stem: '用模型求 P(2)（保留到个位附近即可）。',
          expected: 1200 / (1 + 5 * Math.exp(-0.8)), tol: 0.001,
          answerLatex: '≈370',
          solution: 'P(2)=1200÷(1+5e^{−0.8})≈370。',
        },
        {
          title: '最快增长时刻', difficulty: '难', check: 'numeric', calculator: true,
          stem: '种群增长最快时 P=600。求对应的 t（精确到 0.01）。',
          expected: Math.log(5) / 0.4, tol: 0.005,
          answerLatex: String.raw`t=\dfrac{\ln 5}{0.4}\approx 4.02`,
          solution: '令 P=600，解 1+5e^{−0.4t}=2，得 t=ln5÷0.4≈4.02。',
        },
        {
          title: '长期行为', difficulty: '中',
          stem: '求 t→∞ 时 P(t) 的极限，并解释 1200 在该模型中的意义。',
          answer: '极限为 1200；它是环境容纳量（carrying capacity），即长期可维持的最大种群数量。',
          solution: 'Logistic 模型的平衡解为 P=0 与 P=L；初值大于 0 时趋于 L。',
        },
      ],
    },
  ],
  'calc-u8': [
    {
      title: '两曲线间的面积与体积',
      stimulus: {
        title: '区域 R',
        text: '区域 R 由 y=x² 与 y=2x 围成。下表给出若干 x 处的上下边界。',
        table: {
          headers: ['x', 'y=x²', 'y=2x'],
          rows: [['0', '0', '0'], ['0.5', '0.25', '1'], ['1', '1', '2'], ['1.5', '2.25', '3'], ['2', '4', '4']],
        },
      },
      questions: [
        {
          title: '面积', difficulty: '中', check: 'numeric', calculator: false,
          stem: '求 R 的面积。',
          expected: 4 / 3, tol: 0.01,
          answerLatex: String.raw`\dfrac{4}{3}`,
          solution: '∫₀²(2x−x²)dx=[x²−⅓x³]₀²=4−8÷3=4÷3。',
        },
        {
          title: '绕 x 轴体积', difficulty: '难', check: 'symbolic', calculator: false,
          stem: '将 R 绕 x 轴旋转，用垫圈法求体积（写成含 π 的精确值）。',
          expected: '64*pi/15',
          answerLatex: String.raw`\dfrac{64\pi}{15}`,
          solution: 'π∫₀²[(2x)²−(x²)²]dx=π(32÷3−32÷5)=64π÷15。',
        },
        {
          title: '弧长被积函数', difficulty: '中', check: 'symbolic', calculator: false,
          stem: '写出 y=x² 在 [0,2] 上弧长积分的被积函数。',
          expected: 'sqrt(1+4*x^2)',
          answerLatex: String.raw`\sqrt{1+4x^{2}}`,
          solution: '弧长元为 √(1+(y′)²)，y′=2x。',
        },
        {
          title: '垫圈法理由', difficulty: '中',
          stem: '为什么绕 x 轴旋转 R 时要用垫圈法而不是圆盘法？',
          answer: 'R 不贴 x 轴；旋转后截面是中空的环，外半径为 2x，内半径为 x²。',
          solution: '区域与旋转轴之间有间隙时用垫圈法。',
        },
      ],
    },
  ],
  'calc-u9': [
    {
      title: '参数方程的运动与二阶导数',
      stimulus: {
        title: '参数路径',
        text: '粒子路径为 x(t)=t²+t，y(t)=t³−3t（t≥0）。',
        table: {
          headers: ['t', 'x', 'y'],
          rows: [['0', '0', '0'], ['1', '2', '−2'], ['2', '6', '2'], ['3', '12', '18']],
        },
        graph: { points: [[0, 0], [2, -2], [6, 2], [12, 18]], xLabel: 'x', yLabel: 'y' },
      },
      questions: [
        {
          title: '参数求导', difficulty: '中', check: 'symbolic', calculator: false,
          stemLatex: String.raw`\text{用 }t\text{ 表示 }\dfrac{\mathrm{d}y}{\mathrm{d}x}`,
          expected: '(3*t^2-3)/(2*t+1)',
          answerLatex: String.raw`\dfrac{\mathrm{d}y}{\mathrm{d}x}=\dfrac{3t^{2}-3}{2t+1}`,
          solution: '(dy/dt)÷(dx/dt)。',
        },
        {
          title: '二阶导数', difficulty: '难', check: 'numeric', calculator: false,
          stem: '求 t=1 处的 d²y/dx²。',
          expected: 2 / 3, tol: 0.01,
          answerLatex: String.raw`\dfrac{2}{3}`,
          solution: 'd²y/dx²=[d/dt(dy/dx)]÷(dx/dt)；在 t=1 得 ⅔。',
        },
        {
          title: '水平切线', difficulty: '中', check: 'numeric', calculator: false,
          stem: '求 t≥0 时使切线水平的 t。',
          expected: 1, tol: 0.01,
          answerLatex: '1',
          solution: 'y′=3t²−3=0 得 t=±1；取 t=1，此时 x′=3≠0。',
        },
        {
          title: '速率', difficulty: '中', check: 'numeric', calculator: false,
          stem: '求 t=1 时粒子的速率。',
          expected: 3, tol: 0.01,
          answerLatex: '3',
          solution: 'x′=2t+1，y′=3t²−3；t=1 时速度为 (3,0)，速率为 3。',
        },
      ],
    },
  ],
  'calc-u10': [
    {
      title: '交替级数与泰勒误差',
      stimulus: {
        title: '部分和与指数函数',
        text: '考虑右侧交替级数，部分和为 S_N；另设 f(x)=eˣ。下表给出部分和的数值。',
        textLatex: String.raw`S=\sum_{n=1}^{\infty}\dfrac{(-1)^{n+1}}{n^{3}}`,
        table: {
          headers: ['N', 'S_N'],
          rows: [['1', '1'], ['2', '0.875'], ['3', '0.9120'], ['4', '0.8964']],
        },
        graph: { points: [[1, 1], [2, 0.875], [3, 0.912], [4, 0.8964]], xLabel: 'N', yLabel: 'S_N' },
      },
      questions: [
        {
          title: '绝对收敛', difficulty: '中',
          stem: '判断 S 是否绝对收敛，并说明理由。',
          answer: '绝对收敛。取绝对值后得到 p=3 的 p 级数，而 p=3>1，所以收敛。',
          solution: '绝对收敛看 ∑|a_n|；p 级数在 p>1 时收敛。',
        },
        {
          title: '交替级数误差', difficulty: '难', check: 'numeric', calculator: false,
          stem: '用交替级数误差界估计 |S−S₃| 的上界。',
          expected: 1 / 64, tol: 0.01,
          answerLatex: String.raw`\dfrac{1}{64}`,
          solution: '误差不超过下一个被舍去项的绝对值 1÷4³=1÷64。',
        },
        {
          title: '三阶泰勒多项式', difficulty: '中', check: 'symbolic', calculator: false,
          stemLatex: String.raw`\text{写出 }e^{x}\text{ 在 }x=0\text{ 处的三阶泰勒多项式 }P_3(x)`,
          expected: '1+x+x^2/2+x^3/6',
          answerLatex: String.raw`P_3(x)=1+x+\dfrac{x^{2}}{2}+\dfrac{x^{3}}{6}`,
          solution: '逐阶求导并在 0 处取值。',
        },
        {
          title: '拉格朗日误差界', difficulty: '难', check: 'numeric', calculator: true,
          stem: '用拉格朗日误差界估计 |e^{0.2}−P₃(0.2)| 的上界（用科学计数法，保留三位有效数字）。',
          expected: Math.exp(0.2) * 0.2 ** 4 / 24, tol: 0.02,
          answerLatex: String.raw`8.14\times 10^{-5}`,
          solution: '|R₃|≤e^{0.2}·0.2⁴÷4!≈8.14×10⁻⁵。',
        },
      ],
    },
  ],
};

/** Units whose family-template shared set is already unit-aligned and worth keeping. */
const KEEP_GENERIC_SET = new Set(['calc-u1', 'calc-u7', 'calc-u9', 'calc-u10']);

export function mathSetCount(unit) {
  if (unit.id === 'calc-u0') return 1;
  if (!SUPPLEMENTAL[unit.id]) return 2;
  return KEEP_GENERIC_SET.has(unit.id) ? 1 : 0;
}

export function mathSupplemental(unit, nextId, srcLine) {
  const sets = SUPPLEMENTAL[unit.id];
  if (!sets) return [];
  const note = '原创 AP 风格题，非官方 FRQ。';
  return sets.map((set, si) => {
    const questions = set.questions.map((q, qi) => ({
      id: nextId(),
      type: 'frq',
      difficulty: q.difficulty || diff(si + qi),
      calculator: q.calculator ?? (q.check === 'numeric'),
      ...q,
    }));
    return {
      kind: 'set',
      id: `${unit.id}-extra${si + 1}`,
      title: set.title,
      stimulus: { ...set.stimulus, ...srcLine('original', note) },
      questions,
    };
  });
}
