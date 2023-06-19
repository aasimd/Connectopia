/** @format */

import React from "react";

export const fetchPostsData = async (dispatch, state) => {
	try {
		const response = await fetch("/api/posts", {
			method: "GET"
		});
		const { posts } = await response.json();
		dispatch({ type: "setPostsData", payload: posts });
	} catch (e) {
		console.error(e.message);
	}
};

export const fetchLoginUser = async (state, dispatch, loginData) => {
	try {
		const response = await fetch(`/api/auth/login`, {
			method: "POST",
			body: JSON.stringify(loginData)
		});
		const { foundUser, encodedToken } = await response.json();
		dispatch({ type: "setUserInfo", payload: foundUser });
		localStorage.setItem("encodedToken", encodedToken);
	} catch (e) {
		console.error(e.message);
	}
};

export const fetchBookmarkPost = async (id, dispatch) => {
	const encodedToken = localStorage.getItem("encodedToken");
	try {
		const response = await fetch(`/api/users/bookmark/${id}`, {
			method: "POST",
			headers: { authorization: `${encodedToken}` }
		});
		const { bookmarks } = await response.json();
		dispatch({ type: "setBookmarks", payload: bookmarks });
	} catch (e) {
		console.error(e.message);
	}
};

export const fetchRemoveBookmarkPost = async (id, dispatch) => {
	const encodedToken = localStorage.getItem("encodedToken");
	try {
		const response = await fetch(`/api/users/remove-bookmark/${id}`, {
			method: "POST",
			headers: { authorization: `${encodedToken}` }
		});
		const { bookmarks } = await response.json();
		dispatch({ type: "setBookmarks", payload: bookmarks });
	} catch (e) {
		console.error(e.message);
	}
};

export const fetchGetBookmarks = async (dispatch) => {
	const encodedToken = localStorage.getItem("encodedToken");
	try {
		const response = await fetch(`/api/users/bookmark`, {
			method: "GET",
			headers: { authorization: `${encodedToken}` }
		});
		const { bookmarks } = await response.json();
		dispatch({ type: "setBookmarks", payload: bookmarks });
	} catch (e) {
		console.error(e.message);
	}
};

export const fetchLikePost = async (id, dispatch) => {
	const encodedToken = localStorage.getItem("encodedToken");
	try {
		const response = await fetch(`/api/posts/like/${id}`, {
			method: "POST",
			headers: { authorization: `${encodedToken}` }
		});
		const { posts } = await response.json();
		dispatch({ type: "setPostsData", payload: posts });
	} catch (e) {
		console.error(e.message);
	}
};

export const fetchDisLikePost = async (id, dispatch) => {
	const encodedToken = localStorage.getItem("encodedToken");
	try {
		const response = await fetch(`/api/posts/dislike/${id}`, {
			method: "POST",
			headers: { authorization: `${encodedToken}` }
		});
		const { posts } = await response.json();
		dispatch({ type: "setPostsData", payload: posts });
	} catch (e) {
		console.error(e.message);
	}
};

export const fetchUsersList = async (dispatch) => {
	try {
		const response = await fetch(`/api/users`, {
			method: "GET"
		});
		const { users } = await response.json();
		dispatch({ type: "setUsersData", payload: users });
	} catch (e) {
		console.error(e.message);
	}
};

export const fetchFollowUser = async (id, dispatch) => {
	const encodedToken = localStorage.getItem("encodedToken");
	try {
		const response = await fetch(`/api/users/follow/${id}`, {
			method: "POST",
			headers: { authorization: `${encodedToken}` }
		});
		const data = await response.json();
		dispatch({ type: "setUserInfo", payload: data.user });
	} catch (error) {
		console.error(error.message);
	}
};

export const fetchUnfollowUser = async (id, dispatch) => {
	const encodedToken = localStorage.getItem("encodedToken");
	try {
		const response = await fetch(`/api/users/unfollow/${id}`, {
			method: "POST",
			headers: { authorization: `${encodedToken}` }
		});
		const data = await response.json();
		dispatch({ type: "setUserInfo", payload: data.user });
	} catch (error) {
		console.error(error.message);
	}
};
