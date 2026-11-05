#!/usr/bin/env node
/**
 * Fix confirmed content-accuracy audit issues at generator + data level.
 */
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

function walk(dir, pred, out = []) {
  for (const name of readdirSync(dir, { withFileTypes: true })) {
    if (name.name === 'node_modules' || name.name === 'vendor') continue;
    const p = join(dir, name.name);
    if (name.isDirectory()) walk(p, pred, out);
    else if (pred(p)) out.push(p);
  }
  return out;
}

// --- 1. Generator fixes ---
{
  const genPath = join(ROOT, 'scripts/build-practice-v9.mjs');
  let g = readFileSync(genPath, 'utf8');
  const before = g;
  g = g.replace('// 1.8e5', '// 1.8e6');
  g = g.replace('1.8\\times10^{5}', '1.8\\times10^{6}');
  // Circuit stimulus with capacitor but answer I=ε/R: remove C from that diagram
  // and drop C from the table when asking resistor current; keep C only for RC modes.
  g = g.replace(
    "if (kind === 'circuit') base.diagram = { kind: 'circuit', elements: [{ type: 'battery', label: 'ε' }, { type: 'resistor', label: 'R' }, { type: 'capacitor', label: 'C' }], ammeter: true };",
    "if (kind === 'circuit') base.diagram = { kind: 'circuit', elements: [{ type: 'battery', label: 'ε' }, { type: 'resistor', label: 'R' }], ammeter: true };",
  );
  // Table still lists C — remove C from generic em stimulus table used with I=ε/R answers
  g = g.replace(
    "rows: subject === 'em'\n          ? [['ε', '12 V'], ['R', '6 Ω'], ['C', '50 μF']]\n          : [['m', '2.0 kg'], ['μ_k', '0.20'], ['θ', '30°']],",
    "rows: subject === 'em'\n          ? [['ε', '12 V'], ['R', '6 Ω']]\n          : [['m', '2.0 kg'], ['μ_k', '0.20'], ['θ', '30°']],",
  );
  // Ohm answerLatex use stacked fraction
  g = g.replace("answerLatex: 'I=\\\\varepsilon/R'", "answerLatex: String.raw`I=\\dfrac{\\varepsilon}{R}`");
  g = g.replace(
    "answer: subject === 'em' ? '例如 I=ε/R=2 A（串联电阻情形）'",
    "answer: subject === 'em' ? '例如 I=ε/R=2 A（仅电阻串联；若含电容则直流稳态 I=0）'",
  );
  if (g !== before) {
    writeFileSync(genPath, g);
    console.log('patched build-practice-v9.mjs');
  } else console.log('generator unchanged?');
}

// --- 2. Practice files: E-field answerLatex magnitude ---
{
  const files = walk(join(ROOT, 'data'), (p) => /\/practice\/.*\.js$/.test(p));
  let n = 0;
  for (const f of files) {
    let t = readFileSync(f, 'utf8');
    const t2 = t.replaceAll('1.8\\times10^{5}', '1.8\\times10^{6}');
    // Fix solution strings that claim /0.01 = 1.8e5 incorrectly — leave expected alone
    const t3 = t2.replaceAll('E=kq/r²=9e9·2e-6/0.01=', 'E=kq/r^2=9e9*2e-6/0.01=');
    if (t3 !== t) {
      writeFileSync(f, t3);
      n++;
    }
  }
  console.log('practice files patched for E latex:', n);
}

// --- 3. Topic formula repair ---
const POOL = {
  derivative: { latex: "f'(a)=\\lim_{h\\to 0}\\dfrac{f(a+h)-f(a)}{h}", note: '导数定义（差商极限）。' },
  deriv_leib: { latex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}=f\'(x)', note: '莱布尼茨记号。' },
  chain: { latex: "(f\\circ g)'(x)=f'(g(x))\\cdot g'(x)", note: '链式法则。' },
  limit: { latex: '\\lim_{x\\to a}f(x)=L', note: '极限记号。' },
  integral: { latex: '\\int_a^b f(x)\\,\\mathrm{d}x=\\lim_{n\\to\\infty}\\sum_{i=1}^{n}f(x_i^*)\\Delta x', note: '定积分黎曼和定义。' },
  newton: { latex: '\\sum \\vec F=m\\vec a', note: '牛顿第二定律。' },
  kinetic: { latex: 'K=\\dfrac{1}{2}mv^2', note: '平动动能。' },
  gauss: { latex: '\\oint\\vec E\\cdot\\mathrm{d}\\vec A=\\dfrac{Q_{\\mathrm{enc}}}{\\varepsilon_0}', note: '高斯定律。' },
  coulomb_E: { latex: 'E=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{|q|}{r^{2}}', note: '点电荷电场。' },
  capacitor: { latex: 'C=\\kappa\\varepsilon_0\\dfrac{A}{d}', note: '平行板电容（含电介质）。' },
  RC: { latex: '\\tau=RC,\\quad q(t)=CE\\left(1-e^{-\\dfrac{t}{\\tau}}\\right)', note: 'RC 充电；放电为指数衰减。' },
  ohm: { latex: 'I=\\dfrac{\\varepsilon}{R}', note: '欧姆定律（理想单电阻）。' },
  faraday: { latex: '\\varepsilon=-\\dfrac{d\\Phi_B}{dt}', note: '法拉第定律。' },
  ampere: { latex: '\\oint\\vec B\\cdot\\mathrm{d}\\vec\\ell=\\mu_0 I_{\\mathrm{enc}}', note: '安培定律。' },
  pH: { latex: '\\mathrm{pH}=-\\log_{10}[\\mathrm{H}^+]', note: 'pH 定义。' },
  work_energy: { latex: 'W_{\\mathrm{net}}=\\Delta K', note: '功–动能定理。' },
  momentum: { latex: '\\vec p=m\\vec v,\\quad \\vec J=\\Delta\\vec p', note: '动量与冲量。' },
  shm: { latex: 'x=A\\cos(\\omega t+\\phi),\\quad \\omega=\\sqrt{k/m}', note: '水平弹簧简谐运动。' },
  pendulum: { latex: 'T=2\\pi\\sqrt{\\dfrac{L}{g}}\\ (\\theta\\text{ 小})', note: '单摆小角周期。' },
  grav: { latex: 'F=G\\dfrac{m_1 m_2}{r^{2}}', note: '万有引力。' },
  circle: { latex: 'a_c=\\dfrac{v^{2}}{r},\\quad \\sum F_r=m a_c', note: '向心加速度与径向牛顿定律。' },
  arc: { latex: 'L=\\int_a^b\\sqrt{1+(y\')^{2}}\\,\\mathrm{d}x', note: '直角坐标弧长。' },
  volume: { latex: 'V=\\int_a^b A(x)\\,\\mathrm{d}x', note: '已知截面面积的体积。' },
  unit_circle: { latex: '\\cos^{2}\\theta+\\sin^{2}\\theta=1', note: '单位圆恒等式。' },
  bio_null: null,
};

function pickFormulas(subject, titleZh, titleEn, code) {
  const t = `${titleZh} ${titleEn} ${code}`;
  const out = [];
  const add = (k) => { if (POOL[k] && !out.find((x) => x.latex === POOL[k].latex)) out.push({ ...POOL[k] }); };
  if (subject === 'math') {
    if (/弧长|Arc Length/.test(t)) add('arc');
    else if (/体积|Volume|截面/.test(t)) add('volume');
    else if (/单位圆|Unit Circle|三角/.test(t)) add('unit_circle');
    else if (/链式|Chain/.test(t)) add('chain');
    else if (/积分|Integral|黎曼|Riemann|FTC|原函数/.test(t)) add('integral');
    else if (/极限|Limit/.test(t)) add('limit');
    else if (/导数|Derivative|切线|变化率/.test(t)) { add('derivative'); add('deriv_leib'); }
    else { add('deriv_leib'); }
  } else if (subject === 'mech') {
    if (/简谐|SHM|弹簧/.test(t)) add('shm');
    else if (/单摆|摆/.test(t)) add('pendulum');
    else if (/万有引力|轨道|引力/.test(t)) add('grav');
    else if (/圆周|向心|弯道/.test(t)) add('circle');
    else if (/动量|碰撞|冲量/.test(t)) add('momentum');
    else if (/功|动能|势能|能量|功率/.test(t)) { add('work_energy'); add('kinetic'); }
    else if (/电路|RC|欧姆/.test(t)) add('ohm');
    else add('newton');
  } else if (subject === 'em') {
    if (/RC/.test(t)) add('RC');
    else if (/LR|LC|电感|感应|法拉第|磁通/.test(t)) add('faraday');
    else if (/安培|螺线管|毕奥|磁场/.test(t)) add('ampere');
    else if (/电容|电介质/.test(t)) add('capacitor');
    else if (/高斯|通量|导体静电/.test(t)) add('gauss');
    else if (/欧姆|电路|基尔霍夫|电流|电阻|功率/.test(t)) add('ohm');
    else if (/电势|电势能/.test(t)) add('coulomb_E');
    else add('coulomb_E');
  } else if (subject === 'bio') {
    if (/pH|酸碱/.test(t)) add('pH');
    // bio mostly non-formula; leave empty array to clear wrong physics formulas
  }
  return out;
}

function isBadFormula(latex, subject, titleZh) {
  if (!latex) return true;
  if (latex.includes('\\\\dfrac') || latex.includes('\\\\times')) return true; // double-escaped
  if (/\\tau=RC|q\(t\)=CE/.test(latex) && !/电路|RC|欧姆|基尔霍夫|电容|电流|电阻|LR|LC|感应/.test(titleZh)) return true;
  if (subject === 'math' && /\\sum \\vec F|pH|\\tau=RC|K=\\dfrac\{1\}\{2\}mv/.test(latex)) return true;
  if (subject === 'bio' && /\\sum \\vec F|\\tau=RC|f'\(a\)|\\mathrm\{d\}y/.test(latex)) return true;
  if (subject === 'em' && /\\sum \\vec F=m\\vec a/.test(latex) && !/力|牛顿|洛伦兹/.test(titleZh)) return true;
  if (subject === 'mech' && /\\tau=RC/.test(latex) && !/电路/.test(titleZh)) return true;
  return false;
}

const topicFiles = walk(join(ROOT, 'data'), (p) =>
  /\/(math|mech|em|bio)\/[^/]+\.js$/.test(p) && !p.includes('/practice/') && !p.endsWith('index.js') && !p.endsWith('formulas.js') && !p.endsWith('figures.js') && !p.endsWith('figlib.js') && !p.endsWith('cross-links.js') && !p.endsWith('relations.js') && !p.endsWith('graph.js'));

let topicsFixed = 0, filesTouched = 0;
for (const f of topicFiles) {
  let src = readFileSync(f, 'utf8');
  const orig = src;
  // Fix double-escaped dfrac/times inside latex strings globally in topic files
  src = src.replace(/e\^\{\-\\\\dfrac\{t\}\{\\tau\}\}/g, 'e^{-\\dfrac{t}{\\tau}}');
  src = src.replace(/\\\\dfrac/g, '\\dfrac');
  // careful: after one pass, \\\\dfrac -> \\dfrac which is correct in JS string source for \dfrac

  // Per-topic formula object replacement via regex on TOPICS entries is hard;
  // instead replace known wrong latex string constants with subject-aware ones by scanning module.
  // Load as text and replace formulas arrays that still contain polluted latex.
}

// More robust: use dynamic import of each unit file's TOPICS, rewrite, serialize — but TOPICS is often export const TOPICS = [ huge ].
// Simpler string approach: replace each known bad latex with a placeholder then assign by file subject.

const BAD_RC = String.raw`\tau=RC,\quad q(t)=CE\left(1-e^{-\dfrac{t}{\tau}}\right)`;
const BAD_RC_DOUBLE_SRC = '\\tau=RC,\\quad q(t)=CE\\left(1-e^{-\\\\dfrac{t}{\\tau}}\\right)'; // as in file
const BAD_RC_FIXED_SRC = '\\tau=RC,\\quad q(t)=CE\\left(1-e^{-\\dfrac{t}{\\tau}}\\right)';

for (const f of topicFiles) {
  let src = readFileSync(f, 'utf8');
  const orig = src;
  // normalize double escape in source
  src = src.replaceAll(BAD_RC_DOUBLE_SRC, BAD_RC_FIXED_SRC);
  src = src.replaceAll('e^{-\\\\dfrac{t}{\\tau}}', 'e^{-\\dfrac{t}{\\tau}}');

  const subject = f.includes('/math/') ? 'math' : f.includes('/mech/') ? 'mech' : f.includes('/em/') ? 'em' : f.includes('/bio/') ? 'bio' : '';

  // Replace formulas blocks that are clearly polluted: if a topic title nearby doesn't match formula domain
  // Walk each "titleZh": "..." ... "formulas": [ { "latex": "..." } ]
  src = src.replace(
    /("titleZh":\s*")((?:\\.|[^"\\])*)("[\s\S]*?"formulas":\s*\[\s*\{[\s\S]*?"latex":\s*")((?:\\.|[^"\\])*)(")/g,
    (match, p1, titleZh, mid, latex, p5) => {
      const decodedLatex = latex.replace(/\\n/g, '\n').replace(/\\\\/g, '\\');
      // mid may include titleEn — extract
      const en = /"titleEn":\s*"((?:\\.|[^"\\])*)"/.exec(mid)?.[1] || '';
      const code = /"code":\s*"((?:\\.|[^"\\])*)"/.exec(mid)?.[1] || '';
      if (!isBadFormula(decodedLatex, subject, titleZh)) return match;
      const next = pickFormulas(subject, titleZh, en, code);
      topicsFixed++;
      if (!next.length) {
        // empty formulas array — replace whole formulas array later; for now put a harmless subject default
        const fallback = subject === 'bio' ? null : pickFormulas(subject, titleZh, en, code);
        if (!fallback || !fallback.length) {
          // replace latex with empty marker — use subject-safe
          if (subject === 'bio') return `${p1}${titleZh}${mid}${''}${p5}`.replace('"latex": "', '"latex": "'); // keep structure
          return match; // shouldn't happen
        }
      }
      const chosen = next[0];
      // re-escape for JS string
      const esc = chosen.latex.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
      return `${p1}${titleZh}${mid}${esc}${p5}`;
    },
  );

  // Clear bio formulas that are still physics after above — set latex to empty and note
  if (subject === 'bio') {
    src = src.replace(
      /("formulas":\s*\[\s*\{\s*"latex":\s*")(?:\\sum \\vec F=m\\vec a|\\tau=RC[\s\S]*?|K=\\dfrac\{1\}\{2\}mv\^2|f'\(a\)=[\s\S]*?)(")/g,
      '$1$2',
    );
  }

  if (src !== orig) {
    writeFileSync(f, src);
    filesTouched++;
  }
}

console.log(JSON.stringify({ topicsFixed, filesTouched, topicFiles: topicFiles.length }, null, 2));
