/** @format */

import React, { useContext, useEffect } from "react";
import { PageContext } from "../../Contexts/PageContext";
import { PostsCard } from "../../Components/PostsCard/PostsCard";
import { ProfileCard } from "../../Components/ProfileCard/ProfileCard";
import { fetchUsersList } from "../../FetchFunctions/fetchFunctions";
import { NavBar } from "../../Components/NavBar/NavBar";

export const ProfilePage = () => {
	const { state, dispatch, FollowingUsersPost } = useContext(PageContext);
	useEffect(() => {
		fetchUsersList(dispatch);
	}, [state.usersData]);
	return (
		<div>
			<nav>
				<NavBar />
			</nav>
			<div>
				<ProfileCard userProfile={state.userInfo} />
			</div>
		</div>
	);
};
