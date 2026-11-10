import { el, slider, select, checkbox, fitCanvas, readoutBar } from '../../js/ui.js';
import { themeColors, rgba } from '../../js/theme.js';
import { startAnimLoop } from '../anim-loop.js';
import { mountSimControls, SIM_STEP } from '../sim-controls.js';

export function create(viz, controls) {
  const wrap = el('div', { className: 'canvas-wrap' });
  const canvas = el('canvas');
  wrap.appendChild(canvas);
  viz.appendChild(wrap);
  const readouts = readoutBar(viz);
  let outC = 0.3, inC = 0.1, particles = [];
  controls.appendChild(el('h2', { text: '控制 · Controls' }));
  const sim = mountSimControls(controls, {
    host: controls.closest('.module-layout'),
    step: () => { physics(SIM_STEP); draw(); },
    onReset: () => { outC = 0.3; inC = 0.1; seed(); },
  });
  slider(controls, { label: '胞外溶质 · Extracellular solute', min: 0, max: 1, step: 0.05, value: outC, format: (v) => v.toFixed(2), onChange: (v) => { outC = v; seed(); } });
  slider(controls, { label: '胞内溶质 · Intracellular solute', min: 0, max: 1, step: 0.05, value: inC, format: (v) => v.toFixed(2), onChange: (v) => { inC = v; seed(); } });

  function seed() {
    particles = [];
    const nOut = Math.round(outC * 40), nIn = Math.round(inC * 40);
    for (let i = 0; i < nOut; i++) particles.push({ side: 'out', x: Math.random(), y: Math.random() });
    for (let i = 0; i < nIn; i++) particles.push({ side: 'in', x: Math.random(), y: Math.random() });
  }
  seed();

  function physics(dt) {
    for (const p of particles) {
      p.y += (Math.random() - 0.5) * 0.6 * dt;
      p.x += (Math.random() - 0.5) * 0.6 * dt;
      p.x = Math.max(0.05, Math.min(0.95, p.x));
      p.y = Math.max(0.05, Math.min(0.95, p.y));
    }
  }

  function draw() {
    const T = themeColors();
    const { width: w, height: h } = fitCanvas(canvas, wrap);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = T.canvasBg; ctx.fillRect(0, 0, w, h);
    const mid = w * 0.5;
    // membrane
    ctx.fillStyle = rgba(T.accent, 0.25); ctx.fillRect(mid - 6, 20, 12, h - 40);
    ctx.strokeStyle = T.accent; ctx.strokeRect(mid - 6, 20, 12, h - 40);
    ctx.fillStyle = T.textMuted; ctx.font = '12px sans-serif';
    ctx.fillText('胞外', 24, 36); ctx.fillText('胞内', mid + 24, 36);
    // water arrows by tonicity
    const diff = outC - inC; // >0 hypertonic outside → water out
    const arrow = Math.tanh(diff * 3);
    ctx.strokeStyle = T.text; ctx.beginPath();
    const ay = h * 0.5;
    ctx.moveTo(mid - 40, ay); ctx.lineTo(mid + 40 * Math.sign(-arrow || 1), ay);
    if (Math.abs(arrow) > 0.05) {
      const dir = arrow > 0 ? -1 : 1; // water flows to higher solute
      const tip = mid + 50 * (arrow > 0 ? -1 : 1);
      ctx.moveTo(mid, ay); ctx.lineTo(tip, ay);
      ctx.lineTo(tip - 8 * (arrow > 0 ? -1 : 1), ay - 6);
      ctx.moveTo(tip, ay); ctx.lineTo(tip - 8 * (arrow > 0 ? -1 : 1), ay + 6);
    }
    ctx.stroke();
    for (const p of particles) {
      const x = p.side === 'out' ? 20 + p.x * (mid - 40) : mid + 20 + p.x * (mid - 40);
      const y = 50 + p.y * (h - 80);
      ctx.fillStyle = T.accent; ctx.fillRect(x, y, 4, 4);
    }
    const tone = Math.abs(diff) < 0.05 ? '等渗 · isotonic' : diff > 0 ? '胞外高渗（水外流） · hypertonic outside (water leaves)' : '胞外低渗（水内流） · hypotonic outside (water enters)';
    readouts.replaceChildren();
    readouts.appendChild(el('span', { text: tone }));
    readouts.appendChild(el('span', { text: `浓度差 · ΔC=${diff.toFixed(2)}` }));
  }
  const loop = startAnimLoop(wrap, draw, {
    step: SIM_STEP,
    update: physics,
    getRate: () => (sim.isPlaying() ? sim.getRate() : 0),
  });
  return () => { loop(); sim.destroy(); };
}
