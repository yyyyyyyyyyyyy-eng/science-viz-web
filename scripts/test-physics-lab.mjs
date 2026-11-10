#!/usr/bin/env node
/**
 * Headless physics checks for modules/physics/lab/physics.mjs.
 * Run: node scripts/test-physics-lab.mjs
 */
import {
  addAnchor,
  addBlock,
  addCart,
  addLink,
  addLoop,
  addSurface,
  applyInitialVelocity,
  attachBodyToLoop,
  attachBodyToSurface,
  bodyDiagnostics,
  captureInitial,
  createWorld,
  energyBreakdown,
  resetWorld,
  springEnergyFromLength,
  springTension,
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

console.log(results.join('\n'));
console.log(`\n${passed} passed, ${failed} failed`);
if (failed) process.exit(1);
