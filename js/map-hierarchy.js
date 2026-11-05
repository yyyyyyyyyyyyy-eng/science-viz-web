/**
 * Build 3-tier map graph: stage → unit → topic, plus cross-topic edges.
 */
import { hashStr, mulberry32 } from './map-rng.js';

const STAGE_DEFS = {
  math: [
    { id: 'stage:alg1', label: 'Algebra I', labelZh: '代数 I', chapters: ['math-prep-alg1'], color: 0xc45c26 },
    { id: 'stage:geo', label: 'Geometry', labelZh: '几何', chapters: ['math-prep-geo'], color: 0x2f6fed },
    { id: 'stage:alg2', label: 'Algebra II', labelZh: '代数 II', chapters: ['math-prep-alg2'], color: 0x0f7b6c },
    { id: 'stage:precalc', label: 'Precalculus', labelZh: '预备微积分', chapters: ['math-prep-precalc'], color: 0x8b5cf6 },
    { id: 'stage:calc', label: 'Calculus BC', labelZh: '微积分 BC', chapters: null, color: 0xb45309, apOnly: true },
  ],
  bio: [
    { id: 'stage:chem', label: 'Prep Chemistry', labelZh: '预备化学', chapters: ['bio-prep-chem'], color: 0x0e7490 },
    { id: 'stage:hsbio', label: 'Prep Biology', labelZh: '预备生物', chapters: ['bio-prep-hs'], color: 0x0f7b6c },
    { id: 'stage:apbio', label: 'AP Biology', labelZh: 'AP 生物', chapters: null, color: 0xc45c26, apOnly: true },
  ],
  mech: [
    { id: 'stage:prep', label: 'Prep Physics', labelZh: '预备物理', chapters: ['mech-prep-hs', 'mech-prep-ap1', 'mech-prep-math'], color: 0x2f6fed },
    { id: 'stage:mech', label: 'Mechanics', labelZh: '力学', chapters: null, color: 0xc45c26, apOnly: true },
  ],
  em: [
    { id: 'stage:prep', label: 'Prep Physics', labelZh: '预备物理', chapters: ['em-prep-found'], color: 0x2f6fed },
    { id: 'stage:em', label: 'E&M', labelZh: '电磁学', chapters: null, color: 0x8b5cf6, apOnly: true },
  ],
};

/** Human unit titles when chapterId alone is opaque. */
const UNIT_TITLE_HINTS = {
  'calc-u0': 'Limits Prep',
  'calc-u1': 'Limits & Continuity',
  'calc-u2': 'Differentiation',
  'calc-u3': 'Composite / Implicit / Inverse',
  'calc-u4': 'Contextual Applications',
  'calc-u5': 'Analytical Applications',
  'calc-u6': 'Integration',
  'calc-u7': 'Differential Equations',
  'calc-u8': 'Applications of Integration',
  'calc-u9': 'Parametric / Polar / Vector',
  'calc-u10': 'Infinite Sequences & Series',
  'bio-u1': 'Chemistry of Life',
  'bio-u2': 'Cell Structure & Function',
  'bio-u3': 'Cellular Energetics',
  'bio-u4': 'Cell Communication & Cycle',
  'bio-u5': 'Heredity',
  'bio-u6': 'Gene Expression & Regulation',
  'bio-u7': 'Natural Selection',
  'bio-u8': 'Ecology',
  'mech-u1': 'Kinematics',
  'mech-u2': "Newton's Laws",
  'mech-u3': 'Work, Energy, Power',
  'mech-u4': 'Systems of Particles / Momentum',
  'mech-u5': 'Rotation',
  'mech-u6': 'Oscillations',
  'mech-u7': 'Gravitation',
  'em-u8': 'Electrostatics',
  'em-u9': 'Conductors / Capacitors / Dielectrics',
  'em-u10': 'Electric Circuits',
  'em-u11': 'Magnetic Fields',
  'em-u12': 'Electromagnetism',
  'em-u13': 'Geometric / Physical Optics',
};

export function buildHierarchicalGraph(subject, GRAPH, crossEdges = [], crossRelations = {}) {
  const stages = STAGE_DEFS[subject] || [];
  const topicNodes = GRAPH.nodes.map((n) => ({ ...n, tier: 'topic', kind: 'topic' }));
  const chapterIds = [...new Set(topicNodes.map((n) => n.chapterId))];

  function stageForChapter(ch, layer) {
    for (const st of stages) {
      if (st.chapters && st.chapters.includes(ch)) return st;
    }
    if (layer === 'ap') {
      const ap = stages.find((s) => s.apOnly);
      if (ap) return ap;
    }
    return stages[stages.length - 1];
  }

  const unitNodes = [];
  const unitByChapter = new Map();
  for (const ch of chapterIds) {
    const sample = topicNodes.find((n) => n.chapterId === ch);
    const st = stageForChapter(ch, sample.layer);
    const id = `unit:${ch}`;
    const hint = UNIT_TITLE_HINTS[ch];
    const titleZh = hint
      ? hint
      : sample.layer === 'prep'
        ? `${sample.unitCode}`
        : `Unit ${String(sample.unitCode).replace(/^u/i, '')}`;
    const node = {
      id,
      code: sample.unitCode,
      titleZh,
      titleEn: hint || ch,
      chapterId: ch,
      unitCode: sample.unitCode,
      unitIndex: sample.unitIndex,
      topicIndex: -1,
      layer: sample.layer,
      hasViz: false,
      tier: 'unit',
      kind: 'unit',
      stageId: st.id,
      color: null,
    };
    unitNodes.push(node);
    unitByChapter.set(ch, node);
  }

  const stageNodes = stages.map((st) => ({
    id: st.id,
    code: st.id.replace('stage:', ''),
    titleZh: st.labelZh,
    titleEn: st.label,
    chapterId: st.id,
    unitCode: st.id,
    unitIndex: -1,
    topicIndex: -2,
    layer: st.apOnly ? 'ap' : 'prep',
    hasViz: false,
    tier: 'stage',
    kind: 'stage',
    color: st.color,
    chapters: st.chapters,
    apOnly: !!st.apOnly,
  }));

  const treeEdges = [];
  for (const u of unitNodes) {
    treeEdges.push({ source: u.stageId, target: u.id, type: 'tree-stage-unit' });
  }
  for (const t of topicNodes) {
    const u = unitByChapter.get(t.chapterId);
    if (u) treeEdges.push({ source: u.id, target: t.id, type: 'tree-unit-topic' });
  }

  const topicEdges = [...GRAPH.edges];
  const existing = new Set(topicEdges.map((e) => `${e.source}|${e.target}|${e.type}`));
  let addedCross = 0;
  for (const e of crossEdges) {
    const k = `${e.source}|${e.target}|${e.type}`;
    if (!existing.has(k) && topicNodes.some((n) => n.id === e.source) && topicNodes.some((n) => n.id === e.target)) {
      topicEdges.push({ ...e, cross: true });
      existing.add(k);
      addedCross++;
    }
  }

  const nodes = [...stageNodes, ...unitNodes, ...topicNodes];
  return {
    nodes,
    treeEdges,
    topicEdges,
    allEdges: [...treeEdges, ...topicEdges],
    crossRelations,
    addedCross,
    stageNodes,
    unitNodes,
    topicNodes,
  };
}

/** Organic non-ring layout with loose unit clusters under stages. */
export function layoutOrganic(nodes, allEdges, subject) {
  const byId = new Map(nodes.map((n) => [n.id, n]));
  const stages = nodes.filter((n) => n.tier === 'stage');
  const units = nodes.filter((n) => n.tier === 'unit');
  const topics = nodes.filter((n) => n.tier === 'topic');

  stages.forEach((st, i) => {
    const rnd = mulberry32(hashStr(subject + st.id));
    const n = Math.max(1, stages.length);
    const ang = (i / n) * Math.PI * 1.7 - 0.35 + (rnd() - 0.5) * 0.55;
    const r = 7 + rnd() * 4;
    st.x = Math.cos(ang) * r * (0.75 + rnd() * 0.45);
    st.y = (rnd() - 0.5) * 6;
    st.z = Math.sin(ang) * r * (0.55 + rnd() * 0.45);
    st.tx = st.x; st.ty = st.y; st.tz = st.z;
    st.vx = st.vy = st.vz = 0;
  });

  units.forEach((u) => {
    const st = byId.get(u.stageId);
    const rnd = mulberry32(hashStr(subject + u.id));
    const ang = rnd() * Math.PI * 2;
    const elev = (rnd() - 0.5) * 1.3;
    const rad = 3.4 + rnd() * 2.4;
    const sx = st ? st.x : 0, sy = st ? st.y : 0, sz = st ? st.z : 0;
    u.x = sx + Math.cos(ang) * Math.cos(elev) * rad;
    u.y = sy + Math.sin(elev) * rad * 0.85;
    u.z = sz + Math.sin(ang) * Math.cos(elev) * rad;
    u.tx = u.x; u.ty = u.y; u.tz = u.z;
    u.vx = u.vy = u.vz = 0;
  });

  topics.forEach((t) => {
    const u = byId.get(`unit:${t.chapterId}`);
    const rnd = mulberry32(hashStr(subject + t.id));
    const ang = rnd() * Math.PI * 2;
    const elev = (rnd() - 0.5) * Math.PI;
    const rad = 1.15 + rnd() * 1.7;
    const cx = u ? u.x : 0, cy = u ? u.y : 0, cz = u ? u.z : 0;
    t.x = cx + Math.cos(ang) * Math.sin(elev + 1) * rad;
    t.y = cy + Math.cos(elev) * rad * 0.75;
    t.z = cz + Math.sin(ang) * Math.sin(elev + 1) * rad;
    t.tx = t.x; t.ty = t.y; t.tz = t.z;
    t.vx = t.vy = t.vz = 0;
  });

  const N = nodes.length;
  const idx = new Map(nodes.map((n, i) => [n.id, i]));
  const links = allEdges
    .map((e) => ({ a: idx.get(e.source), b: idx.get(e.target), type: e.type }))
    .filter((l) => l.a != null && l.b != null);

  for (let it = 0; it < 200; it++) {
    const cool = 1 - it / 200;
    for (let i = 0; i < N; i++) {
      const a = nodes[i];
      for (let j = i + 1; j < N; j++) {
        const b = nodes[j];
        let dx = a.x - b.x, dy = a.y - b.y, dz = a.z - b.z;
        let dist2 = dx * dx + dy * dy + dz * dz;
        if (dist2 > 81) continue;
        dist2 = Math.max(0.08, dist2);
        const dist = Math.sqrt(dist2);
        const sameUnit = a.chapterId && a.chapterId === b.chapterId;
        const force = ((sameUnit ? 1.6 : 4.2) * cool) / dist2;
        dx = (dx / dist) * force; dy = (dy / dist) * force; dz = (dz / dist) * force;
        a.vx += dx; a.vy += dy; a.vz += dz;
        b.vx -= dx; b.vy -= dy; b.vz -= dz;
      }
    }
    for (const l of links) {
      const a = nodes[l.a], b = nodes[l.b];
      let dx = b.x - a.x, dy = b.y - a.y, dz = b.z - a.z;
      const dist = Math.hypot(dx, dy, dz) || 0.01;
      let ideal = 5;
      if (l.type === 'tree-stage-unit') ideal = 4.4;
      else if (l.type === 'tree-unit-topic') ideal = 1.85;
      else if (l.type === 'prerequisite') ideal = 2.5;
      else if (l.type === 'connects' || l.type === 'applies-to') ideal = 7.5;
      const k = l.type?.startsWith('tree') ? 0.085 : l.type === 'connects' || l.type === 'applies-to' ? 0.012 : 0.028;
      const f = (dist - ideal) * k * cool;
      dx = (dx / dist) * f; dy = (dy / dist) * f; dz = (dz / dist) * f;
      a.vx += dx; a.vy += dy; a.vz += dz;
      b.vx -= dx; b.vy -= dy; b.vz -= dz;
    }
    for (const n of nodes) {
      if (n.tier === 'stage') {
        n.vx -= n.x * 0.012; n.vy -= n.y * 0.012; n.vz -= n.z * 0.012;
      }
      n.vx *= 0.72; n.vy *= 0.72; n.vz *= 0.72;
      n.x += n.vx; n.y += n.vy; n.z += n.vz;
    }
  }
  for (const n of nodes) {
    n.tx = n.x; n.ty = n.y; n.tz = n.z;
    n.vx = n.vy = n.vz = 0;
  }
  return nodes;
}

export function nodeBaseColor(n, UNIT_COLORS_AP, PREP_COLOR) {
  if (n.tier === 'stage' && n.color != null) return n.color;
  if (n.layer === 'prep') return PREP_COLOR;
  return UNIT_COLORS_AP[Math.max(0, n.unitIndex) % UNIT_COLORS_AP.length];
}
