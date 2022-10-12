var numero = "";
var luku = "";


function lisays(luku) {
  numero += luku;
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
