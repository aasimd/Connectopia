/** @format */

import "./App.css";
import Mockman from "mockman-js";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { PageContext } from "./Contexts/PageContext";
import { PostsListingPage } from "./pages/PostsListingPage/PostsListingPage.jsx";
import { NavBar } from "./Components/NavBar/NavBar";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { BookmarksPage } from "./pages/BookmarksPage/BookmarksPage";
import { ExplorePage } from "./pages/ExplorePage/ExplorePage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { EditPostPage } from "./Components/EditPostPage/EditPostPage";
import { IndividualPostPage } from "./pages/IndividualPostPage/IndividualPostPage";
import { UserProfilePage } from "./pages/UserProfilePage/UserProfilePage";
import { SetupAccountPage } from "./pages/SetupAccountPage/SetupAccountPage";
import { RequiresAuth } from "./Components/RequiresAuth/RequiresAuth";
function App() {
	const { state, dispatch } = useContext(PageContext);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<LoginPage />} />
				<Route path="/mockman" element={<Mockman />} />
				<Route
					path="/posts"
					element={
						<RequiresAuth>
							<PostsListingPage />
						</RequiresAuth>
					}
				/>
				<Route
					path="/bookmarks"
					element={
						<RequiresAuth>
							<BookmarksPage />
						</RequiresAuth>
					}
				/>
				<Route
					path="/explore"
					element={
						<RequiresAuth>
							<ExplorePage />
						</RequiresAuth>
					}
				/>
				<Route
					path="/profile"
					element={
						<RequiresAuth>
							<ProfilePage />
						</RequiresAuth>
					}
				/>
				<Route
					path="/postEdit"
					element={
						<RequiresAuth>
							<EditPostPage post={state.selectPostEdit} />
						</RequiresAuth>
					}
				/>
				<Route
					path="/posts/:postId"
					element={
						<RequiresAuth>
							<IndividualPostPage />
						</RequiresAuth>
					}
				/>
				<Route
					path="/users/:userId"
					element={
						<RequiresAuth>
							<UserProfilePage />
						</RequiresAuth>
					}
				/>
				<Route
					path="/setupaccount"
					element={
						<RequiresAuth>
							<SetupAccountPage />
						</RequiresAuth>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
