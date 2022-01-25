// d046
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
  const maxValue = (a, b) => { return Math.max(a, b); } 
  console.log(NUMBER_ARY.reduce(maxValue));
});