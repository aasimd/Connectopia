/** @format */

import React, { useContext } from "react";
import { ProfileCard } from "../../Components/ProfileCard/ProfileCard";
import { PageContext } from "../../Contexts/PageContext";
import { NavBar } from "../../Components/NavBar/NavBar";
import { SuggestedUsersCard } from "../../Components/FollowUsersCards/SuggestedUsersCard/SuggestedUsersCard";

export const UserProfilePage = () => {
	const { state, dispatch } = useContext(PageContext);
	return (
		<div className="three-sections-page">
			<nav className="left-column">
				<NavBar />
			</nav>
			<div className="middle-column">
				<div className="posts-container">
					<ProfileCard userProfile={state?.selectedUserProfile} />;
				</div>
			</div>
			<div>
				<SuggestedUsersCard className="right-column" />
			</div>
		</div>
	);
};
