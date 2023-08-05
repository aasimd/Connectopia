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
import { NavBar } from "../../Components/NavBar/NavBar";
import { SuggestedUsersCard } from "../../Components/FollowUsersCards/SuggestedUsersCard/SuggestedUsersCard";
import { ProgressBar } from "react-loader-spinner";
import { NavBarSmallDisplays } from "../../Components/NavBarSmallDisplays/NavBarSmallDisplays";

export const ExplorePage = () => {
	const { state, dispatch, DisplayData } = useContext(PageContext);
	useEffect(() => {
		dispatch({ type: "changeIsLoading", payload: true });
		setTimeout(() => {
			dispatch({ type: "changeIsLoading", payload: false });
		}, 500);
	}, []);
	useEffect(() => {
		fetchPostsData(dispatch, state);
		fetchUsersList(dispatch);
		fetchGetBookmarks(dispatch);
	}, [state.bookmarkedPosts, state.postsData]);

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
			<div className="three-sections-page">
				<nav className="left-column">
					<NavBar />
				</nav>
				<div className="middle-column">
					<h1 className="page-heading-name ">Explore</h1>
					<div className="posts-container">
						{state?.postsData?.length > 0 ? (
							<ul style={{ paddingBottom: "4rem" }}>
								{state?.postsData
									?.map((post) => (
										<PostsCard
											key={post._id}
											post={post}
											styles={"post-card"}
										/>
									))
									?.reverse()}
							</ul>
						) : (
							<div className="empty-bookmarks-text">
								<h2>No posts to show.</h2>
							</div>
						)}
					</div>
				</div>
				<footer className="nav-for-small-displays">
					<NavBarSmallDisplays />
				</footer>
				<div>
					<SuggestedUsersCard className="right-column" />
				</div>
			</div>
		</div>
	);
};
