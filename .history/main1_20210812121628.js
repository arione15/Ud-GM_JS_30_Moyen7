var readline = require("readline-sync");
var tab = [3, 5, 10, 12];
var nombre = 0;

var saisi = parseInt(readline.question("Quel est votre choix ? "));
do {
    if (saisi === 1) {
        ajouter(tab, nombre);
        menu();
        saisi = parseInt(readline.question("Quel est votre choix ? "));
    } else if (saisi === 2) {
        afficher(tab);
        menu();
        saisi = parseInt(readline.question("Quel est votre choix ? "));
    }
} while (saisi !== 0)

console.log("Au revoir !");


// ---------- Les Fonctions ---------- //
function menu() {
    var txt = "";
    txt += "1/ Ajouter un nombre";
    txt += "2/ Afficher le tableau";
    txt += "0/ Quitter";
    console.log(txt);
};

function ajouter(tab, x) {
    var x = parseInt(readline.question("Quel nombre voulez-vous ajouter ?"));
    var position = 0;
    for (var i = 0; i < tab.length; i++) {
        if (tab[i] > x) {
            position = i;
        }
    }
    
    tab.splice(position, 0, parseInt(x));
};

function afficher(y) {
    console.log(y);
};