/**
 * Accuracy audit: recompute numeric answers, check MCQ uniqueness,
 * diagram/data consistency, formula sheet sanity.
 */
import { readdirSync, writeFileSync, mkdirSync, readFileSync } from 'fs';
import { join, dirname } from 'path';
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

const issues = [];
const fixes = []; // descriptive — actual fixes applied by rebuild
let checks = 0;

function issue(cat, id, msg, severity = 'error') {
  issues.push({ cat, id, msg, severity });
}

function parseTable(stim) {
  if (!stim?.table?.rows) return {};
  const o = {};
  for (const [k, v] of stim.table.rows) {
    const key = String(k).trim();
    const num = Number(String(v).replace(/[^0-9.eE+\-]/g, ''));
    if (Number.isFinite(num)) o[key] = num;
    o[key + '_raw'] = v;
  }
  return o;
}

function walkProblems(problems, file, fn) {
  for (const p of problems) {
    if (p.kind === 'set') {
      for (const q of p.questions) fn(q, file, p);
    } else fn(p, file, null);
  }
}

async function auditPractice() {
  const dirs = ['bio', 'math', 'mech', 'em'];
  for (const subj of dirs) {
    const dir = join(ROOT, 'data', subj, 'practice');
    for (const f of readdirSync(dir).filter((x) => x.endsWith('.js'))) {
      const mod = await import('file://' + join(dir, f) + '?t=' + Math.random());
      const problems = mod.problems || [];
      walkProblems(problems, `${subj}/practice/${f}`, (p, file, set) => {
        const id = p.id || 'unknown';
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
          const stim = p.stimulus || set?.stimulus;
          const tab = parseTable(stim);
          const latex = p.stemLatex || '';
          const stem = p.stem || '';

          // Pattern: a=F/m
          if (/加速度|a\s*=/.test(stem + latex) || /求加速度/.test(stem + latex)) {
            const m = tab.m ?? extract(latex, /m\s*=\s*([\d.]+)/);
            const F = tab.F ?? extract(latex, /F\s*=\s*([\d.]+)/);
            if (m && F) {
              const a = F / m;
              if (Math.abs(a - p.expected) > (p.tol ?? 0.02) * Math.max(1, Math.abs(a))) {
                issue('numeric', id, `a=F/m=${a} but expected=${p.expected}`, 'error');
              }
            }
          }
          // Pattern: E=kq/r^2
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
          // FBD with friction: a=(F-μmg)/m
          if (stim?.diagram?.kind === 'fbd' && tab.m && (tab.F || tab['F']) && (tab['μ_k'] || tab['μ_k'] === 0 || tab['\\mu_k'])) {
            const m = tab.m;
            const F = tab.F;
            const mu = tab['μ_k'] ?? tab['mu_k'] ?? 0.2;
            const g = 9.8;
            if (F != null && p.parts) {
              // part with expected
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
        const stim = p.stimulus || set?.stimulus;
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
            // points should match table if both present
            const rows = stim.table.rows.map((r) => [Number(r[0]), Number(r[1])]);
            for (const [x, y] of rows) {
              const pt = stim.graph.points.find((p) => Math.abs(p[0] - x) < 1e-9);
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

function extract(s, re) {
  const m = String(s).match(re);
  return m ? Number(m[1]) : null;
}

async function auditFormulas() {
  const phys = await import('file://' + join(ROOT, 'data/physics/formulas.js'));
  const mathF = await import('file://' + join(ROOT, 'data/math/formulas.js'));
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
  // Spot-check known-sensitive formulas in topics
  const samples = [
    ['data/math/calc-u2.js', /nx\^\{n-1\}|幂/],
    ['data/mech/mech-u2.js', /\\sum|牛顿|F=ma|m\\vec a/],
    ['data/em/em-u8.js', /库仑|kQ|4\\pi\\varepsilon/],
  ];
  for (const [path, re] of samples) {
    checks++;
    const t = readFileSync(join(ROOT, path), 'utf8');
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

mkdirSync(join(ROOT, 'audit'), { recursive: true });
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
writeFileSync(join(ROOT, 'audit/issues.json'), JSON.stringify({ summary, issues }, null, 2));
console.log(JSON.stringify(summary, null, 2));
console.log('sample errors:', issues.filter((i) => i.severity === 'error').slice(0, 15));
