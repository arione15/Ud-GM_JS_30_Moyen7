var readline = require("readline-sync");
var tab = [3, 5, 10, 12];


function menu() {
    var txt = "";
    txt += console.log("1/ Ajouter un nombre");
    txt += console.log("2/ Afficher le tableau");
    txt += console.log("0/ Quitter");
}


var saisi = readline.question("Quel est votre choix ?")
if (saisi === 1) {
    var nombre = readline.question("Quel nombre voulez-vous ajouter ?")
    ajouter(nombre);
}
if (saisi === 2) {
    afficher();
}
if (saisi === 0) {
    console.log("Au revoir !");
}
menu();

function 