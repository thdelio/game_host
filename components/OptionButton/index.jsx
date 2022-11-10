/**
 *
 **/

import React from 'react';

const OptionButton = (props) => {
	const { options, setPlayerChoose, setClicked, setCpuChoose } = props;

	return (
		<div class='flex justify-center'>
			<button
				class={options.class + ' lg:w-32 lg:h-32 w-24 h-24'}
				onClick={() => {
					setPlayerChoose(options);
					setClicked(true);
					setCpuChoose(undefined);
				}}
			>
				<img src={options.image} class=' lg:w-14 lg:h-14 h-10 w-10' />
			</button>
		</div>
	);
};

export default OptionButton;
