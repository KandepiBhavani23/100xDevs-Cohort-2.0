//1. Function Declaration
function calculateRectangleArea(width, height) {
  return width * height;
}

function calculateCircleArea(radius) {
  return Math.PI * radius ** 2;
}

console.log(calculateRectangleArea(4, 5));
console.log(calculateCircleArea(3));

//2. Function Expression
const powerFunction = function (base) {
  return function (exponent) {
    return Math.pow(base, exponent);
  };
};

const square = powerFunction(2);
console.log(square(3));

const cube = powerFunction(3);
console.log(cube(2));

//3. Arrow Functions
const numbers = [1, 2, 3, 4, 5];

const squared = numbers.map((num) => num ** 2);
console.log(squared);

const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens);

//4. Named Functions
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5));

//5. Anonymous Functions
let calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
};

console.log(calculator.add(5, 3));
console.log(calculator.subtract(9, 3));
console.log(calculator.multiply(5, 6));
console.log(calculator.divide(10, 3));

//6.  IIFE (Immediately Invoked Function Expression)
const counter = (function () {
  let count = 0;

  return {
    increment: function () {
      count++;
    },
    getCount: function () {
      return count;
    },
  };
})();

counter.increment();
counter.increment();
console.log(counter.getCount()); //2

//7. Callback Function
function fetchData(callback) {
  setTimeout(function () {
    const data = "Some data";
    callback(data);
  }, 1000);
}

function processResult(result) {
  console.log("Processing result: " + result);
}

fetchData(processResult);

//8. Recursive Function
function flattenArray(arr) {
  return arr.reduce((flat, element) => {
    return flat.concat(
      Array.isArray(element) ? flattenArray(element) : element
    );
  }, []);
}

const nestedArray = [1, [2, [3, 4], 5], 6, [7, 8]];
const flatArray = flattenArray(nestedArray);
console.log(flatArray);

//9. Higher-Order-Function
function applyToEach(arr, func) {
  return arr.map(func);
}

const number = [1, 2, 3, 4];
const squares = applyToEach(number, (num) => num ** 2);
console.log(squares);

//Generator Function
function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

for (let num of range(1, 5)) {
  console.log(num);
}
