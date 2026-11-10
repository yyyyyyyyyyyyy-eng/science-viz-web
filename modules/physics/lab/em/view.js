/**
 * Three.js visuals for the E&M layer.
 *
 * The mechanics and E&M worlds share one scene.  This module owns only the
 * E&M group, so switching modes is a visibility filter rather than a scene
 * teardown.  Every geometry/material created here is disposed in destroy().
 */
import * as THREE from '../../../../vendor/three/three.module.js';
import { electricFieldAt, magneticFieldAt, capacitorState, forceOnWire, inductionCoilState } from './physics.mjs';

const NO_PICK = { noPick: true };

function axisRotation(axis) {
  if (axis === 'x') return new THREE.Euler(0, 0, -Math.PI / 2);
  if (axis === 'z') return new THREE.Euler(Math.PI / 2, 0, 0);
  return new THREE.Euler(0, 0, 0);
}

function normalRotation(axis) {
  if (axis === 'y') return new THREE.Euler(0, 0, Math.PI / 2);
  if (axis === 'z') return new THREE.Euler(0, -Math.PI / 2, 0);
  return new THREE.Euler(0, 0, 0);
}

function disposeTree(object) {
  object.traverse((node) => {
    if (node.geometry) node.geometry.dispose();
    if (node.material) {
      const list = Array.isArray(node.material) ? node.material : [node.material];
      for (const m of list) {
        if (!m.userData?.own) continue;
        if (m.map) m.map.dispose();
        m.dispose();
      }
    }
  });
}

export function createEMView(scene, opts = {}) {
  const group = new THREE.Group();
  group.visible = false;
  scene.add(group);

  const fieldGroup = new THREE.Group();
  fieldGroup.userData = { ...NO_PICK };
  group.add(fieldGroup);
  const fieldLineGroup = new THREE.Group();
  fieldLineGroup.userData = { ...NO_PICK };
  fieldGroup.add(fieldLineGroup);
  const equipGroup = new THREE.Group();
  equipGroup.userData = { ...NO_PICK };
  fieldGroup.add(equipGroup);

  const selectionHelper = new THREE.Box3Helper(new THREE.Box3(), 0x2f6fde);
  selectionHelper.material.transparent = true;
  selectionHelper.material.opacity = 0.95;
  selectionHelper.material.depthTest = false;
  selectionHelper.renderOrder = 999;
  selectionHelper.visible = false;
  selectionHelper.userData = { ...NO_PICK };
  group.add(selectionHelper);

  const theme = opts.theme || {};
  const accent = theme.accent || '#2f6fde';
  const positive = '#c0392b';
  const negative = '#1f5fa8';
  const fieldColor = theme.accent || '#2f6fde';
  const muted = theme.text || '#333333';

  const materials = {
    positive: new THREE.MeshStandardMaterial({ color: positive, roughness: 0.45, metalness: 0.05 }),
    negative: new THREE.MeshStandardMaterial({ color: negative, roughness: 0.45, metalness: 0.05 }),
    neutral: new THREE.MeshStandardMaterial({ color: accent, roughness: 0.5, metalness: 0.08 }),
    translucent: new THREE.MeshStandardMaterial({
      color: accent, transparent: true, opacity: 0.13, roughness: 0.7, metalness: 0.02,
      depthWrite: false, side: THREE.DoubleSide,
    }),
    plate: new THREE.MeshStandardMaterial({ color: '#8a8f98', roughness: 0.4, metalness: 0.35 }),
    wire: new THREE.MeshStandardMaterial({ color: '#b06a2c', roughness: 0.4, metalness: 0.4 }),
    rail: new THREE.MeshStandardMaterial({ color: '#8a8f98', roughness: 0.4, metalness: 0.4 }),
    magnet: new THREE.MeshStandardMaterial({ color: '#7b4bb7', roughness: 0.5, metalness: 0.1 }),
    probe: new THREE.MeshStandardMaterial({ color: '#1d7a5a', roughness: 0.4, metalness: 0.1 }),
    particle: new THREE.MeshStandardMaterial({ color: '#d35400', emissive: '#d35400', emissiveIntensity: 0.25, roughness: 0.35 }),
    line: new THREE.LineBasicMaterial({ color: fieldColor, transparent: true, opacity: 0.8 }),
    equip: new THREE.LineBasicMaterial({ color: muted, transparent: true, opacity: 0.8 }),
    trail: new THREE.LineBasicMaterial({ color: '#d35400', transparent: true, opacity: 0.85 }),
    bLine: new THREE.LineBasicMaterial({ color: '#7b4bb7', transparent: true, opacity: 0.6 }),
    arrow: new THREE.MeshBasicMaterial({ color: '#1d7a5a' }),
    force: new THREE.MeshBasicMaterial({ color: '#c0392b' }),
  };

  const sharedMaterials = new Set(Object.values(materials));

  function markOwnMaterials(root) {
    root.traverse((node) => {
      if (!node.material) return;
      const list = Array.isArray(node.material) ? node.material : [node.material];
      for (const m of list) {
        if (m && !sharedMaterials.has(m)) m.userData.own = true;
      }
    });
  }

  function makeRoot(entity) {
    const root = new THREE.Group();
    root.userData.entity = { type: entity.type, id: entity.id };
    return root;
  }

  function sphereMesh(radius, material) {
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(radius, 24, 16), material);
    mesh.castShadow = true;
    mesh.userData = { ...NO_PICK };
    return mesh;
  }

  function makeCharge(entity) {
    const root = makeRoot(entity);
    const mesh = sphereMesh(entity.q >= 0 ? 0.16 : 0.13, entity.q >= 0 ? materials.positive : materials.negative);
    root.add(mesh);
    const sign = new THREE.Mesh(
      new THREE.TorusGeometry(0.22, 0.012, 6, 28),
      entity.q >= 0 ? materials.positive : materials.negative,
    );
    sign.userData = { ...NO_PICK };
    root.add(sign);
    root.position.set(entity.x, entity.y, entity.z);
    return { root, sig: `${entity.q}` };
  }

  function makeSphere(entity) {
    const root = makeRoot(entity);
    const mesh = sphereMesh(entity.R, materials.translucent);
    root.add(mesh);
    const wire = new THREE.Mesh(
      new THREE.SphereGeometry(entity.R, 18, 12),
      new THREE.MeshBasicMaterial({ color: entity.q >= 0 ? positive : negative, wireframe: true, transparent: true, opacity: 0.25 }),
    );
    wire.userData = { ...NO_PICK };
    root.add(wire);
    root.position.set(entity.x, entity.y, entity.z);
    return { root, mesh, sig: `${entity.R}:${entity.q}:${entity.distribution}` };
  }

  function makeLine(entity) {
    const root = makeRoot(entity);
    const geo = new THREE.CylinderGeometry(0.035, 0.035, entity.length, 12);
    const mesh = new THREE.Mesh(geo, entity.q >= 0 ? materials.positive : materials.negative);
    mesh.rotation.copy(axisRotation(entity.axis));
    mesh.castShadow = true;
    mesh.userData = { ...NO_PICK };
    root.add(mesh);
    root.position.set(entity.x, entity.y, entity.z);
    return { root, sig: `${entity.length}:${entity.axis}:${entity.q}` };
  }

  function makePlane(entity) {
    const root = makeRoot(entity);
    const size = new THREE.Vector3(entity.width, entity.height, 0.03);
    const geo = new THREE.BoxGeometry(size.x, size.y, size.z);
    const mesh = new THREE.Mesh(geo, materials.translucent);
    mesh.userData = { ...NO_PICK };
    root.add(mesh);
    const edges = new THREE.LineSegments(new THREE.EdgesGeometry(geo), new THREE.LineBasicMaterial({
      color: entity.q >= 0 ? positive : negative, transparent: true, opacity: 0.7,
    }));
    edges.userData = { ...NO_PICK };
    root.add(edges);
    root.rotation.copy(normalRotation(entity.axis));
    root.position.set(entity.x, entity.y, entity.z);
    return { root, sig: `${entity.width}:${entity.height}:${entity.axis}:${entity.q}` };
  }

  function makeProbe(entity) {
    const root = makeRoot(entity);
    const body = new THREE.Mesh(new THREE.OctahedronGeometry(0.18, 0), materials.probe);
    body.userData = { ...NO_PICK };
    root.add(body);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.31, 0.012, 6, 24), materials.probe);
    ring.rotation.x = Math.PI / 2;
    ring.userData = { ...NO_PICK };
    root.add(ring);
    const arrow = new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), new THREE.Vector3(0, 0, 0), 1, 0x1d7a5a, 0.16, 0.08);
    arrow.userData = { ...NO_PICK };
    root.add(arrow);
    root.position.set(entity.x, entity.y, entity.z);
    return { root, arrow, sig: 'probe' };
  }

  function makeParticle(entity) {
    const root = makeRoot(entity);
    const mesh = sphereMesh(0.09, materials.particle);
    root.add(mesh);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(4000 * 3), 3));
    geo.setDrawRange(0, 0);
    const trail = new THREE.Line(geo, materials.trail);
    trail.frustumCulled = false;
    trail.userData = { ...NO_PICK };
    root.add(trail);
    root.position.set(entity.x, entity.y, entity.z);
    return { root, trail, trailCount: 0, sig: 'particle' };
  }

  function makeCapacitor(entity) {
    const root = makeRoot(entity);
    const st = capacitorState(entity);
    const side = Math.sqrt(st.A);
    const gap = Math.max(entity.d, 0.16);
    const plates = new THREE.Group();
    for (const sign of [-1, 1]) {
      const geo = new THREE.BoxGeometry(0.035, side, side);
      const plate = new THREE.Mesh(geo, materials.plate);
      plate.position.set(sign * gap / 2, 0, 0);
      plate.castShadow = true;
      plate.userData = { ...NO_PICK };
      plates.add(plate);
    }
    root.add(plates);
    const n = 5;
    for (let i = 0; i < n; i += 1) {
      const arrow = new THREE.ArrowHelper(
        new THREE.Vector3(-1, 0, 0),
        new THREE.Vector3(gap / 2, (i - (n - 1) / 2) * side * 0.16, 0),
        gap * 0.8, 0x2f6fde, 0.07, 0.04,
      );
      arrow.userData = { ...NO_PICK };
      root.add(arrow);
    }
    root.position.set(entity.x, entity.y, entity.z);
    root.rotation.copy(normalRotation(entity.axis));
    return { root, plates, sig: `${entity.area}:${entity.d}:${entity.axis}` };
  }

  function makeMagneticWire(entity) {
    const root = makeRoot(entity);
    const geo = new THREE.CylinderGeometry(0.045, 0.045, entity.length, 12);
    const wire = new THREE.Mesh(geo, materials.wire);
    wire.userData = { ...NO_PICK };
    root.add(wire);
    const arrow = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, -entity.length / 2, 0), entity.length, 0xb06a2c, 0.18, 0.08);
    arrow.userData = { ...NO_PICK };
    root.add(arrow);
    for (const radius of [0.38, 0.68, 0.98]) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(radius, 0.012, 6, 40), materials.magnet);
      ring.rotation.x = Math.PI / 2;
      ring.userData = { ...NO_PICK };
      root.add(ring);
    }
    root.position.set(entity.x, entity.y, entity.z);
    return { root, sig: `${entity.length}:${entity.current}` };
  }

  function makeCurrentLoop(entity) {
    const root = makeRoot(entity);
    const torus = new THREE.Mesh(new THREE.TorusGeometry(entity.radius, 0.035, 8, 56), materials.magnet);
    torus.rotation.x = Math.PI / 2;
    torus.castShadow = true;
    torus.userData = { ...NO_PICK };
    root.add(torus);
    const arrow = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, 0), 0.9, 0x7b4bb7, 0.16, 0.07);
    arrow.userData = { ...NO_PICK };
    root.add(arrow);
    root.position.set(entity.x, entity.y, entity.z);
    return { root, sig: `${entity.radius}:${entity.current}` };
  }

  function makeSolenoid(entity) {
    const root = makeRoot(entity);
    const turns = Math.min(120, Math.max(12, Math.round(entity.n * entity.length * 4)));
    const points = [];
    for (let i = 0; i <= turns * 12; i += 1) {
      const t = i / (turns * 12);
      const a = t * turns * Math.PI * 2;
      points.push(new THREE.Vector3(
        entity.radius * Math.cos(a),
        -entity.length / 2 + t * entity.length,
        entity.radius * Math.sin(a),
      ));
    }
    const helix = new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), materials.magnet);
    helix.userData = { ...NO_PICK };
    root.add(helix);
    const shell = new THREE.Mesh(
      new THREE.CylinderGeometry(entity.radius, entity.radius, entity.length, 24, 1, true),
      new THREE.MeshBasicMaterial({ color: 0x7b4bb7, wireframe: true, transparent: true, opacity: 0.12 }),
    );
    shell.userData = { ...NO_PICK };
    root.add(shell);
    const arrow = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, -0.3, 0), 0.7, 0x7b4bb7, 0.14, 0.06);
    arrow.userData = { ...NO_PICK };
    root.add(arrow);
    root.position.set(entity.x, entity.y, entity.z);
    return { root, sig: `${entity.radius}:${entity.length}:${entity.turns}:${entity.current}` };
  }

  function makeUniform(entity) {
    const root = makeRoot(entity);
    const size = entity.size === Infinity ? 7 : Math.min(entity.size, 12);
    const box = new THREE.Mesh(
      new THREE.BoxGeometry(size, size * 0.55, size),
      new THREE.MeshBasicMaterial({ color: 0x7b4bb7, wireframe: true, transparent: true, opacity: 0.22 }),
    );
    box.userData = { ...NO_PICK };
    root.add(box);
    const b = new THREE.Vector3(entity.Bx, entity.By, entity.Bz);
    const e = new THREE.Vector3(entity.Ex, entity.Ey, entity.Ez);
    if (b.length() > 1e-15) {
      for (let i = -1; i <= 1; i += 1) {
        for (let j = -1; j <= 1; j += 1) {
          const arrow = new THREE.ArrowHelper(b.clone().normalize(), new THREE.Vector3(i * size * 0.28, 0, j * size * 0.28), Math.min(1.4, size * 0.3), 0x7b4bb7, 0.12, 0.06);
          arrow.userData = { ...NO_PICK };
          root.add(arrow);
        }
      }
    }
    if (e.length() > 1e-15) {
      const arrow = new THREE.ArrowHelper(e.clone().normalize(), new THREE.Vector3(0, size * 0.28, 0), Math.min(1.5, size * 0.3), 0x2f6fde, 0.14, 0.07);
      arrow.userData = { ...NO_PICK };
      root.add(arrow);
    }
    root.position.set(entity.x, entity.y, entity.z);
    return { root, sig: `${entity.size}:${entity.Ex}:${entity.Ey}:${entity.Ez}:${entity.Bx}:${entity.By}:${entity.Bz}` };
  }

  function makeForceWire(entity) {
    const root = makeRoot(entity);
    const dir = new THREE.Vector3(entity.dirx, entity.diry, entity.dirz).normalize();
    const geo = new THREE.CylinderGeometry(0.04, 0.04, entity.length, 12);
    const wire = new THREE.Mesh(geo, materials.wire);
    wire.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
    wire.userData = { ...NO_PICK };
    root.add(wire);
    const arrow = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, 0), 0.8, 0xc0392b, 0.16, 0.07);
    arrow.userData = { ...NO_PICK };
    root.add(arrow);
    root.position.set(entity.x, entity.y, entity.z);
    return { root, arrow, dir, sig: `${entity.length}:${entity.current}:${entity.dirx}:${entity.diry}:${entity.dirz}` };
  }

  function makeRail(entity) {
    const root = makeRoot(entity);
    const railGeo = new THREE.BoxGeometry(entity.length, 0.045, 0.045);
    for (const z of [-entity.ell / 2, entity.ell / 2]) {
      const rail = new THREE.Mesh(railGeo, materials.rail);
      rail.position.set(0, 0, z);
      rail.userData = { ...NO_PICK };
      root.add(rail);
    }
    const rod = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, entity.ell), materials.magnet);
    rod.position.set(entity.xRod, 0.02, 0);
    rod.userData = { ...NO_PICK };
    root.add(rod);
    const fieldBox = new THREE.Mesh(
      new THREE.BoxGeometry(entity.length, entity.ell * 1.5, entity.ell * 1.8),
      new THREE.MeshBasicMaterial({ color: 0x7b4bb7, wireframe: true, transparent: true, opacity: 0.12 }),
    );
    fieldBox.userData = { ...NO_PICK };
    root.add(fieldBox);
    root.position.set(entity.x, entity.y, entity.z);
    return { root, rod, sig: `${entity.ell}:${entity.length}` };
  }

  function makeInductionCoil(entity) {
    const root = makeRoot(entity);
    const frame = new THREE.Group();
    const w = entity.width;
    const h = entity.height;
    const pts = [
      new THREE.Vector3(-w / 2, 0, -h / 2), new THREE.Vector3(w / 2, 0, -h / 2),
      new THREE.Vector3(w / 2, 0, h / 2), new THREE.Vector3(-w / 2, 0, h / 2),
      new THREE.Vector3(-w / 2, 0, -h / 2),
    ];
    const wire = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), materials.trail);
    wire.userData = { ...NO_PICK };
    frame.add(wire);
    const turns = Math.min(12, entity.turns);
    for (let i = 0; i < turns; i += 1) {
      const y = -h / 2 + (i + 0.5) * (h / turns);
      const line = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(-w / 2, y, -h / 2), new THREE.Vector3(-w / 2, y, h / 2),
        ]),
        materials.magnet,
      );
      line.userData = { ...NO_PICK };
      frame.add(line);
    }
    root.add(frame);
    const region = new THREE.Mesh(
      new THREE.BoxGeometry(entity.regionMax - entity.regionMin, h * 1.2, w * 1.4),
      new THREE.MeshBasicMaterial({ color: 0x7b4bb7, transparent: true, opacity: 0.1 }),
    );
    region.position.set((entity.regionMin + entity.regionMax) / 2 - entity.x, 0, 0);
    region.userData = { ...NO_PICK };
    root.add(region);
    root.position.set(entity.x, entity.y, entity.z);
    return { root, sig: `${entity.width}:${entity.height}:${entity.turns}:${entity.regionMin}:${entity.regionMax}` };
  }

  const visuals = new Map();
  let lastFieldSig = '';
  let lastEquipSig = '';
  let selected = null;

  function ensureVisual(entity) {
    const existing = visuals.get(entity.id);
    let visual = existing;
    const sig = JSON.stringify([
      entity.type, entity.q, entity.R, entity.distribution, entity.length, entity.width, entity.height,
      entity.axis, entity.area, entity.d, entity.radius, entity.turns, entity.current,
      entity.Ex, entity.Ey, entity.Ez, entity.Bx, entity.By, entity.Bz, entity.size,
      entity.dirx, entity.diry, entity.dirz, entity.ell, entity.regionMin, entity.regionMax,
      entity.turns,
    ]);
    if (existing && existing.sig === sig) return existing;
    if (existing) {
      group.remove(existing.root);
      disposeTree(existing.root);
      visuals.delete(entity.id);
    }
    if (entity.type === 'emCharge') visual = makeCharge(entity);
    else if (entity.type === 'emSphere') visual = makeSphere(entity);
    else if (entity.type === 'emLine') visual = makeLine(entity);
    else if (entity.type === 'emPlane') visual = makePlane(entity);
    else if (entity.type === 'emProbe') visual = makeProbe(entity);
    else if (entity.type === 'emParticle') visual = makeParticle(entity);
    else if (entity.type === 'emCapacitor') visual = makeCapacitor(entity);
    else if (entity.type === 'emMagneticWire') visual = makeMagneticWire(entity);
    else if (entity.type === 'emCurrentLoop') visual = makeCurrentLoop(entity);
    else if (entity.type === 'emSolenoid') visual = makeSolenoid(entity);
    else if (entity.type === 'emUniform') visual = makeUniform(entity);
    else if (entity.type === 'emForceWire') visual = makeForceWire(entity);
    else if (entity.type === 'emRail') visual = makeRail(entity);
    else if (entity.type === 'emInductionCoil') visual = makeInductionCoil(entity);
    if (!visual) return null;
    visual.sig = sig;
    visual.entity = entity;
    markOwnMaterials(visual.root);
    group.add(visual.root);
    visuals.set(entity.id, visual);
    return visual;
  }

  function addFieldLine(points, material) {
    const geo = new THREE.BufferGeometry().setFromPoints(points);
    const lineMat = material.clone();
    lineMat.userData.own = true;
    const line = new THREE.Line(geo, lineMat);
    line.userData = { ...NO_PICK, fieldKind: 'field' };
    fieldLineGroup.add(line);
  }

  function rebuildFieldLines(em) {
    while (fieldLineGroup.children.length) {
      const child = fieldLineGroup.children.pop();
      disposeTree(child);
    }
    const sources = [
      ...em.charges.map((c) => ({ x: c.x, y: c.y, z: c.z, q: c.q })),
      ...em.spheres.map((c) => ({ x: c.x, y: c.y, z: c.z, q: c.q, R: c.R })),
      ...em.lines.map((c) => ({ x: c.x, y: c.y, z: c.z, q: c.q, line: c })),
      ...em.planes.map((c) => ({ x: c.x, y: c.y, z: c.z, q: c.q, plane: c })),
    ].filter((s) => Math.abs(s.q) > 0);
    const limit = 12;
    const step = 0.14;
    const startsFor = (source) => {
      const starts = [];
      if (source.line) {
        const line = source.line;
        const axis = line.axis === 'y' ? new THREE.Vector3(0, 1, 0)
          : line.axis === 'z' ? new THREE.Vector3(0, 0, 1) : new THREE.Vector3(1, 0, 0);
        const perp = Math.abs(axis.y) > 0.5 ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 1, 0);
        for (let i = 0; i < 8; i += 1) {
          const t = -0.45 + (i / 7) * 0.9;
          const p = new THREE.Vector3(source.x, source.y, source.z)
            .add(axis.clone().multiplyScalar(t * line.length))
            .add(perp.clone().multiplyScalar(0.34));
          starts.push(p);
        }
      } else if (source.plane) {
        const plane = source.plane;
        const normal = plane.axis === 'y' ? new THREE.Vector3(0, 1, 0)
          : plane.axis === 'z' ? new THREE.Vector3(0, 0, 1) : new THREE.Vector3(1, 0, 0);
        const u = plane.axis === 'x' ? new THREE.Vector3(0, 1, 0) : new THREE.Vector3(1, 0, 0);
        const v = plane.axis === 'z' ? new THREE.Vector3(0, 1, 0) : new THREE.Vector3(0, 0, 1);
        for (let a = 0; a < 3; a += 1) {
          for (let b = 0; b < 3; b += 1) {
            starts.push(new THREE.Vector3(source.x, source.y, source.z)
              .add(u.clone().multiplyScalar((a - 1) * plane.width * 0.28))
              .add(v.clone().multiplyScalar((b - 1) * plane.height * 0.28))
              .add(normal.clone().multiplyScalar(0.28)));
          }
        }
      } else {
        const seedR = Math.max(0.28, (source.R || 0) * 1.06);
        const seeds = 10;
        for (let i = 0; i < seeds; i += 1) {
          const a = (i / seeds) * Math.PI * 2;
          const b = ((i * 0.618) % 1) * Math.PI - Math.PI / 2;
          starts.push(new THREE.Vector3(
            source.x + seedR * Math.cos(a) * Math.cos(b),
            source.y + seedR * Math.sin(b),
            source.z + seedR * Math.sin(a) * Math.cos(b),
          ));
        }
      }
      return starts;
    };
    for (const source of sources) {
      for (const start of startsFor(source)) {
        const dir = source.q > 0 ? 1 : -1;
        const pts = [start.clone()];
        let p = start.clone();
        for (let k = 0; k < 420; k += 1) {
          const { E } = electricFieldAt(em, { x: p.x, y: p.y, z: p.z }, { ignoreCapacitors: true });
          const mag = Math.hypot(E.x, E.y, E.z);
          if (!(mag > 1e-14)) break;
          p = p.clone().add(new THREE.Vector3(E.x, E.y, E.z).multiplyScalar((dir * step) / mag));
          if (Math.abs(p.x) > limit || Math.abs(p.y) > limit || Math.abs(p.z) > limit) break;
          pts.push(p.clone());
          let hit = false;
          for (const other of sources) {
            if (other === source) continue;
            if (Math.hypot(p.x - other.x, p.y - other.y, p.z - other.z) < 0.16) { hit = true; break; }
          }
          if (hit) break;
          if (pts.length > 2 && p.distanceTo(pts[pts.length - 3]) < step * 0.25) break;
        }
        if (pts.length > 2) addFieldLine(pts, materials.line);
      }
    }
  }

  function marchingSquares(values, n, minX, maxX, minZ, maxZ, level) {
    const segments = [];
    const at = (i, j) => values[j * n + i];
    for (let j = 0; j < n - 1; j += 1) {
      for (let i = 0; i < n - 1; i += 1) {
        const v0 = at(i, j);
        const v1 = at(i + 1, j);
        const v2 = at(i + 1, j + 1);
        const v3 = at(i, j + 1);
        const idx = (v0 > level ? 1 : 0) | (v1 > level ? 2 : 0) | (v2 > level ? 4 : 0) | (v3 > level ? 8 : 0);
        if (idx === 0 || idx === 15) continue;
        const x0 = minX + (i / (n - 1)) * (maxX - minX);
        const x1 = minX + ((i + 1) / (n - 1)) * (maxX - minX);
        const z0 = minZ + (j / (n - 1)) * (maxZ - minZ);
        const z1 = minZ + ((j + 1) / (n - 1)) * (maxZ - minZ);
        const edge = (a, b, va, vb, pa, pb) => {
          const t = (level - va) / (vb - va);
          return new THREE.Vector3(pa.x + (pb.x - pa.x) * t, 0, pa.z + (pb.z - pa.z) * t);
        };
        const p0 = new THREE.Vector3(x0, 0, z0);
        const p1 = new THREE.Vector3(x1, 0, z0);
        const p2 = new THREE.Vector3(x1, 0, z1);
        const p3 = new THREE.Vector3(x0, 0, z1);
        const pts = [];
        if ((idx & 1) !== (idx & 2)) pts.push(edge(0, 1, v0, v1, p0, p1));
        if ((idx & 2) !== (idx & 4)) pts.push(edge(1, 2, v1, v2, p1, p2));
        if ((idx & 4) !== (idx & 8)) pts.push(edge(2, 3, v2, v3, p2, p3));
        if ((idx & 8) !== (idx & 1)) pts.push(edge(3, 0, v3, v0, p3, p0));
        if (pts.length >= 2) segments.push(pts[0], pts[1]);
      }
    }
    return segments;
  }

  function rebuildEquipotentials(em) {
    while (equipGroup.children.length) {
      const child = equipGroup.children.pop();
      disposeTree(child);
    }
    const n = 45;
    const minX = -9;
    const maxX = 9;
    const minZ = -9;
    const maxZ = 9;
    const sources = [...em.charges, ...em.spheres, ...em.lines, ...em.planes];
    if (!sources.length) return;
    const y = sources.reduce((sum, s) => sum + s.y, 0) / sources.length;
    const values = new Float32Array(n * n);
    let min = Infinity;
    let max = -Infinity;
    for (let j = 0; j < n; j += 1) {
      const z = minZ + (j / (n - 1)) * (maxZ - minZ);
      for (let i = 0; i < n; i += 1) {
        const x = minX + (i / (n - 1)) * (maxX - minX);
        const V = electricFieldAt(em, { x, y, z }).V;
        values[j * n + i] = V;
        min = Math.min(min, V);
        max = Math.max(max, V);
      }
    }
    const span = max - min;
    if (!(span > 1e-12)) return;
    const segments = [];
    for (let k = 1; k <= 8; k += 1) {
      const level = min + (k / 9) * span;
      const lines = marchingSquares(values, n, minX, maxX, minZ, maxZ, level);
      for (let i = 0; i < lines.length; i += 2) {
        if (!lines[i] || !lines[i + 1]) continue;
        segments.push(lines[i], lines[i + 1]);
      }
    }
    if (!segments.length) return;
    const merged = segments.map((p) => new THREE.Vector3(p.x, y, p.z));
    const geo = new THREE.BufferGeometry().setFromPoints(merged);
    const equipMat = materials.equip.clone();
    equipMat.userData.own = true;
    const line = new THREE.LineSegments(geo, equipMat);
    line.userData = { ...NO_PICK, fieldKind: 'equip' };
    equipGroup.add(line);
  }

  function sync(em, mode) {
    const visible = mode === 'em';
    group.visible = visible;
    if (!visible) return;
    const entities = [
      ...em.charges, ...em.spheres, ...em.lines, ...em.planes, ...em.probes,
      ...em.particles, ...em.capacitors, ...em.magneticWires, ...em.currentLoops,
      ...em.solenoids, ...em.uniformFields, ...em.forceWires, ...em.rails, ...em.inductionCoils,
    ];
    const seen = new Set();
    for (const entity of entities) {
      seen.add(entity.id);
      const visual = ensureVisual(entity);
      if (!visual) continue;
      if (entity.type === 'emCharge' || entity.type === 'emSphere' || entity.type === 'emLine'
        || entity.type === 'emPlane' || entity.type === 'emCapacitor' || entity.type === 'emMagneticWire'
        || entity.type === 'emCurrentLoop' || entity.type === 'emSolenoid' || entity.type === 'emUniform'
        || entity.type === 'emForceWire' || entity.type === 'emRail' || entity.type === 'emInductionCoil') {
        visual.root.position.set(entity.x, entity.y, entity.z);
      }
      if (entity.type === 'emProbe') {
        visual.root.position.set(entity.x, entity.y, entity.z);
        const f = electricFieldAt(em, { x: entity.x, y: entity.y, z: entity.z });
        const mag = Math.hypot(f.E.x, f.E.y, f.E.z);
        if (mag > 1e-14) {
          const dir = new THREE.Vector3(f.E.x, f.E.y, f.E.z).normalize();
          const length = Math.min(1.8, 0.2 + Math.log10(1 + mag) * 0.22);
          visual.arrow.position.set(0, 0, 0);
          visual.arrow.setDirection(dir);
          visual.arrow.setLength(length, 0.15, 0.08);
          visual.arrow.visible = true;
        } else {
          visual.arrow.visible = false;
        }
      }
      if (entity.type === 'emParticle') {
        visual.root.position.set(entity.x, entity.y, entity.z);
        const points = entity.trail || [];
        visual.trail.position.set(-entity.x, -entity.y, -entity.z);
        if (points.length !== visual.trailCount) {
          const attr = visual.trail.geometry.getAttribute('position');
          const count = Math.min(points.length, 4000);
          for (let i = 0; i < count; i += 1) {
            attr.setXYZ(i, points[i][0], points[i][1], points[i][2]);
          }
          attr.needsUpdate = true;
          visual.trail.geometry.setDrawRange(0, count);
          visual.trail.geometry.computeBoundingSphere();
          visual.trailCount = points.length;
        }
      }
      if (entity.type === 'emForceWire') {
        const B = magneticFieldAt(em, { x: entity.x, y: entity.y, z: entity.z });
        const F = forceOnWire(entity, B);
        const mag = Math.hypot(F.x, F.y, F.z);
        if (mag > 1e-15) {
          visual.arrow.visible = true;
          visual.arrow.setDirection(new THREE.Vector3(F.x, F.y, F.z).normalize());
          visual.arrow.setLength(Math.min(2.2, 0.35 + Math.log10(1 + mag) * 0.3), 0.16, 0.07);
        } else {
          visual.arrow.visible = false;
        }
      }
      if (entity.type === 'emRail') {
        visual.rod.position.x = entity.xRod;
      }
      if (entity.type === 'emCapacitor') {
        const polarity = capacitorState(entity).V >= 0 ? 1 : -1;
        visual.plates.rotation.y = polarity > 0 ? 0 : Math.PI;
      }
    }
    for (const [id, visual] of visuals) {
      if (!seen.has(id)) {
        group.remove(visual.root);
        disposeTree(visual.root);
        visuals.delete(id);
      }
    }
    fieldGroup.visible = true;
    const fieldSig = JSON.stringify([em.settings.fieldLines, em.charges.map((c) => [c.id, c.q, c.x, c.y, c.z]),
      em.spheres.map((c) => [c.id, c.q, c.x, c.y, c.z, c.R]),
      em.lines.map((c) => [c.id, c.q, c.x, c.y, c.z, c.length, c.axis]),
      em.planes.map((c) => [c.id, c.q, c.x, c.y, c.z, c.width, c.height, c.axis])]);
    if (em.settings.fieldLines && fieldSig !== lastFieldSig) {
      rebuildFieldLines(em);
      lastFieldSig = fieldSig;
    } else if (!em.settings.fieldLines) {
      lastFieldSig = '';
    }
    fieldLineGroup.visible = !!em.settings.fieldLines;
    equipGroup.visible = !!em.settings.equipotentials;
    const equipSig = JSON.stringify([em.settings.equipotentials, em.charges.map((c) => [c.id, c.q, c.x, c.y, c.z]),
      em.spheres.map((c) => [c.id, c.q, c.x, c.y, c.z, c.R]),
      em.lines.map((c) => [c.id, c.q, c.x, c.y, c.z, c.length, c.axis]),
      em.planes.map((c) => [c.id, c.q, c.x, c.y, c.z, c.width, c.height, c.axis])]);
    if (em.settings.equipotentials && equipSig !== lastEquipSig) {
      rebuildEquipotentials(em);
      lastEquipSig = equipSig;
    } else if (!em.settings.equipotentials) {
      lastEquipSig = '';
    }
    syncSelection();
  }

  function syncSelection() {
    if (!selected) {
      selectionHelper.visible = false;
      return;
    }
    const visual = visuals.get(selected.id);
    if (!visual) {
      selectionHelper.visible = false;
      return;
    }
    let box;
    if (selected.type === 'emParticle') {
      const entity = visual.entity;
      box = new THREE.Box3(
        new THREE.Vector3(entity.x - 0.2, entity.y - 0.2, entity.z - 0.2),
        new THREE.Vector3(entity.x + 0.2, entity.y + 0.2, entity.z + 0.2),
      );
    } else {
      box = new THREE.Box3().setFromObject(visual.root).expandByScalar(0.08);
    }
    if (box.isEmpty()) {
      selectionHelper.visible = false;
      return;
    }
    selectionHelper.box.copy(box);
    selectionHelper.visible = true;
    selectionHelper.updateMatrixWorld(true);
  }

  function setSelection(ref) {
    selected = ref ? { type: ref.type, id: ref.id } : null;
    syncSelection();
  }

  function setTheme(next) {
    const t = next || {};
    materials.line.color.set(t.accent || fieldColor);
    materials.equip.color.set(t.text || muted);
    materials.arrow.color.set(t.ok || '#1d7a5a');
    materials.force.color.set(t.danger || '#c0392b');
    materials.accent = t.accent;
    lastFieldSig = '';
    lastEquipSig = '';
  }

  function destroy() {
    for (const visual of visuals.values()) disposeTree(visual.root);
    visuals.clear();
    while (fieldLineGroup.children.length) disposeTree(fieldLineGroup.children.pop());
    while (equipGroup.children.length) disposeTree(equipGroup.children.pop());
    scene.remove(group);
    for (const material of Object.values(materials)) material.dispose?.();
    selectionHelper.geometry.dispose();
    selectionHelper.material.dispose();
  }

  return { group, sync, setSelection, setTheme, destroy };
}
