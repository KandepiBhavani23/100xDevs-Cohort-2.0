const createPost = async (newPost) => {
  const options = {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  };

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      options
    );
    const newPost = await response.json();
    console.log("New Post", newPost);
  } catch (error) {
    console.log("Error in create new Post", error);
  }
};
