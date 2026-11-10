/**
 * Command palette — one search surface for pages, chapters, topics and modules.
 * Opened from the header trigger, Ctrl/Cmd+K, or “/”.
 */
import {
  searchGrouped,
  SUBJECTS,
  SUBJECT_ORDER,
  PATHS,
  CHAPTERS,
} from '../modules/registry.js';
import { el, clear } from './ui-shared.js';
import { navigate } from './router.js';

let open = false;
let activeIndex = 0;
let flatResults = [];
let root = null;
let panel = null;
let input = null;
let listEl = null;
let lastFocus = null;
let topicCache = null;
let topicLoad = null;

const chapterTitle = (ch) => ch.titleZh || String(ch.name || '').replace(/^Unit\s+\S+\s*·\s*/, '');
const normalized = (s) => String(s || '').toLowerCase();

function loadTopics() {
  if (topicCache) return Promise.resolve(topicCache);
  if (topicLoad) return topicLoad;
  topicLoad = Promise.all(
    SUBJECT_ORDER.map(async (sid) => {
      try {
        const mod = await import(`../data/${sid}/index.js`);
        return (mod.allTopics ? mod.allTopics() : []).map((t) => ({ ...t, subject: sid }));
      } catch (_) {
        return [];
      }
    }),
  ).then((groups) => {
    topicCache = groups.flat();
    return topicCache;
  });
  return topicLoad;
}

function ensureDom() {
  if (root) return;
  root = el('div', {
    className: 'palette',
    id: 'command-palette',
    hidden: true,
    role: 'dialog',
    'aria-modal': 'true',
    'aria-label': '搜索',
  });
  const backdrop = el('div', { className: 'palette-backdrop', onClick: () => closePalette() });
  panel = el('div', { className: 'palette-panel' });

  const head = el('div', { className: 'palette-head' }, [
    el('span', { className: 'palette-mark', 'aria-hidden': 'true' }),
    input = el('input', {
      type: 'search',
      className: 'palette-input',
      placeholder: '搜索知识点、模块或页面',
      autocomplete: 'off',
      spellcheck: 'false',
      'aria-label': '搜索知识点、模块或页面',
      'aria-controls': 'palette-results',
    }),
    el('kbd', { className: 'palette-kbd', 'aria-hidden': 'true', text: 'Esc' }),
    el('button', {
      type: 'button',
      className: 'palette-close hit-target',
      text: '关闭',
      'aria-label': '关闭搜索',
      onClick: () => closePalette(),
    }),
  ]);
  listEl = el('div', { className: 'palette-list', id: 'palette-results', role: 'listbox', 'aria-label': '结果' });
  const hint = el('div', { className: 'palette-hint' }, [
    el('span', { text: '↑↓ 选择' }),
    el('span', { text: 'Enter 打开' }),
    el('span', { text: 'Esc 关闭' }),
  ]);
  panel.append(head, listEl, hint);
  root.append(backdrop, panel);
  document.body.appendChild(root);

  input.addEventListener('input', () => {
    activeIndex = 0;
    renderResults(input.value);
    if (input.value.trim() && !topicCache) {
      loadTopics().then(() => {
        if (open && input.value === root.dataset.query) renderResults(input.value);
      });
    }
  });
  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      activeIndex = Math.min(activeIndex + 1, Math.max(0, flatResults.length - 1));
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
        navigate(hit.href);
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      closePalette();
    }
  });
  root.addEventListener('pointerdown', (e) => {
    if (e.target === root) closePalette();
  });
  root.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;
    const focusables = [...panel.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    )].filter((node) => node.tabIndex >= 0 && node.getClientRects().length > 0);
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    const active = document.activeElement;
    if (e.shiftKey) {
      if (active === first || !panel.contains(active)) {
        e.preventDefault();
        last.focus();
      }
    } else if (active === last || !panel.contains(active)) {
      e.preventDefault();
      first.focus();
    }
  });
}

function paintActive() {
  listEl.querySelectorAll('.palette-item').forEach((node, i) => {
    node.classList.toggle('active', i === activeIndex);
    node.tabIndex = i === activeIndex ? 0 : -1;
    if (i === activeIndex) node.setAttribute('aria-selected', 'true');
    else node.removeAttribute('aria-selected');
  });
  listEl.querySelector('.palette-item.active')?.scrollIntoView({ block: 'nearest' });
}

function addGroup(label, count) {
  const group = el('div', { className: 'palette-group' }, [
    el('span', { text: label }),
    count != null ? el('span', { className: 'palette-group-count', text: String(count) }) : null,
  ]);
  listEl.appendChild(group);
}

function addItem(hit) {
  const i = flatResults.length;
  flatResults.push(hit);
  const item = el('a', {
    className: 'palette-item hit-target' + (i === activeIndex ? ' active' : ''),
    href: hit.href,
    role: 'option',
    tabIndex: i === activeIndex ? 0 : -1,
    onClick: (e) => {
      e.preventDefault();
      closePalette();
      navigate(hit.href);
    },
  }, [
    el('span', { className: 'palette-item-main' }, [
      el('span', { className: 'palette-item-title', text: hit.title }),
      hit.code ? el('span', { className: 'palette-item-code', text: hit.code }) : null,
    ]),
    el('span', { className: 'palette-item-meta', text: hit.meta || '' }),
  ]);
  listEl.appendChild(item);
  return item;
}

function pageHits(q) {
  const needle = normalized(q).trim();
  const hits = [];
  const add = (title, meta, href, aliases = []) => {
    if (needle && !normalized(title).includes(needle) && !aliases.some((x) => normalized(x).includes(needle))) return;
    hits.push({ title, meta, href });
  };
  add('首页', '起始页', '#/', ['start', 'home', '起始']);
  add('全部模块', '按学科浏览交互实验', '#/all', ['index', '索引', 'catalog']);
  add('学习路径', '跨学科学习序列', '#/paths', ['path']);
  add('历年真题', 'College Board FRQ 索引', '#/pastpapers', ['past papers', 'frq']);
  add('来源与许可', '数据来源与许可', '#/credits', ['sources', 'license']);
  for (const sid of SUBJECT_ORDER) {
    const sub = SUBJECTS[sid];
    add(sub.name, sub.en || '学科', `#/${sid}`, [sub.en, sid]);
    add(`${sub.name}知识图谱`, '单元与知识点关系', `#/${sid}/map`, ['map', '图谱', 'mindmap', `${sid} map`]);
    if (sid === 'math') add('微积分公式表', '导数 · 积分 · 级数', '#/math/formulas', ['formula', '公式']);
    if (sid === 'mech') add('力学公式表', 'AP Physics C', '#/mech/formulas', ['formula', '公式']);
    if (sid === 'em') add('电磁公式表', 'AP Physics C', '#/em/formulas', ['formula', '公式']);
  }
  add('物理实验室 · Physics Lab', '自由探索 3D 物理沙盒', '#/physics/lab', ['lab', 'physics lab', '物理实验室', '3d']);
  return hits;
}

function renderResults(q) {
  if (!listEl) return;
  root.dataset.query = q;
  clear(listEl);
  flatResults = [];
  activeIndex = 0;
  const needle = normalized(q).trim();

  const pages = pageHits(q);
  if (pages.length) {
    addGroup('页面', pages.length);
    pages.forEach(addItem);
  }

  if (needle) {
    const chapterHits = [];
    for (const sid of SUBJECT_ORDER) {
      for (const ch of CHAPTERS[sid] || []) {
        const blob = `${ch.titleZh} ${ch.titleEn} ${ch.name} ${ch.unitCode} ${sid}`;
        if (normalized(blob).includes(needle)) {
          chapterHits.push({ title: chapterTitle(ch), meta: `${SUBJECTS[sid].name} · Unit ${ch.unitCode}`, href: `#/${sid}/${ch.id}` });
        }
      }
    }
    if (chapterHits.length) {
      addGroup('章节', chapterHits.length);
      chapterHits.forEach(addItem);
    }
  }

  if (needle) {
    const groups = searchGrouped(q);
    const total = groups.reduce((n, g) => n + g.modules.length, 0);
    if (total) {
      addGroup('交互实验', total);
      for (const g of groups) {
        for (const m of g.modules) {
          addItem({
            title: m.title,
            meta: `${g.name} / ${m.chapter || ''}`,
            href: `#/m/${m.id}`,
          });
        }
      }
    }
  }

  if (needle && topicCache) {
    const hits = [];
    for (const t of topicCache) {
      const blob = `${t.code} ${t.titleZh} ${t.titleEn} ${t.id}`;
      if (!normalized(blob).includes(needle)) continue;
      const sub = SUBJECTS[t.subject];
      const ch = (CHAPTERS[t.subject] || []).find((c) => c.id === t.chapterId);
      hits.push({
        title: t.titleZh,
        code: t.code,
        meta: `${sub?.name || ''} / ${ch ? chapterTitle(ch) : t.chapterId}`,
        href: `#/t/${t.subject}/${t.chapterId}/${t.code}`,
      });
      if (hits.length >= 31) break;
    }
    if (hits.length) {
      const capped = hits.length > 30;
      const shown = capped ? hits.slice(0, 30) : hits;
      addGroup('知识点', capped ? '30+' : shown.length);
      shown.forEach(addItem);
    }
  } else if (needle && !topicCache) {
    listEl.appendChild(el('div', { className: 'palette-loading', text: '载入知识点…' }));
  }

  if (!flatResults.length) {
    listEl.appendChild(el('div', { className: 'palette-empty', text: '没有匹配结果。' }));
  }
  paintActive();
}

export function openPalette() {
  ensureDom();
  if (open) {
    input?.focus();
    return;
  }
  lastFocus = document.activeElement;
  open = true;
  root.hidden = false;
  document.documentElement.classList.add('palette-open');
  const app = document.getElementById('app');
  if (app) {
    try { app.inert = true; } catch (_) {}
    app.setAttribute('inert', '');
  }
  document.getElementById('search-trigger')?.setAttribute('aria-expanded', 'true');
  input.value = '';
  activeIndex = 0;
  renderResults('');
  loadTopics();
  requestAnimationFrame(() => input.focus());
}

export function closePalette() {
  if (!root || !open) return;
  open = false;
  root.hidden = true;
  delete root.dataset.query;
  document.documentElement.classList.remove('palette-open');
  const app = document.getElementById('app');
  if (app) {
    try { app.inert = false; } catch (_) {}
    app.removeAttribute('inert');
  }
  document.getElementById('search-trigger')?.setAttribute('aria-expanded', 'false');
  const restore = lastFocus && lastFocus !== document.body && typeof lastFocus.focus === 'function' && lastFocus.isConnected
    ? lastFocus
    : document.getElementById('search-trigger');
  restore?.focus?.();
}

export function togglePalette() {
  if (open) closePalette();
  else openPalette();
}

export function isPaletteOpen() {
  return open;
}

export { SUBJECTS };
