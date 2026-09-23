# Public data sources

This repository separates **canonical frozen research objects** from convenience copies.

## Canonical release

The archival reference for v1.0 is:

https://doi.org/10.5281/zenodo.22640375

Zenodo guarantees a persistent identifier for the published record. The Telescop Research website exposes selected research assets directly for convenient machine access.

## Verified frozen panel

Canonical public URL:

https://telescop.it/research/ai-search-visibility-italia/methodology/data/panel-500.csv

Expected properties:

| Property | Value |
|---|---:|
| Data rows | 500 |
| Lines including header | 501 |
| Size | 42,866 bytes |
| Columns | 8 |
| SHA-256 | `c39b8f8e201bad7718d8233d3c7563f7a115530fb55bd293a18982c7665ac214` |

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

## Machine-readable result summary

https://telescop.it/research/ai-search-visibility-italia/data/research-summary-v1.0.json

This is the published JSON used by the public report for figures and headline result tables.

## Reproducible retrieval

Run:

```bash
bash scripts/fetch-public-data.sh
```

The script downloads the public frozen panel, published result summary, methodology manifest and checksum file. It rejects the panel if its SHA-256 does not match the frozen v1.0 hash.

Downloaded files are intentionally written under `data/downloaded-v1.0/` and are not committed automatically. This avoids silently replacing the canonical research object while keeping replication one command away.

## Why the panel is not reconstructed

The panel is a frozen research object. It should be copied byte-for-byte from the canonical public release, never rebuilt from examples, database exports or documentation fragments.
