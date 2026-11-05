import { el, slider, select, checkbox, fitCanvas, observeSize, readoutBar } from '../../js/ui.js';
import { themeColors, rgba } from '../../js/theme.js';

export function create(viz, controls) {
  const wrap = el('div', { className: 'canvas-wrap' });
  const canvas = el('canvas'); wrap.appendChild(canvas); viz.appendChild(wrap);
  const readouts = readoutBar(viz);
  let n = 6, method = 'mid';
  const f = (x) => 0.15 * x * x + 0.5;
  const a = 0, b = 4, exact = (0.15 / 3) * 64 + 0.5 * 4; // ∫(0.15x^2+0.5)dx
  controls.appendChild(el('h2', { text: '控制' }));
  slider(controls, { label: 'n', min: 2, max: 40, step: 1, value: n, format: (v) => String(Math.round(v)), onChange: (v) => { n = Math.round(v); } });
  select(controls, { label: '法则', value: method, options: [{ value: 'left', label: '左' }, { value: 'right', label: '右' }, { value: 'mid', label: '中点' }], onChange: (v) => { method = v; } });

  function draw() {
    const T = themeColors();
    const { width: w, height: h } = fitCanvas(canvas, wrap);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = T.canvasBg; ctx.fillRect(0, 0, w, h);
    const xMin = -0.3, xMax = 4.5, yMin = -0.2, yMax = 3.5;
    const mapX = (x) => ((x - xMin) / (xMax - xMin)) * w;
    const mapY = (y) => h - ((y - yMin) / (yMax - yMin)) * h;
    const dx = (b - a) / n;
    let sum = 0;
    for (let i = 0; i < n; i++) {
      const xl = a + i * dx, xr = xl + dx;
      const xc = method === 'left' ? xl : method === 'right' ? xr : (xl + xr) / 2;
      const fh = f(xc); sum += fh * dx;
      ctx.fillStyle = rgba(T.accent, 0.25);
      ctx.fillRect(mapX(xl), mapY(fh), mapX(xr) - mapX(xl), mapY(0) - mapY(fh));
      ctx.strokeStyle = T.accent; ctx.strokeRect(mapX(xl), mapY(fh), mapX(xr) - mapX(xl), mapY(0) - mapY(fh));
    }
    ctx.strokeStyle = T.text; ctx.lineWidth = 2; ctx.beginPath();
    for (let i = 0; i <= w; i++) {
      const x = xMin + (i / w) * (xMax - xMin);
      const X = mapX(x), Y = mapY(f(Math.max(0, Math.min(4, x))));
      if (i === 0) ctx.moveTo(X, Y); else ctx.lineTo(X, Y);
    }
    ctx.stroke();
    readouts.replaceChildren();
    readouts.appendChild(el('span', { text: `黎曼和 ${sum.toFixed(4)}` }));
    readouts.appendChild(el('span', { text: `真值 ≈ ${exact.toFixed(4)}  误差 ${(sum - exact).toFixed(4)}` }));
  }
  observeSize(wrap, draw);
  const loop = () => { draw(); requestAnimationFrame(loop); }; loop();
  return { destroy() {} };
}
