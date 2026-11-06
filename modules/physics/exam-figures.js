/**
 * AP Physics C (Mechanics + E&M) exam-style static figures.
 * Pure SVG, theme-aware via CSS variables, fixed 400×260 viewBox.
 * Every figure is size-constrained: width 100% up to a fixed max, fixed aspect ratio,
 * and `contain: size` so content never grows the box on resize.
 * Math labels use stacked fractions (drawn in SVG; captions rendered with KaTeX \dfrac).
 */

const VW = 400, VH = 260;
// Extra inline depth so stacked-fraction captions clear the figcaption's
// overflow edge (KaTeX fractions otherwise touch the bottom of the box).
const CAP_DESCENT = '\\vphantom{\\sqrt{\\dfrac{1}{1}}}';
const COL = {
  g: 'currentColor',                 // geometry
  f: 'var(--accent, #d9480f)',       // forces
  v: '#1c7ed6',                      // velocity / momentum
  a: '#2f9e44',                      // acceleration
  E: '#e03131',                      // electric field
  B: '#7048e8',                      // magnetic field
  I: '#f08c00',                      // current
  m: 'var(--muted, #888)',           // muted / dashed helpers
};
let P = 'xf'; // marker id prefix, unique per figure

const r1 = (n) => Math.round(n * 10) / 10;
const rad = (d) => (d * Math.PI) / 180;
/** point at angle (deg, CCW visually) and radius from (cx,cy) */
const pt = (cx, cy, r, deg) => [cx + r * Math.cos(rad(deg)), cy - r * Math.sin(rad(deg))];

function markers() {
  return '<defs>' + Object.entries(COL).map(([k, c]) =>
    `<marker id="${P}-${k}" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,3.5 L0,7 Z" style="fill:${c}"/></marker>`).join('') + '</defs>';
}
function arr(x1, y1, x2, y2, c = 'f', w = 2.2, dash = '') {
  return `<line x1="${r1(x1)}" y1="${r1(y1)}" x2="${r1(x2)}" y2="${r1(y2)}" style="stroke:${COL[c]};stroke-width:${w}${dash ? `;stroke-dasharray:${dash}` : ''}" marker-end="url(#${P}-${c})"/>`;
}
function arrD(x, y, deg, L, c = 'f', w, dash) { const [x2, y2] = pt(x, y, L, deg); return arr(x, y, x2, y2, c, w, dash); }
function ln(x1, y1, x2, y2, o = {}) {
  return `<line x1="${r1(x1)}" y1="${r1(y1)}" x2="${r1(x2)}" y2="${r1(y2)}" style="stroke:${COL[o.c || 'g']};stroke-width:${o.w || 1.6}${o.dash ? `;stroke-dasharray:${o.dash}` : ''}"/>`;
}
const sty = (o) => `fill:${o.fill || 'none'};stroke:${COL[o.c || 'g']};stroke-width:${o.w || 1.6}${o.dash ? `;stroke-dasharray:${o.dash}` : ''}${o.op ? `;fill-opacity:${o.op}` : ''}`;
function poly(pts, o = {}) { return `<polyline points="${pts.map((p) => `${r1(p[0])},${r1(p[1])}`).join(' ')}" style="${sty(o)}"/>`; }
function circ(cx, cy, r, o = {}) { return `<circle cx="${r1(cx)}" cy="${r1(cy)}" r="${r}" style="${sty(o)}"/>`; }
function rect(x, y, w, h, o = {}) { return `<rect x="${r1(x)}" y="${r1(y)}" width="${r1(w)}" height="${r1(h)}" style="${sty({ fill: 'var(--canvas-plot, transparent)', ...o })}"/>`; }
function pathD(d, o = {}) { return `<path d="${d}" style="${sty(o)}"${o.me ? ` marker-end="url(#${P}-${o.me})"` : ''}/>`; }
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
/** text with _{sub} / ^{sup} markup → tspans */
function rich(s) {
  return esc(s).replace(/_\{([^}]*)\}/g, '<tspan dy="4" font-size="75%">$1</tspan><tspan dy="-4">\u200b</tspan>')
    .replace(/\^\{([^}]*)\}/g, '<tspan dy="-6" font-size="72%">$1</tspan><tspan dy="6">\u200b</tspan>');
}
const plain = (s) => String(s).replace(/[_^]\{([^}]*)\}/g, '$1');
const wEst = (s, fs = 13) => plain(s).length * fs * 0.55;
function tx(x, y, s, o = {}) {
  const fs = o.fs || 13;
  return `<text x="${r1(x)}" y="${r1(y)}" font-size="${fs}" text-anchor="${o.anchor || 'start'}" style="fill:${COL[o.c || 'g']};font-family:KaTeX_Main,'Times New Roman',serif;${o.it === false ? '' : 'font-style:italic;'}">${rich(s)}</text>`;
}
/** Equation left→right. parts: string | {n,d} stacked fraction | {sqrt:{n,d}} | {sqrt:'str'}. y = math axis. */
function eq(x, y, parts, o = {}) {
  const fs = o.fs || 13, c = o.c || 'g';
  let out = '', cx = x;
  const fracAt = (x0, n, d) => {
    const w = Math.max(wEst(n, fs), wEst(d, fs)) + 6;
    return { w, s: ln(x0, y, x0 + w, y, { c, w: 1.1 }) + tx(x0 + w / 2, y - 4, n, { anchor: 'middle', fs, c }) + tx(x0 + w / 2, y + fs + 1, d, { anchor: 'middle', fs, c }) };
  };
  /** Nested den: { n, dPrefix?: string, d: { n, d } } → numerator over (prefix + small frac). */
  const nestedDen = (x0, p) => {
    const inner = fracAt(0, p.d.n, p.d.d); // measure only
    const pref = p.dPrefix || '';
    const prefW = pref ? wEst(pref, fs) + 2 : 0;
    const denW = prefW + inner.w;
    const numW = wEst(p.n, fs);
    const w = Math.max(numW, denW) + 8;
    let s = ln(x0, y, x0 + w, y, { c, w: 1.1 });
    s += tx(x0 + w / 2, y - 4, p.n, { anchor: 'middle', fs, c });
    const denX = x0 + (w - denW) / 2;
    if (pref) s += tx(denX, y + fs + 1, pref, { fs, c });
    const ix = denX + prefW;
    s += ln(ix, y + fs + 1, ix + inner.w, y + fs + 1, { c, w: 1.0 });
    s += tx(ix + inner.w / 2, y + fs - 3, p.d.n, { anchor: 'middle', fs: fs * 0.85, c });
    s += tx(ix + inner.w / 2, y + fs * 2 + 2, p.d.d, { anchor: 'middle', fs: fs * 0.85, c });
    return { w, s };
  };
  for (const p of parts) {
    if (typeof p === 'string') { out += tx(cx, y + fs * 0.35, p, { fs, c }); cx += wEst(p, fs); }
    else if (p.n !== undefined && p.d && typeof p.d === 'object' && p.d.n !== undefined) {
      const f = nestedDen(cx + 2, p); out += f.s; cx += f.w + 4;
    }
    else if (p.n !== undefined) { const f = fracAt(cx + 2, p.n, p.d); out += f.s; cx += f.w + 4; }
    else if (p.sqrt !== undefined) {
      const inner = typeof p.sqrt === 'string' ? null : p.sqrt;
      const w = inner ? Math.max(wEst(inner.n, fs), wEst(inner.d, fs)) + 6 : wEst(p.sqrt, fs) + 4;
      const top = inner ? y - fs - 6 : y - fs * 0.8, bot = inner ? y + fs + 5 : y + fs * 0.6;
      out += pathD(`M${r1(cx + 1)},${r1(y + 1)} L${r1(cx + 4)},${r1(y - 1)} L${r1(cx + 8)},${r1(bot)} L${r1(cx + 12)},${r1(top)} L${r1(cx + 14 + w)},${r1(top)}`, { c, w: 1.1 });
      if (inner) out += fracAt(cx + 13, inner.n, inner.d).s;
      else out += tx(cx + 14, y + fs * 0.35, p.sqrt, { fs, c });
      cx += w + 18;
    }
  }
  return out;
}
function arc(cx, cy, r, a1, a2, o = {}) {
  const [x1, y1] = pt(cx, cy, r, a1), [x2, y2] = pt(cx, cy, r, a2);
  const large = Math.abs(a2 - a1) > 180 ? 1 : 0, sweep = a2 > a1 ? 0 : 1;
  return pathD(`M${r1(x1)},${r1(y1)} A${r},${r} 0 ${large} ${sweep} ${r1(x2)},${r1(y2)}`, o);
}
function spring(x1, y1, x2, y2, n = 10, amp = 7) {
  const L = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / L, uy = (y2 - y1) / L, nx = -uy, ny = ux;
  const pts = [[x1, y1], [x1 + ux * 8, y1 + uy * 8]];
  const seg = (L - 16) / n;
  for (let i = 0; i < n; i++) { const s = 8 + seg * (i + 0.5), sg = i % 2 ? -1 : 1; pts.push([x1 + ux * s + nx * amp * sg, y1 + uy * s + ny * amp * sg]); }
  pts.push([x2 - ux * 8, y2 - uy * 8], [x2, y2]);
  return poly(pts, { w: 1.4 });
}
function hatch(x1, y, x2, down = true) {
  let s = ln(x1, y, x2, y, { w: 2 });
  for (let x = x1 + 6; x < x2; x += 10) s += ln(x, y, x - 6, y + (down ? 7 : -7), { w: 0.9, c: 'm' });
  return s;
}
function vhatch(x, y1, y2, left = true) {
  let s = ln(x, y1, x, y2, { w: 2 });
  for (let y = y1; y < y2; y += 10) s += ln(x, y, x + (left ? -7 : 7), y + 6, { w: 0.9, c: 'm' });
  return s;
}
const dotB = (x, y, r = 6, c = 'B') => circ(x, y, r, { c, w: 1.3 }) + `<circle cx="${r1(x)}" cy="${r1(y)}" r="1.8" style="fill:${COL[c]}"/>`;
const crossB = (x, y, r = 5, c = 'B') => ln(x - r, y - r, x + r, y + r, { c, w: 1.4 }) + ln(x - r, y + r, x + r, y - r, { c, w: 1.4 });
const mass = (x, y, w, h, label) => rect(x, y, w, h) + tx(x + w / 2, y + h / 2 + 5, label, { anchor: 'middle' });
const add = (p, v, k) => [p[0] + v[0] * k, p[1] + v[1] * k];
const bar = (x, base, w, h, c, op = 0.22) => (h > 0 ? rect(x, base - h, w, h, { fill: COL[c], op, c }) : '');
const person = (cx, cy) => circ(cx, cy - 16, 6) + ln(cx, cy - 10, cx, cy + 8, { w: 2 }) + ln(cx, cy - 4, cx - 9, cy + 2, { w: 1.6 }) + ln(cx, cy - 4, cx + 9, cy + 2, { w: 1.6 }) + ln(cx, cy + 8, cx - 7, cy + 21, { w: 1.6 }) + ln(cx, cy + 8, cx + 7, cy + 21, { w: 1.6 });

/* ---------- circuit primitives ---------- */
function resistor(x1, y1, x2, y2, label, lo = {}) {
  const L = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / L, uy = (y2 - y1) / L, nx = -uy, ny = ux;
  const a = (L - 36) / 2; const pts = [[x1, y1], [x1 + ux * a, y1 + uy * a]];
  for (let i = 0; i < 6; i++) { const s = a + 3 + i * 6, sg = i % 2 ? -1 : 1; pts.push([x1 + ux * s + nx * 7 * sg, y1 + uy * s + ny * 7 * sg]); }
  pts.push([x1 + ux * (a + 36), y1 + uy * (a + 36)], [x2, y2]);
  const mx = (x1 + x2) / 2, my = (y1 + y2) / 2, vert = Math.abs(uy) > 0.5;
  return poly(pts) + (label ? tx(mx + (lo.dx ?? (vert ? 12 : 0)), my + (lo.dy ?? (vert ? 4 : -12)), label, { anchor: lo.anchor || (vert ? 'start' : 'middle') }) : '');
}
/** battery between two points; long (+) plate toward the end point when plusAtEnd */
function battery(x1, y1, x2, y2, label, plusAtEnd = true) {
  const L = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / L, uy = (y2 - y1) / L, nx = -uy, ny = ux;
  const mx = (x1 + x2) / 2, my = (y1 + y2) / 2, g = 4, vert = Math.abs(uy) > 0.5;
  const pA = [mx - ux * g, my - uy * g], pB = [mx + ux * g, my + uy * g];
  const [pl, mi] = plusAtEnd ? [pB, pA] : [pA, pB];
  let s = ln(x1, y1, pA[0], pA[1]) + ln(pB[0], pB[1], x2, y2);
  s += ln(pl[0] - nx * 14, pl[1] - ny * 14, pl[0] + nx * 14, pl[1] + ny * 14, { w: 2 });
  s += ln(mi[0] - nx * 7, mi[1] - ny * 7, mi[0] + nx * 7, mi[1] + ny * 7, { w: 3.2 });
  s += tx(vert ? pl[0] + 18 : pl[0], vert ? pl[1] + 4 : pl[1] - 18, '+', { it: false, fs: 12, anchor: 'middle' });
  if (label) s += tx(vert ? mx - 20 : mx, vert ? my + 4 : my + 30, label, { anchor: vert ? 'end' : 'middle' });
  return s;
}
function capacitor(x1, y1, x2, y2, label) {
  const L = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / L, uy = (y2 - y1) / L, nx = -uy, ny = ux;
  const mx = (x1 + x2) / 2, my = (y1 + y2) / 2, g = 4, vert = Math.abs(uy) > 0.5;
  let s = ln(x1, y1, mx - ux * g, my - uy * g) + ln(mx + ux * g, my + uy * g, x2, y2);
  for (const k of [-g, g]) s += ln(mx + ux * k - nx * 13, my + uy * k - ny * 13, mx + ux * k + nx * 13, my + uy * k + ny * 13, { w: 2.2 });
  if (label) s += tx(mx + (vert ? 18 : 0), my + (vert ? 4 : -18), label, { anchor: vert ? 'start' : 'middle' });
  return s;
}
function inductor(x1, y1, x2, y2, label) {
  const L = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / L, uy = (y2 - y1) / L;
  const a = (L - 48) / 2; let d = `M${x1},${y1} L${r1(x1 + ux * a)},${r1(y1 + uy * a)}`;
  for (let i = 0; i < 4; i++) { const s = a + (i + 1) * 12; d += ` A6,6 0 0 1 ${r1(x1 + ux * s)},${r1(y1 + uy * s)}`; }
  d += ` L${x2},${y2}`;
  const mx = (x1 + x2) / 2, my = (y1 + y2) / 2, vert = Math.abs(uy) > 0.5;
  return pathD(d) + (label ? tx(mx + (vert ? 14 : 0), my + (vert ? 4 : -14), label, { anchor: vert ? 'start' : 'middle' }) : '');
}
function sw(x1, y1, x2, y2, label) {
  return circ(x1, y1, 2.5, { fill: 'currentColor' }) + circ(x2, y2, 2.5, { fill: 'currentColor' }) + ln(x1, y1, x2 - 4, y2 - 12) + (label ? tx((x1 + x2) / 2, y1 - 16, label, { anchor: 'middle', fs: 12 }) : '');
}
const node = (x, y) => `<circle cx="${x}" cy="${y}" r="2.6" style="fill:currentColor"/>`;

/* ---------- graph helper ---------- */
function graph(x0, y0, w, h, o) {
  const { fns, t1 = 1, ymin = -1, ymax = 1, xl = 't', yl = '' } = o;
  const X = (t) => x0 + (t / t1) * w, Y = (v) => y0 + h - ((v - ymin) / (ymax - ymin)) * h;
  let s = arr(x0, Y(0), x0 + w + 12, Y(0), 'g', 1.2) + arr(x0, y0 + h + 2, x0, y0 - 8, 'g', 1.2);
  s += tx(x0 + w + 14, Y(0) + 4, xl) + tx(x0 - 4, y0 - 2, yl, { anchor: 'end' });
  for (const f of fns) {
    const pts = []; for (let i = 0; i <= 120; i++) { const t = (i / 120) * t1; pts.push([X(t), Y(f.f(t))]); }
    s += poly(pts, { c: f.c || 'g', w: f.w || 2, dash: f.dash });
  }
  (o.vmarks || []).forEach((m) => { s += ln(X(m.t), y0, X(m.t), y0 + h, { c: 'm', w: 0.8, dash: '3 3' }) + (m.label ? tx(X(m.t), Y(0) + 14, m.label, { anchor: 'middle', fs: 11 }) : ''); });
  (o.hmarks || []).forEach((m) => { s += ln(x0, Y(m.v), x0 + w, Y(m.v), { c: 'm', w: 0.8, dash: '3 3' }) + (m.label ? tx(x0 - 4, Y(m.v) + 4, m.label, { anchor: 'end', fs: 10 }) : ''); });
  return { s, X, Y };
}

/* ---------- incline helper (rises to the right) ---------- */
function incline(th, bx = 50, by = 225, L = 300) {
  const u = [Math.cos(rad(th)), -Math.sin(rad(th))], n = [-Math.sin(rad(th)), -Math.cos(rad(th))];
  const top = [bx + u[0] * L, by + u[1] * L];
  const s = poly([[bx, by], [top[0], by], top, [bx, by]], { fill: 'var(--canvas-plot, transparent)' }) + arc(bx, by, 34, 0, th) + tx(bx + 40, by - 6, 'θ');
  const block = (d, h = 36, label = 'm') => {
    const P0 = [bx + u[0] * d, by + u[1] * d];
    const C = [P0[0] + n[0] * h / 2, P0[1] + n[1] * h / 2];
    return { C, P0, svg: `<g transform="translate(${r1(P0[0])},${r1(P0[1])}) rotate(${-th})">${rect(-h / 2, -h, h, h)}</g>` + tx(C[0], C[1] + 5, label, { anchor: 'middle' }) };
  };
  return { s, u, n, top, block };
}

const F = {};
const def = (id, title, tex, draw) => { F[id] = { id, title, tex, draw }; };
const defImg = (id, title, tex, img, credit, creditUrl) => { F[id] = { id, title, tex, img, credit, creditUrl }; };

/* ======================= Kinematics ======================= */
def('kin-graphs', 'x–t、v–t、a–t 图（匀加速，a > 0，v₀ < 0）', 'v=\\dfrac{dx}{dt},\\; a=\\dfrac{dv}{dt}', () => {
  const a = 1, v0 = -1; let s = '';
  s += graph(40, 22, 90, 70, { fns: [{ f: (t) => v0 * t + 0.5 * a * t * t }], t1: 3, ymin: -0.8, ymax: 1.6, yl: 'x', vmarks: [{ t: 1 }] }).s;
  s += graph(170, 22, 90, 70, { fns: [{ f: (t) => v0 + a * t, c: 'v' }], t1: 3, ymin: -1.2, ymax: 2.2, yl: 'v', vmarks: [{ t: 1 }] }).s;
  s += graph(300, 22, 80, 70, { fns: [{ f: () => a, c: 'a' }], t1: 3, ymin: -0.5, ymax: 1.5, yl: 'a' }).s;
  s += tx(200, 150, 'x–t 斜率 = v；v–t 斜率 = a；v–t 面积 = Δx', { anchor: 'middle', it: false, fs: 12 });
  s += tx(200, 172, '虚线处 v = 0：x–t 取极小值（切线水平）', { anchor: 'middle', it: false, fs: 12 });
  s += eq(40, 218, ['x = x₀ + v₀t + ', { n: '1', d: '2' }, 'at^{2}']) + eq(240, 218, ['Δx = ', { n: 'v₀ + v', d: '2' }, 't']);
  return s;
});
def('projectile', '抛体：速度分量与加速度', 'R=\\dfrac{v_0^2\\sin 2\\theta}{g}', () => {
  const v0 = 60, th = 55, g = 30; const vx = v0 * Math.cos(rad(th)), vy = v0 * Math.sin(rad(th));
  const T = 2 * vy / g, sc = 300 / (vx * T); const X = (t) => 40 + vx * t * sc, Y = (t) => 225 - (vy * t - 0.5 * g * t * t) * sc;
  let s = hatch(20, 225, 380) + poly(Array.from({ length: 61 }, (_, i) => [X(i / 60 * T), Y(i / 60 * T)]), { c: 'm', dash: '5 4' });
  for (const f of [0, 0.25, 0.5, 0.8]) {
    const t = f * T, x = X(t), y = Y(t), k = 0.6;
    s += circ(x, y, 4, { fill: 'currentColor' }) + arr(x, y, x + vx * k, y, 'v', 1.6);
    if (Math.abs(vy - g * t) > 1) s += arr(x, y, x, y - (vy - g * t) * k, 'v', 1.6);
    s += arr(x, y, x, y + 26, 'a', 1.6);
  }
  s += arc(40, 225, 26, 0, th) + tx(68, 204, 'θ') + tx(X(0) + vx * 0.6 + 18, 221, 'v_{x}', { c: 'v', fs: 12 });
  s += tx(X(0.5 * T) - 10, Y(0.5 * T) - 10, '最高点 v_{y} = 0', { fs: 11, anchor: 'middle' }) + tx(X(0.8 * T) + 6, Y(0.8 * T) + 30, 'a = g（竖直向下）', { c: 'a', fs: 11 });
  s += eq(260, 40, ['R = ', { n: 'v₀^{2} sin 2θ', d: 'g' }]);
  return s;
});

/* ======================= Dynamics / inclines ======================= */
function inclineFBD(kind) {
  const th = 30, I = incline(th); const b = I.block(150, 38); const C = b.C; const mg = 72;
  const N = mg * Math.cos(rad(th));
  let s = I.s + b.svg;
  s += arr(C[0], C[1], C[0], C[1] + mg, 'f') + tx(C[0] + 5, C[1] + mg + 4, 'mg', { c: 'f' });
  const Ne = add(C, I.n, N); s += arr(C[0], C[1], Ne[0], Ne[1], 'f') + tx(Ne[0] + 8, Ne[1] + (kind === 'none' ? 6 : -2), 'N', { c: 'f' });
  const c1 = add(C, I.u, -mg * Math.sin(rad(th))), c2 = add(C, I.n, -N);
  s += arr(C[0], C[1], c1[0], c1[1], 'm', 1.3, '4 3') + tx(c1[0] - 4, c1[1] + 4, 'mg sin θ', { c: 'm', fs: 11, anchor: 'end' });
  s += arr(C[0], C[1], c2[0], c2[1], 'm', 1.3, '4 3') + tx(c2[0] + 8, c2[1] + 8, 'mg cos θ', { c: 'm', fs: 11 });
  s += arc(C[0], C[1], 24, -90, -90 + th, { c: 'm', w: 1 }) + tx(C[0] + 5, C[1] + 38, 'θ', { fs: 11, c: 'm' });
  if (kind === 'none') {
    const a0 = add(add(C, I.n, 46), I.u, 30), a1 = add(a0, I.u, -44);
    s += arr(a0[0], a0[1], a1[0], a1[1], 'a') + tx(a1[0] - 4, a1[1] + 14, 'a', { c: 'a', anchor: 'end' });
    s += tx(30, 30, '光滑斜面：只有 N 与 mg', { it: false, fs: 12 }) + eq(30, 62, ['a = g sin θ（沿斜面向下）']) + eq(30, 88, ['N = mg cos θ']);
  } else if (kind === 'kinetic') {
    const fk = add(C, I.u, 24); s += arr(C[0], C[1], fk[0], fk[1], 'f') + tx(fk[0] + 4, fk[1] - 6, 'f_{k}', { c: 'f' });
    const v0 = add(C, I.n, 34), v1 = add(v0, I.u, -38); s += arr(v0[0], v0[1], v1[0], v1[1], 'v') + tx(v1[0] - 4, v1[1] - 4, 'v', { c: 'v', anchor: 'end' });
    s += tx(30, 30, '物块沿斜面下滑：f_{k} 沿斜面向上', { it: false, fs: 12 }) + eq(30, 62, ['f_{k} = μ_{k}N = μ_{k}mg cos θ']) + eq(30, 88, ['a = g(sin θ − μ_{k} cos θ)']);
  } else {
    const L = mg * Math.sin(rad(th)); const fs = add(C, I.u, L); s += arr(C[0], C[1], fs[0], fs[1], 'f') + tx(fs[0] + 4, fs[1] - 6, 'f_{s}', { c: 'f' });
    s += tx(30, 30, '静止：f_{s} = mg sin θ（沿斜面向上）', { it: false, fs: 12 }) + eq(30, 62, ['f_{s} ≤ μ_{s}N']) + eq(30, 88, ['保持静止 ⇔ tan θ ≤ μ_{s}']);
  }
  return s;
}
def('incline-frictionless', '光滑斜面受力图', 'a=g\\sin\\theta', () => inclineFBD('none'));
def('incline-kinetic', '粗糙斜面（下滑，动摩擦）', 'a=g(\\sin\\theta-\\mu_k\\cos\\theta)', () => inclineFBD('kinetic'));
def('incline-static', '粗糙斜面（静止，静摩擦）', '\\tan\\theta\\le\\mu_s', () => inclineFBD('static'));
def('incline-pulley', '斜面 + 顶端滑轮 + 悬挂物（光滑斜面）', 'a=\\dfrac{(m_2-m_1\\sin\\theta)g}{m_1+m_2}', () => {
  const th = 30, I = incline(th, 40, 225, 280); const b = I.block(120, 34, 'm₁'); const C = b.C; const r = 12;
  let s = I.s + b.svg;
  const Q = add(add(I.top, I.n, 17 - r), I.u, 4); // pulley centre: string (at block-centre height) tangent to its top-left
  const tp = add(Q, I.n, r);
  s += ln(C[0], C[1], tp[0], tp[1], { w: 1.2 }) + circ(Q[0], Q[1], r) + ln(Q[0], Q[1], I.top[0], I.top[1], { w: 2 });
  const hx = Q[0] + r; s += ln(hx, Q[1], hx, 160, { w: 1.2 }) + mass(hx - 16, 160, 32, 30, 'm₂');
  const T1 = add(C, I.u, 40); s += arr(C[0], C[1], T1[0], T1[1], 'f') + tx(T1[0], T1[1] - 10, 'T', { c: 'f' });
  const Nn = add(C, I.n, 36); s += arr(C[0], C[1], Nn[0], Nn[1], 'f') + tx(Nn[0] - 4, Nn[1], 'N', { c: 'f', anchor: 'end' });
  s += arr(C[0], C[1], C[0], C[1] + 42, 'f') + tx(C[0] + 4, C[1] + 50, 'm₁g', { c: 'f' });
  s += arr(hx, 160, hx, 132, 'f') + tx(hx + 5, 140, 'T', { c: 'f' }) + arr(hx, 190, hx, 226, 'f') + tx(hx + 5, 232, 'm₂g', { c: 'f' });
  s += tx(20, 24, '若 m₂ > m₁ sin θ：m₂ 下降，m₁ 沿斜面上滑', { it: false, fs: 12 });
  s += eq(20, 58, ['a = ', { n: '(m₂ − m₁ sin θ)g', d: 'm₁ + m₂' }]);
  return s;
});
def('atwood', '阿特伍德机（m₂ > m₁，轻绳、无摩擦轻滑轮）', 'a=\\dfrac{(m_2-m_1)g}{m_1+m_2},\\; T=\\dfrac{2m_1m_2g}{m_1+m_2}', () => {
  const cx = 130, cy = 52, r = 30; let s = hatch(70, 14, 190) + ln(cx, 14, cx, cy, { w: 2 }) + circ(cx, cy, r) + circ(cx, cy, 3, { fill: 'currentColor' });
  s += ln(cx - r, cy, cx - r, 150) + ln(cx + r, cy, cx + r, 180);
  s += mass(cx - r - 18, 150, 36, 30, 'm₁') + mass(cx + r - 20, 180, 40, 40, 'm₂');
  s += arr(cx - r, 150, cx - r, 118, 'f') + tx(cx - r - 6, 128, 'T', { c: 'f', anchor: 'end' }) + arr(cx - r, 180, cx - r, 212, 'f') + tx(cx - r - 6, 212, 'm₁g', { c: 'f', anchor: 'end' });
  s += arr(cx + r, 180, cx + r, 148, 'f') + tx(cx + r + 6, 158, 'T', { c: 'f' }) + arr(cx + r, 220, cx + r, 254, 'f') + tx(cx + r + 6, 252, 'm₂g', { c: 'f' });
  s += arr(cx - r - 40, 182, cx - r - 40, 152, 'a') + tx(cx - r - 44, 172, 'a', { c: 'a', anchor: 'end' }) + arr(cx + r + 34, 186, cx + r + 34, 216, 'a') + tx(cx + r + 40, 206, 'a', { c: 'a' });
  s += eq(225, 60, ['a = ', { n: '(m₂ − m₁)g', d: 'm₁ + m₂' }]) + eq(225, 120, ['T = ', { n: '2m₁m₂g', d: 'm₁ + m₂' }]);
  s += tx(225, 168, '两侧张力相等', { it: false, fs: 11 }) + tx(225, 184, '（轻绳、无质量无摩擦滑轮）', { it: false, fs: 11 });
  return s;
});
def('table-pulley', '桌面滑块 + 桌边滑轮 + 悬挂物', 'a=\\dfrac{(m_2-\\mu_k m_1)g}{m_1+m_2}', () => {
  const ty = 130; let s = rect(20, ty, 270, 10) + ln(40, ty + 10, 40, 250) + ln(270, ty + 10, 270, 250);
  const bx = 90, by = ty - 40; s += mass(bx, by, 60, 40, 'm₁');
  const r = 12, sy = ty - 20, Qc = [300, sy + r];
  s += ln(bx + 60, sy, Qc[0], sy, { w: 1.2 }) + circ(Qc[0], Qc[1], r) + ln(Qc[0], Qc[1], 288, ty + 4, { w: 2 }) + ln(Qc[0] + r, Qc[1], Qc[0] + r, 190, { w: 1.2 });
  s += mass(Qc[0] + r - 18, 190, 36, 34, 'm₂');
  const cx = bx + 30;
  s += arr(cx, by, cx, by - 36, 'f') + tx(cx + 5, by - 26, 'N', { c: 'f' }) + arr(cx, by + 40, cx, by + 76, 'f') + tx(cx + 5, by + 74, 'm₁g', { c: 'f' });
  s += arr(bx + 60, sy, bx + 104, sy, 'f') + tx(bx + 84, sy + 16, 'T', { c: 'f' }) + arr(bx, by + 36, bx - 34, by + 36, 'f') + tx(bx - 30, by + 28, 'f_{k}', { c: 'f' });
  const hx = Qc[0] + r; s += arr(hx, 190, hx, 160, 'f') + tx(hx + 6, 172, 'T', { c: 'f' }) + arr(hx, 224, hx, 254, 'f') + tx(hx + 6, 252, 'm₂g', { c: 'f' });
  s += arr(bx + 10, by - 50, bx + 50, by - 50, 'a') + tx(bx + 54, by - 46, 'a', { c: 'a' }) + arr(hx - 30, 196, hx - 30, 226, 'a') + tx(hx - 36, 216, 'a', { c: 'a', anchor: 'end' });
  s += eq(20, 30, ['a = ', { n: '(m₂ − μ_{k}m₁)g', d: 'm₁ + m₂' }]) + tx(200, 34, '（光滑桌面取 μ_{k} = 0）', { it: false, fs: 11 });
  return s;
});

/* ======================= Circular motion ======================= */
function banked(withFriction) {
  const th = 25, I = incline(th, 130, 215, 240); const b = I.block(110, 34, 'm'); const C = b.C; const mg = 60;
  let s = I.s + b.svg;
  const N = withFriction ? 80 : mg / Math.cos(rad(th));
  const Ne = add(C, I.n, N); s += arr(C[0], C[1], Ne[0], Ne[1], 'f') + tx(Ne[0] - 6, Ne[1], 'N', { c: 'f', anchor: 'end' });
  s += arr(C[0], C[1], C[0], C[1] + mg, 'f') + tx(C[0] + 5, C[1] + mg + 6, 'mg', { c: 'f' });
  if (withFriction) { const fe = add(C, I.u, -30); s += arr(C[0], C[1], fe[0], fe[1], 'f') + tx(fe[0] - 2, fe[1] + 16, 'f_{s}', { c: 'f', anchor: 'end' }); }
  s += arr(C[0] - 40, C[1] - 82, C[0] - 100, C[1] - 82, 'a') + tx(C[0] - 104, C[1] - 78, 'a_{c}', { c: 'a', anchor: 'end' });
  s += arc(C[0], C[1], 30, 90, 90 + th, { c: 'm', w: 1 }) + tx(C[0] - 6, C[1] - 34, 'θ', { fs: 11, c: 'm', anchor: 'end' }) + ln(C[0], C[1], C[0], C[1] - 40, { c: 'm', dash: '3 3', w: 1 });
  s += tx(20, 236, '← 圆心方向（水平，指向弯道内侧）', { it: false, fs: 11 });
  if (!withFriction) s += tx(20, 26, '无摩擦：N 的水平分量提供向心力', { it: false, fs: 12 }) + eq(240, 60, ['tan θ = ', { n: 'v^{2}', d: 'rg' }]);
  else s += tx(20, 26, 'v 大于设计速度：f_{s} 沿坡面向下', { it: false, fs: 12 }) + eq(10, 130, ['v_{max}^{2} = rg', { n: 'sin θ + μ_{s} cos θ', d: 'cos θ − μ_{s} sin θ' }], { fs: 11 });
  return s;
}
def('banked-frictionless', '倾斜弯道（无摩擦）', '\\tan\\theta=\\dfrac{v^2}{rg}', () => banked(false));
def('banked-friction', '倾斜弯道（有静摩擦，最大速度）', 'v_{\\max}^2=rg\\,\\dfrac{\\sin\\theta+\\mu_s\\cos\\theta}{\\cos\\theta-\\mu_s\\sin\\theta}', () => banked(true));
def('conical-pendulum', '圆锥摆', '\\tan\\theta=\\dfrac{v^2}{rg},\\; T_0=2\\pi\\sqrt{\\dfrac{L\\cos\\theta}{g}}', () => {
  const px = 140, py = 30, L = 160, th = 35; const bx = px + L * Math.sin(rad(th)), by = py + L * Math.cos(rad(th));
  let s = hatch(90, py, 190) + `<ellipse cx="${px}" cy="${r1(by)}" rx="${r1(bx - px)}" ry="18" style="fill:none;stroke:${COL.m};stroke-dasharray:5 4"/>`;
  s += ln(px, py, px, by, { c: 'm', dash: '4 4' }) + ln(px, py, bx, by) + arc(px, py, 34, -90, -90 + th, { w: 1 }) + tx(px + 6, py + 48, 'θ');
  s += tx((px + bx) / 2 - 10, (py + by) / 2 + 4, 'L', { anchor: 'end' }) + ln(px, by, bx, by, { c: 'm', dash: '3 3' }) + tx((px + bx) / 2, by + 30, 'r', { anchor: 'middle' });
  s += circ(bx, by, 9, { fill: 'currentColor' });
  const Tl = 72; s += arr(bx, by, bx - Tl * Math.sin(rad(th)), by - Tl * Math.cos(rad(th)), 'f') + tx(bx - 34, by - 62, 'T', { c: 'f', anchor: 'end' });
  s += arr(bx, by, bx, by + 59, 'f') + tx(bx + 6, by + 58, 'mg', { c: 'f' }) + arr(bx + 16, by - 20, bx + 16 - 45, by - 20, 'a', 1.8) + tx(bx + 20, by - 16, 'a_{c}', { c: 'a' });
  s += eq(265, 60, ['tan θ = ', { n: 'v^{2}', d: 'rg' }]) + eq(265, 125, ['T₀ = 2π', { sqrt: { n: 'L cos θ', d: 'g' } }], { fs: 12 }) + tx(265, 175, 'T cos θ = mg（T：张力）', { fs: 11 }) + eq(265, 205, ['T sin θ = ', { n: 'mv^{2}', d: 'r' }], { fs: 12 });
  return s;
});
def('vertical-loop', '竖直圆环（物体在轨道内侧）', 'v_{\\text{top,min}}=\\sqrt{gR}', () => {
  const cx = 130, cy = 128, R = 95; let s = circ(cx, cy, R) + circ(cx, cy, 2, { fill: 'currentColor' }) + ln(cx, cy, ...pt(cx, cy, R, 135), { c: 'm', dash: '3 3' }) + tx(...pt(cx, cy, 50, 150), 'R');
  s += circ(cx, cy - R + 9, 8, { fill: 'currentColor' }) + arr(cx - 3, cy - R + 9, cx - 3, cy - R + 42, 'f') + tx(cx - 8, cy - R + 42, 'N', { c: 'f', anchor: 'end' });
  s += arr(cx + 3, cy - R + 9, cx + 3, cy - R + 60, 'f') + tx(cx + 8, cy - R + 58, 'mg', { c: 'f' }) + arr(cx - 10, cy - R + 9, cx - 50, cy - R + 9, 'v', 1.8) + tx(cx - 54, cy - R + 5, 'v', { c: 'v', anchor: 'end' });
  s += circ(cx, cy + R - 9, 8, { fill: 'currentColor' }) + arr(cx, cy + R - 9, cx, cy + R - 88, 'f') + tx(cx + 6, cy + R - 72, 'N', { c: 'f' }) + arr(cx, cy + R - 9, cx, cy + R + 24, 'f') + tx(cx + 6, cy + R + 22, 'mg', { c: 'f' });
  s += circ(cx + R - 9, cy, 8, { fill: 'currentColor' }) + arr(cx + R - 9, cy, cx + R - 50, cy, 'f') + tx(cx + R - 46, cy - 6, 'N', { c: 'f' }) + arr(cx + R - 9, cy, cx + R - 9, cy + 40, 'f') + tx(cx + R - 4, cy + 42, 'mg', { c: 'f' });
  s += tx(250, 40, '顶部：N + mg = ', { fs: 12 }) + eq(338, 36, [{ n: 'mv^{2}', d: 'R' }], { fs: 12 });
  s += tx(250, 94, '底部：N − mg = ', { fs: 12 }) + eq(338, 90, [{ n: 'mv^{2}', d: 'R' }], { fs: 12 });
  s += tx(250, 145, '恰好过顶部（N = 0）：', { it: false, fs: 12 }) + eq(260, 180, ['v_{min} = ', { sqrt: 'gR' }]) + tx(250, 225, '侧点：N 指向圆心', { it: false, fs: 11 });
  return s;
});
def('orbit', '圆轨道卫星', 'v=\\sqrt{\\dfrac{GM}{r}},\\; U=-\\dfrac{GMm}{r},\\; T^2\\propto r^3', () => {
  const cx = 130, cy = 130, r = 95; let s = circ(cx, cy, 26, { fill: 'var(--canvas-plot, transparent)' }) + tx(cx, cy + 5, 'M', { anchor: 'middle' }) + circ(cx, cy, r, { c: 'm', dash: '5 4' });
  const [sx, sy] = pt(cx, cy, r, 40); s += circ(sx, sy, 7, { fill: 'currentColor' }) + tx(sx + 10, sy - 8, 'm');
  s += arr(sx, sy, ...pt(sx, sy, 50, 220), 'f') + tx(...pt(sx, sy, 62, 232), 'F_{g}', { c: 'f' }) + arr(sx, sy, ...pt(sx, sy, 60, 130), 'v') + tx(...pt(sx, sy, 70, 126), 'v', { c: 'v' });
  s += ln(cx, cy, ...pt(cx, cy, r, -30), { c: 'm' }) + tx(...pt(cx, cy, r / 2, -18), 'r');
  s += eq(250, 50, [{ n: 'GMm ', d: 'r^{2}' }, '    =    ', { n: 'mv^{2}', d: 'r' }]) + eq(250, 110, ['v = ', { sqrt: { n: 'GM', d: 'r' } }]) + eq(250, 170, ['U = −', { n: 'GMm', d: 'r' }]) + tx(250, 215, '开普勒：T² ∝ r³', { fs: 11, it: false });
  return s;
});

/* ======================= Work / energy ======================= */
def('force-position', 'F–x 图面积 = 功；弹簧势能曲线 U(x)', 'W=\\int F\\,dx,\\; U_s=\\dfrac{1}{2}kx^2', () => {
  let s = '';
  const g1 = graph(40, 30, 130, 120, { fns: [{ f: (x) => x, c: 'f' }], t1: 1, ymin: 0, ymax: 1.1, xl: 'x', yl: 'F' });
  s += g1.s + poly([[g1.X(0), g1.Y(0)], [g1.X(0.8), g1.Y(0.8)], [g1.X(0.8), g1.Y(0)], [g1.X(0), g1.Y(0)]], { fill: COL.f, op: 0.18, c: 'f', w: 0.5 }) + tx(g1.X(0.55), g1.Y(0.18), 'W', { anchor: 'middle' });
  s += eq(40, 205, ['W = ', { n: '1', d: '2' }, 'kx^{2}（F_{app} = kx）']);
  const g2 = graph(250, 30, 120, 120, { fns: [{ f: (x) => (x - 0.5) ** 2 * 4 }, { f: () => 0.64, c: 'm', dash: '4 3', w: 1.2 }], t1: 1, ymin: 0, ymax: 1.1, xl: 'x', yl: 'U', vmarks: [{ t: 0.1, label: '−A' }, { t: 0.9, label: 'A' }] });
  s += g2.s + tx(g2.X(0.5), g2.Y(0.64) - 6, 'E', { anchor: 'middle' });
  s += eq(250, 205, ['F_s = −', { n: 'dU', d: 'dx' }, ' = −kx']);
  return s;
});

/* ======================= Momentum ======================= */
def('collision-elastic', '一维弹性碰撞（碰前 / 碰后）', "v_1'=\\dfrac{m_1-m_2}{m_1+m_2}v_1,\\; v_2'=\\dfrac{2m_1}{m_1+m_2}v_1", () => {
  let s = tx(20, 30, '碰前', { it: false, fs: 12 }) + hatch(20, 80, 380) + mass(60, 50, 40, 30, 'm₁') + mass(220, 50, 50, 30, 'm₂') + arr(100, 40, 150, 40, 'v') + tx(152, 44, 'v₁', { c: 'v' }) + tx(245, 44, 'v₂ = 0', { fs: 11, anchor: 'middle' });
  s += tx(20, 120, '碰后（m₁ < m₂：m₁ 反弹）', { it: false, fs: 12 }) + hatch(20, 170, 380) + mass(120, 140, 40, 30, 'm₁') + mass(250, 140, 50, 30, 'm₂') + arr(120, 130, 90, 130, 'v') + tx(86, 134, "v₁'", { c: 'v', anchor: 'end' }) + arr(300, 130, 340, 130, 'v') + tx(344, 134, "v₂'", { c: 'v' });
  s += eq(20, 218, ["v₁' = ", { n: 'm₁ − m₂', d: 'm₁ + m₂' }, 'v₁'], { fs: 12 }) + eq(205, 218, ["v₂' = ", { n: '2m₁', d: 'm₁ + m₂' }, 'v₁'], { fs: 12 });
  return s;
});
def('collision-inelastic', '完全非弹性碰撞（碰后粘在一起）', 'v_f=\\dfrac{m_1v_1}{m_1+m_2}', () => {
  let s = tx(20, 30, '碰前', { it: false, fs: 12 }) + hatch(20, 80, 380) + mass(60, 50, 40, 30, 'm₁') + mass(220, 50, 50, 30, 'm₂') + arr(100, 40, 150, 40, 'v') + tx(152, 44, 'v₁', { c: 'v' });
  s += tx(20, 120, '碰后', { it: false, fs: 12 }) + hatch(20, 170, 380) + mass(180, 140, 40, 30, 'm₁') + mass(220, 140, 50, 30, 'm₂') + arr(270, 130, 300, 130, 'v') + tx(304, 134, 'v_{f}', { c: 'v' });
  s += eq(30, 218, ['v_{f} = ', { n: 'm₁v₁', d: 'm₁ + m₂' }]) + eq(190, 218, ['ΔK = −', { n: 'm₁m₂v₁^{2}', d: '2(m₁ + m₂)' }], { fs: 12 });
  return s;
});
def('collision-2d', '二维碰撞：动量分量守恒', "m_1v_1=m_1v_1'\\cos\\theta_1+m_2v_2'\\cos\\theta_2", () => {
  const cx = 180, cy = 110; let s = ln(30, cy, 360, cy, { c: 'm', dash: '4 4' });
  s += circ(70, cy, 12) + tx(70, cy + 30, 'm₁', { anchor: 'middle' }) + arr(84, cy, 150, cy, 'v') + tx(110, cy - 8, 'v₁', { c: 'v' }) + circ(cx, cy, 14) + tx(cx, cy + 34, 'm₂（静止）', { anchor: 'middle', fs: 11 });
  s += arrD(cx, cy, 35, 120, 'v') + tx(...pt(cx, cy, 130, 35), "v₁'", { c: 'v' }) + arrD(cx, cy, -40, 95, 'v') + tx(...pt(cx, cy, 108, -40), "v₂'", { c: 'v' });
  s += arc(cx, cy, 44, 0, 35, { w: 1 }) + tx(...pt(cx, cy, 56, 16), 'θ₁', { fs: 12 }) + arc(cx, cy, 36, -40, 0, { w: 1 }) + tx(...pt(cx, cy, 50, -24), 'θ₂', { fs: 12 });
  s += tx(20, 215, "x：m₁v₁ = m₁v₁' cos θ₁ + m₂v₂' cos θ₂", { fs: 12 }) + tx(20, 240, "y：0 = m₁v₁' sin θ₁ − m₂v₂' sin θ₂", { fs: 12 });
  return s;
});
def('ballistic-pendulum', '冲击摆', 'v=\\dfrac{m+M}{m}\\sqrt{2gh}', () => {
  const L = 130, ang = 32, h = L - L * Math.cos(rad(ang));
  let s = hatch(170, 20, 330) + ln(200, 20, 200, 140, { c: 'm', dash: '4 4' }) + ln(260, 20, 260, 140, { c: 'm', dash: '4 4' }) + rect(185, 140, 90, 40, { dash: '4 3', c: 'm', fill: 'none' }) + tx(230, 165, 'M', { anchor: 'middle', c: 'm' });
  const dx = L * Math.sin(rad(ang)), dy = L * Math.cos(rad(ang));
  s += ln(200, 20, 200 + dx, 20 + dy) + ln(260, 20, 260 + dx, 20 + dy) + rect(185 + dx, 20 + dy, 90, 40) + tx(230 + dx, 45 + dy, 'm + M', { anchor: 'middle', fs: 12 });
  s += circ(80, 160, 5, { fill: 'currentColor' }) + arr(88, 160, 150, 160, 'v') + tx(84, 148, 'v（子弹 m）', { c: 'v', fs: 12 });
  s += ln(365, 180, 365, 180 - h, { c: 'm', w: 1 }) + ln(355, 180, 375, 180, { c: 'm', w: 1 }) + ln(355, 180 - h, 375, 180 - h, { c: 'm', w: 1 }) + tx(370, 180 - h / 2 + 4, 'h', { anchor: 'start' });
  s += tx(20, 40, '① 碰撞瞬间：动量守恒', { it: false, fs: 12 }) + tx(20, 60, '② 上摆：机械能守恒', { it: false, fs: 12 }) + eq(20, 225, ['v = ', { n: 'm + M', d: 'm' }, { sqrt: '2gh' }]);
  return s;
});
def('impulse-graph', 'F–t 图：曲线下面积 = 冲量', 'J=\\int F\\,dt=\\Delta p,\\; F_{avg}=\\dfrac{\\Delta p}{\\Delta t}', () => {
  const pulse = (t) => (t > 0.2 && t < 0.8 ? Math.sin(((t - 0.2) / 0.6) * Math.PI) : 0);
  const g = graph(50, 30, 280, 150, { fns: [{ f: pulse, c: 'f' }], t1: 1, ymin: 0, ymax: 1.15, yl: 'F', vmarks: [{ t: 0.2, label: 't₁' }, { t: 0.8, label: 't₂' }] });
  const pts = []; for (let i = 0; i <= 40; i++) { const t = 0.2 + i / 40 * 0.6; pts.push([g.X(t), g.Y(pulse(t))]); }
  let s = g.s + poly(pts, { fill: COL.f, op: 0.18, c: 'f', w: 0.5 }) + tx(g.X(0.5), g.Y(0.4), 'J', { anchor: 'middle', fs: 16 });
  s += tx(50, 230, 'J = ∫F dt = Δp = mv_{f} − mv_{i}', { fs: 12 }) + eq(270, 226, ['F_{avg} = ', { n: 'Δp', d: 'Δt' }]);
  return s;
});
def('momentum-graph', 'p–t 图：两车弹性碰撞（等质量）', 'p_1+p_2=\\text{const},\\; F=\\dfrac{dp}{dt}', () => {
  const sm = (t) => (t < 0.4 ? 0 : t > 0.6 ? 1 : (1 - Math.cos(((t - 0.4) / 0.2) * Math.PI)) / 2);
  const g = graph(50, 30, 280, 150, { fns: [{ f: (t) => 1 - sm(t), c: 'v' }, { f: (t) => sm(t), c: 'a' }, { f: () => 1, c: 'm', dash: '5 4', w: 1.4 }], t1: 1, ymin: 0, ymax: 1.2, yl: 'p', hmarks: [{ v: 1, label: 'p₀' }], vmarks: [{ t: 0.4 }, { t: 0.6 }] });
  let s = g.s + tx(g.X(0.12), g.Y(1) + 16, 'p₁', { c: 'v' }) + tx(g.X(0.85), g.Y(1) + 16, 'p₂', { c: 'a' }) + tx(g.X(0.08), g.Y(0) - 6, 'p₂ = 0', { c: 'a', fs: 11 }) + tx(g.X(0.78), g.Y(0) - 6, 'p₁ = 0', { c: 'v', fs: 11 });
  s += tx(g.X(0.5), g.Y(1) - 8, 'p₁ + p₂ = p₀', { c: 'm', anchor: 'middle', fs: 11 }) + eq(50, 226, ['F_{on 2} = ', { n: 'dp₂', d: 'dt' }, ' = −', { n: 'dp₁', d: 'dt' }]);
  return s;
});

/* ======================= Rotation ======================= */
def('rolling-incline', '纯滚动下坡（静摩擦沿坡面向上）', 'a=\\dfrac{g\\sin\\theta}{1+\\dfrac{I}{MR^2}}' + CAP_DESCENT, () => {
  const th = 28, x0 = 20, y0 = 70, L = 340; const u = [Math.cos(rad(th)), Math.sin(rad(th))]; // down-slope
  const n = [Math.sin(rad(th)), -Math.cos(rad(th))]; // outward normal
  const bot = [x0 + u[0] * L, y0 + u[1] * L];
  let s = poly([[x0, y0], bot, [x0, bot[1]], [x0, y0]], { fill: 'var(--canvas-plot, transparent)' }) + arc(bot[0], bot[1], 40, 180 - th, 180) + tx(bot[0] - 56, bot[1] - 6, 'θ');
  const R = 26, cp = add([x0, y0], u, 130), C = add(cp, n, R);
  s += circ(C[0], C[1], R) + circ(C[0], C[1], 2.5, { fill: 'currentColor' });
  s += arr(C[0], C[1], C[0], C[1] + 66, 'f') + tx(C[0] - 6, C[1] + 66, 'Mg', { c: 'f', anchor: 'end' });
  const Ne = add(cp, n, 2 * R + 30); s += arr(cp[0], cp[1], Ne[0], Ne[1], 'f') + tx(Ne[0] + 6, Ne[1], 'N', { c: 'f' });
  const fe = add(cp, u, -36); s += arr(cp[0], cp[1], fe[0], fe[1], 'f') + tx(fe[0] - 4, fe[1] + 14, 'f_{s}', { c: 'f', anchor: 'end' });
  const v0 = add(C, n, R + 12), v1 = add(v0, u, 44); s += arr(v0[0], v0[1], v1[0], v1[1], 'v') + tx(v1[0] + 4, v1[1] + 14, 'v_{cm}', { c: 'v' });
  s += arc(C[0], C[1], R - 8, 160, 20, { c: 'a', w: 1.5, me: 'a' }) + tx(C[0] - R - 6, C[1] - R + 2, 'ω', { c: 'a', anchor: 'end' });
  s += tx(200, 30, 'v_{cm} = Rω；接触点瞬时静止', { it: false, fs: 12 }) + eq(200, 86, ['a = ', { n: 'g sin θ', dPrefix: '1 + ', d: { n: 'I', d: 'MR^{2}' } }]) + tx(230, 159, '实心球', { it: false, fs: 12 }) + eq(276, 155, ['a = ', { n: '5', d: '7' }, 'g sin θ'], { fs: 12 });
  return s;
});
def('rolling-velocity', '纯滚动：轮上各点速度（地面参考系）', 'v_{\\text{top}}=2v_{cm},\\; v_{\\text{contact}}=0', () => {
  const cx = 120, cy = 140, R = 70; let s = hatch(20, cy + R, 380) + circ(cx, cy, R) + circ(cx, cy, 3, { fill: 'currentColor' });
  s += arr(cx, cy - R, cx + 120, cy - R, 'v') + tx(cx + 124, cy - R + 4, '2v_{cm}', { c: 'v' }) + arr(cx, cy, cx + 60, cy, 'v') + tx(cx + 64, cy + 4, 'v_{cm}', { c: 'v' });
  s += circ(cx, cy + R, 3.5, { fill: COL.v, c: 'v' }) + tx(cx + 8, cy + R - 6, 'v = 0', { c: 'v', fs: 12 });
  const [fx, fy] = pt(cx, cy, R, 180); s += arr(fx, fy, fx + 60, fy - 60, 'v', 1.6) + tx(fx - 4, fy + 16, '√2 v_{cm}', { c: 'v', fs: 11, anchor: 'start' });
  s += arc(cx, cy, R + 12, 120, 60, { c: 'a', w: 1.4, me: 'a' }) + tx(cx, cy - R - 18, 'ω', { c: 'a', anchor: 'middle' });
  s += eq(285, 120, ['ω = ', { n: 'v_{cm}', d: 'R' }]) + eq(210, 185, ['K = ', { n: '1', d: '2' }, 'Mv_{cm}^{2} + ', { n: '1', d: '2' }, 'Iω^{2}'], { fs: 12 });
  return s;
});
def('rod-pivot', '端点转轴均匀细杆（自水平位置释放）', 'I=\\dfrac{1}{3}ML^2,\\; \\alpha=\\dfrac{3g}{2L}' + CAP_DESCENT, () => {
  const px = 50, py = 110, L = 280; let s = '';
  s += `<polygon points="${px},${py} ${px - 12},${py + 22} ${px + 12},${py + 22}" style="fill:none;stroke:currentColor;stroke-width:1.5"/>` + hatch(px - 20, py + 22, px + 22);
  s += rect(px, py - 5, L, 10) + circ(px, py, 3.5, { fill: 'currentColor' });
  s += ln(px, py, ...pt(px, py, L, -35), { c: 'm', dash: '6 4', w: 1.2 }) + arc(px, py, 80, -2, -33, { c: 'm', w: 1, me: 'm' });
  s += circ(px + L / 2, py, 3, { fill: 'currentColor' }) + arr(px + L / 2, py, px + L / 2, py + 70, 'f') + tx(px + L / 2 + 6, py + 68, 'Mg', { c: 'f' });
  s += arr(px, py, px, py - 40, 'f') + tx(px + 6, py - 34, 'F_{pivot}', { c: 'f', fs: 12 });
  s += tx(px + L / 4, py - 12, 'L/2', { anchor: 'middle', fs: 12 }) + tx(px + L, py - 12, 'L', { anchor: 'middle', fs: 12 });
  s += eq(40, 220, ['τ = Mg', { n: 'L', d: '2' }, ' = ', { n: '1', d: '3' }, 'ML^{2}α']) + eq(260, 220, ['α = ', { n: '3g', d: '2L' }]);
  return s;
});
def('disk-string', '定轴均匀圆盘 + 绕绳悬挂物', 'a=\\dfrac{mg}{m+\\dfrac{I}{R^2}}=\\dfrac{2mg}{2m+M}' + CAP_DESCENT, () => {
  const cx = 120, cy = 80, R = 52; let s = hatch(70, 14, 170) + ln(cx, 14, cx, cy, { w: 2 }) + circ(cx, cy, R, { fill: 'var(--canvas-plot, transparent)' }) + circ(cx, cy, 3, { fill: 'currentColor' }) + tx(cx - 30, cy + 6, 'M', {});
  s += ln(cx, cy, cx + R, cy, { c: 'm', dash: '3 3' }) + tx(cx + R / 2, cy - 6, 'R', { anchor: 'middle', fs: 12 });
  s += ln(cx + R, cy, cx + R, 180) + mass(cx + R - 18, 180, 36, 30, 'm');
  s += arr(cx + R + 4, cy + 4, cx + R + 4, cy + 46, 'f') + tx(cx + R + 10, cy + 40, 'T（作用于盘）', { c: 'f', fs: 11 });
  s += arr(cx + R, 180, cx + R, 146, 'f') + tx(cx + R + 6, 156, 'T', { c: 'f' }) + arr(cx + R, 210, cx + R, 246, 'f') + tx(cx + R + 6, 246, 'mg', { c: 'f' });
  s += arr(cx + R - 34, 190, cx + R - 34, 224, 'a') + tx(cx + R - 40, 214, 'a', { c: 'a', anchor: 'end' }) + arc(cx, cy, R + 10, 150, 60, { c: 'a', w: 1.4, me: 'a' }) + tx(cx - R - 14, cy - 20, 'α', { c: 'a', anchor: 'end' });
  s += tx(250, 30, 'mg − T = ma', { fs: 12 }) + tx(250, 52, 'TR = Iα，a = Rα', { fs: 12 }) + eq(250, 100, ['a = ', { n: 'mg', dPrefix: 'm + ', d: { n: 'I', d: 'R^{2}' } }]) + eq(250, 165, ['圆盘 I = ', { n: '1', d: '2' }, 'MR^{2}'], { fs: 12 }) + eq(250, 215, ['a = ', { n: '2mg', d: '2m + M' }]);
  return s;
});
def('ladder', '转动静力学：靠墙梯子（光滑墙、粗糙地面）', '\\mu_s\\ge\\dfrac{1}{2\\tan\\theta}', () => {
  const fx = 70, fy = 225, L = 200, th = 60; const top = [fx + L * Math.cos(rad(th)), fy - L * Math.sin(rad(th))];
  let s = hatch(20, fy, 220) + vhatch(top[0], 20, fy, false) + ln(fx, fy, top[0], top[1], { w: 4 });
  s += arc(fx, fy, 30, 0, th) + tx(fx + 34, fy - 10, 'θ');
  const C = [(fx + top[0]) / 2, (fy + top[1]) / 2]; s += circ(C[0], C[1], 3, { fill: 'currentColor' }) + arr(C[0], C[1], C[0], C[1] + 60, 'f') + tx(C[0] + 6, C[1] + 58, 'mg', { c: 'f' });
  s += arr(fx, fy, fx, fy - 60, 'f') + tx(fx - 6, fy - 50, 'N_{f}', { c: 'f', anchor: 'end' }) + arr(fx, fy, fx + 34, fy, 'f') + tx(fx + 14, fy + 18, 'f_{s}', { c: 'f' });
  s += arr(top[0], top[1], top[0] - 34, top[1], 'f') + tx(top[0] - 38, top[1] - 6, 'N_{w}', { c: 'f', anchor: 'end' });
  s += tx(240, 40, '地面静摩擦指向墙', { it: false, fs: 11 }) + tx(240, 66, 'N_{f} = mg，f_{s} = N_{w}', { fs: 12 });
  s += eq(240, 110, ['N_{w} = ', { n: 'mg', d: '2 tan θ' }]) + eq(240, 170, ['μ_{s} ≥ ', { n: '1', d: '2 tan θ' }]) + tx(240, 215, '对地面接触点取力矩', { it: false, fs: 11 });
  return s;
});

/* ======================= SHM ======================= */
def('shm-horizontal', '水平弹簧振子（光滑水平面）', 'T=2\\pi\\sqrt{\\dfrac{m}{k}},\\; F=-kx', () => {
  const y = 150, x0 = 200; let s = vhatch(30, 90, y + 2) + hatch(30, y, 380);
  const bx = x0 + 50; s += spring(30, y - 20, bx, y - 20, 12, 9) + mass(bx, y - 40, 44, 40, 'm');
  [[x0 - 70, '−A'], [x0, 'x = 0'], [x0 + 70, '+A']].forEach(([x, l]) => { s += ln(x, y + 4, x, y + 14, { w: 1 }) + tx(x, y + 30, l, { anchor: 'middle', fs: 12 }); });
  s += ln(x0, 60, x0, y, { c: 'm', dash: '3 3' }) + ln(bx, 60, bx, y - 40, { c: 'm', dash: '3 3' }) + arr(x0, 70, bx, 70, 'g', 1) + tx((x0 + bx) / 2, 64, 'x', { anchor: 'middle' });
  s += arr(bx + 22, y - 20, bx - 34, y - 20, 'f') + tx(bx - 38, y - 28, 'F = −kx', { c: 'f', anchor: 'end', fs: 12 });
  s += eq(30, 220, ['T = 2π', { sqrt: { n: 'm', d: 'k' } }]) + eq(200, 220, ['ω = ', { sqrt: { n: 'k', d: 'm' } }]) + tx(40, 28, '端点 ±A：v = 0，|a| 最大', { fs: 11, it: false }) + tx(40, 46, '平衡点 x = 0：|v| 最大，a = 0', { fs: 11, it: false });
  return s;
});
def('shm-vertical', '竖直弹簧振子', '\\Delta y=\\dfrac{mg}{k},\\; T=2\\pi\\sqrt{\\dfrac{m}{k}}', () => {
  let s = hatch(30, 20, 370);
  s += spring(80, 20, 80, 100, 10, 8) + tx(80, 118, '原长', { anchor: 'middle', it: false, fs: 12 });
  s += spring(200, 20, 200, 140, 12, 8) + mass(180, 140, 40, 36, 'm') + ln(90, 100, 330, 100, { c: 'm', dash: '3 3' }) + ln(160, 140, 330, 140, { c: 'm', dash: '3 3' });
  s += arr(250, 100, 250, 140, 'g', 1) + tx(254, 126, 'Δy', { fs: 12 }) + tx(200, 200, '平衡位置', { anchor: 'middle', it: false, fs: 12 });
  s += arr(210, 140, 210, 108, 'f', 1.8) + tx(216, 120, 'kΔy', { c: 'f', fs: 11 }) + arr(190, 176, 190, 210, 'f', 1.8) + tx(184, 212, 'mg', { c: 'f', anchor: 'end', fs: 12 });
  s += spring(320, 20, 320, 175, 14, 8) + mass(300, 175, 40, 36, 'm') + arr(352, 140, 352, 175, 'g', 1) + tx(356, 162, 'y', { fs: 12 }) + tx(320, 228, '偏离平衡 y', { anchor: 'middle', it: false, fs: 12 });
  s += eq(30, 160, ['Δy = ', { n: 'mg', d: 'k' }]) + eq(20, 225, ['T = 2π', { sqrt: { n: 'm', d: 'k' } }], { fs: 12 }) + tx(120, 251, '以平衡位置为原点：F_{net} = −ky（周期与水平时相同）', { fs: 11 });
  return s;
});
def('pendulum-simple', '单摆（小角度）', 'T=2\\pi\\sqrt{\\dfrac{L}{g}}', () => {
  const px = 140, py = 26, L = 170, th = 25; const bx = px + L * Math.sin(rad(th)), by = py + L * Math.cos(rad(th));
  let s = hatch(90, py, 190) + ln(px, py, px, py + L + 10, { c: 'm', dash: '4 4' }) + ln(px, py, bx, by) + arc(px, py, 40, -90, -90 + th, { w: 1 }) + tx(px + 6, py + 56, 'θ') + tx((px + bx) / 2 + 8, (py + by) / 2, 'L');
  s += circ(bx, by, 10, { fill: 'currentColor' });
  s += arr(bx, by, bx - 66 * Math.sin(rad(th)), by - 66 * Math.cos(rad(th)), 'f') + tx(bx - 34, by - 62, 'T', { c: 'f', anchor: 'end' });
  s += arr(bx, by, bx, by + 62, 'f') + tx(bx + 6, by + 64, 'mg', { c: 'f' });
  const mgs = 62 * Math.sin(rad(th)), mgc = 62 * Math.cos(rad(th));
  s += arr(bx, by, bx - mgs * Math.cos(rad(th)), by + mgs * Math.sin(rad(th)), 'm', 1.4, '4 3') + tx(bx - 30, by + 26, 'mg sin θ', { c: 'm', fs: 11, anchor: 'end' });
  s += arr(bx, by, bx + mgc * Math.sin(rad(th)), by + mgc * Math.cos(rad(th)), 'm', 1.4, '4 3') + tx(bx + 26, by + 50, 'mg cos θ', { c: 'm', fs: 11 });
  s += eq(260, 60, ['T = 2π', { sqrt: { n: 'L', d: 'g' } }]) + tx(260, 115, '回复力 −mg sin θ ≈ −mgθ', { fs: 11 }) + tx(260, 135, '（θ 很小，sin θ ≈ θ）', { it: false, fs: 11 }) + tx(260, 160, 'T 与 m、振幅无关', { it: false, fs: 11 });
  return s;
});
def('pendulum-physical', '物理摆（刚体绕固定轴摆动）', 'T=2\\pi\\sqrt{\\dfrac{I}{mgd}}', () => {
  const px = 130, py = 40, d = 90, th = 22, Lr = 180; const [cmx, cmy] = [px + d * Math.sin(rad(th)), py + d * Math.cos(rad(th))];
  let s = hatch(90, py - 14, 170) + ln(px, py - 14, px, py, { w: 2 });
  s += `<g transform="translate(${px},${py}) rotate(${-th})">${rect(-9, -12, 18, Lr + 12)}</g>`;
  s += circ(px, py, 3.5, { fill: 'currentColor' }) + tx(px - 10, py - 2, 'P', { anchor: 'end' }) + ln(px, py, px, py + Lr, { c: 'm', dash: '4 4' }) + arc(px, py, 50, -90, -90 + th, { w: 1 }) + tx(px + 6, py + 66, 'θ');
  s += circ(cmx, cmy, 4, { fill: COL.f, c: 'f' }) + tx(cmx + 14, cmy - 2, 'cm', { fs: 11, it: false }) + arr(cmx, cmy, cmx, cmy + 64, 'f') + tx(cmx + 6, cmy + 64, 'mg', { c: 'f' });
  s += tx(px + 26, py + 36, 'd', { fs: 12 });
  s += eq(240, 60, ['T = 2π', { sqrt: { n: 'I', d: 'mgd' } }]) + tx(240, 110, 'τ = −mgd sin θ ≈ −mgdθ', { fs: 12 }) + eq(240, 155, ['均匀杆绕端点：T = 2π', { sqrt: { n: '2L', d: '3g' } }], { fs: 11 }) + tx(240, 205, 'I：绕转轴 P 的转动惯量', { it: false, fs: 11 }) + tx(240, 222, 'd：P 到质心距离', { it: false, fs: 11 });
  return s;
});
def('shm-graphs', 'SHM 的 x、v、a – t 图（x = A cos ωt）', 'v=-A\\omega\\sin\\omega t,\\; a=-A\\omega^2\\cos\\omega t', () => {
  let s = ''; const w = 2 * Math.PI;
  const rows = [['x', (t) => Math.cos(w * t), 'g', 'A'], ['v', (t) => -Math.sin(w * t), 'v', 'Aω'], ['a', (t) => -Math.cos(w * t), 'a', 'Aω²']];
  rows.forEach(([yl, f, c, amp], i) => {
    const y0 = 14 + i * 80; const g = graph(56, y0, 224, 54, { fns: [{ f, c }], t1: 1.25, ymin: -1.15, ymax: 1.15, yl });
    s += g.s + tx(56, g.Y(1) + 9, amp, { anchor: 'end', fs: 10 }) + tx(56, g.Y(-1) + 9, '−' + amp, { anchor: 'end', fs: 10 });
    [0.25, 0.5, 0.75, 1].forEach((t) => { s += ln(g.X(t), y0, g.X(t), y0 + 54, { c: 'm', w: 0.7, dash: '2 3' }); });
    if (i === 2) ['T/4', 'T/2', '3T/4', 'T'].forEach((l, k) => { s += tx(g.X((k + 1) * 0.25), y0 + 70, l, { anchor: 'middle', fs: 10 }); });
  });
  s += tx(306, 34, '|x| 最大', { fs: 10, it: false }) + tx(306, 48, '时 v = 0', { fs: 10 }) + tx(306, 116, 'v 超前 x', { fs: 10, it: false }) + tx(306, 130, '1/4 周期', { fs: 10, it: false }) + tx(306, 196, 'a = −ω²x', { fs: 10 }) + tx(306, 210, '与 x 反相', { fs: 10, it: false });
  return s;
});

/* ======================= Electrostatics ======================= */
def('point-charge-field', '点电荷电场线与等势面', 'E=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{q}{r^2},\\; V=\\dfrac{kq}{r}', () => {
  const cx = 130, cy = 130; let s = '';
  [40, 70, 100].forEach((r) => { s += circ(cx, cy, r, { c: 'm', dash: '4 4', w: 1 }); });
  for (let k = 0; k < 12; k++) { const a = k * 30 + 15; s += arr(...pt(cx, cy, 16, a), ...pt(cx, cy, 116, a), 'E', 1.2); }
  s += circ(cx, cy, 12, { fill: COL.E, op: 0.3, c: 'E' }) + tx(cx, cy + 5, '+q', { anchor: 'middle', fs: 12 });
  s += eq(255, 55, ['E = ', { n: '1', d: '4πε₀' }, { n: 'q', d: 'r^{2}' }]) + eq(255, 120, ['V = ', { n: 'kq', d: 'r' }]) + tx(255, 170, '等势面（虚线）⊥ 电场线', { it: false, fs: 11 }) + tx(255, 190, 'E 指向 V 降低方向', { it: false, fs: 11 });
  return s;
});
def('dipole-field', '电偶极子电场（按库仑定律逐点计算方向）', '\\vec E=\\sum_i\\dfrac{kq_i}{r_i^2}\\hat r_i', () => {
  const q = [[140, 130, 1], [260, 130, -1]]; let s = '';
  for (let x = 40; x <= 360; x += 32) for (let y = 30; y <= 230; y += 28) {
    let ex = 0, ey = 0, near = false;
    for (const [qx, qy, qq] of q) { const dx = x - qx, dy = y - qy, r2 = dx * dx + dy * dy; if (r2 < 500) near = true; const r3 = Math.pow(r2, 1.5); ex += qq * dx / r3; ey += qq * dy / r3; }
    if (near) continue; const m = Math.hypot(ex, ey), L = 14; s += arr(x - ex / m * L / 2, y - ey / m * L / 2, x + ex / m * L / 2, y + ey / m * L / 2, 'E', 1.2);
  }
  s += circ(140, 130, 12, { fill: COL.E, op: 0.25, c: 'E' }) + tx(140, 135, '+q', { anchor: 'middle', fs: 12 }) + circ(260, 130, 12, { fill: COL.v, op: 0.25, c: 'v' }) + tx(260, 135, '−q', { anchor: 'middle', fs: 12 });
  return s;
});
def('parallel-plate-potential', '平行板间匀强电场与等势线', 'E=\\dfrac{\\Delta V}{d}=\\dfrac{\\sigma}{\\varepsilon_0}', () => {
  let s = ln(60, 50, 280, 50, { w: 4 }) + ln(60, 200, 280, 200, { w: 4 });
  for (let x = 75; x <= 270; x += 30) { s += tx(x, 42, '+', { anchor: 'middle', it: false }) + tx(x, 220, '−', { anchor: 'middle', it: false }); }
  for (let x = 90; x <= 260; x += 45) s += arr(x, 56, x, 194, 'E', 1.4);
  [87.5, 125, 162.5].forEach((y, i) => { s += ln(62, y, 278, y, { c: 'm', dash: '5 4', w: 1 }) + tx(286, y + 4, ['V₀ − ¼ΔV', 'V₀ − ½ΔV', 'V₀ − ¾ΔV'][i], { fs: 10 }); });
  s += tx(286, 54, 'V₀', { fs: 11 }) + tx(286, 204, 'V₀ − ΔV', { fs: 11 }) + tx(36, 130, 'd', {}) + arr(46, 60, 46, 190, 'g', 1) + tx(100, 130, 'E', { c: 'E' });
  s += eq(70, 240, ['E = ', { n: 'ΔV', d: 'd' }, ' = ', { n: 'σ', d: 'ε₀' }], { fs: 12 });
  return s;
});

/* ======================= Gauss ======================= */
def('gauss-sphere', '高斯面：同心球面（点电荷 / 均匀带电球）', '\\oint\\vec E\\cdot d\\vec A=\\dfrac{Q_{\\text{enc}}}{\\varepsilon_0},\\; E=\\dfrac{Q}{4\\pi\\varepsilon_0 r^2}', () => {
  const cx = 120, cy = 130, R = 38, r = 88; let s = circ(cx, cy, R, { fill: COL.E, op: 0.15, c: 'E' }) + tx(cx, cy + 5, '+Q', { anchor: 'middle' });
  s += circ(cx, cy, r, { dash: '6 4' }) + `<ellipse cx="${cx}" cy="${cy}" rx="${r}" ry="22" style="fill:none;stroke:${COL.m};stroke-dasharray:4 4"/>`;
  for (let k = 0; k < 8; k++) { const a = 22.5 + k * 45; s += arr(...pt(cx, cy, r - 14, a), ...pt(cx, cy, r + 24, a), 'E', 1.5); }
  s += arr(...pt(cx, cy, r, 90), ...pt(cx, cy, r + 28, 90), 'g', 1.2) + tx(cx + 6, cy - r - 16, 'dA', { fs: 12 });
  s += ln(cx, cy, ...pt(cx, cy, r, -60), { c: 'm' }) + tx(...pt(cx, cy, 62, -48), 'r', {}) + ln(cx, cy, ...pt(cx, cy, R, 200), { c: 'm', w: 1 }) + tx(...pt(cx, cy, R + 6, 205), 'R', { fs: 11, anchor: 'end' });
  s += tx(240, 28, 'E ∥ dA，面上 |E| 处处相同', { it: false, fs: 11 }) + eq(240, 68, ['E·4πr^{2} = ', { n: 'Q_{enc}', d: 'ε₀' }]) + eq(240, 128, ['r > R：E = ', { n: 'Q', d: '4πε₀r^{2}' }], { fs: 12 }) + eq(240, 188, ['r < R：E = ', { n: 'Qr', d: '4πε₀R^{3}' }], { fs: 12 }) + tx(240, 228, '（均匀带电实心球）', { it: false, fs: 10 });
  return s;
});
def('gauss-cylinder', '高斯面：同轴圆柱面（无限长线电荷 λ）', 'E=\\dfrac{\\lambda}{2\\pi\\varepsilon_0 r}', () => {
  const x1 = 90, x2 = 250, cy = 115, r = 50; let s = ln(20, cy, 330, cy, { c: 'E', w: 3 }) + tx(336, cy + 4, 'λ', { c: 'E' });
  s += `<ellipse cx="${x1}" cy="${cy}" rx="16" ry="${r}" style="fill:none;stroke:currentColor;stroke-dasharray:6 4"/><ellipse cx="${x2}" cy="${cy}" rx="16" ry="${r}" style="fill:none;stroke:currentColor;stroke-dasharray:6 4"/>`;
  s += ln(x1, cy - r, x2, cy - r, { dash: '6 4' }) + ln(x1, cy + r, x2, cy + r, { dash: '6 4' });
  for (const x of [130, 170, 210]) { s += arr(x, cy - 6, x, cy - r - 26, 'E', 1.5) + arr(x, cy + 6, x, cy + r + 26, 'E', 1.5); }
  s += arr(x2 + 16, cy - 30, x2 + 50, cy - 30, 'g', 1.2) + tx(x2 + 54, cy - 26, 'dA', { fs: 11 }) + tx(x2 + 22, cy - 50, '端面 E ⊥ dA：通量 0', { fs: 10, it: false });
  s += tx(170, cy + r + 44, 'ℓ', { anchor: 'middle' }) + ln(x1 - 34, cy, x1 - 34, cy - r, { c: 'm' }) + tx(x1 - 40, cy - 20, 'r', { anchor: 'end' });
  s += eq(30, 232, ['E·2πrℓ = ', { n: 'λℓ', d: 'ε₀' }]) + eq(220, 232, ['E = ', { n: 'λ', d: '2πε₀r' }]);
  return s;
});
def('gauss-plane', '高斯面：无限大带电平面（柱形盒）', 'E=\\dfrac{\\sigma}{2\\varepsilon_0}', () => {
  const px = 190; let s = `<polygon points="${px - 20},40 ${px + 20},20 ${px + 20},190 ${px - 20},210" style="fill:${COL.E};fill-opacity:0.12;stroke:${COL.E};stroke-width:1.5"/>`;
  for (let y = 50; y <= 190; y += 25) s += tx(px, y + 4, '+', { anchor: 'middle', it: false, fs: 12 });
  s += tx(px + 26, 32, 'σ', { c: 'E' });
  s += `<ellipse cx="${px - 60}" cy="115" rx="12" ry="30" style="fill:none;stroke:currentColor;stroke-dasharray:5 4"/><ellipse cx="${px + 60}" cy="115" rx="12" ry="30" style="fill:none;stroke:currentColor;stroke-dasharray:5 4"/>`;
  s += ln(px - 60, 85, px + 60, 85, { dash: '5 4' }) + ln(px - 60, 145, px + 60, 145, { dash: '5 4' });
  s += arr(px + 72, 115, px + 140, 115, 'E', 1.8) + tx(px + 144, 119, 'E', { c: 'E' }) + arr(px - 72, 115, px - 140, 115, 'E', 1.8) + tx(px - 144, 119, 'E', { c: 'E', anchor: 'end' });
  s += arr(px + 72, 98, px + 100, 98, 'g', 1) + tx(px + 104, 96, 'dA', { fs: 11 }) + arr(px - 72, 98, px - 100, 98, 'g', 1) + tx(px - 104, 96, 'dA', { fs: 11, anchor: 'end' }) + tx(px + 66, 162, 'A', { fs: 12 });
  s += tx(20, 236, '侧面 E ⊥ dA：通量 0', { it: false, fs: 11 }) + eq(170, 232, ['2EA = ', { n: 'σA', d: 'ε₀' }, ' ⇒ E = ', { n: 'σ', d: '2ε₀' }], { fs: 12 });
  return s;
});
def('gauss-conductor', '导体静电平衡（内部 E = 0）', 'E_{\\text{inside}}=0,\\; E_{\\text{surface}}=\\dfrac{\\sigma}{\\varepsilon_0}', () => {
  const cx = 120, cy = 130, R = 70; let s = circ(cx, cy, R, { w: 3 });
  for (let k = 0; k < 16; k++) { const [x, y] = pt(cx, cy, R - 10, k * 22.5); s += tx(x, y + 4, '+', { anchor: 'middle', it: false, fs: 11 }); }
  for (let k = 0; k < 8; k++) { const a = k * 45 + 10; s += arr(...pt(cx, cy, R + 2, a), ...pt(cx, cy, R + 38, a), 'E', 1.5); }
  s += circ(cx, cy, 36, { dash: '4 4', c: 'm' }) + tx(cx, cy + 4, 'E = 0', { anchor: 'middle' });
  s += tx(240, 50, '电荷分布在外表面', { it: false, fs: 11 }) + tx(240, 72, '表面处 E ⊥ 表面', { it: false, fs: 11 }) + tx(240, 94, '整个导体为等势体', { it: false, fs: 11 }) + eq(240, 140, ['E_{surface} = ', { n: 'σ', d: 'ε₀' }]) + tx(240, 190, '虚线高斯面内 Q_{enc} = 0', { fs: 11 });
  return s;
});

/* ======================= Capacitors ======================= */
def('capacitor-plate', '平行板电容器', 'C=\\dfrac{\\varepsilon_0A}{d},\\; U=\\dfrac{1}{2}CV^2', () => {
  let s = rect(80, 40, 200, 10, { fill: COL.E, op: 0.2, c: 'E' }) + rect(80, 170, 200, 10, { fill: COL.v, op: 0.2, c: 'v' }) + tx(290, 50, '+Q', {}) + tx(290, 180, '−Q', {});
  for (let x = 100; x <= 260; x += 32) s += arr(x, 54, x, 166, 'E', 1.4);
  s += arr(60, 110, 60, 52, 'g', 1) + arr(60, 110, 60, 168, 'g', 1) + tx(52, 114, 'd', { anchor: 'end' }) + tx(180, 34, 'A', { anchor: 'middle' }) + tx(112, 116, 'E', { c: 'E' });
  s += eq(30, 225, ['C = ', { n: 'ε₀A', d: 'd' }]) + eq(150, 225, ['E = ', { n: 'σ', d: 'ε₀' }]) + eq(260, 225, ['U = ', { n: '1', d: '2' }, 'CV^{2}'], { fs: 12 });
  return s;
});
def('capacitor-dielectric', '电容器充满电介质 κ', 'C=\\kappa\\dfrac{\\varepsilon_0A}{d},\\; E=\\dfrac{E_0}{\\kappa}', () => {
  let s = rect(70, 40, 200, 10, { fill: COL.E, op: 0.2, c: 'E' }) + rect(70, 170, 200, 10, { fill: COL.v, op: 0.2, c: 'v' }) + tx(278, 50, '+Q', {}) + tx(278, 180, '−Q', {});
  s += rect(70, 54, 200, 112, { fill: COL.B, op: 0.1, c: 'B', dash: '3 2' }) + tx(250, 112, 'κ', { c: 'B', fs: 16 });
  for (let x = 85; x <= 260; x += 25) { s += tx(x, 68, '−', { anchor: 'middle', it: false, fs: 12, c: 'B' }) + tx(x, 162, '+', { anchor: 'middle', it: false, fs: 12, c: 'B' }); }
  for (let x = 100; x <= 240; x += 46) s += arr(x, 76, x, 146, 'E', 1.4);
  s += eq(70, 112, ['E = ', { n: 'E₀', d: 'κ' }], { fs: 12, c: 'E' }) + tx(300, 100, '介质表面', { it: false, fs: 10, c: 'B' }) + tx(300, 114, '束缚电荷', { it: false, fs: 10, c: 'B' }) + tx(300, 128, '削弱板间场', { it: false, fs: 10, c: 'B' });
  s += eq(30, 222, ['C = κ', { n: 'ε₀A', d: 'd' }]) + tx(160, 214, '断开电源（Q 不变）：V ↓、U ↓', { it: false, fs: 10 }) + tx(160, 232, '接上电源（V 不变）：Q ↑、U ↑', { it: false, fs: 10 });
  return s;
});
def('capacitor-dielectric-partial', '部分填充电介质：并联型 / 串联型', 'C_{\\parallel}=\\dfrac{\\varepsilon_0A}{2d}(1+\\kappa),\\; C_{\\text{series}}=\\dfrac{2\\kappa\\varepsilon_0A}{(1+\\kappa)d}', () => {
  let s = tx(20, 24, '左右各半（等效并联）', { it: false, fs: 12 }) + ln(30, 50, 170, 50, { w: 3 }) + ln(30, 150, 170, 150, { w: 3 }) + rect(100, 52, 70, 96, { fill: COL.B, op: 0.15, c: 'B' }) + tx(135, 105, 'κ', { c: 'B', fs: 16, anchor: 'middle' });
  s += tx(65, 105, '真空', { it: false, fs: 11, anchor: 'middle' }) + tx(100, 170, 'A/2 | A/2', { fs: 11, anchor: 'middle' });
  s += tx(210, 24, '上下各半（等效串联）', { it: false, fs: 12 }) + ln(215, 50, 355, 50, { w: 3 }) + ln(215, 150, 355, 150, { w: 3 }) + rect(215, 100, 140, 48, { fill: COL.B, op: 0.15, c: 'B' }) + tx(285, 130, 'κ', { c: 'B', fs: 16, anchor: 'middle' }) + tx(285, 80, '真空', { it: false, fs: 11, anchor: 'middle' }) + tx(360, 80, 'd/2', { fs: 11 }) + tx(360, 128, 'd/2', { fs: 11 });
  s += eq(20, 220, ['C = ', { n: 'ε₀A', d: '2d' }, '(1 + κ)'], { fs: 12 }) + eq(210, 220, ['C = ', { n: '2κε₀A', d: '(1 + κ)d' }], { fs: 12 });
  return s;
});

/* ======================= DC circuits ======================= */
def('circuit-series', '串联电路', 'R_{eq}=R_1+R_2+R_3,\\; I=\\dfrac{\\varepsilon}{R_{eq}}', () => {
  const L = 60, R = 290, T = 50, B = 180; let s = battery(L, B, L, T, 'ε', true) + resistor(L, T, 175, T, 'R₁') + resistor(175, T, R, T, 'R₂') + resistor(R, T, R, B, 'R₃') + ln(R, B, L, B);
  s += arr(100, T + 14, 130, T + 14, 'I', 1.6) + tx(115, T + 30, 'I', { c: 'I', anchor: 'middle' }) + arr(R - 14, 100, R - 14, 130, 'I', 1.6) + arr(200, B - 12, 160, B - 12, 'I', 1.6);
  s += tx(320, 90, '各处电流', { it: false, fs: 11 }) + tx(320, 106, '相同', { it: false, fs: 11 }) + eq(40, 230, ['R_{eq} = R₁ + R₂ + R₃']) + eq(260, 230, ['I = ', { n: 'ε', d: 'R_{eq}' }]);
  return s;
});
def('circuit-parallel', '并联电路', '\\dfrac{1}{R_{eq}}=\\dfrac{1}{R_1}+\\dfrac{1}{R_2},\\; I=I_1+I_2', () => {
  const L = 60, T = 40, B = 170; let s = battery(L, B, L, T, 'ε', true) + ln(L, T, 270, T) + ln(L, B, 270, B) + resistor(170, T, 170, B, 'R₁') + resistor(270, T, 270, B, 'R₂') + node(170, T) + node(170, B);
  s += arr(95, T - 10, 135, T - 10, 'I', 1.6) + tx(115, T - 16, 'I', { c: 'I', anchor: 'middle' }) + arr(158, 70, 158, 94, 'I', 1.6) + tx(152, 88, 'I₁', { c: 'I', anchor: 'end', fs: 12 }) + arr(258, 70, 258, 94, 'I', 1.6) + tx(252, 88, 'I₂', { c: 'I', anchor: 'end', fs: 12 });
  s += tx(300, 100, '各支路', { it: false, fs: 11 }) + tx(300, 116, '电压 = ε', { it: false, fs: 11 }) + eq(30, 225, [{ n: '1', d: 'R_{eq}' }, ' = ', { n: '1', d: 'R₁' }, ' + ', { n: '1', d: 'R₂' }]) + eq(230, 225, ['I = I₁ + I₂']);
  return s;
});
def('circuit-kirchhoff', '双回路电路：基尔霍夫定律', '\\sum_{\\text{loop}}\\Delta V=0,\\; \\sum I_{\\text{in}}=\\sum I_{\\text{out}}', () => {
  const T = 40, B = 170; let s = battery(40, B, 40, T, 'ε₁', true) + resistor(40, T, 200, T, 'R₁') + resistor(200, T, 200, B, 'R₂', { dx: 12 }) + ln(200, B, 40, B) + resistor(200, T, 360, T, 'R₃') + battery(360, B, 360, T, '', true) + tx(386, 110, 'ε₂', {}) + ln(360, B, 200, B) + node(200, T) + node(200, B);
  s += arr(100, T + 14, 140, T + 14, 'I', 1.5) + tx(120, T + 30, 'I₁', { c: 'I', fs: 12, anchor: 'middle' }) + arr(300, T + 14, 260, T + 14, 'I', 1.5) + tx(280, T + 30, 'I₃', { c: 'I', fs: 12, anchor: 'middle' }) + arr(186, 74, 186, 100, 'I', 1.5) + tx(180, 92, 'I₂', { c: 'I', fs: 12, anchor: 'end' });
  s += arc(120, 112, 26, 150, -150, { c: 'm', w: 1, me: 'm' }) + arc(290, 112, 26, 150, -150, { c: 'm', w: 1, me: 'm' });
  s += tx(20, 205, '结点：I₂ = I₁ + I₃', { fs: 12 }) + tx(20, 228, '左回路：ε₁ − I₁R₁ − I₂R₂ = 0', { fs: 12 }) + tx(20, 251, '右回路：ε₂ − I₃R₃ − I₂R₂ = 0', { fs: 12 });
  return s;
});
def('rc-circuit', 'RC 电路（单刀双掷开关：a 充电 / b 放电）', '\\tau=RC', () => {
  const L = 60, T = 50, B = 190, sx = 150; let s = battery(L, B, L, T, 'ε', true) + ln(L, T, 120, T);
  // pole at (sx, T+30) can connect up to a (battery side) or down to b (discharge path)
  s += circ(120, T, 2.5, { fill: 'currentColor' }) + tx(116, T - 8, 'a', { it: false, fs: 12, anchor: 'end' });
  s += circ(sx, T + 30, 2.5, { fill: 'currentColor' }) + ln(sx, T + 30, 124, T + 4) + tx(sx + 6, T + 24, 'S', { fs: 12 });
  s += circ(120, T + 60, 2.5, { fill: 'currentColor' }) + tx(116, T + 64, 'b', { it: false, fs: 12, anchor: 'end' }) + ln(120, T + 60, 120, B) + node(120, B);
  s += ln(sx, T + 30, 200, T + 30) + resistor(200, T + 30, 300, T + 30, 'R') + capacitor(300, T + 30, 300, B, 'C') + ln(300, B, L, B);
  s += tx(20, 232, 'S 接 a：电源经 R 给 C 充电', { it: false, fs: 11 }) + tx(20, 250, 'S 接 b：C 经 R 放电（不经电源）', { it: false, fs: 11 }) + eq(300, 240, ['τ = RC']);
  return s;
});
def('rc-charging', 'RC 充电：q(t) 与 I(t)', 'q=C\\varepsilon\\left(1-e^{-\\dfrac{t}{RC}}\\right),\\; I=\\dfrac{\\varepsilon}{R}e^{-\\dfrac{t}{RC}}', () => {
  const g1 = graph(55, 30, 120, 120, { fns: [{ f: (t) => 1 - Math.exp(-t) }], t1: 5, ymin: 0, ymax: 1.15, yl: 'q', hmarks: [{ v: 1, label: 'Cε' }, { v: 0.632, label: '0.63Cε' }], vmarks: [{ t: 1, label: 'τ' }] });
  const g2 = graph(255, 30, 120, 120, { fns: [{ f: (t) => Math.exp(-t), c: 'I' }], t1: 5, ymin: 0, ymax: 1.15, yl: 'I', hmarks: [{ v: 1, label: 'ε/R' }, { v: 0.368, label: '0.37ε/R' }], vmarks: [{ t: 1, label: 'τ' }] });
  return g1.s + g2.s + eq(20, 205, ['q = Cε(1 − exp(−', { n: 't', d: 'RC' }, '))'], { fs: 12 }) + eq(225, 205, ['I = ', { n: 'ε', d: 'R' }, 'exp(−', { n: 't', d: 'RC' }, ')'], { fs: 12 }) + tx(20, 250, 't = 0：C 相当于导线；t → ∞：C 相当于断路', { it: false, fs: 11 });
});
def('rc-discharging', 'RC 放电：q(t) 与 |I(t)|', 'q=Q_0e^{-\\dfrac{t}{RC}},\\; |I|=\\dfrac{Q_0}{RC}e^{-\\dfrac{t}{RC}}', () => {
  const g1 = graph(55, 30, 120, 120, { fns: [{ f: (t) => Math.exp(-t) }], t1: 5, ymin: 0, ymax: 1.15, yl: 'q', hmarks: [{ v: 1, label: 'Q₀' }, { v: 0.368, label: '0.37Q₀' }], vmarks: [{ t: 1, label: 'τ' }] });
  const g2 = graph(255, 30, 120, 120, { fns: [{ f: (t) => Math.exp(-t), c: 'I' }], t1: 5, ymin: 0, ymax: 1.15, yl: '|I|', hmarks: [{ v: 1, label: 'Q₀/RC' }], vmarks: [{ t: 1, label: 'τ' }] });
  return g1.s + g2.s + eq(20, 205, ['q = Q₀ exp(−', { n: 't', d: 'RC' }, ')'], { fs: 12 }) + eq(225, 205, ['|I| = ', { n: 'Q₀', d: 'RC' }, 'exp(−', { n: 't', d: 'RC' }, ')'], { fs: 12 }) + tx(20, 250, '放电电流方向与充电电流方向相反', { it: false, fs: 11 });
});

/* ======================= Magnetism ======================= */
def('wire-field', '长直导线磁场（右手定则）', 'B=\\dfrac{\\mu_0I}{2\\pi r}', () => {
  const cx = 110, cy = 115; let s = dotB(cx, cy, 8, 'I') + tx(cx, cy + 24, 'I ⊙', { anchor: 'middle', fs: 11, c: 'I' });
  [40, 68, 95].forEach((r) => { s += circ(cx, cy, r, { c: 'B', w: 1.1 }); [45, 225].forEach((a) => { s += arr(...pt(cx, cy, r, a), ...pt(cx, cy, r, a + 9), 'B', 1.4); }); });
  s += tx(cx, cy - 100, 'B 逆时针（俯视，I 出纸面）', { c: 'B', fs: 10, anchor: 'middle', it: false }) + ln(cx, cy, cx + 68, cy, { c: 'm', dash: '3 3' }) + tx(cx + 50, cy - 4, 'r', { fs: 12 });
  // side view: current up the page → B into page on the right, out of page on the left
  const wx = 300; s += arr(wx, 215, wx, 35, 'I', 2.5) + tx(wx + 6, 46, 'I', { c: 'I' });
  [75, 125, 175].forEach((y) => { s += crossB(wx + 40, y) + dotB(wx - 40, y, 6); });
  s += tx(wx + 40, 205, '× 入', { anchor: 'middle', fs: 11, c: 'B', it: false }) + tx(wx - 40, 205, '⊙ 出', { anchor: 'middle', fs: 11, c: 'B', it: false });
  s += eq(30, 238, ['B = ', { n: 'μ₀I', d: '2πr' }]);
  return s;
});
def('loop-field', '圆形电流环中心磁场', 'B_{\\text{center}}=\\dfrac{\\mu_0I}{2R}', () => {
  const cx = 120, cy = 125, R = 80; let s = circ(cx, cy, R, { c: 'I', w: 2.5 });
  [60, 180, 300].forEach((a) => { s += arr(...pt(cx, cy, R, a), ...pt(cx, cy, R, a + 12), 'I', 2); });
  s += tx(...pt(cx, cy, R + 14, 50), 'I（逆时针）', { c: 'I', fs: 11 }) + dotB(cx, cy, 9) + tx(cx + 14, cy - 10, 'B ⊙（出纸面）', { c: 'B', fs: 11 }) + ln(cx, cy, ...pt(cx, cy, R, -40), { c: 'm', dash: '3 3' }) + tx(...pt(cx, cy, 44, -25), 'R', { fs: 12 });
  s += eq(250, 70, ['B = ', { n: 'μ₀I', d: '2R' }]) + tx(250, 118, '右手：四指沿 I 弯曲，', { it: false, fs: 11 }) + tx(250, 134, '拇指指向环中心 B', { it: false, fs: 11 }) + eq(250, 185, ['N 匝：B = ', { n: 'μ₀NI', d: '2R' }], { fs: 12 });
  return s;
});
def('solenoid-field', '螺线管纵截面 + 矩形安培环路', 'B=\\mu_0nI', () => {
  let s = ''; const y1 = 70, y2 = 170;
  for (let x = 60; x <= 300; x += 24) { s += dotB(x, y1, 7, 'I') + crossB(x, y2, 5.5, 'I'); }
  for (const y of [100, 120, 140]) s += arr(70, y, 290, y, 'B', 1.6);
  s += tx(296, 124, 'B', { c: 'B' }) + tx(316, 74, '⊙ I 出纸面', { fs: 10, c: 'I', it: false }) + tx(316, 174, '× I 入纸面', { fs: 10, c: 'I', it: false });
  s += rect(110, 110, 90, 100, { c: 'm', dash: '5 4', fill: 'none' }) + tx(155, 228, '矩形安培环路（内边长 ℓ）', { anchor: 'middle', fs: 11, it: false }) + tx(210, 205, '外部 B ≈ 0', { fs: 10, it: false });
  s += tx(20, 30, '∮B·dl = Bℓ = μ₀(nℓ)I', { fs: 12 }) + eq(270, 30, ['B = μ₀nI']) + tx(20, 250, 'n：单位长度匝数', { it: false, fs: 11 });
  return s;
});
def('ampere-wire', '安培环路：长直导线（同心圆环路）', '\\oint\\vec B\\cdot d\\vec l=\\mu_0I_{\\text{enc}}', () => {
  const cx = 120, cy = 125, r = 80; let s = dotB(cx, cy, 8, 'I') + tx(cx, cy + 26, 'I ⊙', { anchor: 'middle', c: 'I', fs: 12 }) + circ(cx, cy, r, { dash: '6 4' });
  const [x, y] = pt(cx, cy, r, 45); s += arrD(x, y, 135, 40, 'B', 1.8) + tx(x - 26, y - 34, 'B', { c: 'B' });
  const [x2, y2] = pt(cx, cy, r, 200); s += arrD(x2, y2, 290, 32, 'g', 1.2) + tx(x2 - 10, y2 + 30, 'dl', { fs: 12, anchor: 'end' });
  s += ln(cx, cy, ...pt(cx, cy, r, -40), { c: 'm' }) + tx(...pt(cx, cy, 44, -26), 'r', {});
  s += tx(240, 50, '∮B·dl = μ₀I_{enc}', { fs: 12 }) + tx(240, 90, 'B·2πr = μ₀I', { fs: 12 }) + eq(240, 140, ['B = ', { n: 'μ₀I', d: '2πr' }]) + tx(240, 195, 'B 沿环路切向（逆时针），', { it: false, fs: 10 }) + tx(240, 211, '大小处处相等', { it: false, fs: 10 });
  return s;
});
def('ampere-thick-wire', '安培环路：粗导线内部（均匀电流密度）', 'B=\\dfrac{\\mu_0Ir}{2\\pi R^2}\\;(r<R),\\quad B=\\dfrac{\\mu_0I}{2\\pi r}\\;(r>R)', () => {
  const cx = 105, cy = 120, R = 80, r = 45; let s = circ(cx, cy, R, { fill: COL.I, op: 0.12, c: 'I' }) + circ(cx, cy, r, { dash: '5 4' });
  for (const [dx, dy] of [[-52, -30], [52, -30], [0, 58], [-30, 40], [35, 38], [0, -62], [-64, 12], [64, 15], [0, 0]]) s += dotB(cx + dx, cy + dy, 4, 'I');
  s += ln(cx, cy, ...pt(cx, cy, R, 150), { c: 'm' }) + tx(...pt(cx, cy, R / 2, 165), 'R', { fs: 12 }) + ln(cx, cy, ...pt(cx, cy, r, -30), { c: 'm' }) + tx(...pt(cx, cy, 26, -8), 'r', { fs: 12 });
  const g = graph(245, 40, 120, 100, { fns: [{ f: (x) => (x < 0.4 ? x / 0.4 : 0.4 / x), c: 'B' }], t1: 1.4, ymin: 0, ymax: 1.15, xl: 'r', yl: 'B', vmarks: [{ t: 0.4, label: 'R' }] });
  s += g.s + eq(215, 195, ['I_{enc} = I', { n: 'r^{2}', d: 'R^{2}' }], { fs: 12 }) + eq(215, 238, ['B = ', { n: 'μ₀Ir', d: '2πR^{2}' }], { fs: 12 });
  return s;
});
def('particle-in-B', '带电粒子在匀强磁场中圆周运动（B 入纸面，+q）', 'r=\\dfrac{mv}{|q|B},\\; \\vec F=q\\vec v\\times\\vec B', () => {
  let s = ''; for (let x = 30; x <= 230; x += 40) for (let y = 30; y <= 230; y += 40) s += crossB(x, y, 4);
  const cx = 130, cy = 125, r = 80; s += circ(cx, cy, r, { c: 'm', dash: '5 4' });
  const px = cx, py = cy + r; s += circ(px, py, 7, { fill: COL.E, c: 'E', op: 0.6 }) + tx(px, py + 4, '+', { anchor: 'middle', it: false, fs: 11 });
  s += arr(px + 8, py, px + 60, py, 'v') + tx(px + 62, py + 14, 'v', { c: 'v' }) + arr(px, py - 8, px, py - 55, 'f') + tx(px + 6, py - 44, 'F', { c: 'f' });
  s += arc(cx, cy, r + 12, 300, 340, { c: 'm', w: 1.2, me: 'm' }) + tx(cx + r + 8, cy + 40, '逆时针', { fs: 10, it: false });
  s += eq(255, 60, ['r = ', { n: 'mv', d: '|q|B' }]) + eq(255, 120, ['T = ', { n: '2πm', d: '|q|B' }]) + tx(255, 170, '负电荷：顺时针', { it: false, fs: 11 }) + tx(255, 190, 'F ⊥ v，磁力不做功', { it: false, fs: 11 });
  return s;
});

/* ======================= Induction ======================= */
def('faraday-rod', '法拉第：导轨上滑动导体棒（B 入纸面，向右运动）', '\\varepsilon=BLv,\\; I=\\dfrac{BLv}{R},\\; F=\\dfrac{B^2L^2v}{R}', () => {
  const T = 50, Bt = 180, Lx = 50, rx = 250; let s = '';
  for (let x = 80; x <= 370; x += 36) for (let y = 74; y <= 160; y += 30) s += crossB(x, y, 4);
  s += ln(Lx, T, 380, T, { w: 2 }) + ln(Lx, Bt, 380, Bt, { w: 2 }) + resistor(Lx, T, Lx, Bt, 'R', { dx: -10, anchor: 'end' }) + rect(rx - 4, T - 8, 8, Bt - T + 16, { fill: 'currentColor' });
  s += arr(rx + 10, 115, rx + 60, 115, 'v') + tx(rx + 62, 111, 'v', { c: 'v' }) + arr(rx - 10, 100, rx - 56, 100, 'f') + tx(rx - 58, 94, 'F_{B}', { c: 'f', anchor: 'end', fs: 12 });
  s += arr(rx - 16, 160, rx - 16, 130, 'I', 2) + tx(rx - 20, 152, 'I', { c: 'I', anchor: 'end' }) + arr(170, T + 10, 130, T + 10, 'I', 1.6) + arr(130, Bt - 10, 170, Bt - 10, 'I', 1.6) + tx(150, Bt - 18, '逆时针', { c: 'I', fs: 10, it: false, anchor: 'middle' });
  s += arr(rx + 24, 140, rx + 24, T + 2, 'g', 1) + arr(rx + 24, 140, rx + 24, Bt - 2, 'g', 1) + tx(rx + 30, 150, 'L', { fs: 12 });
  s += tx(20, 24, '面积↑ ⇒ Φ（入）↑ ⇒ 感应 B 出纸面 ⇒ I 逆时针，F_{B} 向左阻碍运动', { it: false, fs: 10 }) + eq(30, 222, ['ε = BLv']) + eq(130, 222, ['I = ', { n: 'BLv', d: 'R' }]) + eq(240, 222, ['F = ', { n: 'B^{2}L^{2}v', d: 'R' }]);
  return s;
});
def('faraday-changing-B', '法拉第：均匀变化磁场中的固定线圈（B 出纸面且增大）', '\\varepsilon=-\\dfrac{d\\Phi_B}{dt}=-A\\dfrac{dB}{dt}', () => {
  let s = ''; for (let x = 30; x <= 230; x += 34) for (let y = 30; y <= 230; y += 34) s += dotB(x, y, 4.5);
  const cx = 130, cy = 130, r = 70; s += circ(cx, cy, r, { c: 'I', w: 3 });
  [90, 210, 330].forEach((a) => { s += arr(...pt(cx, cy, r, a), ...pt(cx, cy, r, a - 12), 'I', 2); });
  s += tx(20, 252, '线圈中感应电流 I 顺时针', { c: 'I', fs: 11, it: false }) + crossB(cx, cy, 9, 'm') + tx(cx + 14, cy + 4, 'B_{ind}', { c: 'm', fs: 11 });
  s += tx(250, 40, 'B ⊙ 增大 ⇒ Φ 增大', { fs: 11, it: false }) + tx(250, 58, '楞次定律：感应 B 入纸面', { fs: 11, it: false }) + tx(250, 76, '⇒ I 顺时针', { fs: 11, it: false });
  s += eq(250, 125, ['ε = −', { n: 'dΦ_{B}', d: 'dt' }]) + eq(250, 190, ['|ε| = πr^{2}', { n: 'dB', d: 'dt' }]);
  return s;
});
def('rl-circuit', 'RL 电路（开关闭合）与电流增长曲线', 'I=\\dfrac{\\varepsilon}{R}\\left(1-e^{-\\dfrac{t}{\\tau}}\\right),\\; \\tau=\\dfrac{L}{R}', () => {
  const L0 = 40, T = 40, B = 170; let s = battery(L0, B, L0, T, 'ε', true) + ln(L0, T, 60, T) + sw(60, T, 100, T, 'S') + resistor(100, T, 180, T, 'R') + inductor(180, T, 180, B, 'L') + ln(180, B, L0, B);
  s += arr(125, T + 14, 150, T + 14, 'I', 1.4);
  const g = graph(260, 30, 110, 110, { fns: [{ f: (t) => 1 - Math.exp(-t), c: 'I' }], t1: 5, ymin: 0, ymax: 1.15, yl: 'I', hmarks: [{ v: 1, label: 'ε/R' }, { v: 0.632, label: '0.63' }], vmarks: [{ t: 1, label: 'τ' }] });
  s += g.s + eq(20, 212, ['I = ', { n: 'ε', d: 'R' }, '(1 − exp(−', { n: 't', d: 'τ' }, '))'], { fs: 11 }) + eq(210, 212, ['τ = ', { n: 'L', d: 'R' }]) + eq(290, 212, ['ε_{L} = −L', { n: 'dI', d: 'dt' }], { fs: 11 }) + tx(20, 252, 't = 0：L 相当于断路；t → ∞：L 相当于导线', { it: false, fs: 11 });
  return s;
});
def('lc-circuit', 'LC 振荡电路与 q(t)、I(t)', '\\omega=\\dfrac{1}{\\sqrt{LC}},\\; q=Q_0\\cos\\omega t,\\; I=\\dfrac{dq}{dt}=-Q_0\\omega\\sin\\omega t', () => {
  const T = 50, B = 170; let s = capacitor(60, B, 60, T, 'C') + ln(60, T, 160, T) + inductor(160, T, 160, B, 'L') + ln(160, B, 60, B) + tx(50, T + 44, '+Q₀', { fs: 11, anchor: 'end' });
  const g1 = graph(240, 20, 130, 64, { fns: [{ f: (t) => Math.cos(2 * Math.PI * t) }], t1: 1.25, ymin: -1.15, ymax: 1.15, yl: 'q' });
  const g2 = graph(240, 118, 130, 64, { fns: [{ f: (t) => -Math.sin(2 * Math.PI * t), c: 'I' }], t1: 1.25, ymin: -1.15, ymax: 1.15, yl: 'I' });
  s += g1.s + g2.s + tx(236, g1.Y(1) + 4, 'Q₀', { anchor: 'end', fs: 10 }) + tx(236, g2.Y(1) + 4, 'Q₀ω', { anchor: 'end', fs: 10 });
  s += eq(20, 225, ['ω = ', { n: '1', d: '√(LC)' }]) + eq(130, 225, ['U = ', { n: 'q^{2}', d: '2C' }, ' + ', { n: '1', d: '2' }, 'LI^{2} = 常量'], { fs: 12 });
  return s;
});

/* ======================= Kinematics / forces enrichments ======================= */
def('motion-diagram', '运动图：相邻位移增大 ⇒ 加速', 'v=v_0+at,\\; \\Delta x=\\dfrac{v_0+v}{2}t', () => {
  let s = ln(25, 210, 375, 210, { w: 2 });
  const xs = [50, 110, 180, 260, 350];
  xs.forEach((x, i) => { s += circ(x, 190, 5, { fill: 'currentColor' }); s += ln(x, 200, x, 216, { c: 'm', dash: '3 3', w: 1 }) + tx(x, 232, `t${i}`, { anchor: 'middle', fs: 10, it: false }); });
  [24, 32, 40, 48, 56].forEach((l, i) => { s += arr(xs[i], 178, xs[i], 178 - l, 'v', 2); });
  s += tx(xs[4] + 6, 130, 'v', { c: 'v' }) + tx(30, 30, '相邻位移越来越大：v 向右且增大', { it: false, fs: 11 }) + tx(300, 30, 'a →', { c: 'a', fs: 12 });
  return s;
});
def('free-fall', '自由落体：v 向下增大，a = g 恒定', 'v=gt,\\; y=\\dfrac12gt^2', () => {
  let s = hatch(30, 230, 370) + ln(110, 35, 110, 215, { c: 'm', dash: '4 4' });
  [50, 105, 160].forEach((y, i) => { s += circ(110, y, 8, { fill: 'currentColor' }) + arr(110, y + 8, 110, y + 8 + [24, 38, 52][i], 'v', 1.8); });
  s += tx(120, 90, 'v', { c: 'v' }) + tx(120, 160, 'v', { c: 'v' }) + tx(120, 225, 'v', { c: 'v' });
  s += arr(300, 45, 300, 95, 'a', 1.8) + tx(306, 80, 'a = g', { c: 'a' });
  s += tx(30, 30, '同一加速度 g，速度每秒增加 g', { it: false, fs: 11 });
  return s;
});
def('projectile-range', '射程随发射角变化：45° 最大', 'R=\\dfrac{v_0^2\\sin 2\\theta}{g}', () => {
  const g = graph(55, 40, 185, 145, { fns: [{ f: (t) => Math.sin(Math.PI * t), c: 'v' }], t1: 1, ymin: 0, ymax: 1.15, xl: 'θ', yl: 'R', vmarks: [{ t: 0.5, label: '45°' }] });
  let s = g.s + tx(g.X(0), g.Y(0) + 18, '0°', { anchor: 'middle', fs: 10, it: false }) + tx(g.X(1), g.Y(0) + 18, '90°', { anchor: 'middle', fs: 10, it: false });
  s += tx(55, 28, '同一 v₀，忽略空气阻力', { it: false, fs: 11 }) + eq(265, 70, ['R = ', { n: 'v₀^{2} sin 2θ', d: 'g' }]) + tx(265, 122, 'θ 与 90° − θ 射程相同', { it: false, fs: 11 }) + tx(265, 164, '45°：sin 2θ = 1，R 最大', { it: false, fs: 11 });
  return s;
});
def('elevator', '电梯中的视重：N 随加速度方向变化', 'N=mg+ma\\;(a\\uparrow),\\quad N=mg-ma\\;(a\\downarrow)', () => {
  let s = '';
  const box = (x, up) => {
    let t = rect(x, 40, 170, 180) + ln(x + 25, 220, x + 145, 220, { w: 2 });
    const cx = x + 85, top = 120, bot = 150;
    t += mass(cx - 18, top, 36, 30, 'm') + ln(cx - 30, 154, cx + 30, 154, { w: 2 });
    t += arr(cx, top, cx, top - (up ? 62 : 34), 'f', 2) + arr(cx, bot, cx, bot + (up ? 34 : 62), 'f', 2);
    t += tx(cx + 6, top - (up ? 58 : 30), 'N', { c: 'f' }) + tx(cx + 6, bot + (up ? 30 : 58), 'mg', { c: 'f' });
    t += arr(cx + 48, up ? 80 : 45, cx + 48, up ? 45 : 80, 'a', 1.8) + tx(cx + 54, up ? 64 : 76, 'a', { c: 'a' });
    t += tx(x + 85, 28, up ? '加速上升：N > mg' : '加速下降：N < mg', { anchor: 'middle', it: false, fs: 11 });
    return t;
  };
  s += box(20, true) + box(210, false);
  s += eq(20, 248, ['N = mg + ma']) + eq(220, 248, ['N = mg − ma']);
  return s;
});
def('friction-graph', '静摩擦到滑动摩擦：f 随 F_app 的变化', 'f_s\\le\\mu_sN,\\;\\; f_k=\\mu_kN', () => {
  const g = graph(55, 35, 195, 150, { fns: [{ f: (t) => (t < 0.55 ? t : 0.45), c: 'f' }], t1: 1, ymin: 0, ymax: 1.1, xl: 'F_app', yl: 'f', vmarks: [{ t: 0.55, label: '临界' }] });
  let s = g.s + tx(g.X(0.22), g.Y(0.22) - 8, 'f_s = F_app', { c: 'f', fs: 11, anchor: 'middle' }) + tx(g.X(0.78), g.Y(0.45) - 8, 'f_k', { c: 'f', fs: 12, anchor: 'middle' });
  s += eq(270, 80, ['f_s ≤ μ_sN']) + eq(270, 120, ['f_k = μ_kN']) + tx(270, 170, '滑动后 f 近似恒定', { it: false, fs: 11 }) + tx(55, 24, '先静摩擦，后滑动摩擦', { it: false, fs: 11 });
  return s;
});
def('flat-curve', '水平弯道：静摩擦提供向心力', 'f_s=\\dfrac{mv^2}{r}\\le\\mu_smg,\\;\\; v_{\\max}=\\sqrt{\\mu_srg}', () => {
  const cx = 145, cy = 130, r = 80; let s = circ(cx, cy, r, { c: 'm', dash: '5 4' }) + circ(cx, cy, 2, { fill: 'currentColor' });
  const carY = cy - r; s += rect(cx - 16, carY - 10, 32, 18) + tx(cx, carY + 4, 'm', { anchor: 'middle', fs: 11 });
  s += arr(cx + 18, carY, cx + 78, carY, 'v') + tx(cx + 80, carY - 6, 'v', { c: 'v' });
  s += arr(cx, carY + 10, cx, carY + 58, 'f') + tx(cx + 6, carY + 50, 'f_s', { c: 'f' });
  s += tx(20, 26, '俯视：弯道半径 r', { it: false, fs: 11 }) + eq(255, 70, ['f_s = ', { n: 'mv^{2}', d: 'r' }]) + eq(255, 130, ['v_{max} = ', { sqrt: 'μ_s rg' }], { fs: 12 });
  return s;
});
def('circular-vectors', '圆周运动：v 切向、a_c 指向圆心', 'a_c=\\dfrac{v^2}{r},\\;\\; v=\\dfrac{2\\pi r}{T}', () => {
  const cx = 140, cy = 130, r = 75; let s = circ(cx, cy, r, { c: 'm', dash: '5 4' }) + circ(cx, cy, 2, { fill: 'currentColor' });
  [0, 90, 180, 270].forEach((a) => {
    const p = pt(cx, cy, r, a);
    s += circ(p[0], p[1], 4, { fill: 'currentColor' });
    s += arrD(p[0], p[1], a + 90, 34, 'v', 1.8);
    s += arrD(p[0], p[1], a + 180, 28, 'a', 1.6);
  });
  s += tx(108, 48, 'v', { c: 'v' }) + tx(146, 84, 'a_c', { c: 'a' });
  s += eq(250, 80, ['a_c = ', { n: 'v^{2}', d: 'r' }]) + eq(250, 140, ['v = ', { n: '2πr', d: 'T' }]) + tx(250, 196, 'v 与 a_c 始终垂直', { it: false, fs: 11 });
  return s;
});
def('kepler-ellipse', '开普勒第一、第二定律：椭圆轨道与面积速率', '\\dfrac{dA}{dt}=\\dfrac{L}{2m}=\\text{常量}', () => {
  const cx = 165, cy = 130, rx = 105, ry = 58, sx = cx - 55; let s = `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" style="fill:none;stroke:currentColor;stroke-width:1.6"/>`;
  const P = (deg) => [cx + rx * Math.cos(rad(deg)), cy - ry * Math.sin(rad(deg))];
  const a1 = P(55), a2 = P(70), b1 = P(245), b2 = P(260);
  s += `<polygon points="${sx},${cy} ${r1(a1[0])},${r1(a1[1])} ${r1(a2[0])},${r1(a2[1])}" style="fill:${COL.f};fill-opacity:0.15;stroke:none"/>`;
  s += `<polygon points="${sx},${cy} ${r1(b1[0])},${r1(b1[1])} ${r1(b2[0])},${r1(b2[1])}" style="fill:${COL.f};fill-opacity:0.15;stroke:none"/>`;
  s += ln(sx, cy, a1[0], a1[1], { c: 'm', dash: '3 3', w: 1 }) + ln(sx, cy, b1[0], b1[1], { c: 'm', dash: '3 3', w: 1 });
  s += circ(sx, cy, 8, { fill: COL.f, c: 'f', op: 0.5 }) + tx(sx, cy + 4, 'S', { anchor: 'middle', fs: 10, it: false });
  s += circ(a1[0], a1[1], 5, { fill: 'currentColor' }) + circ(b1[0], b1[1], 5, { fill: 'currentColor' });
  s += tx(a1[0] + 6, a1[1] - 6, 'P₁', { fs: 11 }) + tx(b1[0] - 6, b1[1] + 12, 'P₂', { fs: 11, anchor: 'end' });
  s += tx(20, 26, '相同 Δt 扫过相同面积', { it: false, fs: 11 }) + eq(250, 80, ['dA/dt = ', { n: 'L', d: '2m' }], { fs: 12 }) + tx(250, 150, '近日点速度大，远日点速度小', { it: false, fs: 11 });
  return s;
});
def('gravitational-potential', '引力势能与场强随距离的变化', 'U=-\\dfrac{GMm}{r},\\;\\; g=\\dfrac{GM}{r^2}', () => {
  const g1 = graph(35, 35, 150, 135, { fns: [{ f: (t) => -1 / (t + 1), c: 'f' }], t1: 1, ymin: -1.15, ymax: 0.25, xl: 'r', yl: 'U' });
  const g2 = graph(235, 35, 125, 135, { fns: [{ f: (t) => 1.1 / (1 + 2.2 * t) ** 2, c: 'B' }], t1: 1, ymin: 0, ymax: 1.2, xl: 'r', yl: 'g' });
  let s = g1.s + g2.s + tx(35, 24, 'U < 0，r → ∞ 时 U → 0', { it: false, fs: 10 }) + tx(235, 24, 'g ∝ 1/r²', { it: false, fs: 10 });
  s += eq(20, 215, ['U = −', { n: 'GMm', d: 'r' }]) + eq(215, 215, ['g = ', { n: 'GM', d: 'r^{2}' }]);
  return s;
});

/* ======================= Energy / momentum / rotation / SHM enrichments ======================= */
def('energy-bars', '能量条形图：U 与 K 的转换', 'E=K+U=\\text{常量}', () => {
  let s = ln(35, 210, 365, 210, { w: 1.6 }) + ln(35, 40, 35, 210, { w: 1.6 });
  const groups = [{ x: 55, u: 120, k: 0, label: '初' }, { x: 155, u: 60, k: 60, label: '中' }, { x: 255, u: 0, k: 120, label: '末' }];
  groups.forEach((g) => { s += bar(g.x, 210, 24, g.u, 'f', 0.28) + bar(g.x + 30, 210, 24, g.k, 'v', 0.25) + tx(g.x + 27, 228, g.label, { anchor: 'middle', fs: 11, it: false }); });
  s += tx(50, 60, 'U', { c: 'f', fs: 11 }) + tx(84, 60, 'K', { c: 'v', fs: 11 });
  s += ln(45, 90, 340, 90, { c: 'm', dash: '5 4', w: 1 }) + tx(345, 94, 'E', { fs: 11 });
  s += tx(40, 26, '下落过程：U → K，总能量不变', { it: false, fs: 11 });
  return s;
});
def('work-incline', '斜面上各力做功：W_g、W_f、W_N', 'W_{\\rm net}=W_g+W_f+W_N=\\Delta K', () => {
  const th = 25, I = incline(th, 25, 190, 300); const b = I.block(110, 34, 'm'); const C = b.C; let s = I.s + b.svg;
  const mg = 64; s += arr(C[0], C[1], C[0], C[1] + mg, 'f') + tx(C[0] + 5, C[1] + mg - 6, 'mg', { c: 'f' });
  const Ne = add(C, I.n, 48); s += arr(C[0], C[1], Ne[0], Ne[1], 'f') + tx(Ne[0] + 5, Ne[1], 'N', { c: 'f' });
  const fe = add(C, I.u, -34); s += arr(C[0], C[1], fe[0], fe[1], 'f') + tx(fe[0] - 4, fe[1] + 12, 'f_k', { c: 'f', anchor: 'end' });
  const d0 = add(C, I.u, -18), d1 = add(d0, I.u, 58); s += arr(d0[0], d0[1], d1[0], d1[1], 'a', 1.6) + tx(d1[0] + 4, d1[1] + 4, 'd', { c: 'a' });
  s += tx(20, 26, '下滑 d：重力做正功，摩擦做负功', { it: false, fs: 11 });
  s += eq(20, 218, ['W_g = mgd sin θ']) + eq(20, 242, ['W_f = −f_k d，W_N = 0']) + eq(245, 218, ['ΔK = W_{net}']);
  return s;
});
def('work-angle', '功的符号：F 与 d 的夹角', 'W=Fd\\cos\\theta', () => {
  let s = '';
  const panels = [{ x: 75, deg: 0, lab: '同向', sign: 'W > 0' }, { x: 200, deg: 90, lab: '垂直', sign: 'W = 0' }, { x: 325, deg: 180, lab: '反向', sign: 'W < 0' }];
  panels.forEach((p) => {
    s += tx(p.x, 28, p.lab, { anchor: 'middle', it: false, fs: 11 });
    s += ln(p.x - 42, 175, p.x + 42, 175, { w: 1.6 }) + rect(p.x - 14, 140, 28, 28, { fill: 'var(--canvas-plot, transparent)' }) + tx(p.x, 158, 'm', { anchor: 'middle', fs: 10 });
    s += arr(p.x + 16, 155, p.x + 54, 155, 'a', 1.6) + tx(p.x + 40, 170, 'd', { c: 'a', anchor: 'middle', fs: 10 });
    s += arrD(p.x, 155, p.deg, 48, 'f', 1.8) + tx(p.x + (p.deg === 180 ? -34 : 34), p.deg === 90 ? 118 : 138, 'F', { c: 'f', fs: 12 });
    s += tx(p.x, 215, p.sign, { anchor: 'middle', fs: 11, it: false });
  });
  s += eq(130, 242, ['W = Fd cos θ']);
  return s;
});
def('power-graph', '恒定作用力：P = Fv', 'P=\\dfrac{dW}{dt}=Fv', () => {
  const g = graph(55, 35, 190, 145, { fns: [{ f: (t) => t, c: 'f' }], t1: 1, ymin: 0, ymax: 1.1, xl: 'v', yl: 'P' });
  let s = g.s + tx(55, 24, '恒力：P ∝ v', { it: false, fs: 11 }) + eq(265, 80, ['P = Fv']) + eq(265, 130, ['P = ', { n: 'dW', d: 'dt' }]) + tx(265, 202, '瞬时功率', { it: false, fs: 11 });
  return s;
});
def('momentum-bars', '碰撞前后动量条形图（等质量弹性碰撞）', 'p_{1i}+p_{2i}=p_{1f}+p_{2f}', () => {
  let s = ln(35, 150, 365, 150, { w: 1.6 });
  s += tx(80, 30, '碰前', { anchor: 'middle', it: false, fs: 11 }) + tx(260, 30, '碰后', { anchor: 'middle', it: false, fs: 11 });
  s += bar(60, 150, 28, 80, 'v', 0.25) + tx(74, 62, 'p₁', { c: 'v', anchor: 'middle', fs: 11 });
  s += tx(125, 145, 'p₂ = 0', { fs: 10, anchor: 'middle', it: false });
  s += bar(240, 150, 28, 80, 'v', 0.25) + tx(254, 62, 'p₂', { c: 'v', anchor: 'middle', fs: 11 });
  s += tx(300, 145, 'p₁ = 0', { fs: 10, anchor: 'middle', it: false });
  s += ln(35, 70, 365, 70, { c: 'm', dash: '5 4', w: 1 }) + tx(370, 74, 'p', { fs: 10 });
  s += eq(40, 220, ['p_{1i}+p_{2i}=p_{1f}+p_{2f}']);
  return s;
});
def('explosion', '爆炸 / 反冲：总动量为零', '0=m_1v_1+m_2v_2', () => {
  let s = tx(20, 28, '碰前（静止）', { it: false, fs: 11 }) + mass(165, 60, 55, 32, 'm₁+m₂');
  s += tx(20, 140, '碰后', { it: false, fs: 11 }) + mass(80, 170, 50, 30, 'm₁') + mass(270, 170, 50, 30, 'm₂');
  s += arr(80, 185, 40, 185, 'v') + tx(38, 178, 'v₁', { c: 'v', anchor: 'end' }) + arr(320, 185, 360, 185, 'v') + tx(362, 178, 'v₂', { c: 'v' });
  s += eq(40, 235, ['0 = m₁v₁ + m₂v₂']);
  return s;
});
def('seesaw', '杠杆平衡：力矩相等', 'm_1gd_1=m_2gd_2', () => {
  let s = hatch(20, 220, 380);
  s += `<polygon points="200,200 180,230 220,230" style="fill:none;stroke:currentColor;stroke-width:1.6"/>`;
  s += ln(60, 170, 340, 170, { w: 5 }) + circ(200, 170, 4, { fill: 'currentColor' });
  s += mass(80, 140, 40, 30, 'm₁') + mass(280, 140, 40, 30, 'm₂');
  s += arr(100, 170, 100, 220, 'f') + tx(106, 210, 'm₁g', { c: 'f' }) + arr(300, 170, 300, 220, 'f') + tx(306, 210, 'm₂g', { c: 'f' });
  s += arr(100, 195, 195, 195, 'm', 1) + tx(148, 190, 'd₁', { anchor: 'middle', fs: 11 }) + arr(205, 195, 300, 195, 'm', 1) + tx(253, 190, 'd₂', { anchor: 'middle', fs: 11 });
  s += eq(40, 248, ['m₁gd₁ = m₂gd₂']);
  return s;
});
def('moment-of-inertia', '常见刚体的转动惯量（绕中心轴）', 'I_{\\text{hoop}}=MR^2,\\; I_{\\text{disk}}=\\dfrac12MR^2,\\; I_{\\text{sphere}}=\\dfrac25MR^2' + CAP_DESCENT, () => {
  let s = tx(20, 24, '绕中心轴 / 质心轴', { it: false, fs: 11 });
  s += circ(105, 78, 26, { w: 2.4 }) + tx(105, 124, 'I = MR²', { anchor: 'middle', fs: 11 });
  s += circ(295, 78, 26, { fill: 'currentColor', op: 0.08, w: 2.2 }) + tx(295, 124, 'I = ½MR²', { anchor: 'middle', fs: 11 });
  s += circ(105, 185, 26, { w: 2.2 }) + arc(105, 185, 26, 0, 180, { c: 'm', w: 1 }) + tx(105, 231, 'I = ⅖MR²', { anchor: 'middle', fs: 11 });
  s += ln(255, 185, 335, 185, { w: 4 }) + circ(295, 185, 3, { fill: 'currentColor' }) + eq(262, 226, ['I = ', { n: '1', d: '12' }, 'ML²'], { fs: 11 });
  s += tx(20, 250, '圆环 / 圆盘 / 实心球 / 细杆', { it: false, fs: 10 });
  return s;
});
def('rolling-race', '纯滚动比赛：球 > 盘 > 环', 'a=\\dfrac{g\\sin\\theta}{1+\\dfrac{I}{MR^2}}' + CAP_DESCENT, () => {
  const th = 22, I = incline(th, 20, 215, 340); let s = I.s;
  const R = 16;
  const items = [{ d: 55, label: '环' }, { d: 125, label: '盘' }, { d: 200, label: '球' }];
  items.forEach((it) => {
    const P0 = add([20, 215], I.u, it.d), C = add(P0, I.n, R);
    s += circ(C[0], C[1], R) + tx(C[0], C[1] + 5, it.label, { anchor: 'middle', fs: 11 });
  });
  s += tx(20, 26, '同一高度释放，忽略滑动', { it: false, fs: 11 }) + eq(230, 60, ['a = ', { n: 'g sin θ', dPrefix: '1 + ', d: { n: 'I', d: 'MR²' } }], { fs: 11 }) + tx(230, 140, '球先到；环最后', { it: false, fs: 11 });
  return s;
});
def('angular-momentum-skater', '角动量守恒：收臂减小 I、增大 ω', 'L=I\\omega,\\;\\; I_1\\omega_1=I_2\\omega_2', () => {
  let s = tx(20, 26, '收臂：I 减小，ω 增大，L 不变', { it: false, fs: 11 });
  const skater = (cx, arm) => circ(cx, 120, 14, { fill: 'currentColor', op: 0.12 }) + ln(cx, 120, cx - arm, 112, { w: 4 }) + ln(cx, 120, cx + arm, 112, { w: 4 }) + ln(cx, 120, cx - 8, 162, { w: 4 }) + ln(cx, 120, cx + 8, 162, { w: 4 });
  s += skater(105, 52) + tx(105, 195, 'I₁ 大，ω₁ 小', { anchor: 'middle', it: false, fs: 11 }) + arc(105, 120, 66, 120, 60, { c: 'a', w: 1.4, me: 'a' }) + tx(105, 72, 'ω₁', { c: 'a', anchor: 'middle', fs: 11 });
  s += skater(295, 22) + tx(295, 195, 'I₂ 小，ω₂ 大', { anchor: 'middle', it: false, fs: 11 }) + arc(295, 120, 45, 120, 60, { c: 'a', w: 1.4, me: 'a' }) + tx(295, 92, 'ω₂', { c: 'a', anchor: 'middle', fs: 11 });
  s += eq(100, 228, ['I₁ω₁ = I₂ω₂']);
  return s;
});
def('orbit-energy', '圆轨道能量：E < 0 为束缚轨道', 'E=-\\dfrac{GMm}{2r}', () => {
  const g = graph(55, 35, 180, 140, { fns: [{ f: (t) => -1.0 / (1 + 1.5 * t), c: 'v' }], t1: 1, ymin: -1.2, ymax: 0.2, xl: 'r', yl: 'E', hmarks: [{ v: 0, label: 'E = 0' }] });
  let s = g.s + eq(255, 70, ['E = −', { n: 'GMm', d: '2r' }]) + tx(255, 125, 'E < 0：束缚轨道', { it: false, fs: 11 }) + tx(255, 150, 'E = 0：刚好逃逸', { it: false, fs: 11 }) + tx(255, 175, 'E > 0：双曲线轨道', { it: false, fs: 11 });
  return s;
});
def('shm-energy', 'SHM 能量：K 与 U 互相转换', 'E=K+U=\\dfrac12kA^2', () => {
  const g = graph(30, 40, 155, 130, { fns: [{ f: (t) => (2 * t - 1) ** 2, c: 'f' }], t1: 1, ymin: 0, ymax: 1.15, xl: 'x', yl: 'U', hmarks: [{ v: 0.9, label: 'E' }], vmarks: [{ t: 0.1, label: '−A' }, { t: 0.9, label: 'A' }] });
  let s = g.s + tx(30, 24, 'x = 0：K 最大；x = ±A：U 最大', { it: false, fs: 10 });
  s += ln(210, 200, 380, 200, { w: 1.4 });
  s += bar(225, 200, 24, 110, 'v', 0.25) + tx(237, 208, 'K', { c: 'v', anchor: 'middle', fs: 10 }) + tx(237, 228, 'x=0', { anchor: 'middle', fs: 10, it: false });
  s += bar(330, 200, 24, 110, 'f', 0.28) + tx(342, 208, 'U', { c: 'f', anchor: 'middle', fs: 10 }) + tx(342, 228, 'x=±A', { anchor: 'middle', fs: 10, it: false });
  s += eq(40, 240, ['E = ', { n: '1', d: '2' }, 'kA²']);
  return s;
});
def('shm-phase', 'SHM 与匀速圆周运动的投影', 'x=A\\cos(\\omega t+\\phi)', () => {
  const cx = 140, cy = 130, r = 75; let s = circ(cx, cy, r, { c: 'm', dash: '5 4' }) + ln(cx, cy, cx + r + 35, cy, { w: 1.4 }) + ln(cx, cy, cx, cy - r - 10, { w: 1.4 });
  const [px, py] = pt(cx, cy, r, 60); s += ln(cx, cy, px, py, { c: 'm', w: 1.2 }) + arc(cx, cy, 28, 0, 60, { c: 'm', w: 1 }) + tx(cx + 32, cy - 10, 'ωt', { fs: 11 });
  s += circ(px, py, 5, { fill: 'currentColor' }) + ln(px, py, px, cy, { c: 'm', dash: '3 3', w: 1 }) + circ(px, cy, 4, { fill: COL.v, c: 'v' }) + tx(px + 6, cy + 16, 'x', { c: 'v', fs: 12 });
  s += tx(120, 112, 'A', { fs: 11 }) + tx(20, 24, '参考圆：半径 A，角速度 ω', { it: false, fs: 11 }) + eq(250, 90, ['x = A cos(ωt + φ)']) + tx(250, 145, '投影位置 x 随时间按余弦变化', { it: false, fs: 11 });
  return s;
});
def('pendulum-period', '单摆周期：T ∝ √L', 'T=2\\pi\\sqrt{\\dfrac{L}{g}}', () => {
  const g = graph(55, 35, 190, 145, { fns: [{ f: (t) => Math.sqrt(t), c: 'a' }], t1: 1, ymin: 0, ymax: 1.15, xl: 'L', yl: 'T' });
  let s = g.s + tx(55, 24, '小角近似', { it: false, fs: 11 }) + eq(265, 70, ['T = 2π', { sqrt: { n: 'L', d: 'g' } }]) + tx(265, 135, '与质量、振幅无关（小角）', { it: false, fs: 11 }) + tx(265, 170, 'T ∝ √L', { it: false, fs: 11 });
  return s;
});
def('physical-pendulum-fbd', '复摆：重力对转轴的力矩', 'T=2\\pi\\sqrt{\\dfrac{I}{mgd}},\\;\\; \\tau=-mgd\\sin\\theta', () => {
  const px = 160, py = 40, L = 180, th = 20; const ex = px + L * Math.sin(rad(th)), ey = py + L * Math.cos(rad(th));
  let s = hatch(px - 40, py, px + 40) + `<polygon points="${px},${py} ${px - 10},${py + 18} ${px + 10},${py + 18}" style="fill:none;stroke:currentColor;stroke-width:1.5"/>`;
  s += ln(px, py, ex, ey, { w: 5 }) + circ(px, py, 3, { fill: 'currentColor' }) + ln(px, py, px, py + L, { c: 'm', dash: '4 4', w: 1 }) + arc(px, py, 45, 90 - th, 90, { c: 'm', w: 1 }) + tx(px + 14, py + 52, 'θ', { fs: 11 });
  const cm = [(px + ex) / 2, (py + ey) / 2]; s += circ(cm[0], cm[1], 4, { fill: 'currentColor' }) + arr(cm[0], cm[1], cm[0], cm[1] + 52, 'f') + tx(cm[0] + 5, cm[1] + 48, 'mg', { c: 'f' });
  s += arr(px, py, px, py - 34, 'f') + tx(px + 6, py - 28, 'F_p', { c: 'f', fs: 11 }) + tx(20, 24, '质心距转轴 d；τ 使 θ 减小', { it: false, fs: 11 }) + eq(20, 225, ['τ = −mgd sin θ']) + eq(190, 225, ['T = 2π', { sqrt: { n: 'I', d: 'mgd' } }], { fs: 12 });
  return s;
});

/* ======================= E&M enrichments ======================= */
def('coulomb-force', '库仑力：异号相吸、同号相斥', 'F=k\\dfrac{|q_1q_2|}{r^2}', () => {
  let s = tx(20, 26, '异号电荷：力指向彼此', { it: false, fs: 11 });
  s += circ(85, 115, 14, { c: 'E', w: 1.8 }) + tx(85, 120, '+', { anchor: 'middle', it: false, fs: 14, c: 'E' });
  s += circ(185, 115, 14, { c: 'B', w: 1.8 }) + tx(185, 120, '−', { anchor: 'middle', it: false, fs: 14, c: 'B' });
  s += arr(99, 115, 139, 115, 'f') + tx(119, 105, 'F₁₂', { c: 'f', anchor: 'middle', fs: 11 }) + arr(171, 115, 131, 115, 'f') + tx(151, 135, 'F₂₁', { c: 'f', anchor: 'middle', fs: 11 });
  s += tx(85, 155, 'q₁', { anchor: 'middle', fs: 12 }) + tx(185, 155, 'q₂', { anchor: 'middle', fs: 12 });
  s += tx(20, 195, '同号：方向相反（排斥）', { it: false, fs: 11 });
  const g = graph(250, 40, 110, 120, { fns: [{ f: (t) => 1.1 / (1 + 2.5 * t) ** 2, c: 'f' }], t1: 1, ymin: 0, ymax: 1.2, xl: 'r', yl: 'F' });
  s += g.s + eq(20, 235, ['F = k', { n: '|q₁q₂|', d: 'r²' }]);
  return s;
});
def('field-vectors', '点电荷电场：E 随距离按 1/r² 减小', 'E=k\\dfrac{q}{r^2}', () => {
  const cx = 145, cy = 130; let s = circ(cx, cy, 8, { fill: COL.E, c: 'E', op: 0.55 }) + tx(cx, cy + 4, '+', { anchor: 'middle', it: false, fs: 12, c: 'E' });
  s += circ(cx, cy, 52, { c: 'm', dash: '4 4', w: 1 }) + circ(cx, cy, 100, { c: 'm', dash: '4 4', w: 1 });
  [0, 90, 180, 270].forEach((a) => {
    const p1 = pt(cx, cy, 52, a), p2 = pt(cx, cy, 100, a);
    s += arr(p1[0], p1[1], ...pt(cx, cy, 52, a).map((v, i) => i === 0 ? v + 34 * Math.cos(rad(a)) : v - 34 * Math.sin(rad(a))), 'E', 2);
    s += arr(p2[0], p2[1], ...pt(cx, cy, 100, a).map((v, i) => i === 0 ? v + 18 * Math.cos(rad(a)) : v - 18 * Math.sin(rad(a))), 'E', 1.8);
  });
  s += tx(250, 70, 'r 处箭头长度 ∝ 1/r²', { it: false, fs: 11 }) + eq(270, 115, ['E = k', { n: 'q', d: 'r²' }]) + tx(250, 175, '方向沿径向（正电荷向外）', { it: false, fs: 11 });
  return s;
});
def('field-superposition', '电场叠加：先求各场强，再矢量相加', '\\vec E=\\sum_i k\\dfrac{q_i}{r_i^2}\\hat r_i', () => {
  let s = ln(100, 180, 200, 80, { c: 'm', dash: '3 3', w: 1 }) + ln(300, 180, 200, 80, { c: 'm', dash: '3 3', w: 1 });
  s += circ(100, 180, 14, { c: 'E', w: 1.8 }) + tx(100, 185, '+', { anchor: 'middle', it: false, fs: 14, c: 'E' }) + tx(80, 205, 'q₁', { fs: 12 });
  s += circ(300, 180, 14, { c: 'B', w: 1.8 }) + tx(300, 185, '−', { anchor: 'middle', it: false, fs: 14, c: 'B' }) + tx(310, 205, 'q₂', { fs: 12 });
  s += circ(200, 80, 4, { fill: 'currentColor' }) + tx(206, 72, 'P', { fs: 12 });
  s += arr(200, 80, 242, 38, 'E', 1.8) + tx(246, 44, 'E₁', { c: 'E', fs: 11 });
  s += arr(200, 80, 242, 122, 'E', 1.8) + tx(246, 128, 'E₂', { c: 'E', fs: 11 });
  s += arr(200, 80, 270, 80, 'f', 2.2) + tx(274, 74, 'E', { c: 'f', fs: 12 });
  s += tx(20, 26, 'P 点的合场强 = 各点电荷场强的矢量和', { it: false, fs: 11 }) + eq(20, 235, ['E = k', { n: 'q₁', d: 'r₁²' }, ' + k', { n: 'q₂', d: 'r₂²' }], { fs: 12 });
  return s;
});
def('line-charge', '无限长线电荷：圆柱形高斯面', 'E=\\dfrac{\\lambda}{2\\pi\\varepsilon_0 r}', () => {
  let s = ln(130, 40, 130, 220, { w: 3, c: 'I' }) + tx(136, 48, 'λ', { c: 'I', fs: 12 });
  for (let y = 55; y <= 205; y += 30) s += tx(123, y, '+', { c: 'I', it: false, fs: 11, anchor: 'end' });
  s += `<ellipse cx="130" cy="60" rx="55" ry="14" style="fill:none;stroke:${COL.m};stroke-dasharray:5 4;stroke-width:1.2"/>`;
  s += `<ellipse cx="130" cy="200" rx="55" ry="14" style="fill:none;stroke:${COL.m};stroke-dasharray:5 4;stroke-width:1.2"/>`;
  [80, 130, 180].forEach((y) => { s += arr(130, y, 78, y, 'E', 1.6) + arr(130, y, 182, y, 'E', 1.6); });
  s += tx(180, 90, 'E', { c: 'E', fs: 11 }) + tx(20, 26, '取同轴圆柱面，侧面通量 = E·2πrℓ', { it: false, fs: 11 }) + eq(240, 70, ['E = ', { n: 'λ', d: '2πε₀r' }]) + tx(240, 135, '方向沿径向', { it: false, fs: 11 });
  return s;
});
def('flux-angle', '电通量：只有法向分量贡献 Φ_E', '\\Phi_E=EA\\cos\\theta', () => {
  let s = `<polygon points="95,175 225,150 270,95 140,120" style="fill:${COL.B};fill-opacity:0.10;stroke:${COL.B};stroke-width:1.6"/>`;
  s += ln(182, 135, 210, 70, { c: 'f', w: 2 }) + tx(214, 64, 'n', { c: 'f', fs: 12 });
  s += arr(85, 65, 125, 85, 'E', 1.8) + arr(120, 45, 160, 65, 'E', 1.8) + arr(155, 25, 195, 45, 'E', 1.8);
  s += tx(92, 44, 'E', { c: 'E', fs: 12 }) + tx(20, 26, '面积矢量 A 与 E 的夹角 θ', { it: false, fs: 11 });
  s += eq(245, 80, ['Φ_{E} = EA cos θ']) + tx(245, 135, 'θ = 0：Φ 最大', { it: false, fs: 11 }) + tx(245, 158, 'θ = 90°：Φ = 0', { it: false, fs: 11 });
  return s;
});
def('gauss-shell', '导体球壳：腔内电荷与表面感应电荷', '\\oint\\vec E\\cdot d\\vec A=\\dfrac{Q_{\\rm enc}}{\\varepsilon_0}', () => {
  const cx = 150, cy = 130; let s = circ(cx, cy, 95, { w: 2.2 }) + circ(cx, cy, 55, { w: 2.2 });
  s += circ(cx, cy, 6, { fill: COL.E, c: 'E', op: 0.55 }) + tx(cx, cy + 4, '+q', { anchor: 'middle', fs: 10, c: 'E', it: false });
  for (const a of [30, 90, 150, 210, 270, 330]) { const p = pt(cx, cy, 55, a); s += tx(p[0], p[1], '−', { anchor: 'middle', fs: 12, c: 'B' }); }
  for (const a of [20, 80, 140, 200, 260, 320]) { const p = pt(cx, cy, 95, a); s += tx(p[0], p[1], '+', { anchor: 'middle', fs: 11, c: 'E' }); }
  s += circ(cx, cy, 75, { c: 'm', dash: '4 4', w: 1 }) + tx(20, 18, '导体内部 E = 0；内表面 −q，外表面 +q', { it: false, fs: 10 }) + eq(255, 70, ['E = 0 （导体内）']) + eq(255, 120, ['E = k', { n: 'q', d: 'r²' }, ' （壳外）'], { fs: 12 });
  return s;
});
def('potential-energy-sign', '电势能的正负：同号与异号电荷', 'U=k\\dfrac{q_1q_2}{r}', () => {
  const g = graph(60, 40, 180, 140, { fns: [{ f: (t) => 0.8 / (t + 0.5), c: 'f' }, { f: (t) => -0.8 / (t + 0.5), c: 'B' }], t1: 1, ymin: -1.1, ymax: 1.1, xl: 'r', yl: 'U', hmarks: [{ v: 0, label: '0' }] });
  let s = g.s + tx(g.X(0.55), g.Y(0.55) - 8, '同号：U > 0', { c: 'f', fs: 10 }) + tx(g.X(0.55), g.Y(-0.55) + 14, '异号：U < 0', { c: 'B', fs: 10 });
  s += eq(255, 70, ['U = k', { n: 'q₁q₂', d: 'r' }]) + tx(270, 125, '异号：U 更负', { it: false, fs: 11 }) + tx(270, 150, '同号：U 更正', { it: false, fs: 11 }) + tx(270, 185, '无穷远 U = 0', { it: false, fs: 11 });
  return s;
});
def('potential-point-charge', '点电荷电势：V 随 r 按 1/r 减小', 'V=k\\dfrac{q}{r}', () => {
  const cx = 115, cy = 130; let s = circ(cx, cy, 8, { fill: COL.E, c: 'E', op: 0.55 }) + tx(cx, cy + 4, '+', { anchor: 'middle', fs: 12, c: 'E', it: false });
  [40, 70, 100].forEach((r, i) => { s += circ(cx, cy, r, { c: 'm', dash: '4 4', w: 1 }) + tx(cx + r - 4, cy - 6, `V${i + 1}`, { c: 'm', fs: 10, anchor: 'end' }); });
  const g = graph(245, 40, 115, 125, { fns: [{ f: (t) => 1.2 / (1 + 2 * t), c: 'E' }], t1: 1, ymin: 0, ymax: 1.3, xl: 'r', yl: 'V' });
  s += g.s + tx(20, 26, '等势面：同心球面', { it: false, fs: 11 }) + eq(20, 225, ['V = k', { n: 'q', d: 'r' }]) + tx(180, 225, 'V 是标量，可直接相加', { it: false, fs: 11 });
  return s;
});
def('charge-in-field', '电荷在平行板间移动：W = qEd', 'W=qEd,\\;\\; \\Delta U=-qEd', () => {
  let s = ln(50, 55, 300, 55, { w: 3, c: 'E' }) + ln(50, 205, 300, 205, { w: 3, c: 'B' });
  for (let x = 75; x <= 285; x += 50) { s += tx(x, 48, '+', { c: 'E', it: false, fs: 12, anchor: 'middle' }) + tx(x, 220, '−', { c: 'B', it: false, fs: 12, anchor: 'middle' }); }
  [110, 160, 210, 260].forEach((x) => { s += arr(x, 65, x, 195, 'E', 1.4); });
  s += circ(175, 90, 8, { fill: COL.f, c: 'f', op: 0.5 }) + tx(175, 94, '+q', { anchor: 'middle', fs: 10, it: false, c: 'f' });
  s += arr(175, 100, 175, 170, 'a', 1.8) + tx(181, 140, 'd', { c: 'a' });
  s += tx(20, 26, 'E 向下；正电荷向下移动', { it: false, fs: 11 }) + eq(20, 238, ['W = qEd，ΔU = −qEd']);
  return s;
});
def('capacitor-combinations', '电容器的串联与并联', '\\dfrac1{C_{\\rm eq}}=\\dfrac1{C_1}+\\dfrac1{C_2},\\;\\; C_{\\rm eq}=C_1+C_2', () => {
  let s = tx(30, 28, '串联', { it: false, fs: 11 }) + tx(225, 28, '并联', { it: false, fs: 11 });
  s += ln(30, 70, 170, 70, { w: 1.6 }) + ln(30, 185, 170, 185, { w: 1.6 });
  s += capacitor(80, 70, 80, 120, 'C₁') + capacitor(125, 120, 125, 185, 'C₂');
  s += ln(80, 120, 125, 120, { w: 1.6 });
  s += ln(225, 70, 370, 70, { w: 1.6 }) + ln(225, 185, 370, 185, { w: 1.6 });
  s += ln(260, 70, 260, 110, { w: 1.6 }) + capacitor(260, 110, 260, 155, 'C₁') + ln(260, 155, 260, 185, { w: 1.6 });
  s += ln(335, 70, 335, 110, { w: 1.6 }) + capacitor(335, 110, 335, 155, 'C₂') + ln(335, 155, 335, 185, { w: 1.6 });
  s += eq(20, 225, ['1/C_eq = 1/C₁ + 1/C₂'], { fs: 11 }) + eq(215, 225, ['C_eq = C₁ + C₂'], { fs: 11 });
  return s;
});
def('capacitor-energy', '电容器储能与场能密度', 'U=\\dfrac12CV^2=\\dfrac12QV,\\;\\; u=\\dfrac12\\varepsilon_0E^2', () => {
  let s = ln(50, 70, 190, 70, { w: 3 }) + ln(50, 180, 190, 180, { w: 3 }) + ln(120, 70, 120, 180, { w: 1.6 });
  s += tx(80, 64, '+Q', { anchor: 'middle', fs: 11, it: false }) + tx(80, 198, '−Q', { anchor: 'middle', fs: 11, it: false });
  for (let y = 85; y <= 165; y += 25) s += arr(120, y, 120, y + 14, 'E', 1.4);
  const g = graph(240, 40, 125, 135, { fns: [{ f: (t) => t * t, c: 'f' }], t1: 1, ymin: 0, ymax: 1.1, xl: 'V', yl: 'U' });
  s += g.s + tx(20, 26, '平行板电容器：U ∝ V²', { it: false, fs: 11 }) + eq(20, 225, ['U = ½CV²']) + eq(190, 225, ['u = ½ε₀E²'], { fs: 11 });
  return s;
});
def('circuit-equivalent', '串联与并联的等效电阻', 'R_{\\rm series}=R_1+R_2,\\;\\; \\dfrac1{R_{\\rm parallel}}=\\dfrac1{R_1}+\\dfrac1{R_2}', () => {
  let s = tx(30, 28, '串联', { it: false, fs: 11 }) + tx(225, 28, '并联', { it: false, fs: 11 });
  s += ln(30, 120, 60, 120, { w: 1.6 }) + resistor(60, 120, 110, 120, 'R₁') + ln(110, 120, 140, 120, { w: 1.6 }) + resistor(140, 120, 190, 120, 'R₂') + ln(190, 120, 210, 120, { w: 1.6 });
  s += ln(225, 70, 370, 70, { w: 1.6 }) + ln(225, 185, 370, 185, { w: 1.6 });
  s += ln(260, 70, 260, 100, { w: 1.6 }) + resistor(260, 100, 260, 155, 'R₁') + ln(260, 155, 260, 185, { w: 1.6 });
  s += ln(335, 70, 335, 100, { w: 1.6 }) + resistor(335, 100, 335, 155, 'R₂') + ln(335, 155, 335, 185, { w: 1.6 });
  s += eq(20, 225, ['R_eq = R₁ + R₂'], { fs: 11 }) + eq(210, 225, ['1/R_eq = 1/R₁ + 1/R₂'], { fs: 11 });
  return s;
});
def('ammeter-voltmeter', '电流表串联、电压表并联', 'R=\\dfrac{V}{I}', () => {
  let s = battery(50, 200, 50, 60, 'ε', true) + ln(50, 60, 120, 60) + circ(140, 60, 14) + tx(140, 64, 'A', { anchor: 'middle', fs: 11, it: false }) + ln(154, 60, 220, 60);
  s += resistor(220, 60, 220, 150, 'R') + ln(220, 150, 220, 200) + ln(220, 200, 50, 200);
  s += ln(220, 100, 300, 100) + circ(315, 100, 14) + tx(315, 104, 'V', { anchor: 'middle', fs: 11, it: false }) + ln(329, 100, 350, 100) + ln(350, 100, 350, 150) + ln(350, 150, 220, 150);
  s += tx(20, 26, 'A 与 R 串联；V 与 R 并联', { it: false, fs: 11 }) + eq(20, 238, ['R = V/I']);
  return s;
});
def('ohmic-nonohmic', '欧姆器件与非欧姆器件的 I–V 曲线', 'R=\\dfrac{V}{I}', () => {
  const g = graph(55, 40, 185, 145, { fns: [{ f: (t) => t, c: 'f' }, { f: (t) => Math.sqrt(t) * 0.85, c: 'B' }], t1: 1, ymin: 0, ymax: 1.15, xl: 'V', yl: 'I' });
  let s = g.s + tx(g.X(0.7), g.Y(0.7) - 8, '欧姆', { c: 'f', fs: 10, anchor: 'middle' }) + tx(g.X(0.8), g.Y(0.75) + 18, '灯丝', { c: 'B', fs: 10, anchor: 'middle' });
  s += eq(260, 70, ['R = V/I']) + tx(260, 125, '直线：R 恒定', { it: false, fs: 11 }) + tx(260, 150, '曲线：R 随温度变化', { it: false, fs: 11 }) + tx(55, 26, '伏安特性', { it: false, fs: 11 });
  return s;
});
def('rc-energy', 'RC 充电：电容器储能随时间增长', 'U_C=\\dfrac12C\\varepsilon^2\\left(1-e^{-\\dfrac{t}{RC}}\\right)^2', () => {
  const g = graph(55, 40, 190, 140, { fns: [{ f: (t) => (1 - Math.exp(-t)) ** 2, c: 'f' }], t1: 5, ymin: 0, ymax: 1.1, yl: 'U_C', vmarks: [{ t: 1, label: 'τ' }], hmarks: [{ v: 1, label: '½Cε²' }] });
  let s = g.s + tx(55, 26, 't → ∞：U_C → ½Cε²', { it: false, fs: 11 }) + eq(260, 70, ['U_C = ', { n: '1', d: '2' }, 'Cε²(1 − e^{−t/RC})²'], { fs: 11 }) + tx(260, 140, '充电过程中电源做功', { it: false, fs: 11 }) + tx(260, 165, '一半储存，一半发热', { it: false, fs: 11 });
  return s;
});
def('magnetic-force-rhr', '洛伦兹力方向：右手定则', '\\vec F=q\\vec v\\times\\vec B,\\;\\; F=qvB\\sin\\theta', () => {
  let s = tx(20, 26, 'B 入纸面（×），v 向右', { it: false, fs: 11 });
  for (let x = 40; x <= 180; x += 35) for (let y = 60; y <= 200; y += 35) s += crossB(x, y, 4);
  s += circ(110, 130, 6, { fill: COL.E, c: 'E', op: 0.6 }) + tx(110, 134, '+', { anchor: 'middle', it: false, fs: 10, c: 'E' });
  s += arr(116, 130, 166, 130, 'v') + tx(168, 124, 'v', { c: 'v' }) + arr(110, 124, 110, 74, 'f') + tx(116, 84, 'F', { c: 'f' }) + tx(110, 220, '+q：F 向上', { anchor: 'middle', it: false, fs: 11 });
  for (let x = 225; x <= 365; x += 35) for (let y = 60; y <= 200; y += 35) s += crossB(x, y, 4);
  s += circ(300, 130, 6, { fill: COL.B, c: 'B', op: 0.6 }) + tx(300, 134, '−', { anchor: 'middle', it: false, fs: 10, c: 'B' });
  s += arr(306, 130, 356, 130, 'v') + tx(358, 124, 'v', { c: 'v' }) + arr(300, 136, 300, 186, 'f') + tx(306, 176, 'F', { c: 'f' }) + tx(300, 220, '−q：F 向下', { anchor: 'middle', it: false, fs: 11 });
  s += eq(20, 242, ['F = qvB sin θ']);
  return s;
});
def('biot-savart', '毕奥–萨伐尔定律：电流元的磁场', 'dB=\\dfrac{\\mu_0I}{4\\pi}\\dfrac{dl\\sin\\theta}{r^2}', () => {
  let s = ln(40, 190, 340, 190, { w: 2.4, c: 'I' }) + arr(120, 190, 160, 190, 'I', 2) + tx(140, 180, 'I', { c: 'I', anchor: 'middle' });
  s += rect(175, 185, 30, 10, { fill: COL.I, op: 0.35, c: 'I' }) + tx(190, 178, 'dl', { c: 'I', anchor: 'middle', fs: 11 });
  s += circ(250, 110, 5, { fill: 'currentColor' }) + tx(256, 104, 'P', { fs: 12 }) + ln(190, 190, 250, 110, { c: 'm', dash: '3 3', w: 1 }) + tx(212, 142, 'r', { fs: 12 }) + dotB(250, 110, 9, 'B') + tx(264, 132, 'dB ⊙', { c: 'B', fs: 11 });
  s += arc(190, 190, 35, 0, 43, { c: 'm', w: 1 }) + tx(204, 162, 'θ', { fs: 11 });
  s += tx(20, 26, '右手：dl × r 的方向即 dB', { it: false, fs: 11 }) + eq(20, 232, ['dB = ', { n: 'μ₀I', d: '4π' }, { n: 'dl sin θ', d: 'r²' }], { fs: 12 });
  return s;
});
def('magnetic-flux-angle', '磁通量：Φ_B = BA cos θ', '\\Phi_B=BA\\cos\\theta', () => {
  let s = `<polygon points="100,170 230,145 275,90 145,115" style="fill:${COL.B};fill-opacity:0.10;stroke:${COL.B};stroke-width:1.6"/>`;
  s += ln(188, 130, 216, 65, { c: 'f', w: 2 }) + tx(220, 60, 'n', { c: 'f', fs: 12 });
  s += arr(70, 80, 125, 95, 'B', 1.8) + arr(105, 55, 160, 70, 'B', 1.8) + arr(140, 30, 195, 45, 'B', 1.8);
  s += tx(72, 60, 'B', { c: 'B', fs: 12 }) + tx(20, 26, '线圈平面法线与 B 的夹角 θ', { it: false, fs: 11 });
  s += eq(245, 80, ['Φ_{B} = BA cos θ']) + tx(245, 135, 'θ = 0：Φ 最大', { it: false, fs: 11 }) + tx(245, 158, 'θ = 90°：Φ = 0', { it: false, fs: 11 });
  return s;
});
def('flux-emf-graph', '磁通量与感应电动势：相位差 90°', '\\varepsilon=-\\dfrac{d\\Phi_B}{dt}', () => {
  const g1 = graph(55, 38, 250, 62, { fns: [{ f: (t) => Math.cos(2 * Math.PI * t) }], t1: 1.25, ymin: -1.15, ymax: 1.15, yl: 'Φ' });
  const g2 = graph(55, 135, 250, 62, { fns: [{ f: (t) => -Math.sin(2 * Math.PI * t), c: 'f' }], t1: 1.25, ymin: -1.15, ymax: 1.15, yl: 'ε' });
  let s = g1.s + g2.s + tx(20, 18, 'Φ 与 ε 相位差 90°', { it: false, fs: 11 }) + eq(20, 235, ['ε = −dΦ_{B}/dt']);
  return s;
});
def('inductor-energy', '电感储能：U_L = ½LI²', 'U_L=\\dfrac12LI^2', () => {
  let s = inductor(120, 60, 120, 190, 'L') + ln(60, 190, 120, 190) + ln(120, 60, 180, 60) + ln(180, 60, 180, 190) + ln(180, 190, 120, 190);
  s += arr(150, 60, 150, 100, 'I', 1.6) + tx(156, 84, 'I', { c: 'I' });
  const g = graph(240, 40, 125, 135, { fns: [{ f: (t) => t * t, c: 'I' }], t1: 1, ymin: 0, ymax: 1.1, xl: 'I', yl: 'U' });
  s += g.s + tx(20, 26, '电流增大，磁场储能增加', { it: false, fs: 11 }) + eq(20, 225, ['U_L = ½LI²']);
  return s;
});
def('lc-energy', 'LC 振荡：电场能与磁场能互相转换', 'U=\\dfrac{q^2}{2C}+\\dfrac12LI^2=\\text{常量}', () => {
  let s = capacitor(70, 180, 70, 60, 'C') + ln(70, 60, 170, 60) + inductor(170, 60, 170, 180, 'L') + ln(170, 180, 70, 180);
  const g = graph(240, 30, 125, 150, { fns: [{ f: (t) => Math.cos(2 * Math.PI * t) ** 2, c: 'f' }, { f: (t) => Math.sin(2 * Math.PI * t) ** 2, c: 'B' }, { f: () => 1, c: 'm', dash: '4 3', w: 1 }], t1: 1.25, ymin: 0, ymax: 1.15, yl: 'U' });
  s += g.s + tx(250, 250, 'U_C / U_L / U_total', { it: false, fs: 9 }) + eq(20, 225, ['U = ', { n: 'q²', d: '2C' }, ' + ', { n: '1', d: '2' }, 'LI²']);
  return s;
});

/* ======================= extra E&M / rotation views ======================= */
def('velocity-selector', '速度选择器：电场力与磁场力平衡', 'qE=qvB\\;\\Rightarrow\\;v=\\dfrac{E}{B}', () => {
  let s = ln(50, 55, 310, 55, { w: 3, c: 'E' }) + ln(50, 205, 310, 205, { w: 3, c: 'B' });
  for (let x = 80; x <= 290; x += 42) { s += tx(x, 48, '+', { c: 'E', it: false, fs: 12, anchor: 'middle' }) + tx(x, 220, '−', { c: 'B', it: false, fs: 12, anchor: 'middle' }); }
  for (let x = 90; x <= 285; x += 42) for (let y = 85; y <= 190; y += 35) s += crossB(x, y, 4, 'B');
  [105, 155, 205, 255].forEach((x) => { s += arr(x, 65, x, 195, 'E', 1.4); });
  s += circ(180, 130, 8, { fill: COL.E, c: 'E', op: 0.55 }) + tx(180, 134, '+q', { anchor: 'middle', fs: 9, c: 'E', it: false });
  s += arr(188, 130, 250, 130, 'v') + tx(252, 108, 'v', { c: 'v' }) + arr(180, 138, 180, 180, 'f') + tx(186, 172, 'qE', { c: 'f', fs: 10 }) + arr(180, 122, 180, 80, 'f') + tx(186, 92, 'qvB', { c: 'f', fs: 10 });
  s += tx(20, 26, 'E 向下，B 入纸面；正电荷向右', { it: false, fs: 11 }) + eq(20, 240, ['v = ', { n: 'E', d: 'B' }]);
  return s;
});
def('mass-spectrometer', '质谱仪：不同质量离子的圆周半径不同', 'r=\\dfrac{mv}{|q|B}', () => {
  let s = rect(45, 40, 310, 180, { c: 'm', dash: '4 4', fill: 'none' });
  for (let x = 65; x <= 335; x += 34) for (let y = 60; y <= 200; y += 34) s += dotB(x, y, 4, 'B');
  s += ln(45, 130, 100, 130, { w: 2 }) + tx(52, 122, '离子束', { fs: 10, it: false });
  s += arr(100, 130, 135, 130, 'v') + tx(112, 118, 'v', { c: 'v', fs: 11 });
  s += arc(160, 130, 45, 180, 360, { c: 'f', w: 1.8, me: 'f' }) + arc(160, 130, 65, 180, 360, { c: 'B', w: 1.8, me: 'B' });
  s += circ(115, 130, 4, { fill: 'currentColor' });
  s += tx(160, 72, '轻离子：r 小', { c: 'f', fs: 10, anchor: 'middle' }) + tx(175, 40, '重离子：r 大', { c: 'B', fs: 10, anchor: 'middle' });
  s += tx(300, 210, 'B 出纸面', { c: 'B', fs: 10, it: false, anchor: 'end' }) + eq(20, 240, ['r = ', { n: 'mv', d: '|q|B' }]);
  return s;
});
def('angular-graphs', '匀角加速：ω–t 与 α–t 图', '\\omega=\\omega_0+\\alpha t,\\;\\; \\Delta\\theta=\\omega_0t+\\dfrac12\\alpha t^2', () => {
  const g1 = graph(55, 35, 220, 70, { fns: [{ f: (t) => 0.35 + 0.55 * t, c: 'a' }], t1: 1, ymin: 0, ymax: 1.1, xl: 't', yl: 'ω' });
  const g2 = graph(55, 140, 220, 70, { fns: [{ f: () => 0.55, c: 'a' }], t1: 1, ymin: 0, ymax: 1.1, xl: 't', yl: 'α' });
  let s = g1.s + g2.s + tx(80, 20, '斜率 = α；α 恒定时 ω 线性增大', { it: false, fs: 10 }) + eq(290, 80, ['ω = ω₀ + αt'], { fs: 12 }) + eq(290, 140, ['Δθ = ω₀t + ½αt²'], { fs: 11 });
  return s;
});

/* ======================= openly licensed reference media ======================= */
defImg('atwood-apparatus', '阿特伍德机装置图（参考）', 'a=\\dfrac{(m_2-m_1)g}{m_1+m_2}', 'modules/physics/media/atwood-machine.svg', 'MikeRun / Wikimedia Commons / CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:Atwood-machine.svg');
defImg('pendulum-apparatus', '单摆装置图（参考）', 'T=2\\pi\\sqrt{\\dfrac{L}{g}}', 'modules/physics/media/simple-pendulum.svg', 'Chetvorno / Wikimedia Commons / Public domain', 'https://commons.wikimedia.org/wiki/File:Simple_gravity_pendulum.svg');
defImg('field-lines-equipotentials', '点电荷电场线与等势面（参考）', 'E=k\\dfrac{q}{r^2},\\; V=k\\dfrac{q}{r}', 'modules/physics/media/field-lines-equipotentials.svg', 'Sjlegg / Wikimedia Commons / Public domain', 'https://commons.wikimedia.org/wiki/File:Electric_field_point_lines_equipotentials.svg');
defImg('cathode-ray-tube', '阴极射线管示意图（参考）', 'r=\\dfrac{mv}{|q|B}', 'modules/physics/media/cathode-ray-tube.svg', 'Interiot, Theresa Knott / Wikimedia Commons / CC BY-SA 3.0', 'https://commons.wikimedia.org/wiki/File:Cathode_ray_tube_diagram-en.svg');

export const MODULE_FIGURES = {
  projectile: ['kin-graphs', 'projectile', 'projectile-range', 'motion-diagram', 'free-fall'],
  'newton-incline': ['incline-frictionless', 'incline-kinetic', 'incline-static', 'incline-pulley', 'atwood', 'table-pulley', 'atwood-apparatus', 'elevator', 'friction-graph', 'banked-frictionless', 'banked-friction', 'conical-pendulum', 'flat-curve', 'circular-vectors', 'vertical-loop'],
  'work-energy': ['force-position', 'vertical-loop', 'energy-bars', 'work-incline', 'work-angle', 'power-graph'],
  'collision-momentum': ['collision-elastic', 'collision-inelastic', 'collision-2d', 'ballistic-pendulum', 'impulse-graph', 'momentum-graph', 'momentum-bars', 'explosion'],
  'rigid-rotation': ['rod-pivot', 'disk-string', 'rolling-incline', 'rolling-velocity', 'ladder', 'seesaw', 'moment-of-inertia', 'rolling-race', 'angular-momentum-skater', 'angular-graphs'],
  'gravity-orbit': ['orbit', 'conical-pendulum', 'kepler-ellipse', 'gravitational-potential', 'orbit-energy'],
  shm: ['shm-horizontal', 'shm-vertical', 'pendulum-simple', 'pendulum-physical', 'shm-graphs', 'shm-energy', 'shm-phase', 'pendulum-period', 'pendulum-apparatus'],
  'electric-field': ['point-charge-field', 'dipole-field', 'coulomb-force', 'field-vectors', 'field-superposition', 'field-lines-equipotentials'],
  'gauss-law': ['gauss-sphere', 'gauss-cylinder', 'gauss-plane', 'gauss-conductor', 'flux-angle', 'gauss-shell', 'line-charge'],
  'electric-potential': ['parallel-plate-potential', 'point-charge-field', 'potential-energy-sign', 'potential-point-charge', 'charge-in-field', 'field-lines-equipotentials'],
  capacitor: ['capacitor-plate', 'capacitor-dielectric', 'capacitor-dielectric-partial', 'capacitor-combinations', 'capacitor-energy'],
  'rc-circuit': ['circuit-series', 'circuit-parallel', 'circuit-kirchhoff', 'rc-circuit', 'rc-charging', 'rc-discharging', 'rc-energy'],
  'charged-particle-B': ['wire-field', 'loop-field', 'solenoid-field', 'ampere-wire', 'ampere-thick-wire', 'particle-in-B', 'magnetic-force-rhr', 'cathode-ray-tube', 'biot-savart', 'velocity-selector', 'mass-spectrometer'],
  'faraday-induction': ['faraday-rod', 'faraday-changing-B', 'rl-circuit', 'lc-circuit', 'magnetic-flux-angle', 'flux-emf-graph', 'inductor-energy', 'lc-energy'],
};
export const FIGURES = F;
export const FIGURE_IDS = Object.keys(F);

/** Render one figure as an SVG string (fixed viewBox; scales down only via its container). */
export function renderFigureSVG(id) {
  const f = F[id]; if (!f) return '';
  if (f.img) {
    return `<img src="${esc(f.img)}" alt="${esc(f.title)}" loading="eager" decoding="async" style="display:block;width:100%;height:100%;object-fit:contain;background:#fff">`;
  }
  P = 'xf-' + id;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${VW} ${VH}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="${esc(f.title)}" style="display:block;width:100%;height:100%;color:var(--text, #222);overflow:hidden">${markers()}${f.draw()}</svg>`;
}

/** Topic id (mech/…/code or chapterId:code) → relevant exam figure ids. */
export const TOPIC_FIGURES = {
  'mech/mech-prep-hs/P1.2': ['kin-graphs', 'motion-diagram', 'free-fall'],
  'mech/mech-prep-hs/P1.3': ['projectile', 'kin-graphs', 'projectile-range'],
  'mech/mech-prep-hs/P1.4': ['incline-frictionless', 'incline-kinetic', 'atwood', 'friction-graph', 'atwood-apparatus'],
  'mech/mech-prep-hs/P1.5': ['incline-kinetic', 'incline-static', 'incline-pulley', 'table-pulley', 'elevator'],
  'mech/mech-prep-hs/P1.6': ['banked-frictionless', 'banked-friction', 'conical-pendulum', 'vertical-loop', 'flat-curve', 'circular-vectors'],
  'mech/mech-prep-hs/P1.7': ['orbit', 'conical-pendulum', 'kepler-ellipse', 'gravitational-potential', 'orbit-energy'],
  'mech/mech-prep-hs/P1.8': ['force-position', 'vertical-loop', 'work-angle', 'energy-bars'],
  'mech/mech-prep-hs/P1.9': ['force-position', 'vertical-loop', 'work-incline', 'power-graph'],
  'mech/mech-prep-hs/P1.10': ['collision-elastic', 'collision-inelastic', 'collision-2d', 'impulse-graph', 'momentum-graph', 'momentum-bars', 'explosion'],
  'mech/mech-prep-hs/P1.11': ['rod-pivot', 'disk-string', 'rolling-velocity', 'moment-of-inertia', 'rolling-race', 'seesaw'],
  'mech/mech-prep-hs/P1.12': ['shm-horizontal', 'shm-vertical', 'pendulum-simple', 'shm-graphs', 'shm-energy', 'shm-phase', 'pendulum-apparatus'],
  'mech/mech-prep-hs/P1.15': ['circuit-series', 'circuit-parallel', 'circuit-kirchhoff', 'circuit-equivalent', 'ammeter-voltmeter', 'ohmic-nonohmic'],
  'mech/mech-prep-hs/P1.16': ['wire-field', 'particle-in-B', 'faraday-rod', 'magnetic-force-rhr', 'cathode-ray-tube', 'magnetic-flux-angle'],
  'mech/mech-prep-ap1/P2.1': ['kin-graphs', 'projectile', 'motion-diagram', 'free-fall', 'projectile-range'],
  'mech/mech-prep-ap1/P2.2': ['incline-frictionless', 'incline-kinetic', 'incline-static', 'atwood', 'friction-graph', 'elevator'],
  'mech/mech-prep-ap1/P2.3': ['banked-frictionless', 'banked-friction', 'orbit', 'conical-pendulum', 'flat-curve', 'circular-vectors'],
  'mech/mech-prep-ap1/P2.4': ['force-position', 'vertical-loop', 'work-angle', 'energy-bars'],
  'mech/mech-prep-ap1/P2.5': ['collision-elastic', 'collision-inelastic', 'ballistic-pendulum', 'impulse-graph', 'momentum-bars', 'explosion'],
  'mech/mech-prep-ap1/P2.6': ['shm-horizontal', 'pendulum-simple', 'shm-graphs', 'shm-energy', 'shm-phase', 'pendulum-apparatus'],
  'mech/mech-prep-ap1/P2.7': ['circuit-series', 'circuit-parallel', 'rc-circuit', 'circuit-equivalent', 'ammeter-voltmeter', 'rc-energy'],
  'mech/mech-prep-ap1/P2.8': ['rod-pivot', 'disk-string', 'rolling-incline', 'moment-of-inertia', 'rolling-race'],
  'mech/mech-prep-math/P3.5': ['pendulum-simple', 'shm-graphs', 'pendulum-period'],
  'mech/mech-u1/1.1': ['kin-graphs', 'motion-diagram', 'free-fall'],
  'mech/mech-u1/1.2': ['projectile', 'kin-graphs', 'projectile-range'],
  'mech/mech-u2/2.3': ['incline-frictionless', 'incline-kinetic', 'atwood', 'table-pulley', 'elevator', 'friction-graph'],
  'mech/mech-u2/2.4': ['banked-frictionless', 'banked-friction', 'conical-pendulum', 'vertical-loop', 'flat-curve', 'circular-vectors'],
  'mech/mech-u2/2.5': ['atwood', 'table-pulley', 'atwood-apparatus'],
  'mech/mech-u2/2.6': ['orbit', 'conical-pendulum', 'kepler-ellipse', 'gravitational-potential', 'orbit-energy'],
  'mech/mech-u3/3.1': ['force-position', 'vertical-loop', 'energy-bars', 'work-incline', 'work-angle'],
  'mech/mech-u3/3.2': ['force-position', 'work-angle'],
  'mech/mech-u3/3.3': ['force-position', 'vertical-loop', 'energy-bars'],
  'mech/mech-u3/3.4': ['power-graph'],
  'mech/mech-u4/4.1': ['impulse-graph', 'momentum-graph', 'momentum-bars'],
  'mech/mech-u4/4.2': ['collision-elastic', 'collision-inelastic', 'collision-2d', 'ballistic-pendulum', 'momentum-bars', 'explosion'],
  'mech/mech-u5/5.1': ['ladder', 'rod-pivot', 'seesaw'],
  'mech/mech-u5/5.2': ['rolling-velocity', 'angular-graphs'],
  'mech/mech-u5/5.3': ['rod-pivot', 'disk-string', 'rolling-incline', 'moment-of-inertia', 'rolling-race', 'angular-momentum-skater'],
  'mech/mech-u6/6.1': ['rolling-incline', 'disk-string', 'rolling-race'],
  'mech/mech-u6/6.2': ['disk-string', 'rod-pivot', 'angular-momentum-skater'],
  'mech/mech-u6/6.3': ['rolling-incline', 'rolling-velocity', 'rolling-race'],
  'mech/mech-u6/6.4': ['orbit', 'orbit-energy'],
  'mech/mech-u7/7.1': ['shm-horizontal', 'shm-vertical', 'shm-graphs', 'shm-energy', 'shm-phase'],
  'mech/mech-u7/7.2': ['pendulum-simple', 'shm-graphs', 'pendulum-period', 'pendulum-apparatus'],
  'mech/mech-u7/7.3': ['pendulum-physical', 'shm-graphs', 'physical-pendulum-fbd'],
  'em/em-prep-found/P1.1': ['point-charge-field', 'coulomb-force'],
  'em/em-prep-found/P1.2': ['point-charge-field', 'dipole-field', 'field-vectors', 'field-lines-equipotentials'],
  'em/em-prep-found/P1.3': ['parallel-plate-potential', 'point-charge-field', 'potential-energy-sign', 'potential-point-charge'],
  'em/em-prep-found/P1.4': ['capacitor-plate', 'capacitor-dielectric', 'capacitor-combinations', 'capacitor-energy'],
  'em/em-prep-found/P1.5': ['circuit-series', 'circuit-parallel', 'circuit-kirchhoff', 'circuit-equivalent', 'ammeter-voltmeter'],
  'em/em-prep-found/P1.6': ['wire-field', 'particle-in-B', 'magnetic-force-rhr', 'cathode-ray-tube'],
  'em/em-prep-found/P1.7': ['faraday-rod', 'faraday-changing-B', 'magnetic-flux-angle', 'flux-emf-graph'],
  'em/em-prep-found/P1.8': ['gauss-sphere', 'gauss-cylinder', 'gauss-plane', 'flux-angle', 'gauss-shell', 'line-charge'],
  'em/em-u8/8.1': ['point-charge-field', 'coulomb-force'],
  'em/em-u8/8.2': ['point-charge-field', 'dipole-field', 'field-vectors', 'field-lines-equipotentials'],
  'em/em-u8/8.3': ['point-charge-field', 'dipole-field', 'field-superposition', 'field-lines-equipotentials'],
  'em/em-u8/8.4': ['gauss-sphere', 'gauss-cylinder', 'gauss-plane', 'flux-angle'],
  'em/em-u8/8.5': ['gauss-sphere', 'gauss-cylinder', 'gauss-plane', 'gauss-conductor', 'gauss-shell', 'line-charge'],
  'em/em-u9/9.1': ['parallel-plate-potential', 'point-charge-field', 'potential-energy-sign'],
  'em/em-u9/9.2': ['parallel-plate-potential', 'potential-point-charge'],
  'em/em-u9/9.3': ['parallel-plate-potential', 'point-charge-field', 'potential-point-charge', 'field-lines-equipotentials'],
  'em/em-u9/9.4': ['parallel-plate-potential', 'charge-in-field'],
  'em/em-u10/10.1': ['gauss-conductor', 'gauss-sphere', 'gauss-shell'],
  'em/em-u10/10.2': ['gauss-conductor', 'gauss-shell'],
  'em/em-u10/10.3': ['capacitor-plate', 'capacitor-combinations', 'capacitor-energy'],
  'em/em-u10/10.4': ['capacitor-dielectric', 'capacitor-dielectric-partial', 'capacitor-energy'],
  'em/em-u11/11.1': ['circuit-series'],
  'em/em-u11/11.2': ['circuit-series', 'circuit-parallel', 'circuit-equivalent', 'ammeter-voltmeter'],
  'em/em-u11/11.3': ['circuit-series', 'circuit-parallel', 'ohmic-nonohmic'],
  'em/em-u11/11.4': ['circuit-series'],
  'em/em-u11/11.5': ['circuit-series', 'circuit-parallel', 'circuit-kirchhoff', 'circuit-equivalent'],
  'em/em-u11/11.6': ['circuit-kirchhoff'],
  'em/em-u11/11.7': ['circuit-kirchhoff', 'circuit-parallel'],
  'em/em-u11/11.8': ['rc-circuit', 'rc-charging', 'rc-discharging', 'rc-energy'],
  'em/em-u12/12.1': ['wire-field', 'loop-field', 'solenoid-field'],
  'em/em-u12/12.2': ['particle-in-B', 'magnetic-force-rhr', 'cathode-ray-tube', 'velocity-selector', 'mass-spectrometer'],
  'em/em-u12/12.3': ['wire-field', 'loop-field', 'biot-savart'],
  'em/em-u12/12.4': ['ampere-wire', 'ampere-thick-wire', 'solenoid-field', 'line-charge'],
  'em/em-u13/13.1': ['faraday-changing-B', 'magnetic-flux-angle'],
  'em/em-u13/13.2': ['faraday-rod', 'faraday-changing-B', 'flux-emf-graph'],
  'em/em-u13/13.3': ['faraday-rod', 'particle-in-B', 'magnetic-force-rhr'],
  'em/em-u13/13.4': ['rl-circuit', 'lc-circuit', 'inductor-energy'],
  'em/em-u13/13.5': ['rl-circuit', 'inductor-energy'],
  'em/em-u13/13.6': ['lc-circuit', 'lc-energy'],
};

/** Resolve figure ids for a topic object or topic id string. */
export function figuresForTopic(topicOrId) {
  const id = typeof topicOrId === 'string' ? topicOrId : topicOrId?.id;
  if (id && TOPIC_FIGURES[id]) return [...TOPIC_FIGURES[id]];
  // Alternate key chapterId:code
  if (topicOrId && typeof topicOrId === 'object') {
    const alt = `${topicOrId.chapterId}:${topicOrId.code}`;
    if (TOPIC_FIGURES[alt]) return [...TOPIC_FIGURES[alt]];
    const full = `${topicOrId.subject}/${topicOrId.chapterId}/${topicOrId.code}`;
    if (TOPIC_FIGURES[full]) return [...TOPIC_FIGURES[full]];
    // Fallback: union of linked module galleries (deduped)
    const mods = topicOrId.modules || [];
    const seen = new Set();
    const out = [];
    for (const m of mods) {
      for (const fid of MODULE_FIGURES[m.id] || []) {
        if (!seen.has(fid)) { seen.add(fid); out.push(fid); }
      }
    }
    return out;
  }
  return [];
}

function buildFigureGallery(ids, datasetKey, datasetVal) {
  if (!ids?.length) return null;
  const sec = document.createElement('section');
  sec.className = 'exam-figures topic-block';
  if (datasetKey) sec.dataset[datasetKey] = datasetVal;
  const h = document.createElement('h2');
  h.textContent = 'AP 考试常见图示';
  const grid = document.createElement('div');
  grid.className = 'exam-figures-grid';
  ids.forEach((id) => {
    const f = F[id]; if (!f) return;
    const fig = document.createElement('figure');
    fig.className = 'exam-figure'; fig.dataset.fig = id;
    const box = document.createElement('div');
    box.className = 'exam-figure-box';
    box.innerHTML = renderFigureSVG(id);
    const cap = document.createElement('figcaption');
    cap.className = 'exam-figure-cap';
    const t = document.createElement('div'); t.textContent = f.title; cap.appendChild(t);
    if (f.tex) {
      const m = document.createElement('div'); m.className = 'exam-figure-tex';
      if (window.katex) { try { window.katex.render(f.tex, m, { throwOnError: false, displayMode: false }); } catch (_) { m.textContent = f.tex; } }
      else m.textContent = f.tex;
      cap.appendChild(m);
    }
    if (f.credit) {
      const c = document.createElement('div');
      c.className = 'exam-figure-credit';
      c.style.fontSize = '0.72rem';
      c.style.marginTop = '0.15rem';
      if (f.creditUrl) {
        const a = document.createElement('a');
        a.href = f.creditUrl; a.target = '_blank'; a.rel = 'noopener';
        a.style.color = 'inherit'; a.textContent = f.credit; c.appendChild(a);
      } else c.textContent = f.credit;
      cap.appendChild(c);
    }
    fig.append(box, cap); grid.appendChild(fig);
  });
  sec.append(h, grid);
  return sec;
}

/** Append an "AP 考试常见图示" gallery of size-constrained figures to a module's viz panel. */
export function mountExamFigures(viz, moduleId) {
  const ids = MODULE_FIGURES[moduleId]; if (!ids || !viz) return null;
  const sec = buildFigureGallery(ids, 'module', moduleId);
  if (sec) viz.appendChild(sec);
  return sec;
}

/** Append relevant exam figures directly on a topic page. */
export function mountTopicExamFigures(container, topic) {
  const ids = figuresForTopic(topic);
  if (!ids.length || !container) return null;
  const sec = buildFigureGallery(ids, 'topic', topic.id || '');
  if (sec) container.appendChild(sec);
  return sec;
}
