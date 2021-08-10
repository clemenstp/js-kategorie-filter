var btnFarbe = document.getElementById('filter_farbe');
var btnGroesse = document.getElementById('filter_groesse');
var btnApply = document.getElementById('filter_apply');
var btnFilterBar = document.getElementById('filter_bar');

btnFarbe.addEventListener('click', clearFilter);
btnGroesse.addEventListener('click', clearFilter);
//btnApply.addEventListener('click', applyFilter);
btnFilterBar.addEventListener('click', applyFilter);

function clearFilter() {
  console.log('clearFilter start');

  var farbe;
  var groesse;

  farbe = document.getElementById('filter_farbe');
  groesse = document.getElementById('filter_groesse');

  if (
    window.getComputedStyle(groesse).display === 'none' &&
    window.getComputedStyle(farbe).display === 'none'
  ) {
    console.log('clearFilter if');

    document.getElementById('liste_inital').style.display = 'block';
    document.getElementById('liste_groesse').style.display = 'none';
    document.getElementById('liste_farbe').style.display = 'none';
    document.getElementById('liste_gefiltert').style.display = 'none';
  }

  console.log('clearFilter end');
}

function applyFilter() {
  //console.log('apllyFilter start');

  // Filter Buttons
  var m4Active = document.getElementById('4m_active');
  var m8Active = document.getElementById('8m_active');
  var m4x8Active = document.getElementById('4x8m_active');
  var grauweissActive = document.getElementById('grauweiss_active');

  // Listen
  var listeIntial = document.getElementById('liste_inital');
  var listeFarbe = document.getElementById('liste_farbe');
  var listeGroesse = document.getElementById('liste_groesse');
  var listeGroesseFarbe = document.getElementById('liste-groesse-farbe');

  // Hilfsvariablen
  var listeActive;

  // angezeigte Liste feststellen
  if (listeIntial.window.getComputedStyle.display === 'block') {
    listeActive = listeIntial;
    console.log('Aktive Liste: Initial');
  } else if (listeFarbe.window.getComputedStyle.display === 'block') {
    listeActive = listeFarbe;
    console.log('Aktive Liste: Farbe');
  } else if (listeGroesse.window.getComputedStyle.display === 'block') {
    listeActive = listeGroesse;
    console.log('Aktive Liste: Größe');
  } else if (listeGroesseFarbe.window.getComputedStyle.display === 'block') {
    listeActive = listeGroesseFarbe;
    onsole.log('Aktive Liste: Größe & Farbe');
  }

  // gesetzte Filter feststellen & aktive Liste aktualisieren
  if (
    (window.getComputedStyle(m4Active).display === 'flex' &&
      window.getComputedStyle(m8Active).display === 'flex') ||
    window.getComputedStyle(m4x8Active).display === 'flex'
  ) {
    if (window.getComputedStyle(grauweissActive).display === 'flex') {
      console.log('Aktive Filter: Größe & Farbe');
    } else {
      console.log('Aktive Filter: Größe alleine');
    }
  } else if (window.getComputedStyle(grauweissActive).display === 'flex') {
    console.log('Aktive Filter: Farbe alleine');
  }

  // Anzeige aktualisieren mit Delay (nach Webflow Animation)
  setTimout(function setFilter(listeActive) {
    if (listeIntial === listeActive) {
      listeIntial.window.style.display;
    } else if (liste.listeFarbe.window.getComputedStyle.display === 'block') {
      listeActive= listeFarbe;
    } else if (liste.listeGroesse.window.getComputedStyle.display === 'block') {
      listeActive= listeGroesse;
    } else if (liste.listeGroesseFarbe.window.getComputedStyle.display === 'block') {
      listeActive= listeGroesseFarbe;
    }
  }, 160);


  //console.log('applyFilter end');
}
