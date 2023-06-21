/** @format */

import React, { useContext, useEffect } from "react";
import { PageContext } from "../../Contexts/PageContext";
import { PostsCard } from "../PostsCard/PostsCard";
import { fetchPostsData } from "../../FetchFunctions/fetchFunctions";

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
	return (
		<div>
			<div>
				<h1>User Profile</h1>
				<section>
					<div>
						<img src={profileAvatar} alt="profile" />
					</div>
					<div>
						<b>{fullName}</b>
						<p>@{username}</p>
						{state.userInfo?.username === username && (
							<button>Edit Profile</button>
						)}
					</div>
					<div>
						<p>{bio}</p>
						<a href={website}>{website}</a>
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
