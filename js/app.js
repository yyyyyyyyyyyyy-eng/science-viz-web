import {
  MODULES,
  searchModules,
  getModule,
  getOrderedModules,
  getPrevNext,
  PATHS,
  SUBJECT_ORDER,
} from '../modules/registry.js';
import { onRoute, navigate } from './router.js';
import { renderModuleShell, clear } from './ui.js';
import {
  renderStart,
  renderCatalog,
  renderSubjectLanding,
  renderChapterPage,
  renderPaths,
  renderCredits,
  renderPastPapers,
} from './pages.js';
import { renderTopicPage } from './topic-page.js';
import { renderMindMap } from './mindmap.js';
import { renderFormulasPage } from './formulas-page.js';
import { renderPracticeUnit, loadPracticeBank } from './practice.js';
import { getChapter } from '../modules/registry.js';
import { initTheme, toggleTheme } from './theme.js';
import { initNav, setActiveNav, closeMenus, isMenuOpen } from './nav.js';
import { openPalette, closePalette, togglePalette, isPaletteOpen } from './palette.js';
import {
  markVisited,
  markCompleted,
  getLastModuleId,
  setLastModuleId,
} from './progress.js';
import { SUBJECT_LABEL } from './ui-shared.js';

initTheme();

const main = document.getElementById('main');
const searchInput = document.getElementById('search-input');
const themeToggle = document.getElementById('theme-toggle');

let currentSubject = 'all';
let currentDispose = null;
let pageDispose = null;
let activeModuleId = null;
let currentPrevNext = { prev: null, next: null };
let completeTimer = null;

initNav();
themeToggle?.addEventListener('click', () => toggleTheme());

function disposeCurrent() {
  if (completeTimer) {
    clearTimeout(completeTimer);
    completeTimer = null;
  }
  if (typeof currentDispose === 'function') {
    try { currentDispose(); } catch (err) { console.error('dispose error', err); }
  }
  currentDispose = null;
  activeModuleId = null;
  currentPrevNext = { prev: null, next: null };
  if (typeof pageDispose === 'function') {
    try { pageDispose(); } catch (_) {}
  }
  pageDispose = null;
}

function showSearch(show) {
  const wrap = searchInput?.closest('.search-wrap');
  if (wrap) wrap.style.display = show ? '' : 'none';
}

function showStart() {
  disposeCurrent();
  currentSubject = 'all';
  setActiveNav('start');
  renderStart(main);
  showSearch(true);
  document.title = '科学可视化平台';
}

function showCatalog() {
  disposeCurrent();
  currentSubject = 'all';
  setActiveNav('all');
  const q = searchInput?.value || '';
  renderCatalog(main, { modules: searchModules(q, 'all'), query: q });
  showSearch(true);
  document.title = '全部模块 · 科学可视化';
}

function showSubject(subject) {
  disposeCurrent();
  currentSubject = subject;
  setActiveNav(subject);
  renderSubjectLanding(main, subject);
  showSearch(true);
  document.title = `${SUBJECT_LABEL[subject] || subject} · 科学可视化`;
}

function showChapter(subject, chapterId) {
  disposeCurrent();
  currentSubject = subject;
  setActiveNav(subject);
  renderChapterPage(main, subject, chapterId);
  showSearch(true);
  document.title = `章节 · 科学可视化`;
}

function showPaths() {
  disposeCurrent();
  currentSubject = 'all';
  setActiveNav('paths');
  renderPaths(main);
  showSearch(true);
  document.title = '学习路径 · 科学可视化';
}

async function showTopic(subject, chapterId, code) {
  disposeCurrent();
  currentSubject = subject;
  setActiveNav(subject);
  showSearch(false);
  await renderTopicPage(main, { subject, chapterId, code });
  document.title = `${code} · 科学可视化`;
}

async function showMap(subject) {
  disposeCurrent();
  currentSubject = subject;
  setActiveNav(subject);
  showSearch(false);
  const handle = await renderMindMap(main, subject);
  pageDispose = handle?.destroy || null;
  document.title = `知识图谱 · ${SUBJECT_LABEL[subject] || subject}`;
}

async function showModule(id) {
  const mod = getModule(id);
  if (!mod) { showStart(); return; }

  disposeCurrent();
  activeModuleId = id;
  markVisited(id);
  setLastModuleId(id);
  completeTimer = setTimeout(() => {
    if (activeModuleId === id) markCompleted(id);
  }, 4000);

  setActiveNav(mod.subject);
  showSearch(false);

  const shell = renderModuleShell(main, mod);
  const { viz, controls, prev, next } = shell;
  currentPrevNext = { prev, next };
  document.title = `${mod.title} · 科学可视化`;

  try {
    const imported = await mod.load();
    if (activeModuleId !== id) return;
    if (typeof imported.create !== 'function') throw new Error(`模块 ${id} 未导出 create()`);
    currentDispose = imported.create(viz, controls, { module: mod }) || null;
    ensureReset(controls);
  } catch (err) {
    console.error(err);
    clear(viz);
    viz.appendChild(Object.assign(document.createElement('p'), {
      textContent: `模块加载失败：${err.message || err}`,
      style: 'color:var(--danger);padding:1rem;',
    }));
  }
}

function ensureReset(controls) {
  const existing = [...controls.querySelectorAll('button')].find((b) =>
    /重置|复位|Reset/i.test(b.textContent || ''),
  );
  if (existing) { existing.classList.add('btn-reset', 'hit-target'); return; }
  const row = document.createElement('div');
  row.className = 'btn-row';
  const b = document.createElement('button');
  b.type = 'button';
  b.className = 'btn btn-reset hit-target';
  b.textContent = '重置';
  b.addEventListener('click', () => { if (activeModuleId) navigate(`#/m/${activeModuleId}`); });
  row.appendChild(b);
  controls.appendChild(row);
}


async function showFormulas(kind) {
  disposeCurrent();
  showSearch(false);
  if (kind === 'math') {
    setActiveNav('math');
    const { MATH_FORMULA_GROUPS } = await import('../data/math/formulas.js');
    renderFormulasPage(main, {
      subject: 'math',
      groups: MATH_FORMULA_GROUPS,
      title: '微积分公式表',
      subtitle: '导数 · 积分 · 级数 · 参数/极坐标',
    });
    document.title = '微积分公式表 · 科学可视化';
  } else {
    setActiveNav(kind === 'em' ? 'em' : 'mech');
    const { PHYSICS_FORMULA_GROUPS } = await import('../data/physics/formulas.js');
    renderFormulasPage(main, {
      subject: 'physics',
      groups: PHYSICS_FORMULA_GROUPS,
      title: 'AP Physics C 公式表',
      subtitle: '力学与电磁（College Board 结构）',
    });
    document.title = '物理公式表 · 科学可视化';
  }
}

async function showPractice(subject, chapterId) {
  disposeCurrent();
  currentSubject = subject;
  setActiveNav(subject);
  showSearch(false);
  const bank = await loadPracticeBank(subject, chapterId);
  const unit = getChapter(subject, chapterId) || { id: chapterId, titleZh: chapterId, name: chapterId };
  if (!bank) {
    clear(main);
    main.appendChild(Object.assign(document.createElement('p'), { textContent: '练习尚未就绪' }));
    return;
  }
  renderPracticeUnit(main, { subject, unit: { ...unit, titleZh: unit.titleZh || unit.name }, bank });
  document.title = `练习 · 科学可视化`;
}

onRoute((route) => {
  closeMenus();
  closePalette();
  if (document.activeElement && document.activeElement !== document.body) {
    try { document.activeElement.blur(); } catch (_) {}
  }
  if (route.name === 'module') showModule(route.id);
  else if (route.name === 'formulas') showFormulas(route.kind);
  else if (route.name === 'practice') showPractice(route.subject, route.chapterId);
  else if (route.name === 'credits') renderCredits(main);
  else if (route.name === 'pastpapers') renderPastPapers(main, { subject: route.subject, year: route.year });
  else if (route.name === 'topic') showTopic(route.subject, route.chapterId, route.code);
  else if (route.name === 'map') showMap(route.subject);
  else if (route.name === 'subject') showSubject(route.subject);
  else if (route.name === 'chapter') showChapter(route.subject, route.chapterId);
  else if (route.name === 'catalog') showCatalog();
  else if (route.name === 'paths') showPaths();
  else showStart();
});

searchInput?.addEventListener('input', () => {
  if (activeModuleId) return;
  const hash = location.hash || '#/';
  if (hash.startsWith('#/all')) showCatalog();
});

document.addEventListener('keydown', (e) => {
  const tag = (e.target && e.target.tagName) || '';
  const editing = tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || e.target?.isContentEditable;

  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    togglePalette();
    return;
  }
  if (e.key === 'Escape') {
    if (isPaletteOpen()) { closePalette(); return; }
    if (isMenuOpen()) { closeMenus(); return; }
  }
  if (editing) return;
  if (e.key === '/' && !e.metaKey && !e.ctrlKey && !e.altKey) {
    e.preventDefault();
    if (searchInput && searchInput.offsetParent !== null) {
      searchInput.focus(); searchInput.select();
    } else openPalette();
    return;
  }
  if (activeModuleId && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    e.preventDefault();
    if (e.key === 'ArrowLeft' && currentPrevNext.prev) location.hash = `#/m/${currentPrevNext.prev.id}`;
    if (e.key === 'ArrowRight' && currentPrevNext.next) location.hash = `#/m/${currentPrevNext.next.id}`;
  }
});

window.__SCIENCE_VIZ__ = {
  MODULES, PATHS, SUBJECT_ORDER, getModule, getOrderedModules, getPrevNext,
  getLastModule: getLastModuleId, openPalette, closePalette, closeMenus, markCompleted,
};
