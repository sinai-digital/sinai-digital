#!/usr/bin/env bash
#
# build-icons.sh — regenerate raster icons crisply from the vector SVG masters.
#
# Why Chromium: this toolchain has no rsvg-convert / Inkscape, and ImageMagick's
# SVG delegate is configured to shell out to rsvg-convert (absent) — so it silently
# falls back to its low-quality internal renderer, producing BLURRY PNGs. A headless
# browser is a top-tier SVG rasterizer, so we render straight from the vector at each
# native target size. Source of truth is brand/ ; outputs land in public/ (deployed).
#
# Usage:  bash scripts/build-icons.sh        (run from anywhere; cd's to repo root)
# Env:    CHROME=google-chrome bash scripts/build-icons.sh   (override browser)
#
set -euo pipefail
cd "$(dirname "$0")/.."
ROOT="$(pwd)"
CHROME="${CHROME:-chromium-browser}"
PRIMARY="$ROOT/brand/logo-assets-v2/primary.svg"   # full-color mountain mark (master)

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

# render <out> <w> <h> <svg-abs> <mark-width-css> <bg-css>
# Centers the mark on a <w>x<h> canvas at the given width, on the given background.
render() {
  local out="$1" w="$2" h="$3" svg="$4" markw="$5" bg="$6"
  cat > "$TMP/wrap.html" <<HTML
<!doctype html><html><head><meta charset="utf-8"><style>
  html,body{margin:0;padding:0;background:${bg}}
  .c{width:${w}px;height:${h}px;display:flex;align-items:center;justify-content:center}
  .c img{width:${markw};height:auto;display:block}
</style></head>
<body><div class="c"><img src="file://${svg}"></div></body></html>
HTML
  "$CHROME" --headless=new --no-sandbox --hide-scrollbars \
    --force-device-scale-factor=1 --default-background-color=00000000 \
    --window-size="${w},${h}" --screenshot="$ROOT/${out}" \
    "file://$TMP/wrap.html" 2>/dev/null
  printf '  ✓ %-48s %sx%s\n' "$out" "$w" "$h"
}

echo "Shipped icons (square, transparent, color mark ~96% width, centered):"
render public/icon.png                              512 512 "$PRIMARY" 96% transparent
render public/apple-icon.png                        180 180 "$PRIMARY" 96% transparent
render public/images/sinai-digital-icon-pwa-192.png 192 192 "$PRIMARY" 96% transparent
render public/images/sinai-digital-icon-pwa-512.png 512 512 "$PRIMARY" 96% transparent

echo "Color exports (natural 204:167 aspect, white background, full-bleed):"
render public/images/sinai-digital-icon-256.png    256 210 "$PRIMARY" 100% "#ffffff"
render public/images/sinai-digital-icon-512.png    512 419 "$PRIMARY" 100% "#ffffff"
render public/images/sinai-digital-icon-1024.png  1024 838 "$PRIMARY" 100% "#ffffff"

echo "Done. (Vector masters live in brand/; SVGs in public/ are already crisp.)"
