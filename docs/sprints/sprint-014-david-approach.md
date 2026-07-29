# Sprint 014 — David et sa démarche

## Statut

**Validé par le Product Owner et verrouillé — implémentation non commencée**

Le présent document constitue la référence documentaire canonique du Sprint 014. Toute
évolution ultérieure suit `docs/GOVERNANCE.md`.

## 1. Objectif

Le Sprint 014 a pour objectif de concevoir et d'implémenter la page publique `/david`
comme référence V1 permettant de présenter David Prieur-Gélis, les éléments
biographiques utiles, sa démarche artistique et les repères nécessaires à la
compréhension de son travail.

Il matérialise la responsabilité fonctionnelle de `V-PUB-02 — David et sa démarche`.

Le Sprint appartient à la catégorie des Sprints fonctionnels définie par
`docs/GOVERNANCE.md`.

À sa clôture, l'implémentation constitue la référence officielle V1 de la page. Elle
n'est ni provisoire ni inachevée au motif que son contenu éditorial pourra être enrichi
ultérieurement. Toute évolution future suit la gouvernance applicable.

## 2. Références normatives

Les documents suivants constituent les sources de vérité du Sprint :

- `docs/GOVERNANCE.md` ;
- `docs/specifications/functional-specification-v1.md` ;
- `docs/specifications/business-rules-v1.md` ;
- `docs/specifications/product-structure-v1.md` ;
- `docs/specifications/technical-architecture-v1.md` ;
- `docs/specifications/design-system-v1.md` ;
- `docs/sprints/SPRINT_002_PRODUCT_VISION.md` ;
- `docs/sprints/sprint-010-application-shell.md` ;
- `docs/sprints/sprint-011-public-gallery.md` ;
- `docs/sprints/sprint-012-artwork-details.md` ;
- `docs/sprints/sprint-013-public-homepage.md`.

En cas de divergence, les spécifications normatives prévalent. Le présent contrat
applique les décisions existantes sans devenir une nouvelle source de vérité métier ou
visuelle.

## 3. Décisions héritées

Le Sprint applique les décisions déjà validées suivantes :

- AZUREUM est une galerie d'art numérique premium consacrée durablement à David
  Prieur-Gélis ;
- David est l'unique artiste permanent présenté dans la V1 ;
- la démarche artistique constitue le principe organisateur du produit ;
- la fidélité à cette démarche prime sur l'optimisation commerciale ;
- le visiteur doit pouvoir appréhender le travail de David comme une démarche cohérente
  et non comme une succession d'œuvres isolées ;
- `V-PUB-02` présente David, les éléments biographiques utiles, sa démarche artistique
  et les repères nécessaires à la compréhension de son travail ;
- la route officielle de `V-PUB-02` est `/david` ;
- le parcours public de référence conduit de `V-PUB-01` vers `V-PUB-02`, puis vers les
  collections et les œuvres dans leur contexte ;
- les collections restent l'accès public principal aux œuvres ;
- le shell public, la navigation persistante et le Design System V1 sont déjà
  verrouillés ;
- la route `/david` existe actuellement sous la forme d'une page structurelle minimale.

## 4. Responsabilité fonctionnelle de la page

La page `/david` doit :

- identifier clairement David Prieur-Gélis comme l'artiste permanent auquel AZUREUM
  est consacré ;
- fournir des éléments biographiques strictement utiles à la compréhension de son
  travail ;
- présenter sa démarche artistique de manière cohérente et compréhensible ;
- fournir les principaux repères permettant de situer les expressions de son travail ;
- relier cette présentation à la découverte des collections publiques existantes ;
- rester compréhensible indépendamment de la présence éventuelle d'un média ;
- conserver une finalité culturelle et éditoriale avant toute finalité commerciale.

La page ne doit pas :

- devenir une chronologie exhaustive, laquelle relève de `V-PUB-06` ;
- remplacer les pages de collection, d'œuvre ou de contenu artistique ;
- présenter David comme un produit, une marque générique ou un artiste parmi d'autres ;
- exposer une capacité de gestion, d'acquisition ou d'administration.

## 5. Contenu éditorial V1

### 5.1 Nature du contenu

Le Sprint ne recherche ni une biographie exhaustive ni un manifeste définitif.

Le contenu V1 doit être suffisamment complet pour remplir la responsabilité de
`V-PUB-02` et suffisamment borné pour pouvoir être relu, validé et maintenu.

Il comprend au minimum :

- l'identité publique « David Prieur-Gélis » ;
- une présentation courte de David dans le contexte d'AZUREUM ;
- un ensemble limité d'éléments biographiques utiles à la compréhension de son
  travail ;
- une présentation de sa démarche artistique ;
- des repères relatifs aux expressions, préoccupations, pratiques ou évolutions de son
  travail, uniquement lorsqu'ils sont confirmés par David ;
- une transition éditoriale vers la découverte de ses collections.

### 5.2 Validation obligatoire

Avant toute intégration du contenu officiel V1 dans la page, le corpus éditorial doit :

1. être fourni ou formellement approuvé par David ;
2. être relu par le Product Owner ;
3. ne contenir aucun fait, citation, intention, influence ou interprétation non
   confirmé ;
4. définir explicitement la voix retenue pour la V1, notamment la première ou la
   troisième personne ;
5. identifier toute citation directe comme telle et en confirmer l'attribution ;
6. être enregistré dans le périmètre documentaire de l'incrément éditorial prévu par
   le présent contrat.

L'implémentation de la structure, de la composition, du responsive, de l'accessibilité
et des éléments techniques peut être réalisée indépendamment de la validation finale du
corpus.

Un contenu provisoire explicitement identifié comme non officiel peut être utilisé sur
la branche du Sprint afin de développer et tester la page. Ce contenu ne peut pas être
fusionné dans `main` et doit être remplacé par le corpus validé avant la clôture du
Sprint.

La publication du contenu officiel V1, la validation finale et le verrouillage du
Sprint restent impossibles tant que David et le Product Owner n'ont pas validé le
corpus intégré.

### 5.3 Fidélité éditoriale

L'implémentation reproduit fidèlement le corpus validé. Elle ne complète, ne réécrit et
n'interprète aucun passage pour améliorer artificiellement le ton, la narration ou le
référencement.

Les corrections strictement typographiques peuvent être proposées pendant la revue,
mais toute modification de sens requiert une nouvelle validation de David et du Product
Owner avant intégration.

## 6. Évolutivité éditoriale

Le contenu validé pour ce Sprint constitue le contenu officiel V1 à sa clôture.

Peuvent évoluer ultérieurement, selon `docs/GOVERNANCE.md`, sans remettre en cause la
responsabilité fonctionnelle de `V-PUB-02` :

- la longueur de la présentation ;
- le choix de la première ou de la troisième personne ;
- l'ordre ou le découpage des paragraphes ;
- les éléments biographiques retenus ;
- les formulations consacrées à la démarche ;
- les repères relatifs aux pratiques et à l'évolution du travail ;
- les citations validées ;
- les médias officiels associés ;
- la composition éditoriale et la direction artistique.

Une telle évolution constitue une nouvelle référence éditoriale ou artistique. Elle
doit être motivée, validée et intégrée dans un Sprint autorisé. Elle ne permet pas de
modifier implicitement les responsabilités des autres vues.

## 7. Périmètre inclus

Le Sprint comprend uniquement :

- la validation du présent contrat ;
- la constitution et la validation du corpus éditorial V1 avant sa publication ;
- le remplacement du contenu structurel actuel de `/david` ;
- l'intégration fidèle du corpus validé ;
- un accès explicite aux collections publiques existantes ;
- l'intégration au shell et à la navigation existants ;
- l'utilisation exclusive des composants et tokens officiels du Design System ;
- les validations sémantiques, responsive, accessibles, visuelles et techniques ;
- les tests ciblés et de non-régression ;
- la synchronisation documentaire nécessaire à la clôture.

## 8. Comportements observables attendus

Une fois implémentée :

- `/david` ne présente plus un contenu structurel ou transitoire ;
- la page possède un unique `h1` identifiant David Prieur-Gélis ;
- le visiteur accède au contenu éditorial V1 validé ;
- la hiérarchie distingue clairement la présentation, les éléments biographiques
  utiles, la démarche et les repères retenus ;
- le contenu permet de comprendre la relation entre David, sa démarche et les
  collections ;
- un lien explicite permet de rejoindre `/collections` ;
- la navigation publique persistante conserve son fonctionnement et son état actif ;
- le contenu reste intégralement compréhensible sans média ;
- aucun fait ou propos non validé n'est présenté comme officiel ;
- aucune fonction commerciale, privée ou administrative n'est introduite.

## 9. Liens et relations avec les autres vues

La page s'inscrit dans le parcours public :

```text
/ → /david → /collections → /collections/[collectionSlug]
```

Le Sprint autorise uniquement un accès éditorial propre à la page vers :

```text
/collections
```

Le libellé exact de ce lien doit être validé avec le corpus éditorial V1 avant
implémentation.

La navigation persistante existante reste inchangée. Aucun lien direct vers une œuvre,
un contenu inexistant, une route privée ou `/design-system` n'est ajouté.

## 10. Données et médias

Le contenu éditorial officiel reste local et statique dans ce Sprint.

Le Sprint n'introduit :

- aucune base de données ;
- aucun CMS ;
- aucune API ;
- aucun appel réseau ;
- aucune variable d'environnement ;
- aucun mécanisme d'édition ;
- aucune duplication des données temporaires de la galerie.

Aucun portrait, document, photographie d'atelier ou média officiel n'est obligatoire
pour remplir la responsabilité fonctionnelle V1.

Un média ne peut être intégré que s'il est :

- fourni ou approuvé par David ;
- autorisé pour cet usage ;
- accompagné de son statut informatif ou décoratif ;
- accompagné d'une alternative textuelle validée lorsqu'il est informatif ;
- ajouté explicitement au périmètre avant l'implémentation qui l'utilise.

En l'absence de média validé, la page est implémentée comme une page éditoriale complète
sans média. Aucun média fictif de la galerie ne représente David ou sa démarche.

## 11. Architecture et intégration

La page reste un Server Component par défaut.

La responsabilité appartient au module `CMP-GAL — Galerie`, propriétaire de la
projection publique de la démarche et des contenus éditoriaux.

Le Sprint doit :

- conserver la route existante `/david` ;
- privilégier une composition serveur et des données locales ;
- isoler tout contenu structuré dans le périmètre privé de la galerie si son volume ou
  sa réutilisation le justifie ;
- conserver tout composant propre à la page privé et colocalisé ;
- utiliser les composants publics du Design System sans modifier leur contrat.

Le Sprint n'introduit :

- aucun nouveau module transversal ;
- aucune API publique ;
- aucun nouveau composant du Design System ;
- aucun token ou variant ;
- aucune dépendance ;
- aucun Client Component sans interaction contractuelle démontrée ;
- aucune nouvelle route.

## 12. Design System, responsive et accessibilité

L'implémentation doit :

- utiliser exclusivement les composants et tokens officiels ;
- suivre une approche mobile-first et les points de rupture `DT-10` ;
- conserver un unique `h1` et une hiérarchie de titres cohérente ;
- proposer un ordre de lecture logique avec ou sans CSS ;
- rester utilisable au clavier avec un focus visible ;
- rester compréhensible sans dépendre uniquement de la couleur, du mouvement ou d'un
  média ;
- respecter `prefers-reduced-motion` ;
- éviter tout débordement horizontal ;
- rester utilisable avec un reflow équivalent à un zoom de 200 % ;
- fonctionner sur mobile, tablette et bureau ;
- préserver le skip link et les landmarks du shell ;
- n'introduire aucune valeur visuelle locale lorsqu'un token existe.

Aucune direction artistique nouvelle n'est définie par ce Sprint. Une évolution
visuelle ultérieure relève d'un audit, d'un arbitrage Product Owner et d'un Sprint
autorisé.

## 13. Hors périmètre

Sont explicitement exclus :

- une biographie exhaustive ;
- un manifeste définitif ;
- toute information non confirmée par David ;
- toute citation non validée ;
- la chronologie complète de `V-PUB-06` ;
- les pages de contenus artistiques de `V-PUB-05` ;
- toute création ou modification de collection ou d'œuvre ;
- toute modification des données temporaires de galerie ;
- toute représentation fictive de David ;
- tout nouveau média non validé ;
- toute acquisition, disponibilité, prix, panier, commande ou paiement ;
- toute authentification, autorisation ou interface de gestion ;
- toute base de données, API, CMS ou persistance ;
- toute nouvelle route ;
- toute modification du shell ou de la navigation principale ;
- toute extension du Design System ;
- toute animation, parallaxe, vidéo, scène 3D ou traitement immersif non prescrit ;
- le SEO éditorial avancé ;
- toute anticipation de `V-PUB-05`, `V-PUB-06` ou d'un Sprint de direction artistique.

## 14. Fichiers susceptibles d'être concernés

Le contrat documentaire concerne :

```text
docs/sprints/sprint-014-david-approach.md
```

Après verrouillage du contrat, l'implémentation pourra concerner uniquement :

```text
src/app/(public)/david/page.tsx
src/app/(public)/david/page.module.css
src/app/(public)/david/_components/          (uniquement si nécessaire)
src/modules/gallery/                         (contenu local privé, si nécessaire)
public/                                      (uniquement pour un média officiel validé)
src/test/public-routes.test.tsx
e2e/public-routes.spec.ts
PROJECT_STATE.md
CHANGELOG.md
docs/sprints/sprint-014-david-approach.md
```

Tout autre fichier nécessite une non-conformité démontrée ou un arbitrage Product Owner.

## 15. Livrables

Le Sprint doit produire :

- le présent contrat validé et verrouillé ;
- un corpus éditorial V1 fourni ou approuvé par David et validé par le Product Owner ;
- la page publique `/david` conforme à `V-PUB-02` ;
- son intégration au shell et au Design System existants ;
- les éventuels médias officiels explicitement validés ;
- les tests ciblés et de non-régression ;
- les validations responsive et accessibles ;
- la documentation de clôture synchronisée ;
- un audit final de conformité.

## 16. Critères d'acceptation

### Fonctionnel et éditorial

- `/david` remplit la responsabilité de `V-PUB-02` ;
- David Prieur-Gélis est clairement identifié ;
- seuls des éléments biographiques utiles et validés sont publiés ;
- la démarche artistique est présentée à partir du corpus approuvé ;
- les repères nécessaires à la compréhension du travail sont présents ;
- le contenu est officiellement validé par David et le Product Owner ;
- aucun fait, propos, citation ou média non validé n'est publié ;
- un accès explicite conduit à `/collections` ;
- la page reste complète et compréhensible sans média ;
- le contenu n'est pas présenté comme définitif pour toutes les versions futures, mais
  il constitue bien la référence officielle V1.

### Structure et architecture

- la route existante `/david` est conservée ;
- la page utilise le shell public existant ;
- la page reste un Server Component sauf nécessité contractuelle démontrée ;
- un unique `h1` est présent ;
- la hiérarchie des titres et l'ordre de lecture sont cohérents ;
- aucune nouvelle route, dépendance, API, persistance ou logique métier n'est introduite ;
- aucun module ou export public général n'est créé.

### Design System et accessibilité

- seuls les composants et tokens officiels sont utilisés ;
- aucune API, aucun token et aucun variant ne sont ajoutés ;
- la page est utilisable sur mobile, tablette et bureau ;
- aucun débordement horizontal n'est observé ;
- le reflow reste utilisable à 200 % ;
- le clavier, le focus visible, les landmarks et le skip link restent conformes ;
- le contenu demeure compréhensible sans CSS et sans média ;
- aucun avertissement d'accessibilité inattendu n'est introduit.

### Non-régression

- le shell et la navigation publique restent inchangés ;
- l'état actif de la navigation reste cohérent sur `/david` ;
- `/`, `/collections`, les collections et les œuvres restent fonctionnels ;
- `/design-system` reste hors navigation publique et ne subit aucune régression ;
- aucune erreur ou aucun avertissement navigateur inattendu n'apparaît.

## 17. Validations obligatoires

Avant clôture :

- validation explicite du corpus éditorial par David ;
- validation Product Owner du corpus éditorial ;
- revue de fidélité entre le corpus validé et le rendu ;
- Prettier ;
- ESLint ;
- TypeScript ;
- Vitest ;
- build Next.js ;
- Playwright sur les viewports `390 × 844`, `768 × 1024` et `1440 × 900` ;
- absence de débordement horizontal ;
- contrôle du reflow à 200 % ;
- contrôle du clavier, du focus, des landmarks et de la hiérarchie des titres ;
- contrôle des erreurs et avertissements navigateur ;
- `git diff --check` ;
- `pnpm audit`, avec restitution exacte de toute exception documentée qui subsiste ;
- audit de conformité entre contrat, corpus éditorial, implémentation, tests,
  `PROJECT_STATE.md`, `CHANGELOG.md` et historique Git.

## 18. Exécution incrémentale

### Incrément 1 — Contrat et cadre éditorial

**Objectif**

Verrouiller le contrat et définir le cadre de constitution et de validation du corpus
éditorial V1 avant tout code.

**Travaux autorisés**

- revue et verrouillage du présent contrat ;
- rédaction ou intégration du corpus fourni ;
- préparation de la validation par David et le Product Owner ;
- identification des arbitrages éditoriaux restant ouverts ;
- inventaire des éventuels médias officiels proposés.

**Critères de validation**

- le contrat ne contient plus d'arbitrage fonctionnel ouvert ;
- le processus de validation du corpus est explicite ;
- chaque information ou média déjà retenu possède un statut identifiable ;
- les arbitrages éditoriaux encore ouverts ne sont pas présentés comme validés ;
- aucun fichier de production n'est modifié.

**Commit attendu**

```text
docs(sprint-014): lock David approach contract
```

### Incrément 2 — Structure sémantique et composition

**Objectif**

Construire la structure et la composition technique de la page indépendamment de
l'intégration du corpus officiel.

**Travaux autorisés**

- hiérarchie sémantique de `/david` ;
- composition avec le Design System ;
- contenu de travail explicitement non officiel si nécessaire aux contrôles ;
- tests ciblés de structure, de rendu serveur et de composition.

**Critères de validation**

- un unique `h1` identifie David ;
- la structure permet de matérialiser toutes les responsabilités de la section 4 ;
- la page reste un Server Component ;
- aucun contenu de travail n'est présenté comme officiel ;
- aucun contenu hors périmètre n'est introduit.

**Commit attendu**

```text
feat(david): establish semantic presentation structure
```

### Incrément 3 — Contenu officiel, parcours public et médias validés

**Objectif**

Intégrer fidèlement le corpus officiel, relier la page aux collections et intégrer
uniquement les éventuels médias officiels validés.

**Travaux autorisés**

- validation explicite du corpus par David et le Product Owner ;
- intégration fidèle du corpus validé ;
- lien éditorial vers `/collections` ;
- état actif de la navigation existante ;
- média validé et son accessibilité, s'il existe ;
- tests ciblés du parcours et du média.

**Critères de validation**

- le rendu reproduit le corpus validé sans ajout ni altération de sens ;
- le lien conduit à `/collections` avec le libellé validé ;
- aucun lien direct vers une œuvre n'est ajouté ;
- la navigation persistante n'est pas modifiée ;
- en l'absence de média validé, aucun substitut fictif n'est introduit ;
- la page reste complète lorsque le média est absent ou indisponible.

**Commit attendu**

```text
feat(david): publish validated artist presentation
```

### Incrément 4 — Responsive et accessibilité

**Objectif**

Valider la consultation de la page dans les conditions d'usage prescrites.

**Travaux autorisés**

- contrôles mobile, tablette et bureau ;
- reflow, débordement, clavier, focus et ordre de lecture ;
- corrections minimales de non-conformités démontrées ;
- tests Playwright ciblés.

**Critères de validation**

- les trois viewports prescrits sont conformes ;
- aucun débordement horizontal n'est présent ;
- le reflow à 200 % reste utilisable ;
- la hiérarchie, les landmarks, le skip link et le focus sont conformes ;
- aucune modification esthétique opportuniste n'est introduite.

**Commit attendu**

```text
test(david): validate responsive accessible presentation
```

### Incrément 5 — Non-régression et audit final

**Objectif**

Démontrer la conformité globale du Sprint et préparer son verrouillage.

**Travaux autorisés**

- tests transversaux et contrôles complets ;
- audit contrat, corpus, code et tests ;
- corrections limitées aux non-conformités démontrées ;
- synchronisation de `PROJECT_STATE.md`, `CHANGELOG.md` et du présent contrat ;
- préparation du rapport final.

**Critères de validation**

- tous les contrôles de la section 17 sont conformes ;
- le corpus validé et le rendu sont fidèles ;
- aucune régression n'est présente ;
- la documentation correspond à l'état réel ;
- aucune modification hors périmètre n'est présente.

**Commit attendu**

```text
docs(sprint-014): prepare David approach closure
```

Chaque incrément fait l'objet d'une revue, d'une acceptation de son résultat et d'un
commit dédié avant le commencement du suivant. Cette acceptation intermédiaire ne
remplace pas la validation Product Owner finale du Sprint.

## 19. Séquence de revue et de verrouillage

```text
Rédaction du contrat
→ Revue Product Owner
→ Arbitrages documentés
→ Validation et verrouillage du contrat
→ Implémentation de la structure technique
→ Validation du corpus éditorial par David et le Product Owner
→ Intégration du contenu officiel
→ Poursuite de l'implémentation incrémentale
→ Revue et acceptation de chaque incrément
→ Audit final
→ Synchronisation documentaire
→ Validation Product Owner finale
→ Commits de clôture
→ Tag sprint-014
→ Pull Request
→ Fusion dans main
→ Vérification et nettoyage de branche
```

## 20. Points nécessitant un arbitrage avant intégration du contenu officiel

Les éléments suivants peuvent être préparés parallèlement à la structure technique, mais
doivent être décidés avant l'Incrément 3 :

1. le corpus éditorial V1 exact ;
2. la voix éditoriale, à la première ou à la troisième personne ;
3. les éléments biographiques utiles retenus ;
4. les formulations décrivant la démarche et les repères artistiques ;
5. le libellé exact du lien vers `/collections` ;
6. la présence ou l'absence d'un média officiel ;
7. si un média est retenu, son fichier, son droit d'usage, son statut accessible et son
   alternative textuelle.

Ces arbitrages portent sur le contenu officiel de la V1. Ils ne peuvent être déduits,
inventés ou complétés pendant son intégration. Leur absence n'interdit pas
l'implémentation technique de l'Incrément 2, mais interdit l'intégration officielle, la
fusion dans `main` et la clôture du Sprint.
