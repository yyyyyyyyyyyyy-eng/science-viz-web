import { el, clear } from './ui-shared.js';
import { SUBJECT_LABEL } from './ui-shared.js';
import { markVisited, markCompleted, isCompleted, progressForIds } from './progress.js';
import { renderDiagram } from './diagrams.js';

function tex(latex, display = false) {
  const span = el('span', { className: display ? 'tex' : 'tex-inline' });
  if (window.katex) {
    try {
      window.katex.render(latex, span, { throwOnError: false, displayMode: display });
      return span;
    } catch (_) {}
  }
  span.textContent = latex;
  return span;
}

function mathEngine() {
  return window.math || null;
}

/** Symbolic equivalence via simplify + random-point numeric sampling */
export function checkSymbolic(userRaw, expectedRaw, opts = {}) {
  const m = mathEngine();
  const user = String(userRaw || '').trim();
  const expected = String(expectedRaw || '').trim();
  if (!user || !expected) return false;
  if (user.replace(/\s+/g, '') === expected.replace(/\s+/g, '')) return true;
  if (!m) {
    // fallback: numeric if both parse as numbers
    return checkNumeric(user, expected, opts.tol ?? 0.02);
  }
  try {
    const su = m.simplify(user).toString();
    const se = m.simplify(expected).toString();
    if (su === se) return true;
    // difference simplify to 0
    const diff = m.simplify(`(${user})-(${expected})`).toString();
    if (diff === '0' || diff === '0.0') return true;
    // random-point test for free symbols
    const vars = new Set();
    try {
      m.parse(user).traverse((n) => {
        if (n.isSymbolNode && !['e', 'pi', 'E', 'PI'].includes(n.name)) vars.add(n.name);
      });
      m.parse(expected).traverse((n) => {
        if (n.isSymbolNode && !['e', 'pi', 'E', 'PI'].includes(n.name)) vars.add(n.name);
      });
    } catch (_) {}
    const names = [...vars];
    if (names.length === 0) {
      const vu = m.evaluate(user);
      const ve = m.evaluate(expected);
      return Math.abs(Number(vu) - Number(ve)) <= (opts.tol ?? 1e-6) * Math.max(1, Math.abs(Number(ve)));
    }
    let ok = 0;
    const trials = opts.trials ?? 8;
    for (let t = 0; t < trials; t++) {
      const scope = {};
      for (const n of names) scope[n] = (Math.random() * 4 - 2) || 0.37;
      try {
        const vu = Number(m.evaluate(user, scope));
        const ve = Number(m.evaluate(expected, scope));
        if (!Number.isFinite(vu) || !Number.isFinite(ve)) continue;
        if (Math.abs(vu - ve) <= (opts.tol ?? 1e-4) * Math.max(1, Math.abs(ve))) ok++;
      } catch (_) {}
    }
    return ok >= Math.ceil(trials * 0.7);
  } catch (_) {
    return false;
  }
}

function checkNumeric(user, expected, tol = 0.02) {
  const u = Number(String(user).replace(/[^0-9.+\-eE]/g, ''));
  const e = Number(expected);
  if (!Number.isFinite(u) || !Number.isFinite(e)) return false;
  const scale = Math.max(1, Math.abs(e));
  return Math.abs(u - e) <= tol * scale;
}

function renderStimulus(stim) {
  if (!stim) return null;
  const box = el('div', { className: 'stim-box' });
  if (stim.title) box.appendChild(el('h3', { text: stim.title }));
  if (stim.text) box.appendChild(el('p', { text: stim.text }));
  if (stim.textLatex) box.appendChild(tex(stim.textLatex, true));
  if (stim.table) {
    const table = el('table', { className: 'stim-table' });
    const thead = el('thead');
    const hr = el('tr');
    stim.table.headers.forEach((h) => hr.appendChild(el('th', { text: h })));
    thead.appendChild(hr);
    table.appendChild(thead);
    const tb = el('tbody');
    stim.table.rows.forEach((row) => {
      const tr = el('tr');
      row.forEach((c) => tr.appendChild(el('td', { text: String(c) })));
      tb.appendChild(tr);
    });
    table.appendChild(tb);
    box.appendChild(table);
  }
  const svgHtml = stim.diagram ? renderDiagram(stim.diagram) : stim.svg;
  if (svgHtml) {
    const wrap = el('div', { className: 'stim-svg', html: svgHtml });
    box.appendChild(wrap);
  }
  if (stim.graph) {
    const canvas = el('canvas', { className: 'stim-graph' });
    box.appendChild(canvas);
    requestAnimationFrame(() => drawGraph(canvas, stim.graph));
  }
  if (stim.source) {
    box.appendChild(
      el('p', {
        className: 'practice-source muted',
        text: `来源：${stim.source}${stim.license ? ' · ' + stim.license : ''}${stim.sourceNote ? ' — ' + stim.sourceNote : ''}`,
      }),
    );
  }
  return box;
}

function drawGraph(canvas, g) {
  const dpr = Math.min(devicePixelRatio || 1, 2);
  const w = canvas.clientWidth || 320;
  const h = canvas.clientHeight || 160;
  const bw = Math.floor(w * dpr);
  const bh = Math.floor(h * dpr);
  if (canvas.width !== bw) canvas.width = bw;
  if (canvas.height !== bh) canvas.height = bh;
  // CSS owns layout (.stim-graph); do not write style width/height from measurements.
  canvas.style.width = '';
  canvas.style.height = '';
  const ctx = canvas.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const style = getComputedStyle(document.documentElement);
  ctx.fillStyle = style.getPropertyValue('--canvas-plot').trim() || '#f7f5f0';
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = style.getPropertyValue('--border').trim() || '#ccc';
  ctx.beginPath();
  ctx.moveTo(32, h - 24);
  ctx.lineTo(w - 8, h - 24);
  ctx.moveTo(32, h - 24);
  ctx.lineTo(32, 8);
  ctx.stroke();
  const pts = g.points || [];
  if (pts.length < 2) return;
  const xs = pts.map((p) => p[0]);
  const ys = pts.map((p) => p[1]);
  const xmin = Math.min(...xs);
  const xmax = Math.max(...xs);
  const ymin = Math.min(0, ...ys);
  const ymax = Math.max(...ys);
  const mapX = (x) => 32 + ((x - xmin) / (xmax - xmin || 1)) * (w - 48);
  const mapY = (y) => h - 24 - ((y - ymin) / (ymax - ymin || 1)) * (h - 40);
  ctx.strokeStyle = style.getPropertyValue('--accent').trim() || '#c45c26';
  ctx.beginPath();
  pts.forEach((p, i) => {
    const X = mapX(p[0]);
    const Y = mapY(p[1]);
    if (i === 0) ctx.moveTo(X, Y);
    else ctx.lineTo(X, Y);
  });
  ctx.stroke();
  if (g.xLabel) {
    ctx.fillStyle = style.getPropertyValue('--muted').trim() || '#888';
    ctx.font = '12px sans-serif';
    ctx.fillText(g.xLabel, w - 40, h - 8);
  }
}

export function renderPracticeUnit(main, { subject, unit, bank }) {
  clear(main);
  const pid = (id) => `practice:${subject}/${unit.id}/${id}`;
  main.appendChild(
    el('nav', { className: 'breadcrumb' }, [
      el('a', { className: 'hit-target', href: '#/', text: '首页' }),
      el('span', { className: 'crumb-sep', text: '/' }),
      el('a', { className: 'hit-target', href: `#/${subject}`, text: SUBJECT_LABEL[subject] }),
      el('span', { className: 'crumb-sep', text: '/' }),
      el('a', { className: 'hit-target', href: `#/${subject}/${unit.id}`, text: unit.name || unit.titleZh }),
      el('span', { className: 'crumb-sep', text: '/' }),
      el('span', { className: 'crumb-current', text: '练习' }),
    ]),
  );

  const flatIds = [];
  for (const item of bank.problems) {
    if (item.kind === 'set') item.questions.forEach((q) => flatIds.push(pid(q.id)));
    else flatIds.push(pid(item.id));
  }
  const prog = progressForIds(flatIds);
  main.appendChild(
    el('header', { className: 'page-hero compact' }, [
      el('h1', { text: `练习 · ${unit.titleZh || unit.name}` }),
      el('p', {
        className: 'lead',
        text: `${flatIds.length} 题 · ${bank.problems.filter((p) => p.kind === 'set').length} 组共享刺激 · 完成 ${prog.label}`,
      }),
    ]),
  );

  const filters = el('div', { className: 'practice-filters' });
  ['全部', 'MCQ', 'FRQ', 'GEN', '易', '中', '难'].forEach((lab) => {
    const b = el('button', { type: 'button', className: 'btn hit-target', text: lab });
    b.addEventListener('click', () => {
      document.querySelectorAll('.practice-card, .practice-set').forEach((card) => {
        const t = card.dataset.type || '';
        const d = card.dataset.diff || '';
        let show = true;
        if (lab === 'MCQ') show = t.includes('mcq');
        else if (lab === 'FRQ') show = t.includes('frq');
        else if (lab === 'GEN') show = t.includes('gen');
        else if (lab === '易' || lab === '中' || lab === '难') show = d === lab || d.includes(lab);
        card.hidden = !show;
      });
    });
    filters.appendChild(b);
  });
  main.appendChild(filters);

  const list = el('div', { className: 'practice-list' });
  let idx = 0;
  bank.problems.forEach((item) => {
    if (item.kind === 'set') {
      list.appendChild(renderSharedSet(item, idx, subject, unit, pid));
      idx += item.questions.length;
    } else {
      list.appendChild(renderProblemCard(item, idx, subject, unit, pid));
      idx += 1;
    }
  });
  main.appendChild(list);
}

function resolveStimulus(item, bank) {
  if (item.stimulus) return item.stimulus;
  if (item.sharedStimulus && bank?.stimuli?.[item.sharedStimulus]) {
    return bank.stimuli[item.sharedStimulus];
  }
  return null;
}

function renderSharedSet(set, startIdx, subject, unit, pidFn) {
  const wrap = el('section', {
    className: 'practice-set',
    'data-type': set.questions.map((q) => q.type || (q.generator ? 'gen' : 'frq')).join(' '),
    'data-diff': set.questions.map((q) => q.difficulty || '中').join(' '),
  });
  wrap.appendChild(el('h2', { text: set.title || '共享刺激题组' }));
  const stim = set.stimulus || (set.sharedStimulus ? null : null);
  // stimulus embedded on set
  let stimObj = set.stimulus;
  if (!stimObj && set.sharedStimulus) {
    // resolved at load into set.stimulus
    stimObj = set._stimulus;
  }
  if (stimObj) wrap.appendChild(renderStimulus(stimObj));
  set.questions.forEach((q, i) => {
    const card = renderProblemCard({ ...q, stimulus: null }, startIdx + i, subject, unit, pidFn);
    card.classList.add('practice-card-nested');
    wrap.appendChild(card);
  });
  return wrap;
}

function renderProblemCard(prob, idx, subject, unit, pidFn) {
  const id = pidFn(prob.id);
  markVisited(id);
  const card = el('article', {
    className: 'practice-card',
    'data-type': prob.type || (prob.generator ? 'gen' : 'frq'),
    'data-diff': prob.difficulty || '中',
  });
  const tags = el('div', { className: 'practice-tags' }, [
    el('span', { className: 'tag', text: (prob.type || (prob.generator ? 'GEN' : 'FRQ')).toString().toUpperCase() }),
    el('span', { className: 'tag', text: prob.difficulty || '中' }),
    prob.calculator === false ? el('span', { className: 'tag', text: '无计算器' }) : null,
    prob.calculator === true ? el('span', { className: 'tag', text: '可用计算器' }) : null,
    isCompleted(id) ? el('span', { className: 'status-pill done', text: '完成' }) : null,
  ]);
  card.append(tags, el('h2', { text: `${idx + 1}. ${prob.title || '题目'}` }));
  if (prob.source) {
    card.appendChild(
      el('p', {
        className: 'practice-source muted',
        text: `来源：${prob.source}${prob.license ? ' · ' + prob.license : ''}`,
      }),
    );
  }

  if (prob.stimulus) card.appendChild(renderStimulus(prob.stimulus));
  if (prob.stem || prob.stemLatex) {
    const stem = el('div', { className: 'practice-stem' });
    if (prob.stemLatex) stem.appendChild(tex(prob.stemLatex, true));
    if (prob.stem) stem.appendChild(el('p', { text: prob.stem }));
    card.appendChild(stem);
  }

  if (typeof prob.generate === 'function') {
    let instance = prob.generate();
    const regen = el('button', { type: 'button', className: 'btn hit-target', text: '换一组数据' });
    const mount = el('div', { className: 'practice-gen-mount' });
    const redraw = () => {
      clear(mount);
      instance = prob.generate();
      mount.appendChild(renderInstanceBody(instance, id));
    };
    regen.addEventListener('click', redraw);
    card.append(regen, mount);
    mount.appendChild(renderInstanceBody(instance, id));
  } else {
    card.appendChild(renderInstanceBody(prob, id));
  }
  return card;
}

function renderInstanceBody(prob, progressId) {
  const wrap = el('div');
  if (prob.parts) {
    prob.parts.forEach((part, i) => {
      wrap.appendChild(el('h3', { text: `(${String.fromCharCode(97 + i)})` }));
      if (part.stem) wrap.appendChild(el('p', { text: part.stem }));
      if (part.stemLatex) wrap.appendChild(tex(part.stemLatex, true));
      wrap.appendChild(renderAnswerUI({ ...prob, ...part, type: part.type || prob.type, parts: undefined }, progressId + ':' + i));
    });
    return wrap;
  }
  wrap.appendChild(renderAnswerUI(prob, progressId));
  return wrap;
}

function renderAnswerUI(prob, progressId) {
  const box = el('div', { className: 'practice-answer-ui' });
  if (prob.type === 'mcq' && prob.choices) {
    const group = el('div', { className: 'mcq-group', role: 'radiogroup' });
    const fb = el('p', { className: 'practice-feedback muted', text: '' });
    prob.choices.forEach((c, i) => {
      const btn = el('button', {
        type: 'button',
        className: 'mcq-choice hit-target',
        text: `${String.fromCharCode(65 + i)}. ${c.text}`,
      });
      btn.addEventListener('click', () => {
        group.querySelectorAll('.mcq-choice').forEach((b) => b.classList.remove('correct', 'wrong'));
        const ok = c.correct || i === prob.answerIndex;
        btn.classList.add(ok ? 'correct' : 'wrong');
        if (ok) markCompleted(progressId);
        fb.textContent = ok ? '正确' : '再试';
      });
      group.appendChild(btn);
    });
    box.append(group, fb);
  } else if (prob.check === 'symbolic') {
    const input = el('input', {
      className: 'hit-target value-edit',
      type: 'text',
      placeholder: '符号答案，如 2*x 或 (x^2-1)/(x-1)',
      'aria-label': '符号答案',
    });
    const btn = el('button', { type: 'button', className: 'btn hit-target', text: '检查等价' });
    const fb = el('p', { className: 'practice-feedback muted' });
    btn.addEventListener('click', () => {
      const ok = checkSymbolic(input.value, prob.expected || prob.answerLatex || prob.answer, { tol: prob.tol });
      fb.textContent = ok ? '等价正确' : '与标准形式不等价，请化简后再试';
      if (ok) markCompleted(progressId);
    });
    box.append(input, btn, fb);
  } else if (prob.check === 'numeric') {
    const input = el('input', { className: 'hit-target value-edit', type: 'text', placeholder: '数值答案' });
    const btn = el('button', { type: 'button', className: 'btn hit-target', text: '检查' });
    const fb = el('p', { className: 'practice-feedback muted' });
    btn.addEventListener('click', () => {
      const ok = checkNumeric(input.value, prob.expected, prob.tol ?? 0.02);
      fb.textContent = ok ? '正确' : '不在容差内';
      if (ok) markCompleted(progressId);
    });
    box.append(input, btn, fb);
  }

  const sol = el('details', { className: 'practice-sol' });
  sol.appendChild(el('summary', { className: 'hit-target', text: '显示答案与解析' }));
  const body = el('div');
  if (prob.answerLatex) body.appendChild(tex(prob.answerLatex, true));
  if (prob.answer) body.appendChild(el('p', { text: prob.answer }));
  if (prob.solution) body.appendChild(el('p', { text: prob.solution }));
  if (prob.solutionLatex) body.appendChild(tex(prob.solutionLatex, true));
  sol.appendChild(body);
  sol.addEventListener('toggle', () => {
    if (sol.open) markCompleted(progressId);
  });
  box.appendChild(sol);
  return box;
}

function expandGenerators(problems) {
  return problems.map((p) => {
    if (!p.generator) return p;
    if (p.generator === 'power') {
      return {
        ...p,
        type: p.type || 'gen',
        generate() {
          const n = 2 + Math.floor(Math.random() * 5);
          const c = 1 + Math.floor(Math.random() * 6);
          return {
            type: 'frq',
            difficulty: p.difficulty || '易',
            calculator: false,
            check: 'symbolic',
            stemLatex: `\\text{若 }f(x)=${c}x^{${n}}\\text{，求 }f'(x)`,
            expected: `${c * n}*x^${n - 1}`,
            answerLatex: `f'(x)=${c * n}x^{${n - 1}}`,
            solution: '幂法则：系数乘指数、指数减一。',
          };
        },
      };
    }
    if (p.generator === 'chain') {
      return {
        ...p,
        type: p.type || 'gen',
        generate() {
          const a = 2 + Math.floor(Math.random() * 4);
          return {
            type: 'mcq',
            difficulty: p.difficulty || '中',
            calculator: false,
            stemLatex: `\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left[\\sin(${a}x)\\right]=`,
            choices: [
              { text: `${a} cos(${a}x)`, correct: true },
              { text: `cos(${a}x)`, correct: false },
              { text: `${a} sin(${a}x)`, correct: false },
              { text: `-sin(${a}x)`, correct: false },
            ],
            answerLatex: `${a}\\cos(${a}x)`,
            solution: '链式法则：外层余弦乘以内层导数。',
          };
        },
      };
    }
    if (p.generator === 'product') {
      return {
        ...p,
        type: p.type || 'gen',
        generate() {
          const a = 1 + Math.floor(Math.random() * 4);
          const b = 1 + Math.floor(Math.random() * 4);
          return {
            type: 'frq',
            calculator: false,
            check: 'symbolic',
            stemLatex: `\\text{求 }\\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left[(${a}x+1)(${b}x^{2})\\right]`,
            expected: `${a * b}*x^2+${2 * b}*(${a}*x+1)*x`.replace(/\+\-/g, '-'),
            answerLatex: `${a * b}x^{2}+${2 * b}x(${a}x+1)`,
            solution: '乘积法则 u\'v+uv\'。',
          };
        },
      };
    }
    if (p.generator === 'limit') {
      return {
        ...p,
        type: p.type || 'gen',
        generate() {
          const a = 1 + Math.floor(Math.random() * 5);
          return {
            type: 'frq',
            calculator: false,
            check: 'numeric',
            stemLatex: `\\displaystyle\\lim_{x\\to ${a}}\\dfrac{x^{2}-${a * a}}{x-${a}}`,
            expected: 2 * a,
            tol: 0.01,
            answerLatex: String(2 * a),
            solution: `因式分解得 x+${a}，代入得 ${2 * a}。`,
          };
        },
      };
    }
    if (p.generator === 'integral') {
      return {
        ...p,
        type: p.type || 'gen',
        generate() {
          const n = 1 + Math.floor(Math.random() * 4);
          const c = 1 + Math.floor(Math.random() * 5);
          return {
            type: 'frq',
            calculator: false,
            check: 'symbolic',
            stemLatex: `\\displaystyle\\int ${c}x^{${n}}\\,\\mathrm{d}x`,
            expected: `${c}/${n + 1}*x^${n + 1}+C`,
            answerLatex: `\\dfrac{${c}}{${n + 1}}x^{${n + 1}}+C`,
            solution: '幂积分公式，别忘了 +C。',
          };
        },
      };
    }
    return p;
  });
}

function attachSharedStimuli(bank) {
  const stimuli = bank.stimuli || {};
  const problems = (bank.problems || []).map((item) => {
    if (item.kind === 'set') {
      const stim = item.stimulus || stimuli[item.sharedStimulus] || null;
      return { ...item, _stimulus: stim, stimulus: stim };
    }
    if (item.sharedStimulus && stimuli[item.sharedStimulus]) {
      return { ...item, stimulus: item.stimulus || stimuli[item.sharedStimulus] };
    }
    return item;
  });
  return { ...bank, problems };
}

export async function loadPracticeBank(subject, unitId) {
  try {
    const mod = await import(`../data/${subject}/practice/${unitId}.js`);
    const raw = {
      UNIT_REF: mod.UNIT_REF,
      stimuli: mod.stimuli || {},
      problems: expandGenerators(mod.problems || []),
    };
    return attachSharedStimuli(raw);
  } catch (_) {
    return null;
  }
}
