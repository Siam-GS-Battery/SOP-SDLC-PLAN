#!/usr/bin/env python3
"""Check relative .md links in all markdown files. Exit 1 if any are broken."""
import os, re, sys

LINK = re.compile(r'\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)')
root = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
bad = []
for d, dirs, files in os.walk(root):
    dirs[:] = [x for x in dirs if x not in (".git", "node_modules")]
    for f in files:
        if not f.endswith(".md"):
            continue
        p = os.path.join(d, f)
        with open(p, encoding="utf-8") as fh:
            fence = False
            for n, line in enumerate(fh, 1):
                if line.lstrip().startswith("```"):
                    fence = not fence
                if fence:
                    continue
                for t in LINK.findall(line):
                    if t.startswith(("http://", "https://", "mailto:")):
                        continue
                    t = t.split("#")[0]
                    if not t.endswith(".md"):
                        continue
                    if not os.path.exists(os.path.normpath(os.path.join(d, t))):
                        bad.append(f"{os.path.relpath(p, root)}:{n}: {t}")
print("\n".join(bad) if bad else "OK: no broken .md links")
sys.exit(1 if bad else 0)
