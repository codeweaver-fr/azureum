# Styles globaux

Ce dossier contient uniquement les fondations transversales du Design System V1 :

- `tokens.css` expose les tokens validés sous forme de propriétés personnalisées CSS ;
- `reset.css` normalise les comportements natifs nécessaires ;
- `accessibility.css` centralise le focus visible, la sélection et la réduction des mouvements ;
- `media.css` définit le comportement global minimal des médias.

Les styles propres à un composant restent colocalisés avec celui-ci dans un CSS Module.
Les valeurs visuelles locales sont interdites lorsqu'un token existe.

Le rendu typographique natif du navigateur est conservé. Les propriétés non standardisées
`-webkit-font-smoothing` et `-moz-osx-font-smoothing`, ainsi que l'application globale de
`text-rendering: optimizeLegibility`, ne font pas partie des fondations.
