/**
 * AP Biology + prerequisite (HS Biology, HS Chemistry) exam figures.
 * Graphs are computed from explicit models/data (Michaelis–Menten, logistic ODE, Lotka–Volterra RK4,
 * Hardy–Weinberg, Punnett enumeration, Wright–Fisher drift, etc.); diagrams encode the textbook structure.
 * FIGURES: id → {title, caption, build}. TOPIC_FIGURES: "chapterId:code" → [figure ids].
 */
import { plot, bars, table, svg, text, frac, line, rect, circle, path, box, arrow, C, PAL, rk4, mulberry, fact, range } from '../math/figlib.js';
import { FIGURE_ZH } from './figure-zh.js';

const MEDIA_BASE = new URL('./media/', import.meta.url);

const { PI, exp, log, sqrt, abs, cos, sin } = Math;
const F = {};
const def = (id, title, caption, build) => { F[id] = { id, title, caption, build }; };
/* Interactive variant: build(values) redraws from the same math; controls declare the sliders/
   buttons. Defaults are the values that reproduce the old static figure exactly. */
const idef = (id, title, caption, build, controls, captionFor) => {
  const defaults = Object.fromEntries(controls.filter((c) => c.key).map((c) => [c.key, c.value]));
  F[id] = { id, title, caption: captionFor ? captionFor(defaults) : caption, build: () => build(defaults), controls, defaults, rebuild: build, captionFor };
};
const setCap = (id, c) => { F[id].caption = c; };
const fmt = (v, d = 3) => String(Math.round(v * 10 ** d) / 10 ** d);
const gauss = (x, m, s) => exp(-((x - m) ** 2) / (2 * s * s));

/* ================= ENZYMES ================= */
// Temperature: Arrhenius rise × fraction native (two-state unfolding, Tm, ΔH)
const arr = (T, Ea = 50e3) => exp((-Ea / 8.314) * (1 / (T + 273.15) - 1 / 310.15));
const native = (T, Tm, dH = 300e3) => 1 / (1 + exp((dH / 8.314) * (1 / (Tm + 273.15) - 1 / (T + 273.15))));
const enzT = (Tm) => (T) => arr(T) * native(T, Tm);
function peakOf(f, a, b) { let bx = a, by = -1; for (let x = a; x <= b; x += 0.05) { const y = f(x); if (y > by) { by = y; bx = x; } } return [bx, by]; }
idef('enz-temp', 'Enzyme activity vs temperature', '', (v) => {
  const h = enzT(v.Tm), t = enzT(v.Tt), [ph, py] = peakOf(h, 0, 100), [tp, ty] = peakOf(t, 0, 100), s = 1 / Math.max(py, ty);
  return plot({ x: [0, 100], y: [0, 1.1], ystep: 0.2, xlabel: 'temperature (°C)', ylabel: 'relative rate', curves: [{ f: (T) => h(T) * s, color: C.a, label: 'human enzyme', labelAt: [12, 0.42] }, { f: (T) => t(T) * s, color: C.b, label: 'thermophile (Taq-like)', labelAt: [58, 1.02] }], vlines: [{ x: ph, label: `opt ${fmt(ph, 0)}°C`, color: C.a }] });
}, [
  { key: 'Tm', label: '人酶变性温度 Tm', min: 35, max: 60, step: 1, value: 45, unit: '°C' },
  { key: 'Tt', label: '嗜热菌 Tm', min: 65, max: 95, step: 1, value: 85, unit: '°C' },
], (v) => {
  const h = enzT(v.Tm), t = enzT(v.Tt), [ph] = peakOf(h, 0, 100), [tp] = peakOf(t, 0, 100);
  return `Rate = Arrhenius factor \\(e^{-E_a/RT}\\) (\\(E_a=50\\) kJ/mol) × fraction folded (two-state unfolding). Human enzyme (\\(T_m=${fmt(v.Tm, 0)}\\)°C) peaks near ${fmt(ph, 0)}°C; thermophile enzyme (\\(T_m=${fmt(v.Tt, 0)}\\)°C) near ${fmt(tp, 0)}°C. Above the optimum, denaturation causes the steep drop.`;
});
idef('enz-ph', 'Enzyme activity vs pH', '', (v) =>
  plot({ x: [0, 14], y: [0, 1.15], ystep: 0.2, xstep: 1, xlabel: 'pH', ylabel: 'relative rate', curves: [{ f: (x) => gauss(x, 2, 0.9), color: C.e, label: 'pepsin', labelAt: [2.3, 1.05] }, { f: (x) => gauss(x, v.pH, v.w), color: C.a, label: 'amylase', labelAt: [Math.max(0.6, v.pH - 1.8), 1.05] }, { f: (x) => gauss(x, 8, 1.0), color: C.c, label: 'trypsin', labelAt: [8.3, 1.05] }] }), [
  { key: 'pH', label: '淀粉酶最适 pH', min: 5, max: 9, step: 1, value: 7 },
  { key: 'w', label: '淀粉酶曲线宽度', min: 0.6, max: 2, step: 0.1, value: 1.1 },
], (v) => `Bell-shaped activity profiles centered on each enzyme's optimum: pepsin (stomach) ≈ pH 2, salivary amylase ≈ pH ${fmt(v.pH, 0)}, trypsin (small intestine) ≈ pH 8. Away from the optimum, altered ionization of R-groups disrupts the active site.`);
const MM = (Vm, Km) => (S) => (Vm * S) / (Km + S);
idef('enz-substrate', 'Reaction rate vs substrate concentration (Michaelis–Menten)', '', (v) =>
  plot({ x: [0, 20], y: [0, Math.max(12, v.Vm * 1.2)], xlabel: '[S] (mM)', ylabel: 'rate v', hlines: [{ y: v.Vm, label: `Vmax = ${fmt(v.Vm, 0)}` }, { y: v.Vm / 2, label: 'Vmax/2' }], vlines: [{ x: v.Km, label: 'Km' }], curves: [{ f: MM(v.Vm, v.Km), color: C.a }] }), [
  { key: 'Km', label: '米氏常数 Km', min: 0.5, max: 8, step: 0.5, value: 2, unit: 'mM' },
  { key: 'Vm', label: '最大速率 Vmax', min: 4, max: 20, step: 1, value: 10 },
], (v) => `\\(v=\\dfrac{V_{max}[S]}{K_m+[S]}\\) with \\(V_{max}=${fmt(v.Vm, 0)}\\), \\(K_m=${fmt(v.Km, 1)}\\). At \\([S]=K_m\\), \\(v=\\dfrac{V_{max}}{2}\\). The plateau means all active sites are saturated: adding substrate no longer raises the rate.`);
idef('enz-inhibition', 'Competitive vs noncompetitive inhibition', '', (v) => {
  const appKm = 2 * (1 + v.i), vmaxN = 10 / (1 + v.i);
  return plot({ x: [0, 40], y: [0, 12], xlabel: '[S] (mM)', ylabel: 'rate v', curves: [{ f: MM(10, 2), color: C.a, label: 'no inhibitor', labelAt: [28, 9.9] }, { f: MM(10, appKm), color: C.b, dash: '6 3', label: 'competitive', labelAt: [28, 7.2] }, { f: MM(vmaxN, 2), color: C.e, dash: '2 3', label: 'noncompetitive', labelAt: [28, 5.4] }] });
}, [
  { key: 'i', label: '抑制剂浓度 [I]/Kᵢ', min: 0, max: 5, step: 0.5, value: 2 },
], (v) => {
  const appKm = 2 * (1 + v.i), vmaxN = 10 / (1 + v.i), n = (x) => fmt(x, 1);
  return `No inhibitor: \\(V_{max}=10,K_m=2\\). Competitive: apparent \\(K_m=2\\left(1+\\dfrac{[I]}{K_i}\\right)=${n(appKm)}\\), same \\(V_{max}\\) (overcome by more substrate). Noncompetitive: \\(V_{max}\\) lowered to \\(\\dfrac{10}{1+[I]/K_i}=${n(vmaxN)}\\), same \\(K_m\\).`;
});
function energyDiagram(o) {
  const W = 480, H = 300, X = (x) => 50 + x * 400, Y = (e) => 260 - e * 2;
  const prof = (Ea) => (x) => o.R * (1 - smooth(x)) + o.P * smooth(x) + Ea * exp(-((x - 0.5) ** 2) / 0.012) * 1;
  const smooth = (x) => 1 / (1 + exp(-(x - 0.5) * 18));
  let s = line(50, 270, 460, 270, { arrow: true }) + line(50, 270, 50, 20, { arrow: true }) + text(255, 290, 'progress of reaction', { size: 11, color: C.muted }) + text(18, 150, 'free energy G', { size: 11, color: C.muted, rotate: -90 });
  const curve = (Ea, col, dash) => { let d = ''; for (let i = 0; i <= 200; i++) { const x = i / 200; d += (i ? 'L' : 'M') + X(x).toFixed(1) + ',' + Y(prof(Ea)(x)).toFixed(1); } return path(d, { stroke: col, w: 2.2, dash }); };
  s += curve(o.Ea, C.a) + (o.Ea2 != null ? curve(o.Ea2, C.c, '6 3') : '');
  const top = peakY(prof(o.Ea)), top2 = o.Ea2 != null ? peakY(prof(o.Ea2)) : 0;
  s += line(X(0.05), Y(o.R), X(0.62), Y(o.R), { color: C.muted, dash: '3 3', w: 1 }) + line(X(0.5) + 30, Y(o.R), X(0.5) + 30, Y(top) + 4, { color: C.a, arrow: true }) + text(X(0.5) + 36, (Y(o.R) + Y(top)) / 2, o.Ea2 != null ? 'Ea (uncatalyzed)' : 'Ea', { anchor: 'start', color: C.a, size: 11 });
  if (o.Ea2 != null) s += line(X(0.5) - 30, Y(o.R), X(0.5) - 30, Y(top2) + 4, { color: C.c, arrow: true }) + text(X(0.5) - 36, (Y(o.R) + Y(top2)) / 2, 'Ea (enzyme)', { anchor: 'end', color: C.c, size: 11 });
  s += line(X(0.92), Y(o.R), X(0.92), Y(o.P) + (o.P < o.R ? -4 : 4), { color: C.b, arrow: true }) + text(X(0.94), (Y(o.R) + Y(o.P)) / 2, `ΔG ${o.P < o.R ? '< 0' : '> 0'}`, { anchor: 'start', color: C.b, size: 11 }) + line(X(0.6), Y(o.P), X(0.98), Y(o.P), { color: C.muted, dash: '3 3', w: 1 });
  s += text(X(0.08), Y(o.R) - 12, 'reactants', { size: 11 }) + text(X(0.86), Y(o.P) - 12, 'products', { size: 11 });
  return svg(W, H, s, o.label);
}
function peakY(f) { let m = -1e9; for (let i = 0; i <= 400; i++) m = Math.max(m, f(i / 400)); return m; }
idef('activation-energy', 'Activation energy with and without enzyme', 'Exergonic reaction (\\(\\Delta G<0\\)). The enzyme lowers \\(E_a\\) by stabilizing the transition state, but does not change \\(\\Delta G\\) or the equilibrium.', (v) =>
  energyDiagram({ R: 70, P: 30, Ea: 70, Ea2: 70 - v.drop, label: 'activation energy diagram' }), [
  { key: 'drop', label: '酶降低的活化能', min: 5, max: 60, step: 5, value: 40, unit: 'kJ/mol' },
], (v) => `Exergonic reaction (\\(\\Delta G<0\\)). The uncatalyzed barrier is \\(E_a=70\\) kJ/mol; the enzyme lowers it by ${fmt(v.drop, 0)} kJ/mol to ${fmt(70 - v.drop, 0)} kJ/mol by stabilizing the transition state, but does not change \\(\\Delta G\\) or the equilibrium.`);
def('exo-endo', 'Exergonic vs endergonic reactions', 'Left: exergonic (products lower in G, \\(\\Delta G<0\\), spontaneous, e.g. ATP hydrolysis \\(\\Delta G\\approx-30.5\\) kJ/mol). Right: endergonic (\\(\\Delta G>0\\), e.g. building glucose); coupled to ATP hydrolysis in cells.', () => {
  const a = energyDiagram({ R: 70, P: 25, Ea: 55, label: 'exergonic' }), b = energyDiagram({ R: 25, P: 70, Ea: 60, label: 'endergonic' });
  const inner = (s) => s.replace(/^<svg[^>]*>/, '').replace(/<\/svg>$/, '').replace(/<defs>[\s\S]*?<\/defs>/, '');
  return svg(960, 300, `<g>${inner(a)}</g><g transform="translate(480,0)">${inner(b)}</g>`, 'exergonic vs endergonic');
});
def('induced-fit', 'Enzyme–substrate induced fit', 'Substrate binds the active site; the enzyme changes shape slightly (induced fit) to strain bonds, products are released, and the enzyme is unchanged and reusable. A competitive inhibitor occupies the active site; a noncompetitive (allosteric) inhibitor binds elsewhere and changes the site\'s shape.', () => {
  let s = '';
  const enz = (x, closed) => path(`M${x},190 L${x},110 L${x + 30},110 ${closed ? `Q${x + 60},${150} ${x + 90},110` : `L${x + 40},140 L${x + 80},140 L${x + 90},110`} L${x + 120},110 L${x + 120},190 Z`, { fill: C.a, op: 0.2, stroke: C.a, w: 2 });
  s += enz(20, false) + path('M60,80 L100,80 L90,108 L70,108 Z', { fill: C.b, op: 0.5, stroke: C.b }) + text(80, 66, 'substrate', { size: 11 }) + text(80, 208, 'enzyme', { size: 11 });
  s += arrow(150, 150, 185, 150) + enz(195, true) + path('M235,112 L275,112 L270,138 L240,138 Z', { fill: C.b, op: 0.5, stroke: C.b }) + text(255, 208, 'ES complex', { size: 11 });
  s += arrow(325, 150, 360, 150) + enz(370, false) + path('M380,70 L405,70 L400,92 L385,92 Z', { fill: C.c, op: 0.5, stroke: C.c }) + path('M440,70 L465,70 L460,92 L445,92 Z', { fill: C.c, op: 0.5, stroke: C.c }) + text(430, 58, 'products', { size: 11 }) + text(430, 208, 'enzyme reused', { size: 11 });
  return svg(520, 230, s, 'induced fit');
});

/* ================= WATER / CHEMISTRY PREREQS ================= */
def('water-hbond', 'Water polarity and hydrogen bonding', 'Each O–H bond is polar (O δ−, H δ+; bond angle 104.5°). Hydrogen bonds (dashed) between neighbouring molecules give cohesion, high specific heat and surface tension.', () => {
  let s = ''; const mol = (x, y, rot) => { const a = (104.5 / 2) * PI / 180, r = 34; const h1 = [x + r * sin(rot + a), y + r * cos(rot + a)], h2 = [x + r * sin(rot - a), y + r * cos(rot - a)]; return { s: line(x, y, ...h1, { w: 3 }) + line(x, y, ...h2, { w: 3 }) + circle(x, y, 16, { fill: C.e, op: 0.35, stroke: C.e }) + circle(...h1, 10, { fill: C.muted, op: 0.35, stroke: C.muted }) + circle(...h2, 10, { fill: C.muted, op: 0.35, stroke: C.muted }) + text(x, y, 'O', { bold: true }) + text(h1[0], h1[1], 'H', { size: 10 }) + text(h2[0], h2[1], 'H', { size: 10 }) + text(x - 22, y - 18, 'δ−', { size: 10, color: C.ink }), h: [h1, h2] }; };
  const m1 = mol(200, 130, 0); s += m1.s;
  const others = [[110, 230, 2.4], [300, 230, -2.4], [90, 50, 1.0], [320, 60, -1.2]];
  for (const [x, y, r] of others) { const m = mol(x, y, r); s += m.s; }
  s += line(m1.h[0][0], m1.h[0][1], 110, 230 - 16, { color: C.a, dash: '4 3', w: 1.6 }) + line(m1.h[1][0], m1.h[1][1], 300, 230 - 16, { color: C.a, dash: '4 3', w: 1.6 }) + text(200, 270, 'hydrogen bonds (dashed)', { size: 11, color: C.a });
  return svg(400, 290, s, 'water hydrogen bonding');
});
def('water-density', 'Density of water vs temperature', '', () => {
  const rho = (T) => 1000 * (1 - ((T + 288.9414) / (508929.2 * (T + 68.12963))) * (T - 3.9863) ** 2); // Tanaka-type empirical fit
  setCap('water-density', `Liquid water is densest at ≈4 °C (\\(\\rho_{max}\\approx${fmt(rho(3.98), 3)}\\) kg/m³, empirical fit). Ice (917 kg/m³) is less dense, so it floats and insulates lakes — organisms survive beneath.`);
  return plot({ x: [0, 30], y: [995, 1000.2], ystep: 1, xlabel: 'temperature (°C)', ylabel: 'density (kg/m³)', padL: 56, curves: [{ f: rho, color: C.a }], points: [{ x: 3.98, y: rho(3.98), color: C.b, label: 'max ≈ 4 °C' }] });
});
def('specific-heat', 'Specific heat of water vs other substances', 'Specific heat (J/(g·°C)): water 4.18, ethanol 2.44, ice 2.09, aluminium 0.90, iron 0.45. Hydrogen bonds make water resist temperature change (stable habitats, body temperature).', () =>
  bars({ bars: [['water', 4.18], ['ethanol', 2.44], ['ice', 2.09], ['Al', 0.9], ['Fe', 0.45]].map(([l, v], i) => ({ label: l, v, color: PAL[i] })), showV: true, ylabel: 'J/(g·°C)', max: 5 }));
def('body-elements', 'Elements of life: human body composition by mass', 'O 65%, C 18.5%, H 9.5%, N 3.2%, Ca 1.5%, P 1.0%, others ≈1.3%. C, H, O, N, P, S build all four macromolecule classes (N in proteins & nucleic acids, P in nucleic acids & phospholipids, S in some amino acids).', () =>
  bars({ bars: [['O', 65], ['C', 18.5], ['H', 9.5], ['N', 3.2], ['Ca', 1.5], ['P', 1.0], ['other', 1.3]].map(([l, v], i) => ({ label: l, v, color: PAL[i % 6] })), showV: true, ylabel: '% of body mass', max: 75 }));
def('bohr-carbon', 'Atomic structure: carbon-12 (Bohr model)', 'Carbon: 6 protons, 6 neutrons (¹²C), electrons 2 in shell 1 and 4 in shell 2 (4 valence electrons → 4 covalent bonds).', () => {
  let s = circle(150, 140, 28, { fill: C.b, op: 0.25, stroke: C.b }) + text(150, 133, '6 p⁺', { size: 11 }) + text(150, 149, '6 n', { size: 11 }) + circle(150, 140, 60, { stroke: C.muted }) + circle(150, 140, 100, { stroke: C.muted });
  [0, PI].forEach((a) => { s += circle(150 + 60 * cos(a), 140 + 60 * sin(a), 6, { fill: C.a, stroke: C.a }); });
  [PI / 4, 3 * PI / 4, 5 * PI / 4, 7 * PI / 4].forEach((a) => { s += circle(150 + 100 * cos(a), 140 + 100 * sin(a), 6, { fill: C.a, stroke: C.a }); });
  s += text(330, 80, 'shell 1: 2 e⁻', { anchor: 'start' }) + text(330, 110, 'shell 2: 4 e⁻ (valence)', { anchor: 'start' }) + text(330, 140, 'mass number 12', { anchor: 'start' }) + text(330, 170, 'atomic number 6', { anchor: 'start' });
  return svg(500, 280, s, 'Bohr model carbon');
});
def('isotopes', 'Isotopes of carbon (natural abundance)', '¹²C 98.93%, ¹³C 1.07%, ¹⁴C ≈1×10⁻¹⁰ % (radioactive, half-life 5730 y). Average atomic mass \\(=0.9893(12)+0.0107(13.00335)\\approx12.011\\).', () =>
  bars({ bars: [['¹²C', 98.93], ['¹³C', 1.07], ['¹⁴C', 1e-10]].map(([l, v], i) => ({ label: l, v, color: PAL[i] })), showV: true, ylabel: '% abundance', max: 110 }));
idef('c14-decay', 'Radioactive decay of ¹⁴C', '', (v) =>
  plot({ x: [0, 30000], y: [0, 105], xstep: v.hl, xfmt: (x) => String(Math.round(x)), xlabel: 'years', ylabel: '% ¹⁴C remaining', curves: [{ f: (t) => 100 * 0.5 ** (t / v.hl), color: C.a }], points: [0, 1, 2, 3, 4, 5].map((k) => ({ x: v.hl * k, y: 100 / 2 ** k, r: 3, label: k ? `${fmt(100 / 2 ** k, 2)}%` : '' })) }), [
  { key: 'hl', label: '半衰期', min: 2000, max: 10000, step: 100, value: 5730, unit: '年' },
], (v) => `\\(N(t)=N_0\\left(\\dfrac12\\right)^{t/${fmt(v.hl, 0)}}\\): after 1 half-life 50%, 2 → 25%, 3 → 12.5%. Used to date fossils up to ~50,000 years.`);
const RADIUS = [53, 31, 167, 112, 87, 67, 56, 48, 42, 38, 190, 145, 118, 111, 98, 88, 79, 71, 243, 194]; // calculated atomic radii (pm), Clementi et al.
def('periodic-radius', 'Periodic trend: atomic radius vs atomic number', 'Calculated atomic radii (pm, Clementi 1967) for Z = 1–20: radius decreases across a period (greater nuclear charge) and jumps at each alkali metal (new shell).', () =>
  plot({ x: [0, 21], y: [0, 260], xstep: 1, xlabel: 'atomic number Z', ylabel: 'radius (pm)', curves: [{ pts: RADIUS.map((r, i) => [i + 1, r]), color: C.a }], points: RADIUS.map((r, i) => ({ x: i + 1, y: r, r: 3, color: [3, 11, 19].includes(i + 1) ? C.e : C.a, label: [3, 11, 19].includes(i + 1) ? ['Li', 'Na', 'K'][[3, 11, 19].indexOf(i + 1)] : '' })) }));
const EN = [['Li', 0.98], ['Be', 1.57], ['B', 2.04], ['C', 2.55], ['N', 3.04], ['O', 3.44], ['F', 3.98]];
def('electronegativity', 'Electronegativity across period 2', 'Pauling electronegativity rises across period 2 (Li 0.98 → F 3.98). Bonds with ΔEN > ~1.7 are mainly ionic; 0.4–1.7 polar covalent (O–H: 3.44 − 2.20 = 1.24); < 0.4 nonpolar (C–H: 0.35).', () =>
  bars({ bars: EN.map(([l, v], i) => ({ label: l, v, color: PAL[i % 6] })), showV: true, ylabel: 'Pauling EN', max: 4.5 }));
def('bond-types', 'Ionic vs covalent bonding', 'Na (1 valence e⁻) transfers an electron to Cl (7) → Na⁺ and Cl⁻ held by electrostatic attraction (ionic). In H₂O, O shares electron pairs with two H atoms (polar covalent).', () => {
  let s = circle(70, 90, 30, { fill: C.b, op: 0.2, stroke: C.b }) + text(70, 90, 'Na', { bold: true }) + circle(180, 90, 38, { fill: C.c, op: 0.2, stroke: C.c }) + text(180, 90, 'Cl', { bold: true }) + circle(100, 70, 5, { fill: C.a, stroke: C.a }) + path('M104,66 Q130,40 150,62', { stroke: C.a, arrow: true }) + text(125, 30, 'e⁻ transfer', { size: 11, color: C.a });
  s += text(125, 150, 'Na⁺  Cl⁻ (ionic)', { size: 12 });
  s += circle(340, 90, 30, { fill: C.e, op: 0.2, stroke: C.e }) + text(340, 90, 'O', { bold: true }) + circle(300, 130, 18, { fill: C.muted, op: 0.25, stroke: C.muted }) + text(300, 130, 'H') + circle(380, 130, 18, { fill: C.muted, op: 0.25, stroke: C.muted }) + text(380, 130, 'H');
  s += circle(318, 112, 3.5, { fill: C.a, stroke: C.a }) + circle(324, 117, 3.5, { fill: C.a, stroke: C.a }) + circle(362, 112, 3.5, { fill: C.a, stroke: C.a }) + circle(356, 117, 3.5, { fill: C.a, stroke: C.a }) + text(340, 170, 'shared pairs (covalent)', { size: 12 });
  return svg(460, 190, s, 'ionic vs covalent');
});
def('vsepr', 'Molecular geometry (VSEPR)', 'CH₄ tetrahedral 109.5° (0 lone pairs); NH₃ trigonal pyramidal ≈107° (1 lone pair); H₂O bent ≈104.5° (2 lone pairs). Lone pairs compress bond angles; H₂O\'s bent shape makes it polar.', () => {
  let s = ''; const mol = (cx, nm, ang, lp, label) => { const a = (ang / 2) * PI / 180, r = 50; let t = circle(cx, 120, 18, { fill: C.e, op: 0.2, stroke: C.e }) + text(cx, 120, nm, { bold: true });
    for (const sg of [-1, 1]) { const x = cx + r * sin(sg * a), y = 120 + r * cos(a); t += line(cx, 120, x, y, { w: 2.4 }) + circle(x, y, 10, { fill: C.muted, op: 0.25, stroke: C.muted }) + text(x, y, 'H', { size: 10 }); }
    for (let i = 0; i < lp; i++) t += `<ellipse cx="${cx + (lp === 2 ? (i ? 16 : -16) : 0)}" cy="${92}" rx="7" ry="12" fill="${C.a}" fill-opacity="0.3" stroke="${C.a}"/>`;
    t += path(`M${cx + 25 * sin(-a)},${120 + 25 * cos(a)} A25 25 0 0 0 ${cx + 25 * sin(a)},${120 + 25 * cos(a)}`, { stroke: C.b }) + text(cx, 196, `${ang}°`, { color: C.b }) + text(cx, 220, label, { size: 11, color: C.muted }); return t; };
  s += mol(80, 'C', 109.5, 0, 'CH₄ tetrahedral') + mol(240, 'N', 107, 1, 'NH₃ pyramidal') + mol(400, 'O', 104.5, 2, 'H₂O bent');
  return svg(480, 235, s, 'VSEPR');
});
def('stoich', 'Stoichiometry: mole ratios', '\\(2\\,\\mathrm{H_2}+\\mathrm{O_2}\\to2\\,\\mathrm{H_2O}\\). Starting with 4 mol H₂ and 3 mol O₂: H₂ is limiting (needs only 2 mol O₂), producing 4 mol H₂O with 1 mol O₂ left over.', () =>
  bars({ bars: [['H₂ start', 4, C.a], ['O₂ start', 3, C.b], ['H₂ end', 0, C.a], ['O₂ end', 1, C.b], ['H₂O end', 4, C.c]].map(([l, v, c]) => ({ label: l, v, color: c })), showV: true, ylabel: 'moles', max: 5 }));
const SOL = { KNO3: [[0, 13.3], [10, 20.9], [20, 31.6], [30, 45.8], [40, 63.9], [50, 85.5], [60, 110], [70, 138], [80, 169], [90, 202], [100, 246]], NaCl: [[0, 35.7], [20, 35.9], [40, 36.4], [60, 37.1], [80, 38.0], [100, 39.2]], KCl: [[0, 28.0], [20, 34.2], [40, 40.1], [60, 45.8], [80, 51.3], [100, 56.3]] };
def('solubility', 'Solubility curves', 'Tabulated solubility (g solute per 100 g water): KNO₃ rises steeply (31.6 g at 20 °C → 246 g at 100 °C), NaCl barely changes (35.9 → 39.2 g). Points above a curve are supersaturated.', () =>
  plot({ x: [0, 100], y: [0, 260], xlabel: 'temperature (°C)', ylabel: 'g / 100 g H₂O', curves: Object.entries(SOL).map(([k, pts], i) => ({ pts, color: PAL[i], label: k.replace('3', '₃'), labelAt: [pts[pts.length - 2][0] - 6, pts[pts.length - 2][1] + 14] })), points: Object.values(SOL).flatMap((pts, i) => pts.map(([x, y]) => ({ x, y, r: 2.5, color: PAL[i] }))) }));
def('ph-scale', 'The pH scale', '\\(\\mathrm{pH}=-\\log[\\mathrm{H^+}]\\): each unit is a 10× change. Stomach acid ≈1.5, lemon ≈2.3, coffee ≈5, pure water 7, blood 7.4, seawater ≈8.1, ammonia ≈11.6, bleach ≈12.5.', () => {
  const W = 520, H = 150, X = (p) => 30 + p * 33; let s = '';
  for (let p = 0; p < 14; p++) { const t = p / 13, col = `hsl(${t * 260},70%,55%)`; s += rect(X(p), 50, 33, 30, { fill: col, op: 0.85, stroke: 'none' }); }
  for (let p = 0; p <= 14; p++) s += text(X(p), 92, String(p), { size: 10 });
  [['stomach', 1.5, 0], ['lemon', 2.3, 0], ['coffee', 5, 0], ['water', 7, -14], ['blood', 7.4, 0], ['seawater', 8.1, 16], ['ammonia', 11.6, 0], ['bleach', 12.5, 0]].forEach(([n, p, dx], i) => { const y = i % 2 ? 125 : 30; const lx = X(p) + dx; s += line(X(p), i % 2 ? 80 : 50, lx, y + (i % 2 ? -8 : 8), { color: C.muted, w: 1 }) + text(lx, y, `${n} ${p}`, { size: 10 }); });
  s += text(X(2), 140, '← acidic  [H⁺] > 10⁻⁷ M', { size: 10, color: C.e }) + text(X(12), 140, 'basic →', { size: 10, color: C.a });
  return svg(W, H, s, 'pH scale');
});
idef('titration', 'Titration curve: strong acid with strong base', '', (v) => {
  const Ca = 0.1, Va = v.Va, Cb = 0.1, pH = (Vb) => { const nA = Ca * Va, nB = Cb * Vb, Vt = Va + Vb; const ex = (nA - nB) / Vt; const h = ex / 2 + sqrt(ex * ex / 4 + 1e-14); return -Math.log10(h); };
  return plot({ x: [0, 2 * Va], y: [0, 14], ystep: 2, xlabel: 'volume NaOH added (mL)', ylabel: 'pH', curves: [{ f: pH, n: 1000, color: C.a }], points: [{ x: Va, y: 7, color: C.b, label: 'equivalence point' }] });
}, [
  { key: 'Va', label: 'HCl 体积', min: 10, max: 40, step: 1, value: 25, unit: 'mL' },
], (v) => {
  const Ca = 0.1, Va = v.Va, pH = (Vb) => { const nA = Ca * Va, nB = 0.1 * Vb, Vt = Va + Vb; const ex = (nA - nB) / Vt; const h = ex / 2 + sqrt(ex * ex / 4 + 1e-14); return -Math.log10(h); };
  return `${fmt(Va, 1)} mL of 0.100 M HCl titrated with 0.100 M NaOH, pH computed exactly from charge balance (including \\(K_w=10^{-14}\\)). Initial pH ${fmt(pH(0), 2)}; equivalence at ${fmt(Va, 1)} mL, pH 7.00; at ${fmt(Va + 5, 0)} mL, pH ${fmt(pH(Va + 5), 2)}.`;
});
def('functional-groups', 'Functional groups in biological molecules', 'Hydroxyl –OH (alcohols, sugars; polar), carbonyl C=O (aldehydes/ketones; sugars), carboxyl –COOH (acidic; amino acids, fatty acids), amino –NH₂ (basic; amino acids), phosphate –OPO₃²⁻ (ATP, nucleic acids), sulfhydryl –SH (cysteine disulfide bridges), methyl –CH₃ (DNA methylation; nonpolar).', () => {
  const G = [['hydroxyl', '–OH', 'polar; sugars, alcohols'], ['carbonyl', '>C=O', 'sugars (aldose/ketose)'], ['carboxyl', '–COOH', 'acidic; amino & fatty acids'], ['amino', '–NH₂', 'basic; amino acids'], ['phosphate', '–OPO₃²⁻', 'ATP, DNA backbone'], ['sulfhydryl', '–SH', 'disulfide bridges'], ['methyl', '–CH₃', 'nonpolar; gene regulation']];
  let s = ''; G.forEach(([n, f, u], i) => { const y = 20 + i * 34; s += rect(10, y, 480, 30, { fill: PAL[i % 6], op: 0.1, stroke: PAL[i % 6], rx: 4 }) + text(20, y + 15, n, { anchor: 'start', bold: true }) + text(170, y + 15, f, { anchor: 'start', size: 13 }) + text(270, y + 15, u, { anchor: 'start', size: 11 }); });
  return svg(500, 265, s, 'functional groups');
});
idef('rate-equilibrium', 'Reaction rate and equilibrium', '', (v) => {
  const k = v.kf + v.kr, Aeq = v.kr / k, A = (t) => Aeq + (1 - Aeq) * exp(-k * t);
  return plot({ x: [0, 15], y: [0, 1.1], ystep: 0.25, xlabel: 'time (s)', ylabel: 'concentration (M)', hlines: [{ y: 1 - Aeq }, { y: Aeq }], curves: [{ f: A, color: C.a, label: '[A]', labelAt: [12, 0.33] }, { f: (t) => 1 - A(t), color: C.b, label: '[B]', labelAt: [12, 0.83] }] });
}, [
  { key: 'kf', label: '正反应速率常数 kf', min: 0.1, max: 0.8, step: 0.05, value: 0.3, unit: 's⁻¹' },
  { key: 'kr', label: '逆反应速率常数 kr', min: 0.05, max: 0.5, step: 0.05, value: 0.1, unit: 's⁻¹' },
], (v) => {
  const K = v.kf / v.kr, Aeq = v.kr / (v.kf + v.kr);
  return `A ⇌ B with \\(k_f=${fmt(v.kf, 2)}\\), \\(k_r=${fmt(v.kr, 2)}\\) s⁻¹ (exact solution): [A] falls and [B] rises until forward and reverse rates are equal; \\(K=\\dfrac{[B]_{eq}}{[A]_{eq}}=\\dfrac{k_f}{k_r}=${fmt(K, 2)}\\), so \\([A]_{eq}=${fmt(Aeq, 2)}\\), \\([B]_{eq}=${fmt(1 - Aeq, 2)}\\) M.`;
});

/* ================= CELLS & MEMBRANES ================= */
function membrane(y0, y1, x0 = 20, x1 = 500) { let s = ''; for (let x = x0; x <= x1; x += 14) { s += circle(x, y0, 5, { fill: C.d, op: 0.6, stroke: C.d, w: 0.8 }) + circle(x, y1, 5, { fill: C.d, op: 0.6, stroke: C.d, w: 0.8 }) + line(x - 2, y0 + 5, x - 2, (y0 + y1) / 2 - 2, { color: C.d, w: 0.8 }) + line(x + 2, y0 + 5, x + 2, (y0 + y1) / 2 - 2, { color: C.d, w: 0.8 }) + line(x - 2, y1 - 5, x - 2, (y0 + y1) / 2 + 2, { color: C.d, w: 0.8 }) + line(x + 2, y1 - 5, x + 2, (y0 + y1) / 2 + 2, { color: C.d, w: 0.8 }); } return s; }
def('fluid-mosaic', 'Fluid mosaic model of the plasma membrane', 'Phospholipid bilayer (hydrophilic phosphate heads outward, hydrophobic fatty-acid tails inward) with integral and peripheral proteins, cholesterol (fluidity buffer) and glycoproteins/glycolipids (cell recognition) on the extracellular face.', () => {
  let s = membrane(90, 150) + text(260, 20, 'extracellular fluid', { size: 11, color: C.muted }) + text(260, 225, 'cytoplasm', { size: 11, color: C.muted });
  s += rect(150, 70, 50, 100, { rx: 18, fill: C.a, op: 0.35, stroke: C.a }) + text(175, 190, 'integral protein', { size: 10 });
  s += rect(320, 75, 36, 90, { rx: 8, fill: C.c, op: 0.35, stroke: C.c }) + rect(332, 75, 12, 90, { fill: 'var(--bg-elev,#fff)', stroke: 'none' }) + text(338, 190, 'channel protein', { size: 10 });
  s += `<ellipse cx="420" cy="160" rx="30" ry="12" fill="${C.b}" fill-opacity="0.35" stroke="${C.b}"/>` + text(420, 190, 'peripheral protein', { size: 10 });
  s += path('M175,70 L175,50 L165,40 M175,50 L185,38 M175,50 L175,34', { stroke: C.f, w: 2 }) + text(210, 36, 'glycoprotein', { size: 10, anchor: 'start' });
  s += rect(262, 100, 8, 20, { fill: C.e, op: 0.6, stroke: C.e }) + text(266, 60, 'cholesterol', { size: 10 }) + line(266, 66, 266, 98, { color: C.muted, w: 1 });
  return svg(520, 235, s, 'fluid mosaic model');
});
function transportPanel(x, title, kind) {
  let s = text(x + 60, 16, title, { size: 11, bold: true });
  const hi = kind === 'active' ? 'low' : 'high';
  s += text(x + 60, 34, `outside: ${kind === 'active' ? 'high' : hi === 'high' ? 'high' : 'low'} [solute]`, { size: 9, color: C.muted });
  for (let i = 0; i < 9; i++) for (const side of [0, 1]) { const n = kind === 'active' ? (side ? 2 : 7) : side ? 2 : 8; if (i < n) s += circle(x + 12 + (i % 5) * 22, side ? 190 + Math.floor(i / 5) * 16 : 48 + Math.floor(i / 5) * 16, 4.5, { fill: kind === 'osmosis' ? C.a : C.b, stroke: 'none' }); }
  void hi;
  let mem = ''; for (let xx = x; xx <= x + 120; xx += 12) mem += circle(xx, 100, 4, { fill: C.d, op: 0.6, stroke: 'none' }) + circle(xx, 150, 4, { fill: C.d, op: 0.6, stroke: 'none' }) + line(xx, 104, xx, 146, { color: C.d, w: 0.7 });
  s += mem;
  if (kind === 'simple') s += arrow(x + 60, 70, x + 60, 180, { color: C.c, w: 2 }) + text(x + 60, 240, 'no protein, no ATP', { size: 9 });
  if (kind === 'channel') s += rect(x + 44, 92, 32, 66, { rx: 6, fill: C.a, op: 0.25, stroke: C.a }) + rect(x + 54, 92, 12, 66, { fill: 'var(--bg-elev,#fff)', stroke: 'none' }) + arrow(x + 60, 70, x + 60, 180, { color: C.c, w: 2 }) + text(x + 60, 240, 'channel; no ATP', { size: 9 });
  if (kind === 'carrier') s += path(`M${x + 38},92 L${x + 50},92 L${x + 60},110 L${x + 70},92 L${x + 82},92 L${x + 82},158 L${x + 38},158 Z`, { fill: C.a, op: 0.25, stroke: C.a }) + arrow(x + 100, 70, x + 100, 180, { color: C.c, w: 2 }) + text(x + 60, 240, 'carrier changes shape', { size: 9 });
  if (kind === 'active') s += rect(x + 40, 92, 40, 66, { rx: 8, fill: C.e, op: 0.25, stroke: C.e }) + arrow(x + 60, 180, x + 60, 70, { color: C.e, w: 2 }) + text(x + 92, 172, 'ATP→ADP', { size: 9, color: C.e, anchor: 'start' }) + text(x + 60, 240, 'pump; uses ATP; against gradient', { size: 9 });
  if (kind === 'osmosis') s += rect(x + 44, 92, 32, 66, { rx: 6, fill: C.a, op: 0.25, stroke: C.a }) + text(x + 60, 125, 'AQP', { size: 9 }) + arrow(x + 60, 180, x + 60, 70, { color: C.a, w: 2 }) + text(x + 60, 240, 'water → higher [solute]', { size: 9 });
  return s;
}
def('transport-types', 'Membrane transport types', 'Passive (down the gradient, no ATP): simple diffusion through the bilayer (O₂, CO₂), facilitated diffusion via channel (ions) or carrier (glucose GLUT), osmosis of water via aquaporins. Active transport (pump, e.g. Na⁺/K⁺-ATPase) moves solute against its gradient using ATP.', () => {
  let s = ''; [['simple diffusion', 'simple'], ['channel', 'channel'], ['carrier', 'carrier'], ['osmosis', 'osmosis'], ['active transport', 'active']].forEach(([t, k], i) => { s += transportPanel(10 + i * 150, t, k); });
  return svg(760, 255, s, 'membrane transport types');
});
idef('diffusion-rate', 'Simple vs facilitated diffusion rate', '', (v) => {
  const ymax = Math.max(10, v.Jm * 1.2);
  return plot({ x: [0, 20], y: [0, ymax], xlabel: 'concentration gradient ΔC', ylabel: 'rate of transport', curves: [{ f: (c) => 0.45 * c, color: C.a, label: 'simple diffusion', labelAt: [12, 6.6] }, { f: (c) => (v.Jm * c) / (v.K + c), color: C.b, label: 'facilitated (saturates)', labelAt: [11, Math.min(ymax - 0.6, v.Jm)] }], hlines: [{ y: v.Jm, label: 'all carriers busy' }] });
}, [
  { key: 'Jm', label: '最大转运速率 Jmax', min: 4, max: 14, step: 1, value: 8 },
  { key: 'K', label: '半饱和常数 K', min: 1, max: 8, step: 0.5, value: 3 },
], (v) => `Simple diffusion rate is proportional to the concentration gradient (Fick: \\(J=P\\,\\Delta C\\)); facilitated diffusion saturates (\\(J=\\dfrac{J_{max}\\Delta C}{K+\\Delta C}\\), \\(J_{max}=${fmt(v.Jm, 0)}\\), \\(K=${fmt(v.K, 1)}\\)) because transporters are limited in number.`);
def('tonicity', 'Tonicity: animal and plant cells', 'Hypotonic solution: water enters (animal cell lyses; plant cell turgid — preferred). Isotonic: no net movement (ideal for animal cells; plant cell flaccid). Hypertonic: water leaves (animal cell crenates; plant cell plasmolyzes).', () => {
  let s = ''; const cols = ['hypotonic', 'isotonic', 'hypertonic'];
  cols.forEach((c, i) => { const x = 90 + i * 170; s += text(x, 18, c, { bold: true });
    const r = [52, 40, 28][i]; s += circle(x, 80, r, { fill: C.e, op: 0.2, stroke: C.e, dash: i === 0 ? '3 2' : '' }) + text(x, 80, ['lysed', 'normal', 'shriveled'][i], { size: 10 });
    for (const a of [0, PI / 2, PI, 1.5 * PI]) { const [o, n] = i === 0 ? [r + 20, r + 4] : i === 2 ? [r + 4, r + 20] : [r + 12, r + 12]; if (i !== 1) s += arrow(x + o * cos(a), 80 + o * sin(a), x + n * cos(a), 80 + n * sin(a), { color: C.a, w: 1.5 }); }
    s += rect(x - 50, 150, 100, 70, { rx: 4, stroke: C.c, w: 2.5 }) + rect(x - 50 + [3, 6, 20][i], 150 + [3, 6, 14][i], 100 - 2 * [3, 6, 20][i], 70 - 2 * [3, 6, 14][i], { rx: 8, fill: C.c, op: 0.2, stroke: C.c }) + text(x, 236, ['turgid', 'flaccid', 'plasmolyzed'][i], { size: 10 }); });
  return svg(520, 250, s, 'tonicity');
});
idef('water-potential', 'Water potential Ψ = Ψs + Ψp', '', (v) => {
  const Ms = [0, 0.2, 0.4, 0.6, 0.8, 1.0], R = 0.0831, T = 273 + v.Tc;
  return plot({ x: [0, 1.05], y: [-52, 2], xstep: 0.2, ystep: 10, xlabel: 'molar concentration (M)', ylabel: 'Ψs (bar)', curves: [{ f: (c) => -1 * c * R * T, color: C.a, label: 'sucrose (i = 1)', labelAt: [0.62, -12] }, { f: (c) => -2 * c * R * T, color: C.b, label: 'NaCl (i ≈ 2)', labelAt: [0.55, -36] }], points: Ms.flatMap((c) => [{ x: c, y: -c * R * T, color: C.a, r: 3 }, { x: c, y: -2 * c * R * T, color: C.b, r: 3 }]) });
}, [
  { key: 'Tc', label: '温度', min: 5, max: 35, step: 1, value: 22, unit: '°C' },
], (v) => {
  const T = 273 + v.Tc, psi = -(0.2) * 0.0831 * T;
  return `Solute potential \\(\\Psi_s=-iCRT\\). For 0.2 M sucrose (\\(i=1\\)) at ${fmt(v.Tc, 0)} °C: \\(\\Psi_s=-(1)(0.2)(0.0831)(${fmt(T, 2)})\\approx${fmt(psi, 1)}\\) bar. Water moves from higher Ψ to lower Ψ. Bars computed for 0–1.0 M sucrose and NaCl (\\(i\\approx2\\)).`;
});
def('osmosis-potato', 'Osmosis lab: % mass change vs sucrose molarity', '', () => {
  const M = [0, 0.2, 0.4, 0.6, 0.8, 1.0], pct = [21.5, 8.3, -3.2, -12.6, -19.8, -24.1]; // representative class data
  const n = M.length, mx = M.reduce((a, b) => a + b) / n, my = pct.reduce((a, b) => a + b) / n, b = M.reduce((s, x, i) => s + (x - mx) * (pct[i] - my), 0) / M.reduce((s, x) => s + (x - mx) ** 2, 0), a = my - b * mx, x0 = -a / b;
  const psi = -x0 * 0.0831 * 295;
  setCap('osmosis-potato', `Representative potato-core data (% change in mass after 24 h). Least-squares line \\(y=${fmt(a, 2)}${fmt(b, 2)}x\\) crosses 0 at ${fmt(x0, 3)} M — the isotonic point — so tissue \\(\\Psi\\approx-iCRT=${fmt(psi, 2)}\\) bar.`);
  return plot({ x: [0, 1.05], y: [-30, 30], xstep: 0.2, ystep: 10, xlabel: 'sucrose (M)', ylabel: '% change in mass', curves: [{ f: (x) => a + b * x, color: C.b, dash: '6 3' }], points: [...M.map((x, i) => ({ x, y: pct[i], color: C.a })), { x: x0, y: 0, color: C.e, label: `isotonic ≈ ${fmt(x0, 2)} M` }] });
});
def('sa-volume', 'Cell size: surface-area-to-volume ratio', 'For a cube of side s: \\(\\dfrac{SA}{V}=\\dfrac{6s^2}{s^3}=\\dfrac{6}{s}\\). Side 1 → 6.0, 2 → 3.0, 3 → 2.0, 4 → 1.5, 5 → 1.2, 6 → 1.0. Smaller cells exchange materials more efficiently per unit volume.', () =>
  bars({ bars: [1, 2, 3, 4, 5, 6].map((s, i) => ({ label: `s = ${s}`, v: 6 / s, color: PAL[i % 6] })), showV: true, ylabel: 'SA : V', xlabel: 'cube side length', max: 7 }));
def('cell-structure', 'Eukaryotic cells: animal vs plant', 'Shared: nucleus, ER, Golgi, mitochondria, ribosomes, plasma membrane. Plant only: cell wall (cellulose), chloroplasts, large central vacuole. Animal only: centrioles, lysosomes (common).', () => {
  let s = text(120, 16, 'animal cell', { bold: true }) + text(380, 16, 'plant cell', { bold: true });
  s += `<ellipse cx="120" cy="140" rx="105" ry="100" fill="${C.e}" fill-opacity="0.06" stroke="${C.e}" stroke-width="2"/>`;
  const org = (cx, cy) => circle(cx, cy, 26, { fill: C.f, op: 0.25, stroke: C.f }) + circle(cx, cy, 8, { fill: C.f, op: 0.5, stroke: C.f }) + `<ellipse cx="${cx + 50}" cy="${cy + 40}" rx="20" ry="9" fill="${C.b}" fill-opacity="0.3" stroke="${C.b}"/>` + path(`M${cx - 60},${cy + 20} q10,-12 20,0 t20,0 t20,0`, { stroke: C.a, w: 1.8 }) + path(`M${cx + 30},${cy - 40} q8,-6 16,0 M${cx + 28},${cy - 34} q10,-6 20,0 M${cx + 30},${cy - 28} q8,-6 16,0`, { stroke: C.d, w: 2 });
  s += org(110, 130) + circle(150, 200, 9, { fill: C.muted, op: 0.35, stroke: C.muted }) + text(150, 220, 'lysosome', { size: 9 });
  s += rect(270, 35, 220, 210, { rx: 6, fill: C.c, op: 0.08, stroke: C.c, w: 4 }) + rect(285, 50, 190, 180, { rx: 6, stroke: C.c }) + rect(330, 70, 120, 90, { rx: 20, fill: C.a, op: 0.12, stroke: C.a }) + text(390, 115, 'central vacuole', { size: 10 });
  s += org(330, 190) + [[300, 80], [460, 200], [300, 150]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="14" ry="8" fill="${C.c}" fill-opacity="0.5" stroke="${C.c}"/>`).join('') + text(300, 64, 'chloroplast', { size: 9 }) + text(380, 254, 'cell wall', { size: 9 });
  s += text(110, 100, 'nucleus', { size: 9 }) + text(60, 175, 'ER', { size: 9 }) + text(165, 190, 'mito.', { size: 9 }) + text(150, 82, 'Golgi', { size: 9 });
  return svg(500, 265, s, 'animal vs plant cell');
});
def('endomembrane', 'Endomembrane system: protein secretion pathway', 'Secreted protein path: ribosome on rough ER → ER lumen (folding, glycosylation) → transport vesicle → Golgi (cis → trans, modification & sorting) → secretory vesicle → exocytosis at the plasma membrane.', () => {
  const steps = ['nucleus\n(mRNA)', 'rough ER\n(translation)', 'transport\nvesicle', 'Golgi\n(modify/sort)', 'secretory\nvesicle', 'plasma membrane\n(exocytosis)'];
  let s = ''; steps.forEach((t, i) => { const x = 10 + i * 100; s += box(x, 50, 88, 50, t, { fill: PAL[i % 6], size: 10 }); if (i) s += arrow(x - 12, 75, x - 1, 75); });
  return svg(610, 150, s, 'endomembrane pathway');
});
def('endosymbiosis', 'Endosymbiotic theory', 'An ancestral host cell engulfed an aerobic prokaryote (→ mitochondrion) and later a photosynthetic cyanobacterium (→ chloroplast). Evidence: double membranes, own circular DNA, 70S ribosomes, division by binary fission.', () => {
  let s = ''; const cell = (x, inner) => circle(x, 100, 55, { fill: C.muted, op: 0.08, stroke: C.ink, w: 1.6 }) + inner;
  s += cell(70, `<ellipse cx="70" cy="100" rx="14" ry="9" fill="${C.b}" fill-opacity="0.5" stroke="${C.b}"/>`) + text(70, 175, 'host + aerobic bacterium', { size: 10 }) + arrow(130, 100, 170, 100);
  s += cell(230, `<ellipse cx="225" cy="95" rx="16" ry="9" fill="${C.b}" fill-opacity="0.4" stroke="${C.b}"/><ellipse cx="225" cy="95" rx="12" ry="6" fill="none" stroke="${C.b}"/>`) + text(230, 175, 'mitochondrion', { size: 10 }) + arrow(290, 100, 330, 100);
  s += cell(390, `<ellipse cx="380" cy="90" rx="16" ry="9" fill="${C.b}" fill-opacity="0.4" stroke="${C.b}"/><ellipse cx="400" cy="115" rx="18" ry="10" fill="${C.c}" fill-opacity="0.5" stroke="${C.c}"/>`) + text(390, 175, '+ cyanobacterium → chloroplast', { size: 10 });
  return svg(470, 190, s, 'endosymbiosis');
});
def('permeability', 'Selective permeability of the bilayer', 'Approximate permeability coefficients through a pure lipid bilayer (cm/s): O₂/CO₂ ≈ 10⁻¹–10⁰ (small nonpolar), H₂O ≈ 10⁻³, urea ≈ 10⁻⁶, glucose ≈ 10⁻⁷, Cl⁻ ≈ 10⁻¹¹, K⁺/Na⁺ ≈ 10⁻¹²–10⁻¹³. Ions and large polar molecules need proteins.', () =>
  bars({ bars: [['O₂', 1], ['CO₂', 0.35], ['H₂O', 3e-3], ['urea', 1e-6], ['glucose', 1e-7], ['Cl⁻', 1e-11], ['K⁺', 5e-12], ['Na⁺', 1e-13]].map(([l, v], i) => ({ label: l, v: 13 + Math.log10(v), color: PAL[i % 6] })), ylabel: 'log₁₀ P + 13', max: 14.5, showV: false }));
def('na-k-pump', 'Na⁺/K⁺-ATPase cycle and bulk transport', 'Each cycle hydrolyzes 1 ATP to pump 3 Na⁺ out and 2 K⁺ in, building the electrochemical gradient (inside negative). Bulk transport: endocytosis (phagocytosis, pinocytosis, receptor-mediated) and exocytosis move large materials in vesicles.', () => {
  let s = membrane(70, 120, 10, 330) + text(170, 20, 'outside: high Na⁺, low K⁺', { size: 10, color: C.muted }) + text(170, 165, 'inside: low Na⁺, high K⁺', { size: 10, color: C.muted });
  s += rect(140, 55, 60, 80, { rx: 12, fill: C.e, op: 0.25, stroke: C.e }) + text(170, 95, 'pump', { size: 10 });
  s += arrow(150, 125, 150, 40, { color: C.b }) + text(122, 34, '3 Na⁺', { size: 11, color: C.b }) + arrow(190, 40, 190, 125, { color: C.a }) + text(220, 140, '2 K⁺', { size: 11, color: C.a }) + text(240, 100, 'ATP → ADP + Pᵢ', { size: 10, anchor: 'start', color: C.e });
  s += path('M360,120 Q360,60 400,60 Q440,60 440,120', { stroke: C.d, w: 2.5 }) + circle(400, 92, 14, { fill: C.c, op: 0.3, stroke: C.c }) + arrow(400, 30, 400, 74, { color: C.c }) + text(400, 160, 'endocytosis', { size: 10 });
  return svg(470, 180, s, 'Na K pump');
});

/* ================= ENERGETICS ================= */
def('atp-cycle', 'ATP/ADP cycle and energy coupling', 'ATP + H₂O → ADP + Pᵢ, \\(\\Delta G^\\circ\\approx-30.5\\) kJ/mol, releases free energy that drives endergonic work (coupling, e.g. Glu + NH₃ → Gln, +14.2 kJ/mol; net \\(-16.3\\) kJ/mol). Catabolism (respiration) regenerates ATP.', () => {
  let s = box(170, 20, 120, 46, 'ATP', { fill: C.a, size: 14, bold: true }) + box(170, 160, 120, 46, 'ADP + Pᵢ', { fill: C.b, size: 13 });
  s += path('M300,45 Q380,110 300,180', { stroke: C.e, w: 2, arrow: true }) + text(392, 112, 'hydrolysis\nΔG = −30.5 kJ/mol'.split('\n')[0], { size: 10, anchor: 'start' }) + text(392, 126, 'ΔG = −30.5 kJ/mol', { size: 10, anchor: 'start' }) + text(392, 145, '→ cellular work', { size: 10, anchor: 'start', color: C.e });
  s += path('M160,180 Q80,110 160,45', { stroke: C.c, w: 2, arrow: true }) + text(70, 110, 'synthesis', { size: 10, anchor: 'end' }) + text(70, 126, 'energy from', { size: 10, anchor: 'end' }) + text(70, 140, 'respiration', { size: 10, anchor: 'end', color: C.c });
  return svg(520, 225, s, 'ATP cycle');
});
def('absorption-spectrum', 'Absorption and action spectra of photosynthesis', 'Approximate in-vitro absorption bands: chlorophyll a peaks ≈430 and 662 nm, chlorophyll b ≈453 and 642 nm, carotenoids 450–490 nm. Green light (500–600 nm) is poorly absorbed (reflected). The action spectrum (rate of O₂ evolution) tracks the combined absorption.', () => {
  const chlA = (l) => 1.0 * gauss(l, 430, 14) + 0.75 * gauss(l, 662, 11) + 0.12 * gauss(l, 615, 15);
  const chlB = (l) => 1.0 * gauss(l, 453, 13) + 0.55 * gauss(l, 642, 10) + 0.1 * gauss(l, 595, 14);
  const car = (l) => 0.8 * gauss(l, 450, 12) + 0.95 * gauss(l, 478, 12) + 0.75 * gauss(l, 505, 10) * 0.6;
  const act = (l) => (0.55 * chlA(l) + 0.3 * chlB(l) + 0.2 * car(l)) * 1.25 + 0.06;
  let bandsSvg = ''; void bandsSvg;
  return plot({ x: [400, 700], y: [0, 1.2], xstep: 50, ystep: 0.2, xlabel: 'wavelength (nm)', ylabel: 'relative absorbance', curves: [{ f: chlA, color: C.c, label: 'chlorophyll a', labelAt: [665, 0.85] }, { f: chlB, color: C.a, label: 'chlorophyll b', labelAt: [560, 0.62] }, { f: car, color: C.d, label: 'carotenoids', labelAt: [505, 0.9] }, { f: act, color: C.ink, dash: '6 3', label: 'action spectrum', labelAt: [560, 0.3] }] });
});
def('light-reactions', 'Light reactions: thylakoid electron transport', 'Linear electron flow: H₂O → PSII (P680) → plastoquinone → cytochrome b₆f (pumps H⁺ into lumen) → plastocyanin → PSI (P700) → ferredoxin → NADP⁺ reductase → NADPH. Photolysis releases O₂ and H⁺ in the lumen; ATP synthase uses the H⁺ gradient (photophosphorylation).', () => {
  let s = membrane(70, 130, 10, 610) + text(310, 20, 'stroma', { size: 11, color: C.muted }) + text(310, 205, 'thylakoid lumen (high H⁺)', { size: 11, color: C.muted });
  const P = [['PSII\nP680', 40, C.c], ['PQ', 150, C.d], ['Cyt b₆f', 220, C.b], ['PC', 300, C.d], ['PSI\nP700', 370, C.c], ['Fd', 450, C.d], ['NADP⁺\nreductase', 500, C.a], ['ATP\nsynthase', 560, C.e]];
  for (const [t, x, c] of P) s += box(x, 60, t.includes('\n') ? 60 : 40, 80, t, { fill: c, size: 9 });
  s += path('M100,85 L150,95 L220,95 M260,120 L300,125 L370,95 M430,85 L450,80 L500,75', { stroke: C.e, w: 1.8, dash: '4 2' }) + text(70, 48, 'light', { size: 10, color: C.d }) + text(400, 48, 'light', { size: 10, color: C.d });
  s += text(70, 165, '2H₂O → 4H⁺ + O₂', { size: 10 }) + arrow(240, 150, 240, 178, { color: C.b }) + text(262, 170, 'H⁺', { size: 10, color: C.b }) + text(530, 40, 'NADPH', { size: 10, color: C.a }) + arrow(590, 175, 590, 50, { color: C.e }) + text(600, 40, 'ATP', { size: 10, color: C.e, anchor: 'start' });
  return svg(640, 215, s, 'light reactions');
});
def('calvin-cycle', 'Calvin cycle (light-independent reactions)', 'Per 3 CO₂: carbon fixation by rubisco (3 RuBP + 3 CO₂ → 6 3-PGA), reduction (6 ATP + 6 NADPH → 6 G3P), 1 G3P exits to make sugar, regeneration of 3 RuBP (3 ATP). Totals: 9 ATP and 6 NADPH per G3P.', () => {
  const cx = 250, cy = 140, R = 85; let s = circle(cx, cy, R, { stroke: C.c, w: 2, dash: '6 4' });
  const nodes = [['3 RuBP (5C)', -90], ['6 3-PGA (3C)', 30], ['6 G3P (3C)', 150]];
  nodes.forEach(([t, a]) => { const r = (a * PI) / 180; s += box(cx + R * cos(r) - 55, cy + R * sin(r) - 16, 110, 32, t, { fill: C.c, size: 10 }); });
  s += text(cx + 110, cy - 70, '+3 CO₂ (rubisco)', { size: 10, anchor: 'start', color: C.a }) + text(cx + 20, cy + 120, '6 ATP, 6 NADPH', { size: 10, anchor: 'start', color: C.e }) + text(cx - 150, cy - 40, '3 ATP', { size: 10, anchor: 'end', color: C.e }) + text(cx - 150, cy + 80, '1 G3P → glucose', { size: 10, anchor: 'end', color: C.b });
  s += text(cx, cy - 4, 'fixation → reduction', { size: 10, color: C.muted }) + text(cx, cy + 12, '→ regeneration', { size: 10, color: C.muted });
  return svg(500, 275, s, 'Calvin cycle');
});
idef('photo-rate-light', 'Photosynthesis rate vs light intensity and CO₂', '', (v) => {
  const P = (Pm) => (I) => (Pm * I) / (v.K + I) - 2, lcp = (2 * v.K) / (20 - 2);
  return plot({ x: [0, 1000], y: [-4, Math.max(30, v.Ph)], ystep: 5, xlabel: 'light intensity (µmol photons m⁻² s⁻¹)', ylabel: 'net O₂ evolution', curves: [{ f: P(20), color: C.a, label: 'low CO₂', labelAt: [800, 14.2] }, { f: P(v.Ph), color: C.c, label: 'high CO₂', labelAt: [800, v.Ph === 30 ? 23.5 : P(v.Ph)(800) - 1] }], points: [{ x: lcp, y: 0, color: C.e, label: `compensation ≈ ${fmt(lcp, 0)}` }] });
}, [
  { key: 'Ph', label: '高 CO₂ 时 Pmax', min: 20, max: 45, step: 5, value: 30 },
  { key: 'K', label: '半饱和光强 K', min: 50, max: 300, step: 10, value: 150 },
], (v) => {
  const lcp = (2 * v.K) / (20 - 2);
  return `Rectangular-hyperbola light response \\(P=\\dfrac{P_{max}I}{K+I}-R_d\\) (\\(R_d=2\\), \\(K=${fmt(v.K, 0)}\\)): net rate is negative in the dark, zero at the light compensation point (≈${fmt(lcp, 0)}), and saturates where CO₂ (or enzyme) becomes limiting; higher CO₂ raises \\(P_{max}\\) (20 → ${fmt(v.Ph, 0)}).`;
});

/* ================= PHOTOSYNTHESIS — STEP FIGURES ================= */
function thylakoidBand(y0, y1, x0 = 30, x1 = 590) {
  let s = rect(x0, y0, x1 - x0, y1 - y0, { fill: C.d, op: 0.06, stroke: 'none' });
  s += line(x0, y0, x1, y0, { color: C.d, w: 1.2 }) + line(x0, y1, x1, y1, { color: C.d, w: 1.2 });
  return s;
}
def('chloroplast-sites', 'Chloroplast and leaf: where photosynthesis happens', 'Leaf mesophyll cells contain chloroplasts. Thylakoid membranes (grana) host PSII, cytochrome b₆f, PSI and ATP synthase; the stroma hosts rubisco and the Calvin cycle. Light drives electron flow, CO₂ enters through stomata, and O₂ leaves.', () => {
  let s = path('M30,120 C80,50 190,55 225,95 C195,160 90,180 30,120 Z', { fill: C.c, op: 0.12, stroke: C.c, w: 2 });
  s += path('M45,120 C95,110 150,100 210,96', { stroke: C.c, w: 1.4 }) + path('M90,125 C105,105 125,95 145,92', { stroke: C.c, w: 1 }) + path('M135,120 C150,100 170,95 185,95', { stroke: C.c, w: 1 });
  s += text(30, 40, 'leaf', { bold: true, size: 12, anchor: 'start' }) + text(30, 210, 'mesophyll cells', { size: 10, color: C.muted, anchor: 'start' });
  s += `<ellipse cx="430" cy="180" rx="170" ry="115" fill="${C.c}" fill-opacity="0.08" stroke="${C.c}" stroke-width="2"/>`;
  s += text(430, 45, 'chloroplast', { bold: true, size: 12 });
  s += line(225, 110, 260, 130, { color: C.muted, dash: '4 3' }) + line(225, 135, 260, 155, { color: C.muted, dash: '4 3' });
  for (const [gx, gy] of [[310, 125], [390, 125], [470, 125]]) for (let i = 0; i < 4; i++) s += `<ellipse cx="${gx}" cy="${gy + i * 14}" rx="38" ry="6" fill="${C.c}" fill-opacity="0.35" stroke="${C.c}" stroke-width="1"/>`;
  s += text(390, 70, 'thylakoid stacks', { bold: true, size: 11 }) + text(390, 87, 'light reactions', { size: 10, color: C.ink });
  s += text(430, 300, 'stroma · Calvin cycle', { size: 10, color: C.muted });
  s += text(430, 325, 'double membrane', { size: 9, color: C.muted, anchor: 'start' }) + line(500, 320, 585, 255, { color: C.muted, w: 0.8 });
  s += arrow(570, 25, 500, 90, { color: C.d }) + text(575, 20, 'light', { size: 10, color: C.d, anchor: 'end' });
  s += arrow(570, 320, 505, 255, { color: C.b }) + text(585, 325, 'CO₂', { size: 10, color: C.b, anchor: 'end' });
  s += arrow(300, 95, 255, 55, { color: C.a }) + text(245, 50, 'O₂', { size: 10, color: C.a, anchor: 'end' });
  return svg(620, 340, s, 'chloroplast and leaf');
});
def('psii-photolysis', 'Photosystem II and photolysis of water', 'PSII (P680) absorbs light, passes an excited electron to plastoquinone (PQ), and replaces it by photolysis of water: \\(2H_2O \\to O_2 + 4H^+ + 4e^-\\). The oxygen-evolving complex sits on the lumen side; four protons are released into the thylakoid lumen per O₂.', () => {
  let s = thylakoidBand(120, 180) + text(40, 30, 'stroma (low H⁺)', { size: 10, color: C.muted, anchor: 'start' }) + text(500, 285, 'lumen (high H⁺)', { size: 10, color: C.muted, anchor: 'end' });
  s += box(240, 65, 120, 115, 'PSII\nP680', { fill: C.c, size: 11 });
  s += arrow(300, 20, 300, 60, { color: C.d }) + text(315, 35, 'light', { size: 10, color: C.d, anchor: 'start' });
  s += text(90, 215, '2 H₂O', { size: 11, anchor: 'start' }) + text(90, 245, 'O₂ + 4H⁺ + 4e⁻', { size: 10, color: C.muted, anchor: 'start' });
  s += arrow(190, 225, 240, 175, { color: C.b }) + text(250, 235, '4H⁺ → lumen', { size: 10, color: C.b, anchor: 'start' });
  s += arrow(360, 105, 420, 105, { color: C.e }) + text(390, 90, 'e⁻', { size: 10, color: C.e });
  s += box(420, 80, 80, 50, 'PQ', { fill: C.d, size: 11 }) + text(480, 150, 'to cyt b₆f', { size: 9, color: C.muted, anchor: 'start' });
  s += text(310, 205, 'oxygen-evolving complex', { size: 9, color: C.muted });
  return svg(620, 300, s, 'PSII photolysis');
});
def('cytb6f-pump', 'Cytochrome b₆f and proton pumping', 'PQH₂ carries electrons from PSII to cytochrome b₆f. The Q cycle releases 4H⁺ into the lumen per 2 e⁻ transferred to plastocyanin (PC); this is the main proton-pumping step of linear electron flow.', () => {
  let s = thylakoidBand(120, 180) + text(40, 30, 'stroma (low H⁺)', { size: 10, color: C.muted, anchor: 'start' }) + text(40, 255, 'lumen (high H⁺)', { size: 10, color: C.muted, anchor: 'start' });
  s += box(60, 80, 90, 50, '2 PQH₂', { fill: C.d, size: 11 }) + box(260, 60, 110, 130, 'cyt b₆f', { fill: C.b, size: 11 }) + box(440, 80, 90, 50, '2 PC', { fill: C.d, size: 11 });
  s += arrow(150, 105, 260, 105, { color: C.e }) + text(205, 90, '2 e⁻', { size: 10, color: C.e });
  s += arrow(370, 105, 440, 105, { color: C.e }) + text(405, 90, '2 e⁻', { size: 10, color: C.e });
  s += arrow(295, 45, 295, 65, { color: C.b }) + text(230, 40, 'H⁺ (stroma)', { size: 10, color: C.b, anchor: 'end' });
  s += arrow(335, 195, 335, 245, { color: C.b }) + text(350, 230, '4H⁺ → lumen', { size: 10, color: C.b, anchor: 'start' });
  s += text(310, 285, '2 PQH₂ + 2 PC(ox) → 2 PQ + 2 PC(red)', { size: 10, color: C.muted });
  return svg(620, 300, s, 'cytochrome b6f proton pump');
});
def('psi-nadph', 'Photosystem I and NADPH production', 'PSI (P700) absorbs light and passes electrons via ferredoxin (Fd) to NADP⁺ reductase: \\(2e^- + NADP^+ + H^+ \\to NADPH\\). PSI does not pump protons; the gradient was built by PSII and cytochrome b₆f.', () => {
  let s = thylakoidBand(120, 180) + text(40, 30, 'stroma (low H⁺)', { size: 10, color: C.muted, anchor: 'start' }) + text(40, 255, 'lumen (high H⁺)', { size: 10, color: C.muted, anchor: 'start' });
  s += box(60, 85, 85, 50, 'PC', { fill: C.d, size: 11 }) + box(220, 65, 110, 115, 'PSI\nP700', { fill: C.c, size: 11 }) + box(380, 80, 70, 50, 'Fd', { fill: C.d, size: 11 }) + box(480, 80, 90, 80, 'NADP⁺\nreductase', { fill: C.a, size: 10 });
  s += arrow(145, 105, 220, 105, { color: C.e }) + text(180, 90, 'e⁻', { size: 10, color: C.e });
  s += arrow(330, 105, 380, 105, { color: C.e }) + text(355, 90, 'e⁻', { size: 10, color: C.e });
  s += arrow(450, 105, 480, 105, { color: C.e }) + text(465, 90, 'e⁻', { size: 10, color: C.e });
  s += arrow(275, 20, 275, 60, { color: C.d }) + text(290, 35, 'light', { size: 10, color: C.d, anchor: 'start' });
  s += arrow(525, 160, 525, 205, { color: C.a }) + text(540, 190, 'NADPH', { size: 10, color: C.a, anchor: 'start' });
  s += text(250, 250, '2 e⁻ + NADP⁺ + H⁺ → NADPH', { size: 10, color: C.muted });
  return svg(620, 300, s, 'PSI NADPH');
});
def('atp-synthase', 'ATP synthase and photophosphorylation', 'Protons flow down their electrochemical gradient from the lumen through ATP synthase (CF₀ channel → CF₁ head) back to the stroma. The energy drives \\(ADP + P_i \\to ATP\\) (photophosphorylation).', () => {
  let s = thylakoidBand(120, 180) + text(40, 30, 'stroma (low H⁺)', { size: 10, color: C.muted, anchor: 'start' }) + text(40, 255, 'lumen (high H⁺)', { size: 10, color: C.muted, anchor: 'start' });
  s += box(270, 55, 90, 150, 'ATP\nsynthase', { fill: C.e, size: 11 }) + text(315, 225, 'CF₀ / CF₁', { size: 9, color: C.muted });
  s += arrow(315, 245, 315, 210, { color: C.b }) + text(370, 235, 'H⁺', { size: 10, color: C.b, anchor: 'start' });
  s += arrow(315, 50, 315, 20, { color: C.b }) + text(330, 30, 'H⁺', { size: 10, color: C.b, anchor: 'start' });
  s += box(60, 55, 120, 45, 'ADP + Pᵢ', { fill: C.a, size: 11 }) + box(430, 55, 100, 45, 'ATP', { fill: C.c, size: 11 });
  s += arrow(180, 77, 270, 77, { color: C.a }) + arrow(360, 77, 430, 77, { color: C.c });
  s += text(315, 285, 'photophosphorylation', { size: 10, color: C.muted });
  return svg(620, 300, s, 'ATP synthase');
});
def('calvin-fixation', 'Calvin cycle: carbon fixation by rubisco', 'Rubisco fixes 3 CO₂ onto 3 RuBP (5C), producing 6 3-phosphoglycerate (3-PGA, 3C). This is carbon fixation, the first step of the Calvin cycle; rubisco is the rate-limiting enzyme.', () => {
  let s = box(40, 80, 120, 70, '3 RuBP\n(5C)', { fill: C.c, size: 11 }) + box(40, 170, 120, 50, '3 CO₂', { fill: C.a, size: 11 });
  s += box(250, 95, 120, 80, 'rubisco', { fill: C.b, size: 12, bold: true }) + box(450, 80, 130, 80, '6 3-PGA\n(3C)', { fill: C.c, size: 11 });
  s += arrow(160, 115, 250, 120, { color: C.e }) + arrow(160, 190, 250, 155, { color: C.a }) + arrow(370, 125, 450, 120, { color: C.e });
  s += text(315, 70, 'carbon fixation', { size: 10, color: C.muted }) + text(515, 190, 'first stable product', { size: 9, color: C.muted });
  s += text(315, 245, 'per 3 CO₂: 3 RuBP + 3 CO₂ → 6 3-PGA', { size: 10, color: C.muted });
  return svg(620, 270, s, 'Calvin fixation');
});
def('calvin-reduction-regeneration', 'Calvin cycle: reduction and regeneration', 'Reduction: 6 3-PGA + 6 ATP + 6 NADPH → 6 G3P + 6 ADP + 6 NADP⁺ + 6 Pᵢ. Regeneration: 5 G3P + 3 ATP → 3 RuBP + 3 ADP. One G3P exits per 3 CO₂ to build glucose; the cycle consumes 9 ATP and 6 NADPH per G3P.', () => {
  let s = line(320, 25, 320, 265, { color: C.grid, w: 1 });
  s += text(160, 25, 'reduction', { bold: true, size: 12 }) + text(480, 25, 'regeneration', { bold: true, size: 12 });
  s += box(30, 80, 110, 60, '6 3-PGA', { fill: C.c, size: 11 }) + box(190, 80, 110, 60, '6 G3P', { fill: C.c, size: 11 });
  s += arrow(140, 110, 190, 110, { color: C.e }) + text(165, 65, '6 ATP + 6 NADPH', { size: 9, color: C.e });
  s += text(165, 175, '6 ADP + 6 NADP⁺ + 6 Pᵢ', { size: 9, color: C.muted });
  s += box(170, 215, 90, 35, 'sugar', { fill: C.b, size: 10 }) + arrow(245, 140, 245, 215, { color: C.b }) + text(260, 180, '1 G3P', { size: 9, color: C.b, anchor: 'start' });
  s += box(360, 80, 110, 60, '5 G3P', { fill: C.c, size: 11 }) + box(510, 80, 80, 60, '3 RuBP', { fill: C.c, size: 11 });
  s += arrow(470, 110, 510, 110, { color: C.e }) + text(490, 65, '3 ATP', { size: 9, color: C.e }) + text(490, 155, '3 ADP', { size: 9, color: C.muted });
  s += text(480, 245, 'per 3 CO₂: 9 ATP + 6 NADPH', { size: 10, color: C.muted });
  return svg(620, 290, s, 'Calvin reduction regeneration');
});
def('leaf-anatomy', 'Leaf cross-section: photosynthesis sites', 'CO₂ diffuses through stomata into the spongy and palisade mesophyll; chloroplasts in mesophyll cells carry out photosynthesis, and veins deliver water and export sugar. Legend: 1 cuticle, 2 upper epidermis, 3 palisade mesophyll, 4 spongy mesophyll, 5 lower epidermis, 6 stoma, 7 guard cells, 8 xylem, 9 phloem, 10 vascular bundle. Image: Agnieszka Kwiecień (Nova), public domain, Wikimedia Commons (resized).', () => `<img src="${MEDIA_BASE}leaf-anatomy.png" alt="Leaf cross-section with numbered tissues" style="display:block;width:100%;height:100%;object-fit:contain">`);
def('glycolysis', 'Glycolysis: glucose to pyruvate', 'In the cytosol, glucose (6C) is split into 2 G3P (3C). Investment of 2 ATP is followed by payoff of 4 ATP and 2 NADH, so net glycolysis yields 2 ATP, 2 NADH and 2 pyruvate per glucose. No O₂ is required.', () => {
  let s = text(310, 22, 'cytosol', { size: 10, color: C.muted });
  s += box(30, 105, 110, 50, 'glucose (6C)', { fill: C.c, size: 10 }) + box(210, 105, 110, 50, '2 G3P (3C)', { fill: C.c, size: 10 }) + box(430, 105, 120, 50, '2 pyruvate (3C)', { fill: C.a, size: 10 });
  s += arrow(140, 130, 210, 130, { color: C.e }) + text(175, 80, '2 ATP invested', { size: 9, color: C.e }) + text(175, 155, '2 ADP', { size: 9, color: C.muted });
  s += arrow(320, 130, 430, 130, { color: C.e }) + text(375, 80, '4 ATP + 2 NADH', { size: 9, color: C.e }) + text(375, 155, '4 ADP, 2 NAD⁺', { size: 9, color: C.muted });
  s += text(310, 220, 'net: 2 ATP + 2 NADH + 2 pyruvate', { size: 11, color: C.ink });
  return svg(620, 270, s, 'glycolysis');
});
def('pyruvate-oxidation', 'Pyruvate oxidation: link reaction to acetyl-CoA', 'In the mitochondrial matrix, pyruvate dehydrogenase removes CO₂ from each pyruvate and transfers the remaining 2C acetyl group to coenzyme A: 2 pyruvate + 2 NAD⁺ + 2 CoA → 2 acetyl-CoA + 2 CO₂ + 2 NADH. No ATP is made in this step.', () => {
  let s = text(310, 22, 'mitochondrial matrix', { size: 10, color: C.muted });
  s += box(30, 95, 120, 55, '2 pyruvate', { fill: C.a, size: 11 }) + box(250, 95, 140, 55, '2 acetyl-CoA', { fill: C.c, size: 11 });
  s += arrow(150, 122, 250, 122, { color: C.e }) + text(200, 80, 'pyruvate dehydrogenase', { size: 9, color: C.b });
  s += text(450, 80, '2 CO₂', { size: 11, color: C.b }) + text(450, 160, '2 NADH', { size: 11, color: C.a });
  s += arrow(320, 80, 420, 80, { color: C.b }) + arrow(320, 160, 420, 160, { color: C.a });
  s += text(310, 220, '2 pyruvate + 2 NAD⁺ + 2 CoA → 2 acetyl-CoA + 2 CO₂ + 2 NADH', { size: 10, color: C.muted });
  return svg(620, 250, s, 'pyruvate oxidation');
});
def('krebs-cycle', 'Krebs cycle: acetyl-CoA oxidation', 'Per turn, acetyl-CoA (2C) joins oxaloacetate (4C) to form citrate (6C); two carbons leave as CO₂, and the cycle regenerates oxaloacetate. Per glucose (2 turns): 6 NADH, 2 FADH₂, 2 ATP and 4 CO₂. The cycle occurs in the mitochondrial matrix.', () => {
  let s = text(310, 18, 'mitochondrial matrix', { size: 10, color: C.muted });
  s += box(250, 35, 120, 40, 'citrate (6C)', { fill: C.c, size: 10 }) + box(450, 150, 140, 40, 'α-ketoglutarate (5C)', { fill: C.c, size: 9 }) + box(250, 285, 120, 40, 'succinate (4C)', { fill: C.c, size: 10 }) + box(20, 150, 140, 40, 'oxaloacetate (4C)', { fill: C.c, size: 9 });
  s += path('M370,55 Q500,75 510,150', { stroke: C.e, w: 1.8, arrow: true }) + text(500, 100, 'CO₂ + NADH', { size: 9, color: C.e, anchor: 'start' });
  s += path('M540,190 Q510,290 370,305', { stroke: C.e, w: 1.8, arrow: true }) + text(520, 260, 'CO₂ + NADH + ATP', { size: 9, color: C.e, anchor: 'start' });
  s += path('M250,305 Q120,290 90,190', { stroke: C.e, w: 1.8, arrow: true }) + text(110, 260, 'FADH₂ + NADH', { size: 9, color: C.e, anchor: 'end' });
  s += path('M120,150 Q140,70 250,55', { stroke: C.e, w: 1.8, arrow: true }) + text(135, 100, 'acetyl-CoA in', { size: 9, color: C.b, anchor: 'start' });
  s += text(310, 180, '2 turns per glucose', { size: 11, color: C.ink }) + text(310, 200, '6 NADH · 2 FADH₂ · 2 ATP · 4 CO₂', { size: 10, color: C.muted });
  return svg(620, 350, s, 'Krebs cycle');
});
def('respiration-overview', 'Cellular respiration pathway', 'Glucose → glycolysis (cytosol: 2 pyruvate, 2 ATP net, 2 NADH) → pyruvate oxidation (matrix: 2 acetyl-CoA, 2 CO₂, 2 NADH) → Krebs cycle (2 ATP, 6 NADH, 2 FADH₂, 4 CO₂) → ETC & oxidative phosphorylation (inner membrane: ≈26–28 ATP; O₂ is final e⁻ acceptor → H₂O).', () => {
  const st = [['glucose', C.muted], ['glycolysis\n(cytosol)', C.a], ['pyruvate\noxidation', C.b], ['Krebs cycle\n(matrix)', C.c], ['ETC + ATP\nsynthase', C.e]];
  let s = ''; st.forEach(([t, c], i) => { const x = 10 + i * 118; s += box(x, 40, 100, 54, t, { fill: c, size: 10 }); if (i) s += arrow(x - 16, 67, x - 2, 67); });
  const out = [['', ''], ['2 ATP, 2 NADH', '2 pyruvate'], ['2 NADH, 2 CO₂', '2 acetyl-CoA'], ['2 ATP, 6 NADH', '2 FADH₂, 4 CO₂'], ['≈26–28 ATP', 'O₂ → H₂O']];
  out.forEach(([a, b], i) => { const x = 60 + i * 118; s += text(x, 112, a, { size: 9.5, color: C.ink }) + text(x, 126, b, { size: 9.5, color: C.muted }); });
  s += path('M400,140 Q300,175 200,140', { stroke: C.d, dash: '4 3', arrow: true }) + text(300, 178, 'NADH, FADH₂ carry electrons to the ETC', { size: 9.5, color: C.d });
  return svg(600, 190, s, 'respiration pathway');
});
def('etc', 'Electron transport chain & chemiosmosis', 'NADH → Complex I, FADH₂ → Complex II → ubiquinone (Q) → Complex III → cytochrome c → Complex IV → ½O₂ + 2H⁺ → H₂O. Complexes I, III, IV pump H⁺ into the intermembrane space; H⁺ flows back through ATP synthase, driving ADP + Pᵢ → ATP. Uncouplers/cyanide (blocks IV) stop ATP synthesis.', () => {
  let s = membrane(80, 140, 10, 600) + text(300, 22, 'intermembrane space (high H⁺, low pH)', { size: 10.5, color: C.muted }) + text(300, 215, 'mitochondrial matrix', { size: 10.5, color: C.muted });
  const P = [['I', 40], ['II', 130], ['Q', 205], ['III', 260], ['cyt c', 345], ['IV', 410], ['ATP\nsynthase', 510]];
  for (const [t, x] of P) s += box(x, t === 'Q' || t === 'cyt c' ? (t === 'Q' ? 95 : 62) : 66, t.length > 3 ? 64 : 52, t === 'Q' || t === 'cyt c' ? 30 : 88, t, { fill: t.startsWith('ATP') ? C.e : C.a, size: 10 });
  [66, 286, 436].forEach((x) => { s += arrow(x, 150, x, 44, { color: C.b }) + text(x + 12, 40, 'H⁺', { size: 10, color: C.b, anchor: 'start' }); });
  s += path('M92,120 L130,125 L182,120 L205,110 L260,110 L310,90 L345,78 L397,85 L436,110', { stroke: C.e, w: 1.6, dash: '4 2' }) + text(40, 180, 'NADH → NAD⁺', { size: 10, anchor: 'start' }) + text(130, 192, 'FADH₂ → FAD', { size: 10, anchor: 'start' }) + text(400, 186, '½O₂ + 2H⁺ → H₂O', { size: 10, anchor: 'start' });
  s += arrow(542, 44, 542, 150, { color: C.b }) + text(560, 186, 'ADP + Pᵢ → ATP', { size: 10, color: C.e });
  return svg(620, 225, s, 'electron transport chain');
});
def('atp-yield', 'ATP yield per glucose by stage', 'Substrate-level: glycolysis 2, Krebs 2. Oxidative phosphorylation: 10 NADH × ≈2.5 + 2 FADH₂ × ≈1.5 = 28 (≈26 if glycolytic NADH uses the glycerol-phosphate shuttle). Total ≈30–32 ATP. Fermentation yields only the 2 glycolytic ATP.', () =>
  bars({ bars: [['glycolysis', 2], ['pyruvate ox.', 0], ['Krebs', 2], ['ox. phos.', 28], ['fermentation', 2]].map(([l, v], i) => ({ label: l, v, color: PAL[i] })), showV: true, ylabel: 'ATP per glucose', max: 32 }));
def('respirometer', 'Respirometer data: O₂ consumption vs temperature', '', () => {
  const t = [0, 5, 10, 15, 20], Q10 = 2, r10 = 0.012, rate = (T) => r10 * Q10 ** ((T - 10) / 10);
  setCap('respirometer', `Germinating peas, O₂ consumed (mL) every 5 min; rate follows \\(Q_{10}=2\\): ${fmt(rate(10), 3)} mL/min at 10 °C, ${fmt(rate(20), 3)} at 20 °C. Dry (dormant) peas ≈ 0; glass beads control for pressure/temperature changes.`);
  return plot({ x: [0, 21], y: [0, 0.55], ystep: 0.1, xstep: 5, xlabel: 'time (min)', ylabel: 'O₂ consumed (mL)', curves: [{ pts: t.map((m) => [m, rate(20) * m]), color: C.e, label: 'germinating 20 °C', labelAt: [12, 0.42] }, { pts: t.map((m) => [m, rate(10) * m]), color: C.a, label: 'germinating 10 °C', labelAt: [14, 0.13] }, { pts: t.map((m) => [m, 0.0008 * m]), color: C.muted, label: 'dry peas', labelAt: [16, 0.04] }], points: t.flatMap((m) => [{ x: m, y: rate(20) * m, r: 3, color: C.e }, { x: m, y: rate(10) * m, r: 3, color: C.a }]) });
});
def('fermentation', 'Fermentation vs aerobic respiration', 'Without O₂, pyruvate is reduced to lactate (animals) or ethanol + CO₂ (yeast) to regenerate NAD⁺ so glycolysis continues: 2 ATP/glucose. With O₂: ≈30–32 ATP/glucose.', () => {
  let s = box(200, 10, 120, 36, 'glucose', { fill: C.muted }) + arrow(260, 46, 260, 70) + text(270, 58, 'glycolysis (2 ATP, 2 NADH)', { anchor: 'start', size: 10 }) + box(200, 70, 120, 36, '2 pyruvate', { fill: C.a });
  s += arrow(220, 106, 90, 150) + arrow(260, 106, 260, 150) + arrow(300, 106, 430, 150);
  s += box(20, 150, 140, 40, 'lactate\n(muscle, no O₂)', { fill: C.e, size: 10 }) + box(190, 150, 140, 40, 'ethanol + CO₂\n(yeast, no O₂)', { fill: C.d, size: 10 }) + box(360, 150, 140, 40, 'acetyl-CoA → Krebs\n(O₂ present)', { fill: C.c, size: 10 });
  s += text(170, 210, 'NADH → NAD⁺ recycled to glycolysis', { size: 10, color: C.muted });
  return svg(520, 225, s, 'fermentation');
});
idef('metabolic-temp', 'Fitness & metabolism: endotherm vs ectotherm', '', (v) =>
  plot({ x: [0, 40], y: [0, 10], xlabel: 'ambient temperature (°C)', ylabel: 'metabolic rate (rel.)', curves: [{ f: (T) => 0.6 * v.Q10 ** ((T - 10) / 10), color: C.b, label: 'ectotherm', labelAt: [30, 8.5] }, { f: (T) => (T < 28 ? 3 + 0.22 * (28 - T) : T > 33 ? 3 + 0.35 * (T - 33) : 3), color: C.a, label: 'endotherm', labelAt: [3, 9.4] }], fills: [{ f: () => 10, g: () => 0, dom: [28, 33], color: C.c, op: 0.08 }] }), [
  { key: 'Q10', label: '温度系数 Q₁₀', min: 1.5, max: 3.5, step: 0.1, value: 2.5 },
], (v) => `Ectotherm (lizard) metabolic rate rises with ambient temperature (\\(Q_{10}=${fmt(v.Q10, 1)}\\)); endotherm (mouse) rate is minimal in its thermoneutral zone (≈28–33 °C) and rises below it to generate heat.`);

/* ================= CELL COMMUNICATION & CELL CYCLE ================= */
def('signal-types', 'Types of cell signaling', 'Direct contact (gap junctions / plasmodesmata, cell-surface recognition), paracrine (local regulators, short distance), synaptic (neurotransmitter across a synapse), endocrine (hormone through the bloodstream to distant targets).', () => {
  let s = ''; const cell = (x, y, r = 18, c = C.a) => circle(x, y, r, { fill: c, op: 0.25, stroke: c });
  s += text(65, 16, 'direct contact', { bold: true, size: 11 }) + cell(45, 70) + cell(85, 70) + rect(60, 64, 10, 12, { fill: C.d, op: 0.6, stroke: C.d });
  s += text(195, 16, 'paracrine', { bold: true, size: 11 }) + cell(160, 70, 18, C.b); for (const [x, y] of [[200, 50], [210, 90], [230, 70]]) s += cell(x + 20, y, 12) + circle(x, y, 3, { fill: C.b, stroke: 'none' });
  s += text(330, 16, 'synaptic', { bold: true, size: 11 }) + path('M280,70 L330,70', { stroke: C.c, w: 4 }) + circle(335, 70, 8, { fill: C.c, op: 0.4, stroke: C.c }) + cell(370, 70, 18) + circle(350, 64, 2.5, { fill: C.c, stroke: 'none' }) + circle(352, 76, 2.5, { fill: C.c, stroke: 'none' });
  s += text(475, 16, 'endocrine', { bold: true, size: 11 }) + cell(430, 60, 16, C.e) + path('M420,100 C450,120 500,80 530,110', { stroke: C.e, w: 6, op: 0.3 }) + circle(470, 100, 3, { fill: C.e, stroke: 'none' }) + cell(530, 60, 16) + text(475, 130, 'blood vessel', { size: 9, color: C.muted });
  return svg(570, 145, s, 'signaling types');
});
def('signal-transduction', 'Signal transduction: GPCR → cAMP cascade', 'Reception: ligand (e.g. epinephrine) binds a G-protein-coupled receptor → G protein exchanges GDP for GTP → activates adenylyl cyclase (ATP → cAMP, second messenger). Transduction: cAMP activates protein kinase A → phosphorylation cascade. Response: e.g. glycogen breakdown to glucose.', () => {
  let s = membrane(60, 110, 10, 560) + box(60, 40, 60, 90, 'GPCR', { fill: C.a, size: 10 }) + circle(90, 28, 10, { fill: C.b, op: 0.6, stroke: C.b }) + text(120, 22, 'ligand (1st messenger)', { size: 10, anchor: 'start' });
  s += box(140, 110, 70, 32, 'G protein\nGTP', { fill: C.c, size: 9 }) + arrow(120, 115, 140, 122) + box(240, 50, 90, 80, 'adenylyl\ncyclase', { fill: C.d, size: 10 }) + arrow(210, 126, 240, 110);
  s += text(285, 160, 'ATP → cAMP', { size: 10, color: C.e }) + arrow(285, 168, 285, 190) + box(240, 192, 90, 30, 'PKA active', { fill: C.e, size: 10 }) + arrow(330, 207, 370, 207) + box(370, 192, 100, 30, 'kinase cascade', { fill: C.f, size: 10 }) + arrow(470, 207, 500, 207) + box(500, 186, 70, 42, 'cellular\nresponse', { fill: C.a, size: 10 });
  s += text(30, 160, 'reception', { size: 10, color: C.muted, anchor: 'start' }) + text(380, 170, 'transduction', { size: 10, color: C.muted, anchor: 'start' });
  return svg(580, 240, s, 'signal transduction');
});
def('signal-amplification', 'Amplification in a signaling cascade', 'If each activated enzyme activates 10 molecules of the next: 1 receptor → 10 G proteins/adenylyl cyclases → 10² cAMP-activated PKA → 10³ phosphorylase kinase → 10⁴ glycogen phosphorylase → 10⁸ glucose released (each phosphorylase acting on ~10⁴ substrates). Log scale.', () =>
  bars({ bars: [['receptor', 0], ['AC', 1], ['PKA', 2], ['PhK', 3], ['GP', 4], ['glucose', 8]].map(([l, v], i) => ({ label: l, v, color: PAL[i % 6] })), showV: true, ylabel: 'log₁₀ (molecules)', max: 9 }));
def('rtk', 'Receptor tyrosine kinase activation', 'Two signal molecules bind two RTK monomers → dimerization → cross-phosphorylation of tyrosines (6 ATP → 6 ADP) → relay proteins bind phosphotyrosines and trigger multiple responses (e.g. Ras/MAPK → cell division). Mutant always-on RTKs/Ras cause cancer.', () => {
  let s = membrane(70, 120, 10, 430);
  const rtk = (x, p) => rect(x, 30, 24, 160, { rx: 8, fill: C.a, op: 0.25, stroke: C.a }) + (p ? [140, 160, 180].map((y) => circle(x + 12, y, 7, { fill: C.e, op: 0.4, stroke: C.e }) + text(x + 12, y, 'P', { size: 8 })).join('') : '');
  s += rtk(60, false) + rtk(100, false) + text(100, 210, 'inactive monomers', { size: 10 }) + arrow(160, 110, 210, 110);
  s += rtk(240, true) + rtk(266, true) + circle(252, 20, 9, { fill: C.b, op: 0.6, stroke: C.b }) + circle(278, 20, 9, { fill: C.b, op: 0.6, stroke: C.b }) + text(265, 210, 'dimer, phosphorylated', { size: 10 });
  s += box(320, 150, 100, 34, 'relay proteins\n→ responses', { fill: C.c, size: 9 }) + arrow(300, 165, 320, 165);
  return svg(440, 225, s, 'RTK');
});
def('feedback-glucose', 'Negative feedback: blood glucose regulation', '', () => {
  // simple glucose–insulin model after a meal at t = 30 min: dG/dt = meal − k·I·(G−G0), dI/dt = a·max(G−G0,0) − b·I
  const meal = (t) => (t > 30 && t < 60 ? 3 : 0), sol = rk4((t, [G, I]) => [meal(t) - 0.015 * I * (G - 90), 0.08 * Math.max(G - 90, 0) - 0.05 * I], 0, [90, 0], 240, 2400);
  const Gmax = Math.max(...sol.map((p) => p[1]));
  setCap('feedback-glucose', `Simulated (RK4) minimal model: a meal raises glucose to ${fmt(Gmax, 0)} mg/dL; rising glucose stimulates insulin release, which increases uptake until glucose returns to the 90 mg/dL set point — negative feedback. (Glucagon acts in the opposite direction when glucose falls.)`);
  return plot({ x: [0, 240], y: [0, 180], xstep: 30, xlabel: 'time (min)', ylabel: 'level', curves: [{ pts: sol.map((p) => [p[0], p[1]]), color: C.b, label: 'glucose (mg/dL)', labelAt: [100, 162] }, { pts: sol.map((p) => [p[0], p[2] * 3]), color: C.a, label: 'insulin (×3, rel.)', labelAt: [140, 60] }], hlines: [{ y: 90, label: 'set point' }], fills: [{ f: () => 180, g: () => 0, dom: [30, 60], color: C.d, op: 0.1 }] });
});
def('feedback-loops', 'Negative vs positive feedback loops', 'Negative feedback returns a variable to its set point (thermoregulation, blood glucose). Positive feedback amplifies the change until an endpoint (oxytocin in childbirth, fruit ripening via ethylene, blood clotting).', () => {
  const loop = (x, title, steps, col) => { let s = text(x + 115, 16, title, { bold: true }); const pos = [[x + 80, 30], [x + 160, 90], [x + 80, 150], [x, 90]]; steps.forEach((t, i) => { s += box(pos[i][0], pos[i][1], 140, 34, t, { fill: col, size: 9.5 }); }); s += arrow(x + 200, 64, x + 220, 90) + arrow(x + 220, 124, x + 200, 150) + arrow(x + 80, 167, x + 40, 124) + arrow(x + 40, 90, x + 80, 47); return s; };
  return svg(760, 200, loop(10, 'negative feedback', ['body temp rises', 'sensor: hypothalamus', 'sweating, vasodilation', 'temp falls to set point'], C.a) + loop(390, 'positive feedback', ['baby pushes on cervix', 'stretch receptors', 'oxytocin released', 'stronger contractions'], C.e), 'feedback loops');
});
const CYCLE = [['G₁', 11, C.a], ['S', 8, C.c], ['G₂', 4, C.d], ['M', 1, C.e]];
def('cell-cycle', 'The cell cycle (24-hour mammalian cell)', 'Typical durations: G₁ ≈ 11 h, S ≈ 8 h (DNA replication), G₂ ≈ 4 h, M ≈ 1 h (mitosis + cytokinesis). Interphase (G₁ + S + G₂) ≈ 96% of the cycle; G₀ is a non-dividing exit from G₁. Checkpoints at G₁/S, G₂/M and the spindle (M) checkpoint.', () => {
  const cx = 150, cy = 140, R = 100; let s = '', a0 = -PI / 2;
  for (const [n, h, c] of CYCLE) { const a1 = a0 + (h / 24) * 2 * PI, large = a1 - a0 > PI ? 1 : 0; s += path(`M${cx},${cy} L${cx + R * cos(a0)},${cy + R * sin(a0)} A${R} ${R} 0 ${large} 1 ${cx + R * cos(a1)},${cy + R * sin(a1)} Z`, { fill: c, op: 0.35, stroke: c }); const am = (a0 + a1) / 2; s += text(cx + (R + 18) * cos(am), cy + (R + 18) * sin(am), `${n} ${h} h`, { size: 11, bold: true }); a0 = a1; }
  const chk = [['G₁/S checkpoint', -PI / 2 + (11 / 24) * 2 * PI], ['G₂/M checkpoint', -PI / 2 + (23 / 24) * 2 * PI], ['M checkpoint', -PI / 2 + (23.6 / 24) * 2 * PI]];
  chk.forEach(([t, a], i) => { s += circle(cx + R * cos(a), cy + R * sin(a), 5, { fill: C.ink }) + text(310, 60 + i * 24, `● ${t}`, { size: 10.5, anchor: 'start' }); });
  s += text(310, 150, 'interphase = G₁ + S + G₂', { size: 10.5, anchor: 'start' }) + text(310, 172, 'G₀: exits from G₁', { size: 10.5, anchor: 'start' }) + text(310, 194, '(neurons, muscle cells)', { size: 10, anchor: 'start', color: C.muted });
  return svg(480, 270, s, 'cell cycle');
});
def('dna-content-mitosis', 'DNA content per cell through the cell cycle', 'Relative DNA content 2C in G₁, doubles to 4C during S (replication), stays 4C through G₂ and mitosis, then halves to 2C at cytokinesis. (C = haploid DNA content.)', () =>
  plot({ x: [0, 48], y: [0, 5], xstep: 6, ystep: 1, xlabel: 'time (h)', ylabel: 'DNA per cell (C)', yfmt: (v) => `${v}C`, curves: [{ pts: [[0, 2], [11, 2], [19, 4], [24, 4], [24, 2], [35, 2], [43, 4], [48, 4]], color: C.a }], texts: [[5.5, 2.3, 'G₁'], [15, 3.4, 'S'], [21.5, 4.3, 'G₂+M'], [29.5, 2.3, 'G₁'], [39, 3.4, 'S']] }));
def('cyclin-cdk', 'Cyclin–CDK regulation', 'Cdk concentration is constant; mitotic cyclin accumulates through G₁, S, G₂ and is degraded at the end of M. MPF (cyclin–Cdk) activity peaks at the G₂/M transition and triggers mitosis. Curves modeled over two 24 h cycles.', () => {
  const cyc = (t) => { const p = t % 24; return p < 23 ? 0.1 + 0.9 * (p / 23) ** 1.6 : 1 - (p - 23); }, mpf = (t) => { const p = t % 24; return 0.95 * gauss(p, 23, 0.6) + (p < 1 ? 0.95 * gauss(p + 24, 23, 0.6) : 0); };
  return plot({ x: [0, 48], y: [0, 1.25], xstep: 6, ystep: 0.25, xlabel: 'time (h)', ylabel: 'relative level', curves: [{ f: () => 0.5, color: C.muted, dash: '4 3', label: 'Cdk', labelAt: [1, 0.56] }, { f: cyc, n: 800, color: C.a, label: 'cyclin', labelAt: [14, 0.62] }, { f: mpf, n: 800, color: C.e, label: 'MPF activity', labelAt: [25, 1.05] }], vlines: [{ x: 23, label: 'M' }, { x: 47, label: 'M' }] });
});
function chrom(x, y, col, sister = true, h = 26) { const c = col; return sister ? path(`M${x - 4},${y - h / 2} Q${x},${y} ${x - 4},${y + h / 2}`, { stroke: c, w: 4 }) + path(`M${x + 4},${y - h / 2} Q${x},${y} ${x + 4},${y + h / 2}`, { stroke: c, w: 4 }) + circle(x, y, 2.5, { fill: C.ink, stroke: 'none' }) : line(x, y - h / 2, x, y + h / 2, { color: c, w: 4 }); }
def('mitosis-stages', 'Mitosis stages (2n = 4)', 'Prophase: chromosomes condense (each 2 sister chromatids), spindle forms. Metaphase: chromosomes align at the metaphase plate. Anaphase: sister chromatids separate (8 chromosomes moving to poles). Telophase/cytokinesis: two nuclei → two identical 2n = 4 daughter cells.', () => {
  let s = ''; const col = [C.a, C.a, C.e, C.e];
  const cell = (x, lbl) => circle(x, 90, 58, { fill: C.muted, op: 0.06, stroke: C.ink }) + text(x, 166, lbl, { size: 11, bold: true });
  s += cell(65, 'prophase') + [[-20, -15], [15, -20], [-15, 20], [20, 15]].map(([dx, dy], i) => chrom(65 + dx, 90 + dy, col[i])).join('');
  s += cell(195, 'metaphase') + line(195, 35, 195, 145, { color: C.muted, dash: '3 3', w: 1 }) + [-30, -10, 10, 30].map((dy, i) => chrom(195, 90 + dy, col[i], true, 18)).join('') + circle(140, 90, 3, { fill: C.ink }) + circle(250, 90, 3, { fill: C.ink });
  s += cell(325, 'anaphase') + [-30, -10, 10, 30].map((dy, i) => chrom(300, 90 + dy, col[i], false, 14) + chrom(350, 90 + dy, col[i], false, 14)).join('');
  s += circle(440, 60, 28, { fill: C.muted, op: 0.06, stroke: C.ink }) + circle(440, 122, 28, { fill: C.muted, op: 0.06, stroke: C.ink }) + text(440, 166, 'telophase', { size: 11, bold: true }) + [[-10, -6], [6, -10], [-6, 8], [10, 6]].map(([dx, dy], i) => chrom(440 + dx, 60 + dy, col[i], false, 12) + chrom(440 + dx, 122 + dy, col[i], false, 12)).join('');
  return svg(490, 180, s, 'mitosis stages');
});
def('meiosis-stages', 'Meiosis I and II (2n = 4 → four n = 2 cells)', 'Meiosis I: homologous pairs synapse and cross over (prophase I), align as tetrads (metaphase I), homologs separate (anaphase I) → 2 haploid cells with duplicated chromosomes. Meiosis II: sister chromatids separate → 4 genetically distinct haploid gametes.', () => {
  let s = ''; const cell = (x, y, r = 40) => circle(x, y, r, { fill: C.muted, op: 0.06, stroke: C.ink });
  s += cell(60, 100, 50) + chrom(50, 90, C.a) + chrom(64, 90, C.e) + chrom(50, 118, C.c, true, 18) + chrom(64, 118, C.d, true, 18) + text(60, 165, 'prophase I (tetrads)', { size: 10 });
  s += arrow(115, 100, 140, 100) + cell(190, 100, 50) + line(190, 50, 190, 150, { color: C.muted, dash: '3 3', w: 1 }) + chrom(180, 85, C.a) + chrom(200, 85, C.e) + chrom(180, 120, C.c, true, 18) + chrom(200, 120, C.d, true, 18) + text(190, 165, 'metaphase I', { size: 10 });
  s += arrow(245, 100, 270, 100) + cell(305, 60, 32) + cell(305, 140, 32) + chrom(298, 55, C.a) + chrom(312, 62, C.d, true, 18) + chrom(298, 135, C.e) + chrom(312, 142, C.c, true, 18) + text(345, 100, 'n = 2 (2 cells)', { size: 10, anchor: 'start' });
  s += arrow(345, 60, 380, 40) + arrow(345, 140, 380, 160);
  [[410, 30, C.a, C.d], [460, 30, C.a, C.d], [410, 170, C.e, C.c], [460, 170, C.e, C.c]].forEach(([x, y, c1, c2]) => { s += cell(x, y, 22) + chrom(x - 5, y, c1, false, 14) + chrom(x + 6, y, c2, false, 10); });
  s += text(435, 100, '4 haploid cells', { size: 10 });
  return svg(500, 200, s, 'meiosis stages');
});
def('dna-content-meiosis', 'DNA content per cell through meiosis', 'Starts at 2C (G₁), replicates to 4C (S), halves to 2C after meiosis I (homologs separate), and halves again to 1C after meiosis II (gametes). Fertilization restores 2C.', () =>
  plot({ x: [0, 10], y: [0, 5], ystep: 1, xticks: [], xlabel: 'stage', ylabel: 'DNA per cell (C)', yfmt: (v) => `${v}C`, curves: [{ pts: [[0, 2], [2, 2], [3.5, 4], [5, 4], [5, 2], [7, 2], [7, 1], [9, 1], [9, 2], [10, 2]], color: C.a }], texts: [[1, 2.3, 'G₁'], [2.75, 3.4, 'S'], [4.25, 4.3, 'meiosis I'], [6, 2.3, 'meiosis II'], [8, 1.3, 'gametes'], [9.5, 2.3, 'zygote']] }));
def('crossing-over', 'Crossing over and independent assortment', 'Crossing over at a chiasma in prophase I swaps segments between non-sister chromatids, giving recombinant chromatids. Independent assortment of n homologous pairs gives \\(2^n\\) combinations: \\(2^{23}\\approx8.4\\times10^6\\) in humans.', () => {
  let s = line(60, 40, 60, 160, { color: C.a, w: 6 }) + line(76, 40, 76, 160, { color: C.a, w: 6 }) + line(110, 40, 110, 160, { color: C.e, w: 6 }) + line(126, 40, 126, 160, { color: C.e, w: 6 }) + path('M76,95 L110,105 M76,105 L110,95', { stroke: C.ink, w: 1.5 }) + text(93, 180, 'chiasma', { size: 10 });
  s += arrow(150, 100, 190, 100);
  [[220, C.a, C.a], [245, C.a, C.e], [270, C.e, C.a], [295, C.e, C.e]].forEach(([x, top, bot]) => { s += line(x, 40, x, 100, { color: top, w: 6 }) + line(x, 100, x, 160, { color: bot, w: 6 }); });
  s += text(258, 180, 'parental · recombinant · recombinant · parental', { size: 9.5 });
  s += text(420, 60, 'independent assortment', { size: 11, bold: true }) + text(420, 86, 'n = 2 → 2² = 4 gametes', { size: 10 }) + text(420, 106, 'n = 3 → 2³ = 8', { size: 10 }) + text(420, 126, 'human n = 23 → 8,388,608', { size: 10 });
  return svg(520, 195, s, 'crossing over');
});
def('nondisjunction', 'Nondisjunction in meiosis I vs II', 'If homologs fail to separate in meiosis I, all 4 gametes are abnormal (2 n+1, 2 n−1). If sister chromatids fail to separate in meiosis II, 2 gametes are normal, 1 is n+1, 1 is n−1. Fertilization of n+1 gametes gives trisomy (e.g. trisomy 21).', () => {
  const g = (x, y, k, lab) => circle(x, y, 18, { fill: k > 1 ? C.e : k < 1 ? C.b : C.c, op: 0.2, stroke: C.ink }) + Array.from({ length: k }, (_, i) => line(x - 4 + i * 8, y - 8, x - 4 + i * 8, y + 8, { color: C.a, w: 3 })).join('') + text(x, y + 30, lab, { size: 9.5 });
  let s = text(120, 16, 'nondisjunction in meiosis I', { bold: true, size: 11 }) + text(380, 16, 'nondisjunction in meiosis II', { bold: true, size: 11 });
  s += g(45, 70, 2, 'n+1') + g(95, 70, 2, 'n+1') + g(145, 70, 0, 'n−1') + g(195, 70, 0, 'n−1');
  s += g(305, 70, 2, 'n+1') + g(355, 70, 0, 'n−1') + g(405, 70, 1, 'n') + g(455, 70, 1, 'n');
  return svg(500, 120, s, 'nondisjunction');
});

/* ================= GENETICS ================= */
function cross(p1, p2) { // p = array of gene strings like 'Aa','Bb'; returns gametes and offspring
  const gam = (p) => p.reduce((acc, g) => acc.flatMap((a) => [a + g[0], a + g[1]]), ['']);
  const g1 = gam(p1), g2 = gam(p2);
  const canon = (a, b) => [...a].map((ch, i) => [ch, b[i]].sort((x, y) => (x === x.toUpperCase() ? -1 : 1) - (y === y.toUpperCase() ? -1 : 1) || x.localeCompare(y)).join('')).join('');
  return { g1, g2, grid: g1.map((a) => g2.map((b) => canon(a, b))) };
}
function punnettSvg(p1, p2, phen) {
  const { g1, g2, grid } = cross(p1, p2), n = g1.length, cs = n > 2 ? 52 : 70, o = 60, W = o + n * cs + 20;
  let s = text(o + (n * cs) / 2, 16, `${p1.join('')} × ${p2.join('')}`, { bold: true });
  g2.forEach((g, j) => { s += text(o + j * cs + cs / 2, 40, g, { bold: true, color: C.b }); });
  g1.forEach((g, i) => { s += text(o - 18, 54 + i * cs + cs / 2, g, { bold: true, color: C.a }); });
  const cols = {}; let ci = 0; grid.flat().forEach((gt) => { const p = phen(gt); if (!(p in cols)) cols[p] = PAL[ci++ % 6]; });
  grid.forEach((row, i) => row.forEach((gt, j) => { s += rect(o + j * cs, 54 + i * cs, cs, cs, { fill: cols[phen(gt)], op: 0.22 }) + text(o + j * cs + cs / 2, 54 + i * cs + cs / 2, gt, { size: n > 2 ? 11 : 14 }); }));
  const counts = {}; grid.flat().forEach((gt) => { const p = phen(gt); counts[p] = (counts[p] || 0) + 1; });
  const H = 54 + n * cs + 18 + Object.keys(counts).length * 16;
  Object.entries(counts).forEach(([p, c], k) => { s += rect(o, 54 + n * cs + 10 + k * 16, 10, 10, { fill: cols[p], op: 0.6, stroke: 'none' }) + text(o + 16, 54 + n * cs + 15 + k * 16, `${p}: ${c}/${n * n}`, { size: 11, anchor: 'start' }); });
  return { svg: svg(Math.max(W, 260), H, s, 'Punnett square'), counts, total: n * n };
}
const dom = (gt, ch) => gt.includes(ch);
def('punnett-mono', 'Punnett square: monohybrid cross Aa × Aa', '', () => {
  const r = punnettSvg(['Aa'], ['Aa'], (g) => (dom(g, 'A') ? 'dominant' : 'recessive'));
  setCap('punnett-mono', `Enumerated gametes A, a from each parent. Genotypes 1 AA : 2 Aa : 1 aa; phenotypes ${r.counts.dominant} dominant : ${r.counts.recessive} recessive (3:1).`); return r.svg;
});
def('punnett-di', 'Punnett square: dihybrid cross AaBb × AaBb', '', () => {
  const r = punnettSvg(['Aa', 'Bb'], ['Aa', 'Bb'], (g) => `${dom(g, 'A') ? 'A_' : 'aa'}${dom(g, 'B') ? 'B_' : 'bb'}`);
  setCap('punnett-di', `16 gamete combinations (AB, Ab, aB, ab each \\(\\dfrac{1}{4}\\), independent assortment). Phenotype ratio ${Object.values(r.counts).join(' : ')} = 9 : 3 : 3 : 1, e.g. \\(P(\\text{aabb})=\\dfrac14\\cdot\\dfrac14=\\dfrac{1}{16}\\).`); return r.svg;
});
def('punnett-test', 'Test cross: A? × aa', '', () => {
  const r = punnettSvg(['Aa'], ['aa'], (g) => (dom(g, 'A') ? 'dominant' : 'recessive'));
  setCap('punnett-test', `Crossing an unknown dominant-phenotype individual with a homozygous recessive: if it is Aa, offspring are ${r.counts.dominant} dominant : ${r.counts.recessive} recessive (1:1); if AA, all offspring are dominant.`); return r.svg;
});
def('punnett-incomplete', 'Incomplete dominance: snapdragon RW × RW', '', () => {
  const r = punnettSvg(['RW'], ['RW'], (g) => (g === 'RR' ? 'red' : g === 'WW' ? 'white' : 'pink'));
  setCap('punnett-incomplete', `Heterozygotes are intermediate (pink). Genotype and phenotype ratios coincide: red ${r.counts.red} : pink ${r.counts.pink} : white ${r.counts.white} (1:2:1). (Codominance, e.g. AB blood type, shows both alleles fully.)`); return r.svg;
});
def('punnett-xlinked', 'X-linked recessive cross: XᴴXʰ × XᴴY', 'Carrier mother × unaffected father (hemophilia). Daughters: ½ XᴴXᴴ, ½ XᴴXʰ (carriers, unaffected). Sons: ½ XᴴY unaffected, ½ XʰY affected. Overall \\(P(\\text{affected son})=\\dfrac14\\).', () => {
  const g1 = ['Xᴴ', 'Xʰ'], g2 = ['Xᴴ', 'Y'], cs = 80, o = 70; let s = text(o + cs, 16, 'XᴴXʰ × XᴴY', { bold: true });
  g2.forEach((g, j) => { s += text(o + j * cs + cs / 2, 40, g, { bold: true, color: C.b }); }); g1.forEach((g, i) => { s += text(o - 20, 54 + i * cs + cs / 2, g, { bold: true, color: C.a }); });
  g1.forEach((a, i) => g2.forEach((b, j) => { const gt = b === 'Y' ? a + 'Y' : [a, b].sort().reverse().join(''); const aff = gt === 'XʰY'; s += rect(o + j * cs, 54 + i * cs, cs, cs, { fill: aff ? C.e : b === 'Y' ? C.a : C.c, op: 0.2 }) + text(o + j * cs + cs / 2, 54 + i * cs + cs / 2 - 8, gt, { size: 14 }) + text(o + j * cs + cs / 2, 54 + i * cs + cs / 2 + 12, aff ? 'affected ♂' : b === 'Y' ? 'normal ♂' : gt.includes('ʰ') ? 'carrier ♀' : 'normal ♀', { size: 9.5 }); }));
  return svg(260, 230, s, 'X-linked Punnett');
});
def('blood-type', 'Multiple alleles & codominance: ABO blood type', 'Iᴬ and Iᴮ are codominant, both dominant to i. Cross Iᴬi × Iᴮi gives 1 AB (IᴬIᴮ) : 1 A (Iᴬi) : 1 B (Iᴮi) : 1 O (ii).', () => {
  const g1 = ['Iᴬ', 'i'], g2 = ['Iᴮ', 'i'], cs = 80, o = 70, ph = { 'IᴬIᴮ': 'AB', 'Iᴬi': 'A', 'iIᴮ': 'B', 'ii': 'O' }; let s = text(o + cs, 16, 'Iᴬi × Iᴮi', { bold: true });
  g2.forEach((g, j) => { s += text(o + j * cs + cs / 2, 40, g, { bold: true, color: C.b }); }); g1.forEach((g, i) => { s += text(o - 20, 54 + i * cs + cs / 2, g, { bold: true, color: C.a }); });
  g1.forEach((a, i) => g2.forEach((b, j) => { const gt = a + b, p = ph[gt]; s += rect(o + j * cs, 54 + i * cs, cs, cs, { fill: PAL[i * 2 + j], op: 0.2 }) + text(o + j * cs + cs / 2, 54 + i * cs + cs / 2 - 8, gt === 'iIᴮ' ? 'Iᴮi' : gt, { size: 14 }) + text(o + j * cs + cs / 2, 54 + i * cs + cs / 2 + 12, `type ${p}`, { size: 10 }); }));
  return svg(260, 230, s, 'ABO');
});
/* Pedigrees */
function pedigree(title, people, matings) {
  // people: {id: [x, gen, sex('m'|'f'), affected(0/1/'c' carrier)]}
  const X = (x) => 40 + x * 60, Y = (g) => 40 + g * 80, sz = 22; let s = text(250, 14, title, { bold: true, size: 11 });
  for (const [a, b, kids] of matings) { const [ax, ag] = people[a], [bx] = people[b]; s += line(X(ax), Y(ag), X(bx), Y(ag), { w: 1.4 }); const mx = (X(ax) + X(bx)) / 2; if (kids.length) { s += line(mx, Y(ag), mx, Y(ag) + 40, { w: 1.4 }); const kx = kids.map((k) => X(people[k][0])); s += line(Math.min(...kx), Y(ag) + 40, Math.max(...kx), Y(ag) + 40, { w: 1.4 }); kids.forEach((k) => { s += line(X(people[k][0]), Y(ag) + 40, X(people[k][0]), Y(people[k][1]) - sz / 2, { w: 1.4 }); }); } }
  for (const [id, [x, g, sex, aff]] of Object.entries(people)) { const fill = aff === 1 ? C.ink : 'var(--bg-elev,#fff)'; s += sex === 'm' ? rect(X(x) - sz / 2, Y(g) - sz / 2, sz, sz, { fill, op: 1, stroke: C.ink, w: 1.6 }) : circle(X(x), Y(g), sz / 2, { fill, op: 1, stroke: C.ink, w: 1.6 }); if (aff === 'c') s += circle(X(x), Y(g), 4, { fill: C.ink, stroke: 'none' }); s += text(X(x), Y(g) + 22, id, { size: 9, color: C.muted }); }
  return svg(520, 290, s, title);
}
def('pedigree-ar', 'Pedigree: autosomal recessive', 'Two unaffected parents (I-1, I-2, both Aa carriers) have an affected child (II-3): the trait skips a generation and affects both sexes. Each child of two carriers has \\(\\dfrac14\\) chance of being affected; unaffected II-2 has \\(\\dfrac23\\) chance of being a carrier.', () =>
  pedigree('autosomal recessive', { 'I-1': [2, 0, 'm', 0], 'I-2': [4, 0, 'f', 0], 'II-1': [1, 1, 'f', 0], 'II-2': [3, 1, 'm', 0], 'II-3': [5, 1, 'f', 1], 'II-4': [6.5, 1, 'm', 0], 'III-1': [5, 2, 'm', 0], 'III-2': [6.5, 2, 'f', 0] }, [['I-1', 'I-2', ['II-1', 'II-2', 'II-3']], ['II-3', 'II-4', ['III-1', 'III-2']]]));
def('pedigree-ad', 'Pedigree: autosomal dominant', 'Every affected individual has an affected parent (no skipped generations); both sexes affected and transmit it; affected Aa × aa gives \\(\\dfrac12\\) affected offspring. Two affected parents can have an unaffected child (II-4), ruling out recessive inheritance.', () =>
  pedigree('autosomal dominant', { 'I-1': [2, 0, 'm', 1], 'I-2': [4, 0, 'f', 1], 'II-1': [0.5, 1, 'm', 0], 'II-2': [1.5, 1, 'f', 1], 'II-3': [3, 1, 'm', 1], 'II-4': [4.5, 1, 'f', 0], 'III-1': [0.5, 2, 'f', 1], 'III-2': [1.5, 2, 'm', 0], 'III-3': [2.5, 2, 'm', 1] }, [['I-1', 'I-2', ['II-2', 'II-3', 'II-4']], ['II-1', 'II-2', ['III-1', 'III-2', 'III-3']]]));
def('pedigree-xr', 'Pedigree: X-linked recessive', 'Mostly males affected; affected males inherit the allele from carrier mothers (dot = carrier); no father-to-son transmission; all daughters of an affected male are carriers (III-2).', () =>
  pedigree('X-linked recessive', { 'I-1': [2, 0, 'm', 0], 'I-2': [4, 0, 'f', 'c'], 'II-1': [1, 1, 'm', 1], 'II-2': [2.5, 1, 'f', 'c'], 'II-3': [4, 1, 'f', 0], 'II-4': [5.5, 1, 'm', 1], 'II-5': [6.5, 1, 'f', 0], 'III-1': [5, 2, 'm', 0], 'III-2': [6.5, 2, 'f', 'c'] }, [['I-1', 'I-2', ['II-2', 'II-3', 'II-4']], ['II-4', 'II-5', ['III-1', 'III-2']]]));
def('linkage-map', 'Linked genes: recombination frequency map', 'Recombination frequencies from test crosses: A–B 8%, B–C 12%, A–C 20% ⇒ order A–B–C with 1 map unit = 1% recombination (8 + 12 = 20 cM). Linked genes violate the 9:3:3:1 expectation.', () => {
  const X = (cm) => 60 + cm * 18; let s = line(X(0) - 20, 80, X(20) + 20, 80, { w: 6, color: C.d });
  [['A', 0], ['B', 8], ['C', 20]].forEach(([g, c]) => { s += line(X(c), 66, X(c), 94, { w: 2 }) + text(X(c), 56, g, { bold: true, size: 14 }) + text(X(c), 108, `${c} cM`, { size: 10 }); });
  s += path(`M${X(0)},120 Q${X(4)},140 ${X(8)},120`, { stroke: C.a }) + text(X(4), 148, '8%', { color: C.a }) + path(`M${X(8)},120 Q${X(14)},140 ${X(20)},120`, { stroke: C.b }) + text(X(14), 148, '12%', { color: C.b }) + path(`M${X(0)},40 Q${X(10)},14 ${X(20)},40`, { stroke: C.c }) + text(X(10), 18, '20%', { color: C.c });
  return svg(480, 165, s, 'linkage map');
});
def('chi-square', 'Chi-square goodness of fit', '', () => {
  const obs = [315, 108, 101, 32], ratio = [9, 3, 3, 1], N = obs.reduce((a, b) => a + b), exp_ = ratio.map((r) => (N * r) / 16), chi = obs.reduce((s, o, i) => s + (o - exp_[i]) ** 2 / exp_[i], 0);
  setCap('chi-square', `Mendel's dihybrid pea data (N = ${N}): observed 315 : 108 : 101 : 32 vs expected 9:3:3:1 (${exp_.map((e) => fmt(e, 2)).join(', ')}). \\(\\chi^2=\\sum\\dfrac{(o-e)^2}{e}=${fmt(chi, 3)}\\) < 7.815 (df = 3, p = 0.05) ⇒ fail to reject the null hypothesis.`);
  return svg(480, 280, bars({ W: 480, H: 280, bars: obs.flatMap((o, i) => [{ label: ['A_B_', 'A_bb', 'aaB_', 'aabb'][i] + ' obs', v: o, color: C.a }, { label: 'exp', v: exp_[i], color: C.muted }]), showV: true, max: 360, ylabel: 'count' }).replace(/^<svg[^>]*>/, '').replace(/<\/svg>$/, '').replace(/<defs>[\s\S]*?<\/defs>/, ''), 'chi-square');
});
def('env-phenotype', 'Environmental effects on phenotype', 'Same genotype, different phenotype: hydrangea flower color depends on soil pH (acidic → blue because Al³⁺ is available; alkaline → pink). Reaction norms: phenotype vs environment for 3 genotypes (lines with different slopes = genotype × environment interaction).', () =>
  plot({ x: [4.5, 8], y: [0, 10], xstep: 0.5, xlabel: 'soil pH', ylabel: 'phenotype (e.g. blue index)', curves: [{ f: (p) => 9 - 2.2 * (p - 4.5), color: C.a, label: 'genotype 1', labelAt: [7.3, 1.8] }, { f: (p) => 7 - 1.2 * (p - 4.5), color: C.b, label: 'genotype 2', labelAt: [7.3, 3.4] }, { f: (p) => 5.5 - 0.2 * (p - 4.5), color: C.c, label: 'genotype 3', labelAt: [7.3, 5.4] }] }));
def('karyotype', 'Karyotype: trisomy 21', 'Homologous pairs arranged by size and centromere position; three copies of chromosome 21 indicates Down syndrome (47,XX,+21 or 47,XY,+21), usually from nondisjunction.', () => {
  let s = ''; for (let k = 1; k <= 22; k++) { const x = 20 + ((k - 1) % 11) * 44, y = k <= 11 ? 30 : 120, h = 60 - k * 1.8, n = k === 21 ? 3 : 2; for (let c = 0; c < n; c++) s += rect(x + c * 10, y + (60 - h), 7, h, { rx: 3, fill: k === 21 ? C.e : C.a, op: 0.5, stroke: k === 21 ? C.e : C.a, w: 0.8 }); s += text(x + 10, y + 72, String(k), { size: 9 }); }
  s += rect(20 + 0 * 44, 210, 7, 50, { rx: 3, fill: C.f, op: 0.5, stroke: C.f }) + rect(30, 210, 7, 50, { rx: 3, fill: C.f, op: 0.5, stroke: C.f }) + text(30, 272, 'XX', { size: 9 });
  return svg(500, 285, s, 'karyotype');
});

/* ================= MOLECULAR GENETICS ================= */
const CODON = (() => { const b = 'TCAG', aa = 'FFLLSSSSYY**CC*WLLLLPPPPHHQQRRRRIIIMTTTTNNKKSSRRVVVVAAAADDEEGGGG', m = {}; let i = 0; for (const x of b) for (const y of b) for (const z of b) m[x + y + z] = aa[i++]; return m; })();
const translate = (dna) => dna.match(/.{3}/g).map((c) => CODON[c]).join('');
const comp = { A: 'T', T: 'A', G: 'C', C: 'G' };
def('dna-structure', 'DNA double helix: antiparallel strands & base pairing', 'Sugar–phosphate backbones run 5′→3′ and 3′→5′ (antiparallel). Purines pair with pyrimidines: A=T (2 H-bonds), G≡C (3 H-bonds), so %A = %T and %G = %C (Chargaff). RNA uses ribose and U instead of T and is usually single-stranded.', () => {
  const top = 'ATGCGTACCTGA'; let s = text(20, 30, "5′", { bold: true }) + text(20, 130, "3′", { bold: true }) + text(500, 30, "3′", { bold: true }) + text(500, 130, "5′", { bold: true });
  [...top].forEach((b, i) => { const x = 50 + i * 38, c = comp[b], hb = b === 'G' || b === 'C' ? 3 : 2; s += rect(x - 12, 40, 24, 26, { rx: 3, fill: 'AG'.includes(b) ? C.a : C.b, op: 0.3, stroke: C.ink, w: 0.8 }) + text(x, 53, b, { bold: true }) + rect(x - 12, 94, 24, 26, { rx: 3, fill: 'AG'.includes(c) ? C.a : C.b, op: 0.3, stroke: C.ink, w: 0.8 }) + text(x, 107, c, { bold: true }); for (let h = 0; h < hb; h++) s += line(x - 6 + h * (12 / (hb - 1)), 68, x - 6 + h * (12 / (hb - 1)), 92, { color: C.muted, dash: '2 2', w: 1 }); });
  s += line(38, 36, 482, 36, { color: C.d, w: 3 }) + line(38, 124, 482, 124, { color: C.d, w: 3 }) + text(260, 150, 'purines (A, G) blue · pyrimidines (T, C) orange · dashes = H-bonds', { size: 10, color: C.muted });
  return svg(520, 165, s, 'DNA base pairing');
});
def('replication-fork', 'DNA replication fork', 'Helicase unwinds; topoisomerase relieves supercoiling; single-strand binding proteins stabilize; primase lays RNA primers; DNA polymerase III adds nucleotides only 5′→3′, so the leading strand is continuous and the lagging strand is made as Okazaki fragments, joined by DNA ligase after DNA pol I replaces primers.', () => {
  let s = line(20, 100, 200, 100, { color: C.d, w: 3 }) + line(20, 110, 200, 110, { color: C.d, w: 3 }) + path('M200,100 L480,30', { stroke: C.d, w: 3 }) + path('M200,110 L480,180', { stroke: C.d, w: 3 });
  s += circle(205, 105, 14, { fill: C.e, op: 0.35, stroke: C.e }) + text(205, 80, 'helicase', { size: 10 });
  s += path('M470,40 L230,100', { stroke: C.a, w: 3, arrow: false }) + arrow(470, 40, 250, 95, { color: C.a, w: 2.5 }) + text(350, 50, 'leading strand (continuous) 5′→3′', { size: 10, color: C.a });
  [[260, 120, 330, 138], [340, 140, 410, 158], [420, 160, 470, 172]].forEach(([x1, y1, x2, y2], i) => { s += arrow(x2, y2 - 8, x1, y1 - 8, { color: C.b, w: 2.5 }) + rect(x2 - 10, y2 - 14, 10, 8, { fill: C.f, op: 0.7, stroke: 'none' }); void i; });
  s += text(370, 190, 'lagging strand: Okazaki fragments (purple = RNA primer)', { size: 10, color: C.b }) + text(300, 125, 'ligase', { size: 9, color: C.muted }) + text(60, 90, 'parental DNA', { size: 10, color: C.muted });
  return svg(500, 205, s, 'replication fork');
});
def('transcription-splicing', 'Transcription and RNA processing', 'RNA polymerase reads the template strand 3′→5′ and builds pre-mRNA 5′→3′. In eukaryotes: 5′ GTP cap, 3′ poly-A tail, and spliceosomes remove introns and join exons (alternative splicing yields different proteins from one gene).', () => {
  let s = text(20, 20, 'gene (DNA)', { size: 10, anchor: 'start', color: C.muted }); const seg = [['promoter', 50, C.muted], ['E1', 60, C.a], ['intron', 50, C.d], ['E2', 70, C.a], ['intron', 40, C.d], ['E3', 60, C.a]]; let x = 20;
  for (const [t, w, c] of seg) { s += rect(x, 30, w, 24, { fill: c, op: 0.35, stroke: c }) + text(x + w / 2, 42, t, { size: 9 }); x += w; }
  s += arrow(200, 62, 200, 86) + text(210, 74, 'transcription', { size: 10, anchor: 'start' }); x = 70;
  for (const [t, w, c] of seg.slice(1)) { s += rect(x, 92, w, 20, { fill: c, op: 0.35, stroke: c }) + text(x + w / 2, 102, t, { size: 9 }); x += w; }
  s += text(20, 102, 'pre-mRNA', { size: 10, anchor: 'start', color: C.muted }) + arrow(200, 120, 200, 144) + text(210, 132, 'splicing + cap + tail', { size: 10, anchor: 'start' });
  s += circle(105, 160, 7, { fill: C.e, op: 0.6, stroke: C.e }) + text(105, 180, '5′ cap', { size: 9 }); x = 115; for (const w of [60, 70, 60]) { s += rect(x, 150, w, 20, { fill: C.a, op: 0.35, stroke: C.a }); x += w; } s += text(160 + 40, 160, 'E1 E2 E3', { size: 9 }) + text(x + 30, 160, 'AAAAA…', { size: 10, color: C.b }) + text(x + 30, 180, 'poly-A tail', { size: 9 });
  return svg(460, 195, s, 'transcription & splicing');
});
def('translation', 'Translation at the ribosome', '', () => {
  const dna = 'ATGGCTTGGAAACGTTAA', mrna = dna.replace(/T/g, 'U'), aa = translate(dna);
  setCap('translation', `mRNA 5′-${mrna}-3′ is read in codons by tRNAs with complementary anticodons (E, P, A sites). Using the standard genetic code it encodes ${[...aa].map((a) => ({ M: 'Met', A: 'Ala', W: 'Trp', K: 'Lys', R: 'Arg', '*': 'STOP' })[a]).join('–')}. AUG = start; UAA = stop (release factor).`);
  let s = `<ellipse cx="230" cy="70" rx="150" ry="46" fill="${C.d}" fill-opacity="0.15" stroke="${C.d}"/>` + `<ellipse cx="230" cy="140" rx="170" ry="34" fill="${C.d}" fill-opacity="0.22" stroke="${C.d}"/>`;
  const cod = mrna.match(/.{3}/g); cod.forEach((c, i) => { s += rect(40 + i * 64, 150, 60, 22, { fill: i === 2 ? C.a : C.muted, op: 0.2, stroke: C.ink, w: 0.8 }) + text(70 + i * 64, 161, c, { size: 11, bold: true }); });
  ['E', 'P', 'A'].forEach((t, i) => { s += text(70 + i * 64, 82, t, { size: 12, bold: true, color: C.ink }); });
  [[1, 'CGA'], [2, 'ACC']].forEach(([i, ac]) => { s += rect(40 + i * 64 + 10, 92, 40, 40, { rx: 6, fill: C.b, op: 0.25, stroke: C.b }) + text(70 + i * 64, 124, ac, { size: 10 }); });
  s += [...'MA'].map((a, i) => circle(90 + i * 34, 56, 14, { fill: C.c, op: 0.35, stroke: C.c }) + text(90 + i * 34, 56, { M: 'Met', A: 'Ala' }[a], { size: 9 })).join('') + text(410, 161, '3′', { bold: true }) + text(26, 161, '5′', { bold: true }) + text(230, 190, 'mRNA moves one codon per step →', { size: 10, color: C.muted });
  return svg(460, 200, s, 'translation');
});
function operon(title, states) {
  let s = text(260, 14, title, { bold: true }); const genes = states.genes;
  states.rows.forEach((r, k) => { const y = 40 + k * 105; s += text(10, y, r.label, { size: 11, bold: true, anchor: 'start', color: r.on ? C.c : C.e });
    let x = 10; for (const [t, w, c] of genes) { s += rect(x, y + 24, w, 24, { fill: c, op: 0.3, stroke: c }) + text(x + w / 2, y + 36, t, { size: 9.5 }); x += w; }
    if (r.repressorBound) s += `<ellipse cx="${10 + genes[0][1] + genes[1][1] + genes[2][1] / 2}" cy="${y + 20}" rx="22" ry="12" fill="${C.e}" fill-opacity="0.55" stroke="${C.e}"/>` + text(10 + genes[0][1] + genes[1][1] + genes[2][1] / 2, y + 2, r.repLabel, { size: 9, color: C.e });
    else s += `<ellipse cx="${80}" cy="${y + 78}" rx="22" ry="12" fill="${C.e}" fill-opacity="0.25" stroke="${C.e}"/>` + text(80, y + 96, r.repLabel, { size: 9, color: C.e });
    if (r.on) s += path(`M${10 + genes[0][1] + genes[1][1]},${y + 62} L${x - 10},${y + 62}`, { stroke: C.c, w: 2, arrow: true }) + text((10 + genes[0][1] + genes[1][1] + x) / 2, y + 74, 'mRNA → enzymes made', { size: 9.5, color: C.c });
    else s += text((10 + genes[0][1] + genes[1][1] + x) / 2, y + 64, 'RNA polymerase blocked → no transcription', { size: 9.5, color: C.e }); });
  return svg(540, 40 + states.rows.length * 105, s, title);
}
def('lac-operon', 'lac operon (inducible)', 'No lactose: active LacI repressor binds the operator → RNA polymerase blocked → lacZ, lacY, lacA off. Lactose present: allolactose binds the repressor, changing its shape so it releases the operator → genes transcribed. (Low glucose also raises cAMP–CAP, boosting transcription.)', () =>
  operon('lac operon — inducible (catabolic)', { genes: [['lacI', 50, C.muted], ['promoter', 60, C.d], ['operator', 60, C.f], ['lacZ', 110, C.a], ['lacY', 100, C.a], ['lacA', 90, C.a]], rows: [{ label: 'lactose absent', on: false, repressorBound: true, repLabel: 'active repressor' }, { label: 'lactose present', on: true, repressorBound: false, repLabel: 'repressor + allolactose (inactive)' }] }));
def('trp-operon', 'trp operon (repressible)', 'Low tryptophan: the TrpR repressor is inactive → trpE–trpA transcribed → tryptophan synthesized. High tryptophan: Trp acts as corepressor, activating the repressor, which binds the operator → transcription stops (negative feedback on an anabolic pathway).', () =>
  operon('trp operon — repressible (anabolic)', { genes: [['trpR', 50, C.muted], ['promoter', 60, C.d], ['operator', 60, C.f], ['trpE', 70, C.a], ['trpD', 70, C.a], ['trpC', 60, C.a], ['trpB', 50, C.a], ['trpA', 50, C.a]], rows: [{ label: 'tryptophan low', on: true, repressorBound: false, repLabel: 'inactive repressor' }, { label: 'tryptophan high', on: false, repressorBound: true, repLabel: 'repressor + Trp (corepressor)' }] }));
def('euk-regulation', 'Eukaryotic gene regulation', 'Chromatin: acetylation of histones loosens chromatin (more transcription); DNA methylation silences. Transcription factors and activators bind enhancers; DNA bends so the activator–mediator complex recruits RNA polymerase II at the promoter. Post-transcriptional: alternative splicing, miRNA, mRNA lifespan.', () => {
  let s = path('M20,150 C120,150 120,60 200,60 C280,60 280,150 480,150', { stroke: C.d, w: 3 }) + rect(150, 50, 80, 20, { fill: C.c, op: 0.35, stroke: C.c }) + text(190, 40, 'enhancer + activators', { size: 10 });
  s += rect(330, 140, 60, 20, { fill: C.muted, op: 0.35, stroke: C.muted }) + text(360, 175, 'promoter (TATA)', { size: 10 }) + `<ellipse cx="370" cy="118" rx="44" ry="20" fill="${C.a}" fill-opacity="0.3" stroke="${C.a}"/>` + text(370, 118, 'RNA pol II', { size: 10 }) + `<ellipse cx="270" cy="95" rx="40" ry="16" fill="${C.b}" fill-opacity="0.3" stroke="${C.b}"/>` + text(270, 95, 'mediator', { size: 10 });
  s += arrow(400, 150, 470, 150, { color: C.a }) + text(445, 135, 'gene', { size: 10 });
  [40, 70, 100].forEach((x) => { s += circle(x, 210, 12, { fill: C.f, op: 0.3, stroke: C.f }); }) ; s += text(70, 235, 'histones (acetylated → open)', { size: 9.5 });
  return svg(500, 245, s, 'eukaryotic regulation');
});
def('cell-specialization', 'Differential gene expression → cell specialization', 'All cells share the same genome; different combinations of transcription factors activate different genes. Example: albumin gene is expressed in liver (liver-specific activators present); crystallin in lens cells. Both cell types silence the other gene.', () => {
  const genes = ['albumin', 'crystallin', 'actin'], cells = [['liver cell', [1, 0, 1]], ['lens cell', [0, 1, 1]], ['neuron', [0, 0, 1]]];
  let s = genes.map((g, j) => text(170 + j * 100, 22, g, { size: 11, bold: true })).join('');
  cells.forEach(([c, on], i) => { s += text(20, 60 + i * 44, c, { anchor: 'start', size: 11 }); on.forEach((v, j) => { s += rect(130 + j * 100, 44 + i * 44, 80, 32, { rx: 4, fill: v ? C.c : C.muted, op: v ? 0.45 : 0.12 }) + text(170 + j * 100, 60 + i * 44, v ? 'ON' : 'off', { size: 11, bold: !!v }); }); });
  return svg(440, 180, s, 'differential gene expression');
});
def('mutations', 'Mutation types and their effect on protein', '', () => {
  const wt = 'ATGTTCGGAAAGTGA', sub = 'ATGTTCGGAGAGTGA', non = 'ATGTTCTGAAAGTGA', fs = 'ATGTTCGAAAGTGA' + 'A', sil = 'ATGTTTGGAAAGTGA';
  const tr = (d) => { let out = ''; for (let i = 0; i + 3 <= d.length; i += 3) { const a = CODON[d.slice(i, i + 3)]; out += a; if (a === '*') break; } return out; };
  const rows = [['wild type', wt], ['silent (C→T)', sil], ['missense (A→G)', sub], ['nonsense (G→T)', non], ['frameshift (del G)', fs]];
  setCap('mutations', `Each mutant DNA sequence is translated with the standard code: ${rows.map(([n, d]) => `${n}: ${tr(d)}`).join('; ')} (* = stop). Silent = same amino acid, missense = one changed amino acid, nonsense = premature stop, frameshift changes every downstream codon.`);
  let s = ''; rows.forEach(([n, d], i) => { const y = 20 + i * 36; s += text(10, y + 10, n, { anchor: 'start', size: 10.5, bold: true }); for (let k = 0; k < 5; k++) { const c = d.slice(k * 3, k * 3 + 3); if (c.length < 3) continue; const diff = c !== wt.slice(k * 3, k * 3 + 3); s += rect(150 + k * 66, y, 60, 22, { fill: diff ? C.e : C.muted, op: diff ? 0.3 : 0.1, stroke: C.ink, w: 0.6 }) + text(180 + k * 66, y + 8, c, { size: 10 }) + text(180 + k * 66, y + 30, CODON[c] === '*' ? 'STOP' : CODON[c], { size: 9, color: C.muted }); } });
  return svg(490, 205, s, 'mutation types');
});
def('gel-electrophoresis', 'Gel electrophoresis (computed migration)', '', () => {
  const ladder = [10000, 5000, 3000, 2000, 1500, 1000, 500, 250], d = (bp) => 20 + 52 * (4 - Math.log10(bp)) * 1.9; // migration ∝ −log(size)
  const lanes = [['ladder', ladder], ['suspect 1', [4200, 1800, 900]], ['crime scene', [3100, 1200, 650, 400]], ['suspect 2', [3100, 1200, 650, 400]]];
  setCap('gel-electrophoresis', 'DNA (negative) migrates toward the + electrode; distance is linear in log(size), so small fragments travel farthest. Band positions are computed from fragment sizes (bp) with the ladder as reference. Crime-scene profile matches suspect 2.');
  let s = rect(40, 20, 380, 280, { fill: C.muted, op: 0.08 }) + text(30, 30, '−', { size: 16, bold: true }) + text(30, 296, '+', { size: 16, bold: true });
  lanes.forEach(([n, frs], i) => { const x = 80 + i * 90; s += rect(x - 22, 22, 44, 8, { fill: C.ink, op: 0.6, stroke: 'none' }) + text(x, 312, n, { size: 10 }); frs.forEach((bp) => { s += rect(x - 20, 30 + d(bp), 40, 5, { fill: C.a, op: 0.85, stroke: 'none' }); if (i === 0) s += text(x - 28, 32 + d(bp), String(bp), { size: 8.5, anchor: 'end', color: C.ink }); }); });
  return svg(440, 322, s, 'gel electrophoresis');
});
idef('pcr', 'PCR amplification', '', (v) => {
  const ideal = (n) => Math.log10(2 ** n), real = (n) => { let x = 1; for (let i = 0; i < n; i++) x += v.eff * x * (1 - x / 1e11); return Math.log10(x); };
  return plot({ x: [0, 40], y: [0, 13], xstep: 5, xlabel: 'cycle number', ylabel: 'log₁₀ copies', curves: [{ f: ideal, n: 400, color: C.a, label: 'ideal 2ⁿ', labelAt: [32, 11.4] }, { pts: range(0, 40, 1).map((n) => [n, real(n)]), color: C.b, label: 'real (plateau)', labelAt: [30, 9.3] }] });
}, [
  { key: 'eff', label: '每循环扩增效率', min: 0.7, max: 1, step: 0.01, value: 0.95, unit: '' },
], (v) => `Each cycle (denature 95 °C, anneal ~55 °C, extend 72 °C with Taq polymerase) doubles the target: copies \\(=2^n\\) ideally — 30 cycles give \\(2^{30}\\approx1.07\\times10^9\\) copies from one. Real reactions plateau as primers/dNTPs run out (logistic curve, efficiency ${fmt(v.eff * 100, 0)}%).`);
def('biotech-plasmid', 'Recombinant DNA: plasmid cloning', 'The same restriction enzyme (e.g. EcoRI, G^AATTC) cuts the plasmid and donor DNA, leaving complementary sticky ends; DNA ligase seals the insert. Bacteria are transformed and selected on antibiotic (resistance gene on plasmid).', () => {
  let s = circle(110, 110, 70, { stroke: C.a, w: 4 }) + path('M110,40 A70 70 0 0 1 170,75', { stroke: C.e, w: 6 }) + text(170, 50, 'amp^R', { size: 10, color: C.e }) + text(110, 110, 'plasmid', { size: 11 }) + path('M50,80 l10,-6 M44,90 l10,-6', { stroke: C.ink }) + text(30, 70, 'EcoRI site', { size: 9 });
  s += arrow(190, 110, 240, 110) + text(215, 96, 'cut + ligate', { size: 9.5 });
  s += circle(330, 110, 70, { stroke: C.a, w: 4 }) + path('M268,78 A70 70 0 0 1 300,48', { stroke: C.c, w: 8 }) + text(262, 50, 'insert gene', { size: 10, color: C.c }) + text(330, 110, 'recombinant', { size: 11 }) + text(330, 126, 'plasmid', { size: 11 });
  s += text(220, 205, '5′-G  AATTC-3′  sticky ends', { size: 10, color: C.muted });
  return svg(420, 215, s, 'plasmid cloning');
});
def('central-dogma', 'Central dogma: DNA → RNA → protein', 'Replication (DNA → DNA), transcription (DNA → mRNA, nucleus), translation (mRNA → polypeptide, ribosome). Exceptions: reverse transcriptase (retroviruses, RNA → DNA).', () => {
  let s = box(20, 50, 110, 50, 'DNA', { fill: C.a, size: 14, bold: true }) + box(200, 50, 110, 50, 'mRNA', { fill: C.b, size: 14, bold: true }) + box(380, 50, 110, 50, 'protein', { fill: C.c, size: 14, bold: true });
  s += arrow(130, 68, 200, 68) + text(165, 56, 'transcription', { size: 10 }) + arrow(310, 75, 380, 75) + text(345, 63, 'translation', { size: 10 }) + path('M50,50 C40,10 100,10 90,48', { stroke: C.a, arrow: true }) + text(70, 12, 'replication', { size: 10 }) + arrow(200, 90, 130, 90, { color: C.muted, dash: '4 3' }) + text(165, 106, 'reverse transcription', { size: 9, color: C.muted });
  return svg(510, 125, s, 'central dogma');
});
def('macromolecules', 'Dehydration synthesis and hydrolysis', 'Monomers join by dehydration synthesis (−H₂O, covalent bond: glycosidic, peptide, ester, phosphodiester); hydrolysis (+H₂O) breaks polymers. Carbohydrates ← monosaccharides; proteins ← amino acids; nucleic acids ← nucleotides; lipids (triglyceride) ← glycerol + 3 fatty acids.', () => {
  let s = ''; const mono = (x, c, l) => circle(x, 50, 20, { fill: c, op: 0.3, stroke: c }) + text(x, 50, l, { size: 10 });
  s += mono(40, C.a, 'HO–●–H') + mono(100, C.a, 'HO–●–H') + arrow(130, 42, 220, 42, { color: C.c }) + text(175, 28, 'dehydration (−H₂O)', { size: 10, color: C.c }) + arrow(220, 62, 130, 62, { color: C.e }) + text(175, 80, 'hydrolysis (+H₂O)', { size: 10, color: C.e }) + mono(255, C.a, '') + mono(295, C.a, '') + line(275, 50, 275, 50) + text(275, 82, 'polymer + H₂O', { size: 10 });
  const T = [['carbohydrate', 'monosaccharide', 'glycosidic'], ['protein', 'amino acid', 'peptide'], ['nucleic acid', 'nucleotide', 'phosphodiester'], ['lipid (fat)', 'glycerol + fatty acids', 'ester']];
  T.forEach((r, i) => { const y = 110 + i * 24; s += r.map((t, j) => text(20 + j * 150, y, t, { size: 10.5, anchor: 'start', bold: j === 0 })).join(''); });
  return svg(480, 210, s, 'macromolecules');
});
def('protein-structure', 'Levels of protein structure', 'Primary: amino-acid sequence (peptide bonds). Secondary: α-helix / β-pleated sheet (backbone H-bonds). Tertiary: 3-D fold from R-group interactions (hydrophobic, ionic, H-bonds, disulfide bridges). Quaternary: multiple subunits (hemoglobin, 4 chains).', () => {
  let s = ''; for (let i = 0; i < 7; i++) s += circle(30 + i * 22, 60, 9, { fill: PAL[i % 6], op: 0.4, stroke: PAL[i % 6] }); s += text(96, 100, 'primary', { size: 10.5, bold: true });
  let d = 'M200,40'; for (let i = 0; i < 6; i++) d += ` q10,${i % 2 ? -20 : 20} 20,0`; s += path(d, { stroke: C.a, w: 3 }) + text(260, 100, 'secondary (α-helix)', { size: 10.5, bold: true });
  s += path('M340,40 C420,20 420,90 360,80 C320,72 330,40 380,50 C430,60 400,100 350,90', { stroke: C.b, w: 3 }) + text(380, 110, 'tertiary', { size: 10.5, bold: true });
  [[470, 45, C.a], [500, 45, C.b], [470, 75, C.b], [500, 75, C.a]].forEach(([x, y, c]) => { s += circle(x, y, 15, { fill: c, op: 0.35, stroke: c }); }); s += text(485, 110, 'quaternary', { size: 10.5, bold: true });
  return svg(540, 120, s, 'protein structure');
});

/* ================= EVOLUTION ================= */
function selectionFig(id, title, cap, after) {
  def(id, title, cap, () => plot({ x: [0, 20], y: [0, 1.1], xstep: 5, ystep: 0.2, xticks: [], xlabel: 'phenotype (e.g. beak depth)', ylabel: 'frequency', curves: [{ f: (x) => gauss(x, 10, 2.8), color: C.muted, dash: '6 3', label: 'before', labelAt: [3, 0.45] }, { f: after, color: C.a, w: 2.4, label: 'after selection', labelAt: [13.5, 1.0] }] }));
}
selectionFig('sel-stabilizing', 'Stabilizing selection', 'Intermediate phenotypes favored (e.g. human birth weight): mean unchanged, variance decreases (σ 2.8 → 1.5).', (x) => gauss(x, 10, 1.5));
selectionFig('sel-directional', 'Directional selection', 'One extreme favored (e.g. Galápagos finch beak depth after the 1977 drought): the mean shifts (10 → 13).', (x) => gauss(x, 13, 2.6));
selectionFig('sel-disruptive', 'Disruptive selection', 'Both extremes favored over intermediates (e.g. black-bellied seedcracker bill sizes): bimodal distribution.', (x) => 0.85 * (gauss(x, 5.5, 1.8) + gauss(x, 14.5, 1.8)));
def('artificial-selection', 'Artificial selection: Brassica oleracea', 'Breeders selecting different parts of wild mustard produced kale (leaves), cabbage (terminal bud), broccoli (flower stems), cauliflower (flower clusters), kohlrabi (stem) and Brussels sprouts (lateral buds) — all one species.', () => {
  const v = [['kale', 'leaves'], ['cabbage', 'terminal bud'], ['broccoli', 'stems & flowers'], ['cauliflower', 'flower clusters'], ['kohlrabi', 'stem'], ['Brussels sprouts', 'lateral buds']];
  let s = box(190, 10, 120, 36, 'wild mustard', { fill: C.c, bold: true }); v.forEach(([n, p], i) => { const x = 10 + i * 82; s += arrow(250, 46, x + 38, 96, { color: C.muted, w: 1 }) + box(x, 100, 76, 44, `${n}\n${p}`, { fill: PAL[i % 6], size: 8.5 }); });
  return svg(510, 155, s, 'artificial selection');
});
idef('hw-curves', 'Hardy–Weinberg genotype frequencies vs allele frequency', '', (v) => {
  const p = v.p, q = 1 - p;
  return plot({ x: [0, 1], y: [0, 1.05], xstep: 0.1, ystep: 0.2, xlabel: 'frequency of allele A (p)', ylabel: 'genotype frequency', curves: [{ f: (x) => x * x, color: C.a, label: 'AA = p²', labelAt: [0.8, 0.75] }, { f: (x) => 2 * x * (1 - x), color: C.c, label: 'Aa = 2pq', labelAt: [0.42, 0.56] }, { f: (x) => (1 - x) ** 2, color: C.b, label: 'aa = q²', labelAt: [0.06, 0.95] }], vlines: [{ x: p, label: `p = ${fmt(p, 2)}` }], points: [{ x: p, y: p * p, color: C.a, r: 3 }, { x: p, y: 2 * p * q, color: C.c, r: 3 }, { x: p, y: q * q, color: C.b, r: 3 }] });
}, [
  { key: 'p', label: '等位基因 A 频率 p', min: 0.05, max: 0.95, step: 0.01, value: 0.7 },
], (v) => {
  const p = v.p, q = 1 - p;
  return `\\(p^2+2pq+q^2=1\\) with \\(q=1-p\\). Heterozygote frequency \\(2pq\\) is maximal (0.5) at \\(p=q=0.5\\). Example: if \\(q^2=${fmt(q * q, 2)}\\) (recessive phenotype ${fmt(q * q * 100, 0)}%), \\(q=${fmt(q, 2)}\\), \\(p=${fmt(p, 2)}\\), carriers \\(2pq=${fmt(2 * p * q, 2)}\\).`;
});
def('hw-data', 'Hardy–Weinberg test on population data', '', () => {
  const obs = { AA: 360, Aa: 480, aa: 160 }, N = 1000, p = (2 * obs.AA + obs.Aa) / (2 * N), q = 1 - p, ex = { AA: p * p * N, Aa: 2 * p * q * N, aa: q * q * N }, chi = Object.keys(obs).reduce((s, k) => s + (obs[k] - ex[k]) ** 2 / ex[k], 0);
  setCap('hw-data', `Counts AA 360, Aa 480, aa 160 (N = 1000) ⇒ \\(p=\\dfrac{2(360)+480}{2000}=${fmt(p, 2)}\\), \\(q=${fmt(q, 2)}\\). Expected ${Object.values(ex).map((v) => fmt(v, 1)).join(', ')}; \\(\\chi^2=${fmt(chi, 3)}\\) (df = 1, critical 3.84) ⇒ consistent with HWE.`);
  return bars({ bars: ['AA', 'Aa', 'aa'].flatMap((k, i) => [{ label: `${k} obs`, v: obs[k], color: PAL[i] }, { label: 'exp', v: ex[k], color: C.muted }]), showV: true, ylabel: 'individuals', max: 560 });
});
def('genetic-drift', 'Genetic drift: small vs large populations', '', () => {
  const run = (N, seed) => { const r = mulberry(seed); let p = 0.5; const out = [[0, p]]; for (let g = 1; g <= 100; g++) { let k = 0; for (let i = 0; i < 2 * N; i++) if (r() < p) k++; p = k / (2 * N); out.push([g, p]); } return out; };
  const small = [1, 2, 3, 4].map((s) => run(10, s)), large = [5, 6].map((s) => run(500, s));
  setCap('genetic-drift', `Wright–Fisher simulation (binomial sampling of 2N alleles each generation, seeded). With N = 10, allele frequency wanders and often fixes (1) or is lost (0) within 100 generations; with N = 500 it stays near 0.5. Drift is strongest in small populations (bottleneck, founder effect).`);
  return plot({ x: [0, 100], y: [0, 1], ystep: 0.2, xstep: 20, xlabel: 'generation', ylabel: 'allele frequency p', curves: [...small.map((pts, i) => ({ pts, color: PAL[i + 1], w: 1.4 })), ...large.map((pts) => ({ pts, color: C.a, w: 2.6 }))], legend: [['N = 10 (4 runs)', C.b], ['N = 500 (2 runs)', C.a]], legendX: 300 });
});
def('bottleneck', 'Bottleneck effect', 'A disaster randomly removes most individuals; survivors\' allele frequencies differ from the original by chance (here 50% A → 20% A in the 5 survivors), reducing genetic diversity (e.g. northern elephant seals, cheetahs).', () => {
  let s = ''; const r = mulberry(11); const dots = (x0, n, pA) => { let t = ''; for (let i = 0; i < n; i++) t += circle(x0 + (i % 6) * 14, 40 + Math.floor(i / 6) * 14, 5, { fill: i < Math.round(n * pA) ? C.a : C.b, stroke: 'none' }); return t; }; void r;
  s += dots(20, 30, 0.5) + text(55, 130, 'original 50% A', { size: 10 }) + path('M120,40 L170,70 L170,90 L120,120', { stroke: C.ink, w: 2 }) + path('M220,40 L180,70 L180,90 L220,120', { stroke: C.ink, w: 2 });
  s += dots(240, 5, 0.2) + text(270, 130, 'survivors 20% A', { size: 10 }) + arrow(330, 70, 370, 70) + dots(380, 30, 0.2) + text(415, 130, 'new population 20% A', { size: 10 });
  return svg(480, 145, s, 'bottleneck');
});
def('homologous-structures', 'Evidence of evolution: homologous structures', 'Forelimbs of human, cat, whale and bat share the same bones (humerus, radius/ulna, carpals, phalanges) despite different functions — evidence of common ancestry (divergent evolution). Analogous structures (bird vs insect wings) arise by convergent evolution.', () => {
  const species = ['human', 'cat', 'whale', 'bat'], col = [C.a, C.b, C.c, C.d]; let s = '';
  species.forEach((sp, i) => { const x = 20 + i * 120, L = [[40, 8], [30, 6], [14, 10], [i === 3 ? 60 : i === 2 ? 30 : 24, 4]]; let y = 30; L.forEach(([h, w], k) => { s += rect(x + 40 - w * (k === 3 ? 3 : 1), y, w * (k === 3 ? 6 : 2), h, { rx: 3, fill: col[k], op: 0.45, stroke: col[k], w: 0.8 }); y += h + 4; }); s += text(x + 40, 190, sp, { size: 11, bold: true }); });
  ['humerus', 'radius/ulna', 'carpals', 'phalanges'].forEach((b, k) => { s += rect(20 + k * 110, 210, 12, 12, { fill: col[k], op: 0.6, stroke: 'none' }) + text(36 + k * 110, 216, b, { size: 10, anchor: 'start' }); });
  return svg(490, 230, s, 'homologous structures');
});
function tree(newick, o = {}) { // simple cladogram from nested arrays [name] or [[..],[..]]
  const leaves = []; const walk = (n, d) => { if (typeof n === 'string') { leaves.push(n); return { name: n, d, leaf: leaves.length - 1 }; } const kids = n.c.map((k) => walk(k, d + 1)); return { kids, d, trait: n.t, time: n.time }; };
  const root = walk(newick, 0); const maxD = (n) => (n.kids ? 1 + Math.max(...n.kids.map(maxD)) : 0); const D = maxD(root);
  const W = o.W || 480, H = 40 + leaves.length * 34, X = (d) => 30 + (d / D) * (W - 150), Y = (i) => 30 + i * 34; let s = '';
  const pos = (n) => { if (!n.kids) return Y(n.leaf); const ys = n.kids.map(pos); n.y = (Math.min(...ys) + Math.max(...ys)) / 2; return n.y; }; pos(root);
  const draw = (n) => { if (!n.kids) return; const x = X(n.d); n.kids.forEach((k) => { const ky = k.kids ? k.y : Y(k.leaf), kx = k.kids ? X(k.d) : X(D); s += line(x, ky, kx, ky, { w: 2 }) + line(x, n.y, x, ky, { w: 2 }); if (!k.kids) s += text(kx + 8, ky, k.name, { anchor: 'start', size: 11 }); draw(k); }); if (n.trait) s += rect(x + 6, n.y - 18, 8, 14, { fill: C.e, op: 0.7, stroke: 'none' }) + text(x + 18, n.y - 12, n.trait, { size: 9, anchor: 'start', color: C.e }); };
  draw(root); s += line(X(0) - 15, root.y, X(0), root.y, { w: 2 }) + text(X(0) - 18, root.y, 'root', { size: 9, anchor: 'end', color: C.muted });
  return svg(W, H, s, 'phylogenetic tree');
}
def('phylo-tree', 'Phylogenetic tree (cladogram) with shared derived characters', 'Vertebrate cladogram: each node is a common ancestor; red marks show where a shared derived character (synapomorphy) arose — vertebral column, jaws, four limbs, amniotic egg, hair/mammary glands. Lamprey is the outgroup. Sister taxa share the most recent common ancestor.', () =>
  tree({ c: ['lancelet', { t: 'vertebrae', c: ['lamprey', { t: 'jaws', c: ['shark', { t: 'lungs', c: ['frog', { t: 'amniotic egg', c: ['lizard', { t: 'hair', c: ['mouse', 'human'] }] }] }] }] }] }));
def('character-matrix', 'Building a tree from a character table', 'Presence (1) / absence (0) of derived characters. Taxa sharing more derived characters are more closely related: mouse and human share all four, frog lacks amniotic egg and hair, the lancelet (outgroup) lacks all.', () => {
  const taxa = ['lancelet', 'frog', 'lizard', 'mouse', 'human'], chars = ['vertebrae', 'four limbs', 'amniotic egg', 'hair'], M = [[0, 0, 0, 0], [1, 1, 0, 0], [1, 1, 1, 0], [1, 1, 1, 1], [1, 1, 1, 1]];
  let s = chars.map((c, j) => text(150 + j * 90, 20, c, { size: 10.5, bold: true })).join('');
  taxa.forEach((t, i) => { s += text(20, 50 + i * 28, t, { anchor: 'start', size: 11 }); M[i].forEach((v, j) => { s += rect(120 + j * 90, 38 + i * 28, 60, 24, { fill: v ? C.c : C.muted, op: v ? 0.4 : 0.1 }) + text(150 + j * 90, 50 + i * 28, String(v), { bold: true }); }); });
  return svg(490, 190, s, 'character matrix');
});
def('molecular-tree', 'Molecular evidence: cytochrome c differences', 'Number of amino-acid differences in cytochrome c relative to humans (104 residues): chimpanzee 0, rhesus monkey 1, dog 11, horse 12, chicken 13, rattlesnake 14, tuna 21, yeast 44. Fewer differences ⇒ more recent common ancestor.', () =>
  bars({ bars: [['chimp', 0], ['rhesus', 1], ['dog', 11], ['horse', 12], ['chicken', 13], ['snake', 14], ['tuna', 21], ['yeast', 44]].map(([l, v], i) => ({ label: l, v, color: PAL[i % 6] })), showV: true, ylabel: 'aa differences vs human', max: 50 }));
def('antibiotic-resistance', 'Continuing evolution: antibiotic resistance', '', () => {
  const s0 = 1e6, r0 = 10, rs = 0.5, kd = 1.6, gens = range(0, 20, 1), S = (g) => (g < 5 ? s0 * 1.0 : s0 * exp(-(kd - rs) * (g - 5))), R = (g) => Math.min(1e7, r0 * exp(rs * g));
  setCap('antibiotic-resistance', `Model population: drug added at t = 5. Susceptible cells (1 in 10⁵ resistant initially) decline at net rate \\(-${kd - rs}\\)/h; resistant cells grow at \\(+${rs}\\)/h. Resistant fraction rises from 0.001% to ${fmt((100 * R(20)) / (R(20) + S(20)), 1)}% by t = 20 — selection acts on pre-existing variation.`);
  return plot({ x: [0, 20], y: [0, 7.5], xstep: 5, xlabel: 'time (h)', ylabel: 'log₁₀ cells', curves: [{ f: (g) => Math.log10(S(g)), color: C.a, label: 'susceptible', labelAt: [10, 3.1] }, { f: (g) => Math.log10(R(g)), color: C.e, label: 'resistant', labelAt: [12, 4.4] }], vlines: [{ x: 5, label: 'antibiotic added' }] });
});
def('speciation', 'Speciation: allopatric vs sympatric; gradualism vs punctuated equilibrium', 'Allopatric: a geographic barrier splits the population, gene flow stops, populations diverge. Sympatric: reproductive isolation within the same area (polyploidy, habitat or sexual selection). Tempo: gradualism (steady change) vs punctuated equilibrium (stasis then rapid change).', () => {
  let s = text(110, 16, 'allopatric', { bold: true, size: 11 }) + `<ellipse cx="110" cy="80" rx="90" ry="45" fill="${C.a}" fill-opacity="0.12" stroke="${C.a}"/>` + path('M105,35 C125,60 95,95 115,125', { stroke: C.e, w: 6 }) + text(110, 140, 'barrier (river, mountain)', { size: 9.5, color: C.e });
  s += text(330, 16, 'tempo of change', { bold: true, size: 11 }) + line(250, 140, 430, 140, { color: C.muted }) + line(250, 140, 250, 30, { color: C.muted }) + text(240, 85, 'time', { size: 9, rotate: -90 }) + text(340, 152, 'morphology', { size: 9 });
  s += path('M290,140 L260,40 M290,140 L320,40', { stroke: C.a, w: 2 }) + text(290, 30, 'gradual', { size: 9.5, color: C.a }) + path('M390,140 L390,110 L360,105 L360,40 M390,110 L420,105 L420,40', { stroke: C.b, w: 2 }) + text(390, 30, 'punctuated', { size: 9.5, color: C.b });
  return svg(450, 160, s, 'speciation');
});
def('extinction', 'Extinction through time: the "Big Five"', 'Approximate % of marine genera lost: end-Ordovician (~444 Mya) ≈57%, Late Devonian (~372) ≈50%, end-Permian (~252) ≈83%, end-Triassic (~201) ≈47%, end-Cretaceous (~66) ≈40%. Adaptive radiations follow as survivors fill vacant niches.', () =>
  plot({ x: [-500, 0], y: [0, 100], xstep: 100, xlabel: 'millions of years ago', ylabel: '% genera extinct', xfmt: (v) => String(-v), points: [[-444, 57, 'O'], [-372, 50, 'D'], [-252, 83, 'P'], [-201, 47, 'Tr'], [-66, 40, 'K'], ].map(([x, y, l]) => ({ x, y, label: l, color: C.e, r: 5 })), rects: [[-444, 57], [-372, 50], [-252, 83], [-201, 47], [-66, 40]].map(([x, y]) => ({ x0: x - 5, x1: x + 5, y, color: C.e })) }));
def('origins-life', 'Origins of life: timeline', 'Earth forms ≈4.6 bya; oldest prokaryote fossils (stromatolites) ≈3.5 bya; O₂ accumulates (Great Oxidation) ≈2.4 bya; eukaryotes ≈1.8 bya; multicellular eukaryotes ≈1.2 bya; Cambrian explosion ≈0.54 bya. Miller–Urey (1953) showed organic monomers form abiotically; RNA world hypothesis: RNA as first genetic material and catalyst.', () =>
  plot({ W: 520, H: 200, x: [-4.8, 0.2], y: [0, 1], grid: false, yticks: [], xstep: 0.5, xlabel: 'billions of years ago', xfmt: (v) => fmt(-v, 1), points: [[-4.6, 'Earth forms'], [-3.5, 'prokaryotes'], [-2.4, 'O₂ rises'], [-1.8, 'eukaryotes'], [-1.2, 'multicellular'], [-0.54, 'Cambrian']].map(([x, l], i) => ({ x, y: 0.25 + (i % 3) * 0.22, label: l, color: PAL[i], anchor: 'middle', dx: 0, dy: -14 })), segs: [[-4.8, 0.08, 0.2, 0.08, C.ink, 3]] }));
def('variation', 'Variation in populations: continuous trait distribution', 'Polygenic traits (e.g. height) show a continuous, roughly normal distribution: with n = 6 additive loci, the number of "+" alleles is binomial(12, 0.5), giving 13 phenotype classes — the basis on which natural selection acts.', () => {
  const n = 12; return bars({ bars: range(0, n, 1).map((k) => ({ label: String(k), v: fact(n) / (fact(k) * fact(n - k)) / 2 ** n, color: C.a })), xlabel: 'number of + alleles', ylabel: 'proportion', max: 0.25 });
});

/* ================= ECOLOGY ================= */
idef('pop-growth', 'Population growth: exponential vs logistic', '', (v) => {
  const r = v.r, K = v.K, N0 = 10, L = (t) => K / (1 + ((K - N0) / N0) * exp(-r * t));
  return plot({ x: [0, 20], y: [0, Math.max(650, K * 1.3)], xstep: 5, xlabel: 'time (generations)', ylabel: 'population size N', hlines: [{ y: K, label: `K = ${fmt(K, 0)}` }, { y: K / 2, label: 'K/2' }], curves: [{ f: (t) => N0 * exp(r * t), color: C.e, label: 'exponential', labelAt: [8.7, Math.max(610, K * 1.05)] }, { f: L, color: C.a, label: 'logistic', labelAt: [14, K * 0.94] }], points: [{ x: log((K - N0) / N0) / r, y: K / 2, color: C.a, label: 'max growth rate' }] });
}, [
  { key: 'r', label: '内禀增长率 r', min: 0.3, max: 0.8, step: 0.05, value: 0.5 },
  { key: 'K', label: '环境容纳量 K', min: 300, max: 800, step: 50, value: 500 },
], (v) => `Exponential \\(\\dfrac{dN}{dt}=r_{max}N\\) (J-curve) vs logistic \\(\\dfrac{dN}{dt}=r_{max}N\\dfrac{K-N}{K}\\) (S-curve), \\(r=${fmt(v.r, 2)}\\), \\(K=${fmt(v.K, 0)}\\), \\(N_0=10\\). Logistic growth is fastest at \\(N=\\dfrac{K}{2}\\) and levels off at carrying capacity.`);
idef('pop-oscillation', 'Logistic growth with overshoot (time lag)', '', (v) => {
  const pts = [[0, 20]]; let N = 20; for (let t = 1; t <= 30; t++) { N = Math.max(0, N + v.r * N * (1 - N / 500)); pts.push([t, N]); }
  return plot({ x: [0, 30], y: [0, 700], xstep: 5, xlabel: 'time', ylabel: 'N', hlines: [{ y: 500, label: 'K' }], curves: [{ pts, color: C.a }], points: pts.map(([x, y]) => ({ x, y, r: 2.5, color: C.a })) });
}, [
  { key: 'r', label: '离散增长率 r', min: 1.3, max: 2.2, step: 0.1, value: 1.9 },
], (v) => `Discrete logistic \\(N_{t+1}=N_t+rN_t\\left(1-\\dfrac{N_t}{K}\\right)\\) with \\(r=${fmt(v.r, 1)}\\), \\(K=500\\): ${v.r < 2 ? 'the population overshoots and oscillates around K (damped)' : 'the population settles into a stable 2-cycle rather than damping to K; larger r approaches chaos'} — as in reindeer on St. Paul Island or Daphnia cultures.`);
def('survivorship', 'Survivorship curves', 'Log scale of survivors from 1000 newborns. Type I (humans, large mammals): low early mortality, most die old. Type II (many birds, lizards): constant mortality rate → straight line on log scale. Type III (oysters, many fish, plants): very high juvenile mortality.', () =>
  plot({ x: [0, 100], y: [0, 3.2], ystep: 1, xstep: 20, xlabel: 'percentage of maximum life span', ylabel: 'survivors (log₁₀ of 1000)', yfmt: (v) => String(10 ** v), curves: [{ f: (x) => Math.log10(1000 * (1 - (x / 100) ** 6) + 1e-9), dom: [0, 99.9], color: C.a, label: 'Type I', labelAt: [62, 3.1] }, { f: (x) => 3 - 0.028 * x, color: C.b, label: 'Type II', labelAt: [55, 1.6] }, { f: (x) => Math.log10(1000 * exp(-0.35 * x) + 1.2 * (1 - x / 100)), color: C.c, label: 'Type III', labelAt: [20, 0.6] }] }));
def('density-dependence', 'Density-dependent vs density-independent factors', 'Density-dependent: per-capita birth rate falls and death rate rises with density (competition, disease, predation); they cross at the equilibrium density (≈ K). Density-independent factors (weather, fire) kill a constant fraction regardless of density.', () => {
  const b = (N) => 0.8 - 0.0012 * N, d = (N) => 0.2 + 0.0008 * N, K = 0.6 / 0.002;
  return plot({ x: [0, 600], y: [0, 1], ystep: 0.2, xstep: 100, xlabel: 'population density N', ylabel: 'per-capita rate', curves: [{ f: b, color: C.a, label: 'birth rate', labelAt: [430, 0.36] }, { f: d, color: C.e, label: 'death rate (dens.-dep.)', labelAt: [360, 0.62] }, { f: () => 0.15, color: C.muted, dash: '5 3', label: 'density-independent', labelAt: [380, 0.1] }], points: [{ x: K, y: b(K), color: C.ink, label: `equilibrium N = ${K}` }] });
});
idef('predator-prey', 'Predator–prey cycles (Lotka–Volterra)', '', (v) => {
  const sol = rk4((t, [H, P]) => [v.a * H - 0.1 * H * P, 0.0075 * H * P - v.d * P], 0, [40, 9], 40, 4000);
  return plot({ x: [0, 40], y: [0, 260], xstep: 5, xlabel: 'time', ylabel: 'population', curves: [{ pts: sol.map((p) => [p[0], p[1]]), color: C.c, label: 'prey (hare)', labelAt: [1, 245] }, { pts: sol.map((p) => [p[0], p[2] * 5]), color: C.e, label: 'predator ×5 (lynx)', labelAt: [12, 245] }] });
}, [
  { key: 'a', label: '猎物增长率 a', min: 0.8, max: 1.2, step: 0.05, value: 1 },
  { key: 'd', label: '捕食者死亡率 d', min: 0.4, max: 0.8, step: 0.05, value: 0.6 },
], (v) => `\\(\\dfrac{dH}{dt}=aH-bHP\\), \\(\\dfrac{dP}{dt}=cbHP-dP\\) with \\(a=${fmt(v.a, 2)}\\), \\(b=0.1\\), \\(cb=0.0075\\), \\(d=${fmt(v.d, 2)}\\), solved numerically (RK4). Predator peaks lag prey peaks by about a quarter cycle (cf. lynx–hare data).`);
idef('competition', 'Interspecific competition & competitive exclusion', '', (v) => {
  const sol = rk4((t, [x, y]) => [0.8 * x * (1 - (x + v.beta * y) / 200), 0.6 * y * (1 - (y + v.alpha * x) / 150)], 0, [5, 5], 40, 2000);
  return plot({ x: [0, 40], y: [0, 230], xstep: 5, xlabel: 'days', ylabel: 'density', curves: [{ pts: sol.map((p) => [p[0], p[1]]), color: C.a, label: 'P. aurelia', labelAt: [28, 212] }, { pts: sol.map((p) => [p[0], p[2]]), color: C.b, label: 'P. caudatum', labelAt: [25, 30] }, { f: (t) => 150 / (1 + 29 * exp(-0.6 * t)), color: C.b, dash: '4 3', label: 'caudatum alone', labelAt: [25, 162] }] });
}, [
  { key: 'alpha', label: 'α（caudatum 受 aurelia 影响）', min: 0.5, max: 2.5, step: 0.1, value: 1.5 },
  { key: 'beta', label: 'β（aurelia 受 caudatum 影响）', min: 0.3, max: 2, step: 0.1, value: 0.7 },
], (v) => `Gause's Paramecium: grown separately, both P. aurelia and P. caudatum reach carrying capacity; together (Lotka–Volterra competition, α = ${fmt(v.alpha, 1)}, β = ${fmt(v.beta, 1)}, RK4), P. aurelia excludes P. caudatum.`);
def('energy-pyramid', 'Energy pyramid (≈10% transfer)', 'Starting with 10,000 kcal/m²/yr captured by producers, ~10% passes to each level: 1,000 (primary consumers), 100 (secondary), 10 (tertiary). The remaining ~90% is lost as heat from respiration and in undigested waste — limiting food chains to 4–5 levels.', () => {
  const L = [['producers', 10000, C.c], ['primary consumers', 1000, C.d], ['secondary consumers', 100, C.b], ['tertiary consumers', 10, C.e]]; let s = '';
  L.forEach(([n, e, c], i) => { const w = 60 + (4 - Math.log10(e)) * 0 + (Math.log10(e)) * 100, y = 210 - i * 50; s += rect(250 - w / 2, y, w, 44, { fill: c, op: 0.35, stroke: c }) + text(250, y + 14, n, { size: 10.5, bold: true }) + text(250, y + 30, `${e.toLocaleString('en-US')} kcal`, { size: 10 }); if (i) s += text(470, y + 46, '×10%', { size: 10, color: C.muted }); });
  return svg(520, 265, s, 'energy pyramid');
});
def('food-web', 'Food web', 'Arrows point in the direction of energy flow (from eaten to eater). Grass and phytoplankton are producers; grasshopper, rabbit, zooplankton are primary consumers; frog, fish, snake secondary; hawk is an apex (tertiary/quaternary) consumer; decomposers recycle nutrients from all levels.', () => {
  const N = { grass: [80, 240, C.c], phyto: [380, 240, C.c], grasshopper: [40, 170, C.d], rabbit: [150, 170, C.d], zooplankton: [380, 170, C.d], frog: [60, 100, C.b], fish: [380, 100, C.b], snake: [180, 100, C.b], hawk: [240, 30, C.e], decomposers: [470, 30, C.muted] };
  const E = [['grass', 'grasshopper'], ['grass', 'rabbit'], ['phyto', 'zooplankton'], ['grasshopper', 'frog'], ['zooplankton', 'fish'], ['frog', 'snake'], ['rabbit', 'snake'], ['rabbit', 'hawk'], ['snake', 'hawk'], ['fish', 'hawk'], ['frog', 'fish']];
  let s = ''; for (const [a, b] of E) { const [x1, y1] = N[a], [x2, y2] = N[b], dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy); s += arrow(x1 + (dx / L) * 22, y1 + (dy / L) * 16, x2 - (dx / L) * 26, y2 - (dy / L) * 18, { color: C.muted, w: 1.3 }); }
  for (const [n, [x, y, c]] of Object.entries(N)) s += box(x - 42, y - 14, 84, 28, n === 'phyto' ? 'phytoplankton' : n, { fill: c, size: 9.5 });
  return svg(520, 270, s, 'food web');
});
def('trophic-biomass', 'Biomass and numbers pyramids', 'Biomass (g/m²) in a temperate grassland: producers 800, primary consumers 37, secondary 11, tertiary 1.5. Some aquatic systems show an inverted biomass pyramid (phytoplankton 4 g/m² supporting zooplankton 21 g/m²) because producers turn over rapidly.', () =>
  bars({ bars: [['producers', 800], ['primary', 37], ['secondary', 11], ['tertiary', 1.5]].map(([l, v], i) => ({ label: l, v: Math.log10(v), color: PAL[i] })), ylabel: 'log₁₀ biomass (g/m²)', max: 3.5 }));
def('species-area', 'Species–area relationship', '\\(S=cA^z\\) with \\(c=10\\), \\(z=0.25\\) (typical for islands): a 10× increase in area roughly doubles species richness (\\(10^{0.25}\\approx1.78\\)). Linear on log–log axes, slope z.', () =>
  plot({ x: [0, 5], y: [0, 2.5], xstep: 1, ystep: 0.5, xlabel: 'log₁₀ area (km²)', ylabel: 'log₁₀ species', curves: [{ f: (la) => 1 + 0.25 * la, color: C.a }], points: [0, 1, 2, 3, 4, 5].map((la) => ({ x: la, y: 1 + 0.25 * la, r: 3, label: String(Math.round(10 * 10 ** (0.25 * la))) })) }));
def('diversity-index', 'Biodiversity: Simpson\'s diversity index', '', () => {
  const A = [25, 25, 25, 25], B = [85, 5, 5, 5], D = (n) => { const N = n.reduce((a, b) => a + b); return 1 - n.reduce((s, x) => s + (x * (x - 1)) / (N * (N - 1)), 0); };
  setCap('diversity-index', `Simpson's index \\(D=1-\\sum\\dfrac{n(n-1)}{N(N-1)}\\). Two communities with the same 4 species and N = 100: even (25/25/25/25) → D = ${fmt(D(A), 3)}; uneven (85/5/5/5) → D = ${fmt(D(B), 3)}. Same richness, lower evenness ⇒ lower diversity and resilience.`);
  return bars({ bars: [...A.map((v, i) => ({ label: `A sp${i + 1}`, v, color: C.a })), ...B.map((v, i) => ({ label: `B sp${i + 1}`, v, color: C.b }))], showV: true, ylabel: 'individuals', max: 100 });
});
def('succession', 'Ecological succession', 'Primary succession on bare rock: lichens/mosses (pioneers) build soil → grasses → shrubs → fast-growing trees → climax forest. Species richness and biomass increase over time; secondary succession (after fire) starts with soil and proceeds faster. Curves: logistic models of biomass and richness.', () =>
  plot({ x: [0, 200], y: [0, 110], xstep: 50, xlabel: 'years', ylabel: 'relative amount', curves: [{ f: (t) => 100 / (1 + 50 * exp(-0.04 * t)), color: C.c, label: 'biomass', labelAt: [150, 102] }, { f: (t) => 80 / (1 + 12 * exp(-0.05 * t)), color: C.a, label: 'species richness', labelAt: [140, 72] }], texts: [[10, 15, 'lichens', C.muted], [55, 30, 'grasses', C.muted], [95, 55, 'shrubs', C.muted], [170, 90, 'forest', C.muted]] }));
def('disruption', 'Ecosystem disruption: invasive species', 'Model: an invasive species introduced at year 5 grows logistically (r = 0.6, K = 900) and, competing for the same resource (α = 1.2), drives the native species from its carrying capacity (800) toward local extinction (Lotka–Volterra competition, RK4).', () => {
  const sol = rk4((t, [n, iv]) => [0.4 * n * (1 - (n + 0.5 * iv) / 800), (t < 5 ? 0 : 0.6 * iv * (1 - (iv + 1.2 * n * 0) / 900)) - (t < 5 ? 0 : 0)], 0, [800, 2], 40, 4000);
  // native suffers competition α = 1.2 from invader; invader barely affected
  const sol2 = rk4((t, [n, iv]) => [0.4 * n * (1 - (n + 1.2 * iv) / 800), t < 5 ? 0 : 0.6 * iv * (1 - (iv + 0.3 * n) / 900)], 0, [800, 2], 40, 4000); void sol;
  return plot({ x: [0, 40], y: [0, 1000], xstep: 5, xlabel: 'years', ylabel: 'population', curves: [{ pts: sol2.map((p) => [p[0], p[1]]), color: C.c, label: 'native', labelAt: [3, 850] }, { pts: sol2.map((p) => [p[0], p[2]]), color: C.e, label: 'invasive', labelAt: [25, 940] }], vlines: [{ x: 5, label: 'introduced' }] });
});
def('behavior-taxis', 'Responses to the environment: taxis vs kinesis', 'Kinesis: change in speed or turning rate in response to a stimulus (woodlice move faster in dry areas, slower in humid ones → aggregate in humid). Taxis: directed movement toward/away from a stimulus (positive phototaxis). Choice-chamber data: % of 20 pill bugs in the wet side over 10 min.', () => {
  const t = range(0, 10, 1), wet = t.map((m) => 50 + 40 * (1 - exp(-0.35 * m)));
  return plot({ x: [0, 10], y: [0, 100], xstep: 1, ystep: 20, xlabel: 'time (min)', ylabel: '% in wet chamber', hlines: [{ y: 50, label: 'random (50%)' }], curves: [{ pts: t.map((m, i) => [m, wet[i]]), color: C.a }], points: t.map((m, i) => ({ x: m, y: Math.round((wet[i] / 100) * 20) * 5, r: 3.5, color: C.a })) });
});
def('photoperiod', 'Plant responses: photoperiodism', 'Short-day plants (e.g. chrysanthemum) flower when the uninterrupted night exceeds a critical length (here 12 h); long-day plants (e.g. spinach) flower when the night is shorter than critical. A flash of light during the night resets the dark period.', () => {
  let s = ''; const bar = (y, dark, flash, lbl, sd, ld) => { const X = (h) => 100 + h * 15; s += rect(X(0), y, X(24) - X(0), 22, { fill: C.day, op: 1, stroke: C.muted, w: 1 }) + rect(X(24 - dark), y, X(24) - X(24 - dark), 22, { fill: C.night, op: 1, stroke: 'none' }); if (flash) s += rect(X(24 - dark / 2) - 2, y, 4, 22, { fill: C.day, op: 1, stroke: 'none' }); s += rect(X(0), y, X(24) - X(0), 22, { fill: 'none', stroke: C.muted, w: 1 }) + text(10, y + 11, lbl, { size: 10, anchor: 'start' }) + text(X(24) + 10, y + 5, `SDP: ${sd}`, { size: 9.5, anchor: 'start' }) + text(X(24) + 10, y + 18, `LDP: ${ld}`, { size: 9.5, anchor: 'start' }); };
  bar(20, 9, false, 'short night', 'no', 'flowers'); bar(60, 15, false, 'long night', 'flowers', 'no'); bar(100, 15, true, 'night + flash', 'no', 'flowers');
  s += line(100 + 12 * 15, 12, 100 + 12 * 15, 130, { color: C.e, dash: '4 3' }) + text(100 + 12 * 15, 140, 'critical night = 12 h', { size: 9.5, color: C.e });
  return svg(560, 150, s, 'photoperiodism');
});

/* ================= HS BIO PREREQS ================= */
def('experiment-design', 'Experimental design: control vs treatment with error bars', 'Mean plant height (cm, n = 10 each) ± 2 SEM: control 12.4 ± 0.8, fertilizer 18.1 ± 1.1. Non-overlapping ±2 SEM bars suggest a significant difference. IV = fertilizer (x-axis), DV = height (y-axis); controlled variables: light, water, pot size.', () =>
  bars({ bars: [{ label: 'control', v: 12.4, err: 0.8, color: C.muted }, { label: 'fertilizer', v: 18.1, err: 1.1, color: C.c }], showV: true, ylabel: 'mean height (cm)', xlabel: 'treatment (independent variable)', max: 22 }));
def('body-systems', 'Human body systems working together', 'Respiratory (O₂ in, CO₂ out) ↔ circulatory (transport) ↔ digestive (nutrients) ↔ excretory (wastes); nervous and endocrine systems coordinate; muscular + skeletal for movement; immune for defense — all maintaining homeostasis.', () => {
  const sys = ['respiratory', 'digestive', 'excretory', 'nervous', 'endocrine', 'immune'], cx = 250, cy = 120; let s = box(cx - 60, cy - 20, 120, 40, 'circulatory', { fill: C.e, bold: true });
  sys.forEach((n, i) => { const a = (i / sys.length) * 2 * PI - PI / 2, x = cx + 180 * cos(a), y = cy + 90 * sin(a); s += line(cx + 60 * cos(a), cy + 22 * sin(a), x - 40 * cos(a), y - 14 * sin(a), { color: C.muted, w: 1.2 }) + box(x - 48, y - 15, 96, 30, n, { fill: PAL[i], size: 10 }); });
  return svg(500, 240, s, 'body systems');
});
def('photo-resp-cycle', 'Photosynthesis and respiration are complementary', '6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂ (chloroplast); C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP (mitochondria). Products of one are reactants of the other; energy enters as light and leaves as heat.', () => {
  let s = box(30, 70, 150, 60, 'chloroplast\nphotosynthesis', { fill: C.c, size: 11 }) + box(320, 70, 150, 60, 'mitochondrion\nrespiration', { fill: C.e, size: 11 });
  s += path('M180,85 Q250,30 320,85', { stroke: C.a, arrow: true, w: 2 }) + text(250, 40, 'C₆H₁₂O₆ + O₂', { size: 11 }) + path('M320,115 Q250,170 180,115', { stroke: C.b, arrow: true, w: 2 }) + text(250, 168, 'CO₂ + H₂O', { size: 11 }) + text(105, 30, 'light energy in', { size: 10, color: C.d }) + text(395, 160, 'ATP + heat out', { size: 10, color: C.e });
  return svg(500, 185, s, 'photosynthesis & respiration cycle');
});
def('food-chain', 'Food chain and trophic levels', 'Sun → grass (producer) → grasshopper (primary consumer) → frog (secondary) → snake (tertiary) → hawk (quaternary). Each arrow means "is eaten by" and shows energy flow.', () => {
  const L = [['grass', C.c], ['grasshopper', C.d], ['frog', C.b], ['snake', C.a], ['hawk', C.e]]; let s = '';
  L.forEach(([n, c], i) => { s += box(10 + i * 100, 40, 84, 36, n, { fill: c }) + text(52 + i * 100, 92, ['producer', '1° consumer', '2° consumer', '3° consumer', '4° consumer'][i], { size: 9.5, color: C.muted }); if (i) s += arrow(i * 100 - 6, 58, 10 + i * 100 - 2, 58); });
  return svg(510, 110, s, 'food chain');
});

/* ================= SINGLE-TOPIC VARIANTS (2026-11-06) ================= */
/* Each of these adds a second, exam-style representation to a topic that previously
   mounted only one visual: a particle view, comparison table, data plot or diagram. */
def('stoich-particles', 'Limiting reagent: particle view', '4 H₂ + 3 O₂ → 4 H₂O + O₂. Eight H atoms and six O atoms appear on both sides. H₂ is limiting because 4 H₂ can consume only 2 O₂, leaving 1 O₂ unreacted; the balanced equation fixes the 2:1:2 mole ratio.', () => {
  const h2 = (x, y) => circle(x - 7, y, 6, { fill: C.muted, op: 0.45, stroke: C.muted, w: 1 }) + circle(x + 7, y, 6, { fill: C.muted, op: 0.45, stroke: C.muted, w: 1 }) + line(x - 1, y, x + 1, y, { w: 1 });
  const o2 = (x, y) => circle(x - 10, y, 9, { fill: C.e, op: 0.35, stroke: C.e, w: 1 }) + circle(x + 10, y, 9, { fill: C.e, op: 0.35, stroke: C.e, w: 1 }) + line(x - 1, y, x + 1, y, { w: 1 });
  const h2o = (x, y) => circle(x, y, 11, { fill: C.e, op: 0.32, stroke: C.e, w: 1 }) + circle(x - 14, y - 14, 6, { fill: C.muted, op: 0.45, stroke: C.muted, w: 1 }) + circle(x + 14, y - 14, 6, { fill: C.muted, op: 0.45, stroke: C.muted, w: 1 }) + line(x, y, x - 10, y - 10, { w: 1 }) + line(x, y, x + 10, y - 10, { w: 1 });
  let s = text(20, 30, 'reactants', { size: 10.5, anchor: 'start', color: C.muted });
  [60, 115, 170, 225].forEach((x) => { s += h2(x, 62); });
  s += text(142, 92, '4 H₂', { size: 11, bold: true }) + text(270, 62, '+', { size: 16 });
  [325, 385, 445].forEach((x) => { s += o2(x, 62); });
  s += text(385, 92, '3 O₂', { size: 11, bold: true });
  s += text(20, 155, 'products', { size: 10.5, anchor: 'start', color: C.muted });
  [60, 135, 210, 285].forEach((x) => { s += h2o(x, 188); });
  s += text(337, 188, '+', { size: 16 }) + o2(395, 188) + text(395, 222, '1 O₂ unused', { size: 10.5 });
  s += text(176, 232, '4 H₂O', { size: 11, bold: true });
  s += arrow(510, 75, 510, 170, { color: C.a, w: 2 }) + text(522, 120, 'H₂ limits', { size: 10.5, anchor: 'start', color: C.a });
  s += text(230, 258, 'atom check — H: 8 → 8   O: 6 → 6', { size: 10, color: C.muted });
  return svg(620, 275, s, 'limiting reagent particle view');
});
def('polymer-linkages', 'Polymer classes and their linkages', 'Dehydration synthesis joins monomers and releases water; hydrolysis adds water and breaks the bond. The four classes use different linkages: glycosidic (carbohydrates), peptide (proteins), phosphodiester (nucleic acids), and ester (lipids). Lipids are not true polymers, but they are built from glycerol and fatty acids by ester bonds.', () =>
  svg(600, 255, table(20, 35, [145, 135, 125, 155], [
    ['carbohydrate', 'monosaccharide', 'glycosidic', '–OH (hydroxyl)'],
    ['protein', 'amino acid', 'peptide', '–NH₂, –COOH'],
    ['nucleic acid', 'nucleotide', 'phosphodiester', 'phosphate, –OH'],
    ['lipid', 'glycerol + 3 fatty acids', 'ester', '–COOH, –OH'],
  ], { headers: ['class', 'monomer', 'linkage', 'functional groups'], rowH: 34, size: 10 }), 'polymer linkages'));
idef('error-bars', 'Replication and error-bar interpretation', '', (v) => {
  const k = sqrt(10 / v.n);
  return bars({ W: 560, H: 310, bars: [{ label: 'control', v: 12.4, err: 0.8 * k, color: C.muted }, { label: 'low dose', v: 13.2, err: 0.9 * k, color: C.d }, { label: 'high dose', v: 18.5, err: 1.1 * k, color: C.c }], showV: true, ylabel: 'mean height (cm)', ylabelTop: true, xlabel: 'fertilizer dose (independent variable)', max: 22 });
}, [
  { key: 'n', label: '每组样本量 n', min: 3, max: 50, step: 1, value: 10 },
], (v) => {
  const k = sqrt(10 / v.n), e0 = 0.8 * k, e1 = 0.9 * k, e2 = 1.1 * k;
  const overlap = 0.8 <= e0 + e1;
  return `Mean ± 2 SEM, n = ${fmt(v.n, 0)} plants per group (error bars scale as \\(\\dfrac{1}{\\sqrt n}\\)). ${overlap ? 'The control and low-dose error bars overlap, so the apparent difference is not clearly significant' : 'The control and low-dose error bars no longer overlap, suggesting a clearer difference'}; the high-dose mean is separated from both. More replication narrows the error bars; overlapping ±2 SEM is a rough (not exact) significance guide.`;
});
def('chnops-table', 'CHNOPS and trace elements: where each element is used', 'CHNOPS builds the four macromolecule classes: C is the backbone, H and O dominate water and organic molecules, N is in amino and nitrogenous bases, P in nucleic acids/phospholipids/ATP, and S in cysteine disulfide bridges. Ca and trace metals (Fe, Mg, K) are ions and cofactors, not major structural elements of polymers.', () =>
  svg(620, 275, table(15, 35, [75, 245, 165, 100], [
    ['C', 'backbone of organic molecules', 'all four classes', '18.5%'],
    ['H', 'hydrogen bonds; pH and oxidation', 'water, all classes', '9.5%'],
    ['O', 'electron acceptor; respiration', 'water, all classes', '65%'],
    ['N', 'amino groups; nitrogenous bases', 'proteins, nucleic acids', '3.2%'],
    ['P', 'ATP; sugar-phosphate backbone', 'nucleic acids, phospholipids', '1.0%'],
    ['S', 'disulfide bridges (cysteine)', 'some proteins', 'trace'],
    ['Ca + trace', 'signaling, cofactors (Fe, Mg, K)', 'ions, coenzymes', '1.5% + 1.3%'],
  ], { headers: ['element', 'role in cells', 'main macromolecules', 'body mass'], rowH: 29, size: 9.5 }), 'CHNOPS table'));
def('macromolecule-compare', 'Four classes of biological macromolecules', 'Comparison chart for the four classes: monomers, polymers, linkages, examples and a common lab test. Carbohydrates and proteins are true polymers; nucleic acids are polymers of nucleotides; lipids are assembled from glycerol and fatty acids but are not true polymers. The same functional groups recur across classes.', () =>
  svg(640, 300, table(20, 32, [80, 115, 80, 85, 145, 90], [
    ['carbohydrate', 'monosaccharide', 'polysaccharide', 'glycosidic', 'glucose, starch, cellulose', "Benedict's; iodine"],
    ['protein', 'amino acid', 'polypeptide', 'peptide', 'enzymes, hemoglobin', 'Biuret'],
    ['nucleic acid', 'nucleotide', 'DNA / RNA', 'phosphodiester', 'DNA, RNA, ATP', 'no simple test'],
    ['lipid', 'glycerol + fatty acids', 'triglyceride', 'ester', 'fats, oils, phospholipids', 'Sudan IV'],
  ], { headers: ['class', 'monomer', 'polymer', 'linkage', 'examples', 'lab test'], rowH: 44, size: 9.2 }), 'macromolecule comparison'));
def('nucleotide-anatomy', 'Nucleotide anatomy and DNA vs RNA', 'A nucleotide has a phosphate group, a five-carbon sugar and a nitrogenous base. In DNA the sugar is deoxyribose and the bases are A, T, G, C; RNA uses ribose and U instead of T. Nucleotides join by phosphodiester bonds between the 3′ OH of one sugar and the phosphate of the next, giving the sugar-phosphate backbone.', () => {
  const cx = 210, cy = 82, rr = 32, pts = [0, 1, 2, 3, 4].map((k) => { const a = (-90 + k * 72) * PI / 180; return [cx + rr * cos(a), cy + rr * sin(a)]; });
  let s = text(cx, 20, 'one nucleotide', { bold: true, size: 12 });
  s += circle(78, 82, 21, { fill: C.d, op: 0.25, stroke: C.d, w: 1.4 }) + text(78, 82, 'P', { bold: true, size: 13 }) + text(78, 119, 'phosphate', { size: 10 });
  s += path('M' + pts.map((p) => p.join(',')).join('L') + 'Z', { fill: C.a, op: 0.15, stroke: C.a, w: 1.4 }) + text(cx, cy + 2, 'sugar', { size: 10.5, bold: true }) + text(cx, 128, 'deoxyribose', { size: 10 });
  s += line(99, 82, pts[3][0], pts[3][1], { w: 2.4, color: C.ink }) + text(122, 50, '5′', { size: 11, bold: true }) + text(246, 112, '3′ OH', { size: 10.5 });
  s += rect(282, 57, 96, 50, { fill: C.c, op: 0.18, stroke: C.c, w: 1.4 }) + text(330, 74, 'base', { bold: true }) + text(330, 90, 'A / T / G / C', { size: 9.5 });
  s += text(330, 124, 'nitrogenous base', { size: 10 });
  s += text(170, 158, 'phosphodiester bond links the 3′ OH to the next phosphate', { size: 9.5, color: C.muted });
  s += table(30, 174, [130, 220, 200], [
    ['sugar', 'deoxyribose', 'ribose'],
    ['bases', 'A, T, G, C', 'A, U, G, C'],
    ['strands', 'double helix', 'usually single'],
    ['location', 'nucleus', 'nucleus + cytoplasm'],
    ['role', 'stores information', 'transfers and translates'],
  ], { headers: ['feature', 'DNA', 'RNA'], rowH: 24, size: 9.5 });
  return svg(620, 330, s, 'nucleotide anatomy');
});
def('endosymbiosis-evidence', 'Evidence for endosymbiosis', 'Mitochondria and chloroplasts share traits with free-living bacteria: a double membrane, their own circular DNA, 70S ribosomes, binary fission, and sensitivity to antibacterial antibiotics. Mitochondria are related to α-proteobacteria and chloroplasts to cyanobacteria; the double membrane is interpreted as the host vesicle plus the engulfed cell membrane.', () =>
  svg(640, 330, table(15, 35, [125, 160, 160, 175], [
    ['size', '1–10 µm', '2–10 µm', '1–10 µm'],
    ['membranes', 'double', 'double', 'single'],
    ['DNA', 'circular, own genome', 'circular, own genome', 'circular'],
    ['ribosomes', '70S', '70S', '70S'],
    ['division', 'binary fission', 'binary fission', 'binary fission'],
    ['antibiotics', 'sensitive', 'sensitive', 'sensitive'],
    ['protein import', 'yes (TOM/TIM)', 'yes (TOC/TIC)', 'no'],
  ], { headers: ['feature', 'mitochondrion', 'chloroplast', 'free-living bacterium'], rowH: 34, size: 9.5 }), 'endosymbiosis evidence'));
idef('phenotype-matrix', 'Same genotype, three environments', 'Two genotypes grown across a soil-pH gradient. Genotype A changes strongly (blue index 8 → 2), genotype B changes little (6 → 4): the phenotype is plastic, and the different slopes are a genotype × environment interaction. Phenotype = genotype + environment + G×E; a reaction-norm plot graphs these values as lines.', (v) => {
  const cols = ['pH 5.5', 'pH 6.5', 'pH 7.5'], xs = [165, 285, 405];
  let s = text(300, 20, 'flower-color phenotype (blue index)', { bold: true, size: 12 });
  cols.forEach((c, j) => { const dim = v.col === 'all' || Number(v.col) === j ? 1 : 0.25; s += `<g opacity="${dim}">${text(xs[j] + 50, 56, c, { size: 10.5, bold: true })}</g>`; });
  const rows = [['genotype A', [8, 5, 2]], ['genotype B', [6, 5, 4]]];
  rows.forEach(([name, vals], i) => {
    const y = 78 + i * 76;
    s += text(20, y + 28, name, { anchor: 'start', size: 10.5, bold: true });
    vals.forEach((val, j) => {
      const dim = v.col === 'all' || Number(v.col) === j ? 1 : 0.25;
      const col = val >= 7 ? C.a : val >= 5 ? C.f : C.b;
      s += `<g opacity="${dim}">${rect(xs[j], y, 100, 56, { fill: col, op: 0.28, stroke: col, w: 1 })}${text(xs[j] + 50, y + 22, `index ${val}`, { size: 11, bold: true })}${text(xs[j] + 50, y + 40, val >= 7 ? 'blue' : val >= 5 ? 'violet' : 'pink', { size: 9.5, color: C.muted })}</g>`;
    });
  });
  s += text(300, 245, 'genotype A: steep reaction norm · genotype B: flat reaction norm', { size: 10, color: C.muted });
  s += text(300, 268, 'same genes, different environment → different phenotype', { size: 10.5 });
  return svg(600, 285, s, 'phenotype environment matrix');
}, [
  { key: 'col', type: 'buttons', label: '聚焦环境（其余变暗）', value: 'all', options: [{ value: 'all', label: '全部' }, { value: '0', label: 'pH 5.5' }, { value: '1', label: 'pH 6.5' }, { value: '2', label: 'pH 7.5' }] },
]);
idef('selection-response', 'Response to artificial selection over generations', '', (v) => {
  const hi = v.h2 * 0.72, lo = -v.h2 * 0.36, ymax = Math.max(15, 4.7 + hi * 20 + 2);
  return plot({ x: [0, 20], y: [0, ymax], xstep: 5, ystep: 3, xlabel: 'generation', ylabel: 'mean oil content (%)', ylabelTop: true, curves: [{ f: (t) => 4.7 + hi * t, color: C.a, label: 'high-oil line', labelAt: [8, 4.7 + hi * 8 + 2.82] }, { f: (t) => 4.7 + lo * t, color: C.b, label: 'low-oil line', labelAt: [11, 4.7 + lo * 11 - 0.12] }, { f: (t) => 4.7 + 0.01 * t, color: C.muted, dash: '5 3', label: 'control', labelAt: [13, 5.2] }], points: [0, 10, 20].flatMap((t) => [{ x: t, y: 4.7 + hi * t, color: C.a, r: 3 }, { x: t, y: 4.7 + lo * t, color: C.b, r: 3 }, { x: t, y: 4.7 + 0.01 * t, color: C.muted, r: 2.5 }]) });
}, [
  { key: 'h2', label: '遗传力 h²', min: 0.1, max: 0.9, step: 0.05, value: 0.5 },
], (v) => `Idealized bidirectional selection on corn oil content: the high-oil line rises and the low-oil line falls, while the unselected control stays near 4.7%. With \\(h^2=${fmt(v.h2, 2)}\\) and \\(S=0.72\\) percentage points per generation, \\(R=h^2S=${fmt(v.h2 * 0.72, 2)}\\) in the high line.`);
def('isolation-barriers', 'Reproductive-isolation mechanisms', 'Prezygotic barriers prevent fertilization (habitat, temporal, behavioral, mechanical, gametic); postzygotic barriers act after fertilization (hybrid inviability, sterility, breakdown). Any one barrier can maintain species boundaries. Allopatric speciation begins with geographic isolation; sympatric speciation can arise through polyploidy or ecological/sexual isolation.', () =>
  svg(640, 355, table(15, 32, [140, 210, 170, 95], [
    ['habitat', 'different habitats; no meeting', 'canyon mice', 'prezygotic'],
    ['temporal', 'different breeding seasons', 'periodical cicadas', 'prezygotic'],
    ['behavioral', 'different courtship signals', 'fireflies', 'prezygotic'],
    ['mechanical', 'incompatible reproductive anatomy', 'snails', 'prezygotic'],
    ['gametic', 'sperm and egg cannot fuse', 'sea urchins', 'prezygotic'],
    ['hybrid inviability', 'hybrid embryo dies', 'some frogs', 'postzygotic'],
    ['hybrid sterility', 'hybrid adult is sterile', 'mule', 'postzygotic'],
    ['hybrid breakdown', 'F2 offspring weak or sterile', 'some rice', 'postzygotic'],
  ], { headers: ['barrier', 'mechanism', 'example', 'stage'], rowH: 34, size: 9.5 }), 'reproductive isolation table'));
def('extinction-rates', 'Background vs mass-extinction rates', 'Extinction intensity in extinctions per million species-years (E/MSY). The background rate is about 0.1–1 E/MSY; the Big Five mass extinctions reached roughly 10–100 E/MSY. Current estimates are about 100–1000 E/MSY, i.e. 100–1000 times the background rate, although the modern record is much shorter and uncertain.', () => {
  const W = 640, H = 315, L = 110, R = 570, X = (v) => L + ((log(v) - log(0.01)) / (log(1000) - log(0.01))) * (R - L);
  let s = line(L, 265, R, 265, { w: 1.2 });
  [0.01, 0.1, 1, 10, 100, 1000].forEach((v) => { s += line(X(v), 259, X(v), 271, { w: 1 }) + text(X(v), 283, v >= 1 ? String(v) : v.toFixed(2), { size: 9.5, color: C.muted }); });
  s += text((L + R) / 2, 303, 'extinctions per million species-years (log scale)', { size: 10.5, color: C.muted });
  const rows = [['background', 0.1, C.muted, '≈0.1'], ['end-Cretaceous', 10, C.b, '≈10'], ['end-Permian', 100, C.e, '≈100']];
  rows.forEach(([name, v, col, lab], i) => {
    const y = 52 + i * 48;
    s += text(105, y + 13, name, { anchor: 'end', size: 10.5, bold: true }) + rect(X(0.01), y, X(v) - X(0.01), 26, { fill: col, op: 0.55, stroke: col, w: 1 }) + text(X(v) + 6, y + 13, lab, { size: 10.5, anchor: 'start', color: col });
  });
  const y4 = 196;
  s += text(105, y4 + 13, 'today (estimate)', { anchor: 'end', size: 10.5, bold: true }) + rect(X(100), y4, X(1000) - X(100), 26, { fill: C.d, op: 0.25, stroke: C.d, w: 1, dash: '5 3' }) + text(X(1000) + 6, y4 + 13, '100–1000', { size: 10.5, anchor: 'start', color: C.d });
  s += text((L + R) / 2, 34, 'Big Five spikes vs the present', { size: 12, bold: true });
  return svg(W, H, s, 'extinction rates');
});

/* ================= Track B coverage figures (B03) ================= */
def('enz-denature-renature', 'Enzyme denaturation and renaturation', 'Some denaturation is reversible when the primary structure stays intact and aggregation is avoided.', () => {
  const W = 600, H = 320;
  let s = text(18, 22, '可逆变性 · reversible denaturation', { size: 11.5, anchor: 'start', bold: true, color: C.c });
  s += rect(24, 40, 118, 58) + text(83, 62, '天然酶 · native', { size: 10.5 }) + text(83, 80, '活性 100%', { size: 10 });
  s += rect(190, 40, 132, 58) + text(256, 62, '伸展肽链 · unfolded', { size: 10.5 }) + text(256, 80, '活性 ≈ 0%', { size: 10 });
  s += rect(372, 40, 130, 58) + text(437, 62, '复性 · refolded', { size: 10.5 }) + text(437, 80, '活性恢复 ≈ 90%', { size: 10 });
  s += arrow(142, 69, 188, 69) + text(165, 58, '尿素 / 还原剂', { size: 9 });
  s += arrow(322, 69, 370, 69) + text(346, 58, '透析去除', { size: 9 });
  s += text(18, 132, '不可逆变性 · irreversible denaturation', { size: 11.5, anchor: 'start', bold: true, color: C.e });
  s += rect(24, 150, 118, 58) + text(83, 172, '天然酶 · native', { size: 10.5 }) + text(83, 190, '活性 100%', { size: 10 });
  s += rect(190, 150, 158, 58) + text(269, 172, '变性 + 聚集 / 水解', { size: 10.5 }) + text(269, 190, '活性 ≈ 0%', { size: 10 });
  s += rect(396, 150, 176, 58) + text(484, 172, '冷却不能恢复', { size: 10.5 }) + text(484, 190, '一级结构已破坏或聚集', { size: 10 });
  s += arrow(142, 179, 188, 179) + text(165, 168, '煮沸 / 极端 pH', { size: 9 });
  s += arrow(348, 179, 394, 179) + text(371, 168, '不可逆', { size: 9, color: C.e });
  s += text(W / 2, 246, '可逆条件：一级结构完整、无聚集、变性剂可去除、缓冲条件适宜。', { size: 10.5 });
  s += text(W / 2, 266, 'Reversible only if the primary structure is intact, no aggregation occurs, and the denaturant can be removed.', { size: 9.5, color: C.muted });
  s += text(W / 2, 294, '低温失活通常是抑制解除，不是复性 · recovery from cold inhibition is not renaturation', { size: 10, color: C.ink });
  return svg(W, H, s, 'enzyme denaturation and renaturation');
});
def('enz-cold-vs-denature', 'Cold inhibition versus heat denaturation', 'Low temperature slows collisions without unfolding; high temperature can denature, and reversibility depends on aggregation and covalent damage.', () => {
  const f = enzT(55);
  const fmax = Math.max(...Array.from({ length: 101 }, (_, i) => f(i)));
  let s = plot({ W: 600, H: 330, x: [0, 100], y: [0, 1.1], xstep: 10, ystep: 0.2, xlabel: 'temperature (°C)', ylabel: 'relative activity', curves: [{ f: (T) => f(T) / fmax, color: C.a, w: 2.4 }], vlines: [{ x: 12, label: '低温 · cold', color: C.b }, { x: 45, label: '最适 · optimum', color: C.c }, { x: 75, label: '高温 · heat', color: C.e }] });
  const icons = `<g><rect x="70" y="250" width="34" height="24" fill="none" stroke="${C.b}" stroke-width="1.2"/><path d="M74,254 L88,264 L100,252" fill="none" stroke="${C.b}" stroke-width="1.2"/><text x="87" y="288" font-size="9" text-anchor="middle" fill="${C.b}">折叠 · folded</text><rect x="268" y="250" width="34" height="24" fill="none" stroke="${C.c}" stroke-width="1.2"/><path d="M272,254 L286,264 L300,252" fill="none" stroke="${C.c}" stroke-width="1.2"/><text x="285" y="288" font-size="9" text-anchor="middle" fill="${C.c}">折叠 · folded</text><path d="M478,250 q8,-12 16,0 q8,12 16,0 q8,-12 16,0" fill="none" stroke="${C.e}" stroke-width="1.4"/><text x="502" y="288" font-size="9" text-anchor="middle" fill="${C.e}">伸展 · unfolded</text></g>`;
  return s.replace('</svg>', icons + '</svg>');
});

def('water-cycle', 'Water cycle: reservoirs and fluxes', 'Oceans hold about 97% of Earth water; atmospheric water turns over in roughly 10 days.', () => {
  const W = 620, H = 340;
  let s = text(W / 2, 18, '水循环：储库与通量 · water cycle: reservoirs and fluxes', { size: 13, bold: true });
  s += rect(30, 232, 190, 76) + text(125, 258, '海洋 · ocean', { size: 11, bold: true }) + text(125, 276, '最大储库（约 97%）', { size: 9.5 }) + text(125, 292, '≈ 1.34×10⁹ km³', { size: 9.5 });
  s += rect(258, 40, 154, 62) + text(335, 62, '大气 · atmosphere', { size: 11, bold: true }) + text(335, 80, '小储库、快周转', { size: 9.5 }) + text(335, 94, '停留约 10 天', { size: 9.5 });
  s += rect(258, 210, 150, 58) + text(333, 232, '地表水 · surface water', { size: 10.5, bold: true }) + text(333, 250, '河流、湖泊、土壤', { size: 9.5 });
  s += rect(444, 210, 150, 58) + text(519, 232, '地下水 · groundwater', { size: 10.5, bold: true }) + text(519, 250, '缓慢交换', { size: 9.5 });
  s += rect(444, 88, 150, 56) + text(519, 110, '生物 · organisms', { size: 10.5, bold: true }) + text(519, 128, '蒸腾与代谢水', { size: 9.5 });
  s += arrow(120, 230, 250, 104, { color: C.b }) + text(164, 152, '蒸发 · evaporation', { size: 9.5, color: C.b });
  s += arrow(446, 104, 412, 80, { color: C.c }) + text(470, 66, '蒸腾 · transpiration', { size: 9.5, color: C.c });
  s += arrow(335, 104, 335, 208, { color: C.a }) + text(344, 156, '降水 · precipitation', { size: 9.5, color: C.a });
  s += arrow(408, 232, 222, 252, { color: C.d }) + text(250, 304, '径流 · runoff', { size: 9.5, color: C.d });
  s += arrow(390, 238, 444, 238, { color: C.e }) + text(416, 200, '下渗 · infiltration', { size: 9.5, color: C.e });
  s += text(W / 2, 326, '蒸发/蒸腾 → 大气 → 降水 → 地表/地下 → 径流回海洋。', { size: 10 });
  return svg(W, H, s, 'water cycle');
});
def('carbon-cycle', 'Carbon cycle: photosynthesis, respiration, decomposition, combustion', 'Carbon cycles through the atmosphere, organisms, soil, fossil fuels and sediments; combustion returns stored carbon to the atmosphere.', () => {
  const W = 640, H = 350;
  let s = text(W / 2, 18, '碳循环 · carbon cycle', { size: 13, bold: true });
  s += rect(250, 38, 150, 54) + text(325, 58, '大气 CO₂', { size: 11.5, bold: true }) + text(325, 76, 'atmospheric CO₂', { size: 9.5 });
  s += rect(40, 120, 140, 56) + text(110, 142, '生产者 · producers', { size: 10.5, bold: true }) + text(110, 160, '光合作用固碳', { size: 9.5 });
  s += rect(250, 120, 140, 56) + text(320, 142, '消费者 · consumers', { size: 10.5, bold: true }) + text(320, 160, '摄食与呼吸', { size: 9.5 });
  s += rect(460, 120, 140, 56) + text(530, 142, '土壤/碎屑', { size: 10.5, bold: true }) + text(530, 160, 'soil / detritus', { size: 9.5 });
  s += rect(40, 244, 140, 56) + text(110, 266, '化石燃料', { size: 10.5, bold: true }) + text(110, 284, 'fossil fuels', { size: 9.5 });
  s += rect(250, 244, 140, 56) + text(320, 266, '沉积物 · sediments', { size: 10.5, bold: true }) + text(320, 284, '碳酸盐/有机碳', { size: 9.5 });
  s += rect(460, 244, 140, 56) + text(530, 266, '水体 · water', { size: 10.5, bold: true }) + text(530, 284, '溶解无机碳', { size: 9.5 });
  s += arrow(175, 112, 262, 88, { color: C.c }) + text(206, 92, '光合 · photosynthesis', { size: 9, color: C.c });
  s += arrow(300, 118, 262, 92, { color: C.a }) + text(294, 104, '呼吸 · respiration', { size: 9, color: C.a });
  s += arrow(390, 148, 458, 148, { color: C.ink }) + text(424, 136, '摄食', { size: 9 });
  s += arrow(528, 176, 600, 176, { color: C.e }) + arrow(600, 176, 600, 64, { color: C.e }) + arrow(600, 64, 402, 64, { color: C.e }) + text(538, 194, '分解 · decomposition', { size: 9, color: C.e });
  s += arrow(110, 244, 30, 220, { color: C.f }) + arrow(30, 220, 30, 70, { color: C.f }) + arrow(30, 70, 250, 70, { color: C.f }) + text(70, 104, '燃烧 · combustion', { size: 9, color: C.f });
  s += arrow(190, 272, 248, 272, { color: C.muted }) + text(219, 262, '沉积', { size: 9 });
  s += arrow(390, 272, 458, 272, { color: C.b }) + text(424, 262, '风化/溶解', { size: 9, color: C.b });
  s += text(W / 2, 330, '光合与呼吸方向相反；燃烧把地质储库中的碳快速释放到大气。', { size: 10 });
  return svg(W, H, s, 'carbon cycle');
});
def('nitrogen-cycle', 'Nitrogen cycle: fixation, assimilation, ammonification, nitrification, denitrification', 'The atmosphere is the largest nitrogen reservoir, but most organisms cannot use N₂ directly.', () => {
  const W = 660, H = 350;
  let s = text(W / 2, 18, '氮循环 · nitrogen cycle', { size: 13, bold: true });
  s += rect(250, 36, 160, 54) + text(330, 56, '大气 N₂', { size: 11.5, bold: true }) + text(330, 74, '最大储库', { size: 9.5 });
  s += rect(40, 120, 150, 58) + text(115, 142, '固氮 · fixation', { size: 10.5, bold: true }) + text(115, 160, '根瘤菌/固氮菌/蓝细菌', { size: 8.8 });
  s += rect(250, 120, 160, 58) + text(330, 142, 'NH₄⁺ / NH₃', { size: 10.5, bold: true }) + text(330, 160, '铵态氮', { size: 9 });
  s += rect(470, 120, 150, 58) + text(545, 142, '有机氮 · organic N', { size: 10.5, bold: true }) + text(545, 160, '氨基酸、核酸', { size: 9 });
  s += rect(250, 230, 160, 58) + text(330, 252, 'NO₂⁻ → NO₃⁻', { size: 10.5, bold: true }) + text(330, 270, '硝化 · nitrification（需 O₂）', { size: 8.8 });
  s += rect(40, 230, 150, 58) + text(115, 252, '反硝化 · denitrification', { size: 9.5, bold: true }) + text(115, 270, 'NO₃⁻ → N₂O → N₂（低 O₂）', { size: 8.5 });
  s += arrow(115, 118, 120, 86, { color: C.c }) + text(90, 100, '固氮', { size: 9, color: C.c }) + arrow(120, 86, 248, 62, { color: C.c });
  s += arrow(190, 146, 248, 146, { color: C.a }) + text(219, 136, '同化', { size: 9, color: C.a });
  s += arrow(410, 146, 468, 146, { color: C.b }) + text(439, 136, '摄食', { size: 9, color: C.b });
  s += arrow(468, 164, 412, 164, { color: C.e }) + text(440, 178, '氨化', { size: 9, color: C.e });
  s += arrow(330, 178, 330, 228, { color: C.d }) + text(340, 204, '硝化', { size: 9, color: C.d });
  s += arrow(248, 258, 192, 258, { color: C.f }) + text(220, 248, '反硝化', { size: 9, color: C.f });
  s += arrow(100, 228, 100, 90, { color: C.f }) + text(108, 206, '返回大气', { size: 9, color: C.f });
  s += text(W / 2, 326, '硝化需氧；反硝化需低氧。闪电与工业固氮是生物固氮之外的输入。', { size: 10 });
  return svg(W, H, s, 'nitrogen cycle');
});
def('phosphorus-cycle', 'Phosphorus cycle: weathering, assimilation, sedimentation', 'Phosphorus has no significant gaseous reservoir; slow rock weathering and sedimentation control its availability.', () => {
  const W = 640, H = 330;
  let s = text(W / 2, 18, '磷循环 · phosphorus cycle（无显著气态储库）', { size: 13, bold: true });
  s += rect(36, 96, 140, 58) + text(106, 118, '磷矿石 · rock', { size: 10.5, bold: true }) + text(106, 136, '磷酸盐矿物', { size: 9 });
  s += rect(238, 96, 150, 58) + text(313, 118, '土壤/水体 PO₄³⁻', { size: 10.5, bold: true }) + text(313, 136, '可溶性磷酸盐', { size: 9 });
  s += rect(238, 206, 150, 58) + text(313, 228, '生产者 · producers', { size: 10.5, bold: true }) + text(313, 246, 'ATP、核酸、磷脂', { size: 9 });
  s += rect(450, 206, 140, 58) + text(520, 228, '消费者 · consumers', { size: 10.5, bold: true }) + text(520, 246, '摄食与排泄', { size: 9 });
  s += rect(450, 96, 140, 58) + text(520, 118, '沉积物 · sediment', { size: 10.5, bold: true }) + text(520, 136, '水体底泥', { size: 9 });
  s += arrow(178, 118, 236, 118, { color: C.c }) + text(207, 106, '风化 · weathering', { size: 9, color: C.c });
  s += arrow(300, 156, 300, 204, { color: C.a }) + text(310, 182, '同化', { size: 9, color: C.a });
  s += arrow(390, 234, 448, 234, { color: C.b }) + text(419, 222, '摄食', { size: 9, color: C.b });
  s += arrow(500, 262, 360, 142, { color: C.e }) + text(438, 202, '分解/排泄', { size: 9, color: C.e });
  s += arrow(500, 156, 360, 156, { color: C.d }) + text(430, 170, '侵蚀/径流', { size: 9, color: C.d });
  s += arrow(500, 92, 200, 88, { color: C.f }) + text(350, 76, '地质抬升 · uplift（缓慢）', { size: 9, color: C.f });
  s += text(W / 2, 300, '磷无气态储库，因此常成为淡水与陆地生态系统的限制养分；过量输入导致富营养化。', { size: 10 });
  return svg(W, H, s, 'phosphorus cycle');
});

/* ---------- topic → figure mapping ---------- */
export const TOPIC_FIGURES = {
  'bio-prep-chem:P1.1': ['experiment-design', 'c14-decay'], 'bio-prep-chem:P1.2': ['bohr-carbon', 'isotopes', 'c14-decay'], 'bio-prep-chem:P1.3': ['periodic-radius', 'electronegativity'], 'bio-prep-chem:P1.4': ['bond-types', 'electronegativity'],
  'bio-prep-chem:P1.5': ['vsepr', 'water-hbond'], 'bio-prep-chem:P1.6': ['stoich', 'stoich-particles'], 'bio-prep-chem:P1.7': ['solubility', 'water-potential'], 'bio-prep-chem:P1.8': ['ph-scale', 'titration'], 'bio-prep-chem:P1.9': ['water-hbond', 'water-density', 'specific-heat'],
  'bio-prep-chem:P1.10': ['functional-groups', 'polymer-linkages'], 'bio-prep-chem:P1.11': ['exo-endo', 'activation-energy'], 'bio-prep-chem:P1.12': ['rate-equilibrium', 'activation-energy'],
  'bio-prep-hs:P2.1': ['experiment-design', 'error-bars'], 'bio-prep-hs:P2.2': ['macromolecules', 'protein-structure'], 'bio-prep-hs:P2.3': ['cell-structure', 'endomembrane'], 'bio-prep-hs:P2.4': ['transport-types', 'tonicity'], 'bio-prep-hs:P2.5': ['enz-temp', 'enz-ph', 'activation-energy'],
  'bio-prep-hs:P2.6': ['photo-resp-cycle', 'light-reactions', 'calvin-cycle', 'absorption-spectrum', 'photo-rate-light', 'leaf-anatomy'], 'bio-prep-hs:P2.7': ['respiration-overview', 'photo-resp-cycle', 'respirometer'], 'bio-prep-hs:P2.8': ['mitosis-stages', 'meiosis-stages'], 'bio-prep-hs:P2.9': ['punnett-mono', 'pedigree-ar'], 'bio-prep-hs:P2.10': ['central-dogma', 'dna-structure'],
  'bio-prep-hs:P2.11': ['sel-directional', 'antibiotic-resistance'], 'bio-prep-hs:P2.12': ['food-chain', 'energy-pyramid', 'food-web'], 'bio-prep-hs:P2.13': ['body-systems', 'feedback-glucose'], 'bio-prep-hs:P2.14': ['species-area', 'diversity-index'],
  'bio-u1:1.1': ['water-hbond', 'specific-heat', 'water-density'], 'bio-u1:1.2': ['body-elements', 'chnops-table'], 'bio-u1:1.3': ['macromolecules', 'macromolecule-compare'], 'bio-u1:1.4': ['protein-structure', 'functional-groups'], 'bio-u1:1.5': ['dna-structure', 'nucleotide-anatomy'], 'bio-u1:1.6': ['induced-fit', 'activation-energy'],
  'bio-u2:2.1': ['cell-structure', 'endomembrane'], 'bio-u2:2.2': ['sa-volume', 'cell-structure'], 'bio-u2:2.3': ['fluid-mosaic', 'transport-types'], 'bio-u2:2.4': ['permeability', 'fluid-mosaic', 'transport-types'], 'bio-u2:2.5': ['transport-types', 'diffusion-rate'], 'bio-u2:2.6': ['diffusion-rate', 'transport-types'],
  'bio-u2:2.7': ['tonicity', 'water-potential', 'osmosis-potato'], 'bio-u2:2.8': ['na-k-pump', 'transport-types'], 'bio-u2:2.9': ['endomembrane', 'etc'], 'bio-u2:2.10': ['endosymbiosis', 'endosymbiosis-evidence'],
  'bio-u3:3.1': ['activation-energy', 'enz-substrate', 'enz-inhibition', 'induced-fit'], 'bio-u3:3.2': ['enz-temp', 'enz-ph', 'enz-inhibition'], 'bio-u3:3.3': ['atp-cycle', 'exo-endo'],
  'bio-u3:3.4': ['chloroplast-sites', 'psii-photolysis', 'cytb6f-pump', 'psi-nadph', 'atp-synthase', 'calvin-fixation', 'calvin-reduction-regeneration'], 'bio-u3:3.5': ['respiration-overview', 'glycolysis', 'pyruvate-oxidation', 'krebs-cycle', 'etc', 'atp-yield', 'fermentation'], 'bio-u3:3.6': ['metabolic-temp', 'enz-temp'],
  'bio-u3:3.7': ['enz-denature-renature', 'enz-cold-vs-denature', 'enz-temp'],
  'bio-u4:4.1': ['signal-types', 'signal-transduction'], 'bio-u4:4.2': ['signal-transduction', 'rtk', 'signal-amplification'], 'bio-u4:4.3': ['signal-transduction', 'signal-amplification', 'rtk'], 'bio-u4:4.4': ['feedback-loops', 'feedback-glucose'],
  'bio-u4:4.5': ['cell-cycle', 'dna-content-mitosis'], 'bio-u4:4.6': ['cyclin-cdk', 'cell-cycle'], 'bio-u4:4.7': ['mitosis-stages', 'dna-content-mitosis'],
  'bio-u5:5.1': ['meiosis-stages', 'dna-content-meiosis'], 'bio-u5:5.2': ['crossing-over', 'meiosis-stages'], 'bio-u5:5.3': ['punnett-mono', 'punnett-di', 'punnett-test', 'chi-square'],
  'bio-u5:5.4': ['punnett-incomplete', 'blood-type', 'punnett-xlinked', 'pedigree-ar', 'pedigree-ad', 'pedigree-xr', 'linkage-map'], 'bio-u5:5.5': ['env-phenotype', 'phenotype-matrix'], 'bio-u5:5.6': ['nondisjunction', 'karyotype', 'linkage-map', 'pedigree-xr'],
  'bio-u6:6.1': ['dna-structure', 'central-dogma'], 'bio-u6:6.2': ['replication-fork', 'dna-structure'], 'bio-u6:6.3': ['transcription-splicing', 'central-dogma'], 'bio-u6:6.4': ['translation', 'central-dogma'], 'bio-u6:6.5': ['lac-operon', 'trp-operon', 'euk-regulation'],
  'bio-u6:6.6': ['cell-specialization', 'euk-regulation'], 'bio-u6:6.7': ['mutations', 'translation'], 'bio-u6:6.8': ['gel-electrophoresis', 'pcr', 'biotech-plasmid'],
  'bio-u7:7.1': ['sel-directional', 'variation'], 'bio-u7:7.2': ['sel-stabilizing', 'sel-directional', 'sel-disruptive'], 'bio-u7:7.3': ['artificial-selection', 'selection-response'], 'bio-u7:7.4': ['genetic-drift', 'bottleneck'],
  'bio-u7:7.5': ['hw-curves', 'hw-data'], 'bio-u7:7.6': ['homologous-structures', 'molecular-tree'], 'bio-u7:7.7': ['molecular-tree', 'phylo-tree'], 'bio-u7:7.8': ['antibiotic-resistance', 'sel-directional'],
  'bio-u7:7.9': ['phylo-tree', 'character-matrix'], 'bio-u7:7.10': ['speciation', 'isolation-barriers'], 'bio-u7:7.11': ['extinction', 'extinction-rates'], 'bio-u7:7.12': ['variation', 'genetic-drift'], 'bio-u7:7.13': ['origins-life', 'endosymbiosis'],
  'bio-u8:8.1': ['behavior-taxis', 'photoperiod'], 'bio-u8:8.2': ['energy-pyramid', 'food-web', 'trophic-biomass'], 'bio-u8:8.3': ['pop-growth', 'survivorship'], 'bio-u8:8.4': ['density-dependence', 'pop-oscillation'],
  'bio-u8:8.5': ['predator-prey', 'competition', 'food-web'], 'bio-u8:8.6': ['diversity-index', 'species-area'], 'bio-u8:8.7': ['disruption', 'succession'], 'bio-u8:8.10': ['water-cycle', 'carbon-cycle', 'nitrogen-cycle', 'phosphorus-cycle'],
};
export const FIGURES = F;
const cache = {};
export function buildFigure(id) {
  if (!cache[id]) {
    const f = F[id]; if (!f) return null;
    const zh = FIGURE_ZH[id];
    const s = f.build();
    const cap = f.caption || '';
    const caption = zh && cap && !cap.startsWith(zh[1]) ? `${zh[1]} · ${cap}` : cap;
    const captionFor = f.captionFor
      ? (v) => {
        const c = f.captionFor(v);
        return zh && c && !c.startsWith(zh[1]) ? `${zh[1]} · ${c}` : c;
      }
      : undefined;
    cache[id] = { id, title: zh ? `${zh[0]} · ${f.title}` : f.title, caption, svg: s, controls: f.controls, defaults: f.defaults, rebuild: f.rebuild, captionFor };
  }
  return cache[id];
}
export function figuresFor(chapterId, code) { return (TOPIC_FIGURES[`${chapterId}:${code}`] || []).map(buildFigure).filter(Boolean); }
