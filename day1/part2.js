const { inputArr } = require('./convertTxtToArr');

let numOfIncreased = 0;

// compare the current value and three ahead value
for (let i = 3; i < inputArr.length; i++) {
	inputArr[i - 3] < inputArr[i] && numOfIncreased++;
}

console.log(numOfIncreased);
