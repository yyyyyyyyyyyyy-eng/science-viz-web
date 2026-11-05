import { el, clear } from './ui-shared.js';
import { SUBJECT_LABEL } from './ui-shared.js';

function tex(latex, display = true) {
  const span = el('span', { className: 'tex' });
  if (window.katex) {
    try {
      window.katex.render(latex, span, { throwOnError: false, displayMode: display });
      return span;
    } catch (_) {}
  }
  span.textContent = latex;
  return span;
}

export function renderFormulasPage(main, { subject, groups, title, subtitle }) {
  clear(main);
  const crumbSub = subject === 'physics' ? '力学/电磁' : SUBJECT_LABEL[subject] || subject;
  const homeHref = subject === 'physics' ? '#/mech' : `#/${subject}`;
  main.appendChild(
    el('nav', { className: 'breadcrumb', 'aria-label': '面包屑' }, [
      el('a', { className: 'hit-target', href: '#/', text: '首页' }),
      el('span', { className: 'crumb-sep', text: '/' }),
      el('a', { className: 'hit-target', href: homeHref, text: crumbSub }),
      el('span', { className: 'crumb-sep', text: '/' }),
      el('span', { className: 'crumb-current', text: '公式表' }),
    ]),
  );
  main.appendChild(el('header', { className: 'page-hero compact' }, [
    el('h1', { text: title }),
    subtitle ? el('p', { className: 'lead', text: subtitle }) : null,
  ]));

  const toc = el('nav', { className: 'formula-toc', 'aria-label': '分组' });
  groups.forEach((g) => {
    toc.appendChild(el('a', { className: 'hit-target', href: `#group-${g.id}`, text: g.title }));
  });
  main.appendChild(toc);

  groups.forEach((g) => {
    const sec = el('section', { className: 'formula-group', id: `group-${g.id}` }, [
      el('h2', { text: g.title }),
      el('p', { className: 'muted', text: g.titleEn }),
    ]);
    g.rows.forEach((row) => {
      const details = el('details', { className: 'formula-row' });
      const summary = el('summary', { className: 'formula-summary hit-target' });
      summary.appendChild(tex(row.latex, true));
      details.appendChild(summary);
      const body = el('div', { className: 'formula-body' });
      if (row.symbols?.length) {
        const ul = el('ul', { className: 'topic-list' });
        row.symbols.forEach((sy) => ul.appendChild(el('li', {}, [tex(sy.s, false), document.createTextNode(' — ' + sy.m)])));
        body.append(el('h3', { text: '符号' }), ul);
      }
      if (row.conditions) body.append(el('h3', { text: '条件' }), el('p', { text: row.conditions }));
      if (row.derivation) body.append(el('h3', { text: '推导要点' }), el('p', { text: row.derivation }));
      if (row.example) {
        body.append(el('h3', { text: '例' }));
        body.append(el('p', {}, [document.createTextNode('问：'), tex(row.example.q.replace(/^\\\(|\\\)$/g, ''), false)]));
        body.append(el('p', {}, [document.createTextNode('答：'), tex(row.example.a, false)]));
      }
      if (row.related?.length) {
        const links = el('div', { className: 'formula-related' });
        row.related.forEach((href) => links.appendChild(el('a', { className: 'hit-target', href, text: '相关知识点' })));
        body.append(el('h3', { text: '相关' }), links);
      }
      details.appendChild(body);
      sec.appendChild(details);
    });
    main.appendChild(sec);
  });
}
