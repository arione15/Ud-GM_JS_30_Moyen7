var readline = require("readline-sync");

var toto = {
    nom: "toto",
    age: 25,
    poids: 80,
    taille: 180,
    affichage: function () {
        var txt="";
        txt+="Nom : " + this.nom + " \n";
        txt+="Age : " + this.age + " \n";
        txt+="Poids : " + this.poids + " \n";
        txt+="Taille : " + this.taille + " \n";
        console.log(txt);
    },
    getForce: function (taille, poids, age) {
        var force = (this.taille*this.poids)/(this.age);
        return force;
    },
}

var marcel = {
    nom: "marcel",
    age: 32,
    poids: 100,
    taille: 175,
    affichage: function () {
        var txt="";
        txt+="Nom : " + this.nom + " \n";
        txt+="Age : " + this.age + " \n";
        txt+="Poids : " + this.poids + " \n";
        txt+="Taille : " + this.taille + " \n";
        console.log(txt);
    },
    getForce: function (taille, poids, age) {
        var force = (this.taille*this.poids)/(this.age);
        return force;
    },
}

toto.affichage();
var forceToto = toto.getForce();
marcel.affichage();
var forceMarcel = marcel.getForce();
if(forceToto > forceMarcel){

}
