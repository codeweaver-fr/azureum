# Développement d'AZUREUM

## Prérequis

- Git ;
- Node.js `24.18.0`, idéalement avec NVM for Windows ;
- Corepack et pnpm `10.34.5` ;
- Docker Desktop pour Supabase local.

Vérifier le runtime :

```powershell
nvm install 24.18.0
nvm use 24.18.0
node --version
corepack enable
pnpm --version
```

Les versions attendues sont Node.js `v24.18.0` et pnpm `10.34.5`.

## Installation

```powershell
git clone https://github.com/codeweaver-fr/azureum.git
cd azureum
pnpm install --frozen-lockfile
pnpm test:e2e:install
```

Le projet ne requiert actuellement aucune variable applicative. `.env.example` documente cette absence. Ne jamais versionner `.env`, `.env.local` ou une clé réelle.

## Supabase local

Installer et démarrer Docker Desktop, puis vérifier :

```powershell
docker info
pnpm supabase:start
pnpm supabase:status
```

Arrêter les services locaux :

```powershell
pnpm supabase:stop
```

Reconstruire la base locale depuis les migrations versionnées :

```powershell
pnpm supabase:reset
```

La réinitialisation supprime les données de la base locale. Elle ne doit jamais viser un environnement distant ou de production.

## Développement et contrôles

Démarrer Next.js :

```powershell
pnpm dev
```

Exécuter les tests :

```powershell
pnpm test
pnpm test:watch
pnpm test:e2e
```

Exécuter les contrôles rapides puis la validation complète :

```powershell
pnpm check
pnpm validate
```

`check` vérifie le formatage, ESLint, TypeScript et Vitest. `validate` ajoute le build de production, Playwright et l'audit des dépendances.

## Remise à zéro locale

1. arrêter Next.js ;
2. exécuter `pnpm supabase:reset` si Supabase fonctionne encore ;
3. exécuter `pnpm supabase:stop` ;
4. supprimer uniquement `.next/` si une reconstruction applicative complète est nécessaire ;
5. relancer `pnpm install --frozen-lockfile`, puis les services utiles.

Les dossiers `node_modules/`, `.next/`, `supabase/.temp/` et les fichiers `.env*` locaux ne sont jamais versionnés.
