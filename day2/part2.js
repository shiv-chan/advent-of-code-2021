const { inputArr } = require('./convertInput');

// const inputArr = [
// 	['forward', 5],
// 	['down', 5],
// 	['forward', 8],
// 	['up', 3],
// 	['down', 8],
// 	['forward', 2],
// ];

let holPosition = 0;
let depth = 0;
let aim = 0;

inputArr.map((command) => {
	if (command[0] === 'forward') {
		holPosition += command[1];
		if (aim > 0) depth += aim * command[1];
	} else if (command[0] === 'down') {
		aim += command[1];
	} else if (command[0] === 'up') {
		aim -= command[1];
	}
	// console.log(holPosition, aim, depth);
});

console.log(holPosition * depth);
