import { readFile, writeFile } from "fs";

readFile("../3_fsAsynchronous/books.txt", "utf-8", (err, data) => {
  if (err) console.log(err);
  const books = data;
  readFile("../3_fsAsynchronous/bags.txt", "utf-8", (err, data) => {
    if (err) console.log(err);
    const bags = data;
    writeFile(
      "../3_fsAsynchronous/resultAsync.txt",
      `Here is the data : ${books} \n ${bags}`,
      (err) => {
        if (err) console.log(err);
        else console.log("Data Written to File Successfully");
      }
    );
  });
});
