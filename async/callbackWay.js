'use strict';
console.log('callbackWay.js file was loaded');

// the problem

// sakysim kad mums reikia pagaminti objekta su username, town, age

function getUsername(callBack) {
  console.log('pries timeout');
  setTimeout(() => {
    console.log('1. vardas: James');
    // kviesti miesta tik kai turim varda
    callBack();
  }, 500);

  console.log('po timeout');
}
function getTown(callBack) {
  setTimeout(() => {
    console.log('2. miestas: London');
    // kviesti getAge tik kai gavom miesta
    callBack();
  }, 2500);
}
function getAge() {
  setTimeout(() => {
    console.log('3. amzius: 47');
  }, 300);
}

// jei butu daugiau lygiu tai yra vadinama 'callback hell'
// getUsername(() => {
//   getTown(() => {
//     getAge();
//   });
// });
// getTown();

function getValueAfter(callback) {
  let rez;
  setTimeout(() => {
    rez = 'gryzo reikme';
    callback('gryzo reikme');
  }, 2000);
  return rez;
}

const reikme = getValueAfter((reiksmePoTimeOut) => {
  console.log('reiksmePoTimeOut ===', reiksmePoTimeOut);
});
console.log('reikme ===', reikme);

getValueAfter((reiksmePoTimeOut) => {
  console.log('reiksmePoTimeOut ===', reiksmePoTimeOut);
});
