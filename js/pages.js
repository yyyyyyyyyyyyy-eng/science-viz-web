/**
 * Start / catalog / subject / chapter / paths — one editorial page system.
 */
import {
  SUBJECTS,
  SUBJECT_ORDER,
  PATHS,
  getSubjectTree,
  getModulesBySubject,
  getModulesByChapter,
  getChapterBySubjectAndId,
  getPathModules,
  getModule,
  getChapter,
  getChapterTopicRows,
} from '../modules/registry.js';
import { el, clear, rowLink, breadcrumb, SUBJECT_LABEL } from './ui-shared.js';
import {
  getLastModuleId,
  progressForIds,
  isVisited,
  isCompleted,
} from './progress.js';

function topicsOfChapter(chapter) {
  return (chapter?.topics || []).map((t) => t);
}

function topicInfoFromHref(href) {
  const match = String(href || '').match(/^#\/t\/([^/]+)\/([^/]+)\/(.+)$/);
  if (!match) return null;
  return { subject: match[1], chapterId: match[2], code: match[3] };
}

function topicDisplayLabel(subject, chapterId, code) {
  const chapter = getChapter(subject, chapterId);
  const topic = (chapter?.topics || []).find((t) => String(t.code) === String(code));
  if (!topic) return String(code);
  const titleZh = topic.titleZh || topic.title || '';
  const titleEn = topic.titleEn || '';
  const title = [titleZh, titleEn].filter(Boolean).join(' · ');
  return title ? `${code} ${title}` : String(code);
}

function topicLinkLabel(link) {
  const info = topicInfoFromHref(link?.href);
  if (info) {
    const chapter = getChapter(info.subject, info.chapterId);
    const topic = (chapter?.topics || []).find((t) => String(t.code) === String(info.code));
    if (topic) return topicDisplayLabel(info.subject, info.chapterId, info.code);
  }
  return link?.label || link?.topicId || '';
}

function topicProgress(subject, chapter) {
  const ids = topicsOfChapter(chapter).map((t) => `topic:${subject}/${chapter.id}/${t.code}`);
  return progressForIds(ids);
}

function statusMark(id) {
  if (isCompleted(id)) return el('span', { className: 'status-pill done', text: '完成' });
  if (isVisited(id)) return el('span', { className: 'status-pill seen', text: '已读' });
  return null;
}

function progressBar(prog, className = '') {
  const wrap = el('div', { className: `progress-block ${className}`.trim() });
  wrap.appendChild(el('div', { className: 'progress-meta', text: `完成 ${prog.label}` }));
  const track = el('div', { className: 'progress-track' });
  const fill = el('div', { className: 'progress-fill' });
  fill.style.width = `${Math.round(prog.ratio * 100)}%`;
  track.appendChild(fill);
  wrap.appendChild(track);
  return wrap;
}

export function renderStart(main) {
  clear(main);
  const lastId = getLastModuleId();
  const last = lastId ? getModule(lastId) : null;

  const hero = el('section', { className: 'home-hero' }, [
    el('p', { className: 'home-kicker', text: 'AP Biology · Calculus BC · Physics C' }),
    el('h1', { text: '科学可视化' }),
    el('p', {
      className: 'home-lede',
      text: '从交互实验进入知识点，再用练习和知识图谱把一整个单元连起来。',
    }),
    el('div', { className: 'hero-actions' }, [
      el('a', {
        className: 'btn primary hit-target',
        href: last ? `#/m/${last.id}` : '#/bio',
        text: last ? '继续上次的实验' : '从生物开始',
      }),
      el('a', { className: 'btn hit-target', href: '#/all', text: '全部模块' }),
    ]),
  ]);
  main.appendChild(hero);

  if (last) {
    main.appendChild(
      el('a', { className: 'continue-row hit-target', href: `#/m/${last.id}` }, [
        el('span', { className: 'continue-label', text: '继续' }),
        el('span', { className: 'continue-title', text: last.title }),
        el('span', { className: 'continue-meta', text: SUBJECT_LABEL[last.subject] || '' }),
        el('span', { className: 'row-arrow', 'aria-hidden': 'true', text: '→' }),
      ]),
    );
  }

  const list = el('section', { className: 'subject-index', 'aria-label': '学科' });
  SUBJECT_ORDER.forEach((sid, i) => {
    const sub = SUBJECTS[sid];
    const tree = getSubjectTree(sid);
    const topicCount = tree.reduce((n, c) => n + (c.topics || []).length, 0);
    const moduleCount = getModulesBySubject(sid).length;
    list.appendChild(
      el('a', { className: `subject-row hit-target ${sid}`, href: `#/${sid}` }, [
        el('span', { className: 'subject-num', text: String(i + 1).padStart(2, '0') }),
        el('div', { className: 'subject-body' }, [
          el('div', { className: 'subject-name-row' }, [
            el('span', { className: 'subject-dot', 'aria-hidden': 'true' }),
            el('h2', { className: 'subject-name', text: sub.name }),
            el('span', { className: 'subject-en', text: sub.en || '' }),
          ]),
          el('span', { className: 'subject-meta', text: `${tree.length} 单元 · ${topicCount} 知识点 · ${moduleCount} 实验` }),
        ]),
        el('span', { className: 'subject-go', 'aria-hidden': 'true', text: '→' }),
      ]),
    );
  });
  main.appendChild(list);

  const secondary = el('nav', { className: 'home-secondary', 'aria-label': '更多' });
  [
    ['#/paths', '学习路径'],
    ['#/math/formulas', '公式表'],
    ['#/pastpapers', '历年真题'],
    ['#/credits', '来源与许可'],
  ].forEach(([href, label]) => {
    secondary.appendChild(el('a', { className: 'hit-target', href, text: label }));
  });
  main.appendChild(secondary);

  const touchFirst = window.innerWidth <= 640
    || window.matchMedia?.('(hover: none), (pointer: coarse)')?.matches;
  main.appendChild(el('p', {
    className: 'home-hint',
    text: touchFirst
      ? '点按右上角搜索 · Tap search in the top right'
      : 'Ctrl / Cmd + K 搜索知识点与模块',
  }));
  document.title = '科学可视化平台';
}

export function renderCatalog(main, { modules, query = '' } = {}) {
  clear(main);
  const list = modules || getModulesBySubjectAll();
  main.appendChild(breadcrumb([{ href: '#/', label: '首页' }, { label: '索引', current: true }]));
  main.appendChild(
    el('header', { className: 'page-hero compact' }, [
      el('p', { className: 'page-kicker', text: '索引' }),
      el('h1', { text: '全部模块' }),
      el('p', {
        className: 'lead',
        text: query ? `「${query}」 ${list.length} 项` : `${list.length} 个交互实验 · 按学科分组`,
      }),
    ]),
  );
  if (!list.length) {
    main.appendChild(el('div', { className: 'empty-state', text: '没有匹配的模块。' }));
    return;
  }
  const grid = el('div', { className: 'catalog-grid' });
  for (const sid of SUBJECT_ORDER) {
    const items = list.filter((m) => m.subject === sid);
    if (!items.length) continue;
    const section = el('section', { className: 'section-block', id: `cat-${sid}` });
    section.appendChild(
      sectionLabelEl(sid, `${SUBJECT_LABEL[sid]} · ${items.length}`),
    );
    const index = el('div', { className: 'module-index', role: 'list' });
    items.forEach((m, i) => {
      const row = rowLink(m, i);
      const mark = statusMark(m.id);
      if (mark) row.querySelector('.row-body')?.appendChild(mark);
      index.appendChild(row);
    });
    section.appendChild(index);
    grid.appendChild(section);
  }
  main.appendChild(grid);
}

function getModulesBySubjectAll() {
  return SUBJECT_ORDER.flatMap((sid) => getModulesBySubject(sid));
}

function sectionLabelEl(subject, text) {
  return el('h2', { className: 'section-label' }, [
    el('span', { className: `subject-dot ${subject}`, 'aria-hidden': 'true' }),
    el('span', { text }),
  ]);
}

export function renderSubjectLanding(main, subject) {
  clear(main);
  const sub = SUBJECTS[subject];
  if (!sub) {
    renderStart(main);
    return;
  }
  const tree = getSubjectTree(subject);
  const allTopicIds = tree.flatMap((c) =>
    (c.topics || []).map((t) => `topic:${subject}/${c.id}/${t.code}`),
  );
  const prog = progressForIds(allTopicIds);
  const first = tree[0];
  const prepCount = tree.filter((c) => c.layer === 'prep').length;
  const apCount = tree.length - prepCount;
  const unitLead = `${sub.en || sub.name} · ${prepCount ? `${prepCount} 预备 + ` : ''}${apCount} AP 单元 · ${allTopicIds.length} 知识点`;

  main.appendChild(breadcrumb([{ href: '#/', label: '首页' }, { label: sub.name, current: true }]));
  main.appendChild(
    el('header', { className: `page-hero subject-hero ${subject}` }, [
      el('p', { className: 'page-kicker', text: sub.en || '' }),
      el('h1', { text: sub.name }),
      el('p', { className: 'lead', text: unitLead }),
      progressBar(prog),
      el('div', { className: 'hero-actions' }, [
        first
          ? el('a', { className: 'btn primary hit-target', href: `#/${subject}/${first.id}`, text: '开始学习' })
          : null,
        el('a', { className: 'btn hit-target', href: `#/${subject}/map`, text: '知识图谱' }),
        subject === 'math' || subject === 'mech' || subject === 'em'
          ? el('a', { className: 'btn hit-target', href: `#/${subject}/formulas`, text: '公式表' })
          : null,
        el('a', { className: 'btn hit-target', href: `#/pastpapers/${subject}`, text: '历年真题' }),
      ]),
    ]),
  );

  const groups = [
    { key: 'prep', label: '预备课程', chapters: tree.filter((c) => c.layer === 'prep') },
    { key: 'ap', label: 'AP 单元', chapters: tree.filter((c) => c.layer !== 'prep') },
  ].filter((g) => g.chapters.length);

  groups.forEach((group) => {
    const section = el('section', { className: 'unit-section' });
    section.appendChild(
      el('div', { className: 'section-head' }, [
        el('h2', { className: 'section-label', text: group.label }),
        el('span', { className: 'section-count', text: `${group.chapters.length} 个单元` }),
      ]),
    );
    const list = el('div', { className: 'unit-list' });
    group.chapters.forEach((ch) => {
      const tp = topicProgress(subject, ch);
      const modules = getModulesByChapter(subject, ch.id);
      const meta = [
        `${(ch.topics || []).length} 知识点`,
        modules.length ? `${modules.length} 实验` : '实验待上线',
      ].join(' · ');
      list.appendChild(
        el('a', { className: 'unit-row hit-target', href: `#/${subject}/${ch.id}` }, [
          el('span', { className: 'unit-code', text: ch.unitCode || '' }),
          el('div', { className: 'unit-main' }, [
            el('h3', { text: ch.titleZh || chapterTitle(ch) }),
            el('p', { className: 'unit-meta', text: meta }),
          ]),
          el('span', { className: 'unit-progress' }, [
            el('span', { className: 'unit-progress-label', text: tp.label }),
            el('span', { className: 'unit-bar', 'aria-hidden': 'true' }, [
              el('span', { className: 'unit-bar-fill', style: `width:${Math.round(tp.ratio * 100)}%` }),
            ]),
          ]),
          el('span', { className: 'row-arrow', 'aria-hidden': 'true', text: '→' }),
        ]),
      );
    });
    section.appendChild(list);
    main.appendChild(section);
  });

  document.title = `${sub.name} · 科学可视化`;
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
  const rows = getChapterTopicRows(subject, chapterId);
  const tree = getSubjectTree(subject);
  const chIndex = tree.findIndex((c) => c.id === chapterId);
  const prev = chIndex > 0 ? tree[chIndex - 1] : null;
  const next = chIndex >= 0 && chIndex < tree.length - 1 ? tree[chIndex + 1] : null;
  const tp = topicProgress(subject, { ...chapter, topics: rows });

  main.appendChild(
    breadcrumb([
      { href: '#/', label: '首页' },
      { href: `#/${subject}`, label: sub.name },
      { label: chapter.titleZh || chapterTitle(chapter), current: true },
    ]),
  );
  main.appendChild(
    el('header', { className: `page-hero chapter-hero ${subject}` }, [
      el('p', { className: 'page-kicker', text: `${chapter.layer === 'prep' ? '预备' : 'AP'} · Unit ${chapter.unitCode}` }),
      el('h1', { text: chapter.titleZh || chapterTitle(chapter) }),
      el('p', { className: 'lead', text: chapter.titleEn || chapter.summary || '' }),
      progressBar(tp),
      el('div', { className: 'hero-actions' }, [
        rows[0]
          ? el('a', {
            className: 'btn primary hit-target',
            href: `#/t/${subject}/${chapterId}/${rows[0].code}`,
            text: '开始知识点',
          })
          : modules[0]
            ? el('a', { className: 'btn primary hit-target', href: `#/m/${modules[0].id}`, text: '开始实验' })
            : null,
        el('a', { className: 'btn hit-target', href: `#/${subject}/practice/${chapterId}`, text: '单元练习' }),
        el('a', { className: 'btn hit-target', href: `#/${subject}/map`, text: '知识图谱' }),
      ]),
    ]),
  );

  const topicSection = el('section', { className: 'topic-index' });
  topicSection.appendChild(
    el('div', { className: 'section-head' }, [
      el('h2', { className: 'section-label', text: '知识点' }),
      el('span', { className: 'section-count', text: `${rows.length} 个` }),
    ]),
  );
  rows.forEach((t) => {
    const href = `#/t/${subject}/${chapterId}/${t.code}`;
    const row = el('a', { className: 'topic-row hit-target', href }, [
      el('span', { className: 'topic-code', text: t.code }),
      el('span', { className: 'topic-title', text: t.titleZh }),
      el('span', { className: 'row-arrow', 'aria-hidden': 'true', text: '→' }),
    ]);
    const mark = statusMark(`topic:${subject}/${chapterId}/${t.code}`);
    if (mark) row.insertBefore(mark, row.lastChild);
    topicSection.appendChild(row);
  });
  main.appendChild(topicSection);

  if (modules.length) {
    const sec = el('section', { className: 'section-block experiment-section' });
    sec.appendChild(
      el('div', { className: 'section-head' }, [
        el('h2', { className: 'section-label', text: '交互实验' }),
        el('span', { className: 'section-count', text: `${modules.length} 个` }),
      ]),
    );
    const index = el('div', { className: 'module-index', role: 'list' });
    modules.forEach((m, i) => index.appendChild(rowLink(m, i)));
    sec.appendChild(index);
    main.appendChild(sec);
  }

  const pager = el('nav', { className: 'page-pager', 'aria-label': '单元导航' }, [
    prev
      ? el('a', { className: 'pager-link prev hit-target', href: `#/${subject}/${prev.id}` }, [
          el('span', { className: 'pager-label', text: '上一单元' }),
          el('span', { className: 'pager-title', text: prev.titleZh || chapterTitle(prev) }),
        ])
      : el('span', { className: 'pager-link prev disabled' }),
    next
      ? el('a', { className: 'pager-link next hit-target', href: `#/${subject}/${next.id}` }, [
          el('span', { className: 'pager-label', text: '下一单元' }),
          el('span', { className: 'pager-title', text: next.titleZh || chapterTitle(next) }),
        ])
      : el('span', { className: 'pager-link next disabled' }),
  ]);
  main.appendChild(pager);

  document.title = `${chapter.titleZh || chapterTitle(chapter)} · ${sub.name} · 科学可视化`;
}

function chapterTitle(ch) {
  return String(ch?.name || '').replace(/^Unit\s+\S+\s*·\s*/, '') || ch?.id || '';
}

export function renderPaths(main) {
  clear(main);
  main.appendChild(breadcrumb([{ href: '#/', label: '首页' }, { label: '学习路径', current: true }]));
  main.appendChild(
    el('header', { className: 'page-hero compact' }, [
      el('p', { className: 'page-kicker', text: '路径' }),
      el('h1', { text: '学习路径' }),
      el('p', { className: 'lead', text: '按课程主线串联实验，适合从零开始或系统复习。' }),
    ]),
  );
  PATHS.forEach((p) => {
    const mods = getPathModules(p);
    const prog = progressForIds(mods.map((m) => m.id));
    const block = el('section', { className: 'path-block' }, [
      el('div', { className: 'section-head' }, [
        el('h2', { className: 'section-label', text: p.title }),
        el('span', { className: 'section-count', text: `${mods.length} 步` }),
      ]),
      el('p', { className: 'lead path-summary', text: p.summary }),
      progressBar(prog),
    ]);
    const steps = el('ol', { className: 'path-steps' });
    mods.forEach((m, i) => {
      steps.appendChild(
        el('li', { className: 'path-step' }, [
          el('a', { className: 'hit-target', href: `#/m/${m.id}` }, [
            el('span', { className: 'path-step-num', text: String(i + 1).padStart(2, '0') }),
            el('span', { className: 'path-step-title', text: m.title }),
            el('span', { className: 'row-arrow', 'aria-hidden': 'true', text: '→' }),
          ]),
        ]),
      );
    });
    block.appendChild(steps);
    main.appendChild(block);
  });
  document.title = '学习路径 · 科学可视化';
}

export async function renderCredits(main, { isCurrent = () => true } = {}) {
  const { CREDITS, COLLEGE_BOARD_INDEX } = await import('../data/shared/credits.js');
  if (!isCurrent()) return null;
  clear(main);
  const root = el('article', { className: 'topic-page reading-page credits-page' });
  main.appendChild(breadcrumb([{ href: '#/', label: '首页' }, { label: '来源与许可', current: true }]));
  root.appendChild(el('header', { className: 'page-hero compact' }, [
    el('p', { className: 'page-kicker', text: '来源' }),
    el('h1', { text: CREDITS.titleZh }),
    el('p', { className: 'lead', text: CREDITS.titleEn }),
  ]));
  const content = el('div', { className: 'reading-column' });
  content.appendChild(el('p', { text: CREDITS.intro }));
  CREDITS.sources.forEach((s) => {
    const sec = el('section', { className: 'topic-block' });
    sec.appendChild(el('h2', { text: s.title }));
    sec.appendChild(el('p', { className: 'muted', text: `${s.license}${s.url ? ' · ' + s.url : ''}` }));
    sec.appendChild(el('p', { text: s.note }));
    if (s.url) sec.appendChild(el('a', { className: 'hit-target text-link', href: s.url, target: '_blank', rel: 'noopener', text: '打开来源' }));
    content.appendChild(sec);
  });
  content.appendChild(el('h2', { className: 'section-label', text: COLLEGE_BOARD_INDEX.titleZh }));
  content.appendChild(el('p', { className: 'muted', text: COLLEGE_BOARD_INDEX.disclaimer }));
  COLLEGE_BOARD_INDEX.courses.forEach((c) => {
    const sec = el('section', { className: 'topic-block' });
    sec.appendChild(el('h2', { text: c.label }));
    sec.appendChild(el('a', { className: 'entry-row hit-target', href: c.ced, target: '_blank', rel: 'noopener', text: '课程与 CED' }));
    if (c.freeResponse) sec.appendChild(el('a', { className: 'entry-row hit-target', href: c.freeResponse, target: '_blank', rel: 'noopener', text: '历年 FRQ 官方页（外链）' }));
    c.units.forEach((u) => {
      sec.appendChild(el('p', { className: 'muted', text: `Unit ${u.code} · ${u.title}${u.hint ? ' — ' + u.hint : ''}` }));
    });
    content.appendChild(sec);
  });
  root.appendChild(content);
  main.appendChild(root);
  document.title = '来源与许可 · 科学可视化';
  return null;
}

export async function renderPastPapers(main, { subject = null, year = null, isCurrent = () => true } = {}) {
  const { PAST_PAPERS } = await import('../data/shared/pastpapers.js');
  if (!isCurrent()) return null;
  const initialSubject = subject && subject !== 'all' ? subject : null;
  clear(main);
  main.appendChild(
    breadcrumb([
      { href: '#/', label: '首页' },
      ...(initialSubject ? [{ href: `#/${initialSubject}`, label: SUBJECT_LABEL[initialSubject] || initialSubject }] : []),
      { label: '历年真题', current: true },
    ]),
  );
  main.appendChild(el('header', { className: 'page-hero compact' }, [
    el('p', { className: 'page-kicker', text: '真题' }),
    el('h1', { text: '历年真题索引' }),
    el('p', { className: 'lead', text: 'College Board 已发布 FRQ · 仅外链与原创复述' }),
    el('p', { className: 'muted', text: PAST_PAPERS.disclaimer }),
  ]));

  let curSub = initialSubject;
  let curYear = year ? Number(year) : null;

  function filterHash() {
    if (!curSub && !curYear) return '#/pastpapers';
    if (!curSub) return `#/pastpapers/all/${curYear}`;
    return `#/pastpapers/${curSub}${curYear ? `/${curYear}` : ''}`;
  }

  function syncFilterHash() {
    const next = filterHash();
    if (location.hash === next) return;
    try {
      history.replaceState(null, '', next);
    } catch (_) {
      location.hash = next;
    }
  }

  const filterWrap = el('div', { className: 'filter-block' });
  const courseFilters = el('div', { className: 'practice-filters', role: 'group', 'aria-label': '学科筛选' });
  const yearFilters = el('div', { className: 'practice-filters', role: 'group', 'aria-label': '年份筛选' });
  const list = el('div', { className: 'paper-list' });
  const countEl = el('p', { className: 'filter-count muted', 'aria-live': 'polite' });
  const courseButtons = [];
  const yearButtons = [];

  function paintFilters() {
    courseButtons.forEach((b, i) => {
      const on = [null, 'bio', 'math', 'mech', 'em'][i] === curSub;
      b.classList.toggle('active', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    yearButtons.forEach((b, i) => {
      const on = [null, 2026, 2025, 2024, 2023, 2020][i] === curYear;
      b.classList.toggle('active', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }

  function redraw() {
    clear(list);
    let items = PAST_PAPERS.entries;
    if (curSub) items = items.filter((e) => e.course === curSub);
    if (curYear) items = items.filter((e) => e.year === curYear);
    items = items.slice().sort((a, b) => b.year - a.year || a.examLabel.localeCompare(b.examLabel) || a.question - b.question);
    countEl.textContent = `${items.length} 条`;
    for (const e of items) {
      const card = el('article', { className: 'pastpaper-entry' });
      card.appendChild(el('div', { className: 'practice-tags' }, [
        el('span', { className: 'tag tag-year', text: String(e.year) }),
        el('span', { className: 'tag', text: e.examLabel }),
        el('span', { className: 'tag', text: `Q${e.question}` }),
        e.set ? el('span', { className: 'tag', text: `Set ${e.set}` }) : null,
        el('span', { className: 'tag', text: e.difficulty }),
        e.pdfMissing ? el('span', { className: 'tag', text: 'PDF 见官网' }) : null,
        e.verified ? el('span', { className: 'tag tag-ok', text: '已核验 PDF' }) : el('span', { className: 'tag tag-warn', text: e.verification || '未核验' }),
      ]));
      const titleQ = e.question ? `FRQ ${e.question}` : '入口说明';
      card.appendChild(el('h2', { text: `${e.year} ${e.examLabel} ${titleQ}` }));
      card.appendChild(el('p', { text: e.paraphrase }));
      card.appendChild(el('p', { className: 'practice-source muted', text: e.copyrightNote }));
      const links = el('div', { className: 'practice-filters paper-links' });
      if (e.pdfQuestions) links.appendChild(el('a', { className: 'btn hit-target', href: e.pdfQuestions, target: '_blank', rel: 'noopener', text: '试题 PDF' }));
      if (e.pdfScoring) links.appendChild(el('a', { className: 'btn hit-target', href: e.pdfScoring, target: '_blank', rel: 'noopener', text: '评分指南' }));
      links.appendChild(el('a', { className: 'btn hit-target', href: e.hub, target: '_blank', rel: 'noopener', text: '官方历年页' }));
      card.appendChild(links);
      if (e.solutionOutline?.steps?.length) {
        const sol = el('details', { className: 'practice-sol' });
        sol.appendChild(el('summary', { className: 'hit-target', text: '原创解题提纲（含知识点链接）' }));
        e.solutionOutline.steps.forEach((st) => {
          sol.appendChild(el('p', { text: typeof st === 'string' ? st : st.text }));
          const linksArr = (typeof st === 'object' && st.links) || e.solutionOutline.topicLinks || [];
          linksArr.forEach((lk) => {
            sol.appendChild(el('a', { className: 'entry-row hit-target', href: lk.href, text: topicLinkLabel(lk) }));
          });
        });
        card.appendChild(sol);
      }
      if (e.topics?.length) {
        const tops = el('p', { className: 'muted paper-topics' });
        tops.appendChild(document.createTextNode('知识点：'));
        e.topics.forEach((tid) => {
          const [ch, code] = tid.split(':');
          const label = topicDisplayLabel(e.course, ch, code);
          tops.appendChild(el('a', { className: 'hit-target text-link', href: `#/t/${e.course}/${ch}/${code}`, text: ` ${label} ` }));
        });
        card.appendChild(tops);
      }
      if (e.hubLinks) {
        const hubs = el('div', { className: 'practice-filters paper-links' });
        Object.entries(e.hubLinks).forEach(([k, url]) => {
          if (k === 'mathAb') return;
          hubs.appendChild(el('a', { className: 'btn hit-target', href: url, target: '_blank', rel: 'noopener', text: `${k} 历年页` }));
        });
        card.appendChild(hubs);
      }
      list.appendChild(card);
    }
    if (!items.length) list.appendChild(el('div', { className: 'empty-state', text: '该筛选下暂无条目。' }));
  }

  [
    { id: null, lab: '全部' },
    { id: 'bio', lab: '生物' },
    { id: 'math', lab: '微积分' },
    { id: 'mech', lab: '力学' },
    { id: 'em', lab: '电磁' },
  ].forEach((c) => {
    const b = el('button', { type: 'button', className: 'filter-chip hit-target', text: c.lab });
    b.addEventListener('click', () => { curSub = c.id; paintFilters(); redraw(); syncFilterHash(); });
    courseButtons.push(b);
    courseFilters.appendChild(b);
  });
  [null, 2026, 2025, 2024, 2023, 2020].forEach((y) => {
    const b = el('button', { type: 'button', className: 'filter-chip hit-target', text: y ? String(y) : '各年' });
    b.addEventListener('click', () => { curYear = y; paintFilters(); redraw(); syncFilterHash(); });
    yearButtons.push(b);
    yearFilters.appendChild(b);
  });
  filterWrap.append(courseFilters, yearFilters, countEl);
  main.append(filterWrap, list);
  paintFilters();
  redraw();
  document.title = '历年真题索引 · 科学可视化';
  return null;
}
