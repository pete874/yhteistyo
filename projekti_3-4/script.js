
// Piilottaa headerin alaspäin scrollatessa ja paljastaa sen ylöspäin scrollatessa
var headerEdellinenPaikka = window.pageYOffset;
window.onscroll = function() {

  //Intro titlen liikuttaminen
  var introTitle = document.getElementById('intro_title')
  var introTitleOffset = window.pageYOffset * 2;
  introTitle.style.left = introTitleOffset + "px";

  //outro titlen liikuttaminen
  var outroTitle = document.getElementById('outro_title')
  var outroTitleOffset = window.pageYOffset - 2780;
  outroTitle.style.right = outroTitleOffset * 1.4 + "px";

  //artikkelien liikutus
  var section2 = document.getElementById('article_1');
  var section2Offset = window.pageYOffset * 2.36;
  var section3 = document.getElementById('article_2');
  var section3Offset = window.pageYOffset * 1.45;

  section2.style.right = (section2Offset - 2600) + "px";
  section3.style.left = (section3Offset - 2610) + "px";


  //headerin piilotus
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
