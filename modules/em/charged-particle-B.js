import { mountExamFigures } from '../physics/exam-figures.js';
import { el, slider, select, checkbox, fitCanvas, readoutBar } from '../../js/ui.js';
import { themeColors, rgba } from '../../js/theme.js';
import { startAnimLoop } from '../anim-loop.js';

function createBase(viz, controls) {
  const wrap = el('div', { className: 'canvas-wrap' });
  const canvas = el('canvas'); wrap.appendChild(canvas); viz.appendChild(wrap);
  const readouts = readoutBar(viz);
  let v = 2, B = 1, q = 1, m = 1;
  let pos = { x: 0, y: 0 }, vel = { x: 2, y: 0 }, trail = [];
  controls.appendChild(el('h2', { text: '控制' }));
  slider(controls, { label: 'v', min: 0.5, max: 4, step: 0.1, value: v, format: (vv) => vv.toFixed(1), onChange: (vv) => { v = vv; reset(); } });
  slider(controls, { label: 'B', min: 0.3, max: 2.5, step: 0.05, value: B, format: (vv) => vv.toFixed(2), onChange: (vv) => { B = vv; reset(); } });
  slider(controls, { label: 'q', min: -2, max: 2, step: 0.1, value: q, format: (vv) => vv.toFixed(1), onChange: (vv) => { q = vv; reset(); } });
  function reset() { pos = { x: 0, y: 0 }; vel = { x: v, y: 0 }; trail = []; }

  function physics(dt) {
    // F = q v × B with B out of the page. Four substeps keep the orbit round.
    const h = dt / 4;
    for (let k = 0; k < 4; k++) {
      const ax = (q / m) * (vel.y * B);
      const ay = (q / m) * (-vel.x * B);
      vel.x += ax * h; vel.y += ay * h;
      pos.x += vel.x * h; pos.y += vel.y * h;
    }
    trail.push({ ...pos }); if (trail.length > 400) trail.shift();
  }

  function draw() {
    const T = themeColors();
    const { width: w, height: h } = fitCanvas(canvas, wrap);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = T.canvasBg; ctx.fillRect(0, 0, w, h);
    const r = Math.abs(q) > 1e-6 ? Math.abs((m * v) / (q * B)) : Infinity;
    // Scale the orbit from r so the full circle fits inside the canvas.
    const pad = 26;
    const halfW = Math.max(40, w / 2 - pad);
    const halfH = Math.max(40, h / 2 - pad);
    const sc = Number.isFinite(r)
      ? Math.min(Math.min(w, h) * 0.15, halfW / r, halfH / r)
      : Math.min(w, h) * 0.12;
    const sign = q >= 0 ? 1 : -1;
    const cx = w / 2, cy = h / 2;
    // B field markers
    ctx.fillStyle = rgba(T.text, 0.28);
    for (let x = 60; x < w; x += 70) for (let y = 50; y < h; y += 70) {
      ctx.beginPath(); ctx.arc(x, y, 3, 0, Math.PI * 2); ctx.fill();
    }
    // Full orbit guide (dashed), then the actual trail.
    if (Number.isFinite(r)) {
      ctx.strokeStyle = rgba(T.axis, 0.45); ctx.setLineDash([4, 4]); ctx.lineWidth = 1;
      ctx.beginPath(); ctx.arc(cx, cy, r * sc, 0, Math.PI * 2); ctx.stroke(); ctx.setLineDash([]);
    }
    ctx.strokeStyle = T.accent; ctx.lineWidth = 2; ctx.beginPath();
    trail.forEach((p, i) => {
      const X = cx + p.x * sc;
      const Y = Number.isFinite(r) ? cy - (sign * r + p.y) * sc : cy - p.y * sc;
      if (i === 0) ctx.moveTo(X, Y); else ctx.lineTo(X, Y);
    });
    ctx.stroke();
    ctx.fillStyle = T.textStrong;
    const px = cx + pos.x * sc;
    const py = Number.isFinite(r) ? cy - (sign * r + pos.y) * sc : cy - pos.y * sc;
    ctx.beginPath(); ctx.arc(px, py, 4, 0, Math.PI * 2); ctx.fill();
    readouts.replaceChildren();
    readouts.appendChild(el('span', { text: Number.isFinite(r) ? `r=mv/(|q|B)=${r.toFixed(2)}` : 'r=∞（q=0）' }));
    readouts.appendChild(el('span', { text: `画布比例 · scale: 1 单位 = ${sc.toFixed(1)} px` }));
  }
  return startAnimLoop(wrap, draw, { step: 1 / 60, update: physics });
}

export function create(viz, controls) {
  const inst = createBase(viz, controls);
  mountExamFigures(viz, 'charged-particle-B');
  return inst;
}
