/**
 *
 **/

import React, { useState, useEffect } from 'react';
import GameTitle from '../../public/images/logo-bonus.svg';

const Header = (props) => {
	const { playerScore, setPlayerScore } = props;

	const score =
		typeof window !== 'undefined'
			? localStorage.getItem('Score')
				? localStorage.getItem('Score')
				: 0
			: 0;

	useEffect(() => {
		setPlayerScore(score);
	}, [score]);

	return (
		<div class='flex justify-center pt-2 lg:p-10'>
			<div
				class='box-border rounded-2xl max-h-full h-26 lg:h-40 w-full max-w-3xl 
			p-4 border-2 xl:border-4 border-[#606e85]'
			>
				<div class='columns-2'>
					<img src={GameTitle} class='w-16 lg:w-auto' />
					<div class='grid justify-items-end'>
						<div
							class='flex justify-center box-content rounded-lg bg-white 
						items-center h-18 w-20 lg:h-28 lg:w-40  grid '
						>
							<div
								class='row-span-1 font-Barlow-Semi-Condensed lg:text-xl
							text-sm font-semibold text-[#2a46c0]'
							>
								SCORE
							</div>
							<div
								class='flex font-Barlow-Semi-Condensed font-bold lg:text-6xl 
							text-4xl justify-center row-span-1 text-[#3b4363]'
							>
								{playerScore}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
