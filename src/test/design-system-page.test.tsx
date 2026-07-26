import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import DesignSystemPage from "@/app/design-system/page";
import Home from "@/app/(public)/page";

const designSystemSource = readFileSync(
  fileURLToPath(new URL("../app/design-system/page.tsx", import.meta.url)),
  "utf8",
);
const designSystemStyles = readFileSync(
  fileURLToPath(
    new URL("../app/design-system/page.module.css", import.meta.url),
  ),
  "utf8",
);

describe("design system validation page", () => {
  it("keeps the root route outside the Design System demonstration", () => {
    const markup = renderToStaticMarkup(<Home />);

    expect(markup).toContain(">AZUREUM<");
    expect(markup).not.toContain('href="/design-system"');
    expect(markup).not.toContain("Design System Playground");
  });

  it("identifies the technical reference and every required section", () => {
    const markup = renderToStaticMarkup(<DesignSystemPage />);

    for (const content of [
      "Référence technique du Design System AZUREUM",
      "Cette page ne constitue pas une interface produit.",
      "Introduction et fondations",
      "Couleurs et tokens essentiels",
      "Typographie",
      "Layout",
      "Interactions",
      "Médias",
      "Consignes de validation",
    ]) {
      expect(markup).toContain(content);
    }

    for (const id of [
      "introduction",
      "fondations",
      "couleurs",
      "typographie",
      "layout",
      "interactions",
      "medias",
      "validation",
    ]) {
      expect(markup).toContain(`id="${id}"`);
    }
  });

  it("demonstrates all documented typography and interaction variants", () => {
    const markup = renderToStaticMarkup(<DesignSystemPage />);

    for (const variant of ["xs", "sm", "body", "body-lg"]) {
      expect(markup).toContain(variant);
    }

    for (const variant of ["display", "h1", "h2"]) {
      expect(markup).toContain(variant);
    }

    for (const variant of ["primary", "secondary", "subtle", "destructive"]) {
      for (const size of ["compact", "standard", "comfortable"]) {
        expect(markup).toContain(`${variant} ${size}`);
      }
    }

    expect(markup).toContain('aria-busy="true"');
    expect(markup).toContain("disabled");
  });

  it("demonstrates navigation and accessible media semantics", () => {
    const markup = renderToStaticMarkup(<DesignSystemPage />);

    expect(markup).toContain('href="#introduction"');
    expect(markup).toContain('href="https://example.com"');
    expect(markup).toContain('target="_blank"');
    expect(markup).toContain('aria-label="Lien externe, nouvelle fenêtre"');
    expect(markup).toContain('alt="Composition abstraite technique AZUREUM"');
    expect(markup).toContain('alt=""');
    expect(markup).toContain('aria-label="Lien externe informatif"');
  });

  it("uses no candidate token, inline style, or local CSS color and size", () => {
    const sources = `${designSystemSource}\n${designSystemStyles}`;

    expect(sources).not.toContain("--candidate-");
    expect(designSystemSource).not.toMatch(/\sstyle=\{/);
    expect(designSystemStyles).not.toMatch(/#[\da-f]{3,8}\b/i);
    expect(designSystemStyles).not.toMatch(/\b\d*\.?\d+(?:px|rem|em)\b/i);
  });
});
