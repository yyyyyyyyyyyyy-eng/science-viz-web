import { el, clear, breadcrumb, SUBJECT_LABEL } from './ui-shared.js';
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
  if (!m) return checkNumeric(user, expected, opts.tol ?? 0.02);
  try {
    const su = m.simplify(user).toString();
    const se = m.simplify(expected).toString();
    if (su === se) return true;
    const diff = m.simplify(`(${user})-(${expected})`).toString();
    if (diff === '0' || diff === '0.0') return true;
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

function typeLabel(prob) {
  if (prob.type === 'mcq') return 'MCQ';
  if (prob.generator) return 'GEN';
  return 'FRQ';
}

function cardState(card, done) {
  const state = card.querySelector('.practice-state');
  card.dataset.done = done ? 'true' : 'false';
  if (state) {
    state.textContent = done ? '完成' : '';
    state.classList.toggle('done', !!done);
  }
}

export function renderPracticeUnit(main, { subject, unit, bank }) {
  clear(main);
  const flatIds = [];
  const setsCount = bank.problems.filter((p) => p.kind === 'set').length;
  for (const item of bank.problems) {
    if (item.kind === 'set') item.questions.forEach((q) => flatIds.push(`practice:${subject}/${unit.id}/${q.id}`));
    else flatIds.push(`practice:${subject}/${unit.id}/${item.id}`);
  }
  const prog = progressForIds(flatIds);

  const page = el('div', { className: 'practice-page' });
  main.appendChild(page);
  page.appendChild(
    breadcrumb([
      { href: '#/', label: '首页' },
      { href: `#/${subject}`, label: SUBJECT_LABEL[subject] },
      { href: `#/${subject}/${unit.id}`, label: unit.titleZh || unit.name },
      { label: '练习', current: true },
    ]),
  );

  const heroProgress = el('span', { className: 'practice-hero-progress', text: `完成 ${prog.label}` });
  page.appendChild(
    el('header', { className: `page-hero compact practice-hero ${subject}` }, [
      el('p', { className: 'page-kicker', text: `Unit ${unit.unitCode || ''} · 练习` }),
      el('h1', { text: unit.titleZh || unit.name }),
      el('p', { className: 'lead' }, [`${flatIds.length} 题 · ${setsCount} 组共享刺激 · `, heroProgress]),
      el('div', { className: 'hero-actions' }, [
        el('a', { className: 'btn hit-target', href: `#/${subject}/${unit.id}`, text: '返回单元' }),
        el('a', { className: 'btn hit-target', href: `#/${subject}/map`, text: '知识图谱' }),
      ]),
    ]),
  );

  const layout = el('div', { className: 'practice-layout' });
  const rail = el('aside', { className: 'practice-rail', 'aria-label': '题目导航' });
  const mainCol = el('div', { className: 'practice-main' });
  layout.append(rail, mainCol);
  page.appendChild(layout);

  const filterWrap = el('div', { className: 'practice-toolbar' });
  const filters = el('div', { className: 'practice-filters', role: 'group', 'aria-label': '筛选题目' });
  const countEl = el('span', { className: 'filter-count', 'aria-live': 'polite' });
  filterWrap.append(filters, countEl);
  mainCol.appendChild(filterWrap);

  const list = el('div', { className: 'practice-list' });
  mainCol.appendChild(list);
  const empty = el('div', { className: 'empty-state', hidden: true, text: '该筛选下没有题目。' });
  mainCol.appendChild(empty);

  const ctx = {
    cards: [],
    sets: [],
    onDone: null,
  };
  let idx = 0;
  bank.problems.forEach((item) => {
    if (item.kind === 'set') {
      list.appendChild(renderSharedSet(item, idx, subject, unit, (id) => `practice:${subject}/${unit.id}/${id}`, ctx));
      idx += item.questions.length;
    } else {
      list.appendChild(renderProblemCard(item, idx, subject, unit, (id) => `practice:${subject}/${unit.id}/${id}`, ctx));
      idx += 1;
    }
  });

  // Build the rail after cards so numbers, types and states are known.
  const railInner = el('div', { className: 'practice-rail-inner' });
  railInner.appendChild(el('p', { className: 'rail-kicker', text: '题目' }));
  const railProgressText = el('p', { className: 'rail-progress-text' });
  const railTrack = el('div', { className: 'rail-track' });
  const railFill = el('div', { className: 'rail-fill' });
  railTrack.appendChild(railFill);
  const jumpGrid = el('div', { className: 'practice-jump-grid' });
  ctx.cards.forEach((item) => {
    const b = el('button', {
      type: 'button',
      className: 'practice-jump hit-target',
      text: String(item.number + 1).padStart(2, '0'),
      'aria-label': `第 ${item.number + 1} 题`,
      'data-qid': item.progressId,
      'data-index': String(item.number),
    });
    b.addEventListener('click', () => jumpTo(item));
    if (isCompleted(item.progressId)) b.classList.add('is-done');
    jumpGrid.appendChild(b);
  });
  railInner.append(railProgressText, railTrack, jumpGrid);
  rail.appendChild(railInner);

  function updateProgress() {
    const done = ctx.cards.filter((item) => item.card.dataset.done === 'true').length;
    railProgressText.textContent = `完成 ${done} / ${ctx.cards.length}`;
    heroProgress.textContent = `完成 ${done} / ${ctx.cards.length}`;
    railFill.style.width = `${ctx.cards.length ? Math.round((done / ctx.cards.length) * 100) : 0}%`;
    ctx.cards.forEach((item) => {
      const jump = jumpGrid.querySelector(`[data-index="${item.number}"]`);
      jump?.classList.toggle('is-done', item.card.dataset.done === 'true');
    });
  }
  updateProgress();

  ctx.onDone = (card) => {
    updateProgress();
  };

  // Add previous / next movement at the end of every card (used on narrow screens).
  ctx.cards.forEach((item, i) => {
    const foot = el('div', { className: 'practice-card-foot' });
    if (i > 0) {
      const prevBtn = el('button', { type: 'button', className: 'btn hit-target', text: '上一题' });
      prevBtn.addEventListener('click', () => jumpTo(ctx.cards[i - 1]));
      foot.appendChild(prevBtn);
    }
    if (i < ctx.cards.length - 1) {
      const nextBtn = el('button', { type: 'button', className: 'btn hit-target', text: '下一题' });
      nextBtn.addEventListener('click', () => jumpTo(ctx.cards[i + 1]));
      foot.appendChild(nextBtn);
    }
    item.card.appendChild(foot);
  });

  function jumpTo(item) {
    if (item.card.hidden) setFilter('all');
    const top = item.card.getBoundingClientRect().top + window.scrollY - 84;
    window.scrollTo({ top, behavior: 'smooth' });
    setTimeout(() => item.card.querySelector('.practice-stem, h2')?.focus?.({ preventScroll: true }), 420);
  }

  const filterDefs = [
    ['all', '全部'],
    ['mcq', 'MCQ'],
    ['frq', 'FRQ'],
    ['gen', 'GEN'],
    ['易', '易'],
    ['中', '中'],
    ['难', '难'],
  ];
  const filterButtons = new Map();
  let activeFilter = 'all';
  function setFilter(key) {
    activeFilter = key;
    filterButtons.forEach((b, k) => {
      const on = k === key;
      b.classList.toggle('active', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    ctx.cards.forEach((item) => {
      const card = item.card;
      const type = card.dataset.type || '';
      const diff = card.dataset.diff || '';
      let show = true;
      if (key !== 'all') show = type === key || diff === key;
      card.hidden = !show;
    });
    ctx.sets.forEach((set) => {
      const any = [...set.querySelectorAll('.practice-card')].some((c) => !c.hidden);
      set.hidden = !any;
    });
    const visible = ctx.cards.filter((item) => !item.card.hidden).length;
    countEl.textContent = `${visible} / ${ctx.cards.length} 题`;
    empty.hidden = visible !== 0;
    ctx.cards.forEach((item) => {
      jumpGrid.querySelector(`[data-index="${item.number}"]`)?.classList.toggle('is-hidden', item.card.hidden);
    });
  }
  filterDefs.forEach(([key, label]) => {
    const b = el('button', { type: 'button', className: 'filter-chip hit-target', text: label });
    b.setAttribute('aria-pressed', key === 'all' ? 'true' : 'false');
    b.addEventListener('click', () => setFilter(key));
    filterButtons.set(key, b);
    filters.appendChild(b);
  });
  setFilter('all');

  // Keep the rail question highlighted while scrolling.
  let activeIndex = -1;
  let raf = 0;
  function paintActive() {
    let current = 0;
    for (let i = 0; i < ctx.cards.length; i++) {
      if (ctx.cards[i].card.hidden) continue;
      const top = ctx.cards[i].card.getBoundingClientRect().top;
      if (top <= 140) current = i;
      else break;
    }
    if (current === activeIndex) return;
    activeIndex = current;
    jumpGrid.querySelectorAll('.practice-jump').forEach((b, i) => {
      b.classList.toggle('active', i === current);
    });
  }
  const onScroll = () => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      raf = 0;
      paintActive();
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  paintActive();

  return () => {
    window.removeEventListener('scroll', onScroll);
    if (raf) cancelAnimationFrame(raf);
  };
}

function renderSharedSet(set, startIdx, subject, unit, pidFn, ctx) {
  const wrap = el('section', { className: 'practice-set' });
  const head = el('div', { className: 'practice-set-head' }, [
    el('h2', { text: set.title || '共享刺激题组' }),
    el('span', { className: 'section-count', text: `${set.questions.length} 题` }),
  ]);
  wrap.appendChild(head);
  let stimObj = set.stimulus;
  if (!stimObj && set.sharedStimulus) stimObj = set._stimulus;
  if (stimObj) wrap.appendChild(renderStimulus(stimObj));
  set.questions.forEach((q, i) => {
    const card = renderProblemCard({ ...q, stimulus: null }, startIdx + i, subject, unit, pidFn, ctx);
    card.classList.add('practice-card-nested');
    wrap.appendChild(card);
  });
  ctx.sets.push(wrap);
  return wrap;
}

function renderProblemCard(prob, idx, subject, unit, pidFn, ctx) {
  const progressId = pidFn(prob.id);
  markVisited(progressId);
  const type = prob.type || (prob.generator ? 'gen' : 'frq');
  const card = el('article', {
    className: 'practice-card',
    id: `practice-q-${idx + 1}`,
    'data-type': type,
    'data-diff': prob.difficulty || '中',
    'data-qid': progressId,
  });
  const done = isCompleted(progressId);
  card.dataset.done = done ? 'true' : 'false';
  const stateEl = el('span', { className: 'practice-state' + (done ? ' done' : ''), text: done ? '完成' : '' });

  const head = el('header', { className: 'practice-card-head' }, [
    el('span', { className: 'practice-number', text: String(idx + 1).padStart(2, '0') }),
    el('div', { className: 'practice-card-title' }, [
      el('h2', { text: prob.title || '题目', tabindex: '-1' }),
      el('div', { className: 'practice-tags' }, [
        el('span', { className: 'tag', text: typeLabel(prob) }),
        el('span', { className: 'tag', text: prob.difficulty || '中' }),
        prob.calculator === false ? el('span', { className: 'tag', text: '无计算器' }) : null,
        prob.calculator === true ? el('span', { className: 'tag', text: '可用计算器' }) : null,
      ]),
    ]),
    stateEl,
  ]);
  card.appendChild(head);

  const body = el('div', { className: 'practice-card-body' });
  if (prob.source) {
    body.appendChild(
      el('p', {
        className: 'practice-source muted',
        text: `来源：${prob.source}${prob.license ? ' · ' + prob.license : ''}`,
      }),
    );
  }
  if (prob.stimulus) body.appendChild(renderStimulus(prob.stimulus));
  if (prob.stem || prob.stemLatex) {
    const stem = el('div', { className: 'practice-stem' });
    if (prob.stemLatex) stem.appendChild(tex(prob.stemLatex, true));
    if (prob.stem) stem.appendChild(el('p', { text: prob.stem }));
    body.appendChild(stem);
  }

  const markDone = () => {
    markCompleted(progressId);
    cardState(card, true);
    ctx.onDone?.(card);
  };

  if (typeof prob.generate === 'function') {
    let instance = prob.generate();
    const regen = el('button', { type: 'button', className: 'btn hit-target', text: '换一组数据' });
    const mount = el('div', { className: 'practice-gen-mount' });
    const redraw = () => {
      clear(mount);
      instance = prob.generate();
      cardState(card, false);
      mount.appendChild(renderInstanceBody(instance, progressId, markDone));
    };
    regen.addEventListener('click', redraw);
    body.append(regen, mount);
    mount.appendChild(renderInstanceBody(instance, progressId, markDone));
  } else {
    body.appendChild(renderInstanceBody(prob, progressId, markDone));
  }
  card.appendChild(body);

  ctx.cards.push({ card, number: idx, progressId });
  return card;
}

function renderInstanceBody(prob, progressId, onDone) {
  const wrap = el('div', { className: 'practice-instance' });
  if (prob.parts) {
    prob.parts.forEach((part, i) => {
      const partWrap = el('div', { className: 'practice-part' });
      partWrap.appendChild(el('h3', { text: `(${String.fromCharCode(97 + i)})` }));
      if (part.stem) partWrap.appendChild(el('p', { text: part.stem }));
      if (part.stemLatex) partWrap.appendChild(tex(part.stemLatex, true));
      partWrap.appendChild(
        renderAnswerUI(
          { ...prob, ...part, type: part.type || prob.type, parts: undefined },
          progressId + ':' + i,
          onDone,
        ),
      );
      wrap.appendChild(partWrap);
    });
    return wrap;
  }
  wrap.appendChild(renderAnswerUI(prob, progressId, onDone));
  return wrap;
}

function renderAnswerUI(prob, progressId, onDone) {
  const box = el('div', { className: 'practice-answer-ui' });

  if (prob.type === 'mcq' && prob.choices) {
    const group = el('div', { className: 'mcq-group', role: 'radiogroup', 'aria-label': '选项' });
    const fb = el('p', { className: 'practice-feedback', role: 'status', 'aria-live': 'polite' });
    let selected = -1;
    const buttons = [];
    prob.choices.forEach((c, i) => {
      const btn = el('button', {
        type: 'button',
        className: 'mcq-choice hit-target',
        role: 'radio',
        'aria-checked': 'false',
        tabIndex: i === 0 ? 0 : -1,
      }, [
        el('span', { className: 'mcq-letter', text: String.fromCharCode(65 + i) }),
        el('span', { className: 'mcq-text', text: c.text }),
      ]);
      btn.addEventListener('click', () => {
        if (group.dataset.locked === 'true') return;
        selected = i;
        buttons.forEach((b, j) => {
          b.classList.toggle('is-selected', j === i);
          b.classList.remove('is-wrong');
          b.setAttribute('aria-checked', j === i ? 'true' : 'false');
          b.tabIndex = j === i ? 0 : -1;
        });
        fb.textContent = '';
        fb.className = 'practice-feedback';
        checkBtn.disabled = false;
      });
      btn.addEventListener('keydown', (e) => {
        if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
        e.preventDefault();
        const next = e.key === 'ArrowDown'
          ? (i + 1) % buttons.length
          : (i - 1 + buttons.length) % buttons.length;
        buttons[next].focus();
        buttons[next].click();
      });
      buttons.push(btn);
      group.appendChild(btn);
    });
    const checkBtn = el('button', { type: 'button', className: 'btn hit-target', text: '检查答案', disabled: true });
    checkBtn.addEventListener('click', () => {
      if (selected < 0) return;
      const ok = prob.choices[selected].correct || selected === prob.answerIndex;
      buttons.forEach((b) => b.classList.remove('is-correct', 'is-wrong'));
      if (ok) {
        buttons[selected].classList.add('is-correct');
        group.dataset.locked = 'true';
        buttons.forEach((b) => { b.disabled = true; });
        checkBtn.disabled = true;
        checkBtn.textContent = '已答对';
        fb.textContent = '正确';
        fb.className = 'practice-feedback ok';
        onDone?.();
      } else {
        buttons[selected].classList.add('is-wrong');
        fb.textContent = '再试一次';
        fb.className = 'practice-feedback bad';
        checkBtn.disabled = false;
      }
    });
    box.append(group, el('div', { className: 'answer-actions' }, [checkBtn]), fb);
  } else if (prob.check === 'symbolic') {
    const form = el('form', { className: 'answer-form', novalidate: true });
    const input = el('input', {
      className: 'hit-target value-edit',
      type: 'text',
      placeholder: '符号答案，如 2*x 或 (x^2-1)/(x-1)',
      'aria-label': '符号答案',
      autocomplete: 'off',
    });
    const btn = el('button', { type: 'submit', className: 'btn hit-target', text: '检查等价' });
    const fb = el('p', { className: 'practice-feedback', role: 'status', 'aria-live': 'polite' });
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const ok = checkSymbolic(input.value, prob.expected || prob.answerLatex || prob.answer, { tol: prob.tol });
      fb.textContent = ok ? '等价正确' : '与标准形式不等价，请化简后再试';
      fb.className = `practice-feedback ${ok ? 'ok' : 'bad'}`;
      form.dataset.state = ok ? 'ok' : 'bad';
      if (ok) {
        input.disabled = true;
        btn.disabled = true;
        onDone?.();
      }
    });
    form.append(input, btn);
    box.append(form, fb);
  } else if (prob.check === 'numeric') {
    const form = el('form', { className: 'answer-form', novalidate: true });
    const input = el('input', {
      className: 'hit-target value-edit',
      type: 'text',
      placeholder: '数值答案',
      'aria-label': '数值答案',
      autocomplete: 'off',
    });
    const btn = el('button', { type: 'submit', className: 'btn hit-target', text: '检查' });
    const fb = el('p', { className: 'practice-feedback', role: 'status', 'aria-live': 'polite' });
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const ok = checkNumeric(input.value, prob.expected, prob.tol ?? 0.02);
      fb.textContent = ok ? '正确' : '不在容差内';
      fb.className = `practice-feedback ${ok ? 'ok' : 'bad'}`;
      form.dataset.state = ok ? 'ok' : 'bad';
      if (ok) {
        input.disabled = true;
        btn.disabled = true;
        onDone?.();
      }
    });
    form.append(input, btn);
    box.append(form, fb);
  }

  const sol = el('details', { className: 'practice-sol' });
  sol.appendChild(el('summary', { className: 'hit-target', text: '答案与解析' }));
  const solBody = el('div');
  if (prob.answerLatex) solBody.appendChild(tex(prob.answerLatex, true));
  if (prob.answer) solBody.appendChild(el('p', { text: prob.answer }));
  if (prob.solution) solBody.appendChild(el('p', { text: prob.solution }));
  if (prob.solutionLatex) solBody.appendChild(tex(prob.solutionLatex, true));
  sol.appendChild(solBody);
  sol.addEventListener('toggle', () => {
    if (sol.open) onDone?.();
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
