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
  let light = 0.8, sugar = 0.5, t = 0;
  controls.appendChild(el('h2', { text: '控制 · Controls' }));
  const sim = mountSimControls(controls, {
    host: controls.closest('.module-layout'),
    step: () => { physics(SIM_STEP); draw(); },
    onReset: () => { light = 0.8; sugar = 0.5; t = 0; },
  });
  slider(controls, { label: '光照 · Light', min: 0, max: 1, step: 0.05, value: light, format: (v) => v.toFixed(2), onChange: (v) => { light = v; } });
  slider(controls, { label: '呼吸强度 · Respiration', min: 0.1, max: 1, step: 0.05, value: sugar, format: (v) => v.toFixed(2), onChange: (v) => { sugar = v; } });

  function physics(dt) { t += dt * 1.2; }

  function draw() {
    const T = themeColors();
    const { width: w, height: h } = fitCanvas(canvas, wrap);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = T.canvasBg; ctx.fillRect(0, 0, w, h);
    const nodes = [
      { x: 0.15, y: 0.3, label: '光' },
      { x: 0.4, y: 0.3, label: '叶绿体' },
      { x: 0.65, y: 0.3, label: '糖' },
      { x: 0.65, y: 0.7, label: '线粒体' },
      { x: 0.4, y: 0.7, label: 'ATP' },
    ];
    function P(n) { return { x: n.x * w, y: n.y * h }; }
    ctx.strokeStyle = T.border; ctx.lineWidth = 1.5;
    const links = [[0,1],[1,2],[2,3],[3,4],[4,1]];
    for (const [a,b] of links) {
      const A = P(nodes[a]), B = P(nodes[b]);
      ctx.beginPath(); ctx.moveTo(A.x, A.y); ctx.lineTo(B.x, B.y); ctx.stroke();
      const pulse = (Math.sin(t * 3 + a) * 0.5 + 0.5) * (a === 0 ? light : sugar);
      const px = A.x + (B.x - A.x) * ((t + a * 0.2) % 1);
      const py = A.y + (B.y - A.y) * ((t + a * 0.2) % 1);
      ctx.fillStyle = rgba(T.accent, 0.3 + pulse * 0.7);
      ctx.fillRect(px - 3, py - 3, 6, 6);
    }
    ctx.font = '13px sans-serif';
    for (const n of nodes) {
      const p = P(n);
      ctx.fillStyle = T.canvasBg; ctx.fillRect(p.x - 36, p.y - 14, 72, 28);
      ctx.strokeStyle = T.text; ctx.strokeRect(p.x - 36, p.y - 14, 72, 28);
      ctx.fillStyle = T.text; ctx.textAlign = 'center'; ctx.fillText(n.label, p.x, p.y + 4);
    }
    const atp = light * 0.6 + sugar * 0.4;
    readouts.replaceChildren();
    readouts.appendChild(el('span', { text: `相对 ATP 产出 · Relative ATP output ${atp.toFixed(2)}` }));
  }
  const loop = startAnimLoop(wrap, draw, {
    step: SIM_STEP,
    update: physics,
    getRate: () => (sim.isPlaying() ? sim.getRate() : 0),
  });
  return () => { loop(); sim.destroy(); };
}
