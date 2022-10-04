
//tällä funktiolla tarkastetaan onko lomakkeen tiedot täytetty oikein

function tarkasta(form) {

  // Tallennetaan jokaisen inputin arvo omiin muuttujiin:

  var etunimi = form.enimi.value;
  var sukunimi = form.snimi.value;
  var email = form.emaili.value;
  var textarea = form.textarea.value;
  var radiobuttons = form.radio;

  //  Tarkistetaan etunimen pituus ja palautetaan false, jotta sivu ei siirry "kiitos" sivulle, jos nimi ei ole tarpeeksi pitkä.

  if (etunimi.length < 4) {
    alert("anna pidempi kuin 4 merkkinen etunimi")
    form.enimi.focus();
    return false;
  }

  // Tarkistetaan sukunimen pituus:

  if (sukunimi.length < 4) {
    alert("anna pidempi kuin 4 merkkinen sukunimi")
    form.snimi.focus();
    return false;
  }

  // Tarkistetaan emailin ehdot:

  var ehto = /\S+@\S+\.+\S/;

  if (!ehto.test(email)) {
    alert("anna oikea emaili");
    form.emaili.focus();
    return false;
  }

  // Tarkistetaan radio buttonit

  














}
