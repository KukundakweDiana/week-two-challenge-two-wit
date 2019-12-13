const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
const array2 = [1, 2, 3, 4];
const array3 = array1.concat(array2);
function fizzBuzz(array1, array2) {
  if (array3.length % 3 === 0) {
    return "Fizz";
  }

  elseif(array3.length % 5 === 0);
  {
    return "Buzz";
  }
  elseif(array3.length % 5 === 0 && array3.length % 3 === 0);
  {
    return "FizzBuzz";
  }
  elseif;
  {
    return 4;
  }
  return array3;
}
// console.log(fizzBuzz(array2, array1));
module.exports = fizzBuzz;
