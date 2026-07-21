# État du projet AZUREUM

## Phase actuelle

Fondation documentaire et conception produit.

## Sprint actif

Révision documentaire du Sprint 005 — `sprint-005-r1` : **Validée par le Product Owner ; verrouillage Git en attente**.

Le verrouillage Git initial du Sprint 005 et le tag `sprint-005` sont conservés dans l'historique. Ils ont été réalisés avant la validation finale du Product Owner et ne constituent donc pas la ratification de la version corrigée.

Le livrable `docs/specifications/product-structure-v1.md` est **Validé** dans le cadre de cette révision.

Le Sprint 004 — Règles métier de la V1 est validé et verrouillé. Sa révision contrôlée `sprint-004-r1`, limitée aux collections, à l'archivage, à la suppression exceptionnelle et au modèle d'autorisations, est validée par le Product Owner.

Le Sprint 003 — Cahier des charges fonctionnel V1 a été validé puis verrouillé le 20 juillet 2026. Son historique initial reste conservé sous le tag `sprint-003`.

La révision contrôlée du cahier des charges intégrant la déclaration d'état à réception et le signalement d'anomalie dans le périmètre fonctionnel de la V1 est validée. Son tag de validation est `sprint-003-r1`.

Le livrable officiel demeure `docs/specifications/functional-specification-v1.md`.

La référence métier officielle de la V1 est `docs/specifications/business-rules-v1.md`.

## Produit

AZUREUM est une galerie d'art numérique premium consacrée durablement à David Prieur-Gélis.

La démarche artistique de David structure prioritairement le produit. L'acquisition des œuvres s'intègre à l'expérience sans la définir.

## V1 fonctionnelle

Le périmètre fonctionnel de la V1 est validé dans `docs/specifications/functional-specification-v1.md`, qui en constitue l'unique référence fonctionnelle.

## V2 envisagée

- moteur d'enchères inspiré du fonctionnement d'eBay ;
- offres manuelles ;
- enchère maximale automatisée ;
- prolongation anti-snipe ;
- historique des offres ;
- notifications ;
- délai de paiement contrôlé.

## Décisions validées

- reconstruction complète depuis une base blanche ;
- aucun ancien code réutilisé automatiquement ;
- aucune technologie installée avant validation de l'architecture ;
- les enchères sont hors périmètre de la V1 ;
- un seul Sprint peut être actif à la fois ;
- aucune implémentation avant validation des contrats correspondants ;
- le Sprint 001 est verrouillé ;
- la vision produit du Sprint 002 est validée ;
- le cahier des charges fonctionnel V1 du Sprint 003 a été validé dans sa version initiale ;
- le Sprint 003 est verrouillé ;
- la révision contrôlée `sprint-003-r1` est validée par le Product Owner ;
- la déclaration d'état à réception et le signalement d'anomalie font partie du périmètre fonctionnel de la V1 ;
- David Prieur-Gélis est l'artiste permanent et le sujet de la vision d'AZUREUM ;
- la fidélité à sa démarche artistique prime sur l'optimisation commerciale.
- le contenu métier du Sprint 004 est validé et son modèle métier est stabilisé ;
- les règles conditionnelles `RM-LEG-01` à `RM-LEG-05` devront faire l'objet d'une vérification juridique, fiscale et contractuelle adaptée avant toute mise en exploitation d'AZUREUM.
- toute œuvre appartient à exactement une collection ;
- l'archivage d'une œuvre ne supprime ni son identité ni son historique ;
- la suppression définitive d'une œuvre est exceptionnelle et relève du rôle Administrateur ;
- les rôles Artiste et Administrateur portent les responsabilités opérationnelles et peuvent être cumulés par un même utilisateur ;
- l'identité artistique, la qualité d'auteur, la propriété initiale et la qualité de vendeur demeurent exclusivement attachées à David Prieur-Gélis.
- la structure fonctionnelle et les parcours de la V1 sont validés dans le cadre de la révision `sprint-005-r1` ;
- la découverte publique est éditoriale et structurée par les collections, sans recherche ni filtrage exigés en V1 ;
- les espaces privés ne participent pas à la navigation publique.

## Implémentation

Aucune implémentation applicative.

## Base de données

Aucune base de données définie.

## Prochaine étape

Présenter le diff des métadonnées de clôture de la révision `sprint-005-r1`, puis attendre l'autorisation explicite du Product Owner avant le second commit, le tag, le push et la fusion.
