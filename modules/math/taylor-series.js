import { el, slider, select, fitCanvas, observeSize, readoutBar, checkbox } from '../../js/ui.js';
import { themeColors, rgba } from '../../js/theme.js';
import { startAnimLoop } from '../anim-loop.js';
import { mountSimControls } from '../sim-controls.js';


function factorial(n) {
  let r = 1;
  for (let i = 2; i <= n; i++) r *= i;
  return r;
}

const TARGETS = {
  sin: {
    label: 'sin(x)',
    f: Math.sin,
    // Maclaurin: Σ (-1)^k x^{2k+1} / (2k+1)!
    poly: (x, order) => {
      let s = 0;
      for (let k = 0; 2 * k + 1 <= order; k++) {
        const p = 2 * k + 1;
        s += ((k % 2 === 0 ? 1 : -1) * Math.pow(x, p)) / factorial(p);
      }
      return s;
    },
  },
  cos: {
    label: 'cos(x)',
    f: Math.cos,
    poly: (x, order) => {
      let s = 0;
      for (let k = 0; 2 * k <= order; k++) {
        const p = 2 * k;
        s += ((k % 2 === 0 ? 1 : -1) * Math.pow(x, p)) / factorial(p);
      }
      return s;
    },
  },
  exp: {
    label: 'eˣ',
    f: Math.exp,
    poly: (x, order) => {
      let s = 0;
      for (let k = 0; k <= order; k++) {
        s += Math.pow(x, k) / factorial(k);
      }
      return s;
    },
  },
};

export function create(viz, controls) {
  const wrap = el('div', { className: 'canvas-wrap' });
  const canvas = el('canvas');
  wrap.appendChild(canvas);
  viz.appendChild(wrap);
  const readouts = readoutBar(viz);

  let key = 'sin';
  let order = 5;
  let showError = true;
  let w = 600;
  let h = 420;
  const xMin = -8;
  const xMax = 8;
  const yMin = -4;
  const yMax = 4;

  controls.appendChild(el('h2', { text: '泰勒逼近 · Taylor approximation' }));
  const sim = mountSimControls(controls, {
    host: controls.closest('.module-layout'),
    step: () => draw(),
    onReset: () => { key = 'sin'; keySel.value = 'sin'; order = 5; showError = true; errorBox.checked = true; },
  });
  const keySel = select(controls, {
    label: '目标函数 · Target（在 0 处展开 / expanded at 0）',
    value: key,
    options: Object.entries(TARGETS).map(([k, v]) => ({ value: k, label: v.label })),
    onChange: (v) => {
      key = v;
    },
  });
  slider(controls, {
    label: '多项式阶数 · Polynomial order n',
    min: 0,
    max: 20,
    step: 1,
    value: order,
    format: (v) => String(Math.round(v)),
    onChange: (v) => {
      order = Math.round(v);
    },
  });
  const errorBox = checkbox(controls, {
    label: '显示误差带 · Show error band |f−Pₙ|',
    checked: true,
    onChange: (v) => {
      showError = v;
    },
  });
  controls.appendChild(
    el('p', {
      className: 'hint',
      text: '蓝线为原函数，橙线为 n 阶麦克劳林多项式。 · Blue: target function; orange: nth Maclaurin polynomial.',
    }),
  );

  function resize(cw, ch) {
    w = cw;
    h = ch;
    fitCanvas(canvas, w, h);
  }
  const unobserve = observeSize(wrap, resize);

  function mapX(x) {
    return ((x - xMin) / (xMax - xMin)) * w;
  }
  function mapY(y) {
    return h - ((y - yMin) / (yMax - yMin)) * h;
  }

  function draw() {
    const tc = themeColors();
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, w, h);
    const T = TARGETS[key];

    ctx.strokeStyle = tc.grid;
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
    ctx.strokeStyle = tc.axis;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(0, mapY(0));
    ctx.lineTo(w, mapY(0));
    ctx.moveTo(mapX(0), 0);
    ctx.lineTo(mapX(0), h);
    ctx.stroke();

    const N = Math.floor(w);
    // error fill
    if (showError) {
      ctx.fillStyle = rgba(tc.danger, 0.12);
      ctx.beginPath();
      for (let i = 0; i <= N; i++) {
        const x = xMin + (i / N) * (xMax - xMin);
        const y = T.f(x);
        ctx.lineTo(mapX(x), mapY(y));
      }
      for (let i = N; i >= 0; i--) {
        const x = xMin + (i / N) * (xMax - xMin);
        let y = T.poly(x, order);
        if (!Number.isFinite(y)) y = yMax * 2;
        y = Math.max(yMin - 1, Math.min(yMax + 1, y));
        ctx.lineTo(mapX(x), mapY(y));
      }
      ctx.closePath();
      ctx.fill();
    }

    const strokeFn = (fn, color, lw) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = lw;
      ctx.beginPath();
      let started = false;
      for (let i = 0; i <= N; i++) {
        const x = xMin + (i / N) * (xMax - xMin);
        let y = fn(x);
        if (!Number.isFinite(y) || y < yMin - 2 || y > yMax + 2) {
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
    };

    strokeFn(T.f, tc.math, 2.5);
    strokeFn((x) => T.poly(x, order), tc.physics, 2);

    // sample error at x=2
    const err = Math.abs(T.f(2) - T.poly(2, order));
    readouts.set([
      ['阶数 · Order n', String(order)],
      ['目标函数 · Target', T.label],
      ['误差 · Error |f(2)−Pₙ(2)|', err.toExponential(2)],
    ]);
  }

  const loop = startAnimLoop(wrap, draw);
  return () => {
    loop();
    sim.destroy();
    unobserve();
  };
}
