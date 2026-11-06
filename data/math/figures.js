/**
 * AP Calculus BC + prerequisite (Algebra I/II, Geometry, Precalculus) exam figures.
 * Each figure is computed from the stated function/data at build time (see figlib.js).
 * FIGURES: id → {title, caption, build}. TOPIC_FIGURES: "chapterId:code" → [figure ids].
 */
import { plot, bars, svg, text, frac, line, rect, circle, path, arrow, C, PAL, simpson, mulberry, fact, range } from './figlib.js';

const { PI, E, sin, cos, tan, exp, log, sqrt, abs, atan, asin } = Math;
const F = {};
const def = (id, title, caption, build) => { F[id] = { id, title, caption, build }; };
const setCap = (id, c) => { F[id].caption = c; };
const fmt = (v, d = 3) => String(Math.round(v * 10 ** d) / 10 ** d);

/* ---------- Riemann sums (computed) ---------- */
function riemann(kind, f, a, b, n) {
  const dx = (b - a) / n; let sum = 0; const rects = [], polys = [];
  for (let i = 0; i < n; i++) {
    const xl = a + i * dx, xr = xl + dx;
    if (kind === 'trap') { sum += ((f(xl) + f(xr)) / 2) * dx; polys.push({ pts: [[xl, 0], [xl, f(xl)], [xr, f(xr)], [xr, 0]], close: true, fill: C.a, color: C.a }); continue; }
    const xc = kind === 'left' ? xl : kind === 'right' ? xr : (xl + xr) / 2;
    sum += f(xc) * dx; rects.push({ x0: xl, x1: xr, y: f(xc) });
  }
  return { sum, rects, polys };
}
const rf = (x) => 0.25 * x * x + 1; // ∫0^4 = 16/3 + 4 = 28/3
const RNOTE = { left: 'under-estimate because f is increasing', right: 'over-estimate because f is increasing', mid: 'under-estimate because f is concave up', trap: 'over-estimate because f is concave up' };
for (const [k, nm] of [['left', 'Left'], ['right', 'Right'], ['mid', 'Midpoint'], ['trap', 'Trapezoidal']]) {
  def(`riemann-${k}`, `${nm} Riemann sum, n = 4`, '', () => {
    const r = riemann(k, rf, 0, 4, 4);
    setCap(`riemann-${k}`, `\\(f(x)=\\tfrac14x^2+1\\) on \\([0,4]\\), \\(\\Delta x=\\dfrac{4-0}{4}=1\\). ${nm} sum \\(=${fmt(r.sum)}\\); exact \\(\\displaystyle\\int_0^4 f\\,dx=\\dfrac{28}{3}\\approx 9.333\\) (${RNOTE[k]}).`);
    const xs = k === 'trap' ? [0, 1, 2, 3, 4] : [0, 1, 2, 3].map((i) => (k === 'left' ? i : k === 'right' ? i + 1 : i + 0.5));
    return plot({ x: [-0.3, 4.5], y: [0, 5.5], rects: r.rects, polys: r.polys, curves: [{ f: rf, label: 'y = f(x)', color: C.ink, labelAt: [3.4, 3.9] }], points: xs.map((x) => ({ x, y: rf(x), color: C.b, r: 3 })), texts: [[1.5, 5, `${nm} sum = ${fmt(r.sum)}`, C.b]], label: `${nm} Riemann sum` });
  });
}
def('riemann-converge', 'Riemann sums converge as n → ∞', '', () => {
  const ns = [2, 4, 8, 16, 32, 64], ex = 28 / 3;
  const S = (k) => ns.map((n) => riemann(k, rf, 0, 4, n).sum);
  const L = S('left'), R = S('right'), M = S('mid'), xs = ns.map((n) => Math.log2(n));
  setCap('riemann-converge', `Left, right and midpoint sums of \\(\\tfrac14x^2+1\\) on \\([0,4]\\) for \\(n=2,4,\\ldots,64\\) approach \\(\\dfrac{28}{3}\\). At \\(n=64\\): L = ${fmt(L[5], 4)}, R = ${fmt(R[5], 4)}, M = ${fmt(M[5], 5)}.`);
  return plot({ x: [0.5, 6.5], y: [6, 13], xlabel: 'log₂ n', ylabel: 'sum', hlines: [{ y: ex, label: 'exact 28/3' }], curves: [{ pts: xs.map((x, i) => [x, L[i]]), color: C.a, label: 'left', labelAt: [1.2, L[0] + 0.3] }, { pts: xs.map((x, i) => [x, R[i]]), color: C.b, label: 'right', labelAt: [1.2, R[0] - 0.6] }, { pts: xs.map((x, i) => [x, M[i]]), color: C.c, label: 'mid', labelAt: [1.1, M[0] - 0.3] }], points: xs.flatMap((x, i) => [{ x, y: L[i], color: C.a, r: 3 }, { x, y: R[i], color: C.b, r: 3 }, { x, y: M[i], color: C.c, r: 3 }]) });
});
def('riemann-table', 'Riemann / trapezoidal sum from a table (unequal Δt)', '', () => {
  const t = [0, 2, 5, 7, 10], v = [3, 7, 8, 5, 2]; let left = 0, right = 0, trap = 0;
  for (let i = 0; i < 4; i++) { const d = t[i + 1] - t[i]; left += v[i] * d; right += v[i + 1] * d; trap += ((v[i] + v[i + 1]) / 2) * d; }
  setCap('riemann-table', `Table data \\(t=0,2,5,7,10\\), \\(v=3,7,8,5,2\\). Left sum \\(=${left}\\), right sum \\(=${right}\\), trapezoidal \\(\\sum\\dfrac{v_i+v_{i+1}}{2}\\Delta t_i=${trap}\\).`);
  const polys = []; for (let i = 0; i < 4; i++) polys.push({ pts: [[t[i], 0], [t[i], v[i]], [t[i + 1], v[i + 1]], [t[i + 1], 0]], close: true, fill: C.a, color: C.a });
  return plot({ x: [-0.5, 11], y: [0, 10], xlabel: 't (min)', ylabel: 'v(t)', polys, points: t.map((x, i) => ({ x, y: v[i], label: `(${x}, ${v[i]})`, dy: -12, dx: -14 })), xticks: t });
});

/* ---------- limits / continuity ---------- */
def('limit-jump', 'Jump discontinuity', '\\(f(x)=x+1\\) for \\(x<1\\), \\(f(x)=\\tfrac12x+\\tfrac12\\) for \\(x\\ge1\\). \\(\\lim_{x\\to1^-}f=2\\), \\(\\lim_{x\\to1^+}f=1=f(1)\\): one-sided limits differ, so \\(\\lim_{x\\to1}f\\) does not exist.', () =>
  plot({ x: [-2, 4], y: [-1, 4], curves: [{ f: (x) => x + 1, dom: [-2, 1], color: C.a }, { f: (x) => 0.5 * x + 0.5, dom: [1, 4], color: C.a }], points: [{ x: 1, y: 2, open: true, color: C.a, label: 'lim⁻ = 2' }, { x: 1, y: 1, color: C.a, label: 'f(1) = 1', dy: 14 }] }));
def('limit-hole', 'Removable discontinuity (hole)', '\\(f(x)=\\dfrac{x^2-4}{x-2}\\) equals \\(x+2\\) for \\(x\\ne2\\), so \\(\\lim_{x\\to2}f(x)=4\\) but \\(f(2)\\) is undefined (open circle).', () =>
  plot({ x: [-3, 5], y: [-1, 7], curves: [{ f: (x) => (abs(x - 2) < 1e-9 ? NaN : (x * x - 4) / (x - 2)), color: C.a, label: 'y = (x²−4)/(x−2)', labelAt: [-2.8, 1.2] }], points: [{ x: 2, y: 4, open: true, color: C.a, label: '(2, 4) hole' }] }));
def('limit-hole-defined', 'Hole with a displaced point', '\\(g(x)=x^2\\) for \\(x\\ne1\\), \\(g(1)=3\\). \\(\\lim_{x\\to1}g(x)=1\\ne g(1)\\): removable discontinuity.', () =>
  plot({ x: [-2, 2.5], y: [-0.5, 4.5], curves: [{ f: (x) => x * x, color: C.a }], points: [{ x: 1, y: 1, open: true, color: C.a, label: 'lim = 1', dy: 14 }, { x: 1, y: 3, color: C.b, label: 'g(1) = 3' }] }));
def('limit-va', 'Infinite limits / vertical asymptote', '\\(f(x)=\\dfrac{1}{x-2}\\): \\(\\lim_{x\\to2^-}f=-\\infty\\), \\(\\lim_{x\\to2^+}f=+\\infty\\). \\(h(x)=\\dfrac{1}{(x-2)^2}\\to+\\infty\\) from both sides.', () =>
  plot({ x: [-2, 6], y: [-6, 6], vlines: [{ x: 2, label: 'x = 2' }], curves: [{ f: (x) => 1 / (x - 2), n: 1200, color: C.a, label: '1/(x−2)', labelAt: [4, 0.5] }, { f: (x) => 1 / (x - 2) ** 2, n: 1200, color: C.b, dash: '6 3', label: '1/(x−2)²', labelAt: [-1.8, 0.6] }] }));
def('limit-osc', 'Oscillating behavior — limit does not exist', '\\(\\sin\\!\\left(\\dfrac1x\\right)\\) oscillates between −1 and 1 infinitely often as \\(x\\to0\\); no limit.', () =>
  plot({ x: [-1, 1], y: [-1.5, 1.5], xstep: 0.5, ystep: 0.5, curves: [{ f: (x) => sin(1 / x), n: 4000, color: C.a }] }));
def('limit-ha', 'Limits at infinity / horizontal asymptote', '\\(f(x)=\\dfrac{2x^2+1}{x^2+3}\\to2\\) as \\(x\\to\\pm\\infty\\) (ratio of leading coefficients). \\(e^{-x}\\to0\\) only as \\(x\\to+\\infty\\).', () =>
  plot({ x: [-10, 10], y: [-0.5, 3], ystep: 0.5, hlines: [{ y: 2, label: 'y = 2' }], curves: [{ f: (x) => (2 * x * x + 1) / (x * x + 3), color: C.a, label: '(2x²+1)/(x²+3)', labelAt: [1, 0.6] }, { f: (x) => exp(-x), color: C.b, dash: '6 3', label: 'e^(−x)', labelAt: [-2.6, 2.6] }] }));
def('limit-1sided', 'Reading one-sided limits from a graph', 'At \\(x=-1\\): \\(\\lim f=1\\) but \\(f(-1)=3\\). At \\(x=2\\): \\(\\lim_{x\\to2^-}f=2=f(2)\\), \\(\\lim_{x\\to2^+}f=-1\\), so \\(\\lim_{x\\to2}f\\) DNE.', () =>
  plot({ x: [-3, 4], y: [-2, 4], curves: [{ f: (x) => (x + 1) ** 2 / 2 + 1, dom: [-3, -1], color: C.a }, { f: (x) => 1 + (x + 1) / 3, dom: [-1, 2], color: C.a }, { f: (x) => -1 + (x - 2) ** 2, dom: [2, 4], color: C.a }], points: [{ x: -1, y: 1, open: true, color: C.a }, { x: -1, y: 3, color: C.a, label: 'f(−1)=3' }, { x: 2, y: 2, color: C.a, label: '(2, 2)' }, { x: 2, y: -1, open: true, color: C.a, label: 'lim⁺ = −1', dy: 14 }] }));
def('limit-table', 'Estimating a limit from a table', '', () => {
  const xs = [-0.5, -0.1, -0.01, 0.01, 0.1, 0.5], ys = xs.map((x) => sin(x) / x);
  setCap('limit-table', `Values of \\(\\dfrac{\\sin x}{x}\\): ${xs.map((x, i) => `\\(${x}\\mapsto${fmt(ys[i], 5)}\\)`).join(', ')}, so \\(\\displaystyle\\lim_{x\\to0}\\dfrac{\\sin x}{x}=1\\).`);
  return plot({ x: [-0.6, 0.6], y: [0.9, 1.02], xstep: 0.1, ystep: 0.02, curves: [{ f: (x) => (x === 0 ? NaN : sin(x) / x), color: C.muted, dash: '4 3' }], points: [...xs.map((x, i) => ({ x, y: ys[i], color: C.a, r: 3.5 })), { x: 0, y: 1, open: true, color: C.b, label: 'limit 1' }] });
});
def('limit-sinx', 'sin x / x near 0', '\\(\\dfrac{\\sin x}{x}\\) is undefined at 0 but tends to 1; hole at \\((0,1)\\).', () =>
  plot({ x: [-12, 12], y: [-0.4, 1.2], ystep: 0.2, curves: [{ f: (x) => (abs(x) < 1e-9 ? NaN : sin(x) / x), color: C.a }], points: [{ x: 0, y: 1, open: true, color: C.a, label: '(0, 1)' }] }));
def('limit-squeeze', 'Squeeze theorem', '\\(-x^2\\le x^2\\sin\\!\\left(\\dfrac1x\\right)\\le x^2\\); both bounds tend to 0, so the middle function tends to 0.', () =>
  plot({ x: [-0.5, 0.5], y: [-0.25, 0.25], xstep: 0.1, ystep: 0.05, curves: [{ f: (x) => x * x * sin(1 / x), n: 3000, color: C.a, label: 'x² sin(1/x)', labelAt: [0.05, -0.15] }, { f: (x) => x * x, color: C.b, dash: '5 3', label: 'x²', labelAt: [0.4, 0.13] }, { f: (x) => -x * x, color: C.b, dash: '5 3', label: '−x²', labelAt: [0.4, -0.21] }] }));
def('limit-rationalize', 'Limit by rationalizing', '\\(\\dfrac{\\sqrt{x+4}-2}{x}=\\dfrac{1}{\\sqrt{x+4}+2}\\) for \\(x\\ne0\\), so the limit at 0 is \\(\\dfrac14\\).', () =>
  plot({ x: [-4, 6], y: [0, 0.6], ystep: 0.1, curves: [{ f: (x) => (abs(x) < 1e-9 ? NaN : (sqrt(x + 4) - 2) / x), dom: [-4, 6], color: C.a }], points: [{ x: 0, y: 0.25, open: true, color: C.a, label: '(0, 1/4)' }] }));
def('limit-algebra', 'Limit properties from graphs of f and g', '\\(\\lim_{x\\to1}f=2\\), \\(\\lim_{x\\to1}g=-1\\), so \\(\\lim(f+g)=1\\), \\(\\lim fg=-2\\), \\(\\lim\\dfrac{f}{g}=-2\\).', () =>
  plot({ x: [-1, 3], y: [-3, 4], curves: [{ f: (x) => x + 1, color: C.a, label: 'f(x)=x+1', labelAt: [2.2, 2.6] }, { f: (x) => x * x - 2, color: C.b, label: 'g(x)=x²−2', labelAt: [2.05, 1.4] }, { f: (x) => x * x + x - 1, color: C.c, dash: '5 3', label: 'f+g', labelAt: [1.5, 3.3] }], points: [{ x: 1, y: 2, color: C.a }, { x: 1, y: -1, color: C.b }, { x: 1, y: 1, color: C.c }] }));
def('cont-3cond', 'Continuity: three conditions', '\\(f\\) is continuous at \\(a\\) iff \\(f(a)\\) is defined, \\(\\lim_{x\\to a}f\\) exists, and they are equal. \\(f(x)=x^2\\) (\\(x\\le1\\)), \\(2x-1\\) (\\(x>1\\)) is continuous at 1 (both pieces give 1).', () =>
  plot({ x: [-2, 3], y: [-1, 5], curves: [{ f: (x) => x * x, dom: [-2, 1], color: C.a }, { f: (x) => 2 * x - 1, dom: [1, 3], color: C.b }], points: [{ x: 1, y: 1, color: C.ink, label: '(1, 1)' }] }));
def('cont-interval', 'Continuity on an interval', '\\(\\tan x\\) is continuous on \\(\\left(-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right)\\) but not on any interval containing \\(\\pm\\dfrac{\\pi}{2}\\).', () =>
  plot({ x: [-PI, PI], y: [-4, 4], piX: 0.5, vlines: [{ x: -PI / 2 }, { x: PI / 2 }], curves: [{ f: tan, n: 1200, color: C.a }] }));
def('cont-remove', 'Removing a discontinuity', '\\(f(x)=\\dfrac{x^2-9}{x-3}\\); defining \\(f(3)=6\\) (the limit value) makes \\(f\\) continuous.', () =>
  plot({ x: [-1, 6], y: [0, 10], curves: [{ f: (x) => (abs(x - 3) < 1e-9 ? NaN : (x * x - 9) / (x - 3)), color: C.a }], points: [{ x: 3, y: 6, open: true, color: C.a, r: 5 }, { x: 3, y: 6, r: 2.5, color: C.b, label: 'define f(3) = 6' }] }));
def('disc-types', 'Discontinuity types side by side', 'Removable (hole), jump (one-sided limits differ), infinite (vertical asymptote).', () =>
  plot({ W: 540, H: 260, x: [0, 9], y: [-2, 4], grid: false, xticks: [], yticks: [], vlines: [{ x: 7.5 }], curves: [{ f: (x) => 0.5 * (x - 1.5) ** 2 + 0.5, dom: [0, 3], color: C.a }, { f: () => 1, dom: [3.3, 4.8], color: C.b }, { f: () => 3, dom: [4.8, 6.3], color: C.b }, { f: (x) => 1 / (x - 7.5), dom: [6.5, 9], n: 600, color: C.c }], points: [{ x: 1.5, y: 0.5, open: true, color: C.a }, { x: 4.8, y: 1, color: C.b }, { x: 4.8, y: 3, open: true, color: C.b }], texts: [[1.5, 3.6, 'removable', C.a], [4.8, 3.6, 'jump', C.b], [8.1, 3.6, 'infinite', C.c]] }));
def('ivt', 'Intermediate Value Theorem', '', () => {
  let a = 1, b = 2; for (let i = 0; i < 60; i++) { const m = (a + b) / 2; if (m ** 3 - m - 1 < 0) a = m; else b = m; }
  setCap('ivt', `\\(f(x)=x^3-x-1\\) is continuous on \\([1,2]\\) with \\(f(1)=-1<0<5=f(2)\\), so some \\(c\\in(1,2)\\) has \\(f(c)=0\\); bisection gives \\(c\\approx${fmt(a, 4)}\\).`);
  return plot({ x: [0.5, 2.3], y: [-2, 6], xstep: 0.5, curves: [{ f: (x) => x ** 3 - x - 1, color: C.a }], vlines: [{ x: 1, label: 'a=1' }, { x: 2, label: 'b=2' }], points: [{ x: 1, y: -1, label: 'f(1)=−1', dy: 14 }, { x: 2, y: 5, label: 'f(2)=5', anchor: 'end', dx: -8 }, { x: a, y: 0, color: C.b, label: `c ≈ ${fmt(a, 4)}`, dx: -70 }] });
});

/* ---------- derivatives ---------- */
def('secant-tangent', 'Secant lines → tangent line', 'For \\(f(x)=x^2\\) at \\(x=1\\): secant slopes \\(\\dfrac{f(1+h)-f(1)}{h}=2+h\\) for \\(h=2,1,0.5\\) approach the tangent slope 2.', () =>
  plot({ x: [-1, 3.5], y: [-1, 10], curves: [{ f: (x) => x * x, color: C.ink, label: 'y = x²', labelAt: [2.55, 7.2] }, ...[2, 1, 0.5].map((h, i) => ({ f: (x) => 1 + (2 + h) * (x - 1), color: PAL[i + 1], dash: '5 3', label: `m = ${2 + h}`, labelAt: [3.05, 1 + (2 + h) * 2.05 > 9.5 ? 9.3 - i : 1 + (2 + h) * 2.05] })), { f: (x) => 1 + 2 * (x - 1), color: C.a, w: 2.4, label: 'tangent m = 2', labelAt: [2.4, 3.2] }], points: [{ x: 1, y: 1 }, ...[2, 1, 0.5].map((h) => ({ x: 1 + h, y: (1 + h) ** 2, r: 3 }))] }));
def('avg-inst', 'Average vs instantaneous rate', '\\(f(x)=x^2\\) on \\([1,3]\\): average rate \\(\\dfrac{f(3)-f(1)}{3-1}=4\\); instantaneous rate \\(f\'(2)=4\\) (parallel lines).', () =>
  plot({ x: [-0.5, 4], y: [-2, 12], curves: [{ f: (x) => x * x, color: C.ink }, { f: (x) => 1 + 4 * (x - 1), color: C.b, dash: '5 3', label: 'secant m = 4', labelAt: [3.05, 9.5] }, { f: (x) => 4 + 4 * (x - 2), color: C.a, label: 'tangent at x = 2', labelAt: [1.2, -1.2] }], points: [{ x: 1, y: 1 }, { x: 3, y: 9 }, { x: 2, y: 4, color: C.a }] }));
def('diff-quotient', 'Difference quotient', 'Secant slope from \\((x,f(x))\\) to \\((x+h,f(x+h))\\) is \\(\\dfrac{f(x+h)-f(x)}{h}\\); \\(f\'(x)=\\displaystyle\\lim_{h\\to0}\\dfrac{f(x+h)-f(x)}{h}\\). Shown for \\(f=\\sqrt{x}\\), \\(x=1\\), \\(h=2\\).', () =>
  plot({ x: [-0.3, 4], y: [-0.3, 2.3], xstep: 1, ystep: 0.5, curves: [{ f: sqrt, dom: [0, 4], color: C.ink }, { f: (x) => 1 + ((sqrt(3) - 1) / 2) * (x - 1), color: C.b, dash: '5 3' }], segs: [[1, 1, 3, 1, C.a, 1.5, '3 3'], [3, 1, 3, sqrt(3), C.a, 1.5, '3 3']], texts: [[2, 0.86, 'h = 2', C.a], [3.08, 1.36, 'f(x+h) − f(x)', C.a, 'start']], points: [{ x: 1, y: 1, label: '(x, f(x))', dy: -14, anchor: 'end', dx: -6 }, { x: 3, y: sqrt(3), label: '(x+h, f(x+h))', anchor: 'end', dx: -8 }] }));
def('deriv-table', 'Estimating f′ from a table', '', () => {
  const xs = [0, 1, 2, 3, 4], fx = xs.map((x) => 2 ** x), est = (fx[3] - fx[1]) / 2;
  setCap('deriv-table', `\\(f(x)=2^x\\) tabulated: \\(f'(2)\\approx\\dfrac{f(3)-f(1)}{3-1}=${est}\\); exact \\(f'(2)=4\\ln2\\approx${fmt(4 * log(2))}\\).`);
  return plot({ x: [-0.3, 4.5], y: [0, 17], curves: [{ f: (x) => 2 ** x, color: C.muted, dash: '4 3' }, { f: (x) => 4 + est * (x - 2), color: C.b, label: `symmetric slope ${est}`, labelAt: [2.9, 9.8] }, { f: (x) => 4 + 4 * log(2) * (x - 2), color: C.a, label: 'tangent', labelAt: [0.7, 0.8] }], points: xs.map((x, i) => ({ x, y: fx[i], label: `(${x}, ${fx[i]})`, anchor: 'end', dx: -8 })) });
});
def('nondiff', 'Where f is not differentiable', 'Corner \\(|x|\\), cusp \\(x^{2/3}\\), vertical tangent \\(x^{1/3}\\): each is continuous at 0 but \\(f\'(0)\\) does not exist. A jump discontinuity also rules out differentiability.', () =>
  plot({ x: [-2, 2], y: [-1.5, 2.2], xstep: 1, ystep: 1, curves: [{ f: abs, color: C.a, label: '|x|', labelAt: [1.6, 1.75] }, { f: (x) => Math.cbrt(x * x), color: C.b, label: 'x^(2/3)', labelAt: [-1.95, 1.85] }, { f: Math.cbrt, color: C.c, label: 'x^(1/3)', labelAt: [1.3, 0.85] }] }));
def('power-rule', 'Power rule: f = x³, f′ = 3x²', '\\(\\dfrac{d}{dx}x^n=nx^{n-1}\\). Where \\(x^3\\) is steepest, \\(3x^2\\) is largest; \\(f\'(0)=0\\).', () =>
  plot({ x: [-2, 2], y: [-6, 8], curves: [{ f: (x) => x ** 3, color: C.a, label: 'f = x³', labelAt: [1.3, 2.8] }, { f: (x) => 3 * x * x, color: C.b, dash: '6 3', label: 'f′ = 3x²', labelAt: [-1.95, 6.8] }] }));
def('sum-rule', 'Sum and constant-multiple rules', '\\(f=2x^2\\), \\(g=-x\\): \\((f+g)\'=4x-1\\). Slopes add pointwise.', () =>
  plot({ x: [-2, 2.5], y: [-3, 9], curves: [{ f: (x) => 2 * x * x, color: C.a, label: '2x²', labelAt: [-1.9, 7.8] }, { f: (x) => -x, color: C.b, label: '−x', labelAt: [2.05, -2.5] }, { f: (x) => 2 * x * x - x, color: C.c, label: '2x² − x', labelAt: [1.55, 4.5] }, { f: (x) => 4 * x - 1, color: C.c, dash: '5 3', label: '(2x² − x)′ = 4x − 1', labelAt: [0.25, -1.6] }] }));
def('trig-deriv', 'Derivatives of sin x and cos x', '\\((\\sin x)\'=\\cos x\\) and \\((\\cos x)\'=-\\sin x\\): the derivative curve is the original shifted left by \\(\\dfrac{\\pi}{2}\\).', () =>
  plot({ x: [-PI, 2 * PI], y: [-1.5, 1.5], piX: 0.5, ystep: 0.5, curves: [{ f: sin, color: C.a, label: 'sin x', labelAt: [PI / 2, 1.05] }, { f: cos, color: C.b, dash: '6 3', label: 'cos x = (sin x)′', labelAt: [-PI + 0.1, -1.3] }] }));
def('exp-ln-deriv', 'eˣ, ln x and their derivatives', '\\((e^x)\'=e^x\\) (the curve is its own slope); \\((\\ln x)\'=\\dfrac1x\\).', () =>
  plot({ x: [-2, 4], y: [-3, 6], curves: [{ f: exp, color: C.a, label: 'eˣ = (eˣ)′', labelAt: [0.1, 4.6] }, { f: log, dom: [0.01, 4], color: C.b, label: 'ln x', labelAt: [3.3, 1.75] }, { f: (x) => 1 / x, dom: [0.17, 4], color: C.b, dash: '6 3', label: '1/x', labelAt: [3.4, 0.55] }] }));
def('product-rule', 'Product rule area model', '\\((uv)\'=u\'v+uv\'\\): growing a \\(u\\times v\\) rectangle adds strips \\(v\\,\\Delta u\\) and \\(u\\,\\Delta v\\); the corner \\(\\Delta u\\,\\Delta v\\) vanishes faster.', () => {
  const s = rect(60, 40, 220, 150, { fill: C.a, op: 0.18 }) + rect(280, 40, 50, 150, { fill: C.b, op: 0.25 }) + rect(60, 190, 220, 35, { fill: C.c, op: 0.25 }) + rect(280, 190, 50, 35, { fill: C.muted, op: 0.25 })
    + text(170, 115, 'u · v', { size: 15 }) + text(305, 115, 'v Δu', { size: 12 }) + text(170, 207, 'u Δv', { size: 12 }) + text(305, 207, 'ΔuΔv', { size: 10 }) + text(170, 28, 'u', { size: 13 }) + text(305, 28, 'Δu', { size: 12 }) + text(45, 115, 'v', { size: 13 }) + text(42, 207, 'Δv', { size: 12 });
  return svg(380, 250, s, 'product rule area model');
});
def('quotient-rule', 'Quotient rule example', '\\(f(x)=\\dfrac{x}{x^2+1}\\), \\(f\'(x)=\\dfrac{(x^2+1)-x(2x)}{(x^2+1)^2}=\\dfrac{1-x^2}{(x^2+1)^2}\\); \\(f\'=0\\) at \\(x=\\pm1\\) (max \\(\\tfrac12\\), min \\(-\\tfrac12\\)).', () =>
  plot({ x: [-5, 5], y: [-1, 1.2], ystep: 0.5, curves: [{ f: (x) => x / (x * x + 1), color: C.a, label: 'f', labelAt: [1.3, 0.62] }, { f: (x) => (1 - x * x) / (x * x + 1) ** 2, color: C.b, dash: '6 3', label: 'f′', labelAt: [0.35, 1.05] }], points: [{ x: 1, y: 0.5, color: C.a }, { x: -1, y: -0.5, color: C.a }] }));
def('tan-sec', 'tan x and its derivative sec²x', '\\((\\tan x)\'=\\sec^2x\\ge1\\): tan increases on each branch; both have asymptotes at \\(x=\\dfrac{\\pi}{2}+k\\pi\\).', () =>
  plot({ x: [-PI, PI], y: [-4, 6], piX: 0.5, vlines: [{ x: -PI / 2 }, { x: PI / 2 }], curves: [{ f: tan, n: 1500, color: C.a, label: 'tan x', labelAt: [0.35, -1.6] }, { f: (x) => 1 / cos(x) ** 2, n: 1500, color: C.b, dash: '6 3', label: 'sec² x', labelAt: [-0.45, 2.2] }] }));
def('chain-rule', 'Chain rule: sin(x²)', '\\(\\dfrac{d}{dx}\\sin(x^2)=2x\\cos(x^2)\\): the inner rate \\(2x\\) scales the outer rate.', () =>
  plot({ x: [-3, 3], y: [-6, 6], curves: [{ f: (x) => sin(x * x), n: 800, color: C.a, label: 'sin(x²)', labelAt: [-2.95, 2] }, { f: (x) => 2 * x * cos(x * x), n: 800, color: C.b, dash: '5 3', label: '2x cos(x²)', labelAt: [1.2, 5.2] }] }));
def('implicit-circle', 'Implicit differentiation: circle', '\\(x^2+y^2=25\\Rightarrow\\dfrac{dy}{dx}=-\\dfrac{x}{y}\\). At \\((3,4)\\): slope \\(-\\dfrac34\\); tangent \\(y=4-\\tfrac34(x-3)\\).', () =>
  plot({ W: 400, H: 380, x: [-7, 7], y: [-7, 7], curves: [{ param: (t) => [5 * cos(t), 5 * sin(t)], dom: [0, 2 * PI], color: C.a }, { f: (x) => 4 - 0.75 * (x - 3), color: C.b, label: 'm = −3/4', labelAt: [-0.6, 6.2] }], points: [{ x: 3, y: 4, label: '(3, 4)' }] }));
def('implicit-folium', 'Folium of Descartes x³ + y³ = 6xy', 'Parametrized by \\(x=\\dfrac{6t}{1+t^3}\\), \\(y=\\dfrac{6t^2}{1+t^3}\\). \\(\\dfrac{dy}{dx}=\\dfrac{2y-x^2}{y^2-2x}\\); horizontal tangent at \\((2\\sqrt[3]{2},\\,2\\sqrt[3]{4})\\approx(2.52,3.17)\\).', () =>
  plot({ W: 400, H: 380, x: [-5, 5], y: [-5, 5], curves: [{ param: (t) => [6 * t / (1 + t ** 3), 6 * t * t / (1 + t ** 3)], dom: [-0.75, 40], n: 3000, color: C.a }, { param: (t) => [6 * t / (1 + t ** 3), 6 * t * t / (1 + t ** 3)], dom: [-40, -1.35], n: 3000, color: C.a }, { f: (x) => -x - 2, color: C.muted, dash: '3 3', label: 'asymptote y = −x − 2', labelAt: [-4.8, 3.3] }], segs: [[1.9, 2 * Math.cbrt(4), 3.15, 2 * Math.cbrt(4), C.b, 2]], points: [{ x: 2 * Math.cbrt(2), y: 2 * Math.cbrt(4), color: C.b, label: 'dy/dx = 0' }] }));
def('implicit-behavior', 'Horizontal & vertical tangents of x² + xy + y² = 3', '\\(\\dfrac{dy}{dx}=-\\dfrac{2x+y}{x+2y}\\). Horizontal tangents where \\(y=-2x\\): \\((1,-2),(-1,2)\\); vertical where \\(x=-2y\\): \\((-2,1),(2,-1)\\).', () =>
  plot({ W: 400, H: 380, x: [-3, 3], y: [-3, 3], curves: [{ param: (t) => { const u = sqrt(2) * cos(t), v = sqrt(6) * sin(t); return [(u - v) / sqrt(2), (u + v) / sqrt(2)]; }, dom: [0, 2 * PI], color: C.a }], segs: [[0.4, -2, 1.6, -2, C.b, 2], [-1.6, 2, -0.4, 2, C.b, 2], [-2, 0.4, -2, 1.6, C.c, 2], [2, -1.6, 2, -0.4, C.c, 2]], points: [{ x: 1, y: -2, color: C.b, label: '(1, −2)', dy: 14 }, { x: -1, y: 2, color: C.b, label: '(−1, 2)' }, { x: -2, y: 1, color: C.c, label: '(−2, 1)', anchor: 'end', dx: -8 }, { x: 2, y: -1, color: C.c, label: '(2, −1)' }] }));
def('inverse-deriv', 'Derivative of an inverse function', '\\(f=e^x\\), \\(f^{-1}=\\ln x\\). Slope of \\(f\\) at \\((1,e)\\) is \\(e\\); slope of \\(f^{-1}\\) at \\((e,1)\\) is \\(\\dfrac1e\\): \\((f^{-1})\'(b)=\\dfrac{1}{f\'(f^{-1}(b))}\\).', () =>
  plot({ W: 400, H: 380, x: [-2, 5], y: [-2, 5], curves: [{ f: exp, color: C.a, label: 'eˣ', labelAt: [1.35, 4.1] }, { f: log, dom: [0.01, 5], color: C.b, label: 'ln x', labelAt: [4.2, 1.1] }, { f: (x) => x, color: C.muted, dash: '4 4', label: 'y = x', labelAt: [3.9, 4.6] }, { f: (x) => E + E * (x - 1), color: C.a, dash: '5 3' }, { f: (x) => 1 + (x - E) / E, color: C.b, dash: '5 3' }], points: [{ x: 1, y: E, color: C.a, label: '(1, e)', anchor: 'end', dx: -8 }, { x: E, y: 1, color: C.b, label: '(e, 1)', dy: 14 }] }));
def('inverse-trig', 'Inverse trig functions', '\\(\\arcsin x\\) on \\([-1,1]\\), range \\(\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right]\\); \\(\\arctan x\\) with asymptotes \\(y=\\pm\\dfrac{\\pi}{2}\\). \\((\\arcsin x)\'=\\dfrac{1}{\\sqrt{1-x^2}}\\), \\((\\arctan x)\'=\\dfrac{1}{1+x^2}\\).', () =>
  plot({ x: [-5, 5], y: [-2, 2], ystep: 0.5, hlines: [{ y: PI / 2, label: 'π/2' }, { y: -PI / 2, label: '−π/2' }], curves: [{ f: asin, dom: [-1, 1], color: C.a, label: 'arcsin x', labelAt: [1.05, 1.25] }, { f: atan, color: C.b, label: 'arctan x', labelAt: [2.6, 0.95] }, { f: (x) => 1 / (1 + x * x), color: C.b, dash: '5 3', label: '1/(1+x²)', labelAt: [-4.8, 0.3] }] }));
def('fff', 'f, f′, f″ for f = x³ − 3x', '\\(f\'=3x^2-3\\) is zero at \\(\\pm1\\) (local max at −1, local min at 1); \\(f\'\'=6x\\) is zero at 0 (inflection point).', () =>
  plot({ x: [-2.5, 2.5], y: [-6, 6], curves: [{ f: (x) => x ** 3 - 3 * x, color: C.a, label: 'f', labelAt: [2.05, 2.6] }, { f: (x) => 3 * x * x - 3, color: C.b, dash: '6 3', label: 'f′', labelAt: [-2.25, 4.6] }, { f: (x) => 6 * x, color: C.c, dash: '2 3', label: 'f″', labelAt: [0.75, 5.2] }], points: [{ x: -1, y: 2, color: C.a }, { x: 1, y: -2, color: C.a }, { x: 0, y: 0, color: C.c }] }));
function stack3(fns, dom, yr, names, piX) {
  const W = 480, H = 170; let s = '';
  fns.forEach((g, i) => { const inner = plot({ W, H, x: dom, y: yr[i], piX, curves: [{ f: g, color: PAL[i] }], texts: [[dom[0] + (dom[1] - dom[0]) * 0.05, yr[i][0] + (yr[i][1] - yr[i][0]) * 0.85, names[i], PAL[i], 'start', true]] }); s += `<g transform="translate(0,${i * H})">${inner.replace(/^<svg[^>]*>/, '').replace(/<\/svg>$/, '')}</g>`; });
  return svg(W, 3 * H, s, names.join(' / ') + ' panels');
}
def('fff-panels', 'Stacked f / f′ / f″ panels', '\\(f(x)=x^4-4x^2\\): \\(f\'=4x^3-8x\\) is zero at \\(0,\\pm\\sqrt2\\) (extrema of f); \\(f\'\'=12x^2-8\\) is zero at \\(\\pm\\sqrt{\\tfrac23}\\approx\\pm0.816\\) (inflection points). Vertical alignment shows the correspondence.', () =>
  stack3([(x) => x ** 4 - 4 * x * x, (x) => 4 * x ** 3 - 8 * x, (x) => 12 * x * x - 8], [-2.3, 2.3], [[-5, 6], [-12, 12], [-10, 40]], ['f', 'f′', 'f″']));
def('f-from-fprime', 'Reading f from the graph of f′', 'Given \\(f\'(x)=(x+1)(x-2)\\): f increases where \\(f\'>0\\) (\\(x<-1\\) or \\(x>2\\)), local max at −1, local min at 2, inflection at \\(x=\\tfrac12\\) where \\(f\'\\) has its minimum. Dashed: \\(f=\\dfrac{x^3}{3}-\\dfrac{x^2}{2}-2x\\).', () =>
  plot({ x: [-3, 4], y: [-4, 6], vlines: [{ x: -1, label: 'max f' }, { x: 2, label: 'min f' }, { x: 0.5, label: 'infl.', color: C.c }], curves: [{ f: (x) => (x + 1) * (x - 2), color: C.b, label: 'f′', labelAt: [3.1, 4.4] }, { f: (x) => x ** 3 / 3 - x * x / 2 - 2 * x, color: C.a, dash: '6 3', label: 'f', labelAt: [-2.9, -3.2] }] }));
def('higher-deriv', 'Higher-order derivatives of eˣ sin x', '\\(f=e^{x}\\sin x\\), \\(f\'=e^x(\\sin x+\\cos x)\\), \\(f\'\'=2e^x\\cos x\\).', () =>
  plot({ x: [-PI, PI], y: [-6, 8], piX: 0.5, curves: [{ f: (x) => exp(x) * sin(x), color: C.a, label: 'f', labelAt: [2.6, 3] }, { f: (x) => exp(x) * (sin(x) + cos(x)), color: C.b, dash: '6 3', label: 'f′', labelAt: [1.25, 7.2] }, { f: (x) => 2 * exp(x) * cos(x), color: C.c, dash: '2 3', label: 'f″', labelAt: [0.1, 3.6] }] }));

/* ---------- applications of derivatives ---------- */
def('motion-svt', 'Position, velocity, acceleration (stacked)', '\\(s=t^3-6t^2+9t\\), \\(v=3t^2-12t+9=3(t-1)(t-3)\\), \\(a=6t-12\\). At rest at \\(t=1,3\\); speeding up when v and a share a sign (\\(1<t<2\\), \\(t>3\\)).', () =>
  stack3([(t) => t ** 3 - 6 * t * t + 9 * t, (t) => 3 * t * t - 12 * t + 9, (t) => 6 * t - 12], [0, 4.2], [[-1, 6], [-4, 12], [-13, 14]], ['s(t)', 'v(t)', 'a(t)']));
def('context-rate', 'Derivative in context (units)', '\\(T(t)=20+60e^{-0.1t}\\) (°C, min). \\(T\'(5)=-6e^{-0.5}\\approx-3.64\\) °C/min: at 5 min the coffee cools about 3.64 °C per minute.', () =>
  plot({ x: [0, 30], y: [0, 85], xlabel: 't (min)', ylabel: 'T (°C)', curves: [{ f: (t) => 20 + 60 * exp(-0.1 * t), color: C.a }, { f: (t) => 20 + 60 * exp(-0.5) - 6 * exp(-0.5) * (t - 5), dom: [0, 14], color: C.b, dash: '5 3', label: 'slope −3.64', labelAt: [11, 40] }], hlines: [{ y: 20, label: 'room 20 °C' }], points: [{ x: 5, y: 20 + 60 * exp(-0.5) }] }));
def('marginal', 'Rates in applied contexts: marginal cost', '\\(C(x)=0.01x^3-0.6x^2+13x\\); marginal cost \\(C\'(x)=0.03x^2-1.2x+13\\) is minimized at \\(x=20\\), where \\(C\'=1\\).', () =>
  plot({ x: [0, 40], y: [0, 40], xlabel: 'units x', curves: [{ f: (x) => 0.03 * x * x - 1.2 * x + 13, color: C.b, label: 'C′(x)', labelAt: [33, 21] }, { f: (x) => (0.01 * x ** 3 - 0.6 * x * x + 13 * x) / 10, color: C.a, label: 'C(x)/10', labelAt: [31, 34] }], points: [{ x: 20, y: 1, color: C.b, label: 'min (20, 1)', dy: -12 }] }));
def('ladder', 'Related rates: sliding ladder', 'Ladder length 10: \\(x^2+y^2=100\\Rightarrow x\\dfrac{dx}{dt}+y\\dfrac{dy}{dt}=0\\). With \\(x=6\\), \\(\\dfrac{dx}{dt}=2\\): \\(y=8\\), \\(\\dfrac{dy}{dt}=-\\dfrac{6\\cdot2}{8}=-1.5\\).', () => {
  const s = line(40, 250, 360, 250, { w: 2 }) + line(40, 250, 40, 20, { w: 2 }) + line(40 + 6 * 24, 250, 40, 250 - 8 * 24, { color: C.a, w: 4 }) + text(122, 140, '10', { size: 14, color: C.a }) + text(112, 266, 'x = 6') + text(22, 160, 'y = 8', { rotate: -90 }) + arrow(190, 238, 236, 238, { color: C.b }) + text(244, 238, 'dx/dt = 2', { color: C.b, anchor: 'start' }) + arrow(54, 62, 54, 100, { color: C.c }) + text(62, 80, 'dy/dt = ?', { color: C.c, anchor: 'start' });
  return svg(380, 280, s, 'ladder related rates');
});
def('cone-tank', 'Related rates: conical tank', 'Cone radius 4, height 10, so \\(r=\\dfrac{2}{5}h\\) and \\(V=\\dfrac{\\pi}{3}r^2h=\\dfrac{4\\pi}{75}h^3\\). Filling at 3 m³/min, at \\(h=5\\): \\(\\dfrac{dh}{dt}=\\dfrac{3}{\\frac{4\\pi}{25}\\cdot25}=\\dfrac{3}{4\\pi}\\approx0.239\\) m/min.', () => {
  const cx = 190, top = 30, ap = 270, sc = 24, hw = 4 * sc, wl = ap - 5 * sc, ww = 2 * sc;
  let s = path(`M${cx - hw},${top} L${cx},${ap} L${cx + hw},${top}`, { w: 2 }) + `<ellipse cx="${cx}" cy="${top}" rx="${hw}" ry="10" fill="none" stroke="${C.ink}"/>`;
  s += path(`M${cx - ww},${wl} L${cx},${ap} L${cx + ww},${wl} Z`, { fill: C.a, op: 0.3, stroke: C.a }) + `<ellipse cx="${cx}" cy="${wl}" rx="${ww}" ry="5" fill="${C.a}" fill-opacity="0.35" stroke="${C.a}"/>`;
  s += line(cx + hw + 20, top, cx + hw + 20, ap, { color: C.muted }) + text(cx + hw + 28, (top + ap) / 2, 'H = 10', { anchor: 'start' }) + line(cx, top, cx + hw, top, { color: C.muted, dash: '3 3' }) + text(cx + hw / 2, top - 12, 'R = 4') + line(cx - ww - 20, wl, cx - ww - 20, ap, { color: C.a }) + text(cx - ww - 26, (wl + ap) / 2, 'h = 5', { anchor: 'end', color: C.a }) + text(cx + ww / 2, wl - 12, 'r = 2', { color: C.a });
  return svg(380, 290, s, 'conical tank');
});
def('linearization', 'Local linearity / tangent-line approximation', '\\(L(x)=2+\\dfrac{1}{4}(x-4)\\) approximates \\(\\sqrt{x}\\) near 4: \\(L(4.41)=2.1025\\) vs \\(\\sqrt{4.41}=2.1\\) (over-estimate since \\(\\sqrt x\\) is concave down).', () =>
  plot({ x: [0, 9], y: [0, 3.5], ystep: 0.5, curves: [{ f: sqrt, dom: [0, 9], color: C.a, label: '√x', labelAt: [7.8, 2.55] }, { f: (x) => 2 + (x - 4) / 4, color: C.b, dash: '6 3', label: 'L(x)', labelAt: [7.6, 3.2] }], points: [{ x: 4, y: 2, label: '(4, 2)', dy: 14 }] }));
def('lhopital', "L'Hospital's rule (0/0)", "\\(\\dfrac{e^x-1}{x}\\) is \\(\\dfrac00\\) at 0; the ratio of derivatives \\(\\dfrac{e^x}{1}\\to1\\). Near 0, \\(e^x-1\\) and \\(x\\) share the tangent line \\(y=x\\).", () =>
  plot({ x: [-2, 2], y: [-2, 4], curves: [{ f: (x) => exp(x) - 1, color: C.a, label: 'eˣ − 1', labelAt: [1.15, 3.2] }, { f: (x) => x, color: C.b, label: 'x', labelAt: [1.75, 1.35] }, { f: (x) => (abs(x) < 1e-9 ? NaN : (exp(x) - 1) / x), color: C.c, dash: '6 3', label: 'ratio → 1', labelAt: [-1.95, 0.75] }], points: [{ x: 0, y: 1, open: true, color: C.c }] }));
def('lhopital-inf', "L'Hospital (∞/∞): polynomial vs exponential", "\\(\\displaystyle\\lim_{x\\to\\infty}\\dfrac{x^2}{e^x}=\\lim\\dfrac{2x}{e^x}=\\lim\\dfrac{2}{e^x}=0\\). Maximum of \\(\\dfrac{x^2}{e^x}\\) is \\(\\dfrac{4}{e^2}\\) at \\(x=2\\).", () =>
  plot({ x: [0, 12], y: [0, 0.8], ystep: 0.2, curves: [{ f: (x) => x * x / exp(x), color: C.a, label: 'x²/eˣ', labelAt: [3.2, 0.62] }, { f: (x) => x / exp(x), color: C.b, label: 'x/eˣ', labelAt: [0.2, 0.47] }], points: [{ x: 2, y: 4 / E ** 2, label: 'max 4/e²' }] }));
def('mvt', 'Mean Value Theorem', '', () => {
  const f = (x) => x ** 3 - 3 * x * x + 2 * x + 1, a = 0, b = 3, m = (f(b) - f(a)) / (b - a), c = (6 + sqrt(36 - 12 * (2 - m))) / 6;
  setCap('mvt', `\\(f(x)=x^3-3x^2+2x+1\\) on \\([0,3]\\): secant slope \\(\\dfrac{f(3)-f(0)}{3-0}=${fmt(m)}\\). Solving \\(f'(c)=3c^2-6c+2=${fmt(m)}\\) gives \\(c=1+\\dfrac{\\sqrt{6}}{3}\\approx${fmt(c)}\\in(0,3)\\).`);
  return plot({ x: [-0.5, 3.5], y: [-1, 8], curves: [{ f, color: C.a }, { f: (x) => f(a) + m * x, color: C.b, dash: '6 3', label: 'secant', labelAt: [2.2, 5.7] }, { f: (x) => f(c) + m * (x - c), color: C.c, label: 'tangent at c', labelAt: [2.4, 1.6] }], points: [{ x: 0, y: f(0) }, { x: 3, y: f(3) }, { x: c, y: f(c), color: C.c, label: `c ≈ ${fmt(c, 3)}`, dy: 14 }] });
});
def('evt', 'Extreme Value Theorem: absolute vs local extrema', '\\(f(x)=x^3-6x^2+9x+1\\) on \\([0,4.5]\\): \\(f(0)=1\\), \\(f(1)=5\\) (local max), \\(f(3)=1\\) (local min), \\(f(4.5)=11.125\\) (absolute max). Absolute min 1 at \\(x=0\\) and \\(x=3\\).', () =>
  plot({ x: [-0.3, 4.8], y: [-1, 12.5], curves: [{ f: (x) => x ** 3 - 6 * x * x + 9 * x + 1, dom: [0, 4.5], color: C.a }], points: [{ x: 0, y: 1, label: 'abs min', dy: 14 }, { x: 1, y: 5, label: 'local max' }, { x: 3, y: 1, label: 'abs & local min', dy: 14 }, { x: 4.5, y: 11.125, label: 'abs max', anchor: 'end', dx: -8 }] }));
def('inc-dec', 'Increasing / decreasing from the sign of f′', '\\(f=x^3-3x\\), \\(f\'=3(x-1)(x+1)\\): f increases on \\((-\\infty,-1)\\) and \\((1,\\infty)\\), decreases on \\((-1,1)\\) (shaded, where \\(f\'<0\\)).', () =>
  plot({ x: [-2.5, 2.5], y: [-5, 6], fills: [{ f: () => 6, g: () => -5, dom: [-1, 1], color: C.e, op: 0.08 }], curves: [{ f: (x) => x ** 3 - 3 * x, color: C.a, label: 'f', labelAt: [2.1, 2.4] }, { f: (x) => 3 * x * x - 3, color: C.b, dash: '6 3', label: 'f′', labelAt: [-2.35, 4.7] }] }));
function signChart(title, zeros, signs, labels) {
  const W = 480, H = 120, L = 40, R = 440; let s = text(W / 2, 16, title, { bold: true }) + line(L, 60, R, 60, { arrow: true });
  const xs = zeros.map((_, i) => L + ((i + 1) * (R - L)) / (zeros.length + 1));
  xs.forEach((x, i) => { s += line(x, 52, x, 68) + text(x, 82, zeros[i]); });
  const mids = [L, ...xs, R]; signs.forEach((sg, i) => { const x = (mids[i] + mids[i + 1]) / 2; s += text(x, 44, sg, { size: 16, color: sg === '+' ? C.c : C.e, bold: true }); if (labels) s += text(x, 104, labels[i], { size: 11, color: C.muted }); });
  return svg(W, H, s, title);
}
def('fdt-chart', 'First derivative test sign chart', 'Sign chart of \\(f\'(x)=3(x+1)(x-1)\\): + then − then + ⇒ local max at \\(x=-1\\), local min at \\(x=1\\).', () => signChart('sign of f′(x) = 3(x+1)(x−1)', ['−1', '1'], ['+', '−', '+'], ['f increasing', 'f decreasing', 'f increasing']));
def('candidates', 'Candidates (closed interval) test', '\\(f(x)=2x^3-3x^2-12x\\) on \\([-2,3]\\): \\(f(-2)=-4\\), \\(f(-1)=7\\), \\(f(2)=-20\\), \\(f(3)=-9\\) ⇒ absolute max 7, absolute min −20.', () =>
  plot({ x: [-2.5, 3.5], y: [-24, 12], curves: [{ f: (x) => 2 * x ** 3 - 3 * x * x - 12 * x, dom: [-2, 3], color: C.a }], points: [[-2, -4], [-1, 7], [2, -20], [3, -9]].map(([x, y]) => ({ x, y, label: `(${x}, ${y})`, color: y === 7 || y === -20 ? C.b : C.ink, dy: y === -20 ? 14 : -12 })) }));
def('concavity', 'Concavity and inflection', '\\(f=\\sin x\\) on \\([0,2\\pi]\\): \\(f\'\'=-\\sin x<0\\) on \\((0,\\pi)\\) (concave down), \\(>0\\) on \\((\\pi,2\\pi)\\) (concave up); inflection at \\(x=\\pi\\).', () =>
  plot({ x: [0, 2 * PI], y: [-1.5, 1.5], piX: 0.5, ystep: 0.5, fills: [{ f: () => 1.5, g: () => -1.5, dom: [PI, 2 * PI], color: C.c, op: 0.04 }], curves: [{ f: sin, color: C.a, label: 'f = sin x', labelAt: [0.35, 1.1] }, { f: (x) => -sin(x), color: C.c, dash: '5 3', label: 'f″', labelAt: [4.4, 1.2], labelColor: C.ink }], points: [{ x: PI, y: 0, color: C.b, label: 'inflection' }], texts: [[PI / 2, -1.25, 'concave down', C.ink], [1.5 * PI, -1.25, 'concave up', C.ink]] }));
def('sdt', 'Second derivative test', '\\(f=x^4-2x^2\\): \\(f\'=4x^3-4x=0\\) at \\(0,\\pm1\\). \\(f\'\'=12x^2-4\\): \\(f\'\'(\\pm1)=8>0\\) (local min), \\(f\'\'(0)=-4<0\\) (local max).', () =>
  plot({ x: [-2, 2], y: [-1.5, 3], ystep: 0.5, curves: [{ f: (x) => x ** 4 - 2 * x * x, color: C.a }], points: [{ x: -1, y: -1, label: 'f″ = 8: min', dy: 14, anchor: 'end', dx: -4 }, { x: 1, y: -1, label: 'f″ = 8: min', dy: 14 }, { x: 0, y: 0, label: 'f″ = −4: max' }] }));
def('optimization', 'Optimization: open-top box volume', 'Square sheet 12×12, cut squares of side x: \\(V(x)=x(12-2x)^2\\), \\(V\'=(12-2x)(12-6x)=0\\Rightarrow x=2\\), \\(V_{\\max}=128\\).', () =>
  plot({ x: [0, 6.3], y: [0, 150], xlabel: 'x', ylabel: 'V(x)', curves: [{ f: (x) => x * (12 - 2 * x) ** 2, dom: [0, 6], color: C.a }], points: [{ x: 2, y: 128, color: C.b, label: 'max (2, 128)' }] }));
def('optimization-diagram', 'Optimization setup: box net', 'Cut \\(x\\times x\\) corners from a 12×12 sheet and fold: base \\((12-2x)^2\\), height \\(x\\). Drawn to scale for \\(x=2\\).', () => {
  const o = 40, sc = 20; let s = rect(o, o, 12 * sc, 12 * sc, {});
  for (const [i, j] of [[0, 0], [10, 0], [0, 10], [10, 10]]) s += rect(o + i * sc, o + j * sc, 2 * sc, 2 * sc, { fill: C.e, op: 0.25, stroke: C.e });
  s += rect(o + 2 * sc, o + 2 * sc, 8 * sc, 8 * sc, { dash: '5 4', stroke: C.a }) + text(o + 6 * sc, o + 6 * sc, '12 − 2x') + text(o + sc, o + sc, 'x', { size: 11 }) + text(o + 6 * sc, o - 12, '12');
  return svg(320, 300, s, 'box net');
});

/* ---------- integration ---------- */
def('accum-velocity', 'Accumulation of change: area under v(t)', '', () => {
  const v = (t) => 2 * sin((PI * t) / 4), disp = simpson(v, 0, 6), dist = simpson((t) => abs(v(t)), 0, 6, 1200);
  setCap('accum-velocity', `\\(v(t)=2\\sin\\!\\left(\\dfrac{\\pi t}{4}\\right)\\) on \\([0,6]\\). Area above axis \\(\\displaystyle\\int_0^4 v\\,dt=\\dfrac{16}{\\pi}\\), below \\(\\displaystyle\\int_4^6 v\\,dt=-\\dfrac{8}{\\pi}\\). Displacement \\(=\\dfrac{8}{\\pi}\\approx${fmt(disp)}\\); total distance \\(=\\dfrac{24}{\\pi}\\approx${fmt(dist)}\\).`);
  return plot({ x: [0, 6.5], y: [-2.5, 2.5], xlabel: 't', ylabel: 'v(t)', fills: [{ f: v, dom: [0, 4], color: C.a }, { f: v, dom: [4, 6], color: C.e }], curves: [{ f: v, dom: [0, 6], color: C.ink }], fracs: [[2, 0.8, '16', 'π', C.a, '+'], [5, -0.7, '8', 'π', C.e, '−']] });
});
def('ftc-accum', 'Accumulation function g(x) = ∫₀ˣ f(t) dt', 'With \\(f(t)=\\cos t\\): \\(g(x)=\\int_0^x\\cos t\\,dt=\\sin x\\), so \\(g\'(x)=f(x)\\) (FTC part 1). g increases where \\(f>0\\). Shaded: \\(g(2)\\).', () =>
  plot({ x: [0, 2 * PI], y: [-1.5, 1.5], piX: 0.5, ystep: 0.5, fills: [{ f: cos, dom: [0, 2], color: C.a }], curves: [{ f: cos, color: C.b, label: 'f(t) = cos t', labelAt: [4.9, 0.55] }, { f: sin, color: C.a, w: 2.5, label: 'g(x) = sin x', labelAt: [2.4, 1.15] }], vlines: [{ x: 2, label: 'x = 2' }], points: [{ x: 2, y: sin(2), color: C.a, label: `g(2) = ${fmt(sin(2))}` }] }));
def('accum-graph', 'Behavior of g(x) = ∫₋₂ˣ f(t) dt from a graph of f', '', () => {
  const P = [[-2, 0], [-1, 2], [1, 2], [2, 0], [3, -2], [4, 0]];
  const f = (x) => { for (let i = 0; i < P.length - 1; i++) { const [a, fa] = P[i], [b, fb] = P[i + 1]; if (x >= a && x <= b) return fa + ((fb - fa) * (x - a)) / (b - a); } return NaN; };
  const g = (x) => (x <= -2 ? 0 : simpson(f, -2, x, 200));
  setCap('accum-graph', `f is piecewise linear (AP free-response style). \\(g(x)=\\displaystyle\\int_{-2}^{x}f(t)\\,dt\\) (dashed): \\(g(2)=${fmt(g(2))}\\), \\(g(4)=${fmt(g(4))}\\). g has its maximum at \\(x=2\\) where f changes from + to −, and is concave down where f decreases.`);
  return plot({ x: [-2.5, 4.5], y: [-3, 7], fills: [{ f, dom: [-2, 2], color: C.a }, { f, dom: [2, 4], color: C.e }], curves: [{ pts: P, color: C.ink, label: 'f', labelAt: [-0.4, 2.1] }, { f: g, dom: [-2, 4], n: 120, color: C.a, dash: '6 3', label: 'g', labelAt: [1.3, 5.4] }], points: P.map(([x, y]) => ({ x, y, r: 2.5 })) });
});
def('integral-props', 'Properties of definite integrals', '\\(\\int_a^c f=\\int_a^b f+\\int_b^c f\\); area below the axis counts negatively: \\(\\int_0^{2\\pi}\\sin x\\,dx=2+(-2)=0\\).', () =>
  plot({ x: [0, 2 * PI], y: [-1.4, 1.4], piX: 0.5, ystep: 0.5, fills: [{ f: sin, dom: [0, PI], color: C.a }, { f: sin, dom: [PI, 2 * PI], color: C.e }], curves: [{ f: sin, color: C.ink }], texts: [[PI / 2, 0.4, '+2', C.a, 'middle', true], [1.5 * PI, -0.4, '−2', C.e, 'middle', true]] }));
def('ftc-area', 'FTC part 2: area under x² on [1, 3]', '\\(\\displaystyle\\int_1^3x^2\\,dx=\\left[\\dfrac{x^3}{3}\\right]_1^3=\\dfrac{27-1}{3}=\\dfrac{26}{3}\\).', () =>
  plot({ x: [-0.5, 3.6], y: [-0.5, 10], fills: [{ f: (x) => x * x, dom: [1, 3] }], curves: [{ f: (x) => x * x, color: C.ink }], fracs: [[2.25, 2.5, '26', '3', C.a, 'A =']] }));
def('antideriv-family', 'Family of antiderivatives F(x) + C', 'All antiderivatives of \\(f(x)=2x\\) are \\(x^2+C\\): vertical shifts with identical slopes at each x (tangents at \\(x=1\\) drawn, slope 2).', () =>
  plot({ x: [-2.5, 2.5], y: [-3, 6.5], curves: [-2, -1, 0, 1, 2].map((c, i) => ({ f: (x) => x * x + c, color: PAL[i], label: `C = ${c}`, labelAt: [-2.45, 5.6 + c - 0.4], anchor: 'start' })), segs: [-2, -1, 0, 1, 2].map((c) => [0.6, 1 + c - 0.8, 1.4, 1 + c + 0.8, C.muted, 1, '2 2']) }));
def('u-sub', 'Integration by substitution', '\\(\\int_0^{\\sqrt{\\pi}}2x\\cos(x^2)\\,dx\\) with \\(u=x^2\\): \\(\\int_0^{\\pi}\\cos u\\,du=\\sin\\pi-\\sin0=0\\). Positive and negative areas (each 1) cancel.', () =>
  plot({ x: [0, 2], y: [-4, 2.5], fills: [{ f: (x) => 2 * x * cos(x * x), dom: [0, sqrt(PI / 2)], color: C.a }, { f: (x) => 2 * x * cos(x * x), dom: [sqrt(PI / 2), sqrt(PI)], color: C.e }], curves: [{ f: (x) => 2 * x * cos(x * x), color: C.ink }], vlines: [{ x: sqrt(PI), label: '√π' }] }));
def('ibp', 'Integration by parts', '', () => {
  setCap('ibp', `\\(\\int_0^1xe^x\\,dx=\\big[xe^x-e^x\\big]_0^1=(e-e)-(0-1)=1\\); Simpson check ${fmt(simpson((x) => x * exp(x), 0, 1), 6)}.`);
  return plot({ x: [-0.2, 1.5], y: [-0.3, 4], xstep: 0.5, fills: [{ f: (x) => x * exp(x), dom: [0, 1] }], curves: [{ f: (x) => x * exp(x), color: C.ink, label: 'x eˣ', labelAt: [1.2, 3.5] }], texts: [[0.72, 0.5, 'area = 1', C.a]] });
});
def('partial-frac', 'Partial fractions', '\\(\\dfrac{1}{x(x+1)}=\\dfrac1x-\\dfrac{1}{x+1}\\); \\(\\displaystyle\\int_1^3\\dfrac{dx}{x(x+1)}=\\ln\\dfrac{3}{2}\\approx0.405\\).', () =>
  plot({ x: [0, 4], y: [0, 1.2], xstep: 1, ystep: 0.2, fills: [{ f: (x) => 1 / (x * (x + 1)), dom: [1, 3] }], curves: [{ f: (x) => 1 / (x * (x + 1)), dom: [0.4, 4], color: C.ink }], texts: [[2, 0.35, `≈ ${fmt(simpson((x) => 1 / (x * (x + 1)), 1, 3))}`, C.a]] }));
def('improper', 'Improper integrals: 1/x² converges, 1/x diverges', '\\(\\int_1^\\infty\\dfrac{dx}{x^2}=\\lim_{b\\to\\infty}\\left(1-\\dfrac1b\\right)=1\\); \\(\\int_1^\\infty\\dfrac{dx}{x}=\\lim_{b\\to\\infty}\\ln b=\\infty\\).', () =>
  plot({ x: [0, 10], y: [0, 1.3], ystep: 0.2, fills: [{ f: (x) => 1 / x, g: (x) => 1 / (x * x), dom: [1, 10], color: C.e, op: 0.15 }, { f: (x) => 1 / (x * x), dom: [1, 10], color: C.a }], curves: [{ f: (x) => 1 / x, dom: [0.77, 10], color: C.e, label: '1/x', labelAt: [6, 0.2] }, { f: (x) => 1 / (x * x), dom: [0.88, 10], color: C.a, label: '1/x²', labelAt: [2.4, 0.06] }] }));
def('arctan-int', 'Other techniques: ∫ 1/(1+x²) dx = arctan x', '\\(\\int_0^1\\dfrac{dx}{1+x^2}=\\arctan1=\\dfrac{\\pi}{4}\\); over all reals the integral is \\(\\pi\\).', () =>
  plot({ x: [-4, 4], y: [0, 1.2], ystep: 0.25, fills: [{ f: (x) => 1 / (1 + x * x), dom: [0, 1] }], curves: [{ f: (x) => 1 / (1 + x * x), color: C.ink }], fracs: [[0.5, 0.3, 'π', '4', C.a]] }));

/* ---------- differential equations ---------- */
def('exp-model', 'Exponential models dy/dt = ky', 'Solutions \\(y=y_0e^{kt}\\) for \\(k=0.5,0,-0.5\\) with \\(y_0=2\\). Doubling time \\(\\dfrac{\\ln2}{k}\\approx1.386\\) for \\(k=0.5\\).', () =>
  plot({ x: [0, 4], y: [0, 12], xlabel: 't', curves: [0.5, 0, -0.5].map((k, i) => ({ f: (t) => 2 * exp(k * t), color: PAL[i], label: `k = ${k}`, labelAt: [3.4, 2 * exp(k * 3.4)] })) }));
def('de-verify', 'Verifying solutions: y = Ce²ˣ solves y′ = 2y', 'Substituting \\(y=Ce^{2x}\\): \\(y\'=2Ce^{2x}=2y\\) for every C. Curves for \\(C=-1,-\\tfrac12,\\tfrac12,1\\) follow the slope field of \\(y\'=2y\\).', () =>
  plot({ x: [-2, 1.2], y: [-6, 6], field: { dydx: (x, y) => 2 * y, nx: 12, ny: 10 }, curves: [-1, -0.5, 0.5, 1].map((c, i) => ({ f: (x) => c * exp(2 * x), color: PAL[i] })) }));
const SF = [
  ['sf-xy', 'dy/dx = x − y', '\\dfrac{dy}{dx}=x-y', (x, y) => x - y, { f: (x) => x - 1 + 2 * exp(-x) }, '\\(y=x-1+2e^{-x}\\) through \\((0,1)\\); the line \\(y=x-1\\) is itself a solution', [-3, 3]],
  ['sf-xy2', 'dy/dx = xy', '\\dfrac{dy}{dx}=xy', (x, y) => x * y, { f: (x) => 0.5 * exp(x * x / 2) }, '\\(y=\\tfrac12e^{x^2/2}\\) through \\((0,\\tfrac12)\\); \\(y=0\\) is an equilibrium', [-3, 3]],
  ['sf-logistic', 'dy/dx = y(4 − y)/4', '\\dfrac{dy}{dx}=\\dfrac{y(4-y)}{4}', (x, y) => (y * (4 - y)) / 4, { f: (x) => 4 / (1 + 3 * exp(-x)) }, '\\(y=\\dfrac{4}{1+3e^{-x}}\\) through \\((0,1)\\); equilibria \\(y=0\\) (unstable) and \\(y=4\\) (stable)', [-1, 5]],
  ['sf-x-over-y', 'dy/dx = −x/y', '\\dfrac{dy}{dx}=-\\dfrac{x}{y}', (x, y) => -x / y, { param: (t) => [2 * cos(t), 2 * sin(t)], dom: [0.02, PI - 0.02] }, 'upper semicircle \\(x^2+y^2=4\\) through \\((0,2)\\)', [-3, 3]],
];
for (const [id, eq, tex, fn, sol, solTex, yr] of SF) {
  def(id, `Slope field: ${eq}`, `Each segment has slope \\(${tex}\\) evaluated at a 16×12 grid point. Highlighted particular solution: ${solTex}.`, () =>
    plot({ x: [-3, 3], y: yr, field: { dydx: fn, nx: 15, ny: 11 }, curves: [{ ...sol, dom: sol.dom || [-3, 3], color: C.a, w: 2.4 }] }));
}
def('euler', "Euler's method vs exact solution", '', () => {
  const h = 0.5, pts = [[0, 1]]; let x = 0, y = 1; for (let i = 0; i < 4; i++) { y += h * y; x += h; pts.push([x, y]); }
  setCap('euler', `\\(\\dfrac{dy}{dx}=y\\), \\(y(0)=1\\), step \\(h=0.5\\): \\(y_{n+1}=y_n+h\\,y_n\\) gives ${pts.map((p) => fmt(p[1], 4)).join(', ')}; exact \\(y(2)=e^2\\approx${fmt(E * E)}\\). Euler under-estimates because the solution is concave up.`);
  return plot({ x: [0, 2.2], y: [0, 8], xstep: 0.5, curves: [{ f: exp, color: C.a, label: 'y = eˣ', labelAt: [1.55, 6.2] }, { pts, color: C.b, label: 'Euler h = 0.5', labelAt: [1.55, 3.3] }], points: pts.map(([px, py]) => ({ x: px, y: py, color: C.b, r: 3.5 })) });
});
def('euler-steps', "Euler's method: two steps on a slope field", 'From \\((1,2)\\) on \\(\\dfrac{dy}{dx}=x+y\\), \\(h=0.5\\): slope 3, so \\(y_1=2+0.5\\cdot3=3.5\\) at \\(x=1.5\\); slope 5 gives \\(y_2=6\\) at \\(x=2\\). Exact \\(y=4e^{x-1}-x-1\\), \\(y(2)\\approx7.873\\).', () =>
  plot({ x: [0.8, 2.2], y: [1, 8.5], xstep: 0.5, field: { dydx: (x, y) => x + y, nx: 7, ny: 7 }, curves: [{ pts: [[1, 2], [1.5, 3.5], [2, 6]], color: C.b }, { f: (x) => 4 * exp(x - 1) - x - 1, dom: [1, 2.2], color: C.a, label: 'exact', labelAt: [1.75, 6.6] }], points: [{ x: 1, y: 2, label: '(1, 2)' }, { x: 1.5, y: 3.5, color: C.b, label: '(1.5, 3.5)', dy: 14 }, { x: 2, y: 6, color: C.b, label: '(2, 6)', dy: 14 }] }));
def('separable', 'Separation of variables: dy/dx = xy', '\\(\\dfrac{dy}{y}=x\\,dx\\Rightarrow\\ln|y|=\\dfrac{x^2}{2}+C\\Rightarrow y=Ae^{x^2/2}\\). Initial condition \\(y(0)=1\\Rightarrow A=1\\) (bold).', () =>
  plot({ x: [-2, 2], y: [-4, 4], field: { dydx: (x, y) => x * y, nx: 12, ny: 10 }, curves: [-1, -0.5, 0.25, 1].map((A, i) => ({ f: (x) => A * exp(x * x / 2), color: A === 1 ? C.a : PAL[i + 1], w: A === 1 ? 2.6 : 1.4 })), points: [{ x: 0, y: 1, color: C.a, label: '(0, 1)' }] }));
def('logistic', 'Logistic growth dP/dt = kP(1 − P/M)', '\\(k=0.8\\), \\(M=10\\), \\(P(0)=1\\): \\(P(t)=\\dfrac{10}{1+9e^{-0.8t}}\\). Fastest growth at \\(P=\\dfrac{M}{2}=5\\), \\(t=\\dfrac{\\ln9}{0.8}\\approx2.75\\). From \\(P(0)=12\\) the solution decreases to M.', () =>
  plot({ x: [0, 10], y: [0, 13], xlabel: 't', ylabel: 'P', hlines: [{ y: 10, label: 'M = 10' }, { y: 5, label: 'M/2' }], curves: [{ f: (t) => 10 / (1 + 9 * exp(-0.8 * t)), color: C.a }, { f: (t) => 10 / (1 - (1 / 6) * exp(-0.8 * t)), color: C.b, dash: '5 3', label: 'P(0) = 12', labelAt: [0.3, 12.5] }], points: [{ x: log(9) / 0.8, y: 5, color: C.b, label: 'inflection', dy: 14 }] }));

/* ---------- applications of integration ---------- */
def('avg-value', 'Average value of a function', '\\(f_{avg}=\\dfrac{1}{\\pi-0}\\int_0^\\pi\\sin x\\,dx=\\dfrac{2}{\\pi}\\approx0.637\\); the rectangle of height \\(\\dfrac2\\pi\\) has the same area (2).', () =>
  plot({ x: [0, PI + 0.3], y: [0, 1.2], piX: 0.25, ystep: 0.2, rects: [{ x0: 0, x1: PI, y: 2 / PI, color: C.b, op: 0.18 }], fills: [{ f: sin, dom: [0, PI] }], curves: [{ f: sin, dom: [0, PI], color: C.ink }], hlines: [{ y: 2 / PI, label: '2/π' }] }));
def('disp-dist', 'Displacement vs total distance', '\\(v(t)=t^2-4t+3\\) on \\([0,4]\\): displacement \\(\\int_0^4 v\\,dt=\\dfrac43\\); distance \\(\\int_0^4|v|\\,dt=\\dfrac43+\\dfrac43+\\dfrac43=4\\).', () =>
  plot({ x: [-0.2, 4.3], y: [-1.5, 3.5], fills: [{ f: (t) => t * t - 4 * t + 3, dom: [0, 1] }, { f: (t) => t * t - 4 * t + 3, dom: [1, 3], color: C.e }, { f: (t) => t * t - 4 * t + 3, dom: [3, 4] }], curves: [{ f: (t) => t * t - 4 * t + 3, dom: [0, 4], color: C.ink, label: 'v(t)', labelAt: [3.6, 2.9] }], fracs: [[0.35, 0.55, '4', '3', C.a], [2, -0.45, '4', '3', C.e, '−'], [3.7, 0.55, '4', '3', C.a]] }));
def('rate-in-out', 'Rate in / rate out accumulation', '', () => {
  const Rin = (t) => 10 + 5 * sin(t / 2), Rout = (t) => 2 + t; let tmax = 0; for (let t = 0; t <= 12; t += 1e-4) if (Rin(t) - Rout(t) > 0) tmax = t;
  const net = simpson((t) => Rin(t) - Rout(t), 0, tmax);
  setCap('rate-in-out', `Water enters at \\(R(t)=10+5\\sin\\dfrac{t}{2}\\) and leaves at \\(D(t)=2+t\\). The amount is maximal when \\(R=D\\): \\(t^*\\approx${fmt(tmax, 3)}\\); net gain \\(\\int_0^{t^*}(R-D)\\,dt\\approx${fmt(net, 2)}\\).`);
  return plot({ x: [0, 12], y: [0, 16], xlabel: 't (h)', fills: [{ f: Rin, g: Rout, dom: [0, tmax], color: C.c }], curves: [{ f: Rin, color: C.a, label: 'R(t) in', labelAt: [1.5, 14.8] }, { f: Rout, color: C.e, label: 'D(t) out', labelAt: [10.2, 13.3] }], vlines: [{ x: tmax, label: 't*' }] });
});
def('area-x', 'Area between curves (dx)', '\\(\\int_0^1(x-x^2)\\,dx=\\dfrac12-\\dfrac13=\\dfrac16\\): top minus bottom.', () =>
  plot({ x: [-0.2, 1.3], y: [-0.2, 1.3], xstep: 0.25, ystep: 0.25, fills: [{ f: (x) => x, g: (x) => x * x, dom: [0, 1] }], curves: [{ f: (x) => x, color: C.a, label: 'y = x', labelAt: [1.05, 1.18] }, { f: (x) => x * x, color: C.b, label: 'y = x²', labelAt: [1.06, 0.95] }], fracs: [[0.5, 0.36, '1', '6', C.a, 'A =']] }));
const parab = Array.from({ length: 61 }, (_, i) => { const y = -1 + i * 0.05; return [y * y, y]; });
def('area-y', 'Area between curves (dy)', '\\(x=y^2\\) and \\(x=y+2\\) meet at \\(y=-1\\) and \\(y=2\\): \\(A=\\int_{-1}^{2}\\big((y+2)-y^2\\big)dy=\\dfrac92\\) (right minus left).', () =>
  plot({ x: [-1, 5], y: [-2, 3], fills: [{ poly: parab.concat([[1, -1]]), color: C.a }], curves: [{ param: (t) => [t * t, t], dom: [-1.6, 2.2], color: C.b, label: 'x = y²', labelAt: [2.3, 1.75] }, { param: (t) => [t + 2, t], dom: [-2, 3], color: C.a, label: 'x = y + 2', labelAt: [4.1, 2.6] }], fracs: [[1.8, 0.4, '9', '2', C.a, 'A =']] }));
def('area-multi', 'Area with multiple intersections', '\\(\\sin x\\) and \\(\\cos x\\) cross at \\(\\dfrac{\\pi}{4}\\) and \\(\\dfrac{5\\pi}{4}\\) in \\([0,2\\pi]\\): \\(A=\\int_0^{2\\pi}|\\sin x-\\cos x|\\,dx=4\\sqrt2\\approx5.657\\). Split the integral at each crossing.', () =>
  plot({ x: [0, 2 * PI], y: [-1.5, 1.5], piX: 0.25, ystep: 0.5, fills: [{ f: sin, g: cos, dom: [0, 2 * PI], color: C.a }], curves: [{ f: sin, color: C.a, label: 'sin x', labelAt: [1.9, 1.05] }, { f: cos, color: C.b, label: 'cos x', labelAt: [0.1, 1.2] }], points: [{ x: PI / 4, y: sqrt(2) / 2, r: 3 }, { x: 5 * PI / 4, y: -sqrt(2) / 2, r: 3 }] }));
/* Oblique projection for solids */
function solidFrame(o) {
  const W = 480, H = 320, ox = o.ox || 90, oy = o.oy || 190, sx = o.sx, sy = o.sy;
  const P = (x, y) => [ox + x * sx, oy - y * sy];
  let s = ''; const [ax0, ay0] = P(-0.15 * o.xmax, 0), [ax1, ay1] = P(o.xmax * 1.12, 0);
  s += arrow(ax0, ay0, ax1, ay1, { color: C.muted, w: 1 }) + text(ax1 + 8, ay1, 'x', { size: 11, color: C.muted });
  const [bx0, by0] = P(0, -o.ymax), [bx1, by1] = P(0, o.ymax); s += arrow(bx0, by0, bx1, by1, { color: C.muted, w: 1 }) + text(bx1, by1 - 8, 'y', { size: 11, color: C.muted });
  return { P, W, H, get s() { return s; }, add(t) { s += t; } };
}
function revolve(id, title, caption, o) {
  def(id, title, caption, () => {
    const ax = o.axis || 0, S = solidFrame({ xmax: o.b, ymax: o.ymax, sx: o.sx, sy: o.sy, oy: o.oy });
    for (let i = 0; i <= 8; i++) {
      const x = o.a + ((o.b - o.a) * i) / 8, R = abs(o.R(x) - ax), r = o.r ? abs(o.r(x) - ax) : 0;
      const [cx, cy] = S.P(x, ax), ry = R * o.sy, rx = Math.max(ry * 0.3, 1);
      S.add(`<ellipse cx="${cx}" cy="${cy}" rx="${rx.toFixed(1)}" ry="${ry.toFixed(1)}" fill="${C.a}" fill-opacity="0.06" stroke="${C.a}" stroke-opacity="0.55" stroke-width="1"/>`);
      if (r > 0) S.add(`<ellipse cx="${cx}" cy="${cy}" rx="${((rx * r) / R).toFixed(1)}" ry="${(r * o.sy).toFixed(1)}" fill="none" stroke="${C.b}" stroke-opacity="0.75" stroke-width="1"/>`);
    }
    const prof = (g, sign, col) => { let d = ''; for (let i = 0; i <= 80; i++) { const x = o.a + ((o.b - o.a) * i) / 80; const [px, py] = S.P(x, ax + sign * abs(g(x) - ax)); d += (i ? 'L' : 'M') + px.toFixed(1) + ',' + py.toFixed(1); } S.add(path(d, { stroke: col, w: 2, dash: sign > 0 ? '' : '4 3' })); };
    prof(o.R, 1, C.a); prof(o.R, -1, C.a); if (o.r) { prof(o.r, 1, C.b); prof(o.r, -1, C.b); }
    if (ax !== 0) { const [x1, y1] = S.P(o.a - 0.1 * o.b, ax), [x2, y2] = S.P(o.b * 1.1, ax); S.add(line(x1, y1, x2, y2, { color: C.e, dash: '8 4', w: 1.4 }) + text(x2, y2 + 14, `axis y = ${ax}`, { size: 11, color: C.e, anchor: 'end' })); }
    const vol = PI * simpson((x) => (o.R(x) - ax) ** 2 - (o.r ? (o.r(x) - ax) ** 2 : 0), o.a, o.b);
    S.add(text(S.W - 20, 24, `V = ${fmt(abs(vol), 4)}`, { anchor: 'end', size: 13, color: C.a, bold: true }));
    return svg(S.W, S.H, S.s, title);
  });
}
revolve('disc-x', 'Disc method about the x-axis', 'Region under \\(y=\\sqrt{x}\\), \\(0\\le x\\le4\\), revolved about the x-axis: \\(V=\\pi\\int_0^4(\\sqrt x)^2dx=8\\pi\\approx25.13\\). Each slice is a disc of radius \\(\\sqrt x\\).', { a: 0, b: 4, R: sqrt, ymax: 2.4, sx: 80, sy: 55, oy: 165 });
revolve('disc-other', 'Disc method about y = −1', 'Region between \\(y=x^2\\) and \\(y=-1\\) on \\(0\\le x\\le1\\), revolved about \\(y=-1\\): radius \\(x^2+1\\), \\(V=\\pi\\int_0^1(x^2+1)^2dx=\\dfrac{28\\pi}{15}\\approx5.864\\).', { a: 0, b: 1, R: (x) => x * x, axis: -1, ymax: 1.3, sx: 300, sy: 55, oy: 120 });
revolve('washer-x', 'Washer method about the x-axis', 'Region between \\(y=x\\) (outer) and \\(y=x^2\\) (inner) on \\([0,1]\\): \\(V=\\pi\\int_0^1(x^2-x^4)dx=\\dfrac{2\\pi}{15}\\approx0.4189\\).', { a: 0, b: 1, R: (x) => x, r: (x) => x * x, ymax: 1.3, sx: 300, sy: 110, oy: 165 });
revolve('washer-other', 'Washer method about y = 2', 'Same region revolved about \\(y=2\\): outer radius \\(2-x^2\\), inner radius \\(2-x\\): \\(V=\\pi\\int_0^1\\big[(2-x^2)^2-(2-x)^2\\big]dx=\\dfrac{8\\pi}{15}\\approx1.676\\).', { a: 0, b: 1, R: (x) => x * x, r: (x) => x, axis: 2, ymax: 2.4, sx: 300, sy: 55, oy: 265 });
function crossSection(id, title, caption, shape) {
  def(id, title, caption, () => {
    const S = solidFrame({ xmax: 4, ymax: 2.4, sx: 80, sy: 40, oy: 230 }), sy = 40;
    let d = ''; for (let i = 0; i <= 80; i++) { const x = (4 * i) / 80; const [px, py] = S.P(x, sqrt(x)); d += (i ? 'L' : 'M') + px.toFixed(1) + ',' + py.toFixed(1); }
    for (let i = 80; i >= 0; i--) { const x = (4 * i) / 80; const [px, py] = S.P(x, -sqrt(x)); d += 'L' + px.toFixed(1) + ',' + py.toFixed(1); }
    S.add(path(d + 'Z', { fill: C.a, op: 0.15, stroke: C.a }));
    for (const x of [1, 2, 3, 4]) {
      const sLen = 2 * sqrt(x), [x1, y1] = S.P(x, -sqrt(x)), [x2, y2] = S.P(x, sqrt(x)), skew = sLen * sy * 0.5; // slice tilted back for depth
      let shp;
      if (shape === 'square') shp = `M${x1},${y1}L${x2},${y2}L${x2 + skew},${y2 - sLen * sy * 0.8}L${x1 + skew},${y1 - sLen * sy * 0.8}Z`;
      else if (shape === 'tri') shp = `M${x1},${y1}L${x2},${y2}L${(x1 + x2) / 2 + skew * 0.9},${(y1 + y2) / 2 - (sqrt(3) / 2) * sLen * sy * 0.8}Z`;
      else shp = `M${x1},${y1} A ${(sLen * sy) / 2} ${(sLen * sy) / 2} 0 0 1 ${x2},${y2}Z`;
      S.add(path(shp, { fill: C.b, op: 0.22, stroke: C.b, w: 1.3 }));
    }
    const A = shape === 'square' ? (x) => 4 * x : shape === 'tri' ? (x) => sqrt(3) * x : (x) => (PI * x) / 2;
    S.add(text(S.W - 20, 24, `V = ${fmt(simpson(A, 0, 4), 4)}`, { anchor: 'end', size: 13, color: C.b, bold: true }));
    return svg(S.W, S.H, S.s, title);
  });
}
crossSection('xsec-square', 'Cross sections: squares', 'Base region between \\(y=\\pm\\sqrt{x}\\), \\(0\\le x\\le4\\); square slices perpendicular to the x-axis with side \\(s=2\\sqrt x\\): \\(V=\\int_0^4 4x\\,dx=32\\).', 'square');
crossSection('xsec-tri', 'Cross sections: equilateral triangles', 'Same base; \\(A(x)=\\dfrac{\\sqrt3}{4}s^2=\\sqrt3\\,x\\): \\(V=\\int_0^4\\sqrt3\\,x\\,dx=8\\sqrt3\\approx13.856\\).', 'tri');
crossSection('xsec-semi', 'Cross sections: semicircles', 'Same base, diameter \\(s=2\\sqrt x\\): \\(A(x)=\\dfrac{\\pi}{8}s^2=\\dfrac{\\pi x}{2}\\), \\(V=\\int_0^4\\dfrac{\\pi x}{2}dx=4\\pi\\approx12.566\\).', 'semi');
def('arc-length', 'Arc length of y = x^(3/2)', '', () => {
  const L = simpson((x) => sqrt(1 + 2.25 * x), 0, 4), chord = [0, 1, 2, 3].reduce((s, i) => s + Math.hypot(1, (i + 1) ** 1.5 - i ** 1.5), 0);
  setCap('arc-length', `\\(L=\\int_0^4\\sqrt{1+\\left(\\tfrac32\\sqrt x\\right)^2}\\,dx=\\dfrac{8}{27}\\left(10^{3/2}-1\\right)\\approx${fmt(L, 4)}\\); the 4-chord polygon (dashed) has length ${fmt(chord, 4)} — a lower bound.`);
  return plot({ x: [-0.3, 4.4], y: [-0.5, 8.6], curves: [{ f: (x) => x ** 1.5, dom: [0, 4], color: C.a }, { pts: [0, 1, 2, 3, 4].map((x) => [x, x ** 1.5]), color: C.b, dash: '5 3' }], points: [0, 1, 2, 3, 4].map((x) => ({ x, y: x ** 1.5, r: 3, color: C.b })) });
});

/* ---------- parametric / vector / polar ---------- */
def('param-curve', 'Parametric curve with direction and tangents', '\\(x=t^2-1\\), \\(y=t^3-t\\), \\(-1.6\\le t\\le1.6\\). \\(\\dfrac{dy}{dx}=\\dfrac{3t^2-1}{2t}\\): horizontal tangents at \\(t=\\pm\\dfrac{1}{\\sqrt3}\\), vertical tangent at \\(t=0\\). Arrows show direction of increasing t.', () => {
  const X = (t) => t * t - 1, Y = (t) => t ** 3 - t, ts = [-1.2, -0.4, 0.4, 1.2];
  return plot({ x: [-1.5, 2], y: [-2.3, 2.3], curves: [{ param: (t) => [X(t), Y(t)], dom: [-1.6, 1.6], color: C.a }], segs: ts.map((t) => [X(t), Y(t), X(t) + 0.12 * 2 * t, Y(t) + 0.12 * (3 * t * t - 1), C.b, 1.8, '', true]), points: [{ x: X(1 / sqrt(3)), y: Y(1 / sqrt(3)), color: C.c, label: 'horizontal', dy: 14 }, { x: X(-1 / sqrt(3)), y: Y(-1 / sqrt(3)), color: C.c, label: 'horizontal' }, { x: -1, y: 0, color: C.e, label: 't = 0: vertical', anchor: 'end', dx: -8 }] });
});
def('param-concavity', 'Second derivative of a parametric curve', '\\(x=2\\cos t\\), \\(y=\\sin t\\): \\(\\dfrac{dy}{dx}=-\\dfrac{\\cos t}{2\\sin t}\\), \\(\\dfrac{d^2y}{dx^2}=\\dfrac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}}=-\\dfrac{1}{4\\sin^3t}\\): concave down for \\(0<t<\\pi\\), up for \\(\\pi<t<2\\pi\\).', () =>
  plot({ W: 440, H: 300, x: [-2.6, 2.6], y: [-1.6, 1.6], ystep: 0.5, curves: [{ param: (t) => [2 * cos(t), sin(t)], dom: [0, PI], color: C.a, label: 'concave down', labelAt: [-0.6, 1.25] }, { param: (t) => [2 * cos(t), sin(t)], dom: [PI, 2 * PI], color: C.b, label: 'concave up', labelAt: [-0.5, -1.25], dy: 0 }] }));
def('cycloid', 'Parametric arc length: cycloid', '', () => {
  const L = simpson((t) => sqrt((1 - cos(t)) ** 2 + sin(t) ** 2), 0, 2 * PI);
  setCap('cycloid', `\\(x=t-\\sin t\\), \\(y=1-\\cos t\\), one arch \\(0\\le t\\le2\\pi\\): \\(L=\\int_0^{2\\pi}\\sqrt{\\left(\\dfrac{dx}{dt}\\right)^2+\\left(\\dfrac{dy}{dt}\\right)^2}dt=8\\) (numeric ${fmt(L, 5)}). Dashed: rolling circle at \\(t=\\dfrac{\\pi}{2}\\).`);
  return plot({ W: 520, H: 220, x: [-0.3, 2 * PI + 0.3], y: [-0.3, 2.5], piX: 0.5, ystep: 1, curves: [{ param: (t) => [t - sin(t), 1 - cos(t)], dom: [0, 2 * PI], color: C.a }, { param: (t) => [PI / 2 + cos(t), 1 + sin(t)], dom: [0, 2 * PI], color: C.muted, dash: '3 3' }], points: [{ x: PI / 2 - 1, y: 1, color: C.b, label: 'point on rim', dx: -10, anchor: 'end' }] });
});
def('vector-motion', 'Vector-valued motion: position, velocity, acceleration', '\\(\\vec r(t)=\\langle 2\\cos t,\\ \\sin 2t\\rangle\\). At \\(t=\\dfrac{\\pi}{6}\\): \\(\\vec v=\\langle-2\\sin t,\\,2\\cos2t\\rangle=\\langle-1,1\\rangle\\), speed \\(\\sqrt2\\); \\(\\vec a=\\langle-2\\cos t,\\,-4\\sin2t\\rangle=\\langle-\\sqrt3,-2\\sqrt3\\rangle\\). Vectors drawn to scale (v ×0.6, a ×0.25).', () => {
  const t = PI / 6, x = 2 * cos(t), y = sin(2 * t), vx = -2 * sin(t), vy = 2 * cos(2 * t), ax = -2 * cos(t), ay = -4 * sin(2 * t);
  return plot({ W: 440, H: 330, x: [-3, 3], y: [-2, 2], curves: [{ param: (s) => [2 * cos(s), sin(2 * s)], dom: [0, 2 * PI], color: C.a }], segs: [[0, 0, x, y, C.muted, 1.4, '4 3', true], [x, y, x + vx * 0.6, y + vy * 0.6, C.b, 2.2, '', true], [x, y, x + ax * 0.25, y + ay * 0.25, C.c, 2.2, '', true]], texts: [[x + vx * 0.6 - 0.15, y + vy * 0.6 + 0.15, 'v', C.b], [x + ax * 0.25 - 0.2, y + ay * 0.25, 'a', C.c], [x / 2 + 0.1, y / 2 + 0.2, 'r', C.muted]], points: [{ x, y, label: 't = π/6' }] });
});
def('vector-integral', 'Integrating velocity to get position', '', () => {
  const dist = simpson((t) => sqrt(1 + 4 * t * t), 0, 2);
  setCap('vector-integral', `\\(\\vec v(t)=\\langle 1,\\ 2t\\rangle\\), \\(\\vec r(0)=\\langle0,1\\rangle\\Rightarrow\\vec r(t)=\\langle t,\\ t^2+1\\rangle\\). On \\([0,2]\\): displacement \\(\\langle2,4\\rangle\\) (dashed), distance \\(\\int_0^2\\sqrt{1+4t^2}\\,dt\\approx${fmt(dist, 3)}\\).`);
  return plot({ x: [-0.5, 3], y: [0, 6], curves: [{ param: (t) => [t, t * t + 1], dom: [0, 2], color: C.a }], segs: [[0, 1, 2, 5, C.b, 1.6, '5 3', true]], points: [{ x: 0, y: 1, label: 'r(0)' }, { x: 2, y: 5, label: 'r(2)' }] });
});
function polarPlot(curves, R, marks = [], fills = []) {
  const W = 400, H = 400, cx = 200, cy = 200, sc = 165 / R; let s = '';
  const step = R > 2.5 ? 1 : 0.5;
  for (let k = step; k <= R + 1e-9; k += step) s += circle(cx, cy, k * sc, { stroke: C.grid, w: 0.8 }) + text(cx + k * sc + 2, cy + 9, String(k), { size: 9, color: C.muted, anchor: 'start' });
  const lbl = ['0', 'π/6', 'π/3', 'π/2', '2π/3', '5π/6', 'π', '7π/6', '4π/3', '3π/2', '5π/3', '11π/6'];
  lbl.forEach((l, k) => { const a = (k * PI) / 6; s += line(cx, cy, cx + R * sc * cos(a), cy - R * sc * sin(a), { color: C.grid, w: 0.8 }) + text(cx + (R * sc + 16) * cos(a), cy - (R * sc + 12) * sin(a), l, { size: 9.5, color: C.muted }); });
  const pt = (t, r) => `${(cx + r * cos(t) * sc).toFixed(1)},${(cy - r * sin(t) * sc).toFixed(1)}`;
  for (const f of fills) { const n = 200; let d = ''; for (let i = 0; i <= n; i++) { const t = f.dom[0] + ((f.dom[1] - f.dom[0]) * i) / n; d += (i ? 'L' : 'M') + pt(t, f.outer(t)); } for (let i = n; i >= 0; i--) { const t = f.dom[0] + ((f.dom[1] - f.dom[0]) * i) / n; d += 'L' + pt(t, f.inner ? f.inner(t) : 0); } s += path(d + 'Z', { fill: f.color || C.a, op: 0.28, stroke: 'none' }); }
  curves.forEach((c, i) => { const n = 600; let d = ''; for (let j = 0; j <= n; j++) { const t = c.dom[0] + ((c.dom[1] - c.dom[0]) * j) / n; d += (j ? 'L' : 'M') + pt(t, c.polar(t)); } s += path(d, { stroke: c.color || PAL[i], w: 2 }); if (c.label) s += text(cx + c.labelAt[0] * sc, cy - c.labelAt[1] * sc, c.label, { color: c.color || PAL[i], bold: true, size: 11 }); });
  marks.forEach((m) => { const [x, y] = pt(m.th, m.r).split(',').map(Number); s += line(cx, cy, x, y, { color: C.b, dash: '4 3' }) + circle(x, y, 4, { fill: C.b, stroke: C.b }); if (m.label) s += text(x + 8, y - 10, m.label, { size: 10.5, color: C.b, anchor: 'start' }); });
  return svg(W, H, s, 'polar graph');
}
def('polar-basic', 'Polar coordinates: cardioid r = 1 + cos θ', '\\(x=r\\cos\\theta\\), \\(y=r\\sin\\theta\\). At \\(\\theta=\\dfrac{\\pi}{3}\\): \\(r=\\dfrac32\\), \\((x,y)=\\left(\\dfrac34,\\dfrac{3\\sqrt3}{4}\\right)\\). Slope \\(\\dfrac{dy}{dx}=\\dfrac{r\'\\sin\\theta+r\\cos\\theta}{r\'\\cos\\theta-r\\sin\\theta}\\).', () => polarPlot([{ polar: (t) => 1 + cos(t), dom: [0, 2 * PI], color: C.a }], 2, [{ th: PI / 3, r: 1.5, label: '(3/2, π/3)' }]));
def('polar-area', 'Polar area: one petal of r = sin 2θ', '\\(A=\\dfrac12\\int_0^{\\pi/2}\\sin^2 2\\theta\\,d\\theta=\\dfrac{\\pi}{8}\\approx0.3927\\) (shaded petal).', () => polarPlot([{ polar: (t) => sin(2 * t), dom: [0, 2 * PI], color: C.a }], 1, [], [{ outer: (t) => sin(2 * t), dom: [0, PI / 2] }]));
def('polar-two', 'Area between two polar curves', '\\(r=3\\cos\\theta\\) and \\(r=1+\\cos\\theta\\) meet at \\(\\theta=\\pm\\dfrac{\\pi}{3}\\). Inside the circle, outside the cardioid: \\(A=\\dfrac12\\int_{-\\pi/3}^{\\pi/3}\\big[(3\\cos\\theta)^2-(1+\\cos\\theta)^2\\big]d\\theta=\\pi\\).', () => polarPlot([{ polar: (t) => 3 * cos(t), dom: [-PI / 2, PI / 2], color: C.a, label: 'r = 3cos θ', labelAt: [2.3, 1.75] }, { polar: (t) => 1 + cos(t), dom: [0, 2 * PI], color: C.b, label: 'r = 1 + cos θ', labelAt: [-1.2, 1.35] }], 3, [{ th: PI / 3, r: 1.5 }, { th: -PI / 3, r: 1.5 }], [{ outer: (t) => 3 * cos(t), inner: (t) => 1 + cos(t), dom: [-PI / 3, PI / 3] }]));
def('polar-limacon', 'Limaçon with inner loop r = 1 + 2cos θ', '\\(r=0\\) at \\(\\theta=\\dfrac{2\\pi}{3},\\dfrac{4\\pi}{3}\\); the inner loop (shaded) is traced for \\(\\dfrac{2\\pi}{3}<\\theta<\\dfrac{4\\pi}{3}\\), where \\(r<0\\).', () => polarPlot([{ polar: (t) => 1 + 2 * cos(t), dom: [0, 2 * PI], color: C.a }], 3, [], [{ outer: (t) => 1 + 2 * cos(t), dom: [2 * PI / 3, 4 * PI / 3], color: C.b }]));
def('polar-points', 'Plotting polar points & conversion', 'Point \\(\\left(2,\\dfrac{2\\pi}{3}\\right)\\) ↔ \\((x,y)=(-1,\\sqrt3)\\); circle \\(r=2\\) and rose \\(r=2\\cos3\\theta\\) (3 petals, traced once on \\([0,\\pi]\\)).', () => polarPlot([{ polar: () => 2, dom: [0, 2 * PI], color: C.muted }, { polar: (t) => 2 * cos(3 * t), dom: [0, PI], color: C.a }], 2, [{ th: 2 * PI / 3, r: 2, label: '(2, 2π/3)' }]));

/* ---------- series ---------- */
const partial = (a) => a.reduce((acc, v) => { acc.push((acc.length ? acc[acc.length - 1] : 0) + v); return acc; }, []);
def('geo-series', 'Geometric series partial sums', '\\(\\sum_{n=0}^\\infty 3\\left(\\tfrac12\\right)^n=\\dfrac{3}{1-\\frac12}=6\\); with \\(r=-\\tfrac12\\): \\(\\dfrac{3}{1+\\frac12}=2\\) (oscillating approach). Converges iff \\(|r|<1\\).', () => {
  const a = Array.from({ length: 15 }, (_, i) => 3 * 0.5 ** i), b = Array.from({ length: 15 }, (_, i) => 3 * (-0.5) ** i);
  return plot({ x: [0, 16], y: [0, 7], xlabel: 'n (number of terms)', hlines: [{ y: 6, label: 'S = 6' }, { y: 2, label: 'S = 2' }], points: [...partial(a).map((v, i) => ({ x: i + 1, y: v, color: C.a, r: 3 })), ...partial(b).map((v, i) => ({ x: i + 1, y: v, color: C.b, r: 3 }))], legend: [['r = 1/2', C.a], ['r = −1/2', C.b]], legendX: 300 });
});
def('conv-div', 'Convergent vs divergent series', 'Partial sums of \\(\\sum\\dfrac{1}{n^2}\\) level off at \\(\\dfrac{\\pi^2}{6}\\approx1.645\\); partial sums of \\(\\sum\\dfrac1n\\) grow like \\(\\ln n+\\gamma\\) without bound.', () => {
  const N = 40, h = partial(Array.from({ length: N }, (_, i) => 1 / (i + 1))), p = partial(Array.from({ length: N }, (_, i) => 1 / (i + 1) ** 2));
  return plot({ x: [0, N + 1], y: [0, 5], xlabel: 'n', hlines: [{ y: PI * PI / 6, label: 'π²/6' }], curves: [{ f: (x) => log(x) + 0.5772, dom: [1, N], color: C.muted, dash: '3 3', label: 'ln n + γ', labelAt: [28, 3.9] }], points: [...h.map((v, i) => ({ x: i + 1, y: v, color: C.e, r: 2.5 })), ...p.map((v, i) => ({ x: i + 1, y: v, color: C.a, r: 2.5 }))], legend: [['Σ 1/n (diverges)', C.e], ['Σ 1/n² (converges)', C.a]], legendX: 70 });
});
def('nth-term', 'nth-term test for divergence', '\\(a_n=\\dfrac{n}{n+1}\\to1\\ne0\\), so \\(\\sum a_n\\) diverges. (\\(a_n\\to0\\) alone proves nothing: \\(\\dfrac1n\\to0\\) yet \\(\\sum\\dfrac1n\\) diverges.)', () =>
  plot({ x: [0, 26], y: [0, 1.2], ystep: 0.2, xlabel: 'n', hlines: [{ y: 1, label: 'lim aₙ = 1' }], points: [...Array.from({ length: 25 }, (_, i) => ({ x: i + 1, y: (i + 1) / (i + 2), color: C.b, r: 3 })), ...Array.from({ length: 25 }, (_, i) => ({ x: i + 1, y: 1 / (i + 1), color: C.muted, r: 2.5 }))], legend: [['n/(n+1)', C.b], ['1/n', C.muted]], legendX: 300 }));
def('integral-test', 'Integral test', 'Right-endpoint rectangles of height \\(\\dfrac1{n^2}\\) lie under \\(y=\\dfrac{1}{x^2}\\), so \\(\\sum_{n=2}^\\infty\\dfrac1{n^2}\\le\\int_1^\\infty\\dfrac{dx}{x^2}=1\\) ⇒ the series converges.', () =>
  plot({ x: [0, 8.5], y: [0, 1.15], ystep: 0.2, rects: Array.from({ length: 7 }, (_, i) => ({ x0: i + 1, x1: i + 2, y: 1 / (i + 2) ** 2 })), curves: [{ f: (x) => 1 / (x * x), dom: [0.93, 8.5], color: C.ink, label: 'y = 1/x²', labelAt: [1.35, 0.75] }] }));
def('p-series', 'p-series partial sums', '\\(\\sum\\dfrac{1}{n^p}\\) converges iff \\(p>1\\). Partial sums to \\(n=50\\) for \\(p=0.5,1,1.5,2\\).', () => {
  const N = 50, ps = [0.5, 1, 1.5, 2], S = (p) => partial(Array.from({ length: N }, (_, k) => 1 / (k + 1) ** p));
  return plot({ x: [0, 56], y: [0, 14], xlabel: 'n', curves: ps.map((p, i) => ({ pts: S(p).map((v, k) => [k + 1, v]), color: PAL[i], label: `p = ${p}`, labelAt: [44, S(p)[43] + 0.2] })) });
});
def('comparison', 'Direct comparison test', '\\(0<\\dfrac{1}{n^2+n}<\\dfrac{1}{n^2}\\) and \\(\\sum\\dfrac1{n^2}\\) converges, so \\(\\sum\\dfrac{1}{n^2+n}\\) converges (it telescopes to 1).', () =>
  plot({ x: [0, 11], y: [0, 1.1], ystep: 0.2, xstep: 1, points: [...Array.from({ length: 10 }, (_, i) => ({ x: i + 1, y: 1 / (i + 1) ** 2, color: C.b, r: 3.5 })), ...Array.from({ length: 10 }, (_, i) => ({ x: i + 1, y: 1 / ((i + 1) ** 2 + i + 1), color: C.a, r: 3.5 }))], legend: [['1/n² (larger, converges)', C.b], ['1/(n²+n)', C.a]], legendX: 250 }));
def('alt-series', 'Alternating series test & error bound', '', () => {
  const N = 16, S = partial(Array.from({ length: N }, (_, i) => (-1) ** i / (i + 1)));
  setCap('alt-series', `\\(\\sum\\dfrac{(-1)^{n+1}}{n}=\\ln2\\approx${fmt(log(2), 4)}\\). Terms decrease to 0, so it converges; partial sums alternate around the limit and \\(|S-S_n|\\le\\dfrac{1}{n+1}\\) (dashed envelope). E.g. \\(|S-S_{10}|=${fmt(abs(log(2) - S[9]), 4)}\\le\\dfrac{1}{11}\\).`);
  return plot({ x: [0, N + 1], y: [0.4, 1.05], ystep: 0.1, xstep: 2, xlabel: 'n', hlines: [{ y: log(2), label: 'ln 2' }], curves: [{ pts: S.map((v, i) => [i + 1, v]), color: C.a, w: 1 }, { f: (n) => log(2) + 1 / (n + 1), dom: [1, N], color: C.muted, dash: '3 3' }, { f: (n) => log(2) - 1 / (n + 1), dom: [1, N], color: C.muted, dash: '3 3' }], points: S.map((v, i) => ({ x: i + 1, y: v, color: C.a, r: 3 })) });
});
def('ratio-test', 'Ratio test', 'For \\(a_n=\\dfrac{2^n}{n!}\\): \\(\\left|\\dfrac{a_{n+1}}{a_n}\\right|=\\dfrac{2}{n+1}\\to0<1\\) ⇒ converges. For \\(a_n=\\dfrac{n}{2^n}\\): ratio \\(\\dfrac{n+1}{2n}\\to\\dfrac12<1\\) ⇒ converges.', () =>
  plot({ x: [0, 16], y: [0, 1.6], ystep: 0.25, xlabel: 'n', hlines: [{ y: 1, label: 'L = 1', color: C.e }, { y: 0.5, label: '1/2' }], points: [...Array.from({ length: 15 }, (_, i) => ({ x: i + 1, y: 2 / (i + 2), color: C.a, r: 3 })), ...Array.from({ length: 15 }, (_, i) => ({ x: i + 1, y: (i + 2) / (2 * (i + 1)), color: C.b, r: 3 }))], legend: [['2ⁿ/n!: ratio 2/(n+1)', C.a], ['n/2ⁿ: ratio (n+1)/(2n)', C.b]], legendX: 250 }));
def('abs-cond', 'Absolute vs conditional convergence', '\\(\\sum\\dfrac{(-1)^{n+1}}{n}\\) converges but \\(\\sum\\dfrac1n\\) diverges ⇒ conditionally convergent. \\(\\sum\\dfrac{(-1)^{n+1}}{n^2}\\) converges absolutely (to \\(\\dfrac{\\pi^2}{12}\\)).', () => {
  const N = 30, P = (g) => partial(Array.from({ length: N }, (_, i) => g(i + 1))).map((v, i) => [i + 1, v]);
  return plot({ x: [0, N + 1], y: [0, 4.3], xlabel: 'n', curves: [{ pts: P((n) => (-1) ** (n + 1) / n), color: C.a, label: 'Σ(−1)ⁿ⁺¹/n', labelAt: [22, 0.45] }, { pts: P((n) => 1 / n), color: C.e, label: 'Σ1/n', labelAt: [24, 3.55] }, { pts: P((n) => (-1) ** (n + 1) / (n * n)), color: C.c, label: 'Σ(−1)ⁿ⁺¹/n²', labelAt: [22, 1.1] }] });
});
const taylorSin = (n) => (x) => { let s = 0; for (let k = 0; 2 * k + 1 <= n; k++) s += ((-1) ** k * x ** (2 * k + 1)) / fact(2 * k + 1); return s; };
def('taylor-sin', 'Taylor polynomials of sin x at 0', '\\(P_1=x\\), \\(P_3=x-\\dfrac{x^3}{3!}\\), \\(P_5=P_3+\\dfrac{x^5}{5!}\\), \\(P_7=P_5-\\dfrac{x^7}{7!}\\): each matches sin x on a wider interval around 0.', () =>
  plot({ x: [-2 * PI, 2 * PI], y: [-2.5, 2.5], piX: 1, ystep: 1, curves: [{ f: sin, color: C.ink, w: 2.8, label: 'sin x', labelAt: [-5.9, 1.25] }, ...[1, 3, 5, 7].map((n, i) => ({ f: taylorSin(n), color: PAL[i], dash: '6 3', label: `P${n}`, labelAt: [[2.1, 2.25], [3.05, -2.3], [4.1, 2.3], [4.75, -2.3]][i] }))] }));
def('taylor-exp', 'Taylor polynomials of eˣ at 0', '\\(P_n(x)=\\sum_{k=0}^n\\dfrac{x^k}{k!}\\); \\(P_3(1)=1+1+\\dfrac12+\\dfrac16=\\dfrac{8}{3}\\approx2.667\\) vs \\(e\\approx2.718\\).', () => {
  const P = (n) => (x) => { let s = 0; for (let k = 0; k <= n; k++) s += x ** k / fact(k); return s; };
  return plot({ x: [-3, 3], y: [-2, 12], curves: [{ f: exp, color: C.ink, w: 2.8, label: 'eˣ', labelAt: [2.2, 11.2] }, ...[1, 2, 3, 4].map((n, i) => ({ f: P(n), color: PAL[i], dash: '6 3', label: `P${n}`, labelAt: [2.6, P(n)(2.6) - 0.6] }))] });
});
def('lagrange', 'Lagrange error bound', '', () => {
  const err = abs(sin(1) - (1 - 1 / 6));
  setCap('lagrange', `\\(|\\sin x-P_3(x)|\\le\\dfrac{|x|^5}{5!}\\) because \\(|f^{(5)}|\\le1\\) (using \\(P_3=P_4\\)). At \\(x=1\\): actual error \\(${fmt(err, 6)}\\le\\dfrac{1}{120}\\approx0.008333\\).`);
  return plot({ x: [0, 2], y: [0, 0.3], xstep: 0.5, ystep: 0.05, curves: [{ f: (x) => abs(sin(x) - (x - x ** 3 / 6)), color: C.a, label: '|sin x − P₃(x)|', labelAt: [1.25, 0.02] }, { f: (x) => x ** 5 / 120, color: C.e, dash: '6 3', label: 'x⁵/5!', labelAt: [1.55, 0.17] }], vlines: [{ x: 1, label: 'x = 1' }] });
});
def('interval-conv', 'Radius and interval of convergence', '\\(\\ln(1+x)=\\sum_{n=1}^\\infty\\dfrac{(-1)^{n+1}x^n}{n}\\): radius 1, interval \\((-1,1]\\) (shaded). Partial sums \\(S_{10}\\), \\(S_{20}\\) track \\(\\ln(1+x)\\) inside and blow up for \\(|x|>1\\).', () => {
  const S = (N) => (x) => { let s = 0; for (let n = 1; n <= N; n++) s += ((-1) ** (n + 1) * x ** n) / n; return s; };
  return plot({ x: [-1.5, 1.5], y: [-3, 2], xstep: 0.5, fills: [{ f: () => 2, g: () => -3, dom: [-1, 1], color: C.c, op: 0.03 }], vlines: [{ x: -1, label: 'x = −1' }, { x: 1, label: 'x = 1' }], curves: [{ f: (x) => log(1 + x), dom: [-0.999, 1.5], color: C.ink, w: 2.6, label: 'ln(1+x)', labelAt: [0.3, 0.75] }, { f: S(10), color: C.a, dash: '6 3', label: 'S₁₀', labelAt: [1.15, -1.8] }, { f: S(20), color: C.b, dash: '3 3', label: 'S₂₀', labelAt: [-1.45, -2.7] }] });
});
def('maclaurin-cos', 'Maclaurin series for cos x', '\\(\\cos x=\\sum_{n=0}^\\infty\\dfrac{(-1)^nx^{2n}}{(2n)!}=1-\\dfrac{x^2}{2!}+\\dfrac{x^4}{4!}-\\cdots\\), converges for all real x. Polynomials \\(P_2\\) to \\(P_8\\) shown.', () => {
  const P = (n) => (x) => { let s = 0; for (let k = 0; 2 * k <= n; k++) s += ((-1) ** k * x ** (2 * k)) / fact(2 * k); return s; };
  return plot({ x: [-2 * PI, 2 * PI], y: [-2.5, 2.5], piX: 1, ystep: 1, curves: [{ f: cos, color: C.ink, w: 2.8 }, ...[2, 4, 6, 8].map((n, i) => ({ f: P(n), color: PAL[i], dash: '6 3', label: `P${n}`, labelAt: [[1.85, -2.3], [3.1, 2.3], [3.95, -2.3], [4.85, 2.3]][i] }))] });
});
def('power-geo', 'Power series from 1/(1 − x)', '\\(\\dfrac{1}{1-x}=\\sum_{n=0}^\\infty x^n\\) for \\(|x|<1\\). Partial sums \\(S_3,S_6,S_{12}\\) approach the function only inside \\((-1,1)\\).', () => {
  const S = (N) => (x) => { let s = 0; for (let n = 0; n <= N; n++) s += x ** n; return s; };
  return plot({ x: [-1.5, 1.5], y: [-1, 8], xstep: 0.5, vlines: [{ x: 1 }, { x: -1 }], curves: [{ f: (x) => 1 / (1 - x), color: C.ink, w: 2.6, n: 800 }, ...[3, 6, 12].map((N, i) => ({ f: S(N), color: PAL[i], dash: '6 3', label: `S${N}`, labelAt: [-1.45, S(N)(-1.45) > 8 ? 7.5 - i : S(N)(-1.45) + 0.3] }))] });
});

/* ---------- precalc / trig ---------- */
def('unit-circle', 'Unit circle: special angles (exact values)', 'Each point is \\((\\cos\\theta,\\sin\\theta)\\) computed at multiples of \\(\\dfrac{\\pi}{6}\\) and \\(\\dfrac{\\pi}{4}\\) and labelled with its exact value, e.g. \\(\\left(\\dfrac{\\sqrt3}{2},\\dfrac12\\right)\\) at \\(\\theta=\\dfrac{\\pi}{6}\\).', () => {
  const W = 480, H = 480, cx = 240, cy = 240, R = 140; let s = circle(cx, cy, R, { w: 1.6 }) + line(cx - R - 40, cy, cx + R + 40, cy) + line(cx, cy - R - 40, cx, cy + R + 40);
  const exact = (v) => { const a = abs(v), sg = v < -1e-9 ? '−' : ''; if (a < 1e-9) return '0'; if (abs(a - 1) < 1e-9) return sg + '1'; if (abs(a - 0.5) < 1e-9) return [sg + '1', '2']; if (abs(a - sqrt(2) / 2) < 1e-9) return [sg + '√2', '2']; if (abs(a - sqrt(3) / 2) < 1e-9) return [sg + '√3', '2']; throw new Error('non-special value ' + v); };
  const angles = [0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330];
  for (const deg of angles) {
    const th = (deg * PI) / 180, x = cos(th), y = sin(th), px = cx + R * x, py = cy - R * y;
    s += line(cx, cy, px, py, { color: C.grid, w: 0.8 }) + circle(px, py, 3.5, { fill: C.a, stroke: C.a });
    const lx = cx + (R + 48) * x, ly = cy - (R + 30) * y, ex = exact(x), ey = exact(y);
    const part = (e, xx) => (Array.isArray(e) ? frac(xx, ly, e[0], e[1], { size: 10 }) : text(xx, ly, e, { size: 10 }));
    s += text(lx - 25, ly, '(', { size: 18, color: C.muted }) + part(ex, lx - 13) + text(lx, ly + 5, ',', { size: 11 }) + part(ey, lx + 13) + text(lx + 25, ly, ')', { size: 18, color: C.muted });
  }
  return svg(W, H, s, 'unit circle');
});
def('sin-cos-graph', 'Graphs of sin x and cos x', 'Period \\(2\\pi\\), amplitude 1, range \\([-1,1]\\). \\(\\cos x=\\sin\\!\\left(x+\\dfrac{\\pi}{2}\\right)\\).', () =>
  plot({ x: [-2 * PI, 2 * PI], y: [-1.5, 1.5], piX: 0.5, ystep: 0.5, curves: [{ f: sin, color: C.a, label: 'sin x', labelAt: [PI / 2, 1.05] }, { f: cos, color: C.b, dash: '6 3', label: 'cos x', labelAt: [-0.3, 1.3] }] }));
def('tan-graph', 'Graph of tan x', 'Period \\(\\pi\\); vertical asymptotes at \\(x=\\dfrac{\\pi}{2}+k\\pi\\); zeros at \\(x=k\\pi\\).', () =>
  plot({ x: [-1.5 * PI, 1.5 * PI], y: [-4, 4], piX: 0.5, vlines: [{ x: -PI / 2 }, { x: PI / 2 }], curves: [{ f: tan, n: 2000, color: C.a }] }));
def('sinusoid', 'Transformed sinusoid y = A sin(B(x − C)) + D', '\\(y=2\\sin\\!\\left(2\\left(x-\\dfrac{\\pi}{4}\\right)\\right)+1\\): amplitude 2, period \\(\\dfrac{2\\pi}{2}=\\pi\\), phase shift \\(\\dfrac{\\pi}{4}\\) right, midline \\(y=1\\). Dotted: parent \\(\\sin x\\).', () =>
  plot({ x: [-PI / 2, 2 * PI], y: [-2, 4], piX: 0.25, hlines: [{ y: 1, label: 'midline y = 1' }, { y: 3 }, { y: -1 }], curves: [{ f: (x) => 2 * sin(2 * (x - PI / 4)) + 1, color: C.a }, { f: sin, color: C.muted, dash: '3 3' }] }));
def('trig-eq', 'Solving sin x = 1/2 on [0, 2π]', 'Intersections of \\(y=\\sin x\\) with \\(y=\\dfrac12\\): \\(x=\\dfrac{\\pi}{6}\\) and \\(x=\\dfrac{5\\pi}{6}\\).', () =>
  plot({ x: [0, 2 * PI], y: [-1.3, 1.3], piX: 1 / 6, ystep: 0.5, curves: [{ f: sin, color: C.a }], hlines: [{ y: 0.5, label: 'y = 1/2', dash: '', color: C.b }], points: [{ x: PI / 6, y: 0.5, color: C.b }, { x: 5 * PI / 6, y: 0.5, color: C.b }] }));
def('pythag-id', 'sin²x + cos²x = 1', 'Graphs of \\(\\sin^2x\\) and \\(\\cos^2x\\) sum to the constant 1 at every x (from the unit circle, hypotenuse 1). Also \\(\\sin^2x=\\dfrac{1-\\cos2x}{2}\\).', () =>
  plot({ x: [0, 2 * PI], y: [-0.2, 1.3], piX: 0.5, ystep: 0.25, curves: [{ f: (x) => sin(x) ** 2, color: C.a, label: 'sin²x', labelAt: [PI / 2 - 0.3, 1.1] }, { f: (x) => cos(x) ** 2, color: C.b, label: 'cos²x', labelAt: [0.1, 1.12] }, { f: () => 1, color: C.c, dash: '6 3', label: 'sum = 1', labelAt: [5, 1.14] }] }));
def('param-intro', 'Parametric equations: ellipse', '\\(x=3\\cos t\\), \\(y=2\\sin t\\) traces an ellipse counter-clockwise from \\((3,0)\\); eliminating t: \\(\\dfrac{x^2}{9}+\\dfrac{y^2}{4}=1\\). Arrows: velocity at \\(t=0,\\dfrac{\\pi}{2},\\pi,\\dfrac{3\\pi}{2}\\).', () =>
  plot({ W: 440, H: 320, x: [-4, 4], y: [-3, 3], curves: [{ param: (t) => [3 * cos(t), 2 * sin(t)], dom: [0, 2 * PI], color: C.a }], segs: [0, PI / 2, PI, 1.5 * PI].map((t) => [3 * cos(t), 2 * sin(t), 3 * cos(t) - 0.35 * 3 * sin(t), 2 * sin(t) + 0.35 * 2 * cos(t), C.b, 2, '', true]), points: [{ x: 3, y: 0, label: 't = 0', dy: 14 }] }));
def('vectors', 'Vector addition (tip-to-tail / parallelogram)', '\\(\\vec u=\\langle3,1\\rangle\\), \\(\\vec v=\\langle1,2\\rangle\\), \\(\\vec u+\\vec v=\\langle4,3\\rangle\\), \\(|\\vec u+\\vec v|=\\sqrt{16+9}=5\\).', () =>
  plot({ W: 400, H: 340, x: [-0.5, 5], y: [-0.5, 4], segs: [[0, 0, 3, 1, C.a, 2.4, '', true], [0, 0, 1, 2, C.b, 2.4, '', true], [3, 1, 4, 3, C.b, 1.4, '4 3', true], [1, 2, 4, 3, C.a, 1.4, '4 3', true], [0, 0, 4, 3, C.c, 2.6, '', true]], texts: [[1.8, 0.35, 'u', C.a], [0.3, 1.3, 'v', C.b], [2.1, 1.95, 'u + v', C.c]] }));
function matrixFig(M, lbl) {
  const T = ([x, y]) => [M[0][0] * x + M[0][1] * y, M[1][0] * x + M[1][1] * y], sq = [[0, 0], [1, 0], [1, 1], [0, 1]], det = M[0][0] * M[1][1] - M[0][1] * M[1][0];
  return plot({ W: 400, H: 340, x: [-1, 3.5], y: [-0.5, 2.5], ystep: 0.5, polys: [{ pts: sq, close: true, fill: C.muted, color: C.muted, op: 0.2 }, { pts: sq.map(T), close: true, fill: C.a, color: C.a }], segs: [[0, 0, ...T([1, 0]), C.b, 2.2, '', true], [0, 0, ...T([0, 1]), C.c, 2.2, '', true]], texts: [[2.4, 2.25, `det = ${fmt(det, 3)}`, C.a]], label: lbl });
}
def('matrix-transform', 'Matrix as a linear transformation', '\\(\\begin{bmatrix}2&1\\\\0&1\\end{bmatrix}\\) maps the unit square (grey) to a parallelogram of area \\(|\\det|=2\\); the columns are the images of \\(\\hat\\imath\\) and \\(\\hat\\jmath\\).', () => matrixFig([[2, 1], [0, 1]], 'matrix transform'));
def('matrix-rot', 'Rotation matrix', 'Rotation by \\(\\dfrac{\\pi}{4}\\): \\(\\begin{bmatrix}\\cos\\theta&-\\sin\\theta\\\\\\sin\\theta&\\cos\\theta\\end{bmatrix}\\), det = 1 (area preserved).', () => matrixFig([[cos(PI / 4), -sin(PI / 4)], [sin(PI / 4), cos(PI / 4)]], 'rotation matrix'));
def('rational-analysis', 'Rational function: asymptotes, hole, intercepts', '\\(f(x)=\\dfrac{(x-1)(x+3)}{(x-1)(x-2)}\\): hole at \\((1,-4)\\), vertical asymptote \\(x=2\\), horizontal asymptote \\(y=1\\), x-intercept \\(-3\\), y-intercept \\(f(0)=-\\dfrac32\\).', () =>
  plot({ x: [-6, 7], y: [-8, 8], vlines: [{ x: 2, label: 'x = 2' }], hlines: [{ y: 1, label: 'y = 1' }], curves: [{ f: (x) => (abs(x - 1) < 1e-9 ? NaN : ((x - 1) * (x + 3)) / ((x - 1) * (x - 2))), n: 1300, color: C.a }], points: [{ x: 1, y: -4, open: true, color: C.a, label: 'hole (1, −4)', anchor: 'end', dx: -8 }, { x: -3, y: 0, label: '(−3, 0)', dy: 14 }, { x: 0, y: -1.5, label: '(0, −3/2)', anchor: 'end', dx: -8 }] }));
def('exp-log-model', 'Exponential decay model (half-life)', '\\(A(t)=100\\left(\\tfrac12\\right)^{t/5}\\): half-life 5, so A halves every 5 units. Taking logs, \\(\\ln A=\\ln100-\\dfrac{\\ln2}{5}t\\) is linear in t.', () =>
  plot({ x: [0, 21], y: [0, 110], xlabel: 't', ylabel: 'A', curves: [{ f: (t) => 100 * 0.5 ** (t / 5), color: C.a }], points: [0, 5, 10, 15, 20].map((t) => ({ x: t, y: 100 * 0.5 ** (t / 5), label: fmt(100 * 0.5 ** (t / 5), 2) })) }));
def('rate-intuition', 'Rate of change intuition: shrinking intervals', 'Distance \\(d(t)=4.9t^2\\): average speeds on \\([1,2],[1,1.5],[1,1.1],[1,1.01]\\) are \\(14.7, 12.25, 10.29, 9.849\\) m/s, approaching the instantaneous speed \\(9.8\\) m/s at \\(t=1\\).', () =>
  bars({ bars: [2, 1.5, 1.1, 1.01].map((b, i) => ({ label: `[1, ${b}]`, v: (4.9 * b * b - 4.9) / (b - 1), color: PAL[i] })).concat([{ label: 'instant', v: 9.8, color: PAL[4] }]), showV: true, ylabel: 'average speed (m/s)', max: 17 }));

/* ---------- algebra / geometry prerequisites ---------- */
def('numline', 'Real number line', 'Rational \\(-\\dfrac32\\) and \\(0.75=\\dfrac34\\); irrational \\(\\sqrt2\\approx1.414\\) and \\(\\pi\\approx3.142\\), all placed to scale.', () => {
  const W = 500, H = 110, X = (v) => 40 + (v + 3) * 70; let s = line(20, 60, 480, 60, { arrow: true });
  for (let k = -3; k <= 3; k++) s += line(X(k), 54, X(k), 66) + text(X(k), 80, String(k), { size: 11 });
  [[-1.5, ['−3', '2']], [0.75, ['3', '4']], [sqrt(2), '√2'], [PI, 'π']].forEach(([v, l], i) => { s += circle(X(v), 60, 4, { fill: PAL[i], stroke: PAL[i] }) + (Array.isArray(l) ? frac(X(v), 30, l[0], l[1], { color: PAL[i], size: 13 }) : text(X(v), 34, l, { color: PAL[i], bold: true, size: 13 })); });
  return svg(W, H, s, 'number line');
});
def('lin-eq', 'Solving a linear equation graphically', '\\(2x+3=7\\): the graphs \\(y=2x+3\\) and \\(y=7\\) intersect at \\(x=2\\).', () =>
  plot({ x: [-3, 5], y: [-2, 10], curves: [{ f: (x) => 2 * x + 3, color: C.a, label: 'y = 2x + 3', labelAt: [2.9, 7.2] }, { f: () => 7, color: C.b, label: 'y = 7', labelAt: [-2.8, 7.6] }], points: [{ x: 2, y: 7, label: '(2, 7)', anchor: 'end', dx: -8 }] }));
def('ineq-1d', 'Compound inequality on a number line', '\\(-2<3x+1\\le7\\Rightarrow-1<x\\le2\\): open circle at −1 (excluded), closed circle at 2 (included).', () => {
  const W = 500, H = 90, X = (v) => 50 + (v + 4) * 50; let s = line(20, 50, 480, 50, { arrow: true });
  for (let k = -4; k <= 4; k++) s += line(X(k), 44, X(k), 56) + text(X(k), 72, String(k), { size: 11 });
  s += line(X(-1), 50, X(2), 50, { color: C.a, w: 5 }) + circle(X(-1), 50, 6, { fill: 'var(--bg-elev,#fff)', stroke: C.a, w: 2 }) + circle(X(2), 50, 6, { fill: C.a, stroke: C.a });
  return svg(W, H, s, 'inequality number line');
});
def('ineq-2d', 'Linear inequality in two variables', '\\(y\\le-\\tfrac12x+2\\): solid boundary (included), shade below. Test point \\((0,0)\\): \\(0\\le2\\) is true.', () =>
  plot({ x: [-4, 6], y: [-4, 5], fills: [{ f: (x) => -0.5 * x + 2, g: () => -4, dom: [-4, 6] }], curves: [{ f: (x) => -0.5 * x + 2, color: C.a, label: 'y = −½x + 2', labelAt: [-3.8, 4.4] }], points: [{ x: 0, y: 0, color: C.b, label: 'test (0, 0)', labelColor: C.ink, dy: 14 }] }));
def('vlt', 'Function vs not a function (vertical line test)', '\\(y=x^2\\) passes the vertical line test; the circle \\(x^2+y^2=4\\) fails (\\(x=1\\) meets it at \\(y=\\pm\\sqrt3\\)).', () =>
  plot({ W: 460, H: 320, x: [-3, 3], y: [-2.5, 4.5], vlines: [{ x: 1, color: C.e, dash: '', label: 'x = 1' }], curves: [{ f: (x) => x * x, color: C.a, label: 'y = x²', labelAt: [-2.7, 3.6] }, { param: (t) => [2 * cos(t), 2 * sin(t)], dom: [0, 2 * PI], color: C.b }], points: [{ x: 1, y: sqrt(3), color: C.b }, { x: 1, y: -sqrt(3), color: C.b }, { x: 1, y: 1, color: C.a }] }));
def('fn-graphs', 'Reading a function graph: domain, range, zeros, extrema', '\\(f(x)=\\tfrac14x^3-x\\) on \\([-3,3]\\): zeros \\(0,\\pm2\\); \\(f\'=\\tfrac34x^2-1=0\\) at \\(x=\\pm\\dfrac{2}{\\sqrt3}\\) (relative max \\(\\approx0.770\\), min \\(\\approx-0.770\\)); range \\([-3.75,3.75]\\).', () =>
  plot({ x: [-3.2, 3.2], y: [-4, 4], curves: [{ f: (x) => 0.25 * x ** 3 - x, dom: [-3, 3], color: C.a }], points: [{ x: -2, y: 0, label: '−2', dy: 14 }, { x: 0, y: 0, label: '0', dy: 14 }, { x: 2, y: 0, label: '2', dy: -12 }, { x: -2 / sqrt(3), y: 0.25 * (-2 / sqrt(3)) ** 3 + 2 / sqrt(3), color: C.b, r: 3 }, { x: 2 / sqrt(3), y: 0.25 * (2 / sqrt(3)) ** 3 - 2 / sqrt(3), color: C.b, r: 3 }, { x: -3, y: -3.75, label: '(−3, −3.75)' }, { x: 3, y: 3.75, label: '(3, 3.75)', anchor: 'end', dx: -8, dy: 4 }] }));
def('slope', 'Slope as rise over run', 'Through \\((-1,-1)\\) and \\((3,2)\\): \\(m=\\dfrac{2-(-1)}{3-(-1)}=\\dfrac34\\); point-slope form \\(y+1=\\dfrac34(x+1)\\).', () =>
  plot({ x: [-3, 5], y: [-3, 4], curves: [{ f: (x) => -1 + 0.75 * (x + 1), color: C.a }], segs: [[-1, -1, 3, -1, C.b, 1.6, '4 3'], [3, -1, 3, 2, C.c, 1.6, '4 3']], texts: [[1, -1.45, 'run = 4', C.b], [3.15, 0.5, 'rise = 3', C.c, 'start']], fracs: [[-1.5, 2.5, '3', '4', C.a, 'm =']], points: [{ x: -1, y: -1, label: '(−1, −1)', dy: 14, anchor: 'end', dx: -6 }, { x: 3, y: 2, label: '(3, 2)', anchor: 'end', dx: -8 }] }));
def('slope-forms', 'Positive, negative, zero, undefined slope', 'Lines \\(y=2x\\) (m = 2), \\(y=-\\tfrac12x+1\\) (\\(m=-\\tfrac12\\)), \\(y=-2\\) (m = 0), \\(x=3\\) (undefined).', () =>
  plot({ x: [-4, 5], y: [-4, 4], vlines: [{ x: 3, color: C.d, dash: '', label: 'undefined' }], curves: [{ f: (x) => 2 * x, color: C.a, label: 'm = 2', labelAt: [1.3, 3.2] }, { f: (x) => -0.5 * x + 1, color: C.b, label: 'm = −1/2', labelAt: [-3.9, 3.5] }, { f: () => -2, color: C.c, label: 'm = 0', labelAt: [-3.9, -1.5] }] }));
for (const [id, nm, g, cap] of [
  ['sys-one', 'one solution', (x) => -x + 4, 'Intersecting lines \\(y=2x+1\\) and \\(y=-x+4\\): unique solution \\((1,3)\\).'],
  ['sys-none', 'no solution', (x) => 2 * x - 2, 'Parallel lines \\(y=2x+1\\) and \\(y=2x-2\\): same slope, different intercepts ⇒ no solution (inconsistent).'],
  ['sys-inf', 'infinitely many solutions', (x) => 2 * x + 1, '\\(y=2x+1\\) and \\(4x-2y=-2\\) are the same line ⇒ infinitely many solutions (dependent).'],
]) def(id, `System of linear equations: ${nm}`, cap, () => plot({ x: [-3, 4], y: [-4, 8], curves: [{ f: (x) => 2 * x + 1, color: C.a, w: id === 'sys-inf' ? 5 : 2 }, { f: g, color: C.b, dash: '6 4' }], points: id === 'sys-one' ? [{ x: 1, y: 3, label: '(1, 3)' }] : [] }));
def('exp-rules', 'Exponential functions 2ˣ and (1/2)ˣ', '\\(b^{m}b^{n}=b^{m+n}\\), \\(b^0=1\\): both curves pass through \\((0,1)\\); \\(\\left(\\tfrac12\\right)^x=2^{-x}\\) is the reflection of \\(2^x\\) in the y-axis.', () =>
  plot({ x: [-4, 4], y: [-1, 9], curves: [{ f: (x) => 2 ** x, color: C.a, label: '2ˣ', labelAt: [2.65, 6.6] }, { f: (x) => 2 ** -x, color: C.b, label: '(1/2)ˣ', labelAt: [-3.9, 7.4] }], points: [{ x: 0, y: 1, label: '(0, 1)' }] }));
def('area-model', 'Polynomial multiplication area model', '\\((x+2)(x+3)=x^2+3x+2x+6=x^2+5x+6\\).', () => {
  const s = rect(60, 40, 160, 160, { fill: C.a, op: 0.2 }) + rect(220, 40, 90, 160, { fill: C.b, op: 0.2 }) + rect(60, 200, 160, 60, { fill: C.c, op: 0.2 }) + rect(220, 200, 90, 60, { fill: C.d, op: 0.25 }) + text(140, 120, 'x²', { size: 16 }) + text(265, 120, '3x', { size: 14 }) + text(140, 230, '2x', { size: 14 }) + text(265, 230, '6', { size: 14 }) + text(140, 28, 'x') + text(265, 28, '3') + text(44, 120, 'x') + text(44, 230, '2');
  return svg(340, 280, s, 'area model');
});
def('factor-roots', 'Factoring ↔ x-intercepts', '\\(x^2-5x+6=(x-2)(x-3)\\): zeros at 2 and 3; vertex \\(\\left(\\dfrac52,-\\dfrac14\\right)\\).', () =>
  plot({ x: [-0.5, 5.5], y: [-1, 6], curves: [{ f: (x) => x * x - 5 * x + 6, color: C.a }], points: [{ x: 2, y: 0, label: '(2, 0)', dy: -12, anchor: 'end', dx: -6 }, { x: 3, y: 0, label: '(3, 0)', dy: -12 }, { x: 2.5, y: -0.25, color: C.b, label: 'vertex', dy: 14 }] }));
def('quadratic', 'Quadratic: vertex, axis, roots', '\\(y=x^2-2x-3=(x-1)^2-4\\): vertex \\((1,-4)\\), axis \\(x=1\\), roots \\(x=\\dfrac{2\\pm\\sqrt{16}}{2}=-1,3\\), y-intercept \\(-3\\).', () =>
  plot({ x: [-3, 5], y: [-5, 6], vlines: [{ x: 1, label: 'x = 1' }], curves: [{ f: (x) => x * x - 2 * x - 3, color: C.a }], points: [{ x: 1, y: -4, color: C.b, label: '(1, −4)' }, { x: -1, y: 0, label: '−1', dy: -12, anchor: 'end', dx: -6 }, { x: 3, y: 0, label: '3', dy: -12 }, { x: 0, y: -3, label: '(0, −3)', anchor: 'end', dx: -8 }] }));
def('discriminant', 'Discriminant: 2, 1, or 0 real roots', '\\(b^2-4ac>0\\): \\(x^2-4\\) (Δ = 16, two roots); \\(=0\\): \\(x^2\\) (one double root); \\(<0\\): \\(x^2+2\\) (Δ = −8, none).', () =>
  plot({ x: [-3, 3], y: [-5, 7], curves: [{ f: (x) => x * x - 4, color: C.a, label: 'Δ = 16', labelAt: [2.35, 1.6] }, { f: (x) => x * x, color: C.b, label: 'Δ = 0', labelAt: [2.3, 4.6] }, { f: (x) => x * x + 2, color: C.c, label: 'Δ = −8', labelAt: [-2.9, 5.4] }] }));
def('lin-vs-exp', 'Linear vs exponential growth', '', () => {
  let c = 0; for (let x = 0.1; x < 20; x += 1e-4) if (10 * 1.3 ** x > 10 + 5 * x) { c = x; break; }
  setCap('lin-vs-exp', `\\(L(x)=10+5x\\) adds 5 per step; \\(E(x)=10\\cdot1.3^x\\) multiplies by 1.3 per step. E overtakes L at \\(x\\approx${fmt(c, 2)}\\) and then grows faster forever.`);
  return plot({ x: [0, 10], y: [0, 140], curves: [{ f: (x) => 10 + 5 * x, color: C.a, label: 'linear', labelAt: [8.6, 50] }, { f: (x) => 10 * 1.3 ** x, color: C.b, label: 'exponential', labelAt: [6.6, 112] }], points: [{ x: c, y: 10 + 5 * c, label: `x ≈ ${fmt(c, 2)}`, anchor: 'end', dx: -8 }] });
});
def('scatter-fit', 'Scatter plot with least-squares line', '', () => {
  const rnd = mulberry(7), xs = Array.from({ length: 14 }, (_, i) => 1 + i * 0.7), ys = xs.map((x) => 2 + 1.5 * x + (rnd() - 0.5) * 3);
  const n = xs.length, mx = xs.reduce((a, b) => a + b) / n, my = ys.reduce((a, b) => a + b) / n;
  const sxy = xs.reduce((a, x, i) => a + (x - mx) * (ys[i] - my), 0), sxx = xs.reduce((a, x) => a + (x - mx) ** 2, 0), syy = ys.reduce((a, y) => a + (y - my) ** 2, 0);
  const b = sxy / sxx, a = my - b * mx, r = sxy / sqrt(sxx * syy);
  setCap('scatter-fit', `14 seeded data points; least-squares line \\(\\hat y=${fmt(a, 2)}+${fmt(b, 2)}x\\) with slope \\(b=\\dfrac{\\sum(x-\\bar x)(y-\\bar y)}{\\sum(x-\\bar x)^2}\\), correlation \\(r=${fmt(r, 3)}\\).`);
  return plot({ x: [0, 11], y: [0, 20], curves: [{ f: (x) => a + b * x, color: C.b }], points: xs.map((x, i) => ({ x, y: ys[i], r: 3.5, color: C.a })) });
});
const geo = (body, W = 400, H = 300, lbl = 'geometry') => svg(W, H, body, lbl);
def('angles', 'Angle pairs at intersecting lines', 'Vertical angles are equal (\\(50°\\) and \\(50°\\)); adjacent (linear-pair) angles are supplementary: \\(50°+130°=180°\\).', () => {
  const cx = 200, cy = 150, a = (50 * PI) / 180;
  const s = line(cx - 160, cy, cx + 160, cy, { w: 2 }) + line(cx - 160 * cos(a), cy + 160 * sin(a), cx + 160 * cos(a), cy - 160 * sin(a), { w: 2 })
    + path(`M${cx + 40},${cy} A40 40 0 0 0 ${cx + 40 * cos(a)},${cy - 40 * sin(a)}`, { stroke: C.a, w: 2 }) + text(cx + 58, cy - 18, '50°', { color: C.a }) + path(`M${cx - 40},${cy} A40 40 0 0 0 ${cx - 40 * cos(a)},${cy + 40 * sin(a)}`, { stroke: C.a, w: 2 }) + text(cx - 58, cy + 18, '50°', { color: C.a }) + text(cx - 18, cy - 40, '130°', { color: C.b }) + text(cx + 18, cy + 40, '130°', { color: C.b });
  return geo(s);
});
def('parallel-transversal', 'Parallel lines cut by a transversal', 'Corresponding angles are equal (\\(65°\\)); alternate interior angles are equal; same-side interior angles are supplementary (\\(65°+115°=180°\\)).', () => {
  const a = (65 * PI) / 180, k = 1 / tan(a), xi = (y) => 200 + (150 - y) * k; // transversal through (200,150) at 65°
  let s = line(20, 90, 380, 90, { w: 2 }) + line(20, 210, 380, 210, { w: 2 }) + line(xi(280), 280, xi(20), 20, { w: 2 });
  for (const y of [90, 210]) s += path(`M${xi(y) + 30},${y} A30 30 0 0 0 ${xi(y) + 30 * cos(a)},${y - 30 * sin(a)}`, { stroke: C.a, w: 2 }) + text(xi(y) + 46, y - 14, '65°', { color: C.a }) + text(xi(y) - 30, y - 14, '115°', { color: C.b });
  s += text(372, 78, 'ℓ₁') + text(372, 198, 'ℓ₂');
  return geo(s);
});
def('similar-tri', 'Similar triangles (scale factor 1.5)', '△ABC ~ △DEF with sides 3-4-5 and 4.5-6-7.5: \\(\\dfrac{4.5}{3}=\\dfrac{6}{4}=\\dfrac{7.5}{5}=1.5\\); areas scale by \\(1.5^2=2.25\\) (6 → 13.5). Drawn to scale.', () => {
  const sc = 26, tri = (ox, k, lab) => path(`M${ox},250 L${ox + 4 * k * sc},250 L${ox},${250 - 3 * k * sc} Z`, { fill: C.a, op: 0.12, stroke: C.a, w: 2 }) + text(ox - 14, 250 - 1.5 * k * sc, String(3 * k)) + text(ox + 2 * k * sc, 266, String(4 * k)) + text(ox + 2 * k * sc + 14, 250 - 1.5 * k * sc - 8, String(5 * k)) + text(ox + 6, 250 - 3 * k * sc - 14, lab, { bold: true, anchor: 'start' });
  return geo(tri(30, 1, '△ABC') + tri(190, 1.5, '△DEF'), 400, 290);
});
def('pythagoras', 'Pythagorean theorem (3-4-5)', 'Squares on the legs have areas 9 and 16; the square on the hypotenuse has area 25 = 9 + 16. Drawn to scale.', () => {
  const sc = 22, A = [140, 200], B = [140 + 4 * sc, 200], Cc = [140, 200 - 3 * sc], dx = B[0] - Cc[0], dy = B[1] - Cc[1], n = [dy, -dx];
  let s = path(`M${A}L${B}L${Cc}Z`, { fill: C.ink, op: 0.08, w: 2 }) + rect(140, 200, 4 * sc, 4 * sc, { fill: C.a, op: 0.2, stroke: C.a }) + rect(140 - 3 * sc, 200 - 3 * sc, 3 * sc, 3 * sc, { fill: C.b, op: 0.2, stroke: C.b });
  s += path(`M${Cc}L${B}L${B[0] + n[0]},${B[1] + n[1]}L${Cc[0] + n[0]},${Cc[1] + n[1]}Z`, { fill: C.c, op: 0.2, stroke: C.c });
  s += text(140 + 2 * sc, 200 + 2 * sc, '16', { size: 14 }) + text(140 - 1.5 * sc, 200 - 1.5 * sc, '9', { size: 14 }) + text((Cc[0] + B[0]) / 2 + n[0] / 2, (Cc[1] + B[1]) / 2 + n[1] / 2, '25', { size: 14 }) + rect(140, 190, 10, 10, { w: 1 });
  return geo(s, 420, 310);
});
def('trig-ratios', 'Right-triangle trig ratios (SOH-CAH-TOA)', 'For the 3-4-5 triangle with θ opposite the side 3: \\(\\sin\\theta=\\dfrac35\\), \\(\\cos\\theta=\\dfrac45\\), \\(\\tan\\theta=\\dfrac34\\); \\(\\theta=\\arctan0.75\\approx36.87°\\).', () => {
  const sc = 50; let s = path(`M40,220 L${40 + 4 * sc},220 L${40 + 4 * sc},${220 - 3 * sc} Z`, { fill: C.a, op: 0.1, stroke: C.a, w: 2 }) + rect(40 + 4 * sc - 12, 208, 12, 12, { w: 1 });
  s += path(`M85,220 A45 45 0 0 0 ${40 + 45 * 0.8},${220 - 45 * 0.6}`, { stroke: C.b, w: 2 }) + text(100, 208, 'θ', { color: C.ink, size: 14 }) + text(140, 236, 'adjacent 4') + text(40 + 4 * sc + 8, 145, 'opp 3', { anchor: 'start' }) + text(128, 136, 'hyp 5', { rotate: -36.87 });
  s += frac(345, 70, '3', '5', { prefix: 'sin θ =' }) + frac(345, 130, '4', '5', { prefix: 'cos θ =' }) + frac(345, 190, '3', '4', { prefix: 'tan θ =' });
  return geo(s, 400, 260);
});
def('circle-angles', 'Central and inscribed angles', '', () => {
  const cx = 200, cy = 150, R = 110, pt = (d) => [cx + R * cos((d * PI) / 180), cy - R * sin((d * PI) / 180)];
  const [ax, ay] = pt(-40), [bx, by] = pt(60), [px, py] = pt(200);
  const ang = (ux, uy, vx, vy) => (Math.acos((ux * vx + uy * vy) / (Math.hypot(ux, uy) * Math.hypot(vx, vy))) * 180) / PI;
  const central = ang(ax - cx, ay - cy, bx - cx, by - cy), ins = ang(ax - px, ay - py, bx - px, by - py);
  setCap('circle-angles', `Arc AB subtends a central angle of ${fmt(central, 1)}° and an inscribed angle of ${fmt(ins, 1)}° (computed from coordinates): inscribed angle \\(=\\dfrac12\\) central angle.`);
  const s = circle(cx, cy, R, { w: 1.6 }) + line(cx, cy, ax, ay, { color: C.a, w: 2 }) + line(cx, cy, bx, by, { color: C.a, w: 2 }) + line(px, py, ax, ay, { color: C.b, w: 2 }) + line(px, py, bx, by, { color: C.b, w: 2 }) + text(cx + 26, cy - 4, `${Math.round(central)}°`, { color: C.a }) + text(px + 40, py - 4, `${Math.round(ins)}°`, { color: C.b }) + circle(cx, cy, 3, { fill: C.ink }) + text(ax + 10, ay + 8, 'A') + text(bx + 8, by - 8, 'B') + text(px - 12, py, 'P');
  return geo(s);
});
def('area-perim', 'Area and perimeter of a composite figure', 'Rectangle 8×4 with a semicircle of diameter 4 on one end: \\(A=32+\\dfrac{\\pi\\cdot2^2}{2}=32+2\\pi\\approx38.28\\); \\(P=8+4+8+2\\pi\\approx26.28\\).', () => {
  const sc = 30; const s = path(`M40,60 L${40 + 8 * sc},60 A${2 * sc} ${2 * sc} 0 0 1 ${40 + 8 * sc},${60 + 4 * sc} L40,${60 + 4 * sc} Z`, { fill: C.a, op: 0.15, stroke: C.a, w: 2 }) + text(40 + 4 * sc, 48, '8') + text(28, 60 + 2 * sc, '4') + line(40 + 8 * sc, 60 + 2 * sc, 40 + 10 * sc, 60 + 2 * sc, { color: C.muted, dash: '3 3' }) + text(40 + 9 * sc, 60 + 2 * sc - 10, 'r = 2', { size: 11 });
  return geo(s, 400, 220);
});
def('solids', 'Volumes of solids (Archimedes)', 'Cylinder \\(V=\\pi r^2h\\), cone \\(V=\\dfrac13\\pi r^2h\\), sphere \\(V=\\dfrac43\\pi r^3\\). With \\(r=1\\), \\(h=2\\): cylinder \\(2\\pi\\), cone \\(\\dfrac{2\\pi}{3}\\), sphere \\(\\dfrac{4\\pi}{3}\\) — cone + sphere = cylinder.', () => {
  const el = (cx, cy, rx, ry, dash) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="none" stroke="${C.ink}" stroke-width="1.4"${dash ? ' stroke-dasharray="4 3"' : ''}/>`;
  let s = el(80, 50, 50, 12) + el(80, 150, 50, 12, true) + line(30, 50, 30, 150) + line(130, 50, 130, 150) + text(80, 185, 'cylinder r=1, h=2');
  s += el(210, 150, 50, 12, true) + line(160, 150, 210, 50) + line(260, 150, 210, 50) + text(210, 185, 'cone r=1, h=2');
  s += circle(340, 100, 50) + `<ellipse cx="340" cy="100" rx="50" ry="12" fill="none" stroke="${C.ink}" stroke-dasharray="4 3"/>` + text(340, 185, 'sphere r=1');
  return geo(s, 400, 210);
});
def('dist-mid', 'Distance and midpoint', '\\(A(1,1)\\), \\(B(7,9)\\): \\(d=\\sqrt{6^2+8^2}=10\\), midpoint \\(\\left(\\dfrac{1+7}{2},\\dfrac{1+9}{2}\\right)=(4,5)\\).', () =>
  plot({ W: 400, H: 380, x: [-1, 9], y: [-1, 10], segs: [[1, 1, 7, 9, C.a, 2.2], [1, 1, 7, 1, C.muted, 1.2, '4 3'], [7, 1, 7, 9, C.muted, 1.2, '4 3']], texts: [[4, 0.4, '6'], [7.4, 5, '8']], points: [{ x: 1, y: 1, label: 'A(1, 1)', dy: 14 }, { x: 7, y: 9, label: 'B(7, 9)', anchor: 'end', dx: -8 }, { x: 4, y: 5, color: C.b, label: 'M(4, 5)', anchor: 'end', dx: -8 }] }));
def('transformations', 'Rigid transformations of a triangle', 'Triangle \\(A(1,1),B(3,1),C(1,2)\\): reflection in the y-axis \\((x,y)\\mapsto(-x,y)\\), rotation \\(90°\\) about the origin \\((x,y)\\mapsto(-y,x)\\), translation by \\(\\langle1,-4\\rangle\\).', () => {
  const T = [[1, 1], [3, 1], [1, 2]];
  return plot({ W: 420, H: 380, x: [-4, 5], y: [-4, 4], polys: [{ pts: T, close: true, fill: C.a, color: C.a }, { pts: T.map(([x, y]) => [-x, y]), close: true, fill: C.b, color: C.b }, { pts: T.map(([x, y]) => [-y, x]), close: true, fill: C.c, color: C.c }, { pts: T.map(([x, y]) => [x + 1, y - 4]), close: true, fill: C.d, color: C.d }], legend: [['original', C.a], ['reflect in y-axis', C.b], ['rotate 90°', C.c], ['translate ⟨1, −4⟩', C.d]], legendX: 275 });
});
def('isosceles-proof', 'Proof figure: isosceles triangle', 'In △ABC with \\(AB=AC\\), the median AD gives △ABD ≅ △ACD by SSS (AB = AC, BD = DC, AD shared), so \\(\\angle B=\\angle C\\).', () => {
  const s = path('M200,30 L80,250 L320,250 Z', { fill: C.a, op: 0.08, w: 2 }) + line(200, 30, 200, 250, { color: C.b, dash: '5 3' }) + text(200, 18, 'A') + text(68, 258, 'B') + text(332, 258, 'C') + text(200, 268, 'D')
    + line(134, 134, 146, 146, { w: 1.5 }) + line(254, 146, 266, 134, { w: 1.5 }) + line(140, 244, 140, 256, { w: 1.5 }) + line(260, 244, 260, 256, { w: 1.5 });
  return geo(s, 400, 280);
});
def('parent-fns', 'Families of parent functions', 'Linear \\(x\\), quadratic \\(x^2\\), cubic \\(x^3\\), absolute value \\(|x|\\), square root \\(\\sqrt x\\), reciprocal \\(\\dfrac1x\\).', () =>
  plot({ x: [-3, 3], y: [-3, 3], curves: [{ f: (x) => x, label: 'x', labelAt: [2.55, 2.2] }, { f: (x) => x * x, label: 'x²', labelAt: [-1.9, 2.7] }, { f: (x) => x ** 3, label: 'x³', labelAt: [1.2, 2.6] }, { f: abs, label: '|x|', labelAt: [-2.95, 2.3] }, { f: sqrt, dom: [0, 3], label: '√x', labelAt: [2.6, 1.3] }, { f: (x) => 1 / x, n: 800, label: '1/x', labelAt: [0.45, -2.6] }] }));
def('vertex-form', 'Transformations: y = a(x − h)² + k', '\\(y=-\\tfrac12(x-2)^2+3\\): reflect in the x-axis, vertical compression by \\(\\tfrac12\\), shift right 2 and up 3; vertex \\((2,3)\\).', () =>
  plot({ x: [-3, 6], y: [-4, 6], curves: [{ f: (x) => x * x, color: C.muted, dash: '4 3', label: 'x²', labelAt: [-2.7, 5] }, { f: (x) => -0.5 * (x - 2) ** 2 + 3, color: C.a, label: '−½(x−2)² + 3', labelAt: [3.4, 2.6] }], points: [{ x: 2, y: 3, color: C.b, label: '(2, 3)' }] }));
def('poly-mult', 'Polynomial: zeros, multiplicity, end behavior', '\\(p(x)=(x+2)(x-1)^2(x-3)\\): crosses the axis at −2 and 3, touches (bounces) at 1 (multiplicity 2); degree 4 with positive leading coefficient ⇒ both ends rise.', () =>
  plot({ x: [-3, 4], y: [-14, 12], curves: [{ f: (x) => (x + 2) * (x - 1) ** 2 * (x - 3), color: C.a }], points: [{ x: -2, y: 0, label: '−2', anchor: 'end', dx: -8 }, { x: 1, y: 0, label: '1 (×2)' }, { x: 3, y: 0, label: '3', dy: 14 }] }));
def('radical-fns', 'Radical functions √x and ∛x', '\\(x^{1/2}=\\sqrt x\\) is defined for \\(x\\ge0\\); \\(x^{1/3}=\\sqrt[3]x\\) for all reals; in general \\(x^{m/n}=\\left(\\sqrt[n]{x}\\right)^m\\).', () =>
  plot({ x: [-8, 9], y: [-3, 3.5], curves: [{ f: sqrt, dom: [0, 9], color: C.a, label: '√x', labelAt: [6.3, 2.85] }, { f: Math.cbrt, color: C.b, label: '∛x', labelAt: [-7.2, -1.4] }] }));
def('exp-family', 'Exponential families and asymptotes', '\\(y=a\\cdot b^x+k\\): \\(3\\cdot2^x\\) (y-intercept 3), \\(2^{x}-2\\) (asymptote \\(y=-2\\)), \\(e^{-x}\\) (decay).', () =>
  plot({ x: [-4, 4], y: [-3, 8], hlines: [{ y: -2, label: 'y = −2' }], curves: [{ f: (x) => 3 * 2 ** x, label: '3·2ˣ', labelAt: [0.75, 6.9] }, { f: (x) => 2 ** x - 2, label: '2ˣ − 2', labelAt: [3.05, 4.2] }, { f: (x) => exp(-x), label: 'e^(−x)', labelAt: [-2.9, 7] }] }));
def('log-inverse', 'Logarithm as the inverse of exponential', '\\(y=\\log_2x\\) is the reflection of \\(y=2^x\\) across \\(y=x\\): \\((0,1)\\leftrightarrow(1,0)\\) and \\((3,8)\\leftrightarrow(8,3)\\).', () =>
  plot({ W: 400, H: 380, x: [-3, 9], y: [-3, 9], curves: [{ f: (x) => 2 ** x, color: C.a, label: '2ˣ', labelAt: [2.3, 6.4] }, { f: (x) => log(x) / log(2), dom: [0.01, 9], color: C.b, label: 'log₂ x', labelAt: [6.8, 2.3] }, { f: (x) => x, color: C.muted, dash: '4 4' }], points: [{ x: 3, y: 8, color: C.a, label: '(3, 8)', anchor: 'end', dx: -8 }, { x: 8, y: 3, color: C.b, label: '(8, 3)', dy: 14 }, { x: 0, y: 1, color: C.a }, { x: 1, y: 0, color: C.b }] }));
def('sequences', 'Arithmetic vs geometric sequences', 'Arithmetic \\(a_n=2+3(n-1)\\) lies on a line; geometric \\(g_n=2\\cdot1.5^{n-1}\\) follows an exponential curve.', () =>
  plot({ x: [0, 9], y: [0, 40], xstep: 1, points: [...range(1, 8, 1).map((n) => ({ x: n, y: 2 + 3 * (n - 1), color: C.a, r: 4 })), ...range(1, 8, 1).map((n) => ({ x: n, y: 2 * 1.5 ** (n - 1), color: C.b, r: 4 }))], legend: [['arithmetic, d = 3', C.a], ['geometric, r = 1.5', C.b]], legendX: 70 }));
def('binomial', 'Binomial probability distribution', '', () => {
  const n = 5, p = 0.4, P = range(0, 5, 1).map((k) => (fact(n) / (fact(k) * fact(n - k))) * p ** k * (1 - p) ** (n - k));
  setCap('binomial', `\\(X\\sim B(5,\\,0.4)\\): \\(P(X=k)=\\binom{5}{k}(0.4)^k(0.6)^{5-k}\\) = ${P.map((v) => fmt(v, 4)).join(', ')} for k = 0…5 (sum ${fmt(P.reduce((a, b) => a + b), 4)}); mean \\(np=2\\).`);
  return bars({ bars: P.map((v, k) => ({ label: String(k), v, color: C.a })), showV: true, xlabel: 'k successes', ylabel: 'P(X = k)', max: 0.4 });
});
def('prob-tree', 'Probability tree diagram', 'Two draws without replacement from 3 red and 2 blue: \\(P(RR)=\\dfrac35\\cdot\\dfrac24=\\dfrac{3}{10}\\), \\(P(RB)=\\dfrac35\\cdot\\dfrac24=\\dfrac{3}{10}\\), \\(P(BR)=\\dfrac25\\cdot\\dfrac34=\\dfrac{3}{10}\\), \\(P(BB)=\\dfrac25\\cdot\\dfrac14=\\dfrac{1}{10}\\).', () => {
  const node = (x, y, t, c) => circle(x, y, 14, { fill: c, op: 0.2, stroke: c }) + text(x, y, t, { bold: true });
  const br = (x1, y1, x2, y2, n, d) => line(x1 + 14, y1, x2 - 14, y2) + frac((x1 + x2) / 2, (y1 + y2) / 2 - 14, n, d, { size: 11 });
  let s = node(40, 150, '•', C.muted) + br(40, 150, 170, 80, '3', '5') + br(40, 150, 170, 220, '2', '5') + node(170, 80, 'R', C.e) + node(170, 220, 'B', C.a);
  s += br(170, 80, 300, 40, '2', '4') + br(170, 80, 300, 120, '2', '4') + br(170, 220, 300, 180, '3', '4') + br(170, 220, 300, 260, '1', '4');
  [['R', 40, C.e, '3', '10'], ['B', 120, C.a, '3', '10'], ['R', 180, C.e, '3', '10'], ['B', 260, C.a, '1', '10']].forEach(([t, y, c, n, d]) => { s += node(300, y, t, c) + frac(365, y, n, d, { size: 12 }); });
  return svg(400, 300, s, 'probability tree');
});
def('conics', 'Conic sections', 'Circle \\(x^2+y^2=4\\); ellipse \\(\\dfrac{x^2}{16}+\\dfrac{y^2}{4}=1\\); parabola \\(y=\\dfrac{x^2}{4}-3\\); hyperbola \\(x^2-y^2=1\\) (asymptotes \\(y=\\pm x\\)).', () =>
  plot({ W: 420, H: 400, x: [-5, 5], y: [-4.5, 4.5], curves: [{ param: (t) => [2 * cos(t), 2 * sin(t)], dom: [0, 2 * PI], label: 'circle', labelAt: [0.9, 2.3] }, { param: (t) => [4 * cos(t), 2 * sin(t)], dom: [0, 2 * PI], label: 'ellipse', labelAt: [3.1, 1.75] }, { f: (x) => x * x / 4 - 3, label: 'parabola', labelAt: [3.2, -0.6] }, { param: (t) => [Math.cosh(t), Math.sinh(t)], dom: [-2.2, 2.2], label: 'hyperbola', labelAt: [3.3, 3.9] }, { param: (t) => [-Math.cosh(t), Math.sinh(t)], dom: [-2.2, 2.2], color: PAL[3] }, { f: (x) => x, color: C.muted, dash: '3 3', w: 1 }, { f: (x) => -x, color: C.muted, dash: '3 3', w: 1 }] }));

/* ---------- topic → figure mapping ---------- */
export const TOPIC_FIGURES = {
  'math-prep-alg1:P1.1': ['numline'], 'math-prep-alg1:P1.2': ['lin-eq'], 'math-prep-alg1:P1.3': ['ineq-1d', 'ineq-2d'], 'math-prep-alg1:P1.4': ['vlt', 'fn-graphs'],
  'math-prep-alg1:P1.5': ['slope', 'slope-forms'], 'math-prep-alg1:P1.6': ['sys-one', 'sys-none', 'sys-inf'], 'math-prep-alg1:P1.7': ['exp-rules'], 'math-prep-alg1:P1.8': ['area-model'],
  'math-prep-alg1:P1.9': ['factor-roots'], 'math-prep-alg1:P1.10': ['quadratic', 'discriminant'], 'math-prep-alg1:P1.11': ['lin-vs-exp'], 'math-prep-alg1:P1.12': ['scatter-fit'],
  'math-prep-geo:P2.1': ['angles'], 'math-prep-geo:P2.2': ['parallel-transversal'], 'math-prep-geo:P2.3': ['similar-tri'], 'math-prep-geo:P2.4': ['pythagoras'], 'math-prep-geo:P2.5': ['trig-ratios'],
  'math-prep-geo:P2.6': ['circle-angles'], 'math-prep-geo:P2.7': ['area-perim'], 'math-prep-geo:P2.8': ['solids'], 'math-prep-geo:P2.9': ['dist-mid'], 'math-prep-geo:P2.10': ['transformations'], 'math-prep-geo:P2.11': ['isosceles-proof'],
  'math-prep-alg2:P3.1': ['parent-fns'], 'math-prep-alg2:P3.2': ['vertex-form', 'quadratic'], 'math-prep-alg2:P3.3': ['poly-mult'], 'math-prep-alg2:P3.4': ['rational-analysis', 'limit-va', 'limit-ha'], 'math-prep-alg2:P3.5': ['radical-fns'],
  'math-prep-alg2:P3.6': ['exp-family'], 'math-prep-alg2:P3.7': ['log-inverse'], 'math-prep-alg2:P3.8': ['sequences', 'geo-series'], 'math-prep-alg2:P3.9': ['binomial', 'prob-tree'], 'math-prep-alg2:P3.10': ['matrix-transform'], 'math-prep-alg2:P3.11': ['conics'], 'math-prep-alg2:P3.12': ['pythag-id'],
  'math-prep-precalc:P4.1': ['rational-analysis', 'poly-mult'], 'math-prep-precalc:P4.2': ['exp-log-model', 'log-inverse'], 'math-prep-precalc:P4.3': ['unit-circle', 'sin-cos-graph', 'tan-graph', 'sinusoid'], 'math-prep-precalc:P4.4': ['trig-eq', 'pythag-id'],
  'math-prep-precalc:P4.5': ['polar-points', 'polar-basic'], 'math-prep-precalc:P4.6': ['param-intro', 'cycloid'], 'math-prep-precalc:P4.7': ['vectors'], 'math-prep-precalc:P4.8': ['matrix-transform', 'matrix-rot'], 'math-prep-precalc:P4.9': ['limit-sinx', 'limit-table'], 'math-prep-precalc:P4.10': ['rate-intuition', 'secant-tangent'],
  'calc-u0:0.1': ['parent-fns', 'fn-graphs'], 'calc-u0:0.2': ['unit-circle', 'sin-cos-graph', 'tan-graph', 'sinusoid'],
  'calc-u1:1.1': ['secant-tangent'], 'calc-u1:1.2': ['limit-1sided'], 'calc-u1:1.3': ['limit-jump', 'limit-hole', 'limit-hole-defined', 'limit-va', 'limit-osc', 'limit-1sided'], 'calc-u1:1.4': ['limit-table'],
  'calc-u1:1.5': ['limit-algebra'], 'calc-u1:1.6': ['limit-hole', 'limit-rationalize'], 'calc-u1:1.7': ['limit-rationalize', 'limit-sinx'], 'calc-u1:1.8': ['limit-squeeze'], 'calc-u1:1.9': ['limit-table', 'limit-1sided'],
  'calc-u1:1.10': ['disc-types', 'limit-jump', 'limit-hole', 'limit-va'], 'calc-u1:1.11': ['cont-3cond'], 'calc-u1:1.12': ['cont-interval'], 'calc-u1:1.13': ['cont-remove'], 'calc-u1:1.14': ['limit-va'], 'calc-u1:1.15': ['limit-ha'], 'calc-u1:1.16': ['ivt'],
  'calc-u2:2.1': ['avg-inst', 'secant-tangent'], 'calc-u2:2.2': ['diff-quotient'], 'calc-u2:2.3': ['deriv-table'], 'calc-u2:2.4': ['nondiff'], 'calc-u2:2.5': ['power-rule'], 'calc-u2:2.6': ['sum-rule'],
  'calc-u2:2.7': ['trig-deriv', 'exp-ln-deriv'], 'calc-u2:2.8': ['product-rule'], 'calc-u2:2.9': ['quotient-rule'], 'calc-u2:2.10': ['tan-sec'],
  'calc-u3:3.1': ['chain-rule'], 'calc-u3:3.2': ['implicit-circle', 'implicit-folium'], 'calc-u3:3.3': ['inverse-deriv'], 'calc-u3:3.4': ['inverse-trig'], 'calc-u3:3.5': ['chain-rule', 'quotient-rule'], 'calc-u3:3.6': ['higher-deriv', 'fff'],
  'calc-u4:4.1': ['context-rate'], 'calc-u4:4.2': ['motion-svt'], 'calc-u4:4.3': ['marginal'], 'calc-u4:4.4': ['ladder'], 'calc-u4:4.5': ['ladder', 'cone-tank'], 'calc-u4:4.6': ['linearization'], 'calc-u4:4.7': ['lhopital', 'lhopital-inf'],
  'calc-u5:5.1': ['mvt'], 'calc-u5:5.2': ['evt'], 'calc-u5:5.3': ['inc-dec'], 'calc-u5:5.4': ['fdt-chart', 'inc-dec'], 'calc-u5:5.5': ['candidates'], 'calc-u5:5.6': ['concavity'], 'calc-u5:5.7': ['sdt'],
  'calc-u5:5.8': ['f-from-fprime', 'fff'], 'calc-u5:5.9': ['fff-panels', 'fff', 'f-from-fprime'], 'calc-u5:5.10': ['optimization-diagram', 'optimization'], 'calc-u5:5.11': ['optimization'], 'calc-u5:5.12': ['implicit-behavior'],
  'calc-u6:6.1': ['accum-velocity'], 'calc-u6:6.2': ['riemann-left', 'riemann-right', 'riemann-mid', 'riemann-trap', 'riemann-table'], 'calc-u6:6.3': ['riemann-converge'], 'calc-u6:6.4': ['ftc-accum'], 'calc-u6:6.5': ['accum-graph'],
  'calc-u6:6.6': ['integral-props'], 'calc-u6:6.7': ['ftc-area'], 'calc-u6:6.8': ['antideriv-family'], 'calc-u6:6.9': ['u-sub'], 'calc-u6:6.10': ['ibp'], 'calc-u6:6.11': ['partial-frac'], 'calc-u6:6.12': ['improper'], 'calc-u6:6.13': ['arctan-int', 'partial-frac'], 'calc-u6:6.14': ['u-sub', 'ibp', 'partial-frac'],
  'calc-u7:7.1': ['exp-model', 'logistic'], 'calc-u7:7.2': ['de-verify'], 'calc-u7:7.3': ['sf-xy', 'sf-xy2', 'sf-logistic', 'sf-x-over-y'], 'calc-u7:7.4': ['sf-xy', 'sf-logistic'], 'calc-u7:7.5': ['euler', 'euler-steps'],
  'calc-u7:7.6': ['separable'], 'calc-u7:7.7': ['separable', 'sf-x-over-y'], 'calc-u7:7.8': ['exp-model'], 'calc-u7:7.9': ['logistic', 'sf-logistic'],
  'calc-u8:8.1': ['avg-value'], 'calc-u8:8.2': ['disp-dist'], 'calc-u8:8.3': ['rate-in-out'], 'calc-u8:8.4': ['area-x'], 'calc-u8:8.5': ['area-y'], 'calc-u8:8.6': ['area-multi'],
  'calc-u8:8.7': ['xsec-square'], 'calc-u8:8.8': ['xsec-tri', 'xsec-semi'], 'calc-u8:8.9': ['disc-x'], 'calc-u8:8.10': ['disc-other'], 'calc-u8:8.11': ['washer-x'], 'calc-u8:8.12': ['washer-other'], 'calc-u8:8.13': ['arc-length'],
  'calc-u9:9.1': ['param-curve'], 'calc-u9:9.2': ['param-concavity'], 'calc-u9:9.3': ['cycloid'], 'calc-u9:9.4': ['vector-motion'], 'calc-u9:9.5': ['vector-integral'], 'calc-u9:9.6': ['vector-motion', 'param-curve'],
  'calc-u9:9.7': ['polar-basic', 'polar-limacon'], 'calc-u9:9.8': ['polar-area'], 'calc-u9:9.9': ['polar-two'],
  'calc-u10:10.1': ['conv-div', 'geo-series'], 'calc-u10:10.2': ['geo-series'], 'calc-u10:10.3': ['nth-term'], 'calc-u10:10.4': ['integral-test'], 'calc-u10:10.5': ['p-series', 'conv-div'], 'calc-u10:10.6': ['comparison'],
  'calc-u10:10.7': ['alt-series'], 'calc-u10:10.8': ['ratio-test'], 'calc-u10:10.9': ['abs-cond'], 'calc-u10:10.10': ['alt-series'], 'calc-u10:10.11': ['taylor-sin', 'taylor-exp'], 'calc-u10:10.12': ['lagrange'],
  'calc-u10:10.13': ['interval-conv'], 'calc-u10:10.14': ['maclaurin-cos', 'taylor-sin'], 'calc-u10:10.15': ['power-geo'],
};
export const FIGURES = F;
const cache = {};
export function buildFigure(id) { if (!cache[id]) { const f = F[id]; if (!f) return null; const s = f.build(); cache[id] = { id, title: f.title, caption: f.caption, svg: s }; } return cache[id]; }
export function figuresFor(chapterId, code) { return (TOPIC_FIGURES[`${chapterId}:${code}`] || []).map(buildFigure).filter(Boolean); }
