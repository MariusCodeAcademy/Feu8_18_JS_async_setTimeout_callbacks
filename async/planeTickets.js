'use strict';
console.log('planeTickets.js file was loaded');

// klientas perka lektuvo billieta
// galimi galutiniai rezultai
// pavyko,
// nepavyko,
// eiga - pending

function buyPlaneTickets() {
  return new Promise((resove, reject) => {
    // imituojam kad pirkimas trunka 4 sek
    setTimeout(() => {
      // veiksma cia vyks po 4 sek
      let isError = true;
      //
      //
      console.log('isError ===', isError);
      // jei nera klaidos tai pavyko
      if (isError === false) {
        resove();
      } else {
        reject();
      }
    }, 3000);
  });
}

buyPlaneTickets()
  .then(() => {
    console.log('Geros keliones');
  })
  .catch(() => {
    console.warn('ivyko klaida');
  });
