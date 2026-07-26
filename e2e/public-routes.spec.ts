import { expect, test } from "@playwright/test";

const publicRoutes = [
  { heading: "AZUREUM", path: "/" },
  { heading: "David", path: "/david" },
  { heading: "Collections", path: "/collections" },
  {
    heading: "Collection",
    path: "/collections/collection-test",
  },
  {
    heading: "Œuvre",
    path: "/collections/collection-test/oeuvres/oeuvre-test",
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
  test(`renders the minimal public route ${route.path}`, async ({ page }) => {
    const response = await page.goto(route.path);

    expect(response?.ok()).toBe(true);
    await expect(
      page.getByRole("heading", { level: 1, name: route.heading }),
    ).toBeVisible();
    await expect(page.locator("main")).toHaveCount(1);
  });
}

test("keeps an artwork connected to its collection", async ({ page }) => {
  await page.goto("/collections/collection-test/oeuvres/oeuvre-test");

  await expect(
    page.getByRole("link", { name: "Revenir à la collection" }),
  ).toHaveAttribute("href", "/collections/collection-test");
});
