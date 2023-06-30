/** @format */

export const isNotLiked = (id,state) => {
	const findPost = state.postsData.find(
		(currentpost) => currentpost?._id === id
	);
	return (
		findPost?.likes?.likedBy.find(
			(user) => user?.username === state.userInfo?.username
		) === undefined
	);
};
