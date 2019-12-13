const fizzBuzz = require("./fizzBuzz");
describe("this test should check the combined whether the array length is either divisible by 3, 5 or both", () => {
  it("checks that array length is divisible by 3", () => {
    expect(fizzBuzz([1, 2, 3, 4, 5], [1, 2, 3, 4])).toBe("Fizz");
  });
  it("checks that arraylength is completely divisible by 5", () => {
    expect(fizzBuzz([1, 2, 3, 4, 5], [])).toBe("Buzz");
  });
  it("checks that arraylenth is divisible by both 3 and 5 leaving no remainder", () => {
    expect(fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5])).toBe(
      "FizzBuzz"
    );
  });
  it("checks that anything that returns a remainder returns 4", () => {
    expect(fizzBuzz([1], [2]).toBe(4));
  });
});
