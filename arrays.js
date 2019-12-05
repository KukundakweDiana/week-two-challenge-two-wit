const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
var string = "";
function vowel_Count(text) {
  let counter = 0;
  for (let letter of text) {
    if (vowels.includes(letter)) {
      string += letter;
      counter++;
    }
  }
  console.log(`this returns: ${counter}  ${string} `);
  return counter;
  return string;
}
vowel_Count("this is the sample text");
