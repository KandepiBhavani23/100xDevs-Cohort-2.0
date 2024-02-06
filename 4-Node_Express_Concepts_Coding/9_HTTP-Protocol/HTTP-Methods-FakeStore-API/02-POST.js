// Example using FakeStore API to add a new product to the cart (Note: This is a hypothetical example)
async function addToCart(newCartData) {
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCartData),
  };

  try {
    const response = await fetch("https://fakestoreapi.com/carts", options);
    const addToCartResult = await response.json();
    console.log("Added to Cart:", addToCartResult);
  } catch (error) {
    console.error("Error adding to cart:", error);
  }
}

const newCartData = {
  userId: 7,
  date: "2020-02-03",
  products: [
    { productId: 5, quantity: 1 },
    { productId: 1, quantity: 5 },
  ],
};
addToCart(newCartData);
