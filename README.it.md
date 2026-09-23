# AI Search Visibility in Italia

**Repository di accompagnamento alla ricerca Telescop Research 2026 sulla visibilità di brand e fonti nelle superfici di ricerca generativa.**

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.22640375.svg)](https://doi.org/10.5281/zenodo.22640375)
[![Licenza: CC BY 4.0](https://img.shields.io/badge/Licenza-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)

> **Risultato concettuale centrale:** non esiste una sola “AI Visibility”. Superfici diverse possono costruire panorami differenti di brand, raccomandazioni e fonti.

English version: [README.md](README.md)

## La ricerca in sintesi

| Voce | Edizione 2026 |
|---|---:|
| Panel congelato | 500 query |
| Query principali non-branded | 480 |
| Controlli brand-seeded | 20 |
| Settori | 10 |
| Superfici AI | 4 |
| Run completi e separati | 3 |
| Osservazioni finali | 6.000 |
| Osservazioni panel principale | 5.760 |
| Osservazioni control | 240 |
| Famiglie di brand commerciali | 529 |
| Finestra di rilevazione | 3–5 settembre 2026 |
| Versione dataset | v1.0 |
| DOI | `10.5281/zenodo.22640375` |

### Superfici osservate

- ChatGPT
- Gemini
- Google AI Mode
- Google AI Overview

Le superfici sono analizzate separatamente: la ricerca evita di ridurre esperienze diverse a un unico punteggio aggregato.

## Disegno della ricerca

Il panel è stato congelato prima dell’analisi ed è composto da:

- **480 query principali non-branded**
- **20 query di controllo brand-seeded**
- **10 settori**
- **50 query per settore**

Lo stesso panel è stato raccolto in **tre run completi e separati**.

```text
500 query
× 4 superfici AI
× 3 run completi
= 6.000 osservazioni finali
```

La formulazione corretta è **tre run completi e separati** oppure **tre repliche temporali**; non vanno descritti come campioni statisticamente indipendenti.

Checksum SHA-256 del panel congelato:

```text
c39b8f8e201bad7718d8233d3c7563f7a115530fb55bd293a18982c7665ac214
```

## Menzione, raccomandazione e citazione non sono la stessa cosa

La ricerca distingue:

1. **Menzione** — il brand compare nella risposta.
2. **Raccomandazione** — il brand viene proposto, preferito o inserito tra le opzioni utili.
3. **Citazione** — alla risposta viene attribuita una fonte, URL o dominio.

Un brand può quindi essere nominato senza essere raccomandato, raccomandato senza che venga citato il proprio dominio, oppure essere supportato prevalentemente da fonti terze.

Vedi [docs/metrics.md](docs/metrics.md).

## Dati e riproducibilità

Il **dataset canonico e la metodologia v1.0** sono depositati su Zenodo:

**Hajdaraj, Gentian. (2026). _AI Search Visibility in Italia — Dataset e metodologia v1.0_ (Version v1.0) [Dataset]. Zenodo.**  
https://doi.org/10.5281/zenodo.22640375

Rapporto pubblico:

https://telescop.it/research/ai-search-visibility-italia/

Metodologia:

https://telescop.it/research/ai-search-visibility-italia/methodology/

Questo repository GitHub funziona come **layer di distribuzione, documentazione e versionamento**. Per la citazione e l’archiviazione della versione congelata, il riferimento canonico resta il DOI Zenodo.

## Citazione

```text
Gentian Hajdaraj. (2026).
AI Search Visibility in Italia — Dataset e metodologia v1.0
(Version v1.0) [Dataset].
Zenodo.
https://doi.org/10.5281/zenodo.22640375
```

## Autore

**Gentian Hajdaraj — Telescop Research**

- Ricerca: https://telescop.it/research/ai-search-visibility-italia/
- Telescop: https://telescop.it/
- Sito autore: https://gentian.it/
- Contatti ricerca/media: research@telescop.it

## Licenza

Salvo diversa indicazione, documentazione della ricerca e materiali dataset rilasciati pubblicamente sono distribuiti con licenza **Creative Commons Attribution 4.0 International (CC BY 4.0)**.

Vedi [LICENSE.md](LICENSE.md).
