#!/usr/bin/env node
/**
 * Computed-style probe + regression test for first-occurrence vocabulary chips.
 *
 * SC4 long-page probe found the chips on #/t/mech/mech-u1/1.1 rendering as
 * Chrome UA default buttons. Root cause: css/topic-extras.css scoped the chip
 * (and pager / dont-write) rules as `.topic-page .topic-vocab-term` etc., but
 * renderTopicPage (js/topic-page.js) builds `.topic-layout` with no
 * `.topic-page` ancestor — that class only exists on the credits article
 * (js/pages.js). The dead `.topic-page` prefix was dropped so the rules match
 * real topic pages; these element classes are instantiated only by
 * js/topic-page.js, so the credits page cannot be affected.
 *
 * Checks (light + dark, 1280x900, throwaway port + throwaway Chrome profile):
 *   VOCAB-1  chips exist on mech-u1/1.1 and match the unscoped rule
 *   VOCAB-2  intended inline hint: inline box, transparent bg, dotted underline
 *   VOCAB-3  :hover turns the underline solid and boosts the color
 *   VOCAB-4  click opens the tip, [aria-expanded="true"] tints the chip,
 *            the tip close button keeps a >=44px hit target, Escape closes
 *   VOCAB-5  keyboard focus matches :focus-visible and reopens the tip
 *   VOCAB-6  dark theme: chip contrast >= 7:1, horizontal overflow stays 0
 *   VOCAB-7  .topic-dont-write badge styled on #/t/math/calc-u1/1.2 (PHYS-08)
 *   VOCAB-8  .topic-pager label + disabled-title styles apply (mech 1.1)
 *   VOCAB-9  credits page unaffected: renders, zero chip/pager/badge elements
 *   VOCAB-10 no console errors anywhere
 *
 * Dependency-free: drives a throwaway headless Chrome over the CDP WebSocket
 * (global in Node >= 22) and spawns scripts/serve-dev.py on a free port.
 * Never attaches to or kills shared deployment ports (see RESERVED below).
 *
 * Run:    node scripts/test-topic-vocab.mjs
 * Env:    CHROME_PATH (default /usr/bin/google-chrome), SV_BASE (skip server
 *         spawn and test an already-running deployment).
 */

import { spawn } from 'node:child_process';
import { existsSync, mkdtempSync, rmSync } from 'node:fs';
import { createServer } from 'node:net';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const CHROME = process.env.CHROME_PATH || '/usr/bin/google-chrome';
const TMP = '/tmp/opencode';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/* Ports owned by other deployments/probes — never serve on or attach to these. */
const RESERVED = new Set([9225, 9231, 8766, 8767, 8768, 8814, 8830]);

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
  if (process.env.SV_BASE) return { base: process.env.SV_BASE, proc: null };
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
  if (!existsSync(CHROME)) {
    throw new Error(`chrome not found at ${CHROME} (set CHROME_PATH)`);
  }
  const cdpPort = await nonReservedPort();
  const profile = mkdtempSync(join(TMP, 'vocab-probe-'));
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
    async goto(url, marker) {
      await S('Page.navigate', { url });
      for (let i = 0; i < 80; i++) {
        await sleep(100);
        if (await this.eval(`document.readyState === 'complete' && !!document.querySelector(${JSON.stringify(marker ?? '#main')})`)) return;
      }
      throw new Error(`page did not settle: ${url}`);
    },
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
    async key(kind, { shift = false } = {}) {
      const vk = kind.length === 1 ? kind.toUpperCase().charCodeAt(0) : 9;
      const base = {
        key: kind,
        code: kind.length === 1 ? `Key${kind.toUpperCase()}` : kind,
        windowsVirtualKeyCode: vk,
        nativeVirtualKeyCode: vk,
        modifiers: shift ? 8 : 0,
      };
      await S('Input.dispatchKeyEvent', { type: 'keyDown', ...base });
      await S('Input.dispatchKeyEvent', { type: 'keyUp', ...base });
      await sleep(80);
    },
    async mouseMove(x, y) {
      await S('Input.dispatchMouseEvent', { type: 'mouseMoved', x, y, button: 'none', pointerType: 'mouse' });
      await sleep(120);
    },
  };
}

/* ---------- the probe ---------- */

const evidence = {};

const HELPERS = `
  window.__varColor = (name) => {
    const d = document.createElement('div');
    d.style.color = 'var(' + name + ')';
    document.body.appendChild(d);
    const v = getComputedStyle(d).color;
    d.remove();
    return v;
  };
  window.__chip = () => {
    const c = document.querySelector('.topic-vocab-term');
    if (!c) return null;
    const cs = getComputedStyle(c);
    const r = c.getBoundingClientRect();
    return {
      text: c.textContent.trim(),
      display: cs.display,
      height: Math.round(r.height * 10) / 10,
      padding: cs.padding,
      borderTop: cs.borderTopWidth + ' ' + cs.borderTopStyle + ' ' + cs.borderTopColor,
      borderBottom: cs.borderBottomWidth + ' ' + cs.borderBottomStyle + ' ' + cs.borderBottomColor,
      background: cs.backgroundColor,
      color: cs.color,
      cursor: cs.cursor,
      fontSize: cs.fontSize,
      borderRadius: cs.borderRadius,
      matchesUnscoped: c.matches('.topic-vocab-term'),
      matchesScoped: c.matches('.topic-page .topic-vocab-term'),
      insideTopicPageRoot: !!c.closest('.topic-page'),
      vocabRulesMatching: (() => {
        const out = [];
        const walk = (rules) => {
          for (const rule of rules) {
            if (rule.type === CSSRule.MEDIA_RULE) { walk(rule.cssRules); continue; }
            if (!rule.selectorText || !rule.selectorText.includes('topic-vocab-term')) continue;
            if (rule.selectorText.includes('topic-vocab-tip')) continue;
            out.push(rule.selectorText + ' => ' + c.matches(rule.selectorText));
          }
        };
        for (const sheet of document.styleSheets) {
          try { walk(sheet.cssRules); } catch (_) { /* cross-origin */ }
        }
        return out;
      })(),
    };
  };
  window.__varFont = (name) => {
    const d = document.createElement('div');
    d.style.fontFamily = 'var(' + name + ')';
    document.body.appendChild(d);
    const v = getComputedStyle(d).fontFamily;
    d.remove();
    return v;
  };
  window.__contrast = (el) => {
    const toRGB = (s) => {
      const m = String(s).match(/rgba?\\(([\\d.]+),\\s*([\\d.]+),\\s*([\\d.]+)(?:,\\s*([\\d.]+))?\\)/);
      if (!m) return null;
      return [+m[1], +m[2], +m[3], m[4] === undefined ? 1 : +m[4]];
    };
    const cs = getComputedStyle(el);
    const fg = toRGB(cs.color);
    const stack = [];
    let node = el;
    while (node) {
      const c = toRGB(getComputedStyle(node).backgroundColor);
      if (c) { stack.push(c); if (c[3] >= 1) break; }
      node = node.parentElement;
    }
    if (!stack.length || stack[stack.length - 1][3] < 1) stack.push(toRGB(getComputedStyle(document.body).backgroundColor) || [255, 255, 255, 1]);
    let bg = stack[stack.length - 1].slice(0, 3);
    for (let i = stack.length - 2; i >= 0; i--) {
      const a = stack[i][3];
      bg = bg.map((v, k) => Math.round(stack[i][k] * a + v * (1 - a)));
    }
    const lum = (rgb) => {
      const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
      return 0.2126 * f(rgb[0]) + 0.7152 * f(rgb[1]) + 0.0722 * f(rgb[2]);
    };
    const l1 = lum(fg), l2 = lum(bg);
    return {
      fg: cs.color,
      bg: 'rgb(' + bg.join(', ') + ')',
      ratio: Math.round(((Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05)) * 100) / 100,
    };
  };
  true;
`;

const server = await startServer();
const chrome = await startChrome();
const cdp = await connect(chrome.cdpPort);
const page = await newPage(cdp, 1280, 900);
const { base } = server;

try {
  console.log('\nVOCAB-1 mech 1.1 renders first-occurrence chips');
  await page.goto(`${base}/#/t/mech/mech-u1/1.1`);
  await page.eval(HELPERS);
  const count = await page.waitFor('document.querySelectorAll(".topic-vocab-term").length');
  ok('topic page rendered with chips', (count ?? 0) >= 8, true);
  evidence.chipCount = count;
  const snap1 = await page.eval('window.__chip()');
  evidence.light = snap1;
  ok('chip matches the unscoped .topic-vocab-term rule', snap1.matchesUnscoped, true);
  ok('no .topic-page ancestor on real topic pages (root cause confirmed)', snap1.insideTopicPageRoot, false);

  console.log('\nVOCAB-2 chips are inline hints, not UA default buttons');
  // Chrome normalizes `display: inline` on <button> to inline-block (verified:
  // even a direct inline style computes inline-block on buttons, inline on divs).
  // The intended inline-hint look comes from the reset properties instead:
  // transparent bg, 0 padding/border, inherited font + line-height, so the
  // chip occupies exactly one text line box (height < 32px).
  ok('chip is an inline-level box (Chrome reports buttons as inline-block)', snap1.display, 'inline-block');
  ok('transparent background', snap1.background, 'rgba(0, 0, 0, 0)');
  ok('dotted 1px bottom border', `${snap1.borderBottom}`.startsWith('1px dotted'), true);
  ok('no outset top border', snap1.borderTop.startsWith('0px'), true);
  ok('cursor help', snap1.cursor, 'help');
  ok('square corners', snap1.borderRadius, '0px');
  ok('inline height (< 32px, not a ~36px UA button)', snap1.height < 32, true);

  console.log('\nVOCAB-3 hover turns the underline solid');
  const center = await page.eval('(() => { const r = document.querySelector(".topic-vocab-term").getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; })()');
  await page.mouseMove(center.x, center.y);
  const hovered = await page.eval('window.__chip()');
  evidence.hover = { borderBottom: hovered.borderBottom, color: hovered.color };
  ok('hover: underline becomes solid', hovered.borderBottom.startsWith('1px solid'), true);
  ok('hover: color becomes --text-strong', hovered.color, await page.eval('window.__varColor("--text-strong")'));

  console.log('\nVOCAB-4 click opens the tip and tints the expanded chip');
  await page.eval('document.querySelector(".topic-vocab-term").click()');
  await page.waitFor('document.querySelector(".topic-vocab-tip")');
  const expanded = await page.eval(`(() => {
    const c = document.querySelector('.topic-vocab-term');
    const tip = document.querySelector('.topic-vocab-tip');
    const close = tip.querySelector('.topic-vocab-tip-close');
    const cr = close.getBoundingClientRect();
    const tcs = getComputedStyle(tip);
    return {
      expanded: c.getAttribute('aria-expanded'),
      chipBg: getComputedStyle(c).backgroundColor,
      tipPosition: tcs.position,
      tipRadius: tcs.borderRadius,
      closeBox: { w: Math.round(cr.width), h: Math.round(cr.height) },
      closeLabel: close.getAttribute('aria-label'),
    };
  })()`);
  evidence.expanded = expanded;
  ok('aria-expanded true', expanded.expanded, 'true');
  ok('expanded chip is tinted (not transparent)', expanded.chipBg !== 'rgba(0, 0, 0, 0)', true);
  ok('tip is fixed-position overlay', expanded.tipPosition, 'fixed');
  ok('tip keeps square corners', expanded.tipRadius, '0px');
  ok('tip close button >= 44x44 hit target', expanded.closeBox.w >= 44 && expanded.closeBox.h >= 44, true);
  await page.key('Escape');
  ok('Escape closes the tip', await page.eval('!document.querySelector(".topic-vocab-tip")'), true);
  ok('aria-expanded back to false', await page.eval('document.querySelector(".topic-vocab-term").getAttribute("aria-expanded")'), 'false');

  console.log('\nVOCAB-5 keyboard focus matches :focus-visible and reopens the tip');
  await sleep(450); // past the post-close focus-suppress window
  await page.key('Tab');
  await page.key('Tab', { shift: true });
  const focused = await page.eval(`(() => {
    const a = document.activeElement;
    if (!a || !a.classList.contains('topic-vocab-term')) return { onChip: false };
    const cs = getComputedStyle(a);
    return {
      onChip: true,
      focusVisible: a.matches(':focus-visible'),
      borderBottom: cs.borderBottomWidth + ' ' + cs.borderBottomStyle,
      tipOpen: !!document.querySelector('.topic-vocab-tip'),
    };
  })()`);
  evidence.focus = focused;
  ok('focus returns to a chip by keyboard', focused.onChip, true);
  ok(':focus-visible matches on the chip', focused.focusVisible, true);
  ok('focus-visible: underline solid', focused.borderBottom, '1px solid');
  ok('focus reopens the tip', focused.tipOpen, true);
  await page.key('Escape');
  await sleep(100);

  console.log('\nVOCAB-6 dark theme: contrast and overflow');
  const themeBefore = await page.eval('document.documentElement.getAttribute("data-theme") || "light"');
  if (themeBefore === 'dark') await page.eval('document.getElementById("theme-toggle").click()');
  await page.eval('document.getElementById("theme-toggle").click()');
  ok('theme switched to dark', await page.eval('document.documentElement.getAttribute("data-theme")'), 'dark');
  // Resting state for measurement: park the mouse away (the VOCAB-3 hover left
  // it over the chip) and drop focus, so :hover/:focus-visible do not tint the
  // snapshot. html/body transition background-color and color over 0.25s
  // (main.css), so wait for the settled contrast instead of sampling mid-fade.
  await page.mouseMove(1200, 850);
  await page.eval('document.activeElement && document.activeElement.blur()');
  const settled = await page.waitFor('window.__contrast(document.querySelector(".topic-vocab-term")).ratio >= 7');
  ok('dark bg/color transition settled (chip contrast >= 7:1)', !!settled, true);
  await page.waitFor('document.querySelectorAll(".topic-vocab-term").length >= 8');
  const snapDark = await page.eval('window.__chip()');
  const darkContrast = await page.eval('window.__contrast(document.querySelector(".topic-vocab-term"))');
  const overflow = await page.eval('document.documentElement.scrollWidth - document.documentElement.clientWidth');
  evidence.dark = snapDark;
  evidence.darkContrast = darkContrast;
  evidence.overflowPx = overflow;
  ok('dark: chips still styled (inline-block, dotted)', snapDark.display === 'inline-block' && snapDark.borderBottom.startsWith('1px dotted'), true);
  ok(`dark: chip contrast ${darkContrast.ratio}:1 >= 7:1`, darkContrast.ratio >= 7, true);
  ok('dark: horizontal overflow stays 0', overflow, 0);
  await page.eval('document.getElementById("theme-toggle").click()'); // back to light for the rest

  console.log('\nVOCAB-7 dont-write badge styled (calc-u1/1.2, PHYS-08)');
  await page.goto(`${base}/#/t/math/calc-u1/1.2`);
  await page.eval(HELPERS);
  await page.waitFor('document.querySelector(".topic-dont-write")');
  const badge = await page.eval(`(() => {
    const b = document.querySelector('.topic-dont-write');
    if (!b) return null;
    const cs = getComputedStyle(b);
    return {
      display: cs.display,
      border: cs.borderTopWidth + ' ' + cs.borderTopStyle + ' ' + cs.borderTopColor,
      fontFamily: cs.fontFamily,
      monoFont: window.__varFont('--mono'),
      matchesUnscoped: b.matches('.topic-dont-write'),
    };
  })()`);
  evidence.dontWrite = badge;
  ok('badge present', badge !== null, true);
  ok('badge is a bordered inline-block', badge.display, 'inline-block');
  ok('badge border 1px solid danger color', badge.border.startsWith('1px solid'), true);
  ok('badge uses the mono font (--mono)', badge.fontFamily, badge.monoFont);

  console.log('\nVOCAB-8 topic pager styles apply (first mech topic = disabled prev)');
  // mech order: prep-hs, prep-ap1, prep-math, u1..u7 (modules/registry.js) —
  // mech-prep-hs/P1.1 is the first topic, so its prev link is disabled.
  await page.goto(`${base}/#/t/mech/mech-prep-hs/P1.1`);
  await page.eval(HELPERS);
  const reachedFirst = await page.waitFor('document.querySelector(".topic-pager .pager-link.prev.disabled")');
  ok('first mech topic has a disabled prev link', !!reachedFirst, true);
  const pager = await page.eval(`(() => {
    const label = document.querySelector('.topic-pager .pager-label');
    const title = document.querySelector('.topic-pager .pager-link.prev.disabled .pager-title');
    if (!label || !title) return null;
    const lcs = getComputedStyle(label);
    const tcs = getComputedStyle(title);
    return {
      route: location.hash,
      labelFontSize: lcs.fontSize,
      titleFontWeight: tcs.fontWeight,
      titleColor: tcs.color,
      textDim: window.__varColor('--text-dim'),
    };
  })()`);
  evidence.pager = pager;
  ok('pager label + disabled title elements present', pager !== null, true);
  const rootFs = await page.eval('parseFloat(getComputedStyle(document.documentElement).fontSize)');
  ok('pager label 0.6rem (topic-extras, not main.css 0.62rem)', pager && Math.abs(parseFloat(pager.labelFontSize) - 0.6 * rootFs) < 0.05, true);
  ok('disabled pager title weight 500', pager && pager.titleFontWeight, '500');
  ok('disabled pager title color is --text-dim', pager && pager.titleColor, pager && pager.textDim);

  console.log('\nVOCAB-9 credits page unaffected');
  await page.goto(`${base}/#/credits`, '.credits-page');
  await page.waitFor('document.querySelector(".credits-page")');
  const credits = await page.eval(`(() => {
    return {
      root: !!document.querySelector('.topic-page.credits-page'),
      chips: document.querySelectorAll('.topic-vocab-term').length,
      pagers: document.querySelectorAll('.topic-pager').length,
      badges: document.querySelectorAll('.topic-dont-write').length,
    };
  })()`);
  evidence.credits = credits;
  ok('credits article keeps its .topic-page root', credits.root, true);
  ok('credits has no vocab chips', credits.chips, 0);
  ok('credits has no topic pager', credits.pagers, 0);
  ok('credits has no dont-write badges', credits.badges, 0);

  console.log('\nVOCAB-10 console');
  ok('no console errors anywhere', page.consoleErrors.length, 0);
  if (page.consoleErrors.length) console.log(page.consoleErrors.join('\n'));
} finally {
  try { cdp.ws.close(); } catch (_) { /* already gone */ }
  try { chrome.proc.kill('SIGTERM'); } catch (_) { /* already gone */ }
  await sleep(300);
  if (chrome.profile) {
    try { rmSync(chrome.profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 250 }); } catch (_) { /* best effort */ }
  }
  if (server.proc) {
    try { server.proc.kill('SIGTERM'); } catch (_) { /* already gone */ }
  }
}

console.log(`\n${passed} checks passed${process.exitCode ? ' (with failures)' : ''}`);
console.log('\nEVIDENCE ' + JSON.stringify(evidence, null, 2));
process.exit(process.exitCode ? 1 : 0);
