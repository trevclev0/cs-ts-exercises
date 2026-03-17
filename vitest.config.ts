import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        environment: "node",
        include: ["src/**/*.spec.{ts,tsx}"],
        coverage: {
            reporter: ["text", "json-summary", "json"],
        },
    },
});
