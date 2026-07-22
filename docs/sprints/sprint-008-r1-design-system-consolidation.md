# Sprint 008-r1 — Consolidation du Design System V1

## Statut

Validé — verrouillage Git en attente

## Décision Product Owner

La création du Sprint 008-r1 est explicitement autorisée par le Product Owner.

Cette révision constitue une révision corrective contrôlée du Sprint 008 conformément à la gouvernance d’AZUREUM.

## Objectif

Produire la version définitive et directement exploitable du Design System V1 avant l’implémentation du Sprint 009.

La révision doit permettre d’implémenter les fondations visuelles sans contradiction, interprétation locale ni décision visuelle laissée implicitement au développeur.

Lorsqu’une valeur d’implémentation ne peut pas être déduite objectivement des décisions validées, la révision la signale comme restant à définir pendant le Sprint 009 au lieu de l’inventer.

## Nature de la révision

Le Sprint 008-r1 est une consolidation documentaire ciblée.

Une modification est recevable uniquement lorsqu’elle :

1. corrige une contradiction démontrée ;
2. supprime une ambiguïté susceptible de produire plusieurs implémentations ;
3. explicite une règle déjà implicite et indispensable au développement ;
4. rétablit la cohérence ou la traçabilité documentaire ;
5. prévient une dette de maintenance directement identifiable.

Chaque correction doit être minimale, justifiée et traçable vers l’écart qu’elle résout. La clarification d’une règle existante est toujours privilégiée à l’ajout d’une nouvelle règle.

## Périmètre

Le Sprint comprend uniquement :

- la correction des contradictions internes du Design System ;
- la clarification des règles nécessaires à son implémentation ;
- la vérification des associations de couleurs et des contrastes ;
- la consolidation des tokens sémantiques ;
- la clarification des valeurs normatives et des conventions d’implémentation ;
- la correction des critères d’acceptation ;
- la synchronisation des statuts et documents de gouvernance ;
- l’audit ciblé de la révision.

## Exclusions

Le Sprint ne peut pas :

- ajouter une fonctionnalité ou un composant ;
- modifier l’identité visuelle, le logo ou son tracé ;
- ajouter ou remplacer une couleur par préférence ;
- inventer une valeur de conception qui ne découle pas des décisions validées ;
- étendre le périmètre fonctionnel ;
- créer un thème supplémentaire ;
- réaliser l’implémentation CSS ou React ;
- introduire une bibliothèque d’interface ;
- rouvrir une décision stabilisée sans contradiction démontrée.

## Livrables

- `docs/specifications/design-system-v1.md` révisé ;
- `docs/sprints/sprint-008-r1-design-system-consolidation.md` ;
- `PROJECT_STATE.md` synchronisé ;
- `CHANGELOG.md` complété.

Le fichier `docs/sprints/sprint-008-design-system.md` reste la trace du Sprint 008 initial. Seules ses métadonnées historiques manifestement erronées peuvent être corrigées.

## Critères d’acceptation

Le Sprint est terminable lorsque :

- chaque modification répond à un critère d’admission ;
- aucune décision artistique stabilisée n’est modifiée ;
- aucune contradiction interne recensée ne subsiste ;
- les tokens nécessaires au Sprint 009 possèdent une signification non ambiguë ;
- toute valeur non déductible est explicitement confiée au Sprint 009 au lieu d’être inventée ;
- les associations colorimétriques autorisées sont documentées et conformes aux exigences de contraste ;
- les conventions documentaires et techniques ne se contredisent plus ;
- les critères d’acceptation portent uniquement sur des éléments vérifiables au stade documentaire ;
- les statuts et documents de gouvernance reflètent l’état réel du projet ;
- l’audit ciblé ne révèle aucune dette bloquant l’implémentation ;
- le Product Owner prononce la validation finale.

## Hors périmètre de validation

La conformité du code du Sprint 009 ne peut pas constituer un critère du Sprint 008-r1, puisque cette implémentation n’existe pas encore.

## Verrouillage

Après validation finale, la révision reçoit un commit et un tag distincts.

Le tag `sprint-008` demeure immuable. La nouvelle référence portera le tag `sprint-008-r1`.
