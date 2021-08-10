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

  var m4;
  var m4Active;
  var m8;
  var m8Active;
  var m4x8;
  var m4x8Active;
  var grauweiss;
  var grauweissActive;

  // Filter Buttons
  m4 = document.getElementById('4m');
  m4Active = document.getElementById('4m_active');
  m8 = document.getElementById('8m');
  m8Active = document.getElementById('8m_active');
  m4x8 = document.getElementById('4x8m');
  m4x8Active = document.getElementById('4x8m_active');
  grauweiss = document.getElementById('grauweiss');
  grauweissActive = document.getElementById('grauweiss_active');

  // listen

  if (
    (window.getComputedStyle(m4Active).display === 'flex' &&
      window.getComputedStyle(m8Active).display === 'flex') ||
    window.getComputedStyle(m4x8Active).display === 'flex'
  ) {
    if (window.getComputedStyle(grauweissActive).display === 'flex') {
      console.log('filter größe & farbe active!');
    } else {
      console.log('filter größe alleine active!');
    }
  } else if (window.getComputedStyle(grauweissActive).display === 'flex') {
    console.log('filter farbe alleine active!');
  }
 
  //console.log('applyFilter end');
}
