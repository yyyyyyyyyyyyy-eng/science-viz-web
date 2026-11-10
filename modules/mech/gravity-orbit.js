import { mountExamFigures } from '../physics/exam-figures.js';
import { el, slider, select, checkbox, fitCanvas, readoutBar } from '../../js/ui.js';
import { themeColors, rgba } from '../../js/theme.js';
import { startAnimLoop } from '../anim-loop.js';

function createBase(viz, controls) {
  const wrap = el('div', { className: 'canvas-wrap' });
  const canvas = el('canvas'); wrap.appendChild(canvas); viz.appendChild(wrap);
  const readouts = readoutBar(viz);
  let v0 = 1.0, trail = [];
  let pos = { x: 1.2, y: 0 }, vel = { x: 0, y: 1.0 };
  controls.appendChild(el('h2', { text: '控制' }));
  slider(controls, { label: '初速', min: 0.4, max: 1.6, step: 0.02, value: v0, format: (v) => v.toFixed(2), onChange: (v) => { v0 = v; pos = { x: 1.2, y: 0 }; vel = { x: 0, y: v0 }; trail = []; } });
  function draw() {
    const T = themeColors();
    const { width: w, height: h } = fitCanvas(canvas, wrap);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = T.canvasBg; ctx.fillRect(0, 0, w, h);
    const GM = 1, dt = 0.01;
    for (let k = 0; k < 4; k++) {
      const r2 = pos.x * pos.x + pos.y * pos.y; const r = Math.sqrt(r2) || 1e-6;
      const ax = -GM * pos.x / (r2 * r), ay = -GM * pos.y / (r2 * r);
      vel.x += ax * dt; vel.y += ay * dt; pos.x += vel.x * dt; pos.y += vel.y * dt;
      trail.push({ ...pos }); if (trail.length > 500) trail.shift();
    }
    const cx = w / 2, cy = h / 2, sc = Math.min(w, h) * 0.28;
    ctx.fillStyle = T.accent; ctx.beginPath(); ctx.arc(cx, cy, 8, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = rgba(T.accent, 0.5); ctx.beginPath();
    trail.forEach((p, i) => { const X = cx + p.x * sc, Y = cy - p.y * sc; if (i === 0) ctx.moveTo(X, Y); else ctx.lineTo(X, Y); });
    ctx.stroke();
    ctx.fillStyle = T.text; ctx.fillRect(cx + pos.x * sc - 3, cy - pos.y * sc - 3, 6, 6);
    const r = Math.hypot(pos.x, pos.y), speed = Math.hypot(vel.x, vel.y);
    readouts.replaceChildren();
    const E = 0.5 * speed * speed - GM / r;
    const vCirc = Math.sqrt(GM / r);
    readouts.appendChild(el('span', { text: `r=${r.toFixed(2)}  v=${speed.toFixed(2)}` }));
    readouts.appendChild(el('span', { text: `E=${E.toFixed(3)}  v_circ=${vCirc.toFixed(2)}` }));
    readouts.appendChild(el('span', { text: 'E<0 椭圆；E=0 抛物；E>0 双曲（单位 GM=1）' }));
  }
  return startAnimLoop(wrap, draw);
}

export function create(viz, controls) {
  const inst = createBase(viz, controls);
  mountExamFigures(viz, 'gravity-orbit');
  return inst;
}
