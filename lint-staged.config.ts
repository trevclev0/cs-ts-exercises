const config = {
  "src/**/*.{ts,tsx}": [
    "bun check --no-errors-on-unmatched",
    "bun run test related --run",
  ],
  "*.{json,jsonc}": ["bun biome check --write --no-errors-on-unmatched"],
};

export default config;
