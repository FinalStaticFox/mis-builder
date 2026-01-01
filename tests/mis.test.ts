import { expect, test } from "vitest";
import { calculateSignalStrength } from "../src/MinecraftItemBuilder";

test("Empty chest has no redstone signal", () => {
  expect(calculateSignalStrength([])).toBe(0);
});

// Bad test on purpose DO NOT MERGE
test("Chest with one 64-stack item has no redstone signal [DO NOT MERGE]", () => {
  expect(
    calculateSignalStrength([
      {
        id: "",
        name: "",
        sprite: "",
        color: {
          rgb: [0, 0, 0],
          hsl: [0, 0, 0],
          hex: "",
        },
        category: [],
        group: [],
        material: "",
        stack_size: 64,
        rarity: "",
      },
    ])
  ).toBe(0);
});
