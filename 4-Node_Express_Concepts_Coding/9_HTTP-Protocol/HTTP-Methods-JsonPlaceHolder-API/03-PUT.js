const updatePost = async (postId, updatePost) => {
  let options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatePost),
  };

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
      options
    );
    const updatedPostData = await response.json();
    console.log("Updated Post Data", updatedPostData);
  } catch (error) {
    console.log("Error updating Post", error);
  }
};

let updatedPostData = {
  id: 1,
  title: "Namaskar",
  body: "Hello World",
};

updatePost(1, updatedPostData);
