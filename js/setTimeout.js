'use strict';
console.log('setTimeout.js file was loaded');

const btnEl = document.getElementById('btn');

// setTimeout(ka paleisti, laikas milisek)
// paleisti procesa po kazkiek laiko
setTimeout(() => {
  console.log('i am inside setTimeout');
}, 3000);

console.log('i am first');
let count = 0;
btnEl.addEventListener('click', () => {
  console.log('paspaudei', count++);
});

// setInterval(ka paleisti, laikas milisek)
// paleisti procesa kas kazkiek laiko
