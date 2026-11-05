import { mountExamFigures } from '../physics/exam-figures.js';
import { el, slider, select, checkbox, fitCanvas, observeSize, readoutBar } from '../../js/ui.js';
import { themeColors, rgba } from '../../js/theme.js';

function createBase(viz, controls) {
  const wrap = el('div', { className: 'canvas-wrap' });
  const canvas = el('canvas'); wrap.appendChild(canvas); viz.appendChild(wrap);
  const readouts = readoutBar(viz);
  let R = 80, Q = 2, rg = 120;
  controls.appendChild(el('h2', { text: '控制' }));
  slider(controls, { label: '球半径 R', min: 40, max: 120, step: 1, value: R, format: (v) => String(Math.round(v)), onChange: (v) => { R = v; } });
  slider(controls, { label: '高斯面 r', min: 20, max: 180, step: 1, value: rg, format: (v) => String(Math.round(v)), onChange: (v) => { rg = v; } });
  slider(controls, { label: 'Q', min: 0.5, max: 5, step: 0.1, value: Q, format: (v) => v.toFixed(1), onChange: (v) => { Q = v; } });
  function draw() {
    const T = themeColors();
    const { width: w, height: h } = fitCanvas(canvas, wrap);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = T.canvasBg; ctx.fillRect(0, 0, w, h);
    const cx = w * 0.4, cy = h / 2;
    ctx.strokeStyle = T.border; ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.stroke();
    ctx.strokeStyle = T.accent; ctx.setLineDash([6, 4]); ctx.beginPath(); ctx.arc(cx, cy, rg, 0, Math.PI * 2); ctx.stroke(); ctx.setLineDash([]);
    const k = 1; // geometric units
    const E = rg >= R ? k * Q / (rg * rg) : k * Q * rg / (R * R * R);
    // E vs r plot
    const px = w * 0.62, py = 40, pw = w * 0.32, ph = h - 80;
    ctx.strokeStyle = T.border; ctx.strokeRect(px, py, pw, ph);
    ctx.strokeStyle = T.accent; ctx.beginPath();
    for (let i = 0; i <= 80; i++) {
      const r = 5 + (i / 80) * 200;
      const e = r >= R ? k * Q / (r * r) : k * Q * r / (R * R * R);
      const X = px + (i / 80) * pw, Y = py + ph - Math.min(e, 0.05) / 0.05 * ph;
      if (i === 0) ctx.moveTo(X, Y); else ctx.lineTo(X, Y);
    }
    ctx.stroke();
    readouts.replaceChildren();
    readouts.appendChild(el('span', { text: `E(r)=${E.toFixed(4)} (几何单位)` }));
    readouts.appendChild(el('span', { text: rg >= R ? '面外 ~ 点电荷' : '面内 ~ r（均匀球）' }));
  }
  observeSize(wrap, draw);
  const loop = () => { draw(); requestAnimationFrame(loop); }; loop();
  return { destroy() {} };
}

export function create(viz, controls) {
  const inst = createBase(viz, controls);
  mountExamFigures(viz, 'gauss-law');
  return inst;
}
