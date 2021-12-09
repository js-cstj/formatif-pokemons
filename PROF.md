# formatif-pokemons
Formatif en préparation de l'épreuve 3

## Étapes du formatif
1. Explorer les adresses de l'API :
    1. https://mboudrea.tim-cstj.ca/epreuve3/pokemon.php
    1. https://mboudrea.tim-cstj.ca/epreuve3/pokemon.php?mot=pikachu
1. Démarrer avec l'application de base
    1. Nettoyer le HTML et `App.js` pour enlever le contenu par défaut
1. Récupérer `chargerJson` sur le site du cours
1. Récupérer l'appel de `chargerJson` sur le site du cours
    1. Enlever les commentaires
    1. Changer l'adresse pour utiliser l'API
    1. Ajouter `console.log(donnees);`

1. Ne faire que la fonction `html_listePokemon` (pour l'instant)
    1. Réfléchir au paramètre et faire la fonction et son appel. 
    1. Créer le `div#pokemons`.
    1. Ajuster le SCSS correspondant (`border`, `padding`, `background`...).
    1. Ajouter la boucle.
    1. Ajouter le `div.pokemon`.
    1. Ajuster le SCSS (`grid`, `border`...).
    1. Ajouter le `<h1>` avant la boucle et constater l'erreur puis corriger l'erreur en changeant le SCSS et/ou en déplaçant le `<h1>`.
    1. Ajouter le `<h2>` avec le nom du Pokémon à l'intérieur.
    1. Ajouter le `p` avec la description à l'intérieur.
    1. Ajouter le `div.image>img` avec le bon `src` (`objPokemon.image_url`) et le bon `alt` (`objPokemon.nom`)
    1. Ajuster le SCSS (`flex`, `align-self`...)
    1. Ajouter le `if` contrôlant l'absence d'image.
    1. En option, remplacer les `<br/>` dans les descriptions avec `objPokemon.description.replace(/<br\/>/g, " ")`.
1. Faire le formulaire HTML dans `index.html`.
    1. Ajouter l'événement `submit`.
    1. Recueillir la valeur du champ de formulaire.
    1. Ajouter l'appel à la fonction `chargerJson` et ajuster l'adresse.
1. Si le temps le permet : 
    1. Faire les fonctions `html_pokemon`, `html_nom`, `html_description` et `html_image`.
    1. Faire et utiliser la fonction `reset`.