# Exercice Moyens 1 : Tableau

- Ajouter, au bon endroit, des éléments à un tableau (conserver le tablezau trié).
- Réaliser un menu en ligne de commande permettant d'ajouter plusieurs valeurs.
- ![capture exo1](ex1.png)
## I. Environnement de développement

* JS
* Node.js
* Ligne de commande (module `readline-async`)

## II. Démarches
- Créer le menu
- Faire un `do while` ou un `switch case` pour les différents cas du menu
- Créer les fonctions `afficher()`, `ajouter()` et `quitter()`


## III. Points à retenir

1. Pour stocker le nombre ajouté au bon endroit, on a besoin de connaître la position. Ca va être une valeur retournée d'une fonction. D'où la necessité de 2 fonctions : une qui determine la position et l'autre pour utiliser cette position dans un splice. Une amélioration consiste à enlever les paramètres de `ajouter()` car il y a répétition avec la fonction `trouverPosition()`.
    ```php
    function ajouter(tab, x) {
        var x = parseInt(readline.question("Quel nombre voulez-vous ajouter ? "));
        position = trouverPosition(tab, x)
        tab.splice(position, 0, x);

    };
    function trouverPosition(tab, x) {
        for (var i = 0; i < tab.length; i++) {
            if (tab[i] > x) {
                return i;
            }
        }
        return tab.length;
    };
    ```
