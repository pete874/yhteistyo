var numero = "";
var luku = "";


function lisays(luku) {

    numero += luku;


  document.getElementById("naytto").value = numero;
}

function tyhjennys() {

  numero = "";
  document.getElementById("naytto").value = numero;
}

function yht() {

    document.getElementById('naytto').value = eval(numero);
    numero = eval(numero);
}

function poisto() {
  if (numero.length >= 0) {
    numero = numero.replace(/\d+$/,'');

    document.getElementById('naytto').value = numero;

  }
}
