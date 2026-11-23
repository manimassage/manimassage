# Come aggiornare il sito Mani Massage

Tutti i contenuti che cambiano nel tempo si trovano in **un solo file: `dati.js`**.
Non serve toccare gli altri file.

## Le regole da ricordare

- Il testo va sempre tra virgolette: `"così"`.
- Ogni voce finisce con una virgola.
- Un campo vuoto si scrive `""` e la relativa voce sparisce dal sito (per esempio un social non ancora aperto).
- Dopo ogni modifica, apri il sito e controlla che tutto si veda. Se la pagina dei trattamenti resta vuota, di solito manca una virgola o una virgoletta.

## Cosa puoi cambiare in `dati.js`

| Cosa | Campo | Esempio |
|---|---|---|
| Telefono | `telefono` e `telefonoLink` | `"+39 338 334 0587"` e `"+393383340587"` |
| Email | `email` | `"manuela.cassone@gmail.com"` |
| Indirizzo | `indirizzo`, `cap`, `citta`, `provincia` | `"Corso Umberto I n. 1"` |
| Orari | `orari_it`, `orari_en` | `"Da lunedì a sabato, su appuntamento."` |
| Prenotazione online | `prenotazioneOnline` | link della pagina di prenotazione di Google Calendar |
| Social | `instagram`, `facebook` | `"https://www.instagram.com/manimassage"` |
| Scheda Google | `schedaGoogle`, `recensioniGoogle` | link della scheda Google Business |
| Partita IVA | `partitaIva` | `"01234567890"` |
| Prezzi | `prezzo` dentro ogni trattamento | `"50 €"` (vuoto = "su richiesta") |
| Offerta prima visita | `offertaBenvenuto_it`, `offertaBenvenuto_en` | `"-10% sul primo massaggio"` (vuoto = non compare) |
| Importi buoni regalo | `buoniRegalo` | `["50 €", "80 €", "100 €"]` |
| Statistiche visite | `goatcounter` | il codice scelto su goatcounter.com, per esempio `"manimassage"` |

## Aggiungere un trattamento

1. In `dati.js`, nella lista `trattamenti`, copia un blocco intero da `{` a `},`.
2. Incollalo sotto l'ultimo blocco.
3. Cambia titolo, testo (italiano e inglese), durata e prezzo.

Ogni trattamento ha anche la riga **Ideale** (`ideale_it`, `ideale_en`): una frase breve su a chi è adatto. Nei testi evita promesse di tipo medico (per esempio "cura", "guarisce", "elimina la cellulite").

## Recensioni

Quando le clienti lasciano una recensione su Google, puoi riportarne alcune nella lista `recensioni`:

```js
{ nome: "Giulia R.", testo: "Mani d'oro, sono uscita rinata.", stelle: 5 },
```

Con la lista vuota la sezione "Dicono di me" non compare. Riporta solo recensioni vere, con il nome abbreviato.

## Pacchetti

Nella lista `pacchetti`:

```js
{ nome_it: "Percorso 5 massaggi", nome_en: "5-massage path",
  descrizione_it: "Cinque sedute da usare in tre mesi", descrizione_en: "Five sessions within three months",
  prezzo: "" },
```

Con il prezzo vuoto compare solo la descrizione e il pulsante "Chiedi informazioni".

## Domande frequenti

Nella lista `faq` ogni domanda ha `d_it`, `d_en` (domanda) e `r_it`, `r_en` (risposta). Google può mostrarle direttamente nei risultati di ricerca.

## Periodo di Natale

Dal 15 novembre al 24 dicembre il titolo della sezione regali diventa automaticamente "Regala benessere a Natale". Non serve fare nulla.

## Aggiungere o sostituire le foto

**Foto dei trattamenti.** Ogni trattamento ha la sua foto, indicata nel campo `foto` di `dati.js` (per esempio `foto: "img/tratt-argilla.webp"`). Le foto attuali sono provvisorie, ricavate dalle immagini del pieghevole:

| Trattamento | File |
|---|---|
| Massaggio con argilla calda | `img/tratt-argilla.webp` |
| Mix Massage Antistress | `img/tratt-antistress.webp` |
| Massaggio Californiano | `img/tratt-californiano.webp` |
| Massaggio Relax | `img/tratt-relax.webp` |
| Massaggio Tonico e Drenante | `img/tratt-drenante.webp` |

Per sostituirle: prepara una foto orizzontale (proporzione 16:9, per esempio 800 × 450 pixel, sotto i 100 KB) e salvala nella cartella `img/` con lo stesso nome, oppure con un nome nuovo da scrivere nel campo `foto`. Con il campo vuoto (`foto: ""`) la scheda resta senza foto. Il modo più semplice resta mandare le foto a Claude, che le ritaglia, le comprime e le sostituisce.


1. Prepara la foto in formato **JPG** o, meglio, **WebP**, larga circa **1600 pixel** e sotto i 200 KB, così il sito resta veloce sul telefono. Puoi convertirla e comprimerla gratis su [squoosh.app](https://squoosh.app).
2. Mettila nella cartella `img/` con un nome semplice, senza spazi: `studio-ingresso.jpg`.
3. In `dati.js`:
   - per la **galleria**, aggiungi una riga in `galleria`: `{ file: "img/studio-ingresso.jpg", descrizione: "L'ingresso dello studio" },`
   - per la **foto di un trattamento**, scrivi il nome nel campo `foto` del trattamento: `foto: "img/argilla.jpg"`.
4. Le due foto principali (in alto e nella sezione "Chi sono") sono preparate in più misure per il telefono e il computer (`img/relax-800.webp`, `img/relax-1600.webp`, `img/massaggio-800.webp`, `img/massaggio-1600.webp`). Per cambiarle, il modo più semplice è mandarle a Claude, che le prepara e le sostituisce.

Foto gratuite di qualità, utilizzabili anche per uso commerciale senza citazione: [Unsplash](https://unsplash.com) e [Pexels](https://www.pexels.com). Evita le foto con la scritta "Unsplash+" o "Premium", che sono a pagamento.

## Prenotazione online gratuita (Google Calendar)

1. Apri Google Calendar dal computer con l'account Google dell'attività.
2. Premi **Crea** e poi **Programma di appuntamenti**.
3. Imposta durata (per esempio 60 minuti), giorni e orari disponibili, e l'eventuale pausa tra un appuntamento e l'altro.
4. Salva, poi premi **Condividi** e copia il link della pagina di prenotazione.
5. Incolla il link nel campo `prenotazioneOnline` di `dati.js`.

Ogni prenotazione arriva nel tuo calendario e il cliente riceve un'email di conferma. Puoi spostare o annullare gli appuntamenti dal calendario.

## Promozioni

Nella lista `promozioni` aggiungi un blocco come questo:

```js
{ titolo_it: "Novembre relax", titolo_en: "November relax",
  testo_it: "-10% sul Massaggio Relax", testo_en: "10% off the Relaxing Massage",
  scadenza: "30/11/2026" },
```

Quando la promozione scade, cancella il blocco. Se la lista è vuota, il sito mostra un messaggio "in arrivo".

## Dominio personalizzato (in futuro)

Quando avrai acquistato un dominio (per esempio `manimassage.it`), si aggiunge al sito un file `CNAME` con il nome del dominio e si configurano i DNS presso il fornitore. Il sito è già pronto per questo passaggio.
