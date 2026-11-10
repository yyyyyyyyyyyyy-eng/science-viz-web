/**
 * AP Physics C (Mechanics + E&M) exam-style static figures.
 * Pure SVG, theme-aware via CSS variables, fixed 400×260 viewBox.
 * Every figure is size-constrained: width 100% up to a fixed max, fixed aspect ratio,
 * and `contain: size` so content never grows the box on resize.
 * Math labels use stacked fractions (drawn in SVG; captions rendered with KaTeX \dfrac).
 */

import { defaultParams, mountFigureInteraction } from './exam-figure-interact.js';

const VW = 400, VH = 260;
// Extra inline depth so stacked-fraction captions clear the figcaption's
// overflow edge (KaTeX fractions otherwise touch the bottom of the box).
const CAP_DESCENT = '\\vphantom{\\sqrt{\\dfrac{1}{1}}}';
const COL = {
  g: 'currentColor',                          // geometry
  f: 'var(--ef-force, #a8400f)',              // forces
  v: 'var(--ef-v, #1c5fae)',                  // velocity / momentum
  a: 'var(--ef-a, #1d6b33)',                  // acceleration
  E: 'var(--ef-e, #b02318)',                  // electric field
  B: 'var(--ef-b, #5b3ac0)',                  // magnetic field
  I: 'var(--ef-i, #7d5200)',                  // current
  m: 'var(--ef-muted, #66655e)',              // muted / dashed helpers
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
const PART_CSS = `<style>.fig-part{cursor:pointer;transition:opacity .12s}.fig-has-hot .fig-part{opacity:.2}.fig-has-hot .fig-part.is-hot{opacity:1}.fig-hit{fill:transparent;stroke:none}.fig-part:focus{outline:none}.fig-part:focus .fig-hit{stroke:currentColor;stroke-width:1;stroke-dasharray:3 3}</style>`;
/** Wrap a labelled schematic part; box enlarges the pointer target. */
const MIN_HIT = 60; // SVG units -> >=44 CSS px at the narrowest gallery column
function part(key, inner, box) {
  let hit = '';
  if (box) {
    const w = Math.max(box.w, MIN_HIT), h = Math.max(box.h, MIN_HIT);
    const x = box.x - (w - box.w) / 2, y = box.y - (h - box.h) / 2;
    hit = `<rect class="fig-hit" x="${r1(x)}" y="${r1(y)}" width="${r1(w)}" height="${r1(h)}" pointer-events="all"/>`;
  }
  return `<g class="fig-part" data-part="${esc(key)}">${hit}${inner}</g>`;
}
function tx(x, y, s, o = {}) {
  const fs = o.fs || 13;
  return `<text x="${r1(x)}" y="${r1(y)}" font-size="${fs}" text-anchor="${o.anchor || 'start'}" style="fill:${COL[o.c || 'g']};font-family:KaTeX_Main,'Times New Roman',serif;${o.it === false ? '' : 'font-style:italic;'}${o.ws ? `word-spacing:${o.ws}px;` : ''}">${rich(s)}</text>`;
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
/** Interactive figure: controls hold their baseline values, so draw() at load reproduces the static view. */
const defI = (id, title, tex, controls, draw, opt = {}) => { F[id] = { id, title, tex, controls, draw, ...opt }; };
/** Highlight-only schematic: parts = { key: description }. */
const defH = (id, title, tex, parts, draw, opt = {}) => { F[id] = { id, title, tex, parts, draw, ...opt }; };
const defImg = (id, title, tex, img, credit, creditUrl) => { F[id] = { id, title, tex, img, credit, creditUrl }; };

/* ======================= Kinematics ======================= */
def('kin-graphs', 'x–t、v–t、a–t 图（匀加速，a > 0，v₀ < 0） · x–t, v–t, a–t graphs (uniform acceleration, a > 0, v₀ < 0)', 'v=\\dfrac{dx}{dt},\\; a=\\dfrac{dv}{dt}', () => {
  const a = 1, v0 = -1; let s = '';
  s += graph(40, 22, 90, 70, { fns: [{ f: (t) => v0 * t + 0.5 * a * t * t }], t1: 3, ymin: -0.8, ymax: 1.6, yl: 'x', vmarks: [{ t: 1 }] }).s;
  s += graph(170, 22, 90, 70, { fns: [{ f: (t) => v0 + a * t, c: 'v' }], t1: 3, ymin: -1.2, ymax: 2.2, yl: 'v', vmarks: [{ t: 1 }] }).s;
  s += graph(300, 22, 80, 70, { fns: [{ f: () => a, c: 'a' }], t1: 3, ymin: -0.5, ymax: 1.5, yl: 'a' }).s;
  s += tx(200, 150, 'x–t 斜率 = v；v–t 斜率 = a；v–t 面积 = Δx', { anchor: 'middle', it: false, fs: 12 });
  s += tx(200, 172, '虚线处 v = 0：x–t 取极小值（切线水平）', { anchor: 'middle', it: false, fs: 12 });
  s += eq(40, 218, ['x = x₀ + v₀t + ', { n: '1', d: '2' }, 'at^{2}']) + eq(240, 218, ['Δx = ', { n: 'v₀ + v', d: '2' }, 't']);
  return s;
});
def('vector-components', '矢量分解与点积 · Vector Components and Dot Product', '\\vec A\\cdot\\vec B=AB\\cos\\theta=A_xB_x+A_yB_y', () => {
  let s = tx(20, 24, '分解：A 沿 x、y 的分量', { it: false, fs: 11 });
  s += arr(55, 195, 185, 195, 'g', 1.2) + arr(55, 195, 55, 55, 'g', 1.2) + tx(189, 199, 'x', { fs: 12 }) + tx(49, 48, 'y', { fs: 12, anchor: 'end' });
  s += arr(55, 195, 150, 78, 'v', 2) + tx(98, 128, 'A', { c: 'v', fs: 13 });
  s += ln(55, 195, 150, 195, { c: 'm', dash: '4 3' }) + ln(150, 195, 150, 78, { c: 'm', dash: '4 3' });
  s += tx(104, 212, 'A_{x} = A cos θ', { anchor: 'middle', fs: 10 }) + tx(157, 140, 'A_{y} = A sin θ', { fs: 10 });
  s += arc(55, 195, 40, 0, 50, { c: 'm', w: 1 }) + tx(94, 178, 'θ', { fs: 11 });
  s += tx(20, 240, '点积 = 两矢量模长 × 夹角余弦', { it: false, fs: 10 });

  s += tx(215, 24, '点积 = 一个矢量在另一个上的投影', { it: false, fs: 10 });
  s += arr(235, 195, 370, 195, 'g', 1.2) + arr(235, 195, 235, 65, 'g', 1.2) + tx(374, 199, 'x', { fs: 12 }) + tx(229, 58, 'y', { fs: 12, anchor: 'end' });
  s += arr(235, 195, 365, 175, 'f', 2) + tx(318, 188, 'B', { c: 'f', fs: 13 });
  s += arr(235, 195, 320, 95, 'v', 2) + tx(272, 132, 'A', { c: 'v', fs: 13 });
  s += arc(235, 195, 42, 8, 46, { c: 'm', w: 1 }) + tx(278, 172, 'θ', { fs: 11 });
  s += tx(215, 240, 'A · B = AB cos θ', { it: false, fs: 10 });
  return s;
});
defI('projectile', '抛体：速度分量与加速度 · Projectile motion: velocity components and acceleration', 'R=\\dfrac{v_0^2\\sin 2\\theta}{g}', [
  { key: 'th', label: '发射角 θ', min: 20, max: 70, step: 1, value: 55, unit: '°' },
  { key: 'v0', label: '初速度 v₀', min: 40, max: 80, step: 1, value: 60, unit: '' },
], (p) => {
  const v0 = p.v0 ?? 60, th = p.th ?? 55, g = 30; const vx = v0 * Math.cos(rad(th)), vy = v0 * Math.sin(rad(th));
  const T = 2 * vy / g, sc = 300 / (vx * T); const X = (t) => 40 + vx * t * sc, Y = (t) => 225 - (vy * t - 0.5 * g * t * t) * sc;
  let s = hatch(20, 225, 380) + poly(Array.from({ length: 61 }, (_, i) => [X(i / 60 * T), Y(i / 60 * T)]), { c: 'm', dash: '5 4' });
  for (const f of [0, 0.25, 0.5, 0.8]) {
    const t = f * T, x = X(t), y = Y(t), k = 0.6;
    s += circ(x, y, 4, { fill: 'currentColor' }) + arr(x, y, x + vx * k, y, 'v', 1.6);
    if (Math.abs(vy - g * t) > 1) s += arr(x, y, x, y - (vy - g * t) * k, 'v', 1.6);
    s += arr(x, y, x, y + 26, 'a', 1.6);
  }
  s += arc(40, 225, 26, 0, th) + tx(th === 55 ? 68 : 40 + 31 * Math.cos(rad(th)), th === 55 ? 204 : 225 - 28 * Math.sin(rad(th)), 'θ');
  s += tx(X(0) + vx * 0.6 + 18, 221, 'v_{x}', { c: 'v', fs: 12 });
  s += tx(X(0.5 * T) - 10, Y(0.5 * T) - 10, '最高点 v_{y} = 0', { fs: 11, anchor: 'middle' }) + tx(X(0.8 * T) + 6, Math.min(212, Y(0.8 * T) + 30), 'a = g（竖直向下）', { c: 'a', fs: 11 });
  s += eq(260, 40, ['R = ', { n: 'v₀^{2} sin 2θ', d: 'g' }]);
  return s;
});

/* ======================= Dynamics / inclines ======================= */
function inclineFBD(kind, p = {}) {
  const th = p.th ?? 30, muK = p.muk ?? 0.385, muS = p.mus ?? 0.6;
  const I = incline(th); const b = I.block(150, 38); const C = b.C; const mg = 72;
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
    const fk = add(C, I.u, muK * N); s += arr(C[0], C[1], fk[0], fk[1], 'f') + tx(fk[0] + 4, fk[1] - 6, 'f_{k}', { c: 'f' });
    const v0 = add(C, I.n, 34), v1 = add(v0, I.u, -38); s += arr(v0[0], v0[1], v1[0], v1[1], 'v') + tx(v1[0] - 4, v1[1] - 4, 'v', { c: 'v', anchor: 'end' });
    s += tx(30, 30, '物块沿斜面下滑：f_{k} 沿斜面向上', { it: false, fs: 12 }) + eq(30, 62, ['f_{k} = μ_{k}N = μ_{k}mg cos θ']) + eq(30, 88, ['a = g(sin θ − μ_{k} cos θ)']);
  } else {
    const L = mg * Math.sin(rad(th)); const fs = add(C, I.u, L); s += arr(C[0], C[1], fs[0], fs[1], 'f') + tx(fs[0] + 4, fs[1] - 6, 'f_{s}', { c: 'f' });
    s += tx(30, 30, '静止：f_{s} = mg sin θ（沿斜面向上）', { it: false, fs: 12 }) + eq(30, 62, ['f_{s} ≤ μ_{s}N']) + eq(30, 88, ['保持静止 ⇔ tan θ ≤ μ_{s}']);
  }
  return s;
}
defI('incline-frictionless', '光滑斜面受力图 · Free-body diagram on a frictionless incline', 'a=g\\sin\\theta', [
  { key: 'th', label: '倾角 θ', min: 15, max: 45, step: 1, value: 30, unit: '°' },
], (p) => inclineFBD('none', p), {
  status: (p) => `a = g sin θ = ${r1(9.8 * Math.sin(rad(p.th ?? 30)))} m/s²（沿斜面向下）`,
});
defI('incline-kinetic', '粗糙斜面（下滑，动摩擦） · Rough incline (sliding down, kinetic friction)', 'a=g(\\sin\\theta-\\mu_k\\cos\\theta)', [
  { key: 'th', label: '倾角 θ', min: 15, max: 45, step: 1, value: 30, unit: '°' },
  { key: 'muk', label: '动摩擦 μk', min: 0.05, max: 0.65, step: 0.005, value: 0.385 },
], (p) => inclineFBD('kinetic', p), {
  status: (p) => {
    const a = 9.8 * (Math.sin(rad(p.th ?? 30)) - (p.muk ?? 0.385) * Math.cos(rad(p.th ?? 30)));
    return a >= 0 ? `a = g(sin θ − μk cos θ) = ${r1(a)} m/s²（沿斜面向下）` : 'μk 过大：释放后物块不会自行下滑';
  },
});
defI('incline-static', '粗糙斜面（静止，静摩擦） · Rough incline (at rest, static friction)', '\\tan\\theta\\le\\mu_s', [
  { key: 'th', label: '倾角 θ', min: 15, max: 45, step: 1, value: 30, unit: '°' },
  { key: 'mus', label: '静摩擦 μs', min: 0.1, max: 0.9, step: 0.01, value: 0.6 },
], (p) => inclineFBD('static', p), {
  status: (p) => {
    const t = Math.tan(rad(p.th ?? 30)), mu = p.mus ?? 0.6;
    return t <= mu ? `tan θ = ${r1(t)} ≤ μs = ${r1(mu)}：保持静止` : `tan θ = ${r1(t)} > μs = ${r1(mu)}：会滑动（图示为临界前）`;
  },
});
def('center-of-mass', '质心：质量加权平均位置 · Center of Mass', '\\vec r_{\\mathrm{cm}}=\\dfrac{\\sum m_i\\vec r_i}{\\sum m_i}', () => {
  const y = 135, x1 = 105, x2 = 285, m1 = 2, m2 = 3, xcm = (m1 * x1 + m2 * x2) / (m1 + m2);
  let s = ln(35, y, 365, y, { w: 2 }) + tx(20, 24, '质量越大，质心越靠近该物体', { it: false, fs: 11 });
  s += circ(x1, y, 16, { fill: COL.v, c: 'v', op: 0.25 }) + tx(x1, y - 24, 'm₁ = 2 kg', { anchor: 'middle', fs: 10 });
  s += circ(x2, y, 22, { fill: COL.f, c: 'f', op: 0.25 }) + tx(x2, y - 30, 'm₂ = 3 kg', { anchor: 'middle', fs: 10 });
  s += ln(x1, y + 16, x1, 178, { c: 'm', dash: '3 3', w: 1 }) + tx(x1, 192, 'x₁', { anchor: 'middle', fs: 11 });
  s += ln(x2, y + 22, x2, 178, { c: 'm', dash: '3 3', w: 1 }) + tx(x2, 192, 'x₂', { anchor: 'middle', fs: 11 });
  s += circ(xcm, y, 5, { fill: 'currentColor' }) + tx(xcm, y - 30, 'x_{cm}', { anchor: 'middle', fs: 11 });
  s += ln(xcm, y + 6, xcm, 196, { c: 'm', dash: '3 3', w: 1 });
  s += eq(20, 238, ['x_{cm} = ', { n: 'm₁x₁ + m₂x₂', d: 'm₁ + m₂' }], { fs: 12 });
  return s;
});
def('system-external-force', '系统：内力成对抵消，外力改变质心运动 · Systems', '\\sum\\vec F_{\\mathrm{ext}}=M\\vec a_{\\mathrm{cm}}', () => {
  const y = 150;
  let s = rect(60, 100, 280, 100, { c: 'm', dash: '5 4', w: 1 }) + tx(64, 94, '系统', { it: false, fs: 11 });
  s += rect(80, 125, 60, 50) + tx(110, 155, 'm₁', { anchor: 'middle' }) + rect(260, 125, 60, 50) + tx(290, 155, 'm₂', { anchor: 'middle' });
  s += spring(140, 165, 260, 165, 8, 5);
  s += arr(140, 140, 200, 140, 'f', 1.8) + tx(170, 132, 'F₂₁', { c: 'f', anchor: 'middle', fs: 10 });
  s += arr(260, 180, 200, 180, 'f', 1.8) + tx(230, 196, 'F₁₂', { c: 'f', anchor: 'middle', fs: 10 });
  s += arr(320, 150, 370, 150, 'f', 2.4) + tx(345, 140, 'F_{ext}', { c: 'f', anchor: 'middle', fs: 11 });
  s += circ(200, 120, 4, { fill: 'currentColor' }) + tx(200, 113, 'x_{cm}', { anchor: 'middle', fs: 10 });
  s += tx(20, 24, '内力成对抵消，只有外力改变系统总动量', { it: false, fs: 11 });
  s += tx(20, 228, 'F₂₁ = −F₁₂（内力）；ΣF_{ext} = M a_{cm}', { it: false, fs: 11 });
  return s;
});
defI('incline-pulley', '斜面 + 顶端滑轮 + 悬挂物（光滑斜面） · Incline with top pulley and hanging mass (frictionless incline)', 'a=\\dfrac{(m_2-m_1\\sin\\theta)g}{m_1+m_2}', [
  { key: 'th', label: '倾角 θ', min: 20, max: 45, step: 1, value: 30, unit: '°' },
  { key: 'ratio', label: 'm₂ / m₁', min: 0.5, max: 2.5, step: 0.1, value: 1.5 },
], (p) => {
  const th = p.th ?? 30, ratio = p.ratio ?? 1.5, m1 = 2, m2 = m1 * ratio;
  const I = incline(th, 40, 225, 280); const b = I.block(120, 34, 'm₁'); const C = b.C; const r = 12;
  let s = I.s + b.svg;
  const Q = add(add(I.top, I.n, 17 - r), I.u, 4); // pulley centre: string (at block-centre height) tangent to its top-left
  const tp = add(Q, I.n, r);
  s += ln(C[0], C[1], tp[0], tp[1], { w: 1.2 }) + circ(Q[0], Q[1], r) + ln(Q[0], Q[1], I.top[0], I.top[1], { w: 2 });
  const hx = Q[0] + r; s += ln(hx, Q[1], hx, 160, { w: 1.2 }) + mass(hx - 16, 160, 32, 30, 'm₂');
  const T1 = add(C, I.u, 40); s += arr(C[0], C[1], T1[0], T1[1], 'f') + tx(T1[0], T1[1] - 10, 'T', { c: 'f' });
  const Nn = add(C, I.n, 36); s += arr(C[0], C[1], Nn[0], Nn[1], 'f') + tx(Nn[0] - 4, Nn[1], 'N', { c: 'f', anchor: 'end' });
  s += arr(C[0], C[1], C[0], C[1] + 42, 'f') + tx(C[0] + 4, C[1] + 50, 'm₁g', { c: 'f' });
  s += arr(hx, 160, hx, 132, 'f') + tx(hx + 5, 140, 'T', { c: 'f' }) + arr(hx, 190, hx, 226, 'f') + tx(hx + 5, 232, 'm₂g', { c: 'f' });
  s += tx(20, 24, ratio > Math.sin(rad(th)) ? '若 m₂ > m₁ sin θ：m₂ 下降，m₁ 沿斜面上滑' : '若 m₂ < m₁ sin θ：m₁ 下滑，m₂ 上升', { it: false, fs: 12 });
  s += eq(20, 58, ['a = ', { n: '(m₂ − m₁ sin θ)g', d: 'm₁ + m₂' }]);
  return s;
}, {
  status: (p) => {
    const th = p.th ?? 30, ratio = p.ratio ?? 1.5;
    const a = 9.8 * (ratio - Math.sin(rad(th))) / (1 + ratio);
    return Math.abs(a) < 0.05 ? 'm₂ = m₁ sin θ：系统可保持静止或匀速' : `a = ${r1(Math.abs(a))} m/s²，${a > 0 ? 'm₂ 下降' : 'm₁ 下滑'}`;
  },
});
defI('atwood', '阿特伍德机（m₂ > m₁，轻绳、无摩擦轻滑轮） · Atwood machine (m₂ > m₁, light string, frictionless pulley)', 'a=\\dfrac{(m_2-m_1)g}{m_1+m_2},\\; T=\\dfrac{2m_1m_2g}{m_1+m_2}', [
  { key: 'm1', label: '质量 m₁', min: 0.5, max: 6, step: 0.1, value: 2, unit: ' kg' },
  { key: 'm2', label: '质量 m₂', min: 0.5, max: 6, step: 0.1, value: 3, unit: ' kg' },
], (p) => {
  const m1 = p.m1 ?? 2, m2 = p.m2 ?? 3, rightDown = m2 >= m1;
  const cx = 130, cy = 52, r = 30; let s = hatch(70, 14, 190) + ln(cx, 14, cx, cy, { w: 2 }) + circ(cx, cy, r) + circ(cx, cy, 3, { fill: 'currentColor' });
  const ly = rightDown ? 150 : 180, ry = rightDown ? 180 : 150;
  s += ln(cx - r, cy, cx - r, ly) + ln(cx + r, cy, cx + r, ry);
  s += mass(cx - r - 18, ly, 36, 30, 'm₁') + mass(cx + r - 20, ry, 40, 40, 'm₂');
  s += arr(cx - r, ly, cx - r, ly - 32, 'f') + tx(cx - r - 6, ly - 22, 'T', { c: 'f', anchor: 'end' }) + arr(cx - r, ly + 30, cx - r, ly + 62, 'f') + tx(cx - r - 6, ly + 62, 'm₁g', { c: 'f', anchor: 'end' });
  s += arr(cx + r, ry, cx + r, ry - 32, 'f') + tx(cx + r + 6, ry - 22, 'T', { c: 'f' }) + arr(cx + r, ry + 40, cx + r, ry + 74, 'f') + tx(cx + r + 6, ry + 72, 'm₂g', { c: 'f' });
  if (Math.abs(m2 - m1) > 0.001) {
    s += arr(cx - r - 40, ly + (rightDown ? 32 : 30), cx - r - 40, ly + (rightDown ? 2 : 60), 'a') + tx(cx - r - 44, ly + (rightDown ? 22 : 50), 'a', { c: 'a', anchor: 'end' });
    s += arr(cx + r + 34, ry + (rightDown ? 6 : 36), cx + r + 34, ry + (rightDown ? 36 : 6), 'a') + tx(cx + r + 40, ry + (rightDown ? 26 : 16), 'a', { c: 'a' });
  }
  s += eq(225, 60, ['a = ', { n: '(m₂ − m₁)g', d: 'm₁ + m₂' }]) + eq(225, 120, ['T = ', { n: '2m₁m₂g', d: 'm₁ + m₂' }]);
  s += tx(225, 168, '两侧张力相等', { it: false, fs: 11 }) + tx(225, 184, '（轻绳、无质量无摩擦滑轮）', { it: false, fs: 11 });
  return s;
}, {
  status: (p) => {
    const m1 = p.m1 ?? 2, m2 = p.m2 ?? 3;
    const a = 9.8 * Math.abs(m2 - m1) / (m1 + m2), T = 2 * m1 * m2 * 9.8 / (m1 + m2);
    return m2 === m1 ? 'm₁ = m₂：a = 0，系统平衡' : `a = ${r1(a)} m/s²，T = ${r1(T)} N`;
  },
});
defI('table-pulley', '桌面滑块 + 桌边滑轮 + 悬挂物 · Table block, edge pulley and hanging mass', 'a=\\dfrac{(m_2-\\mu_k m_1)g}{m_1+m_2}', [
  { key: 'muk', label: '动摩擦 μk', min: 0, max: 0.8, step: 0.02, value: 0.4 },
], (p) => {
  const muk = p.muk ?? 0.4;
  const ty = 130; let s = rect(20, ty, 270, 10) + ln(40, ty + 10, 40, 250) + ln(270, ty + 10, 270, 250);
  const bx = 90, by = ty - 40; s += mass(bx, by, 60, 40, 'm₁');
  const r = 12, sy = ty - 20, Qc = [300, sy + r];
  s += ln(bx + 60, sy, Qc[0], sy, { w: 1.2 }) + circ(Qc[0], Qc[1], r) + ln(Qc[0], Qc[1], 288, ty + 4, { w: 2 }) + ln(Qc[0] + r, Qc[1], Qc[0] + r, 190, { w: 1.2 });
  s += mass(Qc[0] + r - 18, 190, 36, 34, 'm₂');
  const cx = bx + 30;
  s += arr(cx, by, cx, by - 36, 'f') + tx(cx + 5, by - 26, 'N', { c: 'f' }) + arr(cx, by + 40, cx, by + 76, 'f') + tx(cx + 5, by + 74, 'm₁g', { c: 'f' });
  s += arr(bx + 60, sy, bx + 104, sy, 'f') + tx(bx + 84, sy + 16, 'T', { c: 'f' });
  const fk = 34 * muk / 0.4;
  if (fk > 1) { s += arr(bx, by + 36, bx - fk, by + 36, 'f') + tx(bx - fk + 4, by + 28, 'f_{k}', { c: 'f', anchor: 'end' }); }
  const hx = Qc[0] + r; s += arr(hx, 190, hx, 160, 'f') + tx(hx + 6, 172, 'T', { c: 'f' }) + arr(hx, 224, hx, 254, 'f') + tx(hx + 6, 252, 'm₂g', { c: 'f' });
  s += arr(bx + 10, by - 50, bx + 50, by - 50, 'a') + tx(bx + 54, by - 46, 'a', { c: 'a' }) + arr(hx - 30, 196, hx - 30, 226, 'a') + tx(hx - 36, 216, 'a', { c: 'a', anchor: 'end' });
  s += eq(20, 30, ['a = ', { n: '(m₂ − μ_{k}m₁)g', d: 'm₁ + m₂' }]) + tx(200, 34, '（光滑桌面取 μ_{k} = 0）', { it: false, fs: 11 });
  return s;
}, {
  status: (p) => `取 m₁ = 2 kg、m₂ = 3 kg：a = ${r1(9.8 * (3 - (p.muk ?? 0.4) * 2) / 5)} m/s²`,
});

/* ======================= Circular motion ======================= */
function banked(withFriction, p = {}) {
  const th = p.th ?? 25, muS = p.mus ?? 0.37, mg = 60;
  const I = incline(th, 130, 215, 240); const b = I.block(110, 34, 'm'); const C = b.C;
  let s = I.s + b.svg;
  const N = withFriction ? mg / (Math.cos(rad(th)) - muS * Math.sin(rad(th))) : mg / Math.cos(rad(th));
  const Ne = add(C, I.n, N); s += arr(C[0], C[1], Ne[0], Ne[1], 'f') + tx(Ne[0] - 6, Ne[1], 'N', { c: 'f', anchor: 'end' });
  s += arr(C[0], C[1], C[0], C[1] + mg, 'f') + tx(C[0] + 5, C[1] + mg + 6, 'mg', { c: 'f' });
  if (withFriction) { const fe = add(C, I.u, -muS * N); s += arr(C[0], C[1], fe[0], fe[1], 'f') + tx(fe[0] - 2, fe[1] + 16, 'f_{s}', { c: 'f', anchor: 'end' }); }
  s += arr(C[0] - 40, C[1] - 82, C[0] - 100, C[1] - 82, 'a') + tx(C[0] - 104, C[1] - 78, 'a_{c}', { c: 'a', anchor: 'end' });
  s += arc(C[0], C[1], 30, 90, 90 + th, { c: 'm', w: 1 }) + tx(C[0] - 6, C[1] - 34, 'θ', { fs: 11, c: 'm', anchor: 'end' }) + ln(C[0], C[1], C[0], C[1] - 40, { c: 'm', dash: '3 3', w: 1 });
  s += tx(20, 236, '← 圆心方向（水平，指向弯道内侧）', { it: false, fs: 11 });
  if (!withFriction) s += tx(20, 26, '无摩擦：N 的水平分量提供向心力', { it: false, fs: 12 }) + eq(240, 60, ['tan θ = ', { n: 'v^{2}', d: 'rg' }]);
  else s += tx(20, 26, 'v 大于设计速度：f_{s} 沿坡面向下', { it: false, fs: 12 }) + eq(10, 130, ['v_{max}^{2} = rg', { n: 'sin θ + μ_{s} cos θ', d: 'cos θ − μ_{s} sin θ' }], { fs: 11 });
  return s;
}
defI('banked-frictionless', '倾斜弯道（无摩擦） · Banked curve (frictionless)', '\\tan\\theta=\\dfrac{v^2}{rg}', [
  { key: 'th', label: '倾角 θ', min: 15, max: 40, step: 1, value: 25, unit: '°' },
], (p) => banked(false, p), {
  status: (p) => `tan θ = ${Math.tan(rad(p.th ?? 25)).toFixed(3)}，设计速度 v = √(rg tan θ)`,
});
defI('banked-friction', '倾斜弯道（有静摩擦，最大速度） · Banked curve (with static friction, maximum speed)', 'v_{\\max}^2=rg\\,\\dfrac{\\sin\\theta+\\mu_s\\cos\\theta}{\\cos\\theta-\\mu_s\\sin\\theta}', [
  { key: 'th', label: '倾角 θ', min: 15, max: 40, step: 1, value: 25, unit: '°' },
  { key: 'mus', label: '静摩擦 μs', min: 0.1, max: 0.55, step: 0.01, value: 0.37 },
], (p) => banked(true, p), {
  status: (p) => {
    const th = rad(p.th ?? 25), mu = p.mus ?? 0.37;
    const den = Math.cos(th) - mu * Math.sin(th);
    if (den <= 0.02) return 'μs 过大：任意速度都会侧滑';
    const k = (Math.sin(th) + mu * Math.cos(th)) / den;
    return `v_max = √(${k.toFixed(2)} rg)（括号内为 v²/rg）`;
  },
});
defI('conical-pendulum', '圆锥摆 · Conical pendulum', '\\tan\\theta=\\dfrac{v^2}{rg},\\; T_0=2\\pi\\sqrt{\\dfrac{L\\cos\\theta}{g}}', [
  { key: 'th', label: '摆角 θ', min: 20, max: 45, step: 1, value: 35, unit: '°' },
  { key: 'L', label: '摆长 L', min: 130, max: 160, step: 1, value: 160, unit: '' },
], (p) => {
  const th = p.th ?? 35, L = p.L ?? 160;
  const px = 140, py = 30; const bx = px + L * Math.sin(rad(th)), by = py + L * Math.cos(rad(th));
  let s = hatch(90, py, 190) + `<ellipse cx="${px}" cy="${r1(by)}" rx="${r1(bx - px)}" ry="18" style="fill:none;stroke:${COL.m};stroke-dasharray:5 4"/>`;
  s += ln(px, py, px, by, { c: 'm', dash: '4 4' }) + ln(px, py, bx, by) + arc(px, py, 34, -90, -90 + th, { w: 1 }) + tx(px + 6, py + 48, 'θ');
  s += tx((px + bx) / 2 - 10, (py + by) / 2 + 4, 'L', { anchor: 'end' }) + ln(px, by, bx, by, { c: 'm', dash: '3 3' }) + tx((px + bx) / 2, by + 30, 'r', { anchor: 'middle' });
  s += circ(bx, by, 9, { fill: 'currentColor' });
  const Tl = 72; s += arr(bx, by, bx - Tl * Math.sin(rad(th)), by - Tl * Math.cos(rad(th)), 'f') + tx(bx - 34, by - 62, 'T', { c: 'f', anchor: 'end' });
  s += arr(bx, by, bx, by + 59, 'f') + tx(bx + 6, by + 58, 'mg', { c: 'f' }) + arr(bx + 16, by - 20, bx + 16 - 45, by - 20, 'a', 1.8) + tx(bx + 20, by - 16, 'a_{c}', { c: 'a' });
  s += eq(265, 60, ['tan θ = ', { n: 'v^{2}', d: 'rg' }]) + eq(265, 125, ['T₀ = 2π', { sqrt: { n: 'L cos θ', d: 'g' } }], { fs: 12 }) + tx(265, 175, 'T cos θ = mg（T：张力）', { fs: 11 }) + eq(265, 205, ['T sin θ = ', { n: 'mv^{2}', d: 'r' }], { fs: 12 });
  return s;
}, {
  status: (p) => `r = L sin θ = ${r1((p.L ?? 160) * Math.sin(rad(p.th ?? 35)))}，周期 T₀ 随 L cos θ 增大`,
});
defI('vertical-loop', '竖直圆环（物体在轨道内侧） · Vertical loop (object on the inside of the track)', 'v_{\\text{top,min}}=\\sqrt{gR}', [
  { key: 'R', label: '半径 R', min: 60, max: 100, step: 1, value: 95, unit: '' },
], (p) => {
  const R = p.R ?? 95, cx = 130, cy = 128; let s = circ(cx, cy, R) + circ(cx, cy, 2, { fill: 'currentColor' }) + ln(cx, cy, ...pt(cx, cy, R, 135), { c: 'm', dash: '3 3' }) + tx(...pt(cx, cy, 50, 150), 'R');
  s += circ(cx, cy - R + 9, 8, { fill: 'currentColor' }) + arr(cx - 3, cy - R + 9, cx - 3, cy - R + 42, 'f') + tx(cx - 8, cy - R + 42, 'N', { c: 'f', anchor: 'end' });
  s += arr(cx + 3, cy - R + 9, cx + 3, cy - R + 60, 'f') + tx(cx + 8, cy - R + 58, 'mg', { c: 'f' }) + arr(cx - 10, cy - R + 9, cx - 50, cy - R + 9, 'v', 1.8) + tx(cx - 54, cy - R + 5, 'v', { c: 'v', anchor: 'end' });
  s += circ(cx, cy + R - 9, 8, { fill: 'currentColor' }) + arr(cx, cy + R - 9, cx, cy + R - 88, 'f') + tx(cx + 6, cy + R - 72, 'N', { c: 'f' }) + arr(cx, cy + R - 9, cx, cy + R + 24, 'f') + tx(cx + 6, cy + R + 22, 'mg', { c: 'f' });
  s += circ(cx + R - 9, cy, 8, { fill: 'currentColor' }) + arr(cx + R - 9, cy, cx + R - 50, cy, 'f') + tx(cx + R - 46, cy - 6, 'N', { c: 'f' }) + arr(cx + R - 9, cy, cx + R - 9, cy + 40, 'f') + tx(cx + R - 4, cy + 42, 'mg', { c: 'f' });
  s += tx(250, 40, '顶部：N + mg = ', { fs: 12 }) + eq(338, 36, [{ n: 'mv^{2}', d: 'R' }], { fs: 12 });
  s += tx(250, 94, '底部：N − mg = ', { fs: 12 }) + eq(338, 90, [{ n: 'mv^{2}', d: 'R' }], { fs: 12 });
  s += tx(250, 145, '恰好过顶部（N = 0）：', { it: false, fs: 12 }) + eq(260, 180, ['v_{min} = ', { sqrt: 'gR' }]) + tx(250, 225, '侧点：N 指向圆心', { it: false, fs: 11 });
  return s;
}, {
  status: (p) => `R = ${p.R ?? 95}：v_min = √(gR) = ${r1(Math.sqrt(9.8 * (p.R ?? 95)))} m/s（取 R 的数值）`,
});
defI('orbit', '圆轨道卫星 · Satellite in circular orbit', 'v=\\sqrt{\\dfrac{GM}{r}},\\; U=-\\dfrac{GMm}{r},\\; T^2\\propto r^3', [
  { key: 'r', label: '轨道半径 r', min: 70, max: 110, step: 1, value: 95, unit: '' },
], (p) => {
  const r = p.r ?? 95, cx = 130, cy = 130; let s = circ(cx, cy, 26, { fill: 'var(--canvas-plot, transparent)' }) + tx(cx, cy + 5, 'M', { anchor: 'middle' }) + circ(cx, cy, r, { c: 'm', dash: '5 4' });
  const [sx, sy] = pt(cx, cy, r, 40); s += circ(sx, sy, 7, { fill: 'currentColor' }) + tx(sx + 10, sy - 8, 'm');
  s += arr(sx, sy, ...pt(sx, sy, 50, 220), 'f') + tx(...pt(sx, sy, 62, 232), 'F_{g}', { c: 'f' }) + arr(sx, sy, ...pt(sx, sy, 60, 130), 'v') + tx(...pt(sx, sy, 70, 126), 'v', { c: 'v' });
  s += ln(cx, cy, ...pt(cx, cy, r, -30), { c: 'm' }) + tx(...pt(cx, cy, r / 2, -18), 'r');
  s += eq(250, 50, [{ n: 'GMm ', d: 'r^{2}' }, '    =    ', { n: 'mv^{2}', d: 'r' }]) + eq(250, 110, ['v = ', { sqrt: { n: 'GM', d: 'r' } }]) + eq(250, 170, ['U = −', { n: 'GMm', d: 'r' }]) + tx(250, 215, '开普勒：T² ∝ r³', { fs: 11, it: false });
  return s;
}, {
  status: () => 'r 增大：v ∝ r^{−1/2} 减小，T² ∝ r³ 增大',
});

/* ======================= Work / energy ======================= */
defI('force-position', 'F–x 图面积 = 功；弹簧势能曲线 U(x) · Area under F–x graph = work; spring potential energy U(x)', 'W=\\int F\\,dx,\\; U_s=\\dfrac{1}{2}kx^2', [
  { key: 'k', label: '劲度 k', min: 0.3, max: 1, step: 0.05, value: 1 },
], (p) => {
  const k = p.k ?? 1, ymaxF = Math.max(0.35, 1.1 * k), ymaxU = Math.max(0.2, 0.6 * k);
  const A = 0.8, E = 0.5 * k * A * A;
  let s = '';
  // Both graphs use x ∈ [−1, 1] with x = 0 at the same horizontal origin.
  const g1 = graph(40, 30, 130, 120, { fns: [{ f: (t) => (t - 1) * k, c: 'f' }], t1: 2, ymin: -ymaxF, ymax: ymaxF, xl: 'x', yl: 'F' });
  s += g1.s + poly([[g1.X(1), g1.Y(0)], [g1.X(1 + A), g1.Y(k * A)], [g1.X(1 + A), g1.Y(0)], [g1.X(1), g1.Y(0)]], { fill: COL.f, op: 0.18, c: 'f', w: 0.5 }) + tx(g1.X(1 + 0.55 * A), g1.Y(0.18 * k * A), 'W', { anchor: 'middle' });
  s += eq(40, 205, ['W = ', { n: '1', d: '2' }, 'kx^{2}（F_{app} = kx）']);
  const g2 = graph(250, 30, 120, 120, { fns: [{ f: (t) => 0.5 * k * (t - 1) ** 2, c: 'f' }, { f: () => E, c: 'm', dash: '4 3', w: 1.2 }], t1: 2, ymin: 0, ymax: ymaxU, xl: 'x', yl: 'U', vmarks: [{ t: 1 - A, label: '−A' }, { t: 1 + A, label: 'A' }] });
  s += g2.s + tx(g2.X(1), g2.Y(E) - 6, 'E', { anchor: 'middle' });
  s += eq(250, 205, ['F_s = −', { n: 'dU', d: 'dx' }, ' = −kx']);
  return s;
});

defI('drag-terminal', '阻力下落：受力图与 v–t 渐近线 · Falling with drag: free-body diagram and v–t asymptote', 'v_t=\\dfrac{mg}{b}\\;\\text{（线性 / linear）},\\quad v_t=\\sqrt{\\dfrac{mg}{c}}\\;\\text{（二次 / quadratic）}', [
  { key: 'model', label: '阻力模型 · Drag model', type: 'choice', value: 'linear', options: [{ value: 'linear', label: '线性 · linear' }, { value: 'quad', label: '二次 · quadratic' }] },
], (p) => {
  const quad = p.model === 'quad';
  let s = '';
  s += part('fbd', circ(95, 92, 17) + tx(95, 97, 'm', { anchor: 'middle' })
    + arr(95, 74, 95, 30, 'f', 2.4) + tx(103, 48, 'F_{r}', { c: 'f' })
    + arr(95, 110, 95, 158, 'f', 2.4) + tx(103, 143, 'mg', { c: 'f' })
    + arr(122, 106, 122, 150, 'v', 2) + tx(130, 132, 'v', { c: 'v' }), { x: 35, y: 22, w: 138, h: 148 });
  s += tx(95, 190, '合力为零 → a = 0', { anchor: 'middle', it: false, fs: 11 });
  s += tx(95, 208, 'net force zero → a = 0', { anchor: 'middle', it: false, fs: 10 });
  s += tx(95, 228, quad ? 'F_{r} = −c|v|v' : 'F_{r} = −bv', { anchor: 'middle', fs: 12 });

  const lin = (t) => 1 - Math.exp(-t);
  const qua = (t) => Math.tanh(t);
  const sel = quad ? qua : lin;
  const other = quad ? lin : qua;
  const g = graph(238, 42, 120, 126, {
    fns: [{ f: other, c: 'm', w: 1.5, dash: '4 3' }, { f: sel, c: 'v', w: 2.4 }],
    t1: 4, ymin: 0, ymax: 1.25, xl: 't', yl: 'v',
    hmarks: [{ v: 1, label: 'v_{t}' }],
  });
  s += part('graph', g.s, { x: 220, y: 30, w: 164, h: 156 });
  s += tx(300, 190, quad ? '二次模型 · quadratic model' : '线性模型 · linear model', { anchor: 'middle', fs: 11 });
  s += tx(300, 208, quad ? '二次：更快趋近 · quadratic: faster' : '线性：指数趋近 · linear: exponential', { anchor: 'middle', it: false, fs: 10 });
  s += tx(300, 226, '虚线：另一模型 · dashed: other', { anchor: 'middle', it: false, fs: 9 });
  return s;
}, {
  parts: {
    fbd: '受力图：重力向下、阻力向上 · FBD: weight down, drag up',
    graph: 'v–t 图：水平渐近线 vₜ · v–t graph: horizontal asymptote vₜ',
  },
  partsHint: '悬停 / 点击标注 · Hover / tap labels',
});

defI('spring-ideal-nonlinear', '弹簧力：理想胡克与非理想 F–x · Spring force: ideal Hooke vs nonideal F–x', 'F_s=-(kx+\\beta x^{3}),\\quad U(x)=\\dfrac{1}{2}kx^{2}+\\dfrac{1}{4}\\beta x^{4}', [
  { key: 'beta', label: '非线性 β · Nonlinear β', min: 0, max: 1.2, step: 0.1, value: 0.8 },
  { key: 'mode', label: '形变 · Deformation', type: 'choice', value: 'stretch', options: [{ value: 'stretch', label: '拉伸 · stretch' }, { value: 'compress', label: '压缩 · compress' }] },
], (p) => {
  const beta = p.beta ?? 0.8;
  const stretch = p.mode !== 'compress';
  let s = '';
  const wallX = 30, eqX = wallX + 105;
  const mx = stretch ? eqX + 38 : eqX - 34;
  let dia = '';
  dia += vhatch(wallX, 88, 186, true);
  dia += spring(wallX, 166, mx, 166, 10, 7);
  dia += mass(mx, 146, 34, 40, 'm');
  dia += hatch(20, 186, 222);
  dia += ln(eqX, 92, eqX, 180, { c: 'm', dash: '4 3', w: 1 });
  dia += tx(eqX, 84, 'x = 0', { anchor: 'middle', fs: 10 });
  dia += arr(eqX, 128, mx, 128, 'm', 1.2) + tx((eqX + mx) / 2, 120, stretch ? 'x > 0' : 'x < 0', { anchor: 'middle', fs: 10 });
  const fx = stretch ? mx - 52 : mx + 58;
  dia += arr(mx + 17, 112, fx, 112, 'f', 2.2) + tx(stretch ? fx - 6 : fx + 6, 104, 'F_{s}', { c: 'f', anchor: stretch ? 'end' : 'start' });
  s += part('spring', dia, { x: 18, y: 76, w: 212, h: 120 });
  s += tx(112, 212, stretch ? '拉伸：拉回 · stretch: pulls back' : '压缩：推回 · compress: pushes back', { anchor: 'middle', it: false, fs: 9 });

  const g = graph(252, 42, 116, 120, {
    fns: [
      { f: (t) => -(t - 1), c: 'm', w: 1.5, dash: '4 3' },
      { f: (t) => -((t - 1) + beta * (t - 1) ** 3), c: 'f', w: 2.4 },
    ],
    t1: 2, ymin: -2.2, ymax: 2.2, xl: 'x', yl: 'F',
  });
  s += part('graph', g.s, { x: 240, y: 30, w: 150, h: 148 });
  s += ln(g.X(1), 42, g.X(1), 162, { c: 'm', dash: '3 3', w: 0.8 }) + tx(g.X(1), 174, '0', { anchor: 'middle', fs: 10 });
  s += tx(310, 188, '实线 β · solid β', { anchor: 'middle', it: false, fs: 9 });
  s += tx(310, 204, '虚线 理想 · dashed ideal', { anchor: 'middle', it: false, fs: 9 });
  s += tx(310, 220, '越陡越硬 · steeper = stiffer', { anchor: 'middle', it: false, fs: 9 });
  return s;
}, {
  parts: {
    spring: '弹簧—物块：形变与指向平衡位置的力 · Spring–block: deformation and force toward equilibrium',
    graph: 'F–x 图：理想直线与非线性曲线 · F–x graph: ideal line and nonlinear curve',
  },
  partsHint: '悬停 / 点击标注 · Hover / tap labels',
});

defI('work-variable-potential', '变力做功与势能斜率 · Work by a variable force and the slope of U(x)', 'W=\\int_{x_a}^{x_b}F_x\\,\\mathrm{d}x,\\quad F_x=-\\dfrac{\\mathrm{d}U}{\\mathrm{d}x}', [
  { key: 'beta', label: '非线性 β · Nonlinear β', min: 0, max: 1, step: 0.1, value: 0.6 },
], (p) => {
  const beta = p.beta ?? 0.6;
  const A = 0.8;
  const force = (t) => -(t + beta * t ** 3);
  const pot = (t) => 0.5 * t * t + 0.25 * beta * t ** 4;
  let s = '';
  const g1 = graph(44, 42, 118, 118, {
    fns: [{ f: force, c: 'f', w: 2.2 }],
    t1: 1, ymin: -2.2, ymax: 0.4, xl: 'x', yl: 'F',
  });
  const shade = [[g1.X(0), g1.Y(0)]];
  for (let i = 0; i <= 30; i++) { const t = (i / 30) * A; shade.push([g1.X(t), g1.Y(force(t))]); }
  shade.push([g1.X(A), g1.Y(0)]);
  s += part('area', g1.s + poly(shade, { fill: COL.f, op: 0.18, c: 'f', w: 0.5 })
    + tx(g1.X(A / 2), g1.Y(-0.32), 'W_{s} < 0', { anchor: 'middle', fs: 11, c: 'f' }), { x: 32, y: 34, w: 142, h: 144 });
  s += tx(103, 190, 'F_{x} = −(kx + βx³)', { anchor: 'middle', fs: 11 });
  s += tx(103, 208, '面积 = 功（有符号）', { anchor: 'middle', it: false, fs: 10 });
  s += tx(103, 224, 'area = work (signed)', { anchor: 'middle', it: false, fs: 9 });

  const g2 = graph(255, 42, 115, 118, {
    fns: [{ f: pot, c: 'a', w: 2.2 }],
    t1: 1, ymin: 0, ymax: 0.9, xl: 'x', yl: 'U',
  });
  const x0 = 0.70, u0 = pot(x0), slope = x0 + beta * x0 ** 3;
  const tA = 0.44, tB = 0.96;
  s += ln(g2.X(tA), g2.Y(u0 + slope * (tA - x0)), g2.X(tB), g2.Y(u0 + slope * (tB - x0)), { c: 'm', dash: '4 3', w: 1.3 });
  s += tx(g2.X(0.44), g2.Y(0.68), '斜率 = −F_{x}', { anchor: 'middle', fs: 10 });
  s += part('slope', g2.s, { x: 242, y: 34, w: 142, h: 144 });
  s += tx(312, 190, 'U(x) = ½kx² + ¼βx⁴', { anchor: 'middle', fs: 11 });
  s += tx(312, 208, '力指向 U 降低的方向', { anchor: 'middle', it: false, fs: 10 });
  s += tx(312, 224, 'force points toward lower U', { anchor: 'middle', it: false, fs: 9 });
  return s;
}, {
  parts: {
    area: 'F–x 图：曲线下面积 = 变力做功 · F–x graph: area under the curve = work',
    slope: 'U–x 图：切线斜率 = −F_x · U–x graph: tangent slope = −F_x',
  },
  partsHint: '悬停 / 点击标注 · Hover / tap labels',
});

/* ======================= Momentum ======================= */
defI('collision-elastic', '一维弹性碰撞（碰前 / 碰后） · One-dimensional elastic collision (before / after)', "v_1'=\\dfrac{m_1-m_2}{m_1+m_2}v_1,\\; v_2'=\\dfrac{2m_1}{m_1+m_2}v_1", [
  { key: 'ratio', label: 'm₂ / m₁', min: 0.3, max: 3, step: 0.05, value: 1.25 },
], (p) => {
  const ratio = p.ratio ?? 1.25;
  let s = tx(20, 30, '碰前', { it: false, fs: 12 }) + hatch(20, 80, 380) + mass(60, 50, 40, 30, 'm₁') + mass(220, 50, 50, 30, 'm₂') + arr(100, 40, 150, 40, 'v') + tx(152, 44, 'v₁', { c: 'v' }) + tx(245, 44, 'v₂ = 0', { fs: 11, anchor: 'middle' });
  const note = ratio > 1.001 ? '碰后（m₁ < m₂：m₁ 反弹）' : ratio < 0.999 ? '碰后（m₁ > m₂：两者同向）' : '碰后（m₁ = m₂：m₁ 停下）';
  s += tx(20, 120, note, { it: false, fs: 12 }) + hatch(20, 170, 380) + mass(120, 140, 40, 30, 'm₁') + mass(250, 140, 50, 30, 'm₂');
  if (ratio > 1.001) {
    s += arr(120, 130, 90, 130, 'v') + tx(86, 134, "v₁'", { c: 'v', anchor: 'end' });
  } else if (ratio < 0.999) {
    s += arr(160, 130, 190, 130, 'v') + tx(194, 134, "v₁'", { c: 'v' });
  } else {
    s += tx(160, 134, "v₁' = 0", { c: 'v', fs: 11 });
  }
  s += arr(300, 130, 340, 130, 'v') + tx(344, 134, "v₂'", { c: 'v' });
  s += eq(20, 218, ["v₁' = ", { n: 'm₁ − m₂', d: 'm₁ + m₂' }, 'v₁'], { fs: 12 }) + eq(205, 218, ["v₂' = ", { n: '2m₁', d: 'm₁ + m₂' }, 'v₁'], { fs: 12 });
  return s;
}, {
  status: (p) => {
    const r = p.ratio ?? 1.25;
    return `v₁' = ${((1 - r) / (1 + r)).toFixed(2)}v₁，v₂' = ${(2 / (1 + r)).toFixed(2)}v₁`;
  },
});
defI('collision-inelastic', '完全非弹性碰撞（碰后粘在一起） · Perfectly inelastic collision (stick together after)', 'v_f=\\dfrac{m_1v_1}{m_1+m_2}', [
  { key: 'ratio', label: 'm₂ / m₁', min: 0.3, max: 3, step: 0.05, value: 1.25 },
], (p) => {
  const ratio = p.ratio ?? 1.25, len = 67.5 / (1 + ratio);
  let s = tx(20, 30, '碰前', { it: false, fs: 12 }) + hatch(20, 80, 380) + mass(60, 50, 40, 30, 'm₁') + mass(220, 50, 50, 30, 'm₂') + arr(100, 40, 150, 40, 'v') + tx(152, 44, 'v₁', { c: 'v' });
  s += tx(20, 120, '碰后', { it: false, fs: 12 }) + hatch(20, 170, 380) + mass(180, 140, 40, 30, 'm₁') + mass(220, 140, 50, 30, 'm₂') + arr(270, 130, 270 + len, 130, 'v') + tx(274 + len, 134, 'v_{f}', { c: 'v' });
  s += eq(30, 218, ['v_{f} = ', { n: 'm₁v₁', d: 'm₁ + m₂' }]) + eq(190, 218, ['ΔK = −', { n: 'm₁m₂v₁^{2}', d: '2(m₁ + m₂)' }], { fs: 12 });
  return s;
}, {
  status: (p) => `v_f = ${(1 / (1 + (p.ratio ?? 1.25))).toFixed(2)} v₁`,
});
def('collision-2d', '二维碰撞：动量分量守恒 · Two-dimensional collision: momentum components conserved', "m_1v_1=m_1v_1'\\cos\\theta_1+m_2v_2'\\cos\\theta_2", () => {
  const cx = 180, cy = 110; let s = ln(30, cy, 360, cy, { c: 'm', dash: '4 4' });
  s += circ(70, cy, 12) + tx(70, cy + 30, 'm₁', { anchor: 'middle' }) + arr(84, cy, 150, cy, 'v') + tx(110, cy - 8, 'v₁', { c: 'v' }) + circ(cx, cy, 14) + tx(cx, cy + 34, 'm₂（静止）', { anchor: 'middle', fs: 11 });
  s += arrD(cx, cy, 35, 120, 'v') + tx(...pt(cx, cy, 130, 35), "v₁'", { c: 'v' }) + arrD(cx, cy, -40, 95, 'v') + tx(...pt(cx, cy, 108, -40), "v₂'", { c: 'v' });
  s += arc(cx, cy, 44, 0, 35, { w: 1 }) + tx(...pt(cx, cy, 56, 16), 'θ₁', { fs: 12 }) + arc(cx, cy, 36, -40, 0, { w: 1 }) + tx(...pt(cx, cy, 50, -24), 'θ₂', { fs: 12 });
  s += tx(20, 215, "x：m₁v₁ = m₁v₁' cos θ₁ + m₂v₂' cos θ₂", { fs: 12 }) + tx(20, 240, "y：0 = m₁v₁' sin θ₁ − m₂v₂' sin θ₂", { fs: 12 });
  return s;
});
defI('ballistic-pendulum', '冲击摆 · Ballistic pendulum', 'v=\\dfrac{m+M}{m}\\sqrt{2gh}', [
  { key: 'ang', label: '上摆角 θ', min: 20, max: 55, step: 1, value: 32, unit: '°' },
], (p) => {
  const L = 130, ang = p.ang ?? 32, h = L - L * Math.cos(rad(ang));
  let s = hatch(170, 20, 330) + ln(200, 20, 200, 140, { c: 'm', dash: '4 4' }) + ln(260, 20, 260, 140, { c: 'm', dash: '4 4' }) + rect(185, 140, 90, 40, { dash: '4 3', c: 'm', fill: 'none' }) + tx(230, 165, 'M', { anchor: 'middle', c: 'm' });
  const dx = L * Math.sin(rad(ang)), dy = L * Math.cos(rad(ang));
  s += ln(200, 20, 200 + dx, 20 + dy) + ln(260, 20, 260 + dx, 20 + dy) + rect(185 + dx, 20 + dy, 90, 40) + tx(230 + dx, 45 + dy, 'm + M', { anchor: 'middle', fs: 12 });
  s += circ(80, 160, 5, { fill: 'currentColor' }) + arr(88, 160, 150, 160, 'v') + tx(84, 148, 'v（子弹 m）', { c: 'v', fs: 12 });
  s += ln(365, 180, 365, 180 - h, { c: 'm', w: 1 }) + ln(355, 180, 375, 180, { c: 'm', w: 1 }) + ln(355, 180 - h, 375, 180 - h, { c: 'm', w: 1 }) + tx(370, 180 - h / 2 + 4, 'h', { anchor: 'start' });
  s += tx(20, 40, '① 碰撞瞬间：动量守恒', { it: false, fs: 12 }) + tx(20, 60, '② 上摆：机械能守恒', { it: false, fs: 12 }) + eq(20, 225, ['v = ', { n: 'm + M', d: 'm' }, { sqrt: '2gh' }]);
  return s;
}, {
  status: (p) => `h = L(1 − cos θ) = ${r1(130 * (1 - Math.cos(rad(p.ang ?? 32))))}（L 固定）`,
});
defI('impulse-graph', 'F–t 图：曲线下面积 = 冲量 · F–t graph: area under the curve = impulse', 'J=\\int F\\,dt=\\Delta p,\\; F_{avg}=\\dfrac{\\Delta p}{\\Delta t}', [
  { key: 'd', label: '作用时间 Δt', min: 0.3, max: 0.9, step: 0.05, value: 0.6 },
  { key: 'F', label: '峰值 F', min: 0.4, max: 1, step: 0.05, value: 1 },
], (p) => {
  const d = p.d ?? 0.6, Fm = p.F ?? 1, t1 = 0.5 - d / 2, t2 = 0.5 + d / 2;
  const pulse = (t) => (t > t1 && t < t2 ? Fm * Math.sin(((t - t1) / d) * Math.PI) : 0);
  const g = graph(50, 30, 280, 150, { fns: [{ f: pulse, c: 'f' }], t1: 1, ymin: 0, ymax: Math.max(1.15, 1.15 * Fm), yl: 'F', vmarks: [{ t: t1, label: 't₁' }, { t: t2, label: 't₂' }] });
  const pts = []; for (let i = 0; i <= 40; i++) { const t = t1 + i / 40 * d; pts.push([g.X(t), g.Y(pulse(t))]); }
  let s = g.s + poly(pts, { fill: COL.f, op: 0.18, c: 'f', w: 0.5 }) + tx(g.X(0.5), g.Y(0.4 * Fm), 'J', { anchor: 'middle', fs: 16 });
  s += tx(50, 230, 'J = ∫F dt = Δp = mv_{f} − mv_{i}', { fs: 12 }) + eq(270, 226, ['F_{avg} = ', { n: 'Δp', d: 'Δt' }]);
  return s;
});
def('momentum-graph', 'p–t 图：两车弹性碰撞（等质量） · p–t graph: elastic collision of two equal-mass carts', 'p_1+p_2=\\text{const},\\; F=\\dfrac{dp}{dt}', () => {
  const sm = (t) => (t < 0.4 ? 0 : t > 0.6 ? 1 : (1 - Math.cos(((t - 0.4) / 0.2) * Math.PI)) / 2);
  const g = graph(50, 30, 280, 150, { fns: [{ f: (t) => 1 - sm(t), c: 'v' }, { f: (t) => sm(t), c: 'a' }, { f: () => 1, c: 'm', dash: '5 4', w: 1.4 }], t1: 1, ymin: 0, ymax: 1.2, yl: 'p', hmarks: [{ v: 1, label: 'p₀' }], vmarks: [{ t: 0.4 }, { t: 0.6 }] });
  let s = g.s + tx(g.X(0.12), g.Y(1) + 16, 'p₁', { c: 'v' }) + tx(g.X(0.85), g.Y(1) + 16, 'p₂', { c: 'a' }) + tx(g.X(0.08), g.Y(0) - 6, 'p₂ = 0', { c: 'a', fs: 11 }) + tx(g.X(0.78), g.Y(0) - 6, 'p₁ = 0', { c: 'v', fs: 11 });
  s += tx(g.X(0.5), g.Y(1) - 8, 'p₁ + p₂ = p₀', { c: 'm', anchor: 'middle', fs: 11 }) + eq(50, 226, ['F_{on 2} = ', { n: 'dp₂', d: 'dt' }, ' = −', { n: 'dp₁', d: 'dt' }]);
  return s;
});

/* ======================= Rotation ======================= */
defI('rolling-incline', '纯滚动下坡（静摩擦沿坡面向上） · Rolling down an incline (static friction up the slope)', 'a=\\dfrac{g\\sin\\theta}{1+\\dfrac{I}{MR^2}}' + CAP_DESCENT, [
  { key: 'th', label: '倾角 θ', min: 15, max: 33, step: 1, value: 28, unit: '°' },
  { key: 'body', label: '刚体', type: 'choice', value: 'sphere', options: [{ value: 'sphere', label: '实心球' }, { value: 'disk', label: '圆盘' }, { value: 'hoop', label: '圆环' }] },
], (p) => {
  const th = p.th ?? 28, body = p.body ?? 'sphere';
  const spec = body === 'disk' ? { txt: '圆盘', n: '2', d: '3', I: '1/2' } : body === 'hoop' ? { txt: '圆环', n: '1', d: '2', I: '1' } : { txt: '实心球', n: '5', d: '7', I: '2/5' };
  const x0 = 20, y0 = 70, L = 340; const u = [Math.cos(rad(th)), Math.sin(rad(th))]; // down-slope
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
  s += tx(200, 30, 'v_{cm} = Rω；接触点瞬时静止', { it: false, fs: 12 }) + eq(200, 86, ['a = ', { n: 'g sin θ', dPrefix: '1 + ', d: { n: 'I', d: 'MR^{2}' } }]) + tx(230, 159, spec.txt, { it: false, fs: 12 }) + eq(276, 155, ['a = ', { n: spec.n, d: spec.d }, 'g sin θ'], { fs: 12 });
  return s;
}, {
  status: (p) => {
    const th = p.th ?? 28, body = p.body ?? 'sphere';
    const coef = body === 'disk' ? 2 / 3 : body === 'hoop' ? 1 / 2 : 5 / 7;
    return `a = ${coef.toFixed(2)} g sin θ = ${r1(coef * 9.8 * Math.sin(rad(th)))} m/s²`;
  },
});
defI('rolling-velocity', '纯滚动：轮上各点速度（地面参考系） · Rolling without slipping: velocities of points on the wheel (ground frame)', 'v_{\\text{top}}=2v_{cm},\\; v_{\\text{contact}}=0', [
  { key: 'v', label: '质心速度 v_cm', min: 1, max: 5, step: 0.1, value: 3, unit: '' },
], (p) => {
  const v = p.v ?? 3, sc = v / 3, cx = 120, cy = 140, R = 70; let s = hatch(20, cy + R, 380) + circ(cx, cy, R) + circ(cx, cy, 3, { fill: 'currentColor' });
  s += arr(cx, cy - R, cx + 120 * sc, cy - R, 'v') + tx(cx + 124 * sc, cy - R + 4, '2v_{cm}', { c: 'v' }) + arr(cx, cy, cx + 60 * sc, cy, 'v') + tx(cx + 64 * sc, cy + 4, 'v_{cm}', { c: 'v' });
  s += circ(cx, cy + R, 3.5, { fill: COL.v, c: 'v' }) + tx(cx + 8, cy + R - 6, 'v = 0', { c: 'v', fs: 12 });
  const [fx, fy] = pt(cx, cy, R, 180); s += arr(fx, fy, fx + 60 * sc, fy - 60 * sc, 'v', 1.6) + tx(fx - 4, fy + 16, '√2 v_{cm}', { c: 'v', fs: 11, anchor: 'start' });
  s += arc(cx, cy, R + 12, 120, 60, { c: 'a', w: 1.4, me: 'a' }) + tx(cx, cy - R - 18, 'ω', { c: 'a', anchor: 'middle' });
  s += eq(285, 120, ['ω = ', { n: 'v_{cm}', d: 'R' }]) + eq(210, 185, ['K = ', { n: '1', d: '2' }, 'Mv_{cm}^{2} + ', { n: '1', d: '2' }, 'Iω^{2}'], { fs: 12 });
  return s;
}, {
  status: (p) => `v_top = 2v_cm = ${r1(2 * (p.v ?? 3))}，接触点 v = 0`,
});
defI('rod-pivot', '端点转轴均匀细杆（自水平位置释放） · Uniform rod pivoted at one end (released from horizontal)', 'I=\\dfrac{1}{3}ML^2,\\; \\alpha=\\dfrac{3g}{2L}' + CAP_DESCENT, [
  { key: 'L', label: '杆长 L', min: 180, max: 300, step: 1, value: 280, unit: '' },
], (p) => {
  const px = 50, py = 110, L = p.L ?? 280; let s = '';
  s += `<polygon points="${px},${py} ${px - 12},${py + 22} ${px + 12},${py + 22}" style="fill:none;stroke:currentColor;stroke-width:1.5"/>` + hatch(px - 20, py + 22, px + 22);
  s += rect(px, py - 5, L, 10) + circ(px, py, 3.5, { fill: 'currentColor' });
  s += ln(px, py, ...pt(px, py, L, -35), { c: 'm', dash: '6 4', w: 1.2 }) + arc(px, py, 80, -2, -33, { c: 'm', w: 1, me: 'm' });
  s += circ(px + L / 2, py, 3, { fill: 'currentColor' }) + arr(px + L / 2, py, px + L / 2, py + 70, 'f') + tx(px + L / 2 + 6, py + 68, 'Mg', { c: 'f' });
  s += arr(px, py, px, py - 40, 'f') + tx(px + 6, py - 34, 'F_{pivot}', { c: 'f', fs: 12 });
  s += tx(px + L / 4, py - 12, 'L/2', { anchor: 'middle', fs: 12 }) + tx(px + L, py - 12, 'L', { anchor: 'middle', fs: 12 });
  s += eq(40, 220, ['τ = Mg', { n: 'L', d: '2' }, ' = ', { n: '1', d: '3' }, 'ML^{2}α']) + eq(260, 220, ['α = ', { n: '3g', d: '2L' }]);
  return s;
}, {
  status: (p) => `α = 3g/(2L) = ${r1(3 * 9.8 / (2 * (p.L ?? 280)))} rad/s²（取 L 的数值）`,
});
defI('disk-string', '定轴均匀圆盘 + 绕绳悬挂物 · Fixed-axis uniform disk with a hanging mass on a string', 'a=\\dfrac{mg}{m+\\dfrac{I}{R^2}}=\\dfrac{2mg}{2m+M}' + CAP_DESCENT, [
  { key: 'ratio', label: 'M / m', min: 0.5, max: 4, step: 0.1, value: 2 },
], (p) => {
  const ratio = p.ratio ?? 2, span = Math.max(40, Math.min(140, 180 / ratio));
  const cx = 120, cy = 80, R = 52; let s = hatch(70, 14, 170) + ln(cx, 14, cx, cy, { w: 2 }) + circ(cx, cy, R, { fill: 'var(--canvas-plot, transparent)' }) + circ(cx, cy, 3, { fill: 'currentColor' }) + tx(cx - 30, cy + 6, 'M', {});
  s += ln(cx, cy, cx + R, cy, { c: 'm', dash: '3 3' }) + tx(cx + R / 2, cy - 6, 'R', { anchor: 'middle', fs: 12 });
  s += ln(cx + R, cy, cx + R, 180) + mass(cx + R - 18, 180, 36, 30, 'm');
  s += arr(cx + R + 4, cy + 4, cx + R + 4, cy + 46, 'f') + tx(cx + R + 10, cy + 40, 'T（作用于盘）', { c: 'f', fs: 11 });
  s += arr(cx + R, 180, cx + R, 146, 'f') + tx(cx + R + 6, 156, 'T', { c: 'f' }) + arr(cx + R, 210, cx + R, 246, 'f') + tx(cx + R + 6, 246, 'mg', { c: 'f' });
  s += arr(cx + R - 34, 190, cx + R - 34, 224, 'a') + tx(cx + R - 40, 214, 'a', { c: 'a', anchor: 'end' }) + arc(cx, cy, R + 10, 150, 150 - span, { c: 'a', w: 1.4, me: 'a' }) + tx(cx - R - 14, cy - 20, 'α', { c: 'a', anchor: 'end' });
  s += tx(250, 30, 'mg − T = ma', { fs: 12 }) + tx(250, 52, 'TR = Iα，a = Rα', { fs: 12 }) + eq(250, 100, ['a = ', { n: 'mg', dPrefix: 'm + ', d: { n: 'I', d: 'R^{2}' } }]) + eq(250, 165, ['圆盘 I = ', { n: '1', d: '2' }, 'MR^{2}'], { fs: 12 }) + eq(250, 215, ['a = ', { n: '2mg', d: '2m + M' }]);
  return s;
}, {
  status: (p) => `a = 2g/(2 + M/m) = ${r1(2 * 9.8 / (2 + (p.ratio ?? 2)))} m/s²`,
});
def('ladder', '转动静力学：靠墙梯子（光滑墙、粗糙地面） · Rotational statics: ladder against a wall (smooth wall, rough floor)', '\\mu_s\\ge\\dfrac{1}{2\\tan\\theta}', () => {
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
defI('shm-horizontal', '水平弹簧振子（光滑水平面） · Horizontal spring oscillator (frictionless surface)', 'T=2\\pi\\sqrt{\\dfrac{m}{k}},\\; F=-kx', [
  { key: 'x', label: '位置 x', min: -70, max: 70, step: 5, value: 50, unit: '' },
], (p) => {
  const x = p.x ?? 50, y = 150, x0 = 200; let s = vhatch(30, 90, y + 2) + hatch(30, y, 380);
  const bx = x0 + x; s += spring(30, y - 20, bx, y - 20, 12, 9) + mass(bx, y - 40, 44, 40, 'm');
  [[x0 - 70, '−A'], [x0, 'x = 0'], [x0 + 70, '+A']].forEach(([px, l]) => { s += ln(px, y + 4, px, y + 14, { w: 1 }) + tx(px, y + 30, l, { anchor: 'middle', fs: 12 }); });
  if (Math.abs(x) > 2) {
    s += ln(x0, 60, x0, y, { c: 'm', dash: '3 3' }) + ln(bx, 60, bx, y - 40, { c: 'm', dash: '3 3' }) + arr(x0, 70, bx, 70, 'g', 1) + tx((x0 + bx) / 2, 64, 'x', { anchor: 'middle' });
  } else {
    s += ln(x0, 60, x0, y - 40, { c: 'm', dash: '3 3' }) + tx(x0, 64, 'x = 0', { anchor: 'middle' });
  }
  if (Math.abs(x) > 2) {
    const fl = Math.min(56, Math.abs(x) * 56 / 50);
    if (x > 0) s += arr(bx + 22, y - 20, bx + 22 - fl, y - 20, 'f') + tx(bx - 38, y - 28, 'F = −kx', { c: 'f', anchor: 'end', fs: 12 });
    else s += arr(bx - 22, y - 20, bx - 22 + fl, y - 20, 'f') + tx(bx + 26, y - 28, 'F = −kx', { c: 'f', fs: 12 });
  } else {
    s += tx(bx + 28, y - 28, 'F = 0', { c: 'f', fs: 12 });
  }
  s += eq(30, 220, ['T = 2π', { sqrt: { n: 'm', d: 'k' } }]) + eq(200, 220, ['ω = ', { sqrt: { n: 'k', d: 'm' } }]) + tx(40, 28, '端点 ±A：v = 0，|a| 最大', { fs: 11, it: false }) + tx(40, 46, '平衡点 x = 0：|v| 最大，a = 0', { fs: 11, it: false });
  return s;
}, {
  status: (p) => {
    const x = p.x ?? 50;
    return Math.abs(x) < 2 ? 'x = 0：F = 0，速度最大' : `x/A = ${(x / 70).toFixed(2)}，F = −kx 指向平衡位置`;
  },
});
def('shm-vertical', '竖直弹簧振子 · Vertical spring oscillator', '\\Delta y=\\dfrac{mg}{k},\\; T=2\\pi\\sqrt{\\dfrac{m}{k}}', () => {
  let s = hatch(30, 20, 370);
  s += spring(80, 20, 80, 100, 10, 8) + tx(80, 118, '原长', { anchor: 'middle', it: false, fs: 12 });
  s += spring(200, 20, 200, 140, 12, 8) + mass(180, 140, 40, 36, 'm') + ln(90, 100, 330, 100, { c: 'm', dash: '3 3' }) + ln(160, 140, 330, 140, { c: 'm', dash: '3 3' });
  s += arr(250, 100, 250, 140, 'g', 1) + tx(254, 126, 'Δy', { fs: 12 }) + tx(200, 200, '平衡位置', { anchor: 'middle', it: false, fs: 12 });
  s += arr(210, 140, 210, 108, 'f', 1.8) + tx(216, 120, 'kΔy', { c: 'f', fs: 11 }) + arr(190, 176, 190, 210, 'f', 1.8) + tx(184, 212, 'mg', { c: 'f', anchor: 'end', fs: 12 });
  s += spring(320, 20, 320, 175, 14, 8) + mass(300, 175, 40, 36, 'm') + arr(352, 140, 352, 175, 'g', 1) + tx(356, 162, 'y', { fs: 12 }) + tx(320, 228, '偏离平衡 y', { anchor: 'middle', it: false, fs: 12 });
  s += eq(30, 160, ['Δy = ', { n: 'mg', d: 'k' }]) + eq(20, 225, ['T = 2π', { sqrt: { n: 'm', d: 'k' } }], { fs: 12 }) + tx(120, 251, '以平衡位置为原点：F_{net} = −ky（周期与水平时相同）', { fs: 11 });
  return s;
});
defI('pendulum-simple', '单摆（小角度） · Simple pendulum (small angle)', 'T=2\\pi\\sqrt{\\dfrac{L}{g}}', [
  { key: 'th', label: '摆角 θ', min: 5, max: 35, step: 1, value: 25, unit: '°' },
  { key: 'L', label: '摆长 L', min: 120, max: 175, step: 1, value: 170, unit: '' },
], (p) => {
  const th = p.th ?? 25, L = p.L ?? 170, px = 140, py = 26; const bx = px + L * Math.sin(rad(th)), by = py + L * Math.cos(rad(th));
  let s = hatch(90, py, 190) + ln(px, py, px, py + L + 10, { c: 'm', dash: '4 4' }) + ln(px, py, bx, by) + arc(px, py, 40, -90, -90 + th, { w: 1 }) + tx(px + 6, py + 56, 'θ') + tx((px + bx) / 2 + 8, (py + by) / 2, 'L');
  s += circ(bx, by, 10, { fill: 'currentColor' });
  s += arr(bx, by, bx - 66 * Math.sin(rad(th)), by - 66 * Math.cos(rad(th)), 'f') + tx(bx - 34, by - 62, 'T', { c: 'f', anchor: 'end' });
  s += arr(bx, by, bx, by + 62, 'f') + tx(bx + 6, by + 64, 'mg', { c: 'f' });
  const mgs = 62 * Math.sin(rad(th)), mgc = 62 * Math.cos(rad(th));
  if (mgs > 5) s += arr(bx, by, bx - mgs * Math.cos(rad(th)), by + mgs * Math.sin(rad(th)), 'm', 1.4, '4 3') + tx(bx - 30, by + 26, 'mg sin θ', { c: 'm', fs: 11, anchor: 'end' });
  if (mgc > 5) s += arr(bx, by, bx + mgc * Math.sin(rad(th)), by + mgc * Math.cos(rad(th)), 'm', 1.4, '4 3') + tx(bx + 26, by + 50, 'mg cos θ', { c: 'm', fs: 11 });
  s += eq(260, 60, ['T = 2π', { sqrt: { n: 'L', d: 'g' } }]) + tx(260, 115, '回复力 −mg sin θ ≈ −mgθ', { fs: 11 }) + tx(260, 135, '（θ 很小，sin θ ≈ θ）', { it: false, fs: 11 }) + tx(260, 160, 'T 与 m、振幅无关', { it: false, fs: 11 });
  return s;
}, {
  status: (p) => `T ∝ √L：L = ${p.L ?? 170}，θ = ${p.th ?? 25}°（小角近似）`,
});
def('pendulum-physical', '物理摆（刚体绕固定轴摆动） · Physical pendulum (rigid body about a fixed axis)', 'T=2\\pi\\sqrt{\\dfrac{I}{mgd}}', () => {
  const px = 130, py = 40, d = 90, th = 22, Lr = 180; const [cmx, cmy] = [px + d * Math.sin(rad(th)), py + d * Math.cos(rad(th))];
  let s = hatch(90, py - 14, 170) + ln(px, py - 14, px, py, { w: 2 });
  s += `<g transform="translate(${px},${py}) rotate(${-th})">${rect(-9, -12, 18, Lr + 12)}</g>`;
  s += circ(px, py, 3.5, { fill: 'currentColor' }) + tx(px - 10, py - 2, 'P', { anchor: 'end' }) + ln(px, py, px, py + Lr, { c: 'm', dash: '4 4' }) + arc(px, py, 50, -90, -90 + th, { w: 1 }) + tx(px + 6, py + 66, 'θ');
  s += circ(cmx, cmy, 4, { fill: COL.f, c: 'f' }) + tx(cmx + 14, cmy - 2, 'cm', { fs: 11, it: false }) + arr(cmx, cmy, cmx, cmy + 64, 'f') + tx(cmx + 6, cmy + 64, 'mg', { c: 'f' });
  s += tx(px + 26, py + 36, 'd', { fs: 12 });
  s += eq(240, 60, ['T = 2π', { sqrt: { n: 'I', d: 'mgd' } }]) + tx(240, 110, 'τ = −mgd sin θ ≈ −mgdθ', { fs: 12 }) + eq(240, 155, ['均匀杆绕端点：T = 2π', { sqrt: { n: '2L', d: '3g' } }], { fs: 11 }) + tx(240, 205, 'I：绕转轴 P 的转动惯量', { it: false, fs: 11 }) + tx(240, 222, 'd：P 到质心距离', { it: false, fs: 11 });
  return s;
});
def('shm-graphs', 'SHM 的 x、v、a – t 图（x = A cos ωt） · SHM x, v, a–t graphs (x = A cos ωt)', 'v=-A\\omega\\sin\\omega t,\\; a=-A\\omega^2\\cos\\omega t', () => {
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
defI('point-charge-field', '点电荷电场线与等势面 · Point-charge field lines and equipotential surfaces', 'E=\\dfrac{1}{4\\pi\\varepsilon_0}\\dfrac{q}{r^2},\\; V=\\dfrac{kq}{r}', [
  { key: 'q', label: '电荷 q', min: -2, max: 2, step: 0.5, value: 1, fmt: (v) => `${v > 0 ? '+' : ''}${v.toFixed(1)}q` },
], (p) => {
  const q = p.q ?? 1, cx = 130, cy = 130; let s = '';
  [40, 70, 100].forEach((r) => { s += circ(cx, cy, r, { c: 'm', dash: '4 4', w: 1 }); });
  if (Math.abs(q) > 0.01) {
    const nLine = Math.max(2, Math.min(24, Math.round(12 * Math.abs(q)))), stepA = 360 / nLine;
    for (let k = 0; k < nLine; k++) {
      const a = k * stepA + stepA / 2;
      if (q > 0) s += arr(...pt(cx, cy, 16, a), ...pt(cx, cy, 116, a), 'E', 1.2);
      else s += arr(...pt(cx, cy, 116, a), ...pt(cx, cy, 16, a), 'E', 1.2);
    }
  }
  const qc = q >= 0 ? 'E' : 'v';
  s += circ(cx, cy, 12, { fill: COL[qc], op: 0.3, c: qc }) + tx(cx, cy + 5, q >= 0 ? '+q' : '−q', { anchor: 'middle', fs: 12, c: qc });
  s += eq(255, 55, ['E = ', { n: '1', d: '4πε₀' }, { n: 'q', d: 'r^{2}' }]) + eq(255, 120, ['V = ', { n: 'kq', d: 'r' }]) + tx(255, 170, '等势面（虚线）⊥ 电场线', { it: false, fs: 11 }) + tx(255, 190, q >= 0 ? 'E 指向 V 降低方向' : '负电荷：E 指向电荷', { it: false, fs: 11 });
  return s;
}, {
  status: (p) => Math.abs(p.q ?? 1) < 0.01 ? 'q = 0：无电场线' : `|E| ∝ |q|/r²，${(p.q ?? 1) > 0 ? '电场线向外' : '电场线指向电荷'}`,
});
defI('dipole-field', '电偶极子电场（按库仑定律逐点计算方向） · Electric dipole field (direction computed point by point from Coulomb law)', '\\vec E=\\sum_i\\dfrac{kq_i}{r_i^2}\\hat r_i', [
  { key: 'sep', label: '电荷间距 d', min: 50, max: 140, step: 5, value: 120, unit: '' },
], (p) => {
  const sep = p.sep ?? 120, q = [[200 - sep / 2, 130, 1], [200 + sep / 2, 130, -1]]; let s = '';
  for (let x = 40; x <= 360; x += 32) for (let y = 30; y <= 230; y += 28) {
    let ex = 0, ey = 0, near = false;
    for (const [qx, qy, qq] of q) { const dx = x - qx, dy = y - qy, r2 = dx * dx + dy * dy; if (r2 < 500) near = true; const r3 = Math.pow(r2, 1.5); ex += qq * dx / r3; ey += qq * dy / r3; }
    if (near) continue; const m = Math.hypot(ex, ey), L = 14; s += arr(x - ex / m * L / 2, y - ey / m * L / 2, x + ex / m * L / 2, y + ey / m * L / 2, 'E', 1.2);
  }
  s += circ(200 - sep / 2, 130, 12, { fill: COL.E, op: 0.25, c: 'E' }) + tx(200 - sep / 2, 135, '+q', { anchor: 'middle', fs: 12 }) + circ(200 + sep / 2, 130, 12, { fill: COL.v, op: 0.25, c: 'v' }) + tx(200 + sep / 2, 135, '−q', { anchor: 'middle', fs: 12 });
  return s;
}, {
  status: (p) => `d = ${p.sep ?? 120}：电场线由 +q 出发、终止于 −q`,
});
defI('parallel-plate-potential', '平行板间匀强电场与等势线 · Uniform field and equipotential lines between parallel plates', 'E=\\dfrac{\\Delta V}{d}=\\dfrac{\\sigma}{\\varepsilon_0}', [
  { key: 'd', label: '板间距 d', min: 80, max: 170, step: 5, value: 150, unit: '' },
], (p) => {
  const d = p.d ?? 150, top = 125 - d / 2, bot = 125 + d / 2;
  let s = ln(60, top, 280, top, { w: 4 }) + ln(60, bot, 280, bot, { w: 4 });
  for (let x = 75; x <= 270; x += 30) { s += tx(x, top - 8, '+', { anchor: 'middle', it: false }) + tx(x, bot + 20, '−', { anchor: 'middle', it: false }); }
  for (let x = 90; x <= 260; x += 45) s += arr(x, top + 6, x, bot - 6, 'E', 1.4);
  [0.25, 0.5, 0.75].forEach((f, i) => { const y = top + f * d; s += ln(62, y, 278, y, { c: 'm', dash: '5 4', w: 1 }) + tx(286, y + 4, ['V₀ − ¼ΔV', 'V₀ − ½ΔV', 'V₀ − ¾ΔV'][i], { fs: 10 }); });
  s += tx(286, top + 4, 'V₀', { fs: 11 }) + tx(286, bot + 4, 'V₀ − ΔV', { fs: 11 }) + tx(36, 130, 'd', {}) + arr(46, top + 10, 46, bot - 10, 'g', 1) + tx(100, 130, 'E', { c: 'E' });
  s += eq(70, 240, ['E = ', { n: 'ΔV', d: 'd' }, ' = ', { n: 'σ', d: 'ε₀' }], { fs: 12 });
  return s;
}, {
  status: (p) => `d = ${p.d ?? 150}：E ∝ 1/d（ΔV 固定时板距增大，场强减小）`,
});

/* ======================= Gauss ======================= */
defI('gauss-sphere', '高斯面：同心球面（点电荷 / 均匀带电球） · Gaussian surface: concentric sphere (point charge / uniformly charged sphere)', '\\oint\\vec E\\cdot d\\vec A=\\dfrac{Q_{\\text{enc}}}{\\varepsilon_0},\\; E=\\dfrac{Q}{4\\pi\\varepsilon_0 r^2}', [
  { key: 'r', label: '高斯面半径 r', min: 55, max: 105, step: 1, value: 88, unit: '' },
], (p) => {
  const r = p.r ?? 88, cx = 120, cy = 130, R = 38; let s = circ(cx, cy, R, { fill: COL.E, op: 0.15, c: 'E' }) + tx(cx, cy + 5, '+Q', { anchor: 'middle' });
  s += circ(cx, cy, r, { dash: '6 4' }) + `<ellipse cx="${cx}" cy="${cy}" rx="${r}" ry="22" style="fill:none;stroke:${COL.m};stroke-dasharray:4 4"/>`;
  for (let k = 0; k < 8; k++) { const a = 22.5 + k * 45; s += arr(...pt(cx, cy, r - 14, a), ...pt(cx, cy, r + 24, a), 'E', 1.5); }
  s += arr(...pt(cx, cy, r, 90), ...pt(cx, cy, r + 28, 90), 'g', 1.2) + tx(cx + 6, cy - r - 16, 'dA', { fs: 12 });
  s += ln(cx, cy, ...pt(cx, cy, r, -60), { c: 'm' }) + tx(...pt(cx, cy, 62, -48), 'r', {}) + ln(cx, cy, ...pt(cx, cy, R, 200), { c: 'm', w: 1 }) + tx(...pt(cx, cy, R + 6, 205), 'R', { fs: 11, anchor: 'end' });
  s += tx(240, 28, 'E ∥ dA，面上 |E| 处处相同', { it: false, fs: 11 }) + eq(240, 68, ['E·4πr^{2} = ', { n: 'Q_{enc}', d: 'ε₀' }]) + eq(240, 128, ['r > R：E = ', { n: 'Q', d: '4πε₀r^{2}' }], { fs: 12 }) + eq(240, 188, ['r < R：E = ', { n: 'Qr', d: '4πε₀R^{3}' }], { fs: 12 }) + tx(240, 228, '（均匀带电实心球）', { it: false, fs: 10 });
  return s;
}, {
  status: (p) => `r = ${p.r ?? 88} > R = 38：E = Q/(4πε₀r²)`,
});
defI('gauss-cylinder', '高斯面：同轴圆柱面（无限长线电荷 λ） · Gaussian surface: coaxial cylinder (infinite line charge λ)', 'E=\\dfrac{\\lambda}{2\\pi\\varepsilon_0 r}', [
  { key: 'r', label: '高斯面半径 r', min: 30, max: 65, step: 1, value: 50, unit: '' },
], (p) => {
  const r = p.r ?? 50, x1 = 90, x2 = 250, cy = 115; let s = ln(20, cy, 330, cy, { c: 'E', w: 3 }) + tx(336, cy + 4, 'λ', { c: 'E' });
  s += `<ellipse cx="${x1}" cy="${cy}" rx="16" ry="${r}" style="fill:none;stroke:currentColor;stroke-dasharray:6 4"/><ellipse cx="${x2}" cy="${cy}" rx="16" ry="${r}" style="fill:none;stroke:currentColor;stroke-dasharray:6 4"/>`;
  s += ln(x1, cy - r, x2, cy - r, { dash: '6 4' }) + ln(x1, cy + r, x2, cy + r, { dash: '6 4' });
  for (const x of [130, 170, 210]) { s += arr(x, cy - 6, x, cy - r - 26, 'E', 1.5) + arr(x, cy + 6, x, cy + r + 26, 'E', 1.5); }
  s += arr(x2 + 16, cy - 30, x2 + 50, cy - 30, 'g', 1.2) + tx(x2 + 54, cy - 26, 'dA', { fs: 11 }) + tx(x2 + 22, cy - 50, '端面 E ⊥ dA：通量 0', { fs: 10, it: false });
  s += tx(170, cy + r + 44, 'ℓ', { anchor: 'middle' }) + ln(x1 - 34, cy, x1 - 34, cy - r, { c: 'm' }) + tx(x1 - 40, cy - 20, 'r', { anchor: 'end' });
  s += eq(30, 232, ['E·2πrℓ = ', { n: 'λℓ', d: 'ε₀' }]) + eq(220, 232, ['E = ', { n: 'λ', d: '2πε₀r' }]);
  return s;
}, {
  status: (p) => `r = ${p.r ?? 50}：E ∝ 1/r（无限长线电荷）`,
});
def('gauss-plane', '高斯面：无限大带电平面（柱形盒） · Gaussian surface: infinite charged plane (pillbox)', 'E=\\dfrac{\\sigma}{2\\varepsilon_0}', () => {
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
defH('gauss-conductor', '导体静电平衡（内部 E = 0） · Conductor in electrostatic equilibrium (E = 0 inside)', 'E_{\\text{inside}}=0,\\; E_{\\text{surface}}=\\dfrac{\\sigma}{\\varepsilon_0}', {
  charges: '静电平衡时净电荷分布在外表面，内部无净电荷 · In equilibrium the net charge resides on the outer surface, with no net charge inside',
  field: '表面处 E ⊥ 表面；导体内部 E = 0 · E ⊥ surface at the surface; E = 0 inside the conductor',
  gauss: '虚线高斯面完全在导体内：Q_enc = 0 ⇒ E = 0 · Dashed Gaussian surface lies entirely inside: Q_enc = 0 ⇒ E = 0',
}, () => {
  const cx = 120, cy = 130, R = 70;
  let charges = '';
  for (let k = 0; k < 16; k++) { const [x, y] = pt(cx, cy, R - 10, k * 22.5); charges += tx(x, y + 4, '+', { anchor: 'middle', it: false, fs: 11 }); }
  let field = '';
  for (let k = 0; k < 8; k++) { const a = k * 45 + 10; field += arr(...pt(cx, cy, R + 2, a), ...pt(cx, cy, R + 38, a), 'E', 1.5); }
  let s = circ(cx, cy, R, { w: 3 });
  s += part('field', field, { x: 10, y: 20, w: 220, h: 220 });
  s += part('charges', charges, { x: 45, y: 55, w: 150, h: 150 });
  s += part('gauss', circ(cx, cy, 36, { dash: '4 4', c: 'm' }) + tx(cx, cy + 4, 'E = 0', { anchor: 'middle' }), { x: 80, y: 90, w: 80, h: 80 });
  s += tx(240, 50, '电荷分布在外表面', { it: false, fs: 11 }) + tx(240, 72, '表面处 E ⊥ 表面', { it: false, fs: 11 }) + tx(240, 94, '整个导体为等势体', { it: false, fs: 11 }) + eq(240, 140, ['E_{surface} = ', { n: 'σ', d: 'ε₀' }]) + tx(240, 190, '虚线高斯面内 Q_{enc} = 0', { fs: 11 });
  return s;
}, {
  partsHint: '悬停 / 点击表面电荷、外部电场或高斯面：高亮对应部分 · Hover / click surface charge, external field or Gaussian surface to highlight it',
});

/* ======================= Capacitors ======================= */
defI('capacitor-plate', '平行板电容器 · Parallel-plate capacitor', 'C=\\dfrac{\\varepsilon_0A}{d},\\; U=\\dfrac{1}{2}CV^2', [
  { key: 'd', label: '板间距 d', min: 60, max: 130, step: 5, value: 120, unit: '' },
], (p) => {
  const d = p.d ?? 120, yb = 50 + d;
  let s = rect(80, 40, 200, 10, { fill: COL.E, op: 0.2, c: 'E' }) + rect(80, yb, 200, 10, { fill: COL.v, op: 0.2, c: 'v' }) + tx(290, 50, '+Q', {}) + tx(290, yb + 10, '−Q', {});
  for (let x = 100; x <= 260; x += 32) s += arr(x, 54, x, yb - 4, 'E', 1.4);
  const cy = (54 + yb - 2) / 2;
  s += arr(60, cy, 60, 52, 'g', 1) + arr(60, cy, 60, yb - 2, 'g', 1) + tx(52, cy + 3, 'd', { anchor: 'end' }) + tx(180, 34, 'A', { anchor: 'middle' }) + tx(112, cy + 5, 'E', { c: 'E' });
  s += eq(30, 225, ['C = ', { n: 'ε₀A', d: 'd' }]) + eq(150, 225, ['E = ', { n: 'σ', d: 'ε₀' }]) + eq(260, 225, ['U = ', { n: '1', d: '2' }, 'CV^{2}'], { fs: 12 });
  return s;
}, {
  status: (p) => `d = ${p.d ?? 120}：C ∝ 1/d（A 固定）`,
});
defH('capacitor-dielectric', '电容器充满电介质 κ · Capacitor filled with dielectric κ', 'C=\\kappa\\dfrac{\\varepsilon_0A}{d},\\; E=\\dfrac{E_0}{\\kappa}', {
  plates: '极板带 ±Q；断开电源时 Q 不变，接电源时 V 不变 · Plates carry ±Q; Q is fixed when disconnected, V is fixed when connected',
  dielectric: '电介质 κ > 1：电容增大为 C = κε₀A/d · Dielectric κ > 1: capacitance becomes C = κε₀A/d',
  bound: '介质表面出现束缚电荷，削弱板间电场 · Bound charges on the dielectric surfaces weaken the field between the plates',
  field: '板间场强减小为 E = E₀/κ · Field between the plates drops to E = E₀/κ',
}, () => {
  const plateTop = rect(70, 40, 200, 10, { fill: COL.E, op: 0.2, c: 'E' }) + tx(278, 50, '+Q', {});
  const plateBot = rect(70, 170, 200, 10, { fill: COL.v, op: 0.2, c: 'v' }) + tx(278, 180, '−Q', {});
  let s = part('plates', plateTop, { x: 60, y: 32, w: 230, h: 24 }) + part('plates', plateBot, { x: 60, y: 162, w: 230, h: 24 });
  s += part('dielectric', rect(70, 54, 200, 112, { fill: COL.B, op: 0.1, c: 'B', dash: '3 2' }) + tx(250, 112, 'κ', { c: 'B', fs: 16 }), { x: 60, y: 44, w: 220, h: 132 });
  let bound = '';
  for (let x = 85; x <= 260; x += 25) { bound += tx(x, 68, '−', { anchor: 'middle', it: false, fs: 12, c: 'B' }) + tx(x, 162, '+', { anchor: 'middle', it: false, fs: 12, c: 'B' }); }
  s += part('bound', bound, { x: 70, y: 56, w: 205, h: 118 });
  let field = '';
  for (let x = 100; x <= 240; x += 46) field += arr(x, 76, x, 146, 'E', 1.4);
  field += eq(70, 112, ['E = ', { n: 'E₀', d: 'κ' }], { fs: 12, c: 'E' });
  s += part('field', field, { x: 64, y: 92, w: 76, h: 64 });
  s += tx(300, 100, '介质表面', { it: false, fs: 10, c: 'B' }) + tx(300, 114, '束缚电荷', { it: false, fs: 10, c: 'B' }) + tx(300, 128, '削弱板间场', { it: false, fs: 10, c: 'B' });
  s += eq(30, 222, ['C = κ', { n: 'ε₀A', d: 'd' }]) + tx(160, 214, '断开电源（Q 不变）：V ↓、U ↓', { it: false, fs: 10 }) + tx(160, 232, '接上电源（V 不变）：Q ↑、U ↑', { it: false, fs: 10 });
  return s;
}, {
  partsHint: '悬停 / 点击极板、介质、束缚电荷或电场：高亮对应部分 · Hover / click plates, dielectric, bound charge or field to highlight it',
});
def('capacitor-dielectric-partial', '部分填充电介质：并联型 / 串联型 · Partially filled capacitor: parallel-type / series-type', 'C_{\\parallel}=\\dfrac{\\varepsilon_0A}{2d}(1+\\kappa),\\; C_{\\text{series}}=\\dfrac{2\\kappa\\varepsilon_0A}{(1+\\kappa)d}', () => {
  let s = tx(20, 24, '左右各半（等效并联）', { it: false, fs: 12 }) + ln(30, 50, 170, 50, { w: 3 }) + ln(30, 150, 170, 150, { w: 3 }) + rect(100, 52, 70, 96, { fill: COL.B, op: 0.15, c: 'B' }) + tx(135, 105, 'κ', { c: 'B', fs: 16, anchor: 'middle' });
  s += tx(65, 105, '真空', { it: false, fs: 11, anchor: 'middle' }) + tx(100, 170, 'A/2 | A/2', { fs: 11, anchor: 'middle' });
  s += tx(210, 24, '上下各半（等效串联）', { it: false, fs: 12 }) + ln(215, 50, 355, 50, { w: 3 }) + ln(215, 150, 355, 150, { w: 3 }) + rect(215, 100, 140, 48, { fill: COL.B, op: 0.15, c: 'B' }) + tx(285, 130, 'κ', { c: 'B', fs: 16, anchor: 'middle' }) + tx(285, 80, '真空', { it: false, fs: 11, anchor: 'middle' }) + tx(360, 80, 'd/2', { fs: 11 }) + tx(360, 128, 'd/2', { fs: 11 });
  s += eq(20, 220, ['C = ', { n: 'ε₀A', d: '2d' }, '(1 + κ)'], { fs: 12 }) + eq(210, 220, ['C = ', { n: '2κε₀A', d: '(1 + κ)d' }], { fs: 12 });
  return s;
});

/* ======================= DC circuits ======================= */
defI('circuit-series', '串联电路 · Series circuit', 'R_{eq}=R_1+R_2+R_3,\\; I=\\dfrac{\\mathcal{E}}{R_{eq}}', [
  { key: 'r1', label: 'R₁', min: 1, max: 8, step: 0.5, value: 2, unit: ' Ω' },
  { key: 'r2', label: 'R₂', min: 1, max: 8, step: 0.5, value: 3, unit: ' Ω' },
  { key: 'r3', label: 'R₃', min: 1, max: 8, step: 0.5, value: 4, unit: ' Ω' },
], (p) => {
  const req = (p.r1 ?? 2) + (p.r2 ?? 3) + (p.r3 ?? 4), ik = Math.max(0.35, Math.min(1.8, 9 / req));
  const L = 60, R = 290, T = 50, B = 180; let s = battery(L, B, L, T, 'ℰ', true) + resistor(L, T, 175, T, 'R₁') + resistor(175, T, R, T, 'R₂') + resistor(R, T, R, B, 'R₃') + ln(R, B, L, B);
  s += arr(100, T + 14, 100 + 30 * ik, T + 14, 'I', 1.6) + tx(115, T + 30, 'I', { c: 'I', anchor: 'middle' }) + arr(R - 14, 100, R - 14, 100 + 30 * ik, 'I', 1.6) + arr(200, B - 12, 200 - 40 * ik, B - 12, 'I', 1.6);
  s += tx(320, 90, '各处电流', { it: false, fs: 11 }) + tx(320, 106, '相同', { it: false, fs: 11 }) + eq(40, 230, ['R_{eq} = R₁ + R₂ + R₃']) + eq(260, 230, ['I = ', { n: 'ℰ', d: 'R_{eq}' }]);
  return s;
}, {
  status: (p) => {
    const req = (p.r1 ?? 2) + (p.r2 ?? 3) + (p.r3 ?? 4);
    return `R_eq = ${r1(req)} Ω，I 等于 ℰ 除以 R_eq（各电阻 I 相同）`;
  },
});
defI('circuit-parallel', '并联电路 · Parallel circuit', '\\dfrac{1}{R_{eq}}=\\dfrac{1}{R_1}+\\dfrac{1}{R_2},\\; I=I_1+I_2', [
  { key: 'r1', label: 'R₁', min: 1, max: 8, step: 0.5, value: 3, unit: ' Ω' },
  { key: 'r2', label: 'R₂', min: 1, max: 8, step: 0.5, value: 6, unit: ' Ω' },
], (p) => {
  const r1 = p.r1 ?? 3, r2 = p.r2 ?? 6, req = 1 / (1 / r1 + 1 / r2);
  const sT = Math.max(0.35, Math.min(1.8, 2 / req)), s1 = Math.max(0.35, Math.min(1.8, 3 / r1)), s2 = Math.max(0.35, Math.min(1.8, 6 / r2));
  const L = 60, T = 40, B = 170; let s = battery(L, B, L, T, 'ε', true) + ln(L, T, 270, T) + ln(L, B, 270, B) + resistor(170, T, 170, B, 'R₁') + resistor(270, T, 270, B, 'R₂') + node(170, T) + node(170, B);
  s += arr(95, T - 10, 95 + 40 * sT, T - 10, 'I', 1.6) + tx(115, T - 16, 'I', { c: 'I', anchor: 'middle' }) + arr(158, 70, 158, 70 + 24 * s1, 'I', 1.6) + tx(152, 88, 'I₁', { c: 'I', anchor: 'end', fs: 12 }) + arr(258, 70, 258, 70 + 24 * s2, 'I', 1.6) + tx(252, 88, 'I₂', { c: 'I', anchor: 'end', fs: 12 });
  s += tx(300, 100, '各支路', { it: false, fs: 11 }) + tx(300, 116, '电压 = ε', { it: false, fs: 11 }) + eq(30, 225, [{ n: '1', d: 'R_{eq}' }, ' = ', { n: '1', d: 'R₁' }, ' + ', { n: '1', d: 'R₂' }]) + eq(230, 225, ['I = I₁ + I₂']);
  return s;
}, {
  status: (p) => {
    const r1 = p.r1 ?? 3, r2 = p.r2 ?? 6, req = 1 / (1 / r1 + 1 / r2);
    return `R_eq = ${req.toFixed(2)} Ω；I₁ : I₂ = ${r2} : ${r1}（电压相同）`;
  },
});
defI('circuit-kirchhoff', '双回路电路：基尔霍夫定律 · Two-loop circuit: Kirchhoff laws', '\\sum_{\\text{loop}}\\Delta V=0,\\; \\sum I_{\\text{in}}=\\sum I_{\\text{out}}', [
  { key: 'e1', label: '电动势 ε₁', min: 3, max: 20, step: 0.5, value: 12, unit: ' V' },
  { key: 'e2', label: '电动势 ε₂', min: 3, max: 20, step: 0.5, value: 9, unit: ' V' },
  { key: 'r2', label: '中支路 R₂', min: 1, max: 8, step: 0.5, value: 3, unit: ' Ω' },
], (p) => {
  const e1 = p.e1 ?? 12, e2 = p.e2 ?? 9, R1 = 2, R2 = p.r2 ?? 3, R3 = 4;
  const det = (R1 + R2) * R3 + R1 * R2;
  const I2 = (e1 * R3 + R1 * e2) / det, I3 = ((R1 + R2) * e2 - R2 * e1) / det, I1 = I2 - I3;
  const baseI1 = 2.1923076923076925, baseI2 = 2.5384615384615383, baseI3 = 0.34615384615384615;
  const len1 = Math.max(14, Math.min(55, 40 * Math.abs(I1) / baseI1));
  const len2 = Math.max(10, Math.min(40, 26 * Math.abs(I2) / baseI2));
  const len3 = Math.max(10, Math.min(55, 40 * Math.abs(I3) / baseI3));
  const T = 40, B = 170; let s = battery(40, B, 40, T, 'ε₁', true) + resistor(40, T, 200, T, 'R₁') + resistor(200, T, 200, B, 'R₂', { dx: 12 }) + ln(200, B, 40, B) + resistor(200, T, 360, T, 'R₃') + battery(360, B, 360, T, '', true) + tx(386, 110, 'ε₂', {}) + ln(360, B, 200, B) + node(200, T) + node(200, B);
  s += (I1 >= 0 ? arr(100, T + 14, 100 + len1, T + 14, 'I', 1.5) : arr(100 + len1, T + 14, 100, T + 14, 'I', 1.5)) + tx(120, T + 30, 'I₁', { c: 'I', fs: 12, anchor: 'middle' });
  s += (I3 >= 0 ? arr(300, T + 14, 300 - len3, T + 14, 'I', 1.5) : arr(300 - len3, T + 14, 300, T + 14, 'I', 1.5)) + tx(280, T + 30, 'I₃', { c: 'I', fs: 12, anchor: 'middle' });
  s += (I2 >= 0 ? arr(186, 74, 186, 74 + len2, 'I', 1.5) : arr(186, 74 + len2, 186, 74, 'I', 1.5)) + tx(180, 92, 'I₂', { c: 'I', fs: 12, anchor: 'end' });
  s += arc(120, 112, 26, 150, -150, { c: 'm', w: 1, me: 'm' }) + arc(290, 112, 26, 150, -150, { c: 'm', w: 1, me: 'm' });
  s += tx(20, 205, '结点：I₂ = I₁ + I₃', { fs: 12 }) + tx(20, 228, '左回路：ε₁ − I₁R₁ − I₂R₂ = 0', { fs: 12 }) + tx(20, 251, '右回路：ε₂ − I₃R₃ − I₂R₂ = 0', { fs: 12 });
  return s;
}, {
  status: (p) => {
    const e1 = p.e1 ?? 12, e2 = p.e2 ?? 9, R1 = 2, R2 = p.r2 ?? 3, R3 = 4;
    const det = (R1 + R2) * R3 + R1 * R2;
    const I2 = (e1 * R3 + R1 * e2) / det, I3 = ((R1 + R2) * e2 - R2 * e1) / det, I1 = I2 - I3;
    return `I₁ = ${I1.toFixed(2)} A，I₂ = ${I2.toFixed(2)} A，I₃ = ${I3.toFixed(2)} A`;
  },
});
defI('power-series-parallel', '电功率：串联（I 相同）与并联（V 相同） · Electric power: series (same I) and parallel (same V)', 'P=IV=I^{2}R=\\dfrac{V^{2}}{R}' + CAP_DESCENT, [
  { key: 'ratio', label: 'R₂ / R₁', min: 0.5, max: 3, step: 0.1, value: 2 },
], (p) => {
  const ratio = p.ratio ?? 2, nr = Number.isInteger(ratio) ? String(ratio) : ratio.toFixed(1);
  let ser = tx(22, 24, '串联：I 相同 → P ∝ R', { it: false, fs: 11 });
  const L = 35, R = 185, T = 56, B = 158;
  ser += battery(L, B, L, T, 'ε', true) + ln(L, T, R, T) + resistor(L, T, 110, T, 'R₁') + resistor(110, T, R, T, 'R₂') + ln(R, T, R, B) + ln(R, B, L, B);
  ser += arr(160, B - 10, 120, B - 10, 'I', 1.4) + tx(140, B + 6, 'I', { c: 'I', anchor: 'middle', fs: 11 });
  ser += tx(110, 190, `P₁ : P₂ = R₁ : R₂ = 1 : ${nr}`, { it: false, fs: 10, anchor: 'middle' });
  let par = tx(218, 24, '并联：V 相同 → P ∝ 1/R', { it: false, fs: 11 });
  const L2 = 225, R2 = 370, T2 = 56, B2 = 158;
  par += battery(L2, B2, L2, T2, 'ε', true) + ln(L2, T2, R2, T2) + ln(L2, B2, R2, B2);
  par += resistor(295, 80, 295, 140, 'R₁') + ln(295, T2, 295, 80) + ln(295, 140, 295, B2);
  par += resistor(365, 80, 365, 140, 'R₂') + ln(365, T2, 365, 80) + ln(365, 140, 365, B2);
  par += node(295, T2) + node(295, B2) + node(365, T2) + node(365, B2);
  par += arr(240, T2 - 10, 270, T2 - 10, 'I', 1.4) + tx(255, T2 - 16, 'I', { c: 'I', anchor: 'middle', fs: 11 });
  par += arr(295, 62, 295, 78, 'I', 1.2) + tx(288, 72, 'I₁', { c: 'I', anchor: 'end', fs: 11 });
  par += arr(365, 62, 365, 78, 'I', 1.2) + tx(372, 72, 'I₂', { c: 'I', fs: 11 });
  par += tx(297, 190, `P₁ : P₂ = R₂ : R₁ = ${nr} : 1`, { it: false, fs: 10, anchor: 'middle' });
  let s = part('series', ser, { x: 18, y: 14, w: 186, h: 186 }) + part('parallel', par, { x: 210, y: 14, w: 180, h: 186 });
  s += eq(20, 216, ['P = IV = I²R = ', { n: 'V²', d: 'R' }], { fs: 13 });
  s += tx(20, 244, `同一电源、R₂ = ${nr}R₁：串联时 R₂ 更亮，并联时 R₁ 更亮`, { it: false, fs: 10 });
  return s;
}, {
  parts: {
    series: '串联：I 相同，P = I²R，所以 P ∝ R；R₂ 更大时 R₂ 更亮 · Series: same I, P = I²R, so P ∝ R; the larger R₂ is brighter',
    parallel: '并联：V 相同，P = V²/R，所以 P ∝ 1/R；R₁ 更小时 R₁ 更亮 · Parallel: same V, P = V²/R, so P ∝ 1/R; the smaller R₁ is brighter',
  },
  partsHint: '悬停 / 点击串联或并联部分：查看功率分配 · Hover / click the series or parallel part to see power distribution',
  status: (p) => `R₂/R₁ = ${(p.ratio ?? 2).toFixed(1)}：串联 P₂/P₁ = ${(p.ratio ?? 2).toFixed(1)}，并联 P₁/P₂ = ${(p.ratio ?? 2).toFixed(1)}`,
});
defI('kirchhoff-loop-signs', '基尔霍夫环路：绕行方向与电压符号 · Kirchhoff loop: traversal direction and voltage signs', '\\sum_{\\text{loop}}\\Delta V=0' + CAP_DESCENT, [
  { key: 'dir', label: '绕行方向', type: 'choice', value: 'cw', options: [{ value: 'cw', label: '顺时针' }, { value: 'ccw', label: '逆时针' }] },
], (p) => {
  const cw = (p.dir ?? 'cw') === 'cw';
  const L = 45, R = 345, T = 60, B = 175;
  let s = battery(L, B, L, T, '', true) + tx(8, 104, 'ε₁', { fs: 12 }) + tx(8, 124, cw ? '+ε₁' : '−ε₁', { c: cw ? 'a' : 'f', fs: 11 });
  s += resistor(L, T, R, T, '') + tx(195, 46, 'R₁', { anchor: 'middle' }) + tx(195, 82, cw ? '−IR₁' : '+IR₁', { anchor: 'middle', c: cw ? 'f' : 'a', fs: 12 });
  s += battery(R, T, R, B, '', false) + tx(358, 145, 'ε₂', { fs: 12 }) + tx(358, 162, cw ? '−ε₂' : '+ε₂', { c: cw ? 'f' : 'a', fs: 11 });
  s += resistor(R, B, L, B, '') + tx(195, 190, 'R₂', { anchor: 'middle' }) + tx(195, 158, cw ? '−IR₂' : '+IR₂', { anchor: 'middle', c: cw ? 'f' : 'a', fs: 12 });
  s += (cw ? arc(195, 118, 24, 140, -140, { c: 'm', w: 1.2, me: 'm' }) : arc(195, 118, 24, -140, 140, { c: 'm', w: 1.2, me: 'm' })) + tx(195, 122, 'I', { c: 'I', anchor: 'middle', fs: 13 });
  s += eq(20, 214, [cw ? '+ε₁ − IR₁ − ε₂ − IR₂ = 0' : '−ε₁ + IR₁ + ε₂ + IR₂ = 0'], { fs: 13 });
  s += tx(20, 241, cw ? '沿绕行方向：电池 −→+ 记 +ε；电阻顺电流记 −IR' : '逆时针：电池 +→− 记 −ε；电阻逆电流记 +IR', { it: false, fs: 10 });
  return s;
}, {
  status: (p) => (p.dir ?? 'cw') === 'cw' ? '绕行方向与图中电流 I 同向（顺时针）' : '绕行方向与电流 I 反向（逆时针）：电阻项变号',
});
defI('kirchhoff-junction', '基尔霍夫结点：流入电流之和 = 流出电流之和 · Kirchhoff junction: sum of currents in = sum of currents out', '\\sum I_{\\text{in}}=\\sum I_{\\text{out}}', [
  { key: 'i1', label: '流入 I₁', min: 0, max: 5, step: 0.5, value: 2, unit: ' A' },
  { key: 'i2', label: '流入 I₂', min: 0, max: 5, step: 0.5, value: 1, unit: ' A' },
  { key: 'i3', label: '流出 I₃', min: 0, max: 5, step: 0.5, value: 1.5, unit: ' A' },
], (p) => {
  const i1 = p.i1 ?? 2, i2 = p.i2 ?? 1, i3 = p.i3 ?? 1.5, i4 = i1 + i2 - i3;
  const cx = 200, cy = 120;
  const l1 = Math.max(18, Math.min(130, 120 * i1 / 2)), l2 = Math.max(18, Math.min(100, 55 * i2)), l3 = Math.max(18, Math.min(130, 120 * i3 / 1.5)), l4 = Math.max(16, Math.min(90, 45 * Math.abs(i4) / 1.5));
  let s = ln(45, cy, cx, cy) + ln(cx, 35, cx, cy) + ln(cx, cy, 355, cy) + ln(cx, cy, cx, 195);
  if (i1 > 0.01) s += arr(55, cy, 55 + l1, cy, 'I', 1.6);
  s += tx(100, cy - 10, 'I₁', { c: 'I', fs: 12, anchor: 'middle' });
  if (i2 > 0.01) s += arr(cx, 45, cx, 45 + l2, 'I', 1.6);
  s += tx(cx + 12, 78, 'I₂', { c: 'I', fs: 12 });
  if (i3 > 0.01) s += arr(225, cy, 225 + l3, cy, 'I', 1.6);
  s += tx(300, cy - 10, 'I₃', { c: 'I', fs: 12, anchor: 'middle' });
  if (Math.abs(i4) > 0.01) s += (i4 > 0 ? arr(cx, 140, cx, 140 + l4, 'I', 1.6) : arr(cx, 140 + l4, cx, 140, 'I', 1.6));
  s += tx(cx + 12, 172, i4 >= 0 ? 'I₄' : 'I₄（反向）', { c: 'I', fs: 12 });
  s += circ(cx, cy, 24, { c: 'm', dash: '4 3' }) + node(cx, cy);
  s += tx(228, 156, '结点', { it: false, fs: 10, c: 'm' });
  s += tx(78, 96, '流入', { it: false, fs: 10, c: 'I' }) + tx(300, 96, '流出', { it: false, fs: 10, c: 'I' });
  s += eq(55, 230, ['I₁ + I₂ = I₃ + I₄'], { fs: 13 });
  s += tx(55, 252, 'ΣI = 0（流入取 +，流出取 −）；结点无电荷积累', { it: false, fs: 10 });
  return s;
}, {
  status: (p) => `I₄ = I₁ + I₂ − I₃ = ${((p.i1 ?? 2) + (p.i2 ?? 1) - (p.i3 ?? 1.5)).toFixed(1)} A`,
});
def('rc-circuit', 'RC 电路（单刀双掷开关：a 充电 / b 放电） · RC circuit (SPDT switch: a charging / b discharging)', '\\tau=RC', () => {
  const L = 60, T = 50, B = 190, sx = 150; let s = battery(L, B, L, T, 'ε', true) + ln(L, T, 120, T);
  // pole at (sx, T+30) can connect up to a (battery side) or down to b (discharge path)
  s += circ(120, T, 2.5, { fill: 'currentColor' }) + tx(116, T - 8, 'a', { it: false, fs: 12, anchor: 'end' });
  s += circ(sx, T + 30, 2.5, { fill: 'currentColor' }) + ln(sx, T + 30, 124, T + 4) + tx(sx + 6, T + 24, 'S', { fs: 12 });
  s += circ(120, T + 60, 2.5, { fill: 'currentColor' }) + tx(116, T + 64, 'b', { it: false, fs: 12, anchor: 'end' }) + ln(120, T + 60, 120, B) + node(120, B);
  s += ln(sx, T + 30, 200, T + 30) + resistor(200, T + 30, 300, T + 30, 'R') + capacitor(300, T + 30, 300, B, 'C') + ln(300, B, L, B);
  s += tx(20, 232, 'S 接 a：电源经 R 给 C 充电', { it: false, fs: 11 }) + tx(20, 250, 'S 接 b：C 经 R 放电（不经电源）', { it: false, fs: 11 }) + eq(300, 240, ['τ = RC']);
  return s;
});
defI('rc-charging', 'RC 充电：q(t) 与 I(t) · RC charging: q(t) and I(t)', 'q=C\\varepsilon\\left(1-e^{-\\dfrac{t}{RC}}\\right),\\; I=\\dfrac{\\varepsilon}{R}e^{-\\dfrac{t}{RC}}', [
  { key: 't', label: '时间 t / τ', min: 0, max: 5, step: 0.1, value: 1 },
], (p) => {
  const t = p.t ?? 1, q = 1 - Math.exp(-t), cur = Math.exp(-t);
  const g1 = graph(55, 30, 120, 120, { fns: [{ f: (x) => 1 - Math.exp(-x) }], t1: 5, ymin: 0, ymax: 1.15, yl: 'q', hmarks: [{ v: 1, label: 'Cε' }, { v: 0.632, label: '0.63Cε' }], vmarks: [{ t: 1, label: 'τ' }] });
  const g2 = graph(255, 30, 120, 120, { fns: [{ f: (x) => Math.exp(-x), c: 'I' }], t1: 5, ymin: 0, ymax: 1.15, yl: 'I', hmarks: [{ v: 1, label: 'ε/R' }, { v: 0.368, label: '0.37ε/R' }], vmarks: [{ t: 1, label: 'τ' }] });
  let s = g1.s + g2.s;
  if (p.__dirty) {
    s += ln(g1.X(t), 30, g1.X(t), 150, { c: 'm', w: 0.8, dash: '3 3' }) + circ(g1.X(t), g1.Y(q), 4, { fill: 'currentColor' });
    s += ln(g2.X(t), 30, g2.X(t), 150, { c: 'm', w: 0.8, dash: '3 3' }) + circ(g2.X(t), g2.Y(cur), 4, { fill: COL.I, c: 'I' });
  }
  s += eq(20, 205, ['q = Cε(1 − exp(−', { n: 't', d: 'RC' }, '))'], { fs: 12 }) + eq(225, 205, ['I = ', { n: 'ε', d: 'R' }, 'exp(−', { n: 't', d: 'RC' }, ')'], { fs: 12 }) + tx(20, 250, 't = 0：C 相当于导线；t → ∞：C 相当于断路', { it: false, fs: 11 });
  return s;
}, {
  status: (p) => { const t = p.t ?? 1; return `t = ${t.toFixed(1)}τ：q = ${((1 - Math.exp(-t)) * 100).toFixed(0)}% Cε，I = ${(Math.exp(-t) * 100).toFixed(0)}% ε/R`; },
});
defI('rc-discharging', 'RC 放电：q(t) 与 |I(t)| · RC discharging: q(t) and |I(t)|', 'q=Q_0e^{-\\dfrac{t}{RC}},\\; |I|=\\dfrac{Q_0}{RC}e^{-\\dfrac{t}{RC}}', [
  { key: 't', label: '时间 t / τ', min: 0, max: 5, step: 0.1, value: 1 },
], (p) => {
  const t = p.t ?? 1, q = Math.exp(-t);
  const g1 = graph(55, 30, 120, 120, { fns: [{ f: (x) => Math.exp(-x) }], t1: 5, ymin: 0, ymax: 1.15, yl: 'q', hmarks: [{ v: 1, label: 'Q₀' }, { v: 0.368, label: '0.37Q₀' }], vmarks: [{ t: 1, label: 'τ' }] });
  const g2 = graph(255, 30, 120, 120, { fns: [{ f: (x) => Math.exp(-x), c: 'I' }], t1: 5, ymin: 0, ymax: 1.15, yl: '|I|', hmarks: [{ v: 1, label: 'Q₀/RC' }], vmarks: [{ t: 1, label: 'τ' }] });
  let s = g1.s + g2.s;
  if (p.__dirty) {
    s += ln(g1.X(t), 30, g1.X(t), 150, { c: 'm', w: 0.8, dash: '3 3' }) + circ(g1.X(t), g1.Y(q), 4, { fill: 'currentColor' });
    s += ln(g2.X(t), 30, g2.X(t), 150, { c: 'm', w: 0.8, dash: '3 3' }) + circ(g2.X(t), g2.Y(q), 4, { fill: COL.I, c: 'I' });
  }
  s += eq(20, 205, ['q = Q₀ exp(−', { n: 't', d: 'RC' }, ')'], { fs: 12 }) + eq(225, 205, ['|I| = ', { n: 'Q₀', d: 'RC' }, 'exp(−', { n: 't', d: 'RC' }, ')'], { fs: 12 }) + tx(20, 250, '放电电流方向与充电电流方向相反', { it: false, fs: 11 });
  return s;
}, {
  status: (p) => { const t = p.t ?? 1; return `t = ${t.toFixed(1)}τ：q = ${(Math.exp(-t) * 100).toFixed(0)}% Q₀，|I| = ${(Math.exp(-t) * 100).toFixed(0)}% Q₀/RC`; },
});

/* ======================= Magnetism ======================= */
defI('wire-field', '长直导线磁场（右手定则） · Magnetic field of a long straight wire (right-hand rule)', 'B=\\dfrac{\\mu_0I}{2\\pi r}', [
  { key: 'dir', label: '电流方向', type: 'choice', value: 'out', options: [{ value: 'out', label: '出纸面 ⊙' }, { value: 'in', label: '入纸面 ⊗' }] },
], (p) => {
  const out = (p.dir ?? 'out') === 'out', cx = 110, cy = 115;
  let s = (out ? dotB(cx, cy, 8, 'I') : crossB(cx, cy, 8, 'I')) + tx(cx, cy + 24, out ? 'I ⊙' : 'I ⊗', { anchor: 'middle', fs: 11, c: 'I' });
  [40, 68, 95].forEach((r) => { s += circ(cx, cy, r, { c: 'B', w: 1.1 }); [45, 225].forEach((a) => { s += arr(...pt(cx, cy, r, a), ...pt(cx, cy, r, out ? a + 9 : a - 9), 'B', 1.4); }); });
  s += tx(cx, cy - 100, out ? 'B 逆时针（俯视，I 出纸面）' : 'B 顺时针（俯视，I 入纸面）', { c: 'B', fs: 10, anchor: 'middle', it: false }) + ln(cx, cy, cx + 68, cy, { c: 'm', dash: '3 3' }) + tx(cx + 50, cy - 4, 'r', { fs: 12 });
  const wx = 300; s += (out ? arr(wx, 215, wx, 35, 'I', 2.5) : arr(wx, 35, wx, 215, 'I', 2.5)) + tx(wx + 6, out ? 46 : 230, 'I', { c: 'I' });
  [75, 125, 175].forEach((y) => { s += (out ? crossB(wx + 40, y) + dotB(wx - 40, y, 6) : dotB(wx + 40, y, 6) + crossB(wx - 40, y)); });
  s += tx(wx + 40, 205, out ? '× 入' : '⊙ 出', { anchor: 'middle', fs: 11, c: 'B', it: false }) + tx(wx - 40, 205, out ? '⊙ 出' : '× 入', { anchor: 'middle', fs: 11, c: 'B', it: false });
  s += eq(30, 238, ['B = ', { n: 'μ₀I', d: '2πr' }]);
  return s;
}, {
  status: (p) => (p.dir ?? 'out') === 'out' ? 'I 出纸面：右手定则给出逆时针 B' : 'I 入纸面：B 方向反向（顺时针）',
});
defI('loop-field', '圆形电流环中心磁场 · Magnetic field at the center of a circular current loop', 'B_{\\text{center}}=\\dfrac{\\mu_0I}{2R}', [
  { key: 'R', label: '半径 R', min: 50, max: 100, step: 1, value: 80, unit: '' },
], (p) => {
  const R = p.R ?? 80, cx = 120, cy = 125; let s = circ(cx, cy, R, { c: 'I', w: 2.5 });
  [60, 180, 300].forEach((a) => { s += arr(...pt(cx, cy, R, a), ...pt(cx, cy, R, a + 12), 'I', 2); });
  s += tx(...pt(cx, cy, R + 14, 50), 'I（逆时针）', { c: 'I', fs: 11 }) + dotB(cx, cy, 9) + tx(cx + 14, cy - 10, 'B ⊙（出纸面）', { c: 'B', fs: 11 }) + ln(cx, cy, ...pt(cx, cy, R, -40), { c: 'm', dash: '3 3' }) + tx(...pt(cx, cy, 44, -25), 'R', { fs: 12 });
  s += eq(250, 70, ['B = ', { n: 'μ₀I', d: '2R' }]) + tx(250, 118, '右手：四指沿 I 弯曲，', { it: false, fs: 11 }) + tx(250, 134, '拇指指向环中心 B', { it: false, fs: 11 }) + eq(250, 185, ['N 匝：B = ', { n: 'μ₀NI', d: '2R' }], { fs: 12 });
  return s;
}, {
  status: (p) => `R = ${p.R ?? 80}：B_center ∝ 1/R`,
});
defI('solenoid-field', '螺线管纵截面 + 矩形安培环路 · Solenoid cross-section with rectangular Amperian loop', 'B=\\mu_0nI', [
  { key: 'n', label: '匝密度 n', min: 5, max: 20, step: 1, value: 10, unit: '' },
], (p) => {
  const step = 240 / (p.n ?? 10);
  let s = ''; const y1 = 70, y2 = 170;
  for (let x = 60; x <= 300 + 0.01; x += step) { s += dotB(x, y1, 7, 'I') + crossB(x, y2, 5.5, 'I'); }
  for (const y of [100, 120, 140]) s += arr(70, y, 290, y, 'B', 1.6);
  s += tx(296, 124, 'B', { c: 'B' }) + tx(316, 74, '⊙ I 出纸面', { fs: 10, c: 'I', it: false }) + tx(316, 174, '× I 入纸面', { fs: 10, c: 'I', it: false });
  s += rect(110, 110, 90, 100, { c: 'm', dash: '5 4', fill: 'none' }) + tx(155, 228, '矩形安培环路（内边长 ℓ）', { anchor: 'middle', fs: 11, it: false }) + tx(210, 205, '外部 B ≈ 0', { fs: 10, it: false });
  s += tx(20, 30, '∮B·dl = Bℓ = μ₀(nℓ)I', { fs: 12 }) + eq(270, 30, ['B = μ₀nI']) + tx(20, 250, 'n：单位长度匝数', { it: false, fs: 11 });
  return s;
}, {
  status: (p) => `n = ${p.n ?? 10}：B = μ₀nI，匝数越密 B 越大（理想螺线管）`,
});
def('ampere-wire', '安培环路：长直导线（同心圆环路） · Amperian loop: long straight wire (concentric circular loop)', '\\oint\\vec B\\cdot d\\vec l=\\mu_0I_{\\text{enc}}', () => {
  const cx = 120, cy = 125, r = 80; let s = dotB(cx, cy, 8, 'I') + tx(cx, cy + 26, 'I ⊙', { anchor: 'middle', c: 'I', fs: 12 }) + circ(cx, cy, r, { dash: '6 4' });
  const [x, y] = pt(cx, cy, r, 45); s += arrD(x, y, 135, 40, 'B', 1.8) + tx(x - 26, y - 34, 'B', { c: 'B' });
  const [x2, y2] = pt(cx, cy, r, 200); s += arrD(x2, y2, 290, 32, 'g', 1.2) + tx(x2 - 10, y2 + 30, 'dl', { fs: 12, anchor: 'end' });
  s += ln(cx, cy, ...pt(cx, cy, r, -40), { c: 'm' }) + tx(...pt(cx, cy, 44, -26), 'r', {});
  s += tx(240, 50, '∮B·dl = μ₀I_{enc}', { fs: 12 }) + tx(240, 90, 'B·2πr = μ₀I', { fs: 12 }) + eq(240, 140, ['B = ', { n: 'μ₀I', d: '2πr' }]) + tx(240, 195, 'B 沿环路切向（逆时针），', { it: false, fs: 10 }) + tx(240, 211, '大小处处相等', { it: false, fs: 10 });
  return s;
});
def('ampere-thick-wire', '安培环路：粗导线内部（均匀电流密度） · Amperian loop: inside a thick wire (uniform current density)', 'B=\\dfrac{\\mu_0Ir}{2\\pi R^2}\\;(r<R),\\quad B=\\dfrac{\\mu_0I}{2\\pi r}\\;(r>R)', () => {
  const cx = 105, cy = 120, R = 80, r = 45; let s = circ(cx, cy, R, { fill: COL.I, op: 0.12, c: 'I' }) + circ(cx, cy, r, { dash: '5 4' });
  for (const [dx, dy] of [[-52, -30], [52, -30], [0, 58], [-30, 40], [35, 38], [0, -62], [-64, 12], [64, 15], [0, 0]]) s += dotB(cx + dx, cy + dy, 4, 'I');
  s += ln(cx, cy, ...pt(cx, cy, R, 150), { c: 'm' }) + tx(...pt(cx, cy, R / 2, 165), 'R', { fs: 12 }) + ln(cx, cy, ...pt(cx, cy, r, -30), { c: 'm' }) + tx(...pt(cx, cy, 26, -8), 'r', { fs: 12 });
  const g = graph(245, 40, 120, 100, { fns: [{ f: (x) => (x < 0.4 ? x / 0.4 : 0.4 / x), c: 'B' }], t1: 1.4, ymin: 0, ymax: 1.15, xl: 'r', yl: 'B', vmarks: [{ t: 0.4, label: 'R' }] });
  s += g.s + eq(215, 195, ['I_{enc} = I', { n: 'r^{2}', d: 'R^{2}' }], { fs: 12 }) + eq(215, 238, ['B = ', { n: 'μ₀Ir', d: '2πR^{2}' }], { fs: 12 });
  return s;
});
defI('particle-in-B', '带电粒子在匀强磁场中圆周运动（B 入纸面，+q） · Charged particle in a uniform magnetic field (B into page, +q)', 'r=\\dfrac{mv}{|q|B},\\; \\vec F=q\\vec v\\times\\vec B', [
  { key: 'B', label: '磁感应强度 B', min: 0.7, max: 1.5, step: 0.05, value: 1 },
], (p) => {
  const B = p.B ?? 1, r = 80 / B;
  let s = ''; for (let x = 30; x <= 230; x += 40) for (let y = 30; y <= 230; y += 40) s += crossB(x, y, 4);
  const cx = 130, cy = 125; s += circ(cx, cy, r, { c: 'm', dash: '5 4' });
  const px = cx, py = cy + r; s += circ(px, py, 7, { fill: COL.E, c: 'E', op: 0.6 }) + tx(px, py + 4, '+', { anchor: 'middle', it: false, fs: 11 });
  s += arr(px + 8, py, px + 60, py, 'v') + tx(px + 62, py + 14, 'v', { c: 'v' }) + arr(px, py - 8, px, py - 55, 'f') + tx(px + 6, py - 44, 'F', { c: 'f' });
  s += arc(cx, cy, r + 12, 300, 340, { c: 'm', w: 1.2, me: 'm' }) + tx(cx + r + 8, cy + 40, '逆时针', { fs: 10, it: false });
  s += eq(255, 60, ['r = ', { n: 'mv', d: '|q|B' }]) + eq(255, 120, ['T = ', { n: '2πm', d: '|q|B' }]) + tx(255, 170, '负电荷：顺时针', { it: false, fs: 11 }) + tx(255, 190, 'F ⊥ v，磁力不做功', { it: false, fs: 11 });
  return s;
}, {
  status: (p) => `B = ${(p.B ?? 1).toFixed(2)}：r ∝ 1/B，B 增大时半径减小`,
});

/* ======================= Induction ======================= */
defI('faraday-rod', '法拉第：导轨上滑动导体棒（B 入纸面，向右运动） · Faraday: rod sliding on rails (B into page, moving right)', '\\varepsilon=BLv,\\; I=\\dfrac{BLv}{R},\\; F=\\dfrac{B^2L^2v}{R}', [
  { key: 'v', label: '速度 v', min: 0.5, max: 2.5, step: 0.1, value: 1 },
  { key: 'B', label: '磁感应 B', min: 0.5, max: 2, step: 0.1, value: 1 },
], (p) => {
  const v = p.v ?? 1, B = p.B ?? 1, T = 50, Bt = 180, Lx = 50, rx = 250; let s = '';
  for (let x = 80; x <= 370; x += 36) for (let y = 74; y <= 160; y += 30) s += crossB(x, y, 4);
  s += ln(Lx, T, 380, T, { w: 2 }) + ln(Lx, Bt, 380, Bt, { w: 2 }) + resistor(Lx, T, Lx, Bt, 'R', { dx: -10, anchor: 'end' }) + rect(rx - 4, T - 8, 8, Bt - T + 16, { fill: 'currentColor' });
  s += arr(rx + 10, 115, rx + 10 + 60 * v, 115, 'v') + tx(rx + 12 + 60 * v, 111, 'v', { c: 'v' });
  const fl = Math.max(20, Math.min(90, 46 * B * B * v));
  s += arr(rx - 10, 100, rx - 10 - fl, 100, 'f') + tx(rx - 12 - fl, 94, 'F_{B}', { c: 'f', anchor: 'end', fs: 12 });
  s += arr(rx - 16, 160, rx - 16, 130, 'I', 2) + tx(rx - 20, 152, 'I', { c: 'I', anchor: 'end' }) + arr(170, T + 10, 130, T + 10, 'I', 1.6) + arr(130, Bt - 10, 170, Bt - 10, 'I', 1.6) + tx(150, Bt - 18, '逆时针', { c: 'I', fs: 10, it: false, anchor: 'middle' });
  s += arr(rx + 24, 140, rx + 24, T + 2, 'g', 1) + arr(rx + 24, 140, rx + 24, Bt - 2, 'g', 1) + tx(rx + 30, 150, 'L', { fs: 12 });
  s += tx(20, 24, '面积↑ ⇒ Φ（入）↑ ⇒ 感应 B 出纸面 ⇒ I 逆时针，F_{B} 向左阻碍运动', { it: false, fs: 10 }) + eq(30, 222, ['ε = BLv']) + eq(130, 222, ['I = ', { n: 'BLv', d: 'R' }]) + eq(240, 222, ['F = ', { n: 'B^{2}L^{2}v', d: 'R' }]);
  return s;
}, {
  status: (p) => `ε ∝ Bv，F ∝ B²v：v = ${(p.v ?? 1).toFixed(1)}，B = ${(p.B ?? 1).toFixed(1)}`,
});
def('loop-entering-leaving-field', '线框进入/离开磁场：感应电流与磁阻力 · Loop entering/leaving a magnetic field: induced current and magnetic drag', '\\varepsilon=BLv,\\; I=\\dfrac{BLv}{R},\\; F_B=\\dfrac{B^2L^2v}{R}', () => {
  let s = tx(18, 16, '进入场区 · entering', { it: false, fs: 9.5, c: 'v' });
  s += tx(18, 30, 'Φ 增大 → I 逆时针 → F 向左', { it: false, fs: 9.5 });
  s += rect(100, 48, 85, 100, { fill: 'none', c: 'm', dash: '5 4', w: 1.2 });
  for (let x = 112; x <= 176; x += 22) for (let y = 60; y <= 138; y += 26) s += crossB(x, y, 4);
  s += rect(40, 52, 80, 92, { fill: 'none', w: 2.2 });
  s += arr(125, 164, 175, 164, 'v', 2.2) + tx(178, 168, 'v', { c: 'v', fs: 12 });
  s += arr(120, 98, 85, 98, 'f', 2.2) + tx(82, 92, 'F_{B}', { c: 'f', anchor: 'end', fs: 12 });
  s += arr(120, 132, 120, 62, 'I', 2.2) + tx(125, 101, 'I', { c: 'I', fs: 12 });
  s += arr(110, 52, 70, 52, 'I', 1.8) + tx(90, 46, 'I', { c: 'I', fs: 11, anchor: 'middle' });
  s += dotB(80, 98, 5, 'v') + tx(88, 102, 'B_{ind}', { c: 'v', fs: 10 });
  s += tx(18, 178, '× 表示 B 入纸面 · into page', { it: false, fs: 9, c: 'B' });

  s += tx(215, 16, '离开场区 · leaving', { it: false, fs: 9.5, c: 'v' });
  s += tx(215, 30, 'Φ 减小 → I 顺时针 → F 仍向左', { it: false, fs: 9.5 });
  s += rect(215, 48, 85, 100, { fill: 'none', c: 'm', dash: '5 4', w: 1.2 });
  for (let x = 227; x <= 291; x += 22) for (let y = 60; y <= 138; y += 26) s += crossB(x, y, 4);
  s += rect(280, 52, 80, 92, { fill: 'none', w: 2.2 });
  s += arr(310, 164, 360, 164, 'v', 2.2) + tx(363, 168, 'v', { c: 'v', fs: 12 });
  s += arr(280, 98, 245, 98, 'f', 2.2) + tx(242, 92, 'F_{B}', { c: 'f', anchor: 'end', fs: 12 });
  s += arr(280, 132, 280, 62, 'I', 2.2) + tx(285, 101, 'I', { c: 'I', fs: 12 });
  s += arr(290, 52, 350, 52, 'I', 1.8) + tx(320, 46, 'I', { c: 'I', fs: 11, anchor: 'middle' });
  s += crossB(320, 98, 5, 'v') + tx(328, 102, 'B_{ind}', { c: 'v', fs: 10 });

  s += eq(18, 198, ['ε = BLv']) + eq(98, 198, ['I = ', { n: 'BLv', d: 'R' }]) + eq(210, 198, ['F_{B} = ', { n: 'B^{2}L^{2}v', d: 'R' }]);
  s += tx(18, 232, '能量：F_{app}v = I^{2}R（匀速时） · energy balance at constant speed', { it: false, fs: 9 });
  s += tx(18, 247, '完全进入后：Φ 不变 → ε = 0，I = 0，F_{B} = 0', { it: false, fs: 9 });
  return s;
});
defI('faraday-changing-B', '法拉第：均匀变化磁场中的固定线圈（B 出纸面且增大） · Faraday: fixed coil in a uniformly changing field (B out of page, increasing)', '\\varepsilon=-\\dfrac{d\\Phi_B}{dt}=-A\\dfrac{dB}{dt}', [
  { key: 'rate', label: '磁场变化率 dB/dt', min: 0.5, max: 2.5, step: 0.1, value: 1 },
], (p) => {
  const rate = p.rate ?? 1, al = 6 + 6 * rate;
  let s = ''; for (let x = 30; x <= 230; x += 34) for (let y = 30; y <= 230; y += 34) s += dotB(x, y, 4.5);
  const cx = 130, cy = 130, r = 70; s += circ(cx, cy, r, { c: 'I', w: 3 });
  [90, 210, 330].forEach((a) => { s += arr(...pt(cx, cy, r, a), ...pt(cx, cy, r, a - al), 'I', 2); });
  s += tx(20, 252, '线圈中感应电流 I 顺时针', { c: 'I', fs: 11, it: false }) + crossB(cx, cy, 9, 'm') + tx(cx + 14, cy + 4, 'B_{ind}', { c: 'm', fs: 11 });
  s += tx(250, 40, 'B ⊙ 增大 ⇒ Φ 增大', { fs: 11, it: false }) + tx(250, 58, '楞次定律：感应 B 入纸面', { fs: 11, it: false }) + tx(250, 76, '⇒ I 顺时针', { fs: 11, it: false });
  s += eq(250, 125, ['ε = −', { n: 'dΦ_{B}', d: 'dt' }]) + eq(250, 190, ['|ε| = πr^{2}', { n: 'dB', d: 'dt' }]);
  return s;
}, {
  status: (p) => `dB/dt = ${(p.rate ?? 1).toFixed(1)}：|ε| ∝ dB/dt，感应电流方向由楞次定律决定`,
});
defI('rl-circuit', 'RL 电路（开关闭合）与电流增长曲线 · RL circuit (switch closed) and current growth curve', 'I=\\dfrac{\\varepsilon}{R}\\left(1-e^{-\\dfrac{t}{\\tau}}\\right),\\; \\tau=\\dfrac{L}{R}', [
  { key: 't', label: '时间 t / τ', min: 0, max: 5, step: 0.1, value: 1 },
], (p) => {
  const t = p.t ?? 1, L0 = 40, T = 40, B = 170; let s = battery(L0, B, L0, T, 'ε', true) + ln(L0, T, 60, T) + sw(60, T, 100, T, 'S') + resistor(100, T, 180, T, 'R') + inductor(180, T, 180, B, 'L') + ln(180, B, L0, B);
  s += arr(125, T + 14, 150, T + 14, 'I', 1.4);
  const g = graph(260, 30, 110, 110, { fns: [{ f: (x) => 1 - Math.exp(-x), c: 'I' }], t1: 5, ymin: 0, ymax: 1.15, yl: 'I', hmarks: [{ v: 1, label: 'ε/R' }, { v: 0.632, label: '0.63' }], vmarks: [{ t: 1, label: 'τ' }] });
  s += g.s + (p.__dirty ? ln(g.X(t), 30, g.X(t), 140, { c: 'm', w: 0.8, dash: '3 3' }) + circ(g.X(t), g.Y(1 - Math.exp(-t)), 4, { fill: COL.I, c: 'I' }) : '');
  s += eq(20, 212, ['I = ', { n: 'ε', d: 'R' }, '(1 − exp(−', { n: 't', d: 'τ' }, '))'], { fs: 11 }) + eq(210, 212, ['τ = ', { n: 'L', d: 'R' }]) + eq(290, 212, ['ε_{L} = −L', { n: 'dI', d: 'dt' }], { fs: 11 }) + tx(20, 252, 't = 0：L 相当于断路；t → ∞：L 相当于导线', { it: false, fs: 11 });
  return s;
}, {
  status: (p) => { const t = p.t ?? 1; return `t = ${t.toFixed(1)}τ：I = ${((1 - Math.exp(-t)) * 100).toFixed(0)}% ε/R`; },
});
defI('lc-circuit', 'LC 振荡电路与 q(t)、I(t) · LC oscillating circuit with q(t) and I(t)', '\\omega=\\dfrac{1}{\\sqrt{LC}},\\; q=Q_0\\cos\\omega t,\\; I=\\dfrac{dq}{dt}=-Q_0\\omega\\sin\\omega t', [
  { key: 't', label: '时间 t / T', min: 0, max: 1.25, step: 0.01, value: 0 },
], (p) => {
  const t = p.t ?? 0, T = 50, B = 170; let s = capacitor(60, B, 60, T, 'C') + ln(60, T, 160, T) + inductor(160, T, 160, B, 'L') + ln(160, B, 60, B) + tx(50, T + 44, '+Q₀', { fs: 11, anchor: 'end' });
  const g1 = graph(240, 20, 130, 64, { fns: [{ f: (x) => Math.cos(2 * Math.PI * x) }], t1: 1.25, ymin: -1.15, ymax: 1.15, yl: 'q' });
  const g2 = graph(240, 118, 130, 64, { fns: [{ f: (x) => -Math.sin(2 * Math.PI * x), c: 'I' }], t1: 1.25, ymin: -1.15, ymax: 1.15, yl: 'I' });
  s += g1.s + g2.s + tx(236, g1.Y(1) + 4, 'Q₀', { anchor: 'end', fs: 10 }) + tx(236, g2.Y(1) + 4, 'Q₀ω', { anchor: 'end', fs: 10 });
  const q = Math.cos(2 * Math.PI * t), cur = -Math.sin(2 * Math.PI * t);
  if (p.__dirty) {
    s += ln(g1.X(t), 20, g1.X(t), 84, { c: 'm', w: 0.8, dash: '3 3' }) + circ(g1.X(t), g1.Y(q), 4, { fill: 'currentColor' });
    s += ln(g2.X(t), 118, g2.X(t), 182, { c: 'm', w: 0.8, dash: '3 3' }) + circ(g2.X(t), g2.Y(cur), 4, { fill: COL.I, c: 'I' });
  }
  s += eq(20, 225, ['ω = ', { n: '1', d: '√(LC)' }]) + eq(130, 225, ['U = ', { n: 'q^{2}', d: '2C' }, ' + ', { n: '1', d: '2' }, 'LI^{2} = 常量'], { fs: 12 });
  return s;
}, {
  status: (p) => { const t = p.t ?? 0; return `t = ${t.toFixed(2)}T：q = ${Math.cos(2 * Math.PI * t).toFixed(2)}Q₀，I = ${(-Math.sin(2 * Math.PI * t)).toFixed(2)}Q₀ω`; },
});

/* ======================= Kinematics / forces enrichments ======================= */
def('motion-diagram', '运动图：相邻位移增大 ⇒ 加速 · Motion diagram: increasing displacements ⇒ acceleration', 'v=v_0+at,\\; \\Delta x=\\dfrac{v_0+v}{2}t', () => {
  let s = ln(25, 210, 375, 210, { w: 2 });
  const xs = [50, 110, 180, 260, 350];
  xs.forEach((x, i) => { s += circ(x, 190, 5, { fill: 'currentColor' }); s += ln(x, 200, x, 216, { c: 'm', dash: '3 3', w: 1 }) + tx(x, 232, `t${i}`, { anchor: 'middle', fs: 10, it: false }); });
  [24, 32, 40, 48, 56].forEach((l, i) => { s += arr(xs[i], 178, xs[i], 178 - l, 'v', 2); });
  s += tx(xs[4] + 6, 130, 'v', { c: 'v' }) + tx(30, 30, '相邻位移越来越大：v 向右且增大', { it: false, fs: 11 }) + tx(300, 30, 'a →', { c: 'a', fs: 12 });
  return s;
});
def('free-fall', '自由落体：v 向下增大，a = g 恒定 · Free fall: downward v increases, a = g constant', 'v=gt,\\; y=\\dfrac12gt^2', () => {
  let s = hatch(30, 230, 370) + ln(110, 35, 110, 215, { c: 'm', dash: '4 4' });
  [50, 105, 160].forEach((y, i) => { s += circ(110, y, 8, { fill: 'currentColor' }) + arr(110, y + 8, 110, y + 8 + [24, 38, 52][i], 'v', 1.8); });
  s += tx(120, 90, 'v', { c: 'v' }) + tx(120, 160, 'v', { c: 'v' }) + tx(120, 225, 'v', { c: 'v' });
  s += arr(300, 45, 300, 95, 'a', 1.8) + tx(306, 80, 'a = g', { c: 'a' });
  s += tx(30, 30, '同一加速度 g，速度每秒增加 g', { it: false, fs: 11 });
  return s;
});
def('projectile-range', '射程随发射角变化：45° 最大 · Range versus launch angle: maximum at 45°', 'R=\\dfrac{v_0^2\\sin 2\\theta}{g}', () => {
  const g = graph(55, 40, 185, 145, { fns: [{ f: (t) => Math.sin(Math.PI * t), c: 'v' }], t1: 1, ymin: 0, ymax: 1.15, xl: 'θ', yl: 'R', vmarks: [{ t: 0.5, label: '45°' }] });
  let s = g.s + tx(g.X(0), g.Y(0) + 18, '0°', { anchor: 'middle', fs: 10, it: false }) + tx(g.X(1), g.Y(0) + 18, '90°', { anchor: 'middle', fs: 10, it: false });
  s += tx(55, 28, '同一 v₀，忽略空气阻力', { it: false, fs: 11 }) + eq(265, 70, ['R = ', { n: 'v₀^{2} sin 2θ', d: 'g' }]) + tx(265, 122, 'θ 与 90° − θ 射程相同', { it: false, fs: 11 }) + tx(265, 164, '45°：sin 2θ = 1，R 最大', { it: false, fs: 11 });
  return s;
});
def('elevator', '电梯中的视重：N 随加速度方向变化 · Apparent weight in an elevator: N depends on acceleration direction', 'N=mg+ma\\;(a\\uparrow),\\quad N=mg-ma\\;(a\\downarrow)', () => {
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
defI('friction-graph', '静摩擦到滑动摩擦：f 随 F_app 的变化 · Static to kinetic friction: f versus F_app', 'f_s\\le\\mu_sN,\\;\\; f_k=\\mu_kN', [
  { key: 'mus', label: '静摩擦 μs', min: 0.2, max: 0.8, step: 0.01, value: 0.55 },
  { key: 'muk', label: '动摩擦 μk', min: 0.05, max: 0.8, step: 0.01, value: 0.45 },
], (p) => {
  const mus = p.mus ?? 0.55, muk = Math.min(p.muk ?? 0.45, mus * 0.95);
  const g = graph(55, 35, 195, 150, { fns: [{ f: (t) => (t < mus ? t : muk), c: 'f' }], t1: 1, ymin: 0, ymax: 1.1, xl: 'F_app', yl: 'f', vmarks: [{ t: mus, label: '临界' }] });
  let s = g.s + tx(g.X(mus * 0.4), g.Y(mus * 0.4) - 8, 'f_s = F_app', { c: 'f', fs: 11, anchor: 'middle' }) + tx(g.X(Math.min(0.9, mus + 0.23)), g.Y(muk) - 8, 'f_k', { c: 'f', fs: 12, anchor: 'middle' });
  s += eq(270, 80, ['f_s ≤ μ_sN']) + eq(270, 120, ['f_k = μ_kN']) + tx(270, 170, '滑动后 f 近似恒定', { it: false, fs: 11 }) + tx(55, 24, '先静摩擦，后滑动摩擦', { it: false, fs: 11 });
  return s;
}, {
  status: (p) => `μs = ${(p.mus ?? 0.55).toFixed(2)}，μk = ${Math.min(p.muk ?? 0.45, (p.mus ?? 0.55) * 0.95).toFixed(2)}：临界后 f 降为 μkN`,
});
defI('flat-curve', '水平弯道：静摩擦提供向心力 · Flat curve: static friction provides centripetal force', 'f_s=\\dfrac{mv^2}{r}\\le\\mu_smg,\\;\\; v_{\\max}=\\sqrt{\\mu_srg}', [
  { key: 'r', label: '弯道半径 r', min: 55, max: 95, step: 1, value: 80, unit: '' },
  { key: 'mus', label: '静摩擦 μs', min: 0.2, max: 0.8, step: 0.01, value: 0.5 },
], (p) => {
  const r = p.r ?? 80, mu = p.mus ?? 0.5, vmax = Math.sqrt(mu * 9.8 * r), base = Math.sqrt(0.5 * 9.8 * 80);
  const cx = 145, cy = 130; let s = circ(cx, cy, r, { c: 'm', dash: '5 4' }) + circ(cx, cy, 2, { fill: 'currentColor' });
  const carY = cy - r; s += rect(cx - 16, carY - 10, 32, 18) + tx(cx, carY + 4, 'm', { anchor: 'middle', fs: 11 });
  const vl = Math.max(24, Math.min(88, 60 * vmax / base));
  s += arr(cx + 18, carY, cx + 18 + vl, carY, 'v') + tx(cx + 22 + vl, carY - 6, 'v', { c: 'v' });
  const fl = Math.max(18, Math.min(92, 48 * vmax * vmax / (base * base)));
  s += arr(cx, carY + 10, cx, carY + 10 + fl, 'f') + tx(cx + 6, carY + 2 + fl, 'f_s', { c: 'f' });
  s += tx(20, 26, '俯视：弯道半径 r', { it: false, fs: 11 }) + eq(255, 70, ['f_s = ', { n: 'mv^{2}', d: 'r' }]) + eq(255, 130, ['v_{max} = ', { sqrt: 'μ_s rg' }], { fs: 12 });
  return s;
}, {
  status: (p) => `v_max = √(μs r g) = ${r1(Math.sqrt((p.mus ?? 0.5) * (p.r ?? 80) * 9.8))} m/s`,
});
defI('circular-vectors', '圆周运动：v 切向、a_c 指向圆心 · Circular motion: v tangential, a_c toward the center', 'a_c=\\dfrac{v^2}{r},\\;\\; v=\\dfrac{2\\pi r}{T}', [
  { key: 'r', label: '半径 r', min: 55, max: 85, step: 1, value: 75, unit: '' },
], (p) => {
  const r = p.r ?? 75, cx = 140, cy = 130; let s = circ(cx, cy, r, { c: 'm', dash: '5 4' }) + circ(cx, cy, 2, { fill: 'currentColor' });
  [0, 90, 180, 270].forEach((a) => {
    const q = pt(cx, cy, r, a);
    s += circ(q[0], q[1], 4, { fill: 'currentColor' });
    s += arrD(q[0], q[1], a + 90, 34, 'v', 1.8);
    s += arrD(q[0], q[1], a + 180, 28, 'a', 1.6);
  });
  s += tx(108, 48, 'v', { c: 'v' }) + tx(146, 84, 'a_c', { c: 'a' });
  s += eq(250, 80, ['a_c = ', { n: 'v^{2}', d: 'r' }]) + eq(250, 140, ['v = ', { n: '2πr', d: 'T' }]) + tx(250, 196, 'v 与 a_c 始终垂直', { it: false, fs: 11 });
  return s;
});
def('kepler-ellipse', '开普勒第一、第二定律：椭圆轨道与面积速率 · Kepler first and second laws: elliptical orbit and areal speed', '\\dfrac{dA}{dt}=\\dfrac{L}{2m}=\\text{常量}', () => {
  const cx = 165, cy = 130, rx = 105, ry = 58, sx = cx - Math.sqrt(rx * rx - ry * ry); let s = `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" style="fill:none;stroke:currentColor;stroke-width:1.6"/>`;
  const P = (deg) => [cx + rx * Math.cos(rad(deg)), cy - ry * Math.sin(rad(deg))];
  // Both shaded sectors are centred on the major axis. The 252.5° ± 14.5°
  // sector is the same polygon area as the 55°–70° sector for this rx/ry,
  // so the two equal-Δt sweeps really are equal-area.
  const a1 = P(55), a2 = P(70), b1 = P(252.5 - 14.5), b2 = P(252.5 + 14.5);
  s += `<polygon points="${sx},${cy} ${r1(a1[0])},${r1(a1[1])} ${r1(a2[0])},${r1(a2[1])}" style="fill:${COL.f};fill-opacity:0.15;stroke:none"/>`;
  s += `<polygon points="${sx},${cy} ${r1(b1[0])},${r1(b1[1])} ${r1(b2[0])},${r1(b2[1])}" style="fill:${COL.f};fill-opacity:0.15;stroke:none"/>`;
  s += ln(sx, cy, a1[0], a1[1], { c: 'm', dash: '3 3', w: 1 }) + ln(sx, cy, b1[0], b1[1], { c: 'm', dash: '3 3', w: 1 });
  s += circ(sx, cy, 8, { fill: COL.f, c: 'f', op: 0.5 }) + tx(sx, cy + 4, 'S', { anchor: 'middle', fs: 10, it: false });
  s += circ(a1[0], a1[1], 5, { fill: 'currentColor' }) + circ(b1[0], b1[1], 5, { fill: 'currentColor' });
  s += tx(a1[0] + 6, a1[1] - 6, 'P₁', { fs: 11 }) + tx(b1[0] - 6, b1[1] + 12, 'P₂', { fs: 11, anchor: 'end' });
  s += tx(20, 26, '相同 Δt 扫过相同面积', { it: false, fs: 11 }) + eq(250, 80, ['dA/dt = ', { n: 'L', d: '2m' }], { fs: 12 }) + tx(250, 150, '近日点速度大，远日点速度小', { it: false, fs: 11 });
  return s;
});
def('gravitational-potential', '引力势能与场强随距离的变化 · Gravitational potential energy and field strength versus distance', 'U=-\\dfrac{GMm}{r},\\;\\; g=\\dfrac{GM}{r^2}', () => {
  const g1 = graph(35, 35, 150, 135, { fns: [{ f: (t) => -1 / (t + 1), c: 'f' }], t1: 1, ymin: -1.15, ymax: 0.25, xl: 'r', yl: 'U' });
  const g2 = graph(235, 35, 125, 135, { fns: [{ f: (t) => 1.1 / (1 + 2.2 * t) ** 2, c: 'B' }], t1: 1, ymin: 0, ymax: 1.2, xl: 'r', yl: 'g' });
  let s = g1.s + g2.s + tx(35, 24, 'U < 0，r → ∞ 时 U → 0', { it: false, fs: 10 }) + tx(235, 24, 'g ∝ 1/r²', { it: false, fs: 10 });
  s += eq(20, 215, ['U = −', { n: 'GMm', d: 'r' }]) + eq(215, 215, ['g = ', { n: 'GM', d: 'r^{2}' }]);
  return s;
});

/* ======================= Energy / momentum / rotation / SHM enrichments ======================= */
defH('energy-bars', '能量条形图：U 与 K 的转换 · Energy bar chart: conversion between U and K', 'E=K+U=\\text{常量}', {
  start: '初态：U 最大、K = 0，总能量 E 守恒 · Initial state: U is maximum, K = 0, total energy E conserved',
  mid: '中间态：U 与 K 同时存在，U + K = E · Intermediate state: U and K coexist, U + K = E',
  end: '末态：U = 0、K 最大，U 全部转化为 K · Final state: U = 0, K is maximum, all U has become K',
}, () => {
  let s = ln(35, 210, 365, 210, { w: 1.6 }) + ln(35, 40, 35, 210, { w: 1.6 });
  const groups = [{ x: 55, u: 120, k: 0, label: '初', key: 'start' }, { x: 155, u: 60, k: 60, label: '中', key: 'mid' }, { x: 255, u: 0, k: 120, label: '末', key: 'end' }];
  groups.forEach((g) => {
    const inner = bar(g.x, 210, 24, g.u, 'f', 0.28) + bar(g.x + 30, 210, 24, g.k, 'v', 0.25) + tx(g.x + 27, 228, g.label, { anchor: 'middle', fs: 11, it: false });
    s += part(g.key, inner, { x: g.x - 4, y: 78, w: 62, h: 156 });
  });
  s += tx(50, 60, 'U', { c: 'f', fs: 11 }) + tx(84, 60, 'K', { c: 'v', fs: 11 });
  s += ln(45, 90, 340, 90, { c: 'm', dash: '5 4', w: 1 }) + tx(345, 94, 'E', { fs: 11 });
  s += tx(40, 26, '下落过程：U → K，总能量不变', { it: false, fs: 11 });
  return s;
}, {
  partsHint: '悬停 / 点击初、中、末状态：查看能量分配 · Hover / click the initial, middle or final state to see the energy split',
});
defI('work-incline', '斜面上各力做功：W_g、W_f、W_N · Work by each force on an incline: W_g, W_f, W_N', 'W_{\\rm net}=W_g+W_f+W_N=\\Delta K', [
  { key: 'th', label: '倾角 θ', min: 15, max: 32, step: 1, value: 25, unit: '°' },
  { key: 'muk', label: '动摩擦 μk', min: 0.1, max: 0.8, step: 0.005, value: 0.585 },
], (p) => {
  const th = p.th ?? 25, muK = p.muk ?? 0.585, I = incline(th, 25, 190, 300); const b = I.block(110, 34, 'm'); const C = b.C; let s = I.s + b.svg;
  const mg = 64; s += arr(C[0], C[1], C[0], C[1] + mg, 'f') + tx(C[0] + 5, C[1] + mg - 6, 'mg', { c: 'f' });
  const Ne = add(C, I.n, 48); s += arr(C[0], C[1], Ne[0], Ne[1], 'f') + tx(Ne[0] + 5, Ne[1], 'N', { c: 'f' });
  const fe = add(C, I.u, -muK * mg * Math.cos(rad(th))); s += arr(C[0], C[1], fe[0], fe[1], 'f') + tx(fe[0] - 4, fe[1] + 12, 'f_k', { c: 'f', anchor: 'end' });
  const d0 = add(C, I.u, -18), d1 = add(d0, I.u, 58); s += arr(d0[0], d0[1], d1[0], d1[1], 'a', 1.6) + tx(d1[0] + 4, d1[1] + 4, 'd', { c: 'a' });
  s += tx(20, 26, '下滑 d：重力做正功，摩擦做负功', { it: false, fs: 11 });
  s += eq(20, 218, ['W_g = mgd sin θ']) + eq(20, 242, ['W_f = −f_k d，W_N = 0']) + eq(245, 218, ['ΔK = W_{net}']);
  return s;
}, {
  status: (p) => {
    const th = p.th ?? 25, mu = p.muk ?? 0.585;
    return `W_g = ${Math.sin(rad(th)).toFixed(2)} mgd，W_f = −${(mu * Math.cos(rad(th))).toFixed(2)} mgd`;
  },
});
def('work-angle', '功的符号：F 与 d 的夹角 · Sign of work: angle between F and d', 'W=Fd\\cos\\theta', () => {
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
defI('power-graph', '恒定作用力：P = Fv · Constant force: P = Fv', 'P=\\dfrac{dW}{dt}=Fv', [
  { key: 'F', label: '恒力 F', min: 0.3, max: 1, step: 0.05, value: 1 },
], (p) => {
  const F = p.F ?? 1, ymax = Math.max(1.1, 1.1 * F);
  const g = graph(55, 35, 190, 145, { fns: [{ f: (t) => t * F, c: 'f' }], t1: 1, ymin: 0, ymax, xl: 'v', yl: 'P' });
  let s = g.s + tx(55, 24, '恒力：P ∝ v', { it: false, fs: 11 }) + eq(265, 80, ['P = Fv']) + eq(265, 130, ['P = ', { n: 'dW', d: 'dt' }]) + tx(265, 202, '瞬时功率', { it: false, fs: 11 });
  return s;
});
defH('momentum-bars', '碰撞前后动量条形图（等质量弹性碰撞） · Momentum bar chart before and after (equal-mass elastic collision)', 'p_{1i}+p_{2i}=p_{1f}+p_{2f}', {
  before: '碰前：p₁ = p₀，p₂ = 0；总动量 p₀ · Before: p₁ = p₀, p₂ = 0; total momentum p₀',
  after: '碰后（等质量弹性碰撞）：p₁ = 0，p₂ = p₀；总动量仍为 p₀ · After (equal-mass elastic): p₁ = 0, p₂ = p₀; total momentum still p₀',
}, () => {
  let s = ln(35, 150, 365, 150, { w: 1.6 });
  s += part('before', tx(80, 30, '碰前', { anchor: 'middle', it: false, fs: 11 }) + bar(60, 150, 28, 80, 'v', 0.25) + tx(74, 62, 'p₁', { c: 'v', anchor: 'middle', fs: 11 }) + tx(125, 145, 'p₂ = 0', { fs: 10, anchor: 'middle', it: false }), { x: 42, y: 18, w: 118, h: 145 });
  s += part('after', tx(260, 30, '碰后', { anchor: 'middle', it: false, fs: 11 }) + bar(240, 150, 28, 80, 'v', 0.25) + tx(254, 62, 'p₂', { c: 'v', anchor: 'middle', fs: 11 }) + tx(300, 145, 'p₁ = 0', { fs: 10, anchor: 'middle', it: false }), { x: 218, y: 18, w: 118, h: 145 });
  s += ln(35, 70, 365, 70, { c: 'm', dash: '5 4', w: 1 }) + tx(370, 74, 'p', { fs: 10 });
  s += eq(40, 220, ['p_{1i}+p_{2i}=p_{1f}+p_{2f}']);
  return s;
}, {
  partsHint: '悬停 / 点击碰前或碰后：查看动量分配 · Hover / click before or after to see the momentum split',
});
def('explosion', '爆炸 / 反冲：总动量为零 · Explosion / recoil: total momentum is zero', '0=m_1v_1+m_2v_2', () => {
  let s = tx(20, 28, '碰前（静止）', { it: false, fs: 11 }) + mass(165, 60, 55, 32, 'm₁+m₂');
  s += tx(20, 140, '碰后', { it: false, fs: 11 }) + mass(80, 170, 50, 30, 'm₁') + mass(270, 170, 50, 30, 'm₂');
  s += arr(80, 185, 40, 185, 'v') + tx(38, 178, 'v₁', { c: 'v', anchor: 'end' }) + arr(320, 185, 360, 185, 'v') + tx(362, 178, 'v₂', { c: 'v' });
  s += eq(40, 235, ['0 = m₁v₁ + m₂v₂']);
  return s;
});
defI('seesaw', '杠杆平衡：力矩相等 · Lever balance: equal torques', 'm_1gd_1=m_2gd_2', [
  { key: 'ratio', label: 'm₂ / m₁', min: 0.7, max: 2, step: 0.05, value: 1 },
], (p) => {
  const ratio = p.ratio ?? 1, c2 = 200 + 100 / ratio;
  let s = hatch(20, 220, 380);
  s += `<polygon points="200,200 180,230 220,230" style="fill:none;stroke:currentColor;stroke-width:1.6"/>`;
  s += ln(60, 170, 340, 170, { w: 5 }) + circ(200, 170, 4, { fill: 'currentColor' });
  s += mass(80, 140, 40, 30, 'm₁') + mass(c2 - 20, 140, 40, 30, 'm₂');
  s += arr(100, 170, 100, 220, 'f') + tx(106, 210, 'm₁g', { c: 'f' }) + arr(c2, 170, c2, 220, 'f') + tx(c2 + 6, 210, 'm₂g', { c: 'f' });
  s += arr(100, 195, 195, 195, 'm', 1) + tx(148, 190, 'd₁', { anchor: 'middle', fs: 11 }) + arr(205, 195, c2, 195, 'm', 1) + tx((205 + c2) / 2, 190, 'd₂', { anchor: 'middle', fs: 11 });
  s += eq(40, 248, ['m₁gd₁ = m₂gd₂']);
  return s;
}, {
  status: (p) => `d₂ / d₁ = m₁ / m₂ = ${(1 / (p.ratio ?? 1)).toFixed(2)}`,
});
defH('moment-of-inertia', '常见刚体的转动惯量（绕中心轴） · Moments of inertia of common rigid bodies (about the central axis)', 'I_{\\text{hoop}}=MR^2,I_{\\text{disk}}=\\dfrac12MR^2,I_{\\text{sphere}}=\\dfrac25MR^2' + CAP_DESCENT, {
  hoop: '圆环（薄壁圆筒）绕中心轴：I = MR² · Hoop (thin cylindrical shell) about its central axis: I = MR²',
  disk: '均匀圆盘绕中心轴：I = ½MR² · Uniform disk about its central axis: I = ½MR²',
  sphere: '均匀实心球绕直径：I = ⅖MR² · Uniform solid sphere about a diameter: I = ⅖MR²',
  rod: '均匀细杆绕中心：I = (1/12)ML² · Uniform thin rod about its center: I = (1/12)ML²',
}, () => {
  let s = tx(20, 24, '绕中心轴 / 质心轴', { it: false, fs: 11 });
  s += part('hoop', circ(105, 78, 26, { w: 2.4 }) + tx(105, 124, 'I = MR²', { anchor: 'middle', fs: 11 }), { x: 70, y: 44, w: 70, h: 88 });
  s += part('disk', circ(295, 78, 26, { fill: 'currentColor', op: 0.08, w: 2.2 }) + tx(295, 124, 'I = ½MR²', { anchor: 'middle', fs: 11 }), { x: 260, y: 44, w: 70, h: 88 });
  s += part('sphere', circ(105, 185, 26, { w: 2.2 }) + arc(105, 185, 26, 0, 180, { c: 'm', w: 1 }) + tx(105, 231, 'I = ⅖MR²', { anchor: 'middle', fs: 11 }), { x: 70, y: 151, w: 70, h: 88 });
  s += part('rod', ln(255, 185, 335, 185, { w: 4 }) + circ(295, 185, 3, { fill: 'currentColor' }) + eq(262, 226, ['I = ', { n: '1', d: '12' }, 'ML²'], { fs: 11 }), { x: 250, y: 165, w: 90, h: 70 });
  s += tx(20, 250, '圆环 / 圆盘 / 实心球 / 细杆', { it: false, fs: 10 });
  return s;
}, {
  partsHint: '悬停 / 点击刚体：查看对应转动惯量 · Hover / click a rigid body to see its moment of inertia',
});
defI('rolling-race', '纯滚动比赛：球 > 盘 > 环 · Rolling race: sphere > disk > hoop', 'a=\\dfrac{g\\sin\\theta}{1+\\dfrac{I}{MR^2}}' + CAP_DESCENT, [
  { key: 'th', label: '倾角 θ', min: 15, max: 30, step: 1, value: 22, unit: '°' },
], (p) => {
  const th = p.th ?? 22, I = incline(th, 20, 215, 340); let s = I.s;
  const R = 16;
  const items = [{ d: 55, label: '环' }, { d: 125, label: '盘' }, { d: 200, label: '球' }];
  items.forEach((it) => {
    const P0 = add([20, 215], I.u, it.d), C = add(P0, I.n, R);
    s += circ(C[0], C[1], R) + tx(C[0], C[1] + 5, it.label, { anchor: 'middle', fs: 11 });
  });
  s += tx(20, 26, '同一高度释放，忽略滑动', { it: false, fs: 11 }) + eq(230, 60, ['a = ', { n: 'g sin θ', dPrefix: '1 + ', d: { n: 'I', d: 'MR²' } }], { fs: 11 }) + tx(230, 140, '球先到；环最后', { it: false, fs: 11 });
  return s;
});
def('angular-momentum-skater', '角动量守恒：收臂减小 I、增大 ω · Conservation of angular momentum: pulling arms in reduces I and increases ω', 'L=I\\omega,\\;\\; I_1\\omega_1=I_2\\omega_2', () => {
  let s = tx(20, 26, '收臂：I 减小，ω 增大，L 不变', { it: false, fs: 11 });
  const skater = (cx, arm) => circ(cx, 120, 14, { fill: 'currentColor', op: 0.12 }) + ln(cx, 120, cx - arm, 112, { w: 4 }) + ln(cx, 120, cx + arm, 112, { w: 4 }) + ln(cx, 120, cx - 8, 162, { w: 4 }) + ln(cx, 120, cx + 8, 162, { w: 4 });
  s += skater(105, 52) + tx(105, 195, 'I₁ 大，ω₁ 小', { anchor: 'middle', it: false, fs: 11 }) + arc(105, 120, 66, 120, 60, { c: 'a', w: 1.4, me: 'a' }) + tx(105, 72, 'ω₁', { c: 'a', anchor: 'middle', fs: 11 });
  s += skater(295, 22) + tx(295, 195, 'I₂ 小，ω₂ 大', { anchor: 'middle', it: false, fs: 11 }) + arc(295, 120, 45, 120, 60, { c: 'a', w: 1.4, me: 'a' }) + tx(295, 92, 'ω₂', { c: 'a', anchor: 'middle', fs: 11 });
  s += eq(100, 228, ['I₁ω₁ = I₂ω₂']);
  return s;
});
def('orbit-energy', '圆轨道能量：E < 0 为束缚轨道 · Circular-orbit energy: E < 0 is a bound orbit', 'E=-\\dfrac{GMm}{2r}', () => {
  const g = graph(55, 35, 180, 140, { fns: [{ f: (t) => -1.0 / (1 + 1.5 * t), c: 'v' }], t1: 1, ymin: -1.2, ymax: 0.2, xl: 'r', yl: 'E', hmarks: [{ v: 0, label: 'E = 0' }] });
  let s = g.s + eq(255, 70, ['E = −', { n: 'GMm', d: '2r' }]) + tx(255, 125, 'E < 0：束缚轨道', { it: false, fs: 11 }) + tx(255, 150, 'E = 0：刚好逃逸', { it: false, fs: 11 }) + tx(255, 175, 'E > 0：双曲线轨道', { it: false, fs: 11 });
  return s;
});
def('shm-energy', 'SHM 能量：K 与 U 互相转换 · SHM energy: K and U interchange', 'E=K+U=\\dfrac12kA^2', () => {
  const g = graph(30, 40, 155, 130, { fns: [{ f: (t) => (2 * t - 1) ** 2, c: 'f' }], t1: 1, ymin: 0, ymax: 1.15, xl: 'x', yl: 'U', hmarks: [{ v: 0.9, label: 'E' }], vmarks: [{ t: 0.1, label: '−A' }, { t: 0.9, label: 'A' }] });
  let s = g.s + tx(30, 24, 'x = 0：K 最大；x = ±A：U 最大', { it: false, fs: 10 });
  s += ln(210, 200, 380, 200, { w: 1.4 });
  s += bar(225, 200, 24, 110, 'v', 0.25) + tx(237, 208, 'K', { c: 'v', anchor: 'middle', fs: 10 }) + tx(237, 228, 'x=0', { anchor: 'middle', fs: 10, it: false });
  s += bar(330, 200, 24, 110, 'f', 0.28) + tx(342, 208, 'U', { c: 'f', anchor: 'middle', fs: 10 }) + tx(342, 228, 'x=±A', { anchor: 'middle', fs: 10, it: false });
  s += eq(40, 240, ['E = ', { n: '1', d: '2' }, 'kA²']);
  return s;
});
defI('shm-phase', 'SHM 与匀速圆周运动的投影 · SHM as the projection of uniform circular motion', 'x=A\\cos(\\omega t+\\phi)', [
  { key: 'ph', label: '相位 φ', min: 0, max: 360, step: 5, value: 60, unit: '°' },
], (p) => {
  const ph = p.ph ?? 60, cx = 140, cy = 130, r = 75; let s = circ(cx, cy, r, { c: 'm', dash: '5 4' }) + ln(cx, cy, cx + r + 35, cy, { w: 1.4 }) + ln(cx, cy, cx, cy - r - 10, { w: 1.4 });
  const [px, py] = pt(cx, cy, r, ph); s += ln(cx, cy, px, py, { c: 'm', w: 1.2 }) + arc(cx, cy, 28, 0, ph, { c: 'm', w: 1 }) + tx(cx + 32, cy - 10, 'ωt', { fs: 11 });
  s += circ(px, py, 5, { fill: 'currentColor' }) + ln(px, py, px, cy, { c: 'm', dash: '3 3', w: 1 }) + circ(px, cy, 4, { fill: COL.v, c: 'v' }) + tx(px + 6, cy + 16, 'x', { c: 'v', fs: 12 });
  s += tx(120, 112, 'A', { fs: 11 }) + tx(20, 24, '参考圆：半径 A，角速度 ω', { it: false, fs: 11 }) + eq(250, 90, ['x = A cos(ωt + φ)']) + tx(250, 145, '投影位置 x 随时间按余弦变化', { it: false, fs: 11 });
  return s;
}, {
  status: (p) => `x = A cos φ = ${Math.cos(rad(p.ph ?? 60)).toFixed(2)}A`,
});
def('pendulum-period', '单摆周期：T ∝ √L · Simple pendulum period: T ∝ √L', 'T=2\\pi\\sqrt{\\dfrac{L}{g}}', () => {
  const g = graph(55, 35, 190, 145, { fns: [{ f: (t) => Math.sqrt(t), c: 'a' }], t1: 1, ymin: 0, ymax: 1.15, xl: 'L', yl: 'T' });
  let s = g.s + tx(55, 24, '小角近似', { it: false, fs: 11 }) + eq(265, 70, ['T = 2π', { sqrt: { n: 'L', d: 'g' } }]) + tx(265, 135, '与质量、振幅无关（小角）', { it: false, fs: 11 }) + tx(265, 170, 'T ∝ √L', { it: false, fs: 11 });
  return s;
});
defI('physical-pendulum-fbd', '复摆：重力对转轴的力矩 · Physical pendulum: torque of gravity about the pivot', 'T=2\\pi\\sqrt{\\dfrac{I}{mgd}},\\;\\; \\tau=-mgd\\sin\\theta', [
  { key: 'th', label: '摆角 θ', min: 5, max: 40, step: 1, value: 20, unit: '°' },
], (p) => {
  const px = 160, py = 40, L = 180, th = p.th ?? 20; const ex = px + L * Math.sin(rad(th)), ey = py + L * Math.cos(rad(th));
  let s = hatch(px - 40, py, px + 40) + `<polygon points="${px},${py} ${px - 10},${py + 18} ${px + 10},${py + 18}" style="fill:none;stroke:currentColor;stroke-width:1.5"/>`;
  s += ln(px, py, ex, ey, { w: 5 }) + circ(px, py, 3, { fill: 'currentColor' }) + ln(px, py, px, py + L, { c: 'm', dash: '4 4', w: 1 }) + arc(px, py, 45, 90 - th, 90, { c: 'm', w: 1 }) + tx(px + 14, py + 52, 'θ', { fs: 11 });
  const cm = [(px + ex) / 2, (py + ey) / 2]; s += circ(cm[0], cm[1], 4, { fill: 'currentColor' }) + arr(cm[0], cm[1], cm[0], cm[1] + 52, 'f') + tx(cm[0] + 5, cm[1] + 48, 'mg', { c: 'f' });
  s += arr(px, py, px, py - 34, 'f') + tx(px + 6, py - 28, 'F_p', { c: 'f', fs: 11 }) + tx(20, 24, '质心距转轴 d；τ 使 θ 减小', { it: false, fs: 11 }) + eq(20, 225, ['τ = −mgd sin θ']) + eq(190, 225, ['T = 2π', { sqrt: { n: 'I', d: 'mgd' } }], { fs: 12 });
  return s;
}, {
  status: (p) => `sin θ = ${Math.sin(rad(p.th ?? 20)).toFixed(2)}：θ 增大，回复力矩 |τ| 增大`,
});
def('wave-properties', '机械波：波长、振幅与波速 · Mechanical Waves', 'v=f\\lambda=\\dfrac{\\lambda}{T}', () => {
  const y = 145, A = 45, x0 = 45, lam = 120;
  const pts = [];
  for (let i = 0; i <= 160; i++) {
    const x = 35 + (330 * i) / 160;
    pts.push([x, y - A * Math.sin((2 * Math.PI * (x - x0)) / lam)]);
  }
  let s = ln(30, y, 375, y, { c: 'm', dash: '3 3', w: 1 }) + poly(pts, { c: 'v', w: 2 });
  const c1 = x0 + lam / 4, c2 = c1 + lam;
  s += arr(c1, y - A - 8, c2, y - A - 8, 'g', 1.2) + tx((c1 + c2) / 2, y - A - 14, 'λ', { anchor: 'middle', fs: 12 });
  s += arr(c1, y, c1, y - A, 'g', 1.2) + tx(c1 + 7, y - A / 2, 'A', { fs: 12 });
  s += arr(245, y + 60, 330, y + 60, 'v', 2) + tx(336, y + 64, 'v', { c: 'v' });
  s += tx(20, 24, '波峰到波峰的距离 = 一个波长 λ', { it: false, fs: 11 });
  s += eq(20, 235, ['v = fλ = ', { n: 'λ', d: 'T' }], { fs: 12 });
  return s;
});
def('standing-wave', '驻波：波节、波腹与边界条件 · Standing Waves', 'L=n\\dfrac{\\lambda}{2},\\; f_n=\\dfrac{nv}{2L}', () => {
  const x1 = 50, x2 = 350, y = 140, A = 42;
  const pts = [], pts2 = [];
  for (let i = 0; i <= 200; i++) {
    const x = x1 + ((x2 - x1) * i) / 200;
    const dy = A * Math.sin((2 * Math.PI * (x - x1)) / 150);
    pts.push([x, y - dy]); pts2.push([x, y + dy]);
  }
  let s = ln(x1, y - 58, x1, y + 58, { w: 2.4 }) + ln(x2, y - 58, x2, y + 58, { w: 2.4 });
  s += poly(pts, { c: 'v', w: 2 }) + poly(pts2, { c: 'm', w: 1.4, dash: '5 4' });
  [50, 125, 200, 275, 350].forEach((x) => { s += circ(x, y, 3, { fill: 'currentColor' }); });
  s += tx(125, y + 20, 'N', { anchor: 'middle', fs: 10, it: false }) + tx(87.5, y - A - 8, 'A', { anchor: 'middle', fs: 10, c: 'm', it: false });
  s += ln(x1, 220, x2, 220, { w: 1 }) + ln(x1, 214, x1, 226, { w: 1 }) + ln(x2, 214, x2, 226, { w: 1 }) + tx(200, 214, 'L', { anchor: 'middle', fs: 11 });
  s += tx(20, 24, '两端固定：边界为波节，相邻波节间距为半个波长', { it: false, fs: 10 });
  s += eq(20, 246, ['L = n', { n: 'λ', d: '2' }, '，f_n = ', { n: 'nv', d: '2L' }], { fs: 11 });
  return s;
});

/* ======================= E&M enrichments ======================= */
defI('coulomb-force', '库仑力：异号相吸、同号相斥 · Coulomb force: opposite charges attract, like charges repel', 'F=k\\dfrac{|q_1q_2|}{r^2}', [
  { key: 'sep', label: '电荷间距 r', min: 60, max: 150, step: 5, value: 100, unit: '' },
  { key: 'mode', label: '电荷', type: 'choice', value: 'attract', options: [{ value: 'attract', label: '异号相吸' }, { value: 'repel', label: '同号相斥' }] },
], (p) => {
  const sep = p.sep ?? 100, attract = (p.mode ?? 'attract') === 'attract';
  const x1 = 135 - sep / 2, x2 = 135 + sep / 2;
  let s = tx(20, 26, attract ? '异号电荷：力指向彼此' : '同号电荷：力背离彼此', { it: false, fs: 11 });
  s += circ(x1, 115, 14, { c: 'E', w: 1.8 }) + tx(x1, 120, '+', { anchor: 'middle', it: false, fs: 14, c: 'E' });
  s += circ(x2, 115, 14, { c: 'B', w: 1.8 }) + tx(x2, 120, attract ? '−' : '+', { anchor: 'middle', it: false, fs: 14, c: 'B' });
  if (attract) {
    s += arr(x1 + 14, 115, x1 + 54, 115, 'f') + tx(x1 + 34, 105, 'F₁₂', { c: 'f', anchor: 'middle', fs: 11 }) + arr(x2 - 14, 115, x2 - 54, 115, 'f') + tx(x2 - 34, 135, 'F₂₁', { c: 'f', anchor: 'middle', fs: 11 });
  } else {
    s += arr(x1 - 14, 115, x1 - 54, 115, 'f') + tx(x1 - 20, 105, 'F₁₂', { c: 'f', anchor: 'end', fs: 11 }) + arr(x2 + 14, 115, x2 + 54, 115, 'f') + tx(x2 + 20, 135, 'F₂₁', { c: 'f', fs: 11 });
  }
  s += tx(x1, 155, 'q₁', { anchor: 'middle', fs: 12 }) + tx(x2, 155, 'q₂', { anchor: 'middle', fs: 12 });
  s += tx(20, 195, attract ? '异号：方向相反（吸引） · Opposite charges attract' : '同号：方向相反（排斥） · Like charges repel', { it: false, fs: 10, ws: 1.6 });
  const g = graph(250, 40, 110, 120, { fns: [{ f: (t) => 1.1 / (1 + 2.5 * t) ** 2, c: 'f' }], t1: 1, ymin: 0, ymax: 1.2, xl: 'r', yl: 'F' });
  s += g.s + eq(20, 235, ['F = k', { n: '|q₁q₂|', d: 'r²' }]);
  return s;
}, {
  status: (p) => `r = ${p.sep ?? 100}：F ∝ 1/r²，r 增大时力迅速减小`,
});
defI('field-vectors', '点电荷电场：E 随距离按 1/r² 减小 · Point-charge field: E decreases with distance as 1/r²', 'E=k\\dfrac{q}{r^2}', [
  { key: 'sign', label: '电荷', type: 'choice', value: 'pos', options: [{ value: 'pos', label: '+q' }, { value: 'neg', label: '−q' }] },
], (p) => {
  const neg = (p.sign ?? 'pos') === 'neg';
  const cx = 145, cy = 130; const col = neg ? 'v' : 'E'; let s = circ(cx, cy, 8, { fill: COL[col], c: col, op: 0.55 }) + tx(cx, cy + 4, neg ? '−' : '+', { anchor: 'middle', it: false, fs: 12, c: col });
  s += circ(cx, cy, 52, { c: 'm', dash: '4 4', w: 1 }) + circ(cx, cy, 100, { c: 'm', dash: '4 4', w: 1 });
  // Arrow length is proportional to E ∝ 1/r²: L(100)/L(52) = (52/100)².
  const L1 = 42, L2 = Math.max(10, L1 * (52 / 100) ** 2);
  [0, 90, 180, 270].forEach((a) => {
    const p1 = pt(cx, cy, 52, a), p2 = pt(cx, cy, 100, a);
    const q1 = pt(cx, cy, 52 + L1, a), q2 = pt(cx, cy, 100 + L2, a);
    if (!neg) {
      s += arr(p1[0], p1[1], q1[0], q1[1], 'E', 2);
      s += arr(p2[0], p2[1], q2[0], q2[1], 'E', 1.8);
    } else {
      s += arr(q1[0], q1[1], p1[0], p1[1], 'E', 2);
      s += arr(q2[0], q2[1], p2[0], p2[1], 'E', 1.8);
    }
  });
  s += tx(250, 70, 'r 处箭头长度 ∝ 1/r²', { it: false, fs: 11 }) + eq(270, 115, ['E = k', { n: 'q', d: 'r²' }]) + tx(250, 175, neg ? '方向沿径向（负电荷指向电荷）' : '方向沿径向（正电荷向外）', { it: false, fs: 11 });
  return s;
}, {
  status: (p) => (p.sign ?? 'pos') === 'neg' ? '−q：电场线指向电荷，E 方向与 +q 相反' : '+q：电场线沿径向向外',
});
def('field-superposition', '电场叠加：先求各场强，再矢量相加 · Field superposition: find each field, then add as vectors', '\\vec E=\\sum_i k\\dfrac{q_i}{r_i^2}\\hat r_i', () => {
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
def('line-charge', '无限长线电荷：圆柱形高斯面 · Infinite line charge: cylindrical Gaussian surface', 'E=\\dfrac{\\lambda}{2\\pi\\varepsilon_0 r}', () => {
  let s = ln(130, 40, 130, 220, { w: 3, c: 'I' }) + tx(136, 48, 'λ', { c: 'I', fs: 12 });
  for (let y = 55; y <= 205; y += 30) s += tx(123, y, '+', { c: 'I', it: false, fs: 11, anchor: 'end' });
  s += `<ellipse cx="130" cy="60" rx="55" ry="14" style="fill:none;stroke:${COL.m};stroke-dasharray:5 4;stroke-width:1.2"/>`;
  s += `<ellipse cx="130" cy="200" rx="55" ry="14" style="fill:none;stroke:${COL.m};stroke-dasharray:5 4;stroke-width:1.2"/>`;
  [80, 130, 180].forEach((y) => { s += arr(130, y, 78, y, 'E', 1.6) + arr(130, y, 182, y, 'E', 1.6); });
  s += tx(180, 90, 'E', { c: 'E', fs: 11 }) + tx(20, 26, '取同轴圆柱面，侧面通量 = E·2πrℓ', { it: false, fs: 11 }) + eq(240, 70, ['E = ', { n: 'λ', d: '2πε₀r' }]) + tx(240, 135, '方向沿径向', { it: false, fs: 11 });
  return s;
});
defH('flux-angle', '电通量：只有法向分量贡献 Φ_E · Electric flux: only the normal component contributes to Φ_E', '\\Phi_E=EA\\cos\\theta', {
  area: '面积矢量 A：大小等于面积，方向沿法线 · Area vector A: magnitude equals the area, direction along the normal',
  normal: '法线 n 与 E 的夹角为 θ；Φ_E = EA cos θ · The angle between normal n and E is θ; Φ_E = EA cos θ',
  field: '电场 E：只有垂直于面积的分量穿过该面 · Field E: only the component perpendicular to the area passes through',
}, () => {
  let s = part('field', arr(85, 65, 125, 85, 'E', 1.8) + arr(120, 45, 160, 65, 'E', 1.8) + arr(155, 25, 195, 45, 'E', 1.8) + tx(92, 44, 'E', { c: 'E', fs: 12 }), { x: 60, y: 20, w: 140, h: 80 });
  s += part('area', `<polygon points="95,175 225,150 270,95 140,120" style="fill:${COL.B};fill-opacity:0.10;stroke:${COL.B};stroke-width:1.6"/>`, { x: 90, y: 90, w: 185, h: 90 });
  s += part('normal', ln(182, 135, 210, 70, { c: 'f', w: 2 }) + tx(214, 64, 'n', { c: 'f', fs: 12 }), { x: 174, y: 58, w: 50, h: 88 });
  s += tx(20, 26, '面积矢量 A 与 E 的夹角 θ', { it: false, fs: 11 });
  s += eq(245, 80, ['Φ_{E} = EA cos θ']) + tx(245, 135, 'θ = 0：Φ 最大', { it: false, fs: 11 }) + tx(245, 158, 'θ = 90°：Φ = 0', { it: false, fs: 11 });
  return s;
}, {
  partsHint: '悬停 / 点击面积、法线或电场：高亮对应部分 · Hover / click the area, normal or field to highlight it',
});
defH('gauss-shell', '导体球壳：腔内电荷与表面感应电荷 · Conducting spherical shell: cavity charge and induced surface charge', '\\oint\\vec E\\cdot d\\vec A=\\dfrac{Q_{\\rm enc}}{\\varepsilon_0}', {
  cavity: '腔内 +q：若腔内无其他电荷，高斯面内 Q_enc = +q · Cavity +q: with no other charge inside, Q_enc = +q on the Gaussian surface',
  inner: '导体内表面感应 −q（与腔内电荷等量异号） · Inner surface induced charge −q (equal and opposite to the cavity charge)',
  outer: '外表面感应 +q（导体净电荷为零时） · Outer surface induced charge +q (when the conductor is neutral)',
  gauss: '导体内高斯面：E = 0，Q_enc = 0 · Gaussian surface inside the conductor: E = 0, Q_enc = 0',
}, () => {
  const cx = 150, cy = 130;
  let s = circ(cx, cy, 95, { w: 2.2 }) + circ(cx, cy, 55, { w: 2.2 });
  let outer = '';
  for (const a of [20, 80, 140, 200, 260, 320]) { const q = pt(cx, cy, 95, a); outer += tx(q[0], q[1], '+', { anchor: 'middle', fs: 11, c: 'E' }); }
  s += part('outer', outer, { x: 48, y: 28, w: 204, h: 204 });
  s += part('gauss', circ(cx, cy, 75, { c: 'm', dash: '4 4', w: 1 }), { x: 70, y: 50, w: 160, h: 160 });
  let inner = '';
  for (const a of [30, 90, 150, 210, 270, 330]) { const q = pt(cx, cy, 55, a); inner += tx(q[0], q[1], '−', { anchor: 'middle', fs: 12, c: 'B' }); }
  s += part('inner', inner, { x: 88, y: 68, w: 124, h: 124 });
  s += part('cavity', circ(cx, cy, 6, { fill: COL.E, c: 'E', op: 0.55 }) + tx(cx, cy + 4, '+q', { anchor: 'middle', fs: 10, c: 'E', it: false }), { x: 130, y: 110, w: 40, h: 40 });
  s += tx(20, 18, '导体内部 E = 0；内表面 −q，外表面 +q', { it: false, fs: 10 }) + eq(255, 70, ['E = 0 （导体内）']) + eq(255, 120, ['E = k', { n: 'q', d: 'r²' }, ' （壳外）'], { fs: 12 });
  return s;
}, {
  partsHint: '悬停 / 点击腔内电荷、内外表面或高斯面：高亮对应部分 · Hover / click the cavity charge, inner or outer surface, or Gaussian surface to highlight it',
});
def('potential-energy-sign', '电势能的正负：同号与异号电荷 · Sign of potential energy: like and opposite charges', 'U=k\\dfrac{q_1q_2}{r}', () => {
  const g = graph(60, 40, 180, 140, { fns: [{ f: (t) => 0.8 / (t + 0.5), c: 'f' }, { f: (t) => -0.8 / (t + 0.5), c: 'B' }], t1: 1, ymin: -1.1, ymax: 1.1, xl: 'r', yl: 'U', hmarks: [{ v: 0, label: '0' }] });
  let s = g.s + tx(g.X(0.55), g.Y(0.55) - 8, '同号：U > 0', { c: 'f', fs: 10 }) + tx(g.X(0.55), g.Y(-0.55) + 14, '异号：U < 0', { c: 'B', fs: 10 });
  s += eq(255, 70, ['U = k', { n: 'q₁q₂', d: 'r' }]) + tx(270, 125, '异号：U 更负', { it: false, fs: 11 }) + tx(270, 150, '同号：U 更正', { it: false, fs: 11 }) + tx(270, 185, '无穷远 U = 0', { it: false, fs: 11 });
  return s;
});
def('potential-point-charge', '点电荷电势：V 随 r 按 1/r 减小 · Point-charge potential: V decreases with r as 1/r', 'V=k\\dfrac{q}{r}', () => {
  const cx = 115, cy = 130; let s = circ(cx, cy, 8, { fill: COL.E, c: 'E', op: 0.55 }) + tx(cx, cy + 4, '+', { anchor: 'middle', fs: 12, c: 'E', it: false });
  [40, 70, 100].forEach((r, i) => { s += circ(cx, cy, r, { c: 'm', dash: '4 4', w: 1 }) + tx(cx + r - 4, cy - 6, `V${i + 1}`, { c: 'm', fs: 10, anchor: 'end' }); });
  const g = graph(245, 40, 115, 125, { fns: [{ f: (t) => 1.2 / (1 + 2 * t), c: 'E' }], t1: 1, ymin: 0, ymax: 1.3, xl: 'r', yl: 'V' });
  s += g.s + tx(20, 26, '等势面：同心球面', { it: false, fs: 11 }) + eq(20, 225, ['V = k', { n: 'q', d: 'r' }]) + tx(180, 225, 'V 是标量，可直接相加', { it: false, fs: 11 });
  return s;
});
defI('charge-in-field', '电荷在平行板间移动：W = qEd · Charge moving between parallel plates: W = qEd', 'W=qEd,\\;\\; \\Delta U=-qEd', [
  { key: 'd', label: '板间距 d', min: 80, max: 150, step: 5, value: 150, unit: '' },
], (p) => {
  const d = p.d ?? 150, bot = 55 + d, y0 = 90, y1 = y0 + 80 * d / 150;
  let s = ln(50, 55, 300, 55, { w: 3, c: 'E' }) + ln(50, bot, 300, bot, { w: 3, c: 'B' });
  for (let x = 75; x <= 285; x += 50) { s += tx(x, 48, '+', { c: 'E', it: false, fs: 12, anchor: 'middle' }) + tx(x, bot + 15, '−', { c: 'B', it: false, fs: 12, anchor: 'middle' }); }
  [110, 160, 210, 260].forEach((x) => { s += arr(x, 65, x, bot - 10, 'E', 1.4); });
  s += circ(175, y0, 8, { fill: COL.f, c: 'f', op: 0.5 }) + tx(175, y0 + 4, '+q', { anchor: 'middle', fs: 10, it: false, c: 'f' });
  s += arr(175, y0 + 10, 175, y1, 'a', 1.8) + tx(181, (y0 + 10 + y1) / 2, 'd', { c: 'a' });
  s += tx(20, 26, 'E 向下；正电荷向下移动', { it: false, fs: 11 }) + eq(20, 238, ['W = qEd，ΔU = −qEd']);
  return s;
}, {
  status: (p) => `d = ${p.d ?? 150}：E 固定时 W = qEd 随 d 增大；固定 ΔV 时 E 随 d 增大而减小，W = qΔV 与 d 无关 · Fixed E: W=qEd grows with d; fixed ΔV: E decreases with d, W=qΔV is independent of d`,
});
defH('capacitor-combinations', '电容器的串联与并联 · Capacitors in series and parallel', '\\dfrac1{C_{\\rm eq}}=\\dfrac1{C_1}+\\dfrac1{C_2},\\;\\; C_{\\rm eq}=C_1+C_2', {
  series: '串联：1/C_eq = 1/C₁ + 1/C₂，等效电容小于任一分电容 · Series: 1/C_eq = 1/C₁ + 1/C₂; equivalent capacitance is less than any one capacitor',
  parallel: '并联：C_eq = C₁ + C₂，等效电容等于各分电容之和 · Parallel: C_eq = C₁ + C₂; equivalent capacitance is the sum',
}, () => {
  let ser = tx(30, 28, '串联', { it: false, fs: 11 });
  ser += ln(30, 70, 170, 70, { w: 1.6 }) + ln(30, 185, 170, 185, { w: 1.6 });
  ser += capacitor(80, 70, 80, 120, 'C₁') + capacitor(125, 120, 125, 185, 'C₂');
  ser += ln(80, 120, 125, 120, { w: 1.6 });
  let par = tx(225, 28, '并联', { it: false, fs: 11 });
  par += ln(225, 70, 370, 70, { w: 1.6 }) + ln(225, 185, 370, 185, { w: 1.6 });
  par += ln(260, 70, 260, 110, { w: 1.6 }) + capacitor(260, 110, 260, 155, 'C₁') + ln(260, 155, 260, 185, { w: 1.6 });
  par += ln(335, 70, 335, 110, { w: 1.6 }) + capacitor(335, 110, 335, 155, 'C₂') + ln(335, 155, 335, 185, { w: 1.6 });
  let s = part('series', ser, { x: 22, y: 16, w: 156, h: 182 }) + part('parallel', par, { x: 216, y: 16, w: 162, h: 182 });
  s += eq(20, 225, ['1/C_eq = 1/C₁ + 1/C₂'], { fs: 11 }) + eq(215, 225, ['C_eq = C₁ + C₂'], { fs: 11 });
  return s;
}, {
  partsHint: '悬停 / 点击串联或并联：查看等效电容公式 · Hover / click series or parallel to see the equivalent-capacitance formula',
});
def('capacitor-energy', '电容器储能与场能密度 · Capacitor energy and field energy density', 'U=\\dfrac12CV^2=\\dfrac12QV,\\;\\; u=\\dfrac12\\varepsilon_0E^2', () => {
  let s = ln(50, 70, 190, 70, { w: 3 }) + ln(50, 180, 190, 180, { w: 3 }) + ln(120, 70, 120, 180, { w: 1.6 });
  s += tx(80, 64, '+Q', { anchor: 'middle', fs: 11, it: false }) + tx(80, 198, '−Q', { anchor: 'middle', fs: 11, it: false });
  for (let y = 85; y <= 165; y += 25) s += arr(120, y, 120, y + 14, 'E', 1.4);
  const g = graph(240, 40, 125, 135, { fns: [{ f: (t) => t * t, c: 'f' }], t1: 1, ymin: 0, ymax: 1.1, xl: 'V', yl: 'U' });
  s += g.s + tx(20, 26, '平行板电容器：U ∝ V²', { it: false, fs: 11 }) + eq(20, 225, ['U = ½CV²']) + eq(190, 225, ['u = ½ε₀E²'], { fs: 11 });
  return s;
});
def('circuit-equivalent', '串联与并联的等效电阻 · Equivalent resistance of series and parallel combinations', 'R_{\\rm series}=R_1+R_2,\\;\\; \\dfrac1{R_{\\rm parallel}}=\\dfrac1{R_1}+\\dfrac1{R_2}', () => {
  let s = tx(30, 28, '串联', { it: false, fs: 11 }) + tx(225, 28, '并联', { it: false, fs: 11 });
  s += ln(30, 120, 60, 120, { w: 1.6 }) + resistor(60, 120, 110, 120, 'R₁') + ln(110, 120, 140, 120, { w: 1.6 }) + resistor(140, 120, 190, 120, 'R₂') + ln(190, 120, 210, 120, { w: 1.6 });
  s += ln(225, 70, 370, 70, { w: 1.6 }) + ln(225, 185, 370, 185, { w: 1.6 });
  s += ln(260, 70, 260, 100, { w: 1.6 }) + resistor(260, 100, 260, 155, 'R₁') + ln(260, 155, 260, 185, { w: 1.6 });
  s += ln(335, 70, 335, 100, { w: 1.6 }) + resistor(335, 100, 335, 155, 'R₂') + ln(335, 155, 335, 185, { w: 1.6 });
  s += eq(20, 225, ['R_eq = R₁ + R₂'], { fs: 11 }) + eq(210, 225, ['1/R_eq = 1/R₁ + 1/R₂'], { fs: 11 });
  return s;
});
def('ammeter-voltmeter', '电流表串联、电压表并联 · Ammeter in series, voltmeter in parallel', 'R=\\dfrac{V}{I}', () => {
  let s = battery(50, 200, 50, 60, 'ε', true) + ln(50, 60, 120, 60) + circ(140, 60, 14) + tx(140, 64, 'A', { anchor: 'middle', fs: 11, it: false }) + ln(154, 60, 220, 60);
  s += resistor(220, 60, 220, 150, 'R') + ln(220, 150, 220, 200) + ln(220, 200, 50, 200);
  s += ln(220, 100, 300, 100) + circ(315, 100, 14) + tx(315, 104, 'V', { anchor: 'middle', fs: 11, it: false }) + ln(329, 100, 350, 100) + ln(350, 100, 350, 150) + ln(350, 150, 220, 150);
  s += tx(20, 26, 'A 与 R 串联；V 与 R 并联', { it: false, fs: 11 }) + eq(20, 238, ['R = V/I']);
  return s;
});
def('ohmic-nonohmic', '欧姆器件与非欧姆器件的 I–V 曲线 · I–V curves of ohmic and non-ohmic devices', 'R=\\dfrac{V}{I}', () => {
  const g = graph(55, 40, 185, 145, { fns: [{ f: (t) => t, c: 'f' }, { f: (t) => Math.sqrt(t) * 0.85, c: 'B' }], t1: 1, ymin: 0, ymax: 1.15, xl: 'V', yl: 'I' });
  let s = g.s + tx(g.X(0.7), g.Y(0.7) - 8, '欧姆', { c: 'f', fs: 10, anchor: 'middle' }) + tx(g.X(0.8), g.Y(0.75) + 18, '灯丝', { c: 'B', fs: 10, anchor: 'middle' });
  s += eq(260, 70, ['R = V/I']) + tx(260, 125, '直线：R 恒定', { it: false, fs: 11 }) + tx(260, 150, '曲线：R 随温度变化', { it: false, fs: 11 }) + tx(55, 26, '伏安特性', { it: false, fs: 11 });
  return s;
});
defI('rc-energy', 'RC 充电：电容器储能随时间增长 · RC charging: capacitor energy versus time', 'U_C=\\dfrac12C\\varepsilon^2\\left(1-e^{-\\dfrac{t}{RC}}\\right)^2', [
  { key: 't', label: '时间 t / τ', min: 0, max: 5, step: 0.1, value: 1 },
], (p) => {
  const t = p.t ?? 1, u = (1 - Math.exp(-t)) ** 2;
  const g = graph(55, 40, 190, 140, { fns: [{ f: (x) => (1 - Math.exp(-x)) ** 2, c: 'f' }], t1: 5, ymin: 0, ymax: 1.1, yl: 'U_C', vmarks: [{ t: 1, label: 'τ' }], hmarks: [{ v: 1, label: '½Cε²' }] });
  let s = g.s + (p.__dirty ? ln(g.X(t), 40, g.X(t), 180, { c: 'm', w: 0.8, dash: '3 3' }) + circ(g.X(t), g.Y(u), 4, { fill: COL.f, c: 'f' }) : '');
  s += tx(55, 26, 't → ∞：U_C → ½Cε²', { it: false, fs: 11 }) + eq(260, 70, ['U_C = ', { n: '1', d: '2' }, 'Cε²(1 − e^{−t/RC})²'], { fs: 11 }) + tx(260, 140, '充电过程中电源做功', { it: false, fs: 11 }) + tx(260, 165, '一半储存，一半发热', { it: false, fs: 11 });
  return s;
}, {
  status: (p) => { const t = p.t ?? 1; return `t = ${t.toFixed(1)}τ：U_C = ${(((1 - Math.exp(-t)) ** 2) * 100).toFixed(0)}% × ½Cε²`; },
});
defH('magnetic-force-rhr', '洛伦兹力方向：右手定则 · Direction of Lorentz force: right-hand rule', '\\vec F=q\\vec v\\times\\vec B,\\;\\; F=qvB\\sin\\theta', {
  pos: '+q：v 向右、B 入纸面 ⇒ F 向上（右手定则） · +q: v right, B into page ⇒ F up (right-hand rule)',
  neg: '−q：v 向右、B 入纸面 ⇒ F 向下（与 +q 相反） · −q: v right, B into page ⇒ F down (opposite to +q)',
}, () => {
  const panel = (x0, cx, pos) => {
    let t = '';
    for (let x = x0; x <= x0 + 140; x += 35) for (let y = 60; y <= 200; y += 35) t += crossB(x, y, 4);
    const cy = 130;
    t += circ(cx, cy, 6, { fill: pos ? COL.E : COL.B, c: pos ? 'E' : 'B', op: 0.6 }) + tx(cx, cy + 4, pos ? '+' : '−', { anchor: 'middle', it: false, fs: 10, c: pos ? 'E' : 'B' });
    t += arr(cx + 6, cy, cx + 56, cy, 'v') + tx(cx + 58, cy - 6, 'v', { c: 'v' }) + (pos ? arr(cx, cy - 6, cx, cy - 56, 'f') : arr(cx, cy + 6, cx, cy + 56, 'f')) + tx(cx + 6, pos ? cy - 46 : cy + 50, 'F', { c: 'f' });
    t += tx(cx, 220, pos ? '+q：F 向上' : '−q：F 向下', { anchor: 'middle', it: false, fs: 11 });
    return t;
  };
  let s = tx(20, 26, 'B 入纸面（×），v 向右', { it: false, fs: 11 });
  s += part('pos', panel(40, 110, true), { x: 34, y: 46, w: 160, h: 188 });
  s += part('neg', panel(225, 300, false), { x: 219, y: 46, w: 160, h: 188 });
  s += eq(20, 242, ['F = qvB sin θ']);
  return s;
}, {
  partsHint: '悬停 / 点击 +q 或 −q：比较洛伦兹力方向 · Hover / click +q or −q to compare the Lorentz-force directions',
});
defH('biot-savart', '毕奥–萨伐尔定律：电流元的磁场 · Biot–Savart law: magnetic field of a current element', 'dB=\\dfrac{\\mu_0I}{4\\pi}\\dfrac{dl\\sin\\theta}{r^2}', {
  current: '电流 I 沿导线流动；电流元 dl 取在 P 点附近 · Current I flows along the wire; element dl is near point P',
  dl: '电流元 Idl：方向沿电流，长度取小段 · Current element Idl: direction along the current, small length',
  r: 'r：从电流元指向场点 P 的位置矢量 · r: position vector from the element to field point P',
  theta: 'θ：电流元 dl 与 r 的夹角，只有垂直分量贡献磁场 · θ: angle between dl and r; only the perpendicular component contributes',
  dB: 'dB 垂直于 dl 与 r 所在平面（右手定则） · dB is perpendicular to the plane of dl and r (right-hand rule)',
}, () => {
  let s = part('current', ln(40, 190, 340, 190, { w: 2.4, c: 'I' }) + arr(120, 190, 160, 190, 'I', 2) + tx(140, 180, 'I', { c: 'I', anchor: 'middle' }), { x: 34, y: 160, w: 312, h: 60 });
  s += part('dl', rect(175, 185, 30, 10, { fill: COL.I, op: 0.35, c: 'I' }) + tx(190, 178, 'dl', { c: 'I', anchor: 'middle', fs: 11 }), { x: 168, y: 168, w: 46, h: 38 });
  s += part('r', ln(190, 190, 250, 110, { c: 'm', dash: '3 3', w: 1 }) + tx(212, 142, 'r', { fs: 12 }), { x: 186, y: 106, w: 68, h: 88 });
  s += part('theta', arc(190, 190, 35, 0, 43, { c: 'm', w: 1 }) + tx(204, 162, 'θ', { fs: 11 }), { x: 190, y: 145, w: 60, h: 60 });
  s += part('dB', circ(250, 110, 5, { fill: 'currentColor' }) + tx(256, 104, 'P', { fs: 12 }) + dotB(250, 110, 9, 'B') + tx(264, 132, 'dB ⊙', { c: 'B', fs: 11 }), { x: 236, y: 90, w: 76, h: 60 });
  s += tx(20, 26, '右手：dl × r 的方向即 dB', { it: false, fs: 11 }) + eq(20, 232, ['dB = ', { n: 'μ₀I', d: '4π' }, { n: 'dl sin θ', d: 'r²' }], { fs: 12 });
  return s;
}, {
  partsHint: '悬停 / 点击电流元、r、θ 或 dB：高亮对应部分 · Hover / click the current element, r, θ or dB to highlight it',
});
defH('magnetic-flux-angle', '磁通量：Φ_B = BA cos θ · Magnetic flux: Φ_B = BA cos θ', '\\Phi_B=BA\\cos\\theta', {
  area: '线圈面积 A：方向沿线圈平面法线 · Coil area A: direction along the normal to the coil plane',
  normal: '法线 n 与 B 的夹角为 θ；Φ_B = BA cos θ · The angle between normal n and B is θ; Φ_B = BA cos θ',
  field: '磁场 B：只有沿法线方向的分量贡献磁通量 · Field B: only the component along the normal contributes to the flux',
}, () => {
  let s = part('field', arr(70, 80, 125, 95, 'B', 1.8) + arr(105, 55, 160, 70, 'B', 1.8) + arr(140, 30, 195, 45, 'B', 1.8) + tx(72, 60, 'B', { c: 'B', fs: 12 }), { x: 60, y: 22, w: 140, h: 80 });
  s += part('area', `<polygon points="100,170 230,145 275,90 145,115" style="fill:${COL.B};fill-opacity:0.10;stroke:${COL.B};stroke-width:1.6"/>`, { x: 95, y: 85, w: 185, h: 90 });
  s += part('normal', ln(188, 130, 216, 65, { c: 'f', w: 2 }) + tx(220, 60, 'n', { c: 'f', fs: 12 }), { x: 180, y: 53, w: 50, h: 88 });
  s += tx(20, 26, '线圈平面法线与 B 的夹角 θ', { it: false, fs: 11 });
  s += eq(245, 80, ['Φ_{B} = BA cos θ']) + tx(245, 135, 'θ = 0：Φ 最大', { it: false, fs: 11 }) + tx(245, 158, 'θ = 90°：Φ = 0', { it: false, fs: 11 });
  return s;
}, {
  partsHint: '悬停 / 点击线圈面积、法线或磁场：高亮对应部分 · Hover / click the coil area, normal or field to highlight it',
});
def('flux-emf-graph', '磁通量与感应电动势：相位差 90° · Magnetic flux and induced emf: 90° phase difference', '\\varepsilon=-\\dfrac{d\\Phi_B}{dt}', () => {
  const g1 = graph(55, 38, 250, 62, { fns: [{ f: (t) => Math.cos(2 * Math.PI * t) }], t1: 1.25, ymin: -1.15, ymax: 1.15, yl: 'Φ' });
  const g2 = graph(55, 135, 250, 62, { fns: [{ f: (t) => -Math.sin(2 * Math.PI * t), c: 'f' }], t1: 1.25, ymin: -1.15, ymax: 1.15, yl: 'ε' });
  let s = g1.s + g2.s + tx(20, 18, 'Φ 与 ε 相位差 90°', { it: false, fs: 11 }) + eq(20, 235, ['ε = −dΦ_{B}/dt']);
  return s;
});
def('inductor-energy', '电感储能：U_L = ½LI² · Inductor energy: U_L = ½LI²', 'U_L=\\dfrac12LI^2', () => {
  let s = inductor(120, 60, 120, 190, 'L') + ln(60, 190, 120, 190) + ln(120, 60, 180, 60) + ln(180, 60, 180, 190) + ln(180, 190, 120, 190);
  s += arr(150, 60, 150, 100, 'I', 1.6) + tx(156, 84, 'I', { c: 'I' });
  const g = graph(240, 40, 125, 135, { fns: [{ f: (t) => t * t, c: 'I' }], t1: 1, ymin: 0, ymax: 1.1, xl: 'I', yl: 'U' });
  s += g.s + tx(20, 26, '电流增大，磁场储能增加', { it: false, fs: 11 }) + eq(20, 225, ['U_L = ½LI²']);
  return s;
});
defI('lc-energy', 'LC 振荡：电场能与磁场能互相转换 · LC oscillation: electric and magnetic energy interchange', 'U=\\dfrac{q^2}{2C}+\\dfrac12LI^2=\\text{常量}', [
  { key: 't', label: '时间 t / T', min: 0, max: 1.25, step: 0.01, value: 0 },
], (p) => {
  const t = p.t ?? 0;
  let s = capacitor(70, 180, 70, 60, 'C') + ln(70, 60, 170, 60) + inductor(170, 60, 170, 180, 'L') + ln(170, 180, 70, 180);
  const g = graph(240, 30, 125, 150, { fns: [{ f: (x) => Math.cos(2 * Math.PI * x) ** 2, c: 'f' }, { f: (x) => Math.sin(2 * Math.PI * x) ** 2, c: 'B' }, { f: () => 1, c: 'm', dash: '4 3', w: 1 }], t1: 1.25, ymin: 0, ymax: 1.15, yl: 'U' });
  const uc = Math.cos(2 * Math.PI * t) ** 2, ul = Math.sin(2 * Math.PI * t) ** 2;
  s += g.s + (p.__dirty ? ln(g.X(t), 30, g.X(t), 180, { c: 'm', w: 0.8, dash: '3 3' }) + circ(g.X(t), g.Y(uc), 4, { fill: COL.f, c: 'f' }) + circ(g.X(t), g.Y(ul), 4, { fill: COL.B, c: 'B' }) : '');
  s += tx(250, 250, 'U_C / U_L / U_total', { it: false, fs: 9 }) + eq(20, 225, ['U = ', { n: 'q²', d: '2C' }, ' + ', { n: '1', d: '2' }, 'LI²']);
  return s;
}, {
  status: (p) => { const t = p.t ?? 0; const c = Math.cos(2 * Math.PI * t) ** 2; return `t = ${t.toFixed(2)}T：U_C = ${(c * 100).toFixed(0)}%，U_L = ${((1 - c) * 100).toFixed(0)}%`; },
});

/* ======================= extra E&M / rotation views ======================= */
defI('velocity-selector', '速度选择器：电场力与磁场力平衡 · Velocity selector: electric and magnetic forces balance', 'qE=qvB\\;\\Rightarrow\\;v=\\dfrac{E}{B}', [
  { key: 'v', label: '入射速度 v / (E/B)', min: 0.5, max: 2, step: 0.05, value: 1 },
], (p) => {
  const v = p.v ?? 1, dy = 70 * (v - 1);
  let s = ln(50, 55, 310, 55, { w: 3, c: 'E' }) + ln(50, 205, 310, 205, { w: 3, c: 'B' });
  for (let x = 80; x <= 290; x += 42) { s += tx(x, 48, '+', { c: 'E', it: false, fs: 12, anchor: 'middle' }) + tx(x, 220, '−', { c: 'B', it: false, fs: 12, anchor: 'middle' }); }
  for (let x = 90; x <= 285; x += 42) for (let y = 85; y <= 190; y += 35) s += crossB(x, y, 4, 'B');
  [105, 155, 205, 255].forEach((x) => { s += arr(x, 65, x, 195, 'E', 1.4); });
  s += circ(180, 130, 8, { fill: COL.E, c: 'E', op: 0.55 }) + tx(180, 134, '+q', { anchor: 'middle', fs: 9, c: 'E', it: false });
  if (Math.abs(v - 1) < 0.001) {
    s += arr(188, 130, 250, 130, 'v') + tx(252, 108, 'v', { c: 'v' });
  } else {
    s += pathD(`M188,130 Q220,130 250,${r1(130 - dy)}`, { c: 'v', w: 2, me: 'v' }) + tx(252, r1(126 - dy), 'v', { c: 'v' });
  }
  s += arr(180, 138, 180, 180, 'f') + tx(186, 172, 'qE', { c: 'f', fs: 10 }) + arr(180, 122, 180, 122 - 42 * v, 'f') + tx(186, 92, 'qvB', { c: 'f', fs: 10 });
  s += tx(20, 26, 'E 向下，B 入纸面；正电荷向右', { it: false, fs: 11 }) + eq(20, 240, ['v = ', { n: 'E', d: 'B' }]);
  return s;
}, {
  status: (p) => {
    const v = p.v ?? 1;
    return Math.abs(v - 1) < 0.001 ? 'v = E/B：qE 与 qvB 平衡，粒子直线通过' : v > 1 ? 'v > E/B：qvB > qE，粒子向上偏转' : 'v < E/B：qE > qvB，粒子向下偏转';
  },
});
defH('mass-spectrometer', '质谱仪：不同质量离子的圆周半径不同 · Mass spectrometer: ions of different mass have different radii', 'r=\\dfrac{mv}{|q|B}', {
  field: '匀强磁场 B 垂直纸面向外，离子在磁场中做圆周运动 · Uniform field B points out of the page; ions move in circles',
  beam: '离子束以速度 v 垂直进入磁场，轨迹半径 r = mv/(|q|B) · Ion beam enters at speed v perpendicular to B; radius r = mv/(|q|B)',
  light: '轻离子：质量小 ⇒ 半径 r 小，打在近处 · Light ion: smaller mass ⇒ smaller radius r, lands closer',
  heavy: '重离子：质量大 ⇒ 半径 r 大，打在远处 · Heavy ion: larger mass ⇒ larger radius r, lands farther',
}, () => {
  let field = rect(45, 40, 310, 180, { c: 'm', dash: '4 4', fill: 'none' });
  for (let x = 65; x <= 335; x += 34) for (let y = 60; y <= 200; y += 34) field += dotB(x, y, 4, 'B');
  field += tx(300, 210, 'B 出纸面', { c: 'B', fs: 10, it: false, anchor: 'end' });
  let beam = ln(45, 130, 100, 130, { w: 2 }) + tx(52, 122, '离子束', { fs: 10, it: false }) + arr(100, 130, 135, 130, 'v') + tx(112, 118, 'v', { c: 'v', fs: 11 }) + circ(115, 130, 4, { fill: 'currentColor' });
  let s = part('field', field, { x: 42, y: 38, w: 316, h: 184 });
  s += part('beam', beam, { x: 42, y: 108, w: 100, h: 44 });
  s += part('heavy', arc(160, 130, 65, 180, 360, { c: 'B', w: 1.8, me: 'B' }) + tx(175, 40, '重离子：r 大', { c: 'B', fs: 10, anchor: 'middle' }), { x: 86, y: 26, w: 150, h: 100 });
  s += part('light', arc(160, 130, 45, 180, 360, { c: 'f', w: 1.8, me: 'f' }) + tx(160, 72, '轻离子：r 小', { c: 'f', fs: 10, anchor: 'middle' }), { x: 106, y: 60, w: 110, h: 78 });
  s += eq(20, 240, ['r = ', { n: 'mv', d: '|q|B' }]);
  return s;
}, {
  partsHint: '悬停 / 点击轻离子或重离子：比较轨迹半径 · Hover / click the light or heavy ion to compare the radii',
});
def('angular-graphs', '匀角加速：ω–t 与 α–t 图 · Uniform angular acceleration: ω–t and α–t graphs', '\\omega=\\omega_0+\\alpha t,\\;\\; \\Delta\\theta=\\omega_0t+\\dfrac12\\alpha t^2', () => {
  const g1 = graph(55, 35, 220, 70, { fns: [{ f: (t) => 0.35 + 0.55 * t, c: 'a' }], t1: 1, ymin: 0, ymax: 1.1, xl: 't', yl: 'ω' });
  const g2 = graph(55, 140, 220, 70, { fns: [{ f: () => 0.55, c: 'a' }], t1: 1, ymin: 0, ymax: 1.1, xl: 't', yl: 'α' });
  let s = g1.s + g2.s + tx(80, 20, '斜率 = α；α 恒定时 ω 线性增大', { it: false, fs: 10 }) + eq(290, 80, ['ω = ω₀ + αt'], { fs: 12 }) + eq(290, 140, ['Δθ = ω₀t + ½αt²'], { fs: 11 });
  return s;
});

/* ======================= Track B coverage figures (B01-B03) ======================= */
def('vector-arrow-model', '矢量箭头模型与三维分量 · Vector arrow model and 3D components', '\\vec A=A_x\\hat i+A_y\\hat j+A_z\\hat k,\\;\\; A=\\sqrt{A_x^2+A_y^2+A_z^2}', () => {
  let s = tx(24, 16, '箭头长度 ∝ 大小；方向 = 箭头方向', { it: false, fs: 10 });
  s += tx(24, 30, 'arrow length ∝ magnitude; orientation = direction', { it: false, fs: 9 });
  s += arr(30, 210, 30, 46, 'g', 1.2) + arr(30, 210, 186, 210, 'g', 1.2);
  s += tx(190, 214, 'x', { fs: 12 }) + tx(24, 40, 'y', { anchor: 'end', fs: 12 });
  s += arr(30, 210, 142, 92, 'v', 2.2) + tx(82, 144, 'A', { c: 'v', fs: 14 });
  s += ln(30, 210, 142, 210, { c: 'm', dash: '4 3' }) + ln(142, 210, 142, 92, { c: 'm', dash: '4 3' });
  s += tx(86, 226, 'A_{x} = A cos θ', { fs: 10 }) + tx(148, 152, 'A_{y} = A sin θ', { fs: 10 });
  s += arc(30, 210, 35, 0, 50, { c: 'm', w: 1 }) + tx(70, 191, 'θ', { fs: 11 });
  s += ln(232, 205, 366, 205, { w: 1.1 }) + arr(232, 205, 232, 78, 'g', 1.1) + arr(232, 205, 300, 234, 'g', 1.1);
  const P0 = [232, 205], vx = [34, 0], vy = [-24, 10], vz = [0, -78];
  const end = [P0[0] + vx[0] + vy[0] + vz[0], P0[1] + vx[1] + vy[1] + vz[1]];
  s += ln(P0[0], P0[1], P0[0] + vx[0], P0[1], { c: 'm', dash: '3 3' }) + ln(P0[0] + vx[0], P0[1], P0[0] + vx[0] + vy[0], P0[1] + vy[1], { c: 'm', dash: '3 3' });
  s += ln(P0[0] + vx[0] + vy[0], P0[1] + vy[1], end[0], end[1], { c: 'm', dash: '3 3' });
  s += ln(end[0], end[1], end[0] - vz[0], end[1] - vz[1], { c: 'm', dash: '3 3' });
  s += arr(P0[0], P0[1], end[0], end[1], 'v', 2.2) + tx(end[0] - 22, end[1] - 6, 'A', { c: 'v', fs: 13 });
  s += tx(252, 222, 'A_{x}', { fs: 10 }) + tx(206, 222, 'A_{y}', { fs: 10 }) + tx(238, 130, 'A_{z}', { fs: 10 });
  s += tx(232, 66, 'A = 7.0', { it: false, fs: 10 });
  s += tx(232, 80, '方向余弦 (0.286, −0.429, 0.857)', { it: false, fs: 8.5 });
  s += tx(232, 48, 'A = 2i − 3j + 6k', { fs: 10.5 });
  return s;
});
def('two-observer-frames', '双观察者坐标系与伽利略变换 · Two observer frames and Galilean transformation', "x'=x-ut,\\;\\; v'=v-u,\\;\\; a'=a", () => {
  let s = '';
  s += arr(28, 208, 356, 208, 'g', 1.2) + tx(360, 212, 'x', { fs: 12 }) + tx(30, 226, '地面系 · ground frame', { it: false, fs: 10 });
  s += arr(28, 112, 350, 112, 'g', 1.2) + tx(344, 108, "x'", { fs: 12 }) + tx(30, 130, "列车系 · train frame", { it: false, fs: 10 });
  s += rect(170, 62, 170, 68) + tx(255, 84, '列车 · train', { it: false, fs: 10 });
  s += circ(206, 122, 8) + ln(178, 130, 350, 130, { w: 1.1 });
  s += circ(250, 108, 6, { fill: 'currentColor' }) + tx(250, 94, '杯子 · cup', { anchor: 'middle', fs: 10 });
  s += arr(170, 46, 208, 46, 'v', 2) + tx(190, 38, 'u', { c: 'v', fs: 12, anchor: 'middle' });
  s += ln(250, 112, 250, 208, { c: 'm', dash: '3 3' }) + ln(250, 130, 250, 208, { c: 'm', dash: '3 3' });
  s += tx(256, 188, '同一事件：地面 x，列车 x′', { it: false, fs: 10 });
  s += eq(40, 246, ["x' = x − ut"]) + eq(170, 246, ["v' = v − u"]) + eq(290, 246, ["a' = a"]);
  return s;
});
def('boat-river', '船与河流：相对速度合成 · Boat and river: relative-velocity composition', '\\vec v_{A/C}=\\vec v_{A/B}+\\vec v_{B/C}', () => {
  let s = ln(20, 52, 380, 52, { w: 2 }) + ln(20, 226, 380, 226, { w: 2 });
  s += tx(30, 42, '河岸 · bank', { it: false, fs: 10 }) + tx(30, 246, '河岸 · bank', { it: false, fs: 10 });
  s += tx(200, 64, '河宽 60 m · width 60 m', { it: false, fs: 10, anchor: 'middle' });
  s += arr(70, 190, 180, 190, 'v', 2) + tx(125, 204, '水流 3.0 m/s · current', { c: 'v', fs: 10, anchor: 'middle' });
  s += arr(70, 190, 70, 80, 'f', 2) + tx(62, 132, '船 4.0 m/s · boat', { c: 'f', fs: 10, anchor: 'end' });
  s += arr(70, 190, 180, 80, 'a', 2.2) + tx(150, 128, '合速度 5.0 m/s', { c: 'a', fs: 10 });
  s += arc(70, 190, 44, 0, 53, { c: 'm', w: 1 }) + tx(122, 172, '36.9°', { fs: 10 });
  s += tx(228, 110, '船头正北：漂移 45 m，15 s', { it: false, fs: 9.5 });
  s += tx(228, 130, '正对岸：48.6° 上游，22.7 s', { it: false, fs: 9.5 });
  s += eq(238, 168, ['v_{A/C} = v_{A/B} + v_{B/C}']);
  return s;
});
def('solid-sphere-f-r', '均匀实心球内部与外部引力 · Gravity inside and outside a uniform solid sphere', 'F(r)=\\begin{cases}G\\dfrac{Mm}{R^3}r,&r\\le R\\\\[2pt]G\\dfrac{Mm}{r^2},&r>R\\end{cases}', () => {
  const g = graph(42, 24, 218, 170, { fns: [{ f: (t) => (t <= 1 ? t : 1 / (t * t)), c: 'f', w: 2.4 }], t1: 3, ymin: 0, ymax: 1.25, xl: 'r', yl: 'F' });
  let s = g.s;
  s += ln(g.X(1), g.Y(0), g.X(1), g.Y(1), { c: 'm', dash: '4 3', w: 1 }) + tx(g.X(1), g.Y(0) + 14, 'r = R', { anchor: 'middle', fs: 10 });
  s += tx(g.X(0.5), g.Y(0.52), 'F ∝ r', { fs: 11, c: 'f' }) + tx(g.X(2.2), g.Y(0.42), 'F ∝ 1/r²', { fs: 11, c: 'f' });
  s += tx(278, 56, '内部 M(r) = Mr³/R³', { it: false, fs: 9 });
  s += tx(278, 74, 'F = GMmr/R³', { fs: 10 });
  s += tx(278, 104, '外部等效于球心', { it: false, fs: 9 });
  s += tx(278, 122, 'F = GMm/r²', { fs: 10 });
  s += tx(278, 156, 'r=R 连续，斜率突变', { it: false, fs: 9 });
  s += tx(278, 174, '中心 F = 0', { it: false, fs: 9 });
  return s;
});
def('elevator-apparent-weight', '电梯视重：静止、加速上升、加速下降与自由落体 · Elevator apparent weight: rest, up, down, free fall', 'N=m(g+a_y)', () => {
  let s = tx(20, 12, '秤读数 = 支持力 N，不是重力 mg', { it: false, fs: 10 });
  s += tx(20, 24, 'scale reads N, not mg', { it: false, fs: 9 });
  const panels = [
    ['静止 · rest', 'N = mg', 0], ['加速上升 · up', 'N = m(g+a)', 1], ['加速下降 · down', 'N = m(g−a)', -1], ['自由落体 · free fall', 'N = 0', -2],
  ];
  panels.forEach(([lab, val, k], i) => {
    const x = 18 + i * 95;
    s += rect(x, 34, 80, 150) + tx(x + 40, 30, lab, { it: false, fs: 9.5, anchor: 'middle' });
    s += person(x + 40, 86);
    s += ln(x + 18, 106, x + 62, 106, { w: 2.2 });
    s += arr(x + 40, 112, x + 40, 112 + (k >= 0 ? 20 : 14), k >= 1 ? 'a' : 'f', 1.6);
    s += tx(x + 40, 146, val, { fs: 11 });
    if (k === -2) s += tx(x + 40, 164, 'a = g', { fs: 10, c: 'a' });
  });
  s += eq(30, 218, ['N − mg = ma_y']) + tx(220, 212, '加速上升 a_y > 0：N > mg', { it: false, fs: 10 }) + tx(220, 230, '加速下降 a_y < 0：N < mg', { it: false, fs: 10 });
  return s;
});
def('multi-body-potential', '多物体系统势能：每对求和 · Potential energy of a multi-body system: sum over pairs', 'U_{\\mathrm{total}}=\\sum_{i<j}U_{ij},\\;\\; N_{\\mathrm{pairs}}=\\dfrac{N(N-1)}{2}', () => {
  let s = ln(30, 104, 370, 104, { w: 1.1 });
  const xs = [70, 190, 315], ms = ['m₁', 'm₂', 'm₃'], ys = [104, 104, 104];
  xs.forEach((x, i) => { s += circ(x, ys[i], 16, { fill: COL.f, op: 0.18, c: 'f' }) + tx(x, ys[i] + 4, ms[i], { anchor: 'middle', fs: 11 }); });
  s += tx((xs[0] + xs[1]) / 2, 88, 'r₁₂', { fs: 10 }) + tx((xs[1] + xs[2]) / 2, 88, 'r₂₃', { fs: 10 }) + tx((xs[0] + xs[2]) / 2, 60, 'r₁₃', { fs: 10 });
  s += arc(xs[0], 104, 46, 8, 172, { c: 'm', w: 1, dash: '4 3' }) + arc(xs[1], 104, 62, 8, 172, { c: 'm', w: 1, dash: '4 3' });
  s += tx(30, 138, 'U₁₂ = −Gm₁m₂/r₁₂', { fs: 11 }) + tx(30, 158, 'U₁₃ = −Gm₁m₃/r₁₃', { fs: 11 }) + tx(30, 178, 'U₂₃ = −Gm₂m₃/r₂₃', { fs: 11 });
  s += ln(30, 196, 370, 196, { w: 1.2 }) + tx(30, 216, 'U_total = U₁₂ + U₁₃ + U₂₃', { fs: 12, c: 'a' });
  s += tx(30, 238, '同一对只计一次；U₂₁ 与 U₁₂ 重复 · each unordered pair once', { it: false, fs: 10 });
  return s;
});
def('shm-resonance', '受迫振动共振曲线 · Forced-oscillation resonance curve', 'A(\\omega_d)=\\dfrac{F_0/m}{\\sqrt{(\\omega_0^2-\\omega_d^2)^2+(b\\omega_d/m)^2}}', () => {
  const amp = (x, z) => 1 / Math.sqrt((1 - x * x) ** 2 + (2 * z * x) ** 2);
  const g = graph(50, 22, 206, 168, { fns: [{ f: (t) => amp(t, 0.08), c: 'a' }, { f: (t) => amp(t, 0.18), c: 'b', dash: '6 3' }, { f: (t) => amp(t, 0.35), c: 'e', dash: '2 3' }], t1: 2.4, ymin: 0, ymax: 6.6, xl: 'ω_d/ω_0', yl: 'A' });
  let s = g.s + ln(g.X(1), g.Y(0), g.X(1), g.Y(1), { c: 'm', dash: '4 3', w: 1 }) + tx(g.X(1), g.Y(0) + 14, 'ω₀', { anchor: 'middle', fs: 10 });
  s += tx(268, 44, '阻尼小 light', { it: false, fs: 9, c: 'a' }) + tx(268, 62, '阻尼中 medium', { it: false, fs: 9, c: 'b' }) + tx(268, 80, '阻尼大 heavy', { it: false, fs: 9, c: 'e' });
  s += tx(268, 112, '稳态频率=驱动频率', { it: false, fs: 9 });
  s += tx(268, 130, '共振 ω_d ≈ ω₀', { it: false, fs: 9 });
  s += tx(268, 148, '阻尼越大：峰低而宽', { it: false, fs: 9 });
  return s;
});
def('torsion-pendulum', '扭摆：金属丝的扭转回复力矩 · Torsion pendulum: restoring torque of a twisted wire', '\\tau=-\\kappa\\theta,\\;\\; T=2\\pi\\sqrt{\\dfrac{I}{\\kappa}}', () => {
  const cx = 130, cy = 130;
  let s = circ(cx, cy, 72, { fill: COL.g, op: 0.06 }) + circ(cx, cy, 4, { fill: 'currentColor' }) + tx(cx, cy - 10, '转轴 · axis', { anchor: 'middle', it: false, fs: 9 });
  s += ln(cx, cy, cx + 72, cy, { c: 'm', dash: '4 3', w: 1 }) + tx(cx + 36, cy + 16, 'θ = 0', { fs: 9, c: 'm' });
  const a = 32 * Math.PI / 180;
  s += ln(cx, cy, cx + 72 * Math.cos(a), cy - 72 * Math.sin(a), { c: 'a', w: 2 }) + tx(cx + 58 * Math.cos(a), cy - 58 * Math.sin(a) - 8, 'θ', { c: 'a', fs: 12 });
  s += arc(cx, cy, 48, 0, 32, { c: 'a', w: 1.2 });
  s += arr(cx + 72 * Math.cos(a), cy - 72 * Math.sin(a), cx + 52 * Math.cos(a), cy - 52 * Math.sin(a), 'f', 2) + tx(cx + 18, cy - 78, 'τ = −κθ', { c: 'f', fs: 10 });
  s += eq(228, 54, ['τ = −κθ']) + eq(228, 96, ['T = 2π', { sqrt: { n: 'I', d: 'κ' } }]);
  s += tx(228, 140, 'κ：扭转常数 (N·m/rad)', { it: false, fs: 9.5 });
  s += tx(228, 160, '圆盘 I = ½mR²（中心轴）', { it: false, fs: 9.5 });
  s += tx(228, 182, '周期与 g 无关 · g-independent', { it: false, fs: 9.5 });
  return s;
});

def('contact-force-atomic', '接触力的微观起源：原子间电作用 · Microscopic origin of contact forces: interatomic electric interaction', 'N,\\;f\\;\\text{are macroscopic averages of interatomic electric forces}', () => {
  let s = tx(18, 20, '宏观：只画作用在物体上的外力 · macroscopic: only external forces on the object', { it: false, fs: 9.5 });
  s += hatch(24, 196, 150) + rect(56, 118, 66, 50) + tx(89, 146, 'm', { anchor: 'middle', fs: 12 });
  s += arr(89, 143, 89, 196, 'f', 2) + tx(95, 188, 'mg', { c: 'f', fs: 11 }) + arr(89, 143, 89, 96, 'f', 2) + tx(95, 106, 'N', { c: 'f', fs: 11 });
  s += arr(89, 143, 132, 143, 'f', 1.6) + tx(120, 136, 'f', { c: 'f', fs: 11 });
  s += tx(18, 220, 'N ⟂ 表面，f ∥ 表面', { it: false, fs: 9.5 });
  s += tx(182, 20, '放大：原子电子云排斥 + 微弱吸引', { it: false, fs: 9.5 });
  s += circ(206, 120, 16, { fill: COL.E, op: 0.2, c: 'E' }) + circ(256, 120, 16, { fill: COL.E, op: 0.2, c: 'E' });
  s += circ(206, 170, 16, { fill: COL.v, op: 0.2, c: 'v' }) + circ(256, 170, 16, { fill: COL.v, op: 0.2, c: 'v' });
  s += arr(222, 120, 238, 120, 'f', 1.8) + arr(240, 170, 224, 170, 'f', 1.8);
  s += tx(231, 100, '排斥', { fs: 9.5, anchor: 'middle', c: 'f' }) + tx(231, 190, '吸引', { fs: 9.5, anchor: 'middle', c: 'f' });
  s += tx(182, 220, '净效果 = 宏观 N 与 f', { it: false, fs: 9.5 });
  s += tx(182, 240, '接触力不是新的基本相互作用', { it: false, fs: 9.5 });
  s += tx(310, 54, '受力图：', { it: false, fs: 10 }) + tx(310, 74, '只画外力；', { it: false, fs: 10 }) + tx(310, 94, '不画反作用力', { it: false, fs: 10 }) + tx(310, 114, '与 ma 箭头', { it: false, fs: 10 });
  return s;
});
def('charge-density-shell', '电荷密度与球壳体积元 · Charge density and a spherical-shell volume element', 'Q_{\\mathrm{enc}}(r)=\\int_0^r\\rho(r\')\\,4\\pi r\'^2\\,dr\'', () => {
  const cx = 116, cy = 130;
  let s = circ(cx, cy, 78, { w: 1.3 }) + circ(cx, cy, 54, { c: 'a', w: 1.3 }) + circ(cx, cy, 64, { c: 'a', w: 1.3, dash: '3 3' });
  s += tx(cx, cy - 4, 'ρ(r)', { anchor: 'middle', fs: 11 });
  s += tx(cx + 68, cy - 46, 'dV = 4πr′² dr′', { fs: 9.5, c: 'a' });
  s += tx(cx, cy + 96, 'r′ → r′ + dr′', { fs: 9.5, anchor: 'middle' });
  s += graph(224, 24, 140, 160, { fns: [{ f: (t) => t * t * (3 - 2 * t), c: 'a', w: 2.2 }], t1: 1, ymin: 0, ymax: 1.05, xl: 'r/R', yl: 'Q_enc/Q' }).s;
  s += tx(224, 204, 'Q_enc 随 r 增大；球壳外无新增电荷', { it: false, fs: 9.5 });
  s += tx(224, 224, 'ρ(r) = ρ₀(1 − r/R)', { it: false, fs: 9.5 });
  s += tx(20, 244, '高斯面半径 r：只计入 r 以内的电荷', { it: false, fs: 9.5 });
  return s;
});
def('em-force-ratio', '电力与引力之比（同距离，对数标度） · Ratio of electric to gravitational force at the same separation (log scale)', '\\dfrac{F_e}{F_g}=\\dfrac{kq_1q_2}{Gm_1m_2}', () => {
  const L = 96, R = 318, lo = 0, hi = 40; const X = (v) => L + ((Math.log10(v) - lo) / (hi - lo)) * (R - L);
  let s = tx(20, 18, '横轴 log₁₀(F_e/F_g)', { it: false, fs: 9.5 });
  s += ln(L, 48, L, 220, { w: 1.2 }) + ln(L, 220, R, 220, { w: 1.2 });
  [0, 10, 20, 30, 40].forEach((v) => { s += ln(X(10 ** v), 214, X(10 ** v), 226, { w: 1 }) + tx(X(10 ** v), 240, `10^${v}`, { fs: 9.5 }); });
  s += ln(X(1), 48, X(1), 220, { c: 'm', dash: '4 3', w: 1 }) + tx(X(1) + 4, 58, '电力=引力', { it: false, fs: 9, anchor: 'start' });
  const rows = [['电子–质子', 2.3e39, 'f'], ['质子–质子', 1.2e36, 'v'], ['1 g 小球 (1 μC)', 1.3e14, 'a']];
  rows.forEach(([lab, v, c], i) => {
    const y = 76 + i * 44; s += tx(L - 6, y + 12, lab, { anchor: 'end', it: false, fs: 9.5 });
    s += rect(X(1), y, X(v) - X(1), 24, { fill: COL[c], op: 0.3, c, stroke: c, w: 1 });
    s += tx(X(v) - 4, y + 12, `≈${v.toExponential(1).replace('e+', '×10^')}`, { it: false, fs: 9, anchor: 'end', c });
  });
  s += tx(22, 200, '宏观天体近中性：引力在大尺度占优', { it: false, fs: 9 });
  return s;
});
def('insulator-sphere-E', '均匀带电绝缘球与导体球的 E(r) · E(r) for a uniformly charged insulating sphere vs a conducting sphere', 'E_{\\mathrm{ins}}=\\dfrac{kQr}{R^3}\\;(r<R),\\;\\; E_{\\mathrm{out}}=\\dfrac{kQ}{r^2}\\;(r>R)', () => {
  const g = graph(46, 24, 220, 166, { fns: [{ f: (t) => (t <= 1 ? t : 1 / (t * t)), c: 'E', w: 2.4 }, { f: (t) => (t < 1 ? 0 : 1 / (t * t)), c: 'v', dash: '6 3', w: 2 }], t1: 3, ymin: 0, ymax: 1.25, xl: 'r/R', yl: 'E/E(R)' });
  let s = g.s + ln(g.X(1), g.Y(0), g.X(1), g.Y(1), { c: 'm', dash: '4 3', w: 1 }) + tx(g.X(1), g.Y(0) + 14, 'R', { anchor: 'middle', fs: 10 });
  s += tx(278, 48, '绝缘球：体内电荷', { it: false, fs: 9, c: 'E' }) + tx(278, 66, '内部 E ∝ r', { it: false, fs: 9 });
  s += tx(278, 96, '导体：表面电荷', { it: false, fs: 9, c: 'v' }) + tx(278, 114, '内部 E = 0', { it: false, fs: 9 });
  s += tx(278, 146, '外部均 E ∝ 1/r²', { it: false, fs: 9 });
  return s;
});
def('current-density-annulus', '电流密度与环形面积元 · Current density and an annular area element', 'I=\\int_S\\vec J\\cdot d\\vec A=\\int_0^R J(r)\\,2\\pi r\\,dr', () => {
  const cx = 118, cy = 126;
  let s = circ(cx, cy, 70, { w: 1.4 }) + circ(cx, cy, 42, { c: 'a', w: 1.4 }) + circ(cx, cy, 54, { c: 'a', w: 1.4, dash: '3 3' });
  for (let k = 0; k < 8; k++) { const a = k * 45 * Math.PI / 180, r0 = 0, r1 = 66; s += arr(cx + r0 * Math.cos(a), cy + r0 * Math.sin(a), cx + r1 * Math.cos(a), cy + r1 * Math.sin(a), 'I', 1.4); }
  s += tx(cx, cy + 4, 'J(r)', { anchor: 'middle', fs: 11, c: 'I' });
  s += tx(cx + 58, cy - 42, 'dA = 2πr dr', { fs: 10, c: 'a' });
  s += tx(cx + 80, cy + 4, 'R', { fs: 10 });
  s += graph(248, 24, 130, 166, { fns: [{ f: (t) => 1 - t, c: 'I', w: 2.2 }], t1: 1, ymin: 0, ymax: 1.08, xl: 'r/R', yl: 'J' }).s;
  s += tx(248, 214, 'J(r) = J₀(1 − r/R)', { it: false, fs: 9.5 });
  s += tx(248, 232, '曲线下面积 ≠ I', { it: false, fs: 9 });
  s += tx(248, 246, '需乘 2πr 权重', { it: false, fs: 9 });
  return s;
});
def('current-loop-dipole', '电流环与磁偶极矩 · Current loop and magnetic dipole moment', '\\vec\\mu=I\\vec A,\\;\\; B_{\\mathrm{center}}=\\dfrac{\\mu_0I}{2R}', () => {
  const cx = 120, cy = 132;
  let s = `<ellipse cx="${cx}" cy="${cy}" rx="76" ry="34" fill="none" stroke="currentColor" stroke-width="1.6"/>`;
  let s2 = '';
  for (let k = 0; k < 4; k++) { const a = 20 + k * 90, x = cx + 76 * Math.cos(a * Math.PI / 180), y = cy + 34 * Math.sin(a * Math.PI / 180); s2 += arr(x - 8, y - 4, x + 8, y + 4, 'I', 1.6); }
  s += s2 + arr(cx, cy, cx, cy - 54, 'v', 2.2) + tx(cx + 6, cy - 44, 'μ', { c: 'v', fs: 13 });
  s += ln(cx - 50, cy + 18, cx + 50, cy + 18, { c: 'm', dash: '4 3', w: 1 }) + tx(cx, cy + 34, '面积 A', { fs: 9, anchor: 'middle' });
  s += rect(250, 72, 46, 120) + tx(273, 88, 'N', { anchor: 'middle', fs: 11 }) + tx(273, 178, 'S', { anchor: 'middle', fs: 11 });
  s += arc(273, 96, 58, -70, 70, { c: 'B', w: 1.4 }) + arc(273, 96, 70, -60, 60, { c: 'B', w: 1, dash: '4 3' });
  s += tx(238, 214, 'N 极面 = μ 指向；磁感线闭合', { it: false, fs: 9.5 });
  s += eq(20, 246, ['μ = IA']);
  return s;
});
def('bh-curve', 'B–H 曲线、饱和与磁滞 · B–H curve, saturation and hysteresis', 'B=\\mu H,\\;\\; \\mu_r=\\dfrac{\\mu}{\\mu_0},\\;\\; \\chi_m=\\mu_r-1', () => {
  let s = ln(60, 210, 370, 210, { w: 1.2 }) + ln(60, 210, 60, 54, { w: 1.2 });
  s += tx(374, 214, 'H', { fs: 12 }) + tx(54, 48, 'B', { fs: 12, anchor: 'end' });
  s += pathD('M60,210 C110,180 130,74 200,62 C270,54 320,58 366,60', { c: 'a', w: 2.2 });
  s += pathD('M92,210 C104,178 108,84 190,66 C270,58 334,60 366,62', { c: 'a', w: 1.3, dash: '4 3' });
  s += pathD('M60,210 C96,186 116,120 180,86 L300,72 C250,92 150,120 120,210 Z', { c: 'b', w: 1.6 });
  s += tx(154, 76, '饱和 · saturation', { fs: 10, c: 'a' }) + tx(200, 52, 'B_r', { fs: 10, c: 'b' }) + tx(98, 178, 'H_c', { fs: 10, c: 'b' });
  s += tx(236, 120, '初始斜率 = μ', { it: false, fs: 10 }) + tx(236, 140, '回线面积 = 每周期磁滞损耗', { it: false, fs: 9.5 });
  s += tx(236, 164, '软磁：回线窄；硬磁：回线宽', { it: false, fs: 9.5 });
  s += tx(236, 186, '超过拐点后 μ_r 不再是常数', { it: false, fs: 9.5 });
  return s;
});
def('crossed-field-deflection', '复合场中带电粒子的偏转 · Deflection of a charged particle in crossed fields', '\\vec F=q(\\vec E+\\vec v\\times\\vec B),\\;\\; v=\\dfrac{E}{B}\\;\\text{(balance)}', () => {
  let s = rect(56, 54, 260, 24) + rect(56, 172, 260, 24);
  s += tx(60, 46, '+', { fs: 14 }) + tx(60, 216, '−', { fs: 14 });
  for (let x = 80; x <= 300; x += 40) s += arr(x, 82, x, 104, 'E', 1.4);
  for (let x = 90; x <= 300; x += 44) for (let y = 120; y <= 158; y += 30) s += dotB(x, y, 4);
  s += tx(318, 92, 'E 向下', { fs: 9.5, c: 'E' }) + tx(318, 132, 'B 出纸面', { fs: 9.5, c: 'B' });
  s += pathD('M70,138 C140,138 190,138 250,116', { c: 'v', w: 2.2, arrow: true }) + tx(120, 128, 'v', { c: 'v', fs: 11 });
  s += arr(150, 138, 150, 164, 'f', 1.8) + tx(156, 160, 'qE', { c: 'f', fs: 9.5 }) + arr(150, 138, 150, 112, 'v', 1.8) + tx(156, 126, 'qv×B', { c: 'v', fs: 9.5 });
  s += tx(40, 244, 'v = E/B：两力平衡，直线通过；v < E/B 向 E 偏，v > E/B 向 qv×B 偏', { it: false, fs: 9.5 });
  return s;
});
def('hall-effect-polarity', '霍尔效应：载流子符号决定电压极性 · Hall effect: carrier sign sets the voltage polarity', 'qE_H=qv_dB,\\;\\; V_H=\\dfrac{IB}{nqt}', () => {
  let s = rect(60, 72, 250, 110, { fill: COL.B, op: 0.05, c: 'B' });
  s += arr(70, 196, 300, 196, 'I', 2) + tx(185, 214, '电流 I · current', { c: 'I', fs: 10, anchor: 'middle' });
  for (let x = 90; x <= 290; x += 40) for (let y = 90; y <= 160; y += 34) s += dotB(x, y, 4);
  s += tx(318, 84, 'B 出纸面', { fs: 10, c: 'B' });
  s += circ(150, 126, 12, { fill: COL.v, op: 0.25, c: 'v' }) + tx(150, 130, '+', { anchor: 'middle', fs: 12 }) + arr(150, 126, 150, 178, 'v', 1.8);
  s += circ(230, 126, 12, { fill: COL.e, op: 0.25, c: 'e' }) + tx(230, 130, '−', { anchor: 'middle', fs: 12 }) + arr(230, 126, 230, 178, 'e', 1.8);
  s += tx(24, 34, '正载流子：−y 侧积累正电荷 → 电势高', { fs: 9.5 });
  s += tx(24, 50, '负载流子：−y 侧积累负电荷 → 电势低', { fs: 9.5 });
  s += rect(340, 92, 46, 70) + tx(363, 108, 'V', { fs: 12 }) + tx(363, 146, '−', { fs: 14 }) + tx(363, 132, '+', { fs: 14 });
  s += tx(60, 214, '电流 I 向右，B 出纸面', { it: false, fs: 9.5 });
  s += tx(60, 232, 'F_B 使两种载流子都向 −y 偏转', { it: false, fs: 9.5 });
  return s;
});
def('arc-field', '圆弧电流在圆心处的磁场 · Magnetic field at the center of a circular arc', 'B=\\dfrac{\\mu_0I\\theta}{4\\pi R},\\;\\; B_{\\mathrm{loop}}=\\dfrac{\\mu_0I}{2R}', () => {
  const cx = 128, cy = 132, R = 76;
  let s = arc(cx, cy, R, -60, 60, { c: 'I', w: 3 });
  for (let a = -50; a <= 50; a += 25) { const [x1, y1] = pt(cx, cy, R, a), [x2, y2] = pt(cx, cy, R, a + 10); s += arr(x1, y1, x2, y2, 'I', 1.5); }
  s += ln(cx, cy, cx + R * Math.cos(-60 * Math.PI / 180), cy + R * Math.sin(-60 * Math.PI / 180), { c: 'm', dash: '4 3', w: 1 }) + ln(cx, cy, cx + R * Math.cos(60 * Math.PI / 180), cy + R * Math.sin(60 * Math.PI / 180), { c: 'm', dash: '4 3', w: 1 });
  s += arc(cx, cy, 38, -60, 60, { c: 'a', w: 1.2 }) + tx(cx + 46, cy - 2, 'θ', { c: 'a', fs: 12 });
  s += dotB(cx, cy, 5) + tx(cx + 10, cy + 4, 'B', { fs: 11, c: 'B' });
  s += tx(cx, cy - 22, 'R', { fs: 10 });
  s += graph(244, 28, 100, 150, { fns: [{ f: (t) => t, c: 'B', w: 2.2 }], t1: 1, ymin: 0, ymax: 1.05, xl: 'θ/2π', yl: 'B/B_loop' }).s;
  s += tx(238, 202, 'B ∝ θ；2π 时回到圆环公式', { it: false, fs: 9 });
  s += tx(238, 222, '半圆：B = ½ B_loop', { it: false, fs: 9 });
  return s;
});
def('em-wave-eb-triad', '电磁波：E、B 与传播方向 · Electromagnetic wave: E, B and propagation direction', '\\vec E\\perp\\vec B\\perp\\vec k,\\;\\; E=cB,\\;\\; c=\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}', () => {
  let s = arr(70, 190, 356, 190, 'g', 1.2) + arr(70, 190, 70, 54, 'g', 1.2) + arr(70, 190, 158, 232, 'g', 1.2);
  s += tx(360, 194, 'x (k)', { fs: 11 }) + tx(64, 46, 'y (E)', { fs: 11, anchor: 'end' }) + tx(164, 244, 'z (B)', { fs: 11 });
  const ptsE = [], ptsB = [];
  for (let i = 0; i <= 60; i++) { const x = 80 + i * 4.2, ph = i / 60 * 4 * Math.PI; ptsE.push([x, 128 - 58 * Math.sin(ph)]); ptsB.push([x + 0.55 * 58 * Math.sin(ph), 128 + 0.42 * 58 * Math.sin(ph)]); }
  s += poly(ptsE, { c: 'E', w: 2.2 }) + poly(ptsB, { c: 'B', w: 2, dash: '6 3' });
  s += tx(250, 60, 'E', { c: 'E', fs: 13 }) + tx(320, 176, 'B', { c: 'B', fs: 13 });
  s += arr(300, 220, 340, 220, 'v', 2) + tx(320, 212, 'k', { c: 'v', fs: 11, anchor: 'middle' });
  s += tx(72, 24, 'E × B 指向传播方向 · E × B points along propagation', { it: false, fs: 10 });
  return s;
});
def('displacement-current', '充电电容器与位移电流 · Charging capacitor and displacement current', 'I_d=\\varepsilon_0\\dfrac{d\\Phi_E}{dt},\\;\\; \\oint\\vec B\\cdot d\\vec l=\\mu_0(I+I_d)', () => {
  let s = capacitor(168, 132, 236, 132, '');
  s += ln(36, 132, 168, 132, { w: 2 }) + ln(236, 132, 360, 132, { w: 2 });
  s += arr(90, 132, 126, 132, 'I', 2) + arr(320, 132, 286, 132, 'I', 2);
  for (let y = 82; y <= 182; y += 20) s += arr(202, y, 202, y + 10, 'E', 1.3);
  s += arr(202, 150, 202, 196, 'E', 1.3) + tx(210, 188, 'E = Q/(Aε₀)', { fs: 9, c: 'E' });
  s += arr(205, 210, 245, 210, 'v', 1.8, '5 4') + tx(225, 226, 'I_d（虚位移电流）', { c: 'v', fs: 9, anchor: 'middle' });
  s += circ(120, 132, 46, { c: 'a', w: 1.4, dash: '5 3' }) + tx(120, 78, '安培环路', { fs: 9, c: 'a', anchor: 'middle' });
  s += tx(28, 28, '导线中有传导电流 I；极板间无电荷流动，但变化的 E 等效为 I_d', { it: false, fs: 9.5 });
  s += tx(28, 44, '同一环路取两个曲面：穿过导线得 I，穿过间隙得 I_d，总电流连续', { it: false, fs: 9.5 });
  s += eq(28, 246, ['I_d = ε₀ dΦ_E/dt']);
  return s;
});

/* ======================= Track B follow-up figure variants ======================= */
def('point-object-model', '质点模型：忽略大小、形状与内部结构 · Point-object model: size, shape and internal structure ignored', '\\vec r=(x,y,z),\\;\\; m,\\;q\\;\\text{at }\\vec r', () => {
  let s = tx(18, 16, '真实物体：有大小、形状与内部结构', { it: false, fs: 9.5 });
  s += tx(18, 29, 'real body: size, shape, internal structure', { it: false, fs: 8.5, c: 'm' });
  s += rect(42, 70, 110, 90, { w: 1.4 });
  s += circ(68, 102, 11, { c: 'm', w: 1 }) + circ(124, 118, 13, { c: 'm', w: 1 });
  s += spring(79, 102, 111, 118, 6, 4);
  s += tx(96, 154, '内部结构 · internal', { it: false, fs: 8.5, anchor: 'middle', c: 'm' });
  s += arr(42, 60, 152, 60, 'm', 1.1) + tx(97, 54, '尺寸 R', { it: false, fs: 9, anchor: 'middle' });
  s += ln(42, 60, 42, 70, { c: 'm', w: 0.9 }) + ln(152, 60, 152, 70, { c: 'm', w: 0.9 });
  s += arr(160, 70, 160, 160, 'm', 1.1) + tx(166, 118, '形状', { it: false, fs: 9 });
  s += arr(166, 116, 194, 116, 'g', 2) + tx(180, 108, '取极限', { it: false, fs: 8.5, anchor: 'middle' });
  s += arr(214, 190, 376, 190, 'g', 1.2) + arr(214, 190, 214, 66, 'g', 1.2);
  s += tx(380, 194, 'x', { fs: 11 }) + tx(208, 60, 'y', { fs: 11, anchor: 'end' });
  s += ln(300, 120, 300, 190, { c: 'm', dash: '3 3', w: 1 }) + ln(214, 120, 300, 120, { c: 'm', dash: '3 3', w: 1 });
  s += arr(214, 190, 300, 120, 'v', 2.2) + tx(242, 146, 'r', { c: 'v', fs: 13 });
  s += circ(300, 120, 6, { fill: COL.v, op: 0.25, c: 'v' }) + tx(310, 112, 'm, q', { fs: 11 });
  s += tx(310, 130, 'm = 2 kg', { it: false, fs: 9 }) + tx(310, 144, 'q = +3 μC', { it: false, fs: 9 });
  s += tx(238, 204, '全部性质集中在一点', { it: false, fs: 8.5, c: 'm' });
  s += tx(18, 222, '模型只保留：位置 r 与广延量 m、q；转动、形变与内部结构不进入模型。', { it: false, fs: 9 });
  s += tx(18, 236, 'Only r, m and q remain; size, shape and internal structure are dropped.', { it: false, fs: 8, c: 'm' });
  s += eq(18, 252, ['m, q at r']);
  return s;
});
def('position-displacement-axis', '位置、位移与路程：有符号坐标轴 · Position, displacement and path length on a signed axis', '\\Delta x=x_f-x_i,\\qquad s\\ge|\\Delta x|', () => {
  let s = arr(28, 96, 376, 96, 'g', 1.2) + tx(380, 100, 'x', { fs: 11 });
  s += ln(60, 90, 60, 102, { w: 1.2 }) + ln(200, 90, 200, 102, { w: 1.2 }) + ln(320, 90, 320, 102, { w: 1.2 });
  s += tx(60, 112, 'x_{i}', { fs: 11, anchor: 'middle' }) + tx(200, 112, '0', { fs: 10, anchor: 'middle', c: 'm' }) + tx(320, 112, 'x_{f}', { fs: 11, anchor: 'middle' });
  s += arr(60, 96, 320, 96, 'v', 2.4) + tx(190, 88, 'Δx', { c: 'v', fs: 12, anchor: 'middle' });
  s += pathD('M60,96 C105,18 275,18 320,96', { c: 'm', w: 1.3, dash: '4 3' });
  s += tx(190, 22, '路程 s（标量）· path length', { it: false, fs: 9, anchor: 'middle', c: 'm' });
  s += arr(28, 188, 376, 188, 'g', 1.2) + tx(380, 192, 'x', { fs: 11 });
  s += ln(80, 182, 80, 194, { w: 1.2 }) + ln(200, 182, 200, 194, { w: 1.2 }) + ln(320, 182, 320, 194, { w: 1.2 });
  s += tx(80, 204, 'x_{f}', { fs: 11, anchor: 'middle' }) + tx(200, 204, '0', { fs: 10, anchor: 'middle', c: 'm' }) + tx(320, 204, 'x_{i}', { fs: 11, anchor: 'middle' });
  s += arr(320, 188, 80, 188, 'v', 2.4) + tx(200, 176, 'Δx < 0', { c: 'v', fs: 12, anchor: 'middle' });
  s += tx(28, 226, 'Δx = x_{f} − x_{i}：位移是矢量，符号表示方向。', { it: false, fs: 9.5 });
  s += tx(28, 240, 's = 路径长度：标量，s ≥ |Δx|；沿路径往返时 s 更大。', { it: false, fs: 9.5 });
  s += tx(28, 254, 'displacement is signed; path length is scalar and counts the whole route.', { it: false, fs: 8, c: 'm' });
  return s;
});
def('shell-vs-solid-sphere', '薄球壳与实心球：内部与外部引力场 · Thin shell vs solid sphere: gravitational field inside and outside', 'g_{\\rm shell}=\\begin{cases}0,&r<R\\\\[2pt]\\dfrac{GM}{r^2},&r>R\\end{cases}\\qquad g_{\\rm solid}=\\begin{cases}\\dfrac{GMr}{R^3},&r<R\\\\[2pt]\\dfrac{GM}{r^2},&r>R\\end{cases}', () => {
  const cx = 78;
  let s = tx(cx, 18, '薄壳 · thin shell', { it: false, fs: 9.5, anchor: 'middle' });
  s += circ(cx, 70, 40, { w: 1.4 }) + circ(cx, 70, 36, { c: 'm', w: 1, dash: '3 2' });
  for (const a of [0, 45, 90, 135, 180, 225, 270, 315]) { const [x1, y1] = pt(cx, 70, 42, a), [x2, y2] = pt(cx, 70, 56, a); s += arr(x1, y1, x2, y2, 'f', 1.2); }
  s += circ(cx, 70, 3, { fill: 'currentColor' }) + tx(cx, 90, 'g = 0', { fs: 10, anchor: 'middle', c: 'f' });
  s += tx(cx, 136, '实心球 · solid', { it: false, fs: 9.5, anchor: 'middle' });
  s += circ(cx, 184, 40, { fill: COL.f, op: 0.1, c: 'f', w: 1.4 });
  s += circ(cx, 162, 3, { fill: COL.f }) + arr(cx, 162, cx, 176, 'f', 1.6) + tx(cx + 8, 168, 'g ∝ r', { fs: 9, c: 'f' });
  const g = graph(176, 26, 192, 170, { fns: [{ f: (t) => (t <= 1 ? t : 1 / (t * t)), c: 'f', w: 2.4 }, { f: (t) => (t < 1 ? 0 : 1 / (t * t)), c: 'v', w: 2, dash: '6 3' }], t1: 3, ymin: 0, ymax: 1.25, xl: 'r/R', yl: 'g' });
  s += g.s;
  s += ln(g.X(1), g.Y(0), g.X(1), g.Y(1), { c: 'm', dash: '4 3', w: 1 }) + tx(g.X(1), g.Y(0) + 14, 'R', { anchor: 'middle', fs: 10 });
  s += tx(g.X(0.16), g.Y(0.78), '实心：g ∝ r', { fs: 9, c: 'f' });
  s += tx(g.X(1.35), g.Y(0.92), '壳内：g = 0', { fs: 9, c: 'v' });
  s += tx(g.X(1.8), g.Y(0.35), '外部均为 1/r²', { fs: 9 });
  s += eq(18, 244, ['g_{shell} = 0 (r < R),   g_{solid} ∝ r (r < R)']);
  return s;
});
def('inertial-vs-gravitational-mass', '惯性质量与引力质量的实验等效 · Inertial and gravitational mass: experimental equivalence', 'm_i=\\dfrac{F}{a},\\qquad m_g=\\dfrac{W}{g},\\qquad \\dfrac{m_i}{m_g}=1', () => {
  let s = tx(18, 18, '惯性质量 · inertial mass', { it: false, fs: 10 });
  s += tx(18, 32, '已知力 → 测加速度', { it: false, fs: 8.5, c: 'm' });
  s += ln(24, 172, 190, 172, { w: 2 });
  s += rect(58, 136, 46, 36) + tx(81, 158, 'm_{i}', { anchor: 'middle', fs: 11 });
  s += arr(104, 154, 158, 154, 'f', 2) + tx(132, 146, 'F', { c: 'f', fs: 11, anchor: 'middle' });
  s += arr(70, 126, 118, 126, 'a', 1.8) + tx(94, 118, 'a', { c: 'a', fs: 11, anchor: 'middle' });
  s += tx(18, 196, 'F = 2.0 N, a = 0.50 m/s²', { it: false, fs: 9 });
  s += tx(18, 212, 'm_{i} = F/a = 4.0 kg', { fs: 10.5, c: 'a' });
  s += ln(200, 28, 200, 220, { c: 'm', w: 1, dash: '4 3' });
  s += tx(216, 18, '引力质量 · gravitational mass', { it: false, fs: 10 });
  s += tx(216, 32, '在已知 g 中测重量', { it: false, fs: 8.5, c: 'm' });
  s += hatch(220, 48, 378);
  s += spring(300, 48, 300, 76, 6, 5);
  s += rect(278, 76, 44, 30) + tx(300, 96, '秤 scale', { it: false, fs: 8.5, anchor: 'middle' });
  s += ln(300, 106, 300, 132, { w: 1.2 }) + rect(284, 132, 32, 28) + tx(300, 151, 'm_{g}', { anchor: 'middle', fs: 11 });
  s += arr(300, 164, 300, 194, 'f', 2) + tx(306, 184, 'W = m_{g} g', { c: 'f', fs: 9.5 });
  s += tx(216, 206, 'W = 39.2 N, g = 9.8 m/s²', { it: false, fs: 8.5 });
  s += tx(216, 218, '→ m_{g} = 4.0 kg', { fs: 9.5, c: 'a' });
  s += eq(18, 242, ['m_{i} = m_{g}   (实验精度内 · within experimental precision)']);
  return s;
});
def('nonuniform-insulator', '非均匀带电绝缘球：ρ(r) 与 E(r) · Nonuniform charged insulator: ρ(r) and E(r) inside and outside', '\\rho(r)=\\rho_0\\left(1-\\dfrac{r}{R}\\right),\\quad E_{\\rm in}=\\dfrac{\\rho_0}{\\varepsilon_0}\\left(\\dfrac{r}{3}-\\dfrac{r^2}{4R}\\right),\\quad E_{\\rm out}=\\dfrac{\\rho_0R^3}{12\\varepsilon_0r^2}', () => {
  const cx = 98, cy = 116;
  let s = circ(cx, cy, 68, { fill: COL.E, op: 0.06, c: 'E', w: 1.3 }) + circ(cx, cy, 46, { fill: COL.E, op: 0.07, c: 'E', w: 1 }) + circ(cx, cy, 24, { fill: COL.E, op: 0.09, c: 'E', w: 1 });
  const pts = [[0, 0], [17, 0], [-17, 0], [0, 17], [0, -17], [34, 0], [-34, 0], [0, 34], [0, -34], [24, 24], [-24, 24], [24, -24], [-24, -24], [48, 16], [-48, 16], [48, -16], [-48, -16], [18, 50], [-18, 50], [18, -50], [-18, -50]];
  for (const [dx, dy] of pts) s += tx(cx + dx, cy + dy + 4, '+', { anchor: 'middle', fs: 10, c: 'E', it: false });
  s += circ(cx, cy, 42, { c: 'a', w: 1.3, dash: '4 3' }) + tx(cx + 46, cy - 34, '高斯面 r', { fs: 8.5, c: 'a' });
  for (const a of [20, 70, 110, 160, 200, 250, 290, 340]) { const [x1, y1] = pt(cx, cy, 70, a), [x2, y2] = pt(cx, cy, 86, a); s += arr(x1, y1, x2, y2, 'E', 1.2); }
  s += tx(cx, 202, 'ρ(r) = ρ₀(1 − r/R)', { fs: 9.5, anchor: 'middle' });
  const g = graph(204, 28, 180, 164, { fns: [{ f: (t) => (t <= 1 ? 4 * t - 3 * t * t : 1 / (t * t)), c: 'E', w: 2.4 }], t1: 2.4, ymin: 0, ymax: 1.5, xl: 'r/R', yl: 'E/E_{s}' });
  s += g.s;
  s += ln(g.X(1), g.Y(0), g.X(1), g.Y(1.5), { c: 'm', dash: '4 3', w: 1 }) + tx(g.X(1), g.Y(0) + 14, 'R', { anchor: 'middle', fs: 10 });
  s += ln(g.X(2 / 3), g.Y(0), g.X(2 / 3), g.Y(4 / 3), { c: 'm', dash: '2 3', w: 1 });
  s += tx(g.X(2 / 3) + 4, g.Y(1.42), '峰值 4/3', { fs: 8.5, c: 'E' });
  s += tx(g.X(1.3), g.Y(1.28), '内部 E 先增后减', { fs: 8.5, c: 'E' });
  s += tx(g.X(1.3), g.Y(0.52), '外部 E ∝ 1/r²', { fs: 8.5 });
  s += tx(18, 222, '密度向中心增大：内部 E 不是 ∝ r，峰值在 r = 2R/3。', { it: false, fs: 9 });
  s += tx(18, 236, 'Density grows inward, so E inside peaks at r = 2R/3 rather than rising linearly.', { it: false, fs: 8, c: 'm' });
  s += eq(18, 252, ['Q_{enc}(r) = 4πρ₀(r³/3 − r⁴/4R)']);
  return s;
});
def('conductor-vs-insulator', '导体与绝缘体：电荷分布与内部电场 · Conductor vs insulator: charge distribution and internal field', '\\text{conductor: }E_{\\rm in}=0,\\;Q_{\\rm surf};\\qquad \\text{insulator: }E_{\\rm in}\\ne0,\\;\\rho\\ne0', () => {
  const cx1 = 100, cx2 = 300, cy = 104, R = 54;
  let s = tx(cx1, 18, '导体 · conductor', { it: false, fs: 10, anchor: 'middle' });
  s += circ(cx1, cy, R, { fill: 'currentColor', op: 0.04, w: 1.4 });
  for (const a of [0, 45, 90, 135, 180, 225, 270, 315]) { const [x, y] = pt(cx1, cy, R, a); s += tx(x, y + 4, '+', { anchor: 'middle', fs: 11, c: 'E', it: false }); }
  for (const a of [20, 70, 110, 160, 200, 250, 290, 340]) { const [x1, y1] = pt(cx1, cy, R + 4, a), [x2, y2] = pt(cx1, cy, R + 24, a); s += arr(x1, y1, x2, y2, 'E', 1.2); }
  s += tx(cx1, cy + 4, 'E = 0', { anchor: 'middle', fs: 11, c: 'a' });
  s += tx(cx1, 192, '净电荷全在表面', { it: false, fs: 9, anchor: 'middle' });
  s += tx(cx1, 204, 'charge on the surface', { it: false, fs: 8, anchor: 'middle', c: 'm' });
  s += tx(cx2, 18, '绝缘体 · insulator', { it: false, fs: 10, anchor: 'middle' });
  s += circ(cx2, cy, R, { fill: COL.E, op: 0.1, c: 'E', w: 1.4 });
  const inside = [[0, 0], [18, 6], [-18, 6], [6, 20], [6, -20], [-6, 20], [-6, -20], [34, 22], [-34, 22], [34, -22], [-34, -22], [0, 38], [0, -38], [40, 0], [-40, 0]];
  for (const [dx, dy] of inside) s += tx(cx2 + dx, cy + dy + 4, '+', { anchor: 'middle', fs: 10, c: 'E', it: false });
  for (const a of [40, 140, 220, 320]) { const [x1, y1] = pt(cx2, cy, 22, a), [x2, y2] = pt(cx2, cy, 44, a); s += arr(x1, y1, x2, y2, 'E', 1.1); }
  for (const a of [0, 80, 170, 260, 350]) { const [x1, y1] = pt(cx2, cy, R + 4, a), [x2, y2] = pt(cx2, cy, R + 22, a); s += arr(x1, y1, x2, y2, 'E', 1.2); }
  s += tx(cx2, 192, '电荷遍布体积，内部 E ≠ 0', { it: false, fs: 9, anchor: 'middle' });
  s += tx(cx2, 204, 'charge throughout the volume', { it: false, fs: 8, anchor: 'middle', c: 'm' });
  s += tx(18, 220, '导体：静电平衡时内部 E = 0，净电荷只能分布在表面。', { it: false, fs: 9 });
  s += tx(18, 234, '绝缘体：电荷固定在体积内，一般 E ≠ 0（均匀球内部 E ∝ r）。', { it: false, fs: 9 });
  s += tx(18, 248, 'conductor: E = 0 inside; insulator: charge throughout, E may be nonzero inside.', { it: false, fs: 8, c: 'm' });
  return s;
});
def('permeability-temperature', '磁导率随温度的变化：铁磁、顺磁与抗磁 · Permeability versus temperature: ferromagnetic, paramagnetic and diamagnetic response', '\\mu_r=1+\\chi_m,\\qquad \\chi_{\\rm para}\\propto\\dfrac{1}{T},\\qquad T>T_C:\\ \\mu_r\\approx1', () => {
  const ferro = (t) => (t < 1 ? 400 * (1 - 0.3 * t * t) : 1 + 0.04 / (t - 1 + 0.04));
  const g1 = graph(38, 26, 150, 150, { fns: [{ f: ferro, c: 'B', w: 2.4 }], t1: 2.5, ymin: 0, ymax: 430, xl: 'T/T_{C}', yl: 'μ_{r}' });
  let s = g1.s;
  s += ln(g1.X(1), g1.Y(0), g1.X(1), g1.Y(430), { c: 'm', dash: '4 3', w: 1 }) + tx(g1.X(1), g1.Y(0) + 14, 'T_{C}', { anchor: 'middle', fs: 10 });
  s += tx(g1.X(1.12), g1.Y(330), '铁磁 ordered', { fs: 8.5, c: 'B' });
  s += tx(g1.X(1.12), g1.Y(70), '顺磁 ≈ 1', { fs: 8.5, c: 'B' });
  s += tx(38, 202, 'T < T_{C}：磁畴有序，μ_{r} ≫ 1', { it: false, fs: 8.5 });
  s += tx(38, 216, 'T > T_{C}：铁磁序消失，转为顺磁', { it: false, fs: 8.5 });
  const g2 = graph(220, 26, 150, 150, { fns: [{ f: (t) => 0.05 / (t + 0.15), c: 'a', w: 2.2 }, { f: () => -0.012, c: 'm', w: 1.8, dash: '5 3' }], t1: 3.5, ymin: -0.03, ymax: 0.08, xl: 'T', yl: 'χ_{m}' });
  s += g2.s + ln(g2.X(0.5), g2.Y(0), g2.X(3.5), g2.Y(0), { c: 'm', w: 0.9 });
  s += tx(g2.X(1.55), g2.Y(0.052), '顺磁 χ ∝ 1/T', { fs: 8.5, c: 'a' });
  s += tx(g2.X(0.55), g2.Y(-0.026), '抗磁 χ < 0，几乎不变', { fs: 8, c: 'm' });
  s += tx(18, 238, 'T_{C} 为居里温度：铁磁序被热运动破坏，μ_{r} 在 T_{C} 处陡降。', { it: false, fs: 9 });
  s += tx(18, 252, 'Curie point: ferromagnetic order collapses; above T_{C} μ_{r} ≈ 1 (paramagnetic).', { it: false, fs: 8, c: 'm' });
  return s;
});
def('finite-wire-field', '有限长直导线的磁场：毕奥–萨伐尔积分 · Finite straight wire: Biot–Savart integral', 'B=\\dfrac{\\mu_0I}{4\\pi d}\\left(\\sin\\theta_1+\\sin\\theta_2\\right),\\qquad B_{\\infty}=\\dfrac{\\mu_0I}{2\\pi d}', () => {
  let s = ln(44, 104, 184, 104, { c: 'I', w: 3 }) + tx(114, 88, '有限长 L · finite length', { it: false, fs: 9, anchor: 'middle' });
  s += arr(54, 104, 84, 104, 'I', 2.2) + arr(104, 104, 134, 104, 'I', 2.2) + arr(154, 104, 182, 104, 'I', 2.2);
  s += circ(44, 104, 3, { fill: COL.I }) + circ(184, 104, 3, { fill: COL.I });
  s += tx(38, 120, 'A', { fs: 10 }) + tx(188, 120, 'B', { fs: 10 });
  const Px = 114, Py = 196;
  s += ln(Px, 104, Px, Py, { c: 'm', dash: '4 3', w: 1.2 }) + tx(Px + 6, 154, 'd', { fs: 11 });
  s += ln(44, 104, Px, Py, { c: 'm', w: 1, dash: '3 3' }) + ln(184, 104, Px, Py, { c: 'm', w: 1, dash: '3 3' });
  s += arc(Px, Py, 30, 90, 127.6, { c: 'a', w: 1.2 }) + tx(Px - 22, Py - 34, 'θ₁', { c: 'a', fs: 10 });
  s += arc(Px, Py, 30, 52.4, 90, { c: 'a', w: 1.2 }) + tx(Px + 15, Py - 36, 'θ₂', { c: 'a', fs: 10 });
  s += circ(Px, Py, 4, { fill: 'currentColor' }) + tx(Px - 12, Py + 18, 'P', { fs: 11 });
  const g = graph(216, 28, 140, 160, { fns: [{ f: (t) => t / Math.sqrt(1 + t * t), c: 'B', w: 2.4 }], t1: 4, ymin: 0, ymax: 1.1, xl: '', yl: 'B/B_{∞}' });
  s += g.s + ln(g.X(0), g.Y(1), g.X(4), g.Y(1), { c: 'm', dash: '4 3', w: 1 }) + tx(g.X(2.1), g.Y(1.06), '无限长极限', { fs: 8.5, c: 'm' });
  s += tx(330, 204, 'L/2d', { fs: 10 });
  s += tx(g.X(0.3), g.Y(0.18), 'L ≪ d：B ∝ L/d²', { fs: 8 });
  s += tx(216, 202, 'L ≫ d：两端正弦都趋于 1', { it: false, fs: 8.5 });
  s += tx(18, 226, '两端张角决定有限段的磁场；把贡献沿导线积分得到正弦和。', { it: false, fs: 9 });
  s += tx(18, 240, 'The two end angles set the field; integrating dB along the segment gives the sine sum.', { it: false, fs: 8, c: 'm' });
  return s;
});
def('em-wave-profile', '电磁波剖面：E 与 B 同相振荡 · Electromagnetic-wave profile: E and B oscillate in phase', 'E=E_0\\cos(kx-\\omega t),\\quad B=B_0\\cos(kx-\\omega t),\\quad E_0=cB_0', () => {
  let s = arr(36, 140, 382, 140, 'g', 1.2) + arr(48, 236, 48, 36, 'g', 1.2);
  s += tx(386, 144, 'x', { fs: 11 }) + tx(42, 32, 'E, B', { fs: 10, anchor: 'end' });
  const ptsE = [], ptsB = [];
  for (let i = 0; i <= 240; i++) {
    const x = 48 + (i / 240) * 320, ph = ((x - 48) / 160) * 2 * Math.PI;
    ptsE.push([x, 140 - 56 * Math.cos(ph)]);
    ptsB.push([x, 140 - 34 * Math.cos(ph)]);
  }
  s += poly(ptsE, { c: 'E', w: 2.4 }) + poly(ptsB, { c: 'B', w: 2, dash: '6 3' });
  s += tx(56, 74, 'E', { c: 'E', fs: 13 }) + tx(62, 126, 'B', { c: 'B', fs: 13 });
  s += arr(48, 60, 208, 60, 'm', 1.1, '3 3') + arr(208, 60, 48, 60, 'm', 1.1, '3 3');
  s += tx(128, 52, 'λ', { fs: 12, anchor: 'middle' });
  s += arr(300, 222, 350, 222, 'v', 2) + tx(325, 214, 'c', { c: 'v', fs: 12, anchor: 'middle' });
  s += tx(48, 228, '同一时刻：E 与 B 同时达到最大、同时为零，相位相同。', { it: false, fs: 9 });
  s += tx(48, 242, 'At a fixed time E and B peak and vanish together: they are in phase, with E = cB.', { it: false, fs: 8, c: 'm' });
  return s;
});

/* ======================= Track B B04–B05 coverage figures ======================= */
def('nonuniform-integration', '非匀加速：由 a(t) 积分还原 v(t) 与 x(t) · Nonuniform acceleration: integrate a(t) to recover v(t) and x(t)', 'v(t)=v_0+\\int_0^t a\\,\\mathrm{d}t,\\qquad x(t)=x_0+\\int_0^t v\\,\\mathrm{d}t', () => {
  const g1 = graph(34, 30, 142, 140, { fns: [{ f: (t) => 0.8 * t, c: 'a', w: 2.4 }], t1: 2.5, ymin: 0, ymax: 2.3, xl: 't', yl: 'a' });
  let s = g1.s;
  s += poly([[g1.X(0), g1.Y(0)], [g1.X(2), g1.Y(0)], [g1.X(2), g1.Y(1.6)]], { fill: COL.a, c: 'a', op: 0.16 });
  s += ln(g1.X(2), g1.Y(0), g1.X(2), g1.Y(1.6), { c: 'm', dash: '4 3', w: 1 }) + tx(g1.X(2) + 4, g1.Y(0) + 15, 'T', { fs: 10 });
  s += tx(g1.X(0.55), g1.Y(0.95), '面积 = Δv', { it: false, fs: 9, c: 'a' });
  const g2 = graph(236, 30, 142, 140, { fns: [{ f: (t) => 0.4 * t * t, c: 'v', w: 2.4 }], t1: 2.5, ymin: 0, ymax: 2.7, xl: 't', yl: 'v' });
  s += g2.s;
  s += poly([[g2.X(0), g2.Y(0)], [g2.X(2), g2.Y(0)], [g2.X(2), g2.Y(1.6)], ...Array.from({ length: 33 }, (_, i) => { const t = 2 * (1 - i / 32); return [g2.X(t), g2.Y(0.4 * t * t)]; })], { fill: COL.v, c: 'v', op: 0.14 });
  s += tx(g2.X(0.5), g2.Y(1.1), '面积 = Δx', { it: false, fs: 9, c: 'v' });
  s += tx(34, 190, 'a(t)=kt：斜率 k，曲线下面积给出速度增量。', { it: false, fs: 9 });
  s += tx(34, 204, '再把 v(t) 积分一次得到位移；积分常数由 v₀、x₀ 固定。', { it: false, fs: 9 });
  s += tx(34, 218, 'Piecewise a(t): match v and x at each join; sign of area matters.', { it: false, fs: 8, c: 'm' });
  s += eq(34, 242, ['v(t) = v₀ + ∫a dt,   x(t) = x₀ + ∫v dt']);
  return s;
});
def('nonuniform-components', '不同方向非匀加速：分量各自积分 · Different nonuniform accelerations by component', 'a_x(t)\\ne a_y(t),\\qquad v_x=v_{0x}+\\int a_x\\,\\mathrm{d}t,\\qquad v_y=v_{0y}+\\int a_y\\,\\mathrm{d}t', () => {
  const gx = graph(28, 30, 128, 112, { fns: [{ f: (t) => 0.9 * t, c: 'a', w: 2.2 }], t1: 2.4, ymin: 0, ymax: 2.4, xl: 't', yl: 'a_x' });
  const gy = graph(28, 170, 128, 52, { fns: [{ f: (t) => 0.9 * t, c: 'a', w: 2.2, dash: '5 3' }], t1: 2.4, ymin: 0, ymax: 2.4, xl: 't', yl: 'a_y' });
  let s = gx.s + gy.s;
  s += tx(30, 152, 'a_x = αt（上）· a_y = −βt（下，取大小）', { it: false, fs: 8.5 });
  const gvx = graph(210, 26, 168, 88, { fns: [{ f: (t) => 0.45 * t * t, c: 'v', w: 2.2 }], t1: 2.4, ymin: 0, ymax: 2.7, xl: 't', yl: 'v_x' });
  const gvy = graph(210, 146, 168, 78, { fns: [{ f: (t) => 2.4 - 0.45 * t * t, c: 'v', w: 2.2, dash: '5 3' }], t1: 2.4, ymin: 0, ymax: 2.7, xl: 't', yl: 'v_y' });
  s += gvx.s + gvy.s;
  s += ln(gvx.X(2.0), gvx.Y(0), gvx.Y(2.0), gvx.Y(2.0), { c: 'm', w: 0.8 }) + ln(gvx.X(2.0), gvx.Y(0), gvx.X(2.0), gvx.Y(0.15), { c: 'm', w: 0.8 });
  s += tx(210, 240, '同一 t 标记：速度分量独立积分，轨迹由 (x(t), y(t)) 合成。', { it: false, fs: 8.5 });
  s += tx(210, 252, 'If a_x depends on y, the equations couple and cannot be integrated separately.', { it: false, fs: 7.8, c: 'm' });
  s += eq(28, 246, ['v_x = v_{0x}+∫a_x dt,   v_y = v_{0y}+∫a_y dt']);
  return s;
});
def('trajectory-3d', '三维轨迹与坐标面投影 · 3D trajectory and coordinate-plane projections', '\\vec r(t)=x(t)\\hat i+y(t)\\hat j+z(t)\\hat k,\\qquad \\vec v=\\dfrac{\\mathrm{d}\\vec r}{\\mathrm{d}t}', () => {
  const O = [150, 212], X = [350, 212], Y = [76, 156], Z = [150, 44];
  let s = ln(O[0], O[1], X[0], X[1], { w: 1.2 }) + ln(O[0], O[1], Y[0], Y[1], { w: 1.2 }) + ln(O[0], O[1], Z[0], Z[1], { w: 1.2 });
  s += tx(X[0] + 4, X[1] + 4, 'x', { fs: 11 }) + tx(Y[0] - 12, Y[1] - 2, 'y', { fs: 11 }) + tx(Z[0] - 4, Z[1] - 6, 'z', { fs: 11 });
  const P = (t) => [150 + 150 * t - 55 * t * t, 212 - 12 * t - 95 * t * t + 12 * t * t * t];
  const curve = Array.from({ length: 60 }, (_, i) => P(i / 59));
  const projXY = curve.map(([x, y]) => [x, 212 - (212 - y) * 0.18]);
  const projXZ = curve.map(([x, y]) => [x, 212 - (212 - y) * 0.72]);
  const projYZ = curve.map(([x, y]) => [150 + (x - 150) * 0.18, y]);
  s += poly(projXY, { c: 'm', w: 1, dash: '3 3' }) + poly(projXZ, { c: 'm', w: 1, dash: '3 3' }) + poly(projYZ, { c: 'm', w: 1, dash: '3 3' });
  s += poly(curve, { c: 'v', w: 2.6 });
  s += tx(300, 60, 'r(t) 空间曲线', { it: false, fs: 9.5, c: 'v' });
  s += tx(242, 196, 'xy 投影', { it: false, fs: 8, c: 'm' }) + tx(262, 104, 'xz 投影', { it: false, fs: 8, c: 'm' }) + tx(64, 86, 'yz 投影', { it: false, fs: 8, c: 'm' });
  s += circ(P(0.62)[0], P(0.62)[1], 3.5, { fill: COL.v }) + tx(P(0.62)[0] + 7, P(0.62)[1] + 4, 't', { fs: 10, c: 'v' });
  s += tx(18, 238, '三个分量共用同一时间 t；任一投影不足以还原三维运动。', { it: false, fs: 8.8 });
  s += tx(18, 252, 'Each component is a 1D problem with a common clock; one projection loses information.', { it: false, fs: 7.8, c: 'm' });
  return s;
});

def('point-vs-rigid-model', '内部结构决定模型：质点、刚体与多体 · Internal structure sets the model: point, rigid body, multi-body', '\\text{point: }\\vec r_{\\rm cm};\\quad \\text{rigid: }I,\\alpha;\\quad \\text{multi-body: internal degrees of freedom}', () => {
  let s = tx(18, 18, '(a) 平动：质点模型 · point model', { it: false, fs: 9.5 });
  s += hatch(20, 160, 116) + rect(42, 120, 46, 38) + circ(65, 139, 3, { fill: 'currentColor' });
  s += arr(65, 139, 108, 139, 'f', 1.8) + tx(84, 132, 'F', { c: 'f', fs: 10 });
  s += tx(18, 188, '内部结构可忽略；只跟踪质心平动。', { it: false, fs: 8.5 });
  s += tx(142, 18, '(b) 转动：刚体模型 · rigid-body model', { it: false, fs: 9.5 });
  s += circ(212, 140, 36, { fill: COL.v, op: 0.1, c: 'v', w: 1.6 }) + circ(212, 140, 3, { fill: 'currentColor' });
  s += arc(212, 140, 46, 20, 150, { c: 'a', w: 1.5 }) + tx(260, 100, 'I, α', { c: 'a', fs: 10 });
  s += tx(142, 188, '质量分布影响 I；转动与形变不可忽略。', { it: false, fs: 8.5 });
  s += tx(282, 18, '(c) 多体：内部自由度 · multi-body', { it: false, fs: 9.5 });
  s += rect(286, 116, 32, 30) + rect(348, 116, 32, 30) + spring(318, 131, 348, 131, 7, 5);
  s += arr(302, 108, 302, 96, 'a', 1.2) + arr(364, 108, 364, 96, 'a', 1.2) + tx(308, 92, 'internal', { it: false, fs: 7.5, c: 'a' });
  s += tx(282, 188, '弹簧振荡等内部运动需额外坐标。', { it: false, fs: 8.5 });
  s += tx(18, 216, '质点模型丢掉转动、形变与内部能量；刚体模型保留质量分布；多体模型保留内部自由度。', { it: false, fs: 8.8 });
  s += tx(18, 230, 'Choose the simplest model that still keeps the physics the question asks about.', { it: false, fs: 7.8, c: 'm' });
  s += eq(18, 250, ['point ⊂ rigid body ⊂ multi-body']);
  return s;
});
def('nonuniform-rod-cm', '非均匀杆的质心：dm = λ(x) dx · Center of mass of a nonuniform rod', 'x_{\\rm cm}=\\dfrac{\\int_0^L x\\lambda(x)\\,\\mathrm{d}x}{\\int_0^L\\lambda(x)\\,\\mathrm{d}x},\\qquad \\lambda(x)=\\lambda_0\\left(1+\\dfrac{x}{L}\\right)', () => {
  const x0 = 48, x1 = 352, y = 136, xc = x0 + (x1 - x0) * 5 / 9;
  let s = ln(x0 - 10, y, x1 + 10, y, { w: 2 });
  s += poly([[x0, y - 52], [x1, y - 76], [x1, y - 8], [x0, y - 8]], { fill: COL.a, c: 'a', op: 0.12 });
  s += ln(x0, y - 52, x0, y - 8, { c: 'a', w: 1 }) + ln(x1, y - 76, x1, y - 8, { c: 'a', w: 1 });
  s += tx(x0 - 4, y - 58, 'λ₀', { fs: 10, c: 'a', anchor: 'end' }) + tx(x1 + 4, y - 82, '2λ₀', { fs: 10, c: 'a' });
  const xe = x0 + (x1 - x0) * 0.72;
  s += rect(xe - 7, y - 8, 14, 10, { c: 'f', w: 1 }) + tx(xe, y + 22, 'dm = λ(x) dx', { fs: 9, c: 'f', anchor: 'middle' });
  s += ln(xc, y, xc, y + 46, { c: 'm', dash: '4 3', w: 1.2 }) + circ(xc, y, 4, { fill: 'currentColor' }) + tx(xc, y + 60, 'x_cm = 5L/9', { fs: 10, anchor: 'middle' });
  s += tx(x0, y - 96, '密度向右增大 → 质心偏向右侧', { it: false, fs: 9 });
  s += tx(18, 216, 'M = ∫λ dx = 3λ₀L/2；x_cm = ∫xλ dx / M = 5L/9。', { it: false, fs: 9 });
  s += tx(18, 230, 'The extra mass on the right pulls the CM right of the midpoint L/2.', { it: false, fs: 8, c: 'm' });
  s += eq(18, 250, ['M=∫λ dx,   x_{cm}=', { n: '1', d: 'M' }, '∫xλ dx']);
  return s;
});

def('system-internal-interactions', '内部相互作用决定系统性质 · Internal interactions determine system properties', '\\sum\\vec F_{\\rm int}=0,\\qquad \\vec p_{\\rm sys}=\\text{const (isolated)},\\qquad \\Delta E_{\\rm int}\\ne0', () => {
  let s = rect(30, 30, 190, 160, { dash: '5 4', c: 'm' }) + tx(36, 22, '系统边界 · system boundary', { it: false, fs: 8.5 });
  const pts = [[88, 76], [158, 66], [118, 142], [178, 146]];
  for (const [x, y] of pts) s += circ(x, y, 10, { fill: COL.f, op: 0.14, c: 'f' });
  s += arr(98, 76, 146, 68, 'f', 1.5) + arr(146, 68, 98, 76, 'f', 1.5, '4 2');
  s += arr(126, 134, 168, 140, 'f', 1.5) + arr(168, 140, 126, 134, 'f', 1.5, '4 2');
  s += tx(122, 54, '成对内力 · paired internal forces', { it: false, fs: 8, c: 'f', anchor: 'middle' });
  s += tx(238, 42, '宏观性质 · macroscopic:', { it: false, fs: 9.5 });
  s += tx(238, 62, '温度 T、压强 p', { it: false, fs: 9 });
  s += tx(238, 80, '内能 E_int、总动量 p', { it: false, fs: 9 });
  s += tx(238, 108, '内力成对抵消：', { it: false, fs: 9 });
  s += tx(238, 124, 'ΣF_int = 0 → p 不变', { fs: 9, c: 'a' });
  s += tx(238, 150, '内力可重分配能量：', { it: false, fs: 9 });
  s += tx(238, 166, '摩擦/碰撞 → ΔE_int > 0', { fs: 9, c: 'f' });
  s += tx(18, 216, '系统性质（温度、压强、内能、总动量）由组成对象的相互作用决定。', { it: false, fs: 8.8 });
  s += tx(18, 230, 'Internal forces cancel in the total-momentum sum but can redistribute energy.', { it: false, fs: 7.8, c: 'm' });
  s += eq(18, 250, ['ΣF_{int}=0,   M a_{cm}=ΣF_{ext}']);
  return s;
});
def('open-system-mass-energy', '开放系统：质量与能量跨边界传递 · Open system: mass and energy cross the boundary', '\\dfrac{\\mathrm{d}m}{\\mathrm{d}t}=\\dot m_{\\rm in}-\\dot m_{\\rm out},\\qquad \\dfrac{\\mathrm{d}E}{\\mathrm{d}t}=\\dot Q-\\dot W+\\dot E_{\\rm mass,in}-\\dot E_{\\rm mass,out}', () => {
  let s = rect(92, 58, 180, 118, { dash: '5 4', c: 'm', w: 1.6 });
  s += tx(96, 48, '控制体积 · control volume', { it: false, fs: 9 });
  s += arr(24, 92, 88, 92, 'v', 2) + tx(28, 84, 'ṁ_in', { fs: 10, c: 'v' });
  s += arr(272, 140, 344, 140, 'v', 2) + tx(292, 132, 'ṁ_out', { fs: 10, c: 'v' });
  s += arr(160, 34, 160, 54, 'f', 1.8) + tx(168, 44, 'Q', { fs: 10, c: 'f' });
  s += arr(238, 176, 238, 208, 'a', 1.8) + tx(246, 196, 'W', { fs: 10, c: 'a' });
  s += tx(108, 110, 'E_mass,in', { fs: 9, c: 'v' }) + tx(240, 120, 'E_mass,out', { fs: 9, c: 'v' });
  s += tx(18, 224, '开放：质量与能量都可跨边界；封闭：无质量交换；孤立：两者都无。', { it: false, fs: 8.5 });
  s += tx(18, 238, 'Open: mass + energy flow; closed: no mass flow; isolated: neither.', { it: false, fs: 7.8, c: 'm' });
  s += eq(18, 254, ['open: mass flow ≠ 0;  closed: mass flow = 0;  isolated: also Q = W = 0']);
  return s;
});

def('fbd-center-of-mass', '质心点受力图：所有外力从质心出发 · Center-of-mass FBD: every external force starts at the CM dot', '\\vec F_{\\rm net}=\\sum\\vec F_{\\rm ext},\\qquad \\vec a_{\\rm cm}=\\dfrac{\\vec F_{\\rm net}}{M}', () => {
  let s = tx(18, 18, '实物 · extended object', { it: false, fs: 9.5 });
  s += hatch(24, 178, 156) + rect(54, 104, 72, 56) + circ(90, 132, 4, { fill: 'currentColor' }) + tx(90, 126, 'CM', { fs: 9, anchor: 'middle' });
  s += tx(18, 202, '质心不一定在物体内部，但可代表整体平动。', { it: false, fs: 8.2 });
  s += tx(174, 18, '受力图 · free-body diagram', { it: false, fs: 9.5 });
  s += circ(252, 132, 5, { fill: 'currentColor' });
  s += arr(252, 132, 252, 82, 'f', 1.8) + tx(258, 96, 'N', { c: 'f', fs: 10 });
  s += arr(252, 132, 252, 182, 'f', 1.8) + tx(258, 176, 'Mg', { c: 'f', fs: 10 });
  s += arr(252, 132, 312, 112, 'f', 1.8) + tx(290, 104, 'T', { c: 'f', fs: 10 });
  s += arr(252, 132, 200, 118, 'f', 1.8) + tx(206, 112, 'f', { c: 'f', fs: 10 });
  s += tx(174, 202, '所有外力箭头统一起点于质心点。', { it: false, fs: 8.2 });
  s += ln(322, 48, 382, 104, { c: 'f', w: 1.8 }) + ln(382, 48, 322, 104, { c: 'f', w: 1.8 });
  s += tx(326, 132, '不画：', { it: false, fs: 8.5 });
  s += tx(326, 146, '物体对环境的作用力', { it: false, fs: 8 });
  s += tx(326, 160, '与 ma 箭头', { it: false, fs: 8 });
  s += tx(18, 232, '系统视为质量集中在质心；只画作用在系统上的外力。', { it: false, fs: 8.8 });
  s += tx(18, 246, 'A system is treated as if all its mass sits at the CM.', { it: false, fs: 7.8, c: 'm' });
  return s;
});
def('ideal-string-tension', '理想绳的张力：微段受力与均匀张力 · Tension in an ideal string: segment forces and uniform tension', 'T(x+\\Delta x)-T(x)=\\Delta m\\,a\\;\\xrightarrow{\\Delta m\\to0}\\;T=\\text{const}', () => {
  let s = ln(28, 92, 172, 92, { c: 'I', w: 2.2 }) + arr(58, 92, 92, 92, 'I', 1.4) + arr(108, 92, 142, 92, 'I', 1.4);
  s += rect(84, 78, 32, 28, { c: 'f', w: 1.4, dash: '3 2' }) + tx(100, 72, 'Δm', { fs: 9, anchor: 'middle' });
  s += arr(84, 92, 56, 92, 'f', 1.8) + arr(116, 92, 144, 92, 'f', 1.8);
  s += tx(50, 116, 'T(x)', { fs: 10, c: 'f' }) + tx(130, 116, 'T(x+Δx)', { fs: 10, c: 'f' });
  s += tx(28, 146, '无质量极限：Δm → 0 ⇒ T(x+Δx) = T(x)', { it: false, fs: 8.8 });
  s += tx(28, 160, '不可伸长 ⇒ 各段加速度相同。', { it: false, fs: 8.8 });
  s += ln(206, 30, 206, 226, { c: 'm', w: 1, dash: '4 3' });
  s += ln(300, 36, 300, 64, { w: 1.4 }) + spring(300, 64, 300, 118, 8, 6);
  s += rect(280, 118, 40, 30) + tx(300, 138, 'm_block', { fs: 9, anchor: 'middle' });
  s += tx(232, 46, '有质量绳 · massive rope', { it: false, fs: 9 });
  s += arr(300, 118, 300, 96, 'f', 1.6) + tx(308, 102, 'T_bottom = m_block g', { fs: 8.2, c: 'f' });
  s += arr(300, 64, 300, 48, 'f', 1.6) + tx(308, 52, 'T_top = (m_rope+m_block)g', { fs: 8.2, c: 'f' });
  s += tx(232, 176, '真实绳：张力随高度变化。', { it: false, fs: 8.8 });
  s += tx(232, 190, '理想绳：质量可忽略且不可伸长。', { it: false, fs: 8.8 });
  s += tx(18, 220, '张力是相邻绳段相互作用的宏观表现，不是绳子“产生”的独立力。', { it: false, fs: 8.6 });
  s += tx(18, 234, 'Tension is the macroscopic net of adjacent-segment forces.', { it: false, fs: 7.8, c: 'm' });
  s += eq(18, 252, ['T_{top}=(m_{rope}+m_{block})g,   T_{bottom}=m_{block}g']);
  return s;
});
def('circular-accel-vector-sum', '圆周运动：径向与切向加速度矢量合成 · Circular motion: vector sum of radial and tangential acceleration', '\\vec a=\\vec a_c+\\vec a_t,\\qquad a=\\sqrt{a_c^2+a_t^2},\\qquad \\tan\\phi=\\dfrac{a_t}{a_c}', () => {
  const cx = 132, cy = 132, R = 74;
  let s = circ(cx, cy, R, { c: 'm', w: 1.3, dash: '4 3' }) + circ(cx, cy, 3, { fill: 'currentColor' });
  const A = pt(cx, cy, R, 35), B = pt(cx, cy, R, 140);
  s += circ(A[0], A[1], 5, { fill: COL.v });
  s += arr(A[0], A[1], A[0] + 42, A[1] - 30, 'v', 2) + tx(A[0] + 46, A[1] - 34, 'v', { c: 'v', fs: 10 });
  s += arr(A[0], A[1], cx + (A[0] - cx) * 0.52, cy + (A[1] - cy) * 0.52, 'a', 2) + tx(cx + 18, cy + 20, 'a_c', { c: 'a', fs: 10 });
  s += arr(A[0], A[1], A[0] + 32, A[1] - 23, 'a', 2) + tx(A[0] + 8, A[1] - 30, 'a_t', { c: 'a', fs: 10 });
  s += ln(A[0] + 32, A[1] - 23, A[0] + 66, A[1] - 52, { c: 'a', w: 1.3, dash: '3 2' });
  s += ln(cx + (A[0] - cx) * 0.52, cy + (A[1] - cy) * 0.52, A[0] + 66, A[1] - 52, { c: 'a', w: 1.3, dash: '3 2' });
  s += arr(A[0], A[1], A[0] + 66, A[1] - 52, 'a', 2.4) + tx(A[0] + 70, A[1] - 58, 'a', { c: 'a', fs: 11 });
  s += circ(B[0], B[1], 5, { fill: COL.v }) + arr(B[0], B[1], B[0] - 18, B[1] - 40, 'v', 1.8);
  s += tx(232, 48, '加速：a_t 与 v 同向', { it: false, fs: 9 });
  s += tx(232, 66, '减速：a_t 与 v 反向', { it: false, fs: 9 });
  s += tx(232, 92, '匀速圆周：a_t = 0，a = a_c', { it: false, fs: 9 });
  s += tx(232, 118, '方向：tan φ = a_t / a_c', { it: false, fs: 9 });
  s += tx(18, 214, '向心分量只改变方向；切向分量改变速率。', { it: false, fs: 8.8 });
  s += tx(18, 228, 'The two perpendicular components add as vectors, not algebraically.', { it: false, fs: 7.8, c: 'm' });
  s += eq(18, 248, ['a=a_c+a_t,   a_c=', { n: 'v²', d: 'r' }, '=ω²r,   a_t=rα']);
  return s;
});

def('gravity-field-model', '引力场：非接触作用的空间模型 · Gravitational field: a spatial model of noncontact force', '\\vec g(\\vec r)=\\dfrac{\\vec F_g(\\vec r)}{m},\\qquad \\vec F_g=m\\vec g', () => {
  const cx = 112, cy = 128;
  let s = circ(cx, cy, 26, { fill: COL.f, op: 0.2, c: 'f', w: 1.6 }) + tx(cx, cy + 4, 'M', { fs: 12, anchor: 'middle' });
  for (const a of [0, 40, 80, 120, 160, 200, 240, 280, 320]) {
    const r1a = 34, r2a = 34 + 62 / (1 + (a % 80) / 40);
    const [x1, y1] = pt(cx, cy, r1a, a), [x2, y2] = pt(cx, cy, r1a + 28, a);
    s += arr(x1, y1, x2, y2, 'f', 1.2);
  }
  s += tx(cx, 54, 'g 的箭头随 r 增大而变短', { it: false, fs: 8.5, anchor: 'middle' });
  const T = [272, 84];
  s += circ(T[0], T[1], 6, { fill: COL.v }) + tx(T[0] + 10, T[1] + 4, 'm（试探质量）', { it: false, fs: 8.5 });
  s += arr(T[0], T[1], T[0] - 34, T[1] + 18, 'f', 1.7) + tx(T[0] - 38, T[1] + 38, 'F_g = m g', { c: 'f', fs: 9 });
  s += tx(216, 138, '场在每一点都有大小和方向；', { it: false, fs: 8.8 });
  s += tx(216, 152, '没有试探质量时场仍然存在。', { it: false, fs: 8.8 });
  s += tx(216, 174, '场由源质量 M 决定，', { it: false, fs: 8.8 });
  s += tx(216, 188, '不是“流线”。', { it: false, fs: 8.8 });
  s += tx(18, 216, '引力场把“超距作用”改写成空间中逐点的矢量模型。', { it: false, fs: 8.8 });
  s += tx(18, 230, 'The field exists at every point even without a test mass.', { it: false, fs: 7.8, c: 'm' });
  s += eq(18, 250, ['g(r)=', { n: 'GM', d: 'r²' }, '  (outside a spherical source)']);
  return s;
});
def('gravity-mass-element-superposition', '质量元引力矢量叠加 · Vector superposition of gravitational forces from mass elements', '\\vec F_{\\rm net}=\\sum_i\\vec F_i,\\qquad F_{\\rm net}=\\dfrac{GMm}{r^2}\\ \\text{(outside)}', () => {
  const cx = 112, cy = 126, R = 48;
  let s = circ(cx, cy, R, { fill: COL.f, op: 0.08, c: 'f', w: 1.4 });
  for (const a of [20, 70, 120, 170, 220, 270, 320]) {
    const [x, y] = pt(cx, cy, R * 0.72, a);
    s += circ(x, y, 3, { fill: COL.f }) + tx(x + 4, y - 4, 'dm', { fs: 7.5, c: 'f' });
  }
  const P = [314, 86];
  s += circ(P[0], P[1], 5, { fill: COL.v }) + tx(P[0] + 8, P[1] + 4, 'm', { fs: 10 });
  const d1 = [cx + 34, cy - 34], d2 = [cx + 34, cy + 34];
  s += arr(d1[0], d1[1], P[0] - 8, P[1] + 6, 'f', 1.3) + arr(d2[0], d2[1], P[0] - 8, P[1] - 6, 'f', 1.3);
  s += tx(P[0] - 34, P[1] - 18, 'dF₁', { fs: 8, c: 'f' }) + tx(P[0] - 34, P[1] + 26, 'dF₂', { fs: 8, c: 'f' });
  s += arr(P[0], P[1], P[0] + 34, P[1], 'a', 2.2) + tx(P[0] + 40, P[1] + 4, 'ΣdF', { c: 'a', fs: 9 });
  s += tx(196, 150, '横向分量相消，径向分量相加；', { it: false, fs: 8.5 });
  s += tx(196, 164, '外部等效于球心点质量。', { it: false, fs: 8.5 });
  s += tx(18, 206, '球壳内部：相对立体角的质量元成对抵消 → 净力为零。', { it: false, fs: 8.4 });
  s += tx(18, 220, 'Interior of a thin shell: opposite solid-angle patches cancel.', { it: false, fs: 7.8, c: 'm' });
  s += eq(18, 240, ['F_{net}=∫dF,   ΣF_{⊥}=0,   F_{radial}=', { n: 'GMm', d: 'r²' }]);
  return s;
});

def('springs-series-parallel', '弹簧串联与并联：等效劲度系数 · Springs in series and parallel: equivalent spring constant', '\\dfrac{1}{k_{\\rm series}}=\\sum_i\\dfrac{1}{k_i},\\qquad k_{\\rm parallel}=\\sum_i k_i', () => {
  let s = tx(18, 18, '串联 · series', { it: false, fs: 9.5 });
  s += ln(22, 54, 66, 54, { w: 1.6 }) + spring(66, 54, 138, 54, 8, 6) + ln(138, 54, 168, 54, { w: 1.6 });
  s += arr(168, 54, 198, 54, 'f', 1.8) + tx(180, 42, 'F', { c: 'f', fs: 10 });
  s += tx(66, 82, 'k₁', { fs: 9 }) + tx(138, 82, 'k₂', { fs: 9 });
  s += tx(18, 110, '同一 F；形变相加 Δx = Δx₁ + Δx₂', { it: false, fs: 8.5 });
  s += tx(18, 126, '等效弹簧比任一根都软。', { it: false, fs: 8.5 });
  s += tx(18, 148, '200 与 300 N/m → k_eq = 120 N/m', { fs: 8.8, c: 'a' });
  s += ln(18, 168, 196, 168, { c: 'm', w: 1, dash: '4 3' });
  s += tx(18, 188, '并联 · parallel', { it: false, fs: 9.5 });
  s += ln(22, 212, 58, 212, { w: 1.6 });
  s += spring(58, 212, 128, 212, 8, 6) + spring(58, 232, 128, 232, 8, 6);
  s += ln(128, 212, 176, 212, { w: 1.6 }) + ln(128, 232, 176, 232, { w: 1.6 });
  s += arr(176, 212, 206, 212, 'f', 1.8) + arr(176, 232, 206, 232, 'f', 1.8) + tx(190, 200, 'F', { c: 'f', fs: 10 });
  s += tx(40, 216, 'k₁', { fs: 9 }) + tx(40, 236, 'k₂', { fs: 9 });
  s += tx(222, 54, '同一 Δx；力相加 F = F₁ + F₂', { it: false, fs: 8.8 });
  s += tx(222, 70, '等效弹簧比任一根都硬。', { it: false, fs: 8.8 });
  s += tx(222, 92, '200 与 300 N/m → k_eq = 500 N/m', { fs: 8.8, c: 'a' });
  s += tx(222, 116, '串联：同力，形变相加。', { it: false, fs: 8.8 });
  s += tx(222, 130, '并联：同形变，力相加。', { it: false, fs: 8.8 });
  s += tx(222, 154, 'Series: same force. Parallel: same extension.', { it: false, fs: 7.8, c: 'm' });
  return s;
});
def('spring-substructure-external-variable', '外变量改变弹簧子结构 · External variables change a spring’s substructure', 'F=-kx\\ \\text{(small }x\\text{)},\\qquad k=k(T,\\text{history}),\\qquad \\text{yield when }x\\text{ is large}', () => {
  let s = tx(18, 18, '宏观：弹簧形变 · macroscopic', { it: false, fs: 9.5 });
  s += ln(24, 80, 56, 80, { w: 1.6 }) + spring(56, 80, 174, 80, 10, 8) + ln(174, 80, 208, 80, { w: 1.6 });
  s += arr(208, 80, 244, 80, 'f', 2) + tx(226, 68, 'F', { c: 'f', fs: 10 });
  s += tx(18, 104, '温度 T、外力 F、加载历史都是外变量。', { it: false, fs: 8.5 });
  s += tx(18, 132, '微观：原子键长与键角 · microscopic', { it: false, fs: 9.5 });
  const ax = [60, 132, 204];
  for (let i = 0; i < 3; i++) s += circ(ax[i], 170, 12, { fill: COL.a, op: 0.16, c: 'a', w: 1.3 });
  s += ln(ax[0] + 12, 170, ax[1] - 12, 170, { w: 1.8 }) + ln(ax[1] + 12, 170, ax[2] - 12, 170, { w: 1.8 });
  s += arr(60, 148, 60, 132, 'f', 1.4) + arr(204, 148, 204, 132, 'f', 1.4) + tx(132, 142, '外加作用 / 升温', { it: false, fs: 8, c: 'f', anchor: 'middle' });
  s += tx(18, 198, '外变量 → 键长/键角变化 → k 改变或胡克定律失效。', { it: false, fs: 8.6 });
  s += tx(18, 212, '超过弹性极限后出现屈服/塑性，不再可逆。', { it: false, fs: 8.6 });
  const g = graph(252, 30, 132, 132, { fns: [{ f: (t) => (t <= 1 ? t : 1 + 0.25 * (t - 1)), c: 'a', w: 2.2 }], t1: 2.2, ymin: 0, ymax: 1.6, xl: 'x', yl: 'F' });
  s += g.s;
  s += ln(g.X(1), g.Y(0), g.X(1), g.Y(1), { c: 'm', dash: '4 3', w: 1 }) + tx(g.X(1), g.Y(0) + 14, '弹性极限', { fs: 8, anchor: 'middle' });
  s += tx(g.X(0.25), g.Y(0.32), '线性区', { fs: 8, c: 'a' }) + tx(g.X(1.2), g.Y(1.25), '屈服', { fs: 8, c: 'f' });
  s += tx(252, 190, 'External variable → substructure change → k shifts.', { it: false, fs: 7.8, c: 'm' });
  s += eq(18, 238, ['F=−kx  (linear elastic only);   k=k(T)']);
  return s;
});

def('single-vs-multi-object-energy', '单对象与多对象系统的能量对照 · Single-object versus multi-object energy accounting', '\\text{single object: }K\\ \\text{only};\\qquad \\text{object+Earth: }K+U_g;\\qquad \\text{object+spring: }K+U_s', () => {
  let s = tx(18, 18, '(a) 只选物块 · block alone', { it: false, fs: 9.5 });
  s += hatch(22, 152, 128) + rect(48, 96, 54, 44) + tx(75, 123, 'm', { fs: 11, anchor: 'middle' });
  s += arr(102, 118, 138, 118, 'f', 1.8) + tx(120, 108, 'W_ext', { c: 'f', fs: 9 });
  s += tx(18, 180, '只有动能 K；外力做功改变 K。', { it: false, fs: 8.5 });
  s += tx(18, 194, '单对象点模型没有势能。', { it: false, fs: 8.5 });
  s += ln(158, 26, 158, 214, { c: 'm', w: 1, dash: '4 3' });
  s += tx(174, 18, '(b) 物块 + 地球 · block + Earth', { it: false, fs: 9.5 });
  s += circ(220, 96, 18, { fill: COL.v, op: 0.12, c: 'v', w: 1.3 }) + tx(220, 100, 'Earth', { fs: 7.5, anchor: 'middle' });
  s += rect(272, 116, 44, 36) + tx(294, 140, 'm', { fs: 10, anchor: 'middle' });
  s += arr(294, 152, 294, 188, 'f', 1.6) + tx(300, 176, 'mg', { c: 'f', fs: 9 });
  s += arr(294, 116, 294, 84, 'v', 1.6) + tx(300, 92, 'v', { c: 'v', fs: 9 });
  s += tx(174, 180, 'K + U_g；E = K + U_g 可守恒。', { it: false, fs: 8.5 });
  s += tx(174, 194, '势能属于物块–地球系统。', { it: false, fs: 8.5 });
  s += eq(18, 238, ['E=K+U,   ΔE=W_{ext}+W_{nc}']);
  s += tx(18, 252, 'Choose the system first; potential energy only exists for an interaction pair.', { it: false, fs: 7.6, c: 'm' });
  return s;
});

def('rigid-force-diagram-vs-fbd', '刚体力图与质心点受力图的区别 · Rigid-body force diagram versus point-mass FBD', '\\tau=Fd_{\\perp},\\qquad \\sum\\vec F=M\\vec a_{\\rm cm},\\qquad \\sum\\tau_{\\rm axis}=I\\alpha', () => {
  let s = tx(18, 18, '刚体力图：力画在实际作用点 · force diagram', { it: false, fs: 9 });
  s += rect(42, 108, 132, 14) + circ(108, 115, 3, { fill: 'currentColor' }) + tx(108, 100, 'CM', { fs: 8.5, anchor: 'middle' });
  s += ln(108, 76, 108, 156, { c: 'm', dash: '4 3', w: 1 }) + tx(112, 152, 'axis', { fs: 8, c: 'm' });
  s += arr(60, 108, 60, 76, 'f', 1.7) + tx(50, 72, 'F₁', { c: 'f', fs: 9 });
  s += arr(156, 122, 156, 154, 'f', 1.7) + tx(162, 146, 'F₂', { c: 'f', fs: 9 });
  s += ln(60, 92, 108, 92, { c: 'a', w: 1.2, dash: '3 2' }) + tx(84, 86, 'd₁', { fs: 8, c: 'a' });
  s += tx(18, 184, '力可产生力矩；作用点与力臂都要读出。', { it: false, fs: 8.4 });
  s += ln(206, 26, 206, 214, { c: 'm', w: 1, dash: '4 3' });
  s += tx(222, 18, '点质量 FBD：力平移到质心 · point FBD', { it: false, fs: 9 });
  s += circ(300, 116, 5, { fill: 'currentColor' });
  s += arr(300, 116, 300, 70, 'f', 1.7) + tx(306, 82, 'F₁', { c: 'f', fs: 9 });
  s += arr(300, 116, 300, 164, 'f', 1.7) + tx(306, 154, 'F₂', { c: 'f', fs: 9 });
  s += tx(222, 184, '所有外力起点都在质心；不画力臂。', { it: false, fs: 8.4 });
  s += tx(18, 214, '同一组力：刚体力图保留作用点以算力矩；FBD 只用于平动。', { it: false, fs: 8.6 });
  s += tx(18, 228, 'Rigid diagram keeps application points; the point FBD collapses them to the CM.', { it: false, fs: 7.6, c: 'm' });
  s += eq(18, 250, ['τ=Fd_{⊥},   Στ=Iα  (fixed axis)']);
  return s;
});
def('translational-vs-rotational-equilibrium', '平动与转动平衡互不蕴含 · Translational and rotational equilibrium are independent', '\\sum F=0\\ \\not\\Rightarrow\\ \\sum\\tau=0,\\qquad \\sum\\tau=0\\ \\not\\Rightarrow\\ \\sum F=0', () => {
  let s = tx(18, 18, '(a) 力偶：ΣF = 0，Στ ≠ 0', { it: false, fs: 9.2 });
  s += rect(44, 116, 132, 12) + circ(110, 122, 3, { fill: 'currentColor' });
  s += arr(44, 104, 44, 70, 'f', 1.8) + arr(176, 140, 176, 174, 'f', 1.8);
  s += tx(26, 62, 'F', { c: 'f', fs: 10 }) + tx(182, 188, 'F', { c: 'f', fs: 10 });
  s += arc(110, 122, 54, 20, 160, { c: 'a', w: 1.6 }) + tx(110, 196, 'α ≠ 0（转动）', { it: false, fs: 8.5, c: 'a', anchor: 'middle' });
  s += tx(18, 210, '合力为零但力偶使刚体转动。', { it: false, fs: 8.4 });
  s += ln(202, 26, 202, 214, { c: 'm', w: 1, dash: '4 3' });
  s += tx(218, 18, '(b) 偏离质心转动：Στ = 0，ΣF ≠ 0', { it: false, fs: 9.2 });
  s += circ(300, 116, 6, { fill: 'currentColor' }) + tx(300, 96, 'CM', { fs: 8, anchor: 'middle' });
  s += arc(300, 116, 34, 20, 160, { c: 'a', w: 1.4 }) + tx(300, 164, 'ω = const', { fs: 9, c: 'a', anchor: 'middle' });
  s += arr(300, 116, 300, 76, 'f', 1.6) + tx(306, 84, 'F_c = Mω²r_cm', { c: 'f', fs: 8 });
  s += tx(218, 210, '无外力矩，但质心在做圆周运动。', { it: false, fs: 8.4 });
  s += tx(18, 228, '转动平衡允许恒定非零角速度；平动平衡允许恒定非零速度。', { it: false, fs: 8.5 });
  s += eq(18, 250, ['Στ=0 ⇔ ω=const;   ΣF=0 ⇔ v_{cm}=const']);
  return s;
});
def('tangential-radial-acceleration', '同一刚体不同半径处的线速度与加速度 · Linear velocity and acceleration at different radii on one rigid body', 'v=r\\omega,\\qquad a_t=r\\alpha,\\qquad a_c=\\omega^2r=\\dfrac{v^2}{r}', () => {
  const cx = 120, cy = 132;
  let s = circ(cx, cy, 84, { c: 'm', w: 1.2, dash: '4 3' }) + circ(cx, cy, 3, { fill: 'currentColor' });
  const A = pt(cx, cy, 84, 34), B = pt(cx, cy, 48, 34);
  s += ln(cx, cy, A[0], A[1], { c: 'm', w: 1 }) + ln(cx, cy, B[0], B[1], { c: 'm', w: 1 });
  s += circ(A[0], A[1], 4.5, { fill: COL.v }) + circ(B[0], B[1], 4.5, { fill: COL.v });
  s += arr(A[0], A[1], A[0] + 30, A[1] - 20, 'v', 1.7) + tx(A[0] + 34, A[1] - 24, 'v_A = r_Aω', { c: 'v', fs: 8 });
  s += arr(B[0], B[1], B[0] + 18, B[1] - 12, 'v', 1.5) + tx(B[0] + 20, B[1] - 16, 'v_B = r_Bω', { c: 'v', fs: 8 });
  s += arr(A[0], A[1], cx + (A[0] - cx) * 0.6, cy + (A[1] - cy) * 0.6, 'a', 1.6) + tx(cx + 30, cy + 26, 'a_c', { c: 'a', fs: 9 });
  s += arr(A[0], A[1], A[0] + 20, A[1] - 14, 'a', 1.6) + tx(A[0] + 22, A[1] - 20, 'a_t', { c: 'a', fs: 9 });
  s += tx(220, 48, '同一刚体：ω、α 相同', { it: false, fs: 9 });
  s += tx(220, 66, 'v、a_t、a_c 随 r 增大', { it: false, fs: 9 });
  s += tx(220, 92, 'a_c 指向轴，a_t 沿切向', { it: false, fs: 9 });
  s += tx(220, 118, '总加速度：a = √(a_t²+a_c²)', { it: false, fs: 9 });
  s += tx(18, 216, '刚体上各点共享角量，但线量按半径缩放。', { it: false, fs: 8.8 });
  s += tx(18, 230, 'All points share ω and α; linear quantities scale with r.', { it: false, fs: 7.8, c: 'm' });
  s += eq(18, 250, ['a=√(a_{t}²+a_{c}²),   tanφ=', { n: 'a_t', d: 'a_c' }]);
  return s;
});
def('torque-angle-area', '力矩–转角图：曲线下面积等于功 · Torque–angle graph: area under the curve equals work', 'W=\\int_{\\theta_i}^{\\theta_f}\\tau\\,\\mathrm{d}\\theta,\\qquad W_{\\rm net}=\\sum_i W_i', () => {
  const X = (t) => 42 + t * 72, Y = (v) => 150 - v * 52;
  let s = arr(42, Y(0), 360, Y(0), 'g', 1.2) + arr(42, 204, 42, 36, 'g', 1.2);
  s += tx(364, Y(0) + 4, 'θ', { fs: 11 }) + tx(36, 32, 'τ', { fs: 11, anchor: 'end' });
  s += poly([[X(0), Y(0)], [X(1), Y(1.4)], [X(1), Y(0)]], { fill: COL.a, c: 'a', op: 0.16 });
  s += poly([[X(1), Y(0)], [X(2), Y(1.4)], [X(2), Y(0)]], { fill: COL.v, c: 'v', op: 0.14 });
  s += poly([[X(2), Y(0)], [X(3), Y(-0.8)], [X(3), Y(0)]], { fill: COL.f, c: 'f', op: 0.16 });
  s += poly([[X(0), Y(0)], [X(1), Y(1.4)], [X(2), Y(1.4)], [X(3), Y(-0.8)]], { c: 'a', w: 2.2 });
  s += tx(X(0.5), Y(0.55), 'W₁', { fs: 10, c: 'a' }) + tx(X(1.5), Y(0.55), 'W₂', { fs: 10, c: 'v' }) + tx(X(2.5), Y(-0.62), 'W₃ < 0', { fs: 9, c: 'f' });
  s += tx(42, 224, '正面积：力矩做正功；负面积：力矩做负功。', { it: false, fs: 8.6 });
  s += tx(42, 238, '净功 = 代数面积和；恒力矩时 W = τΔθ。', { it: false, fs: 8.6 });
  s += eq(42, 254, ['W=∫τ dθ = signed area']);
  return s;
});

def('rotational-ke-elements', '定轴刚体的转动动能：质元线动能求和 · Rotational kinetic energy: sum of element kinetic energies', 'K=\\sum_i\\dfrac{1}{2}m_iv_i^2=\\sum_i\\dfrac{1}{2}m_i(r_i\\omega)^2=\\dfrac{1}{2}I\\omega^2', () => {
  const cx = 118, cy = 128;
  let s = circ(cx, cy, 74, { fill: COL.v, op: 0.06, c: 'v', w: 1.5 }) + circ(cx, cy, 4, { fill: 'currentColor' }) + tx(cx, cy - 10, 'CM 静止', { it: false, fs: 8.5, anchor: 'middle' });
  for (const a of [20, 80, 140, 200, 260, 320]) {
    const [x, y] = pt(cx, cy, 56, a);
    s += circ(x, y, 4, { fill: COL.f }) + arr(x, y, x + 18 * Math.cos(rad(a + 90)), y - 18 * Math.sin(rad(a + 90)), 'v', 1.3);
  }
  s += arc(cx, cy, 30, 10, 170, { c: 'a', w: 1.4 }) + tx(cx, cy + 36, 'ω', { fs: 11, c: 'a', anchor: 'middle' });
  s += tx(212, 48, '每个质元 v_i = ωr_i', { fs: 9.5, c: 'v' });
  s += tx(212, 66, 'K_i = ½m_i v_i²', { fs: 9.5 });
  s += tx(212, 92, '求和 → K = ½Iω²', { fs: 9.5, c: 'a' });
  s += tx(212, 118, '质心静止也可有转动动能。', { it: false, fs: 8.8 });
  s += tx(212, 142, 'I = Σm_i r_i²', { fs: 9.5 });
  s += tx(18, 216, '转动动能来自各质元的线速度，而不是质心的平动。', { it: false, fs: 8.8 });
  s += tx(18, 230, 'A rigid body can have K_rot while its CM is at rest.', { it: false, fs: 7.8, c: 'm' });
  s += eq(18, 250, ['K_{rot}=½Iω²,   I=Σm_{i}r_{i}²']);
  return s;
});
def('torque-time-area', '力矩–时间图：面积等于角冲量 · Torque–time graph: area equals angular impulse', 'J_{\\rm ang}=\\int_{t_i}^{t_f}\\tau_{\\rm ext}\\,\\mathrm{d}t=\\Delta L', () => {
  const X = (t) => 42 + t * 78, Y = (v) => 148 - v * 56;
  let s = arr(42, Y(0), 370, Y(0), 'g', 1.2) + arr(42, 204, 42, 36, 'g', 1.2);
  s += tx(374, Y(0) + 4, 't', { fs: 11 }) + tx(36, 32, 'τ', { fs: 11, anchor: 'end' });
  s += poly([[X(0), Y(0)], [X(1), Y(1.2)], [X(2.2), Y(1.2)], [X(3.1), Y(-0.7)], [X(4), Y(0)]], { c: 'a', w: 2.2 });
  s += poly([[X(0), Y(0)], [X(1), Y(1.2)], [X(2.2), Y(1.2)], [X(3.1), Y(-0.7)], [X(4), Y(0)]], { fill: COL.a, c: 'a', op: 0.12 });
  s += tx(X(0.45), Y(0.55), '+ΔL', { fs: 10, c: 'a' }) + tx(X(2.55), Y(-0.45), '−ΔL', { fs: 10, c: 'f' });
  s += tx(42, 224, '净角冲量是正、负面积的代数和。', { it: false, fs: 8.6 });
  s += tx(42, 238, '恒力矩时 J = τΔt；梯形面积可直接读图。', { it: false, fs: 8.6 });
  s += eq(42, 254, ['J_{ang}=∫τ dt=ΔL']);
  return s;
});
def('angular-momentum-slope', '角动量–时间图：斜率等于净力矩 · Angular-momentum–time graph: slope equals net torque', '\\tau_{\\rm net}=\\dfrac{\\mathrm{d}L}{\\mathrm{d}t}=\\text{slope of }L(t)', () => {
  const g = graph(48, 30, 230, 158, { fns: [{ f: (t) => (t < 1 ? 0.8 * t : t < 2.2 ? 0.8 : t < 3.2 ? 0.8 - 0.5 * (t - 2.2) : 0.3), c: 'v', w: 2.4 }], t1: 3.8, ymin: -0.2, ymax: 1.5, xl: 't', yl: 'L' });
  let s = g.s;
  s += ln(g.X(0), g.Y(0.8), g.X(1.9), g.Y(0.8), { c: 'a', w: 1.4, dash: '4 3' }) + tx(g.X(1.0), g.Y(0.95), 'τ > 0', { fs: 9, c: 'a' });
  s += ln(g.X(2.2), g.Y(0.8), g.X(3.2), g.Y(0.3), { c: 'f', w: 1.4, dash: '4 3' }) + tx(g.X(2.6), g.Y(0.48), 'τ < 0', { fs: 9, c: 'f' });
  s += tx(290, 54, '斜率 = τ_net', { fs: 9.5, c: 'a' });
  s += tx(290, 76, '正斜率：L 增大', { it: false, fs: 8.8 });
  s += tx(290, 92, '零斜率：L 恒定', { it: false, fs: 8.8 });
  s += tx(290, 108, '负斜率：L 减小', { it: false, fs: 8.8 });
  s += tx(18, 224, 'L–t 图的切线斜率给出该时刻的净力矩。', { it: false, fs: 8.7 });
  s += tx(18, 238, 'The slope of L(t) is the net torque, not the angular momentum itself.', { it: false, fs: 7.8, c: 'm' });
  s += eq(18, 254, ['τ_{net}=', { n: 'dL', d: 'dt' }]);
  return s;
});
def('system-angular-momentum', '系统角动量：各组成部分对同一轴的角动量求和 · System angular momentum: sum about the same axis', 'L_{\\rm sys}=\\sum_i L_i,\\qquad L_{\\rm rigid}=I\\omega', () => {
  const cx = 120, cy = 128;
  let s = circ(cx, cy, 64, { c: 'm', w: 1.2, dash: '4 3' }) + ln(cx, cy - 80, cx, cy + 80, { c: 'm', w: 1, dash: '3 2' });
  s += circ(cx - 34, cy, 16, { fill: COL.v, op: 0.18, c: 'v' }) + tx(cx - 34, cy + 4, 'm₁', { fs: 9, anchor: 'middle' });
  s += circ(cx + 34, cy, 16, { fill: COL.f, op: 0.18, c: 'f' }) + tx(cx + 34, cy + 4, 'm₂', { fs: 9, anchor: 'middle' });
  s += arr(cx - 34, cy - 16, cx - 34, cy - 48, 'v', 1.6) + tx(cx - 42, cy - 36, 'v₁', { c: 'v', fs: 9 });
  s += arr(cx + 34, cy - 16, cx + 34, cy - 48, 'v', 1.6) + tx(cx + 42, cy - 36, 'v₂', { c: 'v', fs: 9 });
  s += arc(cx, cy, 44, 20, 160, { c: 'a', w: 1.5 }) + tx(cx, cy + 76, '同一转轴 · same axis', { fs: 8.5, c: 'a', anchor: 'middle' });
  s += tx(218, 48, 'L₁ = m₁r₁v₁', { fs: 9.5 });
  s += tx(218, 66, 'L₂ = m₂r₂v₂', { fs: 9.5 });
  s += tx(218, 92, 'L_sys = L₁ + L₂（同向取正）', { fs: 9.5, c: 'a' });
  s += tx(218, 116, '刚体：L = Iω', { fs: 9.5 });
  s += tx(18, 212, '系统角动量必须关于同一轴或同一参考点求和。', { it: false, fs: 8.8 });
  s += tx(18, 226, 'Add angular momenta only after choosing one common axis.', { it: false, fs: 7.8, c: 'm' });
  s += eq(18, 248, ['L_{sys}=ΣL_{i},   L_{i}=r_{i}×p_{i}']);
  return s;
});
def('system-boundary-torque', '系统边界与外力矩：角动量是否改变 · System boundary and external torque: does angular momentum change?', '\\tau_{\\rm ext}=\\dfrac{\\mathrm{d}L_{\\rm sys}}{\\mathrm{d}t};\\qquad \\tau_{\\rm int}\\ \\text{cancels in pairs}', () => {
  let s = rect(36, 44, 188, 136, { dash: '5 4', c: 'm' }) + tx(42, 36, '系统 A：转盘 + 电机 · disk + motor', { it: false, fs: 8.5 });
  s += circ(110, 112, 36, { fill: COL.v, op: 0.1, c: 'v', w: 1.4 }) + circ(110, 112, 3, { fill: 'currentColor' });
  s += rect(148, 96, 34, 32) + tx(165, 116, 'motor', { fs: 7.5, anchor: 'middle' });
  s += arr(148, 112, 122, 112, 'f', 1.4) + arr(122, 112, 148, 112, 'f', 1.4, '4 2');
  s += tx(100, 168, '内力矩成对抵消', { it: false, fs: 8, c: 'f' });
  s += tx(250, 56, '系统 A：Στ_ext = 0', { fs: 9, c: 'a' });
  s += tx(250, 72, '→ L_A 守恒', { fs: 9, c: 'a' });
  s += tx(250, 96, '系统 B：转盘 + 电机 + 地球', { it: false, fs: 8.5 });
  s += tx(250, 112, '电机支架给地球的力矩', { it: false, fs: 8.2 });
  s += tx(250, 126, '成为内力矩', { it: false, fs: 8.2 });
  s += tx(250, 148, '→ L_B 也守恒', { fs: 9, c: 'a' });
  s += tx(18, 200, '选不同系统：原本的外力矩可变成内力矩。', { it: false, fs: 8.8 });
  s += tx(18, 214, '角动量在所有相互作用中守恒，但某个子系统的 L 可以改变。', { it: false, fs: 8.6 });
  s += tx(18, 228, 'Angular momentum is conserved overall; a subsystem can exchange it.', { it: false, fs: 7.6, c: 'm' });
  s += eq(18, 250, ['ΔL_{sys}=∫τ_{ext} dt']);
  return s;
});
def('orbit-energy-compare', '圆轨道与椭圆轨道的 K/U/L 对照 · Circular versus elliptical orbit: K, U and L', 'E=K+U=-\\dfrac{GMm}{2a},\\qquad U=-\\dfrac{GMm}{r},\\qquad L=mvr\\sin\\phi', () => {
  let s = tx(18, 18, '圆轨道 · circular', { it: false, fs: 9.5 });
  s += circ(112, 96, 46, { c: 'm', w: 1.2 }) + circ(112, 96, 13, { fill: COL.f, op: 0.3, c: 'f' });
  s += circ(158, 96, 3.5, { fill: COL.v }) + arr(158, 96, 158, 72, 'v', 1.4);
  s += tx(18, 158, 'r 恒定 → v 恒定', { it: false, fs: 8.5 });
  s += tx(18, 172, 'K、U、E、L 各自恒定', { fs: 8.5, c: 'a' });
  s += tx(18, 194, 'K = −E = GMm/(2r)', { fs: 8.5 });
  s += tx(18, 208, 'U = 2E（更负）', { fs: 8.5 });
  s += ln(206, 26, 206, 220, { c: 'm', w: 1, dash: '4 3' });
  s += tx(222, 18, '椭圆轨道 · elliptical', { it: false, fs: 9.5 });
  s += pathD('M300,96 m-58,0 a58,30 0 1,0 116,0 a58,30 0 1,0 -116,0', { c: 'm', w: 1.2 });
  s += circ(256, 96, 3.5, { fill: COL.v }) + tx(244, 118, '近点 v 大', { fs: 8, c: 'v' });
  s += circ(354, 96, 3.5, { fill: COL.v }) + tx(330, 78, '远点 v 小', { fs: 8, c: 'v' });
  s += tx(222, 158, 'E、L 恒定；K 与 U 交换', { fs: 8.5, c: 'a' });
  s += tx(222, 172, '近点：U 小、K 大', { it: false, fs: 8.5 });
  s += tx(222, 186, '远点：U 大、K 小', { it: false, fs: 8.5 });
  s += tx(222, 208, 'L = m r_peri v_peri', { fs: 8.5 });
  s += tx(18, 234, '圆轨道是椭圆轨道的特例；两种轨道都满足 E、L 守恒。', { it: false, fs: 8.5 });
  s += eq(18, 252, ['K_{circ}=', { n: 'GMm', d: '2r' }, ',   U_{circ}=−', { n: 'GMm', d: 'r' }]);
  return s;
});

def('shm-ode', '从牛顿第二定律到 SHM 二阶方程与解 · From Newton’s second law to the SHM equation and its solution', 'm\\ddot x=-kx\\;\\Rightarrow\\;\\ddot x+\\dfrac{k}{m}x=0,\\qquad x=A\\cos(\\omega t+\\phi),\\quad \\omega^2=\\dfrac{k}{m}', () => {
  let s = hatch(24, 176, 152) + ln(66, 176, 66, 130, { w: 2 }) + spring(66, 130, 66, 84, 8, 7);
  s += rect(48, 56, 36, 28) + tx(66, 75, 'm', { fs: 11, anchor: 'middle' });
  s += arr(102, 70, 140, 70, 'f', 1.6) + tx(118, 62, 'F = −kx', { c: 'f', fs: 8.5 });
  s += arr(66, 56, 66, 30, 'v', 1.4) + tx(72, 36, 'x', { c: 'v', fs: 9 });
  s += tx(18, 202, '选择 x 从平衡位置量起；', { it: false, fs: 8.5 });
  s += tx(18, 216, '回复力指向平衡位置。', { it: false, fs: 8.5 });
  s += ln(172, 24, 172, 218, { c: 'm', w: 1, dash: '4 3' });
  s += tx(188, 34, 'N2L：m x¨ = −kx', { fs: 9.5 });
  s += tx(188, 58, '⇒ x¨ + (k/m)x = 0', { fs: 9.5, c: 'a' });
  s += tx(188, 84, '试探解 x = A cos(ωt+φ)', { fs: 9.5 });
  s += tx(188, 108, 'x¨ = −ω²x', { fs: 9.5 });
  s += tx(188, 132, '代入 ⇒ (k/m − ω²)x = 0', { fs: 9.5 });
  s += tx(188, 156, '⇒ ω² = k/m（对所有 t 成立）', { fs: 9.5, c: 'a' });
  s += tx(188, 180, '两个初始条件定 A 与 φ。', { it: false, fs: 8.5 });
  s += tx(188, 202, '二阶方程需要两个独立常数。', { it: false, fs: 8.5 });
  s += eq(18, 240, ['x(t)=A cos(ωt+φ),   ω=', { sqrt: { n: 'k', d: 'm' } }, ',   T=2π', { sqrt: { n: 'm', d: 'k' } }]);
  return s;
});

def('charge-properties-conservation', '电荷是物质的基本属性：守恒与量子化 · Charge is a fundamental property: conservation and quantization', 'Q_{\\rm net}=0\\ \\text{(neutral)},\\qquad Q_{\\rm total}=\\text{const},\\qquad q=ne,\\quad e=1.60\\times10^{-19}\\,\\mathrm{C}', () => {
  let s = tx(18, 18, '(a) 中性 · neutral', { it: false, fs: 8.8 });
  s += circ(78, 118, 40, { fill: COL.g, op: 0.04, c: 'g', w: 1.4 });
  for (const [x, y] of [[62, 100], [94, 100], [62, 134], [94, 134], [78, 117]]) s += tx(x, y + 4, '+', { anchor: 'middle', fs: 12, c: 'f', it: false });
  for (const [x, y] of [[78, 100], [62, 117], [94, 117], [78, 134], [108, 110], [48, 110]]) s += tx(x, y + 4, '−', { anchor: 'middle', fs: 12, c: 'v', it: false });
  s += tx(78, 174, 'Q_net = 0，内部电荷巨大', { it: false, fs: 8.0, anchor: 'middle' });
  s += tx(144, 18, '(b) 摩擦起电 · charging', { it: false, fs: 8.8 });
  s += rect(160, 96, 44, 34) + tx(182, 118, 'A', { fs: 10, anchor: 'middle' }) + tx(182, 140, '+q', { fs: 9, c: 'f', anchor: 'middle' });
  s += rect(246, 96, 44, 34) + tx(268, 118, 'B', { fs: 10, anchor: 'middle' }) + tx(268, 140, '−q', { fs: 9, c: 'v', anchor: 'middle' });
  s += arr(222, 82, 246, 82, 'v', 1.8) + tx(234, 74, 'e⁻', { fs: 9, c: 'v', anchor: 'middle' });
  s += tx(225, 168, 'Q_total = +q − q = 0', { it: false, fs: 8.2, anchor: 'middle' });
  s += tx(290, 18, '(c) 量子化 · quantization', { it: false, fs: 8.8 });
  s += ln(304, 168, 304, 44, { w: 1.4 });
  for (let i = -2; i <= 2; i++) {
    const y = 104 - i * 22;
    s += ln(296, y, 312, y, { w: 2 }) + tx(318, y + 4, i === 0 ? '0' : `${i > 0 ? '+' : '−'}${Math.abs(i)}e`, { fs: 8.5, c: i > 0 ? 'f' : i < 0 ? 'v' : 'g' });
  }
  s += tx(290, 188, 'q = ne；无中间能级', { it: false, fs: 8.2 });
  s += tx(18, 210, '起电只是电子转移；总电荷守恒，且电荷只能取 e 的整数倍。', { it: false, fs: 8.5 });
  s += tx(18, 224, 'Charging moves electrons; net charge is conserved and quantized.', { it: false, fs: 7.8, c: 'm' });
  s += eq(18, 248, ['q=ne,   e=1.60×10^{−19} C,   Q_{total}=const']);
  return s;
});

/* ======================= Track B B06 figures ======================= */
def('em-u8-induced-charge-separation', '感应分离与接地顺序 · Induced charge separation and grounding order', 'Q_{\\mathrm{net}}=0\\ \\text{(isolated)},\\qquad Q_{\\mathrm{net}}<0\\ \\text{(grounded)}', () => {
  let s = tx(18, 18, '① 靠近：近端 −、远端 +', { it: false, fs: 9 });
  s += rect(24, 66, 11, 66, { fill: COL.f, op: 0.25, c: 'f' }) + tx(30, 62, '+', { anchor: 'middle', fs: 11, c: 'f' });
  s += tx(30, 86, '+', { anchor: 'middle', fs: 10, c: 'f' }) + tx(30, 110, '+', { anchor: 'middle', fs: 10, c: 'f' });
  s += circ(96, 100, 27, { w: 1.3 }) + tx(78, 96, '−', { anchor: 'middle', fs: 11, c: 'v' }) + tx(78, 112, '−', { anchor: 'middle', fs: 11, c: 'v' });
  s += tx(114, 96, '+', { anchor: 'middle', fs: 11, c: 'f' }) + tx(114, 112, '+', { anchor: 'middle', fs: 11, c: 'f' });
  s += tx(96, 146, 'Q_net = 0', { anchor: 'middle', fs: 9 });
  s += tx(150, 18, '② 接地：电子流入', { it: false, fs: 9 });
  s += rect(156, 66, 11, 66, { fill: COL.f, op: 0.25, c: 'f' }) + tx(162, 62, '+', { anchor: 'middle', fs: 11, c: 'f' });
  s += circ(228, 100, 27, { w: 1.3 }) + tx(210, 96, '−', { anchor: 'middle', fs: 11, c: 'v' }) + tx(210, 112, '−', { anchor: 'middle', fs: 11, c: 'v' });
  s += ln(228, 127, 228, 156, { w: 1.4 }) + ln(206, 156, 250, 156, { w: 2 }) + ln(210, 160, 204, 168, { w: 0.9, c: 'm' }) + ln(220, 160, 214, 168, { w: 0.9, c: 'm' }) + ln(236, 160, 230, 168, { w: 0.9, c: 'm' }) + ln(246, 160, 240, 168, { w: 0.9, c: 'm' });
  s += arr(244, 150, 244, 132, 'v', 1.6) + tx(250, 144, 'e⁻', { c: 'v', fs: 9 });
  s += tx(228, 146, 'Q_net < 0', { anchor: 'middle', fs: 9 });
  s += tx(282, 18, '③ 先断地，再移棒', { it: false, fs: 9 });
  s += rect(288, 66, 11, 66, { c: 'm', dash: '3 3' }) + tx(294, 62, '+', { anchor: 'middle', fs: 11, c: 'm' });
  s += circ(350, 100, 27, { w: 1.3 }) + tx(336, 96, '−', { anchor: 'middle', fs: 11, c: 'v' }) + tx(336, 112, '−', { anchor: 'middle', fs: 11, c: 'v' }) + tx(362, 96, '−', { anchor: 'middle', fs: 11, c: 'v' }) + tx(362, 112, '−', { anchor: 'middle', fs: 11, c: 'v' });
  s += tx(350, 146, '净负电荷保留', { anchor: 'middle', fs: 8.5 });
  s += ln(18, 172, 382, 172, { c: 'm', w: 1, dash: '4 3' });
  s += tx(18, 190, '反序对照：先移棒，再断开接地 → 导体恢复中性。', { it: false, fs: 9 });
  s += circ(318, 213, 20, { w: 1.2 }) + tx(308, 209, '+', { anchor: 'middle', fs: 10, c: 'f' }) + tx(308, 222, '−', { anchor: 'middle', fs: 10, c: 'v' }) + tx(328, 209, '+', { anchor: 'middle', fs: 10, c: 'f' }) + tx(328, 222, '−', { anchor: 'middle', fs: 10, c: 'v' });
  s += tx(18, 214, '同样操作，仅顺序不同，最终电荷符号不同；', { it: false, fs: 8.5 });
  s += tx(18, 228, '接地线提供电子转移路径，地球是巨大电荷库。', { it: false, fs: 8.5 });
  s += tx(18, 246, 'The order of grounding and removing the rod fixes the final charge.', { it: false, fs: 7.5, c: 'm' });
  return s;
});
def('em-u8-conductor-insulator-charging', '导体与绝缘体的起电方式 · Charging a conductor versus an insulator', 'q=ne,\\qquad Q_{\\mathrm{total}}=\\text{const}', () => {
  let s = tx(18, 18, '导体 · conductor', { it: false, fs: 10, c: 'a' });
  s += rect(24, 38, 156, 92, { w: 1.5 });
  s += tx(102, 34, '自由电子可宏观移动', { anchor: 'middle', it: false, fs: 8 });
  for (const [x, y] of [[32, 52], [32, 82], [32, 112], [172, 52], [172, 82], [172, 112], [72, 44], [102, 44], [132, 44], [72, 124], [102, 124], [132, 124]]) s += tx(x, y, '+', { anchor: 'middle', fs: 10, c: 'f' });
  for (const [x, y] of [[52, 60], [82, 60], [122, 60], [152, 60], [52, 104], [82, 104], [122, 104], [152, 104]]) s += tx(x, y, '−', { anchor: 'middle', fs: 10, c: 'v' });
  s += arr(70, 145, 134, 145, 'v', 1.4) + tx(102, 158, '接触 / 摩擦后电荷分布到表面', { anchor: 'middle', it: false, fs: 8 });
  s += tx(18, 178, '感应：近端 −、远端 +，内部 E 最终为零。', { it: false, fs: 8.5 });
  s += tx(214, 18, '绝缘体 · insulator', { it: false, fs: 10, c: 'v' });
  s += rect(220, 38, 156, 92, { w: 1.5 });
  s += tx(298, 34, '电荷被束缚在局部', { anchor: 'middle', it: false, fs: 8 });
  s += circ(244, 70, 12, { fill: COL.v, op: 0.2, c: 'v' }) + tx(244, 74, '−', { anchor: 'middle', fs: 10, c: 'v' });
  s += circ(266, 96, 12, { fill: COL.v, op: 0.2, c: 'v' }) + tx(266, 100, '−', { anchor: 'middle', fs: 10, c: 'v' });
  s += circ(250, 118, 12, { fill: COL.v, op: 0.2, c: 'v' }) + tx(250, 122, '−', { anchor: 'middle', fs: 10, c: 'v' });
  s += tx(330, 70, '+', { anchor: 'middle', fs: 10, c: 'f' }) + tx(350, 90, '+', { anchor: 'middle', fs: 10, c: 'f' }) + tx(330, 116, '+', { anchor: 'middle', fs: 10, c: 'f' });
  s += arr(286, 70, 318, 70, 'f', 1.2) + arr(286, 118, 318, 118, 'f', 1.2);
  s += tx(298, 158, '仅局部极化，电荷不流到远处', { anchor: 'middle', it: false, fs: 8 });
  s += tx(214, 178, '摩擦后电荷停留在摩擦区域附近。', { it: false, fs: 8.5 });
  s += ln(18, 194, 382, 194, { c: 'm', w: 1, dash: '4 3' });
  s += tx(18, 212, '相同起电操作，导体把电荷重新分布到表面；', { it: false, fs: 8.5 });
  s += tx(18, 226, '绝缘体只能发生局部极化或保留局部电荷。', { it: false, fs: 8.5 });
  s += tx(18, 244, 'Charging moves electrons; conductors redistribute, insulators localize.', { it: false, fs: 7.4, c: 'm' });
  return s;
});
def('em-u8-rod-integration', '有限带电棒：垂直平分线与轴线 · Finite charged rod: perpendicular bisector and axis', 'E_\\perp=\\dfrac{2k\\lambda L}{d\\sqrt{4d^{2}+L^{2}}},\\qquad E_{\\mathrm{axis}}=\\dfrac{k\\lambda L}{x(x+L)}' + CAP_DESCENT, () => {
  let s = tx(18, 18, '(a) 垂直平分线 · bisector', { it: false, fs: 9 });
  s += ln(58, 34, 58, 208, { w: 3 }) + tx(38, 120, 'λ', { fs: 11, anchor: 'middle' });
  s += rect(54, 62, 8, 8, { fill: COL.f, op: 0.5, c: 'f' }) + rect(54, 172, 8, 8, { fill: COL.f, op: 0.5, c: 'f' });
  s += circ(158, 120, 3.5, { fill: COL.v }) + tx(164, 124, 'P', { fs: 10 });
  s += ln(58, 120, 158, 120, { c: 'm', dash: '4 3', w: 1 }) + tx(108, 114, 'd', { fs: 10, anchor: 'middle' });
  s += ln(58, 66, 158, 120, { c: 'm', dash: '4 3', w: 1 }) + tx(112, 82, 'r', { fs: 10, c: 'm' });
  s += arr(158, 120, 184, 104, 'E', 1.8) + arr(158, 120, 184, 136, 'E', 1.8) + arr(158, 120, 190, 120, 'E', 2.2);
  s += tx(172, 148, '竖直分量抵消', { it: false, fs: 8, c: 'E' });
  s += tx(18, 230, 'dq = λ dx，r = √(x² + d²)', { it: false, fs: 8.5 });
  s += tx(210, 18, '(b) 轴线上 · on axis', { it: false, fs: 9 });
  s += ln(232, 86, 372, 86, { w: 3 }) + tx(302, 78, 'λ', { fs: 11, anchor: 'middle' });
  s += rect(248, 82, 8, 8, { fill: COL.f, op: 0.5, c: 'f' }) + rect(290, 82, 8, 8, { fill: COL.f, op: 0.5, c: 'f' }) + rect(332, 82, 8, 8, { fill: COL.f, op: 0.5, c: 'f' });
  s += circ(208, 86, 3.5, { fill: COL.v }) + tx(194, 90, 'P', { fs: 10 });
  s += arr(248, 70, 220, 82, 'E', 1.3) + arr(290, 70, 224, 84, 'E', 1.3) + arr(332, 70, 228, 86, 'E', 1.3);
  s += tx(208, 112, 'x', { fs: 10 }) + tx(302, 102, 'L', { fs: 10, anchor: 'middle' });
  s += tx(210, 132, '所有 dE 同向，直接积分', { it: false, fs: 8.5 });
  s += tx(210, 148, 'x ≫ L：E → kQ ÷ x²', { it: false, fs: 8.5 });
  s += eq(210, 178, ['E_{axis} = ', { n: 'kλL', d: 'x(x+L)' }]);
  s += tx(210, 210, 'L → ∞：E → 2kλ ÷ d', { it: false, fs: 8.5 });
  s += tx(18, 248, '对称性先消去一个分量，再对剩余分量积分。', { it: false, fs: 8 });
  return s;
});
def('em-u8-ring-axis', '均匀带电圆环轴线上的电场 · Electric field on the axis of a uniformly charged ring', 'E(z)=\\dfrac{kQz}{\\sqrt{(z^{2}+R^{2})^{3}}},\\qquad z_{\\max}=\\dfrac{R}{\\sqrt{2}}', () => {
  let s = `<ellipse cx="110" cy="116" rx="62" ry="23" fill="none" stroke="currentColor" stroke-width="1.6"/>`;
  s += ln(110, 116, 286, 116, { c: 'm', dash: '4 3', w: 1 }) + tx(198, 110, 'z', { fs: 10, anchor: 'middle' });
  s += circ(292, 116, 3.5, { fill: COL.v }) + tx(298, 120, 'P', { fs: 10 });
  s += circ(110, 93, 4, { fill: COL.f }) + tx(102, 88, 'dq', { fs: 9, c: 'f' });
  s += circ(110, 139, 4, { fill: COL.f }) + tx(122, 150, 'dq′', { fs: 9, c: 'f' });
  s += ln(110, 93, 292, 116, { c: 'm', dash: '4 3', w: 1 }) + tx(210, 90, 'r', { fs: 10, c: 'm' });
  s += arr(292, 116, 326, 138, 'E', 1.8) + arr(292, 116, 326, 94, 'E', 1.8) + arr(292, 116, 340, 116, 'E', 2.2);
  s += tx(332, 146, '横向抵消', { it: false, fs: 8, c: 'E' });
  s += tx(28, 168, 'R', { fs: 10 }) + ln(110, 116, 156, 100, { c: 'm', w: 1 });
  s += tx(18, 204, '每个 dq 的轴向分量同向叠加；', { it: false, fs: 8.5 });
  s += tx(18, 218, '横向分量成对抵消。', { it: false, fs: 8.5 });
  const g = graph(236, 34, 132, 92, { fns: [{ f: (t) => 2.598 * t / Math.pow(1 + t * t, 1.5), c: 'E', w: 2.2 }], t1: 3, ymin: 0, ymax: 1.08, xl: 'z/R', yl: 'E' });
  s += g.s;
  s += ln(g.X(Math.SQRT1_2), g.Y(0), g.X(Math.SQRT1_2), g.Y(1), { c: 'm', dash: '3 3', w: 1 });
  s += tx(g.X(Math.SQRT1_2) + 3, 42, 'z=R/√2', { fs: 7.5, c: 'E' });
  s += tx(236, 172, 'E(z) = kQz ÷ (z² + R²)^{3/2}', { it: false, fs: 8 });
  s += tx(236, 188, 'z → 0：E → 0；z ≫ R：E → kQ ÷ z²', { it: false, fs: 8 });
  s += tx(236, 204, '轴线上 E 在 z = R/√2 取最大值。', { it: false, fs: 8 });
  s += tx(18, 244, 'On-axis field: transverse components cancel; maximum at z = R/√2.', { it: false, fs: 7.4, c: 'm' });
  return s;
});
def('em-u8-disk-plane', '带电圆盘轴线与无限平面极限 · Charged disk on axis and the infinite-plane limit', 'E_{\\mathrm{disk}}=\\dfrac{\\sigma}{2\\varepsilon_0}\\left(1-\\dfrac{z}{\\sqrt{z^{2}+R^{2}}}\\right)\\rightarrow\\dfrac{\\sigma}{2\\varepsilon_{0}}' + CAP_DESCENT, () => {
  let s = `<ellipse cx="108" cy="112" rx="72" ry="23" fill="none" stroke="currentColor" stroke-width="1.6"/>`;
  s += `<ellipse cx="108" cy="112" rx="42" ry="13" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3"/>`;
  s += ln(108, 112, 276, 112, { c: 'm', dash: '4 3', w: 1 }) + tx(196, 106, 'z', { fs: 10, anchor: 'middle' });
  s += circ(282, 112, 3.5, { fill: COL.v }) + tx(288, 116, 'P', { fs: 10 });
  s += tx(112, 94, 'R', { fs: 10 }) + tx(70, 132, "r′", { fs: 9 }) + tx(138, 132, "dr′", { fs: 9 });
  s += arr(108, 112, 108, 84, 'E', 1.6) + tx(116, 90, 'dE', { fs: 9, c: 'E' });
  s += tx(18, 158, '环元：dq = σ 2πr′ dr′', { it: false, fs: 8.5 });
  s += tx(18, 174, '把圆盘看成半径 r′ 的细环叠加。', { it: false, fs: 8.5 });
  const g = graph(236, 30, 132, 100, { fns: [{ f: (t) => 1 - t / Math.sqrt(t * t + 1), c: 'E', w: 2.2 }], t1: 4, ymin: 0, ymax: 1.08, xl: 'z/R', yl: 'E' });
  s += g.s;
  s += ln(g.X(0), g.Y(1), g.X(4), g.Y(1), { c: 'm', dash: '4 3', w: 1 });
  s += tx(238, 42, '无限平面 · infinite plane', { it: false, fs: 7.5, c: 'm' });
  s += tx(236, 150, '有限圆盘 E(z) 随 z 下降；', { it: false, fs: 8 });
  s += tx(236, 164, 'R → ∞ 时趋近常数 σ ÷ (2ε₀)。', { it: false, fs: 8 });
  s += tx(236, 184, '无限大平面场与 z 无关。', { it: false, fs: 8 });
  s += tx(18, 214, 'z = 0：E = σ ÷ (2ε₀)；z ≫ R：E → kQ ÷ z²。', { it: false, fs: 8.3 });
  s += tx(18, 230, '圆盘先积分环元；无限平面是 R → ∞ 的极限。', { it: false, fs: 8.3 });
  s += tx(18, 248, 'The infinite-plane field is independent of distance z.', { it: false, fs: 7.4, c: 'm' });
  return s;
});
def('em-u8-arc-line', '半圆弧与无限长直线的电场 · Field of a semicircular arc and an infinite line', 'E_{\\mathrm{arc}}=\\dfrac{2k\\lambda}{R},\\qquad E_{\\mathrm{line}}=\\dfrac{\\lambda}{2\\pi\\varepsilon_0r}', () => {
  let s = tx(18, 18, '(a) 半圆弧 · semicircular arc', { it: false, fs: 9 });
  s += arc(112, 118, 64, 0, 180, { c: 'f', w: 3 });
  s += circ(112, 118, 3.5, { fill: COL.v }) + tx(118, 122, 'O', { fs: 10 });
  s += circ(48, 118, 4, { fill: COL.f }) + circ(176, 118, 4, { fill: COL.f }) + circ(112, 54, 4, { fill: COL.f });
  s += arr(112, 54, 112, 94, 'E', 1.6) + arr(48, 118, 82, 118, 'E', 1.4) + arr(176, 118, 142, 118, 'E', 1.4);
  s += arr(112, 118, 112, 158, 'E', 2.2);
  s += tx(120, 164, 'E = 2kλ ÷ R', { fs: 9, c: 'E' });
  s += tx(18, 192, '对称 dE 对消去水平分量，', { it: false, fs: 8.5 });
  s += tx(18, 206, '只剩沿对称轴方向的场。', { it: false, fs: 8.5 });
  s += tx(18, 224, '半圆圆心处 B 与 E 都由对称性化简。', { it: false, fs: 8.5 });
  s += tx(212, 18, '(b) 无限长直线 / 圆柱 · line / cylinder', { it: false, fs: 9 });
  s += ln(300, 34, 300, 214, { w: 2.4 }) + tx(310, 44, 'λ', { fs: 11, c: 'f' });
  s += `<ellipse cx="300" cy="120" rx="58" ry="18" fill="none" stroke="currentColor" stroke-width="1.3" stroke-dasharray="5 3"/>`;
  s += `<ellipse cx="300" cy="70" rx="58" ry="18" fill="none" stroke="currentColor" stroke-width="1.2"/>`;
  s += ln(242, 70, 358, 70, { w: 1.2 }) + ln(242, 120, 358, 120, { w: 1.2, c: 'm', dash: '4 3' });
  s += arr(300, 120, 358, 120, 'E', 1.8) + arr(300, 120, 242, 120, 'E', 1.8);
  s += tx(326, 132, 'r', { fs: 10 });
  s += tx(228, 188, 'E = λ ÷ (2πε₀r)', { fs: 9, c: 'E' });
  s += tx(228, 204, '实心圆柱内部：E = ρr ÷ (2ε₀)', { it: false, fs: 8.2 });
  s += tx(228, 224, '高斯面：同轴圆柱面，通量只穿过侧面。', { it: false, fs: 8 });
  s += tx(18, 248, 'Arc: symmetry cancels components; line: cylindrical Gaussian surface.', { it: false, fs: 7.4, c: 'm' });
  return s;
});
def('neutral-matter', '电中性宏观物质与微观电荷 · Neutral macroscopic matter and microscopic charge', 'Q_{\\mathrm{net}}\\approx0,\\qquad F_g=G\\dfrac{m_1m_2}{r^{2}}', () => {
  let s = circ(108, 116, 74, { fill: COL.g, op: 0.04, c: 'g', w: 1.4 });
  for (const [x, y] of [[74, 82], [108, 82], [142, 82], [74, 116], [108, 116], [142, 116], [74, 150], [108, 150], [142, 150]]) s += tx(x, y + 4, '+', { anchor: 'middle', fs: 11, c: 'f' });
  for (const [x, y] of [[91, 99], [125, 99], [91, 133], [125, 133], [58, 99], [158, 99], [58, 133], [158, 133]]) s += tx(x, y + 4, '−', { anchor: 'middle', fs: 11, c: 'v' });
  s += tx(108, 210, 'Q_net ≈ 0，内部电荷巨大', { anchor: 'middle', it: false, fs: 8.5 });
  s += arr(108, 20, 108, 40, 'f', 1.6) + arr(108, 212, 108, 232, 'f', 1.6);
  s += tx(118, 32, 'g', { fs: 10, c: 'f' }) + tx(118, 228, 'g', { fs: 10, c: 'f' });
  s += tx(214, 18, '微观接触：电子云排斥', { it: false, fs: 8.5 });
  s += rect(220, 54, 156, 52, { w: 1.3 }) + rect(220, 128, 156, 52, { w: 1.3 });
  for (let x = 238; x <= 358; x += 24) s += circ(x, 80, 7, { fill: COL.v, op: 0.18, c: 'v' });
  for (let x = 238; x <= 358; x += 24) s += circ(x, 154, 7, { fill: COL.v, op: 0.18, c: 'v' });
  s += arr(298, 112, 298, 126, 'f', 1.8) + arr(298, 126, 298, 112, 'f', 1.8);
  s += tx(310, 122, 'N', { fs: 10, c: 'f' }) + tx(214, 194, '支持力 / 摩擦力 = 微观电磁作用的宏观平均', { it: false, fs: 8 });
  s += tx(214, 210, '引力不能被屏蔽，但整体近中性使电力在宏观尺度抵消。', { it: false, fs: 7.8 });
  s += tx(214, 226, 'Large-scale gravity wins because bodies are nearly neutral,', { it: false, fs: 7.2, c: 'm' });
  s += tx(214, 238, 'not because gravity is a stronger coupling.', { it: false, fs: 7.2, c: 'm' });
  return s;
});
def('em-u8-force-direction-pairs', '电力与引力的方向对照 · Direction of electric and gravitational forces', 'F_e=k\\dfrac{|q_1q_2|}{r^{2}},\\qquad F_g=G\\dfrac{m_1m_2}{r^{2}}', () => {
  let s = tx(18, 18, '(a) 同号电荷 · same sign', { it: false, fs: 9.5 });
  s += circ(86, 102, 18, { fill: COL.f, op: 0.25, c: 'f' }) + tx(86, 107, '+', { anchor: 'middle', fs: 13, c: 'f' });
  s += circ(198, 102, 18, { fill: COL.f, op: 0.25, c: 'f' }) + tx(198, 107, '+', { anchor: 'middle', fs: 13, c: 'f' });
  s += arr(68, 102, 34, 102, 'f', 2.2) + arr(216, 102, 250, 102, 'f', 2.2);
  s += arr(100, 102, 140, 102, 'v', 1.6, '5 4') + arr(184, 102, 144, 102, 'v', 1.6, '5 4');
  s += tx(142, 88, 'F_g', { fs: 9, c: 'v', anchor: 'middle' }) + tx(142, 122, 'F_e', { fs: 9, c: 'f', anchor: 'middle' });
  s += tx(142, 146, '电斥、引吸；净力为矢量和', { anchor: 'middle', it: false, fs: 8 });
  s += tx(18, 158, 'F_e 可吸引或排斥；F_g 永远吸引。', { it: false, fs: 8.5 });
  s += tx(214, 18, '(b) 异号电荷 · opposite sign', { it: false, fs: 9.5 });
  s += circ(278, 102, 18, { fill: COL.f, op: 0.25, c: 'f' }) + tx(278, 107, '+', { anchor: 'middle', fs: 13, c: 'f' });
  s += circ(350, 102, 18, { fill: COL.v, op: 0.25, c: 'v' }) + tx(350, 107, '−', { anchor: 'middle', fs: 13, c: 'v' });
  s += arr(296, 102, 328, 102, 'f', 2.2) + arr(332, 102, 300, 102, 'f', 2.2);
  s += arr(278, 86, 278, 58, 'v', 1.3, '5 4') + arr(350, 86, 350, 58, 'v', 1.3, '5 4');
  s += tx(314, 84, '两者都吸引', { anchor: 'middle', it: false, fs: 8 });
  s += tx(314, 146, 'F_e 远大于 F_g', { anchor: 'middle', it: false, fs: 8 });
  s += tx(214, 158, '同距离下用 F_e ÷ F_g 比较数量级。', { it: false, fs: 8.5 });
  s += tx(18, 186, '同号：F_e 向外，F_g 向内；异号：两者都向内。', { it: false, fs: 8.7 });
  s += tx(18, 202, '质量始终产生吸引的引力；电荷符号决定电力方向。', { it: false, fs: 8.7 });
  s += tx(18, 222, '净力是电力与引力的矢量和；通常 F_g 可忽略。', { it: false, fs: 8.7 });
  s += tx(18, 242, 'Electric forces can attract or repel; gravity always attracts.', { it: false, fs: 7.5, c: 'm' });
  return s;
});
def('em-u8-dielectric-polarization', '介质极化与束缚电荷 · Dielectric polarization and bound charge', 'E=\\dfrac{E_0}{\\kappa},\\qquad C=\\kappa C_0,\\qquad \\varepsilon=\\kappa\\varepsilon_0', () => {
  let s = rect(80, 44, 10, 172, { fill: COL.f, op: 0.22, c: 'f' }) + rect(310, 44, 10, 172, { fill: COL.v, op: 0.22, c: 'v' });
  for (let y = 58; y <= 202; y += 24) s += tx(85, y, '+', { anchor: 'middle', fs: 10, c: 'f' });
  for (let y = 58; y <= 202; y += 24) s += tx(315, y, '−', { anchor: 'middle', fs: 10, c: 'v' });
  s += rect(120, 52, 160, 156, { fill: COL.g, op: 0.04, c: 'g', w: 1.2 });
  s += tx(200, 40, '电介质 · dielectric', { anchor: 'middle', it: false, fs: 9 });
  for (let y = 72; y <= 190; y += 30) {
    s += circ(154, y, 8, { c: 'v', w: 1 }) + tx(154, y + 3, '−', { anchor: 'middle', fs: 9, c: 'v' });
    s += circ(186, y, 8, { c: 'f', w: 1 }) + tx(186, y + 3, '+', { anchor: 'middle', fs: 9, c: 'f' });
  }
  s += tx(126, 224, '束缚 −', { fs: 8.5, c: 'v', anchor: 'middle' }) + tx(274, 224, '束缚 +', { fs: 8.5, c: 'f', anchor: 'middle' });
  s += arr(200, 92, 292, 92, 'E', 2.2) + tx(246, 84, 'E₀', { fs: 10, c: 'E', anchor: 'middle' });
  s += arr(200, 120, 136, 120, 'v', 1.8) + tx(168, 112, 'E_b', { fs: 10, c: 'v', anchor: 'middle' });
  s += arr(200, 148, 250, 148, 'E', 1.4) + tx(225, 140, 'E', { fs: 10, c: 'E', anchor: 'middle' });
  s += tx(18, 238, 'E = E₀ ÷ κ：束缚电荷的反向场削弱净场；C = κC₀。', { it: false, fs: 8.3 });
  s += tx(18, 252, 'κ ≥ 1；ε = κε₀ 是介质的介电常数。', { it: false, fs: 8.3 });
  return s;
});
def('em-u8-permittivity-materials', '介电常数材料比较与非极性/极性分子 · Permittivity comparison and nonpolar/polar molecules', '\\kappa=\\dfrac{\\varepsilon}{\\varepsilon_0}\\ge1', () => {
  const L = 118, R = 360, X = (v) => L + (Math.log10(v) / 2) * (R - L);
  let s = ln(L, 34, L, 174, { w: 1.2 }) + ln(L, 174, R, 174, { w: 1.2 });
  [1, 10, 100].forEach((v) => { s += ln(X(v), 168, X(v), 180, { w: 1 }) + tx(X(v), 192, `${v}`, { fs: 9, anchor: 'middle' }); });
  const rows = [['真空 · vacuum', 1, 'm'], ['空气 · air', 1.0006, 'm'], ['塑料 · plastic', 3, 'a'], ['玻璃 · glass', 6, 'v'], ['水 · water', 80, 'B']];
  rows.forEach(([lab, v, c], i) => {
    const y = 44 + i * 24;
    s += tx(L - 6, y + 8, lab, { anchor: 'end', it: false, fs: 8.2 });
    s += rect(X(1), y, Math.max(1, X(v) - X(1)), 14, { fill: COL[c], op: c === 'm' ? 0.12 : 0.28, c: c === 'm' ? 'g' : c, w: 1 });
    s += tx(X(v) + 4, y + 10, v === 1 ? '1' : (v < 2 ? '≈1.0006' : `${v}`), { fs: 8, it: false, c: c === 'm' ? 'g' : c });
  });
  s += tx(18, 210, '非极性分子：诱导偶极', { it: false, fs: 8.2 });
  s += circ(86, 236, 13, { w: 1.2 }) + circ(114, 236, 13, { w: 1.2 });
  s += arr(98, 224, 114, 224, 'v', 1.2) + tx(106, 220, 'E', { fs: 8, c: 'v', anchor: 'middle' });
  s += tx(180, 210, '极性分子：永久偶极可转动', { it: false, fs: 8.2 });
  s += circ(236, 236, 13, { c: 'f', w: 1.2 }) + tx(236, 240, '+', { anchor: 'middle', fs: 10, c: 'f' }) + circ(264, 236, 13, { c: 'v', w: 1.2 }) + tx(264, 240, '−', { anchor: 'middle', fs: 10, c: 'v' });
  s += arc(250, 236, 34, 200, 340, { c: 'a', w: 1.2, me: 'a' });
  s += tx(298, 210, 'κ 由组成与排列决定：', { it: false, fs: 8.2 });
  s += tx(298, 224, '电子能否容易改变位形。', { it: false, fs: 8.2 });
  s += tx(298, 238, '水分子永久偶极 → κ 大。', { it: false, fs: 8.2 });
  s += tx(18, 254, 'κ = ε ÷ ε₀；组成与排列决定极化响应，不只是密度。', { it: false, fs: 8 });
  return s;
});
def('em-u8-conductor-insulator-response', '导体与绝缘体对外场的响应 · Conductor versus insulator response to an external field', 'E_{\\mathrm{cond}}=0,\\qquad E_{\\mathrm{ins}}=\\dfrac{E_0}{\\kappa}', () => {
  let s = tx(18, 18, '导体 · conductor', { it: false, fs: 10, c: 'a' });
  s += rect(38, 70, 118, 78, { fill: COL.g, op: 0.04, c: 'g', w: 1.4 });
  for (let y = 56; y <= 162; y += 26) s += arr(20, y, 56, y, 'E', 1.3);
  s += tx(22, 182, '外场 E₀', { it: false, fs: 8, c: 'E' });
  for (let y = 82; y <= 138; y += 18) s += tx(42, y, '−', { anchor: 'middle', fs: 10, c: 'v' });
  for (let y = 82; y <= 138; y += 18) s += tx(152, y, '+', { anchor: 'middle', fs: 10, c: 'f' });
  s += tx(97, 112, '自由载流子迁移', { anchor: 'middle', it: false, fs: 8.2 });
  s += tx(97, 126, '内部 E = 0', { anchor: 'middle', it: false, fs: 8.2, c: 'a' });
  s += tx(18, 204, '净电荷在表面；无静态 κ。', { it: false, fs: 8.3 });
  s += tx(214, 18, '绝缘体 · insulator', { it: false, fs: 10, c: 'v' });
  s += rect(234, 70, 118, 78, { fill: COL.g, op: 0.04, c: 'g', w: 1.4 });
  for (let y = 56; y <= 162; y += 26) s += arr(216, y, 252, y, 'E', 1.3);
  s += tx(218, 182, '外场 E₀', { it: false, fs: 8, c: 'E' });
  for (let y = 82; y <= 138; y += 20) {
    s += circ(258, y, 6, { c: 'v', w: 1 }) + tx(258, y + 3, '−', { anchor: 'middle', fs: 8, c: 'v' });
    s += circ(286, y, 6, { c: 'f', w: 1 }) + tx(286, y + 3, '+', { anchor: 'middle', fs: 8, c: 'f' });
  }
  s += tx(296, 94, '束缚极化', { it: false, fs: 8.2 });
  s += tx(296, 108, '内部 E = E₀ ÷ κ', { it: false, fs: 8.2, c: 'v' });
  s += tx(214, 204, '束缚表面电荷；静态 κ 有意义。', { it: false, fs: 8.3 });
  s += ln(18, 220, 382, 220, { c: 'm', w: 1, dash: '4 3' });
  s += tx(18, 238, '导体屏蔽内部场；绝缘体只部分削弱内部场。', { it: false, fs: 8.5 });
  s += tx(18, 252, 'Conductors screen; insulators polarize and reduce E by κ.', { it: false, fs: 7.4, c: 'm' });
  return s;
});
def('multi-charge-potential', '多点电荷的电势叠加 · Superposition of electric potential from several charges', 'V(P)=k\\dfrac{q_1}{r_1}+k\\dfrac{q_2}{r_2}+k\\dfrac{q_3}{r_3}', () => {
  let s = circ(66, 60, 12, { fill: COL.f, op: 0.25, c: 'f' }) + tx(66, 65, '+', { anchor: 'middle', fs: 12, c: 'f' }) + tx(48, 56, 'q₁', { fs: 9 });
  s += circ(66, 170, 12, { fill: COL.f, op: 0.25, c: 'f' }) + tx(66, 175, '+', { anchor: 'middle', fs: 12, c: 'f' }) + tx(48, 166, 'q₂', { fs: 9 });
  s += circ(176, 115, 12, { fill: COL.v, op: 0.25, c: 'v' }) + tx(176, 120, '−', { anchor: 'middle', fs: 12, c: 'v' }) + tx(190, 112, 'q₃', { fs: 9 });
  s += circ(306, 115, 4, { fill: COL.v }) + tx(314, 120, 'P', { fs: 10 });
  s += ln(66, 60, 306, 115, { c: 'm', dash: '4 3', w: 1 }) + tx(196, 76, 'r₁', { fs: 9, c: 'm' });
  s += ln(66, 170, 306, 115, { c: 'm', dash: '4 3', w: 1 }) + tx(196, 156, 'r₂', { fs: 9, c: 'm' });
  s += ln(176, 115, 306, 115, { c: 'm', dash: '4 3', w: 1 }) + tx(240, 108, 'r₃', { fs: 9, c: 'm' });
  s += `<ellipse cx="246" cy="128" rx="88" ry="44" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/>`;
  s += tx(246, 176, '等势线 · equipotential', { anchor: 'middle', it: false, fs: 8 });
  s += tx(18, 194, 'V 是标量：直接取代数和，不用分解方向。', { it: false, fs: 8.7 });
  s += tx(18, 210, '某点 V = 0 只表示各贡献抵消，E 不一定为零。', { it: false, fs: 8.7 });
  s += tx(18, 226, '电势的正负由各电荷符号与距离共同决定。', { it: false, fs: 8.7 });
  s += tx(18, 246, 'Potential is a scalar sum; V = 0 does not imply E = 0.', { it: false, fs: 7.5, c: 'm' });
  return s;
});
def('potential-slope-field', 'V(x) 斜率与电场 · Slope of V(x) and the electric field', 'E_x=-\\dfrac{dV}{dx}', () => {
  const g = graph(46, 32, 300, 132, { fns: [{ f: (t) => 600 - 400 * t, c: 'a', w: 2.4 }], t1: 1.5, ymin: -80, ymax: 640, xl: 'x (m)', yl: 'V (V)' });
  let s = g.s;
  s += ln(g.X(0.4), g.Y(440), g.X(0.7), g.Y(320), { c: 'E', w: 1.8 });
  s += tx(g.X(0.72), g.Y(306), '切线斜率 = −E_x', { fs: 8.4, c: 'E' });
  s += ln(g.X(1.0), g.Y(200), g.X(1.3), g.Y(80), { c: 'E', w: 1.8 });
  s += tx(g.X(0.78), g.Y(120), 'E_x = −dV ÷ dx', { fs: 8.4, c: 'E' });
  s += tx(46, 190, 'V 随 x 线性下降 → E_x 为常量且沿 +x。', { it: false, fs: 8.6 });
  s += tx(46, 204, '正电荷受力沿 E；负电荷受力反向。', { it: false, fs: 8.6 });
  s += arr(250, 222, 326, 222, 'E', 1.8) + tx(288, 214, 'E', { fs: 10, c: 'E', anchor: 'middle' });
  s += circ(110, 228, 10, { fill: COL.f, op: 0.25, c: 'f' }) + tx(110, 232, '+', { anchor: 'middle', fs: 11, c: 'f' }) + arr(122, 228, 154, 228, 'f', 1.6);
  s += circ(110, 248, 10, { fill: COL.v, op: 0.25, c: 'v' }) + tx(110, 252, '−', { anchor: 'middle', fs: 11, c: 'v' }) + arr(98, 248, 68, 248, 'v', 1.6);
  s += tx(178, 232, '正电荷 · positive', { it: false, fs: 8 });
  s += tx(178, 252, '负电荷 · negative', { it: false, fs: 8 });
  return s;
});
def('equipotentials-particle-energy', '等势线与粒子能量 · Equipotentials and particle energy', 'K+U=\\text{const},\\qquad \\Delta K=-\\Delta U', () => {
  let s = '';
  for (let i = 0; i < 4; i++) {
    const x = 70 + i * 44;
    s += ln(x, 42, x, 196, { c: 'a', w: 1.2, dash: i === 0 ? '' : '4 3' });
    s += tx(x, 34, `${10 + i * 10} V`, { fs: 8, anchor: 'middle', c: 'a' });
  }
  s += tx(52, 20, '等势线 · equipotentials', { it: false, fs: 8.6 });
  s += pathD('M50,180 C110,180 150,110 220,84', { c: 'v', w: 2.2, me: 'v' });
  s += circ(72, 176, 4, { fill: COL.v }) + tx(56, 192, 'A', { fs: 9 }) + circ(206, 88, 4, { fill: COL.v }) + tx(212, 82, 'B', { fs: 9 });
  s += circ(240, 76, 4, { fill: COL.f }) + tx(246, 72, '折返点', { fs: 8, c: 'f' });
  s += tx(18, 216, '沿等势线移动不做功；只有电场力做功时 K + U 守恒。', { it: false, fs: 8.2 });
  s += tx(18, 230, '粒子不能进入 U 高于总能量的区域，在折返点 K = 0。', { it: false, fs: 8.2 });
  s += tx(18, 248, 'Bar chart: K + U is constant; turning point where K = 0.', { it: false, fs: 7.4, c: 'm' });
  const bx = 280, base = 206;
  s += ln(bx - 8, base, 388, base, { w: 1.2 });
  s += bar(bx, base, 20, 70, 'v', 0.3) + bar(bx + 26, base, 20, 34, 'a', 0.3);
  s += bar(bx + 56, base, 20, 26, 'v', 0.3) + bar(bx + 82, base, 20, 78, 'a', 0.3);
  s += ln(bx, base - 104, 388, base - 104, { c: 'm', dash: '4 3', w: 1 });
  s += tx(bx + 12, base + 12, 'K', { fs: 9, c: 'v', anchor: 'middle' }) + tx(bx + 38, base + 12, 'U', { fs: 9, c: 'a', anchor: 'middle' });
  s += tx(bx + 68, base + 12, 'K', { fs: 9, c: 'v', anchor: 'middle' }) + tx(bx + 94, base + 12, 'U', { fs: 9, c: 'a', anchor: 'middle' });
  s += tx(bx + 6, base - 110, '总能量', { fs: 8, c: 'm' });
  return s;
});
def('three-charge-pairwise', '三点电荷的逐对势能 · Pairwise potential energy of three charges', 'U=\\sum_{i<j}k\\dfrac{q_iq_j}{r_{ij}}', () => {
  let s = ln(62, 198, 202, 198, { w: 1.4 }) + ln(62, 198, 62, 58, { w: 1.4 });
  s += circ(62, 198, 11, { fill: COL.f, op: 0.25, c: 'f' }) + tx(62, 202, '+', { anchor: 'middle', fs: 11, c: 'f' }) + tx(44, 202, 'q₁', { fs: 9 });
  s += circ(202, 198, 11, { fill: COL.f, op: 0.25, c: 'f' }) + tx(202, 202, '−', { anchor: 'middle', fs: 11, c: 'v' }) + tx(212, 202, 'q₂', { fs: 9 });
  s += circ(62, 58, 11, { fill: COL.v, op: 0.25, c: 'v' }) + tx(62, 62, '+', { anchor: 'middle', fs: 11, c: 'f' }) + tx(44, 56, 'q₃', { fs: 9 });
  s += tx(132, 208, '0.30 m', { fs: 8.5, anchor: 'middle' }) + tx(40, 128, '0.40 m', { fs: 8.5, anchor: 'middle' });
  s += tx(146, 126, '0.50 m', { fs: 8.5 });
  s += ln(62, 58, 202, 198, { c: 'm', dash: '4 3', w: 1 });
  s += tx(226, 42, '逐对组装 · place one at a time', { it: false, fs: 8.6 });
  s += tx(226, 64, '① 第一个电荷：0 J', { it: false, fs: 8.3 });
  s += tx(226, 80, '② 第二个：+U₁₂', { it: false, fs: 8.3 });
  s += tx(226, 96, '③ 第三个：+U₁₃ + U₂₃', { it: false, fs: 8.3 });
  s += tx(226, 120, 'U₁₂ = kq₁q₂ ÷ r₁₂', { fs: 8.3 });
  s += tx(226, 136, 'U₁₃ = kq₁q₃ ÷ r₁₃', { fs: 8.3 });
  s += tx(226, 152, 'U₂₃ = kq₂q₃ ÷ r₂₃', { fs: 8.3 });
  s += tx(226, 176, '总势能 = 三项之和', { it: false, fs: 8.6, c: 'a' });
  s += tx(18, 228, '三个电荷只有三对相互作用，每对只算一次。', { it: false, fs: 8.5 });
  s += tx(18, 244, '先放置的电荷不需要克服后来电荷的场。', { it: false, fs: 8.5 });
  return s;
});
def('pairwise-double-counting', '双计数错误与正确配对 · Double-counting error and correct pairing', 'U=\\sum_{i<j}k\\dfrac{q_iq_j}{r_{ij}}=\\dfrac12\\sum_i q_iV_i', () => {
  let s = tx(18, 18, '错误：有序对 · ordered pairs', { it: false, fs: 9.3, c: 'E' });
  s += rect(18, 28, 174, 132, { c: 'E', w: 1.3, dash: '4 3' });
  s += tx(28, 50, 'Σᵢ Σⱼ≠ᵢ kqᵢqⱼ ÷ rᵢⱼ', { fs: 9.3, c: 'E' });
  const terms = ['1-2', '2-1', '1-3', '3-1', '2-3', '3-2'];
  terms.forEach((t, i) => { s += tx(36 + (i % 2) * 72, 76 + Math.floor(i / 2) * 24, `U${t}`, { fs: 8.8 }); });
  s += tx(28, 148, '每对算两次 → 结果 ×2', { it: false, fs: 8.4, c: 'E' });
  s += tx(214, 18, '正确：无序对 · i < j', { it: false, fs: 9.3, c: 'a' });
  s += rect(214, 28, 168, 132, { c: 'a', w: 1.3, dash: '4 3' });
  s += tx(224, 50, 'Σᵢ<ⱼ kqᵢqⱼ ÷ rᵢⱼ', { fs: 9.3, c: 'a' });
  const terms2 = ['U₁₂', 'U₁₃', 'U₂₃'];
  terms2.forEach((t, i) => { s += tx(234, 78 + i * 24, t, { fs: 8.8, c: 'a' }); });
  s += tx(224, 148, '三项，每对一次', { it: false, fs: 8.4, c: 'a' });
  s += tx(18, 184, '(1/2)Σᵢ qᵢVᵢ 中的 1/2 正是为了抵消双计数；', { it: false, fs: 8.5 });
  s += tx(18, 200, '自能项 i = j 不计入相互作用势能。', { it: false, fs: 8.5 });
  s += tx(18, 220, '三电荷：3 对；四电荷：6 对；n 个电荷：n(n−1) ÷ 2 对。', { it: false, fs: 8.5 });
  s += tx(18, 242, 'The factor 1/2 cancels the double counting of ordered pairs.', { it: false, fs: 7.4, c: 'm' });
  return s;
});
def('battery-chemical-emf', '电池的化学电动势 · Chemical emf of a battery', '\\varepsilon=\\dfrac{W_{\\mathrm{ne}}}{q},\\qquad V_{\\mathrm{term}}=\\varepsilon-Ir', () => {
  let s = rect(36, 62, 188, 136, { w: 1.6 }) + rect(36, 62, 188, 22, { fill: COL.g, op: 0.06, c: 'g', w: 1 });
  s += tx(130, 78, '电解质 · electrolyte', { anchor: 'middle', it: false, fs: 8.5 });
  s += rect(66, 96, 12, 86, { fill: COL.v, op: 0.25, c: 'v' }) + rect(182, 96, 12, 86, { fill: COL.f, op: 0.25, c: 'f' });
  s += tx(72, 192, '−', { anchor: 'middle', fs: 12, c: 'v' }) + tx(188, 192, '+', { anchor: 'middle', fs: 12, c: 'f' });
  s += tx(72, 214, '阳极 −', { anchor: 'middle', it: false, fs: 8, c: 'v' }) + tx(188, 214, '阴极 +', { anchor: 'middle', it: false, fs: 8, c: 'f' });
  s += ln(72, 96, 72, 34, { w: 1.6 }) + ln(188, 96, 188, 34, { w: 1.6 }) + ln(72, 34, 112, 34, { w: 1.6 }) + ln(148, 34, 188, 34, { w: 1.6 });
  s += resistor(112, 34, 148, 34, 'R', { dy: -8 });
  s += arr(92, 24, 128, 24, 'v', 1.6) + tx(110, 18, 'e⁻', { fs: 9, c: 'v', anchor: 'middle' });
  s += arr(78, 132, 176, 132, 'a', 1.8) + tx(127, 124, '非静电力 F_ne', { fs: 8, c: 'a', anchor: 'middle' });
  s += arr(176, 152, 78, 152, 'E', 1.8) + tx(127, 166, '内电场 E', { fs: 8, c: 'E', anchor: 'middle' });
  s += tx(236, 54, '化学过程分离正负电荷，', { it: false, fs: 8.3 });
  s += tx(236, 68, '非静电力把正电荷搬到正极。', { it: false, fs: 8.3 });
  s += tx(236, 90, '电池不是电荷仓库；', { it: false, fs: 8.3 });
  s += tx(236, 104, '持续提供电势差。', { it: false, fs: 8.3 });
  s += tx(236, 130, '开路：V_term = ε', { it: false, fs: 8.3, c: 'a' });
  s += tx(236, 146, '有电流：V_term = ε − Ir', { it: false, fs: 8.3, c: 'a' });
  s += tx(236, 172, '内部 E 与外电路电流方向相反。', { it: false, fs: 8 });
  s += tx(18, 232, '电动势 ε 是单位电荷获得的非静电力做功。', { it: false, fs: 8.5 });
  s += tx(18, 248, 'Chemical reactions separate charge; emf is energy per unit charge.', { it: false, fs: 7.4, c: 'm' });
  return s;
});
def('battery-terminal-voltage', '端电压与电流的关系 · Terminal voltage versus current', 'V_{\\mathrm{term}}=\\varepsilon-Ir,\\qquad I=\\dfrac{\\varepsilon}{R+r}', () => {
  let s = ln(46, 54, 168, 54, { w: 1.6 }) + ln(168, 54, 168, 200, { w: 1.6 }) + ln(168, 200, 46, 200, { w: 1.6 }) + ln(46, 200, 46, 54, { w: 1.6 });
  s += battery(46, 120, 46, 152, 'ε', false);
  s += resistor(130, 54, 168, 54, 'r', { dy: -8 }) + resistor(46, 78, 46, 112, 'R', { anchor: 'start', dx: 10 });
  s += circ(214, 54, 13, { w: 1.2 }) + tx(214, 58, 'V', { anchor: 'middle', fs: 10 });
  s += ln(168, 54, 201, 54, { w: 1.2, c: 'm', dash: '3 3' }) + ln(227, 54, 250, 54, { w: 1.2, c: 'm', dash: '3 3' });
  s += ln(214, 67, 214, 200, { c: 'm', dash: '3 3', w: 1 }) + ln(168, 200, 214, 200, { c: 'm', dash: '3 3', w: 1 });
  s += arr(92, 54, 120, 54, 'I', 1.8) + tx(106, 46, 'I', { fs: 9, c: 'I', anchor: 'middle' });
  s += tx(18, 224, '端电压 V_term = ε − Ir = IR；', { it: false, fs: 8.4 });
  s += tx(18, 238, '电流越大，内阻分压 Ir 越大，端电压越低。', { it: false, fs: 8.4 });
  const g = graph(270, 48, 112, 132, { fns: [{ f: (t) => 9 - 1.5 * t, c: 'a', w: 2.2 }], t1: 3, ymin: 0, ymax: 10, xl: 'I (A)', yl: 'V_term (V)' });
  s += g.s;
  s += circ(g.X(0), g.Y(9), 3, { fill: COL.a }) + tx(g.X(0) + 4, g.Y(9) - 4, '开路 ε', { fs: 7.6, c: 'a' });
  s += circ(g.X(2), g.Y(6), 3, { fill: COL.a }) + tx(g.X(2) + 4, g.Y(6) + 10, '负载', { fs: 7.6, c: 'a' });
  s += tx(270, 198, '斜率 = −r；纵截距 = ε。', { it: false, fs: 8.2 });
  s += tx(270, 214, '短路：V_term = 0，I = ε ÷ r。', { it: false, fs: 8.2 });
  return s;
});
def('contact-spheres', '不同半径导体球的接触再分布 · Contact charge redistribution between spheres of different radii', 'V_1=V_2,\\qquad \\dfrac{Q_1}{Q_2}=\\dfrac{R_1}{R_2},\\qquad \\dfrac{\\sigma_1}{\\sigma_2}=\\dfrac{R_2}{R_1}' + CAP_DESCENT, () => {
  let s = circ(92, 118, 34, { w: 1.5 }) + tx(92, 68, 'R₁ = 1.0 cm', { anchor: 'middle', it: false, fs: 8.6 });
  s += circ(286, 118, 62, { w: 1.5 }) + tx(286, 44, 'R₂ = 2.0 cm', { anchor: 'middle', it: false, fs: 8.6 });
  s += ln(126, 118, 224, 118, { w: 2.4 }) + tx(175, 110, '导线 · wire', { anchor: 'middle', it: false, fs: 8.2 });
  for (const [x, y] of [[70, 100], [70, 124], [92, 88], [92, 148], [112, 106], [112, 132]]) s += tx(x, y, '+', { anchor: 'middle', fs: 10, c: 'f' });
  for (const [x, y] of [[244, 92], [244, 120], [268, 78], [268, 158], [300, 82], [300, 154], [322, 100], [322, 136]]) s += tx(x, y, '+', { anchor: 'middle', fs: 10, c: 'f' });
  s += tx(92, 172, 'Q₁', { anchor: 'middle', fs: 9 }) + tx(286, 192, 'Q₂', { anchor: 'middle', fs: 9 });
  s += tx(18, 204, '连接后同电势：V₁ = V₂；电荷按半径分配。', { it: false, fs: 8.5 });
  s += tx(18, 220, 'Q₁ ÷ Q₂ = R₁ ÷ R₂；σ₁ ÷ σ₂ = R₂ ÷ R₁。', { it: false, fs: 8.5 });
  s += tx(18, 236, '小球的表面电荷密度更大，表面场更强：E₁ > E₂。', { it: false, fs: 8.5 });
  s += tx(18, 252, 'The wire enforces a common potential, not equal charge.', { it: false, fs: 7.4, c: 'm' });
  return s;
});
def('charging-by-grounding', '接地感应带电的操作顺序 · Charging by induction and grounding order', 'Q_{\\mathrm{net}}=0\\ \\text{(isolated)},\\qquad Q_{\\mathrm{net}}<0\\ \\text{(grounded)}', () => {
  const sphere = (cx, cy, neg = false) => {
    let o = circ(cx, cy, 18, { w: 1.3 });
    if (neg) {
      o += tx(cx - 8, cy - 2, '−', { anchor: 'middle', fs: 9, c: 'v' }) + tx(cx + 8, cy - 2, '−', { anchor: 'middle', fs: 9, c: 'v' }) + tx(cx, cy + 10, '−', { anchor: 'middle', fs: 9, c: 'v' });
    } else {
      o += tx(cx - 10, cy - 2, '−', { anchor: 'middle', fs: 9, c: 'v' }) + tx(cx + 10, cy - 2, '+', { anchor: 'middle', fs: 9, c: 'f' });
    }
    return o;
  };
  const rod = (x, y, ghost = false) => rect(x, y, 8, 44, { fill: ghost ? 'none' : COL.f, op: ghost ? 0 : 0.25, c: ghost ? 'm' : 'f', dash: ghost ? '3 3' : '' }) + tx(x + 4, y - 5, '+', { anchor: 'middle', fs: 9, c: ghost ? 'm' : 'f' });
  let s = tx(18, 16, '① 靠近 · near', { it: false, fs: 8.6 });
  s += rod(26, 48) + sphere(96, 70);
  s += tx(18, 122, '近端 −、远端 +，Q_net = 0', { it: false, fs: 7.6 });
  s += tx(208, 16, '② 接地 · grounded', { it: false, fs: 8.6 });
  s += rod(216, 48) + sphere(286, 70);
  s += ln(286, 88, 286, 110, { w: 1.1 }) + ln(270, 110, 302, 110, { w: 1.6 });
  s += arr(302, 104, 302, 88, 'v', 1.4) + tx(308, 100, 'e⁻', { fs: 7.6, c: 'v' });
  s += tx(208, 122, '电子流入，Q_net < 0', { it: false, fs: 7.6 });
  s += tx(18, 140, '③ 先断地 · disconnect first', { it: false, fs: 8.6 });
  s += rod(26, 168) + sphere(96, 190, true);
  s += tx(18, 238, '净负电荷被保留', { it: false, fs: 7.6 });
  s += tx(208, 140, '④ 再移棒 · then remove rod', { it: false, fs: 8.6 });
  s += sphere(286, 190, true);
  s += tx(208, 238, '负电荷分布在表面', { it: false, fs: 7.6 });
  s += tx(18, 254, '反序：接地 → 先移棒 → 再断地 → 最终中性。', { it: false, fs: 8.2 });
  return s;
});
def('ground-reservoir', '大地作为零电势电荷库 · Earth as a zero-potential charge reservoir', 'V_{\\mathrm{Earth}}=0,\\qquad C_{\\mathrm{Earth}}\\to\\infty', () => {
  let s = circ(118, 132, 82, { fill: COL.g, op: 0.04, c: 'g', w: 1.6 });
  s += tx(118, 112, '地球 · Earth', { anchor: 'middle', it: false, fs: 11 });
  s += tx(118, 132, 'V = 0', { anchor: 'middle', fs: 11, c: 'a' });
  s += tx(118, 150, 'C → ∞', { anchor: 'middle', fs: 10 });
  s += tx(118, 168, '近似中性', { anchor: 'middle', it: false, fs: 9 });
  s += circ(306, 76, 28, { w: 1.5 }) + tx(306, 80, '导体', { anchor: 'middle', it: false, fs: 8.6 });
  s += ln(278, 76, 200, 76, { w: 1.6 }) + ln(200, 76, 200, 132, { w: 1.6 }) + ln(200, 132, 190, 132, { w: 1.6 });
  s += arr(230, 68, 272, 68, 'v', 1.5) + arr(254, 84, 212, 84, 'v', 1.5);
  s += tx(242, 58, '电荷双向流动', { anchor: 'middle', it: false, fs: 8 });
  s += tx(212, 48, '接地线 · ground wire', { it: false, fs: 8 });
  s += tx(238, 116, 'Q 交换', { it: false, fs: 8 });
  const gx = 244, gy = 156, gw = 132, gh = 66;
  s += ln(gx, gy + gh, gx + gw, gy + gh, { w: 1.2 }) + ln(gx, gy + gh, gx, gy, { w: 1.2 });
  s += ln(gx, gy + gh / 2, gx + gw, gy + gh / 2, { c: 'a', w: 2.2 });
  s += tx(gx + gw, gy + gh + 14, 'Q', { fs: 9, anchor: 'end' }) + tx(gx - 4, gy + 4, 'V', { fs: 9, anchor: 'end' });
  s += tx(gx + 6, gy + gh / 2 - 6, 'V = 0 恒定', { fs: 8, c: 'a' });
  s += tx(18, 224, '接地的导体可与地球交换有限电荷，而地球电势几乎不变。', { it: false, fs: 8.7 });
  s += tx(18, 240, 'ΔV = ΔQ ÷ C_Earth ≈ 0，因为 C_Earth 极大。', { it: false, fs: 8.5 });
  s += tx(18, 254, 'Earth is much larger and approximately neutral, so its potential stays zero.', { it: false, fs: 7.2, c: 'm' });
  return s;
});
def('conductor-polarization', '外场中中性导体的极化 · Polarization of a neutral conductor in an external field', 'E_{\\mathrm{inside}}=0,\\qquad E_{\\mathrm{surface}}=\\dfrac{\\sigma}{\\varepsilon_0}', () => {
  let s = tx(18, 18, '(a) 导体板 · conducting slab', { it: false, fs: 9 });
  s += rect(58, 72, 92, 100, { fill: COL.g, op: 0.04, c: 'g', w: 1.5 });
  for (let y = 56; y <= 188; y += 26) s += arr(22, y, 54, y, 'E', 1.3);
  for (let y = 56; y <= 188; y += 26) s += arr(154, y, 186, y, 'E', 1.3);
  for (let y = 88; y <= 156; y += 22) s += tx(63, y, '−', { anchor: 'middle', fs: 10, c: 'v' });
  for (let y = 88; y <= 156; y += 22) s += tx(145, y, '+', { anchor: 'middle', fs: 10, c: 'f' });
  s += tx(104, 190, 'Q_net = 0', { anchor: 'middle', it: false, fs: 8.5 });
  s += tx(18, 210, '外场使自由电子向左迁移，', { it: false, fs: 8.3 });
  s += tx(18, 224, '左面 −，右面 +。', { it: false, fs: 8.3 });
  s += tx(206, 18, '(b) 表面放大 · surface zoom', { it: false, fs: 9 });
  s += rect(226, 132, 150, 40, { fill: COL.g, op: 0.04, c: 'g', w: 1.4 });
  s += tx(301, 156, '导体表面', { anchor: 'middle', it: false, fs: 8.2 });
  for (let x = 242; x <= 360; x += 24) s += arr(x, 54, x, 126, 'E', 1.4);
  for (let x = 238; x <= 366; x += 24) s += ln(x, 136, x + 12, 136, { c: 'a', w: 1.1 });
  s += tx(376, 140, '等势线', { fs: 8, c: 'a', anchor: 'end' });
  s += tx(206, 186, '场线垂直表面；表面是等势面。', { it: false, fs: 8.3 });
  s += tx(206, 202, '内部合场为零，导体仍是等势体。', { it: false, fs: 8.3 });
  s += tx(206, 220, 'E_surface = σ ÷ ε₀，方向垂直表面。', { it: false, fs: 8.3 });
  s += tx(18, 246, 'An external field polarizes a neutral conductor without changing Q_net.', { it: false, fs: 7.2, c: 'm' });
  return s;
});
def('equilibrium-time', '导体静电平衡的建立时间 · Settling time to electrostatic equilibrium', '\\tau=\\dfrac{\\varepsilon}{\\sigma_c}\\ll t_{\\mathrm{macro}}', () => {
  const x0 = 52, x1 = 366, y0 = 196, yTop = 48;
  const X = (logt) => x0 + ((logt + 19) / 10) * (x1 - x0);
  let s = ln(x0, y0, x1, y0, { w: 1.2 }) + ln(x0, y0, x0, yTop, { w: 1.2 });
  s += tx(x1 + 2, y0 + 4, 'log₁₀ t (s)', { fs: 8.6 });
  s += tx(x0 - 6, yTop - 2, '|E_inside|', { fs: 8.6, anchor: 'end' });
  [-19, -16, -12, -9].forEach((k) => {
    s += ln(X(k), y0 - 4, X(k), y0 + 4, { w: 1 }) + tx(X(k), y0 + 16, `10^${k}`, { fs: 8, anchor: 'middle' });
  });
  const pts = [];
  for (let i = 0; i <= 100; i++) {
    const lt = -19 + (i / 100) * 10;
    const v = 1 / (1 + Math.exp((lt + 16.5) * 4));
    pts.push([X(lt), y0 - v * (y0 - yTop)]);
  }
  s += poly(pts, { c: 'E', w: 2.4 });
  s += ln(X(-16), yTop, X(-16), y0, { c: 'm', dash: '3 3', w: 1 });
  s += tx(X(-16) + 4, yTop + 10, '≈10⁻¹⁶ s 基本平衡', { fs: 7.8, c: 'E' });
  s += tx(x0, yTop - 14, '电荷集体重排，|E_inside| 迅速降到 0', { it: false, fs: 8.4 });
  s += tx(18, 222, '建立时间 τ = ε ÷ σ_c 远小于宏观时间；', { it: false, fs: 8.6 });
  s += tx(18, 238, '实验中通常视为瞬间达到静电平衡。', { it: false, fs: 8.6 });
  s += tx(18, 254, 'Equilibration is effectively instantaneous on macroscopic time scales.', { it: false, fs: 7.2, c: 'm' });
  return s;
});

/* ======================= Track B B07 additions ======================= */
def('em-ppc-field-superposition', '平行板电容器：两无限大带电面的电场叠加 · Parallel-plate capacitor: superposition of two infinite charged sheets', 'E_{\\mathrm{between}}=\\dfrac{\\sigma}{\\varepsilon_0},\\qquad E_{\\mathrm{outside}}=0', () => {
  const xL = 140, xR = 260, yT = 54, yB = 198;
  let s = rect(xL - 5, yT, 10, yB - yT, { fill: COL.f, op: 0.16, c: 'f', w: 2 });
  s += rect(xR - 5, yT, 10, yB - yT, { fill: COL.E, op: 0.16, c: 'E', w: 2 });
  s += tx(xL, yT - 8, '+σ', { anchor: 'middle', fs: 12, c: 'f' });
  s += tx(xR, yT - 8, '−σ', { anchor: 'middle', fs: 12, c: 'E' });
  s += tx(xL - 14, 128, 'A', { anchor: 'end', fs: 11, c: 'f' });
  s += tx(xR + 14, 128, 'A', { fs: 11, c: 'E' });
  for (const y of [92, 128, 164]) {
    s += arr(112, y, 78, y, 'E', 1.5) + arr(76, y + 8, 110, y + 8, 'B', 1.5);
    s += arr(162, y, 196, y, 'E', 1.5) + arr(162, y + 8, 196, y + 8, 'B', 1.5);
    s += arr(288, y, 254, y, 'E', 1.5) + arr(254, y + 8, 288, y + 8, 'B', 1.5);
  }
  s += tx(76, 76, 'E₊', { fs: 9, c: 'E', anchor: 'middle' }) + tx(92, 84, 'E₋', { fs: 9, c: 'B', anchor: 'middle' });
  s += tx(179, 76, 'E₊ + E₋', { fs: 9, anchor: 'middle' }) + tx(270, 84, 'E₊', { fs: 9, c: 'E', anchor: 'middle' }) + tx(286, 92, 'E₋', { fs: 9, c: 'B', anchor: 'middle' });
  s += tx(94, 222, 'E = 0（板外 · outside）', { anchor: 'middle', fs: 9.2, it: false });
  s += tx(200, 222, 'E = σ ÷ ε₀（板间 · between）', { anchor: 'middle', fs: 9.2, it: false, c: 'E' });
  s += tx(304, 222, 'E = 0（板外 · outside）', { anchor: 'middle', fs: 9.2, it: false });
  s += tx(200, 234, '导体极板内部 E = 0；板间场线垂直于极板。', { anchor: 'middle', fs: 7.6, it: false, c: 'm' });
  s += tx(200, 248, 'Inside the plates E = 0; the field is perpendicular to the plates.', { anchor: 'middle', fs: 6.8, it: false, c: 'm' });
  return s;
});
def('em-ppc-fringing', '有限平行板电容器的边缘场 · Fringing field of finite parallel plates', 'C\\approx\\dfrac{\\kappa\\varepsilon_0A}{d}\\left(1+\\mathcal{O}\\left(\\dfrac{d}{L}\\right)\\right)', () => {
  const x1 = 58, x2 = 342, yT = 78, yB = 178;
  let s = rect(x1, yT - 5, x2 - x1, 10, { fill: COL.f, op: 0.18, c: 'f', w: 1.6 });
  s += rect(x1, yB - 5, x2 - x1, 10, { fill: COL.E, op: 0.18, c: 'E', w: 1.6 });
  s += tx(x1, yT - 12, '+σ', { fs: 10, c: 'f' }) + tx(x2, yB + 20, '−σ', { anchor: 'end', fs: 10, c: 'E' });
  for (const x of [122, 162, 202, 242, 282]) s += arr(x, yT + 8, x, yB - 8, 'B', 1.5);
  for (const [x, c1, c2] of [[104, 72, 74], [92, 48, 50], [298, 330, 328], [310, 352, 350]]) {
    s += pathD(`M${x},${yT + 8} C${c1},${yT + 40} ${c2},${yB - 40} ${x},${yB - 8}`, { c: 'B', w: 1.3 });
  }
  s += pathD(`M58,${yT + 12} C38,${yT + 34} 34,${yB - 20} 18,${yB + 4}`, { c: 'B', w: 1.1, dash: '3 3' });
  s += pathD(`M342,${yT + 12} C362,${yT + 34} 366,${yB - 20} 382,${yB + 4}`, { c: 'B', w: 1.1, dash: '3 3' });
  s += tx(200, yT + 30, '匀强区：E = σ ÷ ε₀', { anchor: 'middle', fs: 9.2, it: false, c: 'E' });
  s += tx(74, 218, '边缘场：场线外弯，大小与方向不再均匀。', { fs: 8.4, it: false });
  s += tx(74, 232, 'Fringing: field lines bulge outward; E is no longer uniform.', { fs: 7.2, it: false, c: 'm' });
  s += tx(74, 248, 'd ≪ L 时近似最好；实际 C 略大于 κε₀A ÷ d。 · Best when d ≪ L; the actual C is slightly larger.', { fs: 7.4, it: false, c: 'm' });
  s += ln(350, yT, 350, yB, { c: 'm', w: 1, dash: '3 3' }) + tx(356, 132, 'd', { fs: 10 }) + tx(200, 204, 'L', { anchor: 'middle', fs: 10, it: false });
  return s;
});
def('em-ppc-geometry', '平行板几何与电介质对电容的影响 · How plate geometry and dielectric set capacitance', 'C=\\dfrac{\\kappa\\varepsilon_0A}{d}', () => {
  let s = tx(20, 18, 'A 真空 · vacuum', { it: false, fs: 9 });
  s += ln(52, 88, 52, 152, { w: 3 }) + ln(82, 88, 82, 152, { w: 3 });
  s += tx(52, 82, '+', { anchor: 'middle', fs: 11, c: 'f' }) + tx(82, 82, '−', { anchor: 'middle', fs: 11, c: 'E' });
  s += tx(67, 168, 'C₀ = ε₀A ÷ d', { anchor: 'middle', fs: 8.6, it: false });
  s += tx(20, 190, 'B 面积加倍 · area ×2', { it: false, fs: 9 });
  s += ln(152, 72, 152, 168, { w: 3 }) + ln(192, 72, 192, 168, { w: 3 });
  s += tx(152, 66, '+', { anchor: 'middle', fs: 11, c: 'f' }) + tx(192, 66, '−', { anchor: 'middle', fs: 11, c: 'E' });
  s += tx(172, 184, 'C = 2C₀', { anchor: 'middle', fs: 8.6, it: false });
  s += tx(226, 18, 'C 间距减半 + κ = 4 · d ÷ 2, κ = 4', { it: false, fs: 9 });
  s += ln(266, 72, 266, 168, { w: 3 }) + ln(292, 72, 292, 168, { w: 3 });
  s += rect(268, 72, 22, 96, { fill: COL.v, op: 0.18, c: 'v', w: 1 });
  s += tx(266, 66, '+', { anchor: 'middle', fs: 11, c: 'f' }) + tx(292, 66, '−', { anchor: 'middle', fs: 11, c: 'E' });
  s += tx(279, 184, 'C = 2 × 4C₀ = 8C₀', { anchor: 'middle', fs: 8.6, it: false });
  s += tx(200, 214, 'C 随 A、κ 增大，随 d 减小；与 Q、V 无关。 · C grows with A and κ, shrinks with d; it is independent of Q and V.', { anchor: 'middle', fs: 7.8, it: false });
  s += eq(112, 238, ['C = ', { n: 'κ ε₀ A', d: 'd' }], { fs: 12 });
  s += tx(245, 242, '孤立：Q 不变；接电源：V 不变。', { fs: 7.8, it: false, c: 'm' });
  return s;
});
def('em-ppc-dielectric-insert', '孤立与接电池时插入电介质 · Dielectric insertion: isolated versus battery-connected', 'U=\\dfrac{Q^{2}}{2C}\\;\\text{(isolated)},\\qquad U=\\dfrac{1}{2}CV^{2}\\;\\text{(battery)}', () => {
  let s = tx(18, 18, '孤立（先断开） · isolated (Q fixed)', { it: false, fs: 9, c: 'f' });
  s += ln(36, 78, 36, 144, { w: 3 }) + ln(72, 78, 72, 144, { w: 3 }) + rect(38, 78, 32, 66, { fill: COL.v, op: 0.16, c: 'v', w: 1, dash: '3 3' });
  s += arr(96, 110, 78, 110, 'v', 1.6) + tx(100, 114, '插入 · insert', { fs: 7.6, it: false, c: 'v' });
  s += tx(18, 164, 'Q → Q', { fs: 9, it: false }) + tx(18, 180, 'C → κC', { fs: 9, it: false }) + tx(18, 196, 'V → V ÷ κ', { fs: 9, it: false }) + tx(18, 212, 'E → E ÷ κ', { fs: 9, it: false }) + tx(18, 228, 'U → U ÷ κ', { fs: 9, it: false, c: 'f' });
  s += tx(198, 18, '接电源（V 固定） · battery connected (V fixed)', { it: false, fs: 9, c: 'E' });
  s += ln(216, 78, 216, 144, { w: 3 }) + ln(252, 78, 252, 144, { w: 3 }) + rect(218, 78, 32, 66, { fill: COL.v, op: 0.16, c: 'v', w: 1, dash: '3 3' });
  s += arr(276, 110, 258, 110, 'v', 1.6) + tx(280, 114, '插入 · insert', { fs: 7.6, it: false, c: 'v' });
  s += tx(198, 164, 'V → V', { fs: 9, it: false }) + tx(198, 180, 'C → κC', { fs: 9, it: false }) + tx(198, 196, 'Q → κQ', { fs: 9, it: false }) + tx(198, 212, 'E = V ÷ d（不变）', { fs: 9, it: false }) + tx(198, 228, 'U → κU', { fs: 9, it: false, c: 'E' });
  s += tx(200, 248, '先问 Q 还是 V 不变。 · First decide whether Q or V is fixed.', { anchor: 'middle', fs: 8.2, it: false, c: 'm' });
  return s;
});
def('em-ppc-charging-work', '充电功与 V–q 图 · Charging work and the V–q graph', 'W_{\\mathrm{ext}}=\\int_0^Q\\dfrac{q}{C}\\,dq=\\dfrac{Q^{2}}{2C}=\\dfrac{1}{2}QV', () => {
  const g = graph(76, 44, 214, 144, { fns: [{ f: (x) => x }], t1: 1, ymin: 0, ymax: 1.25, xl: 'q', yl: 'v' });
  let s = g.s;
  const tri = [[g.X(0), g.Y(0)], [g.X(1), g.Y(0)], [g.X(1), g.Y(1)]];
  s += poly(tri, { fill: COL.a, op: 0.2, c: 'a', w: 1.2 });
  s += rect(g.X(0), g.Y(1), g.X(1) - g.X(0), g.Y(0) - g.Y(1), { fill: 'none', c: 'm', w: 1.1, dash: '4 3' });
  s += tx(g.X(1) + 4, g.Y(0) + 14, 'Q', { fs: 10 }) + tx(g.X(0) - 6, g.Y(1) + 4, 'V', { fs: 10, anchor: 'end' });
  s += tx(g.X(0) + 58, g.Y(0) - 22, '面积 = ½QV = U = W_ext', { fs: 8.8, it: false, c: 'a' });
  s += tx(g.X(0) + 6, g.Y(1) + 22, '矩形 QV = 电池总功', { fs: 8.2, it: false, c: 'm' });
  s += tx(20, 208, '斜率 = 1 ÷ C；三角形面积是外力可逆做功，等于储能。', { fs: 8.4, it: false });
  s += tx(20, 224, '恒压电源总功 QV，一半储存，一半耗散或转化为机械功。', { fs: 8.4, it: false });
  s += tx(20, 242, 'Field energy density u = ½ ε₀E²; volume Ad gives U = ½CV².', { fs: 7.2, it: false, c: 'm' });
  s += eq(300, 86, ['U = ', { n: '1', d: '2' }, 'QV'], { fs: 12 });
  s += eq(300, 128, ['= ', { n: 'Q^{2}', d: '2C' }], { fs: 12 });
  s += eq(300, 170, ['= ', { n: '1', d: '2' }, 'CV^{2}'], { fs: 12 });
  s += tx(300, 214, 'v = q ÷ C', { fs: 9, it: false, c: 'a' });
  return s;
});

def('em-u11-circuit-topology', '电路元件、开关与拓扑 · Circuit elements, switches, and topology', '\\sum_{\\text{loop}}\\Delta V=0,\\qquad \\sum_{\\text{junction}}I=0', () => {
  const loop = (x1, y1, x2, y2, open = false) => {
    let o = ln(x1, y1, x2, y1, { w: 1.4 }) + ln(x2, y1, x2, y2, { w: 1.4 }) + ln(x2, y2, x1, y2, { w: 1.4 }) + ln(x1, y2, x1, y1, { w: 1.4 });
    o += battery(x1, y2, x1, y1, 'ε', true);
    o += resistor(x1, y1, x1 + 46, y1, 'R', { dy: -8 });
    o += circ(x1 + 78, y1, 8, { w: 1.2 }) + tx(x1 + 78, y1 + 3, 'bulb', { anchor: 'middle', fs: 5.6, it: false });
    o += capacitor(x2, y1 + 16, x2, y2 - 16, '');
    o += tx(x2 - 8, y1 + 34, 'C', { anchor: 'end', fs: 9 });
    o += inductor(x1 + 14, y2, x1 + 50, y2, 'L');
    if (open) {
      o += circ(x1 + 64, y2, 2.3, { fill: 'currentColor' }) + circ(x1 + 100, y2, 2.3, { fill: 'currentColor' });
      o += ln(x1 + 64, y2, x1 + 92, y2 - 12, { w: 1.5 }) + tx(x1 + 82, y2 - 16, 'S', { anchor: 'middle', fs: 8 });
    } else {
      o += sw(x1 + 64, y2, x1 + 100, y2, 'S');
    }
    o += circ(x1 + 128, y2, 7.5, { w: 1.2 }) + tx(x1 + 128, y2 + 3, 'A', { anchor: 'middle', fs: 7, it: false });
    return o;
  };
  let s = tx(16, 14, 'A 闭合 · closed', { it: false, fs: 8.6, c: 'a' });
  s += loop(28, 36, 174, 102);
  s += tx(16, 120, 'V 表并联（略）· V in parallel (not drawn)', { fs: 7, it: false, c: 'm' });
  s += tx(210, 14, 'B 断开 · open', { it: false, fs: 8.6, c: 'f' });
  s += loop(232, 36, 384, 102, true);
  s += tx(210, 120, 'I = 0；V_gap = ε', { fs: 7, it: false, c: 'm' });

  s += tx(16, 138, 'C 共享支路 · shared branch', { it: false, fs: 8.6, c: 'v' });
  s += ln(28, 164, 180, 164, { w: 1.4 }) + ln(28, 232, 180, 232, { w: 1.4 });
  s += ln(28, 164, 28, 232, { w: 1.4 }) + ln(180, 164, 180, 232, { w: 1.4 });
  s += battery(28, 232, 28, 164, 'ε₁', true);
  s += resistor(28, 164, 104, 164, '') + tx(66, 156, 'R₂', { anchor: 'middle', fs: 7.4, it: false });
  s += resistor(104, 164, 180, 164, '') + tx(142, 156, 'R₃', { anchor: 'middle', fs: 7.4, it: false });
  s += resistor(104, 164, 104, 232, 'R_s', { dx: 14, dy: -12 });
  s += node(104, 164) + node(104, 232);
  s += arr(38, 184, 60, 184, 'v', 1.1) + tx(49, 178, 'I₁', { fs: 7.2, c: 'v', anchor: 'middle' });
  s += arr(118, 184, 140, 184, 'v', 1.1) + tx(129, 178, 'I₂', { fs: 7.2, c: 'v', anchor: 'middle' });
  s += tx(112, 210, 'I_s', { fs: 7.4, c: 'v' });
  s += tx(16, 250, 'I_s = I₁ − I₂', { fs: 7, it: false, c: 'm' });

  s += tx(210, 138, 'D 拓扑等价 · same topology', { it: false, fs: 8.6, c: 'B' });
  s += rect(222, 164, 66, 66, { c: 'B', w: 1.3 }) + rect(308, 164, 66, 66, { c: 'B', w: 1.3 });
  s += circ(222, 164, 2.4, { fill: COL.B }) + circ(288, 164, 2.4, { fill: COL.B });
  s += circ(308, 230, 2.4, { fill: COL.B }) + circ(374, 230, 2.4, { fill: COL.B });
  s += ln(288, 164, 308, 164, { c: 'B', w: 1.2, dash: '3 3' }) + tx(298, 158, 'same nodes', { anchor: 'middle', fs: 6.4, it: false, c: 'B' });
  s += tx(210, 250, '导线可重画 · reroute', { fs: 7, it: false, c: 'm' });
  return s;
});
def('em-u11-meter-loading', '理想电表与实际电表的负载效应 · Ideal versus real meter loading', 'R_A=0,\\; R_V\\to\\infty\\;\\text{(ideal)}', () => {
  const meterLoop = (x0, y0, real) => {
    const x1 = x0, x2 = x0 + 150, y1 = y0, y2 = y0 + 66;
    let o = ln(x1, y1, x2, y1, { w: 1.4 }) + ln(x2, y1, x2, y2, { w: 1.4 }) + ln(x2, y2, x1, y2, { w: 1.4 }) + ln(x1, y2, x1, y1, { w: 1.4 });
    o += battery(x1, y2, x1, y1, 'ε', true) + resistor(x1, y1, x1 + 58, y1, 'R');
    o += circ(x2 - 34, y2, 8, { w: 1.2 }) + tx(x2 - 34, y2 + 3, 'A', { anchor: 'middle', fs: 7, it: false });
    o += ln(x1 + 76, y1, x1 + 76, y1 + 22, { c: 'm', w: 1, dash: '3 3' }) + ln(x1 + 76, y1 + 22, x1 + 128, y1 + 22, { c: 'm', w: 1, dash: '3 3' }) + ln(x1 + 128, y1 + 22, x1 + 128, y1, { c: 'm', w: 1, dash: '3 3' });
    o += circ(x1 + 102, y1 + 22, 8, { w: 1.2, c: 'm' }) + tx(x1 + 102, y1 + 25, 'V', { anchor: 'middle', fs: 7, it: false });
    if (real) {
      o += tx(x2 - 34, y2 + 18, 'R_A > 0', { anchor: 'middle', fs: 7, it: false, c: 'f' });
      o += tx(x1 + 102, y1 + 40, 'R_V finite', { anchor: 'middle', fs: 7, it: false, c: 'f' });
    } else {
      o += tx(x2 - 34, y2 + 18, 'R_A = 0', { anchor: 'middle', fs: 7, it: false, c: 'a' });
      o += tx(x1 + 102, y1 + 40, 'R_V = ∞', { anchor: 'middle', fs: 7, it: false, c: 'a' });
    }
    return o;
  };
  let s = tx(18, 16, 'A 理想电表 · ideal meters', { it: false, fs: 9, c: 'a' });
  s += meterLoop(24, 38, false);
  s += tx(18, 136, '电流表串联且不降压；电压表并联且不分流。 · The ideal ammeter adds no series drop; the ideal voltmeter draws no current.', { fs: 7.4, it: false, c: 'm' });
  s += tx(214, 16, 'B 实际电表 · real meters', { it: false, fs: 9, c: 'f' });
  s += meterLoop(220, 38, true);
  s += tx(214, 136, '有限 R_A 串联分压，有限 R_V 并联分流：读数偏离真实值。 · Finite R_A drops voltage; finite R_V shunts current; readings differ from the undisturbed values.', { fs: 7.4, it: false, c: 'm' });
  s += tx(18, 168, '负载效应 · loading:', { it: false, fs: 9 });
  s += tx(18, 184, 'V_meas = V_true − I R_A', { fs: 9, it: false });
  s += tx(18, 200, 'I_meas = I_true − V ÷ R_V', { fs: 9, it: false });
  s += tx(18, 222, '测量时尽量使 R_A → 0、R_V → ∞。 · Design meters so R_A is small and R_V is large.', { fs: 8, it: false, c: 'm' });
  s += tx(18, 242, 'Ideal meters do not change the circuit they measure.', { fs: 7.2, it: false, c: 'm' });
  return s;
});
def('em-u11-capacitor-network-island', '串联浮置岛与并联电容网络 · Series floating island and parallel capacitor network', 'C_{\\mathrm{series}}=\\left(\\sum\\dfrac{1}{C_i}\\right)^{-1},\\qquad C_{\\mathrm{parallel}}=\\sum C_i', () => {
  let s = tx(16, 14, 'A 串联 · series', { it: false, fs: 8.6, c: 'v' });
  s += ln(28, 54, 64, 54, { w: 1.4 }) + capacitor(64, 54, 104, 54, 'C₁') + ln(104, 54, 112, 54, { w: 1.4 });
  s += ln(160, 54, 168, 54, { w: 1.4 }) + capacitor(168, 54, 208, 54, 'C₂') + ln(208, 54, 244, 54, { w: 1.4 });
  s += rect(104, 38, 64, 30, { c: 'v', w: 1.1, dash: '4 3', fill: COL.v, op: 0.08 });
  s += tx(116, 34, '+Q', { fs: 7.4, c: 'f' }) + tx(154, 34, '−Q', { fs: 7.4, c: 'E' });
  s += tx(136, 80, '岛净电荷 = 0 · island net zero', { anchor: 'middle', fs: 7.2, it: false, c: 'v' });
  s += tx(28, 100, 'Q 相同；V 按 1/C 分配。 · Same Q; V divides as 1/C.', { fs: 7.4, it: false, c: 'm' });
  s += tx(28, 116, 'C_eq < C_min · series limit', { fs: 7, it: false, c: 'm' });

  s += tx(252, 14, 'B 并联 · parallel', { it: false, fs: 8.6, c: 'E' });
  s += ln(252, 54, 384, 54, { w: 1.4 }) + ln(252, 116, 384, 116, { w: 1.4 });
  s += capacitor(300, 54, 300, 116, 'C₁') + capacitor(356, 54, 356, 116, 'C₂');
  s += tx(252, 76, 'V₁ = V₂ = V', { fs: 7.4, it: false, c: 'E' });
  s += tx(252, 92, 'Q₁ = C₁V', { fs: 7.2, it: false });
  s += tx(252, 106, 'Q₂ = C₂V', { fs: 7.2, it: false });
  s += tx(252, 136, 'Q_total = Q₁ + Q₂', { fs: 7.4, it: false, c: 'm' });
  s += tx(252, 150, 'C_eq > C_max · parallel limit', { fs: 7, it: false, c: 'm' });

  const g1 = graph(38, 184, 130, 58, { fns: [{ f: (x) => x, c: 'v' }], t1: 1, ymin: 0, ymax: 1.2, xl: '1/C_i', yl: 'V_i' });
  const g2 = graph(242, 184, 130, 58, { fns: [{ f: (x) => x, c: 'E' }], t1: 1, ymin: 0, ymax: 1.2, xl: 'C_i', yl: 'Q_i' });
  s += tx(28, 170, 'C 串联分压 · V_i ∝ 1/C_i', { fs: 7.4, it: false, c: 'v' });
  s += tx(232, 170, 'D 并联分流 · Q_i ∝ C_i', { fs: 7.4, it: false, c: 'E' });
  s += g1.s + g2.s;
  return s;
});
def('em-u12-compass-dipole-alignment', '磁偶极在磁场中趋向对齐 · Magnetic dipole aligning with a magnetic field', '\\vec\\tau=\\vec\\mu\\times\\vec B,\\qquad U=-\\mu B\\cos\\theta', () => {
  const cx = 112, cy = 126, r = 56;
  let s = circ(cx, cy, r, { w: 1.4 });
  for (let y = 74; y <= 178; y += 26) s += arr(24, y, 60, y, 'B', 1.4) + arr(164, y, 200, y, 'B', 1.4);
  s += tx(206, 120, 'B', { fs: 12, c: 'B' });
  const [nx, ny] = pt(cx, cy, r - 6, 32);
  s += arr(cx, cy, nx, ny, 'f', 3) + tx(nx + 8, ny - 4, 'μ', { fs: 12, c: 'f' });
  s += circ(cx, cy, 4, { fill: COL.g });
  s += arc(cx, cy, 34, 2, 32, { c: 'v', w: 2, me: 'v' }) + tx(cx + 48, cy - 30, 'τ', { fs: 11, c: 'v' });
  s += tx(18, 210, 'θ = 0：稳定平衡，U = −μB', { fs: 8.8, it: false, c: 'a' });
  s += tx(18, 226, 'θ = 180°：不稳定平衡，U = +μB', { fs: 8.8, it: false, c: 'f' });
  s += tx(18, 244, '阻尼后小磁针沿 B 停下，N 极指向 B。 · Damping settles the needle along B, with N toward B.', { fs: 7.6, it: false, c: 'm' });
  s += tx(240, 44, '转矩最大：θ = 90°', { fs: 9, it: false, c: 'v' });
  s += eq(240, 88, ['τ = μB sin θ'], { fs: 10.5 });
  s += eq(240, 132, ['U = −μB cos θ'], { fs: 10.5 });
  s += tx(240, 174, '稳定 · stable', { fs: 8.4, it: false, c: 'a' }) + arr(300, 184, 300, 204, 'B', 1.2) + tx(306, 198, 'B', { fs: 8, c: 'B' });
  s += tx(240, 224, '不稳定 · unstable', { fs: 8.4, it: false, c: 'f' }) + arr(300, 234, 300, 214, 'v', 1.2) + tx(306, 228, 'μ', { fs: 8, c: 'v' });
  return s;
});
def('em-u12-moving-charge-field', '单个运动电荷的磁场 · Magnetic field of a single moving charge', '\\vec B=\\dfrac{\\mu_0}{4\\pi}\\dfrac{q\\vec v\\times\\hat r}{r^{2}}', () => {
  const qx = 92, qy = 142, px = 274, py = 82;
  let s = arr(qx, qy, qx + 86, qy, 'v', 2.2) + tx(qx + 88, qy + 14, 'v', { fs: 12, c: 'v' });
  s += circ(qx, qy, 8, { fill: COL.E, c: 'E', op: 0.65 }) + tx(qx, qy + 4, '+q', { anchor: 'middle', fs: 8.4, it: false });
  s += ln(qx, qy, px, py, { c: 'm', w: 1.2, dash: '4 3' }) + tx((qx + px) / 2 + 4, (qy + py) / 2 - 4, 'r', { fs: 11 });
  s += arc(qx, qy, 48, 0, 19, { c: 'm', w: 1.1 }) + tx(qx + 52, qy - 10, 'θ', { fs: 10 });
  s += dotB(px, py, 8, 'B') + tx(px + 12, py - 4, 'B ⊙', { fs: 10, c: 'B' });
  s += tx(px - 8, py + 24, 'P', { fs: 10 });
  s += tx(20, 32, 'B ⊥ v 且 B ⊥ r；B 绕速度轴成同心圆。 · B is perpendicular to v and r; field lines circle the velocity axis.', { fs: 8.2, it: false, c: 'B' });
  s += tx(20, 54, 'θ = 0° 或 180°：B = 0；θ = 90°：B 最大。 · B = 0 on the axis; maximum at 90°.', { fs: 8.2, it: false });
  s += eq(220, 160, ['B = ', { n: 'μ₀', d: '4π' }, { n: '|q|v sin θ', d: 'r^{2}' }], { fs: 10.5 });
  s += tx(220, 206, 'r 加倍 → B 变为四分之一', { fs: 8.6, it: false, c: 'a' });
  s += tx(220, 222, '负电荷 → B 反向', { fs: 8.6, it: false, c: 'f' });
  s += tx(220, 238, 'v ≪ c 的非相对论近似。 · Nonrelativistic limit v ≪ c.', { fs: 7.4, it: false, c: 'm' });
  return s;
});
def('em-u12-current-element-circles', '电流元周围的同心圆磁场 · Concentric magnetic field around a current element', 'd\\vec B=\\dfrac{\\mu_0}{4\\pi}\\dfrac{I\\,d\\vec\\ell\\times\\hat r}{r^{2}},\\qquad dB=\\dfrac{\\mu_0}{4\\pi}\\dfrac{I\\,d\\ell\\sin\\theta}{r^{2}}', () => {
  const cx = 120, cy = 126;
  let s = dotB(cx, cy, 9, 'I') + tx(cx, cy + 28, 'I dℓ ⊙', { anchor: 'middle', fs: 9, c: 'I' });
  for (const r of [34, 58, 82]) {
    s += circ(cx, cy, r, { c: 'B', w: 1.3 });
    for (const a of [35, 215]) s += arr(...pt(cx, cy, r, a), ...pt(cx, cy, r, a + 12), 'B', 1.4);
  }
  const [px, py] = pt(cx, cy, 58, 40);
  s += ln(cx, cy, px, py, { c: 'm', w: 1, dash: '3 3' }) + tx(px - 18, py + 18, 'r', { fs: 10 });
  s += tx(px + 10, py - 10, 'dB', { fs: 9.5, c: 'B' });
  s += tx(20, 30, '场线与圆相切：无径向、无沿导线分量。 · Field vectors are tangent: no radial or along-wire component.', { fs: 8, it: false, c: 'B' });
  s += tx(20, 48, '轴线上 dB = 0。 · On the element axis, dB = 0.', { fs: 8, it: false });
  s += eq(220, 92, ['dB = ', { n: 'μ₀', d: '4π' }, { n: 'I dℓ sin θ', d: 'r^{2}' }], { fs: 10 });
  s += tx(220, 144, 'θ = 90°：dB 最大', { fs: 8.4, it: false, c: 'a' });
  s += tx(220, 160, '电流反向 → dB 反向', { fs: 8.4, it: false, c: 'f' });
  s += tx(220, 176, '圆以导线为中心', { fs: 8.4, it: false });
  s += tx(220, 198, '轴线特例 · axis case:', { fs: 8.2, it: false, c: 'm' });
  s += ln(300, 214, 300, 244, { w: 2.2 }) + tx(308, 232, 'dB = 0', { fs: 8.4, it: false, c: 'm' });
  s += tx(220, 252, 'Current element along the z axis; field circles close around it.', { fs: 7, it: false, c: 'm' });
  return s;
});
def('em-u12-parallel-wire-superposition', '平行双导线磁场叠加 · Superposition of fields from two parallel wires', '\\vec B_{\\mathrm{net}}=\\vec B_1+\\vec B_2,\\qquad B_i=\\dfrac{\\mu_0I_i}{2\\pi r_i}', () => {
  const wires = (y0, opposite) => {
    let o = tx(20, y0 - 22, opposite ? '反向电流 · opposite currents' : '同向电流 · same-direction currents', { it: false, fs: 8.6, c: opposite ? 'f' : 'a' });
    o += dotB(96, y0, 7, 'I') + (opposite ? crossB(286, y0, 7, 'I') : dotB(286, y0, 7, 'I'));
    o += ln(40, y0, 78, y0, { c: 'I', w: 1.6 }) + ln(314, y0, 352, y0, { c: 'I', w: 1.6 });
    o += tx(96, y0 + 22, 'I₁', { anchor: 'middle', fs: 8.4, c: 'I' }) + tx(286, y0 + 22, 'I₂', { anchor: 'middle', fs: 8.4, c: 'I' });
    o += ln(96, y0, 286, y0, { c: 'm', w: 0.9, dash: '3 3' }) + tx(191, y0 - 6, 'd', { anchor: 'middle', fs: 8.4 });
    if (!opposite) {
      o += arr(178, y0 - 26, 178, y0 - 2, 'B', 1.6) + arr(204, y0 - 2, 204, y0 - 26, 'B', 1.6);
      o += tx(191, y0 - 38, 'B₁ + B₂ = 0', { anchor: 'middle', fs: 8.2, it: false, c: 'B' });
      o += arr(40, y0 - 26, 40, y0 - 2, 'B', 1.5) + arr(52, y0 + 8, 52, y0 + 32, 'B', 1.5);
      o += tx(46, y0 + 46, '外侧增强', { anchor: 'middle', fs: 7.6, it: false });
    } else {
      o += arr(178, y0 - 26, 178, y0 - 2, 'B', 1.6) + arr(204, y0 - 2, 204, y0 - 26, 'B', 1.6);
      o += tx(191, y0 - 38, '中间增强', { anchor: 'middle', fs: 8.2, it: false, c: 'B' });
      o += arr(40, y0 - 26, 40, y0 - 2, 'B', 1.5) + arr(52, y0 + 8, 52, y0 + 32, 'B', 1.5);
      o += tx(46, y0 + 46, '外侧可能为零', { anchor: 'middle', fs: 7.6, it: false });
    }
    return o;
  };
  let s = wires(70, false) + wires(184, true);
  s += tx(20, 246, '同向：中间相消、外侧增强；反向：中间增强、外侧相消。 · Same direction: cancel between, add outside; opposite: add between, cancel outside.', { fs: 7.4, it: false, c: 'm' });
  return s;
});
def('em-u12-two-wire-zero-point', '双导线磁场零点 · Zero-field point of two parallel wires', '\\dfrac{I_1}{r_1}=\\dfrac{I_2}{r_2}\\quad\\Longrightarrow\\quad B_{\\mathrm{net}}=0', () => {
  const row = (y0, opposite) => {
    let o = tx(20, y0 - 26, opposite ? '反向：零点在较小电流外侧 · opposite: outside the smaller current' : '同向：零点在两线之间 · same direction: between the wires', { it: false, fs: 8.2, c: opposite ? 'f' : 'a' });
    o += ln(46, y0, 354, y0, { w: 1.2 });
    o += dotB(132, y0, 7, 'I') + (opposite ? crossB(282, y0, 7, 'I') : dotB(282, y0, 7, 'I'));
    o += tx(132, y0 + 20, 'I₁', { anchor: 'middle', fs: 8, c: 'I' }) + tx(282, y0 + 20, 'I₂', { anchor: 'middle', fs: 8, c: 'I' });
    o += ln(132, y0, 282, y0, { c: 'm', w: 0.9, dash: '3 3' }) + tx(207, y0 - 6, 'd', { anchor: 'middle', fs: 8 });
    const zx = opposite ? 58 : 207;
    o += circ(zx, y0, 7, { fill: COL.a, c: 'a', op: 0.4 }) + tx(zx, y0 + 24, 'B = 0', { anchor: 'middle', fs: 8, c: 'a' });
    if (!opposite) {
      o += tx(169, y0 - 6, 'r₁', { fs: 7.4, c: 'm', anchor: 'middle' }) + tx(245, y0 - 6, 'r₂', { fs: 7.4, c: 'm', anchor: 'middle' });
    } else {
      o += tx(95, y0 - 6, 'r₁', { fs: 7.4, c: 'm', anchor: 'middle' }) + tx(170, y0 - 6, 'r₂', { fs: 7.4, c: 'm', anchor: 'middle' });
    }
    return o;
  };
  let s = row(68, false) + row(186, true);
  s += tx(20, 244, '零点：I₁ ÷ r₁ = I₂ ÷ r₂；反向电流无中间零点。', { fs: 7.4, it: false, c: 'm' });
  return s;
});

def('em-u13-induced-e-changing-b', '变化磁场诱导的环形电场 · Induced circular electric field from a changing magnetic field', '\\oint\\vec E\\cdot d\\vec l=-\\dfrac{d\\Phi_B}{dt},\\qquad E(r)=\\dfrac{r}{2}\\left|\\dfrac{dB}{dt}\\right|\\;(r\\le R)', () => {
  const cx = 112, cy = 126, R = 72;
  let s = circ(cx, cy, R, { fill: COL.B, op: 0.08, c: 'B', w: 1.4 });
  for (let x = cx - 56; x <= cx + 56; x += 28) for (let y = cy - 56; y <= cy + 56; y += 28) {
    if ((x - cx) ** 2 + (y - cy) ** 2 < (R - 8) ** 2) s += crossB(x, y, 3.4);
  }
  for (const r of [30, 50, 70]) {
    s += circ(cx, cy, r, { c: 'E', w: 1.5 });
    for (const a of [20, 140, 260]) s += arr(...pt(cx, cy, r, a), ...pt(cx, cy, r, a + 14), 'E', 1.6);
  }
  s += tx(cx, cy - R - 10, 'B ⊗ 增大 · increasing', { anchor: 'middle', fs: 8.6, it: false, c: 'B' });
  s += tx(cx, cy + R + 18, 'E 逆时针 · CCW', { anchor: 'middle', fs: 8.6, it: false, c: 'E' });
  s += tx(20, 24, '即使没有导线，变化磁场也在空间产生感应电场。 · A changing B produces E even with no wire present.', { fs: 7.8, it: false, c: 'm' });
  const g = graph(232, 52, 136, 104, { fns: [{ f: (x) => (x <= 0.7 ? x / 0.7 : 0.7 / x), c: 'E' }], t1: 1.6, ymin: 0, ymax: 1.2, xl: 'r', yl: 'E', vmarks: [{ t: 0.7, label: 'R' }] });
  s += g.s;
  s += tx(232, 174, '内部线性 · linear inside', { fs: 7.8, it: false, c: 'E' });
  s += tx(232, 190, '外部按 1 ÷ r · 1/r outside', { fs: 7.8, it: false, c: 'E' });
  s += eq(232, 218, ['E = ', { n: 'R^{2}', d: '2r' }, '|dB/dt|'], { fs: 9.4 });
  s += eq(232, 242, ['E = ', { n: 'r', d: '2' }, '|dB/dt|'], { fs: 9.4 });
  return s;
});
def('em-u13-static-vs-induced-e', '静电场与感应电场的比较 · Electrostatic versus induced electric fields', '\\oint\\vec E_{\\mathrm{static}}\\cdot d\\vec l=0,\\qquad \\oint\\vec E_{\\mathrm{induced}}\\cdot d\\vec l=-\\dfrac{d\\Phi_B}{dt}', () => {
  let s = tx(18, 16, '静电场 · electrostatic', { it: false, fs: 9, c: 'f' });
  s += circ(56, 76, 7, { fill: COL.f, c: 'f', op: 0.6 }) + tx(56, 79, '+', { anchor: 'middle', fs: 8, it: false });
  s += circ(136, 76, 7, { fill: COL.E, c: 'E', op: 0.6 }) + tx(136, 79, '−', { anchor: 'middle', fs: 8, it: false });
  for (const y of [62, 76, 90]) {
    s += pathD(`M62,${y} C80,${y - 12} 112,${y - 12} 130,${y}`, { c: 'f', w: 1.2, me: 'f' });
  }
  s += tx(18, 110, '场线起于 +、止于 −', { fs: 7.8, it: false });
  s += tx(18, 126, '∮E·dl = 0；有标量势 V。', { fs: 7.8, it: false, c: 'a' });
  s += circ(100, 152, 26, { c: 'v', w: 1.2, dash: '3 3' }) + tx(100, 156, 'closed', { anchor: 'middle', fs: 6.8, it: false, c: 'v' });
  s += tx(206, 16, '感应电场 · induced', { it: false, fs: 9, c: 'B' });
  s += circ(286, 78, 42, { fill: COL.B, op: 0.08, c: 'B', w: 1.3 });
  for (const x of [262, 286, 310]) for (const y of [58, 78, 98]) s += crossB(x, y, 3.2);
  for (const r of [24, 38]) {
    s += circ(286, 78, r, { c: 'E', w: 1.3 });
    for (const a of [30, 150, 270]) s += arr(...pt(286, 78, r, a), ...pt(286, 78, r, a + 16), 'E', 1.4);
  }
  s += tx(206, 130, '场线闭合，无起点终点', { fs: 7.8, it: false });
  s += tx(206, 146, '∮E·dl = −dΦ_B/dt ≠ 0', { fs: 7.8, it: false, c: 'B' });
  s += tx(206, 162, '无全局标量势 · nonconservative', { fs: 7.8, it: false, c: 'B' });
  s += tx(18, 188, '比较 · comparison', { it: false, fs: 8.6 });
  s += tx(18, 204, '源：电荷 vs 变化磁场 · source: charge vs changing B', { fs: 7.4, it: false });
  s += tx(18, 218, '场线：起止 vs 闭合 · topology: start/end vs closed', { fs: 7.4, it: false });
  s += tx(18, 232, '绕闭合路径做功：0 vs qε · work around loop: 0 vs qε', { fs: 7.4, it: false });
  s += tx(18, 246, '电势：存在 vs 不存在 · potential: exists vs none', { fs: 7.4, it: false });
  return s;
});

def('em-u13-loop-entering-field', '线框进入、完全处于与离开磁场 · Loop entering, fully inside, and leaving a field region', '\\Phi_B=\\int\\vec B\\cdot d\\vec A,\\qquad \\varepsilon=-\\dfrac{d\\Phi_B}{dt},\\qquad F_B=ILB', () => {
  const panel = (x0, label, stage) => {
    let o = tx(x0, 14, label, { it: false, fs: 9, c: stage === 2 ? 'a' : 'v' });
    o += rect(x0 + 6, 26, 98, 92, { fill: COL.B, op: 0.07, c: 'm', dash: '5 4', w: 1.1 });
    for (let x = x0 + 16; x <= x0 + 96; x += 20) for (let y = 38; y <= 108; y += 22) o += crossB(x, y, 3.4);
    const lx = stage === 1 ? x0 - 12 : stage === 2 ? x0 + 20 : x0 + 56;
    const rx = lx + 66;
    o += rect(lx, 38, 66, 68, { fill: 'none', w: 2 });
    if (stage === 1) {
      o += arr(rx, 100, rx, 44, 'I', 1.8) + tx(rx + 4, 76, 'I', { c: 'I', fs: 9 });
      o += arr(rx, 74, rx - 24, 74, 'f', 2) + tx(rx - 26, 68, 'F_B', { c: 'f', fs: 9, anchor: 'end' });
      o += tx(x0, 132, '前边受力 · leading side', { fs: 7.6, it: false, c: 'f' });
    } else if (stage === 2) {
      o += tx(x0 + 49, 132, 'I = 0，F = 0', { fs: 7.8, it: false, c: 'a', anchor: 'middle' });
    } else {
      o += arr(lx, 100, lx, 44, 'I', 1.8) + tx(lx + 4, 76, 'I', { c: 'I', fs: 9 });
      o += arr(lx, 74, lx - 24, 74, 'f', 2) + tx(lx - 26, 68, 'F_B', { c: 'f', fs: 9, anchor: 'end' });
      o += tx(x0 + 49, 132, '后边受力 · trailing side', { fs: 7.6, it: false, c: 'f', anchor: 'middle' });
    }
    return o;
  };
  let s = panel(14, '进入 · entering', 1) + panel(140, '完全在场内 · fully inside', 2) + panel(266, '离开 · leaving', 3);
  s += tx(14, 150, '只有场区内线段受力；进入与离开时磁阻力都向后。 · Only in-field segments feel force; drag points backward both entering and leaving.', { fs: 7.4, it: false, c: 'm' });
  const g = graph(56, 168, 300, 54, { fns: [
    { f: (t) => (t < 1 ? 0.55 * t : t < 2 ? 0.55 : 0.55 * (3 - t)), c: 'B', w: 1.8 },
    { f: (t) => (t < 1 ? 0.28 : t < 2 ? 0 : -0.28), c: 'I', w: 1.6 },
    { f: (t) => (t < 1 || t >= 2 ? -0.42 : 0), c: 'f', w: 1.6, dash: '4 3' },
  ], t1: 3, ymin: -0.55, ymax: 0.7, xl: 'x', yl: '', vmarks: [{ t: 1, label: '边界' }, { t: 2, label: '边界' }] });
  s += g.s;
  s += tx(56, 252, 'Φ_B（紫）先增后减；ε、I（棕）换向；F_B（橙虚线）始终向后。 · Φ_B rises then falls; ε and I reverse; F_B always opposes motion.', { fs: 7.1, it: false, c: 'm' });
  return s;
});
def('em-u13-sliding-bar-terminal', '滑杆磁阻力与终端速度 · Sliding bar: magnetic drag and terminal speed', '\\varepsilon=BLv,\\qquad I=\\dfrac{BLv}{R},\\qquad F_B=\\dfrac{B^{2}L^{2}v}{R},\\qquad v_t=\\dfrac{F_{\\mathrm{app}}R}{B^{2}L^{2}}', () => {
  let s = tx(16, 14, '滑杆：磁阻力随速度增大，达到终端速度 · drag grows with speed until terminal speed', { fs: 8.2, it: false });
  s += rect(24, 30, 210, 92, { fill: COL.B, op: 0.07, c: 'm', dash: '5 4', w: 1.1 });
  for (let x = 36; x <= 222; x += 24) for (let y = 42; y <= 110; y += 24) s += crossB(x, y, 3.4);
  s += ln(30, 52, 236, 52, { w: 2 }) + ln(30, 112, 236, 112, { w: 2 });
  s += ln(168, 52, 168, 112, { w: 3.4, c: 'I' });
  s += arr(168, 104, 168, 60, 'I', 1.8) + tx(174, 84, 'I', { c: 'I', fs: 9 });
  s += arr(150, 52, 90, 52, 'I', 1.5) + tx(120, 46, 'I', { c: 'I', fs: 8.5 });
  s += arr(186, 112, 246, 112, 'I', 1.5) + tx(216, 126, 'I', { c: 'I', fs: 8.5 });
  s += arr(168, 82, 222, 82, 'a', 2.2) + tx(226, 86, 'F_app', { c: 'a', fs: 9, anchor: 'start' });
  s += arr(168, 82, 116, 82, 'f', 2.2) + tx(112, 76, 'F_B', { c: 'f', fs: 9, anchor: 'end' });
  s += arr(188, 140, 238, 140, 'v', 2) + tx(242, 144, 'v', { c: 'v', fs: 9, anchor: 'start' });
  s += tx(24, 156, 'B ⊗ 恒定 · steady', { fs: 7.8, it: false, c: 'B' });
  const g1 = graph(258, 32, 120, 64, { fns: [{ f: (t) => 1 - Math.exp(-2.2 * t), c: 'v', w: 2 }], t1: 3, ymin: 0, ymax: 1.3, xl: 't', yl: 'v', hmarks: [{ v: 1, label: 'v_t' }], vmarks: [{ t: 0.45, label: 'τ' }] });
  s += g1.s + tx(258, 116, 'v(t) = v_t(1 − e^{−t/τ})', { fs: 8.2, it: false, c: 'v' });
  const g2 = graph(258, 142, 120, 56, { fns: [{ f: (t) => t, c: 'f', w: 2 }], t1: 1.2, ymin: 0, ymax: 1.2, xl: 'v', yl: 'F_B' });
  s += g2.s + tx(258, 214, 'F_B = (B²L²/R) v', { fs: 8.2, it: false, c: 'f' });
  s += eq(16, 190, ['v_t = ', { n: 'F_app R', d: 'B²L²' }], { fs: 12 });
  s += eq(16, 220, ['τ = ', { n: 'mR', d: 'B²L²' }], { fs: 12 });
  s += tx(16, 248, 'a = 0 时达到 v_t；撤去外力后 v = v₀e^{−t/τ}。 · At a = 0 the bar reaches v_t; after removing F_app, v decays exponentially.', { fs: 7.2, it: false, c: 'm' });
  return s;
});
def('em-u13-force-torque-distribution', '受力段、净力与磁力矩分布 · Force-bearing segments, net force, and magnetic torque', '\\vec F_{\\mathrm{net}}=\\sum_i I\\vec L_i\\times\\vec B,\\qquad \\vec\\tau=\\sum_i\\vec r_i\\times\\vec F_i=\\vec\\mu\\times\\vec B', () => {
  let s = tx(12, 14, '部分在场内：逐段受力 · partly inside', { it: false, fs: 8, c: 'v' });
  s += rect(22, 30, 98, 110, { fill: COL.B, op: 0.07, c: 'm', dash: '5 4', w: 1.1 });
  for (let x = 34; x <= 110; x += 20) for (let y = 42; y <= 128; y += 22) s += crossB(x, y, 3.2);
  s += rect(78, 48, 100, 84, { fill: 'none', w: 2 });
  s += ln(78, 48, 78, 132, { c: 'f', w: 3.2 }) + ln(78, 48, 120, 48, { c: 'f', w: 3.2 }) + ln(78, 132, 120, 132, { c: 'f', w: 3.2 });
  s += arr(78, 88, 48, 88, 'f', 2.2) + tx(46, 82, 'F_left', { c: 'f', fs: 8, anchor: 'end' });
  s += arr(99, 48, 99, 24, 'f', 1.7) + tx(104, 30, 'F_top', { c: 'f', fs: 7.6 });
  s += arr(99, 132, 99, 156, 'f', 1.7) + tx(104, 156, 'F_bottom', { c: 'f', fs: 7.6 });
  s += circ(128, 90, 3.5, { fill: 'currentColor' }) + tx(132, 104, 'CM', { fs: 7.6, it: false });
  s += arr(128, 90, 98, 90, 'a', 2) + tx(96, 102, 'F_net', { c: 'a', fs: 8, anchor: 'end' });
  s += tx(12, 154, '净力来自左侧边；上下边力相消。 · Net force from the left side; top and bottom forces cancel.', { fs: 7.1, it: false, c: 'm' });

  s += tx(208, 14, '全在场内：F_net = 0，τ ≠ 0 · fully inside', { it: false, fs: 7.8, c: 'B' });
  s += rect(212, 28, 176, 116, { fill: COL.B, op: 0.07, c: 'm', dash: '5 4', w: 1.1 });
  for (let x = 224; x <= 376; x += 22) for (let y = 40; y <= 132; y += 24) s += crossB(x, y, 3.2);
  const cx = 298, cy = 86, ang = 28, hw = 46, hh = 28;
  const rot = (px, py) => [cx + px * Math.cos(rad(ang)) - py * Math.sin(rad(ang)), cy + px * Math.sin(rad(ang)) + py * Math.cos(rad(ang))];
  const q1 = rot(-hw, -hh), q2 = rot(hw, -hh), q3 = rot(hw, hh), q4 = rot(-hw, hh);
  s += poly([q1, q2, q3, q4, q1], { fill: COL.I, op: 0.06, c: 'I', w: 2.2 });
  s += arr(q1[0], q1[1], q2[0], q2[1], 'I', 1.6) + arr(q3[0], q3[1], q4[0], q4[1], 'I', 1.6);
  const ux = Math.cos(rad(ang)), uy = Math.sin(rad(ang));
  const fx = uy, fy = -ux;
  const m1 = [(q1[0] + q2[0]) / 2, (q1[1] + q2[1]) / 2], m2 = [(q3[0] + q4[0]) / 2, (q3[1] + q4[1]) / 2];
  s += arr(m1[0], m1[1], m1[0] + fx * 30, m1[1] + fy * 30, 'f', 2.1) + tx(m1[0] + fx * 34, m1[1] + fy * 34, 'F', { c: 'f', fs: 9 });
  s += arr(m2[0], m2[1], m2[0] - fx * 30, m2[1] - fy * 30, 'f', 2.1) + tx(m2[0] - fx * 34, m2[1] - fy * 34, 'F', { c: 'f', fs: 9 });
  s += arc(cx, cy, 38, 20, 160, { c: 'a', w: 1.6, me: 'a' }) + tx(cx + 34, cy - 28, 'τ', { c: 'a', fs: 11 });
  s += tx(cx, cy + 6, 'μ', { c: 'I', fs: 10, it: false });
  s += eq(12, 190, ['F_net = Σ I L_i × B'], { fs: 11 });
  s += eq(12, 216, ['τ = Σ r_i × F_i = μ × B'], { fs: 11 });
  s += tx(12, 244, '只有场区内线段受力；净力为零不代表力矩为零。 · Only in-field segments feel force; zero net force does not imply zero torque.', { fs: 7.2, it: false, c: 'm' });
  return s;
});

/* ======================= openly licensed reference media ======================= */
defImg('atwood-apparatus', '阿特伍德机装置图（参考） · Atwood machine apparatus (reference)', 'a=\\dfrac{(m_2-m_1)g}{m_1+m_2}', 'modules/physics/media/atwood-machine.svg', 'MikeRun / Wikimedia Commons / CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:Atwood-machine.svg');
defImg('pendulum-apparatus', '单摆装置图（参考） · Simple pendulum apparatus (reference)', 'T=2\\pi\\sqrt{\\dfrac{L}{g}}', 'modules/physics/media/simple-pendulum.svg', 'Chetvorno / Wikimedia Commons / Public domain', 'https://commons.wikimedia.org/wiki/File:Simple_gravity_pendulum.svg');
defImg('field-lines-equipotentials', '点电荷电场线与等势面（参考） · Point-charge field lines and equipotentials (reference)', 'E=k\\dfrac{q}{r^2},\\; V=k\\dfrac{q}{r}', 'modules/physics/media/field-lines-equipotentials.svg', 'Sjlegg / Wikimedia Commons / Public domain', 'https://commons.wikimedia.org/wiki/File:Electric_field_point_lines_equipotentials.svg');
defImg('cathode-ray-tube', '阴极射线管示意图（参考） · Cathode-ray tube schematic (reference)', 'r=\\dfrac{mv}{|q|B}', 'modules/physics/media/cathode-ray-tube.svg', 'Interiot, Theresa Knott / Wikimedia Commons / CC BY-SA 3.0', 'https://commons.wikimedia.org/wiki/File:Cathode_ray_tube_diagram-en.svg');

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
  'rc-circuit': ['circuit-series', 'circuit-parallel', 'circuit-kirchhoff', 'power-series-parallel', 'kirchhoff-loop-signs', 'kirchhoff-junction', 'rc-circuit', 'rc-charging', 'rc-discharging', 'rc-energy'],
  'charged-particle-B': ['wire-field', 'loop-field', 'solenoid-field', 'ampere-wire', 'ampere-thick-wire', 'particle-in-B', 'magnetic-force-rhr', 'cathode-ray-tube', 'biot-savart', 'velocity-selector', 'mass-spectrometer'],
  'faraday-induction': ['faraday-rod', 'faraday-changing-B', 'rl-circuit', 'lc-circuit', 'magnetic-flux-angle', 'flux-emf-graph', 'inductor-energy', 'lc-energy'],
};
export const FIGURES = F;
export const FIGURE_IDS = Object.keys(F);

/** Render one figure as an SVG string (fixed viewBox; scales down only via its container). */
export function renderFigureSVG(id, params) {
  const f = F[id]; if (!f) return '';
  if (f.img) {
    return `<img src="${esc(f.img)}" alt="${esc(f.title)}" loading="eager" decoding="async" style="display:block;width:100%;height:100%;object-fit:contain;background:#fff">`;
  }
  P = 'xf-' + id;
  const state = f.controls ? { ...defaultParams(f), ...(params || {}) } : {};
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${VW} ${VH}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="${esc(f.title)}" style="display:block;width:100%;height:100%;color:var(--text, #222);overflow:hidden">${markers()}${PART_CSS}${f.draw(state)}</svg>`;
}

/** Topic id (mech/…/code or chapterId:code) → relevant exam figure ids. */
export const TOPIC_FIGURES = {
  'mech/mech-prep-hs/P1.1': ['vector-components', 'projectile'],
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
  'mech/mech-prep-hs/P1.13': ['wave-properties', 'standing-wave', 'shm-graphs'],
  'mech/mech-prep-hs/P1.14': ['coulomb-force', 'point-charge-field', 'potential-point-charge'],
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
  'mech/mech-prep-math/P3.1': ['vector-components', 'projectile'],
  'mech/mech-prep-math/P3.2': ['kin-graphs', 'shm-graphs'],
  'mech/mech-prep-math/P3.3': ['force-position', 'impulse-graph'],
  'mech/mech-prep-math/P3.4': ['rc-charging', 'rc-discharging', 'shm-graphs'],
  'mech/mech-prep-math/P3.5': ['pendulum-simple', 'shm-graphs', 'pendulum-period'],
  'mech/mech-u1/1.1': ['kin-graphs', 'motion-diagram', 'free-fall', 'two-observer-frames', 'point-object-model', 'position-displacement-axis', 'nonuniform-integration'],
  'mech/mech-u1/1.2': ['projectile', 'kin-graphs', 'projectile-range', 'vector-arrow-model', 'two-observer-frames', 'boat-river', 'nonuniform-components', 'trajectory-3d'],
  'mech/mech-u2/2.1': ['center-of-mass', 'system-external-force', 'point-vs-rigid-model', 'nonuniform-rod-cm'],
  'mech/mech-u2/2.2': ['system-external-force', 'explosion', 'momentum-bars', 'system-internal-interactions', 'open-system-mass-energy'],
  'mech/mech-u2/2.3': ['incline-frictionless', 'incline-kinetic', 'atwood', 'table-pulley', 'elevator', 'friction-graph', 'fbd-center-of-mass', 'ideal-string-tension'],
  'mech/mech-u2/2.4': ['banked-frictionless', 'banked-friction', 'conical-pendulum', 'vertical-loop', 'flat-curve', 'circular-vectors', 'circular-accel-vector-sum'],
  'mech/mech-u2/2.5': ['atwood', 'table-pulley', 'atwood-apparatus', 'contact-force-atomic'],
  'mech/mech-u2/2.6': ['orbit', 'conical-pendulum', 'kepler-ellipse', 'gravitational-potential', 'orbit-energy', 'solid-sphere-f-r', 'elevator-apparent-weight', 'shell-vs-solid-sphere', 'inertial-vs-gravitational-mass', 'gravity-field-model', 'gravity-mass-element-superposition'],
  'mech/mech-u2/2.7': ['drag-terminal'],
  'mech/mech-u2/2.8': ['spring-ideal-nonlinear', 'springs-series-parallel', 'spring-substructure-external-variable'],
  'mech/mech-u3/3.1': ['force-position', 'vertical-loop', 'energy-bars', 'work-incline', 'work-angle'],
  'mech/mech-u3/3.2': ['force-position', 'work-angle', 'multi-body-potential', 'single-vs-multi-object-energy'],
  'mech/mech-u3/3.3': ['force-position', 'vertical-loop', 'energy-bars'],
  'mech/mech-u3/3.4': ['power-graph'],
  'mech/mech-u3/3.5': ['work-variable-potential', 'force-position'],
  'mech/mech-u4/4.1': ['impulse-graph', 'momentum-graph', 'momentum-bars'],
  'mech/mech-u4/4.2': ['collision-elastic', 'collision-inelastic', 'collision-2d', 'ballistic-pendulum', 'momentum-bars', 'explosion'],
  'mech/mech-u5/5.1': ['ladder', 'rod-pivot', 'seesaw', 'rigid-force-diagram-vs-fbd', 'translational-vs-rotational-equilibrium'],
  'mech/mech-u5/5.2': ['rolling-velocity', 'angular-graphs', 'tangential-radial-acceleration'],
  'mech/mech-u5/5.3': ['rod-pivot', 'disk-string', 'rolling-incline', 'moment-of-inertia', 'rolling-race', 'angular-momentum-skater', 'torque-angle-area'],
  'mech/mech-u6/6.1': ['rolling-incline', 'disk-string', 'rolling-race', 'rotational-ke-elements'],
  'mech/mech-u6/6.2': ['disk-string', 'rod-pivot', 'angular-momentum-skater', 'torque-time-area', 'angular-momentum-slope', 'system-angular-momentum', 'system-boundary-torque'],
  'mech/mech-u6/6.3': ['rolling-incline', 'rolling-velocity', 'rolling-race'],
  'mech/mech-u6/6.4': ['orbit', 'orbit-energy', 'orbit-energy-compare'],
  'mech/mech-u7/7.1': ['shm-horizontal', 'shm-vertical', 'shm-graphs', 'shm-energy', 'shm-phase', 'shm-resonance', 'shm-ode'],
  'mech/mech-u7/7.2': ['pendulum-simple', 'shm-graphs', 'pendulum-period', 'pendulum-apparatus'],
  'mech/mech-u7/7.3': ['pendulum-physical', 'shm-graphs', 'physical-pendulum-fbd', 'torsion-pendulum'],
  'em/em-prep-found/P1.1': ['point-charge-field', 'coulomb-force'],
  'em/em-prep-found/P1.2': ['point-charge-field', 'dipole-field', 'field-vectors', 'field-lines-equipotentials'],
  'em/em-prep-found/P1.3': ['parallel-plate-potential', 'point-charge-field', 'potential-energy-sign', 'potential-point-charge'],
  'em/em-prep-found/P1.4': ['capacitor-plate', 'capacitor-dielectric', 'capacitor-combinations', 'capacitor-energy'],
  'em/em-prep-found/P1.5': ['circuit-series', 'circuit-parallel', 'circuit-kirchhoff', 'circuit-equivalent', 'ammeter-voltmeter'],
  'em/em-prep-found/P1.6': ['wire-field', 'particle-in-B', 'magnetic-force-rhr', 'cathode-ray-tube'],
  'em/em-prep-found/P1.7': ['faraday-rod', 'faraday-changing-B', 'magnetic-flux-angle', 'flux-emf-graph'],
  'em/em-prep-found/P1.8': ['gauss-sphere', 'gauss-cylinder', 'gauss-plane', 'flux-angle', 'gauss-shell', 'line-charge'],
  'em/em-prep-found/P1.9': ['point-charge-field', 'potential-point-charge', 'gauss-sphere'],
  'em/em-u8/8.1': ['point-charge-field', 'coulomb-force'],
  'em/em-u8/8.2': ['point-charge-field', 'dipole-field', 'field-vectors', 'field-lines-equipotentials'],
  'em/em-u8/8.3': ['point-charge-field', 'dipole-field', 'field-superposition', 'field-lines-equipotentials'],
  'em/em-u8/8.4': ['gauss-sphere', 'gauss-cylinder', 'gauss-plane', 'flux-angle'],
  'em/em-u8/8.5': ['gauss-sphere', 'gauss-cylinder', 'gauss-plane', 'gauss-conductor', 'gauss-shell', 'line-charge'],
  'em/em-u8/8.6': ['charge-properties-conservation', 'em-u8-induced-charge-separation', 'em-u8-conductor-insulator-charging', 'coulomb-force', 'point-charge-field', 'dipole-field', 'field-superposition', 'flux-angle', 'gauss-sphere', 'gauss-cylinder', 'gauss-plane'],
  'em/em-u8/8.7': ['em-u8-rod-integration', 'em-u8-ring-axis', 'em-u8-disk-plane', 'em-u8-arc-line', 'field-superposition'],
  'em/em-u8/8.8': ['em-u8-force-direction-pairs', 'em-force-ratio', 'neutral-matter', 'coulomb-force', 'point-charge-field'],
  'em/em-u8/8.9': ['em-u8-dielectric-polarization', 'em-u8-permittivity-materials', 'em-u8-conductor-insulator-response'],
  'em/em-u8/8.10': ['insulator-sphere-E', 'gauss-conductor', 'gauss-sphere', 'nonuniform-insulator', 'conductor-vs-insulator'],
  'em/em-u8/8.11': ['charge-density-shell', 'gauss-sphere', 'gauss-cylinder', 'nonuniform-insulator'],
  'em/em-u9/9.1': ['parallel-plate-potential', 'point-charge-field', 'potential-energy-sign'],
  'em/em-u9/9.2': ['parallel-plate-potential', 'potential-point-charge'],
  'em/em-u9/9.3': ['parallel-plate-potential', 'point-charge-field', 'potential-point-charge', 'field-lines-equipotentials'],
  'em/em-u9/9.4': ['parallel-plate-potential', 'charge-in-field'],
  'em/em-u9/9.5': ['multi-charge-potential', 'potential-slope-field', 'equipotentials-particle-energy', 'three-charge-pairwise', 'pairwise-double-counting', 'potential-point-charge'],
  'em/em-u9/9.6': ['battery-chemical-emf', 'battery-terminal-voltage', 'potential-point-charge', 'parallel-plate-potential'],
  'em/em-u10/10.1': ['gauss-conductor', 'gauss-sphere', 'gauss-shell'],
  'em/em-u10/10.2': ['gauss-conductor', 'gauss-shell'],
  'em/em-u10/10.3': ['capacitor-plate', 'capacitor-combinations', 'capacitor-energy'],
  'em/em-u10/10.4': ['capacitor-dielectric', 'capacitor-dielectric-partial', 'capacitor-energy'],
  'em/em-u10/10.5': ['contact-spheres', 'charging-by-grounding', 'ground-reservoir', 'gauss-conductor'],
  'em/em-u10/10.6': ['conductor-polarization', 'equilibrium-time', 'gauss-conductor', 'gauss-shell'],
  'em/em-u10/10.7': ['em-ppc-field-superposition', 'em-ppc-charging-work', 'em-ppc-fringing', 'em-ppc-geometry', 'em-ppc-dielectric-insert', 'capacitor-plate', 'capacitor-dielectric', 'capacitor-energy'],
  'em/em-u11/11.1': ['circuit-series'],
  'em/em-u11/11.2': ['circuit-series', 'circuit-parallel', 'circuit-equivalent', 'ammeter-voltmeter'],
  'em/em-u11/11.3': ['circuit-series', 'circuit-parallel', 'ohmic-nonohmic'],
  'em/em-u11/11.4': ['circuit-series', 'power-series-parallel'],
  'em/em-u11/11.5': ['circuit-series', 'circuit-parallel', 'circuit-kirchhoff', 'circuit-equivalent'],
  'em/em-u11/11.6': ['circuit-kirchhoff', 'kirchhoff-loop-signs'],
  'em/em-u11/11.7': ['circuit-kirchhoff', 'circuit-parallel', 'kirchhoff-junction'],
  'em/em-u11/11.8': ['rc-circuit', 'rc-charging', 'rc-discharging', 'rc-energy'],
  'em/em-u11/11.9': ['current-density-annulus', 'circuit-series'],
  'em/em-u11/11.10': ['em-u11-circuit-topology', 'em-u11-meter-loading', 'circuit-series', 'circuit-parallel', 'circuit-equivalent', 'ammeter-voltmeter', 'circuit-kirchhoff'],
  'em/em-u11/11.11': ['em-u11-capacitor-network-island', 'capacitor-combinations', 'capacitor-plate', 'capacitor-energy'],
  'em/em-u12/12.1': ['wire-field', 'loop-field', 'solenoid-field'],
  'em/em-u12/12.2': ['particle-in-B', 'magnetic-force-rhr', 'cathode-ray-tube', 'velocity-selector', 'mass-spectrometer'],
  'em/em-u12/12.3': ['wire-field', 'loop-field', 'biot-savart'],
  'em/em-u12/12.4': ['ampere-wire', 'ampere-thick-wire', 'solenoid-field', 'line-charge'],
  'em/em-u12/12.5': ['em-u12-compass-dipole-alignment', 'current-loop-dipole', 'loop-field', 'solenoid-field'],
  'em/em-u12/12.6': ['wire-field', 'solenoid-field', 'ampere-wire', 'bh-curve', 'magnetic-force-rhr', 'permeability-temperature'],
  'em/em-u12/12.7': ['em-u12-moving-charge-field', 'magnetic-force-rhr', 'wire-field', 'solenoid-field'],
  'em/em-u12/12.8': ['velocity-selector', 'hall-effect-polarity', 'particle-in-B', 'crossed-field-deflection'],
  'em/em-u12/12.9': ['em-u12-current-element-circles', 'loop-field', 'biot-savart', 'arc-field', 'finite-wire-field'],
  'em/em-u12/12.10': ['em-u12-parallel-wire-superposition', 'em-u12-two-wire-zero-point', 'wire-field', 'ampere-wire'],
  'em/em-u13/13.1': ['faraday-changing-B', 'magnetic-flux-angle'],
  'em/em-u13/13.2': ['faraday-rod', 'faraday-changing-B', 'flux-emf-graph'],
  'em/em-u13/13.3': ['faraday-rod', 'particle-in-B', 'magnetic-force-rhr', 'loop-entering-leaving-field'],
  'em/em-u13/13.4': ['rl-circuit', 'lc-circuit', 'inductor-energy'],
  'em/em-u13/13.5': ['rl-circuit', 'inductor-energy'],
  'em/em-u13/13.6': ['lc-circuit', 'lc-energy'],
  'em/em-u13/13.7': ['em-u13-induced-e-changing-b', 'em-u13-static-vs-induced-e', 'displacement-current', 'em-wave-eb-triad', 'faraday-changing-B', 'em-wave-profile'],
  'em/em-u13/13.8': ['em-u13-loop-entering-field', 'em-u13-sliding-bar-terminal', 'em-u13-force-torque-distribution'],
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

/* ======================= exam-figure lightbox ======================= */

const EXTRAS_STYLE_ID = 'topic-extras-style';
const EXTRAS_STYLE_HREF = 'css/topic-extras.css';

function ensureExtrasStyle() {
  if (typeof document === 'undefined' || document.getElementById(EXTRAS_STYLE_ID)) return;
  const link = document.createElement('link');
  link.id = EXTRAS_STYLE_ID;
  link.rel = 'stylesheet';
  link.href = EXTRAS_STYLE_HREF;
  document.head.appendChild(link);
}

let lightbox = null;
let lightboxTrigger = null;
let lightboxBodyOverflow = '';
let lightboxOnKeydown = null;

function focusableIn(root) {
  return [...root.querySelectorAll('button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')]
    .filter((node) => node.getClientRects().length > 0);
}

function closeFigureLightbox({ restoreFocus = true } = {}) {
  if (!lightbox || lightbox.overlay.hidden) return;
  lightbox.overlay.hidden = true;
  document.body.style.overflow = lightboxBodyOverflow;
  lightboxBodyOverflow = '';
  if (lightboxOnKeydown) {
    document.removeEventListener('keydown', lightboxOnKeydown);
    lightboxOnKeydown = null;
  }
  const trigger = lightboxTrigger;
  lightboxTrigger = null;
  if (restoreFocus && trigger && trigger.isConnected) {
    try { trigger.focus({ preventScroll: true }); } catch (_) { trigger.focus(); }
  }
}

function ensureLightbox() {
  ensureExtrasStyle();
  if (lightbox) return lightbox;

  const overlay = document.createElement('div');
  overlay.className = 'exam-figure-lightbox';
  overlay.hidden = true;

  const dialog = document.createElement('div');
  dialog.className = 'exam-figure-lightbox-dialog';
  dialog.setAttribute('role', 'dialog');
  dialog.setAttribute('aria-modal', 'true');
  dialog.tabIndex = -1;

  const head = document.createElement('div');
  head.className = 'exam-figure-lightbox-head';
  const kicker = document.createElement('p');
  kicker.className = 'exam-figure-lightbox-kicker';
  kicker.textContent = '图示放大 · Figure zoom';
  const close = document.createElement('button');
  close.type = 'button';
  close.className = 'exam-figure-lightbox-close hit-target';
  close.setAttribute('aria-label', '关闭 · Close');
  close.textContent = '关闭 · Close';
  close.addEventListener('click', () => closeFigureLightbox());
  head.append(kicker, close);

  const body = document.createElement('div');
  body.className = 'exam-figure-lightbox-body';
  const figure = document.createElement('div');
  figure.className = 'exam-figure-lightbox-figure';
  const caption = document.createElement('div');
  caption.className = 'exam-figure-lightbox-caption';
  body.append(figure, caption);

  dialog.append(head, body);
  overlay.appendChild(dialog);
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) closeFigureLightbox();
  });
  document.body.appendChild(overlay);

  lightbox = { overlay, dialog, kicker, close, figure, caption };
  window.addEventListener('hashchange', () => closeFigureLightbox({ restoreFocus: false }));
  return lightbox;
}

function uniqueCloneIds(root) {
  const map = new Map();
  root.querySelectorAll('[id]').forEach((node) => {
    const old = node.id;
    if (!old) return;
    const next = `${old}--lightbox`;
    map.set(old, next);
    node.id = next;
  });
  if (!map.size) return;
  const urlAttr = /url\(#([^)]+)\)/g;
  root.querySelectorAll('*').forEach((node) => {
    for (const attr of ['marker-end', 'marker-start', 'marker-mid', 'fill', 'stroke', 'clip-path', 'mask', 'filter']) {
      const value = node.getAttribute(attr);
      if (!value || !value.includes('url(#')) continue;
      node.setAttribute(attr, value.replace(urlAttr, (match, id) => (map.has(id) ? `url(#${map.get(id)})` : match)));
    }
    const labelledBy = node.getAttribute('aria-labelledby');
    if (labelledBy) {
      node.setAttribute('aria-labelledby', labelledBy.split(/\s+/).map((id) => map.get(id) || id).join(' '));
    }
  });
}

function openFigureLightbox(fig, trigger) {
  const box = fig.querySelector('.exam-figure-box');
  if (!box) return;
  const lb = ensureLightbox();
  const cap = fig.querySelector('.exam-figure-cap');
  const title = fig.dataset.lightboxTitle || cap?.querySelector('div')?.textContent || '图示 · Figure';

  lb.kicker.textContent = '图示放大 · Figure zoom';
  lb.dialog.setAttribute('aria-label', `图示放大 · Figure zoom: ${title}`);
  lb.figure.replaceChildren();
  lb.caption.replaceChildren();

  const boxClone = box.cloneNode(true);
  boxClone.removeAttribute('id');
  boxClone.classList.add('exam-figure-lightbox-box');
  boxClone.style.maxWidth = '';
  boxClone.querySelectorAll('[tabindex]').forEach((node) => node.removeAttribute('tabindex'));
  boxClone.querySelectorAll('[role="button"]').forEach((node) => node.removeAttribute('role'));
  uniqueCloneIds(boxClone);
  lb.figure.appendChild(boxClone);

  if (cap) {
    const capClone = cap.cloneNode(true);
    capClone.removeAttribute('id');
    capClone.querySelectorAll('.exam-figure-zoom').forEach((node) => node.remove());
    capClone.querySelectorAll('[id]').forEach((node) => node.removeAttribute('id'));
    capClone.querySelectorAll('[tabindex]').forEach((node) => node.removeAttribute('tabindex'));
    lb.caption.appendChild(capClone);
  }

  lightboxTrigger = trigger || box;
  lightboxBodyOverflow = document.body.style.overflow;
  document.body.style.overflow = 'hidden';
  lb.overlay.hidden = false;

  lightboxOnKeydown = (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      closeFigureLightbox();
      return;
    }
    if (event.key !== 'Tab') return;
    const focusables = focusableIn(lb.dialog);
    if (!focusables.length) {
      event.preventDefault();
      lb.dialog.focus();
      return;
    }
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    const active = document.activeElement;
    if (event.shiftKey && (active === first || !lb.dialog.contains(active))) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && (active === last || !lb.dialog.contains(active))) {
      event.preventDefault();
      first.focus();
    }
  };
  document.addEventListener('keydown', lightboxOnKeydown);
  lb.close.focus({ preventScroll: true });
}

/** Add click-to-zoom to every rendered exam figure under `root` (idempotent). */
export function enhanceExamFigures(root) {
  if (!root) return;
  ensureExtrasStyle();
  root.querySelectorAll('.exam-figure').forEach((fig) => {
    if (fig.dataset.lightboxReady === '1') return;
    const box = fig.querySelector('.exam-figure-box');
    if (!box) return;
    fig.dataset.lightboxReady = '1';
    const cap = fig.querySelector('.exam-figure-cap');
    const title = fig.dataset.figTitle || cap?.querySelector('div')?.textContent || box.querySelector('svg')?.getAttribute('aria-label') || '图示 · Figure';
    fig.dataset.lightboxTitle = title;

    let zoom = cap?.querySelector('.exam-figure-zoom');
    if (!zoom && cap) {
      zoom = document.createElement('button');
      zoom.type = 'button';
      zoom.className = 'exam-figure-zoom hit-target';
      zoom.textContent = '放大 · Zoom';
      zoom.setAttribute('aria-label', `放大图示 · Zoom figure: ${title}`);
      cap.appendChild(zoom);
    }

    box.style.cursor = 'zoom-in';
    box.setAttribute('title', '点击放大 · Click to zoom');
    box.addEventListener('click', (event) => {
      if (event.target.closest('.fig-part')) return;
      openFigureLightbox(fig, zoom || box);
    });
    zoom?.addEventListener('click', () => openFigureLightbox(fig, zoom));
  });
}

export { closeFigureLightbox };

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
    fig.dataset.figTitle = f.title || id;
    const box = document.createElement('div');
    box.className = 'exam-figure-box';
    box.innerHTML = renderFigureSVG(id);
    fig.appendChild(box);
    mountFigureInteraction(fig, box, f, (params) => renderFigureSVG(id, params));
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
    fig.append(cap); grid.appendChild(fig);
  });
  sec.append(h, grid);
  enhanceExamFigures(sec);
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
