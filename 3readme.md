# Exercice Moyen 3 : Création de tableaux avec des fonctions et calcul de moyenne

- Création de 3 fonctions
- Affichage tableaux
  
- ![capture exo3](ex3.png)

## I. Environnement de développement

* JS
* Node.js
* Ligne de commande (module `readline-async`)

## II. Démarches
- creerAnimal()
- afficherListeAnimaux()
- calculerMoyenneAge()
- Créer 2 tableaux : un pour les chiens et un pour les chats


## III. Points à retenir

1. La création d'objet : on initialise un objet vide puis on lui donne ses propriétés
   
   ```js
   function creerAnimal(nom, age, sexe){
    var animal = {};
    animal.nom = nom;
    animal.age = age;
    animal.sexe = sexe;
    return animal;
   }
   ```