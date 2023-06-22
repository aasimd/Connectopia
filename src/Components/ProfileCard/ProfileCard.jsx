/** @format */

import React, { useContext, useEffect, useState } from "react";
import { PageContext } from "../../Contexts/PageContext";
import { PostsCard } from "../PostsCard/PostsCard";
import { fetchPostsData } from "../../FetchFunctions/fetchFunctions";
import { EditProfileCard } from "../EditProfileCard/EditProfileCard";

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
	return (
		<div>
			<div>
				{editProfile && (
					<EditProfileCard user={userProfile} setEditProfile={setEditProfile} />
				)}
			</div>
			<div>
				<h1>User Profile</h1>
				<section>
					<div>
						<img src={profileAvatar} alt="profile" />
					</div>
					<div>
						<b>{fullName}</b>
						<p>@{username}</p>
					</div>
					<div>
						<p>{bio}</p>
						<a href={website}>{website}</a>
					</div>
					<div>
						{state.userInfo?.username === username && (
							<button onClick={() => setEditProfile(true)}>Edit Profile</button>
						)}
					</div>
				</section>
				<section>
					<div>
						<h1>Your Posts</h1>
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
								<h1>No Posts to Show</h1>
							)}
						</ul>
					</div>
				</section>
			</div>
		</div>
	);
};
