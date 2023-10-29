import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:4200/pages/",
    fixturesFolder: "cypress/fixtures",
    viewportHeight: 1080,
    viewportWidth: 1920
  },
});
