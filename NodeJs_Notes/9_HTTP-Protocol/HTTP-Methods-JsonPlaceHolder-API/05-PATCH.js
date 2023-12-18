const patchPost = async (postId, updatedPost) => {
  let options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedPost),
  };
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
      options
    );
    const patchedPost = await response.json();
    console.log("Updated Post", patchedPost);
  } catch (error) {
    console.log("Error in Updating Post", error);
  }
};

let updatedPostData = {
  title: "suscipit recusandae consequuntur expedita",
};

patchPost(1, updatedPostData);
