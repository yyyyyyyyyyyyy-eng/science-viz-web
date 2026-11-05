/**
 * Start / catalog / subject / chapter / paths — minimal chrome, detailed topic links.
 */
import {
  SUBJECTS,
  SUBJECT_ORDER,
  PATHS,
  getSubjectTree,
  getModulesBySubject,
  getModulesByChapter,
  getChapterBySubjectAndId,
  getFirstModuleOfSubject,
  getFirstModuleOfChapter,
  getPathModules,
  getModule,
  getChapterTopicRows,
} from '../modules/registry.js';
import { el, clear, rowLink, SUBJECT_LABEL } from './ui-shared.js';
import {
  getLastModuleId,
  progressForIds,
  isVisited,
  isCompleted,
} from './progress.js';

function crumb(parts) {
  const nav = el('nav', { className: 'breadcrumb', 'aria-label': '面包屑' });
  parts.forEach((p, i) => {
    if (i) nav.appendChild(el('span', { className: 'crumb-sep', text: '/' }));
    if (p.href && !p.current) nav.appendChild(el('a', { className: 'hit-target', href: p.href, text: p.label }));
    else nav.appendChild(el('span', { className: p.current ? 'crumb-current' : '', text: p.label }));
  });
  return nav;
}

function progressBar(prog) {
  const wrap = el('div', { className: 'progress-block' });
  wrap.appendChild(el('div', { className: 'progress-meta', text: prog.label }));
  const track = el('div', { className: 'progress-track' });
  const fill = el('div', { className: 'progress-fill' });
  fill.style.width = `${Math.round(prog.ratio * 100)}%`;
  track.appendChild(fill);
  wrap.appendChild(track);
  return wrap;
}

function statusMark(id) {
  if (isCompleted(id)) return el('span', { className: 'status-pill done', text: '完成' });
  if (isVisited(id)) return el('span', { className: 'status-pill seen', text: '已读' });
  return null;
}

export function renderStart(main) {
  clear(main);
  const lastId = getLastModuleId();
  const last = lastId ? getModule(lastId) : null;

  main.appendChild(
    el('section', { className: 'start-hero' }, [
      el('h1', { text: '科学可视化' }),
      el('p', { className: 'lead', text: 'AP 生物 / 微积分 BC / 物理 C 力学与电磁 · 含预备课程' }),
    ]),
  );

  const steps = el('ol', { className: 'step-list compact' });
  ['选入口', '调参数', '看下一步'].forEach((t, i) => {
    steps.appendChild(
      el('li', { className: 'step-item' }, [
        el('span', { className: 'step-num', text: String(i + 1).padStart(2, '0') }),
        el('h3', { text: t }),
      ]),
    );
  });
  main.appendChild(el('section', { className: 'start-steps' }, [steps]));
  main.appendChild(el('p', {}, [
    el('a', { className: 'hit-target', href: '#/credits', text: '来源与许可 / College Board 索引' }),
    el('span', { text: ' · ' }),
    el('a', { className: 'hit-target', href: '#/pastpapers', text: '历年真题' }),
  ]));

  const grid = el('div', { className: 'entry-list' });
  [
    { href: '#/bio', title: '生物' },
    { href: '#/math', title: '微积分' },
    { href: '#/mech', title: '力学' },
    { href: '#/em', title: '电磁' },
    { href: '#/paths', title: '学习路径' },
    { href: last ? `#/m/${last.id}` : '#/all', title: last ? `继续：${last.title}` : '全部模块' },
  ].forEach((it) => {
    grid.appendChild(el('a', { className: 'entry-row hit-target', href: it.href }, [el('h3', { text: it.title })]));
  });
  main.appendChild(el('section', { className: 'start-entries' }, [grid]));
  main.appendChild(el('p', { className: 'tiny-hint', text: 'Ctrl/Cmd+K 搜索 · ← → 切换模块' }));
}

export function renderCatalog(main, { modules, query }) {
  clear(main);
  main.appendChild(crumb([{ href: '#/', label: '首页' }, { label: '索引', current: true }]));
  main.appendChild(
    el('header', { className: 'page-hero compact' }, [
      el('h1', { text: '全部模块' }),
      query ? el('p', { className: 'lead', text: `「${query}」 ${modules.length} 项` }) : null,
    ]),
  );
  if (!modules.length) {
    main.appendChild(el('div', { className: 'empty-state', text: '无匹配' }));
    return;
  }
  const grid = el('div', { className: 'catalog-grid' });
  for (const sid of SUBJECT_ORDER) {
    const list = modules.filter((m) => m.subject === sid);
    if (!list.length) continue;
    const section = el('section', { className: 'section-block', id: `cat-${sid}` });
    section.appendChild(
      el('h2', { className: 'section-title' }, [
        el('span', { className: `section-dot ${sid}` }),
        el('a', { href: `#/${sid}`, className: 'section-title-link hit-target', text: SUBJECT_LABEL[sid] }),
      ]),
    );
    const index = el('div', { className: 'module-index', role: 'list' });
    list.forEach((m, i) => {
      const row = rowLink(m, i);
      row.querySelector('.row-desc')?.remove();
      const mark = statusMark(m.id);
      if (mark) row.querySelector('.row-body')?.appendChild(mark);
      index.appendChild(row);
    });
    section.appendChild(index);
    grid.appendChild(section);
  }
  main.appendChild(grid);
}

export function renderSubjectLanding(main, subject) {
  clear(main);
  const sub = SUBJECTS[subject];
  if (!sub) {
    renderStart(main);
    return;
  }
  const tree = getSubjectTree(subject);
  const allIds = getModulesBySubject(subject).map((m) => m.id);
  const prog = progressForIds(allIds);
  const first = getFirstModuleOfSubject(subject);

  main.appendChild(crumb([{ href: '#/', label: '首页' }, { label: sub.name, current: true }]));
  main.appendChild(
    el('header', { className: 'page-hero compact' }, [
      el('h1', { text: sub.name }),
      el('p', { className: 'lead', text: sub.overview || sub.en }),
      progressBar(prog),
      el('div', { className: 'btn-row' }, [
        first ? el('a', { className: 'btn primary hit-target', href: `#/m/${first.id}`, text: '开始实验' }) : null,
        el('a', { className: 'btn hit-target', href: `#/${subject}/map`, text: '知识图谱' }),
        subject === 'math'
          ? el('a', { className: 'btn hit-target', href: '#/math/formulas', text: '公式表' })
          : (subject === 'mech' || subject === 'em')
            ? el('a', { className: 'btn hit-target', href: '#/physics/formulas', text: '公式表' })
            : null,
      ]),
    ]),
  );

  const list = el('section', { className: 'chapter-cards subject-chapter-grid' });
  tree.forEach((chapter) => {
    const modules = chapter.modules || [];
    const cp = progressForIds(modules.map((m) => m.id));
    const layer = chapter.layer === 'prep' ? '预备' : 'AP';
    list.appendChild(
      el('a', { className: 'chapter-row hit-target', href: `#/${subject}/${chapter.id}` }, [
        el('div', { className: 'chapter-row-main' }, [
          el('h3', { text: chapter.name }),
          el('p', { className: 'muted', text: layer }),
        ]),
        el('div', { className: 'chapter-row-meta' }, [
          el('span', { text: `${(chapter.topics || []).length} 点` }),
          el('span', { text: `${modules.length} 实验` }),
          el('span', { text: cp.label }),
        ]),
      ]),
    );
  });
  main.appendChild(list);
}

export function renderChapterPage(main, subject, chapterId) {
  clear(main);
  const sub = SUBJECTS[subject];
  const chapter = getChapterBySubjectAndId(subject, chapterId);
  if (!sub || !chapter) {
    renderSubjectLanding(main, subject || 'bio');
    return;
  }
  const modules = getModulesByChapter(subject, chapterId);
  const first = getFirstModuleOfChapter(subject, chapterId);
  const rows = getChapterTopicRows(subject, chapterId);

  main.appendChild(
    crumb([
      { href: '#/', label: '首页' },
      { href: `#/${subject}`, label: sub.name },
      { label: chapter.name, current: true },
    ]),
  );
  main.appendChild(
    el('header', { className: 'page-hero compact' }, [
      el('h1', { text: chapter.name }),
      el('p', { className: 'lead', text: chapter.titleEn || chapter.overview || '' }),
      first
        ? el('a', { className: 'btn primary hit-target', href: `#/m/${first.id}`, text: '从实验开始' })
        : null,
      el('a', { className: 'btn hit-target', href: `#/${subject}/practice/${chapterId}`, text: '单元练习' }),
      el('a', { className: 'btn hit-target', href: `#/pastpapers/${subject}`, text: '历年真题' }),
    ]),
  );

  const topicList = el('section', { className: 'topic-index' }, [el('h2', { text: '知识点' })]);
  rows.forEach((t) => {
    const href = t.modules.length
      ? `#/t/${subject}/${chapterId}/${t.code}`
      : `#/t/${subject}/${chapterId}/${t.code}`;
    const row = el('a', { className: 'topic-row hit-target', href }, [
      el('span', { className: 'topic-code', text: t.code }),
      el('span', { className: 'topic-title', text: t.titleZh }),
    ]);
    const tid = `topic:${subject}/${chapterId}/${t.code}`;
    const mark = statusMark(tid);
    if (mark) row.appendChild(mark);
    topicList.appendChild(row);
  });
  main.appendChild(topicList);

  if (modules.length) {
    const sec = el('section', { className: 'section-block' }, [el('h2', { text: '交互实验' })]);
    const index = el('div', { className: 'module-index', role: 'list' });
    modules.forEach((m, i) => index.appendChild(rowLink(m, i)));
    sec.appendChild(index);
    main.appendChild(sec);
  }
}

export function renderPaths(main) {
  clear(main);
  main.appendChild(crumb([{ href: '#/', label: '首页' }, { label: '路径', current: true }]));
  main.appendChild(el('header', { className: 'page-hero compact' }, [el('h1', { text: '学习路径' })]));
  PATHS.forEach((p) => {
    const mods = getPathModules(p);
    const prog = progressForIds(mods.map((m) => m.id));
    const block = el('section', { className: 'path-block' }, [
      el('h2', { text: p.title }),
      el('p', { className: 'lead', text: p.summary }),
      progressBar(prog),
    ]);
    const steps = el('ol', { className: 'path-steps' });
    mods.forEach((m, i) => {
      steps.appendChild(
        el('li', { className: 'path-step' }, [
          el('a', { className: 'hit-target', href: `#/m/${m.id}` }, [
            el('span', { className: 'path-step-num', text: String(i + 1).padStart(2, '0') }),
            el('span', { className: 'path-step-title', text: m.title }),
          ]),
        ]),
      );
    });
    block.appendChild(steps);
    main.appendChild(block);
  });
}


export function renderCredits(main) {
  clear(main);
  import('../data/shared/credits.js').then(({ CREDITS, COLLEGE_BOARD_INDEX }) => {
    clear(main);
    const root = el('article', { className: 'topic-page credits-page' });
    root.appendChild(el('h1', { text: CREDITS.titleZh }));
    root.appendChild(el('p', { className: 'lead', text: CREDITS.titleEn }));
    root.appendChild(el('p', { text: CREDITS.intro }));
    CREDITS.sources.forEach((s) => {
      const sec = el('section', { className: 'topic-block' });
      sec.appendChild(el('h2', { text: s.title }));
      sec.appendChild(el('p', { className: 'muted', text: `${s.license}${s.url ? ' · ' + s.url : ''}` }));
      sec.appendChild(el('p', { text: s.note }));
      if (s.url) sec.appendChild(el('a', { className: 'hit-target', href: s.url, target: '_blank', rel: 'noopener', text: '打开来源' }));
      root.appendChild(sec);
    });
    root.appendChild(el('h1', { text: COLLEGE_BOARD_INDEX.titleZh }));
    root.appendChild(el('p', { className: 'muted', text: COLLEGE_BOARD_INDEX.disclaimer }));
    COLLEGE_BOARD_INDEX.courses.forEach((c) => {
      const sec = el('section', { className: 'topic-block' });
      sec.appendChild(el('h2', { text: c.label }));
      sec.appendChild(el('a', { className: 'entry-row hit-target', href: c.ced, target: '_blank', rel: 'noopener', text: '课程与 CED' }));
      if (c.freeResponse) sec.appendChild(el('a', { className: 'entry-row hit-target', href: c.freeResponse, target: '_blank', rel: 'noopener', text: '历年 FRQ 官方页（外链）' }));
      c.units.forEach((u) => {
        sec.appendChild(el('p', { className: 'muted', text: `Unit ${u.code} · ${u.title}${u.hint ? ' — ' + u.hint : ''}` }));
      });
      root.appendChild(sec);
    });
    main.appendChild(root);
  });
}

export async function renderPastPapers(main, { subject = null, year = null } = {}) {
  clear(main);
  const { PAST_PAPERS } = await import('../data/shared/pastpapers.js');
  const root = el('article', { className: 'topic-page pastpapers-page' });
  root.appendChild(el('h1', { text: '历年真题索引' }));
  root.appendChild(el('p', { className: 'lead', text: 'College Board 已发布 FRQ · 仅外链与原创复述' }));
  root.appendChild(el('p', { className: 'muted', text: PAST_PAPERS.disclaimer }));

  const filters = el('div', { className: 'practice-filters' });
  const courses = [
    { id: null, lab: '全部' },
    { id: 'bio', lab: '生物' },
    { id: 'math', lab: '微积分' },
    { id: 'mech', lab: '力学' },
    { id: 'em', lab: '电磁' },
  ];
  let curSub = subject;
  let curYear = year ? Number(year) : null;
  const list = el('div', { className: 'practice-list' });

  function redraw() {
    clear(list);
    let items = PAST_PAPERS.entries;
    if (curSub) items = items.filter((e) => e.course === curSub);
    if (curYear) items = items.filter((e) => e.year === curYear);
    items = items.slice().sort((a, b) => b.year - a.year || a.examLabel.localeCompare(b.examLabel) || a.question - b.question);
    list.appendChild(el('p', { className: 'muted', text: `共 ${items.length} 条` }));
    for (const e of items) {
      const card = el('article', { className: 'practice-card' });
      card.appendChild(el('div', { className: 'practice-tags' }, [
        el('span', { className: 'tag', text: String(e.year) }),
        el('span', { className: 'tag', text: e.examLabel }),
        el('span', { className: 'tag', text: `Q${e.question}` }),
        e.set ? el('span', { className: 'tag', text: `Set ${e.set}` }) : null,
        el('span', { className: 'tag', text: e.difficulty }),
        e.pdfMissing ? el('span', { className: 'tag', text: 'PDF 见官网' }) : null,
      ]));
      card.appendChild(el('h2', { text: `${e.year} ${e.examLabel} FRQ ${e.question}` }));
      card.appendChild(el('p', { text: e.paraphrase }));
      card.appendChild(el('p', { className: 'practice-source muted', text: e.copyrightNote }));
      const links = el('div', { className: 'practice-filters' });
      if (e.pdfQuestions) links.appendChild(el('a', { className: 'btn hit-target', href: e.pdfQuestions, target: '_blank', rel: 'noopener', text: '试题 PDF' }));
      if (e.pdfScoring) links.appendChild(el('a', { className: 'btn hit-target', href: e.pdfScoring, target: '_blank', rel: 'noopener', text: '评分指南' }));
      links.appendChild(el('a', { className: 'btn hit-target', href: e.hub, target: '_blank', rel: 'noopener', text: '官方历年页' }));
      card.appendChild(links);
      if (e.solutionOutline?.steps?.length) {
        const sol = el('details', { className: 'practice-sol' });
        sol.appendChild(el('summary', { className: 'hit-target', text: '原创解题提纲（含知识点链接）' }));
        e.solutionOutline.steps.forEach((st) => {
          const row = el('p', { text: typeof st === 'string' ? st : st.text });
          sol.appendChild(row);
          const linksArr = (typeof st === 'object' && st.links) || e.solutionOutline.topicLinks || [];
          linksArr.forEach((lk) => {
            sol.appendChild(el('a', { className: 'entry-row hit-target', href: lk.href, text: lk.label || lk.topicId }));
          });
        });
        card.appendChild(sol);
      }
      const tops = el('p', { className: 'muted' });
      tops.appendChild(document.createTextNode('主题：'));
      e.topics.forEach((tid) => {
        const [ch, code] = tid.split(':');
        tops.appendChild(el('a', { className: 'hit-target', href: `#/t/${e.course}/${ch}/${code}`, text: ` ${tid} ` }));
      });
      card.appendChild(tops);
      list.appendChild(card);
    }
  }

  courses.forEach((c) => {
    const b = el('button', { type: 'button', className: 'btn hit-target', text: c.lab });
    b.addEventListener('click', () => { curSub = c.id; redraw(); });
    filters.appendChild(b);
  });
  [null, 2026, 2025, 2024, 2023, 2022, 2021, 2020].forEach((y) => {
    const b = el('button', { type: 'button', className: 'btn hit-target', text: y ? String(y) : '各年' });
    b.addEventListener('click', () => { curYear = y; redraw(); });
    filters.appendChild(b);
  });
  root.append(filters, list);
  main.appendChild(root);
  redraw();
}
