import { el, slider, fitCanvas, readoutBar } from '../../js/ui.js';
import { themeColors } from '../../js/theme.js';
import { startAnimLoop } from '../anim-loop.js';
import { mountSimControls } from '../sim-controls.js';

export function create(viz, controls) {
  const wrap = el('div', { className: 'canvas-wrap' });
  const canvas = el('canvas'); wrap.appendChild(canvas); viz.appendChild(wrap);
  const readouts = readoutBar(viz);
  let x0 = 0.8;
  controls.appendChild(el('h2', { text: '控制 · Controls' }));
  const sim = mountSimControls(controls, {
    host: controls.closest('.module-layout'),
    step: () => draw(),
    onReset: () => { x0 = 0.8; },
  });
  slider(controls, { label: '切点 x · Point x', min: -2, max: 2, step: 0.01, value: x0, format: (v) => v.toFixed(2), onChange: (v) => { x0 = v; } });
  // y = sin(x^2): outer sin, inner x^2
  const g = (x) => x * x, gp = (x) => 2 * x;
  const fp = (u) => Math.cos(u);
  const f = (u) => Math.sin(u);
  const y = (x) => f(g(x));
  const yp = (x) => fp(g(x)) * gp(x);

  function draw() {
    const T = themeColors();
    const { width: w, height: h } = fitCanvas(canvas, wrap);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = T.canvasBg; ctx.fillRect(0, 0, w, h);
    const xMin = -2.2, xMax = 2.2, yMin = -1.5, yMax = 1.5;
    const mapX = (x) => ((x - xMin) / (xMax - xMin)) * w;
    const mapY = (y) => h - ((y - yMin) / (yMax - yMin)) * h;
    ctx.strokeStyle = T.border; ctx.beginPath();
    ctx.moveTo(0, mapY(0)); ctx.lineTo(w, mapY(0)); ctx.moveTo(mapX(0), 0); ctx.lineTo(mapX(0), h); ctx.stroke();
    ctx.strokeStyle = T.accent; ctx.lineWidth = 2; ctx.beginPath();
    for (let i = 0; i <= w; i++) {
      const x = xMin + (i / w) * (xMax - xMin);
      const X = mapX(x), Y = mapY(y(x));
      if (i === 0) ctx.moveTo(X, Y); else ctx.lineTo(X, Y);
    }
    ctx.stroke();
    const y0 = y(x0), m = yp(x0);
    ctx.strokeStyle = T.text; ctx.beginPath();
    const x1 = x0 - 0.8, x2 = x0 + 0.8;
    ctx.moveTo(mapX(x1), mapY(y0 + m * (x1 - x0)));
    ctx.lineTo(mapX(x2), mapY(y0 + m * (x2 - x0))); ctx.stroke();
    ctx.fillStyle = T.accent; ctx.fillRect(mapX(x0) - 3, mapY(y0) - 3, 6, 6);
    readouts.replaceChildren();
    readouts.appendChild(el('span', { text: `函数 · Function y=sin(x²)` }));
    readouts.appendChild(el('span', { text: `链式法则 · Chain rule f'(g)·g' = ${fp(g(x0)).toFixed(2)}·${gp(x0).toFixed(2)} = ${m.toFixed(2)}` }));
  }
  const loop = startAnimLoop(wrap, draw);
  return () => { loop(); sim.destroy(); };
}
