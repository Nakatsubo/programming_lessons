// d042
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
        setA   = INPUTS[0].split(/\s/).map(Number),
        setB   = INPUTS[1].split(/\s/).map(Number);
  console.log(setA[0] * setB[1] - setA[1] * setB[0]);
});