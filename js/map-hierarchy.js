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

/** Human-readable unit titles (never bare P1/P4 codes). */
const UNIT_TITLE_HINTS = {
  'math-prep-alg1': '表达式与方程',
  'math-prep-geo': '几何基础',
  'math-prep-alg2': '函数与多项式',
  'math-prep-precalc': '三角与分析预备',
  'calc-u0': '极限预备',
  'calc-u1': '极限与连续',
  'calc-u2': '微分',
  'calc-u3': '复合/隐函数/反函数',
  'calc-u4': '情境应用',
  'calc-u5': '分析应用',
  'calc-u6': '积分',
  'calc-u7': '微分方程',
  'calc-u8': '积分应用',
  'calc-u9': '参数/极坐标/向量',
  'calc-u10': '无穷级数',
  'bio-prep-chem': '化学基础',
  'bio-prep-hs': '高中生物基础',
  'bio-u1': '生命化学',
  'bio-u2': '细胞结构与功能',
  'bio-u3': '细胞能量',
  'bio-u4': '细胞通讯与周期',
  'bio-u5': '遗传',
  'bio-u6': '基因表达与调控',
  'bio-u7': '自然选择',
  'bio-u8': '生态学',
  'mech-prep-hs': '高中物理基础',
  'mech-prep-ap1': 'AP Physics 1 预备',
  'mech-prep-math': '物理数学工具',
  'mech-u1': '运动学',
  'mech-u2': '牛顿定律',
  'mech-u3': '功·能·功率',
  'mech-u4': '动量与质点系',
  'mech-u5': '转动',
  'mech-u6': '振动',
  'mech-u7': '万有引力',
  'em-prep-found': '电磁预备',
  'em-u8': '静电学',
  'em-u9': '导体·电容·电介质',
  'em-u10': '电路',
  'em-u11': '磁场',
  'em-u12': '电磁感应',
  'em-u13': '几何/波动光学',
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
    const titleZh = hint || (sample.layer === 'prep' ? `${st.labelZh}·单元` : `单元 ${sample.unitCode}`);
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

  // Mark units that are the sole child of a stage — label can be omitted (stage name enough)
  const unitsPerStage = new Map();
  for (const u of unitNodes) {
    unitsPerStage.set(u.stageId, (unitsPerStage.get(u.stageId) || 0) + 1);
  }
  for (const u of unitNodes) {
    u.soleUnderStage = unitsPerStage.get(u.stageId) === 1;
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

/** Organic layout: stages pinned in curriculum order L→R, units/topics clustered. */
export function layoutOrganic(nodes, allEdges, subject) {
  const byId = new Map(nodes.map((n) => [n.id, n]));
  const stages = nodes.filter((n) => n.tier === 'stage'); // already curriculum order
  const units = nodes.filter((n) => n.tier === 'unit');
  const topics = nodes.filter((n) => n.tier === 'topic');

  const nSt = Math.max(1, stages.length);
  // Compact spacing so the whole curriculum fits with margin
  const gap = nSt <= 2 ? 13 : nSt <= 3 ? 10 : 8.5;
  const totalW = gap * Math.max(1, nSt - 1);
  stages.forEach((st, i) => {
    const rnd = mulberry32(hashStr(subject + ':st:' + st.id));
    const t = nSt === 1 ? 0.5 : i / (nSt - 1);
    st.x = (t - 0.5) * totalW;
    // Gentle organic arc (not a ring): slight forward/back + small height jitter
    st.y = (rnd() - 0.5) * 2.2 + Math.sin(t * Math.PI) * 0.8;
    st.z = Math.sin((t - 0.5) * Math.PI) * 4.5 + (rnd() - 0.5) * 2.5;
    st.tx = st.x; st.ty = st.y; st.tz = st.z;
    st.vx = st.vy = st.vz = 0;
    st._pinned = true;
  });

  // Units fan around their stage — keep clusters compact so stages don't need huge gaps
  const unitsByStage = new Map();
  for (const u of units) {
    if (!unitsByStage.has(u.stageId)) unitsByStage.set(u.stageId, []);
    unitsByStage.get(u.stageId).push(u);
  }
  for (const [sid, list] of unitsByStage) {
    const st = byId.get(sid);
    list.forEach((u, i) => {
      const rnd = mulberry32(hashStr(subject + ':u:' + u.id));
      const nU = list.length;
      // Prefer a front-facing fan so labels read clearly
      const span = Math.min(Math.PI * 1.4, 0.55 * nU + 0.8);
      const ang = -span / 2 + (nU <= 1 ? 0 : (i / (nU - 1)) * span) + (rnd() - 0.5) * 0.25;
      const elev = (rnd() - 0.5) * 0.55;
      const rad = (nU <= 1 ? 3.2 : 3.6 + Math.min(2.5, nU) * 0.18) + rnd() * 0.9;
      const sx = st ? st.x : 0, sy = st ? st.y : 0, sz = st ? st.z : 0;
      u.x = sx + Math.sin(ang) * rad;
      u.y = sy + Math.sin(elev) * rad * 0.55 + (rnd() - 0.5) * 1.2;
      u.z = sz + Math.cos(ang) * rad * 0.85;
      u.tx = u.x; u.ty = u.y; u.tz = u.z;
      u.vx = u.vy = u.vz = 0;
    });
  }

  topics.forEach((t) => {
    const u = byId.get(`unit:${t.chapterId}`);
    const rnd = mulberry32(hashStr(subject + ':t:' + t.id));
    const ang = rnd() * Math.PI * 2;
    const elev = (rnd() - 0.5) * Math.PI;
    const rad = 0.85 + rnd() * 1.15;
    const cx = u ? u.x : 0, cy = u ? u.y : 0, cz = u ? u.z : 0;
    t.x = cx + Math.cos(ang) * Math.sin(elev + 1) * rad;
    t.y = cy + Math.cos(elev) * rad * 0.55;
    t.z = cz + Math.sin(ang) * Math.sin(elev + 1) * rad;
    t.tx = t.x; t.ty = t.y; t.tz = t.z;
    t.vx = t.vy = t.vz = 0;
  });

  const N = nodes.length;
  const idx = new Map(nodes.map((n, i) => [n.id, i]));
  const links = allEdges
    .map((e) => ({ a: idx.get(e.source), b: idx.get(e.target), type: e.type }))
    .filter((l) => l.a != null && l.b != null);

  for (let it = 0; it < 160; it++) {
    const cool = 1 - it / 160;
    for (let i = 0; i < N; i++) {
      const a = nodes[i];
      if (a._pinned) continue;
      for (let j = i + 1; j < N; j++) {
        const b = nodes[j];
        let dx = a.x - b.x, dy = a.y - b.y, dz = a.z - b.z;
        let dist2 = dx * dx + dy * dy + dz * dz;
        if (dist2 > 64) continue;
        dist2 = Math.max(0.06, dist2);
        const dist = Math.sqrt(dist2);
        const sameUnit = a.chapterId && a.chapterId === b.chapterId;
        const force = ((sameUnit ? 1.2 : 3.2) * cool) / dist2;
        dx = (dx / dist) * force; dy = (dy / dist) * force; dz = (dz / dist) * force;
        a.vx += dx; a.vy += dy; a.vz += dz;
        if (!b._pinned) { b.vx -= dx; b.vy -= dy; b.vz -= dz; }
      }
    }
    for (const l of links) {
      const a = nodes[l.a], b = nodes[l.b];
      let dx = b.x - a.x, dy = b.y - a.y, dz = b.z - a.z;
      const dist = Math.hypot(dx, dy, dz) || 0.01;
      let ideal = 4;
      if (l.type === 'tree-stage-unit') ideal = 4.5;
      else if (l.type === 'tree-unit-topic') ideal = 1.55;
      else if (l.type === 'prerequisite') ideal = 2.1;
      else if (l.type === 'connects' || l.type === 'applies-to') ideal = 10;
      const k = l.type?.startsWith('tree') ? 0.1 : l.type === 'connects' || l.type === 'applies-to' ? 0.006 : 0.02;
      const f = (dist - ideal) * k * cool;
      dx = (dx / dist) * f; dy = (dy / dist) * f; dz = (dz / dist) * f;
      if (!a._pinned) { a.vx += dx; a.vy += dy; a.vz += dz; }
      if (!b._pinned) { b.vx -= dx; b.vy -= dy; b.vz -= dz; }
    }
    for (const n of nodes) {
      if (n._pinned) {
        n.x = n.tx; n.y = n.ty; n.z = n.tz;
        n.vx = n.vy = n.vz = 0;
        continue;
      }
      // Soft pull toward parent stage/unit home
      n.vx *= 0.68; n.vy *= 0.68; n.vz *= 0.68;
      n.x += n.vx; n.y += n.vy; n.z += n.vz;
    }
  }
  for (const n of nodes) {
    n.tx = n.x; n.ty = n.y; n.tz = n.z;
    n.vx = n.vy = n.vz = 0;
  }
  return nodes;
}

export function mixHex(a, b, t) {
  const ar = (a >> 16) & 0xff, ag = (a >> 8) & 0xff, ab = a & 0xff;
  const br = (b >> 16) & 0xff, bg = (b >> 8) & 0xff, bb = b & 0xff;
  const r = Math.round(ar + (br - ar) * t);
  const g = Math.round(ag + (bg - ag) * t);
  const bl = Math.round(ab + (bb - ab) * t);
  return (r << 16) | (g << 8) | bl;
}

export function nodeBaseColor(n, UNIT_COLORS_AP, PREP_COLOR) {
  if (n.tier === 'stage' && n.color != null) return n.color;
  const unitCol = UNIT_COLORS_AP[Math.max(0, n.unitIndex) % UNIT_COLORS_AP.length];
  // Prep topics/units: soft tint of unit hue instead of flat gray
  if (n.layer === 'prep') {
    if (n.tier === 'topic') return mixHex(PREP_COLOR, unitCol, 0.58);
    return mixHex(PREP_COLOR, unitCol, 0.4);
  }
  if (n.tier === 'topic') return mixHex(unitCol, 0xf5f2ec, 0.12);
  return unitCol;
}

/** Axis-aligned screen bbox helpers for label collision. */
export function rectsOverlap(a, b, pad = 4) {
  return !(
    a.x + a.w + pad < b.x ||
    b.x + b.w + pad < a.x ||
    a.y + a.h + pad < b.y ||
    b.y + b.h + pad < a.y
  );
}
