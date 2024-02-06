import { createServer } from "http";

const server = createServer((req, res) => {
  const path = req.url;

  if (path === "/") {
    res.end("This is Home Page");
  } else if (path === "/about") {
    res.end("This is About Me Page");
  } else if (path === "/contacts") {
    res.end("This is contact page");
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>Page Not Found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to port 8000");
});
