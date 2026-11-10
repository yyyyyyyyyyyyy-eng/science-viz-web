import * as THREE from '../vendor/three/three.module.js';
import { el, clear } from './ui-shared.js';
import { SUBJECT_LABEL } from './ui-shared.js';
import { loadCourseData } from '../data/courses.js';
import { buildHierarchicalGraph, layoutOrganic, nodeBaseColor, rectsOverlap, mixHex } from './map-hierarchy.js';

/** Soft pastel per-unit palette — saturated but light, never gray. */
const UNIT_COLORS_AP = [
  0xf0a07a, // coral
  0x7eade8, // sky
  0x6fc4b0, // mint-teal
  0xb9a3eb, // lavender
  0xe0b06a, // amber
  0x6eb9c9, // aqua
  0xe890a4, // rose
  0x9cbc6e, // leaf
  0x8aa0e0, // periwinkle
  0xd4a08c, // clay
];
const EDGE_NEUTRAL = 0x8e8e8e; // all edges: thin neutral gray
const EDGE_DIM = EDGE_NEUTRAL;
const EDGE_HOT = 0xc45c26; // selection path only
const EDGE_CROSS = EDGE_NEUTRAL; // dashed but gray, not violet
const SELECT_COLOR = 0xe8a87c;

function cssColor(name, fallback) {
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return v || fallback;
}

function shortestPath(edges, byId, a, b) {
  if (a === b) return [a];
  const adj = new Map();
  for (const e of edges) {
    if (!adj.has(e.source)) adj.set(e.source, []);
    if (!adj.has(e.target)) adj.set(e.target, []);
    adj.get(e.source).push(e.target);
    adj.get(e.target).push(e.source);
  }
  const q = [a];
  const prev = new Map([[a, null]]);
  while (q.length) {
    const u = q.shift();
    for (const v of adj.get(u) || []) {
      if (prev.has(v)) continue;
      prev.set(v, u);
      if (v === b) {
        const path = [b];
        let cur = b;
        while (prev.get(cur) != null) {
          cur = prev.get(cur);
          path.push(cur);
        }
        return path.reverse();
      }
      q.push(v);
    }
  }
  return null;
}

export async function renderMindMap(main, subject, { isCurrent = () => true } = {}) {
  clear(main);
  const shell = el('div', { className: 'map-shell' });
  const toolbar = el('div', { className: 'map-toolbar' });
  const subName = SUBJECT_LABEL[subject] || subject;
  const title = el('div', { className: 'map-title-block' }, [
    el('div', { className: 'map-kicker' }, [
      el('a', { className: 'hit-target', href: `#/${subject}`, text: subName }),
      el('span', { className: 'crumb-sep', text: '/' }),
      el('span', { text: '知识图谱' }),
    ]),
    el('div', { className: 'map-heading' }, [
      el('h1', { text: '知识图谱' }),
      el('span', { className: 'map-subject-label', text: subName }),
    ]),
  ]);
  const search = el('input', {
    className: 'map-search hit-target',
    type: 'search',
    placeholder: '搜索知识点 · Enter',
    'aria-label': '搜索知识点，按回车跳转',
    autocomplete: 'off',
  });
  const zoomOut = el('button', {
    type: 'button',
    className: 'map-tool hit-target',
    text: '−',
    'aria-label': '缩小',
    title: '缩小',
  });
  const zoomIn = el('button', {
    type: 'button',
    className: 'map-tool hit-target',
    text: '+',
    'aria-label': '放大',
    title: '放大',
  });
  const fitBtn = el('button', {
    type: 'button',
    className: 'map-tool hit-target',
    text: '适应',
    'aria-label': '适应视图',
    title: '适应视图',
  });
  const multiBtn = el('button', {
    type: 'button',
    className: 'btn hit-target map-multi-toggle',
    text: '多选',
    'aria-pressed': 'false',
    title: '触控多选开关 · Shift/⌘ 点击亦可',
  });
  const clearBtn = el('button', {
    type: 'button',
    className: 'btn hit-target map-clear-sel',
    text: '清除',
    hidden: true,
  });
  const tools = el('div', { className: 'map-tools' }, [search, zoomOut, zoomIn, fitBtn, multiBtn, clearBtn]);
  toolbar.append(title, tools);
  const stage = el('div', { className: 'map-stage', id: 'map-stage' });
  const panel = el('aside', {
    className: 'map-panel',
    hidden: true,
    id: 'map-panel',
    role: 'dialog',
    'aria-modal': 'false',
    'aria-labelledby': 'map-panel-title',
  });
  const panelLive = el('p', {
    className: 'map-panel-live',
    role: 'status',
    'aria-live': 'polite',
    'aria-atomic': 'true',
  });
  panelLive.style.cssText = 'position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0;';
  let lastPanelFocus = null;

  function rememberPanelFocus() {
    const active = document.activeElement;
    if (active && active !== document.body && active.getClientRects().length > 0 && !panel.contains(active)) {
      lastPanelFocus = active;
    }
  }

  function announcePanel(title) {
    panelLive.textContent = '';
    requestAnimationFrame(() => {
      if (panel.hidden) return;
      panelLive.textContent = `详情面板已打开：${title} · Detail panel opened: ${title}`;
    });
  }

  function focusPanel(closeBtn, title) {
    requestAnimationFrame(() => {
      if (panel.hidden) return;
      closeBtn.focus({ preventScroll: true });
      announcePanel(title);
    });
  }

  function closePanel() {
    panel.hidden = true;
    focusId = null;
    const target = lastPanelFocus && lastPanelFocus.isConnected ? lastPanelFocus : search;
    target?.focus?.({ preventScroll: true });
  }
  const tooltip = el('div', { className: 'map-tooltip', hidden: true, role: 'tooltip' });
  shell.append(toolbar, stage);
  main.appendChild(shell);
  stage.textContent = '载入图谱…';

  const data = await loadCourseData(subject);
  if (!isCurrent()) return { destroy() {} };
  if (!data) {
    stage.textContent = '无法加载图谱数据';
    return { destroy() {} };
  }
  stage.textContent = '';
  stage.append(tooltip, panel, panelLive);
  stage.appendChild(el('p', {
    className: 'map-hint',
    text: window.matchMedia('(hover: none)').matches
      ? '拖拽旋转 · 双指拖平移 · 双指缩放 · 点按查看'
      : '拖拽旋转 · 右键拖平移 · 滚轮缩放 · 点击查看',
  }));
  const { GRAPH } = data;

  let CROSS_EDGES = [];
  let CROSS_RELATIONS = {};
  try {
    const xl = await import(`../data/${subject}/cross-links.js`);
    CROSS_EDGES = xl.CROSS_EDGES || [];
    CROSS_RELATIONS = xl.CROSS_RELATIONS || {};
  } catch (_) {}

  let RELATIONS = {};
  try {
    const relMod = await import(`../data/${subject}/relations.js`);
    RELATIONS = { ...(relMod.RELATIONS || {}), ...CROSS_RELATIONS };
  } catch (_) {
    RELATIONS = { ...CROSS_RELATIONS };
  }
  if (!isCurrent()) return { destroy() {} };

  const hier = buildHierarchicalGraph(subject, GRAPH, CROSS_EDGES, CROSS_RELATIONS);
  const nodes = layoutOrganic(hier.nodes, hier.allEdges, subject);
  const byId = new Map(nodes.map((n) => [n.id, n]));
  const unitByChapter = hier.unitByChapter;
  // Visible lines: tree hierarchy + topic/cross edges
  const edges = hier.allEdges.filter((e) => {
    if (!byId.has(e.source) || !byId.has(e.target)) return false;
    // Hide scaffolding to invisible sole units
    if (e.type === 'tree-stage-unit') {
      const t = byId.get(e.target);
      if (t && t.soleUnderStage) return false;
    }
    if (e.type === 'tree-unit-topic') {
      const s = byId.get(e.source);
      if (s && s.soleUnderStage) {
        // Rewire visually: draw stage→topic instead
        return false;
      }
    }
    return true;
  });
  // Add stage→topic edges for sole units so topics stay connected
  for (const n of nodes) {
    if (n.tier !== 'topic') continue;
    const u = byId.get(`unit:${n.chapterId}`);
    if (u && u.soleUnderStage && u.stageId) {
      edges.push({ source: u.stageId, target: n.id, type: 'tree-stage-topic' });
    }
  }
  // Relation midpoints only on topic↔topic edges (prereq + cross), not tree scaffolding
  const relationEdges = hier.topicEdges.filter((e) => byId.has(e.source) && byId.has(e.target));

  function baseColor(n) {
    // Resolve topic color through its parent unit, not a duplicated field on the
    // topic, so a wrong/missing topic unitIndex can never break unit tinting.
    if (n.tier === 'topic') {
      const unit = unitByChapter.get(n.chapterId);
      if (unit && Number.isFinite(Number(unit.unitIndex))) {
        return nodeBaseColor({ ...n, unitIndex: unit.unitIndex }, UNIT_COLORS_AP);
      }
    }
    return nodeBaseColor(n, UNIT_COLORS_AP);
  }
  // Geos already encode tier size (stage≈3× topic, unit≈1.8×); scale≈1 + screen stabilize
  function baseScale(n) {
    if (n.tier === 'topic') return n.hasViz ? 1.15 : n.layer === 'prep' ? 0.9 : 1.0;
    return 1.0;
  }

  function isDarkTheme() {
    return document.documentElement.getAttribute('data-theme') === 'dark';
  }
  function refreshSceneTheme() {
    const bg = cssColor('--canvas-plot', isDarkTheme() ? '#12141a' : '#f7f5f0');
    scene.background = new THREE.Color(bg);
    scene.fog = new THREE.FogExp2(new THREE.Color(bg).getHex(), isDarkTheme() ? 0.011 : 0.007);
    const edge = isDarkTheme() ? 0xa0a0a0 : EDGE_NEUTRAL;
    treeMat.color.setHex(edge);
    crossMat.color.setHex(edge);
    // Low-opacity thin gray — separate from colorful nodes
    treeMat.opacity = isDarkTheme() ? 0.28 : 0.2;
    crossMat.opacity = isDarkTheme() ? 0.32 : 0.24;
  }
  const bgHex = cssColor('--canvas-plot', '#f7f5f0');
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(bgHex);
  scene.fog = new THREE.FogExp2(new THREE.Color(bgHex).getHex(), 0.009);

  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 400);
  camera.position.set(0, 14, 62);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  stage.appendChild(renderer.domElement);
  renderer.domElement.classList.add('map-canvas');
  renderer.domElement.style.touchAction = 'none';
  renderer.domElement.tabIndex = 0;
  renderer.domElement.setAttribute('role', 'application');
  renderer.domElement.setAttribute('aria-label', '知识图谱画布；拖拽旋转，右键拖动或双指拖动平移，滚轮或双指缩放，点击节点查看');

  scene.add(new THREE.AmbientLight(0xffffff, 0.9));
  const key = new THREE.DirectionalLight(0xffffff, 0.35);
  key.position.set(20, 30, 10);
  scene.add(key);

  const nodeGroup = new THREE.Group();
  nodeGroup.renderOrder = 10;
  scene.add(nodeGroup);
  const meshes = new Map();
  const geos = [];
  // Tier sizes: topics clearly larger than ~1px edges; unit ≈1.8×; stage ≈3×
  const topicGeo = new THREE.SphereGeometry(0.32, 12, 12);
  const topicVizGeo = new THREE.SphereGeometry(0.36, 12, 12);
  const unitGeo = new THREE.CapsuleGeometry(0.27, 0.5, 4, 12);   // ~1.8× topic
  const stageGeo = new THREE.CapsuleGeometry(0.42, 0.88, 5, 12);    // ~3× topic
  geos.push(stageGeo, unitGeo, topicGeo, topicVizGeo);
  const REF_DIST = 42; // world units: scale meshes so screen size stays stable

  for (const n of nodes) {
    const color = baseColor(n);
    let geo;
    if (n.tier === 'stage') geo = stageGeo;
    else if (n.tier === 'unit') geo = unitGeo;
    else geo = n.hasViz ? topicVizGeo : topicGeo;
    // Near-opaque pastels so depthWrite hides edges crossing through spheres
    const opacity = n.tier === 'topic' ? (n.layer === 'prep' ? 0.94 : 1) : n.tier === 'unit' ? 1 : 1;
    const mat = new THREE.MeshBasicMaterial({
      color,
      transparent: opacity < 0.999,
      opacity,
      depthTest: true,
      depthWrite: true,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.renderOrder = 10;
    mesh.position.set(n.x, n.y, n.z);
    if (n.tier === 'stage' || n.tier === 'unit') {
      mesh.rotation.z = Math.PI / 2; // horizontal pill
    }
    mesh.userData = n;
    const bs = baseScale(n);
    mesh.scale.setScalar(bs);
    // Sole prep unit under a stage: keep as layout anchor, hide mesh (stage pill is enough)
    if (n.tier === 'unit' && n.soleUnderStage) {
      mesh.visible = false;
    }
    const hitR = n.tier === 'stage' ? 0.85 : n.tier === 'unit' ? 0.55 : 0.55;
    const hit = new THREE.Mesh(
      new THREE.SphereGeometry(hitR, 8, 8),
      new THREE.MeshBasicMaterial({ visible: false }),
    );
    hit.userData = n;
    mesh.add(hit);
    nodeGroup.add(mesh);
    meshes.set(n.id, mesh);
    mesh.userData._hit = hit;
    mesh.userData._baseScale = bs;
    mesh.userData._tier = n.tier;
    mesh.userData._baseOpacity = opacity;
    mesh.userData._baseColor = color;
  }

  // HTML labels for stage + unit (topics: name on hover only).
  // Sole unit under a stage (prep 1:1) skips a redundant unit label.
  const labelLayer = el('div', { className: 'map-cluster-labels', id: 'map-node-labels' });
  stage.appendChild(labelLayer);
  const labelEls = new Map();
  for (const n of nodes) {
    if (n.tier === 'stage') {
      /* always */
    } else if (n.tier === 'unit') {
      if (n.soleUnderStage) continue;
    } else continue;
    const lab = el('div', {
      className: `map-cluster-label map-tier-${n.tier}`,
      text: n.titleZh,
    });
    lab.style.setProperty('--swatch', `#${baseColor(n).toString(16).padStart(6, '0')}`);
    lab.dataset.tier = n.tier;
    lab.dataset.nodeId = n.id;
    labelLayer.appendChild(lab);
    labelEls.set(n.id, lab);
  }
  const _proj = new THREE.Vector3();
  const labelDims = new Map();
  function measureLabels() {
    for (const [id, lab] of labelEls) {
      lab.style.display = '';
      lab.style.visibility = 'hidden';
      labelDims.set(id, {
        w: Math.max(lab.offsetWidth || 56, 34),
        h: Math.max(lab.offsetHeight || 18, 14),
      });
    }
  }

  function placeLabel(item, offsets, placed, pad, w, h) {
    for (const [ox, oy] of offsets) {
      const rect = {
        x: item.sx + ox(item.lw),
        y: item.sy + oy(item.lh),
        w: item.lw,
        h: item.lh,
      };
      if (rect.x < 6 || rect.y < 6 || rect.x + rect.w > w - 6 || rect.y + rect.h > h - 6) continue;
      if (placed.some((p) => rectsOverlap(rect, p, pad))) continue;
      return rect;
    }
    return null;
  }

  function updateLabels() {
    const w = stage.clientWidth || 1;
    const h = stage.clientHeight || 1;
    const compact = w < 720;
    const stageCands = [];
    const unitCands = [];
    for (const [id, lab] of labelEls) {
      const n = byId.get(id);
      if (!n) continue;
      _proj.set(n.x, n.y, n.z).project(camera);
      if (_proj.z > 1) {
        lab.style.display = 'none';
        continue;
      }
      if (n.tier === 'unit' && compact) {
        lab.style.display = 'none';
        continue;
      }
      const sx = (_proj.x * 0.5 + 0.5) * w;
      const sy = (-_proj.y * 0.5 + 0.5) * h;
      const dim = labelDims.get(id) || { w: 64, h: 20 };
      const item = { id, lab, n, sx, sy, lw: dim.w, lh: dim.h };
      lab.style.display = '';
      lab.style.visibility = 'hidden';
      if (n.tier === 'stage') stageCands.push(item);
      else unitCands.push(item);
    }

    const placed = [];

    // Stage labels: prefer above the stage capsule, then below / sides.
    stageCands.sort((a, b) => a.sy - b.sy || a.sx - b.sx);
    stageCands.forEach((c) => {
      const offsets = [
        [(lw) => -lw / 2, (lh) => -lh - 16],
        [(lw) => -lw / 2, () => 14],
        [() => 14, (lh) => -lh / 2],
        [(lw) => -lw - 14, (lh) => -lh / 2],
        [(lw) => -lw / 2, (lh) => -lh - 36],
      ];
      const rect = placeLabel(c, offsets, placed, 10, w, h);
      if (!rect) {
        c.lab.style.display = 'none';
        return;
      }
      c.lab.style.visibility = '';
      c.lab.style.transform = `translate(${rect.x}px, ${rect.y}px)`;
      placed.push({ ...rect, tier: 'stage' });
    });

    // Unit labels: above / below / to the side, always inside the stage.
    unitCands.sort((a, b) => a.sy - b.sy || a.sx - b.sx);
    unitCands.forEach((c) => {
      const offsets = [
        [(lw) => -lw / 2, (lh) => -lh - 11],
        [(lw) => -lw / 2, () => 12],
        [() => 12, (lh) => -lh / 2],
        [(lw) => -lw - 12, (lh) => -lh / 2],
        [(lw) => 8, (lh) => -lh - 11],
        [(lw) => -lw - 8, (lh) => -lh - 11],
        [(lw) => -lw / 2, (lh) => -lh - 32],
      ];
      const rect = placeLabel(c, offsets, placed, 8, w, h);
      if (!rect) {
        c.lab.style.display = 'none';
        return;
      }
      c.lab.style.visibility = '';
      c.lab.style.transform = `translate(${rect.x}px, ${rect.y}px)`;
      placed.push({ ...rect, tier: 'unit' });
    });
  }

  // Split edges: tree (solid gray) vs cross-topic (dashed gray). Never colored / never violet.
  const treeEdgeList = edges.filter((e) => String(e.type || '').startsWith('tree') || e.type === 'prerequisite');
  const crossEdgeList = edges.filter((e) => e.cross || e.type === 'connects' || e.type === 'applies-to');
  const crossIds = new Set(crossEdgeList.map((e) => `${e.source}|${e.target}|${e.type}`));
  const treeOnly = edges.filter((e) => !crossIds.has(`${e.source}|${e.target}|${e.type}`));

  const treePositions = new Float32Array(treeOnly.length * 6);
  const treeGeo = new THREE.BufferGeometry();
  treeGeo.setAttribute('position', new THREE.BufferAttribute(treePositions, 3));
  const treeMat = new THREE.LineBasicMaterial({
    color: EDGE_NEUTRAL,
    transparent: true,
    opacity: 0.2,
    depthTest: true,
    depthWrite: false,
    linewidth: 1, // ~1px where the GL driver honors it
  });
  const treeLines = new THREE.LineSegments(treeGeo, treeMat);
  treeLines.renderOrder = 0;
  treeLines.frustumCulled = false;
  scene.add(treeLines);

  const crossPositions = new Float32Array(crossEdgeList.length * 6);
  const crossGeo = new THREE.BufferGeometry();
  crossGeo.setAttribute('position', new THREE.BufferAttribute(crossPositions, 3));
  const crossMat = new THREE.LineDashedMaterial({
    color: EDGE_NEUTRAL,
    transparent: true,
    opacity: 0.24,
    dashSize: 0.45,
    gapSize: 0.3,
    depthTest: true,
    depthWrite: false,
    linewidth: 1,
  });
  const crossLines = new THREE.LineSegments(crossGeo, crossMat);
  crossLines.renderOrder = 0;
  crossLines.frustumCulled = false;
  scene.add(crossLines);
  refreshSceneTheme();
  const themeObs = new MutationObserver(() => refreshSceneTheme());
  themeObs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  // legacy alias used by selection opacity tweaks
  const lineMat = treeMat;
  const lineGeo = treeGeo;
  const positions = treePositions;

  // Edge midpoint handles (kept from later map work)
  const edgeHandleGroup = new THREE.Group();
  scene.add(edgeHandleGroup);
  const edgeHandles = [];
  // Midpoint affordance must never read as a knowledge-point sphere: keep a
  // small neutral dot while leaving the generous invisible hit area for hover.
  const handleGeo = new THREE.SphereGeometry(0.085, 8, 8);
  const handleHitGeo = new THREE.SphereGeometry(1.4, 8, 8);
  for (const e of relationEdges) {
    const a = byId.get(e.source);
    const b = byId.get(e.target);
    if (!a || !b) continue;
    const mat = new THREE.MeshBasicMaterial({ color: EDGE_NEUTRAL, transparent: true, opacity: e.cross ? 0.55 : 0.38, depthWrite: false });
    const dot = new THREE.Mesh(handleGeo, mat);
    const hit = new THREE.Mesh(handleHitGeo, new THREE.MeshBasicMaterial({ visible: false }));
    dot.add(hit);
    const rel = RELATIONS[`${e.source}=>${e.target}`] || RELATIONS[`${e.target}=>${e.source}`] || null;
    dot.userData = { kind: 'edge', edge: e, rel, sourceNode: a, targetNode: b };
    hit.userData = dot.userData;
    edgeHandleGroup.add(dot);
    edgeHandles.push(dot);
  }
  function updateEdgeHandles() {
    let hi = 0;
    for (const e of relationEdges) {
      const a = byId.get(e.source);
      const b = byId.get(e.target);
      const dot = edgeHandles[hi++];
      if (!dot || !a || !b) continue;
      dot.visible = true;
      dot.position.set((a.x + b.x) * 0.5, (a.y + b.y) * 0.5, (a.z + b.z) * 0.5);
    }
  }

  // highlight overlay lines (dynamic)
  let hotLine = null;
  function setHotEdges(pairs) {
    if (hotLine) {
      scene.remove(hotLine);
      hotLine.geometry.dispose();
      hotLine.material.dispose();
      hotLine = null;
    }
    if (!pairs.length) return;
    const arr = new Float32Array(pairs.length * 6);
    let i = 0;
    for (const [a, b] of pairs) {
      arr[i++] = a.x; arr[i++] = a.y; arr[i++] = a.z;
      arr[i++] = b.x; arr[i++] = b.y; arr[i++] = b.z;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(arr, 3));
    hotLine = new THREE.LineSegments(
      g,
      new THREE.LineBasicMaterial({ color: EDGE_HOT, transparent: true, opacity: 0.85, depthWrite: false }),
    );
    scene.add(hotLine);
  }

  // damped orbit targets
  let ax = 0.14;
  let ay = 0.02;
  let dist = 62;
  let tax = ax;
  let tay = ay;
  let tdist = dist;
  let panX = 0, panY = 0, panZ = 0;
  let tpanX = 0, tpanY = 0, tpanZ = 0;
  let dragging = false;
  let dragMode = 'rotate';
  let lastX = 0;
  let lastY = 0;
  let moved = false;
  let downX = 0, downY = 0;
  let downMods = { shift: false, meta: false, ctrl: false };
  const pointers = new Map();
  let pinchStartDist = 0;
  let pinchStartTdist = dist;
  let multiMode = false;
  const selected = new Set();
  let focusId = null;
  let hoverId = null;
  let idle = true;
  const t0 = performance.now();

  // adjacency for hover neighbor highlight
  const adj = new Map();
  for (const e of edges) {
    if (!adj.has(e.source)) adj.set(e.source, []);
    if (!adj.has(e.target)) adj.set(e.target, []);
    adj.get(e.source).push(e.target);
    adj.get(e.target).push(e.source);
  }
  function neighborSet(id) {
    const s = new Set([id]);
    for (const v of adj.get(id) || []) s.add(v);
    return s;
  }


  function fitGraph(fill = 0.82) {
    const box = new THREE.Box3();
    for (const n of nodes) box.expandByPoint(new THREE.Vector3(n.x, n.y, n.z));
    if (box.isEmpty()) return;
    const c = new THREE.Vector3();
    box.getCenter(c);
    panX = tpanX = c.x;
    panY = tpanY = c.y;
    panZ = tpanZ = c.z;
    // Flatter angle keeps the curriculum left→right and labels readable.
    ax = tax = 0.14;
    ay = tay = 0.02;

    // View-aligned camera basis at unit distance, then scale
    const right = new THREE.Vector3(
      Math.cos(ay),
      0,
      -Math.sin(ay),
    ).normalize();
    const forward = new THREE.Vector3(
      -Math.sin(ay) * Math.cos(ax),
      -Math.sin(ax),
      -Math.cos(ay) * Math.cos(ax),
    ).normalize();
    const up = new THREE.Vector3().crossVectors(right, forward).normalize();
    right.crossVectors(forward, up).normalize();

    let maxR = 0, maxU = 0;
    const v = new THREE.Vector3();
    for (const n of nodes) {
      v.set(n.x - c.x, n.y - c.y, n.z - c.z);
      maxR = Math.max(maxR, Math.abs(v.dot(right)));
      maxU = Math.max(maxU, Math.abs(v.dot(up)));
    }
    // Leave room for stage/unit labels at the outer edges.
    maxR *= 1.2;
    maxU *= 1.26;
    const fov = (camera.fov * Math.PI) / 180;
    const aspect = Math.max(0.55, camera.aspect || 1);
    const distForH = maxU / (Math.tan(fov / 2) * fill);
    const distForW = maxR / (Math.tan(fov / 2) * aspect * fill);
    let d = Math.max(distForH, distForW, 14);
    d = Math.max(18, Math.min(180, d));
    dist = tdist = d;
  }

  function resize() {
    const w = stage.clientWidth || 800;
    const h = stage.clientHeight || 500;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h, false);
    measureLabels();
  }
  resize();
  fitGraph(0.82);
  const ro = new ResizeObserver(() => {
    resize();
    // keep framing when shell resizes; don't fight user zoom after first interaction
    if (!userMovedCamera) fitGraph(0.82);
  });
  ro.observe(stage);
  let userMovedCamera = false;
  document.fonts?.ready?.then(() => { if (alive !== false) measureLabels(); }).catch(() => {});

  function applyCamera() {
    const cx = panX, cy = panY, cz = panZ;
    camera.position.set(
      cx + dist * Math.sin(ay) * Math.cos(ax),
      cy + dist * Math.sin(ax),
      cz + dist * Math.cos(ay) * Math.cos(ax),
    );
    camera.lookAt(cx, cy, cz);
  }

  function zoomBy(factor) {
    userMovedCamera = true;
    tdist = Math.max(10, Math.min(190, tdist * factor));
  }

  function resetView() {
    fitGraph(0.82);
    userMovedCamera = false;
    idle = true;
  }

  function pointerDistance() {
    const pts = [...pointers.values()];
    if (pts.length < 2) return 0;
    const [a, b] = pts;
    return Math.hypot(a.x - b.x, a.y - b.y);
  }

  function isTrackpadPanWheel(e) {
    // Heuristic: Mac trackpad two-finger scroll vs mouse wheel
    if (e.ctrlKey) return false; // pinch-zoom on trackpad
    if (e.deltaMode === 1 || e.deltaMode === 2) return false; // line/page → mouse-like zoom
    if (e.deltaX !== 0) return true;
    // fractional pixel deltas often trackpad
    if (Math.abs(e.deltaY) > 0 && Math.abs(e.deltaY) < 4) return true;
    if (!Number.isInteger(e.deltaY) && Math.abs(e.deltaY) < 40) return true;
    return false;
  }

  const raycaster = new THREE.Raycaster();
  raycaster.params.Points = { threshold: 0.5 };
  const pointer = new THREE.Vector2();
  function pick(ev) {
    const rect = renderer.domElement.getBoundingClientRect();
    pointer.x = ((ev.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((ev.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    // Nodes win over relation dots, so a precise click on a sphere never turns
    // into a nearby edge hit. The midpoint dots keep their generous hit area.
    const hits = raycaster.intersectObjects([...meshes.values()], true);
    if (hits.length) {
      let obj = hits[0].object;
      while (obj && !obj.userData?.id && obj.parent) obj = obj.parent;
      if (obj?.userData?.id) return { kind: 'node', data: obj.userData, mesh: obj };
    }
    const edgeHits = raycaster.intersectObjects(edgeHandles, true);
    if (edgeHits.length) {
      let obj = edgeHits[0].object;
      while (obj && (!obj.userData || obj.userData.kind !== 'edge') && obj.parent) obj = obj.parent;
      if (obj?.userData?.kind === 'edge') return { kind: 'edge', data: obj.userData, mesh: obj };
    }
    return null;
  }

  function openRelationPanel(ud) {
    const rel = ud.rel;
    const a = ud.sourceNode;
    const b = ud.targetNode;
    focusId = null;
    rememberPanelFocus();
    panel.hidden = false;
    clear(panel);
    const title = rel?.titleZh || `${a.code} → ${b.code}`;
    const closeBtn = el('button', {
      className: 'map-panel-close hit-target',
      type: 'button',
      text: '关闭',
      onclick: () => closePanel(),
    });
    panel.append(
      closeBtn,
      el('p', { className: 'topic-kicker', text: rel?.typeZh || ud.edge.type || '关系' }),
      el('h2', { id: 'map-panel-title', text: title }),
      el('p', { text: rel?.summary || '两知识点之间存在课程图谱连接。' }),
    );
    if (rel?.why) panel.appendChild(el('section', { className: 'topic-block' }, [el('h3', { text: '为何连接' }), el('p', { text: rel.why })]));
    if (rel?.shared?.length) {
      const ul = el('ul', { className: 'topic-list' });
      rel.shared.forEach((s) => ul.appendChild(el('li', { text: s })));
      panel.appendChild(el('section', { className: 'topic-block' }, [el('h3', { text: '共享概念' }), ul]));
    }
    if (rel?.example) panel.appendChild(el('section', { className: 'topic-block' }, [el('h3', { text: '联结例' }), el('p', { text: rel.example })]));
    panel.appendChild(el('a', { className: 'entry-row hit-target', href: `#/t/${subject}/${a.chapterId}/${a.code}`, text: `打开 ${a.code} ${a.titleZh}` }));
    panel.appendChild(el('a', { className: 'entry-row hit-target', href: `#/t/${subject}/${b.chapterId}/${b.code}`, text: `打开 ${b.code} ${b.titleZh}` }));
    focusPanel(closeBtn, title);
  }

  function relationsAmong(ids) {
    const set = new Set(ids);
    return edges.filter((e) => set.has(e.source) && set.has(e.target));
  }

  function pathEdgesAmong(ids) {
    const list = [...ids];
    const pairs = [];
    const seen = new Set();
    for (let i = 0; i < list.length; i++) {
      for (let j = i + 1; j < list.length; j++) {
        const path = shortestPath(edges, byId, list[i], list[j]);
        if (!path || path.length < 2) continue;
        for (let k = 0; k < path.length - 1; k++) {
          const a = path[k];
          const b = path[k + 1];
          const key = a < b ? `${a}|${b}` : `${b}|${a}`;
          if (seen.has(key)) continue;
          seen.add(key);
          pairs.push([byId.get(a), byId.get(b)]);
        }
      }
    }
    return pairs.filter((p) => p[0] && p[1]);
  }

  function refreshSelectionVisual() {
    const hasSel = selected.size > 0;
    clearBtn.hidden = !hasSel;
    const neigh = hoverId && !hasSel ? neighborSet(hoverId) : null;
    for (const [id, mesh] of meshes) {
      const n = mesh.userData;
      if (!mesh.visible && n.soleUnderStage) continue;
      const base = mesh.userData._baseColor ?? baseColor(n);
      const bs = mesh.userData._baseScale || baseScale(n);
      const baseOp = mesh.userData._baseOpacity ?? 0.95;
      if (hasSel) {
        if (selected.has(id)) {
          mesh.material.color.setHex(SELECT_COLOR);
          mesh.material.opacity = 1;
          mesh.userData._selBoost = 1.35;
        } else {
          mesh.material.color.setHex(base);
          mesh.material.opacity = Math.min(0.18, baseOp * 0.22);
          mesh.userData._selBoost = 0.85;
        }
      } else if (neigh) {
        if (neigh.has(id)) {
          mesh.material.color.setHex(id === hoverId ? mixHex(base, 0xffffff, 0.18) : base);
          mesh.material.opacity = 1;
          mesh.userData._selBoost = id === hoverId ? 1.25 : 1.1;
        } else {
          mesh.material.color.setHex(base);
          mesh.material.opacity = Math.min(0.14, baseOp * 0.18);
          mesh.userData._selBoost = 0.82;
        }
      } else {
        mesh.material.color.setHex(base);
        mesh.material.opacity = baseOp;
        mesh.userData._selBoost = 1;
      }
    }
    treeMat.opacity = hasSel ? 0.05 : (neigh ? 0.09 : (isDarkTheme() ? 0.26 : 0.18));
    crossMat.opacity = hasSel ? 0.06 : (neigh ? 0.1 : (isDarkTheme() ? 0.3 : 0.22));
    if (neigh && !hasSel) {
      crossMat.opacity = 0.1;
    }
    setHotEdges(hasSel ? pathEdgesAmong(selected) : []);
    // label dim
    for (const [id, lab] of labelEls) {
      if (!neigh && !hasSel) {
        lab.style.opacity = '';
        continue;
      }
      if (hasSel) {
        lab.style.opacity = selected.has(id) ? '1' : '0.25';
      } else {
        lab.style.opacity = neigh.has(id) ? '1' : '0.22';
      }
    }
  }

  function openDetail(n) {
    focusId = n.id;
    rememberPanelFocus();
    panel.hidden = false;
    clear(panel);
    const closeBtn = el('button', {
      className: 'map-panel-close hit-target',
      type: 'button',
      text: '关闭',
      onclick: () => closePanel(),
    });
    if (n.tier === 'stage') {
      const kids = nodes.filter((x) => x.tier === 'unit' && x.stageId === n.id);
      panel.append(
        closeBtn,
        el('p', { className: 'topic-kicker', text: '课程阶段' }),
        el('h2', { id: 'map-panel-title', text: n.titleZh }),
        el('p', { className: 'muted', text: n.titleEn }),
        el('p', { text: `下属单元 ${kids.length} 个；点击单元或知识点可继续下钻。` }),
      );
      kids.forEach((u) => {
        panel.appendChild(
          el('button', {
            className: 'entry-row hit-target',
            type: 'button',
            text: u.titleZh,
            onclick: () => openDetail(u),
          }),
        );
      });
      focusPanel(closeBtn, n.titleZh);
      return;
    }
    if (n.tier === 'unit') {
      const kids = nodes.filter((x) => x.tier === 'topic' && x.chapterId === n.chapterId);
      panel.append(
        closeBtn,
        el('p', { className: 'topic-kicker', text: `${n.layer === 'prep' ? '预备' : 'AP'} · 单元` }),
        el('h2', { id: 'map-panel-title', text: n.titleZh }),
        el('p', { className: 'muted', text: n.titleEn || n.chapterId }),
        el('p', { text: `本单元知识点 ${kids.length} 个。` }),
      );
      kids.slice(0, 24).forEach((t) => {
        panel.appendChild(
          el('a', {
            className: 'entry-row hit-target',
            href: `#/t/${subject}/${t.chapterId}/${t.code}`,
            text: `${t.code} ${t.titleZh}`,
          }),
        );
      });
      if (kids.length > 24) panel.appendChild(el('p', { className: 'muted', text: `…另有 ${kids.length - 24} 个` }));
      focusPanel(closeBtn, n.titleZh);
      return;
    }
    const title = `${n.code} ${n.titleZh}`;
    panel.append(
      closeBtn,
      el('p', { className: 'topic-kicker', text: `${n.layer === 'prep' ? '预备' : 'AP'} · Unit ${n.unitCode}` }),
      el('h2', { id: 'map-panel-title', text: title }),
      el('p', { className: 'muted', text: n.titleEn }),
      el('a', {
        className: 'entry-row hit-target',
        href: `#/t/${subject}/${n.chapterId}/${n.code}`,
        text: '打开知识点',
      }),
    );
    focusPanel(closeBtn, title);
  }

  function openMultiPanel() {
    if (selected.size === 0) {
      closePanel();
      return;
    }
    rememberPanelFocus();
    panel.hidden = false;
    clear(panel);
    const title = `已选 ${selected.size}`;
    const closeBtn = el('button', {
      className: 'map-panel-close hit-target',
      type: 'button',
      text: '关闭',
      onclick: () => closePanel(),
    });
    panel.append(
      closeBtn,
      el('h2', { id: 'map-panel-title', text: title }),
    );
    for (const id of selected) {
      const n = byId.get(id);
      if (!n) continue;
      if (n.tier !== 'topic') {
        panel.appendChild(el('p', { className: 'entry-row', text: n.titleZh }));
        continue;
      }
      panel.appendChild(
        el('a', {
          className: 'entry-row hit-target',
          href: `#/t/${subject}/${n.chapterId}/${n.code}`,
          text: `${n.code} ${n.titleZh}`,
        }),
      );
    }
    const rel = relationsAmong(selected);
    panel.appendChild(el('h3', { text: '关系' }));
    if (!rel.length) {
      panel.appendChild(el('p', { className: 'muted', text: '所选节点间无直接边；高亮为最短路径。' }));
    } else {
      rel.forEach((e) => {
        const a = byId.get(e.source);
        const b = byId.get(e.target);
        panel.appendChild(
          el('p', {
            className: 'map-rel muted',
            text: `${e.type} · ${a.code} → ${b.code}`,
          }),
        );
      });
    }
    focusPanel(closeBtn, title);
  }

  function clearSelection() {
    selected.clear();
    refreshSelectionVisual();
    if (focusId) openDetail(byId.get(focusId));
    else closePanel();
  }

  function toggleSelect(n) {
    if (selected.has(n.id)) selected.delete(n.id);
    else selected.add(n.id);
    refreshSelectionVisual();
    openMultiPanel();
  }

  function flyTo(n) {
    userMovedCamera = true;
    tpanX = n.x;
    tpanY = n.y;
    tpanZ = n.z;
    const targetDist = n.tier === 'topic' ? 30 : n.tier === 'unit' ? 42 : 54;
    tdist = Math.max(18, Math.min(140, targetDist));
    openDetail(n);
  }

  multiBtn.addEventListener('click', () => {
    multiMode = !multiMode;
    multiBtn.setAttribute('aria-pressed', multiMode ? 'true' : 'false');
    multiBtn.classList.toggle('primary', multiMode);
  });
  clearBtn.addEventListener('click', clearSelection);
  zoomIn.addEventListener('click', () => zoomBy(0.8));
  zoomOut.addEventListener('click', () => zoomBy(1.25));
  fitBtn.addEventListener('click', () => resetView());

  const onKey = (e) => {
    if (e.key === 'Escape') {
      if (selected.size) {
        e.preventDefault();
        clearSelection();
      } else if (!panel.hidden) {
        e.preventDefault();
        closePanel();
      }
    }
  };
  document.addEventListener('keydown', onKey);

  renderer.domElement.addEventListener('contextmenu', (e) => e.preventDefault());
  renderer.domElement.addEventListener('keydown', (e) => {
    const step = e.shiftKey ? 4 : 1.6;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault();
      userMovedCamera = true;
      if (e.key === 'ArrowLeft') tpanX -= step;
      if (e.key === 'ArrowRight') tpanX += step;
      if (e.key === 'ArrowUp') tpanY += step;
      if (e.key === 'ArrowDown') tpanY -= step;
    } else if (e.key === '+' || e.key === '=') {
      e.preventDefault();
      zoomBy(0.82);
    } else if (e.key === '-' || e.key === '_') {
      e.preventDefault();
      zoomBy(1.22);
    } else if (e.key === '0' || e.key === 'Home') {
      e.preventDefault();
      resetView();
    }
  });

  renderer.domElement.addEventListener('pointerdown', (e) => {
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    dragging = true;
    moved = false;
    downX = lastX = e.clientX;
    downY = lastY = e.clientY;
    // Capture modifiers at down — reliable for Shift+click in browser & Electron
    downMods = { shift: !!e.shiftKey, meta: !!e.metaKey, ctrl: !!e.ctrlKey };
    idle = false;
    userMovedCamera = true;
    if (e.button === 2 || e.buttons === 2) dragMode = 'pan';
    else if (pointers.size >= 2) {
      dragMode = 'pinch';
      pinchStartDist = pointerDistance() || 1;
      pinchStartTdist = tdist;
      // Start two-finger pan from the gesture centroid, not the second finger.
      const pts = [...pointers.values()];
      lastX = (pts[0].x + pts[1].x) / 2;
      lastY = (pts[0].y + pts[1].y) / 2;
    } else dragMode = 'rotate';
    try {
      renderer.domElement.setPointerCapture(e.pointerId);
    } catch (_) {}
    renderer.domElement.classList.add('grabbing');
  });

  function endPointer(e) {
    const wasMoved = moved;
    // Use down position — lastX/Y are overwritten while dragging
    const totalDx = e.clientX - downX;
    const totalDy = e.clientY - downY;
    const isClick = !wasMoved && Math.hypot(totalDx, totalDy) < 6;
    pointers.delete(e.pointerId);
    if (pointers.size === 0) {
      if (isClick && e.button === 0) {
        const hit = pick(e);
        if (hit?.kind === 'edge') {
          if (selected.size) {
            selected.clear();
            refreshSelectionVisual();
          }
          openRelationPanel(hit.data);
        } else if (hit?.kind === 'node') {
          const n = hit.data;
          const multi =
            multiMode ||
            downMods.shift ||
            downMods.meta ||
            downMods.ctrl ||
            e.shiftKey ||
            e.metaKey ||
            e.ctrlKey;
          if (multi && n.tier === 'topic') {
            toggleSelect(n);
          } else {
            if (selected.size) {
              selected.clear();
              refreshSelectionVisual();
            }
            openDetail(n);
          }
        }
      }
      dragging = false;
      dragMode = 'rotate';
      downMods = { shift: false, meta: false, ctrl: false };
      renderer.domElement.classList.remove('grabbing');
      setTimeout(() => {
        idle = true;
      }, 2000);
    } else if (pointers.size === 1) {
      // Back to a single pointer: resume drag-to-rotate.
      dragMode = 'rotate';
      const rem = [...pointers.values()][0];
      lastX = rem.x;
      lastY = rem.y;
    }
  }
  renderer.domElement.addEventListener('pointerup', endPointer);
  renderer.domElement.addEventListener('pointercancel', endPointer);

  renderer.domElement.addEventListener('pointermove', (e) => {
    if (pointers.has(e.pointerId)) pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (dragging && pointers.size >= 2) {
      const d = pointerDistance();
      if (pinchStartDist > 0 && d > 0) {
        const scale = pinchStartDist / d;
        tdist = Math.max(16, Math.min(160, pinchStartTdist * scale));
        moved = true;
      }
      // two-finger drag → pan
      const pts = [...pointers.values()];
      const mx = (pts[0].x + pts[1].x) / 2;
      const my = (pts[0].y + pts[1].y) / 2;
      const pdx = mx - lastX;
      const pdy = my - lastY;
      lastX = mx;
      lastY = my;
      if (Math.hypot(pdx, pdy) > 2) moved = true;
      const right = new THREE.Vector3();
      const up = new THREE.Vector3();
      camera.matrix.extractBasis(right, up, new THREE.Vector3());
      tpanX -= right.x * pdx * 0.04 - up.x * pdy * 0.04;
      tpanY -= right.y * pdx * 0.04 - up.y * pdy * 0.04;
      tpanZ -= right.z * pdx * 0.04 - up.z * pdy * 0.04;
      tooltip.hidden = true;
      return;
    }
    if (dragging) {
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const fromDown = Math.hypot(e.clientX - downX, e.clientY - downY);
      // Gate camera motion until past click threshold — keeps Shift+click reliable
      if (fromDown <= 6) {
        return;
      }
      if (Math.hypot(dx, dy) > 2 || fromDown > 6) moved = true;
      lastX = e.clientX;
      lastY = e.clientY;
      if (dragMode === 'pan') {
        const right = new THREE.Vector3();
        const up = new THREE.Vector3();
        camera.matrix.extractBasis(right, up, new THREE.Vector3());
        tpanX -= right.x * dx * 0.05 - up.x * dy * 0.05;
        tpanY -= right.y * dx * 0.05 - up.y * dy * 0.05;
        tpanZ -= right.z * dx * 0.05 - up.z * dy * 0.05;
      } else {
        tay += dx * 0.005;
        tax += dy * 0.005;
        tax = Math.max(-1.15, Math.min(1.15, tax));
      }
      tooltip.hidden = true;
    } else {
      if (e.pointerType === 'touch') {
        tooltip.hidden = true;
      } else {
        const hit = pick(e);
        const rect = stage.getBoundingClientRect();
        const showTooltip = (text) => {
          tooltip.hidden = false;
          tooltip.textContent = text;
          const tw = tooltip.offsetWidth || 200;
          const th = tooltip.offsetHeight || 30;
          const x = e.clientX - rect.left + 14;
          const y = e.clientY - rect.top + 14;
          tooltip.style.left = `${Math.max(8, Math.min(x, rect.width - tw - 12))}px`;
          tooltip.style.top = `${Math.max(8, Math.min(y, rect.height - th - 12))}px`;
        };
        if (hit?.kind === 'edge') {
          const a = hit.data.sourceNode;
          const b = hit.data.targetNode;
          showTooltip(`${a.code} ${a.titleZh} — ${b.code} ${b.titleZh}`);
          renderer.domElement.style.cursor = 'pointer';
        } else if (hit?.kind === 'node') {
          const n = hit.data;
          if (n.tier === 'stage') showTooltip(`${n.titleZh} · ${n.titleEn}`);
          else if (n.tier === 'unit') showTooltip(`单元 · ${n.titleZh}`);
          else showTooltip(`${n.code} ${n.titleZh}`);
          renderer.domElement.style.cursor = 'pointer';
          if (hoverId !== n.id) {
            hoverId = n.id;
            refreshSelectionVisual();
          }
        } else {
          tooltip.hidden = true;
          renderer.domElement.style.cursor = 'grab';
          if (hoverId) {
            hoverId = null;
            refreshSelectionVisual();
          }
        }
      }
    }
  });
  renderer.domElement.addEventListener('pointerleave', () => {
    tooltip.hidden = true;
    if (hoverId) {
      hoverId = null;
      refreshSelectionVisual();
    }
  });
  renderer.domElement.addEventListener(
    'wheel',
    (e) => {
      e.preventDefault();
      idle = false;
      userMovedCamera = true;
      if (e.ctrlKey) {
        // trackpad pinch
        tdist = Math.max(10, Math.min(190, tdist + e.deltaY * 0.05));
      } else if (isTrackpadPanWheel(e)) {
        const right = new THREE.Vector3();
        const up = new THREE.Vector3();
        camera.matrix.extractBasis(right, up, new THREE.Vector3());
        tpanX -= right.x * e.deltaX * 0.04 - up.x * e.deltaY * 0.04;
        tpanY -= right.y * e.deltaX * 0.04 - up.y * e.deltaY * 0.04;
        tpanZ -= right.z * e.deltaX * 0.04 - up.z * e.deltaY * 0.04;
      } else {
        // mouse wheel → zoom
        tdist = Math.max(10, Math.min(190, tdist + e.deltaY * 0.035));
      }
      setTimeout(() => {
        idle = true;
      }, 2000);
    },
    { passive: false },
  );

  function searchHit() {
    const q = search.value.trim().toLowerCase();
    if (!q) return null;
    return nodes.find((n) => n.tier === 'topic' && `${n.code} ${n.titleZh} ${n.titleEn}`.toLowerCase().includes(q))
      || nodes.find((n) => `${n.code} ${n.titleZh} ${n.titleEn || ''}`.toLowerCase().includes(q));
  }
  search.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      search.value = '';
      search.blur();
      return;
    }
    if (e.key !== 'Enter') return;
    e.preventDefault();
    const hit = searchHit();
    if (hit) flyTo(hit);
  });
  search.addEventListener('input', () => {
    search.title = search.value.trim() ? '按 Enter 跳转' : '';
  });


  function nodeEdgeRadius(n) {
    if (!n) return 0.2;
    if (n.tier === 'stage') return 0.55;
    if (n.tier === 'unit') return 0.38;
    return n.hasViz ? 0.34 : 0.3;
  }
  /** Trim segment so it stops at each node's surface — lines never paint across sphere faces. */
  function trimmedEndpoints(a, b) {
    const dx = b.x - a.x, dy = b.y - a.y, dz = b.z - a.z;
    const len = Math.hypot(dx, dy, dz) || 1;
    const ra = nodeEdgeRadius(a);
    const rb = nodeEdgeRadius(b);
    const t0 = Math.min(0.45, ra / len);
    const t1 = Math.min(0.45, rb / len);
    if (t0 + t1 >= 0.92) {
      // Degenerate short link: keep a tiny mid segment
      const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2, mz = (a.z + b.z) / 2;
      const ux = dx / len, uy = dy / len, uz = dz / len;
      return [mx - ux * 0.04, my - uy * 0.04, mz - uz * 0.04, mx + ux * 0.04, my + uy * 0.04, mz + uz * 0.04];
    }
    return [
      a.x + dx * t0, a.y + dy * t0, a.z + dz * t0,
      b.x - dx * t1, b.y - dy * t1, b.z - dz * t1,
    ];
  }

  let alive = true;
  let frame = 0;
  function tick() {
    if (!alive) return;
    const now = performance.now();
    // Layout is precomputed; keep nodes locked to home (no collapse after autofit)
    const camPos = camera.position;
    for (const n of nodes) {
      n.x = n.tx;
      n.y = n.ty;
      n.z = n.tz;
      const breathe = 0; // static layout keeps labels precisely anchored
      const m = meshes.get(n.id);
      if (!m) continue;
      m.position.set(n.x, n.y + breathe, n.z);
      // Near-constant screen size so near stages aren't giant blobs
      const d = Math.hypot(n.x - camPos.x, n.y + breathe - camPos.y, n.z - camPos.z) || REF_DIST;
      // Mild screen-stable scale + slight distance attenuation for depth
      const screen = Math.max(0.75, Math.min(1.25, d / REF_DIST));
      const atten = Math.max(0.72, Math.min(1.05, REF_DIST / Math.max(d, 8)));
      const boost = m.userData._selBoost || 1;
      m.scale.setScalar((m.userData._baseScale || 1) * screen * (0.55 + 0.45 * atten) * boost);
    }
    let i = 0;
    for (const e of treeOnly) {
      const a = byId.get(e.source);
      const b = byId.get(e.target);
      if (!a || !b) continue;
      const pts = trimmedEndpoints(a, b);
      treePositions[i] = pts[0]; treePositions[i + 1] = pts[1]; treePositions[i + 2] = pts[2];
      treePositions[i + 3] = pts[3]; treePositions[i + 4] = pts[4]; treePositions[i + 5] = pts[5];
      i += 6;
    }
    treeGeo.attributes.position.needsUpdate = true;

    let ci = 0;
    for (const e of crossEdgeList) {
      const a = byId.get(e.source);
      const b = byId.get(e.target);
      if (!a || !b) continue;
      const pts = trimmedEndpoints(a, b);
      crossPositions[ci++] = pts[0]; crossPositions[ci++] = pts[1]; crossPositions[ci++] = pts[2];
      crossPositions[ci++] = pts[3]; crossPositions[ci++] = pts[4]; crossPositions[ci++] = pts[5];
    }
    crossGeo.attributes.position.needsUpdate = true;
    crossLines.computeLineDistances();
    updateEdgeHandles();
    if (selected.size) setHotEdges(pathEdgesAmong(selected));

    // damp camera toward targets; no idle rotation, so labels stay precise
    ax += (tax - ax) * 0.08;
    ay += (tay - ay) * 0.08;
    dist += (tdist - dist) * 0.08;
    panX += (tpanX - panX) * 0.12;
    panY += (tpanY - panY) * 0.12;
    panZ += (tpanZ - panZ) * 0.12;
    applyCamera();
    updateLabels();
    renderer.render(scene, camera);
    frame = requestAnimationFrame(tick);
  }
  tick();
  refreshSelectionVisual();

  return {
    destroy() {
      alive = false;
      if (frame) cancelAnimationFrame(frame);
      document.removeEventListener('keydown', onKey);
      ro.disconnect();
      themeObs.disconnect();
      renderer.dispose();
      for (const g of geos) g.dispose();
      treeGeo.dispose();
      treeMat.dispose();
      crossGeo.dispose();
      crossMat.dispose();
      if (hotLine) {
        hotLine.geometry.dispose();
        hotLine.material.dispose();
      }
      const seenGeo = new Set();
      const seenMat = new Set();
      scene.traverse((obj) => {
        if (obj.geometry && !seenGeo.has(obj.geometry)) {
          seenGeo.add(obj.geometry);
          obj.geometry.dispose();
        }
        if (obj.material) {
          const list = Array.isArray(obj.material) ? obj.material : [obj.material];
          list.forEach((m) => {
            if (m && !seenMat.has(m)) {
              seenMat.add(m);
              m.dispose();
            }
          });
        }
      });
      renderer.forceContextLoss?.();
    },
  };
}
