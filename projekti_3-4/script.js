
// Piilottaa headerin alaspäin scrollatessa ja paljastaa sen ylöspäin scrollatessa
var headerEdellinenPaikka = window.pageYOffset;
window.onscroll = function() {
  // Y-offset
  console.log(window.pageYOffset);


  //Intro titlen liikuttaminen
  var introTitle = document.getElementById('intro_title')
  var introTitleOffset = window.pageYOffset * 2;
  introTitle.style.left = introTitleOffset + "px";

  //outro titlen liikuttaminen
  var outroTitle = document.getElementById('outro_title')
  var outroTitleOffset = window.pageYOffset - 2532;
  outroTitle.style.right = outroTitleOffset * 2 + "px";

  //artikkelien liikutus
  var article2 = document.getElementById('article_1');
  var article2Offset = window.pageYOffset * 2.36;
  var article3 = document.getElementById('article_2');
  var article3Offset = window.pageYOffset * 2.36;

  if(window.pageYOffset < 1100) {
  article2.style.right = (article2Offset - 2600) + "px";}
  if(window.pageYOffset < 1693) {
  article3.style.left = (article3Offset - 3960) + "px";}

  //sectioneiden supistus
  var section2 = document.getElementById('section_2');
  var section3 = document.getElementById('section_3');
  var section2Offset = - window.pageYOffset / 0.8;
  var section3Offset = - window.pageYOffset / 0.8;
  console.log(section2Offset)

  if(window.pageYOffset > 1000 && window.pageYOffset < 1558) {
    section2.style.height = (section2Offset + 2400) / 0.8 + "px";
  }

  if(window.pageYOffset > 1744 && window.pageYOffset < 2135) {
    section3.style.height = (section3Offset + 3144) / 0.8 + "px";
  }


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
