
// Piilottaa headerin alaspäin scrollatessa ja paljastaa sen ylöspäin scrollatessa
var headerEdellinenPaikka = window.pageYOffset;
window.onscroll = function() {
var headerNykyPaikka = window.pageYOffset;
  if (headerEdellinenPaikka > headerNykyPaikka) {
    document.getElementById("header_id").style.top = "0";
  } else {
    document.getElementById("header_id").style.top = "-100px";
  }
  headerEdellinenPaikka = headerNykyPaikka;
}

// Ilmottaumis div esiin ja pois klikkaamalla ilmottautuminen linkkiä headerissä
function formiEsiin() {
  var form = document.getElementById("form");
  var header = document.getElementById('header_id')
  form.classList.toggle("form_esilla");
  header.classList.toggle("header_esilla")
}

//ilmottautumis divin sisällä oleva X painike, joka poistaa formin näkyvistä
function poistaClass() {
  var form = document.getElementById('form')
  var header = document.getElementById('header_id')
  form.classList.remove("form_esilla");
  header.classList.remove("header_esilla")
}
