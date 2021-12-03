const { inputArr } = require('./convertInput');

// const inputArr = [
// 	'00100',
// 	'11110',
// 	'10110',
// 	'10111',
// 	'10101',
// 	'01111',
// 	'00111',
// 	'11100',
// 	'10000',
// 	'11001',
// 	'00010',
// 	'01010',
// ];

const transposedArr = [];

// create initial array
Array.from(inputArr[0]).map((ele) => transposedArr.push([ele]));

// create transposed array
for (let i = 1; i < inputArr.length; i++) {
	Array.from(inputArr[i]).map((ele, index, array) => {
		transposedArr[index].push(array[index]);
	});
}

const binaryGammaArr = [];
const binaryEpsilonArr = [];

// sort 0 and 1 inside of each array
transposedArr.map((ele) => {
	ele.sort((a, b) => a - b);
});

const halfway = Math.round(transposedArr[0].length / 2);

transposedArr.map((ele) => {
	if (ele[halfway] == 0) {
		binaryGammaArr.push(0);
		binaryEpsilonArr.push(1);
	} else {
		binaryGammaArr.push(1);
		binaryEpsilonArr.push(0);
	}
});

const gammaNum = parseInt(binaryGammaArr.join(''), 2);
const epsilonNum = parseInt(binaryEpsilonArr.join(''), 2);

console.log(gammaNum * epsilonNum);
