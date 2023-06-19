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
		default:
			return 2;
	}
};
