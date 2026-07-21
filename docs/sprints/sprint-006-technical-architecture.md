# Sprint 006 — Architecture technique de la V1

## Statut

**Verrouillé**

## Objectif

Définir comment construire, déployer et exploiter techniquement AZUREUM V1 sans modifier les capacités fonctionnelles, les règles métier ni la structure produit déjà validées.

Le Sprint répond à la question suivante :

> **Comment construire techniquement AZUREUM V1 de manière fiable, sécurisée, vérifiable et maintenable ?**

## Références

- `docs/specifications/functional-specification-v1.md` — Sprint 003-r1 ;
- `docs/specifications/business-rules-v1.md` — Sprint 004-r1 ;
- `docs/specifications/product-structure-v1.md` — Sprint 005-r1 ;
- `docs/GOVERNANCE.md` ;
- `PROJECT_STATE.md`.

## Périmètre

Le Sprint couvre :

- le style architectural et le découpage applicatif ;
- le modèle conceptuel technique des entités et relations structurantes ;
- les technologies et services structurants ;
- l'exécution côté navigateur et côté serveur ;
- la persistance, les transactions et les migrations ;
- l'identification, l'autorisation et la protection des accès ;
- les paiements et autres intégrations externes ;
- le stockage et la diffusion des médias ;
- les traitements différés et événements externes ;
- les environnements, le déploiement et l'exploitation ;
- les sauvegardes, la restauration et l'observabilité ;
- la stratégie de tests et les contrôles de livraison ;
- la traçabilité des choix vers les Sprints 003-r1, 004-r1 et 005-r1.

## Règle directrice

Toute décision technique doit être motivée.

Lorsqu'il existe plusieurs solutions raisonnables, le livrable explique pourquoi la solution retenue est préférable pour AZUREUM V1. Lorsqu'une décision dépend d'une technologie ou d'un service tiers, elle est vérifiée dans sa documentation officielle actuelle avant d'être considérée comme validable.

Aucune décision de ce Sprint ne peut modifier une capacité du Sprint 003-r1, une règle métier du Sprint 004-r1 ou une décision de structure produit du Sprint 005-r1. Toute contradiction doit être soumise au Product Owner et ne peut être résolue implicitement.

## Livrables

- livrable principal : `docs/specifications/technical-architecture-v1.md` ;
- référence opérationnelle dérivée : `docs/QUICK_REFERENCE.md`.

La référence rapide facilite la consultation quotidienne sans se substituer aux spécifications souveraines.

## Hors périmètre

Le Sprint ne réalise pas :

- l'installation des technologies retenues ;
- la création du projet applicatif ;
- les migrations de base de données ;
- l'intégration d'un prestataire ;
- le code de production ;
- les composants d'interface ;
- un audit juridique, fiscal ou contractuel ;
- un audit de cybersécurité, un test d'intrusion ou une certification ;
- une évolution fonctionnelle, métier ou UX.

## Critères de clôture

Le Sprint est clôturable lorsque :

- l'architecture complète de la V1 est décrite ;
- chaque décision structurante est motivée ;
- le modèle conceptuel, les responsabilités des modules et la stratégie de rendu sont explicitement définis ;
- les faits dépendant de services tiers sont sourcés dans leur documentation officielle ;
- les décisions validées, architectures cibles sous réserve et réserves restant à fermer sont distinguées ;
- les invariants critiques disposent d'un mécanisme architectural explicite ;
- les flux d'acquisition, de paiement, de remise, d'authenticité et d'anomalie sont couverts ;
- l'accès acquéreur reste possible sans compte persistant obligatoire ;
- les rôles Artiste et Administrateur et leur cumul sont supportés ;
- les exigences de sécurité, confidentialité, accessibilité, performance, intégrité et traçabilité sont prises en compte ;
- les migrations, sauvegardes, restaurations, environnements, tests et déploiements sont définis ;
- la traçabilité vers les trois spécifications précédentes est complète ;
- la référence rapide permet de retrouver les décisions essentielles et leur source sans créer une source de vérité concurrente ;
- aucune décision étrangère au périmètre n'est introduite ;
- les réserves juridiques, fiscales ou contractuelles sont explicitement identifiées ;
- la revue finale et l'audit sont conformes ;
- le Product Owner valide le livrable.

## Validation finale

| Élément | Valeur |
|---|---|
| Statut du Sprint | Verrouillé |
| Décision du Product Owner | Validé |
| Date de validation | 2026-07-21 |
| Livrable principal | `docs/specifications/technical-architecture-v1.md` — Validé |
| Référence opérationnelle | `docs/QUICK_REFERENCE.md` — Validée |
