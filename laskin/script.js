var numero = "";
var luku = "";


function lisays(luku) {
  if (numero.length == 12) {
    numero += "<br>";
  }
  if (numero.length == 28) {
    numero += "<br>"
  }
  if (numero.length == 44) {
    numero += "<br>"
  }
  if (numero.length > 59) {
    alert("Tila loppui kesken")
  } else {
    numero += luku;
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

function poisto() {
  if (numero.length >= 0) {
    numero = numero.slice(0, -1);
    document.getElementById('naytto').innerHTML = numero;

  }
}
