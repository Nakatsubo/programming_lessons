// c014
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
  const INPUTS    = lines;
        INPUT     = INPUTS[0].split(/\s/).map(Number),
        BOX_COUNT = INPUT[0],
        RADIUS    = INPUT[1],
        DIAMETER  = RADIUS * 2;
  for (let i = 0; i < BOX_COUNT; i += 1) {
    let tmp = INPUTS[i+1].split(/\s/).map(Number);
    if (tmp[0] >= DIAMETER && tmp[1] >= DIAMETER && tmp[2] >= DIAMETER) { console.log(i + 1); }
  }
});