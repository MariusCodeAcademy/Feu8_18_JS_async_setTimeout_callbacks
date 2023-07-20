'use strict';
console.log('setTimeout.js file was loaded');

const btnEl = document.getElementById('btn');
const timeEl = document.getElementById('time');

// setTimeout(ka paleisti, laikas milisek)
// paleisti procesa po kazkiek laiko
setTimeout(() => {
  console.log('i am inside setTimeout');
}, 3000);

console.log('i am first');
let count = 0;
btnEl.addEventListener('click', () => {
  logKazka();
});

// setInterval(ka paleisti, laikas milisek)
// paleisti procesa kas kazkiek laiko
// const interval1 = setInterval(logKazka, 2000);

function logKazka() {
  console.log('paspaudei', ++count);
  if (count >= 10) {
    console.log('stop');
    // sutabdyti intervala
    clearInterval(interval1);
  }
}

// setInterval(tick, 1000);
// tick();

function tick() {
  const nowObj = new Date();
  // console.log('nowObj ===', nowObj);
  const formatedTime = nowObj.toLocaleString('lt', {
    // dateStyle: 'full',
    timeStyle: 'medium',
  });
  // console.log('formatedTime ===', formatedTime);
  timeEl.textContent = formatedTime;
}
