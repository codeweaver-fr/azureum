# Sprint 010 — Application Shell

## Statut

**Validé, verrouillé et fusionné dans `main` — tag `sprint-010`**

## 1. Objectif

Le Sprint 010 a pour objectif d'implémenter le shell applicatif public d'AZUREUM.

Le shell fournit la structure persistante commune aux vues publiques de la V1 :

- un Header ;
- un Main ;
- un Footer ;
- une navigation publique accessible et responsive.

Le Sprint établit également la correspondance technique entre les URL et les vues publiques déjà validées.

Il ne crée aucune décision fonctionnelle, métier, produit ou visuelle. Il applique les spécifications normatives existantes et le Design System officiel.

Aucune modification de `src` ne peut commencer avant la validation et le verrouillage du présent contrat.

## 2. Périmètre

Le Sprint couvre exclusivement :

- le layout public partagé ;
- la structure persistante Header, Main et Footer ;
- le lien d'évitement vers le contenu principal ;
- la navigation publique principale ;
- son adaptation responsive ;
- les routes publiques définies par le présent contrat ;
- des pages structurelles minimales pour ces routes ;
- l'intégration des composants et tokens officiels du Design System ;
- les contrôles d'accessibilité, de responsive et de navigation clavier ;
- la documentation et les tests nécessaires à la validation du shell.

Les pages minimales servent uniquement à vérifier le routage et l'intégration au shell. Elles ne simulent aucune fonctionnalité métier future.

## 3. Références normatives

Le présent contrat applique :

- `docs/specifications/functional-specification-v1.md` ;
- `docs/specifications/business-rules-v1.md` ;
- `docs/specifications/product-structure-v1.md` ;
- `docs/specifications/technical-architecture-v1.md` ;
- `docs/specifications/design-system-v1.md` ;
- `docs/sprints/sprint-009-design-system-implementation.md` ;
- `docs/GOVERNANCE.md`.

Sont notamment applicables :

- `RM-ŒUV-13` et `INV-14` pour le rattachement d'une œuvre à sa collection ;
- `DEC-18` et la section 8.6 de l'architecture technique pour la stabilité des identifiants publics.

Le présent contrat référence ces règles sans les redéfinir.

En cas de divergence :

1. la gouvernance s'applique ;
2. les spécifications validées prévalent ;
3. le Sprint ne peut préciser que les décisions techniques nécessaires au shell ;
4. aucune précision technique ne peut modifier un contrat amont.

## 4. Responsabilités du shell applicatif

Le shell doit :

- fournir une structure publique commune ;
- rendre la navigation principale accessible ;
- fournir les landmarks sémantiques persistants ;
- contenir un Main unique et identifiable ;
- préserver l'accès au contenu sur mobile, tablette et bureau ;
- garantir que les éléments persistants ne masquent pas le focus ;
- appliquer le Design System officiel ;
- accueillir le contenu propre à chaque page sans porter sa logique métier.

Le shell ne doit pas :

- charger ou transformer des données métier ;
- fournir le titre principal d'une page ;
- décider de la disponibilité d'une œuvre ;
- gérer une acquisition, un compte, une commande ou une autorisation ;
- administrer des contenus ;
- simuler un état utilisateur ou métier.

Chaque page est responsable de son contenu et de son unique titre principal `h1`.

## 5. Structure globale

La structure sémantique minimale est :

```text
Body
├── Skip link
├── Header
│   └── Navigation publique
├── Main
│   └── Contenu propre à la page
└── Footer
```

Le shell est fourni par un layout partagé de l'App Router.

Les Server Components sont utilisés par défaut. Une frontière cliente ne peut être introduite qu'au niveau minimal nécessitant réellement un état interactif ou une API du navigateur.

### 5.1 Header

Le Header contient :

- l'identité AZUREUM, qui renvoie vers `/` ;
- la navigation publique principale ;
- le mécanisme responsive nécessaire à son utilisation sur les formats étroits.

Il ne contient aucun :

- état de connexion simulé ;
- accès fictif à un espace privé ;
- panier ou compteur métier ;
- moteur de recherche ;
- filtre ;
- comportement dépendant de données métier.

### 5.2 Main

Le shell rend un unique élément `main` doté d'un identifiant stable pour le skip link.

Le Main :

- accueille le contenu fourni par la page ;
- utilise le conteneur public fluide et centré du Design System ;
- reste utilisable à 200 % de zoom ;
- ne provoque aucun débordement horizontal global.

La largeur maximale du conteneur public reste celle prescrite par le Design System : 1440 pixels.

Le Main ne génère aucun `h1`. Chaque page doit fournir le sien.

### 5.3 Footer

Le Footer fournit uniquement les contenus réellement validés et disponibles pendant ce Sprint.

Il peut contenir :

- l'identité ou un rappel institutionnel d'AZUREUM ;
- une navigation secondaire composée exclusivement de destinations existantes et validées.

Il ne doit rendre :

- aucun emplacement vide ;
- aucun faux lien ;
- aucune route juridique anticipée ;
- aucun texte légal ou contractuel non validé.

Son extension future aux informations institutionnelles, contractuelles et légales reste possible sans être matérialisée dans l'interface actuelle.

## 6. Navigation publique et correspondance URL ↔ vues V1

### 6.1 Nature de la décision

Les spécifications antérieures définissent les vues et destinations publiques, mais excluent les URL définitives.

Le Sprint 010 établit leur correspondance technique sans créer de vue fonctionnelle ni modifier la structure produit.

### 6.2 Navigation principale

La navigation du Header est figée comme suit :

| Ordre | Libellé | Destination |
|---:|---|---|
| 1 | Collections | `/collections` |
| 2 | David | `/david` |
| 3 | Évolution dans le temps | `/chronologie` |

L'identité AZUREUM renvoie vers `/`.

Les œuvres restent accessibles principalement par les collections. Les contenus artistiques restent des destinations contextuelles et ne figurent pas dans la navigation principale.

### 6.3 Routes officielles

| Vue | Destination | Route |
|---|---|---|
| `V-PUB-01` | Entrée dans AZUREUM | `/` |
| `V-PUB-02` | David et sa démarche | `/david` |
| `V-PUB-03` | Liste des collections | `/collections` |
| `V-PUB-07` | Une collection | `/collections/[collectionSlug]` |
| `V-PUB-04` | Une œuvre | `/collections/[collectionSlug]/oeuvres/[artworkSlug]` |
| `V-PUB-05` | Un contenu artistique | `/contenus/[contentSlug]` |
| `V-PUB-06` | Évolution dans le temps | `/chronologie` |

### 6.4 Paramètres dynamiques

Les paramètres publics utilisent les slugs prescrits par `DEC-18` et la section 8.6 de l'architecture technique.

Le Sprint n'implémente :

- aucun mécanisme métier de génération des slugs ;
- aucun stockage ;
- aucune validation de disponibilité ;
- aucune migration ;
- aucune redirection d'ancien slug.

Les données strictement nécessaires aux pages structurelles doivent être identifiées comme temporaires et ne doivent pas simuler le futur modèle métier.

### 6.5 Navigation entre collection, œuvre et contexte

Les collections constituent l'accès public principal aux œuvres.

La page minimale d'une œuvre doit permettre d'identifier et de rejoindre sa collection d'origine, sans introduire de fil d'Ariane ou de composant métier non contractuel.

### 6.6 Routes institutionnelles, contractuelles et légales

Aucune route institutionnelle, contractuelle ou juridique n'est créée tant que sa nécessité, son intitulé et son contenu ne sont pas validés.

### 6.7 Espaces privés

Les espaces acquisition, suivi, membre, artiste et administration :

- ne reçoivent aucun préfixe réservé ;
- ne disposent d'aucune page vide ;
- ne produisent aucune route fictive ;
- n'apparaissent pas dans la navigation publique.

## 7. Comportement responsive

L'implémentation est mobile-first et utilise exclusivement les points de rupture de `DT-10`.

### 7.1 Header

Lorsque la navigation complète ne peut rester lisible, le Header fournit un mécanisme compact accessible.

Ce mécanisme doit :

- être utilisable au clavier ;
- exposer son état ouvert ou fermé ;
- rendre accessibles les mêmes destinations que sur desktop ;
- ne pas emprisonner le focus ;
- se fermer de manière prévisible ;
- ne masquer ni le contenu essentiel ni le focus courant.

Les capacités natives du navigateur sont privilégiées lorsqu'elles satisfont le contrat.

### 7.2 Main et Footer

Le Main et le Footer doivent :

- conserver des largeurs fluides ;
- respecter les espacements officiels ;
- préserver un ordre de lecture cohérent ;
- rester utilisables à 200 % de zoom ;
- ne produire aucun débordement horizontal global.

## 8. Accessibilité et navigation clavier

Le shell respecte les exigences applicables de WCAG 2.2 niveau AA déjà prescrites.

Il doit garantir :

- les landmarks `header`, `nav`, `main` et `footer` ;
- des noms accessibles distincts lorsque plusieurs navigations existent ;
- un skip link comme premier élément interactif pertinent ;
- un ordre de focus conforme à l'ordre du document ;
- l'absence de `tabindex` positif ;
- un focus visible conforme au Design System ;
- l'absence de masquage du focus par un élément persistant ;
- l'exposition accessible de l'état de la navigation compacte ;
- une utilisation complète sans souris ;
- un reflow utilisable à 200 % de zoom.

Le lien représentant la page courante doit être identifiable par les technologies d'assistance lorsque cela s'applique.

## 9. Intégration du Design System

Le shell utilise exclusivement le Design System verrouillé par les Sprints 008, 008-r1 et 009.

L'implémentation doit :

- utiliser les tokens officiels ;
- réutiliser les primitives existantes lorsqu'elles correspondent au besoin ;
- respecter leurs contrats publics ;
- ne créer aucune variante locale ;
- ne reproduire aucune primitive existante ;
- ne contenir aucun token `--candidate-*` ;
- ne contourner aucun token par une valeur visuelle arbitraire.

Les composants réutilisables attendus comprennent notamment `Container`, `Text`, `Heading`, `Link`, `Button` et `Icon`, uniquement lorsque leur responsabilité correspond au besoin.

Toute lacune réelle du Design System doit être signalée et arbitrée. Aucun contournement silencieux ni aucune extension implicite n'est autorisé dans ce Sprint.

## 10. Gestion de la route `/design-system`

`/design-system` est une référence technique interne créée au Sprint 009.

Cette route :

- ne fait pas partie du produit AZUREUM ;
- ne constitue pas une destination fonctionnelle ;
- ne doit jamais apparaître dans la navigation publique ;
- reste inchangée pendant le Sprint 010.

Le Sprint 010 n'ajoute :

- aucune condition liée à l'environnement ;
- aucune protection ;
- aucun mécanisme d'authentification ;
- aucun test d'exclusion en production.

La décision de protection ou d'exclusion de cette route appartient à un futur Sprint consacré à la sécurité et au déploiement.

## 11. Livrables

Le Sprint doit livrer :

1. le présent contrat validé et verrouillé ;
2. le layout public partagé ;
3. le Header public ;
4. le Main commun ;
5. le Footer public ;
6. le skip link ;
7. la navigation responsive ;
8. les routes publiques définies en section 6 ;
9. leurs pages structurelles minimales ;
10. les tests du shell, du routage et de la navigation ;
11. la documentation de l'implémentation ;
12. la synchronisation de `PROJECT_STATE.md` et `CHANGELOG.md`.

## 12. Hors périmètre

Sont notamment exclus :

- Supabase, Docker, base de données et migrations ;
- authentification, autorisation, rôles et espaces privés ;
- acquisition, panier, commande, paiement, certificat et suivi ;
- gestion des œuvres et des collections ;
- recherche et filtres ;
- galerie fonctionnelle et contenus artistiques réels ;
- chronologie fonctionnelle ;
- données de production ;
- textes et routes juridiques ;
- génération, édition ou migration métier des slugs ;
- redirections d'anciens slugs ;
- SEO métier complet et métadonnées éditoriales définitives ;
- extension du Design System ;
- protection ou exclusion technique de `/design-system`.

## 13. Critères d'acceptation

Le Sprint est acceptable uniquement si :

### Structure

- un layout public partagé contient Header, Main et Footer ;
- un seul Main est rendu par page ;
- chaque page fournit un unique `h1` identifiable ;
- le skip link cible correctement le Main ;
- aucun emplacement vide ou faux lien n'est rendu.

### Routage et navigation

- toutes les routes de la section 6 sont matérialisées ;
- chaque route utilise le shell public ;
- le Header respecte exactement l'ordre, les libellés et les destinations validés ;
- l'identité AZUREUM renvoie vers `/` ;
- les collections restent l'accès principal aux œuvres ;
- une œuvre conserve un accès identifiable à sa collection ;
- aucune route privée ou juridique fictive n'existe ;
- `/design-system` n'apparaît jamais dans la navigation publique.

### Responsive et accessibilité

- seuls les points de rupture `DT-10` sont utilisés ;
- la navigation compacte est accessible au clavier ;
- aucun contenu essentiel n'est masqué ;
- aucun débordement horizontal global n'est observé ;
- le shell reste utilisable à 200 % de zoom ;
- les landmarks, l'ordre de focus et le focus visible sont conformes ;
- aucun élément persistant ne masque le focus.

### Design System

- les composants et tokens officiels sont utilisés ;
- aucun token candidat ni aucune valeur visuelle locale injustifiée n'est introduit ;
- aucun contrat public du Design System n'est modifié ;
- aucune nouvelle variante visuelle n'est créée.

### Qualité

- Prettier est conforme ;
- ESLint est conforme ;
- TypeScript est conforme ;
- Vitest est conforme ;
- le build Next.js est conforme ;
- Playwright est conforme ;
- `git diff --check` est conforme ;
- `pnpm audit` est exécuté et toute vulnérabilité restante est signalée avec son exception documentée, sans être présentée comme résolue ;
- aucune régression n'affecte `/` ou `/design-system` ;
- aucun `any` ou `as any` n'est ajouté ;
- aucun fichier hors périmètre n'est modifié sans justification.

## 14. Séquence d'implémentation

L'implémentation est menée par incréments validables :

1. contrat et branche ;
2. structure du layout, landmarks et skip link ;
3. Header et navigation desktop ;
4. navigation responsive ;
5. routes et pages structurelles ;
6. Footer ;
7. tests, accessibilité et responsive ;
8. audit final et synchronisation documentaire.

Aucun incrément ne commence avant validation de l'incrément précédent.

## 15. Séquence de revue et de verrouillage

```text
Conception
→ Validation Product Owner
→ Revue Codex
→ Corrections
→ Verrouillage du contrat
→ Commit documentaire
→ Implémentation incrémentale
→ Revue technique
→ Validation complète
→ Mise à jour documentaire
→ Commit de clôture
→ Tag du Sprint
→ Pull Request
→ Fusion dans main
→ Nettoyage des branches
```

Le Sprint ne peut être déclaré terminé que si :

- le contrat correspond à l'implémentation ;
- tous les critères d'acceptation sont satisfaits ;
- aucun bloqueur indispensable ne reste ouvert ;
- les exceptions connues sont explicitement documentées ;
- le dépôt est propre ;
- le tag officiel est créé et poussé après validation finale.

Toute demande découverte pendant l'implémentation et relevant du métier, du produit, de l'éditorial, des données, de la sécurité complète, de l'authentification, du commerce, des espaces privés ou d'une extension du Design System est exclue ou soumise à un arbitrage explicite.
