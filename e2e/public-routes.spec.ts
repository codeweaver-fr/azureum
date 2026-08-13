import { expect, test } from "@playwright/test";

import type { Locator, Page } from "@playwright/test";

async function focusWithKeyboard(page: Page, target: Locator) {
  for (let attempt = 0; attempt < 20; attempt += 1) {
    await page.keyboard.press("Tab");

    if (
      await target.evaluate((element) => element === document.activeElement)
    ) {
      return;
    }
  }

  throw new Error("Expected the target to be reachable with the Tab key.");
}

async function hasHorizontalOverflow(page: Page) {
  return page.evaluate(
    () =>
      document.documentElement.scrollWidth >
      document.documentElement.clientWidth,
  );
}

async function injectLongCollection(page: Page) {
  return page
    .locator("main")
    .getByRole("list")
    .evaluate((artworkField) => {
      const artworks = Array.from(
        artworkField.querySelectorAll(":scope > [role='listitem']"),
      );
      const sequence = [1, 1, 1, 0, 0, 0, 2, 2, 2, 1, 0, 2];
      const expectedHrefs = sequence.map((sourceIndex) => {
        const artwork = artworks[sourceIndex];

        if (artwork === undefined) {
          throw new Error("Expected three source artworks in the collection.");
        }

        const clone = artwork.cloneNode(true);

        artworkField.append(clone);

        const link = artwork.querySelector("a");

        if (link === null) {
          throw new Error("Expected every source artwork to expose a link.");
        }

        return link.getAttribute("href");
      });

      for (const artwork of artworks) {
        artwork.remove();
      }

      return expectedHrefs;
    });
}

const publicRoutes = [
  { heading: "AZUREUM", path: "/" },
  { heading: "David", path: "/david" },
  { heading: "Collections", path: "/collections" },
  {
    heading: "Collection Alpha",
    path: "/collections/collection-alpha",
  },
  {
    heading: "Étude fictive 01",
    path: "/collections/collection-alpha/oeuvres/study-01",
  },
  {
    heading: "Texte fictif — Équilibres silencieux",
    path: "/contenus/equilibres-silencieux",
  },
  {
    heading: "Exposition fictive — Formes en dialogue",
    path: "/contenus/formes-en-dialogue",
  },
  {
    heading: "Installation fictive — Seuils provisoires",
    path: "/contenus/seuils-provisoires",
  },
  {
    heading: "Évolution dans le temps",
    path: "/chronologie",
  },
] as const;

for (const route of publicRoutes) {
  test(`renders the public route ${route.path}`, async ({ page }) => {
    const response = await page.goto(route.path);

    expect(response?.ok()).toBe(true);
    await expect(
      page.getByRole("heading", { level: 1, name: route.heading }),
    ).toBeVisible();
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    await expect(page.locator("main")).toHaveCount(1);
  });
}

for (const journey of [
  {
    artworkAlt:
      "Composition abstraite fictive horizontale traversée par une ligne centrale.",
    artworkHeading: "Étude fictive 02",
    artworkPath: "/collections/collection-alpha/oeuvres/study-02",
    collectionHeading: "Collection Alpha",
    collectionPath: "/collections/collection-alpha",
  },
  {
    artworkAlt:
      "Composition abstraite verticale faite de colonnes beiges et noires, de formes courbes et d’un cercle ocre.",
    artworkHeading: "Composition fictive B",
    artworkPath: "/collections/collection-beta/oeuvres/composition-b",
    collectionHeading: "Collection Bêta",
    collectionPath: "/collections/collection-beta",
  },
] as const) {
  test(`preserves the ${journey.collectionHeading} artwork continuum`, async ({
    page,
  }) => {
    await page.goto(journey.collectionPath);

    const artworkLink = page.getByRole("link", {
      name: `Voir ${journey.artworkHeading}`,
    });

    await expect(artworkLink).toHaveAttribute("href", journey.artworkPath);
    await artworkLink.click();

    await expect(page).toHaveURL(journey.artworkPath);
    await expect(
      page.getByRole("heading", {
        level: 1,
        name: journey.artworkHeading,
      }),
    ).toBeVisible();
    await expect(
      page.getByRole("img", { name: journey.artworkAlt }),
    ).toBeVisible();

    const returnLink = page.getByRole("link", {
      name: `Revenir à la collection ${journey.collectionHeading}`,
    });

    await expect(returnLink).toHaveAttribute("href", journey.collectionPath);
    await returnLink.click();

    await expect(page).toHaveURL(journey.collectionPath);
    await expect(
      page.getByRole("heading", {
        level: 1,
        name: journey.collectionHeading,
      }),
    ).toBeVisible();
  });
}

test("does not overflow horizontally on a mobile viewport", async ({
  page,
}) => {
  await page.setViewportSize({
    width: 375,
    height: 812,
  });

  const routes = [
    "/collections",
    "/collections/collection-alpha",
    "/collections/collection-alpha/oeuvres/study-01",
  ];

  for (const route of routes) {
    await page.goto(route);

    expect(await hasHorizontalOverflow(page)).toBe(false);
  }
});

for (const viewport of [
  { height: 844, label: "mobile", width: 390 },
  { height: 1024, label: "tablet", width: 768 },
  { height: 900, label: "desktop", width: 1440 },
] as const) {
  test(`preserves the collection flow on ${viewport.label}`, async ({
    page,
  }) => {
    await page.setViewportSize(viewport);
    await page.goto("/collections/collection-alpha");

    const artworkItems = page.locator("main").getByRole("listitem");

    await expect(artworkItems).toHaveCount(3);
    await expect(
      artworkItems.getByRole("link", { name: /^Voir / }),
    ).toHaveCount(3);
    expect(await hasHorizontalOverflow(page)).toBe(false);

    const ratios = await artworkItems.evaluateAll(async (items) => {
      await Promise.all(
        items.map(async (item) => {
          const image = item.querySelector("img");

          if (image === null) {
            throw new Error("Expected an image in every artwork item.");
          }

          await image.decode();
        }),
      );

      return items.map((item) => {
        const image = item.querySelector("img");

        if (image === null) {
          throw new Error("Expected an image in every artwork item.");
        }

        const bounds = image.getBoundingClientRect();

        return {
          intrinsic: image.naturalWidth / image.naturalHeight,
          rendered: bounds.width / bounds.height,
        };
      });
    });

    expect(ratios).toHaveLength(3);

    for (const ratio of ratios) {
      expect(ratio.intrinsic).toBeGreaterThan(0);
      expect(Math.abs(ratio.rendered - ratio.intrinsic)).toBeLessThan(0.01);
    }
  });
}

test("supports collection reflow equivalent to 200 percent zoom", async ({
  page,
}) => {
  await page.setViewportSize({ height: 450, width: 720 });
  await page.goto("/collections/collection-alpha");

  await expect(page.locator("main").getByRole("listitem")).toHaveCount(3);
  await expect(
    page.locator("main").getByRole("link", { name: /^Voir / }),
  ).toHaveCount(3);
  expect(await hasHorizontalOverflow(page)).toBe(false);
});

for (const viewport of [
  { height: 844, label: "mobile", width: 390 },
  { height: 1024, label: "tablet", width: 768 },
  { height: 900, label: "desktop", width: 1440 },
] as const) {
  test(`keeps an isolated long collection robust on ${viewport.label}`, async ({
    page,
  }) => {
    await page.setViewportSize(viewport);
    await page.goto("/collections/collection-alpha");
    await page.waitForLoadState("networkidle");

    const expectedHrefs = await injectLongCollection(page);
    const artworkItems = page.locator("main").getByRole("listitem");
    const artworkLinks = artworkItems.getByRole("link", { name: /^Voir / });

    await expect(artworkItems).toHaveCount(12);
    await expect(artworkLinks).toHaveCount(12);
    expect(
      await artworkLinks.evaluateAll((links) =>
        links.map((link) => link.getAttribute("href")),
      ),
    ).toEqual(expectedHrefs);
    expect(await hasHorizontalOverflow(page)).toBe(false);

    for (const artworkLink of await artworkLinks.all()) {
      await expect(artworkLink).toBeVisible();
    }
  });
}

test("keeps the collection artwork continuum keyboard accessible", async ({
  page,
}) => {
  await page.goto("/collections/collection-alpha");

  const artworkLink = page.getByRole("link", { name: "Voir Étude fictive 01" });

  await focusWithKeyboard(page, artworkLink);
  await expect(artworkLink).toBeFocused();
  await expect(artworkLink).not.toHaveCSS("outline-style", "none");
  await page.keyboard.press("Enter");

  await expect(page).toHaveURL(
    "/collections/collection-alpha/oeuvres/study-01",
  );

  const returnLink = page.getByRole("link", {
    name: "Revenir à la collection Collection Alpha",
  });

  await focusWithKeyboard(page, returnLink);
  await expect(returnLink).toBeFocused();
  await expect(returnLink).not.toHaveCSS("outline-style", "none");
  await page.keyboard.press("Enter");

  await expect(page).toHaveURL("/collections/collection-alpha");
});

test("keeps skip navigation operational in the continuum", async ({ page }) => {
  for (const route of [
    "/collections/collection-alpha",
    "/collections/collection-alpha/oeuvres/study-01",
  ]) {
    await page.goto(route);
    await page.keyboard.press("Tab");

    const skipLink = page.getByRole("link", {
      name: "Aller au contenu principal",
    });

    await expect(skipLink).toBeFocused();
    await expect(skipLink).not.toHaveCSS("outline-style", "none");
    await page.keyboard.press("Enter");
    await expect(page.locator("main")).toBeFocused();
  }
});

test("emits no unexpected browser message in the continuum", async ({
  page,
}) => {
  const unexpectedBrowserMessages: string[] = [];

  page.on("console", (message) => {
    if (["error", "warning"].includes(message.type())) {
      unexpectedBrowserMessages.push(`${message.type()}: ${message.text()}`);
    }
  });
  page.on("pageerror", (error) => {
    unexpectedBrowserMessages.push(`pageerror: ${error.message}`);
  });

  await page.goto("/collections/collection-alpha");
  await page.getByRole("link", { name: "Voir Étude fictive 01" }).click();
  await page
    .getByRole("link", { name: "Revenir à la collection Collection Alpha" })
    .click();

  expect(unexpectedBrowserMessages).toEqual([]);
});

test("keeps gallery links reachable by keyboard", async ({ page }) => {
  await page.goto("/collections");

  const collectionLink = page.getByRole("link", {
    name: /Collection Alpha/i,
  });

  await collectionLink.focus();
  await expect(collectionLink).toBeFocused();

  await page.keyboard.press("Enter");

  await expect(page).toHaveURL(/\/collections\/collection-alpha$/);
});

for (const viewport of [
  { height: 844, label: "mobile", width: 390 },
  { height: 1024, label: "tablet", width: 768 },
  { height: 900, label: "desktop", width: 1440 },
] as const) {
  test(`keeps the enriched artwork usable on ${viewport.label}`, async ({
    page,
  }) => {
    await page.setViewportSize(viewport);
    await page.goto("/collections/collection-alpha/oeuvres/study-01");

    await expect(
      page.getByRole("heading", {
        level: 1,
        name: "Étude fictive 01",
      }),
    ).toBeVisible();
    await expect(page.getByText("Caractéristiques")).toBeVisible();
    await expect(
      page.getByText("Acrylique et pigments minéraux"),
    ).toBeVisible();

    const hasHorizontalOverflow = await page.evaluate(
      () =>
        document.documentElement.scrollWidth >
        document.documentElement.clientWidth,
    );

    expect(hasHorizontalOverflow).toBe(false);
  });
}

test("supports artwork reflow equivalent to 200 percent zoom", async ({
  page,
}) => {
  await page.setViewportSize({ height: 450, width: 720 });
  await page.goto("/collections/collection-alpha/oeuvres/study-01");

  const hasHorizontalOverflow = await page.evaluate(
    () =>
      document.documentElement.scrollWidth >
      document.documentElement.clientWidth,
  );

  expect(hasHorizontalOverflow).toBe(false);
  await expect(
    page.getByRole("heading", { level: 1, name: "Étude fictive 01" }),
  ).toBeVisible();
  await expect(page.getByText("Caractéristiques")).toBeVisible();
});

test("keeps artwork information available when its media fails", async ({
  page,
}) => {
  await page.route("**/_next/image**", async (route) => {
    const imageUrl = new URL(route.request().url()).searchParams.get("url");

    if (imageUrl === "/gallery/study-01.webp") {
      await route.abort();
      return;
    }

    await route.continue();
  });
  await page.goto("/collections/collection-alpha/oeuvres/study-01");

  await expect(page.getByText("Image indisponible")).toBeVisible();
  await expect(
    page.getByRole("heading", { level: 1, name: "Étude fictive 01" }),
  ).toBeVisible();
  await expect(page.getByText("Acrylique et pigments minéraux")).toBeVisible();
  await expect(page.getByText("80 × 120 × 2.5 cm")).toBeVisible();
});

test("returns a not found page for invalid gallery routes", async ({
  page,
}) => {
  const routes = [
    "/collections/collection-inconnue",
    "/collections/collection-alpha/oeuvres/oeuvre-inconnue",
    "/collections/collection-beta/oeuvres/study-01",
  ];

  for (const route of routes) {
    const response = await page.goto(route);

    expect(response?.status()).toBe(404);
  }
});

for (const viewport of [
  { width: 390, height: 844, label: "mobile" },
  { width: 768, height: 1024, label: "tablet" },
  { width: 1440, height: 900, label: "desktop" },
] as const) {
  test(`keeps the public homepage usable on ${viewport.label}`, async ({
    page,
  }) => {
    await page.setViewportSize(viewport);

    await page.goto("/");

    await expect(
      page.getByRole("heading", {
        level: 1,
        name: "AZUREUM",
      }),
    ).toBeVisible();

    await expect(
      page.getByRole("heading", {
        level: 3,
        name: "Collection Alpha",
      }),
    ).toBeVisible();

    await expect(
      page.getByRole("heading", {
        level: 3,
        name: "Collection Bêta",
      }),
    ).toBeVisible();

    await expect(
      page.getByRole("link", {
        name: "Découvrir les collections",
      }),
    ).toBeVisible();

    const hasHorizontalOverflow = await page.evaluate(
      () =>
        document.documentElement.scrollWidth >
        document.documentElement.clientWidth,
    );

    expect(hasHorizontalOverflow).toBe(false);
  });
}

test("supports homepage reflow equivalent to 200 percent zoom", async ({
  page,
}) => {
  await page.setViewportSize({
    width: 720,
    height: 450,
  });

  await page.goto("/");

  const hasHorizontalOverflow = await page.evaluate(
    () =>
      document.documentElement.scrollWidth >
      document.documentElement.clientWidth,
  );

  expect(hasHorizontalOverflow).toBe(false);

  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "AZUREUM",
    }),
  ).toBeVisible();

  await expect(
    page.getByRole("link", {
      name: "Découvrir les collections",
    }),
  ).toBeVisible();

  await expect(
    page.getByRole("heading", {
      level: 3,
      name: "Collection Alpha",
    }),
  ).toBeVisible();

  await expect(
    page.getByRole("heading", {
      level: 3,
      name: "Collection Bêta",
    }),
  ).toBeVisible();
});

test("keeps homepage navigation reachable by keyboard", async ({ page }) => {
  await page.goto("/");

  const galleryLink = page.getByRole("link", {
    name: "Découvrir les collections",
  });

  await galleryLink.focus();

  await expect(galleryLink).toBeFocused();

  await page.keyboard.press("Enter");

  await expect(page).toHaveURL(/\/collections$/);
});

test("keeps the public homepage accessible", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator("main")).toHaveCount(1);

  const skipLink = page.getByRole("link", {
    name: /contenu principal/i,
  });

  await expect(skipLink).toBeVisible();

  await skipLink.focus();

  await expect(skipLink).toBeFocused();

  await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);

  await expect(
    page.getByRole("link", {
      name: "Découvrir Collection Alpha",
    }),
  ).toBeVisible();

  await expect(
    page.getByRole("link", {
      name: "Découvrir Collection Bêta",
    }),
  ).toBeVisible();

  await expect(
    page.getByRole("link", {
      name: /design-system/i,
    }),
  ).toHaveCount(0);
});

test("keeps homepage collection access available when its media fail", async ({
  page,
}) => {
  await page.route("**/_next/image**", async (route) => {
    const imageUrl = new URL(route.request().url()).searchParams.get("url");

    if (
      imageUrl === "/gallery/study-01.webp" ||
      imageUrl === "/gallery/composition-a.webp"
    ) {
      await route.abort();
      return;
    }

    await route.continue();
  });

  await page.goto("/");

  await expect(page.getByText("Image indisponible")).toHaveCount(2);
  await expect(
    page.getByRole("heading", {
      level: 3,
      name: "Collection Alpha",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", {
      level: 3,
      name: "Collection Bêta",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", {
      name: "Découvrir Collection Alpha",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", {
      name: "Découvrir Collection Bêta",
    }),
  ).toBeVisible();
});

const davidViewports = [
  { height: 844, label: "mobile", width: 390 },
  { height: 1024, label: "tablet", width: 768 },
  { height: 900, label: "desktop", width: 1440 },
] as const;

for (const viewport of davidViewports) {
  test(`keeps the David presentation usable on ${viewport.label}`, async ({
    page,
  }) => {
    await page.setViewportSize(viewport);
    await page.goto("/david");

    await expect(
      page.getByRole("heading", {
        exact: true,
        level: 1,
        name: "David Prieur-Gelis",
      }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", {
        name: "Découvrir les collections",
      }),
    ).toBeVisible();

    const hasHorizontalOverflow = await page.evaluate(
      () =>
        document.documentElement.scrollWidth >
        document.documentElement.clientWidth,
    );

    expect(hasHorizontalOverflow).toBe(false);

    const menuButton = page.getByRole("button", { name: "Menu" });

    if (await menuButton.isVisible()) {
      await menuButton.click();
    }

    await expect(
      page
        .getByRole("navigation", { name: "Navigation principale" })
        .getByRole("link", { name: "David" }),
    ).toHaveAttribute("aria-current", "page");
  });
}

test("supports David presentation reflow equivalent to 200 percent zoom", async ({
  page,
}) => {
  await page.setViewportSize({ height: 450, width: 720 });
  await page.goto("/david");

  const hasHorizontalOverflow = await page.evaluate(
    () =>
      document.documentElement.scrollWidth >
      document.documentElement.clientWidth,
  );

  expect(hasHorizontalOverflow).toBe(false);
  await expect(
    page.getByRole("heading", {
      exact: true,
      level: 1,
      name: "David Prieur-Gelis",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", {
      name: "Découvrir les collections",
    }),
  ).toBeVisible();
});

test("keeps the David presentation accessible from the keyboard", async ({
  page,
}) => {
  const unexpectedConsoleMessages: string[] = [];

  page.on("console", (message) => {
    if (message.type() === "error" || message.type() === "warning") {
      unexpectedConsoleMessages.push(`${message.type()}: ${message.text()}`);
    }
  });
  page.on("pageerror", (error) => {
    unexpectedConsoleMessages.push(`pageerror: ${error.message}`);
  });

  await page.setViewportSize({ height: 900, width: 1440 });
  await page.goto("/david");

  await expect(page.locator("main")).toHaveCount(1);
  await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
  await expect(page.getByRole("heading", { level: 2 })).toHaveCount(4);

  await page.keyboard.press("Tab");

  const skipLink = page.getByRole("link", {
    name: "Aller au contenu principal",
  });

  await expect(skipLink).toBeFocused();
  await expect(skipLink).not.toHaveCSS("outline-style", "none");
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();

  const collectionsLink = page.getByRole("link", {
    name: "Découvrir les collections",
  });

  await collectionsLink.focus();
  await expect(collectionsLink).toBeFocused();
  await expect(collectionsLink).not.toHaveCSS("outline-style", "none");
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/\/collections$/);
  expect(unexpectedConsoleMessages).toEqual([]);
});

const artisticContentViewports = [
  { height: 844, label: "mobile", width: 390 },
  { height: 1024, label: "tablet", width: 768 },
  { height: 900, label: "desktop", width: 1440 },
] as const;

for (const viewport of artisticContentViewports) {
  test(`keeps artistic content usable on ${viewport.label}`, async ({
    page,
  }) => {
    await page.setViewportSize(viewport);
    await page.goto("/contenus/formes-en-dialogue");

    await expect(
      page.getByRole("heading", {
        level: 1,
        name: "Exposition fictive — Formes en dialogue",
      }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", {
        level: 2,
        name: "Œuvres associées",
      }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", {
        name: "Étude fictive 02",
      }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", {
        name: "Composition fictive A",
      }),
    ).toBeVisible();

    const hasHorizontalOverflow = await page.evaluate(
      () =>
        document.documentElement.scrollWidth >
        document.documentElement.clientWidth,
    );

    expect(hasHorizontalOverflow).toBe(false);
  });
}

test("supports artistic content reflow equivalent to 200 percent zoom", async ({
  page,
}) => {
  await page.setViewportSize({ height: 450, width: 720 });
  await page.goto("/contenus/formes-en-dialogue");

  const hasHorizontalOverflow = await page.evaluate(
    () =>
      document.documentElement.scrollWidth >
      document.documentElement.clientWidth,
  );

  expect(hasHorizontalOverflow).toBe(false);
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Exposition fictive — Formes en dialogue",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", {
      name: "Composition fictive A",
    }),
  ).toBeVisible();
});

test("navigates by keyboard between an artwork and its artistic context", async ({
  page,
}) => {
  const unexpectedConsoleMessages: string[] = [];

  page.on("console", (message) => {
    if (message.type() === "error" || message.type() === "warning") {
      unexpectedConsoleMessages.push(`${message.type()}: ${message.text()}`);
    }
  });
  page.on("pageerror", (error) => {
    unexpectedConsoleMessages.push(`pageerror: ${error.message}`);
  });

  await page.setViewportSize({ height: 900, width: 1440 });
  await page.goto("/collections/collection-alpha/oeuvres/study-02");

  await expect(
    page.getByRole("heading", {
      level: 2,
      name: "Contenus associés",
    }),
  ).toBeVisible();

  const contentLink = page.getByRole("link", {
    name: "Exposition fictive — Formes en dialogue",
  });

  await contentLink.focus();
  await expect(contentLink).toBeFocused();
  await expect(contentLink).not.toHaveCSS("outline-style", "none");
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/\/contenus\/formes-en-dialogue$/);

  const artworkLink = page.getByRole("link", {
    name: "Étude fictive 02",
  });

  await artworkLink.focus();
  await expect(artworkLink).toBeFocused();
  await expect(artworkLink).not.toHaveCSS("outline-style", "none");
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(
    /\/collections\/collection-alpha\/oeuvres\/study-02$/,
  );

  expect(unexpectedConsoleMessages).toEqual([]);
});

test("keeps artistic content accessible when its media fails", async ({
  page,
}) => {
  await page.route("**/_next/image**", async (route) => {
    const imageUrl = new URL(route.request().url()).searchParams.get("url");

    if (imageUrl === "/gallery/composition-a.webp") {
      await route.abort();
      return;
    }

    await route.continue();
  });

  await page.goto("/contenus/formes-en-dialogue");

  await expect(page.getByText("Image indisponible")).toBeVisible();
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Exposition fictive — Formes en dialogue",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", {
      name: "Composition fictive A",
    }),
  ).toBeVisible();
});

test("keeps artistic content semantics and skip navigation accessible", async ({
  page,
}) => {
  await page.goto("/contenus/equilibres-silencieux");

  await expect(page.locator("main")).toHaveCount(1);
  await expect(page.getByRole("article")).toHaveCount(1);
  await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
  await expect(page.getByRole("heading", { level: 2 })).toHaveCount(2);

  await page.keyboard.press("Tab");

  const skipLink = page.getByRole("link", {
    name: "Aller au contenu principal",
  });

  await expect(skipLink).toBeFocused();
  await expect(skipLink).not.toHaveCSS("outline-style", "none");
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
});

test("returns a not found page for an unknown artistic content", async ({
  page,
}) => {
  const response = await page.goto("/contenus/contenu-inconnu");

  expect(response?.status()).toBe(404);
});

test("emits no unexpected browser message on artistic content pages", async ({
  page,
}) => {
  const unexpectedConsoleMessages: string[] = [];

  page.on("console", (message) => {
    if (message.type() === "error" || message.type() === "warning") {
      unexpectedConsoleMessages.push(`${message.type()}: ${message.text()}`);
    }
  });
  page.on("pageerror", (error) => {
    unexpectedConsoleMessages.push(`pageerror: ${error.message}`);
  });

  for (const path of [
    "/contenus/equilibres-silencieux",
    "/contenus/formes-en-dialogue",
    "/contenus/seuils-provisoires",
  ]) {
    await page.goto(path);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  }

  expect(unexpectedConsoleMessages).toEqual([]);
});

const timelineViewports = [
  { height: 844, label: "mobile", width: 390 },
  { height: 1024, label: "tablet", width: 768 },
  { height: 900, label: "desktop", width: 1440 },
] as const;

for (const viewport of timelineViewports) {
  test(`keeps the public timeline usable on ${viewport.label}`, async ({
    page,
  }) => {
    await page.setViewportSize(viewport);
    await page.goto("/chronologie");

    await expect(
      page.getByRole("heading", {
        level: 1,
        name: "Évolution dans le temps",
      }),
    ).toBeVisible();

    await expect(page.locator("main ol")).toBeVisible();
    await expect(page.locator("main ol")).toHaveCount(1);

    await expect(
      page.getByRole("link", {
        name: "Étude fictive 01",
      }),
    ).toBeVisible();

    await expect(
      page.getByRole("link", {
        name: "Texte fictif — Équilibres silencieux",
      }),
    ).toBeVisible();

    const resourceLinks = page.locator("main ol a");
    const resourceLinkCount = await resourceLinks.count();

    expect(resourceLinkCount).toBeGreaterThan(0);

    for (let index = 0; index < resourceLinkCount; index += 1) {
      await expect(resourceLinks.nth(index)).toBeVisible();
    }

    const hasHorizontalOverflow = await page.evaluate(
      () =>
        document.documentElement.scrollWidth >
        document.documentElement.clientWidth,
    );

    expect(hasHorizontalOverflow).toBe(false);
  });
}

test("supports timeline reflow equivalent to 200 percent zoom", async ({
  page,
}) => {
  await page.setViewportSize({
    height: 450,
    width: 720,
  });

  await page.goto("/chronologie");

  const hasHorizontalOverflow = await page.evaluate(
    () =>
      document.documentElement.scrollWidth >
      document.documentElement.clientWidth,
  );

  expect(hasHorizontalOverflow).toBe(false);

  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Évolution dans le temps",
    }),
  ).toBeVisible();

  await expect(
    page.getByRole("link", {
      name: "Étude fictive 01",
    }),
  ).toBeVisible();

  await expect(
    page.getByRole("link", {
      name: "Texte fictif — Équilibres silencieux",
    }),
  ).toBeVisible();

  const resourceLinks = page.locator("main ol a");
  const resourceLinkCount = await resourceLinks.count();

  expect(resourceLinkCount).toBeGreaterThan(0);

  for (let index = 0; index < resourceLinkCount; index += 1) {
    await expect(resourceLinks.nth(index)).toBeVisible();
  }
});

test("keeps the public timeline semantics and skip navigation accessible", async ({
  page,
}) => {
  await page.setViewportSize({
    height: 900,
    width: 1440,
  });

  await page.goto("/chronologie");

  await expect(page.locator("main")).toHaveCount(1);
  await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
  await expect(page.locator("main ol")).toBeVisible();
  await expect(page.locator("main ol")).toHaveCount(1);
  await expect(
    page
      .getByRole("navigation", { name: "Navigation principale" })
      .getByRole("link", { name: "Évolution dans le temps" }),
  ).toHaveAttribute("aria-current", "page");

  await page.keyboard.press("Tab");

  const skipLink = page.getByRole("link", {
    name: "Aller au contenu principal",
  });

  await expect(skipLink).toBeFocused();
  await expect(skipLink).not.toHaveCSS("outline-style", "none");

  await page.keyboard.press("Enter");

  await expect(page.locator("main")).toBeFocused();
});

test("keeps timeline resource links reachable by keyboard", async ({
  page,
}) => {
  await page.setViewportSize({
    height: 900,
    width: 1440,
  });

  await page.goto("/chronologie");

  const artworkLink = page.getByRole("link", {
    name: "Étude fictive 01",
  });

  await focusWithKeyboard(page, artworkLink);

  await expect(artworkLink).toBeFocused();
  await expect(artworkLink).not.toHaveCSS("outline-style", "none");

  await page.keyboard.press("Enter");

  await expect(page).toHaveURL(
    /\/collections\/collection-alpha\/oeuvres\/study-01$/,
  );

  await page.goto("/chronologie");

  const contentLink = page.getByRole("link", {
    name: "Texte fictif — Équilibres silencieux",
  });

  await focusWithKeyboard(page, contentLink);

  await expect(contentLink).toBeFocused();
  await expect(contentLink).not.toHaveCSS("outline-style", "none");

  await page.keyboard.press("Enter");

  await expect(page).toHaveURL(/\/contenus\/equilibres-silencieux$/);
});

test("presents the timeline years in chronological order", async ({ page }) => {
  await page.goto("/chronologie");

  const timelineText = await page.locator("main").innerText();

  const year2023Index = timelineText.indexOf("2023");
  const year2024Index = timelineText.indexOf("2024");
  const year2025Index = timelineText.indexOf("2025");

  expect(year2023Index).toBeGreaterThan(-1);
  expect(year2024Index).toBeGreaterThan(year2023Index);
  expect(year2025Index).toBeGreaterThan(year2024Index);
});

test("emits no unexpected browser message on the public timeline", async ({
  page,
}) => {
  const unexpectedConsoleMessages: string[] = [];

  page.on("console", (message) => {
    if (message.type() === "error" || message.type() === "warning") {
      unexpectedConsoleMessages.push(`${message.type()}: ${message.text()}`);
    }
  });

  page.on("pageerror", (error) => {
    unexpectedConsoleMessages.push(`pageerror: ${error.message}`);
  });

  await page.goto("/chronologie");

  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Évolution dans le temps",
    }),
  ).toBeVisible();

  await expect(
    page.getByRole("link", {
      name: "Étude fictive 01",
    }),
  ).toBeVisible();

  expect(unexpectedConsoleMessages).toEqual([]);
});
