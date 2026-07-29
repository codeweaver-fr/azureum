import { notFound } from "next/navigation";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { renderToStaticMarkup } from "react-dom/server";
import { beforeEach, describe, expect, it, vi } from "vitest";

import TimelinePage from "@/app/(public)/chronologie/page";
import CollectionPage from "@/app/(public)/collections/[collectionSlug]/page";
import ArtworkPage from "@/app/(public)/collections/[collectionSlug]/oeuvres/[artworkSlug]/page";
import CollectionsPage from "@/app/(public)/collections/page";
import ArtisticContentPage from "@/app/(public)/contenus/[contentSlug]/page";
import DavidPage from "@/app/(public)/david/page";
import HomePage from "@/app/(public)/page";
import { artisticContents } from "@/modules/artistic-content/demo-data";
import {
  getGalleryArtworkBySlugs,
  getGalleryArtworksByCollectionSlug,
  getGalleryCollections,
} from "@/modules/gallery/queries";

vi.mock("next/navigation", () => ({
  notFound: vi.fn(() => {
    throw new Error("NEXT_NOT_FOUND");
  }),
}));

const homePageSource = readFileSync(
  fileURLToPath(new URL("../app/(public)/page.tsx", import.meta.url)),
  "utf8",
);

const davidPageSource = readFileSync(
  fileURLToPath(new URL("../app/(public)/david/page.tsx", import.meta.url)),
  "utf8",
);

const artworkPageSource = readFileSync(
  fileURLToPath(
    new URL(
      "../app/(public)/collections/[collectionSlug]/oeuvres/[artworkSlug]/page.tsx",
      import.meta.url,
    ),
  ),
  "utf8",
);

const artisticContentPageSource = readFileSync(
  fileURLToPath(
    new URL("../app/(public)/contenus/[contentSlug]/page.tsx", import.meta.url),
  ),
  "utf8",
);

describe("minimal public routes", () => {
  beforeEach(() => {
    vi.mocked(notFound).mockClear();
  });

  it.each([
    ["home", HomePage, "AZUREUM"],
    ["David", DavidPage, "David Prieur-Gelis"],
    ["collections", CollectionsPage, "Collections"],
    ["timeline", TimelinePage, "Évolution dans le temps"],
  ])("renders the %s page with its own h1", (_, Page, heading) => {
    const markup = renderToStaticMarkup(<Page />);

    expect(markup).toContain("<h1");
    expect(markup).toContain(`>${heading}</h1>`);
  });

  it("renders the validated editorial presentation of the David page", () => {
    const markup = renderToStaticMarkup(<DavidPage />);

    expect(markup.match(/<h1/g)).toHaveLength(1);
    expect(markup).toContain(">David Prieur-Gelis</h1>");

    for (const heading of [
      "Présentation",
      "Repères biographiques",
      "Démarche artistique",
      "Repères artistiques",
    ]) {
      expect(markup).toContain(`>${heading}</h2>`);
    }

    expect(markup.match(/<h2/g)).toHaveLength(4);
    expect(markup).toContain("artiste pluridisciplinaire");
    expect(markup).toContain("<em>RANDOM</em>");
    expect(markup).toContain("<em>Sors tes couverts</em>");
    expect(markup).toContain("<em>Les Arts d&#x27;Azur</em>");
    expect(markup).not.toContain("Contenu éditorial provisoire");
    expect(markup).toContain(
      'href="/collections">Découvrir les collections</a>',
    );
    expect(markup).not.toContain("/oeuvres/");
    expect(markup).not.toContain("<img");
    expect(davidPageSource).toContain(
      'from "@/shared/components/interactions"',
    );
    expect(davidPageSource).not.toContain('from "next/link"');
    expect(davidPageSource).not.toContain('"use client"');
    expect(davidPageSource).not.toContain("'use client'");
  });

  it("renders the official semantic structure of the public homepage", () => {
    const markup = renderToStaticMarkup(<HomePage />);

    expect(markup.match(/<h1/g)).toHaveLength(1);
    expect(markup).toContain(">AZUREUM</h1>");

    expect(markup).toContain(
      "AZUREUM est l&#x27;espace officiel consacré au travail artistique de David.",
    );
    expect(markup).toContain(
      "Découvrez ses collections, sa démarche et l&#x27;évolution de son univers.",
    );

    expect(markup).not.toContain(
      "Page d&#x27;entrée publique en cours de construction.",
    );

    expect(homePageSource).not.toContain('"use client"');
    expect(homePageSource).not.toContain("'use client'");
  });

  it("provides the official link to the public gallery", () => {
    const markup = renderToStaticMarkup(<HomePage />);

    expect(markup).toContain(
      'href="/collections">Découvrir les collections</a>',
    );
    expect(markup.match(/href="\/collections"/g)).toHaveLength(1);

    expect(markup).not.toContain('href="/david"');
    expect(markup).not.toContain('href="/chronologie"');
    expect(markup).not.toContain('href="/design-system"');
  });

  it("presents exactly the two contractual collections", () => {
    const collections = getGalleryCollections();
    const alphaCollection = collections.find(
      (collection) => collection.slug === "collection-alpha",
    );
    const betaCollection = collections.find(
      (collection) => collection.slug === "collection-beta",
    );

    expect(collections).toHaveLength(2);
    expect(alphaCollection).toBeDefined();
    expect(betaCollection).toBeDefined();

    if (alphaCollection === undefined || betaCollection === undefined) {
      throw new Error(
        "Expected collection-alpha and collection-beta to exist.",
      );
    }

    const markup = renderToStaticMarkup(<HomePage />);

    expect(markup).toContain(">Collections</h2>");
    expect(markup.match(/role="listitem"/g)).toHaveLength(2);

    for (const collection of [alphaCollection, betaCollection]) {
      expect(markup).toContain(`>${collection.title}</h3>`);
      expect(markup).toContain(collection.intention);
      expect(markup).toContain(`href="/collections/${collection.slug}"`);
      expect(markup).toContain(`aria-label="Découvrir ${collection.title}"`);
    }

    expect(markup.match(/href="\/collections\/collection-/g)).toHaveLength(2);
  });

  it("uses the collection previews as the only homepage media", () => {
    const collections = getGalleryCollections();
    const previewArtworks = collections.map((collection) =>
      getGalleryArtworkBySlugs(collection.slug, collection.previewArtworkSlug),
    );

    expect(previewArtworks).not.toContain(undefined);

    if (
      previewArtworks.some((previewArtwork) => previewArtwork === undefined)
    ) {
      throw new Error(
        "Expected every homepage collection preview artwork to exist.",
      );
    }

    const markup = renderToStaticMarkup(<HomePage />);

    expect(markup.match(/<img/g)).toHaveLength(2);

    for (const previewArtwork of previewArtworks) {
      expect(previewArtwork).toBeDefined();

      if (previewArtwork === undefined) {
        throw new Error("Expected the preview artwork to exist.");
      }

      expect(markup).toContain(`alt="${previewArtwork.media.alt}"`);
      expect(
        markup.match(
          new RegExp(
            `alt="${previewArtwork.media.alt.replace(
              /[.*+?^${}()|[\]\\]/g,
              "\\$&",
            )}"`,
            "g",
          ),
        ),
      ).toHaveLength(1);
    }
  });

  it("uses study-01 from collection-alpha once as the main media", () => {
    const heroArtwork = getGalleryArtworkBySlugs(
      "collection-alpha",
      "study-01",
    );

    expect(heroArtwork).toBeDefined();

    if (heroArtwork === undefined) {
      throw new Error('Expected "study-01" from "collection-alpha" to exist.');
    }

    const markup = renderToStaticMarkup(<HomePage />);
    const escapedAlt = heroArtwork.media.alt.replace(
      /[.*+?^${}()|[\]\\]/g,
      "\\$&",
    );

    expect(markup).toContain(`alt="${heroArtwork.media.alt}"`);
    expect(markup.match(new RegExp(`alt="${escapedAlt}"`, "g"))).toHaveLength(
      1,
    );

    const mainMediaIndex = markup.indexOf(`alt="${heroArtwork.media.alt}"`);
    const betaMedia = getGalleryArtworkBySlugs(
      "collection-beta",
      "composition-a",
    );

    expect(betaMedia).toBeDefined();

    if (betaMedia === undefined) {
      throw new Error(
        'Expected "composition-a" from "collection-beta" to exist.',
      );
    }

    const betaMediaIndex = markup.indexOf(`alt="${betaMedia.media.alt}"`);

    expect(mainMediaIndex).toBeGreaterThan(-1);
    expect(betaMediaIndex).toBeGreaterThan(mainMediaIndex);
  });

  it("does not link directly to an artwork from the homepage", () => {
    const markup = renderToStaticMarkup(<HomePage />);

    expect(markup).not.toContain("/oeuvres/");
  });

  it("renders a collection with its identity, intention and artworks", async () => {
    const [collection] = getGalleryCollections();
    const artworks = getGalleryArtworksByCollectionSlug(collection.slug);

    expect(artworks).toBeDefined();

    const page = await CollectionPage({
      params: Promise.resolve({
        collectionSlug: collection.slug,
      }),
    });
    const markup = renderToStaticMarkup(page);

    expect(markup).toContain("<h1");
    expect(markup).toContain(`>${collection.title}</h1>`);
    expect(markup).toContain(collection.intention);
    expect(artworks).toHaveLength(3);

    for (const artwork of artworks ?? []) {
      expect(markup).toContain(artwork.title);
      expect(markup).toContain(artwork.media.alt);
      expect(markup).toContain(
        `href="/collections/${collection.slug}/oeuvres/${artwork.slug}"`,
      );
    }
  });

  it("renders every artistic content with its applicable information", async () => {
    const typeLabels = {
      text: "Texte",
      exhibition: "Exposition",
      installation: "Installation",
      event: "Événement",
      ensemble: "Ensemble",
    } as const;

    for (const content of artisticContents) {
      const page = await ArtisticContentPage({
        params: Promise.resolve({
          contentSlug: content.slug,
        }),
      });
      const markup = renderToStaticMarkup(page);
      const normalizedMarkup = markup.replaceAll("&#x27;", "'");

      expect(markup.match(/<h1/g)).toHaveLength(1);
      expect(normalizedMarkup).toContain(`>${content.title}</h1>`);
      expect(markup).toContain(`>${typeLabels[content.type]}</p>`);
      expect(normalizedMarkup).toContain(content.summary);
      expect(markup).toContain(">Présentation</h2>");

      for (const paragraph of content.body) {
        expect(normalizedMarkup).toContain(paragraph);
      }

      if (content.period === null) {
        expect(markup).not.toContain("<dt>Période</dt>");
      } else {
        expect(normalizedMarkup).toContain(`<dd>${content.period}</dd>`);
      }

      if (content.location === null) {
        expect(markup).not.toContain("<dt>Lieu</dt>");
      } else {
        expect(normalizedMarkup).toContain(`<dd>${content.location}</dd>`);
      }

      if (content.media !== null) {
        const artwork = getGalleryArtworkBySlugs(
          content.media.collectionSlug,
          content.media.artworkSlug,
        );

        expect(artwork).toBeDefined();
        expect(markup).toContain(`alt="${artwork?.media.alt}"`);
      } else {
        expect(markup).not.toContain("<img");
      }

      expect(markup).toContain(">Œuvres associées</h2>");

      for (const reference of content.associatedArtworks) {
        const artwork = getGalleryArtworkBySlugs(
          reference.collectionSlug,
          reference.artworkSlug,
        );

        expect(artwork).toBeDefined();
        expect(markup).toContain(
          `href="/collections/${reference.collectionSlug}/oeuvres/${reference.artworkSlug}"`,
        );
        expect(markup).toContain(`>${artwork?.title}</a>`);
      }

      expect(
        markup.match(/href="\/collections\/[^"]+\/oeuvres\/[^"]+"/g),
      ).toHaveLength(content.associatedArtworks.length);
      expect(markup).not.toContain("/contenus/");
    }
  });

  it("renders no artwork outside a content's declared relations", async () => {
    const content = artisticContents[0];
    const page = await ArtisticContentPage({
      params: Promise.resolve({
        contentSlug: content.slug,
      }),
    });
    const markup = renderToStaticMarkup(page);

    expect(markup).not.toContain(
      'href="/collections/collection-beta/oeuvres/composition-a"',
    );
    expect(markup).not.toContain(
      'href="/collections/collection-beta/oeuvres/composition-b"',
    );
    expect(markup).not.toContain(
      'href="/collections/collection-beta/oeuvres/composition-c"',
    );
  });

  it("keeps the artistic content page server-rendered", () => {
    expect(artisticContentPageSource).not.toContain('"use client"');
    expect(artisticContentPageSource).not.toContain("'use client'");
  });

  it("returns a not-found state for an unknown artistic content", async () => {
    await expect(
      ArtisticContentPage({
        params: Promise.resolve({
          contentSlug: "unknown-content",
        }),
      }),
    ).rejects.toThrow("NEXT_NOT_FOUND");

    expect(notFound).toHaveBeenCalledOnce();
  });

  it("renders an enriched artwork page in the context of its collection", async () => {
    const [collection] = getGalleryCollections();
    const artworkSlug = collection.artworkSlugs[0];
    const artwork = getGalleryArtworkBySlugs(collection.slug, artworkSlug);

    expect(artwork).toBeDefined();

    if (!artwork) {
      throw new Error("Expected the demo artwork to exist.");
    }

    const expectedDimensions = [
      artwork.dimensions.widthCm,
      artwork.dimensions.heightCm,
      artwork.dimensions.depthCm,
    ].filter((dimension): dimension is number => dimension !== null);

    const page = await ArtworkPage({
      params: Promise.resolve({
        artworkSlug,
        collectionSlug: collection.slug,
      }),
    });
    const markup = renderToStaticMarkup(page);

    expect(markup).toContain("<h1");
    expect(markup).toContain(`>${artwork.title}</h1>`);

    expect(markup).toContain(collection.title);
    expect(markup).toContain(`href="/collections/${collection.slug}"`);
    expect(markup).toContain(
      `>Revenir à la collection ${collection.title}</a>`,
    );

    expect(markup).toContain(artwork.media.alt);
    expect(markup).toContain(artwork.shortDescription);
    expect(markup).toContain(artwork.artisticText);

    expect(markup).toContain(String(artwork.year));
    expect(markup).toContain(artwork.technique);
    expect(markup).toContain(artwork.support);
    expect(markup).toContain(`${expectedDimensions.join(" × ")} cm`);

    const mediaIndex = markup.indexOf(`alt="${artwork.media.alt}"`);
    const titleIndex = markup.indexOf(`>${artwork.title}</h1>`);
    const collectionIndex = markup.indexOf(`>${collection.title}</p>`);
    const characteristicsIndex = markup.indexOf(">Caractéristiques</h2>");
    const descriptionIndex = markup.indexOf(">Description</h2>");
    const artisticTextIndex = markup.indexOf(">À propos de l’œuvre</h2>");
    const returnIndex = markup.indexOf(
      `>Revenir à la collection ${collection.title}</a>`,
    );

    expect(mediaIndex).toBeGreaterThan(-1);
    expect(titleIndex).toBeGreaterThan(mediaIndex);
    expect(collectionIndex).toBeGreaterThan(titleIndex);
    expect(characteristicsIndex).toBeGreaterThan(collectionIndex);
    expect(descriptionIndex).toBeGreaterThan(characteristicsIndex);
    expect(artisticTextIndex).toBeGreaterThan(descriptionIndex);
    expect(returnIndex).toBeGreaterThan(artisticTextIndex);
    expect(markup.match(/<h1/g)).toHaveLength(1);
    expect(markup).toContain("<dl");
    expect(markup.match(/<dt>/g)).toHaveLength(4);
    expect(markup.match(/<dd>/g)).toHaveLength(4);
  });

  it("renders exactly the two artistic contents associated with study-02", async () => {
    const page = await ArtworkPage({
      params: Promise.resolve({
        artworkSlug: "study-02",
        collectionSlug: "collection-alpha",
      }),
    });
    const markup = renderToStaticMarkup(page);

    expect(markup).toContain(">Contenus associés</h2>");
    expect(markup).toContain(
      'href="/contenus/equilibres-silencieux">Texte fictif — Équilibres silencieux</a>',
    );
    expect(markup).toContain(
      'href="/contenus/formes-en-dialogue">Exposition fictive — Formes en dialogue</a>',
    );
    expect(markup).toContain(">Texte</p>");
    expect(markup).toContain(">Exposition</p>");
    expect(markup.match(/href="\/contenus\/[^"]+"/g)).toHaveLength(2);
  });

  it("renders only the declared artistic content for study-01", async () => {
    const page = await ArtworkPage({
      params: Promise.resolve({
        artworkSlug: "study-01",
        collectionSlug: "collection-alpha",
      }),
    });
    const markup = renderToStaticMarkup(page);

    expect(markup).toContain(
      'href="/contenus/equilibres-silencieux">Texte fictif — Équilibres silencieux</a>',
    );
    expect(markup).toContain(">Texte</p>");
    expect(markup.match(/href="\/contenus\/[^"]+"/g)).toHaveLength(1);
  });

  it("renders no associated-content section for composition-c", async () => {
    const page = await ArtworkPage({
      params: Promise.resolve({
        artworkSlug: "composition-c",
        collectionSlug: "collection-beta",
      }),
    });
    const markup = renderToStaticMarkup(page);

    expect(markup).not.toContain(">Contenus associés</h2>");
    expect(markup).not.toContain('href="/contenus/');
  });

  it("formats physical dimensions without an unavailable depth", async () => {
    const artwork = getGalleryArtworkBySlugs("collection-alpha", "study-02");

    expect(artwork?.dimensions.depthCm).toBeNull();

    const page = await ArtworkPage({
      params: Promise.resolve({
        artworkSlug: "study-02",
        collectionSlug: "collection-alpha",
      }),
    });
    const markup = renderToStaticMarkup(page);

    expect(markup).toContain(">120 × 80 cm</dd>");
    expect(markup).not.toContain("120 × 80 ×");
  });

  it("keeps the enriched artwork route server-rendered and non-commercial", () => {
    expect(artworkPageSource).not.toContain('"use client"');
    expect(artworkPageSource).not.toContain("'use client'");

    for (const excludedTerm of [
      "prix",
      "acheter",
      "acquérir",
      "disponibilité",
    ]) {
      expect(artworkPageSource.toLocaleLowerCase("fr")).not.toContain(
        excludedTerm,
      );
    }
  });

  it("returns a not-found state for an unknown collection", async () => {
    await expect(
      CollectionPage({
        params: Promise.resolve({
          collectionSlug: "unknown-collection",
        }),
      }),
    ).rejects.toThrow("NEXT_NOT_FOUND");

    expect(notFound).toHaveBeenCalledOnce();
  });

  it("returns a not-found state for an unknown artwork", async () => {
    const [collection] = getGalleryCollections();

    await expect(
      ArtworkPage({
        params: Promise.resolve({
          artworkSlug: "unknown-artwork",
          collectionSlug: collection.slug,
        }),
      }),
    ).rejects.toThrow("NEXT_NOT_FOUND");

    expect(notFound).toHaveBeenCalledOnce();
  });

  it("returns a not-found state for an artwork outside its collection", async () => {
    const [firstCollection, secondCollection] = getGalleryCollections();
    const artworkSlug = firstCollection.artworkSlugs[0];

    await expect(
      ArtworkPage({
        params: Promise.resolve({
          artworkSlug,
          collectionSlug: secondCollection.slug,
        }),
      }),
    ).rejects.toThrow("NEXT_NOT_FOUND");

    expect(notFound).toHaveBeenCalledOnce();
  });
});
