import { el, clear, breadcrumb, SUBJECT_LABEL } from './ui-shared.js';
import { getChapter, getSubjectTree } from '../modules/registry.js';
import { markVisited, markCompleted, isCompleted, isVisited } from './progress.js';
import { loadCourseData } from '../data/courses.js';
import { pastPapersForTopic } from '../data/shared/pastpapers.js';
import { mountTopicExamFigures, enhanceExamFigures } from '../modules/physics/exam-figures.js';
import { renderFigures } from '../data/math/figlib.js';

const STYLE_ID = 'topic-extras-style';
// Version query matches the shared cache-bust token in index.html.
const STYLE_HREF = 'css/topic-extras.css?v=20261120a';

function ensureStyle() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const link = document.createElement('link');
  link.id = STYLE_ID;
  link.rel = 'stylesheet';
  link.href = STYLE_HREF;
  document.head.appendChild(link);
}

function topicId(subject, chapterId, code) {
  return `topic:${subject}/${chapterId}/${code}`;
}

function renderKatex(tex, displayMode = true) {
  const span = el('span', { className: displayMode ? 'tex' : 'tex-inline' });
  if (window.katex) {
    try {
      window.katex.render(tex, span, { throwOnError: false, displayMode });
      return span;
    } catch (_) {}
  }
  span.textContent = tex;
  return span;
}

/** Fill a container with text that may contain \(...\) and \[...\] KaTeX. */
function appendMathText(parent, text, className) {
  const wrap = el('p', className ? { className } : {});
  if (text == null || text === '') {
    parent.appendChild(wrap);
    return wrap;
  }
  const s = String(text);
  const re = /(\\\[[\s\S]+?\\\])|(\\\([\s\S]+?\\\))/g;
  let last = 0;
  let m;
  while ((m = re.exec(s))) {
    if (m.index > last) wrap.appendChild(document.createTextNode(s.slice(last, m.index)));
    const raw = m[0];
    if (raw.startsWith('\\[')) {
      const tex = raw.slice(2, -2);
      wrap.appendChild(renderKatex(tex, true));
    } else {
      const tex = raw.slice(2, -2);
      wrap.appendChild(renderKatex(tex, false));
    }
    last = m.index + raw.length;
  }
  if (last < s.length) wrap.appendChild(document.createTextNode(s.slice(last)));
  parent.appendChild(wrap);
  return wrap;
}

function appendMathLi(ul, text, options = {}) {
  const li = el('li');
  if (options.badge) {
    li.appendChild(el('span', { className: 'topic-dont-write', text: options.badge }));
    li.appendChild(document.createTextNode(' '));
  }
  const s = String(text ?? '');
  const re = /(\\\[[\s\S]+?\\\])|(\\\([\s\S]+?\\\))/g;
  let last = 0;
  let m;
  while ((m = re.exec(s))) {
    if (m.index > last) li.appendChild(document.createTextNode(s.slice(last, m.index)));
    const raw = m[0];
    if (raw.startsWith('\\[')) li.appendChild(renderKatex(raw.slice(2, -2), true));
    else li.appendChild(renderKatex(raw.slice(2, -2), false));
    last = m.index + raw.length;
  }
  if (last < s.length) li.appendChild(document.createTextNode(s.slice(last)));
  ul.appendChild(li);
}

function navHeight() {
  const value = getComputedStyle(document.documentElement).getPropertyValue('--nav-h').trim();
  return parseFloat(value) || 60;
}

/**
 * Real bottom edge of the sticky page header. The header is height:auto
 * with min-height: var(--nav-h), so its actual box can be taller than the
 * token (a wrapped nav row, a bumped text size). Outline jumps must clear
 * the measured edge, never the token alone.
 */
function headerBottomEdge() {
  const header = document.querySelector('.site-header');
  if (header) {
    const rect = header.getBoundingClientRect();
    if (rect.height > 0) return rect.bottom;
  }
  return navHeight() + 1; // token + header border-bottom fallback
}

/** Breathing room kept between the sticky header and a jumped-to heading. */
const JUMP_GAP = 16;

/**
 * Scroll a sticky rail's own overflow just enough to reveal `node`.
 * Only the rail's scrollTop moves; the window is never scrolled, so the
 * outline's scroll listener never chases its own adjustments.
 */
function revealInStickyRail(rail, node) {
  if (!rail || !rail.offsetParent) return; // hidden (narrow layout) or detached
  const nr = node.getBoundingClientRect();
  const rr = rail.getBoundingClientRect();
  if (nr.bottom > rr.bottom - 2) rail.scrollTop += nr.bottom - rr.bottom + 2;
  else if (nr.top < rr.top + 2) rail.scrollTop -= rr.top - nr.top + 2;
}

/* ---------- PHYS-08: slash-fraction counterexamples ---------- */
const SLASH_COUNTEREXAMPLE = /\d\s*\/\s*[0-9A-Za-z]/;

function isSlashCounterexample(text) {
  const s = String(text ?? '');
  return SLASH_COUNTEREXAMPLE.test(s) && /斜线|slash/i.test(s);
}

/* ---------- Vocabulary popovers on first body occurrence ---------- */
let activeVocabTip = null;
let suppressVocabFocus = 0;
let vocabHideTimer = 0;

function scheduleVocabClose(delay = 180) {
  clearTimeout(vocabHideTimer);
  vocabHideTimer = setTimeout(() => {
    vocabHideTimer = 0;
    if (!activeVocabTip || activeVocabTip.hovering) return;
    if (activeVocabTip.tip.contains(document.activeElement)) return;
    if (activeVocabTip.source === 'click') return;
    closeVocabTip({ restoreFocus: false });
  }, delay);
}

function vocabWordPattern(term) {
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const left = /^[A-Za-z0-9]/.test(term) ? '(?<![A-Za-z0-9])' : '';
  const right = /[A-Za-z0-9]$/.test(term) ? '(?![A-Za-z0-9])' : '';
  return `${left}${escaped}${right}`;
}

function firstVocabMatch(blocks, regex) {
  for (const block of blocks) {
    const walker = document.createTreeWalker(block, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        if (parent.closest('#topic-sec-vocabulary, .exam-figures, .topic-vocab-term, .katex, .tex, .tex-inline, script, style, a, button, h1, h2, h3, summary, .topic-outline, .topic-pager')) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      },
    });
    while (walker.nextNode()) {
      const node = walker.currentNode;
      const match = regex.exec(node.nodeValue);
      if (match) return { node, match };
    }
  }
  return null;
}

function closeVocabTip({ restoreFocus = true } = {}) {
  if (!activeVocabTip) return;
  const { term, tip, onPointerDown, onKeydown, onScroll } = activeVocabTip;
  activeVocabTip = null;
  clearTimeout(vocabHideTimer);
  vocabHideTimer = 0;
  term.setAttribute('aria-expanded', 'false');
  tip.remove();
  document.removeEventListener('pointerdown', onPointerDown, true);
  document.removeEventListener('keydown', onKeydown, true);
  window.removeEventListener('scroll', onScroll);
  window.removeEventListener('resize', onScroll);
  if (restoreFocus && term.isConnected) {
    suppressVocabFocus = Date.now() + 350;
    try { term.focus({ preventScroll: true }); } catch (_) { term.focus(); }
  }
}

function positionVocabTip(tip, term) {
  const rect = term.getBoundingClientRect();
  const gap = 10;
  const margin = 8;
  tip.style.visibility = 'hidden';
  tip.style.left = '0px';
  tip.style.top = '0px';
  const width = tip.offsetWidth;
  const height = tip.offsetHeight;
  const vw = document.documentElement.clientWidth || window.innerWidth;
  const vh = window.innerHeight;
  let left = Math.min(Math.max(margin, rect.left), Math.max(margin, vw - width - margin));
  let top = rect.bottom + gap;
  if (top + height > vh - margin) top = rect.top - height - gap;
  if (top < margin) top = margin;
  tip.style.left = `${Math.round(left)}px`;
  tip.style.top = `${Math.round(top)}px`;
  tip.style.visibility = '';
}

function openVocabTip(term, item, { moveFocus = false, source = 'click' } = {}) {
  closeVocabTip({ restoreFocus: false });
  const tip = el('div', { className: 'topic-vocab-tip', role: 'dialog', 'aria-modal': 'false' });
  tip.setAttribute('aria-label', `${item.termZh || item.termEn} 释义 · Definition`);
  const head = el('div', { className: 'topic-vocab-tip-head' });
  head.appendChild(el('p', { className: 'topic-vocab-tip-term', text: `${item.termZh || ''} · ${item.termEn || ''}` }));
  const close = el('button', { type: 'button', className: 'topic-vocab-tip-close', 'aria-label': '关闭 · Close', text: '关闭 · Close' });
  head.appendChild(close);
  tip.appendChild(head);
  const body = el('div', { className: 'topic-vocab-tip-body' });
  if (item.defZh) appendMathText(body, item.defZh, 'topic-vocab-def zh');
  if (item.defEn) appendMathText(body, item.defEn, 'topic-vocab-def en');
  tip.appendChild(body);
  document.body.appendChild(tip);
  positionVocabTip(tip, term);
  term.setAttribute('aria-expanded', 'true');

  const onPointerDown = (event) => {
    if (tip.contains(event.target) || term.contains(event.target)) return;
    closeVocabTip({ restoreFocus: false });
  };
  const onKeydown = (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      event.stopPropagation();
      closeVocabTip();
    }
  };
  const onScroll = () => closeVocabTip({ restoreFocus: false });
  close.addEventListener('click', () => closeVocabTip());
  tip.addEventListener('pointerenter', () => {
    if (!activeVocabTip) return;
    activeVocabTip.hovering = true;
    clearTimeout(vocabHideTimer);
  });
  tip.addEventListener('pointerleave', () => {
    if (!activeVocabTip) return;
    activeVocabTip.hovering = false;
    scheduleVocabClose();
  });
  document.addEventListener('pointerdown', onPointerDown, true);
  document.addEventListener('keydown', onKeydown, true);
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });

  activeVocabTip = {
    term,
    tip,
    onPointerDown,
    onKeydown,
    onScroll,
    source,
    hovering: false,
  };
  if (moveFocus) close.focus({ preventScroll: true });
}

function enhanceVocabulary(content, vocabulary) {
  if (!Array.isArray(vocabulary) || !vocabulary.length) return;
  const blocks = [...content.querySelectorAll('.topic-block')]
    .filter((block) => block.id !== 'topic-sec-vocabulary' && !block.classList.contains('exam-figures'));
  if (!blocks.length) return;
  const items = vocabulary
    .map((item) => {
      const words = [item.termZh, item.termEn].filter(Boolean).sort((a, b) => b.length - a.length);
      if (!words.length) return null;
      return {
        item,
        regex: new RegExp(words.map(vocabWordPattern).join('|'), 'i'),
        length: words[0].length,
      };
    })
    .filter(Boolean)
    .sort((a, b) => b.length - a.length);

  for (const { item, regex } of items) {
    const found = firstVocabMatch(blocks, regex);
    if (!found) continue;
    const { node, match } = found;
    const text = node.nodeValue;
    const before = text.slice(0, match.index);
    const after = text.slice(match.index + match[0].length);
    const term = el('button', {
      type: 'button',
      className: 'topic-vocab-term',
      'aria-expanded': 'false',
      'aria-haspopup': 'dialog',
      text: match[0],
    });
    term.setAttribute('aria-label', `${match[0]} · ${item.termZh || item.termEn}`);
    const parent = node.parentNode;
    if (!parent) continue;
    if (before) parent.insertBefore(document.createTextNode(before), node);
    parent.insertBefore(term, node);
    if (after) parent.insertBefore(document.createTextNode(after), node);
    parent.removeChild(node);

    term.addEventListener('pointerenter', (event) => {
      if (event.pointerType && event.pointerType !== 'mouse') return;
      if (activeVocabTip?.term === term) return;
      openVocabTip(term, item, { source: 'hover' });
    });
    term.addEventListener('pointerleave', (event) => {
      if (event.pointerType && event.pointerType !== 'mouse') return;
      if (activeVocabTip?.term !== term) return;
      scheduleVocabClose();
    });
    term.addEventListener('focus', () => {
      if (Date.now() < suppressVocabFocus) return;
      if (activeVocabTip?.term === term) return;
      openVocabTip(term, item, { source: 'focus' });
    });
    term.addEventListener('blur', () => {
      if (activeVocabTip?.term !== term) return;
      if (activeVocabTip.tip.contains(document.activeElement)) return;
      setTimeout(() => {
        if (!activeVocabTip || activeVocabTip.term !== term) return;
        if (activeVocabTip.tip.contains(document.activeElement)) return;
        closeVocabTip({ restoreFocus: false });
      }, 0);
    });
    term.addEventListener('click', (event) => {
      event.preventDefault();
      if (activeVocabTip?.term === term) {
        if (activeVocabTip.source !== 'click') {
          activeVocabTip.source = 'click';
          if (event.detail === 0) activeVocabTip.tip.querySelector('.topic-vocab-tip-close')?.focus();
          return;
        }
        closeVocabTip();
        return;
      }
      openVocabTip(term, item, { moveFocus: event.detail === 0, source: 'click' });
    });
  }
}

function topicOrder(data, subject) {
  const all = data.allTopics?.() || [];
  const out = [];
  for (const ch of getSubjectTree(subject)) {
    const list = all
      .filter((t) => t.chapterId === ch.id)
      .sort((a, b) => (a.topicIndex ?? 0) - (b.topicIndex ?? 0));
    out.push(...list);
  }
  return out;
}

export async function renderTopicPage(main, { subject, chapterId, code, isCurrent = () => true }) {
  ensureStyle();
  clear(main);
  main.appendChild(el('div', { className: 'page-loading' }, [
    el('span', { className: 'loading-line', text: '加载知识点…' }),
  ]));
  const data = await loadCourseData(subject);
  if (!isCurrent()) return null;
  const topic = data?.getTopic?.(chapterId, code);
  clear(main);
  if (!topic) {
    main.appendChild(breadcrumb([
      { href: '#/', label: '首页' },
      { href: `#/${subject}`, label: SUBJECT_LABEL[subject] || subject },
    ]));
    main.appendChild(el('div', { className: 'empty-state' }, [
      el('p', { text: '未找到该知识点。' }),
      el('a', { className: 'btn hit-target', href: `#/${subject}`, text: '返回学科' }),
    ]));
    document.title = '未找到知识点 · 科学可视化';
    return null;
  }

  const id = topicId(subject, chapterId, code);
  markVisited(id);
  const statusEl = el('span', { className: 'topic-status', text: isCompleted(id) ? '已完成' : isVisited(id) ? '已读' : '' });
  const completeTimer = setTimeout(() => {
    if (location.hash.includes(`/t/${subject}/${chapterId}/${code}`)) {
      markCompleted(id);
      statusEl.textContent = '已完成';
    }
  }, 2500);

  const ch = getChapter(subject, chapterId);
  const order = topicOrder(data, subject);
  const currentIndex = order.findIndex((t) => t.chapterId === chapterId && t.code === code);
  const prev = currentIndex > 0 ? order[currentIndex - 1] : null;
  const next = currentIndex >= 0 && currentIndex < order.length - 1 ? order[currentIndex + 1] : null;
  const practiceHref = `#/${subject}/practice/${chapterId}`;
  const mapHref = `#/${subject}/map`;
  const formulaHref = subject === 'math' || subject === 'mech' || subject === 'em' ? `#/${subject}/formulas` : null;

  main.appendChild(
    breadcrumb([
      { href: '#/', label: '首页' },
      { href: `#/${subject}`, label: SUBJECT_LABEL[subject] },
      { href: `#/${subject}/${chapterId}`, label: ch?.titleZh || ch?.name || chapterId },
      { label: `${code} ${topic.titleZh}`, current: true },
    ]),
  );

  const layout = el('div', { className: `topic-layout ${subject}` });
  const rail = el('aside', { className: 'topic-rail', 'aria-label': '本页导航 · Page navigation' });
  const content = el('div', { className: 'topic-content' });
  layout.append(rail, content);
  main.appendChild(layout);

  const outline = [];
  const makeOutlineNav = (className = 'topic-outline') => {
    const nav = el('nav', { className, 'aria-label': '页内目录 · On this page' });
    outline.forEach((item) => {
      const classes = ['hit-target'];
      if (item.practice) classes.push('topic-outline-practice');
      if (item.practiceStart) classes.push('topic-outline-practice-start');
      const b = el('button', {
        type: 'button',
        className: classes.join(' '),
        text: item.label,
        'data-target': item.id,
      });
      b.addEventListener('click', () => {
        const details = b.closest('details');
        if (details) {
          // Collapse the menu first, then measure and jump only once the
          // closed layout has settled: closing <details> moves every later
          // block, so a jump read off the still-open menu geometry lands
          // short of the heading. One click must be enough.
          const wasOpen = details.open;
          details.open = false;
          details.querySelector('summary')?.focus();
          if (!wasOpen) {
            requestAnimationFrame(() => requestAnimationFrame(() => jumpTo(item.id)));
            return;
          }
          details.addEventListener('toggle', () => {
            requestAnimationFrame(() => requestAnimationFrame(() => jumpTo(item.id)));
          }, { once: true });
        } else {
          jumpTo(item.id);
        }
      });
      nav.appendChild(b);
    });
    return nav;
  };

  function jumpTo(sectionId) {
    const target = document.getElementById(sectionId);
    if (!target) return;
    // Outline clicks on practice sections open the gate before jumping.
    if (practiceZone?.hidden && target.closest('.topic-practice-zone')) expandPractice();
    // Clear the *measured* header edge plus a comfortable gap (the header
    // can be taller than --nav-h; the old navHeight()-based offset slid the
    // heading under a wrapped header).
    const top = target.getBoundingClientRect().top + window.scrollY - headerBottomEdge() - JUMP_GAP;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  }

  /**
   * Open the practice zone (examples / self-check / past papers). The zone
   * stays out of the document flow while hidden, so a stray wheel notch or
   * page-down past the end of the notes can never land inside exercises.
   */
  function expandPractice() {
    if (!practiceZone || !practiceZone.hidden) return;
    practiceZone.hidden = false;
    if (gateBtn) {
      gateBtn.setAttribute('aria-expanded', 'true');
      gateBtn.textContent = '回到练习区 · Back to practice area';
    }
    if (gateNote) gateNote.textContent = '练习区已展开，向下继续。 · Practice area expanded below.';
    paintOutline();
  }

  function addBlock(key, label, section, { parent = content, practice = false } = {}) {
    section.id = `topic-sec-${key}`;
    parent.appendChild(section);
    outline.push({ id: section.id, label, practice });
    return section;
  }

  function block(key, label, opts = {}) {
    const sec = el('section', { className: 'topic-block' });
    sec.appendChild(el('h2', { text: label }));
    return addBlock(key, label, sec, opts);
  }

  const header = el('header', { className: `topic-header ${subject}` }, [
    el('p', { className: 'page-kicker', text: `${topic.layer === 'prep' ? '预备' : 'AP'} · Unit ${topic.unitCode}` }),
    el('h1', {}, [
      el('span', { className: 'topic-heading-code', text: topic.code }),
      el('span', { text: topic.titleZh }),
    ]),
    el('p', { className: 'topic-en', text: topic.titleEn }),
    el('div', { className: 'topic-status-row' }, [
      el('a', { className: 'hit-target text-link', href: `#/${subject}/${chapterId}`, text: ch?.titleZh || '返回单元' }),
      statusEl,
    ]),
    el('div', { className: 'topic-actions' }, [
      el('a', { className: 'btn primary hit-target', href: practiceHref, text: '单元练习' }),
      el('a', { className: 'btn hit-target', href: mapHref, text: '知识图谱' }),
      formulaHref ? el('a', { className: 'btn hit-target', href: formulaHref, text: '公式表' }) : null,
    ]),
  ]);
  content.appendChild(header);

  const mobileNav = el('details', { className: 'topic-outline-mobile' });
  mobileNav.appendChild(el('summary', { className: 'hit-target', text: '本页目录 · On this page' }));
  content.appendChild(mobileNav);

  const defSec = block('definition', '定义 · Definition');
  appendMathText(defSec, topic.definition);
  if (topic.intuition) appendMathText(defSec, topic.intuition, 'muted');

  if (topic.vocabulary?.length) {
    const sec = block('vocabulary', '重要词汇 · Key Vocabulary');
    const ul = el('ul', { className: 'topic-vocab-list' });
    topic.vocabulary.forEach((item) => {
      // One framed entry per term: term line above, definitions below —
      // same text as before, but each vocabulary item reads on its own line.
      const li = el('li', { className: 'topic-vocab-entry' });
      li.appendChild(el('p', { className: 'topic-vocab-entry-term', text: `${item.termZh} · ${item.termEn}` }));
      if (item.defZh) appendMathText(li, item.defZh, 'topic-vocab-entry-def zh');
      if (item.defEn) appendMathText(li, item.defEn, 'topic-vocab-entry-def en');
      ul.appendChild(li);
    });
    sec.appendChild(ul);
  }

  if (topic.essentialKnowledge?.length) {
    const ul = el('ul', { className: 'topic-list' });
    topic.essentialKnowledge.forEach((c) => appendMathLi(ul, c));
    block('essential', '本质知识 · Essential Knowledge').appendChild(ul);
  }

  if (topic.learningObjectives?.length) {
    const ul = el('ul', { className: 'topic-list' });
    topic.learningObjectives.forEach((c) => appendMathLi(ul, c));
    block('objectives', '学习目标 · Learning Objectives').appendChild(ul);
  }

  if (topic.formulas?.length) {
    const box = block('formulas', '公式 · Formulas');
    topic.formulas.forEach((f) => {
      const item = el('div', { className: 'topic-formula-item' });
      item.appendChild(renderKatex(f.latex, true));
      if (f.note) appendMathText(item, f.note, 'formula-note');
      box.appendChild(item);
    });
  }

  if (topic.derivationNotes?.length) {
    const ul = el('ul', { className: 'topic-list' });
    topic.derivationNotes.forEach((d) => appendMathLi(ul, `${d.from} → ${d.note}`));
    block('derivation', '推导要点 · Derivation').appendChild(ul);
  }

  if (topic.conditions?.length) {
    const ul = el('ul', { className: 'topic-list' });
    topic.conditions.forEach((c) => appendMathLi(ul, c));
    block('conditions', '条件与假设 · Conditions').appendChild(ul);
  }

  if (topic.keyPoints?.length) {
    const ul = el('ul', { className: 'topic-list' });
    topic.keyPoints.forEach((c) => appendMathLi(ul, c));
    block('keypoints', '要点 · Key Points').appendChild(ul);
  }

  if (topic.misconceptions?.length) {
    const ul = el('ul', { className: 'topic-list' });
    topic.misconceptions.forEach((c) => {
      const badge = isSlashCounterexample(c) ? "不要这样写 · Don't write" : '';
      appendMathLi(ul, c, badge ? { badge } : {});
    });
    block('misconceptions', '常见误解 · Misconceptions').appendChild(ul);
  }

  if (topic.examTips?.length) {
    const ul = el('ul', { className: 'topic-list' });
    topic.examTips.forEach((c) => appendMathLi(ul, c));
    block('tips', 'AP 提示 · Exam Tips').appendChild(ul);
  }

  if (topic.modules?.length) {
    const sec = block('modules', '可视化实验 · Simulations');
    topic.modules.forEach((m) => {
      sec.appendChild(el('a', { className: 'entry-row hit-target', href: `#/m/${m.id}` }, [
        el('h3', { text: m.title }),
      ]));
    });
  }

  if (topic.connections?.length) {
    const ul = el('ul', { className: 'topic-list' });
    topic.connections.forEach((c) => appendMathLi(ul, c));
    block('connections', '知识联系 · Connections').appendChild(ul);
  }

  if (topic.related?.length) {
    const sec = block('related', '相关知识点 · Related Topics');
    topic.related.forEach((r) => {
      const label = r.titleZh || r.title || '';
      const rel = r.relation ? `${r.relation} · ` : '';
      sec.appendChild(
        el('a', {
          className: 'entry-row hit-target',
          href: `#/t/${r.subject}/${r.chapterId}/${r.code}`,
          text: `${rel}${r.code} ${label}`,
        }),
      );
    });
  }

  if (topic.intuitionDetailed) {
    appendMathText(block('intuition', '直觉理解 · Intuition'), topic.intuitionDetailed);
  }
  if (topic.development?.length) {
    const ol = el('ol', { className: 'topic-list' });
    topic.development.forEach((s) => appendMathLi(ol, s));
    block('development', '循序展开 · Development').appendChild(ol);
  }
  if (topic.summary) {
    appendMathText(block('summary', '小结 · Summary'), topic.summary);
  }

  // Exam figures — physics via module/topic maps; bio/math via topic.figures.
  try {
    let figSec = null;
    if (subject === 'mech' || subject === 'em') {
      figSec = mountTopicExamFigures(content, topic);
    } else if ((subject === 'bio' || subject === 'math') && topic.figures?.length) {
      figSec = renderFigures(content, topic.figures);
    }
    if (figSec) {
      figSec.id = 'topic-sec-figures';
      outline.push({ id: figSec.id, label: '图示 · Figures' });
      enhanceExamFigures(figSec);
    }
  } catch (_) {}

  /* ---------- Teaching ends here: the practice gate ---------- */
  // Examples / self-check / past papers are practice, not notes. They are
  // grouped after the whole lecture and kept out of the normal scroll flow
  // (hidden) until the reader explicitly continues, so one wheel notch past
  // the end of the notes can never land inside exercises.
  let papers = null;
  try { papers = pastPapersForTopic(`${chapterId}:${code}`) || null; } catch (_) { papers = null; }
  const hasExamples = !!topic.examples?.length;
  const hasChecks = !!topic.checks?.length;
  const hasPapers = !!papers?.length;
  let practiceZone = null;
  let gateNote = null;
  let gateBtn = null;
  if (hasExamples || hasChecks || hasPapers) {
    const kindsZh = [hasExamples && '例题', hasChecks && '自测', hasPapers && '历年真题'].filter(Boolean).join('、');
    const kindsEn = [hasExamples && 'examples', hasChecks && 'self-check', hasPapers && 'past papers'].filter(Boolean).join(', ');
    const gate = el('section', { className: 'topic-gate', id: 'topic-sec-gate' });
    gate.appendChild(el('h2', { className: 'topic-gate-title', text: '讲义到此结束 · End of notes' }));
    gateNote = el('p', {
      className: 'topic-gate-note',
      text: `以下为练习区（${kindsZh}），点击下方按钮展开。 · Practice area ahead (${kindsEn}) — expand with the button below.`,
    });
    gate.appendChild(gateNote);
    gateBtn = el('button', {
      type: 'button',
      className: 'btn primary hit-target topic-gate-btn',
      text: '继续看例题与自测 · Continue to examples and checks',
      'aria-expanded': 'false',
      'aria-controls': 'topic-practice-zone',
    });
    gate.appendChild(gateBtn);
    content.appendChild(gate);

    practiceZone = el('div', {
      className: 'topic-practice-zone',
      id: 'topic-practice-zone',
      role: 'region',
      'aria-label': '练习区 · Practice area',
      hidden: true,
    });
    content.appendChild(practiceZone);

    gateBtn.addEventListener('click', () => {
      expandPractice();
      const firstPractice = outline.find((o) => o.practice);
      jumpTo(firstPractice ? firstPractice.id : gate.id);
    });
  }

  if (hasExamples) {
    const sec = block('examples', '例题 · Examples', { parent: practiceZone, practice: true });
    topic.examples.forEach((ex) => {
      // One framed article per example: title, prompt, steps, solution.
      const art = el('article', { className: 'topic-example' });
      art.appendChild(el('h3', { text: ex.title || '例题' }));
      appendMathText(art, ex.prompt);
      if (ex.steps?.length) {
        const ol = el('ol', { className: 'topic-list example-steps' });
        ex.steps.forEach((s) => appendMathLi(ol, s));
        art.appendChild(ol);
      }
      if (ex.solution) appendMathText(art, ex.solution, 'example-sol');
      if (ex.solutionLatex) art.appendChild(renderKatex(ex.solutionLatex, true));
      sec.appendChild(art);
    });
  }

  if (hasChecks) {
    const ul = el('ul', { className: 'topic-list' });
    topic.checks.forEach((s) => appendMathLi(ul, s));
    block('checks', '自测 · Self-check', { parent: practiceZone, practice: true }).appendChild(ul);
  }

  // Past papers: official PDF links + original paraphrase only.
  try {
    if (papers?.length) {
      const sec = block('pastpapers', '历年真题 · Past Papers', { parent: practiceZone, practice: true });
      sec.appendChild(el('p', { className: 'muted', text: '仅官方 PDF 链接与原创复述，不含试题原文。' }));
      papers.slice(0, 12).forEach((e) => {
        const row = el('div', { className: 'pastpaper-row' });
        row.appendChild(el('p', { text: `${e.year} ${e.examLabel} Q${e.question}${e.set ? ' Set' + e.set : ''} · ${e.paraphrase}` }));
        const links = el('div', { className: 'pastpaper-links' });
        if (e.pdfQuestions) links.appendChild(el('a', { className: 'hit-target text-link', href: e.pdfQuestions, target: '_blank', rel: 'noopener', text: '试题 PDF' }));
        if (e.pdfScoring) links.appendChild(el('a', { className: 'hit-target text-link', href: e.pdfScoring, target: '_blank', rel: 'noopener', text: '评分指南' }));
        links.appendChild(el('a', { className: 'hit-target text-link', href: `#/pastpapers/${e.course}/${e.year}`, text: '索引' }));
        row.appendChild(links);
        sec.appendChild(row);
      });
      sec.appendChild(el('a', { className: 'entry-row hit-target', href: `#/pastpapers/${subject}`, text: '查看全部历年真题' }));
    }
  } catch (_) {}

  // Mark where the practice group starts so the outline can draw a divider.
  const firstPracticeItem = outline.find((o) => o.practice);
  if (firstPracticeItem) firstPracticeItem.practiceStart = true;

  enhanceVocabulary(content, topic.vocabulary);

  mobileNav.appendChild(makeOutlineNav('topic-outline topic-outline-inline'));

  const pager = el('nav', { className: 'page-pager topic-pager', 'aria-label': '知识点导航 · Topic navigation' }, [
    prev
      ? el('a', {
          className: 'pager-link prev hit-target',
          href: `#/t/${subject}/${prev.chapterId}/${prev.code}`,
          'aria-label': `上一知识点 · Previous: ${prev.code} ${prev.titleZh}`,
        }, [
          el('span', { className: 'pager-label', text: '上一知识点 · Previous' }),
          el('span', { className: 'pager-title', text: `${prev.code} ${prev.titleZh}` }),
        ])
      : el('span', { className: 'pager-link prev disabled', 'aria-disabled': 'true' }, [
          el('span', { className: 'pager-label', text: '上一知识点 · Previous' }),
          el('span', { className: 'pager-title', text: '已到开头 · Start' }),
        ]),
    next
      ? el('a', {
          className: 'pager-link next hit-target',
          href: `#/t/${subject}/${next.chapterId}/${next.code}`,
          'aria-label': `下一知识点 · Next: ${next.code} ${next.titleZh}`,
        }, [
          el('span', { className: 'pager-label', text: '下一知识点 · Next' }),
          el('span', { className: 'pager-title', text: `${next.code} ${next.titleZh}` }),
        ])
      : el('span', { className: 'pager-link next disabled', 'aria-disabled': 'true' }, [
          el('span', { className: 'pager-label', text: '下一知识点 · Next' }),
          el('span', { className: 'pager-title', text: '已到末尾 · End' }),
        ]),
  ]);
  content.appendChild(pager);

  // Desktop rail: hierarchy + outline; the outline is duplicated in the mobile details.
  rail.append(
    el('p', { className: 'rail-kicker', text: `Unit ${topic.unitCode}` }),
    el('a', { className: 'rail-chapter hit-target', href: `#/${subject}/${chapterId}`, text: ch?.titleZh || ch?.name || '返回单元' }),
    makeOutlineNav(),
  );

  let activeId = outline[0]?.id || null;
  const outlines = [...main.querySelectorAll('.topic-outline button')];
  function paintOutline() {
    let current = outline[0]?.id || null;
    for (const item of outline) {
      const target = document.getElementById(item.id);
      // Skip targets without a layout box yet — the collapsed practice zone.
      if (!target || !target.offsetParent) continue;
      if (target.getBoundingClientRect().top <= navHeight() + 120) current = item.id;
    }
    if (current === activeId) return;
    activeId = current;
    paintActive();
  }
  function paintActive() {
    let railActive = null;
    outlines.forEach((b) => {
      const on = b.dataset.target === activeId;
      b.classList.toggle('active', on);
      if (on) b.setAttribute('aria-current', 'location');
      else b.removeAttribute('aria-current');
      if (on && !railActive && b.closest('.topic-rail')) railActive = b;
    });
    // Long topics overflow the sticky rail; keep the current item visible in it.
    if (railActive) revealInStickyRail(railActive.closest('.topic-rail'), railActive);
  }
  paintActive();
  let raf = 0;
  const onScroll = () => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      raf = 0;
      paintOutline();
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  paintOutline();

  document.title = `${topic.code} ${topic.titleZh} · ${SUBJECT_LABEL[subject]} · 科学可视化`;

  return () => {
    clearTimeout(completeTimer);
    closeVocabTip({ restoreFocus: false });
    window.removeEventListener('scroll', onScroll);
    if (raf) cancelAnimationFrame(raf);
  };
}

export { topicId };
