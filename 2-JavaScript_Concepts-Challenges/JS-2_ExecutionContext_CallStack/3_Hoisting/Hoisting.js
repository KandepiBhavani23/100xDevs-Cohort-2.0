console.log(myFunctionExpression);

var myFunctionExpression = function () {
  return "Hello, world!";
};
console.log(myFunctionExpression());

var myArrowFunction = () => {
  return "Hello, world!";
};
console.log(myArrowFunction());

console.log(a); // ReferenceError: Cannot access 'a' before initialization
console.log(b); // prints undefined as expected
let a = 10;
console.log(a); // 10
var b = 15;
console.log(window.a); // undefined
console.log(window.b); // 15

// let a1;
// a1 = 10;
// console.log(a1) // 10. Note declaration and assigning of a is in different lines.

// const b1;
// b1 = 10;
// console.log(b1); // SyntaxError: Missing initializer in const declaration.(This type of declaration won't work with const. const b = 10 only will work)

// const b3 = 100;
// b3 = 1000; //this gives us TypeError: Assignment to constant variable.
