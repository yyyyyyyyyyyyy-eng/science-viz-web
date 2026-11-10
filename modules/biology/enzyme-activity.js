import { el, slider, select, checkbox, fitCanvas, readoutBar } from '../../js/ui.js';
import { themeColors, rgba } from '../../js/theme.js';
import { startAnimLoop } from '../anim-loop.js';

export function create(viz, controls) {
  const wrap = el('div', { className: 'canvas-wrap' });
  const canvas = el('canvas');
  wrap.appendChild(canvas);
  viz.appendChild(wrap);
  const readouts = readoutBar(viz);
  let temp = 37, pH = 7, w = 600, h = 400;
  controls.appendChild(el('h2', { text: '控制' }));
  slider(controls, { label: '温度 °C', min: 0, max: 80, step: 1, value: temp, format: (v) => String(v), onChange: (v) => { temp = v; } });
  slider(controls, { label: 'pH', min: 2, max: 12, step: 0.1, value: pH, format: (v) => v.toFixed(1), onChange: (v) => { pH = v; } });

  function rate(T, ph) {
    const tOpt = 37, pOpt = 7;
    const tFactor = Math.exp(-Math.pow((T - tOpt) / 18, 2)) * (T < 70 ? 1 : Math.max(0, 1 - (T - 70) / 10));
    const pFactor = Math.exp(-Math.pow((ph - pOpt) / 1.8, 2));
    return Math.max(0, tFactor * pFactor);
  }

  function draw() {
    const T = themeColors();
    const { width, height } = fitCanvas(canvas, wrap);
    w = width; h = height;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = T.canvasBg; ctx.fillRect(0, 0, w, h);
    const pad = 48, plotW = w - pad * 2, plotH = h - pad * 2;
    // axes
    ctx.strokeStyle = T.border; ctx.beginPath();
    ctx.moveTo(pad, pad); ctx.lineTo(pad, pad + plotH); ctx.lineTo(pad + plotW, pad + plotH); ctx.stroke();
    // rate vs temp curve at current pH
    ctx.strokeStyle = T.accent; ctx.lineWidth = 2; ctx.beginPath();
    for (let i = 0; i <= 80; i++) {
      const r = rate(i, pH);
      const x = pad + (i / 80) * plotW;
      const y = pad + plotH - r * plotH;
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.stroke();
    // marker
    const r0 = rate(temp, pH);
    const mx = pad + (temp / 80) * plotW;
    const my = pad + plotH - r0 * plotH;
    ctx.fillStyle = T.accent; ctx.fillRect(mx - 3, my - 3, 6, 6);
    ctx.fillStyle = T.textMuted; ctx.font = '12px sans-serif';
    ctx.fillText('温度 →', pad + plotW - 48, pad + plotH + 28);
    ctx.save(); ctx.translate(16, pad + plotH / 2); ctx.rotate(-Math.PI / 2); ctx.fillText('相对速率', 0, 0); ctx.restore();
    readouts.replaceChildren();
    readouts.appendChild(el('span', { text: `相对速率 ${r0.toFixed(2)}` }));
    readouts.appendChild(el('span', { text: `T=${temp}°C  pH=${pH.toFixed(1)}` }));
  }
  return startAnimLoop(wrap, draw);
}
