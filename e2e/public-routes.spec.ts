import { expect, test } from "@playwright/test";

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
    heading: "Contenu artistique",
    path: "/contenus/contenu-test",
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

test("navigates from collections to an artwork and back", async ({ page }) => {
  await page.goto("/collections");

  await page.getByRole("link", { name: /Collection Alpha/i }).click();

  await expect(page).toHaveURL(/\/collections\/collection-alpha$/);

  await page.getByRole("link", { name: "Voir Étude fictive 01" }).click();

  await expect(page).toHaveURL(
    /\/collections\/collection-alpha\/oeuvres\/study-01$/,
  );

  await page.getByRole("link", { name: "Revenir à la collection" }).click();

  await expect(page).toHaveURL(/\/collections\/collection-alpha$/);
});

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

    const hasHorizontalOverflow = await page.evaluate(
      () =>
        document.documentElement.scrollWidth >
        document.documentElement.clientWidth,
    );

    expect(hasHorizontalOverflow).toBe(false);
  }
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
