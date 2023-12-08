let score = 33;
let number1 = "33abs";

console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);

let valueInString = Number(number1);
console.log(valueInString); // NaN
console.log(typeof valueInString); //will convert to Number but not a pure Number type
