/** @format */

import React, { useContext } from "react";
import { ProfileCard } from "../../Components/ProfileCard/ProfileCard";
import { PageContext } from "../../Contexts/PageContext";
import { NavBar } from "../../Components/NavBar/NavBar";

export const UserProfilePage = () => {
	const { state, dispatch } = useContext(PageContext);
	return (
		<div>
			<nav>
				<NavBar />
			</nav>
			<div>
				<ProfileCard userProfile={state?.selectedUserProfile} />;
			</div>
		</div>
	);
};
