/**
 * Shared transport strip for student simulators.
 *
 * Every simulator mounts the same play/pause, step, reset and speed controls so
 * labels, keyboard shortcuts and hit targets stay consistent across subjects.
 *
 * Keyboard: Space toggles pause, R resets — but only while focus is inside the
 * simulator host and not inside a text field / select / contenteditable.
 */

import { el } from '../js/ui.js';

const STYLE_ID = 'sim-controls-style';
const STYLE_HREF = 'css/sim-controls.css';
const RATES = [0.25, 0.5, 1, 2];
const STEP = 1 / 60;

let cssReady = false;

function ensureStyle() {
  if (cssReady || document.getElementById(STYLE_ID)) {
    cssReady = true;
    return;
  }
  const link = document.createElement('link');
  link.id = STYLE_ID;
  link.rel = 'stylesheet';
  link.href = STYLE_HREF;
  document.head.appendChild(link);
  cssReady = true;
}

function isTypingTarget(node) {
  if (!node || node === document.body) return false;
  const tag = String(node.tagName || '').toLowerCase();
  if (tag === 'input' || tag === 'textarea' || tag === 'select') return true;
  if (node.isContentEditable) return true;
  const editable = node.closest?.('[contenteditable=""], [contenteditable="true"]');
  return !!editable;
}

function resetSliders(parent) {
  parent.querySelectorAll('.control-slider').forEach((group) => {
    if (typeof group.__simSliderReset === 'function') group.__simSliderReset();
  });
}

/** True when the document is using the dark palette. */
export function isDarkTheme() {
  return document.documentElement.getAttribute('data-theme') === 'dark';
}

/**
 * Axis/plot stroke colour that clears 4.5:1 against the dark canvas.
 * Light keeps the shared token so the existing light look is unchanged.
 */
export function simAxisColor(theme) {
  return isDarkTheme() ? '#a3a29b' : theme.axis;
}

/**
 * Mount the shared simulator transport strip.
 *
 * @param {HTMLElement} parent control panel / column that receives the strip
 * @param {{
 *   onReset?: () => void,
 *   step?: (() => void) | null,
 *   host?: HTMLElement | null,
 *   playing?: boolean,
 *   rate?: number,
 *   onPlayingChange?: ((playing: boolean) => void) | null,
 *   onRateChange?: ((rate: number) => void) | null,
 * }} [options]
 * @returns {{
 *   el: HTMLElement,
 *   isPlaying: () => boolean,
 *   getRate: () => number,
 *   setPlaying: (playing: boolean) => void,
 *   setRate: (rate: number) => void,
 *   stepOnce: () => void,
 *   reset: () => void,
 *   destroy: () => void,
 * }}
 */
export function mountSimControls(parent, options = {}) {
  ensureStyle();
  const onReset = typeof options.onReset === 'function' ? options.onReset : null;
  const step = typeof options.step === 'function' ? options.step : null;
  const onPlayingChange = typeof options.onPlayingChange === 'function' ? options.onPlayingChange : null;
  const onRateChange = typeof options.onRateChange === 'function' ? options.onRateChange : null;
  const host = options.host
    || parent.closest('.module-layout')
    || parent.closest('.module-view')
    || parent;
  let playing = options.playing !== false;
  let rate = RATES.includes(Number(options.rate)) ? Number(options.rate) : 1;
  let resetting = false;

  const root = el('div', {
    className: 'sim-controls',
    role: 'group',
    'aria-label': '模拟控制 · Simulation controls',
  });

  const playRow = el('div', { className: 'sim-controls__row' });
  const playBtn = el('button', {
    className: 'sim-btn sim-btn--play',
    type: 'button',
  });
  playRow.appendChild(playBtn);

  const actionRow = el('div', { className: 'sim-controls__row' });
  const stepBtn = el('button', {
    className: 'sim-btn sim-btn--half',
    type: 'button',
    text: '单步 · Step',
    'aria-label': '单步 · Step',
  });
  const resetBtn = el('button', {
    className: 'sim-btn sim-btn--half',
    type: 'button',
    text: '重置 · Reset',
    'aria-label': '重置 · Reset',
  });
  actionRow.append(stepBtn, resetBtn);

  const speed = el('div', { className: 'sim-speed' });
  speed.appendChild(el('span', { className: 'sim-speed-label', text: '速度 · Speed' }));
  const speedOptions = el('div', {
    className: 'sim-speed-options',
    role: 'group',
    'aria-label': '速度倍率 · Speed multiplier',
  });
  const speedButtons = new Map();
  for (const value of RATES) {
    const label = value === 1 ? '1×' : `${value}×`;
    const b = el('button', {
      className: 'sim-btn sim-speed-btn',
      type: 'button',
      text: label,
      'data-rate': String(value),
      'aria-label': `速度 ${value} 倍 · Speed ${value}×`,
    });
    b.addEventListener('click', () => setRate(value));
    speedButtons.set(value, b);
    speedOptions.appendChild(b);
  }
  speed.appendChild(speedOptions);
  root.append(playRow, actionRow, speed);

  function syncPlaying() {
    playBtn.textContent = playing ? '暂停 · Pause' : '播放 · Play';
    playBtn.setAttribute('aria-label', playing ? '暂停 · Pause' : '播放 · Play');
    playBtn.setAttribute('aria-pressed', playing ? 'true' : 'false');
    playBtn.classList.toggle('is-playing', playing);
  }

  function syncRate() {
    speedButtons.forEach((b, value) => {
      b.setAttribute('aria-pressed', value === rate ? 'true' : 'false');
    });
  }

  function setPlaying(next) {
    const v = !!next;
    if (v === playing) return;
    playing = v;
    syncPlaying();
    onPlayingChange?.(playing);
  }

  function setRate(next) {
    const v = Number(next);
    if (!RATES.includes(v) || v === rate) return;
    rate = v;
    syncRate();
    onRateChange?.(rate);
  }

  function stepOnce() {
    if (step) step();
  }

  function reset() {
    resetting = true;
    try {
      resetSliders(parent);
      onReset?.();
    } finally {
      resetting = false;
    }
  }

  playBtn.addEventListener('click', () => setPlaying(!playing));
  stepBtn.addEventListener('click', stepOnce);
  resetBtn.addEventListener('click', reset);

  // Space / R only act while focus is inside this simulator. Text fields keep
  // their own keys so page search and numeric editing are never stolen.
  function onKeydown(e) {
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.altKey) return;
    const active = document.activeElement;
    if (!active || !host.contains(active)) return;
    if (isTypingTarget(active)) return;
    const key = e.key;
    if (key === ' ' || key === 'Spacebar' || e.code === 'Space') {
      e.preventDefault();
      setPlaying(!playing);
    } else if (key === 'r' || key === 'R') {
      e.preventDefault();
      reset();
    }
  }
  document.addEventListener('keydown', onKeydown);

  // Make the simulator surface focusable so clicking the canvas (or tabbing)
  // creates the "focus is inside" state the shortcuts require.
  if (host && !host.hasAttribute('tabindex')) host.setAttribute('tabindex', '0');
  const surface = host?.querySelector?.('.canvas-wrap');
  if (surface && !surface.hasAttribute('tabindex')) {
    surface.setAttribute('tabindex', '0');
    surface.setAttribute('data-sim-focus', '');
  }

  syncPlaying();
  syncRate();
  parent.appendChild(root);

  return {
    el: root,
    isPlaying: () => playing,
    getRate: () => rate,
    isResetting: () => resetting,
    setPlaying,
    setRate,
    stepOnce,
    reset,
    destroy() {
      document.removeEventListener('keydown', onKeydown);
      root.remove();
    },
  };
}

/** Fixed step used by the shared transport. */
export const SIM_STEP = STEP;
