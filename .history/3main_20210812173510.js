var readline = require("readline-sync");

var sexe = false;

var chien1 = creerAnimal("Mina",2,false);
var chien2 = creerAnimal("Pam",15,false);
var chien3 = creerAnimal("Hocket",7,true);
var chat1 = creerAnimal("Tya",7,false);
var chat2 = creerAnimal("Milo",5,true);
var chat3 = creerAnimal("Felicia",5,false);
var chat4 = creerAnimal("Lili",1,false);

var animaux =[chien1,chien2,chien3,chat1,chat2,chat3,chat4]

function creerAnimal(nom, age, sexe) {
    var animal = {};
    animal.nom = nom,
    animal.age = age,
    animal.sexe = sexe
    return animal;
}

function afficheListeAnimaux(animaux){
    var txt ="";
    for(var i=0; i< animaux.length; i++){
        
        txt += "Nom : " + animaux[i].nom;
        txt += "Age : " + animaux[i].age;
        txt += "Sexe : " + animaux[i].sexe;
    }
    console.log(txt);
}
afficheListeAnimaux(animaux);