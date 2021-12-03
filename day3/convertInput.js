const fs = require('fs');
const text = fs.readFileSync('./input.txt').toString('utf-8');
let inputArr = text.split('\n');

module.exports = { inputArr };
