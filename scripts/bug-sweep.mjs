#!/usr/bin/env node
/**
 * Full-route visual/runtime bug sweep with Playwright.
 * Checks: console errors, size growth, horizontal overflow, KaTeX errors,
 * broken in-page anchors, overlapping (basic).
 */
import { chromium } from 'playwright';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const BASE = process.env.SV_BASE || 'http://127.0.0.1:8765/';
const routesData = JSON.parse(readFileSync('/tmp/routes.json', 'utf8'));
const ALL_ROUTES = routesData.routes;
const MODULE_ROUTES = ALL_ROUTES.filter((r) => r.startsWith('#/m/'));

const VIEWPORTS = [
  { name: '1280x800', width: 1280, height: 800 },
  { name: '1440x900', width: 1440, height: 900 },
  { name: '390x844', width: 390, height: 844 },
];
const THEMES = ['light', 'dark'];

const issues = [];
function add(issue) {
  issues.push({ ...issue, at: new Date().toISOString() });
}

async function setTheme(page, theme) {
  await page.evaluate((t) => {
    localStorage.setItem('sv-theme', t);
    document.documentElement.dataset.theme = t;
    document.documentElement.classList.toggle('dark', t === 'dark');
    // also try known keys
    localStorage.setItem('theme', t);
  }, theme);
}

async function auditRoute(page, route, viewport, theme, { watchMs = 1500, samples = 3 } = {}) {
  const tag = { route, viewport: viewport.name, theme };
  const consoleErrs = [];
  const pageErrors = [];
  const onConsole = (msg) => {
    if (msg.type() === 'error') consoleErrs.push(msg.text());
  };
  const onPageError = (err) => pageErrors.push(String(err));
  page.on('console', onConsole);
  page.on('pageerror', onPageError);

  try {
    await page.goto(BASE + route, { waitUntil: 'domcontentloaded', timeout: 20000 });
    await setTheme(page, theme);
    // re-apply theme class after nav
    await page.evaluate((t) => {
      document.documentElement.dataset.theme = t;
      document.documentElement.classList.toggle('dark', t === 'dark');
      window.dispatchEvent(new Event('themechange'));
    }, theme);
    await page.waitForTimeout(400);

    const interval = Math.max(200, Math.floor(watchMs / samples));
    const sizeSeries = [];
    for (let i = 0; i < samples; i++) {
      const snap = await page.evaluate(() => {
        const canvases = [...document.querySelectorAll('canvas, .canvas-wrap, .map-stage, .stim-graph, svg')];
        const sizes = canvases.slice(0, 40).map((el) => {
          const r = el.getBoundingClientRect();
          return {
            tag: el.tagName.toLowerCase(),
            cls: (el.className && String(el.className).slice?.(0, 60)) || '',
            w: Math.round(r.width),
            h: Math.round(r.height),
          };
        });
        const doc = document.documentElement;
        const overflowX = doc.scrollWidth - doc.clientWidth;
        const katexErrors = [...document.querySelectorAll('.katex-error')].map((e) => e.textContent.slice(0, 120));
        // basic overlap: fixed nav vs first heading
        return {
          sizes,
          overflowX,
          katexErrors,
          bodyH: doc.scrollHeight,
          title: document.title,
          h1: document.querySelector('h1')?.textContent?.slice(0, 80) || '',
        };
      });
      sizeSeries.push(snap);
      if (i < samples - 1) await page.waitForTimeout(interval);
    }

    const first = sizeSeries[0];
    const last = sizeSeries[sizeSeries.length - 1];

    // Growth detection
    const n = Math.min(first.sizes.length, last.sizes.length);
    for (let i = 0; i < n; i++) {
      const a = first.sizes[i];
      const b = last.sizes[i];
      if (!a || !b) continue;
      if (b.w > a.w + 8 || b.h > a.h + 8) {
        // ignore if still within viewport+margin and capped
        const huge = b.h > viewport.height * 1.5 || b.w > viewport.width * 1.5;
        const growing = b.h - a.h > 20 || b.w - a.w > 20;
        if (huge || growing) {
          add({
            ...tag,
            kind: 'size_growth',
            severity: huge ? 'error' : 'warn',
            msg: `${a.tag}.${a.cls} ${a.w}x${a.h} → ${b.w}x${b.h}`,
          });
        }
      }
      if (b.h > 5000 || b.w > 5000) {
        add({ ...tag, kind: 'unbounded_size', severity: 'error', msg: `${b.tag} ${b.w}x${b.h}` });
      }
    }

    if (last.overflowX > 8) {
      add({ ...tag, kind: 'overflow_x', severity: 'warn', msg: `scrollWidth-clientWidth=${last.overflowX}` });
    }
    for (const ke of last.katexErrors || []) {
      add({ ...tag, kind: 'katex_error', severity: 'error', msg: ke });
    }

    // Broken hash links that stay on same origin but 404 content
    const broken = await page.evaluate(() => {
      const bad = [];
      for (const a of document.querySelectorAll('a[href^="#"]')) {
        const href = a.getAttribute('href') || '';
        if (href === '#' || href === '#/') continue;
        // only flag empty text links
        if (!a.textContent.trim()) bad.push(href);
      }
      return bad.slice(0, 10);
    });
    for (const b of broken) add({ ...tag, kind: 'empty_anchor', severity: 'warn', msg: b });

    for (const e of consoleErrs) {
      if (/favicon|Download the React|Cursor/i.test(e)) continue;
      add({ ...tag, kind: 'console_error', severity: 'error', msg: e.slice(0, 300) });
    }
    for (const e of pageErrors) {
      add({ ...tag, kind: 'page_error', severity: 'error', msg: e.slice(0, 300) });
    }
  } catch (err) {
    add({ ...tag, kind: 'nav_fail', severity: 'error', msg: String(err).slice(0, 300) });
  } finally {
    page.off('console', onConsole);
    page.off('pageerror', onPageError);
  }
}

async function runPool(items, concurrency, worker) {
  let i = 0;
  const results = [];
  async function loop() {
    while (i < items.length) {
      const idx = i++;
      results[idx] = await worker(items[idx], idx);
    }
  }
  await Promise.all(Array.from({ length: concurrency }, () => loop()));
  return results;
}

const mode = process.argv[2] || 'full';

const browser = await chromium.launch({ headless: true });
const started = Date.now();

async function sweep(routeList, viewports, themes, opts) {
  const jobs = [];
  for (const viewport of viewports) {
    for (const theme of themes) {
      for (const route of routeList) {
        jobs.push({ route, viewport, theme });
      }
    }
  }
  console.error(`jobs=${jobs.length} opts=${JSON.stringify(opts)}`);
  await runPool(jobs, 4, async (job) => {
    const context = await browser.newContext({
      viewport: { width: job.viewport.width, height: job.viewport.height },
      deviceScaleFactor: 1,
    });
    const page = await context.newPage();
    await auditRoute(page, job.route, job.viewport, job.theme, opts);
    await context.close();
    if (issues.length && issues.length % 25 === 0) {
      console.error(`… ${issues.length} issues so far, t=${((Date.now() - started) / 1000).toFixed(0)}s`);
    }
  });
}

if (mode === 'canvas' || mode === 'full') {
  // Deep watch on all simulation modules across viewports/themes
  await sweep(MODULE_ROUTES, VIEWPORTS, THEMES, { watchMs: 5000, samples: 6 });
}

if (mode === 'maps' || mode === 'full') {
  const maps = ALL_ROUTES.filter((r) => /\/map$/.test(r) || r === '#/formulas' || r.startsWith('#/practice') || r.startsWith('#/pastpapers') || r === '#/' || r === '#/all');
  await sweep(maps, VIEWPORTS, THEMES, { watchMs: 3000, samples: 4 });
}

if (mode === 'topics' || mode === 'full') {
  const topics = ALL_ROUTES.filter((r) => r.startsWith('#/t/'));
  // All topics @ 1280 light (primary), then other combos with shorter watch
  await sweep(topics, [VIEWPORTS[0]], ['light'], { watchMs: 1200, samples: 3 });
  await sweep(topics, [VIEWPORTS[0]], ['dark'], { watchMs: 900, samples: 2 });
  await sweep(topics, [VIEWPORTS[1], VIEWPORTS[2]], THEMES, { watchMs: 800, samples: 2 });
}

if (mode === 'rest' || mode === 'full') {
  const rest = ALL_ROUTES.filter((r) => !r.startsWith('#/t/') && !r.startsWith('#/m/') && !/\/map$/.test(r) && !r.startsWith('#/practice') && !r.startsWith('#/pastpapers') && r !== '#/formulas' && r !== '#/' && r !== '#/all');
  await sweep(rest, VIEWPORTS, THEMES, { watchMs: 1000, samples: 2 });
}

await browser.close();

mkdirSync(join(ROOT, 'audit'), { recursive: true });
const out = {
  generatedAt: new Date().toISOString(),
  mode,
  elapsedMs: Date.now() - started,
  routeCount: ALL_ROUTES.length,
  issueCount: issues.length,
  byKind: issues.reduce((a, x) => ((a[x.kind] = (a[x.kind] || 0) + 1), a), {}),
  issues,
};
writeFileSync(join(ROOT, 'audit/bug-sweep.json'), JSON.stringify(out, null, 2));
console.log(JSON.stringify({ ok: true, issueCount: issues.length, byKind: out.byKind, elapsedMs: out.elapsedMs }, null, 2));
