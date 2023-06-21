/** @format */

import React, { useContext, useEffect } from "react";
import { PageContext } from "../../Contexts/PageContext";
import { PostsCard } from "../../Components/PostsCard/PostsCard";
import { ProfileImageAndNames } from "../../Components/ProfileImageAndNames/ProfileImageAndNames";
import "./IndividualPostPage.css";
import { CommentCard } from "../../Components/CommentCard/CommentCard";
import { NewCommentCard } from "../../Components/NewCommentCard/NewCommentCard";
import { fetchPostsData } from "../../FetchFunctions/fetchFunctions";

export const IndividualPostPage = () => {
	const { state, dispatch } = useContext(PageContext);
	const { selectedPost, userInfo } = state;
	useEffect(() => {
		fetchPostsData(dispatch);
	}, [state?.postsData]);
	return (
		<div className="individual-post-page">
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
