function fizzBuzz(array1, array2) {
  const array3 = array1.concat(array2);
  if (array3.length % 3 === 0 && array3.length % 5 === 0) {
    return "FizzBuzz";
  } else if (array3.length % 5 === 0) {
    return "Buzz";
  } else if (array3.length % 3 === 0) {
    return "Fizz";
  } else {
    return array3.length;
  }
}
// console.log(fizzBuzz(array2, array1));
module.exports = fizzBuzz;
