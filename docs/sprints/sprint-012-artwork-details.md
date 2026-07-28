# Sprint 012 — Consultation enrichie d'une œuvre

## Statut

**Implémenté et audité — validation Product Owner et verrouillage Git en attente**

## 1. Objectif

Le Sprint 012 a pour objectif d'enrichir la fiche publique d'une œuvre afin de présenter les informations descriptives nécessaires à sa compréhension artistique.

Il matérialise exclusivement :

- l'enrichissement du modèle local des œuvres de démonstration ;
- la présentation du contexte artistique d'une œuvre ;
- la présentation de ses caractéristiques matérielles ;
- la conservation des mécanismes de navigation introduits par le Sprint 011.

Le Sprint applique les responsabilités déjà validées relatives à la consultation publique des œuvres. Il n'introduit ni acquisition, ni espace membre, ni persistance.

Les informations ajoutées demeurent exclusivement issues du jeu local de démonstration. Elles sont destinées à valider la structure de la fiche publique, la hiérarchie de l'information, le responsive et l'accessibilité. Elles ne constituent ni des données éditoriales définitives, ni un modèle de persistance.

Aucune modification de `src` ne peut commencer avant la validation et le verrouillage du présent contrat.


## 2. Périmètre

Le Sprint couvre exclusivement :

- le modèle local des œuvres de démonstration déjà introduit par le Sprint 011 ;
- l'enrichissement des informations descriptives de chaque œuvre ;
- la présentation publique enrichie d'une œuvre ;
- l'affichage de son contexte artistique ;
- l'affichage de ses caractéristiques matérielles ;
- la conservation de la navigation vers la collection d'origine ;
- l'exploitation exclusive des données locales de démonstration ;
- les adaptations nécessaires des tests unitaires, contractuels et des routes publiques ;
- la documentation nécessaire à la validation du présent Sprint.

Le Sprint complète la fiche publique d'une œuvre sans modifier les responsabilités déjà établies pour les collections, la navigation ou le shell applicatif.

Il ne modifie ni les routes publiques créées lors des Sprints précédents, ni l'organisation générale de la galerie publique.

## 3. Références normatives

Le présent contrat applique :

- `docs/specifications/functional-specification-v1.md` ;
- `docs/specifications/business-rules-v1.md` ;
- `docs/specifications/product-structure-v1.md` ;
- `docs/specifications/technical-architecture-v1.md` ;
- `docs/specifications/design-system-v1.md` ;
- `docs/sprints/sprint-011-public-gallery.md`.

Les références fonctionnelles, métiers, techniques et de présentation applicables à la consultation enrichie d'une œuvre seront précisées à partir des spécifications normatives validées.

En cas de divergence, les spécifications normatives prévalent sur les données de démonstration et sur l'implémentation.

## 4. Responsabilités fonctionnelles

### 4.1 Consultation enrichie d'une œuvre

La consultation d'une œuvre :

- conserve la présentation publique introduite lors du Sprint 011 ;
- présente une image principale de démonstration, son titre et son texte artistique ;
- enrichit cette présentation par des informations descriptives complémentaires ;
- identifie explicitement la collection d'origine de l'œuvre ;
- présente son année de réalisation de démonstration ;
- présente sa technique de démonstration ;
- présente son support de démonstration ;
- présente ses dimensions physiques de démonstration ;
- présente une description courte distincte du texte artistique ;
- conserve le lien de retour vers la collection d'origine ;
- n'affiche aucune information commerciale, tarifaire ou de disponibilité ;
- ne simule aucun parcours d'acquisition ;
- ne dépend d'aucune donnée persistante, API ou service externe.

Les informations descriptives demeurent exclusivement issues du jeu local de démonstration. Elles servent uniquement à valider la composition, la hiérarchie de lecture et la présentation publique de la fiche d'œuvre.

## 5. Données descriptives de démonstration

### 5.1 Nature

Les informations descriptives ajoutées aux œuvres :

- sont locales au dépôt ;
- sont lues sans appel réseau ;
- sont immuables pendant l'exécution ;
- complètent exclusivement le jeu de démonstration introduit au Sprint 011 ;
- ne dépendent d'aucune variable d'environnement ;
- ne dépendent ni de Supabase, ni d'une base de données, ni d'une API ;
- sont explicitement identifiées dans le code et les tests comme des données de démonstration ;
- peuvent être remplacées intégralement lors d'un Sprint ultérieur sans migration de données.

Les textes, années, techniques, supports et dimensions sont volontairement fictifs et ne constituent ni une information officielle concernant David, ni une description réelle d'une œuvre.

### 5.2 Structure descriptive

Chaque œuvre de démonstration possède désormais :

- un slug public ;
- le slug de son unique collection ;
- un titre ;
- une année de démonstration ;
- une technique de démonstration ;
- un support de démonstration ;
- des dimensions physiques de démonstration ;
- une description courte ;
- un texte artistique ;
- un média local de démonstration.

Les dimensions physiques comprennent :

- une largeur ;
- une hauteur ;
- une profondeur optionnelle.

L'orientation d'une œuvre demeure exclusivement portée par son média de démonstration et n'est pas dupliquée dans les informations descriptives.

Cette structure constitue une décision technique temporaire du Sprint. Elle ne définit ni le futur schéma PostgreSQL, ni les contrats d'API, ni le modèle éditorial définitif.

### 5.3 Cohérence

Les données descriptives garantissent que :

- chaque œuvre possède l'ensemble des informations prévues par le Sprint ;
- chaque œuvre appartient à exactement une collection ;
- les slugs restent inchangés ;
- les relations collection–œuvre restent inchangées ;
- les descriptions courtes sont distinctes des textes artistiques ;
- les dimensions physiques restent cohérentes avec le média associé ;
- aucune information commerciale n'est introduite ;
- aucune donnée descriptive n'est générée dynamiquement.

## 6. Présentation de la fiche d'œuvre

### 6.1 Principes

La fiche publique d'une œuvre :

- utilise le shell public existant ;
- reste une Server Component par défaut ;
- utilise exclusivement les primitives officielles du Design System ;
- privilégie les éléments HTML sémantiques ;
- conserve une hiérarchie de lecture claire ;
- ne crée aucune nouvelle primitive du Design System.

### 6.2 Composition

La fiche publique présente les informations dans un ordre stable et cohérent.

Elle affiche successivement :

- l'image principale de démonstration ;
- le titre de l'œuvre ;
- l'identification de la collection d'origine ;
- les informations descriptives de démonstration ;
- la description courte ;
- le texte artistique ;
- un lien explicite permettant de revenir à la collection.

Les informations descriptives comprennent :

- l'année ;
- la technique ;
- le support ;
- les dimensions physiques.

Les dimensions sont présentées sous une forme lisible et utilisent exclusivement les données du modèle local.

### 6.3 Contraintes de présentation

La fiche :

- conserve le ratio du média principal ;
- distingue clairement la description courte du texte artistique ;
- ne présente aucune information commerciale ;
- ne présente aucune disponibilité ;
- ne présente aucun prix ;
- ne présente aucun bouton d'acquisition ;
- ne simule aucune fonctionnalité future.


## 7. Responsive et accessibilité

L'implémentation est mobile-first et utilise exclusivement les points de rupture `DT-10`.

Elle garantit :

- une consultation confortable sur mobile, tablette et bureau ;
- la conservation du ratio des médias de démonstration ;
- l'absence de débordement horizontal ;
- une hiérarchie de lecture cohérente quelles que soient les dimensions de l'écran ;
- une utilisation à 200 % de zoom ;
- un ordre des titres conforme à la structure de la page ;
- un ordre de lecture indépendant de la seule composition visuelle ;
- des liens utilisables intégralement au clavier avec un focus visible ;
- une identification explicite de la collection d'origine ;
- une présentation lisible des informations descriptives ;
- une compréhension qui ne dépend ni de la couleur, ni du survol ;
- la disponibilité des informations essentielles lorsqu'un média est indisponible.

Les informations descriptives restent accessibles même lorsqu'une image ne peut être affichée.

La consultation d'une œuvre ne dépend d'aucune interaction JavaScript spécifique et reste pleinement exploitable avec le rendu serveur fourni par l'App Router.


## 8. Architecture et intégration

La logique propre à l'enrichissement de la fiche publique d'une œuvre reste isolée du shell applicatif et des primitives transversales.

L'implémentation :

- respecte les frontières `app`, `modules`, `shared` et `server` déjà documentées ;
- conserve le modèle local, les données de démonstration et les fonctions de résolution dans le domaine de la galerie ;
- réutilise les fonctions de résolution existantes sans modifier leurs responsabilités ;
- compose la fiche d'œuvre depuis l'App Router ;
- reste une Server Component par défaut ;
- n'introduit une frontière Client Component que si une API du navigateur ou un état interactif validé l'exige ;
- utilise exclusivement les primitives officielles du Design System ;
- n'ajoute aucune dépendance ;
- ne modifie ni `next.config`, ni les variables d'environnement ;
- n'introduit aucune communication réseau, aucune API, aucune Server Action et aucune persistance.

Les nouvelles informations descriptives sont exclusivement lues depuis le jeu local de démonstration enrichi lors du présent Sprint.

Aucune logique commerciale, éditoriale ou de gestion des œuvres n'est introduite dans cette implémentation.

## 9. États traités

Le Sprint traite exclusivement :

- la consultation d'une œuvre enrichie issue du jeu de démonstration ;
- l'affichage d'une œuvre possédant l'ensemble de ses informations descriptives ;
- une œuvre dont les dimensions ne comportent pas de profondeur ;
- une œuvre dont les dimensions comportent une profondeur ;
- une route dynamique inconnue ;
- une combinaison incohérente entre `collectionSlug` et `artworkSlug` ;
- l'indisponibilité d'un média au moyen du comportement existant d'`ArtworkImage`.

Aucun état commercial, éditorial ou administratif n'est introduit.

Les données descriptives demeurent exclusivement issues du jeu local de démonstration.

## 10. Livrables

Les livrables sont :

- le présent contrat validé et verrouillé ;
- l'enrichissement du modèle local des œuvres de démonstration ;
- la fiche publique enrichie d'une œuvre ;
- l'affichage des informations descriptives prévues par le Sprint ;
- les adaptations strictement nécessaires des composants de la galerie ;
- les mises à jour des tests unitaires et contractuels ;
- les mises à jour des tests des routes publiques ;
- la mise à jour de `PROJECT_STATE.md` et de `CHANGELOG.md` à la clôture du Sprint ;
- le rapport d'audit final du Sprint.

## 11. Hors périmètre

Sont explicitement exclus :

- Supabase ;
- toute base de données ;
- toute persistance ;
- toute API ;
- toute Server Action ;
- toute authentification ;
- tout espace membre ;
- tout espace artiste ;
- tout espace administrateur ;
- le panier ;
- la commande ;
- le paiement ;
- les certificats ;
- les prix ;
- la disponibilité commerciale ;
- les conditions d'acquisition ;
- les recommandations d'œuvres ;
- les œuvres similaires ;
- la recherche ;
- le filtrage ;
- le tri ;
- la pagination ;
- les favoris ;
- le partage ;
- les commentaires ;
- le zoom ;
- la lightbox ;
- le téléchargement ;
- les données éditoriales définitives de David ;
- les médias définitifs ;
- toute extension du Design System ;
- toute nouvelle route publique ;
- toute anticipation du Sprint suivant.


## 12. Critères d'acceptation

Le Sprint est acceptable uniquement si :

### Données

- les œuvres possèdent l'ensemble des informations descriptives prévues ;
- les données restent locales, typées et immuables ;
- les relations collection–œuvre restent cohérentes ;
- aucune donnée commerciale n'est introduite.

### Consultation d'une œuvre

- la fiche présente le média principal ;
- le titre reste le titre principal de la page ;
- la collection d'origine est identifiable ;
- l'année est affichée ;
- la technique est affichée ;
- le support est affiché ;
- les dimensions sont affichées ;
- la description courte est distincte du texte artistique ;
- le lien de retour vers la collection reste fonctionnel.

### Qualité

- les routes invalides produisent un état absent ;
- les vues restent utilisables sur mobile, tablette et bureau ;
- aucune régression du Sprint 011 n'est détectée ;
- Prettier, ESLint, TypeScript, Vitest, le build Next.js et Playwright sont conformes ;
- `git diff --check` est conforme ;
- aucun `any` ou `as any` n'est ajouté ;
- aucun fichier hors périmètre n'est modifié sans justification.

## 13. Séquence d'implémentation

L'implémentation est menée par incréments validables :

1. contrat, branche et inventaire ;
2. enrichissement du modèle descriptif ;
3. consultation enrichie d'une œuvre ;
4. présentation des caractéristiques matérielles et consolidation de la fiche ;
5. responsive, accessibilité et validations transversales ;
6. audit final, synchronisation documentaire et verrouillage.

Aucun incrément ne commence avant validation de l'incrément précédent.

### 13.1 État d'exécution et audit final

Les Incréments 1 à 5 sont implémentés et audités. L'Incrément 6 a réalisé l'audit final,
la synchronisation documentaire et les validations de clôture.

Les corrections R1 issues de l'audit ont exclusivement :

- rétabli l'ordre contractuel de lecture de la fiche d'œuvre ;
- supprimé le déplacement visuel du lien de retour ;
- remplacé les valeurs visuelles locales par les tokens et points de rupture officiels ;
- exercé les dimensions avec et sans profondeur ;
- renforcé les tests sémantiques, responsive, de reflow et d'indisponibilité du média ;
- préchargé uniquement l'image principale des listes publiques concernées afin de
  supprimer l'avertissement LCP de Next.js, sans modifier leur rendu ni leur API.

Les validations finales de formatage, ESLint, TypeScript, Vitest, build Next.js,
Playwright et `git diff --check` sont conformes. Aucun bloqueur indispensable ne reste
ouvert.

Le contrat et le premier enrichissement du modèle descriptif apparaissent dans un même
commit historique. Cette observation de traçabilité ne modifie ni les décisions
initiales, ni le contenu normatif du présent contrat.

Le Sprint est prêt pour la validation du Product Owner. Le commit final, le tag, le
push, la Pull Request, la fusion et le nettoyage de branche ne sont pas encore
autorisés ni réalisés.



## 14. Séquence de revue et de verrouillage

```text
Rédaction du contrat
→ Revue Product Owner
→ Audit Codex
→ Corrections éventuelles
→ Validation Product Owner
→ Verrouillage documentaire
→ Commit du contrat
→ Création de la branche d'implémentation
→ Implémentation incrémentale
→ Revue de chaque incrément
→ Audit final
→ Mise à jour documentaire
→ Validation Product Owner
→ Commit de clôture
→ Tag du Sprint
→ Pull Request
→ Fusion dans main
→ Nettoyage de la branche
```

Le Sprint ne peut être déclaré terminé que si :

- le contrat correspond à l'implémentation ;
- tous les critères d'acceptation sont satisfaits ;
- les données de démonstration restent clairement séparées de toute future persistance ;
- aucun bloqueur indispensable ne reste ouvert ;
- les exceptions connues sont explicitement documentées ;
- le dépôt est propre ;
- le tag officiel est créé et poussé après validation finale.
