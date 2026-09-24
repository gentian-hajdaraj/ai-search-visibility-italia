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

OpenAlex harvests works from DataCite and Zenodo. No separate submission should be made. Verify the DOI periodically and add the OpenAlex ID to metadata only after it resolves to the correct work.

## DataCite Commons

The canonical DOI can be checked at:

`https://commons.datacite.org/doi.org/10.5281/zenodo.22640375`

If the creator ORCID is missing there, update the creator metadata in Zenodo rather than creating a second DOI.
