/** @format */

import React from "react";

export const reducerFunction = (state, { type, payload }) => {
	switch (type) {
		case "setPostsData":
			return { ...state, postsData: payload };
		case "setUserInfo":
			return { ...state, userInfo: payload };
		case "setLogin":
			return { ...state, isLoggedIn: payload };
		case "setBookmarks":
			return { ...state, bookmarkedPosts: payload };
		case "setUsersData":
			return { ...state, usersData: payload };
		case "setSelectPostEdit":
			return { ...state, selectPostEdit: payload };
		case "setSelectedPost":
			return { ...state, selectedPost: payload };
		case "setSelectedUserProfile":
			return { ...state, selectedUserProfile: payload };
		case "setSortType":
			return { ...state, sortType: payload };
		case "changeIsLoading":
			return { ...state, isLoading: payload };
		default:
			return state;
	}
};
