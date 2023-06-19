/** @format */

import React, { useContext, useEffect } from "react";
import { PageContext } from "../../Contexts/PageContext";
import { PostsCard } from "../../Components/PostsCard/PostsCard";
import { fetchGetBookmarks } from "../../FetchFunctions/fetchFunctions";

export const BookmarksPage = () => {
	const { state, dispatch } = useContext(PageContext);
	useEffect(() => {
		fetchGetBookmarks(dispatch);
	}, []);

	return (
		<div>
			{state.bookmarkedPosts.length > 0 ? (
				<ul>
					{[...state.postsData]
						.filter((post) => state.bookmarkedPosts.includes(post._id))
						.map((post) => (
							<PostsCard key={post._id} post={post} />
						))}
				</ul>
			) : (
				<h1>Your bookmarks are empty</h1>
			)}
		</div>
	);
};
