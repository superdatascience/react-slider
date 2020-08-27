import React, { Fragment, useState } from 'react';
import ReactSlider from '../src';

export default { title: 'ExampleComponent' };

export const Example = () => {
	return (
		<Fragment>
			<ReactSlider
				carouselItems={[
					<div>carousel item 1</div>,
					<div>carousel item 2</div>,
					<div>carousel item 3</div>
				]}
			/>
		</Fragment>
	);
}
