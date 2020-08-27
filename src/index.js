import React, { useState, cloneElement, useEffect } from "react";
import "./styles.css";

const ReactSlider = ({ carouselItems, ...rest }) => {
	const [active, setActive] = useState(0);
	let scrollInterval = null;

	useEffect(() => {
		scrollInterval = setTimeout(() => {
			setActive((active + 1) % carouselItems.length);
		}, 2000);
		return () => clearTimeout(scrollInterval);
	});

	return (
		<div className="carousel">
			{carouselItems.map((item, index) => {
				const activeStyle = active === index ? " visible" : "";
				return cloneElement(item, {
					...rest,
					className: `carousel-item${activeStyle}`,
					key: index
				});
			})}
		</div>
	);
};

export default ReactSlider;
