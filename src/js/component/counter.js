import React from "react";
import propTypes from "prop-types";

export const Counter = props => {
	return (
		<div className="row align-items:center">
			<div className="far fa-clock fa-2x"></div>
			<div className="contador1">{props.numberOne}</div>
			<div className="contador1">{props.numberTwo}</div>
			<div className="contador1">{props.numberThree}</div>
			<div className="contador1">{props.numberFour}</div>
			<div className="contador1">{props.numberFive}</div>
			<div className="contador1">{props.numberSix}</div>
		</div>
	);
};
Counter.propTypes = {
	numberOne: propTypes.number,
	numberTwo: propTypes.number,
	numberThree: propTypes.number,
	numberFour: propTypes.number,
	numberFive: propTypes.number,
	numberSix: propTypes.number
};
