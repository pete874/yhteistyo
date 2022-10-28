// Luodaan globaalit numero ja luku-muuttujat

var numero = "";
var luku = "";
// Haetaan laskuoperaattorit ja poistetaan ne lähtökohtaisesti käytöstä
 document.getElementById('jakoj').disabled = true;
 document.getElementById('jako').disabled = true;
 document.getElementById('kerto').disabled = true;
 document.getElementById('miinus').disabled = true;
 document.getElementById('plus').disabled = true;
 document.getElementById('piste').disabled = true;
 document.getElementById('enter').disabled = true;
// Syöttöfunktio
function lisays(luku) {
  numero += luku;
// Määritetään, että numerosyötön jälkeen laskuoperaattorit ovat käytössä
  var test = /[0-9]/;

  if(test.test(luku) == true) {
    document.getElementById('jakoj').disabled = false;
    document.getElementById('jako').disabled = false;
    document.getElementById('kerto').disabled = false;
    document.getElementById('miinus').disabled = false;
    document.getElementById('plus').disabled = false;
    document.getElementById('piste').disabled = false;
    document.getElementById('enter').disabled = false;
  }
// Viedään käyttäjän syöttö näytölle
  document.getElementById("naytto_1").value = numero;
}
// Laskutoimitus funktio
function yht() {
// Syötetään kakkosnäytölle laskutoimitus ja lopputulos
  document.getElementById('naytto_2').value += numero + "=" + "\r\n" + eval(numero) + "\r\n";
// Syötetään ykkösnäytölle pelkkä lopputulos
  numero = eval(numero);
  document.getElementById('naytto_1').value = numero;
}
// Poistofunktio
function poisto() {
// Mikäli näytöllä useampi kuin 0 numeroa, funktio poistaa viimeisen syötetyn merkin
  if (numero.length >= 0) {
  numero = numero.slice(0, -1);
  document.getElementById('naytto_1').value = numero;
  }
}
// Tyhjennysfunktio
function tyhjennys() {
// Tyhjennyksen jälken laskuoperaattorit ovat taas pois käytöstä
  document.getElementById('jakoj').disabled = true;
  document.getElementById('jako').disabled = true;
  document.getElementById('kerto').disabled = true;
  document.getElementById('miinus').disabled = true;
  document.getElementById('plus').disabled = true;
  document.getElementById('piste').disabled = true;
  document.getElementById('enter').disabled = true;
// Tyhjennetään numeromuuttuja
  numero = "";
  document.getElementById("naytto_1").value = numero;
  document.getElementById('naytto_2').value = numero;
}
