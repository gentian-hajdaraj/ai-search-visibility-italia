# Methodology summary

This document is a concise companion to the full public methodology for **AI Search Visibility in Italia — 2026 edition**.

Canonical methodology:  
https://telescop.it/research/ai-search-visibility-italia/methodology/

Canonical archived dataset:  
https://doi.org/10.5281/zenodo.22640375

## 1. Observation unit

The observation unit is the combination:

```text
query × AI surface × run
```

The study compares how the same predefined Italian-language questions are treated across four generative search/answer surfaces.

## 2. Frozen panel

The panel was generated and frozen on **3 September 2026**, before result analysis.

Composition:

- 480 main non-branded queries
- 20 deliberately brand-seeded controls
- 10 sectors
- 50 queries per sector
- 48 main queries + 2 controls per sector

The panel checksum is:

```text
SHA-256 c39b8f8e201bad7718d8233d3c7563f7a115530fb55bd293a18982c7665ac214
```

### Main-panel intent distribution

| Intent | Queries | Share |
|---|---:|---:|
| Discovery | 170 | 35.42% |
| Problem | 100 | 20.83% |
| Comparison | 100 | 20.83% |
| Pre-purchase | 100 | 20.83% |
| Alternatives | 10 | 2.08% |
| **Total** | **480** | **100.00%** |

Search volume contributed to panel selection but did not directly weight every published observation.

## 3. Sectors

The ten sectors are:

1. Software and CRM
2. Marketing
3. E-commerce and retail
4. Automotive
5. Travel
6. Energy
7. Finance
8. Consumer technology
9. Food and beverage
10. Professional services

## 4. AI surfaces

The four observed surfaces are:

- ChatGPT
- Gemini
- Google AI Mode
- Google AI Overview

A “surface” refers to the user-facing search or answer experience and should not automatically be treated as equivalent to a single underlying model.

## 5. Collection

The same 500-query panel was collected in three complete and separate runs:

| Run | Start | End | Observations |
|---|---|---|---:|
| 1 | 3 Sep 2026, 09:40 | 3 Sep 2026, 17:46 | 2,000 |
| 2 | 4 Sep 2026, 09:02 | 4 Sep 2026, 17:03 | 2,000 |
| 3 | 5 Sep 2026, 08:54 | 5 Sep 2026, 16:46 | 2,000 |
| **Total** |  |  | **6,000** |

Of these:

- 5,760 observations belong to the main non-branded panel.
- 240 observations belong to brand-seeded controls.

The final research observations were collected ex novo for the study.

## 6. Entity and brand processing

The analysis pipeline distinguishes, among other categories:

- commercial brands
- products and services
- publishers
- platforms
- organizations
- people
- generic entities

AI-assisted semantic classification is followed by deterministic controls, conservative alias normalization, product resolution and quality assurance.

## 7. Spontaneous visibility

A commercial brand is considered **spontaneous** when it is introduced by the answer and was not already present in the query.

For an individual brand, spontaneous visibility is evaluated only on observations in which that brand was not seeded by the query.

## 8. Agreement and divergence

Brand sets produced for the same query/run can be compared using **Jaccard similarity**.

Divergence is the complement of agreement.

The primary comparison should preserve the conditions and denominators described in the full methodology rather than treating all empty/non-empty surface states as equivalent.

## 9. Google AI Overview denominator

The study distinguishes:

- all observations submitted to the surface;
- observations in which AI Overview was actually present.

A missing AI Overview surface is not the same thing as an active AI Overview that contains no target brand.

## 10. Sources and citations

Source URLs/domains are normalized separately from brand mentions.

In the 2026 release, aggregate source metrics include:

- ChatGPT
- Gemini
- Google AI Overview

Google AI Mode is excluded from certain aggregate source analyses because citation metadata exposed by the provider was discontinuous across runs.

## 11. Versioning principle

Frozen datasets, panel hashes, analysis scripts, aliases, classification rules and metric definitions should be versioned together.

A change that can alter published results requires a new documented version rather than silently modifying the frozen v1.0 release.
