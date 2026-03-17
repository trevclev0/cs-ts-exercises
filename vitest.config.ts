import { defineConfig, configDefaults } from "vitest/config";

export default defineConfig({
    test: {
        environment: "node",
        include: ["src/**/*.spec.{ts,tsx}"],
        coverage: {
            include: ["src/**/*.{ts,tsx}"],
            exclude: [
                ...configDefaults.exclude,
                "src/**/*.spec.{ts,tsx}",
                "src/**/*.d.{ts,tsx}",
            ],
            reporter: ["text", "json-summary", "json"],
        },
    },
});
