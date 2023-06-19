/** @format */

import React, { createContext, useEffect, useReducer } from "react";
import { reducerFunction } from "../ReducerFunction/reducerFunction";
import {
	fetchPostsData,
	fetchUsersList
} from "../FetchFunctions/fetchFunctions";

export const PageContext = createContext();
export const PageContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducerFunction, {
		postsData: [],
		userInfo: {},
		isLoggedIn: false,
		bookmarkedPosts: [],
		usersData: []
	});
	const DisplayData = state.postsData;
	const FollowingUsersPost = () => {
		const followingUsers =
			state.userInfo?.following !== undefined
				? [
						...state.userInfo?.following?.map(({ username }) => username),
						state.userInfo?.username
				  ]
				: [state.userInfo?.username];
		const followingUsersPosts = state.postsData?.filter((post) =>
			followingUsers.includes(post?.username)
		);
		return followingUsersPosts;
	};
	useEffect(() => {
		fetchUsersList(dispatch);
	}, []);
	return (
		<PageContext.Provider
			value={{
				state,
				dispatch,
				DisplayData,
				FollowingUsersPost
			}}
		>
			{children}
		</PageContext.Provider>
	);
};
