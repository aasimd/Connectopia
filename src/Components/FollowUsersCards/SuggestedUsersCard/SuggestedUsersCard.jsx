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
export const SuggestedUsersCard = () => {
	const { state, dispatch, suggestedUsers } = useContext(PageContext);
	const [searchInput, setSearchInput] = useState("");
	// const followuserHandler = (username) => {
	// 	const id = suggestedUsers?.find((user) => user?.username === username)?._id;
	// 	fetchFollowUser(id, dispatch);
	// };
	const setSearchHandler = (event) => {
		setSearchInput(() => event?.target?.value.trim());
	};
	const searchResults = [
		...[...state?.usersData]?.filter(
			(user) =>
				user?.fullName
					?.toLowerCase()
					.trim()
					?.includes(searchInput?.toLowerCase()?.trim()) ||
				user?.username
					?.toLowerCase()
					?.trim()
					?.includes(searchInput?.toLowerCase()?.trim())
		)
	];

	return (
		<div className="suggested-users-card">
			<div className="search-users-section">
				<div>
					<b>Search Users:</b>
					<br />
					<input
						type="search"
						onChange={(event) => setSearchHandler(event)}
						value={searchInput}
					/>
				</div>
				<div className="users-search-results-section">
					{searchInput.length > 0 && (
						<ul>
							Search Results:
							{searchResults?.map((user) => {
								return (
									<li key={user._id}>
										<div>
											<ProfileImageAndNames
												fullName={user?.fullName}
												username={user?.username}
												profileImage={user?.profileAvatar}
												showDate={false}
											/>
											<div className="follow-btn">
												{state?.userInfo?.username !== user?.username &&
													(!followUserHandler(user.username, state) ? (
														<button
															onClick={() =>
																followHandler(user?.username, state, dispatch)
															}
														>
															Follow
														</button>
													) : (
														<button
															onClick={() =>
																unfollowHandler(user?.username, state, dispatch)
															}
														>
															Unfollow
														</button>
													))}
											</div>
										</div>
										{/* //make follow button disable for userInfo.user */}
									</li>
								);
							})}
						</ul>
					)}
				</div>
			</div>
			<div className="suggested-users-section">
				{suggestedUsers.length > 0 && (
					<div>
						<b>Suggested Users:</b>
						<ul>
							{suggestedUsers.map((user) => (
								<li key={user?._id}>
									<div>
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
