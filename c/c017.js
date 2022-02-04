// c017
process.stdin.resume();
process.stdin.setEncoding('utf8');
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  const INPUTS        = lines,
        PARENT_CARD   = INPUTS[0].split(/\s/).map(Number),
        COUNT         = Number(INPUTS[1]);
  for (let i = 0; i < COUNT; i += 1) {
    let childCard = INPUTS[i+2].split(/\s/).map(Number);
    if (PARENT_CARD[0] > childCard[0]) {
      console.log('High');
    } else if (PARENT_CARD[0] === childCard[0] && PARENT_CARD[1] < childCard[1]) {
      console.log('High');
    } else {
      console.log('Low');
    }
  }
});