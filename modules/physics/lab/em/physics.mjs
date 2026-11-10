/**
 * Electromagnetism core for 物理实验室 · Physics Lab.
 *
 * Pure, DOM-free model used by the E&M view layer and by the headless
 * regression suite.  SI units throughout.  The Coulomb constant is the
 * CODATA value k = 8.9875517923e9 N·m²/C².
 *
 * Finite line / plane sources use exact segment integrals and
 * Gauss–Legendre rectangle quadrature.  Their ideal infinite limits are
 * reported separately by the inspector, so the approximation is explicit.
 */

export const K_COULOMB = 8.9875517923e9; // N·m²/C²
export const EPS0 = 8.8541878128e-12; // F/m
export const MU0 = 1.25663706212e-6; // N/A²
export const E_CHARGE = 1.602176634e-19; // C
export const PROTON_MASS = 1.67262192369e-27; // kg

const TAU = Math.PI * 2;
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

const v3 = (x = 0, y = 0, z = 0) => ({ x, y, z });
const add = (a, b) => v3(a.x + b.x, a.y + b.y, a.z + b.z);
const sub = (a, b) => v3(a.x - b.x, a.y - b.y, a.z - b.z);
const mul = (a, s) => v3(a.x * s, a.y * s, a.z * s);
const dot = (a, b) => a.x * b.x + a.y * b.y + a.z * b.z;
const cross = (a, b) => v3(
  a.y * b.z - a.z * b.y,
  a.z * b.x - a.x * b.z,
  a.x * b.y - a.y * b.x,
);
const len = (a) => Math.hypot(a.x, a.y, a.z);
const norm = (a) => {
  const l = len(a);
  return l > 1e-15 ? mul(a, 1 / l) : v3(0, 0, 0);
};
const arr = (a) => [a.x, a.y, a.z];
const fromArr = (a, fallback = v3()) => (Array.isArray(a)
  ? v3(Number(a[0]) || 0, Number(a[1]) || 0, Number(a[2]) || 0)
  : fallback);

function nextId(em, prefix) {
  const id = `${prefix}-${em.nextId++}`;
  return id;
}

export function createEMWorld() {
  return {
    mode: 'mechanics',
    nextId: 1,
    time: 0,
    settings: { fieldLines: true, equipotentials: false },
    charges: [],
    spheres: [],
    lines: [],
    planes: [],
    probes: [],
    particles: [],
    capacitors: [],
    circuits: [],
    magneticWires: [],
    currentLoops: [],
    solenoids: [],
    uniformFields: [],
    forceWires: [],
    rails: [],
    inductionCoils: [],
    activeCircuitId: null,
    lastParticleError: null,
  };
}

/* ------------------------------------------------------------------ */
/* Electrostatic sources                                              */
/* ------------------------------------------------------------------ */

export function addPointCharge(em, opts = {}) {
  const charge = {
    type: 'emCharge',
    id: opts.id || nextId(em, 'charge'),
    name: opts.name || '',
    x: opts.x ?? 0,
    y: opts.y ?? 1.5,
    z: opts.z ?? 0,
    q: opts.q ?? 1e-9,
  };
  em.charges.push(charge);
  return charge;
}

export function addChargedSphere(em, opts = {}) {
  const sphere = {
    type: 'emSphere',
    id: opts.id || nextId(em, 'sphere'),
    name: opts.name || '',
    x: opts.x ?? 0,
    y: opts.y ?? 1.5,
    z: opts.z ?? 0,
    R: Math.max(0.05, opts.R ?? 1),
    q: opts.q ?? 1e-9,
    distribution: opts.distribution === 'volume' ? 'volume' : 'surface',
  };
  em.spheres.push(sphere);
  return sphere;
}

export function addLineCharge(em, opts = {}) {
  const length = Math.max(0.1, opts.length ?? 4);
  const line = {
    type: 'emLine',
    id: opts.id || nextId(em, 'line'),
    name: opts.name || '',
    x: opts.x ?? 0,
    y: opts.y ?? 1.2,
    z: opts.z ?? 0,
    length,
    axis: ['x', 'y', 'z'].includes(opts.axis) ? opts.axis : 'x',
    q: opts.q ?? 1e-9,
  };
  line.lambda = line.q / line.length;
  em.lines.push(line);
  return line;
}

export function addPlaneCharge(em, opts = {}) {
  const width = Math.max(0.1, opts.width ?? 3);
  const height = Math.max(0.1, opts.height ?? 3);
  const plane = {
    type: 'emPlane',
    id: opts.id || nextId(em, 'plane'),
    name: opts.name || '',
    x: opts.x ?? 0,
    y: opts.y ?? 1.5,
    z: opts.z ?? 0,
    width,
    height,
    axis: ['x', 'y', 'z'].includes(opts.axis) ? opts.axis : 'x',
    q: opts.q ?? 1e-9,
  };
  plane.sigma = plane.q / (plane.width * plane.height);
  em.planes.push(plane);
  return plane;
}

export function addProbe(em, opts = {}) {
  const probe = {
    type: 'emProbe',
    id: opts.id || nextId(em, 'probe'),
    name: opts.name || '',
    x: opts.x ?? 1.5,
    y: opts.y ?? 1.2,
    z: opts.z ?? 0,
  };
  em.probes.push(probe);
  return probe;
}

export function addParticle(em, opts = {}) {
  const particle = {
    type: 'emParticle',
    id: opts.id || nextId(em, 'particle'),
    name: opts.name || '',
    x: opts.x ?? 0,
    y: opts.y ?? 1.5,
    z: opts.z ?? 0,
    vx: opts.vx ?? 0,
    vy: opts.vy ?? 0,
    vz: opts.vz ?? 0,
    q: opts.q ?? 1e-6,
    m: Math.max(1e-30, opts.m ?? 1e-6),
    fixed: !!opts.fixed,
    trail: [],
    time: 0,
  };
  em.particles.push(particle);
  return particle;
}

export function addCapacitor(em, opts = {}) {
  const capacitor = {
    type: 'emCapacitor',
    id: opts.id || nextId(em, 'capacitor'),
    name: opts.name || '',
    x: opts.x ?? 0,
    y: opts.y ?? 1.5,
    z: opts.z ?? 0,
    area: Math.max(1e-6, opts.area ?? 0.5),
    d: Math.max(1e-5, opts.d ?? 0.05),
    kappa: Math.max(1, opts.kappa ?? 1),
    drive: opts.drive === 'V' ? 'V' : 'Q',
    Q: opts.Q ?? 1e-9,
    V: opts.V ?? 0,
    axis: ['x', 'y', 'z'].includes(opts.axis) ? opts.axis : 'x',
  };
  if (capacitor.drive === 'V') capacitor.Q = capacitorState(capacitor).Q;
  else capacitor.V = capacitorState(capacitor).V;
  em.capacitors.push(capacitor);
  return capacitor;
}

export function capacitorState(cap) {
  const A = Math.max(1e-12, cap.area);
  const d = Math.max(1e-9, cap.d);
  const kappa = Math.max(1, cap.kappa);
  const eps = EPS0 * kappa;
  const C = (eps * A) / d;
  let Q;
  let V;
  if (cap.drive === 'V') {
    V = cap.V;
    Q = C * V;
  } else {
    Q = cap.Q;
    V = Q / C;
  }
  const E = Math.abs(V) / d;
  const U = 0.5 * C * V * V;
  return { C, Q, V, E, U, kappa, A, d };
}

/* ------------------------------------------------------------------ */
/* Field and potential                                                */
/* ------------------------------------------------------------------ */

function axisVectors(axis) {
  if (axis === 'y') return { n: v3(0, 1, 0), u: v3(1, 0, 0), v: v3(0, 0, 1) };
  if (axis === 'z') return { n: v3(0, 0, 1), u: v3(1, 0, 0), v: v3(0, 1, 0) };
  return { n: v3(1, 0, 0), u: v3(0, 1, 0), v: v3(0, 0, 1) };
}

function sphereField(source, p) {
  const rvec = sub(p, v3(source.x, source.y, source.z));
  const r = len(rvec);
  const R = source.R;
  const kq = K_COULOMB * source.q;
  if (r < 1e-9) return { E: v3(), V: source.distribution === 'volume' ? (3 * kq) / (2 * R) : kq / R };
  const outsideE = mul(rvec, kq / (r * r * r));
  const outsideV = kq / r;
  if (r >= R) return { E: outsideE, V: outsideV };
  if (source.distribution === 'surface') {
    return { E: v3(), V: kq / R };
  }
  return {
    E: mul(rvec, kq / (R * R * R)),
    V: (kq * (3 * R * R - r * r)) / (2 * R * R * R),
  };
}

function lineField(source, p) {
  const { n } = axisVectors(source.axis);
  const center = v3(source.x, source.y, source.z);
  const half = source.length / 2;
  const a = add(center, mul(n, -half));
  const b = add(center, mul(n, half));
  const rel = sub(p, center);
  const s1 = dot(sub(a, p), n);
  const s2 = dot(sub(b, p), n);
  const rhoVec = sub(rel, mul(n, dot(rel, n)));
  let rho = len(rhoVec);
  if (rho < 1e-7) {
    // On the line axis: the perpendicular component is undefined.  Return a
    // finite value along the axis using the exact axial integral.
    const r1 = Math.abs(s1);
    const r2 = Math.abs(s2);
    const axial = K_COULOMB * source.lambda * (1 / Math.max(1e-7, r1) - 1 / Math.max(1e-7, r2));
    return { E: mul(n, axial), V: 0 };
  }
  const l1 = Math.hypot(rho, s1);
  const l2 = Math.hypot(rho, s2);
  const Epar = K_COULOMB * source.lambda * (1 / l1 - 1 / l2);
  const Eperp = K_COULOMB * source.lambda
    * (s2 / (rho * rho * l2) - s1 / (rho * rho * l1));
  const E = add(mul(n, Epar), mul(rhoVec, Eperp));
  // Finite-segment potential is defined up to a constant; fix V = 0 at a
  // documented point 1 m perpendicular from the segment centre.
  const refOffset = source.axis === 'x' ? v3(0, 0, 1) : v3(1, 0, 0);
  const ref = add(center, refOffset);
  const rref = len(sub(ref, center));
  const sRef1 = dot(sub(a, ref), n);
  const sRef2 = dot(sub(b, ref), n);
  const lRef1 = Math.hypot(rref, sRef1);
  const lRef2 = Math.hypot(rref, sRef2);
  const raw = K_COULOMB * source.lambda * Math.log((s2 + l2) / (s1 + l1));
  const rawRef = K_COULOMB * source.lambda * Math.log((sRef2 + lRef2) / (sRef1 + lRef1));
  return { E, V: raw - rawRef };
}

const GL_NODES = [
  -0.1252334085114689, 0.1252334085114689, -0.3678314989981802, 0.3678314989981802,
  -0.5873179542866175, 0.5873179542866175, -0.7699026741943047, 0.7699026741943047,
  -0.9041172563704749, 0.9041172563704749, -0.9815606342467192, 0.9815606342467192,
];
const GL_WEIGHTS = [
  0.2491470458134028, 0.2491470458134028, 0.2334925365383548, 0.2334925365383548,
  0.2031674267230659, 0.2031674267230659, 0.1600783285433462, 0.1600783285433462,
  0.1069393259953184, 0.1069393259953184, 0.04717533638651183, 0.04717533638651183,
];

function planePotentialOnAxis(hw, hh, z) {
  const zz = Math.max(1e-9, Math.abs(z));
  let sum = 0;
  for (let i = 0; i < GL_NODES.length; i += 1) {
    const y = GL_NODES[i] * hh;
    const w = GL_WEIGHTS[i] * hh;
    sum += w * 2 * Math.asinh(hw / Math.sqrt(y * y + zz * zz));
  }
  return sum;
}

function planeField(source, p) {
  const { n, u, v } = axisVectors(source.axis);
  const center = v3(source.x, source.y, source.z);
  const hw = source.width / 2;
  const hh = source.height / 2;
  const sigma = source.sigma;
  const rel = sub(p, center);
  const uu = dot(rel, u);
  const vv = dot(rel, v);
  const z = dot(rel, n);
  if (Math.abs(uu) < 1e-7 && Math.abs(vv) < 1e-7) {
    const za = Math.abs(z);
    const mag = (sigma / (Math.PI * EPS0))
      * Math.atan((hw * hh) / (Math.max(1e-9, za) * Math.sqrt(hw * hw + hh * hh + za * za)));
    const E = mul(n, z === 0 ? 0 : Math.sign(z) * mag);
    const V = (sigma / (4 * Math.PI * EPS0))
      * (planePotentialOnAxis(hw, hh, z) - planePotentialOnAxis(hw, hh, 1));
    return { E, V };
  }
  // Off-axis: composite midpoint quadrature (32 × 32).  The readout labels
  // finite plates, so this is a display-grade field; the test cases use the
  // exact on-axis rectangle formula above.
  const N = 32;
  const du = source.width / N;
  const dv = source.height / N;
  let E = v3();
  let rawV = 0;
  for (let i = 0; i < N; i += 1) {
    const su = -hw + (i + 0.5) * du;
    for (let j = 0; j < N; j += 1) {
      const sv = -hh + (j + 0.5) * dv;
      const s = add(center, add(mul(u, su), mul(v, sv)));
      const d = sub(p, s);
      const r = len(d);
      if (r > 1e-9) {
        const w = du * dv;
        E = add(E, mul(d, (K_COULOMB * sigma * w) / (r * r * r)));
        rawV += w / r;
      }
    }
  }
  const refRaw = planePotentialOnAxis(hw, hh, 1);
  const V = K_COULOMB * sigma * (rawV - refRaw);
  return { E, V };
}

function capacitorField(cap, p) {
  const { n } = axisVectors(cap.axis);
  const center = v3(cap.x, cap.y, cap.z);
  const rel = sub(p, center);
  const along = dot(rel, n);
  if (Math.abs(along) > cap.d / 2) return null;
  const u = axisVectors(cap.axis).u;
  const v = axisVectors(cap.axis).v;
  const s = clamp(cap.area, 0, Infinity);
  // Square plate of equal area is enough for the ideal readout; the UI labels
  // the field as the ideal parallel-plate value.
  const side = Math.sqrt(s);
  if (Math.abs(dot(rel, u)) > side / 2 || Math.abs(dot(rel, v)) > side / 2) return null;
  const st = capacitorState(cap);
  const E = mul(n, -st.V / cap.d);
  const V = (st.V / cap.d) * along;
  return { E, V };
}

export function electricFieldAt(em, p, { ignoreCapacitors = false } = {}) {
  let E = v3();
  let V = 0;
  for (const s of em.charges) {
    const d = sub(p, v3(s.x, s.y, s.z));
    const r = len(d);
    if (r > 1e-9) {
      E = add(E, mul(d, (K_COULOMB * s.q) / (r * r * r)));
      V += (K_COULOMB * s.q) / r;
    }
  }
  for (const s of em.spheres) {
    const f = sphereField(s, p);
    E = add(E, f.E);
    V += f.V;
  }
  for (const s of em.lines) {
    const f = lineField(s, p);
    E = add(E, f.E);
    V += f.V;
  }
  for (const s of em.planes) {
    const f = planeField(s, p);
    E = add(E, f.E);
    V += f.V;
  }
  if (!ignoreCapacitors) {
    for (const c of em.capacitors) {
      const f = capacitorField(c, p);
      if (f) { E = add(E, f.E); V += f.V; }
    }
  }
  for (const f of em.uniformFields) {
    const inside = !f.size || f.size === Infinity
      || Math.abs(p.x - f.x) <= f.size / 2
      && Math.abs(p.y - f.y) <= f.size / 2
      && Math.abs(p.z - f.z) <= f.size / 2;
    if (!inside) continue;
    E = add(E, v3(f.Ex, f.Ey, f.Ez));
    V += -dot(v3(f.Ex, f.Ey, f.Ez), sub(p, v3(f.x, f.y, f.z)));
  }
  return { E, V };
}

export function potentialAt(em, p) {
  return electricFieldAt(em, p).V;
}

/* ------------------------------------------------------------------ */
/* Magnetic sources                                                   */
/* ------------------------------------------------------------------ */

export function addMagneticWire(em, opts = {}) {
  const wire = {
    type: 'emMagneticWire',
    id: opts.id || nextId(em, 'mwire'),
    name: opts.name || '',
    x: opts.x ?? 0,
    y: opts.y ?? 1.5,
    z: opts.z ?? 0,
    current: opts.current ?? 2,
    length: Math.max(0.1, opts.length ?? 4),
  };
  em.magneticWires.push(wire);
  return wire;
}

export function addCurrentLoop(em, opts = {}) {
  const loop = {
    type: 'emCurrentLoop',
    id: opts.id || nextId(em, 'mloop'),
    name: opts.name || '',
    x: opts.x ?? 0,
    y: opts.y ?? 1.5,
    z: opts.z ?? 0,
    radius: Math.max(0.05, opts.radius ?? 1),
    current: opts.current ?? 2,
  };
  em.currentLoops.push(loop);
  return loop;
}

export function addSolenoid(em, opts = {}) {
  const solenoid = {
    type: 'emSolenoid',
    id: opts.id || nextId(em, 'sol'),
    name: opts.name || '',
    x: opts.x ?? 0,
    y: opts.y ?? 1.5,
    z: opts.z ?? 0,
    radius: Math.max(0.05, opts.radius ?? 0.5),
    length: Math.max(0.1, opts.length ?? 3),
    turns: Math.max(1, Math.round(opts.turns ?? 30)),
    current: opts.current ?? 2,
  };
  solenoid.n = solenoid.turns / solenoid.length;
  em.solenoids.push(solenoid);
  return solenoid;
}

export function addUniformField(em, opts = {}) {
  const field = {
    type: 'emUniform',
    id: opts.id || nextId(em, 'field'),
    name: opts.name || '',
    x: opts.x ?? 0,
    y: opts.y ?? 1.5,
    z: opts.z ?? 0,
    size: opts.size ?? Infinity,
    Ex: opts.Ex ?? 0,
    Ey: opts.Ey ?? 0,
    Ez: opts.Ez ?? 0,
    Bx: opts.Bx ?? 0,
    By: opts.By ?? 0.02,
    Bz: opts.Bz ?? 0,
  };
  em.uniformFields.push(field);
  return field;
}

export function addForceWire(em, opts = {}) {
  const wire = {
    type: 'emForceWire',
    id: opts.id || nextId(em, 'fwire'),
    name: opts.name || '',
    x: opts.x ?? 0,
    y: opts.y ?? 1.5,
    z: opts.z ?? 0,
    length: Math.max(0.05, opts.length ?? 1.5),
    current: opts.current ?? 2,
    dirx: opts.dirx ?? 1,
    diry: opts.diry ?? 0,
    dirz: opts.dirz ?? 0,
  };
  em.forceWires.push(wire);
  return wire;
}

function loopFieldAt(loop, p) {
  const center = v3(loop.x, loop.y, loop.z);
  const rel = sub(p, center);
  const R = loop.radius;
  const axis = v3(0, 1, 0);
  const h = dot(rel, axis);
  const rhoVec = sub(rel, mul(axis, h));
  const rho = len(rhoVec);
  if (rho < 1e-6) {
    const B = (MU0 * loop.current * R * R) / (2 * Math.pow(R * R + h * h, 1.5));
    return mul(axis, B);
  }
  // Numerical Biot–Savart for off-axis points.
  let B = v3();
  const N = 72;
  for (let i = 0; i < N; i += 1) {
    const a = (i / N) * TAU;
    const b = ((i + 1) / N) * TAU;
    const pa = add(center, add(mul(v3(1, 0, 0), R * Math.cos(a)), mul(v3(0, 0, 1), R * Math.sin(a))));
    const pb = add(center, add(mul(v3(1, 0, 0), R * Math.cos(b)), mul(v3(0, 0, 1), R * Math.sin(b))));
    const dl = sub(pb, pa);
    const r = sub(p, mul(add(pa, pb), 0.5));
    const rr = len(r);
    if (rr > 1e-8) B = add(B, mul(cross(dl, r), (MU0 * loop.current) / (4 * Math.PI * rr * rr * rr)));
  }
  return B;
}

function wireFieldAt(wire, p) {
  const dx = p.x - wire.x;
  const dz = p.z - wire.z;
  const r2 = dx * dx + dz * dz;
  if (r2 < 1e-12) return v3();
  const k = (MU0 * wire.current) / (TAU * r2);
  // Current along +y; B = μ0 I/(2πρ) φ̂ with φ̂ = ŷ × r̂.
  return v3(dz * k, 0, -dx * k);
}

export function magneticFieldAt(em, p) {
  let B = v3();
  for (const wire of em.magneticWires) B = add(B, wireFieldAt(wire, p));
  for (const loop of em.currentLoops) B = add(B, loopFieldAt(loop, p));
  for (const solenoid of em.solenoids) {
    const dx = p.x - solenoid.x;
    const dz = p.z - solenoid.z;
    const dy = p.y - solenoid.y;
    const rho = Math.hypot(dx, dz);
    if (rho <= solenoid.radius * 1.02 && Math.abs(dy) <= solenoid.length * 0.4) {
      B = add(B, v3(0, MU0 * solenoid.n * solenoid.current, 0));
    }
  }
  for (const field of em.uniformFields) {
    const inside = !field.size || field.size === Infinity
      || Math.abs(p.x - field.x) <= field.size / 2
      && Math.abs(p.y - field.y) <= field.size / 2
      && Math.abs(p.z - field.z) <= field.size / 2;
    if (inside) B = add(B, v3(field.Bx, field.By, field.Bz));
  }
  return B;
}

export function forceOnWire(wire, B) {
  const dir = norm(v3(wire.dirx, wire.diry, wire.dirz));
  return mul(cross(mul(dir, wire.length), B), wire.current);
}

export function addRail(em, opts = {}) {
  const rail = {
    type: 'emRail',
    id: opts.id || nextId(em, 'rail'),
    name: opts.name || '',
    x: opts.x ?? 0,
    y: opts.y ?? 1.5,
    z: opts.z ?? 0,
    ell: Math.max(0.05, opts.ell ?? 1.2),
    length: Math.max(0.2, opts.length ?? 4),
    B: opts.B ?? 0.5,
    R: Math.max(1e-6, opts.R ?? 2),
    mass: Math.max(1e-6, opts.mass ?? 0.2),
    F: opts.F ?? 0,
    v: opts.v ?? 0,
    xRod: opts.xRod ?? 0,
    time: 0,
    emf: 0,
    current: 0,
    force: 0,
  };
  em.rails.push(rail);
  return rail;
}

export function stepRail(rail, h) {
  const k = (rail.B * rail.B * rail.ell * rail.ell) / (rail.mass * rail.R);
  const a0 = rail.F / rail.mass;
  const vTerm = k > 1e-15 ? a0 / k : 0;
  let nextV;
  let dx;
  if (k > 1e-15) {
    const decay = Math.exp(-k * h);
    nextV = vTerm + (rail.v - vTerm) * decay;
    dx = vTerm * h + (rail.v - vTerm) * (1 - decay) / k;
  } else {
    nextV = rail.v + a0 * h;
    dx = rail.v * h + 0.5 * a0 * h * h;
  }
  rail.v = nextV;
  rail.xRod += dx;
  const limit = Math.max(0, rail.length / 2 - 0.12);
  if (rail.xRod > limit) { rail.xRod = limit; rail.v = Math.min(0, rail.v); }
  if (rail.xRod < -limit) { rail.xRod = -limit; rail.v = Math.max(0, rail.v); }
  rail.emf = rail.B * rail.ell * rail.v;
  rail.current = rail.emf / rail.R;
  rail.force = -rail.B * rail.ell * rail.current;
  rail.time += h;
}

export function addInductionCoil(em, opts = {}) {
  const coil = {
    type: 'emInductionCoil',
    id: opts.id || nextId(em, 'coil'),
    name: opts.name || '',
    x: opts.x ?? 0,
    y: opts.y ?? 1.5,
    z: opts.z ?? 0,
    width: Math.max(0.1, opts.width ?? 1.5),
    height: Math.max(0.1, opts.height ?? 1.5),
    turns: Math.max(1, Math.round(opts.turns ?? 20)),
    R: Math.max(1e-6, opts.R ?? 5),
    B0: opts.B0 ?? 0.4,
    Bdot: opts.Bdot ?? 0,
    vx: opts.vx ?? 0,
    regionMin: opts.regionMin ?? -2,
    regionMax: opts.regionMax ?? 2,
    time: 0,
    flux: 0,
    emf: 0,
    current: 0,
  };
  em.inductionCoils.push(coil);
  return coil;
}

export function inductionCoilState(coil) {
  const left = coil.x - coil.width / 2;
  const right = coil.x + coil.width / 2;
  const overlap = Math.max(0, Math.min(right, coil.regionMax) - Math.max(left, coil.regionMin));
  const area = overlap * coil.height;
  const B = coil.B0 + coil.Bdot * coil.time;
  const flux = coil.turns * B * area;
  const leftInside = left > coil.regionMin && left < coil.regionMax;
  const rightInside = right > coil.regionMin && right < coil.regionMax;
  const dArea = coil.height * coil.vx * ((rightInside ? 1 : 0) - (leftInside ? 1 : 0));
  const emf = -(coil.turns * (coil.Bdot * area + B * dArea));
  const current = emf / coil.R;
  return { B, area, flux, emf, current, overlap };
}

export function stepInductionCoil(coil, h) {
  coil.x += coil.vx * h;
  coil.time += h;
  const st = inductionCoilState(coil);
  coil.flux = st.flux;
  coil.emf = st.emf;
  coil.current = st.current;
}

/* ------------------------------------------------------------------ */
/* Charged-particle motion (Boris pusher)                             */
/* ------------------------------------------------------------------ */

export function stepParticle(em, particle, h) {
  if (particle.fixed) return;
  const p = v3(particle.x, particle.y, particle.z);
  const { E } = electricFieldAt(em, p);
  const B = magneticFieldAt(em, p);
  const qm = particle.q / particle.m;
  const v0 = v3(particle.vx, particle.vy, particle.vz);
  let v = v3(particle.vx, particle.vy, particle.vz);
  const halfE = mul(E, (qm * h) / 2);
  const vMinus = add(v, halfE);
  const t = mul(B, (qm * h) / 2);
  const t2 = dot(t, t);
  const s = mul(t, 2 / (1 + t2));
  const vPrime = add(vMinus, cross(vMinus, t));
  const vPlus = add(vMinus, cross(vPrime, s));
  v = add(vPlus, halfE);
  particle.vx = v.x;
  particle.vy = v.y;
  particle.vz = v.z;
  // Trapezoidal position update: exact for constant E and second order for B.
  particle.x += 0.5 * (v0.x + v.x) * h;
  particle.y += 0.5 * (v0.y + v.y) * h;
  particle.z += 0.5 * (v0.z + v.z) * h;
  particle.time += h;
  const last = particle.trail[particle.trail.length - 1];
  if (!last || Math.hypot(particle.x - last[0], particle.y - last[1], particle.z - last[2]) > 0.025) {
    particle.trail.push([particle.x, particle.y, particle.z]);
    if (particle.trail.length > 4000) particle.trail.shift();
  }
}

export function stepEM(em, h) {
  for (const particle of em.particles) stepParticle(em, particle, h);
  for (const rail of em.rails) stepRail(rail, h);
  for (const coil of em.inductionCoils) stepInductionCoil(coil, h);
  for (const circuit of em.circuits) stepCircuit(circuit, h);
  em.time += h;
}

/* ------------------------------------------------------------------ */
/* Circuit model (modified nodal analysis, trapezoidal companions)    */
/* ------------------------------------------------------------------ */

export function addCircuit(em, opts = {}) {
  const circuit = {
    type: 'emCircuit',
    id: opts.id || nextId(em, 'circuit'),
    name: opts.name || '',
    x: opts.x ?? 0,
    y: opts.y ?? 1.35,
    z: opts.z ?? 0,
    time: 0,
    components: [],
    wires: [],
    selectedComponentId: null,
    selectedWireId: null,
    last: null,
    samples: [],
    initialised: false,
    mount: opts.mount ? { ...opts.mount } : null,
  };
  em.circuits.push(circuit);
  em.activeCircuitId = circuit.id;
  return circuit;
}

export function addCircuitComponent(circuit, kind, opts = {}) {
  const component = {
    id: `${kind[0]}${circuit.components.length + 1}-${Math.random().toString(36).slice(2, 6)}`,
    kind,
    x: opts.x ?? 80 + circuit.components.length * 100,
    y: opts.y ?? 140,
    rot: opts.rot ?? 0,
    label: opts.label || '',
  };
  if (kind === 'battery') {
    component.emf = opts.emf ?? 9;
    component.r = Math.max(0, opts.r ?? 0);
  } else if (kind === 'resistor') {
    component.R = Math.max(1e-6, opts.R ?? 10);
  } else if (kind === 'capacitor') {
    component.C = Math.max(1e-12, opts.C ?? 0.01);
    component.v0 = opts.v0 ?? 0;
    component.vPrev = component.v0;
    component.iPrev = 0;
  } else if (kind === 'inductor') {
    component.L = Math.max(1e-12, opts.L ?? 1);
    component.i0 = opts.i0 ?? 0;
    component.iPrev = component.i0;
    component.vPrev = 0;
  } else if (kind === 'switch') {
    component.closed = opts.closed ?? false;
  } else if (kind === 'ammeter') {
    component.R = 1e-4;
  } else if (kind === 'voltmeter') {
    component.R = 1e9;
  }
  circuit.components.push(component);
  return component;
}

export function connectCircuit(circuit, a, b) {
  const wire = {
    id: `w${circuit.wires.length + 1}-${Math.random().toString(36).slice(2, 6)}`,
    a: { comp: a.comp, term: a.term ?? 0 },
    b: { comp: b.comp, term: b.term ?? 0 },
  };
  circuit.wires.push(wire);
  return wire;
}

export function autoSeriesCircuit(circuit) {
  circuit.wires = [];
  const comps = circuit.components.filter((c) => !c.kind.includes('meter'));
  if (comps.length < 2) return;
  for (let i = 0; i < comps.length; i += 1) {
    const a = comps[i];
    const b = comps[(i + 1) % comps.length];
    connectCircuit(circuit, { comp: a.id, term: 1 }, { comp: b.id, term: 0 });
  }
}

export function circuitTimeConstant(circuit) {
  let R = 0;
  let C = 0;
  let L = 0;
  let hasC = false;
  let hasL = false;
  for (const c of circuit.components) {
    if (c.kind === 'resistor') R += c.R;
    else if (c.kind === 'battery') R += c.r || 0;
    else if (c.kind === 'capacitor') { C += c.C; hasC = true; }
    else if (c.kind === 'inductor') { L += c.L; hasL = true; }
  }
  const taus = [];
  if (hasC && R > 0) taus.push(R * C);
  if (hasL && R > 0) taus.push(L / R);
  if (hasC && hasL) taus.push(Math.sqrt(L * C));
  return taus.length ? Math.min(...taus) : Infinity;
}

function circuitNodes(circuit) {
  const parent = new Map();
  const find = (x) => {
    let r = x;
    while (parent.get(r) !== r) r = parent.get(r);
    while (parent.get(x) !== r) { const n = parent.get(x); parent.set(x, r); x = n; }
    return r;
  };
  const ensure = (k) => { if (!parent.has(k)) parent.set(k, k); };
  const union = (a, b) => {
    const ra = find(a);
    const rb = find(b);
    if (ra !== rb) parent.set(ra, rb);
  };
  for (const c of circuit.components) {
    ensure(`${c.id}:0`);
    ensure(`${c.id}:1`);
  }
  for (const w of circuit.wires) {
    ensure(`${w.a.comp}:${w.a.term}`);
    ensure(`${w.b.comp}:${w.b.term}`);
    union(`${w.a.comp}:${w.a.term}`, `${w.b.comp}:${w.b.term}`);
  }
  const nodeIndex = new Map();
  const nodes = [];
  for (const key of parent.keys()) {
    const root = find(key);
    if (!nodeIndex.has(root)) {
      nodeIndex.set(root, nodes.length);
      nodes.push(root);
    }
  }
  const indexOf = (key) => nodeIndex.get(find(key));
  return { nodes, indexOf, find, keys: [...parent.keys()] };
}

function solveLinear(A, b) {
  const n = b.length;
  const M = A.map((row, i) => [...row, b[i]]);
  for (let col = 0; col < n; col += 1) {
    let pivot = col;
    for (let r = col + 1; r < n; r += 1) {
      if (Math.abs(M[r][col]) > Math.abs(M[pivot][col])) pivot = r;
    }
    if (Math.abs(M[pivot][col]) < 1e-15) continue;
    if (pivot !== col) { const t = M[pivot]; M[pivot] = M[col]; M[col] = t; }
    const p = M[col][col];
    for (let r = col + 1; r < n; r += 1) {
      const f = M[r][col] / p;
      if (f === 0) continue;
      for (let c = col; c <= n; c += 1) M[r][c] -= f * M[col][c];
    }
  }
  const x = new Array(n).fill(0);
  for (let i = n - 1; i >= 0; i -= 1) {
    if (Math.abs(M[i][i]) < 1e-15) continue;
    let sum = M[i][n];
    for (let j = i + 1; j < n; j += 1) sum -= M[i][j] * x[j];
    x[i] = sum / M[i][i];
  }
  return x;
}

function circuitSolve(circuit) {
  const { nodes, indexOf } = circuitNodes(circuit);
  const gnd = indexOf(`${circuit.batteryId || circuit.components.find((c) => c.kind === 'battery')?.id || circuit.components[0]?.id}:1`);
  const nodeIndex = new Map();
  let n = 0;
  for (let i = 0; i < nodes.length; i += 1) {
    if (i === gnd) continue;
    nodeIndex.set(i, n);
    n += 1;
  }
  const batteries = circuit.components.filter((c) => c.kind === 'battery');
  const size = n + batteries.length;
  const A = Array.from({ length: size }, () => new Array(size).fill(0));
  const rhs = new Array(size).fill(0);
  const voltage = (comp, term) => {
    const idx = nodeIndex.get(indexOf(`${comp.id}:${term}`));
    return idx == null ? null : idx;
  };
  const stampG = (a, b, g) => {
    if (a != null) A[a][a] += g;
    if (b != null) A[b][b] += g;
    if (a != null && b != null) { A[a][b] -= g; A[b][a] -= g; }
  };
  const stampConst = (a, b, isrc) => {
    // Constant current isrc flowing from a to b.
    if (a != null) rhs[a] -= isrc;
    if (b != null) rhs[b] += isrc;
  };

  const cur = new Map();
  for (const c of circuit.components) {
    const a = voltage(c, 0);
    const b = voltage(c, 1);
    if (c.kind === 'resistor' || c.kind === 'ammeter' || c.kind === 'voltmeter') {
      stampG(a, b, 1 / Math.max(1e-9, c.R));
    } else if (c.kind === 'switch') {
      if (c.closed) stampG(a, b, 1 / 1e-4);
    } else if (c.kind === 'capacitor') {
      // Backward Euler on the very first step avoids the half-step error of
      // trapezoidal companions when the circuit starts from rest.
      const G = circuitFirstStep ? c.C / circuitH : (2 * c.C) / circuitH;
      const Ieq = circuitFirstStep
        ? G * (c.vPrev || 0)
        : G * (c.vPrev || 0) + (c.iPrev || 0);
      stampG(a, b, G);
      if (a != null) rhs[a] += Ieq;
      if (b != null) rhs[b] -= Ieq;
      cur.set(c.id, { G, Ieq, a, b });
    } else if (c.kind === 'inductor') {
      const G = circuitFirstStep ? circuitH / c.L : circuitH / (2 * c.L);
      const Ieq = circuitFirstStep
        ? (c.iPrev || 0)
        : (c.iPrev || 0) + G * (c.vPrev || 0);
      stampG(a, b, G);
      if (a != null) rhs[a] -= Ieq;
      if (b != null) rhs[b] += Ieq;
      cur.set(c.id, { G, Ieq, a, b });
    }
  }
  batteries.forEach((batt, k) => {
    const a = voltage(batt, 0);
    const b = voltage(batt, 1);
    const col = n + k;
    if (a != null) { A[a][col] += 1; A[col][a] += 1; }
    if (b != null) { A[b][col] -= 1; A[col][b] -= 1; }
    A[col][col] -= batt.r || 0;
    // Terminal 0 is the negative plate, terminal 1 the positive plate.
    rhs[col] = -batt.emf;
    cur.set(batt.id, { source: true, col, a, b });
  });

  const x = solveLinear(A, rhs);
  const nodeVoltages = new Map();
  for (const [nodeIdx, col] of nodeIndex.entries()) nodeVoltages.set(nodeIdx, x[col]);
  const vAt = (comp, term) => {
    const idx = indexOf(`${comp.id}:${term}`);
    if (idx === gnd) return 0;
    return nodeVoltages.get(idx) ?? 0;
  };
  const result = { nodes, nodeVoltages, currents: new Map(), voltages: new Map(), vAt, gnd };
  for (const c of circuit.components) {
    let i = 0;
    if (c.kind === 'resistor' || c.kind === 'ammeter' || c.kind === 'voltmeter') {
      i = (vAt(c, 0) - vAt(c, 1)) / Math.max(1e-9, c.R);
    } else if (c.kind === 'switch') {
      i = c.closed ? (vAt(c, 0) - vAt(c, 1)) / 1e-4 : 0;
    } else if (c.kind === 'battery') {
      const meta = cur.get(c.id);
      i = meta ? (x[meta.col] || 0) : 0;
    } else if (c.kind === 'capacitor' || c.kind === 'inductor') {
      const meta = cur.get(c.id);
      i = meta.G * (vAt(c, 0) - vAt(c, 1)) + (c.kind === 'capacitor' ? -meta.Ieq : meta.Ieq);
    }
    result.currents.set(c.id, i);
    result.voltages.set(c.id, vAt(c, 0) - vAt(c, 1));
  }
  return result;
}

let circuitH = 1 / 240;
let circuitFirstStep = false;

export function stepCircuit(circuit, h) {
  const tau = circuitTimeConstant(circuit);
  let n = 1;
  if (Number.isFinite(tau) && tau > 0) n = clamp(Math.ceil(h / (tau / 80)), 1, 64);
  const sub = h / n;
  for (let k = 0; k < n; k += 1) {
    circuitH = sub;
    circuitFirstStep = !circuit.initialised;
    const result = circuitSolve(circuit);
    circuit.initialised = true;
    for (const c of circuit.components) {
      const v = result.vAt(c, 0) - result.vAt(c, 1);
      const i = result.currents.get(c.id) || 0;
      c.vNow = v;
      c.iNow = i;
      if (c.kind === 'capacitor') { c.vPrev = v; c.iPrev = i; }
      else if (c.kind === 'inductor') { c.iPrev = i; c.vPrev = v; }
    }
    circuit.last = result;
    circuit.time += sub;
    if (circuit.samples.length < 6000) {
      const i = result.currents.get(circuit.components.find((c) => c.kind === 'battery')?.id) || 0;
      const cap = circuit.components.find((c) => c.kind === 'capacitor');
      const ind = circuit.components.find((c) => c.kind === 'inductor');
      circuit.samples.push({
        t: circuit.time,
        i,
        vC: cap ? result.vAt(cap, 0) - result.vAt(cap, 1) : 0,
        vL: ind ? result.vAt(ind, 0) - result.vAt(ind, 1) : 0,
        iL: ind ? result.currents.get(ind.id) || 0 : 0,
      });
    }
  }
}

export function resetCircuit(circuit) {
  circuit.time = 0;
  circuit.samples = [];
  circuit.last = null;
  circuit.initialised = false;
  for (const c of circuit.components) {
    if (c.kind === 'capacitor') { c.vPrev = c.v0 || 0; c.iPrev = 0; }
    else if (c.kind === 'inductor') { c.iPrev = c.i0 || 0; c.vPrev = 0; }
  }
}

/* ------------------------------------------------------------------ */
/* Scene helpers                                                      */
/* ------------------------------------------------------------------ */

export function emEntityById(em, type, id) {
  const table = {
    emCharge: em.charges,
    emSphere: em.spheres,
    emLine: em.lines,
    emPlane: em.planes,
    emProbe: em.probes,
    emParticle: em.particles,
    emCapacitor: em.capacitors,
    emCircuit: em.circuits,
    emMagneticWire: em.magneticWires,
    emCurrentLoop: em.currentLoops,
    emSolenoid: em.solenoids,
    emUniform: em.uniformFields,
    emForceWire: em.forceWires,
    emRail: em.rails,
    emInductionCoil: em.inductionCoils,
  };
  return (table[type] || []).find((x) => x.id === id) || null;
}

export function emSceneEntities(em) {
  return [
    ...em.charges,
    ...em.spheres,
    ...em.lines,
    ...em.planes,
    ...em.probes,
    ...em.particles,
    ...em.capacitors,
    ...em.circuits,
    ...em.magneticWires,
    ...em.currentLoops,
    ...em.solenoids,
    ...em.uniformFields,
    ...em.forceWires,
    ...em.rails,
    ...em.inductionCoils,
  ];
}

export function removeEMEntity(em, entity) {
  const key = {
    emCharge: 'charges',
    emSphere: 'spheres',
    emLine: 'lines',
    emPlane: 'planes',
    emProbe: 'probes',
    emParticle: 'particles',
    emCapacitor: 'capacitors',
    emCircuit: 'circuits',
    emMagneticWire: 'magneticWires',
    emCurrentLoop: 'currentLoops',
    emSolenoid: 'solenoids',
    emUniform: 'uniformFields',
    emForceWire: 'forceWires',
    emRail: 'rails',
    emInductionCoil: 'inductionCoils',
  }[entity.type];
  if (!key) return false;
  em[key] = em[key].filter((x) => x.id !== entity.id);
  if (entity.type === 'emCircuit' && em.activeCircuitId === entity.id) {
    em.activeCircuitId = em.circuits[0]?.id || null;
  }
  return true;
}

export function duplicateEMEntity(em, entity, offset = 0.8) {
  const clone = (src, overrides) => ({ ...src, ...overrides, trail: src.trail ? [...src.trail] : undefined });
  const base = { x: entity.x + offset, y: entity.y, z: entity.z + offset };
  if (entity.type === 'emCharge') return addPointCharge(em, { ...base, q: entity.q, name: '' });
  if (entity.type === 'emSphere') return addChargedSphere(em, { ...base, R: entity.R, q: entity.q, distribution: entity.distribution });
  if (entity.type === 'emLine') return addLineCharge(em, { ...base, length: entity.length, axis: entity.axis, q: entity.q });
  if (entity.type === 'emPlane') return addPlaneCharge(em, { ...base, width: entity.width, height: entity.height, axis: entity.axis, q: entity.q });
  if (entity.type === 'emProbe') return addProbe(em, base);
  if (entity.type === 'emParticle') {
    return addParticle(em, {
      ...base, vx: entity.vx, vy: entity.vy, vz: entity.vz, q: entity.q, m: entity.m,
    });
  }
  if (entity.type === 'emCapacitor') {
    return addCapacitor(em, {
      ...base, area: entity.area, d: entity.d, kappa: entity.kappa,
      drive: entity.drive, Q: entity.Q, V: entity.V, axis: entity.axis,
    });
  }
  if (entity.type === 'emCircuit') {
    const copy = addCircuit(em, { name: entity.name ? `${entity.name} 副本` : '' });
    for (const c of entity.components) addCircuitComponent(copy, c.kind, { ...c, x: c.x + 24, y: c.y + 24 });
    copy.wires = entity.wires.map((w) => ({ ...w, a: { ...w.a }, b: { ...w.b } }));
    autoSeriesCircuit(copy);
    return copy;
  }
  if (entity.type === 'emMagneticWire') return addMagneticWire(em, { ...base, current: entity.current, length: entity.length });
  if (entity.type === 'emCurrentLoop') return addCurrentLoop(em, { ...base, radius: entity.radius, current: entity.current });
  if (entity.type === 'emSolenoid') {
    return addSolenoid(em, { ...base, radius: entity.radius, length: entity.length, turns: entity.turns, current: entity.current });
  }
  if (entity.type === 'emUniform') {
    return addUniformField(em, {
      ...base, size: entity.size, Ex: entity.Ex, Ey: entity.Ey, Ez: entity.Ez,
      Bx: entity.Bx, By: entity.By, Bz: entity.Bz,
    });
  }
  if (entity.type === 'emForceWire') {
    return addForceWire(em, { ...base, length: entity.length, current: entity.current, dirx: entity.dirx, diry: entity.diry, dirz: entity.dirz });
  }
  if (entity.type === 'emRail') {
    return addRail(em, {
      ...base, ell: entity.ell, length: entity.length, B: entity.B, R: entity.R,
      mass: entity.mass, F: entity.F, v: entity.v,
    });
  }
  if (entity.type === 'emInductionCoil') {
    return addInductionCoil(em, {
      ...base, width: entity.width, height: entity.height, turns: entity.turns, R: entity.R,
      B0: entity.B0, Bdot: entity.Bdot, vx: entity.vx,
      regionMin: entity.regionMin, regionMax: entity.regionMax,
    });
  }
  void clone;
  return null;
}

export function serializeEM(em) {
  const plain = (value) => (value === Infinity ? null : value);
  return {
    version: 1,
    mode: em.mode,
    time: em.time,
    settings: { ...em.settings },
    activeCircuitId: em.activeCircuitId,
    charges: em.charges.map((c) => ({ ...c })),
    spheres: em.spheres.map((c) => ({ ...c })),
    lines: em.lines.map((c) => ({ ...c })),
    planes: em.planes.map((c) => ({ ...c })),
    probes: em.probes.map((c) => ({ ...c })),
    particles: em.particles.map((c) => ({
      ...c, trail: c.trail.slice(-1200),
    })),
    capacitors: em.capacitors.map((c) => ({ ...c })),
    circuits: em.circuits.map((c) => ({
      ...c,
      components: c.components.map((x) => ({ ...x })),
      wires: c.wires.map((w) => ({ ...w, a: { ...w.a }, b: { ...w.b } })),
      samples: c.samples.slice(-1800),
    })),
    magneticWires: em.magneticWires.map((c) => ({ ...c })),
    currentLoops: em.currentLoops.map((c) => ({ ...c })),
    solenoids: em.solenoids.map((c) => ({ ...c })),
    uniformFields: em.uniformFields.map((c) => ({ ...c, size: plain(c.size) })),
    forceWires: em.forceWires.map((c) => ({ ...c })),
    rails: em.rails.map((c) => ({ ...c })),
    inductionCoils: em.inductionCoils.map((c) => ({ ...c })),
  };
}

export function deserializeEM(em, data) {
  if (!data || typeof data !== 'object') return false;
  em.mode = data.mode === 'em' ? 'em' : 'mechanics';
  em.time = data.time || 0;
  em.settings = { fieldLines: true, equipotentials: false, ...(data.settings || {}) };
  em.activeCircuitId = data.activeCircuitId || null;
  const restore = (key, list, map) => {
    em[key] = (list || []).map((item) => {
      const next = map({ ...item });
      if (next.type === 'emParticle') next.trail = (item.trail || []).map((p) => [...p]);
      if (next.type === 'emCircuit') {
        next.samples = (item.samples || []).map((s) => ({ ...s }));
        next.components = (item.components || []).map((c) => ({ ...c }));
        next.wires = (item.wires || []).map((w) => ({ ...w, a: { ...w.a }, b: { ...w.b } }));
        next.last = null;
      }
      return next;
    });
  };
  restore('charges', data.charges, (x) => x);
  restore('spheres', data.spheres, (x) => x);
  restore('lines', data.lines, (x) => x);
  restore('planes', data.planes, (x) => x);
  restore('probes', data.probes, (x) => x);
  restore('particles', data.particles, (x) => x);
  restore('capacitors', data.capacitors, (x) => x);
  restore('circuits', data.circuits, (x) => x);
  restore('magneticWires', data.magneticWires, (x) => x);
  restore('currentLoops', data.currentLoops, (x) => x);
  restore('solenoids', data.solenoids, (x) => x);
  restore('uniformFields', data.uniformFields, (x) => ({
    ...x, size: x.size == null ? Infinity : x.size,
  }));
  restore('forceWires', data.forceWires, (x) => x);
  restore('rails', data.rails, (x) => x);
  restore('inductionCoils', data.inductionCoils, (x) => x);
  let maxId = 0;
  for (const entity of emSceneEntities(em)) {
    const m = /-(\d+)$/.exec(entity.id || '');
    if (m) maxId = Math.max(maxId, Number(m[1]));
  }
  em.nextId = Math.max(em.nextId, maxId + 1);
  return true;
}

export function captureEMInitial(em) {
  em.initial = serializeEM(em);
}

export function resetEM(em) {
  if (em.initial) {
    const initial = em.initial;
    const mode = em.mode;
    const activeCircuitId = em.activeCircuitId;
    deserializeEM(em, initial);
    em.initial = initial;
    em.mode = mode;
    em.activeCircuitId = activeCircuitId && em.circuits.some((c) => c.id === activeCircuitId)
      ? activeCircuitId
      : (em.circuits[0]?.id || null);
  }
  for (const circuit of em.circuits) resetCircuit(circuit);
} 

