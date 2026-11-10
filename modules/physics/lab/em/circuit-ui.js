/**
 * Circuit sheet for the E&M lab.
 *
 * A schematic is explicitly allowed by the lab brief.  Parts drag, terminals
 * snap together, and the sheet reads the same MNA model that the analytic
 * tests use.  All chrome is square and all hit targets are ≥44 px.
 */
import { clear, el } from '../../../../js/ui-shared.js';
import {
  autoSeriesCircuit,
  circuitTimeConstant,
  connectCircuit,
  resetCircuit,
} from './physics.mjs';

const SVG_NS = 'http://www.w3.org/2000/svg';

function svgEl(name, attrs = {}) {
  const node = document.createElementNS(SVG_NS, name);
  for (const [key, value] of Object.entries(attrs)) node.setAttribute(key, String(value));
  return node;
}

const KIND_LABEL = {
  battery: ['电池', 'Battery'],
  resistor: ['电阻', 'Resistor'],
  capacitor: ['电容', 'Capacitor'],
  inductor: ['电感', 'Inductor'],
  switch: ['开关', 'Switch'],
  voltmeter: ['电压表', 'Voltmeter'],
  ammeter: ['电流表', 'Ammeter'],
};

function terminalPosition(comp, term) {
  const along = comp.rot === 90 ? 0 : 1;
  const dx = along ? (term === 0 ? -40 : 40) : 0;
  const dy = along ? 0 : (term === 0 ? -34 : 34);
  return { x: comp.x + dx, y: comp.y + dy };
}

function fmt(value, digits = 3) {
  if (!Number.isFinite(value)) return '—';
  const a = Math.abs(value);
  if ((a > 0 && a < 1e-3) || a >= 1e4) return value.toExponential(2);
  return Number(value.toPrecision(digits)).toString();
}

export function createCircuitPanel({ host, getCircuit, onChange, onSelect }) {
  const root = el('section', {
    className: 'plab-circuit-panel',
    'aria-label': '电路图 · Circuit sheet',
    hidden: true,
  });
  const head = el('div', { className: 'plab-circuit-head' }, [
    el('div', {}, [
      el('h2', { className: 'plab-panel-title', text: '电路图 · Circuit sheet' }),
      el('p', { className: 'plab-circuit-sub', text: '拖动元件；点击两个端点自动接线。 · Drag parts; click two terminals to wire.' }),
    ]),
    el('button', {
      type: 'button',
      className: 'plab-sheet-close hit-target',
      text: '关闭 · Close',
      'data-action': 'circuit-close',
    }),
  ]);
  const toolbar = el('div', { className: 'plab-circuit-toolbar' });
  const autoBtn = el('button', { type: 'button', className: 'plab-action hit-target', text: '自动串联 · Auto-series', 'data-action': 'circuit-auto' });
  const delBtn = el('button', { type: 'button', className: 'plab-action hit-target', text: '删除所选 · Delete', 'data-action': 'circuit-delete' });
  const switchBtn = el('button', { type: 'button', className: 'plab-action hit-target', text: '开/关所选开关 · Toggle switch', 'data-action': 'circuit-switch' });
  const resetBtn = el('button', { type: 'button', className: 'plab-action hit-target', text: '重置曲线 · Reset curves', 'data-action': 'circuit-reset' });
  const status = el('span', { className: 'plab-circuit-status', text: '就绪 · Ready', 'data-readout': 'circuitStatus' });
  toolbar.append(autoBtn, delBtn, switchBtn, resetBtn, status);
  const editorRow = el('div', { className: 'plab-circuit-editor', hidden: true });
  const svg = svgEl('svg', {
    class: 'plab-circuit-svg',
    viewBox: '0 0 720 400',
    role: 'img',
    'aria-label': '可拖动电路图 · Draggable circuit schematic',
  });
  const graph = el('canvas', { className: 'plab-circuit-graph', 'aria-label': '电路实时曲线 · Circuit live curves' });
  root.append(head, toolbar, editorRow, svg, graph);
  host.appendChild(root);

  let circuit = null;
  let selectedComponent = null;
  let selectedWire = null;
  let pendingTerminal = null;
  let dragging = null;
  let lastSvgPoint = null;

  function setStatus(text) {
    status.textContent = text;
  }

  function pointFromEvent(event) {
    const pt = svg.createSVGPoint();
    pt.x = event.clientX;
    pt.y = event.clientY;
    const ctm = svg.getScreenCTM();
    if (!ctm) return { x: 0, y: 0 };
    return pt.matrixTransform(ctm.inverse());
  }

  function current(circuitData) {
    return circuitData?.last?.currents;
  }

  function componentLabel(comp) {
    const base = KIND_LABEL[comp.kind]?.[0] || comp.kind;
    const [zh, en] = KIND_LABEL[comp.kind] || [comp.kind, comp.kind];
    if (comp.kind === 'battery') return `${zh} ε=${fmt(comp.emf)} V · ${en}`;
    if (comp.kind === 'resistor') return `${zh} R=${fmt(comp.R)} Ω · ${en}`;
    if (comp.kind === 'capacitor') return `${zh} C=${fmt(comp.C)} F · ${en}`;
    if (comp.kind === 'inductor') return `${zh} L=${fmt(comp.L)} H · ${en}`;
    if (comp.kind === 'switch') return `${zh} ${comp.closed ? '闭合' : '断开'} · ${en} ${comp.closed ? 'closed' : 'open'}`;
    return `${zh} · ${en}`;
  }

  function drawSymbol(group, comp) {
    const { kind } = comp;
    if (kind === 'battery') {
      group.appendChild(svgEl('line', { x1: -16, y1: -14, x2: -16, y2: 14, class: 'sym' }));
      group.appendChild(svgEl('line', { x1: -8, y1: -9, x2: -8, y2: 9, class: 'sym' }));
      group.appendChild(svgEl('line', { x1: 2, y1: -18, x2: 2, y2: 18, class: 'sym' }));
      group.appendChild(svgEl('line', { x1: 10, y1: -11, x2: 10, y2: 11, class: 'sym' }));
      group.appendChild(svgEl('text', { x: -18, y: -20, class: 'symlabel', 'text-anchor': 'middle' }, '+'));
    } else if (kind === 'resistor') {
      group.appendChild(svgEl('path', {
        d: 'M -28 0 L -20 0 L -15 -11 L -5 11 L 5 -11 L 15 11 L 20 0 L 28 0',
        class: 'sym',
      }));
    } else if (kind === 'capacitor') {
      group.appendChild(svgEl('line', { x1: -8, y1: -16, x2: -8, y2: 16, class: 'sym' }));
      group.appendChild(svgEl('line', { x1: 8, y1: -16, x2: 8, y2: 16, class: 'sym' }));
      group.appendChild(svgEl('line', { x1: -28, y1: 0, x2: -8, y2: 0, class: 'sym' }));
      group.appendChild(svgEl('line', { x1: 8, y1: 0, x2: 28, y2: 0, class: 'sym' }));
    } else if (kind === 'inductor') {
      group.appendChild(svgEl('path', {
        d: 'M -28 0 L -20 0 C -20 -16 -6 -16 -6 0 C -6 -16 8 -16 8 0 C 8 -16 20 -16 20 0 L 28 0',
        class: 'sym',
      }));
    } else if (kind === 'switch') {
      group.appendChild(svgEl('line', { x1: -24, y1: 0, x2: -8, y2: 0, class: 'sym' }));
      group.appendChild(svgEl('line', { x1: 8, y1: 0, x2: 24, y2: 0, class: 'sym' }));
      group.appendChild(svgEl('line', {
        x1: -8, y1: 0, x2: comp.closed ? 8 : 14, y2: comp.closed ? 0 : -16, class: 'sym',
      }));
      group.appendChild(svgEl('circle', { cx: -8, cy: 0, r: 2.6, class: 'symfill' }));
      group.appendChild(svgEl('circle', { cx: 8, cy: 0, r: 2.6, class: 'symfill' }));
    } else if (kind === 'voltmeter' || kind === 'ammeter') {
      group.appendChild(svgEl('circle', { cx: 0, cy: 0, r: 16, class: 'sym' }));
      group.appendChild(svgEl('text', { x: 0, y: 5, class: 'symsymbol', 'text-anchor': 'middle' }, kind === 'voltmeter' ? 'V' : 'A'));
    }
  }

  function showEditor(comp) {
    clear(editorRow);
    if (!comp) {
      editorRow.hidden = true;
      return;
    }
    editorRow.hidden = false;
    const title = el('span', { className: 'plab-circuit-editor-title', text: componentLabel(comp) });
    editorRow.appendChild(title);
    const addNumber = (labelText, value, min, max, step, apply) => {
      const input = el('input', {
        type: 'number', className: 'plab-number hit-target', min: String(min), max: String(max),
        step: String(step), value: String(value), 'aria-label': labelText,
      });
      input.addEventListener('change', () => {
        const next = Number(input.value);
        if (!Number.isFinite(next)) return;
        apply(Math.max(min, Math.min(max, next)));
        onChange?.('value');
        setStatus(`${labelText} 已更新。 · Updated.`);
        render();
      });
      editorRow.appendChild(el('label', { className: 'plab-circuit-editor-field' }, [
        el('span', { text: labelText }), input,
      ]));
    };
    if (comp.kind === 'battery') {
      addNumber('电动势 ε (V) · emf', comp.emf, 0.1, 100, 0.1, (v) => { comp.emf = v; });
      addNumber('内阻 r (Ω) · Internal r', comp.r, 0, 100, 0.1, (v) => { comp.r = v; });
    } else if (comp.kind === 'resistor') {
      addNumber('电阻 R (Ω) · Resistance', comp.R, 0.01, 1e6, 1, (v) => { comp.R = v; });
    } else if (comp.kind === 'capacitor') {
      addNumber('电容 C (F) · Capacitance', comp.C, 1e-9, 10, 1e-6, (v) => { comp.C = v; comp.v0 = 0; comp.vPrev = 0; comp.iPrev = 0; });
    } else if (comp.kind === 'inductor') {
      addNumber('电感 L (H) · Inductance', comp.L, 1e-6, 100, 0.01, (v) => { comp.L = v; comp.iPrev = 0; comp.vPrev = 0; });
    } else if (comp.kind === 'switch') {
      const input = el('input', { type: 'checkbox', checked: !!comp.closed, 'data-field': 'circuitSwitchState' });
      input.addEventListener('change', () => {
        comp.closed = input.checked;
        onChange?.('value');
        render();
      });
      editorRow.appendChild(el('label', { className: 'plab-check hit-target plab-circuit-editor-check' }, [
        input, el('span', { text: '开关闭合 · Switch closed' }),
      ]));
    } else {
      editorRow.appendChild(el('span', { className: 'plab-field-hint', text: '理想电表 · Ideal meter' }));
    }
  }

  function render() {
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    if (!circuit) return;
    const bg = svgEl('g', { class: 'plab-circuit-grid' });
    for (let x = 20; x < 720; x += 40) bg.appendChild(svgEl('line', { x1: x, y1: 0, x2: x, y2: 400, class: 'gridline' }));
    for (let y = 20; y < 400; y += 40) bg.appendChild(svgEl('line', { x1: 0, y1: y, x2: 720, y2: y, class: 'gridline' }));
    svg.appendChild(bg);

    const wires = svgEl('g', { class: 'plab-circuit-wires' });
    for (const w of circuit.wires) {
      const a = circuit.components.find((c) => c.id === w.a.comp);
      const b = circuit.components.find((c) => c.id === w.b.comp);
      if (!a || !b) continue;
      const pa = terminalPosition(a, w.a.term);
      const pb = terminalPosition(b, w.b.term);
      const mid = (pa.x + pb.x) / 2;
      const path = svgEl('path', {
        d: `M ${pa.x} ${pa.y} L ${mid} ${pa.y} L ${mid} ${pb.y} L ${pb.x} ${pb.y}`,
        class: `wire${selectedWire === w.id ? ' selected' : ''}`,
        'data-wire': w.id,
      });
      path.addEventListener('pointerdown', (event) => {
        event.stopPropagation();
        selectedWire = w.id;
        selectedComponent = null;
        render();
      });
      wires.appendChild(path);
    }
    svg.appendChild(wires);
    const terminalLayer = svgEl('g', { class: 'plab-circuit-terminals' });

    const svgRect = svg.getBoundingClientRect();
    const svgScale = Math.max(0.1, Math.min(svgRect.width / 720, svgRect.height / 400));
    const terminalHitRadius = 24 / svgScale;
    for (const comp of circuit.components) {
      const g = svgEl('g', {
        class: `plab-circuit-part${selectedComponent === comp.id ? ' selected' : ''}`,
        transform: `translate(${comp.x} ${comp.y}) rotate(${comp.rot || 0})`,
        'data-component': comp.id,
      });
      const body = svgEl('rect', { x: -34, y: -24, width: 68, height: 48, class: 'partbody' });
      g.appendChild(body);
      drawSymbol(g, comp);
      const label = svgEl('text', { x: 0, y: 38, class: 'partlabel', 'text-anchor': 'middle' });
      label.textContent = componentLabel(comp);
      g.appendChild(label);
      const currentValue = current()?.get(comp.id);
      const voltageValue = circuit.last?.voltages?.get(comp.id);
      if (comp.kind === 'voltmeter' && Number.isFinite(voltageValue)) {
        const live = svgEl('text', { x: 0, y: -30, class: 'partlive', 'text-anchor': 'middle' });
        live.textContent = `V=${fmt(Math.abs(voltageValue))} V`;
        g.appendChild(live);
      } else if (Number.isFinite(currentValue) && comp.kind !== 'voltmeter') {
        const live = svgEl('text', { x: 0, y: -30, class: 'partlive', 'text-anchor': 'middle' });
        live.textContent = `I=${fmt(Math.abs(currentValue))} A`;
        g.appendChild(live);
      }
      body.addEventListener('pointerdown', (event) => {
        if (event.button != null && event.button !== 0) return;
        event.stopPropagation();
        selectedComponent = comp.id;
        selectedWire = null;
        const p = pointFromEvent(event);
        dragging = { id: comp.id, dx: p.x - comp.x, dy: p.y - comp.y };
        svg.setPointerCapture?.(event.pointerId);
        showEditor(comp);
        render();
      });
      for (const term of [0, 1]) {
        const tp = terminalPosition(comp, term);
        const hit = svgEl('circle', {
          cx: tp.x, cy: tp.y, r: terminalHitRadius, class: 'terminalhit',
        });
        hit.addEventListener('pointerdown', (event) => {
          event.stopPropagation();
          onTerminal(comp, term);
        });
        const dot = svgEl('circle', {
          cx: tp.x, cy: tp.y, r: 4.5,
          class: `terminal${pendingTerminal?.comp === comp.id && pendingTerminal?.term === term ? ' pending' : ''}`,
        });
        terminalLayer.append(hit, dot);
      }
      svg.appendChild(g);
    }
    svg.appendChild(terminalLayer);
    setStatus(circuit.last
      ? `t = ${fmt(circuit.time)} s · ${circuit.components.length} 个元件 · ${circuit.wires.length} 根导线`
      : `${circuit.components.length} 个元件 · ${circuit.wires.length} 根导线 · 按下 Play 运行`);
    drawGraph();
  }

  function onTerminal(comp, term) {
    if (!circuit) return;
    if (!pendingTerminal) {
      pendingTerminal = { comp: comp.id, term };
      setStatus('已选第一个端点，点击第二个端点。 · First terminal selected; click the second.');
      render();
      return;
    }
    if (pendingTerminal.comp === comp.id && pendingTerminal.term === term) {
      pendingTerminal = null;
      render();
      return;
    }
    connectCircuit(circuit, { comp: pendingTerminal.comp, term: pendingTerminal.term }, { comp: comp.id, term });
    pendingTerminal = null;
    setStatus('已自动吸附并接线。 · Auto-snapped and wired.');
    onChange?.('wire');
    render();
  }

  function drawGraph() {
    const rect = graph.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = Math.max(1, Math.round(rect.width * dpr));
    const h = Math.max(1, Math.round(rect.height * dpr));
    if (graph.width !== w || graph.height !== h) {
      graph.width = w;
      graph.height = h;
    }
    const ctx = graph.getContext('2d');
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const width = rect.width;
    const height = rect.height;
    ctx.clearRect(0, 0, width, height);
    const style = getComputedStyle(root);
    ctx.strokeStyle = style.getPropertyValue('--border-soft') || '#d8d8d8';
    ctx.lineWidth = 1;
    const pad = { l: 42, r: 12, t: 12, b: 24 };
    ctx.strokeRect(pad.l, pad.t, width - pad.l - pad.r, height - pad.t - pad.b);
    const samples = circuit?.samples || [];
    if (samples.length < 2) {
      ctx.fillStyle = style.getPropertyValue('--text-muted') || '#777';
      ctx.font = '11px monospace';
      ctx.fillText('i(t), v_C(t), v_L(t) — 播放后显示 · run to plot', pad.l + 8, pad.t + 22);
      return;
    }
    const t0 = samples[0].t;
    const t1 = samples[samples.length - 1].t;
    const span = Math.max(1e-9, t1 - t0);
    const series = [
      ['i', samples.map((s) => s.i), style.getPropertyValue('--accent-active') || '#2f6fde'],
      ['vC', samples.map((s) => s.vC), style.getPropertyValue('--ok') || '#1d7a5a'],
      ['vL', samples.map((s) => s.vL), style.getPropertyValue('--warn') || '#b06a2c'],
    ];
    let max = 0;
    for (const [, data] of series) for (const v of data) max = Math.max(max, Math.abs(v));
    if (!(max > 0)) max = 1;
    const yOf = (v) => pad.t + (height - pad.t - pad.b) * (0.5 - (v / max) * 0.44);
    const xOf = (t) => pad.l + ((t - t0) / span) * (width - pad.l - pad.r);
    ctx.fillStyle = style.getPropertyValue('--text-muted') || '#777';
    ctx.font = '10px monospace';
    ctx.fillText(`+${fmt(max)}`, 4, pad.t + 9);
    ctx.fillText('0', 4, yOf(0) + 3);
    ctx.fillText(`-${fmt(max)}`, 4, height - pad.b - 2);
    ctx.fillText(`${fmt(span)} s`, width - pad.r - 46, height - 6);
    for (const [name, data, color] of series) {
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      for (let i = 0; i < samples.length; i += 1) {
        const x = xOf(samples[i].t);
        const y = yOf(data[i]);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.fillStyle = color;
      ctx.fillText(name, pad.l + 8 + (name === 'i' ? 0 : name === 'vC' ? 40 : 82), pad.t + 13);
    }
  }

  svg.addEventListener('pointerdown', () => {
    selectedComponent = null;
    selectedWire = null;
    pendingTerminal = null;
    showEditor(null);
    render();
  });
  window.addEventListener('pointermove', (event) => {
    if (!dragging || !circuit) return;
    const comp = circuit.components.find((c) => c.id === dragging.id);
    if (!comp) return;
    const p = pointFromEvent(event);
    comp.x = Math.max(50, Math.min(670, p.x - dragging.dx));
    comp.y = Math.max(45, Math.min(350, p.y - dragging.dy));
    lastSvgPoint = p;
    render();
  });
  window.addEventListener('pointerup', () => {
    if (!dragging) return;
    dragging = null;
    onChange?.('move');
  });

  autoBtn.addEventListener('click', () => {
    if (!circuit) return;
    autoSeriesCircuit(circuit);
    onChange?.('auto');
    setStatus('已按列表顺序自动串联。 · Auto-series wired in list order.');
    render();
  });
  delBtn.addEventListener('click', () => {
    if (!circuit) return;
    if (selectedComponent) {
      circuit.components = circuit.components.filter((c) => c.id !== selectedComponent);
      circuit.wires = circuit.wires.filter((w) => w.a.comp !== selectedComponent && w.b.comp !== selectedComponent);
      selectedComponent = null;
      showEditor(null);
      onChange?.('delete');
      render();
    } else if (selectedWire) {
      circuit.wires = circuit.wires.filter((w) => w.id !== selectedWire);
      selectedWire = null;
      onChange?.('delete');
      render();
    } else {
      setStatus('先选择元件或导线。 · Select a part or wire first.');
    }
  });
  switchBtn.addEventListener('click', () => {
    if (!circuit) return;
    const target = circuit.components.find((c) => c.id === selectedComponent)
      || circuit.components.find((c) => c.kind === 'switch');
    if (!target || target.kind !== 'switch') {
      setStatus('先选择一个开关元件。 · Select a switch part first.');
      return;
    }
    target.closed = !target.closed;
    onChange?.('switch');
    setStatus(target.closed ? '开关闭合。 · Switch closed.' : '开关断开。 · Switch open.');
    render();
  });
  resetBtn.addEventListener('click', () => {
    if (!circuit) return;
    resetCircuit(circuit);
    onChange?.('reset');
    render();
  });
  root.querySelector('[data-action="circuit-close"]')?.addEventListener('click', () => close());
  const onTheme = () => {
    if (root.hidden) return;
    requestAnimationFrame(() => render());
  };
  window.addEventListener('themechange', onTheme);

  function open(next) {
    if (next) {
      circuit = next;
      selectedComponent = null;
      selectedWire = null;
      pendingTerminal = null;
      showEditor(null);
      onSelect?.(next);
    }
    root.hidden = false;
    render();
  }

  function close() {
    root.hidden = true;
    dragging = null;
    pendingTerminal = null;
  }

  function refresh() {
    if (root.hidden) return;
    render();
  }

  function destroy() {
    window.removeEventListener('themechange', onTheme);
    root.remove();
  }

  return { root, open, close, refresh, render, destroy };
}
