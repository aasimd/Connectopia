/** @format */
import { v4 as uuid } from "uuid";
import { formatDate } from "../backend/utils/authUtils";
import React, { createContext, useEffect, useReducer } from "react";
import { reducerFunction } from "../ReducerFunction/reducerFunction";
import { fetchUsersList } from "../FetchFunctions/fetchFunctions";

export const PageContext = createContext();
export const PageContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducerFunction, {
		postsData: [],
		userInfo: {
			_id: uuid(),
			fullName: "Aasim Dongarkar",
			username: "aasimd01",
			password: "aasimd123",
			bio: "Hey there, Aasim here. I'm aspired to be a Webdeveloper at NeoGcamp.",
			website: "https://github.com/aasimd",
			profileAvatar:
				"https://m.economictimes.com/thumb/height-450,width-600,imgsize-31396,msid-89912757/the-batman-review.jpg",
			createdAt: formatDate(),
			updatedAt: formatDate(),
			bookmarks: [],
			following: [
				{
					_id: uuid(),
					fullName: "John Doe",
					username: "johndoe",
					profileAvatar: "https://picsum.photos/70/70"
				},
				{
					_id: uuid(),
					username: "moonknight",
					fullName: "Saad Mukadam",
					profileAvatar:
						"https://assets-prd.ignimgs.com/2022/03/17/whythemcusmoonknightisverydifferentfromthecomics36190303moonknightthumb-1642630606707-1647532268585.jpg"
				}
			],
			followers: [
				{
					_id: uuid(),
					fullName: "John Doe",
					username: "johndoe",
					profileAvatar: "https://picsum.photos/70/70"
				},
				{
					_id: uuid(),
					username: "moonknight",
					fullName: "Saad Mukadam",
					profileAvatar:
						"https://assets-prd.ignimgs.com/2022/03/17/whythemcusmoonknightisverydifferentfromthecomics36190303moonknightthumb-1642630606707-1647532268585.jpg"
				},
				{
					_id: uuid(),
					fullName: "Faiz Hodekar",
					username: "faizzz01",
					profileAvatar:
						"https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/11/2022_11$largeimg_592641370.jpg"
				}
			]
		},
		isLoggedIn: true,
		bookmarkedPosts: [],
		usersData: [],
		selectPostEdit: {},
		selectedPost: {}
	});
	const DisplayData = state.postsData;
	const FollowingUsersPost = () => {
		const followingUsers =
			state.userInfo?.following !== undefined
				? [
						...state.userInfo?.following?.map(({ username }) => username),
						state.userInfo?.username
				  ]
				: [state.userInfo?.username];
		const followingUsersPosts = state.postsData?.filter((post) =>
			followingUsers.includes(post?.username)
		);
		return followingUsersPosts;
	};
	useEffect(() => {
		fetchUsersList(dispatch);
	}, []);
	return (
		<PageContext.Provider
			value={{
				state,
				dispatch,
				DisplayData,
				FollowingUsersPost
			}}
		>
			{children}
		</PageContext.Provider>
	);
};
