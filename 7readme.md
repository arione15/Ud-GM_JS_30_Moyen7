# Exercice Moyen 7 : Saisi pseudo, un nombre puis choisir soit une addition soit une multiplication

-  
  
- ![capture exo7](ex7a.png)
- ![capture exo7](ex7b.png)

## I. Environnement de développement

* JS
* Node.js
* Ligne de commande (module `readline-async`)

## II. Démarches
- 


## III. Points à retenir

1. Ce qu'on reçoit de la `value` d'un `input` est une chaîne de caractères. Si on a affaire à des nombres, il faut alors utiliser `parseInt`.
   ```js
   buttonAddition.addEventListener("click", function(){
    var calculResultat = calculManager.addition(parseInt(chiffreSaisi.value));
    afficherResultat(calculResultat);
})
   ```