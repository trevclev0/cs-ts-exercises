import globals from "globals";
import pluginJs from "@eslint/js";

import shopifyEslintPlugin from "@shopify/eslint-plugin";

const configs = [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...shopifyEslintPlugin.configs.typescript,
  ...shopifyEslintPlugin.configs.prettier,
  {
    ignores: [
      ".yarn/",
      ".pnp.cjs",
      ".pnp.loader.mjs",
      "coverage/",
      "jest.config.ts",
    ],
  },
];

/** @type {import('eslint').Linter.Config[]} */
export default configs;
