import express from "express";
const app = express();
app.use(express.json());
const router = express.Router();

const products = [
  {
    id: 1,
    name: "Mobile",
  },
  {
    id: 2,
    name: "Laptop",
  },
];

router.use((req, res, next) => {
  console.log("This is router level middleware");
  next();
});

router.get("/products/:id", (req, res, next) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);
  if (product) {
    res.json({
      status: "success",
      data: product,
    });
  } else {
    const error = new Error("Product Not Found");
    err.status = 404;
    next(error);
  }
});

app.use("/api", router);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
