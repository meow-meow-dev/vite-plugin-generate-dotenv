import { describe, it } from "vitest";

import { environmentToFileContent } from "./environmentToFileContent.js";

describe("environmentToFileContent", () => {
  it("correcly generates the content", ({ expect }) => {
    expect(environmentToFileContent({ A: "a", B: "b" })).toEqual(
      'A="a"\nB="b"\n',
    );
  });

  it("adds a single-line header", ({ expect }) => {
    expect(
      environmentToFileContent({ A: "a", B: "b" }, "# Auto-generated !"),
    ).toEqual('# Auto-generated !\n\nA="a"\nB="b"\n');
  });

  it("adds a multi-lines header", ({ expect }) => {
    expect(
      environmentToFileContent({ A: "a", B: "b" }, [
        "# Auto-generated",
        "Don't touch or you'll be fired",
      ]),
    ).toEqual(
      '# Auto-generated\nDon\'t touch or you\'ll be fired\n\nA="a"\nB="b"\n',
    );
  });
});
