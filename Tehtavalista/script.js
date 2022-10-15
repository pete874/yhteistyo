
// Tehdään funktio listaan lisäystä varten

function lisaa() {
  //haetaan text inputin value muuttujaan
  var tehtava = document.getElementById('lista_input').value;

  //input kentän tyhjennys lisää napin painalluksen jälkeen
  document.getElementById('lista_input').value = '';

  // Tehdään muuttujat ul ja li elementeille
  var ul = document.getElementById('lista_ul');
  var li = document.createElement("li");

  // Muuttuja joka luo tekstisisällön "tehtava" muuttujan sisällön mukaan
  var taulukkoon = document.createTextNode(tehtava);

  // lisätään <li> elementti <ul> elementin sisälle
  ul.appendChild(li);

  //lisätään <li> elementin sisälle tekstiä, joka vastaa tässä tapauksessa input kenttään kirjoitettua tekstiä.
  li.appendChild(taulukkoon);

  //classin vaihto lista itemin värinvaihtoa varten

  li.addEventListener("click", function classinVaihto() {
    li.classList.toggle("uusclassi")
  })

  //Tehdään muuttuja poistonapille
  var poistoNappi = document.createElement("button")

  // Lisätään poistonapille ja li elementille classit, jotta niitä voidaan muokata CSS:ssä
  poistoNappi.setAttribute("class", "poistonappi")
  li.setAttribute("class", "lista_item")

  // Lisätään napille onclick attribuutti, joka poistaa parent elementin, eli <li> elementin
  poistoNappi.setAttribute("onclick", "parentElement.remove();")

  // Lisätään napille tekstisisältö
  poistoNappi.textContent = "X";

  // Lisätään poistonappi <li> elementin alle
  li.appendChild(poistoNappi);
}



//lisätään enternapin toiminnallisuus eventlistenerillä

//haetaan muuttujaan input elementti, jonka halutaan reagoivan napin painallukseen
var enter = document.getElementById('lista_input');

//lisätään inputille eventlistener, joka kuuntelee napin painallusta kyseisen inputin kohdalla
enter.addEventListener("keypress", function(enterNappi) {
  //määritetään nappi jonka painallusta halutaan kuunnella
  if (enterNappi.key === "Enter") {
    //määritetään asiat jotka halutaan tapahtuvan napin painalluksen jälkeen, eli buttonin clickkaus tässä tapauksessa
    document.getElementById('lista_button').click();
  }
})
