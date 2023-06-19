/** @format */

import React, { useContext } from "react";
import { PageContext } from "../../Contexts/PageContext";

export const IndividualPostPage = () => {
	const { state, dispatch } = useContext(PageContext);
	const { content } = state.selectedPost;
	return (
		<div>
			<h1>IndividualPostPage</h1>
			<>{content}</>
		</div>
	);
};
