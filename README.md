# SolidStart Boilerplate With Dev Essentials

This is a clone of a [`solid-start`](https://github.com/solidjs/solid-start/tree/main/examples/bare) bare [Solid](https://github.com/solidjs/solid) project via `npm init solid@latest` with TypeScript and SSR.

This boilerplate adds the following:

## (Opinionated) Essentials

- **use [`.yarn`](https://yarnpkg.com/getting-started/migration) package manager on `berry@^3` with `.yarnrc.yml`**

- **add `.npmrc` and `.nvmrc`** for the minimum supported node version of all modules **via [`ls-engines`](https://www.npmjs.com/package/ls-engines)**

- **Eslint and Prettier configs and plugins**

    <details>
    <summary>  ▷ <code>devDependencies</code> </summary>
    <br>

  ```json
      "@typescript-eslint/eslint-plugin": "^5.43.0",
      "@typescript-eslint/parser": "^5.43.0",
      "eslint": "^8.28.0",
      "eslint-config-airbnb-base": "^15.0.0",
      "eslint-config-airbnb-typescript": "^17.0.0",
      "eslint-config-prettier": "^8.5.0",
      "eslint-plugin-prettier": "^4.2.1",
      "eslint-plugin-solid": "^0.8.0",
      "prettier": "^2.7.1",
  ```

    </details>
    <br>

- **VSCode `formatOnSave actionsOnSave typescript.tsdk`**

    <details>
    <summary> ▷ <code>.vscode/settings.json</code> </summary>
    <br>

  ```jsonc
  {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": {
      "source.organizeImports": true,
      "source.fixAll.eslint": true
    },
    "eslint.format.enable": true,
    "eslint.lintTask.enable": true,
    "typescript.tsdk": "node_modules/typescript/lib"
  }
  ```

    </details>
    <br>

- **Vercel Adapter on Vite plugin configs**

    <details>
    <summary> ▷ <code>vite.config.ts</code> </summary>
    <br>

  ```ts
  import vercel from "solid-start-vercel";
  import solid from "solid-start/vite";
  import { defineConfig } from "vite";

  export default defineConfig({
    /**
     * Use vercel adapter to deploy to vercel
     * @see {@link https://github.com/vercel/vercel/tree/main/examples/solidstart solidstart}
     *
     * Additional options on how use edge runtime over node
     * @see {@link https://github.com/solidjs/solid-start/tree/main/packages/start-vercel start-vercel}
     */
    plugins: [solid({ adapter: vercel() })],
  });
  ```

    </details>
    <br>

## Installation

- Clone this Repo
  ```sh
  git clone ssh://git@github.com/israelias/solidstart-boilerplate.git
  ```
- Install
  ```sh
  cd solidstart-boilerplate
  yarn install
  ```
- Start the development server
  ```sh
  yarn dev
  ```
- Or start the server and open the app in a new browser tab
  ```sh
  yarn dev -- --open
  ```

## Building

Solid apps are built with _adapters_, which optimise your project for deployment to different environments.

By default, `yarn build` will generate a Node app that you can run with `yarn start`.

To use a different adapter (Currently using [Vercel Adaptor](https://github.com/solidjs/solid-start/tree/main/packages/start-vercel)), add it to the `devDependencies` in `package.json` and specify in your `vite.config.js`.

## References

- [SolidJS + TypeScript + ESLint + Prettier setup](https://www.reddit.com/r/solidjs/comments/z068to/solidjs_typescript_eslint_prettier_setup/)
- [Solid ESLint Plugin](https://github.com/solidjs-community/eslint-plugin-solid)
- [Yarnrc files](https://yarnpkg.com/configuration/yarnrc)
- [Exlusions for zero-installs](https://yarnpkg.com/getting-started/qa#which-files-should-be-gitignored)
- [@vercel/examples/solidstart](https://github.com/vercel/vercel/tree/main/examples/solidstart)
- [@solid-start/packages/start-vercel](https://github.com/solidjs/solid-start/tree/main/packages/start-vercel)
- [SolidJS Examples](https://www.solidjs.com/examples)

## Todo

- `.idea` Settings
- `.yarnrc.yml`
  - `yarnPath`
  - `pnpFallbackMode`
- [`@yarnpkg/sdks`](https://yarnpkg.com/api/modules/yarnpkg_sdks.html)
