import { expect, test } from "bun:test";
import { ans } from "./0377";

test("correct answer", () => {
  expect(ans([1, 2, 3], 4)).toBe(7);
});
