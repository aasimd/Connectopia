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
import { ProfileImageAndNames } from "../ProfileImageAndNames/ProfileImageAndNames";
import { FollowersCard } from "../FollowersCard/FollowersCard";
import { FollowingCard } from "../FollowersCard/FollowingCard/FollowingCard";
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
	const [showFollowersCard, setShowFollowersCard] = useState(false);
	const [showFollowingCard, setShowFollowingCard] = useState(false);
	const { state, dispatch } = useContext(PageContext);
	const navigate = useNavigate();
	const postsByUserCount = state?.postsData?.reduce(
		(acc, curr) => (curr.username === username ? acc + 1 : acc),
		0
	);
	useEffect(() => {
		fetchPostsData(dispatch);
	}, [state.postsData]);
	return (
		<div
			className={
				showFollowersCard || showFollowingCard ? "profile-card-blur" : ""
			}
		>
			{showFollowersCard && (
				<div className="followers-card">
					<FollowersCard
						followers={followers}
						setShowFollowersCard={setShowFollowersCard}
					/>
				</div>
			)}
			{showFollowingCard && (
				<div className="following-card">
					<FollowingCard
						following={following}
						setShowFollowingCard={setShowFollowingCard}
					/>
				</div>
			)}
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
								<>
									<button onClick={() => navigate("/setupaccount")}>
										Edit Profile
									</button>
									<button
										style={{
											backgroundColor: "white",
											border: "2px solid #ff3b30",
											color: "#ff3b30"
										}}
										onClick={() => {
											navigate("/");
											dispatch({ type: "setLogin", payload: false });
										}}
									>
										Logout
									</button>
								</>
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
					<div className="user-followers-following-post-display">
						<ul>
							<li>
								<b
									onClick={() => {
										setShowFollowersCard(true);
										setShowFollowingCard(false);
									}}
								>
									{followers.length} Followers
								</b>
							</li>
							<li>
								<b
									onClick={() => {
										setShowFollowingCard(true);
										setShowFollowersCard(false);
									}}
								>
									{following.length} Following
								</b>
							</li>
							<li>
								<b>
									{postsByUserCount} {postsByUserCount > 1 ? "Posts" : "Post"}
								</b>
							</li>
						</ul>
					</div>
				</section>
				<section>
					<div>
						<h1 style={{ padding: "10px 0 20px 0" }}>
							{state?.userInfo?.username === userProfile?.username
								? "Your "
								: "User's "}
							Posts
						</h1>
						<ul>
							{state.postsData.filter((post) => post.username === username)
								.length > 0 ? (
								<ul style={{ paddingBottom: "4rem" }}>
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
