/** @format */
import {
	fetchFollowUser,
	fetchUnfollowUser
} from "../FetchFunctions/fetchFunctions";

export const followUserHandler = (followusername, state) => {
	const followingUsers = state.userInfo?.following?.map(
		({ username }) => username
	);
	const findUserInFollowing = followingUsers.includes(followusername);
	return findUserInFollowing;
};
export const followHandler = (followusername, state, dispatch) => {
	const getUser = state.usersData?.find(
		(user) => user.username === followusername
	);
	fetchFollowUser(getUser._id, dispatch);
};
export const unfollowHandler = (followusername, state, dispatch) => {
	const getUser = state.usersData?.find(
		(user) => user.username === followusername
	);
	fetchUnfollowUser(getUser._id, dispatch);
};
