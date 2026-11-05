#!/usr/bin/env python3
"""Static server for local QA.

Why not `python3 -m http.server`? Its default accept backlog is 5, so a
multi-context Playwright sweep (6–8 workers) can hit ERR_CONNECTION_RESET.
This server keeps HTTP/1.1 alive and raises the backlog to 256.

Usage:
  python3 scripts/serve-dev.py . 8765
"""
import os
import sys
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler


class Handler(SimpleHTTPRequestHandler):
    protocol_version = "HTTP/1.1"

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def log_message(self, fmt, *args):
        # Quiet by default; comment out to debug individual requests.
        pass


class Server(ThreadingHTTPServer):
    daemon_threads = True
    allow_reuse_address = True
    request_queue_size = 256


if __name__ == "__main__":
    root = sys.argv[1] if len(sys.argv) > 1 else os.getcwd()
    port = int(sys.argv[2]) if len(sys.argv) > 2 else 8765
    os.chdir(root)
    print(f"serving {root} on http://127.0.0.1:{port}/", flush=True)
    Server(("127.0.0.1", port), Handler).serve_forever()
