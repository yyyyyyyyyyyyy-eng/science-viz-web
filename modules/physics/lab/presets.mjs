/**
 * 场景库 · Scene library for 物理实验室 · Physics Lab.
 *
 * Every preset is a pure builder returning a serializable scene. `cedRef`
 * and `unit` are labels from the course map, never navigation links.
 */
import {
  addAngularTable,
  addBall,
  addBlock,
  addCart,
  addFan,
  addLauncher,
  addLink,
  addLoop,
  addPendulum,
  addPulley,
  addRod,
  addSensor,
  addSurface,
  addTurntable,
  addAnchor,
  attachBodyToLoop,
  attachBodyToPulley,
  attachBodyToSurface,
  applyInitialVelocity,
  createWorld,
  setBodyCollisionRestitution,
  serializeScene,
} from './physics.mjs';
import {
  addCapacitor,
  addChargedSphere,
  addCircuit,
  addCircuitComponent,
  addInductionCoil,
  addMagneticWire,
  addParticle,
  addPointCharge,
  addProbe,
  addRail,
  addUniformField,
  connectCircuit,
} from './em/physics.mjs';

export const PRESET_UNITS = {
  'mech-u1': { mode: 'mechanics', zh: '运动学', en: 'Kinematics' },
  'mech-u2': { mode: 'mechanics', zh: '力与平移动力学', en: 'Force and Translational Dynamics' },
  'mech-u3': { mode: 'mechanics', zh: '功与能', en: 'Work, Energy, and Power' },
  'mech-u4': { mode: 'mechanics', zh: '动量', en: 'Linear Momentum' },
  'mech-u5': { mode: 'mechanics', zh: '力矩与转动动力学', en: 'Torque and Rotational Dynamics' },
  'mech-u6': { mode: 'mechanics', zh: '转动系统的能量与动量', en: 'Energy and Momentum of Rotating Systems' },
  'mech-u7': { mode: 'mechanics', zh: '振动', en: 'Oscillations' },
  'em-u8': { mode: 'em', zh: '静电学', en: 'Electrostatics' },
  'em-u9': { mode: 'em', zh: '电势', en: 'Electric Potential' },
  'em-u10': { mode: 'em', zh: '导体与电容', en: 'Conductors, Capacitors, Dielectrics' },
  'em-u11': { mode: 'em', zh: '电路', en: 'Circuits' },
  'em-u12': { mode: 'em', zh: '磁场', en: 'Magnetic Fields' },
  'em-u13': { mode: 'em', zh: '电磁感应', en: 'Induction' },
};

export function unitLabel(unit) {
  const info = PRESET_UNITS[unit];
  return info ? `${info.zh} · ${info.en}` : unit;
}

function mechWorld(g = 9.8) {
  const world = createWorld({ g });
  world.em.mode = 'mechanics';
  return world;
}

function emWorld(g = 9.8) {
  const world = createWorld({ g });
  world.em.mode = 'em';
  world.em.settings = { fieldLines: true, equipotentials: false };
  return world;
}

function scene(world) {
  return serializeScene(world);
}

function flatTrack(world, { id = 'track', y = 0.5, length = 12, width = 2, muS = 0, muK = 0 } = {}) {
  return addSurface(world, {
    id, kind: 'track', name: '水平轨道 · Track', x: 0, y, z: 0,
    angleDeg: 0, length, width, thickness: 0.12, muS, muK,
  });
}

function photogate(world, { id = 'gate', x = 0, y = 0.4, z = 0, width = 2, height = 2 } = {}) {
  return addSensor(world, {
    id, kind: 'photogate', name: '光电门 · Photogate', x, y, z, width, height, range: 10, face: 1,
  });
}

function motionSensor(world, { id = 'motion', x = -4.5, y = 1, z = 0, range = 12, face = 1 } = {}) {
  return addSensor(world, {
    id, kind: 'motion', name: '运动传感器 · Motion sensor', x, y, z, width: 0.6, height: 0.6, range, face,
  });
}

export const PRESETS = [
  /* ------------------------------- mech-u1 ------------------------------- */
  {
    id: 'mech-u1-cart-accel',
    title: '恒力小车 · Cart under constant force',
    description: '无摩擦轨道上的小车受风扇恒力加速；运动传感器和光电门记录 x-t、v-t。 · A cart accelerates under a constant fan force on a frictionless track; a motion sensor and photogate record x-t and v-t.',
    unit: 'mech-u1',
    cedRef: 'mech-u1',
    mode: 'mechanics',
    required: ['body', 'surface', 'fan', 'sensor'],
    recommended: { sensors: ['motion', 'photogate'], graphs: true },
    focus: { type: 'body', id: 'cart' },
    build() {
      const world = mechWorld();
      flatTrack(world, { length: 14, width: 1.8 });
      const cart = addCart(world, { id: 'cart', name: '小车 · Cart', mass: 1.5, radius: 0.3, x: 0, y: 2, z: 0 });
      attachBodyToSurface(world, cart, 'track', { localX: -3, localZ: 0 });
      cart.v0 = 0;
      applyInitialVelocity(world, cart);
      addFan(world, { id: 'fan', name: '恒力风扇 · Constant-force fan', bodyId: 'cart', thrust: 1.5, on: true });
      motionSensor(world, { x: -6, y: 0.6, range: 14 });
      photogate(world, { x: 1.2, y: 0.6, width: 2, height: 1.6 });
      return scene(world);
    },
  },
  {
    id: 'mech-u1-projectile-horizontal',
    title: '水平抛射 · Horizontal projectile',
    description: '发射器水平射出小球，光电门记录经过时刻，落点显示射程。 · The launcher fires horizontally; a photogate timestamps the pass and the landing marker shows the range.',
    unit: 'mech-u1',
    cedRef: 'mech-u1',
    mode: 'mechanics',
    required: ['launcher', 'sensor'],
    recommended: { sensors: ['photogate'], graphs: false },
    focus: { type: 'launcher', id: 'launcher' },
    build() {
      const world = mechWorld();
      addLauncher(world, {
        id: 'launcher', name: '抛射发射器 · Launcher', x: -3, y: 0, z: 0,
        angle: 0, speed: 6, height: 1.2, azimuth: 0, mass: 0.2, radius: 0.09,
      });
      photogate(world, { x: -1.6, y: 0, width: 2.2, height: 2.4 });
      motionSensor(world, { x: -6, y: 0.2, range: 12 });
      return scene(world);
    },
  },
  {
    id: 'mech-u1-projectile-angled',
    title: '斜抛 · Angled projectile',
    description: '以 45° 斜抛小球，比较射程与同一初速的水平抛射。 · Launch at 45° and compare the range with the horizontal launch at the same speed.',
    unit: 'mech-u1',
    cedRef: 'mech-u1',
    mode: 'mechanics',
    required: ['launcher', 'sensor'],
    recommended: { sensors: ['photogate'], graphs: false },
    focus: { type: 'launcher', id: 'launcher' },
    build() {
      const world = mechWorld();
      addLauncher(world, {
        id: 'launcher', name: '抛射发射器 · Launcher', x: -3, y: 0, z: 0,
        angle: 45, speed: 7, height: 1.2, azimuth: 0, mass: 0.2, radius: 0.09,
      });
      photogate(world, { x: -1.4, y: 0, width: 2.2, height: 3 });
      motionSensor(world, { x: -6, y: 0.2, range: 14 });
      return scene(world);
    },
  },

  /* ------------------------------- mech-u2 ------------------------------- */
  {
    id: 'mech-u2-incline-friction',
    title: '斜面摩擦 · Friction on an incline',
    description: '25° 斜面上的滑块同时受重力分量和动摩擦，光电门测量下滑加速度。 · A block slides on a 25° incline with kinetic friction; the photogate measures the downhill acceleration.',
    unit: 'mech-u2',
    cedRef: 'mech-u2',
    mode: 'mechanics',
    required: ['surface', 'body', 'sensor'],
    recommended: { sensors: ['photogate', 'motion'], graphs: true },
    focus: { type: 'body', id: 'block' },
    build() {
      const world = mechWorld();
      addSurface(world, {
        id: 'incline', kind: 'incline', name: '粗糙斜面 · Rough incline',
        x: 0, y: 2.2, z: 0, angleDeg: 25, length: 14, width: 2.4, thickness: 0.18,
        muS: 0.12, muK: 0.18,
      });
      const block = addBlock(world, { id: 'block', name: '滑块 · Block', mass: 2, size: 0.5, x: 0, y: 5, z: 0 });
      attachBodyToSurface(world, block, 'incline', { localX: 5.5, localZ: 0 });
      block.v0 = 0;
      applyInitialVelocity(world, block);
      photogate(world, { x: 0.2, y: 1.4, width: 2.6, height: 2 });
      motionSensor(world, { x: 7.8, y: 2.8, range: 10, face: -1 });
      return scene(world);
    },
  },
  {
    id: 'mech-u2-atwood',
    title: '阿特伍德机 · Atwood machine',
    description: '两个质量不同的物块跨过滑轮，验证阿特伍德加速度公式。 · Two unequal masses hang over a pulley and test the Atwood acceleration relation.',
    unit: 'mech-u2',
    cedRef: 'mech-u2',
    mode: 'mechanics',
    required: ['pulley', 'body'],
    recommended: { sensors: ['motion'], graphs: true },
    focus: { type: 'body', id: 'mass-a' },
    build() {
      const world = mechWorld();
      addPulley(world, { id: 'pulley', name: '滑轮 · Pulley', x: 0, y: 3.4, z: 0, radius: 0.3, mass: 0.4, I: 0.04 });
      const a = addBlock(world, { id: 'mass-a', name: '重物 A · Mass A', mass: 2, size: 0.45, x: -1, y: 2, z: 0 });
      const b = addBlock(world, { id: 'mass-b', name: '重物 B · Mass B', mass: 1, size: 0.45, x: 1, y: 2, z: 0 });
      attachBodyToPulley(world, a, 'pulley', 'a');
      attachBodyToPulley(world, b, 'pulley', 'b');
      a.cannon.position.set(-0.3, 2, 0);
      b.cannon.position.set(0.3, 2, 0);
      a.cannon.velocity.setZero();
      b.cannon.velocity.setZero();
      motionSensor(world, { x: -2.4, y: 2, range: 6, face: 1 });
      return scene(world);
    },
  },
  {
    id: 'mech-u2-air-drag',
    title: '空气阻力 · Air drag to terminal speed',
    description: '小球受线性空气阻力下落，速度趋近恒定的终端速度。 · A ball falls with linear drag and approaches a constant terminal speed.',
    unit: 'mech-u2',
    cedRef: 'mech-u2',
    mode: 'mechanics',
    required: ['body', 'sensor'],
    recommended: { sensors: ['motion'], graphs: true },
    focus: { type: 'body', id: 'ball' },
    build() {
      const world = mechWorld();
      const ball = addBall(world, {
        id: 'ball', name: '小球 · Ball', mass: 0.5, radius: 0.18, x: 0, y: 12, z: 0,
        drag: { model: 'linear', b: 2, c: 0 },
      });
      ball.v0 = 0;
      applyInitialVelocity(world, ball);
      motionSensor(world, { x: -3, y: 8, range: 12, face: 1 });
      return scene(world);
    },
  },

  /* ------------------------------- mech-u3 ------------------------------- */
  {
    id: 'mech-u3-vertical-spring',
    title: '竖直弹簧能量 · Vertical spring energy',
    description: '物块挂在竖直弹簧上振荡，观察重力势能、弹性势能与动能相互转化。 · A block oscillates on a vertical spring; watch gravitational, elastic and kinetic energy exchange.',
    unit: 'mech-u3',
    cedRef: 'mech-u3',
    mode: 'mechanics',
    required: ['body', 'link', 'sensor'],
    recommended: { sensors: ['motion'], graphs: true },
    focus: { type: 'body', id: 'block' },
    build() {
      const world = mechWorld();
      const block = addBlock(world, { id: 'block', name: '重物 · Hanging mass', mass: 0.5, size: 0.32, x: 0, y: 2.6, z: 0 });
      addLink(world, {
        id: 'spring', a: { type: 'body', id: 'block' }, b: addAnchor(0, 4.2, 0),
        k: 20, beta: 0, rest: 1.2, meter: false,
      });
      block.v0 = 0;
      applyInitialVelocity(world, block);
      motionSensor(world, { x: -2.2, y: 2.2, range: 6, face: 1 });
      return scene(world);
    },
  },
  {
    id: 'mech-u3-loop-energy',
    title: '竖直圆环能量 · Energy around a vertical loop',
    description: '滑块在竖直圆环底部以 √(5gR) 出发，顶部速度应接近 √(gR)；光电门记录顶部速度。 · A block starts at the bottom with √(5gR); the top speed should approach √(gR), measured by the photogate.',
    unit: 'mech-u3',
    cedRef: 'mech-u3',
    mode: 'mechanics',
    required: ['loop', 'body', 'sensor'],
    recommended: { sensors: ['photogate'], graphs: true },
    focus: { type: 'body', id: 'cart' },
    build() {
      const world = mechWorld();
      const loop = addLoop(world, { id: 'loop', name: '竖直圆环 · Vertical loop', x: 0, y: 2.4, z: 0, radius: 1.6 });
      const cart = addBlock(world, {
        id: 'cart', name: '滑块 · Block', mass: 1, size: 0.4, x: 0, y: 2.4, z: 0,
      });
      cart.v0 = Math.sqrt(5 * world.g * loop.radius);
      cart.azimuth = 0;
      attachBodyToLoop(world, cart, 'loop', { theta: 0 });
      photogate(world, { x: 0, y: loop.y + loop.radius - 0.8, width: 1.6, height: 1.6 });
      return scene(world);
    },
  },

  /* ------------------------------- mech-u4 ------------------------------- */
  {
    id: 'mech-u4-elastic-collision',
    title: '弹性碰撞 · Elastic collision',
    description: '等质量滑块在无摩擦水平面上以恢复系数 1 相碰，速度几乎互换。 · Equal masses collide with restitution 1 on a frictionless horizontal plane; their velocities nearly swap.',
    unit: 'mech-u4',
    cedRef: 'mech-u4',
    mode: 'mechanics',
    required: ['body', 'sensor'],
    recommended: { sensors: ['photogate', 'motion'], graphs: true },
    focus: { type: 'body', id: 'cart-a' },
    build() {
      const world = mechWorld(0);
      setBodyCollisionRestitution(world, 1);
      const a = addBlock(world, { id: 'cart-a', name: '滑块 A · Cart A', mass: 1, size: 0.5, x: -2, y: 0.26, z: 0 });
      const b = addBlock(world, { id: 'cart-b', name: '滑块 B · Cart B', mass: 1, size: 0.5, x: 2, y: 0.26, z: 0 });
      a.v0 = 2; a.azimuth = 0;
      b.v0 = -1; b.azimuth = 0;
      applyInitialVelocity(world, a);
      applyInitialVelocity(world, b);
      photogate(world, { id: 'gate-a', x: -0.8, y: 0.2, width: 1.8, height: 1.4 });
      photogate(world, { id: 'gate-b', x: 0.8, y: 0.2, width: 1.8, height: 1.4 });
      motionSensor(world, { x: -5, y: 0.4, range: 8, face: 1 });
      return scene(world);
    },
  },
  {
    id: 'mech-u4-inelastic-collision',
    title: '完全非弹性碰撞 · Perfectly inelastic collision',
    description: '质量 2 kg 的滑块追上 1 kg 滑块并粘在一起，末速度由动量守恒给出。 · A 2 kg block catches a 1 kg block and they stick; the final speed follows momentum conservation.',
    unit: 'mech-u4',
    cedRef: 'mech-u4',
    mode: 'mechanics',
    required: ['body', 'sensor'],
    recommended: { sensors: ['photogate', 'motion'], graphs: true },
    focus: { type: 'body', id: 'cart-a' },
    build() {
      const world = mechWorld(0);
      setBodyCollisionRestitution(world, 0);
      const a = addBlock(world, { id: 'cart-a', name: '滑块 A · Cart A', mass: 2, size: 0.5, x: -2, y: 0.26, z: 0 });
      const b = addBlock(world, { id: 'cart-b', name: '滑块 B · Cart B', mass: 1, size: 0.5, x: 2, y: 0.26, z: 0 });
      a.v0 = 2; a.azimuth = 0;
      b.v0 = -1; b.azimuth = 0;
      applyInitialVelocity(world, a);
      applyInitialVelocity(world, b);
      photogate(world, { id: 'gate-a', x: -0.8, y: 0.2, width: 1.8, height: 1.4 });
      photogate(world, { id: 'gate-b', x: 0.8, y: 0.2, width: 1.8, height: 1.4 });
      motionSensor(world, { x: -5, y: 0.4, range: 8, face: 1 });
      return scene(world);
    },
  },

  /* ------------------------------- mech-u5 ------------------------------- */
  {
    id: 'mech-u5-rod-torque',
    title: '杆受力矩 · Rod under torque',
    description: '均匀杆绕一端在恒定力矩下转动，角加速度由力矩与转动惯量之比给出。 · A uniform rod pivots at one end under constant torque; its angular acceleration is set by torque and moment of inertia.',
    unit: 'mech-u5',
    cedRef: 'mech-u5',
    mode: 'mechanics',
    required: ['rod'],
    recommended: { sensors: [], graphs: false },
    focus: { type: 'rod', id: 'rod' },
    build() {
      const world = mechWorld();
      addRod(world, {
        id: 'rod', name: '受力矩的杆 · Rod', mass: 2, length: 2.2, pivot: 'end', torque: 2,
      });
      return scene(world);
    },
  },
  {
    id: 'mech-u5-driven-disk',
    title: '驱动力矩圆盘 · Driven disk',
    description: '转盘由恒定力矩驱动，角加速度可与杆的结果比较。 · A turntable driven by constant torque; compare its angular acceleration with the rod.',
    unit: 'mech-u5',
    cedRef: 'mech-u5',
    mode: 'mechanics',
    required: ['turntable'],
    recommended: { sensors: [], graphs: false },
    focus: { type: 'turntable', id: 'disk' },
    build() {
      const world = mechWorld();
      addTurntable(world, {
        id: 'disk', name: '力矩圆盘 · Torque disk', x: 0, y: 0.62, z: 0,
        radius: 1.4, I: 8, omega: 0, targetOmega: 0, torque: 1.5,
        drive: 'torque', muS: 0.6, muK: 0.4,
      });
      return scene(world);
    },
  },

  /* ------------------------------- mech-u6 ------------------------------- */
  {
    id: 'mech-u6-rolling-incline',
    title: '斜面滚动 · Rolling without slipping',
    description: '实心球沿斜面纯滚动，加速度由斜面倾角与转动惯量比决定；光电门测速。 · A solid sphere rolls without slipping down an incline; its acceleration depends on the slope and inertia ratio, and the photogate measures speed.',
    unit: 'mech-u6',
    cedRef: 'mech-u6',
    mode: 'mechanics',
    required: ['surface', 'body', 'sensor'],
    recommended: { sensors: ['photogate', 'motion'], graphs: true },
    focus: { type: 'body', id: 'ball' },
    build() {
      const world = mechWorld();
      addSurface(world, {
        id: 'incline', kind: 'incline', name: '滚动斜面 · Rolling incline',
        x: 0, y: 2.4, z: 0, angleDeg: 20, length: 16, width: 2.4, thickness: 0.18,
        muS: 0.8, muK: 0.5,
      });
      const ball = addBall(world, { id: 'ball', name: '实心球 · Solid sphere', mass: 2, radius: 0.3, x: 0, y: 6, z: 0 });
      attachBodyToSurface(world, ball, 'incline', { localX: 5, localZ: 0 });
      ball.v0 = 0;
      applyInitialVelocity(world, ball);
      photogate(world, { x: 2.4, y: 2.8, width: 2.6, height: 2 });
      motionSensor(world, { x: 8.4, y: 4.2, range: 12, face: -1 });
      return scene(world);
    },
  },
  {
    id: 'mech-u6-angular-momentum',
    title: '角动量转盘 · Angular momentum turntable',
    description: '转盘上的物块沿径向缓慢外移，系统角动量 L=Iω 保持。 · A block slides radially outward on a spinning disc while the system angular momentum L=Iω stays constant.',
    unit: 'mech-u6',
    cedRef: 'mech-u6',
    mode: 'mechanics',
    required: ['angularTable'],
    recommended: { sensors: [], graphs: false },
    focus: { type: 'angularTable', id: 'table' },
    build() {
      const world = mechWorld();
      addAngularTable(world, {
        id: 'table', name: '角动量转盘 · Angular momentum table', x: 0, y: 0.55, z: 0,
        radius: 1.6, discMass: 8, blockMass: 1, r: 1.1, omega: 2.2,
        rSpeed: 0.22, radialMotor: true, blockOn: true,
      });
      return scene(world);
    },
  },

  /* ------------------------------- mech-u7 ------------------------------- */
  {
    id: 'mech-u7-spring-shm',
    title: '水平弹簧振子 · Horizontal spring SHM',
    description: '无摩擦轨道上的物块连接水平弹簧，光电门与运动传感器记录简谐振动并测量周期。 · A block on a frictionless track is linked to a horizontal spring; the photogate and motion sensor record the simple harmonic motion and measure its period.',
    unit: 'mech-u7',
    cedRef: 'mech-u7',
    mode: 'mechanics',
    required: ['surface', 'body', 'link', 'sensor'],
    recommended: { sensors: ['motion', 'photogate'], graphs: true },
    focus: { type: 'body', id: 'block' },
    build() {
      const world = mechWorld();
      flatTrack(world, { length: 10, width: 1.6 });
      const block = addBlock(world, { id: 'block', name: '振子 · Oscillator', mass: 0.5, size: 0.4, x: 0, y: 1.2, z: 0 });
      attachBodyToSurface(world, block, 'track', { localX: 0, localZ: 0 });
      block.v0 = 0;
      applyInitialVelocity(world, block);
      addLink(world, {
        id: 'spring', a: { type: 'body', id: 'block' }, b: addAnchor(1.6, 0.76, 0),
        k: 20, beta: 0, rest: 1.2, meter: false,
      });
      motionSensor(world, { x: -3.4, y: 0.7, range: 8, face: 1 });
      photogate(world, { x: 0.4, y: 0.5, width: 1.6, height: 1.4 });
      return scene(world);
    },
  },
  {
    id: 'mech-u7-pendulum',
    title: '单摆周期 · Simple pendulum',
    description: '小角度单摆，实测周期应接近小角度理论值。 · A small-angle pendulum; the measured period should approach the small-angle prediction.',
    unit: 'mech-u7',
    cedRef: 'mech-u7',
    mode: 'mechanics',
    required: ['pendulum'],
    recommended: { sensors: [], graphs: false },
    focus: { type: 'pendulum', id: 'pendulum' },
    build() {
      const world = mechWorld();
      addPendulum(world, {
        id: 'pendulum', name: '单摆 · Pendulum', x: 0, y: 4, z: 0, length: 1.5, mass: 1,
        amplitude: 4, radius: 0.16, conical: false,
      });
      return scene(world);
    },
  },

  /* -------------------------------- em-u8 -------------------------------- */
  {
    id: 'em-u8-two-charges',
    title: '两点电荷叠加 · Two-charge superposition',
    description: '正负点电荷周围的场强与电势由叠加原理给出，移动探测器读取 E 和 V。 · The field and potential around two opposite charges follow superposition; move the probe to read E and V.',
    unit: 'em-u8',
    cedRef: 'em-u8',
    mode: 'em',
    required: ['emCharge', 'emProbe'],
    recommended: { sensors: [], instruments: ['emProbe'], graphs: false },
    focus: { type: 'emProbe', id: 'probe' },
    build() {
      const world = emWorld();
      addPointCharge(world.em, { id: 'q1', name: '正电荷 · Positive charge', x: -1, y: 1.5, z: 0, q: 5e-9 });
      addPointCharge(world.em, { id: 'q2', name: '负电荷 · Negative charge', x: 1, y: 1.5, z: 0, q: -5e-9 });
      addProbe(world.em, { id: 'probe', name: '电场探测器 · E-field probe', x: 0.4, y: 1.6, z: 0.7 });
      return scene(world);
    },
  },
  {
    id: 'em-u8-charged-sphere',
    title: '带电球体 · Charged sphere inside and out',
    description: '均匀带电球体内部场强随半径线性增长，外部按平方反比衰减；两个探测器分别读取。 · Inside a uniformly charged sphere E grows linearly with radius and outside it falls as an inverse square; two probes read both regions.',
    unit: 'em-u8',
    cedRef: 'em-u8',
    mode: 'em',
    required: ['emSphere', 'emProbe'],
    recommended: { sensors: [], instruments: ['emProbe'], graphs: false },
    focus: { type: 'emProbe', id: 'probe-out' },
    build() {
      const world = emWorld();
      addChargedSphere(world.em, {
        id: 'sphere', name: '均匀带电球 · Uniform sphere', x: 0, y: 1.6, z: 0,
        R: 0.8, q: 2e-8, distribution: 'volume',
      });
      addProbe(world.em, { id: 'probe-out', name: '外部探测器 · Outside probe', x: 2, y: 1.6, z: 0 });
      addProbe(world.em, { id: 'probe-in', name: '内部探测器 · Inside probe', x: 0.4, y: 1.6, z: 0 });
      return scene(world);
    },
  },

  /* -------------------------------- em-u9 -------------------------------- */
  {
    id: 'em-u9-equipotential-probe',
    title: '等势线与电势 · Equipotentials and potential',
    description: '打开等势线，移动探测器比较不同位置的电势和电场方向。 · Turn on equipotentials and move the probe to compare potential and field direction at different points.',
    unit: 'em-u9',
    cedRef: 'em-u9',
    mode: 'em',
    required: ['emCharge', 'emProbe'],
    recommended: { sensors: [], instruments: ['emProbe'], graphs: false },
    focus: { type: 'emProbe', id: 'probe-a' },
    build() {
      const world = emWorld();
      world.em.settings.equipotentials = true;
      addPointCharge(world.em, { id: 'q1', name: '正电荷 · Positive charge', x: -1.2, y: 1.5, z: 0, q: 8e-9 });
      addPointCharge(world.em, { id: 'q2', name: '负电荷 · Negative charge', x: 1.2, y: 1.5, z: 0, q: -8e-9 });
      addProbe(world.em, { id: 'probe-a', name: '探测器 A · Probe A', x: 0, y: 1.5, z: 0.8 });
      addProbe(world.em, { id: 'probe-b', name: '探测器 B · Probe B', x: 0.8, y: 1.5, z: 0 });
      addProbe(world.em, { id: 'probe-c', name: '探测器 C · Probe C', x: -0.5, y: 1.5, z: -0.7 });
      return scene(world);
    },
  },
  {
    id: 'em-u9-uniform-field-particle',
    title: '均匀电场中的带电粒子 · Charged particle in uniform E',
    description: '带电粒子从静止进入均匀电场，加速度由电场力与质量决定，动能来自电场做功。 · A charged particle starts from rest in a uniform field; the field force sets its acceleration and does the work that becomes kinetic energy.',
    unit: 'em-u9',
    cedRef: 'em-u9',
    mode: 'em',
    required: ['emUniform', 'emParticle', 'emProbe'],
    recommended: { sensors: [], instruments: ['emProbe'], graphs: false },
    focus: { type: 'emParticle', id: 'particle' },
    build() {
      const world = emWorld();
      world.em.settings.equipotentials = true;
      addUniformField(world.em, {
        id: 'field', name: '均匀电场 · Uniform E field', x: 0, y: 1.5, z: 0, size: 20,
        Ex: 500, Ey: 0, Ez: 0, Bx: 0, By: 0, Bz: 0,
      });
      addParticle(world.em, {
        id: 'particle', name: '带电粒子 · Charged particle', x: -2, y: 1.5, z: 0,
        vx: 0, vy: 0, vz: 0, q: 1e-6, m: 1e-3,
      });
      addProbe(world.em, { id: 'probe', name: '电势探测器 · Potential probe', x: 0, y: 1.5, z: 0 });
      return scene(world);
    },
  },

  /* -------------------------------- em-u10 ------------------------------- */
  {
    id: 'em-u10-parallel-plate',
    title: '平行板电容器 · Parallel-plate capacitor',
    description: '固定电压下改变面积、间距和介质，验证平行板电容公式；探测器读取间隙场强。 · Vary area, separation and dielectric at fixed voltage to test the parallel-plate capacitance relation; a probe reads the gap field.',
    unit: 'em-u10',
    cedRef: 'em-u10',
    mode: 'em',
    required: ['emCapacitor', 'emProbe'],
    recommended: { sensors: [], instruments: ['emProbe'], graphs: false },
    focus: { type: 'emCapacitor', id: 'cap' },
    build() {
      const world = emWorld();
      addCapacitor(world.em, {
        id: 'cap', name: '平行板电容器 · Parallel plates', x: 0, y: 1.5, z: 0,
        area: 0.5, d: 0.02, kappa: 2.5, drive: 'V', V: 120, axis: 'x',
      });
      addProbe(world.em, { id: 'probe', name: '间隙探测器 · Gap probe', x: 0, y: 1.5, z: 0 });
      return scene(world);
    },
  },
  {
    id: 'em-u10-dielectric',
    title: '介质对比 · Dielectric at constant charge',
    description: '两个相同电容器带同量电荷，κ=1 与 κ=3 的电压成反比，验证 κ 的缩放。 · Two identical capacitors hold the same charge; the κ=1 and κ=3 voltages are inversely proportional, showing the κ scaling.',
    unit: 'em-u10',
    cedRef: 'em-u10',
    mode: 'em',
    required: ['emCapacitor', 'emProbe'],
    recommended: { sensors: [], instruments: ['emProbe'], graphs: false },
    focus: { type: 'emCapacitor', id: 'cap-air' },
    build() {
      const world = emWorld();
      addCapacitor(world.em, {
        id: 'cap-air', name: '空气电容 · Air capacitor', x: -2, y: 1.5, z: 0,
        area: 0.5, d: 0.02, kappa: 1, drive: 'Q', Q: 2e-9, axis: 'x',
      });
      addCapacitor(world.em, {
        id: 'cap-dielectric', name: '介质电容 · Dielectric capacitor', x: 2, y: 1.5, z: 0,
        area: 0.5, d: 0.02, kappa: 3, drive: 'Q', Q: 2e-9, axis: 'x',
      });
      addProbe(world.em, { id: 'probe-air', name: '空气侧探测器 · Air probe', x: -2, y: 1.5, z: 0 });
      addProbe(world.em, { id: 'probe-dielectric', name: '介质侧探测器 · Dielectric probe', x: 2, y: 1.5, z: 0 });
      return scene(world);
    },
  },

  /* -------------------------------- em-u11 ------------------------------- */
  {
    id: 'em-u11-rc-charging',
    title: 'RC 充电 · RC charging',
    description: '闭合开关后电容电压按指数曲线上升；电压表和电流表可读实时值。 · After closing the switch, the capacitor voltage rises exponentially; the voltmeter and ammeter read live values.',
    unit: 'em-u11',
    cedRef: 'em-u11',
    mode: 'em',
    required: ['emCircuit'],
    recommended: { sensors: [], instruments: ['emCircuit'], components: ['voltmeter', 'ammeter'], graphs: false },
    focus: { type: 'emCircuit', id: 'circuit-rc' },
    build() {
      const world = emWorld();
      const circuit = addCircuit(world.em, { id: 'circuit-rc', name: 'RC 充电 · RC charging' });
      const battery = addCircuitComponent(circuit, 'battery', { emf: 9, r: 0 });
      const sw = addCircuitComponent(circuit, 'switch', { closed: true });
      const resistor = addCircuitComponent(circuit, 'resistor', { R: 1000 });
      const capacitor = addCircuitComponent(circuit, 'capacitor', { C: 1e-3, v0: 0 });
      const ammeter = addCircuitComponent(circuit, 'ammeter');
      const voltmeter = addCircuitComponent(circuit, 'voltmeter');
      connectCircuit(circuit, { comp: battery.id, term: 1 }, { comp: sw.id, term: 0 });
      connectCircuit(circuit, { comp: sw.id, term: 1 }, { comp: resistor.id, term: 0 });
      connectCircuit(circuit, { comp: resistor.id, term: 1 }, { comp: ammeter.id, term: 0 });
      connectCircuit(circuit, { comp: ammeter.id, term: 1 }, { comp: capacitor.id, term: 0 });
      connectCircuit(circuit, { comp: capacitor.id, term: 1 }, { comp: battery.id, term: 0 });
      connectCircuit(circuit, { comp: capacitor.id, term: 0 }, { comp: voltmeter.id, term: 0 });
      connectCircuit(circuit, { comp: capacitor.id, term: 1 }, { comp: voltmeter.id, term: 1 });
      world.em.activeCircuitId = circuit.id;
      return scene(world);
    },
  },
  {
    id: 'em-u11-series-resistors',
    title: '串联电阻 · Series resistors',
    description: '12 V 电源驱动 10 Ω 与 20 Ω 串联，电流 0.4 A、20 Ω 上电压 8 V；电表实时读取。 · A 12 V source drives 10 Ω and 20 Ω in series: 0.4 A and 8 V across 20 Ω, read live by the meters.',
    unit: 'em-u11',
    cedRef: 'em-u11',
    mode: 'em',
    required: ['emCircuit'],
    recommended: { sensors: [], instruments: ['emCircuit'], components: ['voltmeter', 'ammeter'], graphs: false },
    focus: { type: 'emCircuit', id: 'circuit-series' },
    build() {
      const world = emWorld();
      const circuit = addCircuit(world.em, { id: 'circuit-series', name: '串联电阻 · Series resistors' });
      const battery = addCircuitComponent(circuit, 'battery', { emf: 12, r: 0 });
      const r1 = addCircuitComponent(circuit, 'resistor', { R: 10 });
      const r2 = addCircuitComponent(circuit, 'resistor', { R: 20 });
      const ammeter = addCircuitComponent(circuit, 'ammeter');
      const voltmeter = addCircuitComponent(circuit, 'voltmeter');
      connectCircuit(circuit, { comp: battery.id, term: 1 }, { comp: ammeter.id, term: 0 });
      connectCircuit(circuit, { comp: ammeter.id, term: 1 }, { comp: r1.id, term: 0 });
      connectCircuit(circuit, { comp: r1.id, term: 1 }, { comp: r2.id, term: 0 });
      connectCircuit(circuit, { comp: r2.id, term: 1 }, { comp: battery.id, term: 0 });
      connectCircuit(circuit, { comp: r2.id, term: 0 }, { comp: voltmeter.id, term: 0 });
      connectCircuit(circuit, { comp: r2.id, term: 1 }, { comp: voltmeter.id, term: 1 });
      world.em.activeCircuitId = circuit.id;
      return scene(world);
    },
  },

  /* -------------------------------- em-u12 ------------------------------- */
  {
    id: 'em-u12-long-wire',
    title: '长直导线磁场 · Long straight wire',
    description: '长直导线周围的磁场随距离衰减；移动磁探测器比较不同半径处的场强。 · The field around a long wire falls with distance; move the magnetic probe to compare radii.',
    unit: 'em-u12',
    cedRef: 'em-u12',
    mode: 'em',
    required: ['emMagneticWire', 'emProbe'],
    recommended: { sensors: [], instruments: ['emProbe'], graphs: false },
    focus: { type: 'emProbe', id: 'probe' },
    build() {
      const world = emWorld();
      addMagneticWire(world.em, {
        id: 'wire', name: '长直导线 · Long wire', x: 0, y: 1.5, z: 0, current: 5, length: 4,
      });
      addProbe(world.em, { id: 'probe', name: '磁探测器 · Magnetic probe', x: 1.2, y: 1.5, z: 0 });
      return scene(world);
    },
  },
  {
    id: 'em-u12-cyclotron',
    title: '回旋运动 · Cyclotron motion',
    description: '带电粒子垂直进入均匀磁场，回旋半径由速度、电荷与磁场决定，轨迹完整显示。 · A charged particle enters a uniform B field perpendicularly; speed, charge and field set the cyclotron radius, and the trail closes.',
    unit: 'em-u12',
    cedRef: 'em-u12',
    mode: 'em',
    required: ['emUniform', 'emParticle', 'emProbe'],
    recommended: { sensors: [], instruments: ['emProbe'], graphs: false },
    focus: { type: 'emParticle', id: 'particle' },
    build() {
      const world = emWorld();
      addUniformField(world.em, {
        id: 'field', name: '均匀磁场 · Uniform B field', x: 0, y: 1.5, z: 0, size: 10,
        Ex: 0, Ey: 0, Ez: 0, Bx: 0, By: 0.5, Bz: 0,
      });
      addParticle(world.em, {
        id: 'particle', name: '回旋粒子 · Cyclotron particle', x: 0, y: 1.5, z: 0,
        vx: 1, vy: 0, vz: 0, q: 1e-5, m: 1e-6,
      });
      addProbe(world.em, { id: 'probe', name: '磁探测器 · Magnetic probe', x: 0, y: 1.5, z: 0 });
      return scene(world);
    },
  },

  /* -------------------------------- em-u13 ------------------------------- */
  {
    id: 'em-u13-rail-terminal',
    title: '滑轨终端速度 · Rail terminal speed',
    description: '外力拉动金属棒，感应电流的磁力最终平衡外力，速度趋于终端值。 · A constant force pulls a rod; the magnetic force from the induced current eventually balances it at a terminal speed.',
    unit: 'em-u13',
    cedRef: 'em-u13',
    mode: 'em',
    required: ['emRail', 'emUniform', 'emProbe'],
    recommended: { sensors: [], instruments: ['emProbe'], graphs: false },
    focus: { type: 'emRail', id: 'rail' },
    build() {
      const world = emWorld();
      addUniformField(world.em, {
        id: 'field', name: '均匀磁场 · Uniform B field', x: 0, y: 0.5, z: 0, size: 8,
        Ex: 0, Ey: 0, Ez: 0, Bx: 0, By: 0.5, Bz: 0,
      });
      addRail(world.em, {
        id: 'rail', name: '滑轨金属棒 · Rail and rod', x: 0, y: 0.5, z: 0,
        ell: 1.2, length: 24, B: 0.5, R: 2, mass: 0.2, F: 0.4, v: 0,
      });
      addProbe(world.em, { id: 'probe', name: '磁探测器 · Magnetic probe', x: 1, y: 0.5, z: 0 });
      return scene(world);
    },
  },
  {
    id: 'em-u13-coil-lenz',
    title: '线圈进入磁场 · Coil entering a field',
    description: '线圈匀速进入磁场，磁通量增加，感应电动势为负（楞次定律）；探测器显示磁场区域。 · A coil enters a field at constant speed; flux increases and the emf is negative (Lenz law), with a probe marking the field region.',
    unit: 'em-u13',
    cedRef: 'em-u13',
    mode: 'em',
    required: ['emInductionCoil', 'emUniform', 'emProbe'],
    recommended: { sensors: [], instruments: ['emProbe'], graphs: false },
    focus: { type: 'emInductionCoil', id: 'coil' },
    build() {
      const world = emWorld();
      addUniformField(world.em, {
        id: 'field', name: '磁场区域 · Field region', x: 2.5, y: 1.5, z: 0, size: 3,
        Ex: 0, Ey: 0, Ez: 0, Bx: 0, By: 0.4, Bz: 0,
      });
      addInductionCoil(world.em, {
        id: 'coil', name: '感应线圈 · Induction coil', x: -1, y: 1.5, z: 0,
        width: 1.5, height: 1.5, turns: 20, R: 5, B0: 0.4, Bdot: 0, vx: 0.5,
        regionMin: 1, regionMax: 4,
      });
      addProbe(world.em, { id: 'probe', name: '磁探测器 · Magnetic probe', x: 1.5, y: 1.5, z: 0 });
      return scene(world);
    },
  },
];

export default PRESETS;

export function getPreset(id) {
  return PRESETS.find((preset) => preset.id === id) || null;
}

export function presetsFor({ mode = 'all', unit = 'all' } = {}) {
  return PRESETS.filter((preset) => (
    (mode === 'all' || preset.mode === mode)
    && (unit === 'all' || preset.unit === unit)
  ));
}

export function presetCountForUnit(unit) {
  return PRESETS.filter((preset) => preset.unit === unit).length;
}

export function buildPresetScene(id) {
  const preset = getPreset(id);
  return preset ? preset.build() : null;
}

export function sensorLabel(kind) {
  if (kind === 'motion') return '运动传感器 · Motion sensor';
  if (kind === 'photogate') return '光电门 · Photogate';
  return kind;
}
