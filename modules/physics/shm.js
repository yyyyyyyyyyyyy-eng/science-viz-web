import { mountExamFigures } from './exam-figures.js';
import { el, slider, button, fitCanvas, observeSize, readoutBar } from '../../js/ui.js';
import { themeColors, rgba } from '../../js/theme.js';


function createBase(viz, controls) {
  const wrap = el('div', { className: 'canvas-wrap' });
  const canvas = el('canvas');
  wrap.appendChild(canvas);
  viz.appendChild(wrap);

  const charts = el('div', { className: 'chart-row' });
  const xtWrap = el('div');
  xtWrap.appendChild(el('div', { className: 'mini-canvas-label', text: '位移–时间 x(t)' }));
  const xtCanvas = el('canvas', {
    className: 'mini-chart',
  });
  xtWrap.appendChild(xtCanvas);
  const eWrap = el('div');
  eWrap.appendChild(el('div', { className: 'mini-canvas-label', text: '能量：动能 / 势能 / 总能' }));
  const eCanvas = el('canvas', {
    className: 'mini-chart',
  });
  eWrap.appendChild(eCanvas);
  charts.append(xtWrap, eWrap);
  viz.appendChild(charts);
  const readouts = readoutBar(viz);

  let m = 1;
  let kSpring = 8;
  let cDamp = 0.15;
  let x = 1.2;
  let v = 0;
  let t = 0;
  let playing = true;
  let history = [];
  let w = 600;
  let h = 260;
  let raf = 0;
  let last = performance.now();

  controls.appendChild(el('h2', { text: '弹簧–质量' }));
  slider(controls, {
    label: '质量 m',
    min: 0.2,
    max: 5,
    step: 0.1,
    value: m,
    format: (v) => `${v.toFixed(1)} kg`,
    onChange: (v) => {
      m = v;
    },
  });
  slider(controls, {
    label: '劲度系数 k',
    min: 1,
    max: 30,
    step: 0.5,
    value: kSpring,
    format: (v) => `${v.toFixed(1)} N/m`,
    onChange: (v) => {
      kSpring = v;
    },
  });
  slider(controls, {
    label: '阻尼 c',
    min: 0,
    max: 4,
    step: 0.05,
    value: cDamp,
    format: (v) => v.toFixed(2),
    onChange: (v) => {
      cDamp = v;
    },
  });
  slider(controls, {
    label: '初始位移 x₀',
    min: -2,
    max: 2,
    step: 0.05,
    value: x,
    format: (v) => `${v.toFixed(2)} m`,
    onChange: (v) => {
      if (!playing) x = v;
      else {
        x = v;
        v = 0;
      }
    },
  });

  const btnRow = el('div', { className: 'btn-row' });
  controls.appendChild(btnRow);
  const playBtn = button(btnRow, {
    text: '暂停',
    className: 'primary',
    onClick: () => {
      playing = !playing;
      playBtn.textContent = playing ? '暂停' : '播放';
    },
  });
  button(btnRow, {
    text: '扰动',
    onClick: () => {
      x = 1.5;
      v = 0;
      history = [];
      t = 0;
    },
  });

  controls.appendChild(
    el('p', {
      className: 'hint',
      text: '方程 mẍ = −kx − cẋ。',
    }),
  );

  function resize(cw, ch) {
    w = cw;
    h = Math.max(200, ch);
    fitCanvas(canvas, w, h);
  }
  const unobserve = observeSize(wrap, resize);

  function fitMini(c, cssH = 140) {
    const rect = c.parentElement.getBoundingClientRect();
    return fitCanvas(c, Math.max(100, rect.width), cssH);
  }

  function step(dt) {
    // semi-implicit Euler
    const a = (-kSpring * x - cDamp * v) / m;
    v += a * dt;
    x += v * dt;
    t += dt;
  }

  function drawMain(ctx) {
    const T = themeColors();
    ctx.clearRect(0, 0, w, h);
    const wallX = 40;
    const eqX = w * 0.45;
    const y = h * 0.55;
    const scale = 70;
    const massX = eqX + x * scale;

    // wall
    ctx.fillStyle = T.border;
    ctx.fillRect(wallX - 16, y - 50, 16, 100);
    for (let i = 0; i < 8; i++) {
      ctx.strokeStyle = T.axis;
      ctx.beginPath();
      ctx.moveTo(wallX - 16, y - 50 + i * 12);
      ctx.lineTo(wallX, y - 40 + i * 12);
      ctx.stroke();
    }

    // spring coils
    const coils = 14;
    ctx.strokeStyle = T.text;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(wallX, y);
    for (let i = 1; i <= coils; i++) {
      const px = wallX + ((massX - 28 - wallX) * i) / coils;
      const py = y + (i % 2 === 0 ? -14 : 14);
      ctx.lineTo(px, py);
    }
    ctx.lineTo(massX - 28, y);
    ctx.stroke();

    // equilibrium line
    ctx.setLineDash([4, 4]);
    ctx.strokeStyle = rgba(T.math, 0.5);
    ctx.beginPath();
    ctx.moveTo(eqX, 20);
    ctx.lineTo(eqX, h - 20);
    ctx.stroke();
    ctx.setLineDash([]);

    // mass
    const size = 28 + m * 4;
    ctx.fillStyle = T.math;
    ctx.strokeStyle = T.textStrong;
    ctx.lineWidth = 2;
    ctx.beginPath();
    const rx = massX - size / 2;
    const ry = y - size / 2;
    if (typeof ctx.roundRect === 'function') {
      ctx.roundRect(rx, ry, size, size, 8);
    } else {
      ctx.rect(rx, ry, size, size);
    }
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = T.text;
    ctx.font = '12px sans-serif';
    ctx.fillText('平衡位置', eqX + 6, 28);
  }

  function drawXT() {
    const T = themeColors();
    const { ctx, w: tw, h: th } = fitMini(xtCanvas, 140);
    ctx.clearRect(0, 0, tw, th);
    if (history.length < 2) return;
    const pad = 8;
    const maxA = Math.max(0.5, ...history.map((p) => Math.abs(p.x))) * 1.2;
    const mapY = (xx) => th / 2 - (xx / maxA) * (th / 2 - pad);
    ctx.strokeStyle = T.grid;
    ctx.beginPath();
    ctx.moveTo(0, th / 2);
    ctx.lineTo(tw, th / 2);
    ctx.stroke();
    ctx.strokeStyle = T.math;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    history.forEach((p, i) => {
      const X = pad + (i / Math.max(1, history.length - 1)) * (tw - 2 * pad);
      const Y = mapY(p.x);
      if (i === 0) ctx.moveTo(X, Y);
      else ctx.lineTo(X, Y);
    });
    ctx.stroke();
  }

  function drawE() {
    const T = themeColors();
    const { ctx, w: ew, h: eh } = fitMini(eCanvas, 140);
    ctx.clearRect(0, 0, ew, eh);
    if (history.length < 2) return;
    const pad = 8;
    const energies = history.map((p) => {
      const ke = 0.5 * m * p.v * p.v;
      const pe = 0.5 * kSpring * p.x * p.x;
      return { ke, pe, tot: ke + pe };
    });
    const maxE = Math.max(0.1, ...energies.map((e) => e.tot)) * 1.15;
    const mapY = (e) => eh - pad - (e / maxE) * (eh - 2 * pad);
    const stroke = (pick, color) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      energies.forEach((e, i) => {
        const X = pad + (i / Math.max(1, energies.length - 1)) * (ew - 2 * pad);
        const Y = mapY(pick(e));
        if (i === 0) ctx.moveTo(X, Y);
        else ctx.lineTo(X, Y);
      });
      ctx.stroke();
    };
    stroke((e) => e.ke, T.warn);
    stroke((e) => e.pe, T.bio);
    stroke((e) => e.tot, T.danger);
  }

  function tick(now) {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    if (playing) {
      const steps = 5;
      const hdt = dt / steps;
      for (let i = 0; i < steps; i++) step(hdt);
      history.push({ t, x, v });
      if (history.length > 400) history.shift();
    }
    drawMain(canvas.getContext('2d'));
    drawXT();
    drawE();
    const omega = Math.sqrt(kSpring / m);
    const ke = 0.5 * m * v * v;
    const pe = 0.5 * kSpring * x * x;
    readouts.set([
      ['x', `${x.toFixed(3)} m`],
      ['v', `${v.toFixed(3)} m/s`],
      ['ω₀', `${omega.toFixed(2)} rad/s`],
      ['T₀', `${((2 * Math.PI) / omega).toFixed(2)} s`],
      ['E', `${(ke + pe).toFixed(3)} J`],
    ]);
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
  mountExamFigures(viz, 'shm');
  return inst;
}
