const fizzBuzz = require("./fizzBuzz");
describe("this test should check the combined whether the array length is either divisible by 3, 5 or both", () => {
  it("checks that array length is divisible by 3", () => {
    const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
    const array2 = [1, 2, 3, 4];
    const array3 = array1.concat(array2);
    expect(fizzBuzz(array3.length % 3 === 0)).toEqual("Fizz");
  });
  it("checks that arraylength is completely divisible by 5", () => {
    const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
    const array2 = [1, 2, 3, 4];
    const array3 = array1.concat(array2);
    expect(fizzBuzz(array3.length % 5 === 0)).toEqual("Buzz");
  });
  it("checks that arraylenth is divisible by both 3 and 5 leaving no remainder", () => {
    const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
    const array2 = [1, 2, 3, 4];
    const array3 = array1.concat(array2);
    expect(
      fizzBuzz(array3.length % 5 === 0 && array3.length % 3 === 0)
    ).toEqual("FizzBuzz");
  });
  it("checks that anything that returns a remainder returns 4", () => {
    const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
    const array2 = [1, 2, 3, 4];
    const array3 = array1.concat(array2);
    expect(
      fizzBuzz(array3.length % 5 !== 0 && array3.length % 3 !== 0).toEqual(4)
    );
  });
});
