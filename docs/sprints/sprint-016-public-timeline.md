# Sprint 016 — Évolution dans le temps

## Statut

**Validé par le Product Owner et verrouillé avant implémentation**

Le présent document constitue la référence opérationnelle du Sprint 016. Toute
évolution ultérieure doit respecter `docs/GOVERNANCE.md`.

## 1. Objectif

Le Sprint 016 a pour objectif de concevoir et d'implémenter la consultation publique de
l'évolution du travail de David sur la route :

```text
/chronologie
```

Il matérialise la responsabilité fonctionnelle :

```text
V-PUB-06 — Évolution dans le temps
```

La page doit permettre de découvrir des étapes datées du travail de David et d'accéder
aux œuvres et contenus artistiques explicitement concernés.

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
- `docs/sprints/sprint-014-david-approach.md` ;
- `docs/sprints/sprint-015-artistic-content.md` ;
- `PROJECT_STATE.md`.

Le présent contrat applique ces références sans les remplacer et sans créer
implicitement une nouvelle règle métier.

## 3. Décisions héritées

Les décisions suivantes sont déjà verrouillées :

- `V-PUB-06` permet de découvrir les étapes datées du travail de David et d'accéder aux
  contenus concernés ;
- la route publique officielle est `/chronologie` ;
- le libellé de navigation est « Évolution dans le temps » ;
- cette destination occupe la troisième position de la navigation principale ;
- la continuité entre une œuvre et ses contextes comprend les repères temporels ;
- les collections restent l'accès public principal aux œuvres ;
- les relations artistiques et contextuelles doivent être explicites ;
- aucune relation ne peut être présentée comme établie si elle n'est pas définie par un
  acteur autorisé ;
- les routes publiques sont rendues côté serveur par défaut ;
- le Design System existant constitue l'unique source des primitives, tokens et règles
  visuelles applicables ;
- les contenus officiels de David ne sont pas disponibles dans le dépôt actuel.

## 4. Arbitrages Product Owner

Les arbitrages suivants sont retenus pour le Sprint :

- la chronologie repose sur des repères temporels explicites et dédiés ;
- aucune étape n'est déduite automatiquement des dates ou périodes des œuvres et
  contenus existants ;
- les étapes sont présentées de la plus ancienne à la plus récente ;
- une année est obligatoire pour chaque repère ;
- un libellé de période complémentaire est facultatif ;
- une étape peut référencer zéro à plusieurs œuvres et zéro à plusieurs contenus
  artistiques ;
- le modèle accepte un repère sans ressource associée ;
- chaque repère de démonstration possède néanmoins au moins une ressource liée ;
- la démonstration comprend exactement trois repères fictifs associés aux années 2023,
  2024 et 2025 ;
- les relations utilisent uniquement les œuvres et contenus fictifs déjà disponibles ;
- aucun nouveau média n'est créé ;
- un état vide neutre est défini pour l'absence de repère.

Ces décisions organisent la démonstration technique de `V-PUB-06`. Elles ne constituent
ni une chronologie réelle de David, ni une règle générale imposant qu'un repère officiel
possède une ressource associée.

## 5. Responsabilité fonctionnelle

La page `/chronologie` doit :

- identifier clairement la destination « Évolution dans le temps » ;
- expliquer que les données présentées sont fictives et temporaires ;
- présenter les repères dans un ordre chronologique déterministe ;
- rendre perceptibles l'année et l'identité de chaque étape ;
- présenter uniquement les informations disponibles ;
- permettre d'accéder aux œuvres explicitement associées par leur URL canonique ;
- permettre d'accéder aux contenus artistiques explicitement associés ;
- rester compréhensible sans média ;
- présenter un état vide neutre si aucun repère n'est disponible.

La page ne doit pas :

- devenir une biographie exhaustive de David ;
- inventer l'histoire artistique réelle de David ;
- déduire une chronologie depuis les années ou périodes des autres modules ;
- proposer une recherche, un filtre ou un classement contrôlé par l'utilisateur ;
- créer une navigation temporelle globale en dehors de `/chronologie` ;
- modifier les pages des œuvres ou des contenus artistiques.

## 6. Modèle local temporaire

Le Sprint utilise un modèle privé, local, typé, immuable et explicitement temporaire.

Un repère comprend :

- un identifiant local stable dans le jeu de démonstration ;
- une année ;
- un libellé de période facultatif ;
- un titre ;
- un résumé ;
- les références explicites des œuvres associées ;
- les références explicites des contenus artistiques associés.

L'identifiant local ne constitue ni un slug public, ni un futur identifiant de
persistance.

Le modèle :

- accepte zéro à plusieurs œuvres associées ;
- accepte zéro à plusieurs contenus artistiques associés ;
- n'impose pas qu'un repère possède une ressource ;
- ne définit ni schéma de base de données, ni API, ni contrat de persistance ;
- ne copie aucune donnée métier appartenant aux modules existants.

## 7. Données de démonstration

Le jeu de démonstration comprend exactement trois repères :

| Année | Nature | Ressources |
|---:|---|---|
| 2023 | repère fictif | au moins une œuvre ou un contenu existant |
| 2024 | repère fictif | au moins une œuvre ou un contenu existant |
| 2025 | repère fictif | au moins une œuvre ou un contenu existant |

Les intitulés, résumés et périodes :

- sont clairement fictifs ;
- ne contiennent aucun fait présenté comme officiel concernant David ;
- sont acceptés par le Product Owner avant l'enregistrement de l'incrément qui les
  introduit ;
- restent stables pendant le Sprint ;
- peuvent être remplacés ultérieurement par des contenus officiels dans un Sprint
  autorisé.

Les données ne créent :

- aucune œuvre ;
- aucune collection ;
- aucun contenu artistique ;
- aucun média ;
- aucune relation implicite.

## 8. Ordre chronologique

Les repères sont rendus de la plus ancienne à la plus récente.

L'ordre est produit par les fonctions du module propriétaire. La page ne possède pas sa
propre logique de tri.

Les données de démonstration utilisent des années distinctes. Le contrat n'introduit
donc aucune règle métier générale concernant l'ordre de plusieurs repères partageant la
même année.

Toute évolution future nécessitant plusieurs étapes dans une même année devra définir
explicitement leur précision temporelle ou leur ordre éditorial avant implémentation.

## 9. Relations avec les œuvres

Une référence d'œuvre comprend :

- le slug de sa collection ;
- le slug de l'œuvre.

Elle doit résoudre une œuvre existante dans le module privé `gallery`.

Chaque lien utilise l'URL canonique :

```text
/collections/[collectionSlug]/oeuvres/[artworkSlug]
```

Une référence inconnue constitue une incohérence des données de démonstration. Elle ne
doit produire ni lien incomplet, ni contenu de remplacement, ni relation déduite.

## 10. Relations avec les contenus artistiques

Une référence de contenu utilise le slug d'un contenu existant dans le module privé
`artistic-content`.

Chaque lien utilise :

```text
/contenus/[contentSlug]
```

Une référence inconnue constitue une incohérence des données de démonstration.

Le Sprint ne modifie pas les fiches d'œuvre ou de contenu afin d'ajouter un lien retour
vers la chronologie. Une éventuelle navigation inverse nécessite un arbitrage ultérieur.

## 11. Architecture

Le domaine chronologique reste privé à l'application.

L'architecture retenue est :

```text
src/modules/timeline/
├── types.ts
├── demo-data.ts
└── queries.ts
```

Le module `timeline` est responsable :

- de ses types temporaires ;
- de ses données de démonstration ;
- de leur ordre chronologique ;
- de ses fonctions de résolution ;
- de la résolution contrôlée des ressources associées.

Le module `timeline` ne dépend que des interfaces publiques internes exposées par
`gallery` et `artistic-content`.

Il ne doit :

- ni copier, ni muter, ni réexporter généralement leurs données ;
- introduire aucune dépendance de `gallery` ou `artistic-content` vers `timeline` ;
- introduire aucune dépendance circulaire ;
- devenir un export public général du projet.

La page `/chronologie` consomme le module propriétaire et reste un Server Component.
Aucune frontière cliente n'est prévue par le contrat.

## 12. État vide et incohérences

Si aucun repère n'est disponible, la page conserve :

- son `h1` ;
- son introduction ;
- un message neutre indiquant qu'aucun repère n'est disponible.

L'état vide :

- ne génère aucune étape fictive ;
- ne redirige pas ;
- ne produit aucun faux lien ;
- ne constitue pas un état d'erreur.

Une référence invalide vers une œuvre ou un contenu constitue au contraire une
incohérence interne qui doit être observable pendant le développement et couverte par
les tests contractuels.

## 13. Design System

L'implémentation utilise exclusivement les composants et tokens existants du Design
System.

Le Sprint n'introduit :

- aucun composant public ;
- aucun token ;
- aucune variante ;
- aucune valeur visuelle locale lorsqu'un token applicable existe ;
- aucune animation de timeline ;
- aucune ligne, aucun marqueur ou aucun ornement nécessitant une nouvelle règle
  visuelle ;
- aucune décision de direction artistique.

Un composant privé au module n'est autorisé que si une responsabilité locale répétée est
réellement démontrée.

## 14. Responsive et accessibilité

La page doit être utilisable sur :

- mobile : `390 × 844` ;
- tablette : `768 × 1024` ;
- bureau : `1440 × 900` ;
- reflow équivalent à un zoom navigateur de 200 %.

Elle doit garantir :

- un unique `h1` ;
- une hiérarchie de titres cohérente ;
- une structure chronologique compréhensible sémantiquement ;
- des landmarks conformes ;
- un ordre de lecture naturel ;
- une navigation clavier complète ;
- un focus visible ;
- des noms de liens cohérents ;
- une compréhension ne dépendant pas uniquement de la couleur ou de la position ;
- aucun débordement horizontal ;
- aucune erreur ou aucun avertissement navigateur inattendu ;
- le fonctionnement du skip link et du shell public existant.

## 15. Périmètre

Le Sprint comprend uniquement :

- la validation et le verrouillage du présent contrat ;
- le module privé temporaire `timeline` ;
- trois repères fictifs pour 2023, 2024 et 2025 ;
- leurs relations explicites avec les œuvres et contenus existants ;
- le remplacement de l'état structurel de `/chronologie` ;
- l'état vide ;
- les tests unitaires, contractuels et end-to-end nécessaires ;
- les contrôles responsive, accessibilité et non-régression ;
- la synchronisation documentaire et le verrouillage final.

## 16. Hors périmètre

Sont explicitement exclus :

- la chronologie officielle ou exhaustive de David ;
- tout fait biographique ou artistique réel non validé ;
- toute modification de `/david` ;
- toute modification des œuvres, collections ou contenus artistiques existants ;
- les liens retour depuis les œuvres ou contenus vers `/chronologie` ;
- une route dynamique dédiée à un repère ;
- une page d'index supplémentaire ;
- la recherche, les filtres et le tri interactif ;
- les nouveaux médias ;
- toute base de données ou persistance ;
- Supabase ;
- toute API ;
- l'authentification ;
- les espaces privés ;
- les fonctions de gestion ou de publication ;
- les fonctions commerciales ou d'acquisition ;
- toute modification du shell ou de la navigation principale ;
- toute extension du Design System ;
- toute nouvelle direction artistique ;
- toute animation décorative ;
- le SEO éditorial avancé ;
- toute anticipation d'un Sprint ultérieur.

## 17. Fichiers et zones autorisés

Les zones susceptibles d'être concernées sont limitées à :

```text
docs/sprints/sprint-016-public-timeline.md
src/modules/timeline/
src/app/(public)/chronologie/page.tsx
src/test/
e2e/
PROJECT_STATE.md
CHANGELOG.md
```

Les modules `gallery` et `artistic-content`, leurs données, leurs pages, le shell, la
navigation principale et le Design System restent inchangés.

Tout autre fichier exige une justification fondée sur une non-conformité démontrée et
une autorisation conforme à la gouvernance.

## 18. Livrables

Le Sprint doit produire :

- le présent contrat validé et verrouillé ;
- le module chronologique privé et temporaire ;
- les trois repères de démonstration acceptés ;
- la page publique `/chronologie` conforme à `V-PUB-06` ;
- les relations et liens explicites vers les ressources concernées ;
- l'état vide ;
- les tests ciblés et de non-régression ;
- la documentation de clôture synchronisée.

## 19. Critères d'acceptation

Le Sprint est acceptable si :

- `/chronologie` ne présente plus son état structurel temporaire ;
- exactement trois repères fictifs sont disponibles ;
- les années 2023, 2024 et 2025 sont représentées ;
- les repères sont rendus de la plus ancienne à la plus récente ;
- chaque repère de démonstration possède au moins une ressource liée ;
- le modèle accepte néanmoins un repère sans ressource ;
- toutes les relations sont explicites ;
- chaque œuvre liée existe et utilise son URL canonique ;
- chaque contenu lié existe et utilise `/contenus/[contentSlug]` ;
- aucune relation n'est déduite des autres modules ;
- aucune donnée de `gallery` ou `artistic-content` n'est copiée ou mutée ;
- aucune dépendance circulaire n'est introduite ;
- les modules existants n'importent pas `timeline` ;
- l'état vide est neutre et accessible ;
- la page reste un Server Component ;
- le Design System existant est respecté ;
- aucun champ facultatif vide n'est rendu ;
- la page respecte les exigences responsive et d'accessibilité ;
- aucune fonctionnalité hors périmètre n'est introduite ;
- les contrôles obligatoires sont conformes.

## 20. Validations obligatoires

Avant la clôture :

- Prettier ;
- ESLint ;
- TypeScript ;
- Vitest ;
- build Next.js ;
- Playwright ;
- contrôle des trois viewports ;
- contrôle du reflow équivalent à 200 % ;
- contrôle du clavier, du focus, du skip link, des landmarks et des titres ;
- contrôle de l'ordre chronologique ;
- contrôle de l'état vide ;
- contrôle des références inconnues ;
- contrôle des erreurs et avertissements navigateur ;
- contrôle des frontières d'import entre `timeline`, `gallery`,
  `artistic-content` et les routes publiques ;
- `git diff --check` ;
- `pnpm audit`, avec restitution exacte de toute exception documentée qui subsiste ;
- audit de conformité entre contrat, implémentation, tests, `PROJECT_STATE.md`,
  `CHANGELOG.md` et historique Git.

## 21. Exécution incrémentale

### Incrément 1 — Contrat

**Objectif**

Réaliser la revue finale, valider et verrouiller le contrat sans modifier
l'application.

**Travaux**

- relire les références normatives ;
- confirmer les arbitrages Product Owner ;
- vérifier le périmètre et le hors périmètre ;
- verrouiller le présent document.

**Critères de validation**

- aucune décision fonctionnelle ouverte ;
- contrat cohérent avec le référentiel ;
- aucun code applicatif modifié.

**Commit attendu**

```text
docs(sprint-016): lock public timeline contract
```

### Incrément 2 — Modèle et données temporaires

**Objectif**

Implémenter le modèle chronologique privé, les trois repères fictifs et leurs fonctions
de résolution sans modifier l'interface.

**Travaux**

- créer `types.ts`, `demo-data.ts` et `queries.ts` ;
- définir les références explicites vers les ressources ;
- garantir l'immuabilité et l'ordre chronologique ;
- ajouter les tests contractuels.

**Critères de validation**

- exactement trois repères ;
- années 2023, 2024 et 2025 ;
- ordre déterministe ;
- références valides ;
- absence de copie, mutation ou cycle d'import ;
- aucune page modifiée.

**Commit attendu**

```text
feat(timeline): add temporary timeline model and demo data
```

### Incrément 3 — Consultation chronologique

**Objectif**

Remplacer l'état structurel de `/chronologie` par la présentation sémantique des
repères et de l'état vide.

**Travaux**

- intégrer le titre et l'introduction ;
- présenter les étapes ordonnées ;
- rendre uniquement les informations applicables ;
- implémenter l'état vide ;
- ne rendre aucun lien vers les œuvres ou contenus à ce stade ;
- ajouter les tests de route et de sémantique.

**Critères de validation**

- route rendue côté serveur ;
- unique `h1` ;
- ordre chronologique perceptible ;
- état vide couvert ;
- aucun lien ajouté avant l'Incrément 4 ;
- aucun style ou composant hors contrat.

**Commit attendu**

```text
feat(timeline): implement public chronological presentation
```

### Incrément 4 — Accès aux ressources concernées

**Objectif**

Ajouter les liens explicites depuis chaque repère vers les œuvres et contenus
artistiques associés.

**Travaux**

- résoudre les œuvres et contenus associés ;
- rendre leurs liens canoniques ;
- traiter les incohérences internes ;
- compléter les tests contractuels et de navigation.

**Critères de validation**

- aucun lien déduit ;
- aucune référence inconnue silencieuse ;
- aucun lien retour ajouté aux pages existantes ;
- aucune mutation des modules sources ;
- navigation correcte vers chaque ressource liée.

**Commit attendu**

```text
feat(timeline): connect milestones to public resources
```

### Incrément 5 — Responsive et accessibilité

**Objectif**

Démontrer la conformité responsive et accessible de la page sans modifier sa
responsabilité ou son contenu.

**Travaux**

- valider les trois viewports ;
- valider le reflow à 200 % ;
- contrôler le clavier, le focus et le skip link ;
- contrôler les titres, landmarks et noms accessibles ;
- vérifier l'absence de débordement et de message navigateur inattendu ;
- corriger uniquement les non-conformités démontrées.

**Critères de validation**

- responsive conforme ;
- navigation clavier complète ;
- sémantique cohérente ;
- aucun changement visuel opportuniste ;
- aucune régression du shell ou des routes publiques.

**Commit attendu**

```text
test(timeline): validate responsive accessible presentation
```

### Incrément 6 — Audit final et clôture

**Objectif**

Auditer la conformité transversale, exécuter les contrôles complets, synchroniser la
documentation et préparer le verrouillage.

**Travaux**

- comparer contrat, code et tests ;
- vérifier les frontières d'import ;
- exécuter toutes les validations obligatoires ;
- synchroniser le contrat, `PROJECT_STATE.md` et `CHANGELOG.md` ;
- préparer la revue Product Owner finale.

**Critères de validation**

- aucune divergence contractuelle ;
- tous les contrôles conformes ;
- toute exception de sécurité restituée exactement ;
- documentation fidèle à l'état réel ;
- aucune fonctionnalité ou correction esthétique ajoutée.

**Commit attendu**

```text
docs(sprint-016): prepare public timeline closure
```

Chaque incrément fait l'objet d'une revue, de l'acceptation de son résultat et d'un
commit dédié avant le commencement du suivant. Cette acceptation intermédiaire ne
remplace pas la validation Product Owner finale du Sprint.

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
→ Commit de clôture
→ Tag sprint-016
→ Pull Request
→ Fusion dans main
→ Vérification et nettoyage
```

## 23. Révision contrôlée `sprint-016-r1`

### 23.1 Origine et portée

Le tag historique `sprint-016`, publié sur le commit
`5d763424382725d41deb5d710ecd25627c5ae85c`, reste inchangé. Il conserve la trace de
la référence initiale du Sprint 016.

Un audit postérieur à cette publication a établi les non-conformités suivantes :

- le champ contractuellement facultatif `period` n'était pas représenté comme tel dans
  le modèle TypeScript ;
- la clôture documentaire initiale n'avait pas été synchronisée ;
- la vulnérabilité transitive affectant `brace-expansion@1.1.16` était devenue
  corrigeable dans la branche majeure compatible ;
- la racine Turbopack dépendait de `process.cwd()` et pouvait donc désigner
  incorrectement `src/app` selon le répertoire de lancement.

Ces constats ne modifient ni la responsabilité `V-PUB-06`, ni le périmètre fonctionnel,
ni les décisions produit du présent contrat.

### 23.2 Corrections préparées

La révision contrôlée `sprint-016-r1` prépare les corrections suivantes :

- représentation explicite de `period` par `string | null` ;
- utilisation exclusive de `null` pour l'absence de période et adaptation du rendu
  conditionnel ;
- ajout des tests associés à l'absence de période ;
- résolution normale de `brace-expansion` vers `1.1.17`, sans override ni modification
  de `package.json` ;
- stabilisation de `turbopack.root` à partir du répertoire de `next.config.ts`, sans
  chemin absolu local ni modification de dépendance ;
- preuve de l'immuabilité profonde des données chronologiques sources et résolues ;
- preuve que la consultation rend exactement les trois repères contractuels ;
- preuve complète du responsive, du reflow, du parcours clavier, du focus et de l'état
  actif de la navigation ;
- synchronisation de la documentation de clôture.

La correction fonctionnelle est enregistrée dans le commit
`071b3eae16d03fbad8af67e976a1708698de638e`. La correction de sécurité est enregistrée
dans le commit `7b50407aae486f4ba964c49cd62e5dccdd7df847`. La correction Turbopack est
enregistrée dans le commit `1d87b42c35499cd1b57d0b998c9b87e4af9c9cf8`. La preuve
d'immuabilité profonde est enregistrée dans le commit
`3ce90b506bc701f603e81a4a0f609b831d6e5821`. La preuve des trois repères réellement
rendus est enregistrée dans le commit `faafe47d5cbc290bb0b3dfd9e876d391b7216686`.
La preuve responsive et d'accès clavier complet est enregistrée dans le commit
`d18b090915e0a4df9e3d11719bfe6f021dcad9c5`.

### 23.3 Contrôles de la révision

Les contrôles exécutés sur la révision sont conformes :

- Prettier, ESLint et TypeScript ;
- 14 fichiers Vitest et 129 tests ;
- build Next.js ;
- 60 tests Playwright ;
- `pnpm audit` avec zéro vulnérabilité ;
- `git diff --check`.

Les Incréments 1 à 5 ont été revus séparément. Les Incréments 1 et 4 ont été validés
sans modification ; les corrections ciblées des Incréments 2, 3 et 5 sont enregistrées
dans les commits de preuve précités. L'Incrément 6 est techniquement conforme après la
présente synchronisation documentaire.

Deux avertissements LCP avaient été observés antérieurement sur les médias
`/gallery/composition-b.webp` et `/gallery/composition-c.webp`. Ils n'ont pas été
reproduits pendant la validation finale actuelle, ne concernent pas `/chronologie` et
ne sont pas provoqués par les corrections de la R1. Aucune correction LCP n'est requise
dans le Sprint 016-r1.

### 23.4 État de la révision

La révision `sprint-016-r1` est validée par le Product Owner et prête pour son
verrouillage Git. La publication de la branche, la création du tag `sprint-016-r1`, la
Pull Request, la fusion dans `main` et le nettoyage de la branche restent à effectuer.

Tant que cette séquence n'est pas achevée, le tag historique `sprint-016` reste la seule
référence publiée du Sprint 016 et la révision R1 n'est pas intégrée dans `origin/main`.
