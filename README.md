# Birds

## Bird API

Endpoint bird-details : `https://oiseauxdefrance.org/taxhub/api/bibnoms/taxoninfo/<bird_id>`

- **description** : data.attributs.find(attr => attr.nom_attribut === 'description').valeur_attribut
- **photo** : data.medias.find(attr => attr.nom_type_media === 'Photo').url
