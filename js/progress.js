/**
 * Visit / completion tracking in localStorage.
 * visited: opened a module; completed: stayed >= dwell or clicked mark (we auto-complete on visit after short dwell via markVisited + markCompleted on leave/timeout)
 */
const VISIT_KEY = 'science-viz-visited';
const DONE_KEY = 'science-viz-completed';
const LAST_KEY = 'science-viz-last-module';

function readSet(key) {
  try {
    const raw = localStorage.getItem(key);
    const arr = raw ? JSON.parse(raw) : [];
    return new Set(Array.isArray(arr) ? arr : []);
  } catch (_) {
    return new Set();
  }
}

function writeSet(key, set) {
  try {
    localStorage.setItem(key, JSON.stringify([...set]));
  } catch (_) { /* ignore */ }
}

export function getLastModuleId() {
  try {
    return localStorage.getItem(LAST_KEY);
  } catch (_) {
    return null;
  }
}

export function setLastModuleId(id) {
  try {
    localStorage.setItem(LAST_KEY, id);
  } catch (_) { /* ignore */ }
}

export function markVisited(id) {
  const s = readSet(VISIT_KEY);
  s.add(id);
  writeSet(VISIT_KEY, s);
  // Topic / practice progress IDs use ':', module IDs do not. Only modules
  // belong in the “continue last experiment” slot on the home page.
  if (!String(id).includes(':')) setLastModuleId(id);
  return s;
}

export function markCompleted(id) {
  const s = readSet(DONE_KEY);
  s.add(id);
  writeSet(DONE_KEY, s);
  markVisited(id);
  return s;
}

export function clearCompleted(id) {
  const s = readSet(DONE_KEY);
  if (s.delete(id)) writeSet(DONE_KEY, s);
  return s;
}

export function isVisited(id) {
  return readSet(VISIT_KEY).has(id);
}

export function isCompleted(id) {
  return readSet(DONE_KEY).has(id);
}

export function getVisited() {
  return readSet(VISIT_KEY);
}

export function getCompleted() {
  return readSet(DONE_KEY);
}

export function progressForIds(ids) {
  const done = readSet(DONE_KEY);
  const visited = readSet(VISIT_KEY);
  const total = ids.length || 1;
  const completed = ids.filter((id) => done.has(id)).length;
  const seen = ids.filter((id) => visited.has(id)).length;
  return {
    total: ids.length,
    completed,
    visited: seen,
    ratio: completed / total,
    label: `${completed}/${ids.length}`,
  };
}
