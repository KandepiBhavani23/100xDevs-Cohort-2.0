//Functions can take other functions as input

function calculateArithmetic(args, funTocalculate) {
  const ans = funTocalculate(...args);
  return ans;
}

function sum(...values) {
  return values.reduce((acc, curr) => acc + curr, 0);
}

function subtract(...values) {
  return values.reduce((acc, curr) => acc - curr);
}

function multiply(...values) {
  return values.reduce((acc, curr) => acc * curr, 1);
}

function division(...values) {
  return values.reduce((acc, curr) => acc / curr);
}

function power(...values) {
  return values.reduce((acc, curr) => acc ** curr);
}

const addValue = calculateArithmetic([1, 3, 10, 32, 45, 80], sum);
const subValue = calculateArithmetic([10, 50, 60, 51, 80, 100], subtract);
const multiplyValue = calculateArithmetic([10, 10, 20, 15, 90, 225], multiply);
const divisionValue = calculateArithmetic([10, 80, 30, 51, 60], division);
const powerValue = calculateArithmetic([9, 2, 3], power);
console.table([addValue, subValue, multiplyValue, divisionValue, powerValue]);
