//1. at() : Returns the element at the specified index in the array.

const datasets = [
  {
    id: 100,
    name: "John Doe",
  },
  {
    id: 101,
    name: "Baidan",
  },
];

const getIndexById = (id) => datasets.findIndex((item) => item.id === id);
const elementAtIndex = (id) => datasets.at(getIndexById(id));
console.log(elementAtIndex(100));

//2. concat() : Combines two or more arrays
const users = ["Alica", "Bob"];
const additionalUsers = ["Charlie", "David"];
const allusers = users.concat(additionalUsers);
console.log(allusers);

//3. entries():  Returns an iterable of key-value pairs for each index in the array.

const temperature = [22, 25, 18, 30];
const temp_entries = Array.from(temperature.entries());
console.log(temp_entries);

//4. every() :Tests whether all elements in the array pass a certain condition.
const user = [
  { id: 1, name: "Alice", isAdmin: true },
  { id: 2, name: "Bob", isAdmin: false },
  { id: 3, name: "Charlie", isAdmin: true },
];
const allAdmins = user.every((user) => user.isAdmin);
console.log(allAdmins);

//5. fill() : Fills all the elements of an array with a static value.
const matrix = Array.from({ length: 3 }, () => Array(3).fill(0));
console.log(matrix);

//6. filter() : Creates a new array with elements that pass a certain condition.
const employees = [
  { id: 1, name: "Alice", department: "HR" },
  { id: 2, name: "Bob", department: "Engineering" },
  { id: 3, name: "Charlie", department: "HR" },
];
const hrEmployees = employees.filter(
  (employee) => employee.department === "HR"
);
console.log(hrEmployees);

//7. find() : Returns the first element in the array that satisfies a provided testing function
const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Smartphone", price: 800 },
  { id: 3, name: "Tablet", price: 500 },
];

const affordableProduct = products.find((product) => product.price < 1000);
console.log(affordableProduct);

//8. findIndex() : Returns the index of the first element in the array that satisfies a provided testing function
const transactions = [
  { id: 1, amount: 500 },
  { id: 2, amount: -200 },
  { id: 3, amount: 1000 },
];

const indexOfNegativeTransaction = transactions.findIndex(
  (transaction) => transaction.amount < 0
);

console.log(indexOfNegativeTransaction);

//9. findLast() : Returns the last element in the array that satisfies a provided testing function
const productList = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Smartphone", price: 800 },
  { id: 3, name: "Tablet", price: 500 },
];

const lastAffordableProduct = productList
  .reverse()
  .find((product) => product.price < 1000);

console.log(lastAffordableProduct);

//10. findLastIndex() : Returns the index of the last element in the array that satisfies a provided testing function.
const transaction = [
  { id: 1, amount: 500 },
  { id: 2, amount: -200 },
  { id: 3, amount: 1000 },
];

const lastIndexOfNegativeTransaction = transaction.findLastIndex(
  (transaction) => transaction.amount > 0
);
console.log(lastIndexOfNegativeTransaction);

//11. flat() : Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const nestedArray = [1, [2, [3, [4]]]];
const flattenedArray = nestedArray.flat(Infinity);
console.log(flattenedArray);

//12. flatMap(): Maps each element using a mapping function, then flattens the result into a new array.
const sentences = ["Hello world", "I am learning JavaScript"];
const words = sentences.flatMap((sentence) => sentence.split(" "));
console.log(words);

//13. includes(): Determines whether an array includes a certain element.
const numbers = [1, 2, 3, 4, 5];
const hasNumberThree = numbers.includes(3);
console.log(hasNumberThree);

//14. indexOf() :Returns the first index at which a given element can be found in the array.
const fruits = ["apple", "banana", "orange", "apple"];
const indexOfApple = fruits.indexOf("apple");
console.log(indexOfApple);

//15. isArray(): Determines whether the passed value is an array.
const isArray = (value) => Array.isArray(value);
console.log(isArray([1, 2, 3]));
console.log(isArray("not an array"));

//16. join(): Joins all elements of an array into a string.
const wordList = ["Hello", "world", "of", "JavaScript"];
const sentence = wordList.join(" ");
console.log(sentence);

//17. keys(): Returns an iterator of keys in the array.
const colors = ["red", "green", "blue"];
const keysIterator = colors.keys();

for (const key of keysIterator) {
  console.log(key);
}

//18. lastIndexOf(): Returns the last index at which a given element can be found in the array.
const fruit = ["apple", "banana", "orange", "apple"];
const lastIndexOfApple = fruit.lastIndexOf("apple");
console.log(lastIndexOfApple);

//19. map(): Creates a new array with the results of calling a provided function on every element in the array.
const num = [1, 2, 3, 4, 5];
const squaredNumbers = num.map((num) => num * num);
console.log(squaredNumbers);

//20. of(): Creates a new array from a variable number of arguments.
const newArray = Array.of(1, "hello", [3, 4], { key: "value" });
console.log(newArray);

//21: pop():Removes the last element from an array and returns that element.
const stack = [1, 2, 3, 4, 5];
const removedElement = stack.pop();
console.log(removedElement);

//22. push(): Adds one or more elements to the end of an array and returns the new length of the array.
const queue = [1, 2, 3, 4];
const newLength = queue.push(5, 6, 7);

console.log(newLength);
console.log(queue);

//23. reduce() : Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
const values = [1, 2, 3, 4, 5];
const sum = values.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum);

//24. reduceRight():  Applies a function against an accumulator and each element in the array (from right to left) to reduce it to a single value.
const numbers1 = [1, 2, 3, 4, 5];
const reversedSum = numbers1.reduceRight(
  (accumulator, current) => accumulator + current,
  0
);

console.log(reversedSum);

//25. reverse(): Reverses the elements of an array in place.
const originalArray = [1, 2, 3, 4, 5];
const reversedArray = originalArray.reverse();
console.log(reversedArray);

//26. shift(): Removes the first element from an array and returns that element.
const elements = [1, 2, 3, 4, 5];
const removed_Element = elements.shift();
console.log(removed_Element);

//27. slice(): Returns a shallow copy of a portion of an array into a new array object.
const original_Array = [1, 2, 3, 4, 5];
const slicedArray = original_Array.slice(1, 4);

console.log(slicedArray, original_Array);

//28. some() : Tests whether at least one element in the array passes a certain condition.
const numbers2 = [1, 2, 3, 4, 5];
const hasEvenNumber = numbers2.some((num) => num % 2 === 0);
console.log(hasEvenNumber);

//27. sort() :Sorts the elements of an array in place.
const unsortedNumbers = [5, 3, 8, 1, 2];
const sortedNumbers = unsortedNumbers.sort((a, b) => a - b);
console.log(sortedNumbers);

//28. splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
const color = ["red", "green", "blue"];
color.splice(1, 1, "yellow", "purple");
console.log(color);

//29: toLocaleString() : Returns a string representing the elements of the array. The elements are converted to strings using their toLocaleString methods.
const numbers4 = [1000, 2000, 3000];
const formattedNumbers = numbers4.toLocaleString("en-US");
console.log(formattedNumbers);

//30. toString(): Returns a string representing the array and its elements.
const color1 = ["red", "green", "blue"];
const colorsString = color1.toString();
console.log(colorsString, color1);

//31. unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
const queues = [3, 4, 5];
const new_Length = queues.unshift(1, 2);

console.log(new_Length); // 5
console.log(queues, new_Length);

//32. values() : Returns a new array iterator object that contains the values for each index in the array.
const colors2 = ["red", "green", "blue"];
const valuesIterator = colors2.values();

for (const value of valuesIterator) {
  console.log(value);
}
