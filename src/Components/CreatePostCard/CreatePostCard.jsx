/** @format */

import React, { useContext, useState } from "react";
import { PageContext } from "../../Contexts/PageContext";
import { ProfileImageAndNames } from "../ProfileImageAndNames/ProfileImageAndNames";
import "./CreatePostCard.css";
import { fetchCreateNewPost } from "../../FetchFunctions/fetchFunctions";
import { v4 as uuid } from "uuid";
import { formatDate } from "../../backend/utils/authUtils";

export const CreatePostCard = () => {
	const { state, dispatch } = useContext(PageContext);
	const { userInfo } = state;
	const [newPost, setNewPost] = useState({
		content: "",
		postImage: ""
	});
	const [changed, setChanged] = useState(false);
	const selectUploadImage = (event) => {
		setChanged(() => true);
		const image = URL.createObjectURL(event.target.files[0]);
		setNewPost((p) => ({ ...p, postImage: image }));
	};
	const updateNewPostContent = (event) => {
		setChanged(() => true);
		setNewPost((p) => ({ ...p, content: event.target.value }));
	};
	const deleteImageHandler = () => {
		setNewPost((p) => ({ ...p, postImage: "" }));
	};
	
	const createNewPost = {
		content: newPost?.content,
		postImage: newPost?.postImage,
		_id: uuid(),
		username: userInfo?.username,
		fullName: userInfo?.fullName,
		profileAvatar: userInfo?.profileAvatar,
		createdAt: formatDate(),
		updatedAt: formatDate(),
		comments: [],
		likes: {
			likeCount: 0,
			likedBy: [],
			dislikedBy: []
		}
	};
	const savePostHandler = () => {
		fetchCreateNewPost(dispatch, createNewPost);
		setChanged(() => false);
		setNewPost((p) => ({ ...p, postImage: "", content: "" }));
	};
	const discardPostHandler = () => {
		setNewPost((p) => ({ ...p, postImage: "", content: "" }));
		setChanged(() => false);
	};

	return (
		<div className="create-new-post-card">
			<div>
				<ProfileImageAndNames
					fullName={userInfo?.fullName}
					username={userInfo?.username}
					profileImage={userInfo?.profileAvatar}
				/>
			</div>
			<div>
				<textarea
					placeholder="What's happening?"
					value={newPost?.content}
					onChange={(event) => updateNewPostContent(event)}
				/>
			</div>
			<div>
				{newPost?.postImage === "" ? (
					<input type="file" onChange={(event) => selectUploadImage(event)} />
				) : (
					<div className="upload-image-container">
						<button onClick={() => deleteImageHandler()}>Delete Image</button>
						<img src={newPost?.postImage} alt="preview-image" />
					</div>
				)}
			</div>
			<div>
				{changed && (
					<div>
						<button onClick={() => savePostHandler()}>Save</button>
						<button onClick={() => discardPostHandler()}>Discard</button>
					</div>
				)}
			</div>
		</div>
	);
};
