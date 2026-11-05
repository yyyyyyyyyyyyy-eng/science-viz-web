/**
 * Cmd/Ctrl+K command palette — results grouped by subject.
 */
import { searchGrouped, SUBJECTS, SUBJECT_ORDER, PATHS, CHAPTERS, getModulesByChapter } from '../modules/registry.js';
import { el, clear } from './ui.js';

let open = false;
let activeIndex = 0;
let flatResults = [];
let root = null;
let input = null;
let listEl = null;

function ensureDom() {
  if (root) return;
  root = el('div', { className: 'palette', id: 'command-palette', hidden: true, role: 'dialog', 'aria-modal': 'true', 'aria-label': '搜索模块' });
  const backdrop = el('div', { className: 'palette-backdrop', onClick: closePalette });
  const panel = el('div', { className: 'palette-panel' });
  input = el('input', {
    type: 'search',
    className: 'palette-input hit-target',
    placeholder: '搜索模块、章节、标签…',
    autocomplete: 'off',
    'aria-label': '命令面板搜索',
  });
  listEl = el('div', { className: 'palette-list', role: 'listbox' });
  const hint = el('div', { className: 'palette-hint', text: 'Enter 打开 · Esc 关闭' });
  panel.append(input, listEl, hint);
  root.append(backdrop, panel);
  document.body.appendChild(root);

  input.addEventListener('input', () => {
    activeIndex = 0;
    renderResults(input.value);
  });
  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      activeIndex = Math.min(activeIndex + 1, flatResults.length - 1);
      paintActive();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      activeIndex = Math.max(activeIndex - 1, 0);
      paintActive();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const hit = flatResults[activeIndex];
      if (hit) {
        closePalette();
        location.hash = hit.href || `#/m/${hit.id}`;
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      closePalette();
    }
  });
}

function paintActive() {
  listEl.querySelectorAll('.palette-item').forEach((node, i) => {
    node.classList.toggle('active', i === activeIndex);
    if (i === activeIndex) node.setAttribute('aria-selected', 'true');
    else node.removeAttribute('aria-selected');
  });
  const active = listEl.querySelector('.palette-item.active');
  active?.scrollIntoView({ block: 'nearest' });
}

function renderResults(q) {
  clear(listEl);
  flatResults = [];
  const groups = searchGrouped(q);
  let idx = 0;
  // Pages / paths
  const qn = (q || '').trim().toLowerCase();
  const pageHits = [];
  if (!qn || '起始'.includes(qn) || 'welcome'.includes(qn) || '首页'.includes(qn)) {
    pageHits.push({ id: '__start', title: '起始页', meta: '平台介绍与入口', href: '#/' });
  }
  if (!qn || '索引'.includes(qn) || '全部'.includes(qn) || 'catalog'.includes(qn)) {
    pageHits.push({ id: '__all', title: '全部模块索引', meta: '按学科浏览', href: '#/all' });
  }
  if (!qn || '路径'.includes(qn) || 'path'.includes(qn) || PATHS.some(p => p.title.includes(qn) || (qn && p.summary.includes(qn)))) {
    pageHits.push({ id: '__paths', title: '学习路径', meta: '跨学科序列', href: '#/paths' });
    for (const path of PATHS) {
      if (!qn || path.title.toLowerCase().includes(qn) || path.summary.toLowerCase().includes(qn)) {
        pageHits.push({ id: `__path_${path.id}`, title: path.title, meta: '学习路径', href: '#/paths' });
      }
    }
  }
  for (const sid of SUBJECT_ORDER) {
    const sub = SUBJECTS[sid];
    if (!qn || sub.name.includes(qn) || (sub.overview || '').includes(qn)) {
      pageHits.push({ id: `__sub_${sid}`, title: `${sub.name}起始页`, meta: '学科', href: `#/${sid}` });
      if (!qn || '图谱'.includes(qn) || 'map'.includes(qn) || 'mind'.includes(qn)) {
        pageHits.push({ id: `__map_${sid}`, title: `${sub.name}知识图谱`, meta: '3D 图谱', href: `#/${sid}/map` });
      }
    }
    for (const ch of (CHAPTERS[sid] || [])) {
      if (!qn || ch.name.includes(qn) || (ch.summary || '').includes(qn)) {
        pageHits.push({ id: `__ch_${ch.id}`, title: ch.name, meta: `${sub.name} / 章节`, href: `#/${sid}/${ch.id}` });
      }
    }
  }
  if (pageHits.length) {
    listEl.appendChild(el('div', { className: 'palette-group', text: '页面' }));
    for (const hit of pageHits) {
      const i = idx++;
      flatResults.push({ id: hit.id, href: hit.href });
      listEl.appendChild(el('a', {
        className: 'palette-item hit-target' + (i === activeIndex ? ' active' : ''),
        href: hit.href,
        role: 'option',
        onClick: (e) => {
          e.preventDefault();
          closePalette();
          location.hash = hit.href;
        },
      }, [
        el('span', { className: 'palette-item-title', text: hit.title }),
        el('span', { className: 'palette-item-meta', text: hit.meta }),
      ]));
    }
  }

  for (const g of groups) {
    listEl.appendChild(el('div', { className: 'palette-group', text: g.subject.name }));
    for (const m of g.modules) {
      const i = idx++;
      flatResults.push({ id: m.id, href: `#/m/${m.id}` });
      const item = el('a', {
        className: 'palette-item hit-target' + (i === activeIndex ? ' active' : ''),
        href: `#/m/${m.id}`,
        role: 'option',
        onClick: (e) => {
          e.preventDefault();
          closePalette();
          location.hash = `#/m/${m.id}`;
        },
      }, [
        el('span', { className: 'palette-item-title', text: m.title }),
        el('span', { className: 'palette-item-meta', text: `${g.subject.name} / ${m.chapter}` }),
      ]);
      listEl.appendChild(item);
    }
  }
  if (!flatResults.length) {
    listEl.appendChild(el('div', { className: 'palette-empty', text: '无匹配结果' }));
  }
  paintActive();
}

export function openPalette() {
  ensureDom();
  open = true;
  root.hidden = false;
  document.documentElement.classList.add('palette-open');
  input.value = '';
  activeIndex = 0;
  renderResults('');
  requestAnimationFrame(() => input.focus());
}

export function closePalette() {
  if (!root) return;
  open = false;
  root.hidden = true;
  document.documentElement.classList.remove('palette-open');
}

export function togglePalette() {
  if (open) closePalette();
  else openPalette();
}

export function isPaletteOpen() {
  return open;
}

export { SUBJECTS };
