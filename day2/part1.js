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

inputArr.map((command) => {
	switch (command[0]) {
		case 'forward':
			holPosition += command[1];
			break;
		case 'down':
			depth += command[1];
			break;
		case 'up':
			depth -= command[1];
			break;
		default:
			break;
	}
	// console.log(holPosition, depth);
});

console.log(holPosition * depth);
