import { describe, it } from "vitest";

import { environmentToFileContent } from "./environmentToFileContent.js";

describe("environmentToFileContent", () => {
  it("correcly generates the content", ({ expect }) => {
    expect(environmentToFileContent({ A: "a", B: "b" })).toEqual(
      'A="a"\nB="b"\n',
    );
  });
});
