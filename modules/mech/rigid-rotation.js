import { mountExamFigures } from '../physics/exam-figures.js';
import { el, slider, select, checkbox, fitCanvas, readoutBar } from '../../js/ui.js';
import { themeColors, rgba } from '../../js/theme.js';
import { startAnimLoop } from '../anim-loop.js';

function createBase(viz, controls) {
  const wrap = el('div', { className: 'canvas-wrap' });
  const canvas = el('canvas'); wrap.appendChild(canvas); viz.appendChild(wrap);
  const readouts = readoutBar(viz);
  let R = 1.2, m = 2, tau = 1.5, omega = 0, theta = 0, mode = 'disk';
  controls.appendChild(el('h2', { text: '控制' }));
  select(controls, { label: '形状', value: mode, options: [{ value: 'disk', label: '圆盘 ½mR²' }, { value: 'hoop', label: '细环 mR²' }, { value: 'rod', label: '杆 ⅓mL²' }], onChange: (v) => { mode = v; omega = 0; } });
  slider(controls, { label: '力矩 N·m', min: 0, max: 5, step: 0.1, value: tau, format: (v) => v.toFixed(1), onChange: (v) => { tau = v; } });
  slider(controls, { label: 'R 或 L/2', min: 0.5, max: 2, step: 0.05, value: R, format: (v) => v.toFixed(2), onChange: (v) => { R = v; } });
  function I() { if (mode === 'disk') return 0.5 * m * R * R; if (mode === 'hoop') return m * R * R; return (1 / 3) * m * (2 * R) * (2 * R); }
  function draw() {
    const T = themeColors();
    const { width: w, height: h } = fitCanvas(canvas, wrap);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = T.canvasBg; ctx.fillRect(0, 0, w, h);
    const Ii = I(); const alpha = tau / Ii; omega += alpha * 0.016; theta += omega * 0.016;
    const cx = w / 2, cy = h / 2, sc = Math.min(w, h) * 0.28 * (R / 1.2);
    ctx.strokeStyle = T.accent; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(cx, cy, sc, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + Math.cos(theta) * sc, cy + Math.sin(theta) * sc); ctx.stroke();
    readouts.replaceChildren();
    readouts.appendChild(el('span', { text: `I=${Ii.toFixed(3)}  α=${alpha.toFixed(2)}` }));
    readouts.appendChild(el('span', { text: `ω=${omega.toFixed(2)} rad/s` }));
  }
  return startAnimLoop(wrap, draw);
}

export function create(viz, controls) {
  const inst = createBase(viz, controls);
  mountExamFigures(viz, 'rigid-rotation');
  return inst;
}
