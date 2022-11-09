
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




//formin tarkistus
function tarkistus(form) {
var sukunimi = form.sukunimi.value;
var etunimi = form.etunimi.value;
var katuosoite = form. katu.value;
var asNumero = form.asnumero.value;
var postiNumero = form.pnumero.value;
var maa = form.maa.value;
var puhelin = form.puhelin.value;
var email = form.email.value;
var tyonantaja = form.tyonantaja.value;
var nimike = form.ammattinimike.value;
var syntymaAika = form.date.value;
var radioButtons = form.querySelector('input[name="vip"]:checked');

// Regex-ehdot
var regExNimet = /^[A-Za-z]+$/;
var regExNumerot = /^[0-9]+$/;
var regExEmail = /\S+@\S+\.+\S/;
var regExDate = /^\d{1,2}\/\d{1,2}\/\d{4}$/;


// Tarkastetaan tiedot

if (sukunimi.length < 2 || !regExNimet.test(sukunimi)) {
  alert("Syötä kunnollinen sukunimi!");
  return false;
}
else {
  console.log(sukunimi)
}
if (etunimi.length < 2 || !regExNimet.test(etunimi)) {
  alert("Syötä kunnollinen etunimi!");
  return false;
}
if (katuosoite.length < 5 || !regExNimet.test(katuosoite)) {
  alert("Syötä kunnollinen kadun nimi!");
  return false;
}
if (asNumero.length < 1 || !regExNumerot.test(asNumero)) {
  alert("Syötä asunnon numero!");
  return false;
}
if (postiNumero.length != 5 || !regExNumerot.test(postiNumero)) {
  alert("Syötä oikea postinumero!");
  return false;
}
if (maa.length < 3 || !regExNimet.test(maa)) {
  alert("Syötä asuinmaasi");
  return false;
}
if (!regExNumerot.test(puhelin)) {
  alert("Syötä puhelinnumerosi");
  return false;
}
if (!regExEmail.test(email)) {
  alert("Syötä kunnollinen sähköpostiosoite!");
  return false;
}
if(tyonantaja.length < 2) {
  alert("Syötä työnantajan tai oppilaitoksen nimi!");
  return false;
}
if(nimike.length < 2) {
  alert("Syötä ammattinimikkeesi!");
  return false;
}

console.log(syntymaAika)

if(syntymaAika.length < 1) {
  alert("Syötä syntymäaikasi");
  return false;
}

// Tätä en ole saanut toimimaan. En tiedä tuleeko inputista value-arvoa ollenkaan
/*
if (!regExDate.test(regExDate)) {
  alert("Syötä syntymäaikasi")
  return false;
  console.log(syntymaAika.value)
}
else {
  alert("kiitos")
  console.log(syntymaAika.value)
}
*/

if (radioButtons == null) {
  alert("Valitse jokin vaihtoehto!");
  return false;
}

else {
  alert("Kiitos osallistumisesta! Saat hetken kuluttua vahvistuksen sähköpostiisi.");
}










}
function attribuutti() {
  var aikaNyt = new Date();
  console.log(aikaNyt);
  var maxAika = aikaNyt.getFullYear() + "-" + ("0" + (aikaNyt.getMonth() + 1)).slice(-2) + "-" + ("0" + aikaNyt.getDate()).slice(-2);
  console.log(maxAika);
  document.getElementById('syntymaaika').setAttribute("max", maxAika);
}
