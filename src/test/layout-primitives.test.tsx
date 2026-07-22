import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { Container, Grid, GridItem, Stack } from "@/shared/components/layout";

const containerStyles = readFileSync(
  fileURLToPath(
    new URL(
      "../shared/components/layout/Container/Container.module.css",
      import.meta.url,
    ),
  ),
  "utf8",
);
const gridStyles = readFileSync(
  fileURLToPath(
    new URL(
      "../shared/components/layout/Grid/Grid.module.css",
      import.meta.url,
    ),
  ),
  "utf8",
);
const stackStyles = readFileSync(
  fileURLToPath(
    new URL(
      "../shared/components/layout/Stack/Stack.module.css",
      import.meta.url,
    ),
  ),
  "utf8",
);

describe("layout primitives", () => {
  it("renders generic server-compatible wrappers", () => {
    const markup = renderToStaticMarkup(
      <Container data-testid="container" width="reading">
        <Stack direction="vertical" gap="md">
          <Grid gap="lg">
            <GridItem span={{ compact: 4, tablet: 6, desktop: 8 }}>
              Content
            </GridItem>
          </Grid>
        </Stack>
      </Container>,
    );

    expect(markup).toContain('data-testid="container"');
    expect(markup).toContain("Content");
    expect(markup).toContain("--grid-span-compact:4");
    expect(markup).toContain("--grid-span-tablet:6");
    expect(markup).toContain("--grid-span-desktop:8");
  });

  it("uses only validated tokens for spacing and dimensions", () => {
    expect(containerStyles).toContain("var(--size-container-main)");
    expect(containerStyles).toContain("var(--size-reading-standard)");
    expect(containerStyles).toContain("var(--size-reading-narrow)");

    const gridGaps = {
      lg: "24",
      md: "16",
      xl: "32",
    };

    for (const [name, token] of Object.entries(gridGaps)) {
      const className = `gap${name.charAt(0).toUpperCase()}${name.slice(1)}`;
      expect(gridStyles).toContain(`.${className}`);
      expect(gridStyles).toContain(`var(--space-${token})`);
    }

    const stackSpaces = {
      "2xl": "48",
      "2xs": "4",
      "3xl": "64",
      "4xl": "96",
      "5xl": "128",
      lg: "24",
      md: "16",
      none: "0",
      sm: "12",
      xl: "32",
      xs: "8",
    };

    for (const [name, token] of Object.entries(stackSpaces)) {
      const className = `gap${name.charAt(0).toUpperCase()}${name.slice(1)}`;
      expect(stackStyles).toContain(`.${className}`);
      expect(stackStyles).toContain(`var(--space-${token})`);
    }
  });

  it("implements the documented responsive grid and container breakpoints", () => {
    expect(gridStyles).toContain("repeat(4, minmax(0, 1fr))");
    expect(gridStyles).toContain("@media (min-width: 768px)");
    expect(gridStyles).toContain("repeat(8, minmax(0, 1fr))");
    expect(gridStyles).toContain("@media (min-width: 1024px)");
    expect(gridStyles).toContain("repeat(12, minmax(0, 1fr))");

    for (const breakpoint of ["480", "1024", "1600"]) {
      expect(containerStyles).toContain(`@media (min-width: ${breakpoint}px)`);
    }
  });
});
