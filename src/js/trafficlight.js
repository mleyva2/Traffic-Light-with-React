import React from "react";
import PropTypes from "prop-types";

export function TrafficLight() {
	const [color, setColor] = React.useState("yellow");

	const redDivClass = "redLight" + (color === "red" ? " selected" : "");
	const yellowDivClass =
		"yellowLight" + (color === "yellow" ? " selected" : "");
	const greenDivClass = "greenLight" + (color === "green" ? " selected" : "");

	return (
		<div className="container">
			<div className="topTrafficLight"></div>
			<div className="trafficLight">
				<div
					className={redDivClass}
					onClick={() => {
						setColor("red");
					}}></div>
				<div
					className={yellowDivClass}
					onClick={() => {
						setColor("yellow");
					}}></div>
				<div
					className={greenDivClass}
					onClick={() => {
						setColor("green");
					}}></div>
			</div>
		</div>
	);
}

// const color = "red";
// const redDivClass = "red" + (color === "red" ? " selected" : "");
// console.log(redDivClass);
