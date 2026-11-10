import { el, slider, select, checkbox, fitCanvas, readoutBar } from '../../js/ui.js';
import { themeColors, rgba } from '../../js/theme.js';
import { startAnimLoop } from '../anim-loop.js';
import { mountSimControls } from '../sim-controls.js';

export function create(viz, controls) {
  const wrap = el('div', { className: 'canvas-wrap' });
  const canvas = el('canvas'); wrap.appendChild(canvas); viz.appendChild(wrap);
  const readouts = readoutBar(viz);
  let h = 0.25, y0 = 1;
  const f = (x, y) => y; // y'=y
  controls.appendChild(el('h2', { text: '控制 · Controls' }));
  const sim = mountSimControls(controls, {
    host: controls.closest('.module-layout'),
    step: () => draw(),
    onReset: () => { h = 0.25; y0 = 1; },
  });
  slider(controls, { label: '步长 · Step h', min: 0.05, max: 0.5, step: 0.01, value: h, format: (v) => v.toFixed(2), onChange: (v) => { h = v; } });
  slider(controls, { label: '初值 · Initial value y(0)', min: 0.2, max: 2, step: 0.05, value: y0, format: (v) => v.toFixed(2), onChange: (v) => { y0 = v; } });

  function draw() {
    const T = themeColors();
    const { width: w, height: hh } = fitCanvas(canvas, wrap);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = T.canvasBg; ctx.fillRect(0, 0, w, hh);
    const xMin = -0.2, xMax = 2.2, yMin = -0.2, yMax = 6;
    const mapX = (x) => ((x - xMin) / (xMax - xMin)) * w;
    const mapY = (y) => hh - ((y - yMin) / (yMax - yMin)) * hh;
    // slope field
    ctx.strokeStyle = rgba(T.text, 0.35); ctx.lineWidth = 1;
    for (let i = 0; i < 12; i++) for (let j = 0; j < 10; j++) {
      const x = xMin + (i + 0.5) / 12 * (xMax - xMin);
      const y = yMin + (j + 0.5) / 10 * (yMax - yMin);
      const slope = f(x, y);
      const ang = Math.atan(slope);
      const len = 10;
      ctx.beginPath();
      ctx.moveTo(mapX(x) - Math.cos(ang) * len, mapY(y) + Math.sin(ang) * len);
      ctx.lineTo(mapX(x) + Math.cos(ang) * len, mapY(y) - Math.sin(ang) * len);
      ctx.stroke();
    }
    // exact y=y0 e^x
    ctx.strokeStyle = rgba(T.accent, 0.4); ctx.beginPath();
    for (let i = 0; i <= w; i++) {
      const x = Math.max(0, xMin + (i / w) * (xMax - xMin));
      const y = y0 * Math.exp(x);
      const X = mapX(x), Y = mapY(y);
      if (i === 0) ctx.moveTo(X, Y); else ctx.lineTo(X, Y);
    }
    ctx.stroke();
    // Euler
    ctx.strokeStyle = T.accent; ctx.lineWidth = 2; ctx.beginPath();
    let x = 0, y = y0; ctx.moveTo(mapX(x), mapY(y));
    while (x < 2) {
      y = y + h * f(x, y); x += h;
      ctx.lineTo(mapX(x), mapY(y));
    }
    ctx.stroke();
    readouts.replaceChildren();
    readouts.appendChild(el('span', { text: `微分方程 · ODE y′=y；精确解 · exact y=${y0}eˣ` }));
    readouts.appendChild(el('span', { text: `欧拉终点 · Euler endpoint y(${x.toFixed(2)})=${y.toFixed(3)}` }));
  }
  const loop = startAnimLoop(wrap, draw);
  return () => { loop(); sim.destroy(); };
}
