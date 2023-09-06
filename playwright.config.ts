import { defineConfig } from "@playwright/test";

export default defineConfig({
  testMatch: "**/*.screenshot.test.ts",
});
