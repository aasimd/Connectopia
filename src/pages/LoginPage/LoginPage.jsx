/** @format */

import React, { useState } from "react";
import { LoginCard } from "../../Components/LoginCard/LoginCard";
import { SignupCard } from "../../Components/SignupCard/SignupCard";
import logo from "../../images/ConnectopiaLandingPage.svg";
import "./LoginPage.css";
export const LoginPage = () => {
	const [pageState, setPageState] = useState("login");
	return (
		<div className="login-page">
			<div className="intro-card">
				<header className="connectopia-name-header">
					<h1>
						<span>Connect</span>opia
					</h1>
				</header>
				<section>
					<p>
						<span>follow</span> people around the globe
					</p>
					<p>
						<span>connect</span> with your friends
					</p>
					<p>
						<span>Share</span> What you thinking
					</p>
				</section>
				<div className="landing-page-logo-container">
					<img src={logo} alt="langing-page-logo" />
				</div>
				<div className="landing-page-join-now">Join now</div>
			</div>
			<div className="login-signup-card">
				<section>
					{pageState === "login" && <LoginCard setPageState={setPageState} />}
				</section>
				<section>
					{pageState === "signup" && <SignupCard setPageState={setPageState} />}
				</section>
			</div>
		</div>
	);
};
