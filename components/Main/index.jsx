/**
 *
 **/

import React, { useState, useEffect } from 'react';
import OptionButton from '../OptionButton';
import WinnerPicker from '../WinnerPicker';
import scissors from '../../public/images/icon-scissors.svg';
import spock from '../../public/images/icon-spock.svg';
import paper from '../../public/images/icon-paper.svg';
import lizard from '../../public/images/icon-lizard.svg';
import rockIcon from '../../public/images/icon-rock.svg';
/* import Pentagon from '../../public/images/bg-pentagon.svg'; */

const Main = (props) => {
	const { setPlayerScore } = props;
	const [playerChoose, setPlayerChoose] = useState();
	const [clicked, setClicked] = useState(false);
	const [cpuChoose, setCpuChoose] = useState();

	const options = {
		ROCK: {
			class:
				'border-gradient-br-rock-gray-50 gradient-border-4 rounded-full flex justify-center inline-flex items-center shadow-2xl  shadow-inner box-container ransition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300',
			value: 'R',
			image: rockIcon,
		},
		SCISSORS: {
			class:
				'border-gradient-br-scissors-gray-50 gradient-border-4 rounded-full flex justify-center inline-flex items-center shadow-2xl  shadow-inner box-container ransition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300',
			value: 'SC',
			image: scissors,
		},
		SPOCK: {
			class:
				'border-gradient-br-spock-gray-50 gradient-border-4 rounded-full flex justify-center inline-flex items-center shadow-2xl  shadow-inner box-container ransition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300',
			value: 'SP',
			image: spock,
		},
		PAPER: {
			class:
				'border-gradient-br-paper-gray-50 gradient-border-4 rounded-full flex justify-center inline-flex items-center shadow-2xl  shadow-inner box-container ransition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300',
			value: 'P',
			image: paper,
		},
		LIZARD: {
			class:
				'border-gradient-br-lizard-gray-50 gradient-border-4 rounded-full flex justify-center inline-flex items-center shadow-2xl  shadow-inner box-container ransition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300',
			value: 'L',
			image: lizard,
		},
	};

	useEffect(() => {
		const value = Object.values(options);
		setTimeout(function () {
			setCpuChoose(value[Math.floor(Math.random() * value.length)]);
		}, 3000);
	}, [playerChoose]);

	return (
		<div class='flex justify-center pt-14 lg:p-0'>
			{clicked ? (
				<WinnerPicker
					setClicked={setClicked}
					playerChoose={playerChoose}
					cpuChoose={cpuChoose}
					setCpuChoose={setCpuChoose}
					setPlayerScore={setPlayerScore}
				/>
			) : (
				<div class='grid bg-pentagon bg-cover '>
					<div class='grid-rows-1 '>
						<OptionButton
							options={options.SCISSORS}
							setPlayerChoose={setPlayerChoose}
							setClicked={setClicked}
							setCpuChoose={setCpuChoose}
						/>
					</div>

					<div class='grid-rows-2 '>
						<div class='columns-2 flex space-x-32 lg:space-x-40'>
							<div>
								<OptionButton
									options={options.SPOCK}
									setPlayerChoose={setPlayerChoose}
									setClicked={setClicked}
									setCpuChoose={setCpuChoose}
								/>
							</div>
							<div>
								<OptionButton
									options={options.PAPER}
									setPlayerChoose={setPlayerChoose}
									setClicked={setClicked}
									setCpuChoose={setCpuChoose}
								/>
							</div>
						</div>
					</div>

					<div class='grid-rows-3 lg:pt-8 pt-6 '>
						<div class='columns-2 flex justify-around '>
							<div>
								<OptionButton
									options={options.LIZARD}
									setPlayerChoose={setPlayerChoose}
									setClicked={setClicked}
									setCpuChoose={setCpuChoose}
								/>
							</div>
							<div>
								<OptionButton
									options={options.ROCK}
									setPlayerChoose={setPlayerChoose}
									setClicked={setClicked}
									setCpuChoose={setCpuChoose}
								/>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Main;
