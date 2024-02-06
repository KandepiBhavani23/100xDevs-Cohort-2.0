import { useEffect, useState } from "react";
import TeamCard from "./TeamCard";

const TeamMembers = () => {
	const [teamMembers, setTeamPost] = useState([]);

	useEffect(() => {
		getTeamMembersDetails();
	}, []);

	const getTeamMembersDetails = async () => {
		const respose = await fetch("https://jsonplaceholder.typicode.com/users");
		const jsonData = await respose.json();
		setTeamPost(jsonData);
	};

	return (
		<div className=" py-14 px-10 gap-5">
			<h1 className="font-bold text-2xl">
				Team Members - {teamMembers.length}
			</h1>
			<div className="grid grid-cols-2">
				{teamMembers.map((team) => (
					<TeamCard data={team} key={team?.id} />
				))}
			</div>
		</div>
	);
};

export default TeamMembers;
