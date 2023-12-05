/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

let str = "Coding is fun!!!";
function countVowels(str) {
  let count = 0;
  let lowerCase = str.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < lowerCase.length; i++) {
    if (vowels.includes(lowerCase[i])) {
      count++;
    }
  }
  return count;
}

console.log(countVowels(str));

module.exports = countVowels;
