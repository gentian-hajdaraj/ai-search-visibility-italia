# AI Search Visibility in Italia

**Research companion repository for the 2026 Telescop Research study on brand and source visibility across generative search surfaces.**

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.22640375.svg)](https://doi.org/10.5281/zenodo.22640375)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)

> **Core finding:** there is not a single, uniform “AI visibility”. Different AI surfaces can produce materially different landscapes of brands, recommendations and sources.

Italian version: [README.it.md](README.it.md)

## Study at a glance

| Item | 2026 edition |
|---|---:|
| Frozen query panel | 500 |
| Main non-branded queries | 480 |
| Brand-seeded controls | 20 |
| Sectors | 10 |
| AI surfaces | 4 |
| Complete runs | 3 |
| Final observations | 6,000 |
| Main-panel observations | 5,760 |
| Control observations | 240 |
| Commercial brand families identified | 529 |
| Collection window | 3–5 September 2026 |
| Dataset version | v1.0 |
| DOI | `10.5281/zenodo.22640375` |

### Surfaces observed

- ChatGPT
- Gemini
- Google AI Mode
- Google AI Overview

Each surface is treated separately. The study does **not** collapse all four experiences into a single score that hides platform-level differences.

## Research question

The study examines how generative search surfaces select and represent brands and sources when Italian users ask commercial and informational questions.

It focuses on questions such as:

- Which brands are mentioned spontaneously?
- Which brands are actively recommended?
- Which domains are cited as sources?
- How much do answers diverge between surfaces?
- How concentrated is visibility among a limited set of brands?
- Do official sites, publishers, marketplaces, comparison sites and other third parties play different roles?
- Does visibility on one AI surface imply visibility on another?

## Research design

The panel was frozen before analysis and contains:

- **480 main non-branded queries**
- **20 brand-seeded control queries**
- **10 sectors**
- **50 queries per sector**

The same 500-query panel was collected in **three complete and separate runs**.

```text
500 queries
× 4 AI surfaces
× 3 complete runs
= 6,000 final observations
```

The preferred description is **three complete and separate runs** or **three temporal replicates**. They should not be described as statistically independent samples.

The frozen panel is identified by this SHA-256 checksum:

```text
c39b8f8e201bad7718d8233d3c7563f7a115530fb55bd293a18982c7665ac214
```

## Main concepts

The research keeps three concepts separate:

1. **Mention** — the brand appears in the answer.
2. **Recommendation** — the brand is proposed, preferred or included among useful options.
3. **Citation** — a source URL/domain is attributed to the answer.

A brand can therefore be mentioned without being recommended, recommended without its own domain being cited, or supported by third-party sources.

See [docs/metrics.md](docs/metrics.md) for the metric glossary.

## Reproducibility and data

The **canonical dataset and methodology release** is archived on Zenodo:

**Hajdaraj, Gentian. (2026). _AI Search Visibility in Italia — Dataset e metodologia v1.0_ (Version v1.0) [Dataset]. Zenodo.**  
https://doi.org/10.5281/zenodo.22640375

The public research report is available at:

https://telescop.it/research/ai-search-visibility-italia/

The detailed methodology is available at:

https://telescop.it/research/ai-search-visibility-italia/methodology/

The frozen 500-query panel and machine-readable result summary can be retrieved directly from the public research endpoints.

```bash
bash scripts/fetch-public-data.sh
```

The fetch script verifies the panel against the published SHA-256 before accepting it. See [docs/data-provenance.md](docs/data-provenance.md) and [data/public-assets.json](data/public-assets.json).

This GitHub repository is a **research distribution and documentation layer**. The DOI-backed Zenodo record remains the canonical frozen release for citation and archival purposes.

## Repository structure

```text
.
├── README.md
├── README.it.md
├── CITATION.cff
├── CITING.md
├── CONTRIBUTING.md
├── LICENSE.md
├── llms.txt
├── docs/
│   ├── methodology.md
│   ├── metrics.md
│   ├── limitations.md
│   └── data-provenance.md
├── data/
│   ├── README.md
│   ├── manifest.json
│   ├── original-SHA256SUMS.txt
│   ├── panel-500.sha256
│   └── public-assets.json
├── scripts/
│   └── fetch-public-data.sh
└── metadata/
    └── dataset.jsonld
```

## Citation

For academic, editorial or technical use, cite the **version DOI**, not only the GitHub URL:

```text
Gentian Hajdaraj. (2026).
AI Search Visibility in Italia — Dataset e metodologia v1.0
(Version v1.0) [Dataset].
Zenodo.
https://doi.org/10.5281/zenodo.22640375
```

GitHub also exposes citation metadata through [`CITATION.cff`](CITATION.cff).

## Author and publisher

**Gentian Hajdaraj**  
Telescop Research

- Research: https://telescop.it/research/ai-search-visibility-italia/
- Telescop: https://telescop.it/
- Author: https://gentian.it/
- Research/media contact: research@telescop.it

## License

Unless otherwise noted, the research documentation and released dataset materials are distributed under **Creative Commons Attribution 4.0 International (CC BY 4.0)**.

See [LICENSE.md](LICENSE.md).
