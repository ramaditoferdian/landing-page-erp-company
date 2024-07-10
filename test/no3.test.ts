import { isPalindrome } from "@/test/no3";

describe("Palindrome Function", () => {
  it("should return true for palindromic string", () => {
    expect(isPalindrome("Kasur ini rusak")).toBe(true);
  });

  it("should return false for non-palindromic string", () => {
    expect(isPalindrome("hello world")).toBe(false);
  });

  it("should handle edge cases with whitespace", () => {
    expect(isPalindrome("A man a plan a canal Panama")).toBe(true);
  });

  it("should handle edge cases with punctuation", () => {
    expect(isPalindrome("Was it a car or a cat I saw?")).toBe(true);
  });

  it("should handle empty string", () => {
    expect(isPalindrome("")).toBe(true);
  });
});
