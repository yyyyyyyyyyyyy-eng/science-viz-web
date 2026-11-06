import { el, clear, breadcrumb, SUBJECT_LABEL } from './ui-shared.js';

function tex(latex, display = true) {
  const span = el('span', { className: display ? 'tex' : 'tex-inline' });
  if (window.katex) {
    try {
      window.katex.render(latex, span, { throwOnError: false, displayMode: display });
      return span;
    } catch (_) {}
  }
  span.textContent = latex;
  return span;
}

function navHeight() {
  const value = getComputedStyle(document.documentElement).getPropertyValue('--nav-h').trim();
  return parseFloat(value) || 60;
}

export function renderFormulasPage(main, { subject, groups, title, subtitle }) {
  clear(main);
  const crumbSub = subject === 'physics' ? '物理 C' : SUBJECT_LABEL[subject] || subject;
  const homeHref = subject === 'physics' ? '#/mech' : `#/${subject}`;
  const rowCount = groups.reduce((n, g) => n + (g.rows?.length || 0), 0);

  main.appendChild(
    breadcrumb([
      { href: '#/', label: '首页' },
      { href: homeHref, label: crumbSub },
      { label: '公式表', current: true },
    ]),
  );
  main.appendChild(
    el('header', { className: 'page-hero compact formula-hero' }, [
      el('p', { className: 'page-kicker', text: '公式' }),
      el('h1', { text: title }),
      subtitle ? el('p', { className: 'lead', text: subtitle }) : null,
      el('p', { className: 'muted', text: `${groups.length} 组 · ${rowCount} 条` }),
    ]),
  );

  const layout = el('div', { className: 'formula-layout' });
  const rail = el('aside', { className: 'formula-rail', 'aria-label': '公式分组' });
  const content = el('div', { className: 'formula-content' });
  layout.append(rail, content);
  main.appendChild(layout);

  const railInner = el('div', { className: 'formula-rail-inner' });
  railInner.appendChild(el('p', { className: 'rail-kicker', text: '分组' }));
  const toc = el('nav', { className: 'formula-toc', 'aria-label': '公式分组' });
  const buttons = new Map();

  function jumpTo(id) {
    const target = document.getElementById(id);
    if (!target) return;
    const sticky = window.innerWidth <= 980 ? 58 : 0;
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight() - sticky - 20;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  groups.forEach((g, i) => {
    const id = `formula-group-${g.id}`;
    const b = el('button', {
      type: 'button',
      className: 'hit-target',
      'data-target': id,
      text: `${String(i + 1).padStart(2, '0')}　${g.title}`,
    });
    b.addEventListener('click', () => jumpTo(id));
    buttons.set(id, b);
    toc.appendChild(b);

    const sec = el('section', { className: 'formula-group', id });
    const head = el('div', { className: 'formula-group-head' }, [
      el('span', { className: 'formula-group-num', text: String(i + 1).padStart(2, '0') }),
      el('div', {}, [
        el('h2', { text: g.title }),
        g.titleEn ? el('p', { className: 'muted', text: g.titleEn }) : null,
      ]),
      el('span', { className: 'section-count', text: `${g.rows?.length || 0} 条` }),
    ]);
    sec.appendChild(head);

    (g.rows || []).forEach((row, ri) => {
      const details = el('details', { className: 'formula-row', id: `formula-${g.id}-${ri}` });
      const summary = el('summary', { className: 'formula-summary hit-target' });
      summary.appendChild(tex(row.latex, true));
      details.appendChild(summary);
      const body = el('div', { className: 'formula-body' });
      if (row.symbols?.length) {
        const ul = el('ul', { className: 'topic-list formula-symbols' });
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
        row.related.forEach((href) => {
          const code = String(href).split('/').pop() || '相关';
          links.appendChild(el('a', { className: 'hit-target text-link', href, text: code }));
        });
        body.append(el('h3', { text: '相关' }), links);
      }
      details.appendChild(body);
      sec.appendChild(details);
    });
    content.appendChild(sec);
  });

  railInner.appendChild(toc);
  rail.appendChild(railInner);

  let active = null;
  function paintActive() {
    let current = groups[0] ? `formula-group-${groups[0].id}` : null;
    for (const g of groups) {
      const target = document.getElementById(`formula-group-${g.id}`);
      if (target && target.getBoundingClientRect().top <= navHeight() + 140) {
        current = `formula-group-${g.id}`;
      }
    }
    if (current === active) return;
    active = current;
    buttons.forEach((b, id) => b.classList.toggle('active', id === active));
    if (window.innerWidth <= 980) {
      const b = buttons.get(active);
      if (b) {
        const tr = toc.getBoundingClientRect();
        const br = b.getBoundingClientRect();
        if (br.left < tr.left) toc.scrollLeft += br.left - tr.left - 8;
        else if (br.right > tr.right) toc.scrollLeft += br.right - tr.right + 8;
      }
    }
  }
  buttons.get(active)?.classList.add('active');

  let raf = 0;
  const onScroll = () => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      raf = 0;
      paintActive();
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  paintActive();

  return () => {
    window.removeEventListener('scroll', onScroll);
    if (raf) cancelAnimationFrame(raf);
  };
}
