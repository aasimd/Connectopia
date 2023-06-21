/** @format */

import React, { useState, useContext, useEffect } from "react";
import "./EditPostPage.css";
import { PageContext } from "../../Contexts/PageContext";
import { fetchEditPost } from "../../FetchFunctions/fetchFunctions";
import { useNavigate, useParams } from "react-router";

export const EditPostPage = ({ post }) => {
	const { state, dispatch } = useContext(PageContext);
	const [tempPost, setTempPost] = useState({
		content: post.content,
		postImage: post.postImage
	});
	const navigate = useNavigate();
	const discardChangeHandler = () => {
		setTempPost(() => ({ content: post.content }));
		navigate("/posts");
	};
	const updatedPost = {
		...post,
		content: tempPost.content,
		postImage: tempPost.postImage
	};
	const saveChangeHandler = () => {
		fetchEditPost(post._id, dispatch, updatedPost);
		navigate("/posts");
	};
	const deletePostImageHandler = () => {
		setTempPost((prev) => ({ ...prev, postImage: "" }));
		console.log(tempPost);
	};
	const uploadImageHandler = (event) => {
		const image = URL.createObjectURL(event.target.files[0]);
		setTempPost((p) => ({ ...p, postImage: image }));
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
						{tempPost.postImage !== "" ? (
							<>
								<button onClick={() => deletePostImageHandler()}>
									delete image
								</button>
								<img alt={"uploaded-image"} src={tempPost.postImage} />
							</>
						) : (
							<input
								type="file"
								onChange={(event) => uploadImageHandler(event)}
							/>
						)}
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
