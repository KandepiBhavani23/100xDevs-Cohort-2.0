import { appendFile } from "fs";

const data = "Hello World";
appendFile("../3_fsAsynchronous/books.txt", data, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
