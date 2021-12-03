const { inputArr } = require('./convertTxtToArr');

let measurements = 0;

for(let i = 1; i < inputArr.length; i++) {
  inputArr[i - 1] < inputArr[i] && measurements++;
}

console.log(measurements);