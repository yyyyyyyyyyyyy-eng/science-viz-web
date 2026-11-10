import { mountExamFigures } from '../physics/exam-figures.js';
import { el, slider, select, fitCanvas, readoutBar } from '../../js/ui.js';
import { themeColors, rgba } from '../../js/theme.js';
import { startAnimLoop } from '../anim-loop.js';
import { mountSimControls, SIM_STEP, simAxisColor } from '../sim-controls.js';

function createBase(viz, controls) {
  const wrap = el('div', { className: 'canvas-wrap' });
  const canvas = el('canvas'); wrap.appendChild(canvas); viz.appendChild(wrap);
  const readouts = readoutBar(viz);
  let R = 1.2, m = 2, tau = 1.5, omega = 0, theta = 0, mode = 'disk', alpha = 0;
  controls.appendChild(el('h2', { text: '控制 · Controls' }));
  const sim = mountSimControls(controls, {
    host: controls.closest('.module-layout'),
    step: () => { physics(SIM_STEP); draw(); },
    onReset: () => { mode = 'disk'; modeSel.value = 'disk'; tau = 1.5; R = 1.2; omega = 0; theta = 0; },
  });
  const modeSel = select(controls, { label: '形状 · Shape', value: mode, options: [{ value: 'disk', label: '圆盘 ½mR² · disk' }, { value: 'hoop', label: '细环 mR² · hoop' }, { value: 'rod', label: '杆 ⅓mL² · rod' }], onChange: (v) => { mode = v; omega = 0; theta = 0; } });
  slider(controls, { label: '力矩 · Torque', unit: 'N·m', min: 0, max: 5, step: 0.1, value: tau, format: (v) => v.toFixed(1), onChange: (v) => { tau = v; } });
  slider(controls, { label: 'R 或 L/2 · radius or half-length', unit: 'm', min: 0.5, max: 2, step: 0.05, value: R, format: (v) => v.toFixed(2), onChange: (v) => { R = v; } });
  function I() { if (mode === 'disk') return 0.5 * m * R * R; if (mode === 'hoop') return m * R * R; return (1 / 3) * m * (2 * R) * (2 * R); }

  function physics(dt) {
    alpha = tau / I();
    omega += alpha * dt;
    theta += omega * dt;
  }

  function draw() {
    const T = themeColors();
    const { width: w, height: h } = fitCanvas(canvas, wrap);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = T.canvasBg; ctx.fillRect(0, 0, w, h);
    const Ii = I();
    const cx = w / 2, cy = h / 2, sc = Math.min(w, h) * 0.28 * (R / 1.2);
    if (mode === 'rod') {
      // Rod of length 2R pivoting about one end. Clamp the drawn half-length
      // so the rod (and its tip path) fits at every rotation angle.
      const half = Math.min(sc, Math.min(w, h) / 4 - 8);
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(theta);
      ctx.fillStyle = rgba(T.accent, 0.22);
      ctx.strokeStyle = T.accent; ctx.lineWidth = 2;
      ctx.fillRect(0, -5, half * 2, 10);
      ctx.strokeRect(0, -5, half * 2, 10);
      ctx.restore();
      // tip path and pivot
      ctx.strokeStyle = rgba(simAxisColor(T), 0.55); ctx.setLineDash([4, 4]); ctx.lineWidth = 1;
      ctx.beginPath(); ctx.arc(cx, cy, half * 2, 0, Math.PI * 2); ctx.stroke(); ctx.setLineDash([]);
      ctx.fillStyle = T.textStrong;
      ctx.beginPath(); ctx.arc(cx, cy, 5, 0, Math.PI * 2); ctx.fill();
    } else {
      ctx.strokeStyle = T.accent; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(cx, cy, sc, 0, Math.PI * 2); ctx.stroke();
      if (mode === 'hoop') { ctx.lineWidth = 5; ctx.beginPath(); ctx.arc(cx, cy, sc, 0, Math.PI * 2); ctx.stroke(); }
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + Math.cos(theta) * sc, cy + Math.sin(theta) * sc); ctx.stroke();
      ctx.fillStyle = T.textStrong;
      ctx.beginPath(); ctx.arc(cx, cy, 4, 0, Math.PI * 2); ctx.fill();
    }
    readouts.replaceChildren();
    readouts.appendChild(el('span', { text: `转动惯量 · I=${Ii.toFixed(3)}  角加速度 · α=${alpha.toFixed(2)}` }));
    readouts.appendChild(el('span', { text: `角速度 · ω=${omega.toFixed(2)} rad/s` }));
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
  mountExamFigures(viz, 'rigid-rotation');
  return inst;
}
