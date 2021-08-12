var readline = require("readline-sync");

/*
// 11. EX 6 : boucle while
var nombre = parseInt(readline.question("Quel nombre voulez-vous tester ? "));

while (isNaN(nombre)) {
    console.log("Veuillez recommencer la saisie, vous devez saisir un nombre ! ");
    nombre = parseInt(readline.question("Quel nombre voulez-vous saisir ? "));
}
console.log("Le nombre saisie est : %d", nombre + ".");



// 12. EX 7 : Fonction et modulo
var nombre = parseInt(readline.question("Quel nombre voulez-vous tester ? "));

function divisibleParTrois(x) {
    if (x % 3 === 0) {
        console.log("Le résultat de " + x + "/ 3 = " + x / 3);
    } else {
        console.log(x + " n'est pas divisible par 3.");
    }
}
divisibleParTrois(nombre);
*/

//  . EX   :

var readline = require("readline-sync");

var tab = [2, 6, 10, 3, 8, 37, 20];
var somme = 0;
tab.forEach(element => {
    if (element % 2 === 0) {
        somme += element;
        console.log(`itération ${tab.indexOf(element)} : ${somme}`);
    } else {
        console.log(`itération ${tab.indexOf(element)} : non pair`);
    }

});
console.log(`Le total est de : ${somme}`);