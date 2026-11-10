import { mountExamFigures } from './exam-figures.js';
import { el, button, fitCanvas, observeSize, readoutBar, checkbox } from '../../js/ui.js';
import { themeColors, rgba } from '../../js/theme.js';
import { startAnimLoop } from '../anim-loop.js';
import { mountSimControls } from '../sim-controls.js';


const K = 1; // scaled Coulomb constant for visualization

function createBase(viz, controls) {
  const wrap = el('div', { className: 'canvas-wrap' });
  const canvas = el('canvas');
  wrap.appendChild(canvas);
  viz.appendChild(wrap);
  const readouts = readoutBar(viz);

  /** @type {{x:number,y:number,q:number,id:number}[]} */
  let charges = [
    { id: 1, x: -0.35, y: 0, q: 1 },
    { id: 2, x: 0.35, y: 0, q: -1 },
  ];
  let nextId = 3;
  let showLines = true;
  let showEqui = true;
  let showVectors = false;
  let dragId = null;
  let w = 600;
  let h = 420;
  const initialCharges = charges.map((c) => ({ ...c }));

  controls.appendChild(el('h2', { text: '电荷 · Charges' }));
  const sim = mountSimControls(controls, {
    host: controls.closest('.module-layout'),
    step: () => draw(),
    onReset: () => {
      charges = initialCharges.map((c) => ({ ...c }));
      nextId = 3;
      showLines = true; showEqui = true; showVectors = false;
      linesBox.checked = true; equiBox.checked = true; vectorsBox.checked = false;
    },
  });
  const btnRow = el('div', { className: 'btn-row' });
  controls.appendChild(btnRow);
  button(btnRow, {
    text: '+ 正电荷',
    className: 'primary',
    onClick: () => {
      charges.push({ id: nextId++, x: (Math.random() - 0.5) * 0.6, y: (Math.random() - 0.5) * 0.6, q: 1 });
    },
  });
  button(btnRow, {
    text: '− 负电荷',
    onClick: () => {
      charges.push({ id: nextId++, x: (Math.random() - 0.5) * 0.6, y: (Math.random() - 0.5) * 0.6, q: -1 });
    },
  });
  button(btnRow, {
    text: '清空',
    className: 'danger',
    onClick: () => {
      charges = [];
    },
  });
  button(btnRow, {
    text: '电偶极子',
    onClick: () => {
      charges = [
        { id: nextId++, x: -0.35, y: 0, q: 1 },
        { id: nextId++, x: 0.35, y: 0, q: -1 },
      ];
    },
  });

  const linesBox = checkbox(controls, {
    label: '电场线 · Field lines',
    checked: true,
    onChange: (v) => {
      showLines = v;
    },
  });
  const equiBox = checkbox(controls, {
    label: '等势线 · Equipotentials',
    checked: true,
    onChange: (v) => {
      showEqui = v;
    },
  });
  const vectorsBox = checkbox(controls, {
    label: '场强矢量网格 · Field-vector grid',
    checked: false,
    onChange: (v) => {
      showVectors = v;
    },
  });

  controls.appendChild(
    el('p', {
      className: 'hint',
      text: '拖动电荷。 · Drag the charges.',
    }),
  );

  function toWorld(px, py) {
    const scale = Math.min(w, h) * 0.42;
    return {
      x: (px - w / 2) / scale,
      y: -(py - h / 2) / scale,
    };
  }
  function toScreen(wx, wy) {
    const scale = Math.min(w, h) * 0.42;
    return {
      x: w / 2 + wx * scale,
      y: h / 2 - wy * scale,
    };
  }

  function fieldAt(x, y) {
    let ex = 0;
    let ey = 0;
    for (const c of charges) {
      const dx = x - c.x;
      const dy = y - c.y;
      const r2 = dx * dx + dy * dy + 1e-4;
      const r = Math.sqrt(r2);
      const mag = (K * c.q) / r2;
      ex += (mag * dx) / r;
      ey += (mag * dy) / r;
    }
    return { ex, ey };
  }

  function potentialAt(x, y) {
    let p = 0;
    for (const c of charges) {
      const dx = x - c.x;
      const dy = y - c.y;
      const r = Math.sqrt(dx * dx + dy * dy + 1e-4);
      p += (K * c.q) / r;
    }
    return p;
  }

  function resize(cw, ch) {
    w = cw;
    h = ch;
    fitCanvas(canvas, w, h);
  }
  const unobserve = observeSize(wrap, resize);

  function pickCharge(px, py) {
    for (let i = charges.length - 1; i >= 0; i--) {
      const s = toScreen(charges[i].x, charges[i].y);
      if ((px - s.x) ** 2 + (py - s.y) ** 2 < 18 ** 2) return charges[i].id;
    }
    return null;
  }

  canvas.addEventListener('pointerdown', (e) => {
    const rect = canvas.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    dragId = pickCharge(px, py);
    if (dragId != null) canvas.setPointerCapture(e.pointerId);
  });
  canvas.addEventListener('pointermove', (e) => {
    if (dragId == null) return;
    const rect = canvas.getBoundingClientRect();
    const world = toWorld(e.clientX - rect.left, e.clientY - rect.top);
    const c = charges.find((ch) => ch.id === dragId);
    if (c) {
      c.x = Math.max(-1.2, Math.min(1.2, world.x));
      c.y = Math.max(-1.2, Math.min(1.2, world.y));
    }
  });
  canvas.addEventListener('pointerup', () => {
    dragId = null;
  });

  function traceLine(ctx, startX, startY, dir, color) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    let x = startX;
    let y = startY;
    const s0 = toScreen(x, y);
    ctx.moveTo(s0.x, s0.y);
    const ds = 0.02 * dir;
    for (let i = 0; i < 280; i++) {
      const { ex, ey } = fieldAt(x, y);
      const mag = Math.hypot(ex, ey) || 1e-9;
      x += (ex / mag) * ds;
      y += (ey / mag) * ds;
      if (Math.abs(x) > 1.6 || Math.abs(y) > 1.6) break;
      // stop near opposite charge
      let near = false;
      for (const c of charges) {
        if (Math.hypot(x - c.x, y - c.y) < 0.06) {
          near = true;
          break;
        }
      }
      const s = toScreen(x, y);
      ctx.lineTo(s.x, s.y);
      if (near) break;
    }
    ctx.stroke();
  }

  function drawEquipotentials(ctx) {
    const T = themeColors();
    // sample grid and draw marching-squares-ish contour rings via threshold bands
    const n = 70;
    const vals = [];
    let vmin = Infinity;
    let vmax = -Infinity;
    for (let j = 0; j <= n; j++) {
      vals[j] = [];
      for (let i = 0; i <= n; i++) {
        const x = -1.3 + (2.6 * i) / n;
        const y = -1.3 + (2.6 * j) / n;
        // skip near charges
        let skip = false;
        for (const c of charges) {
          if (Math.hypot(x - c.x, y - c.y) < 0.08) skip = true;
        }
        const p = skip ? NaN : potentialAt(x, y);
        vals[j][i] = p;
        if (Number.isFinite(p)) {
          vmin = Math.min(vmin, p);
          vmax = Math.max(vmax, p);
        }
      }
    }
    if (!Number.isFinite(vmin) || vmax - vmin < 1e-6) return;
    const levels = 9;
    for (let L = 1; L < levels; L++) {
      const level = vmin + ((vmax - vmin) * L) / levels;
      ctx.fillStyle = rgba(T.accentSoft, 0.35);
      for (let j = 0; j < n; j++) {
        for (let i = 0; i < n; i++) {
          const a = vals[j][i];
          const b = vals[j][i + 1];
          const c = vals[j + 1][i + 1];
          const d = vals[j + 1][i];
          if (![a, b, c, d].every(Number.isFinite)) continue;
          const crosses =
            (a - level) * (b - level) < 0 ||
            (b - level) * (c - level) < 0 ||
            (c - level) * (d - level) < 0 ||
            (d - level) * (a - level) < 0;
          if (!crosses) continue;
          const x = -1.3 + (2.6 * (i + 0.5)) / n;
          const y = -1.3 + (2.6 * (j + 0.5)) / n;
          const s = toScreen(x, y);
          ctx.fillRect(s.x - 1, s.y - 1, 2, 2);
        }
      }
    }
  }

  function draw() {
    const T = themeColors();
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, w, h);

    // subtle grid
    ctx.strokeStyle = T.grid;
    ctx.lineWidth = 1;
    for (let i = -4; i <= 4; i++) {
      const a = toScreen(i * 0.3, -1.4);
      const b = toScreen(i * 0.3, 1.4);
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
      const c = toScreen(-1.4, i * 0.3);
      const d = toScreen(1.4, i * 0.3);
      ctx.beginPath();
      ctx.moveTo(c.x, c.y);
      ctx.lineTo(d.x, d.y);
      ctx.stroke();
    }

    if (showEqui && charges.length) drawEquipotentials(ctx);

    if (showVectors) {
      for (let iy = -4; iy <= 4; iy++) {
        for (let ix = -4; ix <= 4; ix++) {
          const x = ix * 0.28;
          const y = iy * 0.28;
          let near = false;
          for (const c of charges) if (Math.hypot(x - c.x, y - c.y) < 0.12) near = true;
          if (near) continue;
          const { ex, ey } = fieldAt(x, y);
          const mag = Math.hypot(ex, ey) || 1;
          const len = 0.1;
          const s0 = toScreen(x, y);
          const s1 = toScreen(x + (ex / mag) * len, y + (ey / mag) * len);
          ctx.strokeStyle = rgba(T.math, 0.55);
          ctx.beginPath();
          ctx.moveTo(s0.x, s0.y);
          ctx.lineTo(s1.x, s1.y);
          ctx.stroke();
        }
      }
    }

    if (showLines) {
      for (const c of charges) {
        if (c.q === 0) continue;
        const nLines = 12;
        for (let i = 0; i < nLines; i++) {
          const ang = (i / nLines) * Math.PI * 2;
          const r0 = 0.08;
          const sx = c.x + Math.cos(ang) * r0;
          const sy = c.y + Math.sin(ang) * r0;
          const dir = c.q > 0 ? 1 : -1;
          const color = c.q > 0 ? rgba(T.danger, 0.55) : rgba(T.math, 0.55);
          traceLine(ctx, sx, sy, dir, color);
        }
      }
    }

    // charges
    for (const c of charges) {
      const s = toScreen(c.x, c.y);
      ctx.beginPath();
      ctx.arc(s.x, s.y, 14, 0, Math.PI * 2);
      ctx.fillStyle = c.q > 0 ? T.danger : T.math;
      ctx.fill();
      ctx.fillStyle = T.onAccent;
      ctx.font = 'bold 16px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(c.q > 0 ? '+' : '−', s.x, s.y + 1);
    }
    ctx.textAlign = 'start';
    ctx.textBaseline = 'alphabetic';

    ctx.fillStyle = T.text;
    ctx.font = '12px sans-serif';
    ctx.fillText('拖动电荷 · drag charges；红正蓝负 · red positive, blue negative', 12, 20);

    const mid = fieldAt(0, 0);
    readouts.set([
      ['电荷数 · Charges', String(charges.length)],
      ['场强 · E(0,0)', `${Math.hypot(mid.ex, mid.ey).toFixed(2)}`],
      ['电势 · φ(0,0)', potentialAt(0, 0).toFixed(2)],
    ]);
  }

  const loop = startAnimLoop(wrap, draw);
  return () => {
    loop();
    sim.destroy();
    unobserve();
  };
}

export function create(viz, controls) {
  const inst = createBase(viz, controls);
  mountExamFigures(viz, 'electric-field');
  return inst;
}
