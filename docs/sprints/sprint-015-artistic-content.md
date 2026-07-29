# Sprint 015 — Contenus artistiques

## Statut

**Validé par le Product Owner, fusionné dans `main` et définitivement clos sous la référence `sprint-015-r1`**

Le présent document constitue la référence contractuelle du Sprint 015. Toute évolution
ultérieure doit respecter `docs/GOVERNANCE.md`.

## 1. Objectif

Le Sprint 015 a pour objectif de concevoir et d'implémenter la consultation publique
d'un contenu artistique sur la route :

```text
/contenus/[contentSlug]
```

Il matérialise la responsabilité fonctionnelle
`V-PUB-05 — Contenu artistique`.

La page doit permettre de consulter un texte, une exposition, une installation, un
événement ou un ensemble artistique et de comprendre ses relations avec les œuvres
publiques concernées.

Le Sprint appartient à la catégorie des Sprints fonctionnels définie par
`docs/GOVERNANCE.md`.

## 2. Références normatives

Le Sprint applique exclusivement les décisions déjà validées dans :

- `docs/GOVERNANCE.md` ;
- `docs/specifications/functional-specification-v1.md` ;
- `docs/specifications/business-rules-v1.md` ;
- `docs/specifications/product-structure-v1.md` ;
- `docs/specifications/technical-architecture-v1.md` ;
- `docs/specifications/design-system-v1.md` ;
- `docs/sprints/sprint-010-application-shell.md` ;
- `docs/sprints/sprint-011-public-gallery.md` ;
- `docs/sprints/sprint-012-artwork-details.md` ;
- `PROJECT_STATE.md`.

Le présent contrat applique ces références sans les remplacer et sans créer
implicitement une nouvelle règle métier.

## 3. Décisions héritées

Les décisions suivantes sont déjà verrouillées :

- `V-PUB-05` présente un texte, une exposition, une installation, un événement ou un
  ensemble et ses relations avec les œuvres ;
- la route publique est `/contenus/[contentSlug]` ;
- les contenus artistiques sont des destinations contextuelles et ne figurent pas dans
  la navigation principale ;
- les œuvres restent principalement accessibles par leurs collections ;
- une relation artistique ou contextuelle ne peut pas être présentée comme établie si
  elle n'a pas été définie par un acteur autorisé ;
- l'indisponibilité d'un contenu contextuel ne doit pas empêcher la consultation des
  autres informations publiques disponibles sur une œuvre ;
- le slug public d'un contenu artistique est figé dès sa première publication ;
- les routes publiques sont rendues côté serveur par défaut ;
- le Design System existant constitue l'unique source des primitives, tokens et règles
  visuelles applicables ;
- `V-PUB-06 — Évolution dans le temps` reste une responsabilité distincte.

## 4. Responsabilité fonctionnelle

La page d'un contenu artistique doit :

- identifier clairement le contenu consulté ;
- indiquer sa nature ;
- présenter les informations éditoriales disponibles ;
- présenter uniquement les métadonnées applicables au contenu ;
- rendre perceptibles ses relations validées avec les œuvres ;
- permettre d'accéder aux fiches publiques des œuvres associées par leurs URL
  canoniques ;
- conserver l'accès aux informations essentielles lorsqu'un média est indisponible ;
- produire un état absent pour un slug inconnu.

La page ne doit pas :

- devenir une page de chronologie ;
- devenir une page d'acquisition ;
- simuler une capacité de gestion ou d'administration ;
- présenter une relation non définie dans les données ;
- ajouter le contenu artistique à la navigation principale.

## 5. Modèle local temporaire

Le Sprint doit utiliser des données locales, typées, stables pendant le Sprint et
explicitement temporaires.

Le modèle comprend :

- un slug public ;
- un type de contenu ;
- un titre ;
- un résumé ;
- un corps éditorial ;
- un média local facultatif ;
- une date ou une période facultative ;
- un lieu facultatif ;
- les références des œuvres associées.

Les types reconnus par le modèle sont :

- `text` ;
- `exhibition` ;
- `installation` ;
- `event` ;
- `ensemble`.

Ce modèle local ne définit ni le futur schéma de persistance, ni les contrats d'une API,
ni l'interface de gestion future.

Les contenus du Sprint 015 sont locaux, fictifs et explicitement non officiels. Ils
permettent de valider la responsabilité fonctionnelle de `V-PUB-05` sans représenter
l'histoire réelle de David.

Leur contenu éditorial pourra être remplacé ou ajusté dans un Sprint autorisé. Seul le
slug public est soumis à la règle d'immutabilité à compter de sa première publication.
Les données de démonstration restent stables pendant le Sprint sans devenir un corpus
définitif.

## 6. Données de démonstration

Les contenus de démonstration doivent :

- être clairement fictifs ;
- ne contenir aucun fait présenté comme officiel concernant David ;
- être suffisamment variés pour exercer la page et ses relations ;
- référencer uniquement les œuvres fictives déjà présentes dans le module privé
  `gallery` ;
- ne créer ni nouvelle collection ni nouvelle œuvre ;
- ne pas être confondus avec les futurs contenus officiels d'AZUREUM.

Le jeu de démonstration comprend exactement trois contenus fictifs de trois types
différents :

- un texte ;
- une exposition ;
- une installation.

Les types `event` et `ensemble` restent reconnus par le modèle sans donnée de
démonstration dans ce Sprint.

Chacun des trois contenus possède au moins une œuvre associée. Le corpus éditorial exact
est accepté par le Product Owner avant l'enregistrement de l'incrément qui l'introduit.

## 7. Relations avec les œuvres

Les relations sont explicites, déterministes et plusieurs-à-plusieurs :

- une œuvre peut être associée à plusieurs contenus ;
- un contenu peut être associé à plusieurs œuvres ;
- le modèle autorise un contenu sans œuvre associée ;
- chaque contenu de démonstration possède néanmoins au moins une œuvre associée.

Chaque relation doit :

- identifier une œuvre existante ;
- conserver le contexte de sa collection d'origine ;
- produire un lien vers :

```text
/collections/[collectionSlug]/oeuvres/[artworkSlug]
```

- ne jamais dupliquer ni muter les données sources du module `gallery`.

Aucune relation ne peut être déduite d'un titre, d'une collection, d'une date ou d'un
média.

## 8. Navigation et accès

`/contenus/[contentSlug]` reste absent du Header public.

L'accès aux contenus est contextuel et s'effectue depuis les fiches des œuvres
associées.

Chaque fiche d'œuvre concernée présente une section consacrée aux contenus associés :

- chaque contenu associé possède un lien vers `/contenus/[contentSlug]` ;
- la section est absente lorsqu'aucun contenu n'est associé ;
- cette projection ne modifie ni ne duplique la source canonique des œuvres ;
- aucune relation non déclarée dans le module `artistic-content` n'est affichée.

Le Sprint ne crée :

- aucune page d'index `/contenus` ;
- aucune nouvelle entrée dans le Header ;
- aucun moteur de recherche ;
- aucun filtre ;
- aucune navigation chronologique globale.

## 9. Médias

Un média de contenu artistique est facultatif et la page doit rester complète sans
média.

Lorsqu'un média est utilisé :

- il doit être local, existant et explicitement déclaré dans les données du contenu ;
- il utilise `ArtworkImage` conformément à son contrat ;
- son alternative textuelle correspond à sa fonction ;
- son indisponibilité utilise le comportement de fallback existant ;
- aucune nouvelle primitive média n'est créée.

Le Sprint ne crée aucun nouvel actif. Un média d'œuvre existant ne peut pas être présenté
automatiquement comme le média officiel d'un contenu. Sa réutilisation doit illustrer
légitimement le contenu fictif et être explicitement définie dans les données.

## 10. Architecture

Le domaine des contenus artistiques reste privé à l'application.

L'architecture retenue est :

```text
src/modules/artistic-content/
```

Ce module est responsable de :

- ses types temporaires ;
- ses données de démonstration ;
- ses fonctions de résolution ;
- les requêtes permettant de retrouver les contenus associés à une œuvre ;
- ses composants métier privés lorsqu'une responsabilité locale répétée est démontrée.

Il peut consommer les contrats nécessaires du module privé `gallery`, mais ne doit ni
copier, ni muter, ni réexporter généralement ses données.

Les relations référencent les identifiants des œuvres sans les redéfinir. L'architecture
ne doit introduire aucune dépendance circulaire entre `artistic-content` et `gallery`.

La page reste un Server Component. Une frontière cliente n'est autorisée que si une
interaction contractuelle la rend strictement nécessaire.

## 11. Route et état absent

La route dynamique est :

```text
/contenus/[contentSlug]
```

Un slug inconnu produit `notFound()`.

Aucun contenu de remplacement, aucune redirection fictive et aucune sélection par
défaut ne sont autorisés.

## 12. Design System

L'implémentation utilise exclusivement les composants et tokens existants du Design
System.

Le Sprint n'introduit :

- aucun nouveau composant public ;
- aucun nouveau token ;
- aucune nouvelle variante ;
- aucune valeur visuelle locale lorsqu'un token applicable existe ;
- aucune nouvelle décision de direction artistique ;
- aucune animation ou interaction décorative.

## 13. Responsive et accessibilité

La page doit être utilisable sur :

- mobile : `390 × 844` ;
- tablette : `768 × 1024` ;
- bureau : `1440 × 900` ;
- reflow équivalent à un zoom navigateur de 200 %.

Elle doit notamment garantir :

- un unique `h1` ;
- une hiérarchie de titres cohérente ;
- des landmarks conformes ;
- un ordre de lecture naturel ;
- une navigation clavier complète ;
- un focus visible ;
- des noms accessibles cohérents ;
- des alternatives adaptées aux médias ;
- aucun débordement horizontal ;
- aucune information dépendant uniquement de la couleur ;
- aucune erreur ou aucun avertissement navigateur inattendu.

## 14. Périmètre

Le Sprint comprend uniquement :

- la validation et le verrouillage du présent contrat ;
- un modèle privé et temporaire de contenus artistiques ;
- un jeu local de trois contenus fictifs validé par le Product Owner ;
- des relations explicites avec les œuvres fictives existantes ;
- la route `/contenus/[contentSlug]` ;
- les points d'accès contextuels validés ;
- les états absents ;
- les tests unitaires, contractuels et end-to-end nécessaires ;
- les contrôles responsive, accessibilité et non-régression ;
- la synchronisation documentaire et le verrouillage du Sprint.

Une date ou une période contextualise uniquement le contenu consulté. Le Sprint ne crée
ni classement chronologique global, ni navigation temporelle, ni anticipation de
`V-PUB-06`.

## 15. Hors périmètre

Sont explicitement exclus :

- `V-PUB-06` et toute chronologie globale ;
- une page d'index `/contenus` ;
- les contenus artistiques officiels de David ;
- toute base de données ou persistance ;
- Supabase ;
- toute API ;
- l'authentification ;
- les espaces privés ;
- la gestion, création ou publication de contenus ;
- l'acquisition, le paiement et les commandes ;
- les informations commerciales ;
- la recherche, les filtres et le tri ;
- les nouveaux médias non validés ;
- toute modification des œuvres ou collections existantes ;
- toute modification du shell ou de la navigation principale ;
- toute extension du Design System ;
- toute nouvelle direction artistique ;
- le SEO éditorial avancé ;
- toute anticipation d'un Sprint ultérieur.

## 16. Fichiers et zones autorisés

Les zones susceptibles d'être concernées sont limitées à :

```text
docs/sprints/sprint-015-artistic-content.md
src/modules/artistic-content/
src/app/(public)/contenus/[contentSlug]/
src/app/(public)/collections/[collectionSlug]/oeuvres/[artworkSlug]/
src/test/
e2e/
PROJECT_STATE.md
CHANGELOG.md
```

La fiche d'œuvre ne peut être modifiée que pour projeter les contenus explicitement
associés et leurs liens. Le module `gallery`, les données des œuvres, les collections, le
shell, la navigation principale et le Design System restent inchangés.

Tout autre fichier exige une justification fondée sur une non-conformité démontrée et
une autorisation conforme à la gouvernance.

## 17. Livrables

Le Sprint doit produire :

- le présent contrat validé et verrouillé ;
- le module privé temporaire des contenus artistiques ;
- le jeu de démonstration validé ;
- la page publique dynamique conforme à `V-PUB-05` ;
- les relations et accès contextuels validés ;
- les tests ciblés et de non-régression ;
- la documentation de clôture synchronisée.

## 18. Critères d'acceptation

Le Sprint est acceptable si :

- la route officielle fonctionne pour chaque contenu de démonstration ;
- un slug inconnu produit `notFound()` ;
- chaque page identifie clairement le contenu et sa nature ;
- seules les métadonnées applicables sont rendues ;
- aucun champ facultatif vide n'est rendu ;
- les relations affichées correspondent exactement aux données ;
- chaque lien d'œuvre utilise son URL canonique ;
- chaque fiche d'œuvre expose uniquement ses contenus explicitement associés ;
- aucune section de contenus associés n'est rendue pour une œuvre sans relation ;
- aucune donnée du module `gallery` n'est copiée ou mutée ;
- aucune dépendance circulaire n'est introduite entre `gallery` et
  `artistic-content` ;
- aucun contenu n'apparaît dans la navigation principale ;
- la page reste un Server Component ;
- le Design System existant est respecté ;
- les médias indisponibles ne masquent pas les informations essentielles ;
- la page est conforme aux exigences responsive et d'accessibilité ;
- aucune fonctionnalité hors périmètre n'est introduite ;
- les contrôles obligatoires sont conformes.

## 19. Validations obligatoires

Avant la clôture :

- Prettier ;
- ESLint ;
- TypeScript ;
- Vitest ;
- build Next.js ;
- Playwright ;
- contrôle des trois viewports ;
- contrôle du reflow équivalent à 200 % ;
- contrôle du clavier, du focus, des landmarks et de la hiérarchie des titres ;
- contrôle des erreurs et avertissements navigateur ;
- contrôle des frontières d'import entre `gallery`, `artistic-content` et les routes
  publiques ;
- `git diff --check` ;
- `pnpm audit`, avec restitution exacte de toute exception documentée qui subsiste ;
- audit de conformité entre contrat, implémentation, tests, `PROJECT_STATE.md`,
  `CHANGELOG.md` et historique Git.

## 20. Arbitrages Product Owner

Les arbitrages fonctionnels nécessaires au contrat sont validés :

- le modèle reconnaît les cinq types canoniques ;
- la démonstration comprend exactement un texte, une exposition et une installation ;
- les champs obligatoires sont le slug, le type, le titre, le résumé, le contenu
  éditorial et la liste des œuvres associées ;
- le média, la date ou période et le lieu sont facultatifs ;
- le type reste visible et compréhensible dans la page ;
- aucun champ facultatif vide n'est rendu ;
- les relations entre contenus et œuvres sont plusieurs-à-plusieurs et toujours
  explicites ;
- le modèle autorise zéro à plusieurs œuvres associées, mais chaque contenu fictif en
  possède au moins une ;
- seules les six œuvres fictives existantes peuvent être référencées ;
- les contenus sont accessibles depuis les fiches des œuvres associées ;
- les œuvres sont accessibles depuis les contenus par leur URL canonique ;
- aucun nouvel actif média n'est créé ;
- un slug inconnu produit `notFound()` ;
- le module privé propriétaire est `src/modules/artistic-content/` ;
- aucune chronologie globale n'est anticipée.

Les textes fictifs exacts et leurs relations concrètes sont acceptés par le Product
Owner lors de la revue de l'incrément des données. Cette acceptation ne crée aucune
nouvelle décision fonctionnelle et ne transforme pas les contenus en corpus officiel.

## 21. Exécution incrémentale proposée

Le découpage suivant constitue une proposition soumise à validation Product Owner.

### Incrément 1 — Contrat

**Objectif**

Réaliser la revue finale, valider et verrouiller le contrat, puis préparer le Sprint
sans modifier l'application.

**Commit attendu**

```text
docs(sprint-015): lock artistic content contract
```

### Incrément 2 — Modèle et données temporaires

**Objectif**

Implémenter les types, les contenus fictifs stables pendant le Sprint, leurs relations
et leurs fonctions de résolution.

**Commit attendu**

```text
feat(content): add artistic content model and demo data
```

### Incrément 3 — Consultation d'un contenu

**Objectif**

Matérialiser `/contenus/[contentSlug]`, son état absent et sa présentation sémantique.

**Commit attendu**

```text
feat(content): implement public artistic content page
```

### Incrément 4 — Relations et accès contextuels

**Objectif**

Présenter les œuvres associées et ajouter les points d'accès contextuels validés sans
modifier la navigation principale.

**Commit attendu**

```text
feat(content): connect artistic content and artworks
```

### Incrément 5 — Responsive et accessibilité

**Objectif**

Valider les viewports, le reflow, le clavier, le focus, la sémantique et l'absence de
débordement ; corriger uniquement les non-conformités démontrées.

**Commit attendu**

```text
test(content): validate responsive accessible presentation
```

### Incrément 6 — Audit final et clôture

**Objectif**

Exécuter les contrôles complets, vérifier la conformité transversale, synchroniser la
documentation et préparer le verrouillage du Sprint.

**Commit attendu**

```text
docs(sprint-015): prepare artistic content closure
```

## 22. Séquence de revue et de verrouillage

```text
Audit documentaire
→ Arbitrages Product Owner
→ Validation et verrouillage du contrat
→ Implémentation incrémentale
→ Revue et acceptation de chaque incrément
→ Audit final
→ Synchronisation documentaire
→ Validation Product Owner finale
→ Commits de clôture
→ Tag sprint-015
→ Pull Request
→ Fusion dans main
→ Vérification et nettoyage
```

## 23. État de clôture

Les six incréments contractuels sont implémentés et audités.

Les contrôles finaux sont conformes :

- Prettier ;
- ESLint ;
- TypeScript ;
- 12 fichiers Vitest et 105 tests ;
- build Next.js ;
- 52 tests Playwright ;
- contrôle des frontières d'import ;
- `git diff --check`.

L'audit final a également confirmé que les deux aperçus de collection visibles au
chargement de la page d'accueil doivent être préchargés. Cette correction minimale
supprime l'avertissement LCP observé en intégration continue sans modifier le rendu ni
le comportement fonctionnel.

`pnpm audit` restitue une vulnérabilité haute connue et temporairement acceptée :
`brace-expansion@1.1.16`, introduite transitivement dans l'outillage de développement
par `eslint → minimatch`. Cette exception est déjà documentée, n'est pas masquée et
aucune nouvelle vulnérabilité n'est constatée.

Le Sprint a été validé par le Product Owner. Le commit de clôture documentaire
`0b13359` a été enregistré et le tag `sprint-015` a été créé et poussé sur ce commit.

La correction LCP `f734ef7`, révélée par l'intégration continue après la création du tag,
a ensuite été fusionnée dans `main` par la Pull Request nº 14. Le commit de fusion
`6bb96be` constitue l'état fonctionnel corrigé. La branche locale et distante
`sprint-015-artistic-content` a été supprimée après vérification de la fusion.

Conformément à la gouvernance, le tag publié `sprint-015` reste inchangé et constitue la
référence historique antérieure à la correction. Le tag `sprint-015-r1`, créé et poussé
sur le commit de fusion `d43b8e2`, constitue la référence officielle corrigée du Sprint
015.
