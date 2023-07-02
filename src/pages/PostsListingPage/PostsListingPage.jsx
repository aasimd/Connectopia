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
import { ProgressBar } from "react-loader-spinner";
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
		dispatch({ type: "changeIsLoading", payload: true });
		setTimeout(() => {
			dispatch({ type: "changeIsLoading", payload: false });
		}, 500);
	}, []);
	useEffect(() => {
		fetchPostsData(state, dispatch);
		fetchUsersList(dispatch);
		fetchGetBookmarks(dispatch);
	}, [DisplayData, state.bookmarkedPosts, state.postsData]);

	return (
		<div>
			{state?.isLoading && (
				<div
					className={
						state.isLoading ? "loader-spinner" : "loader-spinner-hidden"
					}
				>
					<ProgressBar
						height="100px"
						width="400px"
						ariaLabel="progress-bar-loading"
						wrapperStyle={{}}
						wrapperClass="progress-bar-wrapper"
						borderColor="#F4442E"
						barColor="#51E5FF"
					/>
				</div>
			)}
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
											<PostsCard
												key={post.id}
												post={post}
												styles={"post-card"}
												showDate={true}
											/>
										))}
									</ul>
								) : (
									<div className="empty-bookmarks-text">
										<h2>No posts to show.</h2>
									</div>
								)}
							</div>
						</div>
					</div>
					<div>
						<SuggestedUsersCard className="right-column" />
					</div>
				</div>
			</div>
		</div>
	);
};
