/** @format */

import React, { useContext, useEffect } from "react";
import { PageContext } from "../../Contexts/PageContext";
import { PostsCard } from "../../Components/PostsCard/PostsCard";
import { ProfileCard } from "../../Components/ProfileCard/ProfileCard";
import { fetchUsersList } from "../../FetchFunctions/fetchFunctions";
import { NavBar } from "../../Components/NavBar/NavBar";
import { SuggestedUsersCard } from "../../Components/FollowUsersCards/SuggestedUsersCard/SuggestedUsersCard";
import { ProgressBar } from "react-loader-spinner";
import { NavBarSmallDisplays } from "../../Components/NavBarSmallDisplays/NavBarSmallDisplays";

export const ProfilePage = () => {
	const { state, dispatch, FollowingUsersPost } = useContext(PageContext);
	useEffect(() => {
		fetchUsersList(dispatch);
	}, [state.usersData]);
	useEffect(() => {
		dispatch({ type: "changeIsLoading", payload: true });
		setTimeout(() => {
			dispatch({ type: "changeIsLoading", payload: false });
		}, 500);
	}, []);
	return (
		<div>
			{state?.isLoading && (
				<div
					className={
						state.isLoading ? "loader-spinner" : "loader-spinner-hidden"
					}
				>
					<ProgressBar
						height="100px"
						width="400px"
						ariaLabel="progress-bar-loading"
						wrapperStyle={{}}
						wrapperClass="progress-bar-wrapper"
						borderColor="#F4442E"
						barColor="#51E5FF"
					/>
				</div>
			)}
			<div className="three-sections-page">
				<nav className="left-column">
					<NavBar />
				</nav>

				<div className="middle-column">
					<div className="posts-container">
						<ProfileCard userProfile={state.userInfo} />
					</div>
					
				</div><footer className="nav-for-small-displays">
						<NavBarSmallDisplays />
					</footer>
				<div>
					<SuggestedUsersCard className="right-column" />
				</div>
			</div>
		</div>
	);
};
