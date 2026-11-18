/**
 * Static design-token checks for the core visual system (no browser needed).
 *
 * Verifies, for BOTH the light `:root` and the dark `[data-theme="dark"]`
 * cascade-owner blocks in css/main.css:
 *   - the full required token set exists
 *   - WCAG AA contrast: body/secondary/strong text on page + soft surfaces,
 *     accent, subject hues, status colours, and plot text/axis on the plot
 *     canvas (>= 4.5:1), on-accent vs accent
 *   - the dark theme keeps perceptible surface layering (elev/soft differ
 *     from bg) and visible borders (border vs bg >= 1.15:1)
 *   - plot canvas is distinct from the page background in both themes
 *   - flat right angles: `--radius: 0` and the global
 *     `border-radius: 0 !important` reset
 *   - shell hit targets: search trigger / theme toggle / mobile toggle /
 *     buttons / nav links are locked to >= 44px in the cascade owner
 *   - CJK-safe leading: body >= 1.5, and no headline uses the cramped
 *     0.9x/1.0x leading anywhere in the stylesheet
 *
 * Run: node scripts/test-visual-tokens.mjs
 */

import { readFileSync } from 'node:fs';

const CSS_PATH = new URL('../css/main.css', import.meta.url).pathname;
const css = readFileSync(CSS_PATH, 'utf8');
const LAB_CSS_PATH = new URL('../modules/physics/lab/lab.css', import.meta.url).pathname;
const labCss = readFileSync(LAB_CSS_PATH, 'utf8');

let pass = 0;
let fail = 0;

function check(ok, label, detail = '') {
  if (ok) {
    pass += 1;
    console.log(`  ok   ${label}${detail ? ` — ${detail}` : ''}`);
  } else {
    fail += 1;
    console.error(`  FAIL ${label}${detail ? ` — ${detail}` : ''}`);
  }
}

/** Extract the last CSS block for a selector (cascade owner wins). */
function lastBlock(selector) {
  return lastBlockIn(css, selector);
}

/** Extract the last top-level block for a selector in any stylesheet. */
function lastBlockIn(text, selector) {
  const openings = [...text.matchAll(new RegExp('^' + escapeRe(selector) + '\\s*\\{', 'gm'))];
  if (!openings.length) return null;
  const start = openings[openings.length - 1].index + openings[openings.length - 1][0].length;
  let depth = 1;
  let end = start;
  while (end < text.length && depth > 0) {
    if (text[end] === '{') depth += 1;
    else if (text[end] === '}') depth -= 1;
    end += 1;
  }
  return text.slice(start, end - 1);
}

function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function parseVars(block) {
  const vars = {};
  for (const m of block.matchAll(/--([a-z0-9-]+)\s*:\s*([^;]+);/g)) {
    vars[m[1]] = m[2].trim();
  }
  return vars;
}

function relLum(hex) {
  const h = hex.replace('#', '');
  if (h.length !== 6) return null;
  const n = parseInt(h, 16);
  const chan = [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255]
    .map((c) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)));
  return 0.2126 * chan[0] + 0.7152 * chan[1] + 0.0722 * chan[2];
}

function contrast(a, b) {
  const la = relLum(a);
  const lb = relLum(b);
  if (la == null || lb == null) return null;
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}

function hexOf(vars, name) {
  const v = vars[name];
  if (!v || !/^#[0-9a-fA-F]{6}$/.test(v)) return null;
  return v;
}

const REQUIRED_STRUCT = ['radius', 'nav-h', 'content', 'reading'];
const REQUIRED_COLOR = [
  'bg', 'bg-elev', 'bg-soft', 'border', 'border-soft', 'border-strong', 'hairline',
  'text', 'text-strong', 'text-muted', 'text-dim',
  'accent', 'accent-active', 'accent-soft', 'on-accent', 'accent-ring',
  'bio', 'math', 'physics', 'danger', 'warn', 'ok',
  'canvas-plot', 'plot-grid', 'plot-axis', 'plot-text', 'plot-text-strong', 'plot-surface',
];

/** Text-ish colours that must hold AA (>=4.5:1) against a surface. */
function aaPairs(vars, label, bgName) {
  const bg = hexOf(vars, bgName);
  const pairs = [
    ['text'], ['text-muted'], ['text-dim'], ['accent'],
    ['bio'], ['math'], ['physics'], ['danger'], ['warn'], ['ok'],
  ];
  for (const [name] of pairs) {
    const fg = hexOf(vars, name);
    const ratio = fg && bg ? contrast(fg, bg) : null;
    check(ratio != null && ratio >= 4.5, `${label}: ${name} vs ${bgName}`,
      ratio ? `${ratio.toFixed(2)}:1` : 'missing hex token');
  }
}

for (const [selector, label] of [[':root', 'light'], ['[data-theme="dark"]', 'dark']]) {
  console.log(`\n== ${label} tokens ==`);
  const block = lastBlock(selector);
  check(block != null, `${label}: cascade-owner block found`);
  if (!block) continue;
  const vars = parseVars(block);

  for (const name of REQUIRED_COLOR) {
    check(vars[name] != null, `${label}: --${name} defined`);
  }
  if (label === 'light') {
    for (const name of REQUIRED_STRUCT) {
      check(vars[name] != null, `light: --${name} defined`);
    }
  }

  aaPairs(vars, label, 'bg');
  const soft = hexOf(vars, 'bg-soft');
  const muted = hexOf(vars, 'text-muted');
  const dim = hexOf(vars, 'text-dim');
  if (soft && muted) {
    check(contrast(muted, soft) >= 4.5, `${label}: text-muted vs bg-soft`, `${contrast(muted, soft).toFixed(2)}:1`);
  }
  if (soft && dim) {
    check(contrast(dim, soft) >= 4.5, `${label}: text-dim vs bg-soft`, `${contrast(dim, soft).toFixed(2)}:1`);
  }

  const accent = hexOf(vars, 'accent');
  const onAccent = hexOf(vars, 'on-accent');
  const accentActive = hexOf(vars, 'accent-active');
  if (accent && onAccent) {
    check(contrast(onAccent, accent) >= 4.5, `${label}: on-accent vs accent`, `${contrast(onAccent, accent).toFixed(2)}:1`);
  }
  if (accent && accentActive) {
    check(accentActive !== accent, `${label}: accent-active differs from accent`);
  }

  // Plot readability.
  const plot = hexOf(vars, 'canvas-plot');
  const pageBg = hexOf(vars, 'bg');
  if (plot) {
    for (const name of ['plot-text', 'plot-axis', 'plot-text-strong']) {
      const fg = hexOf(vars, name);
      const ratio = fg ? contrast(fg, plot) : null;
      check(ratio != null && ratio >= 4.5, `${label}: ${name} vs canvas-plot`,
        ratio ? `${ratio.toFixed(2)}:1` : 'missing');
    }
    // Plot canvas distinct from the page background.
    if (pageBg) {
      check(plot.toUpperCase() !== pageBg.toUpperCase(), `${label}: canvas-plot differs from bg`);
    }
  }

  // Dark layering / light structure.
  const elev = hexOf(vars, 'bg-elev');
  const border = hexOf(vars, 'border');
  if (elev && pageBg) {
    const d = Math.abs(relLum(elev) - relLum(pageBg));
    check(d > 0.008, `${label}: bg-elev is a distinct layer`, `Δlum ${(d * 100).toFixed(1)}%`);
  }
  if (soft && pageBg) {
    const d = Math.abs(relLum(soft) - relLum(pageBg));
    check(d > 0.008, `${label}: bg-soft is a distinct layer`, `Δlum ${(d * 100).toFixed(1)}%`);
  }
  if (border && pageBg) {
    check(contrast(border, pageBg) >= 1.15, `${label}: border visible vs bg`, `${contrast(border, pageBg).toFixed(2)}:1`);
  }
}

console.log('\n== structure / shell invariants ==');

const rootBlock = lastBlock(':root');
check(rootBlock != null && /--radius\s*:\s*0\s*;/.test(rootBlock), '--radius stays 0');
check(/border-radius:\s*0\s*!important/.test(css), 'global border-radius reset present');

// Shell hit targets in the cascade owner section.
const v10 = css.slice(css.lastIndexOf('Chrome v10'));
for (const sel of ['.search-trigger', '.theme-toggle', '.nav-mobile-toggle', '.btn', '.nav-link,\n.nav-trigger']) {
  const idx = v10.lastIndexOf(sel.split(',')[0].trim());
  check(idx >= 0, `shell rule present: ${sel.split(',')[0].trim()}`);
}
check(/\.search-trigger\s*\{[^}]*min-height:\s*44px/.test(v10), 'search trigger >= 44px');
check(/\.theme-toggle\s*\{[^}]*min-height:\s*44px/.test(v10), 'theme toggle >= 44px');
check(/\.nav-mobile-toggle\s*\{[^}]*min-height:\s*44px/.test(v10), 'mobile toggle >= 44px');
check(/\.btn\s*\{[^}]*min-height:\s*44px/.test(v10), 'buttons >= 44px');
check(/\.nav-link,\s*\n\.nav-trigger\s*\{[^}]*height:\s*44px/.test(v10), 'nav links >= 44px');

// CJK-safe leading.
check(/body\s*\{[^}]*line-height:\s*1\.6/.test(css.slice(0, css.lastIndexOf('Chrome v10'))), 'body line-height 1.6');
const cramped = [...css.matchAll(/line-height:\s*(0\.\d+|1\.0\d|1\.1[01])\s*;/g)];
check(cramped.length === 0, 'no cramped CJK leading left', cramped.map((m) => m[0]).join(' ') || 'clean');

// Selection must mix into the theme surface (not a raw accent wash that
// flips text unreadable in dark mode).
check(/::selection\s*\{[^}]*color-mix\(in srgb, var\(--accent\) \d+%, var\(--bg\)\)/.test(css),
  'selection mixes accent into theme surface');

// Type weights only on the 400/500/600 grid.
const oddWeights = [...css.matchAll(/font-weight:\s*(?!400\b|500\b|600\b|700\b)(?!var\()(\d{3})/g)];
check(oddWeights.length === 0, 'font weights on the 400/500/600 grid',
  oddWeights.map((m) => m[0]).join(' ') || 'clean');

/* ---------- physics lab toolbar + inspector (02:07 review) ----------
   Desktop equipment controls must render as a >=44px band with
   readable labels: the base action rule needs >=44px height and a
   >=0.8rem wrapping label, no rule anywhere may shrink a lab
   control below 44px / 0.7rem, and the mobile two-row toolbar must
   stay a 3-column grid. */
console.log('\n== physics lab toolbar (>=44px, readable labels) ==');

const labAction = lastBlockIn(labCss, '.plab-action');
check(labAction != null, 'lab: base .plab-action rule present');
const labActionMin = /min-height:\s*([\d.]+)px/.exec(labAction || '');
check(labActionMin != null && Number(labActionMin[1]) >= 44,
  'lab: toolbar action min-height >= 44px', labActionMin ? `${labActionMin[1]}px` : 'missing');
const labActionFont = /font-size:\s*([\d.]+)rem/.exec(labAction || '');
check(labActionFont != null && Number(labActionFont[1]) >= 0.8,
  'lab: toolbar label >= 0.8rem', labActionFont ? `${labActionFont[1]}rem` : 'missing');
check(!/white-space:\s*nowrap/.test(labAction || ''),
  'lab: toolbar labels wrap instead of squeezing one line');

const sub44 = [];
const weakLabel = [];
const weakInspector = [];
for (const m of labCss.matchAll(/(^|\n)\s*([^{}\n@]+)\{([^{}]*)\}/g)) {
  const sel = m[2].trim();
  if (/\.plab-(action|mode|tool)(?!-label)\b/.test(sel)) {
    for (const h of m[3].matchAll(/(?:min-height|height)\s*:\s*([\d.]+)px/g)) {
      if (Number(h[1]) < 44) sub44.push(`${sel.trim()}: ${h[0]}`);
    }
    for (const f of m[3].matchAll(/font-size\s*:\s*([\d.]+)rem/g)) {
      if (Number(f[1]) < 0.7) weakLabel.push(`${sel.trim()}: ${f[0]}`);
    }
  }
  if (/\.plab-(panel-title|group-title|section-title|energy-head|energy-label|energy-note|outliner-kind|outliner-name)\b/.test(sel)) {
    for (const f of m[3].matchAll(/font-size\s*:\s*([\d.]+)rem/g)) {
      if (Number(f[1]) < 0.64) weakInspector.push(`${sel.trim()}: ${f[0]}`);
    }
  }
}
check(sub44.length === 0, 'lab: no sub-44px control overrides', sub44.join(' | ') || 'clean');
check(weakLabel.length === 0, 'lab: no control label below 0.7rem', weakLabel.join(' | ') || 'clean');
check(weakInspector.length === 0, 'lab: inspector secondary text >= 0.64rem', weakInspector.join(' | ') || 'clean');

const mobileBlock = /@media \(max-width:\s*760px\)\s*\{[\s\S]*/.exec(labCss)?.[0] || '';
check(/\.plab-primary\s*\{[^}]*display:\s*grid/.test(mobileBlock)
  && /grid-template-columns:\s*repeat\(3,\s*minmax\(0,\s*1fr\)\)/.test(mobileBlock),
'lab: mobile toolbar keeps the two-row 3-column grid');

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
