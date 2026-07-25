import { expect, test } from "@playwright/test";

test("ArtworkImage exposes and resets its unavailable state", async ({
  page,
}) => {
  await page.goto("/");

  await expect(
    page.getByRole("img", { name: "Image indisponible" }),
  ).toBeVisible();
  await expect(page.getByText("Erreur observée")).toBeVisible();

  await page
    .getByRole("button", { name: "Afficher l’œuvre disponible" })
    .click();

  await expect(
    page.getByRole("img", { name: "Démonstration d’une œuvre AZUREUM" }),
  ).toBeVisible();
  await expect(
    page.getByRole("img", { name: "Image indisponible" }),
  ).toHaveCount(0);
});
