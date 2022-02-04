// d061
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
  const COUNT = Number(lines[0]);
  COUNT !== 0 ? console.log(COUNT * 3) : console.log(1);
});