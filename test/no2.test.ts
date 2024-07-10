import { sortAsc, sortDesc } from "@/test/no2";

describe("Sorting Functions", () => {
  it("sortAsc should sort array in ascending order", () => {
    const arr = [3, 7, 2, 1, 8, 4, 5, 6];
    const sorted = sortAsc([...arr]); // Copy array to avoid mutation

    expect(sorted).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it("sortDesc should sort array in descending order", () => {
    const arr = [3, 7, 2, 1, 8, 4, 5, 6];
    const sorted = sortDesc([...arr]); // Copy array to avoid mutation

    expect(sorted).toEqual([8, 7, 6, 5, 4, 3, 2, 1]);
  });
});
