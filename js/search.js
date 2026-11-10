/**
 * Bilingual topic + vocabulary search.
 *
 * Opened from “/” or the header 查找 · Find button. This is a content search
 * over topic titles and vocabulary, not a second command palette; Ctrl/Cmd+K
 * and the existing 搜索 trigger still open js/palette.js.
 */
import { SUBJECTS, SUBJECT_ORDER, CHAPTERS } from '../modules/registry.js';
import { el, clear } from './ui-shared.js';
import { navigate } from './router.js';
import { closeMenus } from './nav.js';
import { isPaletteOpen } from './palette.js';

const STYLE_ID = 'feat-search-style';
const TRIGGER_ID = 'feat-search-trigger';
const MAX_RESULTS = 30;
const MAX_TOPICS = 15;

let bound = false;
let open = false;
let activeIndex = 0;
let flatResults = [];
let root = null;
let panel = null;
let backdropEl = null;
let input = null;
let listEl = null;
let stateEl = null;
let moreEl = null;
let trigger = null;
let lastFocus = null;
let indexCache = null;
let indexPromise = null;

const normalized = (s) => String(s == null ? '' : s).toLowerCase();
const cleaned = (s) => String(s == null ? '' : s).trim();

function bilingual(zh, en) {
  const a = cleaned(zh);
  const b = cleaned(en);
  if (a && b && a !== b) return `${a} · ${b}`;
  return a || b;
}

function ensureStyle() {
  if (document.getElementById(STYLE_ID)) return;
  const link = document.createElement('link');
  link.id = STYLE_ID;
  link.rel = 'stylesheet';
  link.href = 'css/search.css';
  document.head.appendChild(link);
}

function ensureTrigger() {
  if (trigger && trigger.isConnected) return;
  if (!trigger) trigger = document.getElementById(TRIGGER_ID);
  if (trigger && trigger.isConnected) return;
  const actions = document.querySelector('.header-actions');
  if (!actions) return;
  trigger = el('button', {
    type: 'button',
    className: 'feat-search-trigger hit-target',
    id: TRIGGER_ID,
    'aria-label': '查找知识点与词汇 · Find topics and vocabulary',
    'aria-haspopup': 'dialog',
    'aria-expanded': 'false',
    'aria-keyshortcuts': '/',
    title: '查找知识点与词汇 · Find topics and vocabulary (/)',
  }, [
    el('span', { className: 'feat-search-trigger-label', text: '查找 · Find' }),
    el('kbd', { className: 'feat-search-trigger-kbd', 'aria-hidden': 'true', text: '/' }),
  ]);
  trigger.addEventListener('click', () => {
    closeMenus();
    openSearch();
  });
  const paletteTrigger = document.getElementById('search-trigger');
  if (paletteTrigger && paletteTrigger.parentNode === actions) {
    paletteTrigger.insertAdjacentElement('afterend', trigger);
  } else {
    actions.appendChild(trigger);
  }
}

function loadIndex() {
  if (indexCache) return Promise.resolve(indexCache);
  if (indexPromise) return indexPromise;
  indexPromise = Promise.all(
    SUBJECT_ORDER.map(async (sid) => {
      try {
        const mod = await import(`../data/${sid}/index.js`);
        const topics = mod.allTopics ? mod.allTopics() : [];
        const chapters = new Map((CHAPTERS[sid] || []).map((ch) => [ch.id, ch]));
        const sub = SUBJECTS[sid] || { name: sid, en: sid };
        return topics.map((topic) => ({
          topic,
          sid,
          sub,
          chapter: chapters.get(topic.chapterId) || null,
        }));
      } catch (_) {
        return [];
      }
    }),
  ).then((groups) => {
    const index = { topics: [], vocabulary: [] };
    let order = 0;
    for (const entry of groups.flat()) {
      const { topic, sid, sub, chapter } = entry;
      const href = `#/t/${sid}/${topic.chapterId}/${topic.code}`;
      const topicTitle = bilingual(topic.titleZh, topic.titleEn) || cleaned(topic.code || topic.id);
      const meta = [
        cleaned(topic.code),
        cleaned(sub.name),
        cleaned(chapter && chapter.titleZh) || (topic.unitCode ? `Unit ${topic.unitCode}` : ''),
      ].filter(Boolean).join(' · ');
      index.topics.push({
        kind: 'topic',
        title: topicTitle,
        meta,
        href,
        fields: [topic.titleZh, topic.titleEn, topic.code, topic.id].map(normalized).filter(Boolean),
        order: order++,
      });
      const vocabulary = Array.isArray(topic.vocabulary) ? topic.vocabulary : [];
      for (const term of vocabulary) {
        if (!term) continue;
        const termZh = cleaned(term.termZh);
        const termEn = cleaned(term.termEn);
        if (!termZh && !termEn) continue;
        index.vocabulary.push({
          kind: 'vocab',
          title: bilingual(termZh, termEn) || topicTitle,
          termZh,
          termEn,
          defZh: cleaned(term.defZh),
          defEn: cleaned(term.defEn),
          meta,
          parent: topicTitle,
          href,
          fields: [termZh, termEn, term.defZh, term.defEn].map(normalized).filter(Boolean),
          order: order++,
        });
      }
    }
    indexCache = index;
    return index;
  }).catch(() => {
    indexCache = { topics: [], vocabulary: [] };
    return indexCache;
  });
  return indexPromise;
}

function scoreHit(doc, needle) {
  let best = 0;
  for (let i = 0; i < doc.fields.length; i += 1) {
    const field = doc.fields[i];
    const at = field.indexOf(needle);
    if (at < 0) continue;
    let score = at === 0 ? 80 : 45;
    if (field === needle) score = 120;
    if (i >= 2) score -= 12;
    if (score > best) best = score;
  }
  return best;
}

function ranked(docs, needle) {
  const hits = [];
  for (const doc of docs) {
    const score = scoreHit(doc, needle);
    if (score > 0) hits.push({ doc, score });
  }
  hits.sort((a, b) => b.score - a.score || a.doc.order - b.doc.order);
  return hits.map((hit) => hit.doc);
}

function plainTex(value) {
  return String(value || '')
    .replace(/\\dfrac\s*\{([^{}]*)\}\s*\{([^{}]*)\}/g, '($1)/($2)')
    .replace(/\\frac\s*\{([^{}]*)\}\s*\{([^{}]*)\}/g, '($1)/($2)')
    .replace(/\\sqrt\s*\{([^{}]*)\}/g, '√($1)')
    .replace(/\\([a-zA-Z]+)/g, '$1')
    .replace(/[{}]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function renderMath(tex) {
  const span = el('span', { className: 'site-search-math' });
  const katex = window.katex;
  if (katex && typeof katex.renderToString === 'function') {
    try {
      const html = katex.renderToString(tex, {
        throwOnError: false,
        displayMode: false,
        strict: 'ignore',
      });
      if (html && !html.includes('katex-error')) {
        span.innerHTML = html;
        return span;
      }
    } catch (_) { /* fall through to plain text */ }
  }
  span.textContent = plainTex(tex);
  return span;
}

const MATH_RE = /\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]|\$([^$\n]+)\$/g;

function appendRichText(parent, value) {
  const text = String(value || '');
  MATH_RE.lastIndex = 0;
  let last = 0;
  let match = MATH_RE.exec(text);
  while (match) {
    if (match.index > last) parent.appendChild(document.createTextNode(text.slice(last, match.index)));
    parent.appendChild(renderMath(match[1] || match[2] || match[3] || ''));
    last = match.index + match[0].length;
    match = MATH_RE.exec(text);
  }
  if (last < text.length) parent.appendChild(document.createTextNode(text.slice(last)));
}

function appendDefinition(node, doc, needle) {
  const zh = doc.defZh;
  const en = doc.defEn;
  const zhHit = !!needle && (
    normalized(doc.termZh).includes(needle) || normalized(zh).includes(needle)
  );
  const enHit = !!needle && (
    normalized(doc.termEn).includes(needle) || normalized(en).includes(needle)
  );
  let parts;
  if (zhHit && !enHit) parts = [zh];
  else if (enHit && !zhHit) parts = [en];
  else parts = [zh, en];
  parts = [...new Set(parts.filter(Boolean))];
  if (!parts.length) parts = [zh, en].filter(Boolean);
  parts.forEach((part, i) => {
    if (i) node.appendChild(document.createTextNode(' · '));
    appendRichText(node, part);
  });
}

function paintActive() {
  flatResults.forEach((hit, i) => {
    hit.el.classList.toggle('active', i === activeIndex);
    hit.el.setAttribute('aria-selected', i === activeIndex ? 'true' : 'false');
  });
  if (!flatResults.length) {
    input?.removeAttribute('aria-activedescendant');
    return;
  }
  activeIndex = Math.max(0, Math.min(activeIndex, flatResults.length - 1));
  const hit = flatResults[activeIndex];
  input?.setAttribute('aria-activedescendant', hit.id);
  hit.el.scrollIntoView?.({ block: 'nearest' });
}

function moveActive(delta) {
  if (!flatResults.length) return;
  activeIndex = Math.max(0, Math.min(activeIndex + delta, flatResults.length - 1));
  paintActive();
}

function showState(children, kind) {
  if (!stateEl) return;
  clear(stateEl);
  stateEl.hidden = false;
  stateEl.className = `site-search-state site-search-state-${kind}`;
  for (const child of [].concat(children)) {
    if (child) stateEl.appendChild(child);
  }
}

function hideState() {
  if (!stateEl) return;
  stateEl.hidden = true;
  clear(stateEl);
}

function addGroup(label, docs, total, truncated, needle) {
  const group = el('div', {
    className: 'site-search-group',
    role: 'group',
    'aria-label': label,
  });
  group.appendChild(el('div', { className: 'site-search-group-head' }, [
    el('span', { className: 'site-search-group-label', text: label }),
    el('span', {
      className: 'site-search-group-count',
      text: truncated ? `${docs.length}+ / ${total}` : String(total),
    }),
  ]));
  listEl.appendChild(group);
  docs.forEach((doc) => addItem(doc, group, needle));
}

function addItem(doc, group, needle) {
  const item = {
    ...doc,
    id: `site-search-opt-${flatResults.length}`,
  };
  flatResults.push(item);
  const active = item.id === `site-search-opt-${activeIndex}`;
  const children = [
    el('span', { className: 'site-search-item-main' }, [
      el('span', { className: 'site-search-item-title', text: doc.title }),
    ]),
  ];
  if (doc.kind === 'vocab') {
    if (doc.defZh || doc.defEn) {
      const def = el('div', { className: 'site-search-item-def' });
      appendDefinition(def, doc, needle);
      if (def.textContent || def.childNodes.length) children.push(def);
    }
    const parent = doc.parent ? `${doc.meta ? `${doc.meta} · ` : ''}${doc.parent}` : doc.meta;
    if (parent) children.push(el('div', { className: 'site-search-item-meta', text: parent }));
  } else if (doc.meta) {
    children.push(el('div', { className: 'site-search-item-meta', text: doc.meta }));
  }
  const node = el('a', {
    className: `site-search-item hit-target${active ? ' active' : ''}`,
    href: doc.href,
    id: item.id,
    role: 'option',
    'aria-selected': active ? 'true' : 'false',
    tabIndex: -1,
    onClick: (e) => {
      e.preventDefault();
      choose(doc);
    },
  }, children);
  item.el = node;
  group.appendChild(node);
}

function rerenderIfCurrent() {
  if (!open || !input) return;
  renderResults(input.value);
}

function renderResults(query) {
  if (!listEl) return;
  clear(listEl);
  flatResults = [];
  activeIndex = 0;
  hideState();
  if (moreEl) moreEl.hidden = true;
  const needle = normalized(query).trim();

  if (!needle) {
    showState([
      el('p', { className: 'site-search-hint-title', text: '输入关键词开始查找 · Type to start searching' }),
      el('p', {
        className: 'site-search-hint-text',
        text: '可搜索知识点标题、编号与重要词汇；例如「导数」或 “derivative”。 · Search topic titles, codes, and key vocabulary; for example “导数” or “derivative”.',
      }),
    ], 'hint');
    input?.removeAttribute('aria-activedescendant');
    return;
  }

  if (!indexCache) {
    showState([
      el('p', { className: 'site-search-state-text', text: '正在载入索引… · Loading search index…' }),
    ], 'loading');
    input?.removeAttribute('aria-activedescendant');
    loadIndex().then(rerenderIfCurrent);
    return;
  }

  const topics = ranked(indexCache.topics, needle);
  const vocabulary = ranked(indexCache.vocabulary, needle);
  if (!topics.length && !vocabulary.length) {
    showState([
      el('p', { className: 'site-search-state-text', text: '没有匹配结果 · No matching results' }),
    ], 'empty');
    input?.removeAttribute('aria-activedescendant');
    return;
  }

  const topicLimit = vocabulary.length ? MAX_TOPICS : MAX_RESULTS;
  const topicShown = topics.slice(0, topicLimit);
  const vocabShown = vocabulary.slice(0, Math.max(0, MAX_RESULTS - topicShown.length));
  const truncated = topics.length > topicShown.length || vocabulary.length > vocabShown.length;

  if (topics.length) addGroup('知识点 · Topics', topicShown, topics.length, topics.length > topicShown.length, needle);
  if (vocabulary.length) {
    addGroup('重要词汇 · Vocabulary', vocabShown, vocabulary.length, vocabulary.length > vocabShown.length, needle);
  }
  if (truncated && moreEl) moreEl.hidden = false;
  paintActive();
}

function choose(doc) {
  if (!doc) return;
  closeSearch();
  navigate(doc.href);
}

function trapFocus(event) {
  const items = [...panel.querySelectorAll(
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
  )].filter((node) => node.tabIndex >= 0 && node.getClientRects().length > 0);
  if (!items.length) return;
  const first = items[0];
  const last = items[items.length - 1];
  const active = document.activeElement;
  if (event.shiftKey) {
    if (active === first || !panel.contains(active)) {
      event.preventDefault();
      last.focus();
    }
  } else if (active === last || !panel.contains(active)) {
    event.preventDefault();
    first.focus();
  }
}

function ensureDom() {
  if (root) return;
  root = el('div', {
    className: 'site-search',
    id: 'site-search',
    hidden: true,
    role: 'dialog',
    'aria-modal': 'true',
    'aria-labelledby': 'site-search-title',
  });
  backdropEl = el('div', { className: 'site-search-backdrop', 'aria-hidden': 'true' });
  panel = el('div', { className: 'site-search-panel' });

  const closeButton = el('button', {
    type: 'button',
    className: 'site-search-close hit-target',
    text: '关闭 · Close',
    'aria-label': '关闭查找 · Close find',
    onClick: () => closeSearch(),
  });
  const head = el('div', { className: 'site-search-head' }, [
    el('div', { className: 'site-search-heading' }, [
      el('div', { className: 'site-search-title', id: 'site-search-title', text: '查找 · Find' }),
      el('div', { className: 'site-search-subtitle', text: '知识点与词汇 · Topics and vocabulary' }),
    ]),
    closeButton,
  ]);

  input = el('input', {
    type: 'search',
    className: 'site-search-input',
    id: 'site-search-input',
    placeholder: '查找知识点或词汇 · Find topics or vocabulary',
    autocomplete: 'off',
    spellcheck: 'false',
    role: 'combobox',
    'aria-label': '查找知识点或词汇 · Find topics or vocabulary',
    'aria-controls': 'site-search-results',
    'aria-autocomplete': 'list',
    'aria-expanded': 'true',
  });
  const field = el('div', { className: 'site-search-field' }, [
    el('span', { className: 'site-search-mark', 'aria-hidden': 'true' }),
    input,
    el('kbd', { className: 'site-search-kbd', 'aria-hidden': 'true', text: '/' }),
  ]);

  listEl = el('div', {
    className: 'site-search-list',
    id: 'site-search-results',
    role: 'listbox',
    'aria-label': '搜索结果 · Search results',
  });
  stateEl = el('div', {
    className: 'site-search-state',
    role: 'status',
    'aria-live': 'polite',
  });
  const body = el('div', { className: 'site-search-body' }, [stateEl, listEl]);

  moreEl = el('span', {
    className: 'site-search-more',
    hidden: true,
    text: `仅显示前 ${MAX_RESULTS} 条 · First ${MAX_RESULTS} shown`,
  });
  const foot = el('div', { className: 'site-search-foot' }, [
    el('span', { className: 'site-search-keys', text: '↑↓ 选择 · Select' }),
    el('span', { className: 'site-search-keys', text: 'Enter 打开 · Open' }),
    el('span', { className: 'site-search-keys', text: 'Esc 关闭 · Close' }),
    moreEl,
  ]);

  panel.append(head, field, body, foot);
  root.append(backdropEl, panel);
  document.body.appendChild(root);

  input.addEventListener('input', () => {
    activeIndex = 0;
    renderResults(input.value);
  });
  input.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      moveActive(1);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      moveActive(-1);
    } else if (event.key === 'Enter') {
      const hit = flatResults[activeIndex];
      if (hit) {
        event.preventDefault();
        choose(hit);
      }
    }
  });
  root.addEventListener('keydown', (event) => {
    if (event.key === 'Tab') {
      trapFocus(event);
      return;
    }
    if ((event.metaKey || event.ctrlKey) && String(event.key || '').toLowerCase() === 'k') return;
    if (event.target !== input) event.stopPropagation();
  });
  root.addEventListener('click', (event) => {
    if (event.target === root || event.target === backdropEl) closeSearch();
  });
}

export function openSearch() {
  if (isPaletteOpen()) return;
  ensureStyle();
  ensureTrigger();
  ensureDom();
  if (open) {
    input?.focus();
    input?.select();
    return;
  }
  lastFocus = document.activeElement;
  open = true;
  root.hidden = false;
  document.documentElement.classList.add('site-search-open');
  const app = document.getElementById('app');
  if (app) {
    try { app.inert = true; } catch (_) {}
    app.setAttribute('inert', '');
  }
  trigger?.setAttribute('aria-expanded', 'true');
  input.setAttribute('aria-expanded', 'true');
  input.value = '';
  activeIndex = 0;
  renderResults('');
  loadIndex().then(rerenderIfCurrent);
  requestAnimationFrame(() => {
    input?.focus();
    input?.select();
  });
}

export function closeSearch() {
  if (!root || !open) return;
  open = false;
  root.hidden = true;
  delete root.dataset.query;
  document.documentElement.classList.remove('site-search-open');
  const app = document.getElementById('app');
  if (app) {
    try { app.inert = false; } catch (_) {}
    app.removeAttribute('inert');
  }
  trigger?.setAttribute('aria-expanded', 'false');
  input?.setAttribute('aria-expanded', 'false');
  const restore = lastFocus
    && lastFocus !== document.body
    && typeof lastFocus.focus === 'function'
    && lastFocus.isConnected
    ? lastFocus
    : trigger;
  lastFocus = null;
  try { restore?.focus?.(); } catch (_) {}
}

export function isSearchOpen() {
  return open;
}

function isEditing(target) {
  if (!target) return false;
  const tag = target.tagName;
  if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return true;
  if (target.isContentEditable) return true;
  return !!(target.closest && target.closest('[contenteditable=""], [contenteditable="true"]'));
}

function onGlobalKeydown(event) {
  if (open) {
    if ((event.metaKey || event.ctrlKey) && String(event.key || '').toLowerCase() === 'k') {
      closeSearch();
      return;
    }
    if (event.key === 'Escape') {
      event.preventDefault();
      event.stopPropagation();
      closeSearch();
    }
    return;
  }
  if (event.key !== '/') return;
  if (event.metaKey || event.ctrlKey || event.altKey) return;
  if (isEditing(event.target)) return;
  if (isPaletteOpen()) return;
  event.preventDefault();
  closeMenus();
  openSearch();
}

export function initSearch() {
  ensureStyle();
  ensureTrigger();
  if (bound) return;
  bound = true;
  document.addEventListener('keydown', onGlobalKeydown, true);
  window.addEventListener('hashchange', () => {
    if (open) closeSearch();
  });
  const warm = () => { loadIndex(); };
  if (typeof window.requestIdleCallback === 'function') {
    window.requestIdleCallback(warm, { timeout: 2500 });
  } else {
    window.setTimeout(warm, 1200);
  }
}
