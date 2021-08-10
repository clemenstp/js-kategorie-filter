// Listen
var listeInitial = document.getElementById('liste-initial');
var listeFarbe = document.getElementById('liste-farbe');
var listeGroesse = document.getElementById('liste-groesse');
var listeGroesseFarbe = document.getElementById('liste-groesse-farbe');

// gesetzte Filter Buttons
var btnFarbe = document.getElementById('filter_farbe');
var btnGroesse = document.getElementById('filter_groesse');

// Filter anwenden Button
var btnApply = document.getElementById('filter_apply');

// Gesetzte Filter löschen - Klick Events
btnFarbe.addEventListener('click', clearFilterFarbe);
btnGroesse.addEventListener('click', clearFilterGroesse);

// Filter anwenden - Klick Event
//btnApply.addEventListener('click', applyFilter);
btnApply.addEventListener('click', applyFilter);

// Liste zurücksetzen, wenn gesetzte Filter gelöscht werden
// Farbe
function clearFilterFarbe() {
  console.log('clearFilterFarbe start');

  // Alle Listen mit Farbe zurücksetzen
  listeFarbe.style.display = 'none';
  listeGroesseFarbe.style.display = 'none';

  // Wenn Größe gefiltert... sonst ungefilterte Liste anzeigen
  if (window.getComputedStyle(btnGroesse).display === 'flex') {
    listeGroesse.style.display = 'block';
  } else {
    listeInitial.style.display = 'block';
  }

  console.log('clearFilterFarbe end');
}

// Größe
function clearFilterGroesse() {
  console.log('clearFilterGroesse start');

  // Alle Listen mit Farbe zurücksetzen
  listeGroesse.style.display = 'none';
  listeGroesseFarbe.style.display = 'none';

  // Wenn Größe gefiltert... sonst ungefilterte Liste anzeigen
  if (window.getComputedStyle(btnFarbe).display === 'flex') {
    listeFarbe.style.display = 'block';
  } else {
    listeInitial.style.display = 'block';
  }

  console.log('clearFilterGroesse end');
}

/* 
Filter anwenden
- aktive Liste feststellen
- gesetzte Filter feststellen 
- aktive Liste & gesetzte Filter aktualisieren 
*/

function applyFilter() {
  //console.log('apllyFilter start');

  // Filter Buttons
  var m4Active = document.getElementById('4m_active');
  var m8Active = document.getElementById('8m_active');
  var m4x8Active = document.getElementById('4x8m_active');
  var grauweissActive = document.getElementById('grauweiss_active');

  // Hilfsvariablen
  var listeActive;
  var listeSet;

  // angezeigte Liste feststellen
  if (window.getComputedStyle(listeInitial).display === 'block') {
    listeActive = listeInitial;
    console.log('Aktive Liste: Initial');
  } else if (window.getComputedStyle(listeFarbe).display === 'block') {
    listeActive = listeFarbe;
    console.log('Aktive Liste: Farbe');
  } else if (window.getComputedStyle(listeGroesse).display === 'block') {
    listeActive = listeGroesse;
    console.log('Aktive Liste: Größe');
  } else if (window.getComputedStyle(listeGroesseFarbe).display === 'block') {
    listeActive = listeGroesseFarbe;
    console.log('Aktive Liste: Größe & Farbe');
  }

  // gesetzte Filter feststellen
  if (
    (window.getComputedStyle(m4Active).display === 'flex' &&
      window.getComputedStyle(m8Active).display === 'flex') ||
    window.getComputedStyle(m4x8Active).display === 'flex'
  ) {
    if (window.getComputedStyle(grauweissActive).display === 'flex') {
      console.log('Aktive Filter: Größe & Farbe');
      listeSet = listeGroesseFarbe;
    } else {
      console.log('Aktive Filter: Größe alleine');
      listeSet = listeGroesse;
    }
  } else if (window.getComputedStyle(grauweissActive).display === 'flex') {
    console.log('Aktive Filter: Farbe alleine');
    listeSet = listeFarbe;
  }

  if (listeSet != listeActive) {
    setTimeout(function() {
      setFilter(listeSet);
    }, 1600);
  } else {
    console.log('Keine Filterung');
  }
}

// aktive Liste & gesetzte Filter aktualisieren (mit Delay nach Webflow Animation)
function setFilter(listeSet) {
  console.log('setFilter start');

  if (listeSet == listeInitial) {
    console.log('listeInitial setzen');
    // Listen anzeigen / verstecken
    listeInitial.style.display = 'block';
    listeFarbe.style.display = 'none';
    listeGroesse.style.display = 'none';
    listeGroesseFarbe.style.display = 'none';

    // gsetzte Filter Buttons anzeigen / verstecken
    btnFarbe.style.display = 'none';
    btnGroesse.style.display = 'none';
  } else if (listeSet == listeFarbe) {
    console.log('listeFarbe setzen');
    // Listen anzeigen / Vvrstecken
    listeInitial.style.display = 'none';
    listeFarbe.style.display = 'block';
    listeGroesse.style.display = 'none';
    listeGroesseFarbe.style.display = 'none';

    // gsetzte Filter Buttons anzeigen / verstecken
    btnFarbe.style.display = 'flex';
    btnGroesse.style.display = 'none';
  } else if (listeSet == listeGroesse) {
    console.log('listeGroesse setzen');
    // Listen anzeigen / verstecken
    listeInitial.style.display = 'none';
    listeFarbe.style.display = 'none';
    listeGroesse.style.display = 'block';
    listeGroesseFarbe.style.display = 'none';

    // gsetzte Filter Buttons anzeigen / verstecken
    btnFarbe.style.display = 'none';
    btnGroesse.style.display = 'flex';
  } else if (listeSet == listeGroesseFarbe) {
    console.log('listeGroesseFarbe setzen');
    // Listen anzeigen / verstecken
    listeInitial.style.display = 'none';
    listeFarbe.style.display = 'none';
    listeGroesse.style.display = 'none';
    listeGroesseFarbe.style.display = 'block';

    // gsetzte Filter Buttons anzeigen / verstecken
    btnFarbe.style.display = 'flex';
    btnGroesse.style.display = 'flex';
  }
}
