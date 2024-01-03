import express from "express";
const app = express();

app.use((req, res, next) => {
  console.log("This is an application-level middleware");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello");
});
app.get("/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "Laptop",
    },
    {
      id: 2,
      name: "Mobiles",
    },
    {
      id: 3,
      name: "Airpods",
    },
  ];
  res.json({
    status: true,
    data: products,
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
