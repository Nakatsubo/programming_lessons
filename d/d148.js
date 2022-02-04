// d148
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
  const INPUTS = lines,
        [A_VALUE, B_VALUE] = INPUTS[0].split(/\s/).map(Number),
        DEAD_LINE = Number(INPUTS[1]);
  A_VALUE < DEAD_LINE ? console.log(A_VALUE) : console.log(A_VALUE + B_VALUE);
});