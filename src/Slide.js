import React, { Fragment, cloneElement } from "react";

const Slide = ({  children, currentSlide, index, visibleSlides, ...rest }) => {
	const activeStyle = index >= currentSlide && index < currentSlide + visibleSlides ? " visible" : "";
	return (
		<Fragment>
			{cloneElement(children, {
				...rest,
				className: `carousel-item${activeStyle}`
			})}
		</Fragment>
	);
};

export default Slide;
