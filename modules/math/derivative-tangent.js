import { el, slider, select, fitCanvas, observeSize, readoutBar } from '../../js/ui.js';
import { themeColors, rgba } from '../../js/theme.js';
import { startAnimLoop } from '../anim-loop.js';
import { mountSimControls } from '../sim-controls.js';


const FUNCS = {
  sin: {
    label: 'sin(x)',
    f: Math.sin,
    df: Math.cos,
  },
  x2: {
    label: 'x²',
    f: (x) => x * x,
    df: (x) => 2 * x,
  },
  x3: {
    label: 'x³ − x',
    f: (x) => x * x * x - x,
    df: (x) => 3 * x * x - 1,
  },
  exp: {
    label: 'eˣ / 3',
    f: (x) => Math.exp(x) / 3,
    df: (x) => Math.exp(x) / 3,
  },
  cos: {
    label: 'cos(x)',
    f: Math.cos,
    df: (x) => -Math.sin(x),
  },
};

export function create(viz, controls) {
  const wrap = el('div', { className: 'canvas-wrap' });
  const canvas = el('canvas');
  wrap.appendChild(canvas);
  viz.appendChild(wrap);
  const readouts = readoutBar(viz);

  let key = 'x3';
  let x0 = 0.8;
  let dragging = false;
  let w = 600;
  let h = 440;

  const xMin = -3.5;
  const xMax = 3.5;
  const yMin = -3;
  const yMax = 3;

  controls.appendChild(el('h2', { text: '控制 · Controls' }));
  const sim = mountSimControls(controls, {
    host: controls.closest('.module-layout'),
    step: () => draw(),
    onReset: () => { key = 'x3'; funcSel.value = 'x3'; },
  });
  const funcSel = select(controls, {
    label: '函数 · Function',
    value: key,
    options: Object.entries(FUNCS).map(([k, v]) => ({ value: k, label: v.label })),
    onChange: (v) => {
      key = v;
    },
  });
  const xSlider = slider(controls, {
    label: '切点 · Tangent point x₀',
    min: xMin + 0.2,
    max: xMax - 0.2,
    step: 0.01,
    value: x0,
    format: (v) => v.toFixed(2),
    onChange: (v) => {
      x0 = v;
    },
  });
  controls.appendChild(
    el('p', {
      className: 'hint',
      text: '拖动曲线上的黄点，或用滑块改变 x₀。 · Drag the yellow point or change x₀ with the slider.',
    }),
  );

  function mapX(x) {
    return ((x - xMin) / (xMax - xMin)) * w;
  }
  function mapY(y) {
    return h - ((y - yMin) / (yMax - yMin)) * h;
  }
  function invX(px) {
    return xMin + (px / w) * (xMax - xMin);
  }

  function resize(cw, ch) {
    w = cw;
    h = ch;
    fitCanvas(canvas, w, h);
  }
  const unobserve = observeSize(wrap, resize);

  function hitPoint(px, py) {
    const f = FUNCS[key];
    const hx = mapX(x0);
    const hy = mapY(f.f(x0));
    return (px - hx) ** 2 + (py - hy) ** 2 < 16 ** 2;
  }

  canvas.addEventListener('pointerdown', (e) => {
    const rect = canvas.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    if (hitPoint(px, py)) {
      dragging = true;
      canvas.setPointerCapture(e.pointerId);
    } else {
      x0 = Math.min(xMax - 0.2, Math.max(xMin + 0.2, invX(px)));
      xSlider.set(x0);
    }
  });
  canvas.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    const rect = canvas.getBoundingClientRect();
    x0 = Math.min(xMax - 0.2, Math.max(xMin + 0.2, invX(e.clientX - rect.left)));
    xSlider.set(x0);
  });
  canvas.addEventListener('pointerup', () => {
    dragging = false;
  });

  function plot(ctx, fn, style, dash) {
    ctx.save();
    ctx.strokeStyle = style;
    ctx.lineWidth = 2;
    if (dash) ctx.setLineDash(dash);
    ctx.beginPath();
    let started = false;
    const N = Math.floor(w);
    for (let i = 0; i <= N; i++) {
      const x = xMin + (i / N) * (xMax - xMin);
      const y = fn(x);
      if (!Number.isFinite(y)) {
        started = false;
        continue;
      }
      const px = mapX(x);
      const py = mapY(y);
      if (!started) {
        ctx.moveTo(px, py);
        started = true;
      } else ctx.lineTo(px, py);
    }
    ctx.stroke();
    ctx.restore();
  }

  function draw() {
    const T = themeColors();
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, w, h);
    const f = FUNCS[key];

    // grid
    ctx.strokeStyle = T.grid;
    for (let x = Math.ceil(xMin); x <= xMax; x++) {
      ctx.beginPath();
      ctx.moveTo(mapX(x), 0);
      ctx.lineTo(mapX(x), h);
      ctx.stroke();
    }
    for (let y = Math.ceil(yMin); y <= yMax; y++) {
      ctx.beginPath();
      ctx.moveTo(0, mapY(y));
      ctx.lineTo(w, mapY(y));
      ctx.stroke();
    }
    ctx.strokeStyle = T.axis;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(0, mapY(0));
    ctx.lineTo(w, mapY(0));
    ctx.moveTo(mapX(0), 0);
    ctx.lineTo(mapX(0), h);
    ctx.stroke();

    plot(ctx, f.f, T.math);
    plot(ctx, f.df, rgba(T.bio, 0.75), [6, 4]);

    const y0 = f.f(x0);
    const m = f.df(x0);
    // tangent
    plot(ctx, (x) => y0 + m * (x - x0), T.physics);

    // point
    ctx.fillStyle = T.warn;
    ctx.beginPath();
    ctx.arc(mapX(x0), mapY(y0), 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = T.canvasBg;
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = T.text;
    ctx.font = '12px sans-serif';
    ctx.fillText('蓝 · blue：f(x)　橙 · orange：切线 tangent　绿虚线 · green dashed：f′(x)', 12, 20);

    readouts.set([
      ['切点 · x₀', x0.toFixed(3)],
      ['函数值 · f(x₀)', y0.toFixed(3)],
      ["导数 · f′(x₀)", m.toFixed(3)],
      ['切线 · Tangent', `y = ${m.toFixed(2)}(x − ${x0.toFixed(2)}) + ${y0.toFixed(2)}`],
    ]);
  }

  const loop = startAnimLoop(wrap, draw);
  return () => {
    loop();
    sim.destroy();
    unobserve();
  };
}
