import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import {
  ArtworkImage,
  Icon,
  type ArtworkImageProps,
  type IconName,
} from "@/shared/components/media";

const iconStyles = readFileSync(
  fileURLToPath(
    new URL("../shared/components/media/Icon/Icon.module.css", import.meta.url),
  ),
  "utf8",
);
const artworkImageStyles = readFileSync(
  fileURLToPath(
    new URL(
      "../shared/components/media/ArtworkImage/ArtworkImage.module.css",
      import.meta.url,
    ),
  ),
  "utf8",
);

describe("media primitives", () => {
  it("limits Icon to the controlled catalogue and semantic sizes", () => {
    const catalogue: IconName[] = [
      "image-unavailable",
      "loading",
      "external-link",
    ];

    for (const name of catalogue) {
      for (const size of ["small", "medium", "large"] as const) {
        const markup = renderToStaticMarkup(<Icon name={name} size={size} />);

        expect(markup).toContain("<svg");
        expect(markup).toContain('stroke="currentColor"');
        expect(markup).toContain(size);
      }
    }
  });

  it("distinguishes decorative and informative icons", () => {
    const decorative = renderToStaticMarkup(<Icon name="loading" />);
    const informative = renderToStaticMarkup(
      <Icon decorative={false} label="External link" name="external-link" />,
    );

    expect(decorative).toContain('aria-hidden="true"');
    expect(decorative).not.toContain('role="img"');
    expect(informative).toContain('aria-label="External link"');
    expect(informative).toContain('role="img"');
  });

  it("rejects an empty informative icon label during development", () => {
    expect(() =>
      renderToStaticMarkup(
        <Icon decorative={false} label=" " name="external-link" />,
      ),
    ).toThrow(/non-empty label/);
  });

  it("supports the intrinsic ArtworkImage mode", () => {
    const markup = renderToStaticMarkup(
      <ArtworkImage
        alt="Azure artwork"
        height={600}
        src="/art.jpg"
        width={800}
      />,
    );

    expect(markup).toContain('alt="Azure artwork"');
    expect(markup).toContain('height="600"');
    expect(markup).toContain('width="800"');
  });

  it("supports the fill ArtworkImage mode and explicit decoration", () => {
    const markup = renderToStaticMarkup(
      <ArtworkImage
        decorative
        fill
        sizes="(max-width: 767px) 100vw, 50vw"
        src="/art.jpg"
      />,
    );

    expect(markup).toContain('alt=""');
    expect(markup).toContain('sizes="(max-width: 767px) 100vw, 50vw"');
    expect(markup).toContain("fill");
  });

  it("rejects empty informative alternatives during development", () => {
    expect(() =>
      renderToStaticMarkup(
        <ArtworkImage alt=" " height={600} src="/art.jpg" width={800} />,
      ),
    ).toThrow(/non-empty alt text/);
  });

  it("rejects explicitly identifiable SVG artwork sources", () => {
    for (const src of [
      "/artwork.svg",
      "https://example.com/artwork.svg?version=1",
      "data:image/svg+xml,%3Csvg%3E%3C/svg%3E",
    ]) {
      expect(() =>
        renderToStaticMarkup(
          <ArtworkImage alt="Artwork" height={600} src={src} width={800} />,
        ),
      ).toThrow(/does not accept SVG/);
    }
  });

  it("maps media styles exclusively to validated tokens", () => {
    for (const styles of [iconStyles, artworkImageStyles]) {
      expect(styles).not.toMatch(/#[\da-f]{3,8}\b/i);
      expect(styles).not.toMatch(/\b\d*\.?\d+(?:px|rem|em)\b/i);
      expect(styles).not.toContain("--candidate-");
    }

    for (const token of [
      "--size-icon-sm",
      "--size-icon-md",
      "--size-icon-lg",
    ]) {
      expect(iconStyles).toContain(`var(${token})`);
    }

    for (const token of [
      "--color-surface",
      "--color-text-secondary",
      "--font-size-sm",
      "--space-8",
      "--space-16",
    ]) {
      expect(artworkImageStyles).toContain(`var(${token})`);
    }
  });

  it("keeps unsupported public props outside the TypeScript contract", () => {
    if (false) {
      // @ts-expect-error arbitrary SVG names are forbidden
      void (<Icon name="custom-icon" />);
      // @ts-expect-error Icon style is forbidden
      void (<Icon name="loading" style={{ color: "red" }} />);
      // @ts-expect-error intrinsic mode requires width
      void (<ArtworkImage alt="Artwork" height={600} src="/art.jpg" />);
      // @ts-expect-error fill mode requires sizes
      void (<ArtworkImage alt="Artwork" fill src="/art.jpg" />);
      const withChildren: ArtworkImageProps = {
        alt: "Artwork",
        // @ts-expect-error ArtworkImage children are forbidden
        children: "Overlay",
        height: 600,
        src: "/art.jpg",
        width: 800,
      };
      const withStyle: ArtworkImageProps = {
        alt: "Artwork",
        height: 600,
        src: "/art.jpg",
        // @ts-expect-error ArtworkImage style is forbidden
        style: { objectFit: "cover" },
        width: 800,
      };
      void withChildren;
      void withStyle;
    }

    expect(true).toBe(true);
  });
});
