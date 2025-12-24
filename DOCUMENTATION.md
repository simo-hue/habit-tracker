# DOCUMENTATION

## Logica delle Metriche (Reading Tracker)

### Gestione dei giorni non segnati (Empty States)

Nel sistema di tracciamento, la logica per i giorni non segnati è stata aggiornata per supportare il concetto di "giorni di riposo" o flessibilità:

1.  **Statistiche Generali (Percentuale):**
    -   I giorni non segnati continuano ad essere **IGNORATI** nel calcolo della percentuale di successo.
    -   Formula: `Giorni Fatti / (Giorni Fatti + Giorni Mancati)`.

2.  **Streak (Serie Consecutiva):**
    -   **Nuova Logica**: Un giorno non segnato (vuoto) **NON INTERROMPE** la serie. Viene considerato come un giorno di "riposo" o un giorno in cui l'attività non era prevista.
    -   La serie si mantiene "congelata" attraverso i giorni vuoti.
    -   **Interruzione**: La serie si azzera **SOLO** se viene registrato esplicitamente uno stato "Mancato" (rosso).

---

## Nuove Implementazioni (Statistiche Avanzate)

### Confronto Temporale (Period Comparison)
È stato aggiunto un modulo che permette di confrontare la percentuale di completamento attuale con quella del periodo precedente.
-   **Periodi supportati**: Settimana, Mese, Anno.
-   **Visualizzazione**: Mostra la variazione percentuale (es. +15%, -5%) con indicatori colorati (Verde per miglioramenti, Rosso per peggioramenti).

### Analisi Critica (Critical Analysis)
Un algoritmo analizza lo storico degli ultimi 90 giorni per identificare pattern di fallimento.
-   **Giorno Nero**: Per ogni abitudine, viene calcolato qual è il giorno della settimana con il tasso di completamento più basso.
-   **Focus**: Il sistema evidenzia automaticamente le abitudini sotto l'85% di completamento, suggerendo il giorno specifico su cui porre attenzione.

---

## Navigazione

- La pagina dedicata "Mappa" è stata rimossa.
- La visualizzazione a mappa di calore (Heatmap) è disponibile all'interno della pagina **Statistiche**.

## Bug Fixes

### Statistics Page Crash
Risolto un errore critico che causava il crash dell'applicazione all'apertura della pagina Statistiche.
- **Problema**: Il componente `StatsOverview` tentava di accedere a `globalSuccessRate` su un oggetto non definito. Questo era causato da una discrepanza tra la struttura dati "piatta" restituita dall'hook `useHabitStats` e l'oggetto annidato `globalStats` che il componente si aspettava.
- **Soluzione**: Aggiornato `src/pages/Stats.tsx` per costruire correttamente l'oggetto `globalStats` utilizzando le proprietà (`totalActiveDays`, `globalSuccessRate`, `bestStreak`, `worstDay`) prima di passarle al componente.
