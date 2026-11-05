import { el, slider, select, checkbox, fitCanvas, observeSize, readoutBar } from '../../js/ui.js';
import { themeColors, rgba } from '../../js/theme.js';

export function create(viz, controls) {
  const wrap = el('div', { className: 'canvas-wrap' });
  const canvas = el('canvas'); wrap.appendChild(canvas); viz.appendChild(wrap);
  const readouts = readoutBar(viz);
  let h0 = 5, mu = 0, m = 1, x = 0, v = 0, running = true;
  controls.appendChild(el('h2', { text: '控制' }));
  slider(controls, { label: '高度 m', min: 1, max: 8, step: 0.1, value: h0, format: (v) => v.toFixed(1), onChange: (v) => { h0 = v; x = 0; v = 0; } });
  slider(controls, { label: '摩擦 μ', min: 0, max: 0.4, step: 0.01, value: mu, format: (v) => v.toFixed(2), onChange: (v) => { mu = v; x = 0; v = 0; } });
  function draw() {
    const T = themeColors();
    const { width: w, height: h } = fitCanvas(canvas, wrap);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = T.canvasBg; ctx.fillRect(0, 0, w, h);
    const g = 9.8, track = 6;
    const height = h0 * (1 - x / track);
    const U = m * g * Math.max(height, 0);
    const K = 0.5 * m * v * v;
    const a = g * (h0 / track) - mu * g; // rough incline equiv
    if (running && x < track) { v += a * 0.016; x += Math.max(v, 0) * 0.016; }
    if (x >= track) { x = track; v = Math.max(0, v); }
    // track
    ctx.strokeStyle = T.border; ctx.beginPath();
    ctx.moveTo(40, 60); ctx.lineTo(w - 40, h - 60); ctx.stroke();
    const t = x / track;
    const bx = 40 + t * (w - 80), by = 60 + t * (h - 120);
    ctx.fillStyle = T.accent; ctx.fillRect(bx - 10, by - 10, 20, 20);
    // energy bars
    const maxE = m * g * h0 + 1;
    const barX = w - 100;
    ctx.fillStyle = rgba(T.accent, 0.5); ctx.fillRect(barX, h - 40 - (U / maxE) * (h - 80), 30, (U / maxE) * (h - 80));
    ctx.fillStyle = T.accent; ctx.fillRect(barX + 40, h - 40 - (K / maxE) * (h - 80), 30, (K / maxE) * (h - 80));
    ctx.fillStyle = T.textMuted; ctx.font = '12px sans-serif';
    ctx.fillText('U', barX + 8, h - 20); ctx.fillText('K', barX + 48, h - 20);
    readouts.replaceChildren();
    readouts.appendChild(el('span', { text: `U=${U.toFixed(1)} J  K=${K.toFixed(1)} J` }));
    readouts.appendChild(el('span', { text: `E=${(U + K).toFixed(1)} J` }));
  }
  observeSize(wrap, draw);
  const loop = () => { draw(); requestAnimationFrame(loop); }; loop();
  return { destroy() {} };
}
