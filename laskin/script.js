var numero = "";
var luku = "";

 document.getElementById('jakoj').disabled = true;
 document.getElementById('jako').disabled = true;
 document.getElementById('kerto').disabled = true;
 document.getElementById('miinus').disabled = true;
 document.getElementById('plus').disabled = true;
 document.getElementById('piste').disabled = true;
 document.getElementById('enter').disabled = true;

function lisays(luku) {
  numero += luku;
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

  document.getElementById("naytto_1").value = numero;
}

function yht() {
  document.getElementById('naytto_2').value += numero + "=" + "\r\n" + eval(numero) + "\r\n";
  numero = eval(numero);
  document.getElementById('naytto_1').value = numero;
}

function poisto() {
  if (numero.length >= 0) {
  numero = numero.slice(0, -1);
  document.getElementById('naytto_1').value = numero;
  }
}

function tyhjennys() {
  document.getElementById('jakoj').disabled = true;
  document.getElementById('jako').disabled = true;
  document.getElementById('kerto').disabled = true;
  document.getElementById('miinus').disabled = true;
  document.getElementById('plus').disabled = true;
  document.getElementById('piste').disabled = true;
  document.getElementById('enter').disabled = true;

  numero = "";
  document.getElementById("naytto_1").value = numero;
  document.getElementById('naytto_2').value = numero;
}
