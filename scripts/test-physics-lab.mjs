#!/usr/bin/env node
/**
 * Headless physics checks for modules/physics/lab/physics.mjs.
 * Run: node scripts/test-physics-lab.mjs
 */
import {
  addAnchor,
  addBlock,
  addCart,
  addHCircle,
  addLink,
  addLoop,
  addSurface,
  addTurntable,
  applyInitialVelocity,
  attachBodyToHCircle,
  attachBodyToLoop,
  attachBodyToSurface,
  attachBodyToTurntable,
  bodyDiagnostics,
  captureInitial,
  clampMuPair,
  createWorld,
  deserializeScene,
  energyBreakdown,
  resetWorld,
  serializeScene,
  springEnergyFromLength,
  springTension,
  stepOnce,
  stepWorld,
  surfaceFrame,
  surfaceLocalPoint,
  surfaceTopPoint,
} from '../modules/physics/lab/physics.mjs';

let passed = 0;
let failed = 0;
const results = [];

function check(name, fn) {
  try {
    fn();
    passed += 1;
    results.push(`PASS  ${name}`);
  } catch (err) {
    failed += 1;
    results.push(`FAIL  ${name}\n      ${err.message}`);
  }
}

function near(actual, expected, tol, label) {
  if (!Number.isFinite(actual) || Math.abs(actual - expected) > tol) {
    throw new Error(`${label}: expected ${expected} ± ${tol}, got ${actual}`);
  }
}

function advance(world, seconds, h = 1 / 480) {
  const n = Math.max(1, Math.round(seconds / h));
  for (let i = 0; i < n; i += 1) stepWorld(world, h, { h });
}

function makeIncline({ angle = 20, muS = 0.8, muK = 0.5, length = 30 } = {}) {
  const world = createWorld({ g: 9.8 });
  const surface = addSurface(world, { angleDeg: angle, muS, muK, length, x: 0, y: 4, width: 3 });
  return { world, surface };
}

check('incline: mu_s >= tan(theta) holds the block at rest', () => {
  const { world, surface } = makeIncline({ angle: 20, muS: 0.8, muK: 0.5 });
  const block = addBlock(world, { mass: 2, x: 0, y: 6, z: 0 });
  attachBodyToSurface(world, block, surface.id, { localX: 5, localZ: 0 });
  block.v0 = 0;
  applyInitialVelocity(world, block);
  captureInitial(world);
  const before = surfaceLocalPoint(surface, block.cannon.position);
  advance(world, 1.5, 1 / 240);
  const after = surfaceLocalPoint(surface, block.cannon.position);
  const diag = bodyDiagnostics(world, block);
  const angle = (surface.angle * Math.PI) / 180;
  const expectedStatic = block.mass * world.g * Math.sin(angle);
  near(after.x, before.x, 1e-5, 'block position along incline');
  near(diag.accel, 0, 1e-6, 'acceleration');
  near(diag.friction, expectedStatic, 2e-4, 'static friction');
  near(diag.normal, block.mass * world.g * Math.cos(angle), 2e-4, 'normal force');
  if (!diag.static) throw new Error('diagnostics did not report static contact');
});

check('incline: mu_s < tan(theta) slides with a = g(sinθ - mu_k cosθ)', () => {
  const { world, surface } = makeIncline({ angle: 20, muS: 0.1, muK: 0.2 });
  const block = addBlock(world, { mass: 2, x: 0, y: 6, z: 0 });
  attachBodyToSurface(world, block, surface.id, { localX: 8, localZ: 0 });
  block.v0 = 0;
  applyInitialVelocity(world, block);
  advance(world, 0.5, 1 / 480);
  const { t } = surfaceFrame(surface);
  const vt = block.cannon.velocity.dot(t);
  const angle = (surface.angle * Math.PI) / 180;
  const expected = -world.g * (Math.sin(angle) - surface.muK * Math.cos(angle));
  near(vt / 0.5, expected, 3e-2, 'kinetic acceleration');
  const diag = bodyDiagnostics(world, block);
  near(diag.friction, surface.muK * diag.normal, 2e-3, 'kinetic friction');
  if (diag.static) throw new Error('block reported static while sliding');
});

check('mu = 0 with an incline spring conserves mechanical energy (no leaving)', () => {
  const { world, surface } = makeIncline({ angle: 20, muS: 0, muK: 0, length: 60 });
  const block = addBlock(world, { mass: 1.5, x: 0, y: 6, z: 0 });
  attachBodyToSurface(world, block, surface.id, { localX: 0, localZ: 0 });
  block.v0 = 0;
  applyInitialVelocity(world, block);
  const { n } = surfaceFrame(surface);
  const anchorPoint = surfaceTopPoint(surface, 12, 0);
  anchorPoint.vadd(n.scale(block.halfHeight + 0.004), anchorPoint);
  addLink(world, {
    a: { type: 'body', id: block.id },
    b: addAnchor(anchorPoint.x, anchorPoint.y, anchorPoint.z),
    k: 3,
    beta: 0,
    rest: 8,
  });
  captureInitial(world);
  const e0 = energyBreakdown(world);
  advance(world, 2.0, 1 / 960);
  const e1 = energyBreakdown(world);
  const rel = Math.abs(e1.mechanical - e0.mechanical) / Math.max(1, Math.abs(e0.mechanical));
  if (world.events.some((e) => e.type === 'leave-surface' || e.type === 'leave-loop')) {
    throw new Error('body left its apparatus during the energy test');
  }
  if (rel > 5e-4) {
    throw new Error(`mechanical-energy drift too large: relative ${rel.toExponential(3)}`);
  }
});

check('vertical loop: N < 0 releases the body as a free projectile', () => {
  const world = createWorld({ g: 9.8 });
  const loop = addLoop(world, { x: 0, y: 2.8, z: 0, radius: 1.6 });
  const block = addBlock(world, { mass: 1, x: 0, y: 2.8, z: 0 });
  block.v0 = 7.0;
  block.azimuth = 0;
  attachBodyToLoop(world, block, loop.id, { theta: 0 });
  captureInitial(world);
  advance(world, 4.0, 1 / 240);
  const leave = world.events.find((e) => e.type === 'leave-loop');
  if (!leave) throw new Error('body never left the loop (event missing)');
  if (!(leave.normal < 0)) throw new Error(`recorded N was ${leave.normal}, expected < 0`);
  if (block.attachment) throw new Error('body is still constrained to the loop');
  near(block.diagnostics.normal, 0, 1, 'free-body normal is no longer a track constraint');
});

check('nonlinear spring force and energy match F = -kx - beta x^3', () => {
  const link = { k: 12, beta: 40, rest: 2 };
  const length = 2.5;
  const x = length - link.rest;
  const expectedForce = 12 * 0.5 + 40 * 0.5 ** 3;
  const expectedEnergy = 0.5 * 12 * 0.5 ** 2 + 0.25 * 40 * 0.5 ** 4;
  near(springTension(link, length), expectedForce, 1e-12, 'spring tension');
  near(springEnergyFromLength(link, length), expectedEnergy, 1e-12, 'spring energy');
});

check('friction thermal bookkeeping: mechanical loss = friction heat', () => {
  const world = createWorld({ g: 9.8 });
  const surface = addSurface(world, { angleDeg: 0, muS: 0.2, muK: 0.3, length: 40, x: 0, y: 1, width: 3 });
  const block = addBlock(world, { mass: 1, x: 0, y: 2, z: 0 });
  attachBodyToSurface(world, block, surface.id, { localX: -8, localZ: 0 });
  block.v0 = 5;
  applyInitialVelocity(world, block);
  captureInitial(world);
  const e0 = energyBreakdown(world);
  advance(world, 1.2, 1 / 480);
  const e1 = energyBreakdown(world);
  const mechanicalLoss = e0.mechanical - e1.mechanical;
  if (mechanicalLoss <= 0) throw new Error('expected mechanical energy to drop');
  const bookkeeping = Math.abs(e1.thermal - mechanicalLoss) / mechanicalLoss;
  if (bookkeeping > 0.08) {
    throw new Error(`thermal ${e1.thermal.toFixed(4)} vs loss ${mechanicalLoss.toFixed(4)} (${(bookkeeping * 100).toFixed(1)}%)`);
  }
});

check('reset restores the user-constructed initial state', () => {
  const { world, surface } = makeIncline({ angle: 15, muS: 0.6, muK: 0.4 });
  const block = addBlock(world, { mass: 1, x: 0, y: 6, z: 0 });
  attachBodyToSurface(world, block, surface.id, { localX: 2, localZ: 0 });
  block.v0 = 1.2;
  applyInitialVelocity(world, block);
  captureInitial(world);
  const start = surfaceLocalPoint(surface, block.cannon.position);
  advance(world, 0.8, 1 / 240);
  resetWorld(world);
  const after = surfaceLocalPoint(surface, block.cannon.position);
  near(after.x, start.x, 1e-6, 'reset position');
  near(block.cannon.velocity.length(), 1.2, 1e-6, 'reset initial speed');
  near(world.time, 0, 1e-12, 'reset time');
});

check('cart on an incline uses the chosen moment of inertia', () => {
  const { world, surface } = makeIncline({ angle: 15, muS: 0.25, muK: 0.15, length: 40 });
  const cart = addCart(world, { mass: 2, radius: 0.3, x: 0, y: 6, z: 0 });
  const I = 0.9;
  cart.I = I;
  cart.cannon.inertia.z = I;
  cart.cannon.invInertia.z = 1 / I;
  cart.cannon.updateInertiaWorld(true);
  attachBodyToSurface(world, cart, surface.id, { localX: 5, localZ: 0 });
  cart.v0 = 0;
  applyInitialVelocity(world, cart);
  advance(world, 0.4, 1 / 960);
  const { t } = surfaceFrame(surface);
  const vt = cart.cannon.velocity.dot(t);
  const angle = (surface.angle * Math.PI) / 180;
  const expected = -world.g * Math.sin(angle) / (1 + I / (cart.mass * cart.radius * cart.radius));
  near(vt / 0.4, expected, 0.08, 'rolling acceleration with chosen I');
});

check('sliding block comes to rest and static friction then holds it', () => {
  const world = createWorld({ g: 9.8 });
  const surface = addSurface(world, { angleDeg: 0, muS: 0.5, muK: 0.3, length: 40, x: 0, y: 1, width: 3 });
  const block = addBlock(world, { mass: 1, x: 0, y: 2, z: 0 });
  attachBodyToSurface(world, block, surface.id, { localX: 0, localZ: 0 });
  block.v0 = 5;
  applyInitialVelocity(world, block);
  advance(world, 3.0, 1 / 480);
  const diag = bodyDiagnostics(world, block);
  near(block.cannon.velocity.length(), 0, 2e-4, 'rest speed');
  near(diag.accel, 0, 1e-4, 'rest acceleration');
  if (!diag.static) throw new Error('static friction did not take over at rest');
});

check('cart rolling from rest on an incline (mu_s >= tan theta)', () => {
  const angle = 20;
  const angleRad = (angle * Math.PI) / 180;
  for (const muS of [0.5, 1.2]) {
    for (const iFactor of [0, 0.4, 0.5, 1]) {
      const { world, surface } = makeIncline({ angle, muS, muK: 0.35, length: 60 });
      const cart = addCart(world, { mass: 2, radius: 0.3, x: 0, y: 6, z: 0, I: iFactor * 2 * 0.3 ** 2 });
      cart.v0 = 0;
      attachBodyToSurface(world, cart, surface.id, { localX: 12, localZ: 0 });
      applyInitialVelocity(world, cart);
      advance(world, 0.2, 1 / 240);
      const { t } = surfaceFrame(surface);
      const v1 = -cart.cannon.velocity.dot(t);
      advance(world, 1.0, 1 / 240);
      const v2 = -cart.cannon.velocity.dot(t);
      const measured = v2 - v1;
      const expected = (world.g * Math.sin(angleRad)) / (1 + iFactor);
      near(measured, expected, Math.max(0.01, expected * 0.005), `muS=${muS} I=${iFactor}mr²`);
      const diag = bodyDiagnostics(world, cart);
      if (Math.abs(measured) > 0.05 && !diag.rolling) {
        throw new Error(`muS=${muS} I=${iFactor}mr²: cart is not reported as rolling`);
      }
    }
  }
});

check('cart brake parks an otherwise rolling cart on an incline', () => {
  const { world, surface } = makeIncline({ angle: 20, muS: 0.5, muK: 0.35, length: 60 });
  const cart = addCart(world, { mass: 2, radius: 0.3, x: 0, y: 6, z: 0, I: 0.5 * 2 * 0.3 ** 2 });
  cart.brake = true;
  cart.v0 = 0;
  attachBodyToSurface(world, cart, surface.id, { localX: 12, localZ: 0 });
  applyInitialVelocity(world, cart);
  const x0 = surfaceLocalPoint(surface, cart.cannon.position).x;
  advance(world, 1.0, 1 / 240);
  const x1 = surfaceLocalPoint(surface, cart.cannon.position).x;
  near(x1, x0, 1e-6, 'braked cart position');
});

check('cart brake slows a moving cart with kinetic friction', () => {
  const world = createWorld({ g: 9.8 });
  const surface = addSurface(world, { angleDeg: 0, muS: 0.5, muK: 0.35, length: 60, x: 0, y: 1, width: 3 });
  const cart = addCart(world, { mass: 1, radius: 0.3, x: 0, y: 2, z: 0, I: 0.045 });
  cart.brake = true;
  cart.v0 = 3;
  attachBodyToSurface(world, cart, surface.id, { localX: -10, localZ: 0 });
  applyInitialVelocity(world, cart);
  advance(world, 1.5, 1 / 240);
  near(cart.cannon.velocity.length(), 0, 0.02, 'braked cart final speed');
});

check('turntable: a stuck block rotates at omega (not 2 omega) and keeps its radius', () => {
  for (const omega of [0.5, 1, 1.7]) {
    const world = createWorld({ g: 9.8 });
    const table = addTurntable(world, {
      radius: 3, omega, targetOmega: omega, drive: 'target', muS: 0.5, muK: 0.35,
    });
    const block = addBlock(world, { mass: 1, x: 1.5, y: 1 });
    block.v0 = 0;
    attachBodyToTurntable(world, block, table.id, { r: 1.5, phi: 0 });
    let prev = Math.atan2(block.cannon.position.z, block.cannon.position.x);
    let unwrapped = 0;
    let maxRadiusError = 0;
    const steps = Math.round(2 / (1 / 240));
    for (let i = 0; i < steps; i += 1) {
      stepWorld(world, 1 / 240, { h: 1 / 240 });
      const phi = Math.atan2(block.cannon.position.z, block.cannon.position.x);
      let d = phi - prev;
      if (d > Math.PI) d -= Math.PI * 2;
      if (d < -Math.PI) d += Math.PI * 2;
      unwrapped += d;
      prev = phi;
      maxRadiusError = Math.max(maxRadiusError,
        Math.abs(Math.hypot(block.cannon.position.x, block.cannon.position.z) - 1.5));
    }
    near(unwrapped / 2, omega, 1e-3, `omega=${omega}: block angular rate`);
    near(maxRadiusError, 0, 1e-6, `omega=${omega}: radius drift`);
    if (!block.attachment?.stuck) throw new Error(`omega=${omega}: block left the stuck state`);
  }
});

check('frictionless vertical loop conserves energy (drift < 0.5%/s)', () => {
  const R = 2;
  const v0 = Math.sqrt(6 * 9.8 * R);
  const world = createWorld({ g: 9.8 });
  const loop = addLoop(world, { x: 0, y: R + 1, z: 0, radius: R });
  const block = addBlock(world, { mass: 1, x: 0, y: 1 });
  block.v0 = v0;
  attachBodyToLoop(world, block, loop.id, { theta: 0 });
  const e0 = energyBreakdown(world).mechanical;
  advance(world, 1.0, 1 / 240);
  const e1 = energyBreakdown(world).mechanical;
  if (world.events.some((e) => e.type === 'leave-loop')) throw new Error('block left the loop during the energy test');
  const drift = Math.abs(e1 - e0) / Math.abs(e0);
  if (drift > 0.005) throw new Error(`energy drift ${(drift * 100).toFixed(3)}%/s exceeds 0.5%`);
});

function loopCompletes({ R, v0, kind = 'block', I = 0, mass = 1, radius = 0.3 }) {
  const world = createWorld({ g: 9.8 });
  const loop = addLoop(world, { x: 0, y: R + 1, z: 0, radius: R });
  const body = kind === 'cart'
    ? addCart(world, { mass, radius, I, x: 0, y: 1 })
    : addBlock(world, { mass, x: 0, y: 1 });
  body.v0 = v0;
  attachBodyToLoop(world, body, loop.id, { theta: 0 });
  advance(world, 3.0, 1 / 240);
  return !world.events.some((e) => e.type === 'leave-loop');
}

function loopThreshold(opts) {
  let lo = Math.sqrt(3 * 9.8 * opts.R);
  let hi = Math.sqrt(7 * 9.8 * opts.R);
  for (let i = 0; i < 14; i += 1) {
    const mid = (lo + hi) / 2;
    if (loopCompletes({ ...opts, v0: mid })) hi = mid;
    else lo = mid;
  }
  return hi;
}

check('loop: block minimum over-top speed is sqrt(5gR) within 1%', () => {
  const R = 1.8;
  const measured = loopThreshold({ R, kind: 'block' });
  const expected = Math.sqrt(5 * 9.8 * R);
  near(measured, expected, expected * 0.01, 'block v_min');
});

check('loop: rolling cart minimum over-top speed includes I (within 1%)', () => {
  const R = 1.8;
  const mass = 2;
  const radius = 0.3;
  const I = 0.5 * mass * radius * radius;
  const measured = loopThreshold({ R, kind: 'cart', I, mass, radius });
  const expected = Math.sqrt(9.8 * R * (1 + 4 / (1 + I / (mass * radius * radius))));
  near(measured, expected, expected * 0.01, 'cart v_min');
});

check('loop: detach angle matches theory within 1 degree', () => {
  const R = 1.8;
  const v0 = 0.97 * Math.sqrt(5 * 9.8 * R);
  const world = createWorld({ g: 9.8 });
  const loop = addLoop(world, { x: 0, y: R + 1, z: 0, radius: R });
  const block = addBlock(world, { mass: 1, x: 0, y: 1 });
  block.v0 = v0;
  attachBodyToLoop(world, block, loop.id, { theta: 0 });
  advance(world, 3.0, 1 / 240);
  const leave = world.events.find((e) => e.type === 'leave-loop');
  if (!leave) throw new Error('block never detached');
  const expected = (Math.acos((2 - (v0 * v0) / (9.8 * R)) / 3) * 180) / Math.PI;
  const measured = (leave.theta * 180) / Math.PI;
  near(measured, expected, 1.0, 'detach angle');
});

check('horizontal circle: static friction holds a body below the slip limit (constant r)', () => {
  const R = 2.4;
  const muS = 0.6;
  const muK = 0.35;
  const mass = 1.5;
  const g = 9.8;
  const world = createWorld({ g });
  const circle = addHCircle(world, { radius: R, muS, muK });
  const block = addBlock(world, { mass, x: R, y: 0.5 });
  // Flat horizontal circle: the slip threshold is v^2 / R = mu_s g.
  const vSlip = Math.sqrt(muS * g * R);
  const v0 = 0.82 * vSlip;
  block.v0 = v0;
  attachBodyToHCircle(world, block, circle.id, { phi: 0 });

  const h = 1 / 240;
  const duration = 1.6; // clearly longer than 1 s
  const steps = Math.round(duration / h);
  let minR = Infinity;
  let maxR = -Infinity;
  let maxSpeedError = 0;
  let unwrapped = 0;
  let prevPhi = Math.atan2(block.cannon.position.z, block.cannon.position.x);
  for (let i = 0; i < steps; i += 1) {
    stepWorld(world, h, { h });
    const p = block.cannon.position;
    const r = Math.hypot(p.x, p.z);
    minR = Math.min(minR, r);
    maxR = Math.max(maxR, r);
    const speed = Math.hypot(block.cannon.velocity.x, block.cannon.velocity.z);
    maxSpeedError = Math.max(maxSpeedError, Math.abs(speed - v0) / v0);
    const phi = Math.atan2(p.z, p.x);
    let dPhi = phi - prevPhi;
    if (dPhi > Math.PI) dPhi -= Math.PI * 2;
    if (dPhi < -Math.PI) dPhi += Math.PI * 2;
    unwrapped += dPhi;
    prevPhi = phi;
  }
  if (block.attachment?.type !== 'hcircle') throw new Error('block left the circle below the static limit');
  if (block.skid) throw new Error('block entered a kinetic skid below the static limit');
  if (world.events.some((e) => e.type === 'leave-hcircle')) {
    throw new Error('leave-hcircle fired below the static limit');
  }
  near(maxR - minR, 0, 1e-9, `radius spread over ${duration} s (r=${minR}..${maxR})`);
  near((minR + maxR) / 2, R, 1e-9, 'mean radius');
  if (maxSpeedError > 1e-9) {
    throw new Error(`speed is not uniform: max relative error ${maxSpeedError.toExponential(3)} (v0=${v0})`);
  }
  near(unwrapped / duration, v0 / R, 1e-5, 'uniform angular rate (rad/s)');
  const diag = bodyDiagnostics(world, block);
  near(diag.normal, mass * g, 1e-9, 'normal');
  near(diag.friction, (mass * v0 * v0) / R, 1e-9, 'static friction m v^2 / R');
  if (!diag.static) throw new Error('diagnostics did not report static circle contact');
  console.log(`      below limit: R=${R} m, v0=${v0.toFixed(6)} m/s < v_slip=${vSlip.toFixed(6)} m/s, r=${minR.toFixed(12)}..${maxR.toFixed(12)} m, max speed rel err ${maxSpeedError.toExponential(2)}, f_s=${diag.friction.toFixed(6)} N vs mu_s N=${(muS * mass * g).toFixed(6)} N`);
});

check('horizontal circle: exceeding mu_s N releases the body and mu_k sets kinetic friction', () => {
  const R = 2;
  const muS = 0.5;
  const muK = 0.28;
  const mass = 1.2;
  const g = 9.8;
  const vSlip = Math.sqrt(muS * g * R);
  const v0 = 1.25 * vSlip;
  const world = createWorld({ g });
  const circle = addHCircle(world, { radius: R, muS, muK });
  const block = addBlock(world, { mass, x: R, y: 0.5 });
  block.v0 = v0;
  attachBodyToHCircle(world, block, circle.id, { phi: 0 });

  const h = 1 / 240;
  stepWorld(world, h, { h });
  const leave = world.events.find((e) => e.type === 'leave-hcircle');
  if (!leave) throw new Error('static limit was never exceeded');
  if (!(leave.required > leave.available)) {
    throw new Error(`released without exceeding mu_s N: required ${leave.required}, available ${leave.available}`);
  }
  if (block.attachment) throw new Error('body is still constrained to the circle after slip');
  if (!block.skid) throw new Error('body did not enter the kinetic-contact state');

  const r1 = Math.hypot(block.cannon.position.x, block.cannon.position.z);
  if (!(r1 > R + 1e-6)) throw new Error(`radius was clamped at the circle after slip (r=${r1})`);
  const N = mass * g;
  let diag = bodyDiagnostics(world, block);
  near(diag.normal, N, 1e-9, 'normal while sliding');
  near(diag.friction, muK * N, 1e-9, 'kinetic friction mu_k N');
  if (diag.static) throw new Error('sliding contact reported as static');

  const v1 = Math.hypot(block.cannon.velocity.x, block.cannon.velocity.z);
  advance(world, 0.25, h);
  const v2 = Math.hypot(block.cannon.velocity.x, block.cannon.velocity.z);
  near((v2 - v1) / 0.25, -muK * g, 1e-6, 'kinetic deceleration (m/s^2)');
  const r2 = Math.hypot(block.cannon.position.x, block.cannon.position.z);
  if (!(r2 > R + 0.1)) throw new Error(`radius stayed near the circle (r=${r2})`);
  diag = bodyDiagnostics(world, block);
  near(diag.friction, muK * N, 1e-9, 'kinetic friction after 0.25 s');
  console.log(`      above limit: R=${R} m, v0=${v0.toFixed(6)} m/s > v_slip=${vSlip.toFixed(6)} m/s, required=${leave.required.toFixed(6)} N > mu_s N=${leave.available.toFixed(6)} N, r=${r1.toFixed(6)} m -> ${r2.toFixed(6)} m after 0.25 s, f_k=${diag.friction.toFixed(6)} N vs mu_k N=${(muK * N).toFixed(6)} N, v=${v1.toFixed(4)} -> ${v2.toFixed(4)} m/s`);
});

check('horizontal circle: mu_k changes the sliding motion (zero vs nonzero)', () => {
  function run(muK) {
    const R = 2;
    const muS = 0.5;
    const mass = 1;
    const g = 9.8;
    const world = createWorld({ g });
    const circle = addHCircle(world, { radius: R, muS, muK });
    const block = addBlock(world, { mass, x: R, y: 0.5 });
    block.v0 = 1.3 * Math.sqrt(muS * g * R);
    attachBodyToHCircle(world, block, circle.id, { phi: 0 });
    advance(world, 0.3, 1 / 240);
    const diag = bodyDiagnostics(world, block);
    return {
      block,
      radius: Math.hypot(block.cannon.position.x, block.cannon.position.z),
      speed: Math.hypot(block.cannon.velocity.x, block.cannon.velocity.z),
      friction: diag.friction,
      normal: diag.normal,
    };
  }
  const noFriction = run(0);
  const rough = run(0.35);
  near(noFriction.friction, 0, 1e-9, 'mu_k = 0 friction');
  near(rough.friction, 0.35 * rough.normal, 1e-9, 'mu_k = 0.35 friction');
  if (!(rough.speed < noFriction.speed - 0.2)) {
    throw new Error(`mu_k did not slow the body: zero ${noFriction.speed}, rough ${rough.speed}`);
  }
  if (!(rough.radius < noFriction.radius - 0.02)) {
    throw new Error(`mu_k did not change the path: zero r=${noFriction.radius}, rough r=${rough.radius}`);
  }
  console.log(`      mu_k sweep after 0.3 s: mu_k=0 -> f=${noFriction.friction.toFixed(6)} N, r=${noFriction.radius.toFixed(6)} m, v=${noFriction.speed.toFixed(4)} m/s; mu_k=0.35 -> f=${rough.friction.toFixed(6)} N, r=${rough.radius.toFixed(6)} m, v=${rough.speed.toFixed(4)} m/s`);
});

check('horizontal circle: mu_k decelerates a skidding body', () => {
  const R = 2;
  const muS = 0.55;
  const muK = 0.3;
  const world = createWorld({ g: 9.8 });
  const circle = addHCircle(world, { radius: R, muS, muK });
  const block = addBlock(world, { mass: 1, x: R, y: 0.5 });
  const vMax = Math.sqrt(muS * 9.8 * R);
  const v0 = 1.2 * vMax;
  block.v0 = v0;
  attachBodyToHCircle(world, block, circle.id, { phi: 0 });
  advance(world, 0.5, 1 / 240);
  const speed = Math.hypot(block.cannon.velocity.x, block.cannon.velocity.z);
  if (!world.events.some((e) => e.type === 'leave-hcircle')) throw new Error('expected the block to leave the static-friction limit');
  if (!block.skid) throw new Error('expected a kinetic skid state');
  if (block.attachment) throw new Error('the skid was still constrained to the circle');
  const radius = Math.hypot(block.cannon.position.x, block.cannon.position.z);
  if (!(radius > R + 0.3)) throw new Error(`radius was clamped to the circle (r=${radius})`);
  const expected = v0 - muK * 9.8 * 0.5;
  near(speed, expected, 0.01, 'skid speed after 0.5 s');
  const diag = bodyDiagnostics(world, block);
  near(diag.friction, muK * 9.8, 1e-9, 'kinetic friction mu_k N');
});

check('friction pair helper enforces mu_k <= mu_s', () => {
  const a = clampMuPair(0.4, 0.8);
  near(a.muS, 0.4, 1e-12, 'muS');
  near(a.muK, 0.4, 1e-12, 'muK capped');
  const b = clampMuPair(0.9, 0.3);
  near(b.muS, 0.9, 1e-12, 'muS unchanged');
  near(b.muK, 0.3, 1e-12, 'muK unchanged');
  const c = clampMuPair(-1, 2);
  near(c.muS, 0, 1e-12, 'negative muS');
  near(c.muK, 0, 1e-12, 'negative muK');
});

check('stepOnce advances 1/60 s by default', () => {
  const world = createWorld({ g: 9.8 });
  stepOnce(world);
  near(world.time, 1 / 60, 1e-12, 'default step');
});

check('scene serialization round-trips objects and parameters', () => {
  const { world, surface } = makeIncline({ angle: 20, muS: 0.6, muK: 0.3 });
  const cart = addCart(world, { mass: 2, radius: 0.3, x: 0, y: 6 });
  attachBodyToSurface(world, cart, surface.id, { localX: 4, localZ: 0 });
  cart.v0 = 1.5;
  applyInitialVelocity(world, cart);
  const data = serializeScene(world);
  const target = createWorld({ g: 9.8 });
  if (!deserializeScene(target, data)) throw new Error('deserializeScene returned false');
  if (target.surfaces.length !== 1 || target.bodies.length !== 1) throw new Error('object counts changed');
  near(target.bodies[0].mass, 2, 1e-12, 'mass');
  near(target.bodies[0].v0, 1.5, 1e-12, 'v0');
  near(target.surfaces[0].muS, 0.6, 1e-12, 'muS');
  if (target.bodies[0].attachment?.type !== 'surface') throw new Error('attachment lost');
});

console.log(results.join('\n'));
console.log(`\n${passed} passed, ${failed} failed`);
if (failed) process.exit(1);
