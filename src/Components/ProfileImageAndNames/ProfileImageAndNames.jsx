/** @format */

import React, { useContext } from "react";
import "./ProfileImageAndNames.css";
import { fetchSelectedUserProfile } from "../../FetchFunctions/fetchFunctions";
import { PageContext } from "../../Contexts/PageContext";
import { useNavigate } from "react-router";

export const ProfileImageAndNames = ({
	fullName,
	username,
	profileImage,
	showDate,
	date
}) => {
	const { state, dispatch } = useContext(PageContext);

	

	const navigate = useNavigate();
	return (
		<div className="profile-image-and-names-card">
			<div className="post-card-profile-pic">
				<img
					alt="profile-picture"
					src={profileImage}
					onClick={() => {
						// userProfileClickHandler(username);
						// fetchSelectedUserProfile(userId._id, dispatch);

						// setTimeout(() => {
						// 	navigate(`/users/${userId._id}`);
						// }, 1000);
					}}
				/>
			</div>
			<div className="post-card-profile-names">
				<b>
					{fullName}
					{showDate && <span> - {date}</span>}
				</b>
				<p>@{username}</p>
			</div>
		</div>
	);
};
