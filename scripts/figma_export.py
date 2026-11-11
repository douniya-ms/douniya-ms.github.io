#!/usr/bin/env python3
"""Export a Figma node as an image, sized for its slot on the site.

The exported image has the proportions of the node itself. So in Figma,
put the image inside a frame that is exactly the size of its slot
(Work page: 580x682, "Other projects" card: 530x224), crop it the way
you want there, then export that frame.

Usage:
  export FIGMA_TOKEN=...   # Figma > Settings > Security > Personal access tokens
  python3 scripts/figma_export.py 40:1042 src/assets/projects/avatar/Avatar.jpg
  python3 scripts/figma_export.py 40-1042 out.png --format png --scale 3

The node id is the "node-id" in the frame's link (40-1042 and 40:1042 both work).
Output size = node size x scale. Scale 2 is sharp on retina screens.
"""

import argparse
import json
import os
import sys
import urllib.parse
import urllib.request

DEFAULT_FILE_KEY = "Q2xVXHA1m5r29fIcrTfARM"  # the "Portfolio" Figma file


def main() -> int:
    parser = argparse.ArgumentParser(description="Export a Figma node as an image.")
    parser.add_argument("node", help="node id, e.g. 40:1042 or 40-1042")
    parser.add_argument("output", help="where to save the image")
    parser.add_argument("--format", choices=["jpg", "png", "svg", "pdf"], default="jpg")
    parser.add_argument("--scale", type=float, default=2, help="0.01 to 4 (default 2)")
    parser.add_argument("--file", default=DEFAULT_FILE_KEY, help="Figma file key")
    args = parser.parse_args()

    token = os.environ.get("FIGMA_TOKEN")
    if not token:
        print("Set FIGMA_TOKEN first (Figma > Settings > Security).", file=sys.stderr)
        return 1
    if not 0.01 <= args.scale <= 4:
        print("--scale must be between 0.01 and 4.", file=sys.stderr)
        return 1

    node = args.node.replace("-", ":")
    query = urllib.parse.urlencode({"ids": node, "format": args.format, "scale": args.scale})
    request = urllib.request.Request(
        f"https://api.figma.com/v1/images/{args.file}?{query}",
        headers={"X-Figma-Token": token},
    )
    with urllib.request.urlopen(request) as response:
        data = json.load(response)

    url = (data.get("images") or {}).get(node)
    if data.get("err") or not url:
        print(f"Figma could not render node {node}: {data.get('err') or 'no image returned'}", file=sys.stderr)
        return 1

    os.makedirs(os.path.dirname(os.path.abspath(args.output)), exist_ok=True)
    urllib.request.urlretrieve(url, args.output)
    print(f"Saved {args.output} ({os.path.getsize(args.output) / 1024:.0f} KB)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
