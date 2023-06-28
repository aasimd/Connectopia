/** @format */

import React, { useContext, useState } from "react";
import { PageContext } from "../../../Contexts/PageContext";
import { ProfileImageAndNames } from "../../ProfileImageAndNames/ProfileImageAndNames";
import { fetchFollowUser } from "../../../FetchFunctions/fetchFunctions";

export const SuggestedUsersCard = () => {
	const { state, dispatch, suggestedUsers } = useContext(PageContext);
	const [searchInput, setSearchInput] = useState("");
	const followuserHandler = (username) => {
		const id = suggestedUsers?.find((user) => user?.username === username)?._id;
		fetchFollowUser(id, dispatch);
	};
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
		<div>
			<div>
				<div>
					<label>Search Users:</label>
					<input
						type="search"
						onChange={(event) => setSearchHandler(event)}
						value={searchInput}
					/>
				</div>
				<div>
					{searchInput.length > 0 && (
						<ul>
							{searchResults?.map((user) => (
								<li key={user._id}>
									<ProfileImageAndNames
										fullName={user?.fullName}
										username={user?.username}
										profileImage={user?.profileAvatar}
										showDate={false}
									/>
									{/* //make follow button disable for userInfo.user */}
									{state?.userInfo?.username !== user?.username && (
										<button onClick={() => followuserHandler(user.username)}>
											Follow
										</button>
									)}
								</li>
							))}
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
								<button onClick={() => followuserHandler(user.username)}>
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
