# Exercice Moyen 4 : Comparer valeurs de 2objets

- Chacun des 2 objets (nom, âge, poids et taille) dispose de 2 fonctions `affichage()` qui permet à l'objet e s'afficher lui-même et `getForce()` qui permet de calculer et retourner la force de l'objet selon une formule.
- La formule de la force est : `force = (taille * poids)/age`.
  
- ![capture exo4](ex4.png)

## I. Environnement de développement

* JS
* Node.js
* Ligne de commande (module `readline-async`)

## II. Démarches
- 


## III. Points à retenir

1. crétion d'un objet avec des propriétés et des fonctions
   ```js
   var toto = {
    nom: "toto",
    ....
    affichage: function () {
        var txt="";
        txt+="Nom : " + this.nom + " \n";
        .....
        txt+="Force : " + this.getForce(this.taille, this.poids, this.age) + " \n";
        console.log(txt);
    },
    getForce: function (taille, poids, age) {
        var force = (this.taille*this.poids)/(this.age);
        return force;
    },
}
   ```  