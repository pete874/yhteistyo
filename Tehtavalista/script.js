



// Tehdään funktio listaan lisäystä varten

function lisaa() {
  //haetaan text inputin value muuttujaan
  var tehtava = document.getElementById('linta_input').value;
  var ul = document.getElementById('lista_ul');
  var li = document.createElement("li");

  var taulukkoon = document.createTextNode(tehtava);
  li.appendChild(taulukkoon);
  ul.appendChild(li);

}
