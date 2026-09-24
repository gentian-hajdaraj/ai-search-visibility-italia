# Publishing mirrors

This repository is the working distribution hub for the DOI-backed v1.0 research release.

## Hugging Face

Target dataset:

`gentian-hajdaraj/ai-search-visibility-italia`

GitHub Action:

`.github/workflows/publish-huggingface.yml`

Required GitHub Actions secret:

`HF_TOKEN`

The token must belong to `gentian-hajdaraj` and have write permission on Hugging Face Hub repositories.

The workflow publishes:

- `panel-500.csv`
- `research-summary-v1.0.json`
- `manifest.json`
- the Hugging Face Dataset Card as `README.md`

## Kaggle

Target dataset:

`gentianhajdaraj/ai-search-visibility-italia`

GitHub Action:

`.github/workflows/publish-kaggle.yml`

Required GitHub Actions secret:

`KAGGLE_API_TOKEN`

The token must belong to the Kaggle account `gentianhajdaraj`.

The workflow creates the dataset publicly if it does not exist, otherwise publishes a new version.

## ORCID

ORCID iD:

`0009-0003-6955-460X`

Add DOI `10.5281/zenodo.22640375` to the Works section. Prefer DataCite import or DOI retrieval instead of a manual bibliographic entry.

## Canonical archival identity

All mirrors must preserve:

- DOI: `10.5281/zenodo.22640375`
- version: `v1.0`
- author: `Gentian Hajdaraj`
- license: `CC BY 4.0`
- publisher: `Telescop Research`

Mirrors must not mint a replacement DOI for the same frozen v1.0 research object.

## Wikidata / Scholia

Use the two-step package under `distribution/wikidata/`.

Create/search the author item first, then create the dataset item linked by `author (P50)`. Do not create duplicates.

## OpenAlex

The DOI is indexed by OpenAlex.

- Work: `W7211914073` — https://openalex.org/W7211914073
- Author: `A5150600802` — https://openalex.org/A5150600802

OpenAlex currently resolves the dataset correctly as a 2026 Italian-language dataset sourced from Zenodo/DataCite. The authorship is attached to Gentian Hajdaraj, but the OpenAlex author profile currently has `orcid: null` and the work authorship has `raw_orcid: null`.

The canonical creator ORCID is `0009-0003-6955-460X`. Keep the ORCID in Zenodo/DataCite creator metadata and, if needed, claim the OpenAlex author profile and set the primary ORCID through OpenAlex curation.

## DataCite Commons

The version DOI is live in DataCite Commons:

`https://commons.datacite.org/doi.org/10.5281/zenodo.22640375`

Zenodo also exposes the concept DOI for all versions:

`10.5281/zenodo.22640374`

The version DOI is the canonical identifier for v1.0. The dataset publication date exposed by Zenodo/OpenAlex is **2026-09-06**; the research report itself may have a different editorial publication date.

If the creator ORCID is missing from DataCite creator metadata, update the creator metadata in Zenodo rather than creating a second DOI.

## OpenAIRE

The DOI-specific dataset record is discoverable at:

`https://explore.openaire.eu/search/dataset?pid=10.5281%2Fzenodo.22640375`

Keep the Zenodo version DOI `10.5281/zenodo.22640375` as the canonical scholarly identifier.
