# ORCID / DataCite linkage

The goal is to connect the author identity **Gentian Hajdaraj** to the DOI-backed research object without creating a duplicate publication identity.

## Research object

- Title: **AI Search Visibility in Italia — Dataset e metodologia v1.0**
- Author: **Gentian Hajdaraj**
- Publisher: **Telescop Research**
- Publication year: **2026**
- Type: **Dataset**
- Version: **v1.0**
- DOI: **10.5281/zenodo.22640375**
- URL: https://doi.org/10.5281/zenodo.22640375
- Research report: https://telescop.it/research/ai-search-visibility-italia/

## ORCID

Once the author's ORCID iD is available:

1. Add the DOI-backed dataset to the ORCID record using the DOI as the external identifier.
2. Prefer an automated DOI/DataCite import when available rather than manually duplicating metadata.
3. Use the same author name: `Gentian Hajdaraj`.
4. Keep the DOI as the canonical external identifier.
5. Add the ORCID iD to future structured metadata for this research and subsequent Telescop Research releases.

## DataCite / Zenodo metadata improvement

If the Zenodo record metadata can be edited without changing the frozen research files, add the author's ORCID iD to the creator metadata.

This strengthens the persistent identifier graph:

```text
Gentian Hajdaraj
        ↓ ORCID
research author identity
        ↓ creator relationship
10.5281/zenodo.22640375
        ↓
AI Search Visibility in Italia
        ↓
Telescop Research
```

## Important

Do not mint a second DOI merely because the same dataset is mirrored on GitHub, Hugging Face or Kaggle.