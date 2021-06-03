# Projet NSI : Puissance 4

## I - Fonctionnement du programme 
### 1. HTML
Les différentes cases ont été écrites avec l'éditeur de texte vim afin d'accélérer leur création. Vim permet de créer des "macros", ce sont des répétitions de touches enregistrées dans un registre. Ces macros sont donc très utiles afin de répéter certaines actions, comme par exemple pour modifier les chiffres et les lettres des id des cases sur des dizaines de lignes.

### 2. JavaScript
Le code javascript est composÃ© de plusieurs fonctions :

1. La fonction ``jeton(id)`` est composÃ©e de 5 boucles, la première boucle permet de vérifier si une case est vide afin de changer sa couleur, les cases sont parcourues de bas en haut. Les 3 autres boucles permettent de vérifier si un joueur a gagné, ces boucles vérifient si une case et la suivante (déterminée différement selon les boucles) sont les mêmes, si la condition est validée, la variable ``victoire`` est incrémentée.

2. La fonction ``darkTheme()`` entre 2 feuilles de style, l'une est celle par défaut et l'autre est celle avec d'est fonds sombres.

3. La fonction ``choiseColor()`` permet de choisir la couleur des jetons, si les inputs sont vides, les couleurs par défaut sont choisies (rouge et jaune). Les couleurs peuvent être rentrées en hexadecimal ou en anglais.
