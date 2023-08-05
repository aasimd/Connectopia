/** @format */

import { NavLink } from "react-router-dom";
import React from "react";
import "./NavBarSmallDisplays.css";

const activeButtonStyles = ({ isActive }) =>
	isActive
		? {
				color: "#ff3b30",
				// padding: "10px",
				fontWeight: "600",
				// backgroundColor: "#cec5c5",
				borderRadius: "10px"
		  }
		: { padding: "0px", fontWeight: "200" };

export const NavBarSmallDisplays = () => {
	return (
		<ul>
			<li>
				<NavLink style={activeButtonStyles} to="/posts" title="Home">
					<i className="fa-solid fa-house"></i>
				</NavLink>
			</li>
			<li>
				<NavLink style={activeButtonStyles} to="/explore" title="Explore">
					<i className="fa-solid fa-rocket"></i>
				</NavLink>
			</li>
			<li>
				<NavLink style={activeButtonStyles} to="/bookmarks" title="Bookmarks">
					<i className="fa-solid fa-bookmark"></i>
				</NavLink>
			</li>
			<li>
				<NavLink style={activeButtonStyles} to="/profile" title="User Profile">
					<i className="fa-solid fa-user"></i>
				</NavLink>
			</li>
		</ul>
	);
};
