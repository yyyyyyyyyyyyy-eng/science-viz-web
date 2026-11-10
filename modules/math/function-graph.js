import { el, slider, button, select, fitCanvas, observeSize, readoutBar } from '../../js/ui.js';
import { themeColors, rgba } from '../../js/theme.js';
import { startAnimLoop } from '../anim-loop.js';
import { mountSimControls } from '../sim-controls.js';


const PRESETS = {
  sin: { label: 'sin(x)', fn: Math.sin },
  cos: { label: 'cos(x)', fn: Math.cos },
  tan: {
    label: 'tan(x)',
    fn: (x) => {
      const v = Math.tan(x);
      return Math.abs(v) > 20 ? NaN : v;
    },
  },
  x2: { label: 'x²', fn: (x) => x * x },
  x3: { label: 'x³', fn: (x) => x * x * x },
  exp: { label: 'eˣ', fn: (x) => Math.exp(x) },
  abs: { label: '|x|', fn: Math.abs },
  sqrt: {
    label: '√x (x≥0)',
    fn: (x) => (x < 0 ? NaN : Math.sqrt(x)),
  },
};

function compileExpr(src) {
  const s = String(src || '').trim();
  if (!s) throw new Error('空表达式');
  // allow only safe math tokens
  if (!/^[0-9xX+\-*/().,\s^a-zA-Z]*$/.test(s)) throw new Error('含非法字符');
  let body = s
    .replace(/\^/g, '**')
    .replace(/\bx\b/gi, 'x');
  const allowed = new Set([
    'sin', 'cos', 'tan', 'asin', 'acos', 'atan', 'sqrt', 'abs', 'exp', 'log', 'ln', 'PI', 'E', 'pow', 'min', 'max',
  ]);
  body = body.replace(/\b([a-zA-Z]+)\b/g, (m) => {
    if (m === 'x' || m === 'X') return 'x';
    const low = m.toLowerCase();
    if (low === 'ln') return 'Math.log';
    if (low === 'log') return 'Math.log10';
    if (low === 'pi') return 'Math.PI';
    if (low === 'e') return 'Math.E';
    if (allowed.has(low)) return `Math.${low === 'pow' ? 'pow' : low}`;
    throw new Error(`未知函数 ${m}`);
  });
  // eslint-disable-next-line no-new-func
  const fn = new Function('x', `"use strict"; return (${body});`);
  // test
  fn(0);
  return fn;
}

export function create(viz, controls) {
  const wrap = el('div', { className: 'canvas-wrap' });
  const canvas = el('canvas');
  wrap.appendChild(canvas);
  viz.appendChild(wrap);
  const readouts = readoutBar(viz);

  let preset = 'sin';
  let customFn = null;
  let customSrc = 'sin(x)';
  let a = 1;
  let b = 1;
  let c = 0;
  let d = 0;
  let w = 600;
  let h = 420;
  let xHover = 0;

  controls.appendChild(el('h2', { text: '函数与变换 · Function transformations' }));
  const sim = mountSimControls(controls, {
    host: controls.closest('.module-layout'),
    step: () => draw(),
    onReset: () => {
      preset = 'sin';
      presetSel.value = 'sin';
      customFn = null;
      customSrc = 'sin(x)';
      exprInput.value = 'sin(x)';
      a = 1; b = 1; c = 0; d = 0;
      sliders.a.set(1);
      sliders.b.set(1);
      sliders.c.set(0);
      sliders.d.set(0);
    },
  });

  const presetSel = select(controls, {
    label: '预设函数 · Preset f(u)',
    value: preset,
    options: Object.entries(PRESETS).map(([k, v]) => ({ value: k, label: v.label })),
    onChange: (v) => {
      preset = v;
      customFn = null;
    },
  });

  const exprGroup = el('div', { className: 'control-group' });
  exprGroup.appendChild(el('label', { text: '自定义 · Custom f(x)（可选 / optional）' }));
  const exprInput = el('input', { type: 'text', value: customSrc, placeholder: '如 sin(x)+0.2*x' });
  exprGroup.appendChild(exprInput);
  controls.appendChild(exprGroup);

  const btnRow = el('div', { className: 'btn-row' });
  controls.appendChild(btnRow);
  button(btnRow, {
    text: '应用表达式 · Apply',
    className: 'primary',
    onClick: () => {
      try {
        customFn = compileExpr(exprInput.value);
        customSrc = exprInput.value;
      } catch (e) {
        alert(`表达式错误：${e.message}`);
      }
    },
  });

  const sliders = {};
  sliders.a = slider(controls, {
    label: '振幅 / 纵向伸缩 · Vertical stretch a',
    min: -3,
    max: 3,
    step: 0.05,
    value: a,
    format: (v) => v.toFixed(2),
    onChange: (v) => {
      a = v;
    },
  });
  sliders.b = slider(controls, {
    label: '横向伸缩 · Horizontal stretch b',
    min: -3,
    max: 3,
    step: 0.05,
    value: b,
    format: (v) => v.toFixed(2),
    onChange: (v) => {
      b = v;
    },
  });
  sliders.c = slider(controls, {
    label: '水平平移 · Horizontal shift c',
    min: -6,
    max: 6,
    step: 0.05,
    value: c,
    format: (v) => v.toFixed(2),
    onChange: (v) => {
      c = v;
    },
  });
  sliders.d = slider(controls, {
    label: '竖直平移 · Vertical shift d',
    min: -4,
    max: 4,
    step: 0.05,
    value: d,
    format: (v) => v.toFixed(2),
    onChange: (v) => {
      d = v;
    },
  });

  controls.appendChild(
    el('p', {
      className: 'hint',
      text: '绘制 y = a · f(b(x − c)) + d。 · Plots y = a · f(b(x − c)) + d.',
    }),
  );

  function baseFn(u) {
    if (customFn) {
      try {
        const v = customFn(u);
        return Number.isFinite(v) ? v : NaN;
      } catch {
        return NaN;
      }
    }
    return PRESETS[preset].fn(u);
  }

  function yOf(x) {
    return a * baseFn(b * (x - c)) + d;
  }

  function resize(cw, ch) {
    w = cw;
    h = ch;
    fitCanvas(canvas, w, h);
  }
  const unobserve = observeSize(wrap, resize);

  canvas.addEventListener('pointermove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const xMin = -8;
    const xMax = 8;
    xHover = xMin + (px / rect.width) * (xMax - xMin);
  });

  function draw() {
    const T = themeColors();
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, w, h);
    const xMin = -8;
    const xMax = 8;
    const yMin = -5;
    const yMax = 5;
    const mapX = (x) => ((x - xMin) / (xMax - xMin)) * w;
    const mapY = (y) => h - ((y - yMin) / (yMax - yMin)) * h;

    // grid
    ctx.strokeStyle = T.grid;
    ctx.lineWidth = 1;
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
    // axes
    ctx.strokeStyle = T.axis;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(0, mapY(0));
    ctx.lineTo(w, mapY(0));
    ctx.moveTo(mapX(0), 0);
    ctx.lineTo(mapX(0), h);
    ctx.stroke();

    const plot = (fn, color, width) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.beginPath();
      let started = false;
      const N = Math.floor(w);
      for (let i = 0; i <= N; i++) {
        const x = xMin + (i / N) * (xMax - xMin);
        const y = fn(x);
        if (!Number.isFinite(y) || y < yMin - 5 || y > yMax + 5) {
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

    plot((x) => baseFn(x), rgba(T.axis, 0.45), 1.5);
    plot(yOf, T.math, 2.5);

    // hover
    const yh = yOf(xHover);
    if (Number.isFinite(yh)) {
      ctx.fillStyle = T.warn;
      ctx.beginPath();
      ctx.arc(mapX(xHover), mapY(yh), 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = T.text;
      ctx.font = '12px monospace';
      ctx.fillText(`x=${xHover.toFixed(2)}  y=${yh.toFixed(2)}`, 12, 20);
    }

    readouts.set([
      ['表达式 · Expression', `y = ${a.toFixed(2)}·f(${b.toFixed(2)}(x−${c.toFixed(2)}))+${d.toFixed(2)}`],
      ['函数 · f', customFn ? customSrc : PRESETS[preset].label],
    ]);
  }

  const loop = startAnimLoop(wrap, draw);
  return () => {
    loop();
    sim.destroy();
    unobserve();
  };
}
