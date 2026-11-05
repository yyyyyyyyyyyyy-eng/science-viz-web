#!/usr/bin/env python3
from __future__ import annotations
from pathlib import Path
from playwright.sync_api import sync_playwright

BASE = "http://127.0.0.1:8765"
OUT = Path("/workspace/science-viz/screenshots/v4")
OUT.mkdir(parents=True, exist_ok=True)

ROUTES = [
    "#/",
    "#/all",
    "#/paths",
    "#/bio",
    "#/math",
    "#/physics",
    "#/bio/cell",
    "#/math/calculus",
    "#/physics/kinematics",
    "#/m/mitosis",
    "#/m/function-graph",
    "#/m/derivative-tangent",
    "#/m/electric-field",
]

def main():
    errors, page_errors, results = [], [], []
    with sync_playwright() as p:
        browser = p.chromium.launch(
            executable_path="/usr/bin/google-chrome",
            headless=True,
            args=["--no-sandbox", "--disable-dev-shm-usage"],
        )
        page = browser.new_context(viewport={"width": 1280, "height": 800}).new_page()

        def on_console(msg):
            if msg.type in ("error", "warning"):
                text = msg.text
                low = text.lower()
                if "favicon" in low: return
                if "failed to load resource" in low and "404" in low: return
                errors.append(f"[{msg.type}] {text}")

        def on_page_error(exc):
            page_errors.append(str(exc))

        page.on("console", on_console)
        page.on("pageerror", on_page_error)

        # Start page
        page.goto(f"{BASE}/", wait_until="networkidle")
        page.wait_for_selector(".start-hero", timeout=8000)
        page.wait_for_selector(".step-list", timeout=3000)
        page.wait_for_selector(".entry-row", timeout=3000)
        page.screenshot(path=str(OUT / "start.png"), full_page=True)
        results.append("start.png")

        # Dark start
        page.evaluate("""() => {
          document.documentElement.setAttribute('data-theme','dark');
          localStorage.setItem('science-viz-theme','dark');
        }""")
        page.wait_for_timeout(200)
        page.screenshot(path=str(OUT / "start-dark.png"), full_page=True)
        page.evaluate("""() => {
          document.documentElement.setAttribute('data-theme','light');
          localStorage.setItem('science-viz-theme','light');
        }""")
        results.append("start-dark.png")

        # Subject bio
        page.goto(f"{BASE}/#/bio", wait_until="networkidle")
        page.wait_for_selector(".chapter-row", timeout=5000)
        page.wait_for_selector(".start-btn", timeout=3000)
        page.screenshot(path=str(OUT / "subject-bio.png"), full_page=True)
        results.append("subject-bio.png")

        # Chapter
        page.goto(f"{BASE}/#/math/calculus", wait_until="networkidle")
        page.wait_for_selector(".info-block", timeout=5000)
        page.wait_for_selector(".concept-list", timeout=3000)
        page.screenshot(path=str(OUT / "chapter.png"), full_page=True)
        results.append("chapter.png")

        # Paths
        page.goto(f"{BASE}/#/paths", wait_until="networkidle")
        page.wait_for_selector(".path-block", timeout=5000)
        page.screenshot(path=str(OUT / "paths.png"), full_page=True)
        results.append("paths.png")

        # Module goals
        page.goto(f"{BASE}/#/m/derivative-tangent", wait_until="networkidle")
        page.wait_for_selector("#learning-goals", timeout=8000)
        page.wait_for_selector("#viz-panel canvas", timeout=8000)
        page.wait_for_selector(".next-suggest", timeout=3000)
        page.wait_for_timeout(500)
        page.screenshot(path=str(OUT / "module-goals.png"), full_page=True)
        results.append("module-goals.png")

        # All routes smoke
        for route in ROUTES:
            before = len(errors) + len(page_errors)
            page.goto(f"{BASE}/{route}", wait_until="networkidle")
            page.wait_for_timeout(350)
            if route.startswith("#/m/"):
                page.wait_for_selector("#viz-panel canvas", timeout=8000)
            after = len(errors) + len(page_errors)
            results.append(f"{route}: {'OK' if after == before else 'HAS_ERRORS'}")

        # Mega menu chapter link goes to chapter page
        page.goto(f"{BASE}/#/", wait_until="networkidle")
        page.hover('.nav-item[data-subject="math"] .nav-trigger')
        page.wait_for_timeout(250)
        page.click('.nav-item[data-subject="math"] .mega-chapter')
        page.wait_for_timeout(400)
        results.append(f"mega chapter -> {page.evaluate('location.hash')}")

        # Palette finds 路径
        page.keyboard.press("Control+k")
        page.wait_for_selector("#command-palette:not([hidden])", timeout=3000)
        page.fill(".palette-input", "路径")
        page.wait_for_timeout(200)
        page.keyboard.press("Enter")
        page.wait_for_timeout(400)
        results.append(f"palette 路径 -> {page.evaluate('location.hash')}")

        # Progress remembered
        last = page.evaluate("() => window.__SCIENCE_VIZ__.getLastModule()")
        results.append(f"last={last}")

        browser.close()

    print("=== RESULTS ===")
    for r in results: print(r)
    print("=== ERRORS ===")
    if not errors and not page_errors:
        print("NONE")
    else:
        for e in errors: print("CONSOLE", e)
        for e in page_errors: print("PAGE", e)
    (OUT / "verify-report.txt").write_text(
        "\n".join(results) + "\n\nERRORS:\n" + ("NONE" if not errors and not page_errors else "\n".join(errors+page_errors)),
        encoding="utf-8",
    )
    if errors or page_errors:
        raise SystemExit(1)

if __name__ == "__main__":
    main()
