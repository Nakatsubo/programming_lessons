// d117
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
        COUNT  = Number(INPUTS[0]),
        NUMBER_ARY = INPUTS[1].split(/\s/).map(Number);
  const REDUCER = (a, b) => a + b,
        RESULT  = NUMBER_ARY.reduce(REDUCER);
  console.log(RESULT);
});