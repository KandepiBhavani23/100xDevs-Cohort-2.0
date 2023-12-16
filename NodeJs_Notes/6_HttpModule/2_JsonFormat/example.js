import { readFile, writeFile } from "fs";

const myHonda = {
  color: "red",
  wheels: 4,
  engine: { cylinders: 4, size: 2.2 },
};

//Convert the given Object to Json Data
const JsonData = JSON.stringify(myHonda);
console.log(JsonData);

//Write the above obtained data to json File
writeFile("../2_JsonFormat/jsonformat.json", JsonData, (error) => {
  if (!error && JsonData !== null) {
    console.log("JSON file created successfully");
  } else {
    console.log(error);
  }
});

//Read the json File
readFile("../2_JsonFormat/jsonformat.json", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    let originalData = JSON.parse(data);
    console.log(originalData);
  }
});
