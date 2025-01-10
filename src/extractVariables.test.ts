import { describe, it } from "vitest";

import { extractVariables } from "./extractVariables.js";

describe("extractVariables", () => {
  it("correctly extracts existing variables", ({ expect }) => {
    expect(
      extractVariables(
        { MY_APP_DEVELOPMENT_JWT_TOKEN: "...token...", PATH: "/usr/bin" },
        "MY_APP_DEVELOPMENT_",
      ),
    ).toEqual({ JWT_TOKEN: "...token..." });
  });

  it("returns undefined when there's no match", ({ expect }) => {
    expect(
      extractVariables(
        { MY_APP_DEVELOPMENT_JWT_TOKEN: "...token...", PATH: "/usr/bin" },
        "MY_OTHER_APP_DEVELOPMENT_",
      ),
    ).toBeUndefined();
  });
});
