/** @format */

import React, { useContext } from "react";
import { ProfileCard } from "../../Components/ProfileCard/ProfileCard";
import { PageContext } from "../../Contexts/PageContext";
import { NavBar } from "../../Components/NavBar/NavBar";
import { SuggestedUsersCard } from "../../Components/FollowUsersCards/SuggestedUsersCard/SuggestedUsersCard";
import { NavBarSmallDisplays } from "../../Components/NavBarSmallDisplays/NavBarSmallDisplays.jsx";
import { useNavigate } from "react-router";
export const UserProfilePage = () => {
	const { state, dispatch } = useContext(PageContext);
	const navigate = useNavigate();
	return (
		<div className="three-sections-page">
			<nav className="left-column">
				<NavBar />
			</nav>
			<div className="middle-column">
				<div className="connectopia-header-for-small-displays">
					<header className="connectopia-name-header">
						<h1 onClick={() => navigate("/posts")}>
							<span>Connect</span>opia
						</h1>
					</header>
				</div>
				<div className="posts-container">
					<ProfileCard userProfile={state?.selectedUserProfile} />;
				</div>
			</div>
			<div>
				<SuggestedUsersCard className="right-column" />
			</div>
			<footer className="nav-for-small-displays">
				<NavBarSmallDisplays />
			</footer>
		</div>
	);
};
