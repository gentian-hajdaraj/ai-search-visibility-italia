# Data

The canonical frozen dataset for the 2026 edition is archived on Zenodo:

https://doi.org/10.5281/zenodo.22640375

This directory is intentionally conservative: it does not fabricate, regenerate or silently alter research rows.

## What is stored here

- `manifest.json` — human-readable reconstruction of the frozen panel methodology manifest from the verified research audit.
- `original-SHA256SUMS.txt` — checksums recorded for the original frozen source artifacts.
- `public-assets.json` — registry of canonical public URLs and known integrity metadata.
- `panel-500.sha256` — the frozen panel checksum used throughout the published methodology.
- `release-v1.0/` — populated by the verified GitHub Action with byte-for-byte public downloads.

The DOI-backed release remains the canonical archival reference.

## Frozen panel

The public 500-query panel is available at:

https://telescop.it/research/ai-search-visibility-italia/methodology/data/panel-500.csv

Expected integrity:

```text
SHA-256 c39b8f8e201bad7718d8233d3c7563f7a115530fb55bd293a18982c7665ac214
501 lines including header
500 data rows
42,866 bytes
```

Columns:

```text
panel_id
panel_type
sector
intent
brand
query
volume
keyword_id
```

## Fetch the public data locally

From the repository root:

```bash
bash scripts/fetch-public-data.sh
```

The script downloads:

- `panel-500.csv`
- `research-summary-v1.0.json`
- `manifest.json`

and rejects the frozen panel if its SHA-256, line count or byte size does not match the published v1.0 values.

Original source checksums are documented in `original-SHA256SUMS.txt`.

Downloaded local material is written to `data/downloaded-v1.0/` and ignored by Git by default.

See [../docs/data-provenance.md](../docs/data-provenance.md).

## Release totals

```text
500 queries
4 AI surfaces
3 complete and separate runs
6,000 final observations
5,760 main-panel observations
240 brand-seeded controls
529 commercial brand families
collection window: 2026-09-03 / 2026-09-05
```
