//1. Numbers
let num3 = 5;
let num4 = 2.5;
let result = num3 + num4;
console.log(result); //7.5

//2. Arithmetic Operations (+, -, *, /, and %):
let a = 10;
let b = 3;
let addition = a + b;
let subtraction = a - b;
let multiplication = a * b;
let division = a / b;
let remainder = a % b;

console.log(addition, subtraction, multiplication, division, remainder); //13 7 30 3.3333333333333335 1

//3. Strings:
let str1 = "Hello";
let str2 = " World!";
let greeting = str1 + str2; // Concatenation
console.log(greeting); // Output: Hello World!

//4. Unary Operators, Binary Operator and Ternary Operator:
let x = 5;
let y = -x; // Unary negation operator
let z = x > 0 ? "positive" : "non-positive"; // Ternary operator

console.log(y, z); // Output: -5 non-positive

//5. Boolean Values:
let isTrue = true;
let isFalse = false;
console.log(isTrue, isFalse); // Output: true false

//6. Logical Operators (&&, ||, !):
let condition1 = true;
let condition2 = false;

console.log(condition1 && condition2); // Output: false (logical AND)
console.log(condition1 || condition2); // Output: true (logical OR)
console.log(!condition1); // Output: false (logical NOT)

//7. Empty Values:
let emptyVariable;
let nullValue = null;
let undefinedValue = undefined;

console.log(emptyVariable, nullValue, undefinedValue); // Output: undefined null undefined

//8. Automatic Type Conversion:
let num = 5;
let str = "10";
let result1 = num + str; // Automatic type conversion (num gets converted to string)
console.log(result1); // Output: "510"

//9. Short-circuiting of Logical Operators:
let value = false;
let result2 = value || "hello";
console.log(result2);

//10. Comparison Operators (==, !=, ===, !==, <, >, <=, >=):
let num1 = 10;
let num2 = "10";

let isEqual = num1 == num2; // Equality
let isNotEqual = num1 != num2; // Inequality
let strictEqual = num1 === num2; // Strict Equality
let strictNotEqual = num1 !== num2; // Strict Inequality
let lessThan = num1 < num2;
let greaterThan = num1 > num2;
let lessThanOrEqual = num1 <= num2;
let greaterThanOrEqual = num1 >= num2;

