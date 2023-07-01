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

export const IndividualPostPage = () => {
	const { state, dispatch } = useContext(PageContext);
	const { selectedPost, userInfo } = state;
	const navigate = useNavigate();
	useEffect(() => {
		fetchPostsData(dispatch);
		fetchSelectedPost(selectedPost.id, dispatch, state);
	}, [state?.postsData]);

	return (
		<div className="three-sections-page">
			<nav className="left-column">
				<NavBar />
			</nav>
			<div>
				<div className="middle-column">
					<div className="posts-container individual-post-page">
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
	);
};
