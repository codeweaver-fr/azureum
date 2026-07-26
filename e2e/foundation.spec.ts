import { expect, test } from "@playwright/test";

const shellViewports = [
  { height: 844, label: "mobile", width: 390 },
  { height: 1024, label: "tablet", width: 768 },
  { height: 900, label: "desktop", width: 1440 },
] as const;

test("the application foundation is available", async ({ page }) => {
  const unexpectedConsoleMessages: string[] = [];

  page.on("console", (message) => {
    if (message.type() === "error" || message.type() === "warning") {
      unexpectedConsoleMessages.push(`${message.type()}: ${message.text()}`);
    }
  });
  page.on("pageerror", (error) => {
    unexpectedConsoleMessages.push(`pageerror: ${error.message}`);
  });

  const response = await page.goto("/");

  expect(response?.ok()).toBe(true);
  await expect(page.locator("html")).toBeVisible();
  await expect(page.getByRole("heading", { name: "AZUREUM" })).toBeVisible();
  await expect(page.locator("footer")).toContainText("AZUREUM");
  await expect(page.locator("footer").getByRole("link")).toHaveCount(0);
  expect(unexpectedConsoleMessages).toEqual([]);
});

test("the skip link reveals focus and targets the main landmark", async ({
  page,
}) => {
  await page.goto("/");

  await page.keyboard.press("Tab");

  const skipLink = page.getByRole("link", {
    name: "Aller au contenu principal",
  });
  await expect(skipLink).toBeFocused();
  await expect(skipLink).not.toHaveCSS("outline-style", "none");

  await page.keyboard.press("Enter");

  await expect(page.locator("main")).toBeFocused();
  await expect(page).toHaveURL(/#main-content$/);
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

test("the public navigation identifies the current destination", async ({
  page,
}) => {
  await page.setViewportSize({ height: 900, width: 1440 });
  await page.goto("/collections");

  const navigation = page.getByRole("navigation", {
    name: "Navigation principale",
  });

  await expect(
    navigation.getByRole("link", { name: "Collections" }),
  ).toHaveAttribute("aria-current", "page");
  await expect(
    navigation.getByRole("link", { name: "David" }),
  ).not.toHaveAttribute("aria-current");
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

  await page.getByRole("button", { name: "Menu" }).click();
  await navigation.getByRole("link", { name: "Collections" }).click();

  await expect(page).toHaveURL(/\/collections$/);
  await expect(page.getByRole("button", { name: "Menu" })).toHaveAttribute(
    "aria-expanded",
    "false",
  );
  await expect(navigation).toHaveCount(0);
});

for (const viewport of shellViewports) {
  test(`the public shell reflows without overflow at ${viewport.label}`, async ({
    page,
  }) => {
    await page.setViewportSize(viewport);
    await page.goto("/");

    const hasHorizontalOverflow = await page.evaluate(
      () =>
        document.documentElement.scrollWidth >
        document.documentElement.clientWidth,
    );

    expect(hasHorizontalOverflow).toBe(false);
    await expect(page.locator("header")).toBeVisible();
    await expect(page.locator("main")).toBeVisible();
    await expect(page.locator("footer")).toBeVisible();
  });
}

test("the public shell supports reflow equivalent to 200 percent zoom", async ({
  page,
}) => {
  await page.setViewportSize({ height: 450, width: 720 });
  await page.goto("/");

  const hasHorizontalOverflow = await page.evaluate(
    () =>
      document.documentElement.scrollWidth >
      document.documentElement.clientWidth,
  );

  expect(hasHorizontalOverflow).toBe(false);
  await expect(page.getByRole("button", { name: "Menu" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.locator("footer")).toBeVisible();
});

test("the technical Design System route stays outside public navigation", async ({
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

  await page.goto("/design-system");

  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Référence technique du Design System AZUREUM",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("navigation", { name: "Navigation principale" }),
  ).toHaveCount(0);
  expect(unexpectedConsoleMessages).toEqual([]);
});
