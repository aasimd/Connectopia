/** @format */

import React from "react";

export const fetchPostsData = async (dispatch) => {
	try {
		const response = await fetch("/api/posts", {
			method: "GET"
		});
		const data = await response.json();
		dispatch({ type: "setPostsData", payload: data?.posts });
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

export const fetchDeletePost = async (id, dispatch) => {
	const encodedToken = localStorage.getItem("encodedToken");
	try {
		const response = await fetch(`/api/posts/${id}`, {
			method: "DELETE",
			headers: { authorization: `${encodedToken}` }
		});
		const data = await response.json();
		dispatch({ type: "setPostsData", payload: data.posts });
	} catch (error) {
		console.error(error.message);
	}
};

export const fetchEditPost = async (id, dispatch, post) => {
	const encodedToken = localStorage.getItem("encodedToken");
	try {
		const response = await fetch(`/api/posts/edit/${id}`, {
			method: "POST",
			headers: { authorization: `${encodedToken}` },
			body: JSON.stringify({
				postData: post
			})
		});
		const data = await response.json();
		dispatch({ type: "setPostsData", payload: data.posts });
	} catch (error) {
		console.error(error.message);
	}
};

export const fetchSelectedPost = async (id, dispatch) => {
	try {
		const response = await fetch(`/api/posts/${id}`, {
			method: "GET"
		});
		const data = await response.json();
		dispatch({ type: "setSelectedPost", payload: data.post });
	} catch (error) {
		console.error(error.message);
	}
};

export const getSelectedPost = async (id, dispatch) => {
	try {
		const response = await fetch(`/api/posts/${id}`, {
			method: "GET"
		});
		const data = await response.json();
		return data.post;
	} catch (error) {
		console.error(error.message);
	}
};

// export const fetchAddComment = async (postId, commentData, dispatch) => {
// 	const encodedToken = localStorage.getItem("encodedToken");
// 	try {
// 		const response = await fetch(`/api/comments/add/${postId}`, {
// 			method: "POST",
// 			body: commentData,
// 			headers: { authorization: encodedToken }
// 		});
// 		const data = await response.json();
// 		console.log(data);
// 		// dispatch({ type: "setPostsData", payload: data.posts });
// 	} catch (error) {
// 		console.error(error.message);
// 	}
// };
