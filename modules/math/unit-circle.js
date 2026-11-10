import { el, slider, button, fitCanvas, observeSize, readoutBar, checkbox } from '../../js/ui.js';
import { themeColors, rgba } from '../../js/theme.js';
import { startAnimLoop } from '../anim-loop.js';
import { mountSimControls, SIM_STEP, simAxisColor } from '../sim-controls.js';


export function create(viz, controls) {
  const wrap = el('div', { className: 'canvas-wrap' });
  const canvas = el('canvas');
  wrap.appendChild(canvas);
  viz.appendChild(wrap);
  const readouts = readoutBar(viz);

  let theta = 0.7;
  let omega = 0.6;
  let showTan = true;
  let w = 600;
  let h = 420;
  let wave = [];

  controls.appendChild(el('h2', { text: '控制 · Controls' }));
  const sim = mountSimControls(controls, {
    host: controls.closest('.module-layout'),
    step: () => { update(SIM_STEP); draw(); },
    onReset: () => {
      theta = 0.7;
      omega = 0.6;
      showTan = true;
      tanBox.checked = true;
      wave = [];
      thetaSlider.set(0.7);
      omegaSlider.set(0.6);
    },
  });
  const thetaSlider = slider(controls, {
    label: '角度 · Angle θ',
    unit: 'rad',
    min: -Math.PI * 2,
    max: Math.PI * 2,
    step: 0.01,
    value: theta,
    format: (v) => v.toFixed(2),
    onChange: (v) => {
      theta = v;
      if (!sim.isResetting()) sim.setPlaying(false);
    },
  });
  const omegaSlider = slider(controls, {
    label: '角速度 · Angular speed ω',
    unit: 'rad/s',
    min: 0.1,
    max: 2,
    step: 0.05,
    value: omega,
    format: (v) => v.toFixed(2),
    onChange: (v) => {
      omega = v;
    },
  });
  const tanBox = checkbox(controls, {
    label: '显示正切线 · Show tangent line',
    checked: true,
    onChange: (v) => {
      showTan = v;
    },
  });

  const btnRow = el('div', { className: 'btn-row' });
  controls.appendChild(btnRow);
  button(btnRow, {
    text: 'θ = 0',
    onClick: () => {
      theta = 0;
      thetaSlider.set(0);
      sim.setPlaying(false);
    },
  });
  button(btnRow, {
    text: 'θ = π/2',
    onClick: () => {
      theta = Math.PI / 2;
      thetaSlider.set(theta);
      sim.setPlaying(false);
    },
  });

  controls.appendChild(
    el('p', {
      className: 'hint',
      text: '左侧单位圆：点 P=(cos θ, sin θ)。 · Left: unit circle with P=(cos θ, sin θ).',
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
    theta = Math.atan2(cy - py, px - cx);
    thetaSlider.set(theta);
    sim.setPlaying(false);
  });

  function update(dt) {
    theta += omega * dt;
    if (theta > Math.PI * 2) theta -= Math.PI * 2;
    if (theta < -Math.PI * 2) theta += Math.PI * 2;
    thetaSlider.set(theta);
    wave.push({ t: theta, s: Math.sin(theta), c: Math.cos(theta) });
    if (wave.length > 400) wave.shift();
  }

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
    ctx.strokeStyle = simAxisColor(T);
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
    ctx.fillText('单位圆 · unit circle', 12, 20);

    // wave panel
    const wx0 = split + 20;
    const wy0 = h / 2;
    const wW = w - wx0 - 16;
    const amp = Math.min(80, h * 0.28);

    ctx.strokeStyle = simAxisColor(T);
    ctx.beginPath();
    ctx.moveTo(wx0, wy0);
    ctx.lineTo(wx0 + wW, wy0);
    ctx.stroke();

    const strokeWave = (pick, color) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      let started = false;
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
    ctx.fillText('sin / cos 波形 · waves', wx0, 20);

    const deg = (theta * 180) / Math.PI;
    readouts.set([
      ['角度 · θ', `${theta.toFixed(3)} rad (${deg.toFixed(1)}°)`],
      ['正弦 · sin θ', s.toFixed(4)],
      ['余弦 · cos θ', c.toFixed(4)],
      ['正切 · tan θ', Math.abs(c) < 1e-6 ? '∞' : (s / c).toFixed(4)],
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
