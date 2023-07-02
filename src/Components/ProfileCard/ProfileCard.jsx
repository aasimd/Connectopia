/** @format */

import React, { useContext, useEffect, useState } from "react";
import { PageContext } from "../../Contexts/PageContext";
import { PostsCard } from "../PostsCard/PostsCard";
import { fetchPostsData } from "../../FetchFunctions/fetchFunctions";
import { EditProfileCard } from "../EditProfileCard/EditProfileCard";
import "./ProfileCard.css";
import { useNavigate } from "react-router";
import {
	followHandler,
	followUserHandler,
	unfollowHandler
} from "../../Functions/followUserHandler";
export const ProfileCard = ({ userProfile }) => {
	const {
		username,
		fullName,
		_id,
		bio,
		website,
		profileAvatar,
		following,
		followers
	} = userProfile;
	const { state, dispatch } = useContext(PageContext);
	const [editProfile, setEditProfile] = useState(false);
	const navigate = useNavigate();
	useEffect(() => {
		fetchPostsData(dispatch);
	}, [state.postsData]);
	return (
		<div>
			{/* <div>
				{editProfile && (
					<EditProfileCard user={userProfile} setEditProfile={setEditProfile} />
				)}
			</div> */}
			<div>
				<h1 className="page-heading-name ">
					{state?.userInfo?.username === userProfile?.username
						? "Your "
						: "User "}
					Profile
				</h1>
			</div>
			<div>
				<section className="profile-info-section">
					<div className="profile-page-profile-picture-container">
						<img src={profileAvatar} alt="profile" />
					</div>
					<div className="profile-info-card">
						<div>
							<b className="profile-fullname">{fullName}</b>
							<p className="profile-username">@{username}</p>
						</div>
						<div>
							<p className="profile-bio">{bio}</p>
							<a className="profile-website" href={website}>
								<i style={{ color: "green" }} className="fa-solid fa-globe"></i>{" "}
								{website}
							</a>
						</div>
						<div className="edit-profile-button">
							{state.userInfo?.username === username ? (
								<button onClick={() => navigate("/setupaccount")}>
									Edit Profile
								</button>
							) : (
								<div className="follow-btn">
									{state?.userInfo?.username !== username &&
										(!followUserHandler(username, state) ? (
											<button
												onClick={() => followHandler(username, state, dispatch)}
											>
												Follow
											</button>
										) : (
											<button
												onClick={() =>
													unfollowHandler(username, state, dispatch)
												}
											>
												Unfollow
											</button>
										))}
								</div>
							)}
						</div>
					</div>
				</section>
				<section>
					<div>
						<h1>
							{state?.userInfo?.username === userProfile?.username
								? "Your "
								: "User "}
							Posts
						</h1>
						<ul>
							{state.postsData.filter((post) => post.username === username)
								.length > 0 ? (
								<ul>
									{state.postsData
										.filter((post) => post.username === username)
										.map((post) => (
											<PostsCard
												key={post._id}
												post={post}
												styles={"post-card"}
											/>
										))}
								</ul>
							) : (
								<div className="empty-bookmarks-text">
									<h2>No posts to show.</h2>
								</div>
							)}
						</ul>
					</div>
				</section>
			</div>
		</div>
	);
};
