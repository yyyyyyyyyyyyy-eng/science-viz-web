#!/usr/bin/env node
/**
 * Apparatus regression checks for 物理实验室 · Physics Lab.
 * Run directly: node scripts/test-physics-lab-apparatus.mjs
 *
 * Covers the ballistic pendulum and the balance lever end to end:
 * analytic physics, catch semantics, serialisation, reset, the mount
 * pipeline, and the view wiring for both new apparatus.
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import {
  SCENE_VERSION,
  addBallistic,
  addCart,
  addLever,
  addLeverHanger,
  addProjectile,
  addSurface,
  allMountableEntities,
  attachBodyToSurface,
  ballisticBob,
  ballisticEffectiveMass,
  ballisticReadout,
  clearWorld,
  createWorld,
  deserializeScene,
  detachEntity,
  dockEntity,
  fireLauncher,
  addLauncher,
  findSceneEntity,
  floorRestHeight,
  getBallistic,
  getLever,
  getLauncher,
  leverEquilibriumAngle,
  leverInertia,
  leverReadout,
  leverTorque,
  migrateScene,
  removeLeverHanger,
  resetWorld,
  captureInitial,
  serializeScene,
  setLeverHanger,
  snapEntityToFloorGrid,
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

function near(actual, expected, tol, label) {
  if (!Number.isFinite(actual) || !Number.isFinite(expected) || Math.abs(actual - expected) > tol) {
    throw new Error(`${label}: expected ${expected} ± ${tol}, got ${actual}`);
  }
}

function rel(actual, expected, tol, label) {
  const err = Math.abs(actual - expected);
  const scale = Math.max(1e-12, Math.abs(expected));
  if (!Number.isFinite(actual) || err / scale > tol) {
    throw new Error(`${label}: expected ${expected} (${(tol * 100).toFixed(2)}%), got ${actual}`);
  }
}

function advance(world, seconds, h = 1 / 480) {
  const n = Math.max(1, Math.round(seconds / h));
  for (let i = 0; i < n; i += 1) stepWorld(world, h, { h });
}

/* ------------------------- ballistic pendulum ------------------------- */

check('ballistic: bob hangs below the pivot and reads its weight at rest', () => {
  const world = createWorld({ g: 9.8 });
  const ballistic = addBallistic(world, {
    id: 'catcher', x: 1.6, y: 2.9, z: 0.5, length: 1.2, bobMass: 0.6, radius: 0.22,
  });
  const bob = ballisticBob(ballistic);
  near(bob.x, 1.6, 1e-12, 'bob x');
  near(bob.y, 2.9 - 1.2, 1e-12, 'bob y below the pivot');
  near(bob.z, 0.5, 1e-12, 'bob z');
  advance(world, 0.05);
  const readout = ballisticReadout(world, ballistic);
  near(readout.tension, 0.6 * 9.8, 0.05, 'rest tension = Mg');
  near(ballisticEffectiveMass(ballistic), 0.6, 1e-12, 'empty catcher mass');
});

check('ballistic: catch conserves angular momentum about the pivot', () => {
  const world = createWorld({ g: 9.8 });
  addBallistic(world, { id: 'catcher', x: 0, y: 3, z: 0, length: 1, bobMass: 0.5, radius: 0.2 });
  // Ball starts 0.6 m from the bob at bob height: the flight drop stays
  // well inside the catch radius, and the perpendicular speed is exactly vx.
  addProjectile(world, { x: -0.6, y: 2, z: 0, vx: 5, vy: 0, vz: 0, mass: 0.1, radius: 0.08 });
  advance(world, 0.4);
  const ballistic = getBallistic(world, 'catcher');
  if (ballistic.catches !== 1) throw new Error(`expected one catch, got ${ballistic.catches}`);
  const omegaTheory = (0.1 * 5) / ((0.5 + 0.1) * 1);
  near(ballistic.caught.omega0, omegaTheory, 1e-9, 'ω after catch = mvL ⁄ (M+m)L²');
  near(ballistic.caught.speed, 5, 1e-9, 'recorded perpendicular speed');
  const event = world.events.find((e) => e.type === 'catch');
  if (!event) throw new Error('no catch event was logged');
  if (event.ballisticId !== 'catcher' || event.mass !== 0.1) throw new Error('catch event fields are wrong');
  if (world.bodies.length !== 0) throw new Error('the projectile was not removed from the world');
});

check('ballistic: swing-up conserves energy and infers the launch speed', () => {
  const world = createWorld({ g: 9.8 });
  addBallistic(world, { id: 'catcher', x: 0, y: 3, z: 0, length: 1, bobMass: 0.5, radius: 0.2 });
  addProjectile(world, { x: -0.6, y: 2, z: 0, vx: 5, vy: 0, vz: 0, mass: 0.1, radius: 0.08 });
  advance(world, 2.5);
  const readout = ballisticReadout(world, getBallistic(world, 'catcher'));
  rel(readout.inferredSpeed, 5, 0.002, 'inferred speed from the rise angle');
  rel(readout.riseHeight, (0.1 * 0.1 * 5 * 5) / (2 * 0.6 * 0.6 * 9.8), 0.002, 'rise = m²v² ⁄ 2(M+m)²g');
  rel(readout.keLossFraction, 0.5 / 0.6, 0.005, 'KE loss fraction = M ⁄ (M+m)');
  near(readout.effectiveMass, 0.6, 1e-9, 'loaded catcher mass');
});

check('ballistic: a second projectile is ignored and lands normally', () => {
  const world = createWorld({ g: 9.8 });
  addBallistic(world, { id: 'catcher', x: 0, y: 3, z: 0, length: 1, bobMass: 0.5, radius: 0.2, damping: 2 });
  // Tower launcher on the floor: muzzle sits at bob height.
  addLauncher(world, {
    id: 'gun', name: '弹簧枪 · Spring gun', x: -1.4, y: 0, z: 0,
    angle: 0, speed: 5, height: 2.0, azimuth: 0, mass: 0.1, radius: 0.08,
  });
  const gun = getLauncher(world, 'gun');
  fireLauncher(world, gun);
  advance(world, 5.0);
  if (getBallistic(world, 'catcher').catches !== 1) throw new Error('first shot was never caught');
  // Damping has settled the loaded bob; a second shot flies straight through.
  fireLauncher(world, gun);
  advance(world, 1.5);
  const ballistic = getBallistic(world, 'catcher');
  if (ballistic.catches !== 1) throw new Error(`catcher took a second ball (${ballistic.catches})`);
  const landing = world.events.find((e) => e.type === 'landing');
  if (!landing) throw new Error('the second projectile never landed');
});

check('ballistic: seated bodies are never caught', () => {
  const world = createWorld({ g: 9.8 });
  addBallistic(world, { id: 'catcher', x: 0, y: 3, z: 0, length: 1, bobMass: 0.5, radius: 0.2 });
  const surf = addSurface(world, {
    id: 'shelf', kind: 'track', name: '轨道', x: 0, y: 2, z: 0, angleDeg: 0,
    length: 6, width: 1.2, thickness: 0.12, muS: 0, muK: 0,
  });
  const cart = addCart(world, { id: 'cart', name: '小车', mass: 1, radius: 0.3, x: 0, y: 2, z: 0 });
  attachBodyToSurface(world, cart, 'shelf', { localX: 0, localZ: 0 });
  cart.v0 = 3; cart.azimuth = 0;
  advance(world, 0.3);
  const ballistic = getBallistic(world, 'catcher');
  if (ballistic.catches !== 0) throw new Error('a seated cart was absorbed by the catcher');
  if (!world.bodies.some((b) => b.id === 'cart')) throw new Error('the cart vanished');
});

check('ballistic: reset restores the empty catcher after a catch', () => {
  const world = createWorld({ g: 9.8 });
  addBallistic(world, { id: 'catcher', x: 0, y: 3, z: 0, length: 1, bobMass: 0.5, radius: 0.2 });
  captureInitial(world);
  addProjectile(world, { x: -0.6, y: 2, z: 0, vx: 5, vy: 0, vz: 0, mass: 0.1, radius: 0.08 });
  advance(world, 1.0);
  if (getBallistic(world, 'catcher').catches !== 1) throw new Error('catch never happened');
  resetWorld(world);
  const readout = ballisticReadout(world, getBallistic(world, 'catcher'));
  if (readout.catches !== 0) throw new Error(`reset kept the catch (${readout.catches})`);
  near(readout.maxAngleDeg, 0, 1e-9, 'reset clears the recorded maximum');
});

check('ballistic: damping bleeds swing energy', () => {
  const world = createWorld({ g: 9.8 });
  addBallistic(world, {
    id: 'catcher', x: 0, y: 3, z: 0, length: 1, bobMass: 0.5, radius: 0.2, damping: 1.5,
  });
  addProjectile(world, { x: -0.6, y: 2, z: 0, vx: 5, vy: 0, vz: 0, mass: 0.1, radius: 0.08 });
  advance(world, 4.0);
  const ballistic = getBallistic(world, 'catcher');
  const decayed = Math.abs(ballistic.theta) < ballistic.maxTheta * (1 - 1e-6);
  if (!decayed) throw new Error('damped swing did not decay below its maximum');
});

/* ----------------------------- balance lever ----------------------------- */

check('lever: balanced hangers released from a tilt settle level', () => {
  const world = createWorld({ g: 9.8 });
  addLever(world, {
    id: 'lever', x: 0, y: 1.2, z: 0, arm: 1.2, beamMass: 2.4, beamDrop: 0.18,
    damping: 4.5, hang: 0.4, theta0: 12,
    hangers: [{ d: -0.8, mass: 2 }, { d: 0.8, mass: 1 }, { d: 0.4, mass: 2 }],
  });
  advance(world, 8.0);
  const lever = getLever(world, 'lever');
  const readout = leverReadout(world, lever);
  if (Math.abs(lever.theta) > 0.006) throw new Error(`beam did not settle: ${(lever.theta * 180 / Math.PI).toFixed(3)}°`);
  near(readout.leftTorque, readout.rightTorque, 0.05, 'left torque equals right torque');
  near(readout.netTorque, 0, 0.05, 'net torque vanishes at rest');
  if (!readout.balanced) throw new Error('readout did not flag the balanced loads');
});

check('lever: unbalanced hangers rest at atan(Σmd ⁄ Mh)', () => {
  const world = createWorld({ g: 9.8 });
  addLever(world, {
    id: 'lever', x: 0, y: 1.2, z: 0, arm: 1.2, beamMass: 3, beamDrop: 0.3,
    damping: 6, hang: 0.4, theta0: 15,
    hangers: [{ d: -0.9, mass: 2 }, { d: 0.6, mass: 1 }],
  });
  // Σ m d = −1.8 + 0.6 = −1.2 → left heavy → negative equilibrium angle.
  advance(world, 12.0);
  const lever = getLever(world, 'lever');
  const expected = leverEquilibriumAngle(lever) * 180 / Math.PI;
  near((lever.theta * 180) / Math.PI, expected, 0.15, 'settles at the predicted rest angle');
  near(leverTorque(world, lever), 0, 0.05, 'torque balances at rest');
  const readout = leverReadout(world, lever);
  if (readout.balanced) throw new Error('unbalanced loads were flagged as balanced');
  near(readout.equilibriumDeg, expected, 1e-9, 'readout rest angle matches the formula');
});

check('lever: inertia stays positive across the tilt range', () => {
  const world = createWorld({ g: 9.8 });
  const lever = addLever(world, {
    id: 'lever', x: 0, y: 1.2, z: 0, hangers: [{ d: -1.2, mass: 3 }, { d: 1.2, mass: 0.5 }],
  });
  for (const deg of [-85, -30, 0, 30, 85]) {
    const value = leverInertia(lever, (deg * Math.PI) / 180);
    if (!(value > 0)) throw new Error(`I(${deg}°) = ${value}`);
  }
});

check('lever: hanger editing clamps distance and mass, caps the count', () => {
  const world = createWorld({ g: 9.8 });
  const lever = addLever(world, {
    id: 'lever', x: 0, y: 1.2, z: 0, arm: 1.0, hangers: [{ d: -0.5, mass: 1 }],
  });
  setLeverHanger(world, lever, 0, { d: 3.5, mass: 0 });
  near(lever.hangers[0].d, 1.0, 1e-12, 'distance clamped to the arm');
  near(lever.hangers[0].mass, 0.01, 1e-12, 'mass clamped to the 10 g floor');
  for (let i = 0; i < 6; i += 1) addLeverHanger(world, lever, { d: 0.4, mass: 0.5 });
  if (lever.hangers.length > 6) throw new Error(`hanger cap broken: ${lever.hangers.length}`);
  if (addLeverHanger(world, lever, { d: 0.4 }) !== null) throw new Error('seventh hanger was accepted');
  removeLeverHanger(world, lever, 5);
  if (removeLeverHanger(world, lever, 99)) throw new Error('out-of-range removal returned true');
  if (setLeverHanger(world, lever, 99, { d: 0.5 }) !== null) throw new Error('out-of-range edit returned an entry');
});

check('lever: undamped balanced beam oscillates instead of drifting', () => {
  const world = createWorld({ g: 9.8 });
  addLever(world, {
    id: 'lever', x: 0, y: 1.2, z: 0, arm: 1.2, beamMass: 2.4, beamDrop: 0.18,
    damping: 0, hang: 0.4, theta0: 10,
    hangers: [{ d: -0.8, mass: 2 }, { d: 0.8, mass: 1 }, { d: 0.4, mass: 2 }],
  });
  const lever = getLever(world, 'lever');
  let crossed = false;
  let peak = 0;
  const h = 1 / 480;
  for (let i = 0; i < 480 * 4; i += 1) {
    stepWorld(world, h, { h });
    if (lever.theta < 0) crossed = true;
    peak = Math.max(peak, Math.abs(lever.theta));
  }
  if (!crossed) throw new Error('undamped beam never swung past level');
  rel(peak, (10 * Math.PI) / 180, 0.02, 'swing amplitude is preserved without damping');
});

/* ---------------------- scene and mount plumbing ---------------------- */

check('scene: new apparatus serialise, reload and keep their settings', () => {
  const world = createWorld({ g: 9.8 });
  addBallistic(world, {
    id: 'catcher', x: 1.6, y: 2.9, z: 0, length: 1.2, bobMass: 0.6, radius: 0.22, damping: 0.3,
  });
  addLever(world, {
    id: 'lever', x: -2, y: 1.2, z: 0, arm: 1.0, beamMass: 3, beamDrop: 0.25,
    damping: 2, hang: 0.35, theta0: 5, hangers: [{ d: -0.6, mass: 1.5 }, { d: 0.3, mass: 3 }],
  });
  const data = serializeScene(world);
  if (data.version !== SCENE_VERSION) throw new Error(`schema version ${data.version}`);
  if (data.ballistics.length !== 1 || data.levers.length !== 1) throw new Error('apparatus missing from the scene');
  const reload = createWorld({ g: 9.8 });
  if (!deserializeScene(reload, data)) throw new Error('deserializeScene returned false');
  const ballistic = getBallistic(reload, 'catcher');
  const lever = getLever(reload, 'lever');
  near(ballistic.length, 1.2, 1e-12, 'ballistic length survives reload');
  near(ballistic.damping, 0.3, 1e-12, 'ballistic damping survives reload');
  near(lever.beamDrop, 0.25, 1e-12, 'beam drop survives reload');
  if (lever.hangers.length !== 2) throw new Error('hangers lost on reload');
  near(lever.hangers[1].d, 0.3, 1e-12, 'hanger distance survives reload');
  near(lever.theta, 5 * (Math.PI / 180), 1e-12, 'initial tilt restored');
});

check('scene: a live caught state reloads at runtime', () => {
  const world = createWorld({ g: 9.8 });
  addBallistic(world, { id: 'catcher', x: 0, y: 3, z: 0, length: 1, bobMass: 0.5, radius: 0.2 });
  advance(world, 0.02);
  addProjectile(world, { x: -0.6, y: 2, z: 0, vx: 5, vy: 0, vz: 0, mass: 0.1, radius: 0.08 });
  advance(world, 0.4);
  const data = serializeScene(world, { runtime: true });
  const reload = createWorld({ g: 9.8 });
  deserializeScene(reload, data, { runtime: true });
  const ballistic = getBallistic(reload, 'catcher');
  if (ballistic.catches !== 1) throw new Error('runtime reload dropped the catch');
  near(ballistic.caught.mass, 0.1, 1e-12, 'caught mass survives the runtime reload');
  if (!(ballistic.maxTheta > 0)) throw new Error('runtime reload lost the swing state');
});

check('scene: v3 scenes migrate with empty new apparatus arrays', () => {
  const legacy = {
    version: 3,
    g: 9.8,
    h: 1 / 240,
    surfaces: [],
    loops: [], turntables: [], hcircles: [], launchers: [], pulleys: [],
    barriers: [], pendulums: [], wedges: [], sensors: [], fans: [], oscillators: [],
    torsionPendulums: [], elevators: [], carriages: [], angularTables: [], rods: [],
    orbits: [], tunnels: [], bodies: [], links: [],
  };
  const migrated = migrateScene(legacy);
  if (!migrated) throw new Error('v3 scene was rejected');
  if (!Array.isArray(migrated.ballistics) || !Array.isArray(migrated.levers)) {
    throw new Error('new arrays were not normalised');
  }
  if (migrated.version !== SCENE_VERSION) throw new Error(`migrated version ${migrated.version}`);
  const world = createWorld({ g: 9.8 });
  if (!deserializeScene(world, legacy)) throw new Error('v3 scene failed to load');
  if (world.ballistics.length || world.levers.length) throw new Error('legacy scene grew phantom apparatus');
});

check('plumbing: new apparatus join the entity pipeline', () => {
  const world = createWorld({ g: 9.8 });
  const ballistic = addBallistic(world, { id: 'catcher', x: 0, y: 3, z: 0 });
  const lever = addLever(world, { id: 'lever', x: 0, y: 1.2, z: 0 });
  if (findSceneEntity(world, 'ballisticPendulum', 'catcher') !== ballistic) throw new Error('findSceneEntity missed the catcher');
  if (findSceneEntity(world, 'lever', 'lever') !== lever) throw new Error('findSceneEntity missed the lever');
  const mountable = allMountableEntities(world);
  if (!mountable.includes(ballistic)) throw new Error('catcher not mountable');
  if (!mountable.includes(lever)) throw new Error('lever not mountable');
  if (!(floorRestHeight(ballistic) >= 0.6 * ballistic.length)) throw new Error('catcher floor height too low');
  near(floorRestHeight(lever), 0.45, 1e-12, 'lever floor height');
  const snapped = snapEntityToFloorGrid(world, lever, { x: 1.37, z: -0.44, gridStep: 0.1 });
  near(lever.x, 1.4, 1e-9, 'lever x snapped to the grid');
  near(lever.z, -0.4, 1e-9, 'lever z snapped to the grid');
  near(lever.y, 0.45, 1e-12, 'lever rests on the floor');
  near(snapped.x, 1.4, 1e-9, 'snap result x');
});

check('plumbing: lever docks onto a cart and detaches cleanly', () => {
  const world = createWorld({ g: 9.8 });
  const cart = addCart(world, { id: 'cart', name: '小车', mass: 1, radius: 0.3, x: 0, y: 0.32, z: 0 });
  const lever = addLever(world, { id: 'lever', x: -3, y: 1.2, z: 0 });
  const ok = dockEntity(world, lever, { type: 'body', id: 'cart' });
  if (!ok) throw new Error('dockEntity refused the lever');
  if (!lever.mount || lever.mount.id !== 'cart') throw new Error('mount was not recorded');
  advance(world, 0.02);
  if (Math.abs(lever.x - cart.cannon.position.x) > 0.4) throw new Error('lever did not follow the cart');
  if (!detachEntity(world, lever)) throw new Error('detachEntity found nothing to clear');
  if (lever.mount) throw new Error('mount survived detach');
});

check('plumbing: clearWorld disposes the new apparatus', () => {
  const world = createWorld({ g: 9.8 });
  addBallistic(world, { id: 'catcher', x: 0, y: 3, z: 0 });
  addLever(world, { id: 'lever', x: 0, y: 1.2, z: 0 });
  clearWorld(world);
  if (world.ballistics.length || world.levers.length) throw new Error('arrays were not emptied');
});

/* ------------------------- view wiring (source) ------------------------- */

const viewSource = readFileSync(
  fileURLToPath(new URL('../modules/physics/lab/view.js', import.meta.url)),
  'utf8',
);

function expectIn(text, needle, label) {
  if (!text.includes(needle)) throw new Error(`${label}: missing ${needle}`);
}

check('view: both new apparatus are drawn, signed and animated', () => {
  expectIn(viewSource, "case 'ballisticPendulum':", 'signatureOf branch');
  expectIn(viewSource, "case 'lever':", 'signatureOf branch');
  expectIn(viewSource, 'makeBallistic(entity)', 'builder dispatch');
  expectIn(viewSource, 'makeLever(entity)', 'builder dispatch');
  expectIn(viewSource, 'function makeBallistic(entity) {', 'builder body');
  expectIn(viewSource, 'function makeLever(entity) {', 'builder body');
  expectIn(viewSource, '...world.ballistics,', 'sync entity list');
  expectIn(viewSource, '...world.levers,', 'sync entity list');
  expectIn(viewSource, "entity.type === 'ballisticPendulum'", 'sync update branch');
  expectIn(viewSource, "entity.type === 'lever'", 'sync update branch');
  expectIn(viewSource, 'ballisticBob(entity)', 'bob position uses the physics model');
  expectIn(viewSource, 'visual.caught.visible = !!entity.caught;', 'embedded ball visibility');
  expectIn(viewSource, 'visual.beamGroup.rotation.z = entity.theta;', 'beam follows the tilt');
});

/* ------------------------------ summary ------------------------------ */

console.log('\n' + results.join('\n'));
console.log(`\n${passed} passed, ${failed} failed (lab apparatus)`);
if (failed) process.exit(1);
