
var arvauskerrat = 0;
var voitot = 0;
var haviot = 0;
var arvattavaNumero = Math.floor(Math.random() * 10) + 1

window.onload = function taulukonTulostus() {
  var taulukko = "";

  for (let i = 1; i <= 10; i++) {
    taulukko += "<button type='button' class='napit' name='napit' onclick='arvaus(this)' value='" + i + "' >" + i + "</button>"
  /*  if (i % 3 == 0) {
      taulukko += "<br>"
    }*/

  }
  document.getElementById('napit').innerHTML = taulukko;
}

function arvaus(numero) {
  var arvattuNumero = numero.value;
  console.log(arvattuNumero, arvattavaNumero)

  if (arvauskerrat < 3) {
    if (arvattuNumero < arvattavaNumero) {
      Swal.fire({                                           // Custom alertboxin komentoja löytyy täältä: https://sweetalert2.github.io/
        position: 'top',
        icon: 'warning',
        iconColor: '#AA4A44',
        title: 'Numero on isompi',
        showConfirmButton: false,
        timer: 1500,
        color: '#552F00',
        background: '#FFD9AA'
      });
      arvauskerrat++
    } else if (arvattuNumero > arvattavaNumero) {
      Swal.fire({
        position: 'top',
        backdrop: true,
        icon: 'warning',
        iconColor: '#AA4A44',
        title: 'Numero on pienempi',
        showConfirmButton: false,
        timer: 1500,
        color: '#552F00',
        background: '#FFD9AA'
    });
      arvauskerrat++
    } else if (arvattuNumero == arvattavaNumero){
      Swal.fire({
        position: 'center',
        backdrop: true,
        icon: 'success',
        title: 'OIKEIN! Voitit',
        showConfirmButton: false,
        timer: 3000,
        color: '#552F00',
        background: '#FFD9AA',
        confirmButtonColor: '#552F00'
    });
      arvauskerrat = 0;
      arvattavaNumero = Math.floor(Math.random() * 10) + 1
      voitot++
      document.getElementById('voitot').innerHTML = "Voitot: " + voitot;
    }
  }

  if (arvauskerrat == 3) {
    Swal.fire({
      position: 'center',
      backdrop: true,
      icon: 'error',
      title: 'HÄVISIT!<br> Oikea vastaus olisi ollut numero '+ arvattavaNumero +'<br> Yritä uudelleen!',
      showConfirmButton: false,
      timerProgressBar: true,
      timer: 3000,
      color: '#552F00',
      background: '#FFD9AA'
  });
    arvattavaNumero = Math.floor(Math.random() * 10) + 1
    haviot++
    document.getElementById('haviot').innerHTML = "Häviöt: " + haviot;
    arvauskerrat = 0;
  }
}
