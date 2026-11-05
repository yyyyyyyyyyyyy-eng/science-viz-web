#!/usr/bin/env python3
"""Verify maps are nodes+edges only (no shell wireframes); reshoot final map screenshots."""
import http.server, socketserver, threading, time, json
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent
OUT = ROOT / 'screenshots' / 'final'
OUT.mkdir(parents=True, exist_ok=True)
PORT = 8815

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
            args=['--use-gl=angle','--use-angle=swiftshader-webgl','--ignore-gpu-blocklist','--no-sandbox'])
        page = browser.new_context(viewport={'width':1400,'height':900}, device_scale_factor=1).new_page()
        page.on('pageerror', lambda e: errors.append(str(e)))
        page.on('console', lambda m: errors.append(m.text) if m.type=='error' and 'favicon' not in m.text.lower() else None)

        # Source guard: no shellGroup / wireframe materials in loaded mindmap
        src = (ROOT/'js'/'mindmap.js').read_text()
        report['has_shellGroup'] = 'shellGroup' in src
        report['has_wireframe_mat'] = 'wireframe: true' in src or 'wireframe:true' in src
        report['has_ring_layout'] = 'ring = n.layer' in src or 'Layout restored from first map' in src
        report['has_hierarchy'] = 'buildHierarchicalGraph' in src and 'CapsuleGeometry' in src
        report['has_fibonacci'] = 'fibSphere' in src

        for sub in ['bio','math','mech','em']:
            page.goto(base + f'#/{sub}/map', wait_until='networkidle')
            page.wait_for_timeout(2800)
            # unfold a bit so more shells of nodes appear
            if page.locator('button:has-text("展开"), button:has-text("unfold"), #map-unfold').count():
                try:
                    page.locator('button:has-text("展开")').first.click(timeout=500)
                except Exception:
                    pass
            page.wait_for_timeout(800)
            page.screenshot(path=str(OUT / f'map-{sub}.png'))
            report[f'map_{sub}'] = True

        # Interaction: edge midpoint + shift on bio
        page.goto(base + '#/bio/map', wait_until='networkidle')
        page.wait_for_timeout(3000)
        box = page.locator('.map-stage').bounding_box()
        cx, cy = box['x']+box['width']*0.5, box['y']+box['height']*0.45
        edge_tip = False
        rel_panel = False
        for dx in range(-220, 221, 16):
            for dy in range(-160, 161, 16):
                page.mouse.move(cx+dx, cy+dy)
                page.wait_for_timeout(20)
                tip = page.locator('.map-tooltip:not([hidden])')
                if tip.count():
                    txt = tip.inner_text()
                    if any(k in txt for k in ('—','先修','应用于','[')):
                        edge_tip = True
                        page.mouse.click(cx+dx, cy+dy)
                        page.wait_for_timeout(350)
                        if page.locator('#map-panel h2').count() and page.locator('#map-panel a.entry-row').count() >= 1:
                            rel_panel = True
                        break
            if edge_tip and rel_panel:
                break
        page.keyboard.down('Shift')
        sel = 0
        for dx in range(-200, 201, 28):
            page.mouse.click(cx+dx, cy-10)
            page.wait_for_timeout(40)
            sel = page.locator('#map-panel a.entry-row').count()
            if sel >= 1:
                break
        page.keyboard.up('Shift')
        report['cluster_labels'] = page.locator('.map-cluster-label').count()
        report['edge_tooltip'] = edge_tip
        report['edge_panel'] = rel_panel
        report['shift_sel'] = sel
        page.screenshot(path=str(OUT / 'map-edge-relation.png'))

        # Home smoke (zero errors)
        page.goto(base + '#/', wait_until='networkidle')
        page.wait_for_timeout(300)

        browser.close()
    real = [e for e in errors if 'favicon' not in e.lower()]
    report['errors'] = real[:20]
    report['error_count'] = len(real)
    report['ok'] = (
        not report['has_shellGroup'] and not report['has_wireframe_mat']
        and not report.get('has_ring_layout') and report.get('has_hierarchy')
        and not report.get('has_fibonacci')
        and report['edge_tooltip'] and report['edge_panel']
        and report['shift_sel'] >= 1 and report['error_count'] == 0
        and report.get('cluster_labels', 0) >= 3
        and all(report.get(f'map_{s}') for s in ['bio','math','mech','em'])
    )
    (ROOT/'audit'/'map-only-qa.json').write_text(json.dumps(report, indent=2, ensure_ascii=False))
    print(json.dumps(report, indent=2, ensure_ascii=False))
    print('VERIFY_OK' if report['ok'] else 'VERIFY_ISSUES')
    httpd.shutdown()

if __name__ == '__main__':
    main()
