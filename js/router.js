export const SUBJECT_IDS = ['bio', 'math', 'mech', 'em'];

export function parseHash() {
  const raw = (location.hash || '#/').replace(/^#/, '') || '/';
  const path = raw.startsWith('/') ? raw : `/${raw}`;
  const parts = path.split('/').filter(Boolean);

  if (parts.length === 0) return { name: 'start' };
  if (parts[0] === 'all') return { name: 'catalog' };
  if (parts[0] === 'paths') return { name: 'paths' };
  if (parts[0] === 'm' && parts[1]) return { name: 'module', id: parts[1] };
  if (parts[0] === 't' && parts[1] && parts[2] && parts[3]) {
    return { name: 'topic', subject: parts[1], chapterId: parts[2], code: parts[3] };
  }
  if (parts[0] === 'physics' && parts[1] === 'formulas') {
    return { name: 'formulas', kind: 'physics' };
  }
  if (parts[0] === 'physics') {
    const rest = parts.slice(1);
    history.replaceState(null, '', rest.length ? `#/mech/${rest.join('/')}` : '#/mech');
    return parseHash();
  }
  if (parts[0] === 'credits' || parts[0] === 'sources' || parts[0] === 'cb' || parts[0] === 'college-board') {
    return { name: 'credits' };
  }
  if (parts[0] === 'pastpapers' || parts[0] === 'past-papers' || parts[0] === 'frq') {
    return { name: 'pastpapers', subject: parts[1] || null, year: parts[2] || null };
  }
  if (SUBJECT_IDS.includes(parts[0])) {
    if (parts[1] === 'map') return { name: 'map', subject: parts[0] };
    if (parts[1] === 'formulas') return { name: 'formulas', kind: parts[0] === 'math' ? 'math' : parts[0] };
    if (parts[1] === 'practice' && parts[2]) {
      return { name: 'practice', subject: parts[0], chapterId: parts[2] };
    }
    if (parts[1] === 'pastpapers') {
      return { name: 'pastpapers', subject: parts[0], year: parts[2] || null };
    }
    if (parts[1]) return { name: 'chapter', subject: parts[0], chapterId: parts[1] };
    return { name: 'subject', subject: parts[0] };
  }
  return { name: 'start' };
}

export function navigate(hash) {
  const next = hash.startsWith('#') ? hash : `#${hash}`;
  if (location.hash === next) window.dispatchEvent(new HashChangeEvent('hashchange'));
  else location.hash = next;
}

export function onRoute(handler) {
  const run = () => handler(parseHash());
  window.addEventListener('hashchange', run);
  run();
  return () => window.removeEventListener('hashchange', run);
}
