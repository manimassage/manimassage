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

  /* ---------- TRATTAMENTI ----------
     Per aggiungere un trattamento copia un blocco { ... }, incollalo
     sotto l'ultimo e cambia i testi. Prezzo: "" = "su richiesta".
     Foto: facoltativa, metti il file nella cartella img/ e scrivi il nome. */
  trattamenti: [
    {
      titolo_it: "Massaggio con argilla calda",
      titolo_en: "Hot Clay Massage",
      testo_it: "Decontrattura i muscoli cervicali e dorsali, preparando il corpo al massaggio manuale profondo per allungare tutta la catena muscolare. I sacchettini di argilla calda, sapientemente frizionati sulla schiena e su tutto il corpo, stimolano il rilassamento neuro-muscolare fungendo da antidepressivo.",
      testo_en: "It relaxes cervical and dorsal muscles and prepares your body for a deep manual massage to stretch the whole muscle chain. The hot clay bags, wisely rubbed on the back and all over the body, stimulate neuro-muscular relaxation by acting as an antidepressant.",
      durata: "60'",
      prezzo: "",
      foto: ""
    },
    {
      titolo_it: "Mix Massage Antistress",
      titolo_en: "Mix Massage Antistress",
      testo_it: "Eccellente massaggio antistress che, con particolari tecniche, ripristina gli equilibri interni, migliora la funzione del cuore prevenendo patologie cardiovascolari e patologie da stress. Indicato per tutti coloro che, durante le giornate di lavoro, non hanno mai un attimo di tregua e che sono sempre sotto tensione.",
      testo_en: "Excellent antistress massage with particular techniques: it restores interior balance. It also improves heart function, preventing cardiovascular diseases, disorders and stress pathologies. Indicated for those who work uninterruptedly and for those who are under pressure.",
      durata: "45'",
      prezzo: "",
      foto: ""
    },
    {
      titolo_it: "Massaggio Californiano",
      titolo_en: "Californian Massage",
      testo_it: "Questo massaggio è considerato il Re dei massaggi. Una delle tecniche più efficaci e conosciute al mondo come avvolgente e sensoriale. Ideale per eliminare stress, ansie e depressioni.",
      testo_en: "This is considered the King of massages. One of the most efficient and well known techniques in the world for its sensuality. Ideal for eliminating stress, anxiety and depression.",
      durata: "50'",
      prezzo: "",
      foto: ""
    },
    {
      titolo_it: "Massaggio Relax",
      titolo_en: "Relaxing Massage",
      testo_it: "Eseguito con movimenti lenti e profondi, questo massaggio si focalizza particolarmente sulle singole necessità di ciascun individuo. Lavorando a lungo sulle zone che più lo richiedono, stimola la circolazione, rilascia le tensioni ed aiuta a ristabilire l'equilibrio.",
      testo_en: "Performed with slow and deep movements, this massage pays particular attention to the needs of each individual client. Working longer on the areas that most require it, it helps to improve circulation, relieve tension and re-establish equilibrium.",
      durata: "45'",
      prezzo: "",
      foto: ""
    },
    {
      titolo_it: "Massaggio Tonico e Drenante",
      titolo_en: "Tonic and Draining Massage",
      testo_it: "Specifico contro la ritenzione idrica, elimina le tossine e dona leggerezza agli arti inferiori. Migliora la circolazione venosa, linfatica (pompage) e combatte la cellulite. Sgonfiante, drenante, disintossicante, è utile contro l'invecchiamento della pelle.",
      testo_en: "Specific against water retention, it eliminates toxins, gives lightness to the legs and restores a correct circulation. This massage improves venous and lymphatic circulation. It's a good cure against cellulite and circulatory disorders. It acts as deflating, draining, detoxifying and it can be used as anti-aging.",
      durata: "45'",
      prezzo: "",
      foto: ""
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
    { file: "img/massaggio.jpg", descrizione: "Massaggio rilassante alla schiena" },
    { file: "img/relax.jpg", descrizione: "Asciugamani, orchidee e candele: l'atmosfera dello studio" }
  ]
};
