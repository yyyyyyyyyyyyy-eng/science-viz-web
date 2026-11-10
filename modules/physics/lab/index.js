/**
 * 物理实验室 · Physics Lab — free-exploration 3D sandbox.
 * Empty start, add apparatus from the palette, build, run and measure.
 */
import { startAnimLoop } from '../../anim-loop.js';
import { el, clear } from '../../../js/ui-shared.js';
import {
  addAnchor,
  addBlock,
  addCart,
  addHCircle,
  addLink,
  addLoop,
  addSurface,
  addTurntable,
  applyInitialVelocity,
  attachBodyToHCircle,
  attachBodyToLoop,
  attachBodyToSurface,
  attachBodyToTurntable,
  bodyDiagnostics,
  captureInitial,
  clampMuPair,
  clearWorld,
  createWorld,
  DEG,
  deserializeScene,
  detachBody,
  disposeWorld,
  energyBreakdown,
  forceVectors,
  getBody,
  getHCircle,
  getLoop,
  getSurface,
  getTurntable,
  linkReading,
  loopPoint,
  repositionSurfaceBody,
  resetWorld,
  serializeScene,
  setBodyMass,
  setBlockSize,
  setCartInertia,
  setCartRadius,
  setHCircleRadius,
  setLoopRadius,
  setSurfaceAngle,
  setSurfaceLength,
  setSurfaceWidth,
  setTurntableDrive,
  setTurntableRadius,
  snapBodyToNearest,
  snapNearbyBodies,
  stepOnce,
  stepWorld,
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
  const transport = el('div', {
    className: 'plab-transport',
    role: 'group',
    'aria-label': '模拟控制 · Simulation controls',
  });
  const playBtn = el('button', {
    type: 'button',
    className: 'plab-btn plab-btn-primary hit-target',
    text: '播放 · Play',
    'data-action': 'play',
  });
  const pauseBtn = el('button', {
    type: 'button',
    className: 'plab-btn hit-target',
    text: '暂停 · Pause',
    'data-action': 'pause',
  });
  const stepBtn = el('button', {
    type: 'button',
    className: 'plab-btn hit-target',
    text: '单步 1/60 s · Step',
    'data-action': 'step',
  });
  const resetBtn = el('button', {
    type: 'button',
    className: 'plab-btn hit-target',
    text: '重置 · Reset',
    'data-action': 'reset',
  });
  const clearBtn = el('button', {
    type: 'button',
    className: 'plab-btn plab-btn-quiet hit-target',
    text: '清空场景 · Clear scene',
    'data-action': 'clear',
  });
  transport.append(playBtn, pauseBtn, stepBtn, resetBtn, clearBtn);
  head.append(title, transport);

  const bodyGrid = el('div', { className: 'plab-body' });
  const stage = el('section', { className: 'plab-stage', 'aria-label': '三维场景 · 3D scene' });
  const stageBar = el('div', { className: 'plab-stagebar' });

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

  const forceLabel = el('label', { className: 'plab-check hit-target' }, [
    el('input', { type: 'checkbox', checked: true, 'data-force-toggle': 'on' }),
    el('span', { text: '显示力矢量 · Show force vectors' }),
  ]);

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

  const clock = el('span', { className: 'plab-clock', text: 't = 0 s', 'data-readout': 'time' });
  stageBar.append(viewGroup, gizmoGroup, forceLabel, timeScaleWrap, clock);

  const editBar = el('div', { className: 'plab-editbar' });
  const editGroup = el('div', { className: 'plab-toolgroup', role: 'group', 'aria-label': '编辑 · Edit' });
  editGroup.appendChild(el('span', { className: 'plab-tool-label', text: '编辑 · Edit' }));
  const undoBtn = el('button', { type: 'button', className: 'plab-tool hit-target', text: '撤销 · Undo', 'data-action': 'undo' });
  const redoBtn = el('button', { type: 'button', className: 'plab-tool hit-target', text: '重做 · Redo', 'data-action': 'redo' });
  const dupBtn = el('button', { type: 'button', className: 'plab-tool hit-target', text: '复制 · Duplicate', 'data-action': 'duplicate' });
  const frameBtn = el('button', { type: 'button', className: 'plab-tool hit-target', text: '聚焦 · Frame', 'data-action': 'frame' });
  const rulerBtn = el('button', { type: 'button', className: 'plab-tool hit-target', text: '尺子 · Ruler', 'data-action': 'ruler' });
  editGroup.append(undoBtn, redoBtn, dupBtn, frameBtn, rulerBtn);

  const viewTools = el('div', { className: 'plab-toolgroup', role: 'group', 'aria-label': '显示 · Display' });
  viewTools.appendChild(el('span', { className: 'plab-tool-label', text: '显示 · Display' }));
  const snapToggleBtn = el('button', { type: 'button', className: 'plab-tool hit-target', text: '吸附 · Snap', 'data-action': 'snap-toggle', 'aria-pressed': 'false' });
  const trailToggleBtn = el('button', { type: 'button', className: 'plab-tool hit-target', text: '轨迹 · Trail', 'data-action': 'trail', 'aria-pressed': 'false' });
  const graphToggleBtn = el('button', { type: 'button', className: 'plab-tool hit-target', text: '曲线 · Graphs', 'data-action': 'graphs', 'aria-pressed': 'false' });
  const rulerReadout = el('output', { className: 'plab-ruler-readout', text: '尺子关闭 · Ruler off', 'data-readout': 'ruler' });
  viewTools.append(snapToggleBtn, trailToggleBtn, graphToggleBtn, rulerReadout);
  editBar.append(editGroup, viewTools);

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

  const canvasHost = el('div', { className: 'plab-canvas-host', 'data-canvas-host': 'on' });
  const emptyHint = el('div', { className: 'plab-empty', 'data-empty': 'on' }, [
    el('p', { className: 'plab-empty-title', text: '自由实验室 · Free lab' }),
    el('p', { className: 'plab-empty-text', text: '从器材面板添加物体，自己搭建场景。 · Add apparatus from the palette and build your own scene.' }),
    el('p', { className: 'plab-empty-sub', text: '拖动旋转视角，滚轮缩放，右键或双指平移。 · Drag to orbit, scroll to zoom, right-drag or two-finger pan.' }),
  ]);
  canvasHost.appendChild(emptyHint);

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
  canvasHost.appendChild(modalHud);

  stage.append(stageBar, canvasHost, editBar, scrub, legend, energy, graphSection);

  const side = el('aside', { className: 'plab-side', 'aria-label': '器材与属性 · Apparatus and inspector' });
  const mobileTabs = el('div', { className: 'plab-mobile-tabs', role: 'tablist' });
  const tabPalette = el('button', {
    type: 'button',
    className: 'plab-mobile-tab active hit-target',
    text: '添加器材 · Palette',
    role: 'tab',
    'aria-selected': 'true',
    'data-tab': 'palette',
  });
  const tabInspector = el('button', {
    type: 'button',
    className: 'plab-mobile-tab hit-target',
    text: '属性 · Inspector',
    role: 'tab',
    'aria-selected': 'false',
    'data-tab': 'inspector',
  });
  mobileTabs.append(tabPalette, tabInspector);

  const palette = el('section', { className: 'plab-panel plab-palette', 'data-panel': 'palette' });
  palette.appendChild(el('h2', { className: 'plab-panel-title', text: '添加器材 · Add apparatus' }));
  const status = el('p', { className: 'plab-status', 'data-status': 'on', role: 'status', 'aria-live': 'polite' });
  status.textContent = '自由实验室：从面板添加器材。 · Free lab: add apparatus from the palette.';
  palette.appendChild(status);

  const paletteGroups = [
    {
      title: label('表面与轨道', 'Surfaces & tracks'),
      items: [
        ['incline', '斜面', 'Incline'],
        ['surface', '水平面 / 倾斜面', 'Horizontal surface'],
        ['track', '直线轨道', 'Straight track'],
      ],
    },
    {
      title: label('物体', 'Bodies'),
      items: [
        ['block', '方块', 'Block'],
        ['cart', '小车', 'Cart'],
      ],
    },
    {
      title: label('连接与测量', 'Links & meters'),
      items: [
        ['spring', '线性弹簧', 'Linear spring'],
        ['nonlinear', '非线性弹簧', 'Nonlinear spring'],
        ['meter', '测力计', 'Force meter'],
      ],
    },
    {
      title: label('旋转与圆周', 'Rotation & circles'),
      items: [
        ['turntable', '转盘', 'Turntable'],
        ['loop', '竖直圆环', 'Vertical loop'],
        ['hcircle', '水平圆周轨道', 'Horizontal circle'],
      ],
    },
  ];
  for (const group of paletteGroups) {
    palette.appendChild(el('h3', { className: 'plab-group-title', text: labelText(group.title.zh, group.title.en) }));
    const grid = el('div', { className: 'plab-add-grid' });
    for (const [key, zh, en] of group.items) {
      const btn = el('button', {
        type: 'button',
        className: 'plab-add hit-target',
        'data-add': key,
      }, [
        el('span', { className: 'plab-add-zh', text: zh }),
        el('span', { className: 'plab-add-en', text: en }),
      ]);
      grid.appendChild(btn);
    }
    palette.appendChild(grid);
  }

  const environment = el('section', { className: 'plab-subpanel' });
  environment.appendChild(el('h3', { className: 'plab-group-title', text: '环境 · Environment' }));
  const gHost = el('div');
  environment.appendChild(gHost);
  palette.appendChild(environment);

  const tools = el('section', { className: 'plab-subpanel' });
  tools.appendChild(el('h3', { className: 'plab-group-title', text: '工具 · Tools' }));
  const toolRow = el('div', { className: 'plab-tool-row' });
  const snapSelBtn = el('button', { type: 'button', className: 'plab-btn hit-target', text: '吸附所选 · Snap selected', 'data-action': 'snap' });
  const detachBtn = el('button', { type: 'button', className: 'plab-btn hit-target', text: '脱离表面 · Detach', 'data-action': 'detach' });
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
  toolRow.append(snapSelBtn, detachBtn);
  tools.appendChild(toolRow);

  const sceneRow = el('div', { className: 'plab-tool-row' });
  const saveBtn = el('button', { type: 'button', className: 'plab-btn hit-target', text: '保存场景 · Save', 'data-action': 'save' });
  const loadBtn = el('button', { type: 'button', className: 'plab-btn hit-target', text: '读取场景 · Load', 'data-action': 'load' });
  const exportBtn = el('button', { type: 'button', className: 'plab-btn hit-target', text: '导出 JSON · Export', 'data-action': 'export' });
  const importBtn = el('button', { type: 'button', className: 'plab-btn hit-target', text: '导入 JSON · Import', 'data-action': 'import' });
  const importInput = el('input', { type: 'file', accept: '.json,application/json', hidden: true, 'data-field': 'import' });
  sceneRow.append(saveBtn, loadBtn, exportBtn, importBtn, importInput);
  tools.appendChild(sceneRow);
  tools.appendChild(el('p', { className: 'plab-field-hint', text: '只保存你自己的场景 · Saves only your own scene.' }));
  palette.appendChild(tools);

  const inspector = el('section', { className: 'plab-panel plab-inspector', 'data-panel': 'inspector' });
  const inspectorBody = el('div', { className: 'plab-inspector-body' });
  inspector.appendChild(inspectorBody);

  const outliner = el('section', { className: 'plab-outliner', 'aria-label': '对象列表 · Outliner' });
  const outlinerHead = el('div', { className: 'plab-outliner-head' }, [
    el('h2', { className: 'plab-panel-title', text: '对象列表 · Outliner' }),
    el('span', { className: 'plab-outliner-count', text: '0', 'data-readout': 'outlinerCount' }),
  ]);
  const outlinerList = el('div', { className: 'plab-outliner-list' });
  const outlinerHint = el('p', { className: 'plab-outliner-hint', text: '空场景 · Empty scene. 双击名称可重命名。 · Double-click a name to rename.' });
  outliner.append(outlinerHead, outlinerHint, outlinerList);

  side.append(outliner, mobileTabs, palette, inspector);
  bodyGrid.append(stage, side);
  root.append(head, bodyGrid);

  if (!isCurrent()) return { destroy() {} };

  const world = createWorld({ g: 9.8, h: 1 / 240 });
  captureInitial(world);
  let running = false;
  let timeScale = 1;
  let selected = null;
  let gizmoMode = 'translate';
  let pendingLink = null;
  let lastFrame = performance.now();
  let lastReadout = 0;
  const liveNodes = new Map();
  let snapOn = false;
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

  const view = createLabView(canvasHost, {
    getForces: (w, b) => forceVectors(w, b),
    onPick: (hit, event) => handlePick(hit, event),
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

  function setStatus(text, warn = false) {
    status.textContent = text;
    status.dataset.warn = warn ? '1' : '0';
  }

  function setMobileTab(name) {
    root.dataset.mobileTab = name;
    tabPalette.classList.toggle('active', name === 'palette');
    tabInspector.classList.toggle('active', name === 'inspector');
    tabPalette.setAttribute('aria-selected', name === 'palette' ? 'true' : 'false');
    tabInspector.setAttribute('aria-selected', name === 'inspector' ? 'true' : 'false');
  }
  setMobileTab('palette');
  tabPalette.addEventListener('click', () => setMobileTab('palette'));
  tabInspector.addEventListener('click', () => setMobileTab('inspector'));

  function entityById(type, id) {
    if (type === 'body') return getBody(world, id);
    if (type === 'surface') return getSurface(world, id);
    if (type === 'loop') return getLoop(world, id);
    if (type === 'turntable') return getTurntable(world, id);
    if (type === 'hcircle') return getHCircle(world, id);
    if (type === 'link') return world.links.find((l) => l.id === id) || null;
    return null;
  }

  function select(entity) {
    const prevKey = selected ? `${selected.type}:${selected.id}` : '';
    selected = entity || null;
    if (selected) {
      view.setSelection({ type: selected.type, id: selected.id });
    } else {
      view.setSelection(null);
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
      && world.links.length === 0;
  }

  function updateEmpty() {
    const empty = isEmpty();
    emptyHint.hidden = !empty;
    root.dataset.empty = empty ? '1' : '0';
  }

  function updateTransport() {
    playBtn.disabled = running;
    pauseBtn.disabled = !running;
    playBtn.textContent = running ? '运行中 · Running' : '播放 · Play';
    playBtn.setAttribute('aria-pressed', running ? 'true' : 'false');
    root.dataset.running = running ? '1' : '0';
    view.transform.enabled = !running && gizmoMode !== 'off';
    if (view.setGizmoVisible) view.setGizmoVisible(!running && gizmoMode !== 'off');
    view.setGizmoMode(gizmoMode);
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
    return boxes;
  }

  function placementClear(x, halfX, halfZ, boxes) {
    const margin = 0.6;
    for (const box of boxes) {
      const overlapX = Math.abs(x - box.x) < halfX + box.halfX + margin;
      const overlapZ = Math.abs(0 - box.z) < halfZ + box.halfZ + margin;
      if (overlapX && overlapZ) return false;
    }
    return true;
  }

  function nextPlacement(kind) {
    const extent = APPARATUS_EXTENT[kind] || { halfX: 1, halfZ: 1 };
    const boxes = apparatusBoxes();
    for (let i = 0; i < 240; i += 1) {
      const mag = Math.ceil(i / 2) * 0.5;
      const x = i === 0 ? 0 : (i % 2 === 1 ? mag : -mag);
      if (placementClear(x, extent.halfX, extent.halfZ, boxes)) return x;
    }
    return 0;
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
      ...world.bodies,
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
        select(entity);
        setMobileTab('inspector');
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
      if (entity.kind === 'cart') setCartRadius(world, entity, start.radius * f);
      else setBlockSize(world, entity, start.size * f);
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
      copy = addSurface(world, {
        kind: entity.kind,
        name: entity.name ? `${entity.name} 副本` : '',
        x: nextPlacement(entity.kind),
        y: entity.body.position.y,
        z: entity.body.position.z,
        angleDeg: entity.angle,
        length: entity.length,
        width: entity.width,
        thickness: entity.thickness,
        muS: entity.muS,
        muK: entity.muK,
      });
    } else if (entity.type === 'loop') {
      copy = addLoop(world, {
        name: entity.name ? `${entity.name} 副本` : '',
        x: nextPlacement('loop'), y: entity.y, z: entity.z, radius: entity.radius, muS: entity.muS, muK: entity.muK,
      });
    } else if (entity.type === 'turntable') {
      copy = addTurntable(world, {
        name: entity.name ? `${entity.name} 副本` : '',
        x: nextPlacement('turntable'), y: entity.body.position.y, z: entity.body.position.z,
        radius: entity.radius, omega: entity.omega, targetOmega: entity.targetOmega,
        torque: entity.torque, I: entity.I, drive: entity.drive, muS: entity.muS, muK: entity.muK,
      });
    } else if (entity.type === 'hcircle') {
      copy = addHCircle(world, {
        name: entity.name ? `${entity.name} 副本` : '',
        x: nextPlacement('hcircle'), y: entity.y, z: entity.z, radius: entity.radius, muS: entity.muS, muK: entity.muK,
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
    graphBodyId = selected?.type === 'body' ? selected.id : null;
    if (graphsOn) drawGraphs();
  }

  function pushGraphSample() {
    const entity = selectedBody();
    if (!entity || !running) return;
    if (graphBodyId !== entity.id) {
      graphData.length = 0;
      graphBodyId = entity.id;
    }
    const d = bodyDiagnostics(world, entity);
    const v = entity.cannon.velocity.length();
    const rot = entity.kind === 'cart' ? 0.5 * entity.I * entity.cannon.angularVelocity.z ** 2 : 0;
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

  function addApparatus(kind) {
    pushUndo('add');
    prepareEdit();
    let entity = null;
    if (kind === 'incline') {
      entity = addSurface(world, { kind: 'incline', x: nextPlacement(kind), y: 1.35, z: 0, angleDeg: 20, length: 8, width: 2.4, muS: 0.5, muK: 0.35 });
    } else if (kind === 'surface') {
      entity = addSurface(world, { kind: 'surface', x: nextPlacement(kind), y: 0.55, z: 0, angleDeg: 0, length: 9, width: 2.4, muS: 0.5, muK: 0.35 });
    } else if (kind === 'track') {
      entity = addSurface(world, { kind: 'track', x: nextPlacement(kind), y: 0.55, z: 0, angleDeg: 0, length: 10, width: 2.4, muS: 0.3, muK: 0.2 });
    } else if (kind === 'loop') {
      entity = addLoop(world, { x: nextPlacement(kind), y: 2.7, z: 0, radius: 1.8 });
    } else if (kind === 'turntable') {
      entity = addTurntable(world, { x: nextPlacement(kind), y: 0.62, z: 0, radius: 2, omega: 1.2, targetOmega: 1.2, I: 8, drive: 'target', muS: 0.5, muK: 0.35 });
    } else if (kind === 'hcircle') {
      entity = addHCircle(world, { x: nextPlacement(kind), z: 0, y: 0.12, radius: 2, muS: 0.55, muK: 0.35 });
    } else if (kind === 'block' || kind === 'cart') {
      let spawn = { x: 0, y: 2.5, z: 0 };
      const target = selected?.type === 'surface' || selected?.type === 'loop'
        || selected?.type === 'turntable' || selected?.type === 'hcircle' ? selected : null;
      if (target?.type === 'surface') {
        spawn = { x: target.body.position.x, y: target.body.position.y + 1.1, z: target.body.position.z };
      } else if (target?.type === 'loop') {
        spawn = { x: target.x, y: target.y - target.radius, z: target.z };
      } else if (target?.type === 'turntable') {
        spawn = { x: target.x + target.radius * 0.55, y: target.y + 0.9, z: target.z };
      } else if (target?.type === 'hcircle') {
        spawn = { x: target.x + target.radius, y: target.y + 0.7, z: target.z };
      } else if (selected?.type === 'body') {
        // Duplicating next to an already-selected body is convenient, but the
        // new object still falls back to the nearest apparatus if one is in
        // range.
        spawn = { x: selected.cannon.position.x + 0.8, y: selected.cannon.position.y + 0.8, z: selected.cannon.position.z };
      }
      entity = kind === 'cart'
        ? addCart(world, { mass: 1, radius: 0.3, x: spawn.x, y: spawn.y, z: spawn.z })
        : addBlock(world, { mass: 1, size: 0.5, x: spawn.x, y: spawn.y, z: spawn.z });
      if (target?.type === 'surface') {
        attachBodyToSurface(world, entity, target.id, { localX: 0, localZ: 0 });
      } else if (target?.type === 'loop') {
        attachBodyToLoop(world, entity, target.id, { theta: 0 });
      } else if (target?.type === 'turntable') {
        attachBodyToTurntable(world, entity, target.id, { r: target.radius * 0.55, phi: 0 });
      } else if (target?.type === 'hcircle') {
        attachBodyToHCircle(world, entity, target.id, { phi: 0 });
      } else {
        snapBodyToNearest(world, entity, { maxDistance: 5 });
      }
    } else if (kind === 'spring' || kind === 'nonlinear' || kind === 'meter') {
      startLink(kind);
      return;
    }
    if (!entity) return;
    snapNearbyBodies(world, 4);
    captureInitial(world);
    view.sync(world);
    select(entity);
    renderOutliner();
    updateEmpty();
    updateTransport();
    setStatus(`已添加：${labelText(...kindLabel(entity))} · Added. 拖动工具可移动，属性面板可调参数。`);
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
    setMobileTab('palette');
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
      if (hit?.entity?.type === 'body') {
        endpoint = { type: 'body', id: hit.entity.id };
      } else {
        const point = hit?.point || view.groundPoint(event.clientX, event.clientY);
        endpoint = addAnchor(point.x, Math.max(0, point.y), point.z);
      }
      if (!pendingLink.first) {
        pendingLink.first = endpoint;
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
      setStatus('连接已创建，可在属性面板调节 k、β 与原长。 · Link created; adjust k, β and rest length in the inspector.');
      return;
    }
    if (hit?.entity) {
      const entity = entityById(hit.entity.type, hit.entity.id);
      if (entity) {
        select(entity);
        renderOutliner();
        setMobileTab('inspector');
        setStatus(`已选择：${labelText(...kindLabel(entity))}`);
      }
      return;
    }
    select(null);
    setStatus('自由实验室：从面板添加器材。 · Free lab: add apparatus from the palette.');
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
      const hit = snapBodyToNearest(world, entity, { maxDistance: 2.4 });
      if (hit) setStatus('已吸附到装置。 · Snapped to apparatus.');
    } else if (entity.type === 'surface' || entity.type === 'loop' || entity.type === 'turntable' || entity.type === 'hcircle') {
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

  playBtn.addEventListener('click', play);
  pauseBtn.addEventListener('click', pause);
  stepBtn.addEventListener('click', step);
  resetBtn.addEventListener('click', reset);
  clearBtn.addEventListener('click', clearScene);

  root.querySelectorAll('[data-view]').forEach((btn) => {
    btn.addEventListener('click', () => view.setView(btn.dataset.view));
  });
  root.querySelectorAll('[data-gizmo]').forEach((btn) => {
    btn.addEventListener('click', () => {
      gizmoMode = btn.dataset.gizmo;
      root.querySelectorAll('[data-gizmo]').forEach((b) => b.classList.toggle('active', b === btn));
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
    }
  });
  snapToggleBtn.addEventListener('click', () => {
    snapOn = !snapOn;
    snapToggleBtn.classList.toggle('active', snapOn);
    snapToggleBtn.setAttribute('aria-pressed', snapOn ? 'true' : 'false');
    view.transform.translationSnap = snapOn ? 0.25 : null;
    view.transform.rotationSnap = snapOn ? Math.PI / 12 : null;
    view.transform.scaleSnap = snapOn ? 0.1 : null;
    setStatus(snapOn ? '手柄吸附已开启：0.25 m / 15°。 · Gizmo snap on: 0.25 m / 15°.' : '手柄吸附已关闭。 · Gizmo snap off.');
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
  window.addEventListener('contextmenu', (e) => {
    if (!modal) return;
    e.preventDefault();
    cancelModal();
  });

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
    liveNodes.clear();
    if (!selected) {
      inspectorBody.appendChild(el('h2', { className: 'plab-panel-title', text: '属性 · Inspector' }));
      inspectorBody.appendChild(el('p', {
        className: 'plab-inspector-empty',
        text: '未选择 · Nothing selected. 点击场景中的物体查看并调整参数。 · Click an object in the scene to inspect and edit it.',
      }));
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

    if (entity.type === 'surface') {
      field(inspectorBody, {
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
      field(inspectorBody, {
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
      frictionFields(inspectorBody, entity);
      const flip = el('button', { type: 'button', className: 'plab-btn hit-target', text: '翻转坡度 · Flip slope' });
      flip.addEventListener('click', () => {
        pushUndo('flip');
        prepareEdit();
        setSurfaceAngle(world, entity, -entity.angle);
        captureInitial(world);
        view.sync(world);
        buildInspector();
      });
      inspectorBody.appendChild(flip);
      if (geoDisabled) inspectorBody.appendChild(el('p', { className: 'plab-field-hint', text: '暂停后可调整几何 · Pause to edit geometry.' }));
      formula(inspectorBody, 'N=mg\\cos\\theta,\\qquad |f_{s}|\\le \\mu_{s}N');
    }

    if (entity.type === 'body') {
      field(inspectorBody, {
        label: '质量 · Mass',
        value: entity.mass,
        min: 0.1,
        max: 20,
        step: 0.1,
        unit: 'kg',
        testid: 'mass',
        onChange: (v) => { setBodyMass(world, entity, v); },
      });
      if (entity.kind === 'cart') {
        field(inspectorBody, {
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
        field(inspectorBody, {
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
        const disc = el('button', { type: 'button', className: 'plab-btn hit-target', text: '圆盘 · Disc' });
        const hoop = el('button', { type: 'button', className: 'plab-btn hit-target', text: '圆环 · Hoop' });
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
        inspectorBody.appendChild(quick);
        const brakeCheck = el('input', { type: 'checkbox', checked: !!entity.brake, 'data-field': 'brake' });
        brakeCheck.addEventListener('change', () => { pushUndo('brake'); entity.brake = brakeCheck.checked; });
        inspectorBody.appendChild(el('label', { className: 'plab-check hit-target' }, [
          brakeCheck,
          el('span', { text: '刹车（锁定车轴） · Brake (lock axle)' }),
        ]));
        const motorCheck = el('input', { type: 'checkbox', checked: !!entity.motor?.on, 'data-field': 'motor' });
        motorCheck.addEventListener('change', () => {
          pushUndo('motor');
          entity.motor = entity.motor || { on: false, target: 0, force: 2 };
          entity.motor.on = motorCheck.checked;
        });
        inspectorBody.appendChild(el('label', { className: 'plab-check hit-target' }, [
          motorCheck,
          el('span', { text: '电机 · Motor' }),
        ]));
        field(inspectorBody, {
          label: '目标速度 · Target speed',
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
        field(inspectorBody, {
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
        formula(inspectorBody, 'a=\\dfrac{F_{t}}{m+\\dfrac{I}{R^{2}}}');
      }
      field(inspectorBody, {
        label: '初速度 · Initial speed',
        value: entity.v0,
        min: 0,
        max: 20,
        step: 0.1,
        unit: 'm/s',
        testid: 'v0',
        hint: '初速度在重置后生效 · Initial velocity applies on reset.',
        onChange: (v) => {
          entity.v0 = v;
          if (!running && world.time === 0) { applyInitialVelocity(world, entity); captureInitial(world); }
        },
      });
      field(inspectorBody, {
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
      field(inspectorBody, {
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
      field(inspectorBody, {
        label: '外力大小 · Applied force',
        value: entity.appliedMag,
        min: 0,
        max: 200,
        step: 0.5,
        unit: 'N',
        testid: 'appliedMag',
        onChange: (v) => { entity.appliedMag = v; },
      });
      field(inspectorBody, {
        label: '外力方位角 · Applied azimuth',
        value: entity.appliedAzimuth,
        min: -180,
        max: 180,
        step: 1,
        unit: '°',
        testid: 'appliedAzimuth',
        onChange: (v) => { entity.appliedAzimuth = v; },
      });
      field(inspectorBody, {
        label: '外力仰角 · Applied elevation',
        value: entity.appliedElevation,
        min: -90,
        max: 90,
        step: 1,
        unit: '°',
        testid: 'appliedElevation',
        onChange: (v) => { entity.appliedElevation = v; },
      });
      inspectorBody.appendChild(el('h3', { className: 'plab-section-title', text: '实时读数 · Live readouts' }));
      const readouts = el('div', { className: 'plab-readouts' });
      addLive(readouts, '速率 · Speed', 'speed', 'm/s');
      addLive(readouts, '加速度 · Acceleration', 'accel', 'm/s²');
      addLive(readouts, '支持力 N · Normal', 'normal', 'N');
      addLive(readouts, '摩擦力 · Friction', 'friction', 'N');
      addLive(readouts, '接触 · Contact', 'contact', '');
      addLive(readouts, '状态 · State', 'state', '');
      inspectorBody.appendChild(readouts);
      contactControls(inspectorBody, entity);
      const actions = el('div', { className: 'plab-tool-row' });
      const snap = el('button', { type: 'button', className: 'plab-btn hit-target', text: '吸附 · Snap' });
      snap.addEventListener('click', () => {
        prepareEdit();
        if (snapBodyToNearest(world, entity, { maxDistance: 5 })) {
          captureInitial(world);
          view.sync(world);
          buildInspector();
          setStatus('已吸附到最近的装置。 · Snapped to the nearest apparatus.');
        } else {
          setStatus('附近没有可吸附的装置。 · Nothing nearby to snap to.', true);
        }
      });
      actions.appendChild(snap);
      if (entity.attachment) {
        const detach = el('button', { type: 'button', className: 'plab-btn hit-target', text: '脱离 · Detach' });
        detach.addEventListener('click', () => {
          prepareEdit();
          detachBody(world, entity);
          captureInitial(world);
          view.sync(world);
          buildInspector();
        });
        actions.appendChild(detach);
      }
      inspectorBody.appendChild(actions);
      const contact = entity.attachment?.type === 'surface' ? 'incline' : entity.attachment?.type || 'free';
      formula(inspectorBody, contact === 'loop'
        ? 'N=\\dfrac{mv^{2}}{R}+mg\\cos\\theta'
        : contact === 'turntable'
          ? 'f_{s}=m\\omega^{2}r\\le \\mu_{s}N'
          : contact === 'hcircle'
            ? '\\dfrac{mv^{2}}{R}\\le \\mu_{s}N'
            : 'f_{k}=\\mu_{k}N,\\qquad |f_{s}|\\le \\mu_{s}N');
    }

    if (entity.type === 'loop') {
      field(inspectorBody, {
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
      formula(inspectorBody, 'N=\\dfrac{mv^{2}}{R}+mg\\cos\\theta');
      inspectorBody.appendChild(el('p', { className: 'plab-field-hint', text: 'N < 0 时物体离开轨道成为抛体。 · When N < 0 the body leaves the track and becomes a projectile.' }));
    }

    if (entity.type === 'turntable') {
      field(inspectorBody, {
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
      field(inspectorBody, {
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
      inspectorBody.appendChild(driveWrap);
      field(inspectorBody, {
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
      field(inspectorBody, {
        label: '驱动力矩 · Drive torque',
        value: entity.torque,
        min: -80,
        max: 80,
        step: 0.5,
        unit: 'N·m',
        testid: 'torque',
        onChange: (v) => { entity.torque = v; },
      });
      frictionFields(inspectorBody, entity);
      const readouts = el('div', { className: 'plab-readouts' });
      addLive(readouts, '角速度 ω · Angular speed', 'omega', 'rad/s');
      addLive(readouts, '转角 · Angle', 'tableAngle', 'rad');
      inspectorBody.appendChild(readouts);
      formula(inspectorBody, 'f_{s}=m\\omega^{2}r\\le \\mu_{s}N');
    }

    if (entity.type === 'hcircle') {
      field(inspectorBody, {
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
      frictionFields(inspectorBody, entity);
      formula(inspectorBody, '\\dfrac{mv^{2}}{R}\\le \\mu_{s}N');
    }

    if (entity.type === 'link') {
      field(inspectorBody, {
        label: '劲度系数 k · Spring constant',
        value: entity.k,
        min: 0.1,
        max: 800,
        step: 0.5,
        unit: 'N/m',
        testid: 'k',
        onChange: (v) => { entity.k = Math.max(0, v); },
      });
      field(inspectorBody, {
        label: '非线性系数 β · Nonlinear coefficient',
        value: entity.beta,
        min: 0,
        max: 300,
        step: 0.5,
        unit: 'N/m³',
        testid: 'beta',
        onChange: (v) => { entity.beta = Math.max(0, v); },
      });
      field(inspectorBody, {
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
      const readouts = el('div', { className: 'plab-readouts' });
      addLive(readouts, '轴向读数 · Axial reading', 'reading', 'N');
      inspectorBody.appendChild(readouts);
      formula(inspectorBody, entity.meter
        ? 'F=\\left|kx+\\beta x^{3}\\right|'
        : 'F=-kx-\\beta x^{3},\\qquad U=\\dfrac{1}{2}kx^{2}+\\dfrac{1}{4}\\beta x^{4}');
    }

    const actions = el('div', { className: 'plab-inspector-actions' });
    const del = el('button', { type: 'button', className: 'plab-btn plab-btn-quiet hit-target', text: '删除所选 · Delete selected', 'data-action': 'delete' });
    del.addEventListener('click', deleteSelected);
    actions.appendChild(del);
    inspectorBody.appendChild(actions);
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
      else if (entity.kind === 'cart' && d.rolling) stateText = '滚动 · Rolling';
      else if (entity.kind === 'cart' && !d.static) stateText = '滑动 · Sliding';
      else if (d.static) stateText = '静摩擦 · Static';
      setLive('state', stateText);
    } else if (entity?.type === 'link') {
      setLive('reading', `${fmt(linkReading(world, entity))} N`);
    } else if (entity?.type === 'turntable') {
      setLive('omega', `${fmt(entity.omega)} rad/s`);
      setLive('tableAngle', `${fmt(entity.angle)} rad`);
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

  // g control lives in the palette's environment section.
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
  if (window.matchMedia && window.matchMedia('(max-width: 760px)').matches) {
    root.dataset.mobile = '1';
  }

  function onKeyDown(e) {
    if (handleModalKey(e)) return;
    const tag = (e.target && e.target.tagName) || '';
    const editing = tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || e.target?.isContentEditable;
    if (editing) return;
    const mod = e.ctrlKey || e.metaKey;
    const key = e.key;
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
    window.removeEventListener('pointermove', onModalPointerMove);
    window.removeEventListener('pointerdown', onModalPointerDown, true);
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
  };

  return { destroy };
}
