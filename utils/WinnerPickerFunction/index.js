/**
 *
 **/

export const WinnerPickerFunction = (playerChoose, cpuChoose) => {
	const results = {
		scissors: 'SC',
		spock: 'SP',
		rock: 'R',
		paper: 'P',
		lizard: 'L',
		draw: 'D',
		win: 'W',
		loss: 'LS',
	};

	if (playerChoose.value == cpuChoose.value) {
		return results.draw;
	} else if (
		playerChoose.value == results.scissors &&
		cpuChoose.value == results.paper
	) {
		return results.win;
	} else if (
		playerChoose.value == results.scissors &&
		cpuChoose.value == results.spock
	) {
		return results.loss;
	} else if (
		playerChoose.value == results.scissors &&
		cpuChoose.value == results.lizard
	) {
		return results.win;
	} else if (
		playerChoose.value == results.scissors &&
		cpuChoose.value == results.rock
	) {
		return results.loss;
	} else if (
		playerChoose.value == results.paper &&
		cpuChoose.value == results.scissors
	) {
		return results.loss;
	} else if (
		playerChoose.value == results.paper &&
		cpuChoose.value == results.rock
	) {
		return results.win;
	} else if (
		playerChoose.value == results.paper &&
		cpuChoose.value == results.spock
	) {
		return results.win;
	} else if (
		playerChoose.value == results.paper &&
		cpuChoose.value == results.lizard
	) {
		return results.loss;
	} else if (
		playerChoose.value == results.rock &&
		cpuChoose.value == results.paper
	) {
		return results.loss;
	} else if (
		playerChoose.value == results.rock &&
		cpuChoose.value == results.lizard
	) {
		return results.win;
	} else if (
		playerChoose.value == results.rock &&
		cpuChoose.value == results.scissors
	) {
		return results.win;
	} else if (
		playerChoose.value == results.rock &&
		cpuChoose.value == results.spock
	) {
		return results.loss;
	} else if (
		playerChoose.value == results.lizard &&
		cpuChoose.value == results.rock
	) {
		return results.loss;
	} else if (
		playerChoose.value == results.lizard &&
		cpuChoose.value == results.spock
	) {
		return results.win;
	} else if (
		playerChoose.value == results.lizard &&
		cpuChoose.value == results.scissors
	) {
		return results.loss;
	} else if (
		playerChoose.value == results.lizard &&
		cpuChoose.value == results.paper
	) {
		return results.win;
	} else if (
		playerChoose.value == results.spock &&
		cpuChoose.value == results.lizard
	) {
		return results.loss;
	} else if (
		playerChoose.value == results.spock &&
		cpuChoose.value == results.scissors
	) {
		return results.win;
	} else if (
		playerChoose.value == results.spock &&
		cpuChoose.value == results.paper
	) {
		return results.loss;
	} else if (
		playerChoose.value == results.spock &&
		cpuChoose.value == results.rock
	) {
		return results.win;
	}
};
