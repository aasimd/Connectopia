// /** @format */

// import React, { useContext, useEffect, useState } from "react";
// import { PageContext } from "../../Contexts/PageContext";
// import { v4 as uuid } from "uuid";
// import { formatDate } from "../../backend/utils/authUtils";
// import {
// 	fetchAddComment,
// 	getSelectedPost
// } from "../../FetchFunctions/fetchFunctions";

// export const NewCommentCard = ({ profileAvatar }) => {
// 	const { state, dispatch } = useContext(PageContext);
// 	const [selectedPost, setSelectedPost] = useState({});
// 	const [newComment, setNewComment] = useState("");
// 	const changeHandler = (e) => {
// 		setNewComment(() => e.target.value);
// 	};
// 	const postId = state?.selectedPost?._id;
// 	useEffect(() => {
// 		setSelectedPost(() => getSelectedPost(postId, dispatch));
// 	}, [state?.postsData]);
// 	const postCommentHandler = () => {
// 		fetchAddComment(postId, newComment, dispatch);
// 		console.log(state?.postsData);
// 	};
// 	return (
// 		<div>
// 			<div>
// 				<div className="post-card-profile-pic">
// 					<img src={profileAvatar} alt="user-profile" />
// 				</div>
// 				<input
// 					type="text"
// 					placeholder="Post Your Reply"
// 					value={newComment}
// 					onChange={(event) => changeHandler(event)}
// 				/>
// 				<button onClick={() => setNewComment("")}>Discard</button>
// 				<button onClick={() => postCommentHandler()}>Reply</button>
// 			</div>
// 		</div>
// 	);
// };
