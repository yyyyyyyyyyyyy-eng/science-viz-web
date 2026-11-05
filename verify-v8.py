#!/usr/bin/env python3
import http.server, socketserver, threading, time, sys
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent
SHOT = ROOT / 'screenshots' / 'v8'
SHOT.mkdir(parents=True, exist_ok=True)
PORT = 8793

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **k):
        super().__init__(*a, directory=str(ROOT), **k)
    def log_message(self, *a): pass

def main():
    socketserver.TCPServer.allow_reuse_address = True
    httpd = socketserver.TCPServer(('127.0.0.1', PORT), Handler)
    threading.Thread(target=httpd.serve_forever, daemon=True).start()
    time.sleep(0.2)
    base = f'http://127.0.0.1:{PORT}/index.html'
    errors = []
    hit_fails = []

    with sync_playwright() as p:
        browser = p.chromium.launch(
            executable_path='/usr/bin/google-chrome',
            headless=True,
            args=['--use-gl=angle', '--use-angle=swiftshader-webgl', '--ignore-gpu-blocklist'],
        )
        page = browser.new_context(viewport={'width': 1280, 'height': 800}).new_page()
        page.on('pageerror', lambda e: errors.append(str(e)))
        page.on('console', lambda m: errors.append(m.text) if m.type == 'error' else None)

        page.goto(base + '#/', wait_until='networkidle')
        page.wait_for_timeout(400)

        # catalog
        page.goto(base + '#/all', wait_until='networkidle')
        page.wait_for_timeout(500)
        page.screenshot(path=str(SHOT / 'catalog.png'))

        # subject math
        page.goto(base + '#/math', wait_until='networkidle')
        page.wait_for_timeout(500)
        page.screenshot(path=str(SHOT / 'subject-math.png'))

        # mega menu
        page.goto(base + '#/', wait_until='networkidle')
        page.wait_for_timeout(300)
        page.locator('.nav-item[data-subject="math"] .nav-trigger').hover()
        page.wait_for_timeout(250)
        page.screenshot(path=str(SHOT / 'mega-menu.png'))

        # map hover tooltip
        page.goto(base + '#/bio/map', wait_until='networkidle')
        page.wait_for_timeout(1500)
        box = page.locator('.map-stage').bounding_box()
        cx, cy = box['x'] + box['width'] * 0.5, box['y'] + box['height'] * 0.45
        # sweep for a hit
        found = False
        for dx in range(-120, 121, 30):
            for dy in range(-80, 81, 30):
                page.mouse.move(cx + dx, cy + dy)
                page.wait_for_timeout(40)
                if page.locator('.map-tooltip:not([hidden])').count():
                    found = True
                    break
            if found:
                break
        page.screenshot(path=str(SHOT / 'map-hover.png'))
        print('tooltip_found', found)

        # multi-select: enable toggle, click until selection UI appears
        page.locator('.map-multi-toggle').click()
        page.wait_for_timeout(100)
        sel_visible = False
        for dx in range(-200, 201, 25):
            for dy in range(-140, 141, 25):
                page.mouse.click(cx + dx, cy + dy)
                page.wait_for_timeout(30)
                if page.locator('.map-clear-sel:not([hidden])').count() or page.locator('#map-panel h2').count():
                    sel_visible = True
            if sel_visible and page.locator('#map-panel a.entry-row').count() >= 1:
                break
        # add second via Shift
        page.keyboard.down('Shift')
        for dx in range(0, 180, 30):
            page.mouse.click(cx + dx, cy - 40)
            page.wait_for_timeout(40)
        page.keyboard.up('Shift')
        page.wait_for_timeout(400)
        page.screenshot(path=str(SHOT / 'map-multiselect.png'))
        sel_visible = page.locator('.map-clear-sel:not([hidden])').count() > 0
        print('multiselect_ui', sel_visible, 'panel_links', page.locator('#map-panel a.entry-row').count())
        if not sel_visible:
            # soft fail message but still require success for hit/errors only
            print('WARN multiselect UI not detected — check map picking')

        # Esc clears
        page.keyboard.press('Escape')
        page.wait_for_timeout(200)

        # hit area audit
        page.goto(base + '#/m/riemann-sum', wait_until='networkidle')
        page.wait_for_timeout(400)
        boxes = page.evaluate('''() => {
          const sel = 'a, button, input, select, .hit-target, .nav-trigger, .range-input, .brand, .theme-toggle';
          return [...document.querySelectorAll(sel)].filter(n => {
            const st = getComputedStyle(n);
            if (st.display==='none'||st.visibility==='hidden') return false;
            const r = n.getBoundingClientRect();
            return r.width>0 && r.height>0;
          }).map(n => {
            const r = n.getBoundingClientRect();
            return { cls: (n.className||'').toString().slice(0,60), w: Math.round(r.width), h: Math.round(r.height), t:(n.innerText||'').slice(0,20) };
          });
        }''')
        for b in boxes:
            if b['w'] < 44 or b['h'] < 44:
                if 'crumb-sep' in b['cls']:
                    continue
                hit_fails.append(b)

        browser.close()
    httpd.shutdown()

    real = [e for e in errors if 'favicon' not in e.lower()]
    print('errors', len(real))
    for e in real[:20]:
        print(e)
    print('hit_fails', len(hit_fails))
    for b in hit_fails[:20]:
        print(b)
    if real or hit_fails:
        sys.exit(1)
    print('VERIFY_OK')

if __name__ == '__main__':
    main()
