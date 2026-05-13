const config = {
  "src/**/*.{ts,tsx}": [
    "pnpm check --no-errors-on-unmatched",
    "pnpm test related --run",
  ],
  "*.{json,jsonc}": ["pnpm biome check --write --no-errors-on-unmatched"],
};

export default config;
