import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import TimelinePage, {
  TimelinePresentation,
} from "@/app/(public)/chronologie/page";
import { getTimelineMarkers } from "@/modules/timeline/queries";

const timelinePageSource = readFileSync(
  fileURLToPath(
    new URL("../app/(public)/chronologie/page.tsx", import.meta.url),
  ),
  "utf8",
);

function decodeHtmlEntities(value: string): string {
  return value
    .replaceAll("&#x27;", "'")
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
    const markers = getTimelineMarkers();
    const markup = renderToStaticMarkup(<TimelinePage />);
    const decodedMarkup = decodeHtmlEntities(markup);

    expect(markers).toHaveLength(3);
    expect(decodedMarkup.match(/<li/g)).toHaveLength(3);

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

  it("uses a semantic ordered list", () => {
    const markup = renderToStaticMarkup(<TimelinePage />);

    expect(markup).toContain("<ol>");
    expect(markup).toContain("<li");
    expect(markup).toContain("</ol>");
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
  });

  it("does not render resource links during increment 3", () => {
    const markup = renderToStaticMarkup(<TimelinePage />);

    expect(markup).not.toContain("<a");
    expect(markup).not.toContain('href="');
    expect(markup).not.toContain("/oeuvres/");
    expect(markup).not.toContain("/contenus/");
  });

  it("remains a server component", () => {
    expect(timelinePageSource).not.toContain('"use client"');
    expect(timelinePageSource).not.toContain("'use client'");
  });

  it("uses the timeline module ordering instead of sorting in the page", () => {
    expect(timelinePageSource).toContain("getTimelineMarkers()");
    expect(timelinePageSource).not.toContain(".sort(");
  });
});
