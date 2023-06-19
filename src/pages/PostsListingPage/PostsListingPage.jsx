/** @format */

import React, { useEffect } from "react";
import { useContext } from "react";

import { PageContext } from "../../Contexts/PageContext";
import {
	fetchGetBookmarks,
	fetchPostsData,
	fetchUsersList
} from "../../FetchFunctions/fetchFunctions";
import { PostsCard } from "../../Components/PostsCard/PostsCard";

export const PostsListingPage = () => {
	const { state, dispatch, DisplayData, FollowingUsersPost } =
		useContext(PageContext);
	useEffect(() => {
		fetchPostsData(dispatch, state);
		fetchGetBookmarks(dispatch);
	}, [DisplayData, state.bookmarkedPosts]);
	return (
		<>
			<h1>Posts Listing Page</h1>
			<button
				onClick={() => {
					console.log(state.userInfo);
				}}
			>
				Check
			</button>
			<div>
				{FollowingUsersPost().length > 0 ? (
					<ul>
						{FollowingUsersPost().map((post) => (
							<PostsCard key={post._id} post={post} />
						))}
					</ul>
				) : (
					<h1>No posts to show</h1>
				)}
			</div>
		</>
	);
};
