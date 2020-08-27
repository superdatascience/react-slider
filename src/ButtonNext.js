import React from "react";

const ButtonNext = ({ children, classes="", currentSlide, step, infinite, setActive, totalSlides, visibleSlides }) => {
	const handleClick = () => {
		const maxSlide = totalSlides - visibleSlides;
		const nextSlide = step + currentSlide;

		let newCurrentSlide = Math.min(nextSlide, maxSlide);

		if (infinite) {
			const isOnLastSlide = maxSlide === currentSlide;
			newCurrentSlide = isOnLastSlide ? 0 : newCurrentSlide;
		}

		setActive(newCurrentSlide);
	};
	return (
		<button type="button" className={classes} onClick={handleClick}>{children}</button>
	);
};

export default ButtonNext;
