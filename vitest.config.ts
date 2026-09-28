import { defineConfig } from "vitest/config";

// convex-test runs your Convex functions in a fake backend, in memory, so
// `npm test` needs neither your deployment nor a network connection.
export default defineConfig({
  test: {
    environment: "edge-runtime",
    server: { deps: { inline: ["convex-test"] } },
  },
});
