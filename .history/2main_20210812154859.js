var readline = require("readline-sync");

var saisi = readline.question("Saisir l'action  à réaliser : \n ");
menu();

function menu() {
    var txt = "";
    txt += "1 : Addition des n premiers nombres \n";
    txt += "2 : Multiplication des n premiers nombres (factorielle) \n";
    txt += "3 : Quitter";
    console.log(txt);
};


if(saisi === 1){
            console.log("un");
} else if(saisi === 2){

}

            break;
        case "2" :
            break;
    }
    menu();
    saisi = readline.question("Saisir l'action  à réaliser : \n ");
}else if(saisi === 3){
        console.log("Au revoir !");
    }
else {console.log("Je n'ai pas compris !");
}


