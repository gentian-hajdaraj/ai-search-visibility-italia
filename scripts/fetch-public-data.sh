#!/usr/bin/env bash
set -euo pipefail

BASE="https://telescop.it/research/ai-search-visibility-italia"
OUT="${1:-data/downloaded-v1.0}"

mkdir -p "$OUT"

echo "Downloading public Telescop Research v1.0 assets..."
curl -fL --retry 3 --connect-timeout 15   "$BASE/methodology/data/panel-500.csv"   -o "$OUT/panel-500.csv"

curl -fL --retry 3 --connect-timeout 15   "$BASE/data/research-summary-v1.0.json"   -o "$OUT/research-summary-v1.0.json"

curl -fL --retry 3 --connect-timeout 15   "$BASE/methodology/data/manifest.json"   -o "$OUT/manifest.json"

curl -fL --retry 3 --connect-timeout 15   "$BASE/methodology/data/SHA256SUMS.txt"   -o "$OUT/SHA256SUMS.txt"

echo
echo "Verifying frozen 500-query panel..."
EXPECTED="c39b8f8e201bad7718d8233d3c7563f7a115530fb55bd293a18982c7665ac214"
ACTUAL="$(sha256sum "$OUT/panel-500.csv" | awk '{print $1}')"

if [ "$ACTUAL" != "$EXPECTED" ]; then
  echo "[FAIL] panel-500.csv checksum mismatch" >&2
  echo "Expected: $EXPECTED" >&2
  echo "Actual:   $ACTUAL" >&2
  exit 1
fi

LINES="$(wc -l < "$OUT/panel-500.csv" | tr -d ' ')"
if [ "$LINES" != "501" ]; then
  echo "[FAIL] panel-500.csv expected 501 lines including header; got $LINES" >&2
  exit 1
fi

echo "[OK] panel-500.csv SHA-256 verified"
echo "[OK] panel-500.csv lines: $LINES"

echo
echo "Checking JSON files..."
python3 - "$OUT" <<'PY'
import json, pathlib, sys
root = pathlib.Path(sys.argv[1])
for name in ["manifest.json", "research-summary-v1.0.json"]:
    with (root / name).open("r", encoding="utf-8") as f:
        data = json.load(f)
    if not isinstance(data, dict):
        raise SystemExit(f"[FAIL] {name} is not a JSON object")
    print(f"[OK] {name} valid JSON")
PY

echo
echo "Public research assets downloaded to: $OUT"
