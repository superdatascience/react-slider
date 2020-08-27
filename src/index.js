import React, { useState, cloneElement, useEffect, Fragment } from "react";
import "./styles.css";
import ButtonNext from "./ButtonNext";
import ButtonBack from "./ButtonBack";

const ReactSlider = ({ auto, carouselItems, ...rest }) => {
	const [active, setActive] = useState(0);
	let scrollInterval = null;

	useEffect(() => {
		if(auto) {
			scrollInterval = setTimeout(() => {
				setActive((active + 1) % carouselItems.length);
			}, 2000);
		}
		return () => clearTimeout(scrollInterval);
	});

	return (
		<div className="carousel">
			<div className="carousel-container">
				{carouselItems.map((item, index) => {
					const activeStyle = active === index ? " visible" : "";
					return cloneElement(item, {
						...rest,
						className: `carousel-item${activeStyle}`,
						key: index
					});
				})}
			</div>
			<ButtonNext currentSlide={active} setActive={setActive} totalSlides={carouselItems.length} visibleSlides={1} step={1} infinite>
				Next
			</ButtonNext>
			<ButtonBack currentSlide={active} setActive={setActive} totalSlides={carouselItems.length} visibleSlides={1} step={1} infinite>
				Back
			</ButtonBack>
		</div>
	);
};

export default ReactSlider;
