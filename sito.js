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
  (D.trattamenti || []).forEach(function (t) {
    var prezzo = t.prezzo ? esc(t.prezzo) : bi('su richiesta', 'on request');
    var foto = t.foto ? '<img class="card-photo" src="' + esc(t.foto) + '" alt="" loading="lazy">' : '';
    lista.insertAdjacentHTML('beforeend',
      '<article class="card">' + foto +
        '<h3>' + bi(t.titolo_it, t.titolo_en) + '</h3>' +
        '<p lang="it">' + esc(t.testo_it) + '</p><p lang="en">' + esc(t.testo_en || t.testo_it) + '</p>' +
        '<div class="card-foot">' +
          '<span class="time">' + bi('Tempo', 'Time') + ' ' + esc(t.durata) + '</span>' +
          '<span class="price">' + prezzo + '</span>' +
        '</div>' +
        '<a class="card-book" href="' + wa('Ciao Manuela, vorrei prenotare: ' + t.titolo_it + '.') + '" target="_blank" rel="noopener">' + bi('Prenota questo trattamento', 'Book this treatment') + ' →</a>' +
      '</article>');
  });

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
