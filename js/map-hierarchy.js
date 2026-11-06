/**
 * Build 3-tier map graph: stage → unit → topic, plus cross-topic edges.
 */
import { hashStr } from './map-rng.js';

const STAGE_DEFS = {
  math: [
    { id: 'stage:alg1', label: 'Algebra I', labelZh: '代数 I', chapters: ['math-prep-alg1'], color: 0xf0a07a },
    { id: 'stage:geo', label: 'Geometry', labelZh: '几何', chapters: ['math-prep-geo'], color: 0x7eade8 },
    { id: 'stage:alg2', label: 'Algebra II', labelZh: '代数 II', chapters: ['math-prep-alg2'], color: 0x6fc4b0 },
    { id: 'stage:precalc', label: 'Precalculus', labelZh: '预备微积分', chapters: ['math-prep-precalc'], color: 0xb9a3eb },
    { id: 'stage:calc', label: 'Calculus BC', labelZh: '微积分 BC', chapters: null, color: 0xe0b06a, apOnly: true },
  ],
  bio: [
    { id: 'stage:chem', label: 'Prep Chemistry', labelZh: '预备化学', chapters: ['bio-prep-chem'], color: 0x6eb9c9 },
    { id: 'stage:hsbio', label: 'Prep Biology', labelZh: '预备生物', chapters: ['bio-prep-hs'], color: 0x6fc4b0 },
    { id: 'stage:apbio', label: 'AP Biology', labelZh: 'AP 生物', chapters: null, color: 0xf0a07a, apOnly: true },
  ],
  mech: [
    { id: 'stage:prep', label: 'Prep Physics', labelZh: '预备物理', chapters: ['mech-prep-hs', 'mech-prep-ap1', 'mech-prep-math'], color: 0x7eade8 },
    { id: 'stage:mech', label: 'Mechanics', labelZh: '力学', chapters: null, color: 0xf0a07a, apOnly: true },
  ],
  em: [
    { id: 'stage:prep', label: 'Prep Physics', labelZh: '预备物理', chapters: ['em-prep-found'], color: 0x7eade8 },
    { id: 'stage:em', label: 'E&M', labelZh: '电磁学', chapters: null, color: 0xb9a3eb, apOnly: true },
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
    unitByChapter,
  };
}

/** Organic layout: compact prep block + a content-proportional AP unit grid. */
export function layoutOrganic(nodes, allEdges, subject) {
  const byId = new Map(nodes.map((n) => [n.id, n]));
  const stages = nodes.filter((n) => n.tier === 'stage');
  const units = nodes.filter((n) => n.tier === 'unit');
  const topics = nodes.filter((n) => n.tier === 'topic');

  const unitsByStage = new Map();
  for (const u of units) {
    if (!unitsByStage.has(u.stageId)) unitsByStage.set(u.stageId, []);
    unitsByStage.get(u.stageId).push(u);
  }
  const topicsByUnit = new Map();
  for (const t of topics) {
    if (!topicsByUnit.has(t.chapterId)) topicsByUnit.set(t.chapterId, []);
    topicsByUnit.get(t.chapterId).push(t);
  }

  const CELL_W = 5.2;
  const CELL_H = 4.8;

  function colsFor(count) {
    if (count >= 10) return 6;
    if (count >= 7) return 4;
    if (count >= 4) return 3;
    return Math.max(1, count);
  }

  function layoutCluster(stage, list, origin) {
    const cols = colsFor(list.length || 1);
    const rows = Math.max(1, Math.ceil(list.length / cols));
    const gw = (cols - 1) * CELL_W;
    const gh = (rows - 1) * CELL_H;

    stage.x = origin.x;
    stage.y = origin.y + gh / 2 + 3.2;
    stage.z = 0.35;
    stage.tx = stage.x; stage.ty = stage.y; stage.tz = stage.z;

    list.forEach((u, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);
      u.x = origin.x + (col - (cols - 1) / 2) * CELL_W;
      u.y = origin.y + (rows - 1) / 2 * CELL_H - row * CELL_H;
      u.z = ((i % 3) - 1) * 0.22;
      u.tx = u.x; u.ty = u.y; u.tz = u.z;
      const uts = (topicsByUnit.get(u.chapterId) || [])
        .slice()
        .sort((a, b) => (a.topicIndex ?? 0) - (b.topicIndex ?? 0));
      const n = uts.length;
      const seed = (hashStr(u.id) % 997) / 997 * Math.PI * 2;
      uts.forEach((t, ti) => {
        const k = ti + 0.5;
        const phi = n === 1 ? Math.PI / 2 : Math.acos(1 - 2 * k / n);
        const theta = 2.3999632297 * k + seed;
        const ring = 1.2 + (ti % 2) * 0.22 + (n > 12 ? 0.14 : 0);
        t.x = u.x + Math.sin(phi) * Math.cos(theta) * ring;
        t.y = u.y + Math.cos(phi) * ring * 0.94;
        t.z = u.z + Math.sin(phi) * Math.sin(theta) * ring * 0.68;
        t.tx = t.x; t.ty = t.y; t.tz = t.z;
      });
    });

    return {
      width: gw + 4.8,
      top: origin.y + gh / 2 + 4.2,
      bottom: origin.y - gh / 2 - 2.0,
    };
  }

  const prep = stages.filter((s) => !s.apOnly);
  const ap = stages.filter((s) => s.apOnly);
  const prepLayouts = prep.map((stage) => {
    const list = (unitsByStage.get(stage.id) || []).slice();
    const cols = colsFor(list.length || 1);
    return {
      stage,
      list,
      width: (cols - 1) * CELL_W + 4.8,
      height: Math.max(1, Math.ceil((list.length || 1) / cols) - 1) * CELL_H + 6.2,
    };
  });

  // Prep is a compact 1–2 column block, not a full-width extra stage row.
  const prepCols = prepLayouts.length >= 3 ? 2 : Math.max(1, prepLayouts.length);
  const prepRows = prepLayouts.length ? Math.ceil(prepLayouts.length / prepCols) : 0;
  const prepCellW = prepLayouts.length ? Math.max(...prepLayouts.map((p) => p.width)) + 2.4 : 0;
  const prepCellH = prepLayouts.length ? Math.max(...prepLayouts.map((p) => p.height)) + 2.4 : 0;
  const prepRight = prepLayouts.length ? ((prepCols - 1) / 2) * prepCellW + prepCellW / 2 : 0;

  prepLayouts.forEach((p, i) => {
    const col = i % prepCols;
    const row = Math.floor(i / prepCols);
    layoutCluster(p.stage, p.list, {
      x: (col - (prepCols - 1) / 2) * prepCellW,
      y: ((prepRows - 1) / 2 - row) * prepCellH,
      z: 0,
    });
  });

  const apStage = ap[0] || null;
  if (apStage) {
    const list = (unitsByStage.get(apStage.id) || []).slice();
    const cols = colsFor(list.length || 1);
    const apWidth = (cols - 1) * CELL_W + 4.8;
    const apOrigin = {
      x: prepLayouts.length ? prepRight + 6.0 + apWidth / 2 : 0,
      y: 0,
      z: 0,
    };
    layoutCluster(apStage, list, apOrigin);
  } else {
    // Defensive: any stage not covered above still gets a position.
    stages.forEach((stage, i) => {
      if (stage.tx != null) return;
      layoutCluster(stage, unitsByStage.get(stage.id) || [], {
        x: prepLayouts.length ? prepRight + 6.0 + i * 4 : i * 4,
        y: 0,
        z: 0,
      });
    });
  }

  // Keep any orphan topic attached to its unit instead of leaving it at origin.
  for (const t of topics) {
    if (t.tx != null) continue;
    const u = byId.get(`unit:${t.chapterId}`);
    t.x = (u?.x || 0) + 0.6;
    t.y = (u?.y || 0) + 0.6;
    t.z = 0;
    t.tx = t.x; t.ty = t.y; t.tz = t.z;
  }

  // Center the whole map on the origin so the camera fit is balanced.
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  for (const n of nodes) {
    minX = Math.min(minX, n.x);
    maxX = Math.max(maxX, n.x);
    minY = Math.min(minY, n.y);
    maxY = Math.max(maxY, n.y);
  }
  const cx = (minX + maxX) / 2;
  const cy = (minY + maxY) / 2;
  for (const n of nodes) {
    n.x -= cx;
    n.y -= cy;
    n.tx = n.x;
    n.ty = n.y;
    n.tz = n.z;
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

export function nodeBaseColor(n, UNIT_COLORS_AP) {
  if (n.tier === 'stage' && n.color != null) return n.color;
  // unitIndex is the authoritative unit slot; if a node ever lacks it, derive a
  // stable slot from its chapter so the whole unit still shares one hue instead
  // of falling through to an undefined palette entry (which renders near-gray).
  const rawIndex = Number(n.unitIndex);
  const index = Number.isFinite(rawIndex)
    ? Math.max(0, Math.floor(rawIndex))
    : hashStr(n.chapterId || n.id || 'unit');
  const unitCol = UNIT_COLORS_AP[index % UNIT_COLORS_AP.length];
  // Pastel topics: keep unit hue, lift toward cream so spheres stay soft (not gray).
  if (n.layer === 'prep') {
    if (n.tier === 'topic') return mixHex(unitCol, 0xf7f5f0, 0.28);
    return mixHex(unitCol, 0xf7f5f0, 0.18);
  }
  if (n.tier === 'topic') return mixHex(unitCol, 0xfffaf5, 0.22);
  if (n.tier === 'unit') return mixHex(unitCol, 0xfffaf5, 0.08);
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
