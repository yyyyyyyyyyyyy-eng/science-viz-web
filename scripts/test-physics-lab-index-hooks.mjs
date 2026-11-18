#!/usr/bin/env node
/**
 * Source-level regression guards for the ballistic pendulum and balance
 * lever UI hooks in modules/physics/lab/index.js.
 * Run: node scripts/test-physics-lab-index-hooks.mjs
 *
 * The lab viewport is DOM/three.js driven and cannot run headless here, so
 * the palette / inspector / outline / delete / duplicate / scale wiring is
 * asserted against the index.js source, mirroring the layout guards in
 * test-physics-lab.mjs. The physics contracts the hooks rely on (arm
 * scaling re-clamps hangers, add-menu defaults survive a save-load round
 * trip) run for real against physics.mjs.
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import {
  addBallistic,
  addLever,
  createWorld,
  deserializeScene,
  findSceneEntity,
  serializeScene,
  setBallisticLength,
  setLeverArm,
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

function expectIn(text, needle, label) {
  if (!text.includes(needle)) throw new Error(`${label}: missing ${needle}`);
}

/** Slice the source between two literal markers (first occurrence). */
function section(text, startNeedle, endNeedle) {
  const at = text.indexOf(startNeedle);
  if (at < 0) throw new Error(`section start not found: ${startNeedle}`);
  const end = text.indexOf(endNeedle, at);
  if (end < 0) throw new Error(`section end not found: ${endNeedle}`);
  return text.slice(at, end);
}

const labJs = readFileSync(
  fileURLToPath(new URL('../modules/physics/lab/index.js', import.meta.url)),
  'utf8',
);

/* ----------------------------- palette ------------------------------ */

check('hooks: palette offers the ballistic pendulum under Launch & collisions', () => {
  const group = section(labJs, "title: label('发射与碰撞'", "title: label('连接与测量'");
  expectIn(group, "['ballistic', '冲击摆', 'Ballistic pendulum'],", 'launch group items');
  const add = section(labJs, "} else if (kind === 'ballistic') {", "} else if (kind === 'lever') {");
  expectIn(add, 'addBallistic(world, {', 'add menu case');
  expectIn(add, 'length: 1.2, bobMass: 0.6, radius: 0.22, damping: 0', 'add menu defaults');
});

check('hooks: palette offers the balance lever under Rotation & circles', () => {
  const group = section(labJs, "title: label('旋转与圆周'", "title: label('振动与角动量'");
  expectIn(group, "['lever', '杠杆天平', 'Balance lever'],", 'rotation group items');
  const add = section(labJs, "} else if (kind === 'lever') {", "} else if (kind === 'oscillator') {");
  expectIn(add, 'addLever(world, {', 'add menu case');
  expectIn(add, 'hangers: [{ d: -0.8, mass: 2 }, { d: 0.8, mass: 1 }, { d: 0.4, mass: 2 }]', 'add menu hangers');
});

check('hooks: both kinds claim placement footprints so new apparatus never overlap', () => {
  const extent = section(labJs, 'const APPARATUS_EXTENT = {', 'function apparatusBoxes()');
  expectIn(extent, 'ballistic: { halfX: 0.7, halfZ: 0.7 },', 'ballistic extent');
  expectIn(extent, 'lever: { halfX: 1.5, halfZ: 0.6 },', 'lever extent');
  const boxes = section(labJs, 'function apparatusBoxes() {', 'function placementClear(');
  expectIn(boxes, 'for (const b of world.ballistics) boxes.push', 'ballistic avoidance box');
  expectIn(boxes, 'for (const l of world.levers) boxes.push({ x: l.x, z: l.z, halfX: l.arm + 0.3', 'lever avoidance box');
});

/* -------------------------- labels & lookup ------------------------- */

check('hooks: kinds are labelled bilingually and resolvable by (type, id)', () => {
  expectIn(labJs, "ballisticPendulum: ['冲击摆', 'Ballistic pendulum'],", 'ZH_EN');
  expectIn(labJs, "lever: ['杠杆天平', 'Balance lever'],", 'ZH_EN');
  const lookup = section(labJs, 'function entityById(', 'function select(');
  expectIn(lookup, "if (type === 'ballisticPendulum') return world.ballistics.find", 'entityById ballistic');
  expectIn(lookup, "if (type === 'lever') return world.levers.find", 'entityById lever');
});

/* ------------------------ outline / delete -------------------------- */

check('hooks: new apparatus join the outliner and leave it when deleted', () => {
  const entities = section(labJs, 'function sceneEntities() {', 'function renderOutliner()');
  expectIn(entities, '...world.ballistics,', 'sceneEntities ballistic');
  expectIn(entities, '...world.levers,', 'sceneEntities lever');
  const empty = section(labJs, 'function isEmpty() {', 'function updateEmpty()');
  expectIn(empty, '&& world.ballistics.length === 0', 'isEmpty ballistic');
  expectIn(empty, '&& world.levers.length === 0', 'isEmpty lever');
  const del = section(labJs, 'function deleteEntity(', 'function captureDimensions(');
  expectIn(del, "world.ballistics = world.ballistics.filter((b) => b.id !== entity.id);", 'delete ballistic');
  expectIn(del, "world.levers = world.levers.filter((l) => l.id !== entity.id);", 'delete lever');
});

/* --------------------------- inspector ------------------------------ */

check('hooks: ballistic inspector exposes length / bob mass / damping', () => {
  const inspector = section(labJs, 'function buildInspector() {', 'function moreHeading(');
  expectIn(inspector, "testid: 'ballisticLength',", 'length slider');
  expectIn(inspector, 'setBallisticLength(world, entity, v);', 'length setter');
  expectIn(inspector, "testid: 'ballisticBobMass',", 'bob mass slider');
  expectIn(inspector, 'setBallisticBobMass(world, entity, v);', 'bob mass setter');
  expectIn(inspector, "testid: 'ballisticDamping',", 'damping slider');
  expectIn(inspector, 'setBallisticDamping(world, entity, v);', 'damping setter');
});

check('hooks: ballistic readouts spell the conservation story bilingually', () => {
  const inspector = section(labJs, 'function buildInspector() {', 'function moreHeading(');
  expectIn(inspector, "'最大摆角 · Max angle', 'ballisticMaxAngle'", 'max angle readout');
  expectIn(inspector, "'上升高度 · Rise height', 'ballisticRise'", 'rise readout');
  expectIn(inspector, "'推算速度 · Inferred speed', 'ballisticSpeed'", 'inferred speed readout');
  expectIn(inspector, "'捕获质量 · Caught mass', 'ballisticCatchMass'", 'caught mass readout');
  expectIn(inspector, "'动能损失比例 · KE loss fraction', 'ballisticKeLoss'", 'KE loss readout');
  expectIn(inspector, '用发射器向摆锤射出小球，由最大摆角反推射出速度。', 'zh hint');
  expectIn(inspector, 'Fire a ball into the catcher; the rise angle infers the launch speed.', 'en hint');
});

check('hooks: lever inspector exposes arm / beam mass / beam drop / damping', () => {
  const inspector = section(labJs, 'function buildInspector() {', 'function moreHeading(');
  expectIn(inspector, "testid: 'leverArm',", 'arm slider');
  expectIn(inspector, 'setLeverArm(world, entity, v);', 'arm setter');
  expectIn(inspector, "testid: 'leverBeamMass',", 'beam mass slider');
  expectIn(inspector, "testid: 'leverBeamDrop',", 'beam drop slider');
  expectIn(inspector, "testid: 'leverDamping',", 'damping slider');
});

check('hooks: lever hanger list edits d and mass per hanger with add / remove buttons', () => {
  const inspector = section(labJs, 'function buildInspector() {', 'function moreHeading(');
  expectIn(inspector, 'testid: `leverHanger${index}D`,', 'hanger distance slider');
  expectIn(inspector, 'testid: `leverHanger${index}Mass`,', 'hanger mass slider');
  expectIn(inspector, 'setLeverHanger(world, entity, index, { d: v });', 'hanger distance setter');
  expectIn(inspector, 'setLeverHanger(world, entity, index, { mass: v });', 'hanger mass setter');
  expectIn(inspector, 'min: -entity.arm,', 'hanger distance follows the arm');
  expectIn(inspector, '添加挂钩 · Add hanger', 'add hanger button');
  expectIn(inspector, '删除挂钩 · Remove hanger', 'remove hanger button');
  expectIn(inspector, 'addLeverHanger(world, entity, { d: 0.4, mass: 1 })', 'add hanger API');
  expectIn(inspector, 'removeLeverHanger(world, entity, entity.hangers.length - 1);', 'remove hanger API');
  expectIn(inspector, '挂钩最多 6 个。 · At most six hangers.', 'six-hanger cap message');
});

check('hooks: lever readouts report torques, tilt, rest angle and balance', () => {
  const inspector = section(labJs, 'function buildInspector() {', 'function moreHeading(');
  expectIn(inspector, "'左力矩 · Left torque', 'leverLeftTorque'", 'left torque readout');
  expectIn(inspector, "'右力矩 · Right torque', 'leverRightTorque'", 'right torque readout');
  expectIn(inspector, "'净力矩 · Net torque', 'leverNetTorque'", 'net torque readout');
  expectIn(inspector, "'当前倾角 · Angle', 'leverAngle'", 'angle readout');
  expectIn(inspector, "'预测平衡角 · Predicted rest angle', 'leverEquilibrium'", 'rest angle readout');
  expectIn(inspector, "'平衡状态 · Balance', 'leverBalanced'", 'balance readout');
});

check('hooks: live updates and the summary line use the shared readouts', () => {
  const live = section(labJs, 'function updateLive() {', '// Environment controls');
  expectIn(live, 'const r = ballisticReadout(world, entity);', 'ballistic readout call');
  expectIn(live, 'const r = leverReadout(world, entity);', 'lever readout call');
  expectIn(live, 'setLive(\'leverBalanced\', r.balanced ? \'已平衡 · Balanced\' : \'不平衡 · Unbalanced\');', 'balanced live text');
  const summaryBallistic = 'const br = ballisticReadout(world, entity);';
  expectIn(live, summaryBallistic, 'ballistic summary readout');
  expectIn(live, 'const lr = leverReadout(world, entity);', 'lever summary readout');
});

check('hooks: advanced panel adds radius / theta0 and cord / tilt controls', () => {
  const more = section(labJs, 'function buildMoreAdvanced() {', 'function isolatedSourceField(');
  expectIn(more, "testid: 'ballisticRadius',", 'ballistic radius');
  expectIn(more, "testid: 'ballisticTheta0',", 'ballistic initial angle');
  expectIn(more, 'resetBallistic(entity);', 'ballistic reset on theta0');
  expectIn(more, "testid: 'leverHang',", 'lever cord length');
  expectIn(more, "testid: 'leverTheta0',", 'lever initial tilt');
  expectIn(more, 'resetLever(entity);', 'lever reset on theta0');
});

check('hooks: visible math uses \\dfrac only', () => {
  if (labJs.includes('\\\\frac')) throw new Error('index.js renders a bare \\frac; use \\dfrac');
});

/* ------------------------ duplicate & scale ------------------------- */

check('hooks: duplicate copies both apparatus with their settings', () => {
  const dup = section(labJs, 'function duplicateSelected() {', 'function resetGraphs()');
  expectIn(dup, "entity.type === 'ballisticPendulum'", 'ballistic branch');
  expectIn(dup, 'copy = addBallistic(world, {', 'ballistic copy');
  expectIn(dup, 'radius: entity.radius, damping: entity.damping, theta0: entity.theta0,', 'ballistic settings');
  expectIn(dup, "entity.type === 'lever'", 'lever branch');
  expectIn(dup, 'copy = addLever(world, {', 'lever copy');
  expectIn(dup, 'hangers: entity.hangers.map((hg) => ({ ...hg })),', 'hanger copy');
});

check('hooks: gizmo and modal scaling resize length and arm', () => {
  const capture = section(labJs, 'function captureDimensions(', 'function applyScaleFrom(');
  expectIn(capture, 'arm: entity.arm,', 'captured arm');
  const scale = section(labJs, 'function applyScaleFrom(', 'function duplicateSelected()');
  expectIn(scale, "entity.type === 'ballisticPendulum'", 'ballistic branch');
  expectIn(scale, 'setBallisticLength(world, entity, (start.length || entity.length) * f);', 'ballistic scale');
  expectIn(scale, "entity.type === 'lever'", 'lever branch');
  expectIn(scale, 'setLeverArm(world, entity, (start.arm || entity.arm) * f);', 'lever scale');
});

/* -------------------------- live contracts -------------------------- */

check('hooks: lever arm scaling re-clamps hangers into the new half-arm', () => {
  const world = createWorld({ g: 9.8 });
  const lever = addLever(world, {
    id: 'lever', x: 0, y: 1.2, z: 0, arm: 1.2,
    hangers: [{ d: -0.9, mass: 2 }, { d: 0.9, mass: 1 }],
  });
  setLeverArm(world, lever, 0.5);
  if (lever.arm !== 0.5) throw new Error(`arm expected 0.5, got ${lever.arm}`);
  if (Math.abs(lever.hangers[0].d + 0.5) > 1e-12) throw new Error(`left hanger d expected -0.5, got ${lever.hangers[0].d}`);
  if (Math.abs(lever.hangers[1].d - 0.5) > 1e-12) throw new Error(`right hanger d expected 0.5, got ${lever.hangers[1].d}`);
});

check('hooks: ballistic length scaling clamps at the physical floor', () => {
  const world = createWorld({ g: 9.8 });
  const ballistic = addBallistic(world, { length: 1.2 });
  setBallisticLength(world, ballistic, 0.05);
  if (ballistic.length !== 0.2) throw new Error(`length expected 0.2, got ${ballistic.length}`);
});

check('hooks: add-menu defaults survive a save-load round trip and stay selectable', () => {
  const world = createWorld({ g: 9.8 });
  addBallistic(world, {
    id: 'ballistic-1', x: 0.5, y: 3.0, z: -0.4,
    length: 1.2, bobMass: 0.6, radius: 0.22, damping: 0,
  });
  addLever(world, {
    id: 'lever-1', x: 1.6, y: 1.2, z: 0.3,
    arm: 1.2, beamMass: 2.4, beamDrop: 0.18, damping: 4.5, hang: 0.4, theta0: 12,
    hangers: [{ d: -0.8, mass: 2 }, { d: 0.8, mass: 1 }, { d: 0.4, mass: 2 }],
  });
  const next = createWorld({ g: 9.8 });
  deserializeScene(next, serializeScene(world));
  const ballistic = findSceneEntity(next, 'ballisticPendulum', 'ballistic-1');
  const lever = findSceneEntity(next, 'lever', 'lever-1');
  if (!ballistic) throw new Error('reloaded ballistic pendulum is not selectable');
  if (!lever) throw new Error('reloaded lever is not selectable');
  if (ballistic.length !== 1.2 || ballistic.bobMass !== 0.6 || ballistic.radius !== 0.22) {
    throw new Error('reloaded ballistic parameters drifted');
  }
  if (lever.arm !== 1.2 || lever.beamMass !== 2.4 || lever.beamDrop !== 0.18 || lever.damping !== 4.5) {
    throw new Error('reloaded lever parameters drifted');
  }
  if (lever.hangers.length !== 3 || lever.hangers[0].d !== -0.8 || lever.hangers[0].mass !== 2) {
    throw new Error('reloaded hangers drifted');
  }
});

check('hooks: deleting the reloaded apparatus empties the scene again', () => {
  const world = createWorld({ g: 9.8 });
  addBallistic(world, { id: 'ballistic-1' });
  addLever(world, { id: 'lever-1' });
  const next = createWorld({ g: 9.8 });
  deserializeScene(next, serializeScene(world));
  next.ballistics = next.ballistics.filter((b) => b.id !== 'ballistic-1');
  next.levers = next.levers.filter((l) => l.id !== 'lever-1');
  if (findSceneEntity(next, 'ballisticPendulum', 'ballistic-1')) throw new Error('ballistic survives delete');
  if (findSceneEntity(next, 'lever', 'lever-1')) throw new Error('lever survives delete');
  if (next.ballistics.length !== 0 || next.levers.length !== 0) {
    throw new Error('scene arrays are not empty after delete');
  }
});

console.log(results.join('\n'));
console.log(`\n${passed} passed, ${failed} failed (index hooks)`);
if (failed) process.exit(1);
