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
import { CreatePostCard } from "../../Components/CreatePostCard/CreatePostCard";
import { NavBar } from "../../Components/NavBar/NavBar";

export const PostsListingPage = () => {
	const { state, dispatch, DisplayData, FollowingUsersPost } =
		useContext(PageContext);
	useEffect(() => {
		fetchPostsData(dispatch, state);
		fetchGetBookmarks(dispatch);
	}, [DisplayData, state.bookmarkedPosts]);

	return (
		<div>
			<nav>
				<NavBar />
			</nav>
			<div>
				<h1>Posts Listing Page</h1>
				<button
					onClick={() => {
						console.log(state.postsData);
					}}
				>
					Check
				</button>
				<div>
					<CreatePostCard />
				</div>
				<div>
					{FollowingUsersPost().length > 0 ? (
						<ul>
							{[...FollowingUsersPost()]
								.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
								.map((post) => (
									<li key={post.id}>
										<PostsCard
											post={post}
											styles={"post-card"}
											showDate={true}
										/>
									</li>
								))}
						</ul>
					) : (
						<h1>No posts to show</h1>
					)}
				</div>
			</div>
		</div>
	);
};
