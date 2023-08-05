/** @format */

import React, { useContext, useEffect } from "react";
import { PageContext } from "../../Contexts/PageContext";
import { PostsCard } from "../../Components/PostsCard/PostsCard";
import { ProfileImageAndNames } from "../../Components/ProfileImageAndNames/ProfileImageAndNames";
import "./IndividualPostPage.css";
import { CommentCard } from "../../Components/CommentCard/CommentCard";
import {
	fetchPostsData,
	fetchSelectedPost
} from "../../FetchFunctions/fetchFunctions";
import { NavBar } from "../../Components/NavBar/NavBar";
import { SuggestedUsersCard } from "../../Components/FollowUsersCards/SuggestedUsersCard/SuggestedUsersCard";
import { useNavigate } from "react-router";
import { ProgressBar } from "react-loader-spinner";

export const IndividualPostPage = () => {
	const { state, dispatch } = useContext(PageContext);
	const { selectedPost, userInfo } = state;
	const navigate = useNavigate();
	useEffect(() => {
		fetchPostsData(dispatch);
		fetchSelectedPost(selectedPost.id, dispatch, state);
	}, [state?.postsData]);

	useEffect(() => {
		dispatch({ type: "changeIsLoading", payload: true });
		setTimeout(() => {
			dispatch({ type: "changeIsLoading", payload: false });
		}, []);
	}, []);
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
				<div>
					<div className="middle-column">
					<div className="connectopia-header-for-small-displays">
						<header className="connectopia-name-header">
							<h1 onClick={() => navigate("/posts")}>
								<span>Connect</span>opia
							</h1>
						</header>
					</div><div className="posts-container individual-post-page">
							<div className="back-button-section">
								<button onClick={() => navigate("/posts")}>
									<i className="fa-solid fa-arrow-left"></i>
								</button>{" "}
								Post
							</div>
							<PostsCard post={selectedPost} styles={"individual-post"} />
						</div>
					</div>
					{/* <hr /> */}
					{/* <div>
					<NewCommentCard profileAvatar={userInfo?.profileAvatar} />
				</div> 
				<hr />*/}
					{/* <div>
					<ul>
						{selectedPost?.comments?.map((comment) => (
							<li key={comment._id} className="comment-card">
								<CommentCard comment={comment} />
							</li>
						))}
					</ul>
				</div> */}
				</div>
				<div>
					<SuggestedUsersCard className="right-column" />
				</div>
			</div>
		</div>
	);
};
