/** @format */

import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PostsCard.css";
import {
	fetchBookmarkPost,
	fetchDeletePost,
	fetchDisLikePost,
	fetchFollowUser,
	fetchLikePost,
	fetchRemoveBookmarkPost,
	fetchSelectedPost,
	fetchUnfollowUser
} from "../../FetchFunctions/fetchFunctions";
import { PageContext } from "../../Contexts/PageContext";
import { ProfileImageAndNames } from "../ProfileImageAndNames/ProfileImageAndNames";

export const PostsCard = ({ post, styles }) => {
	const { state, dispatch } = useContext(PageContext);
	const findBookmarkedPost = state.bookmarkedPosts.includes(post._id);
	const navigate = useNavigate();

	const isNotLiked = (id) => {
		const findPost = state.postsData.find(
			(currentpost) => currentpost?._id === id
		);

		return (
			findPost?.likes?.likedBy.find(
				(user) => user?.username === state.userInfo?.username
			) === undefined
		);
	};
	const setLikeOrDisLike = isNotLiked(post._id);
	const followUserHandler = (followusername) => {
		const followingUsers = state.userInfo?.following?.map(
			({ username }) => username
		);
		const findUserInFollowing = followingUsers.includes(followusername);
		return findUserInFollowing;
	};
	const followHandler = (followusername) => {
		const getUser = state.usersData?.find(
			(user) => user.username === followusername
		);
		fetchFollowUser(getUser._id, dispatch);
	};
	const unfollowHandler = (followusername) => {
		const getUser = state.usersData?.find(
			(user) => user.username === followusername
		);
		fetchUnfollowUser(getUser._id, dispatch);
	};
	const editHandler = (id) => {
		const findPostToEdit = state.postsData.find((post) => post._id === id);
		dispatch({ type: "setSelectPostEdit", payload: findPostToEdit });
		navigate(`/postEdit`);
	};
	const postClickHandler = (id) => {
		fetchSelectedPost(id, dispatch);
		navigate(`/post/${id}`);
	};
	return (
		<li
			className={styles}
			// onClick={() => postClickHandler(post.id)}
		>
			<div>
				<ProfileImageAndNames
					fullName={post.fullName}
					username={post.username}
					profileImage={post.profileAvatar}
				/>
			</div>
			<div className="post-card-content-container">
				<div className="post-card-text-content">
					<p>{post.content}</p>
				</div>
				<div className="post-image">
					{post.postImage && <img alt={post.content} src={post.postImage} />}
				</div>
				<div>
					{!findBookmarkedPost ? (
						<button
							onClick={() => {
								fetchBookmarkPost(post._id, dispatch);
							}}
						>
							<i className="fa-sharp fa-regular fa-bookmark"></i>
						</button>
					) : (
						<button
							onClick={() => {
								fetchRemoveBookmarkPost(post._id, dispatch);
							}}
						>
							<i className="fa-sharp fa-solid fa-bookmark"></i>
						</button>
					)}
				</div>
				<div>
					{setLikeOrDisLike ? (
						<button onClick={() => fetchLikePost(post._id, dispatch)}>
							<i className="fa-regular fa-heart"></i> {post?.likes?.likeCount}
						</button>
					) : (
						<button onClick={() => fetchDisLikePost(post._id, dispatch)}>
							<i className="fa-solid fa-heart"></i>
							{post?.likes?.likeCount}
						</button>
					)}
				</div>
				<div>
					{state.userInfo.username !== post.username && (
						<div>
							{!followUserHandler(post.username) ? (
								<button onClick={() => followHandler(post.username)}>
									Follow
								</button>
							) : (
								<button onClick={() => unfollowHandler(post.username)}>
									Unfollow
								</button>
							)}
						</div>
					)}
				</div>
				<div>
					{state.userInfo?.username === post.username && (
						<>
							<button onClick={() => editHandler(post._id)}>Edit</button>
							<button onClick={() => fetchDeletePost(post._id, dispatch)}>
								Delete
							</button>
						</>
					)}
				</div>
			</div>
		</li>
	);
};
