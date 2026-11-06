/**
 * Theme tokens for Canvas drawing — reads live CSS variables so light/dark stay in sync.
 */
const FALLBACKS = {
  '--canvas-plot': '#f3eee6',
  '--plot-grid': '#e6dfd8',
  '--plot-axis': '#8e8b82',
  '--plot-text': '#6c6a64',
  '--plot-text-strong': '#141413',
  '--plot-surface': '#efe9de',
  '--accent': '#c9785c',
  '--accent-soft': '#5b7cfa',
  '--bio': '#3aa876',
  '--math': '#4b6fd6',
  '--physics': '#c9785c',
  '--warn': '#c9a227',
  '--danger': '#c64545',
  '--ok': '#3aa876',
  '--text': '#141413',
  '--text-muted': '#6c6a64',
  '--border': '#e6dfd8',
  '--bg-elev': '#f5f0e8',
  '--on-accent': '#ffffff',
};

export function cssVar(name, fallback) {
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return v || fallback || FALLBACKS[name] || '#888';
}

export function themeColors() {
  return {
    canvasBg: cssVar('--canvas-plot'),
    grid: cssVar('--plot-grid'),
    axis: cssVar('--plot-axis'),
    text: cssVar('--plot-text'),
    textStrong: cssVar('--plot-text-strong'),
    surface: cssVar('--plot-surface'),
    accent: cssVar('--accent'),
    accentSoft: cssVar('--accent-soft'),
    bio: cssVar('--bio'),
    math: cssVar('--math'),
    physics: cssVar('--physics'),
    warn: cssVar('--warn'),
    danger: cssVar('--danger'),
    ok: cssVar('--ok'),
    ink: cssVar('--text'),
    muted: cssVar('--text-muted'),
    border: cssVar('--border'),
    elev: cssVar('--bg-elev'),
    onAccent: cssVar('--on-accent'),
  };
}

/** Parse #rgb / #rrggbb to rgba() string */
export function rgba(hex, alpha) {
  let h = String(hex || '').replace('#', '').trim();
  if (h.length === 3) h = h.split('').map((c) => c + c).join('');
  if (h.length !== 6) return `rgba(0,0,0,${alpha})`;
  const n = parseInt(h, 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return `rgba(${r},${g},${b},${alpha})`;
}

const STORAGE_KEY = 'science-viz-theme';

function systemTheme() {
  try {
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  } catch (_) {
    return 'light';
  }
}

function syncThemeToggle(theme) {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  const next = theme === 'dark' ? '浅色' : '深色';
  btn.setAttribute('aria-label', `切换到${next}主题`);
  btn.setAttribute('title', `切换到${next}主题`);
  btn.setAttribute('data-current-theme', theme);
}

export function getStoredTheme() {
  try {
    const t = localStorage.getItem(STORAGE_KEY);
    if (t === 'light' || t === 'dark') return t;
  } catch (_) { /* ignore */ }
  return systemTheme();
}

export function applyTheme(theme) {
  const next = theme === 'dark' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', next);
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch (_) { /* ignore */ }
  syncThemeToggle(next);
  window.dispatchEvent(new CustomEvent('themechange', { detail: { theme: next } }));
  return next;
}

export function toggleTheme() {
  const cur = document.documentElement.getAttribute('data-theme') || getStoredTheme();
  return applyTheme(cur === 'dark' ? 'light' : 'dark');
}

export function initTheme() {
  return applyTheme(getStoredTheme());
}
