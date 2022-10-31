
// Tehdään funktio listaan lisäystä varten

function lisaa() {
  //haetaan text inputin value muuttujaan
  var tehtava = document.getElementById('lista_input').value;

  // Tarkastetaan onko input kenttään syötetty mitään. Jos kenttä on tyhjä, mitään ei syötetä listaan.
  if (!tehtava == "") {



  //input kentän tyhjennys lisää napin painalluksen jälkeen
  document.getElementById('lista_input').value = '';


  // Tehdään muuttujat ul ja li elementeille
  var ul = document.getElementById('lista_ul');
  var li = document.createElement("li");
  var p = document.createElement("p");

  // Muuttuja joka luo tekstisisällön "tehtava" muuttujan sisällön mukaan
  var taulukkoon = document.createTextNode(tehtava);

  // lisätään <li> elementti <ul> elementin sisälle
  ul.appendChild(li);

  //lisätään <li> elementin sisälle tekstiä, joka vastaa tässä tapauksessa input kenttään kirjoitettua tekstiä.
  li.appendChild(p);
  p.appendChild(taulukkoon)

  //classin vaihto lista itemin värinvaihtoa varten

  li.addEventListener("click", function classinVaihto() {
    li.classList.toggle("li_varinvaihto")
  })

  //Tehdään muuttuja poistonapille
  var poistoNappi = document.createElement("button")
  var editNappi = document.createElement("button")
  var doneNappi = document.createElement("button")

  // Lisätään poistonapille ja li elementille classit, jotta niitä voidaan muokata CSS:ssä
  poistoNappi.setAttribute("class", "poistonappi")
  li.setAttribute("class", "lista_item")
  p.setAttribute("class", "p_class")

  // Lisätään napille onclick attribuutti, joka poistaa parent elementin, eli <li> elementin
  poistoNappi.setAttribute("onclick", "parentElement.remove();")
  editNappi.setAttribute("class", "editnappi")
  doneNappi.setAttribute("class", "donenappi")

  // Lisätään napille tekstisisältö
  poistoNappi.textContent = "X";
  editNappi.textContent = "✎";
  doneNappi.textContent = "✓"

  // Lisätään poistonappi <li> elementin alle
  li.appendChild(poistoNappi);
  li.appendChild(editNappi);
  li.appendChild(doneNappi);

  window.localStorage.setItem("tehtava", document.getElementById('li'))
  console.log(localStorage)

  editNappi.addEventListener("click", function() {
  p.contentEditable = true;
  p.focus();
  li.classList.toggle("li_varinvaihto");
  doneNappi.classList.add("uusvari")
 });

  doneNappi.addEventListener("click", function() {
    p.contentEditable = false;
    li.classList.toggle("li_varinvaihto")
    doneNappi.classList.remove("uusvari")
  })
}
}



//lisätään enternapin toiminnallisuus eventlistenerillä

//haetaan muuttujaan input elementti, jonka halutaan reagoivan napin painallukseen
var enter = document.getElementById('lista_input');

//lisätään inputille eventlistener, joka kuuntelee napin painallusta kyseisen inputin kohdalla
enter.addEventListener("keydown", function(event) {
  //määritetään nappi jonka painallusta halutaan kuunnella
  if (event.key === "Enter") {
    //määritetään asiat jotka halutaan tapahtuvan napin painalluksen jälkeen, eli buttonin clickkaus tässä tapauksessa
    document.getElementById('lista_button').click();
  }
})


// Poistaa kaikki valmiit tehtävät
function poistaValmiit() {
  const poistettavat = document.querySelectorAll('.li_varinvaihto');
  console.log(poistettavat)
  poistettavat.forEach(poisto => {
  poisto.remove();
});
}
