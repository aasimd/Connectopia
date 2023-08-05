/** @format */

import React, { useContext, useState } from "react";
import { PageContext } from "../../../Contexts/PageContext";
import { ProfileImageAndNames } from "../../ProfileImageAndNames/ProfileImageAndNames";
import { fetchFollowUser } from "../../../FetchFunctions/fetchFunctions";
import "./SuggestedUsersCard.css";
import {
	followHandler,
	followUserHandler,
	unfollowHandler
} from "../../../Functions/followUserHandler";
import { FooterCard } from "../../FooterCard/FooterCard";
import { SearchUsersCard } from "../../SearchUsersCard/SearchUsersCard";
export const SuggestedUsersCard = () => {
	const { state, dispatch, suggestedUsers } = useContext(PageContext);

	// const followuserHandler = (username) => {
	// 	const id = suggestedUsers?.find((user) => user?.username === username)?._id;
	// 	fetchFollowUser(id, dispatch);
	// };

	return (
		<div className="suggested-users-card">
			<SearchUsersCard />
			<div className="suggested-users-section">
				{suggestedUsers.length > 0 && (
					<div className="suggested-users">
						<b>Suggested Users:</b>
						<ul>
							{suggestedUsers.map((user) => (
								<li key={user?._id}>
									<div className="users-search-results-card">
										<ProfileImageAndNames
											fullName={user?.fullName}
											username={user?.username}
											profileImage={user?.profileAvatar}
											showDate={false}
										/>
										<div className="follow-btn">
											<button
												onClick={() =>
													followHandler(user?.username, state, dispatch)
												}
											>
												Follow
											</button>
										</div>
									</div>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
			<div className="footer">
				<FooterCard />
			</div>
		</div>
	);
};
