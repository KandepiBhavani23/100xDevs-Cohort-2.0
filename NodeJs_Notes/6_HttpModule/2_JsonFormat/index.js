/*
1. JSON stands for JavaScript Object Notation. 
2. JSON is a lightweight format for storing and transporting data.
3. JSON is often used when data is sent from a server to a web page.
*/

const bioData = {
	name: "bhavani",
	age: 25,
	city: "Bangalore",
};

//convert object to json
const jsonData = JSON.stringify(bioData);
console.log(jsonData);

//conver json to object
const objectData = JSON.parse(jsonData);
console.log(objectData);
