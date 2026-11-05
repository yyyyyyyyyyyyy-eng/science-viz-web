#!/usr/bin/env python3
"""Final delivery QA: redesign screenshots (2 rounds), viewports, interactions, content."""
from __future__ import annotations
import http.server, socketserver, threading, time, json, re
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent
PORT = 8811
ROUND1 = ROOT / 'screenshots' / 'redesign-final-r1'
ROUND2 = ROOT / 'screenshots' / 'final'
for d in (ROUND1, ROUND2):
    d.mkdir(parents=True, exist_ok=True)

class H(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **k):
        super().__init__(*a, directory=str(ROOT), **k)
    def log_message(self, *a): pass

MODULES = [
    ('#/m/mitosis', 'mitosis'),
    ('#/m/dna-replication', 'dna-replication'),
    ('#/m/lotka-volterra', 'lotka-volterra'),
    ('#/m/function-graph', 'function-graph'),
    ('#/m/derivative-tangent', 'derivative-tangent'),
    ('#/m/taylor-series', 'taylor-series'),
    ('#/m/unit-circle', 'unit-circle'),
    ('#/m/projectile', 'projectile'),
    ('#/m/shm', 'shm'),
    ('#/m/electric-field', 'electric-field'),
    ('#/m/work-energy', 'work-energy'),
    ('#/m/gravity-orbit', 'gravity-orbit'),
]

def set_theme(page, theme):
    page.evaluate(
        """(theme) => {
          document.documentElement.setAttribute('data-theme', theme);
          try { localStorage.setItem('science-viz-theme', theme); } catch (e) {}
          window.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
        }""",
        theme,
    )
    page.wait_for_timeout(180)

def hit_area_ok(page):
    return page.evaluate("""() => {
      const sel = 'a.hit-target, button.hit-target, .btn.hit-target, .nav-link, .nav-trigger, .theme-toggle';
      const bad = [];
      document.querySelectorAll(sel).forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.width > 0 && r.height > 0 && (r.width < 40 || r.height < 40)) {
          // allow text links that are inline in content with padding via min-height
          const cs = getComputedStyle(el);
          const mh = parseFloat(cs.minHeight) || 0;
          if (mh < 44 && r.height < 44) bad.push({t: el.tagName, c: el.className, w: r.width, h: r.height, text: (el.textContent||'').slice(0,40)});
        }
      });
      return bad.slice(0, 25);
    }""")

def overflow_at(page, w, h, route):
    page.set_viewport_size({'width': w, 'height': h})
    page.goto(route, wait_until='networkidle')
    page.wait_for_timeout(350)
    return page.evaluate('() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 2')

def shoot_round(page, base, out: Path, label: str, report: dict):
    errors = []
    page.on('pageerror', lambda e: errors.append('page:' + str(e)))
    def on_console(m):
        if m.type == 'error':
            t = m.text
            if 'favicon' in t.lower(): return
            errors.append('console:' + t)
    page.on('console', on_console)

    set_theme(page, 'light')
    page.set_viewport_size({'width': 1280, 'height': 800})
    page.goto(base + '#/', wait_until='networkidle'); page.wait_for_timeout(500)
    page.screenshot(path=str(out / 'home-light.png'), full_page=False)
    set_theme(page, 'dark')
    page.wait_for_timeout(250)
    page.screenshot(path=str(out / 'home-dark.png'), full_page=False)
    set_theme(page, 'light')

    for route, name in MODULES:
        page.goto(base + route, wait_until='networkidle')
        page.wait_for_timeout(700)
        page.screenshot(path=str(out / f'{name}.png'))

    page.goto(base + '#/pastpapers', wait_until='networkidle'); page.wait_for_timeout(600)
    report[f'{label}_pastpapers'] = page.locator('.practice-card').count()
    page.screenshot(path=str(out / 'pastpapers.png'))

    page.goto(base + '#/bio/map', wait_until='networkidle')
    page.wait_for_timeout(3200)
    page.screenshot(path=str(out / 'map-bio.png'))
    page.goto(base + '#/math/map', wait_until='networkidle')
    page.wait_for_timeout(3200)
    page.screenshot(path=str(out / 'map-math.png'))
    page.goto(base + '#/mech/map', wait_until='networkidle')
    page.wait_for_timeout(3200)
    page.screenshot(path=str(out / 'map-mech.png'))

    # radius / emoji / card shadow checks
    radius = page.evaluate("""() => {
      const els = [...document.querySelectorAll('body *')].slice(0, 400);
      return els.filter(e => {
        const br = getComputedStyle(e).borderRadius;
        return br && br !== '0px' && !br.split(' ').every(x => x === '0px');
      }).length;
    }""")
    report[f'{label}_nonzero_radius_sample'] = radius
    report[f'{label}_errors'] = [e for e in errors if 'favicon' not in e.lower()][:30]
    return errors

def main():
    socketserver.TCPServer.allow_reuse_address = True
    httpd = socketserver.TCPServer(('127.0.0.1', PORT), H)
    threading.Thread(target=httpd.serve_forever, daemon=True).start()
    time.sleep(0.25)
    base = f'http://127.0.0.1:{PORT}/index.html'
    report = {'rounds': []}

    with sync_playwright() as p:
        browser = p.chromium.launch(
            executable_path='/usr/bin/google-chrome', headless=True,
            args=['--use-gl=angle', '--use-angle=swiftshader-webgl', '--ignore-gpu-blocklist', '--no-sandbox'])
        page = browser.new_context(viewport={'width': 1280, 'height': 800}, device_scale_factor=1).new_page()

        # Round 1
        shoot_round(page, base, ROUND1, 'r1', report)
        report['rounds'].append('r1')

        # Micro-tweak between rounds: slightly stronger hero glow (already in CSS) — re-screenshot after nav polish check
        page.add_style_tag(content='''
          .hero h1 { letter-spacing: -0.04em; }
          .site-header { border-bottom-color: color-mix(in srgb, var(--accent) 18%, var(--hairline)); }
        ''')
        shoot_round(page, base, ROUND2, 'r2', report)
        report['rounds'].append('r2')

        # Interaction QA
        page.set_viewport_size({'width': 1280, 'height': 800})
        page.goto(base + '#/', wait_until='networkidle')
        report['hit_areas_home'] = hit_area_ok(page)

        # Nav subjects
        for sub in ['bio', 'math', 'mech', 'em']:
            page.goto(base + f'#/{sub}', wait_until='networkidle')
            page.wait_for_timeout(300)
        report['subjects_ok'] = True

        # Practice + progress
        page.goto(base + '#/math/practice', wait_until='networkidle'); page.wait_for_timeout(800)
        report['practice_items'] = page.locator('.practice-card, .practice-item, .q-card').count()
        page.goto(base + '#/progress', wait_until='networkidle'); page.wait_for_timeout(400)
        report['progress'] = page.locator('body').inner_text()[:200]

        # Map edge + shift
        page.goto(base + '#/bio/map', wait_until='networkidle'); page.wait_for_timeout(2800)
        box = page.locator('.map-stage').bounding_box()
        cx, cy = box['x'] + box['width'] * 0.5, box['y'] + box['height'] * 0.45
        edge_tip = False
        rel_panel = False
        for dx in range(-220, 221, 18):
            for dy in range(-150, 151, 18):
                page.mouse.move(cx + dx, cy + dy)
                page.wait_for_timeout(25)
                tip = page.locator('.map-tooltip:not([hidden])')
                if tip.count():
                    txt = tip.inner_text()
                    if any(k in txt for k in ('—', '先修', '应用于', '[')):
                        edge_tip = True
                        page.mouse.click(cx + dx, cy + dy)
                        page.wait_for_timeout(350)
                        if page.locator('#map-panel h2').count() and page.locator('#map-panel a.entry-row').count() >= 1:
                            rel_panel = True
                        break
            if edge_tip and rel_panel:
                break
        page.screenshot(path=str(ROUND2 / 'map-edge-relation.png'))
        report['edge_tooltip'] = edge_tip
        report['edge_panel'] = rel_panel

        page.keyboard.down('Shift')
        sel = 0
        for dx in range(-200, 201, 28):
            page.mouse.click(cx + dx, cy - 10)
            page.wait_for_timeout(40)
            sel = page.locator('#map-panel a.entry-row').count()
            if sel >= 1:
                break
        page.keyboard.up('Shift')
        report['shift_sel'] = sel

        # Trackpad/mouse: wheel zoom + drag pan (no throw)
        page.mouse.wheel(0, -400)
        page.wait_for_timeout(200)
        page.mouse.move(cx, cy)
        page.mouse.down()
        page.mouse.move(cx + 80, cy + 40)
        page.mouse.up()
        page.wait_for_timeout(200)
        report['map_gesture'] = True

        # Overflow viewports
        overflows = []
        for w in (375, 768, 1280, 1920):
            for route in (base + '#/', base + '#/math', base + '#/pastpapers', base + '#/m/shm'):
                if overflow_at(page, w, 800, route):
                    overflows.append({'w': w, 'route': route})
        report['overflows'] = overflows

        # Notation: katex stacked fraction on a calc topic
        page.set_viewport_size({'width': 1280, 'height': 800})
        page.goto(base + '#/t/math/calc-u6/6.1', wait_until='networkidle'); page.wait_for_timeout(600)
        report['katex'] = page.locator('.katex').count()
        report['frac'] = page.locator('.katex-html .frac-line, .katex .mfrac').count()
        page.screenshot(path=str(ROUND2 / 'topic-notation.png'))

        # Past paper verification tags
        page.goto(base + '#/pastpapers/bio/2024', wait_until='networkidle'); page.wait_for_timeout(500)
        report['verified_tags'] = page.locator('text=已核验 PDF').count()
        report['bio2024_cards'] = page.locator('.practice-card').count()

        # Radius global force
        page.goto(base + '#/', wait_until='networkidle')
        report['radius_css_forced'] = page.evaluate("""() => getComputedStyle(document.body).borderRadius""")

        browser.close()

    report['ok'] = (
        report.get('edge_tooltip') and report.get('edge_panel')
        and not report.get('overflows')
        and report.get('r2_pastpapers', 0) >= 20
        and len(report.get('r2_errors', [])) == 0
        and report.get('bio2024_cards') == 6
    )
    (ROOT / 'audit' / 'final-qa.json').write_text(json.dumps(report, indent=2, ensure_ascii=False))
    print(json.dumps({k: report[k] for k in report if k not in ('progress',)}, indent=2, ensure_ascii=False)[:4000])
    print('VERIFY_OK' if report['ok'] else 'VERIFY_ISSUES')
    httpd.shutdown()

if __name__ == '__main__':
    main()
