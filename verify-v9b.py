#!/usr/bin/env python3
import http.server, socketserver, threading, time, json, sys
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent
SHOT = ROOT / 'screenshots' / 'v9'
SHOT.mkdir(parents=True, exist_ok=True)
PORT = 8797

class H(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **k):
        super().__init__(*a, directory=str(ROOT), **k)
    def log_message(self, *a): pass

def main():
    socketserver.TCPServer.allow_reuse_address = True
    httpd = socketserver.TCPServer(('127.0.0.1', PORT), H)
    threading.Thread(target=httpd.serve_forever, daemon=True).start()
    time.sleep(0.2)
    base = f'http://127.0.0.1:{PORT}/index.html'
    errors = []
    report = {}
    with sync_playwright() as p:
        browser = p.chromium.launch(
            executable_path='/usr/bin/google-chrome', headless=True,
            args=['--use-gl=angle','--use-angle=swiftshader-webgl','--ignore-gpu-blocklist'])
        page = browser.new_context(viewport={'width':1280,'height':800}).new_page()
        page.on('pageerror', lambda e: errors.append(str(e)))
        page.on('console', lambda m: errors.append(m.text) if m.type=='error' else None)

        page.goto(base+'#/', wait_until='networkidle'); page.wait_for_timeout(400)

        # pastpapers
        page.goto(base+'#/pastpapers', wait_until='networkidle'); page.wait_for_timeout(600)
        report['pastpapers'] = page.locator('.practice-card').count()
        page.screenshot(path=str(SHOT/'pastpapers.png'))

        # topic self-study
        page.goto(base+'#/t/math/calc-u2/2.5', wait_until='networkidle'); page.wait_for_timeout(500)
        report['selfstudy'] = page.locator('text=直觉理解').count() + page.locator('text=循序展开').count()

        # practice
        page.goto(base+'#/mech/practice/mech-u2', wait_until='networkidle'); page.wait_for_timeout(700)
        report['fbd_svg'] = page.locator('.stim-svg svg').count()

        # map spherical + edge handle
        page.goto(base+'#/bio/map', wait_until='networkidle'); page.wait_for_timeout(2500)
        # wait unfold a bit
        page.wait_for_timeout(2000)
        box = page.locator('.map-stage').bounding_box()
        cx, cy = box['x']+box['width']*0.5, box['y']+box['height']*0.45
        edge_tip = False
        rel_panel = False
        for dx in range(-200, 201, 20):
            for dy in range(-140, 141, 20):
                page.mouse.move(cx+dx, cy+dy)
                page.wait_for_timeout(30)
                tip = page.locator('.map-tooltip:not([hidden])')
                if tip.count():
                    txt = tip.inner_text()
                    if '—' in txt or '先修' in txt or '应用于' in txt or '[' in txt:
                        edge_tip = True
                        page.mouse.click(cx+dx, cy+dy)
                        page.wait_for_timeout(400)
                        if page.locator('#map-panel h2').count() and page.locator('#map-panel a.entry-row').count() >= 1:
                            rel_panel = True
                        break
            if edge_tip and rel_panel:
                break
        page.screenshot(path=str(SHOT/'map-edge-relation.png'))
        report['edge_tooltip'] = edge_tip
        report['edge_panel'] = rel_panel

        # shift click still works
        page.keyboard.down('Shift')
        sel = 0
        for dx in range(-180, 181, 30):
            page.mouse.click(cx+dx, cy-20)
            page.wait_for_timeout(40)
            sel = page.locator('#map-panel a.entry-row').count()
            if sel >= 1:
                break
        page.keyboard.up('Shift')
        report['shift_sel'] = sel

        # overflow spot check
        overflow = []
        for w in [375, 1280, 1920]:
            page.set_viewport_size({'width': w, 'height': 800})
            page.goto(base+'#/math', wait_until='networkidle'); page.wait_for_timeout(300)
            o = page.evaluate('() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 2')
            if o: overflow.append(w)
        report['overflow_widths'] = overflow

        browser.close()

    real = [e for e in errors if 'favicon' not in e.lower()]
    report['errors'] = real[:20]
    report['error_count'] = len(real)
    (SHOT/'verify-v9b.json').write_text(json.dumps(report, indent=2, ensure_ascii=False))
    print(json.dumps(report, ensure_ascii=False))
    fail = report['error_count'] > 0 or not report.get('edge_tooltip') or not report.get('edge_panel')
    if overflow:
        fail = True
    sys.exit(1 if fail else 0)

if __name__ == '__main__':
    main()
