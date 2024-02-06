/*
API is the acronym for Application Programming Interface, which is a software intermediary
that allows two applications to talk to each other. Each time you use an app like Facebook,
send an instant message, or check weather on your phone you're using an API

API is like a service which allows us to request a data.
*/

import { readFile } from "fs";
import { createServer } from "http";

const server = createServer((req, res) => {
  const path = req.url;

  if (path === "/") {
    res.end("Welcome to Routing");
  } else if (path === "/about") {
    res.end("This is About Us Page");
  } else if (path === "/contact") {
    res.end("This is Contact Us Page");
  } else if (path === "/userapi") {
    readFile("../8_createApi/userApi.json", "utf-8", (err, data) => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(data);
    });
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("<h1>Page doesn't Exist</h1>");
  }
});

server.listen("8000", "127.0.0.1", () => {
  console.log("Listening to Port 8000");
});
