import { el, slider, select, checkbox, fitCanvas, observeSize, readoutBar } from '../../js/ui.js';
import { themeColors, rgba } from '../../js/theme.js';

export function create(viz, controls) {
  const wrap = el('div', { className: 'canvas-wrap' });
  const canvas = el('canvas'); wrap.appendChild(canvas); viz.appendChild(wrap);
  const readouts = readoutBar(viz);
  let a = 1, L = 2, eps = 0.5, delta = 0.25;
  const f = (x) => x + 1; // lim x->1 of x+1 = 2
  controls.appendChild(el('h2', { text: '控制' }));
  slider(controls, { label: 'ε', min: 0.05, max: 1.5, step: 0.01, value: eps, format: (v) => v.toFixed(2), onChange: (v) => { eps = v; delta = Math.min(eps, 1.5); } });
  slider(controls, { label: 'δ', min: 0.02, max: 1.5, step: 0.01, value: delta, format: (v) => v.toFixed(2), onChange: (v) => { delta = v; } });

  function draw() {
    const T = themeColors();
    const { width: w, height: h } = fitCanvas(canvas, wrap);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = T.canvasBg; ctx.fillRect(0, 0, w, h);
    const xMin = -0.5, xMax = 2.5, yMin = -0.5, yMax = 3.5;
    const mapX = (x) => ((x - xMin) / (xMax - xMin)) * w;
    const mapY = (y) => h - ((y - yMin) / (yMax - yMin)) * h;
    // epsilon band
    ctx.fillStyle = rgba(T.accent, 0.12);
    ctx.fillRect(0, mapY(L + eps), w, mapY(L - eps) - mapY(L + eps));
    // delta band
    ctx.fillStyle = rgba(T.text, 0.08);
    ctx.fillRect(mapX(a - delta), 0, mapX(a + delta) - mapX(a - delta), h);
    // axes
    ctx.strokeStyle = T.border; ctx.beginPath();
    ctx.moveTo(0, mapY(0)); ctx.lineTo(w, mapY(0));
    ctx.moveTo(mapX(0), 0); ctx.lineTo(mapX(0), h); ctx.stroke();
    // function
    ctx.strokeStyle = T.accent; ctx.lineWidth = 2; ctx.beginPath();
    for (let i = 0; i <= w; i++) {
      const x = xMin + (i / w) * (xMax - xMin);
      const y = f(x);
      const X = mapX(x), Y = mapY(y);
      if (i === 0) ctx.moveTo(X, Y); else ctx.lineTo(X, Y);
    }
    ctx.stroke();
    // point
    ctx.fillStyle = T.text; ctx.fillRect(mapX(a) - 3, mapY(L) - 3, 6, 6);
    const ok = delta <= eps + 1e-9; // for f'=1, need delta<=eps
    readouts.replaceChildren();
    readouts.appendChild(el('span', { text: `f(x)=x+1 → L=${L} at a=${a}` }));
    readouts.appendChild(el('span', { text: ok && delta <= eps ? 'δ≤ε 对本例充分' : '试减小 δ 或增大 ε' }));
  }
  observeSize(wrap, draw);
  const loop = () => { draw(); requestAnimationFrame(loop); }; loop();
  return { destroy() {} };
}
