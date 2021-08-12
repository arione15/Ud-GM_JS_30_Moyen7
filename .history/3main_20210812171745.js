var readline = require("readline-sync");

var sexe = false;

var chien1 = creerAnimal("Mina",2,false);
var chien2 = creerAnimal("Pam",15,false);
var chien3 = creerAnimal("Hocket",7,true);
var chat1 = creerAnimal("Tya",7,false);
var chat2 = creerAnimal("Milo",5,true);
var chat3 = creerAnimal("Felicia",5,false);
var chat4 = creerAnimal("Lili",1,false);

var animaux =[chien1,chien1,chien1,chat1]

function creerAnimal(nom, age, sexe) {
    if (sexe) {
        this.sexe = "Male";
    }
    this.sexe = "Femelle";
    var animal = {
        nom: this.nom,
        age: this.age,
    }
    return animal;
}

function afficheListeAnimaux(animaux){
    var txt ="";
    txt += "Nom : "
}