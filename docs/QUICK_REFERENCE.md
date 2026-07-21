# AZUREUM — Référence rapide

| Élément | Valeur |
|---|---|
| Finalité | Synthèse opérationnelle des décisions structurantes de la V1 |
| Statut | Validée avec le Sprint 006 |
| Public | Équipe produit, développement, tests et exploitation |
| Autorité | Aucune : les spécifications référencées demeurent souveraines |
| Dernière mise à jour | 2026-07-21 |

## Mode d'emploi

Ce document permet de retrouver rapidement une décision et sa source. Il ne remplace ni ne modifie les spécifications contractuelles.

En cas de doute, d'imprécision ou de contradiction :

1. consulter le document de référence indiqué ;
2. appliquer sa version validée ;
3. signaler l'écart au Product Owner ;
4. ne jamais résoudre implicitement la contradiction dans le code.

Les décisions techniques du Sprint 006 présentées ici synthétisent le document validé `technical-architecture-v1.md` sans s'y substituer.

## Références souveraines

| Question | Document de référence |
|---|---|
| Pourquoi AZUREUM existe-t-il ? | `docs/sprints/SPRINT_002_PRODUCT_VISION.md` |
| Que doit permettre la V1 ? | `docs/specifications/functional-specification-v1.md` — Sprint 003-r1 |
| Quelles règles gouvernent la V1 ? | `docs/specifications/business-rules-v1.md` — Sprint 004-r1 |
| Comment le produit est-il organisé et parcouru ? | `docs/specifications/product-structure-v1.md` — Sprint 005-r1 |
| Comment la V1 sera-t-elle construite techniquement ? | `docs/specifications/technical-architecture-v1.md` — Sprint 006 validé |
| Quel est l'état actuel du projet ? | `PROJECT_STATE.md` |
| Quelles règles de gouvernance s'appliquent ? | `docs/GOVERNANCE.md` |

## Produit

- AZUREUM est une galerie d'art numérique premium consacrée à David Prieur-Gélis.
- David demeure l'unique artiste, auteur, propriétaire initial et vendeur des œuvres dans la V1.
- La démarche artistique structure le produit ; l'acquisition s'y intègre sans devenir l'axe principal.
- AZUREUM n'est pas une marketplace multi-artistes.
- Les enchères sont hors périmètre de la V1.

## Identités, profils et rôles

| Notion | Résumé |
|---|---|
| Public | Consulte uniquement les informations et médias publiés. |
| Acquéreur | Accède légitimement au suivi de son acquisition sans compte persistant obligatoire. |
| Utilisateur interne | Personne disposant d'un accès aux espaces privés. |
| Rôle Artiste | Autorise la gestion artistique ; ne désigne jamais l'auteur des œuvres. |
| Rôle Administrateur | Autorise la supervision et les interventions administratives. |

Un utilisateur peut cumuler les rôles Artiste et Administrateur. Cette attribution ne modifie jamais les qualités artistiques ou juridiques exclusivement attachées à David.

## Collections, œuvres et exemplaires

- Toute œuvre appartient à exactement une collection.
- Une œuvre peut comporter un ou plusieurs exemplaires physiques.
- Chaque exemplaire possède sa propre identité, disponibilité, réservation, authenticité et histoire.
- L'archivage conserve l'identité et l'historique de l'œuvre.
- La suppression définitive est exceptionnelle et réservée au rôle Administrateur.
- Une vente externe peut être enregistrée, mais reste distincte d'une acquisition conclue dans AZUREUM.

## Acquisition — cycle essentiel

```text
Intention
  ↓ acceptation explicite des conditions
Acquisition engagée + exemplaire réservé
  ├── paiement définitivement refusé, annulé, abandonné ou expiré
  │      ↓
  │   acquisition interrompue + fin de réservation
  │
  └── paiement confirmé
         ↓
      acquisition confirmée + exemplaire indisponible
         ↓
      préparation et remise
         ↓
      authenticité applicable remise
         ↓
      aucune anomalie ou obligation ouverte
         ↓
      acquisition achevée
```

Règles à retenir :

- les conditions sont connues puis figées à l'engagement ;
- un exemplaire ne peut avoir qu'une réservation active ;
- une acquisition interrompue ne reprend pas : une nouvelle tentative crée une nouvelle acquisition ;
- un résultat de paiement tardif ne confirme rien automatiquement ;
- une annulation après confirmation est exceptionnelle, administrative et terminale ;
- la remise doit reposer sur un élément de constatation vérifiable ;
- une anomalie ouverte empêche l'achèvement automatique dans les conditions définies par les règles métier.

## Réception et anomalies

- La remise constatée, la réception confirmée et l'état déclaré à réception sont des faits distincts.
- La déclaration initiale de l'acquéreur est conservée sans réécriture.
- Les compléments sont ajoutés à l'historique.
- Une photographie est facultative et recommandée en cas d'anomalie.
- L'Administrateur clôt l'instruction ; il ne réécrit pas la déclaration initiale.
- Une nouvelle situation après clôture crée une nouvelle anomalie liée, pas une réouverture silencieuse.

## Structure du produit

| Code | Espace | Finalité |
|---|---|---|
| `ESP-PUB` | Galerie publique | Découvrir David, ses collections, œuvres et contextes. |
| `ESP-ACQ` | Acquisition | Examiner les conditions et engager une acquisition. |
| `ESP-SUI` | Suivi | Suivre acquisition, remise, authenticité, réception et anomalies. |
| `ESP-DAV` | Gestion artistique | Gérer collections, œuvres, exemplaires, conditions et authenticité. |
| `ESP-ADM` | Administration | Superviser les acquisitions, anomalies et interventions exceptionnelles. |

- La découverte publique est éditoriale et structurée par les collections.
- Aucune recherche ni aucun filtrage ne sont exigés en V1.
- Les espaces privés ne participent pas à la navigation publique.

## Architecture technique de référence — Sprint 006 validé

| Domaine | Orientation actuelle |
|---|---|
| Application | Next.js App Router avec TypeScript |
| Style | Monolithe modulaire |
| Animation | CSS moderne et Motion ; aucune technologie 3D retenue |
| Hébergement | Vercel |
| Base de données | PostgreSQL géré par Supabase |
| Identification interne | Supabase Auth |
| Fichiers | Supabase Storage avec séparation public/privé et quarantaine obligatoire |
| Paiement | Stripe Connect avec paiements directs sur le compte connecté de David, sous réserve externe |
| E-mails transactionnels | Brevo derrière un adaptateur AZUREUM, sous réserve contractuelle |
| CI | GitHub Actions |
| Tests unitaires | Vitest |
| Tests de bout en bout | Playwright |
| Traitements différés | Boîte de sortie persistante exécutée par tâche planifiée |

Principes techniques essentiels :

- Server Components par défaut ; Client Components uniquement lorsque nécessaires ;
- CSS pour les effets simples et Motion pour les animations coordonnées réellement nécessaires ;
- préférence de réduction des mouvements respectée et aucune information dépendante d'une animation ;
- aucun moteur WebGL ou 3D dans le socle de la V1 ;
- rendu hybride entre contenus prérendus, cache invalidable, données dynamiques et streaming ;
- invariants concurrents garantis par transactions et contraintes PostgreSQL ;
- aucune clé administrative ni aucun secret dans le navigateur ou Git ;
- RLS et contrôles serveur appliqués en défense en profondeur ;
- événements externes authentifiés selon les capacités du fournisseur, dédupliqués, idempotents et indépendants de leur ordre ;
- migrations et politiques d'accès versionnées dans le dépôt ;
- sauvegardes séparées pour PostgreSQL et les objets Storage ;
- originaux limités à 50 Mo et formats d'image limités à JPEG, PNG, WebP et AVIF ;
- dépôts utilisateurs contrôlés en quarantaine avant leur destination définitive ;
- remplacement des fichiers par version, sans écrasement silencieux ;
- copie des fichiers irremplaçables hors du stockage Supabase principal ;
- environnements local, validation et production strictement isolés.

## Décisions techniques encore ouvertes

| Sujet | Échéance |
|---|---|
| Configuration Stripe Connect et responsabilités financières | Avant implémentation du paiement |
| Conditions contractuelles de traitement des données par Brevo | Avant mise en service des e-mails |
| Conformité juridique et matrice définitive de conservation | Avant mise en exploitation |

## Objectifs d'exploitation retenus

| Catégorie | RPO cible | RTO cible |
|---|---:|---:|
| Données transactionnelles critiques | 1 heure maximum | 8 heures maximum |
| Médias et documents privés | 24 heures maximum | 24 heures maximum |
| Contenus publics reproductibles | Reconstruction depuis les sources préservées | Après reprise des services critiques |

- disponibilité interne cible : 99,5 % par mois ;
- cet objectif n'est pas une garantie contractuelle adressée aux utilisateurs ;
- les fichiers irremplaçables disposent d'une copie indépendante du stockage principal ;
- Supabase PITR ou un dispositif équivalent est nécessaire pour respecter le RPO transactionnel ;
- les capacités de restauration sont prouvées par des exercices, pas seulement par l'existence d'une sauvegarde.

## Règle de développement

Avant d'implémenter un comportement :

1. identifier la capacité ou l'exigence fonctionnelle concernée ;
2. retrouver les règles métier et invariants applicables ;
3. vérifier l'espace, la vue et le parcours concernés ;
4. appliquer la décision architecturale correspondante ;
5. écrire les tests qui prouvent le respect de ces contrats.

Le code applique la documentation validée. Il ne devient pas une source parallèle de décisions produit.
