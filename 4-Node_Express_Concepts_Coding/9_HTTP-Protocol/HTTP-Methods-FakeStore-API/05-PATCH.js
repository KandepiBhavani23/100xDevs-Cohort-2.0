async function patchProduct(productId, updatedData) {
  let options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  };

  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/${productId}`,
      options
    );
    const patchedProduct = await response.json();
    console.log("Patched Product:", patchedProduct);
  } catch (error) {
    console.error("Error patching product:", error);
  }
}

let patchData = {
  title: "Gold Jewellery",
};

patchProduct(1, patchData);
