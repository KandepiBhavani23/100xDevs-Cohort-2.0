import express from "express";
const app = express();

let name = "Bhavani";
let password = 123456;

function LoginMiddleware(req, res, next) {
  if (name === "Bhavani" && password === 12345) {
    next();
  } else {
    res.send("Cannot Authenticate ");
  }
}

app.get("/", (req, res) => {
  res.send("This is Login Page ");
});

app.use(LoginMiddleware);

app.get("/profile", (req, res) => {
  res.send("Hello From Profile");
});

app.get("/homepage", (req, res) => {
  res.send("Hello From HomePage");
});

app.listen(8000, () => {
  console.log("Server running on 8000");
});
