import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

import { renderToStaticMarkup } from "react-dom/server";
import { beforeEach, describe, expect, it, vi } from "vitest";

import PublicLayout from "@/app/(public)/layout";

const navigationState = vi.hoisted(() => ({
  pathname: "/",
}));

vi.mock("next/navigation", () => ({
  usePathname: () => navigationState.pathname,
}));

const layoutSource = readFileSync(
  fileURLToPath(new URL("../app/(public)/layout.tsx", import.meta.url)),
  "utf8",
);
const layoutStyles = readFileSync(
  fileURLToPath(new URL("../app/(public)/layout.module.css", import.meta.url)),
  "utf8",
);
const headerSource = readFileSync(
  fileURLToPath(
    new URL(
      "../app/(public)/_components/PublicHeaderContent.tsx",
      import.meta.url,
    ),
  ),
  "utf8",
);
const headerStyles = readFileSync(
  fileURLToPath(
    new URL(
      "../app/(public)/_components/PublicHeaderContent.module.css",
      import.meta.url,
    ),
  ),
  "utf8",
);

describe("public application shell", () => {
  beforeEach(() => {
    navigationState.pathname = "/";
  });

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

  it("keeps the footer limited to validated and available content", () => {
    const markup = renderToStaticMarkup(
      <PublicLayout>
        <h1>Contenu de la page</h1>
      </PublicLayout>,
    );
    const footerMarkup = markup.slice(
      markup.indexOf("<footer"),
      markup.indexOf("</footer>") + "</footer>".length,
    );

    expect(footerMarkup).toContain(">AZUREUM</");
    expect(footerMarkup).not.toContain("<a");
    expect(footerMarkup).not.toContain("<nav");
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

  it("renders the validated desktop navigation in its documented order", () => {
    const markup = renderToStaticMarkup(
      <PublicLayout>
        <h1>Contenu de la page</h1>
      </PublicLayout>,
    );

    const collectionsIndex = markup.indexOf('href="/collections"');
    const davidIndex = markup.indexOf('href="/david"');
    const timelineIndex = markup.indexOf('href="/chronologie"');

    expect(markup).toContain('aria-label="Navigation principale"');
    expect(collectionsIndex).toBeGreaterThan(-1);
    expect(davidIndex).toBeGreaterThan(collectionsIndex);
    expect(timelineIndex).toBeGreaterThan(davidIndex);
    expect(markup).not.toContain('href="/design-system"');
  });

  it("identifies the current page accessibly", () => {
    navigationState.pathname = "/collections";

    const markup = renderToStaticMarkup(
      <PublicLayout>
        <h1>Collections</h1>
      </PublicLayout>,
    );

    expect(markup).toMatch(
      /<a[^>]*aria-current="page"[^>]*href="\/collections"|<a[^>]*href="\/collections"[^>]*aria-current="page"/,
    );
    expect(markup).not.toMatch(
      /<a[^>]*aria-current="page"[^>]*href="\/david"|<a[^>]*href="\/david"[^>]*aria-current="page"/,
    );
  });

  it("exposes an accessible mobile navigation control", () => {
    const markup = renderToStaticMarkup(
      <PublicLayout>
        <h1>Accueil</h1>
      </PublicLayout>,
    );

    expect(markup).toContain('aria-controls="public-mobile-navigation"');
    expect(markup).toContain('aria-expanded="false"');
    expect(markup).toContain('type="button"');
    expect(headerSource).toContain('event.key !== "Escape"');
    expect(headerSource).toContain("closeNavigation");
  });

  it("uses only the documented responsive breakpoint and official tokens", () => {
    expect(headerStyles).toContain("/* DT-10 — Bureau */");
    expect(headerStyles).toContain("@media (min-width: 1024px)");
    expect(headerStyles).not.toMatch(/@media[^{]*(?:480|768|1600)px/);
    expect(headerStyles).not.toContain("--candidate-");
    expect(headerStyles).not.toMatch(/#[\da-f]{3,8}\b/i);
    expect(headerSource).not.toMatch(/\sstyle=\{/);
  });
});
