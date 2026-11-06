/**
 * Shared DOM helpers — imported by ui.js and pages.js (avoid cycles).
 */
export const SUBJECT_LABEL = {
  bio: '生物',
  math: '微积分',
  mech: '力学',
  em: '电磁',
  physics: '物理',
};

export function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'className') node.className = v;
    else if (k === 'text') node.textContent = v;
    else if (k === 'html') node.innerHTML = v;
    else if (k === 'hidden' && v) node.hidden = true;
    else if (k.startsWith('on') && typeof v === 'function') node.addEventListener(k.slice(2).toLowerCase(), v);
    else if (v === false || v == null) continue;
    else if (v === true) node.setAttribute(k, '');
    else node.setAttribute(k, String(v));
  }
  for (const child of [].concat(children)) {
    if (child == null || child === false) continue;
    node.appendChild(typeof child === 'string' ? document.createTextNode(child) : child);
  }
  return node;
}

export function clear(node) {
  while (node.firstChild) node.removeChild(node.firstChild);
}

export function breadcrumb(parts, label = '面包屑') {
  const nav = el('nav', { className: 'breadcrumb', 'aria-label': label });
  parts.forEach((p, i) => {
    if (i) nav.appendChild(el('span', { className: 'crumb-sep', 'aria-hidden': 'true', text: '/' }));
    if (p.href && !p.current) {
      nav.appendChild(el('a', { className: 'hit-target', href: p.href, text: p.label }));
    } else {
      nav.appendChild(el('span', { className: p.current ? 'crumb-current' : '', 'aria-current': p.current ? 'page' : null, text: p.label }));
    }
  });
  return nav;
}

export function rowLink(m, i) {
  const num = String(i + 1).padStart(2, '0');
  return el('a', { className: 'module-row hit-target', href: `#/m/${m.id}`, role: 'listitem' }, [
    el('span', { className: 'row-num', text: num }),
    el('div', { className: 'row-body' }, [
      el('h3', { className: 'row-title', text: m.title }),
      el('p', { className: 'row-desc', text: m.summary }),
      el('p', { className: 'row-meta', text: m.chapter || '' }),
    ]),
  ]);
}
