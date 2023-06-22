/** @format */

import React, { useContext, useEffect } from "react";
import { PageContext } from "../../Contexts/PageContext";
import { PostsCard } from "../../Components/PostsCard/PostsCard";
import { fetchGetBookmarks } from "../../FetchFunctions/fetchFunctions";
import "../../Components/PostsCard/PostsCard.css";
import "./BookmarksPage.css";
export const BookmarksPage = () => {
	const { state, dispatch } = useContext(PageContext);
	useEffect(() => {
		fetchGetBookmarks(dispatch);
	}, []);

	return (
		<div className="bookmarks-page">
			{state.bookmarkedPosts.length > 0 ? (
				<ul>
					{[...state.postsData]
						.filter((post) => state.bookmarkedPosts.includes(post._id))
						.map((post) => (
							<li key={post._id}>
								<PostsCard post={post} styles={"post-card"}/>
							</li>
						))}
				</ul>
			) : (
				<h1>Your bookmarks are empty</h1>
			)}
		</div>
	);
};
