import { el, slider, select, checkbox, fitCanvas, readoutBar } from '../../js/ui.js';
import { themeColors, rgba } from '../../js/theme.js';
import { startAnimLoop } from '../anim-loop.js';

export function create(viz, controls) {
  const wrap = el('div', { className: 'canvas-wrap' });
  const canvas = el('canvas'); wrap.appendChild(canvas); viz.appendChild(wrap);
  const readouts = readoutBar(viz);
  let r = 0.5, a = 1, N = 20;
  controls.appendChild(el('h2', { text: '控制' }));
  slider(controls, { label: '公比 r', min: -1.2, max: 1.2, step: 0.01, value: r, format: (v) => v.toFixed(2), onChange: (v) => { r = v; } });
  slider(controls, { label: '项数 N', min: 5, max: 60, step: 1, value: N, format: (v) => String(Math.round(v)), onChange: (v) => { N = Math.round(v); } });

  function draw() {
    const T = themeColors();
    const { width: w, height: h } = fitCanvas(canvas, wrap);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = T.canvasBg; ctx.fillRect(0, 0, w, h);
    let s = 0; const partial = [];
    for (let n = 0; n < N; n++) { s += a * Math.pow(r, n); partial.push(s); }
    const conv = Math.abs(r) < 1;
    const target = conv ? a / (1 - r) : null;
    const yMin = Math.min(0, ...partial, target ?? 0) - 0.5;
    const yMax = Math.max(0, ...partial, target ?? 0) + 0.5;
    const mapX = (i) => 40 + (i / Math.max(1, N - 1)) * (w - 60);
    const mapY = (y) => h - 30 - ((y - yMin) / (yMax - yMin)) * (h - 60);
    if (target != null) {
      ctx.strokeStyle = rgba(T.accent, 0.4); ctx.setLineDash([4, 4]);
      ctx.beginPath(); ctx.moveTo(40, mapY(target)); ctx.lineTo(w - 20, mapY(target)); ctx.stroke();
      ctx.setLineDash([]);
    }
    ctx.strokeStyle = T.accent; ctx.lineWidth = 2; ctx.beginPath();
    partial.forEach((y, i) => { const X = mapX(i), Y = mapY(y); if (i === 0) ctx.moveTo(X, Y); else ctx.lineTo(X, Y); });
    ctx.stroke();
    readouts.replaceChildren();
    readouts.appendChild(el('span', { text: conv ? `收敛 → ${target.toFixed(4)}` : '发散 (|r|≥1)' }));
    readouts.appendChild(el('span', { text: `S_${N}=${s.toFixed(4)}` }));
  }
  return startAnimLoop(wrap, draw);
}
