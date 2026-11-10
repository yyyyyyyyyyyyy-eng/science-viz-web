import { el, slider, select, checkbox, fitCanvas, readoutBar } from '../../js/ui.js';
import { themeColors, rgba } from '../../js/theme.js';
import { startAnimLoop } from '../anim-loop.js';

export function create(viz, controls) {
  const wrap = el('div', { className: 'canvas-wrap' });
  const canvas = el('canvas'); wrap.appendChild(canvas); viz.appendChild(wrap);
  const readouts = readoutBar(viz);
  let kind = 'rose', tMax = Math.PI * 2;
  controls.appendChild(el('h2', { text: '控制' }));
  select(controls, { label: '曲线', value: kind, options: [
    { value: 'rose', label: 'r=cos(2θ)' },
    { value: 'cardioid', label: 'r=1+cosθ' },
    { value: 'param', label: '参数：圆摆线' },
  ], onChange: (v) => { kind = v; } });
  slider(controls, { label: '扫角', min: 0.5, max: 6.28, step: 0.05, value: tMax, format: (v) => v.toFixed(2), onChange: (v) => { tMax = v; } });

  function draw() {
    const T = themeColors();
    const { width: w, height: h } = fitCanvas(canvas, wrap);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = T.canvasBg; ctx.fillRect(0, 0, w, h);
    const cx = w / 2, cy = h / 2, sc = Math.min(w, h) * 0.28;
    ctx.strokeStyle = T.border; ctx.beginPath(); ctx.moveTo(0, cy); ctx.lineTo(w, cy); ctx.moveTo(cx, 0); ctx.lineTo(cx, h); ctx.stroke();
    ctx.strokeStyle = T.accent; ctx.lineWidth = 2; ctx.beginPath();
    const N = 400;
    for (let i = 0; i <= N; i++) {
      const t = (i / N) * tMax;
      let x, y;
      if (kind === 'param') {
        x = (t - Math.sin(t)) * 0.35; y = (1 - Math.cos(t)) * 0.35;
      } else {
        const r = kind === 'rose' ? Math.cos(2 * t) : 1 + Math.cos(t);
        x = r * Math.cos(t); y = r * Math.sin(t);
      }
      const X = cx + x * sc, Y = cy - y * sc;
      if (i === 0) ctx.moveTo(X, Y); else ctx.lineTo(X, Y);
    }
    ctx.stroke();
    readouts.replaceChildren();
    readouts.appendChild(el('span', { text: kind === 'param' ? 'x=t−sin t, y=1−cos t' : '极坐标轨迹' }));
  }
  return startAnimLoop(wrap, draw);
}
