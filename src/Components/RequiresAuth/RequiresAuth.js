/** @format */

import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { PageContext } from "../../Contexts/PageContext";
export const RequiresAuth = ({ children }) => {
	const { state } = useContext(PageContext);
	const { isLoggedIn } = state;
	const location = useLocation();
	return isLoggedIn ? children : <Navigate to="/" state={{ from: location }} />;
};
