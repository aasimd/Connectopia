/** @format */

import React, { useState, useContext, useEffect } from "react";
import "./EditPostPage.css";
import { PageContext } from "../../Contexts/PageContext";
import { fetchEditPost } from "../../FetchFunctions/fetchFunctions";
import { useNavigate, useParams } from "react-router";
import { ProfileImageAndNames } from "../ProfileImageAndNames/ProfileImageAndNames";
import { NavBar } from "../NavBar/NavBar";
import { SuggestedUsersCard } from "../FollowUsersCards/SuggestedUsersCard/SuggestedUsersCard";

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
	};
	const uploadImageHandler = (event) => {
		const image = URL.createObjectURL(event.target.files[0]);
		setTempPost((p) => ({ ...p, postImage: image }));
	};
	return (
		<div className="three-sections-page">
			<nav className="left-column">
				<NavBar />
			</nav>
			<div className="middle-column">
				<div className="edit-post-card posts-container">
					<div className="back-button-section">
						<button onClick={() => navigate("/posts")}>
							<i className="fa-solid fa-arrow-left"></i>
						</button>{" "}
						Edit Post
					</div>
					<div>
						<ProfileImageAndNames
							fullName={post.fullName}
							username={post.username}
							profileImage={post.profileAvatar}
						/>
					</div>
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
								<div className="edit-image-container">
									<div className="delete-button-for-create-post">
										<button onClick={() => deletePostImageHandler()}>
											<i className="fa-sharp fa-solid fa-circle-xmark"></i>
										</button>
									</div>
									<img alt={"uploaded-image"} src={tempPost.postImage} />
								</div>
							) : (
								<input
									type="file"
									onChange={(event) => uploadImageHandler(event)}
								/>
							)}
						</div>
					</div>
					<div className="save-discard-buttons">
						<button onClick={() => discardChangeHandler()}>Discard</button>
						<button onClick={() => saveChangeHandler()}>Save</button>
					</div>
				</div>
			</div>
			<div>
				<SuggestedUsersCard className="right-column" />
			</div>
		</div>
	);
};
