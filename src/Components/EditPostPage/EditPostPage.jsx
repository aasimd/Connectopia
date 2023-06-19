/** @format */

import React, { useState, useContext, useEffect } from "react";
import "./EditPostPage.css";
import { PageContext } from "../../Contexts/PageContext";
import { fetchEditPost } from "../../FetchFunctions/fetchFunctions";
import { useNavigate, useParams } from "react-router";

export const EditPostPage = ({ post }) => {
	const { state, dispatch } = useContext(PageContext);
	const [tempPost, setTempPost] = useState({ content: post.content });
	const navigate = useNavigate();
	const discardChangeHandler = () => {
		setTempPost(() => ({ content: post.content }));
		navigate("/posts");
	};
	const updatedPost = { ...post, content: tempPost.content };
	const saveChangeHandler = () => {
		fetchEditPost(post._id, dispatch, updatedPost);
		navigate("/posts");
	};
	return (
		<div>
			<div className="edit-post-card">
				{/* <div>
				<img src={post.profileAvatar} alt="profile" />
			</div> */}
				<div>
					<textarea
						onChange={(e) =>
							setTempPost(() => ({ ...tempPost, content: e.target.value }))
						}
						placeholder="type something..."
						value={tempPost.content}
					/>
					<div>
						{post.postImage && <img alt={post.content} src={post.postImage} />}
					</div>
				</div>
				<div>
					<button onClick={() => discardChangeHandler()}>Discard</button>
					<button onClick={() => saveChangeHandler()}>Save</button>
				</div>
			</div>
		</div>
	);
};
