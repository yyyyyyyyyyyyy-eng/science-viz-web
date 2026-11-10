import { mountExamFigures } from '../physics/exam-figures.js';
import { el, slider, select, checkbox, fitCanvas, readoutBar } from '../../js/ui.js';
import { themeColors, rgba } from '../../js/theme.js';
import { startAnimLoop } from '../anim-loop.js';

function createBase(viz, controls) {
  const wrap = el('div', { className: 'canvas-wrap' });
  const canvas = el('canvas'); wrap.appendChild(canvas); viz.appendChild(wrap);
  const readouts = readoutBar(viz);
  let Q = 2, probe = 100;
  controls.appendChild(el('h2', { text: '控制' }));
  slider(controls, { label: '源电荷 Q', min: -4, max: 4, step: 0.1, value: Q, format: (v) => v.toFixed(1), onChange: (v) => { Q = v; } });
  slider(controls, { label: '探测距离', min: 30, max: 200, step: 1, value: probe, format: (v) => String(Math.round(v)), onChange: (v) => { probe = v; } });
  function draw() {
    const T = themeColors();
    const { width: w, height: h } = fitCanvas(canvas, wrap);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = T.canvasBg; ctx.fillRect(0, 0, w, h);
    const cx = w / 2, cy = h / 2, k = 800;
    for (let i = 1; i <= 6; i++) {
      const r = 30 * i;
      ctx.strokeStyle = rgba(T.accent, 0.35);
      ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke();
    }
    ctx.fillStyle = Q >= 0 ? T.accent : T.text; ctx.beginPath(); ctx.arc(cx, cy, 8, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = T.text; ctx.beginPath(); ctx.arc(cx, cy, probe, 0, Math.PI * 2); ctx.stroke();
    const V = k * Q / probe;
    readouts.replaceChildren();
    readouts.appendChild(el('span', { text: `V≈${V.toFixed(1)} (相对单位)` }));
    readouts.appendChild(el('span', { text: '圆 = 等势线' }));
  }
  return startAnimLoop(wrap, draw);
}

export function create(viz, controls) {
  const inst = createBase(viz, controls);
  mountExamFigures(viz, 'electric-potential');
  return inst;
}
