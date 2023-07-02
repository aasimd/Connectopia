/** @format */

import React from "react";

export const fetchPostsData = async (state, dispatch) => {
	try {
		const response = await fetch("/api/posts", {
			method: "GET"
		});
		const data = await response.json();
		dispatch({ type: "setPostsData", payload: data.posts });
	} catch (e) {
		console.error(e.message);
	}
};

export const fetchLoginUser = async (state, dispatch, loginData) => {
	console.log(dispatch);
	try {
		const response = await fetch(`/api/auth/login`, {
			method: "POST",
			body: JSON.stringify(loginData)
		});
		const { foundUser, encodedToken } = await response.json();
		localStorage.setItem("encodedToken", encodedToken);
		dispatch({ type: "setLogin", payload: true });
		dispatch({ type: "setUserInfo", payload: foundUser });
		if (encodedToken === undefined) {
			console.error("Wrong username or password entered");
			// dispatch({
			// 	type: "setLoginError",
			// 	payload: "Wrong Email ID or Password entered"
			// });
			return false;
		} else {
			dispatch({ type: "setLogin", payload: true });
			return true;
			// dispatch({
			// 	type: "setLoginError",
			// 	payload: ""
			// });
			// toast.success("Logged in!", {
			// 	position: "top-right",
			// 	autoClose: 3000,
			// 	hideProgressBar: false,
			// 	closeOnClick: true,
			// 	pauseOnHover: true,
			// 	draggable: true,
			// 	progress: undefined,
			// 	theme: "light"
			// });
			// setTimeout(() => {
			// 	navigate(location?.state?.from?.pathname);
			// }, 1000);
		}
	} catch (e) {
		console.error(e.message);
	}
};

export const fetchSignUpUser = async (state, dispatch, userData) => {
	try {
		const response = await fetch(`/api/auth/signup`, {
			method: "POST",
			body: JSON.stringify(userData)
		});

		const data = await response.json();
		if (data?.encodedToken === undefined) {
			console.error("User Already Exists");
			return false;
		} else {
			dispatch({ type: "setUserInfo", payload: data.createdUser });
			localStorage.setItem("encodedToken", data.encodedToken);
			return true;
		}
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

export const fetchSelectedPost = async (id, dispatch, state) => {
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

export const fetchCreateNewPost = async (dispatch, postData) => {
	const encodedToken = localStorage.getItem("encodedToken");
	try {
		const response = await fetch(`/api/posts`, {
			method: "POST",
			body: JSON.stringify({ postData: postData }),
			headers: { authorization: `${encodedToken}` }
		});
		const data = await response.json();
		dispatch({ type: "setPostsData", payload: data?.posts });
	} catch (e) {
		console.error(e.message);
	}
};

export const fetchEditProfile = async (dispatch, newUserInfo) => {
	const encodedToken = localStorage.getItem("encodedToken");
	try {
		const response = await fetch(`/api/users/edit`, {
			method: "POST",
			headers: { authorization: `${encodedToken}` },
			body: JSON.stringify({
				userData: newUserInfo
			})
		});
		const data = await response.json();
		dispatch({ type: "setUserInfo", payload: data.user });
	} catch (error) {
		console.error(error.message);
	}
};

export const fetchSelectedUserProfile = async (id, dispatch) => {
	try {
		const response = await fetch(`/api/users/${id}`, {
			method: "GET"
		});
		const data = await response.json();
		dispatch({ type: "setSelectedUserProfile", payload: data.user });
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
