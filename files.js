const fs = require('fs/promises');

(async () => {

    const drinksContent = await fs.readFile('./data/drinks.txt', 'utf-8');
    const drinksList = drinksContent.split('\r\n');

    // Pasirinkimas 1: [gerimo-pavadinimas] kurio kaina yra [kaina] EUR.
    // Pasirinkimas 2: [gerimo-pavadinimas] kurio kaina yra [kaina] EUR.
    // Pasirinkimas 3: [gerimo-pavadinimas] kurio kaina yra [kaina] EUR.

    let i = 0;
    for (const drink of drinksList) {
        // const drinkDetails = drink.split(' ');
        // const name = drinkDetails[0];
        // const price = drinkDetails[1];
        // const count = drinkDetails[2];

        const drinkDetails = drink.split(' ');
        const [name, price, count] = drinkDetails;

        console.log(`Pasirinkimas ${++i}: ${name} kurio kaina yra ${price} EUR buvo parduota ${count} kiekis ir bendra apyvarta yra [apyvarta] EUR.`);
    }

})();
