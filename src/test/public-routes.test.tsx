import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import TimelinePage from "@/app/(public)/chronologie/page";
import CollectionPage from "@/app/(public)/collections/[collectionSlug]/page";
import ArtworkPage from "@/app/(public)/collections/[collectionSlug]/oeuvres/[artworkSlug]/page";
import CollectionsPage from "@/app/(public)/collections/page";
import ArtisticContentPage from "@/app/(public)/contenus/[contentSlug]/page";
import DavidPage from "@/app/(public)/david/page";
import HomePage from "@/app/(public)/page";

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

  it("renders a minimal collection page", () => {
    const markup = renderToStaticMarkup(<CollectionPage />);

    expect(markup).toContain("<h1");
    expect(markup).toContain(">Collection</h1>");
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
