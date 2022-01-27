/*
Vartotojas pasirenka kokia matematine operacija nores atlikti;
Taip pat pasirenka 2 skaicius, su kuriais ta operacija atlikti;
*/

const matematika = {
    plius: (a, b) => a + b,
    minus: (a, b) => a - b,
    padalinus: (a, b) => a / b,
    padauginus: (a, b) => a * b,
}

const pirmas = 7;
const antras = 5;
const veiksmas = 'padauginus';    // plius, minus, padalinus, padauginus

const func = matematika[veiksmas];
const ats = func(pirmas, antras);
console.log(`${pirmas} ${veiksmas} ${antras} yra lygu ${ats}`);

// 7 plius 5 yra lygu 12
// 7 minus 5 yra lygu 2
// 7 padalinus 5 yra lygu 1.4
// 7 padauginus 5 yra lygu 35