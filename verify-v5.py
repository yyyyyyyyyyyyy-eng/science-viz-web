#!/usr/bin/env python3
from __future__ import annotations
from pathlib import Path
from playwright.sync_api import sync_playwright

BASE = "http://127.0.0.1:8765"
OUT = Path("/workspace/science-viz/screenshots/v5")
OUT.mkdir(parents=True, exist_ok=True)

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

        page.goto(f"{BASE}/", wait_until="networkidle")
        page.wait_for_selector(".start-hero h1", timeout=8000)
        assert page.locator(".start-tips").count() == 0
        assert page.locator(".tiny-hint").count() == 1
        page.screenshot(path=str(OUT / "start.png"), full_page=True)
        results.append("start.png")

        page.goto(f"{BASE}/#/bio", wait_until="networkidle")
        page.wait_for_selector(".chapter-row", timeout=5000)
        page.screenshot(path=str(OUT / "subject-bio.png"), full_page=True)
        results.append("subject-bio.png")

        page.goto(f"{BASE}/#/math/calculus", wait_until="networkidle")
        page.wait_for_selector(".tag-row, .module-index", timeout=5000)
        assert page.locator("text=先备知识").count() == 0
        assert page.locator("text=关键概念").count() == 0
        page.screenshot(path=str(OUT / "chapter.png"), full_page=True)
        results.append("chapter.png")

        page.goto(f"{BASE}/#/paths", wait_until="networkidle")
        page.wait_for_selector(".path-block", timeout=5000)
        page.screenshot(path=str(OUT / "paths.png"), full_page=True)
        results.append("paths.png")

        page.goto(f"{BASE}/#/m/derivative-tangent", wait_until="networkidle")
        page.wait_for_selector("#viz-panel canvas", timeout=10000)
        page.wait_for_selector("#learning-goals", timeout=5000)
        page.wait_for_timeout(400)
        page.screenshot(path=str(OUT / "module.png"), full_page=True)
        results.append("module.png")

        # smoke routes
        for route in ["#/", "#/all", "#/paths", "#/bio", "#/bio/cell", "#/m/mitosis", "#/m/shm"]:
            before = len(errors) + len(page_errors)
            page.goto(f"{BASE}/{route}", wait_until="networkidle")
            page.wait_for_timeout(300)
            if route.startswith("#/m/"):
                page.wait_for_selector("#viz-panel canvas", timeout=8000)
            after = len(errors) + len(page_errors)
            results.append(f"{route}: {'OK' if after==before else 'ERR'}")

        browser.close()

    print("=== RESULTS ===")
    for r in results: print(r)
    print("=== ERRORS ===")
    print("NONE" if not errors and not page_errors else "\n".join(errors+page_errors))
    (OUT/"verify-report.txt").write_text("\n".join(results)+"\n\nERRORS:\n"+("NONE" if not errors and not page_errors else "\n".join(errors+page_errors)), encoding="utf-8")
    if errors or page_errors:
        raise SystemExit(1)

if __name__ == "__main__":
    main()
