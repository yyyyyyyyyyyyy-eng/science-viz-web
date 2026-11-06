import { el, clear, breadcrumb, SUBJECT_LABEL } from './ui-shared.js';
import { getChapter, getSubjectTree } from '../modules/registry.js';
import { markVisited, markCompleted, isCompleted, isVisited } from './progress.js';
import { loadCourseData } from '../data/courses.js';
import { pastPapersForTopic } from '../data/shared/pastpapers.js';
import { mountTopicExamFigures } from '../modules/physics/exam-figures.js';
import { renderFigures } from '../data/math/figlib.js';

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

function appendMathLi(ul, text) {
  const li = el('li');
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
  const rail = el('aside', { className: 'topic-rail', 'aria-label': '本页导航' });
  const content = el('div', { className: 'topic-content' });
  layout.append(rail, content);
  main.appendChild(layout);

  const outline = [];
  const makeOutlineNav = (className = 'topic-outline') => {
    const nav = el('nav', { className, 'aria-label': '页内目录' });
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
  mobileNav.appendChild(el('summary', { className: 'hit-target', text: '本页目录' }));
  content.appendChild(mobileNav);

  const defSec = block('definition', '定义');
  appendMathText(defSec, topic.definition);
  if (topic.intuition) appendMathText(defSec, topic.intuition, 'muted');

  if (topic.essentialKnowledge?.length) {
    const ul = el('ul', { className: 'topic-list' });
    topic.essentialKnowledge.forEach((c) => appendMathLi(ul, c));
    block('essential', '本质知识（教学改写）').appendChild(ul);
  }

  if (topic.learningObjectives?.length) {
    const ul = el('ul', { className: 'topic-list' });
    topic.learningObjectives.forEach((c) => appendMathLi(ul, c));
    block('objectives', '学习目标').appendChild(ul);
  }

  if (topic.formulas?.length) {
    const box = block('formulas', '公式');
    topic.formulas.forEach((f) => {
      box.appendChild(renderKatex(f.latex, true));
      if (f.note) appendMathText(box, f.note, 'formula-note');
    });
  }

  if (topic.derivationNotes?.length) {
    const ul = el('ul', { className: 'topic-list' });
    topic.derivationNotes.forEach((d) => appendMathLi(ul, `${d.from} → ${d.note}`));
    block('derivation', '推导要点').appendChild(ul);
  }

  if (topic.conditions?.length) {
    const ul = el('ul', { className: 'topic-list' });
    topic.conditions.forEach((c) => appendMathLi(ul, c));
    block('conditions', '条件与假设').appendChild(ul);
  }

  if (topic.keyPoints?.length) {
    const ul = el('ul', { className: 'topic-list' });
    topic.keyPoints.forEach((c) => appendMathLi(ul, c));
    block('keypoints', '要点').appendChild(ul);
  }

  if (topic.misconceptions?.length) {
    const ul = el('ul', { className: 'topic-list' });
    topic.misconceptions.forEach((c) => appendMathLi(ul, c));
    block('misconceptions', '常见误解').appendChild(ul);
  }

  if (topic.examples?.length) {
    const sec = block('examples', '例题');
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
    block('tips', 'AP 提示').appendChild(ul);
  }

  if (topic.modules?.length) {
    const sec = block('modules', '可视化实验');
    topic.modules.forEach((m) => {
      sec.appendChild(el('a', { className: 'entry-row hit-target', href: `#/m/${m.id}` }, [
        el('h3', { text: m.title }),
      ]));
    });
  }

  if (topic.connections?.length) {
    const ul = el('ul', { className: 'topic-list' });
    topic.connections.forEach((c) => appendMathLi(ul, c));
    block('connections', '知识联系').appendChild(ul);
  }

  if (topic.related?.length) {
    const sec = block('related', '相关知识点');
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
    appendMathText(block('intuition', '直觉理解'), topic.intuitionDetailed);
  }
  if (topic.development?.length) {
    const ol = el('ol', { className: 'topic-list' });
    topic.development.forEach((s) => appendMathLi(ol, s));
    block('development', '循序展开').appendChild(ol);
  }
  if (topic.checks?.length) {
    const ul = el('ul', { className: 'topic-list' });
    topic.checks.forEach((s) => appendMathLi(ul, s));
    block('checks', '自测').appendChild(ul);
  }
  if (topic.summary) {
    appendMathText(block('summary', '小结'), topic.summary);
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
      outline.push({ id: figSec.id, label: '图示' });
    }
  } catch (_) {}

  try {
    const papers = pastPapersForTopic(`${chapterId}:${code}`);
    if (papers?.length) {
      const sec = block('pastpapers', '历年真题');
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

  mobileNav.appendChild(makeOutlineNav('topic-outline topic-outline-inline'));

  const pager = el('nav', { className: 'page-pager topic-pager', 'aria-label': '知识点导航' }, [
    prev
      ? el('a', { className: 'pager-link prev hit-target', href: `#/t/${subject}/${prev.chapterId}/${prev.code}` }, [
          el('span', { className: 'pager-label', text: '上一知识点' }),
          el('span', { className: 'pager-title', text: `${prev.code} ${prev.titleZh}` }),
        ])
      : el('span', { className: 'pager-link prev disabled' }),
    next
      ? el('a', { className: 'pager-link next hit-target', href: `#/t/${subject}/${next.chapterId}/${next.code}` }, [
          el('span', { className: 'pager-label', text: '下一知识点' }),
          el('span', { className: 'pager-title', text: `${next.code} ${next.titleZh}` }),
        ])
      : el('span', { className: 'pager-link next disabled' }),
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
    outlines.forEach((b) => b.classList.toggle('active', b.dataset.target === activeId));
  }
  outlines.forEach((b) => b.classList.toggle('active', b.dataset.target === activeId));
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
    window.removeEventListener('scroll', onScroll);
    if (raf) cancelAnimationFrame(raf);
  };
}

export { topicId };
