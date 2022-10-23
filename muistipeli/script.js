var cardsArray = [
  {name: 'kengät', img: 'imgs/kuva1.png'},
  {name: 'kengät', img: 'imgs/kuva1.png'},
  {name: 'vaunut', img: 'imgs/kuva2.png'},
  {name: 'vaunut', img: 'imgs/kuva2.png'},
  {name: 'pullo', img: 'imgs/kuva3.png'},
  {name: 'pullo', img: 'imgs/kuva3.png'},
  {name: 'ankka', img: 'imgs/kuva4.png'},
  {name: 'ankka', img: 'imgs/kuva4.png'},
  {name: 'jalat', img: 'imgs/kuva5.png'},
  {name: 'jalat', img: 'imgs/kuva5.png'},
  {name: 'lautanen', img: 'imgs/kuva6.png'},
  {name: 'lautanen', img: 'imgs/kuva6.png'},
  {name: 'hakaneula', img: 'imgs/kuva7.png'},
  {name: 'hakaneula', img: 'imgs/kuva7.png'},
  {name: 'kauluri', img: 'imgs/kuva8.png'},
  {name: 'kauluri', img: 'imgs/kuva8.png'},

];

const peliRuudut = document.getElementById('ruudukko');
var valitutKortit = [];
var valitutId = [];
var kortitMatch = [];

cardsArray.sort(() => 0.5 - Math.random());

function kaynnista() {
  var selectBox = document.getElementById('pelivaihtoehdot_id');
  var selected = selectBox.options[selectBox.selectedIndex].value

  if (selected == 44) {
    ruudukko44();
  }
  else if (selected == 46) {
    ruudukko46();
  }
  else {
    ruudukko66();
  }
}

// Funktio jolla luodaan ruudukko ja "tyhjät kortit" img-elementeillä
function ruudukko44() {
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
    peliRuudut.appendChild(kortti);

  }
}
//Sama funktio, mutta img-elementtejä tulee 24
function ruudukko46() {

  for(let i = 0; i < 24; i++) {

    var kortti = document.createElement('img');
    kortti.setAttribute('src', 'imgs/kuva0.png')
    kortti.setAttribute('data-id', i);
    kortti.classList.add('kortit');
    kortti.addEventListener('click', naytaKortti)
    peliRuudut.appendChild(kortti);

  }
}
//Sama funktio, mutta img-elementtejä tulee 36
function ruudukko66() {

  for(let i = 0; i < 36; i++) {

    var kortti = document.createElement('img');
    kortti.setAttribute('src', 'imgs/kuva0.png')
    kortti.setAttribute('data-id', i);
    kortti.classList.add('kortit');
    kortti.addEventListener('click', naytaKortti)
    peliRuudut.appendChild(kortti);

  }
}

// Funktio jolla paljastetaan kuvakortit
function naytaKortti() {
  // Haetaan uuteen muuttujaan korttien data-id
  var korttiId = this.getAttribute('data-id');
  // src-atribuutilla haetaan uuden kortin sijainti
  this.setAttribute('src', cardsArray[korttiId].img);
  // Työnnetään klikattu kortti nimen perusteella valitutKortit-taulukkomuuttujaan
  valitutKortit.push(cardsArray[korttiId].name);
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
//Mikäli samat, työnnetään kortitMatch-taulukkoon
  if(valitutKortit[0] === valitutKortit[1]) {
    alert('oikein!');
    kortitMatch.push(valitutKortit)
  }
// Muussa tapauksessa palautetaan "tyhjä" kuva
  else {
    alert('Väärin! Yritä uudelleen.')
    kortit[valinta1].setAttribute('src', 'imgs/kuva0.png');
    kortit[valinta2].setAttribute('src', 'imgs/kuva0.png');
  }

  // Määritetään pelin läpäisyn vaatimukset eri ruudukoille
  var korttienMäärä = document.querySelectorAll('img').length;

  if(korttienMäärä === 16 && kortitMatch.length === 8 ||
     korttienMäärä === 24 && kortitMatch.length === 12 ||
     korttienMäärä === 36 && kortitMatch.length === 18) {

    alert('Onneksi olkoon! Voitit!');
  // Käynnistetään HTML-sivu uudestaan
    location.reload()
    }

// Tyhjennetään valitutKortit-taulukko sekä valitutId-taulukko
  valitutKortit = [];
  valitutId = [];

}
