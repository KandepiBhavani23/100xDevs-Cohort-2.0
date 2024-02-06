import { readFile } from "fs";

readFile("../fsAsynchronous/books.txt", "utf-8", (err, data) => {
	if (err) console.log(err);
	else console.log(data);
});
