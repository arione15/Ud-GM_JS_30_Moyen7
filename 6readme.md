# Exercice Moyen 6 : DOM et vérification du login et du mdp

- utilisation des fonctions `test()` et `match()` 
  
- ![capture exo6](ex6.png)

## I. Environnement de développement

* JS
* Node.js
* Ligne de commande (module `readline-async`)

## II. Démarches
- 


## III. Points à retenir

1. Utilsation de `test()` pour vérifier s'il y a correspondance entre un texte et une regex :
   
   ```js
    eletLogin.addEventListener("keyup", function(){
        var regex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
        if(!regex.test(eletLogin.value)){
            eletLogin.style.backgroundColor="red";
        }else
   ```
2. Utilisation de `match()` qui permet d'obtenir le tableau de correspondance entre une chaîne et une regex :
   ```js
    eletMdp.addEventListener("blur", function(){
        var carDecimal = /\d/;
        var carSpecial = /[$&!?]/;
        var err = "";
        
        if(!eletMdp.value.match(carDecimal)){
            err+="<li>doit contenit un chiffre !</li>";
        }
        .....
   ```