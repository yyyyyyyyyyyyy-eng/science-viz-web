import { mountExamFigures } from '../physics/exam-figures.js';
import { el, slider, fitCanvas, readoutBar } from '../../js/ui.js';
import { themeColors, rgba } from '../../js/theme.js';
import { startAnimLoop } from '../anim-loop.js';
import { mountSimControls, SIM_STEP, simAxisColor } from '../sim-controls.js';

function createBase(viz, controls) {
  const wrap = el('div', { className: 'canvas-wrap' });
  const canvas = el('canvas'); wrap.appendChild(canvas); viz.appendChild(wrap);
  const readouts = readoutBar(viz);
  let h0 = 5, mu = 0, m = 1, s = 0, v = 0;
  const incline = Math.PI / 6; // fixed 30° incline; track length follows h0
  const sinth = Math.sin(incline);
  const costh = Math.cos(incline);
  const g = 9.8;

  function physics(dt) {
    const track = h0 / sinth;
    const a = g * (sinth - mu * costh); // along-track
    if (s < track && a > 0) {
      s = Math.min(track, s + v * dt + 0.5 * a * dt * dt);
      const height = Math.max(0, h0 - s * sinth);
      const U = m * g * height;
      const Wf = mu * m * g * costh * s;
      // Conservation: K = E0 - U - Wf, so E + Wf = E0 at every step.
      const K = Math.max(0, m * g * h0 - U - Wf);
      v = Math.sqrt(Math.max(0, (2 * K) / m));
    } else if (a <= 0) {
      v = 0;
    }
  }

  controls.appendChild(el('h2', { text: '控制 · Controls' }));
  const sim = mountSimControls(controls, {
    host: controls.closest('.module-layout'),
    step: () => { physics(SIM_STEP); draw(); },
    onReset: () => { s = 0; v = 0; },
  });
  slider(controls, { label: '高度 · Height', unit: 'm', min: 1, max: 8, step: 0.1, value: h0, format: (v) => v.toFixed(1), onChange: (val) => { h0 = val; s = 0; v = 0; } });
  slider(controls, { label: '摩擦 · Friction μ', min: 0, max: 0.4, step: 0.01, value: mu, format: (v) => v.toFixed(2), onChange: (val) => { mu = val; s = 0; v = 0; } });

  function draw() {
    const T = themeColors();
    const { width: w, height: h } = fitCanvas(canvas, wrap);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = T.canvasBg; ctx.fillRect(0, 0, w, h);
    const track = h0 / sinth;
    const height = Math.max(0, h0 - s * sinth);
    const U = m * g * height;
    const E0 = m * g * h0;
    const Wf = mu * m * g * costh * s; // friction work magnitude
    const K = Math.max(0, E0 - U - Wf);
    // Drawn incline: reserve the right edge for the energy bars and keep the
    // visual slope at the physical 30°.
    const x0 = 48, y0 = 52;
    const barW = 22, barGap = 6, barX = w - 72;
    const maxSpanX = Math.max(80, w - x0 - (w - barX) - 24);
    const maxSpanY = Math.max(60, h - 110);
    const span = Math.min(maxSpanX, maxSpanY / Math.tan(incline));
    const x1 = x0 + span;
    const y1 = y0 + span * Math.tan(incline);
    ctx.strokeStyle = simAxisColor(T); ctx.lineWidth = 2; ctx.beginPath();
    ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.stroke();
    const t = track > 0 ? Math.min(s / track, 1) : 1;
    const px = x0 + t * span;
    const py = y0 + t * span * Math.tan(incline);
    // Block sits on top of the incline, aligned with the 30° surface.
    ctx.save();
    ctx.translate(px, py);
    ctx.rotate(incline);
    ctx.fillStyle = T.accent; ctx.fillRect(-10, -20, 20, 20);
    ctx.restore();
    // energy bars (U, K) on the reserved right strip
    const maxE = E0 + 1;
    const baseY = h - 42;
    const maxBarH = h - 110;
    ctx.fillStyle = rgba(T.accent, 0.45); ctx.fillRect(barX, baseY - (U / maxE) * maxBarH, barW, (U / maxE) * maxBarH);
    ctx.fillStyle = T.accent; ctx.fillRect(barX + barW + barGap, baseY - (K / maxE) * maxBarH, barW, (K / maxE) * maxBarH);
    ctx.fillStyle = T.muted; ctx.font = '12px sans-serif';
    ctx.fillText('U', barX + 5, h - 24); ctx.fillText('K', barX + barW + barGap + 5, h - 24);
    readouts.replaceChildren();
    readouts.appendChild(el('span', { text: `势能 · U=${U.toFixed(1)} J  动能 · K=${K.toFixed(1)} J  速度 · v=${v.toFixed(2)} m/s` }));
    readouts.appendChild(el('span', { text: `机械能 · E=${(U + K).toFixed(1)} J  摩擦功 · W_f=${Wf.toFixed(1)} J` }));
    readouts.appendChild(el('span', { text: `能量守恒 · Energy balance E+W_f≈${(U + K + Wf).toFixed(1)}（E₀=${E0.toFixed(1)}）` }));
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
  mountExamFigures(viz, 'work-energy');
  return inst;
}
