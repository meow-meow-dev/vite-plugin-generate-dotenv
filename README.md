##

Vite plugin used to generate a .env file from variables (usually secrets) in process.env.

Useful to share environment variables set in .bashrc between several branches.

## Plugin parameters:

| name         | type     | required | description                                  | example                               |
| ------------ | -------- | -------- | -------------------------------------------- | ------------------------------------- |
| outputFile   | string   | ✅       | Name of the file to generate                 | ".dev.vars" (for Cloudflare Pages)    |
| prefix       | string   | ✅       | Prefix to look for                           | "MY_PROJECT_DEVELOPMENT"              |
| requiredKeys | string[] | ❌       | Keys for required variables (without prefix) | ["JWT_SECRET", "FACEBOOK_SECRET_KEY"] |

_The plugin will delete the output file if no matching variable is found !_

## Usage in vites.config.ts

```
// vite.config.ts
import { defineConfig } from "vite";
import { generateDotenv } from "@meow-meow-dev/vite-plugin-generate-dotenv"

export default defineConfig(({ mode }): UserConfig => {
    return ({
        // ...,
        plugins: [
            // ...,
            generateDotenv({
                outputFile: ".dev.vars",
                prefix: "MY_PROJECT_DEVELOPMENT_",
                requiredKeys: [
                    "JWT_SECRET",
                    "GOOGLE_SECRET_KEY",
                    "FACEBOOK_SECRET_KEY",
                    ],
            })
        ]
    });
});
```
