import type { TimelineMarker } from "./types";

export const timelineMarkers: readonly TimelineMarker[] = Object.freeze([
  Object.freeze({
    id: "demo-2023-composition-research",
    year: 2023,
    period: "Premières recherches — période fictive",
    title: "Recherches de composition — repère fictif",
    summary:
      "Exploration fictive de premières pistes graphiques et d'expérimentations de composition.",
    artworkReferences: Object.freeze([
      Object.freeze({
        collectionSlug: "collection-alpha",
        artworkSlug: "study-01",
      }),
      Object.freeze({
        collectionSlug: "collection-alpha",
        artworkSlug: "study-02",
      }),
    ]),
    contentReferences: Object.freeze([
      Object.freeze({
        contentSlug: "equilibres-silencieux",
      }),
    ]),
  }),

  Object.freeze({
    id: "demo-2024-series-development",
    year: 2024,
    period: "Nouvelles directions — période fictive",
    title: "Développement de séries — repère fictif",
    summary:
      "Évolution fictive des recherches vers des ensembles plus cohérents et de nouvelles intentions visuelles.",
    artworkReferences: Object.freeze([
      Object.freeze({
        collectionSlug: "collection-alpha",
        artworkSlug: "study-03",
      }),
      Object.freeze({
        collectionSlug: "collection-beta",
        artworkSlug: "composition-a",
      }),
    ]),
    contentReferences: Object.freeze([
      Object.freeze({
        contentSlug: "formes-en-dialogue",
      }),
    ]),
  }),

  Object.freeze({
    id: "demo-2025-selection-preparation",
    year: 2025,
    period: "Présentation — période fictive",
    title: "Préparation d'une sélection — repère fictif",
    summary:
      "Constitution fictive d'un ensemble de démonstration reliant œuvres et contenus artistiques.",
    artworkReferences: Object.freeze([
      Object.freeze({
        collectionSlug: "collection-beta",
        artworkSlug: "composition-b",
      }),
      Object.freeze({
        collectionSlug: "collection-beta",
        artworkSlug: "composition-c",
      }),
    ]),
    contentReferences: Object.freeze([
      Object.freeze({
        contentSlug: "seuils-provisoires",
      }),
    ]),
  }),
]);
