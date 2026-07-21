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

## Procédure de validation et de verrouillage des Sprints

Cette procédure s'applique à partir du Sprint 006.

Le travail documentaire, les corrections, les audits et la préparation du diff peuvent être réalisés sans autorisation intermédiaire.

Lorsque la revue finale est terminée, le Product Owner prononce une validation unique :

> Je valide et j'autorise le verrouillage complet du Sprint XXX.

Cette autorisation couvre l'ensemble des opérations nécessaires à la clôture :

- application des statuts définitifs ;
- staging nominatif ;
- vérification du staging ;
- création des commits ;
- création du tag ;
- push de la branche et du tag ;
- fusion dans `main` ;
- push de `main` ;
- nettoyage de la branche après vérification.

Aucune autorisation supplémentaire n'est requise entre ces opérations.

L'exécution doit toutefois être interrompue en cas de fichier inattendu, conflit, échec de contrôle, historique divergent, tag existant à déplacer ou opération destructive.

Les opérations `push --force`, `reset --hard`, déplacement de tag publié et réécriture d'historique restent interdites sans autorisation spécifique du Product Owner.

## Révision contrôlée d'un Sprint validé

Un Sprint validé constitue une référence documentaire stable. Il peut toutefois faire l'objet d'une révision ultérieure afin de corriger une omission, d'intégrer une décision de périmètre, de préserver la cohérence documentaire ou d'améliorer le référentiel fonctionnel ou métier.

Toute révision doit :

- être explicitement autorisée par le Product Owner ;
- être documentée et versionnée ;
- conserver l'historique des décisions et validations antérieures ;
- recevoir un commit et un tag distincts de ceux de la validation initiale ;
- être relue et validée avant de devenir la nouvelle référence.

Le tag d'une validation antérieure ne doit jamais être déplacé ou remplacé.
