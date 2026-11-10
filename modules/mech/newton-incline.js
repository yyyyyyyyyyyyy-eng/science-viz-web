import { mountExamFigures } from '../physics/exam-figures.js';
import { el, slider, fitCanvas, readoutBar } from '../../js/ui.js';
import { themeColors } from '../../js/theme.js';
import { startAnimLoop } from '../anim-loop.js';
import { mountSimControls, SIM_STEP, simAxisColor } from '../sim-controls.js';

function createBase(viz, controls) {
  const wrap = el('div', { className: 'canvas-wrap' });
  const canvas = el('canvas'); wrap.appendChild(canvas); viz.appendChild(wrap);
  const readouts = readoutBar(viz);
  let theta = 30, mu = 0.2, m = 2, s = 0, v = 0;
  let a = 0, f = 0, N = 0, sliding = false;
  const g = 9.8;
  const TRACK_M = 4; // metres of slide represented by the drawn incline

  function measure() {
    const rad = (theta * Math.PI) / 180;
    N = m * g * Math.cos(rad);
    sliding = Math.tan(rad) > mu + 1e-9;
    f = sliding ? mu * N : m * g * Math.sin(rad);
    a = sliding ? g * Math.sin(rad) - mu * g * Math.cos(rad) : 0;
  }

  function physics(dt) {
    measure();
    if (sliding && a > 0) {
      v += a * dt;
      s += v * dt;
      if (s >= TRACK_M) { s = 0; v = 0; }
    } else {
      // Static: stay at rest at the top of the incline.
      v = 0;
      s = 0;
    }
  }

  controls.appendChild(el('h2', { text: '控制 · Controls' }));
  const sim = mountSimControls(controls, {
    host: controls.closest('.module-layout'),
    step: () => { physics(SIM_STEP); draw(); },
    onReset: () => { s = 0; v = 0; measure(); },
  });
  slider(controls, { label: '倾角 · Incline angle', unit: '°', min: 0, max: 60, step: 1, value: theta, format: (v) => String(Math.round(v)), onChange: (val) => { theta = val; s = 0; v = 0; measure(); draw(); } });
  slider(controls, { label: 'μ（μs=μk） · friction coefficient', min: 0, max: 0.8, step: 0.01, value: mu, format: (v) => v.toFixed(2), onChange: (val) => { mu = val; s = 0; v = 0; measure(); draw(); } });
  slider(controls, { label: '质量 · Mass', unit: 'kg', min: 0.5, max: 5, step: 0.1, value: m, format: (v) => v.toFixed(1), onChange: (val) => { m = val; measure(); draw(); } });
  measure();

  function draw() {
    const T = themeColors();
    const { width: w, height: h } = fitCanvas(canvas, wrap);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = T.canvasBg; ctx.fillRect(0, 0, w, h);
    const rad = (theta * Math.PI) / 180;
    const x0 = 40, y0 = h - 40, L = Math.min(w, h) * 0.85;
    const x1 = x0 + L * Math.cos(rad), y1 = y0 - L * Math.sin(rad);
    ctx.strokeStyle = simAxisColor(T); ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.lineTo(x1, y0); ctx.closePath(); ctx.stroke();
    // Start near the top and move down-slope as s grows.
    const along = (0.04 + 0.92 * Math.min(s / TRACK_M, 1)) * L;
    const px = x1 - along * Math.cos(rad);
    const py = y1 + along * Math.sin(rad);
    // Block aligned with the surface and drawn just above it.
    ctx.save();
    ctx.translate(px, py);
    ctx.rotate(-rad);
    ctx.fillStyle = T.accent; ctx.fillRect(-12, -24, 24, 24);
    ctx.restore();
    const bx = px - 12 * Math.sin(rad);
    const by = py - 12 * Math.cos(rad);
    // force vectors schematic at block (weight down, normal perpendicular)
    ctx.strokeStyle = T.text; ctx.lineWidth = 1.5; ctx.beginPath();
    ctx.moveTo(bx, by); ctx.lineTo(bx, by + 40);
    ctx.moveTo(bx, by); ctx.lineTo(bx - 30 * Math.sin(rad), by - 30 * Math.cos(rad));
    ctx.stroke();
    readouts.replaceChildren();
    readouts.appendChild(el('span', { text: `加速度 · a=${a.toFixed(2)} m/s²  速度 · v=${v.toFixed(2)} m/s` }));
    readouts.appendChild(el('span', { text: sliding ? `法向力 · N=${N.toFixed(1)} N  动摩擦 · f_k=${f.toFixed(1)} N` : `法向力 · N=${N.toFixed(1)} N  静摩擦 · f_s=${f.toFixed(1)} N` }));
    readouts.appendChild(el('span', { text: sliding ? '滑动 · sliding（动摩擦 · kinetic）' : '静止 · static（静摩擦 · static friction）' }));
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
  mountExamFigures(viz, 'newton-incline');
  return inst;
}
