
//tällä funktiolla tarkastetaan onko lomakkeen tiedot täytetty oikein

function tarkasta(form) {

  // Tallennetaan jokaisen inputin arvo omiin muuttujiin:

  var etunimi = form.enimi.value;

  //  Tarkistetaan etunimen pituus ja palautetaan false, jotta sivu ei siirry "kiitos" sivulle, jos nimi ei ole tarpeeksi pitkä.

  if (etunimi.length < 4) {
    alert("anna pidempi kuin 4 merkkinen nimi")
    form.enimi.focus();
    return false;
  }
}
