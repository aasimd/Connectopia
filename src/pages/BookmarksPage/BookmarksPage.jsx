/** @format */

import React, { useContext, useEffect } from "react";
import { PageContext } from "../../Contexts/PageContext";
import { PostsCard } from "../../Components/PostsCard/PostsCard";
import { fetchGetBookmarks } from "../../FetchFunctions/fetchFunctions";
import "../../Components/PostsCard/PostsCard.css";
import "./BookmarksPage.css";
import { NavBar } from "../../Components/NavBar/NavBar";
import { SuggestedUsersCard } from "../../Components/FollowUsersCards/SuggestedUsersCard/SuggestedUsersCard";
import { ProgressBar } from "react-loader-spinner";
export const BookmarksPage = () => {
	const { state, dispatch } = useContext(PageContext);
	useEffect(() => {
		fetchGetBookmarks(dispatch);
	}, []);
	useEffect(() => {
		dispatch({ type: "changeIsLoading", payload: true });
		setTimeout(() => {
			dispatch({ type: "changeIsLoading", payload: false });
		}, []);
	}, []);

	return (
		// <div className="bookmarks-page">
		// 	<nav>
		// 		<NavBar />
		// 	</nav>

		// </div>
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
			<div className="three-sections-page">
				<nav className="left-column">
					<NavBar />
				</nav>
				<div className="middle-column">
					<h1 className="page-heading-name">Bookmarks</h1>
					<div className="posts-container bookmarks-page">
						{state.bookmarkedPosts.length > 0 ? (
							<ul>
								{[...state.postsData]
									.filter((post) => state.bookmarkedPosts.includes(post._id))
									.map((post) => (
										<li key={post._id}>
											<PostsCard post={post} styles={"post-card"} />
										</li>
									))}
							</ul>
						) : (
							<div className="empty-bookmarks-text">
								<h2>Your bookmarks are empty</h2>
							</div>
						)}
					</div>
				</div>
				<div>
					<SuggestedUsersCard className="right-column" />
				</div>
			</div>
		</div>
	);
};
