async function deleteProduct(productId) {
  let options = {
    method: "DELETE",
  };

  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/${productId}`,
      options
    );
    const deletedProduct = await response.json();
    console.log("Deleted Product:", deletedProduct);
  } catch (error) {
    console.error("Error deleting product:", error);
  }
}

deleteProduct(7);
