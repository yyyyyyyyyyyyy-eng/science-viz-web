/**
 * 物理实验室 · Physics Lab — free-exploration 3D sandbox.
 * Start empty, add apparatus from Add, build, run and measure.
 * Simple first: transport + slim inspector on the main screen, expert
 * parameters and tools in More settings.
 */
import { startAnimLoop } from '../../anim-loop.js';
import { el, clear } from '../../../js/ui-shared.js';
import {
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
  angularTableMoment,
  angularTableMomentum,
  applyInitialVelocity,
  attachBodyToPulley,
  attachBodyToHCircle,
  attachBodyToLoop,
  attachBodyToSurface,
  attachBodyToTurntable,
  bodyDiagnostics,
  captureInitial,
  carriageTilt,
  clampMuPair,
  clearWorld,
  createWorld,
  DEG,
  deserializeScene,
  detachBody,
  disposeWorld,
  dropAngularBlock,
  elevatorReading,
  energyBreakdown,
  fireLauncher,
  forceVectors,
  getBody,
  getHCircle,
  getLauncher,
  getLoop,
  getSurface,
  getTurntable,
  launcherPrediction,
  linkReading,
  loopPoint,
  orbitArealVelocity,
  orbitEscapeSpeed,
  orbitKeplerPeriod,
  orbitSemiMajor,
  oscillatorAnalyticAmplitude,
  oscillatorDampedOmega,
  oscillatorDampingRatio,
  oscillatorEnvelope,
  oscillatorRegime,
  pendulumPeriod,
  rebuildWedge,
  relativeVelocity,
  repositionSurfaceBody,
  resetPendulum,
  resetWorld,
  rodInertia,
  serializeScene,
  setBarrierRestitution,
  setBarrierSize,
  setBodyCollisionRestitution,
  setBodyMass,
  setBlockSize,
  setCartInertia,
  setCartRadius,
  setHCircleRadius,
  setInertiaRatio,
  setLoopRadius,
  setSurfaceAngle,
  setSurfaceLength,
  setSurfaceWidth,
  setTurntableDrive,
  setTurntableRadius,
  setWedgeBlockFriction,
  setWedgeFloorFriction,
  setWedgeMass,
  snapBodyToNearest,
  snapNearbyBodies,
  stepOnce,
  stepWorld,
  torsionPeriod,
  tunnelPeriod,
} from './physics.mjs';
import { createLabView } from './view.js';

const STYLE_ID = 'plab-style';
const STYLE_HREF = 'modules/physics/lab/lab.css';

function ensureStyle() {
  if (document.getElementById(STYLE_ID)) return;
  const link = document.createElement('link');
  link.id = STYLE_ID;
  link.rel = 'stylesheet';
  link.href = STYLE_HREF;
  document.head.appendChild(link);
}

const ZH_EN = {
  surface: ['表面', 'Surface'],
  incline: ['斜面', 'Incline'],
  track: ['直线轨道', 'Straight track'],
  block: ['方块', 'Block'],
  cart: ['小车', 'Cart'],
  loop: ['竖直圆环', 'Vertical loop'],
  turntable: ['转盘', 'Turntable'],
  hcircle: ['水平圆周轨道', 'Horizontal circle'],
  spring: ['线性弹簧', 'Linear spring'],
  meter: ['测力计', 'Force meter'],
  launcher: ['抛射发射器', 'Projectile launcher'],
  projectile: ['抛射体', 'Projectile'],
  pulley: ['滑轮与绳', 'Pulley & rope'],
  wall: ['挡板', 'Wall'],
  bumper: ['碰撞缓冲器', 'Collision bumper'],
  ball: ['球体', 'Ball'],
  cylinder: ['圆柱', 'Cylinder'],
  pendulum: ['单摆', 'Pendulum'],
  wedge: ['可动楔', 'Movable wedge'],
  photogate: ['光电门', 'Photogate'],
  motion: ['运动传感器', 'Motion sensor'],
  fan: ['风扇附件', 'Fan attachment'],
  oscillator: ['阻尼与受迫振动', 'Damped & driven oscillation'],
  torsion: ['扭摆', 'Torsion pendulum'],
  elevator: ['升降机', 'Elevator'],
  carriage: ['加速车厢', 'Accelerating carriage'],
  angularTable: ['角动量转盘', 'Angular momentum turntable'],
  rod: ['杆受力矩', 'Rod under torque'],
  orbit: ['引力与轨道', 'Gravity & orbits'],
  tunnel: ['穿球隧道', 'Sphere tunnel'],
};

function label(zh, en) {
  return { zh, en };
}

function labelText(zh, en, sep = ' · ') {
  return `${zh}${sep}${en}`;
}

function fmt(value) {
  if (!Number.isFinite(value)) return '—';
  const a = Math.abs(value);
  if (a >= 1e5 || (a > 0 && a < 1e-3)) return value.toExponential(2);
  return Number(value.toPrecision(3)).toString();
}

function fmtInput(value) {
  if (!Number.isFinite(value)) return '';
  return Number(value.toPrecision(7)).toString();
}

function kindLabel(entity) {
  if (entity.type === 'body') return ZH_EN[entity.kind] || ZH_EN.block;
  if (entity.type === 'surface') return ZH_EN[entity.kind === 'track' ? 'track' : entity.kind === 'surface' ? 'surface' : 'incline'];
  if (entity.type === 'link') return entity.meter ? ZH_EN.meter : ZH_EN.spring;
  if (entity.type === 'loop') return ZH_EN.loop;
  if (entity.type === 'turntable') return ZH_EN.turntable;
  if (entity.type === 'hcircle') return ZH_EN.hcircle;
  if (entity.type === 'launcher') return ZH_EN.launcher;
  if (entity.type === 'pulley') return ZH_EN.pulley;
  if (entity.type === 'barrier') return ZH_EN[entity.kind] || ZH_EN.wall;
  if (entity.type === 'pendulum') return ZH_EN.pendulum;
  if (entity.type === 'wedge') return ZH_EN.wedge;
  if (entity.type === 'sensor') return ZH_EN[entity.kind] || ZH_EN.photogate;
  if (entity.type === 'fan') return ZH_EN.fan;
  if (entity.type === 'oscillator') return ZH_EN.oscillator;
  if (entity.type === 'torsion') return ZH_EN.torsion;
  if (entity.type === 'elevator') return ZH_EN.elevator;
  if (entity.type === 'carriage') return ZH_EN.carriage;
  if (entity.type === 'angularTable') return ZH_EN.angularTable;
  if (entity.type === 'rod') return ZH_EN.rod;
  if (entity.type === 'orbit') return ZH_EN.orbit;
  if (entity.type === 'tunnel') return ZH_EN.tunnel;
  return ['物体', 'Object'];
}

function contactLabel(type) {
  if (type === 'incline') return labelText('斜面', 'Incline');
  if (type === 'surface') return labelText('水平面', 'Surface');
  if (type === 'track') return labelText('轨道', 'Track');
  if (type === 'loop') return labelText('竖直圆环', 'Loop');
  if (type === 'turntable') return labelText('转盘', 'Turntable');
  if (type === 'hcircle') return labelText('水平圆周', 'Circle');
  return labelText('自由', 'Free');
}

function zAngle(q) {
  return Math.atan2(2 * (q.w * q.z + q.x * q.y), 1 - 2 * (q.y * q.y + q.z * q.z));
}

function renderTex(host, tex) {
  if (window.katex && typeof window.katex.render === 'function') {
    try {
      window.katex.render(tex, host, { throwOnError: false, displayMode: false, strict: false });
      return;
    } catch (_) { /* fall through */ }
  }
  host.textContent = '';
}

export function renderLab(main, { isCurrent = () => true } = {}) {
  ensureStyle();
  clear(main);

  const root = el('div', { className: 'plab-root' });
  main.appendChild(root);

  const head = el('header', { className: 'plab-head' });
  const title = el('div', { className: 'plab-title' }, [
    el('p', { className: 'plab-kicker', text: '物理 · Physics' }),
    el('h1', {}, [
      el('span', { text: '物理实验室' }),
      el('span', { className: 'plab-title-sep', text: ' · ' }),
      el('span', { className: 'plab-title-en', text: 'Physics Lab' }),
    ]),
    el('p', { className: 'plab-sub', text: '自由探索 · Free exploration' }),
  ]);

  const primary = el('div', { className: 'plab-primary', role: 'toolbar', 'aria-label': '实验室操作 · Lab controls' });
  const playBtn = el('button', {
    type: 'button',
    className: 'plab-action plab-action-primary hit-target',
    text: '播放 · Play',
    'data-action': 'play',
    'aria-pressed': 'false',
  });
  const resetBtn = el('button', {
    type: 'button',
    className: 'plab-action hit-target',
    text: '重置 · Reset',
    'data-action': 'reset',
  });
  const addBtn = el('button', {
    type: 'button',
    className: 'plab-action plab-action-add hit-target',
    text: '添加器材 · Add',
    'data-action': 'add',
    'aria-haspopup': 'menu',
    'aria-expanded': 'false',
  });
  const undoBtn = el('button', { type: 'button', className: 'plab-action hit-target', text: '撤销 · Undo', 'data-action': 'undo' });
  const redoBtn = el('button', { type: 'button', className: 'plab-action hit-target', text: '重做 · Redo', 'data-action': 'redo' });
  const moreBtn = el('button', {
    type: 'button',
    className: 'plab-action plab-action-more hit-target',
    text: '更多设置 · More settings',
    'data-action': 'more',
    'aria-haspopup': 'dialog',
    'aria-expanded': 'false',
  });
  const clock = el('span', { className: 'plab-clock', text: 't = 0 s', 'data-readout': 'time' });

  const paletteGroups = [
    {
      title: label('表面与轨道', 'Surfaces & tracks'),
      items: [
        ['incline', '斜面', 'Incline'],
        ['surface', '水平面 / 倾斜面', 'Horizontal surface'],
        ['track', '直线轨道', 'Straight track'],
        ['wedge', '可动楔', 'Movable wedge'],
      ],
    },
    {
      title: label('物体', 'Bodies'),
      items: [
        ['block', '方块', 'Block'],
        ['cart', '小车', 'Cart'],
        ['ball', '球体', 'Ball'],
        ['cylinder', '圆柱', 'Cylinder'],
      ],
    },
    {
      title: label('发射与碰撞', 'Launch & collisions'),
      items: [
        ['launcher', '抛射发射器', 'Projectile launcher'],
        ['wall', '挡板', 'Wall'],
        ['bumper', '碰撞缓冲器', 'Bumper'],
        ['fan', '风扇小车', 'Fan cart'],
      ],
    },
    {
      title: label('连接与测量', 'Links & meters'),
      items: [
        ['spring', '线性弹簧', 'Linear spring'],
        ['nonlinear', '非线性弹簧', 'Nonlinear spring'],
        ['meter', '测力计', 'Force meter'],
        ['pulley', '滑轮与绳', 'Pulley & rope'],
        ['photogate', '光电门', 'Photogate'],
        ['motion', '运动传感器', 'Motion sensor'],
      ],
    },
    {
      title: label('旋转与圆周', 'Rotation & circles'),
      items: [
        ['turntable', '转盘', 'Turntable'],
        ['loop', '竖直圆环', 'Vertical loop'],
        ['hcircle', '水平圆周轨道', 'Horizontal circle'],
        ['pendulum', '单摆', 'Pendulum'],
      ],
    },
    {
      title: label('振动与角动量', 'Oscillation & angular momentum'),
      items: [
        ['oscillator', '阻尼与受迫振动', 'Damped & driven'],
        ['torsion', '扭摆', 'Torsion pendulum'],
      ],
    },
  ];

  const addMenu = el('div', {
    className: 'plab-addmenu',
    role: 'menu',
    'aria-label': '添加器材 · Add apparatus',
    hidden: true,
    'data-add-menu': 'on',
  });
  addMenu.appendChild(el('div', { className: 'plab-addmenu-head' }, [
    el('h2', { className: 'plab-panel-title', text: '添加器材 · Add apparatus' }),
    el('p', { className: 'plab-addmenu-sub', text: '放在镜头前方，自动避让已有装置。 · Placed in front of the camera, clear of existing apparatus.' }),
  ]));
  for (const group of paletteGroups) {
    addMenu.appendChild(el('h3', { className: 'plab-group-title', text: labelText(group.title.zh, group.title.en) }));
    const grid = el('div', { className: 'plab-add-grid' });
    for (const [key, zh, en] of group.items) {
      grid.appendChild(el('button', {
        type: 'button',
        className: 'plab-add hit-target',
        'data-add': key,
        role: 'menuitem',
      }, [
        el('span', { className: 'plab-add-zh', text: zh }),
        el('span', { className: 'plab-add-en', text: en }),
      ]));
    }
    addMenu.appendChild(grid);
  }
  const addWrap = el('div', { className: 'plab-add-wrap' }, [addBtn, addMenu]);

  primary.append(playBtn, resetBtn, addWrap, undoBtn, redoBtn, moreBtn, clock);

  const headActions = el('div', { className: 'plab-head-actions' }, [primary]);
  head.append(title, headActions);

  const bodyGrid = el('div', { className: 'plab-body' });
  const stage = el('section', { className: 'plab-stage', 'aria-label': '三维场景 · 3D scene' });
  const canvasHost = el('div', { className: 'plab-canvas-host', 'data-canvas-host': 'on' });
  const emptyHint = el('div', { className: 'plab-empty', 'data-empty': 'on' }, [
    el('p', { className: 'plab-empty-title', text: '自由实验室 · Free lab' }),
    el('p', { className: 'plab-empty-text', text: '从上方「添加器材」开始，自己搭建场景。 · Start with Add above and build your own scene.' }),
    el('p', { className: 'plab-empty-sub', text: '拖动旋转视角，滚轮缩放，右键或双指平移，双击聚焦。 · Drag to orbit, scroll to zoom, right-drag or two-finger pan, double-click to focus.' }),
  ]);
  canvasHost.appendChild(emptyHint);

  const status = el('p', { className: 'plab-status', 'data-status': 'on', role: 'status', 'aria-live': 'polite' });
  status.textContent = '自由实验室：添加器材开始搭建。 · Free lab: add apparatus to begin.';
  const hintLine = el('p', {
    className: 'plab-hintline',
    text: '拖动自动吸附 · Drag to auto-snap · 按住 Shift 暂停吸附 · Hold Shift to disable',
  });
  const canvasHud = el('div', { className: 'plab-canvas-hud' }, [status, hintLine]);

  const legend = el('div', { className: 'plab-legend', 'aria-label': '力矢量图例 · Force vector legend' });
  [
    ['weight', '重力 · Weight'],
    ['normal', '支持力 · Normal'],
    ['friction', '摩擦 · Friction'],
    ['spring', '弹簧 · Spring'],
    ['applied', '外力 · Applied'],
  ].forEach(([key, text]) => {
    legend.appendChild(el('span', { className: `plab-legend-item ${key}` }, [
      el('span', { className: 'plab-swatch', 'aria-hidden': 'true' }),
      el('span', { text }),
    ]));
  });

  const energy = el('div', { className: 'plab-energy', 'aria-label': '能量 · Energy' });
  energy.appendChild(el('div', { className: 'plab-energy-head', text: '能量 · Energy' }));
  const energyGrid = el('div', { className: 'plab-energy-grid' });
  const energyRows = [
    ['translational', '动能（平动） · KE transl.'],
    ['rotational', '动能（转动） · KE rot.'],
    ['gravitational', '重力势能 · Gravitational'],
    ['elastic', '弹性势能 · Elastic'],
    ['thermal', '摩擦热 · Thermal'],
    ['mechanical', '机械能 · Mechanical'],
    ['appliedWork', '外力功 · Applied work'],
    ['total', '总能量 · Total'],
  ];
  for (const [key, text] of energyRows) {
    energyGrid.appendChild(el('div', { className: 'plab-energy-row' }, [
      el('span', { className: 'plab-energy-label', text }),
      el('strong', { className: 'plab-energy-value', text: '0 J', 'data-energy': key }),
    ]));
  }
  energy.appendChild(energyGrid);
  energy.appendChild(el('p', {
    className: 'plab-energy-note',
    text: '总能量 = 机械能 + 摩擦热；外力与驱动功单独列出。 · Total = mechanical + thermal; applied and drive work are listed separately.',
  }));

  const graphSection = el('section', { className: 'plab-graphs', 'aria-label': '实时曲线 · Live graphs', hidden: true });
  const graphLegend = el('div', { className: 'plab-graph-legend' });
  for (const text of ['位置 x · Position', '速率 v · Speed', '加速度 a · Accel', '能量 E · Energy']) {
    graphLegend.appendChild(el('span', { text }));
  }
  const graphCanvas = el('canvas', { className: 'plab-graph-canvas', 'aria-label': '实时曲线 · Live graphs' });
  graphSection.append(graphLegend, graphCanvas);

  const modalHud = el('div', { className: 'plab-modal', hidden: true, role: 'status', 'aria-live': 'polite' });
  canvasHost.append(modalHud, canvasHud);

  const scrub = el('label', { className: 'plab-scrub' }, [
    el('span', { className: 'plab-scrub-label', text: '时间回拖 · Time scrub' }),
    el('input', {
      type: 'range',
      min: '0',
      max: '0',
      step: '1',
      value: '0',
      'data-field': 'scrub',
      'aria-label': '时间回拖 · Time scrub',
    }),
    el('output', { className: 'plab-scrub-time', text: '0.0 s', 'data-readout': 'scrub' }),
  ]);
  scrub.appendChild(el('span', { className: 'plab-scrub-hint', text: '缓冲 20 s · 20 s buffer' }));

  const timeScaleWrap = el('label', { className: 'plab-timescale hit-target' }, [
    el('span', { text: '时间倍率 · Time scale' }),
    el('input', {
      type: 'range',
      min: '0.1',
      max: '2',
      step: '0.05',
      value: '1',
      'data-field': 'timeScale',
      'aria-label': '时间倍率 · Time scale',
    }),
    el('output', { text: '×1.00', 'data-readout': 'timeScale' }),
  ]);

  const gizmoGroup = el('div', { className: 'plab-toolgroup', role: 'group', 'aria-label': '变换工具 · Transform' });
  gizmoGroup.appendChild(el('span', { className: 'plab-tool-label', text: '工具 · Gizmo' }));
  [
    ['translate', '移动 · Move'],
    ['rotate', '旋转 · Rotate'],
    ['scale', '缩放 · Scale'],
    ['off', '关闭 · Off'],
  ].forEach(([key, text]) => {
    gizmoGroup.appendChild(el('button', {
      type: 'button',
      className: `plab-tool hit-target${key === 'translate' ? ' active' : ''}`,
      text,
      'data-gizmo': key,
    }));
  });

  const viewGroup = el('div', { className: 'plab-toolgroup', role: 'group', 'aria-label': '相机 · Camera' });
  viewGroup.appendChild(el('span', { className: 'plab-tool-label', text: '视角 · View' }));
  [
    ['perspective', '透视 · Persp'],
    ['front', '前视 · Front'],
    ['side', '侧视 · Side'],
    ['top', '俯视 · Top'],
  ].forEach(([key, text]) => {
    viewGroup.appendChild(el('button', {
      type: 'button',
      className: 'plab-tool hit-target',
      text,
      'data-view': key,
    }));
  });

  const forceLabel = el('label', { className: 'plab-check hit-target' }, [
    el('input', { type: 'checkbox', checked: true, 'data-force-toggle': 'on' }),
    el('span', { text: '显示力矢量 · Show force vectors' }),
  ]);

  const dupBtn = el('button', { type: 'button', className: 'plab-action hit-target', text: '复制 · Duplicate', 'data-action': 'duplicate' });
  const frameBtn = el('button', { type: 'button', className: 'plab-action hit-target', text: '聚焦 · Frame', 'data-action': 'frame' });
  const rulerBtn = el('button', { type: 'button', className: 'plab-action hit-target', text: '尺子 · Ruler', 'data-action': 'ruler', 'aria-pressed': 'false' });
  const rulerReadout = el('output', { className: 'plab-ruler-readout', text: '尺子关闭 · Ruler off', 'data-readout': 'ruler' });
  const stepBtn = el('button', { type: 'button', className: 'plab-action hit-target', text: '单步 1/60 s · Step', 'data-action': 'step' });
  const clearBtn = el('button', { type: 'button', className: 'plab-action plab-action-quiet hit-target', text: '清空场景 · Clear scene', 'data-action': 'clear' });

  const trailToggleBtn = el('button', { type: 'button', className: 'plab-tool hit-target', text: '轨迹 · Trail', 'data-action': 'trail', 'aria-pressed': 'false' });
  const graphToggleBtn = el('button', { type: 'button', className: 'plab-tool hit-target', text: '曲线 · Graphs', 'data-action': 'graphs', 'aria-pressed': 'false' });
  const snapToggleBtn = el('button', { type: 'button', className: 'plab-tool hit-target', text: '吸附 · Snap', 'data-action': 'snap-toggle', 'aria-pressed': 'true' });
  const snapSelBtn = el('button', { type: 'button', className: 'plab-action hit-target', text: '吸附所选 · Snap selected', 'data-action': 'snap' });
  const detachBtn = el('button', { type: 'button', className: 'plab-action hit-target', text: '脱离表面 · Detach', 'data-action': 'detach' });

  const saveBtn = el('button', { type: 'button', className: 'plab-action hit-target', text: '保存场景 · Save', 'data-action': 'save' });
  const loadBtn = el('button', { type: 'button', className: 'plab-action hit-target', text: '读取场景 · Load', 'data-action': 'load' });
  const exportBtn = el('button', { type: 'button', className: 'plab-action hit-target', text: '导出 JSON · Export', 'data-action': 'export' });
  const importBtn = el('button', { type: 'button', className: 'plab-action hit-target', text: '导入 JSON · Import', 'data-action': 'import' });
  const importInput = el('input', { type: 'file', accept: '.json,application/json', hidden: true, 'data-field': 'import' });

  const environment = el('section', { className: 'plab-subpanel' });
  environment.appendChild(el('h3', { className: 'plab-group-title', text: '环境 · Environment' }));
  const gHost = el('div');
  environment.appendChild(gHost);

  const outliner = el('section', { className: 'plab-outliner', 'aria-label': '对象列表 · Outliner' });
  const outlinerHead = el('div', { className: 'plab-outliner-head' }, [
    el('h2', { className: 'plab-panel-title', text: '对象列表 · Outliner' }),
    el('span', { className: 'plab-outliner-count', text: '0', 'data-readout': 'outlinerCount' }),
  ]);
  const outlinerList = el('div', { className: 'plab-outliner-list' });
  const outlinerHint = el('p', { className: 'plab-outliner-hint', text: '空场景 · Empty scene. 双击名称可重命名。 · Double-click a name to rename.' });
  outliner.append(outlinerHead, outlinerHint, outlinerList);

  const inspector = el('section', { className: 'plab-panel plab-inspector', 'data-panel': 'inspector' });
  const inspectorHead = el('div', { className: 'plab-sheet-head' }, [
    el('h2', { className: 'plab-panel-title', text: '属性 · Inspector' }),
    el('button', {
      type: 'button',
      className: 'plab-sheet-close hit-target',
      text: '关闭 · Close',
      'data-action': 'inspector-close',
    }),
  ]);
  const inspectorBody = el('div', { className: 'plab-inspector-body' });
  inspector.append(inspectorHead, inspectorBody);

  const side = el('aside', { className: 'plab-side', 'aria-label': '属性 · Inspector' });
  side.append(inspector);

  const moreBackdrop = el('div', { className: 'plab-backdrop', hidden: true, 'data-action': 'backdrop' });
  const morePanel = el('aside', {
    className: 'plab-more',
    role: 'dialog',
    'aria-modal': 'true',
    'aria-label': '更多设置 · More settings',
    hidden: true,
  });
  const moreHead = el('div', { className: 'plab-more-head' }, [
    el('div', {}, [
      el('h2', { className: 'plab-more-title', text: '更多设置 · More settings' }),
      el('p', { className: 'plab-more-sub', text: '专业参数与工具 · Expert parameters and tools' }),
    ]),
    el('button', {
      type: 'button',
      className: 'plab-sheet-close hit-target',
      text: '关闭 · Close',
      'data-action': 'more-close',
    }),
  ]);
  const moreBody = el('div', { className: 'plab-more-body' });
  morePanel.append(moreHead, moreBody);

  function moreSection(zh, en) {
    const section = el('section', { className: 'plab-more-section' });
    section.appendChild(el('h3', { className: 'plab-group-title', text: labelText(zh, en) }));
    moreBody.appendChild(section);
    return section;
  }

  const assistSection = moreSection('辅助', 'Assists');
  const assistList = el('div', { className: 'plab-assist-list' });
  function assistToggle(zh, en, key, checked = true) {
    const input = el('input', { type: 'checkbox', checked, 'data-assist': key });
    const labelEl = el('label', { className: 'plab-check hit-target plab-assist' }, [
      input,
      el('span', {}, [
        el('span', { className: 'plab-assist-zh', text: zh }),
        el('span', { className: 'plab-assist-en', text: en }),
      ]),
    ]);
    assistList.appendChild(labelEl);
    return input;
  }
  const autoSnapToggle = assistToggle('自动吸附表面', 'Auto-snap to surfaces', 'snap');
  const autoConnectToggle = assistToggle('自动连接端点', 'Auto-connect endpoints', 'connect');
  const autoPlaceToggle = assistToggle('智能放置', 'Smart placement', 'placement');
  const directToggle = assistToggle('直接拖动', 'Direct manipulation', 'direct');
  assistSection.appendChild(assistList);
  assistSection.appendChild(el('p', {
    className: 'plab-field-hint',
    text: '吸附开启时按住 Shift 可临时关闭。 · Hold Shift during a drag to bypass snapping.',
  }));

  const snapConfig = el('div', { className: 'plab-more-grid' });
  snapConfig.appendChild(el('label', { className: 'plab-inline-field' }, [
    el('span', { text: '网格步长 · Grid step (m)' }),
    el('input', {
      type: 'number',
      min: '0.01',
      max: '2',
      step: '0.01',
      value: '0.1',
      'data-field': 'gridStep',
      'aria-label': '网格步长 · Grid step (m)',
    }),
  ]));
  snapConfig.appendChild(el('label', { className: 'plab-inline-field' }, [
    el('span', { text: '角度步长 · Angle step (°)' }),
    el('input', {
      type: 'number',
      min: '1',
      max: '45',
      step: '1',
      value: '5',
      'data-field': 'angleStep',
      'aria-label': '角度步长 · Angle step (°)',
    }),
  ]));
  assistSection.appendChild(snapConfig);

  const transformSection = moreSection('变换与视图', 'Transform & view');
  transformSection.appendChild(gizmoGroup);
  const cameraRow = el('div', { className: 'plab-tool-row' });
  cameraRow.append(frameBtn, rulerBtn, stepBtn);
  transformSection.appendChild(cameraRow);
  transformSection.appendChild(rulerReadout);
  transformSection.appendChild(viewGroup);
  transformSection.appendChild(snapToggleBtn);

  const displaySection = moreSection('显示', 'Display');
  displaySection.appendChild(forceLabel);
  const displayToggles = el('div', { className: 'plab-tool-row' });
  const energyToggleLabel = el('label', { className: 'plab-check hit-target' }, [
    el('input', { type: 'checkbox', checked: true, 'data-toggle': 'energy' }),
    el('span', { text: '能量表 · Energy table' }),
  ]);
  displayToggles.append(energyToggleLabel, trailToggleBtn, graphToggleBtn);
  displaySection.appendChild(displayToggles);
  displaySection.appendChild(legend);
  displaySection.appendChild(energy);
  displaySection.appendChild(graphSection);

  const timeSection = moreSection('时间', 'Time');
  timeSection.appendChild(timeScaleWrap);
  timeSection.appendChild(scrub);
  const stepSizeWrap = el('label', { className: 'plab-inline-field' }, [
    el('span', { text: '物理步长 · Physics step' }),
    el('select', { className: 'plab-select', 'data-field': 'stepSize', 'aria-label': '物理步长 · Physics step' }, [
      el('option', { value: '0.0041667', text: '1/240 s · 标准 · Standard' }),
      el('option', { value: '0.0020833', text: '1/480 s · 精细 · Fine' }),
      el('option', { value: '0.0083333', text: '1/120 s · 快速 · Fast' }),
    ]),
  ]);
  timeSection.appendChild(stepSizeWrap);

  const advancedSection = moreSection('所选对象', 'Selected object');
  const moreAdvanced = el('div', { className: 'plab-more-advanced' });
  advancedSection.appendChild(moreAdvanced);

  const sceneSection = moreSection('场景', 'Scene');
  const sceneRow = el('div', { className: 'plab-tool-row' });
  sceneRow.append(saveBtn, loadBtn, exportBtn, importBtn, importInput);
  sceneSection.appendChild(sceneRow);
  const editRow = el('div', { className: 'plab-tool-row' });
  editRow.append(dupBtn, snapSelBtn, detachBtn);
  sceneSection.appendChild(editRow);
  const clearRow = el('div', { className: 'plab-tool-row' });
  clearRow.append(clearBtn);
  sceneSection.appendChild(clearRow);
  sceneSection.appendChild(el('p', {
    className: 'plab-field-hint',
    text: '只保存你自己的场景 · Saves only your own scenes.',
  }));
  sceneSection.appendChild(environment);

  const outlinerSection = moreSection('对象列表', 'Outliner');
  outlinerSection.appendChild(outliner);

  bodyGrid.append(stage, side);
  root.append(head, bodyGrid, moreBackdrop, morePanel);

  snapSelBtn.addEventListener('click', () => {
    const b = selectedBody();
    if (!b) {
      setStatus('先在场景中选择一个方块或小车。 · Select a block or cart first.', true);
      return;
    }
    pushUndo();
    prepareEdit();
    const hit = snapBodyToNearest(world, b, { maxDistance: 5 });
    if (hit) {
      captureInitial(world);
      view.sync(world);
      buildInspector();
      setStatus('已吸附到最近的装置。 · Snapped to the nearest apparatus.');
    } else {
      setStatus('附近没有可吸附的表面、圆环或转盘。 · No surface, loop or turntable nearby.', true);
    }
  });
  detachBtn.addEventListener('click', () => {
    const b = selectedBody();
    if (!b) return;
    pushUndo();
    prepareEdit();
    detachBody(world, b);
    captureInitial(world);
    view.sync(world);
    buildInspector();
    setStatus('已脱离约束，物体成为自由刚体。 · Detached; the body is now free.');
  });
  stage.appendChild(canvasHost);

  if (!isCurrent()) return { destroy() {} };

  const world = createWorld({ g: 9.8, h: 1 / 240 });
  captureInitial(world);
  let running = false;
  let timeScale = 1;
  let selected = null;
  let gizmoMode = 'off';
  let pendingLink = null;
  let lastFrame = performance.now();
  let lastReadout = 0;
  const liveNodes = new Map();
  let inspectorSummary = null;
  let snapOn = true;
  let trailOn = false;
  let graphsOn = false;
  let rulerMode = false;
  let rulerFirst = null;
  let modal = null;
  let lastPointer = null;
  let undoCoalesceKey = '';
  let undoCoalesceAt = 0;
  const undoStack = [];
  const redoStack = [];
  const HISTORY_LIMIT = 200;
  let history = [];
  let scrubIndex = -1;
  const graphData = [];
  let graphBodyId = null;
  let gridStep = 0.1;
  let angleStepDeg = 5;
  let shiftHeld = false;
  const assists = { snap: true, connect: true, placement: true, direct: true };
  const mobileQuery = window.matchMedia('(max-width: 760px)');

  const view = createLabView(canvasHost, {
    getForces: (w, b) => forceVectors(w, b),
    onPick: (hit, event) => handlePick(hit, event),
    canDirectDrag: () => assists.direct && !running && !modal,
    onDirectDragStart: (entityRef) => handleDirectDragStart(entityRef),
    onDirectDrag: (entityRef, point) => handleDirectDrag(entityRef, point),
    onDirectDragEnd: (entityRef) => handleDirectDragEnd(entityRef),
    onVelocityDrag: (entityRef, point, phase) => handleVelocityDrag(entityRef, point, phase),
    onAngleDrag: (entityRef, angle, phase) => handleAngleDrag(entityRef, angle, phase),
    onDragStart: (entityRef) => {
      if (running) return;
      pushUndo('gizmo');
      const entity = entityRef ? entityById(entityRef.type, entityRef.id) : null;
      scaleSession = gizmoMode === 'scale' && entity ? { ref: entityRef, start: captureDimensions(entity) } : null;
    },
    onTransform: (entityRef, object) => handleTransform(entityRef, object),
    onDragEnd: (entityRef) => {
      scaleSession = null;
      handleDragEnd(entityRef);
    },
  });
  view.resize();
  applySnapSettings();
  root.querySelectorAll('[data-gizmo]').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.gizmo === gizmoMode);
  });

  function setStatus(text, warn = false) {
    status.textContent = text;
    status.dataset.warn = warn ? '1' : '0';
  }

  function isMobile() {
    return mobileQuery.matches;
  }

  function openAddMenu() {
    closeMore();
    addMenu.hidden = false;
    addBtn.setAttribute('aria-expanded', 'true');
    root.dataset.addOpen = '1';
    const first = addMenu.querySelector('[data-add]');
    if (first) first.focus({ preventScroll: true });
    if (isMobile()) moreBackdrop.hidden = false;
  }

  function closeAddMenu() {
    addMenu.hidden = true;
    addBtn.setAttribute('aria-expanded', 'false');
    delete root.dataset.addOpen;
    if (morePanel.hidden) moreBackdrop.hidden = true;
  }

  function openMore() {
    closeAddMenu();
    openInspector(false);
    buildMoreAdvanced();
    morePanel.hidden = false;
    moreBackdrop.hidden = false;
    root.dataset.moreOpen = '1';
    moreBtn.setAttribute('aria-expanded', 'true');
    const close = morePanel.querySelector('[data-action="more-close"]');
    if (close) close.focus({ preventScroll: true });
  }

  function closeMore() {
    const hadFocus = document.activeElement && morePanel.contains(document.activeElement);
    morePanel.hidden = true;
    moreBackdrop.hidden = true;
    delete root.dataset.moreOpen;
    moreBtn.setAttribute('aria-expanded', 'false');
    if (hadFocus) moreBtn.focus({ preventScroll: true });
  }

  function openInspector(open) {
    const next = !!open;
    if (next) closeAddMenu();
    root.dataset.inspectorOpen = next ? '1' : '0';
  }

  function closeAllPanels() {
    closeAddMenu();
    closeMore();
    openInspector(false);
  }

  function onMobileChange() {
    if (!isMobile()) {
      openInspector(false);
      closeAddMenu();
      closeMore();
    } else if (selected) {
      openInspector(true);
    }
  }
  if (mobileQuery.addEventListener) mobileQuery.addEventListener('change', onMobileChange);
  else if (mobileQuery.addListener) mobileQuery.addListener(onMobileChange);

  function onDocPointerDown(e) {
    if (!addMenu.hidden && !addWrap.contains(e.target) && !e.target.closest?.('[data-add-menu]')) {
      closeAddMenu();
    }
  }
  document.addEventListener('pointerdown', onDocPointerDown, true);

  function onBackdrop() {
    closeAddMenu();
    closeMore();
  }
  moreBackdrop.addEventListener('click', onBackdrop);

  function entityById(type, id) {
    if (type === 'body') return getBody(world, id);
    if (type === 'surface') return getSurface(world, id);
    if (type === 'loop') return getLoop(world, id);
    if (type === 'turntable') return getTurntable(world, id);
    if (type === 'hcircle') return getHCircle(world, id);
    if (type === 'launcher') return world.launchers.find((l) => l.id === id) || null;
    if (type === 'pulley') return world.pulleys.find((p) => p.id === id) || null;
    if (type === 'barrier') return world.barriers.find((b) => b.id === id) || null;
    if (type === 'pendulum') return world.pendulums.find((p) => p.id === id) || null;
    if (type === 'wedge') return world.wedges.find((w) => w.id === id) || null;
    if (type === 'sensor') return world.sensors.find((s) => s.id === id) || null;
    if (type === 'fan') return world.fans.find((f) => f.id === id) || null;
    if (type === 'oscillator') return world.oscillators.find((o) => o.id === id) || null;
    if (type === 'torsion') return world.torsionPendulums.find((p) => p.id === id) || null;
    if (type === 'elevator') return world.elevators.find((e) => e.id === id) || null;
    if (type === 'carriage') return world.carriages.find((c) => c.id === id) || null;
    if (type === 'angularTable') return world.angularTables.find((t) => t.id === id) || null;
    if (type === 'rod') return world.rods.find((r) => r.id === id) || null;
    if (type === 'orbit') return world.orbits.find((o) => o.id === id) || null;
    if (type === 'tunnel') return world.tunnels.find((t) => t.id === id) || null;
    if (type === 'link') return world.links.find((l) => l.id === id) || null;
    return null;
  }

  function select(entity) {
    const prevKey = selected ? `${selected.type}:${selected.id}` : '';
    selected = entity || null;
    if (selected) {
      view.setSelection({ type: selected.type, id: selected.id });
      if (isMobile()) openInspector(true);
    } else {
      view.setSelection(null);
      if (isMobile()) openInspector(false);
    }
    const nextKey = selected ? `${selected.type}:${selected.id}` : '';
    if (nextKey !== prevKey) resetGraphs();
    buildInspector();
    updateOutlinerSelection();
  }

  function isEmpty() {
    return world.bodies.length === 0
      && world.surfaces.length === 0
      && world.loops.length === 0
      && world.turntables.length === 0
      && world.hcircles.length === 0
      && world.launchers.length === 0
      && world.pulleys.length === 0
      && world.barriers.length === 0
      && world.pendulums.length === 0
      && world.wedges.length === 0
      && world.sensors.length === 0
      && world.fans.length === 0
      && world.oscillators.length === 0
      && world.torsionPendulums.length === 0
      && world.elevators.length === 0
      && world.carriages.length === 0
      && world.angularTables.length === 0
      && world.rods.length === 0
      && world.orbits.length === 0
      && world.tunnels.length === 0
      && world.links.length === 0;
  }

  function updateEmpty() {
    const empty = isEmpty();
    emptyHint.hidden = !empty;
    root.dataset.empty = empty ? '1' : '0';
  }

  function updateTransport() {
    playBtn.textContent = running ? '暂停 · Pause' : '播放 · Play';
    playBtn.setAttribute('aria-pressed', running ? 'true' : 'false');
    root.dataset.running = running ? '1' : '0';
    view.transform.enabled = !running && gizmoMode !== 'off';
    if (view.setGizmoVisible) view.setGizmoVisible(!running && gizmoMode !== 'off');
    view.setGizmoMode(gizmoMode);
    view.setHandleVisibility?.(!running && assists.direct);
  }

  function prepareEdit() {
    if (running) {
      running = false;
      updateTransport();
    }
    if (world.time > 0) resetWorld(world);
  }

  function nextX() {
    return 0;
  }

  const APPARATUS_EXTENT = {
    incline: { halfX: 4, halfZ: 1.2 },
    surface: { halfX: 4.5, halfZ: 1.2 },
    track: { halfX: 5, halfZ: 1.2 },
    loop: { halfX: 1.8, halfZ: 0.2 },
    turntable: { halfX: 2, halfZ: 2 },
    hcircle: { halfX: 2, halfZ: 2 },
    block: { halfX: 0.5, halfZ: 0.5 },
    cart: { halfX: 0.6, halfZ: 0.6 },
    ball: { halfX: 0.5, halfZ: 0.5 },
    cylinder: { halfX: 0.5, halfZ: 0.5 },
    launcher: { halfX: 1.1, halfZ: 0.8 },
    pulley: { halfX: 1.4, halfZ: 0.9 },
    wall: { halfX: 0.6, halfZ: 1.6 },
    bumper: { halfX: 0.7, halfZ: 0.7 },
    pendulum: { halfX: 1, halfZ: 1 },
    wedge: { halfX: 2, halfZ: 1.2 },
    photogate: { halfX: 0.4, halfZ: 1.2 },
    motion: { halfX: 0.5, halfZ: 0.5 },
    fan: { halfX: 0.8, halfZ: 0.8 },
    oscillator: { halfX: 1.9, halfZ: 0.6 },
    torsion: { halfX: 1, halfZ: 1 },
    elevator: { halfX: 1.1, halfZ: 1.1 },
    carriage: { halfX: 1.1, halfZ: 0.6 },
    angtable: { halfX: 1.8, halfZ: 1.8 },
    rod: { halfX: 1.3, halfZ: 0.5 },
    orbit: { halfX: 3, halfZ: 3 },
    tunnel: { halfX: 2.6, halfZ: 2.6 },
  };

  function apparatusBoxes() {
    const boxes = [];
    for (const s of world.surfaces) {
      const a = (s.angle || 0) * DEG;
      const halfX = Math.abs((s.length / 2) * Math.cos(a)) + Math.abs((s.thickness / 2) * Math.sin(a));
      boxes.push({ x: s.body.position.x, z: s.body.position.z, halfX, halfZ: s.width / 2 });
    }
    for (const l of world.loops) boxes.push({ x: l.x, z: l.z, halfX: l.radius, halfZ: 0.2 });
    for (const t of world.turntables) boxes.push({ x: t.x, z: t.z, halfX: t.radius, halfZ: t.radius });
    for (const c of world.hcircles) boxes.push({ x: c.x, z: c.z, halfX: c.radius, halfZ: c.radius });
    for (const l of world.launchers) boxes.push({ x: l.x, z: l.z, halfX: 1.1, halfZ: 0.8 });
    for (const p of world.pulleys) boxes.push({ x: p.x, z: p.z, halfX: p.radius + 0.8, halfZ: p.radius + 0.8 });
    for (const b of world.barriers) boxes.push({ x: b.x, z: b.z, halfX: (b.width || 0.7) / 2, halfZ: (b.width || 0.7) / 2 });
    for (const p of world.pendulums) boxes.push({ x: p.x, z: p.z, halfX: 0.8, halfZ: 0.8 });
    for (const w of world.wedges) boxes.push({ x: w.body.position.x, z: w.body.position.z, halfX: w.length / 2, halfZ: w.width / 2 });
    for (const s of world.sensors) boxes.push({ x: s.x, z: s.z, halfX: Math.max(0.4, s.width / 2), halfZ: 0.4 });
    for (const f of world.fans) {
      const owner = f.bodyId ? world.bodies.find((b) => b.id === f.bodyId) : null;
      if (owner) boxes.push({ x: owner.cannon.position.x, z: owner.cannon.position.z, halfX: 0.7, halfZ: 0.7 });
    }
    for (const o of world.oscillators) boxes.push({ x: o.x, z: o.z, halfX: 1.9, halfZ: 0.6 });
    for (const p of world.torsionPendulums) boxes.push({ x: p.x, z: p.z, halfX: 1, halfZ: 1 });
    for (const e of world.elevators) boxes.push({ x: e.x, z: e.z, halfX: 1.1, halfZ: 1.1 });
    for (const c of world.carriages) boxes.push({ x: c.x, z: c.z, halfX: 1.1, halfZ: 0.6 });
    for (const t of world.angularTables) boxes.push({ x: t.x, z: t.z, halfX: t.radius + 0.2, halfZ: t.radius + 0.2 });
    for (const r of world.rods) boxes.push({ x: r.x, z: r.z, halfX: 1.3, halfZ: 0.5 });
    for (const o of world.orbits) boxes.push({ x: o.x, z: o.z, halfX: 3, halfZ: 3 });
    for (const t of world.tunnels) boxes.push({ x: t.x, z: t.z, halfX: t.R + 0.2, halfZ: t.R + 0.2 });
    for (const b of world.bodies) {
      const p = b.cannon?.position;
      if (!p) continue;
      const half = (b.kind === 'cart' ? Math.max(0.45, b.radius) : (b.size || 0.5) / 2) + 0.35;
      boxes.push({ x: p.x, z: p.z, halfX: half, halfZ: half });
    }
    return boxes;
  }

  function placementClear(x, z, halfX, halfZ, boxes) {
    const margin = 0.6;
    for (const box of boxes) {
      const overlapX = Math.abs(x - box.x) < halfX + box.halfX + margin;
      const overlapZ = Math.abs(z - box.z) < halfZ + box.halfZ + margin;
      if (overlapX && overlapZ) return false;
    }
    return true;
  }

  function nextPlacement(kind, base = null) {
    const extent = APPARATUS_EXTENT[kind] || { halfX: 1, halfZ: 1 };
    const boxes = apparatusBoxes();
    const anchor = base || view.placementPoint?.() || { x: 0, y: 0, z: 0 };
    const bx = Number.isFinite(anchor.x) ? anchor.x : 0;
    const bz = Number.isFinite(anchor.z) ? anchor.z : 0;
    const ring = [0, 0.8, -0.8, 1.6, -1.6, 2.4, -2.4, 3.2, -3.2, 4.2, -4.2, 5.2, -5.2, 6.4, -6.4];
    for (let i = 0; i < ring.length; i += 1) {
      for (let j = 0; j < ring.length; j += 1) {
        const x = bx + ring[i];
        const z = bz + ring[j];
        if (placementClear(x, z, extent.halfX, extent.halfZ, boxes)) return { x, z };
      }
    }
    return { x: bx, z: bz };
  }

  function selectedBody() {
    if (selected?.type !== 'body') return null;
    return getBody(world, selected.id);
  }

  function entityKindText(entity) {
    const [zh, en] = kindLabel(entity);
    return labelText(zh, en);
  }

  function entityFallbackName(entity) {
    const num = String(entity.id || '').split('-').pop();
    return `${entityKindText(entity)} #${num}`;
  }

  function sceneEntities() {
    return [
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
      ...world.links,
    ];
  }

  function renderOutliner() {
    clear(outlinerList);
    const entities = sceneEntities();
    const countNode = outliner.querySelector('[data-readout="outlinerCount"]');
    if (countNode) countNode.textContent = String(entities.length);
    outlinerHint.hidden = entities.length > 0;
    for (const entity of entities) {
      const isSel = selected?.type === entity.type && selected?.id === entity.id;
      const row = el('div', { className: 'plab-outliner-row' });
      const item = el('button', {
        type: 'button',
        className: `plab-outliner-item hit-target${isSel ? ' active' : ''}`,
        'aria-current': isSel ? 'true' : 'false',
        'aria-label': `${entity.name || entityFallbackName(entity)} · ${entityKindText(entity)}`,
      }, [
        el('span', { className: 'plab-outliner-name', text: entity.name || entityFallbackName(entity) }),
        el('span', { className: 'plab-outliner-kind', text: entity.name ? entityKindText(entity) : `#${String(entity.id).split('-').pop()}` }),
      ]);
      item.dataset.entityType = entity.type;
      item.dataset.entityId = entity.id;
      item.addEventListener('click', () => {
        if (isMobile()) closeMore();
        select(entity);
      });
      item.addEventListener('dblclick', (event) => {
        event.preventDefault();
        startRename(row, entity);
      });
      const del = el('button', {
        type: 'button',
        className: 'plab-outliner-del hit-target',
        text: '删 · Del',
        'aria-label': `删除 ${entity.name || entityFallbackName(entity)} · Delete`,
      });
      del.addEventListener('click', () => deleteEntity(entity));
      row.append(item, del);
      outlinerList.appendChild(row);
    }
  }

  function updateOutlinerSelection() {
    outlinerList.querySelectorAll('.plab-outliner-item').forEach((item) => {
      const isSel = selected?.type === item.dataset.entityType && selected?.id === item.dataset.entityId;
      item.classList.toggle('active', isSel);
      item.setAttribute('aria-current', isSel ? 'true' : 'false');
    });
  }

  function startRename(row, entity) {
    const input = el('input', {
      type: 'text',
      className: 'plab-outliner-rename',
      value: entity.name || '',
      'aria-label': '名称 · Name',
      placeholder: entityFallbackName(entity),
    });
    const first = row.firstChild;
    if (!first) return;
    row.replaceChild(input, first);
    input.focus();
    input.select();
    let done = false;
    const commit = () => {
      if (done) return;
      done = true;
      pushUndo('rename');
      entity.name = input.value.trim();
      renderOutliner();
      setStatus('已重命名 · Renamed.');
    };
    const cancel = () => {
      if (done) return;
      done = true;
      renderOutliner();
    };
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') { e.preventDefault(); commit(); }
      else if (e.key === 'Escape') { e.preventDefault(); cancel(); }
    });
    input.addEventListener('blur', commit);
  }

  function currentSelectionRef() {
    return selected ? { type: selected.type, id: selected.id } : null;
  }

  function updateUndoButtons() {
    undoBtn.disabled = undoStack.length === 0;
    redoBtn.disabled = redoStack.length === 0;
  }

  function pushUndo(key = '') {
    const now = performance.now();
    if (key && key === undoCoalesceKey && now - undoCoalesceAt < 550) {
      undoCoalesceAt = now;
      return;
    }
    undoCoalesceKey = key;
    undoCoalesceAt = now;
    undoStack.push({ scene: serializeScene(world), selected: currentSelectionRef() });
    if (undoStack.length > 80) undoStack.shift();
    redoStack.length = 0;
    updateUndoButtons();
  }

  function applySceneState(data, { runtime = false, keepInitial = false, selection = null } = {}) {
    const initial = world.initial;
    deserializeScene(world, data, { runtime });
    if (keepInitial) world.initial = initial;
    else captureInitial(world);
    selected = selection ? entityById(selection.type, selection.id) : null;
    if (selected) view.setSelection({ type: selected.type, id: selected.id });
    else view.setSelection(null);
    view.sync(world);
    updateEmpty();
    updateTransport();
    buildInspector();
    renderOutliner();
    updateLive();
    clearHistory();
    resetGraphs();
    view.clearTrail();
  }

  function undo() {
    if (!undoStack.length) {
      setStatus('没有可撤销的操作。 · Nothing to undo.', true);
      return;
    }
    const entry = undoStack.pop();
    redoStack.push({ scene: serializeScene(world), selected: currentSelectionRef() });
    applySceneState(entry.scene, { selection: entry.selected });
    updateUndoButtons();
    setStatus('已撤销。 · Undone.');
  }

  function redo() {
    if (!redoStack.length) {
      setStatus('没有可重做的操作。 · Nothing to redo.', true);
      return;
    }
    const entry = redoStack.pop();
    undoStack.push({ scene: serializeScene(world), selected: currentSelectionRef() });
    applySceneState(entry.scene, { selection: entry.selected });
    updateUndoButtons();
    setStatus('已重做。 · Redone.');
  }

  function deleteEntity(entity) {
    if (!entity) return;
    const wasSelected = selected?.type === entity.type && selected?.id === entity.id;
    pushUndo();
    prepareEdit();
    if (entity.type === 'body') {
      world.engine.removeBody(entity.cannon);
      world.bodies = world.bodies.filter((b) => b.id !== entity.id);
      world.links = world.links.filter((l) => !(
        (l.a.type === 'body' && l.a.id === entity.id)
        || (l.b.type === 'body' && l.b.id === entity.id)
      ));
      world.fans = world.fans.filter((f) => f.bodyId !== entity.id);
      for (const pulley of world.pulleys) {
        if (pulley.aId === entity.id) pulley.aId = null;
        if (pulley.bId === entity.id) pulley.bId = null;
      }
    } else if (entity.type === 'surface') {
      world.engine.removeBody(entity.body);
      world.surfaces = world.surfaces.filter((s) => s.id !== entity.id);
      for (const b of world.bodies) {
        if (b.attachment?.type === 'surface' && b.attachment.id === entity.id) detachBody(world, b);
      }
    } else if (entity.type === 'turntable') {
      world.engine.removeBody(entity.body);
      world.turntables = world.turntables.filter((t) => t.id !== entity.id);
      for (const b of world.bodies) {
        if (b.attachment?.type === 'turntable' && b.attachment.id === entity.id) detachBody(world, b);
      }
    } else if (entity.type === 'loop') {
      world.loops = world.loops.filter((l) => l.id !== entity.id);
      for (const b of world.bodies) {
        if (b.attachment?.type === 'loop' && b.attachment.id === entity.id) detachBody(world, b);
      }
    } else if (entity.type === 'hcircle') {
      world.hcircles = world.hcircles.filter((c) => c.id !== entity.id);
      for (const b of world.bodies) {
        if (b.attachment?.type === 'hcircle' && b.attachment.id === entity.id) detachBody(world, b);
      }
    } else if (entity.type === 'launcher') {
      if (entity.projectileId) {
        const projectile = getBody(world, entity.projectileId);
        if (projectile) {
          world.engine.removeBody(projectile.cannon);
          world.bodies = world.bodies.filter((b) => b.id !== projectile.id);
        }
      }
      world.launchers = world.launchers.filter((l) => l.id !== entity.id);
    } else if (entity.type === 'pulley') {
      for (const b of world.bodies) {
        if (b.rope?.pulleyId === entity.id) b.rope = null;
      }
      world.pulleys = world.pulleys.filter((p) => p.id !== entity.id);
    } else if (entity.type === 'barrier') {
      world.engine.removeBody(entity.body);
      world.barriers = world.barriers.filter((b) => b.id !== entity.id);
    } else if (entity.type === 'pendulum') {
      world.pendulums = world.pendulums.filter((p) => p.id !== entity.id);
    } else if (entity.type === 'wedge') {
      world.engine.removeBody(entity.body);
      world.wedges = world.wedges.filter((w) => w.id !== entity.id);
    } else if (entity.type === 'sensor') {
      world.sensors = world.sensors.filter((s) => s.id !== entity.id);
    } else if (entity.type === 'fan') {
      if (entity.bodyId) {
        const body = getBody(world, entity.bodyId);
        if (body && body.fan === entity) body.fan = null;
      }
      world.fans = world.fans.filter((f) => f.id !== entity.id);
    } else if (entity.type === 'link') {
      world.links = world.links.filter((l) => l.id !== entity.id);
    }
    if (wasSelected) {
      selected = null;
      view.setSelection(null);
    }
    view.sync(world);
    captureInitial(world);
    buildInspector();
    renderOutliner();
    updateEmpty();
    clearHistory();
    setStatus('已删除所选。 · Selection deleted.');
  }

  function captureDimensions(entity) {
    if (!entity) return null;
    return {
      type: entity.type,
      kind: entity.kind,
      size: entity.size,
      radius: entity.radius,
      length: entity.length,
      width: entity.width,
      rest: entity.rest,
    };
  }

  function applyScaleFrom(start, factor, axis = null) {
    if (!start || !Number.isFinite(factor) || factor <= 0) return;
    const entity = entityById(selected?.type, selected?.id);
    if (!entity) return;
    const f = Math.max(0.05, factor);
    if (entity.type === 'body') {
      if (entity.kind === 'cart' || entity.kind === 'ball' || entity.kind === 'cylinder') {
        setCartRadius(world, entity, start.radius * f);
        if (entity.kind !== 'cart') setInertiaRatio(world, entity, entity.inertiaRatio ?? 0.5);
      } else {
        setBlockSize(world, entity, start.size * f);
      }
    } else if (entity.type === 'surface') {
      if (axis === 'z') setSurfaceWidth(world, entity, start.width * f);
      else if (axis === 'x') setSurfaceLength(world, entity, start.length * f);
      else {
        setSurfaceLength(world, entity, start.length * f);
        setSurfaceWidth(world, entity, start.width * f);
      }
    } else if (entity.type === 'loop') {
      setLoopRadius(world, entity, start.radius * f);
    } else if (entity.type === 'turntable') {
      setTurntableRadius(world, entity, start.radius * f);
    } else if (entity.type === 'hcircle') {
      setHCircleRadius(world, entity, start.radius * f);
    } else if (entity.type === 'pendulum') {
      entity.length = Math.max(0.2, Math.min(5, (start.length || entity.length) * f));
    } else if (entity.type === 'wedge') {
      if (axis === 'z') rebuildWedge(world, entity, { width: start.width * f });
      else if (axis === 'x') rebuildWedge(world, entity, { length: start.length * f });
      else rebuildWedge(world, entity, { length: start.length * f, width: start.width * f });
    } else if (entity.type === 'link') {
      entity.rest = Math.max(0.05, Math.min(20, start.rest * f));
    }
    view.sync(world);
  }

  function duplicateSelected() {
    if (!selected) {
      setStatus('先选择一个对象。 · Select an object first.', true);
      return;
    }
    const entity = entityById(selected.type, selected.id);
    if (!entity) return;
    pushUndo();
    prepareEdit();
    let copy = null;
    if (entity.type === 'body') {
      const offset = 0.8;
      let spawn = { x: entity.cannon.position.x + offset, y: entity.cannon.position.y, z: entity.cannon.position.z + offset };
      let att = null;
      if (entity.attachment?.type === 'surface') att = { ...entity.attachment, localX: entity.attachment.localX + 0.8 };
      else if (entity.attachment?.type === 'loop') att = { ...entity.attachment, theta: entity.attachment.theta + 0.35 };
      else if (entity.attachment?.type === 'turntable') att = { ...entity.attachment, phi: entity.attachment.phi + 0.35 };
      else if (entity.attachment?.type === 'hcircle') att = { ...entity.attachment, phi: entity.attachment.phi + 0.35 };
      const opts = {
        mass: entity.mass,
        x: spawn.x,
        y: spawn.y,
        z: spawn.z,
        v0: entity.v0,
        azimuth: entity.azimuth,
        elevation: entity.elevation,
        name: entity.name ? `${entity.name} 副本` : '',
        brake: entity.brake,
        motor: entity.motor ? { ...entity.motor } : undefined,
      };
      if (entity.kind === 'cart') {
        copy = addCart(world, { ...opts, radius: entity.radius, I: entity.I, width: entity.width });
      } else if (entity.kind === 'ball') {
        copy = addBall(world, { ...opts, radius: entity.radius, I: entity.I });
      } else if (entity.kind === 'cylinder') {
        copy = addCylinder(world, { ...opts, radius: entity.radius, I: entity.I, length: entity.width });
      } else {
        copy = addBlock(world, { ...opts, size: entity.size });
      }
      copy.appliedMag = entity.appliedMag;
      copy.appliedAzimuth = entity.appliedAzimuth;
      copy.appliedElevation = entity.appliedElevation;
      if (att?.type === 'surface') attachBodyToSurface(world, copy, att.id, { localX: att.localX, localZ: att.localZ });
      else if (att?.type === 'loop') attachBodyToLoop(world, copy, att.id, { theta: att.theta });
      else if (att?.type === 'turntable') attachBodyToTurntable(world, copy, att.id, { r: att.r, phi: att.phi });
      else if (att?.type === 'hcircle') attachBodyToHCircle(world, copy, att.id, { phi: att.phi });
      else {
        copy.cannon.position.set(spawn.x, spawn.y, spawn.z);
        applyInitialVelocity(world, copy);
      }
    } else if (entity.type === 'surface') {
      const spot = nextPlacement(entity.kind);
      copy = addSurface(world, {
        kind: entity.kind,
        name: entity.name ? `${entity.name} 副本` : '',
        x: spot.x,
        y: entity.body.position.y,
        z: spot.z,
        angleDeg: entity.angle,
        length: entity.length,
        width: entity.width,
        thickness: entity.thickness,
        muS: entity.muS,
        muK: entity.muK,
      });
    } else if (entity.type === 'loop') {
      const spot = nextPlacement('loop');
      copy = addLoop(world, {
        name: entity.name ? `${entity.name} 副本` : '',
        x: spot.x, y: entity.y, z: spot.z, radius: entity.radius, muS: entity.muS, muK: entity.muK,
      });
    } else if (entity.type === 'turntable') {
      const spot = nextPlacement('turntable');
      copy = addTurntable(world, {
        name: entity.name ? `${entity.name} 副本` : '',
        x: spot.x, y: entity.body.position.y, z: spot.z,
        radius: entity.radius, omega: entity.omega, targetOmega: entity.targetOmega,
        torque: entity.torque, I: entity.I, drive: entity.drive, muS: entity.muS, muK: entity.muK,
      });
    } else if (entity.type === 'hcircle') {
      const spot = nextPlacement('hcircle');
      copy = addHCircle(world, {
        name: entity.name ? `${entity.name} 副本` : '',
        x: spot.x, y: entity.y, z: spot.z, radius: entity.radius, muS: entity.muS, muK: entity.muK,
      });
    } else if (entity.type === 'launcher') {
      const spot = nextPlacement('launcher');
      copy = addLauncher(world, {
        name: entity.name ? `${entity.name} 副本` : '',
        x: spot.x, y: entity.y, z: spot.z, angle: entity.angle, speed: entity.speed,
        height: entity.height, azimuth: entity.azimuth, mass: entity.mass, radius: entity.radius,
        drag: entity.drag, dragB: entity.dragB, dragC: entity.dragC,
      });
    } else if (entity.type === 'barrier') {
      const spot = nextPlacement(entity.kind);
      copy = addBarrier(world, {
        kind: entity.kind,
        name: entity.name ? `${entity.name} 副本` : '',
        x: spot.x, y: entity.y, z: spot.z,
        width: entity.width, height: entity.height, thickness: entity.thickness,
        radius: entity.radius, angleDeg: entity.angle, restitution: entity.e,
      });
    } else if (entity.type === 'pulley') {
      const spot = nextPlacement('pulley');
      copy = addPulley(world, {
        name: entity.name ? `${entity.name} 副本` : '',
        x: spot.x, y: entity.y, z: spot.z, radius: entity.radius, mass: entity.mass, I: entity.I, mode: entity.mode,
      });
      const left = addBlock(world, { mass: 2, size: 0.45, x: spot.x - entity.radius, y: entity.y - 1.65, z: spot.z });
      const right = addBlock(world, { mass: 1, size: 0.45, x: spot.x + entity.radius, y: entity.y - 1.65, z: spot.z });
      attachBodyToPulley(world, left, copy.id, 'a');
      attachBodyToPulley(world, right, copy.id, 'b');
    } else if (entity.type === 'pendulum') {
      const spot = nextPlacement('pendulum');
      copy = addPendulum(world, {
        name: entity.name ? `${entity.name} 副本` : '',
        x: spot.x, y: entity.y, z: spot.z, length: entity.length, mass: entity.mass,
        amplitude: entity.amplitude, radius: entity.radius, conical: entity.conical,
      });
    } else if (entity.type === 'wedge') {
      const spot = nextPlacement('wedge');
      copy = addWedge(world, {
        name: entity.name ? `${entity.name} 副本` : '',
        x: spot.x, baseY: entity.baseY, z: spot.z, angle: entity.angle,
        length: entity.length, width: entity.width, mass: entity.mass,
        muFloor: entity.muFloor, blockMu: entity.blockMu,
      });
    } else if (entity.type === 'sensor') {
      const spot = nextPlacement(entity.kind);
      copy = addSensor(world, {
        kind: entity.kind,
        name: entity.name ? `${entity.name} 副本` : '',
        x: spot.x, y: entity.y, z: spot.z,
        width: entity.width, height: entity.height, range: entity.range, face: entity.face,
      });
    } else if (entity.type === 'fan') {
      copy = addFan(world, {
        name: entity.name ? `${entity.name} 副本` : '',
        bodyId: entity.bodyId, thrust: entity.thrust, on: entity.on,
        azimuth: entity.azimuth, elevation: entity.elevation,
      });
    } else if (entity.type === 'link') {
      copy = addLink(world, { a: { ...entity.a }, b: { ...entity.b }, k: entity.k, beta: entity.beta, rest: entity.rest, meter: entity.meter });
    }
    if (!copy) {
      setStatus('此对象无法复制。 · This object could not be duplicated.', true);
      return;
    }
    captureInitial(world);
    view.sync(world);
    select(copy);
    updateEmpty();
    renderOutliner();
    setStatus('已复制所选对象。 · Selection duplicated.');
  }

  /* ------------------------- live graphs ------------------------- */

  function resetGraphs() {
    graphData.length = 0;
    graphBodyId = selected?.type === 'body' || selected?.type === 'sensor' ? selected.id : null;
    if (graphsOn) drawGraphs();
  }

  function pushGraphSample() {
    if (selected?.type === 'sensor') {
      const sensor = entityById('sensor', selected.id);
      if (!sensor || !running) return;
      if (graphBodyId !== sensor.id) {
        graphData.length = 0;
        graphBodyId = sensor.id;
      }
      const samples = sensor.samples.slice(-800);
      if (!samples.length) return;
      graphData.length = 0;
      for (const row of samples) {
        graphData.push({ t: row.t, x: row.x, v: row.v, a: row.a || 0, e: 0 });
      }
      if (graphsOn) drawGraphs();
      return;
    }
    const entity = selectedBody();
    if (!entity || !running) return;
    if (graphBodyId !== entity.id) {
      graphData.length = 0;
      graphBodyId = entity.id;
    }
    const d = bodyDiagnostics(world, entity);
    const v = entity.cannon.velocity.length();
    const rolling = entity.kind === 'cart' || entity.kind === 'ball' || entity.kind === 'cylinder';
    const rot = rolling ? 0.5 * entity.I * entity.cannon.angularVelocity.z ** 2 : 0;
    const energy = 0.5 * entity.mass * v * v + rot + entity.mass * world.g * entity.cannon.position.y;
    graphData.push({
      t: world.time,
      x: entity.cannon.position.x,
      v: d.speed,
      a: d.accel,
      e: energy,
    });
    if (graphData.length > 1200) graphData.shift();
    if (graphsOn) drawGraphs();
  }

  function drawGraphs() {
    if (!graphsOn) return;
    const rect = graphCanvas.getBoundingClientRect();
    if (rect.width < 2 || rect.height < 2) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = Math.round(rect.width * dpr);
    const h = Math.round(rect.height * dpr);
    if (graphCanvas.width !== w || graphCanvas.height !== h) {
      graphCanvas.width = w;
      graphCanvas.height = h;
    }
    const ctx = graphCanvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, w, h);
    const css = getComputedStyle(document.documentElement);
    const accent = css.getPropertyValue('--accent').trim() || '#5b6cff';
    const text = css.getPropertyValue('--text-muted').trim() || '#6b6a64';
    const border = css.getPropertyValue('--border').trim() || '#d6d4cc';
    ctx.font = `${11 * dpr}px monospace`;
    if (graphData.length < 2) {
      ctx.fillStyle = text;
      ctx.fillText('运行后记录曲线 · Curves record while running', 10 * dpr, 22 * dpr);
      return;
    }
    const series = [
      { key: 'x', label: 'x', unit: 'm' },
      { key: 'v', label: 'v', unit: 'm/s' },
      { key: 'a', label: 'a', unit: 'm/s²' },
      { key: 'e', label: 'E', unit: 'J' },
    ];
    const strip = h / series.length;
    const t0 = graphData[0].t;
    const t1 = graphData[graphData.length - 1].t;
    for (let s = 0; s < series.length; s += 1) {
      const { key, label, unit } = series[s];
      let min = Infinity;
      let max = -Infinity;
      for (const row of graphData) {
        min = Math.min(min, row[key]);
        max = Math.max(max, row[key]);
      }
      if (!Number.isFinite(min) || !Number.isFinite(max)) continue;
      if (max - min < 1e-9) { max += 0.5; min -= 0.5; }
      const top = s * strip + 4 * dpr;
      const bottom = (s + 1) * strip - 6 * dpr;
      ctx.strokeStyle = border;
      ctx.lineWidth = dpr;
      ctx.beginPath();
      ctx.moveTo(0, top);
      ctx.lineTo(w, top);
      ctx.stroke();
      ctx.fillStyle = text;
      ctx.fillText(`${label} (${unit})`, 6 * dpr, top + 11 * dpr);
      ctx.strokeStyle = accent;
      ctx.lineWidth = 1.5 * dpr;
      ctx.beginPath();
      for (let i = 0; i < graphData.length; i += 1) {
        const row = graphData[i];
        const px = ((row.t - t0) / Math.max(1e-6, t1 - t0)) * (w - 8 * dpr) + 4 * dpr;
        const py = bottom - ((row[key] - min) / (max - min)) * Math.max(1, bottom - top - 16 * dpr);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();
    }
  }

  function setGraphs(value) {
    graphsOn = !!value;
    graphSection.hidden = !graphsOn;
    graphToggleBtn.classList.toggle('active', graphsOn);
    graphToggleBtn.setAttribute('aria-pressed', graphsOn ? 'true' : 'false');
    if (graphsOn) drawGraphs();
  }

  /* ------------------------ time history ------------------------ */

  function clearHistory() {
    history = [];
    scrubIndex = -1;
    const input = root.querySelector('[data-field="scrub"]');
    const out = root.querySelector('[data-readout="scrub"]');
    if (input) { input.max = '0'; input.value = '0'; }
    if (out) out.textContent = '0.0 s';
  }

  function recordHistory() {
    if (!running) return;
    const input = root.querySelector('[data-field="scrub"]');
    const out = root.querySelector('[data-readout="scrub"]');
    if (!history.length || world.time - history[history.length - 1].time >= 0.1) {
      history.push({ time: world.time, data: serializeScene(world, { runtime: true }) });
      if (history.length > HISTORY_LIMIT) history.shift();
      if (input) {
        input.max = String(history.length - 1);
        input.value = String(history.length - 1);
      }
      if (out) out.textContent = `${world.time.toFixed(1)} s`;
    }
  }

  function scrubTo(index) {
    if (!history.length) return;
    const i = Math.max(0, Math.min(history.length - 1, index));
    scrubIndex = i;
    running = false;
    const initial = world.initial;
    const prev = currentSelectionRef();
    deserializeScene(world, history[i].data, { runtime: true });
    world.initial = initial;
    selected = prev ? entityById(prev.type, prev.id) : null;
    if (selected) view.setSelection({ type: selected.type, id: selected.id });
    else view.setSelection(null);
    view.sync(world);
    updateTransport();
    buildInspector();
    renderOutliner();
    updateLive();
    const out = root.querySelector('[data-readout="scrub"]');
    if (out) out.textContent = `${history[i].time.toFixed(1)} s`;
    setStatus(`已回拖到 t = ${history[i].time.toFixed(2)} s。 · Scrubbed to t = ${history[i].time.toFixed(2)} s.`);
  }

  /* ------------------------ scene save/load ---------------------- */

  const SCENE_KEY = 'plab-scene-v1';

  function loadSceneData(data, { quiet = false } = {}) {
    pushUndo();
    running = false;
    selected = null;
    view.setSelection(null);
    deserializeScene(world, data);
    captureInitial(world);
    layoutReset();
    view.sync(world);
    buildInspector();
    renderOutliner();
    updateEmpty();
    updateTransport();
    updateLive();
    clearHistory();
    resetGraphs();
    view.clearTrail();
    view.clearRuler();
    if (!quiet) setStatus('场景已读取。 · Scene loaded.');
  }

  function saveScene() {
    try {
      localStorage.setItem(SCENE_KEY, JSON.stringify(serializeScene(world)));
      setStatus('已保存到本机。 · Saved to this browser.');
    } catch (err) {
      setStatus('保存失败：浏览器存储不可用。 · Save failed: browser storage unavailable.', true);
    }
  }

  function loadSavedScene() {
    let raw = null;
    try { raw = localStorage.getItem(SCENE_KEY); } catch (_) { raw = null; }
    if (!raw) {
      setStatus('本机没有保存的场景。 · No saved scene in this browser.', true);
      return;
    }
    try {
      loadSceneData(JSON.parse(raw));
    } catch (err) {
      setStatus('保存的场景无法解析。 · The saved scene could not be parsed.', true);
    }
  }

  function exportScene() {
    const blob = new Blob([JSON.stringify(serializeScene(world), null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'physics-lab-scene.json';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
    setStatus('已导出 JSON。 · JSON exported.');
  }

  function importSceneFile(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        loadSceneData(JSON.parse(String(reader.result)));
        setStatus(`已导入 ${file.name}。 · Imported ${file.name}.`);
      } catch (err) {
        setStatus('导入失败：JSON 无效。 · Import failed: invalid JSON.', true);
      }
    };
    reader.readAsText(file);
  }

  function layoutReset() {
    // The current layout is derived from the loaded apparatus positions, so
    // there is no persistent counter to reset. Kept as a hook for clarity.
  }

  /* ----------------------- Blender-style G/R/S ------------------- */

  function entityPosition(entity) {
    if (entity.type === 'body') {
      const p = entity.cannon.position;
      return { x: p.x, y: p.y, z: p.z };
    }
    if (entity.type === 'surface') {
      const p = entity.body.position;
      return { x: p.x, y: p.y, z: p.z };
    }
    return { x: entity.x, y: entity.y, z: entity.z };
  }

  function setEntityPosition(entity, p) {
    if (entity.type === 'body') {
      if (entity.attachment) detachBody(world, entity);
      entity.cannon.position.set(p.x, p.y, p.z);
      entity.cannon.velocity.setZero();
      entity.cannon.angularVelocity.setZero();
      entity.cannon.aabbNeedsUpdate = true;
    } else if (entity.type === 'surface') {
      entity.body.position.set(p.x, p.y, p.z);
      entity.body.aabbNeedsUpdate = true;
      for (const b of world.bodies) {
        if (b.attachment?.type === 'surface' && b.attachment.id === entity.id) repositionSurfaceBody(world, b);
      }
    } else if (entity.type === 'loop') {
      entity.x = p.x; entity.y = p.y; entity.z = p.z;
      for (const b of world.bodies) {
        if (b.attachment?.type === 'loop' && b.attachment.id === entity.id) {
          b.cannon.position.copy(loopPoint(entity, b.attachment.theta));
        }
      }
    } else if (entity.type === 'turntable') {
      entity.x = p.x; entity.y = p.y; entity.z = p.z;
      entity.body.position.set(p.x, p.y, p.z);
      entity.body.aabbNeedsUpdate = true;
      for (const b of world.bodies) {
        if (b.attachment?.type === 'turntable' && b.attachment.id === entity.id) {
          b.cannon.position.set(
            entity.x + b.attachment.r * Math.cos(b.attachment.phi),
            entity.y + 0.06 + b.halfHeight,
            entity.z + b.attachment.r * Math.sin(b.attachment.phi),
          );
        }
      }
    } else if (entity.type === 'hcircle') {
      entity.x = p.x; entity.y = p.y; entity.z = p.z;
      for (const b of world.bodies) {
        if (b.attachment?.type === 'hcircle' && b.attachment.id === entity.id) {
          b.cannon.position.set(
            entity.x + entity.radius * Math.cos(b.attachment.phi),
            entity.y + b.halfHeight + 0.01,
            entity.z + entity.radius * Math.sin(b.attachment.phi),
          );
        }
      }
    } else if (entity.type === 'launcher') {
      entity.x = p.x; entity.y = p.y; entity.z = p.z;
      entity.target = launcherPrediction(world, entity);
    } else if (entity.type === 'pulley') {
      entity.x = p.x; entity.y = p.y; entity.z = p.z;
      for (const b of world.bodies) {
        if (b.rope?.pulleyId === entity.id) {
          b.cannon.position.x = entity.x + (b.rope.side === 'a' ? -entity.radius : entity.radius);
          b.cannon.position.z = entity.z;
          b.cannon.aabbNeedsUpdate = true;
        }
      }
    } else if (entity.type === 'barrier') {
      entity.x = p.x; entity.y = p.y; entity.z = p.z;
      entity.body.position.set(entity.x, entity.y + entity.height / 2, entity.z);
      entity.body.aabbNeedsUpdate = true;
    } else if (entity.type === 'pendulum') {
      entity.x = p.x; entity.y = p.y; entity.z = p.z;
    } else if (entity.type === 'wedge') {
      entity.x = p.x; entity.z = p.z;
      entity.baseY = p.y;
      entity.body.position.set(p.x, p.y + entity.centroidY, p.z);
      entity.body.aabbNeedsUpdate = true;
    } else if (entity.type === 'sensor') {
      entity.x = p.x; entity.y = p.y; entity.z = p.z;
    } else if (entity.type === 'fan') {
      // Fan attachments follow their body and are not moved independently.
    }
  }

  function quatFromAxis(axis, angle) {
    const half = angle / 2;
    const s = Math.sin(half);
    const c = Math.cos(half);
    if (axis === 'x') return { x: s, y: 0, z: 0, w: c };
    if (axis === 'z') return { x: 0, y: 0, z: s, w: c };
    return { x: 0, y: s, z: 0, w: c };
  }

  function quatMul(a, b) {
    return {
      x: a.w * b.x + a.x * b.w + a.y * b.z - a.z * b.y,
      y: a.w * b.y - a.x * b.z + a.y * b.w + a.z * b.x,
      z: a.w * b.z + a.x * b.y - a.y * b.x + a.z * b.w,
      w: a.w * b.w - a.x * b.x - a.y * b.y - a.z * b.z,
    };
  }

  function setEntityQuaternion(entity, q) {
    const h = Math.hypot(q.x, q.y, q.z, q.w) || 1;
    const n = { x: q.x / h, y: q.y / h, z: q.z / h, w: q.w / h };
    if (entity.type === 'body') {
      if (entity.attachment) detachBody(world, entity);
      entity.cannon.quaternion.set(n.x, n.y, n.z, n.w);
      entity.cannon.velocity.setZero();
      entity.cannon.angularVelocity.setZero();
      entity.cannon.aabbNeedsUpdate = true;
    } else if (entity.type === 'surface') {
      entity.body.quaternion.set(n.x, n.y, n.z, n.w);
      entity.angle = (zAngle(n) * 180) / Math.PI;
      entity.body.aabbNeedsUpdate = true;
      for (const b of world.bodies) {
        if (b.attachment?.type === 'surface' && b.attachment.id === entity.id) repositionSurfaceBody(world, b);
      }
    }
  }

  function modalAxisVector(axis) {
    if (axis === 'y') return { x: 0, y: 1, z: 0 };
    if (axis === 'z') return { x: 0, y: 0, z: 1 };
    return { x: 1, y: 0, z: 0 };
  }

  function updateModalHud() {
    if (!modal) {
      modalHud.hidden = true;
      return;
    }
    modalHud.hidden = false;
    const modeText = modal.mode === 'translate' ? '移动 · Move'
      : modal.mode === 'rotate' ? '旋转 · Rotate' : '缩放 · Scale';
    const axisText = modal.axis ? `轴 ${modal.axis.toUpperCase()} · Axis ${modal.axis.toUpperCase()}` : '自由 · Free';
    const entry = modal.numeric ? `输入 ${modal.numeric} · Type ${modal.numeric}` : '拖动鼠标 · Drag';
    modalHud.textContent = `${modeText}  ${axisText}  ${entry}  · Enter 确认 · Esc 取消`;
  }

  function applyModalTransform() {
    if (!modal) return;
    const entity = entityById(modal.ref.type, modal.ref.id);
    if (!entity) return;
    const start = modal.start;
    if (modal.mode === 'translate') {
      let delta;
      if (modal.numeric) {
        const value = Number(modal.numeric);
        if (!Number.isFinite(value)) return;
        const axis = modalAxisVector(modal.axis || 'x');
        delta = { x: axis.x * value, y: axis.y * value, z: axis.z * value };
      } else {
        const d = view.screenDeltaToWorld(modal.dx, modal.dy, start.pos);
        delta = modal.axis
          ? (() => {
            const axis = modalAxisVector(modal.axis);
            const amount = d.x * axis.x + d.y * axis.y + d.z * axis.z;
            const snapped = snapOn ? Math.round(amount / 0.25) * 0.25 : amount;
            return { x: axis.x * snapped, y: axis.y * snapped, z: axis.z * snapped };
          })()
          : d;
        if (snapOn && !modal.axis) {
          delta = {
            x: Math.round(delta.x / 0.25) * 0.25,
            y: Math.round(delta.y / 0.25) * 0.25,
            z: Math.round(delta.z / 0.25) * 0.25,
          };
        }
      }
      setEntityPosition(entity, {
        x: start.pos.x + delta.x,
        y: start.pos.y + delta.y,
        z: start.pos.z + delta.z,
      });
    } else if (modal.mode === 'rotate') {
      const axis = modal.axis || (entity.type === 'surface' ? 'z' : 'y');
      let angle = modal.numeric ? (Number(modal.numeric) * Math.PI) / 180 : modal.dx * 0.008;
      if (!Number.isFinite(angle)) return;
      if (snapOn) angle = Math.round(angle / (Math.PI / 12)) * (Math.PI / 12);
      setEntityQuaternion(entity, quatMul(quatFromAxis(axis, angle), start.quat));
    } else if (modal.mode === 'scale') {
      let factor = modal.numeric ? Number(modal.numeric) : 1 + (modal.dx - modal.dy) * 0.006;
      if (!Number.isFinite(factor)) return;
      factor = Math.max(0.05, Math.min(20, factor));
      if (snapOn) factor = Math.max(0.1, Math.round(factor * 10) / 10);
      applyScaleFrom(start.dims, factor, modal.axis);
    }
    modal.changed = true;
    view.sync(world);
  }

  function startModal(mode) {
    if (running) {
      setStatus('先暂停再变换。 · Pause before transforming.', true);
      return;
    }
    if (!selected) {
      setStatus('先选择一个对象。 · Select an object first.', true);
      return;
    }
    const entity = entityById(selected.type, selected.id);
    if (!entity) return;
    if (entity.type === 'link' && mode !== 'scale') {
      setStatus('连接只支持缩放。 · Links support scale only.', true);
      return;
    }
    if (mode === 'rotate' && entity.type !== 'body' && entity.type !== 'surface') {
      setStatus('此装置只支持移动或缩放。 · This apparatus supports move or scale only.', true);
      return;
    }
    pushUndo('modal');
    const quat = entity.type === 'body'
      ? { x: entity.cannon.quaternion.x, y: entity.cannon.quaternion.y, z: entity.cannon.quaternion.z, w: entity.cannon.quaternion.w }
      : entity.type === 'surface'
        ? { x: entity.body.quaternion.x, y: entity.body.quaternion.y, z: entity.body.quaternion.z, w: entity.body.quaternion.w }
        : null;
    modal = {
      mode,
      ref: { type: entity.type, id: entity.id },
      start: { pos: entityPosition(entity), quat, dims: captureDimensions(entity) },
      dx: 0,
      dy: 0,
      lastX: lastPointer ? lastPointer.x : null,
      lastY: lastPointer ? lastPointer.y : null,
      axis: null,
      numeric: '',
      changed: false,
      snapshot: serializeScene(world),
      undoDepth: undoStack.length,
    };
    view.setGizmoVisible(false);
    view.orbit.enabled = false;
    root.dataset.modal = mode;
    updateModalHud();
    setStatus(`${mode === 'translate' ? '移动' : mode === 'rotate' ? '旋转' : '缩放'}：拖动鼠标，X/Y/Z 锁定轴，输入数字后 Enter。 · Drag; X/Y/Z locks an axis; type a number then Enter.`);
  }

  function finishModal() {
    modal = null;
    modalHud.hidden = true;
    delete root.dataset.modal;
    view.orbit.enabled = true;
    view.setGizmoVisible(!running && gizmoMode !== 'off');
    updateTransport();
    captureInitial(world);
    view.sync(world);
    buildInspector();
    renderOutliner();
    updateEmpty();
    clearHistory();
    resetGraphs();
    updateUndoButtons();
  }

  function confirmModal() {
    if (!modal) return;
    if (modal.numeric) applyModalTransform();
    if (!modal.changed) {
      undoStack.length = modal.undoDepth;
      redoStack.length = 0;
    }
    finishModal();
    setStatus('变换已应用。 · Transform applied.');
  }

  function cancelModal() {
    if (!modal) return;
    const snap = modal.snapshot;
    const ref = modal.ref;
    const changed = modal.changed;
    undoStack.length = modal.undoDepth;
    redoStack.length = 0;
    modal = null;
    modalHud.hidden = true;
    delete root.dataset.modal;
    view.orbit.enabled = true;
    if (changed) {
      deserializeScene(world, snap);
      captureInitial(world);
      selected = entityById(ref.type, ref.id);
      if (selected) view.setSelection({ type: selected.type, id: selected.id });
      else view.setSelection(null);
      view.sync(world);
      buildInspector();
      renderOutliner();
      updateEmpty();
      updateLive();
      clearHistory();
      resetGraphs();
    } else {
      view.sync(world);
    }
    updateTransport();
    updateUndoButtons();
    setStatus('已取消变换。 · Transform cancelled.');
  }

  function onModalPointerMove(e) {
    lastPointer = { x: e.clientX, y: e.clientY };
    if (!modal) return;
    if (!canvasHost.contains(e.target)) return;
    if (modal.lastX == null) {
      modal.lastX = e.clientX;
      modal.lastY = e.clientY;
      return;
    }
    modal.dx += e.clientX - modal.lastX;
    modal.dy += e.clientY - modal.lastY;
    modal.lastX = e.clientX;
    modal.lastY = e.clientY;
    if (!modal.numeric) applyModalTransform();
    updateModalHud();
  }

  function onModalPointerDown(e) {
    if (!modal) return;
    if (e.button === 2) {
      e.preventDefault();
      cancelModal();
      return;
    }
    if (e.button !== 0) return;
    if (canvasHost.contains(e.target)) {
      e.preventDefault();
      e.stopPropagation();
      confirmModal();
      return;
    }
    if (e.target.closest && e.target.closest('button, input, select, label')) {
      cancelModal();
    }
  }

  function onFocusIn(e) {
    if (!modal) return;
    const target = e.target;
    if (target && target.closest && target.closest('input, textarea, select, [contenteditable="true"]')) {
      cancelModal();
    }
  }

  function handleModalKey(e) {
    if (!modal) return false;
    const tag = (e.target && e.target.tagName) || '';
    const editing = tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || e.target?.isContentEditable;
    if (editing) return false;
    if (e.key === 'Escape') {
      e.preventDefault();
      cancelModal();
      return true;
    }
    if (e.key === 'Enter') {
      e.preventDefault();
      confirmModal();
      return true;
    }
    if (e.key === 'Backspace') {
      e.preventDefault();
      modal.numeric = modal.numeric.slice(0, -1);
      updateModalHud();
      return true;
    }
    if (/^[0-9.-]$/.test(e.key) && !e.ctrlKey && !e.metaKey && !e.altKey) {
      e.preventDefault();
      modal.numeric += e.key;
      updateModalHud();
      return true;
    }
    const axisKey = e.key.toLowerCase();
    if ((axisKey === 'x' || axisKey === 'y' || axisKey === 'z') && !e.ctrlKey && !e.metaKey && !e.altKey) {
      e.preventDefault();
      modal.axis = axisKey;
      applyModalTransform();
      updateModalHud();
      return true;
    }
    return false;
  }

  let scaleSession = null;

  function flashSeat(entity) {
    if (!entity || !view.flashSnap) return;
    let pos = null;
    let quat = null;
    if (entity.type === 'body') pos = entity.cannon.position;
    else if (entity.type === 'surface' || entity.type === 'barrier' || entity.type === 'wedge') pos = entity.body.position;
    else if (entity.type === 'fan') {
      const body = entity.bodyId ? getBody(world, entity.bodyId) : null;
      pos = body ? body.cannon.position : null;
    } else pos = { x: entity.x, y: entity.y, z: entity.z };
    if (entity.type === 'body' && entity.attachment?.type === 'surface') {
      const surface = getSurface(world, entity.attachment.id);
      if (surface) quat = surface.body.quaternion;
    } else if (entity.type === 'surface') {
      quat = entity.body.quaternion;
    }
    view.flashSnap(pos, quat);
  }

  function addApparatus(kind) {
    closeAddMenu();
    pushUndo('add');
    prepareEdit();
    let entity = null;
    if (kind === 'incline') {
      const spot = nextPlacement(kind);
      entity = addSurface(world, { kind: 'incline', x: spot.x, y: 1.35, z: spot.z, angleDeg: 20, length: 8, width: 2.4, muS: 0.3, muK: 0.2 });
    } else if (kind === 'surface') {
      const spot = nextPlacement(kind);
      entity = addSurface(world, { kind: 'surface', x: spot.x, y: 0.55, z: spot.z, angleDeg: 0, length: 9, width: 2.4, muS: 0.45, muK: 0.28 });
    } else if (kind === 'track') {
      const spot = nextPlacement(kind);
      entity = addSurface(world, { kind: 'track', x: spot.x, y: 0.55, z: spot.z, angleDeg: 0, length: 10, width: 2.4, muS: 0.3, muK: 0.2 });
    } else if (kind === 'loop') {
      const spot = nextPlacement(kind);
      entity = addLoop(world, { x: spot.x, y: 2.7, z: spot.z, radius: 1.8 });
    } else if (kind === 'turntable') {
      const spot = nextPlacement(kind);
      entity = addTurntable(world, { x: spot.x, y: 0.62, z: spot.z, radius: 2, omega: 1.2, targetOmega: 1.2, I: 8, drive: 'target', muS: 0.5, muK: 0.35 });
    } else if (kind === 'hcircle') {
      const spot = nextPlacement(kind);
      entity = addHCircle(world, { x: spot.x, z: spot.z, y: 0.12, radius: 2, muS: 0.55, muK: 0.35 });
    } else if (kind === 'launcher') {
      const spot = nextPlacement(kind);
      entity = addLauncher(world, {
        x: spot.x, y: 0, z: spot.z, angle: 45, speed: 8, height: 1.2,
        mass: 0.2, radius: 0.09, drag: 'none', dragB: 0.4, dragC: 0.06,
      });
    } else if (kind === 'pulley') {
      const spot = nextPlacement(kind);
      entity = addPulley(world, {
        x: spot.x, y: 3.1, z: spot.z, radius: 0.34, mass: 0.5, mode: 'atwood',
      });
      const left = addBlock(world, { mass: 2, size: 0.45, x: spot.x - 0.34, y: 1.45, z: spot.z });
      const right = addBlock(world, { mass: 1, size: 0.45, x: spot.x + 0.34, y: 1.45, z: spot.z });
      attachBodyToPulley(world, left, entity.id, 'a');
      attachBodyToPulley(world, right, entity.id, 'b');
    } else if (kind === 'wall' || kind === 'bumper') {
      const spot = nextPlacement(kind);
      entity = addBarrier(world, {
        kind,
        x: spot.x,
        y: 0,
        z: spot.z,
        width: 2.4,
        height: 1.2,
        thickness: 0.16,
        radius: 0.42,
        restitution: 0.6,
      });
    } else if (kind === 'pendulum') {
      const spot = nextPlacement(kind);
      entity = addPendulum(world, {
        x: spot.x, y: 3.1, z: spot.z, length: 1.6, mass: 1, amplitude: 20, radius: 0.16,
      });
    } else if (kind === 'oscillator') {
      const spot = nextPlacement(kind);
      entity = addOscillator(world, {
        x: spot.x, y: 1.15, z: spot.z,
        mass: 1, k: 4, damping: 0.35,
        driveForce: 1, driveOmega: 2, driveOn: true, amplitude: 0.6,
      });
    } else if (kind === 'torsion') {
      const spot = nextPlacement(kind);
      entity = addTorsionPendulum(world, {
        x: spot.x, y: 1.95, z: spot.z,
        mass: 2.4, radius: 0.9, kappa: 0.9, amplitude: 15,
      });
    } else if (kind === 'angtable') {
      const spot = nextPlacement(kind);
      entity = addAngularTable(world, {
        x: spot.x, y: 0.62, z: spot.z,
        radius: 1.6, discMass: 8, blockMass: 1,
        r: 1.05, omega: 2.2, radialMotor: false,
      });
    } else if (kind === 'rod') {
      const spot = nextPlacement(kind);
      entity = addRod(world, {
        x: spot.x, y: 2.2, z: spot.z,
        mass: 2, length: 2.2, pivot: 'end', torque: 1,
      });
    } else if (kind === 'orbit') {
      const spot = nextPlacement(kind);
      entity = addOrbit(world, {
        x: spot.x, y: 2.3, z: spot.z,
        M: 8, G: 1, r: 5, speedFactor: 1,
      });
    } else if (kind === 'tunnel') {
      const spot = nextPlacement(kind);
      entity = addTunnel(world, {
        x: spot.x, y: 3.25, z: spot.z,
        R: 3.2, M: 8, G: 1,
      });
    } else if (kind === 'elevator') {
      const spot = nextPlacement(kind);
      entity = addElevator(world, {
        x: spot.x, y: 0, z: spot.z, mass: 2, accel: 2, height: 2.6, width: 1.7,
      });
    } else if (kind === 'carriage') {
      const spot = nextPlacement(kind);
      entity = addCarriage(world, {
        x: spot.x, y: 0, z: spot.z, mass: 1.2, accel: 1.5, length: 1.25,
      });
    } else if (kind === 'wedge') {
      const spot = nextPlacement(kind);
      entity = addWedge(world, {
        x: spot.x, baseY: 0, z: spot.z, angle: 25, length: 3, width: 1.6,
        mass: 4, muFloor: 0, blockMu: 0, restitution: 0,
      });
    } else if (kind === 'photogate' || kind === 'motion') {
      const surface = selected?.type === 'surface' ? selected : null;
      const body = selectedBody();
      const spot = surface
        ? { x: surface.body.position.x, z: surface.body.position.z }
        : body
          ? { x: body.cannon.position.x + (kind === 'photogate' ? 1 : -2), z: body.cannon.position.z }
          : nextPlacement(kind);
      const baseY = surface
        ? surface.body.position.y
        : body
          ? Math.max(0, body.cannon.position.y - body.halfHeight)
          : 0;
      if (kind === 'photogate') {
        entity = addSensor(world, {
          kind: 'photogate',
          x: spot.x,
          y: baseY,
          z: spot.z,
          width: surface ? Math.min(2.2, surface.width * 0.85) : 1.8,
          height: 1.3,
        });
      } else {
        const half = surface ? surface.length / 2 : 0;
        entity = addSensor(world, {
          kind: 'motion',
          x: surface ? spot.x - half + 0.35 : spot.x,
          y: surface ? surface.body.position.y : baseY,
          z: spot.z,
          width: 1,
          height: 1,
          range: surface ? surface.length : 8,
          face: 1,
        });
      }
    } else if (kind === 'fan') {
      let body = selectedBody();
      if (!body) {
        const spot = nextPlacement('fan');
        body = addCart(world, {
          mass: 1, radius: 0.3, x: spot.x, y: 1.0, z: spot.z, brake: false,
        });
        const seated = assists.snap ? snapBodyToNearest(world, body, { maxDistance: 6 }) : null;
        if (!seated) {
          body.cannon.position.set(spot.x, body.halfHeight + 0.02, spot.z);
          applyInitialVelocity(world, body);
        }
      }
      entity = addFan(world, {
        bodyId: body.id, thrust: 3, on: true, azimuth: 0, elevation: 0,
      });
    } else if (kind === 'block' || kind === 'cart' || kind === 'ball' || kind === 'cylinder') {
      const target = selected?.type === 'surface' || selected?.type === 'loop'
        || selected?.type === 'turntable' || selected?.type === 'hcircle'
        || selected?.type === 'wedge' ? selected : null;
      let spawn;
      if (target?.type === 'surface') {
        spawn = { x: target.body.position.x, y: target.body.position.y + 1.1, z: target.body.position.z };
      } else if (target?.type === 'loop') {
        spawn = { x: target.x, y: target.y - target.radius, z: target.z };
      } else if (target?.type === 'turntable') {
        spawn = { x: target.x + target.radius * 0.55, y: target.y + 0.9, z: target.z };
      } else if (target?.type === 'hcircle') {
        spawn = { x: target.x + target.radius, y: target.y + 0.7, z: target.z };
      } else if (target?.type === 'wedge') {
        spawn = {
          x: target.body.position.x - target.length * 0.15,
          y: target.body.position.y + target.height * 0.55 + 0.8,
          z: target.body.position.z,
        };
      } else if (assists.placement) {
        const spot = nextPlacement(kind);
        spawn = { x: spot.x, y: 1.0, z: spot.z };
      } else {
        spawn = { x: 0, y: 2.5, z: 0 };
      }
      if (kind === 'cart') {
        entity = addCart(world, { mass: 1, radius: 0.3, x: spawn.x, y: spawn.y, z: spawn.z, brake: false });
      } else if (kind === 'ball') {
        entity = addBall(world, { mass: 1, radius: 0.26, x: spawn.x, y: spawn.y, z: spawn.z });
      } else if (kind === 'cylinder') {
        entity = addCylinder(world, { mass: 1, radius: 0.28, length: 0.7, x: spawn.x, y: spawn.y, z: spawn.z });
      } else {
        entity = addBlock(world, { mass: 1, size: 0.5, x: spawn.x, y: spawn.y, z: spawn.z, brake: false });
      }
      if (target?.type === 'surface') {
        attachBodyToSurface(world, entity, target.id, { localX: 0, localZ: 0 });
      } else if (target?.type === 'loop') {
        attachBodyToLoop(world, entity, target.id, { theta: 0 });
      } else if (target?.type === 'turntable') {
        attachBodyToTurntable(world, entity, target.id, { r: target.radius * 0.55, phi: 0 });
      } else if (target?.type === 'hcircle') {
        attachBodyToHCircle(world, entity, target.id, { phi: 0 });
      } else if (target?.type === 'wedge') {
        entity.cannon.position.set(spawn.x, spawn.y, spawn.z);
        entity.cannon.velocity.setZero();
        entity.cannon.angularVelocity.setZero();
        entity.cannon.aabbNeedsUpdate = true;
        applyInitialVelocity(world, entity);
      } else {
        let seated = null;
        if (assists.snap) seated = snapBodyToNearest(world, entity, { maxDistance: 6 });
        if (seated) {
          flashSeat(entity);
        } else {
          entity.cannon.position.set(spawn.x, entity.halfHeight + 0.02, spawn.z);
          applyInitialVelocity(world, entity);
        }
      }
    } else if (kind === 'spring' || kind === 'nonlinear' || kind === 'meter') {
      startLink(kind);
      return;
    }
    if (!entity) return;
    snapNearbyBodies(world, 2.4);
    captureInitial(world);
    view.sync(world);
    select(entity);
    renderOutliner();
    updateEmpty();
    updateTransport();
    setStatus(`已添加：${labelText(...kindLabel(entity))} · Added. 直接拖动即可移动，吸附默认开启。 · Drag it directly; auto-snap is on.`);
  }

  function startLink(kind) {
    prepareEdit();
    if (!world.bodies.length) {
      setStatus('先添加一个物体，再连接弹簧或测力计。 · Add a body first, then connect a spring or force meter.', true);
      return;
    }
    const body = selectedBody() || (world.bodies.length === 1 ? world.bodies[0] : null);
    pendingLink = {
      kind,
      first: body ? { type: 'body', id: body.id } : null,
    };
    view.sync(world);
    setStatus(body
      ? '已选起点：点击第二个端点（物体或地面锚点）。 · First endpoint set: click the second endpoint (body or ground anchor).'
      : '点击第一个端点（物体或地面锚点）。 · Click the first endpoint (body or ground anchor).');
  }

  function nearestBodyToPoint(point, maxDistance = 1.8) {
    let best = null;
    let bestD = maxDistance;
    for (const body of world.bodies) {
      const p = body.cannon.position;
      const d = Math.hypot(point.x - p.x, point.y - p.y, point.z - p.z);
      if (d < bestD) { bestD = d; best = body; }
    }
    return best;
  }

  function nearestAnchorToPoint(point, maxDistance = 1.2) {
    let best = null;
    let bestD = maxDistance;
    for (const link of world.links) {
      for (const end of [link.a, link.b]) {
        if (end?.type !== 'anchor') continue;
        const d = Math.hypot(point.x - end.x, point.y - end.y, point.z - end.z);
        if (d < bestD) { bestD = d; best = { type: 'anchor', x: end.x, y: end.y, z: end.z }; }
      }
    }
    return best;
  }

  function handlePick(hit, event) {
    if (modal) return;
    if (rulerMode) {
      const point = hit?.point || view.groundPoint(event.clientX, event.clientY);
      const p = { x: point.x, y: Math.max(0, point.y), z: point.z };
      if (!rulerFirst) {
        rulerFirst = p;
        setStatus('尺子：点击第二个点。 · Ruler: click the second point.');
      } else {
        const distance = view.setRuler(rulerFirst, p);
        rulerFirst = null;
        rulerMode = false;
        rulerBtn.classList.remove('active');
        rulerBtn.setAttribute('aria-pressed', 'false');
        rulerReadout.textContent = `距离 · Distance: ${fmt(distance)} m`;
        setStatus(`距离 · Distance: ${fmt(distance)} m。 · 再次点击尺子可清除。 · Click Ruler again to clear.`);
      }
      return;
    }
    if (pendingLink) {
      let endpoint;
      const point = hit?.point || view.groundPoint(event.clientX, event.clientY);
      if (hit?.entity?.type === 'body') {
        endpoint = { type: 'body', id: hit.entity.id };
      } else if (assists.connect) {
        const nearBody = nearestBodyToPoint(point, 1.8);
        const nearAnchor = nearestAnchorToPoint(point, 1.2);
        if (nearBody) endpoint = { type: 'body', id: nearBody.id };
        else if (nearAnchor) endpoint = nearAnchor;
        else endpoint = addAnchor(point.x, Math.max(0, point.y), point.z);
      } else {
        endpoint = addAnchor(point.x, Math.max(0, point.y), point.z);
      }
      if (!pendingLink.first) {
        pendingLink.first = endpoint;
        if (endpoint.type === 'body') {
          const b = getBody(world, endpoint.id);
          if (b) view.flashSnap?.(b.cannon.position);
        }
        setStatus('点击第二个端点（物体或地面锚点）。 · Click the second endpoint (body or ground anchor).');
        return;
      }
      const first = pendingLink.first;
      if (first.type === 'body' && endpoint.type === 'body' && first.id === endpoint.id) {
        setStatus('起点和终点不能是同一个物体。 · The two endpoints must be different.', true);
        return;
      }
      if (first.type === 'anchor' && endpoint.type === 'anchor') {
        setStatus('连接至少需要一个物体端点。 · A link needs at least one body endpoint.', true);
        return;
      }
      const meter = pendingLink.kind === 'meter';
      const nonlinear = pendingLink.kind === 'nonlinear';
      pushUndo('link');
      const link = addLink(world, {
        a: first,
        b: endpoint,
        k: meter ? 220 : nonlinear ? 18 : 25,
        beta: nonlinear ? 8 : 0,
        rest: null,
        meter,
      });
      pendingLink = null;
      if (!link) {
        setStatus('无法创建连接。 · Could not create the link.', true);
        return;
      }
      captureInitial(world);
      view.sync(world);
      select(link);
      renderOutliner();
      updateEmpty();
      const pa = endpoint.type === 'anchor' ? endpoint : getBody(world, endpoint.id)?.cannon.position;
      if (pa) view.flashSnap?.(pa);
      setStatus('连接已创建；更多设置中可调节 k、β 与原长。 · Link created; adjust k, β and rest length in More settings.');
      return;
    }
    if (hit?.entity) {
      const entity = entityById(hit.entity.type, hit.entity.id);
      if (entity) {
        select(entity);
        renderOutliner();
        setStatus(`已选择：${labelText(...kindLabel(entity))} · 拖动可直接移动 · Drag to move directly`);
      }
      return;
    }
    select(null);
    setStatus('自由实验室：从上方「添加器材」开始。 · Free lab: start with Add above.');
  }

  function handleTransform(entityRef, object) {
    if (!entityRef) return;
    const entity = entityById(entityRef.type, entityRef.id);
    if (!entity) return;
    if (gizmoMode === 'scale' && scaleSession && scaleSession.start) {
      const x = Math.abs(object.scale.x);
      const y = Math.abs(object.scale.y);
      const z = Math.abs(object.scale.z);
      const factor = Math.max(0.05, (x + y + z) / 3);
      applyScaleFrom(scaleSession.start, factor, null);
      object.scale.set(1, 1, 1);
      return;
    }
    if (entity.type === 'surface') {
      entity.body.position.set(object.position.x, object.position.y, object.position.z);
      entity.body.quaternion.set(object.quaternion.x, object.quaternion.y, object.quaternion.z, object.quaternion.w);
      entity.angle = zAngle(object.quaternion) / (Math.PI / 180);
      const attached = world.bodies.filter((b) => b.attachment?.type === 'surface' && b.attachment.id === entity.id);
      for (const b of attached) repositionSurfaceBody(world, b);
      snapNearbyBodies(world, 1.2);
    } else if (entity.type === 'loop') {
      entity.x = object.position.x;
      entity.y = object.position.y;
      entity.z = object.position.z;
      for (const b of world.bodies) {
        if (b.attachment?.type === 'loop' && b.attachment.id === entity.id) {
          b.cannon.position.copy(loopPoint(entity, b.attachment.theta));
        }
      }
    } else if (entity.type === 'turntable') {
      entity.x = object.position.x;
      entity.y = object.position.y;
      entity.z = object.position.z;
      entity.body.position.set(entity.x, entity.y, entity.z);
      entity.body.aabbNeedsUpdate = true;
      for (const b of world.bodies) {
        if (b.attachment?.type === 'turntable' && b.attachment.id === entity.id) {
          b.cannon.position.set(
            entity.x + b.attachment.r * Math.cos(b.attachment.phi),
            entity.y + 0.06 + b.halfHeight,
            entity.z + b.attachment.r * Math.sin(b.attachment.phi),
          );
        }
      }
    } else if (entity.type === 'hcircle') {
      entity.x = object.position.x;
      entity.y = object.position.y;
      entity.z = object.position.z;
      for (const b of world.bodies) {
        if (b.attachment?.type === 'hcircle' && b.attachment.id === entity.id) {
          b.cannon.position.set(
            entity.x + entity.radius * Math.cos(b.attachment.phi),
            entity.y + b.halfHeight + 0.01,
            entity.z + entity.radius * Math.sin(b.attachment.phi),
          );
        }
      }
    } else if (entity.type === 'launcher') {
      entity.x = object.position.x;
      entity.y = object.position.y;
      entity.z = object.position.z;
      entity.target = launcherPrediction(world, entity);
    } else if (entity.type === 'pulley') {
      entity.x = object.position.x;
      entity.y = object.position.y;
      entity.z = object.position.z;
      for (const b of world.bodies) {
        if (b.rope?.pulleyId === entity.id) {
          b.cannon.position.x = entity.x + (b.rope.side === 'a' ? -entity.radius : entity.radius);
          b.cannon.position.z = entity.z;
          b.cannon.aabbNeedsUpdate = true;
        }
      }
    } else if (entity.type === 'barrier') {
      entity.x = object.position.x;
      entity.y = object.position.y;
      entity.z = object.position.z;
      entity.body.position.set(entity.x, entity.y + entity.height / 2, entity.z);
      entity.body.quaternion.set(object.quaternion.x, object.quaternion.y, object.quaternion.z, object.quaternion.w);
      entity.angle = (zAngle(object.quaternion) / Math.PI) * 180;
      entity.body.aabbNeedsUpdate = true;
    } else if (entity.type === 'pendulum') {
      entity.x = object.position.x;
      entity.y = object.position.y;
      entity.z = object.position.z;
    } else if (entity.type === 'wedge') {
      entity.x = object.position.x;
      entity.baseY = object.position.y;
      entity.z = object.position.z;
      entity.body.position.set(entity.x, entity.baseY + entity.centroidY, entity.z);
      entity.body.quaternion.set(object.quaternion.x, object.quaternion.y, object.quaternion.z, object.quaternion.w);
      entity.body.aabbNeedsUpdate = true;
    } else if (entity.type === 'sensor') {
      entity.x = object.position.x;
      entity.y = object.position.y;
      entity.z = object.position.z;
    } else if (entity.type === 'body') {
      if (entity.attachment) detachBody(world, entity);
      entity.cannon.position.set(object.position.x, object.position.y, object.position.z);
      entity.cannon.quaternion.set(object.quaternion.x, object.quaternion.y, object.quaternion.z, object.quaternion.w);
      entity.cannon.velocity.setZero();
      entity.cannon.angularVelocity.setZero();
      entity.cannon.aabbNeedsUpdate = true;
    }
  }

  function handleDragEnd(entityRef) {
    if (!entityRef) return;
    const entity = entityById(entityRef.type, entityRef.id);
    if (!entity) return;
    if (entity.type === 'body') {
      const hit = assists.snap && !shiftHeld ? snapBodyToNearest(world, entity, { maxDistance: 2.4 }) : null;
      if (hit) {
        flashSeat(entity);
        setStatus('已自动吸附到装置。 · Auto-snapped to apparatus.');
      }
    } else if (entity.type === 'surface' || entity.type === 'loop' || entity.type === 'turntable'
      || entity.type === 'hcircle' || entity.type === 'wedge' || entity.type === 'pendulum') {
      snapNearbyBodies(world, 2);
    }
    captureInitial(world);
    view.sync(world);
    buildInspector();
    renderOutliner();
    updateEmpty();
    clearHistory();
    updateUndoButtons();
  }

  function handleDirectDragStart(entityRef) {
    if (!entityRef || running) return;
    const entity = entityById(entityRef.type, entityRef.id);
    if (!entity || entity.type !== 'body') return;
    select(entity);
    pushUndo('direct-drag');
    prepareEdit();
    if (entity.attachment) detachBody(world, entity);
    entity.cannon.velocity.setZero();
    entity.cannon.angularVelocity.setZero();
    setStatus('拖动中：松开后自动吸附 · Dragging; release to auto-snap');
  }

  function handleDirectDrag(entityRef, point) {
    const entity = entityById(entityRef?.type, entityRef?.id);
    if (!entity || entity.type !== 'body' || !point) return;
    entity.cannon.position.set(point.x, Math.max(entity.halfHeight + 0.02, point.y), point.z);
    entity.cannon.aabbNeedsUpdate = true;
    view.sync(world);
  }

  function handleDirectDragEnd(entityRef) {
    const entity = entityById(entityRef?.type, entityRef?.id);
    if (!entity || entity.type !== 'body') return;
    const hit = assists.snap && !shiftHeld ? snapBodyToNearest(world, entity, { maxDistance: 2.4 }) : null;
    if (hit) {
      flashSeat(entity);
      setStatus('已自动吸附到最近表面。 · Auto-snapped to the nearest surface.');
    } else {
      entity.cannon.position.y = entity.halfHeight + 0.02;
      entity.cannon.velocity.setZero();
      applyInitialVelocity(world, entity);
      setStatus(shiftHeld ? '吸附已跳过（Shift）。 · Snap skipped with Shift.' : '已放置。 · Placed.');
    }
    captureInitial(world);
    view.sync(world);
    buildInspector();
    renderOutliner();
    updateEmpty();
    clearHistory();
    updateUndoButtons();
  }

  function handleVelocityDrag(entityRef, point, phase) {
    const entity = entityById(entityRef?.type, entityRef?.id);
    if (!entity || entity.type !== 'body' || !point) return;
    const p = entity.cannon.position;
    const dx = point.x - p.x;
    const dz = point.z - p.z;
    entity.v0 = Math.max(0, Math.min(20, Math.hypot(dx, dz)));
    entity.azimuth = (Math.atan2(dz, dx) * 180) / Math.PI;
    entity.elevation = 0;
    if (!running && world.time === 0) applyInitialVelocity(world, entity);
    const v0Input = inspectorBody.querySelector('[data-field="v0"]');
    const azInput = inspectorBody.querySelector('[data-field="azimuth"]');
    if (v0Input) v0Input.value = fmtInput(entity.v0);
    if (azInput) azInput.value = fmtInput(entity.azimuth);
    view.sync(world);
    if (phase === 'end') {
      captureInitial(world);
      buildInspector();
      setStatus(`初速度 · Initial speed: ${fmt(entity.v0)} m/s · ${fmt(entity.azimuth)}°`);
    }
  }

  function handleAngleDrag(entityRef, angle, phase) {
    const entity = entityById(entityRef?.type, entityRef?.id);
    if (!entity || entity.type !== 'surface') return;
    setSurfaceAngle(world, entity, Math.max(-60, Math.min(60, angle)));
    view.sync(world);
    const input = inspectorBody.querySelector('[data-field="angle"]');
    if (input) input.value = fmtInput(entity.angle);
    if (phase === 'end') {
      captureInitial(world);
      buildInspector();
      setStatus(`倾角 · Incline angle: ${fmt(entity.angle)}°`);
    }
  }

  function deleteSelected() {
    if (!selected) return;
    const entity = entityById(selected.type, selected.id);
    if (!entity) return;
    deleteEntity(entity);
  }

  function clearScene() {
    pushUndo();
    running = false;
    clearWorld(world);
    captureInitial(world);
    selected = null;
    pendingLink = null;
    view.setSelection(null);
    view.clearTrail();
    view.clearRuler();
    view.sync(world);
    buildInspector();
    renderOutliner();
    updateEmpty();
    updateTransport();
    clearHistory();
    resetGraphs();
    setStatus('场景已清空。 · Scene cleared. 从面板添加器材重新开始。');
  }

  function play() {
    if (running) return;
    if (!world.initial) captureInitial(world);
    if (scrubIndex >= 0 && scrubIndex < history.length - 1) {
      history = history.slice(0, scrubIndex + 1);
    }
    scrubIndex = -1;
    if (world.time === 0) {
      view.clearTrail();
      resetGraphs();
    }
    running = true;
    lastFrame = performance.now();
    updateTransport();
    buildInspector();
  }
  function pause() {
    running = false;
    updateTransport();
    buildInspector();
  }
  function reset() {
    running = false;
    resetWorld(world);
    view.sync(world);
    view.clearTrail();
    updateTransport();
    buildInspector();
    updateLive();
    clearHistory();
    resetGraphs();
    setStatus('已回到你设置的初始条件。 · Reset to your initial conditions.');
  }
  function step() {
    running = false;
    stepOnce(world);
    view.sync(world);
    updateTransport();
    buildInspector();
    updateLive();
  }

  playBtn.addEventListener('click', () => { if (running) pause(); else play(); });
  stepBtn.addEventListener('click', step);
  resetBtn.addEventListener('click', reset);
  clearBtn.addEventListener('click', clearScene);
  addBtn.addEventListener('click', () => { if (addMenu.hidden) openAddMenu(); else closeAddMenu(); });
  moreBtn.addEventListener('click', () => { if (morePanel.hidden) openMore(); else closeMore(); });
  root.querySelector('[data-action="more-close"]')?.addEventListener('click', closeMore);
  root.querySelector('[data-action="inspector-close"]')?.addEventListener('click', () => openInspector(false));

  function applySnapSettings() {
    const active = snapOn && !shiftHeld;
    view.transform.translationSnap = active ? gridStep : null;
    view.transform.rotationSnap = active ? (angleStepDeg * Math.PI) / 180 : null;
    view.transform.scaleSnap = active ? 0.1 : null;
    snapToggleBtn.classList.toggle('active', snapOn);
    snapToggleBtn.setAttribute('aria-pressed', snapOn ? 'true' : 'false');
  }

  autoSnapToggle.addEventListener('change', () => {
    assists.snap = autoSnapToggle.checked;
    setStatus(assists.snap ? '自动吸附已开启。 · Auto-snap on.' : '自动吸附已关闭。 · Auto-snap off.');
  });
  autoConnectToggle.addEventListener('change', () => {
    assists.connect = autoConnectToggle.checked;
    setStatus(assists.connect ? '自动连接已开启。 · Auto-connect on.' : '自动连接已关闭。 · Auto-connect off.');
  });
  autoPlaceToggle.addEventListener('change', () => {
    assists.placement = autoPlaceToggle.checked;
    setStatus(assists.placement ? '智能放置已开启。 · Smart placement on.' : '智能放置已关闭。 · Smart placement off.');
  });
  directToggle.addEventListener('change', () => {
    assists.direct = directToggle.checked;
    view.setHandleVisibility?.(!running && assists.direct);
    setStatus(assists.direct ? '直接拖动已开启。 · Direct manipulation on.' : '直接拖动已关闭。 · Direct manipulation off.');
  });
  root.querySelector('[data-field="gridStep"]')?.addEventListener('change', (e) => {
    const value = Number(e.target.value);
    if (Number.isFinite(value) && value > 0) gridStep = value;
    applySnapSettings();
  });
  root.querySelector('[data-field="angleStep"]')?.addEventListener('change', (e) => {
    const value = Number(e.target.value);
    if (Number.isFinite(value) && value > 0) angleStepDeg = value;
    applySnapSettings();
  });
  const energyToggle = root.querySelector('[data-toggle="energy"]');
  energyToggle?.addEventListener('change', () => {
    energy.hidden = !energyToggle.checked;
  });
  const stepSizeSelect = root.querySelector('[data-field="stepSize"]');
  stepSizeSelect?.addEventListener('change', () => {
    const value = Number(stepSizeSelect.value);
    if (Number.isFinite(value) && value > 0) {
      world.h = value;
      setStatus(`物理步长：${value.toFixed(5)} s。 · Physics step: ${value.toFixed(5)} s.`);
    }
  });

  root.querySelectorAll('[data-view]').forEach((btn) => {
    btn.addEventListener('click', () => view.setView(btn.dataset.view));
  });
  root.querySelectorAll('[data-gizmo]').forEach((btn) => {
    btn.addEventListener('click', () => {
      gizmoMode = btn.dataset.gizmo;
      root.querySelectorAll('[data-gizmo]').forEach((b) => b.classList.toggle('active', b === btn));
      view.transform.enabled = !running && gizmoMode !== 'off';
      view.setGizmoMode(gizmoMode);
    });
  });
  root.querySelector('[data-force-toggle]')?.addEventListener('change', (e) => {
    view.setForceVisible(e.target.checked);
    legend.dataset.off = e.target.checked ? '0' : '1';
  });
  const timeScaleInput = root.querySelector('[data-field="timeScale"]');
  const timeScaleOut = root.querySelector('[data-readout="timeScale"]');
  timeScaleInput?.addEventListener('input', () => {
    timeScale = Number(timeScaleInput.value);
    timeScaleOut.textContent = `×${timeScale.toFixed(2)}`;
  });

  undoBtn.addEventListener('click', undo);
  redoBtn.addEventListener('click', redo);
  dupBtn.addEventListener('click', duplicateSelected);
  frameBtn.addEventListener('click', () => {
    if (view.frameSelected()) setStatus('已聚焦所选对象。 · Framed selection.');
    else setStatus('场景中没有可聚焦的对象。 · Nothing to frame.', true);
  });
  rulerBtn.addEventListener('click', () => {
    if (rulerMode) {
      rulerMode = false;
      rulerFirst = null;
      view.clearRuler();
      rulerBtn.classList.remove('active');
      rulerBtn.setAttribute('aria-pressed', 'false');
      rulerReadout.textContent = '尺子关闭 · Ruler off';
      setStatus('尺子已关闭。 · Ruler off.');
    } else {
      rulerMode = true;
      rulerFirst = null;
      rulerBtn.classList.add('active');
      rulerBtn.setAttribute('aria-pressed', 'true');
      rulerReadout.textContent = '点击两点 · Click two points';
      setStatus('尺子：点击两个点测量距离。 · Ruler: click two points to measure the distance.');
      closeMore();
    }
  });
  snapToggleBtn.addEventListener('click', () => {
    snapOn = !snapOn;
    applySnapSettings();
    setStatus(snapOn
      ? `手柄吸附已开启：${gridStep} m / ${angleStepDeg}°。 · Gizmo snap on.`
      : '手柄吸附已关闭。 · Gizmo snap off.');
  });
  trailToggleBtn.addEventListener('click', () => {
    trailOn = !trailOn;
    trailToggleBtn.classList.toggle('active', trailOn);
    trailToggleBtn.setAttribute('aria-pressed', trailOn ? 'true' : 'false');
    view.setTrailVisible(trailOn);
    if (!trailOn) setStatus('轨迹已关闭。 · Trail off.');
    else setStatus('轨迹已开启：运行后记录所选物体的路径。 · Trail on: records the selected body path while running.');
  });
  graphToggleBtn.addEventListener('click', () => {
    setGraphs(!graphsOn);
    if (graphsOn) {
      resetGraphs();
      setStatus('实时曲线已开启。 · Live graphs on.');
    } else {
      setStatus('实时曲线已关闭。 · Live graphs off.');
    }
  });

  saveBtn.addEventListener('click', saveScene);
  loadBtn.addEventListener('click', loadSavedScene);
  exportBtn.addEventListener('click', exportScene);
  importBtn.addEventListener('click', () => importInput.click());
  importInput.addEventListener('change', () => {
    importSceneFile(importInput.files?.[0]);
    importInput.value = '';
  });

  const scrubInput = root.querySelector('[data-field="scrub"]');
  scrubInput?.addEventListener('input', () => {
    if (!history.length) return;
    scrubTo(Number(scrubInput.value));
  });

  window.addEventListener('pointermove', onModalPointerMove);
  window.addEventListener('pointerdown', onModalPointerDown, true);
  document.addEventListener('focusin', onFocusIn);
  function onContextMenu(e) {
    if (!modal) return;
    e.preventDefault();
    cancelModal();
  }
  window.addEventListener('contextmenu', onContextMenu);

  root.querySelectorAll('[data-add]').forEach((btn) => {
    btn.addEventListener('click', () => addApparatus(btn.dataset.add));
  });

  function field(parent, cfg) {
    const {
      label: text,
      value,
      min,
      max,
      step: stp,
      unit,
      onChange,
      disabled = false,
      testid = '',
      hint = '',
    } = cfg;
    const wrap = el('div', { className: `plab-field${disabled ? ' is-disabled' : ''}` });
    const out = el('output', { className: 'plab-field-value', text: fmt(value) });
    const headRow = el('div', { className: 'plab-field-head' }, [
      el('label', { text: unit ? `${text} (${unit})` : text }),
      out,
    ]);
    const range = el('input', {
      type: 'range',
      className: 'plab-range',
      min: String(min),
      max: String(max),
      step: String(stp),
      value: String(Math.max(min, Math.min(max, value))),
      'aria-label': text,
      disabled,
    });
    const number = el('input', {
      type: 'number',
      className: 'plab-number',
      min: String(min),
      max: String(max),
      step: String(stp),
      value: fmtInput(value),
      'aria-label': text,
      disabled,
    });
    if (testid) {
      number.dataset.field = testid;
      range.dataset.field = `${testid}-range`;
    }
    const apply = (next, fromRange) => {
      if (!Number.isFinite(next)) return;
      out.textContent = fmt(next);
      range.value = String(Math.max(min, Math.min(max, next)));
      if (fromRange || document.activeElement !== number) number.value = fmtInput(next);
      pushUndo(`field:${testid || text}`);
      onChange(next);
    };
    range.addEventListener('input', () => apply(Number(range.value), true));
    number.addEventListener('input', () => {
      if (number.value === '' || number.value === '-') return;
      const next = Number(number.value);
      if (Number.isFinite(next)) apply(next, false);
    });
    wrap.append(headRow, el('div', { className: 'plab-field-inputs' }, [range, number]));
    if (hint) wrap.appendChild(el('p', { className: 'plab-field-hint', text: hint }));
    parent.appendChild(wrap);
    return { wrap, out, range, number };
  }

  function selectField(parent, { label: text, value, options, onChange, testid = '' }) {
    const wrap = el('div', { className: 'plab-field' });
    wrap.appendChild(el('div', { className: 'plab-field-head' }, [
      el('label', { text }),
    ]));
    const select = el('select', {
      className: 'plab-select hit-target',
      'data-field': testid,
      'aria-label': text,
    });
    for (const [val, labelTextValue] of options) {
      select.appendChild(el('option', {
        value: val,
        text: labelTextValue,
        selected: String(value) === String(val),
      }));
    }
    select.addEventListener('change', () => onChange(select.value));
    wrap.appendChild(select);
    parent.appendChild(wrap);
    return select;
  }

  function setFieldValue(handle, value, min, max, fmtValue = fmt) {
    if (!handle) return;
    handle.out.textContent = fmtValue(value);
    handle.range.value = String(Math.max(min, Math.min(max, value)));
    handle.number.value = fmtInput(value);
  }

  function frictionFields(parent, contact, disabled = false) {
    let sField = null;
    let kField = null;
    const sync = () => {
      setFieldValue(sField, contact.muS, 0, 1.5);
      setFieldValue(kField, contact.muK, 0, 1.5);
    };
    sField = field(parent, {
      label: '静摩擦因数 · μs',
      value: contact.muS,
      min: 0,
      max: 1.5,
      step: 0.01,
      disabled,
      testid: 'muS',
      onChange: (v) => {
        contact.muS = Math.max(0, v);
        if (contact.muK > contact.muS) contact.muK = contact.muS;
        sync();
      },
    });
    kField = field(parent, {
      label: '动摩擦因数 · μk',
      value: contact.muK,
      min: 0,
      max: 1.5,
      step: 0.01,
      disabled,
      testid: 'muK',
      onChange: (v) => {
        contact.muK = Math.max(0, v);
        if (contact.muK > contact.muS) contact.muS = contact.muK;
        sync();
      },
    });
  }

  function addLive(parent, text, key, unit = '') {
    const value = el('strong', { text: '—', 'data-live': key });
    const row = el('div', { className: 'plab-readout' }, [
      el('span', { className: 'plab-readout-label', text }),
      value,
    ]);
    parent.appendChild(row);
    liveNodes.set(key, { node: value, unit });
  }

  function formula(parent, tex) {
    const node = el('div', { className: 'plab-formula', 'aria-label': '公式 · Formula' });
    parent.appendChild(node);
    renderTex(node, tex);
  }

  let resonanceCanvas = null;

  function drawResonance(osc) {
    const canvas = resonanceCanvas;
    if (!canvas) return;
    const css = getComputedStyle(root);
    const ink = css.getPropertyValue('--text').trim() || '#222';
    const muted = css.getPropertyValue('--text-muted').trim() || '#666';
    const accent = css.getPropertyValue('--accent-active').trim() || '#1a56c4';
    const paper = css.getPropertyValue('--canvas-plot').trim() || '#fff';
    const border = css.getPropertyValue('--border').trim() || '#ccc';
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    const w = Math.max(180, Math.round(rect.width || 260));
    const h = 180;
    if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
      canvas.width = w * dpr;
      canvas.height = h * dpr;
    }
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = paper;
    ctx.fillRect(0, 0, w, h);
    const pad = { l: 40, r: 10, t: 12, b: 30 };
    const plotW = w - pad.l - pad.r;
    const plotH = h - pad.t - pad.b;
    const w0 = osc.omega0 || 1;
    const wMax = Math.max(1.6 * w0, osc.driveOmega * 1.25, 0.5);
    let aMax = 0;
    for (let i = 0; i <= 120; i += 1) {
      const omega = (i / 120) * wMax;
      aMax = Math.max(aMax, oscillatorAnalyticAmplitude(osc, omega));
    }
    aMax = Math.max(aMax, osc.measuredAmplitude || 0, 0.01) * 1.12;
    const xOf = (omega) => pad.l + (omega / wMax) * plotW;
    const yOf = (amp) => pad.t + plotH - (amp / aMax) * plotH;
    ctx.strokeStyle = border;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(pad.l, pad.t);
    ctx.lineTo(pad.l, pad.t + plotH);
    ctx.lineTo(pad.l + plotW, pad.t + plotH);
    ctx.stroke();
    ctx.fillStyle = muted;
    ctx.font = '10px ui-monospace, monospace';
    ctx.fillText('A (m)', 2, pad.t + 8);
    ctx.fillText('ω (rad/s)', pad.l + plotW - 58, h - 6);
    if (osc.driveOn && osc.driveF0 > 0) {
      ctx.strokeStyle = accent;
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      for (let i = 0; i <= 160; i += 1) {
        const omega = (i / 160) * wMax;
        const amp = oscillatorAnalyticAmplitude(osc, omega);
        const x = xOf(omega);
        const y = yOf(amp);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
    // Natural frequency marker.
    ctx.setLineDash([3, 3]);
    ctx.strokeStyle = border;
    ctx.beginPath();
    ctx.moveTo(xOf(w0), pad.t);
    ctx.lineTo(xOf(w0), pad.t + plotH);
    ctx.stroke();
    ctx.setLineDash([]);
    // Current driving frequency and measured amplitude.
    const cx = xOf(Math.min(wMax, osc.driveOmega));
    ctx.strokeStyle = muted;
    ctx.beginPath();
    ctx.moveTo(cx, pad.t);
    ctx.lineTo(cx, pad.t + plotH);
    ctx.stroke();
    if (osc.measuredAmplitude > 0) {
      const cy = yOf(osc.measuredAmplitude);
      ctx.fillStyle = accent;
      ctx.fillRect(cx - 3.5, cy - 3.5, 7, 7);
    }
    ctx.fillStyle = muted;
    ctx.fillText('ω₀', xOf(w0) + 3, pad.t + 10);
  }

  function inspectorHeading(parent, entity) {
    const [zh, en] = kindLabel(entity);
    parent.appendChild(el('div', { className: 'plab-inspector-head' }, [
      el('h2', { className: 'plab-panel-title', text: labelText(zh, en) }),
      el('span', { className: 'plab-inspector-kind', text: entity.type === 'link' ? (entity.meter ? '测量 · Measurement' : '连接 · Link') : '装置 · Apparatus' }),
    ]));
  }

  function contactControls(parent, entity) {
    let contact = null;
    if (entity.type === 'body' && entity.attachment) {
      if (entity.attachment.type === 'surface') contact = getSurface(world, entity.attachment.id);
      else if (entity.attachment.type === 'turntable') contact = getTurntable(world, entity.attachment.id);
      else if (entity.attachment.type === 'hcircle') contact = getHCircle(world, entity.attachment.id);
    }
    if (!contact) return;
    parent.appendChild(el('h3', { className: 'plab-section-title', text: '接触面 · Contact' }));
    frictionFields(parent, contact);
  }

  function buildInspector() {
    clear(inspectorBody);
    inspectorSummary = null;
    if (!selected) {
      inspectorBody.appendChild(el('p', {
        className: 'plab-inspector-empty',
        text: '未选择 · Nothing selected. 点击场景中的物体查看常用参数。 · Click an object to see its common parameters.',
      }));
      buildMoreAdvanced();
      return;
    }
    const entity = entityById(selected.type, selected.id);
    if (!entity) {
      selected = null;
      buildInspector();
      return;
    }
    inspectorHeading(inspectorBody, entity);
    const geoDisabled = running;
    const common = el('div', { className: 'plab-inspector-common' });
    inspectorBody.appendChild(common);
    buildMoreAdvanced();

    if (entity.type === 'surface') {
      field(common, {
        label: '斜面倾角 · Incline angle',
        value: entity.angle,
        min: -60,
        max: 60,
        step: 0.5,
        unit: '°',
        disabled: geoDisabled,
        testid: 'angle',
        onChange: (v) => {
          setSurfaceAngle(world, entity, v);
          captureInitial(world);
          view.sync(world);
        },
      });
      field(common, {
        label: '表面长度 · Surface length',
        value: entity.length,
        min: 1,
        max: 24,
        step: 0.2,
        unit: 'm',
        disabled: geoDisabled,
        testid: 'length',
        onChange: (v) => {
          setSurfaceLength(world, entity, v);
          captureInitial(world);
          view.sync(world);
        },
      });
    } else if (entity.type === 'body') {
      field(common, {
        label: '质量 · Mass',
        value: entity.mass,
        min: 0.1,
        max: 20,
        step: 0.1,
        unit: 'kg',
        testid: 'mass',
        onChange: (v) => { setBodyMass(world, entity, v); },
      });
      field(common, {
        label: '初速度 · Initial speed',
        value: entity.v0,
        min: 0,
        max: 20,
        step: 0.1,
        unit: 'm/s',
        testid: 'v0',
        hint: '重置后生效 · Applies on reset.',
        onChange: (v) => {
          entity.v0 = v;
          if (!running && world.time === 0) { applyInitialVelocity(world, entity); captureInitial(world); }
        },
      });
      field(common, {
        label: '方向方位角 · Direction azimuth',
        value: entity.azimuth,
        min: 0,
        max: 360,
        step: 1,
        unit: '°',
        testid: 'azimuth',
        onChange: (v) => {
          entity.azimuth = v;
          if (!running && world.time === 0) { applyInitialVelocity(world, entity); captureInitial(world); }
        },
      });
    } else if (entity.type === 'loop') {
      field(common, {
        label: '圆环半径 · Loop radius',
        value: entity.radius,
        min: 0.4,
        max: 5,
        step: 0.05,
        unit: 'm',
        disabled: geoDisabled,
        testid: 'radius',
        onChange: (v) => { setLoopRadius(world, entity, v); view.sync(world); },
      });
    } else if (entity.type === 'turntable') {
      field(common, {
        label: '转盘半径 · Radius',
        value: entity.radius,
        min: 0.5,
        max: 6,
        step: 0.05,
        unit: 'm',
        disabled: geoDisabled,
        testid: 'radius',
        onChange: (v) => { setTurntableRadius(world, entity, v); view.sync(world); },
      });
      field(common, {
        label: '目标角速度 · Target ω',
        value: entity.targetOmega,
        min: -12,
        max: 12,
        step: 0.1,
        unit: 'rad/s',
        testid: 'targetOmega',
        onChange: (v) => {
          entity.targetOmega = v;
          if (entity.drive === 'target') entity.omega = v;
        },
      });
    } else if (entity.type === 'hcircle') {
      field(common, {
        label: '轨道半径 · Track radius',
        value: entity.radius,
        min: 0.5,
        max: 6,
        step: 0.05,
        unit: 'm',
        disabled: geoDisabled,
        testid: 'radius',
        onChange: (v) => { setHCircleRadius(world, entity, v); view.sync(world); },
      });
    } else if (entity.type === 'launcher') {
      field(common, {
        label: '发射角 · Launch angle',
        value: entity.angle,
        min: -10,
        max: 85,
        step: 1,
        unit: '°',
        testid: 'launchAngle',
        onChange: (v) => {
          entity.angle = v;
          entity.target = launcherPrediction(world, entity);
          if (world.time === 0) captureInitial(world);
          view.sync(world);
        },
      });
      field(common, {
        label: '发射速度 · Launch speed',
        value: entity.speed,
        min: 0,
        max: 25,
        step: 0.1,
        unit: 'm/s',
        testid: 'launchSpeed',
        onChange: (v) => {
          entity.speed = v;
          entity.target = launcherPrediction(world, entity);
          if (world.time === 0) captureInitial(world);
          view.sync(world);
        },
      });
      field(common, {
        label: '发射高度 · Launch height',
        value: entity.height,
        min: 0.1,
        max: 4,
        step: 0.05,
        unit: 'm',
        testid: 'launchHeight',
        onChange: (v) => {
          entity.height = v;
          entity.target = launcherPrediction(world, entity);
          if (world.time === 0) captureInitial(world);
          view.sync(world);
        },
      });
      field(common, {
        label: '抛射体质量 · Projectile mass',
        value: entity.mass,
        min: 0.02,
        max: 5,
        step: 0.02,
        unit: 'kg',
        testid: 'projectileMass',
        onChange: (v) => { entity.mass = Math.max(0.01, v); },
      });
      const fire = el('button', {
        type: 'button',
        className: 'plab-inspector-more plab-fire hit-target',
        text: '发射 · Fire',
        'data-action': 'launcher-fire',
      });
      fire.addEventListener('click', () => {
        fireLauncher(world, entity);
        if (!running) play();
        view.sync(world);
        updateLive();
        setStatus(`已发射：${fmt(entity.speed)} m/s，${fmt(entity.angle)}°。 · Fired at ${fmt(entity.speed)} m/s, ${fmt(entity.angle)}°.`);
      });
      common.appendChild(fire);
      const readouts = el('div', { className: 'plab-readouts' });
      addLive(readouts, '射程 · Range', 'launchRange', 'm');
      addLive(readouts, '最大高度 · Max height', 'launchHeightMax', 'm');
      addLive(readouts, '飞行时间 · Flight time', 'launchTime', 's');
      common.appendChild(readouts);
    } else if (entity.type === 'pulley') {
      field(common, {
        label: '滑轮质量 · Pulley mass',
        value: entity.mass,
        min: 0,
        max: 20,
        step: 0.1,
        unit: 'kg',
        testid: 'pulleyMass',
        onChange: (v) => { entity.mass = Math.max(0, v); },
      });
      field(common, {
        label: '转动惯量 I · Moment of inertia',
        value: entity.I,
        min: 0,
        max: 5,
        step: 0.005,
        unit: 'kg·m²',
        testid: 'pulleyInertia',
        onChange: (v) => { entity.I = Math.max(0, v); },
      });
      const readouts = el('div', { className: 'plab-readouts' });
      addLive(readouts, '绳张力 A · Tension A', 'tensionA', 'N');
      addLive(readouts, '绳张力 B · Tension B', 'tensionB', 'N');
      common.appendChild(readouts);
    } else if (entity.type === 'barrier') {
      field(common, {
        label: '恢复系数 e · Restitution',
        value: entity.e,
        min: 0,
        max: 1,
        step: 0.01,
        testid: 'restitution',
        onChange: (v) => { setBarrierRestitution(world, entity, v); },
      });
      const readouts = el('div', { className: 'plab-readouts' });
      addLive(readouts, '碰撞前动量 · p in', 'impactPIn', 'kg·m/s');
      addLive(readouts, '碰撞后动量 · p out', 'impactPOut', 'kg·m/s');
      addLive(readouts, '碰撞前动能 · KE in', 'impactKEIn', 'J');
      addLive(readouts, '碰撞后动能 · KE out', 'impactKEOut', 'J');
      addLive(readouts, '实测恢复系数 · e measured', 'impactE', '');
      common.appendChild(readouts);
    } else if (entity.type === 'pendulum') {
      field(common, {
        label: '摆长 · Length',
        value: entity.length,
        min: 0.2,
        max: 5,
        step: 0.05,
        unit: 'm',
        testid: 'pendulumLength',
        onChange: (v) => { entity.length = Math.max(0.2, v); },
      });
      field(common, {
        label: '摆球质量 · Bob mass',
        value: entity.mass,
        min: 0.05,
        max: 20,
        step: 0.05,
        unit: 'kg',
        testid: 'pendulumMass',
        onChange: (v) => { entity.mass = Math.max(0.01, v); },
      });
      field(common, {
        label: '振幅 · Amplitude',
        value: entity.amplitude,
        min: 1,
        max: 80,
        step: 1,
        unit: '°',
        testid: 'pendulumAmplitude',
        onChange: (v) => {
          entity.amplitude = Math.max(1, Math.min(89, v));
          if (!running && world.time === 0) resetPendulum(entity);
        },
      });
      const readouts = el('div', { className: 'plab-readouts' });
      addLive(readouts, '周期（实测）· Period measured', 'pendulumMeasured', 's');
      addLive(readouts, '小角周期 · Small-angle T', 'pendulumTheory', 's');
      addLive(readouts, '摆角 · Angle', 'pendulumAngle', 'rad');
      addLive(readouts, '绳张力 · Tension', 'pendulumTension', 'N');
      common.appendChild(readouts);
    } else if (entity.type === 'wedge') {
      field(common, {
        label: '楔质量 · Wedge mass',
        value: entity.mass,
        min: 0.2,
        max: 30,
        step: 0.1,
        unit: 'kg',
        testid: 'wedgeMass',
        onChange: (v) => { setWedgeMass(world, entity, v); },
      });
      field(common, {
        label: '楔角 · Wedge angle',
        value: entity.angle,
        min: 5,
        max: 60,
        step: 1,
        unit: '°',
        testid: 'wedgeAngle',
        onChange: (v) => {
          rebuildWedge(world, entity, { angle: v });
          view.sync(world);
        },
      });
      const readouts = el('div', { className: 'plab-readouts' });
      addLive(readouts, '楔速度 · Wedge speed', 'wedgeSpeed', 'm/s');
      addLive(readouts, '楔位移 · Wedge x', 'wedgeX', 'm');
      addLive(readouts, '地面摩擦 · Floor μ', 'wedgeMu', '');
      common.appendChild(readouts);
    } else if (entity.type === 'sensor') {
      if (entity.kind === 'photogate') {
        field(common, {
          label: '门宽 · Gate width',
          value: entity.width,
          min: 0.4,
          max: 4,
          step: 0.05,
          unit: 'm',
          testid: 'gateWidth',
          onChange: (v) => { entity.width = Math.max(0.4, v); view.sync(world); },
        });
        field(common, {
          label: '门高 · Gate height',
          value: entity.height,
          min: 0.3,
          max: 3,
          step: 0.05,
          unit: 'm',
          testid: 'gateHeight',
          onChange: (v) => { entity.height = Math.max(0.3, v); view.sync(world); },
        });
      } else {
        field(common, {
          label: '量程 · Range',
          value: entity.range,
          min: 1,
          max: 20,
          step: 0.5,
          unit: 'm',
          testid: 'sensorRange',
          onChange: (v) => { entity.range = Math.max(0.5, v); },
        });
      }
      const readouts = el('div', { className: 'plab-readouts' });
      addLive(readouts, entity.kind === 'photogate' ? '通过时刻 · Crossing t' : '距离 · Distance', 'sensorPrimary', entity.kind === 'photogate' ? 's' : 'm');
      addLive(readouts, entity.kind === 'photogate' ? '通过速率 · Speed' : '径向速度 · Radial v', 'sensorSpeed', 'm/s');
      addLive(readouts, '采样点 · Samples', 'sensorSamples', '');
      common.appendChild(readouts);
    } else if (entity.type === 'oscillator') {
      resonanceCanvas = null;
      field(common, {
        label: '质量 m · Mass',
        value: entity.mass,
        min: 0.1,
        max: 10,
        step: 0.1,
        unit: 'kg',
        testid: 'oscMass',
        onChange: (v) => {
          entity.mass = Math.max(0.05, v);
          entity.omega0 = Math.sqrt(entity.k / entity.mass);
        },
      });
      field(common, {
        label: '劲度系数 k · Spring constant',
        value: entity.k,
        min: 0.5,
        max: 60,
        step: 0.5,
        unit: 'N/m',
        testid: 'oscK',
        onChange: (v) => {
          entity.k = Math.max(0, v);
          entity.omega0 = Math.sqrt(entity.k / Math.max(0.01, entity.mass));
        },
      });
      field(common, {
        label: '阻尼 b · Damping',
        value: entity.b,
        min: 0,
        max: 12,
        step: 0.05,
        unit: 'N·s/m',
        testid: 'oscDamping',
        onChange: (v) => { entity.b = Math.max(0, v); },
      });
      field(common, {
        label: '驱动力幅值 F₀ · Drive force',
        value: entity.driveF0,
        min: 0,
        max: 10,
        step: 0.05,
        unit: 'N',
        testid: 'oscDriveForce',
        onChange: (v) => { entity.driveF0 = Math.max(0, v); },
      });
      const curveWrap = el('div', { className: 'plab-resonance' });
      curveWrap.appendChild(el('p', { className: 'plab-field-hint', text: '幅频曲线 · Amplitude–frequency curve（实测方块对应当前 ω · square = measured at current ω）' }));
      resonanceCanvas = el('canvas', {
        className: 'plab-resonance-canvas',
        'aria-label': '共振曲线 · Resonance curve',
      });
      curveWrap.appendChild(resonanceCanvas);
      common.appendChild(curveWrap);
      const readouts = el('div', { className: 'plab-readouts' });
      addLive(readouts, '当前振幅（实测）· Amplitude measured', 'oscAmplitude', 'm');
      addLive(readouts, '稳态理论 A(ω) · Analytic A(ω)', 'oscAnalytic', 'm');
      addLive(readouts, '固有频率 ω₀ · Natural ω₀', 'oscOmega0', 'rad/s');
      addLive(readouts, '阻尼状态 · Damping regime', 'oscRegime', '');
      addLive(readouts, '自由周期（实测）· Free period', 'oscPeriod', 's');
      common.appendChild(readouts);
      formula(common, 'A(\\omega)=\\dfrac{F_0}{\\sqrt{(k-m\\omega^2)^2+(b\\omega)^2}},\\qquad \\omega_0=\\sqrt{\\dfrac{k}{m}}');
    } else if (entity.type === 'torsion') {
      field(common, {
        label: '转动惯量 I · Moment of inertia',
        value: entity.I,
        min: 0.05,
        max: 8,
        step: 0.01,
        unit: 'kg·m²',
        testid: 'torsionI',
        onChange: (v) => { entity.I = Math.max(0.001, v); },
      });
      field(common, {
        label: '扭转常数 κ · Torsion constant',
        value: entity.kappa,
        min: 0.05,
        max: 8,
        step: 0.01,
        unit: 'N·m/rad',
        testid: 'torsionKappa',
        onChange: (v) => { entity.kappa = Math.max(0.001, v); },
      });
      field(common, {
        label: '初始扭转角 · Initial twist',
        value: (entity.theta0 * 180) / Math.PI,
        min: 1,
        max: 90,
        step: 1,
        unit: '°',
        disabled: geoDisabled,
        testid: 'torsionAmplitude',
        onChange: (v) => {
          entity.theta0 = (Math.max(1, Math.min(90, v)) * Math.PI) / 180;
          if (!running && world.time === 0) {
            entity.theta = entity.theta0;
            entity.prevTheta = entity.theta;
            entity.omega = 0;
            entity.lastCross = null;
            entity.measuredPeriod = 0;
            captureInitial(world);
          }
        },
      });
      const readouts = el('div', { className: 'plab-readouts' });
      addLive(readouts, '周期（实测）· Period measured', 'torsionMeasured', 's');
      addLive(readouts, '理论周期 · 2π√(I/κ)', 'torsionTheory', 's');
      addLive(readouts, '扭转角 · Twist angle', 'torsionAngle', 'rad');
      addLive(readouts, '角速度 · Angular speed', 'torsionOmega', 'rad/s');
      common.appendChild(readouts);
      formula(common, 'T=2\\pi\\sqrt{\\dfrac{I}{\\kappa}},\\qquad I=\\dfrac{1}{2}mR^2');
    } else if (entity.type === 'fan') {
      field(common, {
        label: '恒定推力 · Constant thrust',
        value: entity.thrust,
        min: 0,
        max: 40,
        step: 0.1,
        unit: 'N',
        testid: 'fanThrust',
        onChange: (v) => { entity.thrust = Math.max(0, v); },
      });
      const on = el('input', { type: 'checkbox', checked: !!entity.on, 'data-field': 'fanOn' });
      on.addEventListener('change', () => {
        pushUndo('fan-on');
        entity.on = on.checked;
      });
      common.appendChild(el('label', { className: 'plab-check hit-target' }, [
        on,
        el('span', { text: '开启风扇 · Fan on' }),
      ]));
      const readouts = el('div', { className: 'plab-readouts' });
      addLive(readouts, '推力 · Thrust', 'fanForce', 'N');
      addLive(readouts, '状态 · State', 'fanState', '');
      common.appendChild(readouts);
    } else if (entity.type === 'link') {
      field(common, {
        label: '劲度系数 k · Spring constant',
        value: entity.k,
        min: 0.1,
        max: 800,
        step: 0.5,
        unit: 'N/m',
        testid: 'k',
        onChange: (v) => { entity.k = Math.max(0, v); },
      });
      field(common, {
        label: '原长 · Rest length',
        value: entity.rest,
        min: 0.05,
        max: 20,
        step: 0.05,
        unit: 'm',
        disabled: geoDisabled,
        testid: 'rest',
        onChange: (v) => { entity.rest = Math.max(0.02, v); },
      });
    }

    inspectorSummary = el('p', { className: 'plab-inspector-live', 'aria-live': 'polite', text: '—' });
    inspectorBody.appendChild(inspectorSummary);
    if (entity.type === 'body') {
      inspectorBody.appendChild(el('p', {
        className: 'plab-field-hint',
        text: '按住物体直接拖动；抓住箭头设初速度。 · Drag the body itself; grab the arrow to set initial velocity.',
      }));
    }
    const openAdvanced = el('button', {
      type: 'button',
      className: 'plab-inspector-more hit-target',
      text: '更多参数 · More parameters',
      'data-action': 'inspector-more',
    });
    openAdvanced.addEventListener('click', openMore);
    inspectorBody.appendChild(openAdvanced);
  }

  function moreHeading(parent, entity) {
    const [zh, en] = kindLabel(entity);
    parent.appendChild(el('div', { className: 'plab-more-objecthead' }, [
      el('strong', { text: labelText(zh, en) }),
      el('span', { text: entity.name || entityFallbackName(entity) }),
    ]));
  }

  function buildMoreAdvanced() {
    clear(moreAdvanced);
    liveNodes.clear();
    if (!selected) {
      moreAdvanced.appendChild(el('p', {
        className: 'plab-inspector-empty',
        text: '未选择 · Nothing selected. 选中物体后在这里编辑全部参数。 · Select an object to edit every parameter here.',
      }));
      return;
    }
    const entity = entityById(selected.type, selected.id);
    if (!entity) {
      selected = null;
      moreAdvanced.appendChild(el('p', {
        className: 'plab-inspector-empty',
        text: '未选择 · Nothing selected.',
      }));
      return;
    }
    moreHeading(moreAdvanced, entity);
    const geoDisabled = running;

    if (entity.type === 'surface') {
      frictionFields(moreAdvanced, entity);
      const flip = el('button', { type: 'button', className: 'plab-action hit-target', text: '翻转坡度 · Flip slope' });
      flip.addEventListener('click', () => {
        pushUndo('flip');
        prepareEdit();
        setSurfaceAngle(world, entity, -entity.angle);
        captureInitial(world);
        view.sync(world);
        buildInspector();
      });
      moreAdvanced.appendChild(flip);
      if (geoDisabled) moreAdvanced.appendChild(el('p', { className: 'plab-field-hint', text: '暂停后可调整几何 · Pause to edit geometry.' }));
      formula(moreAdvanced, 'N=mg\\cos\\theta,\\qquad |f_{s}|\\le \\mu_{s}N');
    }

    if (entity.type === 'body') {
      if (entity.kind === 'cart') {
        field(moreAdvanced, {
          label: '半径 · Radius',
          value: entity.radius,
          min: 0.12,
          max: 0.8,
          step: 0.01,
          unit: 'm',
          disabled: geoDisabled,
          testid: 'radius',
          onChange: (v) => {
            setCartRadius(world, entity, v);
            captureInitial(world);
            view.sync(world);
          },
        });
        field(moreAdvanced, {
          label: '转动惯量 I · Moment of inertia',
          value: entity.I,
          min: 0,
          max: 80,
          step: 0.01,
          unit: 'kg·m²',
          testid: 'inertia',
          onChange: (v) => { setCartInertia(world, entity, v); },
        });
        const quick = el('div', { className: 'plab-tool-row' });
        const disc = el('button', { type: 'button', className: 'plab-action hit-target', text: '圆盘 · Disc' });
        const hoop = el('button', { type: 'button', className: 'plab-action hit-target', text: '圆环 · Hoop' });
        disc.addEventListener('click', () => {
          pushUndo('inertia');
          setCartInertia(world, entity, 0.5 * entity.mass * entity.radius ** 2);
          buildInspector();
        });
        hoop.addEventListener('click', () => {
          pushUndo('inertia');
          setCartInertia(world, entity, entity.mass * entity.radius ** 2);
          buildInspector();
        });
        quick.append(disc, hoop);
        moreAdvanced.appendChild(quick);
        const brakeCheck = el('input', { type: 'checkbox', checked: !!entity.brake, 'data-field': 'brake' });
        brakeCheck.addEventListener('change', () => { pushUndo('brake'); entity.brake = brakeCheck.checked; });
        moreAdvanced.appendChild(el('label', { className: 'plab-check hit-target' }, [
          brakeCheck,
          el('span', { text: '刹车（锁定车轴） · Brake (lock axle)' }),
        ]));
        const motorCheck = el('input', { type: 'checkbox', checked: !!entity.motor?.on, 'data-field': 'motor' });
        motorCheck.addEventListener('change', () => {
          pushUndo('motor');
          entity.motor = entity.motor || { on: false, target: 0, force: 2 };
          entity.motor.on = motorCheck.checked;
        });
        moreAdvanced.appendChild(el('label', { className: 'plab-check hit-target' }, [
          motorCheck,
          el('span', { text: '电机 · Motor' }),
        ]));
        field(moreAdvanced, {
          label: '目标速度 · Motor target',
          value: entity.motor?.target ?? 0,
          min: -10,
          max: 10,
          step: 0.1,
          unit: 'm/s',
          testid: 'motorTarget',
          onChange: (v) => {
            entity.motor = entity.motor || { on: false, target: 0, force: 2 };
            entity.motor.target = v;
          },
        });
        field(moreAdvanced, {
          label: '最大驱动力 · Max drive force',
          value: entity.motor?.force ?? 2,
          min: 0,
          max: 50,
          step: 0.5,
          unit: 'N',
          testid: 'motorForce',
          onChange: (v) => {
            entity.motor = entity.motor || { on: false, target: 0, force: 2 };
            entity.motor.force = Math.max(0, v);
          },
        });
      }
      if (entity.kind === 'ball' || entity.kind === 'cylinder') {
        field(moreAdvanced, {
          label: '半径 · Radius',
          value: entity.radius,
          min: 0.12,
          max: 0.6,
          step: 0.01,
          unit: 'm',
          disabled: geoDisabled,
          testid: 'rollingRadius',
          onChange: (v) => {
            setCartRadius(world, entity, v);
            entity.I = (entity.inertiaRatio ?? 0.5) * entity.mass * entity.radius ** 2;
            setCartInertia(world, entity, entity.I);
            captureInitial(world);
            view.sync(world);
          },
        });
        field(moreAdvanced, {
          label: '转动惯量比 I ÷ (m r²) · Inertia ratio',
          value: entity.inertiaRatio ?? (entity.I / Math.max(1e-9, entity.mass * entity.radius ** 2)),
          min: 0,
          max: 1.5,
          step: 0.01,
          testid: 'inertiaRatio',
          onChange: (v) => { setInertiaRatio(world, entity, v); },
        });
        const presets = el('div', { className: 'plab-tool-row' });
        [
          ['实心球 · Solid sphere', 2 / 5],
          ['空心球 · Hollow sphere', 2 / 3],
          ['实心圆柱 · Solid cylinder', 1 / 2],
          ['空心圆柱 · Hollow cylinder', 1],
        ].forEach(([text, ratio]) => {
          const btn = el('button', { type: 'button', className: 'plab-action hit-target', text });
          btn.addEventListener('click', () => {
            pushUndo('inertia');
            setInertiaRatio(world, entity, ratio);
            buildInspector();
          });
          presets.appendChild(btn);
        });
        moreAdvanced.appendChild(presets);
        formula(moreAdvanced, 'I=k\\,mr^{2},\\qquad a=\\dfrac{g\\sin\\theta}{1+I/(mr^{2})}');
      }
      field(moreAdvanced, {
        label: '方向仰角 · Direction elevation',
        value: entity.elevation,
        min: -90,
        max: 90,
        step: 1,
        unit: '°',
        testid: 'elevation',
        onChange: (v) => {
          entity.elevation = v;
          if (!running && world.time === 0) { applyInitialVelocity(world, entity); captureInitial(world); }
        },
      });
      field(moreAdvanced, {
        label: '外力大小 · Applied force',
        value: entity.appliedMag,
        min: 0,
        max: 200,
        step: 0.5,
        unit: 'N',
        testid: 'appliedMag',
        onChange: (v) => { entity.appliedMag = v; },
      });
      field(moreAdvanced, {
        label: '外力方位角 · Applied azimuth',
        value: entity.appliedAzimuth,
        min: -180,
        max: 180,
        step: 1,
        unit: '°',
        testid: 'appliedAzimuth',
        onChange: (v) => { entity.appliedAzimuth = v; },
      });
      field(moreAdvanced, {
        label: '外力仰角 · Applied elevation',
        value: entity.appliedElevation,
        min: -90,
        max: 90,
        step: 1,
        unit: '°',
        testid: 'appliedElevation',
        onChange: (v) => { entity.appliedElevation = v; },
      });
      moreAdvanced.appendChild(el('h4', { className: 'plab-section-title', text: '实时读数 · Live readouts' }));
      const readouts = el('div', { className: 'plab-readouts' });
      addLive(readouts, '速率 · Speed', 'speed', 'm/s');
      addLive(readouts, '加速度 · Acceleration', 'accel', 'm/s²');
      addLive(readouts, '支持力 N · Normal', 'normal', 'N');
      addLive(readouts, '摩擦力 · Friction', 'friction', 'N');
      addLive(readouts, '接触 · Contact', 'contact', '');
      addLive(readouts, '状态 · State', 'state', '');
      moreAdvanced.appendChild(readouts);
      contactControls(moreAdvanced, entity);
      const actions = el('div', { className: 'plab-tool-row' });
      const snap = el('button', { type: 'button', className: 'plab-action hit-target', text: '吸附 · Snap' });
      snap.addEventListener('click', () => {
        prepareEdit();
        if (snapBodyToNearest(world, entity, { maxDistance: 5 })) {
          captureInitial(world);
          view.sync(world);
          flashSeat(entity);
          buildInspector();
          setStatus('已吸附到最近的装置。 · Snapped to the nearest apparatus.');
        } else {
          setStatus('附近没有可吸附的装置。 · Nothing nearby to snap to.', true);
        }
      });
      actions.appendChild(snap);
      if (entity.attachment) {
        const detach = el('button', { type: 'button', className: 'plab-action hit-target', text: '脱离 · Detach' });
        detach.addEventListener('click', () => {
          prepareEdit();
          detachBody(world, entity);
          captureInitial(world);
          view.sync(world);
          buildInspector();
        });
        actions.appendChild(detach);
      }
      moreAdvanced.appendChild(actions);
      const contact = entity.attachment?.type === 'surface' ? 'incline' : entity.attachment?.type || 'free';
      formula(moreAdvanced, contact === 'loop'
        ? 'N=\\dfrac{mv^{2}}{R}+mg\\cos\\theta'
        : contact === 'turntable'
          ? 'f_{s}=m\\omega^{2}r\\le \\mu_{s}N'
          : contact === 'hcircle'
            ? '\\dfrac{mv^{2}}{R}\\le \\mu_{s}N'
            : 'f_{k}=\\mu_{k}N,\\qquad |f_{s}|\\le \\mu_{s}N');
    }

    if (entity.type === 'launcher') {
      field(moreAdvanced, {
        label: '抛射体半径 · Projectile radius',
        value: entity.radius,
        min: 0.02,
        max: 0.5,
        step: 0.01,
        unit: 'm',
        testid: 'projectileRadius',
        onChange: (v) => { entity.radius = Math.max(0.02, v); },
      });
      field(moreAdvanced, {
        label: '发射方位角 · Launch azimuth',
        value: entity.azimuth,
        min: -180,
        max: 180,
        step: 1,
        unit: '°',
        testid: 'launchAzimuth',
        onChange: (v) => {
          entity.azimuth = v;
          entity.target = launcherPrediction(world, entity);
          view.sync(world);
        },
      });
      selectField(moreAdvanced, {
        label: '空气阻力 · Air resistance',
        value: entity.drag,
        testid: 'launchDrag',
        options: [
          ['none', '无 · None'],
          ['linear', '线性 −b v · Linear'],
          ['quadratic', '二次 −c v² · Quadratic'],
        ],
        onChange: (v) => { entity.drag = v; },
      });
      field(moreAdvanced, {
        label: '线性阻力 b · Linear drag',
        value: entity.dragB,
        min: 0,
        max: 5,
        step: 0.01,
        unit: 'kg/s',
        testid: 'launchDragB',
        onChange: (v) => { entity.dragB = Math.max(0, v); },
      });
      field(moreAdvanced, {
        label: '二次阻力 c · Quadratic drag',
        value: entity.dragC,
        min: 0,
        max: 1,
        step: 0.005,
        unit: 'kg/m',
        testid: 'launchDragC',
        onChange: (v) => { entity.dragC = Math.max(0, v); },
      });
      formula(moreAdvanced, 'R=\\dfrac{v^{2}\\sin 2\\theta}{g},\\qquad v_{t}=\\dfrac{mg}{b}\\ \\text{or}\\ \\sqrt{\\dfrac{mg}{c}}');
      moreAdvanced.appendChild(el('p', {
        className: 'plab-field-hint',
        text: '发射按钮可在播放中使用；暂停时发射会自动开始。 · Fire works while playing; from pause it starts the run.',
      }));
    }

    if (entity.type === 'pulley') {
      field(moreAdvanced, {
        label: '滑轮半径 · Pulley radius',
        value: entity.radius,
        min: 0.1,
        max: 1,
        step: 0.01,
        unit: 'm',
        testid: 'pulleyRadius',
        onChange: (v) => { entity.radius = Math.max(0.1, v); },
      });
      selectField(moreAdvanced, {
        label: '配置 · Configuration',
        value: entity.mode,
        testid: 'pulleyMode',
        options: [
          ['atwood', '阿特伍德双悬挂 · Atwood'],
          ['table', '桌面—滑轮 · Block on table'],
        ],
        onChange: (v) => { entity.mode = v; },
      });
      const endpointRow = el('div', { className: 'plab-tool-row' });
      for (const side of ['a', 'b']) {
        const wrap = el('div', { className: 'plab-field' });
        wrap.appendChild(el('div', { className: 'plab-field-head' }, [
          el('label', { text: side === 'a' ? '端点 A · Endpoint A' : '端点 B · Endpoint B' }),
        ]));
        const select = el('select', {
          className: 'plab-select hit-target',
          'data-field': `pulleyEndpoint${side.toUpperCase()}`,
          'aria-label': side === 'a' ? '端点 A · Endpoint A' : '端点 B · Endpoint B',
        });
        select.appendChild(el('option', { value: '', text: '— 未连接 · Unconnected —' }));
        for (const body of world.bodies) {
          if (body.transient) continue;
          select.appendChild(el('option', {
            value: body.id,
            text: `${body.name || labelText(...kindLabel(body))} #${String(body.id).split('-').pop()}`,
            selected: (side === 'a' ? entity.aId : entity.bId) === body.id,
          }));
        }
        select.addEventListener('change', () => {
          const body = select.value ? getBody(world, select.value) : null;
          if (body) {
            attachBodyToPulley(world, body, entity.id, side);
          } else if (side === 'a') {
            entity.aId = null;
          } else {
            entity.bId = null;
          }
          view.sync(world);
          buildInspector();
        });
        wrap.appendChild(select);
        endpointRow.appendChild(wrap);
      }
      moreAdvanced.appendChild(endpointRow);
      const readouts = el('div', { className: 'plab-readouts' });
      addLive(readouts, '张力 A · Tension A', 'tensionA', 'N');
      addLive(readouts, '张力 B · Tension B', 'tensionB', 'N');
      addLive(readouts, '绳状态 · Rope', 'ropeState', '');
      moreAdvanced.appendChild(readouts);
      formula(moreAdvanced, 'a=\\dfrac{(m_{1}-m_{2})g}{m_{1}+m_{2}+I/r^{2}},\\qquad T_{1}=m_{1}(g-a)');
    }

    if (entity.type === 'barrier') {
      field(moreAdvanced, {
        label: '宽度 · Width',
        value: entity.width,
        min: 0.4,
        max: 8,
        step: 0.1,
        unit: 'm',
        testid: 'barrierWidth',
        onChange: (v) => { setBarrierSize(world, entity, { width: v }); view.sync(world); },
      });
      field(moreAdvanced, {
        label: '高度 · Height',
        value: entity.height,
        min: 0.2,
        max: 4,
        step: 0.05,
        unit: 'm',
        testid: 'barrierHeight',
        onChange: (v) => { setBarrierSize(world, entity, { height: v }); view.sync(world); },
      });
      const readouts = el('div', { className: 'plab-readouts' });
      addLive(readouts, '碰撞前动量 · p in', 'impactPIn', 'kg·m/s');
      addLive(readouts, '碰撞后动量 · p out', 'impactPOut', 'kg·m/s');
      addLive(readouts, '碰撞前动能 · KE in', 'impactKEIn', 'J');
      addLive(readouts, '碰撞后动能 · KE out', 'impactKEOut', 'J');
      addLive(readouts, '实测恢复系数 · e measured', 'impactE', '');
      moreAdvanced.appendChild(readouts);
      formula(moreAdvanced, 'e=\\dfrac{v_{\\text{out}}}{v_{\\text{in}}},\\qquad p=mv,\\qquad E_{k}=\\dfrac{1}{2}mv^{2}');
      moreAdvanced.appendChild(el('p', {
        className: 'plab-field-hint',
        text: '静态挡板的动量变化由墙提供；读数展示物体的碰前/碰后 p 与 KE。 · The static wall supplies the momentum change; readouts show the body p and KE before/after.',
      }));
    }

    if (entity.type === 'pendulum') {
      field(moreAdvanced, {
        label: '摆球半径 · Bob radius',
        value: entity.radius,
        min: 0.04,
        max: 0.4,
        step: 0.01,
        unit: 'm',
        testid: 'pendulumRadius',
        onChange: (v) => { entity.radius = Math.max(0.04, v); view.sync(world); },
      });
      const conical = el('input', { type: 'checkbox', checked: !!entity.conical, 'data-field': 'pendulumConical' });
      conical.addEventListener('change', () => {
        pushUndo('pendulum-conical');
        entity.conical = conical.checked;
        resetPendulum(entity);
      });
      moreAdvanced.appendChild(el('label', { className: 'plab-check hit-target' }, [
        conical,
        el('span', { text: '圆锥摆模式 · Conical pendulum' }),
      ]));
      field(moreAdvanced, {
        label: '摆角（圆锥）· Cone angle',
        value: entity.amplitude,
        min: 1,
        max: 80,
        step: 1,
        unit: '°',
        testid: 'coneAngle',
        onChange: (v) => {
          entity.amplitude = Math.max(1, Math.min(85, v));
          if (!running && world.time === 0) resetPendulum(entity);
        },
      });
      const readouts = el('div', { className: 'plab-readouts' });
      addLive(readouts, '实测周期 · Measured period', 'pendulumMeasured', 's');
      addLive(readouts, '小角周期 · 2π√(L/g)', 'pendulumTheory', 's');
      addLive(readouts, '摆角 · Angle', 'pendulumAngle', 'rad');
      addLive(readouts, '绳张力 · Tension', 'pendulumTension', 'N');
      moreAdvanced.appendChild(readouts);
      formula(moreAdvanced, 'T=2\\pi\\sqrt{\\dfrac{L}{g}},\\qquad T_{\\text{conical}}=\\dfrac{mg}{\\cos\\alpha}');
      moreAdvanced.appendChild(el('p', {
        className: 'plab-field-hint',
        text: '小角周期公式仅在小振幅下严格；实测周期按过零点计时。 · The small-angle formula is exact only at small amplitude; the measured period uses zero crossings.',
      }));
    }

    if (entity.type === 'wedge') {
      field(moreAdvanced, {
        label: '长度 · Length',
        value: entity.length,
        min: 0.8,
        max: 8,
        step: 0.1,
        unit: 'm',
        testid: 'wedgeLength',
        onChange: (v) => { rebuildWedge(world, entity, { length: v }); view.sync(world); },
      });
      field(moreAdvanced, {
        label: '宽度 · Width',
        value: entity.width,
        min: 0.4,
        max: 5,
        step: 0.1,
        unit: 'm',
        testid: 'wedgeWidth',
        onChange: (v) => { rebuildWedge(world, entity, { width: v }); view.sync(world); },
      });
      field(moreAdvanced, {
        label: '地面摩擦因数 · Floor μ',
        value: entity.muFloor,
        min: 0,
        max: 1,
        step: 0.01,
        testid: 'wedgeFloorMu',
        onChange: (v) => { setWedgeFloorFriction(world, entity, v); },
      });
      field(moreAdvanced, {
        label: '物块—楔摩擦因数 · Block μ',
        value: entity.blockMu,
        min: 0,
        max: 1,
        step: 0.01,
        testid: 'wedgeBlockMu',
        onChange: (v) => { setWedgeBlockFriction(world, entity, v); },
      });
      const readouts = el('div', { className: 'plab-readouts' });
      addLive(readouts, '楔速度 · Wedge speed', 'wedgeSpeed', 'm/s');
      addLive(readouts, '楔位移 · Wedge x', 'wedgeX', 'm');
      addLive(readouts, '地面摩擦 · Floor μ', 'wedgeMu', '');
      moreAdvanced.appendChild(readouts);
      formula(moreAdvanced, 'm_{w}v_{w}+m_{b}v_{b,x}=0\\ \\text{(frictionless floor)}');
      moreAdvanced.appendChild(el('p', {
        className: 'plab-field-hint',
        text: '先选中可动楔，再添加方块，方块会落在斜面上。 · Select the wedge first, then add a block; it drops onto the slope.',
      }));
    }

    if (entity.type === 'sensor') {
      if (entity.kind === 'photogate') {
        field(moreAdvanced, {
          label: '门宽 · Gate width',
          value: entity.width,
          min: 0.4,
          max: 5,
          step: 0.05,
          unit: 'm',
          testid: 'gateWidthAdvanced',
          onChange: (v) => { entity.width = Math.max(0.4, v); view.sync(world); },
        });
        field(moreAdvanced, {
          label: '门高 · Gate height',
          value: entity.height,
          min: 0.3,
          max: 4,
          step: 0.05,
          unit: 'm',
          testid: 'gateHeightAdvanced',
          onChange: (v) => { entity.height = Math.max(0.3, v); view.sync(world); },
        });
      } else {
        field(moreAdvanced, {
          label: '量程 · Range',
          value: entity.range,
          min: 1,
          max: 20,
          step: 0.5,
          unit: 'm',
          testid: 'sensorRangeAdvanced',
          onChange: (v) => { entity.range = Math.max(0.5, v); },
        });
        selectField(moreAdvanced, {
          label: '朝向 · Facing',
          value: String(entity.face),
          testid: 'sensorFace',
          options: [['1', '向右 +x · Right'], ['-1', '向左 −x · Left']],
          onChange: (v) => { entity.face = Number(v) || 1; },
        });
      }
      const readouts = el('div', { className: 'plab-readouts' });
      addLive(readouts, entity.kind === 'photogate' ? '通过时刻 · Crossing t' : '距离 · Distance', 'sensorPrimary', entity.kind === 'photogate' ? 's' : 'm');
      addLive(readouts, entity.kind === 'photogate' ? '通过速率 · Speed' : '径向速度 · Radial v', 'sensorSpeed', 'm/s');
      addLive(readouts, '采样点 · Samples', 'sensorSamples', '');
      moreAdvanced.appendChild(readouts);
      const events = el('div', { className: 'plab-readouts' });
      const last = entity.crossings?.length ? entity.crossings[entity.crossings.length - 1] : null;
      addLive(events, '最近事件 · Last event', 'sensorEvent', '');
      moreAdvanced.appendChild(events);
      formula(moreAdvanced, entity.kind === 'photogate'
        ? 't_{\\text{gate}},\\qquad v=\\dfrac{\\Delta x}{\\Delta t}'
        : 'x(t),\\qquad v_{x}=\\dfrac{dx}{dt}');
      moreAdvanced.appendChild(el('p', {
        className: 'plab-field-hint',
        text: last
          ? `最近通过 · Last crossing: t=${fmt(last.t)} s, v=${fmt(last.v)} m/s`
          : '打开实时曲线后，选中传感器即可绘制 x–t。 · Open Graphs and select the sensor to plot x–t.',
      }));
    }

    if (entity.type === 'oscillator') {
      field(moreAdvanced, {
        label: '驱动角频率 ω · Drive frequency',
        value: entity.driveOmega,
        min: 0.1,
        max: 12,
        step: 0.01,
        unit: 'rad/s',
        testid: 'oscDriveOmega',
        onChange: (v) => { entity.driveOmega = Math.max(0.01, v); },
      });
      field(moreAdvanced, {
        label: '初始位移 · Initial displacement',
        value: entity.initial?.u ?? entity.u,
        min: 0,
        max: 2,
        step: 0.01,
        unit: 'm',
        disabled: geoDisabled,
        testid: 'oscAmplitude0',
        onChange: (v) => {
          entity.initial = { u: Math.max(0, v), v: 0, time: 0 };
          if (!running && world.time === 0) {
            entity.u = entity.initial.u;
            entity.v = 0;
            entity.prevU = entity.u;
          }
          captureInitial(world);
        },
      });
      const driveOn = el('input', { type: 'checkbox', checked: !!entity.driveOn, 'data-field': 'oscDriveOn' });
      driveOn.addEventListener('change', () => {
        pushUndo('osc-drive');
        entity.driveOn = driveOn.checked;
        entity.measuredAmplitude = 0;
        entity.cycleIndex = -1;
      });
      moreAdvanced.appendChild(el('label', { className: 'plab-check hit-target' }, [
        driveOn,
        el('span', { text: '开启驱动力 · Driving on' }),
      ]));
      const readouts = el('div', { className: 'plab-readouts' });
      addLive(readouts, '阻尼比 ζ · Damping ratio', 'oscZeta', '');
      addLive(readouts, '阻尼角频率 ωd · Damped ωd', 'oscOmegaD', 'rad/s');
      addLive(readouts, '稳态理论 A(ω) · Analytic A(ω)', 'oscAnalytic', 'm');
      addLive(readouts, '理论固有周期 T₀ · Natural T₀', 'oscT0', 's');
      moreAdvanced.appendChild(readouts);
      formula(moreAdvanced, '\\zeta=\\dfrac{b}{2\\sqrt{km}},\\qquad \\omega_d=\\sqrt{\\omega_0^2-\\left(\\dfrac{b}{2m}\\right)^2},\\qquad T_0=\\dfrac{2\\pi}{\\omega_0}');
      moreAdvanced.appendChild(el('p', {
        className: 'plab-field-hint',
        text: '驱动力 F₀cos(ωt)；阻尼力 −bv。 · Driving force F₀cos(ωt); damping force −bv. 稳态振幅在瞬态衰减后测量。 · Steady amplitude is measured after the transient decays.',
      }));
    }

    if (entity.type === 'torsion') {
      field(moreAdvanced, {
        label: '圆盘质量 · Disk mass',
        value: entity.mass,
        min: 0.1,
        max: 20,
        step: 0.1,
        unit: 'kg',
        testid: 'torsionMass',
        onChange: (v) => { entity.mass = Math.max(0.05, v); },
      });
      field(moreAdvanced, {
        label: '圆盘半径 · Disk radius',
        value: entity.radius,
        min: 0.1,
        max: 3,
        step: 0.05,
        unit: 'm',
        testid: 'torsionRadius',
        onChange: (v) => {
          entity.radius = Math.max(0.05, v);
          entity.I = 0.5 * entity.mass * entity.radius * entity.radius;
        },
      });
      field(moreAdvanced, {
        label: '阻尼系数 · Damping',
        value: entity.damping,
        min: 0,
        max: 2,
        step: 0.01,
        testid: 'torsionDamping',
        onChange: (v) => { entity.damping = Math.max(0, v); },
      });
      const readouts = el('div', { className: 'plab-readouts' });
      addLive(readouts, '周期（实测）· Period measured', 'torsionMeasured', 's');
      addLive(readouts, '理论周期 · 2π√(I/κ)', 'torsionTheory', 's');
      moreAdvanced.appendChild(readouts);
      formula(moreAdvanced, 'I\\ddot{\\theta}+\\kappa\\theta=0,\\qquad T=2\\pi\\sqrt{\\dfrac{I}{\\kappa}}');
      moreAdvanced.appendChild(el('p', {
        className: 'plab-field-hint',
        text: '实测周期按同向过零点计时。 · The measured period uses successive zero crossings in the same direction.',
      }));
    }

    if (entity.type === 'fan') {
      field(moreAdvanced, {
        label: '推力方位角 · Thrust azimuth',
        value: entity.azimuth,
        min: -180,
        max: 180,
        step: 1,
        unit: '°',
        testid: 'fanAzimuth',
        onChange: (v) => { entity.azimuth = v; },
      });
      field(moreAdvanced, {
        label: '推力仰角 · Thrust elevation',
        value: entity.elevation,
        min: -90,
        max: 90,
        step: 1,
        unit: '°',
        testid: 'fanElevation',
        onChange: (v) => { entity.elevation = v; },
      });
      const readouts = el('div', { className: 'plab-readouts' });
      addLive(readouts, '推力 · Thrust', 'fanForce', 'N');
      addLive(readouts, '状态 · State', 'fanState', '');
      moreAdvanced.appendChild(readouts);
      formula(moreAdvanced, 'F_{\\text{fan}}=\\text{const},\\qquad a=\\dfrac{F_{\\text{fan}}-f}{m}');
      moreAdvanced.appendChild(el('p', {
        className: 'plab-field-hint',
        text: '可随时关闭；附着在所选小车或物体上。 · Switch it off anytime; it stays attached to the selected cart or body.',
      }));
    }

    if (entity.type === 'loop') {
      formula(moreAdvanced, 'N=\\dfrac{mv^{2}}{R}+mg\\cos\\theta');
      moreAdvanced.appendChild(el('p', { className: 'plab-field-hint', text: 'N < 0 时物体离开轨道成为抛体。 · When N < 0 the body leaves the track and becomes a projectile.' }));
    }

    if (entity.type === 'turntable') {
      field(moreAdvanced, {
        label: '转动惯量 I · Moment of inertia',
        value: entity.I,
        min: 0.01,
        max: 200,
        step: 0.1,
        unit: 'kg·m²',
        testid: 'inertia',
        onChange: (v) => { entity.I = Math.max(0.001, v); },
      });
      const driveWrap = el('div', { className: 'plab-field' });
      driveWrap.appendChild(el('div', { className: 'plab-field-head' }, [
        el('label', { text: '驱动方式 · Drive' }),
      ]));
      const driveSelect = el('select', { className: 'plab-select hit-target', 'data-field': 'drive', 'aria-label': '驱动方式 · Drive' });
      [
        ['target', '目标角速度 · Target ω'],
        ['torque', '恒定力矩 · Torque'],
        ['free', '自由 · Free'],
      ].forEach(([value, text]) => driveSelect.appendChild(el('option', { value, text, selected: entity.drive === value })));
      driveSelect.addEventListener('change', () => {
        setTurntableDrive(world, entity, driveSelect.value);
        if (world.time === 0) captureInitial(world);
        buildInspector();
      });
      driveWrap.appendChild(driveSelect);
      moreAdvanced.appendChild(driveWrap);
      field(moreAdvanced, {
        label: '驱动力矩 · Drive torque',
        value: entity.torque,
        min: -80,
        max: 80,
        step: 0.5,
        unit: 'N·m',
        testid: 'torque',
        onChange: (v) => { entity.torque = v; },
      });
      frictionFields(moreAdvanced, entity);
      const readouts = el('div', { className: 'plab-readouts' });
      addLive(readouts, '角速度 ω · Angular speed', 'omega', 'rad/s');
      addLive(readouts, '转角 · Angle', 'tableAngle', 'rad');
      moreAdvanced.appendChild(readouts);
      formula(moreAdvanced, 'f_{s}=m\\omega^{2}r\\le \\mu_{s}N');
    }

    if (entity.type === 'hcircle') {
      frictionFields(moreAdvanced, entity);
      formula(moreAdvanced, '\\dfrac{mv^{2}}{R}\\le \\mu_{s}N');
    }

    if (entity.type === 'link') {
      field(moreAdvanced, {
        label: '非线性系数 β · Nonlinear coefficient',
        value: entity.beta,
        min: 0,
        max: 300,
        step: 0.5,
        unit: 'N/m³',
        testid: 'beta',
        onChange: (v) => { entity.beta = Math.max(0, v); },
      });
      const readouts = el('div', { className: 'plab-readouts' });
      addLive(readouts, '轴向读数 · Axial reading', 'reading', 'N');
      moreAdvanced.appendChild(readouts);
      formula(moreAdvanced, entity.meter
        ? 'F=\\left|kx+\\beta x^{3}\\right|'
        : 'F=-kx-\\beta x^{3},\\qquad U=\\dfrac{1}{2}kx^{2}+\\dfrac{1}{4}\\beta x^{4}');
    }

    const actions = el('div', { className: 'plab-tool-row' });
    const del = el('button', { type: 'button', className: 'plab-action plab-action-quiet hit-target', text: '删除所选 · Delete selected', 'data-action': 'delete' });
    del.addEventListener('click', deleteSelected);
    actions.appendChild(del);
    moreAdvanced.appendChild(actions);
  }

  function updateLive() {
    const entity = selected ? entityById(selected.type, selected.id) : null;
    const setLive = (key, value) => {
      const cell = liveNodes.get(key);
      if (cell) cell.node.textContent = value;
    };
    if (entity?.type === 'body') {
      const d = bodyDiagnostics(world, entity);
      setLive('speed', `${fmt(d.speed)} m/s`);
      setLive('accel', `${fmt(d.accel)} m/s²`);
      setLive('normal', `${fmt(d.normal)} N`);
      setLive('friction', `${fmt(d.friction)} N`);
      setLive('contact', contactLabel(d.contact || d.mode));
      let stateText = '动摩擦 / 滑动 · Sliding';
      if (d.mode === 'free') stateText = '自由 / 抛体 · Free';
      else if (d.mode === 'loop') stateText = '轨道约束 · On track';
      else if (d.mode === 'turntable' || d.mode === 'hcircle') stateText = d.static ? '约束 · Constrained' : '打滑 / 滑动 · Slipping';
      else if ((entity.kind === 'cart' || entity.kind === 'ball' || entity.kind === 'cylinder') && d.rolling) stateText = '滚动 · Rolling';
      else if ((entity.kind === 'cart' || entity.kind === 'ball' || entity.kind === 'cylinder') && !d.static) stateText = '滑动 · Sliding';
      else if (d.static) stateText = '静摩擦 · Static';
      setLive('state', stateText);
    } else if (entity?.type === 'link') {
      setLive('reading', `${fmt(linkReading(world, entity))} N`);
    } else if (entity?.type === 'turntable') {
      setLive('omega', `${fmt(entity.omega)} rad/s`);
      setLive('tableAngle', `${fmt(entity.angle)} rad`);
    } else if (entity?.type === 'launcher') {
      const f = entity.flight;
      setLive('launchRange', f ? `${fmt(f.range)} m` : '—');
      setLive('launchHeightMax', f ? `${fmt(f.maxHeight)} m` : '—');
      setLive('launchTime', f ? `${fmt(f.flightTime)} s` : '—');
    } else if (entity?.type === 'pulley') {
      setLive('tensionA', `${fmt(entity.tensionA)} N`);
      setLive('tensionB', `${fmt(entity.tensionB)} N`);
      setLive('ropeState', entity.slack ? '松弛 · Slack' : '张紧 · Taut');
    } else if (entity?.type === 'barrier') {
      const hit = entity.lastImpact;
      setLive('impactPIn', hit ? `${fmt(hit.pInMag)}` : '—');
      setLive('impactPOut', hit ? `${fmt(hit.pOutMag)}` : '—');
      setLive('impactKEIn', hit ? `${fmt(hit.keIn)}` : '—');
      setLive('impactKEOut', hit ? `${fmt(hit.keOut)}` : '—');
      setLive('impactE', hit ? fmt(hit.measuredE) : '—');
    } else if (entity?.type === 'pendulum') {
      setLive('pendulumMeasured', entity.measuredPeriod ? `${fmt(entity.measuredPeriod)}` : '—');
      setLive('pendulumTheory', fmt(pendulumPeriod(entity, world.g)));
      setLive('pendulumAngle', `${fmt(entity.theta)} rad`);
      setLive('pendulumTension', `${fmt(entity.tension)} N`);
    } else if (entity?.type === 'wedge') {
      setLive('wedgeSpeed', `${fmt(entity.body.velocity.length())} m/s`);
      setLive('wedgeX', `${fmt(entity.body.position.x - entity.x)} m`);
      setLive('wedgeMu', fmt(entity.muFloor));
    } else if (entity?.type === 'sensor') {
      if (entity.kind === 'photogate') {
        const last = entity.lastCrossing;
        setLive('sensorPrimary', last ? `${fmt(last.t)}` : '—');
        setLive('sensorSpeed', last ? `${fmt(last.v)}` : '—');
        setLive('sensorEvent', last ? `t=${fmt(last.t)} s · v=${fmt(last.v)} m/s` : '—');
      } else {
        setLive('sensorPrimary', entity.lastDistance != null ? `${fmt(entity.lastDistance)}` : '—');
        setLive('sensorSpeed', entity.lastSpeed != null ? `${fmt(entity.lastSpeed)}` : '—');
        setLive('sensorEvent', entity.lastDistance != null ? `x=${fmt(entity.lastDistance)} m` : '—');
      }
      setLive('sensorSamples', String(entity.samples.length));
    } else if (entity?.type === 'fan') {
      setLive('fanForce', `${fmt(entity.on ? entity.thrust : 0)} N`);
      setLive('fanState', entity.on ? '开启 · On' : '关闭 · Off');
    } else if (entity?.type === 'oscillator') {
      setLive('oscAmplitude', `${fmt(entity.measuredAmplitude)} m`);
      setLive('oscAnalytic', `${fmt(oscillatorAnalyticAmplitude(entity))} m`);
      setLive('oscOmega0', `${fmt(entity.omega0)} rad/s`);
      const regime = oscillatorRegime(entity);
      const regimeText = regime === 'undamped' ? '无阻尼 · Undamped'
        : regime === 'under' ? '欠阻尼 · Underdamped'
          : regime === 'critical' ? '临界阻尼 · Critical'
            : '过阻尼 · Overdamped';
      setLive('oscRegime', regimeText);
      setLive('oscPeriod', entity.measuredPeriod ? `${fmt(entity.measuredPeriod)} s` : '—');
      setLive('oscZeta', fmt(oscillatorDampingRatio(entity)));
      setLive('oscOmegaD', `${fmt(oscillatorDampedOmega(entity))} rad/s`);
      setLive('oscT0', `${fmt((2 * Math.PI) / Math.max(1e-6, entity.omega0))} s`);
      drawResonance(entity);
    } else if (entity?.type === 'torsion') {
      setLive('torsionMeasured', entity.measuredPeriod ? `${fmt(entity.measuredPeriod)}` : '—');
      setLive('torsionTheory', `${fmt(torsionPeriod(entity))}`);
      setLive('torsionAngle', `${fmt(entity.theta)} rad`);
      setLive('torsionOmega', `${fmt(entity.omega)} rad/s`);
    }
    if (inspectorSummary) {
      if (entity?.type === 'body') {
        const d = bodyDiagnostics(world, entity);
        inspectorSummary.textContent = `速率 · Speed ${fmt(d.speed)} m/s · ${contactLabel(d.contact || d.mode)}`;
      } else if (entity?.type === 'link') {
        inspectorSummary.textContent = `轴向读数 · Reading ${fmt(linkReading(world, entity))} N`;
      } else if (entity?.type === 'turntable') {
        inspectorSummary.textContent = `角速度 · ω ${fmt(entity.omega)} rad/s`;
      } else if (entity?.type === 'surface') {
        inspectorSummary.textContent = `倾角 · Angle ${fmt(entity.angle)}° · μs ${fmt(entity.muS)} · μk ${fmt(entity.muK)}`;
      } else if (entity?.type === 'launcher') {
        const f = entity.flight;
        inspectorSummary.textContent = f
          ? `射程 · Range ${fmt(f.range)} m · 最大高度 · Max ${fmt(f.maxHeight)} m · 时间 · Time ${fmt(f.flightTime)} s`
          : `发射角 · ${fmt(entity.angle)}° · ${fmt(entity.speed)} m/s · 高度 · ${fmt(entity.height)} m`;
      } else if (entity?.type === 'pulley') {
        inspectorSummary.textContent = `张力 · T ${fmt(entity.tensionA)} / ${fmt(entity.tensionB)} N · ${entity.slack ? '松弛 · Slack' : '张紧 · Taut'}`;
      } else if (entity?.type === 'barrier') {
        const hit = entity.lastImpact;
        inspectorSummary.textContent = hit
          ? `p ${fmt(hit.pInMag)}→${fmt(hit.pOutMag)} kg·m/s · KE ${fmt(hit.keIn)}→${fmt(hit.keOut)} J`
          : `恢复系数 · e ${fmt(entity.e)} · 等待碰撞 · awaiting impact`;
      } else if (entity?.type === 'pendulum') {
        inspectorSummary.textContent = `T ${entity.measuredPeriod ? fmt(entity.measuredPeriod) : '—'} s · 小角 · small-angle ${fmt(pendulumPeriod(entity, world.g))} s`;
      } else if (entity?.type === 'wedge') {
        inspectorSummary.textContent = `楔速度 · Wedge ${fmt(entity.body.velocity.length())} m/s · μ ${fmt(entity.muFloor)}`;
      } else if (entity?.type === 'sensor') {
        const last = entity.lastCrossing;
        inspectorSummary.textContent = entity.kind === 'photogate'
          ? (last ? `通过 · Crossing t=${fmt(last.t)} s · v=${fmt(last.v)} m/s` : '等待通过 · waiting for a crossing')
          : (entity.lastDistance != null ? `距离 · Distance ${fmt(entity.lastDistance)} m · v=${fmt(entity.lastSpeed)} m/s` : '无目标 · no target');
      } else if (entity?.type === 'fan') {
        inspectorSummary.textContent = `${entity.on ? '开启 · On' : '关闭 · Off'} · ${fmt(entity.thrust)} N · ${fmt(entity.azimuth)}°`;
      } else if (entity?.type === 'oscillator') {
        inspectorSummary.textContent = `A ${fmt(entity.measuredAmplitude)} m · A(ω) ${fmt(oscillatorAnalyticAmplitude(entity))} m · ω₀ ${fmt(entity.omega0)} rad/s`;
      } else if (entity?.type === 'torsion') {
        inspectorSummary.textContent = `T ${entity.measuredPeriod ? fmt(entity.measuredPeriod) : '—'} s · 理论 · theory ${fmt(torsionPeriod(entity))} s`;
      } else {
        inspectorSummary.textContent = '—';
      }
    }
    const e = energyBreakdown(world);
    const energyMap = {
      translational: e.translational,
      rotational: e.rotational,
      gravitational: e.gravitational,
      elastic: e.elastic,
      thermal: e.thermal,
      mechanical: e.mechanical,
      appliedWork: e.appliedWork,
      total: e.total,
    };
    for (const [key, value] of Object.entries(energyMap)) {
      const node = energy.querySelector(`[data-energy="${key}"]`);
      if (node) node.textContent = `${fmt(value)} J`;
    }
    const clockNode = root.querySelector('[data-readout="time"]');
    if (clockNode) clockNode.textContent = `t = ${fmt(world.time)} s`;
  }

  // Environment controls live in More settings.
  field(gHost, {
    label: '重力加速度 g · Gravity',
    value: world.g,
    min: 0,
    max: 30,
    step: 0.1,
    unit: 'm/s²',
    testid: 'g',
    onChange: (v) => {
      world.g = v;
      world.engine.gravity.set(0, -v, 0);
    },
  });
  field(gHost, {
    label: '碰撞恢复系数 · Restitution',
    value: world.engine.defaultContactMaterial.restitution,
    min: 0,
    max: 1,
    step: 0.01,
    testid: 'restitution',
    onChange: (v) => {
      setBodyCollisionRestitution(world, v);
    },
  });
  if (window.matchMedia && window.matchMedia('(max-width: 760px)').matches) {
    root.dataset.mobile = '1';
  }

  function onShiftKey(e) {
    if (e.key !== 'Shift') return;
    shiftHeld = e.type === 'keydown';
    applySnapSettings();
  }
  document.addEventListener('keydown', onShiftKey);
  document.addEventListener('keyup', onShiftKey);

  function onKeyDown(e) {
    if (handleModalKey(e)) return;
    const tag = (e.target && e.target.tagName) || '';
    const editing = tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || e.target?.isContentEditable;
    const key = e.key;
    if (key === 'Escape') {
      if (!addMenu.hidden) { closeAddMenu(); return; }
      if (!morePanel.hidden) { closeMore(); return; }
      if (isMobile() && root.dataset.inspectorOpen === '1') { openInspector(false); return; }
    }
    if (editing) return;
    const mod = e.ctrlKey || e.metaKey;
    if (mod && key.toLowerCase() === 'z') {
      e.preventDefault();
      if (e.shiftKey) redo();
      else undo();
      return;
    }
    if (mod && key.toLowerCase() === 'y') {
      e.preventDefault();
      redo();
      return;
    }
    if ((mod && key.toLowerCase() === 'd') || (!mod && e.shiftKey && key === 'D')) {
      e.preventDefault();
      duplicateSelected();
      return;
    }
    if (key === 'Escape' && pendingLink) {
      pendingLink = null;
      setStatus('已取消连接。 · Link cancelled.');
      return;
    }
    if ((key === 'Delete' || key === 'Backspace') && selected) {
      e.preventDefault();
      deleteSelected();
      return;
    }
    if (e.code === 'Space' && !mod && !e.altKey) {
      e.preventDefault();
      if (running) pause();
      else play();
      return;
    }
    if (!mod && !e.altKey && !e.repeat) {
      if (key === 'g' || key === 'G') { e.preventDefault(); startModal('translate'); return; }
      if (key === 'r' || key === 'R') { e.preventDefault(); startModal('rotate'); return; }
      if (key === 's' || key === 'S') { e.preventDefault(); startModal('scale'); return; }
      if (key === 'f' || key === 'F' || e.code === 'NumpadDecimal') {
        e.preventDefault();
        if (view.frameSelected()) setStatus('已聚焦所选对象。 · Framed selection.');
        else setStatus('场景中没有可聚焦的对象。 · Nothing to frame.', true);
      }
    }
  }
  document.addEventListener('keydown', onKeyDown);

  const stopLoop = startAnimLoop(canvasHost, () => {
    if (destroyed) return;
    const now = performance.now();
    let dt = (now - lastFrame) / 1000;
    lastFrame = now;
    if (dt > 0.1) dt = 0.1;
    if (running) {
      stepWorld(world, dt, { timeScale });
      recordHistory();
    }
    view.resize();
    view.sync(world);
    view.render();
    if (now - lastReadout > 100) {
      lastReadout = now;
      updateLive();
      pushGraphSample();
    }
  });

  let destroyed = false;
  function destroy() {
    if (destroyed) return;
    destroyed = true;
    if (typeof stopLoop === 'function') stopLoop();
    document.removeEventListener('keydown', onKeyDown);
    document.removeEventListener('keydown', onShiftKey);
    document.removeEventListener('keyup', onShiftKey);
    document.removeEventListener('pointerdown', onDocPointerDown, true);
    if (mobileQuery.removeEventListener) mobileQuery.removeEventListener('change', onMobileChange);
    else if (mobileQuery.removeListener) mobileQuery.removeListener(onMobileChange);
    window.removeEventListener('pointermove', onModalPointerMove);
    window.removeEventListener('pointerdown', onModalPointerDown, true);
    window.removeEventListener('contextmenu', onContextMenu);
    document.removeEventListener('focusin', onFocusIn);
    view.destroy();
    disposeWorld(world);
    const style = document.getElementById(STYLE_ID);
    if (style) style.remove();
    if (window.__PLAB__) delete window.__PLAB__;
    clear(main);
  }

  view.sync(world);
  updateEmpty();
  updateTransport();
  buildInspector();
  renderOutliner();
  updateUndoButtons();
  setGraphs(false);
  updateLive();

  // Small read-only QA hook: no student-facing controls depend on it.
  window.__PLAB__ = {
    world,
    view,
    get selected() { return selected; },
    get running() { return running; },
    get graphsOn() { return graphsOn; },
    get graphData() { return graphData; },
  };

  return { destroy };
}
