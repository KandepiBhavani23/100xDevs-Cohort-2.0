const deletePost = async (postId) => {
  let options = {
    method: "DELETE",
  };

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
      options
    );
    const deletePost = await response.json();
    console.log("Deleted Post:", deletePost);
  } catch (error) {
    console.log("Error in Deleteing Post", error);
  }
};
deletePost(1);
