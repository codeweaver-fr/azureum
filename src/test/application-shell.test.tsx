import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import PublicLayout from "@/app/(public)/layout";

const layoutSource = readFileSync(
  fileURLToPath(new URL("../app/(public)/layout.tsx", import.meta.url)),
  "utf8",
);
const layoutStyles = readFileSync(
  fileURLToPath(new URL("../app/(public)/layout.module.css", import.meta.url)),
  "utf8",
);

describe("public application shell", () => {
  it("renders the shared landmarks in document order", () => {
    const markup = renderToStaticMarkup(
      <PublicLayout>
        <h1>Contenu de la page</h1>
      </PublicLayout>,
    );

    const headerIndex = markup.indexOf("<header");
    const mainIndex = markup.indexOf("<main");
    const footerIndex = markup.indexOf("<footer");

    expect(headerIndex).toBeGreaterThan(-1);
    expect(mainIndex).toBeGreaterThan(headerIndex);
    expect(footerIndex).toBeGreaterThan(mainIndex);
    expect(markup).toContain('<main class="');
    expect(markup).toContain('id="main-content"');
    expect(markup).toContain('tabindex="-1"');
  });

  it("provides the skip link before the persistent landmarks", () => {
    const markup = renderToStaticMarkup(
      <PublicLayout>
        <h1>Contenu de la page</h1>
      </PublicLayout>,
    );

    expect(markup).toContain('href="#main-content"');
    expect(markup).toContain(">Aller au contenu principal</");
    expect(markup.indexOf('href="#main-content"')).toBeLessThan(
      markup.indexOf("<header"),
    );
  });

  it("leaves the page responsible for its main heading", () => {
    const markup = renderToStaticMarkup(
      <PublicLayout>
        <p>Contenu sans titre</p>
      </PublicLayout>,
    );

    expect(markup).not.toContain("<h1");
  });

  it("remains server-rendered and uses only official tokens", () => {
    const sources = `${layoutSource}\n${layoutStyles}`;

    expect(layoutSource).not.toContain('"use client"');
    expect(layoutSource).not.toContain("'use client'");
    expect(sources).not.toContain("--candidate-");
    expect(layoutSource).not.toMatch(/\sstyle=\{/);
    expect(layoutStyles).not.toMatch(/#[\da-f]{3,8}\b/i);

    for (const token of [
      "--color-border-subtle",
      "--color-surface-inverse",
      "--color-text-inverse",
      "--space-0",
      "--space-12",
      "--space-16",
      "--space-48",
      "--z-navigation",
    ]) {
      expect(layoutStyles).toContain(`var(${token})`);
    }
  });
});
