console.clear();

const a = 5;
const b = 7;
const c = 13;

// a+b
// b+c
// c+a

// Rezultata pateikti tokiu sablonu:
// Skaiciau [a] ir skaiciaus [b] suma yra lygu [suma].

console.log(`Skaiciau ${a} ir skaiciaus ${b} suma yra lygu ${a + b}.`);
console.log(`Skaiciau ${c} ir skaiciaus ${b} suma yra lygu ${c + b}.`);
console.log(`Skaiciau ${a} ir skaiciaus ${c} suma yra lygu ${a + c}.`);

const a1 = [10, 8, 2, 4];
const a2 = [1, 3, 5, 7, 9];
const a3 = [147, 258, 369, 123, 456, 789];

// Rezultata pateikti tokiu sablonu:
// Skaiciu masyvas, kuri sudaro [kiekis] skaiciai, vidurkis yra [vidurkis].


// Legendines asmenybes [Vardas] [Pavarde] trumpinys yra [V.P.]

const s1 = 'mike Pukuotukas';
const s2 = 'Chuck Norris';
const s3 = 'Wonder WomaN';
const s4 = 'Algimantas cekuolis';

function inicialai(pavadinimas) {
    const word = pavadinimas.split(' ');
    const vardas = word[0][0].toUpperCase();
    const pavarde = word[1][0].toUpperCase();
    console.log(`Legendines asmenybes ${word[0]}${word[1]}trumpinys yra ${vardas}.${pavarde}.`);
}

inicialai(s1);
inicialai(s2);
inicialai(s3);
inicialai(s4);


// [Vardas] [Pavarde] yra [amzius] metu amziaus.
const people = [
    { name: 'Jonas', surname: 'Jonaitis', age: 99 },
    { name: 'Maryte', surname: 'Marytaite', age: 87 },
];

console.log(`${people[0].name} ${people[0].surname} yra ${people[0].age} metu amziaus`);