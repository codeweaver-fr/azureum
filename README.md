# AZUREUM

AZUREUM est une galerie d'art numérique premium consacrée à David Prieur-Gélis. Sa mission est de faire découvrir, comprendre et transmettre sa démarche artistique dans un environnement numérique où l'acquisition des œuvres s'intègre naturellement à l'expérience, sans jamais la définir.

## État du projet

Le projet est entré dans sa phase de construction. Le Sprint 007 met en place les fondations techniques reproductibles, sans logique métier ni interface définitive.

Le socle comprend Next.js, TypeScript, pnpm, ESLint, Prettier, Vitest, Playwright, GitHub Actions et la fondation Supabase locale.

## Démarrage rapide

```powershell
pnpm install --frozen-lockfile
pnpm test:e2e:install
pnpm check
pnpm build
```

Le guide complet d'installation, de tests et d'environnement local est disponible dans `docs/DEVELOPMENT.md`.

## Méthode

Le projet est construit par Sprints courts et contrôlés :

- un objectif principal par Sprint ;
- contrats avant implémentation ;
- décisions documentées ;
- tests obligatoires pour la logique sensible ;
- validation explicite avant le Sprint suivant ;
- aucun code sans périmètre validé.

Voir `PROJECT_STATE.md` pour connaître l'état actuel, `docs/QUICK_REFERENCE.md` pour retrouver rapidement les décisions structurantes et `docs/sprints/SPRINT_002_PRODUCT_VISION.md` pour consulter la vision produit validée.
