const fs = require('fs');
const text = fs.readFileSync('./input.txt').toString('utf-8');
const stringArr = text.split('\n');

const splitStrNum = stringArr.map((ele) => ele.split(' '));

const inputArr = splitStrNum.map((ele) => [ele[0], parseInt(ele[1])]);

module.exports = { inputArr };
