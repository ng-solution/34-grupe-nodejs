const fs = require('fs/promises');

(async () => {

    Math.round();

    const drinksContent = await fs.readFile('./data/drinks.txt', 'utf-8');
    console.log(drinksContent);
    console.log(typeof drinksContent);

    for (const letter of drinksContent) {
        console.log(letter);
    }

})();
