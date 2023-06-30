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
					<label>Search Users:</label>
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
										</div>
										{/* //make follow button disable for userInfo.user */}
										<div>
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
									</li>
								);
							})}
						</ul>
					)}
				</div>
			</div>
			<div>
				{suggestedUsers.length > 0 && (
					<>
						<b>Suggested Users</b>
						{suggestedUsers.map((user) => (
							<li key={user?._id}>
								<ProfileImageAndNames
									fullName={user?.fullName}
									username={user?.username}
									profileImage={user?.profileAvatar}
									showDate={false}
								/>
								<button onClick={() => followUserHandler(user.username, state)}>
									Follow
								</button>
							</li>
						))}
					</>
				)}
			</div>
		</div>
	);
};
