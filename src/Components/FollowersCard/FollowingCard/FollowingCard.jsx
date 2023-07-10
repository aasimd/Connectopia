/** @format */

import React from "react";
import { ProfileImageAndNames } from "../../ProfileImageAndNames/ProfileImageAndNames";

export const FollowingCard = ({ following, setShowFollowingCard }) => {
	return (
		<div style={{ position: "relative" }}>
			<div className="close-options-button">
				<button onClick={() => setShowFollowingCard(false)}>
					<i className="fa-solid fa-xmark"></i>
				</button>
			</div>
			<h1>Following</h1>
			{following.length > 0 ? (
				<div>
					<ul>
						{following.map((following) => (
							<li key={following.id}>
								<ProfileImageAndNames
									fullName={following.fullName}
									username={following.username}
									profileImage={following.profileAvatar}
									showDate={false}
									// date={dateOfPost}
								/>
							</li>
						))}
					</ul>
				</div>
			) : (
				<h2>No Users Followed</h2>
			)}
		</div>
	);
};
