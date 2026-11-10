import { mountExamFigures } from '../physics/exam-figures.js';
import { el, slider, select, fitCanvas, readoutBar } from '../../js/ui.js';
import { themeColors, rgba } from '../../js/theme.js';
import { startAnimLoop } from '../anim-loop.js';
import { mountSimControls, SIM_STEP } from '../sim-controls.js';

function createBase(viz, controls) {
  const wrap = el('div', { className: 'canvas-wrap' });
  const canvas = el('canvas'); wrap.appendChild(canvas); viz.appendChild(wrap);
  const readouts = readoutBar(viz);
  let B = 1, area = 1, simT = 0, mode = 'B';
  controls.appendChild(el('h2', { text: '控制 · Controls' }));
  const sim = mountSimControls(controls, {
    host: controls.closest('.module-layout'),
    step: () => { physics(SIM_STEP); draw(); },
    onReset: () => { B = 1; mode = 'B'; modeSel.value = 'B'; simT = 0; },
  });
  const modeSel = select(controls, { label: '变化量 · Changing quantity', value: mode, options: [{ value: 'B', label: '改变 B · change B' }, { value: 'A', label: '改变面积 · change area' }], onChange: (v) => { mode = v; simT = 0; } });
  slider(controls, { label: '振幅 · Amplitude', unit: 'T', min: 0.3, max: 2, step: 0.05, value: B, format: (v) => v.toFixed(2), onChange: (v) => { B = v; } });
  function physics(dt) { simT += dt; }
  function draw() {
    const T = themeColors();
    const { width: w, height: h } = fitCanvas(canvas, wrap);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = T.canvasBg; ctx.fillRect(0, 0, w, h);
    const t = simT;
    const Bb = mode === 'B' ? B * (0.6 + 0.4 * Math.sin(t * 2)) : B;
    const A = mode === 'A' ? area * (0.6 + 0.4 * Math.sin(t * 2)) : area;
    const flux = Bb * A;
    // Φ = B·A with B out of the page. ε = −dΦ/dt; a positive ε means the
    // outward flux is decreasing, so the induced current must be CCW to
    // reinforce it (Lenz's law). dir = +1 is clockwise on screen.
    const emf = mode === 'B' ? -A * B * 0.4 * 2 * Math.cos(t * 2) : -Bb * area * 0.4 * 2 * Math.cos(t * 2);
    const cx = w / 2, cy = h / 2, s = 60 * Math.sqrt(A);
    ctx.strokeStyle = T.accent; ctx.lineWidth = 3; ctx.strokeRect(cx - s, cy - s, 2 * s, 2 * s);
    ctx.fillStyle = rgba(T.accent, 0.15 * Math.abs(Bb)); ctx.fillRect(cx - s, cy - s, 2 * s, 2 * s);
    // B direction: out of the page (⊙).
    ctx.strokeStyle = rgba(T.text, 0.32);
    ctx.fillStyle = rgba(T.text, 0.32);
    ctx.lineWidth = 1;
    for (let gx = 34; gx < w - 20; gx += 54) {
      for (let gy = 44; gy < h - 20; gy += 54) {
        ctx.beginPath(); ctx.arc(gx, gy, 5, 0, Math.PI * 2); ctx.stroke();
        ctx.beginPath(); ctx.arc(gx, gy, 1.4, 0, Math.PI * 2); ctx.fill();
      }
    }
    ctx.fillStyle = T.muted; ctx.font = '11px sans-serif';
    ctx.fillText('⊙ B 垂直纸面向外 · out of the page', 12, 18);
    // induced current loop: reverse the sweep and arrowhead with the emf sign
    const dir = emf > 0 ? -1 : 1;
    const R = s + 18;
    const start = -Math.PI / 2;
    const sweep = Math.PI * 1.5;
    const end = start + dir * sweep;
    ctx.strokeStyle = T.text; ctx.lineWidth = 2; ctx.beginPath();
    ctx.arc(cx, cy, R, start, end, dir < 0); ctx.stroke();
    const ex = cx + R * Math.cos(end), ey = cy + R * Math.sin(end);
    const tx = dir > 0 ? -Math.sin(end) : Math.sin(end);
    const ty = dir > 0 ? Math.cos(end) : -Math.cos(end);
    const nx = -ty, ny = tx;
    ctx.fillStyle = T.text; ctx.beginPath();
    ctx.moveTo(ex + tx * 12, ey + ty * 12);
    ctx.lineTo(ex - tx * 2 + nx * 6, ey - ty * 2 + ny * 6);
    ctx.lineTo(ex - tx * 2 - nx * 6, ey - ty * 2 - ny * 6);
    ctx.closePath(); ctx.fill();
    readouts.replaceChildren();
    readouts.appendChild(el('span', { text: `磁通量 · Magnetic flux Φ=${flux.toFixed(2)} Wb` }));
    readouts.appendChild(el('span', { text: `电动势 · EMF ε=${emf.toFixed(2)} V` }));
    readouts.appendChild(el('span', { text: `B 方向 · B direction：⊙ 垂直纸面向外 · out of the page` }));
    readouts.appendChild(el('span', { text: `感应电流 · induced current：${dir > 0 ? '顺时针 · CW' : '逆时针 · CCW'}` }));
    readouts.appendChild(el('span', { text: 'ε=−dΦ/dt · 楞次定律 · Lenz’s law' }));
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
  mountExamFigures(viz, 'faraday-induction');
  return inst;
}
