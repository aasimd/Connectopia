/** @format */

import React, { useContext, useState } from "react";
import { PageContext } from "../../Contexts/PageContext";
import { fetchSignUpUser } from "../../FetchFunctions/fetchFunctions";
import { useNavigate } from "react-router";
import "./SignupCard.css";
import { backUpProfileAvatar } from "../../pages/SetupAccountPage/SetupAccountPage";
export const SignupCard = ({ setPageState }) => {
	const { state, dispatch } = useContext(PageContext);
	const [showPassword, setShowPassword] = useState(false);
	const [newUserInfo, setNewUserInfo] = useState({
		firstName: "",
		lastName: "",
		password: "",
		username: "",
		bio: "",
		website: "",
		profileAvatar: backUpProfileAvatar
	});
	const navigate = useNavigate();
	const formSubmitHandler = (event) => {
		event.preventDefault();
		fetchSignUpUser(state, dispatch, {
			fullName: `${newUserInfo?.firstName} ${newUserInfo?.lastName}`,
			password: newUserInfo?.password,
			username: newUserInfo?.username
		});
		setTimeout(() => {
			navigate("/setupaccount");
		}, 1000);
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
					<label>
						<input
							type="checkbox"
							name="show-password"
							onChange={() => setShowPassword(() => !showPassword)}
						/>
						Show Password
					</label>
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
