import type { Plugin } from "vite";

import { rmSync, writeFileSync } from "fs";

import { environmentToFileContent } from "./environmentToFileContent.js";
import { extractVariables } from "./extractVariables.js";
import { verifyRequiredKeys } from "./verifyRequiredKeys.js";

export type GenerateDotenvProps = {
  outputFile: string;
  prefix: string;
  requiredKeys?: string[];
};

export function generateDotenv({
  outputFile,
  prefix,
  requiredKeys,
}: GenerateDotenvProps): Plugin {
  return {
    apply: "serve",
    configResolved(): void {
      // import.meta.env isn't available
      // eslint-disable-next-line n/no-process-env
      const env = process.env;

      const matchingEnvironment = extractVariables(env, prefix);

      if (requiredKeys !== undefined) {
        const missingKeys = verifyRequiredKeys(
          requiredKeys,
          matchingEnvironment,
        );

        if (missingKeys !== undefined) {
          const errorMessage = `The followng keys are missing : ${missingKeys.join(" ")}`;
          console.error(errorMessage);

          throw new Error(errorMessage);
        }
      }

      if (matchingEnvironment === undefined)
        rmSync(outputFile, { force: true });
      else
        writeFileSync(
          outputFile,
          environmentToFileContent(matchingEnvironment),
        );
    },
    name: "vite-plugin-generate-dotenv-file",
  };
}
