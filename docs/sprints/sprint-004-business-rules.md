# Sprint 004 — Règles métier de la V1

## Statut

🔒 Verrouillé

---

# 1. Objectif

Le Sprint 004 a pour objectif de formaliser les règles métier qui gouvernent le fonctionnement d'AZUREUM V1.

Son livrable principal est la spécification métier de la V1. Celle-ci décrit les règles applicables aux œuvres, aux acquisitions, au cycle de vie, à l'authenticité, aux responsabilités et aux invariants du domaine.

Le Sprint 004 ne définit ni architecture technique, ni modèle de données, ni choix d'implémentation.

---

# 2. Périmètre

Le Sprint couvre exclusivement la formalisation des règles métier de la première version d'AZUREUM.

Il complète le cahier des charges fonctionnel validé dans sa révision `sprint-003-r1` sans en modifier le périmètre.

---

# 3. Livrables

Le Sprint produit les documents suivants :

- `docs/specifications/business-rules-v1.md`
- `docs/sprints/sprint-004-business-rules.md`

Le document `business-rules-v1.md` constitue la référence officielle des règles métier de la V1.

---

# 4. Hors périmètre

Le Sprint 004 ne couvre pas :

- l'architecture logicielle ;
- le modèle de données ;
- les choix technologiques ;
- la conception de l'interface utilisateur ;
- le développement ;
- les tests techniques.

Ces éléments seront traités dans les sprints ultérieurs.

---

# 5. Contraintes

Les règles métier doivent :

- être indépendantes de toute technologie ;
- être cohérentes avec la révision fonctionnelle `sprint-003-r1` ;
- être vérifiables ;
- rester exclusivement au niveau métier.

Le Sprint ne doit introduire aucune décision technique.

---

# 6. Critères d'acceptation

Le Sprint est considéré comme terminé lorsque :

- une spécification métier complète est produite ;
- les règles métier sont identifiées et structurées ;
- les invariants du domaine sont définis ;
- les responsabilités métier sont explicitées ;
- les situations anormales sont couvertes ;
- les critères d'acceptation de la spécification sont définis ;
- le Product Owner valide le document.

---

# 7. Validation

À l'issue du Sprint 004, AZUREUM dispose d'une référence unique décrivant les règles métier de la V1.

Cette spécification servira de base à la conception technique, au modèle de données, au développement, aux tests et aux futurs sprints.

Le Sprint est validé après approbation du Product Owner.

## Décision du Product Owner

Le 21 juillet 2026, le Product Owner a validé le contenu métier du Sprint 004 et déclaré le modèle métier de la V1 stabilisé.

Les règles `RM-LEG-01` à `RM-LEG-05` demeurent volontairement conditionnelles. Leur application effective reste subordonnée à une vérification juridique, fiscale et contractuelle adaptée avant toute mise en exploitation d'AZUREUM.

Cette réserve ne fait pas obstacle au verrouillage documentaire du Sprint 004 ni à l'ouverture du Sprint 005.

| Élément | Valeur |
|---|---|
| Statut documentaire du livrable | Validé |
| Statut du Sprint | Verrouillé |
| Validation métier | Prononcée par le Product Owner |
| Réserve acceptée | Vérification de `RM-LEG-01` à `RM-LEG-05` avant mise en exploitation |
| Date de validation | 21 juillet 2026 |
| Commit de clôture | `13be024` |
| Tag Git | `sprint-004` |

## Révision contrôlée `sprint-004-r1`

Le 21 juillet 2026, le Product Owner a autorisé une révision contrôlée et limitée du modèle métier afin d'intégrer :

- la définition des collections ;
- l'obligation pour chaque œuvre d'appartenir à exactement une collection ;
- l'archivage distinct de la suppression définitive ;
- la suppression définitive exceptionnelle réservée au rôle Administrateur ;
- la distinction entre l'identité artistique de David, les utilisateurs, les rôles et les responsabilités opérationnelles ;
- le cumul possible des rôles Artiste et Administrateur.

Cette révision ne modifie aucun autre domaine métier du Sprint 004.

| Élément | Valeur |
|---|---|
| Statut de la révision | Validée par le Product Owner |
| Référence précédente | `sprint-004` |
| Commit de révision | À compléter |
| Tag de révision | `sprint-004-r1` |
| Date de validation | 21 juillet 2026 |
