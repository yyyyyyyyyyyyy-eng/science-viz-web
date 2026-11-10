/**
 * Inspector and More-settings panels for E&M apparatus.
 * The caller supplies the lab's field/readout helpers so both modes keep the
 * same visual chrome and undo behaviour.
 */
import { el } from '../../../../js/ui-shared.js';
import {
  EPS0,
  K_COULOMB,
  MU0,
  capacitorState,
  inductionCoilState,
} from './physics.mjs';

const nC = (value) => value * 1e-9;
const fromNc = (value) => value / 1e-9;
const uC = (value) => value * 1e-6;
const fromUc = (value) => value / 1e-6;
const mT = (value) => value * 1e-3;
const fromMT = (value) => value / 1e-3;

export function isEMType(type) {
  return typeof type === 'string' && type.startsWith('em');
}

function note(api, parent, text) {
  parent.appendChild(el('p', { className: 'plab-field-hint', text }));
}

function readouts(api, parent) {
  const box = el('div', { className: 'plab-readouts' });
  parent.appendChild(box);
  return box;
}

function fresh(parent) {
  const common = el('div', { className: 'plab-inspector-common' });
  parent.appendChild(common);
  return common;
}

export function buildEMInspector({ entity, world, api }) {
  api.inspectorHeading(api.parent, entity);
  if (entity.x != null) api.positionFields(api.parent, entity);
  const common = fresh(api.parent);

  if (entity.type === 'emCharge') {
    api.field(common, {
      label: '电荷量 q · Charge',
      value: fromNc(entity.q),
      min: -200,
      max: 200,
      step: 0.1,
      unit: 'nC',
      testid: 'emChargeQ',
      onChange: (v) => { entity.q = nC(v); },
    });
    const live = readouts(api, common);
    api.addLive(live, '场强 |E| @ 1 m · Field', 'emChargeE', 'V/m');
    api.addLive(live, '电势 V @ 1 m · Potential', 'emChargeV', 'V');
    api.formula(common, 'E=\\dfrac{k|q|}{r^{2}},\\qquad V=\\dfrac{kq}{r}');
    note(api, common, `库仑常数 · Coulomb constant k = ${K_COULOMB.toExponential(4)} N·m²/C²。 · Field lines and equipotentials are toggled in More settings.`);
  } else if (entity.type === 'emSphere') {
    api.field(common, {
      label: '电荷量 q · Charge',
      value: fromNc(entity.q),
      min: -400,
      max: 400,
      step: 0.5,
      unit: 'nC',
      testid: 'emSphereQ',
      onChange: (v) => { entity.q = nC(v); },
    });
    api.field(common, {
      label: '半径 R · Radius',
      value: entity.R,
      min: 0.1,
      max: 4,
      step: 0.05,
      unit: 'm',
      testid: 'emSphereR',
      onChange: (v) => { entity.R = Math.max(0.05, v); },
    });
    api.selectField(common, {
      label: '电荷分布 · Charge distribution',
      value: entity.distribution,
      options: [['surface', '均匀面电荷 · Surface'], ['volume', '均匀体电荷 · Volume']],
      testid: 'emSphereDistribution',
      onChange: (v) => { entity.distribution = v === 'volume' ? 'volume' : 'surface'; },
    });
    const live = readouts(api, common);
    api.addLive(live, '内部场强 E(r=0.5R) · Inside E', 'emSphereInside', 'V/m');
    api.addLive(live, '表面电势 V(R) · Surface V', 'emSphereSurfaceV', 'V');
    api.formula(common, entity.distribution === 'volume'
      ? 'E_{\\text{in}}=\\dfrac{kqr}{R^{3}},\\qquad E_{\\text{out}}=\\dfrac{kq}{r^{2}}'
      : 'E_{\\text{in}}=0,\\qquad E_{\\text{out}}=\\dfrac{kq}{r^{2}}');
  } else if (entity.type === 'emLine') {
    api.field(common, {
      label: '总电荷量 q · Total charge',
      value: fromNc(entity.q),
      min: -400,
      max: 400,
      step: 0.5,
      unit: 'nC',
      testid: 'emLineQ',
      onChange: (v) => { entity.q = nC(v); entity.lambda = entity.q / entity.length; },
    });
    api.field(common, {
      label: '长度 L · Length',
      value: entity.length,
      min: 0.2,
      max: 40,
      step: 0.1,
      unit: 'm',
      testid: 'emLineLength',
      onChange: (v) => { entity.length = Math.max(0.1, v); entity.lambda = entity.q / entity.length; },
    });
    const live = readouts(api, common);
    api.addLive(live, '线电荷密度 λ · λ', 'emLineLambda', 'C/m');
    api.addLive(live, '中垂面 E @ 1 m · Midplane E', 'emLineE', 'V/m');
    api.formula(common, 'E_{\\perp}\\approx\\dfrac{\\lambda}{2\\pi\\varepsilon_{0}r}\\quad(L\\gg r)');
    note(api, common, '有限线段用精确积分，V 以中点垂直 1 m 处为零；L ≫ r 时标注理想无限长极限。 · Finite segment exact; V=0 at 1 m perpendicular from the centre, and the ideal infinite-line limit is labelled when L ≫ r.');
  } else if (entity.type === 'emPlane') {
    api.field(common, {
      label: '总电荷量 q · Total charge',
      value: fromNc(entity.q),
      min: -800,
      max: 800,
      step: 1,
      unit: 'nC',
      testid: 'emPlaneQ',
      onChange: (v) => { entity.q = nC(v); entity.sigma = entity.q / (entity.width * entity.height); },
    });
    api.field(common, {
      label: '边长 · Side',
      value: entity.width,
      min: 0.3,
      max: 40,
      step: 0.1,
      unit: 'm',
      testid: 'emPlaneWidth',
      onChange: (v) => {
        entity.width = Math.max(0.2, v);
        entity.height = entity.width;
        entity.sigma = entity.q / (entity.width * entity.height);
      },
    });
    const live = readouts(api, common);
    api.addLive(live, '面电荷密度 σ · σ', 'emPlaneSigma', 'C/m²');
    api.addLive(live, '板面 E @ 1 m · Plate E', 'emPlaneE', 'V/m');
    api.formula(common, 'E\\approx\\dfrac{\\sigma}{2\\varepsilon_{0}}\\quad(\\text{large plate})');
    note(api, common, '有限矩形用数值积分，V 以板面中心法向 1 m 处为零；尺寸远大于距离时标注理想无限大平面极限 σ/(2ε₀)。 · Finite rectangle integrated numerically; V=0 at 1 m on the normal, with the ideal infinite-plane limit labelled when large.');
  } else if (entity.type === 'emProbe') {
    const live = readouts(api, common);
    api.addLive(live, '电场 E · Electric field', 'emProbeE', 'V/m');
    api.addLive(live, '电场分量 Ex · Ex', 'emProbeEx', 'V/m');
    api.addLive(live, '电场分量 Ey · Ey', 'emProbeEy', 'V/m');
    api.addLive(live, '电场分量 Ez · Ez', 'emProbeEz', 'V/m');
    api.addLive(live, '电势 V · Potential', 'emProbeV', 'V');
    api.addLive(live, '磁感应强度 B · B', 'emProbeB', 'T');
    api.formula(common, '\\vec{E}=-\\nabla V,\\qquad V=\\sum\\dfrac{kq_i}{r_i}');
    note(api, common, '拖动探测器或直接输入 x/y/z；读数随位置实时更新。 · Drag the probe or type x/y/z; readings update live.');
  } else if (entity.type === 'emParticle') {
    api.field(common, {
      label: '电荷量 q · Charge',
      value: fromUc(entity.q),
      min: -20,
      max: 20,
      step: 0.05,
      unit: 'µC',
      testid: 'emParticleQ',
      onChange: (v) => { entity.q = uC(v); },
    });
    api.field(common, {
      label: '质量 m · Mass',
      value: entity.m * 1e6,
      min: 0.01,
      max: 200,
      step: 0.01,
      unit: 'mg',
      testid: 'emParticleM',
      onChange: (v) => { entity.m = Math.max(1e-12, v * 1e-6); },
    });
    const live = readouts(api, common);
    api.addLive(live, '速率 · Speed', 'emParticleSpeed', 'm/s');
    api.addLive(live, '比荷 q/m · q/m', 'emParticleQm', 'C/kg');
    api.addLive(live, '回旋半径 · Cyclotron radius', 'emParticleRadius', 'm');
    api.addLive(live, '轨迹点 · Trail points', 'emParticleTrail', '');
    api.formula(common, 'm\\dfrac{d\\vec{v}}{dt}=q(\\vec{E}+\\vec{v}\\times\\vec{B})');
    note(api, common, 'Boris 推进器同时处理 E 与 B；Reset 回到初始位置和速度。 · Boris pusher handles E and B; Reset restores the initial state.');
  } else if (entity.type === 'emCapacitor') {
    api.selectField(common, {
      label: '驱动方式 · Drive mode',
      value: entity.drive,
      options: [['V', '恒定电压 · Constant V'], ['Q', '恒定电荷 · Constant Q']],
      testid: 'emCapDrive',
      onChange: (v) => { entity.drive = v === 'Q' ? 'Q' : 'V'; if (entity.drive === 'Q') entity.Q = capacitorState(entity).Q; else entity.V = capacitorState(entity).V; },
    });
    if (entity.drive === 'V') {
      api.field(common, {
        label: '电压 V · Voltage',
        value: entity.V,
        min: -2000,
        max: 2000,
        step: 5,
        unit: 'V',
        testid: 'emCapV',
        onChange: (v) => { entity.V = v; },
      });
    } else {
      api.field(common, {
        label: '电荷量 Q · Charge',
        value: fromNc(entity.Q),
        min: -500,
        max: 500,
        step: 0.5,
        unit: 'nC',
        testid: 'emCapQ',
        onChange: (v) => { entity.Q = nC(v); },
      });
    }
    api.field(common, {
      label: '电介质常数 κ · Dielectric',
      value: entity.kappa,
      min: 1,
      max: 12,
      step: 0.05,
      testid: 'emCapKappa',
      onChange: (v) => { entity.kappa = Math.max(1, v); },
    });
    const live = readouts(api, common);
    api.addLive(live, '电容 C · Capacitance', 'emCapC', 'F');
    api.addLive(live, '电荷 Q · Charge', 'emCapCharge', 'C');
    api.addLive(live, '电压 V · Voltage', 'emCapVoltage', 'V');
    api.addLive(live, '储能 U · Energy', 'emCapU', 'J');
    api.addLive(live, '间隙场强 E · Gap field', 'emCapE', 'V/m');
    api.formula(common, 'C=\\dfrac{\\kappa\\varepsilon_{0}A}{d},\\qquad U=\\dfrac{Q^{2}}{2C}=\\dfrac{1}{2}CV^{2}');
    note(api, common, '理想平行板模型，忽略边缘效应；κ 可连续调节，Q 与 V 模式分别保持电荷或电压不变。 · Ideal parallel plates, edge effects neglected; Q and V modes hold charge or voltage fixed.');
  } else if (entity.type === 'emCircuit') {
    const info = el('div', { className: 'plab-em-circuit-links' });
    common.appendChild(info);
    const open = el('button', { type: 'button', className: 'plab-action hit-target', text: '打开电路图 · Open circuit sheet', 'data-action': 'open-circuit' });
    open.addEventListener('click', () => api.openCircuit?.(entity));
    common.appendChild(open);
    const live = readouts(api, common);
    api.addLive(live, '电池电流 · Battery current', 'emCircuitI', 'A');
    api.addLive(live, '电容电压 · Capacitor V', 'emCircuitVC', 'V');
    api.addLive(live, '电感电压 · Inductor V', 'emCircuitVL', 'V');
    api.addLive(live, '时间常数 · τ', 'emCircuitTau', 's');
    api.formula(common, '\\tau_{RC}=RC,\\qquad \\tau_{RL}=\\dfrac{L}{R},\\qquad \\omega_{LC}=\\dfrac{1}{\\sqrt{LC}}');
    note(api, common, '拖动元件、点击两个端点自动接线；自动串联可快速建立 RC / RL / LC 回路。 · Drag parts and click two terminals to wire; Auto-series builds RC/RL/LC loops quickly.');
  } else if (entity.type === 'emMagneticWire') {
    api.field(common, {
      label: '电流 I · Current',
      value: entity.current,
      min: -50,
      max: 50,
      step: 0.1,
      unit: 'A',
      testid: 'emWireCurrent',
      onChange: (v) => { entity.current = v; },
    });
    const live = readouts(api, common);
    api.addLive(live, 'B @ 1 m · Field', 'emWireB', 'T');
    api.formula(common, 'B=\\dfrac{\\mu_{0}I}{2\\pi r}');
  } else if (entity.type === 'emCurrentLoop') {
    api.field(common, {
      label: '电流 I · Current',
      value: entity.current,
      min: -50,
      max: 50,
      step: 0.1,
      unit: 'A',
      testid: 'emLoopCurrent',
      onChange: (v) => { entity.current = v; },
    });
    api.field(common, {
      label: '半径 R · Radius',
      value: entity.radius,
      min: 0.1,
      max: 4,
      step: 0.05,
      unit: 'm',
      testid: 'emLoopRadius',
      onChange: (v) => { entity.radius = Math.max(0.05, v); },
    });
    const live = readouts(api, common);
    api.addLive(live, '中心 B · Centre field', 'emLoopB', 'T');
    api.formula(common, 'B_{\\text{centre}}=\\dfrac{\\mu_{0}I}{2R}');
  } else if (entity.type === 'emSolenoid') {
    api.field(common, {
      label: '电流 I · Current',
      value: entity.current,
      min: -50,
      max: 50,
      step: 0.1,
      unit: 'A',
      testid: 'emSolCurrent',
      onChange: (v) => { entity.current = v; },
    });
    api.field(common, {
      label: '匝数 N · Turns',
      value: entity.turns,
      min: 4,
      max: 800,
      step: 1,
      testid: 'emSolTurns',
      onChange: (v) => { entity.turns = Math.max(1, Math.round(v)); entity.n = entity.turns / entity.length; },
    });
    const live = readouts(api, common);
    api.addLive(live, '内部 B · Interior B', 'emSolB', 'T');
    api.addLive(live, '匝密度 n · Turns/m', 'emSolN', '1/m');
    api.formula(common, 'B\\approx\\mu_{0}nI,\\qquad n=\\dfrac{N}{L}');
    note(api, common, '长螺线管内部近似，端部效应忽略。 · Ideal long-solenoid interior; end effects neglected.');
  } else if (entity.type === 'emUniform') {
    api.field(common, {
      label: '磁感应强度 By · B field',
      value: entity.By * 1000,
      min: -2000,
      max: 2000,
      step: 5,
      unit: 'mT',
      testid: 'emUniformB',
      onChange: (v) => { entity.By = mT(v); },
    });
    api.field(common, {
      label: '电场 Ex · E field',
      value: entity.Ex,
      min: -5000,
      max: 5000,
      step: 10,
      unit: 'V/m',
      testid: 'emUniformE',
      onChange: (v) => { entity.Ex = v; },
    });
    const live = readouts(api, common);
    api.addLive(live, '|B| · Field magnitude', 'emUniformBmag', 'T');
    api.addLive(live, '|E| · Field magnitude', 'emUniformEmag', 'V/m');
    api.formula(common, '\\vec{F}=q\\vec{E}+q\\vec{v}\\times\\vec{B}');
  } else if (entity.type === 'emForceWire') {
    api.field(common, {
      label: '电流 I · Current',
      value: entity.current,
      min: -50,
      max: 50,
      step: 0.1,
      unit: 'A',
      testid: 'emForceCurrent',
      onChange: (v) => { entity.current = v; },
    });
    api.field(common, {
      label: '长度 L · Length',
      value: entity.length,
      min: 0.1,
      max: 8,
      step: 0.05,
      unit: 'm',
      testid: 'emForceLength',
      onChange: (v) => { entity.length = Math.max(0.05, v); },
    });
    const live = readouts(api, common);
    api.addLive(live, '磁力 |F| · Magnetic force', 'emForceMag', 'N');
    api.addLive(live, '方向 · Direction', 'emForceDir', '');
    api.formula(common, '\\vec{F}=I\\vec{L}\\times\\vec{B}');
  } else if (entity.type === 'emRail') {
    api.field(common, {
      label: '磁感应强度 B · Field',
      value: entity.B,
      min: 0,
      max: 3,
      step: 0.01,
      unit: 'T',
      testid: 'emRailB',
      onChange: (v) => { entity.B = Math.max(0, v); },
    });
    api.field(common, {
      label: '电阻 R · Resistance',
      value: entity.R,
      min: 0.01,
      max: 100,
      step: 0.01,
      unit: 'Ω',
      testid: 'emRailR',
      onChange: (v) => { entity.R = Math.max(1e-4, v); },
    });
    api.selectField(common, {
      label: '驱动方式 · Drive',
      value: entity.drive || 'force',
      options: [['force', '外力 F · Applied force'], ['gravity', '重力 mg · Gravity']],
      testid: 'emRailDriveMode',
      onChange: (v) => { entity.drive = v === 'gravity' ? 'gravity' : 'force'; },
    });
    api.field(common, {
      label: '外力 F · Applied force',
      value: entity.F,
      min: -10,
      max: 10,
      step: 0.01,
      unit: 'N',
      testid: 'emRailF',
      hint: '重力驱动时取 F=mg，此值不参与计算。 · In gravity drive F=mg; this value is ignored.',
      onChange: (v) => { entity.F = v; },
    });
    const live = readouts(api, common);
    api.addLive(live, '速度 v · Speed', 'emRailV', 'm/s');
    api.addLive(live, '感应电动势 ε · emf', 'emRailEmf', 'V');
    api.addLive(live, '感应电流 I · Current', 'emRailI', 'A');
    api.addLive(live, '磁力 F_B · Magnetic force', 'emRailForce', 'N');
    api.addLive(live, '驱动力 F · Drive force', 'emRailDrive', 'N');
    api.addLive(live, '终端速度 v_t · Terminal speed', 'emRailVt', 'm/s');
    api.formula(common, '\\varepsilon=B\\ell v,\\qquad I=\\dfrac{\\varepsilon}{R},\\qquad F_{B}=-\\dfrac{B^{2}\\ell^{2}v}{R}');
    note(api, common, '水平导轨；楞次定律 · Lenz’s law 使磁力总是阻碍相对运动。 · Horizontal rails; the magnetic force always opposes motion.');
  } else if (entity.type === 'emInductionCoil') {
    api.field(common, {
      label: '磁感应强度 B₀ · Field',
      value: entity.B0,
      min: -2,
      max: 2,
      step: 0.01,
      unit: 'T',
      testid: 'emCoilB',
      onChange: (v) => { entity.B0 = v; },
    });
    api.field(common, {
      label: '速度 vx · Speed',
      value: entity.vx,
      min: -10,
      max: 10,
      step: 0.05,
      unit: 'm/s',
      testid: 'emCoilV',
      onChange: (v) => { entity.vx = v; },
    });
    const live = readouts(api, common);
    api.addLive(live, '磁通量 Φ · Flux', 'emCoilFlux', 'Wb');
    api.addLive(live, '感应电动势 ε · emf', 'emCoilEmf', 'V');
    api.addLive(live, '感应电流 I · Current', 'emCoilI', 'A');
    api.formula(common, '\\varepsilon=-N\\dfrac{d\\Phi_{B}}{dt}');
    note(api, common, '线圈穿过磁场区；ε 的符号遵循“正电流产生 +y 磁通”的约定，负号即楞次定律。 · Coil through a field region; sign convention: positive current makes +y flux, so the minus sign is Lenz’s law.');
  }

  api.afterCommon(entity);
}

export function buildEMMore({ entity, world, api }) {
  const parent = api.parent;
  if (entity.type === 'emSphere') {
    api.field(parent, {
      label: '半径 R · Radius',
      value: entity.R, min: 0.05, max: 4, step: 0.01, unit: 'm', testid: 'emSphereRMore',
      onChange: (v) => { entity.R = Math.max(0.05, v); },
    });
    api.selectField(parent, {
      label: '电荷分布 · Distribution', value: entity.distribution,
      options: [['surface', '均匀面电荷 · Surface'], ['volume', '均匀体电荷 · Volume']],
      testid: 'emSphereDistMore', onChange: (v) => { entity.distribution = v; },
    });
    api.formula(parent, 'V_{\\text{in}}=\\dfrac{kq(3R^{2}-r^{2})}{2R^{3}}\\quad(\\text{volume})');
  } else if (entity.type === 'emLine') {
    api.selectField(parent, {
      label: '轴向 · Axis', value: entity.axis,
      options: [['x', 'x 轴 · x'], ['y', 'y 轴 · y'], ['z', 'z 轴 · z']],
      testid: 'emLineAxisMore', onChange: (v) => { entity.axis = v; },
    });
    api.formula(parent, 'E_{\\perp}=\\dfrac{k\\lambda}{r}\\left(\\dfrac{\\dfrac{L}{2}}{\\sqrt{r^{2}+(\\dfrac{L}{2})^{2}}}\\right)\\times 2');
  } else if (entity.type === 'emPlane') {
    api.field(parent, {
      label: '高度 · Height', value: entity.height, min: 0.2, max: 40, step: 0.1, unit: 'm', testid: 'emPlaneHeightMore',
      onChange: (v) => { entity.height = Math.max(0.2, v); entity.sigma = entity.q / (entity.width * entity.height); },
    });
    api.selectField(parent, {
      label: '法向 · Normal axis', value: entity.axis,
      options: [['x', 'x 轴 · x'], ['y', 'y 轴 · y'], ['z', 'z 轴 · z']],
      testid: 'emPlaneAxisMore', onChange: (v) => { entity.axis = v; },
    });
    api.formula(parent, 'E_{\\text{finite}}=\\dfrac{\\sigma}{\\pi\\varepsilon_{0}}\\tan^{-1}\\!\\left(\\dfrac{ab}{z\\sqrt{a^{2}+b^{2}+z^{2}}}\\right)');
  } else if (entity.type === 'emParticle') {
    for (const [key, labelText] of [['vx', '初速度 vx · Initial vx'], ['vy', '初速度 vy · Initial vy'], ['vz', '初速度 vz · Initial vz']]) {
      api.field(parent, {
        label: `${labelText} (m/s)`,
        value: entity[key], min: -50, max: 50, step: 0.1, testid: `emParticle${key}`,
        onChange: (v) => { entity[key] = v; },
      });
    }
    api.formula(parent, 'r=\\dfrac{mv_{\\perp}}{|q|B},\\qquad T=\\dfrac{2\\pi m}{|q|B},\\qquad p=v_{\\parallel}T');
  } else if (entity.type === 'emCapacitor') {
    api.field(parent, {
      label: '极板面积 A · Plate area', value: entity.area, min: 0.01, max: 10, step: 0.01, unit: 'm²', testid: 'emCapAreaMore',
      onChange: (v) => { entity.area = Math.max(1e-4, v); },
    });
    api.field(parent, {
      label: '板间距 d · Gap', value: entity.d, min: 0.001, max: 0.5, step: 0.001, unit: 'm', testid: 'emCapDMore',
      onChange: (v) => { entity.d = Math.max(1e-4, v); },
    });
    api.selectField(parent, {
      label: '极板法向 · Plate normal', value: entity.axis,
      options: [['x', 'x 轴 · x'], ['y', 'y 轴 · y'], ['z', 'z 轴 · z']],
      testid: 'emCapAxisMore', onChange: (v) => { entity.axis = v; },
    });
    api.formula(parent, 'E=\\dfrac{V}{d}=\\dfrac{Q}{\\kappa\\varepsilon_{0}A},\\qquad U=\\dfrac{1}{2}\\kappa\\varepsilon_{0}E^{2}Ad');
  } else if (entity.type === 'emMagneticWire') {
    api.field(parent, {
      label: '长度 · Length', value: entity.length, min: 0.2, max: 40, step: 0.1, unit: 'm', testid: 'emWireLengthMore',
      onChange: (v) => { entity.length = Math.max(0.1, v); },
    });
    api.formula(parent, '\\oint \\vec{B}\\cdot d\\vec{l}=\\mu_{0}I');
  } else if (entity.type === 'emCurrentLoop') {
    api.formula(parent, 'B_{\\text{axis}}=\\dfrac{\\mu_{0}IR^{2}}{2(R^{2}+z^{2})^{\\frac{3}{2}}}');
  } else if (entity.type === 'emSolenoid') {
    api.field(parent, {
      label: '长度 L · Length', value: entity.length, min: 0.2, max: 10, step: 0.05, unit: 'm', testid: 'emSolLengthMore',
      onChange: (v) => { entity.length = Math.max(0.1, v); entity.n = entity.turns / entity.length; },
    });
    api.field(parent, {
      label: '半径 R · Radius', value: entity.radius, min: 0.05, max: 2, step: 0.01, unit: 'm', testid: 'emSolRadiusMore',
      onChange: (v) => { entity.radius = Math.max(0.03, v); },
    });
    api.formula(parent, 'B_{\\text{end}}\\approx\\dfrac{1}{2}\\mu_{0}nI');
  } else if (entity.type === 'emUniform') {
    for (const [key, labelText, scale] of [
      ['Bx', 'Bx', 1000], ['By', 'By', 1000], ['Bz', 'Bz', 1000],
    ]) {
      api.field(parent, {
        label: `${labelText} (mT)`, value: entity[key] * scale, min: -2000, max: 2000, step: 5, testid: `emUniform${key}More`,
        onChange: (v) => { entity[key] = v / scale; },
      });
    }
    for (const key of ['Ex', 'Ey', 'Ez']) {
      api.field(parent, {
        label: `${key} (V/m)`, value: entity[key], min: -5000, max: 5000, step: 10, testid: `emUniform${key}More`,
        onChange: (v) => { entity[key] = v; },
      });
    }
    api.field(parent, {
      label: '区域尺寸 · Region size', value: entity.size === Infinity ? 12 : entity.size,
      min: 1, max: 20, step: 0.5, unit: 'm', testid: 'emUniformSizeMore',
      onChange: (v) => { entity.size = v; },
    });
    api.formula(parent, '\\Phi_{B}=\\int\\vec{B}\\cdot d\\vec{A}');
  } else if (entity.type === 'emForceWire') {
    for (const key of ['dirx', 'diry', 'dirz']) {
      api.field(parent, {
        label: `方向 ${key} · direction ${key}`, value: entity[key], min: -1, max: 1, step: 0.05, testid: `emForce${key}More`,
        onChange: (v) => { entity[key] = v; },
      });
    }
    api.formula(parent, 'd\\vec{F}=I\\,d\\vec{l}\\times\\vec{B}');
  } else if (entity.type === 'emRail') {
    api.field(parent, {
      label: '导轨间距 ℓ · Rail spacing', value: entity.ell, min: 0.1, max: 4, step: 0.05, unit: 'm', testid: 'emRailEllMore',
      onChange: (v) => { entity.ell = Math.max(0.05, v); },
    });
    api.field(parent, {
      label: '棒质量 m · Rod mass', value: entity.mass, min: 0.001, max: 10, step: 0.01, unit: 'kg', testid: 'emRailMassMore',
      onChange: (v) => { entity.mass = Math.max(1e-4, v); },
    });
    api.field(parent, {
      label: '导轨长度 · Rail length', value: entity.length, min: 1, max: 30, step: 0.5, unit: 'm', testid: 'emRailLengthMore',
      onChange: (v) => { entity.length = Math.max(0.4, v); },
    });
    api.formula(parent, 'v_{\\text{terminal}}=\\dfrac{FR}{B^{2}\\ell^{2}}');
    note(api, parent, '靠重力下滑时取 F=mg，得 · When sliding under gravity, take F=mg, giving');
    api.formula(parent, 'v_{t}=\\dfrac{mgR}{B^{2}\\ell^{2}}');
  } else if (entity.type === 'emInductionCoil') {
    api.field(parent, {
      label: '匝数 N · Turns', value: entity.turns, min: 1, max: 500, step: 1, testid: 'emCoilTurnsMore',
      onChange: (v) => { entity.turns = Math.max(1, Math.round(v)); },
    });
    api.field(parent, {
      label: '电阻 R · Resistance', value: entity.R, min: 0.01, max: 100, step: 0.01, unit: 'Ω', testid: 'emCoilRMore',
      onChange: (v) => { entity.R = Math.max(1e-4, v); },
    });
    api.field(parent, {
      label: '磁场变化率 dB/dt · Ramp', value: entity.Bdot, min: -50, max: 50, step: 0.1, unit: 'T/s', testid: 'emCoilBdotMore',
      onChange: (v) => { entity.Bdot = v; },
    });
    api.field(parent, {
      label: '线圈宽度 · Width', value: entity.width, min: 0.1, max: 5, step: 0.05, unit: 'm', testid: 'emCoilWidthMore',
      onChange: (v) => { entity.width = Math.max(0.05, v); },
    });
    api.field(parent, {
      label: '磁场区左边界 · Region min', value: entity.regionMin, min: -8, max: 8, step: 0.1, unit: 'm', testid: 'emCoilMinMore',
      onChange: (v) => { entity.regionMin = Math.min(v, entity.regionMax - 0.1); },
    });
    api.field(parent, {
      label: '磁场区右边界 · Region max', value: entity.regionMax, min: -8, max: 8, step: 0.1, unit: 'm', testid: 'emCoilMaxMore',
      onChange: (v) => { entity.regionMax = Math.max(v, entity.regionMin + 0.1); },
    });
    api.formula(parent, '\\varepsilon=-N\\dfrac{d}{dt}\\left(BA_{\\text{overlap}}\\right)');
  } else if (entity.type === 'emCircuit') {
    api.formula(parent, '\\sum_{\\text{loop}}V=0,\\qquad \\sum_{\\text{node}}I=0');
    note(api, parent, '电路使用改进节点分析（MNA）与梯形伴随模型；打开电路图可编辑元件与导线。 · The sheet uses MNA with trapezoidal companions; open it to edit parts and wires.');
  } else if (entity.type === 'emProbe') {
    api.formula(parent, '\\vec{E}=\\sum_i\\dfrac{kq_i}{r_i^{2}}\\hat{r}_i,\\qquad V=\\sum_i\\dfrac{kq_i}{r_i}');
  }
  void EPS0;
  void MU0;
  void inductionCoilState;
}
