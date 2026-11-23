/* Mani Massage · logica del sito. Non serve modificare questo file:
   i contenuti si cambiano in dati.js */
(function () {
  var D = window.SITO || {};
  var root = document.documentElement;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]; }); };
  var bi = function (it, en) { return '<span lang="it">' + esc(it) + '</span><span lang="en">' + esc(en || it) + '</span>'; };

  /* link */
  var wa = function (msg) { return 'https://wa.me/' + String(D.telefonoLink || '').replace(/\D/g, '') + '?text=' + encodeURIComponent(msg || D.messaggioWhatsApp || ''); };
  $$('.js-wa').forEach(function (a) { a.href = wa(a.getAttribute('data-msg')); });
  $$('.js-tel').forEach(function (a) { a.href = 'tel:' + D.telefonoLink; });
  $$('.js-mail').forEach(function (a) { a.href = 'mailto:' + D.email + '?subject=' + encodeURIComponent('Richiesta informazioni massaggi'); });

  var online = $('#prenota-online');
  if (D.prenotazioneOnline) { online.href = D.prenotazioneOnline; }
  else { online.href = wa('Ciao Manuela, vorrei prenotare un massaggio. Quando sei disponibile?'); }

  /* testi semplici */
  var indirizzoCompleto = [D.indirizzo, [D.cap, D.citta, D.provincia ? '(' + D.provincia + ')' : ''].join(' ').trim()].filter(Boolean).join(', ');
  var testi = {
    nome: esc(D.nome), telefono: esc(D.telefono), email: esc(D.email),
    indirizzo: esc(D.indirizzo), citta: esc([D.cap, D.citta, D.provincia ? '(' + D.provincia + ')' : ''].join(' ').trim()),
    indirizzoCompleto: esc(indirizzoCompleto), orari: bi(D.orari_it, D.orari_en)
  };
  $$('[data-t]').forEach(function (el) { var k = el.getAttribute('data-t'); if (testi[k] != null) el.innerHTML = testi[k]; });

  var q = encodeURIComponent('Mani Massage ' + indirizzoCompleto);
  var qAddr = encodeURIComponent(indirizzoCompleto);
  $('#indicazioni').href = 'https://www.google.com/maps/dir/?api=1&destination=' + qAddr;

  /* trattamenti */
  var lista = $('#lista-trattamenti');
  var paras = function (txt, lang) { return String(txt || '').split(/\n\s*\n/).map(function (p) { return '<p lang="' + lang + '">' + esc(p.trim()) + '</p>'; }).join(''); };
  var durEn = function (d) { return String(d || '').replace(/minuti/i, 'minutes'); };
  (D.trattamenti || []).forEach(function (t) {
    var prezzo = t.prezzo ? esc(t.prezzo) : bi('su richiesta', 'on request');
    var foto = t.foto ? '<img class="card-photo" src="' + esc(t.foto) + '" alt="' + esc(t.titolo_it) + '" width="800" height="450" loading="lazy" decoding="async">' : '';
    lista.insertAdjacentHTML('beforeend',
      '<article class="card">' + foto +
        '<h3>' + bi(t.titolo_it, t.titolo_en) + '</h3>' +
        (t.frase_it ? '<p class="card-tagline">' + bi(t.frase_it, t.frase_en) + '</p>' : '') +
        '<div class="card-meta">' +
          '<span class="time"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm-1 3v6l5 3 1-1.7-4-2.3V7h-2Z"/></svg>' + bi(t.durata, durEn(t.durata)) + '</span>' +
          '<span class="price">' + prezzo + '</span>' +
        '</div>' +
        '<div class="card-text">' + paras(t.testo_it, 'it') + paras(t.testo_en || t.testo_it, 'en') + '</div>' +
        (t.ideale_it ? '<p class="ideal"><strong>' + bi('A chi è consigliato:', 'Recommended for:') + '</strong> ' + bi(t.ideale_it, t.ideale_en) + '</p>' : '') +
        '<div class="card-actions">' +
          '<a class="btn btn--book card-book" href="' + wa('Ciao Manuela, vorrei prenotare il ' + t.titolo_it + '. Quando sei disponibile?') + '" target="_blank" rel="noopener">' + bi('Prenota il tuo massaggio', 'Book your massage') + '</a>' +
          '<a class="card-gift" href="' + wa('Ciao Manuela, vorrei regalare un buono per: ' + t.titolo_it + '.') + '" target="_blank" rel="noopener">' + bi('Regalalo a qualcuno', 'Give it as a gift') + '</a>' +
        '</div>' +
      '</article>');
  });

  /* dati strutturati: listino dei trattamenti */
  try {
    var ldBiz = $$('script[type="application/ld+json"]').filter(function (s) { return /HealthAndBeautyBusiness/.test(s.textContent); })[0];
    if (ldBiz && (D.trattamenti || []).length) {
      var obj = JSON.parse(ldBiz.textContent);
      obj.hasOfferCatalog = { '@type': 'OfferCatalog', name: 'Trattamenti', itemListElement: D.trattamenti.map(function (t) {
        var o = { '@type': 'Offer', itemOffered: { '@type': 'Service', name: t.titolo_it, description: t.frase_it || '' } };
        var n = parseFloat(String(t.prezzo || '').replace(/[^\d,.]/g, '').replace(',', '.'));
        if (!isNaN(n)) { o.price = n.toFixed(2); o.priceCurrency = 'EUR'; }
        return o;
      }) };
      ldBiz.textContent = JSON.stringify(obj);
    }
  } catch (e) {}

  /* offerta di benvenuto */
  if (D.offertaBenvenuto_it) {
    var off = $('#offerta');
    off.innerHTML = '<span class="offer-tag">' + bi('Prima visita', 'First visit') + '</span> ' + bi(D.offertaBenvenuto_it, D.offertaBenvenuto_en);
    off.hidden = false;
  }

  /* recensioni */
  var R = D.recensioni || [];
  if (R.length) {
    $('#lista-recensioni').innerHTML = R.map(function (r) {
      var n = Math.max(0, Math.min(5, parseInt(r.stelle, 10) || 5));
      return '<figure class="review-item"><div class="stars" aria-label="' + n + ' su 5">' + '★★★★★'.slice(0, n) + '<span>' + '★★★★★'.slice(0, 5 - n) + '</span></div>' +
        '<blockquote>' + esc(r.testo) + '</blockquote><figcaption>' + esc(r.nome) + '</figcaption></figure>';
    }).join('');
    $('#recensioni').hidden = false;
  }
  var rl = [];
  if (D.schedaGoogle) rl.push('<a class="btn btn--line" href="' + esc(D.schedaGoogle) + '" target="_blank" rel="noopener">' + bi('Tutte le recensioni su Google', 'All reviews on Google') + '</a>');
  if (D.recensioniGoogle) rl.push('<a class="btn btn--line" href="' + esc(D.recensioniGoogle) + '" target="_blank" rel="noopener">' + bi('Lascia una recensione', 'Leave a review') + '</a>');
  if ($('#recensioni-link')) $('#recensioni-link').innerHTML = rl.join('');

  /* periodo di Natale: dal 15 novembre al 24 dicembre */
  var oggi = new Date(), m = oggi.getMonth(), g = oggi.getDate();
  if ((m === 10 && g >= 15) || (m === 11 && g <= 24)) {
    root.classList.add('xmas');
    $('#regali-titolo').innerHTML = bi('Regala benessere a Natale', 'Give wellbeing this Christmas');
  }

  /* buono regalo */
  var sel = $('#buono-scelta');
  if (sel) {
    var opz = [];
    (D.buoniRegalo || []).forEach(function (v) { opz.push(['Buono da ' + v, 'Voucher ' + v]); });
    (D.trattamenti || []).forEach(function (t) { opz.push([t.titolo_it, t.titolo_en || t.titolo_it]); });
    var fillSel = function () { sel.innerHTML = opz.map(function (o) { return '<option value="' + esc(o[0]) + '">' + esc(root.getAttribute('data-lang') === 'en' ? o[1] : o[0]) + '</option>'; }).join(''); };
    fillSel();
    new MutationObserver(fillSel).observe(root, { attributes: true, attributeFilter: ['data-lang'] });
    $('#buono-form').addEventListener('submit', function (e) {
      e.preventDefault();
      window.open(wa('Ciao Manuela, vorrei un buono regalo: ' + sel.value + '. Come posso riceverlo?'), '_blank', 'noopener');
    });
  }

  /* pacchetti */
  var pk = $('#lista-pacchetti');
  if (pk) {
    var K = D.pacchetti || [];
    pk.innerHTML = K.length ? '<ul class="promo-list">' + K.map(function (p) {
      return '<li><strong>' + bi(p.nome_it, p.nome_en) + '</strong>' + (p.prezzo ? ' · ' + esc(p.prezzo) : '') + '<br>' + bi(p.descrizione_it, p.descrizione_en) + '</li>';
    }).join('') + '</ul>'
      : '<p lang="it">Percorsi di più sedute a prezzo dedicato, costruiti su misura. Chiedimi un preventivo.</p><p lang="en">Multi-session packages at a dedicated price, tailored to you. Ask me for a quote.</p>';
  }

  /* domande frequenti */
  var F = D.faq || [];
  var fl = $('#lista-faq');
  if (fl && F.length) {
    fl.innerHTML = F.map(function (f) {
      return '<details class="faq-item"><summary>' + bi(f.d_it, f.d_en) + '</summary><div class="faq-a">' +
        '<p lang="it">' + esc(f.r_it) + '</p><p lang="en">' + esc(f.r_en || f.r_it) + '</p></div></details>';
    }).join('');
    var ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: F.map(function (f) {
      return { '@type': 'Question', name: f.d_it, acceptedAnswer: { '@type': 'Answer', text: f.r_it } };
    }) });
    document.head.appendChild(ld);
  } else if (fl) { fl.parentNode.hidden = true; }

  /* statistiche GoatCounter (senza cookie), attive solo se configurate */
  if (D.goatcounter) {
    $$('.js-wa').forEach(function (a) { a.setAttribute('data-goatcounter-click', 'whatsapp'); });
    $$('.js-tel').forEach(function (a) { a.setAttribute('data-goatcounter-click', 'chiamata'); });
    online.setAttribute('data-goatcounter-click', 'prenota-online');
    $$('.card-book').forEach(function (a) { a.setAttribute('data-goatcounter-click', 'prenota-trattamento'); });
    $$('.card-gift').forEach(function (a) { a.setAttribute('data-goatcounter-click', 'regala-trattamento'); });
    var gc = document.createElement('script');
    gc.async = true; gc.src = 'https://gc.zgo.at/count.js';
    gc.setAttribute('data-goatcounter', 'https://' + encodeURIComponent(D.goatcounter) + '.goatcounter.com/count');
    document.body.appendChild(gc);
  }

  /* promozioni */
  var promo = $('#lista-promozioni');
  var P = D.promozioni || [];
  if (!P.length) {
    promo.innerHTML = '<p lang="it">Le promozioni del momento saranno pubblicate qui. Seguimi sui social per non perderle.</p><p lang="en">Current offers will be published here. Follow me on social media so you don\'t miss them.</p>';
  } else {
    promo.innerHTML = '<ul class="promo-list">' + P.map(function (p) {
      return '<li><strong>' + bi(p.titolo_it, p.titolo_en) + '</strong><br>' + bi(p.testo_it, p.testo_en) +
        (p.scadenza ? '<br><small>' + bi('Valida fino al ', 'Valid until ') + esc(p.scadenza) + '</small>' : '') + '</li>';
    }).join('') + '</ul>';
  }

  /* galleria */
  var gal = $('#galleria');
  (D.galleria || []).forEach(function (g) {
    gal.insertAdjacentHTML('beforeend', '<figure><img src="' + esc(g.file) + '" alt="' + esc(g.descrizione) + '" loading="lazy"></figure>');
  });
  if (!(D.galleria || []).length) gal.parentNode.hidden = true;

  /* social */
  var soc = [['instagram', 'i-ig', 'Instagram'], ['facebook', 'i-fb', 'Facebook'], ['schedaGoogle', 'i-g', 'Google']]
    .filter(function (s) { return D[s[0]]; })
    .map(function (s) { return '<a href="' + esc(D[s[0]]) + '" target="_blank" rel="noopener" aria-label="' + s[2] + '"><svg viewBox="0 0 24 24" aria-hidden="true"><use href="#' + s[1] + '"/></svg></a>'; });
  if (D.recensioniGoogle) soc.push('<a class="review" href="' + esc(D.recensioniGoogle) + '" target="_blank" rel="noopener">' + bi('Lascia una recensione', 'Leave a review') + '</a>');
  $('#social').innerHTML = soc.join('');
  if (!soc.length) $('#social').hidden = true;

  $('#piva').innerHTML = D.partitaIva ? 'P.IVA ' + esc(D.partitaIva) : '';
  $('#anno').textContent = new Date().getFullYear();

  /* mappa: si carica solo dopo il consenso */
  $('#carica-mappa').addEventListener('click', function () {
    $('#mappa').innerHTML = '<iframe title="Mappa Mani Massage" src="https://maps.google.com/maps?q=' + q + '&z=16&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>';
  });

  /* lingua */
  var KEY = 'mm-lang';
  function setLang(l) { root.setAttribute('data-lang', l); root.lang = l; try { localStorage.setItem(KEY, l); } catch (e) {} }
  var saved = null; try { saved = localStorage.getItem(KEY); } catch (e) {}
  setLang(saved === 'en' ? 'en' : 'it');
  $('.lang').addEventListener('click', function () { setLang(root.getAttribute('data-lang') === 'it' ? 'en' : 'it'); closeMenu(); });

  /* menu telefono */
  var btn = $('.menu-btn'), menu = $('#menu');
  function closeMenu() { root.classList.remove('menu-open'); btn.setAttribute('aria-expanded', 'false'); btn.setAttribute('aria-label', 'Apri il menu'); }
  btn.addEventListener('click', function () {
    var open = !root.classList.contains('menu-open');
    root.classList.toggle('menu-open', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Chiudi il menu' : 'Apri il menu');
  });
  $$('a', menu).forEach(function (a) { a.addEventListener('click', closeMenu); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });
})();
