'use strict';
console.log('callback.js file was loaded');

function sum(a, b, callback) {
  const suma = a + b;
  callback(suma);
  return suma;
}

const rez = sum(10, 15, makeCurrency);
sum(110, 215, makeEuroCurrency);
console.log('rez ===', rez);

function makeCurrency(num) {
  const currencyFormat = `$${num}.00 ct`;
  console.log('currencyFormat ===', currencyFormat);
}

function makeEuroCurrency() {
  //
}

// makeCurrency(100);
// makeCurrency(rez);
