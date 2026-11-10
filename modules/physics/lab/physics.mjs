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

export const DEG = Math.PI / 180;
export const DEFAULT_H = 1 / 240;
const EPS = 1e-7;
const STATIC_SPEED = 1e-4;

const V = (x = 0, y = 0, z = 0) => new CANNON.Vec3(x, y, z);
const cloneV = (v) => new CANNON.Vec3(v.x, v.y, v.z);
const cloneQ = (q) => new CANNON.Quaternion(q.x, q.y, q.z, q.w);
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

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
  const ground = new CANNON.Body({ mass: 0, shape: new CANNON.Plane() });
  ground.position.set(0, 0, 0);
  ground.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
  engine.addBody(ground);
  return {
    engine,
    ground,
    g,
    h,
    time: 0,
    accumulator: 0,
    nextId: 1,
    surfaces: [],
    loops: [],
    turntables: [],
    hcircles: [],
    bodies: [],
    links: [],
    events: [],
    thermal: 0,
    appliedWork: 0,
    driveWork: 0,
    initial: null,
  };
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
    brake: false,
    motor: { on: false, target: 0, force: 2 },
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
  const body = new CANNON.Body({ mass: b.mass });
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
  world.bodies.push(b);
  return b;
}

export function addBody(world, kind, opts = {}) {
  return kind === 'cart' ? addCart(world, opts) : addBlock(world, opts);
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
  body.cannon.angularFactor.set(0, 0, body.kind === 'cart' ? 1 : 0);
  body.cannon.updateMassProperties();
  if (body.kind === 'cart') {
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
  body.cannon.fixedRotation = true;
  body.cannon.angularFactor.set(0, 0, 0);
  body.cannon.updateMassProperties();
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

export function detachBody(world, body) {
  body.attachment = null;
  body.skid = null;
  body.cannon.type = CANNON.Body.DYNAMIC;
  body.cannon.fixedRotation = body.kind === 'block';
  body.cannon.angularFactor.set(0, 0, body.kind === 'cart' ? 1 : 0);
  body.cannon.updateMassProperties();
  body.cannon.wakeUp();
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
    if (body.kind === 'cart') {
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
    if (body.kind === 'cart' && body.I > 0) {
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
}

export function nearestAttachment(world, point, { maxDistance = 3.5 } = {}) {
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
  candidates.sort((a, b) => a.score - b.score);
  return candidates[0] || null;
}

export function snapBodyToNearest(world, body, opts = {}) {
  const nearest = nearestAttachment(world, body.cannon.position, opts);
  if (!nearest) return null;
  if (nearest.type === 'surface') {
    attachBodyToSurface(world, body, nearest.id, { localX: nearest.localX, localZ: nearest.localZ });
  } else if (nearest.type === 'loop') {
    attachBodyToLoop(world, body, nearest.id, { theta: nearest.theta });
  } else if (nearest.type === 'turntable') {
    attachBodyToTurntable(world, body, nearest.id, { r: nearest.r, phi: nearest.phi });
  } else if (nearest.type === 'hcircle') {
    attachBodyToHCircle(world, body, nearest.id, { phi: nearest.phi });
  }
  return nearest.type;
}

export function snapNearbyBodies(world, maxDistance = 3.5) {
  const snapped = [];
  for (const body of world.bodies) {
    if (body.attachment) continue;
    const hit = snapBodyToNearest(world, body, { maxDistance });
    if (hit) snapped.push({ body, type: hit });
  }
  return snapped;
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
  };
  world.links.push(link);
  return link;
}

export function addAnchor(x, y, z = 0) {
  return { type: 'anchor', x, y, z };
}

export function endpointPosition(world, endpoint) {
  if (endpoint.type === 'anchor') return V(endpoint.x, endpoint.y, endpoint.z);
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
  if (body.kind === 'cart' && body._surfaceRolling) {
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
    if (body.kind === 'cart' && (body._surfaceRolling || body.I === 0)) {
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
  if (body.kind === 'cart' && body.I > 0) {
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
  const massEff = m + (body.kind === 'cart' ? body.I / (body.radius * body.radius) : 0);
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
  if (body.kind === 'cart' && body.I > 0) {
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
/* Fixed-step integration                                             */
/* ------------------------------------------------------------------ */

export function substep(world, h) {
  world.engine.gravity.set(0, -world.g, 0);
  for (const table of world.turntables) updateTurntable(world, table, h);
  applySpringForces(world);
  applyAppliedForces(world);

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

  // Work done by the externally applied force (explicit bookkeeping).
  for (const body of world.bodies) {
    const f = appliedForce(body);
    if (f.lengthSquared() > 0) world.appliedWork += f.dot(body.cannon.velocity) * h;
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
      const massEff = body.mass + (body.kind === 'cart' ? body.I / (body.radius * body.radius) : 0);
      d.normal = (body.mass * vt * vt) / loop.radius + body.mass * world.g * Math.cos(theta) - ext.dot(inward);
      d.speed = Math.abs(vt);
      d.mode = 'loop';
      d.contact = 'loop';
      d.friction = 0;
      d.static = false;
      d.rolling = body.kind === 'cart' && body.I > 0;
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
    if (body.kind === 'cart') {
      const w = body.cannon.angularVelocity.z;
      rotational += 0.5 * body.I * w * w;
    }
    gravitational += body.mass * world.g * body.cannon.position.y;
  }
  for (const table of world.turntables) {
    rotational += 0.5 * table.I * table.omega * table.omega;
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
    bodyStates: world.bodies.map((body) => ({
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
  };
}

export function resetWorld(world) {
  const init = world.initial;
  if (!init) return;
  const tableState = new Map(init.turntables.map((t) => [t.id, t]));
  for (const table of world.turntables) {
    const saved = tableState.get(table.id);
    if (saved) {
      table.omega = saved.omega;
      table.angle = saved.angle;
      table.frictionTorque = 0;
    }
  }
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
  world.time = 0;
  world.accumulator = 0;
  world.thermal = 0;
  world.appliedWork = 0;
  world.driveWork = 0;
  world.events = [];
}

export function clearWorld(world) {
  for (const body of world.bodies) world.engine.removeBody(body.cannon);
  for (const surface of world.surfaces) world.engine.removeBody(surface.body);
  for (const table of world.turntables) world.engine.removeBody(table.body);
  world.bodies = [];
  world.surfaces = [];
  world.loops = [];
  world.turntables = [];
  world.hcircles = [];
  world.links = [];
  world.events = [];
  world.thermal = 0;
  world.appliedWork = 0;
  world.driveWork = 0;
  world.time = 0;
  world.accumulator = 0;
  world.initial = null;
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
  body.mass = Math.max(0.01, mass);
  body.cannon.mass = body.mass;
  body.cannon.updateMassProperties();
  if (body.kind === 'cart') {
    body.cannon.inertia.z = body.I;
    body.cannon.invInertia.z = body.I > 0 ? 1 / body.I : 0;
    body.cannon.updateInertiaWorld(true);
  }
  body.cannon.wakeUp();
}

export function setCartInertia(world, body, I) {
  body.I = Math.max(0, I);
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
  body.cannon.addShape(new CANNON.Sphere(r));
  body.cannon.updateMassProperties();
  body.cannon.inertia.z = body.I;
  body.cannon.invInertia.z = body.I > 0 ? 1 / body.I : 0;
  body.cannon.updateInertiaWorld(true);
  if (body.attachment?.type === 'surface') repositionSurfaceBody(world, body);
  body.cannon.wakeUp();
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

function sceneVec(v) {
  return [v.x, v.y, v.z];
}

export function serializeScene(world, { runtime = false } = {}) {
  return {
    version: 1,
    g: world.g,
    h: world.h,
    time: runtime ? world.time : 0,
    thermal: runtime ? world.thermal : 0,
    appliedWork: runtime ? world.appliedWork : 0,
    driveWork: runtime ? world.driveWork : 0,
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
    })),
    bodies: world.bodies.map((b) => ({
      id: b.id,
      kind: b.kind,
      name: b.name || '',
      mass: b.mass,
      I: b.I,
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
    })),
  };
}

export function deserializeScene(world, data, { runtime = false } = {}) {
  if (!data || typeof data !== 'object') return false;
  clearWorld(world);
  world.nextId = 1;
  world.g = Number.isFinite(data.g) ? data.g : 9.8;
  world.h = Number.isFinite(data.h) ? data.h : DEFAULT_H;
  world.engine.gravity.set(0, -world.g, 0);

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
    });
    table.angle = t.angle ?? 0;
  }
  for (const c of data.hcircles || []) {
    addHCircle(world, {
      ...c,
      muK: Math.min(c.muK ?? 0.35, c.muS ?? 0.55),
    });
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
  for (const l of data.links || []) {
    addLink(world, {
      id: l.id,
      a: { ...l.a },
      b: { ...l.b },
      k: l.k ?? 20,
      beta: l.beta ?? 0,
      rest: l.rest ?? null,
      meter: !!l.meter,
    });
  }
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
