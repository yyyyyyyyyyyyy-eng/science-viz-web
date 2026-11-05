#!/usr/bin/env python3
"""v3 verification: mega-menu, subject sidebar, module tree, palette, shortcuts, mobile."""
from __future__ import annotations

from pathlib import Path
from playwright.sync_api import sync_playwright

BASE = "http://127.0.0.1:8765"
OUT = Path("/workspace/science-viz/screenshots/v3")
OUT.mkdir(parents=True, exist_ok=True)

MODULES = [
    "mitosis", "dna-replication", "lotka-volterra",
    "function-graph", "derivative-tangent", "taylor-series", "unit-circle",
    "projectile", "shm", "electric-field",
]


def main() -> None:
    errors: list[str] = []
    page_errors: list[str] = []
    results: list[str] = []

    with sync_playwright() as p:
        browser = p.chromium.launch(
            executable_path="/usr/bin/google-chrome",
            headless=True,
            args=["--no-sandbox", "--disable-dev-shm-usage"],
        )
        context = browser.new_context(viewport={"width": 1280, "height": 800}, device_scale_factor=1)
        page = context.new_page()

        def on_console(msg):
            if msg.type in ("error", "warning"):
                text = msg.text
                low = text.lower()
                if "favicon" in low:
                    return
                if "failed to load resource" in low and "404" in low:
                    return
                errors.append(f"[{msg.type}] {text}")

        def on_page_error(exc):
            page_errors.append(str(exc))

        page.on("console", on_console)
        page.on("pageerror", on_page_error)

        page.goto(f"{BASE}/", wait_until="networkidle")
        page.wait_for_selector(".module-row", timeout=10000)
        results.append("home loaded")

        # Mega menu: hover bio
        page.hover('.nav-item[data-subject="bio"] .nav-trigger')
        page.wait_for_timeout(300)
        page.wait_for_selector('.nav-item[data-subject="bio"].open .mega-menu', timeout=3000)
        page.screenshot(path=str(OUT / "home-menu-open.png"), full_page=False)
        results.append("mega-menu open screenshot")

        # Click a mega link
        page.click('.nav-item[data-subject="bio"] .mega-link')
        page.wait_for_selector("#viz-panel canvas", timeout=10000)
        results.append(f"mega-link -> {page.evaluate('location.hash')}")

        # Subject page + sidebar
        page.goto(f"{BASE}/#/math", wait_until="networkidle")
        page.wait_for_selector(".subject-layout", timeout=5000)
        page.wait_for_selector(".chapter-nav-link", timeout=3000)
        n_chapters = page.locator(".chapter-nav-link").count()
        results.append(f"subject math chapters={n_chapters}")
        page.screenshot(path=str(OUT / "subject-page.png"), full_page=True)

        # Module sidebar + breadcrumb + prev/next
        page.goto(f"{BASE}/#/m/derivative-tangent", wait_until="networkidle")
        page.wait_for_selector("#viz-panel canvas", timeout=10000)
        page.wait_for_selector(".module-tree .tree-link.active", timeout=3000)
        page.wait_for_selector(".breadcrumb", timeout=2000)
        page.wait_for_selector(".module-pager", timeout=2000)
        # editable slider
        if page.locator(".value-edit").count() > 0:
            page.locator(".value-edit").first.click()
            page.locator(".value-edit").first.fill("1.5")
            page.locator(".value-edit").first.press("Enter")
            results.append("editable slider ok")
        page.screenshot(path=str(OUT / "module-sidebar.png"), full_page=True)

        # Prev/next keyboard
        before = page.evaluate("location.hash")
        page.keyboard.press("ArrowRight")
        page.wait_for_timeout(600)
        after = page.evaluate("location.hash")
        results.append(f"ArrowRight {before} -> {after}")
        page.keyboard.press("ArrowLeft")
        page.wait_for_timeout(600)
        results.append(f"ArrowLeft -> {page.evaluate('location.hash')}")

        # Command palette
        page.keyboard.press("Control+k")
        page.wait_for_selector("#command-palette:not([hidden])", timeout=3000)
        page.wait_for_selector(".palette-item", timeout=3000)
        page.fill(".palette-input", "电场")
        page.wait_for_timeout(200)
        page.screenshot(path=str(OUT / "palette.png"), full_page=False)
        page.keyboard.press("Enter")
        page.wait_for_timeout(700)
        results.append(f"palette select -> {page.evaluate('location.hash')}")

        # Esc closes
        page.keyboard.press("Control+k")
        page.wait_for_selector("#command-palette:not([hidden])", timeout=2000)
        page.keyboard.press("Escape")
        page.wait_for_timeout(200)
        hidden = page.evaluate("document.getElementById('command-palette').hidden")
        results.append(f"Esc closes palette: {hidden}")

        # Slash focuses search on home
        page.goto(f"{BASE}/#/", wait_until="networkidle")
        page.wait_for_selector("#search-input", timeout=3000)
        page.keyboard.press("/")
        page.wait_for_timeout(150)
        focused = page.evaluate("document.activeElement && document.activeElement.id")
        results.append(f"/ focus -> {focused}")

        # Dark home
        page.evaluate("""() => {
          document.documentElement.setAttribute('data-theme','dark');
          localStorage.setItem('science-viz-theme','dark');
        }""")
        page.wait_for_timeout(200)
        page.screenshot(path=str(OUT / "home-dark.png"), full_page=True)
        page.evaluate("""() => {
          document.documentElement.setAttribute('data-theme','light');
          localStorage.setItem('science-viz-theme','light');
        }""")

        # Mobile menu
        page.set_viewport_size({"width": 390, "height": 844})
        page.goto(f"{BASE}/#/", wait_until="networkidle")
        page.wait_for_selector("#nav-mobile-toggle", timeout=3000)
        page.click("#nav-mobile-toggle")
        page.wait_for_timeout(300)
        page.wait_for_selector("#mobile-nav:not([hidden])", timeout=3000)
        page.screenshot(path=str(OUT / "mobile-menu.png"), full_page=False)
        results.append("mobile menu open")
        page.click("#mobile-nav a.mobile-link")
        page.wait_for_timeout(500)
        results.append(f"mobile link -> {page.evaluate('location.hash')}")

        # Smoke all modules light (desktop)
        page.set_viewport_size({"width": 1280, "height": 800})
        for mid in MODULES:
            before_err = len(errors) + len(page_errors)
            page.goto(f"{BASE}/#/m/{mid}", wait_until="networkidle")
            page.wait_for_selector("#viz-panel canvas", timeout=10000)
            page.wait_for_timeout(350)
            # reset button exists
            has_reset = page.evaluate(
                """() => [...document.querySelectorAll('#control-panel button')]
                  .some(b => /重置|复位/i.test(b.textContent||''))"""
            )
            after_err = len(errors) + len(page_errors)
            status = "OK" if after_err == before_err else "HAS_ERRORS"
            results.append(f"{mid}: {status} reset={has_reset}")

        # last visited
        last = page.evaluate("() => window.__SCIENCE_VIZ__.getLastModule()")
        results.append(f"last module remembered: {last}")

        # radius / emoji quick check via page
        bad_radius = page.evaluate(
            """() => {
              const bad=[];
              document.querySelectorAll('button,input,.mega-inner,.palette-panel,.module-row').forEach((el,i)=>{
                const br=getComputedStyle(el).borderRadius;
                if(br && br!=='0px' && !/^0px( 0px)*$/.test(br.trim())) bad.push(br);
              });
              return bad.slice(0,5);
            }"""
        )
        results.append(f"non-zero radius sample: {bad_radius or 'NONE'}")

        browser.close()

    print("=== RESULTS ===")
    for r in results:
        print(r)
    print("=== ERRORS ===")
    if not errors and not page_errors:
        print("NONE")
    else:
        for e in errors:
            print("CONSOLE", e)
        for e in page_errors:
            print("PAGE", e)

    (OUT / "verify-report.txt").write_text(
        "\n".join(results)
        + "\n\nERRORS:\n"
        + ("NONE" if not errors and not page_errors else "\n".join(errors + page_errors)),
        encoding="utf-8",
    )
    if errors or page_errors:
        raise SystemExit(1)


if __name__ == "__main__":
    main()
