/** @format */

import React, { useContext, useState } from "react";
import {
	fetchLoginUser,
	fetchPostsData
} from "../../FetchFunctions/fetchFunctions";
import { PageContext } from "../../Contexts/PageContext";
import { useNavigate } from "react-router";

export const LoginCard = ({ setPageState }) => {
	const { state, dispatch } = useContext(PageContext);
	const [showPassword, setShowPassword] = useState(false);
	const [loginData, setLoginData] = useState({
		username: "",
		password: ""
	});
	const navigate = useNavigate();
	const userNameHandler = (event) => {
		setLoginData((prev) => ({ ...prev, username: event.target.value }));
	};
	const passwordHandler = (event) => {
		setLoginData((prev) => ({ ...prev, password: event.target.value }));
	};
	const submitHandler = (e) => {
		e.preventDefault();
		fetchLoginUser(state, dispatch, loginData);
		dispatch({ type: "setLogin", payload: true });
		fetchPostsData(state, dispatch);
		navigate("/posts");
	};
	const useGuestCredsHandler = () => {
		setLoginData((prev) => ({
			...prev,
			username: "aasimd01",
			password: "aasimd123"
		}));
	};
	return (
		<div>
			<h1>Login</h1>
			<form>
				<label>
					Username: {"  "}
					<input
						type="text"
						name="username"
						onChange={(event) => userNameHandler(event)}
						value={loginData.username}
						required
					/>
				</label>
				<br />
				<label>
					Password: {"  "}
					<input
						type={showPassword ? "text" : "password"}
						name="password"
						onChange={(event) => passwordHandler(event)}
						value={loginData.password}
						required
					/>
				</label>
				<br />
				<label>
					<input
						type="checkbox"
						name="show-password"
						onChange={() => setShowPassword(() => !showPassword)}
					/>
					Show Password
				</label>
				<br />
				<input
					type="submit"
					value="Submit"
					onClick={(event) => submitHandler(event)}
				/>
			</form>
			<button onClick={useGuestCredsHandler}>Use Guest Credentials</button>
			<br />
			<button onClick={() => setPageState(() => "signup")}>
				Create a new Account
			</button>
		</div>
	);
};
