/*
	1. Abstract out logic in your program
	2. Take arguments as input
	3. Return a value as an output
	4. You can think of them as an independent program that is supposed to do something given an input. 
	5. Functions can take other functions as input - callbacks
*/

//1. Write a function that finds the sum of two numbers
function sum(a, b) {
  return a + b;
}

const sumNumbers = sum(10, 40);
console.log(sumNumbers);

