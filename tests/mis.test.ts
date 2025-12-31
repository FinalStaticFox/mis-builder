import { expect, test } from "vitest";
import { calculateSignalStrength } from "../src/MinecraftItemBuilder";

test("Empty chest has no redstone signal", () => {
  expect(calculateSignalStrength([])).toBe(0);
});
