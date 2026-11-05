import { el, clear } from './ui-shared.js';
import { SUBJECT_LABEL } from './ui-shared.js';
import { getChapter } from '../modules/registry.js';
import { markVisited, markCompleted, isCompleted, isVisited } from './progress.js';
import { loadCourseData } from '../data/courses.js';
import { pastPapersForTopic } from '../data/shared/pastpapers.js';

function topicId(subject, chapterId, code) {
  return `topic:${subject}/${chapterId}/${code}`;
}

function renderKatex(tex) {
  const span = el('span', { className: 'tex' });
  if (window.katex) {
    try {
      window.katex.render(tex, span, { throwOnError: false, displayMode: true });
      return span;
    } catch (_) {}
  }
  span.textContent = tex;
  return span;
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

  root.appendChild(el('section', { className: 'topic-block' }, [
    el('h2', { text: '定义' }),
    el('p', { text: topic.definition }),
    topic.intuition ? el('p', { className: 'muted', text: topic.intuition }) : null,
  ]));

  if (topic.essentialKnowledge?.length) {
    const ul = el('ul', { className: 'topic-list' });
    topic.essentialKnowledge.forEach((c) => ul.appendChild(el('li', { text: c })));
    root.appendChild(el('section', { className: 'topic-block' }, [el('h2', { text: '本质知识（教学改写）' }), ul]));
  }

  if (topic.learningObjectives?.length) {
    const ul = el('ul', { className: 'topic-list' });
    topic.learningObjectives.forEach((c) => ul.appendChild(el('li', { text: c })));
    root.appendChild(el('section', { className: 'topic-block' }, [el('h2', { text: '学习目标' }), ul]));
  }

  if (topic.formulas?.length) {
    const box = el('section', { className: 'topic-block' }, [el('h2', { text: '公式' })]);
    topic.formulas.forEach((f) => {
      box.appendChild(renderKatex(f.latex));
      if (f.note) box.appendChild(el('p', { className: 'formula-note', text: f.note }));
    });
    root.appendChild(box);
  }

  if (topic.derivationNotes?.length) {
    const ul = el('ul', { className: 'topic-list' });
    topic.derivationNotes.forEach((d) => ul.appendChild(el('li', { text: `${d.from} → ${d.note}` })));
    root.appendChild(el('section', { className: 'topic-block' }, [el('h2', { text: '推导要点' }), ul]));
  }

  if (topic.conditions?.length) {
    const ul = el('ul', { className: 'topic-list' });
    topic.conditions.forEach((c) => ul.appendChild(el('li', { text: c })));
    root.appendChild(el('section', { className: 'topic-block' }, [el('h2', { text: '条件与假设' }), ul]));
  }

  if (topic.keyPoints?.length) {
    const ul = el('ul', { className: 'topic-list' });
    topic.keyPoints.forEach((c) => ul.appendChild(el('li', { text: c })));
    root.appendChild(el('section', { className: 'topic-block' }, [el('h2', { text: '要点' }), ul]));
  }

  if (topic.misconceptions?.length) {
    const ul = el('ul', { className: 'topic-list' });
    topic.misconceptions.forEach((c) => ul.appendChild(el('li', { text: c })));
    root.appendChild(el('section', { className: 'topic-block' }, [el('h2', { text: '常见误解' }), ul]));
  }

  if (topic.examples?.length) {
    const sec = el('section', { className: 'topic-block' }, [el('h2', { text: '例题' })]);
    topic.examples.forEach((ex) => {
      sec.appendChild(el('h3', { text: ex.title }));
      sec.appendChild(el('p', { text: ex.prompt }));
      sec.appendChild(el('p', { className: 'example-sol', text: ex.solution }));
    });
    root.appendChild(sec);
  }

  if (topic.examTips?.length) {
    const ul = el('ul', { className: 'topic-list' });
    topic.examTips.forEach((c) => ul.appendChild(el('li', { text: c })));
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
    topic.connections.forEach((c) => ul.appendChild(el('li', { text: c })));
    root.appendChild(el('section', { className: 'topic-block' }, [el('h2', { text: '知识联系' }), ul]));
  }

  if (topic.related?.length) {
    const sec = el('section', { className: 'topic-block' }, [el('h2', { text: '相关知识点' })]);
    topic.related.forEach((r) => {
      sec.appendChild(
        el('a', {
          className: 'entry-row hit-target',
          href: `#/t/${r.subject}/${r.chapterId}/${r.code}`,
          text: `${r.relation} · ${r.code} ${r.title}`,
        }),
      );
    });
    root.appendChild(sec);
  }


  // Self-study blocks
  if (topic.intuitionDetailed || topic.development || topic.checks || topic.summary) {
    if (topic.intuitionDetailed) {
      root.appendChild(el('section', { className: 'topic-block' }, [el('h2', { text: '直觉理解' }), el('p', { text: topic.intuitionDetailed })]));
    }
    if (topic.development?.length) {
      const ol = el('ol', { className: 'topic-list' });
      topic.development.forEach((s) => ol.appendChild(el('li', { text: s })));
      root.appendChild(el('section', { className: 'topic-block' }, [el('h2', { text: '循序展开' }), ol]));
    }
    if (topic.checks?.length) {
      const ul = el('ul', { className: 'topic-list' });
      topic.checks.forEach((s) => ul.appendChild(el('li', { text: s })));
      root.appendChild(el('section', { className: 'topic-block' }, [el('h2', { text: '自测' }), ul]));
    }
    if (topic.summary) {
      root.appendChild(el('section', { className: 'topic-block' }, [el('h2', { text: '小结' }), el('p', { text: topic.summary })]));
    }
  }

  // Past papers tagged to this topic
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
