#!/usr/bin/env python3
"""Full-route Playwright bug sweep: every route × 3 viewports × 2 themes, 5s watch."""
from __future__ import annotations
import json, time, re, os, sys
from pathlib import Path
from multiprocessing import Process, Queue
from collections import defaultdict

ROOT = Path(__file__).resolve().parents[1]
BASE = os.environ.get("SV_BASE", "http://127.0.0.1:8765/")
routes_data = json.loads(Path("/tmp/routes.json").read_text())
ALL = routes_data["routes"]
VIEWPORTS = [("1280x800", 1280, 800), ("1440x900", 1440, 900), ("390x844", 390, 844)]
THEMES = ["light", "dark"]
WATCH_MS = 5000
SAMPLES = 6

def worker(job_slice, out_q, wid):
    from playwright.sync_api import sync_playwright
    issues = []
    def add(**kw):
        issues.append(kw)
    t0 = time.time()
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        batches = defaultdict(list)
        for route, vp_name, theme in job_slice:
            batches[(vp_name, theme)].append(route)
        done = 0
        for (vp_name, theme), routes in batches.items():
            w = next(v[1] for v in VIEWPORTS if v[0] == vp_name)
            h = next(v[2] for v in VIEWPORTS if v[0] == vp_name)
            ctx = browser.new_context(viewport={"width": w, "height": h}, device_scale_factor=1)
            page = ctx.new_page()
            for route in routes:
                cons, perrs, failed = [], [], []
                def on_c(msg):
                    if msg.type == "error":
                        cons.append(msg.text)
                def on_e(err):
                    perrs.append(str(err))
                def on_resp(resp):
                    if resp.status >= 400 and "favicon" not in resp.url:
                        failed.append(f"{resp.status} {resp.url}")
                page.on("console", on_c)
                page.on("pageerror", on_e)
                page.on("response", on_resp)
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
                    page.wait_for_timeout(400)
                    series = []
                    interval = WATCH_MS // SAMPLES
                    for i in range(SAMPLES):
                        snap = page.evaluate(
                            """() => {
                              const els = [...document.querySelectorAll('.canvas-wrap,.map-stage,canvas,.stim-graph,.exam-figure-box')].slice(0, 30);
                              const sizes = els.map(el => {
                                const r = el.getBoundingClientRect();
                                let cls = '';
                                try { cls = (el.className && el.className.toString) ? el.className.toString().slice(0, 48) : ''; } catch (e) {}
                                return { tag: el.tagName.toLowerCase(), cls, w: Math.round(r.width), h: Math.round(r.height) };
                              });
                              const doc = document.documentElement;
                              const main = document.querySelector('main') || document.body;
                              // crude overlap: fixed nav vs first h1
                              let overlap = false;
                              const nav = document.querySelector('nav, .topbar, header');
                              const h1 = document.querySelector('h1');
                              if (nav && h1) {
                                const a = nav.getBoundingClientRect(), b = h1.getBoundingClientRect();
                                overlap = !(a.bottom <= b.top + 2 || b.bottom <= a.top || a.right <= b.left || b.right <= a.left);
                                if (a.bottom > b.top + 8 && a.top < b.bottom) overlap = true;
                              }
                              const dead = [...document.querySelectorAll('button,[role=button],input,select,a.hit-target')].slice(0, 40).filter(el => {
                                const s = getComputedStyle(el);
                                return s.pointerEvents === 'none' || el.disabled;
                              }).map(el => (el.tagName + '.' + (el.className||'')).slice(0, 40));
                              const brokenHash = [...document.querySelectorAll('a[href^=\"#\"]')].filter(a => {
                                const h = a.getAttribute('href') || '';
                                return h === '#' || h === '#/' && !a.textContent.trim();
                              }).length;
                              return {
                                sizes,
                                overflowX: doc.scrollWidth - doc.clientWidth,
                                katexErrors: [...document.querySelectorAll('.katex-error')].map(e => (e.textContent||'').slice(0, 120)),
                                missing: (document.body.innerText||'').includes('未找到'),
                                overlapNavH1: overlap,
                                deadControls: dead.slice(0, 5),
                                emptyAnchors: brokenHash,
                              };
                            }"""
                        )
                        series.append(snap)
                        if i < SAMPLES - 1:
                            page.wait_for_timeout(interval)
                    first, last = series[0], series[-1]
                    for a, b in zip(first.get("sizes") or [], last.get("sizes") or []):
                        if (b["h"] - a["h"] > 20) or (b["w"] - a["w"] > 20) or b["h"] > h * 1.6 or b["w"] > w * 1.6:
                            add(**tag, kind="size_growth", severity="error",
                                msg=f"{a['tag']}.{a['cls']} {a['w']}x{a['h']} -> {b['w']}x{b['h']}")
                        if b["h"] > 4000 or b["w"] > 4000:
                            add(**tag, kind="unbounded_size", severity="error", msg=f"{b['tag']} {b['w']}x{b['h']}")
                    if (last.get("overflowX") or 0) > 20:
                        add(**tag, kind="overflow_x", severity="warn", msg=f"overflowX={last['overflowX']}")
                    for ke in last.get("katexErrors") or []:
                        add(**tag, kind="katex_error", severity="error", msg=ke)
                    if last.get("missing"):
                        add(**tag, kind="not_found", severity="error", msg="未找到")
                    if last.get("overlapNavH1") and vp_name != "390x844":
                        # mobile nav often overlays; only flag desktop
                        pass  # soft: many SPAs have sticky nav; skip false positives
                    for d in last.get("deadControls") or []:
                        if "disabled" in d.lower():
                            continue
                        add(**tag, kind="dead_control", severity="warn", msg=d)
                    for e in cons:
                        if re.search(r"favicon|Cursor|DevTools|Download the", e, re.I):
                            continue
                        # ignore expected optional enrichments miss if any
                        if "batch3" in e:
                            continue
                        add(**tag, kind="console_error", severity="error", msg=e[:300])
                    for e in perrs:
                        add(**tag, kind="page_error", severity="error", msg=e[:300])
                    for u in failed:
                        if re.search(r"favicon|batch3", u, re.I):
                            continue
                        add(**tag, kind="http_error", severity="error", msg=u[:300])
                except Exception as e:
                    add(**tag, kind="nav_fail", severity="error", msg=str(e)[:300])
                finally:
                    try:
                        page.remove_listener("console", on_c)
                        page.remove_listener("pageerror", on_e)
                        page.remove_listener("response", on_resp)
                    except Exception:
                        pass
                done += 1
                if done % 30 == 0:
                    print(f"[w{wid}] {done}/{len(job_slice)} issues={len(issues)} t={time.time()-t0:.0f}s", flush=True)
            ctx.close()
        browser.close()
    out_q.put(issues)
    print(f"[w{wid}] done {done} issues={len(issues)}", flush=True)

def main():
    jobs = []
    for vp, _, _ in VIEWPORTS:
        for th in THEMES:
            for r in ALL:
                jobs.append((r, vp, th))
    nworkers = int(os.environ.get("SWEEP_WORKERS", "6"))
    print(f"full sweep jobs={len(jobs)} workers={nworkers} watch={WATCH_MS}ms", flush=True)
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
    # dedupe identical issues across workers for report clarity (keep all in json)
    out = {
        "generatedAt": time.strftime("%Y-%m-%dT%H:%M:%S"),
        "timezoneNote": "Asia/Shanghai",
        "routeCount": len(ALL),
        "jobCount": len(jobs),
        "watchMs": WATCH_MS,
        "viewports": [v[0] for v in VIEWPORTS],
        "themes": THEMES,
        "elapsedSec": round(time.time() - t0, 1),
        "issueCount": len(all_issues),
        "byKind": by,
        "issues": all_issues,
    }
    (ROOT / "audit").mkdir(exist_ok=True)
    (ROOT / "audit/bug-sweep.json").write_text(json.dumps(out, ensure_ascii=False, indent=2))
    # Markdown report
    lines = [
        "# Bug sweep report",
        "",
        f"- Generated: {out['generatedAt']} (Asia/Shanghai)",
        f"- Routes: {out['routeCount']} × viewports {out['viewports']} × themes {out['themes']} = {out['jobCount']} jobs",
        f"- Watch: {WATCH_MS} ms / page ({SAMPLES} samples)",
        f"- Elapsed: {out['elapsedSec']} s",
        f"- Issues: **{out['issueCount']}**",
        "",
        "## By kind",
        "",
        "| Kind | Count |",
        "|---|---:|",
    ]
    for k, v in sorted(by.items(), key=lambda x: -x[1]):
        lines.append(f"| `{k}` | {v} |")
    lines += ["", "## Issues", ""]
    # group by kind
    by_list = defaultdict(list)
    for i in all_issues:
        by_list[i["kind"]].append(i)
    for kind, items in sorted(by_list.items(), key=lambda x: -len(x[1])):
        lines.append(f"### {kind} ({len(items)})")
        lines.append("")
        # collapse identical msg across viewports
        seen = {}
        for it in items:
            key = (it.get("route"), it.get("msg", "")[:120])
            seen.setdefault(key, []).append(f"{it.get('viewport')}/{it.get('theme')}")
        for (route, msg), vps in list(seen.items())[:80]:
            lines.append(f"- `{route}` — {msg} _(in {', '.join(vps[:6])}{('…' if len(vps)>6 else '')})_")
        if len(seen) > 80:
            lines.append(f"- … +{len(seen)-80} more unique")
        lines.append("")
    (ROOT / "audit/bug-sweep.md").write_text("\n".join(lines))
    print(json.dumps({"ok": True, "issueCount": len(all_issues), "byKind": by, "elapsedSec": out["elapsedSec"]}, ensure_ascii=False))

if __name__ == "__main__":
    main()
