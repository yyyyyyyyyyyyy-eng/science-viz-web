import { el, slider, button, fitCanvas, observeSize, readoutBar, checkbox } from '../../js/ui.js';
import { themeColors, rgba } from '../../js/theme.js';


const BASE_PAIR = { A: 'T', T: 'A', G: 'C', C: 'G' };
function baseColors() {
  const T = themeColors();
  return { A: T.danger, T: T.math, G: T.bio, C: T.warn };
}

function randomStrand(n) {
  const bases = ['A', 'T', 'G', 'C'];
  const s = [];
  for (let i = 0; i < n; i++) s.push(bases[(Math.random() * 4) | 0]);
  return s;
}

export function create(viz, controls) {
  const wrap = el('div', { className: 'canvas-wrap' });
  const canvas = el('canvas');
  wrap.appendChild(canvas);
  viz.appendChild(wrap);
  const readouts = readoutBar(viz);

  let n = 24;
  let template = randomStrand(n);
  let fork = 0; // how many base pairs unwound / replicated
  let playing = true;
  let speed = 1;
  let showLabels = true;
  let w = 600;
  let h = 420;
  let raf = 0;
  let last = performance.now();
  let helixPhase = 0;

  controls.appendChild(el('h2', { text: '控制' }));
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
    text: '重新生成序列',
    onClick: () => {
      template = randomStrand(n);
      fork = 0;
    },
  });
  button(btnRow, {
    text: '重置复制叉',
    onClick: () => {
      fork = 0;
    },
  });

  slider(controls, {
    label: '复制速度',
    min: 0.2,
    max: 3,
    step: 0.05,
    value: 1,
    format: (v) => `${v.toFixed(2)}×`,
    onChange: (v) => {
      speed = v;
    },
  });

  checkbox(controls, {
    label: '显示碱基字母',
    checked: true,
    onChange: (v) => {
      showLabels = v;
    },
  });

  controls.appendChild(
    el('p', {
      className: 'hint',
      text: '解旋酶（紫色）打开双螺旋；新链按 A-T、G-C 配对延伸。',
    }),
  );

  function resize(cw, ch) {
    w = cw;
    h = ch;
    fitCanvas(canvas, w, h);
  }
  const unobserve = observeSize(wrap, resize);

  function draw(ctx) {
    const T = themeColors();
    ctx.clearRect(0, 0, w, h);
    const left = 40;
    const right = w - 40;
    const usable = right - left;
    const yMid = h * 0.5;
    const amp = Math.min(48, h * 0.12);

    // legend
    ctx.font = '12px sans-serif';
    let lx = 14;
    for (const b of ['A', 'T', 'G', 'C']) {
      ctx.fillStyle = baseColors()[b];
      ctx.fillRect(lx, 12, 12, 12);
      ctx.fillStyle = T.text;
      ctx.fillText(b, lx + 16, 22);
      lx += 40;
    }

    const step = usable / (n - 1);

    function baseY(i, strand, openAmt) {
      const phase = helixPhase + i * 0.55;
      const wave = Math.sin(phase) * amp;
      if (strand === 0) return yMid - wave * (1 - openAmt * 0.15);
      return yMid + wave * (1 - openAmt * 0.15);
    }

    // parental backbone (still wound for i >= fork)
    for (let i = 0; i < n; i++) {
      const x = left + i * step;
      const open = Math.max(0, Math.min(1, fork - i));
      const y0 = baseY(i, 0, open);
      const y1 = baseY(i, 1, open);

      // opening: pull strands apart for replicated region
      let yy0 = y0;
      let yy1 = y1;
      if (open > 0) {
        const pull = open * Math.min(90, h * 0.22);
        yy0 = yMid - pull - Math.sin(helixPhase + i * 0.4) * 8;
        yy1 = yMid + pull + Math.sin(helixPhase + i * 0.4) * 8;
      }

      // backbone segments
      if (i < n - 1) {
        const x2 = left + (i + 1) * step;
        const open2 = Math.max(0, Math.min(1, fork - (i + 1)));
        let y0b = baseY(i + 1, 0, open2);
        let y1b = baseY(i + 1, 1, open2);
        if (open2 > 0) {
          const pull2 = open2 * Math.min(90, h * 0.22);
          y0b = yMid - pull2 - Math.sin(helixPhase + (i + 1) * 0.4) * 8;
          y1b = yMid + pull2 + Math.sin(helixPhase + (i + 1) * 0.4) * 8;
        }
        ctx.strokeStyle = rgba(T.math, 0.55);
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(x, yy0);
        ctx.lineTo(x2, y0b);
        ctx.stroke();
        ctx.strokeStyle = rgba(T.physics, 0.55);
        ctx.beginPath();
        ctx.moveTo(x, yy1);
        ctx.lineTo(x2, y1b);
        ctx.stroke();
      }

      const b = template[i];
      const comp = BASE_PAIR[b];

      // parental bases
      drawBase(ctx, x, yy0, b, showLabels);
      drawBase(ctx, x, yy1, comp, showLabels);

      // H-bond if still paired
      if (open < 0.35) {
        ctx.strokeStyle = rgba(T.textStrong, 0.2);
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.moveTo(x, yy0 + 8);
        ctx.lineTo(x, yy1 - 8);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // new complementary strands in opened region
      if (open > 0.5) {
        const nb0 = comp; // new strand pairing to top template? top is template b, new bottom-of-top is comp
        const nb1 = b;
        const ny0 = yy0 + (yy1 - yy0) * 0.28;
        const ny1 = yy1 - (yy1 - yy0) * 0.28;
        // nascent strands following parental
        if (i > 0 && Math.max(0, Math.min(1, fork - (i - 1))) > 0.5) {
          const xPrev = left + (i - 1) * step;
          const openP = Math.max(0, Math.min(1, fork - (i - 1)));
          let py0 = baseY(i - 1, 0, openP);
          let py1 = baseY(i - 1, 1, openP);
          if (openP > 0) {
            const pullP = openP * Math.min(90, h * 0.22);
            py0 = yMid - pullP - Math.sin(helixPhase + (i - 1) * 0.4) * 8;
            py1 = yMid + pullP + Math.sin(helixPhase + (i - 1) * 0.4) * 8;
          }
          const pny0 = py0 + (py1 - py0) * 0.28;
          const pny1 = py1 - (py1 - py0) * 0.28;
          ctx.strokeStyle = rgba(T.bio, 0.7);
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(xPrev, pny0);
          ctx.lineTo(x, ny0);
          ctx.stroke();
          ctx.strokeStyle = rgba(T.accentSoft, 0.7);
          ctx.beginPath();
          ctx.moveTo(xPrev, pny1);
          ctx.lineTo(x, ny1);
          ctx.stroke();
        }
        drawBase(ctx, x, ny0, nb0, showLabels, 0.85);
        drawBase(ctx, x, ny1, nb1, showLabels, 0.85);
      }
    }

    // helicase at fork
    const fi = Math.min(n - 1, Math.floor(fork));
    const fx = left + fi * step;
    const fy = yMid;
    ctx.fillStyle = rgba(T.accentSoft, 0.9);
    ctx.beginPath();
    ctx.arc(fx, fy, 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = T.onAccent;
    ctx.font = 'bold 10px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('解旋', fx, fy);
    ctx.textAlign = 'start';
    ctx.textBaseline = 'alphabetic';

    ctx.fillStyle = T.text;
    ctx.font = '12px sans-serif';
    ctx.fillText('5′', left - 18, yMid - amp - 8);
    ctx.fillText('3′', left - 18, yMid + amp + 16);
    ctx.fillText('半保守复制 · 复制叉 →', w / 2 - 70, h - 16);
  }

  function drawBase(ctx, x, y, b, labels, alpha = 1) {
    const T = themeColors();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = baseColors()[b];
    ctx.beginPath();
    ctx.arc(x, y, 7, 0, Math.PI * 2);
    ctx.fill();
    if (labels) {
      ctx.fillStyle = T.canvasBg;
      ctx.font = 'bold 10px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(b, x, y + 0.5);
      ctx.textAlign = 'start';
      ctx.textBaseline = 'alphabetic';
    }
    ctx.globalAlpha = 1;
  }

  function tick(now) {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    helixPhase += dt * 1.2;
    if (playing) {
      fork += dt * 3.2 * speed;
      if (fork > n + 2) fork = 0;
    }
    draw(canvas.getContext('2d'));
    const done = Math.min(100, Math.round((fork / n) * 100));
    readouts.set([
      ['复制进度', `${done}%`],
      ['碱基数', String(n)],
      ['配对规则', 'A–T · G–C'],
    ]);
    raf = requestAnimationFrame(tick);
  }
  raf = requestAnimationFrame(tick);

  return () => {
    cancelAnimationFrame(raf);
    unobserve();
  };
}
