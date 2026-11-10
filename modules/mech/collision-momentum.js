import { mountExamFigures } from '../physics/exam-figures.js';
import { el, slider, fitCanvas, readoutBar } from '../../js/ui.js';
import { themeColors, rgba } from '../../js/theme.js';
import { startAnimLoop } from '../anim-loop.js';
import { mountSimControls, SIM_STEP, simAxisColor } from '../sim-controls.js';

function createBase(viz, controls) {
  const wrap = el('div', { className: 'canvas-wrap' });
  const canvas = el('canvas'); wrap.appendChild(canvas); viz.appendChild(wrap);
  const readouts = readoutBar(viz);
  let m1 = 2, m2 = 1, u1 = 3, u2 = 0, e = 1, x1 = 0.2, x2 = 0.55, v1 = 3, v2 = 0, phase = 'run';
  controls.appendChild(el('h2', { text: '控制 · Controls' }));
  const sim = mountSimControls(controls, {
    host: controls.closest('.module-layout'),
    step: () => { physics(SIM_STEP); draw(); },
    onReset: () => { reset(); },
  });
  slider(controls, { label: '质量 · Mass m₁', unit: 'kg', min: 0.5, max: 5, step: 0.1, value: m1, format: (v) => v.toFixed(1), onChange: (v) => { m1 = v; reset(); } });
  slider(controls, { label: '质量 · Mass m₂', unit: 'kg', min: 0.5, max: 5, step: 0.1, value: m2, format: (v) => v.toFixed(1), onChange: (v) => { m2 = v; reset(); } });
  slider(controls, { label: '恢复系数 · Restitution e', min: 0, max: 1, step: 0.05, value: e, format: (v) => v.toFixed(2), onChange: (v) => { e = v; reset(); } });
  function reset() { x1 = 0.2; x2 = 0.55; v1 = u1; v2 = u2; phase = 'run'; }

  function physics(dt) {
    if (phase === 'run') {
      x1 += (v1 * dt) / 8; x2 += (v2 * dt) / 8;
      if (x1 + 0.06 >= x2) {
        // 1D collision formulas
        const V1 = (m1 * v1 + m2 * v2 + m2 * e * (v2 - v1)) / (m1 + m2);
        const V2 = (m1 * v1 + m2 * v2 + m1 * e * (v1 - v2)) / (m1 + m2);
        v1 = V1; v2 = V2; phase = 'post'; x1 = x2 - 0.06;
      }
    } else {
      x1 += (v1 * dt) / 8; x2 += (v2 * dt) / 8;
      if (x1 < 0.05 || x2 > 0.95) reset();
    }
  }

  function draw() {
    const T = themeColors();
    const { width: w, height: h } = fitCanvas(canvas, wrap);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = T.canvasBg; ctx.fillRect(0, 0, w, h);
    const y = h * 0.42;
    ctx.strokeStyle = simAxisColor(T); ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(40, y + 30); ctx.lineTo(w - 40, y + 30); ctx.stroke();
    const drawBlock = (xf, m, label) => {
      const X = 40 + xf * (w - 80); const s = 20 + m * 6;
      ctx.fillStyle = T.accent; ctx.fillRect(X - s / 2, y - s / 2, s, s);
      ctx.fillStyle = T.text; ctx.font = '12px sans-serif'; ctx.textAlign = 'center'; ctx.fillText(label, X, y - s / 2 - 8);
      ctx.textAlign = 'left';
    };
    drawBlock(x1, m1, 'm₁'); drawBlock(x2, m2, 'm₂');

    // Momentum bars: p₁, p₂ and the conserved total p.
    const p1 = m1 * v1, p2 = m2 * v2, pTotal = p1 + p2;
    const pmax = Math.max(1e-6, Math.abs(p1), Math.abs(p2), Math.abs(pTotal), m1 * Math.abs(u1) + m2 * Math.abs(u2));
    const barLeft = 72, barRight = w - 16, zeroX = (barLeft + barRight) / 2;
    const scale = (barRight - barLeft) / 2 / pmax;
    const rowH = 13;
    const rows = [
      ['p₁', p1, h * 0.64, rgba(T.accent, 0.55)],
      ['p₂', p2, h * 0.74, rgba(T.math, 0.6)],
      ['pΣ', pTotal, h * 0.84, T.textStrong],
    ];
    ctx.font = '11px sans-serif';
    for (const [label, value, rowY, color] of rows) {
      ctx.fillStyle = T.muted; ctx.fillText(label, 12, rowY + rowH - 2);
      const endX = zeroX + value * scale;
      ctx.fillStyle = color;
      ctx.fillRect(Math.min(zeroX, endX), rowY, Math.max(1.5, Math.abs(endX - zeroX)), rowH);
      ctx.strokeStyle = rgba(T.axis, 0.8); ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(zeroX, rowY - 2); ctx.lineTo(zeroX, rowY + rowH + 2); ctx.stroke();
    }
    readouts.replaceChildren();
    readouts.appendChild(el('span', { text: `速度 · v₁=${v1.toFixed(2)}  v₂=${v2.toFixed(2)}` }));
    readouts.appendChild(el('span', { text: `动量 · p₁=${p1.toFixed(2)}  p₂=${p2.toFixed(2)}  p=${pTotal.toFixed(2)}` }));
  }
  const loop = startAnimLoop(wrap, draw, {
    step: SIM_STEP,
    update: physics,
    getRate: () => (sim.isPlaying() ? sim.getRate() : 0),
  });
  return () => { loop(); sim.destroy(); };
}

export function create(viz, controls) {
  const inst = createBase(viz, controls);
  mountExamFigures(viz, 'collision-momentum');
  return inst;
}
