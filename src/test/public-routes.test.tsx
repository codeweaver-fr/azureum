import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import TimelinePage from "@/app/(public)/chronologie/page";
import CollectionPage from "@/app/(public)/collections/[collectionSlug]/page";
import ArtworkPage from "@/app/(public)/collections/[collectionSlug]/oeuvres/[artworkSlug]/page";
import CollectionsPage from "@/app/(public)/collections/page";
import ArtisticContentPage from "@/app/(public)/contenus/[contentSlug]/page";
import DavidPage from "@/app/(public)/david/page";
import HomePage from "@/app/(public)/page";
import {
  getGalleryArtworksByCollectionSlug,
  getGalleryCollections,
} from "@/modules/gallery/queries";

describe("minimal public routes", () => {
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

  it("keeps the artwork connected to its collection", async () => {
    const page = await ArtworkPage({
      params: Promise.resolve({
        artworkSlug: "oeuvre-test",
        collectionSlug: "collection-test",
      }),
    });
    const markup = renderToStaticMarkup(page);

    expect(markup).toContain("<h1");
    expect(markup).toContain(">Œuvre</h1>");
    expect(markup).toContain('href="/collections/collection-test"');
    expect(markup).toContain(">Revenir à la collection</a>");
  });
});
