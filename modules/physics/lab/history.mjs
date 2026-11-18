/**
 * Scene history for 物理实验室 · Physics Lab.
 *
 * Pure, DOM-free stack used by the lab UI and by the headless regression
 * suite. Each entry stores a serialized scene plus the selected entity so
 * undo/redo restores both the apparatus and the selection, and the sensor
 * sample records (runtime observations, not scene configuration) so
 * undoing a target change keeps the other targets' recorded rows.
 */

export const DEFAULT_HISTORY_LIMIT = 80;
export const DEFAULT_COALESCE_MS = 550;

export function createSceneHistory({ limit = DEFAULT_HISTORY_LIMIT } = {}) {
  return {
    undo: [],
    redo: [],
    limit: Math.max(1, limit),
    coalesceKey: '',
    coalesceAt: -Infinity,
  };
}

export function historyDepth(history) {
  return history.undo.length;
}

export function canUndo(history) {
  return history.undo.length > 0;
}

export function canRedo(history) {
  return history.redo.length > 0;
}

/**
 * Push the state *before* a mutation. Repeated edits with the same key inside
 * the coalesce window collapse into one entry so dragging a slider does not
 * create hundreds of steps. `records` carries the motion/force sensor sample
 * histories (runtime observations that are not part of serializeScene) so
 * undoing a target add/remove keeps every OTHER target's recorded rows.
 */
export function pushSceneHistory(history, scene, selected = null, {
  key = '',
  now = 0,
  coalesceMs = DEFAULT_COALESCE_MS,
  records = null,
} = {}) {
  if (key && key === history.coalesceKey && now - history.coalesceAt < coalesceMs) {
    history.coalesceAt = now;
    return false;
  }
  history.coalesceKey = key;
  history.coalesceAt = now;
  history.undo.push({ scene, selected, records: records || null });
  if (history.undo.length > history.limit) history.undo.shift();
  history.redo.length = 0;
  return true;
}

export function takeUndo(history, currentScene, currentSelected = null, currentRecords = null) {
  if (!history.undo.length) return null;
  const entry = history.undo.pop();
  history.redo.push({ scene: currentScene, selected: currentSelected, records: currentRecords || null });
  history.coalesceKey = '';
  history.coalesceAt = -Infinity;
  return entry;
}

export function takeRedo(history, currentScene, currentSelected = null, currentRecords = null) {
  if (!history.redo.length) return null;
  const entry = history.redo.pop();
  history.undo.push({ scene: currentScene, selected: currentSelected, records: currentRecords || null });
  history.coalesceKey = '';
  history.coalesceAt = -Infinity;
  return entry;
}

/**
 * Snapshot the sample histories of every motion/force sensor. Rows are
 * immutable once recorded, so the snapshot only copies the row references.
 */
export function captureSensorRecords(world) {
  if (!world || !Array.isArray(world.sensors)) return [];
  const out = [];
  for (const sensor of world.sensors) {
    if (sensor.kind !== 'motion' && sensor.kind !== 'force') continue;
    if (!Array.isArray(sensor.samples) || !sensor.samples.length) continue;
    out.push({
      id: sensor.id,
      samples: sensor.samples.slice(),
      sampleAt: Number.isFinite(sensor.sampleAt) ? sensor.sampleAt : -1,
    });
  }
  return out;
}

/** Restore captured records onto sensors that survived the scene round trip. */
export function restoreSensorRecords(world, records) {
  if (!world || !Array.isArray(records) || !records.length) return 0;
  let restored = 0;
  for (const record of records) {
    const sensor = world.sensors.find((s) => s.id === record.id);
    if (!sensor || !Array.isArray(record.samples)) continue;
    sensor.samples = record.samples.slice();
    if (Number.isFinite(record.sampleAt)) sensor.sampleAt = record.sampleAt;
    restored += 1;
  }
  return restored;
}

/** Drop history back to a known depth (used when a modal is cancelled). */
export function truncateSceneHistory(history, depth) {
  history.undo.length = Math.max(0, Math.min(depth, history.undo.length));
  history.redo.length = 0;
  history.coalesceKey = '';
  history.coalesceAt = -Infinity;
}
