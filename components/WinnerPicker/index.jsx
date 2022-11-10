/**
 *
 **/

import React, { useEffect, useState } from 'react';
import { WinnerPickerFunction } from '../../utils/WinnerPickerFunction';

const WinnerPicker = (props) => {
	const { setClicked, playerChoose, cpuChoose, setCpuChoose, setPlayerScore } =
		props;
	const [matchResults, setMatchResults] = useState();

	const results = {
		win: 'W',
		loss: 'LS',
		draw: 'D',
	};

	useEffect(() => {
		if (cpuChoose) {
			setMatchResults(WinnerPickerFunction(playerChoose, cpuChoose));
		}
	}, [cpuChoose]);

	useEffect(() => {
		let score =
			typeof window !== 'undefined'
				? localStorage.getItem('Score')
					? localStorage.getItem('Score')
					: 0
				: 0;
		console.log(score);
		if (score >= 0) {
			if (matchResults) {
				if (matchResults == results.win) {
					score++;
					setPlayerScore(score);
					localStorage.setItem('Score', score);
				} else if (matchResults == results.loss && score > 0) {
					score--;
					setPlayerScore(score);
					localStorage.setItem('Score', score);
				}
			}
		}
	}, [matchResults]);

	return (
		<div className='flex justify-center'>
			<div class='grid gap-6 lg:gap-1 grid-cols-2  grid-rows-1 '>
				<div class='col-start-1 col-span-2 lg:row-span-1 lg:row-end-6'>
					<div class='grid grid-cols-1 grid-rows-2 '>
						<div class={matchResults == results.win && 'animate-ping'}>
							<div
								class={
									playerChoose.class + ' lg:w-60 lg:h-60 lg:ml-4 w-28 h-28'
								}
							>
								<img
									src={playerChoose.image}
									class='lg:w-20 lg:h-20 h-10 w-10'
								/>
							</div>
						</div>
						<div
							class='font-Barlow-Semi-Condensed text-white lg:text-3xl lg-font-bold  
						lg:row-end-1 lg:pb-5 pt-5 flex justify-center'
						>
							YOU PICKED
						</div>
					</div>
				</div>

				<div class='col-end-7 lg:row-span-1 lg:row-end-6'>
					<div class='grid grid-cols-1 grid-rows-2'>
						{cpuChoose ? (
							<div class={matchResults == results.loss && 'animate-ping'}>
								<div
									class={
										cpuChoose.class +
										' lg:w-60 lg:h-60 lg:row-span-2 lg:col-span-2 lg:ml-5 w-28 h-28'
									}
								>
									<img
										src={cpuChoose.image}
										class='lg:w-20 lg:h-20 h-10 w-10'
									/>
								</div>
							</div>
						) : (
							<div
								class='bg-black rounded-full lg:w-60 lg:h-60 
						opacity-75 lg:row-span-2 lg:col-span-2 lg:ml-5 w-28 h-28'
							/>
						)}
						<div
							class='font-Barlow-Semi-Condensed text-white lg:text-3xl lg-font-bold 
						lg:row-end-1 flex justify-center lg:pb-5 pt-5'
						>
							THE HOUSE PICKED
						</div>
					</div>
				</div>

				{matchResults && (
					<div
						class='col-start-1  col-end-7 lg:col-start-auto lg:col-end-6 lg:row-span-1 
				lg:row-end-6 lg:mb-12 lg:p-28 flex justify-center  '
					>
						<div class='grid grid-flow-row auto-rows-max '>
							<div class='font-Barlow-Semi-Condensed text-6xl pb-4 font-bold text-white transition ease-in-out'>
								{matchResults == results.draw
									? "IT'S A DRAW"
									: matchResults == results.loss
									? 'YOU LOSE'
									: 'YOU WIN'}
							</div>
							<div class='flex justify-center'>
								<button
									class='bg-white transition ease-in-out delay-150 
                                hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 
                                font-Barlow-Semi-Condensed text-lg
				                py-2 px-4 border border-white w-52
				                hover:border-transparent rounded-xl text-transparent '
									onClick={() => {
										setClicked(false);
										setCpuChoose(undefined);
									}}
								>
									<div class='text-[#3b4363]'>PLAY AGAIN</div>
								</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default WinnerPicker;
