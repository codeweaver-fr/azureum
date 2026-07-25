import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { Button, Link } from "@/shared/components/interactions";

const buttonStyles = readFileSync(
  fileURLToPath(
    new URL(
      "../shared/components/interactions/Button/Button.module.css",
      import.meta.url,
    ),
  ),
  "utf8",
);
const linkStyles = readFileSync(
  fileURLToPath(
    new URL(
      "../shared/components/interactions/Link/Link.module.css",
      import.meta.url,
    ),
  ),
  "utf8",
);

describe("interaction primitives", () => {
  it("renders a native button with safe defaults", () => {
    const markup = renderToStaticMarkup(
      <Button variant="primary">Acquire</Button>,
    );

    expect(markup).toMatch(/^<button\b/);
    expect(markup).toContain('type="button"');
    expect(markup).toContain("standard");
  });

  it("supports every documented button variant and size", () => {
    for (const variant of [
      "primary",
      "secondary",
      "subtle",
      "destructive",
    ] as const) {
      for (const size of ["compact", "standard", "comfortable"] as const) {
        const markup = renderToStaticMarkup(
          <Button size={size} variant={variant}>
            Action
          </Button>,
        );

        expect(markup).toContain(variant);
        expect(markup).toContain(size);
      }
    }
  });

  it("keeps loading content stable and prevents repeated activation", () => {
    const markup = renderToStaticMarkup(
      <Button loading variant="destructive">
        Delete
      </Button>,
    );

    expect(markup).toContain("Delete");
    expect(markup).toContain('aria-busy="true"');
    expect(markup).toContain("disabled");
    expect(markup).toContain("spinner");
  });

  it("renders internal navigation through Next Link", () => {
    const markup = renderToStaticMarkup(<Link href="/gallery">Gallery</Link>);

    expect(markup).toMatch(/^<a\b/);
    expect(markup).toContain('href="/gallery"');
  });

  it("secures external navigation opened in a new window", () => {
    const markup = renderToStaticMarkup(
      <Link
        aria-label="Official documentation (new window)"
        external
        href="https://example.com"
        rel="author"
        target="_blank"
      >
        Documentation
      </Link>,
    );

    expect(markup).toContain('target="_blank"');
    expect(markup).toContain('rel="author noopener noreferrer"');
    expect(markup).toContain(
      'aria-label="Official documentation (new window)"',
    );
  });

  it("maps interaction styles exclusively to validated tokens", () => {
    for (const styles of [buttonStyles, linkStyles]) {
      expect(styles).not.toMatch(/#[\da-f]{3,8}\b/i);
      expect(styles).not.toMatch(/\b\d*\.?\d+(?:px|rem|em)\b/i);
    }

    for (const token of [
      "--color-brand-primary",
      "--color-danger-surface",
      "--color-danger-surface-active",
      "--color-danger-surface-disabled",
      "--color-on-danger",
      "--duration-fast",
    ]) {
      expect(`${buttonStyles}\n${linkStyles}`).toContain(`var(${token})`);
    }
  });
});
