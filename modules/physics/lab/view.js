/**
 * Three.js viewport for the free-exploration physics lab.
 * Blender-like orbit/pan/zoom, raycast selection and a transform gizmo.
 * All geometry/material/texture/control resources are disposed in destroy().
 */
import * as THREE from '../../../vendor/three/three.module.js';
import { OrbitControls } from '../../../vendor/three/controls/OrbitControls.js';
import { TransformControls } from '../../../vendor/three/controls/TransformControls.js';
import { themeColors } from '../../../js/theme.js';
import { DEG, getSurface, getTurntable, pendulumBob, surfaceFrame, surfaceTopPoint } from './physics.mjs';

const NO_PICK = { noPick: true };

function v3(c) {
  return new THREE.Vector3(c.x, c.y, c.z);
}

function signatureOf(entity) {
  if (!entity) return '';
  switch (entity.type) {
    case 'surface':
      return `${entity.type}:${entity.kind}:${entity.length}:${entity.width}:${entity.thickness}`;
    case 'loop':
      return `${entity.type}:${entity.radius}`;
    case 'turntable':
      return `${entity.type}:${entity.radius}`;
    case 'hcircle':
      return `${entity.type}:${entity.radius}`;
    case 'body':
      return `${entity.type}:${entity.kind}:${entity.size || entity.radius}:${entity.width || 0}`;
    case 'launcher':
      return `${entity.type}:${entity.height}:${entity.angle}`;
    case 'pulley':
      return `${entity.type}:${entity.radius}`;
    case 'barrier':
      return `${entity.type}:${entity.kind}:${entity.width}:${entity.height}:${entity.radius}`;
    case 'pendulum':
      return `${entity.type}:${entity.length}:${entity.radius}`;
    case 'wedge':
      return `${entity.type}:${entity.angle}:${entity.length}:${entity.width}`;
    case 'sensor':
      return `${entity.type}:${entity.kind}:${entity.width}:${entity.height}`;
    case 'fan':
      return `${entity.type}`;
    default:
      return entity.type;
  }
}

export function createLabView(host, opts = {}) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 240);
  camera.position.set(7, 5.6, 9);

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: false,
    powerPreference: 'high-performance',
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.domElement.className = 'plab-canvas';
  renderer.domElement.setAttribute('aria-label', '物理实验室三维场景 · Physics lab 3D scene');
  host.appendChild(renderer.domElement);

  const orbit = new OrbitControls(camera, renderer.domElement);
  orbit.enableDamping = true;
  orbit.dampingFactor = 0.09;
  orbit.screenSpacePanning = true;
  orbit.minDistance = 2.2;
  orbit.maxDistance = 46;
  orbit.maxPolarAngle = Math.PI * 0.495;
  orbit.target.set(0, 1.6, 0);
  orbit.update();

  const transform = new TransformControls(camera, renderer.domElement);
  transform.size = 0.86;
  transform.setSpace('world');
  const transformHelper = transform.getHelper();
  transformHelper.userData = { ...NO_PICK };
  scene.add(transformHelper);

  const theme = themeColors();
  const materials = {
    surface: new THREE.MeshStandardMaterial({ color: theme.grid, roughness: 0.88, metalness: 0.02 }),
    track: new THREE.MeshStandardMaterial({ color: theme.grid, roughness: 0.9, metalness: 0.02 }),
    accent: new THREE.MeshStandardMaterial({ color: theme.accent, roughness: 0.68, metalness: 0.08 }),
    physics: new THREE.MeshStandardMaterial({ color: theme.physics, roughness: 0.7, metalness: 0.05 }),
    wheel: new THREE.MeshStandardMaterial({ color: theme.text, roughness: 0.65, metalness: 0.1 }),
    spring: new THREE.MeshStandardMaterial({ color: theme.ok, roughness: 0.6, metalness: 0.1 }),
    meter: new THREE.MeshStandardMaterial({ color: theme.warn, roughness: 0.55, metalness: 0.12 }),
    line: new THREE.LineBasicMaterial({ color: theme.border }),
    accentLine: new THREE.LineBasicMaterial({ color: theme.accent }),
    trail: new THREE.LineBasicMaterial({ color: theme.accent, transparent: true, opacity: 0.9 }),
    transparent: new THREE.MeshBasicMaterial({ color: theme.accent, transparent: true, opacity: 0.012, depthWrite: false }),
    ground: new THREE.ShadowMaterial({ opacity: 0.16 }),
  };

  const ground = new THREE.Mesh(new THREE.PlaneGeometry(80, 80), materials.ground);
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = 0;
  ground.receiveShadow = true;
  ground.userData = { ...NO_PICK };
  scene.add(ground);

  let grid = null;
  function buildGrid() {
    if (grid) {
      scene.remove(grid);
      grid.geometry.dispose();
      grid.material.dispose();
    }
    grid = new THREE.GridHelper(40, 40, theme.axis, theme.axis);
    grid.position.y = 0.006;
    grid.material.transparent = true;
    grid.material.opacity = 0.4;
    grid.material.color.set('#ffffff');
    grid.userData = { ...NO_PICK };
    scene.add(grid);
  }
  buildGrid();

  const axes = new THREE.AxesHelper(1.5);
  axes.position.y = 0.004;
  axes.userData = { ...NO_PICK };
  scene.add(axes);

  const hemi = new THREE.HemisphereLight(0xffffff, 0x5a5a55, 0.95);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xffffff, 1.35);
  sun.position.set(7, 13, 9);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  sun.shadow.camera.left = -16;
  sun.shadow.camera.right = 16;
  sun.shadow.camera.top = 16;
  sun.shadow.camera.bottom = -16;
  sun.shadow.camera.near = 0.5;
  sun.shadow.camera.far = 50;
  sun.shadow.bias = -0.0008;
  scene.add(sun);
  const fill = new THREE.DirectionalLight(0xffffff, 0.32);
  fill.position.set(-9, 6, -8);
  scene.add(fill);

  const selectionHelper = new THREE.Box3Helper(new THREE.Box3(), theme.accent);
  selectionHelper.material.transparent = true;
  selectionHelper.material.opacity = 0.95;
  selectionHelper.material.depthTest = false;
  selectionHelper.renderOrder = 999;
  selectionHelper.visible = false;
  selectionHelper.userData = { ...NO_PICK };
  scene.add(selectionHelper);

  const forceGroup = new THREE.Group();
  forceGroup.userData = { ...NO_PICK };
  scene.add(forceGroup);
  const forceColors = {
    weight: theme.text,
    normal: theme.accent,
    friction: theme.warn,
    spring: theme.ok,
    applied: theme.danger,
  };
  const arrows = {};
  for (const key of Object.keys(forceColors)) {
    const arrow = new THREE.ArrowHelper(
      new THREE.Vector3(0, 1, 0),
      new THREE.Vector3(),
      1,
      forceColors[key],
      0.2,
      0.09,
    );
    arrow.visible = false;
    arrow.userData = { ...NO_PICK };
    forceGroup.add(arrow);
    arrows[key] = arrow;
  }

  // Selected-body trajectory trail.
  const TRAIL_MAX = 1600;
  const trailGeo = new THREE.BufferGeometry();
  trailGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(TRAIL_MAX * 3), 3));
  trailGeo.setDrawRange(0, 0);
  const trailMaterial = new THREE.LineBasicMaterial({ color: theme.accent, transparent: true, opacity: 0.9 });
  const trailLine = new THREE.Line(trailGeo, trailMaterial);
  trailLine.visible = false;
  trailLine.frustumCulled = false;
  trailLine.userData = { ...NO_PICK };
  scene.add(trailLine);
  let trailVisible = false;
  let trailCount = 0;
  let trailLastTime = -1;

  function clearTrail() {
    trailCount = 0;
    trailLastTime = -1;
    trailGeo.setDrawRange(0, 0);
    const attr = trailGeo.getAttribute('position');
    if (attr) attr.needsUpdate = true;
  }

  function setTrailVisible(value) {
    trailVisible = !!value;
    trailLine.visible = trailVisible;
    if (!trailVisible) clearTrail();
  }

  function updateTrail(world) {
    if (!trailVisible || !selected || selected.type !== 'body') return;
    const body = world.bodies.find((b) => b.id === selected.id);
    if (!body) return;
    if (trailCount > 0 && world.time - trailLastTime < 0.035) return;
    trailLastTime = world.time;
    const attr = trailGeo.getAttribute('position');
    if (trailCount >= TRAIL_MAX) {
      attr.array.copyWithin(0, 3);
      trailCount = TRAIL_MAX - 1;
    }
    const i = trailCount * 3;
    attr.array[i] = body.cannon.position.x;
    attr.array[i + 1] = body.cannon.position.y;
    attr.array[i + 2] = body.cannon.position.z;
    trailCount += 1;
    attr.needsUpdate = true;
    trailGeo.setDrawRange(0, trailCount);
    trailGeo.computeBoundingSphere();
  }

  // Ruler / measure tool.
  const rulerGeo = new THREE.BufferGeometry();
  rulerGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(6), 3));
  const rulerMaterial = new THREE.LineBasicMaterial({ color: theme.warn });
  const rulerLine = new THREE.Line(rulerGeo, rulerMaterial);
  rulerLine.visible = false;
  rulerLine.frustumCulled = false;
  rulerLine.userData = { ...NO_PICK };
  scene.add(rulerLine);
  const rulerDotGeo = new THREE.SphereGeometry(0.055, 10, 8);
  const rulerDots = [0, 1].map(() => {
    const dot = new THREE.Mesh(rulerDotGeo, rulerMaterial);
    dot.visible = false;
    dot.userData = { ...NO_PICK };
    scene.add(dot);
    return dot;
  });

  function setRuler(a, b) {
    const attr = rulerGeo.getAttribute('position');
    attr.setXYZ(0, a.x, a.y, a.z);
    attr.setXYZ(1, b.x, b.y, b.z);
    attr.needsUpdate = true;
    rulerGeo.computeBoundingSphere();
    rulerDots[0].position.copy(a);
    rulerDots[1].position.copy(b);
    rulerDots[0].visible = true;
    rulerDots[1].visible = true;
    rulerLine.visible = true;
    return Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z);
  }

  function clearRuler() {
    rulerLine.visible = false;
    rulerDots[0].visible = false;
    rulerDots[1].visible = false;
  }

  // Direct-manipulation handles: a velocity arrow on bodies and an angle
  // handle at the high edge of a selected surface. These are intentionally
  // separate from the transform gizmo so dragging works without choosing a
  // gizmo mode first.
  const handleGroup = new THREE.Group();
  handleGroup.userData = { ...NO_PICK };
  scene.add(handleGroup);
  const velocityMaterial = new THREE.LineBasicMaterial({ color: theme.accent, transparent: true, opacity: 0.95 });
  const velocityArrow = new THREE.ArrowHelper(
    new THREE.Vector3(1, 0, 0),
    new THREE.Vector3(),
    1,
    theme.accent,
    0.22,
    0.1,
  );
  velocityArrow.userData = { ...NO_PICK };
  handleGroup.add(velocityArrow);
  const velocityPick = new THREE.Mesh(
    new THREE.SphereGeometry(0.2, 12, 10),
    new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false }),
  );
  velocityPick.userData = { handle: 'velocity', noPick: true };
  handleGroup.add(velocityPick);
  const velocityDot = new THREE.Mesh(
    new THREE.SphereGeometry(0.065, 10, 8),
    new THREE.MeshBasicMaterial({ color: theme.accent, depthTest: false }),
  );
  velocityDot.userData = { ...NO_PICK };
  handleGroup.add(velocityDot);

  const angleGeo = new THREE.BufferGeometry();
  angleGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(6), 3));
  const angleLine = new THREE.Line(angleGeo, velocityMaterial);
  angleLine.userData = { ...NO_PICK };
  handleGroup.add(angleLine);
  const angleDot = new THREE.Mesh(
    new THREE.SphereGeometry(0.11, 12, 10),
    new THREE.MeshBasicMaterial({ color: theme.accent, depthTest: false }),
  );
  angleDot.userData = { ...NO_PICK };
  handleGroup.add(angleDot);
  const anglePick = new THREE.Mesh(
    new THREE.SphereGeometry(0.34, 12, 10),
    new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false }),
  );
  anglePick.userData = { handle: 'angle', noPick: true };
  handleGroup.add(anglePick);

  const snapGeo = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(-0.65, 0, -0.65),
    new THREE.Vector3(0.65, 0, -0.65),
    new THREE.Vector3(0.65, 0, 0.65),
    new THREE.Vector3(-0.65, 0, 0.65),
  ]);
  const snapHint = new THREE.LineLoop(
    snapGeo,
    new THREE.LineBasicMaterial({ color: theme.accent, transparent: true, opacity: 0.95, depthTest: false }),
  );
  snapHint.userData = { ...NO_PICK };
  snapHint.renderOrder = 1000;
  snapHint.visible = false;
  scene.add(snapHint);
  let snapHintUntil = 0;

  function flashSnap(position, quaternion) {
    if (!position) return;
    snapHint.position.set(position.x, position.y, position.z);
    if (quaternion) snapHint.quaternion.set(quaternion.x, quaternion.y, quaternion.z, quaternion.w);
    else snapHint.quaternion.identity();
    snapHint.visible = true;
    snapHintUntil = performance.now() + 1100;
  }

  let handlesVisible = true;
  let lastWorld = null;

  function selectedEntity(type) {
    if (!selected || !lastWorld) return null;
    if (type === 'body') return lastWorld.bodies.find((b) => b.id === selected.id) || null;
    if (type === 'surface') return lastWorld.surfaces.find((s) => s.id === selected.id) || null;
    return null;
  }

  function updateHandles() {
    const body = selected?.type === 'body' ? selectedEntity('body') : null;
    const surface = selected?.type === 'surface' ? selectedEntity('surface') : null;
    const showBody = !!body && handlesVisible;
    const showSurface = !!surface && handlesVisible && !body;
    velocityArrow.visible = showBody;
    velocityPick.visible = showBody;
    velocityDot.visible = showBody;
    angleLine.visible = showSurface;
    angleDot.visible = showSurface;
    anglePick.visible = showSurface;
    if (body) {
      const p = body.cannon.position;
      const az = (body.azimuth || 0) * DEG;
      const el = (body.elevation || 0) * DEG;
      const dir = new THREE.Vector3(
        Math.cos(el) * Math.cos(az),
        Math.sin(el),
        Math.cos(el) * Math.sin(az),
      );
      if (dir.lengthSq() < 1e-8) dir.set(1, 0, 0);
      dir.normalize();
      const length = 0.9 + Math.min(2.6, Math.max(0, body.v0 || 0) * 0.22);
      velocityArrow.position.set(p.x, p.y, p.z);
      velocityArrow.setDirection(dir);
      velocityArrow.setLength(length, Math.min(0.26, length * 0.3), Math.min(0.1, length * 0.12));
      velocityPick.position.set(p.x + dir.x * length, p.y + dir.y * length, p.z + dir.z * length);
      velocityDot.position.copy(velocityPick.position);
    }
    if (surface) {
      const center = surfaceTopPoint(surface, 0, 0);
      const edge = surfaceTopPoint(surface, surface.length / 2 - 0.2, 0);
      const attr = angleGeo.getAttribute('position');
      attr.setXYZ(0, center.x, center.y + 0.05, center.z);
      attr.setXYZ(1, edge.x, edge.y + 0.05, edge.z);
      attr.needsUpdate = true;
      angleGeo.computeBoundingSphere();
      angleDot.position.set(edge.x, edge.y + 0.05, edge.z);
      anglePick.position.set(edge.x, edge.y + 0.05, edge.z);
    }
  }

  function setHandleVisibility(value) {
    handlesVisible = !!value;
    updateHandles();
  }

  function placementPoint() {
    const rect = renderer.domElement.getBoundingClientRect();
    const ndc = new THREE.Vector2(0, 0);
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(ndc, camera);
    const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    const point = new THREE.Vector3();
    if (raycaster.ray.intersectPlane(plane, point)) {
      const d = Math.hypot(point.x, point.z);
      if (d > 16) {
        point.x *= 16 / d;
        point.z *= 16 / d;
      }
      return point;
    }
    const dir = new THREE.Vector3();
    camera.getWorldDirection(dir);
    if (Math.abs(dir.y) < 1e-4) dir.y = -0.1;
    const t = -camera.position.y / dir.y;
    return camera.position.clone().add(dir.multiplyScalar(Math.max(1, t)));
  }

  function projectPoint(p) {
    if (!p) return null;
    const rect = renderer.domElement.getBoundingClientRect();
    const v = new THREE.Vector3(p.x, p.y, p.z).project(camera);
    return {
      x: rect.left + (v.x * 0.5 + 0.5) * rect.width,
      y: rect.top + (-v.y * 0.5 + 0.5) * rect.height,
      visible: v.z > -1 && v.z < 1,
    };
  }

  const visuals = new Map();
  let selected = null;
  let selectedKey = null;
  let gizmoMode = 'translate';
  let gizmoVisible = true;
  let forceVisible = true;
  let destroyed = false;

  function applyGizmoVisibility() {
    transformHelper.visible = gizmoVisible && gizmoMode !== 'off';
  }

  function setTheme() {
    const t = themeColors();
    scene.background = new THREE.Color(t.canvasBg);
    materials.surface.color.set(t.grid);
    materials.track.color.set(t.grid);
    materials.accent.color.set(t.accent);
    materials.physics.color.set(t.physics);
    materials.wheel.color.set(t.text);
    materials.spring.color.set(t.ok);
    materials.meter.color.set(t.warn);
    materials.line.color.set(t.axis);
    materials.accentLine.color.set(t.accent);
    materials.trail.color.set(t.accent);
    materials.transparent.color.set(t.accent);
    trailMaterial.color.set(t.accent);
    rulerMaterial.color.set(t.warn);
    selectionHelper.material.color.set(t.accent);
    if (typeof velocityMaterial !== 'undefined') velocityMaterial.color.set(t.accent);
    if (typeof velocityArrow !== 'undefined') velocityArrow.setColor(new THREE.Color(t.accent));
    if (typeof angleDot !== 'undefined') angleDot.material.color.set(t.accent);
    if (typeof velocityDot !== 'undefined') velocityDot.material.color.set(t.accent);
    if (typeof snapHint !== 'undefined') snapHint.material.color.set(t.accent);
    axes.material.color?.set?.(t.axis || t.muted);
    const gridColors = [t.axis, t.axis];
    if (grid) {
      const attr = grid.geometry.getAttribute('color');
      if (attr) {
        for (let i = 0; i < attr.count; i += 1) {
          const c = i < attr.count / 2 ? gridColors[0] : gridColors[1];
          const col = new THREE.Color(c);
          attr.setXYZ(i, col.r, col.g, col.b);
        }
        attr.needsUpdate = true;
      }
    }
    for (const key of Object.keys(forceColors)) {
      forceColors[key] = t[key === 'weight' ? 'text' : key === 'applied' ? 'danger' : key === 'friction' ? 'warn' : key === 'spring' ? 'ok' : 'accent'];
      arrows[key].setColor(new THREE.Color(forceColors[key]));
    }
  }
  setTheme();

  function disposeMaterial(material) {
    if (!material) return;
    for (const value of Object.values(material)) {
      if (value && value.isTexture) value.dispose();
    }
    material.dispose();
  }

  function disposeObject(object) {
    if (!object) return;
    object.traverse((node) => {
      if (node.geometry) node.geometry.dispose();
      if (node.material) {
        if (Array.isArray(node.material)) node.material.forEach(disposeMaterial);
        else disposeMaterial(node.material);
      }
    });
  }

  function makeRoot(entity) {
    const root = new THREE.Group();
    root.userData.entity = { type: entity.type, id: entity.id };
    return root;
  }

  function addEdges(group, geometry, material = materials.line) {
    const edges = new THREE.LineSegments(new THREE.EdgesGeometry(geometry), material);
    edges.userData = { ...NO_PICK };
    group.add(edges);
    return edges;
  }

  function makeSurface(entity) {
    const root = makeRoot(entity);
    const slip = entity.kind === 'track';
    if (slip) {
      const baseGeo = new THREE.BoxGeometry(entity.length, Math.max(0.04, entity.thickness * 0.35), entity.width * 0.16);
      const base = new THREE.Mesh(baseGeo, materials.track);
      base.position.y = entity.thickness * 0.1;
      base.castShadow = true;
      base.receiveShadow = true;
      root.add(base);
      const railGeo = new THREE.BoxGeometry(entity.length, 0.045, 0.07);
      for (const z of [-entity.width * 0.2, entity.width * 0.2]) {
        const rail = new THREE.Mesh(railGeo, materials.accent);
        rail.position.set(0, entity.thickness / 2 + 0.02, z);
        rail.castShadow = true;
        root.add(rail);
      }
      const tieGeo = new THREE.BoxGeometry(0.07, 0.035, entity.width * 0.42);
      const ties = Math.max(2, Math.floor(entity.length / 1.1));
      for (let i = 0; i < ties; i += 1) {
        const tie = new THREE.Mesh(tieGeo, materials.line);
        tie.position.set(-entity.length / 2 + (i + 0.5) * (entity.length / ties), entity.thickness / 2 + 0.015, 0);
        root.add(tie);
      }
    } else {
      const geo = new THREE.BoxGeometry(entity.length, entity.thickness, entity.width);
      const slab = new THREE.Mesh(geo, materials.surface);
      slab.castShadow = true;
      slab.receiveShadow = true;
      root.add(slab);
      addEdges(root, geo);
      const lipGeo = new THREE.BoxGeometry(entity.length, 0.03, 0.045);
      for (const z of [-entity.width / 2 + 0.05, entity.width / 2 - 0.05]) {
        const lip = new THREE.Mesh(lipGeo, materials.accent);
        lip.position.set(0, entity.thickness / 2 + 0.012, z);
        root.add(lip);
      }
    }
    root.position.copy(v3(entity.body.position));
    root.quaternion.set(entity.body.quaternion.x, entity.body.quaternion.y, entity.body.quaternion.z, entity.body.quaternion.w);
    return { root, sig: signatureOf(entity) };
  }

  function makeLoop(entity) {
    const root = makeRoot(entity);
    const geo = new THREE.TorusGeometry(entity.radius, 0.06, 10, 88);
    const torus = new THREE.Mesh(geo, materials.physics);
    torus.castShadow = true;
    torus.receiveShadow = true;
    root.add(torus);
    const bottom = entity.y - entity.radius;
    if (bottom > 0.05) {
      const postGeo = new THREE.BoxGeometry(0.11, bottom, 0.11);
      const post = new THREE.Mesh(postGeo, materials.line);
      post.position.set(0, -(entity.y + entity.radius) / 2, 0);
      post.castShadow = true;
      root.add(post);
      const footGeo = new THREE.BoxGeometry(0.55, 0.08, 0.55);
      const foot = new THREE.Mesh(footGeo, materials.surface);
      foot.position.set(0, -entity.y + 0.04, 0);
      foot.receiveShadow = true;
      root.add(foot);
    }
    root.position.set(entity.x, entity.y, entity.z);
    return { root, sig: signatureOf(entity) };
  }

  function makeTurntable(entity) {
    const root = makeRoot(entity);
    const geo = new THREE.CylinderGeometry(entity.radius, entity.radius, 0.12, 56);
    const disc = new THREE.Mesh(geo, materials.surface);
    disc.castShadow = true;
    disc.receiveShadow = true;
    root.add(disc);
    const marker = new THREE.Group();
    const markerGeo = new THREE.BoxGeometry(entity.radius * 0.82, 0.025, 0.075);
    const bar = new THREE.Mesh(markerGeo, materials.accent);
    bar.position.x = entity.radius * 0.41;
    bar.position.y = 0.073;
    marker.add(bar);
    // A raised rim fin makes the spin direction readable even when the disc
    // is seen edge-on, and makes slip obvious.
    const finGeo = new THREE.BoxGeometry(0.12, 0.22, 0.07);
    const fin = new THREE.Mesh(finGeo, materials.accent);
    fin.position.set(entity.radius * 0.86, 0.13, 0);
    fin.castShadow = true;
    marker.add(fin);
    const hubGeo = new THREE.CylinderGeometry(0.09, 0.09, 0.16, 20);
    const hub = new THREE.Mesh(hubGeo, materials.physics);
    hub.position.y = 0.08;
    marker.add(hub);
    root.add(marker);
    root.position.set(entity.x, entity.y, entity.z);
    return { root, marker, sig: signatureOf(entity) };
  }

  function makeHCircle(entity) {
    const root = makeRoot(entity);
    const geo = new THREE.TorusGeometry(entity.radius, 0.045, 8, 88);
    const ring = new THREE.Mesh(geo, materials.spring);
    ring.rotation.x = Math.PI / 2;
    ring.castShadow = true;
    root.add(ring);
    root.position.set(entity.x, entity.y, entity.z);
    return { root, sig: signatureOf(entity) };
  }

  function makeLauncher(entity) {
    const root = makeRoot(entity);
    const baseGeo = new THREE.BoxGeometry(0.72, 0.14, 0.58);
    const base = new THREE.Mesh(baseGeo, materials.surface);
    base.position.y = 0.07;
    base.castShadow = true;
    base.receiveShadow = true;
    root.add(base);
    addEdges(root, baseGeo);
    const postH = Math.max(0.2, entity.height);
    const postGeo = new THREE.BoxGeometry(0.1, postH, 0.1);
    const post = new THREE.Mesh(postGeo, materials.wheel);
    post.position.set(-0.16, postH / 2, 0);
    post.castShadow = true;
    root.add(post);
    const pivot = new THREE.Group();
    pivot.position.set(-0.16, postH, 0);
    pivot.rotation.z = (entity.angle || 0) * Math.PI / 180;
    root.add(pivot);
    const barrelGeo = new THREE.CylinderGeometry(0.085, 0.1, 0.95, 16);
    const barrel = new THREE.Mesh(barrelGeo, materials.accent);
    barrel.rotation.z = -Math.PI / 2;
    barrel.position.x = 0.38;
    barrel.castShadow = true;
    pivot.add(barrel);
    const muzzleGeo = new THREE.TorusGeometry(0.09, 0.018, 8, 18);
    const muzzle = new THREE.Mesh(muzzleGeo, materials.wheel);
    muzzle.rotation.y = Math.PI / 2;
    muzzle.position.x = 0.88;
    pivot.add(muzzle);
    const trailGeo = new THREE.BufferGeometry();
    trailGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(2500 * 3), 3));
    trailGeo.setDrawRange(0, 0);
    const trail = new THREE.Line(trailGeo, materials.trail);
    trail.frustumCulled = false;
    trail.userData = { ...NO_PICK };
    root.add(trail);
    const target = new THREE.Group();
    const ringGeo = new THREE.RingGeometry(0.22, 0.28, 28);
    const ring = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: theme.accent, side: THREE.DoubleSide }));
    ring.rotation.x = -Math.PI / 2;
    target.add(ring);
    for (const rot of [0, Math.PI / 2]) {
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-0.4, 0.01, 0),
        new THREE.Vector3(0.4, 0.01, 0),
      ]);
      const line = new THREE.Line(lineGeo, materials.accentLine);
      line.rotation.y = rot;
      target.add(line);
    }
    target.userData = { ...NO_PICK };
    root.add(target);
    return { root, trail, target, trailCount: -1, sig: signatureOf(entity) };
  }

  function makePulley(entity) {
    const root = makeRoot(entity);
    const postH = Math.max(0.2, entity.y);
    const postGeo = new THREE.BoxGeometry(0.1, postH, 0.1);
    const post = new THREE.Mesh(postGeo, materials.wheel);
    post.position.set(0, -postH / 2, -0.16);
    post.castShadow = true;
    root.add(post);
    const wheel = new THREE.Group();
    const rimGeo = new THREE.TorusGeometry(entity.radius, 0.055, 10, 40);
    const rim = new THREE.Mesh(rimGeo, materials.physics);
    rim.castShadow = true;
    wheel.add(rim);
    const discGeo = new THREE.CylinderGeometry(entity.radius * 0.9, entity.radius * 0.9, 0.07, 28);
    const disc = new THREE.Mesh(discGeo, materials.surface);
    disc.rotation.x = Math.PI / 2;
    disc.castShadow = true;
    wheel.add(disc);
    const spokeGeo = new THREE.BoxGeometry(entity.radius * 1.5, 0.035, 0.075);
    const spoke = new THREE.Mesh(spokeGeo, materials.accent);
    spoke.position.y = 0.045;
    wheel.add(spoke);
    wheel.position.set(0, 0, 0);
    root.add(wheel);
    const ropeGeoA = new THREE.BufferGeometry();
    ropeGeoA.setAttribute('position', new THREE.BufferAttribute(new Float32Array(6), 3));
    const ropeA = new THREE.Line(ropeGeoA, materials.trail);
    ropeA.frustumCulled = false;
    ropeA.userData = { ...NO_PICK };
    root.add(ropeA);
    const ropeGeoB = new THREE.BufferGeometry();
    ropeGeoB.setAttribute('position', new THREE.BufferAttribute(new Float32Array(6), 3));
    const ropeB = new THREE.Line(ropeGeoB, materials.trail);
    ropeB.frustumCulled = false;
    ropeB.userData = { ...NO_PICK };
    root.add(ropeB);
    root.position.set(entity.x, entity.y, entity.z);
    return { root, wheel, ropeA, ropeB, sig: signatureOf(entity) };
  }

  function makeBarrier(entity) {
    const root = makeRoot(entity);
    if (entity.kind === 'bumper') {
      const geo = new THREE.CylinderGeometry(entity.radius, entity.radius, entity.height, 24);
      const mesh = new THREE.Mesh(geo, materials.meter);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      root.add(mesh);
      addEdges(root, geo);
      const bandGeo = new THREE.TorusGeometry(entity.radius * 1.01, 0.035, 8, 28);
      const band = new THREE.Mesh(bandGeo, materials.wheel);
      band.rotation.x = Math.PI / 2;
      band.position.y = entity.height * 0.22;
      root.add(band);
    } else {
      const geo = new THREE.BoxGeometry(entity.thickness, entity.height, entity.width);
      const mesh = new THREE.Mesh(geo, materials.meter);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      root.add(mesh);
      addEdges(root, geo);
      const capGeo = new THREE.BoxGeometry(entity.thickness * 1.3, 0.06, entity.width);
      const cap = new THREE.Mesh(capGeo, materials.accent);
      cap.position.y = entity.height / 2 + 0.03;
      root.add(cap);
    }
    root.position.copy(v3(entity.body.position));
    root.quaternion.set(entity.body.quaternion.x, entity.body.quaternion.y, entity.body.quaternion.z, entity.body.quaternion.w);
    return { root, sig: signatureOf(entity) };
  }

  function makeBall(entity) {
    const root = makeRoot(entity);
    const geo = new THREE.SphereGeometry(entity.radius || 0.28, 24, 16);
    const mesh = new THREE.Mesh(geo, materials.physics);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    root.add(mesh);
    const bandGeo = new THREE.TorusGeometry((entity.radius || 0.28) * 0.92, 0.018, 6, 24);
    const band = new THREE.Mesh(bandGeo, materials.accent);
    root.add(band);
    return { root, sig: signatureOf(entity) };
  }

  function makeCylinder(entity) {
    const root = makeRoot(entity);
    const radius = entity.radius || 0.3;
    const length = entity.width || 0.7;
    const geo = new THREE.CylinderGeometry(radius, radius, length, 24);
    const mesh = new THREE.Mesh(geo, materials.physics);
    mesh.rotation.x = Math.PI / 2;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    root.add(mesh);
    const edgeGeo = new THREE.CylinderGeometry(radius, radius, length, 24);
    const edges = new THREE.LineSegments(new THREE.EdgesGeometry(edgeGeo), materials.line);
    edges.rotation.x = Math.PI / 2;
    edges.userData = { ...NO_PICK };
    root.add(edges);
    return { root, sig: signatureOf(entity) };
  }

  function makePendulum(entity) {
    const root = makeRoot(entity);
    const postH = Math.max(0.2, entity.y);
    const postGeo = new THREE.BoxGeometry(0.1, postH, 0.1);
    const post = new THREE.Mesh(postGeo, materials.wheel);
    post.position.set(0, -postH / 2, -0.32);
    post.castShadow = true;
    root.add(post);
    const armGeo = new THREE.BoxGeometry(0.1, 0.1, 0.52);
    const arm = new THREE.Mesh(armGeo, materials.wheel);
    arm.position.set(0, 0, -0.16);
    root.add(arm);
    const pivotGeo = new THREE.SphereGeometry(0.055, 10, 8);
    const pivot = new THREE.Mesh(pivotGeo, materials.accent);
    root.add(pivot);
    const stringGeo = new THREE.BufferGeometry();
    stringGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(6), 3));
    const string = new THREE.Line(stringGeo, materials.line);
    string.frustumCulled = false;
    string.userData = { ...NO_PICK };
    root.add(string);
    const bobGeo = new THREE.SphereGeometry(entity.radius, 20, 14);
    const bob = new THREE.Mesh(bobGeo, materials.physics);
    bob.castShadow = true;
    root.add(bob);
    root.position.set(entity.x, entity.y, entity.z);
    return { root, string, bob, sig: signatureOf(entity) };
  }

  function makeWedge(entity) {
    const root = makeRoot(entity);
    const L = entity.length;
    const W = entity.width;
    const H = entity.height;
    const cx = L / 6;
    const cy = H / 3;
    const shape = new THREE.Shape();
    shape.moveTo(-L / 2 - cx, -cy);
    shape.lineTo(L / 2 - cx, -cy);
    shape.lineTo(L / 2 - cx, H - cy);
    shape.closePath();
    const geo = new THREE.ExtrudeGeometry(shape, { depth: W, bevelEnabled: false });
    geo.translate(0, 0, -W / 2);
    const mesh = new THREE.Mesh(geo, materials.surface);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    root.add(mesh);
    addEdges(root, geo, materials.line);
    const railGeo = new THREE.BoxGeometry(Math.hypot(L, H), 0.035, 0.05);
    const rail = new THREE.Mesh(railGeo, materials.accent);
    rail.position.set(0, H / 2 - cy, W / 2 + 0.012);
    rail.rotation.z = Math.atan2(H, L);
    root.add(rail);
    root.position.copy(v3(entity.body.position));
    root.quaternion.set(entity.body.quaternion.x, entity.body.quaternion.y, entity.body.quaternion.z, entity.body.quaternion.w);
    return { root, sig: signatureOf(entity) };
  }

  function makeSensor(entity) {
    const root = makeRoot(entity);
    if (entity.kind === 'motion') {
      const bodyGeo = new THREE.BoxGeometry(0.34, 0.24, 0.26);
      const body = new THREE.Mesh(bodyGeo, materials.meter);
      body.position.y = 0.12;
      body.castShadow = true;
      root.add(body);
      addEdges(root, bodyGeo);
      const lensGeo = new THREE.CylinderGeometry(0.07, 0.07, 0.08, 18);
      const lens = new THREE.Mesh(lensGeo, materials.wheel);
      lens.rotation.z = -Math.PI / 2;
      lens.position.set(0.2, 0.14, 0);
      root.add(lens);
    } else {
      const postGeo = new THREE.BoxGeometry(0.08, entity.height, 0.08);
      for (const z of [-entity.width / 2, entity.width / 2]) {
        const post = new THREE.Mesh(postGeo, materials.wheel);
        post.position.set(0, entity.height / 2, z);
        post.castShadow = true;
        root.add(post);
      }
      const barGeo = new THREE.BoxGeometry(0.08, 0.08, entity.width);
      const bar = new THREE.Mesh(barGeo, materials.meter);
      bar.position.set(0, entity.height - 0.04, 0);
      root.add(bar);
      const beamGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, entity.height * 0.55, -entity.width / 2),
        new THREE.Vector3(0, entity.height * 0.55, entity.width / 2),
      ]);
      const beam = new THREE.Line(beamGeo, materials.trail);
      beam.userData = { ...NO_PICK };
      root.add(beam);
    }
    root.position.set(entity.x, entity.y, entity.z);
    return { root, sig: signatureOf(entity) };
  }

  function makeFan(entity) {
    const root = makeRoot(entity);
    const ductGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.2, 20, 1, true);
    const duct = new THREE.Mesh(ductGeo, materials.meter);
    duct.rotation.z = -Math.PI / 2;
    duct.castShadow = true;
    root.add(duct);
    const hubGeo = new THREE.CylinderGeometry(0.035, 0.035, 0.24, 10);
    const hub = new THREE.Mesh(hubGeo, materials.wheel);
    hub.rotation.z = -Math.PI / 2;
    root.add(hub);
    const blades = new THREE.Group();
    for (let i = 0; i < 4; i += 1) {
      const bladeGeo = new THREE.BoxGeometry(0.02, 0.16, 0.055);
      const blade = new THREE.Mesh(bladeGeo, materials.accent);
      blade.position.y = 0.09;
      blade.rotation.z = (i * Math.PI) / 2;
      const holder = new THREE.Group();
      holder.rotation.x = (i * Math.PI) / 2;
      holder.add(blade);
      blades.add(holder);
    }
    root.add(blades);
    return { root, blades, sig: signatureOf(entity) };
  }

  function makeBlock(entity) {
    const root = makeRoot(entity);
    const size = entity.size || 0.5;
    const geo = new THREE.BoxGeometry(size, size, size);
    const mesh = new THREE.Mesh(geo, materials.physics);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    root.add(mesh);
    addEdges(root, geo);
    return { root, sig: signatureOf(entity) };
  }

  function makeCart(entity) {
    const root = makeRoot(entity);
    const chassisGeo = new THREE.BoxGeometry(0.88, 0.22, 0.56);
    const chassis = new THREE.Mesh(chassisGeo, materials.accent);
    chassis.position.y = 0.07;
    chassis.castShadow = true;
    chassis.receiveShadow = true;
    root.add(chassis);
    addEdges(root, chassisGeo);
    const wheels = [];
    const wheelGeo = new THREE.CylinderGeometry(0.17, 0.17, 0.08, 18);
    for (const x of [-0.29, 0.29]) {
      for (const z of [-0.29, 0.29]) {
        const wheelGroup = new THREE.Group();
        const wheel = new THREE.Mesh(wheelGeo, materials.wheel);
        wheel.rotation.x = Math.PI / 2;
        wheel.castShadow = true;
        wheelGroup.add(wheel);
        wheelGroup.position.set(x, -entity.radius + 0.17, z);
        root.add(wheelGroup);
        wheels.push(wheelGroup);
      }
    }
    return { root, wheels, spin: 0, lastTime: 0, sig: signatureOf(entity) };
  }

  function makeLink(entity) {
    const root = makeRoot(entity);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(48 * 3), 3));
    const line = new THREE.Line(geo, entity.meter ? materials.meter : materials.spring);
    line.frustumCulled = false;
    line.userData = { ...NO_PICK };
    root.add(line);
    if (entity.meter) {
      const meterGeo = new THREE.BoxGeometry(0.24, 0.16, 0.12);
      const meter = new THREE.Mesh(meterGeo, materials.meter);
      meter.castShadow = true;
      root.add(meter);
    }
    const pickGeo = new THREE.CylinderGeometry(0.1, 0.1, 1, 8);
    const pick = new THREE.Mesh(pickGeo, materials.transparent);
    pick.userData = { entity: { type: 'link', id: entity.id } };
    root.add(pick);
    return { root, line, pick, sig: signatureOf(entity) };
  }

  function ensureVisual(entity) {
    const sig = signatureOf(entity);
    const existing = visuals.get(entity.id);
    if (existing && existing.sig === sig) return existing;
    if (existing) {
      // A live TransformControls drag must keep the attached root in the scene
      // graph; rebuild it once the drag ends instead of detaching the gizmo.
      if (transform.dragging && selected && selected.id === entity.id) return existing;
      removeVisual(entity.id);
    }
    let visual;
    if (entity.type === 'surface') visual = makeSurface(entity);
    else if (entity.type === 'loop') visual = makeLoop(entity);
    else if (entity.type === 'turntable') visual = makeTurntable(entity);
    else if (entity.type === 'hcircle') visual = makeHCircle(entity);
    else if (entity.type === 'launcher') visual = makeLauncher(entity);
    else if (entity.type === 'pulley') visual = makePulley(entity);
    else if (entity.type === 'barrier') visual = makeBarrier(entity);
    else if (entity.type === 'pendulum') visual = makePendulum(entity);
    else if (entity.type === 'wedge') visual = makeWedge(entity);
    else if (entity.type === 'sensor') visual = makeSensor(entity);
    else if (entity.type === 'fan') visual = makeFan(entity);
    else if (entity.type === 'body') {
      if (entity.kind === 'cart') visual = makeCart(entity);
      else if (entity.kind === 'ball') visual = makeBall(entity);
      else if (entity.kind === 'cylinder') visual = makeCylinder(entity);
      else visual = makeBlock(entity);
    }
    else if (entity.type === 'link') visual = makeLink(entity);
    else return null;
    visual.entity = entity;
    scene.add(visual.root);
    visuals.set(entity.id, visual);
    return visual;
  }

  function disposeGeometries(object) {
    object.traverse((node) => {
      if (node.geometry) node.geometry.dispose();
    });
  }

  function removeVisual(id) {
    const visual = visuals.get(id);
    if (!visual) return;
    scene.remove(visual.root);
    // Materials are shared between apparatus meshes; only geometry belongs
    // to the individual visual. Shared materials are disposed in destroy().
    disposeGeometries(visual.root);
    visuals.delete(id);
  }

  function updateLink(visual, entity, world) {
    const pa = endpointPoint(world, entity.a);
    const pb = endpointPoint(world, entity.b);
    if (!pa || !pb) return;
    const dir = pb.clone().sub(pa);
    const length = Math.max(0.05, dir.length());
    const unit = dir.clone().normalize();
    const mid = pa.clone().add(pb).multiplyScalar(0.5);
    const anchor = new THREE.Vector3(0, 1, 0);
    if (Math.abs(unit.dot(anchor)) > 0.96) anchor.set(1, 0, 0);
    const p1 = new THREE.Vector3().crossVectors(unit, anchor).normalize();
    const p2 = new THREE.Vector3().crossVectors(unit, p1).normalize();
    const turns = entity.meter ? 3 : 8;
    const radius = entity.meter ? 0.035 : 0.085;
    const segments = 48;
    const pos = visual.line.geometry.getAttribute('position');
    for (let i = 0; i < segments; i += 1) {
      const t = i / (segments - 1);
      const env = Math.sin(Math.PI * t);
      const a = t * turns * Math.PI * 2;
      const offset = p1.clone().multiplyScalar(Math.cos(a) * radius * env)
        .add(p2.clone().multiplyScalar(Math.sin(a) * radius * env));
      const point = pa.clone().lerp(pb, t).add(offset);
      pos.setXYZ(i, point.x, point.y, point.z);
    }
    pos.needsUpdate = true;
    visual.line.geometry.computeBoundingSphere();
    visual.pick.position.copy(mid);
    visual.pick.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), unit);
    visual.pick.scale.set(1, length, 1);
    if (visual.root.children.length > 2) {
      const meter = visual.root.children.find((c) => c.geometry?.type === 'BoxGeometry' && c.material === materials.meter);
      if (meter) {
        meter.position.copy(mid);
        meter.quaternion.setFromUnitVectors(new THREE.Vector3(1, 0, 0), unit);
      }
    }
    visual.pa = pa;
    visual.pb = pb;
  }

  function endpointPoint(world, endpoint) {
    if (endpoint.type === 'anchor') return new THREE.Vector3(endpoint.x, endpoint.y, endpoint.z);
    const body = world.bodies.find((b) => b.id === endpoint.id);
    if (!body) return null;
    return v3(body.cannon.position);
  }

  function cartQuaternion(world, entity) {
    const q = new THREE.Quaternion();
    const att = entity.attachment;
    if (att?.type === 'surface') {
      const surf = getSurface(world, att.id);
      if (surf) {
        const bq = surf.body.quaternion;
        q.set(bq.x, bq.y, bq.z, bq.w);
      }
    } else if (att?.type === 'turntable') {
      q.setFromEuler(new THREE.Euler(0, -att.phi, 0));
    }
    return q;
  }

  function sync(world) {
    if (destroyed) return;
    lastWorld = world;
    const seen = new Set();
    const entities = [
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
      ...world.bodies,
      ...world.links,
    ];
    for (const entity of entities) {
      if (!entity) continue;
      seen.add(entity.id);
      const visual = ensureVisual(entity);
      if (!visual) continue;
      if (entity.type === 'surface') {
        visual.root.position.copy(v3(entity.body.position));
        const q = entity.body.quaternion;
        visual.root.quaternion.set(q.x, q.y, q.z, q.w);
      } else if (entity.type === 'loop') {
        visual.root.position.set(entity.x, entity.y, entity.z);
      } else if (entity.type === 'turntable') {
        visual.root.position.set(entity.x, entity.y, entity.z);
        visual.marker.rotation.y = -entity.angle;
      } else if (entity.type === 'hcircle') {
        visual.root.position.set(entity.x, entity.y, entity.z);
      } else if (entity.type === 'launcher') {
        visual.root.position.set(entity.x, entity.y, entity.z);
        visual.target.position.set(entity.target.x - entity.x, 0.015 - entity.y, entity.target.z - entity.z);
        visual.target.visible = entity.showTarget !== false;
        const points = entity.trail || [];
        if (points.length !== visual.trailCount) {
          const attr = visual.trail.geometry.getAttribute('position');
          const n = Math.min(points.length, 2500);
          for (let i = 0; i < n; i += 1) {
            attr.setXYZ(i, points[i][0] - entity.x, points[i][1] - entity.y, points[i][2] - entity.z);
          }
          attr.needsUpdate = true;
          visual.trail.geometry.setDrawRange(0, n);
          visual.trail.geometry.computeBoundingSphere();
          visual.trailCount = points.length;
        }
      } else if (entity.type === 'pulley') {
        visual.root.position.set(entity.x, entity.y, entity.z);
        visual.wheel.rotation.z = -entity.angle;
        for (const [key, side] of [['ropeA', 'aId'], ['ropeB', 'bId']]) {
          const body = world.bodies.find((b) => b.id === entity[side]);
          const line = visual[key];
          if (!body) {
            line.visible = false;
            continue;
          }
          line.visible = true;
          const attr = line.geometry.getAttribute('position');
          attr.setXYZ(0, body.cannon.position.x - entity.x, body.cannon.position.y - entity.y, body.cannon.position.z - entity.z);
          attr.setXYZ(1, 0, 0, 0);
          attr.needsUpdate = true;
          line.geometry.computeBoundingSphere();
        }
      } else if (entity.type === 'barrier') {
        visual.root.position.copy(v3(entity.body.position));
        const q = entity.body.quaternion;
        visual.root.quaternion.set(q.x, q.y, q.z, q.w);
      } else if (entity.type === 'pendulum') {
        visual.root.position.set(entity.x, entity.y, entity.z);
        const bob = pendulumBob(entity);
        visual.bob.position.set(bob.x - entity.x, bob.y - entity.y, bob.z - entity.z);
        const attr = visual.string.geometry.getAttribute('position');
        attr.setXYZ(0, 0, 0, 0);
        attr.setXYZ(1, visual.bob.position.x, visual.bob.position.y, visual.bob.position.z);
        attr.needsUpdate = true;
        visual.string.geometry.computeBoundingSphere();
      } else if (entity.type === 'wedge') {
        visual.root.position.copy(v3(entity.body.position));
        const q = entity.body.quaternion;
        visual.root.quaternion.set(q.x, q.y, q.z, q.w);
      } else if (entity.type === 'sensor') {
        visual.root.position.set(entity.x, entity.y, entity.z);
      } else if (entity.type === 'fan') {
        const body = world.bodies.find((b) => b.id === entity.bodyId);
        visual.root.visible = !!body;
        if (body) {
          visual.root.position.set(body.cannon.position.x - 0.55, body.cannon.position.y + 0.3, body.cannon.position.z);
          visual.root.rotation.y = -(entity.azimuth || 0) * DEG;
          visual.blades.rotation.x = entity.spin;
        }
      } else if (entity.type === 'body') {
        visual.root.position.copy(v3(entity.cannon.position));
        if (entity.kind === 'cart') {
          visual.root.quaternion.copy(cartQuaternion(world, entity));
          const dt = Math.max(0, Math.min(0.1, world.time - (visual.lastTime || 0)));
          visual.lastTime = world.time;
          let omega = entity.cannon.angularVelocity.z;
          if (entity.attachment?.type === 'surface') {
            const surf = getSurface(world, entity.attachment.id);
            if (surf) omega = entity.cannon.angularVelocity.dot(surfaceFrame(surf).b);
          }
          visual.spin += omega * dt;
          for (const wheel of visual.wheels) wheel.rotation.z = visual.spin;
        } else {
          const q = entity.cannon.quaternion;
          visual.root.quaternion.set(q.x, q.y, q.z, q.w);
        }
      } else if (entity.type === 'link') {
        updateLink(visual, entity, world);
      }
    }
    for (const id of [...visuals.keys()]) {
      if (!seen.has(id)) removeVisual(id);
    }
    if (selected && gizmoMode !== 'off' && selected.type !== 'link' && selected.type !== 'fan' && !transform.dragging) {
      const visual = visuals.get(selected.id);
      if (visual && transform.object !== visual.root) {
        transform.attach(visual.root);
        updateGizmoAxes();
        applyGizmoVisibility();
      }
    }
    syncSelection(world);
    syncForces(world);
    updateTrail(world);
    updateHandles();
    if (snapHint.visible && performance.now() > snapHintUntil) snapHint.visible = false;
  }

  function syncSelection(world) {
    if (!selected) {
      selectionHelper.visible = false;
      return;
    }
    const visual = visuals.get(selected.id);
    const box = new THREE.Box3();
    if (!visual) {
      selectionHelper.visible = false;
      return;
    }
    if (selected.type === 'link') {
      if (!visual.pa || !visual.pb) {
        selectionHelper.visible = false;
        return;
      }
      box.setFromPoints([visual.pa, visual.pb]).expandByScalar(0.12);
    } else if (selected.type === 'launcher') {
      const launcher = world.launchers.find((l) => l.id === selected.id);
      if (!launcher) {
        selectionHelper.visible = false;
        return;
      }
      const h = Math.max(0.8, launcher.height);
      box.setFromCenterAndSize(
        new THREE.Vector3(launcher.x, launcher.y + h / 2, launcher.z),
        new THREE.Vector3(1.3, h + 0.5, 1.1),
      );
    } else if (selected.type === 'pulley') {
      const pulley = world.pulleys.find((p) => p.id === selected.id);
      if (!pulley) {
        selectionHelper.visible = false;
        return;
      }
      box.setFromCenterAndSize(
        new THREE.Vector3(pulley.x, pulley.y, pulley.z),
        new THREE.Vector3(pulley.radius * 2 + 0.25, pulley.radius * 2 + 0.25, 0.35),
      );
    } else {
      box.setFromObject(visual.root).expandByScalar(0.06);
    }
    if (box.isEmpty()) {
      selectionHelper.visible = false;
      return;
    }
    selectionHelper.box.copy(box);
    selectionHelper.visible = true;
    selectionHelper.updateMatrixWorld(true);
  }

  function syncForces(world) {
    for (const arrow of Object.values(arrows)) arrow.visible = false;
    if (!forceVisible || !selected || selected.type !== 'body') return;
    const body = world.bodies.find((b) => b.id === selected.id);
    if (!body || !opts.getForces) return;
    const forces = opts.getForces(world, body) || [];
    if (!forces.length) return;
    let max = 0;
    for (const f of forces) max = Math.max(max, f.magnitude || f.vector.length());
    const scale = max > 0 ? 2.4 / max : 0;
    const origin = v3(body.cannon.position);
    for (const f of forces) {
      const arrow = arrows[f.type];
      if (!arrow) continue;
      const len = Math.max(0, (f.magnitude || 0) * scale);
      if (len < 0.02) continue;
      const dir = new THREE.Vector3(f.vector.x, f.vector.y, f.vector.z);
      if (dir.lengthSq() < 1e-12) continue;
      dir.normalize();
      arrow.position.copy(origin);
      arrow.setDirection(dir);
      arrow.setLength(len, Math.min(0.22, len * 0.34), Math.min(0.09, len * 0.14));
      arrow.visible = true;
    }
  }

  function setSelection(entity) {
    const nextKey = entity ? `${entity.type}:${entity.id}` : null;
    if (nextKey !== selectedKey) clearTrail();
    selected = entity ? { type: entity.type, id: entity.id } : null;
    selectedKey = nextKey;
    if (!selected || gizmoMode === 'off' || selected.type === 'link' || selected.type === 'fan') {
      transform.detach();
    } else {
      const visual = visuals.get(selected.id);
      if (visual) {
        transform.attach(visual.root);
        updateGizmoAxes();
      }
    }
    applyGizmoVisibility();
    updateHandles();
  }

  function updateGizmoAxes() {
    if (!selected) return;
    if (selected.type === 'surface' && transform.mode === 'rotate') {
      transform.showX = false;
      transform.showY = false;
      transform.showZ = true;
    } else {
      transform.showX = true;
      transform.showY = true;
      transform.showZ = true;
    }
  }

  function setGizmoMode(mode) {
    gizmoMode = mode;
    if (mode === 'off') {
      transform.detach();
      applyGizmoVisibility();
      return;
    }
    transform.setMode(mode);
    if (selected && selected.type !== 'link') {
      const visual = visuals.get(selected.id);
      if (visual) {
        transform.attach(visual.root);
        updateGizmoAxes();
      }
    }
    applyGizmoVisibility();
    updateHandles();
  }

  function setGizmoVisible(visible) {
    gizmoVisible = !!visible;
    if (!gizmoVisible) transform.detach();
    else if (selected && selected.type !== 'link' && gizmoMode !== 'off') {
      const visual = visuals.get(selected.id);
      if (visual) {
        transform.attach(visual.root);
        updateGizmoAxes();
      }
    }
    applyGizmoVisibility();
    updateHandles();
  }

  function setForceVisible(value) {
    forceVisible = !!value;
  }

  function frameSelected() {
    const box = new THREE.Box3();
    if (selected) {
      const visual = visuals.get(selected.id);
      if (visual) box.setFromObject(visual.root);
    }
    if (box.isEmpty()) {
      for (const visual of visuals.values()) box.expandByObject(visual.root);
    }
    if (box.isEmpty()) return false;
    const center = box.getCenter(new THREE.Vector3());
    const size = Math.max(0.6, box.getSize(new THREE.Vector3()).length());
    const dir = camera.position.clone().sub(orbit.target);
    if (dir.lengthSq() < 1e-6) dir.set(1, 0.8, 1);
    dir.normalize();
    orbit.target.copy(center);
    camera.position.copy(center).add(dir.multiplyScalar(Math.max(2.6, size * 1.35)));
    orbit.update();
    return true;
  }

  function screenDeltaToWorld(dx, dy, point) {
    const height = Math.max(1, renderer.domElement.clientHeight);
    const target = point || orbit.target;
    const distance = Math.max(0.5, camera.position.distanceTo(target));
    const k = (2 * Math.tan((camera.fov * Math.PI) / 360) * distance) / height;
    const right = new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld, 0);
    const up = new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld, 1);
    return right.multiplyScalar(dx * k).add(up.multiplyScalar(-dy * k));
  }

  function setView(name) {
    const target = new THREE.Vector3(0, 1.6, 0);
    if (name === 'front') camera.position.set(0, 4.2, 16);
    else if (name === 'side') camera.position.set(16, 4.2, 0);
    else if (name === 'top') camera.position.set(0, 18, 0.001);
    else camera.position.set(7, 5.6, 9);
    orbit.target.copy(target);
    orbit.update();
  }

  function resize() {
    const w = Math.max(1, host.clientWidth);
    const h = Math.max(1, host.clientHeight);
    if (renderer.domElement.width === Math.floor(w * renderer.getPixelRatio())
      && renderer.domElement.height === Math.floor(h * renderer.getPixelRatio())) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }

  function render() {
    if (destroyed) return;
    orbit.update();
    renderer.render(scene, camera);
  }

  function pickAt(clientX, clientY) {
    const rect = renderer.domElement.getBoundingClientRect();
    const ndc = new THREE.Vector2(
      ((clientX - rect.left) / rect.width) * 2 - 1,
      -((clientY - rect.top) / rect.height) * 2 + 1,
    );
    const raycaster = new THREE.Raycaster();
    raycaster.params.Line.threshold = 0.12;
    raycaster.setFromCamera(ndc, camera);
    const hits = raycaster.intersectObjects(scene.children, true);
    for (const hit of hits) {
      let node = hit.object;
      let blocked = false;
      let entity = null;
      while (node) {
        if (node.userData?.noPick) { blocked = true; break; }
        if (node.userData?.entity) { entity = node.userData.entity; break; }
        node = node.parent;
      }
      if (blocked || !entity) continue;
      return { entity, point: hit.point.clone() };
    }
    return null;
  }

  function rayPointOnPlane(clientX, clientY, height = 0) {
    const rect = renderer.domElement.getBoundingClientRect();
    const ndc = new THREE.Vector2(
      ((clientX - rect.left) / rect.width) * 2 - 1,
      -((clientY - rect.top) / rect.height) * 2 + 1,
    );
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(ndc, camera);
    const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -height);
    const point = new THREE.Vector3();
    if (raycaster.ray.intersectPlane(plane, point)) return point;
    return raycaster.ray.at(8, new THREE.Vector3());
  }

  function groundPoint(clientX, clientY) {
    return rayPointOnPlane(clientX, clientY, 0);
  }

  function getObject(entity) {
    return visuals.get(entity.id)?.root || null;
  }

  let pointerStart = null;
  function onPointerDown(e) {
    if (e.button != null && e.button !== 0) return;
    pointerStart = { x: e.clientX, y: e.clientY, t: performance.now() };
  }
  function onPointerUp(e) {
    if (!pointerStart) return;
    const dx = e.clientX - pointerStart.x;
    const dy = e.clientY - pointerStart.y;
    const moved = Math.hypot(dx, dy);
    const elapsed = performance.now() - pointerStart.t;
    pointerStart = null;
    if (moved > 6 || elapsed > 700) return;
    if (transform.dragging || transform.axis) return;
    const hit = pickAt(e.clientX, e.clientY);
    if (opts.onPick) opts.onPick(hit, e);
  }

  renderer.domElement.addEventListener('pointerdown', onPointerDown);
  window.addEventListener('pointerup', onPointerUp);

  function pickHandleAt(clientX, clientY) {
    const rect = renderer.domElement.getBoundingClientRect();
    const ndc = new THREE.Vector2(
      ((clientX - rect.left) / rect.width) * 2 - 1,
      -((clientY - rect.top) / rect.height) * 2 + 1,
    );
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(ndc, camera);
    const hits = raycaster.intersectObjects([velocityPick, anglePick], false);
    for (const hit of hits) {
      const handle = hit.object?.userData?.handle;
      if (handle) return handle;
    }
    return null;
  }

  let directCandidate = null;
  let directDragging = false;
  let velocityDrag = null;
  let angleDrag = null;

  function onDirectPointerDown(e) {
    if (e.button != null && e.button !== 0) return;
    if (opts.canDirectDrag && !opts.canDirectDrag()) return;
    const handle = pickHandleAt(e.clientX, e.clientY);
    if (handle === 'velocity' && selected?.type === 'body') {
      e.preventDefault();
      e.stopPropagation();
      orbit.enabled = false;
      velocityDrag = { ref: { ...selected }, last: null };
      renderer.domElement.style.cursor = 'grabbing';
      return;
    }
    if (handle === 'angle' && selected?.type === 'surface') {
      const surface = selectedEntity('surface');
      if (!surface) return;
      e.preventDefault();
      e.stopPropagation();
      orbit.enabled = false;
      angleDrag = { ref: { ...selected }, startY: e.clientY, startAngle: surface.angle, lastAngle: surface.angle };
      renderer.domElement.style.cursor = 'grabbing';
      return;
    }
    if (transform.dragging || transform.axis) return;
    const hit = pickAt(e.clientX, e.clientY);
    if (hit?.entity?.type === 'body') {
      directCandidate = { ref: { ...hit.entity }, startX: e.clientX, startY: e.clientY };
    }
  }

  renderer.domElement.addEventListener('pointerdown', onDirectPointerDown, true);

  let lastHoverAt = 0;
  function onDirectPointerMove(e) {
    if (!velocityDrag && !angleDrag && !directCandidate && !transform.dragging) {
      const now = performance.now();
      if (now - lastHoverAt > 90 && e.target === renderer.domElement) {
        lastHoverAt = now;
        const hover = pickAt(e.clientX, e.clientY);
        renderer.domElement.style.cursor = hover?.entity?.type === 'body' ? 'grab' : 'crosshair';
      }
    }
    if (velocityDrag) {
      const body = selectedEntity('body');
      const point = rayPointOnPlane(e.clientX, e.clientY, body ? body.cannon.position.y : 0);
      velocityDrag.last = point;
      if (opts.onVelocityDrag) opts.onVelocityDrag(velocityDrag.ref, point, 'move');
      return;
    }
    if (angleDrag) {
      const angle = Math.max(-60, Math.min(60, angleDrag.startAngle + (angleDrag.startY - e.clientY) * 0.35));
      angleDrag.lastAngle = angle;
      if (opts.onAngleDrag) opts.onAngleDrag(angleDrag.ref, angle, 'move');
      return;
    }
    if (!directCandidate) return;
    const dx = e.clientX - directCandidate.startX;
    const dy = e.clientY - directCandidate.startY;
    if (!directDragging) {
      if (Math.hypot(dx, dy) < 5) return;
      if (transform.axis || transform.dragging) { directCandidate = null; return; }
      directDragging = true;
      orbit.enabled = false;
      renderer.domElement.style.cursor = 'grabbing';
      if (opts.onDirectDragStart) opts.onDirectDragStart(directCandidate.ref);
    }
    const body = selectedEntity('body');
    const point = rayPointOnPlane(e.clientX, e.clientY, body ? body.cannon.position.y : 0);
    if (opts.onDirectDrag) opts.onDirectDrag(directCandidate.ref, point);
  }

  function onDirectPointerUp() {
    if (velocityDrag) {
      if (velocityDrag.last && opts.onVelocityDrag) opts.onVelocityDrag(velocityDrag.ref, velocityDrag.last, 'end');
      velocityDrag = null;
      orbit.enabled = true;
      renderer.domElement.style.cursor = '';
    }
    if (angleDrag) {
      if (opts.onAngleDrag) opts.onAngleDrag(angleDrag.ref, angleDrag.lastAngle, 'end');
      angleDrag = null;
      orbit.enabled = true;
      renderer.domElement.style.cursor = '';
    }
    if (directDragging) {
      if (opts.onDirectDragEnd) opts.onDirectDragEnd(directCandidate.ref);
      directDragging = false;
      orbit.enabled = true;
      renderer.domElement.style.cursor = '';
    }
    directCandidate = null;
  }

  window.addEventListener('pointermove', onDirectPointerMove);
  window.addEventListener('pointerup', onDirectPointerUp);

  renderer.domElement.addEventListener('dblclick', (e) => {
    const hit = pickAt(e.clientX, e.clientY);
    if (!hit?.entity) return;
    if (opts.onPick) opts.onPick(hit, e);
    frameSelected();
  });

  let dragEntity = null;
  transform.addEventListener('dragging-changed', (e) => {
    orbit.enabled = !e.value;
    if (e.value && selected) {
      dragEntity = selected;
      if (opts.onDragStart) opts.onDragStart(selected);
    }
    if (!e.value) {
      transform.detach();
      const ent = dragEntity;
      dragEntity = null;
      if (ent && opts.onDragEnd) opts.onDragEnd(ent);
      if (selected && gizmoMode !== 'off') {
        const visual = visuals.get(selected.id);
        if (visual && selected.type !== 'link') transform.attach(visual.root);
      }
    }
  });
  transform.addEventListener('objectChange', () => {
    if (!selected) return;
    const visual = visuals.get(selected.id);
    if (!visual) return;
    if (opts.onTransform) opts.onTransform(selected, visual.root);
  });

  const onTheme = () => setTheme();
  window.addEventListener('themechange', onTheme);

  function destroy() {
    if (destroyed) return;
    destroyed = true;
    window.removeEventListener('themechange', onTheme);
    window.removeEventListener('pointerup', onPointerUp);
    window.removeEventListener('pointerup', onDirectPointerUp);
    window.removeEventListener('pointermove', onDirectPointerMove);
    renderer.domElement.removeEventListener('pointerdown', onPointerDown);
    renderer.domElement.removeEventListener('pointerdown', onDirectPointerDown, true);
    transform.detach();
    transform.dispose();
    scene.remove(transformHelper);
    orbit.dispose();
    for (const id of [...visuals.keys()]) removeVisual(id);
    disposeObject(scene);
    scene.remove(ground);
    if (grid) {
      scene.remove(grid);
      grid.geometry.dispose();
      grid.material.dispose();
    }
    selectionHelper.geometry.dispose();
    selectionHelper.material.dispose();
    renderer.dispose();
    renderer.forceContextLoss();
    if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
  }

  return {
    scene,
    camera,
    renderer,
    orbit,
    transform,
    resize,
    render,
    sync,
    setSelection,
    setGizmoMode,
    setGizmoVisible,
    setForceVisible,
    setView,
    setTrailVisible,
    setHandleVisibility,
    flashSnap,
    placementPoint,
    projectPoint,
    clearTrail,
    setRuler,
    clearRuler,
    frameSelected,
    screenDeltaToWorld,
    pickAt,
    groundPoint,
    rayPointOnPlane,
    getObject,
    destroy,
    get selectedKey() { return selectedKey; },
  };
}
