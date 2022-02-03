/*
Vartotojas pasirenka kokia matematine operacija nores atlikti;
Taip pat pasirenka 2 skaicius, su kuriais ta operacija atlikti;
*/

const plius = require("./math/plius.js");
const minus = require("./math/minus.js");
const padalinus = require("./math/padalinus.js");
const padauginus = require("./math/padauginus.js");

const matematika = { plius, minus, padalinus, padauginus };

const pirmas = 7;
const antras = 5;
const veiksmas = 'plius';    // plius, minus, padalinus, padauginus

const func = matematika[veiksmas];
const ats = func(pirmas, antras);
console.clear()
console.log(`${pirmas} ${veiksmas} ${antras} yra lygu ${ats}`);

// 7 plius 5 yra lygu 12
// 7 minus 5 yra lygu 2
// 7 padalinus 5 yra lygu 1.4
// 7 padauginus 5 yra lygu 35