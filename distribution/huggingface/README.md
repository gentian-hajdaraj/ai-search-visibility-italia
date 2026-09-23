---
license: cc-by-4.0
language:
- it
pretty_name: AI Search Visibility in Italia 2026
size_categories:
- n<1K
tags:
- ai-search
- ai-visibility
- generative-search
- chatgpt
- gemini
- google-ai-overview
- google-ai-mode
- brand-visibility
- citation-analysis
- tabular
---

# AI Search Visibility in Italia 2026

A public research dataset from **Telescop Research** examining how brands and sources appear across ChatGPT, Gemini, Google AI Mode and Google AI Overview for a frozen panel of Italian queries.

## Dataset summary

- 500 frozen Italian queries
- 480 main non-branded queries
- 20 brand-seeded controls
- 10 sectors
- 4 AI surfaces
- 3 complete and separate runs
- 6,000 final observations
- 529 commercial brand families identified

Collection window: **3–5 September 2026**.

## Files

### `panel-500.csv`

Frozen query panel with fields: `panel_id`, `panel_type`, `sector`, `intent`, `brand`, `query`, `volume`, `keyword_id`.

Frozen SHA-256:

`c39b8f8e201bad7718d8233d3c7563f7a115530fb55bd293a18982c7665ac214`

### `research-summary-v1.0.json`

Machine-readable aggregate results used by the public research report.

### `manifest.json`

Frozen panel methodology and quota manifest.

## Selected findings

- Google AI Mode: **74.93%** unprompted commercial-brand visibility.
- Gemini: **64.10%**.
- ChatGPT: **54.93%**.
- Google AI Overview: **50.49%** across all submitted observations and **67.25%** conditional on the surface being present.
- Pairwise brand divergence: **55.88%–62.20%**.
- Source divergence across comparable systems: **82.77%–91.27%**.

These values are descriptive results for the frozen panel and collection window, not estimates of all search behavior in Italy.

## Methodology notes

Mention, recommendation and citation are separate signals. A commercial brand is treated as spontaneous when it is introduced by the answer and was not already present in the query.

For Google AI Overview, surface absence and brand absence are distinct analytical states. The three runs are complete and separate temporal replicates and should not be described as statistically independent random samples.

## Canonical research object

**Hajdaraj, Gentian. (2026). _AI Search Visibility in Italia — Dataset e metodologia v1.0_ (Version v1.0) [Dataset]. Zenodo.**

DOI: https://doi.org/10.5281/zenodo.22640375

Research report: https://telescop.it/research/ai-search-visibility-italia/

Methodology: https://telescop.it/research/ai-search-visibility-italia/methodology/

GitHub companion: https://github.com/gentian-hajdaraj/ai-search-visibility-italia

## Author

**Gentian Hajdaraj — Telescop Research**

- Website: https://gentian.it/
- ORCID: https://orcid.org/0009-0003-6955-460X
- GitHub: https://github.com/gentian-hajdaraj
- Hugging Face: https://huggingface.co/gentian-hajdaraj
- Kaggle: https://www.kaggle.com/gentianhajdaraj

## License

CC BY 4.0.