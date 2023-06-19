/** @format */

import React, { useState } from "react";
import { LoginCard } from "../../Components/LoginCard/LoginCard";
import { SignupCard } from "../../Components/SignupCard/SignupCard";

export const LoginPage = () => {
	const [pageState, setPageState] = useState("login");
	return (
		<>
			{pageState === "login" && (
				<LoginCard setPageState={setPageState} />
			)}
			{pageState === "signup" && (
				<SignupCard setPageState={setPageState}/>
			)}
		</>
	);
};
