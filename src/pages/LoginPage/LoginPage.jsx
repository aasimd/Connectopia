/** @format */

import React, { useContext, useEffect, useState } from "react";
import { LoginCard } from "../../Components/LoginCard/LoginCard";
import { SignupCard } from "../../Components/SignupCard/SignupCard";
import logo from "../../images/ConnectopiaLandingPage.svg";
import "./LoginPage.css";
import { ProgressBar } from "react-loader-spinner";
import { PageContext } from "../../Contexts/PageContext";
export const LoginPage = () => {
	const [pageState, setPageState] = useState("login");
	const { state, dispatch } = useContext(PageContext);
	useEffect(() => {
		dispatch({ type: "changeIsLoading", payload: true });
		setTimeout(()=>{
			dispatch({ type: "changeIsLoading", payload: false });
		},1000)
	}, []);
	return (
		<div>
			{state?.isLoading && (
				<div
					className={
						state.isLoading ? "loader-spinner" : "loader-spinner-hidden"
					}
				>
					<ProgressBar
					height="100px"
					width="400px"
					ariaLabel="progress-bar-loading"
					wrapperStyle={{}}
					wrapperClass="progress-bar-wrapper"
					borderColor="#F4442E"
					barColor="#51E5FF"
				/>
				</div>
			)}
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
					<div className="landing-page-join-now">Join now</div>
					<div className="landing-page-logo-container">
						<img src={logo} alt="langing-page-logo" />
					</div>
				</div>
				<div className="login-signup-card">
					<section>
						{pageState === "login" && <LoginCard setPageState={setPageState} />}
					</section>
					<section>
						{pageState === "signup" && (
							<SignupCard setPageState={setPageState} />
						)}
					</section>
				</div>
			</div>
		</div>
	);
};
