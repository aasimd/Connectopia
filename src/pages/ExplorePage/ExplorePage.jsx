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

export const ExplorePage = () => {
	const { state, dispatch, DisplayData } = useContext(PageContext);
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
	);
};
