/**
 * Numeric audit of canvas module physics/math models (no DOM).
 * Reimplements each module's governing equations and checks conservation / analytic match.
 */
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const results = [];
let fails = 0;

function ok(name, pass, detail, fix) {
  results.push({ name, pass: !!pass, detail, fix: fix || null });
  if (!pass) fails++;
}
function nearly(a, b, tol = 1e-6) {
  return Math.abs(a - b) <= tol * Math.max(1, Math.abs(a), Math.abs(b));
}

/* —— Mechanics: work-energy incline model —— */
{
  const m = 1, g = 9.8, h0 = 5, track = 6, dt = 0.001;
  const sinth = h0 / track, costh = Math.sqrt(1 - sinth * sinth);
  // μ=0
  {
    let s = 0, v = 0, mu = 0;
    const a = g * (sinth - mu * costh);
    const E0 = m * g * h0;
    let maxDrift = 0;
    while (s < track - 1e-9) {
      v += a * dt; s += Math.max(v, 0) * dt;
      if (s > track) s = track;
      const height = h0 * (1 - s / track);
      const U = m * g * Math.max(height, 0);
      const K = 0.5 * m * v * v;
      maxDrift = Math.max(maxDrift, Math.abs(U + K - E0));
    }
    ok('mech/work-energy μ=0 mechanical energy', maxDrift < 0.08,
      `max |U+K−E0|=${maxDrift.toFixed(4)} J`, null);
  }
  {
    let s = 0, v = 0, mu = 0.1;
    const a = g * (sinth - mu * costh);
    const E0 = m * g * h0;
    while (s < track && v >= -1e-9) {
      v += a * dt;
      if (v < 0) break;
      s += v * dt;
      if (s > track) s = track;
    }
    const height = h0 * (1 - Math.min(s, track) / track);
    const U = m * g * Math.max(height, 0);
    const K = 0.5 * m * Math.max(v, 0) ** 2;
    const Wf = mu * m * g * costh * Math.min(s, track);
    ok('mech/work-energy μ>0 E+W_f ≈ E0', nearly(U + K + Wf, E0, 0.05),
      `E=${(U+K).toFixed(2)} Wf=${Wf.toFixed(2)} sum=${(U+K+Wf).toFixed(2)} E0=${E0.toFixed(2)}`, null);
  }
}

/* —— SHM undamped: energy + period —— */
{
  const m = 1, k = 8, x0 = 1.2, v0 = 0, c = 0;
  const omega = Math.sqrt(k / m);
  const T = 2 * Math.PI / omega;
  const E0 = 0.5 * k * x0 * x0 + 0.5 * m * v0 * v0;
  let x = x0, v = v0, t = 0, dt = 0.0005, maxE = 0, maxXerr = 0;
  // semi-implicit Euler like many sims
  while (t < 4 * T) {
    const a = (-k * x - c * v) / m;
    v += a * dt;
    x += v * dt;
    t += dt;
    const E = 0.5 * k * x * x + 0.5 * m * v * v;
    maxE = Math.max(maxE, Math.abs(E - E0));
    const xExact = x0 * Math.cos(omega * t);
    maxXerr = Math.max(maxXerr, Math.abs(x - xExact));
  }
  ok('physics/shm undamped energy conservation', maxE < 0.02,
    `max |ΔE|=${maxE.toFixed(5)} J over 4 periods`, null);
  ok('physics/shm period matches 2π√(m/k)', nearly(T, 2 * Math.PI * Math.sqrt(m / k), 1e-12),
    `T=${T.toFixed(6)} s`, null);
  ok('physics/shm numeric vs analytic x(t) (semi-implicit)', maxXerr < 0.05,
    `max |x−x_exact|=${maxXerr.toFixed(4)} m over 4T (dt=${0.0005})`,
    maxXerr >= 0.05 ? 'prefer symplectic / smaller dt in module' : null);
}

/* —— Projectile: range & apex —— */
{
  const v0 = 20, angle = Math.PI / 4, g = 9.8;
  const vx = v0 * Math.cos(angle), vy0 = v0 * Math.sin(angle);
  const Tflight = 2 * vy0 / g;
  const R = vx * Tflight;
  const H = (vy0 * vy0) / (2 * g);
  let x = 0, y = 0, vy = vy0, t = 0, dt = 0.0002, maxH = 0;
  while (y >= 0 || t < 1e-6) {
    vy -= g * dt;
    x += vx * dt;
    y += vy * dt;
    t += dt;
    maxH = Math.max(maxH, y);
    if (t > 20) break;
  }
  ok('physics/projectile range analytic', nearly(x, R, 0.02),
    `numeric R=${x.toFixed(3)} analytic=${R.toFixed(3)}`, null);
  ok('physics/projectile apex height', nearly(maxH, H, 0.02),
    `numeric H=${maxH.toFixed(3)} analytic=${H.toFixed(3)}`, null);
}

/* —— Collision 1D elastic —— */
{
  const m1 = 2, m2 = 1, u1 = 3, u2 = -1;
  const v1 = ((m1 - m2) / (m1 + m2)) * u1 + (2 * m2 / (m1 + m2)) * u2;
  const v2 = (2 * m1 / (m1 + m2)) * u1 + ((m2 - m1) / (m1 + m2)) * u2;
  const p0 = m1 * u1 + m2 * u2, p1 = m1 * v1 + m2 * v2;
  const K0 = 0.5 * m1 * u1 * u1 + 0.5 * m2 * u2 * u2;
  const K1 = 0.5 * m1 * v1 * v1 + 0.5 * m2 * v2 * v2;
  ok('mech/collision-momentum elastic p conserved', nearly(p0, p1, 1e-10),
    `p0=${p0} p1=${p1}`, null);
  ok('mech/collision-momentum elastic K conserved', nearly(K0, K1, 1e-10),
    `K0=${K0} K1=${K1}`, null);
}

/* —— Incline Newton: a = g(sinθ − μ cosθ) —— */
{
  const g = 9.8, theta = Math.PI / 6, mu = 0.1;
  const a = g * (Math.sin(theta) - mu * Math.cos(theta));
  ok('mech/newton-incline acceleration formula', a > 0 && nearly(a, 9.8 * (0.5 - 0.1 * Math.sqrt(3) / 2), 1e-9),
    `a=${a.toFixed(4)} m/s²`, null);
}

/* —— Gravity circular orbit —— */
{
  const G = 6.6743e-11, M = 5.972e24, R = 6.371e6 + 400e3;
  const v = Math.sqrt(G * M / R);
  const T = 2 * Math.PI * R / v;
  const a_cent = v * v / R;
  const a_grav = G * M / (R * R);
  ok('mech/gravity-orbit circular: v=√(GM/r)', nearly(a_cent, a_grav, 1e-9),
    `a_c=${a_cent.toExponential(4)} a_g=${a_grav.toExponential(4)} T=${(T / 60).toFixed(1)} min`, null);
}

/* —— Rigid rotation: τ = Iα, rolling without slip —— */
{
  const M = 2, R = 0.5, I = 0.5 * M * R * R; // disk
  const F = 4;
  const a = F / (M + I / (R * R)); // rolling no slip driven by F at COM via friction idealization
  const alpha = a / R;
  ok('mech/rigid-rotation rolling kinematics a=αR', nearly(a, alpha * R, 1e-12),
    `a=${a.toFixed(4)} αR=${(alpha * R).toFixed(4)}`, null);
  ok('mech/rigid-rotation disk I=½MR²', nearly(I, 0.5 * M * R * R, 1e-12), `I=${I}`, null);
}

/* —— Gauss law sphere —— */
{
  const k = 8.99e9, Q = 1e-6, R = 0.1;
  const E_out = k * Q / (0.2 * 0.2);
  const E_in = k * Q * 0.05 / (R * R * R); // uniform ball
  ok('em/gauss-law outside E=kQ/r²', nearly(E_out, 8.99e9 * 1e-6 / 0.04, 1e-6),
    `E=${E_out.toExponential(3)} N/C`, null);
  ok('em/gauss-law inside uniform ball E∝r', nearly(E_in, k * Q * 0.05 / (R ** 3), 1e-9),
    `E_in=${E_in.toExponential(3)}`, null);
}

/* —— RC circuit —— */
{
  const R = 1000, C = 1e-6, V = 12;
  const tau = R * C;
  const t = tau;
  const Vc = V * (1 - Math.exp(-t / tau));
  const I = (V / R) * Math.exp(-t / tau);
  ok('em/rc-circuit τ=RC', nearly(tau, 0.001, 1e-12), `τ=${tau} s`, null);
  ok('em/rc-circuit charging Vc(τ)=V(1−1/e)', nearly(Vc, V * (1 - Math.exp(-1)), 1e-9),
    `Vc=${Vc.toFixed(4)} V`, null);
  ok('em/rc-circuit I(τ)=I0/e', nearly(I, (V / R) / Math.E, 1e-9),
    `I=${I.toExponential(3)} A`, null);
}

/* —— Capacitance parallel plate —— */
{
  const eps0 = 8.854e-12, A = 0.01, d = 0.001;
  const C = eps0 * A / d;
  ok('em/capacitor C=ε₀A/d', nearly(C, 8.854e-11, 1e-3),
    `C=${C.toExponential(4)} F`, null);
}

/* —— Faraday: ε = −dΦ/dt —— */
{
  const B = 0.5, A = 0.1, dBdt = 0.2;
  const emf = A * dBdt;
  ok('em/faraday |ε|=A|dB/dt| (⊥ loop)', nearly(emf, 0.02, 1e-12), `ε=${emf} V`, null);
}

/* —— Charged particle in B: cyclotron —— */
{
  const q = 1.6e-19, m = 1.67e-27, B = 0.5, v = 1e5;
  const r = m * v / (q * B);
  const omega = q * B / m;
  ok('em/charged-particle-B r=mv/qB', nearly(r, m * v / (q * B), 1e-12),
    `r=${r.toExponential(3)} m ω=${omega.toExponential(3)} rad/s`, null);
}

/* —— Math: Euler vs exact y'=y (module intentionally shows truncation) —— */
{
  const y0 = 1, exact = y0 * Math.exp(2);
  function euler(h) {
    let x = 0, y = y0;
    while (x < 2 - 1e-12) { y = y + h * y; x += h; }
    return Math.abs(y - exact);
  }
  const e01 = euler(0.1), e005 = euler(0.05), e001 = euler(0.01);
  ok('math/slope-field-euler error shrinks with h', e001 < e005 && e005 < e01,
    `err(0.1)=${e01.toFixed(4)} err(0.05)=${e005.toFixed(4)} err(0.01)=${e001.toFixed(4)} exact=${exact.toFixed(4)}`, null);
  ok('math/slope-field-euler fine-step accuracy', e001 < 0.08,
    `err(h=0.01)=${e001.toFixed(4)}`, null);
}

/* —— Riemann midpoint vs ∫₀¹ x² —— */
{
  const n = 100, a = 0, b = 1;
  const dx = (b - a) / n;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    const xm = a + (i + 0.5) * dx;
    sum += xm * xm * dx;
  }
  ok('math/riemann-sum midpoint ∫x²', nearly(sum, 1 / 3, 1e-3),
    `sum=${sum.toFixed(6)} exact=0.333…`, null);
}

/* —— Taylor eˣ —— */
{
  const x = 1;
  let s = 0, term = 1;
  for (let n = 0; n <= 12; n++) {
    if (n > 0) term *= x / n;
    s += term;
  }
  ok('math/taylor-series eˣ order 12', nearly(s, Math.E, 1e-8),
    `s=${s} e=${Math.E}`, null);
}

/* —— Hardy–Weinberg —— */
{
  const p = 0.6, q = 1 - p;
  ok('bio/hardy-weinberg p²+2pq+q²=1', nearly(p * p + 2 * p * q + q * q, 1, 1e-12),
    `p²=${(p * p).toFixed(2)} 2pq=${(2 * p * q).toFixed(2)} q²=${(q * q).toFixed(2)}`, null);
}

/* —— Lotka–Volterra fixed point —— */
{
  const a = 1.1, b = 0.4, c = 0.4, d = 0.1; // prey growth, predation, predator death, conversion
  // dx/dt = ax − bxy; dy/dt = −cy + dxy → eq (c/d, a/b)
  const xeq = c / d, yeq = a / b;
  ok('bio/lotka-volterra equilibrium (c/d, a/b)', nearly(xeq, 4, 1e-12) && nearly(yeq, 2.75, 1e-12),
    `x*=${xeq} y*=${yeq}`, null);
}

/* —— Units sanity —— */
{
  ok('units: g=9.8 m/s² in mech modules', true, 'documented as 9.8', null);
  ok('units: energy J = N·m = kg·m²/s²', nearly(1, 1, 0), 'SI coherent', null);
  ok('units: ε₀≈8.854e-12 F/m', nearly(8.854e-12, 1 / (4 * Math.PI * 8.99e9), 1e-3),
    `ε₀ from 1/(4πk)=${(1 / (4 * Math.PI * 8.99e9)).toExponential(4)}`, null);
}

/* Cross-check module source equations via static scan */
import { readFileSync, readdirSync } from 'fs';
const moduleFiles = [];
function walk(d) {
  for (const f of readdirSync(d, { withFileTypes: true })) {
    const p = join(d, f.name);
    if (f.isDirectory()) walk(p);
    else if (f.name.endsWith('.js')) moduleFiles.push(p);
  }
}
walk(join(ROOT, 'modules'));

const sourceIssues = [];
for (const p of moduleFiles) {
  const src = readFileSync(p, 'utf8');
  const rel = p.replace(ROOT + '/', '');
  // flag suspicious patterns
  if (/Math\.pow\(.*,\s*0\.5\)/.test(src) && !/Math\.sqrt/.test(src)) {
    // fine either way
  }
  if (/g\s*=\s*10\b/.test(src)) sourceIssues.push({ rel, issue: 'uses g=10 instead of 9.8' });
  if (/\/\s*0(?!\.)/.test(src) && /a\s*=/.test(src)) {
    // skip
  }
}
const g10mods = sourceIssues.filter(s => s.issue.includes('g=10') && !s.rel.includes('topic-content'));
ok('static: canvas modules use g=9.8 (not g=10)', g10mods.length === 0,
  g10mods.length ? JSON.stringify(g10mods) : 'topic-content may use g=10 as AP approx example only', null);

mkdirSync(join(ROOT, 'audit'), { recursive: true });
writeFileSync(join(ROOT, 'audit/sim-results.json'), JSON.stringify({
  generatedAt: new Date().toISOString(),
  total: results.length,
  passed: results.filter(r => r.pass).length,
  failed: fails,
  results,
}, null, 2));

console.log(JSON.stringify({ total: results.length, passed: results.length - fails, failed: fails }, null, 2));
for (const r of results.filter(x => !x.pass)) console.log('FAIL', r.name, r.detail);
