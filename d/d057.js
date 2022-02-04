// d057
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
  const INPUTS  = lines,
        RESULT  = Number(INPUTS[0]),
        PRESENT = INPUTS[1].split(/\s/).map(String);
  console.log(PRESENT[RESULT - 1]);
});