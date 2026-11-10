import { mountExamFigures } from './exam-figures.js';
import { el, slider, button, fitCanvas, observeSize, readoutBar, checkbox } from '../../js/ui.js';
import { themeColors, rgba } from '../../js/theme.js';


function createBase(viz, controls) {
  const wrap = el('div', { className: 'canvas-wrap' });
  const canvas = el('canvas');
  wrap.appendChild(canvas);
  viz.appendChild(wrap);
  const readouts = readoutBar(viz);

  let angleDeg = 45;
  let speed = 25;
  let g = 9.8;
  let drag = false;
  let k = 0.15;
  let running = false;
  let t = 0;
  let trail = [];
  let x = 0;
  let y = 0;
  let vx = 0;
  let vy = 0;
  let w = 600;
  let h = 420;
  let raf = 0;
  let last = performance.now();

  // world scale (auto-expanded to the ideal flight envelope)
  let worldW = 60; // meters across
  let worldH = 35;
  let idealR = 1;
  let idealH = 1;
  let landedX = null;

  controls.appendChild(el('h2', { text: '发射参数' }));
  slider(controls, {
    label: '仰角 θ',
    min: 5,
    max: 85,
    step: 1,
    value: angleDeg,
    format: (v) => `${Math.round(v)}°`,
    onChange: (v) => {
      angleDeg = v;
      if (!running) syncIdeal();
    },
  });
  slider(controls, {
    label: '初速 v₀',
    min: 5,
    max: 45,
    step: 0.5,
    value: speed,
    format: (v) => `${v.toFixed(1)} m/s`,
    onChange: (v) => {
      speed = v;
      if (!running) syncIdeal();
    },
  });
  slider(controls, {
    label: '重力 g',
    min: 1,
    max: 20,
    step: 0.1,
    value: g,
    format: (v) => `${v.toFixed(1)} m/s²`,
    onChange: (v) => {
      g = v;
      if (!running) syncIdeal();
    },
  });
  checkbox(controls, {
    label: '空气阻力（−k v）',
    checked: false,
    onChange: (v) => {
      drag = v;
      syncDragControls();
      if (!running) syncIdeal();
    },
  });
  const kSlider = slider(controls, {
    label: '阻力系数 k',
    min: 0.02,
    max: 0.6,
    step: 0.01,
    value: k,
    format: (v) => v.toFixed(2),
    onChange: (v) => {
      k = v;
    },
  });
  controls.appendChild(
    el('p', {
      className: 'hint',
      text: '开启空气阻力后生效 · Takes effect when air resistance is on',
    }),
  );
  // The drag coefficient only matters while air resistance is enabled.
  function syncDragControls() {
    const group = kSlider.input.closest('.control-group');
    if (group) {
      group.style.opacity = drag ? '' : '0.45';
      group.querySelectorAll('input').forEach((inp) => { inp.disabled = !drag; });
    }
  }
  syncDragControls();

  const btnRow = el('div', { className: 'btn-row' });
  controls.appendChild(btnRow);
  const fireBtn = button(btnRow, {
    text: '发射',
    className: 'primary',
    onClick: () => launch(),
  });
  button(btnRow, {
    text: '重置',
    onClick: () => {
      running = false;
      t = 0;
      trail = [];
      syncIdeal();
      fireBtn.textContent = '发射';
    },
  });

  controls.appendChild(
    el('p', {
      className: 'hint',
      text: '虚线为理想无阻力预测轨迹。',
    }),
  );

  function idealRange() {
    const th = (angleDeg * Math.PI) / 180;
    return (speed * speed * Math.sin(2 * th)) / g;
  }
  function idealHeight() {
    const th = (angleDeg * Math.PI) / 180;
    return (speed * Math.sin(th)) ** 2 / (2 * g);
  }
  function idealTime() {
    const th = (angleDeg * Math.PI) / 180;
    return (2 * speed * Math.sin(th)) / g;
  }

  function syncIdeal() {
    const th = (angleDeg * Math.PI) / 180;
    x = 0;
    y = 0;
    vx = speed * Math.cos(th);
    vy = speed * Math.sin(th);
    trail = [{ x, y }];
    landedX = null;
    idealR = Math.max(idealRange(), 0.5);
    idealH = Math.max(idealHeight(), 0.5);
    updateWorld();
  }
  syncIdeal();

  // Size the world from the ideal range/height with margin, keeping an equal
  // metres-per-pixel scale on both axes so the trajectory is not distorted.
  function updateWorld() {
    const drawW = Math.max(1, w * 0.92);
    const drawH = Math.max(1, h * 0.8);
    const ppm = Math.max(idealR / drawW, idealH / drawH) * 1.12;
    worldW = ppm * drawW;
    worldH = ppm * drawH;
  }

  function launch() {
    syncIdeal();
    running = true;
    t = 0;
    fireBtn.textContent = '飞行中…';
  }

  function resize(cw, ch) {
    w = cw;
    h = ch;
    fitCanvas(canvas, w, h);
    updateWorld();
  }
  const unobserve = observeSize(wrap, resize);

  function mapX(wx) {
    return (wx / worldW) * w * 0.92 + w * 0.04;
  }
  function mapY(wy) {
    const ground = h * 0.88;
    return ground - (wy / worldH) * (h * 0.8);
  }

  function drawIdeal(ctx) {
    const T = themeColors();
    const th = (angleDeg * Math.PI) / 180;
    const v0x = speed * Math.cos(th);
    const v0y = speed * Math.sin(th);
    ctx.setLineDash([5, 5]);
    ctx.strokeStyle = rgba(T.axis, 0.55);
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    let started = false;
    for (let i = 0; i <= 200; i++) {
      const tt = (i / 200) * idealTime() * 1.05;
      const xx = v0x * tt;
      const yy = v0y * tt - 0.5 * g * tt * tt;
      if (yy < -0.1) break;
      const px = mapX(xx);
      const py = mapY(yy);
      if (!started) {
        ctx.moveTo(px, py);
        started = true;
      } else ctx.lineTo(px, py);
    }
    ctx.stroke();
    ctx.setLineDash([]);
  }

  function draw() {
    const T = themeColors();
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, w, h);
    updateWorld();

    // ground
    const ground = h * 0.88;
    ctx.fillStyle = T.surface;
    ctx.fillRect(0, ground, w, h - ground);
    ctx.strokeStyle = T.bio;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, ground);
    ctx.lineTo(w, ground);
    ctx.stroke();

    // ideal landing marker (R) and the actual landing point once it lands
    const lx = mapX(idealR);
    ctx.strokeStyle = T.bio;
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(lx, ground); ctx.lineTo(lx, ground - 14); ctx.stroke();
    ctx.fillStyle = T.bio;
    ctx.beginPath();
    ctx.moveTo(lx, ground - 14);
    ctx.lineTo(lx - 5, ground - 22);
    ctx.lineTo(lx + 5, ground - 22);
    ctx.closePath(); ctx.fill();
    ctx.fillStyle = T.muted;
    ctx.font = '11px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('R', lx, ground - 27);
    ctx.textAlign = 'left';
    if (landedX != null) {
      ctx.fillStyle = T.warn;
      ctx.beginPath();
      ctx.arc(mapX(landedX), ground - 2, 5, 0, Math.PI * 2);
      ctx.fill();
    }

    // launcher
    const th = (angleDeg * Math.PI) / 180;
    const bx = mapX(0);
    const by = mapY(0);
    ctx.strokeStyle = T.text;
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(bx, by);
    ctx.lineTo(bx + Math.cos(th) * 36, by - Math.sin(th) * 36);
    ctx.stroke();

    drawIdeal(ctx);

    // trail
    if (trail.length > 1) {
      ctx.strokeStyle = T.math;
      ctx.lineWidth = 2;
      ctx.beginPath();
      trail.forEach((p, i) => {
        const px = mapX(p.x);
        const py = mapY(p.y);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      });
      ctx.stroke();
    }

    // projectile
    ctx.fillStyle = T.warn;
    ctx.beginPath();
    ctx.arc(mapX(x), mapY(y), 7, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = T.text;
    ctx.font = '12px sans-serif';
    ctx.fillText(`理想射程 R≈${idealRange().toFixed(1)} m　最大高度 H≈${idealHeight().toFixed(1)} m`, 12, 20);

    readouts.set([
      ['t', `${t.toFixed(2)} s`],
      ['x', `${x.toFixed(2)} m`],
      ['y', `${y.toFixed(2)} m`],
      ['|v|', `${Math.hypot(vx, vy).toFixed(2)} m/s`],
      ['理想落地', `${idealTime().toFixed(2)} s`],
    ]);
  }

  function tick(now) {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    if (running) {
      const steps = 4;
      const hdt = dt / steps;
      for (let i = 0; i < steps; i++) {
        let ax = 0;
        let ay = -g;
        if (drag) {
          ax += -k * vx;
          ay += -k * vy;
        }
        vx += ax * hdt;
        vy += ay * hdt;
        x += vx * hdt;
        y += vy * hdt;
        t += hdt;
        if (y < 0 && t > 0.05) {
          y = 0;
          landedX = x;
          running = false;
          fireBtn.textContent = '再次发射';
          break;
        }
      }
      trail.push({ x, y });
      if (trail.length > 800) trail.shift();
    }
    draw();
    raf = requestAnimationFrame(tick);
  }
  raf = requestAnimationFrame(tick);

  return () => {
    cancelAnimationFrame(raf);
    unobserve();
  };
}

export function create(viz, controls) {
  const inst = createBase(viz, controls);
  mountExamFigures(viz, 'projectile');
  return inst;
}
