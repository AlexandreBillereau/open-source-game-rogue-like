import * as __assert from "node:assert";
import * as __n from "node:test";
import { add } from "../src/scene/sum.js";

__n.test("sum 1 + 2 =3", () => {
  __assert.strictEqual(add(1, 2), 3);
});
