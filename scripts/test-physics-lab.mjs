#!/usr/bin/env node
/**
 * Headless physics checks for modules/physics/lab/physics.mjs.
 * Run: node scripts/test-physics-lab.mjs
 */
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import {
  buildSensorTables,
  addAnchor,
  addAngularTable,
  addBall,
  addBarrier,
  addBlock,
  addCarriage,
  addCart,
  addCylinder,
  addElevator,
  addFan,
  addHCircle,
  addLauncher,
  addLink,
  addLoop,
  addOrbit,
  addOscillator,
  addPendulum,
  addProjectile,
  addPulley,
  addRod,
  addSensor,
  addSurface,
  addTorsionPendulum,
  addTunnel,
  addTurntable,
  addWedge,
  angularTableMomentum,
  apparentWeight,
  applyInitialVelocity,
  attachBodyToPulley,
  fireLauncher,
  getBody,
  attachBodyToHCircle,
  attachBodyToLoop,
  attachBodyToSurface,
  attachBodyToTurntable,
  bodyDiagnostics,
  captureInitial,
  carriageTilt,
  clampMuPair,
  createWorld,
  deserializeScene,
  DEFAULT_FLOOR_FRICTION,
  DEFAULT_FLOOR_RESTITUTION,
  detachEntity,
  dropAngularBlock,
  elevatorReading,
  endpointPosition,
  energyBreakdown,
  entityMount,
  floorRestHeight,
  forceVectors,
  leastSquaresSlope,
  mountApparatus,
  migrateScene,
  orbitArealVelocity,
  orbitEscapeSpeed,
  orbitKeplerPeriod,
  oscillatorAnalyticAmplitude,
  oscillatorRegime,
  pendulumPeriod,
  quantizeAngle,
  quantizeValue,
  relativeVelocity,
  removeBody,
  repositionSurfaceBody,
  resetWorld,
  rodInertia,
  SCENE_VERSION,
  serializeScene,
  setBodyCollisionRestitution,
  setBodyPosition,
  setFloorContact,
  setGridStep,
  setSensorTarget,
  snapApparatusToNearest,
  snapBarrierToNearest,
  snapBodyToNearest,
  snapEntityToFloorGrid,
  snapEntityToNearest,
  snapNearbyBodies,
  springEnergyFromLength,
  springTension,
  stepOnce,
  stepWorld,
  surfaceFrame,
  surfaceLocalPoint,
  surfaceTopPoint,
  tableToCsv,
  tableTopY,
  torsionPeriod,
  tunnelPeriod,
  updateMountedApparatus,
} from '../modules/physics/lab/physics.mjs';
import {
  canRedo,
  canUndo,
  createSceneHistory,
  pushSceneHistory,
  takeRedo,
  takeUndo,
} from '../modules/physics/lab/history.mjs';
import {
  SLOT_COUNT,
  SLOT_KEY,
  LEGACY_KEY,
  deleteSlot,
  parseSlotStore,
  readSlotStore,
  saveSlot,
  writeSlotStore,
} from '../modules/physics/lab/scene-store.mjs';
import {
  decodeShareScene,
  encodeShareScene,
  shareHash,
  sharePayloadFromHash,
} from '../modules/physics/lab/scene-share.mjs';

let passed = 0;
let failed = 0;
const results = [];

const pendingChecks = [];

function check(name, fn) {
  try {
    const result = fn();
    if (result && typeof result.then === 'function') {
      pendingChecks.push(result.then(
        () => {
          passed += 1;
          results.push(`PASS  ${name}`);
        },
        (err) => {
          failed += 1;
          results.push(`FAIL  ${name}\n      ${err.message}`);
        },
      ));
      return;
    }
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

function projectileRange({ angle = 45, speed = 8, drag = 'none', dragB = 0, dragC = 0, mass = 0.2, radius = 0.02 } = {}) {
  const world = createWorld({ g: 9.8 });
  const theta = (angle * Math.PI) / 180;
  const body = addProjectile(world, {
    x: 0,
    y: radius,
    z: 0,
    vx: speed * Math.cos(theta),
    vy: speed * Math.sin(theta),
    mass,
    radius,
    drag,
    dragB,
    dragC,
  });
  const h = 1 / 960;
  let t = 0;
  for (let i = 0; i < Math.round(5 / h); i += 1) {
    stepWorld(world, h, { h });
    t += h;
    if (t > 0.04 && body.cannon.position.y <= radius + 0.004 && body.cannon.velocity.y < 0) break;
  }
  return { range: body.cannon.position.x, body, world, time: t };
}

check('projectile range without drag matches v^2 sin(2theta)/g within 0.5%', () => {
  for (const angle of [30, 45, 60]) {
    const measured = projectileRange({ angle, speed: 8 }).range;
    const expected = (8 * 8 * Math.sin((2 * angle * Math.PI) / 180)) / 9.8;
    near(measured, expected, expected * 0.005, `range at ${angle} deg`);
  }
});

check('linear and quadratic drag both lower projectile range', () => {
  const clean = projectileRange({ angle: 45, speed: 10 }).range;
  const linear = projectileRange({ angle: 45, speed: 10, drag: 'linear', dragB: 0.18 }).range;
  const quadratic = projectileRange({ angle: 45, speed: 10, drag: 'quadratic', dragC: 0.03 }).range;
  if (!(linear < clean * 0.9)) throw new Error(`linear drag did not lower range: ${linear} vs ${clean}`);
  if (!(quadratic < clean * 0.9)) throw new Error(`quadratic drag did not lower range: ${quadratic} vs ${clean}`);
  console.log(`      range: none=${clean.toFixed(3)} m, linear=${linear.toFixed(3)} m, quadratic=${quadratic.toFixed(3)} m`);
});

check('linear drag approaches terminal velocity v_t = mg/b', () => {
  const world = createWorld({ g: 9.8 });
  const body = addProjectile(world, {
    x: 0, y: 1000, z: 0, mass: 1, radius: 0.02, drag: 'linear', dragB: 0.5,
  });
  advance(world, 10, 1 / 240);
  const vt = (1 * 9.8) / 0.5;
  near(-body.cannon.velocity.y, vt, vt * 0.01, 'linear terminal speed');
  console.log(`      linear terminal: ${(-body.cannon.velocity.y).toFixed(4)} m/s vs ${vt.toFixed(4)} m/s`);
});

check('quadratic drag approaches terminal velocity v_t = sqrt(mg/c)', () => {
  const world = createWorld({ g: 9.8 });
  const body = addProjectile(world, {
    x: 0, y: 500, z: 0, mass: 1, radius: 0.02, drag: 'quadratic', dragC: 0.2,
  });
  advance(world, 5, 1 / 240);
  const vt = Math.sqrt((1 * 9.8) / 0.2);
  near(-body.cannon.velocity.y, vt, vt * 0.01, 'quadratic terminal speed');
  console.log(`      quadratic terminal: ${(-body.cannon.velocity.y).toFixed(4)} m/s vs ${vt.toFixed(4)} m/s`);
});

check('Atwood pulley: a = (m1 - m2)g / (m1 + m2 + I/r^2)', () => {
  for (const I of [0, 0.2]) {
    const r = 0.3;
    const world = createWorld({ g: 9.8 });
    const pulley = addPulley(world, { x: 0, y: 3, z: 0, radius: r, mass: 0.5, I });
    const a = addBlock(world, { mass: 3, x: -r, y: 2, z: 0 });
    const b = addBlock(world, { mass: 1, x: r, y: 2, z: 0 });
    attachBodyToPulley(world, a, pulley.id, 'a');
    attachBodyToPulley(world, b, pulley.id, 'b');
    a.cannon.position.set(-r, 2, 0);
    b.cannon.position.set(r, 2, 0);
    a.cannon.velocity.setZero();
    b.cannon.velocity.setZero();
    const h = 1 / 960;
    advance(world, 0.5, h);
    const measured = -a.cannon.velocity.y / 0.5;
    const expected = ((3 - 1) * 9.8) / (3 + 1 + I / (r * r));
    near(measured, expected, Math.max(1e-3, expected * 0.002), `Atwood acceleration I=${I}`);
    near(b.cannon.velocity.y / 0.5, expected, Math.max(1e-3, expected * 0.002), `Atwood partner I=${I}`);
    if (I === 0) near(pulley.tensionA, pulley.tensionB, 1e-6, 'massless-pulley tensions equal');
    console.log(`      I=${I}: a=${measured.toFixed(6)} m/s^2 vs ${expected.toFixed(6)}; T_A=${pulley.tensionA.toFixed(3)} N T_B=${pulley.tensionB.toFixed(3)} N`);
  }
});

check('elastic collision (e=1, no friction) conserves KE and momentum', () => {
  const world = createWorld({ g: 0 });
  setBodyCollisionRestitution(world, 1);
  const a = addBlock(world, { mass: 1.2, size: 0.5, x: -1, y: 1, z: 0, v0: 2, azimuth: 0 });
  const b = addBlock(world, { mass: 0.8, size: 0.5, x: 1, y: 1, z: 0, v0: 1.5, azimuth: 180 });
  applyInitialVelocity(world, a);
  applyInitialVelocity(world, b);
  const p0 = a.mass * a.cannon.velocity.x + b.mass * b.cannon.velocity.x;
  const k0 = 0.5 * a.mass * a.cannon.velocity.x ** 2 + 0.5 * b.mass * b.cannon.velocity.x ** 2;
  advance(world, 1.2, 1 / 480);
  const p1 = a.mass * a.cannon.velocity.x + b.mass * b.cannon.velocity.x;
  const k1 = 0.5 * a.mass * a.cannon.velocity.x ** 2 + 0.5 * b.mass * b.cannon.velocity.x ** 2;
  near(p1, p0, 1e-6, 'momentum');
  if (Math.abs(k1 - k0) / k0 > 0.01) {
    throw new Error(`kinetic energy changed by ${(((k1 - k0) / k0) * 100).toFixed(2)}%`);
  }
  console.log(`      momentum ${p0.toFixed(6)} -> ${p1.toFixed(6)} kg m/s; KE ${k0.toFixed(6)} -> ${k1.toFixed(6)} J`);
});

check('wall restitution e reverses the normal velocity with the set coefficient', () => {
  const world = createWorld({ g: 0 });
  const wall = addBarrier(world, {
    kind: 'wall', x: 2, y: 0, z: 0, width: 2, height: 1.2, restitution: 0.8,
  });
  const block = addBlock(world, { mass: 1, size: 0.5, x: 0, y: 1, z: 0, v0: 4, azimuth: 0 });
  applyInitialVelocity(world, block);
  advance(world, 0.8, 1 / 480);
  near(block.cannon.velocity.x, -3.2, 0.06, 'reflected speed');
  if (!wall.lastImpact) throw new Error('wall did not record an impact');
  near(wall.lastImpact.measuredE, 0.8, 0.03, 'measured restitution');
  const p = wall.lastImpact.pInMag;
  if (!(p > 0)) throw new Error('momentum readout missing');
});

check('pendulum small-angle period matches 2*pi*sqrt(L/g) within 1%', () => {
  for (const L of [0.8, 1.5, 2.4]) {
    const world = createWorld({ g: 9.8 });
    const pendulum = addPendulum(world, { x: 0, y: 4, z: 0, length: L, mass: 1, amplitude: 2 });
    advance(world, 8, 1 / 480);
    const expected = 2 * Math.PI * Math.sqrt(L / 9.8);
    if (!pendulum.measuredPeriod) throw new Error(`L=${L}: no period measured`);
    near(pendulum.measuredPeriod, expected, expected * 0.01, `pendulum period L=${L}`);
    console.log(`      L=${L}: T=${pendulum.measuredPeriod.toFixed(6)} s vs ${expected.toFixed(6)} s`);
  }
});

check('rolling ball and cylinder use I/(m r^2) in the rolling law', () => {
  for (const [kind, ratio] of [['ball', 2 / 5], ['cylinder', 1 / 2]]) {
    const world = createWorld({ g: 9.8 });
    const surface = addSurface(world, { angleDeg: 20, muS: 0.8, muK: 0.5, length: 40, x: 0, y: 4, width: 3 });
    const radius = 0.3;
    const body = kind === 'ball'
      ? addBall(world, { mass: 2, radius, x: 0, y: 6, z: 0, I: ratio * 2 * radius ** 2 })
      : addCylinder(world, { mass: 2, radius, length: 0.7, x: 0, y: 6, z: 0, I: ratio * 2 * radius ** 2 });
    attachBodyToSurface(world, body, surface.id, { localX: 5, localZ: 0 });
    body.v0 = 0;
    applyInitialVelocity(world, body);
    advance(world, 1.2, 1 / 960);
    const { t } = surfaceFrame(surface);
    const measured = -body.cannon.velocity.dot(t) / 1.2;
    const expected = (9.8 * Math.sin((20 * Math.PI) / 180)) / (1 + ratio);
    near(measured, expected, Math.max(0.005, expected * 0.003), `${kind} rolling acceleration`);
    console.log(`      ${kind} I/mr^2=${ratio}: a=${measured.toFixed(6)} vs ${expected.toFixed(6)} m/s^2`);
  }
});

check('movable wedge: block motion couples to the wedge on a frictionless floor', () => {
  const world = createWorld({ g: 9.8 });
  const wedge = addWedge(world, {
    x: 0, baseY: 0, z: 0, angle: 25, length: 3, width: 1.6, mass: 4, muFloor: 0, blockMu: 0,
  });
  const block = addBlock(world, { mass: 1, size: 0.4, x: -0.5, y: 1.25, z: 0 });
  applyInitialVelocity(world, block);
  const wx0 = wedge.body.position.x;
  const bx0 = block.cannon.position.x;
  const p0 = wedge.mass * wedge.body.velocity.x + block.mass * block.cannon.velocity.x;
  advance(world, 0.6, 1 / 960);
  const p1 = wedge.mass * wedge.body.velocity.x + block.mass * block.cannon.velocity.x;
  const dxW = wedge.body.position.x - wx0;
  const dxB = block.cannon.position.x - bx0;
  near(p1, p0, 1e-5, 'horizontal momentum');
  if (!(dxW > 0.02)) throw new Error(`wedge did not recoil: dx=${dxW}`);
  if (!(dxB < -0.02)) throw new Error(`block did not slide down the slope: dx=${dxB}`);
  if (Math.abs(wedge.body.velocity.x) < 0.1) throw new Error('wedge velocity stayed near zero');
  console.log(`      dx wedge=${dxW.toFixed(4)} m, dx block=${dxB.toFixed(4)} m, p=${p1.toFixed(6)} kg m/s`);
});

check('fan attachment applies a constant thrust (and can be switched off)', () => {
  const world = createWorld({ g: 9.8 });
  const surface = addSurface(world, { angleDeg: 0, muS: 0, muK: 0, length: 20, x: 0, y: 1, width: 3 });
  const block = addBlock(world, { mass: 1, x: 0, y: 2, z: 0 });
  attachBodyToSurface(world, block, surface.id, { localX: -5, localZ: 0 });
  block.v0 = 0;
  applyInitialVelocity(world, block);
  const fan = addFan(world, { bodyId: block.id, thrust: 2, on: true, azimuth: 0 });
  advance(world, 1.0, 1 / 960);
  near(block.cannon.velocity.x, 2.0, 0.02, 'fan acceleration');
  fan.on = false;
  const v = block.cannon.velocity.x;
  advance(world, 0.4, 1 / 960);
  near(block.cannon.velocity.x, v, 1e-4, 'fan off keeps speed on frictionless surface');
});

check('photogate records a body crossing with time and speed', () => {
  const world = createWorld({ g: 0 });
  const gate = addSensor(world, { kind: 'photogate', x: 1, y: 0, z: 0, width: 2, height: 2 });
  const block = addBlock(world, { mass: 1, x: 0, y: 1, z: 0, v0: 2, azimuth: 0 });
  applyInitialVelocity(world, block);
  advance(world, 1.0, 1 / 480);
  if (!gate.lastCrossing) throw new Error('photogate did not trigger');
  near(gate.lastCrossing.v, 2, 0.05, 'crossing speed');
  if (!(gate.lastCrossing.t > 0.4 && gate.lastCrossing.t < 0.6)) {
    throw new Error(`crossing time ${gate.lastCrossing.t} outside expected window`);
  }
  if (gate.samples.length < 1) throw new Error('photogate did not feed x-t samples');
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

check('undo/redo: mechanics add, move, parameter, attach, delete returns to exact scenes', () => {
  const world = createWorld({ g: 9.8 });
  const history = createSceneHistory();
  const snap = () => serializeScene(world);
  const states = [snap()];
  const selections = [];
  let now = 0;
  const edit = (selected, fn) => {
    pushSceneHistory(history, snap(), selected, { now: now += 1 });
    fn();
    selections.push(selected);
    states.push(snap());
  };

  let surfaceId = null;
  let blockId = null;
  edit(null, () => {
    const surface = addSurface(world, { angleDeg: 25, muS: 0.6, muK: 0.3, length: 12, x: 0, y: 3, width: 3 });
    const block = addBlock(world, { mass: 1.2, x: 0, y: 5, z: 0 });
    surfaceId = surface.id;
    blockId = block.id;
  });
  edit({ type: 'body', id: blockId }, () => {
    setBodyPosition(world, getBody(world, blockId), { x: 0.8, y: 4.2, z: 0.2 }, { snap: false });
  });
  edit({ type: 'body', id: blockId }, () => {
    const block = getBody(world, blockId);
    block.mass = 2.4;
    block.cannon.mass = 2.4;
    block.cannon.updateMassProperties();
  });
  edit({ type: 'body', id: blockId }, () => {
    const block = getBody(world, blockId);
    attachBodyToSurface(world, block, surfaceId, { localX: 2, localZ: 0 });
    block.v0 = 0;
    applyInitialVelocity(world, block);
  });
  edit({ type: 'surface', id: surfaceId }, () => {
    removeBody(world, getBody(world, blockId));
    world.bodies = world.bodies.filter((b) => b.id !== blockId);
  });

  if (!canUndo(history)) throw new Error('history has no undo entries');
  const forward = states.map((data) => JSON.stringify(data));
  let current = snap();
  const exportScene = () => {
    const target = createWorld({ g: 9.8 });
    if (!deserializeScene(target, current)) throw new Error('deserialize failed during undo');
    return JSON.stringify(serializeScene(target));
  };
  for (let i = states.length - 2; i >= 0; i -= 1) {
    const entry = takeUndo(history, current, { type: 'body', id: blockId });
    if (!entry) throw new Error(`undo entry missing at depth ${i}`);
    current = entry.scene;
    if (exportScene() !== forward[i]) throw new Error(`undo did not restore scene ${i}`);
  }
  if (canUndo(history)) throw new Error('undo stack not empty after rewinding');
  if (!canRedo(history)) throw new Error('redo stack empty after rewinding');
  for (let i = 1; i < states.length; i += 1) {
    const entry = takeRedo(history, current, null);
    if (!entry) throw new Error(`redo entry missing at depth ${i}`);
    current = entry.scene;
    if (exportScene() !== forward[i]) throw new Error(`redo did not restore scene ${i}`);
  }
  deserializeScene(world, current);
  const restored = getBody(world, blockId);
  if (restored) throw new Error('deleted body reappeared after redo');
  if (world.surfaces.length !== 1) throw new Error('surface lost after redo');
  console.log(`      ${states.length - 1} edits, ${states.length} exact scenes forward and back`);
});

check('scene history: coalesced slider edits and selection restore', () => {
  const history = createSceneHistory();
  const world = createWorld({ g: 9.8 });
  const scene = serializeScene(world);
  const pushed = pushSceneHistory(history, scene, { type: 'body', id: 'body-1' }, { key: 'mass', now: 10 });
  const merged = pushSceneHistory(history, scene, { type: 'body', id: 'body-1' }, { key: 'mass', now: 210 });
  const split = pushSceneHistory(history, scene, null, { key: 'mass', now: 2000 });
  if (!pushed || merged || !split) throw new Error('coalescing window did not merge the slider run');
  takeUndo(history, scene, null);
  const entry = takeUndo(history, scene, null);
  if (entry?.selected?.id !== 'body-1') throw new Error('undo did not restore the selected entity');
  if (history.redo.length !== 2) throw new Error('redo entries not recorded');
});

check('scene migration accepts v1 and pre-version payloads and rejects garbage', () => {
  const world = createWorld({ g: 9.8 });
  addBlock(world, { mass: 2, x: 0, y: 3, z: 0 });
  const current = serializeScene(world);
  if (current.version !== SCENE_VERSION) throw new Error(`serialized scene is not v${SCENE_VERSION}`);
  if (!('restitution' in current)) throw new Error('restitution missing from v2 payload');

  const v1 = { ...current, version: 1 };
  delete v1.restitution;
  const migratedV1 = migrateScene(v1);
  if (migratedV1?.version !== SCENE_VERSION || migratedV1.restitution !== 0) throw new Error('v1 payload not migrated');
  const legacy = { ...current };
  delete legacy.version;
  delete legacy.restitution;
  const migratedLegacy = migrateScene(legacy);
  if (migratedLegacy?.version !== SCENE_VERSION) throw new Error('pre-version payload not migrated');
  const target = createWorld({ g: 9.8 });
  if (!deserializeScene(target, migratedLegacy) || target.bodies.length !== 1) throw new Error('migrated legacy scene did not load');

  for (const garbage of [null, undefined, 3, 'scene', [], {}, { version: 99 }, { version: 2, bodies: 'nope' }]) {
    if (migrateScene(garbage) !== null) throw new Error(`garbage was accepted: ${JSON.stringify(garbage)}`);
  }
  const target2 = createWorld({ g: 9.8 });
  if (deserializeScene(target2, { version: 2, bodies: 'nope' })) throw new Error('deserializeScene accepted garbage');
  console.log(`      v1/pre-version -> v${SCENE_VERSION}; 8 garbage shapes rejected`);
});

check('scene slots migrate the legacy single save and survive overwrite/delete', () => {
  const world = createWorld({ g: 9.8 });
  addBlock(world, { mass: 3, x: 0, y: 4, z: 0 });
  const scene = serializeScene(world);
  const memory = new Map([[LEGACY_KEY, JSON.stringify(scene)]]);
  const storage = {
    getItem: (key) => (memory.has(key) ? memory.get(key) : null),
    setItem: (key, value) => { memory.set(key, String(value)); },
    removeItem: (key) => { memory.delete(key); },
  };
  let store = readSlotStore(storage);
  if (SLOT_COUNT < 8) throw new Error('slot count below eight');
  if (!store.slots[0].scene) throw new Error('legacy save was not migrated into slot 1');
  near(store.slots[0].scene.bodies[0].mass, 3, 1e-12, 'legacy slot mass');
  if (store.slots[0].mode !== 'mechanics') throw new Error('legacy mode not recorded');

  store = saveSlot(store, 4, { name: '斜面实验 · Incline test', scene, mode: 'mechanics', now: 123456 });
  store = saveSlot(store, 5, { name: '电磁 · E&M', scene: { ...scene, em: { mode: 'em' } }, mode: 'em', now: 123457 });
  const write = writeSlotStore(storage, store);
  if (!write.ok) throw new Error('slot write failed');
  const reread = parseSlotStore(memory.get(SLOT_KEY));
  if (!reread.slots[4].scene || reread.slots[4].name !== '斜面实验 · Incline test') throw new Error('slot 5 did not persist');
  if (reread.slots[5].mode !== 'em') throw new Error('E&M slot mode did not persist');
  const afterDelete = deleteSlot(reread, 4);
  if (afterDelete.slots[4].scene || afterDelete.slots[4].name !== '场景 5 · Scene 5') throw new Error('delete did not clear slot 5');
  console.log(`      ${SLOT_COUNT} slots; legacy -> slot 1; named overwrite/delete round-trip`);
});

check('slot store reports quota failures without throwing', () => {
  const store = parseSlotStore(null);
  const failing = {
    getItem: () => null,
    setItem: () => {
      const err = new Error('quota');
      err.name = 'QuotaExceededError';
      throw err;
    },
  };
  const result = writeSlotStore(failing, store);
  if (result.ok || result.error !== 'quota') throw new Error(`quota not reported: ${JSON.stringify(result)}`);
});

check('share payload round-trips through the lab hash form', async () => {
  const world = createWorld({ g: 9.8 });
  addSurface(world, { angleDeg: 18, muS: 0.4, muK: 0.2, length: 6, x: 0, y: 2 });
  addBlock(world, { mass: 1.5, x: 0, y: 3, z: 0 });
  const data = serializeScene(world);
  const payload = await encodeShareScene(data);
  if (!payload || payload.includes('+') || payload.includes('/')) throw new Error('payload is not base64url');
  const hash = shareHash(payload);
  if (sharePayloadFromHash(hash) !== payload) throw new Error('payload did not parse from the hash');
  const parts = hash.replace(/^#/, '').split('/').filter(Boolean);
  if (parts[0] !== 'physics' || parts[1] !== 'lab') throw new Error(`router would not see the lab segment: ${parts.join('/')}`);
  const restored = await decodeShareScene(payload);
  if (migrateScene(restored)?.surfaces.length !== 1) throw new Error('shared scene did not decode');
  if (migrateScene(restored)?.bodies[0].mass !== 1.5) throw new Error('shared scene lost body data');
  console.log(`      ${JSON.stringify(data).length} JSON chars -> ${payload.length} hash chars; parts=${parts.join('/')}`);
});

function linearSlope(points, xKey, yKey) {
  const n = points.length;
  const sx = points.reduce((s, p) => s + p[xKey], 0);
  const sy = points.reduce((s, p) => s + p[yKey], 0);
  const sxx = points.reduce((s, p) => s + p[xKey] * p[xKey], 0);
  const sxy = points.reduce((s, p) => s + p[xKey] * p[yKey], 0);
  const denom = n * sxx - sx * sx;
  return denom === 0 ? 0 : (n * sxy - sx * sy) / denom;
}

function runUntilOrbitPeriod(orbit, world, maxSeconds) {
  const h = 1 / 240;
  const steps = Math.round(maxSeconds / h);
  for (let i = 0; i < steps; i += 1) {
    stepWorld(world, h, { h });
    if (orbit.periodMeasured > 0) break;
  }
}

function runUntilTunnelPeriod(tunnel, world, maxSeconds) {
  const h = 1 / 240;
  const steps = Math.round(maxSeconds / h);
  for (let i = 0; i < steps; i += 1) {
    stepWorld(world, h, { h });
    if (tunnel.measuredPeriod > 0) break;
  }
}

/* ------------------------- phase 2: oscillation --------------------- */

check('oscillator: undamped free period matches 2*pi*sqrt(m/k) within 1%', () => {
  for (const [mass, k] of [[1, 4], [2, 18]]) {
    const world = createWorld({ g: 9.8 });
    const osc = addOscillator(world, {
      mass, k, damping: 0, driveOn: false, amplitude: 0.2,
    });
    advance(world, 8, 1 / 480);
    const expected = 2 * Math.PI * Math.sqrt(mass / k);
    if (!(osc.measuredPeriod > 0)) throw new Error(`m=${mass} k=${k}: no zero-crossing period recorded`);
    near(osc.measuredPeriod, expected, expected * 0.01, `period m=${mass}, k=${k}`);
    console.log(`      m=${mass} kg, k=${k} N/m: T=${osc.measuredPeriod.toFixed(6)} s vs ${expected.toFixed(6)} s (${((Math.abs(osc.measuredPeriod - expected) / expected) * 100).toFixed(3)}%)`);
  }
});

check('oscillator: underdamped envelope decays as exp(-b t / 2m) within 2%', () => {
  const world = createWorld({ g: 9.8 });
  const mass = 1;
  const b = 0.8;
  const osc = addOscillator(world, {
    mass, k: 9, damping: b, driveOn: false, amplitude: 0.8,
  });
  advance(world, 14, 1 / 480);
  const peaks = osc.peaks.filter((p) => p.u > 1e-4);
  if (peaks.length < 4) throw new Error(`only ${peaks.length} positive peaks recorded`);
  const logPeaks = peaks.map((p) => ({ t: p.t, y: Math.log(p.u) }));
  const slope = linearSlope(logPeaks, 't', 'y');
  const expected = -b / (2 * mass);
  const rel = Math.abs(slope - expected) / Math.abs(expected);
  if (rel > 0.02) throw new Error(`log-envelope slope ${slope.toExponential(5)} vs ${expected.toExponential(5)} (${(rel * 100).toFixed(2)}%)`);
  console.log(`      ${peaks.length} peaks: fitted ln(A) slope=${slope.toFixed(6)} 1/s vs -b/2m=${expected.toFixed(6)} 1/s (${(rel * 100).toFixed(2)}%)`);
});

check('oscillator: driven steady-state amplitude matches A(omega) within 2% at three frequencies', () => {
  const mass = 1;
  const k = 4;
  const b = 0.5;
  const F0 = 1.2;
  const results = [];
  for (const omega of [1.2, 2.0, 2.9]) {
    const world = createWorld({ g: 9.8 });
    const osc = addOscillator(world, {
      mass, k, damping: b, driveForce: F0, driveOmega: omega, driveOn: true, amplitude: 0,
    });
    advance(world, 40, 1 / 240);
    const measured = osc.measuredAmplitude;
    const expected = oscillatorAnalyticAmplitude(osc, omega);
    if (!(measured > 0)) throw new Error(`omega=${omega}: no steady-state amplitude measured`);
    near(measured, expected, expected * 0.02, `amplitude at omega=${omega}`);
    results.push(`omega=${omega}: A=${measured.toFixed(5)} m vs ${expected.toFixed(5)} m`);
  }
  console.log(`      ${results.join('; ')}`);
});

check('oscillator: critical damping b = 2*sqrt(km) returns without overshoot', () => {
  const world = createWorld({ g: 9.8 });
  const mass = 1;
  const k = 4;
  const b = 2 * Math.sqrt(k * mass);
  const osc = addOscillator(world, {
    mass, k, damping: b, driveOn: false, amplitude: 0.8,
  });
  if (oscillatorRegime(osc) !== 'critical') throw new Error(`regime reported ${oscillatorRegime(osc)}`);
  let minU = osc.u;
  const h = 1 / 480;
  for (let i = 0; i < Math.round(8 / h); i += 1) {
    stepWorld(world, h, { h });
    minU = Math.min(minU, osc.u);
  }
  if (minU < -1e-4) throw new Error(`critical damping overshot to u=${minU.toExponential(3)}`);
  near(osc.u, 0, 0.01, 'displacement after 8 s');
  console.log(`      b=${b.toFixed(6)} kg/s, regime=${oscillatorRegime(osc)}, min u=${minU.toExponential(3)} m (no sign reversal), u(8 s)=${osc.u.toExponential(3)} m`);
});

/* --------------------------- phase 2: torsion ----------------------- */

check('torsion pendulum: period matches 2*pi*sqrt(I/kappa) within 1% for two pairs', () => {
  for (const [I, kappa] of [[0.8, 1.2], [2.0, 0.5]]) {
    const world = createWorld({ g: 9.8 });
    const pend = addTorsionPendulum(world, { I, kappa, amplitude: 12 });
    const expected = torsionPeriod(pend);
    advance(world, expected * 1.8 + 0.5, 1 / 480);
    if (!(pend.measuredPeriod > 0)) throw new Error(`I=${I}, kappa=${kappa}: no period recorded`);
    near(pend.measuredPeriod, expected, expected * 0.01, `torsion period I=${I}, kappa=${kappa}`);
    console.log(`      I=${I} kg·m², kappa=${kappa} N·m/rad: T=${pend.measuredPeriod.toFixed(6)} s vs ${expected.toFixed(6)} s (${((Math.abs(pend.measuredPeriod - expected) / expected) * 100).toFixed(3)}%)`);
  }
});

/* ---------------------- phase 2: frames and lifts ------------------- */

check('elevator: apparent weight N = m(g + a) within 0.5% for a > 0, a < 0 and a = -g', () => {
  const world = createWorld({ g: 9.8 });
  const mass = 2;
  const cases = [2, -3, -9.8];
  const readings = [];
  for (const accel of cases) {
    const lift = addElevator(world, { mass, accel });
    const expected = mass * (9.8 + accel);
    near(elevatorReading(world, lift), expected, Math.max(1e-9, Math.abs(expected) * 0.005), `N at a=${accel}`);
    if (accel === -9.8 && Math.abs(elevatorReading(world, lift)) > 1e-9) throw new Error('free-fall reading is not zero');
    readings.push(`a=${accel}: N=${elevatorReading(world, lift).toFixed(4)} N vs ${expected.toFixed(4)} N`);
  }
  near(apparentWeight(3, 9.8, 0), 3 * 9.8, 1e-12, 'at rest');
  console.log(`      ${readings.join('; ')}`);
});

check('carriage: hanging bob settles at tan(phi) = a/g within 1 degree', () => {
  for (const accel of [1.5, -2.5]) {
    const world = createWorld({ g: 9.8 });
    const carriage = addCarriage(world, { accel, length: 1.25, damping: 1.8 });
    advance(world, 10, 1 / 240);
    const measured = -carriage.theta;
    const expected = carriageTilt(accel, world.g);
    const errDeg = Math.abs(measured - expected) * (180 / Math.PI);
    if (errDeg > 1) throw new Error(`a=${accel}: tilt off by ${errDeg.toFixed(3)} deg`);
    console.log(`      a=${accel} m/s²: phi=${((measured * 180) / Math.PI).toFixed(3)}° vs ${((expected * 180) / Math.PI).toFixed(3)}° (${errDeg.toFixed(3)}° error)`);
  }
});

check('reference frame: v_rel = v - v_frame is exact for several bodies', () => {
  const cases = [
    [{ x: 3, y: 0, z: -1 }, { x: 1.5, y: 0, z: 2 }],
    [{ x: -2, y: 4, z: 0 }, { x: -2, y: -1, z: 0.25 }],
    [{ x: 0, y: 0, z: 0 }, { x: 5, y: -3, z: 7 }],
  ];
  for (const [v, frame] of cases) {
    const rel = relativeVelocity(v, frame);
    near(rel.x, v.x - frame.x, 0, 'v_rel x');
    near(rel.y, v.y - frame.y, 0, 'v_rel y');
    near(rel.z, v.z - frame.z, 0, 'v_rel z');
  }
  console.log('      3 velocity pairs transformed exactly: (v - v_frame) componentwise');
});

/* ---------------------- phase 2: angular momentum ------------------- */

check('angular momentum: L conserved within 0.5% while a block moves radially', () => {
  const world = createWorld({ g: 9.8 });
  const table = addAngularTable(world, {
    radius: 1.6, discMass: 8, blockMass: 1, r: 1.0, omega: 2.2,
    radialMotor: true, rSpeed: 0.25,
  });
  const L0 = angularTableMomentum(table);
  advance(world, 2.0, 1 / 240);
  const L1 = angularTableMomentum(table);
  const rel = Math.abs(L1 - L0) / Math.abs(L0);
  if (rel > 0.005) throw new Error(`L drifted by ${(rel * 100).toFixed(3)}%`);
  if (!(table.r > 1.4)) throw new Error(`block did not move radially: r=${table.r}`);
  if (!(table.omega < 2.2)) throw new Error('omega did not drop as the block moved outward');
  console.log(`      r ${1.0}→${table.r.toFixed(3)} m, omega ${2.2}→${table.omega.toFixed(4)} rad/s, L=${L1.toFixed(6)} vs ${L0.toFixed(6)} kg·m²/s (${(rel * 100).toFixed(4)}%)`);
});

check('angular momentum: dropping a block conserves L and lowers kinetic energy', () => {
  const world = createWorld({ g: 9.8 });
  const table = addAngularTable(world, {
    radius: 1.6, discMass: 8, blockMass: 1, r: 1.05, omega: 2.2, blockOn: false,
  });
  const L0 = angularTableMomentum(table);
  const ke0 = table.ke;
  dropAngularBlock(table);
  advance(world, 0.5, 1 / 240);
  const L1 = angularTableMomentum(table);
  const rel = Math.abs(L1 - L0) / Math.abs(L0);
  if (rel > 0.005) throw new Error(`L changed by ${(rel * 100).toFixed(3)}%`);
  if (!(table.ke < ke0)) throw new Error(`KE did not drop: ${ke0} -> ${table.ke}`);
  console.log(`      L=${L0.toFixed(6)}→${L1.toFixed(6)} kg·m²/s (${(rel * 100).toFixed(4)}%), KE=${ke0.toFixed(3)}→${table.ke.toFixed(3)} J, omega=${table.omega.toFixed(4)} rad/s`);
});

check('rod under torque: alpha = tau/I within 0.5% for end and center pivots', () => {
  for (const pivot of ['end', 'center']) {
    const world = createWorld({ g: 9.8 });
    const mass = 2;
    const length = 2.4;
    const torque = 3.2;
    const rod = addRod(world, { mass, length, pivot, torque });
    const expectedI = rodInertia(mass, length, pivot);
    near(rod.I, expectedI, 1e-12, `inertia ${pivot}`);
    advance(world, 0.5, 1 / 480);
    const measured = rod.omega / rod.time;
    const expected = torque / expectedI;
    near(measured, expected, expected * 0.005, `alpha ${pivot}`);
    console.log(`      pivot=${pivot}: I=${expectedI.toFixed(6)} kg·m², alpha=${measured.toFixed(6)} vs ${expected.toFixed(6)} rad/s²`);
  }
});

/* -------------------------- phase 2: gravity ----------------------- */

check('orbit: circular orbit keeps r constant and period matches 2*pi*sqrt(r^3/GM) within 0.5%', () => {
  const world = createWorld({ g: 0 });
  const orbit = addOrbit(world, { G: 1, M: 8, r: 6, speedFactor: 1 });
  const expected = 2 * Math.PI * Math.sqrt(6 ** 3 / 8);
  runUntilOrbitPeriod(orbit, world, expected * 1.15);
  if (!(orbit.periodMeasured > 0)) throw new Error('no orbital period recorded');
  const radiusError = (orbit.radiusMax - orbit.radiusMin) / orbit.r0;
  if (radiusError > 0.005) throw new Error(`radius varied by ${(radiusError * 100).toFixed(3)}%`);
  near(orbit.periodMeasured, expected, expected * 0.005, 'circular period');
  near(orbitArealVelocity(orbit), 0.5 * Math.sqrt(8 * 6), 0.5 * Math.sqrt(8 * 6) * 0.005, 'areal velocity');
  console.log(`      r=${orbit.r0} m: r range ${orbit.radiusMin.toFixed(6)}..${orbit.radiusMax.toFixed(6)} m (${(radiusError * 100).toFixed(4)}%), T=${orbit.periodMeasured.toFixed(6)} s vs ${expected.toFixed(6)} s`);
});

check('orbit: ellipse period matches Kepler, areal velocity is constant and energy is conserved', () => {
  const world = createWorld({ g: 0 });
  const orbit = addOrbit(world, { G: 1, M: 8, r: 6, speedFactor: 0.72 });
  const expected = orbitKeplerPeriod(orbit);
  runUntilOrbitPeriod(orbit, world, expected * 1.15);
  if (!(orbit.periodMeasured > 0)) throw new Error('no elliptical period recorded');
  near(orbit.periodMeasured, expected, expected * 0.01, 'Kepler period');
  const areal = orbitArealVelocity(orbit);
  const mean = Math.abs(orbit.arealSum / orbit.arealCount) / 2;
  const arealRel = (orbit.arealMax - orbit.arealMin) / Math.abs(orbit.arealMax + orbit.arealMin);
  if (arealRel > 0.01) throw new Error(`areal velocity varied by ${(arealRel * 100).toFixed(3)}%`);
  if (orbit.energyDrift > 0.005) throw new Error(`specific energy drifted by ${(orbit.energyDrift * 100).toFixed(3)}%`);
  console.log(`      a=${orbitSemiMajorSafe(orbit).toFixed(4)} m, T=${orbit.periodMeasured.toFixed(6)} s vs ${expected.toFixed(6)} s, areal rel spread ${(arealRel * 100).toFixed(4)}%, energy drift ${(orbit.energyDrift * 100).toFixed(4)}%, mean dA/dt=${mean.toFixed(6)} m²/s`);
});

function orbitSemiMajorSafe(orbit) {
  const a = orbitKeplerPeriod(orbit);
  return Number.isFinite(a) ? -orbit.mu / (2 * orbit.energy) : 0;
}

check('orbit: v slightly above escape escapes; slightly below stays bound', () => {
  const above = createWorld({ g: 0 });
  const escaping = addOrbit(above, { G: 1, M: 8, r: 4, speedFactor: 1.01 * Math.SQRT2 });
  const rStart = Math.hypot(escaping.px, escaping.pz);
  advance(above, 16, 1 / 240);
  const rEnd = Math.hypot(escaping.px, escaping.pz);
  if (!(rEnd > rStart * 2.5)) throw new Error(`escape orbit only reached r=${rEnd}`);
  if (!(escaping.energy > 0)) throw new Error('escape orbit has negative specific energy');

  const below = createWorld({ g: 0 });
  const bound = addOrbit(below, { G: 1, M: 8, r: 4, speedFactor: 0.99 * Math.SQRT2 });
  const boundStart = Math.hypot(bound.px, bound.pz);
  if (!(orbitEscapeSpeed(bound) > 0)) throw new Error('escape speed readout missing');
  advance(below, 16, 1 / 240);
  const boundR = Math.hypot(bound.px, bound.pz);
  if (!(bound.energy < 0)) throw new Error(`sub-escape orbit became unbound (energy ${bound.energy})`);
  const rMax = -bound.mu / bound.energy;
  if (!(boundR < rMax)) throw new Error(`bound orbit passed its apoapsis: r=${boundR} >= ${rMax}`);
  console.log(`      above: r ${rStart.toFixed(3)}→${rEnd.toFixed(3)} m, E=${escaping.energy.toFixed(6)} J/kg; below: r ${boundStart.toFixed(3)}→${boundR.toFixed(3)} m, E=${bound.energy.toFixed(6)} J/kg, apoapsis ${rMax.toFixed(2)} m`);
});

check('tunnel: period through a uniform sphere matches 2*pi*sqrt(R^3/GM) within 1%', () => {
  const world = createWorld({ g: 0 });
  const tunnel = addTunnel(world, { G: 1, M: 8, R: 4 });
  const expected = tunnelPeriod(tunnel);
  runUntilTunnelPeriod(tunnel, world, expected * 1.95);
  if (!(tunnel.measuredPeriod > 0)) throw new Error('no tunnel period recorded');
  near(tunnel.measuredPeriod, expected, expected * 0.01, 'tunnel period');
  console.log(`      R=4 m, GM=8: T=${tunnel.measuredPeriod.toFixed(6)} s vs ${expected.toFixed(6)} s (${((Math.abs(tunnel.measuredPeriod - expected) / expected) * 100).toFixed(4)}%)`);
});

/* -------------------------- gravity audit -------------------------- */

check('g=0: a free block does not fall and weight reads zero', () => {
  const world = createWorld({ g: 0, h: 1 / 240 });
  const block = addBlock(world, { mass: 2, size: 0.5, x: 0, y: 3, z: 0 });
  advance(world, 1, 1 / 240);
  near(block.cannon.position.y, 3, 1e-9, 'free y at g=0', ' m');
  near(block.cannon.velocity.y, 0, 1e-12, 'free vy at g=0', ' m/s');
  const weight = forceVectors(world, block).find((v) => v.type === 'weight');
  near(weight.magnitude, 0, 1e-12, 'weight at g=0', ' N');
  console.log(`      g=0: y=${block.cannon.position.y.toFixed(9)} m after 1 s, weight=${weight.magnitude} N`);
});

check('custom g=1.6: free fall a=g, N=mg, pendulum/elevator/air-drag follow g', () => {
  const g = 1.6;
  const world = createWorld({ g, h: 1 / 240 });
  const body = addProjectile(world, { x: 0, y: 100, z: 0, mass: 2.5, radius: 0.02, drag: 'none' });
  advance(world, 1, 1 / 240);
  near(-body.cannon.velocity.y, g, 1e-9, 'free-fall a=g', ' m/s²');
  near(body.cannon.position.y, 100 - 0.5 * g, 0.01, 'free-fall y', ' m');
  const weight = forceVectors(world, body).find((v) => v.type === 'weight');
  near(weight.magnitude, body.mass * g, 1e-12, 'weight N=mg', ' N');
  near(pendulumPeriod({ length: 1.2 }, g), 2 * Math.PI * Math.sqrt(1.2 / g), 1e-12, 'pendulum period', ' s');
  near(carriageTilt(g, g), Math.PI / 4, 1e-12, 'carriage tilt at a=g', ' rad');
  const lift = addElevator(world, { mass: 3, accel: 0 });
  near(elevatorReading(world, lift), 3 * g, 1e-12, 'elevator reading', ' N');

  const dragWorld = createWorld({ g, h: 1 / 240 });
  const drag = addProjectile(dragWorld, {
    x: 0, y: 1000, z: 0, mass: 1, radius: 0.02, drag: 'linear', dragB: 0.5,
  });
  advance(dragWorld, 12, 1 / 240);
  const vt = (1 * g) / 0.5;
  near(-drag.cannon.velocity.y, vt, vt * 0.01, 'linear terminal speed v_t=mg/b', ' m/s');
  console.log(`      g=1.6: a=${(-body.cannon.velocity.y).toFixed(6)} m/s², N=${weight.magnitude.toFixed(6)} N, T=${pendulumPeriod({ length: 1.2 }, g).toFixed(6)} s, lift=${elevatorReading(world, lift).toFixed(6)} N, drag v_t=${(-drag.cannon.velocity.y).toFixed(6)} m/s vs ${vt.toFixed(6)} m/s`);
});

check('motion-sensor acceleration follows world.g at 0 and 1.6', () => {
  for (const g of [0, 1.6]) {
    const world = createWorld({ g, h: 1 / 240 });
    const sensor = addSensor(world, { kind: 'motion', x: 0, y: 2.5, z: 0, range: 20, face: 1 });
    addBlock(world, { mass: 1, size: 0.4, x: 2, y: 3, z: 0 });
    stepWorld(world, 1 / 240, { h: 1 / 240 });
    const sample = sensor.samples[0];
    if (!sample) throw new Error(`no motion sample at g=${g}`);
    near(sample.ay, -g, 1e-9, `sensor ay at g=${g}`, ' m/s²');
    near(sample.a, g, 1e-9, `sensor |a| at g=${g}`, ' m/s²');
    console.log(`      g=${g}: sensor ay=${sample.ay.toFixed(9)} m/s², |a|=${sample.a.toFixed(9)} m/s²`);
  }
});

check('g=0 and custom g=1.6 serialize and restore with the scene', () => {
  for (const g of [0, 1.6]) {
    const world = createWorld({ g });
    const data = serializeScene(world);
    near(data.g, g, 1e-12, 'serialized g');
    const target = createWorld({ g: 9.8 });
    if (!deserializeScene(target, data)) throw new Error('deserializeScene returned false');
    near(target.g, g, 1e-12, `restored g=${g}`);
    near(target.engine.gravity.y, -g, 1e-12, `engine gravity at g=${g}`, ' m/s²');
    console.log(`      g=${g}: scene.g and engine.gravity survive serialize/deserialize`);
  }
});

/* ---------------------- FAIL fixes: snap steps, time ---------------- */

check('quantize helpers follow the current grid and angle step', () => {
  near(quantizeValue(0.2609790396, 0.1), 0.3, 1e-12, 'grid x');
  near(quantizeValue(-0.2313325093, 0.1), -0.2, 1e-12, 'grid z');
  near(quantizeValue(0.25, 0.1), 0.3, 1e-12, 'grid half step');
  near(quantizeValue(1.23, 0), 1.23, 0, 'zero step leaves value');
  // The old R path used a fixed 15° snap; a 10° entry must stay 10° at 5°.
  near(quantizeAngle(10, 5), 10, 1e-12, '10° with 5° step');
  near(quantizeAngle(31.55, 5), 30, 1e-12, 'direct-drag angle');
  near(quantizeAngle(14, 10), 10, 1e-12, 'custom 10° step');
  near(quantizeAngle(16, 10), 20, 1e-12, 'custom 10° step rounds up');
});

/* ------------------------- t115u floor + grid ----------------------- */

check('floor: block, ball and cart rest at half-height/radius without tunnelling', () => {
  const world = createWorld({ g: 9.8 });
  setFloorContact(world, { friction: DEFAULT_FLOOR_FRICTION, restitution: DEFAULT_FLOOR_RESTITUTION });
  const block = addBlock(world, { mass: 1, size: 0.5, x: 0, y: 4, z: 0 });
  const ball = addBall(world, { mass: 1, radius: 0.28, x: 1.5, y: 5, z: 0 });
  const cart = addCart(world, { mass: 1, radius: 0.3, x: 3, y: 6, z: 0 });
  let minY = Infinity;
  const h = 1 / 240;
  for (let i = 0; i < Math.round(3 / h); i += 1) {
    stepWorld(world, h, { h });
    minY = Math.min(minY, block.cannon.position.y, ball.cannon.position.y, cart.cannon.position.y);
  }
  near(block.cannon.position.y, 0.252, 0.004, 'block rests on floor', ' m');
  near(ball.cannon.position.y, 0.282, 0.004, 'ball rests at radius', ' m');
  near(cart.cannon.position.y, 0.302, 0.004, 'cart rests at wheel radius', ' m');
  if (Math.abs(block.cannon.velocity.y) > 0.02) throw new Error('block vertical velocity did not settle');
  if (minY < 0) throw new Error(`an object tunnelled below the floor: y=${minY}`);
  console.log(`      rest y: block=${block.cannon.position.y.toFixed(4)} m, ball=${ball.cannon.position.y.toFixed(4)} m, cart=${cart.cannon.position.y.toFixed(4)} m; min y=${minY.toFixed(4)} m`);
});

check('floor: restitution produces a measurable bounce and friction changes sliding distance', () => {
  const bouncy = createWorld({ g: 9.8 });
  setFloorContact(bouncy, { restitution: 0.85 });
  const ball = addBall(bouncy, { mass: 1, radius: 0.2, x: 0, y: 2.5, z: 0 });
  let apexAfterBounce = 0;
  let touched = false;
  const h = 1 / 480;
  for (let i = 0; i < Math.round(2.5 / h); i += 1) {
    stepWorld(bouncy, h, { h });
    if (ball.cannon.position.y <= 0.205) touched = true;
    if (touched) apexAfterBounce = Math.max(apexAfterBounce, ball.cannon.position.y);
  }
  if (apexAfterBounce < 0.8) throw new Error(`high restitution did not bounce: apex=${apexAfterBounce}`);

  const dead = createWorld({ g: 9.8 });
  setFloorContact(dead, { restitution: 0 });
  const deadBall = addBall(dead, { mass: 1, radius: 0.2, x: 0, y: 2.5, z: 0 });
  let deadApex = 0;
  let deadTouched = false;
  for (let i = 0; i < Math.round(2.5 / h); i += 1) {
    stepWorld(dead, h, { h });
    if (deadBall.cannon.position.y <= 0.205) deadTouched = true;
    if (deadTouched) deadApex = Math.max(deadApex, deadBall.cannon.position.y);
  }
  if (deadApex > 0.3) throw new Error(`zero restitution still bounced: apex=${deadApex}`);

  const slide = (mu) => {
    const world = createWorld({ g: 9.8 });
    setFloorContact(world, { friction: mu, restitution: 0 });
    const block = addBlock(world, { mass: 1, size: 0.4, x: 0, y: 0.2, z: 0 });
    block.cannon.velocity.set(3, 0, 0);
    for (let i = 0; i < Math.round(1.2 / h); i += 1) stepWorld(world, h, { h });
    return block.cannon.position.x;
  };
  const frictionless = slide(0);
  const rough = slide(1);
  if (!(frictionless > rough + 0.5)) {
    throw new Error(`floor friction had no measurable effect: μ0 x=${frictionless}, μ1 x=${rough}`);
  }
  console.log(`      bounce apex: e=0.85 -> ${apexAfterBounce.toFixed(3)} m, e=0 -> ${deadApex.toFixed(3)} m; slide x: μ0=${frictionless.toFixed(3)} m vs μ1=${rough.toFixed(3)} m`);
});

check('grid intersection snap: 0.1 m and 0.5 m lattices, inspector x/z agree', () => {
  const world = createWorld({ g: 9.8 });
  setGridStep(world, 0.1);
  const block = addBlock(world, { mass: 1, size: 0.5, x: 0.26, y: 1.4, z: -0.23 });
  const pose = snapEntityToFloorGrid(world, block);
  near(pose.x, 0.3, 1e-12, '0.1 lattice x');
  near(pose.z, -0.2, 1e-12, '0.1 lattice z');
  near(block.cannon.position.y, block.halfHeight + 0.002, 1e-12, 'rest height y');
  near(block.cannon.position.x, 0.3, 1e-12, 'inspector x follows snap');
  near(block.cannon.position.z, -0.2, 1e-12, 'inspector z follows snap');

  setGridStep(world, 0.5);
  const ball = addBall(world, { mass: 1, radius: 0.26, x: 0.26, y: 2, z: -0.23 });
  const coarse = snapEntityToFloorGrid(world, ball);
  near(coarse.x, 0.5, 1e-12, '0.5 lattice x');
  near(coarse.z, 0, 1e-12, '0.5 lattice z');
  near(ball.cannon.position.y, 0.262, 1e-12, 'ball rest radius');

  const free = addBlock(world, { mass: 1, size: 0.5, x: 0.26, y: 1.4, z: -0.23 });
  const bypass = snapEntityToNearest(world, free, { maxDistance: 0.01, floor: false });
  if (bypass !== null) throw new Error('floor snap ran while floor fallback was disabled');
  near(free.cannon.position.x, 0.26, 1e-12, 'Shift bypass leaves unquantized x');
  near(free.cannon.position.z, -0.23, 1e-12, 'Shift bypass leaves unquantized z');
  console.log(`      grid 0.1: (0.26,-0.23)->(${pose.x},${pose.z}) y=${pose.y}; grid 0.5: (0.26,-0.23)->(${coarse.x},${coarse.z}); bypass keeps raw point`);
});

check('floor/grid settings serialize, migrate and restore the contact pair', () => {
  const world = createWorld({ g: 9.8 });
  setFloorContact(world, { friction: 0.9, restitution: 0.35 });
  setGridStep(world, 0.25);
  const data = serializeScene(world);
  if (data.floor?.friction !== 0.9 || data.floor?.restitution !== 0.35) throw new Error('floor settings not serialized');
  if (data.gridStep !== 0.25) throw new Error('grid step not serialized');
  const target = createWorld({ g: 9.8 });
  deserializeScene(target, data);
  near(target.floorFriction, 0.9, 1e-12, 'restored floor μ');
  near(target.floorRestitution, 0.35, 1e-12, 'restored floor e');
  near(target.gridStep, 0.25, 1e-12, 'restored grid step');
  near(target.groundContact.friction, 0.9, 1e-12, 'restored contact pair μ');
  near(target.groundContact.restitution, 0.35, 1e-12, 'restored contact pair e');

  const legacy = migrateScene({ version: 1, bodies: [] });
  near(legacy.floor.friction, DEFAULT_FLOOR_FRICTION, 1e-12, 'legacy floor μ default');
  near(legacy.floor.restitution, DEFAULT_FLOOR_RESTITUTION, 1e-12, 'legacy floor e default');
  near(legacy.gridStep, 0.1, 1e-12, 'legacy grid step default');
  console.log(`      floor μ/e and gridStep survive reload; v1 migrates to μ=${legacy.floor.friction}, e=${legacy.floor.restitution}, step=${legacy.gridStep}`);
});

check('setBodyPosition moves to the typed point and re-seats with snap on', () => {
  const world = createWorld({ g: 9.8 });
  const surface = addSurface(world, { kind: 'incline', angleDeg: 20, length: 12, y: 1.5, width: 3 });
  const block = addBlock(world, { mass: 1, x: 0, y: 2, z: 0 });
  const free = setBodyPosition(world, block, { x: 1.5, y: 2, z: -1 }, { snap: false });
  if (free) throw new Error('free move unexpectedly attached');
  near(block.cannon.position.x, 1.5, 1e-12, 'free x');
  near(block.cannon.position.y, 2, 1e-12, 'free y');
  near(block.cannon.position.z, -1, 1e-12, 'free z');
  const top = surfaceTopPoint(surface, 0, 0);
  const hit = setBodyPosition(world, block, { x: top.x, y: top.y + 0.4, z: top.z }, { snap: true });
  if (hit !== 'surface') throw new Error(`snap move returned ${hit}`);
  if (block.attachment?.type !== 'surface') throw new Error('block did not re-seat on the incline');
  const local = surfaceLocalPoint(surface, block.cannon.position);
  near(local.y, surface.thickness / 2 + block.halfHeight, 0.02, 'seated height above surface');
  console.log(`      typed move -> free (1.5,2,-1); snapped localX=${local.x.toFixed(3)} m, localY=${local.y.toFixed(3)} m`);
});

check('motion-sensor samples are stamped with the state simulation time', () => {
  const world = createWorld({ g: 0, h: 1 / 240 });
  addSensor(world, { kind: 'motion', x: 0, y: 0, z: 0, range: 20, face: 1 });
  const block = addBlock(world, { mass: 1, x: 2, y: 0.25, z: 0, v0: 2, azimuth: 0 });
  applyInitialVelocity(world, block);
  const h = 1 / 240;
  stepWorld(world, h, { h });
  const sensor = world.sensors[0];
  if (!sensor.samples.length) throw new Error('no motion sample after one substep');
  const first = sensor.samples[0];
  near(first.t, h, 1e-12, 'first sample time = 1/240');
  near(first.x, block.cannon.position.x, 1e-12, 'first sample x matches post-step state');
  near(first.x, 2 + 2 * h, 1e-12, 'first sample x = x0 + v h');
  for (let i = 1; i < 11; i += 1) stepWorld(world, h, { h });
  const last = sensor.samples[sensor.samples.length - 1];
  near(last.t, 11 * h, 1e-12, '11th-substep sample time = 11/240');
  near(last.x, block.cannon.position.x, 1e-12, 'last sample x matches body');
  near(sensor.samples[sensor.samples.length - 2].t, 1 * h, 1e-12, '40 ms cadence begins at the first substep');
  console.log(`      samples t=${first.t.toFixed(9)} s, ..., ${last.t.toFixed(9)} s; body x=${block.cannon.position.x.toFixed(9)} m`);
});

check('photogate crossing time matches the post-step world time', () => {
  const world = createWorld({ g: 0, h: 1 / 240 });
  addSensor(world, { kind: 'photogate', x: 1, y: 0, z: 0, width: 2, height: 2 });
  const block = addBlock(world, { mass: 1, x: 0, y: 0.25, z: 0, v0: 2, azimuth: 0 });
  applyInitialVelocity(world, block);
  const h = 1 / 240;
  let crossing = null;
  for (let i = 0; i < Math.round(0.8 / h); i += 1) {
    stepWorld(world, h, { h });
    crossing = world.sensors[0].lastCrossing;
    if (crossing) break;
  }
  if (!crossing) throw new Error('photogate did not trigger');
  near(crossing.t, world.time, 1e-12, 'crossing timestamp equals current sim time');
  if (crossing.t <= 0.45 || crossing.t >= 0.55) throw new Error(`crossing time ${crossing.t} outside expected window`);
  console.log(`      crossing t=${crossing.t.toFixed(9)} s at x=${crossing.x.toFixed(6)} m (world.time=${world.time.toFixed(9)} s)`);
});

/* ---------------------- sensor targets and tables ------------------- */

check('motion sensor can be pinned to a chosen body and restarts its series', () => {
  const world = createWorld({ g: 0, h: 1 / 240 });
  const sensor = addSensor(world, { kind: 'motion', x: 0, y: 0, z: 0, range: 20, face: 1 });
  const nearBody = addBlock(world, { mass: 1, x: 2, y: 0.25, z: 0, v0: 0 });
  const farBody = addBlock(world, { mass: 2, x: 5, y: 0.25, z: 0, v0: 1, azimuth: 0 });
  applyInitialVelocity(world, farBody);
  const h = 1 / 240;
  for (let i = 0; i < 6; i += 1) stepWorld(world, h, { h });
  if (sensor.samples[0]?.bodyId !== nearBody.id) throw new Error('default target is not the nearest body in line of sight');
  if (!setSensorTarget(world, sensor, farBody.id)) throw new Error('setSensorTarget failed');
  if (sensor.samples.length !== 0) throw new Error('series did not reset on target change');
  const farStartX = farBody.cannon.position.x - farBody.cannon.velocity.x * world.time;
  stepWorld(world, h, { h });
  if (!sensor.samples.length) throw new Error('pinned target produced no samples');
  near(sensor.samples[0].t, world.time, 1e-12, 'first pinned sample time');
  near(sensor.samples[0].x, farBody.cannon.position.x, 1e-12, 'first pinned sample x');
  for (let i = 0; i < 20; i += 1) stepWorld(world, h, { h });
  if (sensor.samples.some((s) => s.bodyId !== farBody.id)) throw new Error('table mixed two bodies');
  const last = sensor.samples[sensor.samples.length - 1];
  near(last.x, farStartX + farBody.cannon.velocity.x * last.t, 1e-9, 'tracked x matches v t at its own timestamp');
  near(last.y, farBody.cannon.position.y, 1e-9, 'tracked target y');
  console.log(`      default ${nearBody.id}, pinned ${farBody.id}; ${sensor.samples.length} samples, last x=${last.x.toFixed(6)} m at t=${last.t.toFixed(6)} s`);
});

check('every logging sensor builds raw + summary tables and CSV headers', () => {
  const world = createWorld({ g: 0, h: 1 / 240 });
  const sensor = addSensor(world, { kind: 'motion', x: 0, y: 0, z: 0, range: 20, face: 1 });
  const block = addBlock(world, { mass: 1, x: 2, y: 0.25, z: 0, v0: 2, azimuth: 0 });
  applyInitialVelocity(world, block);
  advance(world, 0.5, 1 / 240);
  const motionTables = buildSensorTables(sensor);
  if (!motionTables?.raw?.rows.length || !motionTables?.summary?.rows.length) throw new Error('motion tables missing');
  for (const table of [motionTables.raw, motionTables.summary]) {
    const header = tableToCsv(table).split('\n')[0];
    if (!/[\u4e00-\u9fff]/.test(header) || !/[A-Za-z]{2,}/.test(header)) {
      throw new Error(`CSV header is not bilingual: ${header}`);
    }
  }
  const rawHeader = tableToCsv(motionTables.raw).split('\n')[0];
  if (!/Time/.test(rawHeader) || !/m\/s/.test(rawHeader)) throw new Error('motion CSV lacks English/units');

  const gateWorld = createWorld({ g: 0, h: 1 / 240 });
  const gate = addSensor(gateWorld, { kind: 'photogate', x: 1, y: 0, z: 0, width: 2, height: 2 });
  const runner = addBlock(gateWorld, { mass: 1, x: 0, y: 0.25, z: 0, v0: 2, azimuth: 0 });
  applyInitialVelocity(gateWorld, runner);
  advance(gateWorld, 1.0, 1 / 240);
  const gateTables = buildSensorTables(gate);
  if (!gateTables?.raw?.rows.length || gateTables.raw.rows.length !== gate.crossings.length) {
    throw new Error('photogate raw table does not match crossings');
  }
  if (gateTables.summary.rows.length !== gateTables.raw.rows.length) throw new Error('photogate interval summary missing');
  if (!(gateTables.summary.rows[0].dt >= 0)) throw new Error('photogate summary lacks Δt');

  const forceWorld = createWorld({ g: 9.8 });
  const a = addBlock(forceWorld, { mass: 1, x: -2, y: 1, z: 0 });
  const b = addBlock(forceWorld, { mass: 1, x: 2, y: 1, z: 0 });
  const meter = addLink(forceWorld, {
    a: { type: 'body', id: a.id },
    b: { type: 'body', id: b.id },
    k: 30,
    rest: 3,
    meter: true,
  });
  advance(forceWorld, 0.4, 1 / 240);
  const forceTables = buildSensorTables(meter);
  if (!meter.samples.length) throw new Error('force meter logged no samples');
  if (!forceTables?.raw?.rows.length || !forceTables?.summary?.rows.length) throw new Error('force tables missing');
  if (!/Force/.test(tableToCsv(forceTables.raw).split('\n')[0])) throw new Error('force CSV lacks English header');

  const bodyTables = buildSensorTables([{ t: 0, x: 0, v: 1, a: 0, e: 2 }, { t: 0.1, x: 0.1, v: 1, a: 0, e: 2 }]);
  if (!bodyTables?.raw?.rows.length || !bodyTables?.summary?.rows.length) throw new Error('body graph tables missing');

  console.log(`      motion ${motionTables.raw.rows.length} raw/${motionTables.summary.rows.length} summary, photogate ${gateTables.raw.rows.length}/${gateTables.summary.rows.length}, force ${forceTables.raw.rows.length}/${forceTables.summary.rows.length}, body ${bodyTables.raw.rows.length}/${bodyTables.summary.rows.length}`);
});

/* ---------------------- snap / attach matrix ------------------------ */

function makeMatrixTarget(world, kind) {
  if (kind === 'incline') return addSurface(world, { kind: 'incline', angleDeg: 20, length: 10, y: 1.5, width: 3 });
  if (kind === 'surface') return addSurface(world, { kind: 'surface', angleDeg: 0, length: 10, y: 1.0, width: 3 });
  if (kind === 'track') return addSurface(world, { kind: 'track', angleDeg: 0, length: 10, y: 1.0, width: 3 });
  if (kind === 'loop') return addLoop(world, { x: 0, y: 2.5, z: 0, radius: 1.8 });
  if (kind === 'hcircle') return addHCircle(world, { x: 0, y: 0.1, z: 0, radius: 2 });
  if (kind === 'turntable') return addTurntable(world, { x: 0, y: 0.62, z: 0, radius: 2 });
  if (kind === 'wedge') return addWedge(world, { x: 0, baseY: 0, z: 0, angle: 25, length: 3, width: 1.6 });
  if (kind === 'cart') return addCart(world, { x: 0, y: 1, z: 0 });
  if (kind === 'block') return addBlock(world, { x: 0, y: 1, z: 0 });
  if (kind === 'ball') return addBall(world, { x: 0, y: 1, z: 0 });
  if (kind === 'cylinder') return addCylinder(world, { x: 0, y: 1, z: 0 });
  if (kind === 'launcher') return addLauncher(world, { x: 0, y: 1, z: 0 });
  if (kind === 'photogate') return addSensor(world, { kind: 'photogate', x: 0, y: 1, z: 0 });
  if (kind === 'motion') return addSensor(world, { kind: 'motion', x: 0, y: 1, z: 0 });
  if (kind === 'barrier') return addBarrier(world, { kind: 'bumper', x: 0, y: 1, z: 0 });
  if (kind === 'pulley') return addPulley(world, { x: 0, y: 3, z: 0 });
  if (kind === 'pendulum') return addPendulum(world, { x: 0, y: 3, z: 0 });
  if (kind === 'fan') return addFan(world, { x: 0, y: 1, z: 0 });
  if (kind === 'oscillator') return addOscillator(world, { x: 0, y: 1.15, z: 0 });
  if (kind === 'torsion') return addTorsionPendulum(world, { x: 0, y: 1.9, z: 0 });
  if (kind === 'elevator') return addElevator(world, { x: 0, y: 0, z: 0 });
  if (kind === 'carriage') return addCarriage(world, { x: 0, y: 0, z: 0 });
  if (kind === 'angtable') return addAngularTable(world, { x: 0, y: 0.55, z: 0 });
  if (kind === 'rod') return addRod(world, { x: 0, y: 2.2, z: 0 });
  if (kind === 'orbit') return addOrbit(world, { x: 0, y: 1, z: 0, r: 5 });
  if (kind === 'tunnel') return addTunnel(world, { x: 0, y: 3.1, z: 0 });
  throw new Error(`unknown matrix target ${kind}`);
}

function matrixPoint(world, targetKind, target) {
  if (targetKind === 'incline' || targetKind === 'surface' || targetKind === 'track') {
    const p = surfaceTopPoint(target, 0, 0);
    return { x: p.x, y: p.y + 0.15, z: p.z };
  }
  if (targetKind === 'loop') return { x: target.x, y: target.y - target.radius, z: target.z };
  if (targetKind === 'hcircle') return { x: target.x + target.radius, y: target.y + 0.2, z: target.z };
  if (targetKind === 'turntable') return { x: target.x, y: tableTopY(target) + 0.2, z: target.z };
  if (targetKind === 'wedge') return { x: target.body.position.x, y: target.body.position.y + 0.25, z: target.body.position.z };
  if (['cart', 'block', 'ball', 'cylinder'].includes(targetKind)) {
    return { x: target.cannon.position.x, y: target.cannon.position.y + target.halfHeight + 0.25, z: target.cannon.position.z };
  }
  if (targetKind === 'launcher' || targetKind === 'photogate' || targetKind === 'motion') {
    return { x: target.x, y: target.y + (target.height || 0.8) + 0.25, z: target.z };
  }
  if (targetKind === 'barrier') return { x: target.x, y: target.y + target.height, z: target.z };
  if (targetKind === 'pulley') return { x: target.x, y: target.y + target.radius + 0.3, z: target.z };
  if (targetKind === 'pendulum') return { x: target.x, y: target.y, z: target.z };
  if (targetKind === 'fan') return { x: target.x || 0, y: target.y || 0, z: target.z || 0 };
  if (targetKind === 'oscillator' || targetKind === 'torsion' || targetKind === 'rod'
    || targetKind === 'orbit' || targetKind === 'tunnel') {
    return { x: target.x, y: target.y, z: target.z };
  }
  if (targetKind === 'elevator') return { x: target.x, y: target.y + target.height, z: target.z };
  if (targetKind === 'carriage') return { x: target.x, y: target.y + 0.42, z: target.z };
  if (targetKind === 'angtable') return { x: target.x, y: target.y + 0.07, z: target.z };
  return { x: 0, y: 1, z: 0 };
}

function matrixSource(world, kind, p) {
  const x = p.x + 0.32;
  const y = p.y + 0.42;
  const z = p.z + 0.18;
  if (kind === 'block') return addBlock(world, { x, y, z });
  if (kind === 'cart') return addCart(world, { x, y, z });
  if (kind === 'ball') return addBall(world, { x, y, z });
  if (kind === 'cylinder') return addCylinder(world, { x, y, z });
  if (kind === 'launcher') return addLauncher(world, { x, y, z });
  if (kind === 'photogate') return addSensor(world, { kind: 'photogate', x, y, z });
  if (kind === 'motion') return addSensor(world, { kind: 'motion', x, y, z });
  if (kind === 'barrier') return addBarrier(world, { kind: 'wall', x, y: y - 0.4, z });
  if (kind === 'fan') return addFan(world, { x, y, z });
  if (kind === 'pendulum') return addPendulum(world, { x, y, z });
  if (kind === 'wedge') return addWedge(world, { x, baseY: y - 0.3, z, angle: 20, length: 2.4, width: 1.2 });
  if (kind === 'pulley') return addPulley(world, { x, y, z });
  if (kind === 'oscillator') return addOscillator(world, { x, y, z });
  if (kind === 'torsion') return addTorsionPendulum(world, { x, y, z });
  if (kind === 'elevator') return addElevator(world, { x, y: y - 0.3, z });
  if (kind === 'carriage') return addCarriage(world, { x, y: y - 0.3, z });
  if (kind === 'angtable') return addAngularTable(world, { x, y: y - 0.3, z });
  if (kind === 'rod') return addRod(world, { x, y, z });
  if (kind === 'orbit') return addOrbit(world, { x, y, z, r: 4.5 });
  if (kind === 'tunnel') return addTunnel(world, { x, y, z });
  if (kind === 'incline') return addSurface(world, { kind: 'incline', x, y, z, length: 3, width: 1.2, angleDeg: 15 });
  if (kind === 'surface') return addSurface(world, { kind: 'surface', x, y, z, length: 3, width: 1.2, angleDeg: 0 });
  if (kind === 'track') return addSurface(world, { kind: 'track', x, y, z, length: 3, width: 1.2, angleDeg: 0 });
  if (kind === 'loop') return addLoop(world, { x, y, z, radius: 1.1 });
  if (kind === 'turntable') return addTurntable(world, { x, y, z, radius: 1.1 });
  if (kind === 'hcircle') return addHCircle(world, { x, y, z, radius: 1.2 });
  if (kind === 'spring' || kind === 'meter' || kind === 'nonlinear') {
    const body = addBlock(world, { x: x - 1.2, y: 0.3, z });
    return addLink(world, {
      a: { type: 'body', id: body.id },
      b: addAnchor(x, y + 0.25, z),
      k: 24,
      beta: kind === 'nonlinear' ? 8 : 0,
      rest: 1,
      meter: kind === 'meter',
    });
  }
  throw new Error(`unknown matrix source ${kind}`);
}

function entityWorldPoint(entity) {
  if (!entity) return null;
  if (entity.type === 'body') return { x: entity.cannon.position.x, y: entity.cannon.position.y, z: entity.cannon.position.z };
  if (entity.type === 'surface' || entity.type === 'wedge' || entity.type === 'barrier') {
    return { x: entity.body.position.x, y: entity.body.position.y, z: entity.body.position.z };
  }
  if (entity.type === 'link') {
    const end = entity.b?.type === 'surface' ? entity.b : entity.a;
    if (end?.type === 'surface') {
      const surface = end.id ? null : null;
      void surface;
    }
    return { x: entity.x || 0, y: entity.y || 0, z: entity.z || 0 };
  }
  return { x: entity.x || 0, y: entity.y || 0, z: entity.z || 0 };
}

function shiftMatrixTarget(world, target, dx) {
  if (target.type === 'body') {
    target.cannon.position.x += dx;
  } else if (target.type === 'surface' || target.type === 'wedge' || target.type === 'barrier') {
    target.body.position.x += dx;
    if (Number.isFinite(target.x)) target.x += dx;
  } else if (target.type === 'turntable') {
    target.body.position.x += dx;
    target.x += dx;
  } else if (Number.isFinite(target.x)) {
    target.x += dx;
  }
}

function matrixSnap(kind, targetKind) {
  const world = createWorld({ g: 0 });
  const target = makeMatrixTarget(world, targetKind);
  const point = matrixPoint(world, targetKind, target);
  const source = matrixSource(world, kind, point);
  const isLink = kind === 'spring' || kind === 'meter' || kind === 'nonlinear';
  const linkPoint = () => {
    const p0 = endpointPosition(world, source.b);
    return p0 ? { x: p0.x, y: p0.y, z: p0.z } : null;
  };
  const before = isLink ? linkPoint() : entityWorldPoint(source);
  const hit = snapEntityToNearest(world, source, { maxDistance: 5 });
  if (!hit || hit.type === 'floor') return { ok: false, reason: 'no apparatus target' };
  const mount = isLink ? (source.b?.type === 'surface' ? source.b : null) : entityMount(source);
  if (!mount) return { ok: false, reason: 'no mount/attachment' };
  const after = isLink ? linkPoint() : entityWorldPoint(source);
  const moved = Math.hypot(after.x - before.x, after.y - before.y, after.z - before.z) > 1e-6;
  if (!moved) return { ok: false, reason: 'world position did not change to the snap pose' };
  shiftMatrixTarget(world, target, 0.75);
  updateMountedApparatus(world);
  if (!isLink) {
    for (const body of world.bodies) {
      if (body.attachment?.type === 'surface') repositionSurfaceBody(world, body);
    }
  }
  const followed = isLink ? linkPoint() : entityWorldPoint(source);
  const followOk = Math.hypot(followed.x - after.x, followed.y - after.y, followed.z - after.z) > 1e-6;
  if (!followOk) return { ok: false, reason: 'mounted object did not follow the carrier' };
  return { ok: true, hit: hit.type, mount: mount.type || mount.targetType || 'surface' };
}

check('snap/attach matrix: every documented apparatus pair attaches, moves and follows', () => {
  const rows = [
    ['block', 'wedge', 'block seats on the wedge face'],
    ['cart', 'wedge', 'cart seats on the wedge face'],
    ['ball', 'surface', 'ball rides the flat surface'],
    ['cylinder', 'track', 'cylinder rides the track'],
    ['block', 'cart', 'block stacks on the cart deck'],
    ['cart', 'cart', 'cart stacks on a cart deck'],
    ['ball', 'block', 'ball docks on a block top'],
    ['cylinder', 'ball', 'cylinder docks on a ball top'],
    ['launcher', 'cart', 'launcher clamps to the cart deck'],
    ['launcher', 'loop', 'launcher mounts on the loop rim'],
    ['launcher', 'launcher', 'launcher stacks on a launcher'],
    ['photogate', 'loop', 'photogate mounts on the loop rim'],
    ['photogate', 'motion', 'photogate clamps onto a motion sensor'],
    ['motion', 'hcircle', 'motion sensor mounts on the circle rim'],
    ['barrier', 'cart', 'bumper mounts on the cart face'],
    ['barrier', 'incline', 'wall mounts on the incline end'],
    ['pulley', 'surface', 'pulley block mounts on the table'],
    ['pendulum', 'cart', 'pendulum pivot hangs from the cart'],
    ['wedge', 'cart', 'wedge sits on the cart deck'],
    ['fan', 'incline', 'fan mounts on the incline face'],
    ['fan', 'cart', 'fan clamps to the cart'],
    ['spring', 'surface', 'spring endpoint pins to the table'],
    ['meter', 'surface', 'force-meter endpoint pins to the table'],
    ['nonlinear', 'surface', 'nonlinear spring endpoint pins to the table'],
    ['oscillator', 'elevator', 'oscillator hangs from the elevator ceiling'],
    ['torsion', 'oscillator', 'torsion pendulum docks on an oscillator stand'],
    ['elevator', 'carriage', 'elevator sits on the carriage floor'],
    ['carriage', 'surface', 'carriage docks on the table'],
    ['angtable', 'cart', 'angular table mounts on the cart'],
    ['rod', 'cart', 'rod pivot mounts on the cart'],
    ['orbit', 'orbit', 'orbit attractors share one stand'],
    ['orbit', 'tunnel', 'orbit docks on the tunnel stand'],
    ['tunnel', 'torsion', 'tunnel docks on the torsion stand'],
    ['incline', 'cart', 'incline table mounts on the cart'],
    ['surface', 'cart', 'surface table mounts on the cart'],
    ['track', 'cart', 'track mounts on the cart'],
    ['loop', 'surface', 'loop stand mounts on the table'],
    ['turntable', 'surface', 'turntable mounts on the table'],
    ['hcircle', 'surface', 'horizontal circle mounts on the table'],
  ];
  let failures = 0;
  for (const [source, target, rule] of rows) {
    let out;
    try {
      out = matrixSnap(source, target);
    } catch (err) {
      out = { ok: false, reason: err.message };
    }
    if (!out.ok) failures += 1;
    console.log(`      ${out.ok ? 'ok  ' : 'FAIL'} ${source} -> ${target}: ${out.ok ? `${out.hit} (${out.mount})` : out.reason} · ${rule}`);
  }
  const covered = new Set(rows.map((r) => r[0]));
  for (const type of ['incline', 'surface', 'track', 'loop', 'turntable', 'hcircle', 'block', 'cart',
    'ball', 'cylinder', 'launcher', 'pulley', 'barrier', 'pendulum', 'wedge', 'photogate',
    'motion', 'fan', 'spring', 'meter', 'nonlinear', 'oscillator', 'torsion', 'elevator',
    'carriage', 'angtable', 'rod', 'orbit', 'tunnel']) {
    if (!covered.has(type)) {
      failures += 1;
      console.log(`      FAIL missing source coverage: ${type}`);
    }
  }
  if (failures) throw new Error(`${failures} documented snap pairs failed`);
  console.log(`      matrix: ${rows.length} documented pairs attach, move and follow; ${covered.size} source types covered; no stay-free class`);
});

check('self-snap is refused and a serialized mount survives reload', () => {
  const world = createWorld({ g: 0 });
  const cart = addCart(world, { x: 0, y: 1, z: 0 });
  const launcher = addLauncher(world, { x: 0, y: 1.4, z: 0 });
  if (mountApparatus(world, launcher, launcher)) throw new Error('a launcher snapped onto itself');
  if (!snapEntityToNearest(world, launcher, { maxDistance: 2 })) throw new Error('launcher did not dock on cart');
  const data = serializeScene(world);
  const reload = createWorld({ g: 0 });
  deserializeScene(reload, data);
  const reloaded = reload.launchers[0];
  if (!reloaded.mount || reloaded.mount.id !== cart.id) throw new Error('mount missing after reload');
  const reloadedCart = reload.bodies[0];
  const x0 = reloaded.x;
  reloadedCart.cannon.position.x += 1.25;
  updateMountedApparatus(reload);
  if (Math.abs(reloaded.x - (x0 + 1.25)) > 1e-6) throw new Error('reloaded launcher did not follow the cart');
  console.log(`      self-snap refused; serialized mount survives reload and follows +1.25 m`);
});

check('launcher rigidly mounted on a moving cart adds the cart velocity at fire', () => {
  const world = createWorld({ g: 0 });
  const cart = addCart(world, { x: 0, y: 1, z: 0, mass: 2 });
  const launcher = addLauncher(world, { x: 0, y: 1.4, z: 0, speed: 5, angle: 0, azimuth: 0 });
  if (!snapApparatusToNearest(world, launcher, { maxDistance: 2 })) throw new Error('launcher did not mount on cart');
  if (launcher.mount?.type !== 'body' || launcher.mount.id !== cart.id) throw new Error('mount is not the cart');
  cart.cannon.velocity.set(2, 0, 0);
  const flat = fireLauncher(world, launcher);
  near(flat.cannon.velocity.x, 7, 1e-9, 'v_ground x = v_cart + v_launch');
  near(flat.cannon.velocity.y, 0, 1e-9, 'flat vy');
  near(flat.cannon.velocity.z, 0, 1e-9, 'flat vz');

  const verticalWorld = createWorld({ g: 0 });
  const cart2 = addCart(verticalWorld, { x: 0, y: 1, z: 0 });
  const vertical = addLauncher(verticalWorld, { x: 0, y: 1.4, z: 0, speed: 5, angle: 90, azimuth: 0 });
  snapApparatusToNearest(verticalWorld, vertical, { maxDistance: 2 });
  cart2.cannon.velocity.set(2, 0, 0);
  const up = fireLauncher(verticalWorld, vertical);
  near(up.cannon.velocity.x, 2, 1e-9, 'vertical vx = cart velocity');
  near(up.cannon.velocity.y, 5, 1e-9, 'vertical vy = launch speed');

  // The mount follows the carrier while the simulation runs, so the muzzle
  // and the added velocity use the live cart state, not its initial pose.
  const moving = createWorld({ g: 0 });
  const carrier = addCart(moving, { x: 0, y: 1, z: 0 });
  const mounted = addLauncher(moving, { x: 0, y: 1.4, z: 0, speed: 3, angle: 0, azimuth: 0 });
  snapApparatusToNearest(moving, mounted, { maxDistance: 2 });
  carrier.cannon.velocity.set(2, 0, 0);
  const h = 1 / 240;
  for (let i = 0; i < 24; i += 1) stepWorld(moving, h, { h });
  updateMountedApparatus(moving);
  near(mounted.x, carrier.cannon.position.x, 1e-9, 'mounted launcher x follows cart');
  near(mounted.y, carrier.cannon.position.y + carrier.halfHeight + 0.02, 1e-9, 'mounted launcher y follows cart top');
  const composed = fireLauncher(moving, mounted);
  near(composed.cannon.velocity.x, carrier.cannon.velocity.x + 3, 0.02, 'live cart velocity added');
  console.log(`      flat: v=(7,0,0), vertical: v=(2,5,0), live cart x=${carrier.cannon.position.x.toFixed(3)} m -> projectile vx=${composed.cannon.velocity.x.toFixed(3)} m/s`);
});

if (pendingChecks.length) await Promise.all(pendingChecks);
console.log(results.join('\n'));
console.log(`\n${passed} passed, ${failed} failed (mechanics)`);

// The E&M analytic suite is a sibling file so each domain stays readable.
const emTest = fileURLToPath(new URL('./test-physics-lab-em.mjs', import.meta.url));
const em = spawnSync(process.execPath, [emTest], { stdio: 'inherit' });
const presetTest = fileURLToPath(new URL('./test-physics-lab-presets.mjs', import.meta.url));
const presets = spawnSync(process.execPath, [presetTest], { stdio: 'inherit' });
if (failed || em.status !== 0 || presets.status !== 0) process.exit(1);
