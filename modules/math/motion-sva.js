import { el, slider, select, checkbox, fitCanvas, readoutBar } from '../../js/ui.js';
import { themeColors, rgba } from '../../js/theme.js';
import { startAnimLoop } from '../anim-loop.js';

export function create(viz, controls) {
  const wrap = el('div', { className: 'canvas-wrap' });
  const canvas = el('canvas'); wrap.appendChild(canvas); viz.appendChild(wrap);
  const readouts = readoutBar(viz);
  let t0 = 1.2;
  // s = t^3/3 - t^2
  const s = (t) => (t * t * t) / 3 - t * t;
  const v = (t) => t * t - 2 * t;
  const a = (t) => 2 * t - 2;
  controls.appendChild(el('h2', { text: '控制' }));
  slider(controls, { label: 't', min: 0, max: 3, step: 0.01, value: t0, format: (v) => v.toFixed(2), onChange: (v) => { t0 = v; } });

  function draw() {
    const T = themeColors();
    const { width: w, height: h } = fitCanvas(canvas, wrap);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = T.canvasBg; ctx.fillRect(0, 0, w, h);
    const panels = [
      { name: 's(t)', f: s, ymin: -2, ymax: 4 },
      { name: 'v(t)', f: v, ymin: -2, ymax: 4 },
      { name: 'a(t)', f: a, ymin: -2, ymax: 4 },
    ];
    const pw = w / 3;
    panels.forEach((p, i) => {
      const x0 = i * pw;
      const mapX = (t) => x0 + 20 + (t / 3) * (pw - 40);
      const mapY = (y) => 30 + (1 - (y - p.ymin) / (p.ymax - p.ymin)) * (h - 60);
      ctx.strokeStyle = T.border; ctx.strokeRect(x0 + 10, 20, pw - 20, h - 40);
      ctx.fillStyle = T.textMuted; ctx.font = '12px sans-serif'; ctx.textAlign = 'left';
      ctx.fillText(p.name, x0 + 18, 36);
      ctx.strokeStyle = T.accent; ctx.beginPath();
      for (let k = 0; k <= 100; k++) {
        const t = (k / 100) * 3;
        const X = mapX(t), Y = mapY(p.f(t));
        if (k === 0) ctx.moveTo(X, Y); else ctx.lineTo(X, Y);
      }
      ctx.stroke();
      ctx.fillStyle = T.text; ctx.fillRect(mapX(t0) - 2, mapY(p.f(t0)) - 2, 4, 4);
    });
    readouts.replaceChildren();
    readouts.appendChild(el('span', { text: `s=${s(t0).toFixed(2)}  v=${v(t0).toFixed(2)}  a=${a(t0).toFixed(2)}` }));
  }
  return startAnimLoop(wrap, draw);
}
