const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, '..', 'input.txt'), 'utf8')

const result = input.split('\n').reduce((accum, value) => {
  return accum + Number(value);
}, 0)

console.log('result', result)