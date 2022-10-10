
var arvauskerrat = 0;
var voitot = 0;
var haviot = 0;
var arvattavaNumero = Math.floor(Math.random() * 10) + 1

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

  if (arvauskerrat < 3) {
    if (arvattuNumero < arvattavaNumero) {
      alert("numero on isompi")
      arvauskerrat++
    } else if (arvattuNumero > arvattavaNumero) {
      alert("numero on pienempi")
      arvauskerrat++
    } else if (arvattuNumero == arvattavaNumero){
      alert("OIKEIN!")
      arvauskerrat = 0;
      voitot++
      document.getElementById('voitot').innerHTML = "Voitot: " + voitot;
    }
  }

  if (arvauskerrat == 3) {
    alert("arvaukset loppuivat")
    haviot++
    document.getElementById('haviot').innerHTML = "Häviöt: " + haviot;
    arvauskerrat = 0;
  }
}
