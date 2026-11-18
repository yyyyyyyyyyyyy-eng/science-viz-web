/**
 * Accuracy audit: recompute numeric answers, check MCQ uniqueness,
 * diagram/data consistency, formula sheet sanity.
 *
 * Heuristic notes (regression-tested by scripts/test-audit-accuracy-heuristics.mjs):
 *   - parseTable values are unit-aware: SI prefixes ("2.0 μC" → 2e-6 C) and
 *     superscript scientific notation ("9.0×10⁹" → 9e9) parse correctly;
 *     bare units (m, kg, N, V, m/s² …) never scale, and kg is the SI base
 *     unit of mass, not 10³ g.
 *   - a=F/m is only asserted for frictionless setups. When the stimulus
 *     table carries μ_k, the auditor asserts the friction model
 *     a=(F−μ_k·m·g)/m instead (g from the table, else 9.8).
 *   - graph-vs-table compares the columns named by stim.table.headers
 *     (matched against the graph's xLabel/yLabel), not hard-coded columns
 *     0,1 — a "t,x,y" parametric table plots its x,y columns (1,2).
 *   - walkProblems also visits `parts` sub-questions with the parent
 *     stimulus inherited and ids `<parent>#partN`, matching how
 *     js/practice.js renders parts ({ ...parent, ...part }).
 */
import { readdirSync, writeFileSync, mkdirSync, readFileSync } from 'fs';
import { join, dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);

// Load mathjs in node
const mathCode = readFileSync(join(ROOT, 'vendor/mathjs/math.min.js'), 'utf8');
const vm = await import('vm');
const ctx = { module: { exports: {} }, exports: {}, define: undefined };
vm.default.runInNewContext(mathCode + '\nthis.__math = typeof math !== "undefined" ? math : module.exports;', ctx);
const math = ctx.__math;

const SUPERSCRIPTS = { '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9', '⁻': '-', '⁺': '+' };

/**
 * Parse a stimulus table value into a number, applying SI prefixes and
 * superscript/scientific notation. Unprefixed values keep their magnitude.
 * Returns null when no leading number can be read.
 */
export function parseNumericValue(raw) {
  let s = String(raw).replace(/−/g, '-').replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁻⁺]/g, (c) => SUPERSCRIPTS[c] ?? c);
  // "9.0×10⁹" / "1.8x10^6" / "5.0·10⁻³" → e-notation
  s = s.replace(/(\d(?:\.\d+)?)\s*[×x·]\s*10\^?([+-]?\d+)/g, (_m, mant, exp) => `${mant}e${exp}`);
  const m = s.match(/^\s*([+-]?(?:\d+\.?\d*|\.\d+))(?:[eE]([+-]?\d+))?\s*(.*\S)?\s*$/);
  if (!m) return null;
  let n = Number(m[1]) * Math.pow(10, Number(m[2] ?? 0));
  if (!Number.isFinite(n)) return null;
  // SI-prefixed units that occur in practice stimuli. Deliberately a
  // whitelist: bare "m" is metres (never milli), "kg" is the base unit of
  // mass (never 10³ g), and "mol"/"min"/"m/s" stay unscaled.
  const PREFIXED_UNITS = {
    μC: 1e-6, μV: 1e-6, μA: 1e-6, μs: 1e-6, μm: 1e-6, μg: 1e-6, μF: 1e-6, μN: 1e-6,
    nC: 1e-9, nV: 1e-9, nm: 1e-9, ns: 1e-9, nN: 1e-9,
    mC: 1e-3, mV: 1e-3, mA: 1e-3, ms: 1e-3, mm: 1e-3, mN: 1e-3,
    cm: 1e-2,
    kN: 1e3, km: 1e3, kV: 1e3, kW: 1e3, kJ: 1e3, kPa: 1e3, kΩ: 1e3, kHz: 1e3,
    MN: 1e6, MV: 1e6, MW: 1e6, MΩ: 1e6, MHz: 1e6,
    GN: 1e9, GΩ: 1e9, GHz: 1e9,
  };
  const unit = (m[3] ?? '').trim();
  if (unit && PREFIXED_UNITS[unit] != null) n *= PREFIXED_UNITS[unit];
  return Number.isFinite(n) ? n : null;
}

export function parseTable(stim) {
  if (!stim?.table?.rows) return {};
  const o = {};
  for (const [k, v] of stim.table.rows) {
    const key = String(k).trim();
    const num = parseNumericValue(v);
    if (num != null) o[key] = num;
    o[key + '_raw'] = v;
  }
  return o;
}

/**
 * Which table columns hold the graph's x and y data? Prefer the columns
 * named by stim.table.headers, matched against the graph's xLabel/yLabel —
 * a "t,x,y" parametric table plots columns 1,2. Headers that don't name both
 * axes (e.g. key-value tables like 量/值) keep the legacy columns 0,1.
 */
export function locateXYColumns(table, graph) {
  const headers = Array.isArray(table?.headers) ? table.headers : null;
  if (!headers) return { xi: 0, yi: 1 };
  const xName = String(graph?.xLabel ?? 'x').trim();
  const yName = String(graph?.yLabel ?? 'y').trim();
  const xi = headers.findIndex((h) => String(h).trim() === xName);
  const yi = headers.findIndex((h) => String(h).trim() === yName);
  if (xi !== -1 && yi !== -1) return { xi, yi };
  return { xi: 0, yi: 1 };
}

function extract(s, re) {
  const m = String(s).match(re);
  return m ? Number(m[1]) : null;
}

function walkProblems(problems, file, fn) {
  for (const p of problems) {
    if (p.kind === 'set') {
      for (const q of p.questions) {
        fn(q, file, p);
        walkParts(q, file, p, fn);
      }
    } else {
      fn(p, file, null);
      walkParts(p, file, null, fn);
    }
  }
}

// js/practice.js renders each part as `{ ...parent, ...part }`, so parts
// inherit the parent/set stimulus; the audit walks them the same way.
// Parts get synthetic ids `<parent>#partN` for readable flag messages.
function walkParts(parent, file, set, fn) {
  if (!Array.isArray(parent.parts)) return;
  const inheritedStim = parent.stimulus || set?.stimulus || null;
  parent.parts.forEach((part, i) => {
    if (part == null || typeof part !== 'object') return;
    fn({ ...part, id: part.id || `${parent.id || 'unknown'}#part${i + 1}` }, file, set, inheritedStim);
  });
}

/**
 * Run the accuracy audit.
 *
 * opts.dataRoot — practice/formula/topic tree to scan (default: repo data/).
 * opts.scope    — 'practice' skips the formula-sheet and topic checks
 *                 (used by the fixture controls in the regression test).
 *
 * Returns { summary, issues }; writes nothing. The CLI entry point below
 * writes audit/issues.json (override with AUDIT_OUT_DIR) and prints the
 * summary exactly as before.
 */
export async function runAudit(opts = {}) {
  const dataRoot = opts.dataRoot ? resolve(String(opts.dataRoot)) : join(ROOT, 'data');
  const scope = opts.scope ?? 'all';
  const issues = [];
  let checks = 0;

  function issue(cat, id, msg, severity = 'error') {
    issues.push({ cat, id, msg, severity });
  }

  async function auditPractice() {
    const dirs = ['bio', 'math', 'mech', 'em'];
    for (const subj of dirs) {
      const dir = join(dataRoot, subj, 'practice');
      for (const f of readdirSync(dir).filter((x) => x.endsWith('.js'))) {
        const mod = await import('file://' + join(dir, f) + '?t=' + Math.random());
        const problems = mod.problems || [];
        walkProblems(problems, `${subj}/practice/${f}`, (p, file, set, inheritedStim) => {
          const id = p.id || 'unknown';
          const stim = p.stimulus || inheritedStim || set?.stimulus;
          // MCQ: exactly one correct
          if (p.type === 'mcq' && p.choices) {
            checks++;
            const n = p.choices.filter((c) => c.correct).length;
            if (n !== 1) issue('mcq', id, `correct count=${n}`, 'error');
            // distractors nonempty
            if (p.choices.some((c) => !String(c.text || '').trim())) issue('mcq', id, 'empty choice', 'error');
          }
          // Numeric: recompute when we can parse stem/table
          if (p.check === 'numeric' && p.expected != null) {
            checks++;
            const tab = parseTable(stim);
            const latex = p.stemLatex || '';
            const stem = p.stem || '';

            // Pattern: a=F/m — asserted only when the setup is frictionless.
            // With μ_k in the stimulus table, assert a=(F−μ_k·m·g)/m instead.
            if (/加速度|a\s*=/.test(stem + latex) || /求加速度/.test(stem + latex)) {
              const m = tab.m ?? extract(latex, /m\s*=\s*([\d.]+)/);
              const F = tab.F ?? extract(latex, /F\s*=\s*([\d.]+)/);
              if (m && F) {
                const mu = tab['μ_k'] ?? tab['mu_k'] ?? tab['μ'];
                const g = tab.g ?? 9.8;
                const a = mu != null ? (F - mu * m * g) / m : F / m;
                if (Math.abs(a - p.expected) > (p.tol ?? 0.02) * Math.max(1, Math.abs(a))) {
                  const model = mu != null ? `a=(F−μ_k·m·g)/m=${a}` : `a=F/m=${a}`;
                  issue('numeric', id, `${model} but expected=${p.expected}`, 'error');
                }
              }
            }
            // Pattern: E=kq/r^2 (tab.q is unit-aware: "2.0 μC" → 2e-6 C)
            if (/E\s*=|求\s*E|电场/.test(stem + latex) || latex.includes('\\varepsilon_0') || latex.includes('4\\pi')) {
              const q = tab.q ?? extract(latex, /q\s*=\s*([\d.eE+\-×\\times]+)/);
              const r = tab.r ?? extract(latex, /r\s*=\s*([\d.]+)/);
              // from latex 1.0\times10^{-6}
              let qq = q;
              let rr = r;
              const qm = latex.match(/q\s*=\s*([\d.]+)\\times10\^\{([^}]+)\}/);
              if (qm) qq = Number(qm[1]) * Math.pow(10, Number(qm[2]));
              const rm = latex.match(/r\s*=\s*([\d.]+)\\mathrm\{m\}/);
              if (rm) rr = Number(rm[1]);
              if (qq && rr) {
                const E = 9e9 * Math.abs(qq) / (rr * rr);
                if (Math.abs(E - p.expected) / Math.max(1, E) > 0.05) {
                  issue('numeric', id, `E=kq/r²=${E} but expected=${p.expected}`, 'error');
                }
              }
            }
            // Pattern: average rate from table f
            if (/平均变化率/.test(stem) && stim?.table) {
              const rows = stim.table.rows.map((r) => [Number(r[0]), Number(r[1])]);
              // x=1 to x=2
              const a = rows.find((r) => r[0] === 1);
              const b = rows.find((r) => r[0] === 2);
              if (a && b) {
                const rate = (b[1] - a[1]) / (b[0] - a[0]);
                if (Math.abs(rate - p.expected) > 0.05) {
                  issue('numeric', id, `avg rate=${rate} expected=${p.expected}`, 'error');
                }
              }
            }
            // Vague "见解析中的数量级" without matching computation
            if (String(p.answer || '').includes('见解析') || String(p.answer || '').includes('数量级')) {
              issue('numeric', id, 'illustrative/vague answer text with numeric check', 'error');
            }
            // expected 12 with kinetic energy context vs FBD mismatch
            if (p.expected === 12 && stim?.diagram?.kind === 'fbd') {
              const m = tab.m, v = tab.v;
              if (m && v) {
                const K = 0.5 * m * v * v;
                if (Math.abs(K - 12) < 0.01) {
                  issue('consistency', id, 'FBD diagram but expected is kinetic energy ½mv² — mismatch', 'error');
                }
              }
            }
            if (p.expected === 180000 && stim?.diagram?.kind === 'fbd') {
              issue('consistency', id, 'expected looks like E-field but diagram is fbd', 'error');
            }
          }
          // Diagram force labels vs table
          if (stim?.diagram?.kind === 'fbd' && stim.diagram.forces) {
            checks++;
            const labels = stim.diagram.forces.map((f) => f.label);
            if (!labels.some((l) => /mg|W|重力/.test(l))) issue('diagram', id, 'FBD missing gravity label', 'warn');
          }
          if (stim?.diagram?.kind === 'field' || stim?.diagram?.kind === 'fieldConfig') {
            checks++;
            const ch = stim.diagram.charges || [];
            // field lines should go + to -
            if (ch.length >= 2) {
              const pos = ch.find((c) => String(c.q).includes('+'));
              const neg = ch.find((c) => String(c.q).includes('−') || String(c.q).includes('-'));
              if (!pos || !neg) issue('diagram', id, 'field config missing opposite charges', 'warn');
            }
          }
          if (stim?.diagram?.kind === 'punnett' || stim?.diagram?.kind === 'punnett') {
            checks++;
            const cells = stim.diagram.cells;
            if (cells) {
              // verify Mendelian combinations from top/side
              const top = stim.diagram.top || ['A', 'a'];
              const side = stim.diagram.side || ['A', 'a'];
              for (let r = 0; r < 2; r++) {
                for (let c = 0; c < 2; c++) {
                  const alleles = [side[r], top[c]].sort().join('');
                  // normalize order: dominant first if mixed
                  const got = cells[r][c];
                  const norm = (s) => s.split('').sort().join('');
                  if (norm(got) !== norm(side[r] + top[c])) {
                    issue('diagram', id, `Punnett cell[${r}][${c}]=${got} != ${side[r]}+${top[c]}`, 'error');
                  }
                }
              }
            }
          }
          if (stim?.diagram?.kind === 'enzyme' || stim?.graph) {
            checks++;
            if (stim.graph?.points && stim.table?.rows) {
              // The graph plots (xLabel,yLabel); read those columns from the
              // table via its headers (t,x,y → columns 1,2), not blindly 0,1.
              const { xi, yi } = locateXYColumns(stim.table, stim.graph);
              const cell = (v) => Number(String(v).replace(/−/g, '-').trim());
              for (const row of stim.table.rows) {
                const x = cell(row[xi]);
                const y = cell(row[yi]);
                if (!Number.isFinite(x) || !Number.isFinite(y)) continue;
                const pt = stim.graph.points.find((gp) => Math.abs(gp[0] - x) < 1e-9);
                if (pt && Math.abs(pt[1] - y) > 1e-6) {
                  issue('diagram', id, `graph point (${x}) y=${pt[1]} != table ${y}`, 'error');
                }
              }
            }
          }
          // Symbolic expected parseable
          if (p.check === 'symbolic' && p.expected) {
            checks++;
            try {
              math.parse(String(p.expected).replace(/\+C$/, ''));
            } catch (e) {
              // +C integrals — strip
              try {
                math.parse(String(p.expected).replace(/\+C$/, '').replace(/C$/, '0'));
              } catch (e2) {
                issue('symbolic', id, `unparseable expected: ${p.expected}`, 'warn');
              }
            }
          }
        });
      }
    }
  }

  async function auditFormulas() {
    if (scope !== 'all') return;
    const phys = await import('file://' + join(dataRoot, 'physics/formulas.js'));
    const mathF = await import('file://' + join(dataRoot, 'math/formulas.js'));
    const must = [
      { re: /g=9\.8/, name: 'g' },
      { re: /G=6\.67\\times 10\^{-11}/, name: 'G' },
      { re: /k=\\dfrac\{1\}\{4\\pi\\varepsilon_0\}=9\.0\\times 10\^\{9\}/, name: 'k' },
      { re: /\\varepsilon_0=8\.85\\times 10\^{-12}/, name: 'eps0' },
      { re: /\\mu_0=4\\pi\\times 10\^{-7}/, name: 'mu0' },
      { re: /e=1\.60\\times 10\^{-19}/, name: 'e' },
      { re: /\\sum \\vec F=m\\vec a/, name: 'N2' },
      { re: /K=\\dfrac\{1\}\{2\}mv\^2/, name: 'K' },
      { re: /\\oint \\vec E\\cdot \\mathrm\{d\}\\vec A/, name: 'Gauss' },
      { re: /V=IR/, name: 'Ohm' },
    ];
    const allLatex = phys.PHYSICS_FORMULA_GROUPS.flatMap((g) => g.rows.map((r) => r.latex)).join('\n');
    for (const m of must) {
      checks++;
      if (!m.re.test(allLatex)) issue('formula', m.name, 'missing or mismatched on Physics C sheet paraphrase', 'error');
    }
    // Math: power rule stacked
    const mAll = mathF.MATH_FORMULA_GROUPS.flatMap((g) => g.rows.map((r) => r.latex)).join('\n');
    checks++;
    if (!/\\dfrac\{\\mathrm\{d\}\}\{\\mathrm\{d\}x\}\[x\^n\]=nx\^\{n-1\}/.test(mAll)) {
      issue('formula', 'power-rule', 'power rule missing/wrong', 'error');
    }
    checks++;
    if (mAll.includes('\\frac{d}{dx}') && !mAll.includes('\\dfrac{\\mathrm{d}}{\\mathrm{d}x}')) {
      // soft
    }
    // Slash fractions in formula latex (forbidden style)
    for (const g of [...phys.PHYSICS_FORMULA_GROUPS, ...mathF.MATH_FORMULA_GROUPS]) {
      for (const r of g.rows) {
        checks++;
        if (/[a-zA-Z0-9]\s*\/\s*[a-zA-Z0-9]/.test(r.latex) && !r.latex.includes('\\dfrac') && r.latex.includes('/')) {
          // allow N/A in text notes only — latex with slash
          if (/\\mathrm\{[^}]*\/[^}]*\}/.test(r.latex)) continue;
          issue('formula', r.id, `possible slash fraction in latex: ${r.latex.slice(0, 60)}`, 'warn');
        }
      }
    }
  }

  async function auditTopicsSample() {
    if (scope !== 'all') return;
    // Spot-check known-sensitive formulas in topics
    const samples = [
      ['data/math/calc-u2.js', /nx\^\{n-1\}|幂/],
      ['data/mech/mech-u2.js', /\\sum|牛顿|F=ma|m\\vec a/],
      ['data/em/em-u8.js', /库仑|kQ|4\\pi\\varepsilon/],
    ];
    for (const [path, re] of samples) {
      checks++;
      const t = readFileSync(join(dataRoot, path.replace(/^data[\\/]/, '')), 'utf8');
      // Look for obviously wrong claims
      if (/g\s*=\s*10(?!\d)/.test(t) && !/近似/.test(t)) {
        issue('topic', path, 'uses g=10 without noting approximation', 'warn');
      }
      if (/光速.*=.*3\.00\\times 10\^\{6\}/.test(t)) issue('topic', path, 'wrong speed of light', 'error');
    }
  }

  await auditPractice();
  await auditFormulas();
  await auditTopicsSample();

  const summary = {
    checks,
    issues: issues.length,
    byCat: {},
    bySeverity: { error: 0, warn: 0 },
  };
  for (const i of issues) {
    summary.byCat[i.cat] = (summary.byCat[i.cat] || 0) + 1;
    summary.bySeverity[i.severity] = (summary.bySeverity[i.severity] || 0) + 1;
  }
  return { summary, issues };
}

const isMain = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  const { summary, issues } = await runAudit();
  const outDir = process.env.AUDIT_OUT_DIR ? resolve(process.env.AUDIT_OUT_DIR) : join(ROOT, 'audit');
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'issues.json'), JSON.stringify({ summary, issues }, null, 2));
  console.log(JSON.stringify(summary, null, 2));
  console.log('sample errors:', issues.filter((i) => i.severity === 'error').slice(0, 15));
}
