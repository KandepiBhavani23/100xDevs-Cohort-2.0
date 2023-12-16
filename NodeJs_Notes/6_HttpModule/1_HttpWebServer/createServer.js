import { createServer } from "http";

const server = createServer((req, res) => {
	res.write("Hello Welcome to Food Tour");
	res.end();
});

server.listen("8000", "127.0.0.1", () => {
	console.log("Listening to port 8000");
});
