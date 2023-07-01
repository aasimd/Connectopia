/** @format */

import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { PageContext } from "../../Contexts/PageContext";
import "./NavBar.css";
import { ProfileImageAndNames } from "../ProfileImageAndNames/ProfileImageAndNames";
const activeButtonStyles = ({ isActive }) =>
	isActive
		? {
				color: "#ff3b30",
				padding: "10px",
				fontWeight: "600",
				backgroundColor: "#cec5c5",
				borderRadius: "10px"
		  }
		: { padding: "5px", fontWeight: "200" };
const activeProfileButtonStyles = ({ isActive }) =>
	isActive
		? {
				padding: "10px",
				fontWeight: "600",
				backgroundColor: "#cec5c5",
				borderRadius: "10px"
		  }
		: { padding: "5px", fontWeight: "200" };

export const NavBar = () => {
	const { state, dispatch } = useContext(PageContext);
	const navigate = useNavigate();
	const { profileAvatar, fullName, username } = state?.userInfo;
	return (
		<div className="nav-bar-card">
			<header className="connectopia-name-header">
				<h1 onClick={() => navigate("/posts")}>
					<span>Connect</span>opia
				</h1>
			</header>
			<div>
				<div className="nav-bar-links">
					<NavLink style={activeButtonStyles} to="/posts">
						{/* <i className="fa-solid fa-house"></i>  */}
						Home
					</NavLink>
					<NavLink style={activeButtonStyles} to="/explore">
						{/* <i className="fa-solid fa-compass"></i>  */}
						Explore
					</NavLink>
					<NavLink style={activeButtonStyles} to="/bookmarks">
						{/* <i className="fa-solid fa-bookmark"></i>  */}
						Bookmarks
					</NavLink>
					<NavLink style={activeButtonStyles} to="/profile">
						{/* <i className="fa-solid fa-bookmark"></i>  */}
						Profile
					</NavLink>
					{/* <NavLink style={activeButtonStyles} to="/liked">
				Liked Posts
			</NavLink> */}
				</div>
				<div>
					<button
						className="logout-btn"
						onClick={() => {
							navigate("/");
							dispatch({ type: "setLogin", payload: false });
						}}
					>
						{/* <i className="fa-solid fa-right-from-bracket"></i> */}
						Logout
					</button>
				</div>
			</div>
			<div className="profile-nav-link">
				<NavLink to="/profile">
					<ProfileImageAndNames
						profileImage={profileAvatar}
						fullName={fullName}
						username={username}
					/>
				</NavLink>
			</div>
		</div>
	);
};
