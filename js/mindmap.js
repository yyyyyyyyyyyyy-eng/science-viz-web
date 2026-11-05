import * as THREE from '../vendor/three/three.module.js';
import { el, clear } from './ui-shared.js';
import { SUBJECT_LABEL } from './ui-shared.js';
import { loadCourseData } from '../data/courses.js';

/** Soft per-unit palette (AP); prep stays muted grey. */
const UNIT_COLORS_AP = [
  0xb86a45, 0x4a6fa5, 0x3d8b7a, 0x7a6aad, 0xa67c52, 0x3d7a8c, 0xa35d6a, 0x5a7a4a, 0x4a6aad, 0x8a5a4a,
];
const PREP_COLOR = 0x9aa0a6;
const EDGE_DIM = 0xb0b0b0;
const EDGE_HOT = 0xc45c26;
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

export async function renderMindMap(main, subject) {
  clear(main);
  const shell = el('div', { className: 'map-shell' });
  const toolbar = el('div', { className: 'map-toolbar' });
  const search = el('input', {
    className: 'map-search hit-target',
    type: 'search',
    placeholder: '搜索…',
    'aria-label': '搜索知识点',
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
    text: '清除选择',
    hidden: true,
  });
  const depthLabel = el('span', { className: 'map-depth-label muted', text: '层深' });
  const depthRange = el('input', {
    className: 'map-depth-range hit-target',
    type: 'range',
    min: '0',
    max: '6',
    value: '6',
    'aria-label': '显示层深',
  });
  const unfoldBtn = el('button', { type: 'button', className: 'btn hit-target', text: '展开动画' });
  toolbar.append(
    el('a', { className: 'hit-target', href: `#/${subject}`, text: SUBJECT_LABEL[subject] || subject }),
    el('span', { className: 'crumb-sep', text: '/' }),
    el('span', { text: '知识图谱' }),
    search,
    multiBtn,
    clearBtn,
    depthLabel,
    depthRange,
    unfoldBtn,
  );
  const stage = el('div', { className: 'map-stage', id: 'map-stage' });
  const panel = el('aside', { className: 'map-panel', hidden: true, id: 'map-panel' });
  const tooltip = el('div', { className: 'map-tooltip', hidden: true, role: 'tooltip' });
  stage.appendChild(tooltip);
  shell.append(toolbar, stage, panel);
  main.appendChild(shell);

  const data = await loadCourseData(subject);
  if (!data) {
    stage.textContent = '无法加载图谱数据';
    return { destroy() {} };
  }
  const { GRAPH } = data;
  const byIdRaw = new Map(GRAPH.nodes.map((n) => [n.id, n]));
  const edgesRaw = GRAPH.edges.filter((e) => byIdRaw.has(e.source) && byIdRaw.has(e.target));
  // Prerequisite depth via BFS from roots (nodes with no inbound edges)
  const indeg = new Map(GRAPH.nodes.map((n) => [n.id, 0]));
  for (const e of edgesRaw) indeg.set(e.target, (indeg.get(e.target) || 0) + 1);
  const depthMap = new Map();
  const q = [];
  for (const n of GRAPH.nodes) {
    if ((indeg.get(n.id) || 0) === 0) {
      depthMap.set(n.id, n.layer === 'prep' ? 0 : 1);
      q.push(n.id);
    }
  }
  const adj = new Map();
  for (const e of edgesRaw) {
    if (!adj.has(e.source)) adj.set(e.source, []);
    adj.get(e.source).push(e.target);
  }
  while (q.length) {
    const u = q.shift();
    for (const v of adj.get(u) || []) {
      const nd = (depthMap.get(u) || 0) + 1;
      if (!depthMap.has(v) || nd < depthMap.get(v)) {
        depthMap.set(v, nd);
        q.push(v);
      }
    }
  }
  let maxDepth = 0;
  for (const n of GRAPH.nodes) {
    if (!depthMap.has(n.id)) depthMap.set(n.id, n.layer === 'prep' ? 0 : 2);
    maxDepth = Math.max(maxDepth, depthMap.get(n.id));
  }
  // Group by depth shell; within shell, sector by unitIndex; Fibonacci sphere per shell
  const shells = new Map();
  for (const n of GRAPH.nodes) {
    const d = depthMap.get(n.id);
    if (!shells.has(d)) shells.set(d, []);
    shells.get(d).push(n);
  }
  function fibSphere(i, n) {
    const phi = Math.acos(1 - (2 * (i + 0.5)) / n);
    const theta = Math.PI * (1 + Math.sqrt(5)) * i;
    return {
      x: Math.sin(phi) * Math.cos(theta),
      y: Math.cos(phi),
      z: Math.sin(phi) * Math.sin(theta),
    };
  }
  const SHELL_R0 = 10;
  const SHELL_DR = 7;
  const nodes = [];
  for (const [d, list] of [...shells.entries()].sort((a, b) => a[0] - b[0])) {
    // sort by unit then topic for stable sectors
    list.sort((a, b) => (a.unitIndex - b.unitIndex) || (a.topicIndex - b.topicIndex));
    const R = SHELL_R0 + d * SHELL_DR;
    const unitIds = [...new Set(list.map((n) => n.unitIndex))];
    list.forEach((n, i) => {
      // blend Fibonacci with unit sector bias
      const fib = fibSphere(i, list.length);
      const sector = unitIds.indexOf(n.unitIndex);
      const sectorAngle = (sector / Math.max(1, unitIds.length)) * Math.PI * 2;
      const mix = 0.35;
      const bx = Math.cos(sectorAngle) * Math.sqrt(Math.max(0, 1 - fib.y * fib.y));
      const bz = Math.sin(sectorAngle) * Math.sqrt(Math.max(0, 1 - fib.y * fib.y));
      const x = (fib.x * (1 - mix) + bx * mix) * R;
      const y = fib.y * R;
      const z = (fib.z * (1 - mix) + bz * mix) * R;
      // normalize to exact shell radius
      const len = Math.hypot(x, y, z) || 1;
      nodes.push({
        ...n,
        depth: d,
        shellR: R,
        x: (x / len) * R,
        y: (y / len) * R,
        z: (z / len) * R,
        tx: (x / len) * R,
        ty: (y / len) * R,
        tz: (z / len) * R,
        vx: 0,
        vy: 0,
        vz: 0,
      });
    });
  }
  const byId = new Map(nodes.map((n) => [n.id, n]));
  const edges = edgesRaw;
  let revealDepth = maxDepth; // show all after unfold
  let unfoldT = 0; // 0..1 animation
  let RELATIONS = {};
  try {
    const relMod = await import(`../data/${subject}/relations.js`);
    RELATIONS = relMod.RELATIONS || {};
  } catch (_) {}


  const bgHex = cssColor('--canvas-plot', '#f7f5f0');
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(bgHex);
  scene.fog = new THREE.FogExp2(new THREE.Color(bgHex).getHex(), 0.008);

  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 400);
  camera.position.set(0, 14, 62);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  stage.appendChild(renderer.domElement);
  renderer.domElement.classList.add('map-canvas');
  renderer.domElement.style.touchAction = 'none';

  scene.add(new THREE.AmbientLight(0xffffff, 0.9));
  const key = new THREE.DirectionalLight(0xffffff, 0.35);
  key.position.set(20, 30, 10);
  scene.add(key);

  const nodeGroup = new THREE.Group();
  scene.add(nodeGroup);
  const meshes = new Map();
  const geo = new THREE.SphereGeometry(0.28, 16, 16);
  for (const n of nodes) {
    const color = n.layer === 'prep' ? PREP_COLOR : UNIT_COLORS_AP[n.unitIndex % UNIT_COLORS_AP.length];
    const mat = new THREE.MeshStandardMaterial({
      color,
      roughness: 0.55,
      metalness: 0.05,
      transparent: true,
      opacity: n.layer === 'prep' ? 0.75 : 0.95,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(n.x, n.y, n.z);
    mesh.userData = n;
    mesh.scale.setScalar(n.hasViz ? 1.25 : n.layer === 'prep' ? 0.8 : 1);
    // larger invisible hit target for easier hover/click
    const hitGeo = new THREE.SphereGeometry(0.9, 8, 8);
    const hitMat = new THREE.MeshBasicMaterial({ visible: false });
    const hit = new THREE.Mesh(hitGeo, hitMat);
    hit.userData = n;
    mesh.add(hit);
    nodeGroup.add(mesh);
    meshes.set(n.id, mesh);
    mesh.userData._hit = hit;
    mesh.userData.depth = n.depth;
  }

  // Concentric shell wireframes
  const shellGroup = new THREE.Group();
  scene.add(shellGroup);
  const shellMats = [];
  for (let d = 0; d <= maxDepth; d++) {
    const R = SHELL_R0 + d * SHELL_DR;
    const sg = new THREE.SphereGeometry(R, 48, 24);
    const sm = new THREE.MeshBasicMaterial({
      color: d === 0 ? 0x9aa0a6 : UNIT_COLORS_AP[d % UNIT_COLORS_AP.length],
      wireframe: true,
      transparent: true,
      opacity: 0.08,
      depthWrite: false,
    });
    shellMats.push(sm);
    const mesh = new THREE.Mesh(sg, sm);
    mesh.userData.depth = d;
    shellGroup.add(mesh);
  }

  depthRange.max = String(maxDepth);
  depthRange.value = String(maxDepth);
  function applyReveal() {
    for (const n of nodes) {
      const m = meshes.get(n.id);
      if (!m) continue;
      const show = n.depth <= revealDepth;
      m.visible = show;
      m.material.opacity = show ? (n.layer === 'prep' ? 0.75 : 0.95) : 0;
    }
    shellGroup.children.forEach((c) => {
      c.visible = c.userData.depth <= revealDepth;
      c.material.opacity = c.userData.depth === revealDepth ? 0.14 : 0.06;
    });
  }
  depthRange.addEventListener('input', () => {
    revealDepth = Number(depthRange.value);
    applyReveal();
  });
  unfoldBtn.addEventListener('click', () => {
    unfoldT = 0;
    revealDepth = 0;
    depthRange.value = '0';
    applyReveal();
  });
  // start unfold on load
  unfoldT = 0;
  revealDepth = 0;
  depthRange.value = '0';

  const positions = new Float32Array(edges.length * 6);
  const lineGeo = new THREE.BufferGeometry();
  lineGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const lineMat = new THREE.LineBasicMaterial({
    color: EDGE_DIM,
    transparent: true,
    opacity: 0.22,
    depthWrite: false,
  });
  const lines = new THREE.LineSegments(lineGeo, lineMat);
  scene.add(lines);

  const edgeHandleGroup = new THREE.Group();
  scene.add(edgeHandleGroup);
  const edgeHandles = [];
  const handleGeo = new THREE.SphereGeometry(0.22, 10, 10);
  const handleHitGeo = new THREE.SphereGeometry(1.35, 8, 8);
  for (const e of edges) {
    const a = byId.get(e.source);
    const b = byId.get(e.target);
    if (!a || !b) continue;
    const mat = new THREE.MeshStandardMaterial({
      color: 0xb0b0b0,
      roughness: 0.4,
      metalness: 0.15,
      transparent: true,
      opacity: 0.55,
    });
    const dot = new THREE.Mesh(handleGeo, mat);
    const hit = new THREE.Mesh(handleHitGeo, new THREE.MeshBasicMaterial({ visible: false }));
    dot.add(hit);
    const rel = RELATIONS[`${e.source}=>${e.target}`] || null;
    dot.userData = { kind: 'edge', edge: e, rel, sourceNode: a, targetNode: b };
    hit.userData = dot.userData;
    edgeHandleGroup.add(dot);
    edgeHandles.push(dot);
  }
  function updateEdgeHandles() {
    let hi = 0;
    for (const e of edges) {
      const a = byId.get(e.source);
      const b = byId.get(e.target);
      const dot = edgeHandles[hi++];
      if (!dot || !a || !b) continue;
      dot.visible = a.depth <= revealDepth && b.depth <= revealDepth;
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
  let ax = 0.28;
  let ay = 0.15;
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
  let idle = true;
  const t0 = performance.now();

  function resize() {
    const w = stage.clientWidth || 800;
    const h = stage.clientHeight || 500;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h, false);
  }
  resize();
  const ro = new ResizeObserver(resize);
  ro.observe(stage);

  function applyCamera() {
    const cx = panX, cy = panY, cz = panZ;
    camera.position.set(
      cx + dist * Math.sin(ay) * Math.cos(ax),
      cy + dist * Math.sin(ax),
      cz + dist * Math.cos(ay) * Math.cos(ax),
    );
    camera.lookAt(cx, cy, cz);
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
    const edgeHits = raycaster.intersectObjects(edgeHandles, true);
    if (edgeHits.length) {
      let obj = edgeHits[0].object;
      while (obj && (!obj.userData || obj.userData.kind !== 'edge') && obj.parent) obj = obj.parent;
      if (obj?.userData?.kind === 'edge') return { kind: 'edge', data: obj.userData, mesh: obj };
    }
    const hits = raycaster.intersectObjects([...meshes.values()], true);
    if (hits.length) {
      let obj = hits[0].object;
      while (obj && !obj.userData?.code && obj.parent) obj = obj.parent;
      if (obj?.userData?.code || obj?.userData?.id) return { kind: 'node', data: obj.userData, mesh: obj };
    }
    return null;
  }

  function openRelationPanel(ud) {
    const rel = ud.rel;
    const a = ud.sourceNode;
    const b = ud.targetNode;
    focusId = null;
    panel.hidden = false;
    clear(panel);
    panel.append(
      el('button', {
        className: 'map-panel-close hit-target',
        type: 'button',
        text: '关闭',
        onclick: () => { panel.hidden = true; },
      }),
      el('p', { className: 'topic-kicker', text: rel?.typeZh || ud.edge.type || '关系' }),
      el('h2', { text: rel?.titleZh || `${a.code} → ${b.code}` }),
      el('p', { text: rel?.summary || '两知识点之间存在课程图谱连接。' }),
    );
    if (rel?.why) {
      panel.appendChild(el('section', { className: 'topic-block' }, [el('h3', { text: '为何连接' }), el('p', { text: rel.why })]));
    }
    if (rel?.shared?.length) {
      const ul = el('ul', { className: 'topic-list' });
      rel.shared.forEach((s) => ul.appendChild(el('li', { text: s })));
      panel.appendChild(el('section', { className: 'topic-block' }, [el('h3', { text: '共享概念' }), ul]));
    }
    if (rel?.example) {
      panel.appendChild(el('section', { className: 'topic-block' }, [el('h3', { text: '联结例' }), el('p', { text: rel.example })]));
    }
    if (rel?.steps?.length) {
      const ol = el('ol', { className: 'topic-list' });
      rel.steps.forEach((s) => ol.appendChild(el('li', { text: s })));
      panel.appendChild(el('section', { className: 'topic-block' }, [el('h3', { text: '自学步骤' }), ol]));
    }
    panel.appendChild(el('a', { className: 'entry-row hit-target', href: rel?.sourceHref || `#/t/${subject}/${a.chapterId}/${a.code}`, text: `打开 ${a.code} ${a.titleZh}` }));
    panel.appendChild(el('a', { className: 'entry-row hit-target', href: rel?.targetHref || `#/t/${subject}/${b.chapterId}/${b.code}`, text: `打开 ${b.code} ${b.titleZh}` }));
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
    const has = selected.size > 0;
    clearBtn.hidden = !has;
    for (const [id, mesh] of meshes) {
      const n = mesh.userData;
      const base = n.layer === 'prep' ? PREP_COLOR : UNIT_COLORS_AP[n.unitIndex % UNIT_COLORS_AP.length];
      if (!has) {
        mesh.material.color.setHex(base);
        mesh.material.opacity = n.layer === 'prep' ? 0.75 : 0.95;
        mesh.scale.setScalar(n.hasViz ? 1.25 : n.layer === 'prep' ? 0.8 : 1);
      } else if (selected.has(id)) {
        mesh.material.color.setHex(SELECT_COLOR);
        mesh.material.opacity = 1;
        mesh.scale.setScalar((n.hasViz ? 1.25 : 1) * 1.45);
      } else {
        mesh.material.color.setHex(base);
        mesh.material.opacity = 0.18;
        mesh.scale.setScalar(n.hasViz ? 1.05 : 0.7);
      }
    }
    lineMat.opacity = has ? 0.06 : 0.22;
    setHotEdges(has ? pathEdgesAmong(selected) : []);
  }

  function openDetail(n) {
    focusId = n.id;
    panel.hidden = false;
    clear(panel);
    panel.append(
      el('button', {
        className: 'map-panel-close hit-target',
        type: 'button',
        text: '关闭',
        onclick: () => {
          panel.hidden = true;
          focusId = null;
        },
      }),
      el('p', { className: 'topic-kicker', text: `${n.layer === 'prep' ? '预备' : 'AP'} · Unit ${n.unitCode}` }),
      el('h2', { text: `${n.code} ${n.titleZh}` }),
      el('p', { className: 'muted', text: n.titleEn }),
      el('a', {
        className: 'entry-row hit-target',
        href: `#/t/${subject}/${n.chapterId}/${n.code}`,
        text: '打开知识点',
      }),
    );
  }

  function openMultiPanel() {
    if (selected.size === 0) {
      panel.hidden = true;
      return;
    }
    panel.hidden = false;
    clear(panel);
    panel.append(
      el('button', {
        className: 'map-panel-close hit-target',
        type: 'button',
        text: '关闭',
        onclick: () => {
          panel.hidden = true;
        },
      }),
      el('h2', { text: `已选 ${selected.size}` }),
    );
    for (const id of selected) {
      const n = byId.get(id);
      if (!n) continue;
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
  }

  function clearSelection() {
    selected.clear();
    refreshSelectionVisual();
    if (focusId) openDetail(byId.get(focusId));
    else panel.hidden = true;
  }

  function toggleSelect(n) {
    if (selected.has(n.id)) selected.delete(n.id);
    else selected.add(n.id);
    refreshSelectionVisual();
    openMultiPanel();
  }

  function flyTo(n) {
    const targetDist = Math.hypot(n.x, n.y, n.z) + 16;
    tdist = Math.max(18, Math.min(70, targetDist));
    openDetail(n);
  }

  multiBtn.addEventListener('click', () => {
    multiMode = !multiMode;
    multiBtn.setAttribute('aria-pressed', multiMode ? 'true' : 'false');
    multiBtn.classList.toggle('primary', multiMode);
  });
  clearBtn.addEventListener('click', clearSelection);

  const onKey = (e) => {
    if (e.key === 'Escape') {
      if (selected.size) {
        e.preventDefault();
        clearSelection();
      } else if (!panel.hidden) {
        panel.hidden = true;
        focusId = null;
      }
    }
  };
  document.addEventListener('keydown', onKey);

  renderer.domElement.addEventListener('contextmenu', (e) => e.preventDefault());

  renderer.domElement.addEventListener('pointerdown', (e) => {
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    dragging = true;
    moved = false;
    downX = lastX = e.clientX;
    downY = lastY = e.clientY;
    // Capture modifiers at down — reliable for Shift+click in browser & Electron
    downMods = { shift: !!e.shiftKey, meta: !!e.metaKey, ctrl: !!e.ctrlKey };
    idle = false;
    if (e.button === 2 || e.buttons === 2) dragMode = 'pan';
    else if (pointers.size >= 2) {
      dragMode = 'pinch';
      pinchStartDist = pointerDistance() || 1;
      pinchStartTdist = tdist;
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
          if (multi) {
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
      dragMode = 'pan';
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
        tdist = Math.max(16, Math.min(90, pinchStartTdist * scale));
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
      const hit = pick(e);
      const rect = stage.getBoundingClientRect();
      for (const d of edgeHandles) {
        d.material.opacity = 0.55;
        d.material.color.setHex(0xb0b0b0);
      }
      if (hit?.kind === 'edge') {
        const ud = hit.data;
        const a = ud.sourceNode;
        const b = ud.targetNode;
        const typ = ud.rel?.typeZh || ud.edge.type || '关系';
        tooltip.hidden = false;
        tooltip.textContent = `${a.code} ${a.titleZh} —[${typ}]→ ${b.code} ${b.titleZh}`;
        const x = e.clientX - rect.left + 14;
        const y = e.clientY - rect.top + 14;
        tooltip.style.left = `${Math.min(x, rect.width - 300)}px`;
        tooltip.style.top = `${Math.min(y, rect.height - 40)}px`;
        renderer.domElement.style.cursor = 'pointer';
        if (hit.mesh?.material) {
          hit.mesh.material.opacity = 0.95;
          hit.mesh.material.color.setHex(EDGE_HOT);
        }
      } else if (hit?.kind === 'node') {
        const n = hit.data;
        tooltip.hidden = false;
        tooltip.textContent = `${n.code} ${n.titleZh}`;
        const x = e.clientX - rect.left + 14;
        const y = e.clientY - rect.top + 14;
        tooltip.style.left = `${Math.min(x, rect.width - 180)}px`;
        tooltip.style.top = `${Math.min(y, rect.height - 40)}px`;
        renderer.domElement.style.cursor = 'pointer';
      } else {
        tooltip.hidden = true;
        renderer.domElement.style.cursor = 'grab';
      }
    }
  });
  renderer.domElement.addEventListener('pointerleave', () => {
    tooltip.hidden = true;
  });
  renderer.domElement.addEventListener(
    'wheel',
    (e) => {
      e.preventDefault();
      idle = false;
      if (e.ctrlKey) {
        // trackpad pinch
        tdist = Math.max(16, Math.min(90, tdist + e.deltaY * 0.05));
      } else if (isTrackpadPanWheel(e)) {
        const right = new THREE.Vector3();
        const up = new THREE.Vector3();
        camera.matrix.extractBasis(right, up, new THREE.Vector3());
        tpanX -= right.x * e.deltaX * 0.04 - up.x * e.deltaY * 0.04;
        tpanY -= right.y * e.deltaX * 0.04 - up.y * e.deltaY * 0.04;
        tpanZ -= right.z * e.deltaX * 0.04 - up.z * e.deltaY * 0.04;
      } else {
        // mouse wheel → zoom
        tdist = Math.max(16, Math.min(90, tdist + e.deltaY * 0.035));
      }
      setTimeout(() => {
        idle = true;
      }, 2000);
    },
    { passive: false },
  );

  search.addEventListener('input', () => {
    const q = search.value.trim().toLowerCase();
    if (!q) return;
    const hit = nodes.find((n) => `${n.code} ${n.titleZh} ${n.titleEn}`.toLowerCase().includes(q));
    if (hit) flyTo(hit);
  });

  let alive = true;
  function tick() {
    if (!alive) return;
    const now = performance.now();
    // Unfold animation: reveal shells layer by layer
    if (unfoldT < 1) {
      unfoldT = Math.min(1, unfoldT + 0.004);
      const target = Math.min(maxDepth, Math.floor(unfoldT * (maxDepth + 1.001)));
      if (target !== revealDepth) {
        revealDepth = target;
        depthRange.value = String(revealDepth);
        applyReveal();
      }
    }
    // Hold spherical layout; tiny breathe only
    for (const n of nodes) {
      n.x += (n.tx - n.x) * 0.12;
      n.y += (n.ty - n.y) * 0.12;
      n.z += (n.tz - n.z) * 0.12;
      const breathe = idle ? Math.sin((now - t0) * 0.0004 + n.unitIndex) * 0.06 : 0;
      const m = meshes.get(n.id);
      if (m) {
        m.position.set(n.x, n.y + breathe, n.z);
        m.visible = n.depth <= revealDepth;
      }
    }
    // Curved edge midpoints for nicer arcs (polyline 2 segments)
    // keep LineSegments endpoints at nodes
    let i = 0;
    for (const e of edges) {
      const a = byId.get(e.source);
      const b = byId.get(e.target);
      if (a.depth > revealDepth || b.depth > revealDepth) {
        positions[i++] = 0; positions[i++] = 0; positions[i++] = 0;
        positions[i++] = 0; positions[i++] = 0; positions[i++] = 0;
        continue;
      }
      positions[i++] = a.x;
      positions[i++] = a.y;
      positions[i++] = a.z;
      positions[i++] = b.x;
      positions[i++] = b.y;
      positions[i++] = b.z;
    }
    lineGeo.attributes.position.needsUpdate = true;
    updateEdgeHandles();
    if (selected.size) setHotEdges(pathEdgesAmong(selected));

    // damp camera toward targets + idle drift
    if (idle) tay += 0.0008;
    ax += (tax - ax) * 0.08;
    ay += (tay - ay) * 0.08;
    dist += (tdist - dist) * 0.08;
    panX += (tpanX - panX) * 0.12;
    panY += (tpanY - panY) * 0.12;
    panZ += (tpanZ - panZ) * 0.12;
    applyCamera();
    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  }
  applyReveal();
  tick();
  refreshSelectionVisual();

  return {
    destroy() {
      alive = false;
      document.removeEventListener('keydown', onKey);
      ro.disconnect();
      renderer.dispose();
      geo.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      if (hotLine) {
        hotLine.geometry.dispose();
        hotLine.material.dispose();
      }
    },
  };
}
