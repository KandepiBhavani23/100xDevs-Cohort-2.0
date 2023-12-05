/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

const originalStr = "A man a plan a canal Panama";
function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedStr = str.split("").reverse().join("");
  console.log(str, reversedStr);

  return str === reversedStr;
}

console.log(isPalindrome(originalStr));

module.exports = isPalindrome;
