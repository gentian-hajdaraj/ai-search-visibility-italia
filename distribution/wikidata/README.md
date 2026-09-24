# Wikidata / Scholia publication package

This directory contains a conservative two-step Wikidata creation plan for the author and the DOI-backed dataset.

## Why two steps

Scholia builds author/work views from Wikidata. To connect the work with a specific author using `author (P50)`, the author's Wikidata QID must exist first.

1. Run `author-step-1.quickstatements.txt`.
2. Copy the new author QID.
3. Replace `Q_AUTHOR` in `dataset-step-2.template.quickstatements.txt`.
4. Run the edited dataset batch.
5. Wait for Wikidata/Scholia propagation and verify the ORCID and DOI redirects.

## Conservative modeling choices

The dataset item uses:

- `instance of (P31) → data set (Q1172284)`
- `title (P1476)`
- `author (P50)`
- `publication date (P577)`
- `DOI (P356)`
- `language of work or name (P407) → Italian (Q652)`
- `copyright license (P275) → CC BY 4.0 (Q20007257)`
- `work available at URL (P953)`
- `external data available at URL (P1325)`
- `main subject (P921) → generative artificial intelligence (Q117246174)`
- `main subject (P921) → search engine (Q4182287)`

The author item is deliberately minimal: human, ORCID, official website, GitHub account and LinkedIn personal profile ID.

## Canonical sources

- DOI: https://doi.org/10.5281/zenodo.22640375
- Report: https://telescop.it/research/ai-search-visibility-italia/
- ORCID: https://orcid.org/0009-0003-6955-460X
- GitHub: https://github.com/gentian-hajdaraj/ai-search-visibility-italia

## Important

Do not create duplicate author or dataset items. Search Wikidata again immediately before running each batch.
