/**
 * Local scene slots for 物理实验室 · Physics Lab.
 *
 * Eight named slots live under one key; the old single-scene key is migrated
 * into slot 1 on first read. Storage failures (quota, disabled storage) are
 * reported to the caller so the UI can show a bilingual message.
 */
import { migrateScene } from './physics.mjs';

export const SLOT_COUNT = 8;
export const SLOT_STORE_VERSION = 1;
export const SLOT_KEY = 'plab-scenes-v1';
export const LEGACY_KEY = 'plab-scene-v1';

export function defaultSlotName(index) {
  return `场景 ${index + 1} · Scene ${index + 1}`;
}

export function emptySlot(index) {
  return {
    id: `slot-${index + 1}`,
    name: defaultSlotName(index),
    savedAt: 0,
    mode: 'mechanics',
    scene: null,
  };
}

export function emptySlotStore() {
  return {
    version: SLOT_STORE_VERSION,
    slots: Array.from({ length: SLOT_COUNT }, (_, i) => emptySlot(i)),
  };
}

function normaliseSlot(raw, index) {
  const slot = emptySlot(index);
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return slot;
  if (typeof raw.name === 'string' && raw.name.trim()) slot.name = raw.name.trim().slice(0, 80);
  if (Number.isFinite(raw.savedAt) && raw.savedAt > 0) slot.savedAt = raw.savedAt;
  slot.mode = raw.mode === 'em' ? 'em' : 'mechanics';
  const scene = migrateScene(raw.scene);
  if (scene) {
    slot.scene = scene;
    slot.mode = scene.em?.mode === 'em' ? 'em' : slot.mode;
  }
  return slot;
}

export function parseSlotStore(raw) {
  if (!raw) return emptySlotStore();
  let data = raw;
  if (typeof raw === 'string') {
    try { data = JSON.parse(raw); } catch (_) { return emptySlotStore(); }
  }
  if (!data || typeof data !== 'object') return emptySlotStore();
  const list = Array.isArray(data) ? data : data.slots;
  if (!Array.isArray(list)) return emptySlotStore();
  const store = emptySlotStore();
  for (let i = 0; i < SLOT_COUNT; i += 1) store.slots[i] = normaliseSlot(list[i], i);
  return store;
}

export function saveSlot(store, index, {
  name = '',
  scene = null,
  mode = 'mechanics',
  now = Date.now(),
} = {}) {
  const base = store && Array.isArray(store.slots) ? store : emptySlotStore();
  const slots = base.slots.map((slot, i) => (i === index ? { ...slot } : slot));
  const migrated = migrateScene(scene);
  const slot = slots[index] || emptySlot(index);
  slot.scene = migrated;
  slot.name = String(name || '').trim().slice(0, 80) || defaultSlotName(index);
  slot.savedAt = migrated ? now : 0;
  slot.mode = migrated?.em?.mode === 'em' ? 'em' : (mode === 'em' ? 'em' : 'mechanics');
  slots[index] = slot;
  return { version: SLOT_STORE_VERSION, slots };
}

export function deleteSlot(store, index) {
  const base = store && Array.isArray(store.slots) ? store : emptySlotStore();
  const slots = base.slots.map((slot, i) => (i === index ? emptySlot(i) : slot));
  return { version: SLOT_STORE_VERSION, slots };
}

export function writeSlotStore(storage, store) {
  try {
    storage.setItem(SLOT_KEY, JSON.stringify({ version: SLOT_STORE_VERSION, slots: store.slots }));
    return { ok: true, error: '' };
  } catch (err) {
    const name = String(err?.name || '');
    const code = Number(err?.code);
    const quota = name === 'QuotaExceededError' || name === 'NS_ERROR_DOM_QUOTA_REACHED'
      || code === 22 || code === 1014;
    return { ok: false, error: quota ? 'quota' : 'unavailable' };
  }
}

export function readSlotStore(storage) {
  let raw = null;
  try { raw = storage.getItem(SLOT_KEY); } catch (_) { raw = null; }
  let store = parseSlotStore(raw);
  if (store.slots.some((slot) => slot.scene)) return store;
  let legacyRaw = null;
  try { legacyRaw = storage.getItem(LEGACY_KEY); } catch (_) { legacyRaw = null; }
  if (!legacyRaw) return store;
  let legacy = null;
  try { legacy = migrateScene(JSON.parse(legacyRaw)); } catch (_) { legacy = null; }
  if (!legacy) return store;
  store = saveSlot(store, 0, {
    name: '旧版场景 · Legacy scene',
    scene: legacy,
    mode: legacy.em?.mode === 'em' ? 'em' : 'mechanics',
    now: Date.now(),
  });
  writeSlotStore(storage, store);
  return store;
}
