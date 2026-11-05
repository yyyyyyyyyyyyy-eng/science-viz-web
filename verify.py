#!/usr/bin/env python3
"""Open home + every module, interact lightly, assert no console/page errors, save screenshots."""
from __future__ import annotations

import time
from pathlib import Path

from playwright.sync_api import sync_playwright

BASE = "http://127.0.0.1:8765"
OUT = Path("/workspace/science-viz/screenshots")
OUT.mkdir(parents=True, exist_ok=True)

MODULES = [
    "mitosis",
    "dna-replication",
    "lotka-volterra",
    "function-graph",
    "derivative-tangent",
    "taylor-series",
    "unit-circle",
    "projectile",
    "shm",
    "electric-field",
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
        context = browser.new_context(
            viewport={"width": 1280, "height": 800},
            device_scale_factor=1,
        )
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

        # HOME
        page.goto(f"{BASE}/", wait_until="networkidle")
        page.wait_for_selector(".module-row", timeout=10000)
        # search box
        page.fill("#search-input", "导数")
        page.wait_for_timeout(300)
        cards = page.locator(".module-row").count()
        results.append(f"search '导数' -> {cards} cards")
        page.fill("#search-input", "")
        page.wait_for_timeout(200)
        page.screenshot(path=str(OUT / "home.png"), full_page=True)
        results.append("screenshot home.png")

        # subject nav
        page.click('a.nav-link[data-subject="bio"]')
        page.wait_for_timeout(300)
        page.click('a.nav-link[data-subject="all"]')
        page.wait_for_timeout(200)

        for mid in MODULES:
            before_err = len(errors) + len(page_errors)
            page.goto(f"{BASE}/#/m/{mid}", wait_until="networkidle")
            page.wait_for_selector("#viz-panel canvas", timeout=10000)
            page.wait_for_timeout(600)

            # light interaction: nudge first range slider (avoid midpoint=0 for symmetric ranges)
            ranges = page.locator('#control-panel input[type="range"]')
            if ranges.count() > 0:
                ranges.nth(0).evaluate(
                    """(el) => {
                      const min = Number(el.min), max = Number(el.max), cur = Number(el.value);
                      const span = max - min;
                      let next = cur + span * 0.15;
                      if (next > max) next = cur - span * 0.15;
                      if (Math.abs(next) < 1e-6 && min < 0 && max > 0) next = max * 0.5;
                      el.value = String(next);
                      el.dispatchEvent(new Event('input', { bubbles: true }));
                    }"""
                )
            # click a primary button if any
            btn = page.locator("#control-panel button.btn.primary")
            if btn.count() > 0:
                try:
                    btn.first.click(timeout=2000)
                except Exception:
                    pass
            # drag on canvas a bit
            canvas = page.locator("#viz-panel canvas").first
            box = canvas.bounding_box()
            if box:
                page.mouse.move(box["x"] + box["width"] * 0.4, box["y"] + box["height"] * 0.5)
                page.mouse.down()
                page.mouse.move(box["x"] + box["width"] * 0.55, box["y"] + box["height"] * 0.45)
                page.mouse.up()

            page.wait_for_timeout(500)
            shot = OUT / f"{mid}.png"
            page.screenshot(path=str(shot), full_page=True)
            after_err = len(errors) + len(page_errors)
            status = "OK" if after_err == before_err else "HAS_ERRORS"
            results.append(f"{mid}: {status} -> {shot}")

        browser.close()

    print("=== RESULTS ===")
    for r in results:
        print(r)
    print("=== CONSOLE/PAGE ERRORS ===")
    if not errors and not page_errors:
        print("NONE")
    else:
        for e in errors:
            print("CONSOLE", e)
        for e in page_errors:
            print("PAGE", e)

    # write report
    report = OUT / "verify-report.txt"
    report.write_text(
        "\n".join(results)
        + "\n\nERRORS:\n"
        + ("NONE" if not errors and not page_errors else "\n".join(errors + page_errors)),
        encoding="utf-8",
    )

    if errors or page_errors:
        raise SystemExit(1)

if __name__ == "__main__":
    main()
