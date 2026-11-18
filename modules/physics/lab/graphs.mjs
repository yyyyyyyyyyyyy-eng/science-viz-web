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

/**
 * Round-number ticks covering [min, max] (1/2/5 · 10^k steps). Degenerate
 * ranges are padded so a flat trace still gets a readable scale.
 */
export function niceTicks(min, max, count = 5) {
  if (!Number.isFinite(min) || !Number.isFinite(max)) return [];
  let lo = Math.min(min, max);
  let hi = Math.max(min, max);
  if (hi - lo < 1e-9) {
    lo -= 0.5;
    hi += 0.5;
  }
  const raw = (hi - lo) / Math.max(1, count);
  const magnitude = 10 ** Math.floor(Math.log10(raw));
  const norm = raw / magnitude;
  const step = (norm >= 7.5 ? 10 : norm >= 3.5 ? 5 : norm >= 1.5 ? 2 : 1) * magnitude;
  const decimals = Math.max(0, -Math.floor(Math.log10(step) + 1e-12));
  const first = Math.ceil(lo / step - 1e-9);
  const last = Math.floor(hi / step + 1e-9);
  const ticks = [];
  for (let i = first; i <= last; i += 1) {
    const value = i * step;
    ticks.push({ value, text: String(Number(value.toFixed(decimals))) });
  }
  return ticks;
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
