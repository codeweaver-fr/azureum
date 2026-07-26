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

 await page
  .getByRole("link", { name: "Voir Étude fictive 01" })
  .click();

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
