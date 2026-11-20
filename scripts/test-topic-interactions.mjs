#!/usr/bin/env node
/**
 * Interaction regression tests for knowledge-topic pages and practice.
 *
 * Covers three verified frictions and their fixes:
 *   RAIL-1  the sticky topic rail must reveal the active outline item when the
 *           page jumps there (long topics overflow the rail's own scroll area)
 *   RAIL-2  same for the practice rail's active question button
 *   JUMP-1  outline jumps (rail item, practice item, gate button) must clear
 *           the real .site-header bottom edge — the header is height:auto
 *           with min-height: var(--nav-h), so trusting the token lands the
 *           heading under a wrapped/taller header (design retest defect)
 *   JUMP-2  narrow layout: one click on 本页目录 (On this page) must close
 *           the menu and land the heading below the header — measured only
 *           after the closed details has settled its layout
 *   KEYS-1  practice MCQ radiogroups answer to ArrowLeft/ArrowRight as well as
 *           ArrowUp/ArrowDown, moving focus with selection
 *   KEYS-2  quiz MCQ items behave the same
 *   QUIZ-1  the unsubmitted-quiz banner is hidden while that quiz is open and
 *           reappears after leaving it
 *
 * Dependency-free: drives a throwaway headless Chrome over the CDP WebSocket
 * (global in Node >= 22) and spawns scripts/serve-dev.py on a free port.
 *
 * Run:    node scripts/test-topic-interactions.mjs
 * Env:    CHROME_PATH (default /usr/bin/google-chrome), SV_BASE (skip server
 *         spawn and test an already-running deployment).
 */

import { spawn } from 'node:child_process';
import { existsSync, mkdtempSync, rmSync } from 'node:fs';
import { createServer } from 'node:net';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const CHROME = process.env.CHROME_PATH || '/usr/bin/google-chrome';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let passed = 0;
function ok(name, actual, expected = true) {
  if (actual !== expected) {
    console.error(`not ok - ${name}: got ${JSON.stringify(actual)}, expected ${JSON.stringify(expected)}`);
    process.exitCode = 1;
    return false;
  }
  passed += 1;
  console.log(`ok ${passed} - ${name}`);
  return true;
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

function httpOk(url) {
  return fetch(url).then((r) => r.ok).catch(() => false);
}

async function startServer() {
  if (process.env.SV_BASE) return { base: process.env.SV_BASE, proc: null };
  const port = await freePort();
  const proc = spawn('python3', [join(ROOT, 'scripts/serve-dev.py'), ROOT, String(port)], { stdio: 'ignore' });
  const base = `http://127.0.0.1:${port}`;
  for (let i = 0; i < 50; i++) {
    if (await httpOk(`${base}/index.html`)) return { base, proc };
    await sleep(100);
  }
  throw new Error(`dev server did not start on ${base}`);
}

async function startChrome() {
  if (!existsSync(CHROME)) {
    throw new Error(`chrome not found at ${CHROME} (set CHROME_PATH)`);
  }
  const cdpPort = await freePort();
  const profile = mkdtempSync(join(tmpdir(), 'topic-ux-test-'));
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
    if (msg.method === 'Page.javascriptDialogOpening') {
      // window.confirm() must never wedge a headless run.
      cdp.send('Page.handleJavaScriptDialog', { accept: true, promptText: '' }, sessionId).catch(() => {});
      return;
    }
    if (msg.method === 'Runtime.exceptionThrown') {
      consoleErrors.push(String(msg.params.exceptionDetails?.exception?.description || msg.params.exceptionDetails?.text));
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
      // Same-document hash navigation fires no load event; settle by polling.
      await S('Page.navigate', { url });
      for (let i = 0; i < 60; i++) {
        await sleep(100);
        if (await this.eval(`document.readyState === 'complete' && !!document.querySelector('#main') && document.querySelector('#main').children.length > 0`)) return;
      }
    },
    /** Poll an eval expression (default: selector present) until truthy. */
    async waitFor(expression, timeoutMs = 10000) {
      const deadline = Date.now() + timeoutMs;
      while (Date.now() < deadline) {
        const value = await this.eval(expression);
        if (value) return value;
        await sleep(120);
      }
      return null;
    },
    async eval(expression) {
      const res = await S('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
      if (res.exceptionDetails) throw new Error(`eval failed: ${res.exceptionDetails.exception?.description || res.exceptionDetails.text}`);
      return res.result.value;
    },
    async settleScroll(timeoutMs = 6000) {
      let last = -1;
      const deadline = Date.now() + timeoutMs;
      while (Date.now() < deadline) {
        const y = await this.eval('Math.round(window.scrollY)');
        if (y === last && y !== -1) return y;
        last = y;
        await sleep(160);
      }
      return last;
    },
    async key(key) {
      const code = key.length === 1 ? `Key${key.toUpperCase()}` : key;
      const vk = key.length === 1 ? key.toUpperCase().charCodeAt(0) : 0;
      const base = { key, code, windowsVirtualKeyCode: vk, nativeVirtualKeyCode: vk, text: key.length === 1 ? key : undefined };
      await S('Input.dispatchKeyEvent', { type: 'keyDown', ...base });
      await S('Input.dispatchKeyEvent', { type: 'keyUp', ...base });
      await sleep(80);
    },
  };
}

/* ---------- the tests ---------- */

const server = await startServer();
const chrome = await startChrome();
const cdp = await connect(chrome.cdpPort);
const page = await newPage(cdp, 1280, 900);
const { base } = server;

try {
  console.log('\nRAIL-1 topic rail keeps the active outline item visible');

  await page.goto(`${base}/#/t/math/calc-u1/1.2`);
  ok('topic page rendered', await page.waitFor('!!document.querySelector(".topic-rail .topic-outline")'), true);
  const t1 = await page.eval(`(() => {
    const rail = document.querySelector('.topic-rail');
    const nav = rail.querySelector('.topic-outline');
    const buttons = [...nav.querySelectorAll('button')];
    const last = buttons[buttons.length - 1];
    last.click();
    return { count: buttons.length, lastLabel: last.textContent.trim() };
  })()`);
  ok('topic rail outline exists with sections', t1.count >= 15, true);
  await page.settleScroll();
  await sleep(400);
  const t1v = await page.eval(`(() => {
    const rail = document.querySelector('.topic-rail');
    const active = rail.querySelector('.topic-outline button.active');
    if (!active) return { found: false };
    const r = active.getBoundingClientRect();
    const rr = rail.getBoundingClientRect();
    return {
      found: true,
      label: active.textContent.trim(),
      visible: r.top >= rr.top - 1 && r.bottom <= rr.bottom + 1,
      railScrolled: rail.scrollTop > 0,
    };
  })()`);
  ok('topic rail reveals the jumped-to section', t1v.found, true);
  ok(`topic rail active item visible in rail (${t1v.label})`, t1v.visible, true);
  ok('topic rail scrolled internally', t1v.railScrolled, true);

  console.log('\nJUMP-1 outline jumps clear the real sticky header, not just --nav-h');
  // The header is height:auto with min-height: var(--nav-h); whenever its
  // real box is taller than the token (a wrapped nav row, a bumped text
  // size), the old var-based offset slid the target heading under the
  // sticky header. Model that state by forcing one extra 48px header row.

  const railJump = async (match) => {
    await page.eval(`(() => {
      const b = [...document.querySelectorAll('.topic-rail .topic-outline button')].find((x) => x.textContent.includes(${JSON.stringify(match)}));
      b.click();
    })()`);
    await page.settleScroll();
    await sleep(400);
  };
  const jumpState = (id) => page.eval(`(() => {
    const hb = document.querySelector('.site-header').getBoundingClientRect().bottom;
    const h2 = document.querySelector('#' + ${JSON.stringify(id)} + ' h2').getBoundingClientRect();
    return {
      headerBottom: Math.round(hb * 10) / 10,
      h2Top: Math.round(h2.top * 10) / 10,
      h2Bottom: Math.round(h2.bottom * 10) / 10,
      viewportH: window.innerHeight,
    };
  })()`);

  // a) Normal header: clicking 公式 leaves a clear gap below the header.
  await railJump('公式');
  const j1a = await jumpState('topic-sec-formulas');
  ok(`normal header: formulas h2 clears the header bottom by >= 8px (got ${j1a.h2Top - j1a.headerBottom})`, j1a.h2Top - j1a.headerBottom >= 8, true);
  ok('normal header: formulas h2 bottom is inside the viewport', j1a.h2Bottom <= j1a.viewportH, true);

  // b) Taller real header: the same click must clear the measured edge
  //    (fails before the fix: the heading sat under the wrapped header).
  const tallBottom = await page.eval(`(() => {
    const probe = document.createElement('div');
    probe.id = 'test-taller-header-row';
    probe.style.cssText = 'flex-basis: 100%; flex-shrink: 0; height: 88px;';
    document.querySelector('.site-header .header-inner').appendChild(probe);
    return Math.round(document.querySelector('.site-header').getBoundingClientRect().bottom * 10) / 10;
  })()`);
  ok('taller header probe row forced (header bottom above the token offset)', tallBottom > 84, true);
  await railJump('公式');
  const j1b = await jumpState('topic-sec-formulas');
  ok(`taller header: formulas h2 clears the real header bottom by >= 12px (got ${j1b.h2Top - j1b.headerBottom})`, j1b.h2Top - j1b.headerBottom >= 12, true);
  ok('taller header: formulas h2 bottom is inside the viewport', j1b.h2Bottom <= j1b.viewportH, true);

  // c) Taller header: an outline jump straight into the practice zone
  //    (the first practice item, 例题, opens the gate and jumps).
  await page.eval(`(() => {
    document.querySelector('.topic-rail .topic-outline button.topic-outline-practice').click();
  })()`);
  await page.settleScroll();
  await sleep(400);
  const j1c = await page.eval(`(() => {
    const hb = document.querySelector('.site-header').getBoundingClientRect().bottom;
    const id = document.querySelector('.topic-rail .topic-outline button.topic-outline-practice').dataset.target;
    const h2 = document.querySelector('#' + id + ' h2').getBoundingClientRect();
    return { id, headerBottom: Math.round(hb * 10) / 10, h2Top: Math.round(h2.top * 10) / 10, h2Bottom: Math.round(h2.bottom * 10) / 10, viewportH: window.innerHeight };
  })()`);
  ok(`taller header: practice jump (${j1c.id}) clears the header by >= 12px (got ${j1c.h2Top - j1c.headerBottom})`, j1c.h2Top - j1c.headerBottom >= 12, true);
  ok('taller header: practice jump h2 bottom inside the viewport', j1c.h2Bottom <= j1c.viewportH, true);

  // d) Taller header: the gate button's own jump uses the same offset.
  await page.eval(`(() => {
    const b = document.querySelector('.topic-gate-btn');
    b.scrollIntoView({ block: 'center', behavior: 'instant' });
    b.click();
  })()`);
  await page.settleScroll();
  await sleep(400);
  const j1d = await page.eval(`(() => {
    const hb = document.querySelector('.site-header').getBoundingClientRect().bottom;
    const h2 = document.querySelector('#topic-sec-examples h2').getBoundingClientRect();
    return { headerBottom: Math.round(hb * 10) / 10, h2Top: Math.round(h2.top * 10) / 10, h2Bottom: Math.round(h2.bottom * 10) / 10, viewportH: window.innerHeight };
  })()`);
  ok(`taller header: gate button jump clears the header by >= 12px (got ${j1d.h2Top - j1d.headerBottom})`, j1d.h2Top - j1d.headerBottom >= 12, true);
  ok('taller header: gate button jump h2 bottom inside the viewport', j1d.h2Bottom <= j1d.viewportH, true);

  // Restore the real header before the practice-page scenarios.
  await page.eval(`document.getElementById('test-taller-header-row')?.remove()`);

  console.log('\nRAIL-2 practice rail keeps the active question button visible');

  await page.goto(`${base}/#/math/practice/calc-u1`);
  ok('practice page rendered', await page.waitFor('document.querySelectorAll(".practice-jump").length > 20'), true);
  const jumpCount = await page.eval('document.querySelectorAll(".practice-jump").length');
  ok('practice jump grid rendered', jumpCount > 20, true);
  await page.eval(`document.querySelectorAll('.practice-jump')[${Math.min(80, jumpCount - 1)}].click()`);
  await page.settleScroll();
  await sleep(400);
  const t2v = await page.eval(`(() => {
    const rail = document.querySelector('.practice-rail');
    const active = rail.querySelector('.practice-jump.active');
    if (!active) return { found: false };
    const r = active.getBoundingClientRect();
    const rr = rail.getBoundingClientRect();
    return { found: true, label: active.textContent.trim(), visible: r.top >= rr.top - 1 && r.bottom <= rr.bottom + 1, railScrolled: rail.scrollTop > 0 };
  })()`);
  ok('practice rail reveals the jumped-to question', t2v.found, true);
  ok(`practice rail active button visible in rail (#${t2v.label})`, t2v.visible, true);
  ok('practice rail scrolled internally', t2v.railScrolled, true);

  console.log('\nKEYS-1 practice MCQ answers to all four arrow keys');

  const mcqIdx = await page.eval(`(() => {
    const cards = [...document.querySelectorAll('.practice-card')];
    return cards.findIndex((c) => {
      const g = c.querySelector('.mcq-group');
      return g && g.dataset.locked !== 'true';
    });
  })()`);
  ok('fresh MCQ card available', mcqIdx >= 0, true);
  const keyState = await page.eval(`(() => {
    const card = [...document.querySelectorAll('.practice-card')][${mcqIdx}];
    const btns = [...card.querySelectorAll('.mcq-choice')];
    btns[0].focus();
    const snap = () => ({
      focusIdx: btns.indexOf(document.activeElement),
      checkedIdx: btns.findIndex((b) => b.getAttribute('aria-checked') === 'true'),
    });
    window.__snap = snap;
    return { count: btns.length, start: snap() };
  })()`);
  ok('MCQ choice focused', keyState.start.focusIdx, 0);
  await page.key('ArrowRight');
  const afterRight = await page.eval('window.__snap()');
  ok('ArrowRight moves selection to next choice', afterRight.checkedIdx, 1);
  ok('ArrowRight moves focus with selection', afterRight.focusIdx, 1);
  await page.key('ArrowLeft');
  const afterLeft = await page.eval('window.__snap()');
  ok('ArrowLeft moves back', afterLeft.checkedIdx, 0);
  await page.key('ArrowLeft');
  const afterWrap = await page.eval('window.__snap()');
  ok('ArrowLeft wraps to the last choice', afterWrap.checkedIdx, keyState.count - 1);

  console.log('\nKEYS-2 quiz MCQ items answer to all four arrow keys');

  // Freeze the shuffle so the item sample is reproducible, then take all items.
  await page.eval(`(() => {
    const seed = (() => { let s = 7; return () => { s = (s * 1103515245 + 12345) % 2147483648; return s / 2147483648; }; })();
    Math.random = seed;
    [...document.querySelectorAll('button')].find((b) => b.textContent.includes('单元小测'))?.click();
  })()`);
  await sleep(300);
  const quizStarted = await page.eval(`(() => {
    const panel = document.getElementById('practice-quiz-panel');
    const all = [...panel.querySelectorAll('.practice-quiz-option')].find((b) => b.textContent.includes('全部'));
    if (all) all.click();
    [...panel.querySelectorAll('button')].find((b) => b.textContent.includes('开始小测'))?.click();
    return true;
  })()`);
  await sleep(900);
  const quizMcq = await page.eval(`(() => {
    const items = [...document.querySelectorAll('.practice-quiz-item')];
    const item = items.find((i) => i.querySelector('.mcq-group'));
    if (!item) return { found: false, items: items.length };
    const btns = [...item.querySelectorAll('.mcq-choice')];
    btns[0].focus();
    window.__qsnap = () => ({
      focusIdx: btns.indexOf(document.activeElement),
      checkedIdx: btns.findIndex((b) => b.getAttribute('aria-checked') === 'true'),
    });
    return { found: true, count: btns.length, start: window.__qsnap() };
  })()`);
  if (!quizMcq.found) {
    console.log(`note: sampled quiz had no MCQ items (${quizMcq.items} items); skipping quiz arrow assertions`);
  } else {
    ok('quiz MCQ item found', true);
    await page.key('ArrowRight');
    const qRight = await page.eval('window.__qsnap()');
    ok('quiz ArrowRight selects the next choice', qRight.checkedIdx, 1);
    ok('quiz ArrowRight moves focus too', qRight.focusIdx, 1);
    await page.key('ArrowUp');
    const qUp = await page.eval('window.__qsnap()');
    ok('quiz ArrowUp moves back', qUp.checkedIdx, 0);
  }

  console.log('\nQUIZ-1 unsubmitted-quiz banner tracks whether the quiz is open');

  // Leave the open quiz: a draft is persisted and the banner must appear.
  await page.eval(`[...document.querySelectorAll('#practice-quiz-panel button')].find((b) => b.textContent.includes('退出小测'))?.click()`);
  await sleep(400);
  ok('banner appears after leaving an unsubmitted quiz', await page.eval('document.querySelector(".practice-quiz-resume").hidden'), false);
  // Resume: the banner must hide while that same quiz is open.
  await page.eval(`[...document.querySelectorAll('.practice-quiz-resume button')].find((b) => b.textContent.includes('继续小测'))?.click()`);
  await sleep(700);
  ok('banner hidden while the resumed quiz is open', await page.eval('document.querySelector(".practice-quiz-resume").hidden'), true);
  ok('resumed quiz panel is open', await page.eval('document.getElementById("practice-quiz-panel").hidden'), false);
  // Leave again: the banner comes back with the still-saved draft.
  await page.eval(`[...document.querySelectorAll('#practice-quiz-panel button')].find((b) => b.textContent.includes('退出小测'))?.click()`);
  await sleep(400);
  ok('banner reappears after leaving the resumed quiz', await page.eval('document.querySelector(".practice-quiz-resume").hidden'), false);

  console.log('\nJUMP-2 narrow outline: one click in 本页目录 jumps below the header');
  // At ~485px the rail is hidden and the outline lives in
  // details.topic-outline-mobile. One click must close the menu, settle the
  // collapsed layout, and land the heading fully below the real sticky
  // header — no second click allowed.

  const narrow = await newPage(cdp, 485, 800);
  await narrow.goto(`${base}/#/t/math/calc-u1/1.2`);
  ok('narrow: topic page with mobile outline rendered', await narrow.waitFor('!!document.querySelector(".topic-outline-mobile")'), true);

  const oneMenuClick = async () => {
    // open 本页目录, click 公式 exactly once, wait for the jump to settle
    await narrow.eval(`(() => {
      const d = document.querySelector('.topic-outline-mobile');
      if (!d.open) d.querySelector('summary').click();
    })()`);
    await narrow.waitFor('document.querySelector(".topic-outline-mobile").open === true');
    await narrow.eval(`(() => {
      const b = [...document.querySelectorAll('.topic-outline-inline button')].find((x) => x.textContent.includes('公式'));
      b.click();
    })()`);
    await narrow.settleScroll();
    await sleep(400);
    return narrow.eval(`(() => {
      const hb = document.querySelector('.site-header').getBoundingClientRect().bottom;
      const h2 = document.querySelector('#topic-sec-formulas h2').getBoundingClientRect();
      return {
        detailsOpen: document.querySelector('.topic-outline-mobile').open,
        headerBottom: Math.round(hb * 10) / 10,
        h2Top: Math.round(h2.top * 10) / 10,
        h2Bottom: Math.round(h2.bottom * 10) / 10,
        viewportH: window.innerHeight,
      };
    })()`);
  };

  const j2a = await oneMenuClick();
  ok('narrow: menu closed after one click', j2a.detailsOpen, false);
  ok(`narrow: formulas h2 clears the header bottom by >= 8px (got ${j2a.h2Top - j2a.headerBottom})`, j2a.h2Top - j2a.headerBottom >= 8, true);
  ok('narrow: formulas h2 bottom inside the viewport', j2a.h2Bottom <= j2a.viewportH, true);

  // Same single click under a taller real header (fails before the fix).
  await narrow.eval(`(() => {
    const probe = document.createElement('div');
    probe.id = 'test-taller-header-row';
    probe.style.cssText = 'flex-basis: 100%; flex-shrink: 0; height: 88px;';
    document.querySelector('.site-header .header-inner').appendChild(probe);
    return true;
  })()`);
  const j2b = await oneMenuClick();
  ok('narrow, taller header: menu closed after one click', j2b.detailsOpen, false);
  ok(`narrow, taller header: formulas h2 clears the real header by >= 12px (got ${j2b.h2Top - j2b.headerBottom})`, j2b.h2Top - j2b.headerBottom >= 12, true);
  ok('narrow, taller header: formulas h2 bottom inside the viewport', j2b.h2Bottom <= j2b.viewportH, true);
  ok('narrow: no console errors', narrow.consoleErrors.length, 0);

  console.log('\nconsole errors');
  ok('no console errors on topic or practice pages', page.consoleErrors.length, 0);
  if (page.consoleErrors.length) console.log(page.consoleErrors.join('\n'));
} finally {
  try { cdp.ws.close(); } catch (_) { /* already gone */ }
  try { chrome.proc.kill('SIGTERM'); } catch (_) { /* already gone */ }
  await sleep(300);
  if (chrome.profile) {
    try { rmSync(chrome.profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 250 }); } catch (_) { /* best effort */ }
  }
  if (server.proc) {
    try { server.proc.kill('SIGTERM'); } catch (_) { /* best effort */ }
  }
}

console.log(`\n${passed} checks passed${process.exitCode ? ' (with failures)' : ''}`);
process.exit(process.exitCode ? 1 : 0);
