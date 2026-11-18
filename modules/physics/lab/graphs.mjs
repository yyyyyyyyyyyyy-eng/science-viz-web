/**
 * DOM-free chart models for the sensor graphs of 物理实验室 · Physics Lab.
 *
 * The live canvas and the exported PNG are drawn from one model per redraw,
 * so an exported image always identifies its target — the user-visible name
 * plus a stable id (body:<id> / launcher:<id>) — and carries numeric axes:
 * time ticks in seconds and per-channel y ticks with units. Everything here
 * is a pure function of the sensor sample data, so Node can regression-test
 * labels, per-target series and tick generation without a canvas.
 */
import { sensorTargetKey } from './physics.mjs';

/** Kinematic strips of the motion chart, in draw order. */
export const MOTION_METRICS = [
  { key: 'x', label: 'x', unit: 'm' },
  { key: 'v', label: 'v', unit: 'm/s' },
  { key: 'a', label: 'a', unit: 'm/s²' },
  { key: 'e', label: 'E', unit: 'J', value: (row) => row.e ?? row.ke },
];

/** Force component line styles: solid Fx, dashed Fy, dotted Fz. */
export const FORCE_LINES = [
  { key: 'fx', label: 'Fx', dash: [] },
  { key: 'fy', label: 'Fy', dash: [4, 3] },
  { key: 'fz', label: 'Fz', dash: [1, 3] },
];

export const FORCE_AXIS_NOTE = '实验室系分量：x 右、y 上、z 出屏 · Lab-frame components: x right, y up, z out of screen';

/**
 * Stable, human-readable identity for one chart series: the visible name
 * when the entity has one, always joined with the stable key so two rest
 * targets can never render the same in-chart label.
 */
export function sensorTargetLabel(target, name = '') {
  if (!target || !target.id) return '';
  const key = sensorTargetKey(target);
  const clean = String(name ?? '').trim();
  return clean ? `${clean} · ${key}` : key;
}

/** How many grid positions a step yields over [lo, hi]. */
function tickIndexCount(lo, hi, step) {
  return Math.floor(hi / step + 1e-9) - Math.ceil(lo / step - 1e-9) + 1;
}

/** Next rung of the 1/2/5 step ladder (1 → 2 → 5 → 10 · 10^k). */
function bumpStep(step) {
  const magnitude = 10 ** Math.floor(Math.log10(step));
  const norm = step / magnitude;
  return (norm < 1.5 ? 2 : norm < 3.5 ? 5 : 10) * magnitude;
}

/** Fixed-point tick text, or null once it grows too long to stay readable. */
function fixedTickText(value, decimals) {
  const text = String(Number(value.toFixed(decimals)));
  return text.length <= TICK_MAX_FIXED_CHARS ? text : null;
}

/** Compact exponential text ("1.25e+7" → "1.25e7"). */
function compactExponential(value, digits) {
  return value.toExponential(digits).replace('e+', 'e');
}

/**
 * Short, mutually distinct labels for one tick set (all multiples of one
 * step): fixed point while it fits the length budget, exponential otherwise.
 * This is what keeps tiny (1e-4 / 0.0003) and huge (±1e6) scales from
 * producing the long "0.000000" strings that used to smear the y gutter, and
 * the exponential fallbacks never let two ticks collapse onto one text.
 */
export function compactTickTexts(values) {
  const clean = values.filter((v) => Number.isFinite(v));
  if (!clean.length) return [];
  let step = Infinity;
  for (let i = 1; i < clean.length; i += 1) step = Math.min(step, Math.abs(clean[i] - clean[i - 1]));
  if (!Number.isFinite(step) || step <= 0) {
    step = Math.min(...clean.map((v) => Math.abs(v)).filter((a) => a > 0)) || 1;
  }
  const decimals = Math.max(0, -Math.floor(Math.log10(step) + 1e-12));
  const fixed = clean.map((v) => (v === 0 ? '0' : fixedTickText(v, decimals)));
  if (fixed.every((t) => t !== null)) return fixed;
  for (let digits = 0; digits <= 3; digits += 1) {
    const texts = clean.map((v) => (v === 0 ? '0' : compactExponential(v, digits)));
    if (new Set(texts).size === clean.length) return texts;
  }
  return clean.map((v) => (v === 0 ? '0' : compactExponential(v, 4)));
}

/**
 * Round-number ticks covering [min, max] (1/2/5 · 10^k steps). Degenerate
 * ranges are padded so a flat trace still gets a readable scale, and the
 * step is bumped up the ladder until at most count + 1 ticks result — a
 * caller that sized its strip for `count` labels never gets a smudge of
 * five ticks in a forty-pixel band again.
 */
export function niceTicks(min, max, count = 5) {
  if (!Number.isFinite(min) || !Number.isFinite(max)) return [];
  const wanted = Math.max(1, Math.floor(count) || 1);
  let lo = Math.min(min, max);
  let hi = Math.max(min, max);
  if (hi - lo < 1e-9) {
    lo -= 0.5;
    hi += 0.5;
  }
  const raw = (hi - lo) / wanted;
  const magnitude = 10 ** Math.floor(Math.log10(raw));
  const norm = raw / magnitude;
  let step = (norm >= 7.5 ? 10 : norm >= 3.5 ? 5 : norm >= 1.5 ? 2 : 1) * magnitude;
  for (let bumps = 0; bumps < 4 && tickIndexCount(lo, hi, step) > wanted + 1; bumps += 1) {
    step = bumpStep(step);
  }
  const first = Math.ceil(lo / step - 1e-9);
  const last = Math.floor(hi / step + 1e-9);
  const values = [];
  for (let i = first; i <= last; i += 1) values.push(i * step);
  const texts = compactTickTexts(values);
  return values.map((value, i) => ({ value, text: texts[i] }));
}

function finiteRange(values) {
  let min = Infinity;
  let max = -Infinity;
  for (const value of values) {
    if (!Number.isFinite(value)) continue;
    min = Math.min(min, value);
    max = Math.max(max, value);
  }
  return Number.isFinite(min) && Number.isFinite(max) ? { min, max } : null;
}

function timeAxisFromRows(rows, unit, tickCount) {
  const range = finiteRange(rows.map((row) => row.t));
  if (!range) return null;
  return {
    unit,
    min: range.min,
    max: range.max,
    ticks: niceTicks(range.min, range.max, tickCount),
  };
}

/** Shared per-strip y scale: pad flat ranges, then round-number ticks. */
function channelFromValues(values, metric, tickCount) {
  const base = { key: metric.key, label: metric.label, unit: metric.unit };
  const range = finiteRange(values);
  if (!range) return { ...base, min: null, max: null, ticks: [] };
  let { min, max } = range;
  if (max - min < 1e-9) {
    max += 0.5;
    min -= 0.5;
  }
  return { ...base, min, max, ticks: niceTicks(min, max, tickCount) };
}

/**
 * Motion chart model for a sensor. `viewKey` selects one tracked target
 * ('' / null views every tracked target); `nameOf(target)` resolves the
 * user-visible name (world bodies/launchers in the UI, a map in tests).
 */
export function motionGraphModel(sensor, opts = {}) {
  const {
    viewKey = null,
    nameOf = () => '',
    sampleCap = 800,
    tickCount = 5,
    yTickCount = 3,
  } = opts;
  const samples = Array.isArray(sensor?.samples) ? sensor.samples : [];
  const targets = Array.isArray(sensor?.targets) ? sensor.targets : [];
  const trimmed = (rows) => rows.slice(-sampleCap);
  const byKey = (key) => trimmed(samples.filter((r) => r.key === key));
  const series = [];
  if (!targets.length) {
    // Auto mode: one rolling series; the rows carry the body's name and key.
    const rows = trimmed(samples);
    const last = rows.length ? rows[rows.length - 1] : null;
    if (last) {
      const id = String(last.bodyId || String(last.key || '').replace(/^body:/, ''));
      series.push({
        key: last.key || `body:${id}`,
        label: sensorTargetLabel({ id, type: 'body' }, last.bodyName || nameOf({ id, type: 'body' }) || ''),
        rows,
      });
    }
  } else if (viewKey) {
    const at = viewKey.indexOf(':');
    const target = targets.find((t) => sensorTargetKey(t) === viewKey)
      || { id: viewKey.slice(at + 1), type: viewKey.slice(0, at) };
    const rows = byKey(viewKey);
    if (rows.length) {
      series.push({ key: viewKey, label: sensorTargetLabel(target, nameOf(target)), rows });
    }
  } else {
    for (const target of targets) {
      const key = sensorTargetKey(target);
      const rows = byKey(key);
      if (rows.length) {
        series.push({ key, label: sensorTargetLabel(target, nameOf(target)), rows });
      }
    }
  }
  const axes = graphAxesFromRows(series.flatMap((s) => s.rows), { tickCount, yTickCount });
  return {
    kind: 'motion',
    series,
    viewKey: viewKey || null,
    timeAxis: axes.timeAxis,
    metrics: axes.metrics,
  };
}

/** Axes shared by the sensor charts and the selected-body chart. */
export function graphAxesFromRows(rows, { tickCount = 5, yTickCount = 3 } = {}) {
  if (!rows.length) return { timeAxis: null, metrics: MOTION_METRICS.map((m) => channelFromValues([], m, yTickCount)) };
  const timeAxis = timeAxisFromRows(rows, 's', tickCount);
  const metrics = MOTION_METRICS.map((metric) => {
    const values = rows.map((row) => (metric.value ? metric.value(row) : row[metric.key]));
    return channelFromValues(values, metric, yTickCount);
  });
  return { timeAxis, metrics };
}

/**
 * Force chart model: one strip per (target, force). Every strip keeps the
 * target label (visible name + stable id), the force name, its provenance
 * mark ([est] solver-estimated / [measured] net), its own N scale and only
 * that target's rows — never another target's data.
 */
export function forceGraphModel(sensor, opts = {}) {
  const {
    viewKey = null,
    nameOf = () => '',
    sampleCap = 400,
    stripCap = 12,
    tickCount = 5,
    yTickCount = 2,
  } = opts;
  const samples = Array.isArray(sensor?.samples) ? sensor.samples : [];
  const targets = Array.isArray(sensor?.targets) ? sensor.targets : [];
  const trimmed = (rows) => rows.slice(-sampleCap);
  const strips = [];
  const pushTarget = (target) => {
    const key = sensorTargetKey(target);
    const rows = trimmed(samples.filter((r) => r.key === key));
    if (!rows.length) return;
    const label = sensorTargetLabel(target, nameOf(target));
    const channels = [];
    const seen = new Set();
    for (const sample of rows) {
      for (const force of sample.forces || []) {
        if (seen.has(force.id)) continue;
        seen.add(force.id);
        channels.push(force);
      }
    }
    for (const channel of channels) {
      const channelRows = [];
      for (const sample of rows) {
        const force = (sample.forces || []).find((f) => f.id === channel.id);
        if (force) channelRows.push({ t: sample.t, fx: force.fx, fy: force.fy, fz: force.fz });
      }
      const range = finiteRange(channelRows.flatMap((r) => [r.fx, r.fy, r.fz]));
      if (!range) continue;
      let { min, max } = range;
      if (max - min < 1e-9) {
        max += 0.5;
        min -= 0.5;
      }
      const mark = channel.estimated ? '[est]'
        : channel.measured ? '[measured]' : '';
      strips.push({
        key,
        targetLabel: label,
        forceId: channel.id,
        forceName: `${channel.zh}${mark ? ` ${mark}` : ''}`,
        label: `${label} · ${channel.zh}${mark ? ` ${mark}` : ''}`,
        unit: 'N',
        min,
        max,
        ticks: niceTicks(min, max, yTickCount),
        hasZ: channelRows.some((r) => Math.abs(r.fz) > 1e-6),
        rows: channelRows,
      });
    }
  };
  if (viewKey) {
    const at = viewKey.indexOf(':');
    const target = targets.find((t) => sensorTargetKey(t) === viewKey)
      || { id: viewKey.slice(at + 1), type: viewKey.slice(0, at) };
    pushTarget(target);
  } else {
    for (const target of targets) pushTarget(target);
  }
  const capped = strips.slice(0, stripCap);
  return {
    kind: 'force',
    strips: capped,
    timeAxis: timeAxisFromRows(capped.flatMap((s) => s.rows), 's', tickCount),
    lines: FORCE_LINES,
    axisNote: FORCE_AXIS_NOTE,
    hasZ: capped.some((s) => s.hasZ),
  };
}

/* ------------- chart layout: gutter, strips, tick text boxes ------------- */

/**
 * Shared text metrics for the live chart canvas and the exported PNG, in
 * CSS pixels. Every consumer multiplies by its device pixel ratio, so the
 * live widget and the dedicated export canvas follow one set of rules.
 */
export const CHART_TEXT = {
  titlePx: 12,
  tickPx: 9.5,
  titleLineH: 15,
  tickGapX: 5,
  tickGapY: 1.5,
  gutterOuter: 4,
  axisStub: 2,
  stripGap: 5,
  yTickMax: 5,
  timeTickGap: 8,
};

/** Longest fixed-point tick label we accept before switching to "1.2e7". */
const TICK_MAX_FIXED_CHARS = 7;

/** Native pixel size of the exported motion PNG — never the live widget size. */
export const EXPORT_MOTION_SIZE = { width: 900, height: 460 };

/** Per-strip height reserved by the exported force PNG (title + spaced ticks). */
export const EXPORT_FORCE_STRIP_H = 80;

/** Native pixel size of the exported force PNG for a strip count. */
export function exportForceSize(stripCount) {
  const n = Math.max(1, Math.floor(stripCount) || 1);
  // 6 top + n strips + 14 time-axis band + 31 notes rows + 6 bottom.
  return { width: EXPORT_MOTION_SIZE.width, height: Math.round(n * EXPORT_FORCE_STRIP_H + 57) };
}

/** CSS font strings for a device pixel ratio; the painters set them verbatim. */
export function chartFontSpec(dpr) {
  return {
    title: `${CHART_TEXT.titlePx * dpr}px monospace`,
    tick: `${CHART_TEXT.tickPx * dpr}px monospace`,
  };
}

function scaledText(dpr) {
  const t = {};
  for (const [key, value] of Object.entries(CHART_TEXT)) t[key] = value * dpr;
  return t;
}

/**
 * Greedy word wrap that never loses characters: break after spaces and
 * middots, hard-split any single token wider than a whole line. The measure
 * callback keeps this pure and testable without a canvas.
 */
export function wrapTextSegments(text, measure, maxW) {
  const source = String(text ?? '');
  if (!source) return [''];
  const out = [];
  let line = '';
  let lineW = 0;
  const flush = () => {
    out.push(line);
    line = '';
    lineW = 0;
  };
  for (const token of source.split(/(?<=\s|·)/)) {
    const w = measure(token);
    if (lineW + w > maxW && line) flush();
    if (w > maxW) {
      for (const ch of token) {
        const cw = measure(ch);
        if (lineW + cw > maxW && line) flush();
        line += ch;
        lineW += cw;
      }
      continue;
    }
    line += token;
    lineW += w;
  }
  flush();
  return out;
}

/**
 * Legend rows for several chart targets: a "目标 · Targets:" prefix, then
 * swatch + wrapped label per target. A label longer than a line wraps
 * instead of running off the canvas. Rows carry pieces
 * { text, index, swatch, pad, w }.
 */
export function wrapLegendLines(labels, measure, maxW) {
  const pieces = [];
  labels.forEach((entry, i) => {
    const text = String(entry.label ?? `#${i + 1}`);
    wrapTextSegments(text, (s) => measure(s, 'title'), Math.max(1, maxW - 18)).forEach((seg, j) => {
      pieces.push({ text: seg, index: entry.index ?? i, swatch: j === 0 && entry.swatch !== false });
    });
  });
  const rows = [];
  let row = [];
  let width = 0;
  for (const piece of pieces) {
    const candidate = piece.swatch ? 18 : 4;
    piece.w = measure(piece.text, 'title');
    if (row.length && width + candidate + piece.w > maxW) {
      rows.push(row);
      row = [];
      width = 0;
    }
    piece.pad = row.length === 0 ? (piece.swatch ? 18 : 0) : candidate;
    row.push(piece);
    width += piece.pad + piece.w;
  }
  if (row.length) rows.push(row);
  return rows;
}

/** y of a tick label's text-box top/baseline for a gridline at `y`. */
function tickLabelBox(y, t) {
  const baseline = y + 0.28 * t.tickPx;
  return { baseline, box: { y: baseline - 0.75 * t.tickPx, h: 0.9 * t.tickPx } };
}

/** Strips that fit `count` tick boxes with clearance — never a smudge. */
function fitTickCount(plotHeight, t) {
  const per = 0.9 * t.tickPx + t.tickGapY;
  return Math.min(t.yTickMax, Math.max(1, Math.floor(plotHeight / per)));
}

/** Neighbouring tick boxes keep their clearance at this plot height. */
function ticksSpaced(ticks, plotHeight, range, t) {
  if (ticks.length < 2) return true;
  let step = Infinity;
  for (let i = 1; i < ticks.length; i += 1) step = Math.min(step, Math.abs(ticks[i].value - ticks[i - 1].value));
  if (!Number.isFinite(step)) return true;
  return (plotHeight * step) / range >= 0.9 * t.tickPx + t.tickGapY - 1e-9;
}

/**
 * Fitted, compact y ticks for one strip scale (pure; no canvas). The 1/2/5
 * ladder can round a step *down* (raw 6.5 → step 5), which would pack more
 * labels than the band budgeted — so verify the real spacing and step the
 * count down until every tick box is genuinely separated.
 */
function fitStripTicks(min, max, plotHeight, t, measure) {
  if (min == null || max == null) return [];
  const range = Math.max(1e-9, max - min);
  let count = fitTickCount(Math.max(0, plotHeight), t);
  let ticks = [];
  while (count >= 1) {
    const set = niceTicks(min, max, count);
    if (ticksSpaced(set, plotHeight, range, t) || count === 1) {
      ticks = set;
      break;
    }
    count -= 1;
  }
  if (ticks.length > 1 && !ticksSpaced(ticks, plotHeight, range, t)) {
    // Degenerate short band: keep only the tick nearest the middle so the
    // one label that fits can never overlap its neighbours.
    const mid = (min + max) / 2;
    ticks = [ticks.reduce((best, k) => (Math.abs(k.value - mid) < Math.abs(best.value - mid) ? k : best))];
  }
  return ticks.map((tick) => ({ value: tick.value, text: tick.text, w: measure(tick.text, 'tick') }));
}

/** Strip band, wrapped title lines, plot band and fitted ticks (pure). */
function stripBand(bandTop, bandBottom, titleText, min, max, t, dpr, measure, maxW) {
  const segs = wrapTextSegments(titleText, (s) => measure(s, 'title'), maxW);
  const titles = segs.map((text, j) => {
    const w = measure(text, 'title');
    const baseline = bandTop + (j + 1) * t.titleLineH - 2 * dpr;
    return { text, baseline, box: { x: 0, y: baseline - 0.85 * t.titlePx, w, h: t.titlePx } };
  });
  const titleBottom = bandTop + segs.length * t.titleLineH;
  const plotTop = titleBottom + t.tickGapY + 0.47 * t.tickPx;
  const plotBottom = bandBottom - t.tickGapY - 0.43 * t.tickPx;
  const ticks = fitStripTicks(min, max, plotBottom - plotTop, t, measure);
  return {
    titles,
    titleBottom,
    plot: { left: 0, right: 0, top: plotTop, bottom: plotBottom },
    ticks,
  };
}

/** Shared time axis: fitted ticks, label boxes clear of the "t (s)" caption. */
function timeAxisBand(timeAxis, axisY, plotLeft, plotRight, t, dpr, outer, measure) {
  const span = Math.max(1e-9, timeAxis.max - timeAxis.min);
  const plotW = Math.max(1, plotRight - plotLeft);
  const xOf = (value) => plotLeft + ((value - timeAxis.min) / span) * plotW;
  const captionText = `t (${timeAxis.unit})`;
  const captionW = measure(captionText, 'tick');
  const caption = {
    text: captionText,
    box: { x: plotRight - captionW, y: axisY + t.axisStub, w: captionW, h: 0.9 * t.tickPx },
  };
  caption.box.baseline = axisY + t.axisStub + 0.75 * t.tickPx;
  const provisional = niceTicks(timeAxis.min, timeAxis.max, 5);
  const provW = provisional.reduce((m, k) => Math.max(m, measure(k.text, 'tick')), 0);
  const count = Math.min(5, Math.max(1, Math.floor(plotW / Math.max(1, provW + t.timeTickGap))));
  const set = count === 5 ? provisional : niceTicks(timeAxis.min, timeAxis.max, count);
  const rightLimit = caption.box.x - t.timeTickGap;
  const ticks = set.map((tick) => {
    const w = measure(tick.text, 'tick');
    const x = xOf(tick.value);
    const label = tickLabelBox(axisY + t.axisStub, t);
    const box = {
      x: Math.max(outer.left, Math.min(x - w / 2, rightLimit - w)),
      y: label.box.y,
      w,
      h: label.box.h,
    };
    return { value: tick.value, text: tick.text, x, w, box: { ...box, baseline: label.baseline } };
  });
  return { unit: timeAxis.unit, min: timeAxis.min, max: timeAxis.max, axisY, ticks, caption, xOf };
}

/** Measured left gutter: widest tick label plus its gaps on both sides. */
function measuredGutter(strips, t) {
  let widest = 0;
  for (const strip of strips) {
    for (const tick of strip.ticks) widest = Math.max(widest, tick.w);
  }
  return Math.max(1, widest + t.tickGapX + t.gutterOuter);
}

/** Place every tick label box inside the gutter and bind yOf to the plot. */
function bindStripGeometry(strip, gutter, plotRight, dpr, t) {
  strip.plot.left = gutter;
  strip.plot.right = plotRight;
  const span = Math.max(1e-9, (strip.max ?? 0) - (strip.min ?? 0));
  strip.yOf = (value) => strip.plot.bottom - ((value - (strip.min ?? 0)) / span)
    * (strip.plot.bottom - strip.plot.top);
  for (const title of strip.titles) title.box.x = strip.titleX;
  for (const tick of strip.ticks) {
    tick.y = strip.yOf(tick.value);
    const label = tickLabelBox(tick.y, t);
    tick.baseline = label.baseline;
    tick.box = { x: gutter - t.tickGapX - tick.w, y: label.box.y, w: tick.w, h: label.box.h };
  }
}

/**
 * Pure geometry for the motion chart: a measured label gutter, per-strip
 * bands with wrapped title boxes, per-tick label boxes, and a numeric time
 * axis with its unit. The live canvas and the exported PNG both draw from
 * this exact layout, so the export can be wider and taller than the widget
 * without changing a single rule. `measure(text, 'title' | 'tick')` supplies
 * real font metrics in the app and a reproducible stub in the regressions.
 */
export function motionChartLayout(model, opts = {}) {
  const {
    width = EXPORT_MOTION_SIZE.width,
    height = EXPORT_MOTION_SIZE.height,
    dpr = 1,
    measure = (text) => text.length * 6,
  } = opts;
  const t = scaledText(dpr);
  const fonts = chartFontSpec(dpr);
  const outer = { top: 6 * dpr, left: t.gutterOuter, right: 8 * dpr, bottom: 6 * dpr };
  const series = Array.isArray(model?.series) ? model.series : [];
  const metrics = Array.isArray(model?.metrics) ? model.metrics : [];
  const timeAxis = model?.timeAxis || null;

  // Header: the viewed target's identity, wrapped within the canvas width.
  const headerMaxW = width - outer.left - outer.right - 4 * dpr;
  const rows = series.length <= 1
    ? wrapTextSegments(`目标 · Target: ${series[0]?.label || '—'}`, (s) => measure(s, 'title'), headerMaxW)
      .map((text) => [{ text, index: -1, swatch: false, pad: 0, w: measure(text, 'title') }])
    : wrapLegendLines(
      [{ label: '目标 · Targets:', index: -1, swatch: false },
        ...series.map((s, i) => ({ label: s.label || `#${i + 1}`, index: i }))],
      measure,
      headerMaxW,
    );
  const header = { pieces: [], height: rows.length * t.titleLineH + 3 * dpr };
  rows.forEach((row, r) => {
    let x = outer.left + 4 * dpr;
    for (const piece of row) {
      x += piece.pad;
      const baseline = outer.top + (r + 1) * t.titleLineH - 2 * dpr;
      const entry = {
        text: piece.text,
        index: piece.index,
        x,
        baseline,
        box: { x, y: baseline - 0.85 * t.titlePx, w: piece.w, h: t.titlePx },
      };
      if (piece.swatch) {
        entry.swatchBox = { x: x - 18 * dpr, y: baseline - 4 * dpr, w: 14 * dpr, h: 2.5 * dpr };
      }
      header.pieces.push(entry);
      x += piece.w;
    }
  });

  // Strips fill the band between the header and the time axis.
  const axisY = height - outer.bottom - t.axisStub - 0.9 * t.tickPx;
  const stripsTop = outer.top + header.height;
  const stripsBottom = axisY - 2 * dpr;
  const stripH = metrics.length ? (stripsBottom - stripsTop) / metrics.length : 0;
  const strips = [];
  for (let i = 0; i < metrics.length; i += 1) {
    const metric = metrics[i];
    const bandTop = stripsTop + i * stripH;
    const bandBottom = bandTop + stripH - t.stripGap;
    const band = stripBand(bandTop, bandBottom, `${metric.label} (${metric.unit})`,
      metric.min ?? null, metric.max ?? null, t, dpr, measure, headerMaxW);
    strips.push({
      key: metric.key,
      label: metric.label,
      unit: metric.unit,
      min: metric.min ?? null,
      max: metric.max ?? null,
      rect: { x: outer.left, y: bandTop, w: width - outer.left - outer.right, h: Math.max(0, bandBottom - bandTop) },
      titleX: outer.left + 4 * dpr,
      ...band,
    });
  }

  const gutter = measuredGutter(strips, t);
  const plotRight = width - outer.right;
  for (const strip of strips) bindStripGeometry(strip, gutter, plotRight, dpr, t);
  const plotLeft = gutter;
  const plotW = Math.max(1, plotRight - plotLeft);
  const xOf = timeAxis
    ? (value) => plotLeft + ((value - timeAxis.min) / Math.max(1e-9, timeAxis.max - timeAxis.min)) * plotW
    : () => plotLeft;

  return {
    kind: 'motion',
    width,
    height,
    dpr,
    fonts,
    text: t,
    outer,
    gutter,
    plotLeft,
    plotRight,
    plotW,
    header,
    strips,
    timeAxis: timeAxis ? timeAxisBand(timeAxis, axisY, plotLeft, plotRight, t, dpr, outer, measure) : null,
    xOf,
    series,
  };
}

/**
 * Pure geometry for the force chart: one band per (target, force) strip with
 * its wrapped bilingual title, fitted N ticks, the shared time axis and the
 * component/axis-convention notes wrapped inside the canvas.
 */
export function forceChartLayout(model, opts = {}) {
  const {
    width = EXPORT_MOTION_SIZE.width,
    height,
    dpr = 1,
    measure = (text) => text.length * 6,
  } = opts;
  const t = scaledText(dpr);
  const fonts = chartFontSpec(dpr);
  const outer = { top: 6 * dpr, left: t.gutterOuter, right: 8 * dpr, bottom: 6 * dpr };
  const stripsIn = Array.isArray(model?.strips) ? model.strips : [];
  const timeAxis = model?.timeAxis || null;
  const size = height != null ? { width, height } : exportForceSize(stripsIn.length);

  // Notes band: the component line-style legend, then the lab-frame note.
  const notesMaxW = size.width - outer.left - outer.right - 4 * dpr;
  const noteText = String(model?.axisNote || '');
  const noteSegs = wrapTextSegments(noteText, (s) => measure(s, 'tick'), notesMaxW);
  const legendText = `Fx —— · Fy ----${model?.hasZ ? ' · Fz ····' : ''}`;
  const noteRows = [legendText, ...noteSegs];
  const rowH = t.tickPx + 4 * dpr;
  const notesH = noteRows.length * rowH + 2 * dpr;

  const axisY = size.height - outer.bottom - notesH - t.axisStub - 0.9 * t.tickPx;
  const stripsTop = outer.top;
  const stripsBottom = axisY - 2 * dpr;
  const stripH = stripsIn.length ? (stripsBottom - stripsTop) / stripsIn.length : 0;
  const strips = [];
  for (let i = 0; i < stripsIn.length; i += 1) {
    const strip = stripsIn[i];
    const bandTop = stripsTop + i * stripH;
    const bandBottom = bandTop + stripH - t.stripGap;
    const band = stripBand(bandTop, bandBottom, `${strip.label} (N)`,
      strip.min, strip.max, t, dpr, measure, notesMaxW);
    strips.push({
      key: strip.key,
      targetLabel: strip.targetLabel,
      forceName: strip.forceName,
      label: strip.label,
      unit: strip.unit,
      min: strip.min,
      max: strip.max,
      hasZ: !!strip.hasZ,
      rows: strip.rows,
      rect: { x: outer.left, y: bandTop, w: size.width - outer.left - outer.right, h: Math.max(0, bandBottom - bandTop) },
      titleX: outer.left + 4 * dpr,
      ...band,
    });
  }

  const gutter = measuredGutter(strips, t);
  const plotRight = size.width - outer.right;
  for (const strip of strips) bindStripGeometry(strip, gutter, plotRight, dpr, t);
  const plotLeft = gutter;
  const plotW = Math.max(1, plotRight - plotLeft);
  const xOf = timeAxis
    ? (value) => plotLeft + ((value - timeAxis.min) / Math.max(1e-9, timeAxis.max - timeAxis.min)) * plotW
    : () => plotLeft;

  const notesTop = axisY + t.axisStub + 0.9 * t.tickPx;
  const notes = noteRows.map((text, j) => {
    const baseline = notesTop + j * rowH + 0.75 * t.tickPx + 1.5 * dpr;
    const w = measure(text, 'tick');
    return { text, baseline, box: { x: outer.left + 4 * dpr, y: baseline - 0.75 * t.tickPx, w, h: 0.9 * t.tickPx } };
  });

  return {
    kind: 'force',
    width: size.width,
    height: size.height,
    dpr,
    fonts,
    text: t,
    outer,
    gutter,
    plotLeft,
    plotRight,
    plotW,
    strips,
    timeAxis: timeAxis ? timeAxisBand(timeAxis, axisY, plotLeft, plotRight, t, dpr, outer, measure) : null,
    xOf,
    notes,
  };
}
