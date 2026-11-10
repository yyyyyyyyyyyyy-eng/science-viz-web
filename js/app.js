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
import { initSearch } from './search.js';
import {
  markVisited,
  markCompleted,
  getLastModuleId,
  setLastModuleId,
} from './progress.js';
import { SUBJECT_LABEL } from './ui-shared.js';

initTheme();

const main = document.getElementById('main');
const searchTrigger = document.getElementById('search-trigger');
const themeToggle = document.getElementById('theme-toggle');

let pageSeq = 0;
let currentDispose = null;
let pageDispose = null;
let activeModuleId = null;
let currentPrevNext = { prev: null, next: null };
let completeTimer = null;

initNav();
initSearch();
themeToggle?.addEventListener('click', () => toggleTheme());
searchTrigger?.addEventListener('click', () => {
  closeMenus();
  openPalette();
});
searchTrigger?.setAttribute('aria-expanded', 'false');
const searchKbd = document.querySelector('.search-kbd');
if (searchKbd && /Mac|iPhone|iPad/.test(navigator.platform || '')) searchKbd.textContent = '⌘K';

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

function scrollTop() {
  try {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  } catch (_) {
    window.scrollTo(0, 0);
  }
}

function setRouteChrome(name) {
  document.documentElement.dataset.route = name;
}

function beginRoute(name) {
  pageSeq += 1;
  disposeCurrent();
  closeMenus();
  closePalette();
  if (document.activeElement && document.activeElement !== document.body) {
    try { document.activeElement.blur(); } catch (_) {}
  }
  setRouteChrome(name);
  scrollTop();
  return pageSeq;
}

function mountDispose(handle) {
  pageDispose = typeof handle === 'function' ? handle : handle?.destroy || null;
}

function showStart() {
  const token = beginRoute('start');
  if (token !== pageSeq) return;
  setActiveNav('start');
  renderStart(main);
}

function showCatalog() {
  const token = beginRoute('catalog');
  if (token !== pageSeq) return;
  setActiveNav('all');
  renderCatalog(main, { modules: searchModules('', 'all') });
  document.title = '全部模块 · 科学可视化';
}

function showSubject(subject) {
  const token = beginRoute('subject');
  if (token !== pageSeq) return;
  setActiveNav(subject);
  renderSubjectLanding(main, subject);
}

function showChapter(subject, chapterId) {
  const token = beginRoute('chapter');
  if (token !== pageSeq) return;
  setActiveNav(subject);
  renderChapterPage(main, subject, chapterId);
}

function showPaths() {
  const token = beginRoute('paths');
  if (token !== pageSeq) return;
  setActiveNav('paths');
  renderPaths(main);
}

async function showTopic(subject, chapterId, code) {
  const token = beginRoute('topic');
  setActiveNav(subject);
  const handle = await renderTopicPage(main, {
    subject,
    chapterId,
    code,
    isCurrent: () => token === pageSeq,
  });
  if (token !== pageSeq) return;
  mountDispose(handle);
}

async function showMap(subject) {
  const token = beginRoute('map');
  setActiveNav(subject);
  const handle = await renderMindMap(main, subject, { isCurrent: () => token === pageSeq });
  if (token !== pageSeq) return;
  mountDispose(handle);
  document.title = `知识图谱 · ${SUBJECT_LABEL[subject] || subject} · 科学可视化`;
}

async function showModule(id) {
  const mod = getModule(id);
  if (!mod) { showStart(); return; }

  const token = beginRoute('module');
  if (token !== pageSeq) return;
  activeModuleId = id;
  markVisited(id);
  setLastModuleId(id);
  completeTimer = setTimeout(() => {
    if (activeModuleId === id) markCompleted(id);
  }, 4000);

  setActiveNav(mod.subject);

  const shell = renderModuleShell(main, mod);
  const { viz, controls, prev, next } = shell;
  currentPrevNext = { prev, next };
  document.title = `${mod.title} · 科学可视化`;

  try {
    const imported = await mod.load();
    if (activeModuleId !== id || token !== pageSeq) return;
    if (typeof imported.create !== 'function') throw new Error(`模块 ${id} 未导出 create()`);
    currentDispose = imported.create(viz, controls, { module: mod }) || null;
    ensureReset(controls);
  } catch (err) {
    if (token !== pageSeq) return;
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
  const token = beginRoute('formulas');
  if (kind === 'math') {
    setActiveNav('math');
    const { MATH_FORMULA_GROUPS } = await import('../data/math/formulas.js');
    if (token !== pageSeq) return;
    const handle = renderFormulasPage(main, {
      subject: 'math',
      groups: MATH_FORMULA_GROUPS,
      title: '微积分公式表',
      subtitle: '导数 · 积分 · 级数 · 参数/极坐标',
    });
    mountDispose(handle);
    document.title = '微积分公式表 · 科学可视化';
  } else {
    setActiveNav(kind === 'em' ? 'em' : 'mech');
    const { PHYSICS_FORMULA_GROUPS } = await import('../data/physics/formulas.js');
    if (token !== pageSeq) return;
    const groups = kind === 'mech'
      ? PHYSICS_FORMULA_GROUPS.filter((g) => g.id === 'const' || g.id.startsWith('mech-'))
      : kind === 'em'
        ? PHYSICS_FORMULA_GROUPS.filter((g) => g.id === 'const' || g.id.startsWith('em-'))
        : PHYSICS_FORMULA_GROUPS;
    const subtitle = kind === 'mech'
      ? '力学 · Mechanics'
      : kind === 'em'
        ? '电磁 · E&M'
        : '力学与电磁（College Board 结构）';
    const handle = renderFormulasPage(main, {
      subject: kind,
      groups,
      title: 'AP Physics C 公式表',
      subtitle,
    });
    mountDispose(handle);
    document.title = `${kind === 'em' ? '电磁' : kind === 'mech' ? '力学' : '物理'}公式表 · 科学可视化`;
  }
}

async function showLab() {
  const token = beginRoute('lab');
  setActiveNav('mech');
  const { renderLab } = await import('../modules/physics/lab/index.js');
  if (token !== pageSeq) return;
  const handle = renderLab(main, { isCurrent: () => token === pageSeq });
  if (token !== pageSeq) {
    if (handle && typeof handle.destroy === 'function') handle.destroy();
    return;
  }
  mountDispose(handle);
  document.title = '物理实验室 · Physics Lab · 科学可视化';
}

async function showPractice(subject, chapterId) {
  const token = beginRoute('practice');
  setActiveNav(subject);
  const bank = await loadPracticeBank(subject, chapterId);
  if (token !== pageSeq) return;
  const unit = getChapter(subject, chapterId) || { id: chapterId, titleZh: chapterId, name: chapterId };
  if (!bank) {
    clear(main);
    main.appendChild(
      Object.assign(document.createElement('p'), {
        className: 'empty-state',
        textContent: '练习尚未就绪。',
      }),
    );
    document.title = '练习 · 科学可视化';
    return;
  }
  const handle = renderPracticeUnit(main, {
    subject,
    unit: { ...unit, titleZh: unit.titleZh || unit.name },
    bank,
  });
  mountDispose(handle);
  document.title = `练习 · ${unit.titleZh || unit.name} · 科学可视化`;
}

onRoute(async (route) => {
  if (route.name === 'module') { await showModule(route.id); return; }
  if (route.name === 'formulas') { await showFormulas(route.kind); return; }
  if (route.name === 'lab') { await showLab(); return; }
  if (route.name === 'practice') { await showPractice(route.subject, route.chapterId); return; }
  if (route.name === 'credits') {
    const token = beginRoute('credits');
    setActiveNav('');
    await renderCredits(main, { isCurrent: () => token === pageSeq });
    return;
  }
  if (route.name === 'pastpapers') {
    const token = beginRoute('pastpapers');
    setActiveNav(route.subject || '');
    await renderPastPapers(main, {
      subject: route.subject,
      year: route.year,
      isCurrent: () => token === pageSeq,
    });
    return;
  }
  if (route.name === 'topic') { await showTopic(route.subject, route.chapterId, route.code); return; }
  if (route.name === 'map') { await showMap(route.subject); return; }
  if (route.name === 'subject') { showSubject(route.subject); return; }
  if (route.name === 'chapter') { showChapter(route.subject, route.chapterId); return; }
  if (route.name === 'catalog') { showCatalog(); return; }
  if (route.name === 'paths') { showPaths(); return; }
  showStart();
});

document.addEventListener('keydown', (e) => {
  const tag = (e.target && e.target.tagName) || '';
  const editing = tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || e.target?.isContentEditable;

  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    if (isPaletteOpen()) closePalette();
    else {
      closeMenus();
      openPalette();
    }
    return;
  }
  if (e.key === 'Escape') {
    if (isPaletteOpen()) { closePalette(); return; }
    if (isMenuOpen()) { closeMenus({ focus: true }); return; }
  }
  if (editing) return;
  if (activeModuleId && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    e.preventDefault();
    if (e.key === 'ArrowLeft' && currentPrevNext.prev) navigate(`#/m/${currentPrevNext.prev.id}`);
    if (e.key === 'ArrowRight' && currentPrevNext.next) navigate(`#/m/${currentPrevNext.next.id}`);
  }
});

window.__SCIENCE_VIZ__ = {
  MODULES, PATHS, SUBJECT_ORDER, getModule, getOrderedModules, getPrevNext,
  getLastModule: getLastModuleId, openPalette, closePalette, closeMenus, markCompleted,
};
