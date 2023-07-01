/** @format */

import React, { useContext, useState } from "react";
import { PageContext } from "../../Contexts/PageContext";
import "./SortButtonsCard.css";
export const SortButtonsCard = () => {
	const { state, dispatch } = useContext(PageContext);
	const [showSortOptions, setShowSortOptions] = useState(false);
	const selectOptionHandler = (event) => {
		dispatch({ type: "setSortType", payload: event.target.value });
	};
	return (
		<div className="sort-options-section">
			<div className="display-sort-type">{state?.sortType}</div>
			{showSortOptions && (
				<div className="sort-options-card">
					<div className="sort-inputs">
						Sort By: <br />
						<label>
							<input
								name="sort-type"
								onChange={(event) => selectOptionHandler(event)}
								type="radio"
								value="trending"
								checked={state?.sortType === "trending"}
							/>
							Trending <i className="fa-solid fa-fire-flame-curved"></i>
						</label>{" "}
						<br />
						<label>
							<input
								name="sort-type"
								onChange={(event) => selectOptionHandler(event)}
								type="radio"
								value="latest"
								checked={state?.sortType === "latest"}
							/>
							Latest <i className="fa-solid fa-caret-up"></i>
						</label>{" "}
						<br />
						<label>
							<input
								name="sort-type"
								onChange={(event) => selectOptionHandler(event)}
								type="radio"
								value="oldest"
								checked={state?.sortType === "oldest"}
							/>
							Oldest <i className="fa-solid fa-caret-down"></i>
						</label>
					</div>
				</div>
			)}
			<div className="sort-options-button">
				<button
					onClick={() => {
						showSortOptions
							? setShowSortOptions(false)
							: setShowSortOptions(true);
					}}
				>
					{!showSortOptions ? (
						<i className="fa-sharp fa-solid fa-sliders"></i>
					) : (
						<i className="fa-solid fa-close"></i>
					)}
				</button>
			</div>
		</div>
	);
};
