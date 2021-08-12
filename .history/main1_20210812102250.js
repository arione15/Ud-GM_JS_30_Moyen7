var readline = require("readline-sync");
var tab = [3,5,10,12];


function menu(){
    var txt = "";
    txt += console.log("1/ Ajouter un nombre");
    txt += console.log("2/ Afficher le tableau");
    txt += console.log("0/ Quitter");
}
menu();

var saisi = readline.question("Qule est votre choix ?")
if(saisi===1){
    ajouter
}