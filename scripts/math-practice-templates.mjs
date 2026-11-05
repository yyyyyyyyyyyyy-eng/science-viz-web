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
      text: '考察级数 ∑ a_n 的部分和 S_n（几何型 a_n=(1/2)^{n-1}）。',
      table: { headers: ['n', 'a_n', 'S_n'], rows: [['1', '1', '1'], ['2', '1/2', '3/2'], ['3', '1/4', '7/4'], ['4', '1/8', '15/8']] },
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
    table: { headers: ['θ', 'cos θ', 'sin θ'], rows: [['0', '1', '0'], ['π/6', '√3/2', '1/2'], ['π/4', '√2/2', '√2/2'], ['π/3', '1/2', '√3/2']] },
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
      { title: '几何级数', type: 'frq', check: 'symbolic', calculator: false, stemLatex: String.raw`\sum_{n=0}^{\infty}\left(\dfrac{1}{2}\right)^{n}\text{ 的和}`, expected: '2', answerLatex: '2', solution: String.raw`1/(1-1/2)=2` },
      { title: '比值审敛', type: 'frq', check: 'symbolic', calculator: false, stemLatex: String.raw`a_n=\dfrac{n!}{n^{n}}\text{：}\lim\dfrac{|a_{n+1}|}{|a_n|}`, expected: '0', answerLatex: '0', solution: '→0，绝对收敛。' },
      { title: '部分和', type: 'frq', check: 'numeric', stem: '几何级数首项 1、公比 1/2：S_4=？', expected: 1.875, tol: 0.01, answerLatex: String.raw`\dfrac{15}{8}`, solution: '1+1/2+1/4+1/8=15/8。' },
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
  banks['prep-alg1'] = banks['prep-alg2'] = [
    { title: '斜率', type: 'frq', check: 'numeric', stem: '过 (0,3)、(2,7) 的直线斜率？', expected: 2, tol: 0.01, answerLatex: '2', solution: '(7-3)/(2-0)=2。' },
    { title: '线性模型', type: 'frq', check: 'symbolic', calculator: false, stemLatex: String.raw`\text{斜率 }2\text{、过 }(0,3)\text{：}y=`, expected: '2x+3', answerLatex: '2x+3', solution: '斜截式。' },
    { title: '求根', type: 'frq', check: 'numeric', stem: '2x+3=0 的根？', expected: -1.5, tol: 0.01, answerLatex: String.raw`-\dfrac{3}{2}`, solution: 'x=-3/2。' },
    { title: '表征', type: 'frq', stem: `用「${t.titleZh}」语言解释表、式、图像三者一致性。`, answer: '同一线性关系的三种表示；差分商恒为斜率。', solution: '多表征。' },
  ];
  banks['calc-prep'] = banks.limits;
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
  for (let k = n - 1; k >= 1; k--) terms.push(`x^{${k}}`);
  terms.push('1');
  return terms.join('+');
}

export function mathStandalone(unit, topic, qid, i, srcLine) {
  const title = topic.titleZh || unit.titleZh || '练习';
  const code = topic.code || '';
  const fam = mathFamily(unit.id);
  const mode = i % 6;
  if (mode === 0 && (fam === 'derivatives' || fam === 'deriv-apps' || fam === 'limits')) {
    const gens = fam === 'limits' ? ['limit', 'limit', 'power'] : ['power', 'chain', 'product'];
    return { id: qid, title: `${code} ${title} · 参数化`, difficulty: diff(i), generator: gens[i % gens.length], calculator: i % 2 === 0, ...srcLine('original') };
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
    const s = sym[fam] || sym.limits;
    return { id: qid, title: `${code} 符号`, type: 'frq', difficulty: diff(i), calculator: false, check: 'symbolic', ...s, ...srcLine('openstax_calc') };
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
        { text: ideas[fam] || ideas.limits, correct: true },
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
      parametric: { stemLatex: String.raw`x=t^{2},y=t^{3}\text{ 在 }t=1\text{ 的 }\dfrac{dy}{dx}`, expected: 1.5, answerLatex: String.raw`\dfrac{3}{2}`, solution: '(3t²)/(2t)=3/2。' },
      series: { stemLatex: String.raw`\sum_{n=0}^{3}\left(\dfrac{1}{2}\right)^{n}`, expected: 1.875, answerLatex: String.raw`\dfrac{15}{8}`, solution: '几何部分和。' },
      'prep-alg1': { stemLatex: String.raw`\text{化简 }2(x-3)+4`, expected: '2x-2', answerLatex: '2x-2', check: 'symbolic', solution: '分配。' },
      'prep-alg2': { stemLatex: String.raw`x^{2}-5x+6=0\text{ 的较大根}`, expected: 3, answerLatex: '3', solution: '(x-2)(x-3)。' },
      'prep-geo': { stemLatex: String.raw`\text{周长：边 }3,4,5`, expected: 12, answerLatex: '12', solution: '3+4+5。' },
      'prep-precalc': { stemLatex: String.raw`\log_{10} 1000`, expected: 3, answerLatex: '3', solution: '10³=1000。' },
      'calc-prep': { stemLatex: String.raw`\dfrac{f(2)-f(0)}{2-0},\;f(x)=x^{2}`, expected: 2, answerLatex: '2', solution: '(4-0)/2=2。' },
    };
    const d = drills[fam] || drills.limits;
    return {
      id: qid, title: `${code} 计算`, type: 'frq', difficulty: diff(i), calculator: false,
      check: d.check || 'numeric', stemLatex: d.stemLatex, expected: d.expected, tol: 0.02,
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
  return {
    id: qid,
    title: `${code} 论述 · ${title}`,
    type: 'frq',
    difficulty: diff(i),
    calculator: false,
    stem: `关于「${title}」：${prompts[fam] || prompts.limits}`,
    answer: '结合本单元定义与定理作答；写出关键公式时使用堆叠分式。',
    solution: '评分看定义准确性与推理链。',
    ...srcLine('original'),
  };
}
