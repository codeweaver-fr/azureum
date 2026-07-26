import { notFound } from "next/navigation";
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

  it("renders an artwork in the context of its collection", async () => {
    const [collection] = getGalleryCollections();
    const artworkSlug = collection.artworkSlugs[0];
    const artwork = getGalleryArtworkBySlugs(
      collection.slug,
      artworkSlug,
    );

    expect(artwork).toBeDefined();

    const page = await ArtworkPage({
      params: Promise.resolve({
        artworkSlug,
        collectionSlug: collection.slug,
      }),
    });
    const markup = renderToStaticMarkup(page);

    expect(markup).toContain("<h1");
    expect(markup).toContain(`>${artwork?.title}</h1>`);
    expect(markup).toContain(artwork?.artisticText);
    expect(markup).toContain(artwork?.media.alt);
    expect(markup).toContain(
      `href="/collections/${collection.slug}"`,
    );
    expect(markup).toContain(
      `>Revenir à la collection ${collection.title}</a>`,
    );
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
    const [firstCollection, secondCollection] =
      getGalleryCollections();
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
