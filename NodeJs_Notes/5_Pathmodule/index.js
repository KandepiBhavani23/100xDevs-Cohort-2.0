// Path Module provides utilities for working with file and directory paths

import {
  basename,
  dirname,
  extname,
  isAbsolute,
  join,
  normalize,
  parse,
  relative,
  resolve,
} from "path";

//1. basename : The path.basename() method returns the last portion of a path
const Basename = basename(
  "D:100xDevs-Cohort-2.0/NodeJs_Notes/5_Pathmodule/index.js"
);
console.log("BaseName : ", Basename);
console.log(
  "--------------------------------------------------------------------------------------------------------------------------------------"
);

//2. dirname : The path.dirname() method returns the directory name of a path
const Dirname = dirname(
  "D:100xDevs-Cohort-2.0/NodeJs_Notes/5_Pathmodule/index.js"
);
console.log("DirName : ", Dirname);

console.log(
  "--------------------------------------------------------------------------------------------------------------------------------------"
);

/*3. extname: 
    -> The path.extname() method returns the extension of the path from the last 
        occurrence of the .(period) character to end of string in the last portion of the path. 
    -> If there is no . in the last portion of the path, or if there are no . characters other 
        than the first character of the basename of path (see path.basename()) , an empty string is returned.
*/

const Extension_Name = extname(
  "D:100xDevs-Cohort-2.0/NodeJs_Notes/5_Pathmodule/index.js"
);
console.log("Extension : ", Extension_Name); //.js

console.log(
  "--------------------------------------------------------------------------------------------------------------------------------------"
);

// 4. isAbsolute: The path.isAbsolute() method determines if path is an absolute path.

const absolutePath = isAbsolute("/index.js");
console.log("Absolute : ", absolutePath); //true

const absolutePath1 = isAbsolute(
  "D:100xDevs-Cohort-2.0/NodeJs_Notes/5_Pathmodule"
);
console.log("Absolute : ", absolutePath1); //false

console.log(
  "--------------------------------------------------------------------------------------------------------------------------------------"
);

//5. parse : The path.parse() method returns an object whose properties represent significant elements of the path
const Parse = parse("D:100xDevs-Cohort-2.0/NodeJs_Notes/5_Pathmodule/index.js");
console.log("Parse : ", Parse);

console.log(
  "--------------------------------------------------------------------------------------------------------------------------------------"
);

//6. relative : The path.relative() method returns the relative path from from to to based on the current working directory

const RelativePath = relative("./index.js", "../index.js");
console.log("Relative Path : ", RelativePath);

console.log(
  "--------------------------------------------------------------------------------------------------------------------------------------"
);

//7. join : The path.join() method joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path.

const joinPaths = join("../Modules/modules.txt", "./index.js", "folder");
console.log("Join Paths : ", joinPaths); //

console.log(
  "--------------------------------------------------------------------------------------------------------------------------------------"
);

//8.normalize : The path.normalize() method normalizes the given path, resolving '..' and '.' segments.

//Normalizes the Path
const normalizePath = normalize(
  "//folder1",
  "//folder2",
  "..//folder3",
  "../index.html"
);

const normalizePath1 = normalize("..//../folder1//folder2//index.html");
console.log("Normalize Path : ", normalizePath, normalizePath1);

console.log(
  "--------------------------------------------------------------------------------------------------------------------------------------"
);

//9. resolve : The path.resolve() method resolves a sequence of paths or path segments into an absolute path.

const resolve1 = resolve("/index.js");
const resolve2 = resolve("./index.js");
const resolve3 = resolve("../JsonFormat");
const resolve4 = resolve("/folder/..folder");
const resolve5 = resolve("");

console.log("Resolve-1 : ", resolve1);
console.log("Resolve-2 : ", resolve2);
console.log("Resolve-3 : ", resolve3);
console.log("Resolve-4 : ", resolve4);
