# Oiseaux observés sur la zone du BAB

## Consignes

### Objectif

Le but de ce mini projet est d'afficher une liste filtrable d'oiseaux observés sur la zone du BAB, où un clic sur un oiseau de la liste permet d'afficher les détails de cet oiseau.

La structure d'application finale attendue doit correspondre à :

```txt
- app
  - bird-details // composant d'affichage des détails d'un oiseau
  - birds // composant d'affichage de la liste d'oiseaux
  - filters // composant de formulaire de recherche d'oiseaux
  - models // interfaces/types dédiés à la représentation des données relatives aux oiseaux
```

### Etapes

1. Dans un composant `birds`, récupérer les données sur les oiseaux observés en faisant un HTTP GET sur le fichier `public/birds.data.json` et afficher les résultats dans une liste sur la moitié gauche de la page tels que :

```txt
-------------------------
| <nom_oiseau_1>        |
| <nombre_observations> |
-------------------------

-------------------------
| <nom_oiseau_2>        |
| <nombre_observations> |
-------------------------

etc...
```

Pour ce faire, il faudra ajouter un nouveau type `Bird` exporté dans un fichier `models/bird.ts` traduisant les données à manipuler.

2. Dans la moitié droite du composant `birds`, insérer un nouveau composant `birds-details` qui prendra un `Bird` en input et affichera son nom dans un titre `h2` dans un premier temps.

3. Ajouter au type `Bird` les propriétés de détails `description` et `photoUrl` (optionnelle). Puis, dans le compsant `bird-details`, exécuter un appel HTTP GET sur l'endpoint relatif aux détails d'un oiseau (cf. Bird API ci-dessous) relatif à l'oiseau passé en input.

4. Ajouter un composant `filters` comprenant un input de type texte pour filtrer les oiseaux par leur nom. Faire émettre un output sur ce composant lorsque l'input change. Insérer ce composant dans le composant App et effectuer le filtrage de la liste.

## Bird API

Endpoint bird-details : `https://oiseauxdefrance.org/taxhub/api/bibnoms/taxoninfo/<bird_id>`

- **description** : `data.attributs.find(attr => attr.nom_attribut === 'description').valeur_attribut`
- **photo** : `data.medias.find(attr => attr.nom_type_media === 'Photo').url`
