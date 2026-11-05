import { el, slider, button, fitCanvas, observeSize, readoutBar, checkbox } from '../../js/ui.js';
import { themeColors, rgba } from '../../js/theme.js';


export function create(viz, controls) {
  const wrap = el('div', { className: 'canvas-wrap' });
  const canvas = el('canvas');
  wrap.appendChild(canvas);
  viz.appendChild(wrap);
  const readouts = readoutBar(viz);

  let theta = 0.7;
  let playing = true;
  let speed = 0.6;
  let showTan = true;
  let w = 600;
  let h = 420;
  let raf = 0;
  let last = performance.now();
  let wave = [];

  controls.appendChild(el('h2', { text: '控制' }));
  const thetaSlider = slider(controls, {
    label: '角度 θ（弧度）',
    min: -Math.PI * 2,
    max: Math.PI * 2,
    step: 0.01,
    value: theta,
    format: (v) => v.toFixed(2),
    onChange: (v) => {
      theta = v;
      playing = false;
      playBtn.textContent = '播放';
    },
  });
  slider(controls, {
    label: '角速度',
    min: 0.1,
    max: 2,
    step: 0.05,
    value: speed,
    format: (v) => v.toFixed(2),
    onChange: (v) => {
      speed = v;
    },
  });
  checkbox(controls, {
    label: '显示正切线',
    checked: true,
    onChange: (v) => {
      showTan = v;
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
    text: 'θ = 0',
    onClick: () => {
      theta = 0;
      thetaSlider.set(0);
    },
  });
  button(btnRow, {
    text: 'θ = π/2',
    onClick: () => {
      theta = Math.PI / 2;
      thetaSlider.set(theta);
    },
  });

  controls.appendChild(
    el('p', {
      className: 'hint',
      text: '左侧单位圆：点 P=(cos θ, sin θ)。',
    }),
  );

  function resize(cw, ch) {
    w = cw;
    h = ch;
    fitCanvas(canvas, w, h);
  }
  const unobserve = observeSize(wrap, resize);

  canvas.addEventListener('pointerdown', (e) => {
    const rect = canvas.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    const split = w * 0.48;
    if (px > split) return;
    const cx = split / 2;
    const cy = h / 2;
    theta = Math.atan2(-(py - cy), px - cx); // screen y down
    // atan2 with inverted y: want math angle
    theta = Math.atan2(cy - py, px - cx);
    thetaSlider.set(theta);
    playing = false;
    playBtn.textContent = '播放';
  });

  function draw() {
    const T = themeColors();
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, w, h);
    const split = w * 0.48;
    const cx = split / 2;
    const cy = h / 2;
    const R = Math.min(split, h) * 0.36;

    // circle panel bg divider
    ctx.strokeStyle = T.grid;
    ctx.beginPath();
    ctx.moveTo(split, 10);
    ctx.lineTo(split, h - 10);
    ctx.stroke();

    // axes
    ctx.strokeStyle = T.axis;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(cx - R - 20, cy);
    ctx.lineTo(cx + R + 40, cy);
    ctx.moveTo(cx, cy + R + 20);
    ctx.lineTo(cx, cy - R - 20);
    ctx.stroke();

    ctx.strokeStyle = T.math;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.stroke();

    const c = Math.cos(theta);
    const s = Math.sin(theta);
    const px = cx + c * R;
    const py = cy - s * R;

    // angle arc
    ctx.strokeStyle = T.warn;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy, R * 0.28, 0, -theta, theta > 0);
    ctx.stroke();

    // radius
    ctx.strokeStyle = T.textStrong;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(px, py);
    ctx.stroke();

    // cos projection
    ctx.strokeStyle = T.math;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(px, py);
    ctx.lineTo(px, cy);
    ctx.moveTo(px, cy);
    ctx.lineTo(cx, cy);
    ctx.stroke();
    // sin projection
    ctx.strokeStyle = T.bio;
    ctx.beginPath();
    ctx.moveTo(px, py);
    ctx.lineTo(cx, py);
    ctx.moveTo(cx, py);
    ctx.lineTo(cx, cy);
    ctx.stroke();
    ctx.setLineDash([]);

    if (showTan && Math.abs(c) > 0.05) {
      // tangent line at x=1 (circle right)
      const tanX = cx + R;
      const tanY = cy - Math.tan(theta) * R;
      ctx.strokeStyle = rgba(T.physics, 0.8);
      ctx.beginPath();
      ctx.moveTo(tanX, cy - R * 1.4);
      ctx.lineTo(tanX, cy + R * 1.4);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(tanX, tanY);
      ctx.stroke();
      ctx.fillStyle = T.physics;
      ctx.beginPath();
      ctx.arc(tanX, tanY, 4, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.fillStyle = T.warn;
    ctx.beginPath();
    ctx.arc(px, py, 7, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = T.text;
    ctx.font = '12px sans-serif';
    ctx.fillText('单位圆', 12, 20);

    // wave panel
    const wx0 = split + 20;
    const wy0 = h / 2;
    const wW = w - wx0 - 16;
    const amp = Math.min(80, h * 0.28);

    ctx.strokeStyle = T.axis;
    ctx.beginPath();
    ctx.moveTo(wx0, wy0);
    ctx.lineTo(wx0 + wW, wy0);
    ctx.stroke();

    wave.push({ t: theta, s, c });
    if (wave.length > 400) wave.shift();

    const span = Math.PI * 4;
    const strokeWave = (pick, color) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      let started = false;
      for (const p of wave) {
        const rel = (theta - p.t + span) % span;
        // show recent history relative
      }
      // better: map by sample index
      wave.forEach((p, i) => {
        const x = wx0 + (i / Math.max(1, wave.length - 1)) * wW;
        const y = wy0 - pick(p) * amp;
        if (!started) {
          ctx.moveTo(x, y);
          started = true;
        } else ctx.lineTo(x, y);
      });
      ctx.stroke();
    };
    strokeWave((p) => p.s, T.bio);
    strokeWave((p) => p.c, T.math);

    // current markers
    ctx.fillStyle = T.bio;
    ctx.beginPath();
    ctx.arc(wx0 + wW, wy0 - s * amp, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = T.math;
    ctx.beginPath();
    ctx.arc(wx0 + wW, wy0 - c * amp, 4, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = T.text;
    ctx.fillText('sin / cos 波形', wx0, 20);

    const deg = (theta * 180) / Math.PI;
    readouts.set([
      ['θ', `${theta.toFixed(3)} rad (${deg.toFixed(1)}°)`],
      ['sin θ', s.toFixed(4)],
      ['cos θ', c.toFixed(4)],
      ['tan θ', Math.abs(c) < 1e-6 ? '∞' : (s / c).toFixed(4)],
    ]);
  }

  function tick(now) {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    if (playing) {
      theta += speed * dt;
      if (theta > Math.PI * 2) theta -= Math.PI * 2;
      if (theta < -Math.PI * 2) theta += Math.PI * 2;
      thetaSlider.set(theta);
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
