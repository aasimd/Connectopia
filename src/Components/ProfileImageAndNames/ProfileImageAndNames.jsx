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
	const findUser = state.usersData.find((user) => user.username === username);
	const navigate = useNavigate();
	const userProfileClickHandler = (username) => {
		if (username === state.userInfo?.username) {
			setTimeout(() => {
				navigate(`/profile`);
			}, 1000);
		} else {
			const userId = state.usersData.find((user) => user.username === username);
			fetchSelectedUserProfile(userId._id, dispatch);
			setTimeout(() => {
				navigate(`/users/${userId._id}`);
			}, 1000);
		}
	};
	return (
		<div className="profile-image-and-names-card">
			<div className="post-card-profile-pic">
				<img
					alt="profile-picture"
					src={profileImage}
					onClick={() => {
						userProfileClickHandler(username);
						console.log(findUser);
					}}
				/>
			</div>
			<div className="post-card-profile-names">
				<b>
					<span
						onClick={() => {
							userProfileClickHandler(username);
						}}
					>
						{fullName}
					</span>
					{showDate && <span> - {date}</span>}
				</b>
				<p
					onClick={() => {
						userProfileClickHandler(username);
					}}
				>
					@{username}
				</p>
			</div>
		</div>
	);
};
