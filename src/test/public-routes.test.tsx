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

const artworkPageSource = readFileSync(
  fileURLToPath(
    new URL(
      "../app/(public)/collections/[collectionSlug]/oeuvres/[artworkSlug]/page.tsx",
      import.meta.url,
    ),
  ),
  "utf8",
);

describe("minimal public routes", () => {
  beforeEach(() => {
    vi.mocked(notFound).mockClear();
  });

  it.each([
    ["home", HomePage, "AZUREUM"],
    ["David", DavidPage, "David"],
    ["collections", CollectionsPage, "Collections"],
    ["timeline", TimelinePage, "Évolution dans le temps"],
  ])("renders the %s page with its own h1", (_, Page, heading) => {
    const markup = renderToStaticMarkup(<Page />);

    expect(markup).toContain("<h1");
    expect(markup).toContain(`>${heading}</h1>`);
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
    expect(markup.match(/href="/g)).toHaveLength(1);
    expect(markup).not.toContain('href="/david"');
    expect(markup).not.toContain('href="/chronologie"');
    expect(markup).not.toContain('href="/design-system"');
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

  it("renders a minimal artistic content page", () => {
    const markup = renderToStaticMarkup(<ArtisticContentPage />);

    expect(markup).toContain("<h1");
    expect(markup).toContain(">Contenu artistique</h1>");
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
