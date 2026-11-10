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
  let p1 = 'Aa', p2 = 'Aa';
  controls.appendChild(el('h2', { text: '控制 · Controls' }));
  const sim = mountSimControls(controls, {
    host: controls.closest('.module-layout'),
    step: () => draw(),
    onReset: () => { p1 = 'Aa'; p2 = 'Aa'; parent1.value = 'Aa'; parent2.value = 'Aa'; },
  });
  const parent1 = select(controls, { label: '亲本 1 · Parent 1', value: p1, options: ['AA','Aa','aa'].map((v) => ({ value: v, label: v })), onChange: (v) => { p1 = v; } });
  const parent2 = select(controls, { label: '亲本 2 · Parent 2', value: p2, options: ['AA','Aa','aa'].map((v) => ({ value: v, label: v })), onChange: (v) => { p2 = v; } });

  function alleles(g) { return g === 'AA' ? ['A','A'] : g === 'aa' ? ['a','a'] : ['A','a']; }
  function combine(a, b) {
    const s = a + b;
    if (s === 'aA') return 'Aa';
    return a === b ? a + b : 'Aa';
  }

  function draw() {
    const T = themeColors();
    const { width: w, height: h } = fitCanvas(canvas, wrap);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = T.canvasBg; ctx.fillRect(0, 0, w, h);
    const A = alleles(p1), B = alleles(p2);
    const cells = [[combine(A[0],B[0]), combine(A[0],B[1])],[combine(A[1],B[0]), combine(A[1],B[1])]];
    const size = Math.min(w, h) * 0.55;
    const x0 = (w - size) / 2, y0 = (h - size) / 2 + 10;
    const cell = size / 2;
    ctx.font = '16px sans-serif'; ctx.textAlign = 'center';
    ctx.fillStyle = T.textMuted;
    ctx.fillText(B[0], x0 + cell * 0.5, y0 - 12);
    ctx.fillText(B[1], x0 + cell * 1.5, y0 - 12);
    ctx.fillText(A[0], x0 - 16, y0 + cell * 0.5);
    ctx.fillText(A[1], x0 - 16, y0 + cell * 1.5);
    const counts = { AA: 0, Aa: 0, aa: 0 };
    for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) {
      const g = cells[i][j];
      counts[g] = (counts[g] || 0) + 1;
      const x = x0 + j * cell, y = y0 + i * cell;
      ctx.strokeStyle = T.border; ctx.strokeRect(x, y, cell, cell);
      ctx.fillStyle = g === 'aa' ? rgba(T.accent, 0.15) : T.canvasBg;
      ctx.fillRect(x + 1, y + 1, cell - 2, cell - 2);
      ctx.fillStyle = T.text; ctx.font = '20px sans-serif';
      ctx.fillText(g, x + cell / 2, y + cell / 2 + 6);
    }
    const dom = counts.AA + counts.Aa;
    readouts.replaceChildren();
    readouts.appendChild(el('span', { text: `基因型 · Genotype AA:${counts.AA} Aa:${counts.Aa} aa:${counts.aa}` }));
    readouts.appendChild(el('span', { text: `表型比 · Phenotype ratio 显:隐 = ${dom}:${counts.aa}` }));
  }
  const loop = startAnimLoop(wrap, draw);
  return () => { loop(); sim.destroy(); };
}
