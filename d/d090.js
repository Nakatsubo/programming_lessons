// d090
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
  const NUMBER_ARY = lines[0].split(/\s/).map(Number);
  const REDUCER = (a, b) => a + b,
        RESULT  = NUMBER_ARY.reduce(REDUCER);
  console.log(String(RESULT).split('').slice(- 1)[0]);
});