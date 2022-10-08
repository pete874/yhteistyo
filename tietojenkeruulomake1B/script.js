function tarkasta() {
  var nimi = document.getElementById('nimi').value;
  var email = document.getElementById('email').value;
  var ika = document.getElementById('ika').value;
  var pudotus = document.getElementById('pudotus').value;
  var radio = document.getElementsByName('radio');
  var check = document.getElementsByName('check');
  var textarea = document.getElementById('textarea').value;

  // Tarkastetaan nimen pituus

  if (nimi.length < 4) {
    alert("liian lyhyt nimi")
    document.getElementById('nimi').focus();
    return false;
  }

  // Tarkastetaan Email

  var ehto = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Mailin ehto

  if (!ehto.test(email)) {
    alert("Anna oikea sähköpostiosoite");
    document.getElementById('email').focus();
    return false;
  }

  // Tarkastetaan ikä

  var ehto2 = /^\d+$/  // Iän ehto

  if (!ehto2.test(ika) || ika < 18 || ika > 130 ) {
    alert("Anna ikä numeroina. Ja iän pitää olla 18 ja 130 välillä");
    document.getElementById('ika').focus();
    return false;
  }

  // Tarkistetaan pudotusvalikko

  if (pudotus.length < 1) {
    alert("valitse yksi vaihtoehdoista")
    document.getElementById('pudotus').focus();
    return false;
  }

  // Tarkistetaan radiobuttonit

  var vastaus = false;
  for (let i = 0; radio.length > i; i++) {
    if (radio[i].checked == true) {
      vastaus = true;
    }
    if (vastaus == false) {
      alert("Valitse yksi vaihtoehdoista")
      return false;
    }
  }

  // Tarkistetaan checkboksit

  vastaus2 = false;
  for (let i = 0; check.length > i; i++ ) {
    if (check[i].checked == true) {
      vastaus2 = true
    }
    if (vastaus2 == false) {
      alert("valitse yksi checkbokseista")
      return false;
    }
  }

  // Tarkistetaan textarea

  if (textarea.length < 10) {
    alert("Kirjoita vähintään 10 merkkiä")
    document.getElementById('textarea').focus();
    return false
  }





}
