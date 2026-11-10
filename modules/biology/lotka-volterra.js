import { el, slider, fitCanvas, observeSize, readoutBar } from '../../js/ui.js';
import { themeColors, rgba } from '../../js/theme.js';
import { startAnimLoop } from '../anim-loop.js';
import { mountSimControls, SIM_STEP } from '../sim-controls.js';


export function create(viz, controls) {
  const wrap = el('div', { className: 'canvas-wrap' });
  const canvas = el('canvas');
  wrap.appendChild(canvas);
  viz.appendChild(wrap);

  const charts = el('div', { className: 'chart-row' });
  const timeWrap = el('div');
  timeWrap.appendChild(el('div', { className: 'mini-canvas-label', text: '时间序列（猎物 / 捕食者） · Time series (prey / predator)' }));
  const timeCanvas = el('canvas', { className: 'mini-chart' });
  timeWrap.appendChild(timeCanvas);
  const phaseWrap = el('div');
  phaseWrap.appendChild(el('div', { className: 'mini-canvas-label', text: '相图（猎物 x — 捕食者 y） · Phase portrait (prey x — predator y)' }));
  const phaseCanvas = el('canvas', { className: 'mini-chart' });
  phaseWrap.appendChild(phaseCanvas);
  charts.append(timeWrap, phaseWrap);
  viz.appendChild(charts);
  const readouts = readoutBar(viz);

  // params
  let alpha = 1.1; // prey growth
  let beta = 0.4; // predation
  let delta = 0.1; // predator growth from hunting
  let gamma = 0.4; // predator death
  let x = 10;
  let y = 5;
  let trail = [];
  let timeSeries = [];
  let tSim = 0;
  let w = 600;
  let h = 280;

  controls.appendChild(el('h2', { text: '参数 · Parameters' }));
  const sim = mountSimControls(controls, {
    host: controls.closest('.module-layout'),
    step: () => { update(SIM_STEP); drawAll(); },
    onReset: () => {
      alpha = 1.1; beta = 0.4; delta = 0.1; gamma = 0.4;
      x = 10; y = 5; tSim = 0; trail = []; timeSeries = [];
    },
  });

  const mk = (label, key, min, max, step, val, fmt) => {
    slider(controls, {
      label,
      min,
      max,
      step,
      value: val,
      format: fmt || ((v) => v.toFixed(2)),
      onChange: (v) => {
        if (key === 'alpha') alpha = v;
        if (key === 'beta') beta = v;
        if (key === 'delta') delta = v;
        if (key === 'gamma') gamma = v;
      },
    });
  };

  mk('猎物增长率 · Prey growth α', 'alpha', 0.1, 2.5, 0.05, alpha);
  mk('捕食效率 · Predation β', 'beta', 0.05, 1.2, 0.05, beta);
  mk('转化效率 · Conversion δ', 'delta', 0.02, 0.5, 0.01, delta);
  mk('捕食者死亡率 · Predator death γ', 'gamma', 0.05, 1.5, 0.05, gamma);

  controls.appendChild(
    el('p', {
      className: 'hint',
      text: '平衡点 (γ/δ, α/β)。 · Equilibrium (γ/δ, α/β).',
    }),
  );

  function resizeMain(cw, ch) {
    w = cw;
    h = Math.max(220, ch);
    fitCanvas(canvas, w, h);
  }
  const unobserve = observeSize(wrap, resizeMain);

  function fitMini(c, cssH = 140) {
    const rect = c.parentElement.getBoundingClientRect();
    return fitCanvas(c, Math.max(100, rect.width), cssH);
  }

  function rk4(dt) {
    const f = (xx, yy) => ({
      dx: alpha * xx - beta * xx * yy,
      dy: delta * xx * yy - gamma * yy,
    });
    const k1 = f(x, y);
    const k2 = f(x + (dt / 2) * k1.dx, y + (dt / 2) * k1.dy);
    const k3 = f(x + (dt / 2) * k2.dx, y + (dt / 2) * k2.dy);
    const k4 = f(x + dt * k3.dx, y + dt * k3.dy);
    x += (dt / 6) * (k1.dx + 2 * k2.dx + 2 * k3.dx + k4.dx);
    y += (dt / 6) * (k1.dy + 2 * k2.dy + 2 * k3.dy + k4.dy);
    x = Math.max(0.01, x);
    y = Math.max(0.01, y);
  }

  function drawMain(ctx) {
    const T = themeColors();
    ctx.clearRect(0, 0, w, h);
    // habitat
    ctx.fillStyle = T.canvasBg;
    ctx.fillRect(0, 0, w, h);

    const eqX = gamma / delta;
    const eqY = alpha / beta;

    // creatures as dots proportional to population
    const preyN = Math.min(80, Math.round(x * 2));
    const predN = Math.min(50, Math.round(y * 3));
    // deterministic pseudo positions
    for (let i = 0; i < preyN; i++) {
      const px = ((Math.sin(i * 12.9898 + tSim) * 0.5 + 0.5) * 0.9 + 0.05) * w;
      const py = ((Math.cos(i * 78.233 + tSim * 0.7) * 0.5 + 0.5) * 0.85 + 0.08) * h;
      ctx.fillStyle = rgba(T.bio, 0.85);
      ctx.beginPath();
      ctx.arc(px, py, 4, 0, Math.PI * 2);
      ctx.fill();
    }
    for (let i = 0; i < predN; i++) {
      const px = ((Math.sin(i * 44.13 + tSim * 1.3) * 0.5 + 0.5) * 0.9 + 0.05) * w;
      const py = ((Math.cos(i * 19.71 + tSim * 0.9) * 0.5 + 0.5) * 0.85 + 0.08) * h;
      ctx.fillStyle = rgba(T.physics, 0.9);
      ctx.beginPath();
      ctx.moveTo(px, py - 6);
      ctx.lineTo(px + 5, py + 4);
      ctx.lineTo(px - 5, py + 4);
      ctx.closePath();
      ctx.fill();
    }

    ctx.fillStyle = T.text;
    ctx.font = '12px sans-serif';
    ctx.fillText(`平衡点 · Equilibrium ≈ (${eqX.toFixed(2)}, ${eqY.toFixed(2)})`, 12, 20);
    ctx.fillStyle = T.bio;
    const preyLabel = '猎物 · Prey';
    ctx.fillText(preyLabel, 12, h - 16);
    ctx.fillStyle = T.physics;
    ctx.fillText('捕食者 · Predator', 12 + ctx.measureText(preyLabel).width + 24, h - 16);
  }

  function drawTime() {
    const T = themeColors();
    const { ctx, w: tw, h: th } = fitMini(timeCanvas, 140);
    ctx.clearRect(0, 0, tw, th);
    if (timeSeries.length < 2) return;
    const maxT = timeSeries[timeSeries.length - 1].t;
    const minT = timeSeries[0].t;
    const maxV = Math.max(1, ...timeSeries.map((p) => Math.max(p.x, p.y)));
    const pad = 8;
    const mapX = (t) => pad + ((t - minT) / Math.max(1e-6, maxT - minT)) * (tw - 2 * pad);
    const mapY = (v) => th - pad - (v / maxV) * (th - 2 * pad);

    ctx.strokeStyle = T.grid;
    ctx.strokeRect(0.5, 0.5, tw - 1, th - 1);

    ctx.beginPath();
    timeSeries.forEach((p, i) => {
      const X = mapX(p.t);
      const Y = mapY(p.x);
      if (i === 0) ctx.moveTo(X, Y);
      else ctx.lineTo(X, Y);
    });
    ctx.strokeStyle = T.bio;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.beginPath();
    timeSeries.forEach((p, i) => {
      const X = mapX(p.t);
      const Y = mapY(p.y);
      if (i === 0) ctx.moveTo(X, Y);
      else ctx.lineTo(X, Y);
    });
    ctx.strokeStyle = T.physics;
    ctx.stroke();
  }

  function drawPhase() {
    const T = themeColors();
    const { ctx, w: pw, h: ph } = fitMini(phaseCanvas, 140);
    ctx.clearRect(0, 0, pw, ph);
    ctx.strokeStyle = T.grid;
    ctx.strokeRect(0.5, 0.5, pw - 1, ph - 1);
    if (trail.length < 2) return;
    const maxX = Math.max(5, ...trail.map((p) => p.x)) * 1.1;
    const maxY = Math.max(5, ...trail.map((p) => p.y)) * 1.1;
    const pad = 10;
    const mapX = (v) => pad + (v / maxX) * (pw - 2 * pad);
    const mapY = (v) => ph - pad - (v / maxY) * (ph - 2 * pad);

    // equilibrium
    const eqX = gamma / delta;
    const eqY = alpha / beta;
    ctx.fillStyle = T.math;
    ctx.beginPath();
    ctx.arc(mapX(eqX), mapY(eqY), 4, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    trail.forEach((p, i) => {
      const X = mapX(p.x);
      const Y = mapY(p.y);
      if (i === 0) ctx.moveTo(X, Y);
      else ctx.lineTo(X, Y);
    });
    ctx.strokeStyle = rgba(T.accentSoft, 0.85);
    ctx.lineWidth = 1.5;
    ctx.stroke();

    const lastP = trail[trail.length - 1];
    ctx.fillStyle = T.textStrong;
    ctx.beginPath();
    ctx.arc(mapX(lastP.x), mapY(lastP.y), 3, 0, Math.PI * 2);
    ctx.fill();
  }

  function update() {
    const steps = 4;
    const dt = 0.02;
    for (let i = 0; i < steps; i++) {
      rk4(dt);
      tSim += dt;
    }
    trail.push({ x, y });
    if (trail.length > 1500) trail.shift();
    timeSeries.push({ t: tSim, x, y });
    if (timeSeries.length > 1500) timeSeries.shift();
  }

  function drawAll() {
    drawMain(canvas.getContext('2d'));
    drawTime();
    drawPhase();
    readouts.set([
      ['猎物 · Prey x', x.toFixed(2)],
      ['捕食者 · Predator y', y.toFixed(2)],
      ['时间 · t', tSim.toFixed(1)],
      ['平衡点 · Equilibrium', `(${(gamma / delta).toFixed(2)}, ${(alpha / beta).toFixed(2)})`],
    ]);
  }

  const loop = startAnimLoop(wrap, drawAll, {
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
