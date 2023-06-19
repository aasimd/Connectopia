/** @format */

import React, { useState } from "react";

export const SignupCard = ({ setPageState }) => {
	const [showPassword, setShowPassword] = useState(false);
	return (
		<div>
			<h1>Signup</h1>
			<form>
				<label>
					First name: {"  "}
					<input type="text" name="firstname" />
				</label>
				<br />
				<label>
					Last name: {"  "}
					<input type="text" name="lastname" />
				</label>
				<br />
				<label>
					Username: {"  "}
					<input type="text" name="username" />
				</label>
				<br />
				<label>
					Email: {"  "}
					<input type="email" name="email" />
				</label>
				<br />
				<label>
					Password: {"  "}
					<input type={showPassword ? "text" : "password"} name="password" />
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
				<input type="submit" value="Submit" />
			</form>
			<button>Use Random Credentials</button>
			<br />
			<button onClick={() => setPageState(() => "login")}>
				Already have an Account?
			</button>
		</div>
	);
};
