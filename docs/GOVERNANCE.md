# Gouvernance du projet AZUREUM

## Principe central

Aucun code n'est écrit tant que son objectif, son comportement et son périmètre ne sont pas définis.

## Règles des Sprints

Chaque Sprint doit posséder :

- un objectif unique ;
- un périmètre explicite ;
- des éléments hors périmètre ;
- des critères d'acceptation ;
- des validations adaptées ;
- une documentation mise à jour ;
- un état final propre et reproductible.

## Interdictions

- aucun développement hors Sprint ;
- aucune décision métier implicite ;
- aucune modification distante non versionnée ;
- aucune table créée sans migration ;
- aucune règle de sécurité créée uniquement depuis une interface distante ;
- aucun secret ajouté à Git ;
- aucun Sprint suivant tant que le Sprint courant n'est pas validé ;
- aucune dépendance ajoutée sans justification.

## Statuts documentaires

- À définir
- En exploration
- Validé
- Implémenté
- Archivé

## Git

- `main` doit toujours rester stable ;
- chaque Sprint utilise une branche dédiée ;
- chaque commit décrit une seule intention ;
- chaque Sprint validé reçoit un tag ;
- aucun fichier généré ou secret ne doit être versionné.

## Validation d'un Sprint

Un Sprint est verrouillable uniquement si :

- tous ses critères d'acceptation sont satisfaits ;
- la documentation est cohérente ;
- les validations prévues réussissent ;
- le dépôt est propre ;
- aucune modification hors périmètre n'est présente.
