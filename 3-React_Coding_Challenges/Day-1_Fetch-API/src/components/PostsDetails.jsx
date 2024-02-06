import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostsComments from "./PostsComments";
import { Link } from "react-router-dom";

const PostsDetails = () => {
	const { id } = useParams();
	const [postDetails, setPostDetails] = useState([]);
	useEffect(() => {
		getDetailedPosts();
	}, []);

	const getDetailedPosts = async () => {
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/posts/${id}`
		);
		const jsonData = await response.json();
		setPostDetails(jsonData);
	};

	return (
		<>
			<h1 className="text-2xl text-center m-5 font-bold">Detailed Post</h1>
			<div className="px-20 py-10 ">
				<div className="shadow-md p-5 border-orange-500 border-2 rounded-md">
					<h1 className="font-semibold py-3">Post Id: {postDetails?.id}</h1>
					<p className="font-semibold py-3">Post Title: {postDetails.title}</p>
					<p className="font-semibold py-3">
						Post Description: {postDetails.body}
					</p>
				</div>
				<Link to={"/posts/" + postDetails?.id + "/comments"}>
					<button className="px-2 py-3 my-5 bg-green-500 rounded-md text-white font-bold">
						Get Comments Details
					</button>
				</Link>
			</div>
		</>
	);
};

export default PostsDetails;
