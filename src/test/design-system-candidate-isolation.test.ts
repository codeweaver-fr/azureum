import { readdirSync, readFileSync } from "node:fs";
import { extname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

import { describe, expect, it } from "vitest";

const sourceRoot = fileURLToPath(new URL("../", import.meta.url));
const experimentalPlaygroundRoot = join(
  sourceRoot,
  "app",
  "playground",
  "experimental",
);
const productionRoots = [
  join(sourceRoot, "app"),
  join(sourceRoot, "shared", "components"),
  join(sourceRoot, "styles"),
];
const inspectedExtensions = new Set([".css", ".ts", ".tsx"]);
const candidatePrefix = `--${"candidate"}-`;

function listProductionFiles(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);

    if (path === experimentalPlaygroundRoot) {
      return [];
    }

    if (entry.isDirectory()) {
      return listProductionFiles(path);
    }

    return inspectedExtensions.has(extname(entry.name)) ? [path] : [];
  });
}

describe("candidate token isolation", () => {
  it("keeps candidate tokens out of production sources and public exports", () => {
    const violations = productionRoots.flatMap((root) =>
      listProductionFiles(root)
        .filter((path) => readFileSync(path, "utf8").includes(candidatePrefix))
        .map((path) => relative(sourceRoot, path)),
    );

    expect(violations).toEqual([]);
  });
});
