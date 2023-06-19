/** @format */

import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { PageContext } from "../../Contexts/PageContext";

const activeButtonStyles = ({ isActive }) =>
	isActive
		? { color: "red", padding: "10px", fontWeight: "600" }
		: { color: "black", padding: "5px", fontWeight: "200" };
export const NavBar = () => {
	const { state, dispatch } = useContext(PageContext);
	const navigate = useNavigate();
	return (
		<div>
			<button
				onClick={() => {
					navigate("/");
					dispatch({ type: "setLogin", payload: false });
				}}
			>
				Logout
			</button>
			<NavLink style={activeButtonStyles} to="/posts">
				Home
			</NavLink>
			<NavLink style={activeButtonStyles} to="/explore">
				Explore
			</NavLink>
			<NavLink style={activeButtonStyles} to="/bookmarks">
				Bookmarks
			</NavLink>
			<NavLink style={activeButtonStyles} to="/liked">
				Liked Posts
			</NavLink>
			<NavLink style={activeButtonStyles} to="/profile">
				Profile
			</NavLink>
		</div>
	);
};
