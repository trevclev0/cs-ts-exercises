// @ts-check

// This config was generated using 'stryker init'.
// Please take a look at: https://stryker-mutator.io/docs/stryker-js/configuration/
// Take a look at https://stryker-mutator.io/docs/stryker-js/vitest-runner

const config = {
  $schema: "./node_modules/@stryker-mutator/core/schema/stryker-schema.json",
  packageManager: "yarn",
  reporters: ["html", "clear-text", "progress"],
  testRunner: "vitest",
  coverageAnalysis: "perTest",
  plugins: [
    "@stryker-mutator/vitest-runner",
    "@stryker-mutator/typescript-checker",
  ],
};

export default config;
