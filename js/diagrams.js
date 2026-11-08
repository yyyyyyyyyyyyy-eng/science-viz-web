/**
 * Specialized, data-driven SVG diagram renderers for AP-style practice.
 * Theme-aware via currentColor / CSS variables. Labels may include KaTeX-ready text.
 */
function stroke() {
  return getComputedStyle(document.documentElement).getPropertyValue('--text').trim() || 'currentColor';
}
function muted() {
  return getComputedStyle(document.documentElement).getPropertyValue('--muted').trim() || '#888';
}
function accent() {
  return getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#c45c26';
}
function bg() {
  return getComputedStyle(document.documentElement).getPropertyValue('--canvas-plot').trim() || '#f7f5f0';
}

function svgRoot(w, h, content, opts = {}) {
  const vb = opts.viewBox || `0 0 ${w} ${h}`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" width="${w}" height="${h}" role="img" aria-label="${opts.label || 'diagram'}" style="max-width:100%;height:auto;color:inherit">${content}</svg>`;
}

function arrowHead(id = 'arr') {
  return `<defs><marker id="${id}" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="currentColor"/></marker></defs>`;
}

/** Free-body diagram: box + labeled force arrows */
export function freeBody(data = {}) {
  const forces = data.forces || [
    { label: 'N', dx: 0, dy: -50 },
    { label: 'mg', dx: 0, dy: 55 },
    { label: 'F', dx: 60, dy: 0 },
    { label: 'f_k', dx: -45, dy: 0 },
  ];
  const cx = 140, cy = 90;
  let arrows = arrowHead('fbd');
  arrows += `<rect x="${cx - 28}" y="${cy - 22}" width="56" height="44" fill="none" stroke="currentColor" stroke-width="1.5"/>`;
  if (data.surface) {
    arrows += `<line x1="40" y1="${cy + 22}" x2="240" y2="${cy + 22}" stroke="currentColor" stroke-width="1.5"/>`;
  }
  // If magnitude provided, scale arrow length proportional to |F| (max 70 px)
  const mags = forces.map((f) => (f.mag != null ? Math.abs(f.mag) : Math.hypot(f.dx || 0, f.dy || 0)));
  const maxMag = Math.max(...mags, 1e-9);
  for (const f of forces) {
    let dx = f.dx || 0, dy = f.dy || 0;
    if (f.mag != null && (dx !== 0 || dy !== 0)) {
      const len = 24 + 46 * (Math.abs(f.mag) / maxMag);
      const hyp = Math.hypot(dx, dy) || 1;
      dx = (dx / hyp) * len;
      dy = (dy / hyp) * len;
    }
    const x2 = cx + dx, y2 = cy + dy;
    arrows += `<line x1="${cx}" y1="${cy}" x2="${x2}" y2="${y2}" stroke="currentColor" stroke-width="1.5" marker-end="url(#fbd)"/>`;
    const lx = x2 + Math.sign(dx || 1) * 8;
    const ly = y2 + (dy > 0 ? 14 : -6);
    arrows += `<text x="${lx}" y="${ly}" font-size="13" fill="currentColor" font-family="serif">${escapeXml(f.label)}</text>`;
  }
  if (data.massLabel) {
    arrows += `<text x="${cx}" y="${cy + 5}" text-anchor="middle" font-size="12" fill="currentColor">${escapeXml(data.massLabel)}</text>`;
  }
  return svgRoot(280, 180, arrows, { label: '受力分析图' });
}

/** Simple series/parallel circuit schematic */
export function circuit(data = {}) {
  const elements = data.elements || [
    { type: 'battery', label: 'ε' },
    { type: 'resistor', label: 'R₁' },
    { type: 'resistor', label: 'R₂' },
    { type: 'capacitor', label: 'C' },
  ];
  const y = 70;
  let x = 40;
  let body = `<line x1="30" y1="${y}" x2="250" y2="${y}" stroke="currentColor" stroke-width="1.5"/><line x1="30" y1="130" x2="250" y2="130" stroke="currentColor" stroke-width="1.5"/>`;
  body += `<line x1="30" y1="${y}" x2="30" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="250" y1="${y}" x2="250" y2="130" stroke="currentColor" stroke-width="1.5"/>`;
  const n = elements.length;
  const gap = 200 / (n + 1);
  elements.forEach((el, i) => {
    const cx = 40 + gap * (i + 1);
    body += drawCircuitElement(el, cx, y);
  });
  if (data.ammeter) {
    body += `<circle cx="140" cy="130" r="12" fill="none" stroke="currentColor"/><text x="140" y="134" text-anchor="middle" font-size="11" fill="currentColor">A</text>`;
  }
  if (data.switchOpen != null) {
    body += data.switchOpen
      ? `<line x1="200" y1="130" x2="220" y2="118" stroke="currentColor" stroke-width="1.5"/>`
      : `<line x1="200" y1="130" x2="220" y2="130" stroke="currentColor" stroke-width="1.5"/>`;
  }
  return svgRoot(280, 170, body, { label: '电路图' });
}

function drawCircuitElement(el, cx, y) {
  const t = el.type;
  const lab = escapeXml(el.label || '');
  if (t === 'battery') {
    return `<line x1="${cx - 8}" y1="${y - 18}" x2="${cx - 8}" y2="${y + 18}" stroke="currentColor" stroke-width="2"/><line x1="${cx + 4}" y1="${y - 10}" x2="${cx + 4}" y2="${y + 10}" stroke="currentColor" stroke-width="1.5"/><text x="${cx}" y="${y - 24}" text-anchor="middle" font-size="12" fill="currentColor">${lab}</text>`;
  }
  if (t === 'resistor') {
    return `<path d="M${cx - 20} ${y} l5 -8 5 16 5 -16 5 16 5 -16 5 8" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="${cx}" y="${y - 18}" text-anchor="middle" font-size="12" fill="currentColor">${lab}</text>`;
  }
  if (t === 'capacitor') {
    return `<line x1="${cx - 4}" y1="${y - 16}" x2="${cx - 4}" y2="${y + 16}" stroke="currentColor" stroke-width="2"/><line x1="${cx + 4}" y1="${y - 16}" x2="${cx + 4}" y2="${y + 16}" stroke="currentColor" stroke-width="2"/><text x="${cx}" y="${y - 22}" text-anchor="middle" font-size="12" fill="currentColor">${lab}</text>`;
  }
  if (t === 'inductor') {
    return `<path d="M${cx - 18} ${y} a6 6 0 0 1 12 0 a6 6 0 0 1 12 0 a6 6 0 0 1 12 0" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="${cx}" y="${y - 18}" text-anchor="middle" font-size="12" fill="currentColor">${lab}</text>`;
  }
  return '';
}

/** Point charges + field lines hint */
export function fieldConfig(data = {}) {
  const charges = data.charges || [
    { x: 80, y: 90, q: '+', r: 14 },
    { x: 200, y: 90, q: '−', r: 14 },
  ];
  let body = '';
  if (data.fieldLines !== false) {
    body += `<path d="M95 70 C130 40,150 40,185 70" fill="none" stroke="currentColor" stroke-dasharray="4 3" opacity="0.6"/>`;
    body += `<path d="M95 110 C130 140,150 140,185 110" fill="none" stroke="currentColor" stroke-dasharray="4 3" opacity="0.6"/>`;
    body += `<path d="M95 90 L185 90" fill="none" stroke="currentColor" stroke-dasharray="4 3" opacity="0.5"/>`;
  }
  for (const c of charges) {
    body += `<circle cx="${c.x}" cy="${c.y}" r="${c.r || 14}" fill="none" stroke="currentColor" stroke-width="1.5"/>`;
    body += `<text x="${c.x}" y="${c.y + 5}" text-anchor="middle" font-size="16" fill="currentColor">${escapeXml(c.q)}</text>`;
  }
  if (data.pointP) {
    const p = data.pointP;
    body += `<circle cx="${p.x}" cy="${p.y}" r="3" fill="currentColor"/><text x="${p.x + 8}" y="${p.y - 6}" font-size="12" fill="currentColor">P</text>`;
  }
  return svgRoot(280, 180, body, { label: '电荷与电场' });
}

/** Gaussian surface (sphere/cylinder) around charge */
export function gaussSurface(data = {}) {
  const kind = data.surface || data.gaussKind || data.kindSurface || 'sphere';
  let body = '';
  if (kind === 'sphere') {
    body += `<ellipse cx="140" cy="90" rx="70" ry="55" fill="none" stroke="currentColor" stroke-dasharray="6 4" stroke-width="1.5"/>`;
    body += `<circle cx="140" cy="90" r="10" fill="none" stroke="currentColor"/><text x="140" y="94" text-anchor="middle" font-size="12" fill="currentColor">+Q</text>`;
    body += `<text x="200" y="50" font-size="12" fill="currentColor">高斯面</text>`;
  } else {
    body += `<rect x="90" y="30" width="100" height="120" rx="40" fill="none" stroke="currentColor" stroke-dasharray="6 4"/>`;
    body += `<line x1="140" y1="40" x2="140" y2="140" stroke="currentColor" stroke-width="2"/><text x="150" y="90" font-size="12" fill="currentColor">λ</text>`;
  }
  return svgRoot(280, 180, body, { label: '高斯面' });
}

/** Pulley / Atwood / rotating disk */
export function pulley(data = {}) {
  const m1 = data.m1 || 'm₁', m2 = data.m2 || 'm₂';
  let body = arrowHead('pul');
  body += `<circle cx="140" cy="50" r="28" fill="none" stroke="currentColor" stroke-width="1.5"/>`;
  body += `<circle cx="140" cy="50" r="4" fill="currentColor"/>`;
  body += `<line x1="112" y1="50" x2="112" y2="130" stroke="currentColor"/><line x1="168" y1="50" x2="168" y2="110" stroke="currentColor"/>`;
  body += `<rect x="96" y="130" width="32" height="28" fill="none" stroke="currentColor"/><text x="112" y="148" text-anchor="middle" font-size="11" fill="currentColor">${escapeXml(m1)}</text>`;
  body += `<rect x="152" y="110" width="32" height="28" fill="none" stroke="currentColor"/><text x="168" y="128" text-anchor="middle" font-size="11" fill="currentColor">${escapeXml(m2)}</text>`;
  if (data.R) body += `<text x="175" y="45" font-size="11" fill="currentColor">R</text>`;
  return svgRoot(280, 180, body, { label: '滑轮系统' });
}

/** Motion / kinematics graph axes with piecewise polyline */
export function motionGraph(data = {}) {
  const pts = data.points || [[0, 0], [1, 2], [2, 2], [3, 0]];
  const xlab = data.xLabel || 't', ylab = data.yLabel || 'v';
  const w = 300, h = 180, pad = 36;
  const xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1]);
  const xmin = Math.min(...xs), xmax = Math.max(...xs);
  const ymin = Math.min(0, ...ys), ymax = Math.max(...ys, 1);
  const mx = (x) => pad + ((x - xmin) / (xmax - xmin || 1)) * (w - pad - 16);
  const my = (y) => h - pad - ((y - ymin) / (ymax - ymin || 1)) * (h - pad - 16);
  let body = `<line x1="${pad}" y1="${h - pad}" x2="${w - 8}" y2="${h - pad}" stroke="currentColor"/><line x1="${pad}" y1="${h - pad}" x2="${pad}" y2="12" stroke="currentColor"/>`;
  body += `<text x="${w - 14}" y="${h - pad + 16}" font-size="12" fill="currentColor">${escapeXml(xlab)}</text>`;
  body += `<text x="10" y="18" font-size="12" fill="currentColor">${escapeXml(ylab)}</text>`;
  body += `<polyline fill="none" stroke="currentColor" stroke-width="1.8" points="${pts.map((p) => `${mx(p[0])},${my(p[1])}`).join(' ')}"/>`;
  return svgRoot(w, h, body, { label: '运动图像' });
}

/** Pedigree chart */
export function pedigree(data = {}) {
  const gens = data.generations || [
    [{ id: 'I-1', sex: 'm', aff: false }, { id: 'I-2', sex: 'f', aff: true }],
    [{ id: 'II-1', sex: 'm', aff: false }, { id: 'II-2', sex: 'f', aff: false }, { id: 'II-3', sex: 'm', aff: true }],
  ];
  let body = '';
  const rowH = 70;
  gens.forEach((gen, gi) => {
    const y = 30 + gi * rowH;
    const gap = 260 / (gen.length + 1);
    gen.forEach((ind, ii) => {
      const x = gap * (ii + 1);
      ind._x = x;
      ind._y = y;
      if (ind.sex === 'f') {
        body += `<circle cx="${x}" cy="${y}" r="14" fill="${ind.aff ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.5"/>`;
      } else {
        body += `<rect x="${x - 14}" y="${y - 14}" width="28" height="28" fill="${ind.aff ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.5"/>`;
      }
      body += `<text x="${x}" y="${y + 28}" text-anchor="middle" font-size="10" fill="currentColor">${escapeXml(ind.id)}</text>`;
    });
    if (gi > 0) {
      // simple connector from mid parents
      const prev = gens[gi - 1];
      if (prev.length >= 2) {
        const px = (prev[0]._x + prev[1]._x) / 2;
        body += `<line x1="${prev[0]._x}" y1="${prev[0]._y}" x2="${prev[1]._x}" y2="${prev[1]._y}" stroke="currentColor"/>`;
        body += `<line x1="${px}" y1="${prev[0]._y}" x2="${px}" y2="${y - 20}" stroke="currentColor"/>`;
        const xs = gen.map((g) => g._x);
        body += `<line x1="${Math.min(...xs)}" y1="${y - 20}" x2="${Math.max(...xs)}" y2="${y - 20}" stroke="currentColor"/>`;
        gen.forEach((ind) => {
          body += `<line x1="${ind._x}" y1="${y - 20}" x2="${ind._x}" y2="${y - 14}" stroke="currentColor"/>`;
        });
      }
    }
  });
  return svgRoot(280, 30 + gens.length * 70, body, { label: '家系图' });
}

/** Punnett square */
export function punnett(data = {}) {
  const top = data.top || ['A', 'a'];
  const side = data.side || ['A', 'a'];
  const cells = data.cells || [
    ['AA', 'Aa'],
    ['Aa', 'aa'],
  ];
  const s = 44;
  let body = `<text x="70" y="18" font-size="12" fill="currentColor">${escapeXml(top[0])}</text><text x="114" y="18" font-size="12" fill="currentColor">${escapeXml(top[1])}</text>`;
  body += `<text x="18" y="58" font-size="12" fill="currentColor">${escapeXml(side[0])}</text><text x="18" y="102" font-size="12" fill="currentColor">${escapeXml(side[1])}</text>`;
  for (let r = 0; r < 2; r++) {
    for (let c = 0; c < 2; c++) {
      const x = 40 + c * s, y = 28 + r * s;
      body += `<rect x="${x}" y="${y}" width="${s}" height="${s}" fill="none" stroke="currentColor"/>`;
      body += `<text x="${x + s / 2}" y="${y + s / 2 + 4}" text-anchor="middle" font-size="13" fill="currentColor">${escapeXml(cells[r][c])}</text>`;
    }
  }
  return svgRoot(200, 140, body, { label: 'Punnett 方阵' });
}

/** Phylogenetic tree / cladogram */
export function phyloTree(data = {}) {
  const tips = data.tips || ['A', 'B', 'C', 'D'];
  const w = 300, h = 160;
  let body = '';
  const tipY = tips.map((_, i) => 30 + (i * (h - 40)) / Math.max(1, tips.length - 1));
  // simple balanced-ish cladogram
  body += `<polyline fill="none" stroke="currentColor" stroke-width="1.5" points="40,${h / 2} 80,${h / 2} 80,${tipY[0]} 180,${tipY[0]}"/>`;
  if (tips.length > 1) body += `<line x1="80" y1="${tipY[0]}" x2="80" y2="${tipY[tips.length - 1]}" stroke="currentColor" stroke-width="1.5"/>`;
  tips.forEach((t, i) => {
    const y = tipY[i];
    const branchX = i < 2 ? 120 : 140;
    body += `<line x1="80" y1="${y}" x2="200" y2="${y}" stroke="currentColor" stroke-width="1.5"/>`;
    body += `<text x="210" y="${y + 4}" font-size="13" fill="currentColor">${escapeXml(t)}</text>`;
  });
  if (data.outgroup) {
    body += `<text x="40" y="${h - 8}" font-size="11" fill="currentColor">外群: ${escapeXml(data.outgroup)}</text>`;
  }
  return svgRoot(w, h, body, { label: '系统发育树' });
}

/** Cell with labeled organelles */
export function cellDiagram(data = {}) {
  const orgs = data.organelles || [
    { id: 'nuc', label: '核', x: 140, y: 90, r: 28 },
    { id: 'mit', label: '线粒体', x: 200, y: 60, rx: 22, ry: 12 },
    { id: 'er', label: '内质网', x: 80, y: 70 },
  ];
  let body = `<ellipse cx="140" cy="90" rx="110" ry="70" fill="none" stroke="currentColor" stroke-width="1.5"/>`;
  for (const o of orgs) {
    if (o.r) {
      body += `<circle cx="${o.x}" cy="${o.y}" r="${o.r}" fill="none" stroke="currentColor"/>`;
    } else if (o.rx) {
      body += `<ellipse cx="${o.x}" cy="${o.y}" rx="${o.rx}" ry="${o.ry}" fill="none" stroke="currentColor"/>`;
    } else {
      body += `<path d="M${o.x - 20} ${o.y} q10 -15 20 0 q10 15 20 0" fill="none" stroke="currentColor"/>`;
    }
    body += `<text x="${o.x}" y="${o.y + (o.r || 8) + 14}" text-anchor="middle" font-size="11" fill="currentColor">${escapeXml(o.label)}</text>`;
  }
  return svgRoot(280, 180, body, { label: '细胞结构' });
}

/** Metabolic / signal pathway as boxes + arrows */
export function pathway(data = {}) {
  const steps = data.steps || ['底物', '中间体', '产物'];
  let body = arrowHead('pw');
  const gap = 220 / Math.max(1, steps.length - 1);
  steps.forEach((s, i) => {
    const x = 40 + i * gap;
    body += `<rect x="${x - 28}" y="70" width="56" height="32" fill="none" stroke="currentColor"/><text x="${x}" y="90" text-anchor="middle" font-size="11" fill="currentColor">${escapeXml(s)}</text>`;
    if (i < steps.length - 1) {
      body += `<line x1="${x + 28}" y1="86" x2="${x + gap - 28}" y2="86" stroke="currentColor" marker-end="url(#pw)"/>`;
    }
  });
  if (data.enzyme) {
    body += `<text x="140" y="50" text-anchor="middle" font-size="12" fill="currentColor">${escapeXml(data.enzyme)}</text>`;
  }
  return svgRoot(280, 140, body, { label: '代谢/信号通路' });
}

/** Food web */
export function foodWeb(data = {}) {
  const nodes = data.nodes || [
    { id: 'prod', label: '生产者', x: 140, y: 140 },
    { id: 'herb', label: '初级消费者', x: 70, y: 80 },
    { id: 'carn', label: '次级消费者', x: 210, y: 80 },
    { id: 'top', label: '顶级', x: 140, y: 30 },
  ];
  const links = data.links || [
    ['prod', 'herb'],
    ['prod', 'carn'],
    ['herb', 'top'],
    ['carn', 'top'],
  ];
  const by = Object.fromEntries(nodes.map((n) => [n.id, n]));
  let body = arrowHead('fw');
  for (const [a, b] of links) {
    const A = by[a], B = by[b];
    if (!A || !B) continue;
    body += `<line x1="${A.x}" y1="${A.y}" x2="${B.x}" y2="${B.y}" stroke="currentColor" marker-end="url(#fw)"/>`;
  }
  for (const n of nodes) {
    body += `<rect x="${n.x - 36}" y="${n.y - 12}" width="72" height="24" fill="none" stroke="currentColor"/><text x="${n.x}" y="${n.y + 4}" text-anchor="middle" font-size="10" fill="currentColor">${escapeXml(n.label)}</text>`;
  }
  return svgRoot(280, 170, body, { label: '食物网' });
}

/** Gel electrophoresis lanes */
export function gelElectro(data = {}) {
  const lanes = data.lanes || [
    { label: 'M', bands: [20, 45, 70, 100, 130] },
    { label: '1', bands: [45, 100] },
    { label: '2', bands: [45, 70, 100] },
    { label: '3', bands: [20, 130] },
  ];
  let body = `<rect x="40" y="20" width="${lanes.length * 44 + 20}" height="150" fill="none" stroke="currentColor"/>`;
  lanes.forEach((lane, i) => {
    const x = 60 + i * 44;
    body += `<text x="${x}" y="16" text-anchor="middle" font-size="11" fill="currentColor">${escapeXml(lane.label)}</text>`;
    for (const b of lane.bands) {
      body += `<line x1="${x - 12}" y1="${20 + b}" x2="${x + 12}" y2="${20 + b}" stroke="currentColor" stroke-width="3"/>`;
    }
  });
  body += `<text x="24" y="30" font-size="10" fill="currentColor">−</text><text x="24" y="165" font-size="10" fill="currentColor">+</text>`;
  return svgRoot(40 + lanes.length * 44 + 40, 190, body, { label: '电泳凝胶' });
}

/** Enzyme kinetics v vs [S] curve */
export function enzymeKinetics(data = {}) {
  const vmax = data.vmax || 1;
  const km = data.km || 2;
  const pts = [];
  for (let s = 0; s <= 12; s += 0.5) {
    pts.push([s, (vmax * s) / (km + s)]);
  }
  return motionGraph({ points: pts, xLabel: '[S]', yLabel: 'v' });
}

const RENDERERS = {
  fbd: freeBody,
  freeBody,
  circuit,
  field: fieldConfig,
  fieldConfig,
  gauss: gaussSurface,
  gaussSurface,
  pulley,
  motionGraph,
  pedigree,
  punnett,
  phylo: phyloTree,
  phyloTree,
  cell: cellDiagram,
  cellDiagram,
  pathway,
  foodWeb,
  gel: gelElectro,
  gelElectro,
  enzyme: enzymeKinetics,
  enzymeKinetics,
};

export function renderDiagram(spec) {
  if (!spec) return null;
  if (typeof spec === 'string') return spec; // raw svg
  const kind = spec.kind || spec.type;
  const fn = RENDERERS[kind];
  if (!fn) return spec.svg || null;
  return fn(spec);
}

function escapeXml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export const DIAGRAM_KINDS = Object.keys(RENDERERS);
