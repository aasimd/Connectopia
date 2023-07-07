/** @format */

import React, { useContext, useState } from "react";
import { PageContext } from "../../Contexts/PageContext";
import { ProfileImageAndNames } from "../ProfileImageAndNames/ProfileImageAndNames";
import "./CreatePostCard.css";
import { fetchCreateNewPost } from "../../FetchFunctions/fetchFunctions";
import { v4 as uuid } from "uuid";
import { formatDate } from "../../backend/utils/authUtils";
// import InputEmoji from "react-input-emoji";
// import { Picker } from "emoji-mart";
import data from "@emoji-mart/data";
// import Picker from "@emoji-mart/react";
import EmojiPicker from "emoji-picker-react";
// import "emoji-mart/css/emoji-mart.css";

export const CreatePostCard = () => {
	const [isPickerVisible, setIsPickerVisible] = useState(false);
	const [currentEmoji, setCurrentEmoji] = useState(null);
	const { state, dispatch } = useContext(PageContext);
	const { userInfo } = state;
	const [newPost, setNewPost] = useState({
		content: "",
		postImage: ""
	});
	const [input, setInput] = useState("");
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
		dispatch({ type: "changeIsLoading", payload: true });
		fetchCreateNewPost(dispatch, createNewPost);
		setChanged(() => false);
		setNewPost((p) => ({ ...p, postImage: "", content: "" }));
		setTimeout(() => {
			dispatch({ type: "changeIsLoading", payload: false });
		}, 1500);
	};
	const discardPostHandler = () => {
		setNewPost((p) => ({ ...p, postImage: "", content: "" }));
		setChanged(() => false);
	};
	// const addEmoji = (e) => {
	// 	let sym = e.unified.split("-");
	// 	let codesArray = [];
	// 	sym.forEach((el) => codesArray.push("0x" + el));
	// 	let emoji = String.fromCodePoint(...codesArray);
	// 	setInput(input + emoji);
	// };

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
					<>
						<div className="image-input-button">
							<button
								onClick={() =>
									document.querySelector(".image-input-field").click()
								}
							>
								<i class="fa-solid fa-image"></i>
							</button>
						</div>
						<div>
							<input
								accept="image/*"
								type="file"
								className="image-input-field"
								onChange={(event) => selectUploadImage(event)}
							/>
						</div>
					</>
				) : (
					<div className="upload-image-container">
						<div className="delete-button-for-create-post">
							<button onClick={() => deleteImageHandler()}>
								<i className="fa-sharp fa-solid fa-circle-xmark"></i>
							</button>
						</div>
						<img src={newPost?.postImage} alt="preview-image" />
					</div>
				)}
			</div>
			{/* <div>
				<button onClick={() => setIsPickerVisible(() => !isPickerVisible)}>
					Emoji
				</button>
			</div>
			<div>
				{isPickerVisible && (
					<Picker
						data={data}
						previewPosition={none}
						onEmojiSelect={(e) => {
							setCurrentEmoji(e.native);
							setIsPickerVisible(() => !isPickerVisible);
						}}
					/>
				)}
			</div> */}
			<div>
				{changed && (
					<div className="save-discard-buttons">
						<button onClick={() => discardPostHandler()}>Discard</button>
						<button onClick={() => savePostHandler()}>Save</button>
					</div>
				)}
			</div>
		</div>
	);
};
