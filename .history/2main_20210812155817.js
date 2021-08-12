var readline = require("readline-sync");



do {
    menu();
    saisi = parseInt(readline.question("Saisir l'action  à réaliser : \n "));
    if (saisi === 1) {
        console.log("un");
    } else if (saisi === 2) {
        console.log("deux");
    } else if (saisi === 3) {
        console.log("Au revoir !");
    } else {
        console.log("Je n'ai pas compris !");
    }
} while (saisi !== 3)