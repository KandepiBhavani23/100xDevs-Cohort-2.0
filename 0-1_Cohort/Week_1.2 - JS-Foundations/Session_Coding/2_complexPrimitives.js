/*
	1. Arrays
	2. Objects
*/

//1. Write a program that prints all the even numbers in an array
function printEvenNumbersArray(array) {
  const evenNumbers = array.filter((eachItem) => eachItem % 2 === 0);
  return evenNumbers;
}

const array1 = printEvenNumbersArray([1, 2, 3, 4, 5, 6, 7, 9, 10]);
console.log(array1);

const array2 = printEvenNumbersArray([11, 15, 18, 20, 45, 89, 90, 100, 42, 47]);
console.log(array2);

//2. Write a Program that prints biggest number in an arrays
function biggestNumberArray(array) {
  let maxNum = array[0];
  for (let i = 0; i <= maxNum; i++) {
    if (array[i] > maxNum) {
      maxNum = array[i];
    }
  }
  return maxNum;
}

const largestNumber = biggestNumberArray([
  14, 19, 31, 10, 40, 80, 200, 500, 210, 330,
]);

console.log(largestNumber);

//3. Write a program that prints all the male people's first name given a complex object
const people = [
  {
    gender: "male",
    firstName: "John",
  },
  {
    gender: "female",
    firstName: "Jane",
  },
  {
    gender: "male",
    firstName: "Bob",
  },
  {
    gender: "other",
    firstName: "Emily",
  },
  { gender: "Male", firstName: "Charlie" },
];

const peopleFirstName = people
  .filter((person) => person.gender.toLowerCase() === "male")
  .map((person) => person.firstName);
console.log(peopleFirstName);

//4. Write a program that reverses all the elements of an array
function reverseArray(array) {
  return array.reverse();
}

const reversedArray = reverseArray([10, 30, 40, 50, 19, 41]);
console.log(reversedArray);
