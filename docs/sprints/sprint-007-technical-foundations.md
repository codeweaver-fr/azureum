# Sprint 007 — Fondations techniques

## Statut

**En cours**

## Objectif

Créer un socle applicatif reproductible, contrôlé et conforme à l'architecture technique validée, afin que les futurs Sprints puissent implémenter AZUREUM sans rediscuter ses fondations.

Le Sprint répond à la question suivante :

> **Le dépôt permet-il de développer, tester, vérifier et livrer AZUREUM V1 sur une base technique saine ?**

## Références souveraines

- `docs/specifications/functional-specification-v1.md` — Sprint 003-r1 ;
- `docs/specifications/business-rules-v1.md` — Sprint 004-r1 ;
- `docs/specifications/product-structure-v1.md` — Sprint 005-r1 ;
- `docs/specifications/technical-architecture-v1.md` — Sprint 006 ;
- `docs/QUICK_REFERENCE.md` ;
- `docs/GOVERNANCE.md` ;
- `PROJECT_STATE.md`.

## Règle directrice

Le Sprint 007 implémente exclusivement les fondations prévues par le Sprint 006. Il ne modifie aucune capacité fonctionnelle, règle métier, structure produit ou décision d'architecture validée.

Toute contradiction découverte entre l'implémentation envisagée et un contrat documentaire entraîne l'arrêt de l'élément concerné et son signalement au Product Owner. Elle ne peut jamais être résolue implicitement dans le code.

## Périmètre

Le Sprint couvre uniquement :

- la création du projet Next.js avec App Router et TypeScript ;
- l'adoption de pnpm comme gestionnaire de paquets unique du dépôt ;
- la structure initiale du monolithe modulaire ;
- les conventions de code, ESLint et Prettier ;
- la vérification TypeScript ;
- le socle de tests Vitest et Playwright ;
- les commandes reproductibles de développement, contrôle et construction ;
- l'intégration continue avec GitHub Actions ;
- la configuration documentée des variables d'environnement, sans secret versionné ;
- le socle de développement local Supabase et le répertoire de migrations SQL ;
- les premières frontières techniques entre exécution serveur et cliente ;
- la documentation nécessaire à l'installation et au développement local.

## Hors périmètre

Le Sprint n'implémente notamment pas :

- la galerie, les collections ou les fiches d'œuvres ;
- la logique métier des œuvres, exemplaires, acquisitions ou réservations ;
- l'authentification fonctionnelle et la gestion effective des rôles ;
- le paiement, Stripe Connect ou les commissions ;
- l'envoi réel d'e-mails avec Brevo ;
- les remises, certificats, ventes externes ou anomalies ;
- les espaces privés de David ou de l'Administrateur ;
- le schéma métier définitif de la base de données ;
- les migrations métier ;
- le design détaillé et les animations finales ;
- toute capacité non validée dans les contrats amont.

## Livrables

- socle applicatif Next.js et TypeScript ;
- structure modulaire initiale documentée ;
- configuration des outils de qualité et de tests ;
- pipeline d'intégration continue ;
- configuration locale Supabase sans données métier ;
- exemple de variables d'environnement sans secret ;
- guide de développement et commandes de contrôle ;
- mise à jour de l'état du projet et du changelog.

## Décision de fondation — Gestionnaire de paquets

pnpm est le gestionnaire de paquets unique d'AZUREUM à partir du Sprint 007.

Cette décision est prise avant la création du socle et repose sur :

- la prise en charge officielle par Next.js et Vercel ;
- un fichier de verrouillage reproductible `pnpm-lock.yaml` ;
- une résolution stricte qui rend explicites les dépendances réellement utilisées ;
- la mutualisation du stockage local des paquets ;
- la disponibilité d'une action officielle pour l'intégration continue.

Le dépôt fixe la version de pnpm dans le champ `packageManager` de `package.json`. Il ne versionne ni `package-lock.json`, ni `yarn.lock`, ni un autre fichier de verrouillage concurrent. La CI, Vercel et la documentation utilisent pnpm de manière cohérente.

Le runtime de référence est la ligne Node.js 24 LTS. La version de développement recommandée est fixée dans `.nvmrc`, tandis que `package.json#engines` interdit une ligne majeure non validée.

## Matrice des versions du socle

| Élément | Version retenue | Statut et justification |
|---|---:|---|
| Node.js | `24.18.0` | Runtime LTS cible fixé dans `.nvmrc` et validé par l'ensemble des contrôles du premier jalon. |
| pnpm | `10.34.5` | Version fixée dans `package.json#packageManager` et supportée par Vercel. |
| Next.js | `16.2.11` | Dernière version stable disponible lors de la création du socle. |
| React | `19.2.8` | Dernière version stable compatible avec Next.js retenue. |
| React DOM | `19.2.8` | Alignée sur React. |
| TypeScript | `6.0.3` | Dernière version stable compatible avec la plage déclarée par `typescript-eslint`. |
| ESLint | `9.39.5` | Branche stable compatible avec les plugins fournis par Next.js. |
| Prettier | `3.9.6` | Version stable retenue comme autorité unique de formatage du code et des configurations. |
| eslint-config-prettier | `10.1.8` | Désactive les règles ESLint incompatibles avec Prettier sans ajouter un second moteur de formatage. |
| Vitest | `4.1.10` | Version stable compatible avec Node.js 24, utilisée pour les tests unitaires sans environnement navigateur implicite. |
| Types Node.js | `24.13.3` | Alignés sur la ligne majeure Node.js 24 LTS. |

Versions volontairement écartées :

- Node.js 26, encore en statut Current au moment de la décision ;
- Node.js 25, arrivé en fin de vie ;
- pnpm 11, non encore annoncé comme pris en charge par la documentation Vercel vérifiée ;
- TypeScript 7, hors de la plage `<6.1.0` déclarée par `typescript-eslint` ;
- ESLint 10, hors des plages déclarées par plusieurs plugins intégrés à `eslint-config-next` ;
- les types Node.js 26, non alignés sur le runtime LTS retenu.

## Overrides temporaires de sécurité

Les overrides suivants sont définis uniquement à la racine dans `pnpm-workspace.yaml` :

| Dépendance | Version minimale imposée | Parent | Vulnérabilité corrigée | Compatibilité vérifiée | Condition de retrait |
|---|---:|---|---|---|---|
| `postcss` | `>=8.5.10` | `next@16.2.11` | `GHSA-qx2v-qp2m-jg93`, risque XSS lors de la sérialisation CSS | Installation figée, lint, vérification TypeScript, build et audit réussis avec `8.5.22`. | Retirer dès que Next.js dépend directement d'une version corrigée, après réussite de tous les contrôles. |
| `sharp` | `>=0.35.0` | `next@16.2.11` | `GHSA-f88m-g3jw-g9cj` et vulnérabilités libvips associées | Chargement natif et transformation d'image réussis avec `0.35.3`, puis lint, vérification TypeScript, build et audit réussis. | Retirer dès que Next.js accepte directement une version corrigée, après test de l'optimisation d'image et réussite de tous les contrôles. |

Ces overrides ne constituent pas des dépendances directes du code AZUREUM. Ils doivent être réévalués lors de chaque mise à jour de Next.js. Aucun override ne peut être ajouté silencieusement dans `package.json`.

## Validation du runtime

La réserve locale de runtime est levée. Les contrôles du premier jalon ont été rejoués sous Node.js `24.18.0` et pnpm `10.34.5`, avec confirmation que pnpm utilise lui-même Node.js `24.18.0`.

L'installation figée, le lint, la vérification TypeScript, le build et l'audit ont réussi. Le fichier `pnpm-lock.yaml` est resté strictement inchangé et l'audit n'a signalé aucune vulnérabilité connue.

## Deuxième jalon — Qualité et structure minimale

Prettier est l'unique autorité de formatage. ESLint conserve la responsabilité de l'analyse statique ; `eslint-config-prettier` neutralise uniquement les règles de style susceptibles de contredire Prettier. Les scripts `format`, `format:check` et `check` fournissent respectivement la correction du formatage, sa vérification et l'enchaînement des contrôles statiques quotidiens.

Les documents contractuels sous `docs/`, ainsi que `PROJECT_STATE.md` et `CHANGELOG.md`, sont exclus du formatage automatique afin de préserver leur mise en forme relue. Les README techniques restent contrôlés par Prettier. Le fichier de verrouillage reste exclusivement géré par pnpm.

Un fichier `.editorconfig` aligne les éditeurs sur UTF-8, les fins de ligne LF, l'indentation à deux espaces, la présence d'une dernière ligne vide et la suppression des espaces terminaux. Les espaces terminaux restent tolérés dans Markdown lorsqu'ils portent une signification de mise en forme.

Le dépôt complète cette convention avec `.gitattributes`, qui normalise les fichiers texte en LF dans Git tout en préservant les fichiers de commandes Windows et les ressources binaires. Les recommandations et réglages VS Code versionnés appliquent Prettier à l'enregistrement, proposent les corrections ESLint explicites et utilisent la version TypeScript du projet. Les extensions restent recommandées et ne constituent pas une condition d'accès au dépôt.

La structure minimale sous `src/` distingue :

- `modules` pour les futurs modules fonctionnels et leurs contrats publics ;
- `shared` pour les primitives techniques stables réellement partagées ;
- `server` pour les fondations réservées à l'exécution de confiance côté serveur ;
- `styles` pour les futurs styles partagés, sans système visuel anticipé ;
- `test` pour les futurs utilitaires communs aux tests.

Ces dossiers ne contiennent encore aucune logique métier. Des README courts matérialisent leur responsabilité sans anticiper les implémentations des prochains Sprints.

## Troisième jalon — Tests unitaires

Vitest exécute les tests TypeScript dans un environnement Node.js explicite. Aucun DOM simulé ni bibliothèque de test de composants n'est ajouté avant l'apparition d'un besoin réel. L'alias `@` est aligné sur `src/` comme dans la configuration TypeScript.

Les commandes `test` et `test:watch` distinguent l'exécution déterministe destinée aux contrôles et le mode interactif local. Le script `check` inclut désormais les tests unitaires après le formatage, ESLint et TypeScript ; le build de production reste un contrôle complet séparé.

Le premier test vérifie le contrat technique du manifeste du projet : dépôt privé, identité du paquet, version de pnpm et ligne majeure Node.js. Il démontre le fonctionnement réel du moteur sans introduire de logique métier ou de test artificiel sans valeur.

## Commandes de référence attendues

Après installation des dépendances, les commandes suivantes doivent réussir :

```bash
pnpm dev
pnpm lint
pnpm typecheck
pnpm test
pnpm test:e2e
pnpm build
```

La commande de développement est vérifiée par démarrage contrôlé ; elle n'est pas laissée active comme étape d'audit.

## Critères d'acceptation

- [x] L'installation des dépendances est reproductible à partir du fichier de verrouillage.
- [x] pnpm est l'unique gestionnaire de paquets et sa version est fixée dans `package.json`.
- [x] Aucun fichier de verrouillage concurrent n'est présent.
- [x] Le projet utilise Next.js App Router et TypeScript conformément au Sprint 006.
- [x] La structure initiale matérialise les frontières du monolithe modulaire sans logique métier prématurée.
- [ ] Aucun module métier ne dépend directement d'un fournisseur externe.
- [ ] Le code serveur et le code client possèdent des frontières explicites et vérifiables.
- [x] ESLint et Prettier sont configurés et leurs contrôles réussissent.
- [x] La vérification TypeScript stricte réussit.
- [x] Vitest exécute au moins un test de fondation représentatif.
- [ ] Playwright exécute au moins un parcours de disponibilité du socle.
- [x] La construction de production réussit.
- [ ] GitHub Actions exécute les contrôles reproductibles prévus par le Sprint.
- [ ] Les variables d'environnement attendues sont documentées sans secret réel.
- [ ] Le socle Supabase local et le répertoire de migrations sont présents sans schéma métier inventé.
- [ ] Un développeur peut installer, démarrer et contrôler le projet à partir de la documentation.
- [ ] Aucune fonctionnalité métier ou interface produit non prévue n'est implémentée.
- [ ] La traçabilité vers les décisions du Sprint 006 est documentée.
- [ ] L'audit final ne révèle aucun fichier généré, secret ou changement hors périmètre versionné.
- [ ] Le Product Owner valide le Sprint.

## Validation finale

| Élément | Valeur |
|---|---|
| Statut du Sprint | En cours |
| Décision du Product Owner | À compléter |
| Date de validation | À compléter |
| Commit de clôture | À compléter |
| Tag Git | À compléter |
