/**
 * Three.js viewport for the free-exploration physics lab.
 * Blender-like orbit/pan/zoom, raycast selection and a transform gizmo.
 * All geometry/material/texture/control resources are disposed in destroy().
 */
import * as THREE from '../../../vendor/three/three.module.js';
import { OrbitControls } from '../../../vendor/three/controls/OrbitControls.js';
import { TransformControls } from '../../../vendor/three/controls/TransformControls.js';
import { themeColors } from '../../../js/theme.js';
import { getSurface, getTurntable, surfaceFrame } from './physics.mjs';

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
      return `${entity.type}:${entity.kind}:${entity.size || entity.radius}`;
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
    materials.transparent.color.set(t.accent);
    trailMaterial.color.set(t.accent);
    rulerMaterial.color.set(t.warn);
    selectionHelper.material.color.set(t.accent);
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
    else if (entity.type === 'body') visual = entity.kind === 'cart' ? makeCart(entity) : makeBlock(entity);
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
    const seen = new Set();
    const entities = [
      ...world.surfaces,
      ...world.loops,
      ...world.turntables,
      ...world.hcircles,
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
    if (selected && gizmoMode !== 'off' && selected.type !== 'link' && !transform.dragging) {
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
    if (!selected || gizmoMode === 'off' || selected.type === 'link') {
      transform.detach();
    } else {
      const visual = visuals.get(selected.id);
      if (visual) {
        transform.attach(visual.root);
        updateGizmoAxes();
      }
    }
    applyGizmoVisibility();
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

  function groundPoint(clientX, clientY) {
    const rect = renderer.domElement.getBoundingClientRect();
    const ndc = new THREE.Vector2(
      ((clientX - rect.left) / rect.width) * 2 - 1,
      -((clientY - rect.top) / rect.height) * 2 + 1,
    );
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(ndc, camera);
    const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    const point = new THREE.Vector3();
    if (raycaster.ray.intersectPlane(plane, point)) return point;
    return raycaster.ray.at(8, new THREE.Vector3());
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
    renderer.domElement.removeEventListener('pointerdown', onPointerDown);
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
    clearTrail,
    setRuler,
    clearRuler,
    frameSelected,
    screenDeltaToWorld,
    pickAt,
    groundPoint,
    getObject,
    destroy,
    get selectedKey() { return selectedKey; },
  };
}
