/** @format */

import React, { useContext, useState } from "react";
import { ProfileAvatars } from "./ProfileAvatars";
import "./SetupAccountPage.css";
import { PageContext } from "../../Contexts/PageContext";
import { fetchEditProfile } from "../../FetchFunctions/fetchFunctions";
import { useNavigate } from "react-router";
export const backUpProfileAvatar =
	"https://pro2-bar-s3-cdn-cf2.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/351efdd5c9879db23df33bde_rw_600.png?h=e1e19e4f0eb5c66ca9eceb0e9438b2ca";

export const SetupAccountPage = () => {
	const [newUserProfileData, setNewUserProfileData] = useState({
		bio: "",
		website: "",
		profileAvatar: backUpProfileAvatar
	});
	const { state, dispatch } = useContext(PageContext);
	const uploadProfileAvatarHandler = (event) => {
		const image = URL.createObjectURL(event.target.files[0]);
		setNewUserProfileData((p) => ({ ...p, profileAvatar: image }));
	};
	const navigate = useNavigate();
	const submitFormHandler = (event) => {
		event.preventDefault();
		const userData = {
			...state.userInfo,
			profileAvatar: newUserProfileData.profileAvatar,
			bio: newUserProfileData.bio,
			website: newUserProfileData.website
		};
		fetchEditProfile(dispatch, userData);
		setTimeout(() => {
			navigate("/posts");
		}, 1000);
	};
	return (
		<div className="setup-page">
			<div className="setup-profile-page">
				<header className="connectopia-name-header">
					<h1>
						<span>Connect</span>opia
					</h1>
				</header>
				<div>
					<h2>Welcome! Let's setup your profile</h2>
				</div>
				<div className="setup-profile-form">
					<form onSubmit={(event) => submitFormHandler(event)}>
						<div>
							<label>Bio:</label>
							<textarea
								placeholder="Tell us something about yourself"
								value={newUserProfileData?.bio}
								onChange={(event) =>
									setNewUserProfileData((p) => ({
										...p,
										bio: event.target.value
									}))
								}
							/>
						</div>
						<div>
							<label>Website:</label>
							<br />
							<input
								type="text"
								placeholder="Where can people reach you?"
								value={newUserProfileData?.website}
								onChange={(event) =>
									setNewUserProfileData((p) => ({
										...p,
										website: event.target.value
									}))
								}
							/>
						</div>
						<div>
							<div>
								<label>Your Profile Avatar:</label>
								<div className="profile-container-layer-2">
									<div className="profile-avatar-preview-container">
										{newUserProfileData?.profileAvatar !== "" && (
											<img
												src={newUserProfileData?.profileAvatar}
												alt="profile-picture"
											/>
										)}
									</div>
								</div>
								<div className="select-profile-avatar">
									<h3>Select your profile avatar or Upload your own</h3>
									<input
										type="file"
										accept="image/*"
										onChange={(event) => uploadProfileAvatarHandler(event)}
									/>
									<ul className="demo-profile-avatars-list">
										{ProfileAvatars.map((pic) => (
											<li>
												<img
													src={pic}
													alt={"profile-avatar"}
													onClick={() =>
														setNewUserProfileData((p) => ({
															...p,
															profileAvatar: pic
														}))
													}
												/>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
						<div>
							<input type="submit" />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
