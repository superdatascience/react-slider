import React from "react";

const ButtonBack = ({ children, classes="", currentSlide, step, infinite, setActive, totalSlides, visibleSlides }) => {
	const handleClick = () => {
		const maxSlide = totalSlides - visibleSlides;
		let newCurrentSlide = Math.max(currentSlide - step,0);

		if (infinite) {
		  const isOnFirstSlide = currentSlide === 0;
		  newCurrentSlide = isOnFirstSlide ? maxSlide : newCurrentSlide;
		}

		setActive(newCurrentSlide);
	};
	return (
		<button type="button" className={classes} onClick={handleClick}>{children}</button>
	);
};

export default ButtonBack;
