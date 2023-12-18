const updateProduct = async (productId, updateProduct) => {
  let options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateProduct),
  };

  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/${productId}`,
      options
    );
    const updatedProduct = await response.json();
    console.log("Product Updated Successfully", updatedProduct);
  } catch (error) {
    console.log("Error in updating Products", error);
  }
};

const updatedProduct = {
  title: "White Gold Plated Princess",
  price: 9.99,
  description:
    "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her",
  category: "jewelery",
  image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
  rating: {
    rate: 3,
    count: 400,
  },
};

updateProduct(7, updatedProduct);
