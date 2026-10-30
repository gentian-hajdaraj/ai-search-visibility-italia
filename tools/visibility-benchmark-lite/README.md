# Visibility Benchmark Lite

**A browser-only, open-source explorer for structured AI-search observations.**

Open `index.html` locally; no server, API key, external dependency or data upload is required. The demo is **synthetic** and its figures must not be described as Telescop's research findings.

## Features

- Compare AI surfaces separately rather than producing a single cross-platform score.
- Keep mentions, recommendations and source citations distinct.
- Distinguish an absent AI surface from an active surface containing no brands.
- Show both unconditional and conditional denominators for query-level brand presence.
- Exclude brand-seeded controls from spontaneous-brand measures.
- Export a machine-readable JSON summary from data processed locally in your browser.

## Data contract

Use `sample.csv` as a template. Each CSV row is a unique combination of `query_id`, `run_id`, and `surface`. The header is:

    query_id,run_id,surface,surface_present,query_type,mentions,recommendations,citations

| Field | Meaning |
|---|---|
| `query_id`, `run_id`, `surface` | Stable identifiers for the query, observation run and AI surface |
| `surface_present` | `1` if generative output appeared, `0` otherwise |
| `query_type` | `main` = non-brand-seeded; `control` = brand-seeded |
| `mentions` | Already-annotated brand names separated with `|` |
| `recommendations` | Recommended brands separated with `|` (must occur in mentions) |
| `citations` | Already-annotated source domain labels separated with `|` |

Absent surfaces (`surface_present=0`) must have empty mentions, recommendations and citations. Duplicate query/run/surface rows are rejected. Quoted CSV fields and embedded commas are supported.

## Metrics and denominators

| Metric | Numerator | Denominator |
|---|---|---|
| Surface presence (all) | Present surface rows | All observations, including controls |
| Any brand (all main) | Main rows with at least one brand mention | All main observations (absent included) |
| Any brand (active main) | Main rows with at least one brand mention | Present-surface main observations |
| Any recommendation (active main) | Active main rows with at least one recommendation | Present-surface main observations |
| Any citation (active main) | Active main rows with at least one cited domain | Present-surface main observations |

Rates are **observation-level shares of rows with any entity**, not per-brand Brand Visibility, Citation Share, or the research's published cross-surface metrics. An undefined denominator returns `null` (shown as an em dash), never an invented zero. Counts for top entities are case-insensitive exact-label counts once per observation; this demo does not merge aliases.

## Limitations

This tool does **not** scrape public AI surfaces; extract or classify entities from generated text; resolve aliases; validate citation URLs; or reproduce the proprietary Telescop collection, classification and QA pipeline. Input annotations are assumed to have been prepared externally. Controls must be labeled correctly by the data provider.

This is an independent educational example associated with the [AI Search Visibility in Italia](../../README.md) public research companion. The frozen 2026 study, original DOI, published results and methodology are unchanged. Consult the [original metric glossary](../../docs/metrics.md) and [limitations](../../docs/limitations.md).

## Testing

Use Node.js 20 or later for the optional dependency-free automated suite:

    node --test tools/visibility-benchmark-lite/test/engine.test.cjs

Tests also run in GitHub Actions when this tool changes.

## License

Tool code and documentation are licensed under the [MIT License](LICENSE). Research data and documents elsewhere in the parent repository retain their own existing licensing.
