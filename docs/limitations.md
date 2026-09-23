# Limitations

The findings in **AI Search Visibility in Italia — 2026 edition** describe a controlled research panel and time window. They should not be generalized beyond that scope without additional evidence.

## Deterministic panel, not a population survey

The 500-query panel is predefined and documented. It is **not** a probabilistic sample of all searches performed by people in Italy.

The results therefore describe the behavior of the observed surfaces on this panel, not the totality of Italian search behavior.

## Time sensitivity

Collection took place from **3 to 5 September 2026**.

Generative systems can change quickly because of:

- model updates;
- ranking/retrieval changes;
- source availability;
- product/interface changes;
- provider-side experimentation.

Replication at a later date may produce different results.

## Surface-specific behavior

ChatGPT, Gemini, Google AI Mode and Google AI Overview are different user-facing surfaces. Results from one should not be assumed to represent another.

## Surface absence versus brand absence

For conditional experiences such as Google AI Overview, the surface itself may not appear.

A missing surface and an active surface without a brand are analytically different states.

## Citation metadata

Source/citation metadata are not exposed identically by all providers.

In the 2026 release, Google AI Mode is excluded from certain aggregate source analyses because provider citation metadata were discontinuous across the three runs.

## Semantic classification

Brand/entity classification uses AI-assisted semantic processing followed by deterministic controls and QA. As in any large-scale entity-linking process, residual classification or attribution errors are possible.

## Three runs are not independent samples

The study uses **three complete and separate runs** of the same frozen design.

They may also be described as temporal replicates, but should not be presented as statistically independent random samples.

## Reproducibility

The frozen panel hash, time window, metric definitions, classification rules and release version should travel together when reproducing or comparing findings.
