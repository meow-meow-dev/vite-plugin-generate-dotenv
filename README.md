##

Vite plugin used to generate a .env file from prefixed variables (usually secrets) found in process.env.

## Why ?

When developing projects using Cloudflare pages, development secrets have to be set in a local .dev.vars file. This makes it hard to share them between branches as this file shouldn't be put under version control.

Using this plugin, you can declare the secrets in .bashrc (using a different prefix for each project), and extract automatically them to .dev.var

## Sample .bashrc

```bash
# .bashrc

MY_PROJECT_DEVELOPMENT_JWT_SECRET="...jwt secret..."
MY_PROJECT_DEVELOPMENT_GOOGLE_SECRET_KEY="...google secret key..."
MY_PROJECT_DEVELOPMENT_FACEBOOK_SECRET_KEY="...facebook secret key..."
```

## Usage in vitest.config.ts

```js
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

When running `vite dev`, the following file will be generated :

```bash
# Auto-generated by @meow-meow-dev/vite-plugin-generate-dotenv
# Don't edit ! Any change will be overwritten

JWT_SECRET="...jwt secret..."
GOOGLE_SECRET_KEY="...google secret key..."
FACEBOOK_SECRET_KEY="...facebook secret key..."
```

## Plugin parameters:

| name         | type     | required | description                                  | example                               |
| ------------ | -------- | -------- | -------------------------------------------- | ------------------------------------- |
| outputFile   | string   | ✅       | Name of the file to generate                 | ".dev.vars" (for Cloudflare Pages)    |
| prefix       | string   | ✅       | Prefix to look for                           | "MY_PROJECT_DEVELOPMENT"              |
| requiredKeys | string[] | ❌       | Keys for required variables (without prefix) | ["JWT_SECRET", "FACEBOOK_SECRET_KEY"] |

_The plugin will delete the output file if no matching variable is found !_
