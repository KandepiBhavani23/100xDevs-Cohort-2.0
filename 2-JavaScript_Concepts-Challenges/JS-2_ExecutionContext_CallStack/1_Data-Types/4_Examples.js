//Example - 1:
console.log(1 + "2" + 3); // 123

//Example - 2
console.log("2" * "3"); //6

//Example - 3
console.log(true + 1); //2

//Example - 4
console.log("5" - 2); //3

//Example - 5
console.log(null + 5); //5 - The null value is implicitly converted to 0 during addition.

//Example - 6
console.log(undefined + "2"); //undefined2 - The undefined value is implicitly converted to the string "undefined" during concatenation with "2".

//Example - 7
console.log(2 * "Hello"); //NaN - The multiplication operation cannot convert the string "hello" to a number, resulting in NaN.

// Example 8:
console.log(true + true); //2;

// Example 9:
console.log("10" / 2); //5

// Example 10:
console.log(1 + "a" + 2); //1a2

// Example 11:
console.log(null * 5); //0 - The null value is implicitly converted to 0 during multiplication.

// Example 12:
console.log(undefined + 1); // NaN : The addition involving undefined results in NaN.

// Example 13:
console.log(2 * "3" + 4 * "5"); //26

// Example 14:
console.log("Hello" + true); //Hellotrue

//Example 15:
console.log("20" + 20 - "2"); //2018

//Example 16:
console.log([1, 2] + [3, 4]); // 1, 23, 4 - The arrays are implicitly converted to strings and then concatenated.

//Example 17:
console.log(1 + {}); // "1[object Object]" - The empty object {} is implicitly converted to its string representation "[object Object]" and then concatenated with 1.

//Example 18:
console.log({} + []); // [object Object]

//Example 19:
console.log("2" * "3" + "4" / 2); // 8

//Example 20:
console.log([] + []); // ""

//Example 21:
console.log([1, 2] * [3, 4]); //NaN - Arrays cannot be directly multiplied, so both arrays are implicitly converted to NaN.

//Example 22:
console.log("2" + (2 + "2")); //222

//Example 23:
console.log("a" + +"b"); //aNaN

//Example 24:
console.log({} == !{}); // false

//Example 25:
console.log(0 || ("0" && {})); // {}
