# Metric glossary

This repository deliberately keeps **mention**, **recommendation** and **citation** separate.

The exact production calculations are versioned with the research release; the definitions below are intended to make interpretation unambiguous.

## Brand mention

A textual occurrence of a commercial brand in an answer, independently of whether the brand is recommended.

## Spontaneous brand

A commercial brand introduced by the answer and not already present in the query.

This distinction prevents a brand-seeded query from being counted as spontaneous visibility for that same brand.

## Brand Visibility

The share of eligible observations in which a brand receives a spontaneous mention.

Always preserve:

- surface
- period
- panel/base
- denominator
- whether the query was eligible for spontaneous measurement

## Recommendation

A mention in which the brand is proposed, preferred or included among useful options.

## Recommendation Share

The brand's share within the competitive recommendation set used by the relevant analysis.

A recommendation is not equivalent to a generic mention.

## Citation

An attributed source URL or domain connected to an answer.

A cited source is not necessarily the same entity as the brand being discussed.

## Citation Share

The share of citations attributed to the relevant project/brand domain within the defined comparison set.

Citation metrics must remain surface-aware because providers expose source metadata differently.

## Source Presence

Presence or recurrence of a source domain within the normalized citation/source layer.

## Weighted Share of Voice

A share-of-voice metric based on **versioned weighted mention scores**, rather than treating every mention as equivalent.

Depending on the metric version, weighting can account for factors such as query value, position and mention type. Published values should always be interpreted with the methodology/metric version that produced them.

## Surface Presence

Whether the generative surface itself was present/available for the observation.

This is especially important for Google AI Overview: an absent AI Overview must not be converted into “brand visibility = 0 inside an active surface”.

## Agreement / divergence

For comparable observations, brand sets can be compared using Jaccard similarity.

```text
agreement = Jaccard(A, B)
divergence = 1 - agreement
```

The exact inclusion rules and denominators are defined by the published methodology.

## Why the distinctions matter

A brand can be:

- mentioned but not recommended;
- recommended while its own site is not cited;
- cited through its official site but weakly recommended;
- represented mainly through third-party sources;
- visible on one AI surface and absent on another.

That is why the study treats AI visibility as a **multi-surface, multi-signal phenomenon**, not a single universal ranking.
