/**
 * Exam-figure SVG toolkit shared by the bio and math figure modules (data/bio/figures.js,
 * data/math/figures.js). Pure string builders — no DOM needed to build, so figures can be
 * audited in Node. Every curve is sampled from a real function / dataset passed in.
 *
 * Size contract: every <svg> has a fixed viewBox, width="100%", max-width:100% and a
 * CSS aspect-ratio equal to the viewBox, inside a wrapper with a fixed max-width (px),
 * so it never grows past its design size on resize.
 */
export const C = {
  ink: 'var(--text, #0f0f0e)', muted: 'var(--text-muted, #6b6a64)', grid: 'var(--border, #e4e2db)',
  a: 'var(--fig-a, #3346c9)', b: 'var(--fig-b, #a8481f)', c: 'var(--fig-c, #087a52)',
  d: 'var(--fig-d, #8a6200)', e: 'var(--fig-e, #9a1a14)', f: 'var(--fig-f, #6d3fc4)',
  day: 'var(--fig-day, #fde68a)', night: 'var(--fig-night, #2c2c28)',
};
export const PAL = [C.a, C.b, C.c, C.d, C.e, C.f];

export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const r2 = (v) => Math.round(v * 100) / 100;

export function svg(W, H, body, label = 'figure') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="100%" preserveAspectRatio="xMidYMid meet" role="img" aria-label="${esc(label)}" class="exam-fig-svg" style="display:block;max-width:100%;width:100%;height:auto;aspect-ratio:${W} / ${H};font-family:system-ui,sans-serif;color:${C.ink}">`
    + `<defs><marker id="ah" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L8,4 L0,8 Z" fill="context-stroke"/></marker></defs>${body}</svg>`;
}

/** Text; `t` may contain "a/b" written as {frac:[a,b]} object for a stacked fraction. */
export function text(x, y, t, o = {}) {
  const fs = o.size || 12, anchor = o.anchor || 'middle', fill = o.color || C.ink;
  if (t && typeof t === 'object' && t.frac) return frac(x, y, t.frac[0], t.frac[1], { ...o, size: fs });
  return `<text x="${r2(x)}" y="${r2(y)}" font-size="${fs}" text-anchor="${anchor}" fill="${fill}"${o.bold ? ' font-weight="600"' : ''}${o.italic ? ' font-style="italic"' : ''}${o.rotate ? ` transform="rotate(${o.rotate} ${r2(x)} ${r2(y)})"` : ''} dominant-baseline="middle">${esc(t)}</text>`;
}
/** Stacked fraction: numerator above a bar above denominator, centred at (x,y). Optional prefix. */
export function frac(x, y, num, den, o = {}) {
  const fs = (o.size || 12) * 0.9, fill = o.color || C.ink;
  const w = Math.max(String(num).length, String(den).length) * fs * 0.58 + 4;
  let s = '';
  let cx = x;
  if (o.prefix) {
    const pw = String(o.prefix).length * fs * 0.6;
    s += `<text x="${r2(x - w / 2 - 2)}" y="${r2(y)}" font-size="${fs / 0.9}" text-anchor="end" dominant-baseline="middle" fill="${fill}">${esc(o.prefix)}</text>`;
    cx = x; void pw;
  }
  s += `<text x="${r2(cx)}" y="${r2(y - fs * 0.62)}" font-size="${fs}" text-anchor="middle" dominant-baseline="middle" fill="${fill}">${esc(num)}</text>`;
  s += `<line x1="${r2(cx - w / 2)}" y1="${r2(y)}" x2="${r2(cx + w / 2)}" y2="${r2(y)}" stroke="${fill}" stroke-width="1"/>`;
  s += `<text x="${r2(cx)}" y="${r2(y + fs * 0.68)}" font-size="${fs}" text-anchor="middle" dominant-baseline="middle" fill="${fill}">${esc(den)}</text>`;
  if (o.suffix) s += `<text x="${r2(cx + w / 2 + 2)}" y="${r2(y)}" font-size="${fs / 0.9}" text-anchor="start" dominant-baseline="middle" fill="${fill}">${esc(o.suffix)}</text>`;
  return s;
}
export const line = (x1, y1, x2, y2, o = {}) => `<line x1="${r2(x1)}" y1="${r2(y1)}" x2="${r2(x2)}" y2="${r2(y2)}" stroke="${o.color || C.ink}" stroke-width="${o.w || 1.5}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}${o.arrow ? ' marker-end="url(#ah)"' : ''}/>`;
export const rect = (x, y, w, h, o = {}) => `<rect x="${r2(x)}" y="${r2(y)}" width="${r2(w)}" height="${r2(h)}" rx="${o.rx || 0}" fill="${o.fill || 'none'}" fill-opacity="${o.op ?? 1}" stroke="${o.stroke || C.ink}" stroke-width="${o.w ?? 1.2}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;
export const circle = (x, y, r, o = {}) => `<circle cx="${r2(x)}" cy="${r2(y)}" r="${r2(r)}" fill="${o.fill || 'none'}" fill-opacity="${o.op ?? 1}" stroke="${o.stroke || C.ink}" stroke-width="${o.w ?? 1.2}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;
export const path = (d, o = {}) => `<path d="${d}" fill="${o.fill || 'none'}" fill-opacity="${o.op ?? 1}" stroke="${o.stroke || C.ink}" stroke-width="${o.w ?? 1.5}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}${o.arrow ? ' marker-end="url(#ah)"' : ''}/>`;
/** Labelled box (for pathway / flow diagrams). */
export function box(x, y, w, h, label, o = {}) {
  const lines = String(label).split('\n');
  let s = rect(x, y, w, h, { rx: 6, fill: o.fill || 'none', op: o.op ?? 0.15, stroke: o.stroke || C.ink });
  const fs = o.size || 11;
  lines.forEach((ln, i) => { s += text(x + w / 2, y + h / 2 + (i - (lines.length - 1) / 2) * (fs + 2), ln, { size: fs, bold: o.bold }); });
  return s;
}
export const arrow = (x1, y1, x2, y2, o = {}) => line(x1, y1, x2, y2, { ...o, arrow: true });

function niceStep(span, target = 6) {
  const raw = span / target, p = 10 ** Math.floor(Math.log10(raw)), m = raw / p;
  return (m < 1.5 ? 1 : m < 3 ? 2 : m < 7 ? 5 : 10) * p;
}
function fmt(v) { const s = Math.abs(v) < 1e-9 ? '0' : String(Math.round(v * 1000) / 1000); return s; }
const PI_TICKS = (lo, hi, step) => { const out = []; for (let k = Math.ceil(lo / step - 1e-9); k * step <= hi + 1e-9; k++) out.push(k); return out; };

/**
 * Cartesian plot. opts: {W,H,x:[min,max],y:[min,max],xlabel,ylabel,xticks,yticks,piX (step in π units),
 * grid, curves:[{f|pts|param|polar, dom, color, dash, w, label, labelAt}], fills:[{f,g,dom,color}|{poly}],
 * rects:[{x0,x1,y,color}], points:[{x,y,open,color,label}], vlines:[{x,dash,label}], hlines, segs, arrows, texts, field}
 */
export function plot(o) {
  const W = o.W || 480, H = o.H || 320, L = o.padL ?? 46, R = 16, T = o.title ? 30 : (o.ylabelTop ? 26 : 16), B = 38;
  const [x0, x1] = o.x, [y0, y1] = o.y;
  const X = (x) => L + ((x - x0) / (x1 - x0)) * (W - L - R);
  const Y = (y) => H - B - ((y - y0) / (y1 - y0)) * (H - T - B);
  const clipId = 'fc' + (++_clip);
  let s = `<defs><clipPath id="${clipId}"><rect x="${L}" y="${T}" width="${W - L - R}" height="${H - T - B}"/></clipPath></defs>`;
  if (o.title) s += text(W / 2, 14, o.title, { size: 13, bold: true });
  // grid + ticks
  const xs = o.xstep || niceStep(x1 - x0), ys = o.ystep || niceStep(y1 - y0);
  const xt = o.xticks || (o.piX ? null : range(Math.ceil(x0 / xs) * xs, x1, xs));
  const yt = o.yticks || range(Math.ceil(y0 / ys) * ys, y1, ys);
  const ax = Math.min(Math.max(0, y0), y1), ay = Math.min(Math.max(0, x0), x1);
  const axisY = o.axisAt?.y ?? ax, axisX = o.axisAt?.x ?? ay;
  if (o.grid !== false) {
    (xt || []).forEach((v) => { s += line(X(v), T, X(v), H - B, { color: C.grid, w: 0.7 }); });
    yt.forEach((v) => { s += line(L, Y(v), W - R, Y(v), { color: C.grid, w: 0.7 }); });
  }
  s += line(L, Y(axisY), W - R, Y(axisY), { w: 1.2 }) + line(X(axisX), T, X(axisX), H - B, { w: 1.2 });
  const tickY = Y(axisY) + 12 > H - B + 2 ? H - B + 12 : Math.min(H - B + 12, Y(axisY) + 12);
  if (o.piX) {
    const step = o.piX; // in multiples of π
    PI_TICKS(x0 / Math.PI, x1 / Math.PI, step).forEach((k) => {
      const v = k * step * Math.PI; if (Math.abs(v) < 1e-9) return;
      s += line(X(v), Y(axisY) - 3, X(v), Y(axisY) + 3, { w: 1 });
      const [n, d] = piFrac(k, step);
      s += d === 1 ? text(X(v), tickY + 2, n, { size: 10, color: C.muted }) : frac(X(v), tickY + 6, n, String(d), { size: 10, color: C.muted });
    });
  } else (xt || []).forEach((v) => { if (Math.abs(v - axisX) < 1e-9 && o.hideZero !== false) return; s += line(X(v), Y(axisY) - 3, X(v), Y(axisY) + 3, { w: 1 }) + text(X(v), tickY, o.xfmt ? o.xfmt(v) : fmt(v), { size: 10, color: C.muted }); });
  yt.forEach((v) => { if (Math.abs(v - axisY) < 1e-9) return; s += line(X(axisX) - 3, Y(v), X(axisX) + 3, Y(v), { w: 1 }) + text(Math.max(X(axisX) - 6, L - 6), Y(v), o.yfmt ? o.yfmt(v) : fmt(v), { size: 10, anchor: 'end', color: C.muted }); });
  if (o.xlabel) s += text((L + W - R) / 2, H - 8, o.xlabel, { size: 11, color: C.muted });
  if (o.ylabel) s += o.ylabelTop ? text(L, 9, o.ylabel, { size: 10, color: C.muted, anchor: 'start' }) : text(12, (T + H - B) / 2, o.ylabel, { size: 11, color: C.muted, rotate: -90 });
  let g = '';
  // slope field
  if (o.field) {
    const { dydx, nx = 15, ny = 11 } = o.field; const len = 0.36 * Math.min((W - L - R) / nx, (H - T - B) / ny);
    for (let i = 0; i <= nx; i++) for (let j = 0; j <= ny; j++) {
      const x = x0 + (i / nx) * (x1 - x0), y = y0 + (j / ny) * (y1 - y0), m = dydx(x, y);
      if (!Number.isFinite(m)) continue;
      const sx = (W - L - R) / (x1 - x0), sy = (H - T - B) / (y1 - y0);
      const vx = 1 * sx, vy = -m * sy, n = Math.hypot(vx, vy);
      g += line(X(x) - (vx / n) * len, Y(y) - (vy / n) * len, X(x) + (vx / n) * len, Y(y) + (vy / n) * len, { color: C.muted, w: 1 });
    }
  }
  (o.fills || []).forEach((fl) => {
    if (fl.poly) { g += path('M' + fl.poly.map(([a, b]) => `${r2(X(a))},${r2(Y(b))}`).join('L') + 'Z', { fill: fl.color || C.a, op: fl.op ?? 0.22, stroke: 'none' }); return; }
    const [a, b] = fl.dom, n = 160, top = [], bot = [];
    for (let i = 0; i <= n; i++) { const x = a + ((b - a) * i) / n; top.push([x, fl.f(x)]); bot.push([x, fl.g ? fl.g(x) : 0]); }
    g += path('M' + top.concat(bot.reverse()).map(([p, q]) => `${r2(X(p))},${r2(Y(q))}`).join('L') + 'Z', { fill: fl.color || C.a, op: fl.op ?? 0.22, stroke: 'none' });
  });
  (o.rects || []).forEach((rc) => { const yb = rc.y0 ?? 0; g += rect(X(rc.x0), Math.min(Y(rc.y), Y(yb)), X(rc.x1) - X(rc.x0), Math.abs(Y(rc.y) - Y(yb)), { fill: rc.color || C.a, op: rc.op ?? 0.25, stroke: rc.color || C.a, w: 1 }); });
  (o.polys || []).forEach((pl) => { g += path('M' + pl.pts.map(([a, b]) => `${r2(X(a))},${r2(Y(b))}`).join('L') + (pl.close ? 'Z' : ''), { fill: pl.fill || 'none', op: pl.op ?? 0.25, stroke: pl.color || C.a, w: pl.w || 1.2, dash: pl.dash }); });
  (o.curves || []).forEach((cv, i) => {
    const col = cv.color || PAL[i % PAL.length];
    const pts = samplePts(cv, x0, x1);
    g += path(toD(pts, X, Y, (y1 - y0) * 2.5), { stroke: col, w: cv.w || 2, dash: cv.dash });
    if (cv.label) { const at = cv.labelAt || pts[Math.floor(pts.length * 0.85)] || [x1, y1]; g += text(X(at[0]) + (cv.dx || 4), Y(at[1]) + (cv.dy || -10), cv.label, { size: 11, color: cv.labelColor || col, anchor: cv.anchor || 'start', bold: true }); }
  });
  (o.vlines || []).forEach((v) => { g += line(X(v.x), T, X(v.x), H - B, { color: v.color || C.muted, dash: v.dash ?? '5 4', w: 1.2 }); if (v.label) g += text(X(v.x) + 4, T + 10, v.label, { size: 10, anchor: 'start', color: v.labelColor || v.color || C.muted }); });
  (o.hlines || []).forEach((v) => { g += line(L, Y(v.y), W - R, Y(v.y), { color: v.color || C.muted, dash: v.dash ?? '5 4', w: 1.2 }); if (v.label) g += text(W - R - 4, Y(v.y) - 8, v.label, { size: 10, anchor: 'end', color: v.labelColor || v.color || C.muted }); });
  (o.segs || []).forEach((sg) => { g += line(X(sg[0]), Y(sg[1]), X(sg[2]), Y(sg[3]), { color: sg[4] || C.ink, w: sg[5] || 1.5, dash: sg[6], arrow: sg[7] }); });
  s += `<g clip-path="url(#${clipId})">${g}</g>`;
  (o.points || []).forEach((p) => {
    s += circle(X(p.x), Y(p.y), p.r || 4, { fill: p.open ? 'var(--bg-elev, #fff)' : p.color || C.ink, op: 1, stroke: p.color || C.ink, w: 1.6 });
    if (p.label) s += text(X(p.x) + (p.dx ?? 8), Y(p.y) + (p.dy ?? -10), p.label, { size: 10.5, anchor: p.anchor || 'start', color: p.labelColor || p.color || C.ink });
  });
  (o.texts || []).forEach((t) => { s += text(X(t[0]), Y(t[1]), t[2], { size: 11, color: t[3] || C.ink, anchor: t[4] || 'middle', bold: t[5] }); });
  (o.fracs || []).forEach((t) => { s += frac(X(t[0]), Y(t[1]), t[2], t[3], { size: 12, color: t[4] || C.ink, prefix: t[5], suffix: t[6] }); });
  if (o.legend) { o.legend.forEach((lg, i) => { const ly = T + 10 + i * 16, lx = o.legendX ?? W - R - 150; s += line(lx, ly, lx + 18, ly, { color: lg[1], w: 2.5, dash: lg[2] }) + text(lx + 24, ly, lg[0], { size: 10.5, anchor: 'start' }); }); }
  return svg(W, H, s, o.label || o.title || 'graph');
}
let _clip = 0;
function piFrac(k, step) { // value = k*step π → [numeratorString, denominator]
  const den = Math.round(1 / step); let n = k, d = den; const gg = gcd(Math.abs(n), d); n /= gg; d /= gg;
  const ns = n === 1 ? 'π' : n === -1 ? '−π' : `${n < 0 ? '−' : ''}${Math.abs(n)}π`; return [ns, d];
}
const gcd = (a, b) => (b ? gcd(b, a % b) : a);
export function range(a, b, st) { const out = []; for (let v = a; v <= b + st * 1e-6; v += st) out.push(Math.round(v / st) * st); return out; }
function samplePts(cv, x0, x1) {
  const n = cv.n || 400;
  if (cv.pts) return cv.pts;
  if (cv.param) { const [a, b] = cv.dom; return Array.from({ length: n + 1 }, (_, i) => cv.param(a + ((b - a) * i) / n)); }
  if (cv.polar) { const [a, b] = cv.dom; return Array.from({ length: n + 1 }, (_, i) => { const t = a + ((b - a) * i) / n, r = cv.polar(t); return [r * Math.cos(t), r * Math.sin(t)]; }); }
  const [a, b] = cv.dom || [x0, x1];
  return Array.from({ length: n + 1 }, (_, i) => { const x = a + ((b - a) * i) / n; return [x, cv.f(x)]; });
}
function toD(pts, X, Y, jump) {
  let d = '', pen = false, prev = null;
  for (const [x, y] of pts) {
    if (!Number.isFinite(y) || !Number.isFinite(x) || (prev && Math.abs(y - prev) > jump)) { pen = false; prev = Number.isFinite(y) ? y : null; if (!Number.isFinite(y)) continue; }
    const yy = Math.max(-1e4, Math.min(1e4, Y(y)));
    d += (pen ? 'L' : 'M') + r2(X(x)) + ',' + r2(yy); pen = true; prev = y;
  }
  return d || 'M0,0';
}
/** Bar chart: bars [{label, v, color}] */
export function bars(o) {
  const W = o.W || 480, H = o.H || 300, L = 50, B = 46, T = o.title ? 30 : (o.ylabelTop ? 26 : 14), R = 14;
  const max = o.max || Math.max(...o.bars.map((b) => b.v)) * 1.15;
  const bw = (W - L - R) / o.bars.length;
  let s = o.title ? text(W / 2, 14, o.title, { size: 13, bold: true }) : '';
  const st = niceStep(max, 5);
  range(0, max, st).forEach((v) => { const y = H - B - (v / max) * (H - T - B); s += line(L, y, W - R, y, { color: C.grid, w: 0.7 }) + text(L - 6, y, fmt(v), { size: 10, anchor: 'end', color: C.muted }); });
  o.bars.forEach((b, i) => {
    const h = (b.v / max) * (H - T - B), x = L + i * bw + bw * 0.15;
    s += rect(x, H - B - h, bw * 0.7, h, { fill: b.color || C.a, op: 0.75, stroke: b.color || C.a });
    if (b.err) { const e = (b.err / max) * (H - T - B), cx = x + bw * 0.35; s += line(cx, H - B - h - e, cx, H - B - h + e, { w: 1.2 }) + line(cx - 5, H - B - h - e, cx + 5, H - B - h - e, { w: 1.2 }) + line(cx - 5, H - B - h + e, cx + 5, H - B - h + e, { w: 1.2 }); }
    s += text(x + bw * 0.35, H - B + 13, b.label, { size: 10 });
    if (o.showV) s += text(x + bw * 0.35, H - B - h - (b.err ? (b.err / max) * (H - T - B) : 0) - 8, fmt(b.v), { size: 10, color: C.muted });
  });
  s += line(L, H - B, W - R, H - B) + line(L, T, L, H - B);
  if (o.xlabel) s += text((L + W) / 2, H - 10, o.xlabel, { size: 11, color: C.muted });
  if (o.ylabel) s += o.ylabelTop ? text(L, 9, o.ylabel, { size: 10, color: C.muted, anchor: 'start' }) : text(12, (T + H - B) / 2, o.ylabel, { size: 11, color: C.muted, rotate: -90 });
  return svg(W, H, s, o.title || 'bar chart');
}

/**
 * Ruled reference table. colW: column widths. rows: array of arrays; a cell may be a
 * string or {t, bold, color, anchor, size}. opts: {headers, rowH, size, headFill,
 * headOp, zebra, align, headerColor}. Draws no outer rounded frame (minimal style).
 */
export function table(x, y, colW, rows, o = {}) {
  const rowH = o.rowH || 30, fs = o.size || 10.5;
  const W = colW.reduce((a, b) => a + b, 0);
  const all = o.headers ? [o.headers, ...rows] : rows;
  let s = '';
  all.forEach((row, r) => {
    const yy = y + r * rowH;
    if (o.headers && r === 0) s += rect(x, yy, W, rowH, { fill: o.headFill || C.a, op: o.headOp ?? 0.14, stroke: 'none' });
    else if (o.zebra && r % 2 === 0) s += rect(x, yy, W, rowH, { fill: C.muted, op: 0.05, stroke: 'none' });
    s += line(x, yy, x + W, yy, { color: C.grid, w: 0.9 });
    let cx = x;
    row.forEach((cell, c) => {
      const v = cell && typeof cell === 'object' ? cell : { t: cell };
      const anchor = v.anchor || (c === 0 ? 'start' : (o.align?.[c] || 'start'));
      const tx = anchor === 'middle' ? cx + colW[c] / 2 : anchor === 'end' ? cx + colW[c] - 8 : cx + 8;
      s += text(tx, yy + rowH / 2, v.t, {
        size: v.size || fs, anchor,
        bold: v.bold || (o.headers && r === 0),
        color: v.color || (o.headers && r === 0 ? (o.headerColor || C.ink) : C.ink),
      });
      cx += colW[c];
    });
  });
  const bottom = y + all.length * rowH;
  s += line(x, bottom, x + W, bottom, { color: C.grid, w: 0.9 });
  let cx = x;
  colW.forEach((w) => { s += line(cx, y, cx, bottom, { color: C.grid, w: 0.9 }); cx += w; });
  s += line(x + W, y, x + W, bottom, { color: C.grid, w: 0.9 });
  return s;
}

/** Numerical helpers */
export function rk4(f, t0, y0, t1, n) { const h = (t1 - t0) / n; let t = t0, y = Array.isArray(y0) ? [...y0] : [y0]; const out = [[t, ...y]];
  const F = (tt, yy) => { const r = f(tt, Array.isArray(y0) ? yy : yy[0]); return Array.isArray(r) ? r : [r]; };
  for (let i = 0; i < n; i++) { const k1 = F(t, y), k2 = F(t + h / 2, y.map((v, j) => v + (h / 2) * k1[j])), k3 = F(t + h / 2, y.map((v, j) => v + (h / 2) * k2[j])), k4 = F(t + h, y.map((v, j) => v + h * k3[j]));
    y = y.map((v, j) => v + (h / 6) * (k1[j] + 2 * k2[j] + 2 * k3[j] + k4[j])); t += h; out.push([t, ...y]); } return out; }
export function simpson(f, a, b, n = 400) { const h = (b - a) / n; let s = f(a) + f(b); for (let i = 1; i < n; i++) s += f(a + i * h) * (i % 2 ? 4 : 2); return (s * h) / 3; }
export function mulberry(seed) { return () => { seed |= 0; seed = (seed + 0x6d2b79f5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
export const fact = (n) => (n <= 1 ? 1 : n * fact(n - 1));

/** DOM renderer: renders [{id,title,caption,svg}] into a container, KaTeX captions, fixed max-width. */
export function renderFigures(container, figures, { maxWidth = 560 } = {}) {
  if (!figures?.length || typeof document === 'undefined') return null;
  const sec = document.createElement('section');
  sec.className = 'exam-figures topic-block';
  const h = document.createElement('h2');
  h.textContent = 'AP 考试常见图示';
  const grid = document.createElement('div');
  grid.className = 'exam-figures-grid';
  for (const f of figures) {
    const fig = document.createElement('figure');
    fig.className = 'exam-figure';
    fig.id = `fig-${f.id}`;
    fig.dataset.fig = f.id;
    const box = document.createElement('div');
    box.className = 'exam-figure-box';
    if (f.maxWidth || maxWidth) box.style.maxWidth = `min(100%, ${f.maxWidth || maxWidth}px)`;
    box.innerHTML = f.svg;
    const cap = document.createElement('figcaption');
    cap.className = 'exam-figure-cap';
    const title = document.createElement('div');
    title.textContent = f.title;
    cap.appendChild(title);
    if (f.caption) {
      const c = document.createElement('div');
      c.className = 'exam-figure-tex';
      appendTex(c, f.caption);
      cap.appendChild(c);
    }
    fig.append(box, cap);
    grid.appendChild(fig);
  }
  sec.append(h, grid);
  container.appendChild(sec);
  return sec;
}
function appendTex(parent, s) {
  const re = /\\\(([\s\S]+?)\\\)/g; let last = 0, m;
  while ((m = re.exec(s))) {
    if (m.index > last) parent.appendChild(document.createTextNode(s.slice(last, m.index)));
    const sp = document.createElement('span');
    if (window.katex) { try { window.katex.render(m[1], sp, { throwOnError: false }); } catch (_) { sp.textContent = m[1]; } } else sp.textContent = m[1];
    parent.appendChild(sp); last = m.index + m[0].length;
  }
  if (last < s.length) parent.appendChild(document.createTextNode(s.slice(last)));
}
