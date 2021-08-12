var readline = require("readline-sync");

function menu() {
    var txt = "";
    txt += "1 : Addition des n premiers nombres \n";
    txt += "2 : Multiplication des n premiers nombres (factorielle) \n";
    txt += "3 : Quitter";
    console.log(txt);
};


var saisi = readline.question("Saisir l'action  à réaliser : \n ");
if(saisi !==3){
    switch(saisi){
        case "1" :
            console.log("un");
            break;
        case "2" :
            console.log("deux");
            break;
    }
}else if(saisi === 3){
        console.log("Au revoir !");
    }
else {console.log();}

