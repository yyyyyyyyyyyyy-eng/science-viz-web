#!/usr/bin/env node
/**
 * Force-sensor and multi-target regression checks for 物理实验室 · Physics Lab.
 * Run directly: node scripts/test-physics-lab-force-sensor.mjs
 *
 * Physics contracts run for real, headless, against physics.mjs:
 *   - honest force decomposition: static ground G/N, sliding friction
 *     direction, free fall, spring, pulley rope tension;
 *   - multi-target tracking: keyed histories, launcher lifecycle (loaded →
 *     fire → reset → refire, including a cart-mounted launcher), removing a
 *     target never disturbs the others, per-target tables;
 *   - backwards compatibility: v4 single-target motion scenes and the
 *     legacy force-meter link.
 * UI contracts are asserted against the index.js / lab.css / view.js sources
 * in the same style as test-physics-lab-index-hooks.mjs.
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import {
  SCENE_VERSION,
  SENSOR_TARGET_CAP,
  addBall,
  addBlock,
  addCart,
  addLauncher,
  addLink,
  addProjectile,
  addPulley,
  addSensor,
  addSensorTarget,
  addSurface,
  applyInitialVelocity,
  attachBodyToPulley,
  attachBodyToSurface,
  bodyForceBreakdown,
  buildSensorTables,
  captureInitial,
  createWorld,
  deserializeScene,
  fireLauncher,
  getBody,
  getLauncher,
  getPulley,
  linkReading,
  migrateScene,
  mountApparatus,
  removeSensorTarget,
  resetWorld,
  resolveSensorTarget,
  sensorTargetKey,
  sensorTargets,
  serializeScene,
  setSensorTarget,
  stepWorld,
  updateMountedApparatus,
} from '../modules/physics/lab/physics.mjs';
import {
  CHART_TEXT,
  EXPORT_MOTION_SIZE,
  FORCE_LINES,
  compactTickTexts,
  exportForceSize,
  forceChartLayout,
  forceGraphModel,
  motionChartLayout,
  motionGraphModel,
  niceTicks,
  sensorTargetLabel,
  wrapTextSegments,
} from '../modules/physics/lab/graphs.mjs';
import {
  captureSensorRecords,
  createSceneHistory,
  pushSceneHistory,
  restoreSensorRecords,
  takeRedo,
  takeUndo,
} from '../modules/physics/lab/history.mjs';

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

function ok(cond, label) {
  if (!cond) throw new Error(label);
}

function advance(world, seconds, h = 1 / 480) {
  const n = Math.max(1, Math.round(seconds / h));
  for (let i = 0; i < n; i += 1) stepWorld(world, h, { h });
}

function forceRow(sensor, key) {
  const rows = (sensor.samples || []).filter((r) => r.key === key);
  return rows.length ? rows[rows.length - 1] : null;
}

function channelOf(row, id) {
  return (row?.forces || []).find((f) => f.id === id) || null;
}

/* ------------------------ physics: decomposition ------------------------ */

check('force sensor: a block at rest on the ground reads weight and the estimated support', () => {
  const world = createWorld({ g: 9.8 });
  const block = addBlock(world, { mass: 2, x: 0, y: 1, z: 0 });
  const surface = addSurface(world, { angleDeg: 0, muS: 0.6, muK: 0.4, length: 10, x: 0, y: 0, width: 3 });
  attachBodyToSurface(world, block, surface.id, { localX: 0, localZ: 0 });
  const sensor = addSensor(world, { kind: 'force', x: 0, y: 0, z: 2 });
  ok(addSensorTarget(world, sensor, block.id), 'target added');
  captureInitial(world);
  advance(world, 0.5);
  const row = forceRow(sensor, `body:${block.id}`);
  ok(row, 'a sample row exists after running');
  const weight = channelOf(row, 'weight');
  near(weight.fx, 0, 1e-9, 'weight fx');
  near(weight.fy, -19.6, 1e-6, 'weight fy = -mg');
  const net = channelOf(row, 'net');
  ok(net && net.measured === true, 'net force is marked measured');
  near(net.fx, 0, 0.05, 'net fx at rest');
  near(net.fy, 0, 0.05, 'net fy at rest');
  const contact = channelOf(row, 'contact');
  ok(contact && contact.estimated === true, 'the support arrives as one solver-estimated contact row');
  near(contact.fy, 19.6, 0.06, 'estimated contact balances mg');
  ok(contact.window > 0, 'estimated rows carry their averaging window');
  // The named-model channel view agrees: bodyForceBreakdown names the normal.
  const normal = bodyForceBreakdown(world, block).find((f) => f.id === 'normal');
  ok(normal, 'breakdown names the normal force');
  near(normal.vector.y, 19.6, 1e-6, 'breakdown normal = mg');
});

check('force sensor: kinetic friction on a sliding block opposes the motion', () => {
  const world = createWorld({ g: 9.8 });
  const block = addBlock(world, { mass: 1.5, x: 0, y: 1, z: 0 });
  const surface = addSurface(world, { angleDeg: 0, muS: 0.05, muK: 0.35, length: 40, x: 0, y: 0, width: 3 });
  attachBodyToSurface(world, block, surface.id, { localX: 0, localZ: 0 });
  block.v0 = 4;
  const sensor = addSensor(world, { kind: 'force', x: 0, y: 0, z: 2 });
  addSensorTarget(world, sensor, block.id);
  applyInitialVelocity(world, block);
  captureInitial(world);
  advance(world, 0.5);
  const vx = getBody(world, block.id).cannon.velocity.x;
  ok(vx > 0.1, `block is still sliding (+x), vx=${vx}`);
  const row = forceRow(sensor, `body:${block.id}`);
  ok(row, 'sample row exists');
  const friction = channelOf(row, 'friction');
  ok(friction, 'friction channel present');
  near(friction.fx, -0.35 * 1.5 * 9.8, 0.2, 'kinetic friction = -mu_k m g along -x');
  near(Math.abs(friction.fy), 0, 1e-6, 'friction has no vertical part on a level surface');
});

check('force sensor: free fall lists only weight; nothing is invented', () => {
  const world = createWorld({ g: 9.8 });
  const ball = addBall(world, { mass: 1.5, x: 0, y: 8, z: 0 });
  const sensor = addSensor(world, { kind: 'force', x: 0, y: 0, z: 2 });
  addSensorTarget(world, sensor, ball.id);
  captureInitial(world);
  advance(world, 0.5);
  const row = forceRow(sensor, `body:${ball.id}`);
  ok(row, 'sample row exists');
  const ids = row.forces.map((f) => f.id);
  ok(ids.includes('weight'), 'weight recorded');
  ok(!ids.includes('contact'), 'no invented contact reaction in the air');
  ok(!ids.includes('normal') && !ids.includes('friction'), 'no invented normal or friction');
  const net = channelOf(row, 'net');
  near(net.fy, -1.5 * 9.8, 0.1, 'measured net = mg downward');
});

check('force sensor: a hanging spring reads the spring channel; no phantom contact on the oscillator', () => {
  const world = createWorld({ g: 9.8 });
  const ball = addBall(world, { mass: 1, x: 0, y: 2, z: 0 });
  addLink(world, { a: { type: 'anchor', x: 0, y: 4, z: 0 }, b: { type: 'body', id: ball.id }, k: 20, rest: 1 });
  const sensor = addSensor(world, { kind: 'force', x: 0, y: 0, z: 2 });
  addSensorTarget(world, sensor, ball.id);
  captureInitial(world);
  advance(world, 2.0);
  const row = forceRow(sensor, `body:${ball.id}`);
  ok(row, 'sample row exists');
  const spring = row.forces.find((f) => String(f.id).startsWith('spring:'));
  ok(spring, 'spring channel recorded with its link id');
  ok(Number.isFinite(spring.fy), 'spring fy is a number');
  const net = channelOf(row, 'net');
  const weight = channelOf(row, 'weight');
  near(net.fy, weight.fy + spring.fy, 0.05, 'measured net = weight + spring');
  const contact = channelOf(row, 'contact');
  ok(!contact || Math.hypot(contact.fx, contact.fy, contact.fz) < 0.05,
    `no phantom contact on the spring oscillator (got ${contact ? Math.hypot(contact.fx, contact.fy, contact.fz) : 0})`);
});

check('force sensor: pulley rope tension is recorded on both bodies with defined components', () => {
  const world = createWorld({ g: 9.8 });
  const a = addBall(world, { mass: 2, x: -2, y: 3, z: 0 });
  const b = addBall(world, { mass: 3, x: 2, y: 3, z: 0 });
  const pulley = addPulley(world, { x: 0, y: 4, z: 0, mode: 'fixed' });
  attachBodyToPulley(world, a, pulley.id, 'a');
  attachBodyToPulley(world, b, pulley.id, 'b');
  const sensor = addSensor(world, { kind: 'force', x: 0, y: 0, z: 2 });
  addSensorTarget(world, sensor, a.id);
  addSensorTarget(world, sensor, b.id);
  captureInitial(world);
  advance(world, 1.0);
  const pulleyLive = getPulley(world, pulley.id);
  ok(pulleyLive.tensionA > 0 && pulleyLive.tensionB > 0,
    `both tensions positive (A=${pulleyLive.tensionA}, B=${pulleyLive.tensionB})`);
  const rowA = forceRow(sensor, `body:${a.id}`);
  const rowB = forceRow(sensor, `body:${b.id}`);
  ok(rowA && rowB, 'both targets sampled');
  const ropeA = channelOf(rowA, 'rope');
  const ropeB = channelOf(rowB, 'rope');
  ok(ropeA && ropeB, 'rope channel on both bodies');
  ok(Number.isFinite(ropeA.fx) && Number.isFinite(ropeA.fy), 'rope A components defined');
  ok(Number.isFinite(ropeB.fx) && Number.isFinite(ropeB.fy), 'rope B components defined (regression: fy was once undefined)');
  ok(ropeB.fy > 0, 'the hanging side is pulled up along the rope');
  const est = channelOf(rowB, 'contact');
  ok(!est || est.estimated === true, 'any pulley residual is marked as an estimate');
  // The named-model view agrees through bodyForceBreakdown.
  const bd = bodyForceBreakdown(world, b).find((f) => f.id === 'rope');
  ok(bd, 'breakdown lists the rope for the hanging body');
});

/* ------------------------ physics: multi-target ------------------------ */

check('multi-target: two bodies keep separate keyed histories under one force sensor', () => {
  const world = createWorld({ g: 9.8 });
  const heavy = addBlock(world, { mass: 3, x: 0, y: 1, z: 0 });
  const light = addBlock(world, { mass: 1, x: 2, y: 1, z: 0 });
  const surface = addSurface(world, { angleDeg: 0, muS: 0.6, muK: 0.4, length: 20, x: 1, y: 0, width: 6 });
  attachBodyToSurface(world, heavy, surface.id, { localX: -1, localZ: 0 });
  attachBodyToSurface(world, light, surface.id, { localX: 1, localZ: 0 });
  const sensor = addSensor(world, { kind: 'force', x: 0, y: 0, z: 2 });
  addSensorTarget(world, sensor, heavy.id);
  addSensorTarget(world, sensor, light.id);
  captureInitial(world);
  advance(world, 0.6);
  const keys = new Set(sensor.samples.map((r) => r.key));
  ok(keys.has(`body:${heavy.id}`) && keys.has(`body:${light.id}`), 'both keys present');
  const rowHeavy = forceRow(sensor, `body:${heavy.id}`);
  const rowLight = forceRow(sensor, `body:${light.id}`);
  near(channelOf(rowHeavy, 'weight').fy, -29.4, 1e-6, 'heavy weight -3g');
  near(channelOf(rowLight, 'weight').fy, -9.8, 1e-6, 'light weight -1g');
  ok(sensorTargets(sensor).length === 2, 'two targets tracked');
  ok(sensor.targetId === heavy.id, 'legacy targetId mirrors targets[0]');
});

check('multi-target: a motion sensor tracks two launchers with the same identity rules', () => {
  const world = createWorld({ g: 9.8 });
  const sensor = addSensor(world, { kind: 'motion', x: -3, y: 0, z: 0, range: 30 });
  const la = addLauncher(world, { x: 0, y: 1, z: 0, angle: 45, speed: 6 });
  const lb = addLauncher(world, { x: 4, y: 1, z: 0, angle: 60, speed: 6 });
  addSensorTarget(world, sensor, la.id, { type: 'launcher' });
  addSensorTarget(world, sensor, lb.id, { type: 'launcher' });
  const targets = sensorTargets(sensor);
  ok(targets.length === 2, 'two launcher targets');
  ok(sensorTargetKey(targets[0]) === `launcher:${la.id}`, 'launcher key form');
  ok(sensor.targetType === 'launcher', 'legacy targetType mirrors a launcher primary');
  fireLauncher(world, la);
  fireLauncher(world, lb);
  captureInitial(world);
  advance(world, 0.5);
  const keys = new Set(sensor.samples.map((r) => r.key));
  ok(keys.has(`launcher:${la.id}`) && keys.has(`launcher:${lb.id}`), 'both launcher series keyed by launcher id');
  ok(sensor.samples.length > 0, 'launcher rows recorded');
  ok(sensor.samples.every((r) => Number.isFinite(r.x) && Number.isFinite(r.v)),
    'launcher rows carry kinematics');
});

check('multi-target: adding a duplicate or an over-cap target never clears histories', () => {
  const world = createWorld({ g: 9.8 });
  const first = addBall(world, { mass: 1, x: 0, y: 3, z: 0 });
  const sensor = addSensor(world, { kind: 'force', x: 0, y: 0, z: 2 });
  addSensorTarget(world, sensor, first.id);
  captureInitial(world);
  advance(world, 0.3);
  const before = sensor.samples.length;
  ok(before > 0, 'samples exist');
  ok(addSensorTarget(world, sensor, first.id) === false, 'duplicate add refused');
  ok(sensor.samples.length === before, 'duplicate add keeps samples');
  let count = 1;
  for (let i = 0; i < SENSOR_TARGET_CAP; i += 1) {
    const body = addBall(world, { mass: 1, x: 3 + i, y: 3, z: 0 });
    if (addSensorTarget(world, sensor, body.id)) count += 1;
  }
  ok(count === SENSOR_TARGET_CAP, `tracked targets stop at the cap (${count})`);
  const extra = addBall(world, { mass: 1, x: 20, y: 3, z: 0 });
  ok(addSensorTarget(world, sensor, extra.id) === false, 'over-cap add refused');
  ok(sensor.samples.length === before, 'histories untouched by refused adds');
});

check('multi-target: removing one target drops only its own rows', () => {
  const world = createWorld({ g: 9.8 });
  const a = addBall(world, { mass: 1, x: 0, y: 5, z: 0 });
  const b = addBall(world, { mass: 2, x: 2, y: 5, z: 0 });
  const sensor = addSensor(world, { kind: 'force', x: 0, y: 0, z: 2 });
  addSensorTarget(world, sensor, a.id);
  addSensorTarget(world, sensor, b.id);
  captureInitial(world);
  advance(world, 0.4);
  const rowsA = sensor.samples.filter((r) => r.key === `body:${a.id}`).length;
  const rowsB = sensor.samples.filter((r) => r.key === `body:${b.id}`).length;
  ok(rowsA > 3 && rowsB > 3, `both series recorded (A=${rowsA}, B=${rowsB})`);
  ok(removeSensorTarget(world, sensor, a.id), 'target A removed');
  ok(sensor.samples.every((r) => r.key !== `body:${a.id}`), 'A rows dropped');
  ok(sensor.samples.filter((r) => r.key === `body:${b.id}`).length === rowsB,
    'B rows are exactly the same as before the removal');
  ok(sensorTargets(sensor).length === 1, 'one target left');
  ok(sensor.targetId === b.id, 'legacy fields re-mirrored to the remaining target');
});

check('multi-target: setSensorTarget stays the explicit single-target reset', () => {
  const world = createWorld({ g: 9.8 });
  const a = addBall(world, { mass: 1, x: 0, y: 5, z: 0 });
  const b = addBall(world, { mass: 2, x: 2, y: 5, z: 0 });
  const sensor = addSensor(world, { kind: 'motion', x: -4, y: 0, z: 0, range: 30 });
  addSensorTarget(world, sensor, a.id);
  addSensorTarget(world, sensor, b.id);
  captureInitial(world);
  advance(world, 0.2);
  ok(sensor.samples.length > 0, 'samples recorded');
  ok(setSensorTarget(world, sensor, null), 'auto mode restored');
  ok(sensorTargets(sensor).length === 0, 'targets cleared');
  ok(sensor.samples.length === 0, 'single-target switch clears the series (documented behaviour)');
  ok(setSensorTarget(world, sensor, b.id), 'explicit single target set');
  ok(sensorTargets(sensor).length === 1 && sensor.targetId === b.id, 'one target, legacy fields mirrored');
});

/* ------------------------ physics: launcher lifecycle ------------------------ */

check('launcher lifecycle: force data starts only once the loaded ball flies, and survives reset/refire', () => {
  const world = createWorld({ g: 9.8 });
  const launcher = addLauncher(world, { x: 0, y: 1, z: 0, angle: 45, speed: 8 });
  const sensor = addSensor(world, { kind: 'force', x: -2, y: 0, z: 2 });
  addSensorTarget(world, sensor, launcher.id, { type: 'launcher' });
  const key = `launcher:${launcher.id}`;
  // Loaded, not yet fired: resolveSensorTarget reports loaded and no force rows appear.
  const resolved = resolveSensorTarget(world, { id: launcher.id, type: 'launcher' });
  ok(resolved.status === 'ok' && resolved.loaded === true, 'loaded ball resolves without a body');
  captureInitial(world);
  advance(world, 0.2);
  ok((sensor.samples || []).length === 0, 'no force data while the ball is clamped in the barrel');
  fireLauncher(world, launcher);
  advance(world, 0.4);
  const rows = sensor.samples.filter((r) => r.key === key);
  ok(rows.length > 0, 'force rows recorded in flight');
  ok(rows.every((r) => !r.loaded), 'in-flight rows are not marked loaded');
  ok(channelOf(rows[rows.length - 1], 'net'), 'net force recorded in flight');
  // Reset clears samples but the target stays bound...
  resetWorld(world);
  ok(sensorTargets(sensor).some((t) => sensorTargetKey(t) === key), 'launcher target survives reset');
  ok((sensor.samples || []).length === 0, 'reset clears the recorded series');
  // ...and a refire continues the same logical series.
  fireLauncher(world, getLauncher(world, launcher.id));
  advance(world, 0.3);
  const rows2 = sensor.samples.filter((r) => r.key === key);
  ok(rows2.length > 0, 'refire continues recording under the same launcher:<id> key');
});

check('launcher lifecycle: a cart-mounted launcher keeps its launcher:<id> series', () => {
  const world = createWorld({ g: 9.8 });
  const cart = addCart(world, { mass: 1, x: 0, y: 1, z: 0 });
  const launcher = addLauncher(world, { x: 0, y: 1.2, z: 0, angle: 45, speed: 8 });
  ok(mountApparatus(world, launcher, { type: 'body', id: cart.id }), 'launcher mounted on the cart');
  updateMountedApparatus(world);
  const sensor = addSensor(world, { kind: 'motion', x: -3, y: 0, z: 2, range: 30 });
  addSensorTarget(world, sensor, launcher.id, { type: 'launcher' });
  fireLauncher(world, getLauncher(world, launcher.id));
  captureInitial(world);
  advance(world, 0.4);
  ok(sensor.samples.length > 0, 'mounted launcher recorded');
  ok(sensor.samples.every((r) => r.key === `launcher:${launcher.id}`),
    'the mounted launcher keeps the launcher:<id> identity');
  const reloaded = resolveSensorTarget(world, { id: launcher.id, type: 'launcher' });
  ok(reloaded.status === 'ok', 'mounted launcher target still resolves after firing');
});

/* ------------------------ physics: per-target export ------------------------ */

check('per-target export: force tables filter by target key and carry magnitude AND direction', () => {
  const world = createWorld({ g: 9.8 });
  const a = addBall(world, { mass: 1, x: 0, y: 5, z: 0 });
  const b = addBall(world, { mass: 2, x: 2, y: 5, z: 0 });
  const sensor = addSensor(world, { kind: 'force', x: 0, y: 0, z: 2 });
  addSensorTarget(world, sensor, a.id);
  addSensorTarget(world, sensor, b.id);
  captureInitial(world);
  advance(world, 0.4);
  const tables = buildSensorTables(sensor, { targetKey: `body:${b.id}` });
  ok(tables && tables.kind === 'force', 'force tables built');
  ok(tables.raw.rows.length > 0, 'raw rows for the filtered target');
  ok(tables.raw.rows.every((r) => r.target !== ''), 'every row is labelled with its target');
  const weightRows = tables.raw.rows.filter((r) => r.force.startsWith('重力'));
  ok(weightRows.length > 0, 'weight rows present');
  ok(tables.raw.rows.every((r) => Number.isFinite(r.mag) && Number.isFinite(r.fx) && Number.isFinite(r.fy)),
    'magnitude and components on every row');
  ok(tables.raw.columns.some((c) => c.key === 'az') && tables.raw.columns.some((c) => c.key === 'el'),
    'azimuth/elevation direction columns present');
  ok(tables.raw.rows.every((r) => r.source.includes('估计') || r.source.includes('模型') || r.source.includes('测量')),
    'every row states its provenance (model / measured / estimated)');
  const estimated = tables.raw.rows.filter((r) => r.source.includes('估计'));
  ok(estimated.every((r) => Number.isFinite(r.window) && r.window > 0), 'estimated rows expose the averaging window');
  ok(tables.summary.rows.some((r) => r.force.startsWith('重力')), 'summary groups per force');
  const allTables = buildSensorTables(sensor);
  ok(allTables.raw.rows.length > tables.raw.rows.length, 'unfiltered export covers both targets');
});

check('per-target export: motion tables also filter by target key', () => {
  const world = createWorld({ g: 9.8 });
  const a = addBall(world, { mass: 1, x: 0, y: 5, z: 0 });
  const b = addBall(world, { mass: 2, x: 2, y: 5, z: 0 });
  const sensor = addSensor(world, { kind: 'motion', x: -4, y: 0, z: 0, range: 30 });
  addSensorTarget(world, sensor, a.id);
  addSensorTarget(world, sensor, b.id);
  captureInitial(world);
  advance(world, 0.4);
  const tables = buildSensorTables(sensor, { targetKey: `body:${a.id}` });
  ok(tables && tables.kind === 'motion', 'motion tables built');
  ok(tables.raw.rows.length > 0, 'filtered rows exist');
  const all = buildSensorTables(sensor);
  ok(all.raw.rows.length > tables.raw.rows.length, 'all-targets table is larger');
});

/* ------------------------ physics: per-target chart models ------------------------ */

/**
 * The chart model behind the live canvas AND the exported PNG. Two bodies
 * that are both at rest, with different names/ids and different windows —
 * exactly the case whose PNGs were byte-identical before: the exported
 * image must now identify its target and its axes on its own.
 */
function buildRestChartScene() {
  const world = createWorld({ g: 9.8 });
  const a = addBlock(world, { mass: 2, x: -1.5, y: 1, z: 0, name: '滑块' });
  const b = addBall(world, { mass: 1, x: 2, y: 1, z: 0, name: '小球' });
  const sensor = addSensor(world, { kind: 'motion', x: -4, y: 0, z: 0, range: 30 });
  addSensorTarget(world, sensor, a.id);
  addSensorTarget(world, sensor, b.id);
  captureInitial(world);
  // Sample both targets, then keep recording only A so the two time windows
  // differ (A: 0–12 s, B: only the first second) like the real export case.
  advance(world, 1.0);
  const rowsB = sensor.samples.filter((r) => r.key === `body:${b.id}`);
  removeSensorTarget(world, sensor, b.id);
  advance(world, 11.0);
  addSensorTarget(world, sensor, b.id);
  for (const row of rowsB) {
    // Re-attach B's early rows by hand so both series exist with distinct windows.
    sensor.samples.push(row);
  }
  const nameOf = (target) => (target.id === a.id ? '滑块' : '小球');
  return { world, a, b, sensor, nameOf };
}

check('chart model: a rest target is identified by its visible name and stable id', () => {
  const { a, b, sensor, nameOf } = buildRestChartScene();
  const modelA = motionGraphModel(sensor, { viewKey: `body:${a.id}`, nameOf });
  const modelB = motionGraphModel(sensor, { viewKey: `body:${b.id}`, nameOf });
  ok(modelA.series.length === 1 && modelB.series.length === 1, 'one series per viewed target');
  const labelA = modelA.series[0].label;
  const labelB = modelB.series[0].label;
  ok(labelA.includes('滑块'), `label A carries the visible name (got ${labelA})`);
  ok(labelB.includes('小球'), `label B carries the visible name (got ${labelB})`);
  ok(labelA.includes(`body:${a.id}`), 'label A carries its stable id');
  ok(labelB.includes(`body:${b.id}`), 'label B carries its stable id');
  ok(labelA !== labelB, 'two rest targets never share one in-chart label');
  ok(sensorTargetLabel({ id: 'x1', type: 'body' }) === 'body:x1', 'unnamed targets fall back to the stable key');
  ok(sensorTargetLabel({ id: 'x1', type: 'body' }, '方块甲') === '方块甲 · body:x1',
    'named targets read name · key');
});

check('chart model: the viewed series contains only that target’s samples', () => {
  const { a, b, sensor, nameOf } = buildRestChartScene();
  const modelA = motionGraphModel(sensor, { viewKey: `body:${a.id}`, nameOf });
  const modelB = motionGraphModel(sensor, { viewKey: `body:${b.id}`, nameOf });
  const rowsA = modelA.series[0].rows;
  const rowsB = modelB.series[0].rows;
  ok(rowsA.length > rowsB.length, 'the long-lived target has more samples');
  ok(rowsA.every((r) => r.key === `body:${a.id}`), 'series A never mixes B rows');
  ok(rowsB.every((r) => r.key === `body:${b.id}`), 'series B never mixes A rows');
  ok(rowsB.length > 0 && rowsA.length > 0, 'both series non-empty');
  // Different windows (0–12 s vs 0–1 s) and different rest positions (−1.5 vs 2):
  // the real data distinguishes the targets; the model must not resample or merge it.
  near(modelA.timeAxis.max, 12, 0.2, 'time window of A covers the full run');
  near(modelB.timeAxis.max, 1, 0.2, 'time window of B stays its own');
  near(Math.min(...rowsA.map((r) => r.x)), -1.5, 0.05, 'A stays at x=-1.5');
  near(Math.max(...rowsB.map((r) => r.x)), 2, 0.05, 'B stays at x=2');
});

check('chart model: numeric time and per-channel y ticks with units', () => {
  const { a, sensor, nameOf } = buildRestChartScene();
  const model = motionGraphModel(sensor, { viewKey: `body:${a.id}`, nameOf });
  ok(model.timeAxis && model.timeAxis.unit === 's', 'time axis carries seconds');
  ok(model.timeAxis.ticks.length >= 2, 'numeric time ticks exist');
  for (const tick of model.timeAxis.ticks) {
    ok(Number.isFinite(tick.value) && /^\d/.test(tick.text), `time tick ${tick.text} is numeric`);
  }
  const units = { x: 'm', v: 'm/s', a: 'm/s²', e: 'J' };
  for (const metric of model.metrics) {
    ok(metric.unit === units[metric.key], `channel ${metric.key} keeps its unit (${metric.unit})`);
    ok(metric.min !== null && metric.max !== null, `channel ${metric.key} has a numeric scale`);
    ok(metric.ticks.length >= 2, `channel ${metric.key} has y ticks`);
    for (const tick of metric.ticks) {
      ok(Number.isFinite(tick.value) && /^-?\d/.test(tick.text), `y tick ${tick.text} on ${metric.key} is numeric`);
      ok(tick.value >= metric.min - 1e-9 && tick.value <= metric.max + 1e-9, `y tick ${tick.value} inside the channel scale`);
    }
  }
  ok(niceTicks(0, 1, 5).length >= 5, 'a 0–1 s window gets at least five ticks');
  const flat = niceTicks(2, 2, 3);
  ok(flat.length >= 2 && flat.some((t) => t.value < 2) && flat.some((t) => t.value > 2),
    'a flat trace still gets a padded readable scale');
});

check('chart model: rest traces stay distinguishable end to end', () => {
  const { a, b, sensor, nameOf } = buildRestChartScene();
  const modelA = motionGraphModel(sensor, { viewKey: `body:${a.id}`, nameOf });
  const modelB = motionGraphModel(sensor, { viewKey: `body:${b.id}`, nameOf });
  const signature = (model) => JSON.stringify({
    label: model.series[0].label,
    window: [model.timeAxis.min.toFixed(3), model.timeAxis.max.toFixed(3)],
    x: [model.metrics[0].min.toFixed(3), model.metrics[0].max.toFixed(3)],
  });
  ok(signature(modelA) !== signature(modelB),
    'two rest targets produce different chart models (label, window or position)');
  // The all-targets view keeps one series per target, each with its own label.
  const all = motionGraphModel(sensor, { nameOf });
  ok(all.series.length === 2, 'all-targets model keeps one series each');
  ok(new Set(all.series.map((s) => s.label)).size === 2, 'both labels differ in the shared chart');
});

check('chart model: force strips carry names, provenance, N ticks and direction conventions', () => {
  const world = createWorld({ g: 9.8 });
  const a = addBlock(world, { mass: 2, x: -1.5, y: 1, z: 0, name: '方块甲' });
  const b = addBall(world, { mass: 1, x: 2, y: 1, z: 0, name: '球乙' });
  const surface = addSurface(world, { angleDeg: 0, muS: 0.6, muK: 0.35, length: 20, x: 0, y: 0, width: 6 });
  attachBodyToSurface(world, a, surface.id, { localX: -1.5, localZ: 0 });
  attachBodyToSurface(world, b, surface.id, { localX: 2, localZ: 0 });
  const sensor = addSensor(world, { kind: 'force', x: 0, y: 0, z: 2 });
  addSensorTarget(world, sensor, a.id);
  addSensorTarget(world, sensor, b.id);
  captureInitial(world);
  advance(world, 0.4);
  const nameOf = (target) => (target.id === a.id ? '方块甲' : '球乙');
  const model = forceGraphModel(sensor, { viewKey: `body:${b.id}`, nameOf });
  ok(model.kind === 'force' && model.strips.length > 0, 'force strips built for the viewed target');
  ok(model.timeAxis && model.timeAxis.unit === 's', 'force time axis in seconds');
  ok(model.timeAxis.ticks.length >= 2, 'force time ticks are numeric');
  for (const strip of model.strips) {
    ok(strip.unit === 'N', `strip ${strip.forceName} carries N`);
    ok(strip.ticks.length >= 2, `strip ${strip.forceName} has y ticks`);
    for (const tick of strip.ticks) {
      ok(Number.isFinite(tick.value) && /^-?\d/.test(tick.text), `tick ${tick.text} is numeric`);
    }
    ok(strip.targetLabel.includes('球乙') && strip.targetLabel.includes(`body:${b.id}`),
      `strip ${strip.forceName} names the viewed target (got ${strip.targetLabel})`);
    ok(!strip.targetLabel.includes('方块甲'), 'viewed strips never show another target');
    ok(strip.rows.every((r) => Number.isFinite(r.fx) && Number.isFinite(r.fy)), 'component rows are defined');
  }
  const marks = model.strips.map((s) => s.forceName).join('|');
  ok(marks.includes('[est]') || marks.includes('[measured]') || marks.length > 0,
    'provenance marks survive into strip labels');
  // Direction info: the component line styles and the lab-frame note.
  const styles = FORCE_LINES.map((l) => `${l.label}:${l.dash.length}`).join(',');
  ok(styles === 'Fx:0,Fy:2,Fz:2', `component line styles stay solid/dashed/dotted (got ${styles})`);
  ok(model.axisNote.includes('x 右') && model.axisNote.includes('y 上') && model.axisNote.includes('z 出屏'),
    'lab-frame axis convention stays on the model');
  const weightA = forceGraphModel(sensor, { viewKey: `body:${a.id}`, nameOf })
    .strips.find((s) => s.forceName.startsWith('重力'));
  const weightB = model.strips.find((s) => s.forceName.startsWith('重力'));
  ok(weightA && weightB, 'weight strips exist for both targets');
  near(weightB.min, -9.8, 0.05, 'B (1 kg) weight scale reaches -mg on fy');
  ok(Math.abs(weightA.min + 19.6) < 0.05, 'A (2 kg) weight scale reaches -2mg');
  ok(weightA.min < weightB.min - 9, 'the two weight scales differ — magnitudes are not rescaled together');
});

/* ------------- chart layout regressions (export PNG defect) ------------- */

/**
 * Reproducible monospace measure stub: latin/digits ≈ 0.6 em, CJK and
 * fullwidth punctuation 1 em — close to real browser monospace metrics and
 * deterministic on every run. The layout itself stays pure.
 */
function stubMeasure(dpr) {
  return (text, which) => {
    const em = (which === 'title' ? CHART_TEXT.titlePx : CHART_TEXT.tickPx) * dpr;
    let w = 0;
    for (const ch of String(text)) w += /[\u2e80-\uffef]/.test(ch) ? em : em * 0.6;
    return w;
  };
}

function boxOverlap(a, b) {
  return a.x < b.x + b.w - 1e-6 && b.x < a.x + a.w - 1e-6
    && a.y < b.y + b.h - 1e-6 && b.y < a.y + a.h - 1e-6;
}

function boxInsideCanvas(box, width, height, label) {
  if (box.x < -1e-6 || box.y < -1e-6 || box.x + box.w > width + 1e-6 || box.y + box.h > height + 1e-6) {
    throw new Error(`${label}: box [x=${box.x} y=${box.y} w=${box.w} h=${box.h}] leaves the ${width}×${height} canvas`);
  }
}

/** Every y tick / title box of one strip set is pairwise disjoint and inside. */
function assertBoxesDisjoint(boxes, width, height, label) {
  for (const a of boxes) boxInsideCanvas(a.box, width, height, `${label} ${a.what}`);
  for (let i = 0; i < boxes.length; i += 1) {
    for (let j = i + 1; j < boxes.length; j += 1) {
      ok(!boxOverlap(boxes[i].box, boxes[j].box),
        `${label}: ${boxes[i].what} overlaps ${boxes[j].what}`);
    }
  }
}

function assertAxisDisjoint(axis, width, height, label) {
  ok(axis && axis.caption.text === 't (s)', `${label}: numeric time axis with its s unit`);
  const axisBoxes = [
    ...axis.ticks.map((k) => ({ box: k.box, what: `time tick ${k.text}` })),
    { box: axis.caption.box, what: 'time caption' },
  ];
  assertBoxesDisjoint(axisBoxes, width, height, `${label} time axis`);
}

/** Strip bands meet their height floor and carry a readable, distinct scale. */
function assertStripGeometry(layout, label, { minBandH, minTicks }) {
  for (const strip of layout.strips) {
    ok(strip.rect.h >= minBandH, `${label}: strip ${strip.key} band height ${strip.rect.h.toFixed(1)} ≥ ${minBandH}`);
    ok(strip.ticks.length >= minTicks,
      `${label}: strip ${strip.key} keeps ${strip.ticks.length} ≥ ${minTicks} y ticks`);
    const texts = strip.ticks.map((k) => k.text);
    ok(new Set(texts).size === texts.length, `${label}: strip ${strip.key} tick texts distinct (${texts.join(',')})`);
    if (strip.min != null && strip.ticks.length >= 2) {
      const top = strip.yOf(Math.max(...strip.ticks.map((k) => k.value)));
      const bottom = strip.yOf(Math.min(...strip.ticks.map((k) => k.value)));
      ok(top < bottom, `${label}: strip ${strip.key} keeps max at the top of its band`);
    }
  }
}

/**
 * The acceptance defect as a scene: a resting block named 方块甲 with the
 * stable id body:block-2 tracked by a motion sensor, flat on every channel —
 * the exact case whose exported PNG smeared the y ticks into one blob.
 */
function buildRestMotionScene() {
  const world = createWorld({ g: 9.8 });
  const other = addBlock(world, { id: 'block-1', mass: 1, x: 6, y: 1, z: 0, name: '方块乙' });
  const tracked = addBlock(world, { id: 'block-2', mass: 2, x: 2, y: 1, z: 0, name: '方块甲' });
  const surface = addSurface(world, { angleDeg: 0, muS: 0.6, muK: 0.4, length: 20, x: 2, y: 0, width: 6 });
  ok(attachBodyToSurface(world, tracked, surface.id, { localX: 0, localZ: 0 }), 'the tracked block rests on the surface');
  ok(attachBodyToSurface(world, other, surface.id, { localX: 4, localZ: 0 }), 'the second block rests too');
  const sensor = addSensor(world, { kind: 'motion', x: -4, y: 0, z: 0, range: 30 });
  addSensorTarget(world, sensor, tracked.id);
  captureInitial(world);
  advance(world, 12);
  return { world, tracked, sensor };
}

check('chart layout: a resting motion export keeps ticks, titles and channels disjoint', () => {
  const { tracked, sensor } = buildRestMotionScene();
  const model = motionGraphModel(sensor, { viewKey: `body:${tracked.id}`, nameOf: () => '方块甲' });
  ok(model.series[0].label === '方块甲 · body:block-2',
    `in-chart label carries the name and stable id (got ${model.series[0].label})`);
  const layout = motionChartLayout(model, {
    width: EXPORT_MOTION_SIZE.width,
    height: EXPORT_MOTION_SIZE.height,
    dpr: 1,
    measure: stubMeasure(1),
  });
  ok(layout.width === EXPORT_MOTION_SIZE.width && layout.height === EXPORT_MOTION_SIZE.height,
    'the layout runs at the actual native export size, not the widget size');
  // Per strip and across strips: tick boxes, titles and header never collide.
  const allBoxes = [];
  layout.strips.forEach((strip, i) => {
    const boxes = strip.titles.map((t) => ({ box: t.box, what: `${strip.key} title` }));
    for (const tick of strip.ticks) boxes.push({ box: tick.box, what: `${strip.key} tick ${tick.text}` });
    assertBoxesDisjoint(boxes, layout.width, layout.height, `export strip ${i}`);
    for (const box of boxes) {
      box.what = `ch${i}: ${box.what}`;
      allBoxes.push(box);
    }
  });
  for (const piece of layout.header.pieces) {
    allBoxes.push({ box: piece.box, what: `header ${piece.text.slice(0, 12)}` });
  }
  assertBoxesDisjoint(allBoxes, layout.width, layout.height, 'export all channels');
  assertStripGeometry(layout, 'export', { minBandH: 90, minTicks: 2 });
  // Measured gutter: the widest tick fits with its right-hand gap and margin.
  let widest = 0;
  for (const strip of layout.strips) for (const tick of strip.ticks) widest = Math.max(widest, tick.w);
  ok(layout.gutter >= widest + CHART_TEXT.tickGapX - 1e-6,
    `gutter ${layout.gutter.toFixed(1)} ≥ widest tick ${widest.toFixed(1)} + gap`);
  assertAxisDisjoint(layout.timeAxis, layout.width, layout.height, 'export');
  // Full units survive: m, m/s, m/s², J per channel, seconds on the axis.
  const titles = layout.strips.map((s) => s.titles.map((t) => t.text).join('')).join('|');
  ok(['x (m)', 'v (m/s)', 'a (m/s²)', 'E (J)'].every((s) => titles.includes(s)),
    `channel titles keep their units (got ${titles})`);
  const header = layout.header.pieces.map((p) => p.text).join(' ');
  ok(header.includes('目标 · Target:') && header.includes('方块甲') && header.includes('body:block-2'),
    `the header carries the full target identity (got ${header})`);
  // The trace still maps inside its bands — data untouched by the layout.
  for (const strip of layout.strips) {
    ok(strip.min != null && strip.max != null, `strip ${strip.key} keeps its data scale`);
    for (const row of model.series[0].rows.slice(0, 40)) {
      const value = strip.key === 'e' ? row.e ?? row.ke : row[strip.key];
      const py = strip.yOf(value);
      ok(py >= strip.plot.top - 1e-6 && py <= strip.plot.bottom + 1e-6,
        `strip ${strip.key} keeps its samples inside the band`);
    }
  }
});

check('chart layout: live-canvas sizes separate rest ticks without clipping', () => {
  const { tracked, sensor } = buildRestMotionScene();
  const model = motionGraphModel(sensor, { viewKey: `body:${tracked.id}`, nameOf: () => '方块甲' });
  // The new CSS height (300) and the mobile height (260) must read cleanly;
  // the old broken 390×240 must at least never smear or clip again.
  for (const [w, h, minTicks] of [[390, 300, 2], [360, 260, 2], [390, 240, 1]]) {
    const layout = motionChartLayout(model, { width: w, height: h, dpr: 1, measure: stubMeasure(1) });
    const label = `live ${w}×${h}`;
    const boxes = [];
    layout.strips.forEach((strip, i) => {
      for (const t of strip.titles) boxes.push({ box: t.box, what: `ch${i} ${strip.key} title` });
      for (const k of strip.ticks) boxes.push({ box: k.box, what: `ch${i} ${strip.key} tick ${k.text}` });
    });
    for (const piece of layout.header.pieces) boxes.push({ box: piece.box, what: 'header' });
    assertBoxesDisjoint(boxes, w, h, label);
    assertStripGeometry(layout, label, { minBandH: 30, minTicks });
    assertAxisDisjoint(layout.timeAxis, w, h, label);
    let widest = 0;
    for (const strip of layout.strips) for (const tick of strip.ticks) widest = Math.max(widest, tick.w);
    ok(layout.gutter >= widest + CHART_TEXT.tickGapX - 1e-6, `${label}: gutter fits the widest tick`);
  }
});

check('tick format: compact and distinguishable from 1e-8 to ±1e6', () => {
  const cases = [
    [niceTicks(-0.5, 0.5, 3), '-0.5'],
    [niceTicks(0.00025, 0.00035, 2), '0.0003'],
    [niceTicks(3e-8, 4e-8, 2), 'e-8'],
    [niceTicks(-2.5e-7, 2.5e-7, 2), 'e-7'],
    [niceTicks(-1.23e6, 1.23e6, 3), 'e6'],
  ];
  for (const [ticks, needle] of cases) {
    const texts = ticks.map((k) => k.text);
    ok(ticks.length >= 2, `tick set stays a ruler (${texts.join(',')})`);
    ok(new Set(texts).size === texts.length, `tick texts distinct (${texts.join(',')})`);
    ok(texts.every((t) => t.length <= 8), `tick texts short, never "0.000000" smudges (${texts.join(',')})`);
    ok(texts.every((t) => /^-?\d/.test(t) && Number.isFinite(Number(t))), `tick texts numeric (${texts.join(',')})`);
    ok(texts.join(',').includes(needle), `expected compact shape ${needle} (${texts.join(',')})`);
  }
  ok(compactTickTexts([0]).join() === '0', 'zero formats as "0"');
  // One tick per budgeted grid position: never five labels in a small strip.
  ok(niceTicks(-0.5, 0.5, 3).length <= 4, 'a padded flat range stays within count + 1');
  ok(niceTicks(0, 1, 5).length >= 5, 'a 0–1 s window still gets its five ticks');
  ok(niceTicks(0, 12, 5).length <= 6, 'long windows cap their tick count');
  const flat = niceTicks(2, 2, 3);
  ok(flat.some((k) => k.value < 2) && flat.some((k) => k.value > 2), 'flat traces keep a padded readable scale');
  // Wrapping never loses characters — long titles wrap instead of clipping.
  const longTitle = '方块甲 · body:block-2 · 接触/约束反力 [est] (N)';
  const segs = wrapTextSegments(longTitle, (s) => stubMeasure(1)(s, 'title'), 150);
  ok(segs.length > 1, `the long strip title wraps (${segs.length} lines)`);
  ok(segs.join('') === longTitle, 'wrapped segments rejoin into the full title');
  ok(wrapTextSegments('运行后记录曲线 · Curves record while running', (s) => stubMeasure(1)(s, 'tick'), 9999).length === 1,
    'short text never wraps');
});

check('chart layout: force export carries names, N ticks and the time axis without overlap', () => {
  const world = createWorld({ g: 9.8 });
  const a = addBlock(world, { id: 'block-2', mass: 2, x: -1.5, y: 1, z: 0, name: '方块甲' });
  const surface = addSurface(world, { angleDeg: 0, muS: 0.6, muK: 0.35, length: 20, x: 0, y: 0, width: 6 });
  attachBodyToSurface(world, a, surface.id, { localX: -1.5, localZ: 0 });
  const sensor = addSensor(world, { kind: 'force', x: 0, y: 0, z: 2 });
  addSensorTarget(world, sensor, a.id);
  captureInitial(world);
  advance(world, 12);
  const model = forceGraphModel(sensor, { viewKey: `body:${a.id}`, nameOf: () => '方块甲' });
  const size = exportForceSize(model.strips.length);
  const layout = forceChartLayout(model, {
    width: size.width, height: size.height, dpr: 1, measure: stubMeasure(1),
  });
  ok(layout.width === size.width && layout.height === size.height,
    `force export uses its own native size ${size.width}×${size.height}`);
  ok(layout.strips.length === model.strips.length, 'every (target, force) strip keeps its band');
  const boxes = [];
  for (const strip of layout.strips) {
    const titleText = strip.titles.map((t) => t.text).join('');
    ok(titleText.includes('方块甲') && titleText.includes('body:block-2'),
      `strip title carries name and stable id even when wrapped (got ${titleText})`);
    ok(titleText.includes('(N)'), `strip title keeps its unit (got ${titleText})`);
    ok(strip.rect.h >= 75, `force strip band ${strip.rect.h.toFixed(1)} ≥ 75`);
    for (const title of strip.titles) boxes.push({ box: title.box, what: `title ${strip.forceName}` });
    ok(strip.ticks.length >= 2, `strip ${strip.forceName} has y ticks`);
    for (const tick of strip.ticks) boxes.push({ box: tick.box, what: `tick ${tick.text} on ${strip.forceName}` });
  }
  assertBoxesDisjoint(boxes, size.width, size.height, 'force export');
  assertAxisDisjoint(layout.timeAxis, size.width, size.height, 'force export');
  for (const note of layout.notes) boxInsideCanvas(note.box, size.width, size.height, `force note ${note.text.slice(0, 10)}`);
  const notes = layout.notes.map((n) => n.text).join(' ');
  ok(notes.includes('实验室系分量') && notes.includes('Lab-frame'),
    `the lab-frame convention note survives the export (got ${notes})`);
  ok(notes.includes('Fx') && notes.includes('Fy'), `component line-style legend survives (got ${notes})`);
  const marks = model.strips.map((s) => s.forceName).join('|');
  ok(marks.includes('[est]') || marks.includes('[measured]'), 'provenance marks still label every strip');
});

check('chart layout: a strip too short for its tick budget steps down instead of overlapping', () => {
  // A weight-like asymmetric range: the raw step (19.6/3 ≈ 6.5) rounds DOWN
  // the 1/2/5 ladder to 5, which would pack four labels into a band whose
  // height budgeted three. The layout must step down to wider ticks.
  const model = {
    kind: 'motion',
    series: [{ key: 'body:block-2', label: '方块甲 · body:block-2', rows: [] }],
    timeAxis: { unit: 's', min: 0, max: 12, ticks: niceTicks(0, 12, 5) },
    metrics: ['x', 'v', 'a', 'e'].map((key) => ({
      key, label: key.toUpperCase(), unit: 'm', min: -19.6, max: 0, ticks: [],
    })),
  };
  const layout = motionChartLayout(model, { width: 900, height: 300, dpr: 1, measure: stubMeasure(1) });
  const label = 'tight strip';
  const boxes = [];
  layout.strips.forEach((strip, i) => {
    ok(strip.ticks.length >= 2, `${label}: strip ${strip.key} keeps a two-tick ruler`);
    for (const k of strip.ticks) boxes.push({ box: k.box, what: `ch${i} tick ${k.text}` });
    for (const t of strip.titles) boxes.push({ box: t.box, what: `ch${i} title` });
  });
  assertBoxesDisjoint(boxes, 900, 300, label);
  ok(layout.strips[0].ticks.length === 2
    && layout.strips[0].ticks.map((k) => k.text).join(',') === '-10,0',
    `the down-rounded ladder steps down to wider ticks (got ${layout.strips[0].ticks.map((k) => k.text).join(',')})`);
});

/* ------------------------ physics: reset keeps body targets ------------------------ */

check('reset: an ordinary body target stays tracked and re-records under the same key', () => {
  const world = createWorld({ g: 9.8 });
  const a = addBall(world, { mass: 1, x: 0, y: 5, z: 0 });
  const b = addBall(world, { mass: 2, x: 2, y: 5, z: 0 });
  const force = addSensor(world, { kind: 'force', x: 0, y: 0, z: 2 });
  const motion = addSensor(world, { kind: 'motion', x: -4, y: 0, z: 0, range: 30 });
  addSensorTarget(world, force, a.id);
  addSensorTarget(world, force, b.id);
  addSensorTarget(world, motion, a.id);
  captureInitial(world);
  advance(world, 0.4);
  ok(force.samples.length > 0 && motion.samples.length > 0, 'both sensors recorded');
  resetWorld(world);
  ok(sensorTargets(force).length === 2, 'force sensor keeps its body targets after reset');
  ok(sensorTargets(motion).length === 1, 'motion sensor keeps its body target after reset');
  ok(force.samples.length === 0 && motion.samples.length === 0, 'reset clears the recorded samples');
  advance(world, 0.3);
  const forceKeys = new Set(force.samples.map((r) => r.key));
  ok(forceKeys.has(`body:${a.id}`) && forceKeys.has(`body:${b.id}`),
    'both body targets re-record under their own keys');
  ok(motion.samples.every((r) => r.key === `body:${a.id}`), 'motion target re-records under the same key');
});

/* ------------------------ physics: undo/redo of target changes ------------------------ */

/**
 * The lab's pushUndo stores (scene, selection, sensor records) before a
 * change; undo/redo swap that snapshot back. Simulating the exact stack
 * flow here (without the DOM) is the honest headless stand-in for the UI
 * buttons: same helpers, same call order.
 */
function replayUndoEntry(world, entry) {
  deserializeScene(world, entry.scene);
  if (entry.records) restoreSensorRecords(world, entry.records);
}

check('undo/redo: adding a target is undoable without touching the other histories', () => {
  const world = createWorld({ g: 9.8 });
  const a = addBall(world, { mass: 1, x: 0, y: 5, z: 0 });
  const b = addBall(world, { mass: 2, x: 2, y: 5, z: 0 });
  const sensor = addSensor(world, { kind: 'force', x: 0, y: 0, z: 2 });
  addSensorTarget(world, sensor, a.id);
  captureInitial(world);
  advance(world, 0.2);
  const rowsA = sensor.samples.filter((r) => r.key === `body:${a.id}`).length;
  ok(rowsA > 2, `A recorded ${rowsA} rows before the change`);

  // pushUndo('sensorTarget:...') exactly as the inspector pick path does.
  const history = createSceneHistory({ limit: 80 });
  pushSceneHistory(history, serializeScene(world), null, {
    key: `sensorTarget:${sensor.id}`,
    records: captureSensorRecords(world),
  });
  ok(addSensorTarget(world, sensor, b.id), 'target B added');
  advance(world, 0.2);
  const rowsBoth = sensor.samples.length;
  ok(rowsBoth > rowsA, 'both targets record after the add');

  // Undo: the pre-add scene has one target; A's rows come back intact.
  const undoEntry = takeUndo(history, serializeScene(world), null, captureSensorRecords(world));
  ok(undoEntry, 'undo entry exists');
  replayUndoEntry(world, undoEntry);
  const restored = world.sensors.find((s) => s.id === sensor.id);
  ok(sensorTargets(restored).length === 1 && sensorTargets(restored)[0].id === a.id,
    'undo removes only the added target');
  ok(restored.samples.filter((r) => r.key === `body:${a.id}`).length === rowsA,
    `A's rows survive the undo exactly (${rowsA})`);
  ok(restored.samples.every((r) => r.key === `body:${a.id}`), 'B rows are gone with B');

  // Redo: the post-add scene comes back with both targets and both histories.
  const redoEntry = takeRedo(history, serializeScene(world), null, captureSensorRecords(world));
  ok(redoEntry, 'redo entry exists');
  replayUndoEntry(world, redoEntry);
  const redone = world.sensors.find((s) => s.id === sensor.id);
  ok(sensorTargets(redone).length === 2, 'redo restores both targets');
  ok(redone.samples.length === rowsBoth, `redo restores both histories (${rowsBoth})`);
});

check('undo/redo: removing a target is undoable and redoable', () => {
  const world = createWorld({ g: 9.8 });
  const a = addBall(world, { mass: 1, x: 0, y: 5, z: 0 });
  const b = addBall(world, { mass: 2, x: 2, y: 5, z: 0 });
  const sensor = addSensor(world, { kind: 'motion', x: -4, y: 0, z: 0, range: 30 });
  addSensorTarget(world, sensor, a.id);
  addSensorTarget(world, sensor, b.id);
  captureInitial(world);
  advance(world, 0.2);
  const rowsA = sensor.samples.filter((r) => r.key === `body:${a.id}`).length;
  const rowsB = sensor.samples.filter((r) => r.key === `body:${b.id}`).length;
  ok(rowsA > 0 && rowsB > 0, 'both series recorded');

  const history = createSceneHistory({ limit: 80 });
  pushSceneHistory(history, serializeScene(world), null, {
    key: `sensorTargetRemove:${sensor.id}`,
    records: captureSensorRecords(world),
  });
  ok(removeSensorTarget(world, sensor, a.id), 'target A removed');
  ok(sensor.samples.every((r) => r.key !== `body:${a.id}`), 'A rows dropped by the removal');

  const undoEntry = takeUndo(history, serializeScene(world), null, captureSensorRecords(world));
  replayUndoEntry(world, undoEntry);
  const restored = world.sensors.find((s) => s.id === sensor.id);
  ok(sensorTargets(restored).length === 2, 'undo brings both targets back');
  ok(restored.samples.filter((r) => r.key === `body:${a.id}`).length === rowsA,
    `A's own history returns (${rowsA})`);
  ok(restored.samples.filter((r) => r.key === `body:${b.id}`).length === rowsB,
    `B's history was never touched (${rowsB})`);

  const redoEntry = takeRedo(history, serializeScene(world), null, captureSensorRecords(world));
  replayUndoEntry(world, redoEntry);
  const redone = world.sensors.find((s) => s.id === sensor.id);
  ok(sensorTargets(redone).length === 1 && sensorTargets(redone)[0].id === b.id,
    'redo removes A again');
  ok(redone.samples.filter((r) => r.key === `body:${b.id}`).length === rowsB,
    'B still untouched by the redo');
});

/* ------------------------ physics: cart-mounted launcher lifecycle ------------------------ */

check('cart-mounted launcher: fire → reset → refire keeps the launcher:<id> series', () => {
  const world = createWorld({ g: 9.8 });
  const cart = addCart(world, { mass: 1, x: 0, y: 1, z: 0 });
  const launcher = addLauncher(world, { x: 0, y: 1.2, z: 0, angle: 45, speed: 8 });
  ok(mountApparatus(world, launcher, { type: 'body', id: cart.id }), 'launcher mounted on the cart');
  updateMountedApparatus(world);
  const sensor = addSensor(world, { kind: 'motion', x: -3, y: 0, z: 2, range: 30 });
  addSensorTarget(world, sensor, launcher.id, { type: 'launcher' });
  const key = `launcher:${launcher.id}`;

  fireLauncher(world, launcher);
  captureInitial(world);
  advance(world, 0.3);
  const firstFlight = sensor.samples.filter((r) => r.key === key).length;
  ok(firstFlight > 0, `first flight recorded (${firstFlight} rows)`);

  resetWorld(world);
  ok(sensorTargets(sensor).some((t) => sensorTargetKey(t) === key), 'the mounted launcher target survives reset');
  ok(sensor.samples.length === 0, 'reset clears the samples');
  const live = getLauncher(world, launcher.id);
  ok(live && live.mount && live.mount.type === 'body' && live.mount.id === cart.id,
    'the cart mount survives reset');

  fireLauncher(world, live);
  advance(world, 0.25);
  const secondFlight = sensor.samples.filter((r) => r.key === key).length;
  ok(secondFlight > 0, `refire records under the same launcher:<id> key (${secondFlight} rows)`);
  ok(sensor.samples.every((r) => r.key === key), 'no other key appears');
});

/* ------------------------ physics: backwards compatibility ------------------------ */

check('compat: a v4 single-target motion scene migrates its target into the v5 targets list', () => {
  const world = createWorld({ g: 9.8 });
  const ball = addBall(world, { mass: 1, x: 1, y: 3, z: 0 });
  addSensor(world, { kind: 'motion', x: -4, y: 0, z: 0, range: 30, targetId: ball.id, targetType: 'body' });
  const saved = serializeScene(world);
  ok(saved.version === SCENE_VERSION, 'saved scenes are v5');
  ok(saved.sensors[0].targets.length === 1, 'v5 scenes carry the targets list');
  // Reconstruct a genuine v4 payload: single target fields, no targets array.
  const v4 = JSON.parse(JSON.stringify(saved));
  v4.version = 4;
  delete v4.sensors[0].targets;
  const migrated = migrateScene(v4);
  ok(migrated && migrated.version === SCENE_VERSION, 'v4 scene migrates to v5');
  ok(migrated.sensors[0].targets.length === 1, 'legacy targetId became targets[0]');
  ok(migrated.sensors[0].targets[0].id === ball.id, 'target id preserved');
  const world2 = createWorld({ g: 9.8 });
  ok(deserializeScene(world2, migrated), 'migrated scene loads');
  const sensor2 = world2.sensors[0];
  ok(sensor2 && sensorTargets(sensor2).length === 1, 'loaded sensor tracks one target');
  captureInitial(world2);
  advance(world2, 0.3);
  ok(sensor2.samples.length > 0, 'migrated sensor records after running');
  ok(sensor2.samples.every((r) => r.key === `body:${ball.id}`), 'migrated series keyed correctly');
});

check('compat: the legacy force-meter link survives save/load and still reads tension', () => {
  const world = createWorld({ g: 9.8 });
  const block = addBlock(world, { mass: 2, x: 0, y: 1, z: 0 });
  const surface = addSurface(world, { angleDeg: 0, muS: 0.6, muK: 0.4, length: 20, x: 0, y: 0, width: 3 });
  attachBodyToSurface(world, block, surface.id, { localX: 0, localZ: 0 });
  const meter = addLink(world, {
    a: { type: 'body', id: block.id },
    b: { type: 'anchor', x: 4, y: 1, z: 0 },
    k: 220,
    meter: true,
  });
  ok(meter && meter.meter === true, 'meter link created');
  captureInitial(world);
  advance(world, 0.3);
  const reading = linkReading(world, meter);
  ok(reading > 0, `meter reads the tension (${reading} N)`);
  const saved = serializeScene(world);
  ok(saved.links.some((l) => l.meter === true), 'meter link still in links after save');
  const world2 = createWorld({ g: 9.8 });
  ok(deserializeScene(world2, saved), 'scene with meter loads');
  const meter2 = world2.links.find((l) => l.meter === true);
  ok(meter2, 'meter link present after load (never silently dropped)');
  const tables = buildSensorTables(meter2);
  ok(tables && tables.kind === 'force' && tables.raw.columns.some((c) => c.key === 'force'),
    'meter tables still build');
});

check('compat: force sensors serialize their targets and reload them', () => {
  const world = createWorld({ g: 9.8 });
  const a = addBall(world, { mass: 1, x: 0, y: 5, z: 0 });
  const b = addBall(world, { mass: 2, x: 2, y: 5, z: 0 });
  const sensor = addSensor(world, { kind: 'force', x: 0, y: 0, z: 2 });
  addSensorTarget(world, sensor, a.id);
  addSensorTarget(world, sensor, b.id);
  const saved = serializeScene(world);
  const entry = saved.sensors.find((s) => s.id === sensor.id);
  ok(entry.targets.length === 2, 'both targets serialized');
  const world2 = createWorld({ g: 9.8 });
  ok(deserializeScene(world2, saved), 'scene loads');
  const sensor2 = world2.sensors.find((s) => s.id === sensor.id);
  ok(sensorTargets(sensor2).length === 2, 'targets restored');
  captureInitial(world2);
  advance(world2, 0.2);
  ok(sensor2.samples.filter((r) => r.key === `body:${a.id}`).length > 0, 'restored sensor records both bodies');
});

check('compat: addProjectile + force sensor on the flying ball works without an attachment', () => {
  const world = createWorld({ g: 9.8 });
  const ball = addProjectile(world, { x: 0, y: 6, z: 0, vx: 2, vy: 0, mass: 0.2 });
  const sensor = addSensor(world, { kind: 'force', x: 0, y: 0, z: 2 });
  addSensorTarget(world, sensor, ball.id);
  captureInitial(world);
  advance(world, 0.3);
  const row = forceRow(sensor, `body:${ball.id}`);
  ok(row, 'transient projectile sampled');
  const net = channelOf(row, 'net');
  near(net.fy, -0.2 * 9.8, 0.05, 'net = mg in flight');
});

/* ------------------------------ UI hooks ------------------------------ */

const labJs = readFileSync(fileURLToPath(new URL('../modules/physics/lab/index.js', import.meta.url)), 'utf8');
const labCss = readFileSync(fileURLToPath(new URL('../modules/physics/lab/lab.css', import.meta.url)), 'utf8');
const viewJs = readFileSync(fileURLToPath(new URL('../modules/physics/lab/view.js', import.meta.url)), 'utf8');

function expectIn(text, needle, label) {
  if (!text.includes(needle)) throw new Error(`${label}: missing ${needle}`);
}

function cssBlock(css, selector) {
  const at = css.indexOf(selector);
  if (at < 0) throw new Error(`css block not found: ${selector}`);
  const end = css.indexOf('}', at);
  return css.slice(at, end);
}

check('hooks: the palette offers the force sensor and keeps the meter link path', () => {
  expectIn(labJs, "['force', '受力传感器', 'Force sensor']", 'palette force sensor entry');
  expectIn(labJs, "kind === 'spring' || kind === 'nonlinear' || kind === 'meter'", 'meter link add path kept');
  expectIn(labJs, "meter: ['测力计', 'Force meter']", 'meter label kept for legacy scenes');
  expectIn(labJs, "force: ['受力传感器', 'Force sensor']", 'force sensor label');
});

check('hooks: applySensorTargetPick is defined exactly once and is the only pick path', () => {
  const defs = labJs.split('function applySensorTargetPick(').length - 1;
  if (defs !== 1) throw new Error(`expected exactly one applySensorTargetPick definition, found ${defs}`);
  expectIn(labJs, 'if (applySensorTargetPick(sensor, entity)) return;', 'outline pick routes through the shared function');
  expectIn(labJs, 'if (applySensorTargetPick(sensor, hit.entity)) return;', 'canvas pick routes through the shared function');
  // The canvas pick must never call the erasing single-target API.
  const handleAt = labJs.indexOf('function handlePick');
  const pickSection = labJs.slice(
    labJs.indexOf('if (pendingSensorTarget) {', handleAt),
    labJs.indexOf('if (pendingLink) {', handleAt),
  );
  if (pickSection.includes('setSensorTarget(')) {
    throw new Error('canvas pick still calls setSensorTarget');
  }
  expectIn(labJs, 'addSensorTarget(world, sensor, parsed.id, { type: parsed.type })', 'inspector add path');
  expectIn(labJs, 'removeSensorTarget(world, sensor, parsed.id, { type: parsed.type })', 'inspector remove path');
});

check('hooks: setSensorTarget is reserved for the motion auto control only', () => {
  const uses = labJs.split('setSensorTarget(world').length - 1;
  if (uses !== 1) throw new Error(`expected exactly one setSensorTarget call (the motion auto control), found ${uses}`);
  expectIn(labJs, 'setSensorTarget(world, sensor, null)', 'the remaining call restores auto mode');
});

check('hooks: the live free-body diagram is wired with names and an axis convention', () => {
  expectIn(labJs, "className: 'plab-fbd-canvas'", 'FBD canvas class');
  expectIn(labJs, "'aria-label': '受力分析图 · Free-body diagram'", 'FBD aria label');
  expectIn(labJs, 'function drawFbd(', 'drawFbd implemented');
  expectIn(labJs, 'bodyForceBreakdown(world, body)', 'FBD uses the named model decomposition');
  expectIn(labJs, 'x 右、y 上', 'lab-frame axis convention stated in the UI');
  expectIn(labJs, 'drawFbd(entity);', 'drawFbd runs from the live readout loop (run / pause / after end)');
  expectIn(labJs, 'fbdCanvas = null;', 'FBD canvas reset on inspector rebuild');
  const fbdRule = cssBlock(labCss, '.plab-fbd-canvas {');
  expectIn(fbdRule, 'background: var(--canvas-plot);', 'FBD paper colour');
  const fbdWrap = cssBlock(labCss, '.plab-fbd {');
  expectIn(fbdWrap, 'border-bottom: 1px solid var(--border-soft);', 'FBD uses hairlines, no cards');
});

check('hooks: force charts show direction, not just magnitude, and export per target', () => {
  expectIn(labJs, 'function drawForceGraphs(', 'force chart renderer');
  expectIn(labJs, 'function paintForceChart(', 'force chart painter shared by live and export');
  expectIn(labJs, 'for (const line of FORCE_LINES) {', 'chart plots every component line');
  expectIn(labJs, 'line.key === \'fz\' && !strip.hasZ', 'chart plots the z component when present');
  expectIn(labJs, '实验室系分量', 'axis convention on the chart');
  expectIn(labJs, "'data-action': 'graph-export'", 'chart export button');
  expectIn(labJs, "exportCanvas.toDataURL('image/png')", 'PNG export path');
  expectIn(labJs, 'Chart image downloaded for the viewed target', 'per-target export confirmed in status');
  expectIn(labJs, 'EXPORT_MOTION_SIZE', 'motion exports carry their own native size');
  expectIn(labJs, 'exportForceSize(model.strips.length)', 'force exports size a dedicated canvas');
  expectIn(labJs, 'motionChartLayout(model, {', 'motion export draws through the shared layout');
  expectIn(labJs, 'forceChartLayout(model, {', 'force export draws through the shared layout');
  expectIn(labJs, 'function paintMotionChart(', 'motion chart painter shared by live and export');
  const exportRule = cssBlock(labCss, '.plab-graph-export {');
  expectIn(exportRule, 'min-height: 44px', 'graph export meets the 44px touch target');
});

check('hooks: the force sensor reports its own live readouts and an honest formula', () => {
  expectIn(labJs, "'合力大小 · Net |ΣF|'", 'net magnitude readout');
  expectIn(labJs, "'最大单力 · Max single force'", 'max single force readout');
  expectIn(labJs, 'setLive(\'sensorPrimary\', entity.lastNetForce', 'net fed from lastNetForce');
  expectIn(labJs, 'setLive(\'sensorSpeed\', entity.lastMaxForce', 'max fed from lastMaxForce');
  expectIn(labJs, '\\\\sum \\\\vec F = m\\\\dfrac{\\\\Delta \\\\vec v}{h}', 'force formula uses \\dfrac');
  expectIn(labJs, '每个力通道都是仿真实际施加的力', 'provenance hint in More settings');
  expectIn(labJs, '方位角自 +x 向 +z', 'azimuth convention documented');
});

check('hooks: the 3D force arrows cover the rope/fan/motor/drag channels', () => {
  for (const key of ['rope:', 'fan:', 'motor:', 'drag:']) {
    expectIn(viewJs, key, `3D arrow pool covers ${key}`);
  }
  expectIn(viewJs, "key === 'spring' || key === 'rope' ? 'ok'", 'rope reuses the spring colour family');
});

/* ------------------------------ summary ------------------------------ */

console.log(results.join('\n'));
console.log(`\n${passed} passed, ${failed} failed (force sensor & multi-target)`);
if (failed) process.exit(1);
