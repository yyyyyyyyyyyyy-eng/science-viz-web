import { el, slider, select, checkbox, fitCanvas, readoutBar } from '../../js/ui.js';
import { themeColors, rgba } from '../../js/theme.js';
import { startAnimLoop } from '../anim-loop.js';

export function create(viz, controls) {
  const wrap = el('div', { className: 'canvas-wrap' });
  const canvas = el('canvas'); wrap.appendChild(canvas); viz.appendChild(wrap);
  const readouts = readoutBar(viz);
  let a = 0, b = 2, n = 16;
  const f = (x) => 0.3 * x + 0.8;
  controls.appendChild(el('h2', { text: '控制' }));
  slider(controls, { label: '右端 b', min: 0.5, max: 3, step: 0.1, value: b, format: (v) => v.toFixed(1), onChange: (v) => { b = v; } });
  slider(controls, { label: '圆盘数', min: 4, max: 40, step: 1, value: n, format: (v) => String(Math.round(v)), onChange: (v) => { n = Math.round(v); } });

  function draw() {
    const T = themeColors();
    const { width: w, height: h } = fitCanvas(canvas, wrap);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = T.canvasBg; ctx.fillRect(0, 0, w, h);
    const ox = w * 0.2, oy = h * 0.55;
    // axis
    ctx.strokeStyle = T.border; ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(w * 0.9, oy); ctx.stroke();
    const dx = (b - a) / n;
    let V = 0;
    for (let i = 0; i < n; i++) {
      const x = a + (i + 0.5) * dx;
      const R = f(x); V += Math.PI * R * R * dx;
      const cx = ox + ((x - a) / (b - a || 1)) * w * 0.65;
      const rx = 10, ry = R * 40;
      ctx.strokeStyle = rgba(T.accent, 0.7);
      ctx.beginPath(); ctx.ellipse(cx, oy, rx, ry, 0, 0, Math.PI * 2); ctx.stroke();
    }
    // profile
    ctx.strokeStyle = T.text; ctx.beginPath();
    for (let i = 0; i <= 50; i++) {
      const x = a + (i / 50) * (b - a);
      const X = ox + ((x - a) / (b - a || 1)) * w * 0.65;
      const Y = oy - f(x) * 40;
      if (i === 0) ctx.moveTo(X, Y); else ctx.lineTo(X, Y);
    }
    ctx.stroke();
    readouts.replaceChildren();
    readouts.appendChild(el('span', { text: `圆盘法 V≈${V.toFixed(3)}` }));
    readouts.appendChild(el('span', { text: `y=0.3x+0.8 绕 x 轴` }));
  }
  return startAnimLoop(wrap, draw);
}
