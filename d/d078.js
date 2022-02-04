// d078
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
        SCORES = INPUTS[0].split(/\s/).map(Number),
        STANDARD_SCORE = Number(INPUTS[1]);
  const REDUCER = (a, b) => a + b,
        RESULT  = SCORES.reduce(REDUCER);
  RESULT / 7 >= STANDARD_SCORE ? console.log('pass') : console.log('failure');
});