import { useState } from "react";
import Modal from "react-modal";

const TeamCard = ({ data }) => {
	const { name, email, phone } = data;

	return (
		<div className="w-auto h-auto p-5 border-2 shadow-lg m-5 rounded-md border-sky-400 cursor-pointer">
			<h1>
				<span className="font-bold">Name:</span> {name}
			</h1>
			<p>
				<span className="font-bold">Email:</span> {email}
			</p>
			<p>
				<span className="font-bold">Phone:</span> {phone}
			</p>
		</div>
	);
};

export default TeamCard;
