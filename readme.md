```javascript
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
```

## uzd 1

1. Parašykite funkciją, kuri atspausdina visus žmones eilutėmis

2. Parašykite funkciją, kuri atspausdina visų žmonių vardus ir pavardes, atskirtus brūkšneliu, pvz.:
   Serbentautas-Bordiūras

3. Parašykite funkciją, kuri atspausdina visų žmonių vardus ir pavardes bei santuokos statusą, tokiu būdu
   Jonas Bikas: Vedęs
   Jonas Bikas: Nevedęs
   Samantas Kultaitytė: Ištekėjusi
   Samantas Kultaitytė: Neištekėjusi

4. Parašykite funkcijas pagal 2 ir 3 užduotį, kurios vietoj to kad spausdintų, rezultatus grąžintų. Tuomet rezultatai
   būtų atspausdinti naudojant funkciją aprašytą pirmu punktu.

5. Sukurkite kaitos funkciją, kuri grąžintų objektą su lytimi ir uždirbamu pinigų kiekiu

6. Sukurkite funkciją, kuri grąžintų objektą su vardu, pavarde ir lytimi. Tuomet panaudoje ją, grazinkite masyvą,

## uzd 2 (jei kazkas kartojasi spreskite kitas)

1. Naudojant Array.prototype.forEach atspausdinti visus vyrus.

2. Naudojant Array.prototype.forEach atspausdinti visas moteris jaunesnes nei 35 metai.

3. Naudojant Array.prototype.forEach atspausdinti visus žmones kurie turi mašinas.

4. Naudojant Array.prototype.forEach atspausdinti visus susituokusius žmones.

5. Naudojant Array.prototype.forEach atspausdinti visų vairuojančių žmonių amziu.

6. Naudojant Array.prototype.forEach ir globalius kintamuosius,
   suskaičiuoti vairuojančių moterų ir vyrų kiekius, bei juos atspausdinti.

7. Pagal people masyvą, naudojant Array.prototype.map, suformuokite masyva su objektais, kurie turės savybes sex ir income

8. Pagal people masyvą, naudojant Array.prototype.map, suformuokite masyva pakeičiant savybę 'income' į 'salary'

9. Pagal people masyvą, naudojant Array.prototype.map, suformuokite masyva kuriame nebūtų lyties, vardo ir pavardės

10. Pagal people masyvą, naudojant Array.prototype.map, suformuokite masyvą kur savybės name ir surname būtų pakeistos viena savybe - fullname

## toliau pasiziureti ir pasispresti edabit su async, funkcijom, masyvais, ciklais
