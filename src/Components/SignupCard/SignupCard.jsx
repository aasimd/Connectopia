/** @format */

import React, { useContext, useState } from "react";
import { PageContext } from "../../Contexts/PageContext";
import { fetchSignUpUser } from "../../FetchFunctions/fetchFunctions";
import { useNavigate } from "react-router";
import "./SignupCard.css";
import { backUpProfileAvatar } from "../../pages/SetupAccountPage/SetupAccountPage";
export const SignupCard = ({ setPageState }) => {
	const { state, dispatch } = useContext(PageContext);
	const [signUpError, setSignUpError] = useState(false);
	const [showUserAlreadyExistsError, setShowUserAlreadyExistsError] =
		useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [newUserInfo, setNewUserInfo] = useState({
		firstName: "",
		lastName: "",
		password: "",
		confirmPassword: "",
		username: "",
		bio: "",
		website: "",
		profileAvatar: backUpProfileAvatar
	});
	const navigate = useNavigate();
	const formSubmitHandler = async (event) => {
		event.preventDefault();
		if (newUserInfo?.confirmPassword === newUserInfo?.password) {
			const response = await fetchSignUpUser(state, dispatch, {
				fullName: `${newUserInfo?.firstName} ${newUserInfo?.lastName}`,
				password: newUserInfo?.password,
				username: newUserInfo?.username
			});
			if (response) {
				dispatch({ type: "setLogin", payload: true });
				navigate("/setupaccount");
			} else {
				setShowUserAlreadyExistsError(() => true);
			}
		} else {
			setSignUpError(() => true);
		}
	};
	return (
		<div className="signup-card">
			<h1>Signup</h1>
			<form onSubmit={(event) => formSubmitHandler(event)}>
				<div>
					<label>First name:</label>
					<input
						type="text"
						name="firstname"
						value={newUserInfo?.firstName}
						required
						onChange={(event) =>
							setNewUserInfo((p) => ({ ...p, firstName: event.target.value }))
						}
					/>
				</div>
				<div>
					<label>Last name:</label>
					<input
						type="text"
						name="lastname"
						value={newUserInfo?.lastName}
						onChange={(event) =>
							setNewUserInfo((p) => ({ ...p, lastName: event.target.value }))
						}
					/>
				</div>
				<div>
					<label>Username: </label>
					{showUserAlreadyExistsError && (
						<b className="login-error-message">
							<i className="fa-solid fa-xmark"></i> Username Already Exists
						</b>
					)}
					{"  "}
					<input
						type="text"
						name="username"
						required
						value={newUserInfo?.username}
						onChange={(event) =>
							setNewUserInfo((p) => ({ ...p, username: event.target.value }))
						}
					/>
				</div>
				{/*<div>
				  <label>
					Email: {"  "}
					<input type="email" name="email" />
				  </label>
				</div> */}
				<div>
					<label>Password:</label>
					<input
						type={showPassword ? "text" : "password"}
						name="password"
						required
						value={newUserInfo?.password}
						onChange={(event) =>
							setNewUserInfo((p) => ({ ...p, password: event.target.value }))
						}
						style={{ color: "#ff3b30", fontStyle: "italic" }}
					/>
				</div>
				<div>
					<label>Confirm Password:</label>
					<input
						type={"text"}
						name="password"
						required
						value={newUserInfo?.confirmPassword}
						onChange={(event) =>
							setNewUserInfo((p) => ({
								...p,
								confirmPassword: event.target.value
							}))
						}
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
					{signUpError && (
						<b className="login-error-message">
							<i className="fa-solid fa-xmark"></i> Passwords Don't Match
						</b>
					)}
				</div>
				<div>
					<input type="submit" value="Submit" />
				</div>
			</form>
			{/* <button>Use Random Credentials</button> */}
			{/* <br /> */}
			<button onClick={() => setPageState(() => "login")}>
				Already have an Account?
			</button>
		</div>
	);
};
