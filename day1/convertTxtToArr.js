const fs = require('fs');
const text = fs.readFileSync('./input.txt').toString('utf-8');
let stringArr = text.split('\n');
const inputArr = stringArr.map((ele) => parseInt(ele));

module.exports = { inputArr };
