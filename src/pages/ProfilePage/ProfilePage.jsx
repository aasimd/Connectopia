/** @format */

import React, { useContext, useEffect } from "react";
import { PageContext } from "../../Contexts/PageContext";
import { PostsCard } from "../../Components/PostsCard/PostsCard";
import { ProfileCard } from "../../Components/ProfileCard/ProfileCard";
import { fetchUsersList } from "../../FetchFunctions/fetchFunctions";
import { NavBar } from "../../Components/NavBar/NavBar";
import { SuggestedUsersCard } from "../../Components/FollowUsersCards/SuggestedUsersCard/SuggestedUsersCard";

export const ProfilePage = () => {
	const { state, dispatch, FollowingUsersPost } = useContext(PageContext);
	useEffect(() => {
		fetchUsersList(dispatch);
	}, [state.usersData]);
	return (
		<div className="three-sections-page">
			<nav className="left-column">
				<NavBar />
			</nav>
			<div className="middle-column">
				<div className="posts-container">
					<ProfileCard userProfile={state.userInfo} />
				</div>
			</div>
			<div>
				<SuggestedUsersCard className="right-column" />
			</div>
		</div>
	);
};
