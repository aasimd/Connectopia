/** @format */

import React from "react";
import { ProfileImageAndNames } from "../ProfileImageAndNames/ProfileImageAndNames";

export const FollowersCard = ({ followers, setShowFollowersCard }) => {
	return (
		<div style={{position:"relative"}}>
			<div className="close-options-button">
				<button onClick={() => setShowFollowersCard(false)}>
					<i className="fa-solid fa-xmark"></i>
				</button>
			</div>
			<h1>Followers</h1>
			{followers.length > 0 ? (
				<div>
					<ul>
						{followers.map((follower) => (
							<li key={follower.id}>
								<ProfileImageAndNames
									fullName={follower.fullName}
									username={follower.username}
									profileImage={follower.profileAvatar}
									showDate={false}
									// date={dateOfPost}
								/>
							</li>
						))}
					</ul>
				</div>
			) : (
				<h2>No Followers</h2>
			)}
		</div>
	);
};
