var numero = "";
var luku = "";


function lisays(luku) {
  numero += luku;
  if (numero.length == 11) {
    numero += "<br>";
  }
  if (numero.length == 26) {
    numero += "<br>"
  }
  if (numero.length == 41) {
    numero += "<br>"
  }
  if (numero.length > 41) {
    alert("Tila loppui kesken")
  }

  document.getElementById("naytto").innerHTML = numero;
}

function tyhjennys() {

  numero = "";
  document.getElementById("naytto").innerHTML = numero;
}

function yht() {

    document.getElementById('naytto').innerHTML = eval(numero);
    numero = eval(numero);


}
