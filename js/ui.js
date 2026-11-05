import {
  SUBJECTS,
  getSubjectTree,
  getPrevNext,
  getChapterName,
  getNextInChapter,
  getNextInPath,
} from '../modules/registry.js';
import { el, clear, rowLink, SUBJECT_LABEL } from './ui-shared.js';
import { isCompleted } from './progress.js';

export { el, clear, rowLink, SUBJECT_LABEL };

/** @deprecated home index moved to #/all */
export function renderHome(main) {
  clear(main);
  main.appendChild(el('p', { text: '请前往起始页 #/ 或全部索引 #/all' }));
}

export function renderSubjectPage(main) {
  clear(main);
  main.appendChild(el('p', { text: '请使用学科起始页渲染。' }));
}

function buildModuleTree(activeMod) {
  const nav = el('nav', { className: 'module-tree', 'aria-label': '模块目录' });
  for (const chapter of getSubjectTree(activeMod.subject)) {
    const modules = chapter.modules || [];
    nav.appendChild(
      el('a', {
        className: 'tree-chapter hit-target',
        href: `#/${activeMod.subject}/${chapter.id}`,
        text: chapter.name,
      }),
    );
    for (const m of modules) {
      const cls =
        'tree-link hit-target' +
        (m.id === activeMod.id ? ' active' : '') +
        (isCompleted(m.id) ? ' done' : '');
      nav.appendChild(
        el('a', {
          className: cls,
          href: `#/m/${m.id}`,
          text: m.title,
          'aria-current': m.id === activeMod.id ? 'page' : null,
        }),
      );
    }
  }
  return nav;
}

export function renderModuleShell(main, mod) {
  clear(main);
  const { prev, next } = getPrevNext(mod.id);
  const chapterName = mod.chapter || getChapterName(mod.subject, mod.chapterId) || '';
  const nextChapter = getNextInChapter(mod.id);
  const pathNext = getNextInPath(mod.id);

  const root = el('div', { className: 'module-view' });

  const crumb = el('nav', { className: 'breadcrumb', 'aria-label': '面包屑' }, [
    el('a', { className: 'hit-target', href: '#/', text: '首页' }),
    el('span', { className: 'crumb-sep', text: '/' }),
    el('a', { className: 'hit-target', href: `#/${mod.subject}`, text: SUBJECT_LABEL[mod.subject] || mod.subject }),
    el('span', { className: 'crumb-sep', text: '/' }),
    el('a', { className: 'hit-target', href: `#/${mod.subject}/${mod.chapterId}`, text: chapterName }),
    el('span', { className: 'crumb-sep', text: '/' }),
    el('span', { className: 'crumb-current', text: mod.title }),
  ]);

  const shell = el('div', { className: 'module-shell' });
  const side = el('aside', { className: 'module-side', id: 'module-side' }, [
    el('div', { className: 'side-label', text: SUBJECT_LABEL[mod.subject] || mod.subject }),
    el('a', { className: 'side-map-link hit-target', href: `#/${mod.subject}/map`, text: '知识图谱' }),
    buildModuleTree(mod),
  ]);

  const body = el('div', { className: 'module-body' });
  body.appendChild(crumb);
  body.appendChild(
    el('div', { className: 'module-header' }, [
      el('div', { className: 'module-header-text' }, [
        el('h1', { text: mod.title }),
        el('p', { className: 'explain', text: mod.explanation }),
      ]),
    ]),
  );

  if (mod.goals && mod.goals.length) {
    const ul = el('ul', { className: 'goals-list' });
    mod.goals.slice(0, 3).forEach((g) => ul.appendChild(el('li', { text: g })));
    body.appendChild(el('section', { className: 'goals-block', id: 'learning-goals' }, [ul]));
  }

  const layout = el('div', { className: 'module-layout' });
  const viz = el('div', { className: 'viz-panel', id: 'viz-panel' });
  const controls = el('aside', { className: 'control-panel', id: 'control-panel' });
  layout.append(viz, controls);
  body.appendChild(layout);

  const suggest = nextChapter || (pathNext && pathNext.module) || next;
  if (suggest) {
    body.appendChild(
      el('section', { className: 'next-suggest' }, [
        el('a', { className: 'entry-row hit-target', href: `#/m/${suggest.id}` }, [
          el('h3', { text: `下一步 · ${suggest.title}` }),
        ]),
      ]),
    );
  }

  const pager = el('div', { className: 'module-pager' }, [
    prev
      ? el('a', { className: 'pager-link prev hit-target', href: `#/m/${prev.id}` }, [
          el('span', { className: 'pager-label', text: '上一' }),
          el('span', { className: 'pager-title', text: prev.title }),
        ])
      : el('span', { className: 'pager-link prev disabled', text: '—' }),
    next
      ? el('a', { className: 'pager-link next hit-target', href: `#/m/${next.id}` }, [
          el('span', { className: 'pager-label', text: '下一' }),
          el('span', { className: 'pager-title', text: next.title }),
        ])
      : el('span', { className: 'pager-link next disabled', text: '—' }),
  ]);
  body.appendChild(pager);

  shell.append(side, body);
  root.appendChild(shell);
  main.appendChild(root);

  return { viz, controls, prev, next };
}

export function setActiveNav(subject) {
  document.querySelectorAll('.nav-link, .nav-trigger').forEach((a) => {
    const s = a.getAttribute('data-subject');
    a.classList.toggle('active', !!subject && s === subject);
  });
}

export function slider(parent, { label, min, max, step, value, format, onChange }) {
  const defaultValue = value;
  const group = el('div', { className: 'control-group control-slider' });
  const valueEl = el('input', {
    className: 'value value-edit hit-target',
    type: 'text',
    inputmode: 'decimal',
    'aria-label': `${label} 数值`,
  });
  const fmt = format || ((v) => String(v));
  const parseNum = (raw) => {
    const n = Number(String(raw).replace(/[^\d.+\-eE]/g, ''));
    return Number.isFinite(n) ? n : null;
  };
  const clamp = (v) => Math.min(max, Math.max(min, v));
  const snap = (v) => {
    const st = Number(step) || 0;
    if (st > 0) {
      const n = Math.round((v - min) / st) * st + min;
      return clamp(Number(n.toPrecision(12)));
    }
    return clamp(v);
  };
  valueEl.value = fmt(value);

  const lab = el('label', { className: 'slider-label hit-target', title: '双击恢复默认' }, [
    document.createTextNode(label),
    valueEl,
  ]);
  const input = el('input', {
    type: 'range',
    className: 'range-input hit-target',
    min: String(min),
    max: String(max),
    step: String(step),
    value: String(value),
    'aria-label': label,
  });

  let raf = 0;
  let pending = null;
  const emit = (v) => {
    pending = v;
    if (raf) return;
    raf = requestAnimationFrame(() => {
      raf = 0;
      const n = pending;
      pending = null;
      valueEl.value = fmt(n);
      onChange?.(n);
    });
  };

  const commitEdit = () => {
    let n = parseNum(valueEl.value);
    if (n == null) {
      valueEl.value = fmt(Number(input.value));
      return;
    }
    n = snap(n);
    input.value = String(n);
    valueEl.value = fmt(n);
    onChange?.(n);
  };

  const resetDefault = () => {
    const n = snap(defaultValue);
    input.value = String(n);
    valueEl.value = fmt(n);
    onChange?.(n);
  };

  input.addEventListener('pointerdown', (e) => {
    try {
      input.setPointerCapture(e.pointerId);
    } catch (_) {}
  });
  input.addEventListener('input', () => emit(Number(input.value)));
  input.addEventListener('keydown', (e) => {
    const st = Number(step) || (max - min) / 100;
    const big = e.shiftKey ? st * 10 : st;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      e.preventDefault();
      const n = snap(Number(input.value) - big);
      input.value = String(n);
      emit(n);
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      e.preventDefault();
      const n = snap(Number(input.value) + big);
      input.value = String(n);
      emit(n);
    } else if (e.key === 'Home') {
      e.preventDefault();
      input.value = String(min);
      emit(min);
    } else if (e.key === 'End') {
      e.preventDefault();
      input.value = String(max);
      emit(max);
    }
  });
  valueEl.addEventListener('change', commitEdit);
  valueEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      commitEdit();
      valueEl.blur();
    }
    e.stopPropagation();
  });
  valueEl.addEventListener('focus', () => valueEl.select());
  lab.addEventListener('dblclick', (e) => {
    if (e.target === valueEl) return;
    e.preventDefault();
    resetDefault();
  });
  valueEl.addEventListener('dblclick', (e) => {
    e.preventDefault();
    resetDefault();
  });

  group.append(lab, input);
  parent.appendChild(group);
  return {
    input,
    set(v) {
      input.value = String(v);
      valueEl.value = fmt(v);
    },
    get: () => Number(input.value),
    reset: resetDefault,
  };
}

export function button(parent, { text, className = '', onClick }) {
  const b = el('button', { className: `btn hit-target ${className}`.trim(), type: 'button', text });
  b.addEventListener('click', onClick);
  parent.appendChild(b);
  return b;
}

export function checkbox(parent, { label, checked = false, onChange }) {
  const row = el('label', { className: 'checkbox-row hit-target' });
  const input = el('input', { type: 'checkbox' });
  input.checked = checked;
  input.addEventListener('change', () => onChange?.(input.checked));
  row.append(input, document.createTextNode(label));
  parent.appendChild(row);
  return input;
}

export function select(parent, { label, options, value, onChange }) {
  const group = el('div', { className: 'control-group' });
  group.appendChild(el('label', { className: 'hit-target', text: label }));
  const sel = el('select', { className: 'hit-target' });
  for (const opt of options) {
    const o = el('option', { value: opt.value, text: opt.label });
    if (opt.value === value) o.selected = true;
    sel.appendChild(o);
  }
  sel.addEventListener('change', () => onChange?.(sel.value));
  group.appendChild(sel);
  parent.appendChild(group);
  return sel;
}

export function readoutBar(parent) {
  const bar = el('div', { className: 'readouts' });
  parent.appendChild(bar);
  bar.set = (entries) => {
    clear(bar);
    for (const [k, v] of entries) {
      const span = el('span', {}, [
        document.createTextNode(`${k} `),
        el('span', { className: 'val', text: String(v) }),
      ]);
      bar.appendChild(span);
    }
  };
  return bar;
}

export function fitCanvas(canvas, a, b) {
  let cssW;
  let cssH;
  if (a && typeof a === 'object' && a.getBoundingClientRect && b == null) {
    const r = a.getBoundingClientRect();
    cssW = r.width;
    cssH = r.height;
  } else {
    cssW = a;
    cssH = b;
  }
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const w = Math.max(1, Math.floor(cssW || 1));
  const h = Math.max(1, Math.floor(cssH || 1));
  canvas.width = Math.floor(w * dpr);
  canvas.height = Math.floor(h * dpr);
  canvas.style.width = `${w}px`;
  canvas.style.height = `${h}px`;
  canvas.style.touchAction = 'none';
  const ctx = canvas.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return { ctx, w, h, dpr, width: w, height: h };
}

export function observeSize(elNode, cb) {
  const ro = new ResizeObserver((entries) => {
    const cr = entries[0]?.contentRect;
    if (!cr) return;
    cb(cr.width, cr.height);
  });
  ro.observe(elNode);
  return () => ro.disconnect();
}
