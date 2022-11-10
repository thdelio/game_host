module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				'Barlow-Semi-Condensed': ['"Barlow Semi Condensed"', 'cursive'],
			},
			backgroundImage: {
				pentagon: "url('/images/bg-pentagon.svg')",
			},
		},
		linearBorderGradients: {
			directions: {
				t: 'to top',
				tr: 'to top right',
				r: 'to right',
				br: 'to bottom right',
				b: 'to bottom',
				bl: 'to bottom left',
				l: 'to left',
				tl: 'to top left',
			},
			colors: {
				rock: ['#dc2e4e', '#dd405d'],
				scissors: ['#ec9e0e', '#eca922'],
				spock: ['#40b9ce', '#52bed1'],
				paper: ['#4865f4', '#5671f5'],
				lizard: ['#834fe3', '#8c5de5'],
			},
			background: {
				'gray-50': '#F9FAFB',
			},
			border: {
				1: '1px',
				2: '2px',
				4: '25px',
				8: '8px',
			},
		},
	},
	variants: {
		linearBorderGradients: ['responsive', 'hover', 'dark'],
	},
	plugins: [require('tailwindcss-border-gradient-radius')],
};
