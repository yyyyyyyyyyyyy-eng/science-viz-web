import { el, clear } from './ui-shared.js';
import { SUBJECT_LABEL } from './ui-shared.js';
import { getChapter } from '../modules/registry.js';
import { markVisited, markCompleted, isCompleted, isVisited } from './progress.js';
import { loadCourseData } from '../data/courses.js';
import { pastPapersForTopic } from '../data/shared/pastpapers.js';
import { mountTopicExamFigures } from '../modules/physics/exam-figures.js';

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
  const wrap = el(className ? 'p' : 'p', className ? { className } : {});
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

export async function renderTopicPage(main, { subject, chapterId, code }) {
  clear(main);
  main.appendChild(el('p', { className: 'loading-line', text: '加载知识点…' }));
  const data = await loadCourseData(subject);
  const topic = data?.getTopic?.(chapterId, code);
  clear(main);
  if (!topic) {
    main.appendChild(el('p', { text: '未找到该知识点。' }));
    return;
  }
  const id = topicId(subject, chapterId, code);
  markVisited(id);
  setTimeout(() => { if (location.hash.includes(`/t/${subject}/${chapterId}/${code}`)) markCompleted(id); }, 2500);

  const ch = getChapter(subject, chapterId);
  const root = el('article', { className: 'topic-page' });
  root.appendChild(
    el('nav', { className: 'breadcrumb', 'aria-label': '面包屑' }, [
      el('a', { className: 'hit-target', href: '#/', text: '首页' }),
      el('span', { className: 'crumb-sep', text: '/' }),
      el('a', { className: 'hit-target', href: `#/${subject}`, text: SUBJECT_LABEL[subject] }),
      el('span', { className: 'crumb-sep', text: '/' }),
      el('a', { className: 'hit-target', href: `#/${subject}/${chapterId}`, text: ch?.name || chapterId }),
      el('span', { className: 'crumb-sep', text: '/' }),
      el('span', { className: 'crumb-current', text: `${code} ${topic.titleZh}` }),
    ]),
  );

  const layer = topic.layer === 'prep' ? '预备' : 'AP';
  root.appendChild(el('p', { className: 'topic-kicker', text: `${layer} · Unit ${topic.unitCode} · ${topic.unitTitleEn}` }));
  root.appendChild(el('h1', { text: `${topic.code}　${topic.titleZh}` }));
  root.appendChild(el('p', { className: 'lead', text: topic.titleEn }));

  const defSec = el('section', { className: 'topic-block' }, [el('h2', { text: '定义' })]);
  appendMathText(defSec, topic.definition);
  if (topic.intuition) appendMathText(defSec, topic.intuition, 'muted');
  root.appendChild(defSec);

  if (topic.essentialKnowledge?.length) {
    const ul = el('ul', { className: 'topic-list' });
    topic.essentialKnowledge.forEach((c) => appendMathLi(ul, c));
    root.appendChild(el('section', { className: 'topic-block' }, [el('h2', { text: '本质知识（教学改写）' }), ul]));
  }

  if (topic.learningObjectives?.length) {
    const ul = el('ul', { className: 'topic-list' });
    topic.learningObjectives.forEach((c) => appendMathLi(ul, c));
    root.appendChild(el('section', { className: 'topic-block' }, [el('h2', { text: '学习目标' }), ul]));
  }

  if (topic.formulas?.length) {
    const box = el('section', { className: 'topic-block' }, [el('h2', { text: '公式' })]);
    topic.formulas.forEach((f) => {
      box.appendChild(renderKatex(f.latex, true));
      if (f.note) appendMathText(box, f.note, 'formula-note');
    });
    root.appendChild(box);
  }

  if (topic.derivationNotes?.length) {
    const ul = el('ul', { className: 'topic-list' });
    topic.derivationNotes.forEach((d) => appendMathLi(ul, `${d.from} → ${d.note}`));
    root.appendChild(el('section', { className: 'topic-block' }, [el('h2', { text: '推导要点' }), ul]));
  }

  if (topic.conditions?.length) {
    const ul = el('ul', { className: 'topic-list' });
    topic.conditions.forEach((c) => appendMathLi(ul, c));
    root.appendChild(el('section', { className: 'topic-block' }, [el('h2', { text: '条件与假设' }), ul]));
  }

  if (topic.keyPoints?.length) {
    const ul = el('ul', { className: 'topic-list' });
    topic.keyPoints.forEach((c) => appendMathLi(ul, c));
    root.appendChild(el('section', { className: 'topic-block' }, [el('h2', { text: '要点' }), ul]));
  }

  if (topic.misconceptions?.length) {
    const ul = el('ul', { className: 'topic-list' });
    topic.misconceptions.forEach((c) => appendMathLi(ul, c));
    root.appendChild(el('section', { className: 'topic-block' }, [el('h2', { text: '常见误解' }), ul]));
  }

  if (topic.examples?.length) {
    const sec = el('section', { className: 'topic-block' }, [el('h2', { text: '例题' })]);
    topic.examples.forEach((ex) => {
      sec.appendChild(el('h3', { text: ex.title || '例题' }));
      appendMathText(sec, ex.prompt);
      if (ex.steps?.length) {
        const ol = el('ol', { className: 'topic-list example-steps' });
        ex.steps.forEach((s) => appendMathLi(ol, s));
        sec.appendChild(ol);
      }
      if (ex.solution) appendMathText(sec, ex.solution, 'example-sol');
      if (ex.solutionLatex) {
        sec.appendChild(renderKatex(ex.solutionLatex, true));
      }
    });
    root.appendChild(sec);
  }

  if (topic.examTips?.length) {
    const ul = el('ul', { className: 'topic-list' });
    topic.examTips.forEach((c) => appendMathLi(ul, c));
    root.appendChild(el('section', { className: 'topic-block' }, [el('h2', { text: 'AP 提示' }), ul]));
  }

  if (topic.modules?.length) {
    const sec = el('section', { className: 'topic-block' }, [el('h2', { text: '可视化实验' })]);
    topic.modules.forEach((m) => {
      sec.appendChild(el('a', { className: 'entry-row hit-target', href: `#/m/${m.id}` }, [el('h3', { text: m.title })]));
    });
    root.appendChild(sec);
  }

  if (topic.connections?.length) {
    const ul = el('ul', { className: 'topic-list' });
    topic.connections.forEach((c) => appendMathLi(ul, c));
    root.appendChild(el('section', { className: 'topic-block' }, [el('h2', { text: '知识联系' }), ul]));
  }

  if (topic.related?.length) {
    const sec = el('section', { className: 'topic-block' }, [el('h2', { text: '相关知识点' })]);
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
    root.appendChild(sec);
  }

  if (topic.intuitionDetailed || topic.development || topic.checks || topic.summary) {
    if (topic.intuitionDetailed) {
      const sec = el('section', { className: 'topic-block' }, [el('h2', { text: '直觉理解' })]);
      appendMathText(sec, topic.intuitionDetailed);
      root.appendChild(sec);
    }
    if (topic.development?.length) {
      const ol = el('ol', { className: 'topic-list' });
      topic.development.forEach((s) => appendMathLi(ol, s));
      root.appendChild(el('section', { className: 'topic-block' }, [el('h2', { text: '循序展开' }), ol]));
    }
    if (topic.checks?.length) {
      const ul = el('ul', { className: 'topic-list' });
      topic.checks.forEach((s) => appendMathLi(ul, s));
      root.appendChild(el('section', { className: 'topic-block' }, [el('h2', { text: '自测' }), ul]));
    }
    if (topic.summary) {
      const sec = el('section', { className: 'topic-block' }, [el('h2', { text: '小结' })]);
      appendMathText(sec, topic.summary);
      root.appendChild(sec);
    }
  }

  // Physics exam figures (Mechanics / E&M) — size-constrained SVG gallery
  try {
    if (subject === 'mech' || subject === 'em') {
      mountTopicExamFigures(root, topic);
    }
  } catch (_) {}

  try {
    const papers = pastPapersForTopic(`${chapterId}:${code}`);
    if (papers?.length) {
      const sec = el('section', { className: 'topic-block' }, [el('h2', { text: '历年真题' })]);
      sec.appendChild(el('p', { className: 'muted', text: '仅官方 PDF 链接与原创复述，不含试题原文。' }));
      papers.slice(0, 12).forEach((e) => {
        const row = el('div', { className: 'pastpaper-row' });
        row.appendChild(el('p', { text: `${e.year} ${e.examLabel} Q${e.question}${e.set ? ' Set'+e.set : ''} · ${e.paraphrase}` }));
        if (e.pdfQuestions) row.appendChild(el('a', { className: 'hit-target', href: e.pdfQuestions, target: '_blank', rel: 'noopener', text: '试题 PDF' }));
        if (e.pdfScoring) row.appendChild(el('a', { className: 'hit-target', href: e.pdfScoring, target: '_blank', rel: 'noopener', text: '评分指南' }));
        row.appendChild(el('a', { className: 'hit-target', href: `#/pastpapers/${e.course}/${e.year}`, text: '索引' }));
        sec.appendChild(row);
      });
      sec.appendChild(el('a', { className: 'entry-row hit-target', href: `#/pastpapers/${subject}`, text: '查看全部历年真题' }));
      root.appendChild(sec);
    }
  } catch (_) {}

  root.appendChild(
    el('p', { className: 'topic-status muted', text: isCompleted(id) ? '已完成' : isVisited(id) ? '已读' : '' }),
  );
  root.appendChild(
    el('a', { className: 'entry-row hit-target', href: `#/${subject}/map`, text: '在知识图谱中查看' }),
  );

  main.appendChild(root);
}

export { topicId };
