import { expect, test } from "@playwright/test";

test("the application foundation is available", async ({ page }) => {
  const response = await page.goto("/");

  expect(response?.ok()).toBe(true);
  await expect(page.locator("html")).toBeVisible();
  await expect(page.getByRole("heading", { name: "AZUREUM" })).toBeVisible();
});
