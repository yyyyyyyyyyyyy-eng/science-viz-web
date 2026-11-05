/**
 * Top-nav mega-menus + mobile drawer. Hover-intent delay; 44px hit targets.
 */
import { SUBJECTS, SUBJECT_ORDER, getSubjectTree } from '../modules/registry.js';

let openSubject = null;
let mobileOpen = false;
let hoverTimer = null;
let closeTimer = null;

function isTouch() {
  return window.matchMedia('(hover: none), (pointer: coarse)').matches || window.innerWidth <= 900;
}

export function closeMenus() {
  openSubject = null;
  clearTimeout(hoverTimer);
  clearTimeout(closeTimer);
  document.querySelectorAll('.nav-item.open').forEach((n) => {
    n.classList.remove('open');
    const btn = n.querySelector('.nav-trigger');
    if (btn) btn.setAttribute('aria-expanded', 'false');
  });
  setMobile(false);
}

export function isMenuOpen() {
  return !!openSubject || mobileOpen;
}

function setMobile(open) {
  mobileOpen = open;
  document.documentElement.classList.toggle('nav-mobile-open', open);
  const btn = document.getElementById('nav-mobile-toggle');
  if (btn) btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  const panel = document.getElementById('mobile-nav');
  if (panel) panel.hidden = !open;
}

function buildMega(subjectId) {
  const tree = getSubjectTree(subjectId);
  const panel = document.createElement('div');
  panel.className = 'mega-menu';
  panel.setAttribute('role', 'menu');
  panel.dataset.subject = subjectId;

  const inner = document.createElement('div');
  inner.className = 'mega-inner';

  for (const chapter of tree) {
    const modules = chapter.modules || [];
    const col = document.createElement('div');
    col.className = 'mega-col';
    if (chapter.layer === 'prep') col.classList.add('prep');
    const h = document.createElement('a');
    h.className = 'mega-chapter hit-target';
    h.href = `#/${subjectId}/${chapter.id}`;
    h.textContent = chapter.name;
    h.setAttribute('role', 'menuitem');
    col.appendChild(h);
    for (const m of modules.slice(0, 8)) {
      const a = document.createElement('a');
      a.className = 'mega-link hit-target';
      a.href = `#/m/${m.id}`;
      a.textContent = m.title;
      a.setAttribute('role', 'menuitem');
      col.appendChild(a);
    }
    inner.appendChild(col);
  }

  const foot = document.createElement('div');
  foot.className = 'mega-foot';
  const all = document.createElement('a');
  all.className = 'hit-target';
  all.href = `#/${subjectId}`;
  all.textContent = `全部${SUBJECTS[subjectId].name}`;
  const map = document.createElement('a');
  map.className = 'hit-target';
  map.href = `#/${subjectId}/map`;
  map.textContent = '知识图谱';
  foot.append(all, map);
  if (subjectId === 'math') {
    const f = document.createElement('a');
    f.className = 'hit-target';
    f.href = '#/math/formulas';
    f.textContent = '公式表';
    foot.appendChild(f);
  }
  if (subjectId === 'mech' || subjectId === 'em') {
    const f = document.createElement('a');
    f.className = 'hit-target';
    f.href = '#/physics/formulas';
    f.textContent = '公式表';
    foot.appendChild(f);
  }
  inner.appendChild(foot);
  panel.appendChild(inner);
  return panel;
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
}

function buildMobileNav() {
  const panel = document.getElementById('mobile-nav');
  if (!panel) return;
  panel.innerHTML = '';
  const home = document.createElement('a');
  home.className = 'mobile-link hit-target';
  home.href = '#/';
  home.textContent = '起始';
  panel.appendChild(home);
  for (const sid of SUBJECT_ORDER) {
    const h = document.createElement('a');
    h.className = 'mobile-link hit-target';
    h.href = `#/${sid}`;
    h.textContent = SUBJECTS[sid].name;
    panel.appendChild(h);
    const map = document.createElement('a');
    map.className = 'mobile-sub hit-target';
    map.href = `#/${sid}/map`;
    map.textContent = `${SUBJECTS[sid].name} · 图谱`;
    panel.appendChild(map);
  }
  const paths = document.createElement('a');
  paths.className = 'mobile-link hit-target';
  paths.href = '#/paths';
  paths.textContent = '路径';
  panel.appendChild(paths);
  const all = document.createElement('a');
  all.className = 'mobile-link hit-target';
  all.href = '#/all';
  all.textContent = '索引';
  panel.appendChild(all);
}

export function initNav() {
  const root = document.getElementById('subject-nav');
  if (!root) return;
  root.innerHTML = '';

  const start = document.createElement('a');
  start.className = 'nav-link hit-target';
  start.href = '#/';
  start.textContent = '起始';
  start.dataset.subject = 'start';
  root.appendChild(start);

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
    item.appendChild(trigger);
    item.appendChild(buildMega(sid));
    root.appendChild(item);

    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      if (isTouch()) {
        if (item.classList.contains('open')) closeMenus();
        else openItem(item);
      } else {
        location.hash = `#/${sid}`;
      }
    });

    item.addEventListener('pointerenter', () => {
      if (isTouch()) return;
      clearTimeout(closeTimer);
      hoverTimer = setTimeout(() => openItem(item), 120);
    });
    item.addEventListener('pointerleave', () => {
      if (isTouch()) return;
      clearTimeout(hoverTimer);
      closeTimer = setTimeout(() => {
        item.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
        if (openSubject === sid) openSubject = null;
      }, 280);
    });
  }

  const paths = document.createElement('a');
  paths.className = 'nav-link hit-target';
  paths.href = '#/paths';
  paths.textContent = '路径';
  paths.dataset.subject = 'paths';
  root.appendChild(paths);

  buildMobileNav();
  document.getElementById('nav-mobile-toggle')?.addEventListener('click', () => setMobile(!mobileOpen));
  document.getElementById('mobile-nav')?.addEventListener('click', (e) => {
    if (e.target.closest('a')) setMobile(false);
  });
}

export function setActiveNav(subject) {
  document.querySelectorAll('.nav-link, .nav-trigger').forEach((a) => {
    const s = a.getAttribute('data-subject');
    a.classList.toggle('active', s === subject || (subject === 'all' && s === 'start'));
  });
}

export { closeMenus as closeAll };
