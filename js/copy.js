'use strict';
console.log('copy.js file was loaded');

const obj1 = { town: 'London' };
const obj1neCopija = obj1;
const obj2 = { town: 'London' };

// obj1 ir obj2 yra nuorodos i atminties vieta
console.log(obj1 === obj2);
console.log(obj1neCopija === obj1);

const people = [
  {
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    age: 26,
    income: 1200,
    married: false,
    hasCar: false,
  },
  {
    name: 'Severija',
    surname: 'Piktutytė',
    sex: 'female',
    age: 26,
    income: 1300,
    married: false,
    hasCar: true,
  },
  {
    name: 'Valdas',
    surname: 'Vilktorinas',
    sex: 'male',
    age: 16,
    income: 0,
    married: false,
    hasCar: false,
  },
  {
    name: 'Virginijus',
    surname: 'Uostauskas',
    sex: 'male',
    age: 32,
    income: 2400,
    married: true,
    hasCar: true,
  },
  {
    name: 'Samanta',
    surname: 'Uostauskienė',
    sex: 'female',
    age: 28,
    income: 1200,
    married: true,
    hasCar: true,
  },
  {
    name: 'Janina',
    surname: 'Stalautinskienė',
    sex: 'female',
    age: 72,
    income: 364,
    married: false,
    hasCar: false,
  },
];

const peopleShalowCopy = people.slice();
console.log('peopleShalowCopy === people ===', peopleShalowCopy === people);
console.table(peopleShalowCopy);

console.log(
  'peopleShalowCopy[0] === people[0] ===',
  peopleShalowCopy[0] === people[0]
);

const peopleMapCopy = people.map((perObj) => {
  const perObjCopy = { ...perObj };
  return perObjCopy;
});
console.log('peopleMapCopy ===', peopleMapCopy);
console.log(
  'peopleMapCopy[0] === people[0] ===',
  peopleMapCopy[0] === people[0]
);

// vienas is budu kopijuoti bet kokio lygio masyva ar objekta
// musu strukturoj negali buti funkciju, metodu

// paversti objekta ar masyva i json formata(string)
const colors = [
  { id: 1, value: 'red' },
  { id: 2, value: 'gree' },
  { id: 3, value: 'blue' },
];
console.log('colors ===', colors);
const jsonStringFromColors = JSON.stringify(colors);
console.log('jsonStringFromColors ===', jsonStringFromColors);
console.log('typeof jsonStringFromColors ===', typeof jsonStringFromColors);
// atverciant mes turim kopija
const deepColorsCopy = JSON.parse(jsonStringFromColors);
console.log('deepColorsCopy ===', deepColorsCopy);
console.log(
  'deepColorsCopy[0] === colors[0] ===',
  deepColorsCopy[0] === colors[0]
);
