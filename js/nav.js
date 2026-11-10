/**
 * One navigation system: desktop hover/focus mega menus + a full-height
 * mobile drawer. Every trigger is a real 44px target; Escape/route changes
 * close both. Touch never depends on hover.
 */
import { SUBJECTS, SUBJECT_ORDER, getSubjectTree } from '../modules/registry.js';

let openSubject = null;
let mobileOpen = false;
let hoverTimer = null;
let closeTimer = null;
let resizeBound = false;

function isTouch() {
  return window.matchMedia('(hover: none), (pointer: coarse)').matches || window.innerWidth <= 900;
}

function setMainInert(on) {
  const main = document.getElementById('main');
  if (!main) return;
  try { main.inert = on; } catch (_) {}
  if (on) main.setAttribute('inert', '');
  else main.removeAttribute('inert');
}

function setFooterInert(on) {
  const footer = document.querySelector('.site-footer');
  if (!footer) return;
  try { footer.inert = on; } catch (_) {}
  if (on) footer.setAttribute('inert', '');
  else footer.removeAttribute('inert');
}

function syncMobileSubject() {
  const panel = document.getElementById('mobile-nav');
  if (!panel) return;
  const here = location.hash || '#/';
  panel.querySelectorAll('details.mobile-subject').forEach((details) => {
    const sid = details.dataset.subject;
    details.open = here === `#/${sid}` || here.startsWith(`#/${sid}/`);
  });
}

function trapDrawerTab(e) {
  if (e.key !== 'Tab') return;
  const panel = document.getElementById('mobile-nav');
  if (!panel || panel.hidden) return;
  const focusables = [...panel.querySelectorAll(
    'a[href], button:not([disabled]), summary, input:not([disabled]), [tabindex]:not([tabindex="-1"])',
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
}

function setMobile(open, { focus = true } = {}) {
  mobileOpen = open;
  document.documentElement.classList.toggle('nav-mobile-open', open);
  const btn = document.getElementById('nav-mobile-toggle');
  if (btn) {
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? '关闭菜单 · Close menu' : '打开菜单');
  }
  const panel = document.getElementById('mobile-nav');
  if (panel) panel.hidden = !open;
  if (open) syncMobileSubject();
  setMainInert(open);
  setFooterInert(open);
  if (open && focus) {
    requestAnimationFrame(() => {
      panel?.querySelector('.mobile-close, a, summary')?.focus?.();
    });
  }
  if (!open && focus) {
    btn?.focus?.();
  }
}

export function closeMenus({ focus = false } = {}) {
  const trigger = openSubject
    ? document.querySelector(`.nav-item[data-subject="${openSubject}"] .nav-trigger`)
    : null;
  openSubject = null;
  clearTimeout(hoverTimer);
  clearTimeout(closeTimer);
  document.querySelectorAll('.nav-item.open').forEach((n) => {
    n.classList.remove('open');
    n.querySelector('.nav-trigger')?.setAttribute('aria-expanded', 'false');
  });
  if (mobileOpen) setMobile(false, { focus });
  else if (focus && trigger) trigger.focus();
}

export function isMenuOpen() {
  return !!openSubject || mobileOpen;
}

function chapterCode(ch) {
  return ch.unitCode || String(ch.id || '').replace(/^.*-/, '').toUpperCase();
}

function chapterTitle(ch) {
  return ch.titleZh || String(ch.name || '').replace(/^Unit\s+\S+\s*·\s*/, '');
}

function buildMega(subjectId) {
  const tree = getSubjectTree(subjectId);
  const sub = SUBJECTS[subjectId];
  const panel = document.createElement('div');
  panel.className = 'mega-menu';
  panel.id = `mega-${subjectId}`;
  panel.setAttribute('role', 'group');
  panel.setAttribute('aria-label', `${sub.name}导航`);
  panel.dataset.subject = subjectId;

  const inner = document.createElement('div');
  inner.className = 'mega-inner';

  const intro = document.createElement('div');
  intro.className = 'mega-intro';
  const kicker = document.createElement('p');
  kicker.className = 'mega-kicker';
  kicker.textContent = sub.en || '';
  const all = document.createElement('a');
  all.className = 'mega-all hit-target';
  all.href = `#/${subjectId}`;
  all.textContent = `全部${sub.name}`;
  intro.append(kicker, all);

  const actions = document.createElement('div');
  actions.className = 'mega-actions';
  const map = document.createElement('a');
  map.className = 'hit-target';
  map.href = `#/${subjectId}/map`;
  map.textContent = '知识图谱';
  actions.appendChild(map);
  if (subjectId === 'math' || subjectId === 'mech' || subjectId === 'em') {
    const f = document.createElement('a');
    f.className = 'hit-target';
    f.href = `#/${subjectId}/formulas`;
    f.textContent = '公式表';
    actions.appendChild(f);
  }
  const pp = document.createElement('a');
  pp.className = 'hit-target';
  pp.href = `#/pastpapers/${subjectId}`;
  pp.textContent = '历年真题';
  actions.appendChild(pp);
  intro.appendChild(actions);

  const chapters = document.createElement('div');
  chapters.className = 'mega-chapters';
  tree.forEach((ch) => {
    const a = document.createElement('a');
    a.className = 'mega-chapter hit-target';
    a.href = `#/${subjectId}/${ch.id}`;
    a.setAttribute('role', 'menuitem');
    const code = document.createElement('span');
    code.className = 'mega-code';
    code.textContent = chapterCode(ch);
    const name = document.createElement('span');
    name.className = 'mega-name';
    name.textContent = chapterTitle(ch);
    const meta = document.createElement('span');
    meta.className = 'mega-meta';
    meta.textContent = `${(ch.topics || []).length} 点`;
    a.append(code, name, meta);
    chapters.appendChild(a);
  });

  inner.append(intro, chapters);
  panel.appendChild(inner);
  return panel;
}

function positionMega(item) {
  const panel = item.querySelector('.mega-menu');
  if (!panel) return;
  const width = Math.min(780, Math.max(320, window.innerWidth - 32));
  panel.style.width = `${width}px`;
  const rect = item.getBoundingClientRect();
  const desired = rect.left + rect.width / 2 - width / 2;
  const left = Math.min(Math.max(16, desired), window.innerWidth - width - 16);
  panel.style.left = `${left - rect.left}px`;
}

function openItem(item) {
  document.querySelectorAll('.nav-item.open').forEach((n) => {
    if (n !== item) {
      n.classList.remove('open');
      n.querySelector('.nav-trigger')?.setAttribute('aria-expanded', 'false');
    }
  });
  openSubject = item.dataset.subject;
  item.classList.add('open');
  item.querySelector('.nav-trigger')?.setAttribute('aria-expanded', 'true');
  positionMega(item);
}

function closeItem(item) {
  item.classList.remove('open');
  item.querySelector('.nav-trigger')?.setAttribute('aria-expanded', 'false');
  if (openSubject === item.dataset.subject) openSubject = null;
}

function buildMobileNav() {
  const panel = document.getElementById('mobile-nav');
  if (!panel) return;
  panel.innerHTML = '';
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-modal', 'true');
  panel.setAttribute('aria-labelledby', 'mobile-nav-title');

  const head = document.createElement('div');
  head.className = 'mobile-nav-head';
  const title = document.createElement('span');
  title.className = 'mobile-nav-title';
  title.id = 'mobile-nav-title';
  title.textContent = '目录 · Contents';
  const close = document.createElement('button');
  close.type = 'button';
  close.className = 'mobile-close hit-target';
  close.textContent = '关闭';
  close.addEventListener('click', () => setMobile(false));
  head.append(title, close);
  panel.appendChild(head);

  const primary = document.createElement('nav');
  primary.className = 'mobile-primary';
  primary.setAttribute('aria-label', '主导航');
  [
    ['#/', '首页'],
    ['#/all', '全部模块'],
    ['#/paths', '学习路径'],
    ['#/pastpapers', '历年真题'],
  ].forEach(([href, label]) => {
    const a = document.createElement('a');
    a.className = 'mobile-primary-link hit-target';
    a.href = href;
    a.textContent = label;
    primary.appendChild(a);
  });
  panel.appendChild(primary);

  const here = location.hash || '#/';
  for (const sid of SUBJECT_ORDER) {
    const sub = SUBJECTS[sid];
    const details = document.createElement('details');
    details.className = 'mobile-subject';
    details.dataset.subject = sid;
    details.open = here === `#/${sid}` || here.startsWith(`#/${sid}/`);
    const summary = document.createElement('summary');
    summary.className = 'hit-target';
    const name = document.createElement('span');
    name.textContent = sub.name;
    const count = document.createElement('span');
    count.className = 'mobile-subject-count';
    count.textContent = `${(getSubjectTree(sid) || []).length} 单元`;
    summary.append(name, count);
    details.appendChild(summary);

    const links = document.createElement('div');
    links.className = 'mobile-subject-links';
    const enter = document.createElement('a');
    enter.className = 'mobile-subject-link hit-target';
    enter.href = `#/${sid}`;
    enter.textContent = `进入${sub.name}`;
    links.appendChild(enter);
    const map = document.createElement('a');
    map.className = 'mobile-subject-link hit-target';
    map.href = `#/${sid}/map`;
    map.textContent = '知识图谱';
    links.appendChild(map);
    if (sid === 'math' || sid === 'mech' || sid === 'em') {
      const f = document.createElement('a');
      f.className = 'mobile-subject-link hit-target';
      f.href = `#/${sid}/formulas`;
      f.textContent = '公式表';
      links.appendChild(f);
    }
    details.appendChild(links);

    const chapters = document.createElement('div');
    chapters.className = 'mobile-chapters';
    getSubjectTree(sid).forEach((ch) => {
      const a = document.createElement('a');
      a.className = 'mobile-chapter hit-target';
      a.href = `#/${sid}/${ch.id}`;
      const code = document.createElement('span');
      code.className = 'mobile-chapter-code';
      code.textContent = chapterCode(ch);
      const label = document.createElement('span');
      label.className = 'mobile-chapter-name';
      label.textContent = chapterTitle(ch);
      a.append(code, label);
      chapters.appendChild(a);
    });
    details.appendChild(chapters);
    panel.appendChild(details);
  }

  const foot = document.createElement('div');
  foot.className = 'mobile-nav-foot';
  const credits = document.createElement('a');
  credits.className = 'hit-target';
  credits.href = '#/credits';
  credits.textContent = '来源与许可';
  foot.appendChild(credits);
  panel.appendChild(foot);
}

export function initNav() {
  const root = document.getElementById('subject-nav');
  if (!root) return;
  root.innerHTML = '';

  const home = document.createElement('a');
  home.className = 'nav-link hit-target';
  home.href = '#/';
  home.textContent = '首页';
  home.dataset.subject = 'start';
  root.appendChild(home);

  for (const sid of SUBJECT_ORDER) {
    const item = document.createElement('div');
    item.className = 'nav-item';
    item.dataset.subject = sid;
    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'nav-trigger hit-target';
    trigger.textContent = SUBJECTS[sid].name;
    trigger.dataset.subject = sid;
    trigger.setAttribute('aria-haspopup', 'true');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.setAttribute('aria-controls', `mega-${sid}`);
    item.appendChild(trigger);
    item.appendChild(buildMega(sid));
    root.appendChild(item);

    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      if (item.classList.contains('open')) closeItem(item);
      else openItem(item);
    });

    item.addEventListener('pointerenter', () => {
      clearTimeout(closeTimer);
      if (isTouch()) return;
      hoverTimer = setTimeout(() => openItem(item), 110);
    });
    item.addEventListener('pointerleave', () => {
      clearTimeout(hoverTimer);
      if (isTouch()) return;
      closeTimer = setTimeout(() => closeItem(item), 260);
    });
    item.addEventListener('focusout', (e) => {
      if (!item.contains(e.relatedTarget)) closeItem(item);
    });
  }

  const paths = document.createElement('a');
  paths.className = 'nav-link hit-target';
  paths.href = '#/paths';
  paths.textContent = '路径';
  paths.dataset.subject = 'paths';
  root.appendChild(paths);

  buildMobileNav();
  document.getElementById('nav-mobile-toggle')?.addEventListener('click', () => {
    setMobile(!mobileOpen);
  });
  document.getElementById('mobile-nav')?.addEventListener('click', (e) => {
    if (e.target.closest('a') && mobileOpen) setMobile(false, { focus: false });
  });
  document.getElementById('mobile-nav')?.addEventListener('keydown', trapDrawerTab);

  if (!resizeBound) {
    resizeBound = true;
    window.addEventListener('resize', () => {
      if (window.innerWidth > 900 && mobileOpen) setMobile(false, { focus: false });
      if (openSubject) {
        const item = document.querySelector(`.nav-item[data-subject="${openSubject}"]`);
        if (item) positionMega(item);
      }
    });
    document.addEventListener('pointerdown', (e) => {
      if (openSubject && !e.target.closest('.site-header')) closeMenus();
    });
  }
}

export function setActiveNav(subject) {
  document.querySelectorAll('.nav-link, .nav-trigger').forEach((a) => {
    const s = a.getAttribute('data-subject');
    a.classList.toggle('active', s === subject);
    if (s === subject) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });
  if (['bio', 'math', 'mech', 'em'].includes(subject)) {
    document.documentElement.dataset.subject = subject;
  } else {
    delete document.documentElement.dataset.subject;
  }
}

export { closeMenus as closeAll };
