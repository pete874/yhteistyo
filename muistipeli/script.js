// Luodaan taulukko ja sijoitetaan siihen objekteina käytetyt kuvat
// Objektiin sijoitetaan kuvan nimi(vapaavalintainen) ja img src.
var cardsArray = [
  {name: 'kengat', img: 'imgs/kuva1.png'},
  {name: 'vaunut', img: 'imgs/kuva2.png'},
  {name: 'pullo', img: 'imgs/kuva3.png'},
  {name: 'ankka', img: 'imgs/kuva4.png'},
  {name: 'jalat', img: 'imgs/kuva5.png'},
  {name: 'lautanen', img: 'imgs/kuva6.png'},
  {name: 'hakaneula', img: 'imgs/kuva7.png'},
  {name: 'kauluri', img: 'imgs/kuva8.png'},
  {name: 'norsu', img: 'imgs/kuva9.png'},
  {name: 'tiikeri', img: 'imgs/kuva10.png'},
  {name: 'joulupukki', img: 'imgs/kuva11.png'},
  {name: 'hiiri', img: 'imgs/kuva12.png'},
  {name: 'kettu', img: 'imgs/kuva13.png'},
  {name: 'koira', img: 'imgs/kuva14.png'},
  {name: 'yksisarvinen', img: 'imgs/kuva15.png'},
  {name: 'mehilainen', img: 'imgs/kuva16.png'},
  {name: 'kanat', img: 'imgs/kuva17.png'},
  {name: 'pupu', img: 'imgs/kuva18.png'},
];
// Sekoitetaan taulukko
cardsArray.sort(() => 0.5 - Math.random());

/*Luodaan jokaiselle ruudukkokoolle oma taulukkomuuttuja.
  - Määritetään slice-komennolla kuinka monta kuvaa kyseiseen peliruudukkoon tulee.
  - Sekoitetaan nämä taulukot vielä erikseen.
*/
var cardsArray44 = cardsArray.slice(0, 8);
cardsArray44 = cardsArray44.concat(cardsArray44);
cardsArray44.sort(() => 0.5 - Math.random());

var cardsArray46 = cardsArray.slice(0, 12);
cardsArray46 = cardsArray46.concat(cardsArray46);
cardsArray46.sort(() => 0.5 - Math.random());

var cardsArray66 = cardsArray.concat(cardsArray);
cardsArray66.sort(() => 0.5 - Math.random());

// Haetaan pelialue id:n perusteella HTML:stä ja tallennetaan muuttujaan
const peliRuudut1 = document.getElementById('ruudukko44');
const peliRuudut2 = document.getElementById('ruudukko46');
const peliRuudut3 = document.getElementById('ruudukko66');
/* Luodaan globaalit muuttujat, joihin tullaan tallentamaan:
    - Valitut kortit nimen perusteella(käytetään korttiparien löytämiseen)
    - Valittujen korttien data-id-numero
    - Löydetyt korttiparit
*/
var valitutKortit = [];
var valitutId = [];
var kortitMatch = [];

var voitot = 0;

// Funktio jolla valitaan haluttu ruudukko
function kaynnista() {
/* Haetaan HTML:stö pudotusvalikko id:n perusteella. Syötetään omaan muuttujaan
   optionien arvo */
  var selectBox = document.getElementById('pelivaihtoehdot_id');
  var selected = selectBox.options[selectBox.selectedIndex].value

  if (selected == 44) {
    document.getElementById('ruudukko46').innerHTML = "";
    document.getElementById('ruudukko66').innerHTML = "";
    ruudukko44();
  }
  else if (selected == 46) {
    document.getElementById('ruudukko44').innerHTML = "";
    document.getElementById('ruudukko66').innerHTML = "";
    ruudukko46();
  }
  else {
    document.getElementById('ruudukko46').innerHTML = "";
    document.getElementById('ruudukko44').innerHTML = "";
    ruudukko66();
  }

}

// Funktio jolla luodaan ruudukko ja "tyhjät kortit" img-elementeillä
function ruudukko44() {
document.getElementById('ruudukko44').innerHTML = "";
  // Käydään luupilla läpi kaikki kuvat
  for(let i = 0; i < 16; i++) {
    //Luodaan tyhjille kuville attribuutit (sijainti, data-id) sekä class ja klikkauksen kuuntelu
    var kortti = document.createElement('img');
    kortti.setAttribute('src', 'imgs/kuva0.png')
    // Huom. jokaiselle tyhjälle kortille tulee oma data-id
    kortti.setAttribute('data-id', i);
    kortti.classList.add('kortit');
    kortti.addEventListener('click', naytaKortti)
    // Upotetaan tyhjät kortit eli 16 x kuva0.png HTML- divin (ruudukko) sisään
    peliRuudut1.appendChild(kortti);
  }
  console.log(cardsArray44);
}
//Sama funktio, mutta img-elementtejä tulee 24
function ruudukko46() {
document.getElementById('ruudukko46').innerHTML = "";

  for(let i = 0; i < 24; i++) {

    var kortti = document.createElement('img');
    kortti.setAttribute('src', 'imgs/kuva0.png')
    kortti.setAttribute('data-id', i);
    kortti.classList.add('kortit');
    kortti.addEventListener('click', naytaKortti)
    peliRuudut2.appendChild(kortti);
  }
  console.log(cardsArray46);
}
//Sama funktio, mutta img-elementtejä tulee 36
function ruudukko66() {
document.getElementById('ruudukko66').innerHTML = "";
  for(let i = 0; i < 36; i++) {

    var kortti = document.createElement('img');
    kortti.setAttribute('src', 'imgs/kuva0.png')
    kortti.setAttribute('data-id', i);
    kortti.classList.add('kortit');
    kortti.addEventListener('click', naytaKortti)
    peliRuudut3.appendChild(kortti);
  }
  console.log(cardsArray66);
}

// Funktio, jolla paljastetaan kuvakortit
function naytaKortti() {
  // Haetaan uuteen muuttujaan korttien data-id
  var korttiId = this.getAttribute('data-id');
  var kuinkaMonta = document.querySelectorAll('.kortit').length;

  if(kuinkaMonta == 16) {
    // src-atribuutilla syötetään paljastettavan kortin sijainti
    this.setAttribute('src', cardsArray44[korttiId].img);
    // Työnnetään klikattu kortti nimen perusteella valitutKortit-taulukkomuuttujaan
    valitutKortit.push(cardsArray44[korttiId].name);
  }
  else if(kuinkaMonta == 24) {
    this.setAttribute('src', cardsArray46[korttiId].img);
    valitutKortit.push(cardsArray46[korttiId].name);
  }
  else {
    this.setAttribute('src', cardsArray66[korttiId].img);
    valitutKortit.push(cardsArray66[korttiId].name);
  }
  // Työnnetään klikatun (tyhjän kortin) id valitutId-taulukkomuuttujaan
  valitutId.push(korttiId);
  // Kahden valinnan jälkeen käynnistetään funktio onkoSamat. Lisätään 250ms viive.
  if(valitutKortit.length === 2) {
    setTimeout(onkoSamat, 250);
  }
}

// Viimeisellä funktiolla määritetään onko kaksi peräkkäin valittua korttia samoja.
function onkoSamat() {
  // Luodaan muuttujat. kortit hakee kaikki kuvat html:stä
  var kortit = document.querySelectorAll('img');
  // valinta 1&2:een syötetään valitutId-taulukon ensimmäinen ja toinen arvo
  var valinta1 = valitutId[0];
  var valinta2 = valitutId[1];
//Jos kortit ovat nimen perusteella samat, mutta data-Id:n perusteella eri, työnnetään kortitMatch-taulukkoon
  if(valitutKortit[0] === valitutKortit[1] && valitutId[0] != valitutId[1]) {
    alert('oikein!');
    kortitMatch.push(valitutKortit);
  }
// Muussa tapauksessa palautetaan "tyhjä" kuva
  else {
    alert('Väärin! Yritä uudelleen.')
    kortit[valinta1].setAttribute('src', 'imgs/kuva0.png');
    kortit[valinta2].setAttribute('src', 'imgs/kuva0.png');
  }

  // Määritetään pelin läpäisyn vaatimukset eri ruudukoille sekä ruudukon tyhjennys
  var korttienMäärä = document.querySelectorAll('img').length;
  // 44 ruudukolle
  if (korttienMäärä === 16 && kortitMatch.length === 8) {
    alert('Läpäisit pelin! Mahtava suoritus!');
    voitot++;
    document.getElementById('voitot').innerHTML = "Voitot: " + voitot;
    cardsArray.sort(() => 0.5 - Math.random());
    cardsArray44.sort(() => 0.5 - Math.random());
    kortitMatch = [];
    kaynnista()
  }
  // 46 ruudukolle
  if (korttienMäärä === 24 && kortitMatch.length === 12) {
    alert('Läpäisit pelin! Mahtava suoritus!');
    voitot++;
    document.getElementById('voitot').innerHTML = "Voitot: " + voitot;
    cardsArray.sort(() => 0.5 - Math.random());
    cardsArray46.sort(() => 0.5 - Math.random());
    kortitMatch = [];
    kaynnista()
  }
  // 66 ruudukolle
  if (korttienMäärä === 36 && kortitMatch.length === 18) {
    alert('Läpäisit pelin! Mahtava suoritus!');
    voitot++;
    document.getElementById('voitot').innerHTML = "Voitot: " + voitot;
    cardsArray.sort(() => 0.5 - Math.random());
    cardsArray66.sort(() => 0.5 - Math.random());
    kortitMatch = [];
    kaynnista()
  }
  valitutKortit = [];
  valitutId = [];
}















// Tyhjennetään valitutKortit-taulukko sekä valitutId-taulukko
