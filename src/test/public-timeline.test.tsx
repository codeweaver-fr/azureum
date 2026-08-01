import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import TimelinePage, {
  TimelinePresentation,
} from "@/app/(public)/chronologie/page";
import { getResolvedTimelineMarkers } from "@/modules/timeline/queries";

const timelinePageSource = readFileSync(
  fileURLToPath(
    new URL("../app/(public)/chronologie/page.tsx", import.meta.url),
  ),
  "utf8",
);

function decodeHtmlEntities(value: string): string {
  return value
    .replaceAll("&#x27;", "'")
    .replaceAll("&#x2F;", "/")
    .replaceAll("&quot;", '"')
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

describe("public timeline", () => {
  it("renders the contractual public presentation", () => {
    const markup = renderToStaticMarkup(<TimelinePage />);

    expect(markup.match(/<h1/g)).toHaveLength(1);
    expect(markup).toContain(">Évolution dans le temps</h1>");
    expect(markup).toContain("chronologie temporaire");
    expect(markup).toContain("repères fictifs");
    expect(markup).not.toContain(
      "Page structurelle en attente de sa chronologie.",
    );
  });

  it("renders the three markers from oldest to newest", () => {
    const markers = getResolvedTimelineMarkers();

    const markup = renderToStaticMarkup(<TimelinePage />);
    const decodedMarkup = decodeHtmlEntities(markup);

    expect(markers).toHaveLength(3);
    expect(decodedMarkup.match(/<ol>[\s\S]*?<\/ol>/g)).toHaveLength(1);

    const year2023Index = decodedMarkup.indexOf(">2023<");
    const year2024Index = decodedMarkup.indexOf(">2024<");
    const year2025Index = decodedMarkup.indexOf(">2025<");

    expect(year2023Index).toBeGreaterThan(-1);
    expect(year2024Index).toBeGreaterThan(year2023Index);
    expect(year2025Index).toBeGreaterThan(year2024Index);

    for (const marker of markers) {
      expect(decodedMarkup).toContain(`>${marker.title}</h2>`);
      expect(decodedMarkup).toContain(marker.period);
      expect(decodedMarkup).toContain(marker.summary);
    }
  });

  it("uses a semantic ordered list for chronological markers", () => {
    const markup = renderToStaticMarkup(<TimelinePage />);

    expect(markup).toContain("<ol>");
    expect(markup).toContain("<li");
    expect(markup).toContain("</ol>");
  });

  it("renders every explicitly associated artwork", () => {
    const markers = getResolvedTimelineMarkers();

    const markup = decodeHtmlEntities(renderToStaticMarkup(<TimelinePage />));

    const artworks = markers.flatMap((marker) => marker.artworks);

    expect(artworks.length).toBeGreaterThan(0);

    for (const artwork of artworks) {
      expect(markup).toContain(`>${artwork.title}</a>`);
      expect(markup).toContain(
        `href="/collections/${artwork.collectionSlug}/oeuvres/${artwork.slug}"`,
      );
    }
  });

  it("renders only the artworks explicitly associated with each marker", () => {
    const markers = getResolvedTimelineMarkers();

    const markup = decodeHtmlEntities(renderToStaticMarkup(<TimelinePage />));

    const expectedArtworkLinks = markers.reduce(
      (total, marker) => total + marker.artworks.length,
      0,
    );

    const renderedArtworkLinks =
      markup.match(/href="\/collections\/[^"]+\/oeuvres\/[^"]+"/g) ?? [];

    expect(renderedArtworkLinks).toHaveLength(expectedArtworkLinks);
  });

  it("renders every explicitly associated artistic content", () => {
    const markers = getResolvedTimelineMarkers();

    const markup = decodeHtmlEntities(renderToStaticMarkup(<TimelinePage />));

    const contents = markers.flatMap((marker) => marker.contents);

    expect(contents.length).toBeGreaterThan(0);

    for (const content of contents) {
      expect(markup).toContain(`>${content.title}</a>`);
      expect(markup).toContain(`href="/contenus/${content.slug}"`);
    }
  });

  it("renders only the artistic contents explicitly associated with each marker", () => {
    const markers = getResolvedTimelineMarkers();

    const markup = decodeHtmlEntities(renderToStaticMarkup(<TimelinePage />));

    const expectedLinks = markers.reduce(
      (total, marker) => total + marker.contents.length,
      0,
    );

    const renderedLinks = markup.match(/href="\/contenus\/[^"]+"/g) ?? [];

    expect(renderedLinks).toHaveLength(expectedLinks);
  });

  it("does not render an artwork section for a marker without artworks", () => {
    const [firstMarker] = getResolvedTimelineMarkers();

    if (firstMarker === undefined) {
      throw new Error("Expected at least one resolved timeline marker.");
    }

    const markerWithoutArtworks = Object.freeze({
      ...firstMarker,
      artworks: Object.freeze([]),
    });

    const markup = renderToStaticMarkup(
      <TimelinePresentation markers={[markerWithoutArtworks]} />,
    );

    expect(markup).not.toContain(">Œuvres associées</h3>");
    expect(markup).not.toContain("/oeuvres/");
  });

  it("does not render a content section for a marker without artistic contents", () => {
    const [firstMarker] = getResolvedTimelineMarkers();

    if (firstMarker === undefined) {
      throw new Error("Expected timeline marker.");
    }

    const markerWithoutContents = Object.freeze({
      ...firstMarker,
      contents: Object.freeze([]),
    });

    const markup = renderToStaticMarkup(
      <TimelinePresentation markers={[markerWithoutContents]} />,
    );

    expect(markup).not.toContain(">Contenus associés</h3>");
    expect(markup).not.toContain("/contenus/");
  });

  it("renders a neutral empty state without timeline items", () => {
    const markup = renderToStaticMarkup(<TimelinePresentation markers={[]} />);

    expect(markup.match(/<h1/g)).toHaveLength(1);
    expect(markup).toContain(">Évolution dans le temps</h1>");
    expect(markup).toContain(
      "Aucun repère chronologique n’est disponible pour le moment.",
    );
    expect(markup).not.toContain("<ol>");
    expect(markup).not.toContain("<li");
    expect(markup).not.toContain("<a");
  });

  it("remains a server component", () => {
    expect(timelinePageSource).not.toContain('"use client"');
    expect(timelinePageSource).not.toContain("'use client'");
  });

  it("uses resolved timeline data instead of resolving resources in the page", () => {
    expect(timelinePageSource).toContain("getResolvedTimelineMarkers()");

    expect(timelinePageSource).not.toContain("getGalleryArtworkBySlugs");

    expect(timelinePageSource).not.toContain("getArtisticContentBySlug");

    expect(timelinePageSource).not.toContain(".sort(");
  });
});
