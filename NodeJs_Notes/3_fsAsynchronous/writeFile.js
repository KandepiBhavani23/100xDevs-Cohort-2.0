import { writeFile } from "fs";

let data =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ";

writeFile("../3_fsAsynchronous/books.txt", data, (err) => {
  if (err) console.log(err);
  else console.log("File Written Successfully");
});
