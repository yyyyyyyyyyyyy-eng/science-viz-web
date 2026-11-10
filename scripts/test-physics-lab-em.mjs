#!/usr/bin/env node
/**
 * Analytic E&M regression suite for modules/physics/lab/em/physics.mjs.
 * Run directly: node scripts/test-physics-lab-em.mjs
 * Also invoked by scripts/test-physics-lab.mjs.
 */
import {
  E_CHARGE,
  EPS0,
  K_COULOMB,
  MU0,
  PROTON_MASS,
  addCapacitor,
  addChargedSphere,
  addCircuit,
  addCircuitComponent,
  addCurrentLoop,
  addInductionCoil,
  addLineCharge,
  addMagneticWire,
  addParticle,
  addPlaneCharge,
  addPointCharge,
  addRail,
  addSolenoid,
  addUniformField,
  addForceWire,
  capacitorState,
  circuitTimeConstant,
  connectCircuit,
  createEMWorld,
  deserializeEM,
  electricFieldAt,
  forceOnWire,
  inductionCoilState,
  magneticFieldAt,
  serializeEM,
  stepCircuit,
  stepParticle,
  stepRail,
} from '../modules/physics/lab/em/physics.mjs';
import {
  addBlock,
  createWorld,
  deserializeScene,
  serializeScene,
  stepWorld,
} from '../modules/physics/lab/physics.mjs';

let passed = 0;
let failed = 0;
const results = [];

function check(name, fn) {
  try {
    fn();
    passed += 1;
    results.push(`PASS  ${name}`);
    console.log(`PASS  ${name}`);
  } catch (err) {
    failed += 1;
    results.push(`FAIL  ${name}\n      ${err.message}`);
    console.log(`FAIL  ${name}\n      ${err.message}`);
  }
}

function rel(actual, expected) {
  if (!Number.isFinite(actual) || !Number.isFinite(expected)) return Infinity;
  if (expected === 0) return Math.abs(actual);
  return Math.abs(actual - expected) / Math.abs(expected);
}

function near(label, actual, expected, tol, unit = '') {
  const err = rel(actual, expected);
  console.log(`      ${label}: ${actual.toExponential(6)}${unit} vs ${expected.toExponential(6)}${unit}  rel.err ${(err * 100).toFixed(4)}%  tol ${(tol * 100).toFixed(2)}%`);
  if (!(err <= tol)) throw new Error(`${label} outside tolerance: rel.err=${(err * 100).toFixed(4)}% > ${(tol * 100).toFixed(2)}%`);
}

function eq(label, actual, expected, tol = 1e-9) {
  const err = Math.abs(actual - expected);
  console.log(`      ${label}: ${actual} vs ${expected}  abs.err ${err.toExponential(3)}`);
  if (!(err <= tol)) throw new Error(`${label} failed: ${actual} vs ${expected}`);
}

function vecNear(label, actual, expected, tol) {
  const err = Math.hypot(actual.x - expected.x, actual.y - expected.y, actual.z - expected.z)
    / Math.max(1e-30, Math.hypot(expected.x, expected.y, expected.z));
  console.log(`      ${label}: (${actual.x.toExponential(4)}, ${actual.y.toExponential(4)}, ${actual.z.toExponential(4)}) vs (${expected.x.toExponential(4)}, ${expected.y.toExponential(4)}, ${expected.z.toExponential(4)})  rel.err ${(err * 100).toFixed(4)}%`);
  if (!(err <= tol)) throw new Error(`${label} vector outside tolerance: ${(err * 100).toFixed(4)}%`);
}

function series(circuit, list) {
  for (let i = 0; i < list.length; i += 1) {
    const a = list[i];
    const b = list[(i + 1) % list.length];
    connectCircuit(circuit, { comp: a.id, term: 1 }, { comp: b.id, term: 0 });
  }
}

function makeSeries(kinds) {
  const em = createEMWorld();
  const circuit = addCircuit(em);
  const comps = kinds.map((k) => addCircuitComponent(circuit, k.kind, k.opts || {}));
  series(circuit, comps);
  return { em, circuit, comps };
}

/* ------------------------------------------------------------------ */
/* Electrostatics                                                     */
/* ------------------------------------------------------------------ */

check('point charge: |E| = k|q|/r² and V = kq/r within 0.5%', () => {
  const em = createEMWorld();
  const q = 2.5e-9;
  addPointCharge(em, { x: 0, y: 0, z: 0, q });
  for (const r of [0.4, 1, 2.5]) {
    const f = electricFieldAt(em, { x: r, y: 0, z: 0 });
    near(`r=${r} m |E|`, Math.hypot(f.E.x, f.E.y, f.E.z), (K_COULOMB * q) / (r * r), 0.005, ' V/m');
    near(`r=${r} m V`, f.V, (K_COULOMB * q) / r, 0.005, ' V');
  }
});

check('two point charges: probe E equals the vector superposition within 0.5%', () => {
  const em = createEMWorld();
  const q1 = 3e-9;
  const q2 = -1.2e-9;
  addPointCharge(em, { x: -1, y: 0.4, z: 0, q: q1 });
  addPointCharge(em, { x: 1.4, y: 0.1, z: -0.3, q: q2 });
  const p = { x: 0.3, y: 1.1, z: 0.5 };
  const expected = { x: 0, y: 0, z: 0 };
  for (const [pos, q] of [[{ x: -1, y: 0.4, z: 0 }, q1], [{ x: 1.4, y: 0.1, z: -0.3 }, q2]]) {
    const dx = p.x - pos.x;
    const dy = p.y - pos.y;
    const dz = p.z - pos.z;
    const r = Math.hypot(dx, dy, dz);
    const k = (K_COULOMB * q) / (r * r * r);
    expected.x += k * dx;
    expected.y += k * dy;
    expected.z += k * dz;
  }
  const f = electricFieldAt(em, p);
  vecNear('E superposition', f.E, expected, 0.005);
  const vExp = (K_COULOMB * q1) / Math.hypot(p.x + 1, p.y - 0.4, p.z)
    + (K_COULOMB * q2) / Math.hypot(p.x - 1.4, p.y - 0.1, p.z + 0.3);
  near('V superposition', f.V, vExp, 0.005, ' V');
});

check('uniform sphere: outside point-like, inside E∝r, E(0)=0, continuous at R', () => {
  const em = createEMWorld();
  const q = 5e-9;
  const R = 1.3;
  addChargedSphere(em, { x: 0, y: 0, z: 0, R, q, distribution: 'volume' });
  const outside = electricFieldAt(em, { x: 2 * R, y: 0, z: 0 }).E.x;
  near('outside E at 2R', outside, (K_COULOMB * q) / (4 * R * R), 0.005, ' V/m');
  near('outside V at 2R', electricFieldAt(em, { x: 2 * R, y: 0, z: 0 }).V, (K_COULOMB * q) / (2 * R), 0.005, ' V');
  for (const r of [0.2 * R, 0.5 * R, 0.9 * R]) {
    const E = electricFieldAt(em, { x: r, y: 0, z: 0 }).E.x;
    near(`inside E at r=${r.toFixed(3)}`, E, (K_COULOMB * q * r) / (R * R * R), 0.005, ' V/m');
  }
  eq('E(0)', electricFieldAt(em, { x: 0, y: 0, z: 0 }).E.x, 0, 1e-12);
  const eps = 1e-7;
  const Ein = electricFieldAt(em, { x: R - eps, y: 0, z: 0 }).E.x;
  const Eout = electricFieldAt(em, { x: R + eps, y: 0, z: 0 }).E.x;
  near('continuity E(R-) vs E(R+)', Ein, Eout, 1e-5, ' V/m');
  console.log(`      continuity: E(R-)=${Ein.toExponential(6)}, E(R+)=${Eout.toExponential(6)}`);
});

check('surface-charged sphere: E=0 inside, V=kq/R, point-like outside', () => {
  const em = createEMWorld();
  const q = 4e-9;
  const R = 0.8;
  addChargedSphere(em, { x: 0.2, y: 0.3, z: -0.1, R, q, distribution: 'surface' });
  eq('inside E', electricFieldAt(em, { x: 0.4, y: 0.3, z: -0.1 }).E.x, 0, 1e-12);
  near('inside V', electricFieldAt(em, { x: 0.4, y: 0.3, z: -0.1 }).V, (K_COULOMB * q) / R, 0.005, ' V');
  near('outside E', electricFieldAt(em, { x: 0.2 + 2 * R, y: 0.3, z: -0.1 }).E.x, (K_COULOMB * q) / (4 * R * R), 0.005, ' V/m');
});

check('finite line charge: E approaches λ/(2π ε₀ r) within 1% for L ≫ r', () => {
  const em = createEMWorld();
  const q = 2e-9;
  const L = 2000;
  const r = 1.5;
  addLineCharge(em, { x: 0, y: 0, z: 0, length: L, q, axis: 'x' });
  const lambda = q / L;
  const f = electricFieldAt(em, { x: 0, y: r, z: 0 });
  near('finite line E at midpoint', Math.hypot(f.E.x, f.E.y, f.E.z), lambda / (2 * Math.PI * EPS0 * r), 0.01, ' V/m');
  near('ideal limit 2kλ/r', Math.hypot(f.E.x, f.E.y, f.E.z), (2 * K_COULOMB * lambda) / r, 0.01, ' V/m');
  const short = createEMWorld();
  addLineCharge(short, { x: 0, y: 0, z: 0, length: 4, q, axis: 'x' });
  const fs = electricFieldAt(short, { x: 0, y: 1.5, z: 0 });
  const finite = (K_COULOMB * q / 4) * 4 / (1.5 * Math.hypot(1.5, 2));
  near('finite L=4 exact segment', Math.hypot(fs.E.x, fs.E.y, fs.E.z), finite, 0.005, ' V/m');
  const lambda4 = q / 4;
  const vAt = (r) => 2 * K_COULOMB * lambda4
    * Math.log(((4 / 2) + Math.hypot(r, 2)) / r);
  const v05 = electricFieldAt(short, { x: 0, y: 0.5, z: 0 }).V;
  const v1 = electricFieldAt(short, { x: 0, y: 1, z: 0 }).V;
  near('finite line V(r=0.5)−V(1 m)', v05 - v1, vAt(0.5) - vAt(1), 0.005, ' V');
});

check('finite plane charge: E approaches σ/(2ε₀) within 1% for size ≫ distance', () => {
  const em = createEMWorld();
  const q = 5e-9;
  const size = 800;
  addPlaneCharge(em, { x: 0, y: 0, z: 0, width: size, height: size, q, axis: 'y' });
  const sigma = q / (size * size);
  const f = electricFieldAt(em, { x: 0, y: 1, z: 0 });
  near('finite plate E on axis', Math.hypot(f.E.x, f.E.y, f.E.z), sigma / (2 * EPS0), 0.01, ' V/m');
  console.log(`      ideal infinite limit σ/(2ε₀)=${(sigma / (2 * EPS0)).toExponential(6)} V/m; finite plate readout is labelled ideal when enlarged.`);
});

check('charged particle in uniform E: a=qE/m, displacement ½at² within 0.5%', () => {
  const em = createEMWorld();
  addUniformField(em, { x: 0, y: 0, z: 0, size: Infinity, Ex: 1200, Ey: 0, Ez: 0, By: 0 });
  const q = 2e-9;
  const m = 4e-9;
  const p = addParticle(em, { x: 0, y: 0, z: 0, q, m });
  const h = 1 / 240;
  const T = 0.5;
  const n = Math.round(T / h);
  for (let i = 0; i < n; i += 1) stepParticle(em, p, h);
  const a = (q * 1200) / m;
  near('a = qE/m', a, 600, 1e-9, ' m/s²');
  near('x(0.5 s)', p.x, 0.5 * a * T * T, 0.005, ' m');
  near('v(0.5 s)', p.vx, a * T, 0.005, ' m/s');
});

/* ------------------------------------------------------------------ */
/* Capacitor                                                          */
/* ------------------------------------------------------------------ */

check('parallel-plate capacitor: C=κε₀A/d within 0.5%, U identities', () => {
  const em = createEMWorld();
  const cap = addCapacitor(em, { x: 0, y: 0, z: 0, area: 1.2, d: 0.004, kappa: 2.5, drive: 'V', V: 120 });
  const st = capacitorState(cap);
  near('C', st.C, (2.5 * EPS0 * 1.2) / 0.004, 0.005, ' F');
  near('Q=CV', st.Q, st.C * 120, 1e-9, ' C');
  near('U=QV/2', st.U, (st.Q * 120) / 2, 1e-9, ' J');
  near('U=CV²/2', st.U, 0.5 * st.C * 120 * 120, 1e-9, ' J');
  near('E=V/d', st.E, 120 / 0.004, 1e-9, ' V/m');
});

check('capacitor at constant Q: κ multiplies C, divides E and U by κ', () => {
  const em = createEMWorld();
  const cap = addCapacitor(em, { area: 0.8, d: 0.003, kappa: 1, drive: 'Q', Q: 3e-8 });
  const a = capacitorState(cap);
  cap.kappa = 5;
  const b = capacitorState(cap);
  near('C ratio', b.C / a.C, 5, 1e-9);
  near('Q held', b.Q, a.Q, 1e-12, ' C');
  near('E ratio', b.E / a.E, 1 / 5, 1e-9);
  near('U ratio', b.U / a.U, 1 / 5, 1e-9);
  console.log(`      E: ${a.E.toExponential(5)} -> ${b.E.toExponential(5)} V/m; U: ${a.U.toExponential(5)} -> ${b.U.toExponential(5)} J`);
});

check('capacitor at constant V: κ multiplies Q and U by κ', () => {
  const em = createEMWorld();
  const cap = addCapacitor(em, { area: 0.8, d: 0.003, kappa: 1, drive: 'V', V: 80 });
  const a = capacitorState(cap);
  cap.kappa = 5;
  cap.V = 80;
  const b = capacitorState(cap);
  near('Q ratio', b.Q / a.Q, 5, 1e-9);
  near('U ratio', b.U / a.U, 5, 1e-9);
  near('E held', b.E / a.E, 1, 1e-9);
  console.log(`      Q: ${a.Q.toExponential(5)} -> ${b.Q.toExponential(5)} C; U: ${a.U.toExponential(5)} -> ${b.U.toExponential(5)} J`);
});

/* ------------------------------------------------------------------ */
/* Circuits                                                           */
/* ------------------------------------------------------------------ */

check('series RC charging: v_C(t)=ε(1−e^{−t/RC}) within 1% over 0..3RC', () => {
  const R = 1000;
  const C = 1e-6;
  const emf = 9;
  const { circuit, comps } = makeSeries([
    { kind: 'battery', opts: { emf, r: 0 } },
    { kind: 'resistor', opts: { R } },
    { kind: 'capacitor', opts: { C } },
  ]);
  const cap = comps[2];
  const h = 1e-5;
  const steps = Math.round((3 * R * C) / h);
  let worst = 0;
  let worstT = 0;
  for (let i = 0; i < steps; i += 1) {
    stepCircuit(circuit, h);
    const t = circuit.time;
    const theory = emf * (1 - Math.exp(-t / (R * C)));
    const actual = cap.vPrev;
    const err = rel(actual, theory);
    if (err > worst) { worst = err; worstT = t; }
  }
  const theory = emf * (1 - Math.exp(-circuit.time / (R * C)));
  near('v_C(3RC)', cap.vPrev, theory, 0.01, ' V');
  console.log(`      worst error over 0..3RC: ${(worst * 100).toFixed(4)}% at t=${worstT.toExponential(4)} s (τ=${(R * C).toExponential(4)} s)`);
  if (worst > 0.01) throw new Error(`RC worst error ${(worst * 100).toFixed(4)}% > 1%`);
});

check('series RL current: i(t)=(ε/R)(1−e^{−Rt/L}) within 1%', () => {
  const R = 10;
  const L = 0.1;
  const emf = 9;
  const { circuit, comps } = makeSeries([
    { kind: 'battery', opts: { emf, r: 0 } },
    { kind: 'resistor', opts: { R } },
    { kind: 'inductor', opts: { L } },
  ]);
  const ind = comps[2];
  const h = 1e-5;
  const steps = Math.round((5 * L / R) / h);
  let worst = 0;
  for (let i = 0; i < steps; i += 1) {
    stepCircuit(circuit, h);
    const theory = (emf / R) * (1 - Math.exp(-circuit.time / (L / R)));
    worst = Math.max(worst, rel(ind.iPrev, theory));
  }
  const theory = (emf / R) * (1 - Math.exp(-circuit.time / (L / R)));
  near('i(5τ)', ind.iPrev, theory, 0.01, ' A');
  console.log(`      worst error over 0..5τ: ${(worst * 100).toFixed(4)}% (τ=L/R=${(L / R).toExponential(4)} s)`);
  if (worst > 0.01) throw new Error(`RL worst error ${(worst * 100).toFixed(4)}% > 1%`);
});

check('series LC: period 2π√(LC) within 1%, C↔L energy conserved within 0.5%', () => {
  const L = 1;
  const C = 0.01;
  const V0 = 10;
  const em = createEMWorld();
  const circuit = addCircuit(em);
  const battery = addCircuitComponent(circuit, 'battery', { emf: 0, r: 0 });
  const ind = addCircuitComponent(circuit, 'inductor', { L });
  const cap = addCircuitComponent(circuit, 'capacitor', { C, v0: V0 });
  series(circuit, [battery, ind, cap]);
  const h = 1e-4;
  let prev = null;
  const crossings = [];
  let energyMin = Infinity;
  let energyMax = 0;
  for (let i = 0; i < 9000; i += 1) {
    stepCircuit(circuit, h);
    const v = cap.vPrev;
    const energy = 0.5 * C * v * v + 0.5 * L * ind.iPrev * ind.iPrev;
    energyMin = Math.min(energyMin, energy);
    energyMax = Math.max(energyMax, energy);
    if (prev != null && prev * v < 0) {
      const frac = prev / (prev - v);
      crossings.push(circuit.time - h + frac * h);
    }
    prev = v;
  }
  const period = crossings.length >= 3 ? crossings[2] - crossings[0] : NaN;
  near('period', period, 2 * Math.PI * Math.sqrt(L * C), 0.01, ' s');
  near('energy drift', energyMax - energyMin, 0, 0.005 * 0.5 * C * V0 * V0, ' J');
  console.log(`      E min=${energyMin.toExponential(6)} J, max=${energyMax.toExponential(6)} J, E0=${(0.5 * C * V0 * V0).toExponential(6)} J`);
});

check('Ohm law on one resistor: I=V/R within 0.5%', () => {
  const { circuit, comps } = makeSeries([
    { kind: 'battery', opts: { emf: 12, r: 0 } },
    { kind: 'resistor', opts: { R: 470 } },
  ]);
  stepCircuit(circuit, 1e-5);
  const R = comps[1];
  near('I', Math.abs(circuit.last.currents.get(R.id)), 12 / 470, 0.005, ' A');
  near('V_R', Math.abs(circuit.last.voltages.get(R.id)), 12, 0.005, ' V');
});

check('Kirchhoff series-parallel: loop and node laws within 0.5%', () => {
  const em = createEMWorld();
  const circuit = addCircuit(em);
  const bat = addCircuitComponent(circuit, 'battery', { emf: 12, r: 0 });
  const r1 = addCircuitComponent(circuit, 'resistor', { R: 100 });
  const r2 = addCircuitComponent(circuit, 'resistor', { R: 200 });
  const r3 = addCircuitComponent(circuit, 'resistor', { R: 300 });
  connectCircuit(circuit, { comp: bat.id, term: 1 }, { comp: r1.id, term: 0 });
  connectCircuit(circuit, { comp: r1.id, term: 1 }, { comp: r2.id, term: 0 });
  connectCircuit(circuit, { comp: r1.id, term: 1 }, { comp: r3.id, term: 0 });
  connectCircuit(circuit, { comp: r2.id, term: 1 }, { comp: bat.id, term: 0 });
  connectCircuit(circuit, { comp: r3.id, term: 1 }, { comp: bat.id, term: 0 });
  stepCircuit(circuit, 1e-5);
  const Req = 100 + (200 * 300) / (200 + 300);
  const Itot = 12 / Req;
  const I1 = Math.abs(circuit.last.currents.get(r1.id));
  const I2 = Math.abs(circuit.last.currents.get(r2.id));
  const I3 = Math.abs(circuit.last.currents.get(r3.id));
  near('R_eq', Req, 220, 1e-9, ' Ω');
  near('total current', I1, Itot, 0.005, ' A');
  near('parallel branch ratio I2/I3', I2 / I3, 300 / 200, 0.005);
  near('node law I1=I2+I3', I2 + I3, I1, 0.005, ' A');
  near('loop law V_R1+V_R2', Math.abs(circuit.last.voltages.get(r1.id)) + Math.abs(circuit.last.voltages.get(r2.id)), 12, 0.005, ' V');
  console.log(`      I1=${I1.toExponential(5)}, I2=${I2.toExponential(5)}, I3=${I3.toExponential(5)} A; τ estimate=${circuitTimeConstant(circuit)}`);
});

/* ------------------------------------------------------------------ */
/* Magnetic fields                                                    */
/* ------------------------------------------------------------------ */

check('infinite wire: B=μ₀I/(2πr) within 0.5%', () => {
  const em = createEMWorld();
  const I = 3.5;
  addMagneticWire(em, { x: 0, y: 0, z: 0, current: I, length: 100 });
  for (const r of [0.5, 1, 2.5]) {
    const B = magneticFieldAt(em, { x: r, y: 0, z: 0 });
    near(`r=${r} m |B|`, Math.hypot(B.x, B.y, B.z), (MU0 * I) / (2 * Math.PI * r), 0.005, ' T');
  }
  const B = magneticFieldAt(em, { x: 1, y: 0, z: 0 });
  near('direction Bz = −μ₀I/(2πr)', B.z, -(MU0 * I) / (2 * Math.PI), 0.005, ' T');
});

check('current loop centre: B=μ₀I/(2R) within 0.5%', () => {
  const em = createEMWorld();
  const I = 4;
  const R = 1.2;
  addCurrentLoop(em, { x: 0, y: 0, z: 0, radius: R, current: I });
  near('B centre', magneticFieldAt(em, { x: 0, y: 0, z: 0 }).y, (MU0 * I) / (2 * R), 0.005, ' T');
  near('B on axis', magneticFieldAt(em, { x: 0, y: 1.5, z: 0 }).y, (MU0 * I * R * R) / (2 * Math.pow(R * R + 1.5 * 1.5, 1.5)), 0.005, ' T');
});

check('long solenoid interior: B≈μ₀nI within 1% away from ends', () => {
  const em = createEMWorld();
  const I = 2;
  const turns = 400;
  const length = 2;
  addSolenoid(em, { x: 0, y: 0, z: 0, radius: 0.5, length, turns, current: I });
  const n = turns / length;
  near('B centre', magneticFieldAt(em, { x: 0, y: 0, z: 0 }).y, MU0 * n * I, 0.01, ' T');
  near('B quarter point', magneticFieldAt(em, { x: 0, y: 0.5, z: 0 }).y, MU0 * n * I, 0.01, ' T');
});

check('cyclotron radius and period within 0.5%', () => {
  const em = createEMWorld();
  const B = 0.05;
  addUniformField(em, { x: 0, y: 0, z: 0, Bx: 0, By: B, Bz: 0, size: Infinity });
  const q = E_CHARGE;
  const m = PROTON_MASS;
  const v = 1e5;
  const p = addParticle(em, { x: 0, y: 0, z: 0, vx: v, q, m });
  const h = 1e-9;
  const centerZ = (m * v) / (Math.abs(q) * B);
  let maxR = 0;
  let prevPhi = Math.atan2(-centerZ, 0);
  const targetPhi = prevPhi + 2 * Math.PI;
  let turnsAt = null;
  for (let i = 0; i < 3000; i += 1) {
    stepParticle(em, p, h);
    maxR = Math.max(maxR, Math.hypot(p.x, p.z - centerZ));
    let phi = Math.atan2(p.z - centerZ, p.x);
    while (phi < prevPhi - Math.PI) phi += 2 * Math.PI;
    if (turnsAt == null && phi >= targetPhi) {
      const frac = (targetPhi - prevPhi) / (phi - prevPhi);
      turnsAt = p.time - h + frac * h;
    }
    prevPhi = phi;
  }
  const R = (m * v) / (Math.abs(q) * B);
  const T = (2 * Math.PI * m) / (Math.abs(q) * B);
  near('radius', maxR, R, 0.005, ' m');
  near('period', turnsAt, T, 0.005, ' s');
});

check('helical motion: pitch v∥T within 1%', () => {
  const em = createEMWorld();
  const B = 0.04;
  addUniformField(em, { x: 0, y: 0, z: 0, Bx: 0, By: B, Bz: 0, size: Infinity });
  const q = E_CHARGE;
  const m = PROTON_MASS;
  const vPerp = 8e4;
  const vPar = 3e4;
  const p = addParticle(em, { x: 0, y: 0, z: 0, vx: vPerp, q, m });
  p.vy = vPar;
  const h = 1e-9;
  const centerZ = (m * vPerp) / (Math.abs(q) * B);
  let prevPhi = Math.atan2(-centerZ, 0);
  const targetPhi = prevPhi + 2 * Math.PI;
  let turnTime = null;
  let yAtTurn = 0;
  for (let i = 0; i < 3000; i += 1) {
    stepParticle(em, p, h);
    let phi = Math.atan2(p.z - centerZ, p.x);
    while (phi < prevPhi - Math.PI) phi += 2 * Math.PI;
    if (turnTime == null && phi >= targetPhi) {
      const frac = (targetPhi - prevPhi) / (phi - prevPhi);
      turnTime = p.time - h + frac * h;
      yAtTurn = p.y - vPar * h * (1 - frac);
    }
    prevPhi = phi;
  }
  const T = (2 * Math.PI * m) / (Math.abs(q) * B);
  near('period', turnTime, T, 0.01, ' s');
  near('pitch', yAtTurn, vPar * T, 0.01, ' m');
});

check('straight wire in uniform B: F=ILB sinθ within 0.5%', () => {
  const em = createEMWorld();
  addUniformField(em, { x: 0, y: 0, z: 0, Bx: 0, By: 0.3, Bz: 0, size: Infinity });
  const wire = addForceWire(em, { x: 0, y: 0, z: 0, current: 2, length: 1.5, dirx: 1, diry: 0, dirz: 0 });
  const B = magneticFieldAt(em, { x: 0, y: 0, z: 0 });
  const F = forceOnWire(wire, B);
  near('|F|', Math.hypot(F.x, F.y, F.z), 2 * 1.5 * 0.3, 0.005, ' N');
  near('Fz = +ILB', F.z, 0.9, 0.005, ' N');
  const em2 = createEMWorld();
  addUniformField(em2, { x: 0, y: 0, z: 0, Bx: 0.3 / Math.SQRT2, By: 0.3 / Math.SQRT2, Bz: 0, size: Infinity });
  const angled = addForceWire(em2, { current: 2, length: 1.5, dirx: 1, diry: 0, dirz: 0 });
  const F2 = forceOnWire(angled, magneticFieldAt(em2, { x: 0, y: 0, z: 0 }));
  near('θ=45° |F|', Math.hypot(F2.x, F2.y, F2.z), 2 * 1.5 * 0.3 * Math.sin(Math.PI / 4), 0.005, ' N');
});

/* ------------------------------------------------------------------ */
/* Induction                                                          */
/* ------------------------------------------------------------------ */

check('sliding rod: ε=Bℓv, I=ε/R, force opposes motion (Lenz) within 0.5%', () => {
  const em = createEMWorld();
  const rail = addRail(em, {
    x: 0, y: 0, z: 0, ell: 1.2, length: 500, B: 0.4, R: 2.5, mass: 0.3, F: 0, v: 3,
  });
  stepRail(rail, 1e-4);
  near('emf=Bℓv', Math.abs(rail.emf), 0.4 * 1.2 * 3, 0.005, ' V');
  near('I=emf/R', Math.abs(rail.current), (0.4 * 1.2 * 3) / 2.5, 0.005, ' A');
  if (!(rail.force * rail.v < 0)) throw new Error('magnetic force did not oppose motion');
  near('force magnitude B²ℓ²v/R', Math.abs(rail.force), (0.4 * 0.4 * 1.2 * 1.2 * 3) / 2.5, 0.005, ' N');
  console.log(`      v=${rail.v.toFixed(6)} m/s, ε=${rail.emf.toFixed(6)} V, I=${rail.current.toFixed(6)} A, F=${rail.force.toFixed(6)} N (opposes v)`);
});

check('flux rule on a coil matches −ΔΦ/Δt within 1% on a controlled sweep', () => {
  const em = createEMWorld();
  const coil = addInductionCoil(em, {
    x: -0.75, y: 0, z: 0, width: 1, height: 1, turns: 12, B0: 0.35, Bdot: 0,
    vx: 0.5, regionMin: -1, regionMax: 1, R: 4,
  });
  const st = inductionCoilState(coil);
  const dt = 1e-5;
  const oldX = coil.x;
  coil.x = oldX + coil.vx * dt;
  coil.time += dt;
  const next = inductionCoilState(coil);
  coil.x = oldX - coil.vx * dt;
  coil.time -= 2 * dt;
  const prev = inductionCoilState(coil);
  coil.x = oldX;
  coil.time += dt;
  const numeric = -(next.flux - prev.flux) / (2 * dt);
  near('ε analytic', st.emf, numeric, 0.01, ' V');
  near('I=ε/R', st.current, st.emf / 4, 1e-6, ' A');
  console.log(`      Φ=${st.flux.toExponential(6)} Wb, dΦ/dt≈${(-numeric).toExponential(6)} Wb/s, ε=${st.emf.toExponential(6)} V`);
});

check('Lenz sign: increasing flux gives negative emf in the documented convention', () => {
  const em = createEMWorld();
  const ramp = addInductionCoil(em, {
    x: 0, y: 0, z: 0, width: 1, height: 1, turns: 10, B0: 0, Bdot: 8,
    vx: 0, regionMin: -2, regionMax: 2, R: 5,
  });
  const st = inductionCoilState(ramp);
  near('ramped ε', st.emf, -10 * 8 * 1, 0.005, ' V');
  if (!(st.emf < 0)) throw new Error('increasing +y flux did not produce negative emf');
  const moving = addInductionCoil(em, {
    x: -1.6, y: 0, z: 0, width: 1, height: 1, turns: 10, B0: 0.4, Bdot: 0,
    vx: 0.5, regionMin: -2, regionMax: 2, R: 5,
  });
  const ms = inductionCoilState(moving);
  if (!(ms.emf < 0)) throw new Error('entering a +y field did not produce negative emf');
  console.log(`      ramp ε=${st.emf.toFixed(6)} V, entering ε=${ms.emf.toFixed(6)} V; both negative = Lenz opposition`);
});

check('magnetic-drag terminal velocity matches F R/(B²ℓ²) within 1%', () => {
  const em = createEMWorld();
  const B = 0.5;
  const ell = 1;
  const R = 2;
  const F = 0.5;
  const rail = addRail(em, { length: 500, ell, B, R, mass: 0.2, F, v: 0 });
  for (let i = 0; i < 240 * 40; i += 1) stepRail(rail, 1 / 240);
  const vTerm = (F * R) / (B * B * ell * ell);
  near('terminal v', rail.v, vTerm, 0.01, ' m/s');
  near('terminal force balance', Math.abs(rail.force), F, 0.01, ' N');
  console.log(`      v_term=${rail.v.toFixed(6)} m/s vs ${vTerm.toFixed(6)} m/s; ε=${rail.emf.toFixed(6)} V, I=${rail.current.toFixed(6)} A`);
});

/* ------------------------------------------------------------------ */
/* Serialization                                                      */
/* ------------------------------------------------------------------ */

check('series switch: open circuit has i=0, closed circuit obeys Ohm law', () => {
  const em = createEMWorld();
  const circuit = addCircuit(em);
  const bat = addCircuitComponent(circuit, 'battery', { emf: 6, r: 0 });
  const sw = addCircuitComponent(circuit, 'switch', { closed: false });
  const res = addCircuitComponent(circuit, 'resistor', { R: 300 });
  connectCircuit(circuit, { comp: bat.id, term: 1 }, { comp: sw.id, term: 0 });
  connectCircuit(circuit, { comp: sw.id, term: 1 }, { comp: res.id, term: 0 });
  connectCircuit(circuit, { comp: res.id, term: 1 }, { comp: bat.id, term: 0 });
  for (let i = 0; i < 20; i += 1) stepCircuit(circuit, 1e-4);
  near('open current', Math.abs(circuit.last.currents.get(res.id)), 0, 1e-12, ' A');
  sw.closed = true;
  for (let i = 0; i < 20; i += 1) stepCircuit(circuit, 1e-4);
  near('closed current', Math.abs(circuit.last.currents.get(res.id)), 6 / 300, 0.005, ' A');
  console.log(`      open I=0 A, closed I=${Math.abs(circuit.last.currents.get(res.id)).toExponential(5)} A`);
});

check('series ammeter and parallel voltmeter read the actual branch and node', () => {
  const em = createEMWorld();
  const circuit = addCircuit(em);
  const bat = addCircuitComponent(circuit, 'battery', { emf: 9, r: 0 });
  const r1 = addCircuitComponent(circuit, 'resistor', { R: 100 });
  const r2 = addCircuitComponent(circuit, 'resistor', { R: 200 });
  const am = addCircuitComponent(circuit, 'ammeter', {});
  const vm = addCircuitComponent(circuit, 'voltmeter', {});
  connectCircuit(circuit, { comp: bat.id, term: 1 }, { comp: r1.id, term: 0 });
  connectCircuit(circuit, { comp: r1.id, term: 1 }, { comp: am.id, term: 0 });
  connectCircuit(circuit, { comp: am.id, term: 1 }, { comp: r2.id, term: 0 });
  connectCircuit(circuit, { comp: r2.id, term: 1 }, { comp: bat.id, term: 0 });
  connectCircuit(circuit, { comp: vm.id, term: 0 }, { comp: r2.id, term: 0 });
  connectCircuit(circuit, { comp: vm.id, term: 1 }, { comp: r2.id, term: 1 });
  stepCircuit(circuit, 1e-5);
  const I = 9 / 300;
  near('ammeter current', Math.abs(circuit.last.currents.get(am.id)), I, 0.005, ' A');
  near('voltmeter voltage', Math.abs(circuit.last.voltages.get(vm.id)), I * 200, 0.005, ' V');
  near('voltmeter loading', Math.abs(circuit.last.currents.get(vm.id)), 0, 1e-8, ' A');
  console.log(`      I=${Math.abs(circuit.last.currents.get(am.id)).toExponential(5)} A, V=${Math.abs(circuit.last.voltages.get(vm.id)).toExponential(5)} V`);
});

check('E&M world integrates with fixed-step world and serializes with mechanics', () => {
  const world = createWorld({ g: 9.8 });
  addBlock(world, { x: 0, y: 5, z: 0, mass: 1, size: 0.5 });
  addPointCharge(world.em, { x: 1000, y: 0, z: 0, q: 5e-9 });
  addUniformField(world.em, { x: 0, y: 0, z: 0, size: Infinity, Ex: 1000, By: 0, Bz: 0 });
  const particle = addParticle(world.em, { x: 0, y: 0, z: 0, q: 1e-6, m: 1e-6 });
  world.em.mode = 'em';
  for (let i = 0; i < 240; i += 1) stepWorld(world, 1 / 240, { h: 1 / 240 });
  near('E&M particle advances', particle.x, 0.5 * 1000, 0.01, ' m');
  eq('mechanics body paused in E&M mode', world.bodies[0].cannon.position.y, 5, 1e-9);
  const data = serializeScene(world);
  const target = createWorld();
  deserializeScene(target, data);
  eq('charge survives scene round trip', target.em.charges[0].q, 5e-9, 1e-18);
  eq('particle survives scene round trip', target.em.particles[0].x, particle.x, 1e-12);
  if (target.em.mode !== 'em') throw new Error(`mode did not survive round trip: ${target.em.mode}`);
  console.log(`      particle x=${particle.x.toFixed(4)} m at t=${world.time.toFixed(3)} s; mechanics y stays 5 m`);
});

check('E&M scene round-trips through serialize/deserialize', () => {
  const em = createEMWorld();
  addPointCharge(em, { x: 1, y: 2, z: 3, q: 4e-9 });
  addCapacitor(em, { area: 0.5, d: 0.01, kappa: 2, drive: 'V', V: 50 });
  const coil = addInductionCoil(em, { x: 0, turns: 8, width: 1, height: 1 });
  coil.x = 1.25;
  const data = serializeEM(em);
  const restored = createEMWorld();
  deserializeEM(restored, data);
  if (restored.charges.length !== 1 || restored.capacitors.length !== 1 || restored.inductionCoils.length !== 1) {
    throw new Error('entity count changed across round trip');
  }
  eq('charge q', restored.charges[0].q, 4e-9, 1e-18);
  eq('capacitor C drive', restored.capacitors[0].kappa, 2, 1e-12);
  eq('coil x', restored.inductionCoils[0].x, 1.25, 1e-12);
  console.log(`      restored ${restored.charges.length} charge, ${restored.capacitors.length} capacitor, ${restored.inductionCoils.length} coil`);
});

console.log('\n' + results.join('\n'));
console.log(`\n${passed} passed, ${failed} failed (E&M analytic suite)`);
if (failed) process.exit(1);
