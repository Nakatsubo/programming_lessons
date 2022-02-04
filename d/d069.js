// d069
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
  const SCORES = lines[0].split(/\s/).map(Number);
  const reducer = (a, b) => a + b;
  let average = (SCORES.reduce(reducer)) / SCORES.length;
  Number.isInteger(average) !== true ? console.log(Math.round(average * 10) / 10) : console.log(`${Math.round(average * 10) / 10}.0`);
});