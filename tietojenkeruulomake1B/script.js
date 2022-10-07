function tarkasta() {
  var nimi = document.getElementById('nimi').value;
  var email = document.getElementById('email').value;
  var ika = document.getElementById('ika').value;

  // Tarkastetaan nimen pituus

  if (nimi.length < 4) {
    alert("liian lyhyt nimi")
    document.getElementById('nimi').focus();
    return false;
  }

  // Tarkastetaan Email

  var ehto = /\S+@\S+\.+\S/; //Mailin ehto

  if (!ehto.test(email)) {
    alert("Anna oikea sähköpostiosoite");
    document.getElementById('email').focus();
    return false;
  }

  // Tarkastetaan ikä

  var ehto2 = /^\d+$/  // Iän ehto

  if (!ehto2.test(ika) && ika < 18 && ika > 130 ) {
    alert("Anna ikä numeroina. Ja iän pitää olla 18 ja 130 välillä");
    document.getElementById('ika').focus();
    return false;
  }


}
