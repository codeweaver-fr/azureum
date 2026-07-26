# Sprint 011 — Galerie publique

## Statut

**Validé — verrouillage Git en attente, aucune implémentation commencée**

## 1. Objectif

Le Sprint 011 a pour objectif de permettre la consultation publique des collections et
des œuvres d'AZUREUM à partir de données temporaires de démonstration.

Il matérialise exclusivement :

- la liste publique des collections ;
- la consultation d'une collection et des œuvres qui lui appartiennent ;
- la consultation d'une œuvre dans le contexte de sa collection d'origine ;
- la navigation entre ces trois niveaux.

Le Sprint applique les responsabilités déjà validées de `V-PUB-03`, `V-PUB-07` et de
la partie artistique de `V-PUB-04`. Il ne met en œuvre ni persistance, ni gestion
éditoriale, ni acquisition.

Les données et médias utilisés sont temporaires, locaux et destinés uniquement à
valider la composition, la navigation, l'accessibilité et le responsive de la galerie.
Ils ne constituent ni le modèle de données définitif, ni un contenu artistique ou
éditorial officiel d'AZUREUM.

Aucune modification de `src` ne peut commencer avant la validation et le verrouillage
du présent contrat.

## 2. Périmètre

Le Sprint couvre exclusivement :

- la route `/collections` déjà créée par le Sprint 010 ;
- la route `/collections/[collectionSlug]` déjà créée par le Sprint 010 ;
- la route
  `/collections/[collectionSlug]/oeuvres/[artworkSlug]` déjà créée par le Sprint 010 ;
- un jeu local, fini et typé de collections et d'œuvres de démonstration ;
- la résolution locale des paramètres `collectionSlug` et `artworkSlug` ;
- une présentation publique responsive des collections ;
- une présentation publique responsive des œuvres appartenant à une collection ;
- une fiche publique d'œuvre centrée sur sa consultation artistique ;
- la continuité de navigation entre la liste des collections, une collection et une
  œuvre ;
- les états de contenu absents ou de route inconnue nécessaires à ces consultations ;
- l'utilisation exclusive du shell et du Design System existants ;
- les tests et la documentation nécessaires à la validation de ce périmètre.

Le Sprint remplace les contenus structurels temporaires des trois routes concernées. Il
ne modifie pas les responsabilités des autres routes publiques.

## 3. Références normatives

Le présent contrat applique :

- `docs/specifications/functional-specification-v1.md` ;
- `docs/specifications/business-rules-v1.md` ;
- `docs/specifications/product-structure-v1.md` ;
- `docs/specifications/technical-architecture-v1.md` ;
- `docs/specifications/design-system-v1.md` ;
- `docs/sprints/sprint-010-application-shell.md`.

Les références principales sont :

- `BES-VIS-02`, `BES-VIS-03` et `BES-VIS-04` ;
- `CAP-ART-02`, `CAP-ART-04` et `CAP-ART-06` ;
- `CU-VIS-02` ;
- `EF-ART-02`, `EF-ART-04`, `EF-ART-06`, `EF-ART-07` et `EF-ART-08` ;
- `CT-04` et `CT-07` ;
- `PS-01`, `PS-02`, `PS-07` et `PS-08` ;
- `V-PUB-03`, `V-PUB-04` et `V-PUB-07` ;
- `PAR-01` et `PAR-02` ;
- `RM-ŒUV-01` à `RM-ŒUV-05`, `RM-ŒUV-09` et `RM-ŒUV-13` ;
- `INV-01`, `INV-02` et `INV-14` ;
- `DEC-18` et la section 8.6 de l'architecture technique ;
- `RC-01`, `RC-02`, `RC-08`, `MEP-01` à `MEP-05`, `RSP-01` à `RSP-07`,
  `ACC-06`, `CMP-01` à `CMP-04` et `CMP-07`.

En cas de divergence, les spécifications normatives prévalent sur les données de
démonstration et sur l'implémentation.

## 4. Responsabilités fonctionnelles

### 4.1 Liste des collections — `V-PUB-03`

La liste des collections :

- présente les collections comme l'accès public principal aux œuvres ;
- permet d'identifier chaque collection disponible dans le jeu de démonstration ;
- présente pour chaque collection une image d'aperçu, son titre et une courte intention ;
- permet de rejoindre la route publique stable de chaque collection ;
- n'organise pas la consultation selon le prix, la disponibilité ou une intention
  commerciale ;
- ne fournit ni recherche, ni filtre, ni tri interactif.

### 4.2 Collection — `V-PUB-07`

La consultation d'une collection :

- présente son identité et son intention artistique de démonstration ;
- présente toutes les œuvres de démonstration qui lui sont rattachées ;
- permet de rejoindre la fiche de chacune de ces œuvres ;
- conserve explicitement la collection comme contexte de navigation ;
- ne présente aucune œuvre appartenant à une autre collection ;
- ne simule aucun contenu contextuel absent du jeu de démonstration.

### 4.3 Œuvre — partie artistique de `V-PUB-04`

La consultation d'une œuvre :

- présente d'abord une image principale de démonstration, puis son titre et un texte
  artistique temporaire nécessaire à son identification ;
- conserve le ratio original du média de démonstration dans la présentation principale ;
- identifie sa collection d'origine et permet d'y revenir ;
- reste consultable en l'absence de contenu contextuel complémentaire ;
- n'affiche ni prix, ni disponibilité commerciale, ni condition d'acquisition, ni
  appel à l'acquisition.

## 5. Données temporaires de démonstration

### 5.1 Nature

Le jeu de données :

- est local au dépôt ;
- est lu sans appel réseau ;
- est immuable pendant l'exécution ;
- contient exactement deux collections de démonstration ;
- contient exactement trois œuvres par collection, soit six œuvres au total ;
- ne dépend d'aucune variable d'environnement ;
- ne dépend ni de Supabase, ni d'une base de données, ni d'une API ;
- est explicitement identifié dans le code et les tests comme un jeu de démonstration ;
- peut être remplacé intégralement dans un Sprint ultérieur sans migration de données.

Les intitulés, descriptions et images sont manifestement fictifs et ne peuvent être
confondus avec des contenus officiels de David. Ils utilisent des conventions neutres
comme « Collection Alpha », « Collection Bêta », « Étude 01 » ou « Composition A » et
ne contiennent aucune information présentée comme un fait réel non validé concernant
David, ses œuvres ou ses collections.

Les six œuvres de démonstration couvrent des ratios suffisamment variés pour exercer les
compositions responsive. Le jeu contient au minimum une image verticale et une image
horizontale, sans augmenter le nombre d'œuvres prévu.

### 5.2 Structure minimale

La structure locale contient uniquement les informations nécessaires aux vues du Sprint :

Pour une collection :

- un slug public de démonstration ;
- un titre ;
- une intention ou présentation courte ;
- la référence d'une œuvre de la collection utilisée comme image d'aperçu ;
- les références de ses œuvres.

Pour une œuvre :

- un slug public de démonstration ;
- le slug de son unique collection ;
- un titre ;
- des informations artistiques courtes de démonstration ;
- une source d'image locale ;
- une alternative textuelle adaptée ;
- les dimensions intrinsèques nécessaires au média.

Cette structure constitue une décision technique temporaire du Sprint. Elle ne définit
pas le futur schéma PostgreSQL, les contrats d'API ou le modèle éditorial définitif.

### 5.3 Cohérence

Le jeu de démonstration doit garantir que :

- les deux collections contiennent chacune exactement trois œuvres ;
- chaque œuvre appartient à exactement une collection ;
- aucune œuvre orpheline n'existe ;
- l'œuvre utilisée comme aperçu d'une collection appartient à cette collection ;
- au moins une œuvre utilise un média vertical et une autre un média horizontal ;
- chaque slug est unique dans son périmètre ;
- le slug de collection présent dans l'URL d'une œuvre correspond à son rattachement ;
- les relations affichées proviennent exclusivement du jeu déclaré ;
- aucune relation artistique ou contextuelle n'est inventée dynamiquement.

## 6. Routage et résolution

Les routes verrouillées au Sprint 010 sont conservées sans modification :

```text
/collections
/collections/[collectionSlug]
/collections/[collectionSlug]/oeuvres/[artworkSlug]
```

La résolution des slugs s'effectue uniquement dans le jeu local de démonstration.

Une collection inconnue, une œuvre inconnue ou une combinaison incohérente entre
`collectionSlug` et `artworkSlug` ne doit jamais afficher silencieusement une autre
ressource. Elle produit l'état de route absente fourni par l'App Router.

Aucune redirection, aucun alias et aucun historique de slug ne sont introduits.

## 7. Composition des vues

### 7.1 Principes

Les vues :

- utilisent le shell public existant ;
- restent des Server Components par défaut ;
- utilisent les primitives officielles du Design System ;
- privilégient les éléments HTML sémantiques ;
- maintiennent une densité aérée ;
- respectent la hiérarchie visuelle définie par le Design System ;
- ne créent aucune primitive supplémentaire dans le Design System.

Des composants propres au domaine de la galerie peuvent être colocalisés dans un module
fonctionnel lorsqu'ils servent au moins deux vues. Ils ne sont pas exportés comme
primitives publiques du Design System. Ils restent confinés aux routes de la galerie et
ne peuvent être réutilisés hors de ce domaine sans arbitrage explicite.

### 7.2 Aperçus de collection et d'œuvre

Un aperçu :

- constitue un accès vers une destination publique existante ;
- expose un nom accessible compréhensible ;
- ne contient aucune interaction imbriquée ;
- utilise `ArtworkImage` uniquement lorsqu'il présente effectivement une œuvre ;
- conserve les informations textuelles essentielles si le média est indisponible ;
- n'utilise aucun recadrage automatique non validé ;
- ne prend pas l'apparence d'un composant commercial.

Sur `/collections`, chaque aperçu de collection présente l'œuvre de démonstration
explicitement désignée par la collection, son titre et sa courte intention.

Sur `/collections/[collectionSlug]`, chaque aperçu d'œuvre présente son image et son
titre, puis permet de rejoindre sa fiche.

Le Sprint ne crée pas de composant générique `Card` dans le Design System.

### 7.3 Fiche d'œuvre

L'image principale :

- utilise `ArtworkImage` ;
- est informative ;
- conserve son ratio ;
- réserve son espace avant chargement ;
- utilise une source locale de démonstration ;
- ne reçoit ni zoom, ni lightbox, ni watermark, ni animation dédiée.

Les informations associées restent distinctes du média et accessibles sans dépendre
uniquement de sa présence.

Après l'image principale, la fiche présente le titre puis le texte artistique temporaire.
Un lien textuel explicite permet ensuite de revenir à la collection d'origine.

## 8. Navigation et continuité

La navigation attendue est :

```text
Collections
→ Collection
→ Œuvre
→ Collection d'origine
```

Chaque vue conserve :

- un `h1` unique ;
- un repère textuel du contexte consulté ;
- un accès explicite à l'étape parente lorsqu'elle existe ;
- les URL stables définies par le Sprint 010.

La collection demeure l'accès structurant. Aucune route autonome `/oeuvres/...` n'est
créée.

Aucun fil d'Ariane générique n'est ajouté au Design System. Une navigation contextuelle
locale peut être utilisée uniquement pour matérialiser les relations déjà prescrites.

## 9. Médias

Les médias de démonstration :

- sont stockés localement ;
- utilisent exclusivement des médias locaux de démonstration ;
- ne sont pas présentés comme des originaux privés ;
- disposent d'une alternative adaptée ;
- n'exigent aucun `remotePattern` ;
- ne provoquent aucun déplacement de mise en page ;
- restent secondaires dans les aperçus et dominants sur la fiche d'œuvre ;
- ne sont jamais remplacés par un visuel pouvant être confondu avec une œuvre réelle en
  cas d'erreur.

Le Sprint ne crée aucun pipeline média, traitement d'image ou stockage distant.

## 10. Responsive et accessibilité

L'implémentation est mobile-first et utilise uniquement les points de rupture `DT-10`.

Elle garantit :

- une colonne principale sur les espaces compacts ;
- une grille pouvant s'enrichir sur tablette et bureau sans imposer un nombre artificiel
  d'éléments ;
- la conservation des ratios des médias verticaux, horizontaux et panoramiques ;
- l'absence de débordement horizontal ;
- une utilisation à 200 % de zoom ;
- un ordre des titres cohérent ;
- un ordre de lecture indépendant de la seule composition visuelle ;
- des liens utilisables au clavier avec un focus visible ;
- des noms accessibles explicites pour les accès aux collections et aux œuvres ;
- des alternatives textuelles adaptées aux œuvres ;
- une compréhension qui ne dépend ni de la couleur, ni du survol ;
- la disponibilité des titres et informations essentielles lorsqu'une image échoue.

## 11. Architecture et intégration

La logique de démonstration propre à la galerie est isolée du shell et des primitives
transversales.

L'implémentation :

- respecte les frontières `app`, `modules`, `shared` et `server` déjà documentées ;
- place le modèle temporaire, ses données et ses fonctions de résolution dans le domaine
  de la galerie, sans les exporter comme API générale ;
- compose les pages depuis l'App Router ;
- n'introduit une frontière Client Component que si une API du navigateur ou un état
  interactif validé l'exige ;
- ne modifie pas les API publiques du Design System ;
- n'ajoute aucune dépendance ;
- ne modifie ni `next.config`, ni les variables d'environnement.

## 12. États traités

Le Sprint traite exclusivement :

- la liste non vide fournie par le jeu de démonstration ;
- une collection contenant les œuvres qui lui sont rattachées ;
- une route dynamique inconnue ;
- une combinaison collection–œuvre incohérente ;
- l'indisponibilité d'une image au moyen du comportement existant d'`ArtworkImage`.

Un état de liste vide peut être testé au niveau contractuel, mais aucune interface de
gestion ou action de création n'est proposée.

## 13. Livrables

Les livrables sont :

- le présent contrat validé et verrouillé ;
- le module fonctionnel de galerie publique et son jeu local de démonstration ;
- la page publique des collections ;
- la page publique d'une collection ;
- la page publique d'une œuvre ;
- les composants locaux strictement nécessaires à ces vues ;
- les médias techniques locaux de démonstration ;
- les tests unitaires et contractuels du modèle temporaire et de ses relations ;
- les tests Playwright de navigation, responsive et accessibilité ;
- la mise à jour de `PROJECT_STATE.md` et `CHANGELOG.md` à la clôture ;
- le rapport d'audit final du Sprint.

## 14. Hors périmètre

Sont explicitement exclus :

- Supabase ;
- toute base de données ;
- toute migration ou donnée persistante ;
- toute API, route handler ou Server Action ;
- toute authentification, autorisation ou espace privé ;
- la gestion, la création, la modification, la publication ou l'archivage des collections
  et œuvres ;
- les données artistiques définitives de David ;
- les images d'œuvres définitives et les originaux privés ;
- les sources distantes et leur configuration ;
- les contenus artistiques de `V-PUB-05` ;
- la chronologie de `V-PUB-06` ;
- la page éditoriale définitive de David ;
- la page d'accueil éditoriale définitive ;
- le prix, la disponibilité et les conditions d'acquisition ;
- tout bouton ou parcours d'acquisition ;
- le panier, la commande et le paiement ;
- la recherche, le filtrage, le tri utilisateur et la pagination ;
- les favoris, le partage et les commentaires ;
- le zoom, la lightbox, le plein écran et le téléchargement d'œuvre ;
- un fil d'Ariane générique ;
- les métadonnées SEO éditoriales définitives ;
- l'extension du Design System ;
- toute nouvelle route publique ;
- la protection ou l'exclusion de `/design-system` ;
- toute anticipation du Sprint suivant.

## 15. Critères d'acceptation

Le Sprint est acceptable uniquement si :

### Données

- le jeu de démonstration est local, typé, fini et sans dépendance externe ;
- il est explicitement non définitif ;
- il contient exactement deux collections et trois œuvres par collection ;
- ses intitulés, descriptions et médias sont manifestement fictifs ;
- il couvre au minimum un ratio vertical et un ratio horizontal ;
- chaque œuvre appartient à exactement une collection ;
- les slugs sont uniques et les relations collection–œuvre sont cohérentes ;
- aucun modèle de persistance ou contrat d'API définitif n'est introduit.

### Collections

- `/collections` présente les collections de démonstration ;
- chaque aperçu présente une image, un titre et une courte intention ;
- chaque collection permet de rejoindre sa route stable ;
- aucune information commerciale n'organise la liste ;
- aucune recherche, aucun filtre ni aucun tri interactif n'est présent.

### Collection

- une collection présente son identité, son intention et toutes ses œuvres de
  démonstration ;
- chaque collection contient exactement trois œuvres ;
- aucune œuvre d'une autre collection n'est affichée ;
- chaque œuvre permet de rejoindre sa fiche dans le contexte de la collection ;
- une collection inconnue n'affiche aucune donnée de remplacement trompeuse.

### Œuvre

- une œuvre présente son image et ses informations artistiques temporaires ;
- l'image précède le titre et le texte artistique temporaire ;
- son image principale conserve son ratio et utilise `ArtworkImage` ;
- sa collection d'origine est identifiable et accessible ;
- aucune possibilité d'acquisition n'est simulée ;
- une œuvre inconnue ou incohérente avec la collection demandée produit un état absent.

### Design System et accessibilité

- seuls les composants et tokens officiels sont utilisés pour les responsabilités qu'ils
  couvrent ;
- aucun token candidat ni aucune valeur visuelle locale injustifiée n'est introduit ;
- aucun nouveau contrat public du Design System n'est créé ;
- chaque page possède un unique `h1` ;
- les médias informatifs possèdent une alternative adaptée ;
- le parcours complet est utilisable au clavier ;
- le focus reste visible ;
- le contenu reste compréhensible lorsque les médias sont indisponibles.

### Responsive et qualité

- les vues sont utilisables sur mobile, tablette et bureau ;
- aucun débordement horizontal global n'est observé ;
- les médias conservent leurs ratios ;
- le shell et `/design-system` ne subissent aucune régression ;
- Prettier, ESLint, TypeScript, Vitest, le build Next.js et Playwright sont conformes ;
- `git diff --check` est conforme ;
- `pnpm audit` est exécuté et l'exception temporaire déjà documentée est rapportée
  exactement si elle subsiste ;
- aucun `any` ou `as any` n'est ajouté ;
- aucun fichier hors périmètre n'est modifié sans justification.

## 16. Séquence d'implémentation

L'implémentation est menée par incréments validables :

1. contrat, branche et inventaire des actifs temporaires ;
2. modèle local typé, jeu de démonstration et fonctions de résolution ;
3. liste publique des collections ;
4. consultation d'une collection et de ses œuvres ;
5. consultation d'une œuvre et retour à sa collection ;
6. médias, états absents et robustesse des routes dynamiques ;
7. responsive, accessibilité et validations transversales ;
8. audit final, synchronisation documentaire et verrouillage.

Aucun incrément ne commence avant validation de l'incrément précédent.

## 17. Séquence de revue et de verrouillage

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
- les données temporaires restent clairement séparées de toute future persistance ;
- aucun bloqueur indispensable ne reste ouvert ;
- les exceptions connues sont explicitement documentées ;
- le dépôt est propre ;
- le tag officiel est créé et poussé après validation finale.

Toute demande découverte pendant l'implémentation et relevant du contenu éditorial
définitif, des données persistantes, de la gestion artistique, de l'acquisition, de
l'authentification, des espaces privés ou d'une extension du Design System est exclue ou
soumise à un arbitrage explicite.
