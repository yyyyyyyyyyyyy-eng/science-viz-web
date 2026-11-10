import { mountExamFigures } from '../physics/exam-figures.js';
import { el, slider, select, checkbox, fitCanvas, readoutBar } from '../../js/ui.js';
import { themeColors, rgba } from '../../js/theme.js';
import { startAnimLoop } from '../anim-loop.js';

function createBase(viz, controls) {
  const wrap = el('div', { className: 'canvas-wrap' });
  const canvas = el('canvas'); wrap.appendChild(canvas); viz.appendChild(wrap);
  const readouts = readoutBar(viz);
  let B = 1, area = 1, t0 = performance.now(), mode = 'B';
  controls.appendChild(el('h2', { text: '控制' }));
  select(controls, { label: '变化量', value: mode, options: [{ value: 'B', label: '改变 B · change B' }, { value: 'A', label: '改变面积 · change area' }], onChange: (v) => { mode = v; t0 = performance.now(); } });
  slider(controls, { label: '振幅', min: 0.3, max: 2, step: 0.05, value: B, format: (v) => v.toFixed(2), onChange: (v) => { B = v; } });
  function draw() {
    const T = themeColors();
    const { width: w, height: h } = fitCanvas(canvas, wrap);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = T.canvasBg; ctx.fillRect(0, 0, w, h);
    const t = (performance.now() - t0) / 1000;
    const Bb = mode === 'B' ? B * (0.6 + 0.4 * Math.sin(t * 2)) : B;
    const A = mode === 'A' ? area * (0.6 + 0.4 * Math.sin(t * 2)) : area;
    const flux = Bb * A;
    const emf = mode === 'B' ? -A * B * 0.4 * 2 * Math.cos(t * 2) : -Bb * area * 0.4 * 2 * Math.cos(t * 2);
    const cx = w / 2, cy = h / 2, s = 60 * Math.sqrt(A);
    ctx.strokeStyle = T.accent; ctx.lineWidth = 3; ctx.strokeRect(cx - s, cy - s, 2 * s, 2 * s);
    ctx.fillStyle = rgba(T.accent, 0.15 * Math.abs(Bb)); ctx.fillRect(cx - s, cy - s, 2 * s, 2 * s);
    // induced current loop: reverse the sweep and arrowhead with the emf sign
    const dir = emf > 0 ? 1 : -1;
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
    readouts.appendChild(el('span', { text: `Φ=${flux.toFixed(2)}  ε=${emf.toFixed(2)}` }));
    readouts.appendChild(el('span', { text: `感应电流：${dir > 0 ? '顺时针 · CW' : '逆时针 · CCW'}` }));
    readouts.appendChild(el('span', { text: 'ε=−dΦ/dt · 楞次定方向 / Lenz’s law' }));
  }
  return startAnimLoop(wrap, draw);
}

export function create(viz, controls) {
  const inst = createBase(viz, controls);
  mountExamFigures(viz, 'faraday-induction');
  return inst;
}
