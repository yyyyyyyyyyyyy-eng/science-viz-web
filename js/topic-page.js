import { el, clear, breadcrumb, SUBJECT_LABEL } from './ui-shared.js';
import { getChapter, getSubjectTree } from '../modules/registry.js';
import { markVisited, markCompleted, isCompleted, isVisited } from './progress.js';
import { loadCourseData } from '../data/courses.js';
import { pastPapersForTopic } from '../data/shared/pastpapers.js';
import { mountTopicExamFigures, enhanceExamFigures } from '../modules/physics/exam-figures.js';
import { renderFigures } from '../data/math/figlib.js';

const STYLE_ID = 'topic-extras-style';
const STYLE_HREF = 'css/topic-extras.css';

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

  const layout = el('div', { className: 'topic-layout' });
  const rail = el('aside', { className: 'topic-rail', 'aria-label': '本页导航 · Page navigation' });
  const content = el('div', { className: 'topic-content' });
  layout.append(rail, content);
  main.appendChild(layout);

  const outline = [];
  const makeOutlineNav = (className = 'topic-outline') => {
    const nav = el('nav', { className, 'aria-label': '页内目录 · On this page' });
    outline.forEach((item) => {
      const b = el('button', {
        type: 'button',
        className: 'hit-target',
        text: item.label,
        'data-target': item.id,
      });
      b.addEventListener('click', () => {
        const details = b.closest('details');
        if (details) {
          details.open = false;
          details.querySelector('summary')?.focus();
          requestAnimationFrame(() => jumpTo(item.id));
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
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight() - 20;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  function addBlock(key, label, section) {
    section.id = `topic-sec-${key}`;
    content.appendChild(section);
    outline.push({ id: section.id, label });
    return section;
  }

  function block(key, label) {
    const sec = el('section', { className: 'topic-block' });
    sec.appendChild(el('h2', { text: label }));
    return addBlock(key, label, sec);
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
    const ul = el('ul', { className: 'topic-list' });
    topic.vocabulary.forEach((item) => {
      appendMathLi(ul, `${item.termZh} · ${item.termEn}：${item.defZh} · ${item.defEn}`);
    });
    block('vocabulary', '重要词汇 · Key Vocabulary').appendChild(ul);
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
      box.appendChild(renderKatex(f.latex, true));
      if (f.note) appendMathText(box, f.note, 'formula-note');
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

  if (topic.examples?.length) {
    const sec = block('examples', '例题 · Examples');
    topic.examples.forEach((ex) => {
      sec.appendChild(el('h3', { text: ex.title || '例题' }));
      appendMathText(sec, ex.prompt);
      if (ex.steps?.length) {
        const ol = el('ol', { className: 'topic-list example-steps' });
        ex.steps.forEach((s) => appendMathLi(ol, s));
        sec.appendChild(ol);
      }
      if (ex.solution) appendMathText(sec, ex.solution, 'example-sol');
      if (ex.solutionLatex) sec.appendChild(renderKatex(ex.solutionLatex, true));
    });
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
  if (topic.checks?.length) {
    const ul = el('ul', { className: 'topic-list' });
    topic.checks.forEach((s) => appendMathLi(ul, s));
    block('checks', '自测 · Self-check').appendChild(ul);
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

  try {
    const papers = pastPapersForTopic(`${chapterId}:${code}`);
    if (papers?.length) {
      const sec = block('pastpapers', '历年真题 · Past Papers');
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
      if (!target) continue;
      if (target.getBoundingClientRect().top <= navHeight() + 120) current = item.id;
    }
    if (current === activeId) return;
    activeId = current;
    paintActive();
  }
  function paintActive() {
    outlines.forEach((b) => {
      const on = b.dataset.target === activeId;
      b.classList.toggle('active', on);
      if (on) b.setAttribute('aria-current', 'location');
      else b.removeAttribute('aria-current');
    });
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
