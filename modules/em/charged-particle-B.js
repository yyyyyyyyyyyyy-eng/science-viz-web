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
  function draw() {
    const T = themeColors();
    const { width: w, height: h } = fitCanvas(canvas, wrap);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = T.canvasBg; ctx.fillRect(0, 0, w, h);
    const dt = 0.016;
    // F = q v x B, B out of page → 2D: ax = q/m * vy * B * sign?, with B = B z-hat: Fx=q vy B? Actually F=q(v×B): Fx=q vy Bz? v×z = (vx,vy,0)×(0,0,B)=(vy B, -vx B, 0) wait (i j k; vx vy 0; 0 0 B)=(vy*B - 0, 0 - vx*B, 0)= (q omitted) 
    const ax = (q / m) * (vel.y * B);
    const ay = (q / m) * (-vel.x * B);
    vel.x += ax * dt; vel.y += ay * dt; pos.x += vel.x * dt; pos.y += vel.y * dt;
    trail.push({ ...pos }); if (trail.length > 400) trail.shift();
    const cx = w / 2, cy = h / 2, sc = Math.min(w, h) * 0.15;
    // B markers
    ctx.fillStyle = rgba(T.text, 0.25); for (let i = 0; i < 6; i++) for (let j = 0; j < 4; j++) {
      ctx.beginPath(); ctx.arc(80 + i * 70, 60 + j * 70, 3, 0, Math.PI * 2); ctx.fill();
    }
    ctx.strokeStyle = T.accent; ctx.beginPath();
    trail.forEach((p, i) => { const X = cx + p.x * sc, Y = cy - p.y * sc; if (i === 0) ctx.moveTo(X, Y); else ctx.lineTo(X, Y); });
    ctx.stroke();
    const r = (m * v) / (Math.abs(q) * B || 1e-6);
    readouts.replaceChildren();
    readouts.appendChild(el('span', { text: `r=mv/(|q|B)=${r.toFixed(2)}` }));
  }
  return startAnimLoop(wrap, draw);
}

export function create(viz, controls) {
  const inst = createBase(viz, controls);
  mountExamFigures(viz, 'charged-particle-B');
  return inst;
}
