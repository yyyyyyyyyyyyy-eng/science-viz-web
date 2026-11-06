/**
 * Build large AP-style practice banks with specialized diagrams, shared stimuli,
 * generators, symbolic/numeric checks, and OpenStax-adapted items (CC BY / CC BY-NC-SA)
 * with attribution. College Board FRQs are NOT copied — only linked in cb-index.
 */
import { writeFileSync, mkdirSync, readFileSync, existsSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

// Import syllabus via dynamic — it's ESM
const { ALL_UNITS } = await import(join(ROOT, 'modules/syllabus.js'));
const {
  mathStimulus,
  mathSetQuestion,
  mathStandalone,
  mathSetCount,
  mathSupplemental,
  mathOriginalFrqSets,
} = await import(join(ROOT, 'scripts/math-practice-templates.mjs'));

const SOURCES = {
  openstax_bio: {
    id: 'openstax-biology-2e',
    title: 'OpenStax Biology 2e',
    license: 'CC BY 4.0',
    url: 'https://openstax.org/books/biology-2e/pages/1-introduction',
  },
  openstax_calc: {
    id: 'openstax-calculus',
    title: 'OpenStax Calculus Volumes 1–3',
    license: 'CC BY-NC-SA 4.0',
    url: 'https://openstax.org/details/books/calculus-volume-1',
  },
  openstax_up: {
    id: 'openstax-university-physics',
    title: 'OpenStax University Physics Volumes 1–3',
    license: 'CC BY 4.0',
    url: 'https://openstax.org/details/books/university-physics-volume-1',
  },
  openstax_cp: {
    id: 'openstax-college-physics-2e',
    title: 'OpenStax College Physics 2e',
    license: 'CC BY-NC-SA 4.0',
    url: 'https://openstax.org/details/books/college-physics-2e',
  },
  original: {
    id: 'original',
    title: 'Original AP-style item (this project)',
    license: 'Project',
    url: '',
  },
};

function srcLine(key, note = '') {
  const s = SOURCES[key] || SOURCES.original;
  return {
    sourceId: s.id,
    source: s.title,
    license: s.license,
    sourceUrl: s.url,
    sourceNote: note || 'Adapted for AP-style practice; not a verbatim copy.',
  };
}

function targetCount(unit) {
  const n = unit.topics?.length || 4;
  if (unit.layer === 'prep') return Math.max(25, Math.min(40, 18 + n * 2));
  // AP: 40–80+ scaled by topic count
  return Math.max(40, Math.min(80, 28 + n * 4));
}

function pick(arr, i) {
  return arr[i % arr.length];
}

function diff(i) {
  return ['易', '中', '难'][i % 3];
}

/** Build shared stimulus bank + problems for one unit */
function buildBank(subject, unit) {
  const topics = unit.topics || [];
  const stimuli = {};
  const problems = [];
  let q = 0;
  const id = () => `${unit.id}-q${String(++q).padStart(3, '0')}`;

  // Curated AP-style sets first: they are unit-scoped and carry their own stimulus.
  const extras = subject === 'math' ? mathSupplemental(unit, id, srcLine) : [];
  const extraItems = countItems(extras);
  const N = targetCount(unit) + extraItems;

  // —— Shared stimulus sets (unit-specific for math where curated sets exist) ——
  const setCount = subject === 'math' ? mathSetCount(unit) : 3;
  const genericProblems = [];
  for (let s = 0; s < setCount; s++) {
    const sid = `stim-${unit.id}-${s + 1}`;
    const stim = makeStimulus(subject, unit, topics[s % Math.max(1, topics.length)], s);
    stimuli[sid] = stim;
    const qs = [];
    const setSize = 3 + (s % 2); // 3–4 questions sharing stimulus
    for (let j = 0; j < setSize; j++) {
      qs.push(makeSetQuestion(subject, unit, topics, id(), j, stim, s));
    }
    genericProblems.push({
      kind: 'set',
      id: `${unit.id}-set${s + 1}`,
      title: `题组 ${extras.length + s + 1} · 共享刺激`,
      sharedStimulus: sid,
      stimulus: stim,
      questions: qs,
    });
  }
  problems.push(...extras, ...genericProblems);

  // —— Standalone items until target ——
  let standalone = 0;
  while (countItems(problems) < N) {
    const t = topics[standalone % Math.max(1, topics.length)] || { code: 'x', titleZh: unit.titleZh, titleEn: unit.titleEn };
    const item = makeStandalone(subject, unit, t, id(), standalone);
    problems.push(item);
    standalone++;
    if (standalone > 200) break;
  }

  // Original high-frequency FRQs use stable explicit ids and are appended last.
  if (subject === 'math') problems.push(...mathOriginalFrqSets(unit.id, srcLine));

  return {
    UNIT_REF: {
      id: unit.id,
      code: unit.code,
      titleZh: unit.titleZh || unit.name,
      titleEn: unit.titleEn || '',
      layer: unit.layer || 'ap',
      subject,
    },
    stimuli,
    problems,
  };
}

function countItems(problems) {
  let n = 0;
  for (const p of problems) {
    if (p.kind === 'set') n += p.questions.length;
    else n += 1;
  }
  return n;
}

function makeStimulus(subject, unit, topic, s) {
  const title = topic?.titleZh || unit.titleZh || '实验/数据';
  if (subject === 'bio') {
    const kinds = ['enzyme', 'pedigree', 'punnett', 'phylo', 'cell', 'pathway', 'foodWeb', 'gel'];
    const kind = kinds[s % kinds.length];
    const base = {
      title: `${title} · 刺激材料`,
      text: `下列数据与图示与「${title}」相关。回答共享刺激下的各小题（原创改编，AP 风格）。`,
      diagram: { kind },
      ...srcLine('openstax_bio', `Themes aligned with OpenStax Biology 2e; figures/data original.`),
    };
    if (kind === 'enzyme') {
      base.table = {
        headers: ['[S] / mM', 'v / μM·s⁻¹'],
        rows: [['0.5', '12'], ['1.0', '20'], ['2.0', '30'], ['4.0', '36'], ['8.0', '39']],
      };
      base.graph = { points: [[0.5, 12], [1, 20], [2, 30], [4, 36], [8, 39]], xLabel: '[S]', yLabel: 'v' };
      base.diagram = { kind: 'enzyme', vmax: 42, km: 1.2 };
    }
    if (kind === 'pedigree') {
      base.diagram = {
        kind: 'pedigree',
        generations: [
          [{ id: 'I-1', sex: 'm', aff: false }, { id: 'I-2', sex: 'f', aff: true }],
          [{ id: 'II-1', sex: 'm', aff: false }, { id: 'II-2', sex: 'f', aff: true }, { id: 'II-3', sex: 'm', aff: false }],
        ],
      };
    }
    if (kind === 'punnett') base.diagram = { kind: 'punnett', top: ['B', 'b'], side: ['B', 'b'], cells: [['BB', 'Bb'], ['Bb', 'bb']] };
    if (kind === 'phylo') base.diagram = { kind: 'phylo', tips: ['人', '黑猩猩', '大猩猩', '猩猩'], outgroup: '狐猴' };
    if (kind === 'cell') base.diagram = { kind: 'cell' };
    if (kind === 'pathway') base.diagram = { kind: 'pathway', steps: ['信号', '受体', '级联', '应答'], enzyme: '激酶' };
    if (kind === 'foodWeb') base.diagram = { kind: 'foodWeb' };
    if (kind === 'gel') base.diagram = { kind: 'gel' };
    return base;
  }
  if (subject === 'mech' || subject === 'em') {
    const kinds = subject === 'em'
      ? ['circuit', 'field', 'gauss', 'circuit', 'field']
      : ['fbd', 'pulley', 'motionGraph', 'fbd', 'pulley'];
    const kind = kinds[s % kinds.length];
    const src = subject === 'em' ? 'openstax_up' : 'openstax_up';
    const base = {
      title: `${title} · 物理情境`,
      text: `结合图示与数据回答。数值已取整以便演算（改编自公开教材风格，非照抄）。`,
      diagram: { kind },
      table: {
        headers: ['量', '值'],
        rows: subject === 'em'
          ? [['ε', '12 V'], ['R', '6 Ω']]
          : [['m', '2.0 kg'], ['μ_k', '0.20'], ['θ', '30°']],
      },
      ...srcLine(src, 'Numbers/style inspired by OpenStax University Physics; original wording.'),
    };
    if (kind === 'circuit') base.diagram = { kind: 'circuit', elements: [{ type: 'battery', label: 'ε' }, { type: 'resistor', label: 'R' }], ammeter: true };
    if (kind === 'field') base.diagram = { kind: 'field', charges: [{ x: 90, y: 90, q: '+q' }, { x: 190, y: 90, q: '−q' }], pointP: { x: 140, y: 50 } };
    if (kind === 'gauss') base.diagram = { kind: 'gauss', kindSurface: 'sphere' };
    if (kind === 'fbd') base.diagram = { kind: 'fbd', surface: true, massLabel: 'm', forces: [{ label: 'N', dx: 0, dy: -50 }, { label: 'mg', dx: 0, dy: 55 }, { label: 'F', dx: 55, dy: 0 }, { label: 'f', dx: -40, dy: 0 }] };
    if (kind === 'pulley') base.diagram = { kind: 'pulley', m1: 'm₁', m2: 'm₂', R: true };
    if (kind === 'motionGraph') {
      base.diagram = { kind: 'motionGraph', points: [[0, 0], [1, 3], [2, 3], [4, -1]], xLabel: 't', yLabel: 'v' };
      base.graph = { points: [[0, 0], [1, 3], [2, 3], [4, -1]], xLabel: 't / s', yLabel: 'v' };
    }
    return base;
  }
  // math — unit-family-specific (no cross-unit copies)
  return mathStimulus(unit, topic, s, srcLine);
}

function makeSetQuestion(subject, unit, topics, qid, j, stim, s) {
  const t = topics[j % Math.max(1, topics.length)] || { titleZh: unit.titleZh };
  if (subject === 'math') {
    return mathSetQuestion(unit, topics, qid, j, stim, s, srcLine);
  }
  if (subject === 'bio') {
    const prompts = [
      {
        type: 'frq',
        stem: `指出刺激中与「${t.titleZh}」最直接相关的趋势，并给出机制解释。`,
        answer: '需联系结构—功能或选择压力；见刺激图/表。',
        solution: 'AP Bio FRQ：主张 + 证据 + 推理。',
      },
      {
        type: 'mcq',
        stem: '若增加一个合理对照，最应控制的变量是？',
        choices: [
          { text: '仅改变自变量，其余条件恒定', correct: true },
          { text: '同时改变多个条件以加快实验', correct: false },
          { text: '去掉所有重复试验', correct: false },
          { text: '只记录定性描述', correct: false },
        ],
      },
      {
        type: 'frq',
        stem: '设计一步可检验的后续实验（自变量、因变量、对照）。',
        answer: '明确单一自变量；设阴性/阳性对照；重复。',
        solution: '实验设计题评分点：变量、对照、可重复。',
      },
      {
        type: 'frq',
        stem: '若结果与预期不符，提出一种混淆因素并说明如何排除。',
        answer: '例如温度波动、样品降解等；用缓冲/恒温/重复排除。',
        solution: '科学实践：识别局限。',
      },
    ];
    const p = prompts[j % prompts.length];
    return { id: qid, title: `${t.titleZh || '分析'} (${j + 1})`, difficulty: diff(j), ...p, ...srcLine('openstax_bio') };
  }
  // physics
  const phys = [
    {
      type: 'frq',
      stem: '写出适用的核心定律（符号形式），并标明体系。',
      answerLatex: subject === 'em' ? String.raw`\sum I=0,\ \sum \Delta V=0` : String.raw`\sum \vec F=m\vec a`,
      solution: '先定律、后代数。',
    },
    {
      type: 'frq',
      check: 'numeric',
      stem: '代入表中数据求一个目标量（取合理目标）。',
      expected: subject === 'em' ? 2 : 3,
      tol: 0.15,
      answer: subject === 'em' ? '例如 I=ε/R=2 A（仅电阻串联；若含电容则直流稳态 I=0）' : '例如水平面 a=(F−μmg)/m ≈ 3 m/s²',
      solution: '定量计算并检查单位。',
    },
    {
      type: 'mcq',
      stem: '下列哪项正确描述图示关系？',
      choices: [
        { text: '需用矢量/场线或回路规则一致地分析', correct: true },
        { text: '可忽略所有方向信息', correct: false },
        { text: '能量守恒在此情境永远不适用', correct: false },
        { text: '图示与方程无关', correct: false },
      ],
    },
    {
      type: 'frq',
      stem: '说明若某一参数加倍，目标量如何变化（定性+比例）。',
      answer: '用公式做比例推理，例如 R↑⇒I↓ 成反比（欧姆情形）。',
      solution: 'AP Physics C 强调比例推理。',
    },
  ];
  const p = phys[j % phys.length];
  return { id: qid, title: `定量/概念 (${j + 1})`, difficulty: diff(j), ...p, ...srcLine('openstax_up') };
}

function makeStandalone(subject, unit, topic, qid, i) {
  const title = topic.titleZh || unit.titleZh || '练习';
  const code = topic.code || '';
  if (subject === 'math') {
    return mathStandalone(unit, topic, qid, i, srcLine);
  }

  if (subject === 'bio') {
    const mode = i % 6;
    if (mode === 0) {
      return {
        id: qid,
        title: `${code} 数据刺激`,
        type: 'frq',
        difficulty: diff(i),
        stimulus: {
          title: `${title} 实验数据`,
          text: `研究小组记录与「${title}」相关的测量。`,
          table: {
            headers: ['条件', '相对响应'],
            rows: [['对照', '1.0'], ['处理 A', '1.6'], ['处理 B', '0.7'], ['处理 A+B', '1.1']],
          },
          graph: { points: [[0, 1], [1, 1.6], [2, 0.7], [3, 1.1]] },
          diagram: { kind: pick(['enzyme', 'pathway', 'cell', 'gel'], i) },
        },
        parts: [
          { stem: '描述模式并给出机制假说。', type: 'frq', answer: '比较相对响应；联系分子/细胞机制。', solution: '主张—证据—推理。' },
          { stem: '提出可区分假说的额外测量。', type: 'frq', answer: '例如中间产物浓度、抑制剂、敲除对照。', solution: '实验设计。' },
        ],
        ...srcLine('openstax_bio'),
      };
    }
    if (mode === 1) {
      return {
        id: qid,
        title: `${code} 图示 MCQ`,
        type: 'mcq',
        difficulty: diff(i),
        stimulus: { title: '图示', diagram: { kind: pick(['pedigree', 'punnett', 'phylo', 'cell', 'foodWeb'], i) }, text: '据图作答。' },
        stem: `与「${title}」最直接相关的正确陈述是？`,
        choices: [
          { text: '图示结构/关系支持该知识点的核心机制', correct: true },
          { text: '图示与基因表达无关且无信息', correct: false },
          { text: '自然选择从不改变等位基因频率', correct: false },
          { text: '所有性状均由单基因完全决定', correct: false },
        ],
        ...srcLine('openstax_bio'),
      };
    }
    // conceptual FRQ / argumentation
    return {
      id: qid,
      title: `${code} 论证`,
      type: 'frq',
      difficulty: diff(i),
      stem: `用 CED 语言解释「${title}」中一个因果关系，并给出一个可观测预测。`,
      answer: `先定义关键实体与过程，再写因果链，最后给可测预测。`,
      solution: '避免循环论证；预测需可证伪。',
      ...srcLine('original'),
    };
  }

  // mech / em — every numeric target recomputed from stated parameters
  const mode = i % 6;
  if (subject === 'em') {
    if (mode === 0 || mode === 3) {
      const q = 2.0e-6; // C
      const r = 0.10; // m
      const E = 9.0e9 * q / (r * r); // 1.8e6
      return {
        id: qid,
        title: `${code} 点电荷电场`,
        type: 'frq',
        difficulty: diff(i),
        stimulus: {
          title: title,
          text: '点电荷位于原点；求距原点 r 处的电场大小（取 k=9.0×10⁹ N·m²/C²）。',
          diagram: { kind: 'field', charges: [{ x: 140, y: 90, q: '+q' }], pointP: { x: 200, y: 50 } },
          table: { headers: ['量', '值'], rows: [['q', '2.0 μC'], ['r', '0.10 m'], ['k', '9.0×10⁹']] },
        },
        parts: [
          { stem: '写出点电荷电场公式（符号）。', type: 'frq', answerLatex: String.raw`E=\dfrac{1}{4\pi\varepsilon_0}\dfrac{|q|}{r^{2}}`, solution: '库仑定律定义场。' },
          { stem: '代入表中数据求 E（N/C）。', type: 'frq', check: 'numeric', expected: E, tol: 0.01, answerLatex: String.raw`1.8\times10^{6}`, solution: `E=kq/r²=9e9·2e-6/0.01=${E}.` },
        ],
        ...srcLine('openstax_up'),
      };
    }
    if (mode === 1) {
      return {
        id: qid,
        title: `${code} 概念 MCQ`,
        type: 'mcq',
        difficulty: diff(i),
        stem: `关于「${title}」，下列正确的是？`,
        choices: [
          { text: '适用定律有明确条件，矢量/符号必须一致', correct: true },
          { text: '可随意忽略惯性系要求', correct: false },
          { text: '能量与动量在任何过程中同型守恒且无条件', correct: false },
          { text: '场线密度与物理强度无关', correct: false },
        ],
        ...srcLine('openstax_cp'),
      };
    }
    if (mode === 2 || mode === 5) {
      const eps = 12, R = 6, I = eps / R;
      return {
        id: qid,
        title: `${code} 串联电路电流`,
        type: 'frq',
        difficulty: diff(i),
        stimulus: {
          title: '单回路',
          text: '理想电池与单一电阻串联，求电流。',
          diagram: { kind: 'circuit', elements: [{ type: 'battery', label: 'ε' }, { type: 'resistor', label: 'R' }], ammeter: true },
          table: { headers: ['量', '值'], rows: [['ε', '12 V'], ['R', '6 Ω']] },
        },
        parts: [
          { stem: '写出欧姆定律。', type: 'frq', answerLatex: String.raw`I=\dfrac{\varepsilon}{R}`, solution: '理想串联。' },
          { stem: '求电流 I（A）。', type: 'frq', check: 'numeric', expected: I, tol: 0.01, answerLatex: '2', solution: `I=${eps}/${R}=${I} A.` },
        ],
        ...srcLine('openstax_up'),
      };
    }
    // mode 4: Gauss qualitative + numeric for sphere
    const Q = 1.0e-6, R = 0.05;
    const Eout = 9e9 * Q / (0.10 ** 2);
    return {
      id: qid,
      title: `${code} 高斯面`,
      type: 'frq',
      difficulty: diff(i),
      stimulus: {
        title: '球形高斯面',
        text: '均匀球对称电荷 Q 外包半径 r=0.10 m 的高斯球面。',
        diagram: { kind: 'gauss', surface: 'sphere' },
        table: { headers: ['量', '值'], rows: [['Q', '1.0 μC'], ['r', '0.10 m']] },
      },
      parts: [
        { stem: '写出高斯定律。', type: 'frq', answerLatex: String.raw`\oint\vec E\cdot\mathrm{d}\vec A=Q_{\mathrm{enc}}/\varepsilon_0`, solution: '对称性 ⇒ E 常量。' },
        { stem: '求球面外 E（N/C）。', type: 'frq', check: 'numeric', expected: Eout, tol: 0.01, answerLatex: String.raw`9.0\times10^{5}`, solution: `E=kQ/r²=${Eout}.` },
      ],
      ...srcLine('openstax_up'),
    };
  }

  // Mechanics
  if (mode === 0 || mode === 3) {
    const m = 2.0, F = 10.0, mu = 0.20, g = 9.8;
    const a = (F - mu * m * g) / m;
    const scale = 40;
    return {
      id: qid,
      title: `${code} 水平面滑动（有摩擦）`,
      type: 'frq',
      difficulty: diff(i),
      stimulus: {
        title: title,
        text: '水平面上一物块受水平拉力，动摩擦因数 μ_k。取 g=9.8 m/s²。求加速度。',
        diagram: {
          kind: 'fbd',
          surface: true,
          massLabel: 'm',
          forces: [
            { label: 'N', dx: 0, dy: -Math.round(m * g / F * scale) },
            { label: 'mg', dx: 0, dy: Math.round(m * g / F * scale) },
            { label: 'F', dx: scale, dy: 0 },
            { label: 'f_k', dx: -Math.round(mu * m * g / F * scale), dy: 0 },
          ],
        },
        table: { headers: ['量', '值'], rows: [['m', '2.0 kg'], ['F', '10 N'], ['μ_k', '0.20'], ['g', '9.8 m/s²']] },
      },
      parts: [
        { stem: '沿水平方向写出牛顿第二定律。', type: 'frq', answerLatex: String.raw`F-f_k=ma,\quad f_k=\mu_k mg`, solution: 'N=mg，动能摩擦与运动反向。' },
        { stem: '求加速度 a（m/s²）。', type: 'frq', check: 'numeric', expected: Number(a.toFixed(4)), tol: 0.02, answerLatex: String(Number(a.toFixed(3))), solution: `a=(F-μ_k mg)/m=(${F}-${mu}*${m}*${g})/${m}=${a.toFixed(4)}.` },
      ],
      ...srcLine('openstax_up'),
    };
  }
  if (mode === 1) {
    return {
      id: qid,
      title: `${code} 概念 MCQ`,
      type: 'mcq',
      difficulty: diff(i),
      stem: `关于「${title}」，下列正确的是？`,
      choices: [
        { text: '适用定律有明确条件，矢量/符号必须一致', correct: true },
        { text: '可随意忽略惯性系要求', correct: false },
        { text: '能量与动量在任何过程中同型守恒且无条件', correct: false },
        { text: '场线密度与物理强度无关', correct: false },
      ],
      ...srcLine('openstax_cp'),
    };
  }
  if (mode === 2 || mode === 5) {
    const m = 2.0, v = 4.0, K = 0.5 * m * v * v;
    return {
      id: qid,
      title: `${code} 动能`,
      type: 'frq',
      difficulty: diff(i),
      calculator: false,
      check: 'numeric',
      stemLatex: String.raw`\text{质量 }m=2.0\mathrm{kg}\text{，速率 }v=4.0\mathrm{m/s}\text{，求动能 }K=\dfrac{1}{2}mv^{2}`,
      expected: K,
      tol: 0.01,
      answerLatex: String.raw`16\,\mathrm{J}`,
      solution: `K=½·2·16=16 J.`,
      ...srcLine('openstax_up'),
    };
  }
  // mode 4: no friction a=F/m
  return {
    id: qid,
    title: `${code} 定量练习`,
    type: 'frq',
    difficulty: diff(i),
    calculator: true,
    check: 'numeric',
    stemLatex: String.raw`\text{质量 }m=2.0\mathrm{kg}\text{ 的物体受恒力 }F=10\mathrm{N}\text{，忽略摩擦，求加速度 }a`,
    expected: 5,
    tol: 0.01,
    answerLatex: String.raw`5.0\,\mathrm{m\,s^{-2}}`,
    solution: 'a=F/m=5.0 m/s²。',
    ...srcLine('openstax_up'),
  };
}

function polyExpand(n) {
  // (x^n-1)/(x-1) = x^{n-1}+...+1
  const terms = [];
  for (let k = n - 1; k >= 1; k--) terms.push(`x^${k}`);
  terms.push('1');
  return terms.join('+');
}
function polyExpandLatex(n) {
  const terms = [];
  for (let k = n - 1; k >= 1; k--) terms.push(k === 1 ? 'x' : `x^{${k}}`);
  terms.push('1');
  return terms.join('+');
}

// ——— Write banks ———
const summary = { bySubject: {}, total: 0, banks: 0 };
const ONLY = process.env.MATH_ONLY === '1' ? ['math'] : null;
for (const [subject, units] of Object.entries(ALL_UNITS)) {
  if (ONLY && !ONLY.includes(subject)) continue;
  summary.bySubject[subject] = { banks: 0, items: 0, ap: 0, prep: 0 };
  const dir = join(ROOT, 'data', subject, 'practice');
  mkdirSync(dir, { recursive: true });
  for (const unit of units) {
    const bank = buildBank(subject, unit);
    const n = countItems(bank.problems);
    const file = join(dir, `${unit.id}.js`);
    const body = `/** Practice bank for ${unit.id} — AP-style, attributed OER adaptations */\n` +
      `export const UNIT_REF = ${JSON.stringify(bank.UNIT_REF, null, 2)};\n` +
      `export const stimuli = ${JSON.stringify(bank.stimuli, null, 2)};\n` +
      `export const problems = ${JSON.stringify(bank.problems, null, 2)};\n`;
    writeFileSync(file, body);
    summary.banks++;
    summary.total += n;
    summary.bySubject[subject].banks++;
    summary.bySubject[subject].items += n;
    if (unit.layer === 'prep') summary.bySubject[subject].prep += n;
    else summary.bySubject[subject].ap += n;
    console.log(unit.id, n);
  }
}

// A partial (MATH_ONLY) build must not overwrite the shared all-subject summary.
if (!ONLY) {
  writeFileSync(join(ROOT, 'data/shared/practice-build-summary.json'), JSON.stringify(summary, null, 2));
}
console.log('SUMMARY', JSON.stringify(summary, null, 2));
