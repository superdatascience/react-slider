import React, { useState, useEffect } from "react";
import ButtonNext from "./ButtonNext";
import ButtonBack from "./ButtonBack";
import Slide from "./Slide";
import "./styles.css";

const ReactSlider = ({ auto, carouselItems, infinite, visibleSlides = 1, step = 1 }) => {
	const [active, setActive] = useState(0);
	let scrollInterval = null;

	useEffect(() => {
		if (auto) {
			scrollInterval = setTimeout(() => {
				setActive((active + 1) % carouselItems.length);
			}, 2000);
		}
		return () => clearTimeout(scrollInterval);
	});

	return (
		<div className="carousel">
			<div className="carousel-container">
				{carouselItems.map((item, index) => <Slide key={index} currentSlide={active} visibleSlides={visibleSlides} index={index}>{item}</Slide>)}
			</div>
			<ButtonNext currentSlide={active} setActive={setActive} totalSlides={carouselItems.length} visibleSlides={visibleSlides} step={step} infinite={infinite}>
				Next
			</ButtonNext>
			<ButtonBack currentSlide={active} setActive={setActive} totalSlides={carouselItems.length} visibleSlides={visibleSlides} step={step} infinite={infinite}>
				Back
			</ButtonBack>
		</div>
	);
};

export default ReactSlider;
