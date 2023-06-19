/** @format */

import React, { useContext } from "react";
import { PageContext } from "../../Contexts/PageContext";
import { PostsCard } from "../../Components/PostsCard/PostsCard";
import { ProfileCard } from "../../Components/ProfileCard/ProfileCard";

export const ProfilePage = () => {
	const { state, dispatch, FollowingUsersPost } = useContext(PageContext);

	return <ProfileCard userProfile={state.userInfo} />;
};
