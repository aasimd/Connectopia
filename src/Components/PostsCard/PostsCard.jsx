/** @format */

import React, { useContext, useState } from "react";
import "./PostsCard.css";
import {
	fetchBookmarkPost,
	fetchDisLikePost,
	fetchFollowUser,
	fetchGetBookmarks,
	fetchLikePost,
	fetchRemoveBookmarkPost,
	fetchUnfollowUser
} from "../../FetchFunctions/fetchFunctions";
import { PageContext } from "../../Contexts/PageContext";

export const PostsCard = ({ post }) => {
	const { state, dispatch } = useContext(PageContext);
	const [followState, setFollowState] = useState();
	const findBookmarkedPost = state.bookmarkedPosts.includes(post._id);

	const isNotLiked = (id) => {
		const findPost = state.postsData.find(
			(currentpost) => currentpost?._id === id
		);

		return (
			findPost.likes.likedBy.find(
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

	return (
		<li className="post-card">
			<div className="post-card-profile-pic">
				<img alt="profile-picture" src={post.profileAvatar} />
			</div>
			<div className="post-card-names">
				<b>{post.fullName}</b>
				<p>@{post.username}</p>
			</div>
			<div className="post-card-content-container">
				<div className="post-card-text-content">
					<p>{post.content}</p>
				</div>
				<div className="post-image">
					{post.postImage && <img alt={post.content} src={post.postImage} />}
				</div>

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
				{setLikeOrDisLike ? (
					<button onClick={() => fetchLikePost(post._id, dispatch)}>
						<i className="fa-regular fa-heart"></i> {post.likes.likeCount}
					</button>
				) : (
					<button onClick={() => fetchDisLikePost(post._id, dispatch)}>
						<i className="fa-solid fa-heart"></i>
						{post.likes.likeCount}
					</button>
				)}
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
		</li>
	);
};
