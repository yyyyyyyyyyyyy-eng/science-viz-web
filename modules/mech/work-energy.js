import { mountExamFigures } from '../physics/exam-figures.js';
import { el, slider, select, checkbox, fitCanvas, readoutBar } from '../../js/ui.js';
import { themeColors, rgba } from '../../js/theme.js';
import { startAnimLoop } from '../anim-loop.js';

function createBase(viz, controls) {
  const wrap = el('div', { className: 'canvas-wrap' });
  const canvas = el('canvas'); wrap.appendChild(canvas); viz.appendChild(wrap);
  const readouts = readoutBar(viz);
  let h0 = 5, mu = 0, m = 1, s = 0, v = 0, running = true;
  const incline = Math.PI / 6; // fixed 30° incline; track length follows h0
  const sinth = Math.sin(incline);
  const costh = Math.cos(incline);
  controls.appendChild(el('h2', { text: '控制' }));
  slider(controls, { label: '高度 m', min: 1, max: 8, step: 0.1, value: h0, format: (v) => v.toFixed(1), onChange: (val) => { h0 = val; s = 0; v = 0; } });
  slider(controls, { label: '摩擦 μ', min: 0, max: 0.4, step: 0.01, value: mu, format: (v) => v.toFixed(2), onChange: (val) => { mu = val; s = 0; v = 0; } });
  function draw() {
    const T = themeColors();
    const { width: w, height: h } = fitCanvas(canvas, wrap);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = T.canvasBg; ctx.fillRect(0, 0, w, h);
    const g = 9.8;
    const track = h0 / sinth;
    const a = g * (sinth - mu * costh); // along-track
    const dt = 0.016;
    if (running && s < track && a > 0) {
      s = Math.min(track, s + v * dt + 0.5 * a * dt * dt);
    } else if (a <= 0) {
      v = 0;
    }
    const height = Math.max(0, h0 - s * sinth);
    const U = m * g * height;
    const E0 = m * g * h0;
    const Wf = mu * m * g * costh * s; // friction work magnitude
    // Conservation: K = E0 - U - Wf, so E + Wf = E0 at every step.
    const K = Math.max(0, E0 - U - Wf);
    if (running) v = Math.sqrt(Math.max(0, (2 * K) / m));
    // track
    ctx.strokeStyle = T.border; ctx.lineWidth = 2; ctx.beginPath();
    ctx.moveTo(40, 60); ctx.lineTo(w - 40, h - 60); ctx.stroke();
    const t = s / track;
    const bx = 40 + t * (w - 80), by = 60 + t * (h - 120);
    ctx.fillStyle = T.accent; ctx.fillRect(bx - 10, by - 10, 20, 20);
    const maxE = E0 + 1;
    const barX = w - 110;
    ctx.fillStyle = rgba(T.accent, 0.45); ctx.fillRect(barX, h - 40 - (U / maxE) * (h - 80), 28, (U / maxE) * (h - 80));
    ctx.fillStyle = T.accent; ctx.fillRect(barX + 36, h - 40 - (K / maxE) * (h - 80), 28, (K / maxE) * (h - 80));
    ctx.fillStyle = T.textMuted; ctx.font = '12px sans-serif';
    ctx.fillText('U', barX + 8, h - 20); ctx.fillText('K', barX + 44, h - 20);
    readouts.replaceChildren();
    readouts.appendChild(el('span', { text: `U=${U.toFixed(1)} J  K=${K.toFixed(1)} J  v=${v.toFixed(2)} m/s` }));
    readouts.appendChild(el('span', { text: `E=${(U + K).toFixed(1)} J  W_f=${Wf.toFixed(1)} J` }));
    readouts.appendChild(el('span', { text: `E+W_f≈${(U + K + Wf).toFixed(1)} (E₀=${E0.toFixed(1)})` }));
  }
  return startAnimLoop(wrap, draw);
}

export function create(viz, controls) {
  const inst = createBase(viz, controls);
  mountExamFigures(viz, 'work-energy');
  return inst;
}
