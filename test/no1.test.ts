import { fishBash } from "@/test/no1";

describe("fishBash function", () => {
  it("should print correct output for given input", () => {
    // Mock console.log to capture output
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();

    // Call the function with n = 5
    fishBash(5);

    // Test expected outputs
    expect(consoleSpy).toHaveBeenNthCalledWith(1, "1");
    expect(consoleSpy).toHaveBeenNthCalledWith(2, "2");
    expect(consoleSpy).toHaveBeenNthCalledWith(3, "fish");
    expect(consoleSpy).toHaveBeenNthCalledWith(4, "4");
    expect(consoleSpy).toHaveBeenNthCalledWith(5, "bash");

    // Restore console.log
    consoleSpy.mockRestore();
  });
});
