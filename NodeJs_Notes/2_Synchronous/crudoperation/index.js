import {
  writeFileSync,
  appendFileSync,
  readFileSync,
  renameSync,
  mkdirSync,
  unlinkSync,
  rmdirSync,
} from "fs";

mkdirSync("crudOperation"); //create a new folder
writeFileSync("../crudoperation/bio.txt", "This is a new program", "utf-8");
appendFileSync("../crudoperation/bio.txt", `\nIt was nice meeting you`);

const readData = readFileSync("../crudoperation/bio.txt", "utf-8");
console.log(readData);

renameSync("bio.txt", "mybio.txt");

unlinkSync("../crudoperation/myBio.txt");

rmdirSync("../crudoperation/crudoperation");
