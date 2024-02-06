import { createServer } from "http";
import { readFileSync } from "fs";

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/html" });
  const html = readFileSync("./index.html", "utf-8");
  res.end(html);
});

server.listen("8000", "127.0.0.1", () => {
  console.log("Running Port Number 8000");
});
