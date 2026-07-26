import { expect, test } from "@playwright/test";

test("the application foundation is available", async ({ page }) => {
  const response = await page.goto("/");

  expect(response?.ok()).toBe(true);
  await expect(page.locator("html")).toBeVisible();
  await expect(page.getByRole("heading", { name: "AZUREUM" })).toBeVisible();
});

test("the public desktop navigation follows the validated keyboard order", async ({
  page,
}) => {
  await page.goto("/");

  const navigation = page.getByRole("navigation", {
    name: "Navigation principale",
  });
  const links = navigation.getByRole("link");

  await expect(links).toHaveCount(3);
  await expect(links.nth(0)).toHaveText("Collections");
  await expect(links.nth(0)).toHaveAttribute("href", "/collections");
  await expect(links.nth(1)).toHaveText("David");
  await expect(links.nth(1)).toHaveAttribute("href", "/david");
  await expect(links.nth(2)).toHaveText("Évolution dans le temps");
  await expect(links.nth(2)).toHaveAttribute("href", "/chronologie");

  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Aller au contenu principal" }),
  ).toBeFocused();

  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "AZUREUM" })).toBeFocused();

  await page.keyboard.press("Tab");
  await expect(links.nth(0)).toBeFocused();
});

test("the public mobile navigation is accessible and predictable", async ({
  page,
}) => {
  await page.setViewportSize({ height: 844, width: 390 });
  await page.goto("/");

  const toggle = page.getByRole("button", { name: "Menu" });
  const navigation = page.getByRole("navigation", {
    name: "Navigation principale",
  });

  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await expect(navigation).toHaveCount(0);

  await toggle.click();

  await expect(page.getByRole("button", { name: "Fermer" })).toHaveAttribute(
    "aria-expanded",
    "true",
  );
  await expect(navigation).toBeVisible();
  await expect(navigation.getByRole("link")).toHaveCount(3);

  await page.keyboard.press("Escape");

  await expect(page.getByRole("button", { name: "Menu" })).toBeFocused();
  await expect(page.getByRole("button", { name: "Menu" })).toHaveAttribute(
    "aria-expanded",
    "false",
  );
  await expect(navigation).toHaveCount(0);
});
