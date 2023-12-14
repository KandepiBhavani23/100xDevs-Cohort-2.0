/*
	1. Variables(let, const, var)
	2. Data Types - String, numbers and booleans
	3. If/Else 
	4. Loops - For Loops
*/

//1. Write the program to greet a person given their first and last name

function greet(firstName, lastName) {
  return `Hello ${firstName} ${lastName} very good morning`;
}

const greet1 = greet("Bhavani", "Kandepi");
console.log(greet1);

//2. Write a program that greets a person based on their gender
function genderGreeting(gender) {
  if (gender === "male") {
    return "Good Morning Sir";
  } else if (gender === "female") {
    return "Good Morning Madam";
  } else {
    return "I don't know you!";
  }
}

const greetFemale = genderGreeting("female");
console.log(greetFemale);

const greetMale = genderGreeting("male");
console.log(greetMale);

//3. Write a program that counts from 0 - 1000 and prints(for loop)
function countNumbers(num) {
  let totalSum = 0;
  for (let i = 0; i <= num; i++) {
    totalSum += i;
  }
  return totalSum;
}

const sum1 = countNumbers(1000);
console.log(sum1);

const sum2 = countNumbers(300);
console.log(sum2);

const sum3 = countNumbers(400);
console.log(sum3);
