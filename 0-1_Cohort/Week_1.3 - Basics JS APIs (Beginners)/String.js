// String Methods

const sentence =
  "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";

const string = "   Hello world!              ";

//1. charAt() : The charAt() method of String values returns a new string consisting of the single UTF-16 code unit at the given index.

console.log(sentence.charAt(7)); //char at particular index

// 2. chatCodeAt() : The charCodeAt() method of String values returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.

console.log(sentence.charCodeAt(7)); // 99 (Ascii Code)

//3. includes(): The includes() method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.

console.log(sentence.includes("bhavani")); //false
console.log(sentence.includes("quick")); //true

//4. indexOf() : The indexOf() method of String values searches this string and returns the index of the first occurrence of the specified substring.

console.log(sentence.indexOf("dog")); //40
console.log(sentence.indexOf("bone"));

//5. lastIndexOf() : The lastIndexOf() method of String values searches this string and returns the index of the last occurrence of the specified substring

console.log(sentence.lastIndexOf("dog"));
console.log(sentence.indexOf("Thee"));

//6. replace():The replace() method returns a new string with one, some, or all matches of a pattern replaced by a replacement

const replaceStr = sentence.replace("dog", "cat");
console.log(replaceStr); //replace only first occurence

const regex = /Dog/i;
console.log(sentence.replace(regex, "monkey")); //use of regex replace the first occurence irrespective of lower/upper case in the sentence

//7. replaceAll() : The replaceAll() method returns a new string with all matches of a pattern replaced by a replacement

const replaceAll = sentence.replaceAll("dog", "girafee");
console.log(replaceAll);

const regex1 = /Dog/gi;
console.log(sentence.replace(regex1, "elephant")); // Replace all the occurence of particular word

//8. slice() : The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.

console.log(sentence.slice(0, 6));
console.log(sentence.slice(-2));
console.log(sentence.slice(-10, -1));
console.log(sentence.slice(4, 19));
console.log(sentence.slice(2, 10));

//9. substring() : The substring() method returns the part of the string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.

console.log(sentence.substring(2));
console.log(sentence.substring(2, 10));

//10. split() : The split() method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

const splitChar = sentence.split(" ");
console.log(splitChar[3]);
console.log(splitChar[8]);
console.log(sentence.split());

//11. startsWith() : The startsWith() method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.

console.log(sentence.startsWith("Hello"));
console.log(sentence.startsWith("The"));

//12. endsWith() : The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.

console.log(sentence.endsWith("?"));
console.log(sentence.endsWith("lazy"));

//13. trim() : The trim() method removes whitespace from both ends of a string and returns a new string, without modifying the original string.

console.log(string.trim());
console.log(string.trim().length);

//14. trimStart() : The trimStart() method removes whitespace from the beginning of a string and returns a new string, without modifying the original string

const trimstart = string.trimStart();
console.log(trimstart);
console.log(trimstart.length);

//15. trimEnd() : The trimEnd() method removes whitespace from the end of a string and returns a new string, without modifying the original string
const trimEnd = string.trimEnd();
console.log(trimEnd);
console.log(trimEnd.length);

//16. toLowerCase() : The toLowerCase() method returns the calling string value converted to lower case.

console.log(sentence.toLowerCase());

//17. toUpperCase() : The toUpperCase() method returns the calling string value converted to uppercase

console.log(sentence.toUpperCase());

//18. toString() : The toString() method returns a string representing the specified string value.

const number = 78590;
console.log(number, number.toString());

//19. Object to String and String to Object
const obj1 = {
  name: "Bhavani",
  city: "Bangalore",
  designation: "FrontEnd Developer",
};

const stringObj = JSON.stringify(obj1);
console.log(stringObj);

const jsonData = JSON.parse(stringObj);
console.log(jsonData);

//20. concat() : The concat() method concatenates the string arguments to the calling string and returns a new

const str1 = "JavaScript is the programming language of the Web.";
const str2 = " JavaScript is easy to learn";

const concat = str1.concat(str2);
console.log(concat);
console.log(str1 + str2);
console.log(`${str1} ${str2}`);
