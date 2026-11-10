import { el, button, fitCanvas, observeSize, readoutBar } from '../../js/ui.js';
import { themeColors, rgba } from '../../js/theme.js';
import { startAnimLoop } from '../anim-loop.js';
import { mountSimControls, SIM_STEP } from '../sim-controls.js';


const PHASES = [
  { id: 'interphase', name: '间期 · Interphase', desc: 'DNA 复制，染色质松散 · DNA replicates, chromatin is loose' },
  { id: 'prophase', name: '前期 · Prophase', desc: '染色质凝缩为染色体，核膜开始解体 · Chromatin condenses, nuclear envelope breaks down' },
  { id: 'metaphase', name: '中期 · Metaphase', desc: '着丝粒排列于赤道板 · Centromeres align at the equator' },
  { id: 'anaphase', name: '后期 · Anaphase', desc: '姐妹染色单体分离并移向两极 · Sister chromatids separate toward the poles' },
  { id: 'telophase', name: '末期 · Telophase', desc: '核膜重建，开始胞质分裂 · Nuclear envelopes reform, cytokinesis begins' },
];

export function create(viz, controls) {
  const wrap = el('div', { className: 'canvas-wrap' });
  const canvas = el('canvas');
  wrap.appendChild(canvas);
  viz.appendChild(wrap);
  const readouts = readoutBar(viz);

  let phaseIdx = 0;
  let progress = 0; // 0..1 within phase animation
  let w = 600;
  let h = 400;

  controls.appendChild(el('h2', { text: '控制 · Controls' }));
  const sim = mountSimControls(controls, {
    host: controls.closest('.module-layout'),
    step: () => { update(SIM_STEP); draw(); },
    onReset: () => { phaseIdx = 0; progress = 0; syncPills(); },
  });

  const pills = el('div', { className: 'phase-pills' });
  PHASES.forEach((p, i) => {
    const b = el('button', {
      className: 'phase-pill' + (i === 0 ? ' active' : ''),
      type: 'button',
      text: p.name,
      'data-i': String(i),
    });
    b.addEventListener('click', () => {
      phaseIdx = i;
      progress = 0;
      syncPills();
    });
    pills.appendChild(b);
  });
  controls.appendChild(pills);

  const btnRow = el('div', { className: 'btn-row' });
  controls.appendChild(btnRow);
  button(btnRow, {
    text: '下一步 · Next phase',
    onClick: () => {
      phaseIdx = (phaseIdx + 1) % PHASES.length;
      progress = 0;
      syncPills();
    },
  });

  controls.appendChild(
    el('p', {
      className: 'hint',
      text: '点击阶段按钮可跳转；播放时自动依序演示染色体凝缩、排列、分离与胞质分裂。 · Click a phase to jump; playback walks through condensation, alignment, separation and cytokinesis.',
    }),
  );

  function syncPills() {
    pills.querySelectorAll('.phase-pill').forEach((b, i) => {
      b.classList.toggle('active', i === phaseIdx);
    });
  }

  function resize(cw, ch) {
    w = cw;
    h = ch;
    fitCanvas(canvas, w, h);
  }
  const unobserve = observeSize(wrap, resize);

  function drawChromosome(ctx, x, y, angle, split, pairOffset, color) {
    const T = themeColors();
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    const len = 28;
    const thick = 5;
    ctx.strokeStyle = color;
    ctx.lineWidth = thick;
    ctx.lineCap = 'round';
    if (!split) {
      // X shape chromatids joined at centromere
      ctx.beginPath();
      ctx.moveTo(-len * 0.15, -len);
      ctx.quadraticCurveTo(0, 0, -len * 0.15, len);
      ctx.moveTo(len * 0.15, -len);
      ctx.quadraticCurveTo(0, 0, len * 0.15, len);
      ctx.stroke();
      ctx.fillStyle = T.warn;
      ctx.beginPath();
      ctx.arc(0, 0, 4, 0, Math.PI * 2);
      ctx.fill();
    } else {
      // separated chromatids
      const o = pairOffset;
      ctx.beginPath();
      ctx.moveTo(-o, -len);
      ctx.lineTo(-o, len);
      ctx.moveTo(o, -len);
      ctx.lineTo(o, len);
      ctx.stroke();
    }
    ctx.restore();
  }

  function drawCell(ctx) {
    const T = themeColors();
    const cx = w / 2;
    const cy = h / 2;
    const rx = Math.min(w, h) * 0.38;
    const ry = rx * 0.72;
    const phase = PHASES[phaseIdx];
    const t = progress;

    ctx.clearRect(0, 0, w, h);

    // membrane
    const furrow = phase.id === 'telophase' ? t * 0.55 : 0;
    ctx.strokeStyle = T.bio;
    ctx.lineWidth = 3;
    ctx.beginPath();
    if (furrow > 0) {
      // dumbbell-ish
      const sep = furrow * rx * 0.9;
      ctx.ellipse(cx - sep * 0.55, cy, rx * (1 - furrow * 0.25), ry * (1 - furrow * 0.05), 0, 0, Math.PI * 2);
      ctx.ellipse(cx + sep * 0.55, cy, rx * (1 - furrow * 0.25), ry * (1 - furrow * 0.05), 0, 0, Math.PI * 2);
    } else {
      ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
    }
    ctx.stroke();

    // nucleus / envelope
    if (phase.id === 'interphase' || phase.id === 'prophase' || phase.id === 'telophase') {
      const alpha = phase.id === 'prophase' ? 1 - t : phase.id === 'telophase' ? t : 1;
      ctx.globalAlpha = Math.max(0, alpha);
      ctx.strokeStyle = rgba(T.math, 0.85);
      ctx.lineWidth = 2;
      const nrx = rx * 0.55;
      const nry = ry * 0.55;
      if (phase.id === 'telophase') {
        const sep = t * rx * 0.55;
        ctx.beginPath();
        ctx.ellipse(cx - sep, cy, nrx * 0.55, nry * 0.7, 0, 0, Math.PI * 2);
        ctx.ellipse(cx + sep, cy, nrx * 0.55, nry * 0.7, 0, 0, Math.PI * 2);
        ctx.stroke();
      } else {
        ctx.beginPath();
        ctx.ellipse(cx, cy, nrx, nry, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    }

    // spindle
    if (['prophase', 'metaphase', 'anaphase', 'telophase'].includes(phase.id)) {
      const poles = [
        { x: cx - rx * 0.85, y: cy },
        { x: cx + rx * 0.85, y: cy },
      ];
      ctx.fillStyle = T.accentSoft;
      poles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
        ctx.fill();
      });
      if (phase.id !== 'prophase' || t > 0.3) {
        ctx.strokeStyle = rgba(T.accentSoft, 0.35);
        ctx.lineWidth = 1;
        for (let i = -2; i <= 2; i++) {
          ctx.beginPath();
          ctx.moveTo(poles[0].x, poles[0].y);
          ctx.lineTo(cx, cy + i * 18);
          ctx.lineTo(poles[1].x, poles[1].y);
          ctx.stroke();
        }
      }
    }

    // chromosomes (4 pairs for clarity)
    const n = 4;
    const colors = [T.math, T.bio, T.physics, T.warn];
    for (let i = 0; i < n; i++) {
      const color = colors[i % colors.length];
      let x = cx;
      let y = cy;
      let split = false;
      let pairOffset = 0;
      let angle = 0;

      if (phase.id === 'interphase') {
        // chromatin as soft blobs
        const a = (i / n) * Math.PI * 2 + t * 0.2;
        x = cx + Math.cos(a) * rx * 0.28;
        y = cy + Math.sin(a) * ry * 0.28;
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.55;
        ctx.beginPath();
        ctx.ellipse(x, y, 18, 10, a, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
        continue;
      }

      if (phase.id === 'prophase') {
        const a = (i / n) * Math.PI * 2;
        const r = rx * (0.35 - t * 0.12);
        x = cx + Math.cos(a) * r;
        y = cy + Math.sin(a) * r * 0.8;
        angle = a;
      } else if (phase.id === 'metaphase') {
        const spread = ((i - (n - 1) / 2) / n) * ry * 1.1;
        x = cx + (1 - t) * Math.cos((i / n) * Math.PI * 2) * rx * 0.2;
        y = cy + spread;
        angle = 0;
      } else if (phase.id === 'anaphase') {
        const spread = ((i - (n - 1) / 2) / n) * ry * 1.1;
        const sep = t * rx * 0.55;
        split = true;
        pairOffset = 0;
        // draw two chromatids moving apart
        drawChromosome(ctx, cx - sep, cy + spread, 0, true, 0, color);
        drawChromosome(ctx, cx + sep, cy + spread, 0, true, 0, color);
        continue;
      } else if (phase.id === 'telophase') {
        const spread = ((i - (n - 1) / 2) / n) * ry * 0.55;
        const sep = rx * 0.55;
        split = true;
        drawChromosome(ctx, cx - sep, cy + spread * (1 - t * 0.3), 0, true, 0, color);
        drawChromosome(ctx, cx + sep, cy + spread * (1 - t * 0.3), 0, true, 0, color);
        continue;
      }

      drawChromosome(ctx, x, y, angle, split, pairOffset, color);
    }

    // labels
    ctx.fillStyle = T.text;
    ctx.font = '13px sans-serif';
    ctx.fillText(`${phase.name}：${phase.desc}`, 14, 22);
  }

  function update(dt) {
    progress += dt * 0.35;
    if (progress >= 1) {
      progress = 0;
      phaseIdx = (phaseIdx + 1) % PHASES.length;
      syncPills();
    }
  }

  function draw() {
    drawCell(canvas.getContext('2d'));
    const phase = PHASES[phaseIdx];
    readouts.set([
      ['阶段 · Phase', phase.name],
      ['进度 · Progress', `${Math.round(progress * 100)}%`],
      ['说明 · Description', phase.desc],
    ]);
  }

  const loop = startAnimLoop(wrap, draw, {
    step: SIM_STEP,
    update,
    getRate: () => (sim.isPlaying() ? sim.getRate() : 0),
  });
  return () => {
    loop();
    sim.destroy();
    unobserve();
  };
}
