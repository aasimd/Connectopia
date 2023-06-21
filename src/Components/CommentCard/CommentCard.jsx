/** @format */

import React from "react";
import { ProfileImageAndNames } from "../ProfileImageAndNames/ProfileImageAndNames";
import "./CommentCard.css";

export const CommentCard = ({ comment }) => {
	return (
		<div className="comment-card">
			<ProfileImageAndNames
				fullName={comment.fullName}
				username={comment.username}
				profileImage={comment.profileAvatar}
			/>
			<div className="comment-content">{comment.comment}</div>
			<hr />
		</div>
	);
};
