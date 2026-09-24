# Distribution

This directory contains platform-specific publication metadata for distributing the **AI Search Visibility in Italia — 2026** research without changing its canonical archival identity.

## Canonical identity

- DOI: https://doi.org/10.5281/zenodo.22640375
- Research report: https://telescop.it/research/ai-search-visibility-italia/
- GitHub: https://github.com/gentian-hajdaraj/ai-search-visibility-italia
- License: CC BY 4.0
- Author: Gentian Hajdaraj
- ORCID: https://orcid.org/0009-0003-6955-460X
- GitHub author: https://github.com/gentian-hajdaraj
- Hugging Face: https://huggingface.co/gentian-hajdaraj
- Kaggle: https://www.kaggle.com/gentianhajdaraj
- Publisher: Telescop Research

## Targets

### Hugging Face

Use `huggingface/README.md` as the Dataset Card.

Recommended dataset slug: `ai-search-visibility-italia`.

### Kaggle

Use the ready-to-publish `kaggle/dataset-metadata.json` for the `gentianhajdaraj` account.

Recommended dataset slug: `ai-search-visibility-italia`.

### ORCID / DataCite

Use `orcid/README.md` to connect the DOI-backed research object to the author's ORCID record.

### Wikidata / Scholia

Use `wikidata/README.md` and the two-step QuickStatements package to create the author/work graph without duplicating the DOI-backed research object.

### OpenAlex

No direct submission is required. OpenAlex harvests DataCite and Zenodo records; the DOI should flow into OpenAlex after source ingestion. Verify by DOI before adding any OpenAlex ID back into repository metadata.

## Rule

Do not mint an additional DOI for a mirror unless there is a distinct new scholarly object that genuinely requires one. Mirrors should cite the existing v1.0 DOI.

## Publication automation

Two manual GitHub Actions workflows are provided:

- `.github/workflows/publish-huggingface.yml`
- `.github/workflows/publish-kaggle.yml`

They intentionally require repository secrets and do not run automatically.

Required secrets:

- `HF_TOKEN` — Hugging Face user access token with write permission.
- `KAGGLE_API_TOKEN` — Kaggle API token for the `gentianhajdaraj` account.

The workflows publish only the verified public v1.0 assets and the platform-specific metadata maintained in this repository.
