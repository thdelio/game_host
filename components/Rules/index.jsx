import React, { useState } from 'react';

import rulesImage from '../../public/images/image-rules-bonus.svg';
import closeIcon from '../../public/images/icon-close.svg';

const Rules = () => {
	const [openRules, setOpenRules] = useState(false);

	const Modal = () => {
		return (
			<div>
				{openRules && (
					<div
						className='justify-center items-center flex 
                         fixed inset-0 lg:p-32 bg-black bg-opacity-75 '
					>
						<div className=' lg:w-auto lg:mx-auto lg:max-w-3xl w-full h-full  max-h-screen '>
							<div
								className=' rounded-lg shadow-lg flex 
                                flex-col w-full bg-white outline-none focus:outline-none 
                                lg:w-90 lg:h-auto w-full h-full '
							>
								<div className='p-10 flex-auto'>
									<div class='grid grid-cols-1 lg:gap-4 justify-center flex'>
										<div
											class=' lg:row-span-1 lg:col-start-1
                                            lg:row-end-1  lg:row-end-2  p-10 lg:p-0
                                            font-Barlow-Semi-Condensed font-bold lg:text-4xl 
							                text-4xl text-[#3b4363] lg:justify-start flex
                                            justify-center'
										>
											RULES
										</div>

										<div class='lg:col-span-7 col-span-2 row-span-2 justify-center flex'>
											<img src={rulesImage} />
										</div>

										<div class='lg:col-start-7 lg:col-end-auto lg:row-start-1 lg:row-end-auto justify-center flex'>
											<button
												className=' transition-all duration-150 lg:pt-3 pt-40 '
												type='button'
												onClick={() => setOpenRules(false)}
												justify-center
												flex
											>
												<img src={closeIcon} />
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		);
	};

	return (
		<div class='flex justify-center lg:justify-end pt-20 lg:pt-0'>
			<Modal />
			<button
				class='bg-transparent transition ease-in-out delay-150 
                hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 
                font-Barlow-Semi-Condensed text-xl
				text-white  hover:text-white py-2 px-4 border border-white w-36
				hover:border-transparent rounded-xl'
				onClick={() => setOpenRules(true)}
			>
				RULES
			</button>
		</div>
	);
};

export default Rules;
