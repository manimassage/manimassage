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
  orari_it: "Da lunedì a sabato, solo su appuntamento.",
  orari_en: "Monday to Saturday, by appointment only.",

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
     prezzo: "" = "su richiesta"; esempio "€ 50" oppure "da € 45".
     frase: frase in evidenza sotto il titolo. testo: per andare a capo
     tra un paragrafo e l'altro scrivi \n\n.
     Foto: facoltativa, metti il file nella cartella img/ e scrivi il nome.
     Nota: descrivi benefici di benessere, evita promesse mediche
     (curare, prevenire malattie, antidepressivo...). */
  trattamenti: [
    {
      titolo_it: "Massaggio con Argilla Calda",
      titolo_en: "Warm Clay Massage",
      frase_it: "Il calore che avvolge, il relax che rigenera.",
      frase_en: "Enveloping warmth, restoring relaxation.",
      testo_it: "Lasciati avvolgere dal piacevole calore dell'argilla e concediti un'esperienza di benessere profondo. Speciali sacchetti di argilla calda scorrono delicatamente lungo la schiena e sul corpo, preparando la muscolatura a un massaggio manuale più intenso e mirato.\n\nIl calore, unito a manualità esperte, favorisce il rilassamento muscolare e aiuta a sciogliere le tensioni accumulate su collo, spalle e schiena. Un trattamento che coinvolge i sensi e lascia una piacevole sensazione di leggerezza.",
      testo_en: "Let the pleasant warmth of clay wrap around you and enjoy a deep sense of well-being. Warm clay pouches glide gently along your back and body, preparing the muscles for a more intense, targeted manual massage.\n\nThe warmth, combined with expert hands, encourages muscle relaxation and helps release the tension built up in the neck, shoulders and back. A treatment that engages the senses and leaves a pleasant feeling of lightness.",
      ideale_it: "a chi avverte rigidità muscolare, accumula tensioni su collo e schiena o desidera una pausa rigenerante dallo stress quotidiano.",
      ideale_en: "anyone who feels muscle stiffness, carries tension in the neck and back, or wants a restoring break from everyday stress.",
      durata: "60 minuti",
      prezzo: "€ 65",
      foto: "img/tratt-argilla.webp"
    },
    {
      titolo_it: "Mix Massage Antistress",
      titolo_en: "Mix Massage Antistress",
      frase_it: "Rallenta il ritmo, libera la mente, ritrova il tuo equilibrio.",
      frase_en: "Slow down, clear your mind, find your balance.",
      testo_it: "Quando gli impegni si accumulano, corpo e mente hanno bisogno di una pausa. Il Mix Massage Antistress unisce diverse tecniche di massaggio, combinate per offrirti un'esperienza personalizzata e avvolgente.\n\nManualità differenti, ritmi armoniosi e pressioni adattate alle tue esigenze favoriscono il rilassamento e aiutano ad allontanare le tensioni della giornata. Un momento tutto tuo, per lasciarti andare e ritrovare la calma.",
      testo_en: "When commitments pile up, body and mind need a break. The Mix Massage Antistress blends different massage techniques into a personalised, enveloping experience.\n\nVaried strokes, harmonious rhythms and pressure adapted to your needs encourage relaxation and help ease the tension of the day. A moment all for you, to let go and find calm again.",
      ideale_it: "a chi vive giornate intense, accumula stress e desidera ritagliarsi uno spazio di autentico relax.",
      ideale_en: "anyone with busy days who builds up stress and wants to carve out time for real relaxation.",
      durata: "45 minuti",
      prezzo: "€ 50",
      foto: "img/tratt-antistress.webp"
    },
    {
      titolo_it: "Massaggio Californiano",
      titolo_en: "Californian Massage",
      frase_it: "Lasciati avvolgere da un'onda di benessere.",
      frase_en: "Let a wave of well-being wash over you.",
      testo_it: "Movimenti lenti, fluidi e continui accompagnano delicatamente ogni parte del corpo. Il Massaggio Californiano è un'esperienza sensoriale avvolgente, fatta di manualità ampie e armoniose che si susseguono come un'onda.\n\nIl contatto continuo e i movimenti dolci favoriscono un profondo stato di rilassamento e ti aiutano a ritrovare una piacevole connessione con il tuo corpo. Un momento da vivere e assaporare, dedicato interamente a te.",
      testo_en: "Slow, flowing, continuous movements gently follow every part of the body. The Californian Massage is an enveloping sensory experience of broad, harmonious strokes that follow one another like a wave.\n\nThe continuous contact and gentle movements encourage a deep state of relaxation and help you reconnect with your body. A moment to live and savour, entirely devoted to you.",
      ideale_it: "a chi desidera lasciarsi alle spalle lo stress quotidiano, ritrovare serenità e vivere un rilassamento completo.",
      ideale_en: "anyone who wants to leave daily stress behind, find serenity and enjoy complete relaxation.",
      durata: "50 minuti",
      prezzo: "€ 60",
      foto: "img/tratt-californiano.webp"
    },
    {
      titolo_it: "Massaggio Relax",
      titolo_en: "Relaxing Massage",
      frase_it: "Fermati. Respira. Ritrova il piacere di stare bene.",
      frase_en: "Pause. Breathe. Rediscover the pleasure of feeling good.",
      testo_it: "A volte basta concedersi il tempo giusto per ritrovare il proprio equilibrio. Il Massaggio Relax è un trattamento personalizzato, con movimenti lenti, profondi e armoniosi adattati alle esigenze del tuo corpo.\n\nOgni manualità è modulata con attenzione, con particolare cura per le zone in cui si concentrano le tensioni. Un'esperienza piacevole e rigenerante, lontano dalla frenesia di ogni giorno, che lascia calma e leggerezza.",
      testo_en: "Sometimes all it takes is the right amount of time to find your balance again. The Relaxing Massage is a personalised treatment with slow, deep, harmonious movements adapted to your body's needs.\n\nEach stroke is carefully modulated, with special attention to the areas where tension builds up. A pleasant, restoring experience, far from the daily rush, that leaves you calm and light.",
      ideale_it: "a chi desidera staccare dalla routine, sciogliere le tensioni quotidiane e concedersi una pausa di benessere su misura.",
      ideale_en: "anyone who wants to break from routine, release everyday tension and enjoy a tailored moment of well-being.",
      durata: "45 minuti",
      prezzo: "€ 50",
      foto: "img/tratt-relax.webp"
    },
    {
      titolo_it: "Massaggio Tonico e Drenante",
      titolo_en: "Toning and Draining Massage",
      frase_it: "Riscopri la leggerezza, dona nuova vitalità alle tue gambe.",
      frase_en: "Rediscover lightness, bring new vitality to your legs.",
      testo_it: "Un'esperienza dedicata al benessere delle gambe e alla sensazione di leggerezza di tutto il corpo.\n\nManovre specifiche, ispirate alla tecnica del pompage, alternano movimenti delicati e mirati: donano una piacevole sensazione di leggerezza e una pelle che si percepisce più tonica. Un massaggio pensato per chi avverte pesantezza e affaticamento alle gambe.",
      testo_en: "An experience devoted to the well-being of the legs and a feeling of lightness throughout the body.\n\nSpecific techniques inspired by pompage alternate gentle and targeted movements, giving a pleasant feeling of lightness and skin that feels more toned. A massage for anyone whose legs feel heavy and tired.",
      ideale_it: "a chi trascorre molte ore in piedi o seduto e desidera ritrovare una piacevole sensazione di leggerezza alle gambe.",
      ideale_en: "anyone who spends many hours standing or sitting and wants their legs to feel pleasantly light again.",
      durata: "45 minuti",
      prezzo: "€ 55",
      foto: "img/tratt-drenante.webp"
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
      r_it: "Sì, ricevo solo su appuntamento, da lunedì a sabato. Puoi prenotare online, su WhatsApp o con una telefonata.",
      r_en: "Yes, I work by appointment only, Monday to Saturday. You can book online, on WhatsApp or by phone."
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
