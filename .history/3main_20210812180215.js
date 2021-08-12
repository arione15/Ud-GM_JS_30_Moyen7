var readline = require("readline-sync");


var chien1 = creerAnimal("Mina",2,false);
var chien2 = creerAnimal("Pam",15,false);
var chien3 = creerAnimal("Hocket",7,true);
var chat1 = creerAnimal("Tya",7,false);
var chat2 = creerAnimal("Milo",5,true);
var chat3 = creerAnimal("Felicia",5,false);
var chat4 = creerAnimal("Lili",1,false);

var chiens =[chien1,chien2,chien3];
var chats =[chat1,chat2,chat3,chat4];
//var animaux = [chiens, chats];



afficheListeAnimaux(chiens);
afficheListeAnimaux(chats);


function creerAnimal(nom, age, sexe) {
    var animal = {};
    animal.nom = nom;
    animal.age = age;
    animal.sexe = sexe;
    return animal;
};

function afficheListeAnimaux(animaux){
    var sexe = false;
    var txt ="";
    
    for(var i=0; i< animaux.length; i++){
        txt += "---------------------- \n";
        txt += "Nom : " + animaux[i].nom + "\n";
        txt += "Age : " + animaux[i].age + "\n";
        if(animaux[i].sexe===false){
            animaux[i].sexe = "Femelle";
        }else{
            animaux[i].sexe = "Male";
        }
        txt += "Sexe : " + animaux[i].sexe + "\n";
        txt += "----------------------";
    }
    console.log(txt);
};

function calculMoyenAge(animaux){
var somme = 0;
for(var i = 0; i < animaux.length; i++){
    somme += animaux[i].age;
} return somme
}
