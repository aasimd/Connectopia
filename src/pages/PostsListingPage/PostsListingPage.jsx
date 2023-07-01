/** @format */

import React, { useEffect, useState } from "react";
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
import { SuggestedUsersCard } from "../../Components/FollowUsersCards/SuggestedUsersCard/SuggestedUsersCard";
import "./PostsListingPage.css";
import "../../App.css";
import { SortButtonsCard } from "../../Components/SortButtonsCard/SortButtonsCard";
export const PostsListingPage = () => {
	const {
		state,
		dispatch,
		DisplayData,
		FollowingUsersPost,
		suggestedUsers,
		followingUsers
	} = useContext(PageContext);
	
	

	useEffect(() => {
		fetchPostsData(dispatch, state);
		fetchUsersList(dispatch);
		fetchGetBookmarks(dispatch);
	}, [DisplayData, state.bookmarkedPosts, state.postsData]);

	return (
		<div className="home-page">
			<div className="three-sections-page">
				<nav className="left-column">
					<NavBar />
				</nav>
				<div className="middle-column">
					<div className="posts-container">
						<h1 className="page-heading-name ">Home</h1>
						<div>
							<CreatePostCard />
						</div>
						<div>
							<SortButtonsCard />
						</div>
						<div>
							{FollowingUsersPost().length > 0 ? (
								<ul>
									{[...FollowingUsersPost()].map((post) => (
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
				<div>
					<SuggestedUsersCard className="right-column" />
				</div>
			</div>
		</div>
	);
};
