/**
 * Scene history for 物理实验室 · Physics Lab.
 *
 * Pure, DOM-free stack used by the lab UI and by the headless regression
 * suite. Each entry stores a serialized scene plus the selected entity so
 * undo/redo restores both the apparatus and the selection.
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
 * create hundreds of steps.
 */
export function pushSceneHistory(history, scene, selected = null, {
  key = '',
  now = 0,
  coalesceMs = DEFAULT_COALESCE_MS,
} = {}) {
  if (key && key === history.coalesceKey && now - history.coalesceAt < coalesceMs) {
    history.coalesceAt = now;
    return false;
  }
  history.coalesceKey = key;
  history.coalesceAt = now;
  history.undo.push({ scene, selected });
  if (history.undo.length > history.limit) history.undo.shift();
  history.redo.length = 0;
  return true;
}

export function takeUndo(history, currentScene, currentSelected = null) {
  if (!history.undo.length) return null;
  const entry = history.undo.pop();
  history.redo.push({ scene: currentScene, selected: currentSelected });
  history.coalesceKey = '';
  history.coalesceAt = -Infinity;
  return entry;
}

export function takeRedo(history, currentScene, currentSelected = null) {
  if (!history.redo.length) return null;
  const entry = history.redo.pop();
  history.undo.push({ scene: currentScene, selected: currentSelected });
  history.coalesceKey = '';
  history.coalesceAt = -Infinity;
  return entry;
}

/** Drop history back to a known depth (used when a modal is cancelled). */
export function truncateSceneHistory(history, depth) {
  history.undo.length = Math.max(0, Math.min(depth, history.undo.length));
  history.redo.length = 0;
  history.coalesceKey = '';
  history.coalesceAt = -Infinity;
}
