/** @format */

import React from "react";
import "./ProfileImageAndNames.css";

export const ProfileImageAndNames = ({ fullName, username, profileImage }) => {
	return (
		<div>
			<div className="post-card-profile-pic">
				<img alt="profile-picture" src={profileImage} />
			</div>
			<div className="post-card-profile-names">
				<b>{fullName}</b>
				<p>@{username}</p>
			</div>
		</div>
	);
};
