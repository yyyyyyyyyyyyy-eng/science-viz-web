import { mountExamFigures } from '../physics/exam-figures.js';
import { el, slider, select, checkbox, fitCanvas, readoutBar } from '../../js/ui.js';
import { themeColors, rgba } from '../../js/theme.js';
import { startAnimLoop } from '../anim-loop.js';

const SUP = { '-': '⁻', '+': '', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
function sci(x) {
  if (!Number.isFinite(x)) return String(x);
  if (x === 0) return '0';
  const [mantissa, exponent] = x.toExponential(2).split('e');
  const exp = exponent.replace(/[+\-0-9]/g, (c) => SUP[c] ?? c);
  return `${mantissa}×10${exp}`;
}

function createBase(viz, controls) {
  const wrap = el('div', { className: 'canvas-wrap' });
  const canvas = el('canvas'); wrap.appendChild(canvas); viz.appendChild(wrap);
  const readouts = readoutBar(viz);
  let R = 80, Q = 2, rg = 120;
  controls.appendChild(el('h2', { text: '控制' }));
  slider(controls, { label: '球半径 R', min: 40, max: 120, step: 1, value: R, format: (v) => String(Math.round(v)), onChange: (v) => { R = v; } });
  slider(controls, { label: '高斯面 r', min: 20, max: 180, step: 1, value: rg, format: (v) => String(Math.round(v)), onChange: (v) => { rg = v; } });
  slider(controls, { label: 'Q', min: 0.5, max: 5, step: 0.1, value: Q, format: (v) => v.toFixed(1), onChange: (v) => { Q = v; } });
  function draw() {
    const T = themeColors();
    const { width: w, height: h } = fitCanvas(canvas, wrap);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = T.canvasBg; ctx.fillRect(0, 0, w, h);
    const cx = w * 0.4, cy = h / 2;
    ctx.strokeStyle = T.border; ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.stroke();
    ctx.strokeStyle = T.accent; ctx.setLineDash([6, 4]); ctx.beginPath(); ctx.arc(cx, cy, rg, 0, Math.PI * 2); ctx.stroke(); ctx.setLineDash([]);
    const k = 1; // geometric units
    const E = rg >= R ? k * Q / (rg * rg) : k * Q * rg / (R * R * R);
    // E vs r plot, auto-scaled to the surface field (the maximum of this curve)
    const px = w * 0.62, py = 40, pw = w * 0.32, ph = h - 80;
    const eMax = (k * Q) / (R * R);
    ctx.strokeStyle = T.border; ctx.strokeRect(px, py, pw, ph);
    // mark the charged-sphere radius on the r axis
    const xR = px + ((R - 5) / 200) * pw;
    ctx.strokeStyle = rgba(T.muted, 0.6); ctx.setLineDash([3, 3]);
    ctx.beginPath(); ctx.moveTo(xR, py); ctx.lineTo(xR, py + ph); ctx.stroke(); ctx.setLineDash([]);
    ctx.fillStyle = T.muted; ctx.font = '11px sans-serif';
    ctx.fillText('E', px + 4, py + 13);
    ctx.fillText('r', px + pw - 8, py + ph + 13);
    ctx.fillText('R', xR - 3, py + ph + 13);
    ctx.strokeStyle = T.accent; ctx.lineWidth = 1.5; ctx.beginPath();
    for (let i = 0; i <= 80; i++) {
      const r = 5 + (i / 80) * 200;
      const e = r >= R ? k * Q / (r * r) : k * Q * r / (R * R * R);
      const X = px + (i / 80) * pw, Y = py + ph - (e / eMax) * ph * 0.92;
      if (i === 0) ctx.moveTo(X, Y); else ctx.lineTo(X, Y);
    }
    ctx.stroke();
    readouts.replaceChildren();
    readouts.appendChild(el('span', { text: `E(r)=${sci(E)}（几何单位 / geometric units）` }));
    readouts.appendChild(el('span', { text: `E_max=${sci(eMax)}` }));
    readouts.appendChild(el('span', { text: rg >= R ? '面外 ~ 点电荷 · outside: point-charge field' : '面内 ~ r（均匀球） · inside: ∝ r' }));
  }
  return startAnimLoop(wrap, draw);
}

export function create(viz, controls) {
  const inst = createBase(viz, controls);
  mountExamFigures(viz, 'gauss-law');
  return inst;
}
