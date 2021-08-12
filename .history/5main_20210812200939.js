var readline = require("readline-sync");

var tableau=["marc", "eric", "marie"];

var classe = {
    marc : {
        nom : "Marc",
        age : 21,
        notes : [12,15,13,10,7]
    },
    eric : {
        nom : "Eric",
        age : 18,
        notes : [5,15,3,8,17]
    },
    marie : {
        nom : "Marie",
        age : 22,
        notes : [10,10,11,12,11]
    },
    afficherEleve : function(eleve){
        //console.log("Voici vos élèves :");
        var txt="";
        txt+= "Nom : " + eleve.nom + "\n";
        txt+= "Age : " + eleve.age + "\n";
        txt+= "Notes : " + eleve.notes + "\n";
        console.log(txt);
    }
}
marieafficherEleve();