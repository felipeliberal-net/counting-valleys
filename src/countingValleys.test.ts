import countingValleys from "./countingValleys";

describe("Counting valleys suite case", () => {
  test("No path", () => {
    const path = "";
    expect(() => countingValleys(path)).toThrow(new Error("Invalid path"));
  });

  test("DDUUD", () => {
    const path = "DDUUD";
    expect(() => countingValleys(path)).toThrow(new Error("Invalid path"));
  });

  test("DDUU", () => {
    const path = "DDUU";
    const valleys = countingValleys(path);
    expect(valleys).toBe(1);
  });

  test("DDDUUDUU", () => {
    const path = "DDDUUDUU";
    const valleys = countingValleys(path);
    expect(valleys).toBe(1);
  });

  test("DDDUUDUUDUUUDDDU", () => {
    const path = "DDDUUDUUDUUUDDDU";
    const valleys = countingValleys(path);
    expect(valleys).toBe(3);
  });
})