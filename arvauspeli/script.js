var arvattavaNumero = Math.floor(Math.random() * 10) + 1
var arvauskerrat = 0;

window.onload = function taulukonTulostus() {
  var taulukko = "";

  for (let i = 1; i <= 10; i++) {
    taulukko += "<button type='button' class='napit' name='napit' onclick='arvaus(this)' value='" + i + "' >" + i + "</button>"
  /*  if (i % 3 == 0) {
      taulukko += "<br>"
    }*/

  }
  document.getElementById('napit').innerHTML = taulukko;
}

function arvaus(numero) {
  var arvattuNumero = numero.value;
  console.log(arvattuNumero)
}