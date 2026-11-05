#!/usr/bin/env python3
"""v7 verification: routes, console errors, hit areas >= 44px, screenshots."""
import http.server
import socketserver
import threading
import time
import sys
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent
SHOT = ROOT / 'screenshots' / 'v7'
SHOT.mkdir(parents=True, exist_ok=True)
PORT = 8791

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **k):
        super().__init__(*a, directory=str(ROOT), **k)
    def log_message(self, *args):
        pass

def serve():
    socketserver.TCPServer.allow_reuse_address = True
    httpd = socketserver.TCPServer(('127.0.0.1', PORT), Handler)
    t = threading.Thread(target=httpd.serve_forever, daemon=True)
    t.start()
    return httpd

def main():
    httpd = serve()
    time.sleep(0.3)
    base = f'http://127.0.0.1:{PORT}/index.html'
    errors = []
    hit_fails = []

    with sync_playwright() as p:
        browser = p.chromium.launch(
            executable_path="/usr/bin/google-chrome",
            headless=True,
            args=['--use-gl=angle', '--use-angle=swiftshader-webgl', '--ignore-gpu-blocklist'],
        )
        context = browser.new_context(viewport={'width': 1280, 'height': 800})
        page = context.new_page()
        page.on('pageerror', lambda e: errors.append(f'pageerror: {e}'))
        page.on('console', lambda m: errors.append(f'console.{m.type}: {m.text}') if m.type == 'error' else None)

        routes = [
            ('#/', 'start.png'),
            ('#/bio', 'subject-bio.png'),
            ('#/math', 'subject-math.png'),
            ('#/mech', 'subject-mech.png'),
            ('#/em', 'subject-em.png'),
            ('#/paths', 'paths.png'),
            ('#/all', 'catalog.png'),
            ('#/m/limit-epsilon', 'mod-limit.png'),
            ('#/m/newton-incline', 'mod-newton.png'),
            ('#/m/gauss-law', 'mod-gauss.png'),
            ('#/m/enzyme-activity', 'mod-enzyme.png'),
            ('#/t/bio/bio-u1/1.1', 'topic-bio.png'),
            ('#/bio/map', 'map-bio.png'),
            ('#/math/map', 'map-math.png'),
            ('#/mech/map', 'map-mech.png'),
            ('#/em/map', 'map-em.png'),
        ]

        for hash_, name in routes:
            page.goto(base + hash_, wait_until='networkidle', timeout=60000)
            page.wait_for_timeout(800)
            page.screenshot(path=str(SHOT / name), full_page=False)
            print('shot', name)

        # Open map panel
        page.goto(base + '#/bio/map', wait_until='networkidle')
        page.wait_for_timeout(1200)
        page.mouse.click(640, 400)
        page.wait_for_timeout(400)
        page.screenshot(path=str(SHOT / 'map-bio-panel.png'))

        # Hit-area audit on module page with many controls
        page.goto(base + '#/m/riemann-sum', wait_until='networkidle')
        page.wait_for_timeout(500)
        boxes = page.evaluate('''() => {
          const sel = 'a, button, input, select, textarea, [role="button"], .hit-target, .nav-trigger, .mega-link, .range-input';
          const nodes = [...document.querySelectorAll(sel)].filter(n => {
            const st = getComputedStyle(n);
            if (st.display === 'none' || st.visibility === 'hidden') return false;
            const r = n.getBoundingClientRect();
            return r.width > 0 && r.height > 0;
          });
          return nodes.map(n => {
            const r = n.getBoundingClientRect();
            // Expand with padding already in box; also check :: before area via min styles
            return {
              tag: n.tagName.toLowerCase(),
              cls: n.className?.toString?.().slice(0,80) || '',
              w: Math.round(r.width),
              h: Math.round(r.height),
              text: (n.innerText || n.getAttribute('aria-label') || n.value || '').slice(0,40)
            };
          });
        }''')
        for b in boxes:
            # range inputs: height is 44 by CSS; thumbs visual smaller but hit is track height
            if b['w'] < 44 or b['h'] < 44:
                # allow tiny decorative crumbs separators? skip crumb-sep
                if 'crumb-sep' in b['cls']:
                    continue
                hit_fails.append(b)

        # Dark start
        page.evaluate("localStorage.setItem('science-viz-theme','dark')")
        page.goto(base + '#/', wait_until='networkidle')
        page.wait_for_timeout(300)
        page.screenshot(path=str(SHOT / 'start-dark.png'))

        browser.close()

    httpd.shutdown()

    print('--- console/page errors ---')
    real = [e for e in errors if 'favicon' not in e.lower()]
    for e in real:
        print(e)
    print('error count', len(real))
    print('--- hit fails (<44) ---')
    for b in hit_fails[:40]:
        print(b)
    print('hit fail count', len(hit_fails))

    if real or hit_fails:
        sys.exit(1)
    print('VERIFY_OK')

if __name__ == '__main__':
    main()
