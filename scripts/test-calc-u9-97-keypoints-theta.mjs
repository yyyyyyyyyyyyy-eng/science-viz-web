#!/usr/bin/env node
/**
 * Rendered-KEY-POINTS visible-theta regression for #/t/math/calc-u9/9.7.
 *
 * At 05:32 (+08) the real browser acceptance FAILED on this route: the first
 * bilingual KEY POINTS bullet rendered x(heta) / y(heta) in light AND dark,
 * with a correct dy/dx dfrac, no .katex-error, and every other theta on the
 * page (CONDITIONS etc.) correct. Root cause (investigated 2026-11-19): the
 * keyPoint string in data/enrichments/batch2.js had four SINGLE-backslash
 * \theta (JS ate \t -> TAB, KaTeX 0.16 silently rendered "heta"); commit
 * 5676013 doubled them at 05:30, but the long-lived acceptance tab held the
 * PRE-fix ES module in its in-memory module graph (courses.js memoizes
 * _enrichmentsPromise for the document's lifetime and hash navigation never
 * re-imports), while the served bytes were already fixed (no-store,
 * sha256 e856df4e...). A prior headless probe passed only because a fresh
 * context re-imports the fixed module AND its assertions were page-wide
 * (katexThetaCount >= 4 over ~279 page thetas; body innerText heuristics).
 *
 * This test refuses that class of check. It drives a throwaway headless
 * Chrome over CDP (pattern of scripts/test-topic-vocab.mjs) and asserts ONLY
 * on the rendered KEY POINTS section (js/topic-page.js block('keypoints')
 * -> section#topic-sec-keypoints > ul.topic-list > li > span.tex-inline,
 * each holding .katex-mathml <mi> glyphs + .katex-html visible glyphs):
 *   KP-1  route renders; section identity is the Key Points block.
 *   KP-2  first bullet's four x()/y() spans (zh + en halves) each show a
 *         VISIBLE theta glyph: .katex-html text is exactly x(θ)/y(θ) and the
 *         KaTeX MathML <mi> list contains θ. NOT the raw-TeX <annotation>:
 *         the annotation legitimately holds "x(\theta)" whose letters
 *         contain "heta", so whole-span textContent checks are meaningless
 *         here by construction.
 *   KP-3  no keypoint math span in the section renders "heta" in the VISIBLE
 *         layer, and none has .katex-error (KaTeX 0.16 with throwOnError
 *         false renders the broken state WITHOUT .katex-error, so
 *         error-absence alone proves nothing — it is asserted only in
 *         addition to the glyph checks).
 *   KP-4  the two dy/dx dfrac spans render as real fractions (MathML mfrac,
 *         mis d,y / d,x) — anchors that the first bullet is the one from
 *         the 05:32 screenshot.
 *   KP-5  light and dark (real #theme-toggle), 1280x800; the four spans have
 *         non-zero boxes and are visible in both themes.
 *
 * Self-controls gate the checker BEFORE the real result is trusted (a blind
 * checker exits 2, see below): inside the live page we render synthetic
 * first bullets through the page's own KaTeX with the exact runtime TeX of
 * the 05:32 incident — the healthy one from the fixed source ('x(' + BS +
 * 'theta)'), the broken one from the PRE-fix single-backslash source
 * ('x(' + TAB + 'heta)', what JS evaluation produced when \t ate the
 * backslash). The same checker that gates the real section MUST flag the
 * broken bullets (all four spans, English half only, Chinese half only) and
 * MUST pass the healthy one. The controls are independent of the live data
 * state, and they prove the test fails on the 05:32 page even though the
 * rest of the page has ~279 thetas and zero .katex-error.
 *
 * A served-data leg then fetches the bytes the spawned server actually
 * delivers for data/enrichments/batch2.js, imports them, and checks the
 * parsed runtime keyPoint (control bytes absent, four \theta, vendored
 * KaTeX renders theta) — with its own PRE-fix / FIXED string controls
 * written so JS evaluation reproduces the broken and healthy values.
 *
 * No page-wide theta counting, no document.body.innerText heuristics, no
 * source-file scanning is used to gate anything. Page-wide theta/error
 * counts are recorded as EVIDENCE ONLY.
 *
 * Exit codes: 0 = page and served data clean; 1 = real failure; 2 = a
 * self-control failed (the checker itself is blind — refuse green).
 *
 * Run:    node scripts/test-calc-u9-97-keypoints-theta.mjs
 * Env:    CHROME_PATH (default /usr/bin/google-chrome)
 */

import { spawn } from 'node:child_process';
import { createHash } from 'node:crypto';
import { existsSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { createServer } from 'node:net';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const CHROME = process.env.CHROME_PATH || '/usr/bin/google-chrome';
const TMP = join(tmpdir(), 'opencode');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/* Ports owned by other deployments/probes — never serve on or attach to these. */
const RESERVED = new Set([9225, 9231, 8766, 8767, 8768, 8814, 8830]);
const ROUTE = '/#/t/math/calc-u9/9.7';
const ROUTE_HASH = '#/t/math/calc-u9/9.7';

let passed = 0;
let hardFailures = 0;
function ok(name, cond, detail) {
  if (cond) {
    passed += 1;
    console.log(`ok ${passed} - ${name}`);
    return true;
  }
  hardFailures += 1;
  console.error(`not ok - ${name}${detail === undefined ? '' : `: ${JSON.stringify(detail)}`}`);
  return false;
}

/* ---------- infrastructure: server + chrome + minimal CDP ---------- */

function freePort() {
  return new Promise((resolve, reject) => {
    const srv = createServer();
    srv.unref();
    srv.on('error', reject);
    srv.listen(0, '127.0.0.1', () => {
      const { port } = srv.address();
      srv.close(() => resolve(port));
    });
  });
}

async function nonReservedPort() {
  for (;;) {
    const port = await freePort();
    if (!RESERVED.has(port)) return port;
  }
}

function httpOk(url) {
  return fetch(url).then((r) => r.ok).catch(() => false);
}

async function startServer() {
  const port = await nonReservedPort();
  const proc = spawn('python3', [join(ROOT, 'scripts', 'serve-dev.py'), ROOT, String(port)], { stdio: 'ignore' });
  const base = `http://127.0.0.1:${port}`;
  for (let i = 0; i < 50; i++) {
    if (await httpOk(`${base}/index.html`)) return { base, proc };
    await sleep(100);
  }
  throw new Error(`dev server did not start on ${base}`);
}

async function startChrome() {
  if (!existsSync(CHROME)) throw new Error(`chrome not found at ${CHROME} (set CHROME_PATH)`);
  const cdpPort = await nonReservedPort();
  const profile = mkdtempSync(join(TMP, 'kp97-probe-'));
  const proc = spawn(CHROME, [
    '--headless=new',
    `--remote-debugging-port=${cdpPort}`,
    `--user-data-dir=${profile}`,
    '--no-first-run', '--no-default-browser-check', '--disable-gpu', '--hide-scrollbars',
    'about:blank',
  ], { stdio: 'ignore' });
  for (let i = 0; i < 75; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${cdpPort}/json/version`);
      if (res.ok) return { proc, cdpPort, profile };
    } catch (_) { /* starting */ }
    await sleep(200);
  }
  throw new Error('chrome did not expose its debug port');
}

async function connect(cdpPort) {
  const version = await (await fetch(`http://127.0.0.1:${cdpPort}/json/version`)).json();
  const ws = new WebSocket(version.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => {
    ws.addEventListener('open', resolve, { once: true });
    ws.addEventListener('error', reject, { once: true });
  });
  let id = 0;
  const pending = new Map();
  const listeners = [];
  ws.addEventListener('message', (ev) => {
    const msg = JSON.parse(ev.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve: done, reject: fail } = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) fail(new Error(`${msg.error.message} ${msg.error.data || ''}`));
      else done(msg.result);
    } else if (msg.method) {
      listeners.forEach((l) => l(msg));
    }
  });
  const send = (method, params = {}, sessionId) => {
    id += 1;
    const payload = { id, method, params };
    if (sessionId) payload.sessionId = sessionId;
    ws.send(JSON.stringify(payload));
    return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
  };
  return { ws, send, on(l) { listeners.push(l); } };
}

async function newPage(cdp, width, height) {
  const { targetId } = await cdp.send('Target.createTarget', { url: 'about:blank' });
  const { sessionId } = await cdp.send('Target.attachToTarget', { targetId, flatten: true });
  const S = (m, p) => cdp.send(m, p, sessionId);
  const consoleErrors = [];
  cdp.on((msg) => {
    if (msg.sessionId !== sessionId) return;
    if (msg.method === 'Runtime.exceptionThrown') {
      consoleErrors.push(String(msg.params.exceptionDetails?.exception?.description || msg.params.exceptionDetails.text));
    } else if (msg.method === 'Runtime.consoleAPICalled' && msg.params.type === 'error') {
      consoleErrors.push(msg.params.args.map((a) => a.value ?? a.description ?? '').join(' '));
    }
  });
  await S('Runtime.enable');
  await S('Page.enable');
  await S('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile: false });
  return {
    consoleErrors,
    async goto(url) {
      await S('Page.navigate', { url });
      const settled = await this.waitFor(`document.readyState === 'complete' && document.querySelectorAll('#topic-sec-keypoints span.tex-inline').length >= 6`, 20000);
      if (!settled) throw new Error(`page did not render the keypoints section: ${url}`);
    },
    async eval(expression) {
      const res = await S('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
      if (res.exceptionDetails) throw new Error(`eval failed: ${res.exceptionDetails.exception?.description || res.exceptionDetails.text}`);
      return res.result.value;
    },
    async waitFor(expression, timeoutMs = 15000) {
      const deadline = Date.now() + timeoutMs;
      while (Date.now() < deadline) {
        const value = await this.eval(expression);
        if (value) return value;
        await sleep(120);
      }
      return null;
    },
  };
}

/* ---------- in-page checker (no backslashes anywhere in this source) ----------
 * Asserts ONLY on the keypoints block. The visible layer is .katex-html; the
 * semantic layer is the MathML <mi> list. The raw-TeX <annotation> inside
 * .katex-mathml legitimately contains the letters "heta" (inside \theta), so
 * whole-span textContent is deliberately never inspected.                    */
const PAGE_HELPERS = `
  window.__kpSection = () => document.getElementById('topic-sec-keypoints');
  window.__kpCheck = (root) => {
    const v = [];
    const meta = {};
    if (!root) return { ok: false, v: ['keypoints root not given'], meta };
    const h2 = root.querySelector('h2');
    if (!h2 || !/Key Points/.test(h2.textContent || '')) {
      v.push('section h2 is not the Key Points heading: ' + (h2 ? h2.textContent : 'none'));
    }
    const ul = root.querySelector('ul.topic-list');
    if (!ul) return { ok: false, v: v.concat(['no ul.topic-list inside the keypoints section']), meta };
    const lis = [...ul.children].filter((n) => n.tagName === 'LI');
    meta.liCount = lis.length;
    if (!lis.length) return { ok: false, v: v.concat(['keypoints section has no bullets']), meta };
    const read = (sp) => {
      const vis = sp.querySelector('.katex-html');
      return {
        visText: vis ? vis.textContent : null,
        mis: [...sp.querySelectorAll('mi')].map((m) => m.textContent),
        error: !!sp.querySelector('.katex-error'),
        mfrac: !!sp.querySelector('mfrac'),
      };
    };
    // Deep checks: the FIRST keypoint bullet — the 05:32 failure site.
    const spans = [...lis[0].querySelectorAll('span.tex-inline')];
    meta.spanCount = spans.length;
    meta.spans = spans.map(read);
    if (spans.length !== 6) v.push('first keypoint bullet has ' + spans.length + ' inline math spans, expected 6');
    const XY = [0, 1, 3, 4];
    const DF = [2, 5];
    for (const i of XY) {
      const s = meta.spans[i];
      if (!s) { v.push('xy span #' + i + ' missing'); continue; }
      if (s.error) v.push('xy span #' + i + ' contains .katex-error');
      if (s.mis.indexOf('θ') < 0) v.push('xy span #' + i + ' KaTeX MathML has no theta <mi>: ' + JSON.stringify(s.mis));
      if (s.visText !== 'x(θ)' && s.visText !== 'y(θ)') {
        v.push('xy span #' + i + ' visible glyphs are not x(θ)/y(θ): ' + JSON.stringify(s.visText));
      }
      if (s.visText && /heta/i.test(s.visText)) {
        v.push('xy span #' + i + ' visible glyphs show heta — the 05:32 failure mode: ' + JSON.stringify(s.visText));
      }
    }
    for (const i of DF) {
      const s = meta.spans[i];
      if (!s) { v.push('dfrac span #' + i + ' missing'); continue; }
      if (s.error) v.push('dfrac span #' + i + ' contains .katex-error');
      if (!s.mfrac) v.push('dfrac span #' + i + ' has no MathML fraction');
      if (s.mis.join('') !== 'dydx') v.push('dfrac span #' + i + ' is not dy over dx: ' + JSON.stringify(s.mis));
      if (s.visText && /heta/i.test(s.visText)) v.push('dfrac span #' + i + ' visible glyphs show heta');
    }
    // Section-wide guard: EVERY keypoint math span, visible layer only.
    for (const li of lis) {
      for (const sp of li.querySelectorAll('span.tex, span.tex-inline')) {
        const s = read(sp);
        if (s.error) v.push('keypoint span has .katex-error: ' + JSON.stringify(String(sp.textContent).slice(0, 50)));
        if (s.visText && /heta/i.test(s.visText)) {
          v.push('keypoint span visible glyphs show heta: ' + JSON.stringify(String(s.visText).slice(0, 50)));
        }
      }
    }
    return { ok: v.length === 0, v, meta };
  };
  // Synthetic bullets rendered through the page's own KaTeX, so the checker
  // controls are independent of the live data state (healthy = the fixed
  // runtime TeX 'x(' + BS + 'theta)'; broken = the pre-fix runtime TeX
  // 'x(' + TAB + 'heta)' that JS evaluation produced from the single-
  // backslash batch2 source).
  window.__kpBullet = () => {
    const BS = String.fromCharCode(92);
    const theta = 'x(' + BS + 'theta)';
    const dfrac = BS + 'dfrac{' + BS + 'mathrm{d}y}{' + BS + 'mathrm{d}x}';
    const texes = [theta, 'y(' + BS + 'theta)', dfrac, theta, 'y(' + BS + 'theta)', dfrac];
    const root = document.createElement('section');
    root.className = 'topic-block';
    const h2 = document.createElement('h2');
    h2.textContent = '要点 · Key Points';
    const ul = document.createElement('ul');
    ul.className = 'topic-list';
    const li = document.createElement('li');
    li.appendChild(document.createTextNode('先写 '));
    for (const t of texes) {
      const sp = document.createElement('span');
      sp.className = 'tex-inline';
      window.katex.render(t, sp, { throwOnError: false, displayMode: false });
      li.appendChild(sp);
    }
    ul.appendChild(li);
    root.appendChild(h2);
    root.appendChild(ul);
    return root;
  };
  window.__kpBulletBroken = (brokenIdx) => {
    const root = window.__kpBullet();
    const TAB = String.fromCharCode(9);
    const spans = [...root.querySelectorAll('span.tex-inline')];
    for (const i of brokenIdx) {
      const xy = (i === 0 || i === 3) ? 'x' : 'y';
      window.katex.render(xy + '(' + TAB + 'heta)', spans[i], { throwOnError: false, displayMode: false });
    }
    return root;
  };
  window.__kpVisible = () => {
    const sec = window.__kpSection();
    const spans = [...sec.querySelectorAll('ul.topic-list li span.tex-inline')];
    return [0, 1, 3, 4].map((i) => {
      const r = spans[i].getBoundingClientRect();
      const cs = getComputedStyle(spans[i]);
      return { w: Math.round(r.width), h: Math.round(r.height), display: cs.display, visibility: cs.visibility };
    });
  };
  true;
`;

/* ---------- Node-side served-data checker (control bytes + vendored KaTeX) ---------- */

const CTRL_BYTES = [
  [0x08, 'BS'], [0x09, 'TAB'], [0x0b, 'VT'], [0x0c, 'FF'], [0x0d, 'CR'],
];

function visible(html) {
  return html
    .replace(/<annotation[\s\S]*?<\/annotation>/g, '')
    .replace(/<[^>]+>/g, '')
    .trim();
}

function inlineMath(note) {
  return [...note.matchAll(/\\\(([\s\S]+?)\\\)/g)].map((m) => m[1]);
}

function checkRuntimeKeypoint(str, katex) {
  const v = [];
  for (const [code, name] of CTRL_BYTES) {
    if (str.includes(String.fromCharCode(code))) {
      v.push(`control byte 0x${code.toString(16)} (${name}) in runtime keypoint — a JS-eaten backslash destroyed TeX`);
    }
  }
  const thetaCount = (str.match(/\\theta/g) || []).length;
  if (thetaCount !== 4) v.push(`expected 4 runtime \\theta, found ${thetaCount}`);
  const spans = inlineMath(str);
  if (spans.length !== 6) v.push(`expected 6 inline math spans, found ${spans.length}`);
  for (const i of [0, 1, 3, 4]) {
    const tex = spans[i];
    if (tex === undefined) { v.push(`xy span #${i} missing`); continue; }
    const html = katex.renderToString(tex, { throwOnError: false, displayMode: false });
    if (html.includes('katex-error')) v.push(`xy span #${i} katex-error`);
    if (!html.includes('<mi>θ</mi>')) v.push(`xy span #${i} KaTeX output has no theta <mi>: ${JSON.stringify(tex)}`);
    const vis = visible(html);
    if (!vis.includes('θ')) v.push(`xy span #${i} visible text has no theta: ${JSON.stringify(vis)}`);
    if (/heta/i.test(vis)) v.push(`xy span #${i} visible text shows heta (the 05:32 failure): ${JSON.stringify(vis)}`);
  }
  for (const i of [2, 5]) {
    const tex = spans[i];
    if (tex === undefined) { v.push(`dfrac span #${i} missing`); continue; }
    const html = katex.renderToString(tex, { throwOnError: false, displayMode: false });
    if (html.includes('katex-error')) v.push(`dfrac span #${i} katex-error`);
    if (!tex.includes('\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}')) {
      v.push(`dfrac span #${i} is not runtime \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}: ${JSON.stringify(tex)}`);
    }
    const vis = visible(html);
    if (/heta/i.test(vis)) v.push(`dfrac span #${i} visible text shows heta: ${JSON.stringify(vis)}`);
  }
  return v;
}

/* Self-control strings, written the way the corresponding data source
 * evaluated, so JS itself performs the escape-eating:
 *   PRE_FIX  — the exact pre-5676013 batch2.js line: doubled \\( delimiters
 *              but SINGLE-backslash \theta, so \t evaluates to TAB+heta.
 *   FIXED    — the current (post-5676013) line: everything doubled.       */
const PRE_FIX_KEYPOINT =
  '先写 \\(x(\theta)\\)、\\(y(\theta)\\)，再求 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\) · Write \\(x(\theta)\\) and \\(y(\theta)\\) first, then find \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\)';
const FIXED_KEYPOINT =
  '先写 \\(x(\\theta)\\)、\\(y(\\theta)\\)，再求 \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\) · Write \\(x(\\theta)\\) and \\(y(\\theta)\\) first, then find \\(\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}\\)';

async function requireKatex() {
  const req = createRequire(import.meta.url);
  const katex = req(join(ROOT, 'vendor/katex/katex.min.js'));
  if (typeof katex?.renderToString !== 'function') throw new Error('vendored KaTeX did not load');
  return katex;
}

async function servedKeypoint(base) {
  const res = await fetch(`${base}/data/enrichments/batch2.js`);
  if (!res.ok) throw new Error(`served batch2.js fetch failed: ${res.status}`);
  const bytes = Buffer.from(await res.arrayBuffer());
  const sha256 = createHash('sha256').update(bytes).digest('hex');
  const dir = mkdtempSync(join(TMP, 'kp97-served-'));
  const tmp = join(dir, 'batch2-under-test.mjs');
  writeFileSync(tmp, bytes);
  try {
    const mod = await import(pathToFileURL(tmp).href);
    const kp = mod.ENRICHMENTS['math/calc-u9/9.7']?.keyPoints?.[0];
    return { sha256, byteLength: bytes.length, kp };
  } finally {
    rmSync(dir, { recursive: true, force: true, maxRetries: 5, retryDelay: 250 });
  }
}

/* ---------- run ---------- */

const server = await startServer();
const { base } = server;
let chrome = null;
let cdp = null;
let page = null;
let controlBroken = false;
const evidence = {};

try {
  chrome = await startChrome();
  cdp = await connect(chrome.cdpPort);
  // Fresh target: a brand-new document, so the ES module graph (including
  // data/enrichments/batch2.js) is imported fresh from the spawned server —
  // exactly the acceptance condition, with no stale in-tab module reuse.
  page = await newPage(cdp, 1280, 800);
  await page.goto(`${base}${ROUTE}`);

  await page.eval(PAGE_HELPERS);

  console.log('\nKP-1 route and section identity');
  const pageMeta = await page.eval(`(() => {
    const sec = window.__kpSection();
    const mis = [...document.querySelectorAll('mi')];
    const moduleScript = document.querySelector('script[type="module"]');
    return {
      route: location.hash,
      h2: sec ? sec.querySelector('h2').textContent : null,
      entryScript: moduleScript ? moduleScript.getAttribute('src') : null,
      pageWideThetaMis: mis.filter((m) => m.textContent === 'θ').length,
      pageWideKatexErrors: document.querySelectorAll('.katex-error').length,
      sectionThetaMis: [...document.querySelectorAll('#topic-sec-keypoints mi')].filter((m) => m.textContent === 'θ').length,
      firstBulletText: String(sec.querySelector('ul.topic-list li').textContent).slice(0, 60),
    };
  })()`);
  evidence.page = pageMeta;
  ok('route is #/t/math/calc-u9/9.7', pageMeta.route === ROUTE_HASH, pageMeta.route);
  ok('keypoints block exists with the Key Points heading', /Key Points/.test(pageMeta.h2 || ''));
  ok('module root carries a cache token', /\?v=/.test(pageMeta.entryScript || ''), pageMeta.entryScript);

  console.log('\nKP-CTL checker self-controls (a blind checker exits 2)');
  const ctl = await page.eval(`(() => {
    const four = window.__kpCheck(window.__kpBulletBroken([0, 1, 3, 4]));
    const en = window.__kpCheck(window.__kpBulletBroken([3]));
    const zh = window.__kpCheck(window.__kpBulletBroken([1]));
    const healthy = window.__kpCheck(window.__kpBullet());
    return { four, en, zh, healthy };
  })()`);
  evidence.selfControl = {
    fourBrokenFlagged: !ctl.four.ok, fourBrokenV: ctl.four.v,
    enOnlyFlagged: !ctl.en.ok, enOnlyV: ctl.en.v,
    zhOnlyFlagged: !ctl.zh.ok, zhOnlyV: ctl.zh.v,
    healthyPassed: ctl.healthy.ok, healthyV: ctl.healthy.v,
  };
  const ctlOk =
    !ctl.four.ok && ctl.four.v.some((x) => /heta/i.test(x)) &&
    !ctl.en.ok && ctl.en.v.some((x) => /heta/i.test(x)) &&
    !ctl.zh.ok && ctl.zh.v.some((x) => /heta/i.test(x)) &&
    ctl.healthy.ok;
  if (!ctlOk) controlBroken = true;
  ok('checker flags a fully broken first bullet (the 05:32 DOM, rendered by the page KaTeX)', !ctl.four.ok && ctl.four.v.some((x) => /heta/i.test(x)), ctl.four.v);
  ok('checker flags only the English half broken', !ctl.en.ok && ctl.en.v.some((x) => /heta/i.test(x)), ctl.en.v);
  ok('checker flags only the Chinese half broken', !ctl.zh.ok && ctl.zh.v.some((x) => /heta/i.test(x)), ctl.zh.v);
  ok('checker passes a known-healthy synthetic bullet (no overflagging)', ctl.healthy.ok, ctl.healthy.v);

  if (controlBroken) {
    console.error('CONTROL_FAILED: the keypoint checker would miss the 05:32 failure mode; refusing to look green.');
  } else {
    const checkReal = async (theme) => {
      const real = await page.eval('window.__kpCheck(window.__kpSection())');
      const vis = await page.eval('window.__kpVisible()');
      const meta = await page.eval('document.documentElement.getAttribute("data-theme")');
      evidence[theme] = { checker: real.meta, visible: vis, dataTheme: meta };
      ok(`[${theme}] data-theme is ${theme}`, meta === theme, meta);
      ok(`[${theme}] keypoints checker passes (confined to the keypoints block)`, real.ok, real.v);
      const xy = real.meta.spans.filter((_, i) => [0, 1, 3, 4].includes(i));
      ok(`[${theme}] all four x()/y() keypoint spans render a visible θ glyph`,
        xy.length === 4 && xy.every((s) => s.visText === 'x(θ)' || s.visText === 'y(θ)'), xy.map((s) => s.visText));
      ok(`[${theme}] all four spans' KaTeX MathML contains θ, not the letters h-e-t-a`,
        xy.every((s) => s.mis.includes('θ') && !s.mis.join('').includes('heta')), xy.map((s) => s.mis));
      const df = real.meta.spans.filter((_, i) => [2, 5].includes(i));
      ok(`[${theme}] both dy/dx spans render as real fractions`,
        df.length === 2 && df.every((s) => s.mfrac && s.mis.join('') === 'dydx'), df);
      ok(`[${theme}] no keypoint span has .katex-error`,
        !real.v.some((x) => x.includes('katex-error')), real.v);
      ok(`[${theme}] the four spans are rendered and visible (non-zero boxes)`,
        vis.length === 4 && vis.every((b) => b.w > 0 && b.h > 0 && b.display !== 'none' && b.visibility === 'visible'), vis);
    };

    console.log('\nKP-2..KP-5 light theme (default)');
    let theme = await page.eval('document.documentElement.getAttribute("data-theme") || "light"');
    if (theme !== 'light') await page.eval('document.getElementById("theme-toggle").click()');
    await page.waitFor('document.documentElement.getAttribute("data-theme") === "light"');
    await checkReal('light');

    console.log('\nKP-5 dark theme (real #theme-toggle)');
    await page.eval('document.getElementById("theme-toggle").click()');
    await page.waitFor('document.documentElement.getAttribute("data-theme") === "dark"');
    await checkReal('dark');
    await page.eval('document.getElementById("theme-toggle").click()'); // restore light

    console.log('\nKP-6 console');
    const realErrors = page.consoleErrors.filter((c) => !/favicon/i.test(c || ''));
    ok('no console errors', realErrors.length === 0, realErrors);
  }
} catch (e) {
  hardFailures += 1;
  console.error(`FATAL: ${e && e.stack ? e.stack.split('\n').slice(0, 3).join('\n') : e}`);
} finally {
  try { if (cdp) cdp.ws.close(); } catch (_) { /* already gone */ }
  try { if (chrome) chrome.proc.kill('SIGTERM'); } catch (_) { /* already gone */ }
  await sleep(400);
  if (chrome && chrome.proc.exitCode === null) {
    try { chrome.proc.kill('SIGKILL'); } catch (_) { /* already gone */ }
  }
  await sleep(100);
  if (chrome && chrome.profile) {
    try { rmSync(chrome.profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 250 }); } catch (_) { /* best effort */ }
  }
}

if (!controlBroken) {
  console.log('\nKP-DATA served bytes -> runtime module -> vendored KaTeX');
  try {
    const katex = await requireKatex();

    // Controls first: the checker must flag the pre-fix value and pass the fixed one.
    const preFixViolations = checkRuntimeKeypoint(PRE_FIX_KEYPOINT, katex);
    const fixedViolations = checkRuntimeKeypoint(FIXED_KEYPOINT, katex);
    if (preFixViolations.length === 0 || !preFixViolations.some((x) => /heta/i.test(x)) || fixedViolations.length !== 0) {
      controlBroken = true;
      console.error('CONTROL_FAILED: served-data checker is blind.');
      console.error(`  pre-fix control violations: ${JSON.stringify(preFixViolations)}`);
      console.error(`  fixed control violations: ${JSON.stringify(fixedViolations)}`);
    } else {
      ok('served-data checker flags the pre-fix runtime value (TAB + heta, no katex-error)', true);
      ok('served-data checker passes the fixed runtime value', true);

      const served = await servedKeypoint(base);
      evidence.served = { sha256: served.sha256, byteLength: served.byteLength };
      ok('served batch2.js fetched and parsed', typeof served.kp === 'string', { sha256: served.sha256, byteLength: served.byteLength });
      ok('served keyPoint is exactly the fixed bilingual string', served.kp === FIXED_KEYPOINT, served.kp);
      const servedViolations = checkRuntimeKeypoint(served.kp, katex);
      ok('served keyPoint runtime is clean (no control bytes; four \\theta; vendored KaTeX renders θ)',
        servedViolations.length === 0, servedViolations);
    }
  } catch (e) {
    hardFailures += 1;
    console.error(`FATAL(served-data): ${e && e.message ? e.message : e}`);
  }
}

if (server.proc) {
  try { server.proc.kill('SIGTERM'); } catch (_) { /* already gone */ }
}

console.log(`\n${passed} checks passed${hardFailures || controlBroken ? ' (with failures)' : ''}`);
console.log('\nEVIDENCE ' + JSON.stringify(evidence, null, 2));
if (controlBroken) {
  console.error('\nCONTROL_FAILED (exit 2): the checker would have passed the 05:32 broken page.');
  process.exit(2);
}
process.exit(hardFailures ? 1 : 0);
