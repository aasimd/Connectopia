/** @format */
import { v4 as uuid } from "uuid";
import { formatDate } from "../backend/utils/authUtils";
import React, { createContext, useEffect, useReducer } from "react";
import { reducerFunction } from "../ReducerFunction/reducerFunction";
import { fetchUsersList } from "../FetchFunctions/fetchFunctions";

export const PageContext = createContext();
export const PageContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducerFunction, {
		postsData: [],
		userInfo: {},
		isLoggedIn: false,
		bookmarkedPosts: [],
		usersData: [],
		selectPostEdit: {},
		selectedPost: {},
		selectedUserProfile: {},
		sortType: "latest",
		isLoading: true
	});
	const trendingData = [...state.postsData].filter((post) =>
		state?.sortType === "trending" ? post.likes.likeCount > 0 : post
	);
	const DisplayData = () => {
		if (state?.sortType === "trending") {
			return [...trendingData].sort(
				(a, b) => b.likes.likeCount - a.likes.likeCount
			);
		}
		if (state?.sortType === "oldest") {
			return [...trendingData];
		}
		if (state?.sortType === "latest") {
			return [...trendingData].reverse();
		}
		return trendingData;
		// if (state?.sortType === "oldest") {
		// 	return a - b;
		// }
		// if (state?.sortType === "latest") {
		// 	return new Date(b.createdAt) - new Date(a.createdAt);
		// }
		// return a - b;
	};

	const FollowingUsersPost = () => {
		const followingUsers =
			state.userInfo?.following !== undefined
				? [
						...state.userInfo?.following?.map(({ username }) => username),
						state.userInfo?.username
				  ]
				: [state.userInfo?.username];
		const followingUsersPosts = DisplayData()?.filter((post) =>
			followingUsers.includes(post?.username)
		);
		return followingUsersPosts;
	};
	const followingUsers = state?.userInfo?.following?.map(
		({ username }) => username
	);
	const suggestedUsers = state?.usersData
		?.filter(({ username }) => !followingUsers?.includes(username))
		?.filter(({ username }) => username !== state?.userInfo?.username);

	useEffect(() => {
		fetchUsersList(dispatch);
	}, []);
	return (
		<PageContext.Provider
			value={{
				state,
				dispatch,
				DisplayData,
				FollowingUsersPost,
				suggestedUsers,
				followingUsers
			}}
		>
			{children}
		</PageContext.Provider>
	);
};
