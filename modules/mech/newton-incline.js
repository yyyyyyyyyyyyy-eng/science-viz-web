import { mountExamFigures } from '../physics/exam-figures.js';
import { el, slider, select, checkbox, fitCanvas, observeSize, readoutBar } from '../../js/ui.js';
import { themeColors, rgba } from '../../js/theme.js';

function createBase(viz, controls) {
  const wrap = el('div', { className: 'canvas-wrap' });
  const canvas = el('canvas'); wrap.appendChild(canvas); viz.appendChild(wrap);
  const readouts = readoutBar(viz);
  let theta = 30, mu = 0.2, m = 2, t = 0, s = 0, v = 0;
  controls.appendChild(el('h2', { text: '控制' }));
  slider(controls, { label: '倾角 °', min: 0, max: 60, step: 1, value: theta, format: (v) => String(v), onChange: (v) => { theta = v; s = 0; v = 0; } });
  slider(controls, { label: 'μ', min: 0, max: 0.8, step: 0.01, value: mu, format: (v) => v.toFixed(2), onChange: (v) => { mu = v; s = 0; v = 0; } });
  slider(controls, { label: '质量 kg', min: 0.5, max: 5, step: 0.1, value: m, format: (v) => v.toFixed(1), onChange: (v) => { m = v; } });
  function draw() {
    const T = themeColors();
    const { width: w, height: h } = fitCanvas(canvas, wrap);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = T.canvasBg; ctx.fillRect(0, 0, w, h);
    const rad = (theta * Math.PI) / 180;
    const g = 9.8, N = m * g * Math.cos(rad), f = mu * N;
    const a = g * Math.sin(rad) - mu * g * Math.cos(rad);
    const dt = 0.016; if (a > 0) { v += a * dt; s += v * dt; } else { v = 0; }
    if (s > 4) { s = 0; v = 0; }
    const x0 = 40, y0 = h - 40, L = Math.min(w, h) * 0.85;
    const x1 = x0 + L * Math.cos(rad), y1 = y0 - L * Math.sin(rad);
    ctx.strokeStyle = T.border; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.lineTo(x1, y0); ctx.closePath(); ctx.stroke();
    const along = Math.min(s / 4, 1) * L * 0.85;
    const bx = x0 + along * Math.cos(rad) + 12 * Math.sin(rad);
    const by = y0 - along * Math.sin(rad) + 12 * Math.cos(rad);
    ctx.fillStyle = T.accent; ctx.fillRect(bx - 12, by - 12, 24, 24);
    // force vectors schematic at block
    ctx.strokeStyle = T.text; ctx.beginPath();
    ctx.moveTo(bx, by); ctx.lineTo(bx, by + 40); // weight-ish
    ctx.moveTo(bx, by); ctx.lineTo(bx + 30 * Math.cos(rad + Math.PI / 2), by - 30 * Math.sin(rad + Math.PI / 2));
    ctx.stroke();
    readouts.replaceChildren();
    readouts.appendChild(el('span', { text: `a=${a.toFixed(2)} m/s²` }));
    readouts.appendChild(el('span', { text: `N=${N.toFixed(1)} N  f=${f.toFixed(1)} N` }));
  }
  observeSize(wrap, draw);
  const loop = () => { draw(); requestAnimationFrame(loop); }; loop();
  return { destroy() {} };
}

export function create(viz, controls) {
  const inst = createBase(viz, controls);
  mountExamFigures(viz, 'newton-incline');
  return inst;
}
