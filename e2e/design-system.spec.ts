import { expect, test } from "@playwright/test";

const viewports = [
  { height: 844, label: "mobile", width: 390 },
  { height: 1024, label: "tablet", width: 768 },
  { height: 900, label: "desktop", width: 1440 },
] as const;

for (const viewport of viewports) {
  test(`validates the Design System at ${viewport.label}`, async ({ page }) => {
    const unexpectedConsoleMessages: string[] = [];

    page.on("console", (message) => {
      if (message.type() === "error" || message.type() === "warning") {
        unexpectedConsoleMessages.push(`${message.type()}: ${message.text()}`);
      }
    });
    page.on("pageerror", (error) => {
      unexpectedConsoleMessages.push(`pageerror: ${error.message}`);
    });

    await page.setViewportSize(viewport);
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/design-system");

    await expect(
      page.getByRole("heading", {
        level: 1,
        name: "Référence technique du Design System AZUREUM",
      }),
    ).toBeVisible();

    for (const heading of [
      "Introduction et fondations",
      "Couleurs et tokens essentiels",
      "Typographie",
      "Layout",
      "Interactions",
      "Médias",
      "Consignes de validation",
    ]) {
      await expect(
        page.getByRole("heading", { level: 2, name: heading }),
      ).toBeVisible();
    }

    const hasHorizontalOverflow = await page.evaluate(
      () =>
        document.documentElement.scrollWidth >
        document.documentElement.clientWidth,
    );
    expect(hasHorizontalOverflow).toBe(false);

    await page.keyboard.press("Tab");
    const internalLink = page.getByRole("link", {
      name: "Commencer la validation",
    });
    await expect(internalLink).toBeFocused();
    await expect(internalLink).not.toHaveCSS("outline-style", "none");

    await page.keyboard.press("Tab");
    const firstButton = page.getByRole("button", {
      name: "primary compact",
    });
    await expect(firstButton).toBeFocused();
    await expect(firstButton).not.toHaveCSS("outline-style", "none");

    const loadingButton = page
      .getByRole("button", { name: "Chargement" })
      .first();
    await expect(loadingButton).toHaveAttribute("aria-busy", "true");
    await expect(loadingButton).toBeDisabled();
    const transitionDurations = await loadingButton.evaluate((element) =>
      getComputedStyle(element).transitionDuration.split(", "),
    );
    expect(transitionDurations.every((duration) => duration === "0s")).toBe(
      true,
    );

    await expect(
      page.getByRole("img", { name: "Image indisponible" }),
    ).toBeVisible();
    await expect(page.getByText("Erreur observée")).toBeVisible();

    await page
      .getByRole("button", { name: "Afficher l’image disponible" })
      .click();

    await expect(
      page.getByRole("img", {
        name: "Composition abstraite technique AZUREUM",
      }),
    ).toBeVisible();
    await expect(
      page.getByRole("img", { name: "Image indisponible" }),
    ).toHaveCount(0);

    expect(unexpectedConsoleMessages).toEqual([]);
  });
}
