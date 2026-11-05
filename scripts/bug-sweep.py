#!/usr/bin/env python3
"""Full-route bug sweep with Playwright (multiprocess)."""
from __future__ import annotations
import json, time, re, sys, os
from pathlib import Path
from multiprocessing import Process, Queue

ROOT = Path(__file__).resolve().parents[1]
BASE = os.environ.get("SV_BASE", "http://127.0.0.1:8765/")
routes_data = json.loads(Path("/tmp/routes.json").read_text())
ALL = routes_data["routes"]
MODULES = [r for r in ALL if r.startswith("#/m/")]
TOPICS = [r for r in ALL if r.startswith("#/t/")]
MAPS_ETC = [
    r for r in ALL
    if r.endswith("/map") or r.startswith("#/practice") or r.startswith("#/pastpapers")
    or r in ("#/", "#/all", "#/paths", "#/formulas") or r.startswith("#/formulas/")
]
REST = [r for r in ALL if r not in set(MODULES) | set(TOPICS) | set(MAPS_ETC)]
VIEWPORTS = [("1280x800", 1280, 800), ("1440x900", 1440, 900), ("390x844", 390, 844)]
THEMES = ["light", "dark"]

def worker(job_slice, out_q, wid):
    from playwright.sync_api import sync_playwright
    issues = []
    def add(**kw):
        issues.append(kw)
    t0 = time.time()
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # group by viewport
        from collections import defaultdict
        batches = defaultdict(list)
        for route, vp_name, theme, watch, samples in job_slice:
            batches[(vp_name, theme)].append((route, watch, samples))
        done = 0
        for (vp_name, theme), items in batches.items():
            w = next(v[1] for v in VIEWPORTS if v[0] == vp_name)
            h = next(v[2] for v in VIEWPORTS if v[0] == vp_name)
            ctx = browser.new_context(viewport={"width": w, "height": h}, device_scale_factor=1)
            page = ctx.new_page()
            for route, watch, samples in items:
                cons, perrs = [], []
                def on_c(msg):
                    if msg.type == "error":
                        cons.append(msg.text)
                def on_e(err):
                    perrs.append(str(err))
                page.on("console", on_c)
                page.on("pageerror", on_e)
                tag = dict(route=route, viewport=vp_name, theme=theme, worker=wid)
                try:
                    page.goto(BASE + route, wait_until="domcontentloaded", timeout=25000)
                    page.evaluate(
                        """(t) => {
                          localStorage.setItem('science-viz-theme', t);
                          document.documentElement.setAttribute('data-theme', t);
                          window.dispatchEvent(new CustomEvent('themechange', { detail: { theme: t } }));
                        }""",
                        theme,
                    )
                    page.wait_for_timeout(250 if route.startswith("#/t/") else 400)
                    series = []
                    interval = max(150, watch // max(1, samples))
                    for i in range(samples):
                        snap = page.evaluate(
                            """() => {
                              const els = [...document.querySelectorAll('.canvas-wrap,.map-stage,canvas,.stim-graph')].slice(0,24);
                              const sizes = els.map(el => {
                                const r = el.getBoundingClientRect();
                                let cls = '';
                                try { cls = (el.className && el.className.toString) ? el.className.toString().slice(0,48) : ''; } catch(e) {}
                                return { tag: el.tagName.toLowerCase(), cls, w: Math.round(r.width), h: Math.round(r.height) };
                              });
                              const doc = document.documentElement;
                              return {
                                sizes,
                                overflowX: doc.scrollWidth - doc.clientWidth,
                                katexErrors: [...document.querySelectorAll('.katex-error')].map(e => (e.textContent||'').slice(0,120)),
                                missing: (document.body.innerText||'').includes('未找到'),
                              };
                            }"""
                        )
                        series.append(snap)
                        if i < samples - 1:
                            page.wait_for_timeout(interval)
                    first, last = series[0], series[-1]
                    vp_h = h
                    vp_w = w
                    for a, b in zip(first.get("sizes") or [], last.get("sizes") or []):
                        if (b["h"] - a["h"] > 20) or (b["w"] - a["w"] > 20) or b["h"] > vp_h * 1.6 or b["w"] > vp_w * 1.6:
                            add(**tag, kind="size_growth", severity="error",
                                msg=f"{a['tag']}.{a['cls']} {a['w']}x{a['h']} -> {b['w']}x{b['h']}")
                        if b["h"] > 4000 or b["w"] > 4000:
                            add(**tag, kind="unbounded_size", severity="error", msg=f"{b['tag']} {b['w']}x{b['h']}")
                    if (last.get("overflowX") or 0) > 16:
                        # mobile nav open-state false positives: only flag if large
                        add(**tag, kind="overflow_x", severity="warn", msg=f"overflowX={last['overflowX']}")
                    for ke in last.get("katexErrors") or []:
                        add(**tag, kind="katex_error", severity="error", msg=ke)
                    if last.get("missing"):
                        add(**tag, kind="not_found", severity="error", msg="未找到")
                    for e in cons:
                        if re.search(r"favicon|Cursor|DevTools|Download the", e, re.I):
                            continue
                        add(**tag, kind="console_error", severity="error", msg=e[:300])
                    for e in perrs:
                        add(**tag, kind="page_error", severity="error", msg=e[:300])
                except Exception as e:
                    add(**tag, kind="nav_fail", severity="error", msg=str(e)[:300])
                finally:
                    try:
                        page.remove_listener("console", on_c)
                        page.remove_listener("pageerror", on_e)
                    except Exception:
                        pass
                done += 1
                if done % 40 == 0:
                    print(f"[w{wid}] {done}/{len(job_slice)} issues={len(issues)} t={time.time()-t0:.0f}s", flush=True)
            ctx.close()
        browser.close()
    out_q.put(issues)
    print(f"[w{wid}] done {done} issues={len(issues)}", flush=True)

def build_jobs(mode):
    jobs = []
    def add_routes(routes, vps, themes, watch, samples):
        for vp in vps:
            for th in themes:
                for r in routes:
                    jobs.append((r, vp[0], th, watch, samples))
    if mode in ("canvas", "full"):
        add_routes(MODULES, VIEWPORTS, THEMES, 4500, 5)
    if mode in ("maps", "full"):
        add_routes(MAPS_ETC, VIEWPORTS, THEMES, 2500, 4)
    if mode in ("topics", "full"):
        add_routes(TOPICS, VIEWPORTS, THEMES, 700, 2)
    if mode in ("rest", "full"):
        add_routes(REST, VIEWPORTS, THEMES, 800, 2)
    # dedup
    seen, uniq = set(), []
    for j in jobs:
        key = j[:3]
        if key not in seen:
            seen.add(key)
            uniq.append(j)
    return uniq

def main():
    mode = sys.argv[1] if len(sys.argv) > 1 else "full"
    jobs = build_jobs(mode)
    nworkers = int(os.environ.get("SWEEP_WORKERS", "4"))
    print(f"mode={mode} jobs={len(jobs)} workers={nworkers}", flush=True)
    # split
    chunks = [[] for _ in range(nworkers)]
    for i, j in enumerate(jobs):
        chunks[i % nworkers].append(j)
    q = Queue()
    procs = []
    t0 = time.time()
    for wid, ch in enumerate(chunks):
        if not ch:
            continue
        pr = Process(target=worker, args=(ch, q, wid))
        pr.start()
        procs.append(pr)
    all_issues = []
    for _ in procs:
        all_issues.extend(q.get())
    for pr in procs:
        pr.join()
    by = {}
    for i in all_issues:
        by[i["kind"]] = by.get(i["kind"], 0) + 1
    out = {
        "generatedAt": time.strftime("%Y-%m-%dT%H:%M:%S"),
        "timezoneNote": "box local Asia/Shanghai",
        "mode": mode,
        "routeCount": len(ALL),
        "jobCount": len(jobs),
        "elapsedSec": round(time.time() - t0, 1),
        "issueCount": len(all_issues),
        "byKind": by,
        "issues": all_issues,
    }
    path = ROOT / "audit" / "bug-sweep.json"
    path.write_text(json.dumps(out, ensure_ascii=False, indent=2))
    print(json.dumps({"ok": True, "issueCount": len(all_issues), "byKind": by, "elapsedSec": out["elapsedSec"], "out": str(path)}, ensure_ascii=False))

if __name__ == "__main__":
    main()
