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

//1. Create an array containing the nationalities of all users.
const nationalitiesArray = users.map((user) => user.nationality);
console.log("Nationality : ", nationalitiesArray);

//2.  Generate an array containing the user IDs of all users.
const idsArray = users.map((user) => user.userId);
console.log("User ID's Array: ", idsArray);

//3. Create an array of strings containing the full names of all users.
const fullNames = users.map((user) => `${user.firstName} ${user.lastName}`);
console.log(fullNames);

//4. Generate an array of objects with each user's full name and age incremented by 1
const incrementedAges = users.map((user) => ({
  fullName: `${user.firstName} ${user.lastName}`,
  age: user.age + 1,
}));
console.log(incrementedAges);

//5. Create an array of strings with a greeting message for each user based on their gender.
const greetings = users.map(
  (user) =>
    `Hello, ${user.gender === "Female" ? "Miss" : "Mr"} ${user.lastName}!`
);
console.log(greetings);

//6. Generate an array with the nationalities of all users in uppercase.
const nationalitiesUpper = users.map((user) => user.nationality.toUpperCase());
console.log(nationalitiesUpper);

//7.Generate an array of objects with the user's full name and a status indicating if they are a "Minor" (age < 18) or "Adult" (age >= 18).
const userStatus = users.map((user) => ({
  fullName: `${user.firstName} ${user.lastName}`,
  status: user.age < 18 ? "Minor" : "Major",
}));

console.log(userStatus);

//8. Create an array of strings with a message for each user, stating whether they are a "Male" or "Female" from a specific country.
const userMessage = users.map(
  (user) =>
    `${user.firstName} ${user.lastName} is a ${
      user.gender === "Male" ? "Man" : "Woman"
    } from ${user.nationality}}`
);
console.log(userMessage);

//9.Categorize users into age ranges: "Young" (18-30), "Adult" (31-60), and "Senior" (61 and above), and create an array of objects with user information and their age range.
const ageRange = users.map((user) => {
  let range = "";
  if (user.age < 18) range = "Child";
  else if (user.age >= 18 && user.age <= 30) range = "Young";
  else if (user.age >= 31 && user.age <= 60) range = "Adult";
  else range = "Senior";

  return `${user.firstName} ${user.lastName} is ${range}`;
});

console.log(ageRange);
