import { describe, it } from "node:test";
import { deepStrictEqual } from "node:assert";
import { greet } from "../src/greet.js";


describe("greet", () => {
  it("greeting must contain Hello", () => {
    const greeting = greet();
    deepStrictEqual(greeting.toLowerCase().includes("hello"), true);
  });
});
