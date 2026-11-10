import { mountExamFigures } from '../physics/exam-figures.js';
import { el, slider, select, checkbox, fitCanvas, readoutBar } from '../../js/ui.js';
import { themeColors, rgba } from '../../js/theme.js';
import { startAnimLoop } from '../anim-loop.js';

function createBase(viz, controls) {
  const wrap = el('div', { className: 'canvas-wrap' });
  const canvas = el('canvas'); wrap.appendChild(canvas); viz.appendChild(wrap);
  const readouts = readoutBar(viz);
  let R = 1000, C = 100e-6, mode = 'charge', t0 = performance.now();
  controls.appendChild(el('h2', { text: '控制' }));
  slider(controls, { label: 'R (Ω)', min: 200, max: 5000, step: 50, value: R, format: (v) => String(Math.round(v)), onChange: (v) => { R = v; t0 = performance.now(); } });
  slider(controls, { label: 'C (μF)', min: 20, max: 300, step: 10, value: C * 1e6, format: (v) => String(Math.round(v)), onChange: (v) => { C = v * 1e-6; t0 = performance.now(); } });
  select(controls, { label: '模式', value: mode, options: [{ value: 'charge', label: '充电' }, { value: 'discharge', label: '放电' }], onChange: (v) => { mode = v; t0 = performance.now(); } });
  function draw() {
    const T = themeColors();
    const { width: w, height: h } = fitCanvas(canvas, wrap);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = T.canvasBg; ctx.fillRect(0, 0, w, h);
    const tau = R * C, t = (performance.now() - t0) / 1000;
    const E = 5;
    const q = mode === 'charge' ? E * C * (1 - Math.exp(-t / tau)) : E * C * Math.exp(-t / tau);
    const qMax = E * C;
    // curve history style
    ctx.strokeStyle = T.border; ctx.strokeRect(40, 30, w - 80, h - 80);
    ctx.strokeStyle = T.accent; ctx.beginPath();
    for (let i = 0; i <= 100; i++) {
      const tt = (i / 100) * 5 * tau;
      const qq = mode === 'charge' ? E * C * (1 - Math.exp(-tt / tau)) : E * C * Math.exp(-tt / tau);
      const X = 40 + (i / 100) * (w - 80), Y = 30 + (h - 80) * (1 - qq / qMax);
      if (i === 0) ctx.moveTo(X, Y); else ctx.lineTo(X, Y);
    }
    ctx.stroke();
    const xNow = 40 + Math.min(t / (5 * tau), 1) * (w - 80);
    const yNow = 30 + (h - 80) * (1 - q / qMax);
    ctx.fillStyle = T.text; ctx.fillRect(xNow - 3, yNow - 3, 6, 6);
    readouts.replaceChildren();
    readouts.appendChild(el('span', { text: `τ=RC=${tau.toFixed(3)} s` }));
    readouts.appendChild(el('span', { text: `q/qmax=${(q / qMax).toFixed(3)}` }));
  }
  return startAnimLoop(wrap, draw);
}

export function create(viz, controls) {
  const inst = createBase(viz, controls);
  mountExamFigures(viz, 'rc-circuit');
  return inst;
}
