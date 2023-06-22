/** @format */

import React, { useContext, useState } from "react";
import "./EditProfileCard.css";
import { fetchEditProfile } from "../../FetchFunctions/fetchFunctions";
import { PageContext } from "../../Contexts/PageContext";

export const EditProfileCard = ({ user, setEditProfile }) => {
	const { state, dispatch } = useContext(PageContext);
	const [newUserInfo, setNewUserInfo] = useState({
		...user,
		fullName: user?.fullName,
		bio: user?.bio,
		website: user?.website,
		profileAvatar: user?.profileAvatar
	});
	const uploadProfilePicHandler = (event) => {
		const image = URL.createObjectURL(event.target.files[0]);
		setNewUserInfo((p) => ({ ...p, profileAvatar: image }));
	};
	const discardChangesHandler = () => {
		setNewUserInfo(() => ({
			...user,
			fullName: user?.fullName,
			bio: user?.bio,
			website: user?.website,
			profileAvatar: user?.profileAvatar
		}));
		setEditProfile(false);
	};
	const saveChangesHandler = () => {
		fetchEditProfile(dispatch, newUserInfo);
		setEditProfile(false);
	};
	return (
		<div>
			<div>
				<label>Full Name:</label>
				<input
					type="text"
					placeholder="Type your new name here..."
					value={newUserInfo?.fullName}
					onChange={(event) =>
						setNewUserInfo((p) => ({ ...p, fullName: event.target.value }))
					}
				/>
			</div>
			<div>
				<label>Bio:</label>
				<input
					type="text"
					placeholder="Write something about yourself..."
					value={newUserInfo?.bio}
					onChange={(event) =>
						setNewUserInfo((p) => ({ ...p, bio: event.target.value }))
					}
				/>
			</div>
			<div>
				<label>Website:</label>
				<input
					type="text"
					placeholder="Where can people reach you?"
					value={newUserInfo?.website}
					onChange={(event) =>
						setNewUserInfo((p) => ({ ...p, website: event.target.value }))
					}
				/>
			</div>
			<div>
				<label>Profile Avatar</label>
				{newUserInfo?.profileAvatar.length !== 0 ? (
					<div className="profile-edit-profile-pic-container">
						<img src={newUserInfo?.profileAvatar} alt="profile-picture" />
						<button
							onClick={() =>
								setNewUserInfo((p) => ({ ...p, profileAvatar: "" }))
							}
						>
							remove
						</button>
					</div>
				) : (
					<input
						type="file"
						onChange={(event) => uploadProfilePicHandler(event)}
					/>
				)}
			</div>
			<div>
				<button onClick={() => discardChangesHandler()}>Discard Changes</button>
				<button onClick={() => saveChangesHandler()}>Save</button>
			</div>
		</div>
	);
};
