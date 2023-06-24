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

export const IndividualPostPage = () => {
	const { state, dispatch } = useContext(PageContext);
	const { selectedPost, userInfo } = state;
	useEffect(() => {
		fetchPostsData(dispatch);
		fetchSelectedPost(selectedPost.id, dispatch, state);
	}, [state?.postsData]);

	return (
		<div className="individual-post-page">
			<nav>
				<NavBar />
			</nav>
			<div>
				<div>
					<PostsCard post={selectedPost} styles={"individual-post"} />
				</div>
				<hr />
				{/* <div>
					<NewCommentCard profileAvatar={userInfo?.profileAvatar} />
				</div> 
				<hr />*/}
				<div>
					<ul>
						{selectedPost?.comments?.map((comment) => (
							<li key={comment._id} className="comment-card">
								<CommentCard comment={comment} />
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};
