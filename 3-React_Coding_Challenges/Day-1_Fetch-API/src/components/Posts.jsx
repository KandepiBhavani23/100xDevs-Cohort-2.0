import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPostDetails();
  }, []);

  const getPostDetails = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const jsonData = await response.json();
    setPosts(jsonData);
  };
  return (
    <div>
      <h1 className="text-2xl font-bold py-3 text-center">
        Number of Posts - {posts.length}
      </h1>
      <div className="grid grid-cols-3 gap-4 py-10 mx-10">
        {posts?.map((posts) => (
          <div
            key={posts.id}
            className="shadow-md py-5  border-2 border-pink-500 rounded-md p-5 ">
            <h1 className="font-bold py-3">Post - {posts.id}</h1>
            <p>{posts.title}</p>
            <Link to={"/posts/" + posts.id} key={posts.id}>
              <button className="bg-sky-600 my-3 px-2 py-2 rounded-md text-white">
                Know More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
