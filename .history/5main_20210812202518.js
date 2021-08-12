var readline = require("readline-sync");

//var tableau=[marc, eric, marie];

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
        var txt="";
        txt+= "Nom : " + eleve.nom + "\n";
        txt+= "Age : " + eleve.age + "\n";
        txt+= "Notes : " + eleve.notes + "\n";
        console.log(txt);
    },
    afficherClasse : function(){
        console.log("Voici vos élèves :");
        var txt="";
        txt+= this.afficherEleve(this.marc) + "\n";
        txt+= this.afficherEleve(this.eric) + "\n";
        txt+= this.afficherEleve(this.marie) + "\n";
        console.log(txt);
    },
    calculerMoyenneEleve: function(eleve){
        var s=0;
        for(i=0; i<eleve.notes.length; i++){
            s+=eleve.notes[i]
        }
    }
}
classe.afficherClasse();