const sort = require("./array_sort");
describe("this test sorts input in an array according to even numbers, odd numbers and characters", () => {
  it("It sorts a given array", () => {
    var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, "d", "i", "a", "n", "a"];
    expect(sort(array1)).toBe({
      even_numbers: [2, 4, 6, 8],
      charaz: ["d", "i", "a", "n", "a"],
      odd_numbers: [1, 3, 5, 7, 9]
    });
  });
});
