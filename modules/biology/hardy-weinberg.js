import { el, slider, select, checkbox, fitCanvas, readoutBar } from '../../js/ui.js';
import { themeColors, rgba } from '../../js/theme.js';
import { startAnimLoop } from '../anim-loop.js';
import { mountSimControls } from '../sim-controls.js';

export function create(viz, controls) {
  const wrap = el('div', { className: 'canvas-wrap' });
  const canvas = el('canvas');
  wrap.appendChild(canvas);
  viz.appendChild(wrap);
  const readouts = readoutBar(viz);
  let p = 0.6, s = 0; // selection against aa
  controls.appendChild(el('h2', { text: '控制 · Controls' }));
  const sim = mountSimControls(controls, {
    host: controls.closest('.module-layout'),
    step: () => draw(),
    onReset: () => { p = 0.6; s = 0; },
  });
  slider(controls, { label: '等位基因频率 · Allele frequency p (A)', min: 0.05, max: 0.95, step: 0.01, value: p, format: (v) => v.toFixed(2), onChange: (v) => { p = v; } });
  slider(controls, { label: '对 aa 的选择强度 · Selection against aa', min: 0, max: 1, step: 0.05, value: s, format: (v) => v.toFixed(2), onChange: (v) => { s = v; } });

  function draw() {
    const T = themeColors();
    const { width: w, height: h } = fitCanvas(canvas, wrap);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = T.canvasBg; ctx.fillRect(0, 0, w, h);
    const q = 1 - p;
    let AA = p * p, Aa = 2 * p * q, aa = q * q;
    // selection: reduce aa fitness
    const wAA = 1, wAa = 1, waa = 1 - s;
    const meanW = AA * wAA + Aa * wAa + aa * waa;
    const AAp = (AA * wAA) / meanW, Aap = (Aa * wAa) / meanW, aap = (aa * waa) / meanW;
    const p2 = AAp + Aap / 2;
    const bars = [
      { label: 'AA', v: AAp, c: T.text },
      { label: 'Aa', v: Aap, c: T.accent },
      { label: 'aa', v: aap, c: rgba(T.accent, 0.5) },
    ];
    const bw = w * 0.18, gap = w * 0.1, x0 = w * 0.2, base = h * 0.75;
    bars.forEach((b, i) => {
      const x = x0 + i * (bw + gap);
      const bh = b.v * h * 0.55;
      ctx.fillStyle = b.c; ctx.fillRect(x, base - bh, bw, bh);
      ctx.strokeStyle = T.border; ctx.strokeRect(x, base - bh, bw, bh);
      ctx.fillStyle = T.text; ctx.font = '14px sans-serif'; ctx.textAlign = 'center';
      ctx.fillText(b.label, x + bw / 2, base + 22);
      ctx.fillText(b.v.toFixed(3), x + bw / 2, base - bh - 8);
    });
    readouts.replaceChildren();
    readouts.appendChild(el('span', { text: `平衡下 · At equilibrium p²=${(p*p).toFixed(3)} 2pq=${(2*p*q).toFixed(3)} q²=${(q*q).toFixed(3)}` }));
    readouts.appendChild(el('span', { text: `选择后 · After selection p′=${p2.toFixed(3)}` }));
  }
  const loop = startAnimLoop(wrap, draw);
  return () => { loop(); sim.destroy(); };
}
