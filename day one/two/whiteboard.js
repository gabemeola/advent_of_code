const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, '..', 'input.txt'), 'utf8')
const seen = new Set([0]);

let accum = 0;
while(true) {
  for (const value of input.split('\n')) {
    const number = Number(value);
    accum += number;
  
    if (seen.has(accum)) {
      // Found frequency lock. Return out!
      console.log('frequency lock', accum)
      return;
    }
  
    seen.add(accum);
  }
}
