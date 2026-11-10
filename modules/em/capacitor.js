import { mountExamFigures } from '../physics/exam-figures.js';
import { el, slider, select, checkbox, fitCanvas, readoutBar } from '../../js/ui.js';
import { themeColors, rgba } from '../../js/theme.js';
import { startAnimLoop } from '../anim-loop.js';

function createBase(viz, controls) {
  const wrap = el('div', { className: 'canvas-wrap' });
  const canvas = el('canvas'); wrap.appendChild(canvas); viz.appendChild(wrap);
  const readouts = readoutBar(viz);
  let d = 40, A = 1, kappa = 1, V = 5;
  controls.appendChild(el('h2', { text: '控制' }));
  slider(controls, { label: '间距 d', min: 10, max: 80, step: 1, value: d, format: (v) => String(Math.round(v)), onChange: (v) => { d = v; } });
  slider(controls, { label: '面积因子 A', min: 0.5, max: 2, step: 0.05, value: A, format: (v) => v.toFixed(2), onChange: (v) => { A = v; } });
  slider(controls, { label: '介电 κ', min: 1, max: 5, step: 0.1, value: kappa, format: (v) => v.toFixed(1), onChange: (v) => { kappa = v; } });
  function draw() {
    const T = themeColors();
    const { width: w, height: h } = fitCanvas(canvas, wrap);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = T.canvasBg; ctx.fillRect(0, 0, w, h);
    const cx = w / 2, cy = h / 2, plateW = 120 * A;
    ctx.fillStyle = T.text; ctx.fillRect(cx - plateW / 2, cy - d / 2 - 6, plateW, 6);
    ctx.fillRect(cx - plateW / 2, cy + d / 2, plateW, 6);
    if (kappa > 1.05) { ctx.fillStyle = rgba(T.accent, 0.2); ctx.fillRect(cx - plateW / 2, cy - d / 2, plateW, d); }
    ctx.strokeStyle = rgba(T.accent, 0.6);
    for (let i = 0; i < 5; i++) {
      const x = cx - plateW / 2 + (i + 0.5) * (plateW / 5);
      ctx.beginPath(); ctx.moveTo(x, cy - d / 2 + 8); ctx.lineTo(x, cy + d / 2 - 2); ctx.stroke();
    }
    const C = (kappa * A) / (d / 40);
    const Q = C * V;
    readouts.replaceChildren();
    readouts.appendChild(el('span', { text: `C∝κA/d → ${C.toFixed(3)}` }));
    readouts.appendChild(el('span', { text: `Q=CV → ${Q.toFixed(3)} (V固定)` }));
  }
  return startAnimLoop(wrap, draw);
}

export function create(viz, controls) {
  const inst = createBase(viz, controls);
  mountExamFigures(viz, 'capacitor');
  return inst;
}
