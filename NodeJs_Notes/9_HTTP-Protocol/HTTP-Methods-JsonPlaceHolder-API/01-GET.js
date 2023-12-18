const fetchPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    console.log("Posts", posts);
  } catch (error) {
    console.log("Error in Fetching Posts", error);
  }
};

fetchPosts();
