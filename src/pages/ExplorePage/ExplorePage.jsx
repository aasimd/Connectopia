/** @format */

import React, { useEffect } from "react";
import { useContext } from "react";

import { PageContext } from "../../Contexts/PageContext";
import {
	fetchGetBookmarks,
	fetchPostsData
} from "../../FetchFunctions/fetchFunctions";
import { PostsCard } from "../../Components/PostsCard/PostsCard";
import { NavBar } from "../../Components/NavBar/NavBar";
import { SuggestedUsersCard } from "../../Components/FollowUsersCards/SuggestedUsersCard/SuggestedUsersCard";

export const ExplorePage = () => {
	const { state, dispatch, DisplayData } = useContext(PageContext);
	useEffect(() => {
		fetchPostsData(dispatch, state);
		fetchGetBookmarks(dispatch);
	}, [DisplayData, state.bookmarkedPosts]);
	return (
		<div className="three-sections-page">
			<nav className="left-column">
				<NavBar />
			</nav>
			<div className="middle-column">
				<div className="posts-container">
					{DisplayData.length > 0 ? (
						<ul>
							{DisplayData.map((post) => (
								<PostsCard key={post._id} post={post} styles={"post-card"} />
							))}
						</ul>
					) : (
						<h1>No posts to show</h1>
					)}
				</div>
			</div>
			<div>
				<SuggestedUsersCard className="right-column" />
			</div>
		</div>
	);
};
