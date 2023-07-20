'use strict';
console.log('planeTickets.js file was loaded');

// klientas perka lektuvo billieta
// galimi galutiniai rezultai
// pavyko,
// nepavyko,
// eiga - pending

function buyPlaneTickets() {
  const user1 = {
    username: 'Mike',
    town: 'Kaunas',
  };
  return new Promise((resolve, reject) => {
    // imituojam kad pirkimas trunka 4 sek
    setTimeout(() => {
      // veiksma cia vyks po 4 sek
      let isError = false;
      //
      //
      console.log('isError ===', isError);
      // jei nera klaidos tai pavyko
      // debugger;
      if (isError === false) {
        resolve(user1);
      } else {
        reject('klaida yra cia');
      }
    }, 2000);
  });
}

buyPlaneTickets()
  .then((u1) => {
    console.log('Geros keliones', u1.username);
    return u1.username.toUpperCase();
  })
  .then((uNameUpper) => {
    console.log('uNameUpper ===', uNameUpper);
  })
  .catch((error) => {
    console.error('ivyko klaida', error);
  });
