/**
 * Interaction shell for the AP Physics exam-figure gallery.
 *
 * Physics lives in exam-figures.js; this module only builds controls, keeps
 * their state, and rebinds hover/click highlighting after each redraw.
 * All styling is injected from JS so the shared `.exam-figures` CSS stays put.
 */

const STYLE_ID = 'fi-interact-style';

function ensureStyle() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const st = document.createElement('style');
  st.id = STYLE_ID;
  st.textContent = `
.fi-controls{max-width:min(100%,480px);margin:.42rem 0 0;display:flex;flex-direction:column;gap:2px}
.fi-row{display:flex;align-items:center;gap:10px;min-height:44px;min-width:0}
.fi-row>label{flex:0 0 96px;font-size:.78rem;line-height:1.2;color:var(--text-muted)}
.fi-row>input[type=range]{-webkit-appearance:none;appearance:none;flex:1 1 auto;min-width:70px;height:44px;margin:0;background:transparent;accent-color:var(--accent);cursor:pointer}
.fi-row>input[type=range]::-webkit-slider-runnable-track{height:3px;background:var(--border);border-radius:0}
.fi-row>input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:14px;height:24px;margin-top:-10.5px;border:0;border-radius:0;background:var(--accent)}
.fi-row>input[type=range]::-moz-range-track{height:3px;background:var(--border);border-radius:0}
.fi-row>input[type=range]::-moz-range-thumb{width:14px;height:24px;border:0;border-radius:0;background:var(--accent)}
.fi-row>input[type=range]:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
.fi-out{flex:0 0 58px;text-align:right;font-size:.78rem;font-variant-numeric:tabular-nums;color:var(--text)}
.fi-choice{display:flex;flex:1 1 auto;min-width:0}
.fi-choice button{flex:1 1 auto;min-width:44px;min-height:44px;padding:0 7px;border:1px solid var(--border);border-radius:0;background:transparent;color:var(--text-muted);font:inherit;font-size:.76rem;line-height:1.15;cursor:pointer}
.fi-choice button+button{border-left:0}
.fi-choice button[aria-pressed=true]{background:var(--accent);border-color:var(--accent);color:#fff}
.fi-choice button:focus-visible{outline:2px solid var(--accent);outline-offset:2px;position:relative;z-index:1}
.fi-status{max-width:min(100%,480px);min-height:1.15rem;margin:.1rem 0 0;font-size:.73rem;line-height:1.35;color:var(--text-muted)}
.fi-hint{max-width:min(100%,480px);min-height:44px;margin:.05rem 0 0;padding-top:.18rem;border-top:1px solid var(--border);display:flex;align-items:center;font-size:.73rem;line-height:1.35;color:var(--text-muted)}
.fi-part{cursor:pointer}
.fig-has-hot .fig-part{opacity:.2}
.fig-has-hot .fig-part.is-hot{opacity:1}
.fi-hit{fill:transparent;stroke:none}
.fig-part:focus{outline:none}
.fig-part:focus .fi-hit{stroke:currentColor;stroke-width:1;stroke-dasharray:3 3}
@media (max-width:420px){.fi-row>label{flex-basis:82px}.fi-out{flex-basis:52px}}
`;
  document.head.appendChild(st);
}

/** Collect the starting parameter values declared by a figure. */
export function defaultParams(f) {
  const out = {};
  for (const c of f?.controls || []) out[c.key] = c.value;
  return out;
}

export function formatControlValue(c, raw) {
  if (c.type === 'choice') {
    const opt = (c.options || []).find((o) => o.value === raw);
    return opt ? opt.label : String(raw);
  }
  if (typeof c.fmt === 'function') return c.fmt(Number(raw));
  const step = Number(c.step);
  const decimals = Number.isFinite(step) && step < 1 ? String(step).split('.')[1]?.length || 1 : 0;
  return `${Number(raw).toFixed(decimals)}${c.unit || ''}`;
}

/**
 * Build controls / hint for one figure, then keep the SVG in sync.
 * `render(params)` must return the SVG markup for the current state.
 */
export function mountFigureInteraction(fig, box, f, render) {
  ensureStyle();
  const hasControls = !!(f.controls && f.controls.length);
  const hasParts = !!(f.parts && Object.keys(f.parts).length);
  if (!hasControls && !hasParts && !f.status) return;

  fig.classList.add('is-interactive');
  fig.dataset.interact = hasControls && hasParts ? 'param+parts' : hasControls ? 'param' : 'parts';

  const state = { ...defaultParams(f), __dirty: false };
  let controlsWrap = null;
  let statusEl = null;
  let hintEl = null;
  const outputs = new Map();

  const drawNow = (fromUser) => {
    if (fromUser) state.__dirty = true;
    box.innerHTML = render(state);
    bindParts();
    if (statusEl && f.status) statusEl.textContent = f.status(state);
    if (fromUser) fig.dataset.changed = '1';
  };

  if (hasControls || f.status) {
    controlsWrap = document.createElement('div');
    controlsWrap.className = 'fi-controls';
    for (const c of f.controls || []) {
      const row = document.createElement('div');
      row.className = 'fi-row';
      const lab = document.createElement('label');
      lab.textContent = c.label;
      const id = `fi-${f.id}-${c.key}`;
      lab.htmlFor = id;
      row.appendChild(lab);

      if (c.type === 'choice') {
        const group = document.createElement('div');
        group.className = 'fi-choice';
        group.setAttribute('role', 'group');
        group.setAttribute('aria-label', c.label);
        const btns = [];
        for (const o of c.options || []) {
          const b = document.createElement('button');
          b.type = 'button';
          b.textContent = o.label;
          b.dataset.value = o.value;
          b.setAttribute('aria-pressed', String(state[c.key] === o.value));
          b.addEventListener('click', () => {
            state[c.key] = o.value;
            btns.forEach((x) => x.setAttribute('aria-pressed', String(x.dataset.value === o.value)));
            drawNow(true);
          });
          btns.push(b);
          group.appendChild(b);
        }
        row.appendChild(group);
      } else {
        const out = document.createElement('output');
        out.className = 'fi-out';
        out.textContent = formatControlValue(c, state[c.key]);
        outputs.set(c.key, { out, c });
        const inp = document.createElement('input');
        inp.type = 'range';
        inp.id = id;
        inp.min = c.min;
        inp.max = c.max;
        inp.step = c.step ?? 1;
        inp.value = state[c.key];
        inp.setAttribute('aria-label', c.label);
        inp.addEventListener('input', () => {
          state[c.key] = Number(inp.value);
          out.textContent = formatControlValue(c, state[c.key]);
          drawNow(true);
        });
        row.appendChild(inp);
        row.appendChild(out);
      }
      controlsWrap.appendChild(row);
    }
    if (f.status) {
      statusEl = document.createElement('div');
      statusEl.className = 'fi-status';
      statusEl.textContent = f.status(state);
      controlsWrap.appendChild(statusEl);
    }
    fig.appendChild(controlsWrap);
  }

  let svg = null;
  let pinned = null;
  let hovered = null;

  const partInfo = (key) => {
    const p = f.parts[key];
    if (typeof p === 'string') return p;
    return p?.desc || p?.label || key;
  };

  const showPart = (key) => {
    if (!svg) return;
    svg.classList.toggle('fig-has-hot', !!key);
    svg.querySelectorAll('.fig-part').forEach((g) => {
      g.classList.toggle('is-hot', g.dataset.part === key);
    });
    if (hintEl) {
      hintEl.textContent = key ? partInfo(key) : f.partsHint || '悬停 / 点击图中标注：高亮对应部分';
    }
  };

  const bindParts = () => {
    svg = box.querySelector('svg');
    if (!svg || !hasParts) return;
    svg.querySelectorAll('.fig-part').forEach((g) => {
      const key = g.dataset.part;
      if (!key) return;
      g.setAttribute('tabindex', '0');
      g.setAttribute('role', 'button');
      g.setAttribute('aria-label', partInfo(key));
      g.addEventListener('pointerenter', () => { hovered = key; showPart(hovered || pinned); });
      g.addEventListener('pointerleave', () => { hovered = null; showPart(pinned); });
      g.addEventListener('click', (e) => {
        e.stopPropagation();
        pinned = pinned === key ? null : key;
        showPart(hovered || pinned);
      });
      g.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          pinned = pinned === key ? null : key;
          showPart(pinned);
        }
      });
      g.addEventListener('focus', () => { hovered = key; showPart(key); });
      g.addEventListener('blur', () => { hovered = null; showPart(pinned); });
    });
    showPart(hovered || pinned);
  };

  if (hasParts) {
    hintEl = document.createElement('div');
    hintEl.className = 'fi-hint';
    hintEl.textContent = f.partsHint || '悬停 / 点击图中标注：高亮对应部分';
    fig.appendChild(hintEl);
  }

  drawNow(false);
  return { state, redraw: drawNow };
}
