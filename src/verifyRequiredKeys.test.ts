import { describe, it } from "vitest";

import { verifyRequiredKeys } from "./verifyRequiredKeys.js";

describe("verifyRequiredKeys", () => {
  it("returns undefined if there's no missing key", ({ expect }) => {
    expect(verifyRequiredKeys(["A", "B"], { A: "a", B: "b" })).toBeUndefined();
  });

  it("correctly returns missing keys", ({ expect }) => {
    expect(verifyRequiredKeys(["A", "B", "D"], { A: "a", C: "c" })).toEqual([
      "B",
      "D",
    ]);
  });

  it("marks all keys as missing when environment is undefined", ({
    expect,
  }) => {
    expect(verifyRequiredKeys(["A", "B"], undefined)).toEqual(["A", "B"]);
  });
});
