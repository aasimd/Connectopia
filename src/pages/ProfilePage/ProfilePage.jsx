/** @format */

import React, { useContext, useEffect } from "react";
import { PageContext } from "../../Contexts/PageContext";
import { PostsCard } from "../../Components/PostsCard/PostsCard";
import { ProfileCard } from "../../Components/ProfileCard/ProfileCard";
import { fetchUsersList } from "../../FetchFunctions/fetchFunctions";

export const ProfilePage = () => {
	const { state, dispatch, FollowingUsersPost } = useContext(PageContext);
	useEffect(() => {
		fetchUsersList(dispatch);
	}, [state.usersData]);
	return <ProfileCard userProfile={state.userInfo} />;
};
