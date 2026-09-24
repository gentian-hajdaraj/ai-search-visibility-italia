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

## Risultati chiave

- **Google AI Mode ha mostrato la maggiore visibilità spontanea dei brand commerciali:** 74,93% delle osservazioni del panel principale, rispetto al 64,10% di Gemini e al 54,93% di ChatGPT.
- **Google AI Overview richiede un denominatore condizionale:** la visibilità spontanea dei brand è risultata pari al 50,49% su tutte le osservazioni inviate, ma al 67,25% quando la superficie AI Overview era effettivamente presente.
- **I set di brand divergono in modo sostanziale tra le superfici:** la divergenza pairwise varia dal 55,88% al 62,20% nelle osservazioni comparabili.
- **Gli ecosistemi delle fonti divergono ancora di più:** la divergenza delle fonti varia dall'82,77% al 91,27% tra ChatGPT, Gemini e Google AI Overview.
- **L'universo dei brand visibili cambia per superficie:** sono state osservate 250 famiglie di brand commerciali spontanee uniche su ChatGPT, 368 su Gemini, 366 su Google AI Mode e 236 su Google AI Overview.

I valori machine-readable alla base di questi risultati sono disponibili in [data/release-v1.0/research-summary-v1.0.json](data/release-v1.0/research-summary-v1.0.json).

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

## Perimetro di replicazione

Questa release pubblica è progettata per consentire la **replicazione indipendente del disegno di ricerca**, non la riproduzione byte-per-byte della pipeline produttiva interna di Telescop.

I materiali pubblici includono il panel congelato di 500 query, il manifest del panel, la sintesi metodologica, le definizioni delle metriche, i controlli di integrità e i risultati aggregati pubblicati. Sono sufficienti per permettere a un altro ricercatore di ripetere lo stesso disegno sperimentale sulle quattro superfici AI e confrontare i risultati nel tempo.

La release **non include**:

- le 6.000 risposte raw originali;
- l'infrastruttura/provider runtime usata per la raccolta;
- la pipeline completa di entity extraction ed entity linking;
- il registro interno di alias e le regole complete di normalizzazione;
- prompt/classificatori di produzione usati nel processing semantico;
- la logica completa di QA deterministica e attribution;
- il codice di analisi produttivo completo usato per derivare tutte le metriche pubblicate.

Poiché i sistemi generativi cambiano nel tempo e la pipeline produttiva completa non è pubblica, un rerun indipendente va considerato come **studio di replicazione**, non come tentativo di riprodurre esattamente gli output pubblicati.

## Dati e replicazione

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
- ORCID: https://orcid.org/0009-0003-6955-460X
- GitHub: https://github.com/gentian-hajdaraj
- Hugging Face: https://huggingface.co/gentian-hajdaraj
- Kaggle: https://www.kaggle.com/gentianhajdaraj
- Contatti ricerca/media: research@telescop.it

## Licenza

Salvo diversa indicazione, documentazione della ricerca e materiali dataset rilasciati pubblicamente sono distribuiti con licenza **Creative Commons Attribution 4.0 International (CC BY 4.0)**.

Vedi [LICENSE.md](LICENSE.md).
