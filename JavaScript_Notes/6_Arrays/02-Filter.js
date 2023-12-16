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

//1. Create an array containing only the male users.
const onyMales = users.filter((user) => user.gender === "Male");
console.log(onyMales);

//2. Generate an array of users who are younger than 25.
const youngerAge = users
  .filter((user) => user.age < 25)
  .map((user) => ({
    fullName: `${user.firstName} ${user.lastName}`,
    age: user.age,
  }));
console.log(youngerAge);

//3. Create an array of users from Malaysia.
const malaysiaUsers = users.filter((user) => user.nationality === "Malaysia");
console.log(malaysiaUsers);

//4. Generate an array of objects containing the full names and ages of users who are adults (age >= 18) and have odd ages.
const oddAges = users
  .filter((user) => user.age % 2 !== 0)
  .map((user) => ({
    fullName: `${user.firstName} ${user.lastName}`,
    age: user.age,
  }));
console.log(oddAges);

//5. Create an array of users aged 40 or older, sorted by age in descending
const olderAge = users
  .filter((user) => user.age >= 40)
  .sort((a, b) => b.age - a.age)
  .map((user) => ({
    fullName: `${user.firstName} ${user.lastName}`,
    age: user.age,
  }));
console.log(olderAge);

//6.Create an array of objects containing the full names of male users from Canada.
const userFromArgentina = users
  .filter((user) => user.nationality === "Canada" && user.gender === "Male")
  .map((user) => ({
    fullName: `${user.firstName} ${user.lastName}`,
  }));

console.log(userFromArgentina);

//7. Create an array of users aged 30 or older, sorted first by gender (descending) and then by nationality (ascending).
const matureUsersSorted = users
  .filter((user) => user.age >= 30)
  .sort((a, b) => {
    if (a.gender !== b.gender) {
      return b.gender.localeCompare(a.gender);
    }
    return a.nationality.localeCompare(b.nationality);
  });

console.log(matureUsersSorted);
