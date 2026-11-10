/**
 * Headless physics core for the free-exploration physics lab.
 *
 * Rigid-body integration, collision detection and contact resolution are
 * provided by the vendored cannon-es engine. Static/kinetic friction,
 * apparatus constraints (incline/track, vertical loop, turntable and
 * horizontal circle), springs, applied forces and the force meter are
 * implemented here so the lab can expose separate mu_s / mu_k values.
 *
 * This file has no DOM dependency and is imported by scripts/test-physics-lab.mjs.
 */
import * as CANNON from '../../../vendor/cannon-es/cannon-es.js';
import {
  captureEMInitial,
  createEMWorld,
  deserializeEM,
  emEntityById,
  emSceneEntities,
  resetEM,
  serializeEM,
  stepEM,
} from './em/physics.mjs';

export const DEG = Math.PI / 180;
export const DEFAULT_H = 1 / 240;
const EPS = 1e-7;
const STATIC_SPEED = 1e-4;

/** Solver-grid / floor defaults. The lab table is deliberately boring. */
export const DEFAULT_GRID_STEP = 0.1;
export const DEFAULT_FLOOR_FRICTION = 0.5;
export const DEFAULT_FLOOR_RESTITUTION = 0;

const V = (x = 0, y = 0, z = 0) => new CANNON.Vec3(x, y, z);
const cloneV = (v) => new CANNON.Vec3(v.x, v.y, v.z);
const cloneQ = (q) => new CANNON.Quaternion(q.x, q.y, q.z, q.w);
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

/** Quantize a value to the nearest multiple of step (grid/angle assist). */
export function quantizeValue(value, step) {
  if (!Number.isFinite(value)) return value;
  const s = Math.abs(Number(step));
  if (!(s > 0)) return value;
  return Math.round(value / s) * s;
}

/** Quantize an angle in degrees to the current angle step (default 5°). */
export function quantizeAngle(deg, stepDeg = 5) {
  return quantizeValue(deg, stepDeg);
}

/**
 * Set the single static floor's contact pair and remember the values in the
 * scene. Friction is Coulomb μ, restitution e; both are documented defaults
 * (0.5 / 0) and are serialized with every scene.
 */
export function setFloorContact(world, { friction, restitution } = {}) {
  if (Number.isFinite(friction)) world.floorFriction = clamp(friction, 0, 2);
  if (Number.isFinite(restitution)) world.floorRestitution = clamp(restitution, 0, 1);
  if (world.groundContact) {
    world.groundContact.friction = world.floorFriction;
    world.groundContact.restitution = world.floorRestitution;
  }
  return { friction: world.floorFriction, restitution: world.floorRestitution };
}

/** Grid step used by both the visible GridHelper and the floor snap lattice. */
export function setGridStep(world, step) {
  const value = Number(step);
  if (Number.isFinite(value) && value > 0) world.gridStep = clamp(value, 0.01, 5);
  return world.gridStep;
}

function makeEngine(g) {
  const engine = new CANNON.World({ gravity: new CANNON.Vec3(0, -g, 0) });
  engine.broadphase = new CANNON.SAPBroadphase(engine);
  engine.allowSleep = false;
  engine.solver.iterations = 20;
  engine.defaultContactMaterial.friction = 0;
  engine.defaultContactMaterial.restitution = 0;
  engine.defaultContactMaterial.contactEquationStiffness = 1e8;
  engine.defaultContactMaterial.contactEquationRelaxation = 4;
  return engine;
}

export function createWorld({ g = 9.8, h = DEFAULT_H } = {}) {
  const engine = makeEngine(g);
  const bodyMaterial = new CANNON.Material('lab-body');
  const groundMaterial = new CANNON.Material('lab-ground');
  const bodyContact = new CANNON.ContactMaterial(bodyMaterial, bodyMaterial, {
    friction: 0,
    restitution: 0,
    contactEquationStiffness: 1e8,
    contactEquationRelaxation: 200,
  });
  engine.addContactMaterial(bodyContact);
  // Body ↔ floor uses its own documented contact pair. Without this pair the
  // engine falls back to the global default (friction 0), so a block on the
  // lab table would slide forever. The pair is exposed in More settings.
  const groundContact = new CANNON.ContactMaterial(bodyMaterial, groundMaterial, {
    friction: DEFAULT_FLOOR_FRICTION,
    restitution: DEFAULT_FLOOR_RESTITUTION,
    contactEquationStiffness: 1e8,
    contactEquationRelaxation: 4,
  });
  engine.addContactMaterial(groundContact);
  const ground = new CANNON.Body({
    mass: 0,
    shape: new CANNON.Plane(),
    material: groundMaterial,
  });
  ground.position.set(0, 0, 0);
  ground.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
  engine.addBody(ground);
  return {
    engine,
    ground,
    groundContact,
    floorFriction: DEFAULT_FLOOR_FRICTION,
    floorRestitution: DEFAULT_FLOOR_RESTITUTION,
    gridStep: DEFAULT_GRID_STEP,
    g,
    h,
    time: 0,
    accumulator: 0,
    nextId: 1,
    bodyMaterial,
    groundMaterial,
    bodyContact,
    surfaces: [],
    loops: [],
    turntables: [],
    hcircles: [],
    launchers: [],
    pulleys: [],
    barriers: [],
    pendulums: [],
    wedges: [],
    sensors: [],
    fans: [],
    oscillators: [],
    torsionPendulums: [],
    elevators: [],
    carriages: [],
    angularTables: [],
    rods: [],
    orbits: [],
    tunnels: [],
    bodies: [],
    links: [],
    events: [],
    pendingImpacts: [],
    thermal: 0,
    appliedWork: 0,
    driveWork: 0,
    initial: null,
    em: createEMWorld(),
  };
}

/** Rolling bodies use the same contact law as the cart. */
export function isRollingBody(body) {
  return !!body && (body.kind === 'cart' || body.kind === 'ball' || body.kind === 'cylinder');
}

function nextId(world, prefix) {
  return `${prefix}-${world.nextId++}`;
}

function assignId(world, prefix, id) {
  if (!id) return nextId(world, prefix);
  const match = /-(\d+)$/.exec(id);
  if (match) world.nextId = Math.max(world.nextId, Number(match[1]) + 1);
  return id;
}

/**
 * Keep the two friction coefficients physically ordered.
 * The lab UI uses this helper so the student cannot create mu_k > mu_s.
 */
export function clampMuPair(muS, muK) {
  const s = Math.max(0, Number.isFinite(muS) ? muS : 0);
  const k = Math.max(0, Number.isFinite(muK) ? muK : 0);
  return { muS: s, muK: Math.min(k, s) };
}

export function surfaceFrame(surface) {
  const n = surface.body.quaternion.vmult(V(0, 1, 0));
  const t = surface.body.quaternion.vmult(V(1, 0, 0));
  const b = surface.body.quaternion.vmult(V(0, 0, 1));
  return { n, t, b };
}

export function surfaceTopPoint(surface, localX = 0, localZ = 0) {
  const { n, t, b } = surfaceFrame(surface);
  const p = cloneV(surface.body.position);
  p.vadd(t.scale(localX), p);
  p.vadd(b.scale(localZ), p);
  p.vadd(n.scale(surface.thickness / 2), p);
  return p;
}

export function surfaceLocalPoint(surface, point) {
  const { n, t, b } = surfaceFrame(surface);
  const d = point.vsub(surface.body.position);
  return { x: d.dot(t), y: d.dot(n), z: d.dot(b) };
}

export function addSurface(world, opts = {}) {
  const {
    kind = 'incline',
    x = 0,
    y = 1.2,
    z = 0,
    angleDeg = 20,
    length = 8,
    width = 2.4,
    thickness = 0.18,
    muS = 0.5,
    muK = 0.35,
  } = opts;
  const body = new CANNON.Body({
    mass: 0,
    shape: new CANNON.Box(V(length / 2, thickness / 2, width / 2)),
  });
  body.position.set(x, y, z);
  body.quaternion.setFromEuler(0, 0, angleDeg * DEG);
  world.engine.addBody(body);
  const surface = {
    id: assignId(world, 'surface', opts.id),
    type: 'surface',
    kind,
    name: opts.name || '',
    body,
    angle: angleDeg,
    length,
    width,
    thickness,
    muS,
    muK,
    mount: opts.mount ? cloneMount(opts.mount) : null,
  };
  world.surfaces.push(surface);
  return surface;
}

export function addLoop(world, opts = {}) {
  const { x = 0, y = 2.6, z = 0, radius = 1.8, muS = 1.2, muK = 0.8 } = opts;
  const loop = {
    id: assignId(world, 'loop', opts.id),
    type: 'loop',
    name: opts.name || '',
    x,
    y,
    z,
    radius,
    muS,
    muK,
    mount: opts.mount ? cloneMount(opts.mount) : null,
  };
  world.loops.push(loop);
  return loop;
}

export function addTurntable(world, opts = {}) {
  const {
    x = 0,
    y = 0.62,
    z = 0,
    radius = 2,
    omega = 1.2,
    targetOmega = 1.2,
    torque = 0,
    I = 8,
    drive = 'target',
    muS = 0.5,
    muK = 0.35,
  } = opts;
  const body = new CANNON.Body({
    mass: 0,
    shape: new CANNON.Cylinder(radius, radius, 0.12, 28),
  });
  body.position.set(x, y, z);
  world.engine.addBody(body);
  const table = {
    id: assignId(world, 'turntable', opts.id),
    type: 'turntable',
    name: opts.name || '',
    body,
    x,
    y,
    z,
    radius,
    omega,
    targetOmega,
    torque,
    I,
    drive,
    muS,
    muK,
    angle: 0,
    frictionTorque: 0,
    mount: opts.mount ? cloneMount(opts.mount) : null,
  };
  world.turntables.push(table);
  return table;
}

export function addHCircle(world, opts = {}) {
  const { x = 0, z = 0, y = 0.1, radius = 2, muS = 0.55, muK = 0.35 } = opts;
  const circle = {
    id: assignId(world, 'hcircle', opts.id),
    type: 'hcircle',
    name: opts.name || '',
    x,
    y,
    z,
    radius,
    muS,
    muK,
    mount: opts.mount ? cloneMount(opts.mount) : null,
  };
  world.hcircles.push(circle);
  return circle;
}

function baseBody(world, kind, opts) {
  const {
    x = 0,
    y = 3,
    z = 0,
    mass = 1,
    v0 = 0,
    azimuth = 0,
    elevation = 0,
  } = opts;
  return {
    id: assignId(world, kind, opts.id),
    type: 'body',
    kind,
    name: opts.name || '',
    mass,
    cannon: null,
    halfHeight: 0.25,
    halfLength: 0.25,
    radius: 0.25,
    I: 0,
    v0,
    azimuth,
    elevation,
    appliedMag: 0,
    appliedAzimuth: 0,
    appliedElevation: 0,
    attachment: null,
    skid: null,
    rope: null,
    fan: null,
    drag: { model: 'none', b: 0, c: 0 },
    brake: false,
    motor: { on: false, target: 0, force: 2 },
    transient: false,
    createPos: V(x, y, z),
    diagnostics: {
      normal: 0,
      friction: 0,
      static: false,
      accel: 0,
      speed: 0,
      mode: 'free',
      requiredFriction: 0,
      contact: '',
      rolling: false,
      force: V(),
    },
  };
}

export function addBlock(world, opts = {}) {
  const b = baseBody(world, 'block', opts);
  const size = opts.size ?? 0.5;
  b.halfHeight = size / 2;
  b.halfLength = size / 2;
  b.radius = size / 2;
  b.size = size;
  const body = new CANNON.Body({
    mass: b.mass,
    material: world.bodyMaterial,
    shape: new CANNON.Box(V(size / 2, size / 2, size / 2)),
  });
  body.position.copy(b.createPos);
  body.fixedRotation = true;
  body.linearDamping = 0;
  body.angularDamping = 0;
  body.updateMassProperties();
  world.engine.addBody(body);
  b.cannon = body;
  b.I = 0;
  b.name = opts.name || b.name;
  b.brake = !!opts.brake;
  if (opts.motor) b.motor = { ...b.motor, ...opts.motor };
  if (opts.drag) b.drag = { ...b.drag, ...opts.drag };
  world.bodies.push(b);
  return b;
}

export function addCart(world, opts = {}) {
  const b = baseBody(world, 'cart', opts);
  const radius = opts.radius ?? 0.3;
  const width = opts.width ?? 0.55;
  b.halfHeight = radius;
  b.halfLength = 0.45;
  b.radius = radius;
  b.width = width;
  b.I = opts.I ?? 0.5 * b.mass * radius * radius;
  b.inertiaRatio = b.I / Math.max(1e-9, b.mass * radius * radius);
  const body = new CANNON.Body({ mass: b.mass, material: world.bodyMaterial });
  // A sphere keeps a single, stable contact point; the cart frame and
  // wheels are visual, while the chosen I is enforced about the rolling axis.
  body.addShape(new CANNON.Sphere(radius));
  body.position.copy(b.createPos);
  body.linearDamping = 0;
  body.angularDamping = 0;
  body.angularFactor.set(0, 0, 1);
  body.updateMassProperties();
  body.inertia.z = b.I;
  body.invInertia.z = b.I > 0 ? 1 / b.I : 0;
  body.updateInertiaWorld(true);
  world.engine.addBody(body);
  b.cannon = body;
  b.name = opts.name || b.name;
  b.brake = !!opts.brake;
  if (opts.motor) b.motor = { ...b.motor, ...opts.motor };
  if (opts.drag) b.drag = { ...b.drag, ...opts.drag };
  world.bodies.push(b);
  return b;
}

export function addBall(world, opts = {}) {
  const b = baseBody(world, 'ball', opts);
  const radius = opts.radius ?? 0.28;
  b.halfHeight = radius;
  b.halfLength = radius;
  b.radius = radius;
  b.I = opts.I ?? (2 / 5) * b.mass * radius * radius;
  b.inertiaRatio = b.I / Math.max(1e-9, b.mass * radius * radius);
  const body = new CANNON.Body({
    mass: b.mass,
    material: world.bodyMaterial,
    shape: new CANNON.Sphere(radius),
  });
  body.position.copy(b.createPos);
  body.linearDamping = 0;
  body.angularDamping = 0;
  body.angularFactor.set(0, 0, 1);
  body.updateMassProperties();
  body.inertia.z = b.I;
  body.invInertia.z = b.I > 0 ? 1 / b.I : 0;
  body.updateInertiaWorld(true);
  world.engine.addBody(body);
  b.cannon = body;
  b.name = opts.name || b.name;
  if (opts.drag) b.drag = { ...b.drag, ...opts.drag };
  world.bodies.push(b);
  return b;
}

export function addCylinder(world, opts = {}) {
  const b = baseBody(world, 'cylinder', opts);
  const radius = opts.radius ?? 0.3;
  const length = opts.length ?? 0.7;
  b.halfHeight = radius;
  b.halfLength = radius;
  b.radius = radius;
  b.width = length;
  b.I = opts.I ?? 0.5 * b.mass * radius * radius;
  b.inertiaRatio = b.I / Math.max(1e-9, b.mass * radius * radius);
  const body = new CANNON.Body({ mass: b.mass, material: world.bodyMaterial });
  const shape = new CANNON.Cylinder(radius, radius, length, 20);
  const axisToZ = new CANNON.Quaternion();
  axisToZ.setFromEuler(Math.PI / 2, 0, 0);
  body.addShape(shape, V(), axisToZ);
  body.position.copy(b.createPos);
  body.linearDamping = 0;
  body.angularDamping = 0;
  body.angularFactor.set(0, 0, 1);
  body.updateMassProperties();
  body.inertia.z = b.I;
  body.invInertia.z = b.I > 0 ? 1 / b.I : 0;
  body.updateInertiaWorld(true);
  world.engine.addBody(body);
  b.cannon = body;
  b.name = opts.name || b.name;
  if (opts.drag) b.drag = { ...b.drag, ...opts.drag };
  world.bodies.push(b);
  return b;
}

export function addBody(world, kind, opts = {}) {
  if (kind === 'cart') return addCart(world, opts);
  if (kind === 'ball') return addBall(world, opts);
  if (kind === 'cylinder') return addCylinder(world, opts);
  return addBlock(world, opts);
}

export function getBody(world, id) {
  return world.bodies.find((b) => b.id === id) || null;
}
export function getSurface(world, id) {
  return world.surfaces.find((s) => s.id === id) || null;
}
export function getLoop(world, id) {
  return world.loops.find((l) => l.id === id) || null;
}
export function getTurntable(world, id) {
  return world.turntables.find((t) => t.id === id) || null;
}
export function getHCircle(world, id) {
  return world.hcircles.find((c) => c.id === id) || null;
}

export function removeBody(world, body) {
  if (!body) return;
  world.engine.removeBody(body.cannon);
  world.bodies = world.bodies.filter((b) => b !== body);
  if (body.rope) body.rope = null;
  if (body.fan) body.fan = null;
  for (const apparatus of allMountableEntities(world)) {
    const mount = apparatus.mount;
    if (!mount) continue;
    if ((mount.type === 'body' || mount.targetType === 'body') && mount.id === body.id) {
      apparatus.mount = null;
    }
  }
}

export function loopPoint(loop, theta) {
  return V(loop.x + loop.radius * Math.sin(theta), loop.y - loop.radius * Math.cos(theta), loop.z);
}
export function loopTangent(theta) {
  return V(Math.cos(theta), Math.sin(theta), 0);
}
export function loopInward(theta) {
  return V(-Math.sin(theta), Math.cos(theta), 0);
}
export function tableSurfaceVelocity(table, point) {
  const rx = point.x - table.x;
  const rz = point.z - table.z;
  return V(-table.omega * rz, 0, table.omega * rx);
}
export function tableTopY(table) {
  return table.y + 0.06;
}

export function attachBodyToSurface(world, body, surfaceId, opts = {}) {
  const surface = getSurface(world, surfaceId);
  if (!surface) return false;
  body.skid = null;
  let localX = opts.localX;
  let localZ = opts.localZ ?? 0;
  if (localX == null) {
    const local = surfaceLocalPoint(surface, body.cannon.position);
    localX = local.x;
  }
  localX = clamp(localX, -surface.length / 2 + body.halfLength, surface.length / 2 - body.halfLength);
  localZ = clamp(localZ, -surface.width / 2 + 0.35, surface.width / 2 - 0.35);
  body.attachment = {
    type: 'surface',
    id: surface.id,
    localX,
    localZ,
  };
  body.cannon.type = CANNON.Body.DYNAMIC;
  body.cannon.fixedRotation = body.kind === 'block';
  body.cannon.angularFactor.set(0, 0, isRollingBody(body) ? 1 : 0);
  body.cannon.updateMassProperties();
  if (isRollingBody(body)) {
    body.cannon.inertia.z = body.I;
    body.cannon.invInertia.z = body.I > 0 ? 1 / body.I : 0;
    body.cannon.updateInertiaWorld(true);
  }
  repositionSurfaceBody(world, body);
  applyInitialVelocity(world, body);
  body.cannon.wakeUp();
  return true;
}

export function repositionSurfaceBody(world, body) {
  if (body.attachment?.type !== 'surface') return;
  const surface = getSurface(world, body.attachment.id);
  if (!surface) return;
  const { n } = surfaceFrame(surface);
  body.attachment.localX = clamp(
    body.attachment.localX,
    -surface.length / 2 + body.halfLength,
    surface.length / 2 - body.halfLength,
  );
  const top = surfaceTopPoint(surface, body.attachment.localX, body.attachment.localZ);
  top.vadd(n.scale(body.halfHeight), top);
  body.cannon.position.copy(top);
  body.cannon.quaternion.copy(surface.body.quaternion);
  body.cannon.velocity.setZero();
  body.cannon.angularVelocity.setZero();
  body.cannon.aabbNeedsUpdate = true;
}

export function attachBodyToLoop(world, body, loopId, opts = {}) {
  const loop = getLoop(world, loopId);
  if (!loop) return false;
  body.skid = null;
  let theta = opts.theta;
  if (theta == null) {
    const p = body.cannon.position;
    theta = Math.atan2(p.x - loop.x, -(p.y - loop.y));
  }
  body.attachment = { type: 'loop', id: loop.id, theta };
  body.cannon.type = CANNON.Body.DYNAMIC;
  body.cannon.fixedRotation = !isRollingBody(body);
  body.cannon.angularFactor.set(0, 0, isRollingBody(body) ? 1 : 0);
  body.cannon.updateMassProperties();
  if (isRollingBody(body)) {
    body.cannon.inertia.z = body.I;
    body.cannon.invInertia.z = body.I > 0 ? 1 / body.I : 0;
    body.cannon.updateInertiaWorld(true);
  }
  body.cannon.position.copy(loopPoint(loop, theta));
  body.cannon.quaternion.setFromEuler(0, 0, 0);
  applyInitialVelocity(world, body);
  body.cannon.wakeUp();
  return true;
}

export function attachBodyToTurntable(world, body, tableId, opts = {}) {
  const table = getTurntable(world, tableId);
  if (!table) return false;
  body.skid = null;
  let r = opts.r;
  let phi = opts.phi;
  if (r == null || phi == null) {
    const dx = body.cannon.position.x - table.x;
    const dz = body.cannon.position.z - table.z;
    r = Math.hypot(dx, dz);
    phi = Math.atan2(dz, dx);
    if (!Number.isFinite(r) || r < 0.15) r = table.radius * 0.55;
  }
  r = clamp(r, 0.15, table.radius - 0.1);
  body.attachment = {
    type: 'turntable',
    id: table.id,
    r,
    phi,
    stuck: body.v0 < 1e-6,
  };
  body.cannon.type = CANNON.Body.DYNAMIC;
  body.cannon.fixedRotation = true;
  body.cannon.angularFactor.set(0, 0, 0);
  body.cannon.updateMassProperties();
  body.cannon.position.set(table.x + r * Math.cos(phi), tableTopY(table) + body.halfHeight, table.z + r * Math.sin(phi));
  body.cannon.quaternion.setFromEuler(0, -phi, 0);
  applyInitialVelocity(world, body);
  body.cannon.wakeUp();
  return true;
}

export function attachBodyToHCircle(world, body, circleId, opts = {}) {
  const circle = getHCircle(world, circleId);
  if (!circle) return false;
  body.skid = null;
  let phi = opts.phi;
  if (phi == null) {
    phi = Math.atan2(body.cannon.position.z - circle.z, body.cannon.position.x - circle.x);
  }
  body.attachment = {
    type: 'hcircle',
    id: circle.id,
    phi,
    speed: (body.v0 || 0) * Math.cos((body.azimuth || 0) * DEG),
  };
  body.cannon.type = CANNON.Body.DYNAMIC;
  body.cannon.fixedRotation = true;
  body.cannon.angularFactor.set(0, 0, 0);
  body.cannon.updateMassProperties();
  body.cannon.position.set(
    circle.x + circle.radius * Math.cos(phi),
    circle.y + body.halfHeight + 0.01,
    circle.z + circle.radius * Math.sin(phi),
  );
  body.cannon.quaternion.setFromEuler(0, -phi, 0);
  applyInitialVelocity(world, body);
  body.cannon.wakeUp();
  return true;
}

/** Top-face point of the movable wedge in world coordinates. */
export function wedgeTopPoint(wedge, localX = 0, localZ = 0) {
  if (!wedge) return null;
  const lx = clamp(localX, -wedge.length / 2, wedge.length / 2);
  const yLocal = -wedge.centroidY
    + (lx + wedge.length / 2 + wedge.length / 6) * Math.tan(wedge.angle * DEG);
  const p = wedge.body.quaternion.vmult(V(lx, yLocal, clamp(localZ, -wedge.width / 2, wedge.width / 2)));
  p.vadd(wedge.body.position, p);
  return p;
}

/**
 * Seat a body on the wedge face. The block/cart rides the wedge rather than
 * being a free contact pair; that is the t114u replacement for the old
 * "contact-only" refusal.
 */
export function attachBodyToWedge(world, body, wedgeId, opts = {}) {
  const wedge = getWedge(world, wedgeId);
  if (!wedge) return false;
  body.skid = null;
  let localX = opts.localX;
  let localZ = opts.localZ ?? 0;
  if (localX == null) {
    const rel = wedge.body.quaternion.inverse().vmult(body.cannon.position.vsub(wedge.body.position));
    localX = rel.x;
    localZ = rel.z;
  }
  localX = clamp(localX, -wedge.length / 2 + body.halfLength, wedge.length / 2 - body.halfLength);
  localZ = clamp(localZ, -wedge.width / 2 + body.halfLength, wedge.width / 2 - body.halfLength);
  body.attachment = { type: 'wedge', id: wedge.id, localX, localZ };
  body.cannon.type = CANNON.Body.DYNAMIC;
  body.cannon.fixedRotation = true;
  body.cannon.angularFactor.set(0, 0, 0);
  body.cannon.updateMassProperties();
  repositionWedgeBody(world, body);
  body.cannon.wakeUp();
  return true;
}

function wedgeTopLocal(wedge, localX) {
  const x = clamp(localX, -wedge.length / 2, wedge.length / 2);
  return -wedge.centroidY + (x + wedge.length / 2 + wedge.length / 6) * Math.tan(wedge.angle * DEG);
}

export function repositionWedgeBody(world, body) {
  if (body.attachment?.type !== 'wedge') return;
  const wedge = getWedge(world, body.attachment.id);
  if (!wedge) return;
  const att = body.attachment;
  att.localX = clamp(att.localX, -wedge.length / 2 + body.halfLength, wedge.length / 2 - body.halfLength);
  att.localZ = clamp(att.localZ ?? 0, -wedge.width / 2 + body.halfLength, wedge.width / 2 - body.halfLength);
  const topY = wedgeTopLocal(wedge, att.localX);
  const theta = wedge.angle * DEG;
  const normal = wedge.body.quaternion.vmult(V(-Math.sin(theta), Math.cos(theta), 0));
  const local = V(att.localX, topY, att.localZ);
  const point = wedge.body.quaternion.vmult(local);
  point.vadd(wedge.body.position, point);
  point.vadd(normal.scale(body.halfHeight), point);
  body.cannon.position.copy(point);
  body.cannon.quaternion.copy(wedge.body.quaternion);
  body.cannon.velocity.copy(wedge.body.velocity);
  body.cannon.angularVelocity.setZero();
  body.cannon.aabbNeedsUpdate = true;
}

export function attachBodyToBody(world, body, carrierId, opts = {}) {
  const carrier = getBody(world, carrierId);
  if (!carrier || carrier === body) return false;
  body.skid = null;
  body.attachment = {
    type: 'body',
    id: carrier.id,
    offset: [opts.offsetX || 0, opts.offsetY ?? (carrier.halfHeight + body.halfHeight + 0.01), opts.offsetZ || 0],
  };
  body.cannon.type = CANNON.Body.DYNAMIC;
  body.cannon.fixedRotation = body.kind === 'block';
  body.cannon.angularFactor.set(0, 0, isRollingBody(body) ? 1 : 0);
  body.cannon.updateMassProperties();
  repositionCarriedBody(world, body);
  applyInitialVelocity(world, body);
  body.cannon.wakeUp();
  return true;
}

/** Seat a body on any apparatus that exposes a support point. */
export function attachBodyToApparatus(world, body, target, opts = {}) {
  if (!target?.type || !target.id) return false;
  body.skid = null;
  body.attachment = {
    type: 'apparatus',
    targetType: target.type,
    id: target.id,
    offset: [opts.offsetX || 0, opts.offsetY ?? body.halfHeight, opts.offsetZ || 0],
  };
  body.cannon.type = CANNON.Body.DYNAMIC;
  body.cannon.fixedRotation = body.kind === 'block';
  body.cannon.angularFactor.set(0, 0, isRollingBody(body) ? 1 : 0);
  body.cannon.updateMassProperties();
  repositionCarriedBody(world, body);
  applyInitialVelocity(world, body);
  body.cannon.wakeUp();
  return true;
}

export function repositionCarriedBody(world, body) {
  const att = body.attachment;
  if (!att) return;
  if (att.type === 'wedge') { repositionWedgeBody(world, body); return; }
  let carrier = null;
  if (att.type === 'body') carrier = getBody(world, att.id);
  else if (att.type === 'apparatus') carrier = findSceneEntity(world, att.targetType || att.type, att.id);
  if (!carrier) return;
  const base = entityPoint(carrier);
  const offset = att.offset || [0, 0, 0];
  if (carrier.cannon?.quaternion) {
    const local = carrier.cannon.quaternion.vmult(V(offset[0] || 0, offset[1] || 0, offset[2] || 0));
    base.vadd(local, base);
    body.cannon.quaternion.copy(carrier.cannon.quaternion);
  } else {
    base.y += offset[1] || 0;
    base.x += offset[0] || 0;
    base.z += offset[2] || 0;
  }
  body.cannon.position.copy(base);
  body.cannon.velocity.setZero();
  if (carrier.cannon?.velocity) body.cannon.velocity.copy(carrier.cannon.velocity);
  body.cannon.angularVelocity.setZero();
  body.cannon.aabbNeedsUpdate = true;
}

export function detachBody(world, body) {
  body.attachment = null;
  body.skid = null;
  body.cannon.type = CANNON.Body.DYNAMIC;
  body.cannon.fixedRotation = body.kind === 'block';
  body.cannon.angularFactor.set(0, 0, isRollingBody(body) ? 1 : 0);
  body.cannon.updateMassProperties();
  body.cannon.wakeUp();
}

/**
 * Rigidly seat a body on a generic carrier (cart deck, apparatus top, ...).
 * `mount` is a normal mount descriptor resolved by mountPoint.
 */
export function attachBodyToCarrier(world, body, carrierType, carrierId, mount) {
  if (!carrierType || !carrierId) return false;
  body.skid = null;
  body.attachment = {
    type: 'carrier',
    carrierType,
    id: carrierId,
    local: mount?.local ? [...mount.local] : (mount?.offset ? [...mount.offset] : [0, 0, 0]),
  };
  body.cannon.type = CANNON.Body.DYNAMIC;
  body.cannon.fixedRotation = true;
  body.cannon.angularFactor.set(0, 0, 0);
  body.cannon.updateMassProperties();
  repositionCarrierBody(world, body);
  body.cannon.wakeUp();
  return true;
}

export function repositionCarrierBody(world, body) {
  if (body.attachment?.type !== 'carrier') return;
  const att = body.attachment;
  const mount = { type: att.carrierType, id: att.id, offset: att.local };
  const point = resolveMountPoint(world, mount);
  if (!point) return;
  const carrier = findSceneEntity(world, att.carrierType, att.id);
  body.cannon.position.copy(point);
  if (carrier?.cannon?.quaternion) body.cannon.quaternion.copy(carrier.cannon.quaternion);
  const velocity = mountVelocity(world, mount, point);
  body.cannon.velocity.copy(velocity);
  body.cannon.angularVelocity.setZero();
  body.cannon.aabbNeedsUpdate = true;
}

export function applyInitialVelocity(world, body) {
  const az = (body.azimuth || 0) * DEG;
  const el = (body.elevation || 0) * DEG;
  const v0 = body.v0 || 0;
  const att = body.attachment;
  if (!att) {
    body.cannon.velocity.set(
      v0 * Math.cos(el) * Math.cos(az),
      v0 * Math.sin(el),
      v0 * Math.cos(el) * Math.sin(az),
    );
    body.cannon.angularVelocity.setZero();
    return;
  }
  if (att.type === 'surface') {
    const surface = getSurface(world, att.id);
    if (!surface) return;
    const { t, b } = surfaceFrame(surface);
    const vt = v0 * Math.cos(az);
    const vb = v0 * Math.sin(az);
    const vel = t.scale(vt);
    vel.vadd(b.scale(vb), vel);
    body.cannon.velocity.copy(vel);
    if (isRollingBody(body)) {
      body.cannon.angularVelocity.copy(b.scale(-vt / body.radius));
    } else {
      body.cannon.angularVelocity.setZero();
    }
    return;
  }
  if (att.type === 'loop') {
    const loop = getLoop(world, att.id);
    if (!loop) return;
    const speed = v0 * Math.cos(az);
    att.speed = speed;
    body.cannon.velocity.copy(loopTangent(att.theta).scale(speed));
    if (isRollingBody(body) && body.I > 0) {
      body.cannon.angularVelocity.set(0, 0, -speed / body.radius);
    } else {
      body.cannon.angularVelocity.setZero();
    }
    return;
  }
  if (att.type === 'turntable') {
    const table = getTurntable(world, att.id);
    if (!table) return;
    const p = body.cannon.position;
    if (v0 < 1e-6) {
      att.stuck = true;
      body.cannon.velocity.copy(tableSurfaceVelocity(table, p));
    } else {
      att.stuck = false;
      body.cannon.velocity.set(v0 * Math.cos(az), 0, v0 * Math.sin(az));
    }
    body.cannon.angularVelocity.setZero();
    return;
  }
  if (att.type === 'hcircle') {
    const circle = getHCircle(world, att.id);
    if (!circle) return;
    att.speed = v0 * Math.cos(az);
    const tangent = V(-Math.sin(att.phi), 0, Math.cos(att.phi));
    body.cannon.velocity.copy(tangent.scale(att.speed));
    body.cannon.angularVelocity.setZero();
    return;
  }
  if (att.type === 'wedge') {
    repositionWedgeBody(world, body);
    return;
  }
  if (att.type === 'carrier') {
    repositionCarrierBody(world, body);
    return;
  }
}

/* ------------------------------------------------------------------ */
/* Projectile launcher                                                */
/* ------------------------------------------------------------------ */

export function addLauncher(world, opts = {}) {
  const {
    x = 0,
    y = 0,
    z = 0,
    angle = 45,
    speed = 8,
    height = 1.2,
    azimuth = 0,
    mass = 0.2,
    radius = 0.09,
    drag = 'none',
    dragB = 0.4,
    dragC = 0.06,
  } = opts;
  const launcher = {
    id: assignId(world, 'launcher', opts.id),
    type: 'launcher',
    kind: 'launcher',
    name: opts.name || '',
    x,
    y,
    z,
    angle,
    speed,
    height,
    azimuth,
    mass,
    radius,
    drag,
    dragB,
    dragC,
    projectileId: null,
    flight: null,
    trail: [],
    trailLast: -1,
    target: { x: x, z: z },
    showTarget: true,
    mount: opts.mount ? cloneMount(opts.mount) : null,
  };
  world.launchers.push(launcher);
  launcher.target = launcherPrediction(world, launcher);
  return launcher;
}

export function launcherDirection(launcher) {
  const el = (launcher.angle || 0) * DEG;
  const az = (launcher.azimuth || 0) * DEG;
  return V(Math.cos(el) * Math.cos(az), Math.sin(el), Math.cos(el) * Math.sin(az));
}

export function launcherMuzzle(launcher) {
  const dir = launcherDirection(launcher);
  return V(
    launcher.x + dir.x * 0.52,
    launcher.y + launcher.height + dir.y * 0.52,
    launcher.z + dir.z * 0.52,
  );
}

/** Level-landing estimate used only for the initial target marker. */
export function launcherPrediction(world, launcher) {
  const theta = (launcher.angle || 0) * DEG;
  const az = (launcher.azimuth || 0) * DEG;
  const v = Math.max(0, launcher.speed || 0);
  const g = Math.max(1e-6, world.g);
  const h = Math.max(0, launcher.y + launcher.height);
  const vx = v * Math.cos(theta);
  const vy = v * Math.sin(theta);
  const t = (vy + Math.sqrt(Math.max(0, vy * vy + 2 * g * h))) / g;
  const range = vx * t;
  return {
    x: launcher.x + Math.cos(az) * range,
    z: launcher.z + Math.sin(az) * range,
  };
}

export function getLauncher(world, id) {
  return world.launchers.find((l) => l.id === id) || null;
}

export function clearLauncher(world, launcher) {
  if (!launcher) return;
  if (launcher.projectileId) {
    const body = getBody(world, launcher.projectileId);
    if (body) removeBody(world, body);
  }
  launcher.projectileId = null;
  launcher.flight = null;
  launcher.trail = [];
  launcher.trailLast = -1;
  launcher.target = launcherPrediction(world, launcher);
}

export function addProjectile(world, opts = {}) {
  const {
    x = 0,
    y = 2,
    z = 0,
    vx = 0,
    vy = 0,
    vz = 0,
    mass = 0.2,
    radius = 0.09,
    drag = 'none',
    dragB = 0,
    dragC = 0,
    launcherId = null,
  } = opts;
  const body = addBall(world, {
    mass: Math.max(0.01, mass),
    radius: Math.max(0.02, radius),
    x,
    y,
    z,
  });
  body.transient = true;
  body.launcherId = launcherId;
  body.drag = {
    model: drag,
    b: Math.max(0, dragB),
    c: Math.max(0, dragC),
  };
  body.cannon.fixedRotation = true;
  body.cannon.angularFactor.set(0, 0, 0);
  // Transient projectiles use the frictionless default material. Otherwise a
  // launch that starts exactly at y = radius takes a table-friction impulse.
  body.cannon.material = null;
  body.cannon.updateMassProperties();
  body.cannon.angularVelocity.setZero();
  body.cannon.position.set(x, y, z);
  body.cannon.velocity.set(vx, vy, vz);
  body.cannon.aabbNeedsUpdate = true;
  body.cannon.wakeUp();
  return body;
}

export function fireLauncher(world, launcher) {
  if (!launcher) return null;
  updateMountedApparatus(world);
  clearLauncher(world, launcher);
  const muzzle = launcherMuzzle(launcher);
  const dir = launcherDirection(launcher);
  const speed = Math.max(0, launcher.speed || 0);
  // A rigidly mounted launcher fires in the lab frame: v_ground = v_carrier + v_launch.
  const carrierV = mountVelocity(world, launcher.mount, muzzle);
  const body = addProjectile(world, {
    x: muzzle.x,
    y: muzzle.y,
    z: muzzle.z,
    vx: dir.x * speed + carrierV.x,
    vy: dir.y * speed + carrierV.y,
    vz: dir.z * speed + carrierV.z,
    mass: launcher.mass,
    radius: launcher.radius,
    drag: launcher.drag,
    dragB: launcher.dragB,
    dragC: launcher.dragC,
    launcherId: launcher.id,
  });
  launcher.projectileId = body.id;
  launcher.flight = {
    active: true,
    time0: world.time,
    x0: muzzle.x,
    y0: muzzle.y,
    z0: muzzle.z,
    maxHeight: 0,
    range: 0,
    flightTime: 0,
    landed: false,
    targetX: launcher.target.x,
    targetZ: launcher.target.z,
  };
  launcher.trail = [];
  launcher.trailLast = -1;
  world.events.push({ type: 'launch', launcherId: launcher.id, bodyId: body.id, time: world.time });
  return body;
}

function updateLauncher(world, launcher) {
  if (!launcher.projectileId) return;
  const body = getBody(world, launcher.projectileId);
  if (!body) {
    launcher.projectileId = null;
    launcher.flight = null;
    return;
  }
  const flight = launcher.flight;
  if (!flight || !flight.active) return;
  const p = body.cannon.position;
  const v = body.cannon.velocity;
  const t = world.time - flight.time0;
  flight.flightTime = Math.max(0, t);
  flight.range = Math.hypot(p.x - flight.x0, p.z - flight.z0);
  flight.maxHeight = Math.max(flight.maxHeight, Math.max(0, p.y - launcher.y));
  if (world.time - launcher.trailLast >= 0.03 || launcher.trailLast < 0) {
    launcher.trailLast = world.time;
    launcher.trail.push([p.x, p.y, p.z]);
    if (launcher.trail.length > 2500) launcher.trail.shift();
  }
  const groundY = launcher.y + body.radius;
  const landed = p.y <= groundY + 0.045 && v.y <= 0.25 && t > 0.04;
  if (landed || t > 25 || p.y < -8) {
    flight.active = false;
    flight.landed = true;
    // Extrapolate the last fraction of a step to the exact ground height so
    // the reported range is not biased by the detection skin.
    let targetX = p.x;
    let targetZ = p.z;
    let targetT = flight.flightTime;
    if (landed && v.y < -0.02 && p.y > groundY) {
      const dt = (p.y - groundY) / -v.y;
      targetX = p.x + v.x * dt;
      targetZ = p.z + v.z * dt;
      targetT = t + dt;
      flight.range = Math.hypot(targetX - flight.x0, targetZ - flight.z0);
      flight.flightTime = targetT;
    }
    flight.targetX = targetX;
    flight.targetZ = targetZ;
    launcher.target = { x: targetX, z: targetZ };
    world.events.push({
      type: 'landing',
      launcherId: launcher.id,
      bodyId: body.id,
      time: world.time,
      range: flight.range,
      maxHeight: flight.maxHeight,
      flightTime: flight.flightTime,
    });
  }
}

/* ------------------------------------------------------------------ */
/* Pulley and rope                                                    */
/* ------------------------------------------------------------------ */

export function addPulley(world, opts = {}) {
  const {
    x = 0,
    y = 2.7,
    z = 0,
    radius = 0.34,
    mass = 0.5,
    I = null,
    mode = 'atwood',
    muS = 0.5,
    muK = 0.35,
  } = opts;
  const pulley = {
    id: assignId(world, 'pulley', opts.id),
    type: 'pulley',
    kind: 'pulley',
    name: opts.name || '',
    x,
    y,
    z,
    radius: Math.max(0.12, radius),
    mass: Math.max(0, mass),
    I: I == null ? Math.max(0, mass) * 0.5 * Math.max(0.12, radius) ** 2 : Math.max(0, I),
    mode,
    muS,
    muK,
    aId: null,
    bId: null,
    tensionA: 0,
    tensionB: 0,
    slack: false,
    angle: 0,
    omega: 0,
    length: 0,
    mount: opts.mount ? cloneMount(opts.mount) : null,
  };
  world.pulleys.push(pulley);
  return pulley;
}

export function getPulley(world, id) {
  return world.pulleys.find((p) => p.id === id) || null;
}

export function attachBodyToPulley(world, body, pulleyId, side = 'a') {
  const pulley = getPulley(world, pulleyId);
  if (!pulley) return false;
  if (side === 'a') pulley.aId = body.id;
  else pulley.bId = body.id;
  body.rope = { pulleyId: pulley.id, side };
  // A rope endpoint is a free hanging body unless the student has already
  // seated it on a surface (table mode keeps that surface attachment).
  if (pulley.mode === 'atwood' && body.attachment?.type === 'surface') detachBody(world, body);
  const dx = side === 'a' ? -pulley.radius : pulley.radius;
  if (body.attachment?.type !== 'surface') {
    body.cannon.position.set(pulley.x + dx, Math.min(body.cannon.position.y, pulley.y - 0.8), pulley.z);
    body.cannon.quaternion.setFromEuler(0, 0, 0);
    body.cannon.velocity.setZero();
    body.cannon.angularVelocity.setZero();
    body.cannon.aabbNeedsUpdate = true;
  }
  pulley.length = Math.hypot(body.cannon.position.x - pulley.x, body.cannon.position.y - pulley.y);
  body.cannon.wakeUp();
  return true;
}

function ropeDirection(world, pulley, body, side) {
  if (pulley.mode === 'atwood') return V(0, 1, 0);
  if (side === 'b') return V(0, 1, 0);
  const p = body.cannon.position;
  const d = V(pulley.x - p.x, pulley.y - p.y, pulley.z - p.z);
  const len = d.length();
  if (len < 1e-6) return V(1, 0, 0);
  return d.scale(1 / len);
}

function holdHangingBody(world, pulley, body, side) {
  if (!body || body.attachment?.type === 'surface') return;
  const dx = side === 'a' ? -pulley.radius : pulley.radius;
  body.cannon.position.x = pulley.x + dx;
  body.cannon.position.z = pulley.z;
  body.cannon.velocity.x = 0;
  body.cannon.velocity.z = 0;
  body.cannon.quaternion.setFromEuler(0, 0, 0);
  body.cannon.angularVelocity.setZero();
}

function applyPulleyForces(world, pulley) {
  const a = pulley.aId ? getBody(world, pulley.aId) : null;
  const b = pulley.bId ? getBody(world, pulley.bId) : null;
  if (a) { a._ropeT = 0; a._ropeU = null; }
  if (b) { b._ropeT = 0; b._ropeU = null; }
  pulley.tensionA = 0;
  pulley.tensionB = 0;
  pulley.slack = false;
  if (!a || !b) return;
  const grounded = (body) => !body.attachment
    && body.cannon.position.y <= (body.halfHeight || 0.2) + 0.012
    && Math.abs(body.cannon.velocity.y) < 0.6;
  if (pulley.mode === 'atwood' && (grounded(a) || grounded(b))) {
    pulley.slack = true;
    return;
  }
  if (pulley.mode === 'atwood') {
    holdHangingBody(world, pulley, a, 'a');
    holdHangingBody(world, pulley, b, 'b');
  } else {
    holdHangingBody(world, pulley, b, 'b');
  }
  const uA = ropeDirection(world, pulley, a, 'a');
  const uB = ropeDirection(world, pulley, b, 'b');
  const extA = externalForceOn(world, a).vadd(V(0, -a.mass * world.g, 0));
  const extB = externalForceOn(world, b).vadd(V(0, -b.mass * world.g, 0));
  const FA = extA.dot(uA);
  const FB = extB.dot(uB);
  const R = Math.max(0.05, pulley.radius);
  const eff = a.mass + b.mass + (pulley.I > 0 ? pulley.I / (R * R) : 0);
  if (eff <= 1e-9) return;
  const qdd = (FA - FB) / eff;
  let TA = a.mass * qdd - FA;
  let TB = -b.mass * qdd - FB;
  if (TA < -1e-6 || TB < -1e-6) {
    // A rope cannot push. Let the slack rope fall free.
    pulley.slack = true;
    return;
  }
  TA = Math.max(0, TA);
  TB = Math.max(0, TB);
  pulley.tensionA = TA;
  pulley.tensionB = TB;
  if (TA > 0) a.cannon.applyForce(uA.scale(TA));
  if (TB > 0) b.cannon.applyForce(uB.scale(TB));
  a._ropeU = uA;
  b._ropeU = uB;
  a._ropeT = TA;
  b._ropeT = TB;
}

function projectPulley(world, pulley, h) {
  const a = pulley.aId ? getBody(world, pulley.aId) : null;
  const b = pulley.bId ? getBody(world, pulley.bId) : null;
  if (!a || !b || pulley.slack) {
    if (a) { a._ropeU = null; a._ropeT = 0; }
    if (b) { b._ropeU = null; b._ropeT = 0; }
    return;
  }
  const uA = ropeDirection(world, pulley, a, 'a');
  const uB = ropeDirection(world, pulley, b, 'b');
  const C = a.cannon.velocity.dot(uA) + b.cannon.velocity.dot(uB);
  const inv = 1 / Math.max(1e-9, a.mass) + 1 / Math.max(1e-9, b.mass);
  const j = -C / inv;
  a.cannon.velocity.vadd(uA.scale(j / a.mass), a.cannon.velocity);
  b.cannon.velocity.vadd(uB.scale(j / b.mass), b.cannon.velocity);
  if (pulley.mode === 'atwood') {
    holdHangingBody(world, pulley, a, 'a');
    holdHangingBody(world, pulley, b, 'b');
  } else {
    holdHangingBody(world, pulley, b, 'b');
  }
  const va = a.cannon.velocity.dot(uA);
  const vb = b.cannon.velocity.dot(uB);
  const omega = (va - vb) / (2 * pulley.radius);
  pulley.omega = omega;
  pulley.angle += omega * h;
}

export function setPulleyMass(world, pulley, mass) {
  const m = Math.max(0, mass);
  const ratio = pulley.mass > 0 ? pulley.I / pulley.mass : 0.5 * pulley.radius * pulley.radius;
  pulley.mass = m;
  if (pulley.I > 0) pulley.I = Math.max(0, ratio * m);
}

export function setPulleyRadius(world, pulley, radius) {
  const r = Math.max(0.1, Math.min(1.2, radius));
  const ratio = pulley.I / Math.max(1e-9, pulley.mass * pulley.radius * pulley.radius);
  pulley.radius = r;
  if (pulley.I > 0) pulley.I = ratio * pulley.mass * r * r;
}

/* ------------------------------------------------------------------ */
/* Barriers: wall and bumper                                          */
/* ------------------------------------------------------------------ */

export function addBarrier(world, opts = {}) {
  const {
    kind = 'wall',
    x = 0,
    y = 0,
    z = 0,
    width = 2.4,
    height = 1.2,
    thickness = 0.16,
    radius = 0.35,
    angleDeg = 0,
    restitution = 0.6,
  } = opts;
  const material = new CANNON.Material(`lab-barrier-${world.nextId}`);
  let body;
  if (kind === 'bumper') {
    body = new CANNON.Body({
      mass: 0,
      material,
      shape: new CANNON.Cylinder(radius, radius, height, 20),
    });
    body.position.set(x, y + height / 2, z);
  } else {
    body = new CANNON.Body({
      mass: 0,
      material,
      shape: new CANNON.Box(V(thickness / 2, height / 2, width / 2)),
    });
    body.position.set(x, y + height / 2, z);
  }
  body.quaternion.setFromEuler(0, angleDeg * DEG, 0);
  body.aabbNeedsUpdate = true;
  world.engine.addBody(body);
  const barrier = {
    id: assignId(world, kind === 'bumper' ? 'bumper' : 'wall', opts.id),
    type: 'barrier',
    kind,
    name: opts.name || '',
    body,
    x,
    y,
    z,
    width,
    height,
    thickness,
    radius,
    angle: angleDeg,
    e: Math.max(0, Math.min(1, restitution)),
    material,
    contactMaterial: null,
    lastImpact: null,
    lastImpactAt: -1,
    mount: opts.mount ? cloneMount(opts.mount) : null,
  };
  barrier.contactMaterial = new CANNON.ContactMaterial(world.bodyMaterial, material, {
    friction: 0,
    restitution: barrier.e,
    contactEquationStiffness: 1e8,
    contactEquationRelaxation: 200,
  });
  world.engine.addContactMaterial(barrier.contactMaterial);
  body.addEventListener('collide', (event) => {
    const other = event.body;
    if (!other || !other.mass) return;
    const dynamic = world.bodies.find((b) => b.cannon === other);
    if (!dynamic) return;
    world.pendingImpacts.push({
      barrierId: barrier.id,
      bodyId: dynamic.id,
      time: world.time,
      preV: cloneV(dynamic._preStepV || other.velocity),
    });
  });
  world.barriers.push(barrier);
  return barrier;
}

export function getBarrier(world, id) {
  return world.barriers.find((b) => b.id === id) || null;
}

export function setBarrierRestitution(world, barrier, e) {
  barrier.e = Math.max(0, Math.min(1, e));
  if (barrier.contactMaterial) barrier.contactMaterial.restitution = barrier.e;
}

export function setBarrierSize(world, barrier, opts = {}) {
  if (Number.isFinite(opts.width)) barrier.width = Math.max(0.2, opts.width);
  if (Number.isFinite(opts.height)) barrier.height = Math.max(0.2, opts.height);
  if (Number.isFinite(opts.thickness)) barrier.thickness = Math.max(0.04, opts.thickness);
  if (Number.isFinite(opts.radius)) barrier.radius = Math.max(0.1, opts.radius);
  barrier.body.shapes.length = 0;
  barrier.body.shapeOffsets.length = 0;
  barrier.body.shapeOrientations.length = 0;
  if (barrier.kind === 'bumper') {
    barrier.body.addShape(new CANNON.Cylinder(barrier.radius, barrier.radius, barrier.height, 20));
  } else {
    barrier.body.addShape(new CANNON.Box(V(barrier.thickness / 2, barrier.height / 2, barrier.width / 2)));
  }
  barrier.body.position.y = barrier.y + barrier.height / 2;
  barrier.body.updateBoundingRadius();
  barrier.body.aabbNeedsUpdate = true;
  barrier.body.wakeUp();
}

export function setBodyCollisionRestitution(world, e) {
  const value = Math.max(0, Math.min(1, e));
  world.engine.defaultContactMaterial.restitution = value;
  if (world.bodyContact) world.bodyContact.restitution = value;
}

function barrierNormal(barrier, body) {
  if (barrier.kind === 'bumper') {
    const p = body.cannon.position;
    const dx = p.x - barrier.x;
    const dz = p.z - barrier.z;
    const len = Math.hypot(dx, dz) || 1;
    return V(dx / len, 0, dz / len);
  }
  const n = V(1, 0, 0);
  return barrier.body.quaternion.vmult(n);
}

function processImpacts(world) {
  if (!world.pendingImpacts.length) return;
  const pending = world.pendingImpacts;
  world.pendingImpacts = [];
  for (const hit of pending) {
    const barrier = getBarrier(world, hit.barrierId);
    const body = getBody(world, hit.bodyId);
    if (!barrier || !body) continue;
    if (world.time - barrier.lastImpactAt < 0.06) continue;
    const n = barrierNormal(barrier, body);
    const vIn = hit.preV;
    const vOut = body.cannon.velocity;
    const vnIn = vIn.dot(n);
    const vnOut = vOut.dot(n);
    if (Math.abs(vnIn) < 0.15) continue;
    const pIn = vIn.scale(body.mass);
    const pOut = vOut.scale(body.mass);
    const keIn = 0.5 * body.mass * vIn.lengthSquared();
    const keOut = 0.5 * body.mass * vOut.lengthSquared();
    barrier.lastImpact = {
      bodyId: body.id,
      time: world.time,
      vIn: [vIn.x, vIn.y, vIn.z],
      vOut: [vOut.x, vOut.y, vOut.z],
      pIn: [pIn.x, pIn.y, pIn.z],
      pOut: [pOut.x, pOut.y, pOut.z],
      pInMag: pIn.length(),
      pOutMag: pOut.length(),
      keIn,
      keOut,
      measuredE: Math.abs(vnIn) > 1e-6 ? Math.max(0, -vnOut / vnIn) : 0,
    };
    barrier.lastImpactAt = world.time;
    world.events.push({ type: 'impact', barrierId: barrier.id, bodyId: body.id, time: world.time });
  }
}

/* ------------------------------------------------------------------ */
/* Pendulum                                                           */
/* ------------------------------------------------------------------ */

export function addPendulum(world, opts = {}) {
  const {
    x = 0,
    y = 3.2,
    z = 0,
    length = 1.6,
    mass = 1,
    amplitude = 20,
    radius = 0.16,
    conical = false,
  } = opts;
  const pendulum = {
    id: assignId(world, 'pendulum', opts.id),
    type: 'pendulum',
    kind: 'pendulum',
    name: opts.name || '',
    x,
    y,
    z,
    length: Math.max(0.2, length),
    mass: Math.max(0.01, mass),
    amplitude: Math.max(0.1, Math.min(89, amplitude)),
    radius: Math.max(0.04, radius),
    conical,
    theta: Math.max(0.1, Math.min(89, amplitude)) * DEG,
    omega: 0,
    phi: 0,
    phiDot: 0,
    measuredPeriod: 0,
    lastCross: null,
    tension: 0,
    mount: opts.mount ? cloneMount(opts.mount) : null,
  };
  world.pendulums.push(pendulum);
  return pendulum;
}

export function getPendulum(world, id) {
  return world.pendulums.find((p) => p.id === id) || null;
}

export function pendulumBob(pendulum) {
  if (pendulum.conical) {
    const a = pendulum.amplitude * DEG;
    return V(
      pendulum.x + pendulum.length * Math.sin(a) * Math.cos(pendulum.phi),
      pendulum.y - pendulum.length * Math.cos(a),
      pendulum.z + pendulum.length * Math.sin(a) * Math.sin(pendulum.phi),
    );
  }
  const theta = pendulum.theta;
  return V(
    pendulum.x + pendulum.length * Math.sin(theta),
    pendulum.y - pendulum.length * Math.cos(theta),
    pendulum.z,
  );
}

export function pendulumPeriod(pendulum, g = 9.8) {
  return 2 * Math.PI * Math.sqrt(pendulum.length / Math.max(1e-9, g));
}

function stepPendulum(world, pendulum, h) {
  if (pendulum.conical) {
    const a = pendulum.amplitude * DEG;
    const c = Math.cos(a);
    pendulum.theta = a;
    pendulum.omega = 0;
    pendulum.phiDot = Math.sqrt(world.g / Math.max(1e-6, pendulum.length * Math.max(0.02, c)));
    pendulum.phi += pendulum.phiDot * h;
    pendulum.tension = (pendulum.mass * world.g) / Math.max(0.02, c);
    return;
  }
  const L = Math.max(0.05, pendulum.length);
  const a1 = -(world.g / L) * Math.sin(pendulum.theta);
  const theta2 = pendulum.theta + pendulum.omega * h + 0.5 * a1 * h * h;
  const a2 = -(world.g / L) * Math.sin(theta2);
  const omega2 = pendulum.omega + 0.5 * (a1 + a2) * h;
  const prev = pendulum.theta;
  pendulum.theta = theta2;
  pendulum.omega = omega2;
  pendulum.tension = pendulum.mass * (world.g * Math.cos(theta2) + L * omega2 * omega2);
  if ((prev < 0 && theta2 >= 0) || (prev > 0 && theta2 <= 0)) {
    const cross = world.time + h;
    if (pendulum.lastCross != null) {
      // Zero crossings alternate; two half-periods make a full period.
      pendulum.measuredPeriod = 2 * (cross - pendulum.lastCross);
    }
    pendulum.lastCross = cross;
  }
}

export function resetPendulum(pendulum) {
  pendulum.theta = pendulum.amplitude * DEG;
  pendulum.omega = 0;
  pendulum.phi = 0;
  pendulum.phiDot = 0;
  pendulum.measuredPeriod = 0;
  pendulum.lastCross = null;
}

/* ------------------------------------------------------------------ */
/* Movable wedge                                                      */
/* ------------------------------------------------------------------ */

function wedgeGeometry({ length, angle, width }) {
  const L = Math.max(0.6, length);
  const W = Math.max(0.4, width);
  const H = Math.max(0.05, L * Math.tan(Math.max(1, Math.min(60, angle)) * DEG));
  const cx = L / 6;
  const cy = H / 3;
  const v = [
    [-L / 2 - cx, -cy, -W / 2], [L / 2 - cx, -cy, -W / 2], [L / 2 - cx, H - cy, -W / 2],
    [-L / 2 - cx, -cy, W / 2], [L / 2 - cx, -cy, W / 2], [L / 2 - cx, H - cy, W / 2],
  ].map(([x, y, z]) => V(x, y, z));
  const faces = [
    [0, 2, 1],
    [3, 4, 5],
    [0, 1, 4, 3],
    [1, 2, 5, 4],
    [0, 3, 5, 2],
  ];
  return { L, W, H, cx, cy, vertices: v, faces };
}

export function addWedge(world, opts = {}) {
  const {
    x = 0,
    baseY = 0,
    z = 0,
    angle = 25,
    length = 3,
    width = 1.6,
    mass = 4,
    muFloor = 0,
    blockMu = 0,
    restitution = 0,
  } = opts;
  const geo = wedgeGeometry({ length, angle, width });
  const shape = new CANNON.ConvexPolyhedron({
    vertices: geo.vertices,
    faces: geo.faces,
  });
  const body = new CANNON.Body({
    mass: Math.max(0.05, mass),
    material: world.bodyMaterial,
    shape,
  });
  body.position.set(x, baseY + geo.cy, z);
  body.linearDamping = 0;
  body.angularDamping = 0;
  body.angularFactor.set(0, 0, 0);
  body.fixedRotation = true;
  body.updateMassProperties();
  body.aabbNeedsUpdate = true;
  world.engine.addBody(body);
  const material = new CANNON.Material(`lab-wedge-${world.nextId}`);
  body.material = material;
  const wedge = {
    id: assignId(world, 'wedge', opts.id),
    type: 'wedge',
    kind: 'wedge',
    name: opts.name || '',
    body,
    x,
    baseY,
    z,
    angle,
    length: geo.L,
    width: geo.W,
    height: geo.H,
    centroidY: geo.cy,
    mass: Math.max(0.05, mass),
    muFloor,
    blockMu,
    restitution,
    floorMaterial: null,
    blockMaterial: null,
    mount: opts.mount ? cloneMount(opts.mount) : null,
  };
  wedge.floorMaterial = new CANNON.ContactMaterial(world.groundMaterial, material, {
    friction: Math.max(0, muFloor),
    restitution,
  });
  wedge.blockMaterial = new CANNON.ContactMaterial(world.bodyMaterial, material, {
    friction: Math.max(0, blockMu),
    restitution,
  });
  world.engine.addContactMaterial(wedge.floorMaterial);
  world.engine.addContactMaterial(wedge.blockMaterial);
  world.wedges.push(wedge);
  return wedge;
}

export function getWedge(world, id) {
  return world.wedges.find((w) => w.id === id) || null;
}

export function setWedgeFloorFriction(world, wedge, mu) {
  wedge.muFloor = Math.max(0, mu);
  if (wedge.floorMaterial) wedge.floorMaterial.friction = wedge.muFloor;
}

export function setWedgeBlockFriction(world, wedge, mu) {
  wedge.blockMu = Math.max(0, mu);
  if (wedge.blockMaterial) wedge.blockMaterial.friction = wedge.blockMu;
}

export function setWedgeMass(world, wedge, mass) {
  wedge.mass = Math.max(0.05, mass);
  wedge.body.mass = wedge.mass;
  wedge.body.updateMassProperties();
  wedge.body.wakeUp();
}

export function rebuildWedge(world, wedge, { angle, length, width } = {}) {
  const nextAngle = angle ?? wedge.angle;
  const nextLength = length ?? wedge.length;
  const nextWidth = width ?? wedge.width;
  const geo = wedgeGeometry({ length: nextLength, angle: nextAngle, width: nextWidth });
  const shape = new CANNON.ConvexPolyhedron({ vertices: geo.vertices, faces: geo.faces });
  wedge.body.shapes.length = 0;
  wedge.body.shapeOffsets.length = 0;
  wedge.body.shapeOrientations.length = 0;
  wedge.body.addShape(shape);
  const bottom = wedge.body.position.y - wedge.centroidY;
  wedge.angle = nextAngle;
  wedge.length = geo.L;
  wedge.width = geo.W;
  wedge.height = geo.H;
  wedge.centroidY = geo.cy;
  wedge.body.position.y = bottom + geo.cy;
  wedge.body.updateMassProperties();
  wedge.body.updateBoundingRadius();
  wedge.body.aabbNeedsUpdate = true;
  wedge.body.wakeUp();
}

/* ------------------------------------------------------------------ */
/* Photogate and motion sensor                                        */
/* ------------------------------------------------------------------ */

export function addSensor(world, opts = {}) {
  const {
    kind = 'photogate',
    x = 0,
    y = 0,
    z = 0,
    width = 1.8,
    height = 1.2,
    range = 8,
    face = 1,
  } = opts;
  const sensor = {
    id: assignId(world, kind === 'motion' ? 'motion' : 'gate', opts.id),
    type: 'sensor',
    kind,
    name: opts.name || '',
    x,
    y,
    z,
    width,
    height,
    range,
    face,
    lastSide: new Map(),
    crossings: [],
    samples: [],
    lastCrossing: null,
    lastDistance: null,
    lastSpeed: null,
    flashUntil: -1,
    sampleAt: -1,
    targetId: opts.targetId || null,
    sampleBodyId: null,
    series: 0,
    mount: opts.mount ? cloneMount(opts.mount) : null,
  };
  world.sensors.push(sensor);
  return sensor;
}

export function getSensor(world, id) {
  return world.sensors.find((s) => s.id === id) || null;
}

export function nearestSensorBody(world, sensor) {
  let best = null;
  let bestD = sensor.range;
  for (const body of world.bodies) {
    if (body.transient) continue;
    const p = body.cannon.position;
    if (Math.abs(p.z - sensor.z) > 2.4) continue;
    if (p.y < sensor.y - 1 || p.y > sensor.y + 2.2) continue;
    const d = (p.x - sensor.x) * sensor.face;
    if (d <= 0.05 || d >= bestD) continue;
    bestD = d;
    best = body;
  }
  return best;
}

/** Pick a motion-sensor target; null restores automatic nearest-in-line-of-sight. */
export function setSensorTarget(world, sensor, bodyId = null) {
  if (!sensor || sensor.kind !== 'motion') return false;
  const body = bodyId ? getBody(world, bodyId) : null;
  if (bodyId && !body) return false;
  sensor.targetId = body ? body.id : null;
  sensor.samples.length = 0;
  sensor.sampleAt = -1;
  sensor.sampleBodyId = null;
  sensor.lastDistance = null;
  sensor.lastSpeed = null;
  sensor.series += 1;
  return true;
}

function updateSensor(world, sensor, sampleTime, h) {
  if (sensor.kind === 'photogate') {
    for (const body of world.bodies) {
      if (body.transient && !body.launcherId) continue;
      const p = body.cannon.position;
      const side = Math.sign(p.x - sensor.x) || 1;
      const prev = sensor.lastSide.get(body.id);
      sensor.lastSide.set(body.id, side);
      if (prev == null || prev === side) continue;
      if (Math.abs(p.z - sensor.z) > sensor.width / 2 + (body.radius || 0.2)) continue;
      if (p.y < sensor.y - 0.3 || p.y > sensor.y + sensor.height) continue;
      const v = Math.abs(body.cannon.velocity.x);
      const crossing = {
        t: sampleTime,
        bodyId: body.id,
        x: p.x,
        y: p.y,
        z: p.z,
        v,
        direction: side,
      };
      sensor.crossings.push(crossing);
      if (sensor.crossings.length > 80) sensor.crossings.shift();
      sensor.lastCrossing = crossing;
      sensor.flashUntil = sampleTime + 0.18;
      sensor.samples.push({ t: sampleTime, x: p.x - sensor.x, v, a: 0 });
      if (sensor.samples.length > 1200) sensor.samples.shift();
    }
    return;
  }
  // Motion sensor: explicit target, or nearest body in the line of sight.
  let target = null;
  if (sensor.targetId) {
    target = getBody(world, sensor.targetId);
    if (!target) {
      sensor.targetId = null;
      sensor.lastDistance = null;
      sensor.lastSpeed = null;
    }
  }
  let signedDistance = null;
  if (!target) {
    target = nearestSensorBody(world, sensor);
    if (target) {
      const p = target.cannon.position;
      signedDistance = (p.x - sensor.x) * sensor.face;
    }
  } else {
    const p = target.cannon.position;
    signedDistance = (p.x - sensor.x) * sensor.face;
  }
  if (target) {
    const p = target.cannon.position;
    const v = target.cannon.velocity;
    const pre = target._preStepV;
    const invH = h > 0 ? 1 / h : 0;
    const ax = pre ? (v.x - pre.x) * invH : 0;
    const ay = pre ? (v.y - pre.y) * invH : 0;
    const az = pre ? (v.z - pre.z) * invH : 0;
    const speed = v.length();
    sensor.lastDistance = Math.abs(signedDistance);
    sensor.lastSpeed = v.x * sensor.face;
    if (sensor.sampleBodyId && sensor.sampleBodyId !== target.id) {
      // Changing target mid-run starts a clean series; never mix two bodies.
      sensor.samples.length = 0;
      sensor.sampleAt = -1;
      sensor.series += 1;
    }
    sensor.sampleBodyId = target.id;
    if (sampleTime - sensor.sampleAt >= 0.04 - 1e-9) {
      sensor.sampleAt = sampleTime;
      sensor.samples.push({
        t: sampleTime,
        bodyId: target.id,
        bodyName: target.name || '',
        x: p.x,
        y: p.y,
        z: p.z,
        vx: v.x,
        vy: v.y,
        vz: v.z,
        v: speed,
        speed,
        ax,
        ay,
        az,
        a: Math.hypot(ax, ay, az),
        ke: 0.5 * target.mass * speed * speed,
      });
      if (sensor.samples.length > 1200) sensor.samples.shift();
    }
  } else {
    sensor.lastDistance = null;
    sensor.lastSpeed = null;
  }
}

/* ------------------------------------------------------------------ */
/* Sensor table builders and CSV                                      */
/* ------------------------------------------------------------------ */

function tableColumn(key, zh, en, unit = '') {
  return { key, zh, en, unit };
}

function tableRowNumber(value) {
  return Number.isFinite(value) ? Number(value.toPrecision(6)) : null;
}

export function leastSquaresSlope(points, xKey, yKey) {
  const rows = (points || []).filter((p) => Number.isFinite(p[xKey]) && Number.isFinite(p[yKey]));
  const n = rows.length;
  if (n < 2) return NaN;
  const sx = rows.reduce((s, p) => s + p[xKey], 0);
  const sy = rows.reduce((s, p) => s + p[yKey], 0);
  const sxx = rows.reduce((s, p) => s + p[xKey] * p[xKey], 0);
  const sxy = rows.reduce((s, p) => s + p[xKey] * p[yKey], 0);
  const denom = n * sxx - sx * sx;
  return denom === 0 ? NaN : (n * sxy - sx * sy) / denom;
}

function motionColumns() {
  return [
    tableColumn('t', '时间', 'Time', 's'),
    tableColumn('x', 'x 位置', 'x Position', 'm'),
    tableColumn('y', 'y 高度', 'y Height', 'm'),
    tableColumn('z', 'z 深度', 'z Depth', 'm'),
    tableColumn('vx', 'vx 速度', 'vx Velocity', 'm/s'),
    tableColumn('vy', 'vy 速度', 'vy Velocity', 'm/s'),
    tableColumn('vz', 'vz 速度', 'vz Velocity', 'm/s'),
    tableColumn('speed', '速率', 'Speed', 'm/s'),
    tableColumn('ax', 'ax 加速度', 'ax Accel', 'm/s²'),
    tableColumn('ay', 'ay 加速度', 'ay Accel', 'm/s²'),
    tableColumn('az', 'az 加速度', 'az Accel', 'm/s²'),
    tableColumn('a', '加速度大小', '|a| Accel', 'm/s²'),
    tableColumn('ke', '动能', 'Kinetic energy', 'J'),
  ];
}

function motionSummaryColumns() {
  return [
    tableColumn('samples', '样本数', 'Samples'),
    tableColumn('duration', '时长', 'Duration', 's'),
    tableColumn('meanSpeed', '平均速率', 'Mean speed', 'm/s'),
    tableColumn('maxSpeed', '最大速率', 'Max speed', 'm/s'),
    tableColumn('minSpeed', '最小速率', 'Min speed', 'm/s'),
    tableColumn('meanA', '平均加速度', 'Mean |a|', 'm/s²'),
    tableColumn('maxA', '最大加速度', 'Max |a|', 'm/s²'),
    tableColumn('slopeX', 'x–t 斜率', 'x–t slope', 'm/s'),
    tableColumn('slopeVx', 'vx–t 斜率', 'vx–t slope', 'm/s²'),
  ];
}

function buildMotionTables(sensor) {
  const samples = sensor.samples || [];
  const rawRows = samples.map((row) => ({
    t: tableRowNumber(row.t),
    x: tableRowNumber(row.x),
    y: tableRowNumber(row.y),
    z: tableRowNumber(row.z),
    vx: tableRowNumber(row.vx ?? row.v ?? 0),
    vy: tableRowNumber(row.vy ?? 0),
    vz: tableRowNumber(row.vz ?? 0),
    speed: tableRowNumber(row.speed ?? row.v ?? 0),
    ax: tableRowNumber(row.ax ?? 0),
    ay: tableRowNumber(row.ay ?? 0),
    az: tableRowNumber(row.az ?? 0),
    a: tableRowNumber(row.a ?? 0),
    ke: tableRowNumber(row.ke ?? 0),
  }));
  const speeds = rawRows.map((r) => r.speed).filter(Number.isFinite);
  const accels = rawRows.map((r) => r.a).filter(Number.isFinite);
  const firstT = rawRows[0]?.t;
  const lastT = rawRows[rawRows.length - 1]?.t;
  const summaryRow = {
    samples: rawRows.length,
    duration: tableRowNumber(Number.isFinite(firstT) && Number.isFinite(lastT) ? lastT - firstT : 0),
    meanSpeed: tableRowNumber(speeds.length ? speeds.reduce((a, b) => a + b, 0) / speeds.length : 0),
    maxSpeed: tableRowNumber(speeds.length ? Math.max(...speeds) : 0),
    minSpeed: tableRowNumber(speeds.length ? Math.min(...speeds) : 0),
    meanA: tableRowNumber(accels.length ? accels.reduce((a, b) => a + b, 0) / accels.length : 0),
    maxA: tableRowNumber(accels.length ? Math.max(...accels) : 0),
    slopeX: tableRowNumber(leastSquaresSlope(rawRows, 't', 'x')),
    slopeVx: tableRowNumber(leastSquaresSlope(rawRows, 't', 'vx')),
  };
  return {
    kind: 'motion',
    raw: { titleZh: '原始时间序列', titleEn: 'Raw time series', columns: motionColumns(), rows: rawRows },
    summary: { titleZh: '统计摘要', titleEn: 'Summary & derived', columns: motionSummaryColumns(), rows: [summaryRow] },
  };
}

function buildPhotogateTables(sensor) {
  const columns = [
    tableColumn('t', '时间', 'Time', 's'),
    tableColumn('v', '速度', 'Speed', 'm/s'),
    tableColumn('x', 'x 位置', 'x Position', 'm'),
    tableColumn('body', '物体', 'Body'),
  ];
  const crossings = sensor.crossings || [];
  const rawRows = crossings.map((c) => ({
    t: tableRowNumber(c.t),
    v: tableRowNumber(c.v),
    x: tableRowNumber(c.x),
    body: c.bodyId || '',
  }));
  const summaryColumns = [
    tableColumn('index', '序号', 'Index'),
    tableColumn('t', '时间', 'Time', 's'),
    tableColumn('dt', '间隔 Δt', 'Interval Δt', 's'),
    tableColumn('v', '速度', 'Speed', 'm/s'),
    tableColumn('body', '物体', 'Body'),
  ];
  const summaryRows = crossings.map((c, i) => ({
    index: i + 1,
    t: tableRowNumber(c.t),
    dt: tableRowNumber(i ? c.t - crossings[i - 1].t : 0),
    v: tableRowNumber(c.v),
    body: c.bodyId || '',
  }));
  return {
    kind: 'photogate',
    raw: { titleZh: '每次通过', titleEn: 'Crossing events', columns, rows: rawRows },
    summary: { titleZh: '间隔摘要', titleEn: 'Interval summary', columns: summaryColumns, rows: summaryRows },
  };
}

function buildForceTables(link) {
  const columns = [
    tableColumn('t', '时间', 'Time', 's'),
    tableColumn('force', '力', 'Force', 'N'),
  ];
  const samples = link.samples || [];
  const rawRows = samples.map((row) => ({
    t: tableRowNumber(row.t),
    force: tableRowNumber(row.force),
  }));
  const forces = rawRows.map((r) => r.force).filter(Number.isFinite);
  const firstT = rawRows[0]?.t;
  const lastT = rawRows[rawRows.length - 1]?.t;
  const summaryColumns = [
    tableColumn('samples', '样本数', 'Samples'),
    tableColumn('duration', '时长', 'Duration', 's'),
    tableColumn('meanForce', '平均力', 'Mean force', 'N'),
    tableColumn('minForce', '最小力', 'Min force', 'N'),
    tableColumn('maxForce', '最大力', 'Max force', 'N'),
    tableColumn('slope', 'F–t 斜率', 'F–t slope', 'N/s'),
  ];
  const summaryRow = {
    samples: rawRows.length,
    duration: tableRowNumber(Number.isFinite(firstT) && Number.isFinite(lastT) ? lastT - firstT : 0),
    meanForce: tableRowNumber(forces.length ? forces.reduce((a, b) => a + b, 0) / forces.length : 0),
    minForce: tableRowNumber(forces.length ? Math.min(...forces) : 0),
    maxForce: tableRowNumber(forces.length ? Math.max(...forces) : 0),
    slope: tableRowNumber(leastSquaresSlope(rawRows, 't', 'force')),
  };
  return {
    kind: 'force',
    raw: { titleZh: '原始时间序列', titleEn: 'Raw time series', columns, rows: rawRows },
    summary: { titleZh: '统计摘要', titleEn: 'Summary & derived', columns: summaryColumns, rows: [summaryRow] },
  };
}

function buildBodyGraphTables(samples) {
  const columns = [
    tableColumn('t', '时间', 'Time', 's'),
    tableColumn('x', 'x 位置', 'x Position', 'm'),
    tableColumn('v', '速率', 'Speed', 'm/s'),
    tableColumn('a', '加速度', 'Accel', 'm/s²'),
    tableColumn('e', '能量', 'Energy', 'J'),
  ];
  const rawRows = samples.map((row) => ({
    t: tableRowNumber(row.t),
    x: tableRowNumber(row.x),
    v: tableRowNumber(row.v),
    a: tableRowNumber(row.a),
    e: tableRowNumber(row.e),
  }));
  const xs = rawRows.map((r) => r.x).filter(Number.isFinite);
  const summaryColumns = [
    tableColumn('samples', '样本数', 'Samples'),
    tableColumn('duration', '时长', 'Duration', 's'),
    tableColumn('minX', '最小 x', 'Min x', 'm'),
    tableColumn('maxX', '最大 x', 'Max x', 'm'),
    tableColumn('slopeX', 'x–t 斜率', 'x–t slope', 'm/s'),
  ];
  const firstT = rawRows[0]?.t;
  const lastT = rawRows[rawRows.length - 1]?.t;
  const summaryRow = {
    samples: rawRows.length,
    duration: tableRowNumber(Number.isFinite(firstT) && Number.isFinite(lastT) ? lastT - firstT : 0),
    minX: tableRowNumber(xs.length ? Math.min(...xs) : 0),
    maxX: tableRowNumber(xs.length ? Math.max(...xs) : 0),
    slopeX: tableRowNumber(leastSquaresSlope(rawRows, 't', 'x')),
  };
  return {
    kind: 'body',
    raw: { titleZh: '原始时间序列', titleEn: 'Raw time series', columns, rows: rawRows },
    summary: { titleZh: '统计摘要', titleEn: 'Summary & derived', columns: summaryColumns, rows: [summaryRow] },
  };
}

/**
 * Build both required table formats for a logging source:
 * a motion/photogate sensor, a force-meter link, or an array of body samples.
 */
export function buildSensorTables(source) {
  if (Array.isArray(source)) return buildBodyGraphTables(source);
  if (!source) return null;
  if (source.type === 'sensor') {
    return source.kind === 'photogate' ? buildPhotogateTables(source) : buildMotionTables(source);
  }
  if (source.type === 'link' || source.meter) return buildForceTables(source);
  return null;
}

export function tableToCsv(table) {
  if (!table || !table.columns) return '';
  const header = table.columns.map((c) => `${c.zh} · ${c.en}${c.unit ? ` (${c.unit})` : ''}`);
  const rows = (table.rows || []).map((row) => table.columns.map((c) => {
    const value = row[c.key];
    return value == null ? '' : value;
  }));
  return [header, ...rows].map((cells) => cells.map((cell) => {
    const text = String(cell);
    return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
  }).join(',')).join('\n');
}

/* ------------------------------------------------------------------ */
/* Fan attachment                                                     */
/* ------------------------------------------------------------------ */

export function addFan(world, opts = {}) {
  const { bodyId = null, thrust = 3, on = true, azimuth = 0, elevation = 0, x = null, y = null, z = null } = opts;
  const fan = {
    id: assignId(world, 'fan', opts.id),
    type: 'fan',
    kind: 'fan',
    name: opts.name || '',
    bodyId,
    x: x ?? 0,
    y: y ?? 0,
    z: z ?? 0,
    thrust: Math.max(0, thrust),
    on: !!on,
    azimuth,
    elevation,
    spin: 0,
    mount: opts.mount ? cloneMount(opts.mount) : null,
  };
  world.fans.push(fan);
  const body = bodyId ? getBody(world, bodyId) : null;
  if (body) {
    body.fan = fan;
    if (x == null) fan.x = body.cannon.position.x - 0.55;
    if (y == null) fan.y = body.cannon.position.y + 0.3;
    if (z == null) fan.z = body.cannon.position.z;
  }
  return fan;
}

export function getFan(world, id) {
  return world.fans.find((f) => f.id === id) || null;
}

export function fanForce(fan) {
  if (!fan || !fan.on || fan.thrust <= 0) return V();
  const az = (fan.azimuth || 0) * DEG;
  const el = (fan.elevation || 0) * DEG;
  return V(
    fan.thrust * Math.cos(el) * Math.cos(az),
    fan.thrust * Math.sin(el),
    fan.thrust * Math.cos(el) * Math.sin(az),
  );
}

export function setFanBody(world, fan, bodyId) {
  const prev = fan.bodyId ? getBody(world, fan.bodyId) : null;
  if (prev && prev.fan === fan) prev.fan = null;
  fan.bodyId = bodyId;
  const body = bodyId ? getBody(world, bodyId) : null;
  if (body) body.fan = fan;
}

/* ------------------------------------------------------------------ */
/* Drag forces                                                        */
/* ------------------------------------------------------------------ */

export function dragForce(body) {
  const drag = body?.drag;
  if (!drag || drag.model === 'none') return V();
  const v = body.cannon.velocity;
  const speed = v.length();
  if (speed < 1e-9) return V();
  if (drag.model === 'linear') return v.scale(-Math.max(0, drag.b || 0));
  if (drag.model === 'quadratic') {
    return v.scale(-Math.max(0, drag.c || 0) * speed);
  }
  return V();
}

function applyDragForces(world) {
  for (const body of world.bodies) {
    const f = dragForce(body);
    if (f.lengthSquared() > 0) body.cannon.applyForce(f);
  }
}

export function nearestAttachment(world, point, { maxDistance = 3.5, excludeBodyId = null } = {}) {
  const candidates = [];
  for (const surface of world.surfaces) {
    const local = surfaceLocalPoint(surface, point);
    if (Math.abs(local.x) > surface.length / 2 + 0.3) continue;
    if (Math.abs(local.z) > surface.width / 2 + 0.3) continue;
    const d = Math.abs(local.y - surface.thickness / 2);
    if (d <= maxDistance) {
      candidates.push({
        score: d,
        type: 'surface',
        id: surface.id,
        localX: clamp(local.x, -surface.length / 2 + 0.3, surface.length / 2 - 0.3),
        localZ: clamp(local.z, -surface.width / 2 + 0.4, surface.width / 2 - 0.4),
      });
    }
  }
  for (const loop of world.loops) {
    const dx = point.x - loop.x;
    const dy = point.y - loop.y;
    const dz = point.z - loop.z;
    const radial = Math.hypot(dx, dy);
    const score = Math.abs(radial - loop.radius) + Math.abs(dz);
    if (score <= maxDistance) {
      candidates.push({
        score,
        type: 'loop',
        id: loop.id,
        theta: Math.atan2(dx, -dy),
      });
    }
  }
  for (const table of world.turntables) {
    const dx = point.x - table.x;
    const dz = point.z - table.z;
    const r = Math.hypot(dx, dz);
    if (r > table.radius - 0.1) continue;
    const dy = Math.abs(point.y - (tableTopY(table) + 0.3));
    if (dy <= maxDistance) {
      candidates.push({
        score: dy,
        type: 'turntable',
        id: table.id,
        r: Math.max(0.15, r),
        phi: Math.atan2(dz, dx),
      });
    }
  }
  for (const circle of world.hcircles) {
    const dx = point.x - circle.x;
    const dz = point.z - circle.z;
    const r = Math.hypot(dx, dz);
    const score = Math.abs(r - circle.radius) + Math.abs(point.y - circle.y);
    if (score <= maxDistance) {
      candidates.push({
        score,
        type: 'hcircle',
        id: circle.id,
        phi: Math.atan2(dz, dx),
      });
    }
  }
  for (const wedge of world.wedges) {
    const local = wedge.body.quaternion.inverse().vmult(point.vsub(wedge.body.position));
    const top = wedgeTopPoint(wedge, local.x, local.z);
    const score = top.distanceTo(point);
    if (score <= maxDistance) {
      candidates.push({
        score,
        type: 'wedge',
        id: wedge.id,
        localX: local.x,
        localZ: local.z,
      });
    }
  }
  for (const carrier of world.bodies) {
    if (carrier.transient || carrier.id === excludeBodyId) continue;
    const top = carrier.cannon.quaternion.vmult(V(0, carrier.halfHeight + 0.02, 0));
    top.vadd(carrier.cannon.position, top);
    const score = top.distanceTo(point);
    if (score <= maxDistance) {
      candidates.push({ score, type: 'body', id: carrier.id });
    }
  }
  for (const pulley of world.pulleys) {
    const p = V(pulley.x, pulley.y + pulley.radius, pulley.z);
    const score = p.distanceTo(point);
    if (score <= maxDistance) {
      candidates.push({
        score,
        type: 'pulley',
        id: pulley.id,
        side: point.x < pulley.x ? 'a' : 'b',
      });
    }
  }
  candidates.sort((a, b) => a.score - b.score);
  return candidates[0] || null;
}

export function snapBodyToNearest(world, body, opts = {}) {
  if (body.rope) return null;
  const nearest = nearestAttachment(world, body.cannon.position, { ...opts, excludeBodyId: body.id });
  if (!nearest) return null;
  if (nearest.type === 'surface') {
    attachBodyToSurface(world, body, nearest.id, { localX: nearest.localX, localZ: nearest.localZ });
  } else if (nearest.type === 'loop') {
    attachBodyToLoop(world, body, nearest.id, { theta: nearest.theta });
  } else if (nearest.type === 'turntable') {
    attachBodyToTurntable(world, body, nearest.id, { r: nearest.r, phi: nearest.phi });
  } else if (nearest.type === 'hcircle') {
    attachBodyToHCircle(world, body, nearest.id, { phi: nearest.phi });
  } else if (nearest.type === 'wedge') {
    attachBodyToWedge(world, body, nearest.id, { localX: nearest.localX, localZ: nearest.localZ });
  } else if (nearest.type === 'body') {
    attachBodyToBody(world, body, nearest.id);
  } else if (nearest.type === 'pulley') {
    attachBodyToPulley(world, body, nearest.id, nearest.side || 'a');
  }
  return nearest.type;
}

export function snapNearbyBodies(world, maxDistance = 3.5) {
  const snapped = [];
  for (const body of world.bodies) {
    if (body.attachment || body.rope || body.transient) continue;
    const hit = snapBodyToNearest(world, body, { maxDistance });
    if (hit) snapped.push({ body, type: hit });
  }
  return snapped;
}

/**
 * Move a body to an explicit world position. With snap enabled the body is
 * re-seated on the nearest surface/track/loop/turntable/circle exactly like
 * the drag-release path. Returns the attachment type or null.
 */
export function setBodyPosition(world, body, position, { snap = false, maxDistance = 2.4, floor = true } = {}) {
  if (!body || body.type !== 'body' || !position) return null;
  if (body.attachment) detachBody(world, body);
  body.skid = null;
  const y = Number.isFinite(position.y) ? Math.max(body.halfHeight + 0.02, position.y) : body.cannon.position.y;
  body.cannon.position.set(position.x, y, position.z);
  body.cannon.velocity.setZero();
  body.cannon.angularVelocity.setZero();
  body.cannon.aabbNeedsUpdate = true;
  body.cannon.wakeUp();
  const hit = snap ? snapBodyToNearest(world, body, { maxDistance }) : null;
  if (hit) return hit;
  if (snap && floor) {
    snapEntityToFloorGrid(world, body, { x: position.x, z: position.z });
    return 'floor';
  }
  applyInitialVelocity(world, body);
  return null;
}

/* ------------------------------------------------------------------ */
/* Portable apparatus mounting (launcher / sensor / barrier)          */
/* ------------------------------------------------------------------ */

function cloneMount(mount) {
  if (!mount) return null;
  return JSON.parse(JSON.stringify(mount));
}

function mountPoint(world, mount) {
  const point = resolveMountPoint(world, mount);
  if (!point) return null;
  const carrier = mountCarrier(world, mount);
  return {
    point,
    carrier,
    quaternion: carrier?.cannon?.quaternion || carrier?.body?.quaternion || null,
  };
}

function mountVelocity(world, mount, point) {
  if (!mount) return V();
  if (mount.type === 'body') {
    const carrier = getBody(world, mount.id);
    return carrier ? cloneV(carrier.cannon.velocity) : V();
  }
  if (mount.type === 'turntable') {
    const table = getTurntable(world, mount.id);
    return table ? tableSurfaceVelocity(table, point) : V();
  }
  if (mount.type === 'wedge') {
    const wedge = getWedge(world, mount.id);
    return wedge ? cloneV(wedge.body.velocity) : V();
  }
  return V();
}

/**
 * Rigidly mount a launcher/sensor on any carrier. Thin compatibility wrapper
 * around the general dockEntity path; every apparatus now uses that path.
 */
export function mountApparatus(world, apparatus, target, opts = {}) {
  if (!apparatus) return false;
  if (apparatus.type !== 'launcher' && apparatus.type !== 'sensor' && apparatus.type !== 'barrier') return false;
  if (!target?.type || !target.id) return false;
  if (target.type === apparatus.type && target.id === apparatus.id) return false;
  return dockEntity(world, apparatus, target, opts);
}

/** Best carrier near a launcher/sensor/barrier, without a floor fallback. */
export function snapApparatusToNearest(world, apparatus, { maxDistance = 3, ...opts } = {}) {
  if (!apparatus) return null;
  if (apparatus.type === 'barrier') return snapBarrierToNearest(world, apparatus, { maxDistance });
  if (apparatus.type !== 'launcher' && apparatus.type !== 'sensor') return null;
  const candidates = [];
  for (const target of snapTargetCandidates(world, apparatus)) {
    const support = mountTargetSupport(world, target, apparatus, opts);
    if (!support) continue;
    const distance = support.point.distanceTo(entityPoint(apparatus));
    if (distance <= maxDistance) candidates.push({ type: target.type, id: target.id, distance });
  }
  candidates.sort((a, b) => a.distance - b.distance);
  for (const candidate of candidates) {
    if (dockEntity(world, apparatus, candidate, opts)) {
      return { type: candidate.type, id: candidate.id, distance: candidate.distance };
    }
  }
  return null;
}

/** Attach a wall/bumper to the nearest track/incline/surface end. */
export function snapBarrierToNearest(world, barrier, { maxDistance = 3 } = {}) {
  if (!barrier || barrier.type !== 'barrier') return null;
  const origin = V(barrier.x || 0, barrier.y || 0, barrier.z || 0);
  let best = null;
  for (const surface of world.surfaces) {
    for (const sign of [-1, 1]) {
      const localX = sign * (surface.length / 2 - 0.12);
      const p = surfaceTopPoint(surface, localX, 0);
      const d = p.distanceTo(origin);
      if (!best || d < best.distance) best = { type: 'surface', id: surface.id, point: p, distance: d, localX };
    }
  }
  // A bumper also clamps onto a cart/body face (front or rear).
  for (const carrier of world.bodies) {
    if (carrier.transient) continue;
    for (const sign of [-1, 1]) {
      const local = carrier.cannon.quaternion.vmult(V(
        sign * (carrier.halfLength + barrier.thickness / 2 + 0.02),
        0,
        0,
      ));
      const p = cloneV(carrier.cannon.position);
      p.vadd(local, p);
      const d = p.distanceTo(origin);
      if (!best || d < best.distance) {
        best = {
          type: 'body',
          id: carrier.id,
          point: p,
          distance: d,
          offset: [sign * (carrier.halfLength + barrier.thickness / 2 + 0.02), 0, 0],
        };
      }
    }
  }
  if (!best || best.distance > maxDistance) return null;
  if (best.type === 'body') {
    barrier.mount = { type: 'body', id: best.id, offset: best.offset };
  } else {
    barrier.mount = { type: 'surface', id: best.id, localX: best.localX, localZ: 0 };
  }
  updateMountedApparatus(world);
  return { type: best.type, id: best.id, distance: best.distance };
}

/* ------------------------------------------------------------------ */
/* General apparatus snap / mount system                              */
/* ------------------------------------------------------------------ */

const ABSTRACT_MOUNT_TYPES = new Set(['oscillator', 'torsion', 'orbit', 'tunnel']);

function isEMEntityType(type) {
  return typeof type === 'string' && type.startsWith('em');
}

/** Every mountable scene entity, mechanics first then E&M. */
export function allMountableEntities(world) {
  const list = [
    ...world.surfaces,
    ...world.loops,
    ...world.turntables,
    ...world.hcircles,
    ...world.launchers,
    ...world.pulleys,
    ...world.barriers,
    ...world.pendulums,
    ...world.wedges,
    ...world.sensors,
    ...world.fans,
    ...world.oscillators,
    ...world.torsionPendulums,
    ...world.elevators,
    ...world.carriages,
    ...world.angularTables,
    ...world.rods,
    ...world.orbits,
    ...world.tunnels,
    ...world.bodies.filter((b) => !b.transient),
  ];
  if (world.em) {
    list.push(
      ...world.em.charges, ...world.em.spheres, ...world.em.lines, ...world.em.planes,
      ...world.em.probes, ...world.em.particles, ...world.em.capacitors, ...world.em.circuits,
      ...world.em.magneticWires, ...world.em.currentLoops, ...world.em.solenoids,
      ...world.em.uniformFields, ...world.em.forceWires, ...world.em.rails,
      ...world.em.inductionCoils,
    );
  }
  return list;
}

/** Find any mechanics or E&M entity by its (type, id). */
export function findSceneEntity(world, type, id) {
  if (!type || !id) return null;
  if (!isEMEntityType(type)) {
    if (type === 'body') return getBody(world, id);
    if (type === 'surface') return getSurface(world, id);
    if (type === 'loop') return getLoop(world, id);
    if (type === 'turntable') return getTurntable(world, id);
    if (type === 'hcircle') return getHCircle(world, id);
    if (type === 'launcher') return world.launchers.find((x) => x.id === id) || null;
    if (type === 'pulley') return world.pulleys.find((x) => x.id === id) || null;
    if (type === 'barrier') return world.barriers.find((x) => x.id === id) || null;
    if (type === 'pendulum') return world.pendulums.find((x) => x.id === id) || null;
    if (type === 'wedge') return world.wedges.find((x) => x.id === id) || null;
    if (type === 'sensor') return world.sensors.find((x) => x.id === id) || null;
    if (type === 'fan') return world.fans.find((x) => x.id === id) || null;
    if (type === 'oscillator') return world.oscillators.find((x) => x.id === id) || null;
    if (type === 'torsion') return world.torsionPendulums.find((x) => x.id === id) || null;
    if (type === 'elevator') return world.elevators.find((x) => x.id === id) || null;
    if (type === 'carriage') return world.carriages.find((x) => x.id === id) || null;
    if (type === 'angularTable') return world.angularTables.find((x) => x.id === id) || null;
    if (type === 'rod') return world.rods.find((x) => x.id === id) || null;
    if (type === 'orbit') return world.orbits.find((x) => x.id === id) || null;
    if (type === 'tunnel') return world.tunnels.find((x) => x.id === id) || null;
    if (type === 'link') return world.links.find((x) => x.id === id) || null;
    return null;
  }
  const em = world.em;
  if (!em) return null;
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

export function entityPoint(entity) {
  if (!entity) return null;
  if (entity.type === 'body') return cloneV(entity.cannon.position);
  if (entity.type === 'surface' || entity.type === 'barrier' || entity.type === 'wedge') {
    return cloneV(entity.body.position);
  }
  return V(entity.x || 0, entity.y || 0, entity.z || 0);
}

function mountCarrier(world, mount) {
  if (!mount) return null;
  const type = mount.targetType || mount.type;
  return findSceneEntity(world, type, mount.id);
}

function addMountOffset(point, mount) {
  const off = mount.offset;
  if (Array.isArray(off)) {
    point.x += off[0] || 0;
    point.y += off[1] || 0;
    point.z += off[2] || 0;
  }
  point.y += mount.offsetY || 0;
  return point;
}

/**
 * Resolve a serialized mount descriptor to a world point. One implementation
 * serves every apparatus type (mechanics and E&M), so a carrier that moves
 * moves everything mounted on it.
 */
export function resolveMountPoint(world, mount) {
  if (!mount) return null;
  const type = mount.targetType || mount.type;
  if (type === 'em') {
    const target = findSceneEntity(world, mount.targetType, mount.id);
    if (!target) return null;
    const p = entityPoint(target);
    return addMountOffset(p, mount);
  }
  if (type === 'floor') {
    return V(mount.x || 0, mount.y || 0, mount.z || 0);
  }
  if (type === 'body') {
    const carrier = getBody(world, mount.id);
    if (!carrier) return null;
    const offset = mount.offset || [0, carrier.halfHeight + 0.02, 0];
    const p = carrier.cannon.quaternion.vmult(V(offset[0] || 0, offset[1] || 0, offset[2] || 0));
    p.vadd(carrier.cannon.position, p);
    return mount.offsetY ? p.vadd(V(0, mount.offsetY, 0), p) : p;
  }
  if (type === 'surface') {
    const surface = getSurface(world, mount.id);
    if (!surface) return null;
    const p = surfaceTopPoint(surface, mount.localX || 0, mount.localZ || 0);
    return addMountOffset(p, mount);
  }
  if (type === 'turntable') {
    const table = getTurntable(world, mount.id);
    if (!table) return null;
    const phi = (mount.phi || 0) + (table.angle || 0);
    const r = mount.r || 0;
    const p = V(table.x + r * Math.cos(phi), tableTopY(table), table.z + r * Math.sin(phi));
    return addMountOffset(p, mount);
  }
  if (type === 'wedge') {
    const wedge = getWedge(world, mount.id);
    if (!wedge) return null;
    const p = wedgeTopPoint(wedge, mount.localX || 0, mount.localZ || 0);
    return addMountOffset(p, mount);
  }
  if (type === 'loop') {
    const loop = getLoop(world, mount.id);
    if (!loop) return null;
    const p = loopPoint(loop, mount.theta || 0);
    return addMountOffset(p, mount);
  }
  if (type === 'hcircle') {
    const circle = getHCircle(world, mount.id);
    if (!circle) return null;
    const phi = mount.phi || 0;
    const p = V(
      circle.x + circle.radius * Math.cos(phi),
      circle.y + 0.01,
      circle.z + circle.radius * Math.sin(phi),
    );
    return addMountOffset(p, mount);
  }
  const target = findSceneEntity(world, type, mount.id);
  if (!target) return null;
  const support = mountTargetSupport(world, { type, id: mount.id }, null);
  if (!support) return null;
  return addMountOffset(support.point, mount);
}

/**
 * The support/anchor point a target offers. Local coordinates are returned so
 * a mount can keep riding the same point while the carrier moves.
 */
function mountTargetSupport(world, target, source, opts = {}) {
  const type = target.type;
  const id = target.id;
  const src = source ? entityPoint(source) : null;
  if (type === 'surface') {
    const surface = getSurface(world, id);
    if (!surface) return null;
    const local = src ? surfaceLocalPoint(surface, src) : { x: 0, z: 0, y: 0 };
    const localX = clamp(opts.localX ?? local.x, -surface.length / 2 + 0.2, surface.length / 2 - 0.2);
    const localZ = clamp(opts.localZ ?? local.z, -surface.width / 2 + 0.2, surface.width / 2 - 0.2);
    return {
      point: surfaceTopPoint(surface, localX, localZ),
      localX,
      localZ,
      carrier: surface,
    };
  }
  if (type === 'body') {
    const carrier = getBody(world, id);
    if (!carrier) return null;
    const offset = V(0, carrier.halfHeight + 0.02, 0);
    const p = carrier.cannon.quaternion.vmult(offset);
    p.vadd(carrier.cannon.position, p);
    return { point: p, carrier };
  }
  if (type === 'wedge') {
    const wedge = getWedge(world, id);
    if (!wedge) return null;
    const local = src
      ? wedge.body.quaternion.inverse().vmult(src.vsub(wedge.body.position))
      : { x: 0, z: 0 };
    const localX = clamp(opts.localX ?? local.x, -wedge.length / 2 + 0.15, wedge.length / 2 - 0.15);
    const localZ = clamp(opts.localZ ?? local.z, -wedge.width / 2 + 0.15, wedge.width / 2 - 0.15);
    return { point: wedgeTopPoint(wedge, localX, localZ), localX, localZ, carrier: wedge };
  }
  if (type === 'turntable') {
    const table = getTurntable(world, id);
    if (!table) return null;
    const dx = src ? src.x - table.x : 0;
    const dz = src ? src.z - table.z : 0;
    const r = clamp(opts.r ?? Math.hypot(dx, dz), 0.12, table.radius - 0.1);
    const phi = Number.isFinite(opts.phi) ? opts.phi : Math.atan2(dz, dx);
    return {
      point: V(table.x + r * Math.cos(phi), tableTopY(table), table.z + r * Math.sin(phi)),
      r,
      phi,
      carrier: table,
    };
  }
  if (type === 'loop') {
    const loop = getLoop(world, id);
    if (!loop) return null;
    let theta = opts.theta;
    if (!Number.isFinite(theta)) {
      theta = src ? Math.atan2(src.x - loop.x, -(src.y - loop.y)) : 0;
    }
    return { point: loopPoint(loop, theta), theta, carrier: loop };
  }
  if (type === 'hcircle') {
    const circle = getHCircle(world, id);
    if (!circle) return null;
    const phi = Number.isFinite(opts.phi)
      ? opts.phi
      : (src ? Math.atan2(src.z - circle.z, src.x - circle.x) : 0);
    return {
      point: V(
        circle.x + circle.radius * Math.cos(phi),
        circle.y + 0.01,
        circle.z + circle.radius * Math.sin(phi),
      ),
      phi,
      carrier: circle,
    };
  }
  if (type === 'pulley') {
    const pulley = getPulley(world, id);
    if (!pulley) return null;
    return { point: V(pulley.x, pulley.y + pulley.radius, pulley.z), carrier: pulley };
  }
  if (type === 'barrier') {
    const barrier = getBarrier(world, id);
    if (!barrier) return null;
    return { point: V(barrier.x, barrier.y + barrier.height, barrier.z), carrier: barrier };
  }
  if (type === 'pendulum') {
    const pendulum = getPendulum(world, id);
    if (!pendulum) return null;
    return { point: V(pendulum.x, pendulum.y, pendulum.z), carrier: pendulum };
  }
  if (type === 'launcher') {
    const launcher = getLauncher(world, id);
    if (!launcher) return null;
    return { point: V(launcher.x, launcher.y + launcher.height, launcher.z), carrier: launcher };
  }
  if (type === 'sensor') {
    const sensor = getSensor(world, id);
    if (!sensor) return null;
    return { point: V(sensor.x, sensor.y + sensor.height, sensor.z), carrier: sensor };
  }
  if (type === 'fan') {
    const fan = getFan(world, id);
    if (!fan) return null;
    return { point: V(fan.x || 0, fan.y || 0, fan.z || 0), carrier: fan };
  }
  if (type === 'elevator') {
    const elevator = getElevator(world, id);
    if (!elevator) return null;
    const ceiling = source?.type === 'oscillator';
    return {
      point: V(elevator.x, elevator.y + (ceiling ? elevator.height : 0.87), elevator.z),
      carrier: elevator,
    };
  }
  if (type === 'carriage') {
    const carriage = getCarriage(world, id);
    if (!carriage) return null;
    return { point: V(carriage.x, carriage.y + 0.42, carriage.z), carrier: carriage };
  }
  if (type === 'angularTable') {
    const table = getAngularTable(world, id);
    if (!table) return null;
    return { point: V(table.x, table.y + 0.07, table.z), carrier: table };
  }
  if (type === 'rod') {
    const rod = getRod(world, id);
    if (!rod) return null;
    return { point: V(rod.x, rod.y, rod.z), carrier: rod };
  }
  if (type === 'oscillator') {
    const osc = getOscillator(world, id);
    if (!osc) return null;
    return { point: V(osc.x, osc.y, osc.z), carrier: osc };
  }
  if (type === 'torsion') {
    const pend = getTorsionPendulum(world, id);
    if (!pend) return null;
    return { point: V(pend.x, pend.y, pend.z), carrier: pend };
  }
  if (type === 'orbit') {
    const orbit = getOrbit(world, id);
    if (!orbit) return null;
    return { point: V(orbit.x, orbit.y, orbit.z), carrier: orbit };
  }
  if (type === 'tunnel') {
    const tunnel = getTunnel(world, id);
    if (!tunnel) return null;
    return { point: V(tunnel.x, tunnel.y, tunnel.z), carrier: tunnel };
  }
  if (isEMEntityType(type)) {
    const em = findSceneEntity(world, type, id);
    if (!em) return null;
    return { point: entityPoint(em), carrier: em };
  }
  return null;
}

function emAxis(axis) {
  if (axis === 'y') return V(0, 1, 0);
  if (axis === 'z') return V(0, 0, 1);
  return V(1, 0, 0);
}

/** Source-specific offset from a support point to the object origin. */
function sourceMountOffset(source, target) {
  const st = source.type;
  const tt = target?.type || '';
  if (isEMEntityType(tt)) return emMountOffset(source, target);
  if (tt === 'elevator' && st === 'oscillator') return V(0, 0, 0);
  if (tt === 'carriage' && st === 'elevator') return V(0, -0.82, 0);
  if (ABSTRACT_MOUNT_TYPES.has(tt)) {
    if (tt === 'orbit' && st === 'orbit') return V(1.4, 0, 0);
    if (tt === 'tunnel' && st === 'orbit') return V(1.2, 0, 0);
    if (tt === 'torsion' && st === 'tunnel') return V(1.8, 0, 0);
    if (tt === 'oscillator' && st === 'torsion') return V(2.2, 0, 0);
    return V(1.8, 0, 0);
  }
  if (st === 'surface') return V(0, source.thickness / 2, 0);
  if (st === 'loop') return V(0, source.radius, 0);
  if (st === 'turntable') return V(0, 0.06, 0);
  if (st === 'hcircle') return V(0, 0.02, 0);
  if (st === 'wedge') return V(0, source.centroidY, 0);
  if (st === 'pulley') return V(0, source.radius, 0);
  if (st === 'fan') return V(0, 0.2, 0);
  if (st === 'oscillator') return V(0, Math.max(0, source.y - 0.06), 0);
  if (st === 'torsion') return V(0, Math.max(0, source.y - 0.06), 0);
  if (st === 'elevator') return V(0, -0.82, 0);
  if (st === 'carriage') return V(0, 0, 0);
  if (st === 'angularTable') return V(0, source.y, 0);
  if (st === 'rod') return V(0, Math.max(0, source.y - 0.1), 0);
  if (st === 'orbit') return V(0, 0.62, 0);
  if (st === 'tunnel') return V(0, source.R, 0);
  if (st === 'launcher' || st === 'sensor' || st === 'barrier' || st === 'pendulum') return V();
  if (st === 'emCharge') return V(0, 0.8, 0);
  if (st === 'emSphere') return V(0, source.R, 0);
  if (st === 'emLine') return V(0, 0.4, 0);
  if (st === 'emPlane') return V(0, 0.8, 0);
  if (st === 'emProbe') return V(0, 0.1, 0);
  if (st === 'emParticle') return V(0, 0.15, 0);
  if (st === 'emCapacitor') return V(0, 0.35, 0);
  if (st === 'emCircuit') return V(0, 0.05, 0);
  if (st === 'emMagneticWire') return V(0, 1.0, 0);
  if (st === 'emCurrentLoop') return V(0, source.radius, 0);
  if (st === 'emSolenoid') return V(0, source.radius, 0);
  if (st === 'emUniform') return V(0, 0.8, 0);
  if (st === 'emForceWire') return V(0, 0.8, 0);
  if (st === 'emRail') return V(0, 0.15, 0);
  if (st === 'emInductionCoil') return V(0, source.height / 2, 0);
  return V();
}

/** Pair-specific dock offsets when the target is itself an E&M apparatus. */
function emMountOffset(source, target) {
  const st = source.type;
  const tt = target.type;
  if (tt === 'emRail' && st === 'emRail') {
    return V((target.length || 0) / 2 + (source.length || 0) / 2, 0, 0);
  }
  if ((tt === 'emSolenoid' || tt === 'emCurrentLoop')
    && (st === 'emCurrentLoop' || st === 'emInductionCoil' || st === 'emSolenoid' || st === 'emUniform')) {
    return V();
  }
  if (tt === 'emUniform'
    && (st === 'emParticle' || st === 'emInductionCoil' || st === 'emForceWire' || st === 'emCharge')) {
    return V();
  }
  if (tt === 'emInductionCoil'
    && (st === 'emUniform' || st === 'emSolenoid' || st === 'emCurrentLoop')) {
    return V();
  }
  if (tt === 'emForceWire' && (st === 'emMagneticWire' || st === 'emForceWire')) {
    return V(0, 0, 0.45);
  }
  if (tt === 'emMagneticWire' && st === 'emForceWire') return V(0, 0, 0.45);
  if (tt === 'emMagneticWire' && st === 'emMagneticWire') return V(0, 1.2, 0);
  if (tt === 'emCapacitor') {
    if (st === 'emProbe') return emAxis(target.axis || 'x').scale((target.d || 0.05) / 2 + 0.4);
    if (st === 'emParticle' || st === 'emCircuit') return V();
    return V(0.5, 0, 0);
  }
  if (tt === 'emCharge') {
    if (st === 'emParticle') return V();
    if (st === 'emProbe') return V(0.8, 0, 0);
    if (st === 'emCharge') return V(0.8, 0, 0);
    if (st === 'emSphere') return V((target.R || 0) + (source.R || 0) + 0.35, 0, 0);
    if (st === 'emCapacitor') return V(0, 0.4, 0);
    return V(0.8, 0, 0);
  }
  if (tt === 'emSphere') return V((target.R || 0) + 0.6, 0, 0);
  if (tt === 'emLine' || tt === 'emPlane') {
    if (st === 'emPlane' || st === 'emLine') return V(0, 0.45, 0);
    return V(0.8, 0, 0);
  }
  if (tt === 'emProbe') return V(0.7, 0, 0);
  if (tt === 'emCircuit') return V(0.6, 0, 0);
  return V(0.8, 0, 0);
}

function applyMountedEntity(world, entity, point) {
  if (!entity || !point) return;
  if (entity.type === 'body') return;
  if (entity.type === 'surface') {
    entity.body.position.copy(point);
    entity.body.aabbNeedsUpdate = true;
    for (const body of world.bodies) {
      if (body.attachment?.type === 'surface' && body.attachment.id === entity.id) {
        repositionSurfaceBody(world, body);
      }
    }
    return;
  }
  if (entity.type === 'loop') {
    entity.x = point.x;
    entity.y = point.y;
    entity.z = point.z;
    for (const body of world.bodies) {
      if (body.attachment?.type === 'loop' && body.attachment.id === entity.id) {
        body.cannon.position.copy(loopPoint(entity, body.attachment.theta));
        body.cannon.aabbNeedsUpdate = true;
      }
    }
    return;
  }
  if (entity.type === 'turntable') {
    entity.x = point.x;
    entity.y = point.y;
    entity.z = point.z;
    entity.body.position.set(point.x, point.y, point.z);
    entity.body.aabbNeedsUpdate = true;
    for (const body of world.bodies) {
      if (body.attachment?.type === 'turntable' && body.attachment.id === entity.id) {
        body.cannon.position.set(
          entity.x + body.attachment.r * Math.cos(body.attachment.phi),
          tableTopY(entity) + body.halfHeight,
          entity.z + body.attachment.r * Math.sin(body.attachment.phi),
        );
      }
    }
    return;
  }
  if (entity.type === 'hcircle') {
    entity.x = point.x;
    entity.y = point.y;
    entity.z = point.z;
    for (const body of world.bodies) {
      if (body.attachment?.type === 'hcircle' && body.attachment.id === entity.id) {
        body.cannon.position.set(
          entity.x + entity.radius * Math.cos(body.attachment.phi),
          entity.y + body.halfHeight + 0.01,
          entity.z + entity.radius * Math.sin(body.attachment.phi),
        );
      }
    }
    return;
  }
  if (entity.type === 'wedge') {
    entity.body.position.copy(point);
    entity.baseY = point.y - entity.centroidY;
    entity.x = point.x;
    entity.z = point.z;
    entity.body.aabbNeedsUpdate = true;
    for (const body of world.bodies) {
      if (body.attachment?.type === 'wedge' && body.attachment.id === entity.id) {
        repositionWedgeBody(world, body);
      }
    }
    return;
  }
  if (entity.type === 'barrier') {
    entity.x = point.x;
    entity.y = point.y;
    entity.z = point.z;
    entity.body.position.set(point.x, point.y + entity.height / 2, point.z);
    entity.body.aabbNeedsUpdate = true;
    return;
  }
  if (entity.type === 'launcher') {
    entity.x = point.x;
    entity.y = point.y;
    entity.z = point.z;
    entity.target = launcherPrediction(world, entity);
    return;
  }
  if (entity.type === 'sensor') {
    entity.x = point.x;
    entity.y = point.y;
    entity.z = point.z;
    return;
  }
  if (isEMEntityType(entity.type)) {
    entity.x = point.x;
    entity.y = point.y;
    entity.z = point.z;
    if (entity.type === 'emParticle') entity.trail = [];
    return;
  }
  entity.x = point.x;
  entity.y = point.y;
  entity.z = point.z;
}

function dockBodyEntity(world, body, target, opts) {
  const type = target.type;
  const id = target.id;
  if (type === 'surface') {
    const surface = getSurface(world, id);
    if (!surface) return false;
    const local = surfaceLocalPoint(surface, body.cannon.position);
    return attachBodyToSurface(world, body, id, { localX: opts.localX ?? local.x, localZ: opts.localZ ?? local.z });
  }
  if (type === 'loop') return attachBodyToLoop(world, body, id, opts);
  if (type === 'turntable') return attachBodyToTurntable(world, body, id, opts);
  if (type === 'hcircle') return attachBodyToHCircle(world, body, id, opts);
  if (type === 'wedge') return attachBodyToWedge(world, body, id, opts);
  if (type === 'body') return attachBodyToBody(world, body, id, opts);
  if (type === 'pulley') return attachBodyToPulley(world, body, id, opts.side || 'a');
  const support = mountTargetSupport(world, target, body);
  if (!support) return false;
  const targetEntity = findSceneEntity(world, type, id);
  const origin = entityPoint(targetEntity);
  const offset = [
    support.point.x - origin.x,
    support.point.y - origin.y + body.halfHeight + 0.02,
    support.point.z - origin.z,
  ];
  return attachBodyToApparatus(world, body, target, { offsetX: offset[0], offsetY: offset[1], offsetZ: offset[2] });
}

function dockLink(world, link, target, opts = {}) {
  const end = opts.end === 'a' ? 'a' : 'b';
  const type = target.type;
  const id = target.id;
  const endpoint = link[end];
  const pos = endpointPosition(world, endpoint);
  if (type === 'surface') {
    const surface = getSurface(world, id);
    if (!surface) return false;
    const local = pos ? surfaceLocalPoint(surface, pos) : { x: 0, z: 0 };
    const localX = clamp(local.x, -surface.length / 2 + 0.2, surface.length / 2 - 0.2);
    const localZ = clamp(local.z, -surface.width / 2 + 0.2, surface.width / 2 - 0.2);
    link[end] = { type: 'surface', id, localX, localZ, offsetY: 0.01 };
    link.mount = { type: 'surface', id, localX, localZ };
    return true;
  }
  if (type === 'wedge') {
    const wedge = getWedge(world, id);
    if (!wedge) return false;
    const local = wedge.body.quaternion.inverse().vmult((pos || wedge.body.position).vsub(wedge.body.position));
    const localX = clamp(local.x, -wedge.length / 2, wedge.length / 2);
    link[end] = { type: 'wedge', id, localX, localZ: 0, offsetY: 0.02 };
    link.mount = { type: 'wedge', id, localX, localZ: 0 };
    return true;
  }
  if (type === 'body') {
    if (!getBody(world, id)) return false;
    if (link.a.type === 'body' && link.a.id === id && end === 'b') return false;
    if (link.b.type === 'body' && link.b.id === id && end === 'a') return false;
    link[end] = { type: 'body', id };
    link.mount = { type: 'body', id };
    return true;
  }
  return false;
}

/** Attach the free endpoint of a spring / meter to the nearest surface or body. */
export function snapLinkToNearest(world, link, { end = 'b', maxDistance = 3 } = {}) {
  if (!link) return null;
  const pos = endpointPosition(world, link[end]);
  if (!pos) return null;
  const candidates = [];
  for (const surface of world.surfaces) {
    const local = surfaceLocalPoint(surface, pos);
    const localX = clamp(local.x, -surface.length / 2 + 0.2, surface.length / 2 - 0.2);
    const localZ = clamp(local.z, -surface.width / 2 + 0.2, surface.width / 2 - 0.2);
    const p = surfaceTopPoint(surface, localX, localZ);
    candidates.push({ type: 'surface', id: surface.id, distance: p.distanceTo(pos) });
  }
  for (const wedge of world.wedges) {
    const p = wedgeTopPoint(wedge, 0, 0);
    candidates.push({ type: 'wedge', id: wedge.id, distance: p.distanceTo(pos) });
  }
  for (const body of world.bodies) {
    if (body.transient) continue;
    if ((link.a.type === 'body' && link.a.id === body.id)
      || (link.b.type === 'body' && link.b.id === body.id)) continue;
    candidates.push({ type: 'body', id: body.id, distance: body.cannon.position.distanceTo(pos) });
  }
  candidates.sort((a, b) => a.distance - b.distance);
  const best = candidates.find((c) => c.distance <= maxDistance);
  if (!best || !dockLink(world, link, best, { end })) return null;
  return { type: best.type, id: best.id, distance: best.distance };
}

/**
 * Snap any mechanics or E&M apparatus to the nearest compatible apparatus.
 * The floor grid is the documented fallback for free objects.
 */
export function snapEntityToNearest(world, entity, opts = {}) {
  if (!entity) return null;
  const maxDistance = opts.maxDistance ?? 3;
  if (entity.type === 'body') {
    const hit = snapBodyToNearest(world, entity, { maxDistance });
    if (hit) {
      return { type: hit, id: entity.attachment?.id || null, attachment: { ...entity.attachment } };
    }
    if (opts.floor === false) return null;
    return { type: 'floor', ...snapEntityToFloorGrid(world, entity, opts) };
  }
  if (entity.type === 'link') {
    const hit = snapLinkToNearest(world, entity, { end: opts.end || 'b', maxDistance });
    if (hit) return { ...hit, attachment: { ...entity[endKeyForLink(opts)] } };
    return null;
  }
  if (entity.type === 'barrier') {
    const hit = snapBarrierToNearest(world, entity, { maxDistance });
    if (hit) return hit;
  } else {
    const candidates = [];
    for (const target of snapTargetCandidates(world, entity)) {
      const support = mountTargetSupport(world, target, entity, opts);
      if (!support) continue;
      const range = support.point.distanceTo(entityPoint(entity));
      if (range <= maxDistance) candidates.push({ ...target, distance: range });
    }
    candidates.sort((a, b) => a.distance - b.distance);
    for (const target of candidates) {
      if (dockEntity(world, entity, target, opts)) {
        return { type: target.type, id: target.id, distance: target.distance };
      }
    }
  }
  if (opts.floor === false) return null;
  return { type: 'floor', ...snapEntityToFloorGrid(world, entity, opts) };
}

function endKeyForLink(opts) {
  return opts.end === 'a' ? 'a' : 'b';
}

/** List of possible carriers for a generic snap (excluding the source). */
function snapTargetCandidates(world, source) {
  const list = [
    ...world.surfaces,
    ...world.loops,
    ...world.turntables,
    ...world.hcircles,
    ...world.launchers,
    ...world.pulleys,
    ...world.barriers,
    ...world.pendulums,
    ...world.wedges,
    ...world.sensors,
    ...world.fans,
    ...world.oscillators,
    ...world.torsionPendulums,
    ...world.elevators,
    ...world.carriages,
    ...world.angularTables,
    ...world.rods,
    ...world.orbits,
    ...world.tunnels,
    ...world.bodies.filter((b) => !b.transient),
  ];
  if (world.em) {
    list.push(
      ...world.em.charges,
      ...world.em.spheres,
      ...world.em.lines,
      ...world.em.planes,
      ...world.em.probes,
      ...world.em.particles,
      ...world.em.capacitors,
      ...world.em.circuits,
      ...world.em.magneticWires,
      ...world.em.currentLoops,
      ...world.em.solenoids,
      ...world.em.uniformFields,
      ...world.em.forceWires,
      ...world.em.rails,
      ...world.em.inductionCoils,
    );
  }
  return list.filter((target) => target && !(target.type === source.type && target.id === source.id));
}

/**
 * Mount one apparatus on another. Bodies use the specialised attachment
 * constraints; every other apparatus keeps a serializable mount descriptor.
 */
export function dockEntity(world, entity, target, opts = {}) {
  if (!entity || !target?.type || !target.id) return false;
  if (entity.type === target.type && entity.id === target.id) return false;
  if (entity.type === 'body') return dockBodyEntity(world, entity, target, opts);
  if (entity.type === 'link') return dockLink(world, entity, target, opts);
  const targetEntity = findSceneEntity(world, target.type, target.id);
  if (!targetEntity) return false;
  const point = entityPoint(entity);
  if (!point) return false;
  if (isEMEntityType(target.type)) {
    const offset = Array.isArray(opts.offset)
      ? V(opts.offset[0] || 0, opts.offset[1] || 0, opts.offset[2] || 0)
      : emMountOffset(entity, targetEntity);
    const center = entityPoint(targetEntity);
    const desired = center.vadd(offset);
    entity.mount = {
      type: 'em',
      targetType: target.type,
      id: target.id,
      offset: [offset.x, offset.y, offset.z],
    };
    applyMountedEntity(world, entity, desired);
    return true;
  }
  const support = mountTargetSupport(world, target, entity, opts);
  if (!support) return false;
  const offset = Array.isArray(opts.offset)
    ? V(opts.offset[0] || 0, opts.offset[1] || 0, opts.offset[2] || 0)
    : sourceMountOffset(entity, targetEntity);
  const desired = support.point.vadd(offset);
  if (target.type === 'body') {
    const carrier = getBody(world, target.id);
    if (!carrier) return false;
    const rel = desired.vsub(carrier.cannon.position);
    const local = carrier.cannon.quaternion.inverse().vmult(rel);
    entity.mount = { type: 'body', id: target.id, offset: [local.x, local.y, local.z] };
  } else if (target.type === 'surface') {
    entity.mount = { type: 'surface', id: target.id, localX: support.localX, localZ: support.localZ, offset: [offset.x, offset.y, offset.z] };
  } else if (target.type === 'turntable') {
    entity.mount = { type: 'turntable', id: target.id, r: support.r, phi: support.phi, offset: [offset.x, offset.y, offset.z] };
  } else if (target.type === 'wedge') {
    entity.mount = { type: 'wedge', id: target.id, localX: support.localX, localZ: support.localZ, offset: [offset.x, offset.y, offset.z] };
  } else if (target.type === 'loop') {
    entity.mount = { type: 'loop', id: target.id, theta: support.theta, offset: [offset.x, offset.y, offset.z] };
  } else if (target.type === 'hcircle') {
    entity.mount = { type: 'hcircle', id: target.id, phi: support.phi, offset: [offset.x, offset.y, offset.z] };
  } else {
    entity.mount = { type: target.type, id: target.id, offset: [offset.x, offset.y, offset.z] };
  }
  if (entity.type === 'fan') {
    const prev = entity.bodyId ? getBody(world, entity.bodyId) : null;
    if (prev && prev.fan === entity) prev.fan = null;
    entity.bodyId = target.type === 'body' ? target.id : null;
    const host = entity.bodyId ? getBody(world, entity.bodyId) : null;
    if (host) host.fan = entity;
  }
  applyMountedEntity(world, entity, desired);
  return true;
}

/** Remove a mount/attachment (body seats and every portable apparatus). */
export function detachEntity(world, entity) {
  if (!entity) return false;
  if (entity.type === 'body') {
    if (!entity.attachment) return false;
    detachBody(world, entity);
    return true;
  }
  if (entity.type === 'link') {
    const had = !!entity.mount;
    entity.mount = null;
    return had;
  }
  let had = !!entity.mount;
  if (entity.type === 'fan') {
    const host = entity.bodyId ? getBody(world, entity.bodyId) : null;
    if (host && host.fan === entity) host.fan = null;
    if (entity.bodyId) had = true;
    entity.bodyId = null;
  }
  if (!had) return false;
  entity.mount = null;
  return true;
}

export function entityMount(entity) {
  if (!entity) return null;
  if (entity.type === 'body') return entity.attachment || null;
  return entity.mount || null;
}

/** Move any apparatus origin without snapping (direct-drag path). */
export function moveEntityTo(world, entity, point) {
  if (!entity || !point) return false;
  if (entity.type === 'body') {
    entity.cannon.position.set(point.x, point.y, point.z);
    entity.cannon.aabbNeedsUpdate = true;
    return true;
  }
  applyMountedEntity(world, entity, V(point.x, point.y, point.z));
  return true;
}

/** Documented rest height used when a free object is dropped on the floor. */
export function floorRestHeight(entity) {
  if (!entity) return 0;
  if (entity.type === 'body') return entity.halfHeight + 0.002;
  if (entity.type === 'surface') return entity.thickness / 2;
  if (entity.type === 'loop') return entity.radius;
  if (entity.type === 'turntable') return 0.06;
  if (entity.type === 'hcircle') return 0.02;
  if (entity.type === 'wedge') return entity.centroidY;
  if (entity.type === 'pulley') return entity.radius;
  if (entity.type === 'fan') return 0.2;
  if (entity.type === 'oscillator' || entity.type === 'torsion') return 0.06;
  if (entity.type === 'pendulum') return Math.max(0.6, entity.length * 0.8);
  if (entity.type === 'angularTable') return 0.07;
  if (entity.type === 'rod') return 0.1;
  if (entity.type === 'orbit') return 0.62;
  if (entity.type === 'tunnel') return entity.R;
  if (entity.type === 'emCharge') return 0.8;
  if (entity.type === 'emSphere') return entity.R;
  if (entity.type === 'emLine') return 0.4;
  if (entity.type === 'emPlane') return 0.8;
  if (entity.type === 'emProbe') return 0.1;
  if (entity.type === 'emParticle') return 0.15;
  if (entity.type === 'emCapacitor') return 0.35;
  if (entity.type === 'emCircuit') return 0.05;
  if (entity.type === 'emMagneticWire') return 1;
  if (entity.type === 'emCurrentLoop') return entity.radius;
  if (entity.type === 'emSolenoid') return entity.radius;
  if (entity.type === 'emUniform') return 0.8;
  if (entity.type === 'emForceWire') return 0.8;
  if (entity.type === 'emRail') return 0.15;
  if (entity.type === 'emInductionCoil') return entity.height / 2;
  return 0;
}

/**
 * Put a free object on the nearest mathematical grid intersection. No snap
 * meshes, colliders or scene objects are created; the lattice is gridStep.
 */
export function snapEntityToFloorGrid(world, entity, opts = {}) {
  if (!entity || entity.type === 'link') return null;
  const step = Number.isFinite(opts.gridStep) ? opts.gridStep : world.gridStep;
  const current = entityPoint(entity);
  const x = quantizeValue(Number.isFinite(opts.x) ? opts.x : current.x, step);
  const z = quantizeValue(Number.isFinite(opts.z) ? opts.z : current.z, step);
  const y = Number.isFinite(opts.y) ? opts.y : floorRestHeight(entity);
  if (entity.type === 'body') {
    if (entity.attachment) detachBody(world, entity);
    entity.cannon.position.set(x, y, z);
    entity.cannon.velocity.setZero();
    entity.cannon.angularVelocity.setZero();
    entity.cannon.aabbNeedsUpdate = true;
    entity.cannon.wakeUp();
    applyInitialVelocity(world, entity);
  } else {
    detachEntity(world, entity);
    applyMountedEntity(world, entity, V(x, y, z));
  }
  return { x, y, z };
}

/** Re-position every mounted apparatus from its carrier's current pose. */
export function updateMountedApparatus(world) {
  const mounted = [
    ...world.surfaces,
    ...world.loops,
    ...world.turntables,
    ...world.hcircles,
    ...world.launchers,
    ...world.pulleys,
    ...world.barriers,
    ...world.pendulums,
    ...world.wedges,
    ...world.sensors,
    ...world.fans,
    ...world.oscillators,
    ...world.torsionPendulums,
    ...world.elevators,
    ...world.carriages,
    ...world.angularTables,
    ...world.rods,
    ...world.orbits,
    ...world.tunnels,
    ...(world.em ? [
      ...world.em.charges, ...world.em.spheres, ...world.em.lines, ...world.em.planes,
      ...world.em.probes, ...world.em.particles, ...world.em.capacitors, ...world.em.circuits,
      ...world.em.magneticWires, ...world.em.currentLoops, ...world.em.solenoids,
      ...world.em.uniformFields, ...world.em.forceWires, ...world.em.rails,
      ...world.em.inductionCoils,
    ] : []),
  ];
  // Two passes let a mount chain settle (A on B, B on C).
  for (let pass = 0; pass < 2; pass += 1) {
    for (const entity of mounted) {
      if (!entity.mount) continue;
      const point = resolveMountPoint(world, entity.mount);
      if (!point) { entity.mount = null; continue; }
      applyMountedEntity(world, entity, point);
    }
  }
  for (const body of world.bodies) {
    if (body.attachment?.type === 'body' || body.attachment?.type === 'wedge'
      || body.attachment?.type === 'apparatus') {
      repositionCarriedBody(world, body);
    }
  }
}


/* ------------------------------------------------------------------ */
/* Springs, applied forces and force meters                           */
/* ------------------------------------------------------------------ */

export function addLink(world, opts = {}) {
  const { a, b, k = 20, beta = 0, rest = null, meter = false } = opts;
  if (!a || !b) return null;
  if (a.type === 'body' && b.type === 'body' && a.id === b.id) return null;
  let restLength = rest;
  if (restLength == null) {
    const pa = endpointPosition(world, a);
    const pb = endpointPosition(world, b);
    restLength = pa && pb ? pa.vsub(pb).length() : 1;
  }
  const link = {
    id: assignId(world, meter ? 'meter' : 'spring', opts.id),
    type: 'link',
    a: { ...a },
    b: { ...b },
    k,
    beta,
    rest: restLength,
    meter,
    reading: 0,
    samples: [],
    sampleAt: -1,
  };
  world.links.push(link);
  return link;
}

export function addAnchor(x, y, z = 0) {
  return { type: 'anchor', x, y, z };
}

export function endpointPosition(world, endpoint) {
  if (!endpoint) return null;
  if (endpoint.type === 'anchor') return V(endpoint.x, endpoint.y, endpoint.z);
  if (endpoint.type === 'surface') {
    const surface = getSurface(world, endpoint.id);
    if (!surface) return null;
    const p = surfaceTopPoint(surface, endpoint.localX || 0, endpoint.localZ || 0);
    p.y += endpoint.offsetY || 0;
    return p;
  }
  if (endpoint.type === 'wedge') {
    const wedge = getWedge(world, endpoint.id);
    if (!wedge) return null;
    const p = wedgeTopPoint(wedge, endpoint.localX || 0, endpoint.localZ || 0);
    p.y += endpoint.offsetY || 0;
    return p;
  }
  if (endpoint.type && endpoint.type !== 'body') {
    const target = findSceneEntity(world, endpoint.type, endpoint.id);
    if (target) {
      const p = entityPoint(target);
      p.y += endpoint.offsetY || 0;
      return p;
    }
  }
  const body = getBody(world, endpoint.id || endpoint);
  return body ? cloneV(body.cannon.position) : null;
}

export function springTension(link, length) {
  const ext = length - link.rest;
  return link.k * ext + link.beta * ext ** 3;
}

export function springEnergyFromLength(link, length) {
  const ext = length - link.rest;
  return 0.5 * link.k * ext * ext + 0.25 * link.beta * ext ** 4;
}

export function linkGeometry(world, link) {
  const pa = endpointPosition(world, link.a);
  const pb = endpointPosition(world, link.b);
  if (!pa || !pb) return null;
  const d = pb.vsub(pa);
  const length = Math.max(1e-5, d.length());
  const tension = springTension(link, length);
  link.reading = Math.abs(tension);
  return { pa, pb, d, length, tension, unit: d.scale(1 / length) };
}

function applySpringForces(world) {
  for (const link of world.links) {
    const g = linkGeometry(world, link);
    if (!g) continue;
    const forceOnA = g.unit.scale(g.tension);
    if (link.a.type === 'body') {
      const body = getBody(world, link.a.id);
      if (body) body.cannon.applyForce(forceOnA);
    }
    if (link.b.type === 'body') {
      const body = getBody(world, link.b.id);
      if (body) body.cannon.applyForce(forceOnA.scale(-1));
    }
  }
}

function sampleMeters(world, h) {
  const t = world.time + h;
  for (const link of world.links) {
    if (!link.meter) continue;
    const g = linkGeometry(world, link);
    if (!g) continue;
    if (t - link.sampleAt >= 0.04 - 1e-9) {
      link.sampleAt = t;
      link.samples.push({ t, force: Math.abs(g.tension) });
      if (link.samples.length > 1200) link.samples.shift();
    }
  }
}

export function appliedForce(body) {
  const az = (body.appliedAzimuth || 0) * DEG;
  const el = (body.appliedElevation || 0) * DEG;
  const mag = body.appliedMag || 0;
  return V(
    mag * Math.cos(el) * Math.cos(az),
    mag * Math.sin(el),
    mag * Math.cos(el) * Math.sin(az),
  );
}

function applyAppliedForces(world) {
  for (const body of world.bodies) {
    const f = appliedForce(body);
    if (f.lengthSquared() > 0) body.cannon.applyForce(f);
  }
  for (const fan of world.fans) {
    if (!fan.bodyId) continue;
    const body = getBody(world, fan.bodyId);
    if (!body) continue;
    const f = fanForce(fan);
    if (f.lengthSquared() > 0) body.cannon.applyForce(f);
  }
}

export function externalForceOn(world, body) {
  const total = V();
  for (const link of world.links) {
    const a = link.a.type === 'body' && link.a.id === body.id;
    const b = link.b.type === 'body' && link.b.id === body.id;
    if (!a && !b) continue;
    const g = linkGeometry(world, link);
    if (!g) continue;
    const f = a ? g.unit.scale(g.tension) : g.unit.scale(-g.tension);
    total.vadd(f, total);
  }
  total.vadd(appliedForce(body), total);
  for (const fan of world.fans) {
    if (fan.bodyId === body.id) total.vadd(fanForce(fan), total);
  }
  if (body._ropeT > 0 && body._ropeU) total.vadd(body._ropeU.scale(body._ropeT), total);
  return total;
}

export function springNetForce(world, body) {
  const total = V();
  for (const link of world.links) {
    const a = link.a.type === 'body' && link.a.id === body.id;
    const b = link.b.type === 'body' && link.b.id === body.id;
    if (!a && !b) continue;
    const g = linkGeometry(world, link);
    if (!g) continue;
    total.vadd(a ? g.unit.scale(g.tension) : g.unit.scale(-g.tension), total);
  }
  return total;
}

/* ------------------------------------------------------------------ */
/* Apparatus-specific contacts                                        */
/* ------------------------------------------------------------------ */

function surfaceContact(world, body) {
  const surface = getSurface(world, body.attachment.id);
  if (!surface) return null;
  const frame = surfaceFrame(surface);
  const ext = externalForceOn(world, body);
  const m = body.mass;
  const gravity = V(0, -m * world.g, 0);
  const N = -(ext.dot(frame.n)) + m * world.g * frame.n.y;
  const drive = ext.vadd(gravity);
  const dn = drive.dot(frame.n);
  drive.vsub(frame.n.scale(dn), drive);
  body.motorForce = 0;
  if (body.kind === 'cart' && body.motor?.on) {
    const vt = body.cannon.velocity.dot(frame.t);
    const maxF = Math.max(0, body.motor.force ?? 0);
    const target = body.motor.target ?? 0;
    const fm = clamp((target - vt) * body.mass * 2, -maxF, maxF);
    body.motorForce = fm;
    drive.vadd(frame.t.scale(fm), drive);
  }
  const v = cloneV(body.cannon.velocity);
  const vn = frame.n.scale(v.dot(frame.n));
  v.vsub(vn, v);
  return { surface, frame, ext, N, drive, v, speed: v.length() };
}

function applySurfaceContact(world, body, h) {
  const c = surfaceContact(world, body);
  if (!c) return;
  body._surfaceV0 = cloneV(body.cannon.velocity);
  const { surface, frame, N, drive, v } = c;
  body.diagnostics.normal = Math.max(0, N);
  body.diagnostics.contact = surface.kind;
  body.diagnostics.mode = 'surface';
  const local = surfaceLocalPoint(surface, body.cannon.position);
  const offEdge = Math.abs(local.x) > surface.length / 2 + body.halfLength + 0.02
    || Math.abs(local.z) > surface.width / 2 + body.halfLength + 0.02
    || local.y < surface.thickness / 2 + body.halfHeight - 0.12;
  if (N <= 0 || offEdge) {
    detachBody(world, body);
    world.events.push({ type: 'leave-surface', bodyId: body.id, time: world.time, reason: offEdge ? 'edge' : 'normal' });
    return;
  }
  const muS = surface.muS;
  const muK = surface.muK;
  const staticMax = muS * N;
  const driveMag = drive.length();
  const speed = c.speed;

  if (body.kind === 'block') {
    let friction;
    if (speed < STATIC_SPEED && driveMag <= staticMax) {
      friction = drive.scale(-1);
      body.cannon.velocity.setZero();
      body.cannon.angularVelocity.setZero();
      body.diagnostics.static = true;
    } else {
      const dir = speed > STATIC_SPEED ? v.scale(1 / speed) : drive.scale(1 / Math.max(driveMag, EPS));
      friction = dir.scale(-muK * N);
      body.diagnostics.static = false;
      world.thermal += friction.length() * speed * h;
    }
    body.cannon.applyForce(friction);
    body.diagnostics.friction = friction.length();
    body.diagnostics.force.copy(friction);
    const gravity = V(0, -body.mass * world.g, 0);
    const driveT = frame.t.scale(drive.dot(frame.t));
    body.diagnostics.accel = body.diagnostics.static
      ? 0
      : (driveT.vadd(friction)).dot(frame.t) / body.mass;
    return;
  }

  // Cart: use the chosen moment of inertia and a proper rolling/slip law.
  // At rest, pure rolling is selected whenever the required static friction
  // fits inside the friction cone. A parked/locked axle only happens when the
  // student turns the brake on (and static friction can hold the cart).
  const vt = v.dot(frame.t);
  const vb = v.dot(frame.b);
  const wAxis = body.cannon.angularVelocity.dot(frame.b);
  const u = vt + wAxis * body.radius;
  const Ft = drive.dot(frame.t);
  const denom = body.mass + body.I / (body.radius * body.radius);
  const aReq = Ft / denom;
  const fReq = -body.I * aReq / (body.radius * body.radius);
  let f = 0;
  let staticRoll = false;
  let held = false;
  const atRest = Math.abs(u) < 1e-3 && Math.abs(vt) < STATIC_SPEED && Math.abs(vb) < STATIC_SPEED;
  const atRestBrake = Math.abs(vt) < STATIC_SPEED && Math.abs(vb) < STATIC_SPEED;
  if (body.brake) {
    // A brake locks the axle. At rest, hold if the friction cone allows it;
    // otherwise the locked wheels slide with kinetic friction until the cart
    // stops (or slides down a slope it cannot hold).
    body.cannon.angularVelocity.setZero();
    if (atRestBrake && Math.abs(Ft) + Math.abs(drive.dot(frame.b)) <= staticMax) {
      f = -Ft;
      staticRoll = true;
      held = true;
      body.cannon.velocity.setZero();
    } else if (atRestBrake) {
      f = -Math.sign(Ft || 1) * muK * N;
      world.thermal += Math.abs(f * vt) * h;
    } else {
      f = -Math.sign(vt) * muK * N;
      world.thermal += Math.abs(f * vt) * h;
    }
  } else if (Math.abs(u) < 1e-3) {
    if (Math.abs(fReq) <= staticMax) {
      f = fReq;
      staticRoll = true;
    } else {
      f = Math.sign(fReq || -Ft) * muK * N;
      world.thermal += Math.abs(f * u) * h;
    }
  } else {
    f = -Math.sign(u) * muK * N;
    world.thermal += Math.abs(f * u) * h;
  }
  const friction = frame.t.scale(f);
  // Lateral (across the track) friction keeps the cart centred or slides.
  const fbDrive = drive.dot(frame.b);
  if (Math.abs(vb) < STATIC_SPEED && Math.abs(fbDrive) <= staticMax) {
    friction.vadd(frame.b.scale(-fbDrive), friction);
  } else {
    const fb = Math.abs(vb) > STATIC_SPEED ? -Math.sign(vb) * muK * N : -Math.sign(fbDrive) * muK * N;
    friction.vadd(frame.b.scale(fb), friction);
    world.thermal += Math.abs(fb * vb) * h;
  }
  // Apply the tangential force at the centre and add the contact torque
  // explicitly; this keeps the engine's normal solver decoupled from the
  // friction lever arm while preserving the rolling law. A braked cart is a
  // parked/locked axle, so no torque is applied while it is held.
  body.cannon.applyForce(friction);
  if (!body.brake && !held) {
    body.cannon.torque.vadd(frame.b.scale(f * body.radius), body.cannon.torque);
  }
  body.diagnostics.static = staticRoll;
  body.diagnostics.rolling = !body.brake && Math.abs(u) < 1e-3;
  body._surfaceRolling = !body.brake && staticRoll && !held;
  body.diagnostics.friction = friction.length();
  body.diagnostics.force.copy(friction);
  body.diagnostics.accel = held ? 0 : (drive.dot(frame.t) + f) / body.mass;
  if (body.motorForce) world.driveWork += body.motorForce * vt * h;
}

function postSurface(world, body, h) {
  if (body.attachment?.type !== 'surface') return;
  const surface = getSurface(world, body.attachment.id);
  if (!surface) return;
  const { t } = surfaceFrame(surface);
  const a0 = body.diagnostics.accel || 0;
  // Semi-implicit Euler shifts the position by +1/2 a h^2 per step. Remove
  // that first-order bias. Together with the averaged velocity update below
  // this is velocity Verlet, which is stable for springs as well as exact for
  // the constant-acceleration incline cases.
  if (a0 !== 0) {
    body.cannon.position.vadd(t.scale(-0.5 * a0 * h * h), body.cannon.position);
  }
  const c = surfaceContact(world, body);
  if (!c) return;
  if (body.kind === 'block' && c.speed <= 0.02
    && c.drive.length() <= c.surface.muS * Math.max(0, c.N)) {
    body.cannon.velocity.setZero();
    body.cannon.angularVelocity.setZero();
    body.diagnostics.static = true;
    body.diagnostics.friction = c.drive.length();
    body.diagnostics.accel = 0;
    body._surfaceV0 = null;
    return;
  }
  // Put the wheels back on the rolling constraint before asking for the new
  // acceleration; otherwise the stale wheel speed would look like slip and
  // kinetic friction would be applied for one step.
  if (isRollingBody(body) && body._surfaceRolling) {
    const vtNow = body.cannon.velocity.dot(t);
    const { b } = surfaceFrame(surface);
    body.cannon.angularVelocity.copy(b.scale(-vtNow / body.radius));
  }
  const d = bodyDiagnostics(world, body);
  const v0 = body._surfaceV0;
  if (v0 && !(d.static && !d.rolling)) {
    const vt = body.cannon.velocity.dot(t);
    const vtNext = v0.dot(t) + 0.5 * (a0 + (d.accel || 0)) * h;
    body.cannon.velocity.vadd(t.scale(vtNext - vt), body.cannon.velocity);
    if (isRollingBody(body) && (body._surfaceRolling || body.I === 0)) {
      const { b } = surfaceFrame(surface);
      body.cannon.angularVelocity.copy(b.scale(-vtNext / body.radius));
    }
  }
  body._surfaceV0 = null;
}

function preLoop(world, body) {
  const loop = getLoop(world, body.attachment.id);
  if (!loop) return;
  const att = body.attachment;
  if (!Number.isFinite(att.speed)) {
    att.speed = body.cannon.velocity.dot(loopTangent(att.theta));
  }
  body.cannon.position.copy(loopPoint(loop, att.theta));
  body.cannon.velocity.copy(loopTangent(att.theta).scale(att.speed));
  if (isRollingBody(body) && body.I > 0) {
    body.cannon.angularVelocity.set(0, 0, -att.speed / body.radius);
  } else {
    body.cannon.angularVelocity.setZero();
  }
}

function postLoop(world, body, h) {
  const loop = getLoop(world, body.attachment.id);
  if (!loop) return;
  const att = body.attachment;
  const R = loop.radius;
  const m = body.mass;
  const massEff = m + (isRollingBody(body) ? body.I / (body.radius * body.radius) : 0);
  const accelAt = (theta) => {
    body.cannon.position.copy(loopPoint(loop, theta));
    const ext = externalForceOn(world, body);
    const Ft = ext.dot(loopTangent(theta));
    return {
      a: (-m * world.g * Math.sin(theta) + Ft) / (massEff * R),
      ext,
    };
  };

  let theta = att.theta;
  let omega = att.speed / R;
  const a1 = accelAt(theta).a;
  const theta2 = theta + omega * h + 0.5 * a1 * h * h;
  const next = accelAt(theta2);
  const omega2 = omega + 0.5 * (a1 + next.a) * h;

  theta = theta2;
  att.theta = theta;
  att.speed = omega2 * R;
  body.cannon.position.copy(loopPoint(loop, theta));
  body.cannon.velocity.copy(loopTangent(theta).scale(att.speed));
  if (isRollingBody(body) && body.I > 0) {
    body.cannon.angularVelocity.set(0, 0, -att.speed / body.radius);
  } else {
    body.cannon.angularVelocity.setZero();
  }

  const inward = loopInward(theta);
  const N = (m * att.speed * att.speed) / R + m * world.g * Math.cos(theta) - next.ext.dot(inward);
  body.diagnostics.normal = N;
  body.diagnostics.mode = 'loop';
  body.diagnostics.speed = Math.abs(att.speed);
  body.diagnostics.contact = 'loop';
  body.diagnostics.friction = 0;
  body.diagnostics.static = false;
  body.diagnostics.accel = (-m * world.g * Math.sin(theta) + next.ext.dot(loopTangent(theta))) / massEff;
  if (N < 0) {
    const released = ((theta % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
    detachBody(world, body);
    world.events.push({
      type: 'leave-loop',
      bodyId: body.id,
      time: world.time,
      normal: N,
      theta: released,
    });
  }
}

function hcircleTangent(phi) {
  return V(-Math.sin(phi), 0, Math.cos(phi));
}

/** Normal force available at the horizontal ring (other vertical forces included). */
function hcircleNormal(world, body) {
  const ext = externalForceOn(world, body);
  return Math.max(0, body.mass * world.g - ext.y);
}

function releaseHCircle(world, body, circle, phi, speed, required, N, reason) {
  const y = circle.y + body.halfHeight + 0.01;
  body.attachment = null;
  body.skid = {
    muK: circle.muK,
    muS: circle.muS,
    y,
    circleId: circle.id,
  };
  // The ring no longer constrains the body. Keep only the tangential velocity:
  // from here on it is free to move outward and tangent while kinetic friction
  // acts on the horizontal plane.
  body.cannon.position.set(
    circle.x + circle.radius * Math.cos(phi),
    y,
    circle.z + circle.radius * Math.sin(phi),
  );
  body.cannon.velocity.copy(hcircleTangent(phi).scale(speed));
  body.cannon.angularVelocity.setZero();
  body.diagnostics.normal = N;
  body.diagnostics.friction = circle.muK * N;
  body.diagnostics.requiredFriction = required;
  body.diagnostics.static = false;
  body.diagnostics.speed = Math.abs(speed);
  body.diagnostics.mode = 'hcircle';
  body.diagnostics.contact = 'hcircle';
  if (N > EPS) {
    const f = circle.muK * N;
    const v = body.cannon.velocity;
    const sp = Math.hypot(v.x, v.z);
    if (sp > 1e-4) {
      body.diagnostics.force.copy(V((-f * v.x) / sp, 0, (-f * v.z) / sp));
    } else {
      body.diagnostics.force.setZero();
    }
  } else {
    body.diagnostics.force.setZero();
  }
  world.events.push({
    type: 'leave-hcircle',
    bodyId: body.id,
    time: world.time,
    required,
    available: circle.muS * N,
    normal: N,
    speed,
    muS: circle.muS,
    muK: circle.muK,
    reason,
  });
}

function preHCircle(world, body, h) {
  const circle = getHCircle(world, body.attachment.id);
  if (!circle) return;
  const att = body.attachment;
  const tangent = hcircleTangent(att.phi);
  // Measure the speed that the body actually has, not a stale cached value.
  const speed = body.cannon.velocity.dot(tangent);
  att.speed = speed;
  const N = hcircleNormal(world, body);
  const required = body.mass * speed * speed / circle.radius;
  const available = circle.muS * N;

  if (N <= EPS) {
    // External forces have lifted the body off the ring: it is a free body now.
    body.attachment = null;
    body.skid = null;
    world.events.push({
      type: 'leave-hcircle',
      bodyId: body.id,
      time: world.time,
      required,
      available,
      normal: N,
      speed,
      reason: 'no-contact',
    });
    return;
  }

  if (required > available + 1e-9) {
    // Static friction can no longer supply m v^2 / r. Drop the kinematic
    // circle constraint and let kinetic friction take over immediately.
    releaseHCircle(world, body, circle, att.phi, speed, required, N, 'static-limit');
    applySkidFriction(world, body, h);
    return;
  }

  // The ring is horizontal: the track normal balances gravity and any other
  // vertical force. Static friction is purely radial and does no work, so the
  // tangential speed is preserved exactly.
  body.cannon.applyForce(V(0, N, 0));
  body.cannon.position.set(
    circle.x + circle.radius * Math.cos(att.phi),
    circle.y + body.halfHeight + 0.01,
    circle.z + circle.radius * Math.sin(att.phi),
  );
  body.cannon.velocity.copy(tangent.scale(speed));
  body.cannon.angularVelocity.setZero();
  body.diagnostics.normal = N;
  body.diagnostics.friction = required;
  body.diagnostics.requiredFriction = required;
  body.diagnostics.static = true;
  body.diagnostics.speed = Math.abs(speed);
  body.diagnostics.mode = 'hcircle';
  body.diagnostics.contact = 'hcircle';
  body.diagnostics.force.copy(V(-Math.cos(att.phi) * required, 0, -Math.sin(att.phi) * required));
}

function postHCircle(world, body, h) {
  const circle = getHCircle(world, body.attachment.id);
  if (!circle) return;
  const att = body.attachment;
  // Use the tangent at the pre-step angle. Projecting the engine velocity onto
  // the already-rotated tangent would bleed speed by cos(dphi) every substep.
  const speed = body.cannon.velocity.dot(hcircleTangent(att.phi));
  // Advance the circle angle analytically. Re-deriving it from the engine's
  // straight-line chord would make the angular rate atan(omega h)/(omega h)
  // low by O((omega h)^2) every step.
  const phi = att.phi + (0.5 * (att.speed + speed) * h) / circle.radius;
  const N = hcircleNormal(world, body);
  const required = body.mass * speed * speed / circle.radius;
  const available = circle.muS * N;

  if (N <= EPS) {
    body.attachment = null;
    body.skid = null;
    world.events.push({
      type: 'leave-hcircle',
      bodyId: body.id,
      time: world.time,
      required,
      available,
      normal: N,
      speed,
      reason: 'no-contact',
    });
    return;
  }

  if (required > available + 1e-9) {
    // A tangential force (spring/applied force) can push the body past the
    // static limit during the engine step. Release it now instead of holding
    // it on the circle for one extra substep.
    releaseHCircle(world, body, circle, phi, speed, required, N, 'static-limit');
    return;
  }

  att.phi = phi;
  att.speed = speed;
  body.cannon.position.set(
    circle.x + circle.radius * Math.cos(phi),
    circle.y + body.halfHeight + 0.01,
    circle.z + circle.radius * Math.sin(phi),
  );
  body.cannon.velocity.copy(hcircleTangent(phi).scale(speed));
  body.cannon.angularVelocity.setZero();
  body.diagnostics.normal = N;
  body.diagnostics.friction = required;
  body.diagnostics.requiredFriction = required;
  body.diagnostics.static = true;
  body.diagnostics.speed = Math.abs(speed);
  body.diagnostics.mode = 'hcircle';
  body.diagnostics.contact = 'hcircle';
  body.diagnostics.force.copy(V(-Math.cos(phi) * required, 0, -Math.sin(phi) * required));
}

function applySkidFriction(world, body, h) {
  const skid = body.skid;
  if (!skid) return;
  const N = hcircleNormal(world, body);
  if (N <= EPS) {
    // No contact with the track: no normal force, therefore no kinetic friction.
    body.skid = null;
    body.diagnostics.normal = 0;
    body.diagnostics.friction = 0;
    body.diagnostics.requiredFriction = 0;
    body.diagnostics.speed = Math.hypot(body.cannon.velocity.x, body.cannon.velocity.z);
    body.diagnostics.static = false;
    body.diagnostics.mode = 'free';
    body.diagnostics.contact = '';
    body.diagnostics.force.setZero();
    return;
  }
  body.cannon.position.y = skid.y;
  body.cannon.velocity.y = 0;
  body.cannon.applyForce(V(0, N, 0));
  const vx = body.cannon.velocity.x;
  const vz = body.cannon.velocity.z;
  const speed = Math.hypot(vx, vz);
  const f = Math.max(0, skid.muK) * N;
  if (speed > 1e-4) {
    const friction = V((-f * vx) / speed, 0, (-f * vz) / speed);
    body.cannon.applyForce(friction);
    world.thermal += f * speed * h;
    body.diagnostics.normal = N;
    body.diagnostics.friction = f;
    body.diagnostics.requiredFriction = 0;
    body.diagnostics.speed = speed;
    body.diagnostics.static = false;
    body.diagnostics.mode = 'hcircle';
    body.diagnostics.contact = 'hcircle';
    body.diagnostics.force.copy(friction);
  } else {
    body.cannon.velocity.x = 0;
    body.cannon.velocity.z = 0;
    body.diagnostics.normal = N;
    body.diagnostics.friction = 0;
    body.diagnostics.requiredFriction = 0;
    body.diagnostics.speed = 0;
    body.diagnostics.static = true;
    body.diagnostics.mode = 'hcircle';
    body.diagnostics.contact = 'hcircle';
    body.diagnostics.force.setZero();
  }
}

function postSkid(world, body) {
  const skid = body.skid;
  if (!skid) return;
  body.cannon.position.y = skid.y;
  body.cannon.velocity.y = 0;
  body.cannon.aabbNeedsUpdate = true;
  if (body.cannon.velocity.x * body.cannon.velocity.x + body.cannon.velocity.z * body.cannon.velocity.z < 4e-4) {
    body.cannon.velocity.x = 0;
    body.cannon.velocity.z = 0;
  }
}

function applyTurntableContact(world, body, table, h) {
  const att = body.attachment;
  const p = body.cannon.position;
  const r = Math.max(1e-4, Math.hypot(p.x - table.x, p.z - table.z));
  const phi = Math.atan2(p.z - table.z, p.x - table.x);
  const surfaceV = tableSurfaceVelocity(table, p);
  const ext = externalForceOn(world, body);
  const N = Math.max(0, body.mass * world.g - ext.y);
  const required = body.mass * table.omega * table.omega * r;
  const staticMax = table.muS * N;

  if (att.stuck) {
    if (r <= table.radius + 0.02 && required <= staticMax + 1e-9) {
      // Only set the velocity here. The engine advances the body along this
      // tangent during the step; postTurntable re-projects it onto the circle
      // and refreshes the velocity. Advancing the pose here as well would
      // double the angular rate (the original 2*omega bug).
      att.phi = phi;
      body.cannon.velocity.copy(tableSurfaceVelocity(table, body.cannon.position));
      body.cannon.angularVelocity.setZero();
      body.diagnostics.normal = N;
      body.diagnostics.friction = required;
      body.diagnostics.requiredFriction = required;
      body.diagnostics.static = true;
      body.diagnostics.speed = Math.abs(table.omega * r);
      body.diagnostics.mode = 'turntable';
      body.diagnostics.contact = 'turntable';
      return;
    }
    att.stuck = false;
    body.cannon.velocity.copy(surfaceV);
  }

  const rel = cloneV(body.cannon.velocity);
  rel.vsub(surfaceV, rel);
  let relSpeed = rel.length();
  let dir;
  if (relSpeed > 1e-4) dir = rel.scale(1 / relSpeed);
  else {
    // At the friction limit the body slips outward; kinetic friction is inward.
    dir = V(Math.cos(phi), 0, Math.sin(phi));
    relSpeed = Math.max(relSpeed, Math.abs(table.omega) * r * 0.05);
  }
  const kinetic = dir.scale(-table.muK * N);
  body.cannon.applyForce(kinetic);
  body.diagnostics.normal = N;
  body.diagnostics.friction = table.muK * N;
  body.diagnostics.requiredFriction = required;
  body.diagnostics.static = false;
  body.diagnostics.speed = relSpeed;
  body.diagnostics.mode = 'turntable';
  body.diagnostics.contact = 'turntable';
  world.thermal += table.muK * N * relSpeed * h;

  // Reaction torque on the table (force on the table is -kinetic).
  const rv = V(p.x - table.x, 0, p.z - table.z);
  const tableForce = kinetic.scale(-1);
  const torque = rv.cross(tableForce);
  table.frictionTorque += torque.y;

  if (Math.hypot(p.x - table.x, p.z - table.z) > table.radius + 0.25) {
    body.attachment = null;
    world.events.push({ type: 'leave-turntable', bodyId: body.id, time: world.time });
  }
}

function postTurntable(world, body, table) {
  if (body.attachment?.type !== 'turntable') return;
  if (body.attachment.stuck) {
    // The engine has advanced one tangent step. Re-project onto the exact
    // radius so the block neither walks outward nor gains a second angle
    // increment. Velocity is refreshed from the disc surface afterwards.
    const att = body.attachment;
    const p = body.cannon.position;
    const phi = Math.atan2(p.z - table.z, p.x - table.x);
    body.cannon.position.set(
      table.x + att.r * Math.cos(phi),
      tableTopY(table) + body.halfHeight,
      table.z + att.r * Math.sin(phi),
    );
    body.cannon.quaternion.setFromEuler(0, -phi, 0);
    body.cannon.velocity.copy(tableSurfaceVelocity(table, body.cannon.position));
    body.cannon.angularVelocity.setZero();
    att.phi = phi;
    body.cannon.aabbNeedsUpdate = true;
    return;
  }
  const p = body.cannon.position;
  const dx = p.x - table.x;
  const dz = p.z - table.z;
  const r = Math.hypot(dx, dz);
  if (r > table.radius + 0.25) {
    body.attachment = null;
    return;
  }
  const phi = Math.atan2(dz, dx);
  const surfaceV = tableSurfaceVelocity(table, p);
  const rel = cloneV(body.cannon.velocity);
  rel.vsub(surfaceV, rel);
  const required = body.mass * table.omega * table.omega * r;
  if (rel.length() < 0.02 && required <= table.muS * body.mass * world.g && r <= table.radius) {
    body.attachment = { type: 'turntable', id: table.id, r, phi, stuck: true };
    body.cannon.position.set(
      table.x + r * Math.cos(phi),
      tableTopY(table) + body.halfHeight,
      table.z + r * Math.sin(phi),
    );
    body.cannon.velocity.copy(surfaceV);
    body.cannon.angularVelocity.setZero();
  }
}

function updateTurntable(world, table, h) {
  if (table.drive === 'target') {
    table.omega = table.targetOmega;
  } else {
    const torque = table.drive === 'torque' ? table.torque : 0;
    table.omega += ((torque + table.frictionTorque) / Math.max(1e-6, table.I)) * h;
    world.driveWork += torque * table.omega * h;
    table.frictionTorque = 0;
  }
  table.angle += table.omega * h;
}

/* ------------------------------------------------------------------ */
/* Phase 2: oscillation, frames, angular momentum and gravity         */
/* ------------------------------------------------------------------ */

const TWO_PI = Math.PI * 2;

function wrapAngle(a) {
  let x = a;
  while (x > Math.PI) x -= TWO_PI;
  while (x < -Math.PI) x += TWO_PI;
  return x;
}

/** Relative velocity in a frame moving at frameVelocity (display transform only). */
export function relativeVelocity(velocity, frameVelocity) {
  return {
    x: (velocity?.x || 0) - (frameVelocity?.x || 0),
    y: (velocity?.y || 0) - (frameVelocity?.y || 0),
    z: (velocity?.z || 0) - (frameVelocity?.z || 0),
  };
}

/* -------------------------- damped oscillator ---------------------- */

export function addOscillator(world, opts = {}) {
  const {
    id, name = '', x = 0, y = 1.15, z = 0,
    mass = 1, k = 4, damping = 0.35,
    driveForce = 1, driveOmega = 2, driveOn = true,
    amplitude = 0.6,
  } = opts;
  const m = Math.max(0.01, mass);
  const springK = Math.max(0, k);
  const osc = {
    type: 'oscillator',
    id: assignId(world, 'osc', id),
    name,
    x, y, z,
    mass: m,
    k: springK,
    b: Math.max(0, damping),
    driveF0: Math.max(0, driveForce),
    driveOmega: Math.max(0.01, driveOmega),
    driveOn: !!driveOn,
    u: amplitude,
    v: 0,
    time: 0,
    initial: { u: amplitude, v: 0, time: 0 },
    omega0: Math.sqrt(springK / m),
    measuredPeriod: 0,
    measuredAmplitude: 0,
    peaks: [],
    prevU: amplitude,
    prevV: 0,
    lastCross: null,
    cycleIndex: -1,
    cycleMin: amplitude,
    cycleMax: amplitude,
    mount: opts.mount ? cloneMount(opts.mount) : null,
  };
  world.oscillators.push(osc);
  return osc;
}

export function getOscillator(world, id) {
  return world.oscillators.find((o) => o.id === id) || null;
}

export function oscillatorDampingRatio(osc) {
  return osc.b / Math.max(EPS, 2 * Math.sqrt(osc.mass * osc.k));
}

export function oscillatorDampedOmega(osc) {
  const gamma = osc.b / (2 * osc.mass);
  const w2 = osc.omega0 * osc.omega0 - gamma * gamma;
  return w2 > 0 ? Math.sqrt(w2) : 0;
}

export function oscillatorRegime(osc) {
  const bc = 2 * Math.sqrt(osc.k * osc.mass);
  if (osc.b <= 1e-12) return 'undamped';
  if (Math.abs(osc.b - bc) <= Math.max(1e-9, bc * 1e-6)) return 'critical';
  return osc.b < bc ? 'under' : 'over';
}

/** Analytic steady-state amplitude A(ω) = F0 / sqrt((k - mω²)² + (bω)²). */
export function oscillatorAnalyticAmplitude(osc, omega = osc.driveOmega) {
  if (!osc.driveOn || osc.driveF0 <= 0) return 0;
  const real = osc.k - osc.mass * omega * omega;
  const imag = osc.b * omega;
  return osc.driveF0 / Math.sqrt(real * real + imag * imag);
}

export function oscillatorEnvelope(osc) {
  const gamma = osc.b / (2 * osc.mass);
  const wd = oscillatorDampedOmega(osc);
  if (wd <= 0) return Math.abs(osc.u);
  return Math.hypot(osc.u, (osc.v + gamma * osc.u) / wd);
}

function resetOscillator(osc) {
  osc.u = osc.initial?.u ?? 0;
  osc.v = osc.initial?.v ?? 0;
  osc.time = osc.initial?.time ?? 0;
  osc.prevU = osc.u;
  osc.prevV = osc.v;
  osc.lastCross = null;
  osc.measuredPeriod = 0;
  osc.measuredAmplitude = 0;
  osc.peaks = [];
  osc.cycleIndex = -1;
  osc.cycleMin = osc.u;
  osc.cycleMax = osc.u;
}

export function stepOscillator(osc, h) {
  const m = osc.mass;
  const force = (u, v, t) => (
    -osc.k * u - osc.b * v + (osc.driveOn ? osc.driveF0 * Math.cos(osc.driveOmega * t) : 0)
  ) / m;
  const u0 = osc.u;
  const v0 = osc.v;
  const t0 = osc.time;
  const k1u = v0;
  const k1v = force(u0, v0, t0);
  const k2u = v0 + 0.5 * h * k1v;
  const k2v = force(u0 + 0.5 * h * k1u, v0 + 0.5 * h * k1v, t0 + 0.5 * h);
  const k3u = v0 + 0.5 * h * k2v;
  const k3v = force(u0 + 0.5 * h * k2u, v0 + 0.5 * h * k2v, t0 + 0.5 * h);
  const k4u = v0 + h * k3v;
  const k4v = force(u0 + h * k3u, v0 + h * k3v, t0 + h);
  const u1 = u0 + (h / 6) * (k1u + 2 * k2u + 2 * k3u + k4u);
  const v1 = v0 + (h / 6) * (k1v + 2 * k2v + 2 * k3v + k4v);

  // Upward zero crossing: gives the measured oscillation period.
  if (osc.prevU <= 0 && u1 > 0 && osc.prevU !== u1) {
    const frac = -osc.prevU / (u1 - osc.prevU);
    const tc = t0 + frac * h;
    if (osc.lastCross != null) {
      const period = tc - osc.lastCross;
      if (period > 1e-3) osc.measuredPeriod = period;
    }
    osc.lastCross = tc;
  }
  // Positive peaks feed the envelope-decay view.
  if (osc.prevV > 0 && v1 <= 0 && osc.prevV !== v1) {
    const frac = osc.prevV / (osc.prevV - v1);
    osc.peaks.push({ t: t0 + frac * h, u: u0 + frac * (u1 - u0) });
    if (osc.peaks.length > 240) osc.peaks.shift();
  }

  osc.u = u1;
  osc.v = v1;
  osc.time = t0 + h;
  osc.prevU = u1;
  osc.prevV = v1;

  if (osc.driveOn) {
    const idx = Math.floor((osc.time * osc.driveOmega) / TWO_PI);
    if (idx !== osc.cycleIndex) {
      if (osc.cycleIndex >= 0) {
        osc.measuredAmplitude = Math.max(0, (osc.cycleMax - osc.cycleMin) / 2);
      }
      osc.cycleIndex = idx;
      osc.cycleMin = u1;
      osc.cycleMax = u1;
    } else {
      osc.cycleMin = Math.min(osc.cycleMin, u1);
      osc.cycleMax = Math.max(osc.cycleMax, u1);
    }
  }
}

/* ---------------------------- torsion pendulum -------------------- */

export function addTorsionPendulum(world, opts = {}) {
  const {
    id, name = '', x = 0, y = 1.9, z = 0,
    mass = 2.4, radius = 0.9, I = null, kappa = 0.9,
    amplitude = 15, damping = 0,
  } = opts;
  const inertia = Math.max(1e-6, I ?? 0.5 * mass * radius * radius);
  const pend = {
    type: 'torsion',
    id: assignId(world, 'tors', id),
    name,
    x, y, z,
    mass,
    radius,
    I: inertia,
    kappa: Math.max(1e-6, kappa),
    damping: Math.max(0, damping),
    theta0: (amplitude * Math.PI) / 180,
    theta: (amplitude * Math.PI) / 180,
    omega: 0,
    time: 0,
    initial: { theta: (amplitude * Math.PI) / 180, omega: 0, time: 0 },
    measuredPeriod: 0,
    prevTheta: (amplitude * Math.PI) / 180,
    lastTurn: 0,
    prevOmega: 0,
    mount: opts.mount ? cloneMount(opts.mount) : null,
  };
  world.torsionPendulums.push(pend);
  return pend;
}

export function getTorsionPendulum(world, id) {
  return world.torsionPendulums.find((p) => p.id === id) || null;
}

export function torsionPeriod(pend) {
  return TWO_PI * Math.sqrt(pend.I / pend.kappa);
}

export function stepTorsionPendulum(pend, h) {
  const acc = (theta, omega) => (-pend.kappa * theta - pend.damping * omega) / pend.I;
  const th0 = pend.theta;
  const w0 = pend.omega;
  const k1t = w0;
  const k1w = acc(th0, w0);
  const k2t = w0 + 0.5 * h * k1w;
  const k2w = acc(th0 + 0.5 * h * k1t, w0 + 0.5 * h * k1w);
  const k3t = w0 + 0.5 * h * k2w;
  const k3w = acc(th0 + 0.5 * h * k2t, w0 + 0.5 * h * k2w);
  const k4t = w0 + h * k3w;
  const k4w = acc(th0 + h * k3t, w0 + h * k3w);
  const th1 = th0 + (h / 6) * (k1t + 2 * k2t + 2 * k3t + k4t);
  const w1 = w0 + (h / 6) * (k1w + 2 * k2w + 2 * k3w + k4w);
  // Successive turning points are half a period apart; the release point is
  // the first turning point, so the first extremum already yields T.
  if ((pend.prevOmega > 0 && w1 <= 0) || (pend.prevOmega < 0 && w1 >= 0)) {
    if (pend.prevOmega !== w1) {
      const frac = pend.prevOmega / (pend.prevOmega - w1);
      const tc = pend.time + frac * h;
      if (tc > (pend.lastTurn ?? 0) + 1e-6) {
        pend.measuredPeriod = 2 * (tc - (pend.lastTurn ?? 0));
        pend.lastTurn = tc;
      }
    }
  }
  pend.theta = th1;
  pend.omega = w1;
  pend.time += h;
  pend.prevTheta = th1;
  pend.prevOmega = w1;
}

function resetTorsion(pend) {
  pend.theta = pend.initial?.theta ?? 0;
  pend.omega = pend.initial?.omega ?? 0;
  pend.time = pend.initial?.time ?? 0;
  pend.prevTheta = pend.theta;
  pend.prevOmega = pend.omega;
  pend.lastTurn = pend.time;
  pend.measuredPeriod = 0;
}

/* ------------------------ elevator and carriage -------------------- */

/** Scale reading in an elevator: upward acceleration is positive. */
export function apparentWeight(mass, g, accel) {
  return mass * (g + accel);
}

export function addElevator(world, opts = {}) {
  const {
    id, name = '', x = 0, y = 0, z = 0,
    mass = 2, accel = 2, height = 2.6, width = 1.7,
  } = opts;
  const elevator = {
    type: 'elevator',
    id: assignId(world, 'lift', id),
    name,
    x, y, z,
    mass: Math.max(0.01, mass),
    accel,
    height,
    width,
    time: 0,
    mount: opts.mount ? cloneMount(opts.mount) : null,
  };
  world.elevators.push(elevator);
  return elevator;
}

export function getElevator(world, id) {
  return world.elevators.find((e) => e.id === id) || null;
}

export function elevatorReading(world, elevator) {
  return apparentWeight(elevator.mass, world.g, elevator.accel);
}

/** Signed bob tilt magnitude (rearward positive) for a carriage accelerating at a. */
export function carriageTilt(accel, g = 9.8) {
  return Math.atan2(accel, g);
}

export function addCarriage(world, opts = {}) {
  const {
    id, name = '', x = 0, y = 0, z = 0,
    mass = 1.2, accel = 1.5, length = 1.25, damping = 1.6,
  } = opts;
  const carriage = {
    type: 'carriage',
    id: assignId(world, 'carriage', id),
    name,
    x, y, z,
    mass,
    accel,
    length: Math.max(0.2, length),
    damping: Math.max(0, damping),
    theta: 0,
    omega: 0,
    time: 0,
    initial: { theta: 0, omega: 0, time: 0 },
    mount: opts.mount ? cloneMount(opts.mount) : null,
  };
  world.carriages.push(carriage);
  return carriage;
}

export function getCarriage(world, id) {
  return world.carriages.find((c) => c.id === id) || null;
}

export function stepCarriage(world, carriage, h) {
  const g = world.g;
  const L = carriage.length;
  const acc = (theta, omega) => (
    -(g / L) * Math.sin(theta) - (carriage.accel / L) * Math.cos(theta) - carriage.damping * omega
  );
  const th0 = carriage.theta;
  const w0 = carriage.omega;
  const k1t = w0;
  const k1w = acc(th0, w0);
  const k2t = w0 + 0.5 * h * k1w;
  const k2w = acc(th0 + 0.5 * h * k1t, w0 + 0.5 * h * k1w);
  const k3t = w0 + 0.5 * h * k2w;
  const k3w = acc(th0 + 0.5 * h * k2t, w0 + 0.5 * h * k2w);
  const k4t = w0 + h * k3w;
  const k4w = acc(th0 + h * k3t, w0 + h * k3w);
  carriage.theta = th0 + (h / 6) * (k1t + 2 * k2t + 2 * k3t + k4t);
  carriage.omega = w0 + (h / 6) * (k1w + 2 * k2w + 2 * k3w + k4w);
  carriage.time += h;
}

function resetCarriage(carriage) {
  carriage.theta = carriage.initial?.theta ?? 0;
  carriage.omega = carriage.initial?.omega ?? 0;
  carriage.time = carriage.initial?.time ?? 0;
}

/* -------------------------- angular momentum ----------------------- */

export function addAngularTable(world, opts = {}) {
  const {
    id, name = '', x = 0, y = 0.55, z = 0,
    radius = 1.6, discMass = 8, blockMass = 1,
    r = 1.05, omega = 2.2, rSpeed = 0, radialMotor = false, blockOn = true,
  } = opts;
  const I = 0.5 * Math.max(0.01, discMass) * radius * radius;
  const table = {
    type: 'angularTable',
    id: assignId(world, 'ang', id),
    name,
    x, y, z,
    radius,
    discMass,
    blockMass: Math.max(0.01, blockMass),
    I,
    r,
    r0: r,
    rSpeed,
    radialMotor: !!radialMotor,
    blockOn: !!blockOn,
    omega,
    omega0: omega,
    angle: 0,
    L: 0,
    ke: 0,
    dropped: false,
    time: 0,
    initial: null,
    mount: opts.mount ? cloneMount(opts.mount) : null,
  };
  table.L = (I + (table.blockOn ? table.blockMass * r * r : 0)) * omega;
  table.ke = 0.5 * (I + (table.blockOn ? table.blockMass * r * r : 0)) * omega * omega;
  table.initial = {
    r, omega, angle: 0, blockOn: table.blockOn, L: table.L, ke: table.ke, dropped: false, time: 0,
  };
  world.angularTables.push(table);
  return table;
}

export function getAngularTable(world, id) {
  return world.angularTables.find((t) => t.id === id) || null;
}

export function angularTableMoment(table) {
  return table.I + (table.blockOn ? table.blockMass * table.r * table.r : 0);
}

export function angularTableMomentum(table) {
  return angularTableMoment(table) * table.omega;
}

export function dropAngularBlock(table) {
  if (table.blockOn) return false;
  table.blockOn = true;
  table.dropped = true;
  table.omega = table.L / angularTableMoment(table);
  table.ke = 0.5 * angularTableMoment(table) * table.omega * table.omega;
  return true;
}

/** Lift a stuck block straight off the disc: the disc keeps only its own L. */
export function liftAngularBlock(table) {
  if (!table.blockOn) return false;
  table.L = table.I * table.omega;
  table.blockOn = false;
  table.dropped = false;
  table.omega = table.L / table.I;
  table.ke = 0.5 * table.I * table.omega * table.omega;
  return true;
}

export function stepAngularTable(table, h) {
  if (table.blockOn && table.radialMotor) {
    table.r = clamp(table.r + table.rSpeed * h, 0.15, table.radius * 0.98);
  }
  table.omega = table.L / Math.max(EPS, angularTableMoment(table));
  table.angle += table.omega * h;
  table.ke = 0.5 * angularTableMoment(table) * table.omega * table.omega;
  table.time += h;
}

function resetAngularTable(table) {
  const init = table.initial;
  if (!init) return;
  table.r = init.r;
  table.omega = init.omega;
  table.angle = init.angle;
  table.blockOn = init.blockOn;
  table.dropped = !!init.dropped;
  table.L = init.L;
  table.ke = init.ke;
  table.time = init.time;
}

/* --------------------------- rod under torque ---------------------- */

export function rodInertia(mass, length, pivot = 'end') {
  return pivot === 'center'
    ? (mass * length * length) / 12
    : (mass * length * length) / 3;
}

export function addRod(world, opts = {}) {
  const {
    id, name = '', x = 0, y = 2.2, z = 0,
    mass = 2, length = 2.2, pivot = 'end', torque = 1, theta0 = 0,
  } = opts;
  const rod = {
    type: 'rod',
    id: assignId(world, 'rod', id),
    name,
    x, y, z,
    mass: Math.max(0.01, mass),
    length: Math.max(0.2, length),
    pivot: pivot === 'center' ? 'center' : 'end',
    torque,
    I: rodInertia(Math.max(0.01, mass), Math.max(0.2, length), pivot),
    theta: theta0,
    omega: 0,
    alpha: 0,
    time: 0,
    initial: { theta: theta0, omega: 0, time: 0 },
    mount: opts.mount ? cloneMount(opts.mount) : null,
  };
  world.rods.push(rod);
  return rod;
}

export function getRod(world, id) {
  return world.rods.find((r) => r.id === id) || null;
}

export function stepRod(rod, h) {
  rod.alpha = rod.torque / Math.max(EPS, rod.I);
  rod.omega += rod.alpha * h;
  rod.theta += rod.omega * h;
  rod.time += h;
}

function resetRod(rod) {
  rod.theta = rod.initial?.theta ?? 0;
  rod.omega = rod.initial?.omega ?? 0;
  rod.time = rod.initial?.time ?? 0;
  rod.alpha = 0;
}

/* ---------------------------- gravity orbits ---------------------- */

export function addOrbit(world, opts = {}) {
  const {
    id, name = '', x = 0, y = 1, z = 0,
    M = 8, G = 1, r = 6, phase = 0, speedFactor = 1, speed = null,
  } = opts;
  const mu = Math.max(1e-9, G * M);
  const vc = Math.sqrt(mu / r);
  const v0 = Number.isFinite(speed) ? speed : speedFactor * vc;
  const px = r * Math.cos(phase);
  const pz = r * Math.sin(phase);
  const orbit = {
    type: 'orbit',
    id: assignId(world, 'orbit', id),
    name,
    x, y, z,
    M, G, mu,
    r0: r,
    phase,
    speedFactor,
    px, pz,
    vx: -Math.sin(phase) * v0,
    vz: Math.cos(phase) * v0,
    time: 0,
    trail: [],
    trailAt: -1,
    unwrapped: 0,
    prevAngle: phase,
    periodMeasured: 0,
    periodStart: 0,
    nextPeriodAngle: TWO_PI,
    radiusMax: r,
    radiusMin: r,
    arealMin: Infinity,
    arealMax: -Infinity,
    arealSum: 0,
    arealCount: 0,
    energy0: 0.5 * v0 * v0 - mu / r,
    energy: 0.5 * v0 * v0 - mu / r,
    energyDrift: 0,
    initial: null,
    mount: opts.mount ? cloneMount(opts.mount) : null,
  };
  orbit.initial = {
    px, pz, vx: orbit.vx, vz: orbit.vz, time: 0,
    energy0: orbit.energy0,
  };
  world.orbits.push(orbit);
  return orbit;
}

export function getOrbit(world, id) {
  return world.orbits.find((o) => o.id === id) || null;
}

/** Set a new launch geometry and return the satellite to t = 0. */
export function setOrbitLaunch(orbit, opts = {}) {
  const r = Math.max(0.05, opts.r ?? orbit.r0);
  const phase = opts.phase ?? orbit.phase;
  const speedFactor = opts.speedFactor ?? orbit.speedFactor;
  const v0 = speedFactor * Math.sqrt(orbit.mu / r);
  orbit.r0 = r;
  orbit.phase = phase;
  orbit.speedFactor = speedFactor;
  orbit.initial = {
    px: r * Math.cos(phase),
    pz: r * Math.sin(phase),
    vx: -Math.sin(phase) * v0,
    vz: Math.cos(phase) * v0,
    time: 0,
    energy0: 0.5 * v0 * v0 - orbit.mu / r,
  };
  resetOrbit(orbit);
  return orbit;
}

export function orbitSemiMajor(orbit) {
  if (!(orbit.energy < 0)) return Infinity;
  return -orbit.mu / (2 * orbit.energy);
}

export function orbitKeplerPeriod(orbit) {
  const a = orbitSemiMajor(orbit);
  if (!Number.isFinite(a)) return Infinity;
  return TWO_PI * Math.sqrt((a * a * a) / orbit.mu);
}

export function orbitEscapeSpeed(orbit, r = Math.hypot(orbit.px, orbit.pz)) {
  return Math.sqrt((2 * orbit.mu) / Math.max(EPS, r));
}

export function orbitArealVelocity(orbit) {
  return Math.abs(orbit.px * orbit.vz - orbit.pz * orbit.vx) / 2;
}

export function stepOrbit(orbit, h) {
  const ax = (px, pz) => {
    const r2 = px * px + pz * pz;
    const r = Math.sqrt(r2);
    const factor = -orbit.mu / Math.max(EPS, r2 * r);
    return { x: factor * px, z: factor * pz };
  };
  const a0 = ax(orbit.px, orbit.pz);
  orbit.vx += 0.5 * a0.x * h;
  orbit.vz += 0.5 * a0.z * h;
  orbit.px += orbit.vx * h;
  orbit.pz += orbit.vz * h;
  const a1 = ax(orbit.px, orbit.pz);
  orbit.vx += 0.5 * a1.x * h;
  orbit.vz += 0.5 * a1.z * h;
  orbit.time += h;

  const r = Math.hypot(orbit.px, orbit.pz);
  orbit.radiusMax = Math.max(orbit.radiusMax, r);
  orbit.radiusMin = Math.min(orbit.radiusMin, r);
  orbit.energy = 0.5 * (orbit.vx * orbit.vx + orbit.vz * orbit.vz) - orbit.mu / r;
  orbit.energyDrift = Math.abs(orbit.energy - orbit.energy0) / Math.max(EPS, Math.abs(orbit.energy0));

  const areal = orbit.px * orbit.vz - orbit.pz * orbit.vx;
  orbit.arealMin = Math.min(orbit.arealMin, areal);
  orbit.arealMax = Math.max(orbit.arealMax, areal);
  orbit.arealSum += areal;
  orbit.arealCount += 1;

  const angle = Math.atan2(orbit.pz, orbit.px);
  orbit.unwrapped += wrapAngle(angle - orbit.prevAngle);
  orbit.prevAngle = angle;
  if (orbit.unwrapped >= orbit.nextPeriodAngle) {
    const measured = orbit.time - orbit.periodStart;
    if (measured > 1e-3) orbit.periodMeasured = measured;
    orbit.periodStart = orbit.time;
    orbit.nextPeriodAngle += TWO_PI;
  }
  if (orbit.time - orbit.trailAt >= 1 / 30) {
    orbit.trail.push([orbit.px, orbit.pz]);
    orbit.trailAt = orbit.time;
    if (orbit.trail.length > 2400) orbit.trail.shift();
  }
}

function resetOrbit(orbit) {
  const init = orbit.initial;
  if (!init) return;
  orbit.px = init.px;
  orbit.pz = init.pz;
  orbit.vx = init.vx;
  orbit.vz = init.vz;
  orbit.time = 0;
  orbit.trail = [];
  orbit.trailAt = -1;
  orbit.unwrapped = 0;
  orbit.prevAngle = Math.atan2(orbit.pz, orbit.px);
  orbit.periodMeasured = 0;
  orbit.periodStart = 0;
  orbit.nextPeriodAngle = TWO_PI;
  orbit.radiusMax = Math.hypot(orbit.px, orbit.pz);
  orbit.radiusMin = orbit.radiusMax;
  orbit.arealMin = Infinity;
  orbit.arealMax = -Infinity;
  orbit.arealSum = 0;
  orbit.arealCount = 0;
  orbit.energy0 = init.energy0;
  orbit.energy = init.energy0;
  orbit.energyDrift = 0;
}

/* -------------------------- sphere tunnel -------------------------- */

export function addTunnel(world, opts = {}) {
  const {
    id, name = '', x = 0, y = 3.1, z = 0,
    R = 3.2, M = 8, G = 1, r0 = null,
  } = opts;
  const mu = Math.max(1e-9, G * M);
  const tunnel = {
    type: 'tunnel',
    id: assignId(world, 'tunnel', id),
    name,
    x, y, z,
    R, M, G, mu,
    omega: Math.sqrt(mu / (R * R * R)),
    s: r0 == null ? R : r0,
    v: 0,
    time: 0,
    measuredPeriod: 0,
    prevS: r0 == null ? R : r0,
    lastTurn: 0,
    prevV: 0,
    initial: { s: r0 == null ? R : r0, v: 0, time: 0 },
    mount: opts.mount ? cloneMount(opts.mount) : null,
  };
  world.tunnels.push(tunnel);
  return tunnel;
}

export function getTunnel(world, id) {
  return world.tunnels.find((t) => t.id === id) || null;
}

export function tunnelPeriod(tunnel) {
  return TWO_PI / tunnel.omega;
}

export function stepTunnel(tunnel, h) {
  const acc = (s) => -tunnel.omega * tunnel.omega * s;
  const s0 = tunnel.s;
  const v0 = tunnel.v;
  const k1s = v0;
  const k1v = acc(s0);
  const k2s = v0 + 0.5 * h * k1v;
  const k2v = acc(s0 + 0.5 * h * k1s);
  const k3s = v0 + 0.5 * h * k2v;
  const k3v = acc(s0 + 0.5 * h * k2s);
  const k4s = v0 + h * k3v;
  const k4v = acc(s0 + h * k3s);
  const s1 = s0 + (h / 6) * (k1s + 2 * k2s + 2 * k3s + k4s);
  const v1 = v0 + (h / 6) * (k1v + 2 * k2v + 2 * k3v + k4v);
  // Turning points are half a period apart; the release point is a turning
  // point, so the first extremum already gives the full period.
  if ((tunnel.prevV > 0 && v1 <= 0) || (tunnel.prevV < 0 && v1 >= 0)) {
    if (tunnel.prevV !== v1) {
      const frac = tunnel.prevV / (tunnel.prevV - v1);
      const tc = tunnel.time + frac * h;
      if (tc > (tunnel.lastTurn ?? 0) + 1e-6) {
        tunnel.measuredPeriod = 2 * (tc - (tunnel.lastTurn ?? 0));
        tunnel.lastTurn = tc;
      }
    }
  }
  tunnel.s = s1;
  tunnel.v = v1;
  tunnel.time += h;
  tunnel.prevS = s1;
  tunnel.prevV = v1;
}

function resetTunnel(tunnel) {
  tunnel.s = tunnel.initial?.s ?? tunnel.R;
  tunnel.v = tunnel.initial?.v ?? 0;
  tunnel.time = tunnel.initial?.time ?? 0;
  tunnel.prevS = tunnel.s;
  tunnel.prevV = tunnel.v;
  tunnel.lastTurn = tunnel.time;
  tunnel.measuredPeriod = 0;
}

/* ------------------------------------------------------------------ */
/* Fixed-step integration                                             */
/* ------------------------------------------------------------------ */

export function substep(world, h) {
  if (world.em?.mode === 'em') {
    stepEM(world.em, h);
    updateMountedApparatus(world);
    world.time += h;
    return;
  }
  world.engine.gravity.set(0, -world.g, 0);
  for (const table of world.turntables) updateTurntable(world, table, h);
  applySpringForces(world);
  applyAppliedForces(world);
  applyDragForces(world);
  for (const pulley of world.pulleys) applyPulleyForces(world, pulley);
  for (const pendulum of world.pendulums) stepPendulum(world, pendulum, h);
  for (const osc of world.oscillators) stepOscillator(osc, h);
  for (const pend of world.torsionPendulums) stepTorsionPendulum(pend, h);
  for (const carriage of world.carriages) stepCarriage(world, carriage, h);
  for (const table of world.angularTables) stepAngularTable(table, h);
  for (const rod of world.rods) stepRod(rod, h);
  for (const orbit of world.orbits) stepOrbit(orbit, h);
  for (const tunnel of world.tunnels) stepTunnel(tunnel, h);
  for (const elevator of world.elevators) elevator.time += h;

  for (const body of world.bodies) {
    if (body.skid) applySkidFriction(world, body, h);
    if (!body.attachment) continue;
    if (body.attachment.type === 'surface') applySurfaceContact(world, body, h);
    else if (body.attachment.type === 'loop') preLoop(world, body);
    else if (body.attachment.type === 'hcircle') preHCircle(world, body, h);
    else if (body.attachment.type === 'turntable') {
      const table = getTurntable(world, body.attachment.id);
      if (table) applyTurntableContact(world, body, table, h);
    }
  }

  // Work done by externally applied forces (explicit bookkeeping).
  for (const body of world.bodies) {
    let f = appliedForce(body);
    for (const fan of world.fans) {
      if (fan.bodyId === body.id) f = f.vadd(fanForce(fan));
    }
    if (f.lengthSquared() > 0) world.appliedWork += f.dot(body.cannon.velocity) * h;
    body._preStepV = cloneV(body.cannon.velocity);
  }

  world.engine.step(h);

  for (const body of world.bodies) {
    if (body.skid) postSkid(world, body);
    if (!body.attachment) continue;
    if (body.attachment.type === 'surface') postSurface(world, body, h);
    else if (body.attachment.type === 'loop') postLoop(world, body, h);
    else if (body.attachment.type === 'hcircle') postHCircle(world, body, h);
    else if (body.attachment.type === 'turntable') {
      const table = getTurntable(world, body.attachment.id);
      if (table) postTurntable(world, body, table);
    }
  }
  for (const pulley of world.pulleys) projectPulley(world, pulley, h);
  updateMountedApparatus(world);
  for (const launcher of world.launchers) updateLauncher(world, launcher);
  processImpacts(world);
  sampleMeters(world, h);
  for (const sensor of world.sensors) updateSensor(world, sensor, world.time + h, h);
  for (const fan of world.fans) fan.spin += h * (fan.on ? 18 : 0);
  world.time += h;
}

export function stepWorld(world, dt, opts = {}) {
  const h = opts.h || world.h;
  const timeScale = opts.timeScale ?? 1;
  const maxAccum = 0.1;
  world.accumulator = Math.min(world.accumulator + Math.max(0, dt) * timeScale, maxAccum);
  let n = 0;
  while (world.accumulator >= h && n < 60) {
    substep(world, h);
    world.accumulator -= h;
    n += 1;
  }
  if (n >= 60) world.accumulator = 0;
  return n;
}

export function stepOnce(world, seconds = 1 / 60) {
  world.accumulator = 0;
  const total = Math.max(world.h, Math.abs(seconds));
  const n = Math.max(1, Math.round(total / world.h));
  for (let i = 0; i < n; i += 1) substep(world, world.h);
}

/* ------------------------------------------------------------------ */
/* Diagnostics, energy and reset                                      */
/* ------------------------------------------------------------------ */

export function bodyDiagnostics(world, body) {
  const d = body.diagnostics;
  if (body.attachment?.type === 'surface') {
    const c = surfaceContact(world, body);
    if (c) {
      const muS = c.surface.muS;
      const muK = c.surface.muK;
      const driveMag = c.drive.length();
      d.normal = Math.max(0, c.N);
      d.contact = c.surface.kind;
      d.mode = 'surface';
      d.speed = c.speed;
      if (body.kind === 'block') {
        d.static = c.speed < STATIC_SPEED && driveMag <= muS * Math.max(0, c.N);
        d.friction = d.static ? driveMag : muK * Math.max(0, c.N);
        d.accel = d.static ? 0 : (c.drive.dot(c.frame.t) - Math.sign(c.v.dot(c.frame.t) || 1) * muK * Math.max(0, c.N)) / body.mass;
        d.rolling = false;
        if (d.static) {
          d.force.copy(c.drive.scale(-1));
        } else {
          const dir = c.speed > STATIC_SPEED ? c.v.scale(1 / c.speed) : c.drive.scale(1 / Math.max(driveMag, EPS));
          d.force.copy(dir.scale(-muK * Math.max(0, c.N)));
        }
      } else {
        const m = body.mass;
        const r = body.radius;
        const vt = c.v.dot(c.frame.t);
        const vb = c.v.dot(c.frame.b);
        const wAxis = body.cannon.angularVelocity.dot(c.frame.b);
        const u = vt + wAxis * r;
        const Ft = c.drive.dot(c.frame.t);
        const denom = m + body.I / (r * r);
        const fReq = -body.I * (Ft / denom) / (r * r);
        const N = Math.max(0, c.N);
        let f = 0;
        if (body.brake) {
          const latDrive = c.drive.dot(c.frame.b);
          const atRest = Math.abs(vt) < STATIC_SPEED && Math.abs(vb) < STATIC_SPEED;
          d.rolling = false;
          if (atRest && Math.abs(Ft) + Math.abs(latDrive) <= muS * N) {
            d.static = true;
            f = -Ft;
            d.accel = 0;
          } else if (atRest) {
            d.static = false;
            f = -Math.sign(Ft || 1) * muK * N;
            d.accel = (Ft + f) / m;
          } else {
            d.static = false;
            f = -Math.sign(vt) * muK * N;
            d.accel = (Ft + f) / m;
          }
        } else {
          d.rolling = Math.abs(u) < 1e-3;
          if (Math.abs(u) < 1e-3) {
            if (Math.abs(fReq) <= muS * N) {
              d.static = true;
              f = fReq;
              d.accel = Ft / denom;
            } else {
              d.static = false;
              f = Math.sign(fReq || -Ft) * muK * N;
              d.accel = (Ft + f) / m;
            }
          } else {
            d.static = false;
            f = -Math.sign(u) * muK * N;
            d.accel = (Ft + f) / m;
          }
        }
        d.friction = Math.abs(f);
        d.force.copy(c.frame.t.scale(f));
      }
    }
  } else if (body.attachment?.type === 'loop') {
    const loop = getLoop(world, body.attachment.id);
    if (loop) {
      const theta = body.attachment.theta;
      const tangent = loopTangent(theta);
      const v = body.cannon.velocity;
      const vt = v.dot(tangent);
      const ext = externalForceOn(world, body);
      const inward = loopInward(theta);
      const massEff = body.mass + (isRollingBody(body) ? body.I / (body.radius * body.radius) : 0);
      d.normal = (body.mass * vt * vt) / loop.radius + body.mass * world.g * Math.cos(theta) - ext.dot(inward);
      d.speed = Math.abs(vt);
      d.mode = 'loop';
      d.contact = 'loop';
      d.friction = 0;
      d.static = false;
      d.rolling = isRollingBody(body) && body.I > 0;
      d.accel = (-body.mass * world.g * Math.sin(theta) + ext.dot(tangent)) / massEff;
    }
  } else if (body.attachment?.type === 'hcircle') {
    const circle = getHCircle(world, body.attachment.id);
    if (circle) {
      const speed = body.attachment.speed;
      const p = body.cannon.position;
      const dx = p.x - circle.x;
      const dz = p.z - circle.z;
      const r = Math.hypot(dx, dz) || 1;
      d.normal = hcircleNormal(world, body);
      d.requiredFriction = body.mass * speed * speed / circle.radius;
      d.friction = d.requiredFriction;
      d.static = d.requiredFriction <= circle.muS * d.normal;
      d.speed = Math.abs(speed);
      d.mode = 'hcircle';
      d.contact = 'hcircle';
      d.accel = 0;
      d.rolling = false;
      d.force.copy(V((-dx / r) * d.friction, 0, (-dz / r) * d.friction));
    }
  } else if (body.skid) {
    const speed = Math.hypot(body.cannon.velocity.x, body.cannon.velocity.z);
    d.normal = hcircleNormal(world, body);
    d.requiredFriction = 0;
    d.friction = speed > 1e-4 ? body.skid.muK * d.normal : 0;
    d.static = speed <= 1e-4;
    d.speed = speed;
    d.mode = 'hcircle';
    d.contact = 'hcircle';
    d.accel = speed > 1e-4 ? -body.skid.muK * world.g : 0;
    d.rolling = false;
    if (d.friction > 0) {
      d.force.copy(V((-d.friction * body.cannon.velocity.x) / speed, 0, (-d.friction * body.cannon.velocity.z) / speed));
    } else {
      d.force.setZero();
    }
  } else if (body.attachment?.type === 'turntable') {
    const table = getTurntable(world, body.attachment.id);
    if (table) {
      const p = body.cannon.position;
      const r = Math.hypot(p.x - table.x, p.z - table.z);
      const required = body.mass * table.omega * table.omega * r;
      d.normal = body.mass * world.g;
      d.requiredFriction = required;
      d.friction = body.attachment.stuck ? required : table.muK * d.normal;
      d.static = !!body.attachment.stuck;
      d.speed = body.cannon.velocity.length();
      d.mode = 'turntable';
      d.contact = 'turntable';
      d.accel = 0;
    }
  } else {
    d.normal = 0;
    d.friction = 0;
    d.static = false;
    d.mode = 'free';
    d.contact = '';
    d.speed = body.cannon.velocity.length();
    const ext = externalForceOn(world, body);
    const net = ext.vadd(V(0, -body.mass * world.g, 0));
    d.accel = net.length() / body.mass;
    d.force.copy(ext);
  }
  return d;
}

export function energyBreakdown(world) {
  let translational = 0;
  let rotational = 0;
  let gravitational = 0;
  let elastic = 0;
  for (const body of world.bodies) {
    const v = body.cannon.velocity.length();
    translational += 0.5 * body.mass * v * v;
    if (isRollingBody(body)) {
      const w = body.cannon.angularVelocity.z;
      rotational += 0.5 * body.I * w * w;
    }
    gravitational += body.mass * world.g * body.cannon.position.y;
  }
  for (const table of world.turntables) {
    rotational += 0.5 * table.I * table.omega * table.omega;
  }
  for (const wedge of world.wedges) {
    const v = wedge.body.velocity.length();
    translational += 0.5 * wedge.mass * v * v;
    gravitational += wedge.mass * world.g * wedge.body.position.y;
  }
  for (const pendulum of world.pendulums) {
    const bob = pendulumBob(pendulum);
    const speed = pendulum.conical
      ? pendulum.length * Math.abs(pendulum.phiDot) * Math.sin(pendulum.amplitude * DEG)
      : pendulum.length * Math.abs(pendulum.omega);
    translational += 0.5 * pendulum.mass * speed * speed;
    gravitational += pendulum.mass * world.g * bob.y;
  }
  for (const link of world.links) {
    const g = linkGeometry(world, link);
    if (g) elastic += springEnergyFromLength(link, g.length);
  }
  const mechanical = translational + rotational + gravitational + elastic;
  return {
    translational,
    rotational,
    gravitational,
    elastic,
    mechanical,
    thermal: world.thermal,
    appliedWork: world.appliedWork,
    driveWork: world.driveWork,
    total: mechanical + world.thermal,
  };
}

export function captureInitial(world) {
  world.initial = {
    bodyStates: world.bodies.filter((body) => !body.transient).map((body) => ({
      id: body.id,
      position: [body.cannon.position.x, body.cannon.position.y, body.cannon.position.z],
      quaternion: [body.cannon.quaternion.x, body.cannon.quaternion.y, body.cannon.quaternion.z, body.cannon.quaternion.w],
      velocity: [body.cannon.velocity.x, body.cannon.velocity.y, body.cannon.velocity.z],
      angularVelocity: [body.cannon.angularVelocity.x, body.cannon.angularVelocity.y, body.cannon.angularVelocity.z],
      attachment: body.attachment ? { ...body.attachment } : null,
    })),
    turntables: world.turntables.map((table) => ({
      id: table.id,
      omega: table.omega,
      angle: table.angle,
    })),
    wedges: world.wedges.map((wedge) => ({
      id: wedge.id,
      position: [wedge.body.position.x, wedge.body.position.y, wedge.body.position.z],
      quaternion: [wedge.body.quaternion.x, wedge.body.quaternion.y, wedge.body.quaternion.z, wedge.body.quaternion.w],
      velocity: [wedge.body.velocity.x, wedge.body.velocity.y, wedge.body.velocity.z],
      angularVelocity: [wedge.body.angularVelocity.x, wedge.body.angularVelocity.y, wedge.body.angularVelocity.z],
    })),
    oscillators: world.oscillators.map((o) => ({
      id: o.id, u: o.u, v: o.v, time: o.time,
    })),
    torsionPendulums: world.torsionPendulums.map((p) => ({
      id: p.id, theta: p.theta, omega: p.omega, time: p.time,
    })),
    carriages: world.carriages.map((c) => ({
      id: c.id, theta: c.theta, omega: c.omega, time: c.time,
    })),
    angularTables: world.angularTables.map((t) => ({
      id: t.id, r: t.r, omega: t.omega, angle: t.angle, blockOn: t.blockOn,
      L: t.L, ke: t.ke, dropped: t.dropped, time: t.time,
    })),
    rods: world.rods.map((r) => ({
      id: r.id, theta: r.theta, omega: r.omega, time: r.time,
    })),
    orbits: world.orbits.map((o) => ({
      id: o.id, px: o.px, pz: o.pz, vx: o.vx, vz: o.vz, time: o.time,
      energy0: o.energy0,
    })),
    tunnels: world.tunnels.map((t) => ({
      id: t.id, s: t.s, v: t.v, time: t.time,
    })),
  };
  captureEMInitial(world.em);
}

export function resetWorld(world) {
  const init = world.initial;
  if (!init) return;
  for (const body of [...world.bodies]) {
    if (body.transient) removeBody(world, body);
  }
  for (const launcher of world.launchers) {
    launcher.projectileId = null;
    launcher.flight = null;
    launcher.trail = [];
    launcher.trailLast = -1;
    launcher.target = launcherPrediction(world, launcher);
  }
  for (const pendulum of world.pendulums) resetPendulum(pendulum);
  for (const pulley of world.pulleys) {
    pulley.tensionA = 0;
    pulley.tensionB = 0;
    pulley.angle = 0;
    pulley.omega = 0;
    pulley.slack = false;
  }
  for (const sensor of world.sensors) {
    sensor.lastSide.clear();
    sensor.crossings = [];
    sensor.samples = [];
    sensor.lastCrossing = null;
    sensor.lastDistance = null;
    sensor.lastSpeed = null;
    sensor.sampleAt = -1;
    sensor.sampleBodyId = null;
  }
  for (const link of world.links) {
    if (!link.meter) continue;
    link.samples = [];
    link.sampleAt = -1;
  }
  const wedgeState = new Map((init.wedges || []).map((w) => [w.id, w]));
  for (const wedge of world.wedges) {
    const saved = wedgeState.get(wedge.id);
    if (!saved) continue;
    wedge.body.position.set(...saved.position);
    wedge.body.quaternion.set(...saved.quaternion);
    wedge.body.velocity.set(...saved.velocity);
    wedge.body.angularVelocity.set(...saved.angularVelocity);
    wedge.body.aabbNeedsUpdate = true;
    wedge.body.wakeUp();
  }
  const tableState = new Map(init.turntables.map((t) => [t.id, t]));
  for (const table of world.turntables) {
    const saved = tableState.get(table.id);
    if (saved) {
      table.omega = saved.omega;
      table.angle = saved.angle;
      table.frictionTorque = 0;
    }
  }

  const oscState = new Map((init.oscillators || []).map((o) => [o.id, o]));
  for (const osc of world.oscillators) {
    const saved = oscState.get(osc.id);
    if (saved) {
      osc.u = saved.u;
      osc.v = saved.v;
      osc.time = saved.time;
      osc.initial = { u: saved.u, v: saved.v, time: saved.time };
    }
    resetOscillator(osc);
  }
  const torsionState = new Map((init.torsionPendulums || []).map((p) => [p.id, p]));
  for (const pend of world.torsionPendulums) {
    const saved = torsionState.get(pend.id);
    if (saved) pend.initial = { theta: saved.theta, omega: saved.omega, time: saved.time };
    resetTorsion(pend);
  }
  const carriageState = new Map((init.carriages || []).map((c) => [c.id, c]));
  for (const carriage of world.carriages) {
    const saved = carriageState.get(carriage.id);
    if (saved) carriage.initial = { theta: saved.theta, omega: saved.omega, time: saved.time };
    resetCarriage(carriage);
  }
  const angularState = new Map((init.angularTables || []).map((t) => [t.id, t]));
  for (const table of world.angularTables) {
    const saved = angularState.get(table.id);
    if (saved) table.initial = { ...saved };
    resetAngularTable(table);
  }
  const rodState = new Map((init.rods || []).map((r) => [r.id, r]));
  for (const rod of world.rods) {
    const saved = rodState.get(rod.id);
    if (saved) rod.initial = { theta: saved.theta, omega: saved.omega, time: saved.time };
    resetRod(rod);
  }
  const orbitState = new Map((init.orbits || []).map((o) => [o.id, o]));
  for (const orbit of world.orbits) {
    const saved = orbitState.get(orbit.id);
    if (saved) orbit.initial = { ...saved };
    resetOrbit(orbit);
  }
  const tunnelState = new Map((init.tunnels || []).map((t) => [t.id, t]));
  for (const tunnel of world.tunnels) {
    const saved = tunnelState.get(tunnel.id);
    if (saved) tunnel.initial = { s: saved.s, v: saved.v, time: saved.time };
    resetTunnel(tunnel);
  }
  for (const elevator of world.elevators) elevator.time = 0;
  const byId = new Map(init.bodyStates.map((s) => [s.id, s]));
  for (const body of world.bodies) {
    const saved = byId.get(body.id);
    if (!saved) continue;
    body.skid = null;
    if (saved.attachment) {
      body.attachment = { ...saved.attachment };
      if (body.attachment.type === 'surface') {
        repositionSurfaceBody(world, body);
      } else if (body.attachment.type === 'loop') {
        const loop = getLoop(world, body.attachment.id);
        if (loop) body.cannon.position.copy(loopPoint(loop, body.attachment.theta));
      } else if (body.attachment.type === 'turntable') {
        const table = getTurntable(world, body.attachment.id);
        if (table) {
          body.cannon.position.set(
            table.x + body.attachment.r * Math.cos(body.attachment.phi),
            tableTopY(table) + body.halfHeight,
            table.z + body.attachment.r * Math.sin(body.attachment.phi),
          );
        }
      } else if (body.attachment.type === 'hcircle') {
        const circle = getHCircle(world, body.attachment.id);
        if (circle) {
          body.cannon.position.set(
            circle.x + circle.radius * Math.cos(body.attachment.phi),
            circle.y + body.halfHeight + 0.01,
            circle.z + circle.radius * Math.sin(body.attachment.phi),
          );
        }
      }
      applyInitialVelocity(world, body);
    } else {
      body.cannon.position.set(...saved.position);
      body.cannon.quaternion.set(...saved.quaternion);
      applyInitialVelocity(world, body);
    }
    body.cannon.aabbNeedsUpdate = true;
    body.cannon.wakeUp();
  }
  updateMountedApparatus(world);
  for (const launcher of world.launchers) launcher.target = launcherPrediction(world, launcher);
  world.time = 0;
  world.accumulator = 0;
  world.thermal = 0;
  world.appliedWork = 0;
  world.driveWork = 0;
  world.events = [];
  resetEM(world.em);
}

export function clearWorld(world) {
  for (const body of world.bodies) world.engine.removeBody(body.cannon);
  for (const surface of world.surfaces) world.engine.removeBody(surface.body);
  for (const table of world.turntables) world.engine.removeBody(table.body);
  for (const barrier of world.barriers) world.engine.removeBody(barrier.body);
  for (const wedge of world.wedges) world.engine.removeBody(wedge.body);
  world.bodies = [];
  world.surfaces = [];
  world.loops = [];
  world.turntables = [];
  world.hcircles = [];
  world.launchers = [];
  world.pulleys = [];
  world.barriers = [];
  world.pendulums = [];
  world.wedges = [];
  world.sensors = [];
  world.fans = [];
  world.oscillators = [];
  world.torsionPendulums = [];
  world.elevators = [];
  world.carriages = [];
  world.angularTables = [];
  world.rods = [];
  world.orbits = [];
  world.tunnels = [];
  world.links = [];
  world.events = [];
  world.pendingImpacts = [];
  world.thermal = 0;
  world.appliedWork = 0;
  world.driveWork = 0;
  world.time = 0;
  world.accumulator = 0;
  world.initial = null;
  world.em = createEMWorld();
}

export function disposeWorld(world) {
  clearWorld(world);
  if (world.ground) world.engine.removeBody(world.ground);
  world.engine.bodies.length = 0;
  world.engine.contacts.length = 0;
}

/* ------------------------------------------------------------------ */
/* Mutation helpers used by the inspector                             */
/* ------------------------------------------------------------------ */

export function setBodyMass(world, body, mass) {
  const prevMass = body.mass;
  body.mass = Math.max(0.01, mass);
  if ((body.kind === 'ball' || body.kind === 'cylinder') && prevMass > 0) {
    const ratio = body.inertiaRatio ?? body.I / Math.max(1e-9, prevMass * body.radius * body.radius);
    body.I = Math.max(0, ratio) * body.mass * body.radius * body.radius;
    body.inertiaRatio = ratio;
  }
  body.cannon.mass = body.mass;
  body.cannon.updateMassProperties();
  if (isRollingBody(body)) {
    body.cannon.inertia.z = body.I;
    body.cannon.invInertia.z = body.I > 0 ? 1 / body.I : 0;
    body.cannon.updateInertiaWorld(true);
  }
  body.cannon.wakeUp();
}

export function setCartInertia(world, body, I) {
  body.I = Math.max(0, I);
  body.inertiaRatio = body.I / Math.max(1e-9, body.mass * body.radius * body.radius);
  body.cannon.inertia.z = body.I;
  body.cannon.invInertia.z = body.I > 0 ? 1 / body.I : 0;
  body.cannon.updateInertiaWorld(true);
  body.cannon.wakeUp();
}

export function setCartRadius(world, body, radius) {
  const r = clamp(radius, 0.12, 0.6);
  body.radius = r;
  body.halfHeight = r;
  body.cannon.shapes.length = 0;
  body.cannon.shapeOffsets.length = 0;
  body.cannon.shapeOrientations.length = 0;
  if (body.kind === 'cylinder') {
    const shape = new CANNON.Cylinder(r, r, body.width || 0.7, 20);
    const axisToZ = new CANNON.Quaternion();
    axisToZ.setFromEuler(Math.PI / 2, 0, 0);
    body.cannon.addShape(shape, V(), axisToZ);
  } else if (body.kind === 'ball') {
    body.cannon.addShape(new CANNON.Sphere(r));
  } else {
    body.cannon.addShape(new CANNON.Sphere(r));
  }
  body.cannon.updateMassProperties();
  body.cannon.inertia.z = body.I;
  body.cannon.invInertia.z = body.I > 0 ? 1 / body.I : 0;
  body.cannon.updateInertiaWorld(true);
  if (body.attachment?.type === 'surface') repositionSurfaceBody(world, body);
  body.cannon.wakeUp();
}

/** Set I from the dimensionless radius of gyration I / (m r²). */
export function setInertiaRatio(world, body, ratio) {
  const k = clamp(Number.isFinite(ratio) ? ratio : 0.5, 0, 2);
  body.inertiaRatio = k;
  setCartInertia(world, body, k * body.mass * body.radius * body.radius);
}

export function setSurfaceAngle(world, surface, angleDeg) {
  surface.angle = angleDeg;
  surface.body.quaternion.setFromEuler(0, 0, angleDeg * DEG);
  surface.body.aabbNeedsUpdate = true;
  for (const body of world.bodies) {
    if (body.attachment?.type === 'surface' && body.attachment.id === surface.id) {
      repositionSurfaceBody(world, body);
      applyInitialVelocity(world, body);
    }
  }
}

export function setSurfaceLength(world, surface, length) {
  const L = Math.max(1, length);
  surface.length = L;
  const shape = surface.body.shapes[0];
  shape.halfExtents.x = L / 2;
  shape.updateConvexPolyhedronRepresentation();
  shape.updateBoundingSphereRadius();
  surface.body.updateBoundingRadius();
  surface.body.aabbNeedsUpdate = true;
  for (const body of world.bodies) {
    if (body.attachment?.type === 'surface' && body.attachment.id === surface.id) {
      repositionSurfaceBody(world, body);
    }
  }
}

export function setSurfaceWidth(world, surface, width) {
  const W = clamp(width, 0.3, 8);
  surface.width = W;
  const shape = surface.body.shapes[0];
  shape.halfExtents.z = W / 2;
  shape.updateConvexPolyhedronRepresentation();
  shape.updateBoundingSphereRadius();
  surface.body.updateBoundingRadius();
  surface.body.aabbNeedsUpdate = true;
  for (const body of world.bodies) {
    if (body.attachment?.type === 'surface' && body.attachment.id === surface.id) {
      repositionSurfaceBody(world, body);
    }
  }
}

export function setBlockSize(world, body, size) {
  if (body.kind !== 'block') return;
  const s = clamp(size, 0.1, 4);
  body.size = s;
  body.halfHeight = s / 2;
  body.halfLength = s / 2;
  body.radius = s / 2;
  body.cannon.shapes.length = 0;
  body.cannon.shapeOffsets.length = 0;
  body.cannon.shapeOrientations.length = 0;
  body.cannon.addShape(new CANNON.Box(V(s / 2, s / 2, s / 2)));
  body.cannon.updateMassProperties();
  body.cannon.fixedRotation = true;
  if (body.attachment?.type === 'surface') repositionSurfaceBody(world, body);
  body.cannon.aabbNeedsUpdate = true;
  body.cannon.wakeUp();
}

export function setTurntableRadius(world, table, radius) {
  const R = Math.max(0.4, radius);
  table.radius = R;
  const shape = new CANNON.Cylinder(R, R, 0.12, 28);
  table.body.shapes.length = 0;
  table.body.shapeOffsets.length = 0;
  table.body.shapeOrientations.length = 0;
  table.body.addShape(shape);
  table.body.updateBoundingRadius();
  table.body.aabbNeedsUpdate = true;
  for (const body of world.bodies) {
    if (body.attachment?.type === 'turntable' && body.attachment.id === table.id) {
      body.attachment.r = clamp(body.attachment.r, 0.15, R - 0.1);
      body.cannon.position.set(
        table.x + body.attachment.r * Math.cos(body.attachment.phi),
        tableTopY(table) + body.halfHeight,
        table.z + body.attachment.r * Math.sin(body.attachment.phi),
      );
    }
  }
}

export function setLoopRadius(world, loop, radius) {
  loop.radius = Math.max(0.4, radius);
  for (const body of world.bodies) {
    if (body.attachment?.type === 'loop' && body.attachment.id === loop.id) {
      body.cannon.position.copy(loopPoint(loop, body.attachment.theta));
    }
  }
}

export function setHCircleRadius(world, circle, radius) {
  circle.radius = Math.max(0.4, radius);
  for (const body of world.bodies) {
    if (body.attachment?.type === 'hcircle' && body.attachment.id === circle.id) {
      body.cannon.position.set(
        circle.x + circle.radius * Math.cos(body.attachment.phi),
        circle.y + body.halfHeight + 0.01,
        circle.z + circle.radius * Math.sin(body.attachment.phi),
      );
    }
  }
}

export function setTurntableDrive(world, table, drive) {
  table.drive = drive;
}

export function linkReading(world, link) {
  const g = linkGeometry(world, link);
  return g ? Math.abs(g.tension) : 0;
}

/* ------------------------------------------------------------------ */
/* Scene serialization (undo, save/load, time scrub)                   */
/* ------------------------------------------------------------------ */

export const SCENE_VERSION = 3;

const SCENE_ARRAY_KEYS = [
  'surfaces', 'loops', 'turntables', 'hcircles', 'launchers', 'pulleys',
  'barriers', 'pendulums', 'wedges', 'sensors', 'fans', 'oscillators',
  'torsionPendulums', 'elevators', 'carriages', 'angularTables', 'rods',
  'orbits', 'tunnels', 'bodies', 'links',
];

function sceneVec(v) {
  return [v.x, v.y, v.z];
}

/**
 * Accept v1 (and pre-version) scene payloads and normalise them to the
 * current schema. Returns null for anything that is not a scene.
 */
export function migrateScene(data) {
  if (!data || typeof data !== 'object' || Array.isArray(data)) return null;
  const version = data.version == null ? 1 : Number(data.version);
  if (!Number.isFinite(version) || version < 0 || version > SCENE_VERSION) return null;
  const hasSceneShape = SCENE_ARRAY_KEYS.some((key) => Array.isArray(data[key]))
    || (data.em && typeof data.em === 'object' && !Array.isArray(data.em))
    || Number.isFinite(data.g)
    || Number.isFinite(data.h);
  if (!hasSceneShape) return null;
  const out = { ...data, version: SCENE_VERSION };
  for (const key of SCENE_ARRAY_KEYS) {
    if (!Array.isArray(out[key])) out[key] = [];
  }
  out.g = Number.isFinite(data.g) ? data.g : 9.8;
  out.h = Number.isFinite(data.h) && data.h > 0 ? data.h : DEFAULT_H;
  out.restitution = Number.isFinite(data.restitution)
    ? Math.max(0, Math.min(1, data.restitution))
    : 0;
  out.gridStep = Number.isFinite(data.gridStep) && data.gridStep > 0
    ? data.gridStep
    : DEFAULT_GRID_STEP;
  out.floor = {
    friction: Number.isFinite(data.floor?.friction)
      ? Math.max(0, Math.min(2, data.floor.friction))
      : (Number.isFinite(data.floorFriction) ? data.floorFriction : DEFAULT_FLOOR_FRICTION),
    restitution: Number.isFinite(data.floor?.restitution)
      ? Math.max(0, Math.min(1, data.floor.restitution))
      : (Number.isFinite(data.floorRestitution) ? data.floorRestitution : DEFAULT_FLOOR_RESTITUTION),
  };
  out.em = data.em && typeof data.em === 'object' && !Array.isArray(data.em)
    ? { ...data.em }
    : { mode: 'mechanics' };
  if (out.em.mode !== 'em') out.em.mode = 'mechanics';
  return out;
}

export function serializeScene(world, { runtime = false } = {}) {
  return {
    version: SCENE_VERSION,
    g: world.g,
    h: world.h,
    restitution: world.engine.defaultContactMaterial.restitution || 0,
    gridStep: world.gridStep,
    floor: { friction: world.floorFriction, restitution: world.floorRestitution },
    time: runtime ? world.time : 0,
    thermal: runtime ? world.thermal : 0,
    appliedWork: runtime ? world.appliedWork : 0,
    driveWork: runtime ? world.driveWork : 0,
    em: serializeEM(world.em),
    surfaces: world.surfaces.map((s) => ({
      id: s.id,
      kind: s.kind,
      name: s.name || '',
      position: sceneVec(s.body.position),
      quaternion: [s.body.quaternion.x, s.body.quaternion.y, s.body.quaternion.z, s.body.quaternion.w],
      angle: s.angle,
      length: s.length,
      width: s.width,
      thickness: s.thickness,
      muS: s.muS,
      muK: s.muK,
      mount: s.mount ? { ...s.mount } : null,
    })),
    loops: world.loops.map((l) => ({
      id: l.id,
      name: l.name || '',
      x: l.x,
      y: l.y,
      z: l.z,
      radius: l.radius,
      muS: l.muS,
      muK: l.muK,
      mount: l.mount ? { ...l.mount } : null,
    })),
    turntables: world.turntables.map((t) => ({
      id: t.id,
      name: t.name || '',
      position: sceneVec(t.body.position),
      radius: t.radius,
      omega: t.omega,
      targetOmega: t.targetOmega,
      torque: t.torque,
      I: t.I,
      drive: t.drive,
      muS: t.muS,
      muK: t.muK,
      angle: t.angle,
      mount: t.mount ? { ...t.mount } : null,
    })),
    hcircles: world.hcircles.map((c) => ({
      id: c.id,
      name: c.name || '',
      x: c.x,
      y: c.y,
      z: c.z,
      radius: c.radius,
      muS: c.muS,
      muK: c.muK,
      mount: c.mount ? { ...c.mount } : null,
    })),
    launchers: world.launchers.map((l) => ({
      id: l.id,
      name: l.name || '',
      x: l.x,
      y: l.y,
      z: l.z,
      angle: l.angle,
      speed: l.speed,
      height: l.height,
      azimuth: l.azimuth,
      mass: l.mass,
      radius: l.radius,
      drag: l.drag,
      dragB: l.dragB,
      dragC: l.dragC,
      showTarget: l.showTarget,
      mount: l.mount ? { ...l.mount } : null,
    })),
    pulleys: world.pulleys.map((p) => ({
      id: p.id,
      name: p.name || '',
      x: p.x,
      y: p.y,
      z: p.z,
      radius: p.radius,
      mass: p.mass,
      I: p.I,
      mode: p.mode,
      muS: p.muS,
      muK: p.muK,
      aId: p.aId,
      bId: p.bId,
      mount: p.mount ? { ...p.mount } : null,
    })),
    barriers: world.barriers.map((b) => ({
      id: b.id,
      kind: b.kind,
      name: b.name || '',
      x: b.x,
      y: b.y,
      z: b.z,
      width: b.width,
      height: b.height,
      thickness: b.thickness,
      radius: b.radius,
      angle: b.angle,
      e: b.e,
      mount: b.mount ? { ...b.mount } : null,
    })),
    pendulums: world.pendulums.map((p) => ({
      id: p.id,
      name: p.name || '',
      x: p.x,
      y: p.y,
      z: p.z,
      length: p.length,
      mass: p.mass,
      amplitude: p.amplitude,
      radius: p.radius,
      conical: p.conical,
      mount: p.mount ? { ...p.mount } : null,
    })),
    wedges: world.wedges.map((w) => ({
      id: w.id,
      name: w.name || '',
      x: w.x,
      baseY: w.baseY,
      z: w.z,
      angle: w.angle,
      length: w.length,
      width: w.width,
      mass: w.mass,
      muFloor: w.muFloor,
      blockMu: w.blockMu,
      restitution: w.restitution,
      position: sceneVec(w.body.position),
      quaternion: [w.body.quaternion.x, w.body.quaternion.y, w.body.quaternion.z, w.body.quaternion.w],
      velocity: sceneVec(w.body.velocity),
      mount: w.mount ? { ...w.mount } : null,
    })),
    sensors: world.sensors.map((s) => ({
      id: s.id,
      kind: s.kind,
      name: s.name || '',
      x: s.x,
      y: s.y,
      z: s.z,
      width: s.width,
      height: s.height,
      range: s.range,
      face: s.face,
      targetId: s.targetId || null,
      mount: s.mount ? { ...s.mount } : null,
    })),
    fans: world.fans.map((f) => ({
      id: f.id,
      name: f.name || '',
      bodyId: f.bodyId,
      thrust: f.thrust,
      on: f.on,
      azimuth: f.azimuth,
      elevation: f.elevation,
      x: f.x,
      y: f.y,
      z: f.z,
      mount: f.mount ? { ...f.mount } : null,
    })),
    oscillators: world.oscillators.map((o) => ({
      id: o.id, name: o.name || '', x: o.x, y: o.y, z: o.z,
      mass: o.mass, k: o.k, damping: o.b,
      driveForce: o.driveF0, driveOmega: o.driveOmega, driveOn: o.driveOn,
      amplitude: o.initial?.u ?? o.u,
      u: o.u, v: o.v, time: o.time,
      mount: o.mount ? { ...o.mount } : null,
    })),
    torsionPendulums: world.torsionPendulums.map((p) => ({
      id: p.id, name: p.name || '', x: p.x, y: p.y, z: p.z,
      mass: p.mass, radius: p.radius, I: p.I, kappa: p.kappa,
      damping: p.damping, amplitude: (p.theta0 * 180) / Math.PI,
      theta: p.theta, omega: p.omega, time: p.time,
      mount: p.mount ? { ...p.mount } : null,
    })),
    elevators: world.elevators.map((e) => ({
      id: e.id, name: e.name || '', x: e.x, y: e.y, z: e.z,
      mass: e.mass, accel: e.accel, height: e.height, width: e.width,
      mount: e.mount ? { ...e.mount } : null,
    })),
    carriages: world.carriages.map((c) => ({
      id: c.id, name: c.name || '', x: c.x, y: c.y, z: c.z,
      mass: c.mass, accel: c.accel, length: c.length, damping: c.damping,
      theta: c.theta, omega: c.omega, time: c.time,
      mount: c.mount ? { ...c.mount } : null,
    })),
    angularTables: world.angularTables.map((t) => ({
      id: t.id, name: t.name || '', x: t.x, y: t.y, z: t.z,
      radius: t.radius, discMass: t.discMass, blockMass: t.blockMass,
      r: t.r, omega: t.omega, rSpeed: t.rSpeed, radialMotor: t.radialMotor,
      blockOn: t.blockOn, L: t.L, ke: t.ke, dropped: t.dropped,
      angle: t.angle, time: t.time,
      mount: t.mount ? { ...t.mount } : null,
    })),
    rods: world.rods.map((r) => ({
      id: r.id, name: r.name || '', x: r.x, y: r.y, z: r.z,
      mass: r.mass, length: r.length, pivot: r.pivot, torque: r.torque,
      theta: r.theta, omega: r.omega, time: r.time,
      mount: r.mount ? { ...r.mount } : null,
    })),
    orbits: world.orbits.map((o) => ({
      id: o.id, name: o.name || '', x: o.x, y: o.y, z: o.z,
      M: o.M, G: o.G, r: o.r0, phase: o.phase, speedFactor: o.speedFactor,
      px: o.px, pz: o.pz, vx: o.vx, vz: o.vz, time: o.time,
      trail: o.trail.slice(-1200), energy0: o.energy0,
      mount: o.mount ? { ...o.mount } : null,
    })),
    tunnels: world.tunnels.map((t) => ({
      id: t.id, name: t.name || '', x: t.x, y: t.y, z: t.z,
      R: t.R, M: t.M, G: t.G, s: t.s, v: t.v, time: t.time,
      mount: t.mount ? { ...t.mount } : null,
    })),
    bodies: world.bodies.filter((b) => !b.transient).map((b) => ({
      id: b.id,
      kind: b.kind,
      name: b.name || '',
      mass: b.mass,
      I: b.I,
      inertiaRatio: b.inertiaRatio,
      radius: b.radius,
      size: b.size,
      width: b.width,
      v0: b.v0,
      azimuth: b.azimuth,
      elevation: b.elevation,
      appliedMag: b.appliedMag,
      appliedAzimuth: b.appliedAzimuth,
      appliedElevation: b.appliedElevation,
      brake: !!b.brake,
      motor: b.motor ? { ...b.motor } : null,
      drag: b.drag ? { ...b.drag } : null,
      rope: b.rope ? { ...b.rope } : null,
      attachment: b.attachment ? { ...b.attachment } : null,
      skid: b.skid ? { ...b.skid } : null,
      position: sceneVec(b.cannon.position),
      quaternion: [b.cannon.quaternion.x, b.cannon.quaternion.y, b.cannon.quaternion.z, b.cannon.quaternion.w],
      velocity: sceneVec(b.cannon.velocity),
      angularVelocity: sceneVec(b.cannon.angularVelocity),
    })),
    links: world.links.map((l) => ({
      id: l.id,
      a: { ...l.a },
      b: { ...l.b },
      k: l.k,
      beta: l.beta,
      rest: l.rest,
      meter: l.meter,
      mount: l.mount ? { ...l.mount } : null,
    })),
  };
}

export function deserializeScene(world, data, { runtime = false } = {}) {
  const migrated = migrateScene(data);
  if (!migrated) return false;
  data = migrated;
  clearWorld(world);
  world.nextId = 1;
  world.g = Number.isFinite(data.g) ? data.g : 9.8;
  world.h = Number.isFinite(data.h) && data.h > 0 ? data.h : DEFAULT_H;
  world.engine.gravity.set(0, -world.g, 0);
  world.engine.defaultContactMaterial.restitution = Math.max(0, Math.min(1, data.restitution ?? 0));
  if (world.bodyContact) world.bodyContact.restitution = Math.max(0, Math.min(1, data.restitution ?? 0));
  setGridStep(world, data.gridStep ?? DEFAULT_GRID_STEP);
  setFloorContact(world, {
    friction: data.floor?.friction ?? DEFAULT_FLOOR_FRICTION,
    restitution: data.floor?.restitution ?? DEFAULT_FLOOR_RESTITUTION,
  });
  deserializeEM(world.em, data.em || { mode: 'mechanics' });

  for (const s of data.surfaces || []) {
    const surface = addSurface(world, {
      id: s.id,
      kind: s.kind || 'incline',
      name: s.name || '',
      x: s.position?.[0] ?? 0,
      y: s.position?.[1] ?? 1.2,
      z: s.position?.[2] ?? 0,
      angleDeg: s.angle ?? 0,
      length: s.length ?? 8,
      width: s.width ?? 2.4,
      thickness: s.thickness ?? 0.18,
      muS: s.muS ?? 0.5,
      muK: Math.min(s.muK ?? 0.35, s.muS ?? 0.5),
      mount: s.mount || null,
    });
    if (s.quaternion) surface.body.quaternion.set(...s.quaternion);
    surface.body.aabbNeedsUpdate = true;
  }
  for (const l of data.loops || []) {
    addLoop(world, { ...l });
  }
  for (const t of data.turntables || []) {
    const table = addTurntable(world, {
      id: t.id,
      name: t.name || '',
      x: t.position?.[0] ?? 0,
      y: t.position?.[1] ?? 0.62,
      z: t.position?.[2] ?? 0,
      radius: t.radius ?? 2,
      omega: t.omega ?? 1.2,
      targetOmega: t.targetOmega ?? 1.2,
      torque: t.torque ?? 0,
      I: t.I ?? 8,
      drive: t.drive || 'target',
      muS: t.muS ?? 0.5,
      muK: Math.min(t.muK ?? 0.35, t.muS ?? 0.5),
      mount: t.mount || null,
    });
    table.angle = t.angle ?? 0;
  }
  for (const c of data.hcircles || []) {
    addHCircle(world, {
      ...c,
      muK: Math.min(c.muK ?? 0.35, c.muS ?? 0.55),
    });
  }
  for (const l of data.launchers || []) {
    addLauncher(world, { ...l });
  }
  for (const p of data.pulleys || []) {
    const pulley = addPulley(world, { ...p });
    pulley.aId = p.aId ?? null;
    pulley.bId = p.bId ?? null;
  }
  for (const b of data.barriers || []) {
    addBarrier(world, { ...b, restitution: b.e ?? b.restitution ?? 0.6 });
  }
  for (const p of data.pendulums || []) {
    addPendulum(world, { ...p });
  }
  for (const w of data.wedges || []) {
    const wedge = addWedge(world, { ...w });
    if (runtime) {
      if (w.position) wedge.body.position.set(...w.position);
      if (w.quaternion) wedge.body.quaternion.set(...w.quaternion);
      if (w.velocity) wedge.body.velocity.set(...w.velocity);
      wedge.body.aabbNeedsUpdate = true;
    }
  }
  for (const s of data.sensors || []) {
    addSensor(world, { ...s });
  }
  for (const b of data.bodies || []) {
    const body = addBody(world, b.kind || 'block', {
      id: b.id,
      name: b.name || '',
      mass: b.mass ?? 1,
      x: b.position?.[0] ?? 0,
      y: b.position?.[1] ?? 3,
      z: b.position?.[2] ?? 0,
      v0: b.v0 ?? 0,
      azimuth: b.azimuth ?? 0,
      elevation: b.elevation ?? 0,
      I: b.I,
      radius: b.radius,
      size: b.size,
      width: b.width,
      brake: !!b.brake,
      motor: b.motor || undefined,
    });
    body.appliedMag = b.appliedMag ?? 0;
    body.appliedAzimuth = b.appliedAzimuth ?? 0;
    body.appliedElevation = b.appliedElevation ?? 0;
    if (b.drag) body.drag = { ...body.drag, ...b.drag };
    if (b.rope) body.rope = { ...b.rope };
    if (Number.isFinite(b.inertiaRatio)) {
      body.inertiaRatio = b.inertiaRatio;
      setCartInertia(world, body, b.inertiaRatio * body.mass * body.radius * body.radius);
    }
    const att = b.attachment;
    if (att?.type === 'surface') {
      attachBodyToSurface(world, body, att.id, { localX: att.localX, localZ: att.localZ });
    } else if (att?.type === 'loop') {
      attachBodyToLoop(world, body, att.id, { theta: att.theta });
      if (runtime && Number.isFinite(att.speed)) body.attachment.speed = att.speed;
    } else if (att?.type === 'turntable') {
      attachBodyToTurntable(world, body, att.id, { r: att.r, phi: att.phi });
      if (runtime) body.attachment.stuck = !!att.stuck;
    } else if (att?.type === 'hcircle') {
      attachBodyToHCircle(world, body, att.id, { phi: att.phi });
      if (runtime && Number.isFinite(att.speed)) body.attachment.speed = att.speed;
    } else if (att?.type === 'wedge') {
      attachBodyToWedge(world, body, att.id, { localX: att.localX, localZ: att.localZ });
    } else if (att?.type === 'body') {
      attachBodyToBody(world, body, att.id, {
        offsetX: att.offset?.[0],
        offsetY: att.offset?.[1],
        offsetZ: att.offset?.[2],
      });
    } else if (att?.type === 'apparatus') {
      body.attachment = { ...att };
      repositionCarriedBody(world, body);
      applyInitialVelocity(world, body);
    } else if (att?.type === 'carrier') {
      body.attachment = { ...att };
      repositionCarrierBody(world, body);
      applyInitialVelocity(world, body);
    } else {
      body.cannon.position.set(...(b.position || [0, 3, 0]));
      if (b.quaternion) body.cannon.quaternion.set(...b.quaternion);
      applyInitialVelocity(world, body);
    }
    if (runtime && b.velocity) {
      body.cannon.velocity.set(...b.velocity);
      if (b.angularVelocity) body.cannon.angularVelocity.set(...b.angularVelocity);
    }
    if (runtime && b.skid) {
      body.attachment = null;
      body.skid = { ...b.skid };
      if (b.velocity) body.cannon.velocity.set(...b.velocity);
    }
    body.cannon.aabbNeedsUpdate = true;
    body.cannon.wakeUp();
  }
  for (const f of data.fans || []) {
    addFan(world, { ...f });
  }
  for (const o of data.oscillators || []) {
    const osc = addOscillator(world, { ...o });
    if (runtime) {
      osc.u = o.u ?? osc.u;
      osc.v = o.v ?? 0;
      osc.time = o.time ?? 0;
      osc.prevU = osc.u;
      osc.prevV = osc.v;
    }
  }
  for (const p of data.torsionPendulums || []) {
    const pend = addTorsionPendulum(world, { ...p });
    if (runtime) {
      pend.theta = p.theta ?? pend.theta;
      pend.omega = p.omega ?? 0;
      pend.time = p.time ?? 0;
      pend.prevTheta = pend.theta;
    }
  }
  for (const e of data.elevators || []) addElevator(world, { ...e });
  for (const c of data.carriages || []) {
    const carriage = addCarriage(world, { ...c });
    if (runtime) {
      carriage.theta = c.theta ?? 0;
      carriage.omega = c.omega ?? 0;
      carriage.time = c.time ?? 0;
    }
  }
  for (const t of data.angularTables || []) {
    const table = addAngularTable(world, { ...t });
    if (runtime) {
      table.r = t.r ?? table.r;
      table.omega = t.omega ?? table.omega;
      table.angle = t.angle ?? 0;
      table.blockOn = !!t.blockOn;
      table.L = t.L ?? table.L;
      table.ke = t.ke ?? table.ke;
      table.dropped = !!t.dropped;
      table.time = t.time ?? 0;
    }
  }
  for (const r of data.rods || []) {
    const rod = addRod(world, { ...r });
    if (runtime) {
      rod.theta = r.theta ?? 0;
      rod.omega = r.omega ?? 0;
      rod.time = r.time ?? 0;
    }
  }
  for (const o of data.orbits || []) {
    const orbit = addOrbit(world, { ...o });
    if (runtime) {
      orbit.px = o.px ?? orbit.px;
      orbit.pz = o.pz ?? orbit.pz;
      orbit.vx = o.vx ?? orbit.vx;
      orbit.vz = o.vz ?? orbit.vz;
      orbit.time = o.time ?? 0;
      orbit.trail = (o.trail || []).map((p) => [p[0], p[1]]);
      orbit.prevAngle = Math.atan2(orbit.pz, orbit.px);
      orbit.energy0 = o.energy0 ?? orbit.energy0;
      orbit.energy = orbit.energy0;
    }
  }
  for (const t of data.tunnels || []) {
    const tunnel = addTunnel(world, { ...t });
    if (runtime) {
      tunnel.s = t.s ?? tunnel.s;
      tunnel.v = t.v ?? 0;
      tunnel.time = t.time ?? 0;
      tunnel.prevS = tunnel.s;
    }
  }
  for (const l of data.links || []) {
    const link = addLink(world, {
      id: l.id,
      a: { ...l.a },
      b: { ...l.b },
      k: l.k ?? 20,
      beta: l.beta ?? 0,
      rest: l.rest ?? null,
      meter: !!l.meter,
    });
    if (link && l.mount) link.mount = { ...l.mount };
  }
  updateMountedApparatus(world);
  if (runtime) {
    world.time = data.time || 0;
    world.thermal = data.thermal || 0;
    world.appliedWork = data.appliedWork || 0;
    world.driveWork = data.driveWork || 0;
  }
  world.accumulator = 0;
  world.events = [];
  return true;
}

export function forceVectors(world, body) {
  const out = [];
  if (!body) return out;
  const m = body.mass;
  out.push({ type: 'weight', vector: V(0, -m * world.g, 0), magnitude: m * world.g });
  const d = bodyDiagnostics(world, body);
  if (body.attachment?.type === 'surface') {
    const surface = getSurface(world, body.attachment.id);
    if (surface) {
      const { n } = surfaceFrame(surface);
      const c = surfaceContact(world, body);
      const N = Math.max(0, c.N);
      out.push({ type: 'normal', vector: n.scale(N), magnitude: N });
      const d = bodyDiagnostics(world, body);
      if (d.force.lengthSquared() > 0) {
        out.push({ type: 'friction', vector: cloneV(d.force), magnitude: d.friction });
      }
      const spring = springNetForce(world, body);
      if (spring.lengthSquared() > 0) out.push({ type: 'spring', vector: spring, magnitude: spring.length() });
      const app = appliedForce(body);
      if (app.lengthSquared() > 0) out.push({ type: 'applied', vector: app, magnitude: app.length() });
    }
  } else if (body.attachment?.type === 'loop') {
    const theta = body.attachment.theta;
    out.push({ type: 'normal', vector: loopInward(theta).scale(Math.max(0, d.normal)), magnitude: Math.max(0, d.normal) });
  } else if (body.attachment?.type === 'turntable' || body.attachment?.type === 'hcircle' || body.skid) {
    out.push({ type: 'normal', vector: V(0, Math.max(0, d.normal), 0), magnitude: Math.max(0, d.normal) });
    if (body.skid) {
      const speed = Math.hypot(body.cannon.velocity.x, body.cannon.velocity.z);
      if (speed > 1e-4) {
        const f = V(-body.cannon.velocity.x / speed, 0, -body.cannon.velocity.z / speed).scale(d.friction);
        out.push({ type: 'friction', vector: f, magnitude: d.friction });
      }
    } else {
      const p = body.cannon.position;
      const center = body.attachment.type === 'turntable'
        ? getTurntable(world, body.attachment.id)
        : getHCircle(world, body.attachment.id);
      if (center) {
        const cx = center.x;
        const cz = center.z;
        const dx = p.x - cx;
        const dz = p.z - cz;
        const rr = Math.hypot(dx, dz) || 1;
        const inward = V(-dx / rr, 0, -dz / rr);
        out.push({ type: 'friction', vector: inward.scale(d.friction), magnitude: d.friction });
      }
    }
  }
  const spring = springNetForce(world, body);
  if (spring.lengthSquared() > 0 && body.attachment?.type !== 'surface') {
    out.push({ type: 'spring', vector: spring, magnitude: spring.length() });
  }
  const app = appliedForce(body);
  if (app.lengthSquared() > 0 && body.attachment?.type !== 'surface') {
    out.push({ type: 'applied', vector: app, magnitude: app.length() });
  }
  return out;
}
