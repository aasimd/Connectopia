/** @format */

import React, { useContext } from "react";
import { ProfileCard } from "../../Components/ProfileCard/ProfileCard";
import { PageContext } from "../../Contexts/PageContext";

export const UserProfilePage = () => {
	const { state, dispatch } = useContext(PageContext);
	return (
		<div>
			<ProfileCard userProfile={state?.selectedUserProfile} />;
		</div>
	);
};
