import type { GalleryArtwork, GalleryCollection } from "./types";

export const galleryCollections: readonly GalleryCollection[] = Object.freeze([
  Object.freeze({
    slug: "collection-alpha",
    title: "Collection Alpha",
    intention:
      "Une collection fictive consacrée aux formes calmes, aux équilibres fragiles et aux espaces silencieux.",
    previewArtworkSlug: "study-01",
    artworkSlugs: Object.freeze([
      "study-01",
      "study-02",
      "study-03",
    ]) as readonly ["study-01", "study-02", "study-03"],
  }),
  Object.freeze({
    slug: "collection-beta",
    title: "Collection Bêta",
    intention:
      "Une collection fictive explorant le mouvement, les tensions graphiques et les rythmes abstraits.",
    previewArtworkSlug: "composition-a",
    artworkSlugs: Object.freeze([
      "composition-a",
      "composition-b",
      "composition-c",
    ]) as readonly ["composition-a", "composition-b", "composition-c"],
  }),
]);

export const galleryArtworks: readonly GalleryArtwork[] = Object.freeze([
  Object.freeze({
    slug: "study-01",
    collectionSlug: "collection-alpha",
    title: "Étude fictive 01",
    artisticText:
      "Des formes suspendues semblent chercher un équilibre provisoire dans un espace volontairement silencieux.",
    media: Object.freeze({
      src: "/gallery/study-01.webp",
      alt: "Composition abstraite fictive verticale faite de formes superposées.",
      orientation: "portrait",
      dimensions: Object.freeze({
        width: 1024,
        height: 1536,
      }),
    }),
  }),

  Object.freeze({
    slug: "study-02",
    collectionSlug: "collection-alpha",
    title: "Étude fictive 02",
    artisticText:
      "Une ligne discrète traverse la composition et relie des volumes éloignés sans interrompre leur calme.",
    media: Object.freeze({
      src: "/gallery/study-02.webp",
      alt: "Composition abstraite fictive horizontale traversée par une ligne centrale.",
      orientation: "landscape",
      dimensions: Object.freeze({
        width: 1536,
        height: 1024,
      }),
    }),
  }),

  Object.freeze({
    slug: "study-03",
    collectionSlug: "collection-alpha",
    title: "Étude fictive 03",
    artisticText:
      "Les volumes se rapprochent sans se toucher, laissant apparaître un vide central comme point de respiration.",
    media: Object.freeze({
      src: "/gallery/study-03.webp",
      alt: "Composition abstraite fictive carrée organisée autour d’un espace vide central.",
      orientation: "square",
      dimensions: Object.freeze({
        width: 1254,
        height: 1254,
      }),
    }),
  }),

  Object.freeze({
    slug: "composition-a",
    collectionSlug: "collection-beta",
    title: "Composition fictive A",
    artisticText:
      "Des lignes noires et des volumes architecturaux traversent l’espace horizontal, tandis qu’un disque ocre suspend leur mouvement.",
    media: Object.freeze({
      src: "/gallery/composition-a.webp",
      alt: "Composition abstraite horizontale formée de blocs beiges, gris et noirs, d’arcs géométriques et d’un cercle ocre.",
      orientation: "landscape",
      dimensions: Object.freeze({
        width: 1536,
        height: 1024,
      }),
    }),
  }),

  Object.freeze({
    slug: "composition-b",
    collectionSlug: "collection-beta",
    title: "Composition fictive B",
    artisticText:
      "Les formes s’élèvent en colonnes irrégulières, reliées par des courbes et des lignes fines qui accentuent leur verticalité.",
    media: Object.freeze({
      src: "/gallery/composition-b.webp",
      alt: "Composition abstraite verticale faite de colonnes beiges et noires, de formes courbes et d’un cercle ocre.",
      orientation: "portrait",
      dimensions: Object.freeze({
        width: 1024,
        height: 1536,
      }),
    }),
  }),

  Object.freeze({
    slug: "composition-c",
    collectionSlug: "collection-beta",
    title: "Composition fictive C",
    artisticText:
      "Des fragments rectangulaires et des arcs imbriqués convergent vers un noyau central dans un équilibre dense et mesuré.",
    media: Object.freeze({
      src: "/gallery/composition-c.webp",
      alt: "Composition abstraite carrée faite de rectangles superposés, d’arcs géométriques et d’un cercle ocre.",
      orientation: "square",
      dimensions: Object.freeze({
        width: 1254,
        height: 1254,
      }),
    }),
  }),
]);
