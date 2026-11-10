import { el, slider, select, checkbox, fitCanvas, readoutBar } from '../../js/ui.js';
import { themeColors, rgba } from '../../js/theme.js';
import { startAnimLoop } from '../anim-loop.js';

export function create(viz, controls) {
  const wrap = el('div', { className: 'canvas-wrap' });
  const canvas = el('canvas'); wrap.appendChild(canvas); viz.appendChild(wrap);
  const readouts = readoutBar(viz);
  // f = x^3 - 3x
  const f = (x) => x * x * x - 3 * x;
  const fp = (x) => 3 * x * x - 3;
  const fpp = (x) => 6 * x;
  let show = 'f';
  controls.appendChild(el('h2', { text: '控制' }));
  select(controls, { label: '显示', value: show, options: [{ value: 'f', label: 'f' }, { value: 'fp', label: "f'" }, { value: 'fpp', label: "f''" }], onChange: (v) => { show = v; } });

  function draw() {
    const T = themeColors();
    const { width: w, height: h } = fitCanvas(canvas, wrap);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = T.canvasBg; ctx.fillRect(0, 0, w, h);
    const xMin = -2.5, xMax = 2.5, yMin = -4, yMax = 4;
    const mapX = (x) => ((x - xMin) / (xMax - xMin)) * w;
    const mapY = (y) => h - ((y - yMin) / (yMax - yMin)) * h;
    const fn = show === 'f' ? f : show === 'fp' ? fp : fpp;
    ctx.strokeStyle = T.border; ctx.beginPath();
    ctx.moveTo(0, mapY(0)); ctx.lineTo(w, mapY(0)); ctx.moveTo(mapX(0), 0); ctx.lineTo(mapX(0), h); ctx.stroke();
    ctx.strokeStyle = T.accent; ctx.lineWidth = 2; ctx.beginPath();
    for (let i = 0; i <= w; i++) {
      const x = xMin + (i / w) * (xMax - xMin);
      const X = mapX(x), Y = mapY(fn(x));
      if (i === 0) ctx.moveTo(X, Y); else ctx.lineTo(X, Y);
    }
    ctx.stroke();
    // critical points x=±1
    for (const c of [-1, 1]) {
      ctx.fillStyle = T.text; ctx.fillRect(mapX(c) - 3, mapY(f(c)) - 3, 6, 6);
    }
    ctx.fillStyle = T.textMuted; ctx.font = '12px sans-serif';
    ctx.fillText('拐点 x=0', mapX(0) + 8, mapY(0) - 8);
    readouts.replaceChildren();
    readouts.appendChild(el('span', { text: "f=x³−3x；临界点 ±1；f'' 变号于 0" }));
  }
  return startAnimLoop(wrap, draw);
}
