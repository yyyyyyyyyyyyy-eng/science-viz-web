/**
 * Pure decision helpers for the lab's document-level keyboard shortcuts
 * and armed sensor-target picks. DOM-free and side-effect-free on
 * purpose: the regression suite imports this file and executes the exact
 * logic the live UI runs (scripts/test-physics-lab-force-sensor.mjs),
 * instead of only grepping index.js for message strings.
 */

/**
 * True while a native editor (input, textarea, select, contenteditable)
 * is the key target. Those widgets own their own undo/redo stack, so the
 * lab must neither run nor swallow their shortcuts. Everything else —
 * buttons, the canvas host, the lab root, document.body — is a plain
 * surface, and scene shortcuts may claim the key there.
 */
export function isNativeEditorTarget(target) {
  if (!target) return false;
  if (target.isContentEditable) return true;
  const tag = String(target.tagName || '').toUpperCase();
  return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT';
}

/**
 * The scene-level undo/redo decision for one keydown:
 *   'undo' — Ctrl/Cmd + Z, outside any native editor;
 *   'redo' — Ctrl/Cmd + Shift + Z or Ctrl/Cmd + Y, outside any native editor;
 *   null   — every other key, and every shortcut owned by a native editor.
 */
export function sceneUndoKey(event) {
  if (!event || isNativeEditorTarget(event.target)) return null;
  if (!(event.ctrlKey || event.metaKey)) return null;
  const key = String(event.key || '').toLowerCase();
  if (key === 'z') return event.shiftKey ? 'redo' : 'undo';
  if (key === 'y') return 'redo';
  return null;
}

/**
 * Classification of one armed-pick hit. The canvas pick passes its raycast
 * hit; the outliner wraps its row entity as { entity }. The decorative
 * ground plane and grid are noPick meshes that carry no entity, so a
 * floor or grid click is 'empty' — it must never masquerade as a surface
 * entity. A real but non-eligible entity (a Wall/barrier, a surface
 * apparatus, another sensor) is 'ineligible': a different branch with its
 * own object-naming warning.
 */
export function classifyArmedPick(hit, armedSensorId) {
  const entity = hit && hit.entity;
  if (!entity) return 'empty';
  if (entity.type === 'body' || entity.type === 'launcher') return 'eligible';
  if (entity.type === 'sensor' && entity.id === armedSensorId) return 'self';
  return 'ineligible';
}
