var readline = require("readline-sync");

menu();
var saisi = parseInt(readline.question("Saisir l'action  à réaliser : \n "));

function menu() {
    var txt = "";
    txt += "1 : Addition des n premiers nombres \n";
    txt += "2 : Multiplication des n premiers nombres (factorielle) \n";
    txt += "3 : Quitter";
    console.log(txt);
};

while(saisi !==3){
    
}
if (saisi === 1) {
    console.log("un");
} else if (saisi === 2) {
    console.log("deux");
} else if (saisi === 3) {
    console.log("Au revoir !");
} else {
    console.log("Je n'ai pas compris !");
}
