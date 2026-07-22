import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

import { describe, expect, it } from "vitest";

const tokensPath = fileURLToPath(
  new URL("../styles/tokens.css", import.meta.url),
);
const accessibilityPath = fileURLToPath(
  new URL("../styles/accessibility.css", import.meta.url),
);

const tokens = readFileSync(tokensPath, "utf8");
const accessibility = readFileSync(accessibilityPath, "utf8");

describe("design system CSS foundations", () => {
  it("exposes every validated token family", () => {
    const representativeTokens = [
      "--color-brand-blue",
      "--color-background",
      "--color-focus-ring",
      "--font-size-body",
      "--space-16",
      "--size-control-standard",
      "--border-width-standard",
      "--radius-standard",
      "--shadow-medium",
      "--z-dialog",
      "--duration-standard",
      "--ease-standard",
    ];

    for (const token of representativeTokens) {
      expect(tokens).toContain(`${token}:`);
    }
  });

  it("keeps unvalidated semantic roles out of the token contract", () => {
    expect(tokens).not.toMatch(
      /--color-(overlay|backdrop|skeleton|placeholder):/,
    );
  });

  it("neutralizes every animated duration when motion is reduced", () => {
    expect(accessibility).toContain("prefers-reduced-motion: reduce");

    for (const duration of ["fast", "standard", "settled", "editorial"]) {
      expect(accessibility).toContain(`--duration-${duration}: 0ms;`);
    }
  });
});
