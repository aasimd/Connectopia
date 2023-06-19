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

function App() {
	const { state, dispatch } = useContext(PageContext);

	return (
		<div className="App">
			<nav>
				<NavBar />
			</nav>
			<h1>Hello World</h1>
			<Routes>
				<Route path="/" element={<LoginPage />} />
				<Route path="/mockman" element={<Mockman />} />
				<Route path="/posts" element={<PostsListingPage />} />
				<Route path="/bookmarks" element={<BookmarksPage />} />
				<Route path="/explore" element={<ExplorePage />} />
				<Route path="/profile" element={<ProfilePage />} />
				<Route
					path="/postEdit"
					element={<EditPostPage post={state.selectPostEdit} />}
				/>
				<Route path="/post/:postId" element={<IndividualPostPage />} />
			</Routes>
		</div>
	);
}

export default App;
