import { writeFileSync, readFileSync, appendFileSync, renameSync } from "fs";

// Creating a new File
writeFileSync("./textFile.txt", "This is a sample File", "utf-8");
writeFileSync("./textFile.txt", "Welcome to Bhavani", "utf-8");

appendFileSync("./textFile.txt", "Thanks for Watching", "utf-8");

const readFile = readFileSync("./textFile.txt", "utf-8");
console.log(readFile);

renameSync("textFile.txt", "file.txt");
