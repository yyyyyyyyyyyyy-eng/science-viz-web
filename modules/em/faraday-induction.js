import { mountExamFigures } from '../physics/exam-figures.js';
import { el, slider, select, checkbox, fitCanvas, observeSize, readoutBar } from '../../js/ui.js';
import { themeColors, rgba } from '../../js/theme.js';

function createBase(viz, controls) {
  const wrap = el('div', { className: 'canvas-wrap' });
  const canvas = el('canvas'); wrap.appendChild(canvas); viz.appendChild(wrap);
  const readouts = readoutBar(viz);
  let B = 1, area = 1, t0 = performance.now(), mode = 'B';
  controls.appendChild(el('h2', { text: '控制' }));
  select(controls, { label: '变化量', value: mode, options: [{ value: 'B', label: '改变 B' }, { value: 'A', label: '改变面积' }], onChange: (v) => { mode = v; t0 = performance.now(); } });
  slider(controls, { label: '振幅', min: 0.3, max: 2, step: 0.05, value: B, format: (v) => v.toFixed(2), onChange: (v) => { B = v; } });
  function draw() {
    const T = themeColors();
    const { width: w, height: h } = fitCanvas(canvas, wrap);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = T.canvasBg; ctx.fillRect(0, 0, w, h);
    const t = (performance.now() - t0) / 1000;
    const Bb = mode === 'B' ? B * (0.6 + 0.4 * Math.sin(t * 2)) : B;
    const A = mode === 'A' ? area * (0.6 + 0.4 * Math.sin(t * 2)) : area;
    const flux = Bb * A;
    const emf = mode === 'B' ? -A * B * 0.4 * 2 * Math.cos(t * 2) : -Bb * area * 0.4 * 2 * Math.cos(t * 2);
    const cx = w / 2, cy = h / 2, s = 60 * Math.sqrt(A);
    ctx.strokeStyle = T.accent; ctx.lineWidth = 3; ctx.strokeRect(cx - s, cy - s, 2 * s, 2 * s);
    ctx.fillStyle = rgba(T.accent, 0.15 * Math.abs(Bb)); ctx.fillRect(cx - s, cy - s, 2 * s, 2 * s);
    // induced current arrow
    ctx.strokeStyle = T.text; ctx.beginPath();
    const dir = emf > 0 ? 1 : -1;
    ctx.arc(cx, cy, s + 18, 0, Math.PI * 1.5); ctx.stroke();
    readouts.replaceChildren();
    readouts.appendChild(el('span', { text: `Φ=${flux.toFixed(2)}  ε=${emf.toFixed(2)}` }));
    readouts.appendChild(el('span', { text: 'ε=−dΦ/dt · 楞次定方向' }));
  }
  observeSize(wrap, draw);
  const loop = () => { draw(); requestAnimationFrame(loop); }; loop();
  return { destroy() {} };
}

export function create(viz, controls) {
  const inst = createBase(viz, controls);
  mountExamFigures(viz, 'faraday-induction');
  return inst;
}
