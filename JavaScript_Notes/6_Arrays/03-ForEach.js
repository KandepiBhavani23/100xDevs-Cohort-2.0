const users = [
  {
    firstName: "Mark",
    lastName: "Chalker",
    gender: "Male",
    age: 31,
    nationality: "India",
    userId: 1,
  },
  {
    firstName: "Konstantine",
    lastName: "Rings",
    gender: "Male",
    age: 88,
    nationality: "China",
    userId: 2,
  },
  {
    firstName: "Sharia",
    lastName: "Anyon",
    gender: "Female",
    age: 61,
    nationality: "Canada",
    userId: 3,
  },
  {
    firstName: "Sara",
    lastName: "Bog",
    gender: "Female",
    age: 74,
    nationality: "Cuba",
    userId: 4,
  },
  {
    firstName: "Corabella",
    lastName: "Parslow",
    gender: "Female",
    age: 22,
    nationality: "England",
    userId: 6,
  },
  {
    firstName: "Terri",
    lastName: "Stammers",
    gender: "Male",
    age: 7,
    nationality: "Canada",
    userId: 5,
  },
  {
    firstName: "Bertie",
    lastName: "Ladlow",
    gender: "Male",
    age: 16,
    nationality: "Malaysia",
    userId: 7,
  },
  {
    firstName: "Margaret",
    lastName: "Baptist",
    gender: "Female",
    age: 33,
    nationality: "Argentina",
    userId: 8,
  },
  {
    firstName: "Cob",
    lastName: "Beach",
    gender: "Male",
    age: 53,
    nationality: "South Korea",
    userId: 9,
  },
  {
    firstName: "Nerti",
    lastName: "Fontin",
    gender: "Male",
    age: 24,
    nationality: "England",
    userId: 10,
  },
];

//1. Print the full names and ages of users older than 50.
users.forEach((user) => {
  if (user.age > 50) {
    console.log(`${user.firstName} ${user.lastName} - Age: ${user.age}`);
  }
});

//2. Calculate and display the sum of ages of all users.
let totalAge = 0;
users.forEach((user) => {
  totalAge += user.age;
});
console.log(`Total Age: ${totalAge}`);

//3. List the nationalities of users without repetitions.
const uniqueNationalities = [];
users.forEach((user) => {
  if (!uniqueNationalities.includes(user.nationality)) {
    uniqueNationalities.push(user.nationality);
  }
});
console.log(uniqueNationalities);

//4. Count and display the number of users from each country.
const nationalityCount = {};
users.forEach((user) => {
  nationalityCount[user.nationality] =
    (nationalityCount[user.nationality] || 0) + 1;
});

console.log(nationalityCount);

//5.Find and display the user with the maximum age.
let maxAge = users[0];
users.forEach((user) => {
  if (user.age > maxAge.age) {
    maxAge = user;
  }
});

console.log(maxAge);

//6. Calculate and print the average age of female users.
let femaleTotalAge = 0;
let femaleTotalCount = 0;

users.forEach((user) => {
  if (user.gender === "Female") {
    femaleTotalAge += user.age;
    femaleTotalCount++;
  }
});

const averageFemaleAge = femaleTotalAge / femaleTotalCount;
console.log(`Average Age of Female Users: ${averageFemaleAge}`);

//7. Find and display the youngest user.
let minAgeUser = users[0];
users.forEach((user) => {
  if (user.age < minAgeUser.age) {
    minAgeUser = user;
  }
});
console.log(minAgeUser);

//8. Calculate and display the age difference between the oldest and youngest users.
let oldestUser = users[0];
let youngestUser = users[0];

users.forEach((user) => {
  if (user.age > oldestUser.age) {
    oldestUser = user;
  }

  if (user.age < youngestUser.age) {
    youngestUser = user;
  }
});

console.log(oldestUser, youngestUser);

let differenceAges = oldestUser.age - youngestUser.age;
console.log(differenceAges);
