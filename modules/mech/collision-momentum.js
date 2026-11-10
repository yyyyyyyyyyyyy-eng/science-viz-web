import { mountExamFigures } from '../physics/exam-figures.js';
import { el, slider, select, checkbox, fitCanvas, readoutBar } from '../../js/ui.js';
import { themeColors, rgba } from '../../js/theme.js';
import { startAnimLoop } from '../anim-loop.js';

function createBase(viz, controls) {
  const wrap = el('div', { className: 'canvas-wrap' });
  const canvas = el('canvas'); wrap.appendChild(canvas); viz.appendChild(wrap);
  const readouts = readoutBar(viz);
  let m1 = 2, m2 = 1, u1 = 3, u2 = 0, e = 1, x1 = 0.2, x2 = 0.55, v1 = 3, v2 = 0, phase = 'run';
  controls.appendChild(el('h2', { text: '控制' }));
  slider(controls, { label: 'm₁', min: 0.5, max: 5, step: 0.1, value: m1, format: (v) => v.toFixed(1), onChange: (v) => { m1 = v; reset(); } });
  slider(controls, { label: 'm₂', min: 0.5, max: 5, step: 0.1, value: m2, format: (v) => v.toFixed(1), onChange: (v) => { m2 = v; reset(); } });
  slider(controls, { label: '恢复系数 e', min: 0, max: 1, step: 0.05, value: e, format: (v) => v.toFixed(2), onChange: (v) => { e = v; reset(); } });
  function reset() { x1 = 0.2; x2 = 0.55; v1 = u1; v2 = u2; phase = 'run'; }
  function draw() {
    const T = themeColors();
    const { width: w, height: h } = fitCanvas(canvas, wrap);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = T.canvasBg; ctx.fillRect(0, 0, w, h);
    const y = h * 0.55, dt = 0.016;
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
    ctx.strokeStyle = T.border; ctx.beginPath(); ctx.moveTo(40, y + 30); ctx.lineTo(w - 40, y + 30); ctx.stroke();
    const drawBlock = (xf, m, label) => {
      const X = 40 + xf * (w - 80); const s = 20 + m * 6;
      ctx.fillStyle = T.accent; ctx.fillRect(X - s / 2, y - s / 2, s, s);
      ctx.fillStyle = T.text; ctx.font = '12px sans-serif'; ctx.textAlign = 'center'; ctx.fillText(label, X, y - s / 2 - 8);
    };
    drawBlock(x1, m1, 'm₁'); drawBlock(x2, m2, 'm₂');
    const p = m1 * v1 + m2 * v2;
    readouts.replaceChildren();
    readouts.appendChild(el('span', { text: `v₁=${v1.toFixed(2)}  v₂=${v2.toFixed(2)}` }));
    readouts.appendChild(el('span', { text: `p=${p.toFixed(2)}` }));
  }
  return startAnimLoop(wrap, draw);
}

export function create(viz, controls) {
  const inst = createBase(viz, controls);
  mountExamFigures(viz, 'collision-momentum');
  return inst;
}
