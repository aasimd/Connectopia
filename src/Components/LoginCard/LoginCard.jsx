/** @format */

import React, { useContext, useState } from "react";
import {
	fetchLoginUser,
	fetchPostsData
} from "../../FetchFunctions/fetchFunctions";
import { PageContext } from "../../Contexts/PageContext";
import { useNavigate } from "react-router";
import "./LoginCard.css";
export const LoginCard = ({ setPageState }) => {
	const { state, dispatch } = useContext(PageContext);
	const [showPassword, setShowPassword] = useState(false);
	const [showLoginError, setShowLoginError] = useState(false);
	const [loginData, setLoginData] = useState({
		username: "",
		password: ""
	});
	const navigate = useNavigate();
	const userNameHandler = (event) => {
		setLoginData((prev) => ({ ...prev, username: event.target.value }));
		setShowLoginError(() => false);
	};
	const passwordHandler = (event) => {
		setLoginData((prev) => ({ ...prev, password: event.target.value }));
		setShowLoginError(() => false);
	};
	const submitHandler = async (e) => {
		e.preventDefault();
		const response = await fetchLoginUser(state, dispatch, loginData);
		response ? navigate("/posts") : setShowLoginError(() => true);
	};
	const useGuestCredsHandler = () => {
		setLoginData((prev) => ({
			...prev,
			username: "aasimd01",
			password: "aasimd123"
		}));
	};
	return (
		<div className="login-card">
			<h1>Login</h1>
			<form onSubmit={(event) => submitHandler(event)}>
				<div>
					<label>Username: </label>
					<input
						type="text"
						name="username"
						onChange={(event) => userNameHandler(event)}
						value={loginData.username}
						required
					/>
				</div>
				<div>
					<label>Password: </label>
					<input
						type={showPassword ? "text" : "password"}
						name="password"
						onChange={(event) => passwordHandler(event)}
						value={loginData.password}
						required
						style={{ color: "#ff3b30", fontStyle: "italic" }}
					/>
				</div>

				<div>
					<label>
						<input
							type="checkbox"
							name="show-password"
							onChange={() => setShowPassword(() => !showPassword)}
						/>
						Show Password
					</label>
				</div><br/>
				{showLoginError && (
					<b className="login-error-message">
						<i className="fa-solid fa-xmark"></i> Wrong username or password entered
					</b>
				)}
				<div>
					<input type="submit" value="Submit" />
				</div>
			</form>
			<button onClick={useGuestCredsHandler}>Use Guest Credentials</button>
			<br />
			<button onClick={() => setPageState(() => "signup")}>
				New Here? Create a new Account...
			</button>
		</div>
	);
};
