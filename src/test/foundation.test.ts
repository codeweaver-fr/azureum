import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

import { describe, expect, it } from "vitest";

interface ProjectManifest {
  engines?: {
    node?: string;
  };
  name?: string;
  packageManager?: string;
  private?: boolean;
}

const manifestPath = fileURLToPath(
  new URL("../../package.json", import.meta.url),
);

const manifest = JSON.parse(
  readFileSync(manifestPath, "utf8"),
) as ProjectManifest;

describe("technical foundation manifest", () => {
  it("keeps the project private and tied to its validated runtime", () => {
    expect(manifest).toMatchObject({
      engines: {
        node: ">=24.0.0 <25",
      },
      name: "azureum",
      packageManager: "pnpm@10.34.5",
      private: true,
    });
  });
});
