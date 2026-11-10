/**
 * URL-hash scene sharing for 物理实验室 · Physics Lab.
 *
 * The payload is JSON -> raw deflate (when the browser supports
 * CompressionStream) -> base64url. The hash form is
 * `#/physics/lab/?scene=...`, whose path segments are `physics`, `lab` and
 * `?scene=...`, so the existing router still parses it as the lab route while
 * the trailing slash keeps the query out of the `lab` segment.
 */
import { migrateScene } from './physics.mjs';

export const SHARE_MAX_PAYLOAD = 3200;
export const SHARE_PREFIX = 'd1.';
export const SHARE_RAW_PREFIX = 'j1.';

const B64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
const B64_INDEX = (() => {
  const map = new Map();
  for (let i = 0; i < B64.length; i += 1) map.set(B64[i], i);
  return map;
})();

export function bytesToBase64url(bytes) {
  let out = '';
  for (let i = 0; i < bytes.length; i += 3) {
    const a = bytes[i];
    const b = i + 1 < bytes.length ? bytes[i + 1] : 0;
    const c = i + 2 < bytes.length ? bytes[i + 2] : 0;
    const n = (a << 16) | (b << 8) | c;
    out += B64[(n >> 18) & 63];
    out += B64[(n >> 12) & 63];
    if (i + 1 < bytes.length) out += B64[(n >> 6) & 63];
    if (i + 2 < bytes.length) out += B64[n & 63];
  }
  return out;
}

export function base64urlToBytes(text) {
  const clean = String(text || '').replace(/=+$/, '');
  const out = [];
  let buffer = 0;
  let bits = 0;
  for (const ch of clean) {
    const value = B64_INDEX.get(ch);
    if (value == null) throw new Error(`Invalid base64url character: ${ch}`);
    buffer = (buffer << 6) | value;
    bits += 6;
    if (bits >= 8) {
      bits -= 8;
      out.push((buffer >> bits) & 0xff);
    }
  }
  return new Uint8Array(out);
}

async function transformBytes(bytes, stream) {
  const writer = stream.writable.getWriter();
  // Start draining the readable side before closing the writer; otherwise a
  // full internal buffer can make close() wait for a reader that never runs.
  const readPromise = new Response(stream.readable).arrayBuffer();
  await writer.write(bytes);
  await writer.close();
  return new Uint8Array(await readPromise);
}

async function deflateRaw(bytes) {
  if (typeof CompressionStream !== 'function') return null;
  try {
    return await transformBytes(bytes, new CompressionStream('deflate-raw'));
  } catch (_) {
    return null;
  }
}

async function inflateRaw(bytes) {
  if (typeof DecompressionStream !== 'function') return null;
  try {
    return await transformBytes(bytes, new DecompressionStream('deflate-raw'));
  } catch (_) {
    return null;
  }
}

export async function encodeShareScene(data) {
  const json = JSON.stringify(data);
  const bytes = new TextEncoder().encode(json);
  const packed = await deflateRaw(bytes);
  if (packed) return SHARE_PREFIX + bytesToBase64url(packed);
  return SHARE_RAW_PREFIX + bytesToBase64url(bytes);
}

export async function decodeShareScene(payload) {
  const raw = String(payload || '').trim();
  if (!raw) return null;
  try {
    if (raw.startsWith(SHARE_PREFIX)) {
      const packed = base64urlToBytes(raw.slice(SHARE_PREFIX.length));
      const bytes = await inflateRaw(packed);
      if (!bytes) return null;
      return migrateScene(JSON.parse(new TextDecoder().decode(bytes)));
    }
    if (raw.startsWith(SHARE_RAW_PREFIX)) {
      const bytes = base64urlToBytes(raw.slice(SHARE_RAW_PREFIX.length));
      return migrateScene(JSON.parse(new TextDecoder().decode(bytes)));
    }
  } catch (_) {
    return null;
  }
  return null;
}

/** Read the payload from either accepted hash form. */
export function sharePayloadFromHash(hash = '') {
  const text = String(hash || '');
  const query = /[?&]scene=([^&#]+)/.exec(text);
  if (query) {
    try { return decodeURIComponent(query[1]); } catch (_) { return query[1]; }
  }
  const path = /\/physics\/lab\/scene\/([^/?#]+)/.exec(text);
  return path ? path[1] : '';
}

export function shareHash(payload) {
  return `#/physics/lab/?scene=${payload}`;
}
