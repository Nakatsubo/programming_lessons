// d193
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
  const INPUT = lines;
  console.log(Math.floor(INPUT[1] / INPUT[0]));
  console.log(Math.floor(INPUT[1] % INPUT[0]));
});