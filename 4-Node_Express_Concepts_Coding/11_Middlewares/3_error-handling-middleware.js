import express from "express";
const app = express();

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something Went Wrong!");
});

app.get("/api/error", (req, res, next) => {
  const error = new Error("Error goes on");
  next(error);
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
