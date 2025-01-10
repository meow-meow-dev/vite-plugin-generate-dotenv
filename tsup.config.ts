import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  dts: true,
  entry: ["src/index.ts"],
  format: "esm",
  outExtension() {
    return {
      js: `.mjs`,
    };
  },
  sourcemap: false,
  splitting: false,
  target: "node22",
});
