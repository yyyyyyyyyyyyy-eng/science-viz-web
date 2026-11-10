#!/usr/bin/env node
/**
 * Preset library checks for 物理实验室 · Physics Lab.
 * Run directly: node scripts/test-physics-lab-presets.mjs
 * Also invoked by scripts/test-physics-lab.mjs.
 *
 * Each committed preset must load, run for a documented fixed-step duration,
 * and match an analytic result with a stated tolerance.
 */
import {
  PRESETS,
  PRESET_UNITS,
  presetsFor,
} from '../modules/physics/lab/presets.mjs';
import {
  angularTableMomentum,
  createWorld,
  deserializeScene,
  fireLauncher,
  getAngularTable,
  getBody,
  getLauncher,
  getLoop,
  getPendulum,
  getPulley,
  getRod,
  getSurface,
  getTurntable,
  launcherMuzzle,
  pendulumPeriod,
  stepWorld,
  surfaceFrame,
} from '../modules/physics/lab/physics.mjs';
import {
  EPS0,
  K_COULOMB,
  MU0,
  capacitorState,
  electricFieldAt,
  emSceneEntities,
  magneticFieldAt,
  potentialAt,
} from '../modules/physics/lab/em/physics.mjs';

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

function near(actual, expected, tol, label) {
  if (!Number.isFinite(actual) || !Number.isFinite(expected) || Math.abs(actual - expected) > tol) {
    throw new Error(`${label}: expected ${expected} ± ${tol}, got ${actual}`);
  }
}

function rel(actual, expected, tol, label) {
  const err = Math.abs(actual - expected);
  const scale = Math.max(1e-12, Math.abs(expected));
  if (!Number.isFinite(actual) || err / scale > tol) {
    throw new Error(`${label}: expected ${expected} (${(tol * 100).toFixed(2)}%), got ${actual} (${((err / scale) * 100).toFixed(3)}%)`);
  }
}

function load(preset) {
  const data = preset.build();
  const world = createWorld({ g: 9.8 });
  if (!deserializeScene(world, data)) throw new Error('deserializeScene returned false');
  return world;
}

function advance(world, seconds, h = 1 / 480) {
  const n = Math.max(1, Math.round(seconds / h));
  for (let i = 0; i < n; i += 1) stepWorld(world, h, { h });
}

function countType(world, type) {
  if (type.startsWith('em')) return emSceneEntities(world.em).filter((entity) => entity.type === type).length;
  const table = {
    body: world.bodies,
    surface: world.surfaces,
    loop: world.loops,
    turntable: world.turntables,
    launcher: world.launchers,
    pulley: world.pulleys,
    barrier: world.barriers,
    pendulum: world.pendulums,
    wedge: world.wedges,
    sensor: world.sensors,
    fan: world.fans,
    oscillator: world.oscillators,
    torsion: world.torsionPendulums,
    elevator: world.elevators,
    carriage: world.carriages,
    angularTable: world.angularTables,
    rod: world.rods,
    orbit: world.orbits,
    tunnel: world.tunnels,
    link: world.links,
  };
  return (table[type] || []).length;
}

function findFocus(world, focus) {
  if (!focus) return null;
  if (focus.type.startsWith('em')) return emSceneEntities(world.em).find((entity) => entity.id === focus.id) || null;
  if (focus.type === 'body') return getBody(world, focus.id);
  if (focus.type === 'surface') return getSurface(world, focus.id);
  if (focus.type === 'launcher') return getLauncher(world, focus.id);
  if (focus.type === 'loop') return getLoop(world, focus.id);
  if (focus.type === 'pulley') return getPulley(world, focus.id);
  if (focus.type === 'pendulum') return getPendulum(world, focus.id);
  if (focus.type === 'rod') return getRod(world, focus.id);
  if (focus.type === 'turntable') return getTurntable(world, focus.id);
  if (focus.type === 'angularTable') return getAngularTable(world, focus.id);
  return null;
}

function measureOscillationPeriod(world, key, seconds, h = 1 / 480) {
  const n = Math.round(seconds / h);
  const velocity = () => (key === 'x' ? world.bodies[0].cannon.velocity.x : world.bodies[0].cannon.velocity.y);
  // Use the first body only for the two spring presets.
  let prev = velocity();
  let lastCross = null;
  let halfPeriod = null;
  for (let i = 0; i < n; i += 1) {
    stepWorld(world, h, { h });
    const now = velocity();
    if (Math.abs(now) < 1e-6) { prev = now; continue; }
    if (prev !== 0 && Math.sign(now) !== Math.sign(prev)) {
      const t = world.time;
      if (lastCross != null) halfPeriod = t - lastCross;
      lastCross = t;
      if (halfPeriod && halfPeriod > 0.05) break;
    }
    prev = now;
  }
  return halfPeriod ? 2 * halfPeriod : NaN;
}

const ANALYTICS = {
  'mech-u1-cart-accel': (world) => {
    const cart = getBody(world, 'cart');
    const fan = world.fans[0];
    const surface = getSurface(world, 'track');
    const { t } = surfaceFrame(surface);
    const v0 = cart.cannon.velocity.dot(t);
    advance(world, 1.0, 1 / 480);
    const measured = (cart.cannon.velocity.dot(t) - v0) / 1.0;
    return {
      duration: 1.0,
      measured,
      expected: fan.thrust / cart.mass,
      tolerance: 0.01,
      unit: 'm/s²',
      label: 'a = F/m',
    };
  },
  'mech-u1-projectile-horizontal': (world) => projectileCheck(world, 0),
  'mech-u1-projectile-angled': (world) => projectileCheck(world, 45),
  'mech-u2-incline-friction': (world) => {
    const block = getBody(world, 'block');
    const surface = getSurface(world, 'incline');
    const { t } = surfaceFrame(surface);
    const angle = (surface.angle * Math.PI) / 180;
    advance(world, 0.5, 1 / 960);
    const measured = -block.cannon.velocity.dot(t) / 0.5;
    return {
      duration: 0.5,
      measured,
      expected: world.g * (Math.sin(angle) - surface.muK * Math.cos(angle)),
      tolerance: 0.01,
      unit: 'm/s²',
      label: 'a = g(sinθ − μk cosθ)',
    };
  },
  'mech-u2-atwood': (world) => {
    const pulley = getPulley(world, 'pulley');
    const a = getBody(world, 'mass-a');
    const b = getBody(world, 'mass-b');
    advance(world, 0.5, 1 / 960);
    const expected = ((a.mass - b.mass) * world.g)
      / (a.mass + b.mass + pulley.I / (pulley.radius * pulley.radius));
    return {
      duration: 0.5,
      measured: -a.cannon.velocity.y / 0.5,
      expected,
      tolerance: 0.005,
      unit: 'm/s²',
      label: 'a = (m₁−m₂)g/(m₁+m₂+I/r²)',
    };
  },
  'mech-u2-air-drag': (world) => {
    const ball = getBody(world, 'ball');
    advance(world, 2.0, 1 / 960);
    return {
      duration: 2.0,
      measured: -ball.cannon.velocity.y,
      expected: (ball.mass * world.g) / ball.drag.b,
      tolerance: 0.01,
      unit: 'm/s',
      label: 'v_t = mg/b',
    };
  },
  'mech-u3-vertical-spring': (world) => {
    const block = getBody(world, 'block');
    const link = world.links[0];
    const period = measureOscillationPeriod(world, 'y', 6, 1 / 480);
    return {
      duration: 6.0,
      measured: period,
      expected: 2 * Math.PI * Math.sqrt(block.mass / link.k),
      tolerance: 0.01,
      unit: 's',
      label: 'T = 2π√(m/k)',
    };
  },
  'mech-u3-loop-energy': (world) => {
    const cart = getBody(world, 'cart');
    const loop = getLoop(world, 'loop');
    let measured = NaN;
    let duration = 0;
    const h = 1 / 960;
    for (let i = 0; i < 6000; i += 1) {
      stepWorld(world, h, { h });
      duration += h;
      if (cart.attachment?.type === 'loop' && cart.attachment.theta >= Math.PI - 0.01) {
        measured = Math.abs(cart.cannon.velocity.length());
        break;
      }
    }
    return {
      duration,
      measured,
      expected: Math.sqrt(world.g * loop.radius),
      tolerance: 0.02,
      unit: 'm/s',
      label: 'v_top = √(gR)',
    };
  },
  'mech-u4-elastic-collision': (world) => {
    const a = getBody(world, 'cart-a');
    const b = getBody(world, 'cart-b');
    advance(world, 2.0, 1 / 960);
    const measured = Math.abs(a.cannon.velocity.x + 1) + Math.abs(b.cannon.velocity.x - 2);
    if (measured > 0.04) throw new Error(`velocity exchange missed by ${measured.toFixed(4)} m/s`);
    return {
      duration: 2.0,
      measured: 0,
      expected: 0,
      tolerance: 1e-6,
      unit: 'm/s',
      label: 'equal masses exchange v (−1, 2)',
      detail: `vA=${a.cannon.velocity.x.toFixed(4)}, vB=${b.cannon.velocity.x.toFixed(4)}; deviation ${measured.toExponential(2)}`,
      exact: measured < 0.04,
    };
  },
  'mech-u4-inelastic-collision': (world) => {
    const a = getBody(world, 'cart-a');
    const b = getBody(world, 'cart-b');
    const expected = (a.mass * 2 + b.mass * -1) / (a.mass + b.mass);
    advance(world, 2.0, 1 / 960);
    return {
      duration: 2.0,
      measured: 0.5 * (a.cannon.velocity.x + b.cannon.velocity.x),
      expected,
      tolerance: 0.02,
      unit: 'm/s',
      label: 'v = (m₁v₁+m₂v₂)/(m₁+m₂)',
      detail: `vA=${a.cannon.velocity.x.toFixed(4)}, vB=${b.cannon.velocity.x.toFixed(4)}`,
    };
  },
  'mech-u5-rod-torque': (world) => {
    const rod = getRod(world, 'rod');
    advance(world, 0.5, 1 / 960);
    return {
      duration: 0.5,
      measured: rod.omega / 0.5,
      expected: rod.torque / rod.I,
      tolerance: 0.005,
      unit: 'rad/s²',
      label: 'α = τ/I',
    };
  },
  'mech-u5-driven-disk': (world) => {
    const table = getTurntable(world, 'disk');
    advance(world, 1.0, 1 / 960);
    return {
      duration: 1.0,
      measured: table.omega / 1.0,
      expected: table.torque / table.I,
      tolerance: 0.005,
      unit: 'rad/s²',
      label: 'α = τ/I',
    };
  },
  'mech-u6-rolling-incline': (world) => {
    const ball = getBody(world, 'ball');
    const surface = getSurface(world, 'incline');
    const { t } = surfaceFrame(surface);
    const angle = (surface.angle * Math.PI) / 180;
    advance(world, 1.2, 1 / 960);
    return {
      duration: 1.2,
      measured: -ball.cannon.velocity.dot(t) / 1.2,
      expected: (world.g * Math.sin(angle)) / (1 + ball.inertiaRatio),
      tolerance: 0.005,
      unit: 'm/s²',
      label: 'a = g sinθ/(1+I/mr²)',
    };
  },
  'mech-u6-angular-momentum': (world) => {
    const table = getAngularTable(world, 'table');
    const L0 = angularTableMomentum(table);
    advance(world, 2.0, 1 / 960);
    const L1 = angularTableMomentum(table);
    return {
      duration: 2.0,
      measured: L1,
      expected: L0,
      tolerance: 0.001,
      unit: 'kg·m²/s',
      label: 'L = Iω constant',
      detail: `ω ${table.omega.toFixed(4)} rad/s, r ${table.r.toFixed(3)} m`,
    };
  },
  'mech-u7-spring-shm': (world) => {
    const block = getBody(world, 'block');
    const link = world.links[0];
    const period = measureOscillationPeriod(world, 'x', 6, 1 / 480);
    return {
      duration: 6.0,
      measured: period,
      expected: 2 * Math.PI * Math.sqrt(block.mass / link.k),
      tolerance: 0.01,
      unit: 's',
      label: 'T = 2π√(m/k)',
    };
  },
  'mech-u7-pendulum': (world) => {
    const pendulum = getPendulum(world, 'pendulum');
    advance(world, 8, 1 / 480);
    return {
      duration: 8.0,
      measured: pendulum.measuredPeriod,
      expected: pendulumPeriod(pendulum, world.g),
      tolerance: 0.01,
      unit: 's',
      label: 'T = 2π√(L/g)',
    };
  },
  'em-u8-two-charges': (world) => {
    advance(world, 0.5, 1 / 480);
    const probe = world.em.probes[0];
    const p = { x: probe.x, y: probe.y, z: probe.z };
    const expectedE = { x: 0, y: 0, z: 0 };
    let expectedV = 0;
    for (const charge of world.em.charges) {
      const dx = p.x - charge.x;
      const dy = p.y - charge.y;
      const dz = p.z - charge.z;
      const r = Math.hypot(dx, dy, dz);
      expectedE.x += (K_COULOMB * charge.q * dx) / (r * r * r);
      expectedE.y += (K_COULOMB * charge.q * dy) / (r * r * r);
      expectedE.z += (K_COULOMB * charge.q * dz) / (r * r * r);
      expectedV += (K_COULOMB * charge.q) / r;
    }
    const { E, V } = electricFieldAt(world.em, p);
    const eMag = Math.hypot(E.x, E.y, E.z);
    const expectedMag = Math.hypot(expectedE.x, expectedE.y, expectedE.z);
    rel(eMag, expectedMag, 1e-9, 'superposition |E|');
    near(V, expectedV, Math.max(1e-9, Math.abs(expectedV) * 1e-9), 'superposition V');
    return {
      duration: 0.5,
      measured: eMag,
      expected: expectedMag,
      tolerance: 1e-9,
      unit: 'V/m',
      label: '|E| = |Σ kq r̂/r²|',
      detail: `V=${V.toExponential(5)} V (theory ${expectedV.toExponential(5)} V)`,
    };
  },
  'em-u8-charged-sphere': (world) => {
    advance(world, 0.5, 1 / 480);
    const sphere = world.em.spheres[0];
    const out = world.em.probes.find((p) => p.id === 'probe-out');
    const inside = world.em.probes.find((p) => p.id === 'probe-in');
    const rOut = Math.hypot(out.x - sphere.x, out.y - sphere.y, out.z - sphere.z);
    const rIn = Math.hypot(inside.x - sphere.x, inside.y - sphere.y, inside.z - sphere.z);
    const ko = K_COULOMB * sphere.q;
    const expectedOut = ko / (rOut * rOut);
    const expectedIn = (ko * rIn) / (sphere.R ** 3);
    const Eout = electricFieldAt(world.em, { x: out.x, y: out.y, z: out.z }).E;
    const Ein = electricFieldAt(world.em, { x: inside.x, y: inside.y, z: inside.z }).E;
    rel(Math.hypot(Eout.x, Eout.y, Eout.z), expectedOut, 1e-9, 'outside E = kq/r²');
    rel(Math.hypot(Ein.x, Ein.y, Ein.z), expectedIn, 1e-9, 'inside E = kqr/R³');
    return {
      duration: 0.5,
      measured: Math.hypot(Eout.x, Eout.y, Eout.z),
      expected: expectedOut,
      tolerance: 1e-9,
      unit: 'V/m',
      label: 'E_out = kq/r² (inside checked too)',
      detail: `E_in=${Math.hypot(Ein.x, Ein.y, Ein.z).toExponential(5)} vs ${expectedIn.toExponential(5)} V/m`,
    };
  },
  'em-u9-equipotential-probe': (world) => {
    advance(world, 0.5, 1 / 480);
    const rows = [];
    for (const probe of world.em.probes) {
      const p = { x: probe.x, y: probe.y, z: probe.z };
      let expected = 0;
      for (const charge of world.em.charges) {
        expected += (K_COULOMB * charge.q)
          / Math.hypot(p.x - charge.x, p.y - charge.y, p.z - charge.z);
      }
      const measured = potentialAt(world.em, p);
      near(measured, expected, Math.max(1e-9, Math.abs(expected) * 1e-9), `V at ${probe.id}`);
      rows.push(`${probe.id}=${measured.toExponential(4)}`);
    }
    return {
      duration: 0.5,
      measured: 0,
      expected: 0,
      tolerance: 1e-9,
      unit: 'V',
      label: 'V = Σ kq/r at three probes',
      detail: rows.join(', '),
      exact: true,
    };
  },
  'em-u9-uniform-field-particle': (world) => {
    const particle = world.em.particles[0];
    const field = world.em.uniformFields[0];
    const x0 = particle.x;
    advance(world, 2.0, 1 / 960);
    const a = (particle.vx - 0) / 2.0;
    const expectedA = (particle.q * field.Ex) / particle.m;
    const dx = particle.x - x0;
    const ke = 0.5 * particle.m * particle.vx * particle.vx;
    const work = particle.q * field.Ex * dx;
    rel(a, expectedA, 0.01, 'a = qE/m');
    rel(ke, work, 0.02, 'KE = qEΔx');
    return {
      duration: 2.0,
      measured: a,
      expected: expectedA,
      tolerance: 0.01,
      unit: 'm/s²',
      label: 'a = qE/m (and KE = work)',
      detail: `vx=${particle.vx.toFixed(5)} m/s, KE=${ke.toExponential(4)} J, work=${work.toExponential(4)} J`,
    };
  },
  'em-u10-parallel-plate': (world) => {
    advance(world, 0.2, 1 / 480);
    const cap = world.em.capacitors[0];
    const state = capacitorState(cap);
    const expectedC = (EPS0 * cap.kappa * cap.area) / cap.d;
    rel(state.C, expectedC, 1e-9, 'C = κε₀A/d');
    const probe = world.em.probes[0];
    const field = electricFieldAt(world.em, { x: probe.x, y: probe.y, z: probe.z }).E;
    const measuredE = Math.hypot(field.x, field.y, field.z);
    rel(measuredE, Math.abs(state.V) / cap.d, 1e-6, 'gap E = V/d');
    return {
      duration: 0.2,
      measured: state.C,
      expected: expectedC,
      tolerance: 1e-9,
      unit: 'F',
      label: 'C = κε₀A/d',
      detail: `E_gap=${measuredE.toFixed(3)} V/m, V=${state.V.toFixed(3)} V`,
    };
  },
  'em-u10-dielectric': (world) => {
    advance(world, 0.2, 1 / 480);
    const air = world.em.capacitors.find((c) => c.id === 'cap-air');
    const dielectric = world.em.capacitors.find((c) => c.id === 'cap-dielectric');
    const airState = capacitorState(air);
    const dielectricState = capacitorState(dielectric);
    const measured = airState.V / dielectricState.V;
    rel(measured, dielectric.kappa / air.kappa, 1e-9, 'V ratio = κ ratio at constant Q');
    return {
      duration: 0.2,
      measured,
      expected: dielectric.kappa / air.kappa,
      tolerance: 1e-9,
      unit: '',
      label: 'V_air/V_dielectric = κ',
      detail: `V_air=${airState.V.toFixed(3)} V, V_κ3=${dielectricState.V.toFixed(3)} V`,
    };
  },
  'em-u11-rc-charging': (world) => {
    const circuit = world.em.circuits[0];
    const cap = circuit.components.find((c) => c.kind === 'capacitor');
    const battery = circuit.components.find((c) => c.kind === 'battery');
    const resistor = circuit.components.find((c) => c.kind === 'resistor');
    const tau = resistor.R * cap.C;
    advance(world, 0.5, 1 / 960);
    const expected = battery.emf * (1 - Math.exp(-0.5 / tau));
    return {
      duration: 0.5,
      measured: cap.vNow,
      expected,
      tolerance: 0.02,
      unit: 'V',
      label: 'v_C = ε(1−e^{−t/RC})',
      detail: `τ=${tau.toFixed(4)} s, samples=${circuit.samples.length}`,
    };
  },
  'em-u11-series-resistors': (world) => {
    const circuit = world.em.circuits[0];
    const r2 = circuit.components.find((c) => c.kind === 'resistor' && Math.abs(c.R - 20) < 1e-9);
    advance(world, 0.1, 1 / 960);
    rel(Math.abs(r2.iNow), 12 / 30, 0.01, 'I = ε/(R₁+R₂)');
    near(Math.abs(r2.vNow), 8, 0.08, 'V across 20 Ω');
    return {
      duration: 0.1,
      measured: Math.abs(r2.iNow),
      expected: 12 / 30,
      tolerance: 0.01,
      unit: 'A',
      label: 'I = ε/(R₁+R₂); V₂ = 8 V',
      detail: `V₂=${r2.vNow.toFixed(4)} V`,
    };
  },
  'em-u12-long-wire': (world) => {
    advance(world, 0.5, 1 / 480);
    const wire = world.em.magneticWires[0];
    const probe = world.em.probes[0];
    const r = Math.hypot(probe.x - wire.x, probe.z - wire.z);
    const expected = (MU0 * wire.current) / (2 * Math.PI * r);
    const B = magneticFieldAt(world.em, { x: probe.x, y: probe.y, z: probe.z });
    const measured = Math.hypot(B.x, B.y, B.z);
    rel(measured, expected, 1e-9, 'B = μ₀I/(2πr)');
    return {
      duration: 0.5,
      measured,
      expected,
      tolerance: 1e-9,
      unit: 'T',
      label: 'B = μ₀I/(2πr)',
      detail: `Bz=${B.z.toExponential(5)} T`,
    };
  },
  'em-u12-cyclotron': (world) => {
    const particle = world.em.particles[0];
    const field = world.em.uniformFields[0];
    const expected = (particle.m * Math.hypot(particle.vx, particle.vy, particle.vz))
      / (Math.abs(particle.q) * field.By);
    let minX = Infinity;
    let maxX = -Infinity;
    const h = 1 / 960;
    for (let i = 0; i < Math.round(1.3 / h); i += 1) {
      stepWorld(world, h, { h });
      minX = Math.min(minX, particle.x);
      maxX = Math.max(maxX, particle.x);
    }
    const measured = (maxX - minX) / 2;
    rel(measured, expected, 0.02, 'r = mv/(|q|B)');
    return {
      duration: 1.3,
      measured,
      expected,
      tolerance: 0.02,
      unit: 'm',
      label: 'r = mv/(|q|B)',
      detail: `trail=${particle.trail.length} points`,
    };
  },
  'em-u13-rail-terminal': (world) => {
    const rail = world.em.rails[0];
    advance(world, 5.0, 1 / 960);
    const expected = (rail.F * rail.R) / (rail.B ** 2 * rail.ell ** 2);
    rel(rail.v, expected, 0.015, 'v_term = FR/(B²ℓ²)');
    rel(Math.abs(rail.emf), Math.abs(rail.B * rail.ell * rail.v), 1e-9, 'ε = Bℓv');
    return {
      duration: 5.0,
      measured: rail.v,
      expected,
      tolerance: 0.015,
      unit: 'm/s',
      label: 'v_term = FR/(B²ℓ²)',
      detail: `ε=${rail.emf.toFixed(4)} V, I=${rail.current.toFixed(4)} A`,
    };
  },
  'em-u13-coil-lenz': (world) => {
    const coil = world.em.inductionCoils[0];
    advance(world, 3.0, 1 / 960);
    const expected = -coil.turns * coil.B0 * coil.height * coil.vx;
    rel(coil.emf, expected, 0.02, 'ε = −N B h v (flux increasing)');
    if (!(coil.emf < 0)) throw new Error(`Lenz sign is not negative: ${coil.emf}`);
    return {
      duration: 3.0,
      measured: coil.emf,
      expected,
      tolerance: 0.02,
      unit: 'V',
      label: 'ε = −N dΦ/dt (negative while entering)',
      detail: `x=${coil.x.toFixed(3)} m, flux=${coil.flux.toFixed(4)} Wb`,
    };
  },
};

function projectileCheck(world, angle) {
  const launcher = getLauncher(world, 'launcher');
  const muzzle = launcherMuzzle(launcher);
  const groundY = launcher.y + launcher.radius;
  const height = muzzle.y - groundY;
  const theta = (launcher.angle * Math.PI) / 180;
  const v = launcher.speed;
  const flight = (v * Math.sin(theta)
    + Math.sqrt(v * v * Math.sin(theta) ** 2 + 2 * world.g * height)) / world.g;
  const expected = v * Math.cos(theta) * flight;
  fireLauncher(world, launcher);
  let duration = 0;
  const h = 1 / 960;
  for (let i = 0; i < 12000; i += 1) {
    stepWorld(world, h, { h });
    duration += h;
    if (world.events.some((event) => event.type === 'landing')) break;
  }
  const landing = world.events.find((event) => event.type === 'landing');
  if (!landing) throw new Error('projectile never landed');
  rel(landing.range, expected, 0.01, 'range');
  if (Math.abs(angle - launcher.angle) > 1e-9) throw new Error('launcher angle changed');
  return {
    duration,
    measured: landing.range,
    expected,
    tolerance: 0.01,
    unit: 'm',
    label: 'R = v cosθ · t_fall',
    detail: `flight ${landing.flightTime.toFixed(3)} s, angle ${launcher.angle}°`,
  };
}

/* ------------------------------ metadata ------------------------------ */

const ids = new Set();
for (const preset of PRESETS) {
  check(`preset ${preset.id} metadata`, () => {
    if (ids.has(preset.id)) throw new Error('duplicate preset id');
    ids.add(preset.id);
    if (!PRESET_UNITS[preset.unit]) throw new Error(`unknown unit ${preset.unit}`);
    if (preset.cedRef !== preset.unit) throw new Error('cedRef must be the unit id');
    if (preset.mode !== PRESET_UNITS[preset.unit].mode) throw new Error('mode does not match unit');
    if (!/[\u4e00-\u9fff]/.test(preset.title) || !/[A-Za-z]/.test(preset.title)) throw new Error('title is not bilingual');
    if (!/[\u4e00-\u9fff]/.test(preset.description) || !/[A-Za-z]/.test(preset.description)) throw new Error('description is not bilingual');
    if (/exam|考试|practice|练习|score|得分|syllabus|大纲/i.test(`${preset.title} ${preset.description}`)) {
      throw new Error('exam or practice wording found');
    }
    if (preset.title.includes('/') || preset.description.includes('/')) {
      throw new Error('visible copy contains a slash fraction');
    }
  });
}

for (const [unit, info] of Object.entries(PRESET_UNITS)) {
  check(`unit ${unit} has at least two presets`, () => {
    const count = presetsFor({ unit }).length;
    if (count < 2) throw new Error(`${info.zh} · ${info.en} has ${count} presets`);
  });
}

for (const preset of PRESETS) {
  check(`preset ${preset.id} loads with required entities and sensors`, () => {
    const world = load(preset);
    if ((world.em.mode === 'em' ? 'em' : 'mechanics') !== preset.mode) {
      throw new Error(`mode ${world.em.mode} does not match ${preset.mode}`);
    }
    for (const type of preset.required) {
      if (countType(world, type) < 1) throw new Error(`required ${type} missing`);
    }
    for (const kind of preset.recommended.sensors || []) {
      if (!world.sensors.some((sensor) => sensor.kind === kind)) throw new Error(`recommended ${kind} missing`);
    }
    for (const type of preset.recommended.instruments || []) {
      if (countType(world, type) < 1) throw new Error(`recommended instrument ${type} missing`);
    }
    for (const kind of preset.recommended.components || []) {
      if (!world.em.circuits.some((circuit) => circuit.components.some((comp) => comp.kind === kind))) {
        throw new Error(`recommended circuit component ${kind} missing`);
      }
    }
    if (preset.recommended.graphs) {
      if (!preset.focus) throw new Error('graphs requested without a graph focus');
      const focus = findFocus(world, preset.focus);
      if (!focus) throw new Error(`graph focus ${preset.focus.type}:${preset.focus.id} missing`);
      if (preset.focus.type !== 'body' && preset.focus.type !== 'sensor') {
        throw new Error('graph focus is not a body or sensor');
      }
    } else if (preset.focus && !findFocus(world, preset.focus)) {
      throw new Error(`focus ${preset.focus.type}:${preset.focus.id} missing`);
    }
    const data = preset.build();
    if (data.version !== 2) throw new Error(`scene schema ${data.version} is not 2`);
  });
}

for (const preset of PRESETS) {
  const analytic = ANALYTICS[preset.id];
  check(`preset ${preset.id} analytic: ${preset.title}`, () => {
    if (!analytic) throw new Error('no analytic test registered');
    const world = load(preset);
    const result = analytic(world);
    if (!(result.duration > 0)) throw new Error('no documented fixed-step duration');
    if (result.exact) {
      if (!result.detail) throw new Error('exact check needs a detail line');
      console.log(`      ${result.label}: ${result.detail} (t=${result.duration.toFixed(2)} s)`);
      return;
    }
    near(result.measured, result.expected, Math.max(
      Math.abs(result.expected) * result.tolerance,
      result.tolerance,
    ), result.label);
    console.log(`      ${result.label}: ${Number(result.measured).toPrecision(6)} ${result.unit} vs ${Number(result.expected).toPrecision(6)} ${result.unit} (t=${result.duration.toFixed(2)} s, tol ${(result.tolerance * 100).toFixed(2)}%)${result.detail ? `, ${result.detail}` : ''}`);
  });
}

check('every preset has an analytic test', () => {
  const missing = PRESETS.filter((preset) => !ANALYTICS[preset.id]).map((preset) => preset.id);
  if (missing.length) throw new Error(`missing: ${missing.join(', ')}`);
});

console.log('\n' + results.join('\n'));
console.log(`\n${passed} passed, ${failed} failed (preset library)`);
if (failed) process.exit(1);
