import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { Heading, Text } from "@/shared/components/typography";

const headingStyles = readFileSync(
  fileURLToPath(
    new URL(
      "../shared/components/typography/Heading/Heading.module.css",
      import.meta.url,
    ),
  ),
  "utf8",
);
const textStyles = readFileSync(
  fileURLToPath(
    new URL(
      "../shared/components/typography/Text/Text.module.css",
      import.meta.url,
    ),
  ),
  "utf8",
);

describe("typography primitives", () => {
  it("renders every supported text element explicitly", () => {
    for (const element of ["p", "span", "small", "strong", "em"] as const) {
      const markup = renderToStaticMarkup(
        <Text as={element} variant="body">
          Content
        </Text>,
      );

      expect(markup).toMatch(new RegExp(`^<${element}\\b`));
    }
  });

  it("keeps the heading element independent from its visual variant", () => {
    const markup = renderToStaticMarkup(
      <Heading as="h2" variant="display">
        Editorial title
      </Heading>,
    );

    expect(markup).toMatch(/^<h2\b/);
    expect(markup).toContain("display");
  });

  it("maps text variants exclusively to DT-02 tokens", () => {
    const textTokens = [
      ["xs", "xs", "regular"],
      ["sm", "sm", "regular"],
      ["body", "body", "regular"],
      ["bodyLg", "body-lg", "regular"],
    ];

    for (const [className, level, weight] of textTokens) {
      expect(textStyles).toContain(`.${className}`);
      expect(textStyles).toContain(`var(--font-size-${level})`);
      expect(textStyles).toContain(`var(--line-height-${level})`);
      expect(textStyles).toContain(`var(--font-weight-${weight})`);
    }
  });

  it("maps heading variants exclusively to DT-02 tokens", () => {
    const headingTokens = [
      ["display", "heading-1", "bold"],
      ["h1", "heading-2", "bold"],
      ["h2", "heading-3", "semibold"],
    ];

    for (const [className, level, weight] of headingTokens) {
      expect(headingStyles).toContain(`.${className}`);
      expect(headingStyles).toContain(`var(--font-size-${level})`);
      expect(headingStyles).toContain(`var(--line-height-${level})`);
      expect(headingStyles).toContain(`var(--font-weight-${weight})`);
    }
  });

  it("contains no local typographic values", () => {
    for (const styles of [textStyles, headingStyles]) {
      const declarations = styles.match(
        /(?:font-size|font-weight|line-height):\s*([^;]+);/g,
      );

      expect(declarations).not.toBeNull();
      expect(declarations?.every((value) => value.includes("var(--"))).toBe(
        true,
      );
    }
  });
});
