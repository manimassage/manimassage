/* =====================================================================
   MANI MASSAGE · DATI DEL SITO
   ---------------------------------------------------------------------
   Questo è l'UNICO file da modificare per aggiornare il sito:
   contatti, prezzi, trattamenti, foto, social, P.IVA, prenotazione.
   Regole semplici:
   - il testo va sempre tra virgolette "  "
   - ogni voce termina con una virgola
   - per lasciare un campo vuoto scrivi ""  (la voce sparisce dal sito)
   Guida completa: COME-AGGIORNARE.md
   ===================================================================== */

window.SITO = {

  /* ---------- CONTATTI ---------- */
  nome: "Manuela Cassone",
  telefono: "+39 338 334 0587",          // come appare sul sito
  telefonoLink: "+393383340587",          // senza spazi, per chiamata e WhatsApp
  email: "manuela.cassone@gmail.com",
  messaggioWhatsApp: "Ciao Manuela, vorrei prenotare un massaggio.",

  /* ---------- STUDIO ---------- */
  indirizzo: "Corso Umberto I n. 1",
  cap: "97015",
  citta: "Modica",
  provincia: "RG",
  orari_it: "Tutti i giorni, sabato e domenica compresi, solo su appuntamento.",
  orari_en: "Every day, including Saturday and Sunday, by appointment only.",

  /* ---------- PRENOTAZIONE ONLINE ----------
     Incolla qui il link della pagina di prenotazione di Google Calendar
     (Calendar > Crea > Programma appuntamenti > Condividi > Link).
     Finché è vuoto, il pulsante "Prenota online" apre WhatsApp. */
  prenotazioneOnline: "",

  /* ---------- SOCIAL E GOOGLE (vuoto = icona nascosta) ---------- */
  instagram: "",        // es. "https://www.instagram.com/manimassage"
  facebook: "",         // es. "https://www.facebook.com/manimassage"
  schedaGoogle: "",     // link alla scheda Google Business, quando creata
  recensioniGoogle: "", // link "Scrivi una recensione" della scheda Google

  /* ---------- DATI FISCALI ---------- */
  partitaIva: "",       // es. "01234567890"

  /* ---------- OFFERTA DI BENVENUTO (vuoto = nascosta) ----------
     Compare in evidenza nella prima schermata.
     Esempio: "-15% sul tuo primo trattamento" */
  offertaBenvenuto_it: "",
  offertaBenvenuto_en: "",

  /* ---------- CONTATORE VISITE GoatCounter (gratuito, senza cookie) ----------
     Dopo aver creato l'account su goatcounter.com scrivi qui il nome scelto,
     per esempio "manimassage". Vuoto = contatore spento. */
  goatcounter: "",

  /* ---------- TRATTAMENTI ----------
     Per aggiungere un trattamento copia un blocco { ... }, incollalo
     sotto l'ultimo e cambia i testi.
     prezzo: "" = "su richiesta"; esempio "50 €" oppure "da 45 €".
     Foto: facoltativa, metti il file nella cartella img/ e scrivi il nome.
     Nota: descrivi benefici di benessere, evita promesse mediche
     (curare, prevenire malattie, antidepressivo...). */
  trattamenti: [
    {
      titolo_it: "Massaggio con argilla calda",
      titolo_en: "Hot Clay Massage",
      testo_it: "Il calore dei sacchettini di argilla, fatti scorrere sulla schiena e su tutto il corpo, prepara i muscoli al massaggio manuale profondo. Aiuta a sciogliere le tensioni di collo e schiena e regala una piacevole sensazione di rilassamento.",
      testo_en: "The warmth of the clay bags, glided over the back and the whole body, prepares the muscles for a deep manual massage. It helps release tension in the neck and back and gives a pleasant feeling of relaxation.",
      ideale_it: "Per chi accumula tensioni su collo e schiena.",
      ideale_en: "For those who carry tension in the neck and back.",
      durata: "60'",
      prezzo: "",
      foto: ""
    },
    {
      titolo_it: "Mix Massage Antistress",
      titolo_en: "Mix Massage Antistress",
      testo_it: "Un massaggio che combina diverse tecniche per allentare le tensioni e ritrovare calma ed equilibrio. Un momento tutto per te, lontano dalla fretta della giornata.",
      testo_en: "A massage combining different techniques to ease tension and find calm and balance again. A moment just for you, away from the rush of the day.",
      ideale_it: "Per chi lavora tanto e non trova mai un attimo di pausa.",
      ideale_en: "For those who work hard and never find a moment to pause.",
      durata: "45'",
      prezzo: "",
      foto: ""
    },
    {
      titolo_it: "Massaggio Californiano",
      titolo_en: "Californian Massage",
      testo_it: "Considerato il re dei massaggi: movimenti lunghi, fluidi e avvolgenti che coinvolgono tutto il corpo. Favorisce un rilassamento profondo e una piacevole sensazione di benessere.",
      testo_en: "Known as the king of massages: long, flowing and enveloping strokes involving the whole body. It encourages deep relaxation and a pleasant sense of well-being.",
      ideale_it: "Per chi cerca un rilassamento completo, anche alla prima esperienza.",
      ideale_en: "For those seeking complete relaxation, even at their first massage.",
      durata: "50'",
      prezzo: "",
      foto: ""
    },
    {
      titolo_it: "Massaggio Relax",
      titolo_en: "Relaxing Massage",
      testo_it: "Movimenti lenti e profondi, adattati alle tue esigenze. Insisto sulle zone che ne hanno più bisogno per aiutarti a sciogliere le tensioni e ritrovare equilibrio.",
      testo_en: "Slow, deep movements tailored to your needs. I focus on the areas that need it most to help you release tension and find your balance again.",
      ideale_it: "Per staccare la spina e concederti una pausa su misura.",
      ideale_en: "To unplug and treat yourself to a tailored break.",
      durata: "45'",
      prezzo: "",
      foto: ""
    },
    {
      titolo_it: "Massaggio Tonico e Drenante",
      titolo_en: "Tonic and Draining Massage",
      testo_it: "Manovre specifiche, ispirate al pompage, che stimolano la circolazione e donano una piacevole sensazione di leggerezza alle gambe. Un trattamento tonificante che lascia la pelle più tonica e levigata.",
      testo_en: "Specific techniques, inspired by pompage, that stimulate circulation and give a pleasant feeling of lightness to the legs. A toning treatment that leaves the skin feeling firmer and smoother.",
      ideale_it: "Per chi ha gambe pesanti o passa molte ore in piedi o seduto.",
      ideale_en: "For those with heavy legs or who spend many hours standing or sitting.",
      durata: "45'",
      prezzo: "",
      foto: ""
    }
  ],

  /* ---------- PACCHETTI (vuoto = testo generico "su richiesta") ----------
     Esempio: { nome_it: "Percorso Relax", nome_en: "Relax Path",
                descrizione_it: "3 Massaggi Relax da 45'", descrizione_en: "3 Relaxing Massages, 45'",
                prezzo: "120 €" } */
  pacchetti: [],

  /* ---------- BUONI REGALO ----------
     Tagli proposti (vuoto = si sceglie il trattamento da regalare).
     Esempio: ["50 €", "80 €", "100 €"] */
  buoniRegalo: [],

  /* ---------- RECENSIONI (vuoto = sezione nascosta) ----------
     Copia qui le recensioni reali dei clienti (con il loro consenso).
     Esempio: { nome: "Giulia R.", testo: "Mani d'oro, sono uscita rinata!", stelle: 5 } */
  recensioni: [],

  /* ---------- DOMANDE FREQUENTI ----------
     Controlla che le risposte corrispondano a come lavori e modificale liberamente. */
  faq: [
    {
      d_it: "Devo prenotare in anticipo?",
      d_en: "Do I need to book in advance?",
      r_it: "Sì, ricevo solo su appuntamento, tutti i giorni compresi sabato e domenica. Puoi prenotare online, su WhatsApp o con una telefonata.",
      r_en: "Yes, I work by appointment only, every day including weekends. You can book online, on WhatsApp or by phone."
    },
    {
      d_it: "Cosa devo portare?",
      d_en: "What should I bring?",
      r_it: "Nulla: nello studio trovi tutto il necessario. Durante il massaggio il corpo resta coperto da un telo, tranne la zona trattata.",
      r_en: "Nothing: you'll find everything you need in the studio. During the massage your body stays covered by a towel, except for the area being treated."
    },
    {
      d_it: "Quanto prima devo arrivare?",
      d_en: "How early should I arrive?",
      r_it: "Bastano 5-10 minuti prima dell'orario, così iniziamo con calma.",
      r_en: "5-10 minutes before your appointment is enough, so we can start calmly."
    },
    {
      d_it: "Ci sono casi in cui il massaggio è sconsigliato?",
      d_en: "Are there cases when a massage is not recommended?",
      r_it: "Sì, per esempio con febbre, infiammazioni acute, problemi circolatori importanti o in gravidanza senza parere medico. Se hai dubbi, parlane prima con il tuo medico e avvisami al momento della prenotazione.",
      r_en: "Yes, for example with fever, acute inflammation, significant circulatory problems or during pregnancy without medical advice. If in doubt, ask your doctor first and let me know when booking."
    },
    {
      d_it: "Se non posso venire, come faccio?",
      d_en: "What if I can't make it?",
      r_it: "Avvisami appena possibile su WhatsApp o per telefono, così possiamo spostare l'appuntamento.",
      r_en: "Let me know as soon as possible on WhatsApp or by phone, so we can reschedule."
    },
    {
      d_it: "Posso regalare un massaggio?",
      d_en: "Can I give a massage as a gift?",
      r_it: "Certo: scegli il trattamento o l'importo e ricevi un buono regalo da consegnare.",
      r_en: "Of course: choose the treatment or amount and receive a gift voucher to hand over."
    }
  ],

  /* ---------- PROMOZIONI (vuoto = riquadro "In arrivo") ----------
     Esempio: { titolo_it: "Novembre relax", titolo_en: "November relax",
                testo_it: "-10% sul Massaggio Relax", testo_en: "10% off Relaxing Massage",
                scadenza: "30/11/2026" } */
  promozioni: [],

  /* ---------- GALLERIA FOTO ----------
     Metti le foto nella cartella img/ e aggiungi una riga per ciascuna.
     Quando avrai le foto dello studio, sostituisci queste. */
  galleria: [
    { file: "img/massaggio-800.webp", descrizione: "Massaggio rilassante alla schiena" },
    { file: "img/relax-800.webp", descrizione: "Asciugamani, orchidee e candele: l'atmosfera dello studio" }
  ]
};
