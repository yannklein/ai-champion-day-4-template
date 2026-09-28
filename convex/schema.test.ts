import { convexTest } from "convex-test";
import { expect, test } from "vitest";
import schema from "./schema";

// A smoke test, so that `npm test` does something from the first minute and
// you have a working example to copy. Exercise 5 writes the real ones, about
// what your mutations refuse.
test("the test setup runs against the schema", async () => {
  const t = convexTest(schema, import.meta.glob("./**/*.*s"));
  await t.run(async (ctx) => {
    expect(ctx.db).toBeDefined();
  });
});
